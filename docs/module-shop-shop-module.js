(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-shop-shop-module"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/cart/cart.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/cart/cart.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #divElement\r\n     hidden>\r\n  <h2 [innerText]=\"'Cart'\">\r\n  </h2>\r\n</div>\r\n<div [innerHTML]=\"divElement.innerHTML\">\r\n</div>\r\n<p>\r\n  <a i18n=\"ceny transportu|Pobiera ceny transportu z serwera.@@shippingPrice\"\r\n     routerLink=\"../shipping\">Shipping Prices</a>\r\n</p>\r\n<div *ngIf=\"done\">\r\n  <h1>\r\n    All done!\r\n  </h1>\r\n</div>\r\n<div *ngIf=\"items.length\">\r\n  <div *ngFor=\"let item of items\"\r\n       class=\"cart-item\">\r\n    <span>{{ item.name }}</span>\r\n    <span>{{ item.price | money }}</span>\r\n  </div>\r\n</div>\r\n<p *ngIf=\"!done\"\r\n   i18n=\"ilość produktów|Wyświetla ile jest produktów dodanych do koszyka.@@qtyInCart\">\r\n  There\r\n  {items.length, plural,\r\n    =0 {are no}\r\n    =1 {is}\r\n    other {are}}\r\n  {{ items.length || '' }}\r\n  {items.length, plural,\r\n    =1 {product}\r\n    other {products}}\r\n  in the cart.\r\n</p>\r\n<div *ngIf=\"items.length\">\r\n  <button (click)=\"clearCart()\"\r\n          id=\"clearButton\">\r\n    Clear cart\r\n  </button>\r\n  <form (ngSubmit)=\"onSubmit(checkoutForm.value, items)\"\r\n        [formGroup]=\"checkoutForm\">\r\n    <div>\r\n      <label for=\"name\">Name</label>\r\n      <input [formControlName]=\"'name'\"\r\n             id=\"name\"\r\n             type=\"text\">\r\n    </div>\r\n    <div>\r\n      <label for=\"address\">Address</label>\r\n      <input [formControlName]=\"'address'\"\r\n             id=\"address\"\r\n             type=\"text\">\r\n    </div>\r\n    <button class=\"button\"\r\n            id=\"purchaseButton\"\r\n            type=\"submit\">\r\n      Purchase\r\n    </button>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-alerts/product-alerts.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-alerts/product-alerts.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"product.price > 700\">\r\n  <button (click)=\"notify.emit({wasCtrlKeyPressed: $event.ctrlKey, productPassedViaEvent: product})\">\r\n    Notify Me\r\n  </button>\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-details/product-details.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-details/product-details.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  Product details\r\n</h2>\r\n<div *ngIf=\"product\">\r\n  <h3 class=\"detail\">\r\n    {{ product.name }}\r\n  </h3>\r\n  <h4>\r\n    {{ product.price | money }}\r\n  </h4>\r\n  <p>\r\n    {{ product.description }}\r\n  </p>\r\n  <button (click)=\"addToCart(product)\">\r\n    Buy\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-list/product-list.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-list/product-list.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  Products\r\n</h2>\r\n<div *ngFor=\"let product of products; let productId = index\">\r\n  <h3>\r\n    <a [routerLink]=\"['products', productId]\"\r\n       [title]=\"product.name + ' details'\"\r\n       style=\"color: #1976D2\">{{ product.name }}</a>\r\n    /\r\n    <small>{{ product.price | money }}</small>\r\n  </h3>\r\n  <p *ngIf=\"product.description\">\r\n    <i>Description: {{ product.description }}</i>\r\n  </p>\r\n  <button (click)=\"share()\">\r\n    Share\r\n  </button>\r\n  <app-product-alerts (notify)=\"onNotify($event)\"\r\n                      [product]=\"product\">\r\n  </app-product-alerts>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/shipping/shipping.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/shipping/shipping.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  Shipping Prices\r\n</h2>\r\n<div *ngFor=\"let shipping of shippingCosts | async\"\r\n     class=\"shipping-item\">\r\n  <span>{{ shipping.type }}</span>\r\n  <span>{{ shipping.price | money }}</span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/shop.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/shop.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-fix\">\r\n  <app-top-bar></app-top-bar>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"bottom-right\">\r\n    <nav>\r\n      <a routerLink=\"/choose\">Back to choice</a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/top-bar/top-bar.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/top-bar/top-bar.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['./']\">\r\n  <h1>\r\n    My Store\r\n  </h1></a>\r\n<a [routerLink]=\"['cart']\"\r\n   class=\"button fancy-button\">\r\n  <i class=\"material-icons\">\r\n    shopping_cart</i>Checkout</a>\r\n");

