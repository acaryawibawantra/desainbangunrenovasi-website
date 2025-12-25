import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INSIGN | Building Dreams, Crafting Spaces",
  description: "INSIGN brings architectural vision to life through precision craftsmanship and thoughtful design. Professional contractor services in Jakarta: Bangun Rumah, Renovasi, Jasa Arsitek, Kontraktor.",
  keywords: ["kontraktor", "arsitek", "bangun rumah", "renovasi", "Jakarta", "konstruksi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
