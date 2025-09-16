import React from "react";
import { Shield, Lock, Eye, Key } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Çok Katmanlı Koruma",
    description: "Her işlemi ileri seviye şifreleme ve güvenlik protokolleri korur.",
    details: [
      "Uçtan uca şifreleme",
      "Çok imzalı cüzdanlar",
      "Gerçek zamanlı izleme"
    ]
  },
  {
    icon: Lock,
    title: "Denetim Güvencesi",
    description: "Denetlenmiş ve doğrulanmış Solana tünelleri fonların güvenli dağıtımını sağlar.",
    details: [
      "Düzenli güvenlik denetimleri",
      "Otomatik testler",
      "Ödül avı programı"
    ]
  },
  {
    icon: Eye,
    title: "İşlem İzleme",
    description: "Şüpheli faaliyetleri tespit edip önlemek için 7/24 izleme sistemi.",
    details: [
      "Gerçek zamanlı uyarılar",
      "Dolandırıcılık tespiti",
      "Faaliyet kaydı"
    ]
  },
  {
    icon: Key,
    title: "Erişim Kontrolü",
    description: "Detaylı yetkilendirmeler ve rol tabanlı erişim kontrolü.",
    details: [
      "Rol tabanlı erişim",
      "İki faktörlü kimlik doğrulama",
      "Oturum yönetimi"
    ]
  }
];

export const SecurityFeaturesSection = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50 text-center mb-12">
        Güvenlik Özellikleri
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.title}
            className="group bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-8 transition-all duration-300 hover:scale-105"
          >
            <feature.icon className="w-12 h-12 text-red-600 dark:text-red-400 mb-4" />
            <h3 className="text-xl font-bold text-red-950 dark:text-rose-50 mb-2">
              {feature.title}
            </h3>
            <p className="text-red-800/80 dark:text-rose-100/80 mb-4">
              {feature.description}
            </p>
            <ul className="space-y-2">
              {feature.details.map((detail) => (
                <li key={detail} className="flex items-center gap-2 text-red-800/80 dark:text-rose-100/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
