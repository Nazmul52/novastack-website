import useScrollAnimation from "@hooks/useScrollAnimation";
import { Section, Container } from "@components/ui/UtilityComponents";

const PageHeader = ({ title, subtitle }) => {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <Section background="gradient">
      <Container className="text-center">
        <div
          ref={headerRef}
          className={`scroll-hidden ${headerVisible ? "scroll-visible" : ""}`}
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default PageHeader;
