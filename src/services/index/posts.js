import axios from "axios";

// Post

export const getAllPosts = async () => {
   try {
      const { data } = await axios.get(
         "https://jarcommunity-api.onrender.com/api/posts"
      );
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

export const getSinglePost = async ({ slug }) => {
   try {
      const { data } = await axios.get(
         `https://jarcommunity-api.onrender.com/api/posts/${slug}`
      );
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

export const createPost = async ({ token, postData }) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };

      const { data } = await axios.post(
         `https://jarcommunity-api.onrender.com/api/posts`,
         postData,
         config
      );
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

export const deletePost = async ({ token, slug }) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };

      // Make a DELETE request to the backend API to delete the post
      const { data } = await axios.delete(
         `https://jarcommunity-api.onrender.com/api/posts/${slug}`,
         config
      );

      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

export const updatePost = async ({ token, slug, formData }) => {
   try {
      console.log("Token before axios request:", token);
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
         },
      };
      console.log("Token in updatePost:", token);

      // Make a PUT or PATCH request to the backend API to update the post
      const { data } = await axios.put(
         `https://jarcommunity-api.onrender.com/api/posts/${slug}`,
         formData,
         config
      );

      return data;
   } catch (error) {
      if (error.response && error.response.data.message) {
         throw new Error(error.response.data.message);
      }
      throw new Error(error.message);
   }
};
