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

/***/ "./redux/modules/user.tsx":
/*!********************************!*\
  !*** ./redux/modules/user.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLogin\": function() { return /* binding */ getLogin; },\n/* harmony export */   \"user\": function() { return /* binding */ user; }\n/* harmony export */ });\n/* harmony import */ var C_Users_kusds_Desktop_Coding_lostgold_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_kusds_Desktop_Coding_lostgold_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true; // actions type\n\nvar GET_USERS = \"GET_USERS\"; // action\n\nvar getLogin = function getLogin(data) {\n  return {\n    type: GET_USERS,\n    payload: data\n  };\n}; // initialState\n\nvar initialState = {\n  userData: [{\n    name: \"닉네임\",\n    job: \"창술사\",\n    list: []\n  }, {\n    name: \"닉네임\",\n    job: \"배틀마스터\",\n    list: []\n  }]\n}; // reducer\n\nvar user = function user() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_USERS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        userInfo: action.payload,\n        isLogin: true\n      });\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9tb2R1bGVzL3VzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLHVFQUFBLEdBQWlDLElBQWpDLEVBRUE7O0FBQ0EsSUFBTUcsU0FBUyxHQUFHLFdBQWxCLEVBRUE7O0FBQ08sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFlO0FBQ3RDLFNBQU87QUFDTkMsSUFBQUEsSUFBSSxFQUFFSCxTQURBO0FBRU5JLElBQUFBLE9BQU8sRUFBRUY7QUFGSCxHQUFQO0FBSUEsQ0FMTSxFQU9QOztBQUNBLElBQU1HLFlBQVksR0FBRztBQUNwQkMsRUFBQUEsUUFBUSxFQUFFLENBQ1Q7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsSUFBQUEsR0FBRyxFQUFFLEtBQXBCO0FBQTJCQyxJQUFBQSxJQUFJLEVBQUU7QUFBakMsR0FEUyxFQUVUO0FBQUVGLElBQUFBLElBQUksRUFBRSxLQUFSO0FBQWVDLElBQUFBLEdBQUcsRUFBRSxPQUFwQjtBQUE2QkMsSUFBQUEsSUFBSSxFQUFFO0FBQW5DLEdBRlM7QUFEVSxDQUFyQixFQU9BOztBQUNPLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQXVDO0FBQUEsTUFBdENDLEtBQXNDLHVFQUE5Qk4sWUFBOEI7QUFBQSxNQUFoQk8sTUFBZ0I7O0FBQzFELFVBQVFBLE1BQU0sQ0FBQ1QsSUFBZjtBQUNDLFNBQUtILFNBQUw7QUFDQyw2Q0FBWVcsS0FBWjtBQUFtQkUsUUFBQUEsUUFBUSxFQUFFRCxNQUFNLENBQUNSLE9BQXBDO0FBQTZDVSxRQUFBQSxPQUFPLEVBQUU7QUFBdEQ7O0FBRUQ7QUFDQyxhQUFPSCxLQUFQO0FBTEY7QUFPQSxDQVJNO0FBVVAsK0RBQWVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbW9kdWxlcy91c2VyLnRzeD85ODZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbi8vIGFjdGlvbnMgdHlwZVxyXG5jb25zdCBHRVRfVVNFUlMgPSBcIkdFVF9VU0VSU1wiO1xyXG5cclxuLy8gYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBnZXRMb2dpbiA9IChkYXRhOiBhbnkpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogR0VUX1VTRVJTLFxyXG5cdFx0cGF5bG9hZDogZGF0YSxcclxuXHR9O1xyXG59O1xyXG5cclxuLy8gaW5pdGlhbFN0YXRlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR1c2VyRGF0YTogW1xyXG5cdFx0eyBuYW1lOiBcIuuLieuEpOyehFwiLCBqb2I6IFwi7LC97Iig7IKsXCIsIGxpc3Q6IFtdIH0sXHJcblx0XHR7IG5hbWU6IFwi64uJ64Sk7J6EXCIsIGpvYjogXCLrsLDti4Drp4jsiqTthLBcIiwgbGlzdDogW10gfSxcclxuXHRdLFxyXG59O1xyXG5cclxuLy8gcmVkdWNlclxyXG5leHBvcnQgY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdFVF9VU0VSUzpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJJbmZvOiBhY3Rpb24ucGF5bG9hZCwgaXNMb2dpbjogdHJ1ZSB9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsIkdFVF9VU0VSUyIsImdldExvZ2luIiwiZGF0YSIsInR5cGUiLCJwYXlsb2FkIiwiaW5pdGlhbFN0YXRlIiwidXNlckRhdGEiLCJuYW1lIiwiam9iIiwibGlzdCIsInVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVzZXJJbmZvIiwiaXNMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/modules/user.tsx\n");

/***/ })

});