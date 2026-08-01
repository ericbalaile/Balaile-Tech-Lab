import PropTypes from "prop-types";

function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  onClick,
  as: Component = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
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

  if (Component !== "button") {
    return (
      <Component className={buttonStyles} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <button type={type} disabled={disabled} className={buttonStyles} onClick={onClick} {...props}>
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
  as: PropTypes.elementType,
};

export default Button;
