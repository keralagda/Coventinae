import Image from "next/image";
import Link from "next/link";
import { Moon, Star, Utensils, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CandleLightDinnerPage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/beed3.jpg" 
          alt="Candle Light Dinner on Houseboat" 
          fill 
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03090F] via-transparent to-transparent" />
        
        <div className="relative z-10 text-center space-y-8 px-6">
          <Moon className="h-10 w-10 text-[#C5A059] mx-auto animate-pulse" />
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight">Romance <br/>under the Stars</h1>
            <p className="text-[#C5A059] uppercase tracking-[0.5em] text-sm font-bold">Intimate Waterfront Dining</p>
          </div>
          <p className="text-white/60 max-w-lg mx-auto text-lg italic font-serif">
            A symphony of flavors served in complete seclusion. Let the ripples of the water be the soundtrack to your perfect evening.
          </p>
        </div>
      </section>

      {/* Menu & Ambiance Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold">The Ambiance</h2>
              <p className="text-white/50 leading-relaxed text-lg">
                Imagine a deck illuminated only by the soft glow of candles and the shimmer of stars reflecting on the lake. Every detail, from the rose petals to the silk table runners, is curated to create an atmosphere of pure enchantment.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Star,
                  title: "Private Deck Access",
                  text: "Exclusive use of the upper deck for an undisturbed evening."
                },
                {
                  icon: Utensils,
                  title: "Chef's Signature Menu",
                  text: "A 5-course gourmet meal prepared specifically for your palate."
                },
                {
                  icon: Heart,
                  title: "Bespoke Decor",
                  text: "Personalized floral arrangements and ambient lighting."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-14 w-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A059] transition-all">
                    <item.icon className="h-7 w-7 text-[#C5A059] group-hover:text-[#03090F] transition-all" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-white/40 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square">
            <div className="absolute inset-0 border border-[#C5A059]/30 rounded-[100px] rotate-3 -z-10" />
            <div className="absolute inset-0 border border-white/10 rounded-[100px] rotate-6 -z-10" />
            <Image 
              src="/images/beed3.jpg" 
              alt="Gourmet Platter" 
              fill 
              className="object-cover rounded-[100px]"
            />
          </div>
        </div>
      </section>

      {/* Booking Block */}
      <section className="py-24 bg-[#004D40]/20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-serif font-bold">Limited Exclusive Slots</h2>
          <p className="text-white/50 max-w-xl mx-auto italic">Due to the high level of personalization, we only host one private dinner per vessel each night.</p>
          <div className="flex justify-center">
            <Button asChild className="bg-[#C5A059] text-[#03090F] hover:bg-[#C5A059]/90 rounded-full px-12 py-8 text-xl font-bold group">
              <Link href="/contact" className="flex items-center gap-3">
                Reserve Your Evening <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
