import Image from "next/image";
import Link from "next/link";
import { Smile, Tent, Fish, Ship, Utensils, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FamilyVacationsPage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/beed1.jpg" 
          alt="Family Vacation on Houseboat" 
          fill 
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03090F]/80 via-transparent to-[#03090F]/80" />
        
        <div className="relative z-10 text-center space-y-6 px-6">
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold bg-[#C5A059]/10 py-2 px-6 rounded-full border border-[#C5A059]/20">Pure Bonding</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">The Great Escape</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Create memories that span generations. Our luxury houseboats offer a safe, spacious, and enchanting environment for families to reconnect.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold">Unplug & Unwind</h2>
          <div className="mt-4 h-1 w-24 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Fish,
              title: "Fishing Lessons",
              description: "Learn traditional fishing techniques with our expert crew."
            },
            {
              icon: Utensils,
              title: "Junior Chef",
              description: "Kids can join our chef to learn about local spices and snacks."
            },
            {
              icon: Ship,
              title: "Captain's Deck",
              description: "A chance for the little ones to steer the boat under supervision."
            },
            {
              icon: Tent,
              title: "Starlit Camping",
              description: "Enjoy a safe 'camp-out' on the upper deck under the night sky."
            }
          ].map((activity, i) => (
            <div key={i} className="bg-[#004D40]/10 p-8 rounded-2xl border border-white/5 hover:border-[#C5A059]/50 transition-all text-center group">
              <activity.icon className="h-12 w-12 text-[#C5A059] mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h4 className="text-xl font-bold mb-3">{activity.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Comfort Section */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
            <Image 
              src="/images/beed2.jpg" 
              alt="Safe Luxury Interiors" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Luxury Meets Safety</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              We understand that family travel requires peace of mind. Our vessels are equipped with child-safe railings, life jackets for all ages, and 24/7 crew assistance to ensure everyone stays safe while having the time of their lives.
            </p>
            <ul className="space-y-4">
              {[
                "Spacious multi-bedroom suites",
                "Kid-friendly menu options",
                "Indoor games and entertainment",
                "Private and secure environments"
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <Smile className="h-5 w-5 text-[#C5A059]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Where every wave tells a story.</h2>
          <Button asChild className="bg-[#C5A059] text-[#03090F] hover:bg-[#C5A059]/90 rounded-full px-12 py-7 text-xl font-bold group">
            <Link href="/contact" className="flex items-center gap-3">
              Plan Your Family Adventure <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
