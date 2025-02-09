"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import animation1 from "../../public/error.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const error = ({ error, reset }) => {
  useEffect(() => {
    reset();
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-blue-600" onClick={() => reset()}>
        Try Again
      </button>

      <div className="flex items-center justify-center">
        <Lottie
          autoplay={true}
          speed={1.5}
          loop={false}
          style={{ width: "45%", height: "45%" }}
          animationData={animation1}
        />
      </div>
    </div>
  );
};

export default error;
