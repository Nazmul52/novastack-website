import { HiArrowRight, HiSparkles } from "react-icons/hi";
import Button from "@components/ui/Button";
import { Badge, Container, Section } from "@components/ui/UtilityComponents";
import { STATS } from "@/constants";

const Hero = () => {
  return (
    <Section
      background="gradient"
      padding="lg"
      className="relative overflow-hidden pt-20 pb-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary-200 animate-blob absolute -top-40 -right-40 h-80 w-80 rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-secondary-200 animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-accent-200 animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
      </div>

      <Container className="relative">
        <div className="text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8">
            <Badge icon={<HiSparkles className="h-5 w-5" />}>
              Transforming businesses since 2020
            </Badge>
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
            <Button
              to="/contact"
              variant="primary"
              icon={<HiArrowRight className="h-5 w-5" />}
            >
              Get Started
            </Button>
            <Button to="/about" variant="secondary">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in animation-delay-600 mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            {STATS.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-primary-600 text-2xl font-semibold">
                  {stat.value}
                </span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
