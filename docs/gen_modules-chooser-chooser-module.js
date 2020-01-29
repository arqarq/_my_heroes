(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gen_modules-chooser-chooser-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/chooser/chooser.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/chooser/chooser.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [hidden]=\"lcr.langSwitched\">\r\n  <nav style=\"font-size: small\">\r\n    <a #first\r\n       (click)=\"switchLocaleByUser(first)\"\r\n       [class.not-allowed]=\"localeId === localeIdNumbers[1033]\"\r\n       [class.selected]=\"localeId === localeIdNumbers[1033]\"\r\n       [id]=\"localeIdNumbers[1033]\"\r\n       class=\"lang\">\r\n      {{ localeIdNumbers[1033] | uppercase }}</a>\r\n    &bull;\r\n    <a #second\r\n       (click)=\"switchLocaleByUser(second)\"\r\n       [class.not-allowed]=\"localeId === localeIdNumbers[1045]\"\r\n       [class.selected]=\"localeId === localeIdNumbers[1045]\"\r\n       [id]=\"localeIdNumbers[1045]\"\r\n       class=\"lang\">\r\n      {{ localeIdNumbers[1045] | uppercase }}</a>\r\n    &bull;\r\n    <label for=\"chbox\">locked?</label>\r\n    <input (ngModelChange)=\"langStorageChanged($event)\"\r\n           [(ngModel)]=\"langStored\"\r\n           id=\"chbox\"\r\n           type=\"checkbox\">\r\n  </nav>\r\n  <p>\r\n    Wybierz:\r\n  </p>\r\n  <div>\r\n    <nav>\r\n      <a routerLink=\"/crisis\">Crisis Center</a>\r\n      <br>\r\n      <a routerLink=\"/dragdrop\">drag&drop Test</a>\r\n      <br>\r\n      <a routerLink=\"/forms\">Formularze</a>\r\n      <br>\r\n      <a routerLink=\"/ng-heroes\">Heroes</a>\r\n      <br>\r\n      <a routerLink=\"/ng-observables\">Observables</a>\r\n      <br>\r\n      <a routerLink=\"/scrollpanel\">PrimeNG's not working &lt;p-scrollPanel></a>\r\n      <br>\r\n      <a routerLink=\"/shop\">Shop</a>\r\n      <br>\r\n      <a routerLink=\"/sticky\">Sticky</a>\r\n      <br>\r\n      <a routerLink=\"/ng-templaterefexample\">TemplateRef Example</a>\r\n    </nav>\r\n  </div>\r\n  <p id=\"owl\">\r\n    🦉\r\n  </p>\r\n  <div class=\"bottom-right\">\r\n    <nav>\r\n      <a [routerLinkActive]=\"'activated activated-color'\"\r\n         [routerLink]=\"'/choose'\">\r\n        Do choice</a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/gen_modules/chooser/chooser-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/gen_modules/chooser/chooser-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ChooserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooserRoutingModule", function() { return ChooserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chooser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chooser.component */ "./src/app/gen_modules/chooser/chooser.component.ts");




const ROUTES = [
    {
        path: '',
        component: _chooser_component__WEBPACK_IMPORTED_MODULE_3__["ChooserComponent"]
    }
];
let ChooserRoutingModule = class ChooserRoutingModule {
};
ChooserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChooserRoutingModule);



/***/ }),

/***/ "./src/app/gen_modules/chooser/chooser.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gen_modules/chooser/chooser.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n  font-size: 100%\r\n}\r\n\r\n.activated-color {\r\n  background-color: red;\r\n  border-radius: 5px 0 0 0;\r\n  padding: 5px\r\n}\r\n\r\np {\r\n  margin-top: 1.75rem;\r\n  margin-bottom: 0.25rem\r\n}\r\n\r\np#owl {\r\n  font-size: 4em\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: rgb(0, 0, 238)\r\n}\r\n\r\na.lang {\r\n  text-decoration-line: underline\r\n}\r\n\r\na.selected {\r\n  color: currentColor;\r\n  opacity: 0.75\r\n}\r\n\r\na.not-allowed {\r\n  cursor: not-allowed\r\n}\r\n\r\ninput[type=checkbox] {\r\n  /*transform: scale(0.75);*/\r\n  margin: 0 0 0 0.15rem;\r\n  position: relative;\r\n  top: 2px\r\n}\r\n");

