"use client";
import Image from "next/image";
import FormButton from "./ui/formButton";

export default function Catalog() {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/ART_SOFFIO_Коммерческое_предложение.pdf"; // путь к файлу в public
    link.download = "Каталог.pdf"; // имя файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <article className="mt-[52px] md:mt-[100px] hd:mt-[180px] w-screen h-[280px] md:h-[600px] hd:h-[834px] bg-gradient-to-r from-[#94D7E8] md:rounded-[20px] hd:rounded-[50px] to-[#E2E2E24D] translate-x-[-31px] md:translate-x-[-60px] hd:translate-x-[-138px] flex flex-col justify-between pb-[19px] md:pb-[48px] hd:pb-[70px] ">
      <section className="w-full pt-[40px] hd:pt-0 pl-[31px] md:px-[70px] xl:px-[100px]  hd:px-[138px] flex gap-[10px] md:gap-[50px] xl:gap-[180px] hd:gap-[205px]">
        <div className="relative w-[133px] md:w-[300px] xl:w-[380px] hd:w-[559px] md:top-[10px] xl:top-[-120px] hd:top-[-111px]">
          <Image
            src={"/fullPhone.svg"}
            alt="phone"
            width={534}
            height={720}
            onDragStart={(e) => e.preventDefault()}
            className="absolute w-[133px] h-[180px] md:w-[300px] md:h-[400px] xl:w-[380px] xl:h-[520px] hd:w-[534px] hd:h-[720px]  "
          ></Image>
        </div>
        <div className=" flex flex-col justify-between pt-[14px] hd:pt-[76px] relative">
          <h2 className="text-[25px] md:text-[40px] lg:text-[65px] hd:text-[82px] font-[600] leading-[28px] md:leading-[43px] lg:leading-[68px] hd:leading-[85px] mb-[20px] md:mb-[50px] lg:mb-[40px] xl:mb-[90px] hd:mb-[112px]">
            Для бесплатного <br /> получения <br /> каталога
          </h2>
          <FormButton text="Скачать" onClick={downloadPdf} />
          <Image
            src={"/arrowDown.svg"}
            alt="arrowDown"
            width={60}
            height={144}
            onDragStart={(e) => e.preventDefault()}
            className="absolute top-[50px] left-[140px] md:top-[120px] md:left-[220px] lg:top-[150px] lg:left-[380px] xl:top-[150px] xl:left-[320px] hd:top-[260px] hd:left-[380px] w-[29px] h-[52px] md:w-[40px] md:h-[84px] hd:w-[60px] hd:h-[144px]"
          ></Image>
        </div>
      </section>
      <div className="relative overflow-hidden py-[10px] md:py-[30px] hd:py-[42px] bg-white">
        <div className="flex animate-marquee text-[16px] md:text-[35px] hd:text-[50px] font-[600] whitespace-nowrap">
          {/* Первоначальный набор текста */}
          <div className="flex gap-[28px] md:gap-[50px] hd:gap-[118px]">
            <p>SOFFIO MASTERS</p>
            <p>CREATES GRAPHICS</p>
            <p>ART SOFFIO</p>
            <p>MOLECULAR REVIVO</p>
            <p>VELETTA ROMANTICA</p>
            <p>STARS OF KOREA</p>
            <p>BROW LUXE</p>
            <p>FASHION CLUB</p>
          </div>

          {/* Дублируем текст */}
          <div className="ml-[28px] md:ml-[50px] hd:ml-[118px] flex gap-[28px] md:gap-[50px] hd:gap-[118px]">
            <p>SOFFIO MASTERS</p>
            <p>CREATES GRAPHICS</p>
            <p>ART SOFFIO</p>
            <p>MOLECULAR REVIVO</p>
            <p>VELETTA ROMANTICA</p>
            <p>STARS OF KOREA</p>
            <p>BROW LUXE</p>
            <p>FASHION CLUB</p>
          </div>
        </div>
      </div>
    </article>
  );
}
