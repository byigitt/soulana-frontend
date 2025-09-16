"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CookieSettingsPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Load saved preferences on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handlePreferenceChange = (category: keyof typeof cookiePreferences) => {
    const newPreferences = {
      ...cookiePreferences,
      [category]: category === "necessary" ? true : !cookiePreferences[category],
    };
    setCookiePreferences(newPreferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(newPreferences));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/50 dark:from-red-950 dark:via-black dark:to-red-950/50">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto mt-12">
          <h1 className="text-4xl font-bold mb-8 text-red-950 dark:text-rose-50">Çerez Ayarları</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Tarama deneyiminizi iyileştirmek, kişiselleştirilmiş içerik sunmak ve trafiğimizi analiz etmek için çerezler kullanıyoruz.
              Lütfen aşağıdan çerez tercihlerinizi seçin.
            </p>

            <div className="space-y-8">
              
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Zorunlu Çerezler</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Bu çerezler temel site işlevi için gereklidir ve devre dışı bırakılamaz.
                  </p>
                </div>
                <Switch
                  checked={cookiePreferences.necessary}
                  disabled
                  className="data-[state=checked]:bg-red-600"
                />
              </div>

              
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Analitik Çerezler</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kullanım bilgilerini toplayıp raporlayarak web sitemizi geliştirmemize yardımcı olur.
                  </p>
                </div>
                <Switch
                  checked={cookiePreferences.analytics}
                  onCheckedChange={() => handlePreferenceChange("analytics")}
                  className="data-[state=checked]:bg-red-600"
                />
              </div>

              
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Pazarlama Çerezleri</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ziyaretçileri web siteleri arasında takip ederek ilgili reklamları göstermemizi sağlar.
                  </p>
                </div>
                <Switch
                  checked={cookiePreferences.marketing}
                  onCheckedChange={() => handlePreferenceChange("marketing")}
                  className="data-[state=checked]:bg-red-600"
                />
              </div>

              
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Tercih Çerezleri</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Web sitesinin yaptığınız seçimleri hatırlamasını ve gelişmiş işlevsellik sunmasını sağlar.
                  </p>
                </div>
                <Switch
                  checked={cookiePreferences.preferences}
                  onCheckedChange={() => handlePreferenceChange("preferences")}
                  className="data-[state=checked]:bg-red-600"
                />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Ek Bilgiler</h2>
              <p className="mb-4">
                Çerezleri ve kişisel verilerinizi nasıl kullandığımız hakkında daha fazla bilgi için lütfen{" "}
                <a href="/legal/privacy-policy" className="text-red-600 dark:text-red-400 hover:underline">
                  Gizlilik Politikamızı
                </a>
                .
              </p>
              <p>
                Çerez kullanımımızla ilgili sorularınız varsa lütfen{" "}
                <a href="mailto:privacy@soulana.org" className="text-red-600 dark:text-red-400 hover:underline">
                  privacy@soulana.org
                </a>
                adresinden bize ulaşın.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
