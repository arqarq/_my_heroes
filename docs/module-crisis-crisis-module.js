(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-crisis-crisis-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/admin-dashboard/admin-dashboard.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/admin-dashboard/admin-dashboard.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Dashboard\n</p>\n<a id=\"anchor\"></a>\n<p>\n  Reading from path:<br>\n  - Session ID: {{ sessionId | async }},<br>\n  - Token: {{ token | async }}\n</p>\n<p style=\"margin-bottom: 0\">Preloaded modules:</p>\n<ul style=\"margin-top: 0; padding: 0 0 0 20px\">\n  <li *ngFor=\"let module of modules\">\n    {{ module }}\n  </li>\n</ul>\n<!--Preloaded Modules-->\n<!--<ul>-->\n<!--  <li *ngFor=\"let module of modules\">{{ module }}</li>-->\n<!--</ul>-->\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/admin/admin.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/admin/admin.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  ADMIN\r\n</h2>\r\n<nav>\r\n  <a [preserveFragment]=\"true\"\r\n     [queryParamsHandling]=\"'preserve'\"\r\n     [routerLinkActiveOptions]=\"{exact: true}\"\r\n     routerLink=\"./\"\r\n     routerLinkActive=\"activated activated-color\">\r\n    Dashboard</a>\r\n  &nbsp;\r\n  <a [fragment]=\"defaultFragment\"\r\n     [preserveFragment]=\"false\"\r\n     [queryParamsHandling]=\"''\"\r\n     [queryParams]=\"defaultQueryParams\"\r\n     routerLink=\"./crises\"\r\n     routerLinkActive=\"activated activated-color\">\r\n    Manage Crises</a>\r\n  &nbsp;\r\n  <a [fragment]=\"'anchor2'\"\r\n     [preserveFragment]=\"false\"\r\n     [queryParamsHandling]=\"''\"\r\n     [queryParams]=\"{session_id: 0987654321}\"\r\n     routerLink=\"./heroes\"\r\n     routerLinkActive=\"activated activated-color\">\r\n    Manage Heroes</a>\r\n  &nbsp;\r\n  <a [preserveFragment]=\"false\"\r\n     [queryParamsHandling]=\"''\"\r\n     [queryParams]=\"{}\"\r\n     routerLink=\"./clear\"\r\n     routerLinkActive=\"activated-color-border-only\">\r\n    Clear queryParams & fragment</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/clear/clear.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/clear/clear.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Usunięto 'queryParams' i 'fragment' ze ścieżki!\n</p>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/manage-crises/manage-crises.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/manage-crises/manage-crises.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Manage your crises here<br>\n  (ustawiono domyślne 'queryParams' i 'fragment')\n</p>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/manage-heroes/manage-heroes.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/manage-heroes/manage-heroes.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Manage your heroes here<br>\n  (ustawiono inne 'queryParams' i 'fragment')\n</p>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-center-home/crisis-center-home.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-center-home/crisis-center-home.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  Welcome to the Crisis Center!!!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-center/crisis-center.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-center/crisis-center.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-messages></app-messages>\r\n<h1>\r\n  Angular Router\r\n</h1>\r\n<nav>\r\n  <a [preserveFragment]=\"true\"\r\n     [queryParamsHandling]=\"'preserve'\"\r\n     [routerLinkActiveOptions]=\"{exact: true}\"\r\n     [routerLinkActive]=\"'activated activated-color'\"\r\n     routerLink=\"./\">\r\n    Crisis Center</a>\r\n  &nbsp;\r\n  <a [preserveFragment]=\"true\"\r\n     [queryParamsHandling]=\"'merge'\"\r\n     [queryParams]=\"{a: 'b'}\"\r\n     [routerLinkActiveOptions]=\"{exact: true}\"\r\n     [routerLinkActive]=\"'activated activated-color'\"\r\n     [routerLink]=\"['./1', {foo: 'foo'}]\">\r\n    Dragon Crisis</a>\r\n  &nbsp;\r\n  <a [preserveFragment]=\"true\"\r\n     [queryParamsHandling]=\"'preserve'\"\r\n     [routerLinkActive]=\"'activated activated-color'\"\r\n     routerLink=\"./superheroes\">\r\n    Heroes</a>\r\n  &nbsp;\r\n  <a [preserveFragment]=\"true\"\r\n     [queryParamsHandling]=\"'preserve'\"\r\n     routerLink=\"./admin\"\r\n     routerLinkActive=\"activated activated-color\">\r\n    Admin</a>\r\n  &nbsp;\r\n  <a [preserveFragment]=\"true\"\r\n     [queryParamsHandling]=\"'preserve'\"\r\n     routerLink=\"./login\"\r\n     routerLinkActive=\"activated activated-color\">\r\n    Login</a>\r\n  &nbsp;\r\n  <a [preserveFragment]=\"true\"\r\n     [queryParamsHandling]=\"'preserve'\"\r\n     [routerLink]=\"['', {outlets: {popup: ['compose']}}]\"\r\n     routerLinkActive=\"activated-color-border-only\">\r\n    Contact</a>\r\n</nav>\r\n<div [@routeAnimationn]=\"getAnimationData(routerOutlett)\">\r\n  <router-outlet #routerOutlett=\"outlet\"></router-outlet>\r\n</div>\r\n<div class=\"bottom-right bottom-right-generic\">\r\n  <nav>\r\n    <a routerLink=\"/choose\">Back to choice</a>\r\n  </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-detail/crisis-detail.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-detail/crisis-detail.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div *ngIf=\"crisis$ | async as crisisAsync\">-->\r\n<div *ngIf=\"crisis\">\r\n  <h3>\"{{ editName }}\"</h3>\r\n  <div>\r\n    <!--<label>Id: </label>{{crisisAsync.id}}</div>-->\r\n    <label>Id: </label>{{ crisis.id }}\r\n  </div>\r\n  <div>\r\n    <label>Name: <input [(ngModel)]=\"editName\"\r\n                        placeholder=\"nazwa kryzysu\"\r\n                        style=\"padding: 0 2px; width: 250px\"/>\r\n    </label>\r\n  </div>\r\n  <p>\r\n    <button (click)=\"save()\">\r\n      Save\r\n    </button>&nbsp;\r\n    <button (click)=\"gotoCrises()\">\r\n      Cancel\r\n    </button>\r\n  </p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-list/crisis-list.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-list/crisis-list.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"inline-block\">\r\n  CRISIS CENTER\r\n</h2>\r\n<div>\r\n  (ilość: {{ qty }})\r\n</div>\r\n<div>\r\n  <label>Crisis name:\r\n    <input #crisisName/>\r\n  </label>\r\n  <button (click)=\"add(crisisName.value); crisisName.value=''\">\r\n    add\r\n  </button>\r\n</div>\r\n<ul class=\"crises\">\r\n  <li *ngFor=\"let crisis of crises$\"\r\n      [class.selected]=\"crisis.id === selectedId\">\r\n    <a (click)=\"navigate(crisis.id)\">\r\n      <!--<a [routerLink]=\"[crisis.id]\">-->\r\n      <span class=\"badge\">\r\n        {{ crisis.id }}</span>\r\n      {{ crisis.name }}</a>\r\n    <button (click)=\"delete(crisis)\"\r\n            class=\"delete\"\r\n            title=\"delete crisis\">\r\n      <strong>x</strong>\r\n    </button>\r\n  </li>\r\n</ul>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/model/crisis.ts":
/*!*********************************!*\
  !*** ./src/app/model/crisis.ts ***!
  \*********************************/
/*! exports provided: CRISIS_NOUN, Crisis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRISIS_NOUN", function() { return CRISIS_NOUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crisis", function() { return Crisis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _marvel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marvel */ "./src/app/model/marvel.ts");


