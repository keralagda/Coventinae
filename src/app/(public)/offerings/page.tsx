"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Users, Utensils, Anchor, Camera, Wifi, Sun, Moon } from "lucide-react"

export default function OfferingsPage() {
  
  const banners = [
    { image: "/images/beed3.jpg", title: "OFFERING", subtitle: "\"Kerala Cruise\"" },
    { image: "/images/beed5.jpg", title: "OFFERING", subtitle: "\"Kerala Cruise\"" },
    { image: "/images/beed7.jpg", title: "FACILITIES", subtitle: "\"Kerala Cruise\"" },
    { image: "/images/speedboat.jpg", title: "FACILITIES", subtitle: "\"Kerala Cruise\"" },
    { image: "/images/dining.jpg", title: "OFFERINGS", subtitle: "\"Kerala Cruise\"" },
    { image: "/images/confernce.jpg", title: "KERALA", subtitle: "\"Where every moment is wrapped in nature\"" },
  ]

  return (
    <div className="bg-white">
      {/* Hero Carousel */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black">
         <Carousel 
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full h-full"
         >
            <CarouselContent>
                {banners.map((banner, index) => (
                    <CarouselItem key={index} className="relative w-full h-[80vh] min-h-[600px]">
                        <Image 
                            src={banner.image} 
                            alt={banner.title} 
                            fill 
                            className="object-cover opacity-60"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4 text-center animate-fade-in-up">
                            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wider mb-2">{banner.title}</h1>
                            <p className="text-xl md:text-3xl font-light italic text-white/90">{banner.subtitle}</p>
                            <button className="mt-8 px-8 py-3 bg-[#1A374D] hover:bg-[#152e40] text-white rounded-full transition-all uppercase tracking-widest font-semibold text-sm">
                                Discover Now
                            </button>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
         </Carousel>
      </section>

      {/* Corporate Party Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                     <Carousel className="w-full rounded-2xl overflow-hidden shadow-2xl">
                        <CarouselContent>
                            {["/images/bed1.jpg", "/images/bed2.jpg", "/images/room1.jpg", "/images/kitchen.jpg", "/images/beed8.jpg"].map((img, i) => (
                                <CarouselItem key={i} className="basis-full">
                                    <div className="relative h-[400px] w-full">
                                        <Image src={img} alt="Corporate" fill className="object-cover" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                     </Carousel>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                    <h2 className="text-4xl font-serif font-bold text-[#1A374D] border-b-2 border-[#1A374D] pb-4 inline-block">
                        Party – Corporate
                    </h2>
                    <h4 className="text-xl font-semibold text-gray-800">Inclusions & Experiences</h4>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex gap-3">
                            <Users className="h-6 w-6 text-[#1A374D] shrink-0" />
                            <span><strong>Ambience:</strong> Formal-casual balance with branded décor or informal lounge-style seating.</span>
                        </li>
                        <li className="flex gap-3">
                            <Music className="h-6 w-6 text-[#1A374D] shrink-0" />
                            <div>
                                <strong>Entertainment:</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>DJ and curated playlists.</li>
                                    <li>Professional sound/AV setup.</li>
                                    <li>Team-building activities (Karaoke, Quizzes).</li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <Utensils className="h-6 w-6 text-[#1A374D] shrink-0" />
                            <span><strong>Food & Drinks:</strong> Multi-cuisine buffet, finger foods, and cocktail bar service.</span>
                        </li>
                         <li className="flex gap-3">
                            <Wifi className="h-6 w-6 text-[#1A374D] shrink-0" />
                            <span><strong>Add-Ons:</strong> Wi-Fi, Projector, Photography.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Lunch & Dinner Cruise */}
      <section className="py-24 bg-[#1A374D] text-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                     <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-serif font-bold mb-2">🍷 Lunch & Dinner Cruise</h2>
                        <p className="text-white/70 italic text-lg">An unforgettable dining experience on the waters</p>
                     </div>
                     
                     <div className="grid sm:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Sun className="h-5 w-5 text-yellow-400"/> Lunch</h3>
                             <p className="text-sm text-white/80">Sadya, Kerala seafood thali, or continental buffet with mid-day sightseeing.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Moon className="h-5 w-5 text-blue-300"/> Dinner</h3>
                             <p className="text-sm text-white/80">Multi-course fine dining, sunset cruise, soft acoustic music & candle light.</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <h3 className="text-xl font-bold border-b border-white/20 pb-2">Experiences</h3>
                        <ul className="space-y-2 text-white/80">
                            <li className="flex items-center gap-2"><Anchor className="h-4 w-4"/> Storytelling about Kerala’s heritage.</li>
                            <li className="flex items-center gap-2"><Music className="h-4 w-4"/> Cultural dance performances.</li>
                            <li className="flex items-center gap-2"><Camera className="h-4 w-4"/> Photography & themed menus.</li>
                        </ul>
                     </div>
                </div>
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <Image 
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200" 
                        alt="Dinner Cruise" 
                        fill 
                        className="object-cover"
                    />
                </div>
            </div>
         </div>
      </section>

      {/* Wedding Party */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-serif font-bold text-[#1A374D] border-b-2 border-[#1A374D] pb-4 inline-block">
                        Party – Wedding
                    </h2>
                    <h4 className="text-xl font-semibold text-gray-800">Inclusions & Experiences</h4>
                    <p className="text-gray-600">
                        Luxurious wedding-themed décor, stage set-up for vows, ceremonies, or reception. 
                        Traditional Kerala performances (Kathakali, Chenda melam) and DJ/live band for after-parties.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#1A374D]">
                            <h5 className="font-bold text-[#1A374D]">Food</h5>
                            <p className="text-sm text-gray-600">Authentic Sadya & Custom Multi-course Menus.</p>
                         </div>
                         <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#1A374D]">
                            <h5 className="font-bold text-[#1A374D]">Magic</h5>
                            <p className="text-sm text-gray-600">Sunset cruise photoshoots & Flower showers.</p>
                         </div>
                    </div>
                </div>
                 <div>
                     <Carousel className="w-full rounded-2xl overflow-hidden shadow-2xl">
                        <CarouselContent>
                            {["/images/wedding1.jpg", "/images/wedding2.jpg"].map((img, i) => (
                                <CarouselItem key={i} className="basis-full">
                                    <div className="relative h-[400px] w-full">
                                        <Image src={img} alt="Wedding" fill className="object-cover" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                         <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                     </Carousel>
                </div>
             </div>
         </div>
      </section>

      {/* Private Party */}
      <section className="py-24">
         <div className="container mx-auto px-6">
             <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                 <div className="grid lg:grid-cols-2">
                     <div className="p-12 space-y-8">
                         <h3 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                             🎉 Private – Party
                         </h3>
                         
                         <div className="grid sm:grid-cols-2 gap-8">
                             <div>
                                 <h4 className="font-bold text-gray-800 mb-2">🌟 Ambience</h4>
                                 <p className="text-sm text-gray-600">Custom décor, birthday themes, festive lighting.</p>
                             </div>
                             <div>
                                 <h4 className="font-bold text-gray-800 mb-2">🎶 Entertainment</h4>
                                 <p className="text-sm text-gray-600">DJ, Karaoke, Thematic nights (Bollywood, Retro).</p>
                             </div>
                             <div>
                                 <h4 className="font-bold text-gray-800 mb-2">🍽️ Food</h4>
                                 <p className="text-sm text-gray-600">Casual dining, BBQ, Seafood platters & Cocktails.</p>
                             </div>
                             <div>
                                 <h4 className="font-bold text-gray-800 mb-2">🚤 Thrills</h4>
                                 <p className="text-sm text-gray-600">Jet boat rides, Water skiing & Group games.</p>
                             </div>
                         </div>
                     </div>
                     <div className="relative h-full min-h-[400px]">
                         <Image src="/images/party5.jpeg" alt="Private Party" fill className="object-cover" />
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Lake Tour */}
      <section className="py-24 bg-[#EAF6F6]">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                      <Image src="/images/houseboat3.jpg" alt="Lake Tour" fill className="object-cover" />
                </div>
                <div className="space-y-6">
                     <h2 className="text-4xl font-serif font-bold text-[#2C5F2D]">Lake Tour Experience</h2>
                     <p className="text-lg text-gray-700">
                        A scenic journey perfect for families and cultural explorers. Glide across calm waters while soaking in Kerala’s heritage.
                     </p>
                     <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">•</span>
                            <span><strong>Ambience:</strong> Relaxed, scenic seating with open decks.</span>
                        </li>
                         <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">•</span>
                            <span><strong>Entertainment:</strong> Narrations on Spice trade & Backwater ecology.</span>
                        </li>
                         <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">•</span>
                            <span><strong>Culture:</strong> Short films about Kerala’s traditions.</span>
                        </li>
                     </ul>
                     <button className="bg-[#2C5F2D] text-white px-8 py-3 rounded-full hover:bg-[#1e441f] transition-colors font-medium shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                        Book Your Tour
                     </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
