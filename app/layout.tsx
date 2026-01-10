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
  metadataBase: new URL("https://askra.id"),
  title: {
    default: "ASKRA | Desain, Bangun, Renovasi",
    template: "%s | ASKRA",
  },
  description: "ASKRA (CV ADI SARANA KREASI) mewujudkan visi arsitektur melalui pengerjaan presisi dan desain yang dipikirkan dengan matang. Layanan kontraktor profesional di Jakarta: Bangun Rumah, Renovasi, Jasa Arsitek, Kontraktor.",
  keywords: ["kontraktor", "arsitek", "bangun rumah", "renovasi", "Jakarta", "konstruksi", "interior design", "arsitektur", "bangun ruko"],
  authors: [{ name: "ASKRA" }],
  creator: "ASKRA",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://askra.id",
    title: "ASKRA | Desain, Bangun, Renovasi",
    description: "Layanan kontraktor dan arsitektur profesional di Jakarta. Kami membangun impian dan menciptakan ruang dengan presisi.",
    siteName: "ASKRA",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "ASKRA - Desain, Bangun, Renovasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASKRA | Desain, Bangun, Renovasi",
    description: "Layanan kontraktor dan arsitektur profesional di Jakarta.",
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
