import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Background } from "@/components/ui/Background";
import { AnimatedCursor } from "@/components/ui/AnimatedCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tweya | Solo Developer",
  description: "My Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <AnimatedCursor />
          <Background />
          <Navbar />
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
