import React from "react";
import { images } from "../../constants";
import { MdEditSquare, MdQuickreply, MdRemoveCircle } from "react-icons/md";

import CommentForm from "./CommentForm";

// This is a component to display a single comment
const Comment = ({
   comment,
   loggedinUserId,
   affectedComment,
   setAffectedComment,
   addComment,
   parentId = null,
}) => {
   // Creating a function to render the button to reply
   const isUserLoggedin = Boolean(loggedinUserId);

   //   Creating Edit and Delete Function in the comments
   const commentBelongsToUser = loggedinUserId === comment.user._id;
   const isReplying =
      affectedComment &&
      affectedComment.type === "replying" &&
      affectedComment._id === comment._id;

   const repliedCommentId = parentId ? parentId : comment._id;
   const replyOnUserId = comment.user._id;

   return (
      <div className="comment-box">
         <img src={images.theProfile} alt="user" className="comment-image" />
         <div className="comment-text">
            <h5 className="comment-name">{comment.user.name}</h5>
            <span className="comment-date">
               {new Date(comment.createdAt).toLocaleDateString("en", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
               })}
            </span>
            <p className="comment-desc">{comment.desc}</p>
            {/* This is for the button */}
            <div className="comment-action">
               {isUserLoggedin && (
                  <button
                     className="comment-reply"
                     onClick={() =>
                        setAffectedComment({
                           type: "replying",
                           _id: comment._id,
                        })
                     }
                  >
                     <MdQuickreply className="comment-action-icon" />
                     <span>Reply</span>
                  </button>
               )}
               {commentBelongsToUser && (
                  <>
                     <button className="comment-edit">
                        <MdEditSquare className="comment-action-icon" />
                        <span>Edit</span>
                     </button>
                     <button className="comment-delete">
                        <MdRemoveCircle className="comment-action-icon" />
                        <span>Delete</span>
                     </button>
                  </>
               )}
            </div>
            {isReplying && (
               <CommentForm
                  btnLabel="Reply"
                  formSubmitHandler={(value) =>
                     addComment(value, repliedCommentId, replyOnUserId)
                  }
               />
            )}
         </div>
      </div>
   );
};

export default Comment;
