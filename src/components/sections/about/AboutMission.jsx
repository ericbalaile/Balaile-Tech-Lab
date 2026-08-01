import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { aboutData } from "../../../data/aboutData.js";

const Icons = {
  mission: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-105 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 21V12M12 12l3-3m-3 3l-3-3" />
    </svg>
  ),
  vision: (
    <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-105 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  integrity: <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-105 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  innovative: <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-105 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-5.636l-.707-.707M12 21v-1M4 19.364l.707-.707M19.364 19.364l-.707-.707M13 10a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  authentic: <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-105 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  reliability: <svg className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-105 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

function AboutMission() {
  return (
    <Section spacing="cinematic" background="light">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {aboutData.mission.map((m) => (
            <Card key={m.title} luxury={true} className="group relative flex flex-col items-center text-center p-10 overflow-hidden">
              <div className="mb-6 p-4 bg-gray-50 rounded-full transition-all duration-500 group-hover:bg-white group-hover:shadow-sm">
                {Icons[m.title.toLowerCase().split(' ')[1] || 'mission']}
              </div>
              <h3 className="font-heading text-4xl font-medium text-primary transition-colors duration-500 group-hover:text-primary/90 mb-6">{m.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light transition-colors duration-500">{m.description}</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-700 ease-out group-hover:w-full"></div>
            </Card>
          ))}
        </div>
        <h2 className="font-heading text-4xl font-medium text-primary text-center mb-16 tracking-tight">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.values.map((v) => (
            <Card key={v.title} luxury={true} className="group relative flex flex-col items-center text-center p-8 overflow-hidden">
              <div className="mb-4 p-3 bg-gray-50 rounded-full transition-all duration-500 group-hover:bg-white group-hover:shadow-sm">
                {Icons[v.title.toLowerCase()]}
              </div>
              <h3 className="font-semibold text-xl text-primary transition-colors duration-500 group-hover:text-primary/90 mb-4">{v.title}</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed font-light transition-colors duration-500">{v.desc}</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-700 ease-out group-hover:w-full"></div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default AboutMission;
