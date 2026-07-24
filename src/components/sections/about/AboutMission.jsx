import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutMission() {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aboutData.mission.map((m) => (
            <Card key={m.title} className="p-8">
              <h3 className="font-heading text-3xl font-medium text-primary mb-4">{m.title}</h3>
              <p className="text-slate-600 leading-relaxed">{m.description}</p>
            </Card>
          ))}
        </div>
        <h2 className="font-heading text-3xl font-medium text-primary text-center mb-12">Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.values.map((v) => (
            <Card key={v.title} className="p-6">
              <h3 className="font-semibold text-lg text-primary">{v.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default AboutMission;
