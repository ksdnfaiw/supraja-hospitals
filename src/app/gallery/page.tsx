"use client";

import { useState } from "react";
import { Maximize2, X, Eye } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // A mix of high-quality premium medical/hospital placeholders from Unsplash
  const placeholderIds = [
    "1581594693702-fbdc51b2763b",
    "1519494026892-80bbd2d6fd0d",
    "1551076805-e1869033e561",
    "1538108149393-fbbd81895907",
    "1516549655169-df83a0774514",
    "1579684385127-1ef15d508118"
  ];

  // Generate 20+ images using the ids above to populate the grid
  const images = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    url: `https://images.unsplash.com/photo-${placeholderIds[i % placeholderIds.length]}?auto=format&fit=crop&q=80&w=800`,
    title: `Gallery Image ${i + 1}`,
    height: i % 5 === 0 ? "h-[450px]" : i % 3 === 0 ? "h-[350px]" : "h-[250px]" // Randomize heights for masonry effect
  }));

  return (
    <div className="bg-surface-gray min-h-screen">
      {/* Hero Section */}
      <section className="bg-clinical-blue text-white py-24 px-gutter relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/about_us_hero.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-clinical-blue via-clinical-blue/90 to-clinical-blue/40"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-label-sm tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
            Our Facilities
          </div>
          <h1 className="font-display-lg text-display-lg mb-6 drop-shadow-md">Hospital <span className="text-healing-emerald">Gallery</span></h1>
          <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-100 drop-shadow-md">
            Explore our world-class infrastructure, state-of-the-art facilities, and the compassionate care we provide every day.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-gutter max-w-container-max mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="relative group overflow-hidden rounded-3xl break-inside-avoid cursor-pointer shadow-sm border border-border-subtle hover:shadow-[0_20px_40px_-15px_rgba(0,48,87,0.2)] transition-all duration-500 hover:-translate-y-1"
              onClick={() => setSelectedImage(img.url)}
            >
              <div className={`w-full ${img.height} relative bg-surface-container-low`}>
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-clinical-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white/20 text-white p-4 rounded-full backdrop-blur-md border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-clinical-blue shadow-lg">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 opacity-100 animate-in fade-in duration-300"
             onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={28} />
          </button>
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Expanded gallery view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}
