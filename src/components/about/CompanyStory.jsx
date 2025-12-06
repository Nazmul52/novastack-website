import useScrollAnimation from "@hooks/useScrollAnimation";
import { Section, Container } from "@components/ui/UtilityComponents";

const CompanyStory = () => {
  const [imageRef, imageVisible] = useScrollAnimation();
  const [textRef, textVisible] = useScrollAnimation();

  return (
    <Section background="white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image/Graphic Side */}
          <div
            ref={imageRef}
            className={`scroll-hidden relative ${imageVisible ? "scroll-visible" : ""}`}
          >
            <div className="from-primary-100 to-secondary-100 aspect-square overflow-hidden rounded-2xl bg-linear-to-br">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="h-full w-full object-cover mix-blend-overlay"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="bg-accent-500 absolute -right-6 -bottom-6 h-32 w-32 rounded-xl opacity-20 blur-2xl"></div>
          </div>

          {/* Text Side */}
          <div
            ref={textRef}
            className={`scroll-hidden scroll-delay-2 ${textVisible ? "scroll-visible" : ""}`}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Who We Are
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Founded in 2020, NovaStack Technologies emerged with a vision to
                revolutionize how businesses leverage technology. What started
                as a small team of passionate engineers has grown into a
                full-service technology partner trusted by enterprises
                worldwide.
              </p>
              <p>
                Our journey began when our founders recognized a gap in the
                market: businesses needed more than just software—they needed
                strategic technology partners who understood their unique
                challenges and could deliver innovative, scalable solutions.
              </p>
              <p>
                Today, we're proud to serve over 200 clients across various
                industries, from startups to Fortune 500 companies. Our
                commitment to excellence, innovation, and client success drives
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CompanyStory;
