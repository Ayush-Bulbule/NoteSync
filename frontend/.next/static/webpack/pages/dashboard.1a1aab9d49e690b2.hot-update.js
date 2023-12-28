"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Card = (param)=>{\n    let { id, category, title, content, timestamp, displayName } = param;\n    // const date = new Date(timestamp);\n    const date = new Date().toLocaleDateString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/edit/\".concat(id),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"note-card bg-white rounded-lg shadow-md p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"category flex items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"w-3 h-3 bg-green-400 rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: category || \"Frontend\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"note-title mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold\",\n                        children: title || \"Lorem ipsum dolor sit amet consectetur.\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"note-body mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-600\",\n                        children: content || \"Lorem ipsum dolor sit amet consectetur.\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"my-3\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/user.png\",\n                                    alt: \"user.png\",\n                                    className: \"h-8 w-8 rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-600 text-sm\",\n                                    children: displayName || \"John Doe\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2 py-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600 text-sm\",\n                                children: date || \"12/23\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Card.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDRztBQUU3QixNQUFNRSxPQUFPO1FBQUMsRUFBRUMsRUFBRSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUNsRSxvQ0FBb0M7SUFDcEMsTUFBTUMsT0FBTyxJQUFJQyxPQUFPQyxrQkFBa0I7SUFDMUMscUJBQ0ksOERBQUNWLGtEQUFJQTtRQUFDVyxNQUFNLFNBQVksT0FBSFQ7a0JBQ2pCLDRFQUFDVTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFBS0QsV0FBVTs7Ozs7O3NDQUNoQiw4REFBQ0M7c0NBQU1YLFlBQVk7Ozs7Ozs7Ozs7Ozs4QkFFdkIsOERBQUNTO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRTt3QkFBR0YsV0FBVTtrQ0FBeUJULFNBQVM7Ozs7Ozs7Ozs7OzhCQUVwRCw4REFBQ1E7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNHO3dCQUFFSCxXQUFVO2tDQUF5QlIsV0FBVzs7Ozs7Ozs7Ozs7OEJBR3JELDhEQUFDWTtvQkFBR0osV0FBVTs7Ozs7OzhCQUNkLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0s7b0NBQUlDLEtBQUk7b0NBQVlDLEtBQUk7b0NBQVdQLFdBQVU7Ozs7Ozs4Q0FDOUMsOERBQUNDO29DQUFLRCxXQUFVOzhDQUF5Qk4sZUFBZTs7Ozs7Ozs7Ozs7O3NDQUU1RCw4REFBQ0s7NEJBQUlDLFdBQVU7c0NBRVgsNEVBQUNDO2dDQUFLRCxXQUFVOzBDQUF5QkwsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16RTtLQS9CTVA7QUFpQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2Q2MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBpZCwgY2F0ZWdvcnksIHRpdGxlLCBjb250ZW50LCB0aW1lc3RhbXAsIGRpc3BsYXlOYW1lIH0pID0+IHtcclxuICAgIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvZWRpdC8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGUtY2FyZCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnkgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTMgaC0zIGJnLWdyZWVuLTQwMCByb3VuZGVkLWZ1bGxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhdGVnb3J5IHx8IFwiRnJvbnRlbmRcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZS10aXRsZSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz57dGl0bGUgfHwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci5cIn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGUtYm9keSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS02MDAnPntjb250ZW50IHx8IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0nbXktMycgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyLnBuZ1wiIGFsdD1cInVzZXIucG5nXCIgY2xhc3NOYW1lPSdoLTggdy04IHJvdW5kZWQtZnVsbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIHRleHQtc20nPntkaXNwbGF5TmFtZSB8fCBcIkpvaG4gRG9lXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIHRleHQtc20nPjEyOjAwIFBNPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIHRleHQtc20nPntkYXRlIHx8IFwiMTIvMjNcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkNhcmQiLCJpZCIsImNhdGVnb3J5IiwidGl0bGUiLCJjb250ZW50IiwidGltZXN0YW1wIiwiZGlzcGxheU5hbWUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaDIiLCJwIiwiaHIiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n"));

/***/ })

});