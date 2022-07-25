"use strict";
(self["webpackChunkimage_slider"] = self["webpackChunkimage_slider"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mega-Man-ZX.ttf */ "./src/fonts/Mega-Man-ZX.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MMZX\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  font-family: \"MMZX\";\n  margin: 0;\n  padding: 12px;\n  background-color: #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.next-btn,\n.prev-btn {\n  font-family: inherit;\n  font-size: 22px;\n  background-color: #ffc894;\n}\n\n.next-btn:hover,\n.prev-btn:hover {\n  background-color: #ffeddc;\n}\n\n.image-ui-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.image-frame {\n  border: 1px solid #000;\n  max-width: 800px;\n  overflow-x: hidden;\n}\n\n.slide-container {\n  width: max-content;\n  display: flex;\n  position: relative;\n  right: 0;\n  transition-property: left, right, opacity;\n  transition-duration: 1s;\n}\n\n.slider-img {\n  object-fit: contain;\n  width: 800px;\n  height: auto;\n}\n\n.img-navigation {\n  display: flex;\n  gap: 16px;\n}\n\n.img-nav-button {\n  width: 30px;\n  height: 30px;\n  background: #696969;\n  border-radius: 50%;\n  border: none;\n  transition: background-color 1s;\n}\n\n.selected {\n  background-color: #191919;\n}\n\n@media (max-width: 500px) {\n  .image-frame {\n    max-width: 300px;\n  }\n  .slider-img {\n    width: 300px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,+DAAA;AACJ;AAEA;EACI,mBAAA;EACA,SAAA;EACA,aAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAAJ;;AAGA;;EAEI,oBAAA;EACA,eAAA;EACA,yBAAA;AAAJ;;AAGA;;EAEI,yBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAAJ;;AAIA;EACI,sBAAA;EACA,gBAHU;EAIV,kBAAA;AADJ;;AAKA;EACI,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,yCAAA;EACA,uBAPY;AAKhB;;AAKA;EACI,mBAAA;EACA,YAnBU;EAoBV,YAAA;AAFJ;;AAKA;EACI,aAAA;EACA,SAAA;AAFJ;;AAKA;EAEI,WADa;EAEb,YAFa;EAGb,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,+BAAA;AAHJ;;AAMA;EACI,yBAAA;AAHJ;;AAMA;EAEI;IACI,gBAFU;EAFhB;EAME;IACI,YALU;EAChB;AACF","sourcesContent":["@font-face {\n    font-family: \"MMZX\";\n    src: url(\"./fonts/Mega-Man-ZX.ttf\") format(\"truetype\");\n}\n\nbody {\n    font-family: \"MMZX\";\n    margin: 0;\n    padding: 12px;\n    background-color: #e0e0e0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n.next-btn,\n.prev-btn {\n    font-family: inherit;\n    font-size: 22px;\n    background-color: #ffc894;\n}\n\n.next-btn:hover,\n.prev-btn:hover {\n    background-color: #ffeddc;\n}\n\n.image-ui-container {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n}\n\n$image-width: 800px;\n.image-frame {\n    border: 1px solid #000;\n    max-width: $image-width;\n    overflow-x: hidden;\n}\n\n$tran-duration: 1s;\n.slide-container {\n    width: max-content;\n    display: flex;\n    position: relative;\n    right: 0;\n    transition-property: left, right, opacity;\n    transition-duration: $tran-duration;\n}\n\n.slider-img {\n    object-fit: contain;\n    width: $image-width;\n    height: auto;\n}\n\n.img-navigation {\n    display: flex;\n    gap: 16px;\n}\n\n.img-nav-button {\n    $circle-rad: 30px;\n    width: $circle-rad;\n    height: $circle-rad;\n    background: #696969;\n    border-radius: 50%;\n    border: none;\n    transition: background-color $tran-duration;\n}\n\n.selected {\n    background-color: #191919;\n}\n\n@media (max-width: 500px) {\n    $image-width: 300px;\n    .image-frame {\n        max-width: $image-width;\n    }\n    .slider-img {\n        width: $image-width;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/imageSlider.js":
/*!****************************!*\
  !*** ./src/imageSlider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slideImages(container) {
  let slidePos = Number(getComputedStyle(container).right.match(/\d+/)[0]);
  const containerWidth = container.offsetWidth;
  const numOfImgs = container.querySelectorAll('img').length;
  const imgWidth = containerWidth / numOfImgs;
  let intervalId;

  const getInfo = () => [slidePos, containerWidth, imgWidth];

  const shiftSlides = (num) => {
    container.style.right = `${num}px`;
  };

  const setPos = (num) => {
    slidePos = num;
    shiftSlides(slidePos);
  };

  const slideRight = () => {
    slidePos += 800;
    shiftSlides(slidePos);
  };

  const slideLeft = () => {
    slidePos -= 800;
    shiftSlides(slidePos);
  };

  const resetSlide = () => {
    slidePos = 0;
    shiftSlides(slidePos);
  };

  const autoSlide = () => {
    intervalId = setInterval(() => {
      if (slidePos < containerWidth - imgWidth) {
        slideRight();
      } else {
        resetSlide();
      }
    }, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalId);
  };

  return {
    getInfo, setPos, shiftSlides, slideRight, slideLeft, resetSlide, autoSlide, resetAutoSlide,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideImages);


/***/ }),

/***/ "./src/imageSlides.js":
/*!****************************!*\
  !*** ./src/imageSlides.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_ZeroReploid_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ZeroReploid.png */ "./src/images/ZeroReploid.png");
