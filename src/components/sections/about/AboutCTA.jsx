import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Button from "../../ui/Button.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutCTA({ onOpenInquiry }) {
  return (
    <Section spacing="cinematic" background="accent-light">
      <Container className="text-center">
        <h2 className="font-heading text-5xl font-medium text-primary md:text-6xl tracking-tight">
          {aboutData.cta.title}
        </h2>
        <p className="mt-8 text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-light">
          {aboutData.cta.description}
        </p>
        <div className="mt-12">
          <Button variant="premium" onClick={onOpenInquiry} className="px-12 py-5 text-xl font-medium tracking-wide">
            {aboutData.cta.buttonText}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
export default AboutCTA;
