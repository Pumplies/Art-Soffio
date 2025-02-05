"use client";
import { useState, useEffect } from "react";
import OurProjectCard from "./ui/ourProjectCard";
import "./ourProducts.css";
import Image from "next/image";

export default function OurProducts() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [offset, setOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  const buttons = [
    { id: 1, text: "БЕСТСЕЛЛЕРЫ" },
    { id: 2, text: "НОВИНКИ" },
    { id: 3, text: "ВЫСТАВОЧНЫЕ МОДУЛИ" },
  ];

  const cards = [
    {
      id: 1,
      categoryId: 1,
      image: "/e-69.png",
      title: "Палетка теней",
      text: "8 палеток теней",
    },
    {
      id: 2,
      categoryId: 1,
      image: "/cream-fluid.png",
      title: "Крем-флюид",
      text: "для лица, шеи и зоны декольте",
    },
    {
      id: 3,
      categoryId: 1,
      image: "/palette-contur.png",
      title: "Контуринг лица",
      text: "3 палетки",
    },
    {
      id: 4,
      categoryId: 1,
      image: "/тушь.png",
      title: "Тушь для ресниц",
      text: "3 щеточки",
    },
    {
      id: 5,
      categoryId: 1,
      image: "/lipstick.png",
      title: "Помада",
      text: "24 тона",
    },
    {
      id: 6,
      categoryId: 1,
      image: "/карандаши.png",
      title: "Карандаш для губ",
      text: "10 оттенков",
    },
    {
      id: 7,
      categoryId: 1,
      image: "/shadow.png",
      title: "Тени для век",
      text: "27 палеток",
    },
    {
      id: 8,
      categoryId: 1,
      image: "/pudra.png",
      title: "Пудра для лица",
      text: "4 тона",
    },
    {
      id: 9,
      categoryId: 2,
      image: "/serum.png",
      title: "Сыворотка для лица Double Phase Art Soffio",
      text: "Аргановое масло и AHA-кислоты",
    },
    {
      id: 10,
      categoryId: 2,
      image: "/key-snail.png",
      title: "Крем для лица Magic Key Snail",
      text: "SPF 50+ PA++",
    },
    {
      id: 11,
      categoryId: 2,
      image: "/bb-cream.png",
      title: "Тональный крем Foundation Cover BB Cream",
      text: "SPF 36PA++, 2 тона",
    },
    {
      id: 12,
      categoryId: 2,
      image: "/gel-fluid.png",
      title: "Очищающий гель-флюид Антистресс",
      text: "Гиалуроновая кислота и муцин улитки",
    },
    {
      id: 13,
      categoryId: 2,
      image: "/pensilsForEyes.png",
      title: "Карандаш для глаз Art Soffio of Vogue",
      text: "01 Черный",
    },
    {
      id: 14,
      categoryId: 2,
      image: "/подводка.png",
      title: "Маркер-подводка для глаз Art Soffio Cosmic City",
      text: "2 оттенка",
    },
    {
      id: 15,
      categoryId: 3,
      image: "/lipstickModule.png",
      title: "Помада для губ Magic Brilliance",
      text: "24 тона",
    },
    {
      id: 16,
      categoryId: 3,
      image: "/paletteModule.png",
      title: "Палетка для лица Top Palette Contouring",
      text: "3 палетки",
    },
    {
      id: 17,
      categoryId: 3,
      image: "/pudraModule.png",
      title: "Пудра для лица Veletta Romantica",
      text: "4 тона",
    },
    {
      id: 18,
      categoryId: 3,
      image: "/shadowModule.png",
      title: "Палетка теней Creates Graphics",
      text: "8 палеток",
    },
    {
      id: 19,
      categoryId: 3,
      image: "/stickModule.png",
      title: "Стик-помада для губ Jumbo Stick",
      text: "10 оттенков",
    },
    {
      id: 20,
      categoryId: 3,
      image: "/pensilModule.png",
      title: "Карандаш для губ Koloris Classic",
      text: "12 оттенков",
    },
    {
      id: 21,
      categoryId: 3,
      image: "/pudra2Module.png",
      title: "Пудра для лица Full Coverage Delight",
      text: "4 тона",
    },
    {
      id: 22,
      categoryId: 3,
      image: "/shadow2Module.png",
      title: "Триколор тени Rich Velvety Finish",
      text: "27 палеток",
    },
    {
      id: 23,
      categoryId: 3,
      image: "/pensil2Module.png",
      title: "Карандаш для бровей Art Soffio Slim Collection",
      text: "3 вида с базовыми тонами",
    },
  ];

  const cardWidth = isMobile ? 278 : isLaptop ? 400 : 655; // Измените ширину карточки для мобильных устройств
  const cardsToShow = isMobile ? 1 : 3; // Измените количество карточек для мобильных устройств

  // Функция для обновления фильтрации карт и смещения
  const updateFilteredCards = (categoryId) => {
    const newFilteredCards = categoryId
      ? cards.filter((card) => card.categoryId === categoryId)
      : cards;

    setFilteredCards(newFilteredCards);

    // Обновляем смещение
    const maxOffset = -(cardWidth * (newFilteredCards.length - cardsToShow));
    setOffset(Math.max(0, Math.min(offset, maxOffset))); // Обновляем смещение, не выходя за пределы
  };

  useEffect(() => {
    updateFilteredCards(selectedCategory); // Обновление фильтрации при изменении категории
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIsLaptop(window.innerWidth < 1920); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызовите функцию при монтировании компонента

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    setSelectedCategory(buttons[index].id);
  };

  const handleArrowClick = (direction) => {
    setOffset((prev) => {
      const newOffset =
        direction === "left"
          ? prev + cardWidth * cardsToShow
          : prev - cardWidth * cardsToShow;

      const maxOffset = -(cardWidth * (filteredCards.length - cardsToShow));
      return Math.max(Math.min(newOffset, 0), maxOffset); // Ограничиваем сдвиг
    });
  };

  // Переменные для проверки достижения предела
  const isAtStart = offset === 0;
  const isAtEnd =
    offset === -(cardWidth * (filteredCards.length - cardsToShow));

  return (
    <article id="products">
      <h3 className="text-center md:text-start text-[38px] md:text-[65px] hd:text-[82px] font-[600]">
        Наша <span className="text-[#597E72]">продукция</span>
      </h3>
      <section>
        <div className="my-[30px] md:my-[45px] xl:my-[60px] hd:my-[85px] w-full overflow-scroll xl:overflow-visible flex justify-between md:justify-start md:gap-[20px] hd:gap-[0px]  hd:justify-between scrollbar-hide">
          {buttons.map((button, index) => (
            <button
              key={button.id}
              onClick={() => handleClick(index)}
              className={`whitespace-nowrap outline-none border font-[400] hd:font-[600] text-[14px] md:text-[34px] hd:text-[44px]  py-[7px] xl:py-11px hd:py-[13px] px-[20px] md:px xl:px-[40px] hd:px-[50px] rounded-full mx-2 hover:scale-105 transform transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-[#597E72] text-white"
                    : "border-[#597E72] text-[#597E72]"
                }`}
            >
              {button.text}
            </button>
          ))}
        </div>

        <div className="overflow-x-scroll w-full hd:w-screen hd:overflow-x-hidden scrollbar-hide pb-[1px] hd:pb-0">
          <div
            className="flex gap-[25px] hd:gap-[60px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${offset}px)`, width: `${filteredCards.length * cardWidth}px` }}
          >
            {filteredCards.map((card) => (
              <OurProjectCard
                key={card.id}
                image={card.image}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>

        <div className="hidden xl:flex gap-[10px] mt-[55px] justify-end w-full">
          <button
            onClick={() => handleArrowClick("left")}
            disabled={isAtStart}
            className={`w-[70px] h-[70px] flex items-center justify-center border rounded-full group transform transition-all duration-300 ${
              isAtStart
                ? "opacity-50 cursor-not-allowed"
                : "border-[#597E72] hover:bg-[#597E72]"
            }`}
          >
            <Image
              src="/v-arrow.svg"
              alt="arrowLeft"
              width={14}
              height={31}
              className={`group-hover:invert group-hover:brightness-0 group-hover:filter ${
                isAtStart ? "group-hover:brightness-100" : ""
              }`}
            />
          </button>
          <button
            onClick={() => handleArrowClick("right")}
            disabled={isAtEnd}
            className={`w-[70px] h-[70px] flex items-center justify-center border rounded-full group transform transition-all duration-300 rotate-180 ${
              isAtEnd
                ? "opacity-50 cursor-not-allowed"
                : "border-[#597E72] hover:bg-[#597E72]"
            }`}
          >
            <Image
              src="/v-arrow.svg"
              alt="arrowRight"
              width={14}
              height={31}
              className={`group-hover:invert group-hover:brightness-0 group-hover:filter ${
                isAtEnd ? "group-hover:brightness-100" : ""
              }`}
            />
          </button>
        </div>
      </section>
    </article>
  );
}
