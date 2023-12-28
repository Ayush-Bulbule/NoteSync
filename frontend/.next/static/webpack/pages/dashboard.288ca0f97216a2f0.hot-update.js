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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card */ \"./components/Card.js\");\n/* harmony import */ var _barrel_optimize_names_MdAdd_react_icons_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=MdAdd!=!react-icons/md */ \"__barrel_optimize__?names=MdAdd!=!./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_publicUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/publicUrl */ \"./utils/publicUrl.js\");\n/* harmony import */ var _utils_publicUrl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_publicUrl__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/constants/data */ \"./constants/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    const { user, setUser, signOut } = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.UserAuth)();\n    const [notes, setNotes] = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (user) {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_publicUrl__WEBPACK_IMPORTED_MODULE_9___default()(), \"/get-notes/\").concat(user.uid));\n                const data = await res.json();\n                setNotes(data);\n            }\n        };\n        fetchData();\n        console.log(user);\n    }, [\n        user\n    ]);\n    const handleNewNote = async ()=>{\n        const docId = Math.floor(Math.random() * 10000000);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(\"\".concat(_utils_publicUrl__WEBPACK_IMPORTED_MODULE_9___default()(), \"/note\"), {\n                docId: docId.toString(),\n                title: \"New Note\",\n                content: _constants_data__WEBPACK_IMPORTED_MODULE_10__.initialData,\n                uid: user.uid,\n                category: \"frontend\",\n                tags: [\n                    \"tag\"\n                ]\n            });\n            console.log(res);\n            router.push(\"/edit/123456798\");\n        } catch (error) {\n            console.log(error);\n            return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"conatiner flex bg-gray-100 h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 63,\n                    columnNumber: 25\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-5/6 overflow-y-scroll \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 65,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"notes px-6 py-4  mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleNewNote,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" cursor-pointer note-card flex items-center justify-center bg-white rounded-lg shadow-md flex-col p-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"border-2 flex items-center justify-center border-dashed border-blue-400 rounded-full h-32 w-32\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdAdd_react_icons_md__WEBPACK_IMPORTED_MODULE_13__.MdAdd, {\n                                                className: \"text-3xl\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-blue-400 font-medium mt-4\",\n                                            children: \"Add Note\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                                lineNumber: 73,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 71,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 92,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 64,\n                    columnNumber: 25\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 62,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 96,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false);\n};\n_s(Dashboard, \"3UM9oBS8oXt5TG9CUqUkivnsYDA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0U7QUFDSDtBQUNDO0FBQ0o7QUFDRTtBQUNJO0FBQ0Y7QUFDQTtBQUNmO0FBQ2dCO0FBQ0s7QUFDUDtBQUd4QyxNQUFNYyxZQUFZOztJQUNkLE1BQU1DLFNBQVNGLHVEQUFTQTtJQUN4QixNQUFNLEVBQUVHLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR2hCLHFEQUFRQTtJQUMzQyxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdqQixxREFBYyxDQUFDLEVBQUU7SUFDM0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWtCLFlBQVk7WUFDZCxJQUFJTixNQUFNO2dCQUNOLE1BQU1PLE1BQU0sTUFBTWIsa0RBQVMsQ0FBQyxHQUE0Qk0sT0FBekJMLHVEQUFTQSxJQUFHLGVBQXNCLE9BQVRLLEtBQUtTLEdBQUc7Z0JBQ2hFLE1BQU1DLE9BQU8sTUFBTUgsSUFBSUksSUFBSTtnQkFDM0JQLFNBQVNNO1lBQ2I7UUFDSjtRQUNBSjtRQUVBTSxRQUFRQyxHQUFHLENBQUNiO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBSztJQUVULE1BQU1jLGdCQUFnQjtRQUNsQixNQUFNQyxRQUFRQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztRQUN6QyxJQUFJO1lBQ0EsTUFBTVgsTUFBTSxNQUFNYixtREFBVSxDQUFDLEdBQWUsT0FBWkMsdURBQVNBLElBQUcsVUFBUTtnQkFDaERvQixPQUFPQSxNQUFNSyxRQUFRO2dCQUNyQkMsT0FBTztnQkFDUEMsU0FBUzFCLHlEQUFXQTtnQkFDcEJhLEtBQUtULEtBQUtTLEdBQUc7Z0JBQ2JjLFVBQVU7Z0JBQ1ZDLE1BQU07b0JBQUM7aUJBQU07WUFDakI7WUFHQVosUUFBUUMsR0FBRyxDQUFDTjtZQUVaUixPQUFPMEIsSUFBSSxDQUFFO1FBQ2pCLEVBQUUsT0FBT0MsT0FBTztZQUNaZCxRQUFRQyxHQUFHLENBQUNhO1lBQ1o7UUFFSjtJQUVKO0lBRUEscUJBQ0k7a0JBRVExQixxQkFDSSw4REFBQzJCO1lBQUtDLFdBQVU7OzhCQUNaLDhEQUFFM0MsMkRBQU9BOzs7Ozs4QkFDVCw4REFBQzRDO29CQUFJRCxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNYLDhEQUFDNUMsMERBQU1BOzs7Ozs4Q0FFUCw4REFBQ1EsMERBQU1BOzs7Ozs7Ozs7OztzQ0FHWCw4REFBQ3FDOzRCQUFJRCxXQUFVO3NDQUVYLDRFQUFDRTtnQ0FBT0MsU0FBU2pCOzBDQUNiLDRFQUFDZTtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNDOzRDQUFJRCxXQUFVO3NEQUNYLDRFQUFDdEMsK0VBQUtBO2dEQUFDc0MsV0FBVTs7Ozs7Ozs7Ozs7c0RBRXJCLDhEQUFDSTs0Q0FBRUosV0FBVTtzREFBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBYzFELDhEQUFDbkMsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUlmLDhEQUFDRiwyREFBT0E7Ozs7OztBQUs1QjtHQXBGTU87O1FBQ2FELG1EQUFTQTs7O0tBRHRCQztBQXNGTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnQC9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgeyBVc2VyQXV0aCB9IGZyb20gJ0AvdXRpbHMvYXV0aCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IHsgTWRBZGQgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHB1YmxpY1VybCBmcm9tICdAL3V0aWxzL3B1YmxpY1VybCc7XHJcbmltcG9ydCB7IGluaXRpYWxEYXRhIH0gZnJvbSAnQC9jb25zdGFudHMvZGF0YSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgdXNlciwgc2V0VXNlciwgc2lnbk91dCB9ID0gVXNlckF1dGgoKTtcclxuICAgIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHVibGljVXJsKCl9L2dldC1ub3Rlcy8ke3VzZXIudWlkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXROb3RlcyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXdOb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvY0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHVibGljVXJsKCl9L25vdGVgLCB7XHJcbiAgICAgICAgICAgICAgICBkb2NJZDogZG9jSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBOb3RlXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpbml0aWFsRGF0YSxcclxuICAgICAgICAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJmcm9udGVuZFwiLFxyXG4gICAgICAgICAgICAgICAgdGFnczogW1widGFnXCJdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL2VkaXQvMTIzNDU2Nzk4YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlciA/XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb25hdGluZXIgZmxleCBiZy1ncmF5LTEwMCBoLXNjcmVlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwgU2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IG92ZXJmbG93LXktc2Nyb2xsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOb3RlcyBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGVzIHB4LTYgcHktNCAgbXQtOCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBOZXcgTm90ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5ld05vdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBub3RlLWNhcmQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgZmxleC1jb2wgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtZnVsbCBoLTMyIHctMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRBZGQgY2xhc3NOYW1lPSd0ZXh0LTN4bCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNDAwIGZvbnQtbWVkaXVtIG10LTQnPkFkZCBOb3RlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rlcy5tYXAoKG5vdGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZCBrZXk9e25vdGUuaWR9IGlkPXtub3RlLl9pZH0gY2F0ZWdvcnk9e25vdGUuY2F0ZWdvcnl9IHRpdGxlPXtub3RlLnRpdGxlfSBjb250ZW50PXtub3RlLmNvbnRlbnR9IHRpbWVzdGFtcD17bm90ZS50aW1lc3RhbXB9IGRpc3BsYXlOYW1lPXt1c2VyLmRpc3BsYXlOYW1lfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L21haW4gPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJTaWRlYmFyIiwiVXNlckF1dGgiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkNhcmQiLCJNZEFkZCIsIkxvYWRpbmciLCJIZWFkZXIiLCJGb290ZXIiLCJheGlvcyIsInB1YmxpY1VybCIsImluaXRpYWxEYXRhIiwidXNlUm91dGVyIiwiRGFzaGJvYXJkIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJzaWduT3V0Iiwibm90ZXMiLCJzZXROb3RlcyIsInVzZVN0YXRlIiwiZmV0Y2hEYXRhIiwicmVzIiwiZ2V0IiwidWlkIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTmV3Tm90ZSIsImRvY0lkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicG9zdCIsInRvU3RyaW5nIiwidGl0bGUiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJ0YWdzIiwicHVzaCIsImVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});