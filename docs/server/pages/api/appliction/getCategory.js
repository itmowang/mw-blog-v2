"use strict";
(() => {
var exports = {};
exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4846);
// 载入prisma设置

// 查询分类接口
const getCategory = async (req, res)=>{
    const categories = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.category.findMany();
    res.json({
        data: categories,
        success: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCategory);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [846], () => (__webpack_exec__(1983)));
module.exports = __webpack_exports__;

})();