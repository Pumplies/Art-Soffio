"use client";

import { motion } from "framer-motion";
import Cards from "./ui/cards";

export default function SliderCards() {
  return (
    <div className="w-[220px] h-[238px] hd:w-[300px] hd:h-[400px] absolute top-[120px] md:right-[150px] lg:top-[180px] lg:left-[200px] hd:top-[200px] right-[30px] hd:left-[100px] z-40">
      <motion.div
        className="absolute top-0 left-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <Cards image={"/coin.png"} text={"Мега продажи вместе с нами!"} />
      </motion.div>

      <motion.div
        className="absolute top-[37%] 2xl:left-[50%] transform xl:-translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <Cards image={"/fire.png"} text={`Горячие акции на топ продуктов!`} />
      </motion.div>

      <motion.div
        className="absolute bottom-0 2xl:left-[100%]"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <Cards image={"/new.png"} text={"Новинки каждый месяц!"} />
      </motion.div>
    </div>
  );
}
