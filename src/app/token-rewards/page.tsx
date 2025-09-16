"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Coins, 
  TrendingUp, 
  Users, 
  History,
  ArrowRight,
  Wallet,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useWallet } from "@/contexts/wallet-context";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: "token-what",
    question: "Soulana Token nedir?",
    answer: "Soulana Token (CCT), bağışçılara hayırsever katkıları için ödül veren bir yönetişim ve hizmet tokenıdır. Platformumuz üzerinden bağış yaptığınızda, bağış tutarınızın %1&apos;i değerinde tokenı otomatik olarak alırsınız."
  },
  {
    id: "token-earn",
    question: "Tokenları nasıl kazanırım?",
    answer: "Platformumuz üzerinden bağış yaptığınızda tokenları otomatik olarak kazanırsınız. Yaptığınız her bağış için bağış tutarınızın %1&apos;i değerinde token alırsınız. Örneğin 100$ bağış yaparsanız, 1$ değerinde CCT token kazanırsınız."
  },
  {
    id: "token-use",
    question: "Tokenlarımı nasıl kullanabilirim?",
    answer: "Soulana tokenları çeşitli amaçlarla kullanılabilir: yönetişim oylamalarına katılmak, özel ödüller almak, yeni özelliklere öncelikli erişim sağlamak ve gelecekte olası stake ödülleri kazanmak."
  },
  {
    id: "token-calculation",
    question: "Token ödülleri nasıl hesaplanır?",
    answer: "Token ödülleri, işlemin yapıldığı andaki bağışınızın USD değerine göre hesaplanır. Bağış tutarınızın %1&apos;i kadar tokenı, geçerli token fiyatı üzerinden alırsınız."
  },
  {
    id: "token-receive",
    question: "Tokenlarımı ne zaman alırım?",
    answer: "Bağışınız blokzincirde onaylandıktan hemen sonra tokenlar bağlı cüzdanınıza otomatik olarak gönderilir. Manuel olarak talep etmenize gerek yoktur."
  },
  {
    id: "token-transfer",
    question: "Tokenlarımı transfer edebilir miyim?",
    answer: "Evet, CCT tokenları cüzdanlar arasında serbestçe transfer edilebilen standart Solana tokenlarıdır. Yine de yönetişime katılmak ve olası ödüllerden yararlanmak için tokenları tutmanızı öneririz."
  },
  {
    id: "token-minimum",
    question: "Token kazanmak için minimum bağış var mı?",
    answer: "Token kazanmak için herhangi bir minimum bağış tutarı yoktur. Bağışınızın tutarı ne olursa olsun, bağışınızın %1&apos;i kadar token alırsınız."
  },
  {
    id: "token-disconnect",
    question: "Cüzdanımın bağlantısını kesersem tokenlarıma ne olur?",
    answer: "Tokenlarınız blokzincirde güvenle saklanır ve cüzdan adresinizle ilişkilendirilir. Cüzdanınızı yeniden bağlayarak her zaman erişebilirsiniz."
  }
];

