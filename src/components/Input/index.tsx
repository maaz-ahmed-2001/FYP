import React from "react";

type InputProps = {
  type?: string;
  onChange: (e: any) => void;
  id?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  iconEnd?: React.ReactNode;
  iconStart?: React.ReactNode;
  className?: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  onChange,
  id,
  name,
  type = "text",
  value,
  placeholder,
  iconEnd,
  iconStart,
  className,
  error,
}) => {
  return (
    <>
      <div
        className={`rounded-[17px] flex items-center border-[1px] border-[#001C797A] overflow-hidden shadow-[0px_2.30645px_2.30645px_0px_rgba(0,0,0,0.25)] h-[50px] xl:h-[65px] ${
          className ? className : ""
        }`}
        style={error ? { borderColor: "red" } : {}}
      >
        {iconStart && <span className="mx-[12px]"> {iconStart}</span>}
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="w-full pb-[5px] xl:pb-[10px] text-[18px] xl:text-[24px] text-darkGrey h-full outline-none bg-[transparent]"
        />
        {iconEnd && <span className="mx-[12px]"> {iconEnd}</span>}
      </div>
      {error && (
        <p className="text-midRed pl-2 mt-[2px] text-[16px] absolute ">
          {error}
        </p>
      )}
    </>
  );
};

export default Input;
