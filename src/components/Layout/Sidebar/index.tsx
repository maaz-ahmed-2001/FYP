import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { ArrowLeftIcon } from "@/components/Icons";
import { BtnVariantEnum } from "@/types/enums";
import { useAppSelector } from "@/utils/store";
import Link from "next/link";
import React, { useState } from "react";

type SidebarProps = {
  links?: {
    link: string;
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
  }[];
};

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const { user } = useAppSelector((state) => state.auth);

  const [show, setShow] = useState(false);
  const handleVisibility = () => setShow(!show);

  return (
    <div
      className={`${
        show
          ? "max-w-[768px] fixed md:relative w-full"
          : "max-w-[40px] md:max-w-[initial] fixed md:relative w-full"
      } px-5 lg:px-[30px] bg-midGrey duration-300 h-full min-h-[calc(100vh-80px)] z-10 lg:min-h-[calc(100vh-95px)] md:min-w-[220px] lg:min-w-[240px] `}
    >
      <div
        className={`absolute right-0 top-0 ${
          show ? "translate-x-0" : "translate-x-[25%]"
        } bg-midGrey p-4 rounded-br-[20px] block md:hidden`}
        onClick={handleVisibility}
      >
        <i
          className={`flex items-center ${
            show ? "rotate-0" : "rotate-180"
          } duration-300`}
        >
          <ArrowLeftIcon />
          <ArrowLeftIcon className="ml-[-12px]" />
        </i>
      </div>
      <div className="w-full overflow-hidden">
        <div className="min-w-[300px] md:min-w-full mx-auto">
          <div className="py-10 border-b-[3px] border-white">
            <Avatar
              imageSrc={user?.avatar || "/auth/avatar.png"}
              className="w-[95px] mx-auto"
            />
            <h4 className="text-center mt-5 font-[500] text-[22px]">
              {user?.username}
            </h4>
          </div>
          <div className="py-10 border-b-[3px] border-white">
            <ul className="flex flex-col gap-10">
              {links?.map(({ icon, label, link, isActive }, i) => (
                <li key={i}>
                  <Link href={link} className="w-fit">
                    <p
                      className={`flex items-center gap-[7px] w-fit text-darkGrey text-[17px] tracking-[-0.418px] uppercase ${
                        isActive ? "font-bold" : "font-normal"
                      }`}
                    >
                      <i>{icon}</i>
                      {label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[70px] px-[10px]">
            <Button
              className="w-full max-w-[500px] mx-auto"
              onClick={() => {}}
              variant={BtnVariantEnum.SHADOW_PRIMARY}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
