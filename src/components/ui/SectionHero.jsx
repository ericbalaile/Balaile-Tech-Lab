import PropTypes from "prop-types";

function SectionHero({ title, summary }) {
  return (
    <div className="mb-6">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500 italic">
        [Placeholder Hero Image]
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {summary && <p className="text-gray-600 mt-2">{summary}</p>}
    </div>
  );
}

SectionHero.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
};

export default SectionHero;
