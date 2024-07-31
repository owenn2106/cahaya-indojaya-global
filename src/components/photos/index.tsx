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
            <div className="h-72 w-[500px] bg-one bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-two bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-three bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-four bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-five bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-six bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-seven bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-eight bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-nine bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-ten bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-eleven bg-cover bg-no-repeat" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-72 w-[500px] bg-twelve bg-cover bg-no-repeat" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Photos;
