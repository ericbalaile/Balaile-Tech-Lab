import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";
import Navigation from "./Navigation.jsx";
import Button from "../ui/Button.jsx";
import logo from "../../assets/Brand/logo/company-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full z-[400] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 text-primary shadow-sm backdrop-blur-md border-b"
          : "bg-transparent text-white"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Global Work & Travel Ltd" 
              className={`h-10 md:h-14 w-auto transition-all duration-500 ease-out ${isScrolled ? "scale-90 -rotate-2" : "scale-100 rotate-0"}`} 
            />
            <span className="hidden text-xl font-medium tracking-tight md:block">
              Global Work & Travel Ltd.
            </span>
          </Link>

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
          <div
            className={`border-t pb-6 pt-6 md:hidden ${
              isScrolled ? "bg-white/90 text-primary" : "bg-primary/90 text-white"
            }`}
          >
            <Navigation links={links} />
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
