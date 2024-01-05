import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import SuggestedPost from "./container/SuggestedPost";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import { Link, useNavigate, useParams } from "react-router-dom";
import { images, stables } from "../../constants";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import { generateHTML } from "@tiptap/html";
import parse from "html-react-parser";

import "./articledetail.css";
import CommentsContainer from "../../components/comments/CommentsContainer";

import { deletePost, getSinglePost } from "../../services/index/posts";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const postData = [
   {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
   {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
   {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
   {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
   {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
];

const tagsData = ["Programming", "Development", "Testing"];

const ArticleDetailPage = () => {
   const { slug } = useParams();
   const [breadCrumbsData, setBreadCrumbsData] = useState([]);
   const [body, setBody] = useState([null]);
   const userState = useSelector((state) => state.user);
   const navigate = useNavigate();
   const { data } = useQuery({
      queryKey: ["getSinglePost", slug],
      queryFn: () => getSinglePost({ slug }),
      enabled: !!slug,
   });

   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      // Simulate data fetching (replace with your actual data fetching logic)
      setTimeout(() => {
         setIsLoading(false);
      }, 2000);
   }, []);

   useEffect(() => {
      if (data) {
         // Set breadcrumbs and body together
         setBreadCrumbsData([
            { name: "Home", link: "/" },
            { name: "Article", link: "/" },
            { name: `${data.title}`, link: `/topics/${data.slug}` },
         ]);
         setBody(
            parse(
               generateHTML(data?.body, [
                  Bold,
                  Italic,
                  Document,
                  Paragraph,
                  Text,
               ])
            )
         );
      }
   }, [data]);
   console.log(data);

   const handleDeletePost = async () => {
      try {
         // Call the deletePost function to delete the post
         const result = await deletePost({
            token: userState.userInfo.token,
            slug,
         });
         console.log(result); // Log the result or handle success accordingly
         // Check if the deletion was successful
         if (result) {
            // Display success toast
            toast.success("Post Deleted Successfully");

            // Redirect to the homepage
            navigate("/");
         } else {
            // Handle deletion failure (optional)
            // You can display an error toast or handle it in other ways
            toast.error("Failed to delete post");
         }

         // Redirect or perform other actions after successful deletion
      } catch (error) {
         console.error(error.message);
         // Handle errors, display error message, etc.
      }
   };

   return (
      <MainLayout>
         <div className="article">
            <div className="article-sidebar-left">
               <SidebarLeft />
            </div>
            <section className="article-detail-page">
               <article className="article-detail">
                  <BreadCrumbs data={breadCrumbsData} />
                  {/* Generating the BreadCrumbs from the data */}
                  {isLoading ? (
                     <LoadingSpinner /> // Display loading spinner while loading
                  ) : (
                     <>
                        <div className="article-img-box">
                           {/* Redering the image */}
                           <img
                              src={
                                 data?.photo
                                    ? stables.UPLOAD_FOLDER_BASE_URL +
                                      data?.photo
                                    : images.noImage
                              }
                              alt={data?.title}
                              className="article-img"
                           />
                        </div>
                        <div className="article-categories">
                           {data?.categories.map((category) => (
                              <Link
                                 to={`/topics?category=${category.name}`}
                                 className="article-category"
                              >
                                 {category.name}
                              </Link>
                           ))}
                        </div>

                        <h1 className="article-title">{data?.title}</h1>
                        <p className="article-post">{data?.caption}</p>

                        {userState.userInfo &&
                           data &&
                           //The logged-in user is the author of the post
                           (userState.userInfo._id === data.user._id ||
                              //The logged-in user has the role of 'admin'.
                              userState.userInfo.role === "admin" ||
                              // The logged-in user has the role of 'moderator'.
                              userState.userInfo.role === "moderator") && (
                              <div className="article-option-btn">
                                 <Link to={`/edit-post/${data.slug}`}>
                                    <button className="edit-post">
                                       Edit Post
                                    </button>
                                 </Link>
                                 <button
                                    onClick={handleDeletePost}
                                    className="delete-post"
                                 >
                                    Delete Post
                                 </button>
                              </div>
                           )}
                     </>
                  )}

                  <CommentsContainer
                     comments={data?.comments}
                     className="comments-container"
                     loggedinUserId={userState?.userInfo?._id}
                  />
               </article>
               <SuggestedPost
                  header="Latest Article"
                  post={postData}
                  tags={tagsData}
               />
            </section>
            <div className="article-sidebar-right sticky">
               <SidebarRight />
            </div>
         </div>
      </MainLayout>
   );
};

export default ArticleDetailPage;
