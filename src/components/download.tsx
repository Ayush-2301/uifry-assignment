import React from "react";
import Gradient from "./gradient";
import Image from "next/image";
import Star from "./star";
import { Button } from "./ui/button";

const Download = () => {
  return (
    <div className=" relative md:pt-48 pt-28 ">
      <Star className="absolute top-[30px] right-0" type="light" />
      <Star className="absolute top-1/2 left-[-50px]" type="light" />
      <Gradient className="absolute -top-0  -left-36 z-[-20]" />
      <div className="bg-foreground  rounded-lg  relative lg:h-[500px] md:h-[400px] h-[400px] overflow-hidden flex items-center sm:justify-start justify-center lg:px-28 px-12 py-7">
        <div className=" flex flex-col gap-y-4 xl:max-w-[600px] lg:max-w-[500px] sm:max-w-[300px] w-full">
          <h1 className=" text-background md:text-5xl text-3xl md:font-bold font-semibold">
            Ready To Get Started?
          </h1>
          <p className=" text-background text-lg xl:max-w-[500px] lg:max-w[400px] sm:max-w-[250px] w-full">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <Button
            variant="secondary"
            className="flex justify-between gap-2 items-center  w-fit py-6 px-4 "
          >
            <p>Download App</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
            >
              <path
                d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
                className="  fill-black dark:fill-white"
              />
            </svg>
          </Button>
        </div>
        <Star
          type="dark"
          className=" absolute md:top-[34px] top-[25px] md:right-[377px] sm:right-[300px] right-[200px]  "
        />
        <Star
          type="dark"
          className="absolute md:bottom-[34px] bottom-[25px] md:left-[377px] sm:left-[300px] left-[200px] rotate-45  "
        />
        <Image
          src={"/images/circles.png"}
          alt="circles-image"
          width={400}
          height={400}
          className="invert dark:invert-0 absolute  bottom-[-150px] left-[-150px] sm:bottom-[-200px] sm:left-[-200px]"
        />
        <Image
          src={"/images/circles.png"}
          alt="circles-image"
          width={400}
          height={400}
          className="invert dark:invert-0 absolute  top-[-150px] right-[-150px] sm:top-[-200px] sm:right-[-200px]"
        />
        <Image
          src={"/images/phones.png"}
          alt="iphones"
          width={500}
          height={500}
          className="absolute right-0 md:top-6 top-24  xl:w-[500px] xl:h-[450px]  lg:w-[450px] lg:h-[430px] md:w-[350px] md:h-[320px] sm:w-[250px] sm:h-[230px] w-[200px] h-[200px] hidden sm:flex z-20"
        />
        <Gradient className=" absolute right-0 md:top-20 top-48  xl:w-[500px] xl:h-[450px]  lg:w-[450px] lg:h-[430px] md:w-[350px] md:h-[320px] sm:w-[250px] sm:h-[230px] w-[200px] h-[200px] hidden sm:flex z-10 rotate-180" />
      </div>
    </div>
  );
};

export default Download;
