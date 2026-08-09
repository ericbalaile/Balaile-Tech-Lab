import { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import InquiryModal from "../components/ui/InquiryModal.jsx";
import ServiceDetailsModal from "../components/ui/ServiceDetailsModal.jsx";
import ServicesHero from "../components/sections/services/ServicesHero.jsx";
import ServicesIntro from "../components/sections/services/ServicesIntro.jsx";
import ServicesGrid from "../components/sections/services/ServicesGrid.jsx";
import ServicesProcess from "../components/sections/services/ServicesProcess.jsx";
import ServicesCTA from "../components/sections/services/ServicesCTA.jsx";
import { services } from "../data/servicesData.js";

function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const serviceSlug = searchParams.get("service");
    if (serviceSlug) {
      const service = services.find(
        (s) => s.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === serviceSlug
      );
      if (service) {
        setSelectedService(service);
        setIsDetailsOpen(true);
      }
    }
  }, [searchParams]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsDetailsOpen(true);
  };

  const handleDetailsClose = () => {
    setIsDetailsOpen(false);
    setSelectedService(null);
    setSearchParams({}); // Clear query params

    if (location.state?.from) {
      navigate(location.state.from);
    }
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
          onClose={handleDetailsClose}
          service={selectedService}
          onInquire={handleInquireFromDetails}
        />
      )}

      {/* 2. Cinematic Storytelling Layout Sections */}
      <div className={`transition-opacity duration-300 ${isDetailsOpen ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}>
        <ServicesHero />
        <ServicesIntro />
        <ServicesGrid onServiceClick={handleServiceClick} />
        <ServicesProcess />
        <ServicesCTA onOpenInquiry={() => setIsInquiryOpen(true)} />
      </div>
    </>
  );
}

export default Services;