/* harmony import */ var _images_Ciel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Ciel.png */ "./src/images/Ciel.png");
/* harmony import */ var _images_mmzFefnir_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/mmzFefnir.jpg */ "./src/images/mmzFefnir.jpg");
/* harmony import */ var _images_mmzElpizo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/mmzElpizo.jpg */ "./src/images/mmzElpizo.jpg");





const imgInfo = [
  [_images_ZeroReploid_png__WEBPACK_IMPORTED_MODULE_0__, 'Former Maverick Hunter'],
  [_images_Ciel_png__WEBPACK_IMPORTED_MODULE_1__, 'Ciel and a cyberelf'],
  [_images_mmzFefnir_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Fighting Fefnir'],
  [_images_mmzElpizo_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Elpizo'],
];

function insertImages() {
  const container = document.querySelector('.slide-container');
  imgInfo.forEach((data) => {
    const img = document.createElement('img');
    [img.src, img.alt] = data;
    img.classList.add('slider-img');
    container.append(img);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertImages);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _imageSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageSlides */ "./src/imageSlides.js");
/* harmony import */ var _imageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageSlider */ "./src/imageSlider.js");
/* harmony import */ var _images_faviconZero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/faviconZero.png */ "./src/images/faviconZero.png");





const link = document.createElement('link');
link.rel = 'icon';
link.href = _images_faviconZero_png__WEBPACK_IMPORTED_MODULE_3__;
const head = document.querySelector('head');
head.append(link);

(0,_imageSlides__WEBPACK_IMPORTED_MODULE_1__["default"])();
const slides = document.querySelector('.slide-container');
const manageSlider = (0,_imageSlider__WEBPACK_IMPORTED_MODULE_2__["default"])(slides);

window.addEventListener('load', () => {
  manageSlider.autoSlide();
  handleImgBtnStyle.autoAssignClassToBtn();
});

function handleNext() {
  const [pos, containerWidth, imgWidth] = manageSlider.getInfo();
  if (pos < containerWidth - imgWidth) {
    manageSlider.slideRight();
    handleImgBtnStyle.incIndex();
    handleImgBtnStyle.selectNewClass();
  }
  manageSlider.resetAutoSlide();
  manageSlider.autoSlide();
  handleImgBtnStyle.removeInterval();
  handleImgBtnStyle.autoAssignClassToBtn();
}

function handlePrev() {
  const [pos, _, imgWidth] = manageSlider.getInfo();
  if (pos >= imgWidth) {
    manageSlider.slideLeft();
    handleImgBtnStyle.decIndex();
    handleImgBtnStyle.selectNewClass();
  }
  manageSlider.resetAutoSlide();
  manageSlider.autoSlide();
  handleImgBtnStyle.removeInterval();
  handleImgBtnStyle.autoAssignClassToBtn();
}

const prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', handlePrev);

const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', handleNext);

const imgBtns = Array.from(document.querySelectorAll('.img-nav-button'));
imgBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    const [_, __, imgWidth] = manageSlider.getInfo();
    manageSlider.setPos(imgWidth * index);
    manageSlider.resetAutoSlide();
    manageSlider.autoSlide();

    handleImgBtnStyle.setIndex(e.target);
    handleImgBtnStyle.selectNewClass();
    handleImgBtnStyle.removeInterval();
    handleImgBtnStyle.autoAssignClassToBtn();
  });
});