const CRISIS_NOUN = {
    singular: 'crisis',
    plural: 'crises'
};
class Crisis extends _marvel__WEBPACK_IMPORTED_MODULE_1__["Marvel"] {
}


/***/ }),

/***/ "./src/app/module/crisis/admin/admin-dashboard/admin-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/module/crisis/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/selective-preloading-strategy.service */ "./src/app/service/selective-preloading-strategy.service.ts");





let AdminDashboardComponent = class AdminDashboardComponent {
    constructor(route, preloadStrategy) {
        this.route = route;
        this.modules = preloadStrategy.preloadedModules.sort();
    }
    ngOnInit() {
        this.sessionId = this.route
            .queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(params => params.get('session_id') || 'None'));
        this.token = this.route
            .fragment
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(fragment => fragment || 'None'));
    }
};
AdminDashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__["SelectivePreloadingStrategyService"] }
];
AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/admin-dashboard/admin-dashboard.component.html")).default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__["SelectivePreloadingStrategyService"]])
], AdminDashboardComponent);



/***/ }),

/***/ "./src/app/module/crisis/admin/admin/admin.component.css":
/*!***************************************************************!*\
  !*** ./src/app/module/crisis/admin/admin/admin.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".activated {\r\n  color: yellow\r\n}\r\n\r\n.activated-color {\r\n  box-shadow: 0 0 0 3px red;\r\n  background-color: red;\r\n  border-radius: 1px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: red;\r\n  margin: auto -1px auto\r\n}\r\n\r\n.activated-color-border-only {\r\n  border: 1px solid red;\r\n  border-radius: 4px;\r\n  padding: 3px;\r\n  margin-left: -4px /* border width + padding size */\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/crisis/admin/admin/admin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/module/crisis/admin/admin/admin.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.guard */ "./src/app/module/crisis/admin/service/auth.guard.ts");



