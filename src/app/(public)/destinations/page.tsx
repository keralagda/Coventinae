import Image from "next/image";
import Link from "next/link";
import { Compass, Clock, Sunrise, Waves, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
  {
    title: "Vembanad Lake Circuit",
    highlights: ["Pathiramanal Island", "Bird Sanctuary", "Kumarakom Backwaters"],
    duration: "Overnight / Day Cruise",
    description: "Experience the vastness of India's longest lake. Witness the confluence of nature and local life as you drift past ancient temples and lush mangrove forests.",
    image: "https://www.journeysinternational.com/wp-content/uploads/2019/05/india-river-boats.jpg",
    vibe: "Serene & Expansive"
  },
  {
    title: "Alleppey Hinterlands",
    highlights: ["Paddy Fields", "Local Villages", "Narrow Canals"],
    duration: "2 Days / 1 Night",
    description: "Dive into the 'Venice of the East'. This route takes you through narrow canals where you can witness the unique Kuttanad farming below sea level.",
    image: "https://res.cloudinary.com/voyehomes/image/upload/v1760198269/property/166/image/ddf0f37f-e86f-4301-8f2d-c9be8750052f.jpg",
    vibe: "Cultural & Intimate"
  },
  {
    title: "Kochi Gateway",
    highlights: ["Chinese Fishing Nets", "Fort Kochi", "Coastal Views"],
    duration: "Day Cruise",
    description: "A perfect blend of urban history and natural beauty. Sail through the harbour to see the historic fisherman's nets as the sun sets over the Arabian Sea.",
    image: "https://www.fundayholidays.com/wp-content/uploads/2019/10/Cheenavala_Fort-kochi-1024x581.jpg",
    vibe: "Historic & Scenic"
  }
];

export default function DestinationsPage() {
  return (
    <div className="bg-porcelain min-h-screen">
      {/* Hero Section - Luxury Breadcrumb Style */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-ink-black">
        <Image 
          src="/images/beed2.jpg" 
          alt="Kerala Backwater Destinations" 
          fill 
          className="object-cover opacity-40 grayscale-[0.3] brightness-75 transition-transform duration-1000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black/60 to-porcelain/20" />
        
        <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-golden-bronze border border-golden-bronze/30 px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
            Curated Journeys
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">
            Enchanting <span className="text-golden-bronze italic">Routes</span>
          </h1>
          <div className="h-0.5 w-24 bg-golden-bronze mx-auto mt-4" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 container mx-auto px-6 text-center max-w-3xl">
        <p className="text-ink-black/60 text-lg md:text-xl font-light leading-relaxed font-serif italic">
          &quot;From the expansive Vembanad Lake to the intimate canals of Alleppey, discover a tapestry of natural wonders woven through the silent waters of Kerala.&quot;
        </p>
      </section>

      {/* Routes Section - Alternating Layouts */}
      <section className="pb-32 container mx-auto px-6 max-w-7xl">
        <div className="space-y-40">
          {routes.map((route, index) => (
            <div 
              key={route.title} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Container - Fixed Overflow Issues */}
              <div className="w-full lg:w-[55%] relative group">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden relative shadow-2xl transition-all duration-500 group-hover:shadow-golden-bronze/10">
                  <Image 
                    src={route.image} 
                    alt={route.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* Float Vibe Label - Container Bound */}
                <div className="absolute -bottom-6 -right-4 lg:right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border border-porcelain/50">
                    <p className="text-golden-bronze font-bold uppercase tracking-widest text-[10px] mb-1">Vibe</p>
                    <p className="text-ink-black font-serif italic text-lg">{route.vibe}</p>
                  </div>
                </div>

                {/* Decorative border - Container Bound */}
                <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-pine-teal/10 rounded-2xl -z-10 group-hover:border-pine-teal/30 transition-colors" />
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-[45%] space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-golden-bronze" />
                  <span className="text-golden-bronze uppercase tracking-[0.2em] text-xs font-bold">Route {index + 1}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-black leading-tight">
                  {route.title}
                </h2>
                
                <p className="text-ink-black/70 text-lg leading-relaxed font-light">
                  {route.description}
                </p>

                <div className="grid grid-cols-2 gap-8 py-6 border-y border-ink-black/5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-pine-teal">
                      <Compass className="h-4 w-4" />
                      <span className="font-bold uppercase tracking-wider text-[10px]">Highlights</span>
                    </div>
                    <ul className="space-y-1.5">
                      {route.highlights.map(h => (
                        <li key={h} className="text-ink-black/60 text-sm flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-golden-bronze" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-pine-teal">
                      <Clock className="h-4 w-4" />
                      <span className="font-bold uppercase tracking-wider text-[10px]">Cruise Time</span>
                    </div>
                    <p className="text-ink-black/60 text-sm">{route.duration}</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <Button asChild className="bg-pine-teal hover:bg-pine-teal/90 text-white rounded-full px-8 py-6 h-auto transition-all transform hover:translate-x-1 group">
                    <Link href="/contact" className="flex items-center gap-3">
                      Plan My Journey <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid - Inverted Section */}
      <section className="py-24 bg-ink-black relative overflow-hidden text-porcelain">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-golden-bronze/20 via-transparent to-pine-teal/20" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid md:grid-cols-3 gap-16">
          <div className="space-y-6 text-center group">
            <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-golden-bronze/20 transition-all duration-500 group-hover:bg-golden-bronze group-hover:border-transparent">
              <Sunrise className="h-7 w-7 text-golden-bronze transition-colors group-hover:text-ink-black" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Sunrise Rituals</h3>
            <p className="text-porcelain/50 font-light leading-relaxed">Wake up to the gentle lap of water and witness the golden hour reflection on the silent lake.</p>
          </div>
          
          <div className="space-y-6 text-center group">
            <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-golden-bronze/20 transition-all duration-500 group-hover:bg-golden-bronze group-hover:border-transparent">
              <Waves className="h-7 w-7 text-golden-bronze transition-colors group-hover:text-ink-black" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Hidden Lagoons</h3>
            <p className="text-porcelain/50 font-light leading-relaxed">Our captains know the secret spots where you can enjoy complete seclusion and tranquility.</p>
          </div>
          
          <div className="space-y-6 text-center group">
            <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-golden-bronze/20 transition-all duration-500 group-hover:bg-golden-bronze group-hover:border-transparent">
              <Compass className="h-7 w-7 text-golden-bronze transition-colors group-hover:text-ink-black" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Local Mastery</h3>
            <p className="text-porcelain/50 font-light leading-relaxed">Safe and informative journeys guided by locals who have navigated these waters for generations.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-ink-black mb-8">Ready to explore the <span className="italic text-pine-teal font-serif">silent waters</span>?</h2>
        <Link 
          href="/houseboats" 
          className="text-golden-bronze uppercase tracking-[0.3em] font-bold text-sm border-b-2 border-golden-bronze/30 pb-2 hover:border-golden-bronze transition-all"
        >
          View Our Fleet
        </Link>
      </section>
    </div>
  );
}
