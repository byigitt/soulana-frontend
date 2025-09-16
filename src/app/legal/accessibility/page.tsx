import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Erişilebilirlik - Soulana",
  description: "Soulana'yı herkes için erişilebilir kılma taahhüdümüz.",
};

export const dynamic = "force-static";
export const revalidate = false;

export default function AccessibilityPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/50 dark:from-red-950 dark:via-black dark:to-red-950/50">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto mt-12">
          <h1 className="text-4xl font-bold mb-8 text-red-950 dark:text-rose-50">Erişilebilirlik Bildirimi</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Taahhüdümüz</h2>
              <p>
                Soulana, engelli bireyler için dijital erişilebilirliği sağlamaya kendini adamıştır. 
                Herkes için kullanıcı deneyimini sürekli olarak iyileştiriyor ve ilgili 
                erişilebilirlik standartlarını uyguluyoruz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Uyumluluk Durumu</h2>
              <p>Web İçeriği Erişilebilirlik Yönergeleri (WCAG) 2.1 AA seviyesine uyum sağlamayı hedefliyoruz. Bu yönergeler, web içeriklerini engelli kişiler için daha erişilebilir hale getirmenin yollarını açıklar.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Erişilebilirlik Özellikleri</h2>
              <p>Web sitemiz aşağıdaki erişilebilirlik özelliklerini içerir:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Klavye ile gezinme desteği</li>
                <li>ARIA işaretleri ve etiketleri</li>
                <li>Görseller için alternatif metin</li>
                <li>Doğru başlık yapısı</li>
                <li>Yeterli renk kontrastı</li>
                <li>Yeniden boyutlandırılabilir metin</li>
                <li>Ekran okuyucu uyumluluğu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Destekleyici Teknolojiler</h2>
              <p>Web sitemiz aşağıdaki yardımcı teknolojilerle uyumlu olacak şekilde tasarlandı:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Ekran okuyucular</li>
                <li>Ekran büyütme yazılımları</li>
                <li>Ses tanıma yazılımları</li>
                <li>Yalnızca klavye ile gezinme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Bilinen Sorunlar</h2>
              <p>
                WCAG 2.1 Seviye AA uyumluluğu için çabalasak da iyileştirilmesi gereken bazı alanlar olabilir. 
                Herhangi bir erişilebilirlik sorununu belirlemek ve gidermek için aktif olarak çalışıyoruz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Geri Bildirim</h2>
              <p>
                Soulana'nın erişilebilirliği hakkında geri bildirimlerinizi memnuniyetle karşılarız. Erişim engeliyle karşılaşırsanız lütfen 
                bize bildirin:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>E-posta: accessibility@soulana.org</li>
                <li>Telefon: (555) 123-4567</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Değerlendirme Yöntemleri</h2>
              <p>Soulana'nın erişilebilirliğini aşağıdaki yöntemlerle değerlendiriyoruz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Harici erişilebilirlik denetimleri</li>
                <li>Otomatik test araçları</li>
                <li>Yardımcı teknolojilerle kullanıcı testleri</li>
                <li>Düzenli manuel testler</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
