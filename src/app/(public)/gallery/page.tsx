import Image from "next/image";
import Link from "next/link";
import { Camera, ExternalLink, ZoomIn } from "lucide-react";

const images = [
  { src: "/images/beed1.jpg", title: "Twilight Cruise", category: "Fleet" },
  { src: "/images/beed2.jpg", title: "Tradition Meets Luxury", category: "Interiors" },
  { src: "/images/beed3.jpg", title: "Morning Mist", category: "Nature" },
  { src: "/images/beed2.jpg", title: "Gourmet Dining", category: "Experience" },
  { src: "/images/beed1.jpg", title: "Corporate Retreat", category: "Events" },
  { src: "/images/beed3.jpg", title: "Sun-drenched Decks", category: "Fleet" },
  { src: "/images/beed1.jpg", title: "Wedding Bliss", category: "Events" },
  { src: "/images/beed2.jpg", title: "Ancient Roots", category: "Nature" },
  { src: "/images/beed3.jpg", title: "Master Suite", category: "Interiors" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white pt-32 pb-24">
      <div className="container mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-4 text-[#C5A059]">
            <Camera className="h-6 w-6" />
            <span className="uppercase tracking-[0.3em] text-sm font-bold">Visual Stories</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Gallery of Moments</h1>
          <p className="text-white/60 text-lg">
            A curated collection of snapshots from our journeys. From the intricate wood carvings of our fleet to the breathtaking sunsets of the Vembanad Lake.
          </p>
        </div>

        {/* Filter Bar Placeholder */}
        <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
          {['All Photos', 'The Fleet', 'Interiors', 'Nature', 'Events', 'Dining'].map((filter, i) => (
            <button 
              key={filter} 
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-[#C5A059] text-[#03090F]' : 'bg-white/5 hover:bg-white/10'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-2xl">
              <Image 
                src={img.src} 
                alt={img.title} 
                width={800} 
                height={1000} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#03090F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 space-y-2">
                <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">{img.category}</span>
                <h3 className="text-xl font-serif font-bold">{img.title}</h3>
                <div className="flex gap-4 pt-4">
                  <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#C5A059] hover:text-[#03090F] transition-all">
                    <ZoomIn className="h-5 w-5" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#C5A059] hover:text-[#03090F] transition-all">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagran CTA */}
        <div className="pt-20 text-center space-y-8">
          <div className="h-20 w-px bg-gradient-to-b from-[#C5A059] to-transparent mx-auto" />
          <h2 className="text-3xl font-serif italic text-white/40">Follow our live journey</h2>
          <Link href="https://instagram.com/coventina" className="text-4xl md:text-5xl font-serif font-bold hover:text-[#C5A059] transition-colors">
            @coventina_ai
          </Link>
        </div>
      </div>
    </div>
  );
}
