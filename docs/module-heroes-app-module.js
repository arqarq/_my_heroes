(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-heroes-app-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/app.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/app.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n<app-messages></app-messages>\r\n<section class=\"heroes-old\">\r\n  <div>\r\n    <h1>\r\n      {{ title }}!\r\n    </h1>\r\n    <nav>\r\n      <a routerLink=\"dashboard\">Dashboard</a>\r\n      <a routerLink=\"details\">Heroes</a>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div style=\"text-align: center\">\r\n    <img alt=\"Angular Logo\"\r\n         src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\r\n         width=\"300\">\r\n    <h2>\r\n      Here are some links to help you start:\r\n    </h2>\r\n    <ul>\r\n      <li>\r\n        <h2>\r\n          <a href=\"https://angular.io/tutorial\"\r\n             rel=\"noopener\"\r\n             target=\"_blank\">Tour of Heroes</a>\r\n        </h2>\r\n      </li>\r\n      <li>\r\n        <h2>\r\n          <a href=\"https://angular.io/cli\"\r\n             rel=\"noopener\"\r\n             target=\"_blank\">CLI Documentation</a>\r\n        </h2>\r\n      </li>\r\n      <li>\r\n        <h2>\r\n          <a href=\"https://blog.angular.io/\"\r\n             rel=\"noopener\"\r\n             target=\"_blank\">Angular blog</a>\r\n        </h2>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"bottom-right\">\r\n    <nav>\r\n      <a routerLink=\"/choose\">Back to choice</a>\r\n    </nav>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/dashboard/dashboard.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/dashboard/dashboard.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<p>-->\r\n<!--dashboard works!-->\r\n<!--</p>-->\r\n<section class=\"dash-left-col\">\r\n  <h3>\r\n    Top Heroes\r\n  </h3>\r\n  <div class=\"grid grid-pad\">\r\n    <a *ngFor=\"let hero of heroes\"\r\n       class=\"col-1-4\"\r\n       routerLink=\"../detail/{{ hero.id }}\">\r\n      <div class=\"module hero\">\r\n        <h4>{{ hero.name }}</h4>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <app-hero-search></app-hero-search>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/hero-detail/hero-detail.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/hero-detail/hero-detail.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"hero\">\r\n  <h2>\r\n    {{ hero.name | uppercase }} details!\r\n  </h2>\r\n  <div>\r\n    <span>id: </span>{{ hero.id }}\r\n  </div>\r\n  <div>\r\n    <label>name:\r\n      <input [(ngModel)]=\"hero.name\"\r\n             placeholder=\"wpisz imię\"></label>\r\n  </div>\r\n  <button (click)=\"save()\">save</button>\r\n  <button (click)=\"goBack()\">go back</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/hero-search/hero-search.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/hero-search/hero-search.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"search-component\"\r\n     style=\"clear: both\">\r\n  <h4>\r\n    Hero Search\r\n  </h4>\r\n  <label [hidden]=\"true\"\r\n         for=\"search-box\">wpisz nazwę bohatera:</label>\r\n  <input #searchBox\r\n         (input)=\"search(searchBox.value)\"\r\n         id=\"search-box\"\r\n         placeholder=\"wpisz nazwę bohatera\"/>\r\n  <ul class=\"search-result\">\r\n    <li *ngFor=\"let hero of heroes$ | async\">\r\n      <a routerLink=\"../detail/{{ hero.id }}\">\r\n        {{ hero.name }}</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/heroes/heroes.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/heroes/heroes.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  My heroes\r\n</h2>\r\n<div>\r\n  <label>Hero name:\r\n    <input #heroName/>\r\n  </label>\r\n  <!-- (click) passes input value to add() and then clears the input -->\r\n  <button (click)=\"add(heroName.value); heroName.value=''\">\r\n    add\r\n  </button>\r\n</div>\r\n<ul class=\"heroes\">\r\n  <li *ngFor=\"let hero of heroes\">\r\n    <!--[class.selected]=\"hero === selectedHero\"\r\n    (click)=\"onSelect(hero)\"-->\r\n    <a routerLink=\"../detail/{{ hero.id }}\">\r\n      <span class=\"badge\">\r\n        {{ hero.id }}</span>\r\n      {{ hero.name }}</a>\r\n    <button (click)=\"delete(hero)\"\r\n            class=\"delete\"\r\n            title=\"delete hero\">x\r\n    </button>\r\n  </li>\r\n</ul>\r\n<!--<app-hero-detail [hero]=\"selectedHero\"></app-hero-detail>-->\r\n");

