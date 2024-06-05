import { cn } from "@/lib/utils";

const Star = ({
  className,
  type,
}: {
  className?: string;
  type?: "light" | "dark";
}) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="58"
        viewBox="0 0 62 58"
        fill="none"
        className=" md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"
      >
        <path
          d="M31 0L32.5047 29.9289L61.4338 22.1115L33.4347 32.7911L49.8091 57.8885L31 34.56L12.1909 57.8885L28.5653 32.7911L0.566191 22.1115L29.4953 29.9289L31 0Z"
          className={cn(
            type === "light"
              ? "dark:fill-white fill-black"
              : "dark:fill-black fill-white"
          )}
        />
      </svg>
    </div>
  );
};

export default Star;
