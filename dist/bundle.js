/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers \r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n/* reset complete */\r\n\r\nnav{\r\n    background-color: #F8F4E1;\r\n    padding: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    color: #74512D;\r\n}\r\n\r\n.logo, .buttons{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 15px;\r\n    align-items: center;\r\n}\r\n\r\n.cowboy{\r\n    width: 50px;\r\n    height: auto;\r\n}\r\n\r\n.title, .write-up-title, .menu-item-title{\r\n    font-size: large;\r\n    font-family: \"Rye\", serif;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n\tcolor: #74512D;\r\n}\r\n\r\n.btn{\r\n\tbox-shadow:inset 0px 1px 0px 0px #a6827e;\r\n\tbackground:linear-gradient(to bottom, #7d5d3b 5%, #74512D 100%);\r\n\tbackground-color:#74512D;\r\n\tborder-radius:16px;\r\n\tborder:3px solid #74512D;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#F8F4E1;\r\n\tfont-family: \"Rye\", serif;\r\n\tfont-size:16px;\r\n\tpadding:12px 29px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #4d3534;\r\n}\r\n.btn:hover {\r\n\tbackground:linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);\r\n\tbackground-color:#634b30;\r\n}\r\n.btn:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n.content{\r\n\tdisplay: grid;\r\n\tgap: 10px;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgrid-template-columns: 1fr 1fr;\r\n\tgrid-template-rows: 1fr;\r\n}\r\n\r\n.cowboy-picture{\r\n\tgrid-column-start: 1;\r\n  \tgrid-column-end: 2;\r\n\twidth: 90%;\r\n}\r\n\r\n.write-up{\r\n\tgrid-column-start: 2;\r\n\tgrid-column-end: 3;\r\n\tpadding-top: 25px;\r\n}\r\n\r\n.write-up-title{\r\n\tfont-size: xx-large;\r\n}\r\n\r\n.write-up-content, .menu-item-description, .menu-item-price, .footer-content{\r\n\tfont-family: \"Roboto\", serif;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  font-style: normal;\r\n  color: #74512D;\r\n  padding: 20px;\r\n}\r\n\r\n.menu-item{\r\n\twidth: 33%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 10px;\r\n}\r\n\r\n.menu-item-pic{\r\n\twidth: 150px;\r\n\tborder-radius: 100%;\r\n\tborder: 4px solid #74512D;\r\n}\r\n\r\n.cowboy-large{\r\n\twidth: 75px;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.about-writeup{\r\n\twidth: 33%;\r\n}\r\n\r\nfooter{\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tbackground-color: #4d3534;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.footer-content{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tcolor:#F8F4E1;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n}\r\na{\r\n\tcolor: #F8F4E1;\r\n}\r\n\r\n.cowboy-white{\r\n\tpadding: 15px;\r\n\twidth: 60%;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutpage.js":
/*!**************************!*\
  !*** ./src/aboutpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)\n/* harmony export */ });\n/* harmony import */ var _cowboy_hat_with_moustache_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cowboy-hat-with-moustache-svgrepo-com.png */ \"./src/cowboy-hat-with-moustache-svgrepo-com.png\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n\r\n\r\n\r\n\r\nfunction createAboutPage(){\r\n    let content = Array.from(document.getElementsByClassName(\"content\"))[0];\r\n    content.innerHTML = \"\";\r\n    content.style.display = \"flex\";\r\n    content.style.flexDirection = \"column\";\r\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.addImage)(\"content\", _cowboy_hat_with_moustache_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_0__, \"cowboy-large\");\r\n    let aboutWriteUp = document.createElement(\"div\");\r\n    aboutWriteUp.classList.add(\"write-up\");\r\n    aboutWriteUp.classList.add(\"about-writeup\");\r\n    aboutWriteUp.innerHTML = `\r\n    <h1 class=\"write-up-title\">The Legend of Rustler’s Roost</h1>\r\n    <p class=\"write-up-content\">Long ago, in a quiet corner of the frontier, there was a watering hole known as Rustler’s \r\n    Roost. Travelers, cowboys, and settlers alike gathered here after long days on the trail to share stories, laughter, \r\n    and hearty meals cooked over an open fire. The place was run by a legendary cowboy named Buck Hartley, a former cattle \r\n    rustler who turned his life around to create a space where folks could find good food and even better company.</p>\r\n        <p class=\"write-up-content\">Buck’s recipes were passed down through the years, with each generation adding their own \r\n        twist. Tales of his signature chili, smoked meats, and that unforgettable coffee brewed in a tin pot became the stuff \r\n        of Wild West lore. People came from miles around to experience the magic of Rustler’s Roost—part café, part \r\n        gathering spot, and entirely full of heart.</p>\r\n        <p class=\"write-up-content\">Fast forward to today, and Rustler’s Roost Café still carries on Buck’s legacy. \r\n        From the rustic décor to the down-home menu, everything here pays tribute to the spirit of the Old West. \r\n        Every plate of food, every cup of coffee, and every friendly smile is a reminder of the simple joys that brought \r\n        people together back in Buck’s day.</p>`;\r\n    content.appendChild(aboutWriteUp);\r\n}\n\n//# sourceURL=webpack://restaurant-page-project/./src/aboutpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addImage: () => (/* binding */ addImage),\n/* harmony export */   createHomepage: () => (/* binding */ createHomepage)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _man_drink_hot_tea_with_green_hill_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./man-drink-hot-tea-with-green-hill-background.jpg */ \"./src/man-drink-hot-tea-with-green-hill-background.jpg\");\n\r\n\r\n\r\n\r\nfunction addImage(elementToAddImageTo, imageSource, imageClass){\r\n    let myImage = new Image();\r\n    myImage.src = imageSource;\r\n    if (imageClass){\r\n        myImage.classList.add(imageClass)\r\n    }    \r\n    let results = Array.from(document.getElementsByClassName(elementToAddImageTo));\r\n    results[0].append(myImage);\r\n}\r\n\r\nfunction createHomepage(){\r\n    let content = Array.from(document.getElementsByClassName(\"content\"))[0];\r\n    content.innerHTML = \"\";\r\n    addImage(\"content\", _man_drink_hot_tea_with_green_hill_background_jpg__WEBPACK_IMPORTED_MODULE_1__, \"cowboy-picture\");\r\n    let writeUp = document.createElement(\"div\");\r\n    writeUp.classList.add(\"write-up\");\r\n    writeUp.innerHTML = `\r\n    <h1 class=\"write-up-title\">Giddy Up, Partner!</h1>\r\n    <p class=\"write-up-content\">Saddle up and step into a cozy corner of the Old West at The Cowboy Café. \r\n        Nestled in the heart of the town, our café serves up hearty meals and a warm, friendly atmosphere that \r\n        makes you feel like you've ridden right into the middle of a cowboy campfire. \r\n        Whether you're a cowboy, cowgirl, or city slicker, you'll feel right at home here!</p>\r\n        <p class=\"write-up-content\">Step into our rustic saloon-inspired interior, where barnwood walls, \r\n        vintage cowboy décor, and the sound of country music set the perfect tone. Whether you're here to enjoy a hearty meal, \r\n        relax with a cup of coffee, or celebrate a special occasion, The Cowboy Café offers an authentic cowboy vibe you \r\n        won't find anywhere else.</p>\r\n        <p class=\"write-up-content\">We can't wait to see you, partner. So grab your hat, hitch up your horse, and ride on \r\n        over to The Cowboy Café—where cowboy hospitality and good food meet!</p>`;\r\n    content.style.display = \"grid\";\r\n    content.appendChild(writeUp);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage.js */ \"./src/menupage.js\");\n/* harmony import */ var _aboutpage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutpage.js */ \"./src/aboutpage.js\");\n/* harmony import */ var _cowboy_hat_with_moustache_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cowboy-hat-with-moustache-svgrepo-com.png */ \"./src/cowboy-hat-with-moustache-svgrepo-com.png\");\n/* harmony import */ var _cowboy_hat_with_moustache_white_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cowboy-hat-with-moustache-white-svgrepo-com.png */ \"./src/cowboy-hat-with-moustache-white-svgrepo-com.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.addImage)(\"cowboy-logo\", _cowboy_hat_with_moustache_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_3__, \"cowboy\");\r\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.createHomepage)();\r\n\r\nlet menuButton = document.getElementById(\"menu\");\r\nlet homeButton = document.getElementById(\"home\");\r\nlet aboutButton = document.getElementById(\"about\");\r\n\r\nmenuButton.addEventListener(\"click\", _menupage_js__WEBPACK_IMPORTED_MODULE_1__.createMenuPage);\r\nhomeButton.addEventListener(\"click\", _homepage_js__WEBPACK_IMPORTED_MODULE_0__.createHomepage);\r\naboutButton.addEventListener(\"click\", _aboutpage_js__WEBPACK_IMPORTED_MODULE_2__.createAboutPage);\r\n\r\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.addImage)(\"footer-logo\", _cowboy_hat_with_moustache_white_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_4__, \"cowboy-white\")\n\n//# sourceURL=webpack://restaurant-page-project/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _pexels_roger_garcia_1513442_10051775_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pexels-roger-garcia-1513442-10051775.jpg */ \"./src/pexels-roger-garcia-1513442-10051775.jpg\");\n/* harmony import */ var _hot_chocolate_with_milk_glass_jars_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hot-chocolate-with-milk-glass-jars.jpg */ \"./src/hot-chocolate-with-milk-glass-jars.jpg\");\n\r\n\r\n\r\n \r\n\r\nfunction createMenuPage(){\r\n    let content = Array.from(document.getElementsByClassName(\"content\"))[0];\r\n    content.innerHTML = \"\"\r\n    content.style.display = \"flex\";\r\n    content.style.flexDirection = \"column\";\r\n    content.innerHTML = `\r\n    <div class=\"write-up-title\">MENU</div>\r\n    <div class=\"menu-item\">\r\n    <div class=\"menu-item-pic-container\"></div>\r\n    <div class=\"menu-item-title\">Cowboy Chili con Carne</div>\r\n    <div class=\"menu-item-price\">$8.00</div>\r\n    <div class=\"menu-item-description\">This is chili done the cowboy way! Our Chuckwagon Chili \r\n        is slow-cooked with tender chunks of beef, smoky sausage, hearty beans, and a blend of bold spices. \r\n        Served piping hot and topped with shredded cheddar, a slice of avocado, and fresh jalapeño slices, \r\n        it’s comfort food that’ll warm you to your boots. Pair it with a piece of sweet cornbread or tortilla chips for the \r\n        ultimate frontier feast.</div>\r\n    </div>\r\n        <div class=\"menu-item\">\r\n    <div class=\"drink-item-pic-container\"></div>\r\n    <div class=\"menu-item-title\">Campfire Coffee</div>\r\n    <div class=\"menu-item-price\">$4.00</div>\r\n    <div class=\"menu-item-description\">Start your day—or end your meal—with a steaming cup of Campfire Coffee. \r\n    This rich, bold brew is infused with a hint of smoky vanilla, giving it a unique taste that feels like \r\n    sipping by the fire under a starry sky. Served in a rustic mason jar for that authentic cowboy vibe.</div>\r\n    </div>`;\r\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.addImage)(\"menu-item-pic-container\", _pexels_roger_garcia_1513442_10051775_jpg__WEBPACK_IMPORTED_MODULE_1__, \"menu-item-pic\");\r\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.addImage)(\"drink-item-pic-container\", _hot_chocolate_with_milk_glass_jars_jpg__WEBPACK_IMPORTED_MODULE_2__, \"menu-item-pic\");\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/menupage.js?");

