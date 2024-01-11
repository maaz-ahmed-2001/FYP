"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 7550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9491);



const LoadingSpinner = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border-4 border-midGrey border-r-transparent rounded-full aspect-square h-[80%] absolute spinner"
    });
const Button = ({ children , onClick , variant =_types_enums__WEBPACK_IMPORTED_MODULE_2__/* .BtnVariantEnum.PRIMARY */ .mt.PRIMARY , type ="button" , className , disabled =false  })=>{
    switch(variant){
        case _types_enums__WEBPACK_IMPORTED_MODULE_2__/* .BtnVariantEnum.PRIMARY */ .mt.PRIMARY:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed justify-center items-center text-white text-[16px] font-medium leading-normal bg-midBlue ${className ? className : ""}`,
                onClick: onClick,
                type: type,
                disabled: disabled,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        !disabled && children,
                        disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingSpinner, {})
                    ]
                })
            });
        case _types_enums__WEBPACK_IMPORTED_MODULE_2__/* .BtnVariantEnum.SECONDARY */ .mt.SECONDARY:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onClick,
                className: `px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex justify-center items-center text-white text-[16px] disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed font-medium leading-normal bg-transparent border-[1px] border-white ${className ? className : ""}`,
                disabled: disabled,
                children: [
                    !disabled && children,
                    disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingSpinner, {})
                ]
            });
        case _types_enums__WEBPACK_IMPORTED_MODULE_2__/* .BtnVariantEnum.SECONDARY_BLUE */ .mt.SECONDARY_BLUE:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onClick,
                className: `px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex justify-center items-center disabled:bg-darkGrey disabled:text-midGrey text-midBlue text-[16px] font-medium leading-normal bg-transparent border-[1px] border-midBlue ${className ? className : ""}`,
                disabled: disabled,
                children: [
                    !disabled && children,
                    disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingSpinner, {})
                ]
            });
        case _types_enums__WEBPACK_IMPORTED_MODULE_2__/* .BtnVariantEnum.SHADOW_PRIMARY */ .mt.SHADOW_PRIMARY:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `px-6 xl:px-10 cursor-pointer relative duration-300 ease-in-out hover:bg-white disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed hover:text-midRed py-2 rounded-sm flex border-[1px] border-[#04044C] shadow-[0px_2.04756px_2.04756px_0px_rgba(0,0,0,0.25)] justify-center items-center text-white text-[16px] font-medium leading-normal bg-midRed ${className ? className : ""}`,
                onClick: onClick,
                type: type,
                disabled: disabled,
                children: [
                    !disabled && children,
                    disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingSpinner, {})
                ]
            });
        case _types_enums__WEBPACK_IMPORTED_MODULE_2__/* .BtnVariantEnum.SHADOW_SECONDARY */ .mt.SHADOW_SECONDARY:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `px-6 xl:px-10 py-2 cursor-pointer relative disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed bg-white rounded-sm flex border-[1px] border-midRed shadow-[0px_2.04756px_2.04756px_0px_rgba(0,0,0,0.25)] justify-center items-center text-midBlue text-[16px] font-medium leading-normal ${className ? className : ""}`,
                onClick: onClick,
                type: type,
                disabled: disabled,
                children: [
                    !disabled && children,
                    disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingSpinner, {})
                ]
            });
        case _types_enums__WEBPACK_IMPORTED_MODULE_2__/* .BtnVariantEnum.SUCCESS */ .mt.SUCCESS:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `px-6 xl:px-10 py-2 cursor-pointer relative rounded-sm flex border-[1px] border-midGrey shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center text-white text-[16px] font-medium leading-normal bg-midGreen disabled:bg-darkGrey disabled:text-midGrey disabled:cursor-not-allowed ${className ? className : ""}`,
                onClick: onClick,
                type: type,
                disabled: disabled,
                children: [
                    !disabled && children,
                    disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingSpinner, {})
                ]
            });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mt": () => (/* binding */ BtnVariantEnum)
/* harmony export */ });
/* unused harmony exports ModalTypesEnum, ContainerVariantEnum, TextAreaVariantEnum, CardTypeVariantEnum, SelectTypeVariantEnum, PostComponentTypeEnum, SwalTypeEnum */
var ModalTypesEnum;
(function(ModalTypesEnum) {
    ModalTypesEnum["SIGN_UP"] = "SIGN_UP";
    ModalTypesEnum["LOG_IN"] = "LOG_IN";
    ModalTypesEnum["DISCUSSION"] = "DISCUSSION";
    ModalTypesEnum["CREATE_POST"] = "CREATE_POST";
    ModalTypesEnum["EDIT_POST"] = "EDIT_POST";
})(ModalTypesEnum || (ModalTypesEnum = {}));
var BtnVariantEnum;
(function(BtnVariantEnum) {
    BtnVariantEnum["PRIMARY"] = "PRIMARY";
    BtnVariantEnum["SECONDARY"] = "SECONDARY";
    BtnVariantEnum["SHADOW_PRIMARY"] = "SHADOW_PRIMARY";
    BtnVariantEnum["SHADOW_SECONDARY"] = "SHADOW_SECONDARY";
    BtnVariantEnum["SUCCESS"] = "SUCCESS";
    BtnVariantEnum["SECONDARY_BLUE"] = "SECONDARY_BLUE";
})(BtnVariantEnum || (BtnVariantEnum = {}));
var ContainerVariantEnum;
(function(ContainerVariantEnum) {
    ContainerVariantEnum["FULL"] = "FULL";
    ContainerVariantEnum["PARTIAL"] = "PARTIAL";
})(ContainerVariantEnum || (ContainerVariantEnum = {}));
var TextAreaVariantEnum;
(function(TextAreaVariantEnum) {
    TextAreaVariantEnum["NORMAL"] = "NORMAL";
    TextAreaVariantEnum["SHADOW"] = "SHADOW";
})(TextAreaVariantEnum || (TextAreaVariantEnum = {}));
var CardTypeVariantEnum;
(function(CardTypeVariantEnum) {
    CardTypeVariantEnum["NORMAL"] = "NORMAL";
    CardTypeVariantEnum["POST"] = "POST";
})(CardTypeVariantEnum || (CardTypeVariantEnum = {}));
var SelectTypeVariantEnum;
(function(SelectTypeVariantEnum) {
    SelectTypeVariantEnum["NORMAL"] = "NORMAL";
    SelectTypeVariantEnum["CHECKED"] = "CHECKED";
})(SelectTypeVariantEnum || (SelectTypeVariantEnum = {}));
var PostComponentTypeEnum;
(function(PostComponentTypeEnum) {
    PostComponentTypeEnum["MARK_CLAIM"] = "MARK_CLAIM";
    PostComponentTypeEnum["VOTING_STATS"] = "VOTING_STATS";
})(PostComponentTypeEnum || (PostComponentTypeEnum = {}));
var SwalTypeEnum;
(function(SwalTypeEnum) {
    SwalTypeEnum["SUCCESS"] = "success";
    SwalTypeEnum["ERROR"] = "error";
    SwalTypeEnum["WARNING"] = "warning";
})(SwalTypeEnum || (SwalTypeEnum = {}));


/***/ })

};
;