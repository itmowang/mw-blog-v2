"use strict";
(() => {
var exports = {};
exports.id = 795;
exports.ids = [795,660];
exports.modules = {

/***/ 1155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fp_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fp_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fp_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fp_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/p/[id].tsx
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (_id_),
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
// EXTERNAL MODULE: ./pages/api/api.ts
var api = __webpack_require__(119);
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(6320);
;// CONCATENATED MODULE: ./pages/p/[id].tsx


// 载入prisma设置

// 引用header

// 引用footer

// 引用api 


const getServerSideProps = async ({ query })=>{
    const { id } = query;
    const getCommData = await (0,api/* getCommonData */.L)();
    const relatedPosts = await prisma/* default */.Z.post.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            category: true,
            tags: true,
            User: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    });
    return {
        props: JSON.parse(JSON.stringify({
            posts: relatedPosts,
            info: {
                categories: getCommData.categories,
                latestPosts: getCommData.latestPosts,
                siteInfo: getCommData.siteInfo,
                authorInfo: getCommData.authorInfo
            }
        }))
    };
};
const HomePosts = (props)=>{
    const { info, posts } = props;
    console.log(posts);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                categories: info.categories
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "h-[1000px] p-2 bg-default flex w-full",
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
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-full ml-4 ",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "w-full h-[850px] bg-white shadow-lg rounded-lg p-2 mb-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-left text-3xl leading-10  my-2",
                                    style: {
                                        color: "hsl(0deg,0%,21%)"
                                    },
                                    children: posts.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex indent-2 text-slate-500 ",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "cursor-pointer",
                                                children: posts?.User?.name
                                            }),
                                            " / ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "cursor-pointer",
                                                children: [
                                                    " ",
                                                    posts?.category?.name,
                                                    " "
                                                ]
                                            }),
                                            " / ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "cursor-pointer",
                                                children: "  0条留言 "
                                            }),
                                            " / ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "cursor-pointer",
                                                children: " 20次浏览 "
                                            }),
                                            " / ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "cursor-pointer",
                                                children: " 2天前 "
                                            }),
                                            " "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: " w-full my-2 px-4 ",
                                    style: {
                                        borderBottom: "1px solid #eee"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "markdown-body",
                                        dangerouslySetInnerHTML: {
                                            __html: posts.content
                                        }
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const _id_ = (HomePosts);

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fp%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fp%2F%5Bid%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fp_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fp_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fp_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fp_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/p/[id]","pathname":"/p/[id]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: _id_namespaceObject,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [12,731,599], () => (__webpack_exec__(1155)));
module.exports = __webpack_exports__;

})();