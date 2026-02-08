import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#004D40] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-[#C5A059]">Coventina</h3>
            <p className="opacity-80 leading-relaxed max-w-sm">
              Experience the colorful world of Coventina. Luxury houseboat cruises, corporate events, and bespoke wedding parties in the heart of Kerala's backwaters.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#121928] transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#C5A059]">Quick Links</h4>
            <ul className="space-y-4 opacity-80">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Houseboats', href: '/houseboats' },
                { name: 'Destinations', href: '/destinations' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#C5A059] transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#C5A059]">Experiences</h4>
            <ul className="space-y-4 opacity-80">
              {[
                { name: 'Corporate Events', href: '/experiences/corporate-events' },
                { name: 'Wedding Cruises', href: '/experiences/wedding-cruises' },
                { name: 'Family Vacations', href: '/experiences/family-vacations' },
                { name: 'Day Cruises', href: '/experiences/day-cruises' },
                { name: 'Candle Light Dinner', href: '/experiences/candle-light-dinner' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#C5A059] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#C5A059]">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#C5A059] shrink-0" />
                <span className="opacity-80">Vembanad Lake, Kumarakom, Kerala, India - 686563</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-[#C5A059] shrink-0" />
                <div className="opacity-80">
                  <p>+91 92119 97746</p>
                  <p>+91 80868 68628</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-[#C5A059] shrink-0" />
                <span className="opacity-80">booking@coventina.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Coventina Luxury Houseboats. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-[#C5A059]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#C5A059]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
