"use client";
import { createContext, useContext, useState } from "react";

type hamburgerType = any;

const HamburgerContext = createContext<hamburgerType>(true);

export function HamburgerWrapper({ children }: { children: React.ReactNode }) {
  const [hamburger, setHamburger] = useState<hamburgerType>(true);
  function handleHamburgerMenu(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setHamburger(!hamburger);
  }

  return (
    <HamburgerContext.Provider
      value={{ hamburger: hamburger, handleHamburgerMenu: handleHamburgerMenu }}
    >
      {children}
    </HamburgerContext.Provider>
  );
}

export function useHamburgerContext() {
  return useContext(HamburgerContext);
}
