import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Camera, Utensils, Music, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WeddingCruisesPage() {
  return (
    <div className="bg-porcelain min-h-screen text-ink-black">
      {/* Hero Section - Luxury Breadcrumb Style */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-ink-black">
        <Image 
          src="/images/beed2.jpg" 
          alt="Wedding on Houseboat" 
          fill 
          className="object-cover opacity-50 grayscale-[0.2] brightness-75 transition-transform duration-1000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black/60 to-porcelain/30" />
        
        <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-golden-bronze border border-golden-bronze/30 px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
            Unforgettable Vows
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">
            A Water <span className="text-golden-bronze italic">Wedding</span>
          </h1>
          <div className="h-0.5 w-32 bg-golden-bronze mx-auto mt-6" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 container mx-auto px-6 text-center max-w-3xl">
        <p className="text-ink-black/70 text-lg md:text-xl font-light leading-relaxed font-serif italic">
          &quot;Say &apos;I Do&apos; amidst the shimmering waters of the Vembanad Lake. Experience the magic of a bespoke floating wedding where the horizon is your chapel.&quot;
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="pb-32 container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-golden-bronze" />
            <Heart className="h-6 w-6 text-golden-bronze" />
            <div className="h-px w-12 bg-golden-bronze" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink-black">Your Eternal Milestone</h2>
          <p className="text-ink-black/50 font-light text-lg">We specialize in creating intimate, luxurious ceremonies that reflect your unique love story.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: Sparkles,
              title: "Floral Decoration",
              text: "Traditional Kerala garlands or contemporary arrangements tailored to your bespoke wedding theme."
            },
            {
              icon: Utensils,
              title: "Royal Banquet",
              text: "A grand Sadya or a multi-cuisine buffet served on the sun deck as you sail through the sunset."
            },
            {
              icon: Music,
              title: "Live Entertainment",
              text: "Traditional flute recitals or contemporary live bands to set the perfect mood for your first dance."
            },
            {
              icon: Camera,
              title: "Photography Spots",
              text: "Private access to the most photogenic hidden lagoons for your pre-wedding and reception shoots."
            },
            {
              icon: Heart,
              title: "Honeymoon Suite",
              text: "The master bedroom transformed into a romantic sanctuary with rose petals and specialized hampers."
            },
            {
              icon: Users,
              title: "Guest Management",
              text: "Seamless group transfers and dedicated hospitality for up to 120 guests across our luxury fleet."
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-pine-teal/5 transition-all duration-500 hover:shadow-2xl hover:border-golden-bronze/10 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <service.icon className="h-24 w-24" />
              </div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-pine-teal/5 flex items-center justify-center text-pine-teal mb-8 group-hover:bg-pine-teal group-hover:text-white transition-all">
                  <service.icon className="h-7 w-7" />
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4 text-ink-black">{service.title}</h4>
                <p className="text-ink-black/60 font-light leading-relaxed">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Quote Section - Full Width Aesthetic */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-ink-black">
        <Image 
          src="/images/beed3.jpg" 
          alt="Sunset Wedding" 
          fill 
          className="object-cover opacity-40 grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-ink-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-3xl md:text-5xl font-serif italic text-porcelain max-w-4xl mx-auto leading-tight">
            &quot;The water was our witness, the breeze our choir, and the stars our canopy. It was more than a wedding; it was a dream adrift.&quot;
          </p>
          <div className="mt-12 h-px w-32 bg-golden-bronze mx-auto" />
        </div>
      </section>

      {/* Inquiry CTA - Luxury Pattern */}
      <section className="py-24 bg-white/50 border-y border-pine-teal/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-black">Start Planning Your Dream Wedding</h2>
            <p className="text-ink-black/50 font-light text-lg">Bespoke packages tailored to every nuance of your celebration.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-pine-teal hover:bg-pine-teal/90 text-white rounded-full px-12 py-8 h-auto text-xl font-bold group">
              <Link href="/contact" className="flex items-center gap-3">
                Inquire Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Link 
              href="/gallery" 
              className="text-golden-bronze uppercase tracking-[0.3em] font-bold text-sm border-b-2 border-golden-bronze/30 pb-2 hover:border-golden-bronze transition-all"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
