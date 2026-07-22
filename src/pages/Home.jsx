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

  return (
    <main>
      <Section>
        <Container>
          <div>
            <h1>
              Global Opportunities Start Here
            </h1>

            <p>
              Connecting people with international
              work, travel, and career opportunities.
            </p>

            <div>
              <Button variant="primary">
                Explore Opportunities
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="light">
        <Container>
          <div>
            <h2>
              Our Services
            </h2>

            <div>
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
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Home;
