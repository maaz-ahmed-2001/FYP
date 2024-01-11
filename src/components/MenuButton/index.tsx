import React, { useRef } from "react";
import Menu from "../Menu";
import { PostComponentTypeEnum } from "@/types/enums";

export type MenuItemsProps = {
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
}[];

type MenuButtonProps = {
  toggle: (d: boolean) => void;
  show?: boolean;
  items?: MenuItemsProps;
  w?: number;
  h?: number;
  tooltip?: string;
  hideButton?: boolean;
  btnLight?: boolean;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  toggle,
  show = false,
  tooltip = "Menu",
  items,
  h = 150,
  w = 100,
  hideButton = false,
  btnLight = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (e: any) => {
    e.preventDefault();
    toggle(!show);
  };
  return (
    <abbr title={tooltip}>
      <button
        className="flex flex-col items-center justify-center gap-[3px] p-2 w-fit right-1 absolute cursor-pointer"
        onClick={handleClick}
        onBlur={() => toggle(false)}
      >
        {!hideButton && (
          <>
            <div
              className={`w-[3px] h-[3px] rounded-full ${
                btnLight ? "bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`w-[3px] h-[3px] rounded-full ${
                btnLight ? "bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`w-[3px] h-[3px] rounded-full ${
                btnLight ? "bg-white" : "bg-black"
              }`}
            ></div>
          </>
        )}
        {
          <div
            ref={ref}
            style={
              show
                ? {
                    height: `${h}px`,
                    width: `${w}px`,
                  }
                : { height: "0px", width: "0px" }
            }
            className={`left-3 translate-x-[-100%] xl:translate-x-[-50%] 2xl:translate-x-0 xl:right-0 z-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] absolute top-6 overflow-hidden duration-100 xl:left-3`}
          >
            <Menu items={items} className="w-full" />
          </div>
        }
      </button>
    </abbr>
  );
};

export default MenuButton;
