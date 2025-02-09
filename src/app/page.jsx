import Image from "next/image";
import { cards } from "@/data/cards";

import AboutUsSection from "./components/aboutUsSection";
import Benefit from "./components/benefit";
import OurProducts from "./components/ourProducts";
import Catalog from "./components/catalog";
import Reviews from "./components/reviews";
import Certificates from "./components/certificates";











export default function Home() {
  return (
    <div className="overflow-hidden pl-[30px] md:pl-[60px] hd:pl-[138px] pt-[50px] hd:pt-[200px] max-w-screen bg-[#F3FBFF] pb-[140px]">
      <AboutUsSection/>
      <Benefit/>
      <OurProducts cards={cards}/>
      <Catalog/>
      <Reviews/>
      <Certificates/>
    </div>
  );
}
