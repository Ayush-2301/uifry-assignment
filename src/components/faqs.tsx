"use client";
import React from "react";
import { faqsData } from "@/constant";
import { cn } from "@/lib/utils";
import Star from "./star";
import { motion } from "framer-motion";

const FAQs = () => {
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
    <div className="flex flex-col mt-16 relative">
      <Star
        className=" absolute top-0 left-[-100px] rotate-[60deg] scale-[0.6] "
        type="light"
      />
      <motion.p
        variants={demoVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={1}
        className="text-lg text-primary font-medium"
      >
        FAQ
      </motion.p>
      <motion.h1
        variants={demoVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={2}
        className="text-3xl md:text-5xl max-w-[500px] w-full font-semibold"
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="  grid-cols-2 gap-4 mt-4 hidden md:grid">
        {faqsData.map((faq, i) => {
          const isOddRow = Math.floor(i / 2) % 2 === 0;
          const isFirstElement = i % 2 === 0;
          return (
            <motion.div
              variants={demoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={i + 2}
              key={faq.id}
              className={cn(
                isOddRow
                  ? isFirstElement
                    ? "bg-primary text-white"
                    : "bg-transparent text-foreground"
                  : isFirstElement
                  ? "bg-transparent text-foreground"
                  : "bg-primary text-white",
                "rounded-lg p-9"
              )}
            >
              <h1 className="md:text-3xl text-2xl font-medium">{faq.title}</h1>
              <p className="text-justify md:text-lg text-base">
                {faq.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      <div className="  grid-cols-1 md:gap-4 gap-2 mt-4 md:hidden grid">
        {faqsData.map((faq, i) => {
          return (
            <div
              key={faq.id}
              className={cn(
                i % 2 == 0
                  ? "bg-primary text-white"
                  : "bg-transparent text-foreground",
                " rounded-lg p-6"
              )}
            >
              <h1 className="md:text-3xl text-xl font-medium">{faq.title}</h1>
              <p className="text-justify md:text-lg text-sm">
                {faq.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
