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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".slider {\\n  display: flex;\\n}\\n.slider .slider-item {\\n  width: 100%;\\n  height: 85vh;\\n  display: none;\\n}\\n.slider .slider-item.active {\\n  display: block;\\n  position: absolute;\\n  left: -100%;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-animation: slide 0.5s forwards;\\n  -webkit-animation-delay: 2s;\\n  animation: slide 0.5s forwards;\\n  -webkit-animation-delay: 0s;\\n          animation-delay: 0s;\\n}\\n.slider .slider-item img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.slider .anim-slide {\\n  position: absolute;\\n  left: -100px;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-animation: slide 0.5s forwards;\\n  -webkit-animation-delay: 2s;\\n  animation: slide 0.5s forwards;\\n  animation-delay: 2s;\\n}\\n@-webkit-keyframes slide {\\n  100% {\\n    left: 0;\\n  }\\n}\\n@keyframes slide {\\n  100% {\\n    left: 0;\\n  }\\n}\\n\\n.keypad-container {\\n  display: flex;\\n  justify-content: center;\\n}\\n.keypad-container .keypad {\\n  display: grid;\\n  grid-template-columns: 200px 200px 200px 200px;\\n  gap: 30px;\\n  margin-bottom: 20px;\\n}\\n.keypad-container .keypad button.key {\\n  width: 100%;\\n  box-sizing: border-box;\\n  line-height: 80px;\\n  font-size: 22px;\\n  text-align: center;\\n  color: #555;\\n  cursor: pointer;\\n  margin: 0 8px;\\n  height: 80px;\\n  border-color: #f2f2f2;\\n  border-style: solid;\\n  text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;\\n  border-width: 1px;\\n  border-radius: 10px;\\n  background: -webkit-linear-gradient(top, #f9f9f9 0%, #D2D2D2 80%, #c0c0c0 100%);\\n  font-family: sans-serif;\\n  display: inline-block;\\n  transition: box-shadow 0.3s ease, -webkit-transform 0.15s ease;\\n  transition: box-shadow 0.3s ease, transform 0.15s ease;\\n  transition: box-shadow 0.3s ease, transform 0.15s ease, -webkit-transform 0.15s ease;\\n  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 6px 0 #C0C0C0, 0 8px 17px rgba(68, 68, 68, 0.4), 2px 1px 4px rgba(68, 68, 68, 0.25), -2px 1px 4px rgba(68, 68, 68, 0.25), 0 9px 16px rgba(68, 68, 68, 0.1);\\n}\\n.keypad-container .keypad button.key:hover, .keypad-container .keypad button.key:focus {\\n  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 4px 0 #C0C0C0, 0 2px 35px rgba(68, 68, 68, 0.3), 2px 2px 4px rgba(68, 68, 68, 0.25), -2px 2px 4px rgba(68, 68, 68, 0.25), 0 7px 4px rgba(68, 68, 68, 0.1);\\n  -webkit-transform: translateY(2px);\\n          transform: translateY(2px);\\n}\\n.keypad-container .keypad button.key:active {\\n  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 0 0 #C0C0C0, 0 0px 30px rgba(68, 68, 68, 0.15), 2px 2px 4px rgba(68, 68, 68, 0.25), -2px 2px 4px rgba(68, 68, 68, 0.25), 0 0px 4px rgba(68, 68, 68, 0.25);\\n  -webkit-transform: translateY(4px);\\n          transform: translateY(4px);\\n}\\n.keypad-container .keypad button.key:disabled {\\n  background: rgba(255, 21, 21, 0.9254901961);\\n  color: white;\\n  box-shadow: 0 0 1px #b35757, 0 1px 0 #ff6e6e, 0 6px 0 #C0C0C0, 0 8px 17px rgba(68, 68, 68, 0.4), 2px 1px 4px rgba(68, 68, 68, 0.25), -2px 1px 4px rgba(68, 68, 68, 0.25), 0 9px 16px rgba(68, 68, 68, 0.1);\\n  border-color: #ff0000;\\n  opacity: 0.5;\\n  cursor: not-allowed;\\n}\\n\\n.screen {\\n  width: 100%;\\n  height: 130px;\\n  background-color: rgba(136, 136, 136, 0.4941176471);\\n  margin-bottom: 10px;\\n  border-radius: 10px;\\n  padding: 2px;\\n  font-size: 5rem;\\n  text-align: center;\\n  overflow: hidden;\\n}\\n\\n.loader {\\n  color: #fff;\\n  font-size: 10px;\\n  width: 1em;\\n  height: 1em;\\n  border-radius: 50%;\\n  position: relative;\\n  text-indent: -9999em;\\n  -webkit-animation: mulShdSpin 1.3s infinite linear;\\n          animation: mulShdSpin 1.3s infinite linear;\\n  -webkit-transform: translateZ(0);\\n          transform: translateZ(0);\\n}\\n\\n@-webkit-keyframes mulShdSpin {\\n  0%, 100% {\\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\\n  }\\n  12.5% {\\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n  }\\n  25% {\\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n  }\\n  37.5% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n  }\\n  50% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n  }\\n  62.5% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\\n  }\\n  75% {\\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\\n  }\\n  87.5% {\\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\\n  }\\n}\\n\\n@keyframes mulShdSpin {\\n  0%, 100% {\\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\\n  }\\n  12.5% {\\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n  }\\n  25% {\\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n  }\\n  37.5% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n  }\\n  50% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n  }\\n  62.5% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\\n  }\\n  75% {\\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\\n  }\\n  87.5% {\\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8f9d2545f4b2108755d4"; }
/******/ }();
/******/ 
/******/ }
);