let AdminComponent = class AdminComponent {
    constructor() {
        this.defaultQueryParams = _service_auth_guard__WEBPACK_IMPORTED_MODULE_2__["navigationExtras"].queryParams;
        this.defaultFragment = _service_auth_guard__WEBPACK_IMPORTED_MODULE_2__["navigationExtras"].fragment;
    }
};
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/admin/admin.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.component.css */ "./src/app/module/crisis/admin/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/module/crisis/admin/clear/clear.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/module/crisis/admin/clear/clear.component.ts ***!
  \**************************************************************/
/*! exports provided: ClearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearComponent", function() { return ClearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ClearComponent = class ClearComponent {
};
ClearComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clear',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./clear.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/clear/clear.component.html")).default
    })
], ClearComponent);



/***/ }),

/***/ "./src/app/module/crisis/admin/index.ts":
/*!**********************************************!*\
  !*** ./src/app/module/crisis/admin/index.ts ***!
  \**********************************************/
/*! exports provided: AdminDashboardComponent, AdminComponent, ManageCrisesComponent, ManageHeroesComponent, ClearComponent, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/module/crisis/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardComponent"]; });

/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/module/crisis/admin/admin/admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]; });

/* harmony import */ var _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-crises/manage-crises.component */ "./src/app/module/crisis/admin/manage-crises/manage-crises.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageCrisesComponent", function() { return _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_3__["ManageCrisesComponent"]; });

/* harmony import */ var _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-heroes/manage-heroes.component */ "./src/app/module/crisis/admin/manage-heroes/manage-heroes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageHeroesComponent", function() { return _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_4__["ManageHeroesComponent"]; });

/* harmony import */ var _clear_clear_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clear/clear.component */ "./src/app/module/crisis/admin/clear/clear.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearComponent", function() { return _clear_clear_component__WEBPACK_IMPORTED_MODULE_5__["ClearComponent"]; });

/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/module/crisis/admin/service/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _service_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]; });










/***/ }),

/***/ "./src/app/module/crisis/admin/manage-crises/manage-crises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module/crisis/admin/manage-crises/manage-crises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageCrisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCrisesComponent", function() { return ManageCrisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ManageCrisesComponent = class ManageCrisesComponent {
};
ManageCrisesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-crises',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-crises.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/manage-crises/manage-crises.component.html")).default
    })
], ManageCrisesComponent);



/***/ }),

/***/ "./src/app/module/crisis/admin/manage-heroes/manage-heroes.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module/crisis/admin/manage-heroes/manage-heroes.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageHeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageHeroesComponent", function() { return ManageHeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ManageHeroesComponent = class ManageHeroesComponent {
};
ManageHeroesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-heroes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-heroes.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/admin/manage-heroes/manage-heroes.component.html")).default
    })
], ManageHeroesComponent);



/***/ }),

/***/ "./src/app/module/crisis/admin/service/auth.guard.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/module/crisis/admin/service/auth.guard.module.ts ***!
  \******************************************************************/
/*! exports provided: AuthGuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardModule", function() { return AuthGuardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AuthGuardModule = class AuthGuardModule {
};
AuthGuardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], AuthGuardModule);



/***/ }),

/***/ "./src/app/module/crisis/admin/service/auth.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/module/crisis/admin/service/auth.guard.ts ***!
  \***********************************************************/
/*! exports provided: navigationExtras, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationExtras", function() { return navigationExtras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/service/auth.service */ "./src/app/module/crisis/auth/service/auth.service.ts");
/* harmony import */ var _auth_guard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard.module */ "./src/app/module/crisis/admin/service/auth.guard.module.ts");





