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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_molecules_ResultBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/molecules/ResultBox */ \"./components/molecules/ResultBox.tsx\");\n/* harmony import */ var _components_molecules_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/molecules/TableRow */ \"./components/molecules/TableRow.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\kusds\\\\Desktop\\\\Coding\\\\lostgold\\\\pages\\\\gold\\\\index.tsx\";\n// Gold 메인 화면\n\n\n\n\n\n\nvar GoldSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"gold__GoldSection\",\n  componentId: \"sc-pvi37f-0\"\n})([\"\", \" margin-top:6vh;height:94vh;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:\", \";\"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__.scrollBar, _styles_theme__WEBPACK_IMPORTED_MODULE_2__.color.black);\n_c = GoldSection;\nvar tempAPIArr = [{\n  name: \"오레하 노말\",\n  gold: 1100\n}, {\n  name: \"오레하 하드\",\n  gold: 1300\n}, {\n  name: \"아르고스\",\n  gold: 1600\n}, {\n  name: \"발탄 노말\",\n  gold: 1300\n}, {\n  name: \"발탄 하드\",\n  gold: 2100\n}, {\n  name: \"비아 노말\",\n  gold: 1800\n}, {\n  name: \"비아 하드\",\n  gold: 2800\n}, {\n  name: \"쿠크세이튼\",\n  gold: 3100\n}, {\n  name: \"아브 노말\",\n  gold: 4500\n}, {\n  name: \"아브 하드\",\n  gold: 6000\n}];\n\nfunction index() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(GoldSection, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: tempAPIArr.map(function (el, idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_molecules_TableRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: el.name,\n          job: \"\\uCC3D\\uC220\\uC0AC\"\n        }, \"el\".concat(idx), false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 6\n        }, _this);\n      })\n    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_molecules_ResultBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\nvar _c;\n\n$RefreshReg$(_c, \"GoldSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nb2xkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxXQUFXLEdBQUdMLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDBJQUNkSSxvREFEYyxFQVNGRCxzREFURSxDQUFqQjtLQUFNRTtBQVlOLElBQU1HLFVBQVUsR0FBRyxDQUNsQjtBQUFFQyxFQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXhCLENBRGtCLEVBRWxCO0FBQUVELEVBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxFQUFBQSxJQUFJLEVBQUU7QUFBeEIsQ0FGa0IsRUFHbEI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLEVBQUFBLElBQUksRUFBRTtBQUF0QixDQUhrQixFQUlsQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXZCLENBSmtCLEVBS2xCO0FBQUVELEVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxFQUFBQSxJQUFJLEVBQUU7QUFBdkIsQ0FMa0IsRUFNbEI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLEVBQUFBLElBQUksRUFBRTtBQUF2QixDQU5rQixFQU9sQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXZCLENBUGtCLEVBUWxCO0FBQUVELEVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxFQUFBQSxJQUFJLEVBQUU7QUFBdkIsQ0FSa0IsRUFTbEI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLEVBQUFBLElBQUksRUFBRTtBQUF2QixDQVRrQixFQVVsQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXZCLENBVmtCLENBQW5COztBQWFBLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFDaEIsc0JBQ0MsOERBQUMsV0FBRDtBQUFBLDRCQUNDO0FBQUEsZ0JBQ0VILFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUNDLEVBQUQsRUFBVUMsR0FBVjtBQUFBLDRCQUNmLDhEQUFDLHNFQUFEO0FBQVUsY0FBSSxFQUFFRCxFQUFFLENBQUNKLElBQW5CO0FBQXlCLGFBQUcsRUFBQztBQUE3Qix1QkFBNkNLLEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFmO0FBREYscUJBREQsZUFPQyw4REFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFXQTs7QUFFRCwrREFBZUgsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nb2xkL2luZGV4LnRzeD82ZTgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdvbGQg66mU7J24IO2ZlOuptFxyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlc3VsdEJveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvUmVzdWx0Qm94XCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvVGFibGVSb3dcIjtcclxuaW1wb3J0IHsgZmxleENlbnRlckRpciwgY29sb3IsIHNjcm9sbEJhciB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcclxuXHJcbmNvbnN0IEdvbGRTZWN0aW9uID0gc3R5bGVkLmhlYWRlcmBcclxuXHQke3Njcm9sbEJhcn1cclxuXHJcblx0bWFyZ2luLXRvcDogNnZoO1xyXG5cdGhlaWdodDogOTR2aDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogJHtjb2xvci5ibGFja307XHJcbmA7XHJcblxyXG5jb25zdCB0ZW1wQVBJQXJyID0gW1xyXG5cdHsgbmFtZTogXCLsmKTroIjtlZgg64W466eQXCIsIGdvbGQ6IDExMDAgfSxcclxuXHR7IG5hbWU6IFwi7Jik66CI7ZWYIO2VmOuTnFwiLCBnb2xkOiAxMzAwIH0sXHJcblx0eyBuYW1lOiBcIuyVhOultOqzoOyKpFwiLCBnb2xkOiAxNjAwIH0sXHJcblx0eyBuYW1lOiBcIuuwnO2DhCDrhbjrp5BcIiwgZ29sZDogMTMwMCB9LFxyXG5cdHsgbmFtZTogXCLrsJztg4Qg7ZWY65OcXCIsIGdvbGQ6IDIxMDAgfSxcclxuXHR7IG5hbWU6IFwi67mE7JWEIOuFuOunkFwiLCBnb2xkOiAxODAwIH0sXHJcblx0eyBuYW1lOiBcIuu5hOyVhCDtlZjrk5xcIiwgZ29sZDogMjgwMCB9LFxyXG5cdHsgbmFtZTogXCLsv6DtgazshLjsnbTtirxcIiwgZ29sZDogMzEwMCB9LFxyXG5cdHsgbmFtZTogXCLslYTruIwg64W466eQXCIsIGdvbGQ6IDQ1MDAgfSxcclxuXHR7IG5hbWU6IFwi7JWE67iMIO2VmOuTnFwiLCBnb2xkOiA2MDAwIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBpbmRleCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEdvbGRTZWN0aW9uPlxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdHt0ZW1wQVBJQXJyLm1hcCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IChcclxuXHRcdFx0XHRcdDxUYWJsZVJvdyBuYW1lPXtlbC5uYW1lfSBqb2I9XCLssL3siKDsgqxcIiBrZXk9e2BlbCR7aWR4fWB9PjwvVGFibGVSb3c+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvPlxyXG5cclxuXHRcdFx0PFJlc3VsdEJveCAvPlxyXG5cdFx0PC9Hb2xkU2VjdGlvbj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlc3VsdEJveCIsIlRhYmxlUm93IiwiY29sb3IiLCJzY3JvbGxCYXIiLCJHb2xkU2VjdGlvbiIsImhlYWRlciIsImJsYWNrIiwidGVtcEFQSUFyciIsIm5hbWUiLCJnb2xkIiwiaW5kZXgiLCJtYXAiLCJlbCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gold/index.tsx\n");

/***/ })

});