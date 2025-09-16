import { Heart, Globe, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Şefkat",
    description: "Empatinin ve kolektif eylemin dünyada anlamlı değişim yaratma gücüne inanıyoruz."
  },
  {
    icon: Globe,
    title: "Küresel Etki",
    description: "Platformumuz bağışçıları dünyanın dört bir yanındaki projelerle buluşturarak küresel hayırseverliğin önündeki engelleri kaldırır."
  },
  {
    icon: Users,
    title: "Topluluk",
    description: "Pozitif etki yaratma arzusu ile birleşen bağışçılar ve kuruluşlardan oluşan bir topluluğu destekliyoruz."
  }
];

export const ValuesSection = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-red-950 dark:text-rose-50 text-center mb-12">
        Temel Değerlerimiz
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value) => (
          <div 
            key={value.title}
            className="p-6 bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900"
          >
            <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4">
              <value.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-red-950 dark:text-rose-50 mb-2">
              {value.title}
            </h3>
            <p className="text-red-800/80 dark:text-rose-100/80">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

