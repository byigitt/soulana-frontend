import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Ekibimiz",
  },
  description:
    "Soulana'nın arkasındaki tutkulu ekiple tanışın. Bağışta blokzincir inovasyonuna yön veren uzmanlarımızı ve danışmanlarımızı keşfedin.",
  keywords: [
    "ekip",
    "uzmanlar",
    "danışmanlar",
    "blokzincir",
    "bağış",
    "kariyer",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/team",
    siteName: "Soulana",
    title: "Ekibimiz | Soulana",
    description: "Soulana'nın arkasındaki tutkulu ekiple tanışın.",
    images: [
      {
        url: "/images/og/team.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Ekibimiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekibimiz | Soulana",
    description: "Soulana'nın arkasındaki tutkulu ekiple tanışın.",
    images: ["/images/og/team.jpg"],
    creator: "@Soulana",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
