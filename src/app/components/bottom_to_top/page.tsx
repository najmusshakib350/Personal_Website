"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  // Function to handle scrolling to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      type="button"
      className="fixed right-[20px] bottom-[20px] "
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-[#f72398] text-[44px] p-[8px] hover:p-[6px]  rounded-full border border-solid border-[#f72398]" />
    </button>
  );
}
