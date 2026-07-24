import { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import FeatureList from "./FeatureList.jsx";
import FaqAccordion from "./FaqAccordion.jsx";

function ServiceDetailsModal({ isOpen, onClose, service, onInquire }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const { details } = service;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-3xl"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Hero Placeholder */}
          <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 italic">
            [High-quality image required: {service.title.toLowerCase().replace(/\s+/g, '-')}.jpg]
          </div>

          <p className="text-lg text-gray-600">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{details.overview}</p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Process</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{details.process}</p>
              </section>
            </div>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Included</h3>
                <FeatureList items={details.included} />
              </section>
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Benefits</h3>
                <FeatureList items={details.benefits} />
              </section>
            </div>
          </div>

          {details.notes && (
            <section className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-gray-900 mb-2">Important Notes</h3>
              <p className="text-gray-600 text-sm">{details.notes}</p>
            </section>
          )}

          {details.faqs && details.faqs.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <FaqAccordion faqs={details.faqs} />
            </section>
          )}
        </div>

        {/* Sticky Footer */}
        <div className="p-6 border-t bg-gray-50">
          <Button variant="primary" className="w-full py-4 text-lg" onClick={onInquire}>
            Inquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}

ServiceDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  service: PropTypes.object,
  onInquire: PropTypes.func.isRequired,
};

export default ServiceDetailsModal;
