webpackJsonp([4],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */]
        ]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ProductsByCategory } from '../products-by-category/products-by-category'



var Menu = (function () {
    function Menu(navCtrl, navParams, storage, modalCtrl, events, WP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.WP = WP;
        this.homePage = 'HomePage';
        this.categories = [];
        this.user = {};
        this.WooCommerce = WP.init();
        this.WooCommerce.getAsync("products/categories").then(function (data) {
            console.log(JSON.parse(data.body).product_categories);
            var temp = JSON.parse(data.body).product_categories;
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].parent == 0) {
                    temp[i].subCategories = [];
                    if (temp[i].slug == "clothing") {
                        temp[i].icon = "shirt";
                    }
                    if (temp[i].slug == "music") {
                        temp[i].icon = "musical-notes";
                    }
                    if (temp[i].slug == "posters") {
                        temp[i].icon = "images";
                    }
                    _this.categories.push(temp[i]);
                }
            }
            //Groups Subcategories
            for (var i = 0; i < temp.length; i++) {
                for (var j = 0; j < _this.categories.length; j++) {
                    //console.log("Checking " + j + " " + i)
                    if (_this.categories[j].id == temp[i].parent) {
                        _this.categories[j].subCategories.push(temp[i]);
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
        this.events.subscribe("updateMenu", function () {
            _this.storage.ready().then(function () {
                _this.storage.get("userLoginInfo").then(function (userLoginInfo) {
                    if (userLoginInfo != null) {
                        console.log("User logged in...");
                        _this.user = userLoginInfo.user;
                        console.log(_this.user);
                        _this.loggedIn = true;
                    }
                    else {
                        console.log("No user found.");
                        _this.user = {};
                        _this.loggedIn = false;
                    }
                });
            });
        });
    }
    Menu.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("userLoginInfo").then(function (userLoginInfo) {
                if (userLoginInfo != null) {
                    console.log("User logged in...");
                    _this.user = userLoginInfo.user;
                    console.log(_this.user);
                    _this.loggedIn = true;
                }
                else {
                    console.log("No user found.");
                    _this.user = {};
                    _this.loggedIn = false;
                }
            });
        });
    };
    Menu.prototype.openCategoryPage = function (category) {
        this.childNavCtrl.setRoot('ProductsByCategory', { "category": category });
    };
    Menu.prototype.openPage = function (pageName) {
        var _this = this;
        if (pageName == "signup") {
            this.navCtrl.push('Signup');
        }
        if (pageName == "login") {
            this.navCtrl.push('Login');
        }
        if (pageName == 'logout') {
            this.storage.remove("userLoginInfo").then(function () {
                _this.user = {};
                _this.loggedIn = false;
            });
        }
        if (pageName == 'cart') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* Cart */]);
            modal.present();
        }
    };
    return Menu;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], Menu.prototype, "childNavCtrl", void 0);
Menu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/home/elflaco/Documents/rtry/wooionic3/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header hidden>\n    <ion-toolbar color="danger">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="card-background-page">\n\n    <ion-card>\n      <img src="./assets/images/rock.png" />\n      <div class="card-title">WOOIONIC</div>\n      <div class="card-subtitle">Keep Shopping</div>\n    </ion-card>\n\n\n    <ion-list>\n      <ion-item-divider color="danger">Categories</ion-item-divider>\n\n      <ion-card *ngFor="let category of categories">\n        <ion-item color="light" text-wrap (click)="openCategoryPage(category)" menuClose>\n          <ion-icon [name]="category.icon" item-left large></ion-icon>\n          <h2> {{ category.name }} </h2>\n          <p> {{ category.description }}</p>\n        </ion-item>\n\n        <!-- Optional Subcategories Display -->\n\n        <ion-item *ngFor="let sub of category.subCategories" text-wrap (click)="openCategoryPage(sub)" menuClose>\n          <ion-icon name="arrow-forward" item-left large></ion-icon>\n          <h2> {{ sub.name }} </h2>\n          <!-- <p> {{ sub.description }}</p> -->\n\n        </ion-item>\n      </ion-card>\n\n      <ion-item-divider color="danger">Account</ion-item-divider>\n\n      <ion-item (click)="openPage(\'signup\')" menuClose *ngIf="!loggedIn">\n        <ion-icon name="md-clipboard" item-left large></ion-icon>\n        <h2>Sign Up</h2>\n        <p>For a new account</p>\n      </ion-item>\n\n      <ion-item (click)="openPage(\'login\')" menuClose *ngIf="!loggedIn">\n        <ion-icon name="log-in" item-left large></ion-icon>\n        <h2>Login</h2>\n        <p>Using email and password</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" menuClose>\n        <ion-icon name="contact" item-left large></ion-icon>\n        <h2>{{ (this.user.firstname == \'\' ? this.user.username : this.user.firstname) || "" }}</h2>\n        <p>Welcome</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'cart\')" menuClose>\n        <ion-icon name="cart" item-left large></ion-icon>\n        <h2>Your Cart</h2>\n        <p>Check items in your cart</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'logout\')" menuClose>\n        <ion-icon name="log-out" item-left large></ion-icon>\n        <h2>Logout</h2>\n        <p>of your Account</p>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="homePage"></ion-nav>'/*ion-inline-end:"/home/elflaco/Documents/rtry/wooionic3/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */]])
], Menu);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=4.js.map