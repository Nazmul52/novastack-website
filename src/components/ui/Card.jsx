const Card = ({
  children,
  variant = "default",
  hover = true,
  className = "",
  ...props
}) => {
  const baseStyles = "relative overflow-hidden rounded-2xl bg-white p-8";

  const variants = {
    default: "shadow-lg border border-gray-200",
    elevated: "shadow-xl",
    outline: "border-2 border-gray-200",
    gradient: "bg-linear-to-br from-primary-50 to-secondary-50",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    : "";

  const styles = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`;

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};

// Card sub-components for better composition
Card.Icon = ({ children, gradient = true, className = "" }) => {
  const baseStyles =
    "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl";
  const gradientStyles = gradient
    ? "bg-linear-to-br from-primary-100 to-secondary-100 text-primary-600"
    : "bg-gray-100 text-gray-600";

  return (
    <div className={`${baseStyles} ${gradientStyles} ${className}`}>
      {children}
    </div>
  );
};

Card.Title = ({ children, className = "" }) => (
  <h3 className={`mb-3 text-xl font-bold text-gray-900 ${className}`}>
    {children}
  </h3>
);

Card.Description = ({ children, className = "" }) => (
  <p className={`leading-relaxed text-gray-600 ${className}`}>{children}</p>
);

Card.Footer = ({ children, className = "" }) => (
  <div className={`mt-6 ${className}`}>{children}</div>
);

export default Card;
