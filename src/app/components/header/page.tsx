"use client";
import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Link from "next/link";
import { useDarkModeContext } from "./../../context/DarkModeContext";
import { useHamburgerContext } from "./../../context/HamburgerContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

const navMenu = [
  {
    name: "Home",
    pathName: "#home",
  },
  {
    name: "About",
    pathName: "#about",
  },
  {
    name: "Services",
    pathName: "#services",
  },
  {
    name: " Portfolio",
    pathName: "#portfolio",
  },
  {
    name: "Contact",
    pathName: "#contact",
  },
];

const page = () => {
  const [header, setHeader] = useState<Boolean>(false);
  const { dark, darkClick } = useDarkModeContext();
  const { hamburger, handleHamburgerMenu } = useHamburgerContext();

  const scrollHeader = () => {
    if (window.scrollY >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div className={`${dark && "dark"} `}>
      {/* mobile menu code start */}
      {!hamburger && (
        <ul
          className={`fixed z-30 w-[200px]  md:relative h-screen md:h-auto   transition-all duration-500 ease-in-out flex gap-4 flex-col md:flex-row   md:w-auto px-[15px] md:px-0 dark:bg-[#fff] bg-[#000] bg-opacity-95 md:bg-[transparent] pt-[15px] md:pt-0`}
        >
          {!hamburger && (
            <div className="flex justify-between">
              <li>
                <button
                  type="button"
                  className=""
                  onClick={() => darkClick(!dark)}
                >
                  {dark ? (
                    <MdLightMode className="dark:text-[#000] text-[#fff] text-[24px] dark:hover:text-[#f72398] hover:text-[#f72398]" />
                  ) : (
                    <MdDarkMode className="dark:text-[#000] text-[#fff] text-[24px]  dark:hover:text-[#f72398] hover:text-[#f72398] " />
                  )}
                </button>
              </li>
              <button
                className="md:hidden"
                type="button"
                onClick={handleHamburgerMenu}
              >
                <RxCross2 className="text-[#f72398] text-[30px]" />
              </button>
            </div>
          )}
          {navMenu.map((item, i) => {
            return (
              <li key={item.name}>
                <Link
                  onClick={handleHamburgerMenu}
                  href={`${item.pathName}`}
                  className="dark:text-[#000] text-[#fff] font-roboto text-base font-[500] transition duration-300 ease-in-out dark:hover:text-[#f72398] hover:text-[#f72398] "
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {/* mobile menu code end  */}

      <div
        className={
          header
            ? "md:px-[15px] z-10 fixed w-full md:py-[8px] dark:bg-[#333] bg-[#eaeaea] dark:border-b dark:border-solid dark:border-[#333] border-b border-solid border-[#fff]"
            : "md:px-[15px] dark:bg-[transparent] bg-[#f2f2f2] md:py-[8px] dark:border-b dark:border-solid dark:border-[#333] border-b border-solid border-[#fff]"
        }
      >
        <div
          className={`container mx-auto flex flex-col md:flex-row justify-between md:items-center `}
        >
          {/* Logo  */}
          <div className="flex justify-between items-center w-full md:w-auto px-[15px] md:px-0 bg-[transparent] py-1 md:py-0">
            <Link
              href="/"
              className="text-[#000] dark:text-white  font-roboto text-[36px] font-semibold cursor-pointer"
            >
              <div className="relative">
                <h5 className="text-[#f72398]  text-xl font-roboto font-semibold tracking-wider text-center md:text-left pl-2 pr-2">
                  SHAKIB
                </h5>
                <div className="absolute top-0 left-0">
                  <div className=" bg-[#f72398] w-4 h-[2px]"></div>
                  <div className=" bg-[#f72398] w-[2px] h-4"></div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className=" bg-[#f72398] w-[2px] h-4"></div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className=" bg-[#f72398] w-4 h-[2px]"></div>
                </div>
              </div>
            </Link>
            {hamburger && (
              <button
                className="md:hidden"
                type="button"
                onClick={handleHamburgerMenu}
              >
                <RxHamburgerMenu className="text-[#f72398] text-[30px] " />
              </button>
            )}
          </div>

          {/* Menu */}
          {hamburger && (
            <ul
              className={`hidden h-full md:h-auto border-t border-solid border-[#ccc] md:border-none transition-all duration-500 ease-in-out md:flex gap-4 flex-col md:flex-row  w-1/2 md:w-auto px-[15px] md:px-0 bg-[#fff] md:bg-[transparent] pt-[15px] md:pt-0`}
            >
              {navMenu.map((item, i) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={`${item.pathName}`}
                      className="text-[#000]  md:dark:text-white  font-roboto text-base font-[500] transition duration-300 ease-in-out dark:hover:text-[#f72398] hover:text-[#f72398] "
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              <li>
                <button
                  type="button"
                  className=""
                  onClick={() => darkClick(!dark)}
                >
                  {dark ? (
                    <MdLightMode className="text-[#000] md:text-white text-[24px] dark:hover:text-[#f72398] hover:text-[#f72398]" />
                  ) : (
                    <MdDarkMode className="text-[#000] text-[24px] dark:hover:text-[#f72398] hover:text-[#f72398] " />
                  )}
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
