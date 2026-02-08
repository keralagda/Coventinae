import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, Video, Wifi, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CorporateEventsPage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/beed1.jpg" 
          alt="Corporate Events on Houseboat" 
          fill 
          className="object-cover opacity-50 contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03090F] to-transparent" />
        
        <div className="relative z-10 text-center space-y-6 px-6">
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold border border-[#C5A059]/30 py-2 px-6 rounded-full">Bespoke MICE</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Corporate Retreats</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg italic">
            Transform your boardroom into a floating sanctuary. Elevate team synergy amidst the tranquil Kerala backwaters.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif font-bold leading-tight">Beyond the Standard <br/><span className="text-[#C5A059]">Conference Room</span></h2>
          <p className="text-white/60 text-lg leading-relaxed">
            At Coventina, we redefine corporate meetings. Our luxury houseboats are equipped with state-of-the-art facilities to ensure productivity while providing a refreshing environment that fosters creativity and connection.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059]">
                <Wifi className="h-6 w-6" />
              </div>
              <h4 className="font-bold">High-Speed Connectivity</h4>
              <p className="text-sm text-white/50">Seamless satellite internet ensuring you stay connected even in the heart of the lake.</p>
            </div>
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059]">
                <Video className="h-6 w-6" />
              </div>
              <h4 className="font-bold">AV Facilities</h4>
              <p className="text-sm text-white/50">Integrated projection systems and high-fidelity audio for impactful presentations.</p>
            </div>
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059]">
                <Coffee className="h-6 w-6" />
              </div>
              <h4 className="font-bold">Premium Catering</h4>
              <p className="text-sm text-white/50">Customizable menus ranging from traditional Kerala feasts to international cuisines.</p>
            </div>
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059]">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="font-bold">Breakout Sessions</h4>
              <p className="text-sm text-white/50">Multiple deck levels providing perfect spaces for small group discussions.</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/beed2.jpg" 
              alt="Floating Meeting Room" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-[#C5A059] p-10 rounded-2xl hidden md:block">
            <p className="text-4xl font-serif font-bold text-[#03090F]">50+</p>
            <p className="text-[#03090F]/70 font-bold uppercase tracking-widest text-xs">MNCs Served</p>
          </div>
        </div>
      </section>

      {/* Packages CTA */}
      <section className="py-24 bg-[#004D40]/10 border-y border-white/5">
        <div className="container mx-auto px-6 text-center space-y-8">
          <Briefcase className="h-12 w-12 text-[#C5A059] mx-auto" />
          <h2 className="text-4xl font-serif font-bold">Custom Corporate Packages</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From half-day seminars to multi-day leadership retreats, we tailor every aspect to meet your organization's specific goals.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-[#C5A059] text-[#03090F] hover:bg-[#C5A059]/90 rounded-full px-10 py-7 text-lg font-bold group">
              <Link href="/contact" className="flex items-center gap-2">
                Get a Corporate Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
