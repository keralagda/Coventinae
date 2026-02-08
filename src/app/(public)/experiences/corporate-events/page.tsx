import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, Video, Wifi, Coffee, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CorporateEventsPage() {
  return (
    <div className="bg-porcelain min-h-screen">
      {/* Hero Section - Luxury Breadcrumb Style */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-ink-black">
        <Image 
          src="/images/beed1.jpg" 
          alt="Corporate Events on Houseboat" 
          fill 
          className="object-cover opacity-40 grayscale-[0.2] brightness-75 transition-transform duration-1000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black/60 to-porcelain/20" />
        
        <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-golden-bronze border border-golden-bronze/30 px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
            Bespoke MICE
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">
            Corporate <span className="text-golden-bronze italic">Retreats</span>
          </h1>
          <div className="h-0.5 w-24 bg-golden-bronze mx-auto mt-4" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 container mx-auto px-6 text-center max-w-3xl">
        <p className="text-ink-black/70 text-lg md:text-xl font-light leading-relaxed font-serif italic">
          &quot;Transform your boardroom into a floating sanctuary. Elevate team synergy amidst the tranquil Kerala backwaters.&quot;
        </p>
      </section>

      {/* Benefits Content Section - Alternating Layout Style */}
      <section className="pb-32 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-golden-bronze" />
                <span className="text-golden-bronze uppercase tracking-[0.2em] text-xs font-bold font-sans">Business Beyond Walls</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-black leading-tight">
                Beyond the Standard <span className="text-pine-teal italic">Conference</span>
              </h2>
              <p className="text-ink-black/60 text-lg leading-relaxed font-light">
                At Coventina, we redefine corporate meetings. Our luxury houseboats are equipped with 
                state-of-the-art facilities ensuring productivity while providing an environment that 
                fosters deep creativity and connection.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4 group">
                <div className="h-12 w-12 rounded-xl bg-pine-teal/5 flex items-center justify-center text-pine-teal group-hover:bg-pine-teal group-hover:text-white transition-all">
                  <Wifi className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-ink-black uppercase tracking-widest text-[10px]">High-Speed Connectivity</h4>
                <p className="text-sm text-ink-black/50 font-light leading-relaxed">Seamless satellite internet ensuring you stay connected in the heart of the lake.</p>
              </div>
              
              <div className="space-y-4 group">
                <div className="h-12 w-12 rounded-xl bg-golden-bronze/5 flex items-center justify-center text-golden-bronze group-hover:bg-golden-bronze group-hover:text-white transition-all">
                  <Video className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-ink-black uppercase tracking-widest text-[10px]">AV Facilities</h4>
                <p className="text-sm text-ink-black/50 font-light leading-relaxed">Integrated projection systems and high-fidelity audio for impactful sessions.</p>
              </div>

              <div className="space-y-4 group">
                <div className="h-12 w-12 rounded-xl bg-golden-bronze/5 flex items-center justify-center text-golden-bronze group-hover:bg-golden-bronze group-hover:text-white transition-all">
                  <Coffee className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-ink-black uppercase tracking-widest text-[10px]">Premium Catering</h4>
                <p className="text-sm text-ink-black/50 font-light leading-relaxed">Customizable menus ranging from traditional Kerala feasts to global cuisines.</p>
              </div>

              <div className="space-y-4 group">
                <div className="h-12 w-12 rounded-xl bg-pine-teal/5 flex items-center justify-center text-pine-teal group-hover:bg-pine-teal group-hover:text-white transition-all">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-ink-black uppercase tracking-widest text-[10px]">Breakout Spaces</h4>
                <p className="text-sm text-ink-black/50 font-light leading-relaxed">Multiple deck levels providing perfect spaces for focused group discussions.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/images/beed2.jpg" 
                alt="Floating Meeting Room" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            
            {/* Stat Overlay - Container Bound */}
            <div className="absolute -bottom-8 -left-8 z-20">
              <div className="bg-white/90 backdrop-blur-md px-10 py-8 rounded-2xl shadow-xl border border-porcelain/50">
                <p className="text-5xl font-serif font-bold text-ink-black mb-1">50+</p>
                <p className="text-golden-bronze font-bold uppercase tracking-widest text-[10px]">MNCs Served</p>
              </div>
            </div>
            
            <div className="absolute top-4 -right-4 left-4 -bottom-4 border border-golden-bronze/10 rounded-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Packages Section - Inverted Grid */}
      <section className="py-24 bg-ink-black text-porcelain relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-bl from-pine-teal/20 via-transparent to-golden-bronze/20" />
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center space-y-12">
          <div className="space-y-4">
             <Briefcase className="h-12 w-12 text-golden-bronze mx-auto mb-4" />
             <h2 className="text-4xl font-serif font-bold">Custom Corporate Packages</h2>
             <p className="text-porcelain/60 max-w-2xl mx-auto font-light leading-relaxed">
               From half-day critical seminars to multi-day leadership retreats, we tailor every aspect 
               to meet your organization&apos;s specific goals and cultural ethos.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
             <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-pine-teal shrink-0 mt-1" />
                <p className="text-sm font-light">Custom Branded Decor & Stationery</p>
             </div>
             <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-pine-teal shrink-0 mt-1" />
                <p className="text-sm font-light">Team Building Activity Coordination</p>
             </div>
             <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-pine-teal shrink-0 mt-1" />
                <p className="text-sm font-light">Dedicated On-board Event Manager</p>
             </div>
             <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-pine-teal shrink-0 mt-1" />
                <p className="text-sm font-light">Airport & Hotel Group Transfers</p>
             </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-golden-bronze hover:bg-golden-bronze/90 text-ink-black rounded-full px-12 py-8 h-auto text-lg font-bold group">
              <Link href="/contact" className="flex items-center gap-3">
                Get a Corporate Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-ink-black mb-8">Ready to host your <span className="italic text-pine-teal font-serif">next milestone</span>?</h2>
        <Link 
          href="/houseboats" 
          className="text-golden-bronze uppercase tracking-[0.3em] font-bold text-sm border-b-2 border-golden-bronze/30 pb-2 hover:border-golden-bronze transition-all"
        >
          View The Boardroom Fleet
        </Link>
      </section>
    </div>
  );
}
