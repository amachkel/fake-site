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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VideoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videos_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videos.json */ \"./videos.json\");\n/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @u-wave/react-vimeo */ \"./node_modules/@u-wave/react-vimeo/dist/react-vimeo.es.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ \"./node_modules/html-react-parser/index.mjs\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction VideoCard(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), checked = ref[0], setChecked = ref[1];\n    var revealVideo = function() {\n        !checked ? setChecked(true) : setChecked(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-12 col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card border-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"card-title\",\n                                    children: props.video.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.video.description)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-12 col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card border-0\",\n                        children: checked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"video card-body active\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"video-button btn\",\n                                    onClick: function() {\n                                        return revealVideo();\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"vimeo d-block\",\n                                    video: props.video.url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"video card-body\",\n                            style: {\n                                backgroundImage: \"url(\".concat(props.video.thumbnail_large, \")\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"video-button btn\",\n                                    onClick: function() {\n                                        return revealVideo();\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"vimeo d-none\",\n                                    video: props.video.url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, props.video.id, true, {\n            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(VideoCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = VideoCard;\nvar _c;\n$RefreshReg$(_c, \"VideoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0o7QUFDSTtBQUNGOztBQUV2QixTQUFTSyxTQUFTLENBQUNDLEtBQUssRUFBRTs7SUFDdkMsSUFBOEJMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENNLE9BQU8sR0FBZ0JOLEdBQWUsR0FBL0IsRUFBRU8sVUFBVSxHQUFJUCxHQUFlLEdBQW5CO0lBRTFCLElBQU1RLFdBQVcsR0FBRyxXQUFNO1FBQ3hCLENBQUNGLE9BQU8sR0FBR0MsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHQSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakQ7SUFFRCxxQkFDRSw4REFBQ0UsS0FBRztrQkFDRiw0RUFBQ0EsS0FBRztZQUFzQkMsU0FBUyxFQUFDLEtBQUs7OzhCQUN2Qyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs4QkFDakMsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxlQUFlO2tDQUM1Qiw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFdBQVc7OzhDQUN4Qiw4REFBQ0MsSUFBRTtvQ0FBQ0QsU0FBUyxFQUFDLFlBQVk7OENBQUVMLEtBQUssQ0FBQ08sS0FBSyxDQUFDQyxLQUFLOzs7Ozt3Q0FBTTs4Q0FDbkQsOERBQUNDLEdBQUM7b0NBQUNKLFNBQVMsRUFBQyxXQUFXOzhDQUFFUCw2REFBSyxDQUFDRSxLQUFLLENBQUNPLEtBQUssQ0FBQ0csV0FBVyxDQUFDOzs7Ozt3Q0FBSzs7Ozs7O2dDQUN6RDs7Ozs7NEJBQ0Y7Ozs7O3dCQUNGOzhCQUNOLDhEQUFDTixLQUFHO29CQUFDQyxTQUFTLEVBQUMsb0JBQW9COzhCQUNqQyw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGVBQWU7a0NBQzNCSixPQUFPLGlCQUNOLDhEQUFDRyxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzs4Q0FDckMsOERBQUNNLFFBQU07b0NBQ0xOLFNBQVMsRUFBQyxrQkFBa0I7b0NBQzVCTyxPQUFPLEVBQUU7K0NBQU1ULFdBQVcsRUFBRTtxQ0FBQTs7Ozs7d0NBQ3BCOzhDQUVWLDhEQUFDTiwyREFBSztvQ0FBQ1EsU0FBUyxFQUFDLGVBQWU7b0NBQUNFLEtBQUssRUFBRVAsS0FBSyxDQUFDTyxLQUFLLENBQUNNLEdBQUc7Ozs7O3dDQUFJOzs7Ozs7Z0NBQ3ZELGlCQUVOLDhEQUFDVCxLQUFHOzRCQUNGQyxTQUFTLEVBQUMsaUJBQWlCOzRCQUMzQlMsS0FBSyxFQUFFO2dDQUNMQyxlQUFlLEVBQUUsTUFBSyxDQUE4QixNQUFDLENBQTdCZixLQUFLLENBQUNPLEtBQUssQ0FBQ1MsZUFBZSxFQUFDLEdBQUMsQ0FBQzs2QkFDdkQ7OzhDQUVELDhEQUFDTCxRQUFNO29DQUNMTixTQUFTLEVBQUMsa0JBQWtCO29DQUM1Qk8sT0FBTyxFQUFFOytDQUFNVCxXQUFXLEVBQUU7cUNBQUE7Ozs7O3dDQUNwQjs4Q0FDViw4REFBQ04sMkRBQUs7b0NBQUNRLFNBQVMsRUFBQyxjQUFjO29DQUFDRSxLQUFLLEVBQUVQLEtBQUssQ0FBQ08sS0FBSyxDQUFDTSxHQUFHOzs7Ozt3Q0FBSTs7Ozs7O2dDQUN0RDs7Ozs7NEJBRUo7Ozs7O3dCQUNGOztXQW5DRWIsS0FBSyxDQUFDTyxLQUFLLENBQUNVLEVBQUU7Ozs7Z0JBb0NsQjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FoRHVCbEIsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlkZW9DYXJkLmpzP2JlY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB2aWRlb3MgZnJvbSBcIi4uL3ZpZGVvcy5qc29uXCI7XHJcbmltcG9ydCBWaW1lbyBmcm9tIFwiQHUtd2F2ZS9yZWFjdC12aW1lb1wiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0NhcmQocHJvcHMpIHtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJldmVhbFZpZGVvID0gKCkgPT4ge1xyXG4gICAgIWNoZWNrZWQgPyBzZXRDaGVja2VkKHRydWUpIDogc2V0Q2hlY2tlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYga2V5PXtwcm9wcy52aWRlby5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb3BzLnZpZGVvLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3BhcnNlKHByb3BzLnZpZGVvLmRlc2NyaXB0aW9uKX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICB7Y2hlY2tlZCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIGNhcmQtYm9keSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tYnV0dG9uIGJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJldmVhbFZpZGVvKCl9XHJcbiAgICAgICAgICAgICAgICA+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPFZpbWVvIGNsYXNzTmFtZT1cInZpbWVvIGQtYmxvY2tcIiB2aWRlbz17cHJvcHMudmlkZW8udXJsfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvIGNhcmQtYm9keVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9wcy52aWRlby50aHVtYm5haWxfbGFyZ2V9KWAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tYnV0dG9uIGJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJldmVhbFZpZGVvKCl9XHJcbiAgICAgICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VmltZW8gY2xhc3NOYW1lPVwidmltZW8gZC1ub25lXCIgdmlkZW89e3Byb3BzLnZpZGVvLnVybH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ2aWRlb3MiLCJWaW1lbyIsInBhcnNlIiwiVmlkZW9DYXJkIiwicHJvcHMiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInJldmVhbFZpZGVvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJ2aWRlbyIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidGh1bWJuYWlsX2xhcmdlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VideoCard.js\n"));

/***/ })

});