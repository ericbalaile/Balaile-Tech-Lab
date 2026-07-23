import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";

function Home() {
  const companyHighlights = [
    {
      title: "Personalized Travel Support",
      description:
        "Travel solutions customized around your goals, preferences, schedules, and requirements.",
    },
    {
      title: "Complete Travel Solutions",
      description:
        "Professional support for holidays, business travel, visa assistance, and complete travel planning.",
    },
    {
      title: "Professional Consultation",
      description:
        "Expert guidance to help you make informed travel decisions with confidence.",
    },
  ];

  const services = [
    {
      title: "Travel Management",
      description:
        "Helping individuals and organizations coordinate smooth, efficient, and stress-free travel arrangements.",
    },
    {
      title: "Holiday & Tours",
      description:
        "Creating memorable travel experiences through carefully planned holiday packages and journeys.",
    },
    {
      title: "Visa Assistance",
      description:
        "Providing guidance and support throughout the visa preparation process.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Professional Guidance",
      description: "Experienced support throughout your international journey.",
    },
    {
      title: "Global Opportunities",
      description: "Access international work and travel pathways.",
    },
    {
      title: "Reliable Support",
      description: "Continuous assistance before and after placement.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Focused on delivering reliable support and positive travel experiences.",
    },
  ];

  const applicationProcess = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Discuss your goals, travel plans, and available opportunities with our professional team.",
    },
    {
      step: "02",
      title: "Application Support",
      description:
        "Receive guidance with documentation, preparation, and the required application steps.",
    },
    {
      step: "03",
      title: "Travel Preparation",
      description:
        "Get professional support before departure to ensure a smooth travel experience.",
    },
    {
      step: "04",
      title: "Start Your Journey",
      description:
        "Begin your international experience with confidence and continuous support.",
    },
  ];

  const faqs = [
    {
      question: "How do I start my travel journey?",
      answer:
        "Contact our team for consultation and professional guidance based on your goals.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "Yes. We provide support and guidance throughout the visa preparation process.",
    },
    {
      question: "Which travel services do you offer?",
      answer:
        "We support travel management, holidays, tours, visa assistance, and travel planning.",
    },
    {
      question: "Do you support international opportunities?",
      answer:
        "Yes. We connect individuals with international work and travel opportunities.",
    },
  ];

  const trustedPartners = [
    {
      title: "Travel Planning Guidance",
      description:
        "Helping clients plan organized journeys with clear, professional support.",
    },
    {
      title: "International Opportunity Guidance",
      description:
        "Providing guidance for clients exploring international travel, learning, or work-related opportunities.",
    },
    {
      title: "Accommodation Planning",
      description:
        "Helping travelers prepare for suitable and organized stays.",
    },
    {
      title: "Corporate Travel Support",
      description:
        "Supporting business and organizational travel requirements.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section>
        <Container>
          <h1 className="text-4xl font-bold md:text-6xl">
            Professional Travel Solutions For Every Journey
          </h1>

          <p className="mt-6 text-lg">
            Plan holidays, business travel, visa support, airport transfers,
            hotel reservations, and international travel opportunities with
            professional guidance.
          </p>

          <div className="mt-8">
            <Button variant="primary">Explore Services</Button>
          </div>
        </Container>
      </Section>
      {/* Company Introduction */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold">Your Trusted Travel Partner</h2>

          <p className="mt-4 text-lg">
            Global Work and Travel Ltd provides professional travel solutions
            designed around individual and organizational needs.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {companyHighlights.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">Our Services</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-4">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline">Explore All Services</Button>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section background="light">
        <Container>
          <h2 className="mb-8 text-3xl font-bold">Why Choose Us</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Process */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">How It Works</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {applicationProcess.map((item) => (
              <Card key={item.step}>
                <p className="text-2xl font-bold">{item.step}</p>

                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Preview */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>

                <p className="mt-4">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trusted Partners */}
      <Section background="light">
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            Support Across Your Travel Journey
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {trustedPartners.map((partner) => (
              <Card key={partner.title}>
                <h3 className="text-xl font-semibold">{partner.title}</h3>

                <p className="mt-4">{partner.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <Container>
          <h2 className="text-3xl font-bold">Ready To Start Your Journey?</h2>

          <p className="mt-4">
            Plan your next journey with professional travel guidance.
          </p>

          <div className="mt-8">
            <Button variant="primary">Get Started</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Home;
