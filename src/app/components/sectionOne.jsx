"use client"
import Image from "next/image";
import FormButton from "./ui/formButton";
import SliderOne from "./sliderOne";

export default function SectionOne({ toggleForm }) {
  return (
    <article className="pt-[100px] flex bg-[#F3FBFF]">
      <section className="pl-[7%] w-2/3 flex flex-col bg-[#F3FBFF] hd:h-[1100px] z-10 ">
        <h1 className="font-[600] sm:text-[40px] md:text-[50px] hd:text-[82px] sm:leading-[40px] md:leading-[50px] hd:leading-[85px]">
          <span className="whitespace-normal hd:whitespace-nowrap">Выгодные условия</span> <br className="hidden hd:block"/> для{" "}
          <span className="text-[#F55E79]">оптовых</span> клиентов
        </h1>
        <p className="w-[70%] font-[400] sm:text-[20px] hd:text-[32px] leading-[20px] hd:leading-[39px] italic">
          Прямые поставки косметики от производителя с высоким качеством и
          гибкими условиями для бизнеса
        </p>
        <div className="flex flex-col">
          <div>
            <FormButton
              position="absolute md:left-[150px] xl:left-[260px] md:top-[80px] hd:left-[309px]  hd:top-[130px]"
              text={"Оформить заявку"}
              onClick={toggleForm}
              aria-label="Оформить заявку"
            />
          </div>
          <div>
            <Image
              src="/girl.png"
              alt="Девушка"
              width={604}
              height={584}
              priority
              onDragStart={(e) => e.preventDefault()}
              className="absolute z-10 left-[-30px] hd:left-0 md:top-[377px] xl:top-[300px] hd:top-[555px] md:w-[384px] md:h-[364px] xl:w-[504px] xl:h-[484px] hd:w-[604px] hd:h-[584px]"
            ></Image>

            <Image
              src="/Rectangle.svg"
              alt="Фон"
              width={1221}
              height={326}
              priority
              onDragStart={(e) => e.preventDefault()}
              className="absolute md:left-[-250px] xl:left-[-110px] hd:left-[-130px] md:top-[498px] xl:top-[545px] hd:top-[813px] md:w-[900px] md:h-[240px] hd:w-[1221px] hd:h-[326px]"
            />
            <div className="absolute md:left-[260px] md:top-[533px] xl:left-[350px] xl:top-[580px] hd:left-[480px] hd:top-[874px] md:max-w-[280px] xl:max-w-[350px] hd:max-w-[450px]">
              <h3 className="text-[25px] hd:text-wrap hd:text-[36px] leading-[30px] hd:leading-[42px] font-[700]">
                {'"Станьте нашим партнером!"'}
              </h3>
              <p className="text-[19px] hd:text-[26px] hd:leading-[39px] font-[400] italic">
                Гарантируем качество и лучшие цены. Продукция напрямую от
                производителя.
              </p>
            </div>
          </div>
        </div>
      </section>
      <aside className="w-1/2 z-0"><SliderOne/></aside>
    </article>
  );
}