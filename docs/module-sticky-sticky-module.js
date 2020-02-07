(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-sticky-sticky-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/sticky/sticky.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/sticky/sticky.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div id=\"handle\">\r\n  </div>\r\n  <div id=\"handle2\">\r\n    <div (mousedown)=\"onMouseDown($event)\"\r\n         draggable=\"true\"\r\n         id=\"bar\">\r\n      Przesuń\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-foooter></app-foooter>\r\n");

/***/ }),

/***/ "./src/app/module/sticky/sticky.component.css":
/*!****************************************************!*\
  !*** ./src/app/module/sticky/sticky.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  --cssVariable: 200px\r\n}\r\n\r\n.wrapper {\r\n  border: 1px rgba(0, 0, 0, .35) solid;\r\n  height: 2000px;\r\n  position: relative\r\n}\r\n\r\n.wrapper::after {\r\n  background: url('/_my_heroes/../assets/kratka.png') repeat;\r\n  bottom: 0;\r\n  content: \"\";\r\n  left: 0;\r\n  opacity: .35;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: -1\r\n}\r\n\r\n#handle {\r\n  background-color: green;\r\n  border: 2px darkgreen solid;\r\n  height: 300px;\r\n  left: 1350px;\r\n  position: relative;\r\n  top: 150px;\r\n  width: var(--cssVariable, 2000px)\r\n}\r\n\r\n#handle2 {\r\n  background-color: blue;\r\n  border: 2px darkblue solid;\r\n  height: 300px;\r\n  position: fixed;\r\n  right: 33px;\r\n  top: 33px;\r\n  width: var(--cssVariable)\r\n}\r\n\r\n#bar {\r\n  align-items: center;\r\n  background-color: darkblue;\r\n  color: white;\r\n  cursor: move;\r\n  display: flex;\r\n  font-weight: bold;\r\n  height: 30px;\r\n  justify-content: center;\r\n  text-align: center\r\n}\r\n");

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
let StickyComponent = class StickyComponent {
    constructor() {
    }
    ngOnInit() {
        this.divElement = document.getElementById('handle');
        this.divElement2 = document.getElementById('handle2');
        console.log('!', this.divElement.offsetTop, 'ngOnInit:', this.divElement.getBoundingClientRect().top);
        window.onscroll = () => {
            if (!this.offset) {
                console.log('!!', this.offset = this.divElement.offsetTop, 'onscroll:', this.divElement.getBoundingClientRect().top);
            }
            if (window.pageYOffset >= this.offset + 33 - TOP_STICKY) {
                if (!this.flag) {
                    this.setSticky();
                }
                return;
            }
            if (this.flag) {
                this.setRelative();
            }
        };
    }
    ngOnDestroy() {
        window.onresize = window.onscroll = null;
    }
    onMouseDown(event) {
        event.preventDefault();
        let barSizeVert;
        let barSizeHor;
        let pos3 = event.clientX;
        let pos4 = event.clientY;
        let flag;
        let flag2;
        document.onmousemove = (event2) => {
            event2.preventDefault();
            // console.log('tick ----');
            // tslint:disable-next-line:no-conditional-assignment
            if ((flag = !flag) && (flag2 = !flag2)) {
                // console.log('tick tock');
                this.divElement2.style.top = (this.divElement2.offsetTop - pos4 + event2.clientY) + 'px';
                this.divElement2.style.left = (this.divElement2.offsetLeft - pos3 + event2.clientX) + 'px';
                this.divElement2.style.bottom = null;
                this.divElement2.style.right = null;
                pos3 = event2.clientX;
                pos4 = event2.clientY;
            }
        };
        document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null;
            barSizeVert = window.innerWidth - document.documentElement.offsetWidth;
            barSizeHor = window.innerHeight - document.documentElement.clientHeight;
            const offsetLeft = this.divElement2.offsetLeft;
            const offsetTop = this.divElement2.offsetTop;
            const offsetWidth = this.divElement2.offsetWidth;
            const offsetHeight = this.divElement2.offsetHeight;
            this.flag3 = this.flag4 = true;
            if (offsetLeft < 0) {
                this.divElement2.style.left = '0';
            }
            else if (offsetLeft >= window.innerWidth - barSizeVert - offsetWidth) {
                this.divElement2.style.right = '0';
                this.divElement2.style.left = 'unset';
            }
            else {
                this.flag3 = false;
            }
            if (offsetTop < 0) {
                this.divElement2.style.top = '0';
            }
            else if (offsetTop >= window.innerHeight - barSizeHor - offsetHeight) {
                this.divElement2.style.bottom = '0';
                this.divElement2.style.top = 'unset';
            }
            else {
                this.flag4 = false;
            }
            if (!window.onresize && !(this.flag3 && this.flag4)) {
                console.log('set!');
                window.onresize = () => {
                    barSizeVert = window.innerWidth - document.documentElement.offsetWidth;
                    barSizeHor = window.innerHeight - document.documentElement.clientHeight;
                    if (!this.flag3 && this.divElement2.offsetLeft + this.divElement2.offsetWidth /*/ 3 */ > window.innerWidth - barSizeVert) {
                        this.divElement2.style.right = '0';
                        this.divElement2.style.left = 'unset';
                        console.log('fired! X');
                        this.flag3 = true;
                    }
                    if (!this.flag4 && this.divElement2.offsetTop + this.divElement2.offsetHeight /*/ 3 */ > window.innerHeight - barSizeHor) {
                        this.divElement2.style.bottom = '0';
                        this.divElement2.style.top = 'unset';
                        console.log('fired! Y');
                        this.flag4 = true;
                    }
                    // tslint:disable-next-line:no-unused-expression
                    this.flag3 || this.flag4 || console.log('nothing! X: ok, Y: ok');
                    // tslint:disable-next-line:no-unused-expression
                    this.flag3 && this.flag4 && !(window.onresize = null) && console.log('unset!');
                };
            }
            else if (window.onresize && this.flag3 && this.flag4) {
                window.onresize = null;
                console.log('unset!');
            }
        };
    }
    setRelative() {
        this.divElement.style.position = null;
        this.divElement.style.top = null;
        this.divElement.style.left = null;
        this.flag = false;
    }
    setSticky() {
        this.divElement.style.position = 'fixed';
        this.divElement.style.top = TOP_STICKY + 'px';
        this.divElement.style.left = '1383px';
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