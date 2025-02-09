"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NavBarItems = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-blue-600 font-semibold ${
          genre == param
            ? "underline underline-offset-8 decoration-4 decoration-blue-500 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavBarItems;