// Create a dummy session id
const sessionId = 1234567890;
// Set our navigation extras object
// that contains our global query params and fragment
const navigationExtras = {
    queryParams: { session_id: sessionId },
    fragment: 'anchor'
};
let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        const url = `/crisis/crisis-center/${route.path}`;
        console.log('AuthGuard # canLoad() # url: ' + url);
        return this.checkLogin(url);
        // if (this.authService.isLoggedIn) {
        //   console.log('AuthGuard # canLoad(): od razu true');
        //   return true;
        // }
    }
    canActivate(next, state) {
        const url = state.url;
        console.log('AuthGuard # canActivate() # url: ' + url);
        return this.checkLogin(url);
    }
    canActivateChild(route, state) {
        console.log('AuthGuard # canActivateChild() # url: ' + state.url);
        return this.canActivate(route, state);
    }
    checkLogin(url) {
        if (this.authService.isLoggedIn) {
            console.log('AuthGuard # checkLogin(): od razu true');
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url.split('(')[0]; // usunięcie ew. (popup:______)
        console.log('AuthGuard # checkLogin() # this.authService.redirectUrl: ' + this.authService.redirectUrl);
        const urlTree = this.router.createUrlTree(['crisis', 'crisis-center', 'login'], { queryParamsHandling: 'preserve', preserveFragment: true });
        this.router.navigateByUrl(urlTree);
        // this.router.navigate(
        //   [url, '/crisis/crisis-center/login'],
        //   navigationExtras
        // );
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _auth_guard_module__WEBPACK_IMPORTED_MODULE_4__["AuthGuardModule"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/module/crisis/animations.ts":
/*!*********************************************!*\
  !*** ./src/app/module/crisis/animations.ts ***!
  \*********************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");


// Routable animations
const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimationn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('heroesq => heroq', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-50%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])())
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('heroq => heroesq', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-50%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])())
    ])
]);


/***/ }),

/***/ "./src/app/module/crisis/auth/service/auth-service.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/crisis/auth/service/auth-service.module.ts ***!
  \*******************************************************************/
/*! exports provided: AuthServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceModule", function() { return AuthServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AuthServiceModule = class AuthServiceModule {
};
AuthServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], AuthServiceModule);



/***/ }),

/***/ "./src/app/module/crisis/auth/service/auth.service.ts":
/*!************************************************************!*\
  !*** ./src/app/module/crisis/auth/service/auth.service.ts ***!
  \************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_index_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/index-services */ "./src/app/service/index-services.ts");
/* harmony import */ var _auth_service_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-service.module */ "./src/app/module/crisis/auth/service/auth-service.module.ts");






let AuthService = class AuthService {
    constructor(localStore) {
        this.localStore = localStore;
        this.isLoggedIn = false;
        if (undefined !== this.localStore.getQueryParamsAndFragment()) {
            this.isLoggedIn = true;
        }
    }
    login() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.isLoggedIn = true));
    }
    logout() {
        this.isLoggedIn = false;
    }
};
AuthService.ctorParameters = () => [
    { type: _service_index_services__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _auth_service_module__WEBPACK_IMPORTED_MODULE_5__["AuthServiceModule"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_index_services__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
], AuthService);



/***/ }),

/***/ "./src/app/module/crisis/component/crisis-center-home/crisis-center-home.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-center-home/crisis-center-home.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CrisisCenterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterHomeComponent", function() { return CrisisCenterHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CrisisCenterHomeComponent = class CrisisCenterHomeComponent {
};
CrisisCenterHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crisis-center-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crisis-center-home.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-center-home/crisis-center-home.component.html")).default
    })
], CrisisCenterHomeComponent);



/***/ }),

/***/ "./src/app/module/crisis/component/crisis-center/crisis-center.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-center/crisis-center.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".activated {\r\n  color: yellow\r\n}\r\n\r\n.activated-color {\r\n  box-shadow: 0 0 0 3px red;\r\n  background-color: red;\r\n  border-radius: 1px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: red;\r\n  /*padding: 3px;*/\r\n  margin: auto -1px auto /* border width + padding size */\r\n}\r\n\r\n.activated-color-border-only {\r\n  border: 1px solid red;\r\n  border-radius: 4px;\r\n  padding: 3px;\r\n  margin-left: -4px /* border width + padding size */\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/crisis/component/crisis-center/crisis-center.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-center/crisis-center.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CrisisCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterComponent", function() { return CrisisCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./src/app/module/crisis/animations.ts");




let CrisisCenterComponent = class CrisisCenterComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Crisis Center';
    }
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData[`animation`];
    }
    ngOnInit() {
        this.changeTitle(this.title);
    }
    changeTitle(aaa) {
        this.titleService.setTitle(aaa);
    }
};
CrisisCenterComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
CrisisCenterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crisis-center',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crisis-center.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-center/crisis-center.component.html")).default,
        animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crisis-center.component.css */ "./src/app/module/crisis/component/crisis-center/crisis-center.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], CrisisCenterComponent);



/***/ }),

