import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types/user";
import { ActionTracker, initialActionTracker } from "../actionTracker";
import {
  contactThunk,
  fetchUserThunk,
  imageRemoveThunk,
  imageUploadThunk,
  loginThunk,
  logoutThunk,
  signInWithGoogleThunk,
  signUpThunk,
  updateProfileThunk,
} from "../thunks/authThunk";

type AuthState = {
  signup: ActionTracker;
  login: ActionTracker;
  fetchUser: ActionTracker;
  logout: ActionTracker;
  contact: ActionTracker;
  imageUpdate: ActionTracker;
  imageRemoved: ActionTracker;
  _updateProfile: ActionTracker;
  user: UserType | null;
  token: string | null;
  isLoggedin: boolean;
  showLoginModal: boolean;
  showEditModal: boolean;
  _googleAuth: ActionTracker;
};

const initialState: AuthState = {
  signup: initialActionTracker,
  login: initialActionTracker,
  fetchUser: initialActionTracker,
  logout: initialActionTracker,
  contact: initialActionTracker,
  imageUpdate: initialActionTracker,
  imageRemoved: initialActionTracker,
  _updateProfile: initialActionTracker,
  user: null,
  isLoggedin: false,
  token: null,
  showLoginModal: false,
  showEditModal: false,
  _googleAuth: initialActionTracker,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (
      state,
      action: PayloadAction<{
        token: string | null;
        user: UserType | null;
        isLoggedin: boolean;
      }>
    ) => {
      (state.isLoggedin = action.payload.isLoggedin),
        (state.token = action.payload.token);
      state.user = action.payload.user;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedin = false;
    },
    openLoginModal: (state, action: PayloadAction<boolean>) => {
      state.showLoginModal = action.payload;
    },
    openEditModal: (state, action: PayloadAction<boolean>) => {
      state.showEditModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    // ------------------------ Google Auth ------------------------ //
    builder.addCase(signInWithGoogleThunk.pending, (state) => {
      state._googleAuth = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(signInWithGoogleThunk.fulfilled, (state, { payload }) => {
      state._googleAuth = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Logged in successfully",
      };
      state.token = payload || null;
      state.isLoggedin = true;
      state.showLoginModal = false;
    });
    builder.addCase(signInWithGoogleThunk.rejected, (state, { error }) => {
      state._googleAuth = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Sign Up ------------------------ //
    builder.addCase(signUpThunk.pending, (state) => {
      state.signup = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(signUpThunk.fulfilled, (state) => {
      state.signup = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Signed up successfully",
      };
    });
    builder.addCase(signUpThunk.rejected, (state, { error }) => {
      state.signup = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Login ------------------------ //
    builder.addCase(loginThunk.pending, (state) => {
      state.login = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.login = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Logged in successfully",
      };
      state.token = payload?.token;
      state.isLoggedin = true;
      state.showLoginModal = false;
    });
    builder.addCase(loginThunk.rejected, (state, { error }) => {
      state.login = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Fetch User ------------------------ //
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.fetchUser = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, { payload }) => {
      state.fetchUser = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "User fetched successfully",
      };
      state.user = payload?.user || null;
    });
    builder.addCase(fetchUserThunk.rejected, (state, { error }) => {
      state.fetchUser = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Logout ------------------------ //
    builder.addCase(logoutThunk.pending, (state) => {
      state.logout = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.logout = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Logged out successfully",
      };
      state.user = null;
      (state.isLoggedin = false), (state.token = null);
    });
    builder.addCase(logoutThunk.rejected, (state, { error }) => {
      state.logout = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Contact Us ------------------------ //
    builder.addCase(contactThunk.pending, (state) => {
      state.contact = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(contactThunk.fulfilled, (state) => {
      state.contact = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Request submitted",
      };
    });
    builder.addCase(contactThunk.rejected, (state, { error }) => {
      state.contact = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Image Update ------------------------ //
    builder.addCase(imageUploadThunk.pending, (state) => {
      state.imageUpdate = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(imageUploadThunk.fulfilled, (state, { payload }) => {
      state.imageUpdate = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Image updated successfully",
      };
      state.user = {
        user_id: state.user?.user_id,
        username: state.user?.username || "",
        email: state.user?.email || "",
        avatar: payload,
      };
    });
    builder.addCase(imageUploadThunk.rejected, (state, { error }) => {
      state.imageUpdate = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Image Removal ------------------------ //
    builder.addCase(imageRemoveThunk.pending, (state) => {
      state.imageRemoved = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(imageRemoveThunk.fulfilled, (state, { payload }) => {
      state.imageRemoved = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Image removed successfully",
      };
      state.user = {
        user_id: state.user?.user_id,
        username: state.user?.username || "",
        email: state.user?.email || "",
        avatar: "/auth/avatar.png",
      };
    });
    builder.addCase(imageRemoveThunk.rejected, (state, { error }) => {
      state.imageRemoved = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
    // ------------------------ Update Profile ------------------------ //
    builder.addCase(updateProfileThunk.pending, (state) => {
      state._updateProfile = {
        ...initialActionTracker,
        isLoading: true,
      };
    });
    builder.addCase(updateProfileThunk.fulfilled, (state, { payload }) => {
      state._updateProfile = {
        ...initialActionTracker,
        isSuccess: true,
        successMessage: "Profile updated successfully",
      };
      state.user = {
        ...state.user,
        user_id: state.user?.user_id,
        username: payload.username
          ? payload.username
          : state.user?.username || "",
        email: payload.email ? payload.email : state.user?.email || "",
      };
    });
    builder.addCase(updateProfileThunk.rejected, (state, { error }) => {
      state._updateProfile = {
        ...initialActionTracker,
        errorMessage: error.message || "",
        isError: true,
      };
    });
  },
});

export default authSlice.reducer;
export const { logoutUser, updateUser, openLoginModal, openEditModal } =
  authSlice.actions;
