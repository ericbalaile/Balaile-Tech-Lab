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
          <div>
            <h1 className="text-4xl font-bold md:text-6xl">
              Global Opportunities Start Here
            </h1>

            <p className="mt-6 text-lg">
              Connecting people with international
              work, travel, and career opportunities.
            </p>

            <div className="mt-8">
              <Button variant="primary">
                Explore Opportunities
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="light">
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
        </Container>
      </Section>

      <Section>
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

      <Section background="dark">
        <Container>
          <h2 className="text-3xl font-bold">
            Ready To Start Your Journey?
          </h2>

          <p className="mt-4">
            Explore global opportunities with
            professional guidance.
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
