/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
!function(n){n.ng=n.ng||{},n.ng.common=n.ng.common||{},n.ng.common.locales=n.ng.common.locales||{};const e=void 0;n.ng.common.locales.en=["en",[["a","p"],["AM","PM"],e],[["AM","PM"],e,e],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],e,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],e,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",e,"{1} 'at' {0}",e],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},function(n){let e=Math.floor(Math.abs(n)),o=n.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===o?1:5},[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],e],[["midnight","noon","morning","afternoon","evening","night"],e,e],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]}("undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window);;var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en"});(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/notfound404/notfound404.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/notfound404/notfound404.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  Page not found\r\n</h2>\r\n<div class=\"bottom-right bottom-right-generic\">\r\n  <nav>\r\n    <a routerLink=\"/choose\">Back to choice</a>\r\n  </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/observ/observ.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/observ/observ.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cite>\r\n  <a href=\"https://coryrylan.com/blog/subscribing-to-multiple-observables-in-angular-components\"\r\n     target=\"_blank\">\r\n    https://coryrylan.com/blog/subscribing-to-multiple-observables-in-angular-components</a></cite>\r\n<h2>\r\n  Manual Subscriptions\r\n</h2>\r\n<ng-container>\r\n  <p>\r\n    single value: {{ first }}\r\n    <br>\r\n    delayed value: {{ second }}\r\n    <br>\r\n    multi values: {{ third }}\r\n  </p>\r\n</ng-container>\r\n<h2>\r\n  Async Pipe\r\n  <button (click)=\"show = !show\">\r\n    Toggle\r\n  </button>\r\n</h2>\r\n<ng-container *ngIf=\"show\">\r\n  <p>\r\n    single value: {{ first$ | async }}\r\n    <br>\r\n    delayed value: {{ second$ | async }}\r\n    <br>\r\n    multi values: {{ third$ | async }}\r\n  </p>\r\n</ng-container>\r\n<h2>\r\n  ForkJoin and *ngIf\r\n  <button (click)=\"show2 = !show2\">\r\n    Toggle\r\n  </button>\r\n</h2>\r\n<ng-container *ngIf=\"show2\">\r\n  <ng-container *ngIf=\"values$ | async; let arek\">\r\n    <p>\r\n      single value: {{ arek['first'] }}\r\n      <br>\r\n      delayed value: {{ arek['second'] }}\r\n      <br>\r\n      <del>no multi values:</del>\r\n      {{ arek['third'] || '-' }}\r\n    </p>\r\n  </ng-container>\r\n</ng-container>\r\n<h2>\r\n  Combine Latest and *ngIf\r\n  <button (click)=\"show3 = !show3\">\r\n    Toggle\r\n  </button>\r\n</h2>\r\n<ng-container *ngIf=\"show3\">\r\n  <ng-container *ngIf=\"values$$ | async; let arek\">\r\n    <p>\r\n      single value: {{ arek['first'] }}\r\n      <br>\r\n      delayed value: {{ arek['second'] }}\r\n      <br>\r\n      multi values: {{ arek['third'] }}\r\n    </p>\r\n  </ng-container>\r\n</ng-container>\r\n<h2>\r\n  Subscribing with Async Pipe Objects\r\n  <button (click)=\"show4 = !show4\">\r\n    Toggle\r\n  </button>\r\n</h2>\r\n<ng-container *ngIf=\"show4\">\r\n  <ng-container *ngIf=\"{first: this.first$$ | async, second: second$$ | async, third: third$$ | async} as arek\">\r\n    <p>\r\n      single value: {{ arek.first }}\r\n      <br>\r\n      delayed value: {{ arek.second }}\r\n      <br>\r\n      multi values: {{ arek.third }}\r\n    </p>\r\n  </ng-container>\r\n</ng-container>\r\n<h2>\r\n  <b>Additional</b>: onErrorResumeNext()\r\n  <button (click)=\"show5 = !show5\">Toggle</button>\r\n</h2>\r\n<ng-container *ngIf=\"show5\">\r\n<pre>\r\nthis.values$$$ = onErrorResumeNext&lt;string>(\r\n  getSingleValueObservable(100),\r\n  getMultiValueObservable().pipe(map&lt;number, string>((el) => el + '')));</pre>\r\n  <ng-container *ngIf=\"values$$$ | async; let arek\">\r\n    <p>\r\n      value: {{ arek }}\r\n    </p>\r\n  </ng-container>\r\n</ng-container>\r\n<h2>\r\n  <b>Additional</b>: withLatestFrom()\r\n  <button (click)=\"show6 = !show6\">\r\n    Toggle\r\n  </button>\r\n</h2>\r\n<ng-container *ngIf=\"show6\">\r\n<pre>\r\nthis.values$$$$ = getMultiValueObservable().pipe(\r\n  withLatestFrom&lt;number, &#123;first: number, second: number}>(getMultiValueObservable(4000), (one, two) => &#123;\r\n    return &#123;first: one, second: two};\r\n  }));</pre>\r\n  <p>\r\n    both values:\r\n    <ng-container *ngIf=\"values$$$$ | async; let arek\">\r\n      {{ arek['first'] }}, {{ arek['second'] }}\r\n    </ng-container>\r\n  </p>\r\n</ng-container>\r\n<div class=\"bottom-right bottom-right-generic\">\r\n  <nav>\r\n    <a routerLink=\"/choose\">Back to choice</a>\r\n  </nav>\r\n</div>\r\n<h2>\r\n  <b>Additional</b>: different delay Observable&lt;number>\r\n  <button (click)=\"toggleHidden('hide7', sym7, 'pre7')\">\r\n    Toggle\r\n  </button>\r\n</h2>\r\n<ng-container *ngIf=\"this[sym7]\">\r\n  <div class=\"toHide\"\r\n       id=\"hide7\">\r\n    <pre class=\"toHide\"\r\n         id=\"pre7\">\r\nfunction getMultiValuesWithDifferentDelay(del = 20, del2 = 20, intervalMs = 100, qty = 15, id = 'A') &#123;\r\n  return new Observable&lt;&#123;val: number, id: string}>((observer) => &#123;\r\n    intervalMs = (intervalMs < 100) ? 100 : intervalMs;\r\n    const delResulted = del * intervalMs;\r\n    const delResulted2 = del2 * intervalMs;\r\n    let tick = true;\r\n    let done = true;\r\n    let count = 1;\r\n    let timeout;\r\n    let timeout2;\r\n\r\n    const intervalId = setInterval(() => &#123;\r\n      if (done) &#123;\r\n        done = false;\r\n        if (tick) &#123;\r\n          timeout = setTimeout(() => &#123;\r\n            observer.next(count);\r\n            tick = false;\r\n            done = true;\r\n            clearTimeout(timeout2);\r\n            console.log('------------------------ interval fired after delResulted =', delResulted, 'ms, emitted:', count, 'from:', id);\r\n            count++;\r\n          }, delResulted);\r\n        } else &#123;\r\n          timeout2 = setTimeout(() => &#123;\r\n            observer.next(count);\r\n            tick = true;\r\n            done = true;\r\n            clearTimeout(timeout);\r\n            console.log('------------------------ interval fired after delResulted2 =', delResulted2, 'ms, emitted:', count, 'from:', id);\r\n            count++;\r\n          }, delResulted2);\r\n        }\r\n      }\r\n    }, interval);\r\n    return () => &#123;\r\n      clearInterval(intervalId);\r\n      clearTimeout(timeout);\r\n      clearTimeout(timeout2);\r\n    };\r\n  }).pipe(take(qty));\r\n}\r\n\r\nthis.values$$$$$ = getMultiValuesWithDifferentDelay(20, 79, undefined, 30);\r\nthis.values$$$$$$ = getMultiValuesWithDifferentDelay(80, 20, undefined, undefined, 'B');\r\nlet buff1: number;\r\nlet buff2: number;\r\nthis.values$$$$$$$ = merge(this.values$$$$$, this.values$$$$$$).pipe(\r\n  tap(&#123;\r\n    next(val) &#123;\r\n      if (val.id === 'A') &#123;\r\n        buff1 = val.val;\r\n        return;\r\n      }\r\n      buff2 = val.val;\r\n    },\r\n    complete() &#123;\r\n      buff1 = undefined;\r\n      buff2 = undefined;\r\n    }\r\n  }),\r\n  map((val) => &#123;\r\n    if (val.id === 'A') &#123;\r\n      return &#123;one: val.val, two: buff2, id: val.id};\r\n    }\r\n    return &#123;one: buff1, two: val.val, id: val.id};\r\n  }));</pre>\r\n  </div>\r\n  <p>\r\n    <ng-container *ngIf=\"values$$$$$$$ | async; let arek; else elseBlock\">\r\n      value A:\r\n      {{ arek['one'] || 'N/A' }}\r\n      <br>\r\n      value B:\r\n      {{ arek['two'] || 'N/A' }}\r\n      <br>\r\n      update from:\r\n      {{ arek['id'] || '—' }}\r\n    </ng-container>\r\n    <ng-template #elseBlock>\r\n      value A: N/A\r\n      <br>\r\n      value B: N/A\r\n      <br>\r\n      update from: —\r\n    </ng-template>\r\n  </p>\r\n</ng-container>\r\n<div class=\"bottom-right bottom-right-generic\">\r\n  <nav>\r\n    <a routerLink=\"/choose\">Back to choice</a>\r\n  </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/template-ref-example/rows.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/template-ref-example/rows.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 (click)=\"onClick()\"\r\n    style=\"cursor: pointer; margin: 5px auto\">\r\n  Click - reattach() via RowsComponent\r\n</h5>\r\n<div *ngFor=\"let row of rows\">\r\n  <ng-container *ngTemplateOutlet=\"template; context: {rowData: row}\">\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/template-ref-example/template-ref-example.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/template-ref-example/template-ref-example.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 (click)=\"onClick()\"\r\n    style=\"cursor: pointer; margin-bottom: 5px\">\r\n  Click me\r\n  <span *ngIf=\"flag && !tock\" style=\"color: red\"><b>tick</b></span>\r\n  <span *ngIf=\"flag && tock\" style=\"color: red\"><b>tock</b></span>\r\n</h5>\r\n<h5 (click)=\"onClick2()\"\r\n    style=\"cursor: pointer; margin: 5px auto\">\r\n  Click - reattach() via TemplateRefExampleComponent reference to static in RowsComponent\r\n</h5>\r\n<app-rows [rows]=\"rows\">\r\n  <ng-template let-rowOne=\"rowData\">\r\n    {{ getName(rowOne) }}\r\n  </ng-template>\r\n</app-rows>\r\n<app-foooter></app-foooter>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/footer/foooter.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/footer/foooter.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bottom-right bottom-right-generic\">\r\n  <nav>\r\n    <a routerLink=\"/choose\">Back to choice</a>\r\n  </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/compose-message/compose-message.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/compose-message/compose-message.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n  <h3>Contact Crisis Center</h3>\r\n  <div *ngIf=\"details\">\r\n    {{ details }}\r\n  </div>\r\n  <div>\r\n    <label for=\"note\">Message:</label>\r\n  </div>\r\n  <div>\r\n    <textarea [(ngModel)]=\"message\"\r\n              [disabled]=\"sending\"\r\n              [ngStyle]=\"{width: '294px'}\"\r\n              cols=\"35\"\r\n              id=\"note\"\r\n              rows=\"10\"\r\n    ></textarea>\r\n  </div>\r\n  <p *ngIf=\"!sending\">\r\n    <button (click)=\"send()\">\r\n      Send\r\n    </button>&nbsp;\r\n    <button (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </p>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/start.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/start.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet name=\"popup\"></router-outlet>\r\n<router-outlet></router-outlet>\r\n<div *ngIf=\"lcr.langSwitched\"\r\n     class=\"container\">\r\n  <svg class=\"machine\"\r\n       viewBox=\"295 5 355 355\"\r\n       x=\"0px\"\r\n       xmlns=\"http://www.w3.org/2000/svg\"\r\n       y=\"0px\">\r\n    <defs></defs>\r\n    <g>\r\n      <path class=\"large-shadow\"\r\n            d=\"M645 194v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L602 68l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L482 10h-21l-4 29c-10 1-19 3-28 6l-14-25 -19 8 7 28c-8 5-16 10-24 16l-23-17L341 68l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L645 194zM471 294c-61 0-110-49-110-110S411 74 471 74s110 49 110 110S532 294 471 294z\">\r\n      </path>\r\n    </g>\r\n  </svg>\r\n</div>\r\n<div [class.bigger]=\"lcr.langSwitched\"\r\n     class=\"version bottom-left\">\r\n  {{ this.ver }}\r\n</div>\r\n<div appAddDblClick></div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/web-worker/worator.worker.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./src/app/web-worker/worator.worker.ts ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"d00af17f5d630b7296f102d\",\"version\":\"4.32.7\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"s\":\"ng serve --aot\",\"s2\":\"ng run heroes:serve2\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"build-i18n:en\":\"ng build --prod\",\"build-i18n:en:github\":\"ng build --output-path docs --base-href /_my_heroes/ --source-map false\",\"build-i18n:en:watch\":\"ng build --prod --watch\",\"build-i18n:pl\":\"ng build --configuration pl\",\"build-i18n:pl:watch\":\"ng build --configuration=pl --watch\",\"build-i18n\":\"npm run build-i18n:en && npm run build-i18n:pl\",\"build-i18n-github\":\"(if exist docs rmdir /q/s docs) && npm run build-i18n:en:github && xcopy src\\\\assets_common docs\\\\assets\\\\ /e && copy docs\\\\index.html docs\\\\404.html\",\"build-i18n-watch\":\"start npm run build-i18n:en:watch && start npm run build-i18n:pl:watch\",\"bi\":\"(if exist dist rmdir /q/s dist) && npm run build-i18n\",\"biw\":\"(if exist dist rmdir /q/s dist) && start npm run build-i18n:en:watch && start npm run build-i18n:pl:watch\",\"biws\":\"(if exist dist rmdir /q/s dist) && xcopy src\\\\assets_common dist\\\\assets\\\\ /e && node z_js_util_files\\\\__watch_serve_local.js\",\"a\":\"(if exist dist rmdir /q/s dist) && node z_js_util_files\\\\__setver patch && npm run build-i18n && xcopy src\\\\assets_common dist\\\\assets\\\\ /e && firebase deploy\",\"ag\":\"(if exist dist rmdir /q/s dist) && node z_js_util_files\\\\__setver patch && npm run build-i18n && npm run build-i18n-github && xcopy src\\\\assets_common dist\\\\assets\\\\ /e && firebase deploy\",\"am\":\"(if exist dist rmdir /q/s dist) && node z_js_util_files\\\\__setver minor && npm run build-i18n && xcopy src\\\\assets_common dist\\\\assets\\\\ /e && firebase deploy\",\"aM\":\"(if exist dist rmdir /q/s dist) && node z_js_util_files\\\\__setver major && npm run build-i18n && xcopy src\\\\assets_common dist\\\\assets\\\\ /e && firebase deploy\",\"ua\":\"yarn upgrade && (if exist dist rmdir /q/s dist) && node z_js_util_files\\\\__setver patch && npm run build-i18n && firebase deploy\",\"uam\":\"yarn upgrade && (if exist dist rmdir /q/s dist) && node z_js_util_files\\\\__setver minor && npm run build-i18n && firebase deploy\",\"uaM\":\"yarn upgrade && (if exist dist rmdir /q/s dist) && node z_js_util_files\\\\__setver major && npm run build-i18n && firebase deploy\",\"postinstall\":\"ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points\"},\"private\":true,\"dependencies\":{},\"devDependencies\":{\"@angular-builders/custom-webpack\":\"^8.4.1\",\"@angular-devkit/build-angular\":\"^0.900.1\",\"@angular/animations\":\"^9.0.0\",\"@angular/cli\":\"^9.0.1\",\"@angular/common\":\"^9.0.0\",\"@angular/compiler\":\"^9.0.0\",\"@angular/compiler-cli\":\"^9.0.0\",\"@angular/core\":\"^9.0.0\",\"@angular/forms\":\"^9.0.0\",\"@angular/language-service\":\"^9.0.0\",\"@angular/localize\":\"^9.0.0\",\"@angular/platform-browser\":\"^9.0.0\",\"@angular/platform-browser-dynamic\":\"^9.0.0\",\"@angular/pwa\":\"^0.900.1\",\"@angular/router\":\"^9.0.0\",\"@angular/service-worker\":\"^9.0.0\",\"@types/jasmine\":\"^3.5.3\",\"@types/jasminewd2\":\"^2.0.8\",\"@types/node\":\"^13.7.0\",\"angular-in-memory-web-api\":\"^0.9.0\",\"codelyzer\":\"^5.2.1\",\"core-js\":\"^3.6.4\",\"firebase-tools\":\"^7.12.1\",\"fs-extra\":\"^8.1.0\",\"http-server\":\"0.9.0\",\"jasmine-core\":\"^3.5.0\",\"jasmine-spec-reporter\":\"^4.2.1\",\"karma\":\"^4.4.1\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-cli\":\"^2.0.0\",\"karma-coverage-istanbul-reporter\":\"^2.1.1\",\"karma-jasmine\":\"^3.1.0\",\"karma-jasmine-html-reporter\":\"^1.5.2\",\"ngx-webstorage-service\":\"^4.1.0\",\"primeng\":\"^9.0.0-rc.4\",\"protractor\":\"^5.4.3\",\"rxjs\":\"^6.5.4\",\"source-map-explorer\":\"^2.2.2\",\"ts-node\":\"^8.6.2\",\"tslib\":\"^1.10.0\",\"tslint\":\"^5.20.1\",\"typescript\":\"~3.7\",\"webpack\":\"^4.41.5\",\"zone.js\":\"^0.10.2\"}}");

