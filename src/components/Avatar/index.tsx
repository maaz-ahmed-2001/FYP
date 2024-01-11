import Image from "next/image";
import React from "react";

type AvatarProps = {
  imageSrc: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  className = "w-[95px]",
}) => {
  return (
    <div className={`${className} aspect-square relative`}>
      <Image
        src={imageSrc}
        alt="avatar"
        fill
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
