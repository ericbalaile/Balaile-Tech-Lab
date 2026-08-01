import PropTypes from "prop-types";
import Card from "../../ui/Card.jsx";
import Button from "../../ui/Button.jsx";
import Image from "../../ui/Image.jsx";

function ServiceCard({ service, onClick }) {
  return (
    <Card luxury={true} className="flex flex-col h-full overflow-hidden p-0 group cursor-pointer" onClick={onClick}>
      {/* Visual Header */}
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/5 transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-8 text-center">
        <h3 className="font-heading text-2xl font-medium text-primary mb-3">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-relaxed flex-grow mb-6">
          {service.description}
        </p>
        <div className="mt-auto pt-6 border-t border-slate-50">
          <Button variant="premium" className="w-full" onClick={onClick}>
            {service.cta || "Learn More"}
          </Button>
        </div>
      </div>
    </Card>
  );
}


ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cta: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ServiceCard;
