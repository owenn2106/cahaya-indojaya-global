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
          <p>Delivering to you</p>
          <p>Indonesia&apos;s finest to the World</p>
          <p>When quality meets culture</p>
        </div>
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
