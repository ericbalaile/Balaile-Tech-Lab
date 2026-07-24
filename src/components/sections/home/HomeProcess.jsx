import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { homeData } from "../../../data/homeData.js";

function HomeProcess() {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium text-primary">Your Travel Journey</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A clear, professional process designed to ensure every aspect of your travel is managed with precision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {homeData.process.map((step, index) => (
            <Card key={step.title} className="p-8">
              <div className="mb-8 font-heading text-6xl font-medium text-accent/20">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading text-2xl font-medium text-primary mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HomeProcess;
