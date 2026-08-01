import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { servicesProcess } from "../../../data/servicesData.js";

const Icons = {
  consultation: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  planning: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  preparation: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  journey: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 110 4H5.5a2.5 2.5 0 01-2.5-2.5V8.5M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
  ),
};

function ServicesProcess() {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium text-primary">Our Planning Process</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A precise, customer-centric journey designed to transform complex travel logistics into seamless, reliable experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesProcess.map((step, index) => (
            <Card
              key={step.title}
              luxury={true}
              className="group flex flex-col items-center text-center p-8 transition-all duration-700 ease-out"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-full transition-all duration-500 group-hover:bg-white group-hover:shadow-sm">
                {Icons[step.icon]}
              </div>
              <div className="text-sm font-heading font-medium text-accent mb-4 tracking-widest uppercase">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading text-2xl font-medium text-primary mb-4 transition-colors duration-500 group-hover:text-primary/90">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed transition-colors duration-500">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ServicesProcess;