/***/ }),

/***/ "./src/app/module/heroes/app-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/module/heroes/app-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/module/heroes/app.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/module/heroes/component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/heroes/heroes.component */ "./src/app/module/heroes/component/heroes/heroes.component.ts");
/* harmony import */ var _component_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/hero-detail/hero-detail.component */ "./src/app/module/heroes/component/hero-detail/hero-detail.component.ts");







const routes = [
    {
        path: 'heroes',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            {
                path: 'dashboard',
                component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            },
            {
                path: 'details',
                component: _component_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"]
            },
            {
                path: 'detail/:id',
                component: _component_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__["HeroDetailComponent"]
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/module/heroes/app.component.css":
/*!*************************************************!*\
  !*** ./src/app/module/heroes/app.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\r\n\r\nsection.heroes-old {\r\n  max-width: calc(100% - 260px)\r\n}\r\n\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/heroes/app.component.ts":
/*!************************************************!*\
  !*** ./src/app/module/heroes/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let AppComponent = class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = '_my_heroes';
    }
    ngOnInit() {
        this.setTitle(this.title);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/module/heroes/app.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], AppComponent);



/***/ }),

/***/ "./src/app/module/heroes/app.module.ts":
/*!*********************************************!*\
  !*** ./src/app/module/heroes/app.module.ts ***!
  \*********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/module/heroes/app.component.ts");
/* harmony import */ var _component_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/heroes/heroes.component */ "./src/app/module/heroes/component/heroes/heroes.component.ts");
/* harmony import */ var _component_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/hero-detail/hero-detail.component */ "./src/app/module/heroes/component/hero-detail/hero-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/module/heroes/app-routing.module.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/module/heroes/component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/hero-search/hero-search.component */ "./src/app/module/heroes/component/hero-search/hero-search.component.ts");
/* harmony import */ var _gen_modules_messages_messages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../gen_modules/messages/messages.module */ "./src/app/gen_modules/messages/messages.module.ts");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _gen_modules_messages_messages_module__WEBPACK_IMPORTED_MODULE_10__["MessagesModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _component_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"],
            _component_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__["HeroDetailComponent"],
            _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
            _component_hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_9__["HeroSearchComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/module/heroes/component/dashboard/dashboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/module/heroes/component/dashboard/dashboard.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* DashboardComponent's private CSS styles */\r\n\r\nsection.dash-left-col {\r\n  display: grid\r\n}\r\n\r\n.hero {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  margin-bottom: 0\r\n}\r\n\r\nh4 {\r\n  position: relative;\r\n}\r\n\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607d8b;\r\n  border-radius: 2px;\r\n}\r\n\r\n.module:hover {\r\n  background-color: #eee;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n\r\n.grid {\r\n  margin: 0;\r\n}\r\n\r\n.grid-pad {\r\n  /*padding: 10px 0;*/\r\n  padding: 10px;\r\n}\r\n\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  /*padding-right: 20px;*/\r\n}\r\n\r\n[class*='col-']:last-of-type {\r\n  /*padding-right: 0;*/\r\n}\r\n\r\n[class*='col-'] {\r\n  float: left;\r\n  padding: 0 10px 20px;\r\n  /*padding-right: 20px;*/\r\n  /*padding-bottom: 20px;*/\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/heroes/component/dashboard/dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module/heroes/component/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/hero */ "./src/app/model/hero.ts");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_2__["HERO_NOUN"]);
    }
    getHeroes() {
        this.heroService.getHeroes().subscribe(heroeS => this.heroes = heroeS.slice(0, 4));
    }
    ngOnInit() {
        this.getHeroes();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_3__["MarvelService"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/module/heroes/component/dashboard/dashboard.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_3__["MarvelService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/module/heroes/component/hero-detail/hero-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/module/heroes/component/hero-detail/hero-detail.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n  font-family: Arial, serif;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  /*cursor: hand;*/\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/heroes/component/hero-detail/hero-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module/heroes/component/hero-detail/hero-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/hero */ "./src/app/model/hero.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let HeroDetailComponent = class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
        heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_2__["HERO_NOUN"]);
    }
    getHero() {
        console.log('HeroDetailComponent # getHero() # this.route.snapshot.paramMap: ' + this.route.snapshot.paramMap);
        const id = +this.route.snapshot.paramMap.get('id');
        const subscription = this.heroService
            .getHeroNo404(id) // .getHero(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => subscription.unsubscribe()))
            .subscribe((heroS) => this.hero = heroS);
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
    }
    ngOnInit() {
        this.getHero();
    }
};
HeroDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _model_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"])
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hero-detail.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/hero-detail/hero-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/module/heroes/component/hero-detail/hero-detail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], HeroDetailComponent);



