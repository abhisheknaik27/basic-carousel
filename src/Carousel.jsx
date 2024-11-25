import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const previousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  console.log(currentIndex);
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-64 flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`slide no. ${index}`}
            ></img>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 -translate-y-1/2  right-4 text-white rounded-full bg-gray-800 bg-opacity-40"
        onClick={nextSlide}
      >
        <MdNavigateNext />
      </button>
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-40 rounded-full text-white"
        onClick={previousSlide}
      >
        <MdNavigateBefore />
      </button>
    </div>
  );
};

export default Carousel;
