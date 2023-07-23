"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 4846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    if (true) {
        prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
    } else {}
}
const defaultSQL = async ()=>{
    // 创建默认的用户数据
    await prisma.user.createMany({
        data: [
            {
                name: "John Doe",
                password: "password123",
                email: "john.doe@example.com"
            },
            {
                name: "Jane Smith",
                password: "password456",
                email: "jane.smith@example.com"
            }
        ],
        skipDuplicates: true
    });
    // 创建默认的文章数据
    await prisma.post.createMany({
        data: [
            {
                title: "First Post",
                content: "This is the content of the first post.",
                published: true,
                authorId: 1,
                categoryId: 1
            },
            {
                title: "Second Post",
                content: "This is the content of the second post.",
                published: false,
                authorId: 2,
                categoryId: 2
            }
        ],
        skipDuplicates: true
    });
    // 创建默认的分类数据
    await prisma.category.createMany({
        data: [
            {
                name: "Technology",
                slug: "technology"
            },
            {
                name: "Travel",
                slug: "travel"
            }
        ],
        skipDuplicates: true
    });
    // 创建默认的标签数据
    await prisma.tags.createMany({
        data: [
            {
                name: "JavaScript"
            },
            {
                name: "React"
            },
            {
                name: "Node.js"
            }
        ],
        skipDuplicates: true
    });
    // 创建默认的域名数据
    await prisma.domains.createMany({
        data: [
            {
                name: "example.com",
                isBuy: true
            },
            {
                name: "example.net",
                isBuy: false
            }
        ],
        skipDuplicates: true
    });
};
// 执行默认的SQL语句
// defaultSQL();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ })

};
;