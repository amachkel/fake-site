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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VideoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @u-wave/react-vimeo */ \"./node_modules/@u-wave/react-vimeo/dist/react-vimeo.es.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"./node_modules/html-react-parser/index.mjs\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction VideoCard(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), checked = ref[0], setChecked = ref[1];\n    var revealVideo = function() {\n        !checked ? setChecked(true) : setChecked(false);\n    };\n    var video = props.video;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-12 col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card border-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"card-title\",\n                                    children: props.video.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props.video.description)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-12 col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card border-0\",\n                        children: checked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"video card-body active\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"video-button btn btn-2\",\n                                    style: {\n                                        border: \"none \"\n                                    },\n                                    onClick: function() {\n                                        return revealVideo();\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"vimeo d-block\",\n                                    video: props.video.id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"video card-body\",\n                            style: {\n                                backgroundImage: \"url(\".concat(props.video.thumbnail_large, \")\"),\n                                backgroundRepeat: \"no-repeat\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"video-button btn\",\n                                    onClick: function() {\n                                        return revealVideo();\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"vimeo d-none\",\n                                    video: props.video.url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, props.video.id, true, {\n            fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amach\\\\Documents\\\\react\\\\fake-site\\\\components\\\\VideoCard.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(VideoCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = VideoCard;\nvar _c;\n$RefreshReg$(_c, \"VideoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0E7QUFDRjtBQUNnQzs7QUFFdkQsU0FBU0ssU0FBUyxDQUFDQyxLQUFLLEVBQUU7O0lBQ3ZDLElBQThCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDTSxPQUFPLEdBQWdCTixHQUFlLEdBQS9CLEVBQUVPLFVBQVUsR0FBSVAsR0FBZSxHQUFuQjtJQUUxQixJQUFNUSxXQUFXLEdBQUcsV0FBTTtRQUN4QixDQUFDRixPQUFPLEdBQUdDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBR0EsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QsSUFBSUUsS0FBSyxHQUFHSixLQUFLLENBQUNJLEtBQUs7SUFDdkIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFNBQVM7a0JBQ3RCLDRFQUFDRCxLQUFHO1lBQXNCQyxTQUFTLEVBQUMsS0FBSzs7OEJBQ3ZDLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsb0JBQW9COzhCQUNqQyw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGVBQWU7a0NBQzVCLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsV0FBVzs7OENBQ3hCLDhEQUFDQyxJQUFFO29DQUFDRCxTQUFTLEVBQUMsWUFBWTs4Q0FBRU4sS0FBSyxDQUFDSSxLQUFLLENBQUNJLEtBQUs7Ozs7O3dDQUFNOzhDQUNuRCw4REFBQ0MsR0FBQztvQ0FBQ0gsU0FBUyxFQUFDLFdBQVc7OENBQUVULDZEQUFLLENBQUNHLEtBQUssQ0FBQ0ksS0FBSyxDQUFDTSxXQUFXLENBQUM7Ozs7O3dDQUFLOzs7Ozs7Z0NBQ3pEOzs7Ozs0QkFDRjs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNMLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxvQkFBb0I7OEJBQ2pDLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZUFBZTtrQ0FDM0JMLE9BQU8saUJBQ04sOERBQUNJLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx3QkFBd0I7OzhDQUNyQyw4REFBQ0ssUUFBTTtvQ0FDTEwsU0FBUyxFQUFDLHdCQUF3QjtvQ0FDbENNLEtBQUssRUFBRTt3Q0FBRUMsTUFBTSxFQUFFLE9BQU87cUNBQUU7b0NBQzFCQyxPQUFPLEVBQUU7K0NBQU1YLFdBQVcsRUFBRTtxQ0FBQTs7Ozs7d0NBQ3BCOzhDQUVWLDhEQUFDUCwyREFBSztvQ0FBQ1UsU0FBUyxFQUFDLGVBQWU7b0NBQUNGLEtBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFLLENBQUNXLEVBQUU7Ozs7O3dDQUFJOzs7Ozs7Z0NBQ3RELGlCQUVOLDhEQUFDVixLQUFHOzRCQUNGQyxTQUFTLEVBQUMsaUJBQWlCOzRCQUMzQk0sS0FBSyxFQUFFO2dDQUNMSSxlQUFlLEVBQUUsTUFBSyxDQUE4QixNQUFDLENBQTdCaEIsS0FBSyxDQUFDSSxLQUFLLENBQUNhLGVBQWUsRUFBQyxHQUFDLENBQUM7Z0NBQ3REQyxnQkFBZ0IsRUFBRSxXQUFXOzZCQUM5Qjs7OENBRUQsOERBQUNQLFFBQU07b0NBQ0xMLFNBQVMsRUFBQyxrQkFBa0I7b0NBQzVCUSxPQUFPLEVBQUU7K0NBQU1YLFdBQVcsRUFBRTtxQ0FBQTs7Ozs7d0NBQ3BCOzhDQUNWLDhEQUFDUCwyREFBSztvQ0FBQ1UsU0FBUyxFQUFDLGNBQWM7b0NBQUNGLEtBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFLLENBQUNlLEdBQUc7Ozs7O3dDQUFJOzs7Ozs7Z0NBQ3REOzs7Ozs0QkFFSjs7Ozs7d0JBQ0Y7O1dBckNFbkIsS0FBSyxDQUFDSSxLQUFLLENBQUNXLEVBQUU7Ozs7Z0JBc0NsQjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FsRHVCaEIsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlkZW9DYXJkLmpzP2JlY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWaW1lbyBmcm9tIFwiQHUtd2F2ZS9yZWFjdC12aW1lb1wiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9DYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByZXZlYWxWaWRlbyA9ICgpID0+IHtcclxuICAgICFjaGVja2VkID8gc2V0Q2hlY2tlZCh0cnVlKSA6IHNldENoZWNrZWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgbGV0IHZpZGVvID0gcHJvcHMudmlkZW87XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGtleT17cHJvcHMudmlkZW8uaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9wcy52aWRlby50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwYXJzZShwcm9wcy52aWRlby5kZXNjcmlwdGlvbil9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAge2NoZWNrZWQgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlbyBjYXJkLWJvZHkgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLWJ1dHRvbiBidG4gYnRuLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwibm9uZSBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXZlYWxWaWRlbygpfVxyXG4gICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxWaW1lbyBjbGFzc05hbWU9XCJ2aW1lbyBkLWJsb2NrXCIgdmlkZW89e3Byb3BzLnZpZGVvLmlkfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvIGNhcmQtYm9keVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9wcy52aWRlby50aHVtYm5haWxfbGFyZ2V9KWAsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tYnV0dG9uIGJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJldmVhbFZpZGVvKCl9XHJcbiAgICAgICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VmltZW8gY2xhc3NOYW1lPVwidmltZW8gZC1ub25lXCIgdmlkZW89e3Byb3BzLnZpZGVvLnVybH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJWaW1lbyIsInBhcnNlIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiVmlkZW9DYXJkIiwicHJvcHMiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInJldmVhbFZpZGVvIiwidmlkZW8iLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic3R5bGUiLCJib3JkZXIiLCJvbkNsaWNrIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aHVtYm5haWxfbGFyZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoCard.js\n"));

/***/ })

});