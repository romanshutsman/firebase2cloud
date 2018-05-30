webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Firebase Gallery';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__image_detail_image_detail_component__ = __webpack_require__("../../../../../src/app/image-detail/image-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_authenticationGuard_service__ = __webpack_require__("../../../../../src/app/services/authenticationGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes__ = __webpack_require__("../../../../../src/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__image_detail_image_detail_component__["a" /* ImageDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_authenticationGuard_service__["a" /* AuthenticationGuard */],
            __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_16__services_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_10__image_detail_image_detail_component__["a" /* ImageDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__services_upload_service__["a" /* UploadService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  color: rgba(255, 255, 255, 1) !important;\n}\nul { padding:0; width:100%; margin:20px auto}\nli {\n  display: block;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  float: left;\n    max-width: 210px;\n    max-height: 250px;\n    width: 210px;\n    height: 250px;\n    position: relative;\n\n\n\n}\n\n.tn {\n  margin:6px 6px;\n  border: 4px solid #eee;\n  box-shadow:#555 1px 1px 8px 1px;\n  cursor: pointer;\n  height: auto;\n  width: 200px;\n\n}\n\nh2{\n  margin-bottom: 20px;\n}\n\n.wrap {\n  background: rebeccapurple;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/M_Cloud_Computing_Banner_01-2.jpg")) + ");\n  width: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: #999;\n  padding-right: 0px;\n  padding-left: 0px;\n  min-height: 100vh;\n\n}\n.container {\n  margin-top: 50px ;\n  background: rgba(0, 0, 0, 0.75) ;\n}\n.btn-group{\n      padding-left: 2px;\n      padding-right: 2px;\n      margin-left: 4px;\n       position: absolute;\n       bottom: 0px\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngIf=\"!emailVerify\">\n                <h1>Будь ласка верифікуй email!</h1>\n                <button class=\"btn btn-primary\" (click)=\"SendVerification()\">Повторити спробу!</button>\n            </div>\n            <div *ngIf=\"emailVerify\">\n                <div *ngIf=\"countImg == 0\">\n                    <h1>У тебе немає Фотографій!</h1>\n                </div>\n                <div *ngIf=\"countImg > 0\">\n                    <h2>Останні фотографії</h2>\n                    <ul id=\"thumbnailsList\">\n                        <li *ngFor=\"let image of images | async\" class=\"img\">\n                            <a [routerLink]=\"['/image', image.$key]\">\n                                <img src=\"{{image.url}}\" class=\"tn\">\n                            </a>\n                            <span class=\"btn-group\">\n                                <button class=\"btn btn-primary\" (click)=\"down(image.url)\">Завантажити</button>\n                                <button class=\"btn btn-danger\" (click)=\"delete(image.$key)\">Видалити</button>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_detail_image_detail_component__ = __webpack_require__("../../../../../src/app/image-detail/image-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = (function () {
    function GalleryComponent(imageService, ImageDetailComponent) {
        this.imageService = imageService;
        this.ImageDetailComponent = ImageDetailComponent;
        this.countImg = 0;
        this.img = [];
        this.emailVerify = false;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.imageService.getImages();
        console.log(this.images);
        this.images.forEach(function (element) {
            console.log(element.length);
            _this.countImg = element.length;
            _this.img.push(element);
        });
        console.log(this.img.length);
        this.emailVerify = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.emailVerified;
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.emailVerified);
    };
    GalleryComponent.prototype.SendVerification = function () {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.sendEmailVerification();
    };
    GalleryComponent.prototype.delete = function (key) {
        console.log(key);
        this.ImageDetailComponent.delete(key);
    };
    GalleryComponent.prototype.down = function (url) {
        console.log(url);
        this.ImageDetailComponent.downLoad(url);
    };
    GalleryComponent.prototype.ngOnChanges = function () {
        this.images = this.imageService.getImages();
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__image_detail_image_detail_component__["a" /* ImageDetailComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__image_detail_image_detail_component__["a" /* ImageDetailComponent */]) === "function" && _b || Object])
], GalleryComponent);

