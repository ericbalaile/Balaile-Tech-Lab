import { useState } from "react";
import InquiryModal from "../components/ui/InquiryModal.jsx";
import ServiceDetailsModal from "../components/ui/ServiceDetailsModal.jsx";
import ServicesHero from "../components/sections/services/ServicesHero.jsx";
import ServicesIntro from "../components/sections/services/ServicesIntro.jsx";
import ServicesGrid from "../components/sections/services/ServicesGrid.jsx";
import ServicesProcess from "../components/sections/services/ServicesProcess.jsx";
import ServicesCTA from "../components/sections/services/ServicesCTA.jsx";

function Services() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsDetailsOpen(true);
  };

  const handleInquireFromDetails = () => {
    setIsDetailsOpen(false);
    setIsInquiryOpen(true);
  };

  return (
    <>
      {/* 1. Modal State Managers (Owned at Page level) */}
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
      
      {selectedService && (
        <ServiceDetailsModal
          isOpen={isDetailsOpen}
          onClose={() => {
            setIsDetailsOpen(false);
            setSelectedService(null);
          }}
          service={selectedService}
          onInquire={handleInquireFromDetails}
        />
      )}

      {/* 2. Cinematic Storytelling Layout Sections */}
      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid onServiceClick={handleServiceClick} />
      <ServicesProcess />
      <ServicesCTA onOpenInquiry={() => setIsInquiryOpen(true)} />
    </>
  );
}

export default Services;

