"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface Testimonial {
  name: string;
  condition: string;
  videoSrc: string;
  posterSrc: string;
}

export default function TestimonialVideo({ testimonial }: { testimonial: Testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[260px] md:min-w-[300px] w-[260px] md:w-[300px] flex-shrink-0">
      <div className="aspect-[9/16] bg-clinical-blue/20 relative">
        <video 
          ref={videoRef}
          className={`w-full h-full object-cover transition-transform duration-500 ${!isPlaying ? 'group-hover:scale-105' : ''}`}
          poster={testimonial.posterSrc} 
          loop 
          playsInline
          controls={isPlaying}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        >
            <source src={testimonial.videoSrc} type="video/mp4" />
        </video>
        
        {!isPlaying && (
          <div 
            className="absolute inset-0 bg-clinical-blue/40 flex items-center justify-center group-hover:bg-clinical-blue/20 transition-colors cursor-pointer"
            onClick={handlePlayClick}
          >
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="text-clinical-blue fill-clinical-blue ml-1" size={32} />
              </div>
          </div>
        )}
      </div>
      <div className="p-6 bg-white border-t border-border-subtle">
          <p className="font-label-md text-clinical-blue mb-1">{testimonial.name}</p>
          <p className="text-label-sm text-on-surface-variant">{testimonial.condition}</p>
      </div>
    </div>
  );
}
