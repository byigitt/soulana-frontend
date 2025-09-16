import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Nasıl Çalışır",
  },
  description:
    "Soulana'nın blokzincir teknolojisini kullanarak bağış deneyimini nasıl şeffaf ve verimli hale getirdiğini öğrenin.",
  keywords: [
    "blokzincir",
    "bağış",
    "solana",
    "şeffaflık",
    "güvenlik",
    "bağış süreci",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/how-it-works",
    siteName: "Soulana",
    title: "Nasıl Çalışır | Soulana",
    description:
      "Soulana'nın blokzincir teknolojisini kullanarak bağış deneyimini nasıl dönüştürdüğünü öğrenin.",
    images: [
      {
        url: "/images/og/how-it-works.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Nasıl Çalışır",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasıl Çalışır | Soulana",
    description:
      "Soulana'nın blokzincir teknolojisini kullanarak bağış deneyimini nasıl dönüştürdüğünü öğrenin.",
    images: ["/images/og/how-it-works.jpg"],
    creator: "@Soulana",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
