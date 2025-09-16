import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bağış Süreci",
  description:
    "Soulana'da bağış sürecinin nasıl işlediğini keşfedin; projeleri seçmekten etkinizi takip etmeye kadar tüm adımları öğrenin.",
  keywords: [
    "bağış süreci",
    "yardımseverlik",
    "blokzincir bağışı",
    "şeffaflık",
    "etki takibi",
  ],
  openGraph: {
    title: "Bağış Süreci | Soulana",
    description:
      "Soulana'da bağış sürecinin nasıl işlediğini keşfedin; projeleri seçmekten etkinizi takip etmeye kadar tüm adımları öğrenin.",
    images: [
      {
        url: "/images/og/donation-process.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Bağış Süreci",
      },
    ],
  },
  twitter: {
    title: "Bağış Süreci | Soulana",
    description:
      "Soulana'da bağış sürecinin nasıl işlediğini keşfedin; projeleri seçmekten etkinizi takip etmeye kadar tüm adımları öğrenin.",
    images: ["/images/og/donation-process.jpg"],
  },
};

export default function DonationProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
