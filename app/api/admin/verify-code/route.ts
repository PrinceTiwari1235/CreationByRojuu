import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(req: Request) {
  await connectToDatabase();
  const { code } = await req.json();

  // Find admin with matching code and not expired
  const admin = await Admin.findOne({
    verificationCode: code,
    codeExpires: { $gt: Date.now() },
  });

  if (!admin) {
    return NextResponse.json({ error: "Invalid or expired code" }, { status: 401 });
  }

  // Optionally clear the code after successful verification
  await Admin.updateOne(
    { _id: admin._id },
    { $unset: { verificationCode: "", codeExpires: "" } }
  );

  // You may want to set a session or JWT here for persistent login

  return NextResponse.json({ success: true });
}