/***/ }),

/***/ "./src/app/component/index.ts":
/*!************************************!*\
  !*** ./src/app/component/index.ts ***!
  \************************************/
/*! exports provided: NotFound404Component, TemplateRefExampleComponent, ObservComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound404/notfound404.component */ "./src/app/component/notfound404/notfound404.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return _notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_1__["NotFound404Component"]; });

/* harmony import */ var _template_ref_example_template_ref_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-ref-example/template-ref-example.component */ "./src/app/component/template-ref-example/template-ref-example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateRefExampleComponent", function() { return _template_ref_example_template_ref_example_component__WEBPACK_IMPORTED_MODULE_2__["TemplateRefExampleComponent"]; });

/* harmony import */ var _observ_observ_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observ/observ.component */ "./src/app/component/observ/observ.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservComponent", function() { return _observ_observ_component__WEBPACK_IMPORTED_MODULE_3__["ObservComponent"]; });







/***/ }),

/***/ "./src/app/component/notfound404/notfound404.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/notfound404/notfound404.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/component/notfound404/notfound404.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/notfound404/notfound404.component.ts ***!
  \****************************************************************/
/*! exports provided: NotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return NotFound404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotFound404Component = class NotFound404Component {
};
NotFound404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound404',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notfound404.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/notfound404/notfound404.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notfound404.component.css */ "./src/app/component/notfound404/notfound404.component.css")).default]
    })
], NotFound404Component);



