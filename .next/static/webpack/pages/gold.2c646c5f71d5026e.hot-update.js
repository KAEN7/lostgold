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

/***/ "./components/molecules/ResultBox.tsx":
/*!********************************************!*\
  !*** ./components/molecules/ResultBox.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\kusds\\\\Desktop\\\\Coding\\\\lostgold\\\\components\\\\molecules\\\\ResultBox.tsx\",\n    _this = undefined;\n\n// 호버시 나타날 리스트\n\n\n\n\nvar ResultSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul.withConfig({\n  displayName: \"ResultBox__ResultSection\",\n  componentId: \"sc-1fryr78-0\"\n})([\"display:flex;flex-direction:column;align-items:flex-start;text-align:center;width:30rem;height:fit-content;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:\", \";color:\", \";font-size:14px;\"], _styles_theme__WEBPACK_IMPORTED_MODULE_0__.color.white, _styles_theme__WEBPACK_IMPORTED_MODULE_0__.color.black);\n_c = ResultSection;\nvar ResultList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"ResultBox__ResultList\",\n  componentId: \"sc-1fryr78-1\"\n})([\"display:flex;\"]);\n_c2 = ResultList;\n\nvar ResultBox = function ResultBox(_ref) {\n  var children = _ref.children;\n  var tempAPIArr = [{\n    name: \"닉네임\",\n    result: 14000\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ResultSection, {\n    children: [tempAPIArr.map(function (el, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ResultList, {\n        children: [el.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n          children: [\"\\uC8FC\\uAC04 \\uACE8\\uB4DC:\", el.result]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 6\n        }, _this)]\n      }, idx, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: [\"\\uCD1D \\uC8FC\\uAC04 \\uACE8\\uB4DC\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 12\n      }, _this)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = ResultBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultBox);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ResultSection\");\n$RefreshReg$(_c2, \"ResultList\");\n$RefreshReg$(_c3, \"ResultBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9SZXN1bHRCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUUsYUFBYSxHQUFHRix1RUFBSDtBQUFBO0FBQUE7QUFBQSxpT0FVSkMsc0RBVkksRUFXVEEsc0RBWFMsQ0FBbkI7S0FBTUM7QUFlTixJQUFNSSxVQUFVLEdBQUdOLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHFCQUFoQjtNQUFNTTs7QUFRTixJQUFNRSxTQUErQixHQUFHLFNBQWxDQSxTQUFrQyxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUN6RCxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFFQyxJQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxJQUFBQSxNQUFNLEVBQUU7QUFBdkIsR0FBRCxDQUFuQjtBQUVBLHNCQUNDLDhEQUFDLGFBQUQ7QUFBQSxlQUNFRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSwwQkFDZiw4REFBQyxVQUFEO0FBQUEsbUJBQ0VELEVBQUUsQ0FBQ0gsSUFETCxlQUVDO0FBQUEsbURBQWFHLEVBQUUsQ0FBQ0YsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUEsU0FBaUJHLEdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZTtBQUFBLEtBQWYsQ0FERixlQU9DO0FBQUEsa0VBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBQUEsb0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFhQSxDQWhCRDs7TUFBTVA7QUFrQk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUmVzdWx0Qm94LnRzeD8xYTMzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIO2YuOuyhOyLnCDrgpjtg4DrgqAg66as7Iqk7Yq4XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcclxuXHJcbmNvbnN0IFJlc3VsdFNlY3Rpb24gPSBzdHlsZWQudWxgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMzByZW07XHJcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0YmFja2dyb3VuZDogJHtjb2xvci53aGl0ZX07XHJcblx0Y29sb3I6ICR7Y29sb3IuYmxhY2t9O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuYDtcclxuXHJcbmNvbnN0IFJlc3VsdExpc3QgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bHRCb3gge1xyXG5cdGNoaWxkcmVuPzogT2JqZWN0W107XHJcbn1cclxuXHJcbmNvbnN0IFJlc3VsdEJveDogUmVhY3QuRkM8SVJlc3VsdEJveD4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgdGVtcEFQSUFyciA9IFt7IG5hbWU6IFwi64uJ64Sk7J6EXCIsIHJlc3VsdDogMTQwMDAgfV07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVzdWx0U2VjdGlvbj5cclxuXHRcdFx0e3RlbXBBUElBcnIubWFwKChlbCwgaWR4KSA9PiAoXHJcblx0XHRcdFx0PFJlc3VsdExpc3Qga2V5PXtpZHh9PlxyXG5cdFx0XHRcdFx0e2VsLm5hbWV9XHJcblx0XHRcdFx0XHQ8c3Bhbj7so7zqsIQg6rOo65OcOntlbC5yZXN1bHR9PC9zcGFuPlxyXG5cdFx0XHRcdDwvUmVzdWx0TGlzdD5cclxuXHRcdFx0KSl9XHJcblx0XHRcdDw+XHJcblx0XHRcdFx07LSdIOyjvOqwhCDqs6jrk5w8c3Bhbj57fTwvc3Bhbj5cclxuXHRcdFx0PC8+XHJcblx0XHQ8L1Jlc3VsdFNlY3Rpb24+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdEJveDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImNvbG9yIiwiUmVzdWx0U2VjdGlvbiIsInVsIiwid2hpdGUiLCJibGFjayIsIlJlc3VsdExpc3QiLCJkaXYiLCJSZXN1bHRCb3giLCJjaGlsZHJlbiIsInRlbXBBUElBcnIiLCJuYW1lIiwicmVzdWx0IiwibWFwIiwiZWwiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/ResultBox.tsx\n");

/***/ })

});