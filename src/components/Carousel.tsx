import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* Images container */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img 
              src={img} 
              alt={`Banner ${i + 1}`} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Placeholder fallback for missing images
                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none"><rect width="800" height="400" fill="%231a1a1a"/><text x="400" y="200" fill="%23444" font-family="sans-serif" font-size="24" text-anchor="middle" alignment-baseline="middle">Banner do Jogo</text></svg>';
              }}
            />
            {/* Dark overlay specifically for carousel to ensure text readability */}
            <div className="absolute inset-0 bg-[#0b0b0b]/40" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-[#ff8a00]" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
