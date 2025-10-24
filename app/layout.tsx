import React from "react";
import "./globals.css";

export const metadata = {
  title: "The MARTY App",
  description: "MARTY ≠ THERAPY — An emotionally fluent modern ecosystem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}