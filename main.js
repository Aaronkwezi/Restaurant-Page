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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 50px;\r\n    background-color: #fff8f0;\r\n    color: #33241F;\r\n}\r\nheader{\r\n    width: 100%;\r\n}\r\nnav{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap:50px;\r\n  background-color: #ffe4c4;\r\n  border: 1px solid #e5cdb5;\r\n  border-radius: 8px;\r\n  padding: 0.6rem 1.25rem;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n}\r\nnav button{\r\n  background-color: #A83226;\r\n  cursor: pointer;\r\n  border: 1px solid #A83226;\r\n  color: #fff8f0;\r\n  padding: 0.6rem 1.25rem;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  border-radius: 8px;\r\n}\r\nnav button:hover{\r\n    background-color: #82261d;\r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 45px;\r\n}\r\nh1,h3{\r\n    color: #A83226;\r\n}\r\n.service-image{\r\n    width: 300px;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 5px;\r\n}\r\n.recommended-image{\r\n    width: 300px;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 5px;\r\n}\r\n.image{\r\n    width: 150px;\r\n    max-width: 100%;\r\n    height: 150px;\r\n    border-radius: 8px;\r\n}\r\n.recommended{\r\n    display: flex;\r\n    gap: 30px;\r\n}\r\n.menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n.item{\r\n    display: flex;\r\n    gap: 20px;\r\n    background-color: white;\r\n    border: 1px solid #e5cdb5;\r\n    border-radius: 12px;\r\n    padding: 16px;\r\n}\r\n.item p:last-child{\r\n    color: #356b43;\r\n    font-weight: bold;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/pages/BBQchickenpizza.jpg"
/*!***************************************!*\
  !*** ./src/pages/BBQchickenpizza.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"de10ac6072646021120c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/BBQchickenpizza.jpg?\n}");

/***/ },

/***/ "./src/pages/FourCheese.jpg"
/*!**********************************!*\
  !*** ./src/pages/FourCheese.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9f871c017fda7c5cbf04.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/FourCheese.jpg?\n}");

/***/ },

/***/ "./src/pages/Hawaiian.jpg"
/*!********************************!*\
  !*** ./src/pages/Hawaiian.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e9bb93aa874521eb452c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/Hawaiian.jpg?\n}");

/***/ },

/***/ "./src/pages/Margherita.jpg"
/*!**********************************!*\
  !*** ./src/pages/Margherita.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8cdc1fa453a373c87c0f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/Margherita.jpg?\n}");

/***/ },

/***/ "./src/pages/Meatzaapizza.jpg"
/*!************************************!*\
  !*** ./src/pages/Meatzaapizza.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d653e28b76c3b0ae9036.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/Meatzaapizza.jpg?\n}");

/***/ },

/***/ "./src/pages/Pepperoni.jpg"
/*!*********************************!*\
  !*** ./src/pages/Pepperoni.jpg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6b913c31407d1a2c8859.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/Pepperoni.jpg?\n}");

/***/ },

/***/ "./src/pages/ServicesImage(pizza).jpg"
/*!********************************************!*\
  !*** ./src/pages/ServicesImage(pizza).jpg ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9dc1a24ea4d2f0d45953.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/ServicesImage(pizza).jpg?\n}");

/***/ },

/***/ "./src/pages/SpicyChicken.jpg"
/*!************************************!*\
  !*** ./src/pages/SpicyChicken.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e27b5f5c65846156c03b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/SpicyChicken.jpg?\n}");

/***/ },

