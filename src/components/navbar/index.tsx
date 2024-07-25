"use client";

import { jumpTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";
import { NAV_ITEMS } from "./constants";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const changeNavbarStyling = () => {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarStyling);
    return () => window.removeEventListener("scroll", changeNavbarStyling);
  }, []);

  return (
    <div
      className={`fixed z-50 flex items-center justify-between px-4 lg:px-8 gap-x-4 transition-all drop-shadow-2xl ${isScrolled ? "h-16 bg-white w-4/5 top-5 left-1/2 -translate-x-1/2 rounded-xl" : "h-24 bg-white/0 w-full top-0 left-0 rounded-none"}`}
    >
      {/* TODO: ADD LOGO HERE */}
      <div
        className={`flex items-center font-bold text-4xl transition-all ${isScrolled ? "text-black" : "text-white"}`}
      >
        CIG
      </div>
      <div className="hidden lg:flex text-base font-semibold gap-x-20">
        {NAV_ITEMS.map((item) => (
          <span
            key={item.id}
            className={`cursor-pointer transition-all hover:text-red ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => jumpTo(item.id)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="flex gap-8 items-center">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Button className="hidden lg:block">Get Quote</Button>
        </a>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
