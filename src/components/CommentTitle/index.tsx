import React from "react";
import { PlusIcon } from "../Icons";

type CommentTitleProps = {
  className?: string;
};

const CommentTitle: React.FC<CommentTitleProps> = ({ className = "" }) => {
  return (
    <div
      className={`${className} border-[1px] border-borderGrey rounded-[3px] w-full flex items-center`}
    >
      <div className="w-full flex flex-1 justify-center items-center relative border-r-[1px] border-borderGrey self-stretch">
        <p className="text-[20px] font-medium text-midGreen w-fit">Pros</p>
        <i className="text-midGreen absolute right-2">
          <PlusIcon />
        </i>
      </div>
      <div className="w-full flex flex-1 justify-center items-center relative self-stretch">
        <p className="text-[20px] font-medium text-midRed w-fit">Cons</p>
        <i className="text-midRed absolute right-2">
          <PlusIcon />
        </i>
      </div>
    </div>
  );
};

export default CommentTitle;