/***/ "./src/pages/Veggie.jpg"
/*!******************************!*\
  !*** ./src/pages/Veggie.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bdc159cda405c11c7f00.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/Veggie.jpg?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\nconsole.log(\"This is Aaron\");\r\n\r\n\r\n\r\n\r\n\r\n(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst content = document.querySelector('#content');\r\nconst btn = document.querySelectorAll(\"nav button\");\r\nbtn.forEach(btn => { btn.addEventListener(\"click\",()=>{\r\n    content.innerHTML=\"\";\r\n    if(btn.id === 'home')\r\n        (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    if(btn.id === 'about')\r\n        (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    if(btn.id === 'menu')\r\n        (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n})\r\n    \r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/about.js"
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about(){\r\n    console.log(\"This is Kwezi\");\r\n\r\n    const content = document.querySelector(\"#content\");\r\n    content.replaceChildren();\r\n\r\n    const contact = document.createElement(\"div\");\r\n    const contacttitle = document.createElement(\"h3\");\r\n    contacttitle.textContent = \"Contact Info\";\r\n    const phoneNumber = document.createElement(\"p\");\r\n    phoneNumber.textContent=\"Phone: 888-431-1245\"\r\n    const email = document.createElement(\"p\");\r\n    contact.append(contacttitle,phoneNumber,email);\r\n    email.textContent = \"Email: kwezispizza@gmail.com\";\r\n    const deliveryInfo = document.createElement(\"div\");\r\n    const deliverytitle = document.createElement(\"h3\");\r\n    deliverytitle.textContent = \"Delivery Info\";\r\n    const deliveryAddress = document.createElement(\"p\");\r\n    deliveryAddress.textContent = \"Address: 123drive, Big City, BigState, 12345\";\r\n    deliveryInfo.append(deliverytitle,deliveryAddress);\r\n    content.append(contact,deliveryInfo);\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _pages_ServicesImage_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/ServicesImage(pizza).jpg */ \"./src/pages/ServicesImage(pizza).jpg\");\n/* harmony import */ var _pages_BBQchickenpizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/BBQchickenpizza.jpg */ \"./src/pages/BBQchickenpizza.jpg\");\n/* harmony import */ var _pages_Meatzaapizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Meatzaapizza.jpg */ \"./src/pages/Meatzaapizza.jpg\");\n\r\n\r\n\r\nfunction home(){\r\n    console.log(\"This is Aaron\");\r\n\r\n    const content = document.querySelector(\"#content\");\r\n    content.replaceChildren();\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"Welcome to Kwezi's Pizza\";\r\n\r\n    const services = document.createElement(\"div\");\r\n    const serviceDesc = document.createElement(\"p\");\r\n    const serviceImg = document.createElement(\"img\");\r\n    serviceImg.classList.add(\"service-image\");\r\n    serviceImg.src = _pages_ServicesImage_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    serviceImg.alt = \"Freshly baked pizza\";\r\n    serviceDesc.textContent = \"At our pizza place, every slice starts with freshly made dough, rich tomato sauce, and bubbling mozzarella. From classic Margherita to fully loaded favorites, our pizzas are baked until golden and served hot. Bring your friends, grab a slice, and make yourself at home.\";\r\n\r\n    const recommended = document.createElement(\"div\");\r\n    recommended.classList.add(\"recommended\");\r\n    const option1 = document.createElement(\"div\");\r\n    const option1Img = document.createElement(\"img\");\r\n    option1Img.classList.add(\"recommended-image\");\r\n    option1Img.src = _pages_BBQchickenpizza_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    option1Img.alt = \"Fresh BBQ chicken Pizza\";\r\n    const option1Desc = document.createElement(\"div\");\r\n    const option1detail = document.createElement(\"p\");\r\n    option1detail.textContent = \"BBQ chicken pizza\";\r\n    const option1price = document.createElement(\"p\");\r\n    option1price.textContent = \"$14.99\";\r\n    option1Desc.append(option1detail,option1price);\r\n    option1.append(option1Img,option1Desc);\r\n\r\n    const option2 = document.createElement(\"div\");\r\n    const option2Img = document.createElement(\"img\");\r\n    option2Img.classList.add(\"recommended-image\");\r\n    option2Img.src = _pages_Meatzaapizza_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n    option2Img.alt = \"Fresh Meatzza Pizza\";\r\n    const option2Desc = document.createElement(\"div\");\r\n    const option2detail = document.createElement(\"p\");\r\n    option2detail.textContent = \" Meatzza pizza\";\r\n    const option2price = document.createElement(\"p\");\r\n    option2price.textContent = \"$17.99\";\r\n    option2Desc.append(option2detail,option2price);\r\n    option2.append(option2Img,option2Desc);\r\n\r\n    recommended.append(option1,option2);\r\n    services.append(serviceImg);\r\n    services.append(serviceDesc);\r\n    content.append(title);\r\n    content.append(services);\r\n    content.append(recommended);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?\n}");

/***/ },

