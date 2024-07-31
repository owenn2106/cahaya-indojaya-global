"use client";

import { NAV_ITEMS } from "../navbar/constants";
import { Separator } from "../ui/separator";
import { jumpTo } from "@/lib/utils";

const Footer = () => {
  return (
    <section className="bg-blue min-h-72 py-8 px-12 flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="text-white">
          <img src={`images/logo-light.webp`} className="h-28" />
          <div className="flex flex-col">
            <a
              href="https://maps.app.goo.gl/BbZfaygq1UA1bKRh9?g_st=iwb"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold mb-2"
            >
              Jl. Margacinta No.14a, Cijaura, Kec. Buahbatu, Kota Bandung, Jawa Barat 40287</a>
            <a
              href="https://wa.me/6282295231468"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62-822-9523-1468</a>
            <a
              href="mailto:cig-indonesia@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              cig-indonesia@hotmail.com</a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-x-20 flex-col lg:flex-row gap-y-6 lg:gap-y-0 mb-8 mt-16 lg:mb-0 lg:mt-0">
            {NAV_ITEMS.map((item) => (
              <span
                key={item.id}
                className="cursor-pointer text-white font-bold"
                onClick={() => jumpTo(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="text-white flex-col items-end hidden lg:flex">
            <p>Delivering to you</p>
            <p>Indonesia&apos;s finest to the World</p>
            <p>When quality meets culture</p>
          </div>
        </div>
      </div>
      <div>
        <Separator className="mt-8 mb-4" />
        <p className="text-white text-center text-xs">
          2024 © Cahaya Indojaya Global. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
