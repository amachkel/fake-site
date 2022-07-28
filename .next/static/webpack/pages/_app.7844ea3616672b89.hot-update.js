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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VideoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videos_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videos.json */ \"./videos.json\");\n/* harmony import */ var _assets_images_playbtn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/playbtn.png */ \"./assets/images/playbtn.png\");\n/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @u-wave/react-vimeo */ \"./node_modules/@u-wave/react-vimeo/dist/react-vimeo.es.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction VideoCard() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), checked = ref[0], setChecked = ref[1];\n    var revealVideo = function() {\n        !checked ? setChecked(true) : setChecked(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: _videos_json__WEBPACK_IMPORTED_MODULE_2__.map(function(video) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card border-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"card-title\",\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"card-text\",\n                                        children: video.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card border-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"video card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"video-button\",\n                                        onClick: function() {\n                                            return revealVideo();\n                                        },\n                                        children: _assets_images_playbtn_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"vimeo\",\n                                        video: video.url\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, video.id, true, {\n                fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(VideoCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = VideoCard;\nvar _c;\n$RefreshReg$(_c, \"VideoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0o7QUFDZTtBQUNYOztBQUV6QixTQUFTSyxTQUFTLEdBQUc7OztJQUNsQyxJQUE4QkosR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0Q0ssT0FBTyxHQUFnQkwsR0FBZSxHQUEvQixFQUFFTSxVQUFVLEdBQUlOLEdBQWUsR0FBbkI7SUFFMUIsSUFBTU8sV0FBVyxHQUFHLFdBQU07UUFDeEIsQ0FBQ0YsT0FBTyxHQUFHQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUdBLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqRDtJQUVELHFCQUNFLDhEQUFDRSxLQUFHO2tCQUNEUCw2Q0FBVSxDQUFDLFNBQUNTLEtBQUs7aUNBQ2hCLDhEQUFDRixLQUFHO2dCQUFnQkcsU0FBUyxFQUFDLEtBQUs7O2tDQUNqQyw4REFBQ0gsS0FBRzt3QkFBQ0csU0FBUyxFQUFDLG9CQUFvQjtrQ0FDakMsNEVBQUNILEtBQUc7NEJBQUNHLFNBQVMsRUFBQyxlQUFlO3NDQUM1Qiw0RUFBQ0gsS0FBRztnQ0FBQ0csU0FBUyxFQUFDLFdBQVc7O2tEQUN4Qiw4REFBQ0MsSUFBRTt3Q0FBQ0QsU0FBUyxFQUFDLFlBQVk7a0RBQUVELEtBQUssQ0FBQ0csS0FBSzs7Ozs7NkNBQU07a0RBQzdDLDhEQUFDQyxHQUFDO3dDQUFDSCxTQUFTLEVBQUMsV0FBVztrREFBRUQsS0FBSyxDQUFDSyxXQUFXOzs7Ozs2Q0FBSzs7Ozs7O3FDQUM1Qzs7Ozs7aUNBQ0Y7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDUCxLQUFHO3dCQUFDRyxTQUFTLEVBQUMsb0JBQW9CO2tDQUNqQyw0RUFBQ0gsS0FBRzs0QkFBQ0csU0FBUyxFQUFDLGVBQWU7c0NBQzVCLDRFQUFDSCxLQUFHO2dDQUFDRyxTQUFTLEVBQUMsaUJBQWlCOztrREFDOUIsOERBQUNLLFFBQU07d0NBQUNMLFNBQVMsRUFBQyxjQUFjO3dDQUFDTSxPQUFPLEVBQUU7bURBQU1WLFdBQVcsRUFBRTt5Q0FBQTtrREFDMURMLGtFQUFPOzs7Ozs2Q0FDRDtrREFDVCw4REFBQ0MsMkRBQUs7d0NBQUNRLFNBQVMsRUFBQyxPQUFPO3dDQUFDRCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1EsR0FBRzs7Ozs7NkNBQUk7Ozs7OztxQ0FDekM7Ozs7O2lDQUNGOzs7Ozs2QkFDRjs7ZUFsQkVSLEtBQUssQ0FBQ1MsRUFBRTs7OztxQkFtQlo7U0FDUCxDQUFDOzs7OztZQUNFLENBQ047Q0FDSDtHQWpDdUJmLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ZpZGVvQ2FyZC5qcz9iZWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdmlkZW9zIGZyb20gXCIuLi92aWRlb3MuanNvblwiO1xyXG5pbXBvcnQgcGxheWJ0biBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5YnRuLnBuZ1wiO1xyXG5pbXBvcnQgVmltZW8gZnJvbSBcIkB1LXdhdmUvcmVhY3QtdmltZW9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvQ2FyZCgpIHtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJldmVhbFZpZGVvID0gKCkgPT4ge1xyXG4gICAgIWNoZWNrZWQgPyBzZXRDaGVja2VkKHRydWUpIDogc2V0Q2hlY2tlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt2aWRlb3MubWFwKCh2aWRlbykgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXt2aWRlby5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dmlkZW8udGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt2aWRlby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aWRlby1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZXZlYWxWaWRlbygpfT5cclxuICAgICAgICAgICAgICAgICAge3BsYXlidG59XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxWaW1lbyBjbGFzc05hbWU9XCJ2aW1lb1wiIHZpZGVvPXt2aWRlby51cmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpZGVvcyIsInBsYXlidG4iLCJWaW1lbyIsIlZpZGVvQ2FyZCIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwicmV2ZWFsVmlkZW8iLCJkaXYiLCJtYXAiLCJ2aWRlbyIsImNsYXNzTmFtZSIsImg1IiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwidXJsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VideoCard.js\n"));

/***/ })

});