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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=RxHamburgerMenu!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const headerElement = document.querySelector(\"#header\");\n    const [isNavDropdownOpen, setIsNavDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [headerHeight, setHeaderHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function toggleNavDropdown() {\n        setIsNavDropdownOpen(!isNavDropdownOpen);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen w-screen flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                id: \"header\",\n                className: \"flex w-full justify-between items-center px-7 py-2 sm:py-3 md:px-10 lg:px-14 lg:py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"semibold text-md sm:text-l lg:text-xl\",\n                        children: \"HappyPositiveNews\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[orangered] p-2 rounded-md flex items-center justify-center lg:hidden\",\n                        onClick: toggleNavDropdown,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_2__.RxHamburgerMenu, {\n                            size: 20,\n                            fontWeight: \"bold\"\n                        }, void 0, false, {\n                            fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"\".concat(!isNavDropdownOpen ? \"hidden\" : \"\", \" absolute top-[\").concat(headerElement === null || headerElement === void 0 ? void 0 : headerElement.getBoundingClientRect().height, \"px] lg:static lg:flex items-center gap-4\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link text-sm sm:text-md lg:text-l\",\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/home\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:flex items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-primary-small\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col justify-center h-[80vh] items-center gap-4 leading-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center w-3/5\",\n                        children: \"Tired of all the negative news? Everywhere you go, people are stressed out, and unhappy. It doens't have to be that wey. HappyPositiveNews is a media platform where you can spend a small amount of time each day, reading positive news and stories, around various categories, to light up your day.\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-primary\",\n                        children: \"Start today\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"J4RZFk4OQ4jIOhkHKJiNZ0aaaJs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBDO0FBQ087QUFFbEMsU0FBU0c7O0lBQ3RCLE1BQU1DLGdCQUFnQkMsU0FBU0MsYUFBYSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFFakQsU0FBU1U7UUFDUEgscUJBQXFCLENBQUNEO0lBQ3hCO0lBRUFQLGdEQUFTQSxDQUFDLEtBRVYsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNZO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBT0MsSUFBRztnQkFBU0YsV0FBVTs7a0NBQzVCLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBd0M7Ozs7OztrQ0FDdEQsOERBQUNJO3dCQUFJSixXQUFVO3dCQUEyRUssU0FBU1A7a0NBQ2pHLDRFQUFDVCxrR0FBZUE7NEJBQUNpQixNQUFNOzRCQUFJQyxZQUFZOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNDO3dCQUFJUixXQUFXLFVBQUcsQ0FBQ04sb0JBQW9CLFdBQVcsSUFBRyxtQkFBK0QsT0FBOUNILDBCQUFBQSxvQ0FBQUEsY0FBZWtCLHFCQUFxQixHQUFHQyxNQUFNLEVBQUM7OzBDQUNuSCw4REFBQ0M7Z0NBQUVYLFdBQVU7Z0NBQXdDWSxNQUFLOzBDQUFTOzs7Ozs7MENBQ25FLDhEQUFDRDtnQ0FBRVgsV0FBVTtnQ0FBV1ksTUFBSzswQ0FBVzs7Ozs7OzBDQUN4Qyw4REFBQ0Q7Z0NBQUVYLFdBQVU7Z0NBQVdZLE1BQUs7MENBQVE7Ozs7Ozs7Ozs7OztrQ0FFdkMsOERBQUNSO3dCQUFJSixXQUFVOzswQ0FDYiw4REFBQ1c7Z0NBQUVYLFdBQVU7Z0NBQVdZLE1BQUs7MENBQVM7Ozs7OzswQ0FDdEMsOERBQUNDO2dDQUFPYixXQUFVOzBDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxQyw4REFBQ2M7Z0JBQVFkLFdBQVU7O2tDQUVqQiw4REFBQ2U7d0JBQUVmLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ2pDLDhEQUFDYTt3QkFBT2IsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDO0dBcEN3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUnhIYW1idXJnZXJNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcbiAgY29uc3QgW2lzTmF2RHJvcGRvd25PcGVuLCBzZXRJc05hdkRyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoZWFkZXJIZWlnaHQsIHNldEhlYWRlckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZEcm9wZG93bigpIHtcbiAgICBzZXRJc05hdkRyb3Bkb3duT3BlbighaXNOYXZEcm9wZG93bk9wZW4pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTcgcHktMiBzbTpweS0zIG1kOnB4LTEwIGxnOnB4LTE0IGxnOnB5LTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlbWlib2xkIHRleHQtbWQgc206dGV4dC1sIGxnOnRleHQteGxcIj5IYXBweVBvc2l0aXZlTmV3czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctW29yYW5nZXJlZF0gcC0yIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6aGlkZGVuXCIgb25DbGljaz17dG9nZ2xlTmF2RHJvcGRvd259PlxuICAgICAgICAgIDxSeEhhbWJ1cmdlck1lbnUgc2l6ZT17MjB9IGZvbnRXZWlnaHQ9e1wiYm9sZFwifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2AkeyFpc05hdkRyb3Bkb3duT3BlbiA/IFwiaGlkZGVuXCIgOiBcIlwifSBhYnNvbHV0ZSB0b3AtWyR7aGVhZGVyRWxlbWVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0fXB4XSBsZzpzdGF0aWMgbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRgfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LXNtIHNtOnRleHQtbWQgbGc6dGV4dC1sXCIgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvaG9tZVwiPkhvbWU8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9hPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnktc21hbGxcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtWzgwdmhdIGl0ZW1zLWNlbnRlciBnYXAtNCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgey8qIDxoMSBjbGFzc05hbWU9XCJzZW1pYm9sZCB0ZXh0LVs0LjVyZW1dIHRleHQteWVsbG93LTQwMFwiPlJlYWQgcG9zaXRpdmUgc3RvcmllcyBhbmQgbmV3czwvaDE+ICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LTMvNVwiPlRpcmVkIG9mIGFsbCB0aGUgbmVnYXRpdmUgbmV3cz8gRXZlcnl3aGVyZSB5b3UgZ28sIHBlb3BsZSBhcmUgc3RyZXNzZWQgb3V0LCBhbmQgdW5oYXBweS4gSXQgZG9lbnMndCBoYXZlIHRvIGJlIHRoYXQgd2V5LiBIYXBweVBvc2l0aXZlTmV3cyBpcyBhIG1lZGlhIHBsYXRmb3JtIHdoZXJlIHlvdSBjYW4gc3BlbmQgYSBzbWFsbCBhbW91bnQgb2YgdGltZSBlYWNoIGRheSwgcmVhZGluZyBwb3NpdGl2ZSBuZXdzIGFuZCBzdG9yaWVzLCBhcm91bmQgdmFyaW91cyBjYXRlZ29yaWVzLCB0byBsaWdodCB1cCB5b3VyIGRheS48L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5TdGFydCB0b2RheTwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUnhIYW1idXJnZXJNZW51IiwiSG9tZSIsImhlYWRlckVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc05hdkRyb3Bkb3duT3BlbiIsInNldElzTmF2RHJvcGRvd25PcGVuIiwiaGVhZGVySGVpZ2h0Iiwic2V0SGVhZGVySGVpZ2h0IiwidG9nZ2xlTmF2RHJvcGRvd24iLCJtYWluIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaWQiLCJoMSIsImRpdiIsIm9uQ2xpY2siLCJzaXplIiwiZm9udFdlaWdodCIsIm5hdiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImEiLCJocmVmIiwiYnV0dG9uIiwic2VjdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});