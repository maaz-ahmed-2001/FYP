"use strict";
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 8477:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getAxiosInstance = (baseURL)=>{
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*"
        }
    });
};
const axiosInstances = {
    default: getAxiosInstance(_constant__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_BASE_URL */ .y || "")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstances);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ BACKEND_BASE_URL)
/* harmony export */ });
const BACKEND_BASE_URL = "https://ngo-be-two.vercel.app/api/v1/admin";


/***/ }),

/***/ 8335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ initialActionTracker)
/* harmony export */ });
const initialActionTracker = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    successMessage: ""
};


/***/ }),

/***/ 8696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "TX": () => (/* binding */ logoutUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports openLoginModal, openEditModal */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8335);
/* harmony import */ var _thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__]);
_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    signup: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    login: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    fetchUser: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    logout: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    contact: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    imageUpdate: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    imageRemoved: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    _updateProfile: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    user: null,
    isLoggedin: false,
    token: null,
    showLoginModal: false,
    showEditModal: false,
    _googleAuth: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        updateUser: (state, action)=>{
            state.isLoggedin = action.payload.isLoggedin, state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logoutUser: (state)=>{
            state.user = null;
            state.token = null;
            state.isLoggedin = false;
        },
        openLoginModal: (state, action)=>{
            state.showLoginModal = action.payload;
        },
        openEditModal: (state, action)=>{
            state.showEditModal = action.payload;
        }
    },
    extraReducers: (builder)=>{
        // ------------------------ Google Auth ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .signInWithGoogleThunk.pending */ .R2.pending, (state)=>{
            state._googleAuth = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .signInWithGoogleThunk.fulfilled */ .R2.fulfilled, (state, { payload  })=>{
            state._googleAuth = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Logged in successfully"
            };
            state.token = payload || null;
            state.isLoggedin = true;
            state.showLoginModal = false;
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .signInWithGoogleThunk.rejected */ .R2.rejected, (state, { error  })=>{
            state._googleAuth = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Sign Up ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .signUpThunk.pending */ .rv.pending, (state)=>{
            state.signup = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .signUpThunk.fulfilled */ .rv.fulfilled, (state)=>{
            state.signup = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Signed up successfully"
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .signUpThunk.rejected */ .rv.rejected, (state, { error  })=>{
            state.signup = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Login ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .loginThunk.pending */ .Fv.pending, (state)=>{
            state.login = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .loginThunk.fulfilled */ .Fv.fulfilled, (state, { payload  })=>{
            state.login = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Logged in successfully"
            };
            state.token = payload?.token;
            state.isLoggedin = true;
            state.showLoginModal = false;
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .loginThunk.rejected */ .Fv.rejected, (state, { error  })=>{
            state.login = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Fetch User ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .fetchUserThunk.pending */ .Se.pending, (state)=>{
            state.fetchUser = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .fetchUserThunk.fulfilled */ .Se.fulfilled, (state, { payload  })=>{
            state.fetchUser = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "User fetched successfully"
            };
            state.user = payload?.user || null;
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .fetchUserThunk.rejected */ .Se.rejected, (state, { error  })=>{
            state.fetchUser = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Logout ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .logoutThunk.pending */ .j2.pending, (state)=>{
            state.logout = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .logoutThunk.fulfilled */ .j2.fulfilled, (state)=>{
            state.logout = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Logged out successfully"
            };
            state.user = null;
            state.isLoggedin = false, state.token = null;
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .logoutThunk.rejected */ .j2.rejected, (state, { error  })=>{
            state.logout = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Contact Us ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .contactThunk.pending */ .nx.pending, (state)=>{
            state.contact = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .contactThunk.fulfilled */ .nx.fulfilled, (state)=>{
            state.contact = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Request submitted"
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .contactThunk.rejected */ .nx.rejected, (state, { error  })=>{
            state.contact = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Image Update ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .imageUploadThunk.pending */ .Fm.pending, (state)=>{
            state.imageUpdate = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .imageUploadThunk.fulfilled */ .Fm.fulfilled, (state, { payload  })=>{
            state.imageUpdate = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Image updated successfully"
            };
            state.user = {
                user_id: state.user?.user_id,
                username: state.user?.username || "",
                email: state.user?.email || "",
                avatar: payload
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .imageUploadThunk.rejected */ .Fm.rejected, (state, { error  })=>{
            state.imageUpdate = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Image Removal ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .imageRemoveThunk.pending */ .nt.pending, (state)=>{
            state.imageRemoved = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .imageRemoveThunk.fulfilled */ .nt.fulfilled, (state, { payload  })=>{
            state.imageRemoved = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Image removed successfully"
            };
            state.user = {
                user_id: state.user?.user_id,
                username: state.user?.username || "",
                email: state.user?.email || "",
                avatar: "/auth/avatar.png"
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .imageRemoveThunk.rejected */ .nt.rejected, (state, { error  })=>{
            state.imageRemoved = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
        // ------------------------ Update Profile ------------------------ //
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .updateProfileThunk.pending */ .Fw.pending, (state)=>{
            state._updateProfile = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isLoading: true
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .updateProfileThunk.fulfilled */ .Fw.fulfilled, (state, { payload  })=>{
            state._updateProfile = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                isSuccess: true,
                successMessage: "Profile updated successfully"
            };
            state.user = {
                ...state.user,
                user_id: state.user?.user_id,
                username: payload.username ? payload.username : state.user?.username || "",
                email: payload.email ? payload.email : state.user?.email || ""
            };
        });
        builder.addCase(_thunks_authThunk__WEBPACK_IMPORTED_MODULE_2__/* .updateProfileThunk.rejected */ .Fw.rejected, (state, { error  })=>{
            state._updateProfile = {
                ..._actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
                errorMessage: error.message || "",
                isError: true
            };
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);
const { logoutUser , updateUser , openLoginModal , openEditModal  } = authSlice.actions;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fm": () => (/* binding */ imageUploadThunk),
/* harmony export */   "Fv": () => (/* binding */ loginThunk),
/* harmony export */   "Fw": () => (/* binding */ updateProfileThunk),
/* harmony export */   "R2": () => (/* binding */ signInWithGoogleThunk),
/* harmony export */   "Se": () => (/* binding */ fetchUserThunk),
/* harmony export */   "j2": () => (/* binding */ logoutThunk),
/* harmony export */   "nt": () => (/* binding */ imageRemoveThunk),
/* harmony export */   "nx": () => (/* binding */ contactThunk),
/* harmony export */   "rv": () => (/* binding */ signUpThunk)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8477);
/* harmony import */ var _slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8696);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_axios__WEBPACK_IMPORTED_MODULE_3__, _slices_authSlice__WEBPACK_IMPORTED_MODULE_4__]);
([_config_axios__WEBPACK_IMPORTED_MODULE_3__, _slices_authSlice__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const signUpThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/signup", async (args, { dispatch  })=>{
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].post */ .Z["default"].post("/register/", {
            username: args.username,
            email: args.email,
            password: args.password
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Sign Up Successful", "", "success");
    } catch (e) {
        const axiosError = e;
        let errorMessage = "Failed to sign up";
        if (axiosError?.response?.data) {
            const errorResponse = axiosError.response?.data;
            errorMessage = errorResponse?.username ? errorResponse.username[0] : errorResponse?.email ? errorResponse.email[0] : "Something went wrong";
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Sign Up Error", errorMessage, "error");
        throw new Error(errorMessage);
    }
});
const loginThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/login", async (args, { dispatch  })=>{
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].post */ .Z["default"].post("/sign-in/", {
            email: args.email,
            password: args.password
        });
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("token", response.data.payload.token);
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Login Successful", "", "success");
        await dispatch(fetchUserThunk());
        return {
            token: response.data.payload.token
        };
    } catch (e) {
        const axiosError = e;
        let errorMessage = "Failed to Login";
        if (axiosError?.response?.data?.message) {
            errorMessage = axiosError.response.data.message;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Login Error", errorMessage, "error");
        throw new Error(errorMessage);
    }
});
const fetchUserThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/fetch-profile", async (_, { dispatch  })=>{
    try {
        const { token  } = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookies)();
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].get */ .Z["default"].get("/fetch-users/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response, "dette");
        dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateUser */ .Nq)({
            isLoggedin: true,
            user: {
                email: "Admin@admin.com",
                username: "admin"
            },
            token: token || null
        }));
        return {
            user: {
                email: "Admin@admin.com",
                username: "admin"
            }
        };
    } catch (e) {
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)("token");
        dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .logoutUser */ .TX)());
        const axiosError = e;
        let errorMessage = "Failed to fetch user";
        if (axiosError?.response?.data?.message) {
            errorMessage = axiosError.response.data.message;
        }
        throw new Error(errorMessage);
    }
});
const logoutThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/logout", async ({ redirect  }, { dispatch  })=>{
    try {
        const { token  } = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookies)();
        // if (auth.currentUser?.getIdToken()) {
        //   // await signOut(auth);
        // }
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].post */ .Z["default"].post("/logout/", {}, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .logoutUser */ .TX)());
        response ? (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)("token") : null;
        redirect && redirect();
    } catch (e) {
        const axiosError = e;
        let errorMessage = "Failed to logout";
        if (axiosError?.response?.data?.message) {
            errorMessage = axiosError.response.data.message;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Logout Error", errorMessage, "error");
        throw new Error(errorMessage);
    }
});
const contactThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/contact", async (args, { dispatch  })=>{
    try {
        const { token  } = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookies)();
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].post */ .Z["default"].post("/contact_us/", {
            ...args
        }, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Request Submitted!", response.data?.message, "success");
    } catch (e) {
        const axiosError = e;
        let errorMessage = "Failed to submit request";
        if (axiosError?.response?.data?.message) {
            errorMessage = axiosError.response.data.message;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", errorMessage, "error");
        throw new Error(errorMessage);
    }
});
const imageUploadThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/image-update", async (formData, { dispatch  })=>{
    try {
        const { token  } = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookies)();
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].post */ .Z["default"].post("/profile_image_edit/", formData, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Image changed!", response.data?.message, "success");
        return response?.data?.image_url;
    } catch (e) {
        const axiosError = e;
        let errorMessage = "Failed to change image";
        if (axiosError?.response?.data?.message) {
            errorMessage = axiosError.response.data.message;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", errorMessage, "error");
        throw new Error(errorMessage);
    }
});
const imageRemoveThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/image-remove", async (_, { dispatch  })=>{
    try {
        const { token  } = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookies)();
        const formData = new FormData();
        formData.append("image", "null");
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].post */ .Z["default"].post("/profile_image_edit/", formData, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Image removed!", response.data?.message, "success");
        return response?.data?.image_url;
    } catch (e) {
        const axiosError = e;
        let errorMessage = "Failed to remove image";
        if (axiosError?.response?.data?.message) {
            errorMessage = axiosError.response.data.message;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", errorMessage, "error");
        throw new Error(errorMessage);
    }
});
const updateProfileThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/update-profile", async ({ email , name , password  }, { dispatch  })=>{
    try {
        const { token  } = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookies)();
        const body = {
            username: name,
            password,
            email
        };
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["default"].put */ .Z["default"].put("/profile_edit/", body, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Profile updated!", response.data?.message, "success");
        return body;
    } catch (e) {
        const axiosError = e;
        let errorMessage = "Failed to update profile";
        if (axiosError?.response?.data) {
            errorMessage = axiosError.response.data?.error;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", errorMessage, "error");
        throw new Error(errorMessage);
    }
});
const signInWithGoogleThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/google-signin", async (_, { dispatch  })=>{
    try {
        // const result = await signInWithPopup(auth, provider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = await auth.currentUser?.getIdToken();
        // const apiRes = await axiosInstances.default.post("/firebase_auth/", {
        //   value: token,
        // });
        // const newToken = apiRes?.data?.token;
        const newToken = "asdas";
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("token", newToken);
        await dispatch(fetchUserThunk());
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Signed in successfully", "", "success");
        return newToken;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        if (errorCode === "auth/cancelled-popup-request" || errorCode === "auth/popup-closed-by-user") {
            throw new Error("Pop-up closed");
        } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Login Error", errorMessage, "error");
        }
        throw new Error(errorMessage);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;