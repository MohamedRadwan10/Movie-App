"use client";
import React from "react";
import dynamic from "next/dynamic";
import animation from "../../public/notfound.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        autoplay={true}
        speed={1.5}
        loop={false}
        style={{ width: "45%", height: "45%" }}
        animationData={animation}
      />
    </div>
  );
};

export default NotFound;