/***/ }),

/***/ "./src/app/module/shop/cart/cart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/module/shop/cart/cart.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button#clearButton {\r\n  margin-bottom: 16px\r\n}\r\n\r\nbutton#purchaseButton {\r\n  margin-top: 4px\r\n}\r\n\r\nlabel {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin-bottom: 4px;\r\n  display: block;\r\n  text-transform: uppercase\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/shop/cart/cart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/module/shop/cart/cart.component.ts ***!
  \****************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/module/shop/service/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




let CartComponent = class CartComponent {
    constructor(cartService, cdr, formBuilder) {
        this.cartService = cartService;
        this.cdr = cdr;
        this.formBuilder = formBuilder;
        this.items = [];
        this.cdr.detach();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
        this.done = false;
    }
    ngOnInit() {
        this.items = this.cartService.getItems();
        this.cdr.detectChanges();
    }
    clearCart() {
        this.items = this.cartService.clearCart();
        this.cdr.detectChanges();
    }
    onSubmit(customerData, items) {
        items.forEach((item) => delete item.description); // slowest
        // items.forEach((item) => item.description = undefined);
        // items.forEach((item) => item.description = null); // fastest
        console.warn('Your order has been submitted - data:', JSON.stringify(customerData, null, 1));
        console.warn('Your order has been submitted - items:', JSON.stringify(items, null, 1));
        alert('Sent to: ' + JSON.stringify(customerData, null, 1));
        alert('You\'ve bought: ' + JSON.stringify(items, null, 1));
        this.done = true;
        this.clearCart();
        this.checkoutForm.reset();
    }
};
CartComponent.ctorParameters = () => [
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/cart/cart.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.component.css */ "./src/app/module/shop/cart/cart.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], CartComponent);



/***/ }),

/***/ "./src/app/module/shop/product-alerts/product-alerts.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/module/shop/product-alerts/product-alerts.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/module/shop/product-alerts/product-alerts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/module/shop/product-alerts/product-alerts.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAlertsComponent", function() { return ProductAlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProductAlertsComponent = class ProductAlertsComponent {
    constructor() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProductAlertsComponent.prototype, "product", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProductAlertsComponent.prototype, "notify", void 0);
ProductAlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-alerts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-alerts.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-alerts/product-alerts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-alerts.component.css */ "./src/app/module/shop/product-alerts/product-alerts.component.css")).default]
    })
], ProductAlertsComponent);



/***/ }),

/***/ "./src/app/module/shop/product-details/product-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/module/shop/product-details/product-details.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/module/shop/product-details/product-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module/shop/product-details/product-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _repository_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repository/products */ "./src/app/module/shop/repository/products.ts");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/module/shop/service/cart.service.ts");





let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.product = Object.assign({}, _repository_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"][+params.get('productId')]);
        });
    }
    addToCart(product) {
        window.alert('Your product has been added to the cart!');
        this.cartService.addToCart(product);
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
ProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-details/product-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-details.component.css */ "./src/app/module/shop/product-details/product-details.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/module/shop/product-list/product-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/module/shop/product-list/product-list.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  font-weight: bold\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/shop/product-list/product-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/module/shop/product-list/product-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/products */ "./src/app/module/shop/repository/products.ts");



let ProductListComponent = class ProductListComponent {
    constructor() {
        // products: {[key: string]: number | string}[] = PRODUCTS;
        this.products = _repository_products__WEBPACK_IMPORTED_MODULE_2__["PRODUCTS"];
    }
    share() {
        window.alert('The product has been shared!');
    }
    onNotify(fromEvent) {
        window.alert('You will be notified when the product goes on sale.\n\n' +
            '...test przekazania obiektu przez event:\n' +
            JSON.stringify(fromEvent.productPassedViaEvent, null, 1) +
            '\n\n...czy trzymałeś Ctrl przy kliknięciu?: ' + (fromEvent.wasCtrlKeyPressed ? 'TAK' : 'NIE'));
    }
};
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/product-list/product-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-list.component.css */ "./src/app/module/shop/product-list/product-list.component.css")).default]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/module/shop/repository/products.ts":
/*!****************************************************!*\
  !*** ./src/app/module/shop/repository/products.ts ***!
  \****************************************************/
