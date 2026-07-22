import Container from "../ui/Container.jsx";
import Navigation from "./Navigation.jsx";
import Button from "../ui/Button.jsx";

function Header() {
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
    <header>
      <Container>
        <div>
          <div>
            Global Work & Travel
          </div>

          <Navigation links={links} />

          <Button variant="primary">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
