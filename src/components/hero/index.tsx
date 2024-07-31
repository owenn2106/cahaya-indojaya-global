"use client";

import { jumpTo } from "@/lib/utils";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-hero bg-cover bg-no-repeat bg-scroll md:bg-fixed px-8">
      <h2 className="text-center text-4xl font-bold mb-2 text-white">
        Exporting <span className="text-red">Indonesia&apos;s Finest</span> to
        the World
      </h2>
      <h4 className="text-lg font-bold mb-4 text-white">
        Where Quality Meets Culture
      </h4>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => jumpTo("statistics")}>
          Learn More
        </Button>
        <a
          href="https://wa.me/6282295231468"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Get Quote</Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
