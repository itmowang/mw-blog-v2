"use strict";
(() => {
var exports = {};
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4846);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9375);
// 载入prisma设置


// 分页查询文章
const list = async (req, res)=>{
    // 鉴权
    const verifys = await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
    if (verifys?.data) {
        try {
            const { page, pageSize } = req.body;
            const skip = (page - 1) * pageSize;
            const take = pageSize;
            const [posts, totalCount] = await Promise.all([
                _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.findMany({
                    skip,
                    take,
                    include: {
                        category: true,
                        tags: true,
                        User: true
                    }
                }),
                _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.count()
            ]);
            const totalPages = Math.ceil(totalCount / pageSize); // 计算总页数
            res.json({
                success: true,
                message: "查询成功",
                data: {
                    posts,
                    totalCount,
                    totalPages
                }
            });
        } catch (error) {
            console.error("Error getting posts:", error);
            res.status(500).json({
                success: false,
                message: "查询失败",
                error: error.message
            });
        } finally{
            await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.$disconnect();
        }
    } else {
        res.status(401).send({
            message: "Unauthorized"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);


/***/ }),

/***/ 9375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
// 载入prisma设置

// 鉴权接口
const verify = async (req, res)=>{
    // jwt 解析token
    const token = req?.headers?.token;
    if (token) {
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "secret");
        return {
            data: decoded
        };
    } else {
        return {
            data: null
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verify);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [846], () => (__webpack_exec__(5008)));
module.exports = __webpack_exports__;

})();