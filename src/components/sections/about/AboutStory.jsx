import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Image from "../../ui/Image.jsx";
import { aboutData } from "../../../data/aboutData.js";

function AboutStory() {
  const { story } = aboutData;
  return (
    <Section spacing="cinematic">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
            <Image src={story.image} alt="Our Journey" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 h-24 w-1 bg-accent/30" />
            <h2 className="font-heading text-5xl font-medium text-primary tracking-tight">{story.title}</h2>
            {story.description.map((p, i) => (
              <p key={i} className="mt-8 text-xl leading-relaxed text-slate-600 font-light">{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default AboutStory;