var _a, _b;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/robot.png")) + ");\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/2018-02-12-image.jpg")) + ");\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-position: center center;\r\n    background-repeat : no-repeat;\r\n    background-attachment: fixed;\r\n    background-size : cover;\r\n    background-color: #999;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.message {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 30%;\r\n  bottom: 0;\r\n  display: block;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  padding: 0.5em;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"wrapper\">\n    <div class=\"message\">\n      <div class=\"container\">\n        <h1>FUTURE IS NOW</h1>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-detail/image-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-container{\n    box-shadow:#555 1px 2px 8px 1px;\n    min-height: 660px;\n    /* min-width: 900px; */\n    background-position: center;\n    background-repeat: no-repeat;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-detail/image-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <button class=\"btn btn-primary\" (click)=\"downLoad(imageUrl)\">Download</button>\n  <button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n  <div class=col-md-12>\n    <div [ngStyle]=\"{'background-image':'url('+ imageUrl +')'}\" \n      class=\"img-container\">\n      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/image-detail/image-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageDetailComponent = (function () {
    function ImageDetailComponent(imageService, db, route, router) {
        this.imageService = imageService;
        this.db = db;
        this.route = route;
        this.router = router;
        this.imageUrl = '';
        this.basePath = '/uploads';
    }
    ImageDetailComponent.prototype.getImageUrl = function (key) {
        var _this = this;
        this.imageService.getImage(key)
            .then(function (image) {
            console.log(image.url);
            _this.imageUrl = image.url;
        });
    };
    ImageDetailComponent.prototype.delete = function (key) {
        var uid = localStorage.getItem('uid');
        var url = uid + '/uploads';
        console.log(this.route.snapshot.params['id']);
        this.db.list(uid + "/" + this.basePath + "/").remove(key || this.route.snapshot.params['id']);
        this.router.navigateByUrl('/gallery');
    };
    ImageDetailComponent.prototype.downLoad = function (url) {
        console.log(url);
        // const headers = new Headers();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        // var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
        // var xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = function () {
        //   var a = document.createElement('a');
        //   a.href = window.URL.createObjectURL(xhr.response);
        //   a.download = "fileDownloaded.jpg"; // Name the file anything you'd like.
        //   a.style.display = 'none';
        //   document.body.appendChild(a);
        //   a.click();
        // };
        // xhr.open('GET', url);
        // xhr.send();
    };
    ImageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.imageUrl);
        }, 1000);
        console.log(this.route.snapshot.params['id']);
        this.getImageUrl(this.route.snapshot.params['id']);
    };
    return ImageDetailComponent;
}());
ImageDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-image-detail',
        template: __webpack_require__("../../../../../src/app/image-detail/image-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-detail/image-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ImageDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=image-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n  background : rebeccapurple;\n  height : 100vh;\n  display : -ms-flexbox;\n  display : flex;\n        background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/IoTWorld_01.jpg")) + ");\n        width: 100%;\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n        background-color: #999;\n        padding-right: 0px;\n        padding-left: 0px;\n\n}\n.container{\n  color: rgba(255, 255, 255, 1);\n  margin: 6% auto;\n  background-color: rgba(0, 0, 0, 0.7);\n\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  width: 60%;\n  padding: 5%;\n  border-radius: 0px;\n}\n\nh1.login-title {\n  padding-bottom: 50px;\n  font-family: \"Cabin\";\n  font-size: 32px;\n  color: rgba(255, 255, 255, 1);\n  text-align:center;\n}\n\nbutton{\n  height: 60px;\n  margin-top: 20px;\n  width: 100%;\n}\n\ninput {\n  font-size: 20px;\n  line-height: 60px;\n  height: 60px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <div class=\"container\">\n    <form #loginForm=\"ngForm\">\n      <h1 class=\"login-title\">Log In</h1>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input class=\"form-control\" #emailControl=\"ngModel\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" maxlength=\"70\" email\n          required>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input class=\"form-control\" minlength=\"8\" #passwordControl=\"ngModel\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" maxlength=\"70\"\n          type=\"password\" required>\n      </div>\n      <button *ngIf=\"loginForm.form.valid\" type=\"submit\" class=\"btn btn-success btn-lg\" (click)=\"signIn()\">Sign In</button>\n      <p *ngIf=\"msg\" class=\"text-danger\">{{msg}}</p>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.authService.login({ email: this.email, password: this.password })
            .then(function (resolve) {
            console.log(resolve.uid);
            localStorage.setItem('uid', resolve.uid);
            _this.router.navigate(['gallery']);
        })
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/upload.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdOn = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.model.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\" style=\"  background-color: rgba(0, 0, 0, 0.6);\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand logo\" href=\"#\">{{ title }}</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\" *ngIf=\"(user|async)?.uid\">\n          <li><a routerLink=\"/gallery\">Image Gallery</a></li>\n          <li><a routerLink=\"/upload\">Upload</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav account\">\n          <li *ngIf=\"!(user|async)?.uid\"><a routerLink=\"/home\">Home</a></li>\n          <li *ngIf=\"!(user|async)?.uid\"><a routerLink=\"/login\">Log In</a></li>\n          <li *ngIf=\"!(user|async)?.uid\"><a routerLink=\"/register\">Register</a></li>\n          <li *ngIf=\"(user|async)?.uid\"><a href=\"#\" (click)=\"logOut()\">Log Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.authService.authUser();
    };
    NavbarComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logout().then(function (onResolve) {
            localStorage.setItem('uid', null);
            _this.router.navigate['/'];
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\r\n  background: rebeccapurple;\r\n  height: 100vh;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/M_Cloud_Computing_Banner_01-2.jpg")) + ");\r\n    width: 100%;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-color: #999;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n\r\n}\r\n\r\n.container {\r\n  color: rgba(255, 255, 255, 1);\r\n  margin: 6% auto;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  width: 60%;\r\n  padding: 3%;\r\n  border-radius: 0px;\r\n}\r\n\r\nh1.login-title {\r\n  padding-bottom: 50px;\r\n  font-family: \"Cabin\";\r\n  font-size: 32px;\r\n  color: rgba(255, 255, 255, 1);\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  margin-top: 20px;\r\n  width: 300px;\r\n}\r\n\r\ninput {\r\n  font-size: 20px;\r\n  line-height: 35px;\r\n  height: 35px;\r\n}\r\n.form-row{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <div class=\"container\">\n    <div class=\"row\" style=\" display: flex; justify-content: center; \">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <article class=\"card-body\">\n            <form (ngSubmit)=\"onSubmit(signupForm)\" #signupForm=\"ngForm\">\n              <h1 class=\"login-title\">Sign up</h1>\n              <div class=\"form-row \">\n                <div class=\"col form-group col-xs-10 col-sm-4 col-md-4 col-lg-4\">\n                  <label>First name </label>\n                  <input type=\"text\" name=\"first\" ngModel required class=\"form-control\" placeholder=\"\">\n                </div>\n                <div class=\"col form-group col-xs-10 col-sm-4 col-md-4 col-lg-4\">\n                  <label>Last name</label>\n                  <input type=\"text\" name=\"last\" ngModel required class=\"form-control\" placeholder=\" \">\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"form-row \">\n                <div class=\"form-group col-xs-10 col-sm-4 col-md-4 col-lg-4\">\n                  <label>Email address</label>\n                  <input type=\"email\" required name=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" ngModel class=\"form-control\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-xs-10 col-sm-4 col-md-4 col-lg-4\">\n                  <label>Create password</label>\n                  <input class=\"form-control\" ngModel name=\"password\" minlength=\"8\" required type=\"password\">\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"form-row \">\n                <div class=\"form-group\">\n                  <button type=\"submit\" *ngIf=\"signupForm.form.valid\"  class=\"btn btn-success btn-lg\"> Register </button>\n                </div>\n              </div>\n            </form>\n            <div class=\"clearfix\"></div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        console.log(form);
        var email = form.value.email;
        var password = form.value.password;
        var first = form.value.first;
        var last = form.value.last;
        this.auth.signUp(email, password);
        form.reset();
        this.route.navigateByUrl('/upload');
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthenticationService.prototype.signUp = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.sendEmailVerification();
            console.log(response.uid);
            localStorage.setItem('uid', response.uid);
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthenticationService.prototype.login = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthenticationService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthenticationService.prototype.authUser = function () {
        return this.user;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authenticationGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationGuard = (function () {
    function AuthenticationGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.user.map(function (auth) {
            if (!auth) {
                _this.router.navigateByUrl('/login');
                return false;
            }
            return true;
        }).take(1);
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=authenticationGuard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__("../../../../firebase/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageService = (function () {
    function ImageService(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.uid = auth.uid;
            }
        });
        var uid = localStorage.getItem('uid');
        var url = uid + '/uploads';
        console.log(db.list(url));
    }
    ImageService.prototype.getImages = function () {
        var uid = localStorage.getItem('uid');
        var url = uid + '/uploads';
        return this.db.list(url);
    };
    ImageService.prototype.getImage = function (key) {
        var uid = localStorage.getItem('uid');
        var url = uid + '/uploads/';
        return __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref(url + key).once('value')
            .then(function (snap) { return snap.val(); });
    };
    return ImageService;
}());
ImageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], ImageService);

