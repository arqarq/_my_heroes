(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-forms-app2-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/forms/app2.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/forms/app2.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  app-root2 works! // tu forms // {{ und?.length || '-' }}/{{ t }} {{ und2.length }}/{{ tt }}\r\n</p>\r\n<section [ngStyle]=\"{background: 'yellow'}\"\r\n         [style]=\"{'margin-block-end': '1em'}\">\r\n  <table>\r\n    <thead>\r\n    <tr>\r\n      <th [style]=\"{'padding-left': '3em'}\"\r\n          class=\"L\">\r\n        AAA\r\n      </th>\r\n      <th [class.L]=\"true\"\r\n          [style]=\"{paddingLeft: '3em'}\">\r\n        BBB\r\n      </th>\r\n      <th #tableHeaderCellElement\r\n          [style.paddingLeft.px]=\"ilePx\"\r\n          class=\"L\">\r\n        CCC\r\n      </th>\r\n      <th [style.paddingLeft]=\"'3%'\"\r\n          class=\"L\">\r\n        DDD\r\n      </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n      <td [ngStyle]=\"{paddingLeft: ilePx + 'px'}\"\r\n          class=\"L\">\r\n        1\r\n      </td>\r\n      <td>2</td>\r\n      <td>3</td>\r\n      <td>4</td>\r\n    </tr>\r\n    <tr>\r\n      <td>11</td>\r\n      <td class=\"R\">22</td>\r\n      <td>33</td>\r\n      <td>44</td>\r\n    </tr>\r\n    <tr>\r\n      <td>111</td>\r\n      <td>222</td>\r\n      <td [style.paddingLeft]=\"0\"\r\n          [style.paddingRight.px]=\"(tableHeaderCellElement.offsetWidth)/1000 + 1\"\r\n          [style]=\"{background: 'gray', color: 'azure'}\">\r\n        <div style=\"position: relative\">\r\n          <span id=\"test0\">333</span>\r\n        </div>\r\n      </td>\r\n      <td>444</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n<section>\r\n  <div>\r\n    <button (click)=\"dodajLiczbe()\"\r\n            style=\"margin-right: 10px\"\r\n            type=\"button\">dodaj liczbę</button>\r\n    <button (click)=\"toggleDisable()\"\r\n            type=\"button\">toggle disable via ElementRef</button>\r\n  </div>\r\n  <div>\r\n    <p *ngFor=\"let dana of dane; let index = index\"\r\n       class=\"list\">\r\n      <sub>{{ index }}</sub>&nbsp;<b>{{ dana }}</b>\r\n    </p>\r\n  </div>\r\n</section>\r\n<section>\r\n  <div class=\"first clear-both\">\r\n    <input #input0\r\n           (input)=\"weryfik(input0)\"\r\n           id=\"inputId0\"\r\n           placeholder=\"—\"\r\n           style=\"width: 50px; text-align: center; font-size: .8333em\"\r\n           type=\"text\"/>\r\n    <label [style]=\"{fontSize: input0.style.fontSize}\"\r\n           for=\"inputId0\"\r\n           style=\"margin: 0\"> %</label>\r\n    <p class=\"first-sm first-sm-after\"\r\n       style=\"font-weight: bold; font-size: x-large\">\r\n      {{ input0.value }}\r\n    </p>\r\n  </div>\r\n</section>\r\n<section>\r\n  <ng-template #parameterListItem\r\n               let-parameterRR=\"parameterR\">\r\n    {{ parameterRR }}\r\n  </ng-template>\r\n  <ng-container *ngFor=\"let parameter of items\"\r\n                [ngTemplateOutletContext]=\"{parameterR: parameter}\"\r\n                [ngTemplateOutlet]=\"parameterListItem\">\r\n  </ng-container>\r\n</section>\r\n<section>\r\n  <div>\r\n    <div class=\"first\"\r\n         style=\"display: inline-block\">\r\n      <label class=\"monospace\"\r\n             for=\"inputId1\">1.</label>\r\n      <input (input)=\"inputText2 = $any($event.target).value\"\r\n             [(ngModel)]=\"inputText1\"\r\n             id=\"inputId1\"\r\n             placeholder=\"—\"\r\n             style=\"width: 50px; text-align: center; font-size: .8333em\">\r\n    </div>\r\n    <div class=\"monospace\"\r\n         style=\"display: inline-block; margin-left: 4px\">\r\n      [(ngModel)]: {{ '\"' + (inputText1 || 'null') + '\"' }}\r\n    </div>\r\n  </div>\r\n  <div style=\"display: inline-block; margin-block-start: .25em\">\r\n    <label class=\"monospace\"\r\n           for=\"inputId2\">2.</label>\r\n    <input [ngModel]=\"inputText2\"\r\n           id=\"inputId2\"\r\n           placeholder=\"—\"\r\n           style=\"width: 50px; text-align: center; font-size: .8333em\">\r\n  </div>\r\n  <div class=\"monospace\"\r\n       style=\"display: inline-block; margin-left: 4px\">\r\n    [ ngModel ]: {{ '\"' + (inputText2 || 'null') + '\"' }}\r\n  </div>\r\n</section>\r\n<app-foooter [a]=\"b\"\r\n             [aa]=\"d\">\r\n  <div id=\".\"\r\n       pane></div>\r\n  <div pane\r\n       text=\"he\"></div>\r\n  <div pane\r\n       text=\"re\"></div>\r\n</app-foooter>\r\n");

/***/ }),

