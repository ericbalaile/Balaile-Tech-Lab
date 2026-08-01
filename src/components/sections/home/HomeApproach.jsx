import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { homeData } from "../../../data/homeData.js";

function HomeApproach() {
  const { approach } = homeData;

  return (
    <Section spacing="cinematic">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image Side */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg motion-safe:transition-shadow motion-safe:duration-700 motion-safe:ease-in-out motion-safe:hover:shadow-2xl">
            <img
              src={approach.image}
              alt="Travel consultation"
              className="absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-in-out motion-safe:hover:scale-105"
            />
          </div>

          {/* Text Side */}
          <div>
            <h2 className="font-heading text-4xl font-medium text-primary">
              {approach.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {approach.description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HomeApproach;
