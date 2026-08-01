import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function DestinationImageSlider({ images, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const startTransition = () => {
      const next = (currentIndex + 1) % images.length;
      const nextImageUrl = images[next];

      // Explicit Preloading
      const nextImage = new Image();
      nextImage.src = nextImageUrl;
      nextImage.onload = () => {
        setNextIndex(next);
        setIsTransitioning(true);
        
        // Wait for the transition to finish before updating currentIndex
        setTimeout(() => {
          setCurrentIndex(next);
          setIsTransitioning(false);
        }, 1500); // Matches CSS duration
      };
    };

    timeoutRef.current = setTimeout(startTransition, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Destination"
          loading="eager"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1500 ${
            index === currentIndex 
              ? isTransitioning ? 'opacity-0' : 'opacity-100'
              : index === nextIndex && isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

DestinationImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number.isRequired,
};

export default DestinationImageSlider;