/*! exports provided: PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PRODUCTS = [
    {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
    },
    {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    },
    {
        name: 'Phone Standard',
        price: 299,
        description: ''
    }
];


/***/ }),

/***/ "./src/app/module/shop/service/cart-service.module.ts":
/*!************************************************************!*\
  !*** ./src/app/module/shop/service/cart-service.module.ts ***!
  \************************************************************/
/*! exports provided: CartServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartServiceModule", function() { return CartServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CartServiceModule = class CartServiceModule {
};
CartServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
], CartServiceModule);



/***/ }),

/***/ "./src/app/module/shop/service/cart.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/module/shop/service/cart.service.ts ***!
  \*****************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _cart_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-service.module */ "./src/app/module/shop/service/cart-service.module.ts");




let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.items = [];
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    getShippingPrices() {
        return this.http.get('assets/shipping.json');
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _cart_service_module__WEBPACK_IMPORTED_MODULE_3__["CartServiceModule"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CartService);



/***/ }),

/***/ "./src/app/module/shop/service/money.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/module/shop/service/money.pipe.ts ***!
  \***************************************************/
/*! exports provided: MoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyPipe", function() { return MoneyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _locale_LIDs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../locale/LIDs */ "./src/locale/LIDs.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let MoneyPipe = class MoneyPipe {
    constructor(currencyPipe, // wymagany provider w module, ale instancja ma już ustawione LOCALE_ID
    localeId) {
        this.currencyPipe = currencyPipe;
        this.localeId = localeId;
    }
    transform(value, ...args) {
        // return new CurrencyPipe(this.localeId).transform( // bez providera w module
        //   value.toString(),
        //   LOCALE_ID_CURRENCIES[this.localeId].code,
        //   LOCALE_ID_CURRENCIES[this.localeId].display
        // );
        return this.currencyPipe.transform(value.toString(), _locale_LIDs__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID_CURRENCIES"][this.localeId].code, _locale_LIDs__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID_CURRENCIES"][this.localeId].display);
    }
};
MoneyPipe.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
MoneyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'money'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], String])
], MoneyPipe);



/***/ }),

/***/ "./src/app/module/shop/shipping/shipping.component.css":
/*!*************************************************************!*\
  !*** ./src/app/module/shop/shipping/shipping.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/module/shop/shipping/shipping.component.ts":
/*!************************************************************!*\
  !*** ./src/app/module/shop/shipping/shipping.component.ts ***!
  \************************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/module/shop/service/cart.service.ts");



let ShippingComponent = class ShippingComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.shippingCosts = this.cartService.getShippingPrices();
    }
};
ShippingComponent.ctorParameters = () => [
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
ShippingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shipping.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/shipping/shipping.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shipping.component.css */ "./src/app/module/shop/shipping/shipping.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
], ShippingComponent);



/***/ }),

