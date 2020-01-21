(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-drag-drop-drag-drop-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/drag-drop/drag-drop.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/drag-drop/drag-drop.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  Przeciągnięcie z wciśniętym <span style=\"font-weight: bold\">Ctrl</span> kopiuje element.\r\n</div>\r\n<div>\r\n  Kliknięcie z wciśniętym <span style=\"font-weight: bold\">Shift</span> usuwa/wstawia element.\r\n</div>\r\n<ng-container *ngFor=\"let node of nodes; let i = index\">\r\n  <div #divElement\r\n       (click)=\"onClick($event, i)\"\r\n       (dragover)=\"onDragOver($event, i)\"\r\n       (drop)=\"onDrop($event, i)\"\r\n       (mousedown)=\"onMouseDown($event, divElement, i)\"\r\n       [ngStyle]=\"{left: node.L, top: node.T}\"\r\n       class=\"node cursor-move\"\r\n       draggable=\"true\">\r\n    <ng-container *ngIf=\"node.blob\">\r\n      <div (dragstart)=\"onDragStart($event, i)\"\r\n           (mousedown)=\"$event.stopPropagation()\"\r\n           class=\"blob blob-text cursor-crosshair\"\r\n           draggable=\"true\">\r\n        <span class=\"char-fix\">{{ node.content }}</span>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-container>\r\n<app-foooter></app-foooter>\r\n");

/***/ }),

/***/ "./src/app/module/drag-drop/drag-drop.component.css":
/*!**********************************************************!*\
  !*** ./src/app/module/drag-drop/drag-drop.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep body.body_background_new_color {\r\n  background-color: rgba(52, 152, 210, .65)\r\n}\r\n\r\ndiv.node {\r\n  border: 1px solid rgba(0, 0, 0, .45);\r\n  background-color: white;\r\n  height: 42px;\r\n  width: 42px;\r\n  position: absolute\r\n}\r\n\r\ndiv.blob {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, .65);\r\n  height: 26px;\r\n  width: 26px;\r\n  position: relative;\r\n  left: 8px;\r\n  top: 8px;\r\n  z-index: 1\r\n}\r\n\r\ndiv.blob-text {\r\n  font-weight: 900;\r\n  color: greenyellow\r\n}\r\n\r\ndiv.cursor-move {\r\n  cursor: move\r\n}\r\n\r\ndiv.cursor-crosshair {\r\n  cursor: crosshair\r\n}\r\n\r\nspan.char-fix {\r\n  position: relative;\r\n  top: -.5px\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/drag-drop/drag-drop.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/module/drag-drop/drag-drop.component.ts ***!
  \*********************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_data_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repository/data-drag-drop */ "./src/app/repository/data-drag-drop.ts");
var DragDropComponent_1;



