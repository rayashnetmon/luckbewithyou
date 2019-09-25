webpackJsonp([6],{

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


// import { SearchPage } from "../search/search";

var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, WP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.WP = WP;
        this.searchQuery = "";
        this.page = 2;
        this.WooCommerce = WP.init();
        this.loadMoreProducts(null);
        this.WooCommerce.getAsync("products").then(function (data) {
            console.log(JSON.parse(data.body));
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    // ionViewDidLoad(){
    //   setInterval(()=> {
    //     if(this.productSlides.getActiveIndex() == this.productSlides.length() -1)
    //       this.productSlides.slideTo(0);
    //     this.productSlides.slideNext();
    //   }, 3000)
    // }
    HomePage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        console.log(event);
        if (event == null) {
            this.page = 2;
            this.moreProducts = [];
        }
        else
            this.page++;
        this.WooCommerce.getAsync("products?page=" + this.page).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.moreProducts = _this.moreProducts.concat(JSON.parse(data.body).products);
            if (event != null) {
                event.complete();
            }
            if (JSON.parse(data.body).products.length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: "No more products!",
                    duration: 5000
                }).present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetails', { "product": product });
    };
    HomePage.prototype.onSearch = function (event) {
        console.log('loggg');
        /*
        if(this.searchQuery.length > 0){
          this.navCtrl.push('SearchPage', {"searchQuery": this.searchQuery});
        }
        */
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('productSlides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], HomePage.prototype, "productSlides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/elflaco/Documents/rtry/wooionic3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar  color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n\n<h4>Current Credits: <p id="slotCredits">10000</p></h4>\n<div id="slotMachine_wrap">\n  <div id="slotMachine">\n    <div id="wheelwrap">\n      <div id="wheel1" class="wheel">\n          <img src="./assets/images/wheel1.gif" alt="" />\n          <img src="./assets/images/ani.gif" alt="" class="slotSpinAnimation" />\n      </div>\n      <div id="wheel2" class="wheel">\n          <img src="./assets/images/wheel2.gif" alt="" />\n          <img src="./assets/images/ani.gif" alt="" class="slotSpinAnimation" />\n      </div>\n      <div id="wheel3" class="wheel">\n          <img src="./assets/images/wheel3.gif" alt="" />\n          <img src="./assets/images/ani.gif" alt="" class="slotSpinAnimation" />\n      </div>\n      <img src="./assets/images/over.png" alt="" id="wheelOverlay" />\n\n    </div>\n    <a href="#" id="slotTrigger" class="btn btn-primary">spin</a>\n  </div>\n</div>\n\n<ion-buttons end>\n      <button ion-button icon-only (click) ="onSearch()">\n       <ion-icon name="search"></ion-icon>\n     </button>\n</ion-buttons>\n\n\n  <ion-card>\n    <ion-slides loop="true" autoplay="3000" pager>\n      <ion-slide *ngFor="let number of [1,2,3,4]">\n        <img src="./assets/images/{{number}}.jpg" />\n      </ion-slide>\n\n    </ion-slides>\n  </ion-card>\n\n  <img style="margin-top: 10px;" src="./assets/images/banner2.jpg" />\n\n  <ion-grid>\n    <ion-row>\n      <ion-slides #productSlides>\n        <ion-slide *ngFor="let product of products">\n          <ion-card no-padding>\n            <img [src]="product.featured_src" />\n            <h1 padding center> {{ product.title }} </h1>\n            <p center padding [innerHTML]="product.short_description"></p>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item *ngFor="let product of moreProducts" text-wrap (click)="openProductPage(product)">\n      <ion-thumbnail item-left>\n        <img [src]="product.featured_src" />\n      </ion-thumbnail>\n\n      <h2> {{ product.title }} </h2>\n\n      <p>\n        <span [innerHTML]="product.short_description.substr(0, 50) + \'...\'"></span>\n        <span [innerHTML]="product.price_html"></span>\n      </p>\n\n      <button ion-button icon clear item-right>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/elflaco/Documents/rtry/wooionic3/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map