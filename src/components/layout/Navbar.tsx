import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Lightbulb, Code2, Palette, TrendingUp, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImg from "@/assets/logo-horizontal.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", hasMega: true },
  { name: "Divisions", path: "/divisions" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const megaMenuData = [
  { icon: Lightbulb, title: "Business Growth", desc: "Strategy, validation & consulting" },
  { icon: Code2, title: "Technology & Product", desc: "Websites, apps, SaaS & APIs" },
  { icon: Palette, title: "Branding & Design", desc: "Identity, UI/UX & visual systems" },
  { icon: TrendingUp, title: "Marketing & Scale", desc: "SEO, ads, funnels & automation" },
  { icon: Server, title: "Software Systems", desc: "ERP, health, gym & industry platforms" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setMegaOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container-wide mx-auto px-5 md:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="Growthix"
              className="h-32 md:h-36 w-full object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] bg-card border border-border/60 rounded-xl shadow-lg shadow-foreground/[0.02] p-1.5"
                        onMouseEnter={handleMegaEnter}
                        onMouseLeave={handleMegaLeave}
                      >
                        {megaMenuData.map((item) => (
                          <Link
                            key={item.title}
                            to="/services"
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                          >
                            <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <div>
                              <p className="text-[13px] font-medium">{item.title}</p>
                              <p className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                        <div className="mt-1 pt-1 border-t border-border/40">
                          <Link
                            to="/services"
                            className="flex items-center gap-2 px-3 py-2 text-[12px] font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            View All Services
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="font-medium text-[13px] rounded-3xl h-9 px-5">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border/50 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasMega ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-muted-foreground"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-0.5 pb-2 overflow-hidden"
                          >
                            {megaMenuData.map((item) => (
                              <Link
                                key={item.title}
                                to="/services"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-foreground/80"
                              >
                                <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={1.5} />
                                {item.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 text-sm font-medium ${
                        location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="mt-3 w-full text-sm font-medium rounded-lg">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Start a Project
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