const KEY0 = 'indexOfItemPassed';
const KEY1 = 'contentOfItemPassed';
let DragDropComponent = DragDropComponent_1 = class DragDropComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nodes = _repository_data_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DATA"];
        this.nodes.forEach((node) => {
            node.L = Math.floor(Math.random() * 97) + '%';
            node.T = Math.floor(Math.random() * 95) + '%';
        });
    }
    ngAfterViewInit() {
        this.storeClassesOfBody();
        this.changeBackgroundColorOfBody();
    }
    ngOnDestroy() {
        this.restoreClassesOfBody();
    }
    onDragStart(event, i) {
        console.warn('dragStart: index of dragged element: ' + i);
        this.indexOfNodeRef = i;
        event.dataTransfer.setData(KEY0, i + '');
        event.dataTransfer.setData(KEY1, this.nodes[i].content);
    }
    onDragOver(event, i) {
        if (this.indexOfNodeRef === i) { // drag&drop na siebie
            return;
        }
        event.preventDefault();
        if (!this.nodes[i].blob) { // dla wstawiania do pustego elementu
            console.warn('dragOver: index of element being dragged over: ' + i);
            return;
        } // dla nadpisywania elementu
        console.warn('dragOver: overwriting element with index: ' + i);
    }
    onDrop(event, i) {
        const indexPassed = event.dataTransfer.getData(KEY0);
        if (indexPassed) {
            event.preventDefault();
            const contentPassed = event.dataTransfer.getData(KEY1);
            console.warn('drop: index of element to drop onto: ' + i + ' (from: ' + indexPassed + ')');
            this.nodes[i].blob = true;
            this.nodes[i].content = contentPassed;
            if (!event.ctrlKey) {
                this.nodes[+indexPassed].blob = false;
            }
        }
    }
    onClick(event, i) {
        event.preventDefault();
        if (event.shiftKey) {
            this.nodes[i].blob = !this.nodes[i].blob;
        }
    }
    onMouseDown(event, divElement, i) {
        event.preventDefault();
        this.pos3 = event.clientX;
        this.pos4 = event.clientY;
        console.log('---- x', this.pos3, '---- y', this.pos4);
        document.onmouseup = () => {
            console.log('stop');
            document.onmouseup = null;
            document.onmousemove = null;
        };
        document.onmousemove = (event2) => {
            event2.preventDefault();
            console.log('-- x', event2.clientX, '-- y', event2.clientY);
            this.pos1 = this.pos3 - event2.clientX;
            this.pos2 = this.pos4 - event2.clientY;
            this.pos3 = event2.clientX;
            this.pos4 = event2.clientY;
            // divElement.style.top = (divElement.offsetTop - this.pos2) + 'px';
            this.nodes[i].T = (divElement.offsetTop - this.pos2) + 'px';
            // divElement.style.left = (divElement.offsetLeft - this.pos1) + 'px';
            this.nodes[i].L = (divElement.offsetLeft - this.pos1) + 'px';
        };
    }
    changeBackgroundColorOfBody() {
        this.elementRef.nativeElement.ownerDocument.body.className = DragDropComponent_1.bodyClasses
            ? DragDropComponent_1.bodyClasses + ' body_background_new_color'
            : 'body_background_new_color';
    }
    storeClassesOfBody() {
        DragDropComponent_1.bodyClasses = this.elementRef.nativeElement.ownerDocument.body.className;
    }
    restoreClassesOfBody() {
        if (DragDropComponent_1.bodyClasses) {
            this.elementRef.nativeElement.ownerDocument.body.className = DragDropComponent_1.bodyClasses;
            return;
        }
        this.elementRef.nativeElement.ownerDocument.body.removeAttribute('class');
    }
};
DragDropComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
DragDropComponent = DragDropComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drag-drop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./drag-drop.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/drag-drop/drag-drop.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./drag-drop.component.css */ "./src/app/module/drag-drop/drag-drop.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], DragDropComponent);



/***/ }),

/***/ "./src/app/module/drag-drop/drag-drop.module.ts":
/*!******************************************************!*\
  !*** ./src/app/module/drag-drop/drag-drop.module.ts ***!
  \******************************************************/
/*! exports provided: DragDropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _drag_drop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop.component */ "./src/app/module/drag-drop/drag-drop.component.ts");
/* harmony import */ var _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gen_modules/footer/footer.module */ "./src/app/gen_modules/footer/footer.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let DragDropModule = class DragDropModule {
};
DragDropModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__["DragDropComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gen_modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _drag_drop_component__WEBPACK_IMPORTED_MODULE_3__["DragDropComponent"],
                    pathMatch: 'full'
                }
            ])
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], DragDropModule);



/***/ }),

/***/ "./src/app/repository/data-drag-drop.ts":
/*!**********************************************!*\
  !*** ./src/app/repository/data-drag-drop.ts ***!
  \**********************************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DATA = [
    { content: 'A', blob: true, L: '15%', T: '35%' },
    { content: 'B', blob: false, L: '35%', T: '15%' },
    { content: 'C', blob: false, L: '25%', T: '5%' },
    { content: 'D', blob: true, L: '5%', T: '23' },
    { content: 'E', blob: false, L: '75%', T: '30%' },
    { content: 'F', blob: true, L: '56%', T: '35%' },
    { content: 'G', blob: false, L: '34%', T: '27%' },
    { content: 'H', blob: true, L: '55%', T: '11%' },
    { content: 'I', blob: false, L: '3%', T: '18%' },
    { content: 'J', blob: false, L: '44%', T: '9%' },
    { content: 'K', blob: true, L: '40%', T: '12%' },
    { content: 'L', blob: true, L: null, T: null },
    { content: 'M', blob: true, L: null, T: null },
    { content: 'N', blob: false, L: null, T: null },
    { content: 'O', blob: false, L: null, T: null },
    { content: 'P', blob: true, L: null, T: null },
    { content: 'Q', blob: true, L: null, T: null },
    { content: 'R', blob: false, L: null, T: null },
    { content: 'S', blob: true, L: null, T: null },
    { content: 'T', blob: true, L: null, T: null },
    { content: 'U', blob: false, L: null, T: null },
    { content: 'W', blob: true, L: null, T: null },
    { content: 'X', blob: true, L: null, T: null },
    { content: 'Y', blob: false, L: null, T: null },
    { content: 'Z', blob: true, L: null, T: null }
];


/***/ })

}]);