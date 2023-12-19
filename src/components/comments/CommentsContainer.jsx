import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ loggedinUserId }) => {
   //creating a state with empty initial
   const [comments, setComments] = useState([]);

   //Getting the main comments/parents comments
   //filtering the comments who have no parent
   const mainComments = comments.filter((comment) => comment.parent === null);
   const [affectedComment, setAffectedComment] = useState(null);

   //   Creating a state to reply and edit a comment

   //fill the state with the data from getCommentsData(putt all data in it)
   useEffect(() => {
      (async () => {
         const commentData = await getCommentsData();
         setComments(commentData);
      })();
   }, []);
   console.log(comments);

   //this is for the comment handler
   const addCommentHandler = (value, parent = null, replyOnUser = null) => {
      //creating a variable newComment that stores the new comment
      const newComment = {
         _id: Math.random().toString(),
         user: {
            _id: "a",
            name: "Mohammad Rezaii",
         },
         desc: value,
         post: "1",
         parent: parent,
         replyOnUser: replyOnUser,
         createdAt: new Date().toISOString(),
      };

      //adding comments to comments data
      setComments((curState) => {
         return [newComment, ...curState];
      });
      setAffectedComment(null);
   };

   const updateCommentHadler = (value, commentId) => {
      setComments((curState) => {
         return curState.map((comment) => {
            if (comment._id === commentId) {
               return { ...comment, desc: value };
            }
            return comment;
         });
      });
      setAffectedComment(null);
   };

   // Delete comment
   const deleteCommentHandler = (commentId) => {
      setComments((curState) => {
         return curState.filter((comment) => comment._id !== commentId);
      });
      setAffectedComment(null);
   };

   // A handler placing all the child comment of the parent comment
   const getRepliesHandler = (commentId) => {
      return comments
         .filter((comment) => comment.parent === commentId)
         .sort((a, b) => {
            return (
               new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
         });
   };

   return (
      <div className="comments-container">
         <CommentForm
            btnLabel="Add Comment"
            //passing the formSubmitHandler function with addCommentHandler
            formSubmitHandler={(value) => addCommentHandler(value)}
         />

         <div className="comments-area">
            {/* rendering the main comments/parents comments fromt the mainComments */}
            {mainComments.map((comment) => (
               <Comment
                  key={comment._id}
                  comment={comment}
                  loggedinUserId={loggedinUserId}
                  affectedComment={affectedComment}
                  setAffectedComment={setAffectedComment}
                  addComment={addCommentHandler}
                  updateComment={updateCommentHadler}
                  deleteComment={deleteCommentHandler}
                  replies={getRepliesHandler(comment._id)}
               />
            ))}
         </div>
      </div>
   );
};

export default CommentsContainer;
