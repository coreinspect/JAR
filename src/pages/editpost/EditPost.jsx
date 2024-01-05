import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import Header from "../../components/Header";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
   const { slug } = useParams();

   const userState = useSelector((state) => state.user);
   const queryClient = useQueryClient();
   const navigate = useNavigate();
   const [title, setTitle] = useState("");
   const [caption, setCaption] = useState("");

   const [isLoadingUpdatePost, setIsLoadingUpdatePost] = useState(false);

   useEffect(() => {
      const fetchPostDetails = async () => {
         try {
            const response = await fetch(
               `https://jarcommunity-api.onrender.com/api/posts/${slug}`
            );
            if (!response.ok) {
               throw new Error("Failed to fetch post details");
            }

            const data = await response.json();
            console.log("Fetched Post Data:", data); // Log the fetched data
            setTitle(data.title);
            setCaption(data.caption);
         } catch (error) {
            console.error(error);
            toast.error("Failed to fetch post details");
         }
      };

      fetchPostDetails();
   }, [slug]);

   const handleEditPost = async () => {
      if (!userState.userInfo) {
         toast.error("You need to be logged in to edit a post.");
         return;
      }
      const token = userState.userInfo.token;

      if (!title.trim() || !caption.trim()) {
         toast.error("Title and caption are required.");
         return;
      }
      setIsLoadingUpdatePost(true);
      try {
         const formData = new FormData();
         formData.append("title", title);
         formData.append("caption", caption);
         const response = await fetch(`/api/posts/${slug}`, {
            method: "PUT",
            headers: {
               Authorization: `Bearer ${token}`,
            },
            body: formData,
         });

         if (!response.ok) {
            throw new Error("Failed to edit post");
         }
         const data = await response.json();
         console.log("Server Response:", data);

         // Handle success, refresh data, navigate, etc.
         queryClient.invalidateQueries(["posts"]);
         toast.success("Post Edited Successfully");
         // ... additional logic as needed
      } catch (error) {
         console.error("Edit Post Error:", error);
         toast.error(error.message);
      } finally {
         setIsLoadingUpdatePost(false);
      }
   };

   return (
      <div>
         <Header />
         <div className="container new-post-container">
            <div className="sidebar-left sticky">
               <SidebarLeft />
            </div>
            <div className="newpost">
               {userState.userInfo ? (
                  <>
                     <h2 className="newpost-title">Edit Post</h2>
                     <div className="post-title">
                        <label htmlFor="title">Title:</label>
                        <input
                           type="text"
                           id="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder="Title of the Post"
                        />
                     </div>
                     <div className="post-caption">
                        <label htmlFor="caption">Content:</label>
                        <textarea
                           rows="10"
                           cols="50"
                           id="caption"
                           value={caption}
                           onChange={(e) => setCaption(e.target.value)}
                        />
                     </div>

                     <div className="post-btn-container">
                        <button
                           disabled={isLoadingUpdatePost}
                           onClick={handleEditPost}
                           className="post-btn"
                        >
                           {isLoadingUpdatePost ? "Editing..." : "Edit Post"}
                        </button>
                     </div>
                  </>
               ) : (
                  <p>
                     You need to be logged in to edit a post.{" "}
                     <a href="/login">Login</a>
                  </p>
               )}
            </div>
            <div className="sidebar-right sticky">
               <SidebarRight />
            </div>
         </div>
      </div>
   );
};

export default EditPost;
