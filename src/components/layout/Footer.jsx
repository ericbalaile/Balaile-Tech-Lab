import { NavLink } from "react-router-dom";
import Container from "../ui/Container.jsx";

function Footer() {
  const quickLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const services = [
    "Travel Management",
    "Holiday & Tours",
    "Corporate Travel",
    "Visa Assistance",
    "Airport Transfers",
    "Hotel Reservations",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-xl font-bold">Global Work and Travel Ltd</h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Professional travel solutions designed around individual and
              organizational needs, helping clients plan and manage reliable
              travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Services</h3>

            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:globaltravel.tz@gmail.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Email: globaltravel.tz@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+255744636063"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Phone: +255 744 636 063
                </a>
              </li>

              <li>
                Location:
                <br />
                Victoria Palace,
                <br />
                Kijitonyama,
                <br />
                Dar es Salaam
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-700">
        <Container>
          <div className="py-6 text-center text-sm text-gray-400">
            © 2026 Global Work and Travel Ltd. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
