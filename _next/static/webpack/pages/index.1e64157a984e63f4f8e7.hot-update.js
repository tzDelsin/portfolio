/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ScrollTop/ScrollTop.js":
/*!***********************************************!*\
  !*** ./src/components/ScrollTop/ScrollTop.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ScrollTopStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollTopStyles */ \"./src/components/ScrollTop/ScrollTopStyles.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/toms/tomas_personal/portfolio_website-STARTER/src/components/ScrollTop/ScrollTop.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ScrollTop = function ScrollTop() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTopBtn = _useState[0],\n      setShowTopBtn = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.addEventListener('scroll', function () {\n      if (window.scrollY > 400) {\n        setShowTopBtn(true);\n      } else {\n        setShowTopBtn(false);\n      }\n    });\n  }, [showTopBtn]);\n\n  var goToTop = function goToTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: showTopBtn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScrollTopStyles__WEBPACK_IMPORTED_MODULE_2__.ScrollTopBtn, {\n      onClick: goToTop,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowRoundUp, {\n        size: \"2rem\",\n        style: {\n          position: 'absolute',\n          top: '2px',\n          left: '-30px'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 6\n      }, _this), \"back to top\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ScrollTop, \"q7apG8dmJPUfMdSOSzz9+OsPYjI=\");\n\n_c = ScrollTop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTop);\n\nvar _c;\n\n$RefreshReg$(_c, \"ScrollTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2Nyb2xsVG9wL1Njcm9sbFRvcC5qcz8xNDIyIl0sIm5hbWVzIjpbIlNjcm9sbFRvcCIsInVzZVN0YXRlIiwic2hvd1RvcEJ0biIsInNldFNob3dUb3BCdG4iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImdvVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwicG9zaXRpb24iLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNhQywrQ0FBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNoQkMsVUFEZ0I7QUFBQSxNQUNKQyxhQURJOztBQUV2QkMsa0RBQVMsQ0FDUixZQUFNO0FBQ0xDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN2QyxVQUFJRCxNQUFNLENBQUNFLE9BQVAsR0FBaUIsR0FBckIsRUFBMEI7QUFDekJKLHFCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0EsT0FGRCxNQUVPO0FBQ05BLHFCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FUTyxFQVVSLENBQUNELFVBQUQsQ0FWUSxDQUFUOztBQVlBLE1BQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDckJILFVBQU0sQ0FBQ0ksUUFBUCxDQUFnQjtBQUNmQyxTQUFHLEVBQUUsQ0FEVTtBQUVmQyxjQUFRLEVBQUU7QUFGSyxLQUFoQjtBQUlBLEdBTEQ7O0FBT0Esc0JBQ0M7QUFBQSxjQUNFVCxVQUFVLGlCQUNWLDhEQUFDLDBEQUFEO0FBQ0MsYUFBTyxFQUFFTSxPQURWO0FBQUEsOEJBR0MsOERBQUMsNkRBQUQ7QUFBbUIsWUFBSSxFQUFDLE1BQXhCO0FBQStCLGFBQUssRUFBRTtBQUFDSSxrQkFBUSxFQUFFLFVBQVg7QUFBdUJGLGFBQUcsRUFBRSxLQUE1QjtBQUFtQ0csY0FBSSxFQUFFO0FBQXpDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERDtBQVlBLENBakNEOztHQUFNYixTOztLQUFBQSxTO0FBa0NOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2Nyb2xsVG9wL1Njcm9sbFRvcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNjcm9sbFRvcEJ0biB9IGZyb20gJy4vU2Nyb2xsVG9wU3R5bGVzJztcbmltcG9ydCB7IElvSW9zQXJyb3dSb3VuZFVwIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5cblxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xuXHRjb25zdCBbc2hvd1RvcEJ0biwgc2V0U2hvd1RvcEJ0bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHVzZUVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPiA0MDApIHtcblx0XHRcdFx0XHRzZXRTaG93VG9wQnRuKHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNldFNob3dUb3BCdG4oZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdFtzaG93VG9wQnRuXSxcblx0KTtcblx0Y29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0dG9wOiAwLFxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtzaG93VG9wQnRuICYmIChcblx0XHRcdFx0PFNjcm9sbFRvcEJ0blxuXHRcdFx0XHRcdG9uQ2xpY2s9e2dvVG9Ub3B9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8SW9Jb3NBcnJvd1JvdW5kVXAgc2l6ZT0nMnJlbScgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMnB4JywgbGVmdDogJy0zMHB4J319Lz5cblx0XHRcdFx0XHRiYWNrIHRvIHRvcCBcblx0XHRcdFx0PC9TY3JvbGxUb3BCdG4+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ScrollTop/ScrollTop.js\n");

/***/ })

});