/***/ }),

/***/ "./src/app/component/observ/observ.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/observ/observ.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n  margin: 0;\r\n  padding: 1.245em 10px 0\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 0\r\n}\r\n\r\nbutton {\r\n  margin-left: 10px;\r\n  position: absolute\r\n}\r\n\r\npre {\r\n  font-family: monospace;\r\n  color: darkslategray;\r\n  /*padding: 5px 10px 10px; !*1.532308em 0.383em*!*/\r\n  padding: 3px 5px 5px;\r\n  margin: 1.532308em 10px 0;\r\n  background-color: lightgray;\r\n  border: darkgray dashed 1px;\r\n  width: max-content\r\n}\r\n\r\npre.toHide {\r\n  margin: 0\r\n}\r\n\r\ndiv.toHide {\r\n  width: max-content;\r\n  margin: 1.245em 10px 0;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  height: 0;\r\n  transition: height .4s linear 0s\r\n}\r\n");

/***/ }),

/***/ "./src/app/component/observ/observ.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/observ/observ.component.ts ***!
  \******************************************************/
/*! exports provided: ObservComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservComponent", function() { return ObservComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observ */ "./src/app/component/observ/observ.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ObservComponent = class ObservComponent {
    constructor() {
        this.show = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.show6 = false;
        this.first = 'N/A';
        this.second = 'N/A';
        this.third = 9999;
        this.first$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getSingleValueObservable"])();
        this.first$$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getSingleValueObservable"])();
        this.second$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getDelayedValueObservable"])();
        this.second$$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getDelayedValueObservable"])();
        this.third$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValueObservable"])();
        this.third$$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValueObservable"])();
        this.values$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getSingleValueObservable"])(),
            // getMultiValueObservable()]), // forkJoin on works for observables that complete
            Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getDelayedValueObservable"])()
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([first, second]) => {
            // forkJoin returns an array of values, here we map those values to an object
            return { first, second };
        }));
        this.values$$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getSingleValueObservable"])(),
            Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getDelayedValueObservable"])(),
            Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValueObservable"])()
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([first, second, third]) => {
            // combineLatest returns an array of values, here we map those values to an object
            return { first, second, third };
        }));
        this.values$$$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["onErrorResumeNext"])(Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getSingleValueObservable"])(100), Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValueObservable"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((el) => el + '')));
        this.values$$$$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValueObservable"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValueObservable"])(4000), (one, two) => {
            return { first: one, second: two };
        }));
        this.values$$$$$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValuesWithDifferentDelay"])(20, 79, undefined, 30);
        this.values$$$$$$ = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValuesWithDifferentDelay"])(80, 20, undefined, undefined, 'B');
        let buff1;
        let buff2;
        this.values$$$$$$$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.values$$$$$, this.values$$$$$$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])({
            next(val) {
                if (val.id === 'A') {
                    buff1 = val.val;
                    return;
                }
                buff2 = val.val;
            },
            complete() {
                buff1 = undefined;
                buff2 = undefined;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((val) => {
            if (val.id === 'A') {
                return { one: val.val, two: buff2, id: val.id };
            }
            return { one: buff1, two: val.val, id: val.id };
        }));
    }
    ngOnDestroy() {
        this.thirdSubscription.unsubscribe();
    }
    ngOnInit() {
        Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getSingleValueObservable"])()
            .subscribe(value => this.first = value);
        Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getDelayedValueObservable"])()
            .subscribe(value => this.second = value);
        this.thirdSubscription = Object(_observ__WEBPACK_IMPORTED_MODULE_3__["getMultiValueObservable"])()
            .subscribe(value => this.third = value);
    }
    toggleHidden(putIdHere, place, putIdOfTheElementToMeasure) {
        this[place] = true;
        const toId = setTimeout(() => {
            const divById = document.getElementById(putIdHere);
            const size = putIdOfTheElementToMeasure ? document.getElementById(putIdOfTheElementToMeasure).offsetHeight : 100;
            if (divById.classList.contains('toHide')) {
                if (divById.style.height === '0' || !divById.style.height) {
                    divById.style.height = size + 'px';
                }
                else {
                    divById.style.height = '0';
                    const toId2 = setTimeout(() => {
                        this[place] = false;
                        return () => clearTimeout(toId2);
                    }, 600);
                }
            }
            return () => clearTimeout(toId);
        }, 100);
    }
};
ObservComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-observ',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./observ.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/observ/observ.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./observ.component.css */ "./src/app/component/observ/observ.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ObservComponent);



/***/ }),

/***/ "./src/app/component/observ/observ.ts":
/*!********************************************!*\
  !*** ./src/app/component/observ/observ.ts ***!
  \********************************************/
/*! exports provided: getSingleValueObservable, getDelayedValueObservable, getMultiValueObservable, getMultiValuesWithDifferentDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleValueObservable", function() { return getSingleValueObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelayedValueObservable", function() { return getDelayedValueObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiValueObservable", function() { return getMultiValueObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiValuesWithDifferentDelay", function() { return getMultiValuesWithDifferentDelay; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



function getSingleValueObservable(del = 2000) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('single value').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(del));
}
function getDelayedValueObservable(del = 4000) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('delayed value').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(del));
}
function getMultiValueObservable(del = 2000) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
        let count = 0;
        const interval = setInterval(() => {
            observer.next(count++);
            console.log('interval fired');
        }, del);
        return () => {
            clearInterval(interval);
        };
    });
}
function getMultiValuesWithDifferentDelay(del = 20, del2 = 20, intervalMs = 100, qty = 15, id = 'A') {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
        intervalMs = (intervalMs < 100) ? 100 : intervalMs;
        const delResulted = del * intervalMs;
        const delResulted2 = del2 * intervalMs;
        let tick = true;
        let done = true;
        let count = 1;
        let timeout;
        let timeout2;
        const intervalId = setInterval(() => {
            if (done) {
                done = false;
                if (tick) {
                    timeout = setTimeout(() => {
                        observer.next({ val: count, id });
                        tick = false;
                        done = true;
                        clearTimeout(timeout2);
                        console.log('------------------------ interval fired after delResulted =', delResulted, 'ms, emitted:', count, 'from:', id);
                        count++;
                    }, delResulted);
                }
                else {
                    timeout2 = setTimeout(() => {
                        observer.next({ val: count, id });
                        tick = true;
                        done = true;
                        clearTimeout(timeout);
                        console.log('------------------------ interval fired after delResulted2 =', delResulted2, 'ms, emitted:', count, 'from:', id);
                        count++;
                    }, delResulted2);
                }
            }
        }, intervalMs);
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeout);
            clearTimeout(timeout2);
        };
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(qty));
}


/***/ }),

/***/ "./src/app/component/template-ref-example/rows.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/template-ref-example/rows.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/component/template-ref-example/rows.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/template-ref-example/rows.component.ts ***!
  \******************************************************************/
