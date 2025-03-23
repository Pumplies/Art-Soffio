import Image from "next/image";

export default function ReviewsCard({ name, product, text }) {
  return (
    <section className="flex flex-col w-full h-full hd:p-6 box-border max-w-[350px] md:max-w-[650px] lg:max-w-[1000px] xl:max-w-[1400px] hd:max-w-[1600px]">
      <div className="mb-[23px] hd:mb-4">
        <h4 className="text-[16px] md:text-[30px] hd:text-[50px] font-[600] truncate">{name}</h4>
        <p className="text-[12px] md:text-[20px] hd:text-[32px] font-[400] truncate">{product}</p>
        <Image src="/stars.svg" alt="stars" width={170} height={30} className="w-[76px] h-[14px] md:w-[120px] md:h-[22px] hd:w-[170px] hd:h-[30px]" />
      </div>
      <div className="flex-1">
        <p className="text-[16px] md:text-[26px] hd:text-[44px] font-[500] leading-[1.5] break-words word-wrap italic">
          {text}
        </p>
      </div>
    </section>
  );
}
