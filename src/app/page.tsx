"use client";

import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import ScrollToTopButton from "./components/bottom_to_top/page";
import { useHamburgerContext } from "./context/HamburgerContext";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { useGetResumeDataQuery } from "./features/resume/resumeApi";
import { LoadingOutlined } from "@ant-design/icons";

export default function Page() {
  const { hamburger, handleHamburgerMenu } = useHamburgerContext();
  const { data, isLoading, isError, error } = useGetResumeDataQuery<any>("");

  if (isError) {
    return <div></div>;
  } else if (isLoading) {
    return (
      <div className="text-[#fff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {" "}
        <LoadingOutlined className="text-[96px] sm:text-[124px] text-[#f72398]" />
      </div>
    );
  } else if (data) {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <ScrollToTopButton />
        <Footer />
      </div>
    );
  }
}
