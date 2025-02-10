export default function FormButton({ position, text, type, onClick, scale }) {
  return (
    <button 
    type={type}
    onClick={onClick}
    className={`whitespace-nowrap py-[8px] px-[25px] md:py-[15px] md:px-[45px] hd:py-[20px] hd:px-[57px] bg-[#B90245] rounded-full max-text-[15px] md:text-[25px] xl:text-[30px] hd:text-[39px] font-[700] text-white ${position} ${scale} relative overflow-hidden`}>
      {text}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFDAE7] to-transparent opacity-20 animate-glow-smooth" />
    </button>
  );
}
