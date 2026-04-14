import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin, Phone, MessageCircle, Twitter, Facebook, Instagram, Linkedin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/message/HY45MHONMMM6C1";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/growthixofficial", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/growthixofficial", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/growthix.official", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/growthixofficial", label: "LinkedIn" },
];

const items = [
  {
    title: "Free Consultation",
    description:
      "We offer a free initial consultation to understand your needs.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear, upfront pricing with no hidden costs.",
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous support and optimization after launch.",
  },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@growthix.in ",
    link: "hello@growthix.in",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7667845540  || +91 8807403946" ,
    link: "tel:+917667845540",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    link: WHATSAPP_URL,
    external: true,
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Bundelkhand Par Nawada, Nawada, Bihar, India (805112)",
    link: "https://maps.app.goo.gl/ez6hbCXcdNouwiL97",
    external: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      let msg = `Hi Growthix, I'm interested in your services.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n`;
      if (formData.phone) msg += `*Phone:* ${formData.phone}\n`;
      if (formData.company) msg += `*Company:* ${formData.company}\n`;
      msg += `\n*Message:*\n${formData.message}`;
      const whatsappLink = `https://api.whatsapp.com/send?phone=7667845540&text=${encodeURIComponent(msg)}`;
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
      toast({ title: "Redirecting to WhatsApp", description: "Your message is being sent via WhatsApp." });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-[11px] font-medium text-primary tracking-[0.15em] uppercase mb-4">Contact</p>
            <h1 className="text-3xl md:text-[2.75rem] font-bold mb-6 leading-[1.12] tracking-[-0.02em]">
              Let's Build Something Great
            </h1>
            <p className="text-muted-foreground leading-relaxed text-[15px] max-w-lg">
              Ready to start your project? Get in touch and let's discuss how we can help transform your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-card/50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-xl font-bold mb-1.5 tracking-[-0.02em]">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground mb-8">Fill the form and we'll reach out to you on WhatsApp.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">Name *</Label>
                    <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="bg-background h-11 rounded-xl border-border/60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className="bg-background h-11 rounded-xl border-border/60" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} className="bg-background h-11 rounded-xl border-border/60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm">Company</Label>
                    <Input id="company" name="company" placeholder="Your company" value={formData.company} onChange={handleChange} className="bg-background h-11 rounded-xl border-border/60" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">Message *</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={handleChange} required className="bg-background resize-none rounded-xl border-border/60" />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="gap-2 h-12 px-8 text-[13px] font-semibold rounded-xl shadow-md shadow-primary/10">
                  {isSubmitting ? "Sending..." : (
                    <><MessageCircle className="w-4 h-4" /> Send via WhatsApp</>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
            >
              <h2 className="text-xl font-bold mb-6 tracking-[-0.02em]">Contact Information</h2>
              <div className="space-y-3 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="group p-5 rounded-2xl border border-border/60 bg-background hover:border-primary/20 transition-all duration-300">
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors duration-300">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-[11px] text-muted-foreground">{item.title}</p>
                          <p className="text-sm font-medium">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-[11px] text-muted-foreground">{item.title}</p>
                          <p className="text-sm font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md">

  {/* 🌫 Subtle hover gradient */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 hover:opacity-100 transition pointer-events-none" />

  {/* 🧠 Title */}
  <h3 className="text-[14px] font-semibold text-foreground mb-5">
    Follow Us
  </h3>

  {/* 🔗 Social Icons */}
  <div className="flex items-center gap-3">

    {socialLinks.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="group relative w-11 h-11 rounded-xl border border-border/50 bg-muted/40 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10"
      >
        {/* Icon */}
        <social.icon className="w-4 h-4 group-hover:text-primary transition-colors" />

        {/* 🔥 Hover glow */}
        <span className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-md transition pointer-events-none" />
      </a>
    ))}

  </div>
</div>

              <div className="p-6 rounded-2xl border border-primary/15 bg-primary/[0.03]">
                <h3 className="text-sm font-semibold mb-2">Quick Response</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  We typically respond within 2 hours on WhatsApp. For urgent matters, call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       <section className="py-20 md:py-28 bg-background relative overflow-hidden">

      {/* 🌫 Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-5"
        >

          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:-translate-y-1"
            >
              {/* 🔹 Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* 🟢 Icon */}
              <div className="mb-5 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-105 transition">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>

              {/* 🧠 Title */}
              <h3 className="text-[15px] font-semibold text-foreground mb-2">
                {item.title}
              </h3>

              {/* 📝 Description */}
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>

    </Layout>
  );
};

export default Contact;
