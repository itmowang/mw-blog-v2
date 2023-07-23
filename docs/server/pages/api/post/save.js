"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4846);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9375);
// 载入prisma设置


// 保存文章 
const save = async (req, res)=>{
    // 验证用户是否登录
    const verifys = await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
    const { title, content, cateId } = req.body;
    if (!title || !content) {
        res.status(400).send({
            message: "Unauthorized"
        });
    } else {
        // 鉴权
        if (verifys?.data) {
            // 通过邮箱查询用户id
            const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.user.findUnique({
                where: {
                    email: verifys.data?.email
                }
            });
            const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.create({
                data: {
                    title,
                    content,
                    categoryId: parseInt(cateId),
                    published: false,
                    authorId: user.id
                }
            });
            if (post) {
                res.json({
                    success: true,
                    message: "保存成功",
                    data: post
                });
            } else {
                res.json({
                    success: false,
                    message: "保存失败",
                    data: ""
                });
            }
        } else {
            res.status(401).send({
                message: "Unauthorized"
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);


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
var __webpack_exports__ = __webpack_require__.X(0, [846], () => (__webpack_exec__(5182)));
module.exports = __webpack_exports__;

})();