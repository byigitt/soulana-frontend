import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Soulana",
    default: "Yasal Bilgiler",
  },
  description: "Soulana platformu için yasal bilgiler, hizmet şartları, gizlilik politikası ve erişilebilirlik bildirimi.",
  keywords: ["yasal", "şartlar", "gizlilik", "erişilebilirlik", "çerezler", "politika"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com/legal",
    siteName: "Soulana",
    title: "Yasal Bilgiler | Soulana",
    description: "Soulana platformuna ait yasal bilgiler ve politikalar.",
    images: [
      {
        url: "/images/og/legal.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Yasal Bilgiler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasal Bilgiler | Soulana",
    description: "Soulana platformuna ait yasal bilgiler ve politikalar.",
    images: ["/images/og/legal.jpg"],
    creator: "@Soulana",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 