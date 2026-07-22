/*
========================================
Global Work and Travel Ltd
Container UI Component
========================================
*/

import PropTypes from "prop-types";

const containerSizes = {
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  "2xl": "var(--container-2xl)",
};

function Container({
  children,
  size = "xl",
  className = "",
}) {
  const maxWidth = containerSizes[size] || containerSizes.xl;

  return (
    <div
      className={`mx-auto w-full ${className}`}
      style={{
        maxWidth,
        paddingLeft: "var(--space-md)",
        paddingRight: "var(--space-md)",
      }}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
  ]),
  className: PropTypes.string,
};

export default Container;