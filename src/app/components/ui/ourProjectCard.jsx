"use client"
import Image from "next/image";

export default function OurProjectCard({ image, title, text }) {
  return (
    <article className="w-[278px] md:w-[400px] hd:w-[595px] h-[280px] md:h-[450px] hd:h-[670px] flex flex-col items-center justify-evenly text-[#060606] border border-[#597E72] rounded-2xl py-[30px] md:py-[36px] px-[22px] md:px-[30px] hd:px-[50px]">
      <div className="relative w-[181px] md:w-[300px] hd:w-[500px] h-[181px] md:h-[300px] hd:h-[340px]">
        <Image
          src={image}
          alt="Product"
          layout="fill"
          objectFit="contain" 
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
      <div className="flex flex-col text-center">
        <h4 className="text-[16px] md:text-[24px] hd:text-[34px] font-[600] leading-[21px] md:leading-[30px] hd:leading-[46px] mb-[8px] md:mb-[15px] hd:mb-[20px]">
          {title}
        </h4>
        <p className="whitespace-nowrap md:whitespace-normal text-[14px] md:text-[20px] hd:text-[26px] font-[300] leading-[18px] md:leading-[25px] hd:leading-[35px]">{text}</p>
      </div>
    </article>
  );
}
