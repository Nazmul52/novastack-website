// Container component for consistent max-width and padding
export const Container = ({ children, className = "", size = "default" }) => {
  const sizes = {
    sm: "max-w-3xl",
    default: "max-w-7xl",
    lg: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

// Badge component for labels and tags
export const Badge = ({
  children,
  icon,
  variant = "default",
  size = "default",
  className = "",
}) => {
  const baseStyles = "inline-flex items-center gap-2 rounded-full font-medium";

  const variants = {
    default: "bg-white text-gray-700 shadow-md",
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span className={styles}>
      {icon && icon}
      {children}
    </span>
  );
};

// Section wrapper for consistent spacing
export const Section = ({
  children,
  background = "white",
  padding = "default",
  className = "",
}) => {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-linear-to-br from-primary-50 to-secondary-50 via-white",
    dark: "bg-gray-900 text-white",
  };

  const paddings = {
    sm: "py-12",
    default: "py-20",
    lg: "py-32",
    none: "",
  };

  return (
    <section
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      {children}
    </section>
  );
};
