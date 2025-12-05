import useScrollAnimation from "@/hooks/useScrollAnimation";

const PageHeader = ({ title, subtitle }) => {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section className="from-primary-50 to-secondary-50 relative bg-linear-to-br via-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`scroll-hidden ${headerVisible ? "scroll-visible" : ""}`}
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
