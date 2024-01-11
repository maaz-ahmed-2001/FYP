import React from "react";
import { CrossIcon, PersonIcon, PersonSmallIcon } from "../Icons";
import Image from "next/image";
import styles from "./style.module.css";

type VotingStatsProps = {
  onClose?: () => void;
  stats: { ratings: number }[];
};

const VotingStats: React.FC<VotingStatsProps> = ({ onClose, stats }) => {
  const allRatings = ["#7dbbf4", "#4197e7", "#1e6bb3", "#2478c6", "#1d67ac"];
  const mostVotes = stats.reduce((maxObject, currentObject) => {
    if (currentObject.ratings > maxObject.ratings) {
      return currentObject;
    } else {
      return maxObject;
    }
  });
  const maxNum = 100 / mostVotes.ratings;
  return (
    <div className="rounded-[14px] border-borderGrey border-[1px] relative flex flex-col justify-center items-center pt-10 h-[460px] overflow-hidden">
      <i className="absolute top-5 right-5 cursor-pointer" onClick={onClose}>
        <CrossIcon h={20} w={20} />
      </i>
      <h3 className="text-[20px] md:text-[28px] font-bold tracking-[0.98px] mb-8">
        Voting Stats
      </h3>
      <div className="flex items-end h-full w-full">
        {stats.map(({ ratings }, i) => (
          <div
            className={`flex-1 relative flex justify-center items-center ${styles.bar}`}
            style={{
              backgroundColor: allRatings[i],
              height: `${ratings * maxNum}%`,
            }}
          >
            <div className="absolute top-0 translate-y-[-100%] flex items-center gap-1">
              <i>
                <PersonSmallIcon h={15} w={18} />
              </i>
              <span className="text-darkGrey font-bold text-[16px]">
                {ratings}
              </span>
            </div>
            <div
              className={`${styles.tooltip} duration-200 bg-white w-14 h-14 rounded-[4px] absolute top-0 flex justify-center items-end translate-y-[-175%] shadow-md`}
            >
              <div className="relative h-full flex justify-center items-center">
                <Image
                  src={"/auth/avatar.png"}
                  alt="avatar"
                  width={30}
                  height={30}
                />
              </div>
              <div className="bg-white w-3 h-3 rounded-[4px] rotate-45 absolute flex items-center justify-center shadow-md mb-[-5px]"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center w-full h-[80px] border-t-2 border-white">
        {allRatings.map((color, i) => (
          <div
            key={i}
            style={{ backgroundColor: color }}
            className="h-full flex-1 flex justify-center items-center"
          >
            <div className="w-8 hover:bg-midBlue duration-200 hover:text-white text-[12px] font-bold border-4 border-white text-midBlue aspect-square rounded-full bg-white flex items-center justify-center">
              {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingStats;