/*! exports provided: RowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowsComponent", function() { return RowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var RowsComponent_1;


let RowsComponent = RowsComponent_1 = class RowsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        // this.cdr.detach();
        console.log('stop - constructor - working, commented out');
        RowsComponent_1.$cdr = cdr;
    }
    static detect() {
        this.$cdr.reattach();
        console.log('start - via RowsComponent.detect()');
    }
    ngAfterViewInit() {
        this.cdr.detach(); // TODO Ivy, ponoć w Ivy działa
        console.log('stop - ngAfterViewInit - not working');
    }
    ngOnInit() {
        this.cdr.detach();
        console.log('stop - ngOnInit - working');
    }
    onClick() {
        this.cdr.reattach();
        console.log('start - via RowsComponent');
    }
};
RowsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], RowsComponent.prototype, "rows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], RowsComponent.prototype, "template", void 0);
RowsComponent = RowsComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rows',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rows.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/template-ref-example/rows.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rows.component.css */ "./src/app/component/template-ref-example/rows.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], RowsComponent);



/***/ }),

/***/ "./src/app/component/template-ref-example/template-ref-example.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/component/template-ref-example/template-ref-example.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/component/template-ref-example/template-ref-example.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/template-ref-example/template-ref-example.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TemplateRefExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRefExampleComponent", function() { return TemplateRefExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rows_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rows.component */ "./src/app/component/template-ref-example/rows.component.ts");
/* harmony import */ var _service_worator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/worator.service */ "./src/app/service/worator.service.ts");




let TemplateRefExampleComponent = class TemplateRefExampleComponent {
    constructor(webWorker) {
        this.webWorker = webWorker;
        this.rows = [];
        this.createRows(15);
        this.webWorker.postToWorker('hello from TemplateRefExampleComponent!');
    }
    onClick2() {
        _rows_component__WEBPACK_IMPORTED_MODULE_2__["RowsComponent"].detect();
        console.log('start - via TemplateRefExampleComponent reference to static in RowsComponent');
    }
    onClick() {
        this.flag = true;
        this.timeoutId = setTimeout(() => {
            this.flag = false;
            this.tock = !this.tock;
            return () => clearTimeout(this.timeoutId);
        }, 100);
        console.log('clicked');
    }
    getName(row) {
        console.log('getName() called');
        return row.name;
    }
    createRows(count) {
        for (let i = 0; i < count; i++) {
            this.rows.push({
                name: 'TEST ' + (i + 1)
            });
        }
    }
};
TemplateRefExampleComponent.ctorParameters = () => [
    { type: _service_worator_service__WEBPACK_IMPORTED_MODULE_3__["WoratorService"] }
];
TemplateRefExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-template-ref-example',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./template-ref-example.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/component/template-ref-example/template-ref-example.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./template-ref-example.component.css */ "./src/app/component/template-ref-example/template-ref-example.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_worator_service__WEBPACK_IMPORTED_MODULE_3__["WoratorService"]])
], TemplateRefExampleComponent);



/***/ }),

/***/ "./src/app/directive/additional.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directive/additional.directive.ts ***!
  \***************************************************/
/*! exports provided: INJ_TOKEN, INJ2_TOKEN, NUMBER, _window, _document, AdditionalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJ_TOKEN", function() { return INJ_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJ2_TOKEN", function() { return INJ2_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER", function() { return NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_window", function() { return _window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_document", function() { return _document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalDirective", function() { return AdditionalDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var AdditionalDirective_1;



const INJ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Window class token');
const INJ2_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Document class token');
const NUMBER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('string class token');
function _window() {
    return window;
}
function _document() {
    return document;
}
var Test;
(function (Test) {
    Test[Test["One"] = 0] = "One";
    Test[Test["TwoTwo"] = 1] = "TwoTwo";
    Test[Test["Trzy"] = 2] = "Trzy";
})(Test || (Test = {}));
let AdditionalDirective = AdditionalDirective_1 = class AdditionalDirective {
    constructor(win, doc, docc, numbersFromInjectedEnum) {
        this.win = win;
        this.doc = doc;
        this.docc = docc;
        this.numbersFromInjectedEnum = numbersFromInjectedEnum;
        win.addEventListener('dblclick', () => alert(`Podwójny klik!\n` +
            '\n' +
            `(URI: ${AdditionalDirective_1.prepareURI(doc.documentURI)})\n` +
            `(fullscreen enabled? ${!!docc.fullscreenElement})\n` +
            `(numbersFromInjectedEnum: ${numbersFromInjectedEnum})`));
    }
    static prepareURI(input) {
        const strings = input.split('/');
        if (strings[2].length > 25) {
            strings[2] = strings[2].slice(0, 8) + '...' + strings[2].slice(strings[2].length - 8);
        }
        return strings.join('/');
    }
};
AdditionalDirective.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [INJ_TOKEN,] }] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [INJ2_TOKEN,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NUMBER,] }] }
];
AdditionalDirective = AdditionalDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAddDblClick]',
        providers: [
            { provide: INJ_TOKEN, useFactory: _window },
            { provide: INJ2_TOKEN, useFactory: _document },
            { provide: NUMBER, useValue: `${Test.One} + ${Test.TwoTwo} + ${Test.Trzy}` }
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INJ_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INJ2_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NUMBER)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Window,
        Document,
        Document, String])
], AdditionalDirective);



/***/ }),

/***/ "./src/app/gen_modules/footer/foooter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/gen_modules/footer/foooter.component.ts ***!
  \*********************************************************/
/*! exports provided: FoooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoooterComponent", function() { return FoooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FoooterComponent = class FoooterComponent {
};
FoooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foooter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./foooter.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/footer/foooter.component.html")).default
    })
], FoooterComponent);



/***/ }),

/***/ "./src/app/gen_modules/footer/footer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/gen_modules/footer/footer.module.ts ***!
  \*****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _foooter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foooter.component */ "./src/app/gen_modules/footer/foooter.component.ts");





let FooterModule = class FooterModule {
};
FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_foooter_component__WEBPACK_IMPORTED_MODULE_4__["FoooterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ],
        exports: [_foooter_component__WEBPACK_IMPORTED_MODULE_4__["FoooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: StartComponent, NotFound404Component, ComposeMessageComponent, ObservComponent, TemplateRefExampleComponent, RowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _start_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.component */ "./src/app/start.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return _start_component__WEBPACK_IMPORTED_MODULE_1__["StartComponent"]; });

/* harmony import */ var _component_notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/notfound404/notfound404.component */ "./src/app/component/notfound404/notfound404.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return _component_notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_2__["NotFound404Component"]; });

/* harmony import */ var _module_crisis_component_compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/crisis/component/compose-message/compose-message.component */ "./src/app/module/crisis/component/compose-message/compose-message.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComposeMessageComponent", function() { return _module_crisis_component_compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_3__["ComposeMessageComponent"]; });

/* harmony import */ var _component_observ_observ_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/observ/observ.component */ "./src/app/component/observ/observ.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservComponent", function() { return _component_observ_observ_component__WEBPACK_IMPORTED_MODULE_4__["ObservComponent"]; });

/* harmony import */ var _component_template_ref_example_template_ref_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/template-ref-example/template-ref-example.component */ "./src/app/component/template-ref-example/template-ref-example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateRefExampleComponent", function() { return _component_template_ref_example_template_ref_example_component__WEBPACK_IMPORTED_MODULE_5__["TemplateRefExampleComponent"]; });

/* harmony import */ var _component_template_ref_example_rows_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/template-ref-example/rows.component */ "./src/app/component/template-ref-example/rows.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowsComponent", function() { return _component_template_ref_example_rows_component__WEBPACK_IMPORTED_MODULE_6__["RowsComponent"]; });










/***/ }),

/***/ "./src/app/module/crisis/component/compose-message/compose-message.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/module/crisis/component/compose-message/compose-message.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  position: relative;\r\n  bottom: 0\r\n}\r\n\r\nsection {\r\n  float: right;\r\n  width: 300px;\r\n  margin-left: calc(2em + 0.5px)\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/crisis/component/compose-message/compose-message.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/module/crisis/component/compose-message/compose-message.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ComposeMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMessageComponent", function() { return ComposeMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ComposeMessageComponent = class ComposeMessageComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.sending = false;
    }
    send() {
        this.sending = true;
        this.details = 'Sending Message...';
        const toId = setTimeout(() => {
            this.sending = false;
            this.closePopup();
            return () => clearTimeout(toId);
        }, 1000);
    }
    cancel() {
        this.closePopup();
    }
    closePopup() {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate(// wszystkie możliwości ActivatedRoute
        ['', { outlets: { popup: null } }], {
            relativeTo: this.route,
            queryParamsHandling: 'preserve',
            preserveFragment: true
        });
    }
};
ComposeMessageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ComposeMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compose-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./compose-message.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/crisis/component/compose-message/compose-message.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./compose-message.component.css */ "./src/app/module/crisis/component/compose-message/compose-message.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ComposeMessageComponent);



