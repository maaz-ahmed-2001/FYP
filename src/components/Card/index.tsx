import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpIcon,
  ClaimIcon,
  ContributionIcon,
  EditIcon,
  PostEyeIcon,
} from "../Icons";
import { CardTypeVariantEnum } from "@/types/enums";
import Avatar from "../Avatar";
import MenuButton, { MenuItemsProps } from "../MenuButton";

type CardProps = {
  title: string;
  description: string;
  img: string;
  upVotes: number;
  downVotes: number;
  views?: number;
  contributions?: number;
  comments: number;
  variant?: CardTypeVariantEnum;
  status?: { text?: string; time?: string };
  className?: string;
  post_id: number;
  menuOptions?: MenuItemsProps;
  showMenu?: boolean;
};

const Card: React.FC<CardProps> = ({
  comments,
  contributions,
  description,
  downVotes,
  img,
  title,
  upVotes,
  views,
  variant = CardTypeVariantEnum.NORMAL,
  status,
  className = "",
  post_id,
  menuOptions,
  showMenu = false,
}) => {
  const [show, setShow] = useState(false);

  const handleMenuVisibility = (d: boolean) => setShow(Boolean(d));

  return (
    <>
      <div
        className={`text-darkGrey flex flex-col justify-between w-full rounded border-[1px] border-lightGrey relative mx-auto card ${className}`}
      >
        <div>
          {showMenu && (
            <div className="flex flex-col w-6 h-7 rounded-lg bg-[rgba(0,0,0,0.2)] z-[1] cursor-pointer absolute right-[10px] top-[10px] justify-center items-center gap-[2px]">
              <div className="relative left-[14px] top-[-15px]">
                <MenuButton
                  show={show}
                  toggle={handleMenuVisibility}
                  items={menuOptions}
                  h={80}
                  btnLight
                />
              </div>
            </div>
          )}
          <div
            className={`relative w-full ${
              variant === CardTypeVariantEnum.NORMAL ? "h-[200px]" : "h-[123px]"
            }`}
          >
            <Image src={img} alt="image" fill className="object-cover" />
          </div>
          <div className="px-[10px] py-3">
            <div className="flex justify-between items-start">
              <h4
                className={`text-black text-[18px] mb-3 ${
                  variant === CardTypeVariantEnum.NORMAL ? "" : "font-bold"
                }`}
              >
                {title}
              </h4>
              <div className="flex items-center gap-2 text-[14px] pt-1">
                <span className="flex items-center">
                  <i>
                    <ArrowUpIcon />
                  </i>
                  {upVotes}
                </span>
                <span className="flex items-center">
                  <i>
                    <ArrowUpIcon className="-rotate-180" />
                  </i>
                  {downVotes}
                </span>
              </div>
            </div>
            {variant !== CardTypeVariantEnum.POST ? (
              <p className="text-[16px] text-darkGrey text-ellipsis line-clamp-3">
                {description}
              </p>
            ) : (
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-[6px]">
                  <Avatar
                    imageSrc="/auth/avatar.png"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="text-[16px] text-darkGrey">{status?.text}</p>
                </div>
                <span className="text-[16px] text-darkGrey">
                  {status?.time}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center w-full justify-around text-[13px] border-t-[1px] border-lightGrey py-3">
          {/* <div className="flex items-center gap-1">
            <i>
              <PostEyeIcon />
            </i>
            <span className="flex-shrink-0">
              {views}k+
              <span className="hidden xl:inline"> Views</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <i>
              <ContributionIcon />
            </i>
            <span>
              {contributions}
              <span className="hidden xl:inline"> Contributions</span>
            </span>
          </div> */}
          <div className="flex items-center gap-1">
            <i>
              <ClaimIcon />
            </i>
            <span>
              {comments} {comments > 9 ? "+" : ""}{" "}
              <span className=""> comments</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
