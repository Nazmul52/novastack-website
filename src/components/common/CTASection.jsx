import { HiArrowRight } from "react-icons/hi";
import useScrollAnimation from "@hooks/useScrollAnimation";
import Button from "@components/ui/Button";

const CTASection = ({
  variant = "gradient",
  title = "Ready to Transform Your Business?",
  description = "Let's build something amazing together. Get in touch with our team and start your digital transformation journey today.",
  primaryButton = {
    text: "Contact Us Today",
    link: "/contact",
  },
  secondaryButton = null,
}) => {
  const animationRef = useScrollAnimation();

  // Background variants
  const backgroundStyles = {
    gradient: "via-primary-900 bg-linear-to-br from-gray-900 to-gray-900",
    light: "bg-gray-50",
    dark: "bg-gray-900",
  };

  // Text color variants
  const textColorStyles = {
    gradient: "text-white",
    light: "text-gray-900",
    dark: "text-white",
  };

  const descriptionColorStyles = {
    gradient: "text-gray-300",
    light: "text-gray-600",
    dark: "text-gray-300",
  };

  return (
    <section className={`py-20 ${backgroundStyles[variant]}`}>
      <div className="container mx-auto px-4">
        <div ref={animationRef} className="mx-auto max-w-3xl text-center">
          <h2
            className={`mb-6 text-4xl font-bold md:text-5xl ${textColorStyles[variant]}`}
          >
            {title}
          </h2>

          <p className={`mb-8 text-lg ${descriptionColorStyles[variant]}`}>
            {description}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              to={primaryButton.link}
              variant="primary"
              icon={<HiArrowRight className="h-5 w-5" />}
            >
              {primaryButton.text}
            </Button>

            {secondaryButton && (
              <Button to={secondaryButton.link} variant="secondary">
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
