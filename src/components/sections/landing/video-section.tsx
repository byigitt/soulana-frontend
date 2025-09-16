"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-32 text-center" id="how-it-works">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50 mb-6">
          Nasıl İşlediğini Gör
        </h2>
        <p className="text-xl text-red-800/80 dark:text-rose-100/80">
          Solana&apos;nın blokzincir teknolojisini nasıl kullandığımızı izleyin; bağış sürecini her zamankinden daha hızlı, şeffaf ve etkili hale getiriyoruz.
        </p>
      </div>

      <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 via-white to-red-50 dark:from-black/30 dark:via-black/20 dark:to-black/30 border border-red-200/50 dark:border-red-900/50 group will-change-transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="w-full h-full flex items-center justify-center relative">
          {!isPlaying ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/50 via-transparent to-transparent dark:from-black/60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent dark:from-red-500/10" />
              
              <Button 
                size="lg"
                variant="outline" 
                onClick={handlePlayVideo}
                className="relative z-10 gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-white/50 dark:border-white/20 text-red-700 dark:text-white hover:bg-white/90 dark:hover:bg-white/20 hover:border-white/60 dark:hover:border-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Play className="h-6 w-6" />
                Tanıtımı İzle
              </Button>
            </>
          ) : (
            <video
              className="w-full h-full object-cover"
              playsInline
              autoPlay
              muted
              controls
              src="/demo.mp4"
              aria-label="Platform tanıtım videosu"
            >
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto mb-8">
        <div className="p-6 text-left rounded-xl bg-white/50 dark:bg-black/20 border border-red-100/50 dark:border-red-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-black/30">
          <h3 className="text-lg font-semibold text-red-950 dark:text-rose-50 mb-2">
            Anında İşlemler
          </h3>
          <p className="text-red-800/80 dark:text-rose-100/80">
            Solana&apos;nın saniyeden kısa sürede kesinleşen yapısıyla bağışlarınız ışık hızında ulaşsın.
          </p>
        </div>
        <div className="p-6 text-left rounded-xl bg-white/50 dark:bg-black/20 border border-red-100/50 dark:border-red-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-black/30">
          <h3 className="text-lg font-semibold text-red-950 dark:text-rose-50 mb-2">
            Tam Şeffaflık
          </h3>
          <p className="text-red-800/80 dark:text-rose-100/80">
            Her bağışı blokzincir üzerinde uçtan uca izleyin; görünürlük ve doğrulama daima elinizin altında.
          </p>
        </div>
        <div className="p-6 text-left rounded-xl bg-white/50 dark:bg-black/20 border border-red-100/50 dark:border-red-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-black/30">
          <h3 className="text-lg font-semibold text-red-950 dark:text-rose-50 mb-2">
            En Düşük Masraflar
          </h3>
          <p className="text-red-800/80 dark:text-rose-100/80">
            Neredeyse sıfır işlem maliyeti sayesinde bağışınızın çok daha fazlası ihtiyaç sahiplerine ulaşır.
          </p>
        </div>
      </div>
    </div>
  );
}; 
