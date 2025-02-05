import Image from "next/image";

export default function Footer() {
  return (
    <article
      id="contacts"
      className="border-t-2 px-[20px] md:px-[50px] xl:px-[100px] hd:px-[138px] pt-[40px] pb-[70px] bg-[#F3FBFF]  overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between ">
        <section className="items-center md:items-start text-center md:text-start">
          <button
            className={`p-[1px] md:p-[2px] bg-[#B90245] rounded-full text-[18px] md:text-[22px] hd:text-[25px] font-[600] relative overflow-hidden`}
          >
            <div className="bg-[#F3FBFF] w-full h-full  py-[7px] md:py-[14px] hd:py-[18px] px-[28px] md:px-[70px] hd:px-[98px] rounded-full z-30 relative">
              Получить каталог
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFDAE7] to-transparent opacity-20 animate-glow-smooth z-10" />
          </button>
          <p className="text-[16px] md:text-[25px] hd:text-[30px] font-[400] leading-[37px] mt-[14px] md:mt-[50px]">
            ART SOFFIO легкое <br className="hidden md:block" /> дуновение
            мечты!
          </p>
        </section>
        <section className="flex items-center justify-center ">
          <Image
            src={"/logoFooter.svg"}
            alt="Logo"
            width={340}
            height={195}
            className="w-[130px] h-[100px] md:w-[210px] md:h-[160px] hd:w-[340px] hd:h-[195px]"
          ></Image>
        </section>
        <section className="mt-[28px] md:mt-0 flex flex-col gap-[65px] items-center xl:items-start text-center xl:text-start">
          <div className="order-2 md:order-1">
            <p className="font-[600] text-[24px] ">МЫ В СОЦСЕТЯХ</p>
            <div className="flex gap-[28px] mt-[15px] md:mt-[42px]">
              <a
                href="https://www.instagram.com/artsoffio?igsh=MWc2b3lkZWNlcGs5dw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={63}
                  height={63}
                />
              </a>
              <a
                href="https://youtube.com/@artsoffio?si=EpL9VpgLGHp9AVNo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={63}
                  height={63}
                />
              </a>
              <a
                href="https://t.me/artsoffio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/telegram.svg"
                  alt="Telegram"
                  width={63}
                  height={63}
                />
              </a>
            </div>
          </div>
          <div className="order-1 hd:order-2 ">
            <hr className="visible md:hidden w-screen mb-[18px]" />
            <p className="font-[600] text-[24px]">КОНТАКТЫ</p>
            <div className="flex mb-[7px] md:mb-0 gap-[30px] mt-[42px] pl-[45px] md:px-0">
              <Image
                src={"/mail.svg"}
                alt="mail"
                width={22}
                height={22}
              ></Image>
              <a
                href="mailto:artsoffio@hotmail.com?subject=Запрос%20на%20сотрудничество&body=Здравствуйте,%20хочу%20обсудить%20сотрудничество."
                className="underline font-[600] text-[22px]"
              >
                artsoffio@hotmail.com
              </a>
            </div>
            <div className="flex gap-[30px] pl-[45px] md:px-0">
              <Image
                src={"/phoneNumber.svg"}
                alt="mail"
                width={22}
                height={22}
              ></Image>
              <p className="font-[600] text-[22px]">+7 (747) 839 03 87</p>
            </div>
            <hr className="visible md:hidden w-screen mt-[18px] " />
          </div>
        </section>
      </div>
      <div className="flex flex-col md:flex-row justify-end text-[14px] md:text-[20px] md:gap-[90px] mt-[100px] text-center">
        <button>Политика конфиденциальности</button>
        <span>© 2024 Artsoffio. Все права защищены </span>
      </div>
    </article>
  );
}
