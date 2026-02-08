import Image from "next/image";
import Link from "next/link";
import { Sun, Clock, Coffee, Waves, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DayCruisesPage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 py-20 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 text-[#C5A059] bg-[#C5A059]/10 px-4 py-2 rounded-full text-sm font-bold">
            <Sun className="h-4 w-4" />
            Sunshine & Serenity
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">Elite Day <br/>Cruises</h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Perfect for those with limited time but a thirst for luxury. Experience the essence of the backwaters in a refined daytime journey.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-full bg-[#004D40] flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-xl font-bold">6-Hour Immersion</h4>
                <p className="text-white/50">From 11:00 AM to 5:00 PM, covering the most scenic routes of the Vembanad Lake.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-full bg-[#004D40] flex items-center justify-center shrink-0">
                <Coffee className="h-6 w-6 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Traditional Lunch</h4>
                <p className="text-white/50">A freshly prepared Kerala feast served on banana leaves with premium seafood options.</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button asChild className="bg-[#C5A059] text-[#03090F] hover:bg-[#C5A059]/90 rounded-full px-10 py-7 text-lg font-bold group">
              <Link href="/contact" className="flex items-center gap-3">
                Check Availability <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 relative">
          <div className="space-y-6 mt-12">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10">
              <Image src="/images/beed1.jpg" alt="Day Cruise 1" fill className="object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10">
              <Image src="/images/beed3.jpg" alt="Day Cruise 2" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10">
              <Image src="/images/beed2.jpg" alt="Day Cruise 3" fill className="object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10">
              <Image src="/images/beed1.jpg" alt="Day Cruise 4" fill className="object-cover" />
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 bg-[#C5A059]/10 blur-[80px] rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
