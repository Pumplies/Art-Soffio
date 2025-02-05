import Image from "next/image";
import SliderCards from "../sliderCards";

export default function SecondSlide({ isMobile }) {
  return (
    <div className="relative w-full h-full">
          {isMobile ? (
            <Image src={"/slide2-mobile.svg"} height={1100} width={1000} alt="Слайд для мобильных устройств" />
          ) : (
            <Image src={"/slide2.svg"} height={1100} width={1000} alt="Слайд для десктопа" className="md:h-[700px] md:w-[650px] hd:h-[1100px] hd:w-[1000px]"/>
          )}
          <SliderCards />
        </div>
  );
}
