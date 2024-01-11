(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8305);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FullPageSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7948);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__]);
_utils_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const AppWrapper = ({ children  })=>{
    const { isLoading  } = (0,_utils_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FullPageSpinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FullPageSpinner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed h-[100dvh] w-[100vw] bg-white top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[1000000000000]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "border-[10px] border-midRed border-r-transparent rounded-full aspect-square h-[100px] absolute spinner"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullPageSpinner);


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9224);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_3__, _components_AppWrapper__WEBPACK_IMPORTED_MODULE_5__]);
([_store__WEBPACK_IMPORTED_MODULE_3__, _components_AppWrapper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import Layout from "@/components/Layout";


function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: _store__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AppWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8696);
/* harmony import */ var _slices_postSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3629);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slices_authSlice__WEBPACK_IMPORTED_MODULE_1__]);
_slices_authSlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const combinedReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    auth: _slices_authSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    post: _slices_postSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
});
const rootReducer = (state, action)=>{
    if (action.type === "auth/logout/fulfilled") {
        return state = undefined;
    }
    return combinedReducer(state, action);
};
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8335);


const initialState = {
    _topics: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    topics: [],
    _createPost: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    _comment: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    _reply: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    _userPosts: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    _deletePost: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    userPosts: [],
    _editPost: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    _searchPost: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R,
    _reportPost: _actionTracker__WEBPACK_IMPORTED_MODULE_1__/* .initialActionTracker */ .R
};
const postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
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
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSlice.reducer);


/***/ }),

/***/ 8305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4670);
/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8696);
/* harmony import */ var _store_thunks_authThunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1170);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__, _store_thunks_authThunk__WEBPACK_IMPORTED_MODULE_5__]);
([_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__, _store_thunks_authThunk__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useAuth = ()=>{
    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { user  } = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.auth);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const oldRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pageName = oldRouter.pathname;
    const lockedRoutes = [
        "/"
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async function() {
            const { token  } = (0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.getCookies)();
            if (token) {
                if (!user) {
                    const res = await dispatch((0,_store_thunks_authThunk__WEBPACK_IMPORTED_MODULE_5__/* .fetchUserThunk */ .Se)());
                }
                if (pathname?.includes("/forgot-password")) {
                    router.push("/");
                } else {
                    setIsAuthenticated(true);
                    setIsLoading(false);
                }
            } else {
                setIsAuthenticated(false);
                dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateUser */ .Nq)({
                    isLoggedin: false,
                    token: null,
                    user: null
                }));
                if (lockedRoutes.includes(pageName)) {
                    router.push("/login");
                } else {
                    setIsLoading(false);
                }
            }
        })();
    }, [
        pathname
    ]);
    return {
        isAuthenticated,
        isLoading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,332,216], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();