export default function TokenRewardsPage() {
  const { isConnected, connectWallet } = useWallet();
  const [openFaqIndex, setOpenFaqIndex] = React.useState<string | null>(null);

  // Mock data - replace with real data from your backend
  const stats = {
    totalTokens: "1,000,000",
    circulatingSupply: "250,000",
    holders: "1,234",
    price: "$0.15",
    marketCap: "$150,000",
    totalDonations: "$500,000"
  };

  const userStats = {
    tokenBalance: "0",
    pendingRewards: "0",
    totalDonated: "$0",
    lastDonation: "Hiç"
  };

  const toggleFaq = (id: string) => {
    setOpenFaqIndex(openFaqIndex === id ? null : id);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/50 dark:from-red-950 dark:via-black dark:to-red-950/50">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 mt-16">
            <h1 className="text-4xl font-bold mb-4 text-red-950 dark:text-rose-50">
              Soulana Token Ödülleri
            </h1>
            <p className="text-lg text-red-800/60 dark:text-rose-100/60 mb-8">
              Bağış yaparak token kazanın ve yönetişime katılın
            </p>
            {!isConnected && (
              <Button 
                onClick={connectWallet}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Cüzdanı Bağla <Wallet className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Token Stats Grid */}
          {isConnected ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-800/60 dark:text-rose-100/60">Toplam Arz</p>
                      <h3 className="text-2xl font-bold text-red-950 dark:text-rose-50 mt-1">{stats.totalTokens}</h3>
                    </div>
                    <Coins className="h-6 w-6 text-red-600" />
                  </div>
                </Card>

                <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-800/60 dark:text-rose-100/60">Token Fiyatı</p>
                      <h3 className="text-2xl font-bold text-red-950 dark:text-rose-50 mt-1">{stats.price}</h3>
                    </div>
                    <TrendingUp className="h-6 w-6 text-red-600" />
                  </div>
                </Card>

                <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-800/60 dark:text-rose-100/60">Token Sahibi Sayısı</p>
                      <h3 className="text-2xl font-bold text-red-950 dark:text-rose-50 mt-1">{stats.holders}</h3>
                    </div>
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                </Card>
              </div>

              {/* User Stats Section */}
              <Card className="p-8 mb-12 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-red-950 dark:text-rose-50">İstatistiklerin</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm font-medium text-red-800/60 dark:text-rose-100/60">Token Bakiyesi</p>
                    <p className="text-xl font-bold text-red-950 dark:text-rose-50 mt-1">{userStats.tokenBalance}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-800/60 dark:text-rose-100/60">Bekleyen Ödüller</p>
                    <p className="text-xl font-bold text-red-950 dark:text-rose-50 mt-1">{userStats.pendingRewards}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-800/60 dark:text-rose-100/60">Toplam Bağış</p>
                    <p className="text-xl font-bold text-red-950 dark:text-rose-50 mt-1">{userStats.totalDonated}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-800/60 dark:text-rose-100/60">Son Bağış</p>
                    <p className="text-xl font-bold text-red-950 dark:text-rose-50 mt-1">{userStats.lastDonation}</p>
                  </div>
                </div>
              </Card>

              {/* Nasıl Çalışır Section */}
              <Card className="p-8 mb-12 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-red-950 dark:text-rose-50">Nasıl Çalışır</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                      <Coins className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-red-950 dark:text-rose-50">Bağış Yap</h3>
                    <p className="text-red-800/60 dark:text-rose-100/60">
                      Seçtiğiniz amaca platformumuz üzerinden bağış yapın
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                      <ArrowRight className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-red-950 dark:text-rose-50">Token Kazanın</h3>
                    <p className="text-red-800/60 dark:text-rose-100/60">
                      Bağış tutarınızın %1&apos;ini otomatik olarak token olarak alın
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                      <History className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-red-950 dark:text-rose-50">Tokenlarınızı Kullanın</h3>
                    <p className="text-red-800/60 dark:text-rose-100/60">
                      Yönetişime katılın ve ödüller kazanın
                    </p>
                  </div>
                </div>
              </Card>

              {/* FAQ Section */}
              <Card className="p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-8 text-red-950 dark:text-rose-50">Sıkça Sorulan Sorular</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border-b border-border last:border-0">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full py-4 text-left"
                        aria-expanded={openFaqIndex === faq.id}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <h3 className="text-lg font-semibold text-red-950 dark:text-rose-50">
                          {faq.question}
                        </h3>
                        {openFaqIndex === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-red-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-red-600" />
                        )}
                      </button>
                      {openFaqIndex === faq.id && (
                        <div 
                          id={`faq-answer-${faq.id}`}
                          className="pb-4"
                        >
                          <p className="text-red-800/60 dark:text-rose-100/60">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-red-800/60 dark:text-rose-100/60">
                Token ödüllerinizi ve istatistiklerinizi görmek için cüzdanınızı bağlayın
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 