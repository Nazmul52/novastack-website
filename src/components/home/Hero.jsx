import { Link } from "react-router-dom";
import { HiArrowRight, HiSparkles } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="from-primary-50 to-secondary-50 relative overflow-hidden bg-linear-to-br via-white pt-20 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary-200 animate-blob absolute -top-40 -right-40 h-80 w-80 rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-secondary-200 animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-accent-200 animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
            <HiSparkles className="text-primary-600 h-5 w-5" />
            <span className="text-sm font-medium text-gray-700">
              Transforming businesses since 2020
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Innovation
            <br />
            <span className="text-primary-600">
              Through Next-Gen Technology
            </span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mb-10 max-w-3xl text-lg text-gray-600 sm:text-xl">
            Transform your business with cutting-edge solutions built for the
            future of enterprise technology. We deliver innovation that drives
            real results.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 inline-flex transform items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Get Started
              <HiArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="border-primary-100 text-primary-600 inline-flex transform items-center justify-center gap-2 rounded-lg border-2 bg-white px-8 py-4 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in animation-delay-600 mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-2xl font-semibold">
                500+
              </span>
              <span>Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-2xl font-semibold">
                98%
              </span>
              <span>Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-2xl font-semibold">
                50+
              </span>
              <span>Team Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
