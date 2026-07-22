import PropTypes from "prop-types";

function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition duration-300";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  const buttonStyles = [
    baseStyles,
    variants[variant],
    className,
  ].join(" ");

  return (
    <button type={type} className={buttonStyles}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
  ]),
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
