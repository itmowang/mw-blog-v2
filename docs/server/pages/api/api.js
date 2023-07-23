"use strict";
(() => {
var exports = {};
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCommonData: () => (/* binding */ getCommonData)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4846);
// 载入prisma设置

const getCommonData = async ()=>{
    const categories = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.category.findMany();
    const latestPosts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.findMany({
        orderBy: {
            createdAt: "desc"
        },
        take: 10
    });
    const totalPosts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.count();
    const totalTags = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.tags.count();
    const siteInfo = {
        totalPosts,
        totalPages: Math.ceil(totalPosts / 10),
        totalTags
    };
    const author = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.user.findMany({
        where: {}
    });
    const authorInfo = author;
    return {
        categories,
        latestPosts,
        siteInfo,
        authorInfo
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [846], () => (__webpack_exec__(3328)));
module.exports = __webpack_exports__;

})();