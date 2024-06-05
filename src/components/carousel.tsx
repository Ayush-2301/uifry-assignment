"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import CustomImage from "./custom-image";
import { QuoteIcon } from "lucide-react";
import { testimonial, testimonialImage } from "@/constant";
import { cn } from "@/lib/utils";
import Gradient from "./gradient";

const Carousel = () => {
  const data = testimonial;
  const [index, setIndex] = useState(0);
  const [testimonialData, setTestimonialData] = useState(testimonial);
  const [fade, setFade] = useState(false);

  function changeOrder(id: number) {
    const activeData = testimonialData.filter((item) => item.id === id);
    const rest = testimonialData.filter((item) => item.id !== id);
    rest.unshift(activeData[0]);
    setTestimonialData(rest);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % testimonial.length;
      setIndex(nextIndex);
      changeOrder(testimonial[nextIndex].id);
    }, 2500);

    return () => clearInterval(interval);
  }, [index, testimonial]);

  return (
    <div className="flex md:flex-row flex-col items-center gap-6 justify-between">
      <div className="relative w-fit ">
        <CustomImage
          size={100}
          avatar_url={testimonialData[1].avatar_url}
          className="absolute md:top-[40px] md:left-[40px] top-[20px] left-[20px] md:w-fit w-[70px] z-10 fade-animation"
        />
        <CustomImage
          size={100}
          avatar_url={testimonialData[2].avatar_url}
          className="absolute md:top-[40px] md:right-[40px] top-[20px] right-[20px] md:w-fit w-[70px]  z-10 fade-animation"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Gradient className="absolute top-[50%] left-[50%] md:translate-x-[-60%] translate-x-[-200%] translate-y-[-50%] md:w-fit w-32  z-[-20]" />
          <CustomImage
            size={200}
            className=" md:w-full w-[100px]"
            avatar_url={testimonialData[0].avatar_url}
          />
          <div className="bg-primary p-4 w-fit rounded-full absolute top-[50%] md:-right-10 -right-6 translate-y-[-50%] ]">
            <QuoteIcon className="md:w-12 md:min-h-12 w-6 min-h-6  fill-white text-white rotate-180" />
          </div>
        </div>
        <CustomImage
          size={100}
          avatar_url={testimonialData[3].avatar_url}
          className="absolute md:bottom-[40px] md:left-[40px] bottom-[20px] left-[20px] md:w-fit w-[70px] z-10"
        />
        <CustomImage
          size={100}
          avatar_url={testimonialData[4].avatar_url}
          className="absolute md:bottom-[40px] md:right-[40px] bottom-[20px] right-[20px] md:w-fit w-[70px] z-10"
        />
        <Image
          src={"/images/circles.png"}
          alt="circles-image"
          width={400}
          height={400}
          className="md:w-[500px] w-[300px] dark:invert z-[-10] relative"
        />
      </div>
      <div className="md:max-w-[50%] max-w-full w-full flex flex-col justify-center items-center space-y-4">
        <h1 className="md:text-3xl text-2xl font-medium md:text-left text-center w-full">
          {data[index].title}
        </h1>
        <p className="text-muted-foreground dark:text-white/70 md:text-lg text-sm  text-justify min-h-[200px]">
          {data[index].description}
        </p>
        <div className="flex gap-2 self-start">
          {testimonialImage.map((image, i) => (
            <Image
              src={image.avatar_url}
              key={image.id}
              alt="avatar-image"
              width={30}
              height={30}
              onClick={() => {
                setIndex(i);
                changeOrder(image.id);
              }}
              className={cn(
                `object-cover aspect-square rounded-full cursor-pointer`,
                data[index].avatar_url === image.avatar_url
                  ? "opacity-1 scale-[1.5] mx-2"
                  : "opacity-50"
              )}
            />
          ))}
        </div>
        <p className="md:text-lg text-base font-medium self-start mt-4">
          {data[index].name}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
