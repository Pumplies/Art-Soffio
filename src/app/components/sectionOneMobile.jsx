"use client"
import Image from "next/image";
import FormButton from "./ui/formButton";
import SliderOne from "./sliderOne";

export default function SectionOneMobile({ toggleForm }) {
  return (
    <article className="flex flex-col">
      <section className="px-[30px] pt-[62px] md:pt-[143px] bg-[#F3FBFF] flex flex-col gap-[16px]">
        <h1 className="text-[38px] font-[600] leading-[40px]">
          Выгодные условия для <span className="text-[#F55E79]">оптовых</span>{" "}
          клиентов
        </h1>
        <p className="text-[20px] leading-[20px] italic">
          Прямые поставки косметики от производителя с высоким качеством и
          гибкими условиями для бизнеса
        </p>
      </section>
      <section>
        <SliderOne/>
      </section>
      <section className="bg-[#94D7E833] w-screen h-[207px] py-[24px] relative">
        <div>
          <Image
            src="/girl.png"
            alt="Девушка"
            width={357}
            height={359}
            className="absolute left-[-80px] bottom-0"
            priority
            onDragStart={(e) => e.preventDefault()}
          ></Image>
        </div>
        <div className="pl-[190px] pr-[30px] flex flex-col md:flex-row relative md:h-full">
          <div className=" flex flex-col gap-[10px] md:max-w-[40%]">
            <h3 className="text-[20px] md:text-[27px] leading-[20px]   font-[700] text-[#060606] md:text-nowrap">
              {'"Станьте нашим партнером!"'}
            </h3>
            <p className="text-[3.4vw] md:text-[22px] w-full leading-[14px] md:leading-[21px] italic text-[#060606]">
              Гарантируем качество и лучшие цены. Продукция напрямую от
              производителя.
            </p>
          </div>
          <div className="flex justify-center mt-[22px] md:items-center">
            <FormButton text={"Оформить заявку"} onClick={toggleForm} aria-label="Оформить заявку" />
          </div>
        </div>
      </section>
    </article>
  );
}
