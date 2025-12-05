import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/common/CTASection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <CTASection
        variant="gradient"
        title="Ready to Transform Your Business?"
        description="Let's build something amazing together. Get in touch with our team and start your digital transformation journey today."
        primaryButton={{
          text: "Contact Us Today",
          link: "/contact",
        }}
      />
    </div>
  );
};

export default Home;
