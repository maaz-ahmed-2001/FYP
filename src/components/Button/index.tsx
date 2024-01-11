import React from "react";
import { BtnVariantEnum } from "@/types/enums";

type BtnProps = {
  children?: string | React.ReactNode;
  onClick?: () => void;
  variant?: BtnVariantEnum;
  type?: any;
  className?: string;
  disabled?: boolean;
};

const LoadingSpinner: React.FC = () => (
  <div className="border-4 border-midGrey border-r-transparent rounded-full aspect-square h-[80%] absolute spinner"></div>
);

const Button: React.FC<BtnProps> = ({
  children,
  onClick,
  variant = BtnVariantEnum.PRIMARY,
  type = "button",
  className,
  disabled = false,
}) => {
  switch (variant) {
    case BtnVariantEnum.PRIMARY:
      return (
        <button
          className={`px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed justify-center items-center text-white text-[16px] font-medium leading-normal bg-midBlue ${
            className ? className : ""
          }`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          <>
            {!disabled && children}
            {disabled && <LoadingSpinner />}
          </>
        </button>
      );
    case BtnVariantEnum.SECONDARY:
      return (
        <button
          onClick={onClick}
          className={`px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex justify-center items-center text-white text-[16px] disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed font-medium leading-normal bg-transparent border-[1px] border-white ${
            className ? className : ""
          }`}
          disabled={disabled}
        >
          {!disabled && children}
          {disabled && <LoadingSpinner />}
        </button>
      );
    case BtnVariantEnum.SECONDARY_BLUE:
      return (
        <button
          onClick={onClick}
          className={`px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex justify-center items-center disabled:bg-darkGrey disabled:text-midGrey text-midBlue text-[16px] font-medium leading-normal bg-transparent border-[1px] border-midBlue ${
            className ? className : ""
          }`}
          disabled={disabled}
        >
          {!disabled && children}
          {disabled && <LoadingSpinner />}
        </button>
      );
    case BtnVariantEnum.SHADOW_PRIMARY:
      return (
        <button
          className={`px-6 xl:px-10 cursor-pointer relative duration-300 ease-in-out hover:bg-white disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed hover:text-midRed py-2 rounded-sm flex border-[1px] border-[#04044C] shadow-[0px_2.04756px_2.04756px_0px_rgba(0,0,0,0.25)] justify-center items-center text-white text-[16px] font-medium leading-normal bg-midRed ${
            className ? className : ""
          }`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {!disabled && children}
          {disabled && <LoadingSpinner />}
        </button>
      );
    case BtnVariantEnum.SHADOW_SECONDARY:
      return (
        <button
          className={`px-6 xl:px-10 py-2 cursor-pointer relative disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed bg-white rounded-sm flex border-[1px] border-midRed shadow-[0px_2.04756px_2.04756px_0px_rgba(0,0,0,0.25)] justify-center items-center text-midBlue text-[16px] font-medium leading-normal ${
            className ? className : ""
          }`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {!disabled && children}
          {disabled && <LoadingSpinner />}
        </button>
      );
    case BtnVariantEnum.SUCCESS:
      return (
        <button
          className={`px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex border-[1px] border-midGrey shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center text-white text-[16px] font-medium leading-normal bg-midGreen disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed ${
            className ? className : ""
          }`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {!disabled && children}
          {disabled && <LoadingSpinner />}
        </button>
      );
  }
};

export default Button;
