webpackHotUpdate(4,{

/***/ "./components/Noticia.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/nachov/Desktop/mis-proyectos/React/bitcoinapp/components/Noticia.js";


var Noticia = function Noticia(props) {
  var _props$noticia = props.noticia,
      urlToImage = _props$noticia.urlToImage,
      url = _props$noticia.url,
      title = _props$noticia.title,
      description = _props$noticia.description,
      source = _props$noticia.source;
  var imagen = '';

  if (urlToImage !== '') {
    imagen = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    });
  } else {
    imagen = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, "Imagen no disponible");
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, imgen)));
};

/* harmony default export */ __webpack_exports__["a"] = (Noticia);

/***/ })

})
//# sourceMappingURL=4.9b6500ceb57b234242f0.hot-update.js.map