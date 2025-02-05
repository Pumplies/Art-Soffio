import Image from "next/image";
import Cards from "./ui/cards";

export default function SliderCards() {
  return (
    <div className="w-[220px] h-[238px] hd:w-[300px] hd:h-[400px] absolute top-[120px] md:top-[180px] md:left-[200px] hd:top-[200px] right-[30px] hd:left-[200px] z-40">
      <div className="absolute top-0 left-0">
        <Cards image={"./coin.svg"} text={"Мега продажи вместе с нами!"} />
      </div>
      <div className="absolute top-[50%] xl:left-[110%] transform xl:-translate-x-1/2 -translate-y-1/2">
        <Cards image={"./fire.svg"} text={`Горячие акции на  топ продуктов!`} />
      </div>
      <div className="absolute bottom-0 xl:left-[100%]">
        <Cards image={"./new.svg"} text={"Новинки каждый месяц!"} />
      </div>
    </div>
  );
}
