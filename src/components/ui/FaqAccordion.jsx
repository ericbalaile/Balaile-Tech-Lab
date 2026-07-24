import PropTypes from "prop-types";
import { useState } from "react";

function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-2 mt-2">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-2">
          <button
            className="w-full text-left font-medium text-gray-900 focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.q}
          </button>
          {openIndex === index && <p className="text-sm text-gray-600 mt-1">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}

FaqAccordion.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      q: PropTypes.string.isRequired,
      a: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FaqAccordion;
