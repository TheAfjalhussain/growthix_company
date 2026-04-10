import { motion } from "framer-motion";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
];

export const Clients = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">

      {/* 🧠 Header */}
      <div className="text-center mb-10">
        <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-3 font-bold">
            Trusted By
          </p>
        <h2 className="text-2xl font-medium text-foreground">
          Companies we’ve worked with
        </h2>
      </div>

      {/* 🧩 Logo Marquee */}
      <div className="relative">

        {/* 🌫 Gradient fade (LEFT) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />

        {/* 🌫 Gradient fade (RIGHT) */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* 🔁 Scrolling Track */}
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* 🔁 Duplicate for infinite loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[120px]"
            >
              <img
                src={logo}
                alt="client logo"
                className="h-12 md:h-20 w-auto object-contain opacity-100 hover:scale-125 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};