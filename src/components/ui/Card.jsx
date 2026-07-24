import PropTypes from "prop-types";

function Card({ children, hoverable = true, className = "" }) {
  const cardStyles = [
    "rounded-xl bg-white p-6 shadow-sm overflow-hidden",
    hoverable && "transition-all duration-300 hover:shadow-xl hover:scale-102",
  ]
    .filter(Boolean)
    .join(" ");

  const styles = [cardStyles, className].join(" ");

  return <div className={styles}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hoverable: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
