import PropTypes from "prop-types";
import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../../../data/servicesData.js";

function ServicesGrid({ onServiceClick }) {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              onClick={() => onServiceClick(service)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

ServicesGrid.propTypes = {
  onServiceClick: PropTypes.func.isRequired,
};

export default ServicesGrid;
