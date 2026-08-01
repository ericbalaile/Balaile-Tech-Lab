import Container from "../../ui/Container.jsx";
import { assets } from "../../../config/assets.js";

function ServicesHero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={assets.hero.services}
          alt="Services Hero" 
          fetchPriority="high"
          loading="eager"
          className="h-full w-full object-cover" 
        />
      </div>
      <div className="absolute inset-0 z-10 bg-primary/60" />
      <div className="relative z-20 flex h-full items-center">
        <Container>
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl font-medium leading-tight tracking-tight md:text-7xl">
              Professional Travel Solutions
            </h1>
            <p className="mt-6 text-lg font-light text-white/90 md:text-xl">
              Tailored services for individuals, corporate clients, and families, ensuring reliable and organized journeys worldwide.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default ServicesHero;
