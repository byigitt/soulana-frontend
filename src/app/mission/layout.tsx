import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Misyonumuz",
  },
  description:
    "Blokzincir teknolojisiyle bağış kültürünü dönüştürme misyonumuzu ve kalıcı küresel etki yaratma vizyonumuzu keşfedin.",
  keywords: [
    "misyon",
    "vizyon",
    "değerler",
    "blokzincir bağış",
    "sosyal etki",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/mission",
    siteName: "Soulana",
    title: "Misyonumuz | Soulana",
    description:
      "Blokzincir teknolojisiyle bağış kültürünü dönüştürme misyonumuzu keşfedin.",
    images: [
      {
        url: "/images/og/mission.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Misyonumuz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Misyonumuz | Soulana",
    description:
      "Blokzincir teknolojisiyle bağış kültürünü dönüştürme misyonumuzu keşfedin.",
    images: ["/images/og/mission.jpg"],
    creator: "@Soulana",
  },
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
