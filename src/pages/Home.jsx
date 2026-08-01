import { useState } from "react";
import InquiryModal from "../components/ui/InquiryModal.jsx";
import HomeHero from "../components/sections/home/HomeHero.jsx";
import HomePhilosophy from "../components/sections/home/HomePhilosophy.jsx";
import HomeServices from "../components/sections/home/HomeServices.jsx";
import HomeApproach from "../components/sections/home/HomeApproach.jsx";
import HomeDestinations from "../components/sections/home/HomeDestinations.jsx";
import HomeProcess from "../components/sections/home/HomeProcess.jsx";
import HomeCTA from "../components/sections/home/HomeCTA.jsx";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <HomeHero onOpenInquiry={() => setIsModalOpen(true)} />
      <HomePhilosophy />
      <HomeServices />
      <HomeApproach />
      <HomeDestinations />
      <HomeProcess />
      <HomeCTA onOpenInquiry={() => setIsModalOpen(true)} />
    </>
  );
}

export default Home;
