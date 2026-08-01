import Section from "../../ui/Section.jsx";
import Container from "../../ui/Container.jsx";

export default function ContactMap() {
  return (
    <div className="w-full">
      <div className="h-64 md:h-96 w-full rounded-lg overflow-hidden bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.924604138729!2d39.25087687501775!3d-6.7790307662948335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4fff13285c9f%3A0x9bfd94c7a6f36260!2sGlobal%20Work%20and%20Travel%20Ltd!5e0!3m2!1sen!2stz!4v1785213931649!5m2!1sen!2stz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title="Global Work and Travel Ltd Location"
        ></iframe>
      </div>
      <div className="mt-8 p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
        <h3 className="font-heading text-2xl text-primary mb-4">Planning a Visit?</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          We welcome scheduled consultations at our office to discuss your travel plans, study opportunities, visa guidance, and personalised travel solutions.
        </p>
        <p className="text-gray-600 leading-relaxed">
          To ensure you receive dedicated assistance, we recommend scheduling an appointment before your visit.
        </p>
      </div>
    </div>
  );
}
