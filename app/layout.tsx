// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";

export const metadata: Metadata = {
  title: "MARTY ≠ THERAPY — Just MARTY",
  description:
    "Quiet tech for loud minds. Voice-first, neuro-inclusive. Built different.",
  openGraph: {
    siteName: "theMARTYapp",
    images: [{ url: "/branding/social-opengraph.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARTY ≠ THERAPY — Just MARTY",
    description:
      "Quiet tech for loud minds. Voice-first, neuro-inclusive. Built different.",
    images: ["/branding/social-opengraph.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white antialiased">
        <TopNav />
        {children}
      </body>
    </html>
  );
}