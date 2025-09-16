import React from "react";
import { Heart, Globe, Users, Wallet } from "lucide-react";

const metrics = [
  {
    icon: Wallet,
    value: "$10M+",
    label: "Toplam Bağış",
    growth: "Bu yıl +%127 artış"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Aktif Bağışçılar",
    growth: "Bu yıl +%85 artış"
  },
  {
    icon: Heart,
    value: "200+",
    label: "Desteklenen Projeler",
    growth: "Bu yıl +%63 artış"
  },
  {
    icon: Globe,
    value: "45+",
    label: "Ulaşılan Ülkeler",
    growth: "Bu yıl +%92 artış"
  }
];

export const ImpactMetricsSection = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric) => (
          <div 
            key={metric.label}
            className="group bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-8 transition-all duration-300 hover:scale-105"
          >
            <metric.icon className="w-12 h-12 text-red-600 dark:text-red-400 mb-4" />
            <div className="space-y-1">
              <h3 className="text-3xl font-bold text-red-950 dark:text-rose-50">
                {metric.value}
              </h3>
              <p className="text-red-800/80 dark:text-rose-100/80">
                {metric.label}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400">
                {metric.growth}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 