/***/ }),

/***/ "./src/app/repository/mock-crises.ts":
/*!*******************************************!*\
  !*** ./src/app/repository/mock-crises.ts ***!
  \*******************************************/
/*! exports provided: CRISES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRISES", function() { return CRISES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const CRISES = [
    { id: 1, name: 'Dragon Burning Cities' },
    { id: 2, name: 'Sky Rains Great White Sharks' },
    { id: 3, name: 'Giant Asteroid Heading For Earth' },
    { id: 4, name: 'Procrastinators Meeting Delayed Again' },
    { id: 5, name: 'Demogorgon Attacked Again' }
];


/***/ }),

/***/ "./src/app/repository/mock-heroes.ts":
/*!*******************************************!*\
  !*** ./src/app/repository/mock-heroes.ts ***!
  \*******************************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "./src/app/repository/mock-supermen.ts":
/*!*********************************************!*\
  !*** ./src/app/repository/mock-supermen.ts ***!
  \*********************************************/
/*! exports provided: SUPERMEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPERMEN", function() { return SUPERMEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SUPERMEN = [
    { id: 21, name: 'Superman1' },
    { id: 22, name: 'Superman2' },
    { id: 23, name: 'Superman3' },
    { id: 24, name: 'Superman4' },
    { id: 25, name: 'Superman5' },
    { id: 26, name: 'Superman6' },
    { id: 27, name: 'Superman7' },
    { id: 28, name: 'Superman8' },
    { id: 29, name: 'Superman9' }
];


/***/ }),

/***/ "./src/app/service/check-for-update.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/check-for-update.service.ts ***!
  \*****************************************************/
/*! exports provided: CheckForUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckForUpdateService", function() { return CheckForUpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let CheckForUpdateService = class CheckForUpdateService {
    constructor(appRef, updates) {
        console.log('\t\t\tCheckForUpdateService instantiated!!!');
        // Allow the app to stabilize first, before starting polling for updates with `interval()`.
        const appIsStable$ = appRef.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(isStable => isStable === true));
        const everySixHours$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(15 * 1000);
        const everySixHoursOnceAppIsStable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(appIsStable$, everySixHours$);
        this.subscription = everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
CheckForUpdateService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] }
];
CheckForUpdateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
], CheckForUpdateService);



/***/ }),

/***/ "./src/app/service/in-memory-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/in-memory-data.service.ts ***!
  \***************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_mock_heroes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/mock-heroes */ "./src/app/repository/mock-heroes.ts");
/* harmony import */ var _repository_mock_crises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repository/mock-crises */ "./src/app/repository/mock-crises.ts");
/* harmony import */ var _repository_mock_supermen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repository/mock-supermen */ "./src/app/repository/mock-supermen.ts");





let InMemoryDataService = class InMemoryDataService {
    createDb() {
        return {
            HEROES: _repository_mock_heroes__WEBPACK_IMPORTED_MODULE_2__["HEROES"],
            CRISES: _repository_mock_crises__WEBPACK_IMPORTED_MODULE_3__["CRISES"],
            SUPERMEN: _repository_mock_supermen__WEBPACK_IMPORTED_MODULE_4__["SUPERMEN"]
        };
    }
    genId(array) {
        return array.length > 0 ? Math.max(...array.map(elem => elem.id)) + 1 : 11;
    }
};
InMemoryDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InMemoryDataService);



/***/ }),

/***/ "./src/app/service/index-services.ts":
/*!*******************************************!*\
  !*** ./src/app/service/index-services.ts ***!
  \*******************************************/
/*! exports provided: CheckForUpdateService, InMemoryDataService, LangChangeRelayService, LocalStorageService, LogUpdateService, MarvelService, MessageService, PromptUpdateService, SelectivePreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _check_for_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-for-update.service */ "./src/app/service/check-for-update.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckForUpdateService", function() { return _check_for_update_service__WEBPACK_IMPORTED_MODULE_1__["CheckForUpdateService"]; });

/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/service/in-memory-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return _in_memory_data_service__WEBPACK_IMPORTED_MODULE_2__["InMemoryDataService"]; });

/* harmony import */ var _lang_change_relay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang-change-relay.service */ "./src/app/service/lang-change-relay.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LangChangeRelayService", function() { return _lang_change_relay_service__WEBPACK_IMPORTED_MODULE_3__["LangChangeRelayService"]; });

/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/service/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]; });

/* harmony import */ var _log_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-update.service */ "./src/app/service/log-update.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogUpdateService", function() { return _log_update_service__WEBPACK_IMPORTED_MODULE_5__["LogUpdateService"]; });

/* harmony import */ var _marvel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarvelService", function() { return _marvel_service__WEBPACK_IMPORTED_MODULE_6__["MarvelService"]; });

/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message.service */ "./src/app/service/message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]; });

/* harmony import */ var _prompt_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prompt-update.service */ "./src/app/service/prompt-update.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromptUpdateService", function() { return _prompt_update_service__WEBPACK_IMPORTED_MODULE_8__["PromptUpdateService"]; });

/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selective-preloading-strategy.service */ "./src/app/service/selective-preloading-strategy.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function() { return _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_9__["SelectivePreloadingStrategyService"]; });













/***/ }),

/***/ "./src/app/service/lang-change-relay.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/lang-change-relay.service.ts ***!
  \******************************************************/
/*! exports provided: LangChangeRelayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangChangeRelayService", function() { return LangChangeRelayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LangChangeRelayService = class LangChangeRelayService {
    constructor() {
        this.$langSwitched = true;
    }
    get langSwitched() {
        return this.$langSwitched;
    }
    set langSwitched(value) {
        this.$langSwitched = value;
    }
    resetFlag(timeout = 1000) {
        if (this.$langSwitched) {
            const toId = setTimeout(() => {
                this.langSwitched = false;
                return () => clearTimeout(toId);
            }, timeout);
        }
    }
};
LangChangeRelayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LangChangeRelayService);



/***/ }),

/***/ "./src/app/service/local-storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/local-storage.service.ts ***!
  \**************************************************/
/*! exports provided: LANG_INIT_STORAGE_KEY, LANG_STORAGE_KEY, LANG_USER_IS_SWITCHING, LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_INIT_STORAGE_KEY", function() { return LANG_INIT_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_STORAGE_KEY", function() { return LANG_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_USER_IS_SWITCHING", function() { return LANG_USER_IS_SWITCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm2015/ngx-webstorage-service.js");



const LANG_INIT_STORAGE_KEY = 'lang_init';
const LANG_STORAGE_KEY = 'lang';
const LANG_USER_IS_SWITCHING = 'user_switching';
const STORAGE_KEY = 'mojStorage';
let LocalStorageService = class LocalStorageService {
    constructor(storage) {
        this.storage = storage;
    }
    storeQueryParamsAndFragment(doZapisu = { a: 'aa', b: 'bb' }) {
        this.storage.set(STORAGE_KEY, doZapisu);
        console.log('LocalStorageService # storeQueryParamsAndFragment() # set(): ' + JSON.stringify(this.storage.get(STORAGE_KEY)));
    }
    getQueryParamsAndFragment(key = STORAGE_KEY) {
        const newVar = this.storage.get(key);
        console.log('LocalStorageService # getQueryParamsAndFragment() # get(): ' + (JSON.stringify(newVar) || 'Storage pusty'));
        return newVar;
    }
    storeStringAtGivenKey(key, text) {
        this.storage.set(key, text);
        console.log('LocalStorageService # storeStringAtGivenKey() # set(' + key + '): ' + this.storage.get(key));
    }
    getStringStoredAtGivenKey(key) {
        const newVar = this.storage.get(key);
        console.log('LocalStorageService # getStringStoredAtGivenKey() # get(' + key + '): ' + (newVar || 'Storage pusty'));
        return newVar;
    }
    checkEntryAtGivenKey(key) {
        const newVar = this.storage.has(key);
        console.log('LocalStorageService # checkEntryAtGivenKey() # has(' + key + '): ' + newVar);
        return newVar;
    }
    removeStorageAtGivenKey(key) {
        this.storage.remove(key);
        console.log('LocalStorageService # removeStorageAtGivenKey() # get(' + key + ')');
    }
    clearLocalStorage(all = false) {
        if (all) {
            this.storage.clear();
        }
        else {
            this.storage.remove(STORAGE_KEY);
        }
    }
};
LocalStorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] }
];
LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        // providedIn: CrisisModule
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], LocalStorageService);



/***/ }),

