import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import clayzioImg from "../../public/images/clayzio.png";
import bookwormKidsImg from "../../public/images/bookworm-kids.png";
import contant from "../../public/images/social-media.png";
import marketPlace from "../../public/images/online-marketplace.png";

const featuredProjects = [
  {
    title: "E-Commerce Platform, Clayzio",
    category: "Technology",
    description:
      "Built a complete e-commerce solution with inventory, payments, and automation.",
    image: clayzioImg,
    link: "https://clayzio.com",
    tags: ["React", "Node.js", "PostgreSQL"],
    results: "40% increase in conversions",
  },
  {
    title: "Lead Generation Campaign",
    category: "Marketing",
    description:
      "High-performing Meta & Google Ads campaigns generating quality leads.",
    image: contant,
    link: "#",
    tags: ["Meta Ads", "Google Ads", "Landing Pages"],
    results: "150+ leads/month",
  },
  {
    title: "Brand Identity + Website",
    category: "Branding",
    description:
      "Complete brand transformation including UI system and website.",
    image: bookwormKidsImg,
    link: "https://www.bookwormkids.in",
    tags: ["UI/UX", "Branding", "Website"],
    results: "Strong online presence",
  },
  {
    title: "Marketplace Growth System",
    category: "Marketing",
    description:
      "Built strong D2C presence across multiple marketplaces.",
    image: marketPlace,
    link: "#",
    tags: ["Amazon", "Flipkart", "D2C"],
    results: "Scaled online visibility",
  },
];

const moreProjects = [
  {
    title: "Event Management Platform",
    category: "Technology",
    description:
      "Built a scalable event platform with seamless booking, secure payments, and real-time tracking to streamline operations and enhance user experience.",
  },
  {
    title: "School Brand Transformation",
    category: "Branding",
    description:
      "Developed a complete brand identity system, including website and marketing assets, resulting in stronger trust and increased parent engagement.",
  },
  {
    title: "D2C Performance Growth",
    category: "Marketing",
    description:
      "Executed data-driven campaigns that scaled revenue from 2x to 5x while improving customer acquisition efficiency.",
  },
  {
    title: "Custom SaaS Dashboard",
    category: "Technology",
    description:
      "Designed and developed a high-performance dashboard with advanced analytics and user management for better business decision-making.",
  },
  {
    title: "Startup Brand Launch",
    category: "Branding",
    description:
      "Created a modern brand identity and digital presence for a startup, helping them launch with clarity, consistency, and strong market positioning.",
  },
  {
    title: "Lead Generation System",
    category: "Marketing",
    description:
      "Built and optimized a complete lead generation funnel, significantly increasing qualified leads and conversion rates.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <Layout>

      {/* 🔥 HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4">
              Our Work
            </p>

            <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-semibold tracking-[-0.03em] mb-6">
              Projects That Drive Results
            </h1>

            <p className="text-muted-foreground max-w-xl text-sm md:text-base">
              A showcase of our work across technology, marketing, and branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔥 FEATURED PROJECTS */}
      <section className="py-24 bg-background relative">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-20">

            {featuredProjects.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-2 gap-10 items-center"
                >

                  {/* IMAGE */}
                  <div className={isLeft ? "" : "lg:order-2"}>
                    <div className="relative rounded-2xl overflow-hidden border border-border/50 group">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                      <div className="absolute bottom-4 left-4 text-xs bg-primary text-white px-3 py-1 rounded-md">
                        {project.results}
                      </div>

                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className={isLeft ? "" : "lg:order-1"}>

                    <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>

                    <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-muted px-3 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm text-primary"
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 🔥 MORE PROJECTS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-xl font-semibold mb-10 text-center">
            More Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {moreProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border/50 bg-card/40 hover:-translate-y-1 hover:shadow-md transition"
              >
                <span className="text-xs text-primary">
                  {project.category}
                </span>

                <h3 className="font-semibold mt-2 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-24 bg-card/50">
        <div className="max-w-2xl mx-auto text-center px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Want a Custom Solution?
          </h2>

          <p className="text-muted-foreground mb-6">
            Let’s build something amazing together.
          </p>

          <Button asChild size="lg">
            <Link to="/contact">
              Talk to Growthix
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

        </div>
      </section>

    </Layout>
  );
};

export default Projects;