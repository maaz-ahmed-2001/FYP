import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardNavigation: React.FC = () => {
  const pathname = usePathname();
  const links = [
    {
      label: "Overview",
      link: "/dashboard/overview",
    },
    {
      label: "Following",
      link: "/dashboard/following",
    },
    {
      label: "All",
      link: "/dashboard",
    },
    {
      label: "Recent",
      link: "/dashboard/recent",
    },
    {
      label: "Recommended",
      link: "/dashboard/recommended",
    },
  ];

  return (
    <div className="w-full border-b-[1px] border-lightGrey mt-5 md:mt-10 pb-5 md:pb-10 flex flex-wrap items-center gap-4 md:gap-10 xl:gap-14">
      {links.map(({ label, link }, i) => (
        <p
          key={i}
          className={`${
            pathname === link
              ? "text-midBlue border-midBlue"
              : "text-black border-transparent"
          } border-b-[2px] capitalize font-[700]`}
        >
          <Link href={link}>{label}</Link>
        </p>
      ))}
    </div>
  );
};

export default DashboardNavigation;
