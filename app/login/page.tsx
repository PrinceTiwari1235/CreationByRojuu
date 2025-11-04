"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#b76b80] to-[#9b5166] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-zinc-800 mb-2">Admin Login</h1>
        <p className="text-center text-zinc-600 mb-8">
          Sign in with Google to manage your creations.<br />
          You will receive a WhatsApp code for verification.
        </p>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-[#b76b80] hover:bg-[#a05a6f] text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
