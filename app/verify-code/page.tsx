"use client";
import { useState } from "react";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const res = await fetch("/api/admin/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    if (res.ok) {
      setSuccess(true);
    } else {
      const data = await res.json();
      setError(data.error || "Invalid code");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Enter WhatsApp Verification Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Enter code"
          maxLength={6}
          required
        />
        <button type="submit" disabled={loading}>
          Verify
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Code verified! You are logged in.</p>}
    </div>
  );
}
