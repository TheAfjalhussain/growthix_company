import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Growthix do?",
    answer:
      "Growthix is a full-service growth partner that combines technology, branding, marketing, and business strategy. We don’t just build products — we design complete growth systems that help businesses launch, scale, and dominate their market."
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A high-quality website typically takes 4–6 weeks, while advanced platforms or applications can take 3–6 months. We provide a clear, structured timeline during the discovery phase with defined milestones."
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We work as long-term partners, not just service providers. Our support includes continuous optimization, performance improvements, feature updates, and strategic guidance to ensure consistent business growth."
  },
  {
    question: "How is pricing structured?",
    answer:
      "Our pricing is tailored to your business goals and project scope. We offer both fixed-project pricing and long-term retainer models. Every proposal is transparent, detailed, and designed to deliver maximum value — with no hidden costs."
  },
  {
    question: "Can you handle both development and marketing?",
    answer:
      "Absolutely. Growthix is built on the belief that technology and marketing must work together. By handling both under one roof, we ensure faster execution, better alignment, and strategies that actually drive measurable growth."
  },
  {
    question: "What makes Growthix different from other agencies?",
    answer:
      "Unlike traditional agencies, we operate with a founder mindset. We don’t just deliver services — we think like business partners. Our approach is focused on long-term impact, measurable results, and building scalable systems that drive real growth."
  }
];

export const FAQ = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-3 font-bold">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Common Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-5 data-[state=open]:border-primary/25 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 text-sm font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
