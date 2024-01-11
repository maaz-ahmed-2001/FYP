// import React from "react";
// import { usePathname } from "next/navigation";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { HomeIcon, PhoneIcon, ProfileIcon, SettingsIcon } from "../Icons";
// import { useAppSelector } from "@/utils/store";
// import { useRouter } from "next/router";

// type LayoutProps = {
//   children?: React.ReactNode;
// };

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const isAuthenticated = useAppSelector((state) => state.auth.isLoggedin);
//   const router = useRouter();
//   const pathname = usePathname();
//   const asPath = router.pathname;

//   const dashboardRoutes = [
//     "/dashboard/overview",
//     "/dashboard/following",
//     "/dashboard",
//     "/dashboard/recent",
//     "/dashboard/recommended",
//   ];
//   const settingRoutes = [
//     "/settings",
//     "/settings/profile",
//     "/settings/email-password",
//   ];
//   const profileRoutes = ["/profile"];

//   const navLinks = [
//     {
//       label: "Home",
//       link: "/",
//     },
//     {
//       label: "Explore",
//       link: "/explore",
//     },
//   ];

//   const sidebarLinks = [
//     {
//       icon: <HomeIcon />,
//       link: "/dashboard",
//       label: "dashboard",
//       isActive: dashboardRoutes.includes(pathname) ? true : false,
//     },
//     {
//       icon: <ProfileIcon />,
//       link: "/profile",
//       label: "my profile",
//       isActive: profileRoutes.includes(pathname) ? true : false,
//     },
//     {
//       icon: <SettingsIcon />,
//       link: "/settings/profile",
//       label: "settings",
//       isActive: settingRoutes.includes(pathname) ? true : false,
//     },
//     {
//       icon: <PhoneIcon />,
//       link: "/contact",
//       label: "contact support",
//       isActive: false,
//     },
//   ];

//   const routesWithoutSidebar = [
//     "/forgot-password",
//     "/",
//     "/explore",
//     "/contact",
//     "/privacy-policy",
//     "/post/[id]",
//     "/topic/[name]",
//     "/popular-posts",
//     "/recent-posts",
//   ];

//   const showSidebar = () => {
//     if (isAuthenticated) {
//       if (routesWithoutSidebar.includes(asPath)) {
//         return false;
//       } else {
//         return true;
//       }
//     } else {
//       false;
//     }
//   };

//   return (
//     <main className="min-h-[100vh] relative">
//       <Header links={navLinks} />
//       <div className="relative">
//         {showSidebar() && (
//           <div className="absolute h-full pt-20 lg:pt-[95px]">
//             <Sidebar links={sidebarLinks} />
//           </div>
//         )}
//         <div
//           className={`w-full ${
//             ["/", "/explore"].includes(pathname) ? "" : "pt-20 lg:pt-[95px]"
//           } ${
//             showSidebar()
//               ? "max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-220px)] lg:max-w-[calc(100vw-240px)] ml-auto max-h-[100vh] overflow-y-auto"
//               : ""
//           }`}
//         >
//           {children}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Layout;
