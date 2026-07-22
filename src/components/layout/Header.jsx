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
    <header className="border-b">
      <Container>

        <div className="flex items-center justify-between py-6">

          <div className="text-xl font-bold">
            Global Work & Travel
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Navigation links={links} />

            <Button variant="primary">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>

        </div>


        {isOpen && (
          <div className="md:hidden pb-6">

            <Navigation links={links} />

            <div className="mt-6">
              <Button variant="primary">
                Get Started
              </Button>
            </div>

          </div>
        )}

      </Container>
    </header>
  );
}

export default Header;
