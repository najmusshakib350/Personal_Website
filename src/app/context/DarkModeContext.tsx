"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Darkmodetype = any;

const DarkModeContext = createContext<Darkmodetype>(true);

export function DarkModeWrapper({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<Darkmodetype>(true);
  const handleClick = () => {
    setState(!state);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setState(true);
    }
  }, []);
  useEffect(() => {
    if (state) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [state]);
  return (
    <DarkModeContext.Provider value={{ dark: state, darkClick: handleClick }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}
