import Container from "../../ui/Container.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutHero() {
  const { hero } = aboutData;
  
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-slate-900">
      {/* Image Layer */}
      <img
        src={hero.image}
        alt={hero.title}
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-80"
      />
      
      {/* Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/80 to-primary/40" />
      
      {/* Content Layer */}
      <div className="relative z-20 flex h-full items-center">
        <Container>
          <div className="max-w-4xl text-white">
            <h1 className="font-heading text-6xl font-medium leading-[1.1] tracking-tight md:text-8xl">
              {hero.title}
            </h1>
            <p className="mt-8 text-xl font-light text-white/90 md:text-2xl max-w-2xl leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default AboutHero;
