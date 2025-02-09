"use client";
import { useState } from "react";
import Image from "next/image";
import OurProjectCard from "./ui/OurProjectCard";
import "./ourProducts.css";

const categories = [
  { id: 1, text: "БЕСТСЕЛЛЕРЫ" },
  { id: 2, text: "НОВИНКИ" },
  { id: 3, text: "ВЫСТАВОЧНЫЕ МОДУЛИ" },
];

export default function ProductSlider({ cards }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const filteredCards = activeCategory
    ? cards.filter((card) => card.categoryId === activeCategory)
    : cards;

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setScrollIndex(0);
  };

  const handleArrowClick = (direction) => {
    if (direction === "left" && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (
      direction === "right" &&
      scrollIndex < filteredCards.length - 3
    ) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <article>
      <h3 className="text-center md:text-start text-[38px] md:text-[65px] hd:text-[82px] font-[600]">
        Наша <span className="text-[#597E72]">продукция</span>
      </h3>

      <section>
        <div className="my-[30px] md:my-[45px] xl:my-[60px] hd:my-[85px] w-full overflow-scroll xl:overflow-visible flex justify-between md:justify-start md:gap-[20px] hd:gap-[0px]  hd:justify-between scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`border font-[400] hd:font-[600] text-[14px] md:text-[34px] hd:text-[44px] py-[7px] xl:py-[11px] hd:py-[13px] px-[20px] xl:px-[40px] hd:px-[50px] rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#597E72] text-white"
                  : "border-[#597E72] text-[#597E72] hover:scale-105"
              }`}
            >
              {category.text}
            </button>
          ))}
        </div>

        <div className="overflow-x-scroll w-full hd:w-screen hd:overflow-x-hidden scrollbar-hide pb-[1px] hd:pb-0">
          <div className="w-full overflow-hidden flex gap-4 justify-center px-20">
            {filteredCards.slice(scrollIndex, scrollIndex + 3).map((card) => (
              <OurProjectCard key={card.id} {...card} />
            ))}
          </div>
        </div>
        <div className="hidden xl:flex gap-[10px] mt-[55px] justify-end w-full">
          <button
            onClick={() => handleArrowClick("left")}
            disabled={scrollIndex === 0}
            className={`w-[70px] h-[70px] flex items-center justify-center border rounded-full group transform transition-all duration-300 ${
              scrollIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "border-[#597E72] hover:bg-[#597E72]"
            }`}
          >
            <Image
              src="/v-arrow.svg"
              alt="arrowLeft"
              width={14}
              height={31}
              className="group-hover:invert"
            />
          </button>

          <button
            onClick={() => handleArrowClick("right")}
            disabled={scrollIndex >= filteredCards.length - 3}
            className={`w-[70px] h-[70px] flex items-center justify-center border rounded-full group transform transition-all duration-300 rotate-180 ${
              scrollIndex >= filteredCards.length - 3
                ? "opacity-50 cursor-not-allowed"
                : "border-[#597E72] hover:bg-[#597E72]"
            }`}
          >
            <Image
              src="/v-arrow.svg"
              alt="arrowRight"
              width={14}
              height={31}
              className="group-hover:invert"
            />
          </button>
        </div>
      </section>
    </article>
  );
}
