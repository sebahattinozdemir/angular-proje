(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/EMIR/Desktop/angular-proje/src/main.ts */"zUnb");


/***/ }),

/***/ "0jKK":
/*!**********************************************!*\
  !*** ./src/app/services/jwttoken.service.ts ***!
  \**********************************************/
/*! exports provided: JWTTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTTokenService", function() { return JWTTokenService; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JWTTokenService {
    constructor() {
    }
    setToken(token) {
        if (token) {
            this.jwtToken = token;
        }
    }
    decodeToken() {
        if (this.jwtToken) {
            this.decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.jwtToken);
        }
    }
    getDecodeToken() {
        return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.jwtToken);
    }
    getUser() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.name : null;
    }
    getEmailId() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.email : null;
    }
    getExpiryTime() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.exp : null;
    }
    isTokenExpired() {
        const expiryTime = Number(this.getExpiryTime());
        if (expiryTime) {
            return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        }
        else {
            return false;
        }
    }
}
JWTTokenService.??fac = function JWTTokenService_Factory(t) { return new (t || JWTTokenService)(); };
JWTTokenService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: JWTTokenService, factory: JWTTokenService.??fac });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "row"], [1, "column", 2, "background-color", "#aaa"], [1, "column", 2, "background-color", "#bbb"], [1, "column", 2, "background-color", "#ccc"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  height: 300px; \n}\n\n@media (max-width: 600px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFFRSxhQUFhO0FBQ2Y7QUFFQSw0REFBNEQ7QUFDNUQ7RUFHRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLGFBQWEsRUFBRSw4Q0FBOEM7QUFDL0Q7QUFFQSx5R0FBeUc7QUFDekc7RUFDRTtJQUVFLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRhaW5lciBmb3IgZmxleGJveGVzICovXG4ucm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4uY29sdW1uIHtcbiAgLXdlYmtpdC1mbGV4OiAxO1xuICAtbXMtZmxleDogMTtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDsgLyogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKi9cbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdGhyZWUgY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yb3cge1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "4pGF":
/*!********************************************************************!*\
  !*** ./src/app/pages/products/components/stars/stars.component.ts ***!
  \********************************************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function StarsComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r0.rate == 0 ? "far fa-star" : ctx_r0.rate > 0 && ctx_r0.rate < 1 ? "fas fa-star-half-alt" : "fas fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r0.rate > 1 && ctx_r0.rate < 2 ? "fas fa-star-half-alt" : ctx_r0.rate >= 2 ? "fas fa-star" : "far fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r0.rate > 2 && ctx_r0.rate < 3 ? "fas fa-star-half-alt" : ctx_r0.rate >= 3 ? "fas fa-star" : "far fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r0.rate > 3 && ctx_r0.rate < 4 ? "fas fa-star-half-alt" : ctx_r0.rate >= 4 ? "fas fa-star" : "far fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r0.rate > 4 && ctx_r0.rate < 5 ? "fas fa-star-half-alt" : ctx_r0.rate >= 5 ? "fas fa-star" : "far fa-star");
} }
class StarsComponent {
    constructor() { }
    ngOnInit() {
    }
}
StarsComponent.??fac = function StarsComponent_Factory(t) { return new (t || StarsComponent)(); };
StarsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StarsComponent, selectors: [["app-stars"]], inputs: { rate: "rate" }, decls: 1, vars: 1, consts: [["class", "product-rating", 4, "ngIf"], [1, "product-rating"], [1, "mr-3"]], template: function StarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, StarsComponent_p_0_Template, 8, 11, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.rate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFycy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "7ch9":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var src_app_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/loading/loading.component */ "fqV1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingService {
    constructor(
    // tslint:disable-next-line:ban-types
    componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    hide() {
        if (this.componentRef) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
        }
    }
    show(duration = 0) {
        if (this.componentRef) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
        }
        // Create a component reference from the component
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(src_app_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"])
            .create(this.injector);
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this.componentRef.hostView);
        // Get DOM element from component
        const domElem = this.componentRef.hostView.rootNodes[0];
        // Append DOM element to the body
        document.body.appendChild(domElem);
        // Wait some time and remove it from the component tree and from the DOM
        if (duration && duration > 0) {
            setTimeout(() => {
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
            }, duration);
        }
    }
}
LoadingService.??fac = function LoadingService_Factory(t) { return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
LoadingService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: LoadingService, factory: LoadingService.??fac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "DRYZ":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalStorageService {
    set(key, value) {
        localStorage.setItem(key, value);
    }
    get(key) {
        return localStorage.getItem(key);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
LocalStorageService.??fac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.??fac });


/***/ }),

