"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemy_webpack_project"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".slider {\\n  display: flex;\\n}\\n.slider .slider-item {\\n  width: 100%;\\n  height: 85vh;\\n  display: none;\\n}\\n.slider .slider-item.active {\\n  display: block;\\n  position: absolute;\\n  left: -100%;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-animation: slide 0.5s forwards;\\n  -webkit-animation-delay: 2s;\\n  animation: slide 0.5s forwards;\\n  -webkit-animation-delay: 0s;\\n          animation-delay: 0s;\\n}\\n.slider .slider-item img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.slider .anim-slide {\\n  position: absolute;\\n  left: -100px;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-animation: slide 0.5s forwards;\\n  -webkit-animation-delay: 2s;\\n  animation: slide 0.5s forwards;\\n  animation-delay: 2s;\\n}\\n@-webkit-keyframes slide {\\n  100% {\\n    left: 0;\\n  }\\n}\\n@keyframes slide {\\n  100% {\\n    left: 0;\\n  }\\n}\\n\\n.keypad-container {\\n  display: flex;\\n  justify-content: center;\\n}\\n.keypad-container .keypad {\\n  display: grid;\\n  grid-template-columns: 200px 200px 200px 200px;\\n  gap: 30px;\\n  margin-bottom: 20px;\\n}\\n.keypad-container .keypad button.key {\\n  width: 100%;\\n  box-sizing: border-box;\\n  line-height: 80px;\\n  font-size: 22px;\\n  text-align: center;\\n  color: #555;\\n  cursor: pointer;\\n  margin: 0 8px;\\n  height: 80px;\\n  border-color: #f2f2f2;\\n  border-style: solid;\\n  text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;\\n  border-width: 1px;\\n  border-radius: 10px;\\n  background: -webkit-linear-gradient(top, #f9f9f9 0%, #D2D2D2 80%, #c0c0c0 100%);\\n  font-family: sans-serif;\\n  display: inline-block;\\n  transition: box-shadow 0.3s ease, -webkit-transform 0.15s ease;\\n  transition: box-shadow 0.3s ease, transform 0.15s ease;\\n  transition: box-shadow 0.3s ease, transform 0.15s ease, -webkit-transform 0.15s ease;\\n  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 6px 0 #C0C0C0, 0 8px 17px rgba(68, 68, 68, 0.4), 2px 1px 4px rgba(68, 68, 68, 0.25), -2px 1px 4px rgba(68, 68, 68, 0.25), 0 9px 16px rgba(68, 68, 68, 0.1);\\n}\\n.keypad-container .keypad button.key:hover, .keypad-container .keypad button.key:focus {\\n  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 4px 0 #C0C0C0, 0 2px 35px rgba(68, 68, 68, 0.3), 2px 2px 4px rgba(68, 68, 68, 0.25), -2px 2px 4px rgba(68, 68, 68, 0.25), 0 7px 4px rgba(68, 68, 68, 0.1);\\n  -webkit-transform: translateY(2px);\\n          transform: translateY(2px);\\n}\\n.keypad-container .keypad button.key:active {\\n  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 0 0 #C0C0C0, 0 0px 30px rgba(68, 68, 68, 0.15), 2px 2px 4px rgba(68, 68, 68, 0.25), -2px 2px 4px rgba(68, 68, 68, 0.25), 0 0px 4px rgba(68, 68, 68, 0.25);\\n  -webkit-transform: translateY(4px);\\n          transform: translateY(4px);\\n}\\n.keypad-container .keypad button.key:disabled {\\n  background: rgba(255, 21, 21, 0.9254901961);\\n  color: white;\\n  box-shadow: 0 0 1px #b35757, 0 1px 0 #ff6e6e, 0 6px 0 #C0C0C0, 0 8px 17px rgba(68, 68, 68, 0.4), 2px 1px 4px rgba(68, 68, 68, 0.25), -2px 1px 4px rgba(68, 68, 68, 0.25), 0 9px 16px rgba(68, 68, 68, 0.1);\\n  border-color: #ff0000;\\n  opacity: 0.5;\\n  cursor: not-allowed;\\n}\\n\\n.screen {\\n  width: 100%;\\n  height: 130px;\\n  background-color: rgba(136, 136, 136, 0.4941176471);\\n  margin-bottom: 10px;\\n  border-radius: 10px;\\n  padding: 2px;\\n  font-size: 5rem;\\n  text-align: center;\\n  overflow: hidden;\\n}\\n\\n.loading {\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  background-color: rgba(137, 137, 137, 0.3764705882);\\n  height: 100%;\\n  z-index: 1000;\\n}\\n.loading .loader {\\n  font-size: 48px;\\n  display: inline-block;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  color: #FF3D00;\\n  letter-spacing: 2px;\\n  position: relative;\\n  -webkit-transform: translate(50%, 50%);\\n          transform: translate(50%, 50%);\\n}\\n.loading .loader::after {\\n  content: \\\"GATOM...\\\";\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  color: #FFF;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  box-sizing: border-box;\\n  -webkit-animation: animloader 10s ease-in infinite;\\n          animation: animloader 10s ease-in infinite;\\n}\\n\\n@-webkit-keyframes animloader {\\n  0% {\\n    width: 0%;\\n  }\\n  100% {\\n    width: 100%;\\n  }\\n}\\n\\n@keyframes animloader {\\n  0% {\\n    width: 0%;\\n  }\\n  100% {\\n    width: 100%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b8f41a053f2ab032bee1"; }
/******/ }();
/******/ 
/******/ }
);