import React, { useRef, useState } from "react";
import { CarretDownIcon, CheckIcon } from "../Icons";
import { SelectTypeVariantEnum } from "@/types/enums";

type SelectProps = {
  className?: string;
  options: {
    id: string;
    label: string;
    onClick?: (d: any) => void;
  }[];
  defaultValue: {
    id: string;
    label: string;
  };
  dropdownClass?: string;
  variant?: SelectTypeVariantEnum;
};

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  className = "",
  dropdownClass = "",
  variant = SelectTypeVariantEnum.NORMAL,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>();

  const ref = useRef<HTMLDivElement>(null);

  const handleSelectVisibility = (data: boolean) => {
    setOpen(data);
  };

  const handleSelectValue = (val: any) => setValue(val);
  return (
    <div className="relative w-full">
      <button
        onClick={() => handleSelectVisibility(!open)}
        onBlur={() => handleSelectVisibility(false)}
        className={`w-full py-[2px] px-2 md:px-5 md:py-2 text-left border-[1px] ${
          variant === SelectTypeVariantEnum.CHECKED
            ? "hover:bg-midBlue hover:text-white duration-300 text-midBlue"
            : "text-[#5B6670]"
        } border-midBlue shadow-[0px_2.04756px_2.04756px_0px_rgba(0,0,0,0.25)] flex items-center justify-between ${className} text-[18px] md:text-[22px]`}
      >
        <p className="capitalize text-[inherit]">
          {variant === SelectTypeVariantEnum.NORMAL
            ? value?.label || defaultValue.label || options[0].label
            : defaultValue.label}
        </p>
        <i
          className="transition-all ml-3 duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <CarretDownIcon color="currentColor" />
        </i>
      </button>
      <div
        ref={ref}
        className={`absolute right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] z-[10] bg-white w-full transition-all duration-300 ease-in-out overflow-y-auto ${dropdownClass}`}
        style={{
          overflowY: ref.current?.scrollHeight! > 350 ? "auto" : "hidden",
          height: `${
            open
              ? ref.current?.scrollHeight! > 350
                ? "120px"
                : `${ref?.current?.scrollHeight || 350}px`
              : "0px"
          }`,
        }}
      >
        <div className="py-2 w-full">
          {options.map(({ id, label, onClick }, i) => (
            <p
              key={i}
              className="capitalize text-[18px] cursor-pointer duration-150 hover:text-white hover:bg-midBlue text-[#5B6670] py-2 pl-2 pr-5 flex items-center"
              onClick={() => {
                handleSelectValue({ id, label });
                onClick && onClick({ id, label });
              }}
            >
              {variant === SelectTypeVariantEnum.CHECKED && value?.id === id ? (
                <>
                  <i>
                    <CheckIcon color={"currentColor"} />
                  </i>
                  <span className="pl-3">{label}</span>
                </>
              ) : (
                <span
                  className={`${
                    variant === SelectTypeVariantEnum.CHECKED
                      ? "pl-[31px]"
                      : "pl-3"
                  }`}
                >
                  {label}
                </span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