/***/ "./src/app/module/crisis/component/crisis-detail/crisis-detail.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-detail/crisis-detail.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crises {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n\r\n.crises li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.crises li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\n.crises a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.crises a:hover {\r\n  color: #607D8B;\r\n}\r\n\r\n.crises .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  /*cursor: hand;*/\r\n  font-family: Arial, serif;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton.delete {\r\n  position: relative;\r\n  left: 338px;\r\n  top: -33px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/crisis/component/crisis-detail/crisis-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-detail/crisis-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CrisisDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisDetailComponent", function() { return CrisisDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_crisis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/crisis */ "./src/app/model/crisis.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _service_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/dialog.service */ "./src/app/module/crisis/service/dialog.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crisis-list/crisis-list.component */ "./src/app/module/crisis/component/crisis-list/crisis-list.component.ts");
/* harmony import */ var _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/can-deactivate.guard */ "./src/app/module/crisis/service/can-deactivate.guard.ts");
/* harmony import */ var _crisis_list_crisis_list_service_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../crisis-list/crisis-list-service.module */ "./src/app/module/crisis/component/crisis-list/crisis-list-service.module.ts");










let CrisisDetailComponent = class CrisisDetailComponent extends _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"] {
    constructor(route, router, crisisService, crisesList) {
        super();
        this.route = route;
        this.router = router;
        this.crisisService = crisisService;
        this.crisesList = crisesList;
        crisisService.setNouns(_model_crisis__WEBPACK_IMPORTED_MODULE_2__["CRISIS_NOUN"]);
    }
    canDeactivate() {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return _service_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"].confirm('Discard changes?');
    }
    save() {
        this.crisis.name = this.editName;
        this.crisisService.updateHero(this.crisis).subscribe(() => this.gotoCrises());
    }
    gotoCrises() {
        // const crisisId = this.crisis ? this.crisis.id : undefined;
        const crisisId = '';
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        const booleanPromise = this.router.navigate(['../', { id: crisisId, foo: 'fighters' }], { relativeTo: this.route });
        (booleanPromise.then(() => {
            this.crisesList.ngOnInit();
            this.crisesList.selectedId = undefined;
        }, () => {
            this.crisesList.ngOnInit();
            this.crisesList.selectedId = undefined;
        }));
    }
    ngOnInitDontUse() {
        console.log('CrisisDetail # ngOnInit(): called');
        // TODO SNAPSHOT - ONLY FIRST ID
        // const id = this.route.snapshot.paramMap.get('id');
        // this.subscription = this.crisisService.getHero(+id).subscribe(crisis => {
        //   this.crisis = crisis;
        //   this.editName = crisis.name;
        // });
        // TODO MAP - REUSE WITH EACH ID
        // this.subscription = this.route.paramMap.pipe(
        //   map((par: ParamMap) => {
        //     this.crisisService.getHero(par.get('id')).subscribe(crisis => {
        //       this.editName = crisis.name;
        //       this.crisis = crisis;
        //     });
        //   })
        // ).subscribe();
        // TODO SWITCHMAP - REUSE WITH EACH ID
        this.crisis$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => this.crisisService.getHero(params.get('id'))));
        const observer = {
            next: (crisis) => {
                if (crisis) {
                    this.editName = crisis.name;
                    this.crisis = crisis;
                }
            },
            error: undefined,
            complete: undefined
        };
        this.subscription = this.crisis$.subscribe(observer);
        // TODO RESOLVE
        // this.subscription = this.route.data
        //   .subscribe((data: {crisis: Crisis}) => {
        //     this.editName = data.crisis.name;
        //     this.crisis = data.crisis;
        //   });
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe((data) => {
            this.crisis = data.crisisHere;
            this.editName = this.crisis.name;
            this.crisesList.selectedId = this.crisis.id;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.crisesList.selectedId = undefined;
    }
};
CrisisDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"] },
    { type: _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_7__["CrisisListComponent"] }
];
CrisisDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crisis-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crisis-detail.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-detail/crisis-detail.component.html")).default,
        providers: [_crisis_list_crisis_list_service_module__WEBPACK_IMPORTED_MODULE_9__["CrisisListServiceModule"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crisis-detail.component.css */ "./src/app/module/crisis/component/crisis-detail/crisis-detail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"],
        _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_7__["CrisisListComponent"]])
], CrisisDetailComponent);



/***/ }),

/***/ "./src/app/module/crisis/component/crisis-detail/service/crisis-detail-resolver-service.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-detail/service/crisis-detail-resolver-service.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: CrisisDetailResolverServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisDetailResolverServiceModule", function() { return CrisisDetailResolverServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CrisisDetailResolverServiceModule = class CrisisDetailResolverServiceModule {
};
CrisisDetailResolverServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], CrisisDetailResolverServiceModule);



/***/ }),

