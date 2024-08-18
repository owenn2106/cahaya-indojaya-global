"use client";

import Image from "next/image";
import { BRAND_PARTNERS } from "./constants";
import { useState } from "react";

const BrandPartners = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <section
      id="brand-partners"
      className="flex justify-center min-h-[50vh] mb-36 scroll-m-36"
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center gap-6 mb-12">
          <h3 className="text-center font-bold text-3xl text-blue">
            Brand Partners
          </h3>
          <div className={`w-28 h-1 bg-red`} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 children:flex-[1_1_16rem] px-8 lg:px-0">
          {BRAND_PARTNERS.slice(0, loadMore ? BRAND_PARTNERS.length : 12).map(
            (brand) => (
              <div
                key={brand.name}
                className="bg-white h-[200px] relative p-5 rounded-md flex justify-center items-center"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  height={150}
                  width={150}
                  className="object-contain h-[150px] w-[150px]"
                />
              </div>
            ),
          )}
        </div>
        {!loadMore && (
          <div className="flex justify-center mt-8">
            <span
              onClick={() => setLoadMore(true)}
              className="cursor-pointer font-bold text-blue"
            >
              See All Brand Partners...
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandPartners;
