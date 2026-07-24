import Container from "../../ui/Container.jsx";
import Button from "../../ui/Button.jsx";

function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Placeholder structure */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Travel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 md:bg-primary/50" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <Container>
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl font-medium leading-tight tracking-tight md:text-7xl">
              Professional Travel Solutions For Every Journey
            </h1>
            <p className="mt-6 text-lg font-light text-white/90 md:text-xl">
              Plan holidays, business travel, visa support, and international
              opportunities with professional, personalized guidance.
            </p>
            <div className="mt-10 flex gap-4">
              <Button variant="premium" className="text-white border-white hover:bg-white hover:text-primary">
                Plan Your Journey
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default HomeHero;
