import React from 'react';

const insurancePartners = [
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702012/download_4_pf0m0j.jpg",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702012/download_5_bfebc9.jpg",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702011/download_3_gds5dz.jpg",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702012/download_3_mxoaoa.png",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702011/download_2_qgxohl.png",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702011/download_1_zvskfx.jpg",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702011/download_z5fbqr.png",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702011/download_2_s9hnum.jpg",
  "https://res.cloudinary.com/dizaawlyl/image/upload/v1781702011/download_ksuop1.jpg"
];

export default function InsurancePartners() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden border-t border-border-subtle">
      <div className="max-w-container-max mx-auto px-4 md:px-gutter text-center mb-8">
        <h2 className="font-display-lg text-headline-lg text-clinical-blue mb-2">Our Insurance Partners</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We partner with leading insurance providers to ensure you receive seamless, cashless treatments.</p>
      </div>
      
      <div className="w-full relative">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 md:gap-12 px-4 md:px-8 items-center">
          {[...insurancePartners, ...insurancePartners].map((imgSrc, idx) => (
            <div key={idx} className="flex-shrink-0 bg-white shadow-sm border border-border-subtle rounded-xl p-4 w-[160px] h-[80px] md:w-[200px] md:h-[100px] flex items-center justify-center hover:shadow-md transition-shadow">
              <img src={imgSrc} alt={`Insurance Partner ${idx + 1}`} className="max-w-full max-h-full object-contain transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
