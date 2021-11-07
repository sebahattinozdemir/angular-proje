(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/EMIR/Desktop/angular-proje/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0jKK": function jKK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWTTokenService", function () {
        return JWTTokenService;
      });
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JWTTokenService = /*#__PURE__*/function () {
        function JWTTokenService() {
          _classCallCheck(this, JWTTokenService);
        }

        _createClass(JWTTokenService, [{
          key: "setToken",
          value: function setToken(token) {
            if (token) {
              this.jwtToken = token;
            }
          }
        }, {
          key: "decodeToken",
          value: function decodeToken() {
            if (this.jwtToken) {
              this.decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.jwtToken);
            }
          }
        }, {
          key: "getDecodeToken",
          value: function getDecodeToken() {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.jwtToken);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            this.decodeToken();
            return this.decodedToken ? this.decodedToken.name : null;
          }
        }, {
          key: "getEmailId",
          value: function getEmailId() {
            this.decodeToken();
            return this.decodedToken ? this.decodedToken.email : null;
          }
        }, {
          key: "getExpiryTime",
          value: function getExpiryTime() {
            this.decodeToken();
            return this.decodedToken ? this.decodedToken.exp : null;
          }
        }, {
          key: "isTokenExpired",
          value: function isTokenExpired() {
            var expiryTime = Number(this.getExpiryTime());

            if (expiryTime) {
              return 1000 * expiryTime - new Date().getTime() < 5000;
            } else {
              return false;
            }
          }
        }]);

        return JWTTokenService;
      }();

      JWTTokenService.ɵfac = function JWTTokenService_Factory(t) {
        return new (t || JWTTokenService)();
      };

      JWTTokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: JWTTokenService,
        factory: JWTTokenService.ɵfac
      });
      /***/
    },

    /***/
    "1LmZ": function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 7,
        vars: 0,
        consts: [[1, "row"], [1, "column", 2, "background-color", "#aaa"], [1, "column", 2, "background-color", "#bbb"], [1, "column", 2, "background-color", "#ccc"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  height: 300px; \n}\n\n@media (max-width: 600px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFFRSxhQUFhO0FBQ2Y7QUFFQSw0REFBNEQ7QUFDNUQ7RUFHRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLGFBQWEsRUFBRSw4Q0FBOEM7QUFDL0Q7QUFFQSx5R0FBeUc7QUFDekc7RUFDRTtJQUVFLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRhaW5lciBmb3IgZmxleGJveGVzICovXG4ucm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4uY29sdW1uIHtcbiAgLXdlYmtpdC1mbGV4OiAxO1xuICAtbXMtZmxleDogMTtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDsgLyogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKi9cbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdGhyZWUgY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yb3cge1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "4pGF": function pGF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StarsComponent", function () {
        return StarsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function StarsComponent_p_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.rate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.rate == 0 ? "far fa-star" : ctx_r0.rate > 0 && ctx_r0.rate < 1 ? "fas fa-star-half-alt" : "fas fa-star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.rate > 1 && ctx_r0.rate < 2 ? "fas fa-star-half-alt" : ctx_r0.rate >= 2 ? "fas fa-star" : "far fa-star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.rate > 2 && ctx_r0.rate < 3 ? "fas fa-star-half-alt" : ctx_r0.rate >= 3 ? "fas fa-star" : "far fa-star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.rate > 3 && ctx_r0.rate < 4 ? "fas fa-star-half-alt" : ctx_r0.rate >= 4 ? "fas fa-star" : "far fa-star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.rate > 4 && ctx_r0.rate < 5 ? "fas fa-star-half-alt" : ctx_r0.rate >= 5 ? "fas fa-star" : "far fa-star");
        }
      }

      var StarsComponent = /*#__PURE__*/function () {
        function StarsComponent() {
          _classCallCheck(this, StarsComponent);
        }

        _createClass(StarsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StarsComponent;
      }();

      StarsComponent.ɵfac = function StarsComponent_Factory(t) {
        return new (t || StarsComponent)();
      };

      StarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StarsComponent,
        selectors: [["app-stars"]],
        inputs: {
          rate: "rate"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "product-rating", 4, "ngIf"], [1, "product-rating"], [1, "mr-3"]],
        template: function StarsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StarsComponent_p_0_Template, 8, 11, "p", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFycy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "7ch9": function ch9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var src_app_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/components/loading/loading.component */
      "fqV1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService( // tslint:disable-next-line:ban-types
        componentFactoryResolver, appRef, injector) {
          _classCallCheck(this, LoadingService);

          this.componentFactoryResolver = componentFactoryResolver;
          this.appRef = appRef;
          this.injector = injector;
        }

        _createClass(LoadingService, [{
          key: "hide",
          value: function hide() {
            if (this.componentRef) {
              this.appRef.detachView(this.componentRef.hostView);
              this.componentRef.destroy();
            }
          }
        }, {
          key: "show",
          value: function show() {
            var _this = this;

            var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.componentRef) {
              this.appRef.detachView(this.componentRef.hostView);
              this.componentRef.destroy();
            } // Create a component reference from the component


            this.componentRef = this.componentFactoryResolver.resolveComponentFactory(src_app_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"]).create(this.injector); // Attach component to the appRef so that it's inside the ng component tree

            this.appRef.attachView(this.componentRef.hostView); // Get DOM element from component

            var domElem = this.componentRef.hostView.rootNodes[0]; // Append DOM element to the body

            document.body.appendChild(domElem); // Wait some time and remove it from the component tree and from the DOM

            if (duration && duration > 0) {
              setTimeout(function () {
                _this.appRef.detachView(_this.componentRef.hostView);

                _this.componentRef.destroy();
              }, duration);
            }
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ɵfac = function LoadingService_Factory(t) {
        return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
      };

      LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoadingService,
        factory: LoadingService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DRYZ": function DRYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService() {
          _classCallCheck(this, LocalStorageService);
        }

        _createClass(LocalStorageService, [{
          key: "set",
          value: function set(key, value) {
            localStorage.setItem(key, value);
          }
        }, {
          key: "get",
          value: function get(key) {
            return localStorage.getItem(key);
          }
        }, {
          key: "remove",
          value: function remove(key) {
            localStorage.removeItem(key);
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
        return new (t || LocalStorageService)();
      };

      LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalStorageService,
        factory: LocalStorageService.ɵfac
      });
      /***/
    },

    /***/
    "FA0v": function FA0v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
        return ProductDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/message.service */
      "tZre");
      /* harmony import */


      var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/stars/stars.component */
      "4pGF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ProductDetailComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product.product_detail_info);
        }
      }

      function ProductDetailComponent_ng_template_36_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-stars", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", item_r6.rate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, item_r6.date, "dd/MM/yyyy"));
        }
      }

      function ProductDetailComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailComponent_ng_template_36_div_0_Template, 9, 6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_36_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return ctx_r7.modalService.open(_r3, {
              centered: true
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.product.productComments);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "selected": a0
        };
      };

      function ProductDetailComponent_ng_template_38_ul_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_38_ul_15_Template_li_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var star_r11 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.countStar(star_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var star_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, star_r11 <= ctx_r10.selectedValue));
        }
      }

      function ProductDetailComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_38_Template_button_click_3_listener() {
            var modal_r9 = ctx.$implicit;
            return modal_r9.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_ng_template_38_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.comment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Give Star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductDetailComponent_ng_template_38_ul_15_Template, 3, 3, "ul", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_38_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.addComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.stars);
        }
      }

      var ProductDetailComponent = /*#__PURE__*/function () {
        function ProductDetailComponent(productService, modalService, activeModal, messageService) {
          _classCallCheck(this, ProductDetailComponent);

          this.productService = productService;
          this.modalService = modalService;
          this.activeModal = activeModal;
          this.messageService = messageService;
          this.active = 1;
          this.stars = [1, 2, 3, 4, 5];
        }

        _createClass(ProductDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTodayDate();
            var data = localStorage.getItem(this.productService.selectedProduct.id);

            if (data !== null) {
              this.product = JSON.parse(data);
            } else {
              this.product = this.productService.selectedProduct;
            }
          }
        }, {
          key: "getTodayDate",
          value: function getTodayDate() {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

            var yyyy = today.getFullYear();
            this.today = mm + '/' + dd + '/' + yyyy;
          }
        }, {
          key: "countStar",
          value: function countStar(star) {
            this.selectedValue = star;
          }
        }, {
          key: "addComment",
          value: function addComment() {
            this.modalService.dismissAll();
            this.messageService.show('success', 'Succesfully added');
            this.product.numberof_comments = Number(this.product.numberof_comments) + 1;
            this.product.productComments.push({
              date: this.today,
              rate: this.selectedValue,
              comment: this.comment
            });
            localStorage.setItem(this.product.id, JSON.stringify(this.product));
            this.comment = '';
            this.selectedValue = 0;
          }
        }]);

        return ProductDetailComponent;
      }();

      ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
        return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]));
      };

      ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDetailComponent,
        selectors: [["app-product-detail"]],
        decls: 40,
        vars: 14,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-4"], [3, "src"], [1, "col-8", "text-center"], [1, "mt-2"], [1, "description", "my-2"], [1, "price", "d-flex", "justify-content-end", "my-2"], [1, "mr-auto"], [1, "font-weight-bold"], [1, "comments", "d-flex", "justify-content-end", "align-self-end"], [3, "rate"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["content", ""], [4, "ngFor", "ngForOf"], [1, "d-flex", "my-2"], [1, "btn", "btn-primary", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "comment"], [1, "input-group"], ["type", "text", "id", "comment", "name", "comment", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "star"], ["class", "list-inline rating-list", "style", "display: inline-block", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "list-inline", "rating-list", 2, "display", "inline-block"], [3, "ngClass", "click"], [1, "fa", "fa-star"]],
        template: function ProductDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Arrival Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "` ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Comments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-stars", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function ProductDetailComponent_Template_ul_activeIdChange_27_listener($event) {
              return ctx.active = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Detailed Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductDetailComponent_ng_template_32_Template, 2, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Comments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProductDetailComponent_ng_template_36_Template, 4, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProductDetailComponent_ng_template_38_Template, 19, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.big_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.product_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.product_description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.product.product_price, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 11, ctx.product.arrival_date, "dd/MM/yyyy"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.numberof_comments, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.product.average_rating);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
          }
        },
        directives: [_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_4__["StarsComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [".rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tfloat: right;\n\tcolor: #ddd;\n\tpadding: 10px 5px;\n  \n  }\n  \n  .rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    ~ li[_ngcontent-%COMP%], .rating-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n\tcolor: #ffd700;\n  }\n  \n  .rating-list[_ngcontent-%COMP%] {\n\tdisplay: inline-block;\n\tlist-style: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGlCQUFpQjs7RUFFaEI7O0VBRUE7O0NBRUQsY0FBYztFQUNiOztFQUVBO0NBQ0QscUJBQXFCO0NBQ3JCLGdCQUFnQjtFQUNmIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nLWxpc3QgbGkge1xuXHRmbG9hdDogcmlnaHQ7XG5cdGNvbG9yOiAjZGRkO1xuXHRwYWRkaW5nOiAxMHB4IDVweDtcbiAgXG4gIH1cbiAgXG4gIC5yYXRpbmctbGlzdCBsaTpob3ZlcixcbiAgLnJhdGluZy1saXN0IGxpOmhvdmVyIH4gbGksIC5yYXRpbmctbGlzdCBsaS5zZWxlY3RlZCB7XG5cdGNvbG9yOiAjZmZkNzAwO1xuICB9XG4gIFxuICAucmF0aW5nLWxpc3Qge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "Gdn9": function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
        }

        _createClass(ProductService, [{
          key: "getProducts",
          value: function getProducts() {
            return this.http.get('/assets/json/products.json');
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Lino": function Lino(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function () {
        return LoginModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/loading.service */
      "7ch9");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/message.service */
      "tZre");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/jwttoken.service */
      "0jKK");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "DRYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginModalComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Username field is required.");
        }
      }

      function LoginModalComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginModalComponent_div_11_div_1_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.username.errors == null ? null : ctx_r0.username.errors.required);
        }
      }

      function LoginModalComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Password field is required.");
        }
      }

      function LoginModalComponent_div_16_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("You should be more than 6 characters");
        }
      }

      function LoginModalComponent_div_16_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("You should not be more than 16 characters");
        }
      }

      function LoginModalComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginModalComponent_div_16_div_1_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginModalComponent_div_16_div_2_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginModalComponent_div_16_div_3_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.maxlength);
        }
      }

      var LoginModalComponent = /*#__PURE__*/function () {
        function LoginModalComponent(formBuilder, loadingService, messageService, router, jwt, auth, storage) {
          _classCallCheck(this, LoginModalComponent);

          this.formBuilder = formBuilder;
          this.loadingService = loadingService;
          this.messageService = messageService;
          this.router = router;
          this.jwt = jwt;
          this.auth = auth;
          this.storage = storage;
          this.validForm = false;
          this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(LoginModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formBuild();
          }
        }, {
          key: "close",
          value: function close() {
            this.closeModal.emit();
          }
        }, {
          key: "formBuild",
          value: function formBuild() {
            var _this2 = this;

            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]]
            });
            this.loginForm.valueChanges.subscribe(function (obj) {
              _this2.validForm = _this2.loginForm.valid;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            //login simulation
            this.loadingService.show();

            if (this.username.value == 'user' && this.password.value == 'user123') {
              setTimeout(function () {
                _this3.loadingService.hide();
              }, 1000); // simulate token

              var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
              this.storage.set('token', JSON.stringify(token));
              this.auth.loggedIn = true;
              setTimeout(function () {
                _this3.close();

                _this3.router.navigate(['/product']);
              }, 1500);
            } else {
              setTimeout(function () {
                _this3.loadingService.hide();
              }, 1000);
              setTimeout(function () {
                _this3.messageService.show('Error', 'Password or username is incorrect', 'error');
              }, 2000);
            }
          }
        }, {
          key: "username",
          get: function get() {
            return this.loginForm.get('username');
          }
        }, {
          key: "password",
          get: function get() {
            return this.loginForm.get('password');
          }
        }]);

        return LoginModalComponent;
      }();

      LoginModalComponent.ɵfac = function LoginModalComponent_Factory(t) {
        return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JWTTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]));
      };

      LoginModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginModalComponent,
        selectors: [["app-login-modal"]],
        outputs: {
          closeModal: "closeModal"
        },
        decls: 29,
        vars: 4,
        consts: [[1, "modal"], [1, "modal-content", "animate", 3, "formGroup", "ngSubmit"], [1, "imgcontainer"], ["title", "Close Modal", 1, "close", 3, "click"], ["src", "./../../../assets/images/img_avatar2.png", "alt", "Avatar", 1, "avatar"], [1, "container"], ["for", "uname"], ["type", "text", "placeholder", "Enter Username", "type", "text", "name", "uname", "formControlName", "username", "required", ""], [4, "ngIf"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "psw", "required", "", "formControlName", "password", "maxlength", "25"], ["type", "submit", 3, "disabled"], ["type", "checkbox", "checked", "checked", "name", "remember"], [1, "container", 2, "background-color", "#f1f1f1"], ["type", "button", 1, "cancelbtn", 3, "click"], [1, "psw"], ["href", "#"], [2, "color", "tomato", "font-size", "small"]],
        template: function LoginModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginModalComponent_Template_form_ngSubmit_1_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModalComponent_Template_span_click_3_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginModalComponent_div_11_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginModalComponent_div_16_Template, 4, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Remember me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModalComponent_Template_button_click_23_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forgot ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.invalid && (ctx.username.dirty || ctx.username.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]],
        styles: ["input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #04AA6D;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  }\nbutton[_ngcontent-%COMP%]:disabled {\n    opacity: 0.5;\n  }\nbutton[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n.cancelbtn[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n  }\n\n.imgcontainer[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n  }\nimg.avatar[_ngcontent-%COMP%] {\n    width: 40%;\n    border-radius: 50%;\n  }\n.container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\nspan.psw[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 16px;\n  }\n\n.modal[_ngcontent-%COMP%] {\n    display: block; \n    position: fixed; \n    z-index: 1; \n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4); \n    padding-top: 60px;\n  }\n\n.modal-content[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; \n    border: 1px solid #888;\n    width: 40%; \n  }\n\n.close[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n  }\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n    color: red;\n    cursor: pointer;\n  }\n\n.animate[_ngcontent-%COMP%] {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n  }\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n  }\n@keyframes animatezoom {\n    from {transform: scale(0)} \n    to {transform: scale(1)}\n  }\n\n@media screen and (max-width: 300px) {\n    span.psw[_ngcontent-%COMP%] {\n       display: block;\n       float: none;\n    }\n    .cancelbtn[_ngcontent-%COMP%] {\n       width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7QUFFQSxtREFBbUQ7QUFDbkQ7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0UsY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsaUJBQWlCO0VBQ25CO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtJQUNoRixzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtFQUNsRTtBQUVBLHlCQUF5QjtBQUN6QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUE7O0lBRUUsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFFQSx1QkFBdUI7QUFDdkI7SUFDRSxtQ0FBbUM7SUFDbkM7RUFDRjtBQUVBO0lBQ0UsTUFBTSwyQkFBMkI7SUFDakMsSUFBSSwyQkFBMkI7RUFDakM7QUFFQTtJQUNFLE1BQU0sbUJBQW1CO0lBQ3pCLElBQUksbUJBQW1CO0VBQ3pCO0FBRUEsb0VBQW9FO0FBQ3BFO0lBQ0U7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7RUFDRiIsImZpbGUiOiJsb2dpbi1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAvKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIFxuICAvKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4gIC5jYW5jZWxidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIFxuICAvKiBDZW50ZXIgdGhlIGltYWdlIGFuZCBwb3NpdGlvbiB0aGUgY2xvc2UgYnV0dG9uICovXG4gIC5pbWdjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICBpbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICBcbiAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuICAubW9kYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG4gIFxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA0MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG4gIH1cbiAgXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4gIC5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLyogQWRkIFpvb20gQW5pbWF0aW9uICovXG4gIC5hbmltYXRlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcbiAgICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnNcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcbiAgICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9IFxuICAgIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XG4gIH1cbiAgICBcbiAgQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XG4gIH1cbiAgXG4gIC8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    "LjFu": function LjFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/jwttoken.service */
      "0jKK");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, auth, jwtService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.auth = auth;
          this.jwtService = jwtService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.jwtService.getUser()) {
              if (this.jwtService.isTokenExpired()) {
                // Should Redirect Sig-In Page
                this.router.navigate(['/']);
              } else {
                return true;
              }
            } else {
              this.router.navigate(['/']);
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_3__["JWTTokenService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /***/
    },

    /***/
    "Sc0o": function Sc0o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(request, authService) {
          _classCallCheck(this, TokenInterceptor);

          this.request = request;
          this.authService = authService;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = this.authService.getJWTToken();
            req = req.clone({
              url: req.url,
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
            return next.handle(req);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Request, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/jwttoken.service */
      "0jKK");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/local-storage.service */
      "DRYZ");
      /* harmony import */


      var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/components/footer/footer.component */
      "aF9I");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(jwt, auth, local) {
          _classCallCheck(this, AppComponent);

          this.jwt = jwt;
          this.auth = auth;
          this.local = local;
          this.title = 'angular-tour-of-heroes';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var token = this.local.get('token');

            if (token != null) {
              var data = JSON.parse(token);
              this.jwt.setToken(data);
            }

            if (this.jwt.getUser()) {
              this.auth.loggedIn = true;
            } else {
              this.auth.loggedIn = false;
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_1__["JWTTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        styles: ["*[_ngcontent-%COMP%] {box-sizing: border-box;}\n\nbody[_ngcontent-%COMP%] { \n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0UsU0FBUztFQUNULHlDQUF5QztFQUN6QyxhQUFhO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cblxuYm9keSB7IFxuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _shared_components_header_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/components/header/login-modal/login-modal.component */
      "Lino");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/components/loading/loading.component */
      "fqV1");
      /* harmony import */


      var _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/products/products/products.component */
      "o4Gu");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      "LjFu");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/products/pages/product-detail/product-detail.component */
      "FA0v");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/pipes/capitaliaze-first.pipe */
      "arJk");
      /* harmony import */


      var _shared_interceptors_universal_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/interceptors/universal.interceptor */
      "h8aq");
      /* harmony import */


      var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/interceptors/token.interceptor */
      "Sc0o");
      /* harmony import */


      var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/jwttoken.service */
      "0jKK");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/local-storage.service */
      "DRYZ");
      /* harmony import */


      var _pages_products_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/products/components/stars/stars.component */
      "4pGF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _services_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"], _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_19__["JWTTokenService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbActiveModal"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__["LocalStorageService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_universal_interceptor__WEBPACK_IMPORTED_MODULE_17__["UniversalInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _shared_components_header_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_4__["LoginModalComponent"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"], _shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_16__["CapitalizeFirstPipe"], _pages_products_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_21__["StarsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]],
          exports: [_shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_16__["CapitalizeFirstPipe"]]
        });
      })();
      /***/

    },

    /***/
    "aF9I": function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 3,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "aZ8m": function aZ8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/loading.service */
      "7ch9");
      /* harmony import */


      var src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/jwttoken.service */
      "0jKK");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "DRYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login-modal/login-modal.component */
      "Lino");

      function HeaderComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_app_login_modal_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login-modal", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeModal", function HeaderComponent_app_login_modal_10_Template_app_login_modal_closeModal_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(auth, router, loadingService, jwt, storage) {
          _classCallCheck(this, HeaderComponent);

          this.auth = auth;
          this.router = router;
          this.loadingService = loadingService;
          this.jwt = jwt;
          this.storage = storage;
          this.isLoginModalOpen = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            this.isLoginModalOpen = true;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.isLoginModalOpen = false;
          }
        }, {
          key: "logOut",
          value: function logOut() {
            var _this4 = this;

            //log out simulation
            this.loadingService.show();
            this.storage.remove("token");
            setTimeout(function () {
              _this4.auth.loggedIn = false;

              _this4.router.navigate(['/']);

              _this4.loadingService.hide();
            }, 1000);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_4__["JWTTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 5,
        consts: [[1, "header"], ["href", "#default", 1, "logo"], [1, "header-right"], [1, "active", 3, "routerLink"], [3, "routerLink"], ["style", "width: auto", 3, "click", 4, "ngIf"], [3, "closeModal", 4, "ngIf"], [2, "width", "auto", 3, "click"], [3, "closeModal"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CompanyLogo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_app_login_modal_10_Template, 1, 0, "app-login-modal", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginModalOpen);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginModalComponent"]],
        styles: [".header[_ngcontent-%COMP%] {\n    overflow: hidden;\n    background-color: #f1f1f1;\n    padding: 20px 10px;\n  }\n  \n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: left;\n    color: black;\n    text-align: center;\n    padding: 12px;\n    text-decoration: none;\n    font-size: 18px; \n    line-height: 25px;\n    border-radius: 4px;\n  }\n  \n  .header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: bold;\n  }\n  \n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #ddd;\n    color: black;\n  }\n  \n  .header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: dodgerblue;\n    color: white;\n  }\n  \n  .header-right[_ngcontent-%COMP%] {\n    float: right;\n  }\n  \n  @media screen and (max-width: 500px) {\n    .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      float: none;\n      display: block;\n      text-align: left;\n    }\n    \n    .header-right[_ngcontent-%COMP%] {\n      float: none;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLFdBQVc7SUFDYjs7QUFFSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7IFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmhlYWRlciBhLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmhlYWRlciBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmhlYWRlciBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuaGVhZGVyIGEge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXItcmlnaHQge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuXG59XG5cblxuXG5cblxuIl19 */"]
      });
      /***/
    },

    /***/
    "arJk": function arJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapitalizeFirstPipe", function () {
        return CapitalizeFirstPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CapitalizeFirstPipe = /*#__PURE__*/function () {
        function CapitalizeFirstPipe() {
          _classCallCheck(this, CapitalizeFirstPipe);
        }

        _createClass(CapitalizeFirstPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value === null) {
              return 'Not assigned';
            }

            return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
          }
        }]);

        return CapitalizeFirstPipe;
      }();

      CapitalizeFirstPipe.ɵfac = function CapitalizeFirstPipe_Factory(t) {
        return new (t || CapitalizeFirstPipe)();
      };

      CapitalizeFirstPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "capitalizefirst",
        type: CapitalizeFirstPipe,
        pure: true
      });
      /***/
    },

    /***/
    "fqV1": function fqV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent() {
          _classCallCheck(this, LoadingComponent);
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
        return new (t || LoadingComponent)();
      };

      LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadingComponent,
        selectors: [["app-loading"]],
        decls: 6,
        vars: 0,
        consts: [[1, "loading-container", "visible"], [1, "loading"], [1, "spinner"], [1, "loading-message"]],
        template: function LoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".loading-container[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 99999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: 0.2s all linear;\n    visibility: hidden;\n    opacity: 0;\n  }\n  \n  .loading-container.visible[_ngcontent-%COMP%] {\n    visibility: visible;\n    opacity: 1;\n  }\n  \n  .loading-container[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n    min-width: 250px;\n    padding: 20px 30px;\n    border-radius: 5px;\n    background-color: rgba(2, 2, 30, 0.7);\n    overflow: hidden;\n    text-align: center;\n  }\n  \n  .loading-container[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n    font-weight: 600;\n    margin: 3px 0 -5px 0;\n    display: block;\n    font-size: 13px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #fff;\n  }\n  \n  .loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n    background: none;\n    position: relative;\n    display: inline-block;\n    left: 1px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    -webkit-animation: spin 1.2s linear infinite;\n    animation: spin 1.2s linear infinite;\n    border: 3px solid #f3f3f3;\n    border-top-color: #cd1c7e;\n  }\n  \n  @-webkit-keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUdkLGFBQWE7SUFHTCx1QkFBdUI7SUFHdkIsbUJBQW1CO0lBRTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx5QkFBeUI7SUFDbkM7RUFDRjs7RUFFQTtJQUNFO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx5QkFBeUI7SUFDbkM7RUFDRiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmxvYWRpbmctY29udGFpbmVyLnZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAyLCAzMCwgMC43KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nLW1lc3NhZ2Uge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAzcHggMCAtNXB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5sb2FkaW5nLWNvbnRhaW5lciAuc3Bpbm5lciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxlZnQ6IDFweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNjZDFjN2U7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "h8aq": function h8aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniversalInterceptor", function () {
        return UniversalInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");

      var UniversalInterceptor = /*#__PURE__*/function () {
        function UniversalInterceptor(request, authService) {
          _classCallCheck(this, UniversalInterceptor);

          this.request = request;
          this.authService = authService;
        }

        _createClass(UniversalInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var serverReq = req; // Local /url gibi başlayan urller için başına kendi adresini ekle.

            if (this.request && !serverReq.url.startsWith('http')) {
              var newUrl = "".concat(this.request.protocol, "://").concat(this.request.get('host'));

              if (!req.url.startsWith('/')) {
                newUrl += '/';
              }

              newUrl += req.url;
              serverReq = req.clone({
                url: newUrl
              });
            }

            return next.handle(serverReq);
          }
        }]);

        return UniversalInterceptor;
      }();

      UniversalInterceptor.ɵfac = function UniversalInterceptor_Factory(t) {
        return new (t || UniversalInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Request, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      UniversalInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UniversalInterceptor,
        factory: UniversalInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "lGQG": function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _jwttoken_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jwttoken.service */
      "0jKK");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(jwtTokenService) {
          _classCallCheck(this, AuthService);

          this.jwtTokenService = jwtTokenService;
          this.loggedIn = false;
        }

        _createClass(AuthService, [{
          key: "getJWTToken",
          value: function getJWTToken() {
            this.jwtTokenService.getDecodeToken();
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jwttoken_service__WEBPACK_IMPORTED_MODULE_1__["JWTTokenService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "o4Gu": function o4Gu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/stars/stars.component */
      "4pGF");
      /* harmony import */


      var _shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/pipes/capitaliaze-first.pipe */
      "arJk");

      function ProductsComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_li_13_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var product_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.navigateProductDetail(product_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "capitalizefirst");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-stars", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", product_r1.small_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, product_r1.product_name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $ ", product_r1.product_price, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", product_r1.average_rating);
        }
      }

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(productService, router) {
          _classCallCheck(this, ProductsComponent);

          this.productService = productService;
          this.router = router;
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProducts();
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.productService.getProducts().subscribe(function (products) {
                        _this5.productData = products;
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateProductDetail",
          value: function navigateProductDetail(product) {
            this.productService.selectedProduct = product;
            this.router.navigate(["product/product-detail/".concat(product.id)]);
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        decls: 14,
        vars: 1,
        consts: [[1, "container"], [1, "responsive-table"], [1, "table-header"], [1, "col", "col-1"], [1, "col", "col-2", 2, "margin-left", "5%"], [1, "col", "col-3"], [1, "col", "col-4"], ["class", "table-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "click"], ["data-label", "Job Id", 1, "col", "col-1"], [3, "src"], ["data-label", "Customer Name", 1, "col", "col-2", 2, "display", "flex", "align-self", "center", "margin-left", "5%"], ["data-label", "Amount", 1, "col", "col-3", 2, "display", "flex", "align-self", "center"], ["data-label", "Payment Status", 1, "col", "col-4", 2, "display", "flex", "align-self", "center"], [3, "rate"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PRODUCTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Rating");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductsComponent_li_13_Template, 11, 6, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_5__["StarsComponent"]],
        pipes: [_shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalizeFirstPipe"]],
        styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin: 20px 0;\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n}\n\n.responsive-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding: 25px 30px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #95a5a6;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n  flex-basis: 40%;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n}\n\n@media all and (max-width: 767px) {\n  .responsive-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  }\n  .responsive-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 10px 0;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]::before {\n    color: #6c7a89;\n    padding-right: 10px;\n    content: attr(data-label);\n    flex-basis: 50%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRDs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0VBQ0E7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaDIgc21hbGwge1xuICBmb250LXNpemU6IDAuNWVtO1xufVxuXG4ucmVzcG9uc2l2ZS10YWJsZSBsaSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMjVweCAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1YTVhNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTEge1xuICBmbGV4LWJhc2lzOiAxMCU7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTIge1xuICBmbGV4LWJhc2lzOiA0MCU7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTMge1xuICBmbGV4LWJhc2lzOiAyNSU7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTQge1xuICBmbGV4LWJhc2lzOiAyNSU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5yZXNwb25zaXZlLXRhYmxlIC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLXJvdyB7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5yZXNwb25zaXZlLXRhYmxlIC5jb2wge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbDo6YmVmb3JlIHtcbiAgICBjb2xvcjogIzZjN2E4OTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "tZre": function tZre(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessageService = /*#__PURE__*/function () {
        function MessageService() {
          _classCallCheck(this, MessageService);
        }

        _createClass(MessageService, [{
          key: "show",
          value: function show(title, text) {
            var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(Object.assign({
              icon: icon,
              title: title,
              text: text
            }, options));
          }
        }]);

        return MessageService;
      }();

      MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || MessageService)();
      };

      MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: MessageService,
        factory: MessageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A": function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/products/pages/product-detail/product-detail.component */
      "FA0v");
      /* harmony import */


      var _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/products/products/products.component */
      "o4Gu");
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      "LjFu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: 'product',
        component: _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'product/product-detail/:id',
        component: _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          initialNavigation: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map