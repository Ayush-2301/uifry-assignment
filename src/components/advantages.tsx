"use client";
import React from "react";
import { Bell, Sparkle } from "lucide-react";
import mobile2 from "../../public/images/iphoneStats.png";
import mobile3 from "../../public/images/iphoneVisa.png";
import circles from "../../public/images/circles.png";
import Image from "next/image";
import Gradient from "./gradient";
import Star from "./star";
import { motion } from "framer-motion";

const Advantages = () => {
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
    <div className=" relative flex flex-col md:gap-y-10 gap-y-2">
      <Star
        className="absolute bottom-1/2 left-1/2 rotate-[35deg] scale-[0.8]"
        type="light"
      />
      <div className="flex md:flex-row flex-col  items-center gap-6 justify-center   mt-12">
        <div className=" md:max-w-[50%] w-full ">
          <div className="flex flex-col md:mb-6 mb-3">
            <motion.p
              variants={demoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1}
              className="text-primary text-lg font-medium"
            >
              Advantages
            </motion.p>
            <motion.h1
              variants={demoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1.5}
              className=" md:text-5xl text-3xl font-semibold my-2"
            >
              Why Choose Uifry?
            </motion.h1>
            <motion.div
              variants={demoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={2}
              className="flex  items-center gap-4"
            >
              <Bell className="w-10 h-10 bg-primary rounded-full text-white p-2 text-lg dark:text-black" />
              <h2 className="md:text-xl text-lg font-medium">
                Clever Notifications
              </h2>
            </motion.div>
            <motion.p
              variants={demoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={2.5}
              className="md:text-lg text-sm text-muted-foreground dark:text-white/90 mt-2"
            >
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
          className="relative"
        >
          <Image src={mobile2} alt="mobile2" className="hidden md:flex" />

          <Image
            src={circles}
            alt="circles"
            className="hidden md:flex absolute top-10 left-[-10px] z-[-10]  lg:top-24 lg:left-[-10] dark:invert"
          />
          <Gradient className="absolute bottom-0 left-[10px] hidden md:flex z-[-20] lg:bottom-8 lg:left-[10px]" />
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center mb-6  gap-6 ">
        <motion.div
          variants={demoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
          className="relative"
        >
          <Image src={mobile3} alt="mobile2" className="hidden md:flex" />

          <Image
            src={circles}
            alt="circles"
            className="hidden md:flex absolute top-10 left-[-10px] z-[-10]  lg:top-24 lg:left-[-10] dark:invert"
          />
          <Gradient className="absolute bottom-0 left-0 hidden md:flex z-[-20] lg:bottom-8 lg:left-[-10]" />
        </motion.div>
        <div className=" md:max-w-[50%] w-full ">
          <div className="flex flex-col md:mb-6 mb-3">
            <div className="flex  items-center gap-4">
              <Sparkle className="w-10 h-10 bg-primary rounded-full text-white p-2 text-lg dark:text-black" />
              <motion.h2
                variants={demoVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={1}
                className="md:text-xl text-lg font-medium"
              >
                Fully Customizable
              </motion.h2>
            </div>
            <motion.p
              variants={demoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1.5}
              className="md:text-lg text-sm text-muted-foreground dark:text-white/90 mt-2"
            >
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
