"use client"
import Image from "next/image";
import FormButton from "./ui/formButton";
import SliderOne from "./sliderOne";

export default function SectionOneMobile({ toggleForm }) {
  return (
    <article className="flex flex-col">
      <section className="px-[30px] pt-[127px] md:pt-[143px] bg-[#F3FBFF] flex flex-col gap-[16px]">
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
        <div className="pl-[190px] pr-[30px] flex flex-col relative">
          <div className=" flex flex-col gap-[10px]">
            <h3 className="text-[20px] leading-[20px] font-[700] text-[#060606]">
              {'"Станьте нашим партнером!"'}
            </h3>
            <p className="text-[14px] leading-[14px] italic text-[#060606]">
              Гарантируем качество и лучшие цены. Продукция напрямую от
              производителя.
            </p>
          </div>
          <div className="flex justify-center mt-[22px]">
            <FormButton text={"Оформить заявку"} onClick={toggleForm} aria-label="Оформить заявку" />
          </div>
        </div>
      </section>
    </article>
  );
}
