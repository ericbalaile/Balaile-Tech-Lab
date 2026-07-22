/*
========================================
Global Work and Travel Ltd
Container UI Component
========================================
*/

const containerSizes = {
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  "2xl": "var(--container-2xl)",
};

function Container({ children, size = "xl" }) {
  const maxWidth = containerSizes[size] || containerSizes.xl;

  return (
    <div
      style={{
        width: "100%",
        maxWidth,
        margin: "0 auto",
        paddingLeft: "var(--space-md)",
        paddingRight: "var(--space-md)",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
