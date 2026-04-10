import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Lightbulb,
  Code2,
  Rocket,
  CheckCircle,
  LampDeskIcon,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description:
      "We deeply understand your business, goals, challenges and opportunities.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Plan",
    description:
      "A tailored roadmap of tech, brand, marketing and growth.",
  },
  {
    icon: LampDeskIcon,
    number: "03",
    title: "Design",
    description:
      "Thoughtful design that puts your users first.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Build",
    description:
      "Clean development with regular updates and feedback.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch",
    description:
      "Strategic launch with tracking, optimization, and campaigns.",
  },
  {
    icon: CheckCircle,
    number: "06",
    title: "Scale",
    description:
      "Continuous optimization and long-term growth support.",
  },
];

export const Process = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* 🌫 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🧠 Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-3 font-bold">
            How We Works
          </p>

          <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-4">
            Our Process
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            A clear, proven methodology from discovery to long-term growth.
          </p>
        </motion.div>

        {/* 📍 Timeline */}
        <div className="relative">

          {/* 🔗 Vertical Line (premium gradient) */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/80 to-primary/40"
            />
          </div>

          {/* 🚀 Steps */}
          <div className="space-y-16 md:space-y-28">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* 🟢 Timeline Node (DOT + RING) */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary relative">
                      <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    </div>
                  </div>

                  {/* 📦 Card */}
                  <div
                    className={`flex-1 max-w-md ${
                      isLeft ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">

                      {/* 🔢 Step Number */}
                      <span className="text-[11px] tracking-[0.2em] uppercase text-primary mb-2 block">
                        Step {step.number}
                      </span>

                      {/* 🧩 Icon + Title */}
                      <div
                        className={`flex items-center gap-3 mb-2 ${
                          isLeft ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                          <step.icon className="w-4 h-4 text-primary" />
                        </div>

                        <h3 className="text-[16px] font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      {/* 📝 Description */}
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};