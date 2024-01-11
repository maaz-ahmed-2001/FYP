// import React, { useState } from "react";
// import Avatar from "../Avatar";
// import { EarthIcon, LikeIcon, ShareIcon } from "../Icons";
// import Button from "../Button";
// import { BtnVariantEnum } from "@/types/enums";
// import styles from "./style.module.css";
// import { useAppDispatch, useAppSelector } from "@/utils/store";
// import { openLoginModal } from "@/store/slices/authSlice";
// // import { createNewReplyThunk } from "@/store/thunks/postThunk";
// import { useParams } from "next/navigation";
// // import { CommentType } from "@/containers/PostContainer";

// export type Comment = {
//   id: number;
//   user: {
//     id: number;
//     avatar: string;
//     username: string;
//   };
//   comment: string;
//   replies: Comment[];
//   timestamp: any;
// };

// interface CommentProps {
//   isReply?: boolean;
//   comment: Comment;
//   onReply: (parentId: number | null, reply: Comment) => void;
//   type: CommentType;
// }

// const CommentBox: React.FC<CommentProps> = ({
//   comment,
//   onReply,
//   isReply,
//   type,
// }) => {
//   const { user, isLoggedin } = useAppSelector((state) => state.auth);
//   const params = useParams();
//   const dispatch = useAppDispatch();

//   const [replyText, setReplyText] = useState("");
//   const [showReplies, setShowReplies] = useState(
//     comment.replies && comment.replies.length > 3 ? false : true
//   );
//   const [enableReply, setEnableReply] = useState(false);
//   const [replyToComment, setReplyToComment] = useState(false);

//   const handleDate = (date: string) => {
//     const now: any = new Date();
//     const time: any = new Date(date);

//     const seconds = Math.floor((now - time) / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);

//     if (days > 0) {
//       return `${days}d.`;
//     } else if (hours > 0) {
//       return `${hours}h.`;
//     } else if (minutes > 0) {
//       return `${minutes} mins.`;
//     } else {
//       return `${seconds}s.`;
//     }
//   };

//   const handleReply = async () => {
//     if (isLoggedin) {
//       if (replyText) {
//         const res = await dispatch(
//           createNewReplyThunk({
//             comment: replyText,
//             parent_id: comment.id,
//             post_id: Number(params.id),
//             type,
//           })
//         );
//         const newReply: Comment = {
//           id: res.payload.id,
//           user: {
//             id: user?.user_id!,
//             avatar: user?.avatar || "/auth/avatar.png",
//             username: user?.username || "John Doe",
//           }, // Replace with user information
//           comment: replyText,
//           timestamp: new Date(),
//           replies: [],
//         };

//         onReply(comment.id, newReply); // Pass the parent comment ID
//         setReplyText("");
//         setEnableReply(false);
//         setReplyToComment(false);
//       }
//     } else {
//       dispatch(openLoginModal(true));
//     }
//   };

