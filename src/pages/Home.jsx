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

  const statistics = [
    {
      value: "10+",
      label: "Countries",
    },
    {
      value: "500+",
      label: "Opportunities",
    },
    {
      value: "1000+",
      label: "Successful Travelers",
    },
    {
      value: "24/7",
      label: "Support",
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
      description:
        "Experienced support throughout your international journey.",
    },
    {
      title: "Global Opportunities",
      description:
        "Access international work and travel pathways.",
    },
    {
      title: "Reliable Support",
      description:
        "Continuous assistance before and after placement.",
    },
    {
      title: "Career Growth",
      description:
        "Opportunities designed for long-term success.",
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

  const testimonials = [
    {
      quote:
        "The guidance and support made my international travel journey simple and stress-free.",
      name: "Sarah M.",
      role: "International Traveler",
    },
    {
      quote:
        "Professional assistance throughout the process gave me confidence from application to departure.",
      name: "John K.",
      role: "Student Traveler",
    },
    {
      quote:
        "Reliable service and continuous support helped me achieve my travel goals.",
      name: "Anna P.",
      role: "Business Traveler",
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
      title: "International Travel Networks",
      description:
        "Building connections that support smooth and reliable travel experiences.",
    },
    {
      title: "Education & Career Partners",
      description:
        "Supporting opportunities for learning, career growth, and international experiences.",
    },
    {
      title: "Accommodation Partners",
      description:
        "Helping travelers prepare for comfortable and organized stays.",
    },
    {
      title: "Corporate & Organization Partners",
      description:
        "Supporting professional travel requirements and business needs.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section>
        <Container>
          <h1 className="text-4xl font-bold md:text-6xl">
            Global Opportunities Start Here
          </h1>

          <p className="mt-6 text-lg">
            Connecting people with international work, travel, and career
            opportunities.
          </p>

          <div className="mt-8">
            <Button variant="primary">
              Explore Opportunities
            </Button>
          </div>
        </Container>
      </Section>

      {/* Company Introduction */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold">
            Your Trusted Travel Partner
          </h2>

          <p className="mt-4 text-lg">
            Global Work and Travel Ltd provides professional travel solutions
            designed around individual and organizational needs.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {companyHighlights.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Statistics */}
      <Section background="light">
        <Container>
          <div className="grid gap-6 md:grid-cols-4">
            {statistics.map((statistic) => (
              <Card key={statistic.label}>
                <h3 className="text-3xl font-bold">
                  {statistic.value}
                </h3>

                <p className="mt-2">
                  {statistic.label}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            Our Services
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline">
              Explore All Services
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section background="light">
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            Why Choose Us
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Process */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            How It Works
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {applicationProcess.map((item) => (
              <Card key={item.step}>
                <p className="text-2xl font-bold">
                  {item.step}
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="light">
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            Success Stories
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <p className="italic">
                  "{testimonial.quote}"
                </p>

                <h3 className="mt-6 text-xl font-semibold">
                  {testimonial.name}
                </h3>

                <p className="mt-2">
                  {testimonial.role}
                </p>
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
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <p className="mt-4">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trusted Partners */}
      <Section background="light">
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            Trusted Partners
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {trustedPartners.map((partner) => (
              <Card key={partner.title}>
                <h3 className="text-xl font-semibold">
                  {partner.title}
                </h3>

                <p className="mt-4">
                  {partner.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <Container>
          <h2 className="text-3xl font-bold">
            Ready To Start Your Journey?
          </h2>

          <p className="mt-4">
            Explore global opportunities with professional guidance.
          </p>

          <div className="mt-8">
            <Button variant="primary">
              Get Started
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Home;