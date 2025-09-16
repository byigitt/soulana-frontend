import React from "react";

const faqs = [
  {
    id: 1,
    question: "Bağışımı nasıl takip edebilirim?",
    answer: "Tüm bağışlar Solana blok zincirinde takip edilir. Bağışınızı yaptıktan sonra durumunu ve nihai varış noktasını izlemek için kullanabileceğiniz bir işlem kimliği alırsınız."
  },
  {
    id: 2,
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Solana blok zincirinde çeşitli kripto para birimlerini kabul ediyoruz. Ayrıca kriptoya otomatik olarak dönüştürülecek geleneksel ödeme yöntemleriyle de bağış yapabilirsiniz."
  },
  {
    id: 3,
    question: "İşlemlerim ne kadar güvenli?",
    answer: "Tüm işlemler Solana'nın blok zinciri teknolojisiyle, askeri düzeyde şifreleme ve merkeziyetsiz doğrulama sistemleri kullanılarak güvence altına alınır."
  },
  {
    id: 4,
    question: "Bağışım için vergi makbuzu alabilir miyim?",
    answer: "Evet, tüm bağışlar için resmi vergi makbuzları sağlıyoruz. Bunlar otomatik olarak oluşturulur ve kayıtlı e-posta adresinize gönderilir."
  }
];

export const FAQSection = () => {
  return (
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50 mb-8">
        Sıkça Sorulan Sorular
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div 
            key={faq.id}
            className="bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-6 transition-all duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-lg font-bold text-red-950 dark:text-rose-50 mb-3">
              {faq.question}
            </h3>
            <p className="text-red-800/80 dark:text-rose-100/80 text-sm">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}; 