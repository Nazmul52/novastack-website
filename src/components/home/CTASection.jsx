import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const CTASection = () => {
  return (
    <section className="from-primary-600 to-secondary-600 bg-linear-to-r py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Ready to Transform Your Business?
        </h2>
        <p className="text-primary-100 mx-auto mb-10 max-w-2xl text-xl">
          Let's build something amazing together. Get in touch with our team and
          start your digital transformation journey today.
        </p>
        <Link
          to="/contact"
          className="text-primary-600 inline-flex transform items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold shadow-xl transition-all duration-200 hover:scale-105 hover:bg-gray-50"
        >
          Contact Us Today
          <HiArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