/***/ "./src/app/module/crisis/component/crisis-detail/service/crisis-detail-resolver.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-detail/service/crisis-detail-resolver.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: CrisisDetailResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisDetailResolverService", function() { return CrisisDetailResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_crisis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../model/crisis */ "./src/app/model/crisis.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _crisis_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crisis-detail-resolver-service.module */ "./src/app/module/crisis/component/crisis-detail/service/crisis-detail-resolver-service.module.ts");








let CrisisDetailResolverService = class CrisisDetailResolverService {
    constructor(crisisService, router) {
        this.crisisService = crisisService;
        this.router = router;
        crisisService.setNouns(_model_crisis__WEBPACK_IMPORTED_MODULE_3__["CRISIS_NOUN"]);
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        return this.crisisService
            .getHeroNo404(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((crisis) => {
            if (crisis) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(crisis);
            }
            else { // id not found
                this.router.navigate(['/crisis']);
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
            }
        }));
    }
};
CrisisDetailResolverService.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_5__["MarvelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CrisisDetailResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _crisis_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_7__["CrisisDetailResolverServiceModule"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_5__["MarvelService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CrisisDetailResolverService);



/***/ }),

/***/ "./src/app/module/crisis/component/crisis-list/crisis-list-service.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-list/crisis-list-service.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CrisisListServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisListServiceModule", function() { return CrisisListServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CrisisListServiceModule = class CrisisListServiceModule {
};
CrisisListServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], CrisisListServiceModule);



/***/ }),

/***/ "./src/app/module/crisis/component/crisis-list/crisis-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-list/crisis-list.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* CrisisListComponent's private CSS styles */\r\n\r\n.crises {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n\r\n.crises li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.crises li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\n.crises a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.crises a:hover {\r\n  color: #607D8B;\r\n}\r\n\r\n.crises .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton.delete {\r\n  position: relative;\r\n  left: 338px;\r\n  top: -33px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n\r\n.crises li.selected {\r\n  background-color: #CFD8DC;\r\n  color: white;\r\n}\r\n\r\n.crises li.selected:hover {\r\n  background-color: #BBD8DC;\r\n}\r\n\r\n.crises li.selected {\r\n  background-color: #bdbfdc;\r\n  color: white;\r\n}\r\n\r\n.crises li.selected:hover {\r\n  background-color: #a9a0dc;\r\n}\r\n\r\nlabel {\r\n  margin-right: 8px\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/crisis/component/crisis-list/crisis-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module/crisis/component/crisis-list/crisis-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: CrisisListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisListComponent", function() { return CrisisListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_crisis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/crisis */ "./src/app/model/crisis.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/service/auth.service */ "./src/app/module/crisis/auth/service/auth.service.ts");
/* harmony import */ var _crisis_list_service_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crisis-list-service.module */ "./src/app/module/crisis/component/crisis-list/crisis-list-service.module.ts");









let CrisisListComponent = class CrisisListComponent {
    constructor(crisisService, route, router, authService) {
        this.crisisService = crisisService;
        this.route = route;
        this.router = router;
        crisisService.setNouns(_model_crisis__WEBPACK_IMPORTED_MODULE_2__["CRISIS_NOUN"]);
        authService.redirectUrl = undefined; // kasowanie zapamiętanego adresu
    }
    get selectedId() {
        return this.$selectedId;
    }
    set selectedId(value) {
        this.$selectedId = value;
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.subscription = this.crisisService.addHero({ name })
            .subscribe((oneHero) => {
            this.crises$.push(oneHero);
            this.qty++;
        });
    }
    delete(crisis) {
        if (this.selectedId !== crisis.id) {
            this.crises$ = this.crises$.filter(h => h !== crisis);
            this.subscription = this.crisisService.deleteHero(crisis).subscribe(() => {
                this.qty--;
            });
        }
    }
    navigate(id) {
        this.router.navigate(['./', id], { relativeTo: this.route, preserveQueryParams: false }).then(() => {
            this.selectedId = id;
        });
    }
    ngOnInit() {
        this.subscription = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(params => {
            this.selectedId = +params.get('id');
            console.log('CrisisList # ngOnInit(): called');
            // setTimeout(() => console.log('time'), 50);
            this.subscription2 = this.crisisService.getHeroes()
                .subscribe(heroTable => {
                this.crises$ = heroTable;
                this.qty = heroTable.length;
            });
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        }))
            .subscribe(); // trzeba zasubskrybować zmienną Observable, aby wykonało lambdy
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
};
CrisisListComponent.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_6__["MarvelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
CrisisListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crisis-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crisis-list.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/crisis-list/crisis-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crisis-list.component.css */ "./src/app/module/crisis/component/crisis-list/crisis-list.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _crisis_list_service_module__WEBPACK_IMPORTED_MODULE_8__["CrisisListServiceModule"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_6__["MarvelService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], CrisisListComponent);