/***/ }),

/***/ "./src/app/gen_modules/chooser/chooser.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gen_modules/chooser/chooser.component.ts ***!
  \**********************************************************/
/*! exports provided: ChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooserComponent", function() { return ChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _locale_LIDs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../locale/LIDs */ "./src/locale/LIDs.ts");
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/local-storage.service */ "./src/app/service/local-storage.service.ts");
/* harmony import */ var _service_lang_change_relay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/lang-change-relay.service */ "./src/app/service/lang-change-relay.service.ts");
/* harmony import */ var _service_worator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/worator.service */ "./src/app/service/worator.service.ts");







let ChooserComponent = class ChooserComponent {
    constructor(lcr, titleService, localeId, storage, workerService) {
        this.lcr = lcr;
        this.titleService = titleService;
        this.localeId = localeId;
        this.storage = storage;
        this.workerService = workerService;
        this.localeIdNumbers = _locale_LIDs__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID_NUMBERS"];
        this.title = 'Wybór';
        this.browserLocaleID = navigator.language.slice(0, 2);
        this.langStoredCode = this.storage.getStringStoredAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_STORAGE_KEY"]);
        this.langStored = !!this.langStoredCode;
    }
    ngOnInit() {
        this.setTitle(this.title);
        this.workerService.postToWorker('hello from ChooserComponent!');
    }
    langStorageChanged(event) {
        this.langStored = event;
        if (event) {
            this.storage.storeStringAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_STORAGE_KEY"], this.localeId);
            this.storage.storeStringAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_INIT_STORAGE_KEY"]);
        }
        else {
            this.storage.removeStorageAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_STORAGE_KEY"]);
            this.storage.removeStorageAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_INIT_STORAGE_KEY"]);
        }
    }
    switchLocaleByUser(el) {
        if (this.localeId !== el.id) {
            this.storage.storeStringAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_USER_IS_SWITCHING"]);
            el.href = '/' + el.id;
            el.click();
        }
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
};
ChooserComponent.ctorParameters = () => [
    { type: _service_lang_change_relay_service__WEBPACK_IMPORTED_MODULE_5__["LangChangeRelayService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _service_worator_service__WEBPACK_IMPORTED_MODULE_6__["WoratorService"] }
];
ChooserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chooser',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chooser.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/chooser/chooser.component.html")).default,
        styles: [".activated {color: yellow}", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chooser.component.css */ "./src/app/gen_modules/chooser/chooser.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_lang_change_relay_service__WEBPACK_IMPORTED_MODULE_5__["LangChangeRelayService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], String, _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        _service_worator_service__WEBPACK_IMPORTED_MODULE_6__["WoratorService"]])
], ChooserComponent);



/***/ }),

/***/ "./src/app/gen_modules/chooser/chooser.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/gen_modules/chooser/chooser.module.ts ***!
  \*******************************************************/
/*! exports provided: ChooserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooserModule", function() { return ChooserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _chooser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chooser.component */ "./src/app/gen_modules/chooser/chooser.component.ts");
/* harmony import */ var _chooser_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chooser-routing.module */ "./src/app/gen_modules/chooser/chooser-routing.module.ts");






let ChooserModule = class ChooserModule {
};
ChooserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chooser_component__WEBPACK_IMPORTED_MODULE_4__["ChooserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _chooser_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooserRoutingModule"]
        ]
    })
], ChooserModule);



/***/ })

}]);