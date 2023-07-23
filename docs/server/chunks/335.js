exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 1987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4864);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_iconfont_iconfont_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2730);
/* harmony import */ var _styles_iconfont_iconfont_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_iconfont_iconfont_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_public_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7750);
/* harmony import */ var _styles_public_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_public_css__WEBPACK_IMPORTED_MODULE_3__);
// 公共样式




const App = ({ Component, pageProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ 4231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
});
// 请求拦截器
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.use((config)=>{
    // 从缓存中读Token 
    const token = localStorage.getItem("token");
    config.headers.token = token || "";
    return config;
});
// 响应拦截器
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use((response)=>{
    return response;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0__["default"]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2730:
/***/ (() => {



/***/ }),

/***/ 7750:
/***/ (() => {



/***/ }),

/***/ 4864:
/***/ (() => {



/***/ })

};
;