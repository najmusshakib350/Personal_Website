"use client";
import { useDarkModeContext } from "./../context/DarkModeContext";
import { useGetResumeDataQuery } from "./../features/resume/resumeApi";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dark, darkClick } = useDarkModeContext();
  const { data, isLoading, isError, error } = useGetResumeDataQuery<any>("");
  const form = useRef<any>(null);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrorMsg, setFormErrorMsg] = useState<any>({
    nameMsg: "",
    emailMsg: "",
    subjectMsg: "",
    messageMsg: "",
  });

  const handleChange = (e: ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.name === "name");
    if (e.target.name === "name") {
      setFormErrorMsg({
        ...formErrorMsg,
        nameMsg: "",
      });
    } else if (e.target.name === "email") {
      setFormErrorMsg({
        ...formErrorMsg,
        emailMsg: "",
      });
    } else if (e.target.name === "subject") {
      setFormErrorMsg({
        ...formErrorMsg,
        subjectMsg: "",
      });
    } else if (e.target.name === "message") {
      setFormErrorMsg({
        ...formErrorMsg,
        messageMsg: "",
      });
    }
  };

  const sendEmail = () => {
    if (
      !formData?.name ||
      !formData?.email ||
      !formData?.subject ||
      !formData?.message
    ) {
      setFormErrorMsg({
        ...formErrorMsg,
        nameMsg: !formData?.name ? "Name is required" : "",
        emailMsg: !formData?.email ? "Email is required" : "",
        subjectMsg: !formData?.subject ? "Subject is required" : "",
        messageMsg: !formData?.message ? "Message is required" : "",
      });
      return;
    }

    // const templateObj: any = {
    //   name: formData.name,
    //   email: formData.email,
    //   subject: formData.subject,
    //   message: formData.message,
    // };

    emailjs
      .sendForm("service_t1cevng", "template_dm4yn93", form?.current, {
        publicKey: "5ntQcS_3uQjFpPQnl",
      })
      .then(
        (res) => {
          if (res.status) {
            notification.open({
              message: "Email Sent Successfully",
              duration: 5,
              placement: "topRight",
              icon: <CheckCircleOutlined style={{ color: "#108ee9" }} />,
            });

            setFormData({
              ...formData,
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          }
        },
        (error) => {
          notification.open({
            message: "Something went wrong.",
            duration: 5,
            placement: "topRight",
            className: "custom-notification",
          });
        }
      );
  };

  // Function to be executed after debounce time
  const handleSubmit = () => {
    sendEmail();
    setIsSubmitting(false);
  };

  // Debounce function
  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    delay: number
  ): ((...args: Parameters<F>) => void) => {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<F>): void => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Debounce the form submission
  // const debouncedSubmit = customDebounce(handleSubmit, 500);
  const debouncedHandleSubmit = debounce(handleSubmit, 1000); // Adjust debounce time as needed

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    debouncedHandleSubmit();
  };

  if (isError) {
    return <div></div>;
  } else if (isLoading) {
    return <div></div>;
  } else if (data) {
    return (
      <div className={`${dark && "dark"} `} id="contact">
        <div className="bg-[#f2f2f2] dark:bg-[transparent]  py-[40px] md:px-[15px]">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="inline-block">
                <h1 className="text-2xl dark:text-[#fff] text-[#000] font-roboto font-bold">
                  Contact Me
                </h1>
                <div className="w-[40px] h-[2px] bg-[#f72398] mb-2"></div>
                <div className="w-[30px] h-[2px] bg-[#f72398]"></div>
              </div>
            </div>
            {/* contact section */}
            <div className="text-center md:pt-[60px] pt-8 ">
              <h3 className="text-[20px]  text-[#f72398] font-roboto font-bold">
                Have You Any Questions?
              </h3>
              <p className="dark:text-white text-[#000] text-[14px] font-roboto font-normal tracking-wide mt-3 text-center uppercase">
                I'm at your service
              </p>
            </div>
            {/* card section */}
            <div className="md:py-[40px] py-8 px-[15px] md:px-0 flex flex-wrap md:flex-nowrap justify-between">
              {/* one */}
              <div className="basis-1/2 md:basis-auto mb-8 md:mb-0">
                <div className="flex justify-center">
                  <FaPhone className="text-[#f72398] text-[48px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                </div>
                <h5 className="text-lg  dark:text-white text-[#000] font-roboto font-bold my-3  text-center">
                  Call Me On
                </h5>
                <p className="dark:text-white text-[#000] text-[14px] font-roboto font-normal tracking-wide text-center ">
                  {data.phone}
                </p>
              </div>
              {/* two */}
              <div className="basis-1/2 md:basis-auto  mb-8 md:mb-0">
                <div className="flex justify-center">
                  <MdLocationOn className="text-[#f72398] text-[48px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                </div>
                <h5 className="text-lg  dark:text-white text-[#000] font-roboto font-bold my-3  text-center">
                  Location
                </h5>
                <p className="dark:text-white text-[#000] text-[14px] font-roboto font-normal tracking-wide text-center ">
                  {data.location}
                </p>
              </div>
              {/* three */}
              <div className="basis-1/2 md:basis-auto">
                <div className="flex justify-center">
                  <MdEmail className="text-[#f72398] text-[48px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                </div>
                <h5 className="text-lg  dark:text-white text-[#000] font-roboto font-bold my-3  text-center">
                  Email
                </h5>
                <p className="dark:text-white text-[#000] text-[14px] font-roboto font-normal tracking-wide text-center ">
                  {data.email}
                </p>
              </div>
              {/* four */}
              <div className="basis-1/2 md:basis-auto">
                <div className="flex justify-center">
                  <CgWebsite className="text-[#f72398] text-[48px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
                </div>
                <h5 className="text-lg  dark:text-white text-[#000] font-roboto font-bold my-3  text-center">
                  Website
                </h5>
                <div className="text-center">
                  <Link
                    href={data.website}
                    className="dark:text-white text-[#000] text-[14px] font-roboto font-normal tracking-wide text-center "
                  >
                    najmus-shakib.me
                  </Link>
                </div>
              </div>
            </div>
            {/* email section */}
            <div className="text-center">
              <h3 className="text-[20px]  text-[#f72398] font-roboto font-bold">
                Send Me An Email
              </h3>
              <p className="dark:text-white text-[#000] text-[14px] font-roboto font-normal tracking-wide mt-3 text-center uppercase">
                I'm very responsive to messages
              </p>
            </div>
            <form
              className="md:pt-[40px] pt-8 flex flex-col gap-3 px-[15px] md:px-0"
              ref={form}
              onSubmit={handleFormSubmit}
            >
              <div className="flex flex-col md:flex-row   gap-3 justify-between">
                <div className="flex flex-col grow">
                  <input
                    type="text"
                    className=" dark:bg-[#171616] bg-white placeholder:text-[#ccc] dark:text-[#fff] focus:outline-none focus:ring-0 border border-gray-300 rounded-full py-2 px-4 w-full"
                    placeholder="Name"
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                  />

                  <p className=" text-[#f72398] text-base font-roboto font-bold px-4 pt-2">
                    {formErrorMsg?.nameMsg}
                  </p>
                </div>
                <div className="flex flex-col grow">
                  <input
                    type="email"
                    className="dark:bg-[#171616] bg-white placeholder:text-[#ccc] dark:text-[#fff] focus:outline-none focus:ring-0 border border-gray-300 rounded-full py-2 px-4 w-full"
                    placeholder="Email"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                  <p className=" text-[#f72398] text-base font-roboto font-bold px-4 pt-2">
                    {formErrorMsg?.emailMsg}
                  </p>
                </div>
              </div>

              <div className="flex flex-col grow">
                <input
                  type="text"
                  className="dark:bg-[#171616] bg-white placeholder:text-[#ccc] dark:text-[#fff] focus:outline-none focus:ring-0 border border-gray-300 rounded-full py-2 px-4 w-full"
                  placeholder="Subject"
                  name="subject"
                  value={formData?.subject}
                  onChange={handleChange}
                />
                <p className=" text-[#f72398] text-base font-roboto font-bold px-4 pt-2">
                  {formErrorMsg?.subjectMsg}
                </p>
              </div>
              <div className="flex flex-col grow">
                <textarea
                  value={formData?.message}
                  onChange={handleChange}
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="dark:bg-[#171616] bg-white placeholder:text-[#ccc] dark:text-[#fff] focus:outline-none focus:ring-0 border border-gray-300 rounded-md py-2 px-4 w-full"
                ></textarea>
                <p className=" text-[#f72398] text-base font-roboto font-bold px-4 pt-2">
                  {formErrorMsg?.messageMsg}
                </p>
              </div>

              <div className="text-center md:text-left pt-[10px] md:pt-0">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="inline-block bg-[#f72398] rounded-full px-[16px] py-[8px] text-white font-normal font-roboto transition duration-300 ease-in-out hover:bg-[#ff4abf]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
