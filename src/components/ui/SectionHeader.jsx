import useScrollAnimation from "@hooks/useScrollAnimation";

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  maxWidth = "2xl",
  className = "",
}) => {
  const [headerRef, headerVisible] = useScrollAnimation();

  const alignmentClass = centered ? "text-center" : "text-left";
  const maxWidthClass = centered
    ? `mx-auto max-w-${maxWidth}`
    : `max-w-${maxWidth}`;

  return (
    <div
      ref={headerRef}
      className={`scroll-hidden mb-16 ${alignmentClass} ${className} ${headerVisible ? "scroll-visible" : ""}`}
    >
      <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 ${maxWidthClass}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
