import React from "react";
import NavBarItems from "../NavBarItems/NavBarItems";

const NavBar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-blue-100 p-4 lg:text-lg justify-center gap-6">
      <NavBarItems title="Trending" param="fetchTrending" />
      <NavBarItems title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
