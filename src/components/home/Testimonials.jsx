import { HiStar } from "react-icons/hi";
import useScrollAnimation from "@hooks/useScrollAnimation";
import Card from "@components/ui/Card";
import SectionHeader from "@components/ui/SectionHeader";
import { Section, Container } from "@components/ui/UtilityComponents";
import { TESTIMONIALS } from "@/constants";

const Testimonials = () => {
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <Section background="gradient">
      <Container>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`scroll-hidden scroll-delay-${index + 1} ${gridVisible ? "scroll-visible" : ""}`}
            >
              <Card>
                {/* Rating stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-6 leading-relaxed text-gray-700">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="bg-primary-100 h-14 w-14 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
