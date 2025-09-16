import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Token Ödülleri",
  },
  description:
    "Soulana'nın token ödül programını ve bağış yaparak token kazanmanın yollarını keşfedin.",
  keywords: [
    "tokenlar",
    "ödüller",
    "kriptopara",
    "blokzincir",
    "bağış",
    "kazanç",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/token-rewards",
    siteName: "Soulana",
    title: "Token Ödülleri | Soulana",
    description:
      "Soulana'nın token ödül programını keşfedin.",
    images: [
      {
        url: "/images/og/token-rewards.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Token Ödülleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Ödülleri | Soulana",
    description:
      "Soulana'nın token ödül programını keşfedin.",
    images: ["/images/og/token-rewards.jpg"],
    creator: "@Soulana",
  },
};

export default function TokenRewardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