/***/ "./src/app/module/forms/app2-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/module/forms/app2-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: App2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App2RoutingModule", function() { return App2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app2.component */ "./src/app/module/forms/app2.component.ts");




const ROUTES = [
    {
        path: 'ng-forms',
        component: _app2_component__WEBPACK_IMPORTED_MODULE_3__["App2Component"]
    },
    {
        path: '',
        redirectTo: 'ng-forms',
        pathMatch: 'full'
    }
];
let App2RoutingModule = class App2RoutingModule {
};
App2RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], App2RoutingModule);



/***/ }),

/***/ "./src/app/module/forms/app2.component.css":
/*!*************************************************!*\
  !*** ./src/app/module/forms/app2.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.list {\r\n  margin: 0 auto;\r\n  border: 1px solid black;\r\n  border-top: none;\r\n  width: 20%;\r\n  float: left;\r\n  clear: both\r\n}\r\n\r\np.list:first-child {\r\n  margin-block-start: 1em\r\n}\r\n\r\np.list:last-child {\r\n  margin-block-end: 1em\r\n}\r\n\r\n.first {\r\n  margin-block-start: 1em\r\n}\r\n\r\n.first-sm {\r\n  margin-block-start: .5em\r\n}\r\n\r\n.first-sm-after {\r\n  margin-block-end: .5em\r\n}\r\n\r\n.clear-both {\r\n  clear: both\r\n}\r\n\r\ntable {\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n  table-layout: fixed\r\n}\r\n\r\ntable, th, td {\r\n  border: 1px solid black\r\n}\r\n\r\nth, td {\r\n  padding: 5px 10px;\r\n  min-width: 300px\r\n}\r\n\r\n.L {\r\n  text-align: left\r\n}\r\n\r\n.R {\r\n  text-align: right\r\n}\r\n\r\nspan#test0::before {\r\n  content: \"Suma:\";\r\n  position: absolute;\r\n  right: calc(50% + 1.75ch)\r\n}\r\n\r\n.monospace {\r\n  font-size: .8333em;\r\n  font-family: Lucida Console, monospace\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/forms/app2.component.ts":
/*!************************************************!*\
  !*** ./src/app/module/forms/app2.component.ts ***!
  \************************************************/
/*! exports provided: App2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App2Component", function() { return App2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _util_HTMLInputToPercent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/HTMLInputToPercent */ "./src/app/util/HTMLInputToPercent.ts");
var App2Component_1;




