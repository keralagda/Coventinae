import Image from "next/image"
import Link from "next/link"
import { Mail, Calendar, Briefcase, Info, MapPin } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Join the Coventina Team",
  description: "Join our team at Coventina. We are currently hiring for Sales Executives in the Hospitality Industry. Check out our open positions."
}

export default function CareerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-[#1A374D]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for background image if needed, or just solid color per legacy */}
        <div className="container relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-fade-in-up">Career</h1>
          <p className="text-xl md:text-2xl font-light text-white/90">&quot;APPLY Now – Position Open&quot;</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A374D] mb-6 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-4 after:w-16 after:h-1 after:bg-[#1A374D] after:-translate-x-1/2">
            Coventina is Hiring
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-8 font-medium">
            Sales Executive for a Hospitality Industry <br/>
            <span className="text-[#006994]">No of Position – 3 (2 female and 1 male)</span>
          </p>
        </div>
      </section>

      {/* Role & Org Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group">
               <Image 
                 src="/images/career.jpeg" 
                 alt="Hospitality Role" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#1A374D] flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                Role:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The role involves developing and implementing marketing strategies collaborating 
                with travel agents, 5-star hotels, corporate and business houses, and individuals to bring 
                on board guests on our luxury houseboat Coventina. The boat has premium rooms, a 
                conference hall with a stage, sound system, and web conferencing for 120 persons. It 
                also has a state-of-the-art kitchen offering multi-cuisine meals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#1A374D] flex items-center gap-2">
                <Info className="h-6 w-6" />
                About the Organisation:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our company Benevure Craft Pvt Ltd is based out of Gurgaon.
                The word &quot;Benevure&quot; was coined by our founder Rohan Michael Sebastine taking two 
                separate words, benevolent and future as a portmanteau. The boat offers luxury, peace, 
                and comfort from the hectic rigors of everyday life as also joy and happiness from 
                parties, marriages etc. It also has an artistically designed board room for corporate 
                meetings.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                <Image 
                 src="/images/organization.jpg" 
                 alt="Organization" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Job Info Box */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#eaf3fb] border-2 border-[#aac6e5] rounded-xl p-8 md:p-12 shadow-lg">
            
            <div className="border-b border-[#c2d5ea] pb-6 mb-6">
              <h4 className="text-[#003e7e] text-lg font-bold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5" /> Age and Qualification:
              </h4>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Age:</strong> 25 to 30</li>
                <li><strong>Gender:</strong> Male / Female</li>
                <li><strong>Qualification:</strong> Minimum Graduate (skills prioritized over degree).</li>
              </ul>
            </div>

            <div className="border-b border-[#c2d5ea] pb-6 mb-6">
              <h4 className="text-[#003e7e] text-lg font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Dates:
              </h4>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Last date of Application:</strong> 7<sup>th</sup> Nov 2025</li>
                <li><strong>Date of Interview:</strong> 15<sup>th</sup> Nov 2025</li>
                <li><strong>Remuneration:</strong> Better than industry standards</li>
              </ul>
            </div>

            <div className="border-b border-[#c2d5ea] pb-6 mb-6">
              <h4 className="text-[#003e7e] text-lg font-bold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5" /> How to Apply:
              </h4>
              <ul className="space-y-2 text-gray-800">
                <li>Email Resume: <a href="mailto:admin@coventina.net" className="text-[#0056b3] font-semibold hover:underline">admin@coventina.net</a></li>
                <li>WhatsApp Resume: <strong>+91 97118 70050</strong></li>
              </ul>
            </div>

             <div>
              <h4 className="text-[#003e7e] text-lg font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Interview Venue Address:
              </h4>
              <p className="text-gray-800">
                3<sup>rd</sup> Floor, <strong>A-25, Sector-136, Noida</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
