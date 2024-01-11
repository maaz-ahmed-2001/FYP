import React, { useState } from "react";
import { RatingsIcon } from "../Icons";
import styles from "./style.module.css";

interface RatingProps {
  totalStars: number;
  initialRating?: number;
  onRatingChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  totalStars,
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarHover = (starIndex: number) => {
    setHoveredRating(starIndex);
  };

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
    onRatingChange(starIndex);
  };

  const resetHoveredRating = () => {
    setHoveredRating(0);
  };

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoveredRating || rating);
        return (
          <span
            key={index}
            className={`star cursor-pointer ${
              isFilled ? styles.isFilled : "text-white"
            }`}
            onMouseEnter={() => handleStarHover(starValue)}
            onMouseLeave={resetHoveredRating}
            onClick={() => handleStarClick(starValue)}
          >
            <i className="text-[inherit]">
              <RatingsIcon color="currentColor" strokeColor="#0061C2" />
            </i>
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
