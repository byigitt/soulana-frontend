"use client";

import React from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const partners = [
  {
    id: 1,
    name: "Solana",
    logo: "/images/partners/solana.png",
  },
  {
    id: 2,
    name: "Solphi",
    logo: "/images/partners/solphi.png",
  },
  {
    id: 3,
    name: "Utilify",
    logo: "/images/partners/utilify.png",
  },
  // {
  //   id: 4,
  //   name: "IBM",
  //   logo: "/images/partners/ibm.svg",
  // },
  // {
  //   id: 5,
  //   name: "Samsung",
  //   logo: "/images/partners/samsung.svg",
  // },
  {
    id: 6,
    name: "Meta",
    logo: "/images/partners/meta.svg",
  },
  {
    id: 7,
    name: "Uber",
    logo: "/images/partners/uber.svg",
  },
  // {
  //   id: 8,
  //   name: "Accenture",
  //   logo: "/images/partners/accenture.svg",
  // },
];

export const PartnerSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <section 
      ref={elementRef}
      className={`py-20 overflow-hidden bg-white/50 dark:bg-black/20  transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-red-950 dark:text-rose-50 animate-fade-in">
            Dünyanın en cesur şirketlerinde bireylerin ve ekiplerin güvendiği platform
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden hover:[&>*]:pause">
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-[#080101] to-transparent z-10 hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white dark:from-[#080101] to-transparent z-10 hidden md:block" />
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="mx-8">
                <div className="w-[150px] h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logosu`}
                    fill
                    sizes="(max-width: 768px) 100vw, 150px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="animate-marquee2 whitespace-nowrap flex items-center absolute top-0">
            {partners.map((partner) => (
              <div key={`${partner.id}-duplicate`} className="mx-8">
                <div className="w-[150px] h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logosu`}
                    fill
                    sizes="(max-width: 768px) 100vw, 150px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
