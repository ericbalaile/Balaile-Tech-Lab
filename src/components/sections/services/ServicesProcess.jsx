import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { servicesProcess } from "../../../data/servicesData.js";

function ServicesProcess() {
  return (
    <Section spacing="cinematic">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium text-primary">Our Planning Process</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A precise, customer-centric journey designed to transform complex travel logistics into seamless, reliable experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesProcess.map((step, index) => (
            <div key={step.title} className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100 group hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl font-heading font-medium text-accent/50 mb-4 transition-colors duration-300 group-hover:text-accent">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading text-2xl font-medium text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ServicesProcess;
