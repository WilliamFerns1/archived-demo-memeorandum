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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=RxHamburgerMenu!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoClose!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const headerElement = document.querySelector(\"#header\");\n    const [isNavDropdownOpen, setIsNavDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isBurgerIcon, setIsBurgerIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [headerHeight, setHeaderHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function toggleNavDropdown() {\n        setIsNavDropdownOpen(!isNavDropdownOpen);\n        setIsBurgerIcon(!isBurgerIcon);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!headerElement) return;\n        setHeaderHeight(headerElement === null || headerElement === void 0 ? void 0 : headerElement.getBoundingClientRect().height);\n    }, [\n        headerElement\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen w-screen flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                id: \"header\",\n                className: \"flex w-full justify-between items-center px-5 py-3 sm:px-7 md:px-10 lg:px-14 lg:py-4 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"semibold text-md sm:text-l lg:text-xl\",\n                        children: \"HappyPositiveNews\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-v[orangered] p-2 rounded-md flex items-center justify-center lg:hidden\",\n                        onClick: toggleNavDropdown,\n                        children: isBurgerIcon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_2__.RxHamburgerMenu, {\n                            size: 20,\n                            fontWeight: \"bold\"\n                        }, void 0, false, {\n                            fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoClose, {\n                            size: 20,\n                            fontWeight: \"bold\"\n                        }, void 0, false, {\n                            fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"\".concat(isNavDropdownOpen ? \"\" : \"hidden\", \" absolute top-full left-0 lg:static border-b-[1px] border-white lg:flex lg:border-b-none items-center justify-center transition ease-in-out gap-4 w-full lg:w-auto\"),\n                        style: {\n                            top: headerHeight\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link text-sm sm:text-md lg:text-l\",\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/home\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:flex items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-primary-small\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col justify-center h-[80vh] items-center gap-4 leading-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center w-3/5\",\n                        children: \"Tired of all the negative news? Everywhere you go, people are stressed out, and unhappy. It doesn't have to be that way. HappyPositiveNews is a media platform where you can spend a small amount of time each day, reading positive news and stories, around various categories, to light up your day.\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-primary\",\n                        children: \"Start today\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adonis/dev/freelancing/demos/demo-positive-news-site-memeorandum-demo/app/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"q0a8ToWLHX8HndwlTjLjZN2YocE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0QztBQUNLO0FBQ1A7QUFFM0IsU0FBU0k7O0lBQ3RCLE1BQU1DLGdCQUFnQkMsU0FBU0MsYUFBYSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFFakQsU0FBU2E7UUFDUEwscUJBQXFCLENBQUNEO1FBQ3RCRyxnQkFBZ0IsQ0FBQ0Q7SUFDbkI7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNLLGVBQWU7UUFDcEJRLGdCQUFnQlIsMEJBQUFBLG9DQUFBQSxjQUFlVSxxQkFBcUIsR0FBR0MsTUFBTTtJQUMvRCxHQUFHO1FBQUNYO0tBQWM7SUFFbEIscUJBQ0UsOERBQUNZO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFDQ0MsSUFBRztnQkFDSEYsV0FBVTs7a0NBRVYsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUF3Qzs7Ozs7O2tDQUd0RCw4REFBQ0k7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVNUO2tDQUVSSiw2QkFDQyw4REFBQ1Isa0dBQWVBOzRCQUFDc0IsTUFBTTs0QkFBSUMsWUFBWTs7Ozs7aURBRXZDLDhEQUFDdEIsbUZBQU9BOzRCQUFDcUIsTUFBTTs0QkFBSUMsWUFBWTs7Ozs7Ozs7Ozs7a0NBR25DLDhEQUFDQzt3QkFDQ1IsV0FBVyxHQUVWLE9BRENWLG9CQUFvQixLQUFLLFVBQzFCO3dCQUNEbUIsT0FBTzs0QkFBRUMsS0FBS2hCO3dCQUFhOzswQ0FFM0IsOERBQUNpQjtnQ0FBRVgsV0FBVTtnQ0FBd0NZLE1BQUs7MENBQVM7Ozs7OzswQ0FHbkUsOERBQUNEO2dDQUFFWCxXQUFVO2dDQUFXWSxNQUFLOzBDQUFXOzs7Ozs7MENBR3hDLDhEQUFDRDtnQ0FBRVgsV0FBVTtnQ0FBV1ksTUFBSzswQ0FBUTs7Ozs7Ozs7Ozs7O2tDQUl2Qyw4REFBQ1I7d0JBQUlKLFdBQVU7OzBDQUNiLDhEQUFDVztnQ0FBRVgsV0FBVTtnQ0FBV1ksTUFBSzswQ0FBUzs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQU9iLFdBQVU7MENBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFDLDhEQUFDYztnQkFBUWQsV0FBVTs7a0NBQ2pCLDhEQUFDZTt3QkFBRWYsV0FBVTtrQ0FBb0I7Ozs7OztrQ0FPakMsOERBQUNhO3dCQUFPYixXQUFVO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7R0F0RXdCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUnhIYW1idXJnZXJNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XG5pbXBvcnQgeyBJb0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XG4gIGNvbnN0IFtpc05hdkRyb3Bkb3duT3Blbiwgc2V0SXNOYXZEcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNCdXJnZXJJY29uLCBzZXRJc0J1cmdlckljb25dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtoZWFkZXJIZWlnaHQsIHNldEhlYWRlckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZEcm9wZG93bigpIHtcbiAgICBzZXRJc05hdkRyb3Bkb3duT3BlbighaXNOYXZEcm9wZG93bk9wZW4pO1xuICAgIHNldElzQnVyZ2VySWNvbighaXNCdXJnZXJJY29uKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoZWFkZXJFbGVtZW50KSByZXR1cm47XG4gICAgc2V0SGVhZGVySGVpZ2h0KGhlYWRlckVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gIH0sIFtoZWFkZXJFbGVtZW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoZWFkZXJcbiAgICAgICAgaWQ9XCJoZWFkZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTUgcHktMyBzbTpweC03IG1kOnB4LTEwIGxnOnB4LTE0IGxnOnB5LTQgcmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VtaWJvbGQgdGV4dC1tZCBzbTp0ZXh0LWwgbGc6dGV4dC14bFwiPlxuICAgICAgICAgIEhhcHB5UG9zaXRpdmVOZXdzXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy12W29yYW5nZXJlZF0gcC0yIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6aGlkZGVuXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZEcm9wZG93bn1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0J1cmdlckljb24gPyAoXG4gICAgICAgICAgICA8UnhIYW1idXJnZXJNZW51IHNpemU9ezIwfSBmb250V2VpZ2h0PXtcImJvbGRcIn0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPElvQ2xvc2Ugc2l6ZT17MjB9IGZvbnRXZWlnaHQ9e1wiYm9sZFwifSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgIGlzTmF2RHJvcGRvd25PcGVuID8gXCJcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgICB9IGFic29sdXRlIHRvcC1mdWxsIGxlZnQtMCBsZzpzdGF0aWMgYm9yZGVyLWItWzFweF0gYm9yZGVyLXdoaXRlIGxnOmZsZXggbGc6Ym9yZGVyLWItbm9uZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBnYXAtNCB3LWZ1bGwgbGc6dy1hdXRvYH1cbiAgICAgICAgICBzdHlsZT17eyB0b3A6IGhlYWRlckhlaWdodCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1zbSBzbTp0ZXh0LW1kIGxnOnRleHQtbFwiIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnktc21hbGxcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtWzgwdmhdIGl0ZW1zLWNlbnRlciBnYXAtNCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy0zLzVcIj5cbiAgICAgICAgICBUaXJlZCBvZiBhbGwgdGhlIG5lZ2F0aXZlIG5ld3M/IEV2ZXJ5d2hlcmUgeW91IGdvLCBwZW9wbGUgYXJlXG4gICAgICAgICAgc3RyZXNzZWQgb3V0LCBhbmQgdW5oYXBweS4gSXQgZG9lc24ndCBoYXZlIHRvIGJlIHRoYXQgd2F5LlxuICAgICAgICAgIEhhcHB5UG9zaXRpdmVOZXdzIGlzIGEgbWVkaWEgcGxhdGZvcm0gd2hlcmUgeW91IGNhbiBzcGVuZCBhIHNtYWxsXG4gICAgICAgICAgYW1vdW50IG9mIHRpbWUgZWFjaCBkYXksIHJlYWRpbmcgcG9zaXRpdmUgbmV3cyBhbmQgc3RvcmllcywgYXJvdW5kXG4gICAgICAgICAgdmFyaW91cyBjYXRlZ29yaWVzLCB0byBsaWdodCB1cCB5b3VyIGRheS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+U3RhcnQgdG9kYXk8L2J1dHRvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJ4SGFtYnVyZ2VyTWVudSIsIklvQ2xvc2UiLCJIb21lIiwiaGVhZGVyRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzTmF2RHJvcGRvd25PcGVuIiwic2V0SXNOYXZEcm9wZG93bk9wZW4iLCJpc0J1cmdlckljb24iLCJzZXRJc0J1cmdlckljb24iLCJoZWFkZXJIZWlnaHQiLCJzZXRIZWFkZXJIZWlnaHQiLCJ0b2dnbGVOYXZEcm9wZG93biIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIm1haW4iLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJpZCIsImgxIiwiZGl2Iiwib25DbGljayIsInNpemUiLCJmb250V2VpZ2h0IiwibmF2Iiwic3R5bGUiLCJ0b3AiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInNlY3Rpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});