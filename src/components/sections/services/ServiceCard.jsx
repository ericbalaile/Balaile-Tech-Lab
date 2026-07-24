import PropTypes from "prop-types";
import Card from "../../ui/Card.jsx";
import Button from "../../ui/Button.jsx";

function ServiceCard({ service, onClick }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden p-0 bg-white shadow-sm border border-slate-100 group">
      {/* Visual Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-heading text-2xl font-medium text-primary mb-3">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>
        <div className="border-t border-slate-50 pt-5 mt-auto">
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
