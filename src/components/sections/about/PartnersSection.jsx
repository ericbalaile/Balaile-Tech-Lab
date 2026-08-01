import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import { aboutData } from "../../../data/aboutData.js";

function PartnersSection() {
  const { partnersSection } = aboutData;

  const renderPartnerGroup = (group) => (
    <div className="mb-20">
      <h3 className="font-heading text-2xl font-medium text-primary text-center mb-10">{group.title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {group.partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg border border-slate-100 shadow-sm text-center transition-all duration-300 hover:shadow-md hover:border-accent/30"
          >
            <div className="w-16 h-16 mb-4 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 border border-slate-200">
               {/* Logo Placeholder - Representing premium brand identity */}
               <span className="text-[10px] uppercase font-bold tracking-widest">Logo</span>
            </div>
            <h4 className="font-heading text-lg font-medium text-primary mb-1">{partner.name}</h4>
            <p className="text-xs text-slate-400">{partner.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Section spacing="cinematic" background="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-medium text-primary mb-6">{partnersSection.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">{partnersSection.description}</p>
          <p className="text-xs text-slate-400 italic tracking-wide">Partner showcase examples for presentation purposes. Official partners will be updated upon confirmation.</p>
        </div>
        
        {renderPartnerGroup(partnersSection.airlinePartners)}
        {renderPartnerGroup(partnersSection.businessPartners)}
      </Container>
    </Section>
  );
}

export default PartnersSection;
