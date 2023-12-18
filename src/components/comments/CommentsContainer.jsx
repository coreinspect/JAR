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

   //this is for the comment handler
   const addCommentHandler = (value, parent = null, replyOnUser = null) => {
      //creating a variable newComment that stores the new comment
      const newComment = {
         _id: "10",
         user: {
            _id: "a",
            name: "Mohammad Rezaii",
         },
         desc: value,
         post: "1",
         parent: parent,
         replyOnUser: replyOnUser,
         createdAt: "2022-12-31T17:22:05.092+0000",
      };

      //adding comments to comments data
      setComments((curState) => {
         return [newComment, ...curState];
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
                  comment={comment}
                  loggedinUserId={loggedinUserId}
                  affectedComment={affectedComment}
                  setAffectedComment={setAffectedComment}
                  addComment={addCommentHandler}
               />
            ))}
         </div>
      </div>
   );
};

export default CommentsContainer;
