"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/logo.png */ \"./assets/images/logo.png\");\n/* harmony import */ var _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/avatar.png */ \"./assets/images/avatar.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavigationBar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), colorChange = ref[0], setColorchange = ref[1];\n    var changeNavbarColor = function() {\n        if (window.scrollY >= 80) {\n            setColorchange(true);\n        } else {\n            setColorchange(false);\n        }\n    };\n    window.addEventListener(\"scroll\", changeNavbarColor);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n        className: colorChange ? \"navbar colorChange\" : \"navbar\",\n        expand: \"md\",\n        fixed: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            fluid: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                    href: \"#home\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        width: \"60\",\n                        // className=\"d-inline-block align-top\"\n                        alt: \"Fox logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Toggle, {\n                    \"aria-controls\": \"navbarScroll\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Collapse, {\n                    id: \"navbarScroll\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                            className: \"ms-auto\",\n                            style: {\n                                maxHeight: \"200px\"\n                            },\n                            navbarScroll: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Text, {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        className: \"nav-link\",\n                                        href: \"#action1\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Text, {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        className: \"nav-link\",\n                                        href: \"#action2\",\n                                        children: \"Link\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                width: \"45\",\n                                height: \"45\",\n                                alt: \"avatar\",\n                                className: \"bg-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\Navbar.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(NavigationBar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavigationBar;\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDSztBQUNJO0FBQ2xCO0FBQzBCOztBQUUxQyxTQUFTUSxhQUFhLEdBQUc7O0lBQ3RDLElBQXNDUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTlDUSxXQUFXLEdBQW9CUixHQUFlLEdBQW5DLEVBQUVTLGNBQWMsR0FBSVQsR0FBZSxHQUFuQjtJQUNsQyxJQUFNVSxpQkFBaUIsR0FBRyxXQUFNO1FBQzlCLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN4QkgsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCLE1BQU07WUFDTEEsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0Y7SUFDREUsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVILGlCQUFpQixDQUFDLENBQUM7SUFFckQscUJBQ0UsOERBQUNMLG1EQUFNO1FBQ0xTLFNBQVMsRUFBRU4sV0FBVyxHQUFHLG9CQUFvQixHQUFHLFFBQVE7UUFDeERPLE1BQU0sRUFBQyxJQUFJO1FBQ1hDLEtBQUssRUFBQyxLQUFLO2tCQUVYLDRFQUFDVixzREFBUztZQUFDVyxLQUFLOzs4QkFDZCw4REFBQ1oseURBQVk7b0JBQUNjLElBQUksRUFBQyxPQUFPOzhCQUN4Qiw0RUFBQ2hCLG1EQUFLO3dCQUNKaUIsR0FBRyxFQUFFbkIsK0RBQUk7d0JBQ1RvQixLQUFLLEVBQUMsSUFBSTt3QkFDVix1Q0FBdUM7d0JBQ3ZDQyxHQUFHLEVBQUMsVUFBVTs7Ozs7NEJBQ2Q7Ozs7O3dCQUNXOzhCQUNmLDhEQUFDakIsMERBQWE7b0JBQUNtQixlQUFhLEVBQUMsY0FBYzs7Ozs7d0JBQUc7OEJBQzlDLDhEQUFDbkIsNERBQWU7b0JBQUNxQixFQUFFLEVBQUMsY0FBYzs7c0NBQ2hDLDhEQUFDdEIsZ0RBQUc7NEJBQUNVLFNBQVMsRUFBQyxTQUFTOzRCQUFDYSxLQUFLLEVBQUU7Z0NBQUVDLFNBQVMsRUFBRSxPQUFPOzZCQUFFOzRCQUFFQyxZQUFZOzs4Q0FDbEUsOERBQUN4Qix3REFBVztvQ0FBQ1MsU0FBUyxFQUFDLFVBQVU7OENBQy9CLDRFQUFDVixxREFBUTt3Q0FBQ1UsU0FBUyxFQUFDLFVBQVU7d0NBQUNLLElBQUksRUFBQyxVQUFVO2tEQUFDLE1BRS9DOzs7Ozs0Q0FBVzs7Ozs7d0NBQ0M7OENBQ2QsOERBQUNkLHdEQUFXO29DQUFDUyxTQUFTLEVBQUMsVUFBVTs4Q0FDL0IsNEVBQUNWLHFEQUFRO3dDQUFDVSxTQUFTLEVBQUMsVUFBVTt3Q0FBQ0ssSUFBSSxFQUFDLFVBQVU7a0RBQUMsTUFFL0M7Ozs7OzRDQUFXOzs7Ozt3Q0FDQzs7Ozs7O2dDQUNWO3NDQUNOLDhEQUFDZixxREFBUTtzQ0FDUCw0RUFBQ0QsbURBQUs7Z0NBQ0ppQixHQUFHLEVBQUVsQixpRUFBTTtnQ0FDWG1CLEtBQUssRUFBQyxJQUFJO2dDQUNWVyxNQUFNLEVBQUMsSUFBSTtnQ0FDWFYsR0FBRyxFQUFDLFFBQVE7Z0NBQ1pSLFNBQVMsRUFBQyxTQUFTOzs7OztvQ0FDbkI7Ozs7O2dDQUNPOzs7Ozs7d0JBQ0s7Ozs7OztnQkFDUjs7Ozs7WUFDTCxDQUNUO0NBQ0g7R0FyRHVCUCxhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIjtcclxuaW1wb3J0IGF2YXRhciBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBOYXYsIE5hdmJhciwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbkJhcigpIHtcclxuICBjb25zdCBbY29sb3JDaGFuZ2UsIHNldENvbG9yY2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjaGFuZ2VOYXZiYXJDb2xvciA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA4MCkge1xyXG4gICAgICBzZXRDb2xvcmNoYW5nZSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldENvbG9yY2hhbmdlKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZU5hdmJhckNvbG9yKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXJcclxuICAgICAgY2xhc3NOYW1lPXtjb2xvckNoYW5nZSA/IFwibmF2YmFyIGNvbG9yQ2hhbmdlXCIgOiBcIm5hdmJhclwifVxyXG4gICAgICBleHBhbmQ9XCJtZFwiXHJcbiAgICAgIGZpeGVkPVwidG9wXCJcclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgd2lkdGg9XCI2MFwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgIGFsdD1cIkZveCBsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cIm5hdmJhclNjcm9sbFwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cIm5hdmJhclNjcm9sbFwiPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjIwMHB4XCIgfX0gbmF2YmFyU2Nyb2xsPlxyXG4gICAgICAgICAgICA8TmF2YmFyLlRleHQgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI2FjdGlvbjFcIj5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhci5UZXh0PlxyXG4gICAgICAgICAgICA8TmF2YmFyLlRleHQgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI2FjdGlvbjJcIj5cclxuICAgICAgICAgICAgICAgIExpbmtcclxuICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhci5UZXh0PlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8TmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17YXZhdGFyfVxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLW5vbmVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L05hdmJhcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibG9nbyIsImF2YXRhciIsIkltYWdlIiwiTmF2IiwiTmF2YmFyIiwiQ29udGFpbmVyIiwiTmF2aWdhdGlvbkJhciIsImNvbG9yQ2hhbmdlIiwic2V0Q29sb3JjaGFuZ2UiLCJjaGFuZ2VOYXZiYXJDb2xvciIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwiZXhwYW5kIiwiZml4ZWQiLCJmbHVpZCIsIkJyYW5kIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiYWx0IiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJzdHlsZSIsIm1heEhlaWdodCIsIm5hdmJhclNjcm9sbCIsIlRleHQiLCJMaW5rIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});