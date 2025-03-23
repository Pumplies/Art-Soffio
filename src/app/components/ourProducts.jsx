"use client";
import { useState, useEffect, useRef } from "react";
import OurProjectCard from "./ui/ourProjectCard";
import Image from "next/image";
import "./ourProducts.css";

const categories = [
  { id: 1, text: "БЕСТСЕЛЛЕРЫ" },
  { id: 2, text: "НОВИНКИ" },
  { id: 3, text: "ВЫСТАВОЧНЫЕ МОДУЛИ" },
];

export default function OurProducts({ cards }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [cards, activeCategory]);

  const filteredCards = activeCategory
    ? cards.filter((card) => card.categoryId === activeCategory)
    : cards;

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = isMobile ? 278 : 400 * 3;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <article id="products">
      <h3 className="text-center md:text-start text-[9.1vw] md:text-[65px] hd:text-[82px] font-[600]">
        Наша <span className="text-[#597E72]">продукция</span>
      </h3>
      <section>
        <div className="my-[30px] md:my-[45px] xl:my-[60px] hd:my-[85px] w-full overflow-scroll xl:overflow-visible flex justify-between md:justify-start gap-[20px] md:gap-[20px] hd:gap-[0px] hd:justify-between scrollbar-hide pr-[30px] md:pr-[60px] hd:pr-[138px]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`border font-[400] hd:font-[600] text-[14px] md:text-[34px] hd:text-[44px] py-[7px] xl:py-[11px] hd:py-[13px] px-[20px] xl:px-[40px] hd:px-[50px] rounded-full transition-all duration-300 text-nowrap ${
                activeCategory === category.id
                  ? "bg-[#597E72] text-white"
                  : "border-[#597E72] text-[#597E72] hover:scale-105"
              }`}
            >
              {category.text}
            </button>
          ))}
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-[25px] hd:gap-[60px] overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {filteredCards.map((card) => (
              <OurProjectCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        {/* Кнопки стрелок */}
        <div className="hidden xl:flex gap-[10px] mt-[55px] justify-end w-full pr-[30px] md:pr-[60px] hd:pr-[138px]">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className={`w-[70px] h-[70px] flex items-center justify-center border rounded-full group transform transition-all duration-300 ${
              !canScrollLeft
                ? "opacity-50 cursor-not-allowed"
                : "border-[#597E72] hover:bg-[#597E72]"
            }`}
          >
            <Image
              src="/v-arrow.svg"
              alt="arrowLeft"
              width={14}
              height={31}
              onDragStart={(e) => e.preventDefault()}
              className={`group-hover:invert group-hover:brightness-0 group-hover:filter ${
                !canScrollLeft ? "group-hover:brightness-100" : ""
              }`}
            />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className={`w-[70px] h-[70px] flex items-center justify-center border rounded-full group transform transition-all duration-300 rotate-180 ${
              !canScrollRight
                ? "opacity-50 cursor-not-allowed"
                : "border-[#597E72] hover:bg-[#597E72]"
            }`}
          >
            <Image
              src="/v-arrow.svg"
              alt="arrowRight"
              width={14}
              height={31}
              onDragStart={(e) => e.preventDefault()}
              className={`group-hover:invert group-hover:brightness-0 group-hover:filter ${
                !canScrollRight ? "group-hover:brightness-100" : ""
              }`}
            />
          </button>
        </div>
      </section>
    </article>
  );
}
