(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-module-crisis-admin-admin-module"],{

/***/ "./src/app/module/crisis/admin/admin-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/module/crisis/admin/admin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/module/crisis/admin/index.ts");




const adminRoutes = [
    {
        path: '',
        component: _index__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [
            _index__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
        ],
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'clear',
                        component: _index__WEBPACK_IMPORTED_MODULE_3__["ClearComponent"]
                    },
                    {
                        path: 'crises',
                        component: _index__WEBPACK_IMPORTED_MODULE_3__["ManageCrisesComponent"]
                    },
                    {
                        path: 'heroes',
                        component: _index__WEBPACK_IMPORTED_MODULE_3__["ManageHeroesComponent"]
                    },
                    {
                        path: '',
                        component: _index__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]
                    }
                ],
                canActivateChild: [
                    _index__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ]
            }
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(adminRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/module/crisis/admin/admin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/module/crisis/admin/admin.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/module/crisis/admin/admin-routing.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/app/module/crisis/admin/index.ts");





let AdminModule = class AdminModule {
};
AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]
        ],
        declarations: [
            _index__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
            _index__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"],
            _index__WEBPACK_IMPORTED_MODULE_4__["ManageCrisesComponent"],
            _index__WEBPACK_IMPORTED_MODULE_4__["ManageHeroesComponent"],
            _index__WEBPACK_IMPORTED_MODULE_4__["ClearComponent"]
        ]
        // providers: [ // old way DI
        //   AuthGuard
        // ]
    })
], AdminModule);



/***/ })

}]);