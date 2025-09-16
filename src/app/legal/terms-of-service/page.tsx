import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Hizmet Koşulları - Soulana",
  description: "Soulana platformunu kullanmaya ilişkin hüküm ve koşullar.",
};

export const dynamic = "force-static";
export const revalidate = false;

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/50 dark:from-red-950 dark:via-black dark:to-red-950/50">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto mt-12">
          <h1 className="text-4xl font-bold mb-8 text-red-950 dark:text-rose-50">Hizmet Koşulları</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Koşulların Kabulü</h2>
              <p className="mb-4">
                Soulana'nın hizmetlerine erişerek ve kullanarak bu Hizmet Koşullarına uymayı ve bağlı kalmayı kabul edersiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Hizmetin Kullanımı</h2>
              <p>Hizmetimizi yalnızca yasal amaçlarla ve bu Koşullara uygun şekilde kullanmayı kabul edersiniz. Şunları yapmanız yasaktır:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Hizmeti herhangi bir yasa dışı amaç için kullanmak</li>
                <li>Hizmetin işleyişine müdahale etmeye teşebbüs etmek</li>
                <li>Herhangi bir kişi veya kuruluşu taklit etmek</li>
                <li>Herhangi bir hileli faaliyette bulunmak</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Hesap Sorumlulukları</h2>
              <p>Bir hesap oluşturduğunuzda şunları kabul edersiniz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Doğru bilgiler sağlamak</li>
                <li>Hesabınızın güvenliğini sağlamak</li>
                <li>Bilgilerinizdeki değişiklikleri gecikmeden güncellemek</li>
                <li>Hesabınız altındaki tüm faaliyetlerden sorumlu olmak</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Bağışlar ve İşlemler</h2>
              <p>Platformumuz üzerinden bağış yaparak şunları kabul edersiniz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Ödeme yöntemini kullanma yetkisine sahip olduğunuzu onaylarsınız</li>
                <li>İşlemlerin kesin olduğunu ve iade edilemeyeceğini anlarsınız</li>
                <li>İşlem detaylarını ilgili taraflarla paylaşabileceğimizi kabul edersiniz</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Fikri Mülkiyet</h2>
              <p>Hizmetimizin tüm içerikleri, özellikleri ve işlevleri Soulana'ya aittir ve uluslararası telif hakkı, marka ve diğer fikri mülkiyet yasalarıyla korunmaktadır.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Sorumluluğun Sınırlandırılması</h2>
              <p>Hizmeti kullanmanızdan veya kullanamamanızdan kaynaklanan dolaylı, arızi, özel, sonuçsal ya da cezai zararlardan Soulana sorumlu tutulamaz.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Koşullarda Değişiklikler</h2>
              <p>Bu koşulları dilediğimiz zaman değiştirme hakkımız saklıdır. Önemli değişiklikleri kullanıcılara e-posta yoluyla veya platformumuz üzerinden bildiririz.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. İletişim Bilgileri</h2>
              <p>Bu Koşullar hakkında sorularınız varsa lütfen bizimle iletişime geçin:</p>
              <p>E-posta: legal@soulana.org</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
