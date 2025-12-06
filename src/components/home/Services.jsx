import useScrollAnimation from "@hooks/useScrollAnimation";
import SectionHeader from "@components/ui/SectionHeader";
import Card from "@components/ui/Card";
import { Container, Section } from "@components/ui/UtilityComponents";
import { SERVICES } from "@/constants";

const Services = () => {
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <Section background="white">
      <Container>
        <SectionHeader
          title="What We Offer"
          subtitle="Building tomorrow's solutions, today. Comprehensive services designed to elevate your business."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`scroll-hidden scroll-delay-${index + 1} ${gridVisible ? "scroll-visible" : ""}`}
              >
                <Card hover>
                  <Card.Icon>
                    <Icon className="h-10 w-10" />
                  </Card.Icon>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Description>{service.description}</Card.Description>

                  {/* Hover effect decoration */}
                  <div className="from-primary-100 absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-linear-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
