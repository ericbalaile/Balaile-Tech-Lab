import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Button from "../../ui/Button.jsx";
import { contactCTA } from "../../../data/contactData.js";

export default function ContactCTA({ onOpenInquiry }) {
  return (
    <Section background="dark">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-white">{contactCTA.title}</h2>
        <p className="mt-4 text-lg text-white/90">{contactCTA.description}</p>
        <div className="mt-8">
          <Button variant="primary" onClick={onOpenInquiry}>
            {contactCTA.buttonLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
