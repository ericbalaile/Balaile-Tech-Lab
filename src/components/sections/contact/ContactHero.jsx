import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { contactHero } from "../../../data/contactData.js";
import { assets } from "../../../config/assets.js";

export default function ContactHero() {
  return (
    <Section className="relative min-h-[50vh] md:h-[60vh] w-full pt-20 pb-16 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={assets.hero.contact}
          alt="Contact Hero"
          fetchPriority="high"
          loading="eager"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold leading-tight break-words">
            {contactHero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-white/90">
            {contactHero.subtitle}
          </p>
        </div>
      </Container>
    </Section>
  );
}
