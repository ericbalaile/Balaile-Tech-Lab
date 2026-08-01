import { assets } from "../config/assets.js";

export const services = [
  {
    title: "Flight Reservations",
    description: "Professional assistance with domestic and international flight bookings.",
    benefit: "Efficiency, fare options, and expert reservation support.",
    cta: "Request Flight Support",
    image: assets.services.flightReservations.cover,
    gallery: assets.services.flightReservations.gallery,
    details: {
      overview: "Professional assistance for domestic and international air travel. We manage the complexity of finding the right fare options, routes, and schedule guidance for business and leisure travel.",
      included: ["Domestic & international bookings", "One-way, return & multi-city itineraries", "Fare comparison support", "Schedule guidance"],
      targetAudience: "Business and leisure travelers.",
      process: "Consultation -> Needs Assessment -> Fare Curation -> Reservation -> Finalization.",
      benefits: ["Fare options support", "Route and schedule optimization", "Booking management", "Travel documentation guidance"],
      notes: "Early booking is recommended to secure preferred routes and fares.",
      faqs: [
        { q: "Can you assist with multi-city bookings?", a: "Yes, we specialize in multi-city itinerary planning." },
        { q: "Do you handle changes or rebooking?", a: "Yes, we assist with managing reservation changes within airline guidelines." }
      ]
    }
  },
  {
    title: "Holiday & Tours",
    description: "Curated leisure travel experiences designed for you.",
    benefit: "Stress-free planning and personalized itineraries.",
    cta: "Explore Packages",
    image: assets.services.holidaysTours.cover,
    gallery: assets.services.holidaysTours.gallery,
    details: {
      overview: "Curated leisure experiences tailored to your interests. We handle all logistics—from transportation to accommodation—to ensure a seamless vacation.",
      included: ["Personalized package design", "Guided tour options", "Destination research", "Concierge services"],
      targetAudience: "Families, couples, and leisure travelers seeking unique experiences.",
      process: "Preference Discussion -> Package Curation -> Reservation -> Support & Monitoring.",
      benefits: ["Stress-free planning", "Access to unique destinations", "Personalized itineraries"],
      notes: "Packages can be customized based on budget and duration.",
      faqs: [
        { q: "Are tours private or group-based?", a: "We offer both options depending on your preference." },
        { q: "Can you accommodate dietary restrictions?", a: "Yes, please inform us during the planning phase." }
      ]
    }
  },
  {
    title: "Corporate Events",
    description: "Professional coordination for business gatherings and retreats.",
    benefit: "Seamless delivery and professional standards.",
    cta: "Plan Your Event",
    image: assets.services.corporateEvents.cover,
    gallery: assets.services.corporateEvents.gallery,
    details: {
      overview: "Professional coordination for corporate gatherings, meetings, and conferences. We manage logistics to ensure successful professional events.",
      included: ["Venue sourcing", "Logistics coordination", "Budget management", "On-site support"],
      targetAudience: "Organizations planning conferences, offsites, or business retreats.",
      process: "Scope Definition -> Planning -> Execution -> Post-event review.",
      benefits: ["Enhanced productivity", "Seamless delivery", "Professional standards"],
      notes: "Early planning ensures better venue availability and pricing.",
      faqs: [
        { q: "Do you handle international corporate events?", a: "Yes, we manage events globally." },
        { q: "Can you provide AV equipment support?", a: "We coordinate with local vendors for your technical requirements." }
      ]
    }
  },
  {
    title: "Visa Assistance",
    description: "Professional advisory guidance for visa applications.",
    benefit: "Clarity on requirements and reduced application errors.",
    cta: "Request Visa Support",
    image: assets.services.visaAssistance.cover,
    gallery: assets.services.visaAssistance.gallery,
    details: {
      overview: "Professional advisory guidance for visa applications. We help you understand requirements, prepare documentation, and navigate the application process.",
      included: ["Requirement clarification", "Document checklist", "Application review guidance"],
      targetAudience: "Travelers requiring visa support for international business or leisure.",
      process: "Requirement Assessment -> Document Review -> Preparation Guidance -> Submission.",
      benefits: ["Clarity on complex processes", "Reduced application errors"],
      notes: "We provide guidance based on official public information. Application outcomes remain at the discretion of the issuing authority.",
      faqs: [
        { q: "Does your service guarantee visa approval?", a: "No, application outcomes are determined solely by the embassy or consulate." },
        { q: "Do you submit the application for me?", a: "Our service is advisory; we provide guidance and support for your preparation." }
      ]
    }
  },
  {
    title: "Car Hire",
    description: "Flexible solutions: Self Drive or Chauffeur Services.",
    benefit: "Personalized freedom or professional convenience.",
    cta: "Book Your Ride",
    image: assets.services.carHire.cover,
    gallery: assets.services.carHire.gallery,
    details: {
      overview: "Flexible car hire solutions designed for business and leisure travellers. Choose the freedom of self-drive or enjoy a professional chauffeur service for a comfortable and reliable journey.",
      included: ["Self Drive: Flexible rental periods, well-maintained vehicles, personal travel convenience.", "Chauffeur Services: Professional drivers, airport, hotel and city transport, business and executive travel."],
      targetAudience: "All travelers prioritizing comfort, reliability, and convenience.",
      process: "Requirement Selection -> Booking -> Confirmation -> Journey Execution.",
      benefits: ["Flexibility", "Reliability", "Comfort", "Professionalism"],
      notes: "Please provide travel details at least 24 hours in advance.",
      faqs: [
        { q: "What if my flight is delayed for chauffeur services?", a: "We track your flight and adjust the pickup time accordingly." }
      ]
    }
  },
  {
    title: "Hotel Reservations",
    description: "Personalized accommodation planning and booking.",
    benefit: "Secure bookings and location convenience.",
    cta: "Book Accommodation",
    image: assets.services.accommodation.cover,
    gallery: assets.services.accommodation.gallery,
    details: {
      overview: "Personalized accommodation planning. We identify and book suitable hotels based on your specific requirements, location, and budget.",
      included: ["Accommodation search", "Booking management", "Amenity verification"],
      targetAudience: "Individuals and corporate clients looking for reliable lodging.",
      process: "Need Identification -> Option Presentation -> Booking -> Confirmation.",
      benefits: ["Comfort", "Secure bookings", "Location convenience"],
      notes: "We coordinate with hotel partners to secure your preferences where possible.",
      faqs: [
        { q: "Can you accommodate late check-ins?", a: "Yes, we will communicate your arrival time to the property." }
      ]
    }
  }
];

export const servicesProcess = [
  {
    title: "Initial Consultation",
    icon: "consultation",
    description: "Connect with our specialists to define your unique travel requirements, goals, and logistics constraints."
  },
  {
    title: "Tailored Planning",
    icon: "planning",
    description: "Our experts design a custom travel solution, curating accommodations, ground transport, and specific itineraries tailored to you."
  },
  {
    title: "Meticulous Preparation",
    icon: "preparation",
    description: "We handle the details—providing guidance on document checklist requirements and finalizing travel ticketing logistics."
  },
  {
    title: "Journey Support",
    icon: "journey",
    description: "Travel with confidence knowing your ground transport, stays, and professional support networks are fully coordinated."
  }
];
