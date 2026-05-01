import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Floor Plans", href: "/floor-plans" },
  { name: "Contact", href: "/contact" },
];

const propertyTypes = [
  { name: "High Rise Apartments", href: "/projects/high-rise" },
  { name: "Hotel Apartments", href: "/projects/hotel-apartments" },
  { name: "Farm Houses", href: "/projects/farm-houses" },
];

export default function Footer() {
  const phoneNumber = "+92 316 9205409";
  const whatsappNumber = "923169205409";

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/SRD-ESTATE_logo.png"
                alt="Sardar Estate"
                width={160}
                height={160}
                className="h-20 w-auto brightness-0 invert mb-6"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Sardar Estate is a premier real estate agency dedicated to providing 
              exceptional investment opportunities and luxury living spaces in 
              Pakistan. We build trust through transparency and excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-muted-foreground">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-muted-foreground">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-muted-foreground">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-8 relative inline-block">
              Useful Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-8 relative inline-block">
              Property Portfolio
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {propertyTypes.map((type) => (
                <li key={type.name}>
                  <Link
                    href={type.href}
                    className="text-muted-foreground hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-8 relative inline-block">
              Contact Details
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-1">Office Location</p>
                  <p className="text-sm text-white/80">Main Manshera Road, Abbottabad, Pakistan</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-1">Call Us Anytime</p>
                  <a href={`tel:${phoneNumber}`} className="text-sm text-white/80 hover:text-accent transition-colors">
                    {phoneNumber}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-1">WhatsApp Chat</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-white/80 hover:text-green-500 transition-colors"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Sardar Estate</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-muted-foreground text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
