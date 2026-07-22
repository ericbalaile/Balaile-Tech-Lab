import { NavLink } from "react-router-dom";

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
    "Corporate Events",
    "Visa Assistance",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        {/* Company */}
        <div>
          <h2 className="text-xl font-bold">Global Work and Travel Ltd</h2>

          <p className="mt-4 text-sm text-gray-300">
            Professional travel solutions designed around individual and
            organizational needs, helping clients plan and manage reliable
            travel experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.path} className="transition hover:text-white">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold">Services</h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Email: globaltravel.tz@gmail.com</li>

            <li>Phone: +255 756 470 311</li>

            <li>Phone: +255 744 636 063</li>

            <li>Website: www.gwtlltd.co.tz</li>

            <li>Location: Victoria Palace, Kijitonyama, Dar es Salaam</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 px-6 py-6 text-center text-sm text-gray-400">
        © 2026 Global Work and Travel Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
