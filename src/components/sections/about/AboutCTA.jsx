import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Button from "../../ui/Button.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutCTA({ onOpenInquiry }) {
  return (
    <Section spacing="cinematic">
      <Container className="text-center">
        <h2 className="font-heading text-4xl font-medium text-primary md:text-5xl">
          {aboutData.cta.title}
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          {aboutData.cta.description}
        </p>
        <div className="mt-10">
          <Button variant="premium" onClick={onOpenInquiry} className="px-10 py-4 text-lg">
            {aboutData.cta.buttonText}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
export default AboutCTA;
