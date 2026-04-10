import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
// import { FeaturedTestimonial } from "@/components/home/Testimonials";
import { GetStarted } from "@/components/home/CTA";
import { Clients } from "@/components/home/Clients";
import { ScrollingTestimonials } from "@/components/home/Testimonials";
import { FeaturedTestimonial } from "@/components/home/Featured";
import { FAQ } from "@/components/home/FAQ";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Clients />
      <Services />
      <FeaturedTestimonial/>
      <Process />
      <WhyUs />
      <ScrollingTestimonials />
      <FAQ />
      <GetStarted />
    </Layout>
  );
};

export default Index;
