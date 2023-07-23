"use strict";
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 2360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    const visiblePageNumbers = [];
    let startPage = 1;
    let endPage = totalPages;
    const maxVisiblePages = 4;
    if (totalPages > maxVisiblePages) {
        const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
        startPage = currentPage - halfMaxVisiblePages;
        endPage = currentPage + halfMaxVisiblePages;
        if (startPage < 1) {
            endPage += Math.abs(startPage) + 1;
            startPage = 1;
        }
        if (endPage > totalPages) {
            startPage -= endPage - totalPages;
            endPage = totalPages;
        }
    }
    for(let i = startPage; i <= endPage; i++){
        visiblePageNumbers.push(i);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "inline-flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `px-3 py-1 bg-gray-200 rounded-l-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`,
                        onClick: ()=>onPageChange(currentPage - 1),
                        disabled: currentPage === 1,
                        children: "\xab"
                    }),
                    startPage > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "px-3 py-1 bg-gray-200",
                                onClick: ()=>onPageChange(1),
                                children: "1"
                            }),
                            startPage > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "px-3 py-1",
                                children: "..."
                            })
                        ]
                    }),
                    visiblePageNumbers.map((number)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `px-3 py-1 bg-gray-200 ${currentPage === number ? "font-bold" : ""}`,
                            onClick: ()=>onPageChange(number),
                            children: number
                        }, number)),
                    endPage < totalPages && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            endPage < totalPages - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "px-3 py-1",
                                children: "..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "px-3 py-1 bg-gray-200",
                                onClick: ()=>onPageChange(totalPages),
                                children: totalPages
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `px-3 py-1 bg-gray-200 rounded-r-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`,
                        onClick: ()=>onPageChange(currentPage + 1),
                        disabled: currentPage === totalPages,
                        children: "\xbb"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "ml-4",
                onSubmit: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "page",
                        className: "sr-only",
                        children: "Page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        name: "page",
                        id: "page",
                        className: "px-3 py-1 border rounded-md",
                        placeholder: "Page",
                        min: "1",
                        max: totalPages,
                        value: currentPage,
                        onChange: (e)=>onPageChange(Number(e.target.value))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "px-3 py-1 bg-gray-200 rounded-md",
                        children: "Go"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 1703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ getFirstImg),
/* harmony export */   a: () => (/* binding */ getDesc)
/* harmony export */ });
// 识别富文本内有没有图片 ，有图片就返回第一张图片，可以是base64 也可以是网络图片 如果没有就返回null
function getFirstImg(htmlStr) {
    var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;
    var arr = [];
    while(true){
        var temp = reg.exec(htmlStr);
        if (temp) {
            arr.push(temp[2]);
        } else {
            break;
        }
    }
    if (arr.length > 0) {
        return arr[0];
    } else {
        return null;
    }
}
// 识别富文本内容， 返回出desc 用于列表页展示
function getDesc(htmlStr) {
    var reg = /<[^>]+>/g;
    var result = htmlStr.replace(reg, "");
    return result;
}


/***/ })

};
;