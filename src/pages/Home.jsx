import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";

function Home() {
  const services = [
    {
      title: "Work Abroad",
      description:
        "Discover international employment opportunities and career growth.",
    },
    {
      title: "Study Abroad",
      description:
        "Access global education opportunities and international institutions.",
    },
    {
      title: "Travel Support",
      description:
        "Get professional guidance for your international travel journey.",
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

  return (
    <main>
      <Section>
        <Container>
          <h1>
            Global Opportunities Start Here
          </h1>

          <p>
            Connecting people with international
            work, travel, and career opportunities.
          </p>

          <Button variant="primary">
            Explore Opportunities
          </Button>
        </Container>
      </Section>

      <Section background="light">
        <Container>
          <h2>
            Our Services
          </h2>

          {services.map((service) => (
            <Card key={service.title}>
              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>
            Why Choose Us
          </h2>

          {whyChooseUs.map((item) => (
            <Card key={item.title}>
              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>
            </Card>
          ))}
        </Container>
      </Section>

      <Section background="dark">
        <Container>
          <h2>
            Ready To Start Your Journey?
          </h2>

          <p>
            Explore global opportunities with
            professional guidance.
          </p>

          <Button variant="primary">
            Get Started
          </Button>
        </Container>
      </Section>
    </main>
  );
}

export default Home;
