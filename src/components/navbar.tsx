"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Sidebar from "./sidebar";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className=" flex items-center justify-between md:py-6 md:px-24 py-3 sm:px-12 px-6">
      <div className=" items-center justify-center  space-x-12 md:flex hidden">
        <Logo />
        <div className=" mt-2 f space-x-4 md:text-xl text-lg hidden md:flex">
          <Link
            href={"/"}
            className={`${
              path === "/" ? " text-primary font-semibold" : " font-medium"
            } `}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`${
              path === "/about" ? "text-primary font-semibold" : "font-medium"
            }`}
          >
            About Us
          </Link>
          <Link
            href={"/pricing"}
            className={`${
              path === "/pricing" ? "text-primary font-semibold" : "font-medium"
            }`}
          >
            Pricing
          </Link>
          <Link
            href={"/features"}
            className={`${
              path === "/features"
                ? "text-primary font-semibold"
                : "font-medium"
            }`}
          >
            Features
          </Link>
        </div>
      </div>
      <Sidebar />
      <div className=" mt-2 flex justify-center items-center space-x-1 md:space-x-4">
        <Button
          variant={"primary"}
          className="  px-3 py-2 text-sm md:text-base md:px-6 md:py-4 rounded-sm"
        >
          Download
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
