webpackHotUpdate(4,{

/***/ "./components/Evento.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/nachov/Desktop/mis-proyectos/React/bitcoinapp/components/Evento.js";


var Evento = function Evento(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "desde evento");
};

/* harmony default export */ __webpack_exports__["a"] = (Evento);

/***/ }),

/***/ "./components/Eventos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Evento__ = __webpack_require__("./components/Evento.js");
var _jsxFileName = "/Users/nachov/Desktop/mis-proyectos/React/bitcoinapp/components/Eventos.js";



var Eventos = function Eventos(props) {
  var eventosId = Object.keys(props.eventos);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, eventosId.map(function (key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Evento__["a" /* default */], {
      key: key,
      info: props.eventos[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Eventos);

/***/ })

})
//# sourceMappingURL=4.60a409e09e51bf541de6.hot-update.js.map