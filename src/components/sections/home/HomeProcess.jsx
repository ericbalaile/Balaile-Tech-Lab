import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { homeData } from "../../../data/homeData.js";

const Icons = {
  discover: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  design: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  coordinate: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  experience: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 110 4H5.5a2.5 2.5 0 01-2.5-2.5V8.5M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
  ),
};

const iconMap = ['discover', 'design', 'coordinate', 'experience'];

function HomeProcess() {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <div className="mb-20 text-center">
          <h2 className="font-heading text-5xl font-medium text-primary tracking-tight">
            Crafting Seamless Travel Experiences
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From personalised planning and flight bookings to accommodation, visa assistance, and ground transportation, we manage every detail to deliver a smooth, stress-free travel experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {homeData.process.map((step, index) => (
            <Card key={step.title} className="group p-8 flex flex-col items-center text-center" luxury={true}>
              <div className="mb-8 p-4 bg-gray-50 rounded-full transition-all duration-500 group-hover:bg-white group-hover:shadow-sm">
                {Icons[iconMap[index]]}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HomeProcess;
