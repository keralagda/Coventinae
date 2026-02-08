"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Utensils } from "lucide-react"

export default function AboutContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-[#1A374D]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">About Us</h1>
          <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
            "Experience the best houseboat in Kerala with Coventina Houseboat. Enjoy luxury stays, serene backwaters, authentic cuisine, and unforgettable moments."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Carousel */}
             <div className="order-2 lg:order-1">
                 <Carousel 
                    plugins={[Autoplay({ delay: 3000 })]}
                    className="w-full rounded-2xl overflow-hidden shadow-2xl"
                 >
                    <CarouselContent>
                        {["/images/newboat1.jpg", "/images/newboat2.jpg"].map((img, i) => (
                            <CarouselItem key={i} className="basis-full">
                                <div className="relative h-[400px] w-full">
                                    <Image src={img} alt="Coventina Boat" fill className="object-cover" />
                                </div>
                            </CarouselItem>
                        ))}
                         {/* Handling space in filename for 3rd image */}
                        <CarouselItem className="basis-full">
                                <div className="relative h-[400px] w-full">
                                    <Image src="/images/new boat 3.jpg" alt="Coventina Boat" fill className="object-cover" />
                                </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                 </Carousel>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 space-y-6">
               <h2 className="text-4xl font-serif font-bold text-[#1A374D]">About Us</h2>
               <h3 className="text-xl font-bold text-[#006994]">Coventina Houseboat – The Best Houseboat in Kerala</h3>
               <p className="text-gray-600 leading-relaxed text-justify">
                  Welcome aboard Coventina Houseboat, your gateway to the serene backwaters of Kerala. 
                  Renowned as the best houseboat in Kerala, we offer a perfect blend of traditional charm 
                  and modern luxury to give you an unforgettable cruising experience.
               </p>
               
               <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#1A374D]">
                      <h4 className="font-bold text-[#1A374D] mb-1">Unmatched Experience</h4>
                      <p className="text-sm text-gray-600">Designed to capture the soul of Kerala with elegant interiors and soothing rhythms of the backwaters.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#006994]">
                      <h4 className="font-bold text-[#006994] mb-1">Warm Hospitality</h4>
                      <p className="text-sm text-gray-600">Dedicated crew taking care of every detail, from safety to authentic local experiences.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Section */}
      <section className="py-20 bg-[#F3F4F6]">
         <div className="container mx-auto px-6 text-center max-w-4xl">
             <div className="mb-8 flex justify-center">
                 <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-md">
                     <Utensils className="h-8 w-8 text-[#1A374D]" />
                 </div>
             </div>
             <h2 className="text-4xl font-serif font-bold text-[#1A374D] mb-6">Food and Cuisine</h2>
             <p className="text-xl text-gray-700 leading-relaxed">
               "And when it comes to food, we take you on a culinary voyage across India — from the rich spices of the
                North to the tangy delights of the South. Every meal is a celebration of India’s diverse cuisine, 
                freshly prepared onboard by our expert chefs."
             </p>
         </div>
      </section>

      {/* Brochure Images */}
       <section className="py-20">
         <div className="container mx-auto px-6">
             <div className="grid md:grid-cols-2 gap-8">
                 <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform">
                      <Image src="/images/broucher1.png" alt="Brochure Page 1" fill className="object-contain bg-gray-100" />
                 </div>
                 <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform">
                      <Image src="/images/brocher2.png" alt="Brochure Page 2" fill className="object-contain bg-gray-100" />
                 </div>
             </div>
         </div>
       </section>

    </div>
  )
}
