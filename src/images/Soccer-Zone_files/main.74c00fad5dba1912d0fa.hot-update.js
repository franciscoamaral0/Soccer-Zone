webpackHotUpdate("main",{

/***/ "./src/components/Styles/tableStyled.js":
/*!**********************************************!*\
  !*** ./src/components/Styles/tableStyled.js ***!
  \**********************************************/
/*! exports provided: Table, CheckColor, TableViews, StyledSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckColor", function() { return CheckColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableViews", function() { return TableViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSnackbar", function() { return StyledSnackbar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const Table = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table`
  text-align:center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
  td, th{
    border: 1px solid #ddd;
    padding: 8px;
  }
  th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover{
    background-color: #ddd;
  }
  @media (max-width: 400px) {
    td {font-size: 0.5rem; }
    td a { font-size: 0.5rem; }
    td img{ width: 15px;}
    th { font-size: 0.5rem; }
}
  @media (min-width: 401px) {
    td{ font-size: 0.8rem;}
    td a { font-size: 0.8rem; }
    td img{ width: 23px;}
    th { font-size: 0.8rem; }
}
  @media (min-width: 992px) {
    td  {font-size: 1rem;}
    td a { font-size: 1rem; }
    td img{ width: 30px;}
    th { font-size: 1rem; }
}
  @media (min-width: 1200px) {
    td  {font-size: 1.1rem;}
    td a { font-size: 1.1rem; }
    td img{ width: 34px;}
    th { font-size: 1.1em; }
}
`;
const TableViews = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table`
  text-align:center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
  td, th{
    border: 1px solid #ddd;
    padding: 8px;
  }
  th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover{
    background-color: #ddd;
  }

  @media only screen and (max-width: 429px) {
    td {font-size: 0.34rem; }
    td a { font-size: 0.34rem; }
    td img{ width: 10px;}
    th { font-size: 0.34rem; }

}

  @media only screen and (min-width: 578px) {
    td {font-size: 0.5rem; }
    td a { font-size: 0.5rem; }
    td img{ width: 15px;}
    th { font-size: 0.5rem; }

}
  @media only screen and (min-width: 579px) {
    td{ font-size: 0.8rem;}
    td a { font-size: 0.8rem; }
    td img{ width: 20px;}
    th { font-size: 0.8rem; }

}
  @media only screen and (min-width: 992px) {
    td  {font-size: 0.9rem;}
    td a { font-size: 0.9rem; }
    td img{ width: 26px;}
    th { font-size: 0.9rem; }
}
  @media only screen and (min-width: 1200px) {
    td  {font-size: 1rem;}
    td a { font-size: 1rem; }
    td img{ width: 32px;}
    th { font-size: 1em; }
}
`;
const CheckColor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
color: ${props => props.result === 'v' ? 'green' : props.result === 'e' ? 'gray' : 'red'}
`;
const StyledSnackbar = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"])`
  top: 320px;
  right: 94px;
  display: inline;

  `;


const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.74c00fad5dba1912d0fa.hot-update.js.map