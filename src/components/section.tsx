"use client";
import React from "react";
import { features } from "@/constant";
import mobiles from "../../public/images/iphoneVisa.png";
import circles from "../../public/images/circles.png";
import Image from "next/image";
import Gradient from "./gradient";
import Star from "./star";
import { motion } from "framer-motion";

const Section = () => {
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
    <div className="  relative flex md:flex-row flex-col  justify-between gap-6 items-center   ">
      <Star type="light" className="absolute top-0 left-0" />
      <Gradient className="absolute right-0 top-0 z-[-20]" />
      <motion.div
        variants={demoVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={1}
      >
        <div className="relative">
          <Image
            src={circles}
            alt="circles"
            className="absolute top-16 -left-10 z-[-10] dark:invert"
          />
          <Gradient className="absolute top-16 left-[-120px] md:flex hidden z-[-20]" />
          <Image src={mobiles} alt="mobiles" className=" hidden md:flex" />
        </div>
      </motion.div>
      <div>
        <div className=" flex flex-col md:mb-6 mb-3">
          <motion.p
            variants={demoVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1}
            className=" text-primary text-lg font-medium"
          >
            Features
          </motion.p>
          <motion.h1
            variants={demoVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1.5}
            className=" md:text-5xl text-3xl font-semibold"
          >
            Uifry Premium
          </motion.h1>
        </div>
        <div className=" flex flex-col md:space-y-10 space-y-4">
          {features.map((feature, i) => (
            <motion.div
              variants={demoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={i + 1}
              key={feature.id}
            >
              <h1 className="flex space-x-2">
                <feature.icon className=" text-primary" />
                <span className=" md:text-lg text-sm font-medium">
                  {feature.title}
                </span>
              </h1>
              <p className="md:text-lg text-sm text-muted-foreground dark:text-white/90 max-w-[600px] w-full">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
