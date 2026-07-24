import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";

function ServicesIntro() {
  return (
    <Section spacing="cinematic">
      <Container className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-medium text-primary">
            Dedicated Advisory & Support
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            At Global Work & Travel Ltd, we provide professional travel solutions grounded in meticulous planning and clear guidance. We understand that seamless logistics and dedicated, personalized care are essential to creating successful journeys, whether for leisure, family gatherings, or corporate engagements.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesIntro;
