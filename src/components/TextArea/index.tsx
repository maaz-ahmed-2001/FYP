import { TextAreaVariantEnum } from "@/types/enums";
import React from "react";

type TextAreaProps = {
  onChange: (e: any) => void;
  value?: string;
  className?: string;
  id?: string;
  name?: string;
  variant?: TextAreaVariantEnum;
  error?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  className = "",
  value,
  name = "",
  id = "",
  variant = TextAreaVariantEnum.NORMAL,
  error,
}) => {
  return variant === TextAreaVariantEnum.NORMAL ? (
    <textarea
      onChange={onChange}
      value={value}
      id={id}
      name={name}
      className={`${className} sm:h-[initial] w-full outline-none border-[1px] border-black p-3 font-extralight auto resize-none`}
    />
  ) : (
    <>
      <textarea
        onChange={onChange}
        value={value}
        id={id}
        name={name}
        className={`${className} sm:h-[initial] w-full outline-none rounded-[17px] border-[1px] shadow-[0px_2.30645px_2.30645px_0px_rgba(0,0,0,0.25)] border-[#001C797A] p-3 font-extralight auto resize-none`}
      />
      {error && (
        <p className="text-midRed pl-2 mt-[-2px] text-[16px] absolute">
          {error}
        </p>
      )}
    </>
  );
};

export default TextArea;
