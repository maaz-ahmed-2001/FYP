import { ContainerVariantEnum } from "@/types/enums";
import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
  variant?: ContainerVariantEnum;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  variant = ContainerVariantEnum.FULL,
}) => {
  return (
    <>
      {variant === ContainerVariantEnum.FULL ? (
        <div
          className={`max-w-[1432px] w-full 2xl:px-0 px-5 md:px-8 lg:px-10 mx-auto ${className}`}
        >
          {children}
        </div>
      ) : (
        <div
          className={`w-full px-5 md:px-8 lg:px-10 xl:px-[60px] 2xl:px-[5vw] mx-auto ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Container;
