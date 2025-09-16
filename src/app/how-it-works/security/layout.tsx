import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Güvenlik Özellikleri",
  description:
    "Soulana'nın güçlü güvenlik önlemlerini ve bağışlarınızı blokzincir teknolojisiyle nasıl koruduğunu öğrenin.",
  keywords: [
    "blokzincir güvenliği",
    "bağış güvenliği",
    "kripto güvenliği",
    "güvenli bağış",
    "işlem güvenliği",
  ],
  openGraph: {
    title: "Güvenlik Özellikleri | Soulana",
    description:
      "Soulana'nın güçlü güvenlik önlemlerini ve bağışlarınızı blokzincir teknolojisiyle nasıl koruduğunu öğrenin.",
    images: [
      {
        url: "/images/og/security.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana - Güvenlik Özellikleri",
      },
    ],
  },
  twitter: {
    title: "Güvenlik Özellikleri | Soulana",
    description:
      "Soulana'nın güçlü güvenlik önlemlerini ve bağışlarınızı blokzincir teknolojisiyle nasıl koruduğunu öğrenin.",
    images: ["/images/og/security.jpg"],
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
