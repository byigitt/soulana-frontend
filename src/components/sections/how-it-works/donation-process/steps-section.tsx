import { ArrowRight, Wallet, Search, Heart, ArrowRight as ArrowRightIcon } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Cüzdanınızı Bağlayın",
    description: "Solana cüzdanınızı güvenle bağlayın ve anında bağış yapmaya başlayın.",
    icon: Wallet,
    details: [
      "Birden fazla Solana cüzdanı desteği",
      "Tek tıklamayla bağlantı süreci", 
      "Güvenli cüzdan entegrasyonu",
    ]
  },
  {
    id: 2,
    title: "Bir Kuruluş Seçin",
    description: "Onaylı yardım kuruluşu listemizde gezin.",
    icon: Search,
    details: [
      "Amaca veya konuma göre filtreleyin",
      "Ayrıntılı kuruluş profillerini görüntüleyin",
      "Etki metriklerini inceleyin",
    ]
  },
  {
    id: 3,
    title: "Bağışınızı Yapın",
    description: "Solana'nın Blink teknolojisiyle bağışınızı anında gönderin.",
    icon: Heart,
    details: [
      "Anlık işlemler",
      "Minimum işlem ücretleri",
      "Birden fazla para birimi desteği",
    ]
  },
  {
    id: 4,
    title: "Etkinizi Takip Edin",
    description: "Bağışınızın nasıl fark yarattığını gerçek zamanlı olarak izleyin.",
    icon: ArrowRightIcon,
    details: [
      "Gerçek zamanlı işlem takibi",
      "Etki görselleştirmesi",
      "Bağış geçmişi",
    ]
  },
];

export const StepsSection = () => {
  return (
    <div className="mt-16 space-y-6 lg:space-y-12">
      {steps.map((step) => (
        <div 
          key={step.id}
          className={`flex flex-col ${step.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-4 lg:gap-8`}
        >
          <div className={`flex-1 space-y-3 ${step.id % 2 === 0 ? 'text-right' : ''}`}>
            <div className={`flex items-center gap-2.5 ${step.id % 2 === 0 ? 'justify-end' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <step.icon className="w-4 h-4 text-red-600 dark:text-red-400" />
              </div>
              <span className="text-base font-medium text-red-600 dark:text-red-400">
                Adım {step.id}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-red-950 dark:text-rose-50">
              {step.title}
            </h2>
            <p className="text-lg text-red-800/80 dark:text-rose-100/80">
              {step.description}
            </p>
            <ul className="space-y-2">
              {step.details.map((detail) => (
                <li key={detail} className={`flex items-center gap-2 text-base text-red-800/80 dark:text-rose-100/80 ${step.id % 2 === 0 ? 'justify-end' : ''}`}>
                  {step.id % 2 === 0 && detail}
                  <ArrowRight className={`w-4 h-4 text-red-600 dark:text-red-400 ${step.id % 2 === 0 ? 'rotate-180' : ''}`} />
                  {step.id % 2 !== 0 && detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-[40%] aspect-[16/9] bg-white/30 dark:bg-black/30 rounded-lg border border-red-200 dark:border-red-900 p-4">
            <div className="w-full h-full rounded-md bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/20 flex items-center justify-center">
              <step.icon className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

