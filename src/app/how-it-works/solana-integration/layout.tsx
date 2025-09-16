import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solana Entegrasyonu",
  description:
    "Soulana'nın Solana blokzincirini nasıl kullandığını ve bağışları hızlı, güvenli ve şeffaf hale getirdiğini keşfedin.",
  keywords: [
    "solana blokzinciri",
    "kripto bağış",
    "blokzincir entegrasyonu",
    "akıllı sözleşmeler",
    "web3 bağış",
  ],
  openGraph: {
    title: "Solana Entegrasyonu | Soulana",
    description:
      "Soulana'nın Solana blokzincirini nasıl kullandığını ve bağışları hızlı, güvenli ve şeffaf hale getirdiğini keşfedin.",
    images: [
      {
        url: "/images/og/solana-integration.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Solana Entegrasyonu",
      },
    ],
  },
  twitter: {
    title: "Solana Entegrasyonu | Soulana",
    description:
      "Soulana'nın Solana blokzincirini nasıl kullandığını ve bağışları hızlı, güvenli ve şeffaf hale getirdiğini keşfedin.",
    images: ["/images/og/solana-integration.jpg"],
  },
};

export default function SolanaIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
