import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { homeData } from "../../../data/homeData.js";

const Icons = {
  compass: (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 21V12M12 12l3-3m-3 3l-3-3" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 110 4H5.5a2.5 2.5 0 01-2.5-2.5V8.5M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

function HomePhilosophy() {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium text-primary">Travel Philosophy</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our approach is built on professional integrity, personalized service, and a commitment to seamless global experiences.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {homeData.philosophy.map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8">
              <div className="mb-6 p-4 bg-primary/5 rounded-full">{Icons[item.icon]}</div>
              <h3 className="font-heading text-2xl font-medium text-primary mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HomePhilosophy;
