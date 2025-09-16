"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

type FooterLink = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterLinks = {
  [key: string]: FooterSection;
};

const footerLinks: FooterLinks = {
  product: {
    title: "Ürün",
    links: [
      { name: "Ana Sayfa", href: "/" },
      { name: "Bağış Süreci", href: "/how-it-works/donation-process" },
      { name: "Solana Entegrasyonu", href: "/how-it-works/solana-integration" },
      { name: "Güvenlik", href: "/security" },
      { name: "Etki", href: "/impact" },
    ],
  },
  support: {
    title: "Destek",
    links: [
      { name: "Misyon", href: "/mission" },
      { name: "SSS", href: "/contact" },
      { name: "Ofisler", href: "/contact" },
      { name: "İletişim", href: "/contact" },
    ],
  },
  legal: {
    title: "Yasal",
    links: [
      { name: "Gizlilik Politikası", href: "/legal/privacy-policy" },
      { name: "Kullanım Şartları", href: "/legal/terms-of-service" },
      { name: "Çerez Ayarları", href: "/legal/cookie-settings" },
      { name: "Erişilebilirlik", href: "/legal/accessibility" },
    ],
  },
  social: {
    title: "Sosyal",
    links: [
      { name: "Twitter", href: "https://twitter.com", icon: Twitter },
      { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
      { name: "Facebook", href: "https://facebook.com", icon: Facebook },
      { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    ],
  },
};

export function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-white/50 dark:bg-black/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className={key === "social" ? "col-span-2 md:col-span-1" : ""}>
              <h3 className="font-semibold text-red-950 dark:text-rose-50 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.icon ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-800/60 dark:text-rose-100/60 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        {link.icon && <link.icon className="h-5 w-5" />}
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-red-800/60 dark:text-rose-100/60 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-red-800/60 dark:text-rose-100/60">
              © {year} Soulana. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/legal/terms-of-service"
                className="text-red-800/60 dark:text-rose-100/60 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Şartlar
              </Link>
              <Link
                href="/legal/privacy-policy"
                className="text-red-800/60 dark:text-rose-100/60 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Gizlilik
              </Link>
              <Link
                href="/legal/cookie-settings"
                className="text-red-800/60 dark:text-rose-100/60 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Çerezler
              </Link>
              <Link
                href="/legal/accessibility"
                className="text-red-800/60 dark:text-rose-100/60 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Erişilebilirlik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
