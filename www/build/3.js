webpackJsonp([3],{

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsModule", function() { return ProductDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailsModule = (function () {
    function ProductDetailsModule() {
    }
    return ProductDetailsModule;
}());
ProductDetailsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetails */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetails */]
        ]
    })
], ProductDetailsModule);

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(187);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductDetails = (function () {
    function ProductDetails(navCtrl, navParams, storage, toastCtrl, modalCtrl, WP, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.WP = WP;
        this.loadingCtrl = loadingCtrl;
        this.reviews = [];
        this.selectedOptions = {};
        this.requireOptions = true;
        this.productVariations = [];
        this.productPrice = 0.0;
        this.product = this.navParams.get("product");
        console.log(this.product);
        this.WooCommerce = WP.init(true);
        this.WooCommerce.getAsync('products/' + this.product.id + '/reviews').then(function (data) {
            _this.reviews = JSON.parse(data.body);
            console.log(_this.reviews);
        }, function (err) {
            console.log(err);
        });
    }
    ProductDetails.prototype.addToCart = function (product) {
        var _this = this;
        //counting selected attribute options
        var count = 0;
        for (var k in this.selectedOptions)
            if (this.selectedOptions.hasOwnProperty(k))
                count++;
        //counting variation attributes options
        var count_ = 0;
        for (var index = 0; index < this.product.attributes.length; index++) {
            if (this.product.attributes[index].variation)
                count_++;
        }
        //checking if user selected all the variation options or not
        if (count_ != count || this.requireOptions) {
            this.toastCtrl.create({
                message: "Select Product Options",
                duration: 2000,
                showCloseButton: true
            }).present();
            return;
        }
        this.storage.get("cart").then(function (data) {
            if (data == undefined || data.length == 0) {
                data = [];
                data.push({
                    "product": product,
                    "qty": 1,
                    "amount": parseFloat(product.price)
                });
                if (_this.selectedVariation) {
                    data[0].variation = _this.selectedVariation;
                    data[0].amount = parseFloat(_this.selectedVariation.price);
                }
            }
            else {
                var alreadyAdded = false;
                var alreadyAddedIndex = -1;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].product.id == product.id) {
                        if (_this.productVariations.length > 0) {
                            if (data[i].variation.id == _this.selectedVariation.id) {
                                alreadyAdded = true;
                                alreadyAddedIndex = i;
                                break;
                            }
                        }
                        else {
                            alreadyAdded = true;
                            alreadyAddedIndex = i;
                            break;
                        }
                    }
                }
                if (alreadyAdded == true) {
                    if (_this.selectedVariation) {
                        data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                        data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(_this.selectedVariation.price);
                        data[alreadyAddedIndex].variation = _this.selectedVariation;
                    }
                    else {
                        data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                        data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(data[alreadyAddedIndex].product.price);
                    }
                }
                else {
                    if (_this.selectedVariation) {
                        data.push({
                            product: product,
                            qty: 1,
                            amount: parseFloat(_this.selectedVariation.price),
                            variation: _this.selectedVariation
                        });
                    }
                    else {
                        data.push({
                            product: product,
                            qty: 1,
                            amount: parseFloat(product.price)
                        });
                    }
                }
            }
            _this.storage.set("cart", data).then(function () {
                console.log("Cart Updated");
                console.log(data);
                _this.toastCtrl.create({
                    message: "Cart Updated",
                    duration: 3000
                }).present();
            });
        });
    };
    ProductDetails.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* Cart */]).present();
    };
    ProductDetails.prototype.check = function (justSelectedAttribute) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, count, k, count_, index, _a, _b, _c, _d, i, matchFailed, key, j;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: "Getting Product Variations"
                        });
                        count = 0;
                        for (k in this.selectedOptions)
                            if (this.selectedOptions.hasOwnProperty(k))
                                count++;
                        count_ = 0;
                        for (index = 0; index < this.product.attributes.length; index++) {
                            if (this.product.attributes[index].variation)
                                count_++;
                        }
                        if (!(count_ != count)) return [3 /*break*/, 1];
                        this.requireOptions = true;
                        return [2 /*return*/];
                    case 1:
                        this.requireOptions = false;
                        //Get product variations only once when all product variables are selected by the user
                        loading.present();
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, this.WooCommerce.getAsync('products/' + this.product.id + '/variations/')];
                    case 2:
                        _a.productVariations = _c.apply(_b, [(_e.sent()).body]);
                        console.log(this.productVariations);
                        _e.label = 3;
                    case 3:
                        i = 0, matchFailed = false;
                        if (this.productVariations.length > 0) {
                            for (i = 0; i < this.productVariations.length; i++) {
                                matchFailed = false;
                                key = "";
                                for (j = 0; j < this.productVariations[i].attributes.length; j++) {
                                    key = this.productVariations[i].attributes[j].name;
                                    console.log(this.selectedOptions[key].toLowerCase() + " " + this.productVariations[i].attributes[j].option.toLowerCase());
                                    if (this.selectedOptions[key].toLowerCase() == this.productVariations[i].attributes[j].option.toLowerCase()) {
                                        //Do nothing
                                    }
                                    else {
                                        console.log(matchFailed);
                                        matchFailed = true;
                                        break;
                                    }
                                }
                                if (matchFailed) {
                                    continue;
                                }
                                else {
                                    //found the matching variation
                                    //console.log(productVariations[i])
                                    this.productPrice = this.productVariations[i].price;
                                    this.selectedVariation = this.productVariations[i];
                                    console.log(this.selectedVariation);
                                    break;
                                }
                            }
                            if (matchFailed == true) {
                                this.toastCtrl.create({
                                    message: "No Such Product Found",
                                    duration: 3000
                                }).present().then(function () {
                                    _this.requireOptions = true;
                                });
                            }
                        }
                        else {
                            this.productPrice = this.product.price;
                        }
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductDetails;
}());
ProductDetails = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-product-details',template:/*ion-inline-start:"/home/elflaco/Documents/rtry/wooionic3/src/pages/product-details/product-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title> {{ product.title }} </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-fab right top edge (click)="openCart()">\n    <button ion-fab color="danger"><ion-icon name="cart"></ion-icon></button>\n  </ion-fab>\n\n  <ion-card>\n    <ion-slides autoplay="3000" loop="true">\n      <ion-slide *ngFor="let image of product.images">\n        <img [src]="image.src" />\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{ product.title }} &nbsp;\n        <ion-chip *ngFor="let cat of product.categories" style="margin-left: 5px;">\n          <ion-label color="danger"> {{ cat }} </ion-label>\n        </ion-chip>\n      </ion-card-title>\n\n      <p [innerHTML]="product.description"></p>\n\n    </ion-card-content>\n\n\n  </ion-card>\n\n  <ion-card *ngIf="product.variations.length > 0">\n    <ion-item-divider color="light">Product options</ion-item-divider>\n    <ng-container *ngFor="let attribute of product.attributes">\n      <ion-item *ngIf="attribute.variation">\n        <ion-label> {{ attribute.name | titlecase }}</ion-label>\n        <ion-select interface="popover" [(ngModel)]="selectedOptions[attribute.name]" (ionChange)="check(attribute.name)">\n          <ion-option *ngFor="let option of attribute.options" [value]="option">{{ option }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ng-container>\n  </ion-card>\n\n  <ion-card *ngIf="product.attributes.length > 0">\n    <ion-card-content>\n      <ion-card-title>\n        Specifications\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor="let att of product.attributes">\n          <ion-col col-4>\n            {{ att.name}}\n          </ion-col>\n          <ion-col col-8>\n            <span *ngFor="let option of att.options"> {{ option }}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="reviews.length > 0">\n    <ion-card-content>\n      <ion-card-title>\n        Reviews\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor="let review of reviews">\n          <ion-col col-4>\n            <b>{{ review.reviewer_name }}</b><br/>\n            <span *ngIf="review.rating >= 1">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n            <span *ngIf="review.rating >= 2">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n            <span *ngIf="review.rating >= 3">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n            <span *ngIf="review.rating >= 4">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n            <span *ngIf="review.rating >= 5">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n\n          </ion-col>\n          <ion-col col-8>\n            {{ review.review }}\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button icon-left block outline color="danger" (click)="addToCart(product)">\n      <ion-icon name="basket"></ion-icon> {{ requireOptions ? \'Select Product Options\' : \'Add to Cart for \' + \'$\' + \' \' + productPrice}}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/elflaco/Documents/rtry/wooionic3/src/pages/product-details/product-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ProductDetails);

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=3.js.map