//   return (
//     <div
//       className={`${
//         isReply ? "" : "border-[1px] pb-4 "
//       } rounded-[16px] border-borderGrey ${
//         !isReply && !(comment?.replies?.length! > 0) ? "!pb-0" : ""
//       }`}
//     >
//       <div className="comment relative">
//         <div
//           className={`flex ${
//             isReply
//               ? "items-start pr-2 py-0 "
//               : "items-center border-b-[1px] py-3 px-[15px]"
//           } gap-2  border-borderGrey relative`}
//         >
//           <Avatar
//             imageSrc={comment.user.avatar}
//             className={`${isReply ? "w-8 h-8" : "w-9 h-9"}`}
//           />
//           <div
//             className={
//               isReply
//                 ? "bg-[#f0f2f5] rounded-[16px] px-3 py-1 flex flex-col"
//                 : ""
//             }
//           >
//             <span
//               className={
//                 isReply ? "text-[12px] font-medium" : "text-[14px] font-medium"
//               }
//             >
//               {comment.user.username}
//             </span>
//             {isReply ? (
//               <span className="text-[14px]">{comment.comment}</span>
//             ) : (
//               <span className="flex items-center gap-1 text-darkGrey text-[11px]">
//                 {handleDate(comment.timestamp)}
//                 <i>
//                   <EarthIcon />
//                 </i>
//               </span>
//             )}
//           </div>
//         </div>
//         {isReply && (
//           <div className="relative ml-14 pr-10">
//             <div className="flex items-center gap-2 text-darkGrey">
//               <span
//                 className="text-[12px] font-bold cursor-pointer"
//                 onClick={() => {
//                   if (isLoggedin) {
//                     setEnableReply(!enableReply);
//                   } else {
//                     dispatch(openLoginModal(true));
//                   }
//                 }}
//               >
//                 Reply
//               </span>
//               <span className="text-[12px]">
//                 {handleDate(comment.timestamp)}
//               </span>
//             </div>
//             {enableReply && (
//               <div className="flex w-full items-center gap-2 mt-2">
//                 <input
//                   type="text"
//                   placeholder="Write a reply..."
//                   value={replyText}
//                   className="max-w-[300px] text-[14px] outline-none border-[1px] rounded-[3px] border-borderGrey px-2 self-stretch"
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <Button
//                   onClick={
//                     !replyText ? () => setEnableReply(false) : handleReply
//                   }
//                   className="flex items-center gap-[6px] w-20 h-[30px] text-[12px]"
//                 >
//                   {replyText ? "Post" : "X"}
//                 </Button>
//               </div>
//             )}
//           </div>
//         )}
//         {!isReply && (
//           <div className="px-7 py-4 text-[15px] border-b-[1px] border-borderGrey">
//             {comment.comment}
//           </div>
//         )}
//         {isReply && comment.replies && comment.replies.length > 2 && (
//           <button
//             onClick={() => setShowReplies(!showReplies)}
//             className={isReply ? "text-[12px] ml-16 font-bold" : ""}
//           >
//             {showReplies ? "Hide Replies" : "Show Replies"}
//           </button>
//         )}
//         {!isReply ? (
//           <div className="flex items-center px-5 py-4">
//             <button
//               onClick={() => {
//                 if (isLoggedin) {
//                   setReplyToComment(!replyToComment);
//                 } else {
//                   dispatch(openLoginModal(true));
//                 }
//               }}
//               className="flex items-center gap-[6px] text-[12px] ml-auto"
//             >
//               <i className="text-darkGrey rotate-180 block">
//                 <ShareIcon color="currentColor" />
//               </i>
//               Reply
//             </button>
//           </div>
//         ) : null}
//       </div>
//       {replyToComment && (
//         <div className="flex items-center gap-2 mb-3 pt-3 px-3 border-t-[1px] border-borderGrey">
//           <input
//             type="text"
//             placeholder="Write a reply..."
//             value={replyText}
//             className="flex-1 outline-none border-[1px] rounded-[3px] px-3 border-borderGrey self-stretch"
//             onChange={(e) => setReplyText(e.target.value)}
//           />
//           <Button
//             onClick={!replyText ? () => setReplyToComment(false) : handleReply}
//             variant={BtnVariantEnum.PRIMARY}
//             className="w-[100px] text-[12px] ml-auto"
//           >
//             {replyText ? "Post" : "X"}
//           </Button>
//         </div>
//       )}
//       {comment?.replies.length > 0 && (
//         <div
//           className={`${styles.commentDiv} ${
//             isReply && comment.replies.length > 0 ? "" : "border-t-[1px]"
//           } border-borderGrey px-[15px] ${showReplies ? " pt-4" : ""}`}
//         >
//           {comment.replies.length > 3 && (
//             <button
//               className={`text-darkGrey text-[14px] font-bold ${
//                 comment.replies.length > 3 ? "mt-2" : ""
//               }`}
//               onClick={() => setShowReplies(!showReplies)}
//             >
//               {showReplies ? "Hide Replies" : "Show Replies"}
//             </button>
//           )}
//           {showReplies && comment.replies.length > 0 && (
//             <div
//               className={`flex flex-col gap-4 ${
//                 comment.replies.length > 3 ? "mt-5" : ""
//               }`}
//             >
//               {comment.replies.map((reply) => (
//                 <CommentBox
//                   key={reply.id}
//                   comment={reply}
//                   onReply={onReply}
//                   isReply
//                   type={type}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CommentBox;
