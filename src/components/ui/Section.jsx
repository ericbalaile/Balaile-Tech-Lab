import PropTypes from "prop-types";

function Section({ children, background = "default", spacing = "default", className = "" }) {
  const baseStyles = "transition-colors duration-300";

  const spacingStyles = {
    default: "py-16 md:py-20",
    cinematic: "py-24 md:py-[--section-xl]",
  };

  const backgrounds = {
    default: "",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
  };

  const sectionStyles = [
    baseStyles,
    spacingStyles[spacing] || spacingStyles.default,
    backgrounds[background] || backgrounds.default,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <section className={sectionStyles}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf(["default", "light", "dark"]),
  spacing: PropTypes.oneOf(["default", "cinematic"]),
  className: PropTypes.string,
};

export default Section;
