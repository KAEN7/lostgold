"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gold",{

/***/ "./pages/gold/index.tsx":
/*!******************************!*\
  !*** ./pages/gold/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_molecules_ResultBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/molecules/ResultBox */ \"./components/molecules/ResultBox.tsx\");\n/* harmony import */ var _components_molecules_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/molecules/TableRow */ \"./components/molecules/TableRow.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\kusds\\\\Desktop\\\\Coding\\\\lostgold\\\\pages\\\\gold\\\\index.tsx\",\n    _s = $RefreshSig$();\n\n// Gold 메인 화면\n\n\n\n\n\n\nvar GoldSection = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].header.withConfig({\n  displayName: \"gold__GoldSection\",\n  componentId: \"sc-pvi37f-0\"\n})([\"\", \" margin-top:6vh;height:94vh;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:\", \";\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__.scrollBar, _styles_theme__WEBPACK_IMPORTED_MODULE_3__.color.black);\n_c = GoldSection;\nvar TableBox = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul.withConfig({\n  displayName: \"gold__TableBox\",\n  componentId: \"sc-pvi37f-1\"\n})([\"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;height:fit-content;\"]);\n_c2 = TableBox;\n\nfunction index() {\n  _s();\n\n  var _this = this;\n\n  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {\n    return state.user.userData;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(GoldSection, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TableBox, {\n      children: user.map(function (el, idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_molecules_TableRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          name: el.name,\n          job: el.job\n        }, \"el\".concat(idx), false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 6\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_molecules_ResultBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 3\n  }, this);\n}\n\n_s(index, \"ODc3cjw/vvoWaLFqHWcEGODyOfo=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"GoldSection\");\n$RefreshReg$(_c2, \"TableBox\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nb2xkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sV0FBVyxHQUFHTCwyRUFBSDtBQUFBO0FBQUE7QUFBQSwwSUFDZEksb0RBRGMsRUFTRkQsc0RBVEUsQ0FBakI7S0FBTUU7QUFZTixJQUFNRyxRQUFRLEdBQUdSLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVIQUFkO01BQU1ROztBQVVOLFNBQVNFLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsSUFBSSxHQUFHWix3REFBVyxDQUFDLFVBQUNhLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNELElBQU4sQ0FBV0UsUUFBdEI7QUFBQSxHQUFELENBQXhCO0FBRUEsc0JBQ0MsOERBQUMsV0FBRDtBQUFBLDRCQUNDLDhEQUFDLFFBQUQ7QUFBQSxnQkFDRUYsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsRUFBRCxFQUFVQyxHQUFWO0FBQUEsNEJBQ1QsOERBQUMsc0VBQUQ7QUFBVSxjQUFJLEVBQUVELEVBQUUsQ0FBQ0UsSUFBbkI7QUFBeUIsYUFBRyxFQUFFRixFQUFFLENBQUNHO0FBQWpDLHVCQUFnREYsR0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFPQyw4REFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFXQTs7R0FkUU47VUFDS1g7OztBQWVkLCtEQUFlVyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dvbGQvaW5kZXgudHN4PzZlODEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR29sZCDrqZTsnbgg7ZmU66m0XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVzdWx0Qm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9SZXN1bHRCb3hcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgeyBmbGV4Q2VudGVyRGlyLCBjb2xvciwgc2Nyb2xsQmFyIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xyXG5cclxuY29uc3QgR29sZFNlY3Rpb24gPSBzdHlsZWQuaGVhZGVyYFxyXG5cdCR7c2Nyb2xsQmFyfVxyXG5cclxuXHRtYXJnaW4tdG9wOiA2dmg7XHJcblx0aGVpZ2h0OiA5NHZoO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAke2NvbG9yLmJsYWNrfTtcclxuYDtcclxuXHJcbmNvbnN0IFRhYmxlQm94ID0gc3R5bGVkLnVsYFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG5cdGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlckRhdGEpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEdvbGRTZWN0aW9uPlxyXG5cdFx0XHQ8VGFibGVCb3g+XHJcblx0XHRcdFx0e3VzZXIubWFwKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4gKFxyXG5cdFx0XHRcdFx0PFRhYmxlUm93IG5hbWU9e2VsLm5hbWV9IGpvYj17ZWwuam9ifSBrZXk9e2BlbCR7aWR4fWB9PjwvVGFibGVSb3c+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvVGFibGVCb3g+XHJcblxyXG5cdFx0XHQ8UmVzdWx0Qm94IC8+XHJcblx0XHQ8L0dvbGRTZWN0aW9uPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJzdHlsZWQiLCJSZXN1bHRCb3giLCJUYWJsZVJvdyIsImNvbG9yIiwic2Nyb2xsQmFyIiwiR29sZFNlY3Rpb24iLCJoZWFkZXIiLCJibGFjayIsIlRhYmxlQm94IiwidWwiLCJpbmRleCIsInVzZXIiLCJzdGF0ZSIsInVzZXJEYXRhIiwibWFwIiwiZWwiLCJpZHgiLCJuYW1lIiwiam9iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gold/index.tsx\n");

/***/ })

});