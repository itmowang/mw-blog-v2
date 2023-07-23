"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 8533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3211);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(4755);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(12);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(1987);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/prisma.ts
var prisma = __webpack_require__(3412);
// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__(5818);
// EXTERNAL MODULE: ./components/Footer.tsx
var Footer = __webpack_require__(5984);
// EXTERNAL MODULE: ./components/Pagination.tsx
var Pagination = __webpack_require__(2360);
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(6320);
// EXTERNAL MODULE: ./pages/api/api.ts
var api = __webpack_require__(119);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(1703);
;// CONCATENATED MODULE: ./pages/index.tsx


// 载入prisma设置

// 引用header

// 引用footer

// 引用分页

// 其他

// 引用api 

// 引用router

// 引用工具

const getServerSideProps = async ({ query })=>{
    const { page = 1, limit = 10 } = query;
    const offset = (Number(page) - 1) * Number(limit);
    const feed = await prisma/* default */.Z.post.findMany({
        orderBy: {
            createdAt: "desc"
        },
        skip: offset,
        take: Number(limit)
    });
    const totalPosts = await prisma/* default */.Z.post.count();
    const getCommData = await (0,api/* getCommonData */.L)();
    return {
        props: {
            feed: feed.map((post)=>({
                    ...post,
                    createdAt: post.createdAt.toISOString()
                })),
            currentPage: Number(page),
            totalPages: Math.ceil(totalPosts / Number(limit)),
            info: {
                categories: JSON.parse(JSON.stringify(getCommData.categories)),
                latestPosts: JSON.parse(JSON.stringify(getCommData.latestPosts)),
                siteInfo: JSON.parse(JSON.stringify(getCommData.siteInfo)),
                authorInfo: JSON.parse(JSON.stringify(getCommData.authorInfo))
            }
        }
    };
};
const Blog = (props)=>{
    const router = (0,router_.useRouter)();
    const { feed, currentPage, totalPages, info } = props;
    // 跳转至内容页面
    const toPost = (data)=>{
        router.push(`/p/${data.id}`);
    };
    // 跳转页码
    const onPage = (page)=>{
        router.push(`/?page=${page}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                categories: info.categories
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: " p-2 bg-default flex w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "w-1/4 leftMenu",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(Layout/* LeftUserInfo */.IH, {
                                info: info
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Layout/* ContactInfo */.X6, {
                                info: info
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Layout/* RecentPosts */.Hy, {
                                info: info
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Layout/* SiteInfo */.wv, {
                                info: info
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Layout/* Sponsor */.Vc, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "w-full ml-4 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full   ",
                                children: feed.map((post, key)=>{
                                    const backgroundImage = (0,utils/* getFirstImg */.H)(post.content) ? `${(0,utils/* getFirstImg */.H)(post.content)}` : "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/2.webp";
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white shadow-lg rounded-lg p-2 mb-4 cursor-pointer",
                                        onClick: ()=>toPost(post),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: ` bg-cover bg-center h-[150px] bg-cover`,
                                                style: {
                                                    backgroundImage: `url(${backgroundImage})`
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-lg text-zinc-600 my-1 font-medium hover:text-sky-500",
                                                children: [
                                                    " ",
                                                    post.title,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sky-500",
                                                        children: " #冷笑话 "
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sky-500",
                                                        children: " #吐槽 "
                                                    }),
                                                    "  ",
                                                    (0,utils/* getDesc */.a)(post.content),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-xs text-slate-400 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "hover:text-sky-500",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "iconfont icon-message  text-sm"
                                                            }),
                                                            " 评论数 : 1000+ "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "hover:text-sky-500",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "iconfont icon-team  text-sm ml-4"
                                                            }),
                                                            " 浏览量 : 1000+ "
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, key);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Pagination/* default */.Z, {
                                currentPage: currentPage,
                                totalPages: totalPages,
                                onPageChange: onPage
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages = (Blog);

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: pages_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [12,731,599,869], () => (__webpack_exec__(8533)));
module.exports = __webpack_exports__;

})();