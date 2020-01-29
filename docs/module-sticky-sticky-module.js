(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-sticky-sticky-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/sticky/sticky.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/sticky/sticky.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div id=\"handle\">\r\n  </div>\r\n</div>\r\n<app-foooter></app-foooter>\r\n");

/***/ }),

/***/ "./src/app/module/sticky/sticky.component.css":
/*!****************************************************!*\
  !*** ./src/app/module/sticky/sticky.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n  height: 2000px;\r\n  border: 1px black solid\r\n}\r\n\r\n#handle {\r\n  background-color: green;\r\n  border: 2px darkgreen solid;\r\n  position: relative;\r\n  top: 150px;\r\n  left: 1350px;\r\n  width: 200px;\r\n  height: 300px\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/sticky/sticky.component.ts":
/*!***************************************************!*\
  !*** ./src/app/module/sticky/sticky.component.ts ***!
  \***************************************************/
/*! exports provided: StickyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyComponent", function() { return StickyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const TOP_STICKY = 50;
const TOP_RELATIVE = 150;
let StickyComponent = class StickyComponent {
    constructor() {
        this.flag = false;
    }
    ngOnInit() {
        this.elementById = document.getElementById('handle');
        // this.intervalId = setInterval(() => {
        //   if (!this.flag) {
        //     this.setSticky();
        //     return;
        //   }
        //   this.setRelative();
        //   console.log('elementById.offsetTop', this.elementById.offsetTop,
        //     'elementById.clientTop', this.elementById.clientTop,
        //     'elementById.scrollTop', this.elementById.scrollTop);
        // }, 1500);
        window.onscroll = () => {
            // console.log('window.pageYOffset:', window.pageYOffset);
            if (!this.offset) {
                this.offset = this.elementById.offsetTop;
                console.log('!', this.offset);
            }
            if (window.pageYOffset >= this.offset - TOP_STICKY) {
                if (!this.flag) {
                    this.setSticky();
                }
            }
            else {
                if (this.flag) {
                    this.setRelative();
                }
            }
        };
    }
    ngOnDestroy() {
        // clearInterval(this.intervalId);
        window.onscroll = null;
    }
    setRelative() {
        this.elementById.style.position = 'relative';
        this.elementById.style.top = TOP_RELATIVE + 'px';
        this.elementById.style.left = '1350px';
        this.flag = false;
    }
    setSticky() {
        this.elementById.style.position = 'sticky';
        this.elementById.style.top = /*'183px'*/ TOP_STICKY + 'px';
        this.elementById.style.left = '1383px';
        this.flag = true;
    }
};
StickyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sticky',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sticky.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/sticky/sticky.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sticky.component.css */ "./src/app/module/sticky/sticky.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StickyComponent);



/***/ }),

/***/ "./src/app/module/sticky/sticky.module.ts":
/*!************************************************!*\
  !*** ./src/app/module/sticky/sticky.module.ts ***!
  \************************************************/
/*! exports provided: StickyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyModule", function() { return StickyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sticky_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sticky.component */ "./src/app/module/sticky/sticky.component.ts");
/* harmony import */ var _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gen_modules/footer/footer.module */ "./src/app/gen_modules/footer/footer.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let StickyModule = class StickyModule {
};
StickyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sticky_component__WEBPACK_IMPORTED_MODULE_3__["StickyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _sticky_component__WEBPACK_IMPORTED_MODULE_3__["StickyComponent"],
                    pathMatch: 'full'
                }
            ])
        ]
    })
], StickyModule);



/***/ })

}]);