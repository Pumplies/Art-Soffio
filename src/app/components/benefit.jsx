"use client";
import { useContext } from "react";
import { FormContext } from "./clientWrapper";
import AcordeonCard from "./ui/acordeonCard";
import FormButton from "./ui/formButton";
import Form from "./ui/form";

export default function Benefit() {
  const { toggleForm } = useContext(FormContext);

  return (
    <section className="pt-[73px] md:pt-[150px] hd:pt-[195px] pb-[50px] hd:pb-[208px] pr-[30px] md:pr-[60px] hd:pr-[138px]">
      <h3 className="text-end hd:text-[text-start] text-[38px] md:text-[65px] hd:text-[82px] font-[600] mb-[60px] leading-[40px] md:leading-[67px] hd:leading-[85px]">
        Почему <span className="text-[#F55E79]">выгодно</span> сотрудничать{" "}
        <br /> с нами?
      </h3>
      <article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[45px]">
        <AcordeonCard
          title="Гибкие условия"
          text="Мы предлагаем индивидуальный подход к каждому партнеру, адаптируя условия сотрудничества в зависимости от ваших потребностей. Это позволяет находить наиболее удобные решения для бизнеса любого масштаба."
        />
        <AcordeonCard
          title="Специальные цены"
          text="Оптовые клиенты ART SOFFIO получают эксклюзивные предложения и выгодные цены на весь ассортимент, включая акции на популярные продукты, которые эффективно поднимают продажи."
        />
        <AcordeonCard
          title="Поддержка маркетинга"
          text="Мы помогаем нашим партнерам продвигать продукцию, предоставляя материалы для маркетинговых кампаний и рекламных активностей. Это делает сотрудничество с ART SOFFIO еще более эффективным."
        />
        <AcordeonCard
          title="Товар сертифицирован"
          text="Вся наша продукция соответствует международным стандартам качества и имеет необходимые сертификаты, что гарантирует безопасность и надежность косметики ART SOFFIO."
        />
        <AcordeonCard
          title="Ингредиентный состав"
          text="Мы тщательно подбираем ингредиенты, используя натуральные компоненты, которые заботятся о здоровье кожи и создают долговременный эффект красоты."
        />
        <AcordeonCard
          title="Большая палитра оттенков"
          text="ART SOFFIO предлагает широкий выбор оттенков и текстур, чтобы каждый клиент мог найти свою палитру оттенков. Это позволяет вам удовлетворить запросы самых требовательных покупателей."
        />
      </article>
      <div className="flex justify-center pt-[50px]">
        <FormButton text={"Оформить заявку"} onClick={toggleForm} scale={"scale-125"} />
      </div>
    </section>
  );
}
