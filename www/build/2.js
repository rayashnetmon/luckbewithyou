webpackJsonp([2],{

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryModule", function() { return ProductsByCategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_by_category__ = __webpack_require__(639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsByCategoryModule = (function () {
    function ProductsByCategoryModule() {
    }
    return ProductsByCategoryModule;
}());
ProductsByCategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__products_by_category__["a" /* ProductsByCategory */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products_by_category__["a" /* ProductsByCategory */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__products_by_category__["a" /* ProductsByCategory */]
        ]
    })
], ProductsByCategoryModule);

//# sourceMappingURL=products-by-category.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ProductDetails } from '../product-details/product-details';
var ProductsByCategory = (function () {
    function ProductsByCategory(navCtrl, navParams, WP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.WP = WP;
        this.page = 1;
        this.category = this.navParams.get("category");
        this.WooCommerce = WP.init();
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    ProductsByCategory.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsByCategory');
    };
    ProductsByCategory.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        console.log("Getting page " + this.page);
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then(function (data) {
            var temp = (JSON.parse(data.body).products);
            _this.products = _this.products.concat(JSON.parse(data.body).products);
            console.log(_this.products);
            event.complete();
            if (temp.length < 10)
                event.enable(false);
        });
    };
    ProductsByCategory.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetails', { "product": product });
    };
    return ProductsByCategory;
}());
ProductsByCategory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-products-by-category',template:/*ion-inline-start:"/home/elflaco/Documents/rtry/wooionic3/src/pages/products-by-category/products-by-category.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button color="danger" ion-button icon menuToggle>\n        <ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Products by Category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let product of products" text-wrap  (click)="openProductPage(product)">\n      <ion-thumbnail item-left>\n        <img [src]="product.featured_src" />\n      </ion-thumbnail>\n\n      <h2> {{ product.title }} </h2>\n\n      <p>\n        <span [innerHTML]="product.short_description.substr(0, 50) + \'...\'"></span>\n        <span [innerHTML]="product.price_html"></span>\n      </p>\n\n      <button ion-button icon clear item-right>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/elflaco/Documents/rtry/wooionic3/src/pages/products-by-category/products-by-category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */]])
], ProductsByCategory);

//# sourceMappingURL=products-by-category.js.map

/***/ })

});
//# sourceMappingURL=2.js.map