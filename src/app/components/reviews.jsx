"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ReviewsCard from "./ui/reviewsCard";

export default function Reviews() {
  const [offset, setOffset] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      id: 1,
      name: "Татьяна",
      product: "ART SOFFIO Full Coverage, Пудра",
      text: '"Очень хорошая пудра! Цвет ближе к натуральному! Текстура и запах приятные! Цена доступная. Очень хорошо упакована.Курьер доставил быстро в согласованный срок! Очень советую эту пудру к покупке! Спасибо за качественный товар!"',
    },
    {
      id: 2,
      name: "Берик",
      product: "ART SOFFIO Snail Repair, Крем-флюид",
      text: '"Прекрасно увлажняет кожу, придает ей сияние, у меня от использования этого крема исчезла сухость кожи, по мне очень классный, да ещё и многофункциональный крем! Спасибо за данный продукт и цена, кстати, тоже отличная!"',
    },
    {
      id: 3,
      name: "Нелли",
      product: "ART SOFFIO Brow Luxe 3 in 1, Карандаш для бровей",
      text: '"Я довольна карандашом, качество очень хорошее, 3 в одном: щеточка, подводка и тени для подкрашивания. Удобно в дорогу. Радует результат — брови выглядят естественно и красиво."',
    },
    {
      id: 4,
      name: "Ботагоз",
      product: "ART SOFFIO Rich Velvety Finish, Тени для век",
      text: '"Хорошие минеральные тени, насыщенные тона, не размазываются, не скатываются, не осыпаются, до вечера лежали аккуратно! За такую цену просто волшебно!"',
    },
    {
      id: 5,
      name: "Малика",
      product: "ART SOFFIO Stars of Korea, Карандаш-хайлайтер",
      text: '"Я в этот цвет влюбилась с первого раза! Я долго не могла найти такой нежный оттенок зеленого с легким золотистым переливом. Однозначно буду брать еще! Спасибо большое Каспи за быструю доставку."',
    },
  ];

  const sliderRef = useRef(null); // Ссылка на контейнер с карточками
  const cardRef = useRef(null); // Ссылка на карточку
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth); // Получаем ширину карточки
      }
      setIsAtEnd(cards.length <= 1); // Инициализация состояния кнопок
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызов при монтировании

    return () => window.removeEventListener("resize", handleResize);
  }, [cards.length]);

  const handleArrowClick = (direction) => {
    const maxOffset = -(cardWidth * (cards.length - 1)); // Максимальное смещение

    setOffset((prev) => {
      const newOffset =
        direction === "left" ? prev + cardWidth : prev - cardWidth;

      // Обновляем состояние кнопок
      setIsAtStart(newOffset >= 0);
      setIsAtEnd(newOffset <= maxOffset);

      return Math.max(Math.min(newOffset, 0), maxOffset);
    });
  };

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
      handleArrowClick("right");
    } else if (endX.current - startX.current > 50) {
      handleArrowClick("left");
    }
  };

  return (
    <article id="reviews" className="w-full hd:px-[20px] mt-[45px] md:mt-[100px] hd:mt-[143px] mb-[52px] md:mb-[120px] hd:mb-[165px] pr-[30px] md:pr-[60px] hd:pr-[138px]">
      <h3 className="text-[38px] md:text-[65px] hd:text-[82px] font-[600] text-end">
        <span className="text-[#F55E79]">Отзывы</span> наших клиентов
      </h3>
      <section className="flex gap-[10px] md:gap-[20px] hd:gap-[30px] justify-end mt-[20px]">
        <Image src={"/kaspi.svg"} alt="kaspi" width={115} height={115} className="w-[39px] h-[39px] md:w-[80px] md:h-[80px] hd:w-[115px] hd:h-[115px]"/>
        <Image src={"/wb.svg"} alt="wildberries" width={115} height={115} className="w-[39px] h-[39px] md:w-[80px] md:h-[80px] hd:w-[115px] hd:h-[115px]"/>
        <Image src={"/ozon.svg"} alt="ozon" width={115} height={115} className="w-[39px] h-[39px] md:w-[80px] md:h-[80px] hd:w-[115px] hd:h-[115px]"/>
      </section>

      {/* Слайдер */}
      <div
        className="w-full overflow-hidden mt-[50px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${offset}px)`,
            width: `${cards.length * 100}%`, // Полная ширина слайдера
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={index === 0 ? cardRef : null} // Привязываем ref только к первой карточке
              className="flex-shrink-0 w-full" // Каждая карточка занимает 100% ширины
            >
              <ReviewsCard
                name={card.name}
                product={card.product}
                text={card.text}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Навигационные кнопки */}
      {isMobile ? (
        <div className="flex justify-center mt-[40px] space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-[70px] h-[3px] rounded-full ${
                offset === -index * cardWidth ? "bg-[#000000]" : "bg-[#888888]"
              }`}
              onClick={() => setOffset(-index * cardWidth)}
            ></button>
          ))}
        </div>
      ) : (
        <div className="flex gap-[10px] mt-[30px] justify-center w-full">
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
      )}
    </article>
  );
}
