import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import FeatureList from "./FeatureList.jsx";
import FaqAccordion from "./FaqAccordion.jsx";

function ServiceDetailsModal({ isOpen, onClose, service, onInquire }) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const gallery = service?.gallery || [];
  const coverImage = service?.image;

  // Preload next image and update index
  const nextSlide = useCallback(() => {
    if (gallery.length <= 1) return;
    
    const nextIndex = (currentGalleryIndex + 1) % gallery.length;
    const nextImageUrl = gallery[nextIndex];
    
    const img = new Image();
    img.src = nextImageUrl;
    img.onload = () => {
      setCurrentGalleryIndex(nextIndex);
    };
  }, [currentGalleryIndex, gallery]);

  // Autoplay Effect
  useEffect(() => {
    if (!isOpen || gallery.length <= 1) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isOpen, gallery.length, nextSlide]);

  // Reset index on open
  useEffect(() => {
    if (isOpen) setCurrentGalleryIndex(0);
  }, [isOpen]);

  // Fallback to cover if gallery is missing
  const activeImage = gallery.length > 0 ? gallery[currentGalleryIndex] : coverImage;

  if (!isOpen || !service) return null;

  const { details } = service;

  return (
    <div
      className={`fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-8 transition-all duration-300 ease-out ${isOpen ? 'bg-black/60 backdrop-blur-sm opacity-100' : 'bg-transparent opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Left Column - Gallery */}
        <div className="hidden md:flex w-2/5 relative overflow-hidden bg-gray-900">
          <img 
            key={activeImage}
            src={activeImage} 
            alt={service.title} 
            className="w-full h-full object-cover transition-opacity duration-1000"
            onError={(e) => { e.target.src = coverImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
          
          <div className="absolute top-8 left-8">
            <span className="bg-[#C5A059] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              Gallery
            </span>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex-grow flex flex-col w-full md:w-3/5 overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 flex justify-between items-center border-b border-gray-100">
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#0F172A]">{service.title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
              <svg className="w-6 h-6 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 md:space-y-10">
            <p className="text-lg text-slate-700 leading-relaxed">{service.description}</p>
            
            <section>
                <h3 className="font-heading text-xl font-medium text-[#0F172A] mb-4 uppercase tracking-wider text-sm">Overview</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{details.overview}</p>
            </section>

            <section>
                <h3 className="font-heading text-xl font-medium text-[#0F172A] mb-4 uppercase tracking-wider text-sm">Process</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{details.process}</p>
            </section>

            <section>
              <h3 className="font-heading text-xl font-medium text-[#0F172A] mb-4 uppercase tracking-wider text-sm">What's Included</h3>
              <FeatureList items={details.included} />
            </section>

            <section>
              <h3 className="font-heading text-xl font-medium text-[#0F172A] mb-4 uppercase tracking-wider text-sm">Why Choose Us</h3>
              <div className="grid grid-cols-1 gap-3">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-lg text-sm text-slate-600">
                    <span className="text-[#C5A059]">✦</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </section>
            
            {details.notes && (
                <section>
                    <h3 className="font-heading text-xl font-medium text-[#0F172A] mb-4 uppercase tracking-wider text-sm">Important Notes</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{details.notes}</p>
                </section>
            )}

            {details.faqs && details.faqs.length > 0 && (
              <section>
                <h3 className="font-heading text-xl font-medium text-[#0F172A] mb-4 uppercase tracking-wider text-sm">Frequently Asked Questions</h3>
                <FaqAccordion faqs={details.faqs} />
              </section>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 md:p-8 border-t border-gray-100 flex gap-4">
            <Button variant="premium" className="flex-grow py-3 font-heading tracking-wider uppercase" onClick={onInquire}>
              Inquire Now
            </Button>
            <Button variant="outline" className="px-6 py-3" onClick={onClose}>
              Close
            </Button>
          </div>
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
