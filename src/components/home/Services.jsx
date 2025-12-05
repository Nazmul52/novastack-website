import {
  HiCloud,
  HiLightningBolt,
  HiShieldCheck,
  HiCog,
  HiOfficeBuilding,
  HiCode,
} from "react-icons/hi";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Services = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const services = [
    {
      icon: <HiCloud className="h-10 w-10" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure designed to grow with your business. Deploy faster, scale smarter.",
    },
    {
      icon: <HiLightningBolt className="h-10 w-10" />,
      title: "AI & Machine Learning",
      description:
        "Harness the power of AI to automate processes, gain insights, and drive innovation.",
    },
    {
      icon: <HiShieldCheck className="h-10 w-10" />,
      title: "Cyber Security",
      description:
        "Enterprise-grade security solutions to protect your data and maintain customer trust.",
    },
    {
      icon: <HiCog className="h-10 w-10" />,
      title: "DevOps & Automation",
      description:
        "Streamline your development pipeline with cutting-edge automation and CI/CD practices.",
    },
    {
      icon: <HiOfficeBuilding className="h-10 w-10" />,
      title: "Enterprise Solutions",
      description:
        "Comprehensive enterprise software tailored to your unique business requirements.",
    },
    {
      icon: <HiCode className="h-10 w-10" />,
      title: "Custom Development",
      description:
        "Bespoke software development from concept to deployment, built exactly to your specs.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`scroll-hidden mb-16 text-center ${headerVisible ? "scroll-visible" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            What We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Building tomorrow's solutions, today. Comprehensive services
            designed to elevate your business.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-hidden scroll-delay-${index + 1} ${gridVisible ? "scroll-visible" : ""}`}
            >
              <div className="group hover:border-primary-300 relative transform rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Icon */}
                <div className="from-primary-100 to-secondary-100 text-primary-600 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Hover effect decoration */}
                <div className="from-primary-100 absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-linear-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
