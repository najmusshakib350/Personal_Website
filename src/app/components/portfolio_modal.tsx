import { RxCross2 } from "react-icons/rx";
import { usePortfolioModalContext } from "./../context/PortfolioModalContext";
import Image from "next/image";
import Link from "next/link";
import { useDarkModeContext } from "./../context/DarkModeContext";
import { useGetResumeDataQuery } from "./../features/resume/resumeApi";

const PortfolioModal = () => {
  const { modalState, portfolioModal, handlePortfolioModal } =
    usePortfolioModalContext();
  const { dark, darkClick } = useDarkModeContext();
  const { data, isLoading, isError, error } = useGetResumeDataQuery<any>("");

  if (isLoading) {
    return <div></div>;
  } else if (isError) {
    return <div></div>;
  } else if (data) {
    return (
      <div
        className={`${dark && "dark"} ${
          portfolioModal ? "block" : "hidden"
        } overflow-scroll  md:overflow-hidden w-full h-full dark:bg-[#fff]  bg-[#000] bg-opacity-50 dark:bg-opacity-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
      >
        <div className="overflow-scroll md:overflow-hidden mt-[100px] md:mt-0 md:w-full lg:w-[800px] min-h-[400px] w-full   dark:bg-[#fff] bg-[#000] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:p-[20px] p-[24px]">
          <button
            type="button"
            className="absolute top-[5px] right-[5px]"
            onClick={handlePortfolioModal}
          >
            <RxCross2 className="text-[#f72398] md:text-[24px] text-[20px]" />
          </button>

          <div className="flex gap-2 flex-col md:flex-row">
            {/* Image  */}
            <div className="basis-auto">
              <div className="border border-solid border-[#f72398]  max-w-fit">
                {modalState?.image ? (
                  <Image
                    src={`${modalState?.image}`}
                    alt={`${modalState?.title}`}
                    width={400}
                    height={400}
                    className="w-auto h-auto"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="grow">
              <div className="mb-2">
                <h3 className="text-[16px] dark:text-[#000] text-[#fff] font-roboto font-bold text-justify">
                  Title:{" "}
                  <span className=" dark:text-[#000] text-[#fff]  text-[14px] font-roboto  font-normal">
                    {modalState?.title}
                  </span>
                </h3>
              </div>

              <div className=" mb-2">
                <h3 className="text-[16px]  dark:text-[#000] text-[#fff]  font-roboto font-bold text-justify flex flex-wrap gap-1 ">
                  Technology:{" "}
                  {modalState?.technologies?.map((item: string, i: number) => {
                    return (
                      <span
                        key={i}
                        className="text-[#fff]  text-[14px] font-roboto bg-[#f72398]  font-normal  rounded-full py-[2px] px-3 "
                      >
                        {item}
                      </span>
                    );
                  })}
                </h3>
              </div>

              <div className=" mb-2">
                <h3 className="text-[16px] dark:text-[#000] text-[#fff]  font-roboto font-bold  text-justify">
                  Duration:{" "}
                  <span className="dark:text-[#000] text-[#fff]  text-[14px] font-roboto font-normal">
                    {modalState?.duration}
                  </span>
                </h3>
              </div>
              <div className=" mb-2">
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`${modalState?.url}`}
                  className="bg-[#f72398] rounded-full text-[14px] px-[14px] py-[6px] text-white font-normal font-roboto transition duration-300 ease-in-out hover:bg-[#ff4abf]"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="mt-2">
            <h3 className="text-[16px] dark:text-[#000] text-[#fff]  font-roboto font-bold text-justify">
              Description:{" "}
              <span className=" dark:text-[#000] text-[#fff]  text-[14px] font-roboto font-normal text-justify">
                {modalState?.description}
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
};

export default PortfolioModal;
