(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["heroes-heroes-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/heroes/hero-detail/hero-detail.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/heroes/hero-detail/hero-detail.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  details!\r\n</h2>\r\n<!--<div *ngIf=\"hero$ | async as hero\">-->\r\n<div *ngIf=\"hero\">\r\n  <h2>\r\n    {{ editName | uppercase }}\r\n  </h2>\r\n  <div>\r\n    <span>id: </span>{{ hero.id }}\r\n  </div>\r\n  <div>\r\n    <label>name:<input [(ngModel)]=\"editName\"\r\n                       placeholder=\"wpisz imię\"></label>\r\n  </div>\r\n  <button (click)=\"save(hero)\">save</button>\r\n  <button (click)=\"goToHeroesList(hero.id.toString())\">go back</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/heroes/hero-list/hero-list.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/heroes/hero-list/hero-list.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"inline-block\">\r\n  HEROES\r\n</h2>\r\n<div>\r\n  (ilość: {{ qty }})\r\n</div>\r\n<div>\r\n  <label>Hero name: <input #heroName/></label>\r\n  <button (click)=\"add(heroName.value); heroName.value=''\">\r\n    add\r\n  </button>\r\n</div>\r\n<ul class=\"heroes\">\r\n  <li *ngFor=\"let hero of heroes$\"\r\n      [class.selected]=\"hero.id === selectedId\">\r\n    <!--<a routerLink=\"../hero/{{hero.id}}\">-->\r\n    <a [routerLink]=\"['../hero', hero.id]\">\r\n      <span class=\"badge\">\r\n        {{ hero.id }}</span>\r\n      {{ hero.name }}</a>\r\n    <button (click)=\"delete(hero)\"\r\n            class=\"delete\"\r\n            title=\"delete hero\">\r\n      <strong>x</strong></button>\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-detail/hero-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-detail/hero-detail.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n  font-family: Arial, serif;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  /*cursor: hand;*/\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-detail/hero-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-detail/hero-detail.component.ts ***!
  \***************************************************************************/
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
/* harmony import */ var _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/can-deactivate.guard */ "./src/app/module/crisis/service/can-deactivate.guard.ts");
/* harmony import */ var _service_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/dialog.service */ "./src/app/module/crisis/service/dialog.service.ts");









let HeroDetailComponent = class HeroDetailComponent extends _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"] {
    constructor(route, router, heroService, location) {
        super();
        this.route = route;
        this.router = router;
        this.heroService = heroService;
        this.location = location;
        this.heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_2__["HERO_NOUN"]);
    }
    canDeactivate() {
        if (!this.hero || this.hero.name === this.editName) {
            return true;
        }
        return _service_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"].confirm('Discard changes?');
    }
    goBack() {
        this.location.back();
    }
    goToHeroesList(heroId) {
        this.router.navigate(['../../', { id: heroId, foo: 'fighters' }], { relativeTo: this.route });
    }
    save(hero) {
        hero.name = this.editName;
        this.heroService.updateHero(hero)
            .subscribe(() => this.goToHeroesList(hero.id.toString()));
    }
    ngOnInitDontUse() {
        this.hero$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => this.heroService.getHero(params.get('id'))));
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe((data) => {
            this.hero = data.hero;
            this.editName = this.hero.name;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
HeroDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
HeroDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hero-detail.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/heroes/hero-detail/hero-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/module/crisis/heroes/hero-detail/hero-detail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _service_marvel_service__WEBPACK_IMPORTED_MODULE_4__["MarvelService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], HeroDetailComponent);



/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-detail/service/hero-detail-resolver-service.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-detail/service/hero-detail-resolver-service.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: HeroDetailResolverServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailResolverServiceModule", function() { return HeroDetailResolverServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeroDetailResolverServiceModule = class HeroDetailResolverServiceModule {
};
HeroDetailResolverServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], HeroDetailResolverServiceModule);



/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-detail/service/hero-detail-resolver.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-detail/service/hero-detail-resolver.service.ts ***!
  \******************************************************************************************/
