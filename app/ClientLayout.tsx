"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CustomizeOrder from "./components/CustomizeOrder";
import { useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [customizeOpen, setCustomizeOpen] = useState(false);

  return (
    <>
      <Nav onOpenCustomizeOrder={() => setCustomizeOpen(true)} />
      <main className="w-full">{children}</main>
      <Footer />
      <CustomizeOrder open={customizeOpen} onClose={() => setCustomizeOpen(false)} />
    </>
  );
}