/***/ "./src/app/service/log-update.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/log-update.service.ts ***!
  \***********************************************/
/*! exports provided: LogUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogUpdateService", function() { return LogUpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let LogUpdateService = class LogUpdateService {
    constructor(updates) {
        console.log('\t\t\tLogUpdateService instantiated!!!');
        // updates.available.subscribe((event) => {
        //   console.log('current version is', event.current.hash);
        //   console.log('available version is', event.available.hash);
        // });
        this.subscription = updates.activated.subscribe((event) => {
            console.log('old version was', event.previous.hash);
            console.log('new version is', event.current.hash);
            alert('old version: ' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].VERSION +
                '\nnew version: ' + event.current.appData.ver);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
LogUpdateService.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] }
];
LogUpdateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
], LogUpdateService);



/***/ }),

/***/ "./src/app/service/marvel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/marvel.service.ts ***!
  \*******************************************/
/*! exports provided: MarvelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarvelService", function() { return MarvelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/service/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
let MarvelService = class MarvelService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.s = 'item';
        this.p = 'items';
        this.S = 'Item';
        this.P = 'Items';
        this.heroesUrl = 'api/';
    }
    setNouns(value) {
        if (value.singular.length > 0) {
            this.s = value.singular;
            this.S = this.s.charAt(0).toUpperCase() + ((this.s.length > 1) ? this.s.slice(1) : this.s.charAt(1));
        }
        if (value.plural.length > 0) {
            this.p = value.plural;
            this.P = this.p.charAt(0).toUpperCase() + ((this.p.length > 1) ? this.p.slice(1) : this.p.charAt(1));
        }
        this.heroesUrl = `api/${this.p.toUpperCase()}`;
    }
    // getHeroes(): Hero[] {
    getHeroes() {
        // this.messageService.add('HeroService: fetched heroes');
        // this.log('fetched heroes');
        // return of(HEROES);
        return this.http
            .get(this.heroesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.log('fetched ' + this.p + ' (tap)')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get' + this.P, [])));
    }
    getHeroNo404(id) {
        // return onErrorResumeNext<TT>(
        //   this.tryInMemStorage<TT>(+id),
        //   this.tryExternalStorage<TT>(+id)
        // );
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["onErrorResumeNext"])(this.tryInMemStorage(+id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.tryExternalStorage(+id), (...[one, two]) => {
            if (one) {
                return one;
            }
            else {
                return two;
            }
        }));
    }
    // getHero(id: number): Observable<Hero> {
    //   // TODO: send the message _after_ fetching the hero
    //   // this.messageService.add(`HeroService: fetched hero id=${id}`);
    //   this.log(`fetched hero id=${id}`);
    //   return of(HEROES.find(hero => hero.id === id));
    // }
    getHero(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.log(`fetched ${this.s} (tap) id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`get${this.S} id=${id}` /*, this.hero*/)));
    }
    updateHero(item) {
        return this.http
            .put(this.heroesUrl, item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.log(`updated ${this.s} (tap) id=${item.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('update' + this.S)));
    }
    addHero(item) {
        return this.http
            .post(this.heroesUrl, item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((newItem) => this.log(`added ${this.s} (tap) /w id=${newItem.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('add' + this.S)));
    }
    deleteHero(item) {
        const id = (typeof item === 'number') ? item : item.id;
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.log(`deleted ${this.s} (tap) id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('delete' + this.S)));
    }
    searchHeroes(term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http
            .get(`${this.heroesUrl}/?name=${term}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.log(`found (tap) ${this.p} matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('search' + this.P, [])));
    }
    tryInMemStorage(id) {
        const url = `${this.heroesUrl}/?id=${id}`;
        console.log('MarvelService # tryInMemStorage() # url: ' + url);
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((heroes) => {
            console.log('zapytanie zwróciło (race(1, -)):', heroes);
            return heroes[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((h) => {
            const outcome = h ? 'fetched' : 'did not find';
            this.log(`InMem ${outcome} ${this.s} id=${id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`get${this.S}No404 id=${id}`)));
    }
    tryExternalStorage(id) {
        const url = `api/SUPERMEN/?id=${id}`;
        console.log('MarvelService # tryExternalStorage() # url: ' + url);
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((supermen) => {
            console.log('zapytanie zwróciło (race(-, 2)):', supermen);
            return supermen[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((h) => {
            const outcome = h ? 'fetched' : 'did not find';
            this.log(`ExtStor ${outcome} ${this.s} id=${id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`tryExternalStorage id=${id}`)));
    }
    log(message) {
        this.messageService.add(`${this.S}Service: ${message}`);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            this.log(`${operation} failed:<br>
             <b>error</b>: ${error.name}<br>
             <b>url</b>: ${error.url}<br>
             <b>status</b>: ${error.status}<br>
             <b>status text</b>: ${error.statusText}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
};
MarvelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
MarvelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], MarvelService);



/***/ }),

/***/ "./src/app/service/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/service/prompt-update.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/prompt-update.service.ts ***!
  \**************************************************/
/*! exports provided: PromptUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptUpdateService", function() { return PromptUpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var PromptUpdateService_1;



let PromptUpdateService = PromptUpdateService_1 = class PromptUpdateService {
    constructor(updates) {
        console.log('\t\t\tPromptUpdateService instantiated!!!');
        this.subscription = updates.available.subscribe((event) => {
            console.log('current version is', event.current.hash);
            console.log('available version is', event.available.hash);
            if (PromptUpdateService_1.promptUser()) {
                updates.activateUpdate().then(() => document.location.reload());
            }
        });
    }
    static promptUser() {
        let confirm = '';
        while (confirm !== "y" /* YES */ && confirm !== "n" /* NO */) {
            confirm = prompt(`Update app? ['${"y" /* YES */}' or '${"n" /* NO */}']`);
        }
        return confirm === "y" /* YES */;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
PromptUpdateService.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] }
];
PromptUpdateService = PromptUpdateService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]])
], PromptUpdateService);



/***/ }),

/***/ "./src/app/service/selective-preloading-strategy-service.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/service/selective-preloading-strategy-service.module.ts ***!
  \*************************************************************************/
/*! exports provided: SelectivePreloadingStrategyServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyServiceModule", function() { return SelectivePreloadingStrategyServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SelectivePreloadingStrategyServiceModule = class SelectivePreloadingStrategyServiceModule {
};
SelectivePreloadingStrategyServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], SelectivePreloadingStrategyServiceModule);



/***/ }),

/***/ "./src/app/service/selective-preloading-strategy.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/service/selective-preloading-strategy.service.ts ***!
  \******************************************************************/
/*! exports provided: SelectivePreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function() { return SelectivePreloadingStrategyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _selective_preloading_strategy_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selective-preloading-strategy-service.module */ "./src/app/service/selective-preloading-strategy-service.module.ts");




let SelectivePreloadingStrategyService = class SelectivePreloadingStrategyService {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data.preload) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            console.log('SelectivePreloadingStrategyService # preload() # route.path: ' + route.path);
            console.log('SelectivePreloadingStrategyService # preload() # load: ' + load);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    }
};
SelectivePreloadingStrategyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _selective_preloading_strategy_service_module__WEBPACK_IMPORTED_MODULE_3__["SelectivePreloadingStrategyServiceModule"]
    })
], SelectivePreloadingStrategyService);



/***/ }),

/***/ "./src/app/service/worator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/worator.service.ts ***!
  \********************************************/
/*! exports provided: WoratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoratorService", function() { return WoratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let WoratorService = class WoratorService {
    constructor() {
        this.initWorker();
    }
    postToWorker(text) {
        if (this.allowed) {
            this.messageIntoTheWorker = text;
            this.worker.postMessage(text);
        }
    }
    initWorker() {
        if (typeof Worker !== 'undefined') {
            // Create a new
            this.worker = new Worker(__webpack__worker__0, {  });
            this.worker.onmessage = ({ data }) => {
                this.messageOutFromTheWorker = `page got message from web worker: "${data}", to data sent: "${this.messageIntoTheWorker}"`;
                console.log(this.messageOutFromTheWorker);
            };
            this.allowed = true;
            // worker.postMessage('"hello"');
        }
        else {
            // Web Workers are not supported in this environment.
            // You should add a fallback so that your program still executes correctly.
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].isNode) {
                console.log('Web workers not allowed here!');
            }
            else {
                alert('Web workers not allowed here!');
            }
        }
    }
};
WoratorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WoratorService);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/worker-plugin/dist/loader.js?{"name":"0"}!../web-worker/worator.worker */ "./node_modules/@angular-devkit/build-angular/node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/web-worker/worator.worker.ts")))

/***/ }),

/***/ "./src/app/start-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/start-routing.module.ts ***!
  \*****************************************/
