"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Photos = () => {
  return (
    <section className="mb-36 w-full">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-one bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-two bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-three bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-four bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-five bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-six bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-seven bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-eight bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-nine bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-ten bg-contain bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-eleven bg-contain bg-no-repeat" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Photos;
