import Image from "next/image";
export default function AboutUsSection() {
  return (
    <article id="about" className="flex flex-col items-center relative">
      <Image
        src={"/bgLogo.svg"}
        alt="Logo"
        width={530}
        height={530}
        className="absolute top-[100px] md:top-[220px] hd:top-[290px] md:w-[400px] md:h-[400px] hd:w-[530px] hd:h-[530px] w-[153px] h-[153px]"
      ></Image>
      <section className="flex flex-col gap-[16px] hd:gap-[62px]">
        <h2 className="text-[40px] font-[600] sm:font-[500] md:text-[65px] hd:text-[82px] hd:font-[500] text-[#597E72] text-center">
          О нас
        </h2>
        <p className="text-[14px] leading-[16px] md:leading-[30px] md:text-[25px] hd:text-[32px] hd:leading-[39px] text-center">
          ART SOFFIO занимается оптовыми продажами косметики,
          <br /> созданной для тех, кто ценит надежность, сервис и красоту.{" "}
          <br />
          <br />
          Мы предлагаем современные решения для макияжа, сочетая <br />{" "}
          трендовые оттенки, инновации, качество и цену. <br />
          <br />
          ART SOFFIO — ваш надёжный партнёр в увеличении продаж <br /> и
          расширении клиентской аудитории.{" "}
        </p>
      </section>
      <hr className="hidden md:block w-[40%] bg-[#597E72] md:h-[2.5px] hd:h-[3px] my-[71px]" />
      <section className="mt-[26px] hd:mt-[0px] flex flex-col md:flex-row justify-between gap-[34px] md:gap-[120px] hd:gap-[146px] items-center">
        <div className="text-center relative z-0">
        <Image src={"/leftRectangle.svg"} alt="Rectangle" width={60} height={35} className="absolute top-[7px] left-[7px] md:top-[13px] md:left-[-1px] hd:top-[20px] hd:left-[-10px] w-[37px] h-[22px] md:w-[55px] md:h-[32px] hd:w-[60px] hd:h-[35px]" style={{ zIndex: -1 }}></Image>
          <h4 className="text-[40px] md:text-[65px] hd:text-[82px] font-[600] text-nowrap">1500+</h4>
          <p className="text-[20px] md:text-[28px] hd:text-[32px] leading-[20px] md:leading-[38px] hd:leading-[48px]">
            наименований <br /> продуктов
          </p>
        </div>
        <div className="text-center relative z-0">
            <Image src={"/centerRectangle.svg"} alt="Rectangle" width={60} height={35} className="absolute top-[7px] left-[-4px] md:top-[13px] md:left-[-13px] hd:top-[20px] hd:left-[-10px] w-[37px] h-[22px] md:w-[55px] md:h-[32px] hd:w-[60px] hd:h-[35px]" style={{ zIndex: -1 }}></Image>
          <h4 className="text-[40px] md:text-[65px] hd:text-[82px] font-[600] text-nowrap">20 лет</h4>
          <p className="text-[20px] md:text-[28px] hd:text-[32px] leading-[20px] md:leading-[38px] hd:leading-[48px]">
            {" "}
            опыта на <br />
            рынке
          </p>
        </div>
        <div className="text-center relative z-0">
        <Image src={"/rightRectangle.svg"} alt="Rectangle" width={60} height={35} className="absolute top-[7px] left-[7px] md:top-[13px] md:left-[-7px] hd:top-[20px] hd:left-[-10px] w-[37px] h-[22px] md:w-[55px] md:h-[32px] hd:w-[60px] hd:h-[35px]" style={{ zIndex: -1 }}></Image>
          <h4 className="text-[40px] md:text-[65px] hd:text-[82px] font-[600] text-nowrap">2000+</h4>
          <p className="text-[20px] md:text-[28px] hd:text-[32px] leading-[20px] md:leading-[38px] hd:leading-[48px]">
            <span className="md:text-nowrap">партнеров уже</span> <br /> доверяют
          </p>
        </div>
      </section>
    </article>
  );
}