/***/ }),

/***/ "./src/cowboy-hat-with-moustache-svgrepo-com.png":
/*!*******************************************************!*\
  !*** ./src/cowboy-hat-with-moustache-svgrepo-com.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a679d678a0880b4cd7a6.png\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/cowboy-hat-with-moustache-svgrepo-com.png?");

/***/ }),

/***/ "./src/cowboy-hat-with-moustache-white-svgrepo-com.png":
/*!*************************************************************!*\
  !*** ./src/cowboy-hat-with-moustache-white-svgrepo-com.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0801ea1e49251c55246.png\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/cowboy-hat-with-moustache-white-svgrepo-com.png?");

/***/ }),

/***/ "./src/hot-chocolate-with-milk-glass-jars.jpg":
/*!****************************************************!*\
  !*** ./src/hot-chocolate-with-milk-glass-jars.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"201f32840c925cfe0ecd.jpg\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/hot-chocolate-with-milk-glass-jars.jpg?");

/***/ }),

/***/ "./src/man-drink-hot-tea-with-green-hill-background.jpg":
/*!**************************************************************!*\
  !*** ./src/man-drink-hot-tea-with-green-hill-background.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0633f045d96680fc5fb7.jpg\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/man-drink-hot-tea-with-green-hill-background.jpg?");

/***/ }),

/***/ "./src/pexels-roger-garcia-1513442-10051775.jpg":
/*!******************************************************!*\
  !*** ./src/pexels-roger-garcia-1513442-10051775.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24e13cc990dbf3e687dc.jpg\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/pexels-roger-garcia-1513442-10051775.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;