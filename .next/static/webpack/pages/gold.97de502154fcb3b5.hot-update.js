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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_molecules_ResultBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/molecules/ResultBox */ \"./components/molecules/ResultBox.tsx\");\n/* harmony import */ var _components_molecules_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/molecules/TableRow */ \"./components/molecules/TableRow.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\kusds\\\\Desktop\\\\Coding\\\\lostgold\\\\pages\\\\gold\\\\index.tsx\";\n// Gold 메인 화면\n\n\n\n\n\nvar GoldSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"gold__GoldSection\",\n  componentId: \"sc-pvi37f-0\"\n})([\"\", \" display:flex;flex-direction:column;justify-content:flex-start;align-items:center;\"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__.scrollBar);\n_c = GoldSection;\nvar tempAPIArr = [{\n  name: \"오레하 노말\",\n  gold: 1100\n}, {\n  name: \"오레하 하드\",\n  gold: 1300\n}, {\n  name: \"아르고스\",\n  gold: 1600\n}, {\n  name: \"발탄 노말\",\n  gold: 1300\n}, {\n  name: \"발탄 하드\",\n  gold: 2100\n}, {\n  name: \"비아 노말\",\n  gold: 1800\n}, {\n  name: \"비아 하드\",\n  gold: 2800\n}, {\n  name: \"쿠크세이튼\",\n  gold: 3100\n}, {\n  name: \"아브 노말\",\n  gold: 4500\n}, {\n  name: \"아브 하드\",\n  gold: 6000\n}];\n\nfunction index() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(GoldSection, {\n    children: [tempAPIArr.map(function (el, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_molecules_TableRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        name: el.name,\n        job: \"\\uCC3D\\uC220\\uC0AC\"\n      }, \"el\".concat(idx), false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_molecules_ResultBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\nvar _c;\n\n$RefreshReg$(_c, \"GoldSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nb2xkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFdBQVcsR0FBR0osMkVBQUg7QUFBQTtBQUFBO0FBQUEsK0ZBQ2RHLG9EQURjLENBQWpCO0tBQU1DO0FBU04sSUFBTUUsVUFBVSxHQUFHLENBQ2xCO0FBQUVDLEVBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxFQUFBQSxJQUFJLEVBQUU7QUFBeEIsQ0FEa0IsRUFFbEI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLEVBQUFBLElBQUksRUFBRTtBQUF4QixDQUZrQixFQUdsQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXRCLENBSGtCLEVBSWxCO0FBQUVELEVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxFQUFBQSxJQUFJLEVBQUU7QUFBdkIsQ0FKa0IsRUFLbEI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLEVBQUFBLElBQUksRUFBRTtBQUF2QixDQUxrQixFQU1sQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXZCLENBTmtCLEVBT2xCO0FBQUVELEVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxFQUFBQSxJQUFJLEVBQUU7QUFBdkIsQ0FQa0IsRUFRbEI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLEVBQUFBLElBQUksRUFBRTtBQUF2QixDQVJrQixFQVNsQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXZCLENBVGtCLEVBVWxCO0FBQUVELEVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxFQUFBQSxJQUFJLEVBQUU7QUFBdkIsQ0FWa0IsQ0FBbkI7O0FBYUEsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUNoQixzQkFDQyw4REFBQyxXQUFEO0FBQUEsZUFDRUgsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsRUFBRCxFQUFVQyxHQUFWO0FBQUEsMEJBQ2YsOERBQUMsc0VBQUQ7QUFBVSxZQUFJLEVBQUVELEVBQUUsQ0FBQ0osSUFBbkI7QUFBeUIsV0FBRyxFQUFDO0FBQTdCLHFCQUE2Q0ssR0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBZixDQURGLGVBS0MsOERBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBU0E7O0FBRUQsK0RBQWVILEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ29sZC9pbmRleC50c3g/NmU4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHb2xkIOuplOyduCDtmZTrqbRcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZXN1bHRCb3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1Jlc3VsdEJveFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1RhYmxlUm93XCI7XHJcbmltcG9ydCB7IGZsZXhDZW50ZXJEaXIsIGNvbG9yLCBzY3JvbGxCYXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XHJcblxyXG5jb25zdCBHb2xkU2VjdGlvbiA9IHN0eWxlZC5oZWFkZXJgXHJcblx0JHtzY3JvbGxCYXJ9XHJcblxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IHRlbXBBUElBcnIgPSBbXHJcblx0eyBuYW1lOiBcIuyYpOugiO2VmCDrhbjrp5BcIiwgZ29sZDogMTEwMCB9LFxyXG5cdHsgbmFtZTogXCLsmKTroIjtlZgg7ZWY65OcXCIsIGdvbGQ6IDEzMDAgfSxcclxuXHR7IG5hbWU6IFwi7JWE66W06rOg7IqkXCIsIGdvbGQ6IDE2MDAgfSxcclxuXHR7IG5hbWU6IFwi67Cc7YOEIOuFuOunkFwiLCBnb2xkOiAxMzAwIH0sXHJcblx0eyBuYW1lOiBcIuuwnO2DhCDtlZjrk5xcIiwgZ29sZDogMjEwMCB9LFxyXG5cdHsgbmFtZTogXCLruYTslYQg64W466eQXCIsIGdvbGQ6IDE4MDAgfSxcclxuXHR7IG5hbWU6IFwi67mE7JWEIO2VmOuTnFwiLCBnb2xkOiAyODAwIH0sXHJcblx0eyBuYW1lOiBcIuy/oO2BrOyEuOydtO2KvFwiLCBnb2xkOiAzMTAwIH0sXHJcblx0eyBuYW1lOiBcIuyVhOu4jCDrhbjrp5BcIiwgZ29sZDogNDUwMCB9LFxyXG5cdHsgbmFtZTogXCLslYTruIwg7ZWY65OcXCIsIGdvbGQ6IDYwMDAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8R29sZFNlY3Rpb24+XHJcblx0XHRcdHt0ZW1wQVBJQXJyLm1hcCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IChcclxuXHRcdFx0XHQ8VGFibGVSb3cgbmFtZT17ZWwubmFtZX0gam9iPVwi7LC97Iig7IKsXCIga2V5PXtgZWwke2lkeH1gfT48L1RhYmxlUm93PlxyXG5cdFx0XHQpKX1cclxuXHJcblx0XHRcdDxSZXN1bHRCb3ggLz5cclxuXHRcdDwvR29sZFNlY3Rpb24+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZXN1bHRCb3giLCJUYWJsZVJvdyIsInNjcm9sbEJhciIsIkdvbGRTZWN0aW9uIiwiaGVhZGVyIiwidGVtcEFQSUFyciIsIm5hbWUiLCJnb2xkIiwiaW5kZXgiLCJtYXAiLCJlbCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gold/index.tsx\n");

/***/ })

});