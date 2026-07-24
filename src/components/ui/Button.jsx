import PropTypes from "prop-types";

function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    premium:
      "border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300",
  };

  const buttonStyles = [
    baseStyles,
    variants[variant] || variants.primary,
    className,
  ].join(" ");

  return (
    <button type={type} disabled={disabled} className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "premium"]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
