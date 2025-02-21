"use client";
import { useState, useEffect, useRef } from "react";

import "./sliderOne.css"; // Импорт файла стилей
import FirstSlide from "./slides/firstSlide";
import SecondSlide from "./slides/secondSlide";
import ThirdSlide from "./slides/thirdSlide";
import FoursSlide from "./slides/foursSlide";
import FiveSlide from "./slides/fiveSlide";
import SixSlide from "./slides/sixSlide";

export default function SliderOne() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Вызов при монтировании
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, component: <FirstSlide isMobile={isMobile} /> },
    { id: 2, component: <SecondSlide isMobile={isMobile} /> },
    { id: 3, component: <ThirdSlide isMobile={isMobile} /> },
    { id: 4, component: <FoursSlide isMobile={isMobile} /> },
    { id: 5, component: <FiveSlide isMobile={isMobile} /> },
    { id: 6, component: <SixSlide isMobile={isMobile} /> },
  ];
  
  const totalSlides = slides.length;
  const gap = -5; // Укажите значение gap в пикселях

  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else if (endX.current - startX.current > 50) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // смена слайда каждые 5 секунд
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div
      className="relative overflow-hidden w-full h-[650px] lg:h-[660px] xl:h-[700px] hd:min-h-[1100px] hd:max-h-[1400px]  bg-[#F3FBFF]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="slides flex transition-transform duration-500 gap-[10px]"
        style={{
          transform: `translateX(-${
            currentSlide * (100 + gap / totalSlides)
          }%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide w-full flex-shrink-0">
            {slide.component}
          </div>
        ))}
      </div>
      <div className="absolute bottom-[70px] md:bottom-[20px] hd:bottom-[70px] left-1/2 transform -translate-x-1/2 flex space-x-2 gap-[5px] md:gap-[10px] hd:gap-[20px]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`pointer w-[10px] h-[10px] md:w-[15px] md:h-[15px] hd:w-[20px] hd:h-[20px] rounded-full ${
              index === currentSlide ? "bg-[#597E72]" : "bg-[#DEE1E8]"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
