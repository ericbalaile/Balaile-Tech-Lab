import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { contactIntro } from "../../../data/contactData.js";

export default function ContactIntro() {
  return (
    <Section background="light">
      <Container className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {contactIntro.title}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          {contactIntro.description}
        </p>
      </Container>
    </Section>
  );
}
