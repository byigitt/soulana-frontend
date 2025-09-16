import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";
import { WalletProvider } from "@/contexts/wallet-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://soulana.wiredium.com"),
  title: {
    template: "%s | Soulana",
    default: "Soulana - Blokzincir Destekli Bağış Deneyimi",
  },
  description:
    "Bağış deneyimini blokzincir teknolojisiyle dönüştürün. Güvenli ve şeffaf bağışlar yapın, etkinizi anlık olarak takip edin.",
  keywords: [
    "bağış",
    "blokzincir",
    "solana",
    "şeffaflık",
    "toplumsal etki",
    "yardım",
  ],
  authors: [{ name: "Soulana Ekibi" }],
  creator: "Soulana",
  publisher: "Soulana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://soulana.wiredium.com",
    siteName: "Soulana",
    title: "Soulana - Blokzincir Destekli Bağış Deneyimi",
    description:
      "Bağış deneyimini blokzincir teknolojisiyle dönüştürün. Güvenli ve şeffaf bağışlar yapın, etkinizi anlık olarak takip edin.",
    images: [
      {
        url: "/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Soulana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulana - Blokzincir Destekli Bağış Deneyimi",
    description:
      "Bağış deneyimini blokzincir teknolojisiyle dönüştürün. Güvenli ve şeffaf bağışlar yapın, etkinizi anlık olarak takip edin.",
    images: ["/images/og/default.jpg"],
    creator: "@Soulana",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <WalletProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
