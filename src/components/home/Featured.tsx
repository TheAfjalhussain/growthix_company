import { motion } from "framer-motion";
import { Quote, Star, BadgeCheck, Sparkles } from "lucide-react";
import kajal from "../../../public/logos/principle-image.png";

const featuredTestimonial = {
  name: "Kajal Prajapati",
  role: "Founder & Principal, Bookworm Kids School",
  company: "Bookworm Kids School",
  image: kajal,
  rating: 5,
  content: [
    "Partnering with Growthix was one of the best decisions for our school. They understood our goals clearly and helped us improve our online presence with a structured, thoughtful approach.",
    "What impressed us most was that they did more than design a website. They supported our branding, communication, and build a long-term growth system that actually works.",
    "Today, our school looks more trustworthy online presence, and we feel confident about scaling further with Growthix by our side."
  ],
};

const stats = [
  { label: "Client Satisfaction", value: "100%" },
  { label: "Brand Growth", value: "5x" },
  { label: "Project Experience", value: "Premium" },
];

export const FeaturedTestimonial = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-4 font-bold">
            Our Client Reviews
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-5xl">
            Real Results from <span className="block text-primary">Our Clients</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Testimonial section that highlights trust, transformation,
            and the professional value that Growthix brings to every client.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />

              <img
                src={featuredTestimonial.image}
                alt={featuredTestimonial.name}
                className="h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[540px]"
              />

              {/* Bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {featuredTestimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {featuredTestimonial.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-2 backdrop-blur-md">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-10">
              {/* Quote mark */}
              <Quote className="absolute right-6 top-6 h-16 w-16 text-primary/10" />

              {/* Rating row */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  5.0 rating from a satisfied client
                </span>
              </div>

              {/* Testimonial text */}
              <div className="space-y-5">
                {featuredTestimonial.content.map((para, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="text-base leading-8 text-foreground md:text-[17px]"
                  >
                    “{para}”
                  </motion.p>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-border/70" />

              {/* Author + Stats */}
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      KP
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {featuredTestimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {featuredTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};