/***/ "./src/pages/menu.js"
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _pages_BBQchickenpizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/BBQchickenpizza.jpg */ \"./src/pages/BBQchickenpizza.jpg\");\n/* harmony import */ var _pages_Meatzaapizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Meatzaapizza.jpg */ \"./src/pages/Meatzaapizza.jpg\");\n/* harmony import */ var _pages_Pepperoni_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Pepperoni.jpg */ \"./src/pages/Pepperoni.jpg\");\n/* harmony import */ var _pages_SpicyChicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/SpicyChicken.jpg */ \"./src/pages/SpicyChicken.jpg\");\n/* harmony import */ var _pages_Veggie_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Veggie.jpg */ \"./src/pages/Veggie.jpg\");\n/* harmony import */ var _pages_Margherita_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Margherita.jpg */ \"./src/pages/Margherita.jpg\");\n/* harmony import */ var _pages_Hawaiian_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Hawaiian.jpg */ \"./src/pages/Hawaiian.jpg\");\n/* harmony import */ var _pages_FourCheese_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/FourCheese.jpg */ \"./src/pages/FourCheese.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction menu() {\r\n    console.log(\"This is Menu\");\r\n\r\n    const content = document.querySelector(\"#content\");\r\n    content.replaceChildren();\r\n\r\n    const pizzas = [\r\n        {\r\n            name: \"Barbeque Chicken pizza\",\r\n            Toppings: \"Chicken, onions, cheese, BBQ sauce\",\r\n            Price: \"$14.99\",\r\n            image: _pages_BBQchickenpizza_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n        },\r\n        {\r\n            name: \"Margherita\",\r\n            Toppings: \"Classic tomato sauce, fresh mozzarella, and basil\",\r\n            Price: \"$13.49\",\r\n            image: _pages_Margherita_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n        },\r\n        {\r\n            name: \"Pepperoni\",\r\n            Toppings: \"Tomato sauce, melted mozzarella, and crispy pepperoni\",\r\n            Price: \"$15.25\",\r\n            image: _pages_Pepperoni_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n        },\r\n        {\r\n            name: \"Veggie Supreme\",\r\n            Toppings: \"Bell peppers, mushrooms, red onions, and olives over mozzarella and tomato sauce\",\r\n            Price: \"$16.75\",\r\n            image: _pages_Veggie_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n        },\r\n        {\r\n            name: \"Hawaiian\",\r\n            Toppings: \"Ham, sweet pineapple, and mozzarella on a tomato sauce base\",\r\n            Price: \"$15.95\",\r\n            image: _pages_Hawaiian_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n        },\r\n        {\r\n            name: \"Four Cheese\",\r\n            Toppings: \"Mozzarella, cheddar, Parmesan, and Gorgonzola\",\r\n            Price: \"$17.50\",\r\n            image: _pages_FourCheese_jpg__WEBPACK_IMPORTED_MODULE_7__,\r\n        },\r\n        {\r\n            name: \"Spicy Chicken\",\r\n            Toppings: \"Chicken, jalapeños, red onions, and mozzarella with hot sauce\",\r\n            Price: \"$16.25\",\r\n            image: _pages_SpicyChicken_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n        },\r\n        {\r\n            name:\"Meatzza pizza\",\r\n            Toppings: \"Beef, Pepperoni, chicken, bacon, mozzarella\",\r\n            Price: \"$17.99\",\r\n            image: _pages_Meatzaapizza_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n        }\r\n    ];\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"Our Menu\";\r\n\r\n    const menuGrid = document.createElement(\"div\");\r\n    menuGrid.classList.add(\"menu\");\r\n\r\n    pizzas.forEach((pizza) => {\r\n        const item = document.createElement(\"div\");\r\n        item.classList.add(\"item\");\r\n        const itemImage = document.createElement(\"img\");\r\n        itemImage.src = pizza.image;\r\n        itemImage.alt = `${pizza.name} pizza`;\r\n        itemImage.classList.add(\"image\");\r\n\r\n        const itemInfo = document.createElement(\"div\");\r\n        const itemName = document.createElement(\"h3\");\r\n        itemName.textContent = pizza.name;\r\n\r\n        const itemToppings = document.createElement(\"p\");\r\n        itemToppings.textContent = pizza.Toppings;\r\n\r\n        const itemPrice = document.createElement(\"p\");\r\n        itemPrice.textContent = `Price: ${pizza.Price}`;\r\n\r\n        itemInfo.append(itemName, itemToppings, itemPrice);\r\n        item.append(itemImage, itemInfo);\r\n        menuGrid.append(item);\r\n    });\r\n\r\n    content.append(title, menuGrid);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;