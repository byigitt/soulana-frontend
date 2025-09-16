import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Bağış Yap",
  },
  description:
    "Solana destekli yardım projelerimize bağış yaparak fark yaratın. Katkınız olumlu değişime güç verir.",
  keywords: [
    "bağış",
    "yardım",
    "blokzincir",
    "bağış kampanyası",
    "paylaşma",
    "solana",
    "kriptopara",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/donate",
    siteName: "Soulana",
    title: "Bağış Yap | Soulana",
    description:
      "Solana destekli yardım projelerimize bağış yaparak fark yaratın.",
    images: [
      {
        url: "/images/og/donate.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Bağış Yap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bağış Yap | Soulana",
    description:
      "Solana destekli yardım projelerimize bağış yaparak fark yaratın.",
    images: ["/images/og/donate.jpg"],
    creator: "@Soulana",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
