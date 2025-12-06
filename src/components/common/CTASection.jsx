import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import useScrollAnimation from "@hooks/useScrollAnimation";

const CTASection = () => {
  const animationRef = useScrollAnimation();

  return (
    <section className="via-primary-900 bg-linear-to-br from-gray-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div ref={animationRef} className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Transform Your Business?
          </h2>

          <p className="mb-8 text-lg text-gray-300">
            Let's build something amazing together. Get in touch with our team
            and start your digital transformation journey today.
          </p>

          <Link
            to="/contact"
            className="bg-primary-600 hover:bg-primary-700 inline-flex transform items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            Contact Us Today
            <HiArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
