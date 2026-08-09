import Container from "../../ui/Container.jsx";
import Button from "../../ui/Button.jsx";
import Image from "../../ui/Image.jsx";
import { assets } from "../../../config/assets.js";

function HomeHero({ onOpenInquiry }) {
  return (
    <section className="relative min-h-[50vh] md:min-h-screen w-full pt-20 pb-16 flex items-center overflow-hidden">
      {/* Background Image - Placeholder structure */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.hero.home.replace('.jpg', '.webp')}
          alt="Travel"
          fetchPriority="high"
          loading="eager"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 md:bg-primary/50" />
      </div>

      <div className="relative z-10 flex w-full items-center">
        <Container>
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-2xl sm:text-4xl font-medium leading-tight tracking-tight md:text-7xl break-words">
              Professional Travel Solutions For Every Journey
            </h1>
            <p className="mt-6 text-lg font-light text-white/90 md:text-xl">
              Plan holidays, business travel, visa support, and international
              travel with professional, personalized guidance.
            </p>
            <div className="mt-10 flex gap-4">
              <Button variant="premium" onClick={onOpenInquiry} className="px-10 py-4 text-lg">
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
