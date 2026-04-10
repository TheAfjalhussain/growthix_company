import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const techCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "deployment", label: "Deployment" },
  { id: "cms", label: "CMS" },
  { id: "builders", label: "Website Builders" },
  { id: "tools", label: "Tools & Stack" },
];

const technologies = {
  frontend: [
    { name: "React", color: "61DAFB" },
    { name: "Next.js", color: "000000" },
    { name: "TypeScript", color: "3178C6" },
    { name: "Tailwind CSS", color: "06B6D4" },
    { name: "Vue.js", color: "4FC08D" },
    { name: "Angular", color: "DD0031" },
    { name: "Svelte", color: "FF3E00" },
    { name: "Framer Motion", color: "0055FF" },
  ],
  backend: [
    { name: "Node.js", color: "339933" },
    { name: "Python", color: "3776AB" },
    { name: "Go", color: "00ADD8" },
    { name: "PostgreSQL", color: "4169E1" },
    { name: "MongoDB", color: "47A248" },
    { name: "Redis", color: "DC382D" },
    { name: "GraphQL", color: "E10098" },
    { name: "Prisma", color: "2D3748" },
  ],
  deployment: [
    { name: "AWS", color: "FF9900" },
    { name: "Google Cloud", color: "4285F4" },
    { name: "Vercel", color: "000000" },
    { name: "Netlify", color: "00C7B7" },
    { name: "Docker", color: "2496ED" },
    { name: "Kubernetes", color: "326CE5" },
    { name: "Cloudflare", color: "F38020" },
    { name: "DigitalOcean", color: "0080FF" },
  ],
  cms: [
    { name: "Sanity", color: "F03E2F" },
    { name: "Contentful", color: "2478CC" },
    { name: "Strapi", color: "4945FF" },
    { name: "WordPress", color: "21759B" },
    { name: "Payload CMS", color: "000000" },
    { name: "Directus", color: "6644FF" },
  ],
  builders: [
    { name: "Webflow", color: "4353FF" },
    { name: "Framer", color: "0055FF" },
    { name: "Shopify", color: "7AB55C" },
    { name: "Squarespace", color: "000000" },
    { name: "Wix", color: "0C6EFC" },
  ],
  tools: [
    { name: "Git", color: "F05032" },
    { name: "GitHub", color: "181717" },
    { name: "Figma", color: "F24E1E" },
    { name: "Jira", color: "0052CC" },
    { name: "Slack", color: "4A154B" },
    { name: "VS Code", color: "007ACC" },
    { name: "Postman", color: "FF6C37" },
    { name: "Linear", color: "5E6AD2" },
  ],
};

const codeSnippets = [
  `// Scalable Architecture
const app = createGrowthEngine({
  strategy: 'scale-first',
  infrastructure: 'cloud-native',
  monitoring: true
});

app.deploy({ 
  environment: 'production',
  regions: ['us-east', 'eu-west'] 
});`,
  `// Modern Tech Stack
import { createServer } from 'next';
import { Database } from '@growthix/db';

const db = new Database({
  provider: 'postgresql',
  scaling: 'auto',
  replication: true
});

export default db.connect();`,
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [displayedCode, setDisplayedCode] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    const snippet = codeSnippets[snippetIndex];
    let charIndex = 0;
    setDisplayedCode("");

    const typeInterval = setInterval(() => {
      if (charIndex < snippet.length) {
        setDisplayedCode(snippet.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 3000);
      }
    }, 20);

    return () => clearInterval(typeInterval);
  }, [snippetIndex]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Powered by{" "}
              <span className="text-gradient">Modern Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We leverage cutting-edge technologies to build scalable, 
              high-performance solutions that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Code Section */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <div className="bg-muted px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-4 text-sm text-muted-foreground">growthix-stack.ts</span>
              </div>
              <div className="bg-background p-6 min-h-[300px]">
                <pre className="code-font text-sm leading-relaxed">
                  <code className="text-foreground">
                    {displayedCode}
                    <span className="inline-block w-2 h-5 bg-primary animate-blink ml-1" />
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Tech Icons */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Tech Ecosystem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A carefully curated stack of technologies that power exceptional digital experiences.
            </p>
          </motion.div>

          {/* Orbiting animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-16"
          >
            <div className="absolute inset-0 rounded-full border border-border" />
            <div className="absolute inset-8 rounded-full border border-border" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">G</span>
              </div>
            </div>
            {["React", "Node", "AWS", "TS", "Next", "DB"].map((tech, i) => (
              <motion.div
                key={tech}
                className="absolute w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-xs font-medium"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  x: [0, Math.cos((i * Math.PI * 2) / 6) * 120],
                  y: [0, Math.sin((i * Math.PI * 2) / 6) * 120],
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filtered Tech Sections */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Click a category to explore the specific technologies we work with.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {techCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tech Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {technologies[activeCategory as keyof typeof technologies].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 bg-background border border-border rounded-xl text-center hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: `#${tech.color}` }}
                >
                  {tech.name.charAt(0)}
                </div>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Connect & Collaborate
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you're a fellow developer, potential partner, or client looking 
              for technical expertise—let's build something amazing together.
            </p>
            <Button asChild size="lg">
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
}
