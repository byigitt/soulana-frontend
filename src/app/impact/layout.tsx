import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Etkimiz",
  },
  description:
    "Blokzincir destekli bağışların gerçek dünya etkisini görün. Başarı hikâyelerini ve küresel erişim metriklerini keşfedin.",
  keywords: [
    "etki",
    "yardım",
    "blokzincir",
    "bağış",
    "başarı hikayeleri",
    "metrikler",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/impact",
    siteName: "Soulana",
    title: "Etkimiz | Soulana",
    description:
      "Blokzincir destekli bağışların gerçek dünya etkisini görün.",
    images: [
      {
        url: "/images/og/impact.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Etkimiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etkimiz | Soulana",
    description:
      "Blokzincir destekli bağışların gerçek dünya etkisini görün.",
    images: ["/images/og/impact.jpg"],
    creator: "@Soulana",
  },
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