var _a, _b;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadService = (function () {
    function UploadService(ngFire, db, afAuth) {
        this.ngFire = ngFire;
        this.db = db;
        this.afAuth = afAuth;
        this.basePath = '/uploads';
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser);
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]());
        console.log(afAuth.authState);
    }
    UploadService.prototype.uploadFile = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name)
            .put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, 
        // three observers
        // 1.) state_changed observer
        function (snapshot) {
            // upload in progress
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log(upload.progress);
        }, 
        // 2.) error observer
        function (error) {
            // upload failed
            console.log(error);
        }, 
        // 3.) success observer
        function () {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload);
        });
    };
    UploadService.prototype.saveFileData = function (upload) {
        var uid = localStorage.getItem('uid');
        console.log(uid);
        console.log(upload);
        this.db.list(uid + "/" + this.basePath + "/").push(upload);
        console.log('File saved!: ' + upload.url);
    };
    return UploadService;
}());
UploadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object])
], UploadService);

var _a, _b, _c;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  padding: 5%;\n  margin-top: 50px;\n  /* margin-top: 80px; */\n}\n\n.heading{\n    font-size: 24px;\n    margin-bottom: 30px;\n}\n\nbutton{\n  height: 60px;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.wrap {\n  background: rebeccapurple;\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/upload.jpg")) + ");\n  width: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: #999;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n.container {\n  color: rgba(255, 255, 255, 1);\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 90%;\n}\nlabel {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"!emailVerify\">\n      <h1>Будь ласка верифікуй email!</h1>\n      <button class=\"btn btn-primary\" (click)=\"SendVerification()\">Send again!</button>\n    </div>\n    <div class=\"row\" *ngIf=\"emailVerify\">\n      <div *ngIf=\"upload\">\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': upload?.progress + '%' }\"></div>\n        </div>\n        Progress: {{upload?.progress}}% Complete\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <h2 class=\"heading\" style=\"text-align: center\">Завантажити нові Фотографії!</h2>\n          <div class=\"custom-file\" style=\"display: flex; justify-content:center;\">\n            <input type=\"file\" (change)=\"handleFiles($event)\" multiple style=\" display: none; \" class=\"custom-file-input\" id=\"customFile\">\n            <label class=\"custom-file-label btn btn-success\" for=\"customFile\">Вибрати файли</label>\n          </div>\n          <h3 *ngIf=\"choseImg.length > 0\">Вибрані зображення:</h3>\n          <ul *ngFor=\" let img of choseImg\">\n            <li>{{img}}</li>\n          </ul>\n          <button class=\"btn btn-primary\" (click)=\"uploadFiles()\">Завантажити</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload_model__ = __webpack_require__("../../../../../src/app/models/upload.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // to help loop over files more succinctly

var UploadComponent = (function () {
    function UploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.emailVerify = false;
        this.choseImg = [];
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.emailVerify = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.emailVerified;
    };
    UploadComponent.prototype.handleFiles = function (event) {
        for (var key in event.target.files) {
            if (event.target.files.hasOwnProperty(key)) {
                this.choseImg.push(event.target.files[key].name);
            }
        }
        this.files = event.target.files;
    };
    UploadComponent.prototype.SendVerification = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.sendEmailVerification();
    };
    UploadComponent.prototype.uploadFiles = function () {
        var _this = this;
        var filesToUpload = this.files;
        var filesIdx = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](filesToUpload.length);
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](filesIdx, function (idx) {
            // console.log(filesToUpload[idx]);
            _this.upload = new __WEBPACK_IMPORTED_MODULE_2__models_upload_model__["a" /* Upload */](filesToUpload[idx]);
            _this.uploadService.uploadFile(_this.upload);
        });
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */]) === "function" && _a || Object])
], UploadComponent);

