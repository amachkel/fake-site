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

/***/ "./components/VideoCard.js":
/*!*********************************!*\
  !*** ./components/VideoCard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VideoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videos_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videos.json */ \"./videos.json\");\n/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @u-wave/react-vimeo */ \"./node_modules/@u-wave/react-vimeo/dist/react-vimeo.es.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ \"./node_modules/html-react-parser/index.mjs\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction VideoCard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), checked = ref[0], setChecked = ref[1];\n    var revealVideo = function(id) {\n        !checked ? setChecked(true) : setChecked(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-12 col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card border-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"card-title\",\n                                    children: video.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(video.description)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-12 col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card border-0\",\n                        children: checked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"video card-body active\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"video-button btn\",\n                                    onClick: function() {\n                                        return revealVideo(video.id);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"vimeo d-block\",\n                                    video: video.url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"video card-body\",\n                            style: {\n                                backgroundImage: \"url(\".concat(video.thumbnail_large, \")\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"video-button btn\",\n                                    onClick: function() {\n                                        return revealVideo();\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"vimeo d-none\",\n                                    video: video.url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, video.id, true, {\n            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(VideoCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = VideoCard;\nvar _c;\n$RefreshReg$(_c, \"VideoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0o7QUFDSTtBQUNGOztBQUV2QixTQUFTSyxTQUFTLEdBQUc7O0lBQ2xDLElBQThCSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDSyxPQUFPLEdBQWdCTCxHQUFlLEdBQS9CLEVBQUVNLFVBQVUsR0FBSU4sR0FBZSxHQUFuQjtJQUUxQixJQUFNTyxXQUFXLEdBQUcsU0FBQ0MsRUFBRSxFQUFLO1FBQzFCLENBQUNILE9BQU8sR0FBR0MsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHQSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakQ7SUFFRCxxQkFDRSw4REFBQ0csS0FBRztrQkFDRiw0RUFBQ0EsS0FBRztZQUFnQkMsU0FBUyxFQUFDLEtBQUs7OzhCQUNqQyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs4QkFDakMsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxlQUFlO2tDQUM1Qiw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFdBQVc7OzhDQUN4Qiw4REFBQ0MsSUFBRTtvQ0FBQ0QsU0FBUyxFQUFDLFlBQVk7OENBQUVFLEtBQUssQ0FBQ0MsS0FBSzs7Ozs7d0NBQU07OENBQzdDLDhEQUFDQyxHQUFDO29DQUFDSixTQUFTLEVBQUMsV0FBVzs4Q0FBRVAsNkRBQUssQ0FBQ1MsS0FBSyxDQUFDRyxXQUFXLENBQUM7Ozs7O3dDQUFLOzs7Ozs7Z0NBQ25EOzs7Ozs0QkFDRjs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNOLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxvQkFBb0I7OEJBQ2pDLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZUFBZTtrQ0FDM0JMLE9BQU8saUJBQ04sOERBQUNJLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx3QkFBd0I7OzhDQUNyQyw4REFBQ00sUUFBTTtvQ0FDTE4sU0FBUyxFQUFDLGtCQUFrQjtvQ0FDNUJPLE9BQU8sRUFBRTsrQ0FBTVYsV0FBVyxDQUFDSyxLQUFLLENBQUNKLEVBQUUsQ0FBQztxQ0FBQTs7Ozs7d0NBQzVCOzhDQUVWLDhEQUFDTiwyREFBSztvQ0FBQ1EsU0FBUyxFQUFDLGVBQWU7b0NBQUNFLEtBQUssRUFBRUEsS0FBSyxDQUFDTSxHQUFHOzs7Ozt3Q0FBSTs7Ozs7O2dDQUNqRCxpQkFFTiw4REFBQ1QsS0FBRzs0QkFDRkMsU0FBUyxFQUFDLGlCQUFpQjs0QkFDM0JTLEtBQUssRUFBRTtnQ0FDTEMsZUFBZSxFQUFFLE1BQUssQ0FBd0IsTUFBQyxDQUF2QlIsS0FBSyxDQUFDUyxlQUFlLEVBQUMsR0FBQyxDQUFDOzZCQUNqRDs7OENBRUQsOERBQUNMLFFBQU07b0NBQ0xOLFNBQVMsRUFBQyxrQkFBa0I7b0NBQzVCTyxPQUFPLEVBQUU7K0NBQU1WLFdBQVcsRUFBRTtxQ0FBQTs7Ozs7d0NBQ3BCOzhDQUNWLDhEQUFDTCwyREFBSztvQ0FBQ1EsU0FBUyxFQUFDLGNBQWM7b0NBQUNFLEtBQUssRUFBRUEsS0FBSyxDQUFDTSxHQUFHOzs7Ozt3Q0FBSTs7Ozs7O2dDQUNoRDs7Ozs7NEJBRUo7Ozs7O3dCQUNGOztXQW5DRU4sS0FBSyxDQUFDSixFQUFFOzs7O2dCQW9DWjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FoRHVCSixTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0NhcmQuanM/YmVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHZpZGVvcyBmcm9tIFwiLi4vdmlkZW9zLmpzb25cIjtcclxuaW1wb3J0IFZpbWVvIGZyb20gXCJAdS13YXZlL3JlYWN0LXZpbWVvXCI7XHJcbmltcG9ydCBwYXJzZSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvQ2FyZCgpIHtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJldmVhbFZpZGVvID0gKGlkKSA9PiB7XHJcbiAgICAhY2hlY2tlZCA/IHNldENoZWNrZWQodHJ1ZSkgOiBzZXRDaGVja2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBrZXk9e3ZpZGVvLmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dmlkZW8udGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cGFyc2UodmlkZW8uZGVzY3JpcHRpb24pfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgIHtjaGVja2VkID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8gY2FyZC1ib2R5IGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1idXR0b24gYnRuXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmV2ZWFsVmlkZW8odmlkZW8uaWQpfVxyXG4gICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxWaW1lbyBjbGFzc05hbWU9XCJ2aW1lbyBkLWJsb2NrXCIgdmlkZW89e3ZpZGVvLnVybH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlbyBjYXJkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dmlkZW8udGh1bWJuYWlsX2xhcmdlfSlgLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLWJ1dHRvbiBidG5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXZlYWxWaWRlbygpfVxyXG4gICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFZpbWVvIGNsYXNzTmFtZT1cInZpbWVvIGQtbm9uZVwiIHZpZGVvPXt2aWRlby51cmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidmlkZW9zIiwiVmltZW8iLCJwYXJzZSIsIlZpZGVvQ2FyZCIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwicmV2ZWFsVmlkZW8iLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImg1IiwidmlkZW8iLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1cmwiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInRodW1ibmFpbF9sYXJnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/VideoCard.js\n"));

/***/ })

});