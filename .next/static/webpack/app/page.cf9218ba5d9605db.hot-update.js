"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=RxHamburgerMenu!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=IoClose!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const headerElement = document.querySelector(\"#header\");\n    const [isNavDropdownOpen, setIsNavDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [headerHeight, setHeaderHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function toggleNavDropdown() {\n        setIsNavDropdownOpen(!isNavDropdownOpen);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!headerElement) return;\n        setHeaderHeight(headerElement === null || headerElement === void 0 ? void 0 : headerElement.getBoundingClientRect().height);\n    }, [\n        headerElement\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen w-screen flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                id: \"header\",\n                className: \"flex w-full justify-between items-center px-5 py-3 sm:px-7 md:px-10 lg:px-14 lg:py-4 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"semibold text-md sm:text-l lg:text-xl\",\n                        children: \"HappyPositiveNews\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[orangered] p-2 rounded-md flex items-center justify-center lg:hidden\",\n                        onClick: toggleNavDropdown,\n                        children: isNavDropdownOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                            size: 20,\n                            fontWeight: \"bold\"\n                        }, void 0, false, {\n                            fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 33\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_3__.RxHamburgerMenu, {\n                            size: 20,\n                            fontWeight: \"bold\"\n                        }, void 0, false, {\n                            fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 77\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"absolute top-full left-0 lg:static border-b-[1px] lg:border-none border-white flex items-center justify-center transition ease-in-out gap-4 w-full lg:w-auto\",\n                        style: {\n                            top: headerHeight\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link text-sm sm:text-md lg:text-l\",\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/home\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:flex items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-primary-small\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col justify-center h-[80vh] items-center gap-4 leading-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center w-3/5\",\n                        children: \"Tired of all the negative news? Everywhere you go, people are stressed out, and unhappy. It doesn't have to be that way. HappyPositiveNews is a media platform where you can spend a small amount of time each day, reading positive news and stories, around various categories, to light up your day.\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-primary\",\n                        children: \"Start today\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"J4RZFk4OQ4jIOhkHKJiNZ0aaaJs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0QztBQUNLO0FBQ1A7QUFFM0IsU0FBU0k7O0lBQ3RCLE1BQU1DLGdCQUFnQkMsU0FBU0MsYUFBYSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFFakQsU0FBU1c7UUFDUEgscUJBQXFCLENBQUNEO0lBQ3hCO0lBRUFSLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDSyxlQUFlO1FBQ3BCTSxnQkFBZ0JOLDBCQUFBQSxvQ0FBQUEsY0FBZVEscUJBQXFCLEdBQUdDLE1BQU07SUFDL0QsR0FBRztRQUFDVDtLQUFjO0lBRWxCLHFCQUNFLDhEQUFDVTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQ0NDLElBQUc7Z0JBQ0hGLFdBQVU7O2tDQUVWLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBd0M7Ozs7OztrQ0FHdEQsOERBQUNJO3dCQUNDSixXQUFVO3dCQUNWSyxTQUFTVDtrQ0FHUEosa0NBQW9CLDhEQUFDTCxtRkFBT0E7NEJBQUNtQixNQUFNOzRCQUFJQyxZQUFZOzs7OztpREFBYSw4REFBQ3JCLGtHQUFlQTs0QkFBQ29CLE1BQU07NEJBQUlDLFlBQVk7Ozs7Ozs7Ozs7O2tDQUczRyw4REFBQ0M7d0JBQ0NSLFdBQVk7d0JBQ1pTLE9BQU87NEJBQUVDLEtBQUtoQjt3QkFBYTs7MENBRTNCLDhEQUFDaUI7Z0NBQUVYLFdBQVU7Z0NBQXdDWSxNQUFLOzBDQUFTOzs7Ozs7MENBR25FLDhEQUFDRDtnQ0FBRVgsV0FBVTtnQ0FBV1ksTUFBSzswQ0FBVzs7Ozs7OzBDQUd4Qyw4REFBQ0Q7Z0NBQUVYLFdBQVU7Z0NBQVdZLE1BQUs7MENBQVE7Ozs7Ozs7Ozs7OztrQ0FJdkMsOERBQUNSO3dCQUFJSixXQUFVOzswQ0FDYiw4REFBQ1c7Z0NBQUVYLFdBQVU7Z0NBQVdZLE1BQUs7MENBQVM7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFPYixXQUFVOzBDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxQyw4REFBQ2M7Z0JBQVFkLFdBQVU7O2tDQUNqQiw4REFBQ2U7d0JBQUVmLFdBQVU7a0NBQW9COzs7Ozs7a0NBT2pDLDhEQUFDYTt3QkFBT2IsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDO0dBaEV3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJ4SGFtYnVyZ2VyTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuICBjb25zdCBbaXNOYXZEcm9wZG93bk9wZW4sIHNldElzTmF2RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hlYWRlckhlaWdodCwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU5hdkRyb3Bkb3duKCkge1xuICAgIHNldElzTmF2RHJvcGRvd25PcGVuKCFpc05hdkRyb3Bkb3duT3Blbik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGVhZGVyRWxlbWVudCkgcmV0dXJuO1xuICAgIHNldEhlYWRlckhlaWdodChoZWFkZXJFbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICB9LCBbaGVhZGVyRWxlbWVudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aGVhZGVyXG4gICAgICAgIGlkPVwiaGVhZGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC01IHB5LTMgc206cHgtNyBtZDpweC0xMCBsZzpweC0xNCBsZzpweS00IHJlbGF0aXZlXCJcbiAgICAgID5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlbWlib2xkIHRleHQtbWQgc206dGV4dC1sIGxnOnRleHQteGxcIj5cbiAgICAgICAgICBIYXBweVBvc2l0aXZlTmV3c1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctW29yYW5nZXJlZF0gcC0yIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6aGlkZGVuXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZEcm9wZG93bn1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzTmF2RHJvcGRvd25PcGVuID8gPElvQ2xvc2Ugc2l6ZT17MjB9IGZvbnRXZWlnaHQ9e1wiYm9sZFwifSAvPiA6IDxSeEhhbWJ1cmdlck1lbnUgc2l6ZT17MjB9IGZvbnRXZWlnaHQ9e1wiYm9sZFwifSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTAgbGc6c3RhdGljIGJvcmRlci1iLVsxcHhdIGxnOmJvcmRlci1ub25lIGJvcmRlci13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGdhcC00IHctZnVsbCBsZzp3LWF1dG9gfVxuICAgICAgICAgIHN0eWxlPXt7IHRvcDogaGVhZGVySGVpZ2h0IH19XG4gICAgICAgID5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LXNtIHNtOnRleHQtbWQgbGc6dGV4dC1sXCIgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2hvbWVcIj5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeS1zbWFsbFwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1bODB2aF0gaXRlbXMtY2VudGVyIGdhcC00IGxlYWRpbmctbm9uZVwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LTMvNVwiPlxuICAgICAgICAgIFRpcmVkIG9mIGFsbCB0aGUgbmVnYXRpdmUgbmV3cz8gRXZlcnl3aGVyZSB5b3UgZ28sIHBlb3BsZSBhcmVcbiAgICAgICAgICBzdHJlc3NlZCBvdXQsIGFuZCB1bmhhcHB5LiBJdCBkb2Vzbid0IGhhdmUgdG8gYmUgdGhhdCB3YXkuXG4gICAgICAgICAgSGFwcHlQb3NpdGl2ZU5ld3MgaXMgYSBtZWRpYSBwbGF0Zm9ybSB3aGVyZSB5b3UgY2FuIHNwZW5kIGEgc21hbGxcbiAgICAgICAgICBhbW91bnQgb2YgdGltZSBlYWNoIGRheSwgcmVhZGluZyBwb3NpdGl2ZSBuZXdzIGFuZCBzdG9yaWVzLCBhcm91bmRcbiAgICAgICAgICB2YXJpb3VzIGNhdGVnb3JpZXMsIHRvIGxpZ2h0IHVwIHlvdXIgZGF5LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5TdGFydCB0b2RheTwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUnhIYW1idXJnZXJNZW51IiwiSW9DbG9zZSIsIkhvbWUiLCJoZWFkZXJFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNOYXZEcm9wZG93bk9wZW4iLCJzZXRJc05hdkRyb3Bkb3duT3BlbiIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsInRvZ2dsZU5hdkRyb3Bkb3duIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwibWFpbiIsImNsYXNzTmFtZSIsImhlYWRlciIsImlkIiwiaDEiLCJkaXYiLCJvbkNsaWNrIiwic2l6ZSIsImZvbnRXZWlnaHQiLCJuYXYiLCJzdHlsZSIsInRvcCIsImEiLCJocmVmIiwiYnV0dG9uIiwic2VjdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});