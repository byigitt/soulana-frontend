import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Blink Teknolojisi",
    description: "Solana'nın devrim niteliğindeki Blink teknolojisi işlemlerin neredeyse anında sonuçlanmasını sağlar.",
    details: [
      "Bir saniyeden kısa onay süreleri",
      "Paralel işlem işleme", 
      "Ölçeklenebilir mimari"
    ],
    image: "/images/solana-integration/blinks.png"
  },
  {
    title: "Solana Tünelleri",
    description: "Güvenli Solana tünelleriyle otomatik ve şeffaf fon dağıtımı.",
    details: [
      "Otomatik fon dağıtımı",
      "Şeffaf takip",
      "Programlanabilir mantık"
    ], 
    image: "/images/solana-integration/solanawormhole.webp"
  },
  {
    title: "Çapraz Zincir Köprüsü",
    description: "Birden fazla blokzincir ağından bağışları sorunsuzca kabul et.",
    details: [
      "Çoklu zincir desteği",
      "Tekdüzen deneyim",
      "Geniş erişilebilirlik"
    ],
    image: "/images/solana-integration/crosschainbridge.png"
  }
];

export const TechnologySection = () => {
  return (
    <section className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50">
          Gelişmiş Teknoloji Altyapısı
        </h2>
        <p className="mt-4 text-xl text-red-800/80 dark:text-rose-100/80 max-w-2xl mx-auto">
          Maksimum verimlilik ve güvenlik için son teknoloji blokzincir altyapısı üzerine kuruldu
        </p>
      </div>

      <div className="space-y-12">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-red-950 dark:text-rose-50">
                {feature.title}
              </h3>
              <p className="text-lg text-red-800/80 dark:text-rose-100/80">
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
            <div className="flex-1 w-full aspect-video bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-8">
              <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/20 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 