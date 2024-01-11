"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8311:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7550);
/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8696);
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9491);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4670);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_2__]);
_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const HomepageContainer = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const dispatch = (0,_utils_store__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const logout = ()=>{
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.deleteCookie)("token");
        dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_2__/* .logoutUser */ .TX)());
        router.push("/login");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "min-h-[100vh] bg-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-between items-center w-full px-10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Dashboard"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    variant: _types_enums__WEBPACK_IMPORTED_MODULE_3__/* .BtnVariantEnum.SHADOW_PRIMARY */ .mt.SHADOW_PRIMARY,
                    onClick: logout,
                    children: "Logout"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _containers_HomepageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8311);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_HomepageContainer__WEBPACK_IMPORTED_MODULE_1__]);
_containers_HomepageContainer__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_HomepageContainer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,216,550], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();