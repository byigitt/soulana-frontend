"use client";

import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Sivil toplum kuruluşu yöneticisi",
    image: "/images/landing/sarah.jpg",
    content: "Solana destekli bağış platformu, desteği alış biçimimizi baştan aşağı değiştirdi. Anında işlemler ve düşük masraflar sayesinde kaynaklarımız doğrudan amacımıza gidiyor.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Düzenli bağışçı",
    image: "/images/landing/michael.jpg",
    content: "Bağış sürecinin ne kadar şeffaf ve hızlı olmasına bayılıyorum. Katkılarımı blokzincirde takip edebilmek, paramın nereye gittiğinden tamamen emin olmamı sağlıyor.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Yardım organizasyonu sorumlusu",
    image: "/images/landing/emily.jpg",
    content: "Platformun kullanıcı dostu arayüzü Solana'nın hızıyla birleşince bağış toplamak çok daha verimli oldu. Bağışçılarımız bu kesintisiz deneyimi çok takdir ediyor.",
    rating: 5
  }
];

export const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const testimonialElement = testimonialsRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cards = Array.from(entry.target.querySelectorAll('.testimonial-card'));
          for (const [index, card] of cards.entries()) {
            setTimeout(() => {
              card.classList.add('animate-fade-in-up');
            }, index * 200);
          }
          observer.unobserve(entry.target);
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
    });

    if (testimonialElement) {
      observer.observe(testimonialElement);
    }

    return () => {
      if (testimonialElement) {
        observer.unobserve(testimonialElement);
      }
    };
  }, []);

  return (
    <section className="mt-12" ref={testimonialsRef}>
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-950 dark:text-rose-50">
          İnsanlar Ne Diyor
        </h2>
        <p className="mt-4 text-xl text-red-800/80 dark:text-rose-100/80 max-w-2xl mx-auto">
          Bağışçılarımızın ve kurum ortaklarımızın görüşlerini okuyun
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card p-6 bg-white/30 dark:bg-black/30 rounded-2xl border border-red-200 dark:border-red-900"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-red-950 dark:text-rose-50">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-red-800/80 dark:text-rose-100/80">
                  {testimonial.role}
                </p>
              </div>
            </div>
            
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <Star
                  key={`star-${index}-${testimonial.rating}`}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-red-800/80 dark:text-rose-100/80">
              {testimonial.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}; 
