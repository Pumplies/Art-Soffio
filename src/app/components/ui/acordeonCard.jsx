import { useState } from "react";
import Image from "next/image";

export default function AcordeonCard({ title, text }) {
  const [isOpen, setIsOpen] = useState(false); // Состояние открытия/закрытия

  // Функция для переключения состояния
  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className={`transform transition-all duration-300 relative w-auto h-[255px] pr-[65px] hd:pr-[90px] ${
        isOpen
          ? "h-[320px] hd:h-[442px] text-white"
          : "h-[90px] hd:h-[255px] text-black"
      }`}
    >
      <div
        className={` overflow-hidden transform transition-all duration-300 w-full h-full  py-[21px] hd:py-[30px] pl-[36px] md:pr-[5px] hd:px-[45px] rounded-[26px] hd:rounded-[40px] ${
          isOpen ? "bg-[#597E72]" : "bg-[#DEE1E8]"
        }`}
      >
        <h3 className=" leading-[24px] md:leading-[26px] xl:leading-[28px] hd:leading-[34px] text-[24px] md:text-[26px] xl:text-[28px] hd:text-[34px] font-[600] mb-[8px] hd:mb-[28px] ">
          {title}
        </h3>
        <p
          className={`pr-[35px] hd:pr-0  leading-[22px] md:leading-[26px] xl:leading-[28px] hd:leading-[35px] text-[16px] md:text-[18px] hd:text-[20px] font-[500]  ${
            isOpen ? "" : "hidden"
          }`}
        >
          {text}
        </p>
      </div>
      <div
        className={`transform transition-all duration-300 w-[90px] hd:w-[130px] absolute top-0 right-0 rounded-tr-[26px] rounded-br-[26px] hd:rounded-tr-[50px] hd:rounded-br-[50px] ${
          isOpen
            ? "h-[255px] md:h-[255px] hd:h-[352px] bg-[#597E72]"
            : "h-[25px] hd:h-[165px] bg-[#DEE1E8]"
        }`}
      ></div>

      <div
        className={` transform transition-all duration-300 w-[35px] absolute top-0 hd:top-[150px] right-[35px] hd:right-[55px] ${
          isOpen
            ? "h-[300px] hd:h-[237px] bg-[#597E72]"
            : "h-[55px] hd:h-[50px] bg-[#DEE1E8]"
        }`}
      ></div>
      <div
        className="bg-[#F3FBFF] pt-[15px] pl-[15px] hd:pt-[20px] hd:pl-[20px] absolute bottom-[0px] right-[0px] "
        style={{ borderRadius: "40px 0 0 0" }}
      >
        <button
          onClick={toggleCard}
          className={`w-[51px] h-[51px] hd:w-[70px] hd:h-[70px] flex items-center justify-center  rounded-full transition-all duration-300 ${
            isOpen ? "bg-[#597E72]" : "bg-[#DEE1E8]"
          }`}
        >
          <Image
            src="/acordClosedArrow.svg"
            alt="arrow"
            width={30}
            height={30}
            className={`transform transition-transform duration-300 ${
              isOpen ? "-rotate-90 hd:rotate-180 filter brightness-0 invert" : "rotate-90 hd:rotate-0"
            }`}
          ></Image>
        </button>
      </div>
    </div>
  );
}
