import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Gizlilik Politikası - Soulana",
  description: "Gizliliğinizi ve kişisel bilgilerinizi koruma taahhüdümüz.",
};

export const dynamic = "force-static";
export const revalidate = false;

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/50 dark:from-red-950 dark:via-black dark:to-red-950/50">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto mt-12">
          <h1 className="text-4xl font-bold mb-8 text-red-950 dark:text-rose-50">Gizlilik Politikası</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Topladığımız Bilgiler</h2>
              <p>Doğrudan bize sağladığınız aşağıdaki bilgileri topluyoruz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>İletişim bilgileri (ad, e-posta adresi)</li>
                <li>Hesap bilgileri</li>
                <li>İşlem verileri</li>
                <li>İletişim tercihleri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Bilgilerinizi Nasıl Kullanıyoruz</h2>
              <p>Topladığımız bilgileri şu amaçlarla kullanıyoruz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Hizmetlerimizi sunmak ve sürdürmek</li>
                <li>Bağışlarınızı işlemek</li>
                <li>Size güncellemeler ve bildirimler göndermek</li>
                <li>Platformumuzu geliştirmek</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Bilgi Paylaşımı</h2>
              <p>Kişisel bilgilerinizi satmıyoruz. Bilgilerinizi şu taraflarla paylaşabiliriz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Hizmet sağlayıcılar</li>
                <li>İş ortakları (rızanızla)</li>
                <li>Gerektiğinde yasal merciler</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Haklarınız</h2>
              <p>Şu haklara sahipsiniz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Kişisel bilgilerinize erişmek</li>
                <li>Hatalı verileri düzeltmek</li>
                <li>Verilerinizin silinmesini talep etmek</li>
                <li>İletişimlerden çıkmayı tercih etmek</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Bize Ulaşın</h2>
              <p>Bu Gizlilik Politikası hakkında sorularınız varsa lütfen bizimle iletişime geçin:</p>
              <p>E-posta: privacy@soulana.org</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
