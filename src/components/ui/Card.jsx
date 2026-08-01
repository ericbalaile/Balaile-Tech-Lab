import PropTypes from "prop-types";

function Card({ children, hoverable = true, luxury = false, className = "" }) {
  const baseStyles = "rounded-xl bg-white p-6 shadow-sm overflow-hidden border border-gray-100";
  
  let hoverStyles = "";
  if (hoverable) {
    if (luxury) {
      hoverStyles = "transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-white hover:to-[#FDF6E3] hover:border-accent/30";
    } else {
      hoverStyles = "transition-all duration-300 hover:shadow-xl hover:scale-102";
    }
  }

  const styles = [baseStyles, hoverStyles, className].join(" ");

  return <div className={styles}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hoverable: PropTypes.bool,
  luxury: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
