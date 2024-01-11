import React from "react";
import Button from "../Button";
import { BtnVariantEnum } from "@/types/enums";
import { useAppSelector } from "@/utils/store";

type CommentFieldProps = {
  value?: string;
  onChange?: (e: any) => void;
  onClick?: () => void;
};

const CommentField: React.FC<CommentFieldProps> = ({
  onChange,
  value,
  onClick,
}) => {
  const { _comment } = useAppSelector((state) => state.post);
  return (
    <div className="flex items-center w-full mt-[2px] gap-2">
      <input
        type="text"
        placeholder="Add a new comment..."
        value={value}
        onChange={onChange}
        className="w-full outline-none h-auto border-[1px] border-borderGrey rounded-[3px] px-3 flex-1 self-stretch"
      />
      <Button
        variant={BtnVariantEnum.PRIMARY}
        onClick={onClick}
        disabled={_comment.isLoading}
        className="shrink-0 w-[120px] h-[40px]"
      >
        Comment
      </Button>
    </div>
  );
};

export default CommentField;
