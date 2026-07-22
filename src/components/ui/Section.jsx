import PropTypes from "prop-types";

function Section({
  children,
  background = "default",
  className = "",
}) {
  const baseStyles =
    "py-16 md:py-20";

  const backgrounds = {
    default: "",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
  };

  const sectionStyles = [
    baseStyles,
    backgrounds[background],
    className,
  ].join(" ");

  return (
    <section className={sectionStyles}>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf([
    "default",
    "light",
    "dark",
  ]),
  className: PropTypes.string,
};

export default Section;