var _a;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/2018-02-12-image.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-02-12-image.1e5b957745c708689706.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/IoTWorld_01.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "IoTWorld_01.64e59a5ac2a3083adf8b.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/M_Cloud_Computing_Banner_01-2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "M_Cloud_Computing_Banner_01-2.7b28f4bb510ceccb1370.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/robot.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "robot.35b2c64df78c61a08f13.png";

/***/ }),

/***/ "../../../../../src/assets/images/upload.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "upload.c4e6b37e7f72f5017189.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAMxRxMFC2aYR0TVf8GeFconII7CqgquM8",
        authDomain: "cloud-d2c07.firebaseapp.com",
        databaseURL: "https://cloud-d2c07.firebaseio.com",
        projectId: "cloud-d2c07",
        storageBucket: "cloud-d2c07.appspot.com",
        messagingSenderId: "593448757807"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_image_detail_image_detail_component__ = __webpack_require__("../../../../../src/app/image-detail/image-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_authenticationGuard_service__ = __webpack_require__("../../../../../src/app/services/authenticationGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });







var appRoutes = [
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_0__app_gallery_gallery_component__["a" /* GalleryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__app_services_authenticationGuard_service__["a" /* AuthenticationGuard */]] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_3__app_upload_upload_component__["a" /* UploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__app_services_authenticationGuard_service__["a" /* AuthenticationGuard */]] },
    { path: 'image/:id', component: __WEBPACK_IMPORTED_MODULE_1__app_image_detail_image_detail_component__["a" /* ImageDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__app_services_authenticationGuard_service__["a" /* AuthenticationGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__app_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__app_register_register_component__["a" /* RegisterComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__app_home_home_component__["a" /* HomeComponent */] }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map