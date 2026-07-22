import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";

function About() {
  const approach = [
    {
      title: "Personalized Travel Support",
      description:
        "Travel solutions customized around client goals, preferences, schedules, and requirements.",
    },
    {
      title: "Professional Consultation",
      description:
        "Helping clients make informed travel decisions through clear guidance and professional support.",
    },
    {
      title: "Reliable Planning",
      description:
        "Organized travel support designed to create smooth and stress-free experiences.",
    },
  ];

  const coreValues = [
    {
      title: "Integrity",
      description:
        "Building trust through honest communication and responsible service delivery.",
    },
    {
      title: "Innovation",
      description:
        "Finding better ways to improve travel experiences through modern solutions.",
    },
    {
      title: "Authenticity",
      description:
        "Providing genuine support focused on real customer needs and experiences.",
    },
  ];

  const reasons = [
    {
      title: "Personalized Travel Support",
      description:
        "Solutions designed around individual and organizational travel goals.",
    },
    {
      title: "Complete Travel Solutions",
      description:
        "Support for different travel needs including holidays, business travel, and corporate requirements.",
    },
    {
      title: "Professional Consultation",
      description:
        "Guidance that helps clients make confident travel decisions.",
    },
    {
      title: "Reliable Customer Experience",
      description:
        "Clear communication, organized planning, and dependable support throughout the journey.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section>
        <Container>
          <h1 className="text-4xl font-bold md:text-6xl">
            Your Trusted Travel Partner
          </h1>

          <p className="mt-6 text-lg">
            Global Work and Travel Ltd provides professional travel solutions
            designed around individual and organizational needs.
          </p>
        </Container>
      </Section>

      {/* Company Overview */}
      <Section background="light">
        <Container>
          <h2 className="text-3xl font-bold">Who We Are</h2>

          <p className="mt-6 text-lg">
            Global Work and Travel Ltd is a professional travel solutions
            provider helping individuals, families, business professionals, and
            organizations plan and manage reliable travel experiences.
          </p>

          <p className="mt-4 text-lg">
            The company focuses on making travel planning simple, organized, and
            stress-free through professional support and customer-focused
            services.
          </p>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">Our Approach</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {approach.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Vision and Mission */}
      <Section background="light">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold">Our Vision</h2>

              <p className="mt-4">
                To become the most trusted and innovative client responsive
                travel consultants.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold">Our Mission</h2>

              <p className="mt-4">
                To provide professional travel solutions that simplify travel
                planning and deliver reliable customer-focused experiences.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">Our Core Values</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {coreValues.map((value) => (
              <Card key={value.title}>
                <h3 className="text-xl font-semibold">{value.title}</h3>

                <p className="mt-4">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section background="light">
        <Container>
          <h2 className="mb-8 text-3xl font-bold">
            Why Choose Global Work and Travel Ltd?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <Card key={reason.title}>
                <h3 className="text-xl font-semibold">{reason.title}</h3>

                <p className="mt-4">{reason.description}</p>
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
            Connect with Global Work and Travel Ltd for professional travel
            guidance and support.
          </p>

          <div className="mt-8">
            <Button variant="primary">Contact Us</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default About;
