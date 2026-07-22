import PropTypes from "prop-types";

function Navigation({
  links = [],
}) {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.path}
              className="transition duration-300 hover:text-primary"
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
