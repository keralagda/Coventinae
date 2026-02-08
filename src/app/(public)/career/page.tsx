import Image from "next/image"
import Link from "next/link"
import { Mail, Calendar, Briefcase, Info, MapPin, ArrowRight, MessageSquare } from "lucide-react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Careers | Join the Coventina Team",
  description: "Join our team at Coventina. We are currently hiring for Sales Executives in the Hospitality Industry. Check out our open positions."
}

export default function CareerPage() {
  return (
    <div className="bg-porcelain min-h-screen">
      {/* Hero Section - Luxury Breadcrumb Style */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-ink-black">
        <Image 
          src="/images/career.jpeg" 
          alt="Careers at Coventina" 
          fill 
          className="object-cover opacity-40 grayscale-[0.2] brightness-75 transition-transform duration-1000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black/60 to-porcelain/20" />
        
        <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-golden-bronze border border-golden-bronze/30 px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
            Join Our Legacy
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">
            Career <span className="text-golden-bronze italic">Opportunities</span>
          </h1>
          <div className="h-0.5 w-24 bg-golden-bronze mx-auto mt-4" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 container mx-auto px-6 text-center max-w-3xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-black">
            Coventina is <span className="text-pine-teal italic">Hiring</span>
          </h2>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-ink-black/80 font-serif leading-relaxed">
              Sales Executive for the Hospitality Industry
            </p>
            <p className="text-golden-bronze font-bold uppercase tracking-widest text-sm">
              Current Openings: 3 Positions (2 Female, 1 Male)
            </p>
          </div>
          <div className="h-px w-16 bg-pine-teal/20 mx-auto" />
        </div>
      </section>

      {/* Role & Org Section - Responsive Grid */}
      <section className="py-24 bg-white/50 border-y border-pine-teal/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image 
                   src="/images/career.jpeg" 
                   alt="Hospitality Role" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-golden-bronze/10 rounded-2xl -z-10 group-hover:border-golden-bronze/30 transition-colors" />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-pine-teal">
                <div className="h-12 w-12 rounded-full bg-pine-teal/5 flex items-center justify-center">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-ink-black">The Role</h3>
              </div>
              <p className="text-ink-black/70 text-lg leading-relaxed font-light">
                Develop and implement marketing strategies collaborating with travel agents, 5-star hotels, 
                corporate houses, and individuals. You will be the face of our luxury brand, 
                presenting the unique experience of our premium suites, stage-equipped conference halls, 
                and world-class multi-cuisine catering to a global clientele.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="order-2 lg:order-1 space-y-8">
                <div className="flex items-center gap-4 text-pine-teal">
                  <div className="h-12 w-12 rounded-full bg-pine-teal/5 flex items-center justify-center">
                    <Info className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-ink-black">Our Ethos</h3>
                </div>
                <p className="text-ink-black/70 text-lg leading-relaxed font-light">
                  Benevure Craft Pvt Ltd derives its name from <span className="italic font-serif">&quot;Benevolent Future&quot;</span>. 
                  We believe in blending luxury with tranquility. Our flagship houseboat, Coventina, 
                  serves as a sanctuary from the rigors of life, hosting everything from intimate 
                  boardroom meetings to grand celebrations amidst the silent waters.
                </p>
             </div>
             
             <div className="order-1 lg:order-2 relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image 
                   src="/images/organization.jpg" 
                   alt="Our organization" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="absolute top-4 -left-4 right-4 -bottom-4 border border-golden-bronze/10 rounded-2xl -z-10 group-hover:border-golden-bronze/30 transition-colors" />
             </div>
          </div>
        </div>
      </section>

      {/* Job Info Section - Premium Card */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pine-teal/5">
            <div className="grid md:grid-cols-3">
              {/* Sidebar Info */}
              <div className="bg-ink-black text-porcelain p-12 space-y-12">
                <div>
                  <h4 className="flex items-center gap-3 text-golden-bronze font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
                    <MapPin className="h-4 w-4" /> Location
                  </h4>
                  <p className="text-lg font-serif italic leading-snug">
                    3rd Floor, A-25,<br/>Sector-136, Noida
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h4 className="flex items-center gap-3 text-golden-bronze font-bold uppercase tracking-[0.2em] text-[10px]">
                    <ArrowRight className="h-4 w-4" /> Apply Via
                  </h4>
                  <div className="space-y-4">
                    <Link href="mailto:admin@coventina.net" className="block text-sm hover:text-golden-bronze transition-colors flex items-center gap-3">
                      <Mail className="h-4 w-4 opacity-50" /> admin@coventina.net
                    </Link>
                    <div className="text-sm flex items-center gap-3">
                      <MessageSquare className="h-4 w-4 opacity-50" /> +91 97118 70050
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Requirements */}
              <div className="md:col-span-2 p-12 md:p-16 space-y-12">
                <div className="grid sm:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h5 className="text-pine-teal font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                       <Briefcase className="h-4 w-4" /> Requirements
                    </h5>
                    <ul className="space-y-3 text-ink-black/70 font-light">
                      <li className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-golden-bronze" /> Age: 25 to 30</li>
                      <li className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-golden-bronze" /> Minimum Graduate</li>
                      <li className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-golden-bronze" /> Skills Prioritized</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="text-pine-teal font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                       <Calendar className="h-4 w-4" /> Timeline
                    </h5>
                    <ul className="space-y-3 text-ink-black/70 font-light">
                      <li className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-golden-bronze" /> Application: 7th Nov 2025</li>
                      <li className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-golden-bronze" /> Interview: 15th Nov 2025</li>
                      <li className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-golden-bronze" /> Remuneration: Premium</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-pine-teal/5 flex flex-wrap gap-4">
                   <Button asChild className="bg-pine-teal hover:bg-pine-teal/90 text-white rounded-full px-8 py-6 h-auto group transform transition-all hover:translate-x-1">
                     <Link href="mailto:admin@coventina.net" className="flex items-center gap-3">
                       Send Your Resume <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </Link>
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-32 text-center container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-ink-black mb-8">Not the right fit? <span className="italic text-pine-teal font-serif">Explore</span> our experience</h2>
        <Link 
          href="/gallery" 
          className="text-golden-bronze uppercase tracking-[0.3em] font-bold text-sm border-b-2 border-golden-bronze/30 pb-2 hover:border-golden-bronze transition-all"
        >
          View Life at Coventina
        </Link>
      </section>
    </div>
  )
}
