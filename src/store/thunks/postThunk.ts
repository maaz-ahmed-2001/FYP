import { getCookies } from "cookies-next";
import Swal from "sweetalert2";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstances from "@/config/axios";

type CreatePostArgs = {
  topic: string;
  title: string;
  description: string;
};

export const createPostThunk = createAsyncThunk(
  "post/create",
  async ({ description, title, topic }: CreatePostArgs) => {
    try {
      const { token } = getCookies();
      const bodyData = {
        topic,
        post_title: title,
        post_caption: description,
      };
      const response = await axiosInstances.default.post(
        `/create_post/`,
        bodyData,
        { headers: { Authorization: `Token ${token}` } }
      );
      Swal.fire("Post created successfully", "", "success");
      return response.data;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to create post";
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data?.error || "Something went wrong";
        errorMessage = errorResponse;
      }
      Swal.fire(errorMessage, "", "error");
      throw new Error(errorMessage);
    }
  }
);

type EditPostArgs = {
  id: number;
  title: string;
  description: string;
};

export const editPostThunk = createAsyncThunk(
  "post/edit",
  async ({ description, title, id }: EditPostArgs) => {
    try {
      const { token } = getCookies();
      const bodyData = {
        post_title: title,
        post_caption: description,
      };
      const response = await axiosInstances.default.put(
        `/update_post/${id}/`,
        bodyData,
        { headers: { Authorization: `Token ${token}` } }
      );
      Swal.fire("Post edited successfully", "", "success");
      return response.data.post_data;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to edit post";
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data || "Something went wrong";
        errorMessage = errorResponse;
      }
      Swal.fire("Error while editing post", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

type CreateNewCommentArgs = {
  comment: string;
  post_id: number;
  is_pro: boolean;
};

export const createNewCommentThunk = createAsyncThunk(
  "post/comment",
  async ({ comment, is_pro, post_id }: CreateNewCommentArgs) => {
    try {
      const { token } = getCookies();
      const bodyData = {
        comment,
        is_pros: is_pro,
        post: post_id,
      };
      const response = await axiosInstances.default.post(
        `/post_comment/`,
        bodyData,
        { headers: { Authorization: `Token ${token}` } }
      );
      Swal.fire("Comment added successfully", "", "success");
      return response.data;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to add comment";
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data || "Something went wrong";
        errorMessage = errorResponse;
      }
      Swal.fire("Error while commenting", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

type GetUserPostsArgs = {
  user_id: number;
};

export const getUserPostsThunk = createAsyncThunk(
  "user/get-all-posts",
  async ({ user_id }: GetUserPostsArgs) => {
    try {
      const { token } = getCookies();
      const response = await axiosInstances.default.get(
        `/get_user_all_posts/${user_id}/`,
        { headers: { Authorization: `Token ${token}` } }
      );
      return response.data?.user_posts;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to fetch your posts";
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data || "Something went wrong";
        errorMessage = errorResponse;
      }
      Swal.fire("Error while fetching your posts", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

type DeltePostArgs = {
  post_id: number;
};

export const deleteUserPostThunk = createAsyncThunk(
  "user/delete-post",
  async ({ post_id }: DeltePostArgs) => {
    try {
      const { token } = getCookies();
      const response = await axiosInstances.default.delete(
        `/delete_post/${post_id}/`,
        { headers: { Authorization: `Token ${token}` } }
      );
      Swal.fire("Post deleted successfully", "", "success");
      return post_id;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to delete your posts";
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data || "Something went wrong";
        errorMessage = errorResponse;
      }
      Swal.fire("Error while deleting your posts", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

type LikePostArgs = {
  post_id: number;
  is_like: boolean;
};

export const likePostThunk = createAsyncThunk(
  "post/like",
  async ({ post_id, is_like }: LikePostArgs) => {
    try {
      const { token } = getCookies();
      const response = await axiosInstances.default.post(
        `/post_like_dislike/`,
        {
          post_id,
          is_like,
        },
        { headers: { Authorization: `Token ${token}` } }
      );
      return post_id;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to react";
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data || "Something went wrong";
        errorMessage = errorResponse;
      }
      throw new Error(errorMessage);
    }
  }
);

type SearchPostArgs = {
  value?: string;
};

export const searchPostThunk = createAsyncThunk(
  "post/search",
  async ({ value }: SearchPostArgs) => {
    try {
      const response = await axiosInstances.default.get(
        `/get_all_users_all_posts/?value=${value}`
      );
      return response.data?.users_posts;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to search";
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data || "Something went wrong";
        errorMessage = errorResponse;
      }
      throw new Error(errorMessage);
    }
  }
);

type ReportPostArgs = {
  value: string;
  url: string;
};

export const reportPostThunk = createAsyncThunk(
  "post/report",
  async ({ url, value }: ReportPostArgs) => {
    try {
      const { token } = getCookies();
      const response = await axiosInstances.default.post(
        `/post_report/`,
        {
          url,
          content: value,
        },
        { headers: { Authorization: `Token ${token}` } }
      );
      Swal.fire("Reported", "", "success");
      return response.data?.message;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to report";
      Swal.fire("Failed to report", "", "error");
      if (axiosError?.response?.data) {
        const errorResponse =
          axiosError.response?.data || "Something went wrong";
        errorMessage = errorResponse;
      }
      throw new Error(errorMessage);
    }
  }
);
