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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\kusds\\\\Desktop\\\\Coding\\\\lostgold\\\\components\\\\Header.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"Header__HeaderSection\",\n  componentId: \"sc-1pm1jej-0\"\n})([\"\", \" width:100%;height:6vh;top:0;position:fixed;box-sizing:border-box;\"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__.flexCenter);\n_c = HeaderSection;\nvar HeaderBtn = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"Header__HeaderBtn\",\n  componentId: \"sc-1pm1jej-1\"\n})([\"\", \" width:5rem;height:2rem;margin:0.7rem;border-right:0.1rem solid \", \";cursor:pointer;font-size:\", \";font-weight:\", \";color:\", \";\"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__.flexCenter, _styles_theme__WEBPACK_IMPORTED_MODULE_2__.color.point, function (props) {\n  return props.color && \"0.9rem\";\n}, function (props) {\n  return props.color ? \"bold\" : \"normal\";\n}, function (props) {\n  return props.color ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__.color.white : _styles_theme__WEBPACK_IMPORTED_MODULE_2__.color.gray;\n});\n_c2 = HeaderBtn;\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var list = [\"Home\", \"Gold\", \"Setting\"];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([true, false, false]),\n      isBoxSelect = _useState[0],\n      setBoxSelect = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    var focusHandler = function focusHandler(index) {\n      var newArr = Array(list.length).fill(false);\n      newArr[index] = true;\n      setBoxSelect(newArr);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(HeaderSection, {\n    children: list.map(function (el, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(HeaderBtn, {\n        color: isBoxSelect[index],\n        onClick: function onClick() {\n          return focusHandler(index);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: el.toLowerCase(),\n          passHref: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: el\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 6\n        }, _this)\n      }, \"header\".concat(index), false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Header, \"fJJ035t1zrgRb6/an2bpNvUyExI=\");\n\n_c3 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeaderSection\");\n$RefreshReg$(_c2, \"HeaderBtn\");\n$RefreshReg$(_c3, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLGFBQWEsR0FBR0gsMkVBQUg7QUFBQTtBQUFBO0FBQUEsK0VBQ2hCQyxxREFEZ0IsQ0FBbkI7S0FBTUU7QUFjTixJQUFNRSxTQUFTLEdBQUdMLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDRJQUNaQyxxREFEWSxFQU1lQyxzREFOZixFQVFELFVBQUNNLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNOLEtBQU4sSUFBZSxRQUExQjtBQUFBLENBUkMsRUFTQyxVQUFDTSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDTixLQUFOLEdBQWMsTUFBZCxHQUF1QixRQUFuQztBQUFBLENBVEQsRUFVTCxVQUFDTSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDTixLQUFOLEdBQWNBLHNEQUFkLEdBQTRCQSxxREFBeEM7QUFBQSxDQVZLLENBQWY7TUFBTUc7O0FBYU4sU0FBU00sTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNqQixNQUFNQyxJQUFJLEdBQUcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixTQUFqQixDQUFiOztBQUNBLGtCQUFvQ2IsK0NBQVEsQ0FBQyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZCxDQUFELENBQTVDO0FBQUEsTUFBT2MsV0FBUDtBQUFBLE1BQW9CQyxZQUFwQjs7QUFFQWhCLEVBQUFBLGtEQUFXLENBQUMsWUFBTTtBQUNqQixRQUFNaUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFtQjtBQUN2QyxVQUFNQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ04sSUFBSSxDQUFDTyxNQUFOLENBQUwsQ0FBbUJDLElBQW5CLENBQXdCLEtBQXhCLENBQWY7QUFDQUgsTUFBQUEsTUFBTSxDQUFDRCxLQUFELENBQU4sR0FBZ0IsSUFBaEI7QUFDQUYsTUFBQUEsWUFBWSxDQUFDRyxNQUFELENBQVo7QUFDQSxLQUpEO0FBS0EsR0FOVSxFQU1SLEVBTlEsQ0FBWDtBQVFBLHNCQUNDLDhEQUFDLGFBQUQ7QUFBQSxjQUNFTCxJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDQyxFQUFELEVBQUtOLEtBQUw7QUFBQSwwQkFDVCw4REFBQyxTQUFEO0FBRUMsYUFBSyxFQUFFSCxXQUFXLENBQUNHLEtBQUQsQ0FGbkI7QUFHQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUQsWUFBWSxDQUFDQyxLQUFELENBQWxCO0FBQUEsU0FIVjtBQUFBLCtCQUtDLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFFTSxFQUFFLENBQUNDLFdBQUgsRUFBWjtBQUE4QixrQkFBUSxNQUF0QztBQUFBLGlDQUNDO0FBQUEsc0JBQUlEO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRCx5QkFDZU4sS0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFUO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0dBM0JRTDs7TUFBQUE7QUE2QlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZmxleENlbnRlciwgY29sb3IgfSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XHJcblxyXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLmhlYWRlcmBcclxuXHQke2ZsZXhDZW50ZXJ9XHJcblxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNnZoO1xyXG5cdHRvcDogMDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJSGVhZGVyQnRuVHlwZSB7XHJcblx0Y29sb3I/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlckJ0biA9IHN0eWxlZC5idXR0b248SUhlYWRlckJ0blR5cGU+YFxyXG5cdCR7ZmxleENlbnRlcn1cclxuXHJcblx0d2lkdGg6IDVyZW07XHJcblx0aGVpZ2h0OiAycmVtO1xyXG5cdG1hcmdpbjogMC43cmVtO1xyXG5cdGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkICR7Y29sb3IucG9pbnR9O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvciAmJiBcIjAuOXJlbVwifTtcclxuXHRmb250LXdlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5jb2xvciA/IFwiYm9sZFwiIDogXCJub3JtYWxcIil9O1xyXG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbG9yID8gY29sb3Iud2hpdGUgOiBjb2xvci5ncmF5KX07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcblx0Y29uc3QgbGlzdCA9IFtcIkhvbWVcIiwgXCJHb2xkXCIsIFwiU2V0dGluZ1wiXTtcclxuXHRjb25zdCBbaXNCb3hTZWxlY3QsIHNldEJveFNlbGVjdF0gPSB1c2VTdGF0ZShbdHJ1ZSwgZmFsc2UsIGZhbHNlXSk7XHJcblxyXG5cdHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGNvbnN0IGZvY3VzSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdGNvbnN0IG5ld0FyciA9IEFycmF5KGxpc3QubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuXHRcdFx0bmV3QXJyW2luZGV4XSA9IHRydWU7XHJcblx0XHRcdHNldEJveFNlbGVjdChuZXdBcnIpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZGVyU2VjdGlvbj5cclxuXHRcdFx0e2xpc3QubWFwKChlbCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8SGVhZGVyQnRuXHJcblx0XHRcdFx0XHRrZXk9e2BoZWFkZXIke2luZGV4fWB9XHJcblx0XHRcdFx0XHRjb2xvcj17aXNCb3hTZWxlY3RbaW5kZXhdfVxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZm9jdXNIYW5kbGVyKGluZGV4KX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPXtlbC50b0xvd2VyQ2FzZSgpfSBwYXNzSHJlZj5cclxuXHRcdFx0XHRcdFx0PGE+e2VsfTwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L0hlYWRlckJ0bj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L0hlYWRlclNlY3Rpb24+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJzdHlsZWQiLCJmbGV4Q2VudGVyIiwiY29sb3IiLCJIZWFkZXJTZWN0aW9uIiwiaGVhZGVyIiwiSGVhZGVyQnRuIiwiYnV0dG9uIiwicG9pbnQiLCJwcm9wcyIsIndoaXRlIiwiZ3JheSIsIkhlYWRlciIsImxpc3QiLCJpc0JveFNlbGVjdCIsInNldEJveFNlbGVjdCIsImZvY3VzSGFuZGxlciIsImluZGV4IiwibmV3QXJyIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwibWFwIiwiZWwiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});