import PropTypes from "prop-types";

function Card({
  children,
  className = "",
}) {
  const cardStyles =
    "rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg";

  const styles = [
    cardStyles,
    className,
  ].join(" ");

  return (
    <div className={styles}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
