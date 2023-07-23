"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 2947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4846);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function Login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send({
            message: "Unauthorized"
        });
    } else {
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            res.json({
                success: false,
                message: "用户不存在"
            });
        }
        if (user.password !== password) {
            res.json({
                success: false,
                message: "密码错误"
            });
        }
        const tokenPayload = {
            email: email
        };
        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(tokenPayload, "secret"); // 生成 token
        res.json({
            success: true,
            message: "登录成功",
            data: {
                ...user,
                token
            }
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [846], () => (__webpack_exec__(2947)));
module.exports = __webpack_exports__;

})();