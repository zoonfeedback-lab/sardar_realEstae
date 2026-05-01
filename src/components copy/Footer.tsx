import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const propertyTypes = [
  { name: "High Rise Apartments", href: "/projects" },
  { name: "Hotel Apartments", href: "/projects" },
  { name: "Farm Houses", href: "/projects" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* ── Brand Section ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/SRD-ESTATE_logo.png"
              alt="Sardar Estate"
              width={140}
              height={48}
              className="h-10 w-auto invert brightness-0 invert mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Trusted real estate solutions for modern investments. Helping you
              find secure and premium property opportunities.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/90 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/55 text-sm hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Property Types ── */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/90 mb-5">
              Property Types
            </h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.name}>
                  <Link
                    href={type.href}
                    className="text-white/55 text-sm hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/90 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+92XXXXXXXXXX"
                  className="flex items-center gap-3 text-white/55 text-sm hover:text-white transition-colors duration-200"
                >
                  <FiPhone size={15} className="shrink-0" />
                  +92 XXX XXX XXXX
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/92XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/55 text-sm hover:text-green-400 transition-colors duration-200"
                >
                  <FaWhatsapp size={15} className="shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sardarestate.com"
                  className="flex items-center gap-3 text-white/55 text-sm hover:text-white transition-colors duration-200"
                >
                  <FiMail size={15} className="shrink-0" />
                  info@sardarestate.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-white/55 text-sm">
                  <FiMapPin size={15} className="shrink-0 mt-0.5" />
                  Abbottabad, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Sardar Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
