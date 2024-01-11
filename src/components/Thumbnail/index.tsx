import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

type ThumbnailProps = {
  title: string;
  posts: number;
  img: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ posts, title, img }) => {
  return (
    <div className="relative p-6 w-full h-[400px] text-white flex items-end mx-auto">
      {false && (
        <div className="flex flex-col w-7 h-7 rounded-lg z-10 cursor-pointer absolute right-[10px] top-[10px] justify-center items-center gap-[2px]">
          <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
          <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
          <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
        </div>
      )}
      <div className={`absolute w-full h-full top-0 left-0 z-0`}>
        <Image src={img} alt="image" fill className="object-cover" />
      </div>
      <div
        className={`absolute w-full h-full top-0 left-0 z-[1] ${styles.container_bg}`}
      ></div>
      <div className="relative z-[2] w-full">
        <h4 className="text-[22px] w-full text-ellipsis whitespace-nowrap overflow-hidden">
          {title}
        </h4>
        <p className="mt-2 text-[16px] text-white">{posts}+ Posts</p>
      </div>
    </div>
  );
};

export default Thumbnail;
