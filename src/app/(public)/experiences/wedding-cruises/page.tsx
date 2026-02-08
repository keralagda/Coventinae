import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Camera, Utensils, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WeddingCruisesPage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/beed2.jpg" 
          alt="Wedding on Houseboat" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#03090F]/20 to-[#03090F]" />
        
        <div className="relative z-10 text-center space-y-6 px-6">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-sm font-bold">Unforgettable Vows</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold">A Water Wedding</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg font-serif italic">
            Say &quot;I Do&quot; amidst the shimmering waters of the Vembanad Lake. Experience the magic of a bespoke floating wedding.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Heart className="h-10 w-10 text-rose-400 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Your Eternal Milestone</h2>
          <p className="text-white/50">We specialize in creating intimate, luxurious wedding ceremonies and receptions that reflect your unique love story.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: Sparkles,
              title: "Floral Decoration",
              text: "Traditional Kerala garlands or contemporary floral arrangements tailored to your wedding theme."
            },
            {
              icon: Utensils,
              title: "Royal Banquet",
              text: "A grand Sadya or a multi-cuisine buffet served on the deck as you sail through the sunset."
            },
            {
              icon: Music,
              title: "Live Entertainment",
              text: "Traditional Chendamelam, flute recitals, or a contemporary live band to set the perfect mood."
            },
            {
              icon: Camera,
              title: "Photography Hooks",
              text: "Access to the most photogenic spots in the backwaters for your pre-wedding and wedding shoots."
            },
            {
              icon: Heart,
              title: "Honeymoon Suite",
              text: "The master bedroom transformed into a romantic sanctuary for the newlyweds' first night."
            },
            {
              icon: Users,
              title: "Guest Management",
              text: "Coordination of guest transfers and dedicated hospitality for up to 100 guests across our fleet."
            }
          ].map((service, i) => (
            <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/5 hover:border-[#C5A059]/30 transition-all hover:-translate-y-2 group">
              <service.icon className="h-10 w-10 text-[#C5A059] mb-6 transition-transform group-hover:scale-110" />
              <h4 className="text-2xl font-serif font-bold mb-4">{service.title}</h4>
              <p className="text-white/50 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Quote Section */}
      <section className="py-32 relative">
        <Image 
          src="/images/beed3.jpg" 
          alt="Sunset Wedding" 
          fill 
          className="object-cover opacity-20"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-3xl md:text-5xl font-serif italic max-w-4xl mx-auto leading-tight">
            &quot;The water was our witness, the breeze our choir, and the stars our canopy. It was more than a wedding; it was a dream adrift.&quot;
          </p>
          <div className="mt-12 h-px w-32 bg-[#C5A059] mx-auto" />
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-24 bg-[#1A374D]/20">
        <div className="container mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl font-serif font-bold">Start Planning Your Dream Wedding</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-[#C5A059] text-[#03090F] hover:bg-[#C5A059]/90 rounded-full px-12 py-8 text-xl font-bold">
              <Link href="/contact">Inquire Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#03090F] rounded-full px-12 py-8 text-xl font-bold transition-all">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
