import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Navigation({ links = [] }) {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block transition duration-300 hover:text-primary ${
                  isActive ? "text-primary font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};

export default Navigation;
