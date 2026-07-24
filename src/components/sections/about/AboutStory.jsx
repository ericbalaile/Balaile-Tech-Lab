import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutStory() {
  const { story } = aboutData;
  return (
    <Section spacing="cinematic">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-4xl font-medium text-primary">{story.title}</h2>
            {story.description.map((p, i) => (
              <p key={i} className="mt-6 text-lg leading-relaxed text-slate-600">{p}</p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img src={story.image} alt="Our Journey" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default AboutStory;
