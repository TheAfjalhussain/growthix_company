import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
} from "lucide-react";
import logoImg from "@/assets/logo-horizontal.png";

const WHATSAPP_URL = "https://wa.me/message/HY45MHONMMM6C1";

const footerLinks = {
  pages: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Devisions", path: "/divisions" },
    { name: "Contact", path: "/contact" },
  ],
  divisions: [
    { name: "Business Growth", path: "/divisions" },
    { name: "Technology", path: "/divisions" },
    { name: "Branding", path: "/divisions" },
    { name: "Marketing", path: "/divisions" },
    { name: "Our Products", path: "/divisions" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ],
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/company/growthixofficial", icon: Linkedin },
    { name: "Facebook", href: "https://facebook.com/growthixofficial", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/growthix.official", icon: Instagram },
    { name: "Youtube", href: "https://youtube.com/growthix.official", icon: Youtube }
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">

      {/* 🌫 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      {/* 🔥 BIG BRAND TEXT */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[16vw] md:text-[12vw] font-black tracking-tight text-foreground/[0.03] whitespace-nowrap leading-none translate-y-[30%]">
          GROWTHIX
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* 🔝 GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* 🧠 Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Growthix"
                className="h-auto w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your digital growth partner for building systems that help businesses grow through technology, marketing, branding and strategy.
            </p>

            {/* Contact */}
            <div className="space-y-3 pt-2">
              <a href="mailto:hello@growthix.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                <Mail className="w-4 h-4 text-primary" />
                hello@growthix.in
              </a>
              <a href="tel:+917667845540" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                <Phone className="w-4 h-4 text-primary" />
                +91 7667845540
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                Bundelkhand Par Nawada, Nawada, Bihar, India (805112)
              </div>
            </div>
          </div>

          {/* 📄 Pages */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Pages
            </h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🧩 Divisions */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Divisions
            </h4>
            <ul className="space-y-3">
              {footerLinks.divisions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🚀 CTA + Social */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Get Started
            </h4>

            <p className="text-sm text-muted-foreground mb-5">
              Let’s build something great together.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
            {footerLinks.socials.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          </div>
        </div>

        {/* 🔻 Bottom */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Growthix. All rights reserved.
          </p>

          <div className="flex gap-5">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs text-muted-foreground hover:text-foreground transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};