import { useState } from "react";
import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import Button from "../../ui/Button.jsx";
import ServiceDetailsModal from "../../ui/ServiceDetailsModal.jsx";
import { services } from "../../../data/servicesData.js";

function HomeServices() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <Section spacing="cinematic">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium text-primary">Travel Solutions</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Professional travel advisory and logistical support tailored to your unique requirements.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col p-8">
              <h3 className="font-heading text-2xl font-medium text-primary mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.description}</p>
              <Button 
                variant="premium" 
                className="w-full"
                onClick={() => setSelectedService(service)}
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Container>

      {selectedService && (
        <ServiceDetailsModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </Section>
  );
}

export default HomeServices;
