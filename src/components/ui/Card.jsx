import PropTypes from "prop-types";

function Card({ children, hoverable = true, className = "" }) {
  const cardStyles = [
    "rounded-xl bg-white p-6 shadow-sm",
    hoverable && "transition-shadow duration-300 hover:shadow-md",
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
