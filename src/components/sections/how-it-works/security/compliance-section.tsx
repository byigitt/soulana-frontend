import React from "react";
import { CheckCircle, FileCheck, Globe, ShieldCheck } from "lucide-react";

const complianceItems = [
  {
    icon: CheckCircle,
    title: "KYC/KYB Uyumu",
    description: "Müşterini Tanı ve İşini Tanı süreçlerinde kapsamlı uygulamalar.",
    details: [
      "Kimlik doğrulama",
      "İşlem taraması",
      "Risk değerlendirmesi"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Denetim ve Raporlama",
    description: "Düzenli denetimler ve şeffaf raporlama mekanizmaları.",
    details: [
      "Harici denetimler",
      "Uyum raporlaması",
      "Şeffaflık kayıtları"
    ]
  },
  {
    icon: FileCheck,
    title: "Düzenleyici Standartlar",
    description: "Uluslararası finansal düzenlemelere ve standartlara uyum.",
    details: [
      "GDPR uyumluluğu",
      "Finansal düzenlemeler",
      "Veri koruma"
    ]
  },
  {
    icon: Globe,
    title: "Küresel Uyum",
    description: "Birden fazla yargı alanındaki düzenleyici gereklilikleri karşılıyoruz.",
    details: [
      "Sınır ötesi uyum",
      "Bölgesel düzenlemeler",
      "Uluslararası standartlar"
    ]
  }
];

export const ComplianceSection = () => {
  return (
    <section className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50">
          Uyum ve Standartlar
        </h2>
        <p className="mt-4 text-xl text-red-800/80 dark:text-rose-100/80 max-w-2xl mx-auto">
          Küresel düzenleyici gereklilikleri karşılıyor ve aşıyoruz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {complianceItems.map((item) => (
          <div 
            key={item.title}
            className="group bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-8 transition-all duration-300 hover:scale-105"
          >
            <item.icon className="w-12 h-12 text-red-600 dark:text-red-400 mb-4" />
            <h3 className="text-xl font-bold text-red-950 dark:text-rose-50 mb-2">
              {item.title}
            </h3>
            <p className="text-red-800/80 dark:text-rose-100/80 mb-4">
              {item.description}
            </p>
            <ul className="space-y-2">
              {item.details.map((detail) => (
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
