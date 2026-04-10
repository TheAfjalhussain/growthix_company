import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CreditCard, Handshake, Ban, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: `By accessing and using the Growthix website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

• These terms apply to all visitors, users, and clients of Growthix.
• If you do not agree to these terms, please do not use our services.
• We reserve the right to modify these terms at any time with notice on our website.
• Continued use of our services after changes constitutes acceptance of the modified terms.`
  },
  {
    icon: Handshake,
    title: "Services & Deliverables",
    content: `Growthix provides technology development, marketing, branding, and growth consulting services:

• **Scope of Work**: All projects are governed by individual agreements that define specific deliverables, timelines, and terms.
• **Project Changes**: Any changes to the agreed scope require written approval and may affect pricing and timelines.
• **Quality Standards**: We commit to delivering high-quality work that meets industry standards and agreed specifications.
• **Client Responsibilities**: Clients are responsible for providing timely feedback, content, and approvals as required.
• **Third-Party Services**: Some services may involve third-party tools or platforms with their own terms of service.`
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: `Our payment policies ensure clarity and fairness for both parties:

• **Pricing**: All project pricing is outlined in individual proposals or agreements.
• **Payment Schedule**: Payments are typically structured as milestones: deposit, mid-project, and final payment.
• **Currency**: All prices are quoted in Indian Rupees (INR) unless otherwise specified.
• **Invoicing**: Invoices are issued according to the agreed payment schedule.
• **Late Payments**: Overdue payments may incur additional charges and may result in project delays.
• **Refunds**: Refund policies are determined on a case-by-case basis as outlined in individual agreements.`
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content: `Clear ownership and usage rights protect both parties:

• **Client Materials**: You retain ownership of all content, data, and materials you provide to us.
• **Deliverables**: Upon full payment, you receive ownership of custom work created specifically for your project.
• **Growthix Property**: We retain ownership of our proprietary tools, frameworks, templates, and pre-existing intellectual property.
• **License Grant**: You grant us a license to use your materials solely for project completion.
• **Portfolio Rights**: Unless otherwise agreed, we may showcase completed work in our portfolio.
• **Third-Party Content**: Any licensed third-party content remains subject to its original licensing terms.`
  },
  {
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: `Our liability is limited to protect both parties:

• **Service Disclaimer**: Our services are provided "as is" without warranties of any kind, express or implied.
• **Results**: While we strive for excellence, we cannot guarantee specific business outcomes or results.
• **Maximum Liability**: Our total liability shall not exceed the amount paid by you for the specific services in question.
• **Indirect Damages**: We are not liable for any indirect, incidental, or consequential damages.
• **Third-Party Actions**: We are not responsible for actions of third parties, including hosting providers or payment processors.
• **Client Decisions**: Business decisions made based on our recommendations are your responsibility.`
  },
  {
    icon: Ban,
    title: "Prohibited Uses",
    content: `The following uses of our services are strictly prohibited:

• Using our services for any illegal or unauthorized purpose.
• Violating any applicable local, state, national, or international law.
• Infringing on intellectual property rights of others.
• Uploading or distributing malicious code, viruses, or harmful content.
• Attempting to gain unauthorized access to our systems or other users' data.
• Using our deliverables for purposes that violate these terms or applicable laws.
• Misrepresenting your identity or affiliation with any person or organization.`
  },
  {
    icon: RefreshCw,
    title: "Termination & Cancellation",
    content: `Terms for ending our business relationship:

• **Client Termination**: You may terminate services by providing written notice as specified in your agreement.
• **Growthix Termination**: We may terminate services for breach of terms, non-payment, or other valid reasons.
• **Effect of Termination**: Upon termination, you must pay for all work completed up to the termination date.
• **Deliverables**: Completed deliverables will be transferred upon full payment of outstanding amounts.
• **Refunds**: Refund of any prepaid amounts will be determined based on work completed and agreement terms.
• **Survival**: Certain provisions (IP rights, liability limitations) survive termination.`
  },
  {
    icon: Mail,
    title: "Contact & Dispute Resolution",
    content: `How to reach us and resolve any issues:

• **Communication**: For any questions about these terms, contact us at hello@growthix.in.
• **Dispute Resolution**: We encourage amicable resolution of any disputes through direct communication.
• **Governing Law**: These terms are governed by the laws of India.
• **Jurisdiction**: Any legal disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
• **Arbitration**: Disputes may be resolved through arbitration as agreed by both parties.`
  }
];

const Terms = () => {
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
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These terms govern your use of Growthix services and establish the legal relationship between you and Growthix.
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

          {/* Agreement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-muted/50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Questions About Our Terms?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please don't hesitate to contact us.
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

export default Terms;
