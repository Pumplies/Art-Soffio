import Image from "next/image"
import SliderCards from "../sliderCards";


export default function ThirdSlide({ isMobile }) {
    return (
        <div className="relative w-full h-full">
              {isMobile ? (
                <Image src={"/slide3-mobile.svg"} height={1100} width={1000} priority alt="Слайд для мобильных устройств" />
              ) : (
                <Image src={"/slide3.svg"} height={1100} width={1000} priority alt="Слайд для десктопа" className="md:h-[700px] md:w-[650px] hd:h-[1100px] hd:w-[1000px]"/>
              )}
              <SliderCards />
            </div>
    )
}