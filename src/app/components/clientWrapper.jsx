"use client";

import { useState, createContext } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import FirstComponent from "./FirstComponent";
import Header from "./header";
import Footer from "./footer";

const Form = dynamic(() => import("./ui/form"), { ssr: false });
const BurgerMenu = dynamic(() => import("./burgerMenu"), { ssr: false });

export const FormContext = createContext();

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <FormContext.Provider value={{ toggleForm, toggleBurgerMenu }}>
      {pathname !== "/privacy-policy" && <Header />}
      {pathname !== "/privacy-policy" && <FirstComponent />}
      {children}
      {isBurgerMenuOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
      {isFormOpen && <Form toggleForm={toggleForm} />}
      {pathname !== "/privacy-policy" && <Footer />}
    </FormContext.Provider>
  );
}
