import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kajal Prajapati",
    role: "Principal, Bookworm Kids School",
    content:
      "Growthix completely transformed our digital presence. From strategy to execution, everything was handled professionally, and we now have a website that truly reflects our school’s quality and vision.",
    avatar: "KP",
  },
  {
    name: "Amit Raj",
    role: "Founder, Bookworm Ecosystem",
    content:
      "Working with Growthix felt like having an in-house growth team. They understood our requirements deeply and delivered a solution that aligned perfectly with our business goals.",
    avatar: "AR",
  },
  {
    name: "Ramchandra Kr Soni",
    role: "Director, R.k Mission School",
    content:
      "After partnering with Growthix, our digital channels became a major growth driver. Today, nearly 60% of our business comes through online platforms.",
    avatar: "RS",
  },
  {
    name: "Mukesh Kumar",
    role: "Director, Gokul Vidyapeeth School",
    content:
      "The Growthix team is highly professional, detail-oriented, and committed to quality. They ensured smooth execution and delivered beyond our expectations.",
    avatar: "MK",
  },
  {
    name: "Amit Dubay",
    role: "Founder, Ayuvenger BioTech",
    content:
      "What stood out about Growthix was their clarity and execution. They don’t just deliver projects — they focus on real business outcomes.",
    avatar: "AD",
  },
  {
    name: "A.H",
    role: "Co-founder, Clayzio",
    content:
      "Growthix combines strong technical expertise with a deep understanding of business growth. Their approach is structured, strategic, and results-driven.",
    avatar: "AH",
  },
];

export const ScrollingTestimonials = () => {
  return (
    <section className="py-20 md:py-24 bg-background overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-3 font-bold">
            Testimonials
          </p>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold">
          Loved by Clients
        </h2>
      </div>

      <div className="relative">

        {/* Gradient fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scroll */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[340px] p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                "{t.content}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {t.avatar}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};