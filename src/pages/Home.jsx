import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";

function Home() {
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
    </main>
  );
}

export default Home;
