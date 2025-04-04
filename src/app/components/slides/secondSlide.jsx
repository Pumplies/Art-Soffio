import Image from "next/image";
import SliderCards from "../sliderCards";

export default function SecondSlide({ isMobile }) {
  return (
    <div className="relative w-full h-full">
          {isMobile ? (
            <Image src={"/slide2-mobile.png"} height={700} width={1000} priority alt="Слайд для мобильных устройств" className="object-contain w-full h-auto md:h-[650px]"  onDragStart={(e) => e.preventDefault()}/>
          ) : (
            <Image src={"/slide2.png"} height={1100} width={1000} priority alt="Слайд для десктопа" className="object-contain w-full lg:h-[700px] hd:h-[1100px]"  onDragStart={(e) => e.preventDefault()}/>
          )}
          <SliderCards />
        </div>
  );
}
