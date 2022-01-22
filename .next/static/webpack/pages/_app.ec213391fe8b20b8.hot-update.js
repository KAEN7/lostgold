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

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\kusds\\\\Desktop\\\\Coding\\\\lostgold\\\\components\\\\Header.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"Header__HeaderSection\",\n  componentId: \"sc-1pm1jej-0\"\n})([\"\", \" width:100%;height:6vh;top:0;position:fixed;box-sizing:border-box;\"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__.flexCenter);\n_c = HeaderSection;\nvar HeaderBtn = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"Header__HeaderBtn\",\n  componentId: \"sc-1pm1jej-1\"\n})([\"\", \" width:5rem;height:2rem;margin:0.7rem;border-right:0.1rem solid \", \";cursor:pointer;font-size:\", \";font-weight:\", \";color:\", \";\"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__.flexCenter, _styles_theme__WEBPACK_IMPORTED_MODULE_2__.color.point, function (props) {\n  return props.color && \"0.9rem\";\n}, function (props) {\n  return props.color ? \"bold\" : \"normal\";\n}, function (props) {\n  return props.color ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__.color.white : _styles_theme__WEBPACK_IMPORTED_MODULE_2__.color.gray;\n});\n_c2 = HeaderBtn;\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var list = [\"Home\", \"Gold\", \"Setting\"];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([true, false, false]),\n      isBoxSelect = _useState[0],\n      setBoxSelect = _useState[1];\n\n  var focusHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    var newArr = Array(list.length).fill(false);\n    newArr[index] = true;\n    setBoxSelect(newArr);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(HeaderSection, {\n    children: list.map(function (el, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(HeaderBtn, {\n        color: isBoxSelect[index],\n        onClick: function onClick() {\n          return focusHandler(index);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: el.toLowerCase(),\n          passHref: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: el\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 6\n        }, _this)\n      }, \"header\".concat(index), false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Header, \"0LVTgS8bDUkt6eSaou36Ccv2D70=\");\n\n_c3 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeaderSection\");\n$RefreshReg$(_c2, \"HeaderBtn\");\n$RefreshReg$(_c3, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLGFBQWEsR0FBR0gsMkVBQUg7QUFBQTtBQUFBO0FBQUEsK0VBQ2hCQyxxREFEZ0IsQ0FBbkI7S0FBTUU7QUFjTixJQUFNRSxTQUFTLEdBQUdMLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDRJQUNaQyxxREFEWSxFQU1lQyxzREFOZixFQVFELFVBQUNNLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNOLEtBQU4sSUFBZSxRQUExQjtBQUFBLENBUkMsRUFTQyxVQUFDTSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDTixLQUFOLEdBQWMsTUFBZCxHQUF1QixRQUFuQztBQUFBLENBVEQsRUFVTCxVQUFDTSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDTixLQUFOLEdBQWNBLHNEQUFkLEdBQTRCQSxxREFBeEM7QUFBQSxDQVZLLENBQWY7TUFBTUc7O0FBYU4sU0FBU00sTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNqQixNQUFNQyxJQUFJLEdBQUcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixTQUFqQixDQUFiOztBQUNBLGtCQUFvQ2IsK0NBQVEsQ0FBQyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZCxDQUFELENBQTVDO0FBQUEsTUFBT2MsV0FBUDtBQUFBLE1BQW9CQyxZQUFwQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUdqQixrREFBVyxDQUFDLFVBQUNrQixLQUFELEVBQW1CO0FBQ25ELFFBQU1DLE1BQU0sR0FBR0MsS0FBSyxDQUFDTixJQUFJLENBQUNPLE1BQU4sQ0FBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsS0FBeEIsQ0FBZjtBQUNBSCxJQUFBQSxNQUFNLENBQUNELEtBQUQsQ0FBTixHQUFnQixJQUFoQjtBQUNBRixJQUFBQSxZQUFZLENBQUNHLE1BQUQsQ0FBWjtBQUNBLEdBSitCLEVBSTdCLEVBSjZCLENBQWhDO0FBTUEsc0JBQ0MsOERBQUMsYUFBRDtBQUFBLGNBQ0VMLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNDLEVBQUQsRUFBS04sS0FBTDtBQUFBLDBCQUNULDhEQUFDLFNBQUQ7QUFFQyxhQUFLLEVBQUVILFdBQVcsQ0FBQ0csS0FBRCxDQUZuQjtBQUdDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxZQUFZLENBQUNDLEtBQUQsQ0FBbEI7QUFBQSxTQUhWO0FBQUEsK0JBS0MsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUVNLEVBQUUsQ0FBQ0MsV0FBSCxFQUFaO0FBQThCLGtCQUFRLE1BQXRDO0FBQUEsaUNBQ0M7QUFBQSxzQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxELHlCQUNlTixLQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFlQTs7R0F6QlFMOztNQUFBQTtBQTJCVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBmbGV4Q2VudGVyLCBjb2xvciB9IGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcclxuXHJcbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuaGVhZGVyYFxyXG5cdCR7ZmxleENlbnRlcn1cclxuXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA2dmg7XHJcblx0dG9wOiAwO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElIZWFkZXJCdG5UeXBlIHtcclxuXHRjb2xvcj86IGFueTtcclxufVxyXG5cclxuY29uc3QgSGVhZGVyQnRuID0gc3R5bGVkLmJ1dHRvbjxJSGVhZGVyQnRuVHlwZT5gXHJcblx0JHtmbGV4Q2VudGVyfVxyXG5cclxuXHR3aWR0aDogNXJlbTtcclxuXHRoZWlnaHQ6IDJyZW07XHJcblx0bWFyZ2luOiAwLjdyZW07XHJcblx0Ym9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgJHtjb2xvci5wb2ludH07XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yICYmIFwiMC45cmVtXCJ9O1xyXG5cdGZvbnQtd2VpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbG9yID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiKX07XHJcblx0Y29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuY29sb3IgPyBjb2xvci53aGl0ZSA6IGNvbG9yLmdyYXkpfTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuXHRjb25zdCBsaXN0ID0gW1wiSG9tZVwiLCBcIkdvbGRcIiwgXCJTZXR0aW5nXCJdO1xyXG5cdGNvbnN0IFtpc0JveFNlbGVjdCwgc2V0Qm94U2VsZWN0XSA9IHVzZVN0YXRlKFt0cnVlLCBmYWxzZSwgZmFsc2VdKTtcclxuXHJcblx0Y29uc3QgZm9jdXNIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnN0IG5ld0FyciA9IEFycmF5KGxpc3QubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuXHRcdG5ld0FycltpbmRleF0gPSB0cnVlO1xyXG5cdFx0c2V0Qm94U2VsZWN0KG5ld0Fycik7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWRlclNlY3Rpb24+XHJcblx0XHRcdHtsaXN0Lm1hcCgoZWwsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PEhlYWRlckJ0blxyXG5cdFx0XHRcdFx0a2V5PXtgaGVhZGVyJHtpbmRleH1gfVxyXG5cdFx0XHRcdFx0Y29sb3I9e2lzQm94U2VsZWN0W2luZGV4XX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGZvY3VzSGFuZGxlcihpbmRleCl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj17ZWwudG9Mb3dlckNhc2UoKX0gcGFzc0hyZWY+XHJcblx0XHRcdFx0XHRcdDxhPntlbH08L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9IZWFkZXJCdG4+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9IZWFkZXJTZWN0aW9uPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwic3R5bGVkIiwiZmxleENlbnRlciIsImNvbG9yIiwiSGVhZGVyU2VjdGlvbiIsImhlYWRlciIsIkhlYWRlckJ0biIsImJ1dHRvbiIsInBvaW50IiwicHJvcHMiLCJ3aGl0ZSIsImdyYXkiLCJIZWFkZXIiLCJsaXN0IiwiaXNCb3hTZWxlY3QiLCJzZXRCb3hTZWxlY3QiLCJmb2N1c0hhbmRsZXIiLCJpbmRleCIsIm5ld0FyciIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsImVsIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});