/***/ "FA0v":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/products/pages/product-detail/product-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/stars/stars.component */ "4pGF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ProductDetailComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.product.product_detail_info);
} }
function ProductDetailComponent_ng_template_36_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-stars", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r6.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", item_r6.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 3, item_r6.date, "dd/MM/yyyy"));
} }
function ProductDetailComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProductDetailComponent_ng_template_36_div_0_Template, 9, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailComponent_ng_template_36_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39); return ctx_r7.modalService.open(_r3, { centered: true }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.product.productComments);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function ProductDetailComponent_ng_template_38_ul_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailComponent_ng_template_38_ul_15_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const star_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r12.countStar(star_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const star_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, star_r11 <= ctx_r10.selectedValue));
} }
function ProductDetailComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailComponent_ng_template_38_Template_button_click_3_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductDetailComponent_ng_template_38_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Give Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ProductDetailComponent_ng_template_38_ul_15_Template, 3, 3, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailComponent_ng_template_38_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.addComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.stars);
} }
class ProductDetailComponent {
    constructor(productService, modalService, activeModal, messageService) {
        this.productService = productService;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.messageService = messageService;
        this.active = 1;
        this.stars = [1, 2, 3, 4, 5];
    }
    ngOnInit() {
        this.getTodayDate();
        let data = localStorage.getItem(this.productService.selectedProduct.id);
        if (data !== null) {
            this.product = JSON.parse(data);
        }
        else {
            this.product = this.productService.selectedProduct;
        }
    }
    getTodayDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        this.today = mm + '/' + dd + '/' + yyyy;
    }
    countStar(star) {
        this.selectedValue = star;
    }
    addComment() {
        this.modalService.dismissAll();
        this.messageService.show('success', 'Succesfully added');
        this.product.numberof_comments = Number(this.product.numberof_comments) + 1;
        this.product.productComments.push({
            date: this.today,
            rate: this.selectedValue,
            comment: this.comment,
        });
        localStorage.setItem(this.product.id, JSON.stringify(this.product));
        this.comment = '';
        this.selectedValue = 0;
    }
}
ProductDetailComponent.??fac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
ProductDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 40, vars: 14, consts: [[1, "container-fluid"], [1, "row"], [1, "col-4"], [3, "src"], [1, "col-8", "text-center"], [1, "mt-2"], [1, "description", "my-2"], [1, "price", "d-flex", "justify-content-end", "my-2"], [1, "mr-auto"], [1, "font-weight-bold"], [1, "comments", "d-flex", "justify-content-end", "align-self-end"], [3, "rate"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["content", ""], [4, "ngFor", "ngForOf"], [1, "d-flex", "my-2"], [1, "btn", "btn-primary", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "comment"], [1, "input-group"], ["type", "text", "id", "comment", "name", "comment", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "star"], ["class", "list-inline rating-list", "style", "display: inline-block", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "list-inline", "rating-list", 2, "display", "inline-block"], [3, "ngClass", "click"], [1, "fa", "fa-star"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Arrival Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "app-stars", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("activeIdChange", function ProductDetailComponent_Template_ul_activeIdChange_27_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Detailed Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ProductDetailComponent_ng_template_32_Template, 2, 1, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, ProductDetailComponent_ng_template_36_Template, 4, 1, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, ProductDetailComponent_ng_template_38_Template, 19, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.product.big_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product.product_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" $", ctx.product.product_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](19, 11, ctx.product.arrival_date, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.product.numberof_comments, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.product.average_rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavOutlet", _r0);
    } }, directives: [_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_4__["StarsComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tfloat: right;\n\tcolor: #ddd;\n\tpadding: 10px 5px;\n  \n  }\n  \n  .rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    ~ li[_ngcontent-%COMP%], .rating-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n\tcolor: #ffd700;\n  }\n  \n  .rating-list[_ngcontent-%COMP%] {\n\tdisplay: inline-block;\n\tlist-style: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGlCQUFpQjs7RUFFaEI7O0VBRUE7O0NBRUQsY0FBYztFQUNiOztFQUVBO0NBQ0QscUJBQXFCO0NBQ3JCLGdCQUFnQjtFQUNmIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nLWxpc3QgbGkge1xuXHRmbG9hdDogcmlnaHQ7XG5cdGNvbG9yOiAjZGRkO1xuXHRwYWRkaW5nOiAxMHB4IDVweDtcbiAgXG4gIH1cbiAgXG4gIC5yYXRpbmctbGlzdCBsaTpob3ZlcixcbiAgLnJhdGluZy1saXN0IGxpOmhvdmVyIH4gbGksIC5yYXRpbmctbGlzdCBsaS5zZWxlY3RlZCB7XG5cdGNvbG9yOiAjZmZkNzAwO1xuICB9XG4gIFxuICAucmF0aW5nLWxpc3Qge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ProductService {
    constructor(http) {
        this.http = http;
    }
    getProducts() {
        return this.http.get('/assets/json/products.json');
    }
}
ProductService.??fac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ProductService, factory: ProductService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Lino":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/header/login-modal/login-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loading.service */ "7ch9");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/jwttoken.service */ "0jKK");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "DRYZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function LoginModalComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("Username field is required.");
} }
function LoginModalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoginModalComponent_div_11_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.username.errors == null ? null : ctx_r0.username.errors.required);
} }
function LoginModalComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("Password field is required.");
} }
function LoginModalComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("You should be more than 6 characters");
} }
function LoginModalComponent_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("You should not be more than 16 characters");
} }
function LoginModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoginModalComponent_div_16_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LoginModalComponent_div_16_div_2_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LoginModalComponent_div_16_div_3_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.maxlength);
} }
class LoginModalComponent {
    constructor(formBuilder, loadingService, messageService, router, jwt, auth, storage) {
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
    ngOnInit() {
        this.formBuild();
    }
    close() {
        this.closeModal.emit();
    }
    formBuild() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16),
                ],
            ],
        });
        this.loginForm.valueChanges.subscribe((obj) => {
            this.validForm = this.loginForm.valid;
        });
    }
    onSubmit() {
        //login simulation
        this.loadingService.show();
        if (this.username.value == 'user' && this.password.value == 'user123') {
            setTimeout(() => {
                this.loadingService.hide();
            }, 1000);
            // simulate token
            let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            this.storage.set('token', JSON.stringify(token));
            this.auth.loggedIn = true;
            setTimeout(() => {
                this.close();
                this.router.navigate(['/product']);
            }, 1500);
        }
        else {
            setTimeout(() => {
                this.loadingService.hide();
            }, 1000);
            setTimeout(() => {
                this.messageService.show('Error', 'Password or username is incorrect', 'error');
            }, 2000);
        }
    }
    get username() {
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }
}
LoginModalComponent.??fac = function LoginModalComponent_Factory(t) { return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JWTTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"])); };
LoginModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginModalComponent, selectors: [["app-login-modal"]], outputs: { closeModal: "closeModal" }, decls: 29, vars: 4, consts: [[1, "modal"], [1, "modal-content", "animate", 3, "formGroup", "ngSubmit"], [1, "imgcontainer"], ["title", "Close Modal", 1, "close", 3, "click"], ["src", "./../../../assets/images/img_avatar2.png", "alt", "Avatar", 1, "avatar"], [1, "container"], ["for", "uname"], ["type", "text", "placeholder", "Enter Username", "type", "text", "name", "uname", "formControlName", "username", "required", ""], [4, "ngIf"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "psw", "required", "", "formControlName", "password", "maxlength", "25"], ["type", "submit", 3, "disabled"], ["type", "checkbox", "checked", "checked", "name", "remember"], [1, "container", 2, "background-color", "#f1f1f1"], ["type", "button", 1, "cancelbtn", 3, "click"], [1, "psw"], ["href", "#"], [2, "color", "tomato", "font-size", "small"]], template: function LoginModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginModalComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginModalComponent_Template_span_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, LoginModalComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, LoginModalComponent_div_16_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginModalComponent_Template_button_click_23_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Forgot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.username.invalid && (ctx.username.dirty || ctx.username.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.validForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #04AA6D;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  }\nbutton[_ngcontent-%COMP%]:disabled {\n    opacity: 0.5;\n  }\nbutton[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n.cancelbtn[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n  }\n\n.imgcontainer[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n  }\nimg.avatar[_ngcontent-%COMP%] {\n    width: 40%;\n    border-radius: 50%;\n  }\n.container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\nspan.psw[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 16px;\n  }\n\n.modal[_ngcontent-%COMP%] {\n    display: block; \n    position: fixed; \n    z-index: 1; \n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4); \n    padding-top: 60px;\n  }\n\n.modal-content[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; \n    border: 1px solid #888;\n    width: 40%; \n  }\n\n.close[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n  }\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n    color: red;\n    cursor: pointer;\n  }\n\n.animate[_ngcontent-%COMP%] {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n  }\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n  }\n@keyframes animatezoom {\n    from {transform: scale(0)} \n    to {transform: scale(1)}\n  }\n\n@media screen and (max-width: 300px) {\n    span.psw[_ngcontent-%COMP%] {\n       display: block;\n       float: none;\n    }\n    .cancelbtn[_ngcontent-%COMP%] {\n       width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7QUFFQSxtREFBbUQ7QUFDbkQ7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0UsY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsaUJBQWlCO0VBQ25CO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtJQUNoRixzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtFQUNsRTtBQUVBLHlCQUF5QjtBQUN6QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUE7O0lBRUUsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFFQSx1QkFBdUI7QUFDdkI7SUFDRSxtQ0FBbUM7SUFDbkM7RUFDRjtBQUVBO0lBQ0UsTUFBTSwyQkFBMkI7SUFDakMsSUFBSSwyQkFBMkI7RUFDakM7QUFFQTtJQUNFLE1BQU0sbUJBQW1CO0lBQ3pCLElBQUksbUJBQW1CO0VBQ3pCO0FBRUEsb0VBQW9FO0FBQ3BFO0lBQ0U7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7RUFDRiIsImZpbGUiOiJsb2dpbi1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAvKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIFxuICAvKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4gIC5jYW5jZWxidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIFxuICAvKiBDZW50ZXIgdGhlIGltYWdlIGFuZCBwb3NpdGlvbiB0aGUgY2xvc2UgYnV0dG9uICovXG4gIC5pbWdjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICBpbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICBcbiAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuICAubW9kYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG4gIFxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA0MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG4gIH1cbiAgXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4gIC5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLyogQWRkIFpvb20gQW5pbWF0aW9uICovXG4gIC5hbmltYXRlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcbiAgICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnNcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcbiAgICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9IFxuICAgIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XG4gIH1cbiAgICBcbiAgQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XG4gIH1cbiAgXG4gIC8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jwttoken.service */ "0jKK");




class AuthGuard {
    constructor(router, auth, jwtService) {
        this.router = router;
        this.auth = auth;
        this.jwtService = jwtService;
    }
    canActivate() {
        if (this.jwtService.getUser()) {
            if (this.jwtService.isTokenExpired()) {
                // Should Redirect Sig-In Page
                this.router.navigate(['/']);
            }
            else {
                return true;
            }
        }
        else {
            this.router.navigate(['/']);
        }
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_3__["JWTTokenService"])); };
AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac });


