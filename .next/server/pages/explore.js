"use strict";
(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 1292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ BACKEND_BASE_URL)
/* harmony export */ });
const BACKEND_BASE_URL = "https://ngo-be-two.vercel.app/api/v1/admin";


/***/ }),

/***/ 8715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import ExplorePageContainer from "@/containers/ExplorePageContainer";

const getServerSideProps = async (context)=>{
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${_config_constant__WEBPACK_IMPORTED_MODULE_3__/* .BACKEND_BASE_URL */ .y}/get_all_topics/`,
        headers: {}
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].request(config);
    return {
        props: {
            data: res?.data?.data || []
        }
    };
};
const Explore = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(8715)));
module.exports = __webpack_exports__;

})();