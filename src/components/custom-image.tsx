import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
const CustomImage = ({
  size,
  avatar_url,
  className,
}: {
  size?: number;
  avatar_url: StaticImageData;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Image
        src={avatar_url}
        alt="image"
        width={size}
        height={size}
        className={` rounded-full aspect-square object-cover border-2 border-solid border-foreground`}
      />
    </div>
  );
};

export default CustomImage;
