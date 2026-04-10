import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Code2, Palette, TrendingUp, Server } from "lucide-react";

const divisions = [
  {
    icon: Lightbulb,
    title: "Business Growth",
    description: "Strategy, validation & consulting to launch and scale with clarity.",
  },
  {
    icon: Code2,
    title: "Technology & Product",
    description: "Websites, apps, SaaS, APIs, and backend systems built to scale.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Brand identity, UI/UX systems, and visual design that connects.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Scale",
    description: "SEO, ads, funnels, and automation to drive growth and conversions.",
  },
  {
    icon: Server,
    title: "Software Systems",
    description: "School ERP, College ERP, Health, Gym & Inventory management.",
  },
];

export const Services = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-3 font-bold">
            Our Divisions
          </p>
          <h2 className="text-2xl md:text-[2rem] font-bold mb-4 text-balance">
            Five divisions, one growth partner.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-[15px] leading-relaxed">
            Each division brings deep expertise. Together, they deliver unified outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {divisions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to="/divisions"
                className="group flex flex-col h-full p-7 rounded-2xl border border-border/60 bg-background hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5">
                  <d.icon className="w-[18px] h-[18px] text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                  {d.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5 flex-1">
                  {d.description}
                </p>
                <span className="text-[12px] font-medium text-primary/60 group-hover:text-primary transition-all duration-200 flex items-center gap-1.5">
                  View Division <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