/*! exports provided: isComposeMatched, StartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComposeMatched", function() { return isComposeMatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartRoutingModule", function() { return StartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/app/component/index.ts");
/* harmony import */ var _service_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/selective-preloading-strategy.service */ "./src/app/service/selective-preloading-strategy.service.ts");
/* harmony import */ var _service_selective_preloading_strategy_service_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/selective-preloading-strategy-service.module */ "./src/app/service/selective-preloading-strategy-service.module.ts");
/* harmony import */ var _module_crisis_component_compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/crisis/component/compose-message/compose-message.component */ "./src/app/module/crisis/component/compose-message/compose-message.component.ts");







function isComposeMatched(url) {
    console.log('CrisisRoutingModule # isComposeMatched() # url: ' + url);
    return url.length && url[0].path.startsWith('compose') ? { consumed: url } : null;
}
const ROUTES = [
    {
        path: 'forms',
        loadChildren: () => __webpack_require__.e(/*! import() | module-forms-app2-module */ "module-forms-app2-module").then(__webpack_require__.bind(null, /*! ./module/forms/app2.module */ "./src/app/module/forms/app2.module.ts")).then((m) => m.App2Module),
        data: {
            preload: true
        }
    },
    {
        path: 'scrollpanel',
        loadChildren: () => __webpack_require__.e(/*! import() | module-primeng-scrollpanel-primeng-scrollpanel-module */ "module-primeng-scrollpanel-primeng-scrollpanel-module").then(__webpack_require__.bind(null, /*! ./module/primeng-scrollpanel/primeng-scrollpanel.module */ "./src/app/module/primeng-scrollpanel/primeng-scrollpanel.module.ts")).then((m) => m.PrimengScrollpanelModule)
    },
    {
        path: 'dragdrop',
        loadChildren: () => __webpack_require__.e(/*! import() | module-drag-drop-drag-drop-module */ "module-drag-drop-drag-drop-module").then(__webpack_require__.bind(null, /*! ./module/drag-drop/drag-drop.module */ "./src/app/module/drag-drop/drag-drop.module.ts")).then((m) => m.DragDropModule),
        data: {
            preload: true
        }
    },
    {
        path: 'sticky',
        loadChildren: () => __webpack_require__.e(/*! import() | module-sticky-sticky-module */ "module-sticky-sticky-module").then(__webpack_require__.bind(null, /*! ./module/sticky/sticky.module */ "./src/app/module/sticky/sticky.module.ts")).then((m) => m.StickyModule),
        data: {
            preload: true
        }
    },
    {
        path: 'ng-heroes',
        loadChildren: () => Promise.all(/*! import() | module-heroes-app-module */[__webpack_require__.e("common"), __webpack_require__.e("module-heroes-app-module")]).then(__webpack_require__.bind(null, /*! ./module/heroes/app.module */ "./src/app/module/heroes/app.module.ts")).then((m) => m.AppModule),
        data: {
            preload: true
        }
    },
    {
        path: 'crisis',
        loadChildren: () => Promise.all(/*! import() | module-crisis-crisis-module */[__webpack_require__.e("common"), __webpack_require__.e("module-crisis-crisis-module")]).then(__webpack_require__.bind(null, /*! ./module/crisis/crisis.module */ "./src/app/module/crisis/crisis.module.ts")).then((m) => m.CrisisModule),
        data: {
            preload: true
        }
    },
    {
        path: 'shop',
        loadChildren: () => __webpack_require__.e(/*! import() | module-shop-shop-module */ "module-shop-shop-module").then(__webpack_require__.bind(null, /*! ./module/shop/shop.module */ "./src/app/module/shop/shop.module.ts")).then((m) => m.ShopModule),
        data: {
            preload: true
        }
    },
    {
        path: 'choose',
        // component: ChooserComponent
        loadChildren: () => __webpack_require__.e(/*! import() | gen_modules-chooser-chooser-module */ "gen_modules-chooser-chooser-module").then(__webpack_require__.bind(null, /*! ./gen_modules/chooser/chooser.module */ "./src/app/gen_modules/chooser/chooser.module.ts")).then((m) => m.ChooserModule),
        data: {
            preload: false
        }
    },
    {
        path: 'ng-observables',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["ObservComponent"]
    },
    {
        path: 'ng-templaterefexample',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["TemplateRefExampleComponent"]
    },
    {
        path: '',
        redirectTo: '/choose',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["NotFound404Component"]
    },
    {
        // path: 'compose',
        matcher: isComposeMatched,
        component: _module_crisis_component_compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_6__["ComposeMessageComponent"],
        outlet: 'popup'
    }
];
let StartRoutingModule = class StartRoutingModule {
};
StartRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _service_selective_preloading_strategy_service_module__WEBPACK_IMPORTED_MODULE_5__["SelectivePreloadingStrategyServiceModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES, {
                enableTracing: false,
                // preloadingStrategy: PreloadAllModules
                preloadingStrategy: _service_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__["SelectivePreloadingStrategyService"],
                useHash: false // PathLocationStrategy
                // useHash: true // HashLocationStrategy
            })
        ],
        // providers: [SelectivePreloadingStrategyService], // old way DI
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StartRoutingModule);



/***/ }),

/***/ "./src/app/start.component.css":
/*!*************************************!*\
  !*** ./src/app/start.component.css ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.bottom-left {\r\n  display: inline-block;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  margin: 0 0 0.1rem 0.3rem\r\n}\r\n\r\ndiv.version {\r\n  color: black;\r\n  transition: font-size 1.5s ease-in-out 0s;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: xx-small;\r\n  opacity: 0.6\r\n}\r\n\r\ndiv.bigger {\r\n  font-size: 500%\r\n}\r\n\r\n.container {\r\n  display: inline-block;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin: auto\r\n}\r\n\r\n.machine {\r\n  width: 100%\r\n}\r\n\r\n.large-shadow {\r\n  animation: counter-rotation 5s infinite linear;\r\n  fill: rgba(202, 80, 16, 0.66);\r\n  stroke: black;\r\n  stroke-width: 3;\r\n  transform-origin: 471.37px 183.694px\r\n}\r\n\r\n@keyframes counter-rotation {\r\n  from {\r\n    transform: rotate(359deg)\r\n  }\r\n  to {\r\n    transform: rotate(0deg)\r\n  }\r\n}\r\n");

/***/ }),

/***/ "./src/app/start.component.ts":
/*!************************************!*\
  !*** ./src/app/start.component.ts ***!
  \************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _locale_LIDs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/LIDs */ "./src/locale/LIDs.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/local-storage.service */ "./src/app/service/local-storage.service.ts");
/* harmony import */ var _service_lang_change_relay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/lang-change-relay.service */ "./src/app/service/lang-change-relay.service.ts");
/* harmony import */ var _service_log_update_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/log-update.service */ "./src/app/service/log-update.service.ts");
/* harmony import */ var _service_check_for_update_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/check-for-update.service */ "./src/app/service/check-for-update.service.ts");
/* harmony import */ var _service_prompt_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/prompt-update.service */ "./src/app/service/prompt-update.service.ts");









