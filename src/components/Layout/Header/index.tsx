// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Button from "@/components/Button";
// import { BtnVariantEnum, ModalTypesEnum } from "@/types/enums";
// import SignUpModal from "@/modals/SignupModal";
// import LoginModal from "@/modals/LoginModal";
// import { HamburgerIcon, NotificationIcon } from "@/components/Icons";
// import { usePathname, useRouter } from "next/navigation";
// import Avatar from "@/components/Avatar";
// import MenuButton from "@/components/MenuButton";
// import { useAppDispatch, useAppSelector } from "@/utils/store";
// import { logoutThunk } from "@/store/thunks/authThunk";
// import { openLoginModal } from "@/store/slices/authSlice";
// import CreatePostModal from "@/modals/CreatePostModal";

// type HeaderProps = {
//   links: {
//     label: string;
//     link: string;
//   }[];
// };

// const Header: React.FC<HeaderProps> = ({ links }) => {
//   const dispatch = useAppDispatch();
//   const { user, showLoginModal } = useAppSelector((state) => state.auth);
//   const isAuthenticated = useAppSelector((state) => state.auth.isLoggedin);
//   const buttonRef = useRef<HTMLDivElement>(null);
//   const [showMenu, setShowMenu] = useState(false);
//   const [showModal, setShowModal] = useState<ModalTypesEnum | "">("");
//   const [mobileNav, setMobileNav] = useState(false);
//   const [scrolling, setScrolling] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleMenuVisibility = (d: boolean) => setShowMenu(Boolean(d));
//   const handleModalVisibility = (data?: ModalTypesEnum) => {
//     if (data) {
//       setShowModal(data);
//     } else {
//       setShowModal("");
//       dispatch(openLoginModal(false));
//     }
//   };
//   const toggleMobileNav = () => setMobileNav(!mobileNav);

//   const navActions = [
//     {
//       text: "Sign Up",
//       variant: BtnVariantEnum.SECONDARY,
//       onClick: () => handleModalVisibility(ModalTypesEnum.SIGN_UP),
//     },
//     {
//       text: "Login",
//       variant: BtnVariantEnum.PRIMARY,
//       onClick: () => handleModalVisibility(ModalTypesEnum.LOG_IN),
//     },
//   ];

//   const menuItems = [
//     {
//       label: "Profile",
//       onClick: () => router.push("/profile"),
//     },
//     {
//       label: "Logout",
//       onClick: () =>
//         dispatch(logoutThunk({ redirect: () => router.push("/") })),
//     },
//   ];

//   useEffect(() => {
//     if (mobileNav) {
//       window.document.body.style.height = "100vh";
//       window.document.body.style.overflow = "hidden";
//     } else {
//       window.document.body.style.height = "fit-content";
//       window.document.body.style.overflow = "auto";
//     }
//   }, [mobileNav]);

//   useEffect(() => {
//     (function () {
//       setMobileNav(false);
//     })();
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleOutsideClick = (e: any) => {
//       if (buttonRef.current && !buttonRef.current.contains(e.target)) {
//         handleMenuVisibility(false);
//       }
//     };

//     if (showMenu) {
//       document.addEventListener("click", handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [showMenu]);

//   return (
//     <>
//       <header
//         className={`fixed w-full z-[100] top-0 px-5 h-20 lg:h-[95px] lg:px-10 duration-300 ${
//           ["/", "/explore"].includes(pathname) && !scrolling && !mobileNav
//             ? "bg-transparent"
//             : "bg-darkBlue"
//         }`}
//       >
//         <div className="flex h-full flex-row justify-between bg-[inherit] items-center relative z-[101]">
//           <Link href={"/"}>
//             <h2 className="flex">
//               <span className="text-white text-[26px] font-medium">Oppo</span>{" "}
//               <span className="text-midBlue text-[26px] font-medium">Zone</span>
//             </h2>
//           </Link>
//           <ul className="hidden md:flex text-white items-center flex-1 gap-[30px] xl:gap-[48px] ml-[30px] xl:ml-[56px]">
//             {links.map(({ label, link }, i) => (
//               <li key={i}>
//                 <Link href={link}>{label}</Link>
//               </li>
//             ))}
//           </ul>
//           {!isAuthenticated ? (
//             <div className="hidden md:flex items-center gap-5 xl:gap-8">
//               {navActions.map(({ text, variant, onClick }, i) => (
//                 <Button variant={variant} key={i} onClick={onClick}>
//                   {text}
//                 </Button>
//               ))}
//             </div>
//           ) : (
//             <div className="flex flex-1 justify-end mr-5 md:mr-0 gap-5 md:gap-7 items-center">
//               <button
//                 className="bg-midBlue border-[1px] w-[68px] text-white h-[28px] border-white inline"
//                 onClick={() =>
//                   handleModalVisibility(ModalTypesEnum.CREATE_POST)
//                 }
//               >
//                 + New
//               </button>

//               {/* <Link href={"/notifications"}>
//                 <div className="relative">
//                   <div className="text-[14px] top-[-16px] right-[-16px] text-white font-bold px-[6px] z-[10] absolute bg-midBlue">
//                     2
//                   </div>
//                   <i className="cursor-pointer relative">
//                     <NotificationIcon />
//                   </i>
//                 </div>
//               </Link> */}

//               <div
//                 ref={buttonRef}
//                 className="cursor-pointer relative z-[5] outline-none"
//                 onClick={() => handleMenuVisibility(!showMenu)}
//               >
//                 <Avatar
//                   imageSrc={user?.avatar || "/auth/avatar.png"}
//                   className="w-8 h-8"
//                 />
//                 <div className="absolute top-5 right-[-40px] md:right-[-20px] xl:right-5 2xl:right-14">
//                   <MenuButton
//                     hideButton
//                     toggle={handleMenuVisibility}
//                     items={menuItems}
//                     show={showMenu}
//                     tooltip=""
//                     h={100}
//                     w={100}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="flex md:hidden text-white">
//             <button onClick={toggleMobileNav}>
//               <i>
//                 <HamburgerIcon />
//               </i>
//             </button>
//           </div>
//         </div>
//         {/* Responsive Navbar */}
//         <div
//           className={`block md:hidden absolute duration-500 ease-out top-0 left-0 h-[100vh] z-[-2] px-5 bg-darkBlue w-full translate-y-[-100%] ${
//             mobileNav ? "translate-y-[0%] z-[99]" : "translate-y-[-100%]"
//           }`}
//         >
//           <ul className="flex flex-col text-white mt-[70px] justify-center flex-1">
//             {links.map(({ label, link }, i) => (
//               <li
//                 key={i}
//                 className="border-b-[1px] border-[rgba(255,255,255,0.3)] last:border-none w-full"
//               >
//                 <Link href={link} className="w-full block py-5">
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="flex flex-col justify-center gap-[30px] mt-4">
//             {!isAuthenticated &&
//               navActions.map(({ text, variant, onClick }, i) => (
//                 <Button variant={variant} key={i} onClick={onClick}>
//                   {text}
//                 </Button>
//               ))}
//           </div>
//         </div>
//       </header>

//       {showModal === ModalTypesEnum.SIGN_UP && (
//         <SignUpModal onClose={handleModalVisibility} />
//       )}
//       {(showModal === ModalTypesEnum.LOG_IN || showLoginModal) && (
//         <LoginModal onClose={handleModalVisibility} />
//       )}
//       {showModal === ModalTypesEnum.CREATE_POST && (
//         <CreatePostModal onClose={handleModalVisibility} />
//       )}
//     </>
//   );
// };

// export default Header;
