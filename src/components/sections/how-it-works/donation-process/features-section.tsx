import { Shield, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Güvenli ve Şeffaf",
    description: "Her işlem Solana blokzincirine kaydedilir ve tam şeffaflık ile güvenliği garanti eder."
  },
  {
    icon: Clock,
    title: "Şimşek Hızında",
    description: "Solana Blink ile anında bağış deneyimi yaşayın; günlerce beklemeye ya da yüksek ücretler ödemeye son."
  },
  {
    icon: Heart,
    title: "Maksimum Etki",
    description: "Neredeyse sıfır olan işlem ücretleri, bağışınızın daha büyük bir kısmının doğrudan önemsediğiniz amaca gitmesi anlamına gelir."
  }
];

export const FeaturesSection = () => {
  return (
    <div className="mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.title}
            className="group bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-8 transition-all duration-300 hover:scale-105"
          >
            <feature.icon className="w-12 h-12 text-red-600 dark:text-red-400 mb-4" />
            <h3 className="text-xl font-bold text-red-950 dark:text-rose-50 mb-2">
              {feature.title}
            </h3>
            <p className="text-red-800/80 dark:text-rose-100/80">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}; 
