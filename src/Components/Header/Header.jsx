import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex gap-1 items-center">
          <span className=" text-2xl font-bold bg-blue-500 py-1 px-2 rounded-lg">
            TMDB
          </span>
          <span className=" text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
       
        <DarkModeSwitch />
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="about" address="/about" Icon={BsFillInfoCircleFill} />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
