"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Temiz Su Girişimi",
    impact: "10.000+ kişiye ulaşıldı",
    amount: "$50,000",
    image: "/images/impact/clean-water.jpg",
  },
  {
    id: 2,
    title: "Herkes için Eğitim",
    impact: "500 öğrenciye destek verildi",
    amount: "$75,000",
    image: "/images/impact/education-project.jpg",
  },
  {
    id: 3,
    title: "Tıbbi Destek Programı",
    impact: "1.000+ hastaya tedavi sağlandı",
    amount: "$100,000",
    image: "/images/impact/medical-aid.jpg",
  },
  {
    id: 4,
    title: "Gıda Güvenliği Projesi",
    impact: "5.000 aileye gıda ulaştırıldı",
    amount: "$85,000",
    image: "/images/impact/food-security.jpg",
  },
  {
    id: 5,
    title: "Yenilenebilir Enerji",
    impact: "20 topluluğa enerji sağlandı",
    amount: "$120,000",
    image: "/images/impact/renewable-energy.jpg",
  },
  {
    id: 6,
    title: "Yaban Hayatını Koruma",
    impact: "1.000 dönüm alan koruma altına alındı",
    amount: "$95,000",
    image: "/images/impact/wildlife-conservation.jpg",
  }
];

export const ImpactStories = () => {
  return (
    <section className="mt-32 relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50">
          Etki Hikayeleri
        </h2>
        <p className="mt-4 text-xl text-red-800/80 dark:text-rose-100/80 max-w-2xl mx-auto">
          Blokzincir teknolojisinin güç verdiği gerçek değişim hikayeleri
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 -mt-16 -mb-12 px-8">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-6 hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white">
                  {story.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {story.impact}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">{story.amount}</span>
              </div>
              <span className="text-sm text-red-800/60 dark:text-rose-100/60">
                Soulana aracılığıyla toplanan
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 
