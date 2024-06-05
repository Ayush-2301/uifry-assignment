import Logo from "./logo";
import { footerData } from "@/constant";
import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className=" flex md:flex-row flex-col md:mt-36 mt-24 md:gap-16 gap-6 footer pb-24">
        <div className="flex flex-col items-start  gap-y-2">
          <Logo />
          <div className="flex md:gap-x-3 gap-x-1 justify-start items-center">
            <Mail className="fill-primary text-background w-6 h-6 md:w-8 md:h-8" />
            <p className=" md:text-base text-sm">help@frybix.com</p>
          </div>
          <div className="flex md:gap-x-3 gap-x-1 justify-start items-center">
            <Phone className=" fill-primary text-background w-6 h-6 md:w-8 md:h-8" />
            <p className="md:text-base text-sm">+1 234 456 678 89</p>
          </div>
        </div>
        <div className=" grid  justify-start items-start  lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-2 ">
          {footerData.map((item, fidx) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-start justify-center md:gap-2 gap-2"
              >
                <h1 className=" md:text-3xl text-2xl font-semibold">
                  {item.title}
                </h1>
                {item.links.map((link, lidx) => {
                  return (
                    <div key={link.id}>
                      <Link
                        href={link.url}
                        className="md:text-base text-sm hover:text-primary transition-colors ease-out"
                        key={link.id}
                      >
                        {link.title}
                      </Link>
                      {fidx === footerData.length - 1 &&
                        lidx === item.links.length - 1 && (
                          <div className=" flex">
                            <input
                              placeholder="Your email"
                              className=" bg-white/60 w-full  h-fit border dark:border-white lg:py-[11px] lg:px-4 py-[7px] px-2 dark:placeholder:text-white"
                            />
                            <Button
                              variant={"primary"}
                              className=" lg:py-6 lg:px-4 py-4 px-2  lg:text-base text-xs rounded-none"
                            >
                              Subscribe
                            </Button>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <p className=" text-center my-12">
        Copyright 2022 uifry.com all rights reserved
      </p>
    </div>
  );
};

export default Footer;
