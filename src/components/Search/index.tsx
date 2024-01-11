import React from "react";

type SearchProps = {
  name?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  icon?: React.ReactNode;
  onSearch?: () => void;
  disable?: boolean;
};

const Search: React.FC<SearchProps> = ({
  onChange,
  icon,
  id,
  name,
  placeholder,
  value,
  onSearch,
  disable = false,
}) => {
  return (
    <div className="flex w-full items-center">
      <input
        className="px-4 py-[10px] text-darkGrey text-[16px] outline-none bg-transparent w-full"
        type="text"
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
      <button
        disabled={disable}
        onClick={onSearch}
        className={`flex h-auto justify-center items-center self-stretch ${
          disable ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <i
          className={`${
            disable ? "bg-borderGrey" : "bg-midBlue"
          } px-6 flex h-auto justify-center items-center self-stretch`}
        >
          {icon}
        </i>
      </button>
    </div>
  );
};

export default Search;
