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
        <div className="min-h-screen bg-black text-white font-sans tracking-tight selection:bg-white selection:text-black">
          <TopNav />
          <main className="relative">{children}</main>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 opacity-50"
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px, 40px 40px",
            }}
          />
        </div>
      </body>
    </html>
  );
}