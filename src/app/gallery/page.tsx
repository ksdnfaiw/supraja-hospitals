import { Eye } from "lucide-react";

export default function GalleryPage() {
  // Using premium unsplash medical placeholders for the gallery to demonstrate the world-class look
  const images = [
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <div className="bg-surface-gray min-h-screen">
      {/* Hero Section */}
      <section className="bg-clinical-blue text-white py-24 px-4 md:px-gutter relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-label-sm tracking-widest uppercase mb-6 backdrop-blur-md">
            Our Facilities
          </div>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-display-lg mb-6 leading-[1.1]">Hospital <span className="text-healing-emerald">Gallery</span></h1>
          <p className="font-body-lg text-lg md:text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-90 leading-relaxed">
            Take a look at our state-of-the-art facilities, advanced equipment, and comfortable patient rooms designed for optimal recovery.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-4 md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group rounded-3xl overflow-hidden aspect-square sm:aspect-video lg:aspect-square bg-surface-container-low cursor-pointer shadow-sm border border-border-subtle hover:shadow-[0_20px_40px_-15px_rgba(0,48,87,0.2)] transition-all duration-500 hover:-translate-y-1">
              {/* Fallback pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,#003057_2px,transparent_2px)] bg-[size:20px_20px]"></div>
              
              <img src={img} alt={`Facility view ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" loading="lazy" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-clinical-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white/20 text-white p-4 rounded-full backdrop-blur-md border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-clinical-blue shadow-lg">
                  <Eye size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
