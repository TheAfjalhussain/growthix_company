import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Code2, Palette, TrendingUp, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const divisionIcons = [Lightbulb, Code2, Palette, TrendingUp, Server];

const serviceCategories = [
  {
    title: "Business Growth",
    description: "Strategic services to validate, plan, and scale your business.",
    services: [
      { title: "Idea Validation", description: "Test your concept with real market data.", features: ["Market Research", "Competitor Analysis", "User Interviews", "Feasibility Study"] },
      { title: "MVP Planning", description: "Define scope, prioritize features, and plan a focused launch.", features: ["Feature Prioritization", "Architecture", "Timeline", "Budget"] },
      { title: "Growth Strategy", description: "Strategic planning to scale your business sustainably.", features: ["Market Analysis", "Growth Roadmap", "KPI Tracking", "Competitive Research"] },
    ],
  },
  {
    title: "Technology & Product",
    description: "Building robust digital infrastructure that scales.",
    services: [
      { title: "Website Development", description: "Custom websites built for performance and conversions.", features: ["React & Next.js", "Responsive", "Performance", "SEO-Ready"] },
      { title: "Web Applications", description: "Complex dashboards, SaaS products, and portals.", features: ["Dashboards", "User Management", "Data Viz", "Role-based Access"] },
      { title: "Mobile Apps", description: "Native and cross-platform apps for iOS and Android.", features: ["React Native", "Flutter", "App Store", "Push Notifications"] },
      { title: "Backend & APIs", description: "Robust backend systems, APIs, and database architecture.", features: ["REST APIs", "Database Design", "Integrations", "Cloud Infra"] },
    ],
  },
  {
    title: "Branding & Design",
    description: "Creating brand identities that connect with your audience.",
    services: [
      { title: "Brand Identity", description: "Logos, color palettes, typography, and guidelines.", features: ["Logo Design", "Colors", "Typography", "Brand Guidelines"] },
      { title: "UI/UX Design", description: "User-centered design systems for exceptional experiences.", features: ["Research", "Wireframing", "Prototyping", "Design Systems"] },
      { title: "Digital Branding", description: "Complete online brand presence across all touchpoints.", features: ["Social Branding", "Email Templates", "Digital Assets", "Brand Voice"] },
    ],
  },
  {
    title: "Marketing & Scale",
    description: "Data-driven strategies that drive traffic and conversions.",
    services: [
      { title: "Meta Ads", description: "Strategic campaigns across Facebook and Instagram.", features: ["Audience Targeting", "Creative Strategy", "Tracking", "Retargeting"] },
      { title: "Google Ads", description: "Search, Display, and YouTube advertising.", features: ["Search Campaigns", "Display Ads", "YouTube", "Shopping Ads"] },
      { title: "SEO & Organic", description: "Rank higher and grow your organic traffic.", features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"] },
      { title: "Funnels & Automation", description: "Automated lead generation and sales systems.", features: ["Sales Funnels", "Email Automation", "Lead Nurturing", "CRM"] },
    ],
  },
  {
    title: "Software Products",
    description: "Complete systems for modern institutions and businesses.",
    services: [
      { title: "School ERP", description: "Complete school management with attendance, fees, and reports.", features: ["Attendance", "Fee Management", "Reports", "Parent Portal"] },
      { title: "College ERP", description: "Higher education admissions, courses, and academics.", features: ["Admissions", "Courses", "Examination", "Student Portal"] },
      { title: "Health Management", description: "Clinic and hospital management for appointments and records.", features: ["Appointments", "Patient Records", "Billing", "Pharmacy"] },
      { title: "Gym & Inventory", description: "Fitness center operations and stock management.", features: ["Membership", "Scheduling", "Inventory", "Billing"] },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-[11px] font-medium text-primary tracking-[0.15em] uppercase mb-4">Our Services</p>
            <h1 className="text-3xl md:text-[2.75rem] font-bold mb-6 leading-[1.12] tracking-[-0.02em] text-balance">
              Five divisions. One growth partner.
            </h1>
            <p className="text-muted-foreground leading-relaxed text-[15px] max-w-lg">
              Technology, marketing, branding, strategy, and product systems — all working together toward your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {serviceCategories.map((category, catIndex) => {
        const Icon = divisionIcons[catIndex];
        return (
          <section key={category.title} className={`section-padding ${catIndex % 2 === 0 ? "bg-card/50" : ""}`}>
            <div className="container-wide mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl md:text-[2rem] font-bold tracking-[-0.02em]">{category.title}</h2>
                </div>
                <p className="text-muted-foreground max-w-lg text-[15px] ml-12">{category.description}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-5">
                {category.services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group p-7 rounded-2xl border border-border/60 bg-background hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                  >
                    <h3 className="text-[15px] font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-16 px-8 md:px-14 rounded-2xl border border-border/60 bg-card/50">
            <h2 className="text-2xl md:text-[2rem] font-bold mb-4 tracking-[-0.02em]">Let's Build & Grow Together</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-[15px] leading-relaxed">
              Ready to transform your digital presence? Let's discuss your goals.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-[13px] font-semibold rounded-xl shadow-md shadow-primary/10">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
