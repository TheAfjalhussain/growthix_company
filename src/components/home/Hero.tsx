import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/HY45MHONMMM6C1";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* 🟢 BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-[10px] tracking-[0.2em] uppercase font-bold text-primary">
            Strategy · Technology · Marketing · Growth
          </span>
        </motion.div>

        {/* 🧠 HEADING (IMPROVED TYPOGRAPHY) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.1] tracking-[-0.03em]"
        >
          <span className="font-semibold text-foreground">
            Building systems that
          </span>
          <br />
          <span className="font-semibold text-primary relative inline-block">
            help businesses grow
            <span className="absolute left-0 bottom-1 w-full h-[6px] bg-primary/20 -z-10 rounded-full" />
          </span>
        </motion.h1>

        {/* ✍️ DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed"
        >
          From idea validation to enterprise-grade systems — Growthix is your long-term partner for technology, branding, marketing, and business growth.
        </motion.p>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {/* Primary */}
          <Button
            asChild
            size="lg"
            className="h-[48px] px-7 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          {/* Secondary */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-[48px] px-7 rounded-lg text-sm font-medium"
          >
            <a href={WHATSAPP_URL} target="_blank">
              <MessageCircle className="mr-2 w-4 h-4" />
              Talk to Growthix
            </a>
          </Button>
        </motion.div>

        {/* 📊 STATS (CLEAN + SPACING FIXED) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs md:text-sm text-muted-foreground"
        >
          <div>
            <p className="text-base font-semibold text-foreground">50+</p>
            <p>Projects Delivered</p>
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">3+</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">5</p>
            <p>Core Services</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};