(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/auth/login/login.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/auth/login/login.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  LOGIN\r\n</h2>\r\n<p>\r\n  {{ message }}\r\n</p>\r\n<p>\r\n  <button (click)=\"login()\"\r\n          *ngIf=\"!authService.isLoggedIn\">Login\r\n  </button>\r\n  <button (click)=\"logout()\"\r\n          *ngIf=\"authService.isLoggedIn\">Logout\r\n  </button>\r\n</p>\r\n<div *ngIf=\"temp\">\r\n  <p>\r\n    Zapisano w local storage:<br>\r\n    Session ID: {{ temp.session_id || 'nic' }}<br>\r\n    Token: {{ temp.fragment || 'nic' }}\r\n  </p>\r\n</div>\r\n<div *ngIf=\"!temp\">\r\n  <p>\r\n    Nic nie zapisano w local storage\r\n  </p>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/module/crisis/auth/auth-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/module/crisis/auth/auth-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/module/crisis/auth/login/login.component.ts");




const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/module/crisis/auth/auth.module.ts":
/*!***************************************************!*\
  !*** ./src/app/module/crisis/auth/auth.module.ts ***!
  \***************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/app/module/crisis/auth/index.ts");





let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _index__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]
        ],
        declarations: [
            _index__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/module/crisis/auth/index.ts":
/*!*********************************************!*\
  !*** ./src/app/module/crisis/auth/index.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/module/crisis/auth/auth-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/module/crisis/auth/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]; });






/***/ }),

/***/ "./src/app/module/crisis/auth/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/module/crisis/auth/login/login.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/module/crisis/auth/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/module/crisis/auth/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_index_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/index-services */ "./src/app/service/index-services.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/module/crisis/auth/service/auth.service.ts");





const toStoreTempl = {
    session_id: undefined,
    fragment: undefined
};
let LoginComponent = class LoginComponent {
    constructor(authService, // public for AOT
    router, storage, route) {
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.route = route;
        this.setMessage();
        this.temp = this.storage.getQueryParamsAndFragment();
    }
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
    login() {
        this.message = 'Trying to log in...';
        this.subscription = this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                const redirect = this.authService.redirectUrl
                    ? this.router.parseUrl(this.authService.redirectUrl).toString().split('?')[0]
                    // ? '/crisis/crisis-center/admin'
                    : '/crisis';
                console.log('LoginComponent # login() # redirect: ' + redirect);
                // Redirect the user
                // this.router.navigateByUrl(redirect, navigationExtras); // TODO navigateByUrl olewa queryParams i fragment!
                this.router.navigate([...redirect.split('/')], { queryParamsHandling: 'preserve', preserveFragment: true });
            }
        });
        this.temp = this.extractObj();
        this.store(this.temp);
    }
    extractObj() {
        this.sessionIdd = this.route.snapshot.queryParams.session_id || null;
        this.tokenn = this.route.snapshot.fragment || null;
        const toStore = toStoreTempl;
        toStore.session_id = this.sessionIdd;
        toStore.fragment = this.tokenn;
        return toStore;
    }
    store(temp) {
        this.storage.storeQueryParamsAndFragment(temp);
        console.log('LoginComponent # store(temp): ' + JSON.stringify(temp));
    }
    logout() {
        this.authService.logout();
        this.storage.clearLocalStorage();
        this.setMessage();
        this.router.navigate(['crisis'], {
            queryParamsHandling: 'preserve',
            preserveFragment: true
        })
            .then(() => this.authService.redirectUrl = undefined);
    }
    setTemp() {
        this.temp = this.storage.getQueryParamsAndFragment();
    }
    ngOnInit() {
        this.setTemp();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_index_services__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/auth/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/module/crisis/auth/login/login.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_service_index_services__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], LoginComponent);



/***/ })

}]);