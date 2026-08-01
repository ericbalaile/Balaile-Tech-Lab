import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Card from "../../ui/Card.jsx";
import { aboutData } from "../../../data/aboutData.js";

const Icons = {
  professional: <svg className="w-10 h-10 text-accent mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
  personalized: <svg className="w-10 h-10 text-accent mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  seamless: <svg className="w-10 h-10 text-accent mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>,
};

function AboutTrust() {
  const iconKeys = ['professional', 'personalized', 'seamless'];
  return (
    <Section spacing="cinematic">
      <Container>
        <h2 className="font-heading text-5xl font-medium text-primary text-center mb-20 tracking-tight">Our Commitment</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {aboutData.trust.map((item, index) => (
            <Card key={item.title} luxury={true} className="group relative flex flex-col items-center text-center p-10 overflow-hidden">
              <div className="mb-6 p-4 bg-gray-50 rounded-full transition-all duration-500 group-hover:bg-white group-hover:shadow-sm">
                {Icons[iconKeys[index]]}
              </div>
              <h3 className="font-heading text-3xl font-medium text-primary transition-colors duration-500 group-hover:text-primary/90 mb-6">{item.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light transition-colors duration-500">{item.description}</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-700 ease-out group-hover:w-full"></div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default AboutTrust;
