import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const Sidebar = () => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="md:hidden block w-8 h-8 mt-1" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className=" space-y-4 md:text-xl text-lg md:hidden flex flex-col items-start">
          <Logo />
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
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
