import PropTypes from "prop-types";

function FeatureList({ items }) {
  return (
    <ul className="space-y-4 mt-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-slate-600">
          <span className="mr-3 mt-0.5 text-[#C5A059]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

FeatureList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureList;