/***/ "./src/app/module/shop/shop.component.css":
/*!************************************************!*\
  !*** ./src/app/module/shop/shop.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  box-sizing: border-box\r\n}\r\n\r\n.margin-fix {\r\n  /*margin: -2em*/\r\n  margin: 0;\r\n  display: flow-root\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: row\r\n}\r\n\r\n::ng-deep router-outlet + app-product-list,\r\n::ng-deep router-outlet + app-product-details,\r\n::ng-deep router-outlet + app-cart,\r\n::ng-deep router-outlet + app-shipping {\r\n  padding: 0 16px\r\n}\r\n\r\n/* Text */\r\n\r\n::ng-deep h1 {\r\n  font-size: 32px;\r\n}\r\n\r\n::ng-deep h2 {\r\n  font-size: 20px;\r\n}\r\n\r\n::ng-deep h1, h2 {\r\n  font-weight: lighter\r\n}\r\n\r\n::ng-deep h3.detail {\r\n  color: #1976D2;\r\n  font-weight: bold\r\n}\r\n\r\n/* Hyperlink */\r\n\r\n::ng-deep a {\r\n  cursor: pointer;\r\n  color: #1976D2;\r\n  text-decoration: none;\r\n}\r\n\r\n::ng-deep a:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Input */\r\n\r\n::ng-deep input {\r\n  font-size: 14px;\r\n  border-radius: 2px;\r\n  padding: 8px;\r\n  margin-bottom: 4px;\r\n  border: 1px solid #BDBDBD;\r\n}\r\n\r\n/* Button */\r\n\r\n::ng-deep .button, button {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 8px 16px;\r\n  border-radius: 2px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  background-color: #1976D2;\r\n  color: white;\r\n  border: none\r\n}\r\n\r\n::ng-deep .button:hover, button:hover {\r\n  opacity: 0.8;\r\n  font-weight: normal;\r\n}\r\n\r\n::ng-deep .button:disabled, button:disabled {\r\n  opacity: 0.5;\r\n  cursor: auto;\r\n}\r\n\r\n/* Fancy Button */\r\n\r\n::ng-deep .fancy-button {\r\n  background-color: white;\r\n  color: #1976d2;\r\n}\r\n\r\n::ng-deep .fancy-button i.material-icons {\r\n  color: #1976d2;\r\n  padding-right: 4px;\r\n}\r\n\r\n/* Top Bar */\r\n\r\napp-top-bar {\r\n  width: 100%;\r\n  height: 68px;\r\n  background-color: #1976d2;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px\r\n}\r\n\r\n::ng-deep app-top-bar h1 {\r\n  color: white;\r\n  margin: 0;\r\n}\r\n\r\n/* Checkout Cart, Shipping Prices */\r\n\r\n::ng-deep .cart-item,\r\n::ng-deep .shipping-item {\r\n  width: 100%;\r\n  min-width: 400px;\r\n  max-width: 450px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 16px 32px;\r\n  margin-bottom: 8px;\r\n  border-radius: 2px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n/*-------------*/\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607d8b\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc\r\n}\r\n");

/***/ }),

/***/ "./src/app/module/shop/shop.component.ts":
/*!***********************************************!*\
  !*** ./src/app/module/shop/shop.component.ts ***!
  \***********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ShopComponent = class ShopComponent {
};
ShopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/shop.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shop.component.css */ "./src/app/module/shop/shop.component.css")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/module/shop/shop.module.ts":
/*!********************************************!*\
  !*** ./src/app/module/shop/shop.module.ts ***!
  \********************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/module/shop/cart/cart.component.ts");
/* harmony import */ var _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-alerts/product-alerts.component */ "./src/app/module/shop/product-alerts/product-alerts.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/module/shop/product-details/product-details.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/module/shop/product-list/product-list.component.ts");
/* harmony import */ var _service_cart_service_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/cart-service.module */ "./src/app/module/shop/service/cart-service.module.ts");
/* harmony import */ var _service_money_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/money.pipe */ "./src/app/module/shop/service/money.pipe.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/module/shop/shipping/shipping.component.ts");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop.component */ "./src/app/module/shop/shop.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/module/shop/top-bar/top-bar.component.ts");

// import locale from '@angular/common/locales/pl';













let ShopModule = class ShopModule {
    constructor() {
        // registerLocaleData(locale); // potrzebne dla 'ng serve', 'ng build' radzi sobie bez tego
    }
};
ShopModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_13__["TopBarComponent"],
            _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_6__["ProductAlertsComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
            _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__["ShippingComponent"],
            _service_money_pipe__WEBPACK_IMPORTED_MODULE_10__["MoneyPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _service_cart_service_module__WEBPACK_IMPORTED_MODULE_9__["CartServiceModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"],
                    children: [
                        {
                            path: '',
                            component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"]
                        },
                        {
                            path: 'products/:productId',
                            component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"]
                        },
                        {
                            path: 'cart',
                            component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
                        },
                        {
                            path: 'shipping',
                            component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__["ShippingComponent"]
                        }
                    ]
                }
            ])
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ShopModule);



/***/ }),

/***/ "./src/app/module/shop/top-bar/top-bar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/module/shop/top-bar/top-bar.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/module/shop/top-bar/top-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/module/shop/top-bar/top-bar.component.ts ***!
  \**********************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TopBarComponent = class TopBarComponent {
};
TopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/module/shop/top-bar/top-bar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./top-bar.component.css */ "./src/app/module/shop/top-bar/top-bar.component.css")).default]
    })
], TopBarComponent);



/***/ })

}]);