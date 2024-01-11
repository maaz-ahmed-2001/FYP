import React from "react";

const FullPageSpinner = () => {
  return (
    <div className="fixed h-[100dvh] w-[100vw] bg-white top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[1000000000000]">
      <div className="border-[10px] border-midRed border-r-transparent rounded-full aspect-square h-[100px] absolute spinner"></div>
    </div>
  );
};

export default FullPageSpinner;
