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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLogin\": function() { return /* binding */ getLogin; },\n/* harmony export */   \"user\": function() { return /* binding */ user; }\n/* harmony export */ });\n/* harmony import */ var C_Users_kusds_Desktop_Coding_lostgold_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_kusds_Desktop_Coding_lostgold_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true; // actions type\n\nvar GET_USERS = \"GET_USERS\"; // action\n\nvar getLogin = function getLogin(data) {\n  return {\n    type: GET_USERS,\n    payload: data\n  };\n}; // initialState\n\nvar initialState = {\n  userInfo: {},\n  isLogin: false,\n  loginModal: false,\n  alertModal: false,\n  alertText: \"\",\n  confirmModal: false,\n  confirmText: \"\",\n  confirmText_2: \"\",\n  id: 0,\n  userCart: [],\n  userOrder: [],\n  userlocker: []\n}; // reducer\n\nvar user = function user() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_USERS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        userInfo: action.payload,\n        isLogin: true\n      });\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9tb2R1bGVzL3VzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLHVFQUFBLEdBQWlDLElBQWpDLEVBRUE7O0FBQ0EsSUFBTUcsU0FBUyxHQUFHLFdBQWxCLEVBRUE7O0FBQ08sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLFNBQU87QUFDTkMsSUFBQUEsSUFBSSxFQUFFSCxTQURBO0FBRU5JLElBQUFBLE9BQU8sRUFBRUY7QUFGSCxHQUFQO0FBSUEsQ0FMTSxFQU9QOztBQUNBLElBQU1HLFlBQVksR0FBRztBQUNwQkMsRUFBQUEsUUFBUSxFQUFFLEVBRFU7QUFFcEJDLEVBQUFBLE9BQU8sRUFBRSxLQUZXO0FBR3BCQyxFQUFBQSxVQUFVLEVBQUUsS0FIUTtBQUlwQkMsRUFBQUEsVUFBVSxFQUFFLEtBSlE7QUFLcEJDLEVBQUFBLFNBQVMsRUFBRSxFQUxTO0FBTXBCQyxFQUFBQSxZQUFZLEVBQUUsS0FOTTtBQU9wQkMsRUFBQUEsV0FBVyxFQUFFLEVBUE87QUFRcEJDLEVBQUFBLGFBQWEsRUFBRSxFQVJLO0FBU3BCQyxFQUFBQSxFQUFFLEVBQUUsQ0FUZ0I7QUFVcEJDLEVBQUFBLFFBQVEsRUFBRSxFQVZVO0FBV3BCQyxFQUFBQSxTQUFTLEVBQUUsRUFYUztBQVlwQkMsRUFBQUEsVUFBVSxFQUFFO0FBWlEsQ0FBckIsRUFlQTs7QUFDTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUF1QztBQUFBLE1BQXRDQyxLQUFzQyx1RUFBOUJkLFlBQThCO0FBQUEsTUFBaEJlLE1BQWdCOztBQUMxRCxVQUFRQSxNQUFNLENBQUNqQixJQUFmO0FBQ0MsU0FBS0gsU0FBTDtBQUNDLDZDQUFZbUIsS0FBWjtBQUFtQmIsUUFBQUEsUUFBUSxFQUFFYyxNQUFNLENBQUNoQixPQUFwQztBQUE2Q0csUUFBQUEsT0FBTyxFQUFFO0FBQXREOztBQUVEO0FBQ0MsYUFBT1ksS0FBUDtBQUxGO0FBT0EsQ0FSTTtBQVVQLCtEQUFlRCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L21vZHVsZXMvdXNlci50c3g/OTg2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG4vLyBhY3Rpb25zIHR5cGVcclxuY29uc3QgR0VUX1VTRVJTID0gXCJHRVRfVVNFUlNcIjtcclxuXHJcbi8vIGFjdGlvblxyXG5leHBvcnQgY29uc3QgZ2V0TG9naW4gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBHRVRfVVNFUlMsXHJcblx0XHRwYXlsb2FkOiBkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG4vLyBpbml0aWFsU3RhdGVcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHVzZXJJbmZvOiB7fSxcclxuXHRpc0xvZ2luOiBmYWxzZSxcclxuXHRsb2dpbk1vZGFsOiBmYWxzZSxcclxuXHRhbGVydE1vZGFsOiBmYWxzZSxcclxuXHRhbGVydFRleHQ6IFwiXCIsXHJcblx0Y29uZmlybU1vZGFsOiBmYWxzZSxcclxuXHRjb25maXJtVGV4dDogXCJcIixcclxuXHRjb25maXJtVGV4dF8yOiBcIlwiLFxyXG5cdGlkOiAwLFxyXG5cdHVzZXJDYXJ0OiBbXSxcclxuXHR1c2VyT3JkZXI6IFtdLFxyXG5cdHVzZXJsb2NrZXI6IFtdLFxyXG59O1xyXG5cclxuLy8gcmVkdWNlclxyXG5leHBvcnQgY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdFVF9VU0VSUzpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJJbmZvOiBhY3Rpb24ucGF5bG9hZCwgaXNMb2dpbjogdHJ1ZSB9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsIkdFVF9VU0VSUyIsImdldExvZ2luIiwiZGF0YSIsInR5cGUiLCJwYXlsb2FkIiwiaW5pdGlhbFN0YXRlIiwidXNlckluZm8iLCJpc0xvZ2luIiwibG9naW5Nb2RhbCIsImFsZXJ0TW9kYWwiLCJhbGVydFRleHQiLCJjb25maXJtTW9kYWwiLCJjb25maXJtVGV4dCIsImNvbmZpcm1UZXh0XzIiLCJpZCIsInVzZXJDYXJ0IiwidXNlck9yZGVyIiwidXNlcmxvY2tlciIsInVzZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/modules/user.tsx\n");

/***/ })

});