/***/ }),

/***/ "./src/app/module/crisis/crisis-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/module/crisis/crisis-routing.module.ts ***!
  \********************************************************/
/*! exports provided: isAdminMatched, CrisisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdminMatched", function() { return isAdminMatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisRoutingModule", function() { return CrisisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _component_crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/crisis-center/crisis-center.component */ "./src/app/module/crisis/component/crisis-center/crisis-center.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _component_crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/crisis-list/crisis-list.component */ "./src/app/module/crisis/component/crisis-list/crisis-list.component.ts");
/* harmony import */ var _component_crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/crisis-detail/crisis-detail.component */ "./src/app/module/crisis/component/crisis-detail/crisis-detail.component.ts");
/* harmony import */ var _component_crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/crisis-center-home/crisis-center-home.component */ "./src/app/module/crisis/component/crisis-center-home/crisis-center-home.component.ts");
/* harmony import */ var _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/can-deactivate.guard */ "./src/app/module/crisis/service/can-deactivate.guard.ts");
/* harmony import */ var _component_crisis_detail_service_crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/crisis-detail/service/crisis-detail-resolver.service */ "./src/app/module/crisis/component/crisis-detail/service/crisis-detail-resolver.service.ts");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin */ "./src/app/module/crisis/admin/index.ts");
/* harmony import */ var _component_crisis_detail_service_crisis_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/crisis-detail/service/crisis-detail-resolver-service.module */ "./src/app/module/crisis/component/crisis-detail/service/crisis-detail-resolver-service.module.ts");











function isAdminMatched(url) {
    let result;
    if (url.length >= 1 && url[0].path.startsWith('admin')) {
        result = url;
        if (url.length === 2) {
            // result.shift();
            // result.shift();
            // result = null;
            result = { consumed: result };
        }
        else {
            result = { consumed: result };
        }
    }
    else {
        result = null;
    }
    const output = [];
    if (result) {
        for (const war of url) {
            output.push(war.path);
        }
    }
    console.log('CrisisRoutingModule # isAdminMatched() # result: ' + (result ? output : '-'));
    return result;
}
const ROUTES = [
    {
        path: 'crisis-center',
        component: _component_crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_2__["CrisisCenterComponent"],
        children: [
            {
                path: 'superheroes',
                loadChildren: () => Promise.all(/*! import() | heroes-heroes-module */[__webpack_require__.e("common"), __webpack_require__.e("heroes-heroes-module")]).then(__webpack_require__.bind(null, /*! ./heroes/heroes.module */ "./src/app/module/crisis/heroes/heroes.module.ts")).then((m) => m.HeroesModule),
                data: {
                    preload: true
                }
            },
            {
                path: 'login',
                // component: LoginComponent
                loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/module/crisis/auth/auth.module.ts")).then((m) => m.AuthModule)
            },
            {
                path: 'admin',
                // matcher: isAdminMatched, // zastępuje "path", ale nie działa z routingiem w lazy loaded module
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-module-crisis-admin-admin-module */ "src-app-module-crisis-admin-admin-module").then(__webpack_require__.bind(null, /*! src/app/module/crisis/admin/admin.module */ "./src/app/module/crisis/admin/admin.module.ts")).then((m) => m.AdminModule),
                canLoad: [
                    _admin__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]
                ]
            },
            // {
            //   path: 'admin(popup:compose)',
            //   redirectTo: 'admin',
            //   pathMatch: 'prefix' // lub 'full', przy wewn. ścieżka to bez znaczenia
            // },
            {
                path: 'heroes',
                redirectTo: 'superheroes'
            },
            {
                path: '',
                component: _component_crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_4__["CrisisListComponent"],
                children: [
                    {
                        path: ':id',
                        component: _component_crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__["CrisisDetailComponent"],
                        canDeactivate: [
                            _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]
                        ],
                        // canDeactivate: [CanDeactivate] // TODO do with component specific guard
                        resolve: {
                            crisisHere: _component_crisis_detail_service_crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_8__["CrisisDetailResolverService"]
                        }
                    },
                    {
                        path: '',
                        component: _component_crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_6__["CrisisCenterHomeComponent"]
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'crisis-center',
        pathMatch: 'full'
    }
];
let CrisisRoutingModule = class CrisisRoutingModule {
};
CrisisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _component_crisis_detail_service_crisis_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_10__["CrisisDetailResolverServiceModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], CrisisRoutingModule);



/***/ }),

/***/ "./src/app/module/crisis/crisis.module.ts":
/*!************************************************!*\
  !*** ./src/app/module/crisis/crisis.module.ts ***!
  \************************************************/
