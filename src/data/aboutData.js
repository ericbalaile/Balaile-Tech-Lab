import { assets } from "../config/assets.js";

export const aboutData = {
  hero: {
    title: "Committed to Professional Excellence",
    subtitle: "Creating seamless travel experiences through integrity, reliability, and personalized care.",
    image: assets.hero.about,
  },
  story: {
    title: "Our Journey",
    description: [
      "Global Work & Travel Ltd was founded with a singular purpose: to simplify the complex world of international travel. Based in Tanzania, we have grown into a dedicated team of travel professionals who understand that a successful journey requires more than just a ticket—it requires meticulous preparation, expert guidance, and genuine human support.",
      "We believe that travel is an essential bridge for business, personal growth, and exploration. Our approach is grounded in the understanding that every traveler's needs are unique, and our role is to act as your trusted partner, transforming your travel goals into organized, efficient, and memorable experiences."
    ],
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop",
  },
  mission: [
    { title: "Our Mission", description: "To simplify travel through expert planning, clear guidance, and dedicated support, empowering our clients to reach their destinations with confidence." },
    { title: "Our Vision", description: "To be a trusted partner in travel by providing innovative, client-responsive solutions that set professional standards in the industry." },
  ],
  values: [
    { title: "Integrity", desc: "Honest communication and responsible service delivery." },
    { title: "Innovative", desc: "Keeping abreast of all technological opportunities to ensure the best quality of service." },
    { title: "Authentic", desc: "Genuine communication through our services with our clients." },
    { title: "Reliability", desc: "Dependable support throughout the travel journey." },
  ],
  trust: [
    { title: "Professional Guidance", description: "In-depth advice for complex travel and visa processes." },
    { title: "Personalized Support", description: "Tailored solutions for individuals, families, and corporations." },
    { title: "Seamless Logistics", description: "Expert management of bookings, transfers, and accommodations." },
  ],
  partnersSection: {
    title: "Partners & Global Network",
    description: "Selected partners and global networks will be showcased here as official collaborations are established. The items below serve as a presentation demo.",
    airlinePartners: {
      title: "Airline & Travel Network Showcase (Demo)",
      partners: [
        { name: "Emirates", desc: "Global aviation network example" },
        { name: "Qatar Airways", desc: "Global aviation network example" },
        { name: "Turkish Airlines", desc: "Global aviation network example" },
        { name: "Ethiopian Airlines", desc: "Global aviation network example" },
        { name: "Kenya Airways", desc: "Global aviation network example" }
      ]
    },
    businessPartners: {
      title: "Global Partners Showcase (Demo)",
      partners: [
        { name: "Global Education Network", desc: "Example Partner" },
        { name: "International Travel Solutions", desc: "Demo Network" },
        { name: "Career Mobility Network", desc: "Future Partner Showcase" },
        { name: "Student Support Services", desc: "Example Partner" },
        { name: "Global Accommodation Network", desc: "Demo Network" }
      ]
    }
  },
  cta: {
    title: "Ready to Plan Your Next Journey?",
    description: "Connect with our specialists and begin your smooth, professional travel experience.",
    buttonText: "Inquire Now",
  },
};
