import PropTypes from "prop-types";
import { useState } from "react";

function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="group rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-md hover:border-[#C5A059]/30"
          >
            <button
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 rounded-xl"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={`font-heading text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#C5A059]' : 'text-[#0F172A]'}`}>
                {faq.q}
              </span>
              <span className={`ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-600 px-6 pb-6 pt-0 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
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
