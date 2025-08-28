import "./globals.css";
import type { ReactNode } from "react";
import TopNav from "@/components/TopNav";

export const metadata = {
  title: "MARTY ≠ THERAPY — Just MARTY",
  description: "Quiet tech for loud minds. Voice-first, neuro-inclusive. Built different.",
  openGraph: {
    title: "MARTY ≠ THERAPY — Just MARTY",
    description: "Quiet tech for loud minds.",
    images: [{ url: "/branding/social-opengraph.png", width: 1200, height: 630 }],
    siteName: "theMARTYapp",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARTY ≠ THERAPY — Just MARTY",
    images: ["/branding/social-opengraph.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white antialiased">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
