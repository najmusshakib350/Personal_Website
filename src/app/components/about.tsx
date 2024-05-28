"use client";
import React from "react";
import { Flex, Progress } from "antd";
import Link from "next/link";
import { useGetResumeDataQuery } from "./../features/resume/resumeApi";

import { useDarkModeContext } from "./../context/DarkModeContext";
const About = () => {
  const { dark, darkClick } = useDarkModeContext();
  const { data, isLoading, isError, error } = useGetResumeDataQuery<any>("");

  if (isError) {
    return <div></div>;
  } else if (isLoading) {
    return <div></div>;
  } else if (data) {
    return (
      <div className={`${dark && "dark"} `} id="about">
        <div className="bg-[#f2f2f2] dark:bg-[transparent]   py-[40px] md:px-[15px]">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="inline-block">
                <h1 className="text-2xl dark:text-[#fff] text-[#000] font-roboto font-bold">
                  About Me
                </h1>
                <div className="w-[40px] h-[2px] bg-[#f72398] mb-2"></div>
                <div className="w-[30px] h-[2px] bg-[#f72398]"></div>
              </div>
            </div>
            <h5 className="dark:text-white text-[#000] text-xl font-roboto font-semibold tracking-wider mt-5 md:mt-[60px] px-[15px] md:px-0">
              I'm {data.name} and{" "}
              <span className="text-[#f72398] font-bold">
                {data.designation[3]}
              </span>
            </h5>
            <p className="dark:text-white text-[#000] text-base font-roboto font-normal tracking-wide my-6 text-justify px-[15px] md:px-0">
              {data.about_me_long_description}
            </p>
            <div className="flex gap-10 md:gap-20 flex-col md:flex-row justify-between">
              <div className="basis-full md:basis-1/2">
                <ul className="flex flex-col h-auto lg:h-[200px] flex-nowrap md:flex-wrap gap-6 px-[15px] md:px-0">
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold ">
                    Birthday:{" "}
                    <span className="font-normal">{data.birthday}</span>
                  </li>
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold">
                    Website: <span className="font-normal">{data.website}</span>
                  </li>
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold">
                    Degree: <span className="font-normal">{data.degree}</span>
                  </li>
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold">
                    City: <span className="font-normal">{data.city}</span>
                  </li>
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold">
                    Age: <span className="font-normal">{data.age}</span>
                  </li>
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold">
                    Email: <span className="font-normal">{data.email}</span>
                  </li>
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold">
                    Phone: <span className="font-normal">{data.phone}</span>
                  </li>
                  <li className="dark:text-white text-[#000] text-base font-roboto font-bold">
                    Freelance:{" "}
                    <span className="font-normal">{data.freelance}</span>
                  </li>
                </ul>
                <div className="flex gap-4 mt-8 md:mt-0 justify-center md:justify-start md:pt-6">
                  <Link
                    href={`${data.resume}`}
                    className="bg-[#f72398] rounded-full px-[20px] py-[8px] text-white font-normal font-roboto transition duration-300 ease-in-out hover:bg-[#ff4abf]"
                  >
                    Download CV
                  </Link>
                  <Link
                    href="#contact"
                    className="bg-[#f72398] rounded-full px-[20px] py-[8px] text-white font-normal font-roboto transition duration-300 ease-in-out hover:bg-[#ff4abf]"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>

              <div className="basis-full md:basis-1/2">
                <Flex gap="small" vertical className="px-[15px] md:px-0">
                  {data.skills.map(
                    (item: { name: string; percentage: string }) => {
                      return (
                        <div key={item.name}>
                          <div className="flex justify-between">
                            <p className="dark:text-white text-[#000] text-base font-roboto font-bold">
                              {item.name}
                            </p>
                            <p className="dark:text-white text-[#000] text-base font-roboto font-bold">
                              {item.percentage}
                            </p>
                          </div>
                          <Progress
                            percent={parseInt(
                              item.percentage.substring(
                                0,
                                item.percentage.length - 1
                              )
                            )}
                            showInfo={false}
                            strokeColor="#f72398"
                          />
                        </div>
                      );
                    }
                  )}
                </Flex>
              </div>
            </div>
            {/* education and experience */}
            <div className="flex gap-8 flex-col md:flex-row justify-between pt-[60px] px-[15px] md:px-0">
              <div className="grow basis-[30%] dark:bg-[#171616] bg-[#fff] shadow-lg rounded-lg">
                <h1 className="dark:text-[#fff] text-[#000] text-xl font-roboto font-semibold tracking-wider mb-5 lg:px-[40px] pt-[20px] px-[15px]">
                  Education
                </h1>
                <div className=" min-h-[100px] w-full  lg:px-[40px]  px-[15px] relative pb-[20px] md:pt[40px] md:pb-[40px]">
                  <div className="flex w-full gap-3">
                    <div className="w-[18px] relative">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#f72398]">
                        {" "}
                        <div className="w-[5px] h-full absolute top-0 left-1/2 -translate-x-1/2 bg-[#f72398]"></div>
                      </div>
                    </div>
                    {data.education.map((item: any, index: number) => {
                      return (
                        <div className="grow" key={index}>
                          <h5 className=" dark:text-[#fff] text-[#000] text-[18px] font-roboto font-semibold tracking-wider ">
                            {item.degreeName}
                          </h5>
                          <p className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide text-justify">
                            {item.universityName}
                          </p>
                          <p className=" dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide flex flex-col lg:flex-row justify-between">
                            <span>{item.cgpa}</span>
                            <span>{item.year}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="grow basis-[30%] dark:bg-[#171616] bg-[#fff] shadow-lg rounded-lg">
                <h1 className="dark:text-[#fff] text-[#000] text-xl font-roboto font-semibold tracking-wider mb-5  lg:px-[40px] pt-[20px] px-[15px]">
                  Experience
                </h1>
                <div className=" min-h-[100px] w-full  lg:px-[40px]  px-[15px] relative pb-[20px] md:pt[40px] md:pb-[40px]">
                  {data.experience.map((item: any, index: number) => {
                    return (
                      <div className="flex w-full gap-3" key={index}>
                        <div className="w-[18px] relative">
                          <div className="w-[18px] h-[18px] rounded-full bg-[#f72398]">
                            {" "}
                            <div className="w-[5px] h-full absolute top-0 left-1/2 -translate-x-1/2 bg-[#f72398]"></div>
                          </div>
                        </div>
                        <div className="grow">
                          <h5 className=" dark:text-[#fff] text-[#000] text-[18px] font-roboto font-semibold tracking-wider ">
                            {item.designation}
                          </h5>
                          <p className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide text-justify">
                            {item.organizationName ? item.organizationName : ""}
                          </p>
                          <p className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide text-justify">
                            {item.date}
                          </p>
                          <p className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide text-justify">
                            Responsibilities
                          </p>

                          <ul className="list-disc ml-[35px] mb-3">
                            {item.responsibilities.map(
                              (el: any, index: number) => {
                                return (
                                  <li
                                    key={index}
                                    className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide text-justify"
                                  >
                                    {el}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                          <p className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide text-justify">
                            {item?.contact_person ? item?.contact_person : ""}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