/***/ }),

/***/ "./src/app/module/heroes/component/hero-search/hero-search.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/module/heroes/component/hero-search/hero-search.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroSearch private styles */\r\n.search-result li {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 195px;\r\n  height: 16px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result li:hover {\r\n  background-color: #607D8B;\r\n}\r\n.search-result li a {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result li a:hover {\r\n  color: white;\r\n}\r\n.search-result li a:active {\r\n  color: white;\r\n}\r\n#search-box {\r\n  width: 200px;\r\n  height: 20px\r\n}\r\nh4 {\r\n  margin-bottom: 0\r\n}\r\nul.search-result {\r\n  margin-top: 0;\r\n  padding-left: 0\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/heroes/component/hero-search/hero-search.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module/heroes/component/hero-search/hero-search.component.ts ***!
  \******************************************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/hero */ "./src/app/model/hero.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let HeroSearchComponent = class HeroSearchComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_2__["HERO_NOUN"]);
    }
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((termString) => this.heroService.searchHeroes(termString)));
    }
};
HeroSearchComponent.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"] }
];
HeroSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hero-search.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/hero-search/hero-search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hero-search.component.css */ "./src/app/module/heroes/component/hero-search/hero-search.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"]])
], HeroSearchComponent);



/***/ }),

/***/ "./src/app/module/heroes/component/heroes/heroes.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/module/heroes/component/heroes/heroes.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.heroes li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.heroes a:hover {\r\n  color: #607D8B;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  /*cursor: hand;*/\r\n  font-family: Arial, serif;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 192px;\r\n  top: -33px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\nlabel {\r\n  margin-right: 10px\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/heroes/component/heroes/heroes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/module/heroes/component/heroes/heroes.component.ts ***!
  \********************************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/hero */ "./src/app/model/hero.ts");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");




let HeroesComponent = class HeroesComponent {
    constructor(heroService) {
        this.heroService = heroService;
        heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_2__["HERO_NOUN"]);
    }
    getHeroes() {
        // this.heroes = this.heroService.getHeroes();
        this.subscription = this.heroService.getHeroes()
            .subscribe(heroesTable => this.heroes = heroesTable);
    }
    // onSelect(hero: Hero): void {
    //   if (hero !== this.heroTemp) {
    //     this.heroTemp = hero;
    //     this.selectedHero = hero;
    //   } else {
    //     this.heroTemp = null;
    //     this.selectedHero = null;
    //   }
    // }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.subscription = this.heroService.addHero({ name })
            .subscribe(heroO => {
            this.heroes.push(heroO);
        });
    }
    delete(hero) {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.subscription = this.heroService.deleteHero(hero).subscribe();
    }
    ngOnInit() {
        this.getHeroes();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
HeroesComponent.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_3__["MarvelService"] }
];
HeroesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heroes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./heroes.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/heroes/component/heroes/heroes.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./heroes.component.css */ "./src/app/module/heroes/component/heroes/heroes.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_3__["MarvelService"]])
], HeroesComponent);



/***/ })

}]);