import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { deleteCookie, getCookies, setCookie } from "cookies-next";
import axiosInstances from "../../config/axios";
import { logoutUser, updateUser } from "../slices/authSlice";
import { getUserPostsThunk } from "./postThunk";
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "@/config/firebase";

type SignUpArgs = {
  username: string;
  email: string;
  password: string;
};

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (args: SignUpArgs, { dispatch }) => {
    try {
      const response = await axiosInstances.default.post("/register/", {
        username: args.username,
        email: args.email,
        password: args.password,
      });
      Swal.fire("Sign Up Successful", "", "success");
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to sign up";
      if (axiosError?.response?.data) {
        const errorResponse = axiosError.response?.data;
        errorMessage = errorResponse?.username
          ? errorResponse.username[0]
          : errorResponse?.email
          ? errorResponse.email[0]
          : "Something went wrong";
      }
      Swal.fire("Sign Up Error", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

type LoginArgs = {
  email: string;
  password: string;
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (args: LoginArgs, { dispatch }) => {
    try {
      const response = await axiosInstances.default.post("/sign-in/", {
        email: args.email,
        password: args.password,
      });
      setCookie("token", response.data.payload.token);
      Swal.fire("Login Successful", "", "success");
      await dispatch(fetchUserThunk());
      return { token: response.data.payload.token };
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to Login";
      if (axiosError?.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      }
      Swal.fire("Login Error", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

export const fetchUserThunk = createAsyncThunk(
  "auth/fetch-profile",
  async (_, { dispatch }) => {
    try {
      const { token } = getCookies();
      const response = await axiosInstances.default.get("/fetch-users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "dette");
      dispatch(
        updateUser({
          isLoggedin: true,
          user: { email: "Admin@admin.com", username: "admin" },
          token: token || null,
        })
      );

      return {
        user: { email: "Admin@admin.com", username: "admin" },
      };
    } catch (e: any) {
      deleteCookie("token");
      dispatch(logoutUser());
      const axiosError: any = e;
      let errorMessage = "Failed to fetch user";
      if (axiosError?.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      }
      throw new Error(errorMessage);
    }
  }
);

type LogoutThunkProps = {
  redirect: () => void;
};

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async ({ redirect }: LogoutThunkProps, { dispatch }) => {
    try {
      const { token } = getCookies();
      // if (auth.currentUser?.getIdToken()) {
      //   // await signOut(auth);
      // }
      const response = await axiosInstances.default.post(
        "/logout/",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      dispatch(logoutUser());
      response ? deleteCookie("token") : null;
      redirect && redirect();
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to logout";
      if (axiosError?.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      }
      Swal.fire("Logout Error", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

type ContactThunkArgs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const contactThunk = createAsyncThunk(
  "auth/contact",
  async (args: ContactThunkArgs, { dispatch }) => {
    try {
      const { token } = getCookies();
      const response = await axiosInstances.default.post(
        "/contact_us/",
        {
          ...args,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      Swal.fire("Request Submitted!", response.data?.message, "success");
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to submit request";
      if (axiosError?.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      }
      Swal.fire("Error", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

export const imageUploadThunk = createAsyncThunk(
  "auth/image-update",
  async (formData: any, { dispatch }) => {
    try {
      const { token } = getCookies();
      const response = await axiosInstances.default.post(
        "/profile_image_edit/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire("Image changed!", response.data?.message, "success");
      return response?.data?.image_url;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to change image";
      if (axiosError?.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      }
      Swal.fire("Error", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

export const imageRemoveThunk = createAsyncThunk(
  "auth/image-remove",
  async (_, { dispatch }) => {
    try {
      const { token } = getCookies();
      const formData = new FormData();
      formData.append("image", "null");
      const response = await axiosInstances.default.post(
        "/profile_image_edit/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire("Image removed!", response.data?.message, "success");
      return response?.data?.image_url;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to remove image";
      if (axiosError?.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      }
      Swal.fire("Error", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

type UpdateProfileThunkArgs = {
  name?: string;
  email?: string;
  password?: string;
};

export const updateProfileThunk = createAsyncThunk(
  "auth/update-profile",
  async ({ email, name, password }: UpdateProfileThunkArgs, { dispatch }) => {
    try {
      const { token } = getCookies();
      const body = {
        username: name,
        password,
        email,
      };
      const response = await axiosInstances.default.put(
        "/profile_edit/",
        body,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      Swal.fire("Profile updated!", response.data?.message, "success");
      return body;
    } catch (e: any) {
      const axiosError: any = e;
      let errorMessage = "Failed to update profile";
      if (axiosError?.response?.data) {
        errorMessage = axiosError.response.data?.error;
      }
      Swal.fire("Error", errorMessage, "error");
      throw new Error(errorMessage);
    }
  }
);

export const signInWithGoogleThunk = createAsyncThunk(
  "auth/google-signin",
  async (_, { dispatch }) => {
    try {
      // const result = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = await auth.currentUser?.getIdToken();
      // const apiRes = await axiosInstances.default.post("/firebase_auth/", {
      //   value: token,
      // });
      // const newToken = apiRes?.data?.token;
      const newToken = "asdas";
      setCookie("token", newToken);
      await dispatch(fetchUserThunk());
      Swal.fire("Signed in successfully", "", "success");
      return newToken;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
      if (
        errorCode === "auth/cancelled-popup-request" ||
        errorCode === "auth/popup-closed-by-user"
      ) {
        throw new Error("Pop-up closed");
      } else {
        Swal.fire("Login Error", errorMessage, "error");
      }
      throw new Error(errorMessage);
    }
  }
);
