import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

const PopupSlider = ({ images = [], isOpen, onClose, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed top-30 max-xl:top-26 max-lg:top-24 inset-0 z-50 flex items-center justify-center">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Slider */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-4xl z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
        >
          <IoMdClose />
        </button>

        <h2 className="text-white text-3xl text-center mb-6 z-50">{title}</h2>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full xl:max-w-[90%] xl:max-h-[80%] max-xl:max-w-[70%] max-xl:max-h-[70%] max-lg:max-w-[100%] max-lg:max-h-[100%]  object-contain rounded-lg z-50"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/1200x800?text=Vehicle+Image")
          }
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-5xl max-xl:text-3xl p-3 bg-black/50 rounded-full hover:bg-black/70 transition z-50"
        >
          <IoIosArrowBack />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-5xl max-xl:text-3xl p-3 bg-black/50 rounded-full hover:bg-black/70 transition z-50"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default PopupSlider;