/***/ }),

/***/ "Sc0o":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/token.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");


class TokenInterceptor {
    constructor(request, authService) {
        this.request = request;
        this.authService = authService;
    }
    intercept(req, next) {
        const token = this.authService.getJWTToken();
        req = req.clone({
            url: req.url,
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next.handle(req);
    }
}
TokenInterceptor.??fac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](Request, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.??fac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/jwttoken.service */ "0jKK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/local-storage.service */ "DRYZ");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");







class AppComponent {
    constructor(jwt, auth, local) {
        this.jwt = jwt;
        this.auth = auth;
        this.local = local;
        this.title = 'angular-tour-of-heroes';
    }
    ngOnInit() {
        let token = this.local.get('token');
        if (token != null) {
            let data = JSON.parse(token);
            this.jwt.setToken(data);
        }
        if (this.jwt.getUser()) {
            this.auth.loggedIn = true;
        }
        else {
            this.auth.loggedIn = false;
        }
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_1__["JWTTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {box-sizing: border-box;}\n\nbody[_ngcontent-%COMP%] { \n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0UsU0FBUztFQUNULHlDQUF5QztFQUN6QyxhQUFhO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cblxuYm9keSB7IFxuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_header_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/header/login-modal/login-modal.component */ "Lino");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ "fqV1");
/* harmony import */ var _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/products/products/products.component */ "o4Gu");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/product.service */ "Gdn9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/products/pages/product-detail/product-detail.component */ "FA0v");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/pipes/capitaliaze-first.pipe */ "arJk");
/* harmony import */ var _shared_interceptors_universal_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/interceptors/universal.interceptor */ "h8aq");
/* harmony import */ var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/interceptors/token.interceptor */ "Sc0o");
/* harmony import */ var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/jwttoken.service */ "0jKK");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/local-storage.service */ "DRYZ");
/* harmony import */ var _pages_products_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/products/components/stars/stars.component */ "4pGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["????defineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"],
        _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_19__["JWTTokenService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbActiveModal"],
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__["LocalStorageService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_universal_interceptor__WEBPACK_IMPORTED_MODULE_17__["UniversalInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _shared_components_header_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_4__["LoginModalComponent"],
        _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"],
        _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"],
        _shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_16__["CapitalizeFirstPipe"],
        _pages_products_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_21__["StarsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]], exports: [_shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_16__["CapitalizeFirstPipe"]] }); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading.service */ "7ch9");
/* harmony import */ var src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jwttoken.service */ "0jKK");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "DRYZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-modal/login-modal.component */ "Lino");








function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.openModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_app_login_modal_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-login-modal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("closeModal", function HeaderComponent_app_login_modal_10_Template_app_login_modal_closeModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class HeaderComponent {
    constructor(auth, router, loadingService, jwt, storage) {
        this.auth = auth;
        this.router = router;
        this.loadingService = loadingService;
        this.jwt = jwt;
        this.storage = storage;
        this.isLoginModalOpen = false;
    }
    ngOnInit() { }
    openModal() {
        this.isLoginModalOpen = true;
    }
    closeModal() {
        this.isLoginModalOpen = false;
    }
    logOut() {
        //log out simulation
        this.loadingService.show();
        this.storage.remove("token");
        setTimeout(() => {
            this.auth.loggedIn = false;
            this.router.navigate(['/']);
            this.loadingService.hide();
        }, 1000);
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_jwttoken_service__WEBPACK_IMPORTED_MODULE_4__["JWTTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 5, consts: [[1, "header"], ["href", "#default", 1, "logo"], [1, "header-right"], [1, "active", 3, "routerLink"], [3, "routerLink"], ["style", "width: auto", 3, "click", 4, "ngIf"], [3, "closeModal", 4, "ngIf"], [2, "width", "auto", 3, "click"], [3, "closeModal"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "CompanyLogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HeaderComponent_a_8_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, HeaderComponent_a_9_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, HeaderComponent_app_login_modal_10_Template, 1, 0, "app-login-modal", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoginModalOpen);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginModalComponent"]], styles: [".header[_ngcontent-%COMP%] {\n    overflow: hidden;\n    background-color: #f1f1f1;\n    padding: 20px 10px;\n  }\n  \n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: left;\n    color: black;\n    text-align: center;\n    padding: 12px;\n    text-decoration: none;\n    font-size: 18px; \n    line-height: 25px;\n    border-radius: 4px;\n  }\n  \n  .header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: bold;\n  }\n  \n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #ddd;\n    color: black;\n  }\n  \n  .header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: dodgerblue;\n    color: white;\n  }\n  \n  .header-right[_ngcontent-%COMP%] {\n    float: right;\n  }\n  \n  @media screen and (max-width: 500px) {\n    .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      float: none;\n      display: block;\n      text-align: left;\n    }\n    \n    .header-right[_ngcontent-%COMP%] {\n      float: none;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLFdBQVc7SUFDYjs7QUFFSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7IFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmhlYWRlciBhLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmhlYWRlciBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmhlYWRlciBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuaGVhZGVyIGEge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXItcmlnaHQge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuXG59XG5cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "arJk":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/capitaliaze-first.pipe.ts ***!
  \********************************************************/
/*! exports provided: CapitalizeFirstPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeFirstPipe", function() { return CapitalizeFirstPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CapitalizeFirstPipe {
    transform(value) {
        if (value === null) {
            return 'Not assigned';
        }
        return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
    }
}
CapitalizeFirstPipe.??fac = function CapitalizeFirstPipe_Factory(t) { return new (t || CapitalizeFirstPipe)(); };
CapitalizeFirstPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "capitalizefirst", type: CapitalizeFirstPipe, pure: true });


/***/ }),

/***/ "fqV1":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.??fac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 6, vars: 0, consts: [[1, "loading-container", "visible"], [1, "loading"], [1, "spinner"], [1, "loading-message"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".loading-container[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 99999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: 0.2s all linear;\n    visibility: hidden;\n    opacity: 0;\n  }\n  \n  .loading-container.visible[_ngcontent-%COMP%] {\n    visibility: visible;\n    opacity: 1;\n  }\n  \n  .loading-container[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n    min-width: 250px;\n    padding: 20px 30px;\n    border-radius: 5px;\n    background-color: rgba(2, 2, 30, 0.7);\n    overflow: hidden;\n    text-align: center;\n  }\n  \n  .loading-container[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n    font-weight: 600;\n    margin: 3px 0 -5px 0;\n    display: block;\n    font-size: 13px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #fff;\n  }\n  \n  .loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n    background: none;\n    position: relative;\n    display: inline-block;\n    left: 1px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    -webkit-animation: spin 1.2s linear infinite;\n    animation: spin 1.2s linear infinite;\n    border: 3px solid #f3f3f3;\n    border-top-color: #cd1c7e;\n  }\n  \n  @-webkit-keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUdkLGFBQWE7SUFHTCx1QkFBdUI7SUFHdkIsbUJBQW1CO0lBRTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx5QkFBeUI7SUFDbkM7RUFDRjs7RUFFQTtJQUNFO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx5QkFBeUI7SUFDbkM7RUFDRiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmxvYWRpbmctY29udGFpbmVyLnZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAyLCAzMCwgMC43KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nLW1lc3NhZ2Uge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAzcHggMCAtNXB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5sb2FkaW5nLWNvbnRhaW5lciAuc3Bpbm5lciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxlZnQ6IDFweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNjZDFjN2U7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "h8aq":
/*!**************************************************************!*\
  !*** ./src/app/shared/interceptors/universal.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: UniversalInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversalInterceptor", function() { return UniversalInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");


class UniversalInterceptor {
    constructor(request, authService) {
        this.request = request;
        this.authService = authService;
    }
    intercept(req, next) {
        let serverReq = req;
        // Local /url gibi ba??layan urller i??in ba????na kendi adresini ekle.
        if (this.request && !serverReq.url.startsWith('http')) {
            let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
            if (!req.url.startsWith('/')) {
                newUrl += '/';
            }
            newUrl += req.url;
            serverReq = req.clone({ url: newUrl });
        }
        return next.handle(serverReq);
    }
}
UniversalInterceptor.??fac = function UniversalInterceptor_Factory(t) { return new (t || UniversalInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](Request, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
UniversalInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UniversalInterceptor, factory: UniversalInterceptor.??fac });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _jwttoken_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwttoken.service */ "0jKK");


class AuthService {
    constructor(jwtTokenService) {
        this.jwtTokenService = jwtTokenService;
        this.loggedIn = false;
    }
    getJWTToken() {
        this.jwtTokenService.getDecodeToken();
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_jwttoken_service__WEBPACK_IMPORTED_MODULE_1__["JWTTokenService"])); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


/***/ }),

/***/ "o4Gu":
/*!***************************************************************!*\
  !*** ./src/app/pages/products/products/products.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stars/stars.component */ "4pGF");
/* harmony import */ var _shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/capitaliaze-first.pipe */ "arJk");







function ProductsComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ProductsComponent_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r2.navigateProductDetail(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](6, "capitalizefirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "app-stars", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", product_r1.small_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](6, 4, product_r1.product_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" $ ", product_r1.product_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("rate", product_r1.average_rating);
} }
class ProductsComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.productService.getProducts().subscribe((products) => {
                this.productData = products;
            });
        });
    }
    navigateProductDetail(product) {
        this.productService.selectedProduct = product;
        this.router.navigate([`product/product-detail/${product.id}`]);
    }
}
ProductsComponent.??fac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 14, vars: 1, consts: [[1, "container"], [1, "responsive-table"], [1, "table-header"], [1, "col", "col-1"], [1, "col", "col-2", 2, "margin-left", "5%"], [1, "col", "col-3"], [1, "col", "col-4"], ["class", "table-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "click"], ["data-label", "Job Id", 1, "col", "col-1"], [3, "src"], ["data-label", "Customer Name", 1, "col", "col-2", 2, "display", "flex", "align-self", "center", "margin-left", "5%"], ["data-label", "Amount", 1, "col", "col-3", 2, "display", "flex", "align-self", "center"], ["data-label", "Payment Status", 1, "col", "col-4", 2, "display", "flex", "align-self", "center"], [3, "rate"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, ProductsComponent_li_13_Template, 11, 6, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.productData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_5__["StarsComponent"]], pipes: [_shared_pipes_capitaliaze_first_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalizeFirstPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin: 20px 0;\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n}\n\n.responsive-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding: 25px 30px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #95a5a6;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n  flex-basis: 40%;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n}\n\n.responsive-table[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n}\n\n@media all and (max-width: 767px) {\n  .responsive-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  }\n  .responsive-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 10px 0;\n  }\n  .responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]::before {\n    color: #6c7a89;\n    padding-right: 10px;\n    content: attr(data-label);\n    flex-basis: 50%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRDs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0VBQ0E7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaDIgc21hbGwge1xuICBmb250LXNpemU6IDAuNWVtO1xufVxuXG4ucmVzcG9uc2l2ZS10YWJsZSBsaSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMjVweCAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1YTVhNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTEge1xuICBmbGV4LWJhc2lzOiAxMCU7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTIge1xuICBmbGV4LWJhc2lzOiA0MCU7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTMge1xuICBmbGV4LWJhc2lzOiAyNSU7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAuY29sLTQge1xuICBmbGV4LWJhc2lzOiAyNSU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5yZXNwb25zaXZlLXRhYmxlIC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLXJvdyB7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5yZXNwb25zaXZlLXRhYmxlIC5jb2wge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbDo6YmVmb3JlIHtcbiAgICBjb2xvcjogIzZjN2E4OTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessageService {
    constructor() { }
    show(title, text, icon = 'success', options = {}) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(Object.assign({ icon,
            title,
            text }, options));
    }
}
MessageService.??fac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: MessageService, factory: MessageService.??fac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/products/pages/product-detail/product-detail.component */ "FA0v");
/* harmony import */ var _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/products/products/products.component */ "o4Gu");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: 'product',
        component: _pages_products_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    {
        path: 'product/product-detail/:id',
        component: _pages_products_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { initialNavigation: 'enabled', })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map