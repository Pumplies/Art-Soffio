import Image from "next/image";
export default function FixedButton() {
  return (
    <>
      <a
        href="https://wa.me/+77478390387?text=Здравствуйте!%20Интересует%20ваше%20предложение. %0AХочу%20получить%20консультацию%20по%20товару%20и%20оформить%20заказ."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <Image src="/whatsapp.svg" alt="WhatsApp" width={40} height={40} />
      </a>
    </>
  );
}
