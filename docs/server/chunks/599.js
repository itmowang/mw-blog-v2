exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 5984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);

const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full bg-primary h-32",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Footer"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 5818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const MobileNav = ({ cateList })=>{
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const handleClickOutside = (event)=>{
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const to = (item)=>{
        router.push(`/cate/${item.id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex ml-auto mr-4 topNav-mobile",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "p-2 rounded-md bg-gray-100 text-gray-800",
                onClick: toggleMenu,
                children: "Menu"
            }),
            isMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-y-0 right-0 w-full bg-gray-900 bg-opacity-75",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: menuRef,
                    className: "fixed inset-y-0 right-0 w-2/3 bg-slate-50 ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col items-center h-screen",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "text-red w-full text-center",
                            children: cateList.map((item, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "py-2 w-full transition ease-in-out delay-150 hover:bg-pink-100",
                                    onClick: ()=>to(item),
                                    children: [
                                        " ",
                                        item.name,
                                        " "
                                    ]
                                }, index);
                            })
                        })
                    })
                })
            })
        ]
    });
};
const Header = ({ categories })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const to = (item)=>{
        router.push(`/cate/${item.id}`);
    };
    const toHome = (e)=>{
        e.preventDefault();
        router.push("/");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-16  flex items-center  w-full bg-primary",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-4 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-4xl text-white cursor-pointer",
                    onClick: toHome,
                    children: " MWBLOG "
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex topNav-pc",
                children: categories.map((item, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-xl text-white ml-4 cursor-pointer",
                        onClick: ()=>to(item),
                        children: [
                            " ",
                            item.name,
                            " "
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex ml-auto mr-4 topNav-mobie",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {
                    cateList: categories
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 6320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hy: () => (/* binding */ RecentPosts),
/* harmony export */   IH: () => (/* binding */ LeftUserInfo),
/* harmony export */   Vc: () => (/* binding */ Sponsor),
/* harmony export */   X6: () => (/* binding */ ContactInfo),
/* harmony export */   wv: () => (/* binding */ SiteInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


// 站长信息
const LeftUserInfo = ({ info })=>{
    const { siteInfo } = info;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "userInfo h-32 bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-24 h-24",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "https://www.wdssmq.com/zb_users/avatar/1.png",
                    className: "w-24 h-24"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-3/5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center mb-2 text",
                        children: " 魔王 "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between ml-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-sm text-gray-500 font-bold hover:text-sky-500",
                                        children: "文章"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center text-sky-500 font-bold text-sm ",
                                        children: siteInfo.totalPosts
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-sm text-gray-500 font-bold hover:text-sky-500",
                                        children: "页码"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center text-sky-500 font-bold text-sm",
                                        children: siteInfo.totalPages
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-sm text-gray-500 font-bold hover:text-sky-500",
                                        children: "TAG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center text-sky-500 font-bold text-sm ",
                                        children: siteInfo.totalTags
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
// 联系方式
const ContactInfo = ({ info })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "contactInfo bg-white shadow-lg rounded-lg p-4 mb-4 ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "iconfont icon-QQ text-sky-500 "
                    }),
                    " 1531780018"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full my-2 px-4 ",
                style: {
                    borderBottom: "1px solid #eee"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "iconfont icon-wechat-fill text-sky-500 "
                    }),
                    " 1531780018"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full my-2 px-4 ",
                style: {
                    borderBottom: "1px solid #eee"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "iconfont icon-twitter text-sky-500 "
                    }),
                    " 1531780018"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full my-2 px-4 ",
                style: {
                    borderBottom: "1px solid #eee"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "iconfont icon-github-fill text-sky-500 "
                    }),
                    " 1531780018"
                ]
            })
        ]
    });
};
// 最近发表
const RecentPosts = ({ info })=>{
    const { latestPosts } = info;
    // 跳转至内容页面
    const toPost = (data)=>{
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`/p/${data.id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "recentPosts bg-white shadow-lg rounded-lg p-4 mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-2",
                children: "最近发表"
            }),
            latestPosts.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "my-1",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer truncate",
                            onClick: ()=>toPost(item),
                            children: [
                                "  ",
                                item.title
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " w-full my px-4 mt-1",
                            style: {
                                borderBottom: "1px solid #eee"
                            }
                        })
                    ]
                }, index);
            })
        ]
    });
};
// 站点信息
const SiteInfo = ({ info })=>{
    const { siteInfo } = info;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "siteInfo bg-white shadow-lg rounded-lg p-4 mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-2",
                children: "站点信息"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-600 hover:text-sky-500 cursor-pointer",
                                children: " 文章总数 "
                            }),
                            ": ",
                            siteInfo.totalPosts
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-600 hover:text-sky-500 cursor-pointer",
                                children: " 页面总数 "
                            }),
                            ": ",
                            siteInfo.totalPages
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-600 hover:text-sky-500 cursor-pointer",
                                children: " 标签总数 "
                            }),
                            ": ",
                            siteInfo.totalTags
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-600 hover:text-sky-500 cursor-pointer",
                                children: " 评论总数 "
                            }),
                            ": 999"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-600 hover:text-sky-500 cursor-pointer",
                                children: " 浏览总数 "
                            }),
                            ": 999"
                        ]
                    })
                ]
            })
        ]
    });
};
// 赞助商
const Sponsor = ({})=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sponsor bg-white shadow-lg rounded-lg p-4 mb-4 cursor-pointer",
        children: "服务器供应商：阿里云"
    });
};


/***/ }),

/***/ 3412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

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

/***/ 119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getCommonData)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3412);
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