import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function MobileMenuOverlay({ isOpen, onClose, links }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[600] flex flex-col bg-primary text-white md:hidden">
      <div className="flex items-center justify-between p-6">
        <span className="text-xl font-bold tracking-tight text-accent">Menu</span>
        <button
          type="button"
          onClick={onClose}
          className="text-3xl text-white"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      <nav className="flex flex-col items-center justify-center flex-grow p-6">
        <ul className="flex flex-col gap-8 text-center">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `text-3xl font-heading transition duration-300 ${
                    isActive ? 'text-accent' : 'text-white hover:text-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

MobileMenuOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MobileMenuOverlay;
