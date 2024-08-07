"use client";  // Bu satırı ekleyin

import Link from "next/link";
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Nav from "@/components/Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="py-8 xl:py-12 text-black dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-semibold">
            sebnemgormus<span className="text-blue font-extrabold dark:text-fuchsia-400">.</span>
          </h1>
        </Link>

        {/* Empty div to push Nav to the right */}
        <div className="flex-1"></div>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 bg-gray-100 dark:bg-gray-700 rounded"
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
