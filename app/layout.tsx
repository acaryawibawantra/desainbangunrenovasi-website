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
  metadataBase: new URL("https://insign.id"),
  title: {
    default: "INSIGN | Building Dreams, Crafting Spaces",
    template: "%s | INSIGN",
  },
  description: "INSIGN brings architectural vision to life through precision craftsmanship and thoughtful design. Professional contractor services in Jakarta: Bangun Rumah, Renovasi, Jasa Arsitek, Kontraktor.",
  keywords: ["kontraktor", "arsitek", "bangun rumah", "renovasi", "Jakarta", "konstruksi", "interior design", "arsitektur", "bangun ruko"],
  authors: [{ name: "INSIGN" }],
  creator: "INSIGN",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://insign.id",
    title: "INSIGN | Building Dreams, Crafting Spaces",
    description: "Professional contractor and architectural services in Jakarta. We build dreams and craft spaces with precision.",
    siteName: "INSIGN",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "INSIGN - Building Dreams, Crafting Spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INSIGN | Building Dreams, Crafting Spaces",
    description: "Professional contractor and architectural services in Jakarta.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
