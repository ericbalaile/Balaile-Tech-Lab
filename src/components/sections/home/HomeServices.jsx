import { useState } from "react";
import { Link } from "react-router-dom";
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
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service) => (
            <Card 
              key={service.title} 
              luxury={true}
              className="flex flex-col h-full p-0 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Visual Header */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8 text-center">
                <h3 className="font-heading text-2xl font-medium text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button as={Link} to="/services" variant="premium">
            Explore All Services →
          </Button>
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
