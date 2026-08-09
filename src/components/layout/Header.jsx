import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";
import Navigation from "./Navigation.jsx";
import MobileMenuOverlay from "./MobileMenuOverlay.jsx";
import logo from "../../assets/Brand/logo/company-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(1);
  const brandRef = useRef(null);
  const [fullWidth, setFullWidth] = useState(250); // Fallback width

  useEffect(() => {
    if (brandRef.current) {
      setFullWidth(brandRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate 1 (visible) to 0 (hidden) over 200px
      const progress = Math.max(0, Math.min(1, 1 - scrollY / 200));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/95 text-primary shadow-sm backdrop-blur-md border-b"
            : "bg-transparent text-white"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-5">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <img 
                src={logo} 
                alt="Global Work & Travel Ltd" 
                className={`w-auto transition-all duration-500 ease-out`}
                style={{ height: `${40 + (1 - scrollProgress) * 8}px` }}
              />
              <div
                className="hidden md:block text-2xl font-medium tracking-tight overflow-hidden whitespace-nowrap"
                style={{
                  fontFamily: "'Allura', cursive",
                  width: `${scrollProgress * fullWidth}px`,
                  opacity: scrollProgress,
                  transition: 'width 0.1s linear, opacity 0.1s linear',
                  wordSpacing: '0.1em'
                }}
              >
                <span ref={brandRef} className="inline-block whitespace-nowrap">Global Work & Travel Ltd.</span>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <Navigation links={links} />
            </div>

            <button
              type="button"
              className="text-3xl md:hidden z-[601]"
              onClick={() => setIsOpen(true)}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </div>
        </Container>
      </header>

      <MobileMenuOverlay 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        links={links} 
      />
    </>
  );
}

export default Header;
