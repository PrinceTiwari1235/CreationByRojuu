import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await connectToDatabase();
  const { username, password } = await req.json();

  const admin = await Admin.findOne({ username });
  if (!admin) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // You may want to set a session or JWT here
  return NextResponse.json({ success: true });
}