let StartComponent = class StartComponent {
    constructor(lcr, // instancja
    localeId, storage, el, sw, // wywołaj constructor
    cu, // wywołaj constructor
    pu // wywołaj constructor
    // private router: Router,
    // private location: Location
    ) {
        this.lcr = lcr;
        this.localeId = localeId;
        this.storage = storage;
        this.el = el;
        this.localeIdNumbers = _locale_LIDs__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID_NUMBERS"];
        this.ver = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].VERSION;
        this.showLangsInConsole();
        this.localeId = this.localeId.slice(0, 2); // 'en-US' -> 'en' w Ivy jak wyjdzie 9.0.0
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isNode) {
            this.browserLocaleID = this.localeId;
        }
        else {
            // this.setLangInHTMLElement(); // niepotrzebne - przygotowane osobne pliki 'index.html' dla lokalizacji
            this.browserLocaleID = navigator.language.slice(0, 2);
            this.prepareAddress();
        }
        this.langStoredCode = this.storage.getStringStoredAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_STORAGE_KEY"]);
        this.langStored = !!this.langStoredCode;
        this.localeIdNumbersValues = Object.values(this.localeIdNumbers);
    }
    ngOnInit() {
        this.checkIfUserIsSwitchingLanguage();
        this.showAngularVersion();
        // console.log('------------------------');
        // console.log(strings[0] + '//' + strings[2] + '/es');
        // console.log('------------------------');
        // console.log(this.location.path());
        // console.log('------------------------');
        // console.log(this.router.url);
        // console.log('------------------------');
        // window.location.href = strings[0] + '//' + strings[2] + '/en';
        // this.router.navigate(['es', 'choose']);
    }
    showAngularVersion() {
        const elementsByTagName = document.body.getElementsByTagName('app-start');
        const angVer = elementsByTagName.length ? elementsByTagName.item(0).getAttribute('ng-version') : null;
        this.ver = String(this.ver).concat(' / @ang ' + (angVer || 'n/a')).concat(' / Ivy on? ' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].IVY_ON);
    }
    showLangsInConsole() {
        console.log('----------------------------------------------------------------------' +
            '---------------------------------------------------------------------- %clang from browser:%c ' +
            (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isNode ? navigator.language : 'node'), 'color: red', 'color: red; font-weight: bolder');
        console.log('----------------------------------------------------------------------' +
            '---------------------------------------------------------------------- %craw lang from @ang:%c ' +
            (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isNode ? this.localeId : 'node'), 'color: red', 'color: red; font-weight: bolder');
    }
    checkIfUserIsSwitchingLanguage() {
        if (this.storage.checkEntryAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_USER_IS_SWITCHING"])) {
            this.storage.removeStorageAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_USER_IS_SWITCHING"]);
            if (this.langStored) {
                this.storage.storeStringAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_STORAGE_KEY"], this.localeId);
                this.storage.storeStringAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_INIT_STORAGE_KEY"]);
            }
            this.lcr.resetFlag(100);
        }
        else {
            this.redirectToOtherLang();
        }
    }
    redirectToOtherLang() {
        if (this.langStored &&
            this.langStoredCode !== this.localeId) {
            this.changeLocationToGivenIfInProdAndNotNode(this.langStoredCode);
        }
        else if (this.localeId !== this.browserLocaleID &&
            !this.storage.checkEntryAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_INIT_STORAGE_KEY"]) &&
            this.localeIdNumbersValues.includes(this.browserLocaleID)) {
            this.storage.storeStringAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_STORAGE_KEY"], this.browserLocaleID);
            this.storage.storeStringAtGivenKey(_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LANG_INIT_STORAGE_KEY"]);
            this.changeLocationToGivenIfInProdAndNotNode(this.browserLocaleID);
        }
        else {
            this.lcr.resetFlag(100);
        }
    }
    changeLocationToGivenIfInProdAndNotNode(localeId) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isNode && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            document.location.href = this.replaceLocaleInAddress(localeId);
            // document.location.replace(this.replaceLocaleInAddress(localeId));
        }
        else {
            this.lcr.resetFlag(100);
        }
    }
    prepareAddress() {
        const currentAddress = document.location.href;
        this.addressSplit = currentAddress.split('/');
        if (this.addressSplit[this.addressSplit.length - 1] === '') {
            this.addressSplit.pop();
        }
    }
    replaceLocaleInAddress(localeId) {
        const indexFound = this.addressSplit.findIndex((val) => this.localeIdNumbersValues.includes(val));
        if (indexFound !== -1) {
            this.addressSplit[indexFound] = localeId;
            let newAddress = '';
            this.addressSplit.forEach((val) => newAddress += val + '/');
            return newAddress.substr(0, newAddress.length - 1);
        }
    }
    setLangInHTMLElement() {
        const lang = document.createAttribute('lang');
        lang.value = this.localeId;
        this.el.nativeElement.parentElement.parentElement.attributes.setNamedItem(lang);
        // document.documentElement.lang = 'es'; // inny sposób
    }
};
StartComponent.ctorParameters = () => [
    { type: _service_lang_change_relay_service__WEBPACK_IMPORTED_MODULE_5__["LangChangeRelayService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _service_log_update_service__WEBPACK_IMPORTED_MODULE_6__["LogUpdateService"] },
    { type: _service_check_for_update_service__WEBPACK_IMPORTED_MODULE_7__["CheckForUpdateService"] },
    { type: _service_prompt_update_service__WEBPACK_IMPORTED_MODULE_8__["PromptUpdateService"] // wywołaj constructor
     }
];
StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/start.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start.component.css */ "./src/app/start.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_lang_change_relay_service__WEBPACK_IMPORTED_MODULE_5__["LangChangeRelayService"], String, _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _service_log_update_service__WEBPACK_IMPORTED_MODULE_6__["LogUpdateService"],
        _service_check_for_update_service__WEBPACK_IMPORTED_MODULE_7__["CheckForUpdateService"],
        _service_prompt_update_service__WEBPACK_IMPORTED_MODULE_8__["PromptUpdateService"] // wywołaj constructor
        // private router: Router,
        // private location: Location
    ])
], StartComponent);



/***/ }),

/***/ "./src/app/start.module.ts":
/*!*********************************!*\
  !*** ./src/app/start.module.ts ***!
  \*********************************/
/*! exports provided: StartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartModule", function() { return StartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/start-routing.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./src/app/index.ts");
/* harmony import */ var _service_index_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/index-services */ "./src/app/service/index-services.ts");
/* harmony import */ var _directive_additional_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directive/additional.directive */ "./src/app/directive/additional.directive.ts");
/* harmony import */ var _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gen_modules/footer/footer.module */ "./src/app/gen_modules/footer/footer.module.ts");














let StartModule = class StartModule {
    constructor(router) {
        this.router = router;
        this.replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        console.log('StartModule # router.config:', JSON.stringify(this.router.config, this.replacer, 2));
    }
};
StartModule.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
StartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // BrowserModule, // not needed gdy są animacje!
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_service_index_services__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"], { dataEncapsulation: false, passThruUnknownUrl: true }),
            // AuthModule, // 1 komponent użyty - login; musi być przed '/**'
            _start_routing_module__WEBPACK_IMPORTED_MODULE_9__["StartRoutingModule"],
            // AppModule, // (stare heroes) "lazy child", nie użyty żaden komponent do załadowania
            // App2Module, // (forms) nie ma żadnego routera, więc psuje jak jest tu umieszczony, i także "lazy child"
            // CrisisModule // jest użyty 1 komponent w outlecie popup, ale "lazy" więc nie w declarations, i może być po '/**'
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production }),
            _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"]
        ],
        declarations: [
            _index__WEBPACK_IMPORTED_MODULE_10__["StartComponent"],
            _directive_additional_directive__WEBPACK_IMPORTED_MODULE_12__["AdditionalDirective"],
            // ChooserComponent,
            _index__WEBPACK_IMPORTED_MODULE_10__["NotFound404Component"],
            _index__WEBPACK_IMPORTED_MODULE_10__["ComposeMessageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["ObservComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["TemplateRefExampleComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["RowsComponent"]
        ],
        bootstrap: [_index__WEBPACK_IMPORTED_MODULE_10__["StartComponent"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], StartModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var _locale_LIDs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/LIDs */ "./src/locale/LIDs.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



let isNode = false;
if (typeof process !== 'undefined' && process.version) {
    isNode = true;
}
const environment = {
    production: false,
    VERSION: _package_json__WEBPACK_IMPORTED_MODULE_1__["version"],
    IVY_ON: _locale_LIDs__WEBPACK_IMPORTED_MODULE_2__["IVY_ON"],
    isNode
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

/***/ "./src/locale/LIDs.ts":
/*!****************************!*\
  !*** ./src/locale/LIDs.ts ***!
  \****************************/
/*! exports provided: LOCALE_ID_NUMBERS, LOCALE_ID_CURRENCIES, IVY_ON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_ID_NUMBERS", function() { return LOCALE_ID_NUMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_ID_CURRENCIES", function() { return LOCALE_ID_CURRENCIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVY_ON", function() { return IVY_ON; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const LOCALE_ID_NUMBERS = {
    1033: 'en',
    1045: 'pl',
    2057: 'en-GB'
};
const LOCALE_ID_CURRENCIES = {
    en: {
        code: 'USD',
        display: 'symbol'
    },
    pl: {
        code: 'PLN',
        display: 'symbol'
    }
};
const IVY_ON = true;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_start_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/start.module */ "./src/app/start.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
console.log('----------------------------------------------------------------------' +
    '---------------------------------------------------------------------- %cnode / browser?%c ' +
    (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isNode ? 'node' : 'browser'), 'color: red', 'color: red; font-weight: bolder');
console.log('----------------------------------------------------------------------' +
    '---------------------------------------------------------------------- %cPROD?%c ' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production, 'color: red', 'color: red; font-weight: bolder');
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(
// [{provide: LOCALE_ID, useValue: 'pl'}] // dla 'ng build' wystarczy tylko tu, bez registerLocaleData() w AppModule
)
    .bootstrapModule(_app_start_module__WEBPACK_IMPORTED_MODULE_4__["StartModule"], {
    missingTranslation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["MissingTranslationStrategy"].Warning // for JIT, for AOT put in 'angular.json' only
    // providers: [{provide: LOCALE_ID, useValue: 'pl'}] // zmiana w Angular v9.0.0-next.2?
})
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Comarch\IdeaProjects\_my_heroes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);