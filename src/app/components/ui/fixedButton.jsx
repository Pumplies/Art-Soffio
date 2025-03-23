import Image from "next/image";
export default function FixedButton() {
  return (
    <>
      <a
        href="https://wa.me/+77478390387?text=Здравствуйте,%20я%20хочу%20узнать%20подробнее%20о%20ваших%20услугах"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <Image src="/whatsapp.svg" alt="WhatsApp" width={40} height={40} />
      </a>
    </>
  );
}
