import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/mongodb";
import Admin from "@/models/Admin";
const twilio = require("twilio");

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID!;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN!;
const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM!;
const ADMIN_WHATSAPP_TO = process.env.ADMIN_WHATSAPP_TO!;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Generate a random 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();

      // Send code to WhatsApp using Twilio
      await client.messages.create({
        body: `Your admin verification code is: ${code}`,
        from: `whatsapp:${TWILIO_WHATSAPP_FROM}`,
        to: `whatsapp:${ADMIN_WHATSAPP_TO}`,
      });

      // Store code in MongoDB for verification
      await connectToDatabase();
      await Admin.updateOne(
        { username: user.email },
        { $set: { verificationCode: code, codeExpires: Date.now() + 5 * 60 * 1000 } }, // expires in 5 min
        { upsert: true }
      );

      // Allow sign-in to proceed to code verification step
      return true;
    },
  },
  // ...you can add callbacks, database, etc. here...
});
