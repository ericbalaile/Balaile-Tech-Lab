import { useState } from "react";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import InquiryModal from "../components/ui/InquiryModal.jsx";

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      title: "Travel Management",
      description:
        "Helping individuals and organizations coordinate smooth, efficient, and stress-free travel arrangements.",
      benefit:
        "Save time and reduce travel planning challenges through professional support.",
      cta: "Request Travel Support",
    },
    {
      title: "Holiday & Tours",
      description:
        "Creating memorable travel experiences through carefully planned holiday packages and travel experiences.",
      benefit:
        "Enjoy organized journeys designed around your interests and preferences.",
      cta: "Explore Packages",
    },
    {
      title: "Corporate Events",
      description:
        "Supporting organizations with professional planning and coordination of meetings, conferences, and corporate travel activities.",
      benefit:
        "Reliable event and travel coordination that allows organizations to focus on their goals.",
      cta: "Plan Your Event",
    },
    {
      title: "Visa Assistance",
      description:
        "Providing guidance and support throughout the visa application preparation process.",
      benefit:
        "Receive professional assistance to better understand requirements and prepare necessary documentation.",
      cta: "Request Visa Support",
    },
    {
      title: "Airport Transfers",
      description:
        "Providing convenient and reliable transportation solutions between airports and destinations.",
      benefit:
        "Enjoy smooth arrival and departure experiences with organized transfer services.",
      cta: "Arrange Transfer",
    },
    {
      title: "Hotel Reservations",
      description:
        "Helping clients find and arrange suitable accommodation options based on their travel needs.",
      benefit:
        "Access convenient accommodation planning with professional support.",
      cta: "Book Accommodation",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section>
        <Container>
          <h1 className="text-4xl font-bold md:text-6xl">
            Our Travel Solutions
          </h1>

          <p className="mt-6 text-lg">
            Professional travel services designed around individual, family,
            business, and organizational needs.
          </p>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section background="light">
        <Container>
          <h2 className="text-3xl font-bold">Complete Travel Solutions</h2>

          <p className="mt-4 text-lg">
            Global Work and Travel Ltd provides reliable travel support designed
            to make planning simple, organized, and stress-free.
          </p>
        </Container>
      </Section>

      {/* Services Cards */}
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-4">{service.description}</p>

                <h4 className="mt-6 font-semibold">Customer Benefit</h4>
                <p className="mt-2">{service.benefit}</p>
                <div className="mt-6">
                  <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                    {service.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <Container>
          <h2 className="text-3xl font-bold">
            Ready To Plan Your Next Journey?
          </h2>

          <p className="mt-4">
            Connect with Global Work and Travel Ltd for professional guidance
            and travel support.
          </p>

          <div className="mt-8">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Inquire Now
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Services;
