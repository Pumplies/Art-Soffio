import Image from "next/image";

export default function Cards({ image, text }) {
return (
    <div className="flex gap-[22px] items-center bg-gradient-to-r from-[#C4CACD99] via-[#FFFFFF99] to-[#C4CACD99] py-[6px] hd:px-[13px] rounded-lg w-[220px] h-[51px] hd:w-[380px] hd:h-[90px] pr-[36px]">
        <Image src={image} layout="intrinsic" width={80} height={80} alt="image" className="w-[45px] h-[45px] hd:w-[80px] hd:h-[80px]"/>
        <p className="text-[14px] hd:text-[24px] font-[700] leading-[15px] hd:leading-[26px] text-[#060606]">{text}</p>
        <Image src={"/galka.svg"} alt="check mark" width={20} height={20} className="w-[12px] h-[12px] hd:w-[20px] hd:h-[20px] absolute right-[14px] top-[14px]"/>
    </div>
);
}
