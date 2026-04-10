import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Shield, Heart, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Target, title: "Growth", description: "We measure success by the growth we enable for our clients." },
  { icon: Shield, title: "Integrity", description: "Trust through transparency, honest communication, and clear outcomes." },
  { icon: Heart, title: "Ownership", description: "We treat every project as if it's our own business." },
  { icon: Gem, title: "Quality", description: "Every detail — code, design, strategy — reflects our commitment." },
];

const team = [
  {
    name: "Suhaib Alam",
    role: "Head of Design",
    bio: "Leads design at Growthix, crafting intuitive and high-impact user experiences that blend aesthetics with business performance.",
    avatar: "SA",
  },
  {
    name: "Afjal Hussain",
    role: "Full-Stack Developer",
    bio: "Builds scalable, high-performance web applications with a strong focus on architecture, performance, and long-term maintainability.",
    avatar: "AH",
  },
  {
    name: "Rajiv Kumar",
    role: "Marketing Director",
    bio: "Drives growth through data-driven marketing strategies, performance campaigns, and scalable customer acquisition systems.",
    avatar: "RK",
  },
  {
    name: "Amit Prajapati",
    role: "Strategy Consultant",
    bio: "Helps businesses define clear growth strategies, optimize operations, and achieve sustainable digital transformation.",
    avatar: "AP",
  },
  {
    name: "Shankar Kumar",
    role: "Brand Strategist",
    bio: "Builds strong, memorable brands by aligning identity, messaging, and positioning with real business goals.",
    avatar: "SK",
  },
  {
    name: "Ayush Sharma",
    role: "Frontend Developer",
    bio: "Develops modern, responsive, and performance-optimized user interfaces that deliver seamless experiences across all devices.",
    avatar: "AS",
  }
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Excellence" },
  { value: "5", label: "Focused Divisions" },
  { value: "98%", label: "Client Satisfaction" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <p className="text-[11px] font-medium text-primary tracking-[0.15em] uppercase mb-4">About Growthix</p>
            <h1 className="text-3xl md:text-[2.75rem] font-bold mb-6 leading-[1.12] tracking-[-0.02em] text-balance">
              Built to help businesses grow with clarity and precision.
            </h1>
            <p className="text-muted-foreground leading-relaxed text-[15px] max-w-lg">
              Growthix was founded with a simple belief: businesses deserve partners who think like founders — not just contractors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="section-padding bg-card/50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-[2rem] font-bold mb-6 tracking-[-0.02em]">Why Growthix Exists</h2>
              <div className="space-y-5 text-muted-foreground text-[15px] leading-[1.8]">
                <p>
                  Too many businesses struggle with fragmented digital partnerships — separate agencies for development, marketing, and branding, none speaking the same language.
                </p>
                <p>
                  Growthix brings technology, marketing, and branding together under one ecosystem. Five focused divisions, one unified strategy, all working toward your growth.
                </p>
                <p>
                  We're built for ambitious businesses that want serious, long-term outcomes — not just deliverables.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-7 rounded-2xl border border-border/60 bg-background text-center hover:border-primary/20 transition-colors duration-300">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1.5 tracking-[-0.03em]">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

       <section className="py-24 md:py-32 bg-background relative overflow-hidden">

      {/* 🌫 Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🧠 Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary mb-3">
            Our Team
          </p>

          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold tracking-[-0.02em] mb-4">
            Meet the people behind Growthix
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            A team of builders, strategists, and creators focused on delivering
            meaningful digital growth.
          </p>
        </motion.div>

        {/* 👥 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:-translate-y-1"
            >
              {/* 👤 Avatar */}
              <div className="mb-5 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-105 transition">
                <span className="text-base font-semibold text-primary">
                  {member.avatar}
                </span>
              </div>

              {/* 🧾 Content */}
              <h3 className="text-[15px] font-semibold text-foreground mb-1">
                {member.name}
              </h3>

              <p className="text-[12px] text-primary mb-3 tracking-wide">
                {member.role}
              </p>

              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {member.bio}
              </p>

              {/* 🔹 subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-primary/[0.03] to-transparent transition pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <p className="text-[11px] font-medium text-primary tracking-[0.15em] uppercase mb-3">What Drives Us</p>
            <h2 className="text-2xl md:text-[2rem] font-bold mb-3 tracking-[-0.02em]">Our Core Values</h2>
            <p className="text-muted-foreground text-[15px] max-w-md">The principles that guide everything we do.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border/60 bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] transition-colors duration-300">
                  <value.icon className="w-[18px] h-[18px] text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-[2rem] font-bold mb-4 tracking-[-0.02em]">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-[15px] leading-relaxed">
              We're always looking for ambitious businesses to partner with.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-[13px] font-semibold rounded-xl shadow-md shadow-primary/10">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
