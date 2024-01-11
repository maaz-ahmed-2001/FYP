import React, { useRef, useState } from "react";
// import { Swiper } from "swiper/react";
// import "swiper/css";
import { ArrowLeftIcon } from "../Icons";

type SliderProps = {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  breakpointProps?: {
    "320": any;
    "425": any;
    "768": any;
    "1024": any;
    "1280": any;
    "1532": any;
  };
};

const Slider: React.FC<SliderProps> = ({
  children,
  spaceBetween,
  slidesPerView = "auto",
  breakpointProps,
}) => {
  const mySwiper = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginnig, setIsBeginning] = useState(false);
  const swipePrev = () => {
    mySwiper.current.slidePrev?.();
  };
  const swipeNext = () => {
    mySwiper.current?.slideNext?.();
  };
  return (
    <div className="relative">
      <button
        onClick={swipePrev}
        className="w-10 lg:w-[70px] absolute left-0 z-[2] top-[50%] translate-y-[-50%] outline-none translate-x-[-50%] h-10 lg:h-[70px] flex justify-center items-center rounded-full bg-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.10)]"
      >
        <i>
          <ArrowLeftIcon />
        </i>
      </button>
      {/* <Swiper
        breakpoints={{
          320: breakpointProps?.[320],
          425: breakpointProps?.[425],
          768: breakpointProps?.[768],
          1024: breakpointProps?.[1024],
          1280: breakpointProps?.[1280],
          1532: breakpointProps?.[1532],
        }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={(e) => {
          setIsEnd(e.isEnd);
          setIsBeginning(e.isBeginning);
          setCurrentSlide(e.realIndex);
        }}
        onInit={(ev) => {
          setIsBeginning(ev.isBeginning);
          mySwiper.current = ev;
        }}
      >
        {children}
      </Swiper> */}
      <button
        onClick={swipeNext}
        className="w-10 lg:w-[70px] absolute right-0 z-[2] top-[50%] translate-y-[-50%] outline-none translate-x-[50%] h-10 lg:h-[70px] flex justify-center items-center rounded-full bg-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.10)]"
      >
        <i>
          <ArrowLeftIcon className="scale-[-1]" />
        </i>
      </button>
    </div>
  );
};

export default Slider;
