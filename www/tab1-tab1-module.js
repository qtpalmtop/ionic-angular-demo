(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\" [text]=\"''\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>断面详情</ion-title>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content\n        fullscreen\n        class=\"tab1-content\"\n        color=\"light\"\n>\n    <ion-list lines=\"none\" *ngFor=\"let riverSection of riverSectionList$ | async;index as riverId\">\n\n        <ion-item lines=\"full\" class=\"bold\">\n            <ion-label><span class=\"dot\"></span>&nbsp;&nbsp;&nbsp;{{riverSection.RLNAME}}水质状况</ion-label>\n        </ion-item>\n\n        <ion-item-group\n                class=\"rivers-section\"\n                *ngFor=\"let opiItem of riverSection.opi;index as opiId\"\n                [routerLink]=\"['/tabs/tab1/riverDetail', riverId, opiId]\"\n        >\n\n            <ion-item class=\"rivers-section-title\">\n                <ion-label>{{opiItem.WQ_AM_PI_NAME}}\n                    <span class=\"{{'rivers-section-badge rivers-section-badge-' + WATER_TYPE_LEVEL_MODEL[opiItem.WATER_TYPE_JB]}}\">{{opiItem.WATER_TYPE_JB}}类</span>\n                </ion-label>\n                <ion-label class=\"rivers-section-date\">{{riverSection.MTIME}}</ion-label>\n            </ion-item>\n\n            <ion-item lines=\"full\" class=\"rivers-section-content\">\n                <ion-label>氨氮</ion-label>\n                <ion-label>PH</ion-label>\n                <ion-label>高锰酸钾指数</ion-label>\n                <ion-label>溶解氧</ion-label>\n                <ion-label>总磷</ion-label>\n                <ion-label>总氮</ion-label>\n            </ion-item>\n\n            <ion-item lines=\"full\" class=\"rivers-section-content\">\n                <ion-label>{{opiItem.W21003 || \"-\"}}mg/L</ion-label>\n                <ion-label>{{opiItem.W01001 || \"-\"}}</ion-label>\n                <ion-label>{{opiItem.W01019 || \"-\"}}mg/L</ion-label>\n                <ion-label>{{opiItem.W01009 || \"-\"}}mg/L</ion-label>\n                <ion-label>{{opiItem.W21011 || \"-\"}}mg/L</ion-label>\n                <ion-label>{{opiItem.W21001 || \"-\"}}mg/L</ion-label>\n            </ion-item>\n        </ion-item-group>\n\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab1-content {\n  font-size: 16px; }\n  .tab1-content ion-list {\n    margin-bottom: 10px;\n    background: #f4f5f8; }\n  .tab1-content ion-list ion-item-group {\n      margin-bottom: 10px; }\n  .tab1-content .dot {\n    position: absolute;\n    height: 6px;\n    width: 6px;\n    background: #4c8dff;\n    top: 50%;\n    border-radius: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  .tab1-content .bold {\n    font-weight: bold; }\n  .tab1-content .rivers-section-title {\n    font-size: 1.2em; }\n  .tab1-content .rivers-section-content {\n    font-size: .8em; }\n  .tab1-content .rivers-section-badge {\n    padding: .1em .3em;\n    font-size: .7em;\n    color: #fff;\n    border-radius: .3em; }\n  .tab1-content .rivers-section-badge-default {\n      background: #989aa2; }\n  .tab1-content .rivers-section-badge-primary {\n      background: #4c8dff; }\n  .tab1-content .rivers-section-badge-success {\n      background: #10dc60; }\n  .tab1-content .rivers-section-badge-warn {\n      background: #ff9f4c; }\n  .tab1-content .rivers-section-badge-danger {\n      background: #d33939; }\n  .tab1-content .rivers-section-date {\n    font-size: .8em;\n    color: #c5c5c5;\n    text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5saS9qb2JQcm9qZWN0cy9teS1pb25pYy1hcHAvbXlBcHAvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lBSUksbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0VBTHZCO01BUU0sbUJBQW1CLEVBQUE7RUFSekI7SUFhSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFuQi9CO0lBdUJJLGlCQUFpQixFQUFBO0VBdkJyQjtJQTRCTSxnQkFBZ0IsRUFBQTtFQTVCdEI7SUFnQ00sZUFBZSxFQUFBO0VBaENyQjtJQW9DTSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUIsRUFBQTtFQXZDekI7TUEwQ1EsbUJBQW1CLEVBQUE7RUExQzNCO01BOENRLG1CQUFtQixFQUFBO0VBOUMzQjtNQWtEUSxtQkFBbUIsRUFBQTtFQWxEM0I7TUFzRFEsbUJBQW1CLEVBQUE7RUF0RDNCO01BMERRLG1CQUFtQixFQUFBO0VBMUQzQjtJQStETSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWIxLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgaW9uLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcblxuICAgIGlvbi1pdGVtLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmRvdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgYmFja2dyb3VuZDogIzRjOGRmZjtcbiAgICB0b3A6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG5cbiAgLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnJpdmVycy1zZWN0aW9uIHtcbiAgICAmLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuXG4gICAgJi1jb250ZW50IHtcbiAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICB9XG5cbiAgICAmLWJhZGdlIHtcbiAgICAgIHBhZGRpbmc6IC4xZW0gLjNlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjNlbTtcblxuICAgICAgJi1kZWZhdWx0IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzk4OWFhMjtcbiAgICAgIH1cblxuICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzRjOGRmZjtcbiAgICAgIH1cblxuICAgICAgJi1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzEwZGM2MDtcbiAgICAgIH1cblxuICAgICAgJi13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOWY0YztcbiAgICAgIH1cblxuICAgICAgJi1kYW5nZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZDMzOTM5O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtZGF0ZSB7XG4gICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICBjb2xvcjogI2M1YzVjNTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _river_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../river.service */ "./src/app/river.service.ts");



var Tab1Page = /** @class */ (function () {
    function Tab1Page(riverService) {
        this.riverService = riverService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.riverSectionList$ = this.riverService.getSectionList();
        this.WATER_TYPE_LEVEL_MODEL = {
            "I": "default",
            "II": "primary",
            "III": "success",
            "V": "warn",
            "IV": "danger",
        };
        console.log("this.riverSectionList", this.riverSectionList$);
    };
    Tab1Page.prototype.didClickItem = function () {
        alert("clicked!");
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_river_service__WEBPACK_IMPORTED_MODULE_2__["RiverService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map