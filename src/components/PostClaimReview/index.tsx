import React from "react";
import { CrossIcon } from "../Icons";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import { openLoginModal } from "@/store/slices/authSlice";

type PostClaimProps = {
  title: string;
  options: {
    label: string;
    onClick?: () => void;
  }[];
  onClose?: () => void;
};

const PostClaimReview: React.FC<PostClaimProps> = ({
  options,
  title,
  onClose,
}) => {
  const { isLoggedin } = useAppSelector((state) => state.auth);
  const { isLoading } = useAppSelector((state) => state.post._reportPost);
  const dispatch = useAppDispatch();
  const handleClick = (onclick: any) => {
    if (isLoggedin) {
      dispatch(openLoginModal(true));
    } else {
      onclick;
    }
  };
  return (
    <div className="rounded-[14px] bg-midGrey relative flex flex-col justify-center items-center pt-10 pb-20">
      <i className="absolute top-5 right-5 cursor-pointer" onClick={onClose}>
        <CrossIcon h={20} w={20} />
      </i>
      <h3 className="text-[28px] font-bold">Mark claim for review</h3>
      <div className="flex flex-col gap-7 mx-auto mt-7">
        {options.map(({ label, onClick }, i) => (
          <button
            key={i}
            onClick={onClick}
            disabled={isLoading}
            className={`shadow-[0px_2.30645px_2.30645px_0px_rgba(0,0,0,0.25)] text-[22px] md:text-[28px] capitalize min-w-[300px] md:min-w-[500px] xl:min-w-[590px] w-full flex justify-center items-center h-[50px] md:h-[80px] rounded-[6px] ${
              isLoading
                ? "bg-lightGrey cursor-not-allowed"
                : "bg-white cursor-pointer"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostClaimReview;