const handleImgBtnStyle = (function btnStyleManager() {
  let currIndex = 0;
  let prevIndex;
  let intervalId = 0;
  imgBtns[currIndex].classList.add('selected');

  const incIndex = () => {
    prevIndex = currIndex;
    currIndex = (prevIndex + 1) % imgBtns.length;
  };

  const decIndex = () => {
    prevIndex = currIndex;
    currIndex -= 1;
  };

  const selectNewClass = () => {
    imgBtns[prevIndex].classList.remove('selected');
    imgBtns[currIndex].classList.add('selected');
  };

  const autoAssignClassToBtn = () => {
    intervalId = setInterval(() => {
      incIndex();
      selectNewClass();
    }, 5000);
  };

  const removeInterval = () => {
    clearInterval(intervalId);
  };

  const setIndex = (elem) => {
    prevIndex = currIndex;
    currIndex = imgBtns.indexOf(elem);
  };

  return {
    autoAssignClassToBtn, removeInterval, setIndex, incIndex, decIndex, selectNewClass,
  };
}());


/***/ }),

/***/ "./src/fonts/Mega-Man-ZX.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Mega-Man-ZX.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2afd2b0364c45c0c770.ttf";

/***/ }),

/***/ "./src/images/Ciel.png":
/*!*****************************!*\
  !*** ./src/images/Ciel.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50b1b04e9970ca83c845.png";

/***/ }),

/***/ "./src/images/ZeroReploid.png":
/*!************************************!*\
  !*** ./src/images/ZeroReploid.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "534c39988489aec496d2.png";

/***/ }),

/***/ "./src/images/faviconZero.png":
/*!************************************!*\
  !*** ./src/images/faviconZero.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb9441abe26ab6aa9f50.png";

/***/ }),

/***/ "./src/images/mmzElpizo.jpg":
/*!**********************************!*\
  !*** ./src/images/mmzElpizo.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51bb78815d8cc4d8a7b6.jpg";

/***/ }),

