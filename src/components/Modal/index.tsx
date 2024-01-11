import React from "react";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
  rounded?: boolean;
};

const Modal: React.FC<ModalProps> = ({ children, onClose, rounded = true }) => {
  return (
    <div className="fixed top-0 h-[100vh] w-full left-0 right-0 bottom-0 z-[1000] flex justify-center items-center custom-scroll-bar">
      <div
        onClick={onClose}
        className="bg-black opacity-50 w-full h-full z-[1] absolute"
      ></div>
      <div
        className={`z-[2] max-h-[95vh] overflow-y-auto overflow-x-hidden flex-1 md:flex-[unset] ${
          rounded ? "rounded-[16px]" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
