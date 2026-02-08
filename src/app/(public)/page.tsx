"use client"

import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Utensils, Mail, Phone, MapPin, Play } from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-white">
      
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
                    <h4 className="text-lg md:text-xl uppercase tracking-[0.2em] mb-4 animate-fade-in">Discover the Colorful World</h4>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in-up">{slide.title}</h1>
                    <p className="text-xl md:text-2xl font-light italic mb-8 max-w-2xl animate-fade-in-up delay-100">"{slide.sub}"</p>
                    <Button asChild className="bg-[#1A374D] hover:bg-[#152e40] text-white rounded-full px-8 py-6 text-lg animate-fade-in-up delay-200">
                        <Link href="/offerings">Discover Now</Link>
                    </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-4xl font-serif font-bold text-[#1A374D] mb-4">Our Services</h2>
                <p className="text-gray-600">Discover a one-of-a-kind corporate experience on our luxurious houseboat, thoughtfully designed to blend work and leisure in the heart of Kerala’s serene backwaters.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                     { icon: Home, title: "Beautiful Condo", desc: "Experience serene backwaters in style aboard our beautiful houseboat condo." },
                     { icon: Utensils, title: "Restaurants & Cafe", desc: "Savor delicious Kerala cuisine at our onboard restaurant and cozy café." },
                     { icon: Mail, title: "Easy to Connect", desc: "Conveniently located with smooth booking and easy access." },
                     { icon: Phone, title: "24/7 Support", desc: "Our team is available 24/7 to ensure a smooth houseboat experience." }
                 ].map((service, i) => (
                     <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gray-50">
                         <CardContent className="p-8 text-center flex flex-col items-center">
                             <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#1A374D]">
                                 <service.icon className="h-8 w-8" />
                             </div>
                             <h3 className="text-xl font-bold text-[#1A374D] mb-3">{service.title}</h3>
                             <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                         </CardContent>
                     </Card>
                 ))}
            </div>
        </div>
      </section>

      {/* Destinations Carousel */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                 <h2 className="text-4xl font-serif font-bold text-[#1A374D]">Popular Destinations</h2>
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
                            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                                <Image 
                                    src={item.img} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                                    <div className="flex items-center text-sm text-white/80">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {item.loc}
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
             </Carousel>
        </div>
      </section>

      {/* Booking Strip */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 py-4 overflow-hidden relative shadow-lg">
          <div className="animate-marquee whitespace-nowrap text-white font-bold text-lg flex items-center gap-12">
              <span>🚖 Booking is Open Now. Call on 9211997746 / 8086868628 for more detail 🚖</span>
              <span>🚖 Booking is Open Now. Call on 9211997746 / 8086868628 for more detail 🚖</span>
              <span>🚖 Booking is Open Now. Call on 9211997746 / 8086868628 for more detail 🚖</span>
              <span>🚖 Booking is Open Now. Call on 9211997746 / 8086868628 for more detail 🚖</span>
          </div>
      </div>

      {/* Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                     <Image 
                        src="/images/cropped-hosueboat5.jpg" 
                        alt="Video Thumbnail" 
                        width={600} 
                        height={400} 
                        className="w-full object-cover" 
                     />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <a href="https://youtu.be/v6_g1r3EhN8?si=wqnKULr5XU_IgxRJ" target="_blank" rel="noopener noreferrer" className="h-20 w-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                            <Play className="h-8 w-8 text-[#1A374D] fill-current" />
                        </a>
                     </div>
                 </div>

                 <div className="space-y-6">
                     <h2 className="text-4xl font-serif font-bold text-[#1A374D]">Coventina Luxury Houseboat</h2>
                     <p className="text-gray-600 leading-relaxed">
                        Step aboard <strong>Coventina</strong>, a 100 ft × 22 ft double-decker luxury houseboat on
						Vembanad Lake. Designed for premium group travel, it offers unmatched comfort, elegance,
						and flexibility for both leisure and events.
                     </p>
                     <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                         {["3 luxury bedrooms", "Professionally equipped kitchen", "Grand 1,100 sq ft hall", "Open-air deck", "High-end sound system", "LED screen & teleconference", "Multi-cuisine catering", "Dedicated crew"].map((item, i) => (
                             <li key={i} className="flex items-center">
                                 <span className="h-2 w-2 rounded-full bg-[#1A374D] mr-3" />
                                 {item}
                             </li>
                         ))}
                     </ul>
                     <Button className="bg-[#1A374D] text-white rounded-full px-8 mt-4 hover:bg-[#152e40]">
                        <Link href="/about">Explore the Experience</Link>
                     </Button>
                 </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                 <h2 className="text-4xl font-serif font-bold text-[#1A374D] mb-4">What Our Guests Say</h2>
                 <p className="text-gray-600">Real experiences shared by guests aboard Coventina Luxury Houseboat</p>
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
      <section className="py-20 bg-[#1A374D] text-center text-white">
          <div className="container px-6">
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Lets you Explore the Best. Contact Us Now</h2>
               <Button asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A374D] rounded-full px-8 py-6 text-lg transition-colors">
                   <Link href="/contact">Get in touch</Link>
               </Button>
          </div>
      </section>

    </div>
  )
}
