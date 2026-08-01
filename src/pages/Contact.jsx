import { useState } from "react";
import InquiryModal from "../components/ui/InquiryModal.jsx";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import {
  ContactHero,
  ContactIntro,
  ContactInfo,
  ContactForm,
  ContactMap,
} from "../components/sections/contact";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <ContactHero />
      <ContactIntro />
      
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm noSection />
            <ContactMap />
          </div>
          <div className="mt-12">
            <ContactInfo noSection />
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
