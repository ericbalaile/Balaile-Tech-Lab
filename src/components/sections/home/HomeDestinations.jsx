import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { destinations } from "../../../data/destinationsData.js";
import DestinationImageSlider from "./DestinationImageSlider.jsx";

function HomeDestinations() {
  return (
    <Section spacing="cinematic">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium text-primary">Inspirational Destinations</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Discover some of the iconic locations where our travel solutions bring your journey to life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 6).map((dest) => (
            <div
              key={dest.name}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200"
            >
              <DestinationImageSlider images={dest.images} interval={dest.interval} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-heading text-2xl font-medium text-white">{dest.name}</h3>
                <p className="mt-2 text-white/90">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HomeDestinations;
