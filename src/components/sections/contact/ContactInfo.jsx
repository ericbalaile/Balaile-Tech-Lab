import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import { companyData } from "../../../data/companyData.js";

export default function ContactInfo({ noSection = false }) {
  const content = (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* Editorial Title Block - Fixed Width for Desktop */}
      <div className="w-full lg:w-5/12 shrink-0">
        <SectionHeading title="Get in Touch" className="mb-8" />
        <p className="text-lg text-gray-600 leading-relaxed">
          We're here to answer your questions and help you explore the best travel solutions.
          Whether you're planning your first journey or need further guidance, our team is ready to assist.
        </p>
      </div>
      
      {/* Editorial Content Block - Flexible Width */}
      <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        {/* Contact Details */}
        <div className="border-l border-gray-200 pl-8 flex flex-col">
          <h3 className="font-heading text-2xl text-primary mb-6">Concierge Support</h3>
          <div className="space-y-6">
            <div>
              <span className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Email</span>
              <a href={`mailto:${companyData.email}`} className="text-lg text-primary hover:text-primary-dark transition-colors break-words">{companyData.email}</a>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Office Phone</span>
              <a href={`tel:${companyData.phone.replace(/\s/g, '')}`} className="text-lg text-primary hover:text-primary-dark transition-colors break-words">{companyData.phone}</a>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="border-l border-gray-200 pl-8 flex flex-col">
          <h3 className="font-heading text-2xl text-primary mb-6">Visit Our Office</h3>
          <div className="space-y-6">
            <div>
              <span className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Hours</span>
              <p className="text-lg text-gray-700">Monday – Friday</p>
              <p className="text-lg text-primary font-medium">{companyData.businessHours.mondayToFriday}</p>
            </div>
            <div className="pt-6 border-t border-gray-100">
              <span className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">24/7 Support</span>
              <p className="text-lg text-primary font-medium">{companyData.phone}</p>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed italic">
                Our online channels remain available for enquiries outside office hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return noSection ? content : (
    <Section background="light">
      <Container size="xl">
        {content}
      </Container>
    </Section>
  );
}
