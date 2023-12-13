import React, { useState } from "react";
import "./components.css";
import { images } from "../constants";

const ArticleCard = () => {
   const [activeTab, setActiveTab] = useState(1);

   const handleTabClick = (index) => {
      setActiveTab((prevActiveTab) =>
         prevActiveTab === index ? prevActiveTab : index
      );
   };

   const tabTitles = ["Latest", "Popular", "Featured"];

   // Array of content for each tab
   const tabContents = [
      // This is for Latest Content TAB
      <div className="latest-content">
         <div className="latest">
            <div className="latest-img">
               <img
                  src={images.latestPost}
                  alt="Latest Post"
                  className="responsive-image"
               />
            </div>
            <div className="latest-text">
               <h2>
                  Need to stay up-to-date with the most relevant trends in
                  software.
               </h2>
               <p>
                  You can do so much more once you create your account. Follow
                  the devs and topics you care about, and keep up-to-date.
               </p>
               <div className="latest-tags">
                  <ul>
                     <li>
                        <a href="/" className="javascript">
                           #javascript
                        </a>
                     </li>
                     <li>
                        <a href="/" className="html">
                           #html
                        </a>
                     </li>
                     <li>
                        <a href="/" className="css">
                           #css
                        </a>
                     </li>
                     <li>
                        <a href="/" className="tip">
                           #tip
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="read-profile">
                  <a href="/" className="read-more">
                     Read More
                  </a>
                  <div className="post-profile">
                     <img
                        src={images.theProfile}
                        className="profile"
                        alt="The Profile"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="previous-content">
            <div className="previous-post">
               <h2>The Ultimate Deployment Guide</h2>
               <p>
                  Explore the step-by-step guide to deploying GitLab on
                  Kubernetes, focusing on the Omnibus package configuration.
               </p>
               <div className="latest-tags">
                  <ul>
                     <li>
                        <a href="/" className="development">
                           #development
                        </a>
                     </li>

                     <li>
                        <a href="/" className="github">
                           #github
                        </a>
                     </li>
                     <li>
                        <a href="/" className="tip">
                           #tip
                        </a>
                     </li>
                  </ul>
               </div>
               {/* This is for the Read More button */}
               <div className="read-profile">
                  <div className="readmore-comments">
                     <a href="/" className="read-more">
                        Read More
                     </a>

                     <a href="/" className="comments">
                        18 Comments
                     </a>
                  </div>
                  <div className="post-profile">
                     <img
                        src={images.theProfile}
                        className="profile"
                        alt="The Profile"
                     />
                  </div>
               </div>
            </div>
            <div className="previous-post">
               <h2>The Ultimate Deployment Guide</h2>
               <p>
                  Explore the step-by-step guide to deploying GitLab on
                  Kubernetes, focusing on the Omnibus package configuration.
               </p>
               <div className="latest-tags">
                  <ul>
                     <li>
                        <a href="/" className="development">
                           #development
                        </a>
                     </li>

                     <li>
                        <a href="/" className="github">
                           #github
                        </a>
                     </li>
                     <li>
                        <a href="/" className="tip">
                           #tip
                        </a>
                     </li>
                  </ul>
               </div>
               {/* This is for the Read More button */}
               <div className="read-profile">
                  <div className="readmore-comments">
                     <a href="/" className="read-more">
                        Read More
                     </a>

                     <a href="/" className="comments">
                        18 Comments
                     </a>
                  </div>

                  <div className="post-profile">
                     <img
                        src={images.theProfile}
                        className="profile"
                        alt="The Profile"
                     />
                  </div>
               </div>
            </div>
            <div className="previous-post">
               <h2>The Ultimate Deployment Guide</h2>
               <p>
                  Explore the step-by-step guide to deploying GitLab on
                  Kubernetes, focusing on the Omnibus package configuration.
               </p>
               <div className="latest-tags">
                  <ul>
                     <li>
                        <a href="/" className="development">
                           #development
                        </a>
                     </li>

                     <li>
                        <a href="/" className="github">
                           #github
                        </a>
                     </li>
                     <li>
                        <a href="/" className="tip">
                           #tip
                        </a>
                     </li>
                  </ul>
               </div>
               {/* This is for the Read More button */}
               <div className="read-profile">
                  <div className="readmore-comments">
                     <a href="/" className="read-more">
                        Read More
                     </a>

                     <a href="/" className="comments">
                        18 Comments
                     </a>
                  </div>
                  <div className="post-profile">
                     <img
                        src={images.theProfile}
                        className="profile"
                        alt="The Profile"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>,

      // This is for Popular Content TAB
      <div className="popular-content">
         <h1>Popular Content Goes Here</h1>
      </div>,

      // This is for Featured Content TAB
      <div className="featured-content">
         <h1>Featured Content Goes Here</h1>
      </div>,
   ];

   return (
      <>
         <div className="label-accordion">
            <div className="accordion">
               <div className="accordion-container">
                  {tabTitles.map((title, index) => (
                     <div
                        key={index}
                        className={`accordion-tab ${
                           activeTab === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(index + 1)}
                     >
                        <div className="tab-title">{title}</div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {activeTab && (
            <div className="tab-content">{tabContents[activeTab - 1]}</div>
         )}
      </>
   );
};

export default ArticleCard;
