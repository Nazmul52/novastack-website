import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "gradient",
}) => {
  const backgroundClass =
    variant === "gradient"
      ? "py-20 bg-linear-to-r from-primary-600 to-secondary-600"
      : "py-20 bg-gray-50";

  const titleClass =
    variant === "gradient"
      ? "mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
      : "mb-6 text-3xl font-bold text-gray-900 sm:text-4xl";

  const descriptionClass =
    variant === "gradient"
      ? "mx-auto mb-10 max-w-2xl text-xl text-primary-100"
      : "mx-auto mb-8 max-w-2xl text-lg text-gray-600";

  return (
    <section className={backgroundClass}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={`${titleClass} animate-fade-in-up`}>{title}</h2>
        <p
          className={`${descriptionClass} animate-fade-in-up animation-delay-200`}
        >
          {description}
        </p>
        <div className="animate-fade-in-up animation-delay-400 flex flex-col justify-center gap-4 sm:flex-row">
          {primaryButton && (
            <Link
              to={primaryButton.link}
              className="bg-primary-600 hover:bg-primary-700 inline-flex transform items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              {primaryButton.text}
              <HiArrowRight className="h-5 w-5" />
            </Link>
          )}
          {secondaryButton && (
            <Link
              to={secondaryButton.link}
              className="border-primary-100 text-primary-600 inline-flex transform items-center justify-center gap-2 rounded-lg border-2 bg-white px-8 py-4 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
