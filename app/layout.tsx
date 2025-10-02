import React from "react";
import "./globals.css";
import TopNav from "@/components/TopNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MARTY ≠ THERAPY — Just MARTY",
  description:
    "Quiet tech for loud minds. Voice-first, neuro-inclusive. Built different.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link rel="icon" href="/branding/favicon.ico" sizes="any" />
      </head>
      <body className="bg-black text-white antialiased">
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}