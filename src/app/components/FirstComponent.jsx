"use client"
import { useState, useEffect, useContext } from "react";
import SectionOne from "./sectionOne";
import SectionOneMobile from "./sectionOneMobile";
import { FormContext } from "./clientWrapper";

export default function FirstComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const { toggleForm } = useContext(FormContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Вызов при монтировании
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <SectionOneMobile toggleForm={toggleForm} />
  ) : (
    <SectionOne toggleForm={toggleForm} />
  );
}