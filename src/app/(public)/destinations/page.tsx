import Image from "next/image";
import Link from "next/link";
import { MapPin, Compass, Clock, Sunrise, Waves, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
  {
    title: "Vembanad Lake Circuit",
    highlights: ["Pathiramanal Island", "Bird Sanctuary", "Kumarakom Backwaters"],
    duration: "Overnight / Day Cruise",
    description: "Experience the vastness of India's longest lake. Witness the confluence of nature and local life as you drift past ancient temples and lush mangrove forests.",
    image: "/images/beed2.jpg",
    vibe: "Serene & Expansive"
  },
  {
    title: "Alleppey Hinterlands",
    highlights: ["Paddy Fields", "Local Villages", "Narrow Canals"],
    duration: "2 Days / 1 Night",
    description: "Dive into the 'Venice of the East'. This route takes you through narrow canals where you can witness the unique Kuttanad farming below sea level.",
    image: "/images/beed1.jpg",
    vibe: "Cultural & Intimate"
  },
  {
    title: "Kochi Gateway",
    highlights: ["Chinese Fishing Nets", "Fort Kochi", "Coastal Views"],
    duration: "Day Cruise",
    description: "A perfect blend of urban history and natural beauty. Sail through the harbour to see the historic fisherman's nets as the sun sets over the Arabian Sea.",
    image: "/images/beed3.jpg",
    vibe: "Historic & Scenic"
  }
];

export default function DestinationsPage() {
  return (
    <div className="bg-[#03090F] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/beed2.jpg" 
          alt="Kerala Backwater Destinations" 
          fill 
          className="object-cover opacity-30 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-[#03090F]/40" />
        
        <div className="relative z-10 text-center space-y-6 px-6 max-w-4xl">
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold bg-white/5 py-2 px-4 rounded-full backdrop-blur-md">Explore Kerala</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Enchanting Routes</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            From the expansive Vembanad Lake to the intimate canals of Alleppey, discover the diverse beauty of the backwaters.
          </p>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="space-y-32">
          {routes.map((route, index) => (
            <div 
              key={route.title} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}
            >
              {/* Image with Decorative Element */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative z-10">
                  <Image 
                    src={route.image} 
                    alt={route.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-full h-full border border-[#C5A059]/20 rounded-3xl z-0" />
                <div className="absolute -bottom-10 -right-10 hidden lg:block">
                  <div className="bg-[#004D40] p-8 rounded-2xl shadow-2xl border border-white/5 space-y-2">
                    <p className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">Vibe</p>
                    <p className="text-xl font-serif italic">{route.vibe}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8 lg:pt-8">
                <div className="inline-flex items-center gap-2 text-[#C5A059] bg-[#C5A059]/10 px-4 py-2 rounded-full text-sm font-semibold">
                  <MapPin className="h-4 w-4" />
                  Route {index + 1}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold">{route.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {route.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#C5A059]">
                      <Compass className="h-5 w-5" />
                      <span className="font-bold uppercase tracking-widest text-xs">Highlights</span>
                    </div>
                    <ul className="space-y-2 text-white/70">
                      {route.highlights.map(h => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#C5A059]">
                      <Clock className="h-5 w-5" />
                      <span className="font-bold uppercase tracking-widest text-xs">Duration</span>
                    </div>
                    <p className="text-white/70">{route.duration}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild className="bg-transparent border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059] rounded-full px-8 py-6 transition-all group">
                    <Link href="/contact" className="flex items-center gap-2">
                      Plan This Route <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-[#011627] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#C5A059_0%,transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <Sunrise className="h-10 w-10 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold">Sunrise Rituals</h3>
            <p className="text-white/50">Wake up to the gentle lap of water and witness the golden hour reflection on the lake.</p>
          </div>
          <div className="space-y-4">
            <Waves className="h-10 w-10 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold">Hidden Lagoons</h3>
            <p className="text-white/50">Our captains know the secret spots where you can enjoy complete seclusion and tranquility.</p>
          </div>
          <div className="space-y-4">
            <Compass className="h-10 w-10 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold">Expert Navigation</h3>
            <p className="text-white/50">Safe, smooth, and informative journeys guided by locals who were born on these waters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
