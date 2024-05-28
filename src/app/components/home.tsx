"use client";
import React from "react";
import { useDarkModeContext } from "./../context/DarkModeContext";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import { useGetResumeDataQuery } from "./../features/resume/resumeApi";

const Home = () => {
  const { dark, darkClick } = useDarkModeContext();
  const { data, isLoading, isError, error } = useGetResumeDataQuery<any>("");

  if (isError) {
    return <div></div>;
  } else if (isLoading) {
    return <div></div>;
  } else if (data) {
    return (
      <div className={`${dark && "dark"} `} id="home">
        <div className="bg-[#f2f2f2] dark:bg-[transparent]  py-[40px] md:px-[15px]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row  items-center">
              <div className="basis-full md:basis-1/2 order-2 md:order-1">
                <h5 className="dark:text-white text-[#000] text-xl font-roboto font-semibold tracking-wider text-center md:text-left">
                  Hello, my name is{" "}
                  <span className="text-[#f72398] font-bold">{data.name}</span>
                </h5>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <h5 className="dark:text-white text-[#000] text-xl font-roboto font-semibold tracking-wider my-5 ">
                    I'm a{" "}
                    {/* <span className="text-[#f27907] font-bold">Web Developer</span> */}
                  </h5>
                  <Typewriter
                    options={{
                      strings: data.designation,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <p className="dark:text-white text-[#000] text-base font-roboto font-normal tracking-wide mb-5 md:w-[80%] text-justify mx-auto md:mx-0  px-[15px] md:px-0">
                  {data.about_me_short_description}
                </p>
                <div className="flex gap-3 mb-8 justify-center md:justify-start">
                  <Link href={`${data.facebook}`}>
                    {" "}
                    <FaFacebookF className="text-[#f72398] text-[36px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                  </Link>
                  <Link href={`${data.linkedin}`}>
                    {" "}
                    <FaLinkedinIn className="text-[#f72398] text-[36px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                  </Link>
                  <Link href={`${data.github}`}>
                    {" "}
                    <FiGithub className="text-[#f72398] text-[36px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                  </Link>
                  <Link href={`${data.youtube}`}>
                    {" "}
                    <IoLogoYoutube className="text-[#f72398] text-[36px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                  </Link>
                </div>
                <div className="text-center md:text-start">
                  <Link
                    href="#about"
                    className="bg-[#f72398] rounded-full px-[16px] py-[8px] text-white font-normal font-roboto transition duration-300 ease-in-out hover:bg-[#ff4abf]"
                  >
                    More About Me
                  </Link>
                </div>
              </div>
              <div className="basis-full md:basis-1/2 order-1 md:order-2 mb-8 md:mb-0">
                <div className="flex justify-center">
                  <div className="w-[300px] h-[300px] border border-solid border-[#f72398] flex justify-center items-center rounded-full">
                    <div className="bg-home-page-bg w-full h-full bg-cover bg-no-repeat"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
