import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionTracker, initialActionTracker } from "../actionTracker";

type PostState = {
  _topics: ActionTracker;
  topics: { id: number; name: string }[] | [];
  _createPost: ActionTracker;
  _comment: ActionTracker;
  _reply: ActionTracker;
  _userPosts: ActionTracker;
  _deletePost: ActionTracker;
  userPosts: any[] | [];
  _editPost: ActionTracker;
  _searchPost: ActionTracker;
  _reportPost: ActionTracker;
};

const initialState: PostState = {
  _topics: initialActionTracker,
  topics: [],
  _createPost: initialActionTracker,
  _comment: initialActionTracker,
  _reply: initialActionTracker,
  _userPosts: initialActionTracker,
  _deletePost: initialActionTracker,
  userPosts: [],
  _editPost: initialActionTracker,
  _searchPost: initialActionTracker,
  _reportPost: initialActionTracker,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ------------------------ Create Post ------------------------ //
    //   builder.addCase(createPostThunk.pending, (state) => {
    //     state._createPost = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(createPostThunk.fulfilled, (state, { payload }) => {
    //     state._createPost = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Post created successfully",
    //     };
    //     delete payload.topic_name;
    //     state.userPosts = [
    //       {
    //         ...payload,
    //       },
    //       ...state.userPosts,
    //     ];
    //   });
    //   builder.addCase(createPostThunk.rejected, (state, { error }) => {
    //     state._createPost = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
    //   // ------------------------ Comment ------------------------ //
    //   builder.addCase(createNewCommentThunk.pending, (state) => {
    //     state._comment = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(createNewCommentThunk.fulfilled, (state) => {
    //     state._comment = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Comment added successfully",
    //     };
    //   });
    //   builder.addCase(createNewCommentThunk.rejected, (state, { error }) => {
    //     state._comment = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
    //   // ------------------------ Reply ------------------------ //
    //   builder.addCase(createNewReplyThunk.pending, (state) => {
    //     state._reply = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(createNewReplyThunk.fulfilled, (state) => {
    //     state._reply = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Reply added successfully",
    //     };
    //   });
    //   builder.addCase(createNewReplyThunk.rejected, (state, { error }) => {
    //     state._reply = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
    //   // ------------------------ User Posts ------------------------ //
    //   builder.addCase(getUserPostsThunk.pending, (state) => {
    //     state._userPosts = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(getUserPostsThunk.fulfilled, (state, { payload }) => {
    //     state._userPosts = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Posts fetched successfully",
    //     };
    //     state.userPosts = payload || [];
    //   });
    //   builder.addCase(getUserPostsThunk.rejected, (state, { error }) => {
    //     state._userPosts = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
    //   // ------------------------ Delete User Post ------------------------ //
    //   builder.addCase(deleteUserPostThunk.pending, (state) => {
    //     state._deletePost = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(deleteUserPostThunk.fulfilled, (state, { payload }) => {
    //     state._deletePost = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Posts deleted successfully",
    //     };
    //     state.userPosts = state.userPosts.filter((i) => i.id !== payload);
    //   });
    //   builder.addCase(deleteUserPostThunk.rejected, (state, { error }) => {
    //     state._deletePost = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
    //   // ------------------------ Delete User Post ------------------------ //
    //   builder.addCase(editPostThunk.pending, (state) => {
    //     state._editPost = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(editPostThunk.fulfilled, (state, { payload }) => {
    //     state._editPost = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Posts edited successfully",
    //     };
    //     let post = state.userPosts.find((i) => i.id === payload.id);
    //     post.post_title = payload.post_title;
    //     post.post_caption = payload.post_caption;
    //   });
    //   builder.addCase(editPostThunk.rejected, (state, { error }) => {
    //     state._editPost = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
    //   // ------------------------ Search Post ------------------------ //
    //   builder.addCase(searchPostThunk.pending, (state) => {
    //     state._searchPost = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(searchPostThunk.fulfilled, (state) => {
    //     state._searchPost = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Posts fetched successfully",
    //     };
    //   });
    //   builder.addCase(searchPostThunk.rejected, (state, { error }) => {
    //     state._searchPost = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
    //   // ------------------------ Report Post ------------------------ //
    //   builder.addCase(reportPostThunk.pending, (state) => {
    //     state._reportPost = {
    //       ...initialActionTracker,
    //       isLoading: true,
    //     };
    //   });
    //   builder.addCase(reportPostThunk.fulfilled, (state) => {
    //     state._reportPost = {
    //       ...initialActionTracker,
    //       isSuccess: true,
    //       successMessage: "Posts reported successfully",
    //     };
    //   });
    //   builder.addCase(reportPostThunk.rejected, (state, { error }) => {
    //     state._reportPost = {
    //       ...initialActionTracker,
    //       errorMessage: error.message || "",
    //       isError: true,
    //     };
    //   });
  },
});

export default postSlice.reducer;
