import Image from "next/image";
import Link from "next/link";
import { Anchor, Users, Bed, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const fleet = [
  {
    name: "Coventina Imperial",
    category: "Ultra-Luxury",
    capacity: "2-4 Guests",
    rooms: "2 Deluxe Suites",
    description: "The crown jewel of our fleet, featuring panoramic glass walls, private sun decks, and a dedicated personal chef.",
    image: "/images/beed1.jpg",
    features: ["Private Jacuzzi", "Gourmet Kitchen", "Glass Ceiling"]
  },
  {
    name: "Vembanad Queen",
    category: "Premium Suite",
    capacity: "4-6 Guests",
    rooms: "3 Bedrooms",
    description: "Ideal for families and small groups, offering a blend of traditional Kerala architecture and modern luxury.",
    image: "/images/beed2.jpg",
    features: ["Upper Deck Lounge", "Traditional Aesthetics", "Spacious Living Area"]
  },
  {
    name: "Monsoon Mist",
    category: "Boutique Experience",
    capacity: "2 Guests",
    rooms: "1 Romantic Suite",
    description: "Designed for couples, this intimate houseboat provides the perfect setting for a romantic getaway.",
    image: "/images/beed3.jpg",
    features: ["Candle-light Dining", "Private Balcony", "Honeymoon Special"]
  }
];

export default function HouseboatsPage() {
  return (
    <div className="bg-[#03090F] text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/beed1.jpg" 
          alt="Luxury Houseboat Fleet" 
          fill 
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03090F]/60 via-transparent to-[#03090F]" />
        
        <div className="relative z-10 text-center space-y-6 px-6">
          <span className="text-[#C5A059] uppercase tracking-[0.3em] text-sm font-bold">Our Fleet</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Luxury Houseboats</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our meticulously crafted vessels, each designed to provide an unparalleled experience on the serene waters of Kerala.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid gap-20">
          {fleet.map((boat, index) => (
            <div 
              key={boat.name} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                <Image 
                  src={boat.image} 
                  alt={boat.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-6 left-6 bg-[#C5A059] text-[#03090F] px-4 py-1 rounded-full text-sm font-bold">
                  {boat.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 space-y-6">
                <h2 className="text-4xl font-serif font-bold">{boat.name}</h2>
                <p className="text-white/60 leading-relaxed text-lg">
                  {boat.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <Users className="h-5 w-5 text-[#C5A059]" />
                    <span>{boat.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Bed className="h-5 w-5 text-[#C5A059]" />
                    <span>{boat.rooms}</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  {boat.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-white/70">
                      <ShieldCheck className="h-4 w-4 text-[#C5A059]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Button asChild className="bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#03090F] rounded-full px-8 py-6 font-bold group">
                    <Link href="/contact" className="flex items-center gap-2">
                      Inquire Monthly <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience CTA */}
      <section className="py-24 bg-[#004D40]/20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center space-y-8">
          <Anchor className="h-12 w-12 text-[#C5A059] mx-auto mb-4" />
          <h2 className="text-4xl font-serif font-bold">Ready to Set Sail?</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our luxury houseboats are booking fast for the upcoming season. Plan your bespoke backwater journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#C5A059] text-[#03090F] hover:bg-[#C5A059]/90 rounded-full px-10 py-6 font-bold">
              <Link href="/contact">Book Your Journey</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#03090F] rounded-full px-10 py-6 font-bold transition-all">
              <Link href="/destinations">Explore Routes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
