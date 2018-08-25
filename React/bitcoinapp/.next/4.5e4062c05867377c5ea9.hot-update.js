webpackHotUpdate(4,{

/***/ "./components/Evento.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/nachov/Desktop/mis-proyectos/React/bitcoinapp/components/Evento.js";


var Evento = function Evento(props) {
  var _props$info = props.info,
      name = _props$info.name,
      url = _props$info.url,
      description = _props$info.description;
  var titulo = name.text;

  if (titulo.legth > 150) {
    titulo = titulo.substr(0, 150) + '...';
  }

  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250) + '...';
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: url,
    target: "_blanck",
    className: "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, name.text), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, desc));
};

/* harmony default export */ __webpack_exports__["a"] = (Evento);

/***/ })

})
//# sourceMappingURL=4.5e4062c05867377c5ea9.hot-update.js.map