import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Mağaza",
  },
  description:
    "Soulana'ya özel ürünleri keşfedin ve tokenlarınızı eşsiz ödüller ile koleksiyon ürünlerine dönüştürün.",
  keywords: [
    "mağaza",
    "ürünler",
    "ödüller",
    "tokenlar",
    "koleksiyon",
    "nft",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/store",
    siteName: "Soulana",
    title: "Mağaza | Soulana",
    description:
      "Soulana'ya özel ürünleri keşfedin ve tokenlarınızı ödüllere dönüştürün.",
    images: [
      {
        url: "/images/og/store.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Mağaza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mağaza | Soulana",
    description:
      "Soulana'ya özel ürünleri keşfedin ve tokenlarınızı ödüllere dönüştürün.",
    images: ["/images/og/store.jpg"],
    creator: "@Soulana",
  },
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
