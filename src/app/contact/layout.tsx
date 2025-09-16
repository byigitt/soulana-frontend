import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Bizimle İletişime Geçin",
  },
  description:
    "Ekibimizle iletişime geçin. Blokzincir destekli bağış hakkında tüm sorularınız için buradayız.",
  keywords: [
    "iletişim",
    "destek",
    "yardım",
    "bağış",
    "blokzincir",
    "solana",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/contact",
    siteName: "Soulana",
    title: "Bizimle İletişime Geçin | Soulana",
    description:
      "Ekibimizle iletişime geçin. Sorularınız için buradayız.",
    images: [
      {
        url: "/images/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Bizimle İletişime Geçin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizimle İletişime Geçin | Soulana",
    description:
      "Ekibimizle iletişime geçin. Sorularınız için buradayız.",
    images: ["/images/og/contact.jpg"],
    creator: "@Soulana",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
