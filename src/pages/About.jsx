import { useState } from "react";
import InquiryModal from "../components/ui/InquiryModal.jsx";
import AboutHero from "../components/sections/about/AboutHero.jsx";
import AboutStory from "../components/sections/about/AboutStory.jsx";
import AboutMission from "../components/sections/about/AboutMission.jsx";
import AboutTrust from "../components/sections/about/AboutTrust.jsx";
import PartnersSection from "../components/sections/about/PartnersSection.jsx";
import AboutCTA from "../components/sections/about/AboutCTA.jsx";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutTrust />
      <PartnersSection />
      <AboutCTA onOpenInquiry={() => setIsModalOpen(true)} />
    </>
  );
}

export default About;
