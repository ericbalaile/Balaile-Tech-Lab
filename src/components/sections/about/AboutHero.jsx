import Container from "../../ui/Container.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutHero() {
  const { hero } = aboutData;
  console.log("Debug: Hero object:", hero);
  console.log("Debug: Hero image URL:", hero.image);
  
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-gray-200">
      {/* 1. Image Layer */}
      <img
        src={hero.image}
        alt={hero.title}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        onError={(e) => console.error("Debug: Image failed to load:", e.target.src)}
      />
      
      {/* 2. Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-primary/60" />
      
      {/* 3. Content Layer */}
      <div className="relative z-20 flex h-full items-center">
        <Container>
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl font-medium leading-tight tracking-tight md:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg font-light text-white/90 md:text-xl">
              {hero.subtitle}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default AboutHero;
