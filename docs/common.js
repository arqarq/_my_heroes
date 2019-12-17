(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/messages/messages.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/messages/messages.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<p>-->\r\n<!--messages works!-->\r\n<!--</p>-->\r\n<section>\r\n  <div *ngIf=\"messageService.messages.length\">\r\n    <h2>\r\n      Messages\r\n    </h2>\r\n    <button (click)=\"messageService.clear()\"\r\n            class=\"clear\">\r\n      Clear\r\n    </button>\r\n    <div *ngFor=\"let message of messageService.messages\"\r\n         [innerHTML]=\"addModifyingTag(message)\">\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/gen_modules/messages/messages.component.css":
/*!*************************************************************!*\
  !*** ./src/app/gen_modules/messages/messages.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MessagesComponent's private CSS styles */\r\n\r\nsection {\r\n  float: right;\r\n  clear: both;\r\n  width: 300px;\r\n  margin-bottom: 30px;\r\n  margin-left: calc(2em + 0.5px)\r\n}\r\n\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\nbody {\r\n  margin: 2em;\r\n}\r\n\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia, serif;\r\n}\r\n\r\nbutton.clear {\r\n  font-family: Arial, serif;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  /*cursor: hand;*/\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\n\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n");

/***/ }),

/***/ "./src/app/gen_modules/messages/messages.component.ts":
/*!************************************************************!*\
  !*** ./src/app/gen_modules/messages/messages.component.ts ***!
  \************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/message.service */ "./src/app/service/message.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(messageService
    // private messageService: MessageService // nie dla --aot
    ) {
        this.messageService = messageService;
        this.var = { a: 7, 5: '8', 7: '9' };
        this.var2 = { d: 11, b: 12 };
        this.var3 = Object.assign(Object.assign(Object.assign({}, this.var2), this.var), { 6: 10 });
        console.log('=-=-=-=-=-= ', this.var3);
    }
    addModifyingTag(message, tag = 'small', close = true) {
        const tagOpen = '<' + tag + '>';
        let tagClose = '';
        if (close) {
            tagClose = '</' + tag + '>';
        }
        return tagOpen + message + tagClose;
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _service_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/gen_modules/messages/messages.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./messages.component.css */ "./src/app/gen_modules/messages/messages.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        // private messageService: MessageService // nie dla --aot
    ])
], MessagesComponent);



/***/ }),

/***/ "./src/app/gen_modules/messages/messages.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/gen_modules/messages/messages.module.ts ***!
  \*********************************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.component */ "./src/app/gen_modules/messages/messages.component.ts");




let MessagesModule = class MessagesModule {
};
MessagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"]]
    })
], MessagesModule);



/***/ }),

/***/ "./src/app/model/hero.ts":
/*!*******************************!*\
  !*** ./src/app/model/hero.ts ***!
  \*******************************/
/*! exports provided: HERO_NOUN, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERO_NOUN", function() { return HERO_NOUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _marvel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marvel */ "./src/app/model/marvel.ts");


const HERO_NOUN = {
    singular: 'hero',
    plural: 'heroes'
};
class Hero extends _marvel__WEBPACK_IMPORTED_MODULE_1__["Marvel"] {
}


/***/ }),

/***/ "./src/app/model/marvel.ts":
/*!*********************************!*\
  !*** ./src/app/model/marvel.ts ***!
  \*********************************/
/*! exports provided: Marvel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marvel", function() { return Marvel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Marvel {
}


/***/ })

}]);