import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Code2, Palette, TrendingUp, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const divisions = [
  {
    icon: Lightbulb,
    title: "Business Growth",
    subtitle: "Strategy & Consulting",
    description: "Idea validation, MVP planning, startup consulting, and strategic growth roadmaps for businesses at every stage.",
    services: ["Idea Validation", "MVP Planning", "Growth Strategy", "Startup Consulting", "Business Modeling"],
    bestFor: "Startups, founders, and businesses exploring new markets.",
  },
  {
    icon: Code2,
    title: "Technology & Product",
    subtitle: "Development & Engineering",
    description: "Custom websites, web applications, mobile apps, SaaS products, APIs, and backend systems built for scale.",
    services: ["Website Development", "Web Applications", "Mobile Apps", "SaaS Products", "Backend & APIs"],
    bestFor: "Businesses that need reliable, scalable digital products.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    subtitle: "Identity & Experience",
    description: "Brand identity systems, UI/UX design, visual design, and complete digital branding that connects with your audience.",
    services: ["Brand Identity", "UI/UX Design", "Design Systems", "Visual Branding", "Digital Assets"],
    bestFor: "Companies building or refreshing their brand presence.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Scale",
    subtitle: "Growth & Acquisition",
    description: "SEO, Google Ads, Meta Ads, funnels, CRO, and marketing automation to drive traffic and conversions.",
    services: ["SEO & Organic", "Google Ads", "Meta Ads", "Funnels & Automation", "Performance Marketing"],
    bestFor: "Businesses ready to scale their customer acquisition.",
  },
  {
    icon: Server,
    title: "Software Systems",
    subtitle: "Products & Platforms",
    description: "Complete management systems for institutions — School ERP, College ERP, Health Management, Gym & Inventory.",
    services: ["School ERP", "College ERP", "Health Management", "Gym Management", "Inventory Systems"],
    bestFor: "Schools, colleges, clinics, gyms, and operational businesses.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Divisions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-[11px] font-medium text-primary tracking-[0.15em] uppercase mb-4">Our Divisions</p>
            <h1 className="text-3xl md:text-[2.75rem] font-bold mb-6 leading-[1.12] tracking-[-0.02em] text-balance">
              Five focused divisions. One growth ecosystem.
            </h1>
            <p className="text-muted-foreground leading-relaxed text-[15px] max-w-lg">
              Each division operates with deep expertise in its domain, while working together as part of the Growthix ecosystem to deliver unified outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divisions List */}
      <section className="section-padding bg-card/50">
        <div className="container-wide mx-auto">
          <div className="space-y-5">
            {divisions.map((division, i) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group p-7 md:p-9 rounded-2xl border border-border/60 bg-background hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors duration-300">
                        <division.icon className="w-[18px] h-[18px] text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold group-hover:text-primary transition-colors duration-200">{division.title}</h2>
                        <p className="text-xs text-muted-foreground">{division.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">{division.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {division.services.map((s) => (
                        <span key={s} className="px-3 py-1.5 text-[11px] font-medium bg-muted/60 text-muted-foreground rounded-lg">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="p-5 rounded-xl bg-muted/30 border border-border/40">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2">Best for</p>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">{division.bestFor}</p>
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
                    >
                      Explore Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-[2rem] font-bold mb-4 tracking-[-0.02em]">Not sure which division fits?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-[15px] leading-relaxed">
              Tell us about your business goals, and we'll recommend the right path forward.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-[13px] font-semibold rounded-xl shadow-md shadow-primary/10">
              <Link to="/contact">
                Talk to Growthix
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Divisions;
