import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutJourney() {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <h2 className="font-heading text-4xl font-medium text-primary text-center mb-16">Your Travel Journey</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutData.journey.map((step, index) => (
            <div key={step.title} className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl font-heading font-medium text-accent/50 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading text-2xl font-medium text-primary mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default AboutJourney;
