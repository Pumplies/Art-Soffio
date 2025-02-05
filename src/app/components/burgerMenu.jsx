import { useContext } from "react";
import Image from "next/image";
import FormButton from "./ui/formButton";
import { FormContext } from "./clientWrapper";

export default function BurgerMenu() {
  const { toggleForm, toggleBurgerMenu } = useContext(FormContext);

  const handleFormButtonClick = () => {
    toggleForm();
    toggleBurgerMenu();
  };

  return (
    <article className="bg-[#F8B5C3] h-screen flex flex-col p-6 fixed top-0 left-0 w-full z-50">
      <header className="flex items-center justify-between mb-[67px]">
        <Image src="/logoBurger.svg" width={45} height={45} alt="Logo Burger" />
        <Image src="/logoWhite.svg" width={188} height={35} alt="Logo White" />
        <button
          className="p-2 bg-[#FFFFFF4D] rounded-full"
          onClick={toggleBurgerMenu}
        >
          <Image src="/x.svg" width={13} height={13} alt="Close Menu" />
        </button>
      </header>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col text-lg gap-[1.7vh]">
          <li className="flex items-center text-white active:font-bold group">
            <span className="text-sm text-[#ffffff80] mr-[28px] group-active:text-white transition-colors duration-300">
              01
            </span>
            <a href="#about" className="text-[20px]" onClick={toggleBurgerMenu}>
              О нас
            </a>
          </li>
          <li className="flex items-center text-white active:font-bold group">
            <span className="text-sm text-[#ffffff80] mr-[28px] group-active:text-white transition-colors duration-300">
              02
            </span>
            <a href="#why" className="text-[20px]" onClick={toggleBurgerMenu}>
              Почему выгодно сотрудничать с нами?
            </a>
          </li>
          <li className="flex items-center text-white active:font-bold group">
            <span className="text-sm text-[#ffffff80] mr-[28px] group-active:text-white transition-colors duration-300">
              03
            </span>
            <a
              href="#products"
              className="text-[20px]"
              onClick={toggleBurgerMenu}
            >
              Наша продукция
            </a>
          </li>
          <li className="flex items-center text-white active:font-bold group">
            <span className="text-sm text-[#ffffff80] mr-[28px] group-active:text-white transition-colors duration-300">
              04
            </span>
            <a
              href="#reviews"
              className="text-[20px]"
              onClick={toggleBurgerMenu}
            >
              Отзывы наших клиентов
            </a>
          </li>
          <li className="flex items-center text-white active:font-bold group">
            <span className="text-sm text-[#ffffff80] mr-[28px] group-active:text-white transition-colors duration-300">
              05
            </span>
            <a
              href="#certificates"
              className="text-[20px]"
              onClick={toggleBurgerMenu}
            >
              Сертификаты
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mt-[13vh]">
        <ul className="flex flex-col text-lg gap-[1.7vh]">
          <li>
            <a
              href="https://wa.me/+77478390387?text=Здравствуйте,%20я%20хочу%20узнать%20подробнее%20о%20ваших%20услугах"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center text-white active:font-bold group"
            >
              <div className="bg-[#ffffff41] p-[8px] rounded-full mr-[15px]">
                <Image
                  src="/whatsapp.svg"
                  width={18}
                  height={18}
                  alt="WhatsApp"
                />
              </div>
              <p className="text-[20px]">WhatsApp</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/artsoffio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center text-white active:font-bold group"
            >
              <div className="bg-[#ffffff41] p-[8px] rounded-full mr-[15px]">
                <Image
                  src="/instagram-burger.svg"
                  width={18}
                  height={18}
                  alt="Instagram"
                />
              </div>
              <p className="text-[20px]">Instagram</p>
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@artsoffio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center text-white active:font-bold group"
            >
              <div className="bg-[#ffffff41] p-[8px] rounded-full mr-[15px]">
                <Image
                  src="/youtube-burger.svg"
                  width={18}
                  height={18}
                  alt="YouTube"
                />
              </div>
              <p className="text-[20px]">YouTube</p>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/artsoffio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex items-center text-white active:font-bold group"
            >
              <div className="bg-[#ffffff41] p-[3px] rounded-full mr-[15px]">
                <Image
                  src="/telegram-burger.svg"
                  width={27}
                  height={27}
                  alt="Telegram"
                />
              </div>
              <p className="text-[20px]">Telegram</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center mt-[13vh]">
        <FormButton text={"Оформить заявку"} onClick={handleFormButtonClick} />
      </div>
    </article>
  );
}
