import PropTypes from "prop-types";

function Navigation({
  links = [],
}) {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.path}
              className="block transition duration-300 hover:text-primary"
            >
              {link.label}
            </a>
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
    })
  ),
};

export default Navigation;
