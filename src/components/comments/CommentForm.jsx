import React, { useState } from "react";
import "./comment.css";

const CommentForm = ({ btnLabel, formSubmitHandler }) => {
   const [value, setValue] = useState("");
   //Submit handler function
   const submitHandler = (e) => {
      e.preventDefault();
      formSubmitHandler(value);
      setValue("");
   };
   return (
      <form onSubmit={submitHandler}>
         <div className="article-comment-form-wrapper">
            <textarea
               className="article-comment-form"
               name=""
               id=""
               rows="5"
               placeholder="Leave a comment"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="article-comment-form-btn">
               {btnLabel}
            </button>
         </div>
      </form>
   );
};

export default CommentForm;
