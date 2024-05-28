"use client";
import { useDarkModeContext } from "./../context/DarkModeContext";
import { useGetResumeDataQuery } from "./../features/resume/resumeApi";

const Services = () => {
  const { dark, darkClick } = useDarkModeContext();
  const { data, isLoading, isError, error } = useGetResumeDataQuery<any>("");

  if (isError) {
    return <div></div>;
  } else if (isLoading) {
    return <div></div>;
  } else if (data) {
    return (
      <div className={`${dark && "dark"} `} id="services">
        <div className="bg-[#f2f2f2] dark:bg-[transparent]  py-[40px] md:px-[15px]">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="inline-block">
                <h1 className="text-2xl dark:text-[#fff] text-[#000] font-roboto font-bold">
                  Services
                </h1>
                <div className="w-[40px] h-[2px] bg-[#f72398] mb-2"></div>
                <div className="w-[30px] h-[2px] bg-[#f72398]"></div>
              </div>
            </div>
            {/* services i offer and you can expect */}
            <div className="flex gap-8 flex-col md:flex-row justify-between md:pt-[60px] pt-8 px-[15px] md:px-0">
              <div className="grow basis-[30%] dark:bg-[#171616] bg-[#fff] shadow-lg rounded-lg">
                <h1 className="dark:text-[#fff] text-[#000] text-xl font-roboto font-semibold tracking-wider mb-5 lg:px-[40px] pt-[20px] px-[10px] md:px-[15px]">
                  Services I Offer
                </h1>
                <div className=" min-h-[100px] w-full  px-[10px] mx:px-[40px] py-[15px] lg:py-[40px] md:pt-0 relative">
                  <ul className="list-disc ml-[35px] mb-3">
                    {data.services[0].SERVICES_I_OFFER.map(
                      (el: string, index: number) => {
                        return (
                          <li
                            key={index}
                            className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide md:text-justify"
                          >
                            {el}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              <div className="grow basis-[30%] dark:bg-[#171616] bg-[#fff] shadow-lg rounded-lg">
                <h1 className="dark:text-[#fff] text-[#000] text-xl font-roboto font-semibold tracking-wider mb-5  lg:px-[40px] pt-[20px] px-[10px] md:px-[15px]">
                  You Can Expect
                </h1>
                <div className=" min-h-[100px] w-full px-[10px] mx:px-[40px] py-[15px] lg:py-[40px] md:pt-0 relative">
                  <ul className="list-disc ml-[35px] mb-3">
                    {data.services[0].YOU_CAN_EXPECT.map(
                      (el: string, index: number) => {
                        return (
                          <li
                            key={index}
                            className="dark:text-[#fff] text-[#000] text-base font-roboto font-normal tracking-wide md:text-justify"
                          >
                            {el}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Services;
