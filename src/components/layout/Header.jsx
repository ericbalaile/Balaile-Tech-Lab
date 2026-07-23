import { useState } from "react";
import Container from "../ui/Container.jsx";
import Navigation from "./Navigation.jsx";
import Button from "../ui/Button.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Brand */}
          <div className="text-xl font-bold md:text-2xl">
            Global Work and Travel Ltd
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Navigation links={links} />

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t pb-6 pt-6 md:hidden">
            <Navigation links={links} />
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
