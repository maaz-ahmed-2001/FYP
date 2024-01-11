import Link from "next/link";
import React, { useState } from "react";

type TabsProps = {
  tabsData: {
    label: string;
    id: string;
    onClick?: () => void;
    link?: string;
  }[];
  navigation?: boolean;
  activeTabId?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabsData,
  navigation = false,
  activeTabId,
}) => {
  return (
    <div className="">
      {tabsData.map(({ id, label, onClick, link }, i) => (
        <div key={i}>
          <p
            onClick={onClick}
            className={`${
              activeTabId === id
                ? "text-midBlue border-midBlue"
                : "text-black border-transparent"
            } border-b-[2px] capitalize font-[700]`}
          >
            {navigation ? (
              <Link href={link || ""}>{label}</Link>
            ) : (
              <span>{label}</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
