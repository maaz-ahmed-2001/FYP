import React, { useState } from "react";
import Avatar from "../Avatar";
import Menu from "../Menu";
import Image from "next/image";
import {
  ArchiveIcon,
  CloneIcon,
  MuteIcon,
  ShareIcon,
  UnfollowIcon,
} from "../Icons";
import MenuButton from "../MenuButton";

type BasicCardProps = {
  avatar?: string;
  status?: string;
  time?: string;
  image?: string;
  title?: string;
};

const BasicCard: React.FC<BasicCardProps> = ({
  avatar,
  image,
  status,
  time,
  title,
}) => {
  const menuItems = [
    {
      icon: <UnfollowIcon w={18} h={21} color="currentColor" />,
      label: "Unfollow",
    },
    {
      icon: <MuteIcon color="currentColor" />,
      label: "Mute",
    },
    {
      icon: <CloneIcon w={18} h={21} color="currentColor" />,
      label: "Clone",
    },
    {
      icon: <ArchiveIcon w={18} h={21} color="currentColor" />,
      label: "Archive",
    },
    {
      icon: <ShareIcon w={18} h={21} color="currentColor" />,
      label: "Share",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const handleMenuVisibility = (d: boolean) => setShowMenu(Boolean(d));
  return (
    <div className="w-full border-[1px] border-midGrey">
      <div className="px-[15px] py-[10px] flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <Avatar imageSrc={avatar || "/auth/avatar.png"} className="w-7 h-7" />
          <p className="text-[14px] font-[400] tracking-[-0.4px]">{status}</p>
        </div>
        <span className="text-[14px]">{time}</span>
      </div>
      <div className="border-t-[1px] border-midGrey flex items-center">
        <div className="w-full max-w-[115px] h-[100px] relative">
          <Image src={image || "/images/card2Img.jpg"} alt="post" fill />
        </div>
        <div className="px-2 py-2 relative self-stretch w-full">
          <h4 className="text-black text-[18px] mb-3 font-semibold">{title}</h4>
          <MenuButton
            toggle={handleMenuVisibility}
            items={menuItems}
            show={showMenu}
            h={172}
            w={155}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
