import React, { useState } from 'react';

const CommentForm = (btnLabel) => {
  const [value, setValue] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
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
