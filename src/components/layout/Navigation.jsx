import PropTypes from "prop-types";

function Navigation({
  links = [],
}) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.path}>
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
