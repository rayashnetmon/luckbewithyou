webpackJsonp([8],{

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checkout/checkout.module": [
		626,
		7
	],
	"../pages/home/home.module": [
		627,
		6
	],
	"../pages/login/login.module": [
		628,
		5
	],
	"../pages/menu/menu.module": [
		629,
		4
	],
	"../pages/product-details/product-details.module": [
		630,
		3
	],
	"../pages/products-by-category/products-by-category.module": [
		631,
		2
	],
	"../pages/search/search.module": [
		632,
		1
	],
	"../pages/signup/signup.module": [
		633,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoocommerceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_woocommerce_api__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WoocommerceProvider = (function () {
    function WoocommerceProvider() {
        /*
        this.Woocommerce = WC({
          url: "https://ray.modifiedarts.com",
          consumerKey: "ck_0aeb15044cd8833659ee1dc2ec33ba85d6ef447d",
          consumerSecret: "cs_6d43781ba7bd65b5257e977077e379243b9fc2fa"
        });
    
        this.WoocommerceV2 = WC({
          url: "https://ray.modifiedarts.com",
          consumerKey: "ck_0aeb15044cd8833659ee1dc2ec33ba85d6ef447d",
          consumerSecret: "cs_6d43781ba7bd65b5257e977077e379243b9fc2fa"
          //wpAPI: true,
          //version: "wc/v2"
        });
        */
        this.Woocommerce = __WEBPACK_IMPORTED_MODULE_1_woocommerce_api__({
            url: "https://luckbewithyou.com",
            consumerKey: "ck_c5933cde7f99c45aa344dcfd8cde577b2392b2d0",
            consumerSecret: "cs_11ad9c8dffd455fc81b98500bcf9b75aff15a470"
        });
        this.WoocommerceV2 = __WEBPACK_IMPORTED_MODULE_1_woocommerce_api__({
            url: "https://luckbewithyou.com",
            consumerKey: "ck_c5933cde7f99c45aa344dcfd8cde577b2392b2d0",
            consumerSecret: "cs_11ad9c8dffd455fc81b98500bcf9b75aff15a470"
            //wpAPI: true,
            //version: "wc/v2"
        });
    }
    WoocommerceProvider.prototype.init = function (v2) {
        if (v2 == true) {
            return this.WoocommerceV2;
        }
        else {
            return this.Woocommerce;
        }
    };
    return WoocommerceProvider;
}());
WoocommerceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WoocommerceProvider);

//# sourceMappingURL=woocommerce.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Checkout } from '../checkout/checkout';
// import { Login } from '../login/login';
var Cart = (function () {
    function Cart(navCtrl, navParams, storage, viewCtrl, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.toastController = toastController;
        this.cartItems = [];
        this.showEmptyCartMessage = false;
        this.total = 0.0;
        this.storage.ready().then(function () {
            _this.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log(_this.cartItems);
                if (_this.cartItems.length > 0) {
                    _this.cartItems.forEach(function (item, index) {
                        if (item.variation) {
                            _this.total = _this.total + (parseFloat(item.variation.price) * item.qty);
                        }
                        else {
                            _this.total = _this.total + (item.product.price * item.qty);
                        }
                    });
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    Cart.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price;
        if (item.variation) {
            price = item.variation.price;
        }
        else {
            price = item.product.price;
        }
        var qty = item.qty;
        this.cartItems.splice(i, 1);
        this.storage.set("cart", this.cartItems).then(function () {
            _this.total = _this.total - (price * qty);
        });
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
    };
    Cart.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    Cart.prototype.checkout = function () {
        var _this = this;
        this.storage.get("userLoginInfo").then(function (data) {
            if (data != null) {
                _this.navCtrl.push('Checkout');
            }
            else {
                _this.navCtrl.push('Login', { next: 'Checkout' });
            }
        });
    };
    Cart.prototype.changeQty = function (item, i, change) {
        var _this = this;
        var price;
        if (!item.variation)
            price = item.product.price;
        else
            price = parseFloat(item.variation.price);
        var qty = item.qty;
        if (change < 0 && item.qty == 1) {
            return;
        }
        qty = qty + change;
        item.qty = qty;
        item.amount = qty * price;
        this.cartItems[i] = item;
        this.storage.set("cart", this.cartItems).then(function () {
            _this.toastController.create({
                message: "Cart Updated.",
                duration: 2000,
                showCloseButton: true
            }).present();
        });
        this.total = (parseFloat(this.total.toString()) + (parseFloat(price.toString()) * change));
    };
    return Cart;
}());
Cart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"/home/elflaco/Documents/rtry/wooionic3/src/pages/cart/cart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>Your Cart Description</ion-col>\n      </ion-row>\n      <ion-row [hidden]="!showEmptyCartMessage">\n        <ion-col>There are no products in your cart!</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <ion-card *ngFor="let item of cartItems; let i = index">\n    <ion-item color="light">\n\n      <ion-thumbnail item-left>\n        <img [src]="item.product.featured_src" style="width: 60px !important; height: 60px !important;"/>\n      </ion-thumbnail>\n      <h2>{{ item.product.title }}</h2>\n\n      <p *ngIf="item.variation"><span *ngFor="let att of item.variation.attributes">{{ att.option | titlecase }} &nbsp;</span></p>\n\n      <p>{{ item.qty }} • \n        <span *ngIf="!item.variation">{{ item.product.price }}</span>\n        <span *ngIf="item.variation">{{ item.variation.price }}</span></p>\n      <!-- <button ion-button clear item-right color="danger" (click)="removeFromCart(item, i)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button> -->\n\n    </ion-item>\n\n    <ion-item class="compact">\n      <ion-row no-padding>\n        <ion-col col-8>\n          <button ion-button icon-only clear color="danger" (click)="changeQty(item, i, -1)">\n            <ion-icon name="remove-circle"></ion-icon>\n          </button>\n          <button ion-button clear color="danger"> {{ item.qty }} </button>\n          <button ion-button icon-only clear color="danger" (click)="changeQty(item, i, 1)">\n            <ion-icon name="add-circle"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-4 style="text-align: right;">\n          <button ion-button small outline (click)="removeFromCart(item, i)" color="danger" style="width: 64px;">Remove</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-grid>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2>\n\n          </ion-col>\n          <ion-col col-4>\n            <b>TOTAL</b>\n          </ion-col>\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col col-3 style="text-align: right">\n            <b> {{ total }} </b>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="danger" outline block (click)="closeModal()">Back</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="danger" block (click)="checkout()">Checkout</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/elflaco/Documents/rtry/wooionic3/src/pages/cart/cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], Cart);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cart_cart__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_paypal__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_woocommerce_woocommerce__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { HomePage } from '../pages/home/home';
// import { Menu } from '../pages/menu/menu';
// import {ProductsByCategory} from '../pages/products-by-category/products-by-category';
// import { ProductDetails } from '../pages/product-details/product-details';



// import { Signup } from '../pages/signup/signup';
// import { Login } from '../pages/login/login';
// import { Checkout } from '../pages/checkout/checkout';


// import { SearchPage } from '../pages/search/search';



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_cart_cart__["a" /* Cart */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'Checkout', segment: 'checkout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'Menu', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-details/product-details.module#ProductDetailsModule', name: 'ProductDetails', segment: 'product-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/products-by-category/products-by-category.module#ProductsByCategoryModule', name: 'ProductsByCategory', segment: 'products-by-category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_cart_cart__["a" /* Cart */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.rootPage = 'Menu';
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.oneSignal.startInit('b019dab9-5078-40eb-a958-df477ef9b220', '706507838730');
            // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            // this.oneSignal.handleNotificationReceived().subscribe(() => {
            //   // do something when notification is received
            // });
            // this.oneSignal.handleNotificationOpened().subscribe(() => {
            //   // do something when a notification is opened
            // });
            // this.oneSignal.endInit();
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/elflaco/Documents/rtry/wooionic3/src/app/app.html"*/'\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/elflaco/Documents/rtry/wooionic3/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map