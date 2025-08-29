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
      <head>
        <link rel="icon" href="/branding/favicon.ico" sizes="any" />
        {/* Theme colors for supported browsers */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen bg-black text-white font-sans tracking-tight selection:bg-white selection:text-black">
          <TopNav />
          <main className="relative">{children}</main>
          <footer className="py-6 text-center text-xs text-white/40">
            Built by Eric Adler — the MARTY app 
          </footer>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 opacity-50 grid-overlay"
          />
        </div>
      </body>
    </html>
  );
}