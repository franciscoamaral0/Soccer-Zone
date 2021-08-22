webpackHotUpdate("main",{

/***/ "./src/components/CopaBr-Liberta-SulAmericana/ViewTablesCopaBrasil.js":
/*!****************************************************************************!*\
  !*** ./src/components/CopaBr-Liberta-SulAmericana/ViewTablesCopaBrasil.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Home_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header-Home/Header */ "./src/components/Header-Home/Header.js");
/* harmony import */ var _Header_Home_UnderHeaderImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header-Home/UnderHeaderImg */ "./src/components/Header-Home/UnderHeaderImg.js");
/* harmony import */ var _Api_Apiresponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Api/Apiresponse */ "./src/Api/Apiresponse.js");
/* harmony import */ var _Styles_tableStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Styles/tableStyled */ "./src/components/Styles/tableStyled.js");
/* harmony import */ var _ReactContentLoader_ReactLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReactContentLoader/ReactLoader */ "./src/components/ReactContentLoader/ReactLoader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/franciscoamaral/Desktop/react-project-soccerzone/src/components/CopaBr-Liberta-SulAmericana/ViewTablesCopaBrasil.js";









class ViewTableCopaBrasil extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      time: [],
      artilharia: [],
      rodada: [],
      loading: []
    };

    this.componentDidMount = async () => {
      try {
        this.setState({
          loading: true
        });
        const {
          data: getArtilheiro
        } = await _Api_Apiresponse__WEBPACK_IMPORTED_MODULE_3__["default"].getArtilheiro(2);
        const {
          data: getRound
        } = await _Api_Apiresponse__WEBPACK_IMPORTED_MODULE_3__["default"].getRound(2);
        const {
          data: getNextStep
        } = await _Api_Apiresponse__WEBPACK_IMPORTED_MODULE_3__["default"].getNextStep(2, getRound.fase_atual.fase_id);
        this.setState({
          time: [],
          artilharia: getArtilheiro.slice(0, 10),
          rodada: getNextStep.chaves
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({
          loading: false
        });
      }
    };

    this.renderTableHeader = (headerNames = []) => {
      return headerNames.map((element, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("th", {
          children: element
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 14
        }, this);
      });
    };

    this.renderTableTopScore = () => {
      return this.state.artilharia.map((element, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              width: "35px",
              src: element.time.escudo,
              alt: element.atleta.nome_popular
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.atleta.nome_popular
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.gols
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, this)]
        }, element.atleta.atleta_id, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this);
      });
    };

    this.renderTableNextRounds = () => {
      return this.state.rodada.map(element => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              width: "35px",
              src: element.partida_ida.time_mandante.escudo,
              alt: element.partida_ida.time_mandante.nome_popular
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_ida.time_mandante.nome_popular
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_ida.placar_mandante
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: "x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_ida.placar_visitante
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_ida.time_visitante.nome_popular
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              width: "35px",
              src: element.partida_ida.time_visitante.escudo,
              alt: element.partida_ida.time_visitante.nome_popular
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: [element.partida_ida.data_realizacao, " -", " ", element.partida_ida.hora_realizacao]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, this)]
        }, element.fase_id, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this);
      });
    };

    this.renderTableNextRoundsReturnGame = () => {
      return this.state.rodada.map(element => {
        console.log(element);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              width: "35px",
              src: element.partida_volta.time_mandante.escudo,
              alt: element.partida_volta.time_mandante.nome_popular
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_volta.time_mandante.nome_popular
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_volta.placar_mandante
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: "x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_volta.placar_visitante
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: element.partida_volta.time_visitante.nome_popular
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              width: "35px",
              src: element.partida_volta.time_visitante.escudo,
              alt: element.partida_volta.time_visitante.nome_popular
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("td", {
              children: [element.partida_volta.data_realizacao, " -", " ", element.partida_volta.hora_realizacao]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 11
          }, this)]
        }, element.fase_id, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, this);
      });
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Header_Home_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Header_Home_UnderHeaderImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: "Copa do Brasil"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")`
        },
        className: "  p-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: " shadow-sm p-5 bg-body rounded d-flex justify-content-center ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "d-flex justify-content-evenly flex-wrap ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              className: "  text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
                id: "title",
                children: "Pr\xF3xima Fase - Jogo Ida"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ReactContentLoader_ReactLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                width: 400,
                height: 220
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 39
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Styles_tableStyled__WEBPACK_IMPORTED_MODULE_4__["TableViews"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tbody", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tr", {
                    children: this.renderTableHeader(["#", "MANDANTE", "GOLS", "", "GOLS", "VISITANTE", "#", "Data Prevista"])
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 23
                  }, this), this.renderTableNextRounds()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
                className: "mt-5",
                id: "title",
                children: "Pr\xF3xima Fase - Jogo Volta"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ReactContentLoader_ReactLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                width: 400,
                height: 220
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 39
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Styles_tableStyled__WEBPACK_IMPORTED_MODULE_4__["TableViews"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tbody", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tr", {
                    children: this.renderTableHeader(["#", "MANDANTE", "GOLS", "", "GOLS", "VISITANTE", "#", "Data Prevista"])
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 23
                  }, this), this.renderTableNextRoundsReturnGame()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              className: " pt-5 text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
                id: "title",
                children: "Artilharia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ReactContentLoader_ReactLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                width: 400,
                height: 220
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 39
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Styles_tableStyled__WEBPACK_IMPORTED_MODULE_4__["TableViews"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tbody", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tr", {
                    children: this.renderTableHeader(["#", "TIME", "NOME", "GOLS"])
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 21
                  }, this), this.renderTableTopScore()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ViewTableCopaBrasil);

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
//# sourceMappingURL=main.9e7cbd8db2c6c2c868d9.hot-update.js.map