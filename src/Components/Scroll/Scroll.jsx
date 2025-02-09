"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <div>
      {scroll && (
        <Link href="#Up">
          <button
            onClick={() => handleScrollToTop()}
            className={`fa-solid fa-hand-pointer scroll fixed bottom-5 right-5 sm:bottom-10 sm:right-10
                 p-2 sm:p-3 text-lg sm:text-xl md:text-2xl font-bold
                 bg-blue-500 text-white rounded-3xl opacity-100 transition-opacity duration-300 hover:bg-blue-400 ${
                   scroll ? "opacity-100" : "opacity-0"
                 }`}
            aria-label="Scroll to top"
          >
            ^
          </button>
        </Link>
      )}
    </div>
  );
};

export default Scroll;
