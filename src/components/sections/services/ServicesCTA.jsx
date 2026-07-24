import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Button from "../../ui/Button.jsx";

function ServicesCTA({ onOpenInquiry }) {
  return (
    <Section spacing="cinematic" background="light">
      <Container className="text-center">
        <h2 className="font-heading text-4xl font-medium text-primary md:text-5xl">
          Begin Planning Your Journey
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Connect with our travel advisors to design custom itineraries, secure reliable transfers, and ensure visa compliance.
        </p>
        <div className="mt-10">
          <Button variant="premium" onClick={onOpenInquiry} className="px-10 py-4 text-lg">
            Inquire Now
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesCTA;
