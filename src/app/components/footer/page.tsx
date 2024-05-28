"use client";
import React from "react";
import { useDarkModeContext } from "./../../context/DarkModeContext";
import { useHamburgerContext } from "./../../context/HamburgerContext";

const page = () => {
  const { dark, darkClick } = useDarkModeContext();
  const { hamburger, handleHamburgerMenu } = useHamburgerContext();

  return (
    <>
      {hamburger ? (
        <div className={`${dark && "dark"} `}>
          <div className="dark:bg-[#000] bg-[#f2f2f2] dark:border-t dark:border-solid dark:border-[#333] border-t border-solid border-[#fff]">
            <div className="container mx-auto">
              <p className="dark:text-white text-[#000] text-base font-roboto font-normal py-[30px] text-center">
                © Copyright 2024 Najmus Shakib
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default page;
