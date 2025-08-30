import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

const PopupSlider = ({ images = [], isOpen, onClose, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(1);

  useEffect(() => {
    if (isOpen) setLoadedCount(1);
  }, [isOpen]);

  if (!isOpen) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed top-40 max-lg:top-44 inset-0 z-9998 flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Slider */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-4xl z-50 p-2 rounded-full bg-black/50 hover:bg-black/70"
        >
          <IoMdClose />
        </button>

        <h2 className="text-white text-3xl text-center mb-6 z-50">{title}</h2>

        {/* Preload multiple images progressively */}
        {images.slice(0, loadedCount).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } w-full lg:max-w-[70%] xl:max-w-[90%] xl:max-h-[80%] object-contain rounded-lg z-50`}
            onLoad={() => {
              if (loadedCount < images.length) {
                setTimeout(() => setLoadedCount((prev) => prev + 1), 300);
              }
            }}
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/1200x800?text=Vehicle+Image")
            }
          />
        ))}

        {/* Arrows */}
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="
    absolute 
    left-6 
    text-white text-5xl p-3 bg-black/50 rounded-full hover:bg-black/70 z-50
    top-1/2 -translate-y-1/2   /* Default: center */
    max-md:top-auto max-md:bottom-6 max-md:-translate-y-0  /* On mobile: move to bottom */
  "
        >
          <IoIosArrowBack />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="
    absolute 
    right-6 
    text-white text-5xl p-3 bg-black/50 rounded-full hover:bg-black/70 z-50
    top-1/2 -translate-y-1/2   /* Default: center */
    max-md:top-auto max-md:bottom-6 max-md:-translate-y-0  /* On mobile: move to bottom */
  "
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default PopupSlider;
