import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A374D] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Brochure Section */}
        <div className="mb-12 border-b border-white/10 pb-12">
           <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[#006994] to-[#00b4db] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                 Download Brochure
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">About Tour</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-4 pt-4">
                <a href="#" className="text-white/70 hover:text-[#d4af37] transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="https://www.instagram.com/coventinaker/" className="text-white/70 hover:text-[#d4af37] transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="https://www.facebook.com/profile.php?id=61580074621603" className="text-white/70 hover:text-[#d4af37] transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-white/70 hover:text-[#d4af37] transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
             <h3 className="text-xl font-serif font-bold mb-4">Pages</h3>
             <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
             </ul>
          </div>

          {/* Resources */}
          <div>
             <h3 className="text-xl font-serif font-bold mb-4">Resources</h3>
             <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="#" className="hover:text-white transition-colors">Guide</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:rohan@coventina.net" className="hover:text-white">rohan@coventina.net</a>
                </li>
                <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:9211997746" className="hover:text-white">9211997746</a>
                </li>
                 <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:8086868628" className="hover:text-white">8086868628</a>
                </li>
                <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1" />
                    <span>Kumarakon- Cumbam Road, Kerala</span>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Coventina. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
