import React from "react";
import { Zap, DollarSign, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Şimşek Hızında",
    description: "Solana&apos;nın yüksek performanslı blokzinciriyle bağışları bir saniyeden kısa sürede işle."
  },
  {
    icon: DollarSign,
    title: "Minimum Ücretler",
    description: "Neredeyse sıfır işlem maliyetiyle her bağışın etkisini en üst düzeye çıkar."
  },
  {
    icon: Shield,
    title: "Geliştirilmiş Güvenlik",
    description: "Kurumsal düzeyde güvenlikten ve şeffaf işlem takibinden yararlan."
  },
  {
    icon: Clock,
    title: "Anlık İşleme",
    description: "Anında onay ve eş zamanlı fon aktarımı deneyimle."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50 text-center mb-12">
        Neden Solana&apos;yı Seçtik
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit) => (
          <div 
            key={benefit.title}
            className="group bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-8 transition-all duration-300 hover:scale-105"
          >
            <benefit.icon className="w-12 h-12 text-red-600 dark:text-red-400 mb-4" />
            <h3 className="text-xl font-bold text-red-950 dark:text-rose-50 mb-2">
              {benefit.title}
            </h3>
            <p className="text-red-800/80 dark:text-rose-100/80">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}; 