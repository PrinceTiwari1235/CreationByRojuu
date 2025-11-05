import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creation for You - Next.js",
  description: "A small Next.js site inspired by a static project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-white text-zinc-800 dark:bg-zinc-900 dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SpeedInsights />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
