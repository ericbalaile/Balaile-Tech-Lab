import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutTrust() {
  return (
    <Section spacing="cinematic">
      <Container>
        <h2 className="font-heading text-4xl font-medium text-primary text-center mb-16">Our Commitment</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.trust.map((item) => (
            <Card key={item.title} className="p-8 text-center">
              <h3 className="font-heading text-2xl font-medium text-primary mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default AboutTrust;
