import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <section className="flex justify-center  items-center">
      <Image
        className="h-52"
        src="../../spinner.svg"
        alt="loading..."
        width={100}
        height={100}
      />
    </section>
  );
};

export default loading;
