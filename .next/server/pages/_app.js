"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/theme.tsx
var theme = __webpack_require__(787);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Header.tsx





const HeaderSection = external_styled_components_default().header.withConfig({
  displayName: "Header__HeaderSection",
  componentId: "sc-1pm1jej-0"
})(["", " width:100%;height:6vh;top:0;position:fixed;box-sizing:border-box;"], theme/* flexCenter */._7);
const HeaderBtn = external_styled_components_default().button.withConfig({
  displayName: "Header__HeaderBtn",
  componentId: "sc-1pm1jej-1"
})(["", " width:5rem;height:2rem;margin:0.7rem;border-right:0.1rem solid ", ";cursor:pointer;font-size:", ";font-weight:", ";color:", ";"], theme/* flexCenter */._7, theme/* color.point */.$_.point, props => props.color && "0.9rem", props => props.color ? "bold" : "normal", props => props.color ? theme/* color.white */.$_.white : theme/* color.gray */.$_.gray);

function Header() {
  const list = ["Home", "Gold", "Setting"];
  const {
    0: isBoxSelect,
    1: setBoxSelect
  } = (0,external_react_.useState)([true, false, false]);
  const focusHandler = (0,external_react_.useCallback)(index => {
    const newArr = Array(list.length).fill(false);
    newArr[index] = true;
    setBoxSelect(newArr);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(HeaderSection, {
    children: list.map((el, index) => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      href: el.toLowerCase(),
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(HeaderBtn, {
        color: isBoxSelect[index],
        onClick: () => focusHandler(index),
        children: el
      }, `header${index}`)
    }))
  });
}

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const BodySection = external_styled_components_default().body.withConfig({
  displayName: "_app__BodySection",
  componentId: "sc-2leivx-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;width:100vw;height:100vh;"]);

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BodySection, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [639,664,787], () => (__webpack_exec__(641)));
module.exports = __webpack_exports__;

})();