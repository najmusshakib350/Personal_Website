"use client";
import { useDarkModeContext } from "./../context/DarkModeContext";
import { useGetResumeDataQuery } from "./../features/resume/resumeApi";
import Image from "next/image";
import Link from "next/link";
import PortfolioModal from "./portfolio_modal";
import { usePortfolioModalContext } from "./../context/PortfolioModalContext";

const Portfolio = () => {
  const { dark, darkClick } = useDarkModeContext();
  const { data, isLoading, isError, error } = useGetResumeDataQuery<any>("");
  const { portfolioModal, handlePortfolioModal } = usePortfolioModalContext();

  if (isError) {
    return <div></div>;
  } else if (isLoading) {
    return <div></div>;
  } else if (data) {
    return (
      <div className={`${dark && "dark"} `} id="portfolio">
        <div className="bg-[#f2f2f2] dark:bg-[transparent]   py-[40px] md:px-[15px]">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="inline-block">
                <h1 className="text-2xl dark:text-[#fff] text-[#000] font-roboto font-bold">
                  Portfolio
                </h1>
                <div className="w-[40px] h-[2px] bg-[#f72398] mb-2"></div>
                <div className="w-[30px] h-[2px] bg-[#f72398]"></div>
              </div>
            </div>
            {/* portfolio section */}
            <h3 className="text-[20px]  text-[#f72398] font-roboto font-bold capitalize md:pt-[60px] pt-8  text-center">
              Check Out Some of My Works.
            </h3>

            <div className="md:pt-[40px] pt-8 flex flex-col gap-6 flex-nowrap sm:flex-row sm:flex-wrap sm:gap-6 sm:justify-center lg:justify-between px-[15px] md:px-0 items-center md:items-start">
              {/* Portfolio modal component */}
              <PortfolioModal />
              {data?.portfolio?.map((item: any, i: number) => {
                return (
                  <div
                    key={i}
                    onClick={(e) => handlePortfolioModal(e, item)}
                    className="max-w-[300px] dark:bg-[#171616] bg-[#fff] rounded-lg overflow-hidden sm:basis-[40%] cursor-pointer"
                  >
                    <div className="flex justify-center">
                      <div
                        style={{ backgroundImage: `url('${item.image}')` }}
                        className=" bg-contain bg-no-repeat w-[300px] h-[200px]"
                      >
                        {" "}
                      </div>
                    </div>

                    <p className="dark:text-white text-[#000] text-[12px] font-roboto font-normal tracking-wide text-center py-3 px-[20px]">
                      {item.title}
                    </p>
                    <p className="dark:text-white text-[#000] text-[14px] font-roboto font-normal tracking-wide text-center py-3 px-[20px]"></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Portfolio;
