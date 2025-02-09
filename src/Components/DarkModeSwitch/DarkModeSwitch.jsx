"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={handleThemeToggle}
            className="text-xl cursor-pointer hover:text-blue-500"
          />
        ) : (
          <MdDarkMode
            onClick={handleThemeToggle}
            className="text-xl cursor-pointer hover:text-blue-500"
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
