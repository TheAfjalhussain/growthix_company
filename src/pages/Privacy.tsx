import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Users, Globe } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: `We collect information that you provide directly to us, including:
    
• **Personal Information**: Name, email address, phone number, and company name when you fill out our contact forms or request our services.
• **Communication Data**: Any messages, feedback, or correspondence you send to us through our website, email, or other channels.
• **Technical Data**: IP address, browser type, device information, and browsing patterns when you visit our website.
• **Usage Data**: Information about how you interact with our website, including pages visited, time spent, and navigation paths.`
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use the collected information for the following purposes:

• **Service Delivery**: To provide, maintain, and improve our technology, marketing, and branding services.
• **Communication**: To respond to your inquiries, provide updates about projects, and send relevant information about our services.
• **Analytics**: To understand how visitors use our website and improve user experience.
• **Legal Compliance**: To comply with applicable laws, regulations, and legal processes.
• **Business Operations**: To manage our business relationships and fulfill contractual obligations.`
  },
  {
    icon: Shield,
    title: "Data Protection & Security",
    content: `We implement appropriate technical and organizational measures to protect your personal data:

• **Encryption**: All data transmitted through our website is encrypted using SSL/TLS protocols.
• **Access Controls**: We limit access to personal data to authorized personnel only.
• **Secure Storage**: Personal data is stored on secure servers with appropriate security measures.
• **Regular Audits**: We conduct regular security assessments to identify and address vulnerabilities.
• **Third-Party Security**: We carefully vet all third-party service providers for their security practices.`
  },
  {
    icon: Users,
    title: "Data Sharing & Third Parties",
    content: `We do not sell, trade, or rent your personal information. We may share your data with:

• **Service Providers**: Third-party vendors who assist us in operating our website and delivering services (e.g., hosting providers, analytics services).
• **Legal Requirements**: When required by law or to protect our rights, safety, or property.
• **Business Transfers**: In connection with any merger, acquisition, or sale of company assets.
• **With Your Consent**: When you explicitly authorize us to share your information.`
  },
  {
    icon: Lock,
    title: "Your Rights & Choices",
    content: `You have the following rights regarding your personal data:

• **Access**: Request a copy of the personal data we hold about you.
• **Correction**: Request correction of inaccurate or incomplete data.
• **Deletion**: Request deletion of your personal data (subject to legal requirements).
• **Opt-Out**: Unsubscribe from marketing communications at any time.
• **Data Portability**: Request your data in a structured, machine-readable format.

To exercise these rights, please contact us at hello@growthix.in.`
  },
  {
    icon: Globe,
    title: "Cookies & Tracking",
    content: `Our website uses cookies and similar tracking technologies:

• **Essential Cookies**: Necessary for the website to function properly.
• **Analytics Cookies**: Help us understand how visitors interact with our website.
• **Preference Cookies**: Remember your settings and preferences.

You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.`
  }
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Growthix, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding pt-0">
        <div className="container-narrow mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold pt-2">{section.title}</h2>
                </div>
                <div className="prose prose-sm max-w-none text-muted-foreground pl-16">
                  {section.content.split('\n').map((line, i) => (
                    <p key={i} className="mb-2 whitespace-pre-wrap">
                      {line.includes('**') ? (
                        <span dangerouslySetInnerHTML={{ 
                          __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                        }} />
                      ) : line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-muted/50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Questions About Privacy?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <a 
              href="mailto:hello@growthix.in" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              hello@growthix.in
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
