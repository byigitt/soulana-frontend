import { Quote } from "lucide-react";

const manifestoPoints = [
  {
    title: "Her Şeyden Önce Şeffaflık",
    content: "Bağış süreçlerinde tam şeffaflığa inanıyoruz. Her işlem, her bağış ve her etki görünür ve doğrulanabilir olmalı."
  },
  {
    title: "İyilik İçin Teknoloji",
    content: "Blockchain gücünü kâr için değil, toplumsal fayda için kullanıyoruz. Teknoloji insana hizmet etmeli, tersi değil."
  },
  {
    title: "Önce Topluluk",
    content: "Platformumuz topluluk tarafından topluluk için inşa edildi. Bağışçıları ve sosyal girişimleri doğrudan buluşturarak anlamlı değişim yaratmalarını sağlıyoruz."
  },
  {
    title: "Küresel Etki, Yerel Dokunuş",
    content: "Küresel düşünüyor, yerelde hareket ediyoruz. Her topluluğun benzersiz ihtiyaçları var ve platformumuz hepsine uyum sağlayarak hizmet ediyor."
  },
  {
    title: "Sürdürülebilir Değişim",
    content: "Geçici çözümler için burada değiliz. Amacımız yenilikçi blockchain çözümleriyle kalıcı, sürdürülebilir değişim yaratmak."
  }
];

export const ManifestoSection = () => {
  return (
    <section className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50 mb-6">
          Manifestomuz
        </h2>
        <p className="text-xl text-red-800/80 dark:text-rose-100/80 max-w-3xl mx-auto">
          Blockchain teknolojisiyle bağış kültürünü dönüştürme misyonumuzda bize yol gösteren ilkeler bunlar.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -top-8 -right-8 w-64 h-64 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-50" />

        <div className="relative bg-white/50 dark:bg-red-950/50 rounded-2xl p-8 md:p-12 shadow-lg border border-red-100 dark:border-red-900">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center shadow-lg">
            <Quote className="w-6 h-6 text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {manifestoPoints.map((point) => (
              <div 
                key={point.title}
                className="relative group"
              >
                <div className="bg-white dark:bg-red-950/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-red-100 dark:border-red-900">
                  <h3 className="text-lg font-semibold text-red-950 dark:text-rose-50 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-red-800/80 dark:text-rose-100/80">
                    {point.content}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/5 dark:group-hover:from-red-400/5 dark:group-hover:to-red-400/5 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
