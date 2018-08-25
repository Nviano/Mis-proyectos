webpackHotUpdate(4,{

/***/ "./components/Noticia.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/nachov/Desktop/mis-proyectos/React/bitcoinapp/components/Noticia.js";


var Noticia = function Noticia() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "desde noticia");
};

/* harmony default export */ __webpack_exports__["a"] = (Noticia);

/***/ }),

/***/ "./components/Noticias.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Noticia__ = __webpack_require__("./components/Noticia.js");
var _jsxFileName = "/Users/nachov/Desktop/mis-proyectos/React/bitcoinapp/components/Noticias.js";



var Noticias = function Noticias(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.noticias.map(function (noticia) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Noticia__["a" /* default */], {
      noticia: noticia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Noticias);

/***/ })

})
//# sourceMappingURL=4.470ea84c515ccf24bcd4.hot-update.js.map