/***/ "./src/images/mmzFefnir.jpg":
/*!**********************************!*\
  !*** ./src/images/mmzFefnir.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05ccdbc07689dcf5c640.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvaW1hZ2VTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL2ltYWdlU2xpZGVzLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9NZWdhLU1hbi1aWC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTU1aWFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTU1aWFxcXCI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLm5leHQtYnRuLFxcbi5wcmV2LWJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM4OTQ7XFxufVxcblxcbi5uZXh0LWJ0bjpob3ZlcixcXG4ucHJldi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWRkYztcXG59XFxuXFxuLmltYWdlLXVpLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmltYWdlLWZyYW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uc2xpZGUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIHJpZ2h0LCBvcGFjaXR5O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbi5zbGlkZXItaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5pbWctbmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uaW1nLW5hdi1idXR0b24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNjk2OTY5O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLmltYWdlLWZyYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5zbGlkZXItaW1nIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsK0RBQUE7QUFDSjtBQUVBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7O0VBRUksb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTs7RUFFSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxnQkFIVTtFQUlWLGtCQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQVBZO0FBS2hCOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSxZQW5CVTtFQW9CVixZQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUtBO0VBRUksV0FEYTtFQUViLFlBRmE7RUFHYixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtBQUhKOztBQU1BO0VBRUk7SUFDSSxnQkFGVTtFQUZoQjtFQU1FO0lBQ0ksWUFMVTtFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1NWlhcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9mb250cy9NZWdhLU1hbi1aWC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1NWlhcXFwiO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLm5leHQtYnRuLFxcbi5wcmV2LWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM4OTQ7XFxufVxcblxcbi5uZXh0LWJ0bjpob3ZlcixcXG4ucHJldi1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZGRjO1xcbn1cXG5cXG4uaW1hZ2UtdWktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4kaW1hZ2Utd2lkdGg6IDgwMHB4O1xcbi5pbWFnZS1mcmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIG1heC13aWR0aDogJGltYWdlLXdpZHRoO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiR0cmFuLWR1cmF0aW9uOiAxcztcXG4uc2xpZGUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCByaWdodCwgb3BhY2l0eTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHRyYW4tZHVyYXRpb247XFxufVxcblxcbi5zbGlkZXItaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgd2lkdGg6ICRpbWFnZS13aWR0aDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaW1nLW5hdmlnYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5pbWctbmF2LWJ1dHRvbiB7XFxuICAgICRjaXJjbGUtcmFkOiAzMHB4O1xcbiAgICB3aWR0aDogJGNpcmNsZS1yYWQ7XFxuICAgIGhlaWdodDogJGNpcmNsZS1yYWQ7XFxuICAgIGJhY2tncm91bmQ6ICM2OTY5Njk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICR0cmFuLWR1cmF0aW9uO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgJGltYWdlLXdpZHRoOiAzMDBweDtcXG4gICAgLmltYWdlLWZyYW1lIHtcXG4gICAgICAgIG1heC13aWR0aDogJGltYWdlLXdpZHRoO1xcbiAgICB9XFxuICAgIC5zbGlkZXItaW1nIHtcXG4gICAgICAgIHdpZHRoOiAkaW1hZ2Utd2lkdGg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBzbGlkZUltYWdlcyhjb250YWluZXIpIHtcbiAgbGV0IHNsaWRlUG9zID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5yaWdodC5tYXRjaCgvXFxkKy8pWzBdKTtcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IG51bU9mSW1ncyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGg7XG4gIGNvbnN0IGltZ1dpZHRoID0gY29udGFpbmVyV2lkdGggLyBudW1PZkltZ3M7XG4gIGxldCBpbnRlcnZhbElkO1xuXG4gIGNvbnN0IGdldEluZm8gPSAoKSA9PiBbc2xpZGVQb3MsIGNvbnRhaW5lcldpZHRoLCBpbWdXaWR0aF07XG5cbiAgY29uc3Qgc2hpZnRTbGlkZXMgPSAobnVtKSA9PiB7XG4gICAgY29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gYCR7bnVtfXB4YDtcbiAgfTtcblxuICBjb25zdCBzZXRQb3MgPSAobnVtKSA9PiB7XG4gICAgc2xpZGVQb3MgPSBudW07XG4gICAgc2hpZnRTbGlkZXMoc2xpZGVQb3MpO1xuICB9O1xuXG4gIGNvbnN0IHNsaWRlUmlnaHQgPSAoKSA9PiB7XG4gICAgc2xpZGVQb3MgKz0gODAwO1xuICAgIHNoaWZ0U2xpZGVzKHNsaWRlUG9zKTtcbiAgfTtcblxuICBjb25zdCBzbGlkZUxlZnQgPSAoKSA9PiB7XG4gICAgc2xpZGVQb3MgLT0gODAwO1xuICAgIHNoaWZ0U2xpZGVzKHNsaWRlUG9zKTtcbiAgfTtcblxuICBjb25zdCByZXNldFNsaWRlID0gKCkgPT4ge1xuICAgIHNsaWRlUG9zID0gMDtcbiAgICBzaGlmdFNsaWRlcyhzbGlkZVBvcyk7XG4gIH07XG5cbiAgY29uc3QgYXV0b1NsaWRlID0gKCkgPT4ge1xuICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoc2xpZGVQb3MgPCBjb250YWluZXJXaWR0aCAtIGltZ1dpZHRoKSB7XG4gICAgICAgIHNsaWRlUmlnaHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0U2xpZGUoKTtcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgfTtcblxuICBjb25zdCByZXNldEF1dG9TbGlkZSA9ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SW5mbywgc2V0UG9zLCBzaGlmdFNsaWRlcywgc2xpZGVSaWdodCwgc2xpZGVMZWZ0LCByZXNldFNsaWRlLCBhdXRvU2xpZGUsIHJlc2V0QXV0b1NsaWRlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzbGlkZUltYWdlcztcbiIsImltcG9ydCBaZXJvIGZyb20gJy4vaW1hZ2VzL1plcm9SZXBsb2lkLnBuZyc7XG5pbXBvcnQgQ2llbCBmcm9tICcuL2ltYWdlcy9DaWVsLnBuZyc7XG5pbXBvcnQgRmVmbmlyIGZyb20gJy4vaW1hZ2VzL21tekZlZm5pci5qcGcnO1xuaW1wb3J0IEVscGl6byBmcm9tICcuL2ltYWdlcy9tbXpFbHBpem8uanBnJztcblxuY29uc3QgaW1nSW5mbyA9IFtcbiAgW1plcm8sICdGb3JtZXIgTWF2ZXJpY2sgSHVudGVyJ10sXG4gIFtDaWVsLCAnQ2llbCBhbmQgYSBjeWJlcmVsZiddLFxuICBbRmVmbmlyLCAnRmlnaHRpbmcgRmVmbmlyJ10sXG4gIFtFbHBpem8sICdFbHBpem8nXSxcbl07XG5cbmZ1bmN0aW9uIGluc2VydEltYWdlcygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLWNvbnRhaW5lcicpO1xuICBpbWdJbmZvLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBbaW1nLnNyYywgaW1nLmFsdF0gPSBkYXRhO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzbGlkZXItaW1nJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChpbWcpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5zZXJ0SW1hZ2VzO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGluc2VydEltYWdlcyBmcm9tICcuL2ltYWdlU2xpZGVzJztcbmltcG9ydCBpbWFnZVNsaWRlciBmcm9tICcuL2ltYWdlU2xpZGVyJztcbmltcG9ydCBmYXZJY29uIGZyb20gJy4vaW1hZ2VzL2Zhdmljb25aZXJvLnBuZyc7XG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5saW5rLnJlbCA9ICdpY29uJztcbmxpbmsuaHJlZiA9IGZhdkljb247XG5jb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuaGVhZC5hcHBlbmQobGluayk7XG5cbmluc2VydEltYWdlcygpO1xuY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLWNvbnRhaW5lcicpO1xuY29uc3QgbWFuYWdlU2xpZGVyID0gaW1hZ2VTbGlkZXIoc2xpZGVzKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIG1hbmFnZVNsaWRlci5hdXRvU2xpZGUoKTtcbiAgaGFuZGxlSW1nQnRuU3R5bGUuYXV0b0Fzc2lnbkNsYXNzVG9CdG4oKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVOZXh0KCkge1xuICBjb25zdCBbcG9zLCBjb250YWluZXJXaWR0aCwgaW1nV2lkdGhdID0gbWFuYWdlU2xpZGVyLmdldEluZm8oKTtcbiAgaWYgKHBvcyA8IGNvbnRhaW5lcldpZHRoIC0gaW1nV2lkdGgpIHtcbiAgICBtYW5hZ2VTbGlkZXIuc2xpZGVSaWdodCgpO1xuICAgIGhhbmRsZUltZ0J0blN0eWxlLmluY0luZGV4KCk7XG4gICAgaGFuZGxlSW1nQnRuU3R5bGUuc2VsZWN0TmV3Q2xhc3MoKTtcbiAgfVxuICBtYW5hZ2VTbGlkZXIucmVzZXRBdXRvU2xpZGUoKTtcbiAgbWFuYWdlU2xpZGVyLmF1dG9TbGlkZSgpO1xuICBoYW5kbGVJbWdCdG5TdHlsZS5yZW1vdmVJbnRlcnZhbCgpO1xuICBoYW5kbGVJbWdCdG5TdHlsZS5hdXRvQXNzaWduQ2xhc3NUb0J0bigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmV2KCkge1xuICBjb25zdCBbcG9zLCBfLCBpbWdXaWR0aF0gPSBtYW5hZ2VTbGlkZXIuZ2V0SW5mbygpO1xuICBpZiAocG9zID49IGltZ1dpZHRoKSB7XG4gICAgbWFuYWdlU2xpZGVyLnNsaWRlTGVmdCgpO1xuICAgIGhhbmRsZUltZ0J0blN0eWxlLmRlY0luZGV4KCk7XG4gICAgaGFuZGxlSW1nQnRuU3R5bGUuc2VsZWN0TmV3Q2xhc3MoKTtcbiAgfVxuICBtYW5hZ2VTbGlkZXIucmVzZXRBdXRvU2xpZGUoKTtcbiAgbWFuYWdlU2xpZGVyLmF1dG9TbGlkZSgpO1xuICBoYW5kbGVJbWdCdG5TdHlsZS5yZW1vdmVJbnRlcnZhbCgpO1xuICBoYW5kbGVJbWdCdG5TdHlsZS5hdXRvQXNzaWduQ2xhc3NUb0J0bigpO1xufVxuXG5jb25zdCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtYnRuJyk7XG5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG5cbmNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1idG4nKTtcbm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcblxuY29uc3QgaW1nQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZy1uYXYtYnV0dG9uJykpO1xuaW1nQnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgW18sIF9fLCBpbWdXaWR0aF0gPSBtYW5hZ2VTbGlkZXIuZ2V0SW5mbygpO1xuICAgIG1hbmFnZVNsaWRlci5zZXRQb3MoaW1nV2lkdGggKiBpbmRleCk7XG4gICAgbWFuYWdlU2xpZGVyLnJlc2V0QXV0b1NsaWRlKCk7XG4gICAgbWFuYWdlU2xpZGVyLmF1dG9TbGlkZSgpO1xuXG4gICAgaGFuZGxlSW1nQnRuU3R5bGUuc2V0SW5kZXgoZS50YXJnZXQpO1xuICAgIGhhbmRsZUltZ0J0blN0eWxlLnNlbGVjdE5ld0NsYXNzKCk7XG4gICAgaGFuZGxlSW1nQnRuU3R5bGUucmVtb3ZlSW50ZXJ2YWwoKTtcbiAgICBoYW5kbGVJbWdCdG5TdHlsZS5hdXRvQXNzaWduQ2xhc3NUb0J0bigpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBoYW5kbGVJbWdCdG5TdHlsZSA9IChmdW5jdGlvbiBidG5TdHlsZU1hbmFnZXIoKSB7XG4gIGxldCBjdXJySW5kZXggPSAwO1xuICBsZXQgcHJldkluZGV4O1xuICBsZXQgaW50ZXJ2YWxJZCA9IDA7XG4gIGltZ0J0bnNbY3VyckluZGV4XS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gIGNvbnN0IGluY0luZGV4ID0gKCkgPT4ge1xuICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICBjdXJySW5kZXggPSAocHJldkluZGV4ICsgMSkgJSBpbWdCdG5zLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBkZWNJbmRleCA9ICgpID0+IHtcbiAgICBwcmV2SW5kZXggPSBjdXJySW5kZXg7XG4gICAgY3VyckluZGV4IC09IDE7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TmV3Q2xhc3MgPSAoKSA9PiB7XG4gICAgaW1nQnRuc1twcmV2SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgaW1nQnRuc1tjdXJySW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIH07XG5cbiAgY29uc3QgYXV0b0Fzc2lnbkNsYXNzVG9CdG4gPSAoKSA9PiB7XG4gICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGluY0luZGV4KCk7XG4gICAgICBzZWxlY3ROZXdDbGFzcygpO1xuICAgIH0sIDUwMDApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUludGVydmFsID0gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0SW5kZXggPSAoZWxlbSkgPT4ge1xuICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICBjdXJySW5kZXggPSBpbWdCdG5zLmluZGV4T2YoZWxlbSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhdXRvQXNzaWduQ2xhc3NUb0J0biwgcmVtb3ZlSW50ZXJ2YWwsIHNldEluZGV4LCBpbmNJbmRleCwgZGVjSW5kZXgsIHNlbGVjdE5ld0NsYXNzLFxuICB9O1xufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==