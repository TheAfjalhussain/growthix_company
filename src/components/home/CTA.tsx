import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/HY45MHONMMM6C1";

export const GetStarted = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 md:py-24 px-8 md:px-16 rounded-2xl border border-border/50 bg-card relative overflow-hidden"
      >
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-primary/[0.04] blur-[80px]" />
        </div>

        <div className="relative z-10">
          <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-3 font-bold">
            Let's Work Together
          </p>
          <h2 className="text-2xl md:text-[2rem] font-bold mb-4 text-balance">
            Ready to build the right growth system?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10 text-[15px] leading-relaxed">
            Let's talk about your business goals and find the right path forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-[50px] px-8 text-[13px] font-semibold rounded-xl shadow-md shadow-primary/10"
            >
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-[50px] px-8 text-[13px] font-semibold rounded-xl"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4 text-primary" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
