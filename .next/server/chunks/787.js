"use strict";
exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ color),
/* harmony export */   "_7": () => (/* binding */ flexCenter),
/* harmony export */   "$9": () => (/* binding */ flexCenterDir),
/* harmony export */   "pX": () => (/* binding */ scrollBar)
/* harmony export */ });
/* unused harmony exports size, pageSetting, overflowY, fadeIn */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // 기기 사이즈

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
}; // 미디어 스타일

const theme = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}; // color

const color = {
  white: "#ffffff",
  black: "#2c2c2c",
  gray: "#c9c9c9",
  point: "#ffd700"
}; // flex 디자인

const flexCenter = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;justify-content:center;align-items:center;"]);
const flexCenterDir = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " flex-direction:column;"], flexCenter);
const pageSetting = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;align-items:center;flex-direction:column;width:100vw;height:100vh;box-sizing:border-box;padding:3rem;overflow-y:auto;::-webkit-scrollbar{display:none;}"]);
const overflowY = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["overflow-y:auto;::-webkit-scrollbar{display:none;}"]);
const fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["animation:fade-in 3s;@keyframes fade-in{from{opacity:0;}to{opacity:1;}}"]); // 스크롤 디자인

const scrollBar = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0px 13px 0px 13px;overflow-y:scroll;height:200px;box-sizing:border-box;color:white;background-color:rgba(0,0,0,0.8);margin-right:50px;&::-webkit-scrollbar{width:6px;}&::-webkit-scrollbar-thumb{height:17%;background-color:rgba(255,255,255,1);border-radius:10px;}&::-webkit-scrollbar-track{background-color:rgba(0,0,0,0);}"]);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (theme)));

/***/ })

};
;