/*! exports provided: HeroDetailResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailResolverService", function() { return HeroDetailResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../model/hero */ "./src/app/model/hero.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _hero_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-detail-resolver-service.module */ "./src/app/module/crisis/heroes/hero-detail/service/hero-detail-resolver-service.module.ts");








let HeroDetailResolverService = class HeroDetailResolverService {
    constructor(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_4__["HERO_NOUN"]);
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        return this.heroService
            .getHeroNo404(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(hero => {
            if (hero) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(hero);
            }
            else {
                this.router
                    .navigate(['/crisis/crisis-center/superheroes'])
                    .then((success) => console.log('HeroDetailResolverService # resolve() # navigate(): ' +
                    state.url + ' / ' + success));
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }
        }));
    }
};
HeroDetailResolverService.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeroDetailResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _hero_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_7__["HeroDetailResolverServiceModule"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HeroDetailResolverService);



/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-list/hero-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-list/hero-list.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.heroes li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.heroes a:hover {\r\n  color: #607D8B;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  /*cursor: hand;*/\r\n  font-family: Arial, serif;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 192px;\r\n  top: -33px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n.heroes li.selected {\r\n  background-color: #bdbfdc;\r\n  color: white;\r\n}\r\n.heroes li.selected:hover {\r\n  background-color: #a9a0dc;\r\n}\r\nlabel {\r\n  margin-right: 8px\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-list/hero-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-list/hero-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeroListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListComponent", function() { return HeroListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/hero */ "./src/app/model/hero.ts");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let HeroListComponent = class HeroListComponent {
    constructor(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_2__["HERO_NOUN"]);
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.subscription = this.heroService.addHero({ name })
            .subscribe((oneHero) => {
            this.heroes$.push(oneHero);
            this.qty++;
        });
    }
    delete(hero) {
        this.heroes$ = this.heroes$.filter(h => h !== hero);
        this.subscription = this.heroService.deleteHero(hero).subscribe(() => {
            this.qty--;
        });
    }
    ngOnInitDontUse() {
        this.subscription = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(params => {
            this.selectedId = +params.get('id');
            // console.log(this.selectedId);
            // setTimeout(() => console.log('time'), 50);
            this.subscription2 = this.heroService.getHeroes()
                .subscribe(heroTable => {
                this.heroes$ = heroTable;
                this.qty = heroTable.length;
            });
            return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]();
        })).subscribe(); // trzeba zasubskrybować zmienną Observable, aby wykonało lambdy
    }
    ngOnInit() {
        this.subscription = this.route.data
            .subscribe((data) => {
            this.heroes$ = data.heroesHere;
            this.qty = this.heroes$.length;
        });
        this.subscription2 = this.route.paramMap
            .subscribe(params => {
            this.selectedId = +params.get('id');
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
};
HeroListComponent.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_3__["MarvelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
HeroListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hero-list.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/heroes/hero-list/hero-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hero-list.component.css */ "./src/app/module/crisis/heroes/hero-list/hero-list.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_3__["MarvelService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], HeroListComponent);



/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-list/service/hero-list-resolver-service.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-list/service/hero-list-resolver-service.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: HeroListResolverServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListResolverServiceModule", function() { return HeroListResolverServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeroListResolverServiceModule = class HeroListResolverServiceModule {
};
HeroListResolverServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], HeroListResolverServiceModule);



/***/ }),

/***/ "./src/app/module/crisis/heroes/hero-list/service/hero-list-resolver.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/module/crisis/heroes/hero-list/service/hero-list-resolver.service.ts ***!
  \**************************************************************************************/
/*! exports provided: HeroListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListResolverService", function() { return HeroListResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _model_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../model/hero */ "./src/app/model/hero.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _hero_list_resolver_service_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-list-resolver-service.module */ "./src/app/module/crisis/heroes/hero-list/service/hero-list-resolver-service.module.ts");








