"use client";
import { useContext } from "react";
import Image from "next/image";
import FormButton from "./ui/formButton";
import { FormContext } from "./clientWrapper";

export default function Certificates() {
  const { toggleForm } = useContext(FormContext);

  return (
    <article
    className="pr-[30px] md:pr-[40px] lg:pr-[60px] hd:pr-[138px]">
      <div
      id="certificates"
      className="w-full pl-[19px] md:pl-[60px] hd:pl-[81px] pt-[35px] hd:pt-[83px] pb-[47px] hd:pb-[100px] flex justify-between bg-gradient-to-r from-[#F8B5C3] rounded-[17px] md:rounded-[50px] to-[#E2E2E24D] "
    >
      <section className="flex flex-col w-[70%] md:w-[50%] hd:w-[70%] relative hd:pr-[130px]">
        <h3 className="text-[#060606] md:text-[#597E72] text-[38px] md:text-[65px] hd:text-[82px] font-[600]">
          Сертификаты
        </h3>
        <Image
          src={"/arrow2.svg"}
          alt="arrow"
          width={147}
          height={98}
          className="hidden xl:block absolute md:left-[500px] md:top-[40px] hd:left-[620px] hd:top-[70px] md:w-[120px] md:h-[70px] hd:w-[147px] hd:h-[98px]"
        ></Image>
        <p className="pr-[60px] md:pr-0 lg:pr-[60px] hd:pr-0 font-[500] text-[12px] md:text-[25px] hd:text-[34px] leading-[16px] md:leading-[35px] hd:leading-[45px] mb-[46px] hd:mb-[87px] mt-[10px] hd:mt-[42px]">
          Вся наша продукция соответствует международным стандартам качества и
          имеет необходимые сертификаты, что гарантирует безопасность и
          надежность косметики{" "}
          <span style={{ whiteSpace: "nowrap" }}>ART SOFFIO</span>.
        </p>
        <FormButton text={"Оформить заявку"} onClick={toggleForm} />
      </section>
      <section className="relative w-[50%]">
        <Image
          src={"/certificate.png"}
          alt="certificate"
          width={355}
          height={487}
          className="absolute top-[60px] left-[-60px] md:left-[10px] md:top-[90px] lg:left-[40px] lg:top-[70px] xl:top-[-70px] hd:left-0 hd:top-[-160px] md:w-[205px] md:h-[290px] lg:w-[255px] lg:h-[350px] hd:w-[355px] hd:h-[487px]"
        ></Image>
        <Image
          src={"/certificate.png"}
          alt="certificate"
          width={355}
          height={487}
          className="absolute left-[-20px] top-[65px] md:left-[100px] md:top-[100px] lg:left-[150px] lg:top-[70px] xl:top-[-60px] hd:top-[-170px] hd:left-[156px] rotate-[22deg] md:w-[205px] md:h-[290px] lg:w-[255px] lg:h-[350px] hd:w-[355px] hd:h-[487px]"
        ></Image>
        <Image
          src={"/certificate.png"}
          alt="certificate"
          width={355}
          height={487}
          className="absolute left-[20px] top-[80px] md:left-[180px] md:top-[150px] lg:left-[260px] lg:top-[120px] xl:top-[20px] hd:top-[-50px] hd:left-[300px] rotate-[46deg] md:w-[205px] md:h-[290px] lg:w-[255px] lg:h-[350px] hd:w-[355px] hd:h-[487px]"
        ></Image>
      </section>
    </div>
    </article>
    
  );
}
