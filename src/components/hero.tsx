"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import Mobiles from "./mobiles";
import stats from "../../public/images/stats.png";
import Star from "./star";
import { motion } from "framer-motion";
const Hero = () => {
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
    <div className="flex md:flex-row flex-col h-full w-full justify-center items-start  relative">
      <Star
        type="light"
        className=" absolute top-[0px] left-[-50px]  scale-[0.5]"
      />
      <div className=" flex flex-col justify-start md:items-start items-center w-full md:max-w-[600px] space-y-6 mt-16">
        <motion.h1
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-4xl md:text-6xl font-bold"
        >
          Make The Best Financial Decisions
        </motion.h1>
        <motion.p
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
          className=" text-sm md:text-base text-muted-foreground dark:text-white/70"
        >
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </motion.p>
        <motion.div
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={3}
          className=" flex md:space-x-4 space-x-1"
        >
          <Button
            variant={"primary"}
            className=" rounded-sm flex justify-center items-center"
          >
            Get Started
            <ArrowRightIcon />
          </Button>
          <Button
            variant={"ghost"}
            className=" flex justify-center items-center  gap-1 "
          >
            <PlayCircleIcon />
            Watch Video
          </Button>
        </motion.div>
        <motion.div
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={4}
          className=" flex justify-center items-center"
        >
          <Image
            src={stats}
            alt="stat image"
            width={500}
            height={500}
            className="md:w-full w-[400px] object-cover  "
          />
        </motion.div>
      </div>
      <Mobiles />
    </div>
  );
};

export default Hero;