/*! exports provided: CrisisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisModule", function() { return CrisisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/crisis-center/crisis-center.component */ "./src/app/module/crisis/component/crisis-center/crisis-center.component.ts");
/* harmony import */ var _crisis_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crisis-routing.module */ "./src/app/module/crisis/crisis-routing.module.ts");
/* harmony import */ var _component_crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/crisis-list/crisis-list.component */ "./src/app/module/crisis/component/crisis-list/crisis-list.component.ts");
/* harmony import */ var _gen_modules_messages_messages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../gen_modules/messages/messages.module */ "./src/app/gen_modules/messages/messages.module.ts");
/* harmony import */ var _component_crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/crisis-center-home/crisis-center-home.component */ "./src/app/module/crisis/component/crisis-center-home/crisis-center-home.component.ts");
/* harmony import */ var _component_crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/crisis-detail/crisis-detail.component */ "./src/app/module/crisis/component/crisis-detail/crisis-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _admin_service_auth_guard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/service/auth.guard.module */ "./src/app/module/crisis/admin/service/auth.guard.module.ts");
/* harmony import */ var _auth_service_auth_service_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/service/auth-service.module */ "./src/app/module/crisis/auth/service/auth-service.module.ts");
/* harmony import */ var _service_dialog_service_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/dialog-service.module */ "./src/app/module/crisis/service/dialog-service.module.ts");
/* harmony import */ var _service_can_deactivate_guard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/can-deactivate-guard.module */ "./src/app/module/crisis/service/can-deactivate-guard.module.ts");














let CrisisModule = class CrisisModule {
};
CrisisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _gen_modules_messages_messages_module__WEBPACK_IMPORTED_MODULE_6__["MessagesModule"],
            _auth_service_auth_service_module__WEBPACK_IMPORTED_MODULE_11__["AuthServiceModule"],
            _admin_service_auth_guard_module__WEBPACK_IMPORTED_MODULE_10__["AuthGuardModule"],
            _service_can_deactivate_guard_module__WEBPACK_IMPORTED_MODULE_13__["CanDeactivateGuardModule"],
            _service_dialog_service_module__WEBPACK_IMPORTED_MODULE_12__["DialogServiceModule"],
            _crisis_routing_module__WEBPACK_IMPORTED_MODULE_4__["CrisisRoutingModule"]
        ],
        declarations: [
            _component_crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_3__["CrisisCenterComponent"],
            _component_crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_5__["CrisisListComponent"],
            _component_crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_7__["CrisisCenterHomeComponent"],
            _component_crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_8__["CrisisDetailComponent"]
            // ComposeMessageComponent // użyte w StartModule
        ]
        // providers: [ // old way DI
        //   CrisisDetailResolverService,
        //   CrisisListComponent,
        //   CanDeactivateGuard
        // ]
    })
], CrisisModule);



/***/ }),

/***/ "./src/app/module/crisis/service/can-deactivate-guard.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/module/crisis/service/can-deactivate-guard.module.ts ***!
  \**********************************************************************/
/*! exports provided: CanDeactivateGuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuardModule", function() { return CanDeactivateGuardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CanDeactivateGuardModule = class CanDeactivateGuardModule {
};
CanDeactivateGuardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], CanDeactivateGuardModule);



/***/ }),

/***/ "./src/app/module/crisis/service/can-deactivate.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/module/crisis/service/can-deactivate.guard.ts ***!
  \***************************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _can_deactivate_guard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./can-deactivate-guard.module */ "./src/app/module/crisis/service/can-deactivate-guard.module.ts");



let CanDeactivateGuard = class CanDeactivateGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
};
CanDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _can_deactivate_guard_module__WEBPACK_IMPORTED_MODULE_2__["CanDeactivateGuardModule"]
    })
], CanDeactivateGuard);



/***/ }),

/***/ "./src/app/module/crisis/service/dialog-service.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/module/crisis/service/dialog-service.module.ts ***!
  \****************************************************************/
/*! exports provided: DialogServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogServiceModule", function() { return DialogServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DialogServiceModule = class DialogServiceModule {
};
DialogServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], DialogServiceModule);



/***/ }),

/***/ "./src/app/module/crisis/service/dialog.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/module/crisis/service/dialog.service.ts ***!
  \*********************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _dialog_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-service.module */ "./src/app/module/crisis/service/dialog-service.module.ts");




let DialogService = class DialogService {
    static confirm(message) {
        const confirmation = window.confirm(message || 'Do you want to proceed?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(confirmation);
    }
};
DialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _dialog_service_module__WEBPACK_IMPORTED_MODULE_3__["DialogServiceModule"]
    })
], DialogService);



/***/ })

}]);