"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export const ContactFormSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    toast.info("Mesaj gönderiliyor...");
    setTimeout(() => {
      toast.success("Mesaj başarıyla gönderildi");
      setIsLoading(false);
    }, 3000);
  };

  return (
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50 mb-8">
        Bize Mesaj Gönderin
      </h2>
      <div className="bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-red-950 dark:text-rose-50 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Ad
              </label>
              <Input
                id="firstName"
                type="text"
                required
                className="bg-white/50 dark:bg-black/50"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-red-950 dark:text-rose-50 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Soyad
              </label>
              <Input
                id="lastName"
                type="text"
                required
                className="bg-white/50 dark:bg-black/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-red-950 dark:text-rose-50 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              E-posta
            </label>
            <Input
              id="email"
              type="email"
              required
              className="bg-white/50 dark:bg-black/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-red-950 dark:text-rose-50 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Mesaj
            </label>
            <Textarea
              id="message"
              required
              rows={6}
              className="bg-white/50 dark:bg-black/50"
            />
          </div>

          {isLoading ? (
            <Button
              type="submit"
              size="lg"
              className="w-full bg-red-950 hover:bg-red-900 text-white dark:bg-rose-50 dark:hover:bg-rose-100 dark:text-red-950 transition-all duration-300 group"
              disabled
            >
              <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-red-950 dark:border-t-transparent" />
              Gönderiliyor
            </Button>
          ) : (
            <Button
              type="submit"
              size="lg"
              className="w-full bg-red-950 hover:bg-red-900 text-white dark:bg-rose-50 dark:hover:bg-rose-100 dark:text-red-950 transition-all duration-300 group"
              onClick={handleSubmit}
            >
              Mesaj Gönder
              <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          )}
        </form>
      </div>
    </section>
  );
};
