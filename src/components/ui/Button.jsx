import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex transform items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100";

  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white",
    secondary:
      "border-2 border-primary-100 bg-white text-primary-600 hover:bg-gray-50",
    outline:
      "border-2 border-gray-300 bg-transparent text-gray-700 hover:border-primary-600 hover:text-primary-600",
    ghost: "bg-transparent text-primary-600 hover:bg-primary-50 shadow-none",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  // Internal link
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {content}
      </Link>
    );
  }

  // Button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
