"use client";

import { useState, createContext } from "react";
import dynamic from "next/dynamic";
import FirstComponent from "./FirstComponent";

const Form = dynamic(() => import("./ui/form"), { ssr: false });
const BurgerMenu = dynamic(() => import("./burgerMenu"), { ssr: false });

export const FormContext = createContext();

export default function ClientWrapper({ children }) {
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
      <FirstComponent />
      {children}
      {isBurgerMenuOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
      {isFormOpen && <Form toggleForm={toggleForm} />}
    </FormContext.Provider>
  );
}
