import React from "react";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex items-center bg-gray-700 justify-center h-screen">
      <Image
        className="h-52"
        src="./spinner.svg"
        alt="loading..."
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
