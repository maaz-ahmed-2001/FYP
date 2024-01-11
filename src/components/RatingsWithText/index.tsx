import React, { useState } from "react";
import Ratings from "../Ratings";
import MenuButton, { MenuItemsProps } from "../MenuButton";
import { LikeIcon } from "../Icons";
import { openLoginModal } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import { likePostThunk } from "@/store/thunks/postThunk";
import { useParams } from "next/navigation";

type RatingsWithText = {
  comment?: string;
  isTitle?: boolean;
  showStars?: boolean;
  menuOptions?: MenuItemsProps;
  is_like: boolean | null;
  no_of_likes: number | null;
  no_of_dislikes: number | null;
};

const RatingsWithText: React.FC<RatingsWithText> = ({
  comment,
  showStars,
  menuOptions,
  isTitle = false,
  is_like,
  no_of_dislikes,
  no_of_likes,
}) => {
  const postId = useParams();
  const dispatch = useAppDispatch();
  const { isLoggedin } = useAppSelector((state) => state.auth);
  const [showPostMenu, setShowPostMenu] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  // Likes
  const [likes, setLikes] = useState(no_of_likes === null ? 0 : no_of_likes);
  const [liked, setLiked] = useState(is_like === true ? true : false);
  const handleLike = async () => {
    if (isLoggedin) {
      await dispatch(
        likePostThunk({ is_like: true, post_id: Number(postId.id) })
      );
      setLiked(!liked);
      if (disliked) {
        setDisliked(!disliked);
        setDislikes(dislikes - 1);
      }
      if (liked) {
        setLikes(is_like ? (no_of_likes || 0) - 1 : no_of_likes || 0);
      } else {
        setLikes(is_like ? likes + 1 : (no_of_likes || 0) + 1);
      }
    } else {
      dispatch(openLoginModal(true));
    }
  };
  // Dislikes
  const [dislikes, setDislikes] = useState(
    no_of_dislikes === null ? 0 : no_of_dislikes
  );
  const [disliked, setDisliked] = useState(is_like === false ? true : false);
  const handleDislike = async () => {
    if (isLoggedin) {
      await dispatch(
        likePostThunk({ is_like: false, post_id: Number(postId.id) })
      );
      setDisliked(!disliked);
      if (liked) {
        setLiked(!liked);
        setLikes(likes - 1);
      }
      if (disliked) {
        setDislikes(
          is_like === false ? (no_of_dislikes || 0) - 1 : no_of_dislikes || 0
        );
      } else {
        setDislikes(
          is_like === false ? dislikes + 1 : (no_of_dislikes || 0) + 1
        );
      }
    } else {
      dispatch(openLoginModal(true));
    }
  };

  const handleRatingChange = (rating: number) => {
    setUserRating(rating);
    // You can store the rating in your application state or send it to an API here.
  };
  const handleMenuVisibility = (d: boolean) => setShowPostMenu(Boolean(d));

  return (
    <div
      className={`border-[1px] border-borderGrey ${
        isTitle ? "rounded-[3px]" : "rounded-[16px]"
      } p-5 md:h-[115px] flex flex-col items-start justify-center gap-5 relative`}
    >
      {showStars && (
        <div>
          <Ratings totalStars={5} onRatingChange={handleRatingChange} />
        </div>
      )}
      <p
        className={`${
          isTitle
            ? "text-[18px] md:text-[23px] font-medium tracking-[-0.152px]"
            : "text-[15px] font-[400] tracking-[-0.152px]"
        }`}
      >
        {comment}
      </p>
      <div className="flex items-center gap-[6px]">
        <i
          className={`${
            isLoggedin && liked ? "text-midBlue" : "text-transparent"
          } cursor-pointer`}
          onClick={handleLike}
        >
          <LikeIcon
            strokeColor={isLoggedin && liked ? "currentColor" : "#000"}
          />
        </i>
        <span className="text-[12px]">{likes}</span>
        <i
          className="scale-y-[-1] mt-1 ml-1 block cursor-pointer"
          onClick={handleDislike}
        >
          <LikeIcon
            strokeColor={"currentColor"}
            color={isLoggedin && disliked ? "#000" : "transparent"}
          />
        </i>
        <span className="text-[12px]">{dislikes}</span>
      </div>
      {menuOptions && (
        <div className="absolute right-[10px] top-[20%]">
          <MenuButton
            toggle={handleMenuVisibility}
            items={menuOptions}
            show={showPostMenu}
            h={90}
            w={200}
          />
        </div>
      )}
    </div>
  );
};

export default RatingsWithText;
