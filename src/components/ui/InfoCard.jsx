import PropTypes from "prop-types";

function InfoCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="text-gray-600 text-sm">{children}</div>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoCard;
