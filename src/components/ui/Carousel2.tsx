import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/carousel1.jpg', link: 'https://example.com/page1' },
    { src: '/carousel2.jpg', link: 'https://example.com/page2' },
    { src: '/carousel3.jpg', link: 'https://example.com/page3' },
    { src: '/carousel4.jpg', link: 'https://example.com/page4' },
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-700 transform-gpu"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={`Slide ${index}`} className="w-full h-[400px] object-cover" />
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 px-2 py-1 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 px-2 py-1 rounded-full"
      >
        &#8250;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;