import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Zap, Heart } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "One Ecosystem",
    description: "Technology, branding, marketing, and growth — unified under one roof.",
  },
  {
    icon: Users,
    title: "Founder Mindset",
    description: "We think like business owners. Every decision ties to real outcomes.",
  },
  {
    icon: Zap,
    title: "Long-term Partnership",
    description: "Our support and strategy continue well beyond launch day.",
  },
  {
    icon: Heart,
    title: "Premium Quality",
    description: "Clean code, thoughtful design, and clear communication at every step.",
  },
];

export const WhyUs = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-3">
              Why Growthix
            </p>
            <h2 className="text-2xl md:text-[2rem] font-bold mb-5 text-balance leading-tight">
              A serious partner for businesses that want to grow properly.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-[15px] max-w-md">
              We're not another vendor. Growthix is built to be your long-term
              growth partner across technology, marketing, branding, and strategy.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-primary hover:gap-3 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-border/60 bg-card hover:border-primary/15 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/[0.07] flex items-center justify-center mb-4">
                  <reason.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[14px] font-semibold mb-1.5">{reason.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
