import React, { useState, useEffect } from "react";
import Head from "next/head";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { src: "/int4.svg", link: "https://example.com/page2" },
  { src: "/int5.svg", link: "https://example.com/page3" },
  { src: "/interior.jpg", link: "https://example.com/page1" },
  { src: "/interior2.jpg", link: "https://example.com/page2" },
  { src: "/interior3.jpg", link: "https://example.com/page3" },

];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto mt-2 px-4 md:px-0">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        />
        <title>Beautiful Carousel</title>
      </Head>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <a
          href={images[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="whitespace-nowrap transition-transform duration-700 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Carousel Image ${index + 1}`}
                className="inline-block w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
            ))}
          </div>
        </a>
      </div>
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
      >
        <FaChevronLeft size={20} className="sm:size-24" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
      >
        <FaChevronRight size={20} className="sm:size-24" />
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            } focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
};

const CarouselPage: React.FC = () => {
  return (
    <div className="min-h-20 flex flex-col items-center bg-gray-50">
      <Carousel />
    </div>
  );
};

export default CarouselPage;
