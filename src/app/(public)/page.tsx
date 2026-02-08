"use client"

import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Utensils, Mail, Phone, MapPin } from "lucide-react"
import VideoModal from "@/components/public/VideoModal"
import ConsultationForm from "@/components/public/ConsultationForm"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      
      {/* Hero Carousel */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <Carousel 
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {[
              { img: "/images/newboat2.jpg", title: "KERALA", sub: "Where nature whispers, and culture sings." },
              { img: "/images/beed7.jpg", title: "KERALA", sub: "A journey through lush landscapes culture." },
              { img: "/images/newboat1.jpg", title: "KERALA", sub: "Where every moment is wrapped in nature." }
            ].map((slide, i) => (
              <CarouselItem key={i} className="relative h-screen w-full p-0">
                <div className="absolute inset-0">
                  <Image 
                    src={slide.img} 
                    alt="Hero Slide" 
                    fill 
                    className="object-cover brightness-75"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                    <h4 className="text-lg md:text-xl uppercase tracking-[0.2em] mb-4 animate-fade-in text-porcelain/90">Discover the Colorful World</h4>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in-up text-white">{slide.title}</h1>
                    <p className="text-xl md:text-2xl font-light italic mb-8 max-w-2xl animate-fade-in-up delay-100 text-porcelain">&quot;{slide.sub}&quot;</p>
                    <Button asChild className="bg-[#004D40] hover:bg-[#004D40]/90 text-white rounded-full px-8 py-6 text-lg animate-fade-in-up delay-200">
                        <Link href="/offerings">Discover Now</Link>
                    </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-porcelain">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-4xl font-serif font-bold text-pine-teal mb-4">Our Services</h2>
                <p className="text-ink-black/80">Discover a one-of-a-kind corporate experience on our luxurious houseboat, thoughtfully designed to blend work and leisure in the heart of Kerala’s serene backwaters.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                     { 
                        icon: Home, 
                        title: "Beautiful Condo", 
                        desc: "Experience serene backwaters in style aboard our beautiful houseboat condo.",
                        style: "bg-white text-ink-black shadow-lg hover:shadow-2xl hover:scale-105",
                        iconBg: "bg-porcelain text-pine-teal",
                        link: "View Rooms",
                     },
                     { 
                        icon: Utensils, 
                        title: "Restaurants & Cafe", 
                        desc: "Savor delicious Kerala cuisine at our onboard restaurant and cozy café.",
                        style: "bg-[#004D40] text-white shadow-xl hover:shadow-2xl hover:scale-105",
                        iconBg: "bg-white/10 text-golden-bronze",
                        link: "Dining Menu",
                     },
                     { 
                        icon: Mail, 
                        title: "Easy to Connect", 
                        desc: "Conveniently located with smooth booking and easy access.",
                        style: "bg-[#121928] text-white shadow-xl hover:shadow-2xl hover:scale-105",
                        iconBg: "bg-white/10 text-white",
                        link: "Contact Us",
                     },
                     { 
                        icon: Phone, 
                        title: "24/7 Support", 
                        desc: "Our team is available 24/7 to ensure a smooth houseboat experience.",
                        style: "bg-white text-ink-black shadow-lg hover:shadow-2xl hover:scale-105",
                        iconBg: "bg-porcelain text-pine-teal",
                        link: "Get Support",
                     }
                 ].map((service, i) => (
                     <Card key={i} className={`border-none transition-all duration-300 relative overflow-hidden group ${service.style}`}>
                         <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                            <service.icon className="h-64 w-64" />
                         </div>
                         <CardContent className="p-8 flex flex-col h-full relative z-10">
                             <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 ${service.iconBg}`}>
                                 <service.icon className="h-7 w-7" />
                             </div>
                             <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                             <p className="text-sm leading-relaxed opacity-90 mb-8 flex-grow">{service.desc}</p>
                             
                             <Link 
                                href={i === 0 ? "/houseboats" : i === 1 ? "/experiences/candle-light-dinner" : "/contact"}
                                className="flex items-center text-sm font-bold cursor-pointer group/link uppercase tracking-wider"
                             >
                                <span className={i === 1 || i === 2 ? "text-golden-bronze" : "text-pine-teal"}>{service.link}</span>
                                <span className={`ml-2 transition-transform group-hover/link:translate-x-1 ${i === 1 || i === 2 ? "text-golden-bronze" : "text-pine-teal"}`}>→</span>
                             </Link>
                         </CardContent>
                     </Card>
                 ))}
            </div>
        </div>
      </section>

      {/* Destinations Carousel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                 <h2 className="text-4xl font-serif font-bold text-pine-teal">Popular Destinations</h2>
             </div>
             
             <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent className="-ml-4">
                    {[
                        { img: "/images/VembanadLake.jpg", title: "Vembanad Lake", loc: "Kumarakom" },
                        { img: "/images/KumarakomBirdSanctuary.jpg", title: "Bird Sanctuary", loc: "Kumarakom" },
                        { img: "/images/PathiramanalIsland.webp", title: "Pathiramanal Island", loc: "Vembanad Lake" },
                        { img: "/images/KottayamTown.jpg", title: "Kottayam Town", loc: "Kottayam" }
                    ].map((item, i) => (
                        <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <Link href="/destinations" className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer block">
                                <Image 
                                    src={item.img} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                                    <div className="flex items-center text-sm text-white/80">
                                        <MapPin className="h-4 w-4 mr-1 text-golden-bronze" />
                                        {item.loc}
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
             </Carousel>
        </div>
      </section>

      {/* Booking Strip */}
      {/* Booking Strip */}
      <div className="bg-[#C5A059] py-4 overflow-hidden relative shadow-lg">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              <div className="flex items-center gap-12 px-6">
                {[1, 2, 3, 4,].map((_, i) => (
                   <span key={i} className="text-ink-black font-bold text-lg whitespace-nowrap">
                      🚖 Booking is Open Now. Call on 9211997746 / 8086868628 for more detail 🚖
                   </span>
                ))}
              </div>
              <div aria-hidden="true" className="flex items-center gap-12 px-6">
                {[1, 2, 3, 4,].map((_, i) => (
                   <span key={i} className="text-ink-black font-bold text-lg whitespace-nowrap">
                      🚖 Booking is Open Now. Call on 9211997746 / 8086868628 for more detail 🚖
                   </span>
                ))}
              </div>
          </div>
      </div>

      {/* Info Section - Redesigned with Video Modal */}
      <section className="py-24 bg-porcelain">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/* Video Thumbnail - Reduced size and balanced */}
                 <div className="flex justify-center lg:justify-end">
                    <VideoModal 
                        thumbnailSrc="/images/cropped-hosueboat5.jpg" 
                        videoId="v6_g1r3EhN8" 
                    />
                 </div>

                 <div className="space-y-6">
                     <h2 className="text-4xl font-serif font-bold text-pine-teal">Coventina Luxury Houseboat</h2>
                     <p className="text-ink-black/80 leading-relaxed">
                        Step aboard <strong>Coventina</strong>, a 100 ft × 22 ft double-decker luxury houseboat on
						Vembanad Lake. Designed for premium group travel, it offers unmatched comfort, elegance,
						and flexibility for both leisure and events.
                     </p>
                     <ul className="grid sm:grid-cols-2 gap-4 text-sm text-ink-black/80">
                         {["3 luxury bedrooms", "Professionally equipped kitchen", "Grand 1,100 sq ft hall", "Open-air deck", "High-end sound system", "LED screen & teleconference", "Multi-cuisine catering", "Dedicated crew"].map((item, i) => (
                             <li key={i} className="flex items-center">
                                 <span className="h-2 w-2 rounded-full bg-golden-bronze mr-3" />
                                 {item}
                             </li>
                         ))}
                     </ul>
                     <Button asChild className="bg-[#004D40] text-white rounded-full px-8 mt-4 hover:bg-[#004D40]/90 shadow-lg hover:shadow-xl transition-all">
                        <Link href="/about">Explore the Experience</Link>
                     </Button>
                 </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                 <h2 className="text-4xl font-serif font-bold text-pine-teal mb-4">What Our Guests Say</h2>
                 <p className="text-ink-black/70">Real experiences shared by guests aboard Coventina Luxury Houseboat</p>
            </div>

            <div className="relative overflow-hidden w-full">
                <div className="flex animate-marquee-slow gap-8">
                    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
                         <div key={i} className="flex-shrink-0 w-[300px] h-[200px] relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                             <Image 
                                src={`/images/Picture${num}.png`} 
                                alt={`Testimonial ${num}`} 
                                fill 
                                className="object-cover" 
                             />
                         </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section - Consultation Booking */}
      <section className="py-24 bg-[#004D40] text-white overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A059] blur-3xl opacity-50"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C5A059] blur-3xl opacity-50"></div>
          </div>

          <div className="container px-6 relative z-10">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <div className="text-left space-y-8">
                       <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                           Ready to plan your <span className="text-[#C5A059] block mt-2">Perfect Event?</span>
                       </h2>
                       <p className="text-lg opacity-90 max-w-lg leading-relaxed">
                           Whether it&apos;s a corporate retreat, a wedding, or a family gathering, our expert team is here to craft an unforgettable experience tailored to your needs on the serene backwaters.
                       </p>
                       
                       <div className="flex flex-col sm:flex-row gap-8 pt-4">
                           <div className="flex items-center gap-4">
                               <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-[#C5A059]">
                                   <Phone className="h-6 w-6" />
                               </div>
                               <div>
                                   <p className="text-xs opacity-70 uppercase tracking-wider">Call Us 24/7</p>
                                   <p className="text-lg font-bold">+91 92119 97746</p>
                               </div>
                           </div>
                           <div className="flex items-center gap-4">
                               <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-[#C5A059]">
                                   <Mail className="h-6 w-6" />
                               </div>
                               <div>
                                   <p className="text-xs opacity-70 uppercase tracking-wider">Email Us</p>
                                   <p className="text-lg font-bold">booking@coventina.com</p>
                               </div>
                           </div>
                       </div>

                       <div className="border-t border-white/20 pt-8 mt-8">
                           <p className="text-sm font-bold mb-4 flex items-center gap-2">
                               <span className="h-1 w-1 rounded-full bg-[#C5A059]"></span>
                               Trusted by 500+ Happy Clients
                           </p>
                           <div className="flex items-center gap-4">
                               <div className="flex -space-x-4">
                                   {[1, 2, 3, 4].map((num, i) => (
                                       <div key={i} className="w-12 h-12 rounded-full border-2 border-[#004D40] relative overflow-hidden">
                                           <Image 
                                               src={`/images/Picture${num}.png`} 
                                               fill 
                                               alt="Client" 
                                               className="object-cover" 
                                           />
                                       </div>
                                   ))}
                               </div>
                               <div className="text-sm">
                                   <div className="flex text-[#C5A059]">★★★★★</div>
                                   <p className="opacity-80">4.9/5 Average Rating</p>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="w-full relative">
                        {/* Decorative elements behind form */}
                        <div className="absolute -inset-4 bg-[#C5A059]/20 rounded-2xl blur-xl -z-10"></div>
                       <ConsultationForm />
                   </div>
               </div>
          </div>
      </section>

    </div>
  )
}
