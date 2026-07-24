import PropTypes from "prop-types";

function FeatureList({ items }) {
  return (
    <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

FeatureList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureList;