let HeroListResolverService = class HeroListResolverService {
    constructor(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        heroService.setNouns(_model_hero__WEBPACK_IMPORTED_MODULE_3__["HERO_NOUN"]);
    }
    resolve(route, state) {
        return this.heroService.getHeroes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(heroTab => {
            if (heroTab) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(heroTab);
            }
            else {
                this.router.navigate(['/crisis']);
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }
        }));
    }
};
HeroListResolverService.ctorParameters = () => [
    { type: _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeroListResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _hero_list_resolver_service_module__WEBPACK_IMPORTED_MODULE_7__["HeroListResolverServiceModule"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HeroListResolverService);



/***/ }),

/***/ "./src/app/module/crisis/heroes/heroes-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/module/crisis/heroes/heroes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HeroesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesRoutingModule", function() { return HeroesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/module/crisis/heroes/hero-detail/hero-detail.component.ts");
/* harmony import */ var _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-list/hero-list.component */ "./src/app/module/crisis/heroes/hero-list/hero-list.component.ts");
/* harmony import */ var _hero_detail_service_hero_detail_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-detail/service/hero-detail-resolver.service */ "./src/app/module/crisis/heroes/hero-detail/service/hero-detail-resolver.service.ts");
/* harmony import */ var _hero_list_service_hero_list_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-list/service/hero-list-resolver.service */ "./src/app/module/crisis/heroes/hero-list/service/hero-list-resolver.service.ts");
/* harmony import */ var _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/can-deactivate.guard */ "./src/app/module/crisis/service/can-deactivate.guard.ts");








const heroesRoutes = [
    {
        path: '',
        component: _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_4__["HeroListComponent"],
        resolve: {
            heroesHere: _hero_list_service_hero_list_resolver_service__WEBPACK_IMPORTED_MODULE_6__["HeroListResolverService"]
        },
        data: {
            animation: 'heroesq'
        }
    },
    {
        path: 'superhero/:id',
        component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__["HeroDetailComponent"],
        resolve: {
            hero: _hero_detail_service_hero_detail_resolver_service__WEBPACK_IMPORTED_MODULE_5__["HeroDetailResolverService"]
        },
        data: {
            animation: 'heroq'
        },
        canDeactivate: [
            _service_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]
        ]
    },
    {
        path: 'hero/:id',
        redirectTo: 'superhero/:id'
    }
];
let HeroesRoutingModule = class HeroesRoutingModule {
};
HeroesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(heroesRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HeroesRoutingModule);



/***/ }),

/***/ "./src/app/module/crisis/heroes/heroes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/module/crisis/heroes/heroes.module.ts ***!
  \*******************************************************/
/*! exports provided: HeroesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesModule", function() { return HeroesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _heroes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes-routing.module */ "./src/app/module/crisis/heroes/heroes-routing.module.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/module/crisis/heroes/hero-detail/hero-detail.component.ts");
/* harmony import */ var _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-list/hero-list.component */ "./src/app/module/crisis/heroes/hero-list/hero-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _hero_list_service_hero_list_resolver_service_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-list/service/hero-list-resolver-service.module */ "./src/app/module/crisis/heroes/hero-list/service/hero-list-resolver-service.module.ts");
/* harmony import */ var _hero_detail_service_hero_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-detail/service/hero-detail-resolver-service.module */ "./src/app/module/crisis/heroes/hero-detail/service/hero-detail-resolver-service.module.ts");










let HeroesModule = class HeroesModule {
};
HeroesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _hero_list_service_hero_list_resolver_service_module__WEBPACK_IMPORTED_MODULE_8__["HeroListResolverServiceModule"],
            _hero_detail_service_hero_detail_resolver_service_module__WEBPACK_IMPORTED_MODULE_9__["HeroDetailResolverServiceModule"],
            _heroes_routing_module__WEBPACK_IMPORTED_MODULE_3__["HeroesRoutingModule"]
        ],
        declarations: [
            _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_5__["HeroListComponent"],
            _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"]
        ],
        providers: [
            _service_marvel_service__WEBPACK_IMPORTED_MODULE_7__["MarvelService"] // osobna instancja dla Heroes!, w końcu wiadomo o co cho
            // HeroListResolverService,
            // HeroDetailResolverService,
            // CanDeactivateGuard
        ]
    })
], HeroesModule);



/***/ })

}]);