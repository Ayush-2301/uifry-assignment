import React from "react";
import Carousel from "./carousel";
import Star from "./star";

const Testimonials = () => {
  return (
    <div className=" relative flex flex-col justify-center items-center mt-16">
      <Star
        className="absolute top-0 right-[100px] rotate-[35deg]"
        type="light"
      />
      <div>
        <p className="flex flex-col text-lg  text-center text-primary mb-4  md:mb-0 font-medium">
          Testimonial
        </p>
        <h1 className=" md:text-5xl text-3xl font-semibold max-w-[450px] w-full text-center ">
          What Our Users Say About Us?
        </h1>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;
