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

/***/ "./components/atoms/ListBox.tsx":
/*!**************************************!*\
  !*** ./components/atoms/ListBox.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kaen/Desktop/cording/lostgold/components/atoms/ListBox.tsx\",\n    _this = undefined;\n\n// 호버시 나타날 리스트\n\n\n\nvar ListSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul.withConfig({\n  displayName: \"ListBox__ListSection\",\n  componentId: \"sc-1307u2w-0\"\n})([\"display:flex;flex-direction:column;align-items:flex-start;text-align:center;position:absolute;width:fit-content;height:10rem;padding:8px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#333;color:\", \";font-size:14px;\", \"\"], _styles_theme__WEBPACK_IMPORTED_MODULE_0__.color.white, _styles_theme__WEBPACK_IMPORTED_MODULE_0__.scrollBar);\n_c = ListSection;\nvar ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li.withConfig({\n  displayName: \"ListBox__ListItem\",\n  componentId: \"sc-1307u2w-1\"\n})([\"list-style-type:none;width:100%;margin-bottom:5px;\"]);\n_c2 = ListItem;\n\nvar ListBox = function ListBox(_ref) {\n  var children = _ref.children,\n      onTitlehandler = _ref.onTitlehandler;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ListSection, {\n    children: children.map(function (el) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ListItem, {\n        onClick: function onClick() {\n          return onTitlehandler(el);\n        },\n        children: el.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = ListBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListBox);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ListSection\");\n$RefreshReg$(_c2, \"ListItem\");\n$RefreshReg$(_c3, \"ListBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0xpc3RCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNRyxXQUFXLEdBQUdILHVFQUFIO0FBQUE7QUFBQTtBQUFBLG1RQWFQRSxzREFiTyxFQWdCZEQsb0RBaEJjLENBQWpCO0tBQU1FO0FBbUJOLElBQU1HLFFBQVEsR0FBR04sdUVBQUg7QUFBQTtBQUFBO0FBQUEsMERBQWQ7TUFBTU07O0FBZ0JOLElBQU1FLE9BQTJCLEdBQUcsU0FBOUJBLE9BQThCLE9BQWtDO0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjtBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7QUFDckUsc0JBQ0MsOERBQUMsV0FBRDtBQUFBLGNBQ0VELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLEVBQUQ7QUFBQSwwQkFDYiw4REFBQyxRQUFEO0FBQVUsZUFBTyxFQUFFO0FBQUEsaUJBQU1GLGNBQWMsQ0FBQ0UsRUFBRCxDQUFwQjtBQUFBLFNBQW5CO0FBQUEsa0JBQThDQSxFQUFFLENBQUNDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFPQSxDQVJEOztNQUFNTDtBQVVOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvTGlzdEJveC50c3g/OWEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDtmLjrsoTsi5wg64KY7YOA64KgIOumrOyKpO2KuFxuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgc2Nyb2xsQmFyLCBjb2xvciB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcblxuY29uc3QgTGlzdFNlY3Rpb24gPSBzdHlsZWQudWxgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IGZpdC1jb250ZW50O1xuXHRoZWlnaHQ6IDEwcmVtO1xuXHRwYWRkaW5nOiA4cHg7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRjb2xvcjogJHtjb2xvci53aGl0ZX07XG5cdGZvbnQtc2l6ZTogMTRweDtcblxuXHQke3Njcm9sbEJhcn1cbmA7XG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5gO1xuXG5pbnRlcmZhY2UgSUxpc3RJdGVtIHtcblx0bmFtZT86IHN0cmluZztcblx0Z29sZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGlzdEJveCB7XG5cdGNoaWxkcmVuPzogSUxpc3RJdGVtW107XG5cdG9uVGl0bGVoYW5kbGVyPzogYW55O1xufVxuXG5jb25zdCBMaXN0Qm94OiBSZWFjdC5GQzxJTGlzdEJveD4gPSAoeyBjaGlsZHJlbiwgb25UaXRsZWhhbmRsZXIgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaXN0U2VjdGlvbj5cblx0XHRcdHtjaGlsZHJlbi5tYXAoKGVsKSA9PiAoXG5cdFx0XHRcdDxMaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBvblRpdGxlaGFuZGxlcihlbCl9PntlbC5uYW1lfTwvTGlzdEl0ZW0+XG5cdFx0XHQpKX1cblx0XHQ8L0xpc3RTZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEJveDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJzY3JvbGxCYXIiLCJjb2xvciIsIkxpc3RTZWN0aW9uIiwidWwiLCJ3aGl0ZSIsIkxpc3RJdGVtIiwibGkiLCJMaXN0Qm94IiwiY2hpbGRyZW4iLCJvblRpdGxlaGFuZGxlciIsIm1hcCIsImVsIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/ListBox.tsx\n");

/***/ })

});