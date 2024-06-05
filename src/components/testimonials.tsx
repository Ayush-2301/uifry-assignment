"use client";
import React from "react";
import Carousel from "./carousel";
import Star from "./star";
import { motion } from "framer-motion";

const Testimonials = () => {
  const demoVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.09 * index,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div className=" relative flex flex-col justify-center items-center mt-16">
      <Star
        className="absolute top-0 right-[100px] rotate-[35deg]"
        type="light"
      />
      <div>
        <motion.p
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
          className="flex flex-col text-lg  text-center text-primary mb-4  md:mb-0 font-medium"
        >
          Testimonial
        </motion.p>
        <motion.h1
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
          className=" md:text-5xl text-3xl font-semibold max-w-[450px] w-full text-center "
        >
          What Our Users Say About Us?
        </motion.h1>
      </div>
      <motion.div
        variants={demoVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={3}
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default Testimonials;
