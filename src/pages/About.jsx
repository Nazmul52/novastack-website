import PageHeader from "@/components/about/PageHeader";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Team from "@/components/about/Team";
import CTASection from "@/components/common/CTASection";

const About = () => {
  return (
    <div>
      <PageHeader
        title="About NovaStack"
        subtitle="Innovating technology, empowering the future"
      />
      <CompanyStory />
      <MissionVision />
      <Team />
      <CTASection
        variant="light"
        title="Want to Work With Us?"
        description="Let's discuss how we can help transform your business with innovative technology solutions."
        primaryButton={{
          text: "Get In Touch",
          link: "/contact",
        }}
        secondaryButton={{
          text: "View Our Services",
          link: "/",
        }}
      />
    </div>
  );
};

export default About;