let App2Component = App2Component_1 = class App2Component {
    constructor(titleService) {
        this.titleService = titleService;
        this.weryfik = App2Component_1[`weryfik`];
        this.und2 = [];
        this.t = typeof this.und;
        this.tt = typeof this.und2;
        this.dane = [];
        this.liczba = 1;
        this.ilePx = 20;
        this.items = [2, 1];
        this.inputText1 = 'abc';
        this.inputText2 = 'def';
        this.b = 'b';
        this.d = 'd';
        this.title = 'Formularze';
        this.lifecycleLog = [];
        this.lifecycleLogCount = new Map();
        this.i = 0;
    }
    ngOnChanges(changes) {
        var _a;
        this.countLifecycleCalls(this.ngOnChanges.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngOnChanges.name + '(' + this.gM(this.ngOnChanges.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
    }
    ngOnInit() {
        var _a;
        this.setTitle(this.title);
        App2Component_1[`word`]('a b c d e');
        App2Component_1[`word2`]('a b c d e');
        App2Component_1[`word3`]('a b c d e');
        App2Component_1[`word4`]('a b c d e');
        App2Component_1[`word5`]('a b c d e');
        this.countLifecycleCalls(this.ngOnInit.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngOnInit.name + '(' + this.gM(this.ngOnInit.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            this.b = 'c';
            this.d = 'e';
        }, 10000);
    }
    ngDoCheck() {
        var _a;
        this.countLifecycleCalls(this.ngDoCheck.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngDoCheck.name + '(' + this.gM(this.ngDoCheck.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
    }
    ngAfterContentInit() {
        var _a;
        this.countLifecycleCalls(this.ngAfterContentInit.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngAfterContentInit.name + '(' + this.gM(this.ngAfterContentInit.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
    }
    ngAfterContentChecked() {
        var _a;
        this.countLifecycleCalls(this.ngAfterContentChecked.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngAfterContentChecked.name + '(' + this.gM(this.ngAfterContentChecked.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
    }
    ngAfterViewInit() {
        var _a;
        this.countLifecycleCalls(this.ngAfterViewInit.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngAfterViewInit.name + '(' + this.gM(this.ngAfterViewInit.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
        console.log('inputElement', this.inputElement);
    }
    ngAfterViewChecked() {
        var _a;
        this.countLifecycleCalls(this.ngAfterViewChecked.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngAfterViewChecked.name + '(' + this.gM(this.ngAfterViewChecked.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
    }
    ngOnDestroy() {
        var _a;
        this.countLifecycleCalls(this.ngOnDestroy.name);
        this.lifecycleLog.push(++this.i + '/' + this.ngOnDestroy.name + '(' + this.gM(this.ngOnDestroy.name) + ')/' +
            (typeof this.inputElement !== 'undefined') + '/' + ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight));
        console.log('---', Object.keys({ lifecycleLog: this.lifecycleLog })[0] + ':');
        this.lifecycleLog.forEach((value) => console.log(value));
        console.log('--- EOL');
    }
    dodajLiczbe() {
        this.dane.push(this.liczba++);
    }
    toggleDisable() {
        this.inputElement.nativeElement.disabled = !this.inputElement.nativeElement.disabled;
    }
    countLifecycleCalls(name) {
        this.lifecycleLogCount.has(name) ?
            this.lifecycleLogCount.set(name, this.lifecycleLogCount.get(name) + 1) : this.lifecycleLogCount.set(name, 1);
    }
    gM(name) {
        return this.lifecycleLogCount.get(name);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
};
App2Component.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input0'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], App2Component.prototype, "inputElement", void 0);
App2Component = App2Component_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app2.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/forms/app2.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app2.component.css */ "./src/app/module/forms/app2.component.css")).default]
    }),
    Object(_util_HTMLInputToPercent__WEBPACK_IMPORTED_MODULE_3__["HTMLInputToPercent"])(),
    _util_HTMLInputToPercent__WEBPACK_IMPORTED_MODULE_3__["Decorator"],
    Object(_util_HTMLInputToPercent__WEBPACK_IMPORTED_MODULE_3__["Decorator2"])('Hey!a'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], App2Component);



/***/ }),

/***/ "./src/app/module/forms/app2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/module/forms/app2.module.ts ***!
  \*********************************************/
/*! exports provided: App2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App2Module", function() { return App2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app2.component */ "./src/app/module/forms/app2.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app2-routing.module */ "./src/app/module/forms/app2-routing.module.ts");
/* harmony import */ var _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../gen_modules/footer/footer.module */ "./src/app/gen_modules/footer/footer.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let App2Module = class App2Module {
};
App2Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
            _app2_routing_module__WEBPACK_IMPORTED_MODULE_4__["App2RoutingModule"]
        ],
        declarations: [_app2_component__WEBPACK_IMPORTED_MODULE_2__["App2Component"]]
    })
], App2Module);



/***/ }),

/***/ "./src/app/util/HTMLInputToPercent.ts":
/*!********************************************!*\
  !*** ./src/app/util/HTMLInputToPercent.ts ***!
  \********************************************/
/*! exports provided: HTMLInputToPercent, Decorator, Decorator2, Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLInputToPercent", function() { return HTMLInputToPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decorator", function() { return Decorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decorator2", function() { return Decorator2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function HTMLInputToPercent() {
    console.log('—', 'first custom decorator');
    return (target) => {
        target.word = (param) => console.log(param.toUpperCase());
        target.word2 = (par) => {
            return ((param) => console.log(param))(par.toUpperCase());
        };
        target.word3 = (par) => {
            ((param) => console.log(param))(par.toUpperCase());
        };
        target.word4 = (par) => {
            console.log(par.toUpperCase());
        };
        target.word5 = (par) => console.log(par.toUpperCase());
        target.weryfik = (p) => {
            Test.weryfik(p);
        };
    };
}
function Decorator(decoratedClass) {
    console.log('—', decoratedClass.name);
}
function Decorator2(message) {
    console.log('—', message);
    return (target) => console.log('—', '—', target.name);
}
class Test {
    static weryfik(el) {
        let val = el.value;
        if (/^[0-9]+\.$/.test(val)) {
            console.log('1. regex: ' + val);
            val = val.slice(0, -1);
        }
        val = +val;
        if (!(val > 0 && val < 101) || (val % 1 !== 0)) {
            console.log('2. zerowanie nullem: ' + val);
            el.value = null;
            return;
        }
        console.log('3. ok: ' + val);
        el.value = val + '';
    }
}


/***/ })

}]);