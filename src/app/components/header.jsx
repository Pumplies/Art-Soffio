"use client"
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FormContext } from "./clientWrapper";

const BurgerMenu = dynamic(() => import("./burgerMenu"), { ssr: false });
const Form = dynamic(() => import("./ui/form"), { ssr: false });

export default function Header() {
  const { toggleBurgerMenu, toggleForm, isBurgerMenuOpen, isFormOpen } = useContext(FormContext);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 1210); // Установите порог для узких экранов
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызовите функцию при монтировании компонента

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="flex justify-between items-center py-[30px] px-[40px] md:px-[138px] bg-[#F3FBFF] w-full fixed top-0 z-50">
        <button className={`burger-button order-0 sm:order-1 ${isNarrowScreen ? "block" : "hidden"}`} onClick={toggleBurgerMenu} aria-label="Toggle Menu">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
        <Image src="/logo.svg" alt="Art Soffio Logo" width={370} height={70}  onDragStart={(e) => e.preventDefault()} priority className="w-[188px] h-[35px] mx-auto md:w-[280px] md:h-[53px] hd:w-[370px] hd:h-[70px] md:mx-0"></Image>
        <nav className={`hidden ${isNarrowScreen ? "hidden" : "md:flex"}`}>
          <ul className="flex md:gap-[2vw] hd:gap-[3vw] md:text-[20px] text-[25px]">
            <li className="cursor-pointer" onClick={() => scrollToSection('about')}>О нас</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('products')}>Наша продукция</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('reviews')}>Отзывы</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('certificates')}>Сертификаты</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('contacts')}>Контакты</li>
          </ul>
        </nav>
      </header>
      {isBurgerMenuOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
      {isFormOpen && <Form toggleForm={toggleForm} />}
    </>
  );
}