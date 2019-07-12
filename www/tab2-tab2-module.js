(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/ngx-amap/fesm5/ngx-amap.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-amap/fesm5/ngx-amap.js ***!
  \*************************************************/
/*! exports provided: NgxAmapModule, NgxAmapComponent, AmapMarkerDirective, AmapInfoWindowComponent, AmapPolylineDirective, AmapToolBarDirective, AmapMarkerClustererDirective, AmapGeocoderService, AmapGeocoderWrapper, AmapAutocompleteService, AmapAutocompleteWrapper, AmapAutocompleteDirective, AmapPlaceSearchService, AmapPlaceSearchWrapper, AmapDistrictSearchService, AmapDistrictSearchWrapper, AmapMouseToolService, AmapMouseToolWrapper, AmapCircleDirective, AmapCircleMarkerDirective, AmapPolygonDirective, AmapTextDirective, AmapBezierCurveDirective, AmapEllipseDirective, AmapRectangleDirective, AmapHeatmapDirective, AmapDrivingService, AmapDrivingWrapper, AmapTransferService, AmapTransferWrapper, AmapWalkingService, AmapWalkingWrapper, AmapRidingService, AmapRidingWrapper, AmapTruckDrivingService, AmapTruckDrivingWrapper, ɵv, ɵs, ɵr, ɵw, ɵy, ɵj, ɵm, ɵl, ɵz, ɵg, ɵc, ɵd, ɵa, ɵq, ɵh, ɵi, ɵo, ɵt, ɵn, ɵx, ɵk, ɵu, ɵp, ɵf, ɵe, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAmapModule", function() { return NgxAmapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAmapComponent", function() { return NgxAmapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapMarkerDirective", function() { return AmapMarkerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapInfoWindowComponent", function() { return AmapInfoWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapPolylineDirective", function() { return AmapPolylineDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapToolBarDirective", function() { return AmapToolBarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapMarkerClustererDirective", function() { return AmapMarkerClustererDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapGeocoderService", function() { return AmapGeocoderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapGeocoderWrapper", function() { return AmapGeocoderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapAutocompleteService", function() { return AmapAutocompleteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapAutocompleteWrapper", function() { return AmapAutocompleteWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapAutocompleteDirective", function() { return AmapAutocompleteDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapPlaceSearchService", function() { return AmapPlaceSearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapPlaceSearchWrapper", function() { return AmapPlaceSearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapDistrictSearchService", function() { return AmapDistrictSearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapDistrictSearchWrapper", function() { return AmapDistrictSearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapMouseToolService", function() { return AmapMouseToolService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapMouseToolWrapper", function() { return AmapMouseToolWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapCircleDirective", function() { return AmapCircleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapCircleMarkerDirective", function() { return AmapCircleMarkerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapPolygonDirective", function() { return AmapPolygonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapTextDirective", function() { return AmapTextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapBezierCurveDirective", function() { return AmapBezierCurveDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapEllipseDirective", function() { return AmapEllipseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapRectangleDirective", function() { return AmapRectangleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapHeatmapDirective", function() { return AmapHeatmapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapDrivingService", function() { return AmapDrivingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapDrivingWrapper", function() { return AmapDrivingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapTransferService", function() { return AmapTransferService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapTransferWrapper", function() { return AmapTransferWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapWalkingService", function() { return AmapWalkingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapWalkingWrapper", function() { return AmapWalkingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapRidingService", function() { return AmapRidingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapRidingWrapper", function() { return AmapRidingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapTruckDrivingService", function() { return AmapTruckDrivingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapTruckDrivingWrapper", function() { return AmapTruckDrivingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return BezierCurveService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CircleMarkerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CircleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return EllipseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return HeatmapService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return IconService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return InfoWindowService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return LabelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return DebugLoggerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return LoggerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return MAP_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return MapAPILoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MapAPIService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return MarkerClustererService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return MarkerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return PixelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return PluginLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return PolygonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return PolylineService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return RectangleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return SizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return TextService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return ToolBarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return EventBinder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    /**
     * @return {?}
     */
    WindowRef.prototype.getNativeWindow = /**
     * @return {?}
     */
    function () {
        return window;
    };
    WindowRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return WindowRef;
}());
var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    /**
     * @return {?}
     */
    DocumentRef.prototype.getNativeDocument = /**
     * @return {?}
     */
    function () {
        return document;
    };
    DocumentRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return DocumentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.i = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(["[" + tag + "]"], args));
    };
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.e = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.error.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(["[" + tag + "]"], args));
    };
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.w = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(["[" + tag + "]"], args));
    };
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.d = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // only stub;
    };
    LoggerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return []; };
    return LoggerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MAP_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngx-amap MAP_API_CONFIG');
var MapAPILoaderService = /** @class */ (function () {
    function MapAPILoaderService(config, d, w, logger) {
        this.logger = logger;
        this.TAG = 'map-api-loader';
        this._defaultUrl = 'https://webapi.amap.com/maps';
        this._defaultVersion = '1.4.11';
        this._config = config || {};
        this._windowRef = w;
        this._documentRef = d;
    }
    /**
     * @return {?}
     */
    MapAPILoaderService.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._mapLoaded) {
            return this._mapLoaded;
        }
        this.logger.d(this.TAG, 'loading AMap api...');
        var /** @type {?} */ callbackName = "ngxAMapAPILoader";
        var /** @type {?} */ script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = this.getSrcFromConfig(callbackName);
        this._mapLoaded = new Promise(function (resolve, reject) {
            (/** @type {?} */ (_this._windowRef.getNativeWindow()))[callbackName] = function () {
                _this.logger.d(_this.TAG, 'loading AMap api COMPLETE');
                resolve();
            };
            script.onerror = function (error) { reject(error); };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._mapLoaded;
    };
    /**
     * @param {?} callbackName
     * @return {?}
     */
    MapAPILoaderService.prototype.getSrcFromConfig = /**
     * @param {?} callbackName
     * @return {?}
     */
    function (callbackName) {
        var /** @type {?} */ urlBase = this._config.urlPath || this._defaultUrl;
        var /** @type {?} */ queryParams = {
            v: this._config.apiVersion || this._defaultVersion,
            callback: callbackName,
            key: this._config.apiKey
        };
        var /** @type {?} */ params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var /** @type {?} */ i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return urlBase + "?" + params;
    };
    MapAPILoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MapAPILoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAP_API_CONFIG,] },] },
        { type: DocumentRef, },
        { type: WindowRef, },
        { type: LoggerService, },
    ]; };
    return MapAPILoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DebugLoggerService = /** @class */ (function () {
    function DebugLoggerService() {
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    DebugLoggerService.prototype.i = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(["[" + tag + "]"], args));
    };
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    DebugLoggerService.prototype.e = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.error.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(["[" + tag + "]"], args));
    };
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    DebugLoggerService.prototype.w = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(["[" + tag + "]"], args));
    };
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    DebugLoggerService.prototype.d = /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(["[" + tag + "]"], args));
    };
    DebugLoggerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DebugLoggerService.ctorParameters = function () { return []; };
    return DebugLoggerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EventBinder = /** @class */ (function () {
    function EventBinder() {
    }
    /**
     * @template T
     * @param {?} target
     * @param {?} event
     * @return {?}
     */
    EventBinder.prototype.bindEvent = /**
     * @template T
     * @param {?} target
     * @param {?} event
     * @return {?}
     */
    function (target, event) {
        var _this = this;
        if (target instanceof Promise) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                var /** @type {?} */ listenerPromise = target.then(function (m) {
                    return AMap.event.addListener(m, event, function (e) {
                        setTimeout(function () { return observer.next(e); });
                    }, _this);
                });
                return function () {
                    listenerPromise.then(function (listener) {
                        AMap.event.removeListener(listener);
                        listenerPromise = null;
                    });
                };
            });
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                var /** @type {?} */ listener = AMap.event.addListener(target, event, function (e) {
                    setTimeout(function () { return observer.next(e); });
                }, _this);
                return function () {
                    AMap.event.removeListener(listener);
                    listener = null;
                };
            });
        }
    };
    return EventBinder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MapAPIService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MapAPIService, _super);
    function MapAPIService(loader, logger) {
        var _this = _super.call(this) || this;
        _this.loader = loader;
        _this.logger = logger;
        _this.TAG = 'map-api';
        _this._mapPromise = new Promise(function (resolve) { return _this._mapResolver = resolve; });
        return _this;
    }
    /**
     * @param {?} el
     * @param {?} options
     * @return {?}
     */
    MapAPIService.prototype.createMap = /**
     * @param {?} el
     * @param {?} options
     * @return {?}
     */
    function (el, options) {
        var _this = this;
        return this.loader.load().then(function () {
            _this._map = new AMap.Map(el, options);
            _this._mapResolver(_this._map);
            _this.logger.d(_this.TAG, 'new map created');
            return _this._map;
        });
    };
    /**
     * @return {?}
     */
    MapAPIService.prototype.destroyMap = /**
     * @return {?}
     */
    function () {
        this._mapPromise.then(function (map) {
            map.clearMap();
            map.destroy();
        });
    };
    Object.defineProperty(MapAPIService.prototype, "map", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mapPromise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    MapAPIService.prototype.bindMapEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._mapPromise, event);
    };
    MapAPIService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MapAPIService.ctorParameters = function () { return [
        { type: MapAPILoaderService, },
        { type: LoggerService, },
    ]; };
    return MapAPIService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PixelService = /** @class */ (function () {
    function PixelService(logger) {
        this.logger = logger;
        this.TAG = 'pixel-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    PixelService.prototype.create = /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    function (options, name) {
        if (this.verify(options, name)) {
            return new AMap.Pixel(options.x, options.y);
        }
        else {
            return undefined;
        }
    };
    /**
     * @param {?} pixel
     * @param {?=} name
     * @return {?}
     */
    PixelService.prototype.verify = /**
     * @param {?} pixel
     * @param {?=} name
     * @return {?}
     */
    function (pixel, name) {
        if (typeof pixel.x !== 'number' || typeof pixel.y !== 'number') {
            this.logger.e((name || 'pixel') + " should have type {x: number, y: number}");
            return false;
        }
        return true;
    };
    PixelService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PixelService.ctorParameters = function () { return [
        { type: LoggerService, },
    ]; };
    return PixelService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SizeService = /** @class */ (function () {
    function SizeService(logger) {
        this.logger = logger;
        this.TAG = 'size-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    SizeService.prototype.create = /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    function (options, name) {
        if (this.verify(options, name)) {
            return new AMap.Size(options.width, options.height);
        }
        else {
            return undefined;
        }
    };
    /**
     * @param {?} size
     * @param {?=} name
     * @return {?}
     */
    SizeService.prototype.verify = /**
     * @param {?} size
     * @param {?=} name
     * @return {?}
     */
    function (size, name) {
        if (typeof size.width !== 'number' || typeof size.height !== 'number') {
            this.logger.e((name || 'size') + " should have type {width: number, height: number}");
            return false;
        }
        return true;
    };
    SizeService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    SizeService.ctorParameters = function () { return [
        { type: LoggerService, },
    ]; };
    return SizeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IconService = /** @class */ (function () {
    function IconService(logger, pixel, size) {
        this.logger = logger;
        this.pixel = pixel;
        this.size = size;
        this.TAG = 'icon-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    IconService.prototype.create = /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    function (options, name) {
        if (typeof options === 'string') {
            return options;
        }
        if (!options) {
            return undefined;
        }
        if (!(/** @type {?} */ (options)).size) {
            return /** @type {?} */ (options);
        }
        var /** @type {?} */ iconOption = /** @type {?} */ (options);
        if (iconOption.size) {
            iconOption.size = this.size.create(iconOption.size, (name || 'icon') + ".size");
        }
        if (iconOption.imageSize) {
            iconOption.imageSize = this.size.create(iconOption.size, (name || 'icon') + ".imageSize");
        }
        if (iconOption.imageOffset) {
            iconOption.imageOffset = this.pixel.create(iconOption.imageOffset, (name || 'icon') + ".imageOffset");
        }
        if (!iconOption.size) {
            delete iconOption.size;
        }
        if (!iconOption.imageSize) {
            delete iconOption.imageSize;
        }
        if (!iconOption.imageOffset) {
            delete iconOption.imageOffset;
        }
        return new AMap.Icon(iconOption);
    };
    IconService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    IconService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PixelService, },
        { type: SizeService, },
    ]; };
    return IconService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LabelService = /** @class */ (function () {
    function LabelService(logger, pixel) {
        this.logger = logger;
        this.pixel = pixel;
        this.TAG = 'label-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    LabelService.prototype.create = /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    function (options, name) {
        if (options) {
            return {
                content: options.content,
                offset: this.pixel.create(options.offset, (name || 'label') + ".offset")
            };
        }
        else {
            return undefined;
        }
    };
    LabelService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LabelService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PixelService, },
    ]; };
    return LabelService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MarkerService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MarkerService, _super);
    function MarkerService(map, logger, pixel, icon, label) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.logger = logger;
        _this.pixel = pixel;
        _this.icon = icon;
        _this.label = label;
        _this.TAG = 'marker-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @param {?=} addToMap
     * @return {?}
     */
    MarkerService.prototype.create = /**
     * @param {?} options
     * @param {?=} addToMap
     * @return {?}
     */
    function (options, addToMap) {
        var _this = this;
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (options.offset) {
                options.offset = _this.pixel.create(options.offset, 'offset');
            }
            if (options.icon) {
                options.icon = _this.icon.create(options.icon);
            }
            if (options.shadow) {
                options.shadow = /** @type {?} */ (_this.icon.create(options.shadow, 'shadow'));
            }
            if (options.label) {
                options.label = _this.label.create(options.label);
            }
            if (!options.offset) {
                delete options.offset;
            }
            if (!options.icon) {
                delete options.icon;
            }
            if (!options.shadow) {
                delete options.shadow;
            }
            if (!options.label) {
                delete options.label;
            }
            if (addToMap) {
                options.map = map;
            }
            return new AMap.Marker(options);
        });
    };
    /**
     * @param {?} marker
     * @return {?}
     */
    MarkerService.prototype.destroy = /**
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        return marker.then(function (m) {
            m.setMap(null);
        });
    };
    MarkerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: LoggerService, },
        { type: PixelService, },
        { type: IconService, },
        { type: LabelService, },
    ]; };
    return MarkerService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InfoWindowService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(InfoWindowService, _super);
    function InfoWindowService(map, logger, pixel, size) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.logger = logger;
        _this.pixel = pixel;
        _this.size = size;
        _this.TAG = 'info-window-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    InfoWindowService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        return this._map.then(function (map) {
            if (options.offset) {
                options.offset = _this.pixel.create(options.offset, 'offset');
            }
            if (options.size) {
                options.size = _this.size.create(options.size, 'size');
            }
            return new AMap.InfoWindow(options);
        });
    };
    /**
     * @param {?} infoWindow
     * @return {?}
     */
    InfoWindowService.prototype.destroy = /**
     * @param {?} infoWindow
     * @return {?}
     */
    function (infoWindow) {
        return infoWindow.then(function (w) {
            w.close();
        });
    };
    /**
     * @param {?} infoWindow
     * @param {?=} position
     * @return {?}
     */
    InfoWindowService.prototype.open = /**
     * @param {?} infoWindow
     * @param {?=} position
     * @return {?}
     */
    function (infoWindow, position) {
        return this._map.then(function (map) {
            infoWindow.open(map, position);
        });
    };
    InfoWindowService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: LoggerService, },
        { type: PixelService, },
        { type: SizeService, },
    ]; };
    return InfoWindowService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @template T
     * @param {?} component
     * @param {?} keys
     * @return {?}
     */
    Utils.getOptionsFor = /**
     * @template T
     * @param {?} component
     * @param {?} keys
     * @return {?}
     */
    function (component, keys) {
        var /** @type {?} */ options = {};
        keys.forEach(function (key) {
            if (component[key] !== undefined && component[key] !== null) {
                options[key] = component[key];
            }
        });
        return options;
    };
    return Utils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangeFilter = /** @class */ (function () {
    function ChangeFilter(_changes) {
        this._changes = _changes;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ChangeFilter.of = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return new ChangeFilter(changes);
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    ChangeFilter.prototype.notEmpty = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this._changes[key]) {
            var /** @type {?} */ value = this._changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    ChangeFilter.prototype.has = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this._changes[key]) {
            var /** @type {?} */ value = this._changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
    };
    return ChangeFilter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PluginLoaderService = /** @class */ (function () {
    function PluginLoaderService(loader, logger) {
        this.loader = loader;
        this.logger = logger;
        this.TAG = 'plugin-loader';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    PluginLoaderService.prototype.load = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        this.logger.d(this.TAG, 'loading plugin:', name);
        return this.loader.load().then(function () {
            return new Promise(function (resolve) {
                _this.logger.d(_this.TAG, 'loading plugin:', name, 'COMPLETE');
                AMap.plugin(name, function () { return resolve(); });
            });
        });
    };
    PluginLoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PluginLoaderService.ctorParameters = function () { return [
        { type: MapAPILoaderService, },
        { type: LoggerService, },
    ]; };
    return PluginLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PolylineService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(PolylineService, _super);
    function PolylineService(map, plugins, logger) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.plugins = plugins;
        _this.logger = logger;
        _this.TAG = 'polyline-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PolylineService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new AMap.Polyline(options);
        });
    };
    /**
     * @param {?} polyline
     * @return {?}
     */
    PolylineService.prototype.destroy = /**
     * @param {?} polyline
     * @return {?}
     */
    function (polyline) {
        return polyline.then(function (m) {
            m.setMap(null);
        });
    };
    /**
     * @return {?}
     */
    PolylineService.prototype.loadEditor = /**
     * @return {?}
     */
    function () {
        if (!this._editorPlugin) {
            this._editorPlugin = this.plugins.load('AMap.PolyEditor');
        }
        return this._editorPlugin;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    PolylineService.prototype.createEditor = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        return this._map.then(function (map) { return new AMap.PolyEditor(map, p); });
    };
    PolylineService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: PluginLoaderService, },
        { type: LoggerService, },
    ]; };
    return PolylineService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PolygonService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(PolygonService, _super);
    function PolygonService(map, plugins, logger) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.plugins = plugins;
        _this.logger = logger;
        _this.TAG = 'polygon-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PolygonService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new AMap.Polygon(options);
        });
    };
    /**
     * @param {?} polygon
     * @return {?}
     */
    PolygonService.prototype.destroy = /**
     * @param {?} polygon
     * @return {?}
     */
    function (polygon) {
        return polygon.then(function (m) {
            m.setMap(null);
        });
    };
    /**
     * @return {?}
     */
    PolygonService.prototype.loadEditor = /**
     * @return {?}
     */
    function () {
        if (!this._editorPlugin) {
            this._editorPlugin = this.plugins.load('AMap.PolyEditor');
        }
        return this._editorPlugin;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    PolygonService.prototype.createEditor = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        return this._map.then(function (map) { return new AMap.PolyEditor(map, p); });
    };
    PolygonService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: PluginLoaderService, },
        { type: LoggerService, },
    ]; };
    return PolygonService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToolBarService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ToolBarService, _super);
    function ToolBarService(map, logger, pixels, plugins) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.logger = logger;
        _this.pixels = pixels;
        _this.plugins = plugins;
        _this.TAG = 'tool-bar-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    ToolBarService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.ToolBar');
        }
        return this._plugin.then(function () { return _this._map; })
            .then(function (map) {
            if (options.offset) {
                options.offset = _this.pixels.create(options.offset, 'offset');
            }
            if (!options.offset) {
                delete options.offset;
            }
            var /** @type {?} */ toolbar = new AMap.ToolBar(options);
            map.addControl(toolbar);
            return toolbar;
        });
    };
    /**
     * @param {?} toolbar
     * @return {?}
     */
    ToolBarService.prototype.destroy = /**
     * @param {?} toolbar
     * @return {?}
     */
    function (toolbar) {
        return this._map.then(function (map) { return toolbar.then(function (t) { return map.removeControl(t); }); });
    };
    ToolBarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToolBarService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: LoggerService, },
        { type: PixelService, },
        { type: PluginLoaderService, },
    ]; };
    return ToolBarService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MarkerClustererService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MarkerClustererService, _super);
    function MarkerClustererService(map, logger, pixel, size, plugins) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.logger = logger;
        _this.pixel = pixel;
        _this.size = size;
        _this.plugins = plugins;
        _this.TAG = 'marker-clusterer-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    MarkerClustererService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.MarkerClusterer');
        }
        return this._plugin.then(function () { return _this._map; })
            .then(function (map) {
            if (options.styles) {
                options.styles = options.styles.map(function (style) { return _this.createStyle(style); });
            }
            return new AMap.MarkerClusterer(map, [], options);
        });
    };
    /**
     * @param {?} cluster
     * @return {?}
     */
    MarkerClustererService.prototype.destroy = /**
     * @param {?} cluster
     * @return {?}
     */
    function (cluster) {
        return cluster.then(function (c) {
            c.clearMarkers();
            c.setMap(null);
        });
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MarkerClustererService.prototype.createStyle = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        if (style.size) {
            style.size = this.size.create(style.size, 'size');
        }
        if (style.offset) {
            style.offset = this.pixel.create(style.offset, 'offset');
            if (!style.offset) {
                delete style.offset;
            }
        }
        if (style.imageOffset) {
            style.imageOffset = this.pixel.create(style.imageOffset, 'imageOffset');
            if (!style.imageOffset) {
                delete style.imageOffset;
            }
        }
        return /** @type {?} */ (style);
    };
    MarkerClustererService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerClustererService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: LoggerService, },
        { type: PixelService, },
        { type: SizeService, },
        { type: PluginLoaderService, },
    ]; };
    return MarkerClustererService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CircleService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CircleService, _super);
    function CircleService(map, plugins, logger) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.plugins = plugins;
        _this.logger = logger;
        _this.TAG = 'circle-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    CircleService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new AMap.Circle(options);
        });
    };
    /**
     * @param {?} circle
     * @return {?}
     */
    CircleService.prototype.destroy = /**
     * @param {?} circle
     * @return {?}
     */
    function (circle) {
        return circle.then(function (m) {
            m.setMap(null);
        });
    };
    /**
     * @return {?}
     */
    CircleService.prototype.loadEditor = /**
     * @return {?}
     */
    function () {
        if (!this._editorPlugin) {
            this._editorPlugin = this.plugins.load('AMap.CircleEditor');
        }
        return this._editorPlugin;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    CircleService.prototype.createEditor = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._map.then(function (map) { return new AMap.CircleEditor(map, c); });
    };
    CircleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: PluginLoaderService, },
        { type: LoggerService, },
    ]; };
    return CircleService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CircleMarkerService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CircleMarkerService, _super);
    function CircleMarkerService(map, logger) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.logger = logger;
        _this.TAG = 'circle-marker-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    CircleMarkerService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new AMap.CircleMarker(options);
        });
    };
    /**
     * @param {?} circle
     * @return {?}
     */
    CircleMarkerService.prototype.destroy = /**
     * @param {?} circle
     * @return {?}
     */
    function (circle) {
        return circle.then(function (m) {
            m.setMap(null);
        });
    };
    CircleMarkerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleMarkerService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: LoggerService, },
    ]; };
    return CircleMarkerService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(TextService, _super);
    function TextService(map, logger, pixel, icon) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.logger = logger;
        _this.pixel = pixel;
        _this.icon = icon;
        _this.TAG = 'text-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @param {?=} addToMap
     * @return {?}
     */
    TextService.prototype.create = /**
     * @param {?} options
     * @param {?=} addToMap
     * @return {?}
     */
    function (options, addToMap) {
        var _this = this;
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (options.offset) {
                options.offset = _this.pixel.create(options.offset, 'offset');
            }
            if (options.shadow) {
                options.shadow = /** @type {?} */ (_this.icon.create(options.shadow, 'shadow'));
            }
            if (!options.offset) {
                delete options.offset;
            }
            if (!options.shadow) {
                delete options.shadow;
            }
            if (addToMap) {
                options.map = map;
            }
            return new AMap.Text(options);
        });
    };
    /**
     * @param {?} text
     * @return {?}
     */
    TextService.prototype.destroy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return text.then(function (m) {
            m.setMap(null);
        });
    };
    TextService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    TextService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: LoggerService, },
        { type: PixelService, },
        { type: IconService, },
    ]; };
    return TextService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BezierCurveService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BezierCurveService, _super);
    function BezierCurveService(map, plugins, logger) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.plugins = plugins;
        _this.logger = logger;
        _this.TAG = 'bezier-curve-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    BezierCurveService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new AMap.BezierCurve(options);
        });
    };
    /**
     * @param {?} bezierCurve
     * @return {?}
     */
    BezierCurveService.prototype.destroy = /**
     * @param {?} bezierCurve
     * @return {?}
     */
    function (bezierCurve) {
        return bezierCurve.then(function (m) {
            m.setMap(null);
        });
    };
    /**
     * @return {?}
     */
    BezierCurveService.prototype.loadEditor = /**
     * @return {?}
     */
    function () {
        if (!this._editorPlugin) {
            this._editorPlugin = this.plugins.load('AMap.BezierCurveEditor');
        }
        return this._editorPlugin;
    };
    /**
     * @param {?} c
     * @param {?} opts
     * @return {?}
     */
    BezierCurveService.prototype.createEditor = /**
     * @param {?} c
     * @param {?} opts
     * @return {?}
     */
    function (c, opts) {
        return this._map.then(function (map) { return new AMap.BezierCurveEditor(map, c, opts); });
    };
    BezierCurveService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    BezierCurveService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: PluginLoaderService, },
        { type: LoggerService, },
    ]; };
    return BezierCurveService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EllipseService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(EllipseService, _super);
    function EllipseService(map, plugins, logger) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.plugins = plugins;
        _this.logger = logger;
        _this.TAG = 'ellipse-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    EllipseService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new AMap.Ellipse(options);
        });
    };
    /**
     * @param {?} ellipse
     * @return {?}
     */
    EllipseService.prototype.destroy = /**
     * @param {?} ellipse
     * @return {?}
     */
    function (ellipse) {
        return ellipse.then(function (m) {
            m.setMap(null);
        });
    };
    /**
     * @return {?}
     */
    EllipseService.prototype.loadEditor = /**
     * @return {?}
     */
    function () {
        if (!this._editorPlugin) {
            this._editorPlugin = this.plugins.load('AMap.EllipseEditor');
        }
        return this._editorPlugin;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    EllipseService.prototype.createEditor = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return this._map.then(function (map) { return new AMap.EllipseEditor(map, e); });
    };
    EllipseService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    EllipseService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: PluginLoaderService, },
        { type: LoggerService, },
    ]; };
    return EllipseService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RectangleService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(RectangleService, _super);
    function RectangleService(map, plugins, logger) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.plugins = plugins;
        _this.logger = logger;
        _this.TAG = 'rectangle-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    RectangleService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new AMap.Rectangle(options);
        });
    };
    /**
     * @param {?} rectangle
     * @return {?}
     */
    RectangleService.prototype.destroy = /**
     * @param {?} rectangle
     * @return {?}
     */
    function (rectangle) {
        return rectangle.then(function (m) {
            m.setMap(null);
        });
    };
    /**
     * @return {?}
     */
    RectangleService.prototype.loadEditor = /**
     * @return {?}
     */
    function () {
        if (!this._editorPlugin) {
            this._editorPlugin = this.plugins.load('AMap.RectangleEditor');
        }
        return this._editorPlugin;
    };
    /**
     * @param {?} r
     * @return {?}
     */
    RectangleService.prototype.createEditor = /**
     * @param {?} r
     * @return {?}
     */
    function (r) {
        return this._map.then(function (map) { return new AMap.RectangleEditor(map, r); });
    };
    RectangleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: PluginLoaderService, },
        { type: LoggerService, },
    ]; };
    return RectangleService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeatmapService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(HeatmapService, _super);
    function HeatmapService(map, logger, plugins) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.logger = logger;
        _this.plugins = plugins;
        _this.TAG = 'heatmap-service';
        _this._map = map.map;
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    HeatmapService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.Heatmap');
        }
        return this._plugin.then(function () { return _this._map; })
            .then(function (map) {
            var /** @type {?} */ heatmap = new AMap.Heatmap(map, options);
            return heatmap;
        });
    };
    /**
     * @param {?} heatmap
     * @return {?}
     */
    HeatmapService.prototype.destroy = /**
     * @param {?} heatmap
     * @return {?}
     */
    function (heatmap) {
        return heatmap.then(function (hm) { return hm.setMap(null); });
    };
    HeatmapService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    HeatmapService.ctorParameters = function () { return [
        { type: MapAPIService, },
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return HeatmapService;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS = [
    'view',
    'layers',
    'zoom',
    'center',
    'labelzIndex',
    'zooms',
    'lang',
    'cursor',
    'crs',
    'animateEnable',
    'isHotspot',
    'defaultLayer',
    'rotateEnable',
    'resizeEnable',
    'showIndoorMap',
    'indoorMap',
    'expandZoomRange',
    'dragEnable',
    'zoomEnable',
    'doubleClickZoom',
    'keyboardEnable',
    'jogEnable',
    'scrollWheel',
    'touchZoom',
    'mapStyle',
    'features',
    'showBuildingBlock',
    'viewMode',
    'pitch',
    'pitchEnable',
    'buildingAnimation',
    'skyColor',
    'gridMapForeign'
];
/**
 * \@example
 * <ngx-amap></ngx-amap>
 */
var NgxAmapComponent = /** @class */ (function () {
    function NgxAmapComponent(el, api, logger) {
        this.el = el;
        this.api = api;
        this.logger = logger;
        this.TAG = 'ngx-amap';
        // ngx-amap events:
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mapmove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.movestart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.zoomchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.zoomstart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.zoomend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseWheel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hotspotClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hotspotOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hotspotOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._inited = false;
    }
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logger.d(this.TAG, 'map api initializing...');
        var /** @type {?} */ container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
        var /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS);
        this.logger.d(this.TAG, 'map options:', options);
        this.api.createMap(container, options)
            .then(function (map) { return _this.ready.emit(map); })
            .then(function () { return _this.logger.d(_this.TAG, 'map is ready.'); })
            .catch(function () { return _this.logger.e(_this.TAG, 'failed to load AMap script.'); });
        this.bindEvents();
        this._inited = true;
    };
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.api.destroyMap();
        this.logger.d(this.TAG, 'map api destroyed.');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxAmapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (this._inited) {
            filter.has('zoom').subscribe(function (v) { return _this.setZoom(v); });
            filter.has('center').subscribe(function (v) { return _this.setCenter(v); });
        }
        // Not included in OPTIONS
        filter.has('city').subscribe(function (v) { return _this.setCity(v); });
    };
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.api.bindMapEvents('complete').subscribe(function (e) { return _this.complete.emit(e); });
        this._subscriptions.add(this.api.bindMapEvents('mapmove').subscribe(function (e) { return _this.mapmove.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('movestart').subscribe(function (e) { return _this.movestart.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('moveend').subscribe(function (e) { return _this.moveend.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('zoomchange').subscribe(function (e) { return _this.zoomchange.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('zoomstart').subscribe(function (e) { return _this.zoomstart.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('zoomend').subscribe(function (e) { return _this.zoomend.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('resize').subscribe(function (e) { return _this.resize.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('click').subscribe(function (e) { return _this.mapClick.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('mousemove').subscribe(function (e) { return _this.mouseMove.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('mousewheel').subscribe(function (e) { return _this.mouseWheel.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('hotspotclick').subscribe(function (e) { return _this.hotspotClick.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('hotspotover').subscribe(function (e) { return _this.hotspotOver.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('hotspotout').subscribe(function (e) { return _this.hotspotOut.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('dragstart').subscribe(function (e) { return _this.dragStart.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('dragging').subscribe(function (e) { return _this.dragging.emit(e); }));
        this._subscriptions.add(this.api.bindMapEvents('dragend').subscribe(function (e) { return _this.dragEnd.emit(e); }));
    };
    // Setters
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.setFitView = /**
     * @return {?}
     */
    function () {
        return this.api.map.then(function (map) { return map.setFitView(); });
    };
    /**
     * @param {?} level
     * @return {?}
     */
    NgxAmapComponent.prototype.setZoom = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        return this.api.map.then(function (map) { return map.setZoom(level); });
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NgxAmapComponent.prototype.setCenter = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        return this.api.map.then(function (map) { return map.setCenter(position); });
    };
    /**
     * @param {?} zoomLevel
     * @param {?} center
     * @return {?}
     */
    NgxAmapComponent.prototype.setZoomAndCenter = /**
     * @param {?} zoomLevel
     * @param {?} center
     * @return {?}
     */
    function (zoomLevel, center) {
        return this.api.map.then(function (map) { return map.setZoomAndCenter(zoomLevel, center); });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxAmapComponent.prototype.setlabelzIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.api.map.then(function (map) { return map.setlabelzIndex(index); });
    };
    /**
     * @param {?} city
     * @return {?}
     */
    NgxAmapComponent.prototype.setCity = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        return this.api.map.then(function (map) { return new Promise(function (resolve) { return map.setCity(city, resolve); }); });
    };
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.clearMap = /**
     * @return {?}
     */
    function () {
        return this.api.map.then(function (map) { return map.clearMap(); });
    };
    // Getters
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.getZoom = /**
     * @return {?}
     */
    function () {
        return this.api.map.then(function (map) { return map.getZoom(); });
    };
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.getCenter = /**
     * @return {?}
     */
    function () {
        return this.api.map.then(function (map) { return map.getCenter(); });
    };
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.getCity = /**
     * @return {?}
     */
    function () {
        return this.api.map.then(function (map) { return new Promise(function (resolve) { return map.getCity(resolve); }); });
    };
    /**
     * @return {?}
     */
    NgxAmapComponent.prototype.getSize = /**
     * @return {?}
     */
    function () {
        return this.api.map.then(function (map) { return map.getSize(); });
    };
    NgxAmapComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-amap',
                    exportAs: 'amap',
                    template: "<div class='ngx-amap-container-inner'></div>\n<div class='ngx-amap-content'>\n  <ng-content></ng-content>\n</div>",
                    styles: [".ngx-amap-container-inner{width:inherit;height:inherit}.ngx-amap-content{display:none}"],
                    providers: [
                        MapAPIService,
                        MarkerService,
                        InfoWindowService,
                        PolylineService,
                        ToolBarService,
                        MarkerClustererService,
                        CircleService,
                        CircleMarkerService,
                        PolygonService,
                        TextService,
                        BezierCurveService,
                        EllipseService,
                        RectangleService,
                        HeatmapService
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxAmapComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: MapAPIService, },
        { type: LoggerService, },
    ]; };
    NgxAmapComponent.propDecorators = {
        "view": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "layers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "center": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelzIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zooms": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lang": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "crs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "animateEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isHotspot": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "defaultLayer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resizeEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showIndoorMap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "indoorMap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "expandZoomRange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dragEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "doubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "jogEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollWheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "touchZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "features": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showBuildingBlock": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "viewMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pitch": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pitchEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "buildingAnimation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "skyColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gridMapForeign": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "city": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "complete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapmove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "movestart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "moveend": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomchange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomstart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomend": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "resize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseWheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hotspotClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hotspotOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hotspotOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragging": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgxAmapComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$1 = [
    'isCustom',
    'autoMove',
    'closeWhenClickMap',
    'content',
    'size',
    'offset',
    'position',
    'showShadow'
];
var AmapInfoWindowComponent = /** @class */ (function () {
    function AmapInfoWindowComponent(el, logger, infoWindows, sizes) {
        this.el = el;
        this.logger = logger;
        this.infoWindows = infoWindows;
        this.sizes = sizes;
        this.TAG = 'amap-info-window';
        // Extra property:
        this.isOpen = false;
        // amap-info-window events:
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.windowOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.windowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.windowChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.content = this.el.nativeElement.querySelector('.amap-info-window-content');
        var /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$1);
        this.logger.d(this.TAG, 'info window options:', options);
        this._infoWindow = this.infoWindows.create(options);
        this.bindEvents();
        this.toggleOpen();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this._infoWindow) {
            return;
        }
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        filter.has('content').subscribe(function (v) { return _this.setContent(v); });
        filter.has('isOpen').subscribe(function (v) { return _this.toggleOpen(); });
        filter.notEmpty('position').subscribe(function (v) { return _this.setPosition(v); });
        filter.notEmpty('size').subscribe(function (v) { return _this.setSize(v); });
    };
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.infoWindows.destroy(this._infoWindow);
    };
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.infoWindows.bindEvent(this._infoWindow, 'change').subscribe(function (e) { return _this.windowChange.emit(e); });
        this._subscriptions.add(this.infoWindows.bindEvent(this._infoWindow, 'open').subscribe(function (e) {
            _this.windowOpen.emit(e);
            if (!_this.isOpen) {
                _this.isOpenChange.emit(true);
            }
        }));
        this._subscriptions.add(this.infoWindows.bindEvent(this._infoWindow, 'close').subscribe(function (e) {
            _this.windowClose.emit(e);
            if (_this.isOpen) {
                _this.isOpenChange.emit(false);
            }
        }));
    };
    // public methods:
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        this.logger.d(this.TAG, 'toggle open');
        this.isOpen ? this.open() : this.close();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.open = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        return this._infoWindow.then(function (infoWindow) {
            if (_this.hostMarker) {
                return _this.hostMarker.then(function (marker) { return _this.infoWindows.open(infoWindow, marker.getPosition()); });
            }
            else if (position) {
                return _this.infoWindows.open(infoWindow, position);
            }
            else if (_this.position) {
                return _this.infoWindows.open(infoWindow, _this.position);
            }
            else {
                return _this.infoWindows.open(infoWindow);
            }
        });
    };
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        return this._infoWindow.then(function (infoWindow) { return infoWindow.close(); });
    };
    // Setters:
    /**
     * @param {?} content
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.setContent = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return this._infoWindow.then(function (infoWindow) { return infoWindow.setContent(content); });
    };
    /**
     * @param {?} position
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.setPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        return this._infoWindow.then(function (infoWindow) { return infoWindow.setPosition(position); });
    };
    /**
     * @param {?} size
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.setSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        var _this = this;
        return this._infoWindow.then(function (infoWindow) {
            var /** @type {?} */ value = _this.sizes.create(size, 'size');
            infoWindow.setSize(value);
        });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.getIsOpen = /**
     * @return {?}
     */
    function () {
        return this._infoWindow.then(function (infoWindow) { return infoWindow.getIsOpen(); });
    };
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.getContent = /**
     * @return {?}
     */
    function () {
        return this._infoWindow.then(function (infoWindow) { return infoWindow.getContent(); });
    };
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this._infoWindow.then(function (infoWindow) { return infoWindow.getPosition(); });
    };
    /**
     * @return {?}
     */
    AmapInfoWindowComponent.prototype.getSize = /**
     * @return {?}
     */
    function () {
        return this._infoWindow.then(function (infoWindow) { return infoWindow.getSize(); });
    };
    AmapInfoWindowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'amap-info-window',
                    template: "<div class='amap-info-window-inner'></div>\n<div class='amap-info-window-content'>\n  <ng-content></ng-content>\n</div>",
                    styles: [""],
                    exportAs: 'info-window'
                },] },
    ];
    /** @nocollapse */
    AmapInfoWindowComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: LoggerService, },
        { type: InfoWindowService, },
        { type: SizeService, },
    ]; };
    AmapInfoWindowComponent.propDecorators = {
        "isCustom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "closeWhenClickMap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showShadow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpenChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "windowOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "windowClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "windowChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapInfoWindowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$2 = [
    'position',
    'offset',
    'icon',
    'content',
    'topWhenClick',
    'bubble',
    'draggable',
    'raiseOnDrag',
    'cursor',
    'visible',
    'zIndex',
    'angle',
    'autoRotation',
    'shadow',
    'title',
    'clickable',
    'shape',
    'extData',
    'label'
];
var AmapMarkerDirective = /** @class */ (function () {
    function AmapMarkerDirective(logger, markers, pixel, icons, labels) {
        this.logger = logger;
        this.markers = markers;
        this.pixel = pixel;
        this.icons = icons;
        this.labels = labels;
        this.TAG = 'amap-marker';
        this.hidden = false;
        this.openInfoWindow = true;
        this.inCluster = false;
        // amap-marker events:
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moving = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.movealong = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // amap-info-window:
        this.infoWindowComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapMarkerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._marker) {
            // do not draw marker when no poistion defined.
            if (!this.position) {
                return;
            }
            var /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$2);
            this._marker = this.markers.create(options, !this.inCluster);
            this.bindEvents();
            this._marker.then(function (marker) { return _this.ready.emit(marker); });
            this.updateInfoWindow();
            this.updateInfoWindowPosition();
        }
        else {
            filter.has('icon').subscribe(function (v) { return _this.setIcon(v); });
            filter.has('shadow').subscribe(function (v) { return _this.setShadow(v); });
            filter.has('label').subscribe(function (v) { return _this.setLabel(v); });
            filter.has('title').subscribe(function (v) { return _this.setTitle(v); });
            filter.has('content').subscribe(function (v) { return _this.setContent(v); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
            filter.has('clickable').subscribe(function (v) { return _this.setClickable(!!v); });
            filter.has('draggable').subscribe(function (v) { return _this.setDraggable(!!v); });
            filter.has('visible').subscribe(function (v) { return v ? _this.show() : _this.hide(); });
            filter.has('cursor').subscribe(function (v) { return _this.setCursor(v); });
            filter.has('animation').subscribe(function (v) { return _this.setAnimation(v); });
            filter.has('angle').subscribe(function (v) { return _this.setAngle(v); });
            filter.has('zIndex').subscribe(function (v) { return _this.setzIndex(v); });
            filter.has('shape').subscribe(function (v) { return _this.setShape(v); });
            filter.notEmpty('offset').subscribe(function (v) { return _this.setOffset(v); });
            filter.notEmpty('position').subscribe(function (v) { return _this.setPosition(v); });
        }
        filter.has('isTop').subscribe(function (v) { return _this.setTop(!!v); });
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._marker) {
            this._subscriptions.unsubscribe();
            this.markers.destroy(this._marker);
        }
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateInfoWindow();
        this.infoWindowComponent.changes.subscribe(function () { return _this.updateInfoWindow(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.updateInfoWindow = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.infoWindowComponent && this._marker) {
            if (this.infoWindowComponent.length > 1) {
                this.logger.e(this.TAG, 'Expected no more than 1 info window.');
                return;
            }
            this.infoWindowComponent.forEach(function (component) {
                component.hostMarker = _this._marker;
            });
        }
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.updateInfoWindowPosition = /**
     * @return {?}
     */
    function () {
        if (this.infoWindowComponent && this._marker) {
            this.infoWindowComponent.forEach(function (component) {
                component.toggleOpen();
            });
        }
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindMarkerEvent('click').subscribe(function (e) {
            if (_this.openInfoWindow) {
                _this.infoWindowComponent.forEach(function (component) {
                    component.open();
                });
            }
            _this.markerClick.emit(e);
        });
        this._subscriptions.add(this.bindMarkerEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('mousemove').subscribe(function (e) { return _this.mouseMove.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('dragstart').subscribe(function (e) { return _this.dragStart.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('dragging').subscribe(function (e) { return _this.dragging.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('dragend').subscribe(function (e) { return _this.dragEnd.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('moving').subscribe(function (e) { return _this.moving.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('moveend').subscribe(function (e) { return _this.moveend.emit(e); }));
        this._subscriptions.add(this.bindMarkerEvent('movealong').subscribe(function (e) { return _this.movealong.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapMarkerDirective.prototype.bindMarkerEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.markers.bindEvent(this._marker, event);
    };
    Object.defineProperty(AmapMarkerDirective.prototype, "marker", {
        get: /**
         * @return {?}
         */
        function () {
            return this._marker;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (m) { return m.show(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (m) { return m.hide(); });
    };
    // Animations
    /**
     * @param {?} position
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    AmapMarkerDirective.prototype.moveTo = /**
     * @param {?} position
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    function (position, speed, f) {
        return this._marker.then(function (marker) { return marker.moveTo(position, speed, f); });
    };
    /**
     * @param {?} path
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    AmapMarkerDirective.prototype.moveAlong = /**
     * @param {?} path
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    function (path, speed, f) {
        return this._marker.then(function (marker) { return marker.moveAlong(path, speed, f); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.stopMove = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.stopMove(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.pauseMove = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.pauseMove(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.resumeMove = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.resumeMove(); });
    };
    // Setters
    /**
     * @param {?} offset
     * @return {?}
     */
    AmapMarkerDirective.prototype.setOffset = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var _this = this;
        return this._marker.then(function (marker) {
            var /** @type {?} */ value = _this.pixel.create(offset, 'offset');
            if (value) {
                marker.setOffset(value);
            }
        });
    };
    /**
     * @param {?} icon
     * @return {?}
     */
    AmapMarkerDirective.prototype.setIcon = /**
     * @param {?} icon
     * @return {?}
     */
    function (icon) {
        var _this = this;
        return this._marker.then(function (marker) {
            var /** @type {?} */ value = _this.icons.create(icon, 'icon');
            marker.setIcon(value);
        });
    };
    /**
     * @param {?} shadow
     * @return {?}
     */
    AmapMarkerDirective.prototype.setShadow = /**
     * @param {?} shadow
     * @return {?}
     */
    function (shadow) {
        var _this = this;
        return this._marker.then(function (marker) {
            var /** @type {?} */ value = /** @type {?} */ (_this.icons.create(shadow, 'shadow'));
            marker.setShadow(value);
        });
    };
    /**
     * @param {?} label
     * @return {?}
     */
    AmapMarkerDirective.prototype.setLabel = /**
     * @param {?} label
     * @return {?}
     */
    function (label) {
        var _this = this;
        return this._marker.then(function (marker) {
            var /** @type {?} */ value = _this.labels.create(label, 'label');
            marker.setLabel(value);
        });
    };
    /**
     * @param {?} draggable
     * @return {?}
     */
    AmapMarkerDirective.prototype.setDraggable = /**
     * @param {?} draggable
     * @return {?}
     */
    function (draggable) {
        return this._marker.then(function (marker) { return marker.setDraggable(draggable); });
    };
    /**
     * @param {?} clickable
     * @return {?}
     */
    AmapMarkerDirective.prototype.setClickable = /**
     * @param {?} clickable
     * @return {?}
     */
    function (clickable) {
        return this._marker.then(function (marker) { return marker.setClickable(clickable); });
    };
    /**
     * @param {?} position
     * @return {?}
     */
    AmapMarkerDirective.prototype.setPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        return this._marker.then(function (marker) {
            marker.setPosition(position);
            _this.updateInfoWindowPosition();
        });
    };
    /**
     * @param {?} angle
     * @return {?}
     */
    AmapMarkerDirective.prototype.setAngle = /**
     * @param {?} angle
     * @return {?}
     */
    function (angle) {
        return this._marker.then(function (marker) { return marker.setAngle(angle); });
    };
    /**
     * @param {?} zIndex
     * @return {?}
     */
    AmapMarkerDirective.prototype.setzIndex = /**
     * @param {?} zIndex
     * @return {?}
     */
    function (zIndex) {
        return this._marker.then(function (marker) { return marker.setzIndex(zIndex); });
    };
    /**
     * @param {?} content
     * @return {?}
     */
    AmapMarkerDirective.prototype.setContent = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return this._marker.then(function (marker) { return marker.setContent(content); });
    };
    /**
     * @param {?} title
     * @return {?}
     */
    AmapMarkerDirective.prototype.setTitle = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        return this._marker.then(function (marker) { return marker.setTitle(title); });
    };
    /**
     * @param {?} cursor
     * @return {?}
     */
    AmapMarkerDirective.prototype.setCursor = /**
     * @param {?} cursor
     * @return {?}
     */
    function (cursor) {
        return this._marker.then(function (marker) { return marker.setCursor(cursor); });
    };
    /**
     * @param {?} isTop
     * @return {?}
     */
    AmapMarkerDirective.prototype.setTop = /**
     * @param {?} isTop
     * @return {?}
     */
    function (isTop) {
        return this._marker.then(function (marker) { return marker.setTop(isTop); });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AmapMarkerDirective.prototype.setExtData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this._marker.then(function (marker) { return marker.setExtData(data); });
    };
    /**
     * @param {?} shape
     * @return {?}
     */
    AmapMarkerDirective.prototype.setShape = /**
     * @param {?} shape
     * @return {?}
     */
    function (shape) {
        return this._marker.then(function (marker) { return marker.setShape(shape); });
    };
    /**
     * @param {?} animation
     * @return {?}
     */
    AmapMarkerDirective.prototype.setAnimation = /**
     * @param {?} animation
     * @return {?}
     */
    function (animation) {
        return this._marker.then(function (marker) { return marker.setAnimation(animation); });
    };
    // Getters
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getOffset = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getOffset(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getPosition(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getLabel = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getLabel(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getAngle = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getAngle(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getzIndex = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getzIndex(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getIcon = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getIcon(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getContent = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getContent(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getTitle(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getTop = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getTop(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getShadow = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getShadow(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getShape = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getShape(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getExtData(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getMap = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getMap(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getAnimation = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getAnimation(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getClickable = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getClickable(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerDirective.prototype.getDraggable = /**
     * @return {?}
     */
    function () {
        return this._marker.then(function (marker) { return marker.getDraggable(); });
    };
    AmapMarkerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-marker',
                    exportAs: 'marker'
                },] },
    ];
    /** @nocollapse */
    AmapMarkerDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: MarkerService, },
        { type: PixelService, },
        { type: IconService, },
        { type: LabelService, },
    ]; };
    AmapMarkerDirective.propDecorators = {
        "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "icon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "topWhenClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "raiseOnDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "angle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoRotation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shadow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shape": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isTop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openInfoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inCluster": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "markerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragging": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "moving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "moveend": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "movealong": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "infoWindowComponent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [AmapInfoWindowComponent,] },],
    };
    return AmapMarkerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$3 = [
    'zIndex',
    'bubble',
    'geodesic',
    'isOutline',
    'borderWeight',
    'outlineColor',
    'path',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'strokeStyle',
    'strokeDasharray',
    'lineJoin',
    'extData',
    'showDir'
];
var AmapPolylineDirective = /** @class */ (function () {
    function AmapPolylineDirective(logger, polylines) {
        this.logger = logger;
        this.polylines = polylines;
        this.TAG = 'amap-polyline';
        // Extra property:
        this.hidden = false;
        this.editor = false;
        // amap-polyline events:
        this.polylineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.polylineHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.polylineShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // editor events:
        this.editorAddnode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorRemovenode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorAdjust = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapPolylineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._polyline) {
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$3);
            this._polyline = this.polylines.create(options);
            this.bindEvents();
            this._polyline.then(function (p) { return _this.ready.emit(p); });
        }
        else {
            filter.has('path').subscribe(function (v) { return _this.setPath(v); });
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
        }
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
        filter.has('editor').subscribe(function (v) { return _this.toggleEditor(v); });
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.polylines.destroy(this._polyline);
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindPolylineEvent('click').subscribe(function (e) { return _this.polylineClick.emit(e); });
        this._subscriptions.add(this.bindPolylineEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('hide').subscribe(function (e) { return _this.polylineHide.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('show').subscribe(function (e) { return _this.polylineShow.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('change').subscribe(function (e) { return _this.change.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindPolylineEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapPolylineDirective.prototype.bindPolylineEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.polylines.bindEvent(this._polyline, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapPolylineDirective.prototype.bindEditorEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.polylines.bindEvent(this._editor, event);
    };
    // Public methods:
    /**
     * @param {?} v
     * @return {?}
     */
    AmapPolylineDirective.prototype.toggleEditor = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v && !this._editor) {
            return this.polylines.loadEditor()
                .then(function () { return _this._polyline; })
                .then(function (c) { return _this.polylines.createEditor(c); })
                .then(function (editor) {
                _this._editor = editor;
                // Bind events:
                // Bind events:
                _this._subscriptions.add(_this.bindEditorEvents('addnode').subscribe(function (e) { return _this.editorAddnode.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('adjust').subscribe(function (e) { return _this.editorAdjust.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('removenode').subscribe(function (e) { return _this.editorRemovenode.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('end').subscribe(function (e) { return _this.editorEnd.emit(e); }));
                editor.open();
            });
        }
        if (this._editor) {
            if (v) {
                this._editor.open();
            }
            else {
                this._editor.close();
            }
        }
        return Promise.resolve();
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._polyline.then(function (p) { return p.show(); });
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._polyline.then(function (p) { return p.hide(); });
    };
    // Setters:
    /**
     * @param {?} path
     * @return {?}
     */
    AmapPolylineDirective.prototype.setPath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._polyline.then(function (p) { return p.setPath(path); });
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapPolylineDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._polyline.then(function (p) { return p.setOptions(opt); });
    };
    /**
     * @param {?} ext
     * @return {?}
     */
    AmapPolylineDirective.prototype.setExtData = /**
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        return this._polyline.then(function (p) { return p.setExtData(ext); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return this._polyline.then(function (p) { return p.getPath(); });
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this._polyline.then(function (p) { return p.getOptions(); });
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.getLength = /**
     * @return {?}
     */
    function () {
        return this._polyline.then(function (p) { return p.getLength(); });
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.getBounds = /**
     * @return {?}
     */
    function () {
        return this._polyline.then(function (p) { return p.getBounds(); });
    };
    /**
     * @return {?}
     */
    AmapPolylineDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._polyline.then(function (p) { return p.getExtData(); });
    };
    AmapPolylineDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-polyline',
                    exportAs: 'polyline'
                },] },
    ];
    /** @nocollapse */
    AmapPolylineDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PolylineService, },
    ]; };
    AmapPolylineDirective.propDecorators = {
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOutline": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "borderWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outlineColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "path": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeDasharray": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lineJoin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showDir": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "polylineClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polylineHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polylineShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAddnode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorRemovenode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAdjust": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapPolylineDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$4 = [
    'zIndex',
    'path',
    'bubble',
    'cursor',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'fillColor',
    'fillOpacity',
    'strokeStyle',
    'strokeDasharray',
    'extData',
    'draggable'
];
var AmapPolygonDirective = /** @class */ (function () {
    function AmapPolygonDirective(logger, polygons) {
        this.logger = logger;
        this.polygons = polygons;
        this.TAG = 'amap-polygon';
        // Extra property:
        this.hidden = false;
        this.editor = false;
        // amap-polygon events:
        this.polygonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.polygonHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.polygonShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // editor events:
        this.editorAddnode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorRemovenode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorAdjust = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapPolygonDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._polygon) {
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$4);
            this._polygon = this.polygons.create(options);
            this.bindEvents();
            this._polygon.then(function (p) { return _this.ready.emit(p); });
        }
        else {
            filter.has('path').subscribe(function (v) { return _this.setPath(v); });
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
        }
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
        filter.has('editor').subscribe(function (v) { return _this.toggleEditor(v); });
    };
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.polygons.destroy(this._polygon);
    };
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindPolygonEvent('click').subscribe(function (e) { return _this.polygonClick.emit(e); });
        this._subscriptions.add(this.bindPolygonEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('hide').subscribe(function (e) { return _this.polygonHide.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('show').subscribe(function (e) { return _this.polygonShow.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('change').subscribe(function (e) { return _this.change.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindPolygonEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapPolygonDirective.prototype.bindPolygonEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.polygons.bindEvent(this._polygon, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapPolygonDirective.prototype.bindEditorEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.polygons.bindEvent(this._editor, event);
    };
    // Public methods:
    /**
     * @param {?} v
     * @return {?}
     */
    AmapPolygonDirective.prototype.toggleEditor = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v && !this._editor) {
            return this.polygons.loadEditor()
                .then(function () { return _this._polygon; })
                .then(function (c) { return _this.polygons.createEditor(c); })
                .then(function (editor) {
                _this._editor = editor;
                // Bind events:
                // Bind events:
                _this._subscriptions.add(_this.bindEditorEvents('addnode').subscribe(function (e) { return _this.editorAddnode.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('adjust').subscribe(function (e) { return _this.editorAdjust.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('removenode').subscribe(function (e) { return _this.editorRemovenode.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('end').subscribe(function (e) { return _this.editorEnd.emit(e); }));
                editor.open();
            });
        }
        if (this._editor) {
            if (v) {
                this._editor.open();
            }
            else {
                this._editor.close();
            }
        }
        return Promise.resolve();
    };
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._polygon.then(function (p) { return p.show(); });
    };
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._polygon.then(function (p) { return p.hide(); });
    };
    /**
     * @param {?} point
     * @return {?}
     */
    AmapPolygonDirective.prototype.contains = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this._polygon.then(function (p) { return p.contains(point); });
    };
    // Setters:
    /**
     * @param {?} path
     * @return {?}
     */
    AmapPolygonDirective.prototype.setPath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._polygon.then(function (p) { return p.setPath(path); });
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapPolygonDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._polygon.then(function (p) { return p.setOptions(opt); });
    };
    /**
     * @param {?} ext
     * @return {?}
     */
    AmapPolygonDirective.prototype.setExtData = /**
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        return this._polygon.then(function (p) { return p.setExtData(ext); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return this._polygon.then(function (p) { return p.getPath(); });
    };
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this._polygon.then(function (p) { return p.getOptions(); });
    };
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.getBounds = /**
     * @return {?}
     */
    function () {
        return this._polygon.then(function (p) { return p.getBounds(); });
    };
    /**
     * @return {?}
     */
    AmapPolygonDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._polygon.then(function (p) { return p.getExtData(); });
    };
    AmapPolygonDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-polygon',
                    exportAs: 'polygon'
                },] },
    ];
    /** @nocollapse */
    AmapPolygonDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PolygonService, },
    ]; };
    AmapPolygonDirective.propDecorators = {
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "path": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeDasharray": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "polygonClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polygonHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polygonShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAddnode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorRemovenode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAdjust": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapPolygonDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$5 = [
    'offset',
    'position',
    'ruler',
    'noIpLocate',
    'locate',
    'liteStyle',
    'direction',
    'autoPosition',
    'locationMarker',
    'useNative'
];
var AmapToolBarDirective = /** @class */ (function () {
    function AmapToolBarDirective(logger, toolbars, pixel) {
        this.logger = logger;
        this.toolbars = toolbars;
        this.pixel = pixel;
        this.TAG = 'amap-tool-bar';
        // Extra property:
        this.hidden = false;
        // amap-tool-bar events:
        this.zoomchanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.location = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toolbarHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toolbarShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$5);
        this._toolbar = this.toolbars.create(options);
        this.bindEvents();
        this._toolbar.then(function (t) { return _this.ready.emit(t); });
        this.hidden ? this.hide() : this.show();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapToolBarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this._toolbar) {
            return;
        }
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        filter.has('ruler').subscribe(function (v) { return v ? _this.showRuler() : _this.hideRuler(); });
        filter.has('direction').subscribe(function (v) { return v ? _this.showDirection() : _this.hideDirection(); });
        filter.has('locate').subscribe(function (v) { return v ? _this.showLocation() : _this.hideLocation(); });
        filter.notEmpty('offset').subscribe(function (v) { return _this.setOffset(v); });
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.toolbars.destroy(this._toolbar);
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindToolBarEvent('zoomchanged').subscribe(function (e) { return _this.zoomchanged.emit(e); });
        this._subscriptions.add(this.bindToolBarEvent('location').subscribe(function (e) { return _this.location.emit(e); }));
        this._subscriptions.add(this.bindToolBarEvent('show').subscribe(function (e) { return _this.toolbarShow.emit(e); }));
        this._subscriptions.add(this.bindToolBarEvent('hide').subscribe(function (e) { return _this.toolbarHide.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapToolBarDirective.prototype.bindToolBarEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.toolbars.bindEvent(this._toolbar, event);
    };
    // Public methods:
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.show(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.hide(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.showRuler = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.showRuler(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.hideRuler = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.hideRuler(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.showDirection = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.showDirection(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.hideDirection = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.hideDirection(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.showLocation = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.showLocation(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.hideLocation = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.hideLocation(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.doLocation = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.doLocation(); });
    };
    // Setters:
    /**
     * @param {?} offset
     * @return {?}
     */
    AmapToolBarDirective.prototype.setOffset = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var _this = this;
        return this._toolbar.then(function (t) {
            var /** @type {?} */ value = _this.pixel.create(offset, 'offset');
            if (value) {
                t.setOffset(value);
            }
        });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.getOffset = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.getOffset(); });
    };
    /**
     * @return {?}
     */
    AmapToolBarDirective.prototype.getLocation = /**
     * @return {?}
     */
    function () {
        return this._toolbar.then(function (t) { return t.getLocation(); });
    };
    AmapToolBarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-tool-bar',
                    exportAs: 'toolbar'
                },] },
    ];
    /** @nocollapse */
    AmapToolBarDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: ToolBarService, },
        { type: PixelService, },
    ]; };
    AmapToolBarDirective.propDecorators = {
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ruler": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "noIpLocate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "locate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "liteStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "direction": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "locationMarker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "useNative": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomchanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "location": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "toolbarHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "toolbarShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapToolBarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$6 = [
    'gridSize',
    'minClusterSize',
    'maxZoom',
    'averageCenter',
    'styles',
    'renderCluserMarker',
    'zoomOnClick'
];
/**
 * 用于地图上加载大量点标记，提高地图的绘制和显示性能。
 *
 * \@example
 * <ngx-amap class="demo-map-lg" [resizeEnable]="true">
 *   <amap-marker-clusterer [gridSize]="80">
 *     <amap-marker *ngFor="let marker of markers" [position]="marker"></amap-marker>
 *   </amap-marker-clusterer>
 * </ngx-amap>
 */
var AmapMarkerClustererDirective = /** @class */ (function () {
    function AmapMarkerClustererDirective(logger, clusters) {
        this.logger = logger;
        this.clusters = clusters;
        this.TAG = 'amap-marker-clusterer';
        /**
         * 点聚合渲染完成后触发
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * 点击事件
         */
        this.clusterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // amap-marker directives:
        this.markerList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this._cluster) {
            return;
        }
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        filter.notEmpty('gridSize').subscribe(function (v) { return _this.setGridSize(v); });
        filter.notEmpty('minClusterSize').subscribe(function (v) { return _this.setMinClusterSize(v); });
        filter.has('maxZoom').subscribe(function (v) { return _this.setMaxZoom(v); });
        filter.has('averageCenter').subscribe(function (v) { return _this.setAverageCenter(v); });
        filter.has('styles').subscribe(function (v) { return _this.setStyles(v); });
    };
    /**
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$6);
        this._cluster = this.clusters.create(options);
        this.bindEvents();
    };
    /**
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.clusters.destroy(this._cluster);
    };
    /**
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateMarkers()
            .then(function () { return _this._cluster; })
            .then(function (c) { return _this.ready.emit(c); });
        this.markerList.changes.subscribe(function () { return _this.updateMarkers(); });
    };
    /**
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.updateMarkers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ markerPromiseList = this.markerList.map(function (d) { return d.marker; });
        this._markers = Promise.all(markerPromiseList);
        return this._markers.then(function (list) { return _this.setMarkers(list); });
    };
    /**
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.clusters.bindEvent(this._cluster, 'click').subscribe(function (e) { return _this.clusterClick.emit(e); });
    };
    /**
     * 添加一个需进行聚合的点标记
     * @param marker
     * @returns
     */
    /**
     * 添加一个需进行聚合的点标记
     * @param {?} marker
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.addMarker = /**
     * 添加一个需进行聚合的点标记
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        return this._cluster.then(function (cluster) { return cluster.addMarker(marker); });
    };
    /**
     * 删除一个聚合的点标记
     * @param marker
     * @returns
     */
    /**
     * 删除一个聚合的点标记
     * @param {?} marker
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.removeMarker = /**
     * 删除一个聚合的点标记
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        return this._cluster.then(function (cluster) { return cluster.removeMarker(marker); });
    };
    /**
     * 获取聚合点的总数量
     * @returns
     */
    /**
     * 获取聚合点的总数量
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.getClustersCount = /**
     * 获取聚合点的总数量
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.getClustersCount(); });
    };
    /**
     * 获取聚合网格的像素大小
     * @returns
     */
    /**
     * 获取聚合网格的像素大小
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.getGridSize = /**
     * 获取聚合网格的像素大小
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.getGridSize(); });
    };
    /**
     * 获取地图中点标记的最大聚合级别
     * @returns
     */
    /**
     * 获取地图中点标记的最大聚合级别
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.getMaxZoom = /**
     * 获取地图中点标记的最大聚合级别
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.getMaxZoom(); });
    };
    /**
     * 获取单个聚合的最小数量
     * @returns
     */
    /**
     * 获取单个聚合的最小数量
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.getMinClusterSize = /**
     * 获取单个聚合的最小数量
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.getMinClusterSize(); });
    };
    /**
     * 获取聚合的样式风格集合
     * @returns
     */
    /**
     * 获取聚合的样式风格集合
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.getStyles = /**
     * 获取聚合的样式风格集合
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.getStyles(); });
    };
    /**
     * 设置聚合网格的像素大小
     * @param size
     * @returns
     */
    /**
     * 设置聚合网格的像素大小
     * @param {?} size
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.setGridSize = /**
     * 设置聚合网格的像素大小
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return this._cluster.then(function (cluster) { return cluster.setGridSize(size); });
    };
    /**
     * 设置地图中点标记的最大聚合级别
     * @param zoom
     * @returns
     */
    /**
     * 设置地图中点标记的最大聚合级别
     * @param {?} zoom
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.setMaxZoom = /**
     * 设置地图中点标记的最大聚合级别
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        return this._cluster.then(function (cluster) { return cluster.setMaxZoom(zoom); });
    };
    /**
     * 设置单个聚合的最小数量
     * @param size
     * @returns
     */
    /**
     * 设置单个聚合的最小数量
     * @param {?} size
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.setMinClusterSize = /**
     * 设置单个聚合的最小数量
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return this._cluster.then(function (cluster) { return cluster.setMinClusterSize(size); });
    };
    /**
     * 设置聚合的样式风格
     * @param styles
     * @returns
     */
    /**
     * 设置聚合的样式风格
     * @param {?} styles
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.setStyles = /**
     * 设置聚合的样式风格
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        return this._cluster.then(function (cluster) {
            var /** @type {?} */ s = styles.map(function (style) { return _this.clusters.createStyle(style); });
            return cluster.setStyles(s);
        });
    };
    /**
     * 从地图上彻底清除所有聚合点标记
     * @returns
     */
    /**
     * 从地图上彻底清除所有聚合点标记
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.clearMarkers = /**
     * 从地图上彻底清除所有聚合点标记
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.clearMarkers(); });
    };
    /**
     * 设置将进行点聚合的地图对象
     * @param map
     * @returns
     */
    /**
     * 设置将进行点聚合的地图对象
     * @param {?} map
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.setMap = /**
     * 设置将进行点聚合的地图对象
     * @param {?} map
     * @return {?}
     */
    function (map) {
        return this._cluster.then(function (cluster) { return cluster.setMap(map); });
    };
    /**
     * 设置将进行点聚合显示的点标记集合
     * @param markers
     * @returns
     */
    /**
     * 设置将进行点聚合显示的点标记集合
     * @param {?} markers
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.setMarkers = /**
     * 设置将进行点聚合显示的点标记集合
     * @param {?} markers
     * @return {?}
     */
    function (markers) {
        return this._cluster.then(function (cluster) { return cluster.setMarkers(markers); });
    };
    /**
     * 获取该点聚合的地图对象
     * @returns
     */
    /**
     * 获取该点聚合的地图对象
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.getMap = /**
     * 获取该点聚合的地图对象
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.getMap(); });
    };
    /**
     * 获取该点聚合中的点标记集合
     * @returns
     */
    /**
     * 获取该点聚合中的点标记集合
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.getMarkers = /**
     * 获取该点聚合中的点标记集合
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.getMarkers(); });
    };
    /**
     * 添加一组需进行聚合的点标记
     * @param markers
     * @returns
     */
    /**
     * 添加一组需进行聚合的点标记
     * @param {?} markers
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.addMarkers = /**
     * 添加一组需进行聚合的点标记
     * @param {?} markers
     * @return {?}
     */
    function (markers) {
        return this._cluster.then(function (cluster) { return cluster.addMarkers(markers); });
    };
    /**
     * 删除一组聚合的点标记
     * @param markers
     * @returns
     */
    /**
     * 删除一组聚合的点标记
     * @param {?} markers
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.removeMarkers = /**
     * 删除一组聚合的点标记
     * @param {?} markers
     * @return {?}
     */
    function (markers) {
        return this._cluster.then(function (cluster) { return cluster.removeMarkers(markers); });
    };
    /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     * @returns
     */
    /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.isAverageCenter = /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     * @return {?}
     */
    function () {
        return this._cluster.then(function (cluster) { return cluster.isAverageCenter(); });
    };
    /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心
     * @param averageCenter
     * @returns
     */
    /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心
     * @param {?} averageCenter
     * @return {?}
     */
    AmapMarkerClustererDirective.prototype.setAverageCenter = /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心
     * @param {?} averageCenter
     * @return {?}
     */
    function (averageCenter) {
        return this._cluster.then(function (cluster) { return cluster.setAverageCenter(averageCenter); });
    };
    AmapMarkerClustererDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-marker-clusterer',
                    exportAs: 'marker-clusterer'
                },] },
    ];
    /** @nocollapse */
    AmapMarkerClustererDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: MarkerClustererService, },
    ]; };
    AmapMarkerClustererDirective.propDecorators = {
        "gridSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minClusterSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "averageCenter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "renderCluserMarker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomOnClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "clusterClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "markerList": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [AmapMarkerDirective,] },],
    };
    return AmapMarkerClustererDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * AmapGeocoderWrapper对象将高德原生的Geocoder对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapGeocoderWrapper对象将高德原生的Geocoder对象提供的方法封装成Promise的实现，更方便回调
 */
AmapGeocoderWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapGeocoderWrapper, _super);
    function AmapGeocoderWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._geocoder = new AMap.Geocoder(opts);
        return _this;
    }
    Object.defineProperty(AmapGeocoderWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._geocoder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听Geocoder事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听Geocoder事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapGeocoderWrapper.prototype.on = /**
     * 用于侦听Geocoder事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._geocoder, event);
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AmapGeocoderWrapper.prototype.getLocation = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._geocoder.getLocation(address, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    /**
     * @param {?} city
     * @return {?}
     */
    AmapGeocoderWrapper.prototype.setCity = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        this._geocoder.setCity(city);
    };
    /**
     * @param {?} location
     * @return {?}
     */
    AmapGeocoderWrapper.prototype.getAddress = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._geocoder.getAddress(location, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    return AmapGeocoderWrapper;
}(EventBinder));
/**
 * 地理编码与逆地理编码服务，用于地址描述与坐标之间的转换。
 * 使用'of()'方法可以得到Promise<AmapGeocoderWrapper>对象。
 *
 * \@example
 * // 引入service和wrapper类型声明
 * import { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';
 *
 * // 定义wrapper的缓存：
 * private geoPromise: Promise<AmapGeocoderWrapper>;
 *
 * // 使用service构造wrapper对象
 * constructor(private AmapGeocoder: AmapGeocoderService) {
 *   // 使用 AmapGeocoderService 创建 promise wrapper
 *   this.geoPromise = AmapGeocoder.of({
 *     city: "010", //城市，默认：“全国”
 *     radius: 1000 //范围，默认：500
 *   });
 * }
 *
 * // 使用AMap.Geocoder的wrapper对象
 * this.geoPromise.then(geocoder => geocoder.getLocation(this.address))
 *   .then(data => {
 *     console.log('get location of address:', this.address);
 *     console.log('status:', data.status);
 *     console.log('result:', data.result);
 *
 *     if (data.status === 'complete' && data.result.info === 'OK') {
 *       console.log(data.result.geocodes[0].location);
 *       console.log(data.result.geocodes[0].formattedAddress);
 *     }
 *  });
 */
var AmapGeocoderService = /** @class */ (function () {
    function AmapGeocoderService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-geocoder';
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapGeocoderService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.Geocoder');
        }
        return this._plugin.then(function () { return new AmapGeocoderWrapper(opts); });
    };
    AmapGeocoderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapGeocoderService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapGeocoderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 根据输入关键字提示匹配信息，可将Poi类型和城市作为输入提示的限制条件
 */
var AmapAutocompleteService = /** @class */ (function () {
    function AmapAutocompleteService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-autocomplete';
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapAutocompleteService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.Autocomplete');
        }
        return this._plugin.then(function () { return new AmapAutocompleteWrapper(opts); });
    };
    AmapAutocompleteService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapAutocompleteService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapAutocompleteService;
}());
/**
 * AmapAutocompleteWrapper对象将高德原生的Autocomplete对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapAutocompleteWrapper对象将高德原生的Autocomplete对象提供的方法封装成Promise的实现，更方便回调
 */
AmapAutocompleteWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapAutocompleteWrapper, _super);
    function AmapAutocompleteWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._autocomplete = new AMap.Autocomplete(opts);
        return _this;
    }
    Object.defineProperty(AmapAutocompleteWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autocomplete;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听Autocomplete事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听Autocomplete事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapAutocompleteWrapper.prototype.on = /**
     * 用于侦听Autocomplete事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._autocomplete, event);
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AmapAutocompleteWrapper.prototype.search = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._autocomplete.search(address, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    /**
     * @param {?} city
     * @return {?}
     */
    AmapAutocompleteWrapper.prototype.setCity = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        this._autocomplete.setCity(city);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    AmapAutocompleteWrapper.prototype.setType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this._autocomplete.setType(type);
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    AmapAutocompleteWrapper.prototype.setCityLimit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this._autocomplete.setCityLimit(limit);
    };
    return AmapAutocompleteWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$7 = [
    'type',
    'city',
    'datatype',
    'citylimit'
];
var AmapAutocompleteDirective = /** @class */ (function () {
    function AmapAutocompleteDirective(logger, autos, el) {
        this.logger = logger;
        this.autos = autos;
        this.el = el;
        this.TAG = 'amap-autocomplete';
        /**
         * 插件载入完毕时触发
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Autocomplete插件触发complete事件时触发
         */
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Autocomplete插件触发error事件时触发
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Autocomplete插件触发select事件时触发
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Autocomplete插件触发choose事件时触发
         */
        this.choose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapAutocompleteDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this._plugin) {
            var /** @type {?} */ filter = ChangeFilter.of(changes);
            filter.has('city').subscribe(function (v) { return _this.setCity(v); });
            filter.has('type').subscribe(function (v) { return _this.setType(v); });
            filter.has('citylimit').subscribe(function (v) { return _this.setCityLimit(v); });
        }
    };
    /**
     * @return {?}
     */
    AmapAutocompleteDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$7);
        options.input = this.el.nativeElement;
        this._plugin = this.autos.of(options);
        this._plugin.then(function (wrapper) {
            _this.bindEvents(wrapper);
            _this.ready.emit(wrapper);
        });
    };
    /**
     * @return {?}
     */
    AmapAutocompleteDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    /**
     * @param {?} wrapper
     * @return {?}
     */
    AmapAutocompleteDirective.prototype.bindEvents = /**
     * @param {?} wrapper
     * @return {?}
     */
    function (wrapper) {
        var _this = this;
        this._subscription = wrapper.on('complete').subscribe(function (e) { return _this.complete.emit(e); });
        this._subscription.add(wrapper.on('error').subscribe(function (e) { return _this.error.emit(e); }));
        this._subscription.add(wrapper.on('select').subscribe(function (e) { return _this.select.emit(e); }));
        this._subscription.add(wrapper.on('choose').subscribe(function (e) { return _this.choose.emit(e); }));
    };
    // Setters
    /**
     * @param {?} city
     * @return {?}
     */
    AmapAutocompleteDirective.prototype.setCity = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        return this._plugin.then(function (wrapper) { return wrapper.setCity(city); });
    };
    /**
     * @param {?} type
     * @return {?}
     */
    AmapAutocompleteDirective.prototype.setType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._plugin.then(function (wrapper) { return wrapper.setType(type); });
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    AmapAutocompleteDirective.prototype.setCityLimit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        return this._plugin.then(function (wrapper) { return wrapper.setCityLimit(limit); });
    };
    AmapAutocompleteDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[amapAutocomplete]'
                },] },
    ];
    /** @nocollapse */
    AmapAutocompleteDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: AmapAutocompleteService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    AmapAutocompleteDirective.propDecorators = {
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "city": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "datatype": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "citylimit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "complete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "error": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "choose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapAutocompleteDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 地点搜索服务，提供某一特定地区的位置查询服务
 */
var AmapPlaceSearchService = /** @class */ (function () {
    function AmapPlaceSearchService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-place-search';
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapPlaceSearchService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.PlaceSearch');
        }
        return this._plugin.then(function () { return new AmapPlaceSearchWrapper(opts); });
    };
    AmapPlaceSearchService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapPlaceSearchService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapPlaceSearchService;
}());
/**
 * AmapPlaceSearchWrapper对象将高德原生的PlaceSearch对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapPlaceSearchWrapper对象将高德原生的PlaceSearch对象提供的方法封装成Promise的实现，更方便回调
 */
AmapPlaceSearchWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapPlaceSearchWrapper, _super);
    function AmapPlaceSearchWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._placeSearch = new AMap.PlaceSearch(opts);
        return _this;
    }
    Object.defineProperty(AmapPlaceSearchWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeSearch;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听PlaceSearch事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听PlaceSearch事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.on = /**
     * 用于侦听PlaceSearch事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._placeSearch, event);
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.search = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._placeSearch.search(address, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    /**
     * @param {?} keyword
     * @param {?} center
     * @param {?} radius
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.searchNearBy = /**
     * @param {?} keyword
     * @param {?} center
     * @param {?} radius
     * @return {?}
     */
    function (keyword, center, radius) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._placeSearch.searchNearBy(keyword, center, radius, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    /**
     * @param {?} keyword
     * @param {?} bounds
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.searchInBounds = /**
     * @param {?} keyword
     * @param {?} bounds
     * @return {?}
     */
    function (keyword, bounds) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._placeSearch.searchInBounds(keyword, bounds, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    /**
     * @param {?} POIID
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.getDetails = /**
     * @param {?} POIID
     * @return {?}
     */
    function (POIID) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._placeSearch.getDetails(POIID, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    /**
     * @param {?} pageIndex
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.setPageIndex = /**
     * @param {?} pageIndex
     * @return {?}
     */
    function (pageIndex) {
        this._placeSearch.setPageIndex(pageIndex);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.setPageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this._placeSearch.setPageSize(pageSize);
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.setLang = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this._placeSearch.setLang(lang);
    };
    /**
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.getLang = /**
     * @return {?}
     */
    function () {
        return this._placeSearch.getLang();
    };
    /**
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._placeSearch.clear();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.poiOnAMAP = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._placeSearch.poiOnAMAP(obj);
    };
    /**
     * @param {?} city
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.setCity = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        this._placeSearch.setCity(city);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.setType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this._placeSearch.setType(type);
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.setCityLimit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this._placeSearch.setCityLimit(limit);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AmapPlaceSearchWrapper.prototype.detailOnAMAP = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._placeSearch.poiOnAMAP(obj);
    };
    return AmapPlaceSearchWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 行政区域搜索服务
 */
var AmapDistrictSearchService = /** @class */ (function () {
    function AmapDistrictSearchService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-district-search';
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapDistrictSearchService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.DistrictSearch');
        }
        return this._plugin.then(function () { return new AmapDistrictSearchWrapper(opts); });
    };
    AmapDistrictSearchService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapDistrictSearchService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapDistrictSearchService;
}());
/**
 * AmapDistrictSearchWrapper对象将高德原生的DistrictSearch对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapDistrictSearchWrapper对象将高德原生的DistrictSearch对象提供的方法封装成Promise的实现，更方便回调
 */
AmapDistrictSearchWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapDistrictSearchWrapper, _super);
    function AmapDistrictSearchWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._districtSearch = new AMap.DistrictSearch(opts);
        return _this;
    }
    Object.defineProperty(AmapDistrictSearchWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._districtSearch;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听DistrictSearch事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听DistrictSearch事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapDistrictSearchWrapper.prototype.on = /**
     * 用于侦听DistrictSearch事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._districtSearch, event);
    };
    /**
     * @param {?} address
     * @param {?=} opts
     * @return {?}
     */
    AmapDistrictSearchWrapper.prototype.search = /**
     * @param {?} address
     * @param {?=} opts
     * @return {?}
     */
    function (address, opts) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._districtSearch.search(address, function (status, result) {
                resolve({ status: status, result: result });
            }, opts);
        });
    };
    /**
     * @param {?} level
     * @return {?}
     */
    AmapDistrictSearchWrapper.prototype.setLevel = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this._districtSearch.setLevel(level);
    };
    /**
     * @param {?} district
     * @return {?}
     */
    AmapDistrictSearchWrapper.prototype.setSubdistrict = /**
     * @param {?} district
     * @return {?}
     */
    function (district) {
        this._districtSearch.setSubdistrict(district);
    };
    return AmapDistrictSearchWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$8 = [
    'zIndex',
    'center',
    'bubble',
    'cursor',
    'radius',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'fillColor',
    'fillOpacity',
    'strokeStyle',
    'strokeDasharray',
    'extData'
];
var AmapCircleDirective = /** @class */ (function () {
    function AmapCircleDirective(logger, circles) {
        this.logger = logger;
        this.circles = circles;
        this.TAG = 'amap-circle';
        // Extra property:
        this.hidden = false;
        this.editor = false;
        // amap-circle events:
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.circleHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.circleShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // editor events:
        this.editorMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorAdjust = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapCircleDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._circle) {
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$8);
            this._circle = this.circles.create(options);
            this.bindEvents();
            this._circle.then(function (p) { return _this.ready.emit(p); });
        }
        else {
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
            filter.has('radius').subscribe(function (v) { return _this.setRadius(v); });
            filter.notEmpty('center').subscribe(function (v) { return _this.setCenter(v); });
        }
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
        filter.has('editor').subscribe(function (v) { return _this.toggleEditor(v); });
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.circles.destroy(this._circle);
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindEvent('click').subscribe(function (e) { return _this.circleClick.emit(e); });
        this._subscriptions.add(this.bindEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindEvent('hide').subscribe(function (e) { return _this.circleHide.emit(e); }));
        this._subscriptions.add(this.bindEvent('show').subscribe(function (e) { return _this.circleShow.emit(e); }));
        this._subscriptions.add(this.bindEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindEvent('change').subscribe(function (e) { return _this.change.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapCircleDirective.prototype.bindEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.circles.bindEvent(this._circle, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapCircleDirective.prototype.bindEditorEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.circles.bindEvent(this._editor, event);
    };
    // Public methods:
    /**
     * @param {?} v
     * @return {?}
     */
    AmapCircleDirective.prototype.toggleEditor = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v && !this._editor) {
            return this.circles.loadEditor()
                .then(function () { return _this._circle; })
                .then(function (c) { return _this.circles.createEditor(c); })
                .then(function (editor) {
                _this._editor = editor;
                // Bind events:
                // Bind events:
                _this._subscriptions.add(_this.bindEditorEvents('move').subscribe(function (e) { return _this.editorMove.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('adjust').subscribe(function (e) { return _this.editorAdjust.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('end').subscribe(function (e) { return _this.editorEnd.emit(e); }));
                editor.open();
            });
        }
        if (this._editor) {
            if (v) {
                this._editor.open();
            }
            else {
                this._editor.close();
            }
        }
        return Promise.resolve();
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._circle.then(function (c) { return c.show(); });
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._circle.then(function (c) { return c.hide(); });
    };
    /**
     * @param {?} point
     * @return {?}
     */
    AmapCircleDirective.prototype.contains = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this._circle.then(function (c) { return c.contains(point); });
    };
    // Setters:
    /**
     * @param {?} lnglat
     * @return {?}
     */
    AmapCircleDirective.prototype.setCenter = /**
     * @param {?} lnglat
     * @return {?}
     */
    function (lnglat) {
        return this._circle.then(function (c) { return c.setCenter(lnglat); });
    };
    /**
     * @param {?} radius
     * @return {?}
     */
    AmapCircleDirective.prototype.setRadius = /**
     * @param {?} radius
     * @return {?}
     */
    function (radius) {
        return this._circle.then(function (c) { return c.setRadius(radius); });
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapCircleDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._circle.then(function (c) { return c.setOptions(opt); });
    };
    /**
     * @param {?} ext
     * @return {?}
     */
    AmapCircleDirective.prototype.setExtData = /**
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        return this._circle.then(function (c) { return c.setExtData(ext); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.getCenter = /**
     * @return {?}
     */
    function () {
        return this._circle.then(function (c) { return c.getCenter(); });
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.getRadius = /**
     * @return {?}
     */
    function () {
        return this._circle.then(function (c) { return c.getRadius(); });
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this._circle.then(function (c) { return c.getOptions(); });
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.getBounds = /**
     * @return {?}
     */
    function () {
        return this._circle.then(function (c) { return c.getBounds(); });
    };
    /**
     * @return {?}
     */
    AmapCircleDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._circle.then(function (c) { return c.getExtData(); });
    };
    AmapCircleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-circle',
                    exportAs: 'circle'
                },] },
    ];
    /** @nocollapse */
    AmapCircleDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: CircleService, },
    ]; };
    AmapCircleDirective.propDecorators = {
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "center": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeDasharray": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "circleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAdjust": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapCircleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$9 = [
    'zIndex',
    'center',
    'bubble',
    'cursor',
    'radius',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'fillColor',
    'fillOpacity',
    'extData'
];
var AmapCircleMarkerDirective = /** @class */ (function () {
    function AmapCircleMarkerDirective(logger, cms) {
        this.logger = logger;
        this.cms = cms;
        this.TAG = 'amap-circle-marker';
        // Extra property:
        this.hidden = false;
        // amap-circle events:
        this.circleMarkerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.circleMarkerHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.circleMarkerShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._cm) {
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$9);
            this._cm = this.cms.create(options);
            this.bindEvents();
            this._cm.then(function (p) { return _this.ready.emit(p); });
        }
        else {
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
            filter.has('radius').subscribe(function (v) { return _this.setRadius(v); });
            filter.notEmpty('center').subscribe(function (v) { return _this.setCenter(v); });
        }
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
    };
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.cms.destroy(this._cm);
    };
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindEvent('click').subscribe(function (e) { return _this.circleMarkerClick.emit(e); });
        this._subscriptions.add(this.bindEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindEvent('hide').subscribe(function (e) { return _this.circleMarkerHide.emit(e); }));
        this._subscriptions.add(this.bindEvent('show').subscribe(function (e) { return _this.circleMarkerShow.emit(e); }));
        this._subscriptions.add(this.bindEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindEvent('change').subscribe(function (e) { return _this.change.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.bindEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.cms.bindEvent(this._cm, event);
    };
    // Public methods:
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._cm.then(function (c) { return c.show(); });
    };
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._cm.then(function (c) { return c.hide(); });
    };
    // Setters:
    /**
     * @param {?} lnglat
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.setCenter = /**
     * @param {?} lnglat
     * @return {?}
     */
    function (lnglat) {
        return this._cm.then(function (c) { return c.setCenter(lnglat); });
    };
    /**
     * @param {?} radius
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.setRadius = /**
     * @param {?} radius
     * @return {?}
     */
    function (radius) {
        return this._cm.then(function (c) { return c.setRadius(radius); });
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._cm.then(function (c) { return c.setOptions(opt); });
    };
    /**
     * @param {?} ext
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.setExtData = /**
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        return this._cm.then(function (c) { return c.setExtData(ext); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.getCenter = /**
     * @return {?}
     */
    function () {
        return this._cm.then(function (c) { return c.getCenter(); });
    };
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.getRadius = /**
     * @return {?}
     */
    function () {
        return this._cm.then(function (c) { return c.getRadius(); });
    };
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this._cm.then(function (c) { return c.getOptions(); });
    };
    /**
     * @return {?}
     */
    AmapCircleMarkerDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._cm.then(function (c) { return c.getExtData(); });
    };
    AmapCircleMarkerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-circle-marker',
                    exportAs: 'circle-marker'
                },] },
    ];
    /** @nocollapse */
    AmapCircleMarkerDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: CircleMarkerService, },
    ]; };
    AmapCircleMarkerDirective.propDecorators = {
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "center": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "circleMarkerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleMarkerHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleMarkerShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapCircleMarkerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AmapMouseToolService = /** @class */ (function () {
    function AmapMouseToolService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-mouse-tool';
    }
    /**
     * @param {?} map
     * @return {?}
     */
    AmapMouseToolService.prototype.of = /**
     * @param {?} map
     * @return {?}
     */
    function (map) {
        if (!this._plugin) {
            this._plugin = this.plugins.load('AMap.MouseTool');
        }
        return this._plugin.then(function () { return new AmapMouseToolWrapper(map); });
    };
    AmapMouseToolService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapMouseToolService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapMouseToolService;
}());
var AmapMouseToolWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapMouseToolWrapper, _super);
    // I'm not able to use declared type 'Map' here, rollup complains:
    // 'Map' is not exported by lib/.ng_pkg_build/ngx-amap/ts/types/class/amap.map.js
    // it may be related to this issue
    // https://github.com/rollup/rollup/issues/1048
    function AmapMouseToolWrapper(map) {
        var _this = _super.call(this) || this;
        _this._mouseTool = new AMap.MouseTool(map);
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.on = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._mouseTool, event);
    };
    Object.defineProperty(AmapMouseToolWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mouseTool;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.marker = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('marker', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.polyline = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('polyline', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.polygon = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('polygon', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.circle = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('circle', options);
    };
    // todo add rectangle class
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.rectangle = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('rectangle', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.rule = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('rule', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.measureArea = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('measureArea', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.rectZoomIn = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('rectZoomIn', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.rectZoomOut = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this._exec('rectZoomOut', options);
    };
    /**
     * @param {?=} clear
     * @return {?}
     */
    AmapMouseToolWrapper.prototype.close = /**
     * @param {?=} clear
     * @return {?}
     */
    function (clear) {
        if (clear === void 0) { clear = false; }
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
        return this._mouseTool.close(clear);
    };
    /**
     * @template T
     * @param {?} method
     * @param {?} opts
     * @return {?}
     */
    AmapMouseToolWrapper.prototype._exec = /**
     * @template T
     * @param {?} method
     * @param {?} opts
     * @return {?}
     */
    function (method, opts) {
        var _this = this;
        this._mouseTool[method](opts);
        return new Promise(function (resolve) {
            _this._subscription = _this.on('draw')
                .subscribe(function (_a) {
                var obj = _a.obj;
                _this.close();
                resolve(obj);
            });
        });
    };
    return AmapMouseToolWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$10 = [
    'text',
    'textAlign',
    'verticalAlign',
    'position',
    'offset',
    'topWhenClick',
    'bubble',
    'draggable',
    'raiseOnDrag',
    'cursor',
    'visible',
    'zIndex',
    'angle',
    'autoRotation',
    'animation',
    'shadow',
    'title',
    'clickable',
    'extData',
    'style'
];
var AmapTextDirective = /** @class */ (function () {
    function AmapTextDirective(logger, texts, pixel, icons) {
        this.logger = logger;
        this.texts = texts;
        this.pixel = pixel;
        this.icons = icons;
        this.TAG = 'amap-text';
        this.hidden = false;
        this.openInfoWindow = true;
        this.inCluster = false;
        // amap-text events:
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moving = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.movealong = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // amap-info-window:
        this.infoWindowComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapTextDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._text) {
            // do not draw text when no poistion defined.
            if (!this.position) {
                return;
            }
            var /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$10);
            this._text = this.texts.create(options, !this.inCluster);
            this.bindEvents();
            this._text.then(function (text) { return _this.ready.emit(text); });
            this.updateInfoWindow();
            this.updateInfoWindowPosition();
        }
        else {
            filter.has('text').subscribe(function (v) { return _this.setText(v); });
            filter.has('shadow').subscribe(function (v) { return _this.setShadow(v); });
            filter.has('title').subscribe(function (v) { return _this.setTitle(v); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
            filter.has('clickable').subscribe(function (v) { return _this.setClickable(!!v); });
            filter.has('draggable').subscribe(function (v) { return _this.setDraggable(!!v); });
            filter.has('visible').subscribe(function (v) { return v ? _this.show() : _this.hide(); });
            filter.has('cursor').subscribe(function (v) { return _this.setCursor(v); });
            filter.has('animation').subscribe(function (v) { return _this.setAnimation(v); });
            filter.has('style').subscribe(function (v) { return _this.setStyle(v); });
            filter.has('angle').subscribe(function (v) { return _this.setAngle(v); });
            filter.has('zIndex').subscribe(function (v) { return _this.setzIndex(v); });
            filter.notEmpty('offset').subscribe(function (v) { return _this.setOffset(v); });
            filter.notEmpty('position').subscribe(function (v) { return _this.setPosition(v); });
        }
        filter.has('isTop').subscribe(function (v) { return _this.setTop(!!v); });
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._text) {
            this._subscriptions.unsubscribe();
            this.texts.destroy(this._text);
        }
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateInfoWindow();
        this.infoWindowComponent.changes.subscribe(function () { return _this.updateInfoWindow(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.updateInfoWindow = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.infoWindowComponent && this._text) {
            if (this.infoWindowComponent.length > 1) {
                this.logger.e(this.TAG, 'Expected no more than 1 info window.');
                return;
            }
            this.infoWindowComponent.forEach(function (component) {
                component.hostMarker = _this._text;
            });
        }
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.updateInfoWindowPosition = /**
     * @return {?}
     */
    function () {
        if (this.infoWindowComponent && this._text) {
            this.infoWindowComponent.forEach(function (component) {
                component.toggleOpen();
            });
        }
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindTextEvent('click').subscribe(function (e) {
            if (_this.openInfoWindow) {
                _this.infoWindowComponent.forEach(function (component) {
                    component.open();
                });
            }
            _this.textClick.emit(e);
        });
        this._subscriptions.add(this.bindTextEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('mousemove').subscribe(function (e) { return _this.mouseMove.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('dragstart').subscribe(function (e) { return _this.dragStart.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('dragging').subscribe(function (e) { return _this.dragging.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('dragend').subscribe(function (e) { return _this.dragEnd.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('moving').subscribe(function (e) { return _this.moving.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('moveend').subscribe(function (e) { return _this.moveend.emit(e); }));
        this._subscriptions.add(this.bindTextEvent('movealong').subscribe(function (e) { return _this.movealong.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapTextDirective.prototype.bindTextEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.texts.bindEvent(this._text, event);
    };
    Object.defineProperty(AmapTextDirective.prototype, "marker", {
        get: /**
         * @return {?}
         */
        function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (m) { return m.show(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (m) { return m.hide(); });
    };
    // Animations
    /**
     * @param {?} position
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    AmapTextDirective.prototype.moveTo = /**
     * @param {?} position
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    function (position, speed, f) {
        return this._text.then(function (text) { return text.moveTo(position, speed, f); });
    };
    /**
     * @param {?} path
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    AmapTextDirective.prototype.moveAlong = /**
     * @param {?} path
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    function (path, speed, f) {
        return this._text.then(function (text) { return text.moveAlong(path, speed, f); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.stopMove = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.stopMove(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.pauseMove = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.pauseMove(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.resumeMove = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.resumeMove(); });
    };
    // Setters
    /**
     * @param {?} text
     * @return {?}
     */
    AmapTextDirective.prototype.setText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this._text.then(function (t) { return t.setText(text); });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AmapTextDirective.prototype.setStyle = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return this._text.then(function (t) { return t.setStyle(obj); });
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    AmapTextDirective.prototype.setOffset = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var _this = this;
        return this._text.then(function (text) {
            var /** @type {?} */ value = _this.pixel.create(offset, 'offset');
            if (value) {
                text.setOffset(value);
            }
        });
    };
    /**
     * @param {?} shadow
     * @return {?}
     */
    AmapTextDirective.prototype.setShadow = /**
     * @param {?} shadow
     * @return {?}
     */
    function (shadow) {
        var _this = this;
        return this._text.then(function (text) {
            var /** @type {?} */ value = /** @type {?} */ (_this.icons.create(shadow, 'shadow'));
            text.setShadow(value);
        });
    };
    /**
     * @param {?} draggable
     * @return {?}
     */
    AmapTextDirective.prototype.setDraggable = /**
     * @param {?} draggable
     * @return {?}
     */
    function (draggable) {
        return this._text.then(function (text) { return text.setDraggable(draggable); });
    };
    /**
     * @param {?} clickable
     * @return {?}
     */
    AmapTextDirective.prototype.setClickable = /**
     * @param {?} clickable
     * @return {?}
     */
    function (clickable) {
        return this._text.then(function (text) { return text.setClickable(clickable); });
    };
    /**
     * @param {?} position
     * @return {?}
     */
    AmapTextDirective.prototype.setPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        return this._text.then(function (text) {
            text.setPosition(position);
            _this.updateInfoWindowPosition();
        });
    };
    /**
     * @param {?} angle
     * @return {?}
     */
    AmapTextDirective.prototype.setAngle = /**
     * @param {?} angle
     * @return {?}
     */
    function (angle) {
        return this._text.then(function (text) { return text.setAngle(angle); });
    };
    /**
     * @param {?} zIndex
     * @return {?}
     */
    AmapTextDirective.prototype.setzIndex = /**
     * @param {?} zIndex
     * @return {?}
     */
    function (zIndex) {
        return this._text.then(function (text) { return text.setzIndex(zIndex); });
    };
    /**
     * @param {?} title
     * @return {?}
     */
    AmapTextDirective.prototype.setTitle = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        return this._text.then(function (text) { return text.setTitle(title); });
    };
    /**
     * @param {?} cursor
     * @return {?}
     */
    AmapTextDirective.prototype.setCursor = /**
     * @param {?} cursor
     * @return {?}
     */
    function (cursor) {
        return this._text.then(function (text) { return text.setCursor(cursor); });
    };
    /**
     * @param {?} isTop
     * @return {?}
     */
    AmapTextDirective.prototype.setTop = /**
     * @param {?} isTop
     * @return {?}
     */
    function (isTop) {
        return this._text.then(function (text) { return text.setTop(isTop); });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AmapTextDirective.prototype.setExtData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this._text.then(function (text) { return text.setExtData(data); });
    };
    /**
     * @param {?} animation
     * @return {?}
     */
    AmapTextDirective.prototype.setAnimation = /**
     * @param {?} animation
     * @return {?}
     */
    function (animation) {
        return this._text.then(function (text) { return text.setAnimation(animation); });
    };
    // Getters
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getText = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getText(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getOffset = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getOffset(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getPosition(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getAngle = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getAngle(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getzIndex = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getzIndex(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getTitle(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getTop = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getTop(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getShadow = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getShadow(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getExtData(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getMap = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getMap(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getAnimation = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getAnimation(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getClickable = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getClickable(); });
    };
    /**
     * @return {?}
     */
    AmapTextDirective.prototype.getDraggable = /**
     * @return {?}
     */
    function () {
        return this._text.then(function (text) { return text.getDraggable(); });
    };
    AmapTextDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-text',
                    exportAs: 'text'
                },] },
    ];
    /** @nocollapse */
    AmapTextDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: TextService, },
        { type: PixelService, },
        { type: IconService, },
    ]; };
    AmapTextDirective.propDecorators = {
        "text": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "textAlign": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "verticalAlign": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "topWhenClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "raiseOnDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "angle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoRotation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shadow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isTop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openInfoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inCluster": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "textClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragging": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "moving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "moveend": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "movealong": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "infoWindowComponent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [AmapInfoWindowComponent,] },],
    };
    return AmapTextDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$11 = [
    'path',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'strokeStyle',
    'strokeDasharray',
    'zIndex',
    'showDir',
    'bubble',
    'cursor',
    'isOutline',
    'outlineColor',
    'borderWeight',
];
var AmapBezierCurveDirective = /** @class */ (function () {
    function AmapBezierCurveDirective(logger, bezierCurves) {
        this.logger = logger;
        this.bezierCurves = bezierCurves;
        this.TAG = 'amap-bezier-curve';
        // Extra property:
        this.hidden = false;
        this.editor = false;
        // amap-bezier-curve events:
        this.bezierCurveClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bezierCurveHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bezierCurveShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // editor events:
        this.editorAddnode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorRemovenode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorAdjust = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._bezierCurve) {
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$11);
            this._bezierCurve = this.bezierCurves.create(options);
            this.bindEvents();
            this._bezierCurve.then(function (p) { return _this.ready.emit(p); });
        }
        else {
            filter.has('path').subscribe(function (v) { return _this.setPath(v); });
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
        }
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
        filter.has('editor').subscribe(function (v) { return _this.toggleEditor(v); });
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.bezierCurves.destroy(this._bezierCurve);
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindBezierCurveEvent('click').subscribe(function (e) { return _this.bezierCurveClick.emit(e); });
        this._subscriptions.add(this.bindBezierCurveEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('hide').subscribe(function (e) { return _this.bezierCurveHide.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('show').subscribe(function (e) { return _this.bezierCurveShow.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('change').subscribe(function (e) { return _this.change.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindBezierCurveEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.bindBezierCurveEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bezierCurves.bindEvent(this._bezierCurve, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.bindEditorEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bezierCurves.bindEvent(this._editor, event);
    };
    // Public methods:
    /**
     * @param {?} v
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.toggleEditor = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v && !this._editor) {
            return this.bezierCurves.loadEditor()
                .then(function () { return _this._bezierCurve; })
                .then(function (c) { return _this.bezierCurves.createEditor(c, _this.editorOptions); })
                .then(function (editor) {
                _this._editor = editor;
                // Bind events:
                // Bind events:
                _this._subscriptions.add(_this.bindEditorEvents('addnode').subscribe(function (e) { return _this.editorAddnode.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('adjust').subscribe(function (e) { return _this.editorAdjust.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('removenode').subscribe(function (e) { return _this.editorRemovenode.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('end').subscribe(function (e) { return _this.editorEnd.emit(e); }));
                editor.open();
            });
        }
        if (this._editor) {
            if (v) {
                this._editor.open();
            }
            else {
                this._editor.close();
            }
        }
        return Promise.resolve();
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._bezierCurve.then(function (p) { return p.show(); });
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._bezierCurve.then(function (p) { return p.hide(); });
    };
    // Setters:
    /**
     * @param {?} path
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.setPath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._bezierCurve.then(function (p) { return p.setPath(path); });
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._bezierCurve.then(function (p) { return p.setOptions(opt); });
    };
    /**
     * @param {?} ext
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.setExtData = /**
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        return this._bezierCurve.then(function (p) { return p.setExtData(ext); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return this._bezierCurve.then(function (p) { return p.getPath(); });
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this._bezierCurve.then(function (p) { return p.getOptions(); });
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.getLength = /**
     * @return {?}
     */
    function () {
        return this._bezierCurve.then(function (p) { return p.getLength(); });
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.getBounds = /**
     * @return {?}
     */
    function () {
        return this._bezierCurve.then(function (p) { return p.getBounds(); });
    };
    /**
     * @return {?}
     */
    AmapBezierCurveDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._bezierCurve.then(function (p) { return p.getExtData(); });
    };
    AmapBezierCurveDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-bezier-curve',
                    exportAs: 'bezier-curve'
                },] },
    ];
    /** @nocollapse */
    AmapBezierCurveDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: BezierCurveService, },
    ]; };
    AmapBezierCurveDirective.propDecorators = {
        "path": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOutline": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "borderWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outlineColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeDasharray": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showDir": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editorOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bezierCurveClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "bezierCurveHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "bezierCurveShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAddnode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorRemovenode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAdjust": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapBezierCurveDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$12 = [
    'zIndex',
    'center',
    'bubble',
    'cursor',
    'radius',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'fillColor',
    'fillOpacity',
    'strokeStyle',
    'strokeDasharray',
    'extData'
];
var AmapEllipseDirective = /** @class */ (function () {
    function AmapEllipseDirective(logger, ellipses) {
        this.logger = logger;
        this.ellipses = ellipses;
        this.TAG = 'amap-ellipse';
        // Extra property:
        this.hidden = false;
        this.editor = false;
        // amap-ellipse events:
        this.ellipseClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ellipseHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ellipseShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // editor events:
        this.editorMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorAdjust = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapEllipseDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._ellipse) {
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$12);
            this._ellipse = this.ellipses.create(options);
            this.bindEvents();
            this._ellipse.then(function (p) { return _this.ready.emit(p); });
        }
        else {
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
            filter.notEmpty('center').subscribe(function (v) { return _this.setCenter(v); });
        }
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
        filter.has('editor').subscribe(function (v) { return _this.toggleEditor(v); });
    };
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.ellipses.destroy(this._ellipse);
    };
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindEvent('click').subscribe(function (e) { return _this.ellipseClick.emit(e); });
        this._subscriptions.add(this.bindEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindEvent('hide').subscribe(function (e) { return _this.ellipseHide.emit(e); }));
        this._subscriptions.add(this.bindEvent('show').subscribe(function (e) { return _this.ellipseShow.emit(e); }));
        this._subscriptions.add(this.bindEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindEvent('change').subscribe(function (e) { return _this.change.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapEllipseDirective.prototype.bindEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.ellipses.bindEvent(this._ellipse, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapEllipseDirective.prototype.bindEditorEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.ellipses.bindEvent(this._editor, event);
    };
    // Public methods:
    /**
     * @param {?} v
     * @return {?}
     */
    AmapEllipseDirective.prototype.toggleEditor = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v && !this._editor) {
            return this.ellipses.loadEditor()
                .then(function () { return _this._ellipse; })
                .then(function (c) { return _this.ellipses.createEditor(c); })
                .then(function (editor) {
                _this._editor = editor;
                // Bind events:
                // Bind events:
                _this._subscriptions.add(_this.bindEditorEvents('move').subscribe(function (e) { return _this.editorMove.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('adjust').subscribe(function (e) { return _this.editorAdjust.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('end').subscribe(function (e) { return _this.editorEnd.emit(e); }));
                editor.open();
            });
        }
        if (this._editor) {
            if (v) {
                this._editor.open();
            }
            else {
                this._editor.close();
            }
        }
        return Promise.resolve();
    };
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._ellipse.then(function (c) { return c.show(); });
    };
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._ellipse.then(function (c) { return c.hide(); });
    };
    /**
     * @param {?} point
     * @return {?}
     */
    AmapEllipseDirective.prototype.contains = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this._ellipse.then(function (c) { return c.contains(point); });
    };
    // Setters:
    /**
     * @param {?} lnglat
     * @return {?}
     */
    AmapEllipseDirective.prototype.setCenter = /**
     * @param {?} lnglat
     * @return {?}
     */
    function (lnglat) {
        return this._ellipse.then(function (c) { return c.setCenter(lnglat); });
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapEllipseDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._ellipse.then(function (c) { return c.setOptions(opt); });
    };
    /**
     * @param {?} ext
     * @return {?}
     */
    AmapEllipseDirective.prototype.setExtData = /**
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        return this._ellipse.then(function (c) { return c.setExtData(ext); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.getCenter = /**
     * @return {?}
     */
    function () {
        return this._ellipse.then(function (c) { return c.getCenter(); });
    };
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this._ellipse.then(function (c) { return c.getOptions(); });
    };
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.getBounds = /**
     * @return {?}
     */
    function () {
        return this._ellipse.then(function (c) { return c.getBounds(); });
    };
    /**
     * @return {?}
     */
    AmapEllipseDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._ellipse.then(function (c) { return c.getExtData(); });
    };
    AmapEllipseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-ellipse',
                    exportAs: 'ellipse'
                },] },
    ];
    /** @nocollapse */
    AmapEllipseDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: EllipseService, },
    ]; };
    AmapEllipseDirective.propDecorators = {
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "center": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeDasharray": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ellipseClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ellipseHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ellipseShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAdjust": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapEllipseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$13 = [
    'zIndex',
    'bounds',
    'bubble',
    'cursor',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'fillColor',
    'fillOpacity',
    'strokeStyle',
    'strokeDasharray',
    'extData',
    'draggable'
];
var AmapRectangleDirective = /** @class */ (function () {
    function AmapRectangleDirective(logger, rectangles) {
        this.logger = logger;
        this.rectangles = rectangles;
        this.TAG = 'amap-rectangle';
        // Extra property:
        this.hidden = false;
        this.editor = false;
        // amap-rectangle events:
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rectangleHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rectangleShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // editor events:
        this.editorAdjust = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapRectangleDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._rectangle) {
            // do not draw rectangle when no bounds defined.
            if (!this.bounds && !(this.options && this.options.bounds)) {
                return;
            }
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$13);
            this._rectangle = this.rectangles.create(options);
            this.bindEvents();
            this._rectangle.then(function (p) { return _this.ready.emit(p); });
            this.toggleEditor(this.editor);
        }
        else {
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
            filter.has('extData').subscribe(function (v) { return _this.setExtData(v); });
            filter.notEmpty('bounds').subscribe(function (v) { return _this.setBounds(v); });
        }
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
        filter.has('editor').subscribe(function (v) { return _this.toggleEditor(v); });
    };
    /**
     * @return {?}
     */
    AmapRectangleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
        this.rectangles.destroy(this._rectangle);
    };
    /**
     * @return {?}
     */
    AmapRectangleDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions = this.bindRectangleEvent('click').subscribe(function (e) { return _this.rectangleClick.emit(e); });
        this._subscriptions.add(this.bindRectangleEvent('dblclick').subscribe(function (e) { return _this.dblClick.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('rightclick').subscribe(function (e) { return _this.rightClick.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('hide').subscribe(function (e) { return _this.rectangleHide.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('show').subscribe(function (e) { return _this.rectangleShow.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('mousedown').subscribe(function (e) { return _this.mouseDown.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('mouseup').subscribe(function (e) { return _this.mouseUp.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('mouseover').subscribe(function (e) { return _this.mouseOver.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('mouseout').subscribe(function (e) { return _this.mouseOut.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('change').subscribe(function (e) { return _this.change.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('touchstart').subscribe(function (e) { return _this.touchStart.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('touchmove').subscribe(function (e) { return _this.touchMove.emit(e); }));
        this._subscriptions.add(this.bindRectangleEvent('touchend').subscribe(function (e) { return _this.touchEnd.emit(e); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapRectangleDirective.prototype.bindRectangleEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.rectangles.bindEvent(this._rectangle, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapRectangleDirective.prototype.bindEditorEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.rectangles.bindEvent(this._editor, event);
    };
    // Public methods:
    /**
     * @param {?} v
     * @return {?}
     */
    AmapRectangleDirective.prototype.toggleEditor = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v && !this._editor) {
            return this.rectangles.loadEditor()
                .then(function () { return _this._rectangle; })
                .then(function (c) { return _this.rectangles.createEditor(c); })
                .then(function (editor) {
                _this._editor = editor;
                // Bind events:
                // Bind events:
                _this._subscriptions.add(_this.bindEditorEvents('adjust').subscribe(function (e) { return _this.editorAdjust.emit(e); }));
                _this._subscriptions.add(_this.bindEditorEvents('end').subscribe(function (e) { return _this.editorEnd.emit(e); }));
                editor.open();
            });
        }
        if (this._editor) {
            if (v) {
                this._editor.open();
            }
            else {
                this._editor.close();
            }
        }
        return Promise.resolve();
    };
    /**
     * @return {?}
     */
    AmapRectangleDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._rectangle.then(function (r) { return r.show(); });
    };
    /**
     * @return {?}
     */
    AmapRectangleDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._rectangle.then(function (r) { return r.hide(); });
    };
    /**
     * @param {?} point
     * @return {?}
     */
    AmapRectangleDirective.prototype.contains = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this._rectangle.then(function (r) { return r.contains(point); });
    };
    // Setters:
    /**
     * @param {?} bounds
     * @return {?}
     */
    AmapRectangleDirective.prototype.setBounds = /**
     * @param {?} bounds
     * @return {?}
     */
    function (bounds) {
        return this._rectangle.then(function (r) { return r.setBounds(bounds); });
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapRectangleDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._rectangle.then(function (r) { return r.setOptions(opt); });
    };
    /**
     * @param {?} ext
     * @return {?}
     */
    AmapRectangleDirective.prototype.setExtData = /**
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        return this._rectangle.then(function (r) { return r.setExtData(ext); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapRectangleDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this._rectangle.then(function (r) { return r.getOptions(); });
    };
    /**
     * @return {?}
     */
    AmapRectangleDirective.prototype.getBounds = /**
     * @return {?}
     */
    function () {
        return this._rectangle.then(function (r) { return r.getBounds(); });
    };
    /**
     * @return {?}
     */
    AmapRectangleDirective.prototype.getExtData = /**
     * @return {?}
     */
    function () {
        return this._rectangle.then(function (r) { return r.getExtData(); });
    };
    AmapRectangleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-rectangle',
                    exportAs: 'rectangle'
                },] },
    ];
    /** @nocollapse */
    AmapRectangleDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: RectangleService, },
    ]; };
    AmapRectangleDirective.propDecorators = {
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bubble": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeDasharray": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "extData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rectangleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "touchEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorAdjust": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "editorEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapRectangleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_OPTIONS$14 = [
    'radius',
    'gradient',
    'opacity',
    'zooms'
];
var AmapHeatmapDirective = /** @class */ (function () {
    function AmapHeatmapDirective(logger, hms) {
        this.logger = logger;
        this.hms = hms;
        this.TAG = 'amap-heatmap';
        // Extra property:
        this.hidden = false;
        // amap-tool-bar events:
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    AmapHeatmapDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._heatmap) {
            var /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$14);
            this._heatmap = this.hms.create(options);
            this.bindEvents();
            this._heatmap.then(function (t) { return _this.ready.emit(t); });
            this.hidden ? this.hide() : this.show();
        }
        else {
            filter.has('options').subscribe(function (v) { return _this.setOptions(v || {}); });
        }
        filter.notEmpty('dataset').subscribe(function (v) { return _this.setDataSet(v); });
        filter.has('hidden').subscribe(function (v) { return v ? _this.hide() : _this.show(); });
    };
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unbindEvents();
        this.hms.destroy(this._heatmap);
    };
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.bindEvents = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AmapHeatmapDirective.prototype.bindHeatmapEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.hms.bindEvent(this._heatmap, event);
    };
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.unbindEvents = /**
     * @return {?}
     */
    function () {
    };
    // Public methods:
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        return this._heatmap.then(function (t) { return t.show(); });
    };
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        return this._heatmap.then(function (t) { return t.hide(); });
    };
    // Setters:
    /**
     * @param {?} opt
     * @return {?}
     */
    AmapHeatmapDirective.prototype.setOptions = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return this._heatmap.then(function (p) { return p.setOptions(opt); });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AmapHeatmapDirective.prototype.setDataSet = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this._heatmap.then(function (p) { return p.setDataSet(data); });
    };
    // Getters:
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.getDataSet = /**
     * @return {?}
     */
    function () {
        return this._heatmap.then(function (t) { return t.getDataSet(); });
    };
    /**
     * @return {?}
     */
    AmapHeatmapDirective.prototype.getMap = /**
     * @return {?}
     */
    function () {
        return this._heatmap.then(function (t) { return t.getMap(); });
    };
    AmapHeatmapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'amap-heatmap',
                    exportAs: 'heatmap'
                },] },
    ];
    /** @nocollapse */
    AmapHeatmapDirective.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: HeatmapService, },
    ]; };
    AmapHeatmapDirective.propDecorators = {
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gradient": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zooms": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dataset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AmapHeatmapDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 驾车路线规划服务
 */
var AmapDrivingService = /** @class */ (function () {
    function AmapDrivingService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-driving';
    }
    Object.defineProperty(AmapDrivingService.prototype, "loaded", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._plugin) {
                this._plugin = this.plugins.load('AMap.Driving');
            }
            return this._plugin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapDrivingService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        return this.loaded.then(function () { return new AmapDrivingWrapper(opts); });
    };
    AmapDrivingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapDrivingService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapDrivingService;
}());
/**
 * AmapDrivingWrapper对象将高德原生的Driving对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapDrivingWrapper对象将高德原生的Driving对象提供的方法封装成Promise的实现，更方便回调
 */
AmapDrivingWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapDrivingWrapper, _super);
    function AmapDrivingWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._driving = new AMap.Driving(opts);
        return _this;
    }
    Object.defineProperty(AmapDrivingWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._driving;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听Driving事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听Driving事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapDrivingWrapper.prototype.on = /**
     * 用于侦听Driving事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._driving, event);
    };
    /**
     * @param {?} origin
     * @param {?=} destination
     * @param {?=} opts
     * @return {?}
     */
    AmapDrivingWrapper.prototype.search = /**
     * @param {?} origin
     * @param {?=} destination
     * @param {?=} opts
     * @return {?}
     */
    function (origin, destination, opts) {
        var _this = this;
        if (typeof destination !== 'undefined') {
            return new Promise(function (resolve) {
                return _this._driving.search(origin, destination, opts, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
        else {
            return new Promise(function (resolve) {
                return _this._driving.search(origin, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
    };
    /**
     * @param {?} policy
     * @return {?}
     */
    AmapDrivingWrapper.prototype.setPolicy = /**
     * @param {?} policy
     * @return {?}
     */
    function (policy) {
        this._driving.setPolicy(policy);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    AmapDrivingWrapper.prototype.setAvoidPolygons = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this._driving.setAvoidPolygons(path);
    };
    /**
     * @param {?} road
     * @return {?}
     */
    AmapDrivingWrapper.prototype.setAvoidRoad = /**
     * @param {?} road
     * @return {?}
     */
    function (road) {
        this._driving.setAvoidRoad(road);
    };
    /**
     * @return {?}
     */
    AmapDrivingWrapper.prototype.clearAvoidRoad = /**
     * @return {?}
     */
    function () {
        this._driving.clearAvoidRoad();
    };
    /**
     * @return {?}
     */
    AmapDrivingWrapper.prototype.clearAvoidPolygons = /**
     * @return {?}
     */
    function () {
        this._driving.clearAvoidPolygons();
    };
    /**
     * @return {?}
     */
    AmapDrivingWrapper.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._driving.clear();
    };
    /**
     * @return {?}
     */
    AmapDrivingWrapper.prototype.getAvoidPolygons = /**
     * @return {?}
     */
    function () {
        return this._driving.getAvoidPolygons();
    };
    /**
     * @return {?}
     */
    AmapDrivingWrapper.prototype.getAvoidRoad = /**
     * @return {?}
     */
    function () {
        return this._driving.getAvoidRoad();
    };
    /**
     * @param {?} province
     * @param {?} number
     * @return {?}
     */
    AmapDrivingWrapper.prototype.setProvinceAndNumber = /**
     * @param {?} province
     * @param {?} number
     * @return {?}
     */
    function (province, number) {
        this._driving.setProvinceAndNumber(province, number);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AmapDrivingWrapper.prototype.searchOnAMAP = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._driving.searchOnAMAP(obj);
    };
    return AmapDrivingWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 货车路线规划服务
 */
var AmapTruckDrivingService = /** @class */ (function () {
    function AmapTruckDrivingService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-truck-driving';
    }
    Object.defineProperty(AmapTruckDrivingService.prototype, "loaded", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._plugin) {
                this._plugin = this.plugins.load('AMap.TruckDriving');
            }
            return this._plugin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapTruckDrivingService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        return this.loaded.then(function () { return new AmapTruckDrivingWrapper(opts); });
    };
    AmapTruckDrivingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapTruckDrivingService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapTruckDrivingService;
}());
/**
 * AmapTruckDrivingWrapper对象将高德原生的TruckDriving对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapTruckDrivingWrapper对象将高德原生的TruckDriving对象提供的方法封装成Promise的实现，更方便回调
 */
AmapTruckDrivingWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapTruckDrivingWrapper, _super);
    function AmapTruckDrivingWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._driving = new AMap.TruckDriving(opts);
        return _this;
    }
    Object.defineProperty(AmapTruckDrivingWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._driving;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听TruckDriving事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听TruckDriving事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapTruckDrivingWrapper.prototype.on = /**
     * 用于侦听TruckDriving事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._driving, event);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    AmapTruckDrivingWrapper.prototype.search = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._driving.search(path, function (status, result) {
                resolve({ status: status, result: result });
            });
        });
    };
    /**
     * @return {?}
     */
    AmapTruckDrivingWrapper.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._driving.clear();
    };
    /**
     * @param {?} province
     * @param {?} number
     * @return {?}
     */
    AmapTruckDrivingWrapper.prototype.setProvinceAndNumber = /**
     * @param {?} province
     * @param {?} number
     * @return {?}
     */
    function (province, number) {
        this._driving.setProvinceAndNumber(province, number);
    };
    return AmapTruckDrivingWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 公交换乘路径规划服务
 */
var AmapTransferService = /** @class */ (function () {
    function AmapTransferService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-transfer';
    }
    Object.defineProperty(AmapTransferService.prototype, "loaded", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._plugin) {
                this._plugin = this.plugins.load('AMap.Transfer');
            }
            return this._plugin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapTransferService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        return this.loaded.then(function () { return new AmapTransferWrapper(opts); });
    };
    AmapTransferService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapTransferService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapTransferService;
}());
/**
 * AmapTransferWrapper对象将高德原生的Transfer对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapTransferWrapper对象将高德原生的Transfer对象提供的方法封装成Promise的实现，更方便回调
 */
AmapTransferWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapTransferWrapper, _super);
    function AmapTransferWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._transfer = new AMap.Transfer(opts);
        return _this;
    }
    Object.defineProperty(AmapTransferWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._transfer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听Transfer事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听Transfer事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapTransferWrapper.prototype.on = /**
     * 用于侦听Transfer事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._transfer, event);
    };
    /**
     * @param {?} origin
     * @param {?=} destination
     * @return {?}
     */
    AmapTransferWrapper.prototype.search = /**
     * @param {?} origin
     * @param {?=} destination
     * @return {?}
     */
    function (origin, destination) {
        var _this = this;
        if (typeof destination !== 'undefined') {
            return new Promise(function (resolve) {
                return _this._transfer.search(origin, destination, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
        else {
            return new Promise(function (resolve) {
                return _this._transfer.search(origin, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
    };
    /**
     * @param {?} policy
     * @return {?}
     */
    AmapTransferWrapper.prototype.setPolicy = /**
     * @param {?} policy
     * @return {?}
     */
    function (policy) {
        this._transfer.setPolicy(policy);
    };
    /**
     * @param {?} city
     * @return {?}
     */
    AmapTransferWrapper.prototype.setCity = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        this._transfer.setCity(city);
    };
    /**
     * @param {?} city
     * @return {?}
     */
    AmapTransferWrapper.prototype.setCityd = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        this._transfer.setCityd(city);
    };
    /**
     * @param {?} time
     * @param {?} data
     * @return {?}
     */
    AmapTransferWrapper.prototype.leaveAt = /**
     * @param {?} time
     * @param {?} data
     * @return {?}
     */
    function (time, data) {
        this._transfer.leaveAt(time, data);
    };
    /**
     * @return {?}
     */
    AmapTransferWrapper.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._transfer.clear();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AmapTransferWrapper.prototype.searchOnAMAP = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._transfer.searchOnAMAP(obj);
    };
    return AmapTransferWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 步行路径规划服务
 */
var AmapWalkingService = /** @class */ (function () {
    function AmapWalkingService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-walking';
    }
    Object.defineProperty(AmapWalkingService.prototype, "loaded", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._plugin) {
                this._plugin = this.plugins.load('AMap.Walking');
            }
            return this._plugin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapWalkingService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        return this.loaded.then(function () { return new AmapWalkingWrapper(opts); });
    };
    AmapWalkingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapWalkingService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapWalkingService;
}());
/**
 * AmapWalkingWrapper对象将高德原生的Walking对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapWalkingWrapper对象将高德原生的Walking对象提供的方法封装成Promise的实现，更方便回调
 */
AmapWalkingWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapWalkingWrapper, _super);
    function AmapWalkingWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._walking = new AMap.Walking(opts);
        return _this;
    }
    Object.defineProperty(AmapWalkingWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._walking;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听Walking事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听Walking事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapWalkingWrapper.prototype.on = /**
     * 用于侦听Walking事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._walking, event);
    };
    /**
     * @param {?} origin
     * @param {?=} destination
     * @return {?}
     */
    AmapWalkingWrapper.prototype.search = /**
     * @param {?} origin
     * @param {?=} destination
     * @return {?}
     */
    function (origin, destination) {
        var _this = this;
        if (typeof destination !== 'undefined') {
            return new Promise(function (resolve) {
                return _this._walking.search(origin, destination, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
        else {
            return new Promise(function (resolve) {
                return _this._walking.search(origin, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
    };
    /**
     * @return {?}
     */
    AmapWalkingWrapper.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._walking.clear();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AmapWalkingWrapper.prototype.searchOnAMAP = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._walking.searchOnAMAP(obj);
    };
    return AmapWalkingWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 骑行路径规划服务
 */
var AmapRidingService = /** @class */ (function () {
    function AmapRidingService(logger, plugins) {
        this.logger = logger;
        this.plugins = plugins;
        this.TAG = 'amap-riding';
    }
    Object.defineProperty(AmapRidingService.prototype, "loaded", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._plugin) {
                this._plugin = this.plugins.load('AMap.Riding');
            }
            return this._plugin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} opts
     * @return {?}
     */
    AmapRidingService.prototype.of = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        return this.loaded.then(function () { return new AmapRidingWrapper(opts); });
    };
    AmapRidingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AmapRidingService.ctorParameters = function () { return [
        { type: LoggerService, },
        { type: PluginLoaderService, },
    ]; };
    return AmapRidingService;
}());
/**
 * AmapRidingWrapper对象将高德原生的Riding对象提供的方法封装成Promise的实现，更方便回调
 */
var  /**
 * AmapRidingWrapper对象将高德原生的Riding对象提供的方法封装成Promise的实现，更方便回调
 */
AmapRidingWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AmapRidingWrapper, _super);
    function AmapRidingWrapper(opts) {
        var _this = _super.call(this) || this;
        _this._riding = new AMap.Riding(opts);
        return _this;
    }
    Object.defineProperty(AmapRidingWrapper.prototype, "native", {
        get: /**
         * @return {?}
         */
        function () {
            return this._riding;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 用于侦听Riding事件，返回可以被subscribe的Observable对象
     * @param event
     * @returns
     */
    /**
     * 用于侦听Riding事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    AmapRidingWrapper.prototype.on = /**
     * 用于侦听Riding事件，返回可以被subscribe的Observable对象
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.bindEvent(this._riding, event);
    };
    /**
     * @param {?} origin
     * @param {?=} destination
     * @return {?}
     */
    AmapRidingWrapper.prototype.search = /**
     * @param {?} origin
     * @param {?=} destination
     * @return {?}
     */
    function (origin, destination) {
        var _this = this;
        if (typeof destination !== 'undefined') {
            return new Promise(function (resolve) {
                return _this._riding.search(origin, destination, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
        else {
            return new Promise(function (resolve) {
                return _this._riding.search(origin, function (status, result) {
                    resolve({ status: status, result: result });
                });
            });
        }
    };
    /**
     * @return {?}
     */
    AmapRidingWrapper.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._riding.clear();
    };
    return AmapRidingWrapper;
}(EventBinder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxAmapModule = /** @class */ (function () {
    function NgxAmapModule() {
    }
    /**
     * @param {?=} mapAPILoaderConfig
     * @return {?}
     */
    NgxAmapModule.forRoot = /**
     * @param {?=} mapAPILoaderConfig
     * @return {?}
     */
    function (mapAPILoaderConfig) {
        return {
            ngModule: NgxAmapModule,
            providers: [
                WindowRef,
                DocumentRef,
                MapAPILoaderService,
                { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig },
                { provide: LoggerService, useClass: mapAPILoaderConfig.debug ? DebugLoggerService : LoggerService },
                PixelService,
                SizeService,
                IconService,
                LabelService,
                AmapGeocoderService,
                PluginLoaderService,
                AmapAutocompleteService,
                AmapMouseToolService,
                AmapPlaceSearchService,
                AmapDistrictSearchService,
                AmapDrivingService,
                AmapTransferService,
                AmapWalkingService,
                AmapRidingService,
                AmapTruckDrivingService
            ]
        };
    };
    NgxAmapModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NgxAmapComponent,
                        AmapMarkerDirective,
                        AmapInfoWindowComponent,
                        AmapPolylineDirective,
                        AmapToolBarDirective,
                        AmapMarkerClustererDirective,
                        AmapAutocompleteDirective,
                        AmapCircleDirective,
                        AmapCircleMarkerDirective,
                        AmapPolygonDirective,
                        AmapTextDirective,
                        AmapBezierCurveDirective,
                        AmapEllipseDirective,
                        AmapRectangleDirective,
                        AmapHeatmapDirective
                    ],
                    exports: [
                        NgxAmapComponent,
                        AmapMarkerDirective,
                        AmapInfoWindowComponent,
                        AmapPolylineDirective,
                        AmapToolBarDirective,
                        AmapMarkerClustererDirective,
                        AmapAutocompleteDirective,
                        AmapCircleDirective,
                        AmapCircleMarkerDirective,
                        AmapPolygonDirective,
                        AmapTextDirective,
                        AmapBezierCurveDirective,
                        AmapEllipseDirective,
                        AmapRectangleDirective,
                        AmapHeatmapDirective
                    ]
                },] },
    ];
    return NgxAmapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFtYXAuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1hbWFwL3V0aWxzL2Jyb3dzZXItZ2xvYmFscy50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9tYXAtYXBpLWxvYWRlci9tYXAtYXBpLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9sb2dnZXIvZGVidWctbG9nZ2VyLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3V0aWxzL2V2ZW50LWJpbmRlci50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvbWFwLWFwaS9tYXAtYXBpLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL3BpeGVsL3BpeGVsLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL3NpemUvc2l6ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9pY29uL2ljb24uc2VydmljZS50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvbGFiZWwvbGFiZWwuc2VydmljZS50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvbWFya2VyL21hcmtlci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9pbmZvLXdpbmRvdy9pbmZvLXdpbmRvdy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC91dGlscy91dGlscy50cyIsIm5nOi8vbmd4LWFtYXAvdXRpbHMvY2hhbmdlLWZpbHRlci50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL3BvbHlsaW5lL3BvbHlsaW5lLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL3BvbHlnb24vcG9seWdvbi5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy90b29sYmFyL3Rvb2xiYXIuc2VydmljZS50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvbWFya2VyLWNsdXN0ZXJlci9tYXJrZXItY2x1c3RlcmVyLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL2NpcmNsZS9jaXJjbGUuc2VydmljZS50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvY2lyY2xlLW1hcmtlci9jaXJjbGUtbWFya2VyLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL3RleHQvdGV4dC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9iZXppZXItY3VydmUvYmV6aWVyLWN1cnZlLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL2VsbGlwc2UvZWxsaXBzZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9yZWN0YW5nbGUvcmVjdGFuZ2xlLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL2hlYXRtYXAvaGVhdG1hcC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9jb21wb25lbnRzL25neC1hbWFwL25neC1hbWFwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFtYXAvY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93L2FtYXAtaW5mby13aW5kb3cuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYW1hcC9kaXJlY3RpdmVzL2FtYXAtbWFya2VyL2FtYXAtbWFya2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWFtYXAvZGlyZWN0aXZlcy9hbWFwLXBvbHlsaW5lL2FtYXAtcG9seWxpbmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9kaXJlY3RpdmVzL2FtYXAtcG9seWdvbi9hbWFwLXBvbHlnb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9kaXJlY3RpdmVzL2FtYXAtdG9vbGJhci9hbWFwLXRvb2xiYXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9kaXJlY3RpdmVzL2FtYXAtbWFya2VyLWNsdXN0ZXJlci9hbWFwLW1hcmtlci1jbHVzdGVyZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9hbWFwLWdlb2NvZGVyL2FtYXAtZ2VvY29kZXIuc2VydmljZS50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvYW1hcC1hdXRvY29tcGxldGUvYW1hcC1hdXRvY29tcGxldGUuc2VydmljZS50cyIsIm5nOi8vbmd4LWFtYXAvZGlyZWN0aXZlcy9hbWFwLWF1dG9jb21wbGV0ZS9hbWFwLWF1dG9jb21wbGV0ZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL2FtYXAtcGxhY2Utc2VhcmNoL2FtYXAtcGxhY2Utc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL2FtYXAtZGlzdHJpY3Qtc2VhcmNoL2FtYXAtZGlzdHJpY3Qtc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL2RpcmVjdGl2ZXMvYW1hcC1jaXJjbGUvYW1hcC1jaXJjbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9kaXJlY3RpdmVzL2FtYXAtY2lyY2xlLW1hcmtlci9hbWFwLWNpcmNsZS1tYXJrZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9hbWFwLW1vdXNlLXRvb2wvYW1hcC1tb3VzZS10b29sLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL2RpcmVjdGl2ZXMvYW1hcC10ZXh0L2FtYXAtdGV4dC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1hbWFwL2RpcmVjdGl2ZXMvYW1hcC1iZXppZXItY3VydmUvYW1hcC1iZXppZXItY3VydmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9kaXJlY3RpdmVzL2FtYXAtZWxsaXBzZS9hbWFwLWVsbGlwc2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYW1hcC9kaXJlY3RpdmVzL2FtYXAtcmVjdGFuZ2xlL2FtYXAtcmVjdGFuZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWFtYXAvZGlyZWN0aXZlcy9hbWFwLWhlYXRtYXAvYW1hcC1oZWF0bWFwLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWFtYXAvc2VydmljZXMvYW1hcC1kcml2aW5nL2FtYXAtZHJpdmluZy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9hbWFwLXRydWNrLWRyaXZpbmcvYW1hcC10cnVjay1kcml2aW5nLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL2FtYXAtdHJhbnNmZXIvYW1hcC10cmFuc2Zlci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYW1hcC9zZXJ2aWNlcy9hbWFwLXdhbGtpbmcvYW1hcC13YWxraW5nLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL3NlcnZpY2VzL2FtYXAtcmlkaW5nL2FtYXAtcmlkaW5nLnNlcnZpY2UudHMiLCJuZzovL25neC1hbWFwL25neC1hbWFwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dSZWYge1xyXG4gIGdldE5hdGl2ZVdpbmRvdygpIHtcclxuICAgIHJldHVybiB3aW5kb3c7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlZiB7XHJcbiAgZ2V0TmF0aXZlRG9jdW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgaSh0YWc6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zb2xlLmxvZyhgWyR7dGFnfV1gLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGUodGFnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5lcnJvcihgWyR7dGFnfV1gLCAuLi5hcmdzKTtcbiAgfVxuXG4gIHcodGFnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS53YXJuKGBbJHt0YWd9XWAsIC4uLmFyZ3MpO1xuICB9XG5cbiAgZCh0YWc6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAvLyBvbmx5IHN0dWI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9jdW1lbnRSZWYsIFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3V0aWxzL2Jyb3dzZXItZ2xvYmFscyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFwQVBJTG9hZGVyQ29uZmlnIHtcclxuICBhcGlLZXk/OiBzdHJpbmc7XHJcbiAgYXBpVmVyc2lvbj86IHN0cmluZztcclxuICB1cmxQYXRoPzogc3RyaW5nO1xyXG4gIGRlYnVnPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BUF9BUElfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPElNYXBBUElMb2FkZXJDb25maWc+KCduZ3gtYW1hcCBNQVBfQVBJX0NPTkZJRycpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFwQVBJTG9hZGVyU2VydmljZSB7XHJcbiAgVEFHID0gJ21hcC1hcGktbG9hZGVyJztcclxuXHJcbiAgcHJpdmF0ZSBfZGVmYXVsdFVybCA9ICdodHRwczovL3dlYmFwaS5hbWFwLmNvbS9tYXBzJztcclxuICBwcml2YXRlIF9kZWZhdWx0VmVyc2lvbiA9ICcxLjQuMTEnO1xyXG4gIHByaXZhdGUgX2NvbmZpZzogSU1hcEFQSUxvYWRlckNvbmZpZztcclxuICBwcml2YXRlIF9kb2N1bWVudFJlZjogRG9jdW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBfd2luZG93UmVmOiBXaW5kb3dSZWY7XHJcbiAgcHJpdmF0ZSBfbWFwTG9hZGVkOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BUF9BUElfQ09ORklHKSBjb25maWc6IGFueSxcclxuICAgICAgICAgICAgICBkOiBEb2N1bWVudFJlZixcclxuICAgICAgICAgICAgICB3OiBXaW5kb3dSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UpIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIHRoaXMuX3dpbmRvd1JlZiA9IHc7XHJcbiAgICB0aGlzLl9kb2N1bWVudFJlZiA9IGQ7XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgaWYgKHRoaXMuX21hcExvYWRlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbWFwTG9hZGVkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2dnZXIuZCh0aGlzLlRBRywgJ2xvYWRpbmcgQU1hcCBhcGkuLi4nKTtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFja05hbWUgPSBgbmd4QU1hcEFQSUxvYWRlcmA7XHJcbiAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9kb2N1bWVudFJlZi5nZXROYXRpdmVEb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgc2NyaXB0LnNyYyA9IHRoaXMuZ2V0U3JjRnJvbUNvbmZpZyhjYWxsYmFja05hbWUpO1xyXG5cclxuICAgIHRoaXMuX21hcExvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAoPGFueT50aGlzLl93aW5kb3dSZWYuZ2V0TmF0aXZlV2luZG93KCkpW2NhbGxiYWNrTmFtZV0gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZCh0aGlzLlRBRywgJ2xvYWRpbmcgQU1hcCBhcGkgQ09NUExFVEUnKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogRXZlbnQpID0+IHsgcmVqZWN0KGVycm9yKTsgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2RvY3VtZW50UmVmLmdldE5hdGl2ZURvY3VtZW50KCkuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcExvYWRlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3JjRnJvbUNvbmZpZyhjYWxsYmFja05hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXJsQmFzZSA9IHRoaXMuX2NvbmZpZy51cmxQYXRoIHx8IHRoaXMuX2RlZmF1bHRVcmw7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZyB8IEFycmF5PHN0cmluZz59ID0ge1xyXG4gICAgICB2OiB0aGlzLl9jb25maWcuYXBpVmVyc2lvbiB8fCB0aGlzLl9kZWZhdWx0VmVyc2lvbixcclxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrTmFtZSxcclxuICAgICAga2V5OiB0aGlzLl9jb25maWcuYXBpS2V5XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKGs6IHN0cmluZykgPT4gcXVlcnlQYXJhbXNba10gIT0gbnVsbClcclxuICAgICAgLmZpbHRlcigoazogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGVtcHR5IGFycmF5c1xyXG4gICAgICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShxdWVyeVBhcmFtc1trXSkgfHxcclxuICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkocXVlcnlQYXJhbXNba10pICYmIHF1ZXJ5UGFyYW1zW2tdLmxlbmd0aCA+IDApO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChrOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBqb2luIGFycmF5cyBhcyBjb21tYSBzZXBlcmF0ZWQgc3RyaW5nc1xyXG4gICAgICAgIGNvbnN0IGkgPSBxdWVyeVBhcmFtc1trXTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHtrZXk6IGssIHZhbHVlOiBpLmpvaW4oJywnKX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7a2V5OiBrLCB2YWx1ZTogcXVlcnlQYXJhbXNba119O1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChlbnRyeToge2tleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfSkgPT4gYCR7ZW50cnkua2V5fT0ke2VudHJ5LnZhbHVlfWApXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcblxyXG4gICAgcmV0dXJuIGAke3VybEJhc2V9PyR7cGFyYW1zfWA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlYnVnTG9nZ2VyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBpKHRhZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIGNvbnNvbGUubG9nKGBbJHt0YWd9XWAsIC4uLmFyZ3MpO1xuICB9XG5cbiAgZSh0YWc6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zb2xlLmVycm9yKGBbJHt0YWd9XWAsIC4uLmFyZ3MpO1xuICB9XG5cbiAgdyh0YWc6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zb2xlLndhcm4oYFske3RhZ31dYCwgLi4uYXJncyk7XG4gIH1cblxuICBkKHRhZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIGNvbnNvbGUubG9nKGBbJHt0YWd9XWAsIC4uLmFyZ3MpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcyB9IGZyb20gJy4uL3R5cGVzL2NsYXNzJztcclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRCaW5kZXIge1xyXG5cclxuICBiaW5kRXZlbnQ8VD4odGFyZ2V0OiBQcm9taXNlPFQ+IHwgVCwgZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgIGxldCBsaXN0ZW5lclByb21pc2UgPSB0YXJnZXQudGhlbihtID0+IHtcclxuICAgICAgICAgIHJldHVybiBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKG0sIGV2ZW50LCBlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvYnNlcnZlci5uZXh0KGUpKTtcclxuICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgbGlzdGVuZXJQcm9taXNlLnRoZW4obGlzdGVuZXIgPT4ge1xyXG4gICAgICAgICAgICBBTWFwLmV2ZW50LnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgbGlzdGVuZXJQcm9taXNlID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKHRhcmdldCwgZXZlbnQsIGUgPT4ge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvYnNlcnZlci5uZXh0KGUpKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIEFNYXAuZXZlbnQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hcEFQSUxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9tYXAtYXBpLWxvYWRlci9tYXAtYXBpLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgTWFwIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXBBUElTZXJ2aWNlIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIFRBRyA9ICdtYXAtYXBpJztcclxuICBwcml2YXRlIF9tYXA6IE1hcDtcclxuICBwcml2YXRlIF9tYXBQcm9taXNlOiBQcm9taXNlPE1hcD47XHJcbiAgcHJpdmF0ZSBfbWFwUmVzb2x2ZXI6IChtYXA/OiBNYXApID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGVyOiBNYXBBUElMb2FkZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX21hcFByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX21hcFJlc29sdmVyID0gcmVzb2x2ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXAoZWw6IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBNYXBPcHRpb25zKTogUHJvbWlzZTxNYXA+IHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX21hcCA9IG5ldyBBTWFwLk1hcChlbCwgb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX21hcFJlc29sdmVyKHRoaXMuX21hcCk7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmQodGhpcy5UQUcsICduZXcgbWFwIGNyZWF0ZWQnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuX21hcDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveU1hcCgpIHtcclxuICAgIHRoaXMuX21hcFByb21pc2UudGhlbihtYXAgPT4ge1xyXG4gICAgICBtYXAuY2xlYXJNYXAoKTtcclxuICAgICAgbWFwLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1hcCgpOiBQcm9taXNlPE1hcD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcFByb21pc2U7XHJcbiAgfVxyXG5cclxuICBiaW5kTWFwRXZlbnRzKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmluZEV2ZW50KHRoaXMuX21hcFByb21pc2UsIGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUGl4ZWwgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIFBpeGVsIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGl4ZWxTZXJ2aWNlIHtcclxuICBUQUcgPSAncGl4ZWwtc2VydmljZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBjcmVhdGUob3B0aW9uczogSVBpeGVsLCBuYW1lPzogc3RyaW5nKTogUGl4ZWwge1xyXG4gICAgaWYgKHRoaXMudmVyaWZ5KG9wdGlvbnMsIG5hbWUpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgQU1hcC5QaXhlbChvcHRpb25zLngsIG9wdGlvbnMueSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KHBpeGVsOiBJUGl4ZWwsIG5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2YgcGl4ZWwueCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHBpeGVsLnkgIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmUoYCR7bmFtZSB8fCAncGl4ZWwnfSBzaG91bGQgaGF2ZSB0eXBlIHt4OiBudW1iZXIsIHk6IG51bWJlcn1gKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVNpemUgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIFNpemUgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaXplU2VydmljZSB7XHJcbiAgVEFHID0gJ3NpemUtc2VydmljZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBjcmVhdGUob3B0aW9uczogSVNpemUsIG5hbWU/OiBzdHJpbmcpOiBTaXplIHtcclxuICAgIGlmICh0aGlzLnZlcmlmeShvcHRpb25zLCBuYW1lKSkge1xyXG4gICAgICByZXR1cm4gbmV3IEFNYXAuU2l6ZShvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KHNpemU6IElTaXplLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIHNpemUud2lkdGggIT09ICdudW1iZXInIHx8IHR5cGVvZiBzaXplLmhlaWdodCAhPT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZShgJHtuYW1lIHx8ICdzaXplJ30gc2hvdWxkIGhhdmUgdHlwZSB7d2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJ9YCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElJY29uIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBJY29uIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGl4ZWxTZXJ2aWNlIH0gZnJvbSAnLi4vcGl4ZWwvcGl4ZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFNpemVTZXJ2aWNlIH0gZnJvbSAnLi4vc2l6ZS9zaXplLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJY29uU2VydmljZSB7XHJcbiAgVEFHID0gJ2ljb24tc2VydmljZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBpeGVsOiBQaXhlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNpemU6IFNpemVTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjcmVhdGUob3B0aW9uczogc3RyaW5nfEljb258SUljb24sIG5hbWU/OiBzdHJpbmcpOiBzdHJpbmd8SWNvbiB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKDxJSWNvbj5vcHRpb25zKS5zaXplKSB7XHJcbiAgICAgIHJldHVybiA8SWNvbj5vcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpY29uT3B0aW9uID0gPElJY29uPm9wdGlvbnM7XHJcbiAgICBpZiAoaWNvbk9wdGlvbi5zaXplKSB7XHJcbiAgICAgIGljb25PcHRpb24uc2l6ZSA9IHRoaXMuc2l6ZS5jcmVhdGUoaWNvbk9wdGlvbi5zaXplLCBgJHtuYW1lIHx8ICdpY29uJ30uc2l6ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpY29uT3B0aW9uLmltYWdlU2l6ZSkge1xyXG4gICAgICBpY29uT3B0aW9uLmltYWdlU2l6ZSA9IHRoaXMuc2l6ZS5jcmVhdGUoaWNvbk9wdGlvbi5zaXplLCBgJHtuYW1lIHx8ICdpY29uJ30uaW1hZ2VTaXplYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGljb25PcHRpb24uaW1hZ2VPZmZzZXQpIHtcclxuICAgICAgaWNvbk9wdGlvbi5pbWFnZU9mZnNldCA9IHRoaXMucGl4ZWwuY3JlYXRlKGljb25PcHRpb24uaW1hZ2VPZmZzZXQsIGAke25hbWUgfHwgJ2ljb24nfS5pbWFnZU9mZnNldGApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaWNvbk9wdGlvbi5zaXplKSB7XHJcbiAgICAgIGRlbGV0ZSBpY29uT3B0aW9uLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpY29uT3B0aW9uLmltYWdlU2l6ZSkge1xyXG4gICAgICBkZWxldGUgaWNvbk9wdGlvbi5pbWFnZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpY29uT3B0aW9uLmltYWdlT2Zmc2V0KSB7XHJcbiAgICAgIGRlbGV0ZSBpY29uT3B0aW9uLmltYWdlT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQU1hcC5JY29uKGljb25PcHRpb24pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElMYWJlbCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcyB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpeGVsU2VydmljZSB9IGZyb20gJy4uL3BpeGVsL3BpeGVsLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYWJlbFNlcnZpY2Uge1xyXG4gIFRBRyA9ICdsYWJlbC1zZXJ2aWNlJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsIHByaXZhdGUgcGl4ZWw6IFBpeGVsU2VydmljZSkge31cclxuXHJcbiAgY3JlYXRlKG9wdGlvbnM6IElMYWJlbCwgbmFtZT86IHN0cmluZyk6IElMYWJlbCB7XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuY29udGVudCxcclxuICAgICAgICBvZmZzZXQ6IHRoaXMucGl4ZWwuY3JlYXRlKG9wdGlvbnMub2Zmc2V0LCBgJHtuYW1lIHx8ICdsYWJlbCd9Lm9mZnNldGApXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtlck9wdGlvbnMsIElQaXhlbCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgTWFya2VyLCBNYXAsIEljb24gfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwLWFwaS9tYXAtYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaXhlbFNlcnZpY2UgfSBmcm9tICcuLi9waXhlbC9waXhlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuLi9pY29uL2ljb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4uL2xhYmVsL2xhYmVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hcmtlclNlcnZpY2UgZXh0ZW5kcyBFdmVudEJpbmRlciB7XHJcbiAgVEFHID0gJ21hcmtlci1zZXJ2aWNlJztcclxuICBwcml2YXRlIF9tYXA6IFByb21pc2U8TWFwPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQVBJU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwaXhlbDogUGl4ZWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpY29uOiBJY29uU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFiZWw6IExhYmVsU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX21hcCA9IG1hcC5tYXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUob3B0aW9uczogTWFya2VyT3B0aW9ucywgYWRkVG9NYXAgPSB0cnVlKTogUHJvbWlzZTxNYXJrZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4ge1xyXG4gICAgICBpZiAob3B0aW9ucy5vZmZzZXQpIHtcclxuICAgICAgICBvcHRpb25zLm9mZnNldCA9IHRoaXMucGl4ZWwuY3JlYXRlKG9wdGlvbnMub2Zmc2V0LCAnb2Zmc2V0Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmljb24pIHtcclxuICAgICAgICBvcHRpb25zLmljb24gPSB0aGlzLmljb24uY3JlYXRlKG9wdGlvbnMuaWNvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLnNoYWRvdykge1xyXG4gICAgICAgIG9wdGlvbnMuc2hhZG93ID0gPEljb24+dGhpcy5pY29uLmNyZWF0ZShvcHRpb25zLnNoYWRvdywgJ3NoYWRvdycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5sYWJlbCkge1xyXG4gICAgICAgIG9wdGlvbnMubGFiZWwgPSB0aGlzLmxhYmVsLmNyZWF0ZShvcHRpb25zLmxhYmVsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFvcHRpb25zLm9mZnNldCkgIHsgZGVsZXRlIG9wdGlvbnMub2Zmc2V0OyB9XHJcbiAgICAgIGlmICghb3B0aW9ucy5pY29uKSAgICB7IGRlbGV0ZSBvcHRpb25zLmljb247IH1cclxuICAgICAgaWYgKCFvcHRpb25zLnNoYWRvdykgIHsgZGVsZXRlIG9wdGlvbnMuc2hhZG93OyB9XHJcbiAgICAgIGlmICghb3B0aW9ucy5sYWJlbCkgICB7IGRlbGV0ZSBvcHRpb25zLmxhYmVsOyB9XHJcblxyXG4gICAgICBpZiAoYWRkVG9NYXApIHtcclxuICAgICAgICBvcHRpb25zLm1hcCA9IG1hcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IEFNYXAuTWFya2VyKG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KG1hcmtlcjogUHJvbWlzZTxNYXJrZXI+KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbWFya2VyLnRoZW4obSA9PiB7XHJcbiAgICAgIG0uc2V0TWFwKG51bGwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmZvV2luZG93T3B0aW9ucywgSVBpeGVsLCBJTG5nTGF0IH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBJbmZvV2luZG93LCBNYXAsIEljb24sIExuZ0xhdCB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSVNlcnZpY2UgfSBmcm9tICcuLi9tYXAtYXBpL21hcC1hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpeGVsU2VydmljZSB9IGZyb20gJy4uL3BpeGVsL3BpeGVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaXplU2VydmljZSB9IGZyb20gJy4uL3NpemUvc2l6ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbmZvV2luZG93U2VydmljZSBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBUQUcgPSAnaW5mby13aW5kb3ctc2VydmljZSc7XHJcbiAgcHJpdmF0ZSBfbWFwOiBQcm9taXNlPE1hcD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcEFQSVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgcGl4ZWw6IFBpeGVsU2VydmljZSxcclxuICAgIHByaXZhdGUgc2l6ZTogU2l6ZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9tYXAgPSBtYXAubWFwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG9wdGlvbnM6IEluZm9XaW5kb3dPcHRpb25zKTogUHJvbWlzZTxJbmZvV2luZG93PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IHtcclxuICAgICAgaWYgKG9wdGlvbnMub2Zmc2V0KSB7XHJcbiAgICAgICAgb3B0aW9ucy5vZmZzZXQgPSB0aGlzLnBpeGVsLmNyZWF0ZShvcHRpb25zLm9mZnNldCwgJ29mZnNldCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgb3B0aW9ucy5zaXplID0gdGhpcy5zaXplLmNyZWF0ZShvcHRpb25zLnNpemUsICdzaXplJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgQU1hcC5JbmZvV2luZG93KG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KGluZm9XaW5kb3c6IFByb21pc2U8SW5mb1dpbmRvdz4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBpbmZvV2luZG93LnRoZW4odyA9PiB7XHJcbiAgICAgIHcuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbihpbmZvV2luZG93OiBJbmZvV2luZG93LCBwb3NpdGlvbj86IElMbmdMYXQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4ge1xyXG4gICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBwb3NpdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICBzdGF0aWMgZ2V0T3B0aW9uc0ZvcjxUPihjb21wb25lbnQ6IGFueSwga2V5czogc3RyaW5nW10pOiBUIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoY29tcG9uZW50W2tleV0gIT09IHVuZGVmaW5lZCAmJiBjb21wb25lbnRba2V5XSAhPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnNba2V5XSA9IGNvbXBvbmVudFtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZW1wdHkgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VGaWx0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG5cclxuICBzdGF0aWMgb2YoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VGaWx0ZXIoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBub3RFbXB0eTxUPihrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgaWYgKHRoaXMuX2NoYW5nZXNba2V5XSkge1xyXG4gICAgICBjb25zdCB2YWx1ZTogVCA9IHRoaXMuX2NoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBvZih2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbXB0eSgpO1xyXG4gIH1cclxuXHJcbiAgaGFzPFQ+KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICBpZiAodGhpcy5fY2hhbmdlc1trZXldKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlOiBUID0gdGhpcy5fY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgcmV0dXJuIG9mKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbXB0eSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcyB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSUxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9tYXAtYXBpLWxvYWRlci9tYXAtYXBpLWxvYWRlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGx1Z2luTG9hZGVyU2VydmljZSB7XHJcbiAgVEFHID0gJ3BsdWdpbi1sb2FkZXInO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvYWRlcjogTWFwQVBJTG9hZGVyU2VydmljZSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UpIHt9XHJcblxyXG4gIGxvYWQobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRoaXMubG9nZ2VyLmQodGhpcy5UQUcsICdsb2FkaW5nIHBsdWdpbjonLCBuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZCh0aGlzLlRBRywgJ2xvYWRpbmcgcGx1Z2luOicsIG5hbWUsICdDT01QTEVURScpO1xyXG4gICAgICAgIEFNYXAucGx1Z2luKG5hbWUsICgpID0+IHJlc29sdmUoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBQb2x5bGluZSwgTWFwLCBQb2x5RWRpdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwQVBJU2VydmljZSB9IGZyb20gJy4uL21hcC1hcGkvbWFwLWFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5pbXBvcnQgeyBQb2x5bGluZU9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb2x5bGluZVNlcnZpY2UgZXh0ZW5kcyBFdmVudEJpbmRlciB7XHJcbiAgVEFHID0gJ3BvbHlsaW5lLXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG4gIHByaXZhdGUgX2VkaXRvclBsdWdpbjogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQVBJU2VydmljZSxcclxuICAgIHByaXZhdGUgcGx1Z2luczogUGx1Z2luTG9hZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbWFwID0gbWFwLm1hcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IHtcclxuICAgICAgb3B0aW9ucy5tYXAgPSBtYXA7XHJcbiAgICAgIHJldHVybiBuZXcgQU1hcC5Qb2x5bGluZShvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShwb2x5bGluZTogUHJvbWlzZTxQb2x5bGluZT4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBwb2x5bGluZS50aGVuKG0gPT4ge1xyXG4gICAgICBtLnNldE1hcChudWxsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEVkaXRvcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5fZWRpdG9yUGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX2VkaXRvclBsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLlBvbHlFZGl0b3InKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWRpdG9yUGx1Z2luO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWRpdG9yKHA6IFBvbHlsaW5lKTogUHJvbWlzZTxQb2x5RWRpdG9yPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IG5ldyBBTWFwLlBvbHlFZGl0b3IobWFwLCBwKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBQb2x5Z29uLCBNYXAsIFBvbHlFZGl0b3J9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSVNlcnZpY2UgfSBmcm9tICcuLi9tYXAtYXBpL21hcC1hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50QmluZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQtYmluZGVyJztcclxuaW1wb3J0IHsgUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uU2VydmljZSBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBUQUcgPSAncG9seWdvbi1zZXJ2aWNlJztcclxuICBwcml2YXRlIF9tYXA6IFByb21pc2U8TWFwPjtcclxuICBwcml2YXRlIF9lZGl0b3JQbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcEFQSVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX21hcCA9IG1hcC5tYXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUob3B0aW9uczogUG9seWdvbk9wdGlvbnMpOiBQcm9taXNlPFBvbHlnb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4ge1xyXG4gICAgICBvcHRpb25zLm1hcCA9IG1hcDtcclxuICAgICAgcmV0dXJuIG5ldyBBTWFwLlBvbHlnb24ob3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3kocG9seWdvbjogUHJvbWlzZTxQb2x5Z29uPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHBvbHlnb24udGhlbihtID0+IHtcclxuICAgICAgbS5zZXRNYXAobnVsbCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRFZGl0b3IoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuX2VkaXRvclBsdWdpbikge1xyXG4gICAgICB0aGlzLl9lZGl0b3JQbHVnaW4gPSB0aGlzLnBsdWdpbnMubG9hZCgnQU1hcC5Qb2x5RWRpdG9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvclBsdWdpbjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVkaXRvcihwOiBQb2x5Z29uKTogUHJvbWlzZTxQb2x5RWRpdG9yPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IG5ldyBBTWFwLlBvbHlFZGl0b3IobWFwLCBwKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBUb29sQmFyLCBNYXAgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwLWFwaS9tYXAtYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcbmltcG9ydCB7IFRvb2xiYXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUGl4ZWxTZXJ2aWNlIH0gZnJvbSAnLi4vcGl4ZWwvcGl4ZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsdWdpbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9wbHVnaW4tbG9hZGVyL3BsdWdpbi1sb2FkZXIuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvb2xCYXJTZXJ2aWNlIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIFRBRyA9ICd0b29sLWJhci1zZXJ2aWNlJztcclxuICBwcml2YXRlIF9tYXA6IFByb21pc2U8TWFwPjtcclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQVBJU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwaXhlbHM6IFBpeGVsU2VydmljZSxcclxuICAgIHByaXZhdGUgcGx1Z2luczogUGx1Z2luTG9hZGVyU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX21hcCA9IG1hcC5tYXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUob3B0aW9uczogVG9vbGJhck9wdGlvbnMpOiBQcm9taXNlPFRvb2xCYXI+IHtcclxuICAgIGlmICghdGhpcy5fcGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX3BsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLlRvb2xCYXInKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcGx1Z2luLnRoZW4oKCkgPT4gdGhpcy5fbWFwKVxyXG4gICAgICAudGhlbihtYXAgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25zLm9mZnNldCkge1xyXG4gICAgICAgICAgb3B0aW9ucy5vZmZzZXQgPSB0aGlzLnBpeGVscy5jcmVhdGUob3B0aW9ucy5vZmZzZXQsICdvZmZzZXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb3B0aW9ucy5vZmZzZXQpIHsgZGVsZXRlIG9wdGlvbnMub2Zmc2V0OyB9XHJcbiAgICAgICAgY29uc3QgdG9vbGJhciA9IG5ldyBBTWFwLlRvb2xCYXIob3B0aW9ucyk7XHJcbiAgICAgICAgbWFwLmFkZENvbnRyb2wodG9vbGJhcik7XHJcbiAgICAgICAgcmV0dXJuIHRvb2xiYXI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSh0b29sYmFyOiBQcm9taXNlPFRvb2xCYXI+KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IHRvb2xiYXIudGhlbih0ID0+IG1hcC5yZW1vdmVDb250cm9sKHQpKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFya2VyQ2x1c3RlcmVyT3B0aW9ucywgSVBpeGVsLCBJU2l6ZSwgSUNsdXN0ZXJTdHlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgTWFya2VyQ2x1c3RlcmVyLCBNYXAsIENsdXN0ZXJTdHlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSVNlcnZpY2UgfSBmcm9tICcuLi9tYXAtYXBpL21hcC1hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpeGVsU2VydmljZSB9IGZyb20gJy4uL3BpeGVsL3BpeGVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaXplU2VydmljZSB9IGZyb20gJy4uL3NpemUvc2l6ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXJDbHVzdGVyZXJTZXJ2aWNlIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIFRBRyA9ICdtYXJrZXItY2x1c3RlcmVyLXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG4gIHByaXZhdGUgX3BsdWdpbjogUHJvbWlzZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFwOiBNYXBBUElTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBpeGVsOiBQaXhlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNpemU6IFNpemVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbHVnaW5zOiBQbHVnaW5Mb2FkZXJTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbWFwID0gbWFwLm1hcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShvcHRpb25zOiBNYXJrZXJDbHVzdGVyZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXJDbHVzdGVyZXI+IHtcclxuICAgIGlmICghdGhpcy5fcGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX3BsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLk1hcmtlckNsdXN0ZXJlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9wbHVnaW4udGhlbigoKSA9PiB0aGlzLl9tYXApXHJcbiAgICAgIC50aGVuKG1hcCA9PiB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc3R5bGVzKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnN0eWxlcyA9IG9wdGlvbnMuc3R5bGVzLm1hcChzdHlsZSA9PiB0aGlzLmNyZWF0ZVN0eWxlKHN0eWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQU1hcC5NYXJrZXJDbHVzdGVyZXIobWFwLCBbXSwgb3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShjbHVzdGVyOiBQcm9taXNlPE1hcmtlckNsdXN0ZXJlcj4pIHtcclxuICAgIHJldHVybiBjbHVzdGVyLnRoZW4oYyA9PiB7XHJcbiAgICAgIGMuY2xlYXJNYXJrZXJzKCk7XHJcbiAgICAgIGMuc2V0TWFwKG51bGwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTdHlsZShzdHlsZTogSUNsdXN0ZXJTdHlsZSk6IENsdXN0ZXJTdHlsZSB7XHJcbiAgICBpZiAoc3R5bGUuc2l6ZSkge1xyXG4gICAgICBzdHlsZS5zaXplID0gdGhpcy5zaXplLmNyZWF0ZShzdHlsZS5zaXplLCAnc2l6ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHlsZS5vZmZzZXQpIHtcclxuICAgICAgc3R5bGUub2Zmc2V0ID0gdGhpcy5waXhlbC5jcmVhdGUoc3R5bGUub2Zmc2V0LCAnb2Zmc2V0Jyk7XHJcbiAgICAgIGlmICghc3R5bGUub2Zmc2V0KSB7IGRlbGV0ZSBzdHlsZS5vZmZzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3R5bGUuaW1hZ2VPZmZzZXQpIHtcclxuICAgICAgc3R5bGUuaW1hZ2VPZmZzZXQgPSB0aGlzLnBpeGVsLmNyZWF0ZShzdHlsZS5pbWFnZU9mZnNldCwgJ2ltYWdlT2Zmc2V0Jyk7XHJcbiAgICAgIGlmICghc3R5bGUuaW1hZ2VPZmZzZXQpIHsgZGVsZXRlIHN0eWxlLmltYWdlT2Zmc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxDbHVzdGVyU3R5bGU+c3R5bGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBDaXJjbGUsIE1hcCwgQ2lyY2xlRWRpdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwQVBJU2VydmljZSB9IGZyb20gJy4uL21hcC1hcGkvbWFwLWFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5pbXBvcnQgeyBDaXJjbGVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUGx1Z2luTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL3BsdWdpbi1sb2FkZXIvcGx1Z2luLWxvYWRlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlU2VydmljZSBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBUQUcgPSAnY2lyY2xlLXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG4gIHByaXZhdGUgX2VkaXRvclBsdWdpbjogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQVBJU2VydmljZSxcclxuICAgIHByaXZhdGUgcGx1Z2luczogUGx1Z2luTG9hZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbWFwID0gbWFwLm1hcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShvcHRpb25zOiBDaXJjbGVPcHRpb25zKTogUHJvbWlzZTxDaXJjbGU+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4ge1xyXG4gICAgICBvcHRpb25zLm1hcCA9IG1hcDtcclxuICAgICAgcmV0dXJuIG5ldyBBTWFwLkNpcmNsZShvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShjaXJjbGU6IFByb21pc2U8Q2lyY2xlPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIGNpcmNsZS50aGVuKG0gPT4ge1xyXG4gICAgICBtLnNldE1hcChudWxsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEVkaXRvcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5fZWRpdG9yUGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX2VkaXRvclBsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLkNpcmNsZUVkaXRvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9lZGl0b3JQbHVnaW47XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFZGl0b3IoYzogQ2lyY2xlKTogUHJvbWlzZTxDaXJjbGVFZGl0b3I+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4gbmV3IEFNYXAuQ2lyY2xlRWRpdG9yKG1hcCwgYykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgQ2lyY2xlTWFya2VyLCBNYXAgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwLWFwaS9tYXAtYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcbmltcG9ydCB7IENpcmNsZU1hcmtlck9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGVNYXJrZXJTZXJ2aWNlIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIFRBRyA9ICdjaXJjbGUtbWFya2VyLXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFwOiBNYXBBUElTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9tYXAgPSBtYXAubWFwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG9wdGlvbnM6IENpcmNsZU1hcmtlck9wdGlvbnMpOiBQcm9taXNlPENpcmNsZU1hcmtlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKG1hcCA9PiB7XHJcbiAgICAgIG9wdGlvbnMubWFwID0gbWFwO1xyXG4gICAgICByZXR1cm4gbmV3IEFNYXAuQ2lyY2xlTWFya2VyKG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KGNpcmNsZTogUHJvbWlzZTxDaXJjbGVNYXJrZXI+KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gY2lyY2xlLnRoZW4obSA9PiB7XHJcbiAgICAgIG0uc2V0TWFwKG51bGwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dE9wdGlvbnMsIElQaXhlbCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgVGV4dCwgTWFwLCBJY29uIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwQVBJU2VydmljZSB9IGZyb20gJy4uL21hcC1hcGkvbWFwLWFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGl4ZWxTZXJ2aWNlIH0gZnJvbSAnLi4vcGl4ZWwvcGl4ZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEljb25TZXJ2aWNlIH0gZnJvbSAnLi4vaWNvbi9pY29uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRleHRTZXJ2aWNlIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIFRBRyA9ICd0ZXh0LXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFwOiBNYXBBUElTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBpeGVsOiBQaXhlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGljb246IEljb25TZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbWFwID0gbWFwLm1hcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShvcHRpb25zOiBUZXh0T3B0aW9ucywgYWRkVG9NYXAgPSB0cnVlKTogUHJvbWlzZTxUZXh0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IHtcclxuICAgICAgaWYgKG9wdGlvbnMub2Zmc2V0KSB7XHJcbiAgICAgICAgb3B0aW9ucy5vZmZzZXQgPSB0aGlzLnBpeGVsLmNyZWF0ZShvcHRpb25zLm9mZnNldCwgJ29mZnNldCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5zaGFkb3cpIHtcclxuICAgICAgICBvcHRpb25zLnNoYWRvdyA9IDxJY29uPnRoaXMuaWNvbi5jcmVhdGUob3B0aW9ucy5zaGFkb3csICdzaGFkb3cnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFvcHRpb25zLm9mZnNldCkgIHsgZGVsZXRlIG9wdGlvbnMub2Zmc2V0OyB9XHJcbiAgICAgIGlmICghb3B0aW9ucy5zaGFkb3cpICB7IGRlbGV0ZSBvcHRpb25zLnNoYWRvdzsgfVxyXG5cclxuICAgICAgaWYgKGFkZFRvTWFwKSB7XHJcbiAgICAgICAgb3B0aW9ucy5tYXAgPSBtYXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ldyBBTWFwLlRleHQob3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3kodGV4dDogUHJvbWlzZTxUZXh0Pik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRleHQudGhlbihtID0+IHtcclxuICAgICAgbS5zZXRNYXAobnVsbCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIEJlemllckN1cnZlLCBNYXAgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwLWFwaS9tYXAtYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcbmltcG9ydCB7IEJlemllckN1cnZlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBsdWdpbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9wbHVnaW4tbG9hZGVyL3BsdWdpbi1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlemllckN1cnZlRWRpdG9yLCBCZXppZXJDdXJ2ZUVkaXRvck9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcy9hbWFwLmVkaXRvcic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJlemllckN1cnZlU2VydmljZSBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBUQUcgPSAnYmV6aWVyLWN1cnZlLXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG4gIHByaXZhdGUgX2VkaXRvclBsdWdpbjogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQVBJU2VydmljZSxcclxuICAgIHByaXZhdGUgcGx1Z2luczogUGx1Z2luTG9hZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbWFwID0gbWFwLm1hcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShvcHRpb25zOiBCZXppZXJDdXJ2ZU9wdGlvbnMpOiBQcm9taXNlPEJlemllckN1cnZlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IHtcclxuICAgICAgb3B0aW9ucy5tYXAgPSBtYXA7XHJcbiAgICAgIHJldHVybiBuZXcgQU1hcC5CZXppZXJDdXJ2ZShvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShiZXppZXJDdXJ2ZTogUHJvbWlzZTxCZXppZXJDdXJ2ZT4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBiZXppZXJDdXJ2ZS50aGVuKG0gPT4ge1xyXG4gICAgICBtLnNldE1hcChudWxsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEVkaXRvcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5fZWRpdG9yUGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX2VkaXRvclBsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLkJlemllckN1cnZlRWRpdG9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvclBsdWdpbjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVkaXRvcihjOiBCZXppZXJDdXJ2ZSwgb3B0czogQmV6aWVyQ3VydmVFZGl0b3JPcHRpb25zKTogUHJvbWlzZTxCZXppZXJDdXJ2ZUVkaXRvcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKG1hcCA9PiBuZXcgQU1hcC5CZXppZXJDdXJ2ZUVkaXRvcihtYXAsIGMsIG9wdHMpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIEVsbGlwc2UsIE1hcCwgRWxsaXBzZUVkaXRvciB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSVNlcnZpY2UgfSBmcm9tICcuLi9tYXAtYXBpL21hcC1hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50QmluZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQtYmluZGVyJztcclxuaW1wb3J0IHsgRWxsaXBzZU9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbGxpcHNlU2VydmljZSBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBUQUcgPSAnZWxsaXBzZS1zZXJ2aWNlJztcclxuICBwcml2YXRlIF9tYXA6IFByb21pc2U8TWFwPjtcclxuICBwcml2YXRlIF9lZGl0b3JQbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcEFQSVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX21hcCA9IG1hcC5tYXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUob3B0aW9uczogRWxsaXBzZU9wdGlvbnMpOiBQcm9taXNlPEVsbGlwc2U+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4ge1xyXG4gICAgICBvcHRpb25zLm1hcCA9IG1hcDtcclxuICAgICAgcmV0dXJuIG5ldyBBTWFwLkVsbGlwc2Uob3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koZWxsaXBzZTogUHJvbWlzZTxFbGxpcHNlPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIGVsbGlwc2UudGhlbihtID0+IHtcclxuICAgICAgbS5zZXRNYXAobnVsbCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRFZGl0b3IoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuX2VkaXRvclBsdWdpbikge1xyXG4gICAgICB0aGlzLl9lZGl0b3JQbHVnaW4gPSB0aGlzLnBsdWdpbnMubG9hZCgnQU1hcC5FbGxpcHNlRWRpdG9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvclBsdWdpbjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVkaXRvcihlOiBFbGxpcHNlKTogUHJvbWlzZTxFbGxpcHNlRWRpdG9yPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4obWFwID0+IG5ldyBBTWFwLkVsbGlwc2VFZGl0b3IobWFwLCBlKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBSZWN0YW5nbGUsIE1hcCwgUmVjdGFuZ2xlRWRpdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwQVBJU2VydmljZSB9IGZyb20gJy4uL21hcC1hcGkvbWFwLWFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5pbXBvcnQgeyBSZWN0YW5nbGVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUGx1Z2luTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL3BsdWdpbi1sb2FkZXIvcGx1Z2luLWxvYWRlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlU2VydmljZSBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBUQUcgPSAncmVjdGFuZ2xlLXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG4gIHByaXZhdGUgX2VkaXRvclBsdWdpbjogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQVBJU2VydmljZSxcclxuICAgIHByaXZhdGUgcGx1Z2luczogUGx1Z2luTG9hZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbWFwID0gbWFwLm1hcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShvcHRpb25zOiBSZWN0YW5nbGVPcHRpb25zKTogUHJvbWlzZTxSZWN0YW5nbGU+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4ge1xyXG4gICAgICBvcHRpb25zLm1hcCA9IG1hcDtcclxuICAgICAgcmV0dXJuIG5ldyBBTWFwLlJlY3RhbmdsZShvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShyZWN0YW5nbGU6IFByb21pc2U8UmVjdGFuZ2xlPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHJlY3RhbmdsZS50aGVuKG0gPT4ge1xyXG4gICAgICBtLnNldE1hcChudWxsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEVkaXRvcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5fZWRpdG9yUGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX2VkaXRvclBsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLlJlY3RhbmdsZUVkaXRvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9lZGl0b3JQbHVnaW47XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFZGl0b3IocjogUmVjdGFuZ2xlKTogUHJvbWlzZTxSZWN0YW5nbGVFZGl0b3I+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihtYXAgPT4gbmV3IEFNYXAuUmVjdGFuZ2xlRWRpdG9yKG1hcCwgcikpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgSGVhdG1hcCwgTWFwIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwQVBJU2VydmljZSB9IGZyb20gJy4uL21hcC1hcGkvbWFwLWFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5pbXBvcnQgeyBIZWF0bWFwT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBsdWdpbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9wbHVnaW4tbG9hZGVyL3BsdWdpbi1sb2FkZXIuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlYXRtYXBTZXJ2aWNlIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIFRBRyA9ICdoZWF0bWFwLXNlcnZpY2UnO1xyXG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxNYXA+O1xyXG4gIHByaXZhdGUgX3BsdWdpbjogUHJvbWlzZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFwOiBNYXBBUElTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9tYXAgPSBtYXAubWFwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG9wdGlvbnM6IEhlYXRtYXBPcHRpb25zKTogUHJvbWlzZTxIZWF0bWFwPiB7XHJcbiAgICBpZiAoIXRoaXMuX3BsdWdpbikge1xyXG4gICAgICB0aGlzLl9wbHVnaW4gPSB0aGlzLnBsdWdpbnMubG9hZCgnQU1hcC5IZWF0bWFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbi50aGVuKCgpID0+IHRoaXMuX21hcClcclxuICAgICAgLnRoZW4obWFwID0+IHtcclxuICAgICAgICBjb25zdCBoZWF0bWFwID0gbmV3IEFNYXAuSGVhdG1hcChtYXAsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBoZWF0bWFwO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koaGVhdG1hcDogUHJvbWlzZTxIZWF0bWFwPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIGhlYXRtYXAudGhlbihobSA9PiBobS5zZXRNYXAobnVsbCkpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LFxyXG4gIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXAtYXBpL21hcC1hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcmtlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXJrZXIvbWFya2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbmZvV2luZG93U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZm8td2luZG93L2luZm8td2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTG5nTGF0LCBTaXplIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhbmdlLWZpbHRlcic7XHJcbmltcG9ydCB7IFBvbHlsaW5lU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvbHlsaW5lL3BvbHlsaW5lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2x5Z29uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvbHlnb24vcG9seWdvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9vbEJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b29sYmFyL3Rvb2xiYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcmtlckNsdXN0ZXJlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXJrZXItY2x1c3RlcmVyL21hcmtlci1jbHVzdGVyZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENpcmNsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaXJjbGUvY2lyY2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaXJjbGVNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2lyY2xlLW1hcmtlci9jaXJjbGUtbWFya2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZXh0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RleHQvdGV4dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmV6aWVyQ3VydmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYmV6aWVyLWN1cnZlL2Jlemllci1jdXJ2ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWxsaXBzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lbGxpcHNlL2VsbGlwc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlY3RhbmdsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZWN0YW5nbGUvcmVjdGFuZ2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIZWF0bWFwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlYXRtYXAvaGVhdG1hcC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEFMTF9PUFRJT05TID0gW1xyXG4gICd2aWV3JyxcclxuICAnbGF5ZXJzJyxcclxuICAnem9vbScsXHJcbiAgJ2NlbnRlcicsXHJcbiAgJ2xhYmVsekluZGV4JyxcclxuICAnem9vbXMnLFxyXG4gICdsYW5nJyxcclxuICAnY3Vyc29yJyxcclxuICAnY3JzJyxcclxuICAnYW5pbWF0ZUVuYWJsZScsXHJcbiAgJ2lzSG90c3BvdCcsXHJcbiAgJ2RlZmF1bHRMYXllcicsXHJcbiAgJ3JvdGF0ZUVuYWJsZScsXHJcbiAgJ3Jlc2l6ZUVuYWJsZScsXHJcbiAgJ3Nob3dJbmRvb3JNYXAnLFxyXG4gICdpbmRvb3JNYXAnLFxyXG4gICdleHBhbmRab29tUmFuZ2UnLFxyXG4gICdkcmFnRW5hYmxlJyxcclxuICAnem9vbUVuYWJsZScsXHJcbiAgJ2RvdWJsZUNsaWNrWm9vbScsXHJcbiAgJ2tleWJvYXJkRW5hYmxlJyxcclxuICAnam9nRW5hYmxlJyxcclxuICAnc2Nyb2xsV2hlZWwnLFxyXG4gICd0b3VjaFpvb20nLFxyXG4gICdtYXBTdHlsZScsXHJcbiAgJ2ZlYXR1cmVzJyxcclxuICAnc2hvd0J1aWxkaW5nQmxvY2snLFxyXG4gICd2aWV3TW9kZScsXHJcbiAgJ3BpdGNoJyxcclxuICAncGl0Y2hFbmFibGUnLFxyXG4gICdidWlsZGluZ0FuaW1hdGlvbicsXHJcbiAgJ3NreUNvbG9yJyxcclxuICAnZ3JpZE1hcEZvcmVpZ24nXHJcbl07XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogPG5neC1hbWFwPjwvbmd4LWFtYXA+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hbWFwJyxcclxuICBleHBvcnRBczogJ2FtYXAnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nbmd4LWFtYXAtY29udGFpbmVyLWlubmVyJz48L2Rpdj5cclxuPGRpdiBjbGFzcz0nbmd4LWFtYXAtY29udGVudCc+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2Aubmd4LWFtYXAtY29udGFpbmVyLWlubmVye3dpZHRoOmluaGVyaXQ7aGVpZ2h0OmluaGVyaXR9Lm5neC1hbWFwLWNvbnRlbnR7ZGlzcGxheTpub25lfWBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTWFwQVBJU2VydmljZSxcclxuICAgIE1hcmtlclNlcnZpY2UsXHJcbiAgICBJbmZvV2luZG93U2VydmljZSxcclxuICAgIFBvbHlsaW5lU2VydmljZSxcclxuICAgIFRvb2xCYXJTZXJ2aWNlLFxyXG4gICAgTWFya2VyQ2x1c3RlcmVyU2VydmljZSxcclxuICAgIENpcmNsZVNlcnZpY2UsXHJcbiAgICBDaXJjbGVNYXJrZXJTZXJ2aWNlLFxyXG4gICAgUG9seWdvblNlcnZpY2UsXHJcbiAgICBUZXh0U2VydmljZSxcclxuICAgIEJlemllckN1cnZlU2VydmljZSxcclxuICAgIEVsbGlwc2VTZXJ2aWNlLFxyXG4gICAgUmVjdGFuZ2xlU2VydmljZSxcclxuICAgIEhlYXRtYXBTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4QW1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIFRBRyA9ICduZ3gtYW1hcCc7XHJcblxyXG4gIC8qKiDDpcKcwrDDpcKbwr7DqMKnwobDpcKPwqPDr8K8wozDp8KUwqjDpMK6wo7DpsKOwqfDpcKIwrbDpcK9wrHDpcKTwo3DpcKcwrDDpcKbwr7DqcKdwpnDpsKAwoHDpsKYwr7Dp8KkwrrDp8KawoTDpcKxwp7DpsKAwqcgKi9cclxuICBASW5wdXQoKSB2aWV3OiBhbnk7IC8vIFRPRE86IFZpZXcyRFxyXG4gIC8qKiDDpcKcwrDDpcKbwr7DpcKbwr7DpcKxwoLDpsKVwrDDp8K7woTDr8K8wozDpsKVwrDDp8K7woTDpcKPwq/DpMK7wqXDpsKYwq/DpcKbwr7DpcKxwoIgw6TCuMKtw6fCmsKEw6TCuMKAw6TCuMKqw6bCiMKWw6XCpMKaw6TCuMKqw6/CvMKMw6nCu8KYw6jCrsKkw6TCuMK6w6bCmcKuw6nCgMKaw6TCusKMw6fCu8K0w6XCnMKww6XCm8K+ICovXHJcbiAgQElucHV0KCkgbGF5ZXJzOiBhbnlbXTsgLy8gVE9ETzogVGlsZUxheWVyXHJcbiAgLyoqIMOlwpzCsMOlwpvCvsOmwpjCvsOnwqTCusOnwprChMOnwrzCqcOmwpTCvsOnwrrCp8OlwojCqyAqL1xyXG4gIEBJbnB1dCgpIHpvb206IG51bWJlcjtcclxuICAvKiogw6XCnMKww6XCm8K+w6TCuMKtw6XCv8KDw6fCgsK5w6XCncKQw6bCoMKHw6XCgMK8ICovXHJcbiAgQElucHV0KCkgY2VudGVyOiBMbmdMYXQ7XHJcbiAgLyoqIMOlwpzCsMOlwpvCvsOmwqDCh8OmwrPCqMOmwpjCvsOnwqTCusOpwqHCusOlwrrCj8OvwrzCjMOlwqTCp8OkwrrCjjExMMOlwo3Cs8Olwo/Cr8OlwrDChsOlwrrClcOlwpvCvsOkwrjCisOnwprChMOpwrvCmMOowq7CpMOmwqDCh8OmwrPCqMOmwpjCvsOnwqTCusOlwpzCqMOowqbChsOnwpvClsOnwonCqcOvwrzCiMOlwpzChsOjwoDCgcOmworCmMOnwrrCv8OjwoDCgcOpwp3CosOvwrzCicOkwrnCi8OkwrjCiiAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsekluZGV4OiBudW1iZXI7XHJcbiAgLyoqIMOlwpzCsMOlwpvCvsOmwpjCvsOnwqTCusOnwprChMOnwrzCqcOmwpTCvsOnwrrCp8OlwojCq8OowozCg8OlwpvCtCAqL1xyXG4gIEBJbnB1dCgpIHpvb21zOiBudW1iZXJbXTtcclxuICAvKiogw6XCnMKww6XCm8K+w6jCr8Ktw6jCqMKAw6fCscK7w6XCnsKLw6/CvMKMw6XCj8Kvw6nCgMKJw6XCgMK8w6/CvMKaemhfY27Dr8K8wprDpMK4wq3DpsKWwofDp8KuwoDDpMK9wpPDr8K8woxlbsOvwrzCmsOowovCscOmwpbCh8OvwrzCjHpoX2Vuw6/CvMKaw6TCuMKtw6jCi8Kxw6bClsKHw6XCr8K5w6fChcKnICovXHJcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xyXG4gIC8qKiDDpcKcwrDDpcKbwr7DqcK7wpjDqMKuwqTDqcK8wqDDpsKgwofDpsKgwrfDpcK8wo8gKi9cclxuICBASW5wdXQoKSBjdXJzb3I6IHN0cmluZztcclxuICAvKiogw6XCnMKww6XCm8K+w6bCmMK+w6fCpMK6w6fCmsKEw6XCj8KCw6jCgMKDw6XCncKQw6bCoMKHw6fCs8K7ICovXHJcbiAgQElucHV0KCkgY3JzOiBzdHJpbmc7XHJcbiAgLyoqIMOlwpzCsMOlwpvCvsOlwrnCs8OnwqfCu8Oowr/Ch8OnwqjCi8OkwrjCrcOmwpjCr8OlwpDCpsOkwr3Cv8OnwpTCqMOlworCqMOnwpTCuyAqL1xyXG4gIEBJbnB1dCgpIGFuaW1hdGVFbmFibGU6IGJvb2xlYW47XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwrzCgMOlwpDCr8OlwpzCsMOlwpvCvsOnwoPCrcOnwoLCuSAqL1xyXG4gIEBJbnB1dCgpIGlzSG90c3BvdDogYm9vbGVhbjtcclxuICAvKiogw6XCvcKTw6XCicKNw6XCnMKww6XCm8K+w6TCuMKtw6nCu8KYw6jCrsKkw6bCmMK+w6fCpMK6w6fCmsKEw6XCm8K+w6XCscKCICovXHJcbiAgQElucHV0KCkgZGVmYXVsdExheWVyOiBhbnk7IC8vIFRPRE86IFRpbGVMYXllclxyXG4gIC8qKiDDpcKcwrDDpcKbwr7DpsKYwq/DpcKQwqbDpcKPwq/DpsKXwovDqMK9wqwgKi9cclxuICBASW5wdXQoKSByb3RhdGVFbmFibGU6IGJvb2xlYW47XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOnwpvCkcOmwo7Cp8OlwpzCsMOlwpvCvsOlwq7CucOlwpnCqMOlwrDCusOlwq/CuMOlwo/CmMOlwozCliAqL1xyXG4gIEBJbnB1dCgpIHJlc2l6ZUVuYWJsZTogYm9vbGVhbjtcclxuICAvKiogw6bCmMKvw6XCkMKmw6XCnMKow6bCnMKJw6fCn8Kiw6nCh8KPw6XCusKVw6XCm8K+w6fCmsKEw6bCl8K2w6XCgMKZw6jCh8Kqw6XCisKow6XCscKVw6fCpMK6w6XCrsKkw6XChsKFw6XCnMKww6XCm8K+ICovXHJcbiAgQElucHV0KCkgc2hvd0luZG9vck1hcDogYm9vbGVhbjtcclxuICAvKiogw6XCnMKow6XCscKVw6fCpMK6w6fCn8Kiw6nCh8KPw6XCm8K+w6fCmsKEw6bCl8K2w6XCgMKZw6jCh8Kqw6XCisKow6XCscKVw6fCpMK6w6XCrsKkw6XChsKFw6XCnMKww6XCm8K+w6XCm8K+w6XCscKCICovXHJcbiAgQElucHV0KCkgaW5kb29yTWFwOiBhbnk7IC8vIFRPRE86IEluZG9vck1hcFxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKUwq/DpsKMwoHDpcKPwq/DpMK7wqXDpsKJwqnDpcKxwpXDpsKcwoDDpcKkwqfDp8K8wqnDpsKUwr7Dp8K6wqfDpcKIwqvDr8K8wozDpcKSwox6b29tc8OlwrHCnsOmwoDCp8OpwoXCjcOlwpDCiMOkwr3Cv8OnwpTCqCAqL1xyXG4gIEBJbnB1dCgpIGV4cGFuZFpvb21SYW5nZTogYm9vbGVhbjtcclxuICAvKiogw6XCnMKww6XCm8K+w6bCmMKvw6XCkMKmw6XCj8Kvw6nCgMKaw6jCv8KHw6nCvMKgw6bCoMKHw6bCi8KWw6bCi8K9w6XCucKzw6fCp8K7ICovXHJcbiAgQElucHV0KCkgZHJhZ0VuYWJsZTogYm9vbGVhbjtcclxuICAvKiogw6XCnMKww6XCm8K+w6bCmMKvw6XCkMKmw6XCj8Kvw6fCvMKpw6bClMK+ICovXHJcbiAgQElucHV0KCkgem9vbUVuYWJsZTogYm9vbGVhbjtcclxuICAvKiogw6XCnMKww6XCm8K+w6bCmMKvw6XCkMKmw6XCj8Kvw6nCgMKaw6jCv8KHw6XCj8KMw6XCh8K7w6nCvMKgw6bCoMKHw6bClMK+w6XCpMKnw6XCnMKww6XCm8K+ICovXHJcbiAgQElucHV0KCkgZG91YmxlQ2xpY2tab29tOiBib29sZWFuO1xyXG4gIC8qKiDDpcKcwrDDpcKbwr7DpsKYwq/DpcKQwqbDpcKPwq/DqcKAwprDqMK/wofDqcKUwq7Dp8KbwpjDpsKOwqfDpcKIwrYgKi9cclxuICBASW5wdXQoKSBrZXlib2FyZEVuYWJsZTogYm9vbGVhbjtcclxuICAvKiogw6XCnMKww6XCm8K+w6bCmMKvw6XCkMKmw6TCvcK/w6fClMKow6fCvMKTw6XCisKow6bClcKIw6bCnsKcICovXHJcbiAgQElucHV0KCkgam9nRW5hYmxlOiBib29sZWFuO1xyXG4gIC8qKiDDpcKcwrDDpcKbwr7DpsKYwq/DpcKQwqbDpcKPwq/DqcKAwprDqMK/wofDqcK8wqDDpsKgwofDpsK7wprDqMK9wq7Dp8K8wqnDpsKUwr7DpsK1wo/DqMKnwoggKi9cclxuICBASW5wdXQoKSBzY3JvbGxXaGVlbDogYm9vbGVhbjtcclxuICAvKiogw6XCnMKww6XCm8K+w6XCnMKow6fCp8K7w6XCisKow6fCu8KIw6fCq8Kvw6TCuMKKw6bCmMKvw6XCkMKmw6XCj8Kvw6nCgMKaw6jCv8KHw6XCpMKaw6fCgsK5w6jCp8Kmw6bCjsKnw6fCvMKpw6bClMK+w6bCtcKPw6jCp8KIw6XCnMKww6XCm8K+ICovXHJcbiAgQElucHV0KCkgdG91Y2hab29tOiBib29sZWFuO1xyXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKcwrDDpcKbwr7Dp8KawoTDpsKYwr7Dp8KkwrrDpsKgwrfDpcK8wo8gKi9cclxuICBASW5wdXQoKSBtYXBTdHlsZTogc3RyaW5nO1xyXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKcwrDDpcKbwr7DpMK4worDpsKYwr7Dp8KkwrrDp8KawoTDpcKFwoPDp8K0wqDDp8Knwo3Dp8KxwrsgKi9cclxuICBASW5wdXQoKSBmZWF0dXJlczogc3RyaW5nW107XHJcbiAgLyoqIMOowq7CvsOnwr3CrsOlwpzCsMOlwpvCvsOmwpjCvsOnwqTCujNEw6bCpcK8w6XCncKXw6bClcKIw6bCnsKcICovXHJcbiAgQElucHV0KCkgc2hvd0J1aWxkaW5nQmxvY2s6IGJvb2xlYW47XHJcbiAgLyoqIMOpwrvCmMOowq7CpMOkwrjCuicyRCfDr8K8wozDpcKPwq/DqcKAwoknM0QnIChhbWFwIHYxLjQuMCkqL1xyXG4gIEBJbnB1dCgpIHZpZXdNb2RlOiBzdHJpbmc7XHJcbiAgLyoqIMOkwr/Cr8OkwrvCsMOowqfCksOlwrrCpsOvwrzCjMOpwrvCmMOowq7CpDDDr8K8woxbMCw4M13Dr8K8wowyRMOlwpzCsMOlwpvCvsOkwrjCi8OmwpfCoMOmwpXCiCAoYW1hcCB2MS40LjApKi9cclxuICBASW5wdXQoKSBwaXRjaDogbnVtYmVyO1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDqMKuwr7Dp8K9wq7DpMK/wq/DpMK7wrDDqMKnwpLDpcK6wqbDr8K8wowzRMOowqfChsOlwpvCvsOkwrjCi8OkwrjCunRydWXDr8K8wowyRMOowqfChsOlwpvCvsOkwrjCi8OmwpfCoMOmwpXCiCAoYW1hcCB2MS40LjApKi9cclxuICBASW5wdXQoKSBwaXRjaEVuYWJsZTogYm9vbGVhbjtcclxuICAvKiogw6bCpcK8w6XCncKXw6XCh8K6w6fCjsKww6XCksKMw6bCtsKIw6XCpMKxw6fCmsKEw6bCl8K2w6XCgMKZw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6XCisKow6fClMK7w6jCv8KHw6fCqMKLw6/CvMKMM0TDqMKnwobDpcKbwr7DpsKcwonDpsKVwoggKGFtYXAgdjEuNC4wKSovXHJcbiAgQElucHV0KCkgYnVpbGRpbmdBbmltYXRpb246IGJvb2xlYW47XHJcbiAgLyoqIMOowrDCg8OmwpXCtMOlwqTCqcOnwqnCusOpwqLCnMOowonCssOvwrzCjMOpwoXCjcOlwpDCiMOowofCqsOlwq7CmsOkwrnCicOlwpzCsMOlwpvCvsOvwrzCjDNEw6jCp8KGw6XCm8K+w6bCnMKJw6bClcKIw6/CvMKMw6XCpsKCJyNmZjAwMDAnIChhbWFwIHYxLjQuMCkqL1xyXG4gIEBJbnB1dCgpIHNreUNvbG9yOiBzdHJpbmc7XHJcbiAgLyoqIMOmwpjCvsOnwqTCusOlwpvCvcOlwqTClsOnwprChMOlwpzCsMOlwpvCvsOnwrvChsOoworCgiAqL1xyXG4gIEBJbnB1dCgpIGdyaWRNYXBGb3JlaWduOiBib29sZWFuO1xyXG5cclxuICAvKiogw6nCosKdw6XCpMKWw6/CvMKaw6jCrsK+w6fCvcKuw6XCn8KOw6XCuMKCICovXHJcbiAgQElucHV0KCkgY2l0eTogc3RyaW5nO1xyXG4gIC8qKiDDqcKiwp3DpcKkwpbDr8K8wprDqMKuwr7Dp8K9wq7DpcKcwrDDpcKbwr7DpcKQwo3DpcKtwpcgKi9cclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8vIG5neC1hbWFwIGV2ZW50czpcclxuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1hcENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1hcG1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdmVzdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW92ZWVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgem9vbWNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgem9vbXN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB6b29tZW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJpZ2h0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZVdoZWVsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBob3RzcG90Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGhvdHNwb3RPdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBob3RzcG90T3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdnaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGFwaTogTWFwQVBJU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5kKHRoaXMuVEFHLCAnbWFwIGFwaSBpbml0aWFsaXppbmcuLi4nKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubmd4LWFtYXAtY29udGFpbmVyLWlubmVyJyk7XHJcbiAgICBjb25zdCBvcHRpb25zID0gVXRpbHMuZ2V0T3B0aW9uc0ZvcjxNYXBPcHRpb25zPih0aGlzLCBBTExfT1BUSU9OUyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kKHRoaXMuVEFHLCAnbWFwIG9wdGlvbnM6Jywgb3B0aW9ucyk7XHJcbiAgICB0aGlzLmFwaS5jcmVhdGVNYXAoY29udGFpbmVyLCBvcHRpb25zKVxyXG4gICAgICAudGhlbihtYXAgPT4gdGhpcy5yZWFkeS5lbWl0KG1hcCkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubG9nZ2VyLmQodGhpcy5UQUcsICdtYXAgaXMgcmVhZHkuJykpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmxvZ2dlci5lKHRoaXMuVEFHLCAnZmFpbGVkIHRvIGxvYWQgQU1hcCBzY3JpcHQuJykpO1xyXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmFwaS5kZXN0cm95TWFwKCk7XHJcbiAgICB0aGlzLmxvZ2dlci5kKHRoaXMuVEFHLCAnbWFwIGFwaSBkZXN0cm95ZWQuJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSBDaGFuZ2VGaWx0ZXIub2YoY2hhbmdlcyk7XHJcbiAgICBpZiAodGhpcy5faW5pdGVkKSB7XHJcbiAgICAgIGZpbHRlci5oYXM8bnVtYmVyPignem9vbScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0Wm9vbSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8bnVtYmVyW10+KCdjZW50ZXInKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldENlbnRlcih2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90IGluY2x1ZGVkIGluIE9QVElPTlNcclxuICAgIGZpbHRlci5oYXM8c3RyaW5nPignY2l0eScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0Q2l0eSh2KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRFdmVudHMoKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gdGhpcy5hcGkuYmluZE1hcEV2ZW50cygnY29tcGxldGUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNvbXBsZXRlLmVtaXQoZSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnbWFwbW92ZScpLnN1YnNjcmliZShlID0+IHRoaXMubWFwbW92ZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdtb3Zlc3RhcnQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdmVzdGFydC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdtb3ZlZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3ZlZW5kLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYXBpLmJpbmRNYXBFdmVudHMoJ3pvb21jaGFuZ2UnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnpvb21jaGFuZ2UuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnem9vbXN0YXJ0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy56b29tc3RhcnQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnem9vbWVuZCcpLnN1YnNjcmliZShlID0+IHRoaXMuem9vbWVuZC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdyZXNpemUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnJlc2l6ZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdjbGljaycpLnN1YnNjcmliZShlID0+IHRoaXMubWFwQ2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnZGJsY2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYXBpLmJpbmRNYXBFdmVudHMoJ3JpZ2h0Y2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnJpZ2h0Q2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU1vdmUuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnbW91c2VvdmVyJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU92ZXIuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnbW91c2V3aGVlbCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VXaGVlbC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdtb3VzZXVwJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZVVwLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYXBpLmJpbmRNYXBFdmVudHMoJ21vdXNlb3V0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU91dC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdtb3VzZWRvd24nKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlRG93bi5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCd0b3VjaHN0YXJ0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaFN0YXJ0LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYXBpLmJpbmRNYXBFdmVudHMoJ3RvdWNobW92ZScpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hNb3ZlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYXBpLmJpbmRNYXBFdmVudHMoJ3RvdWNoZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaEVuZC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdob3RzcG90Y2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmhvdHNwb3RDbGljay5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdob3RzcG90b3ZlcicpLnN1YnNjcmliZShlID0+IHRoaXMuaG90c3BvdE92ZXIuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnaG90c3BvdG91dCcpLnN1YnNjcmliZShlID0+IHRoaXMuaG90c3BvdE91dC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdkcmFnc3RhcnQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRyYWdTdGFydC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmFwaS5iaW5kTWFwRXZlbnRzKCdkcmFnZ2luZycpLnN1YnNjcmliZShlID0+IHRoaXMuZHJhZ2dpbmcuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5hcGkuYmluZE1hcEV2ZW50cygnZHJhZ2VuZCcpLnN1YnNjcmliZShlID0+IHRoaXMuZHJhZ0VuZC5lbWl0KGUpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR0ZXJzXHJcbiAgc2V0Rml0VmlldygpIHtcclxuICAgIHJldHVybiB0aGlzLmFwaS5tYXAudGhlbihtYXAgPT4gbWFwLnNldEZpdFZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBzZXRab29tKGxldmVsOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmFwaS5tYXAudGhlbihtYXAgPT4gbWFwLnNldFpvb20obGV2ZWwpKTtcclxuICB9XHJcblxyXG4gIHNldENlbnRlcihwb3NpdGlvbjogTG5nTGF0fG51bWJlcltdKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGkubWFwLnRoZW4obWFwID0+IG1hcC5zZXRDZW50ZXIocG9zaXRpb24pKTtcclxuICB9XHJcblxyXG4gIHNldFpvb21BbmRDZW50ZXIoem9vbUxldmVsOiBudW1iZXIsIGNlbnRlcjogTG5nTGF0fG51bWJlcltdKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGkubWFwLnRoZW4obWFwID0+IG1hcC5zZXRab29tQW5kQ2VudGVyKHpvb21MZXZlbCwgY2VudGVyKSk7XHJcbiAgfVxyXG5cclxuICBzZXRsYWJlbHpJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGkubWFwLnRoZW4obWFwID0+IG1hcC5zZXRsYWJlbHpJbmRleChpbmRleCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2l0eShjaXR5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmFwaS5tYXAudGhlbihtYXAgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBtYXAuc2V0Q2l0eShjaXR5LCByZXNvbHZlKSkpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJNYXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGkubWFwLnRoZW4obWFwID0+IG1hcC5jbGVhck1hcCgpKTtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnNcclxuICBnZXRab29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXBpLm1hcC50aGVuKG1hcCA9PiBtYXAuZ2V0Wm9vbSgpKTtcclxuICB9XHJcblxyXG4gIGdldENlbnRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmFwaS5tYXAudGhlbihtYXAgPT4gbWFwLmdldENlbnRlcigpKTtcclxuICB9XHJcblxyXG4gIGdldENpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGkubWFwLnRoZW4obWFwID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbWFwLmdldENpdHkocmVzb2x2ZSkpKTtcclxuICB9XHJcblxyXG4gIGdldFNpemUoKTogUHJvbWlzZTxTaXplPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGkubWFwLnRoZW4obWFwID0+IG1hcC5nZXRTaXplKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsXHJcbiAgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG5nTGF0LCBJbmZvV2luZG93LCBNYXJrZXIsIFNpemUsIFRleHQgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IElMbmdMYXQsIElTaXplLCBJUGl4ZWwsIEluZm9XaW5kb3dPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IENoYW5nZUZpbHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYW5nZS1maWx0ZXInO1xyXG5pbXBvcnQgeyBJbmZvV2luZG93U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZm8td2luZG93L2luZm8td2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaXplU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NpemUvc2l6ZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEFMTF9PUFRJT05TID0gW1xyXG4gICdpc0N1c3RvbScsXHJcbiAgJ2F1dG9Nb3ZlJyxcclxuICAnY2xvc2VXaGVuQ2xpY2tNYXAnLFxyXG4gICdjb250ZW50JyxcclxuICAnc2l6ZScsXHJcbiAgJ29mZnNldCcsXHJcbiAgJ3Bvc2l0aW9uJyxcclxuICAnc2hvd1NoYWRvdydcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW1hcC1pbmZvLXdpbmRvdycsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSdhbWFwLWluZm8td2luZG93LWlubmVyJz48L2Rpdj5cclxuPGRpdiBjbGFzcz0nYW1hcC1pbmZvLXdpbmRvdy1jb250ZW50Jz5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG4gIGV4cG9ydEFzOiAnaW5mby13aW5kb3cnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbWFwSW5mb1dpbmRvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIFRBRyA9ICdhbWFwLWluZm8td2luZG93JztcclxuXHJcbiAgLy8gVGhlc2UgcHJvcGVydGllcyBhcmUgc3VwcG9ydGVkIGluIEluZm9XaW5kb3dPcHRpb25zOlxyXG4gIEBJbnB1dCgpIGlzQ3VzdG9tOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGF1dG9Nb3ZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNsb3NlV2hlbkNsaWNrTWFwOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNpemU6IElTaXplO1xyXG4gIEBJbnB1dCgpIG9mZnNldDogSVBpeGVsO1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBJTG5nTGF0O1xyXG4gIEBJbnB1dCgpIHNob3dTaGFkb3c6IGJvb2xlYW47XHJcblxyXG4gIC8vIEV4dHJhIHByb3BlcnR5OlxyXG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAvLyBhbWFwLWluZm8td2luZG93IGV2ZW50czpcclxuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB3aW5kb3dPcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB3aW5kb3dDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgd2luZG93Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb250ZW50OiBhbnk7XHJcbiAgaG9zdE1hcmtlcjogUHJvbWlzZTxNYXJrZXJ8VGV4dD47XHJcbiAgcHJpdmF0ZSBfaW5mb1dpbmRvdzogUHJvbWlzZTxJbmZvV2luZG93PjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbmZvV2luZG93czogSW5mb1dpbmRvd1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNpemVzOiBTaXplU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFtYXAtaW5mby13aW5kb3ctY29udGVudCcpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IFV0aWxzLmdldE9wdGlvbnNGb3I8SW5mb1dpbmRvd09wdGlvbnM+KHRoaXMsIEFMTF9PUFRJT05TKTtcclxuICAgIHRoaXMubG9nZ2VyLmQodGhpcy5UQUcsICdpbmZvIHdpbmRvdyBvcHRpb25zOicsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5faW5mb1dpbmRvdyA9IHRoaXMuaW5mb1dpbmRvd3MuY3JlYXRlKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB0aGlzLnRvZ2dsZU9wZW4oKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5faW5mb1dpbmRvdykgeyByZXR1cm47IH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXIgPSBDaGFuZ2VGaWx0ZXIub2YoY2hhbmdlcyk7XHJcbiAgICBmaWx0ZXIuaGFzPGFueT4oJ2NvbnRlbnQnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldENvbnRlbnQodikpO1xyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignaXNPcGVuJykuc3Vic2NyaWJlKHYgPT4gdGhpcy50b2dnbGVPcGVuKCkpO1xyXG4gICAgZmlsdGVyLm5vdEVtcHR5PElMbmdMYXQ+KCdwb3NpdGlvbicpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0UG9zaXRpb24odikpO1xyXG4gICAgZmlsdGVyLm5vdEVtcHR5PElTaXplPignc2l6ZScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0U2l6ZSh2KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuaW5mb1dpbmRvd3MuZGVzdHJveSh0aGlzLl9pbmZvV2luZG93KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLmluZm9XaW5kb3dzLmJpbmRFdmVudCh0aGlzLl9pbmZvV2luZG93LCAnY2hhbmdlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy53aW5kb3dDaGFuZ2UuZW1pdChlKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmluZm9XaW5kb3dzLmJpbmRFdmVudCh0aGlzLl9pbmZvV2luZG93LCAnb3BlbicpLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgdGhpcy53aW5kb3dPcGVuLmVtaXQoZSk7XHJcbiAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcclxuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmluZm9XaW5kb3dzLmJpbmRFdmVudCh0aGlzLl9pbmZvV2luZG93LCAnY2xvc2UnKS5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgIHRoaXMud2luZG93Q2xvc2UuZW1pdChlKTtcclxuICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBtZXRob2RzOlxyXG4gIHRvZ2dsZU9wZW4oKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5kKHRoaXMuVEFHLCAndG9nZ2xlIG9wZW4nKTtcclxuICAgIHRoaXMuaXNPcGVuID8gdGhpcy5vcGVuKCkgOiB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKHBvc2l0aW9uPzogSUxuZ0xhdCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3cudGhlbihpbmZvV2luZG93ID0+IHtcclxuICAgICAgaWYgKHRoaXMuaG9zdE1hcmtlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3RNYXJrZXIudGhlbihtYXJrZXIgPT4gdGhpcy5pbmZvV2luZG93cy5vcGVuKGluZm9XaW5kb3csIG1hcmtlci5nZXRQb3NpdGlvbigpKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmZvV2luZG93cy5vcGVuKGluZm9XaW5kb3csIHBvc2l0aW9uKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5mb1dpbmRvd3Mub3BlbihpbmZvV2luZG93LCB0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmZvV2luZG93cy5vcGVuKGluZm9XaW5kb3cpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3cudGhlbihpbmZvV2luZG93ID0+IGluZm9XaW5kb3cuY2xvc2UoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR0ZXJzOlxyXG4gIHNldENvbnRlbnQoY29udGVudDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvdy50aGVuKGluZm9XaW5kb3cgPT4gaW5mb1dpbmRvdy5zZXRDb250ZW50KGNvbnRlbnQpKTtcclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBJTG5nTGF0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvdy50aGVuKGluZm9XaW5kb3cgPT4gaW5mb1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2l6ZShzaXplOiBJU2l6ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3cudGhlbihpbmZvV2luZG93ID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNpemVzLmNyZWF0ZShzaXplLCAnc2l6ZScpO1xyXG4gICAgICBpbmZvV2luZG93LnNldFNpemUodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJzOlxyXG4gIGdldElzT3BlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93LnRoZW4oaW5mb1dpbmRvdyA9PiBpbmZvV2luZG93LmdldElzT3BlbigpKTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93LnRoZW4oaW5mb1dpbmRvdyA9PiBpbmZvV2luZG93LmdldENvbnRlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbigpOiBQcm9taXNlPExuZ0xhdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3cudGhlbihpbmZvV2luZG93ID0+IGluZm9XaW5kb3cuZ2V0UG9zaXRpb24oKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTaXplKCk6IFByb21pc2U8U2l6ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3cudGhlbihpbmZvV2luZG93ID0+IGluZm9XaW5kb3cuZ2V0U2l6ZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcclxuICBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG5nTGF0LCBTaXplLCBNYXJrZXIsIEljb24sIFBpeGVsLCBNYXAgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IElMbmdMYXQsIElQaXhlbCwgSUljb24sIElMYWJlbCwgTWFya2VyT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VGaWx0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9jaGFuZ2UtZmlsdGVyJztcclxuaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21hcmtlci9tYXJrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpeGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BpeGVsL3BpeGVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ljb24vaWNvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGFiZWwvbGFiZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEFtYXBJbmZvV2luZG93Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93L2FtYXAtaW5mby13aW5kb3cuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IEFMTF9PUFRJT05TID0gW1xyXG4gICdwb3NpdGlvbicsXHJcbiAgJ29mZnNldCcsXHJcbiAgJ2ljb24nLFxyXG4gICdjb250ZW50JyxcclxuICAndG9wV2hlbkNsaWNrJyxcclxuICAnYnViYmxlJyxcclxuICAnZHJhZ2dhYmxlJyxcclxuICAncmFpc2VPbkRyYWcnLFxyXG4gICdjdXJzb3InLFxyXG4gICd2aXNpYmxlJyxcclxuICAnekluZGV4JyxcclxuICAnYW5nbGUnLFxyXG4gICdhdXRvUm90YXRpb24nLFxyXG4gICdzaGFkb3cnLFxyXG4gICd0aXRsZScsXHJcbiAgJ2NsaWNrYWJsZScsXHJcbiAgJ3NoYXBlJyxcclxuICAnZXh0RGF0YScsXHJcbiAgJ2xhYmVsJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLW1hcmtlcicsXHJcbiAgZXhwb3J0QXM6ICdtYXJrZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbWFwTWFya2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIFRBRyA9ICdhbWFwLW1hcmtlcic7XHJcblxyXG4gIC8vIFRoZXNlIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBpbiBNYXJrZXJPcHRpb25zOlxyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBJTG5nTGF0O1xyXG4gIEBJbnB1dCgpIG9mZnNldDogSVBpeGVsO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZ3xJSWNvbjtcclxuICBASW5wdXQoKSBjb250ZW50OiBhbnk7XHJcbiAgQElucHV0KCkgdG9wV2hlbkNsaWNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1YmJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcmFpc2VPbkRyYWc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBhbmdsZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGF1dG9Sb3RhdGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaGFkb3c6IElJY29uO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xpY2thYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNoYXBlOiBhbnk7ICAvLyBUT0RPOiBNYXJrZXJTaGFwZVxyXG4gIEBJbnB1dCgpIGV4dERhdGE6IGFueTtcclxuICBASW5wdXQoKSBsYWJlbDogSUxhYmVsO1xyXG5cclxuICAvLyBFeHRyYSBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBpc1RvcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhbmltYXRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBvcGVuSW5mb1dpbmRvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgaW5DbHVzdGVyID0gZmFsc2U7XHJcblxyXG4gIC8vIGFtYXAtbWFya2VyIGV2ZW50czpcclxuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1hcmtlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmlnaHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZURvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlVXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJhZ2dpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW92ZWVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW92ZWFsb25nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBhbWFwLWluZm8td2luZG93OlxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQW1hcEluZm9XaW5kb3dDb21wb25lbnQpIGluZm9XaW5kb3dDb21wb25lbnQgPSBuZXcgUXVlcnlMaXN0PEFtYXBJbmZvV2luZG93Q29tcG9uZW50PigpO1xyXG5cclxuICBwcml2YXRlIF9tYXJrZXI6IFByb21pc2U8TWFya2VyPjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1hcmtlcnM6IE1hcmtlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBpeGVsOiBQaXhlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGljb25zOiBJY29uU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFiZWxzOiBMYWJlbFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSBDaGFuZ2VGaWx0ZXIub2YoY2hhbmdlcyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9tYXJrZXIpIHtcclxuICAgICAgLy8gZG8gbm90IGRyYXcgbWFya2VyIHdoZW4gbm8gcG9pc3Rpb24gZGVmaW5lZC5cclxuICAgICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7IHJldHVybjsgfVxyXG4gICAgICBjb25zdCBvcHRpb25zID0gVXRpbHMuZ2V0T3B0aW9uc0ZvcjxNYXJrZXJPcHRpb25zPih0aGlzLCBBTExfT1BUSU9OUyk7XHJcbiAgICAgIHRoaXMuX21hcmtlciA9IHRoaXMubWFya2Vycy5jcmVhdGUob3B0aW9ucywgIXRoaXMuaW5DbHVzdGVyKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiB0aGlzLnJlYWR5LmVtaXQobWFya2VyKSk7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5mb1dpbmRvdygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUluZm9XaW5kb3dQb3NpdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLmhhczxzdHJpbmd8SUljb24+KCdpY29uJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRJY29uKHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxJSWNvbj4oJ3NoYWRvdycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0U2hhZG93KHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxJTGFiZWw+KCdsYWJlbCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0TGFiZWwodikpO1xyXG4gICAgICBmaWx0ZXIuaGFzPHN0cmluZz4oJ3RpdGxlJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRUaXRsZSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PignY29udGVudCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0Q29udGVudCh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PignZXh0RGF0YScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0RXh0RGF0YSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8Ym9vbGVhbj4oJ2NsaWNrYWJsZScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0Q2xpY2thYmxlKCEhdikpO1xyXG4gICAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdkcmFnZ2FibGUnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldERyYWdnYWJsZSghIXYpKTtcclxuICAgICAgZmlsdGVyLmhhczxhbnk+KCd2aXNpYmxlJykuc3Vic2NyaWJlKHYgPT4gdiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCkpO1xyXG4gICAgICBmaWx0ZXIuaGFzPHN0cmluZz4oJ2N1cnNvcicpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0Q3Vyc29yKHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxzdHJpbmc+KCdhbmltYXRpb24nKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldEFuaW1hdGlvbih2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8bnVtYmVyPignYW5nbGUnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldEFuZ2xlKHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxudW1iZXI+KCd6SW5kZXgnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldHpJbmRleCh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55Pignc2hhcGUnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldFNoYXBlKHYpKTtcclxuICAgICAgZmlsdGVyLm5vdEVtcHR5PElQaXhlbD4oJ29mZnNldCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0T2Zmc2V0KHYpKTtcclxuICAgICAgZmlsdGVyLm5vdEVtcHR5PExuZ0xhdD4oJ3Bvc2l0aW9uJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRQb3NpdGlvbih2KSk7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdpc1RvcCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0VG9wKCEhdikpO1xyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignaGlkZGVuJykuc3Vic2NyaWJlKHYgPT4gdiA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fbWFya2VyKSB7XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5tYXJrZXJzLmRlc3Ryb3kodGhpcy5fbWFya2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlSW5mb1dpbmRvdygpO1xyXG4gICAgdGhpcy5pbmZvV2luZG93Q29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlSW5mb1dpbmRvdygpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSW5mb1dpbmRvdygpIHtcclxuICAgIGlmICh0aGlzLmluZm9XaW5kb3dDb21wb25lbnQgJiYgdGhpcy5fbWFya2VyKSB7XHJcbiAgICAgIGlmICh0aGlzLmluZm9XaW5kb3dDb21wb25lbnQubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmUodGhpcy5UQUcsICdFeHBlY3RlZCBubyBtb3JlIHRoYW4gMSBpbmZvIHdpbmRvdy4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5mb1dpbmRvd0NvbXBvbmVudC5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgY29tcG9uZW50Lmhvc3RNYXJrZXIgPSB0aGlzLl9tYXJrZXI7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJbmZvV2luZG93UG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvV2luZG93Q29tcG9uZW50ICYmIHRoaXMuX21hcmtlcikge1xyXG4gICAgICB0aGlzLmluZm9XaW5kb3dDb21wb25lbnQuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbXBvbmVudC50b2dnbGVPcGVuKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kRXZlbnRzKCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IHRoaXMuYmluZE1hcmtlckV2ZW50KCdjbGljaycpLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgaWYgKHRoaXMub3BlbkluZm9XaW5kb3cpIHtcclxuICAgICAgICB0aGlzLmluZm9XaW5kb3dDb21wb25lbnQuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgY29tcG9uZW50Lm9wZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1hcmtlckNsaWNrLmVtaXQoZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZE1hcmtlckV2ZW50KCdkYmxjbGljaycpLnN1YnNjcmliZShlID0+IHRoaXMuZGJsQ2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kTWFya2VyRXZlbnQoJ3JpZ2h0Y2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnJpZ2h0Q2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kTWFya2VyRXZlbnQoJ21vdXNlbW92ZScpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VNb3ZlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZE1hcmtlckV2ZW50KCdtb3VzZW92ZXInKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlT3Zlci5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRNYXJrZXJFdmVudCgnbW91c2VvdXQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlT3V0LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZE1hcmtlckV2ZW50KCdtb3VzZWRvd24nKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlRG93bi5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRNYXJrZXJFdmVudCgnbW91c2V1cCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VVcC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRNYXJrZXJFdmVudCgnZHJhZ3N0YXJ0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5kcmFnU3RhcnQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kTWFya2VyRXZlbnQoJ2RyYWdnaW5nJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5kcmFnZ2luZy5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRNYXJrZXJFdmVudCgnZHJhZ2VuZCcpLnN1YnNjcmliZShlID0+IHRoaXMuZHJhZ0VuZC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRNYXJrZXJFdmVudCgndG91Y2hzdGFydCcpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hTdGFydC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRNYXJrZXJFdmVudCgndG91Y2htb3ZlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaE1vdmUuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kTWFya2VyRXZlbnQoJ3RvdWNoZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaEVuZC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRNYXJrZXJFdmVudCgnbW92aW5nJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3ZpbmcuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kTWFya2VyRXZlbnQoJ21vdmVlbmQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdmVlbmQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kTWFya2VyRXZlbnQoJ21vdmVhbG9uZycpLnN1YnNjcmliZShlID0+IHRoaXMubW92ZWFsb25nLmVtaXQoZSkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZE1hcmtlckV2ZW50KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMuYmluZEV2ZW50KHRoaXMuX21hcmtlciwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1hcmtlcigpOiBQcm9taXNlPE1hcmtlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcjtcclxuICB9XHJcblxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obSA9PiBtLnNob3coKSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG0gPT4gbS5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQW5pbWF0aW9uc1xyXG4gIG1vdmVUbyhwb3NpdGlvbjogSUxuZ0xhdCwgc3BlZWQ6IG51bWJlciwgZj86IChrOiBhbnkpID0+IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIubW92ZVRvKHBvc2l0aW9uLCBzcGVlZCwgZikpO1xyXG4gIH1cclxuXHJcbiAgbW92ZUFsb25nKHBhdGg6IElMbmdMYXRbXSwgc3BlZWQ6IG51bWJlciwgZj86IChrOiBhbnkpID0+IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIubW92ZUFsb25nKHBhdGgsIHNwZWVkLCBmKSk7XHJcbiAgfVxyXG5cclxuICBzdG9wTW92ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLnN0b3BNb3ZlKCkpO1xyXG4gIH1cclxuXHJcbiAgcGF1c2VNb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIucGF1c2VNb3ZlKCkpO1xyXG4gIH1cclxuXHJcbiAgcmVzdW1lTW92ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLnJlc3VtZU1vdmUoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR0ZXJzXHJcbiAgc2V0T2Zmc2V0KG9mZnNldDogSVBpeGVsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBpeGVsLmNyZWF0ZShvZmZzZXQsICdvZmZzZXQnKTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgbWFya2VyLnNldE9mZnNldCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SWNvbihpY29uOiBzdHJpbmd8SUljb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaWNvbnMuY3JlYXRlKGljb24sICdpY29uJyk7XHJcbiAgICAgIG1hcmtlci5zZXRJY29uKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2hhZG93KHNoYWRvdzogSUljb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IDxJY29uPnRoaXMuaWNvbnMuY3JlYXRlKHNoYWRvdywgJ3NoYWRvdycpO1xyXG4gICAgICBtYXJrZXIuc2V0U2hhZG93KHZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWwobGFiZWw6IElMYWJlbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5sYWJlbHMuY3JlYXRlKGxhYmVsLCAnbGFiZWwnKTtcclxuICAgICAgbWFya2VyLnNldExhYmVsKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RHJhZ2dhYmxlKGRyYWdnYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuc2V0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuc2V0Q2xpY2thYmxlKGNsaWNrYWJsZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24ocG9zaXRpb246IExuZ0xhdCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiB7XHJcbiAgICAgIG1hcmtlci5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5mb1dpbmRvd1Bvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFuZ2xlKGFuZ2xlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLnNldEFuZ2xlKGFuZ2xlKSk7XHJcbiAgfVxyXG5cclxuICBzZXR6SW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLnNldHpJbmRleCh6SW5kZXgpKTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5zZXRDb250ZW50KGNvbnRlbnQpKTtcclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLnNldFRpdGxlKHRpdGxlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRDdXJzb3IoY3Vyc29yOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLnNldEN1cnNvcihjdXJzb3IpKTtcclxuICB9XHJcblxyXG4gIHNldFRvcChpc1RvcDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuc2V0VG9wKGlzVG9wKSk7XHJcbiAgfVxyXG5cclxuICBzZXRFeHREYXRhKGRhdGE6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuc2V0RXh0RGF0YShkYXRhKSk7XHJcbiAgfVxyXG5cclxuICBzZXRTaGFwZShzaGFwZTogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5zZXRTaGFwZShzaGFwZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5zZXRBbmltYXRpb24oYW5pbWF0aW9uKSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJzXHJcbiAgZ2V0T2Zmc2V0KCk6IFByb21pc2U8UGl4ZWw+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLmdldE9mZnNldCgpKTtcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uKCk6IFByb21pc2U8TG5nTGF0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5nZXRQb3NpdGlvbigpKTtcclxuICB9XHJcblxyXG4gIGdldExhYmVsKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5nZXRMYWJlbCgpKTtcclxuICB9XHJcblxyXG4gIGdldEFuZ2xlKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5nZXRBbmdsZSgpKTtcclxuICB9XHJcblxyXG4gIGdldHpJbmRleCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuZ2V0ekluZGV4KCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWNvbigpOiBQcm9taXNlPHN0cmluZ3xJY29uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5nZXRJY29uKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuZ2V0Q29udGVudCgpKTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5nZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIGdldFRvcCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLmdldFRvcCgpKTtcclxuICB9XHJcblxyXG4gIGdldFNoYWRvdygpOiBQcm9taXNlPEljb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLmdldFNoYWRvdygpKTtcclxuICB9XHJcblxyXG4gIGdldFNoYXBlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyLnRoZW4obWFya2VyID0+IG1hcmtlci5nZXRTaGFwZSgpKTtcclxuICB9XHJcblxyXG4gIGdldEV4dERhdGEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLmdldEV4dERhdGEoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRNYXAoKTogUHJvbWlzZTxNYXA+IHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrZXIudGhlbihtYXJrZXIgPT4gbWFya2VyLmdldE1hcCgpKTtcclxuICB9XHJcblxyXG4gIGdldEFuaW1hdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuZ2V0QW5pbWF0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuZ2V0Q2xpY2thYmxlKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHJhZ2dhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtlci50aGVuKG1hcmtlciA9PiBtYXJrZXIuZ2V0RHJhZ2dhYmxlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIE9uRGVzdHJveSxcclxuICBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvbHlsaW5lLCBNYXAsIEJvdW5kcywgUG9seUVkaXRvciB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IENoYW5nZUZpbHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYW5nZS1maWx0ZXInO1xyXG5pbXBvcnQgeyBQb2x5bGluZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb2x5bGluZS9wb2x5bGluZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEFMTF9PUFRJT05TID0gW1xyXG4gICd6SW5kZXgnLFxyXG4gICdidWJibGUnLFxyXG4gICdnZW9kZXNpYycsXHJcbiAgJ2lzT3V0bGluZScsXHJcbiAgJ2JvcmRlcldlaWdodCcsXHJcbiAgJ291dGxpbmVDb2xvcicsXHJcbiAgJ3BhdGgnLFxyXG4gICdzdHJva2VDb2xvcicsXHJcbiAgJ3N0cm9rZU9wYWNpdHknLFxyXG4gICdzdHJva2VXZWlnaHQnLFxyXG4gICdzdHJva2VTdHlsZScsXHJcbiAgJ3N0cm9rZURhc2hhcnJheScsXHJcbiAgJ2xpbmVKb2luJyxcclxuICAnZXh0RGF0YScsXHJcbiAgJ3Nob3dEaXInXHJcbl07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2FtYXAtcG9seWxpbmUnLFxyXG4gIGV4cG9ydEFzOiAncG9seWxpbmUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbWFwUG9seWxpbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgVEFHID0gJ2FtYXAtcG9seWxpbmUnO1xyXG5cclxuICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgaW4gUG9seWxpbmVPcHRpb25zOlxyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGJ1YmJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBnZW9kZXNpYzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc091dGxpbmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYm9yZGVyV2VpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgb3V0bGluZUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF0aDogbnVtYmVyW11bXTtcclxuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdHJva2VXZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdHJva2VTdHlsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0cm9rZURhc2hhcnJheTogbnVtYmVyW107XHJcbiAgQElucHV0KCkgbGluZUpvaW46IHN0cmluZztcclxuICBASW5wdXQoKSBleHREYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgc2hvd0RpcjogYm9vbGVhbjtcclxuXHJcbiAgLy8gVGhpcyBvcHRpb25zIHByb3BlcnR5IHdpbGwgb3ZlcnJpZGUgb3RoZXIgcHJvcGVydHk6XHJcbiAgQElucHV0KCkgb3B0aW9uczogUG9seWxpbmVPcHRpb25zO1xyXG5cclxuICAvLyBFeHRyYSBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlZGl0b3IgPSBmYWxzZTtcclxuXHJcbiAgLy8gYW1hcC1wb2x5bGluZSBldmVudHM6XHJcbiAgQE91dHB1dCgpIHBvbHlsaW5lQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmlnaHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcG9seWxpbmVIaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwb2x5bGluZVNob3cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBlZGl0b3IgZXZlbnRzOlxyXG4gIEBPdXRwdXQoKSBlZGl0b3JBZGRub2RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0b3JSZW1vdmVub2RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0b3JBZGp1c3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVkaXRvckVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBfcG9seWxpbmU6IFByb21pc2U8UG9seWxpbmU+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfZWRpdG9yOiBQb2x5RWRpdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb2x5bGluZXM6IFBvbHlsaW5lU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgZmlsdGVyID0gQ2hhbmdlRmlsdGVyLm9mKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmICghdGhpcy5fcG9seWxpbmUpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBVdGlscy5nZXRPcHRpb25zRm9yPFBvbHlsaW5lT3B0aW9ucz4odGhpcywgQUxMX09QVElPTlMpO1xyXG4gICAgICB0aGlzLl9wb2x5bGluZSA9IHRoaXMucG9seWxpbmVzLmNyZWF0ZShvcHRpb25zKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX3BvbHlsaW5lLnRoZW4ocCA9PiB0aGlzLnJlYWR5LmVtaXQocCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLmhhczxudW1iZXJbXVtdPigncGF0aCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0UGF0aCh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8UG9seWxpbmVPcHRpb25zPignb3B0aW9ucycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0T3B0aW9ucyh2IHx8IHt9KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PignZXh0RGF0YScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0RXh0RGF0YSh2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignaGlkZGVuJykuc3Vic2NyaWJlKHYgPT4gdiA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCkpO1xyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignZWRpdG9yJykuc3Vic2NyaWJlKHYgPT4gdGhpcy50b2dnbGVFZGl0b3IodikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnBvbHlsaW5lcy5kZXN0cm95KHRoaXMuX3BvbHlsaW5lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLmJpbmRQb2x5bGluZUV2ZW50KCdjbGljaycpLnN1YnNjcmliZShlID0+IHRoaXMucG9seWxpbmVDbGljay5lbWl0KGUpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFBvbHlsaW5lRXZlbnQoJ2RibGNsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5kYmxDbGljay5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5bGluZUV2ZW50KCdyaWdodGNsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5yaWdodENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFBvbHlsaW5lRXZlbnQoJ2hpZGUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnBvbHlsaW5lSGlkZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5bGluZUV2ZW50KCdzaG93Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5wb2x5bGluZVNob3cuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWxpbmVFdmVudCgnbW91c2Vkb3duJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZURvd24uZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWxpbmVFdmVudCgnbW91c2V1cCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VVcC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5bGluZUV2ZW50KCdtb3VzZW92ZXInKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlT3Zlci5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5bGluZUV2ZW50KCdtb3VzZW91dCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VPdXQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWxpbmVFdmVudCgnY2hhbmdlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5jaGFuZ2UuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWxpbmVFdmVudCgndG91Y2hzdGFydCcpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hTdGFydC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5bGluZUV2ZW50KCd0b3VjaG1vdmUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnRvdWNoTW92ZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5bGluZUV2ZW50KCd0b3VjaGVuZCcpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hFbmQuZW1pdChlKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kUG9seWxpbmVFdmVudChldmVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMuYmluZEV2ZW50KHRoaXMuX3BvbHlsaW5lLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRFZGl0b3JFdmVudHMoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLmJpbmRFdmVudCh0aGlzLl9lZGl0b3IsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8vIFB1YmxpYyBtZXRob2RzOlxyXG4gIHRvZ2dsZUVkaXRvcih2OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodiAmJiAhdGhpcy5fZWRpdG9yKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5sb2FkRWRpdG9yKClcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9wb2x5bGluZSlcclxuICAgICAgICAudGhlbihjID0+IHRoaXMucG9seWxpbmVzLmNyZWF0ZUVkaXRvcihjKSlcclxuICAgICAgICAudGhlbihlZGl0b3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fZWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgICAgLy8gQmluZCBldmVudHM6XHJcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFZGl0b3JFdmVudHMoJ2FkZG5vZGUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmVkaXRvckFkZG5vZGUuZW1pdChlKSkpO1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdhZGp1c3QnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmVkaXRvckFkanVzdC5lbWl0KGUpKSk7XHJcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFZGl0b3JFdmVudHMoJ3JlbW92ZW5vZGUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmVkaXRvclJlbW92ZW5vZGUuZW1pdChlKSkpO1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdlbmQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmVkaXRvckVuZC5lbWl0KGUpKSk7XHJcbiAgICAgICAgICBlZGl0b3Iub3BlbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcclxuICAgICAgaWYgKHYpIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3Iub3BlbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2VkaXRvci5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5bGluZS50aGVuKHAgPT4gcC5zaG93KCkpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5bGluZS50aGVuKHAgPT4gcC5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0dGVyczpcclxuICBzZXRQYXRoKHBhdGg6IG51bWJlcltdW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5bGluZS50aGVuKHAgPT4gcC5zZXRQYXRoKHBhdGgpKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMob3B0OiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5bGluZS50aGVuKHAgPT4gcC5zZXRPcHRpb25zKG9wdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0RGF0YShleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvbHlsaW5lLnRoZW4ocCA9PiBwLnNldEV4dERhdGEoZXh0KSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJzOlxyXG4gIGdldFBhdGgoKTogUHJvbWlzZTxudW1iZXJbXVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9seWxpbmUudGhlbihwID0+IHAuZ2V0UGF0aCgpKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbnMoKTogUHJvbWlzZTxQb2x5bGluZU9wdGlvbnM+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5bGluZS50aGVuKHAgPT4gcC5nZXRPcHRpb25zKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGVuZ3RoKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9seWxpbmUudGhlbihwID0+IHAuZ2V0TGVuZ3RoKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm91bmRzKCk6IFByb21pc2U8Qm91bmRzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9seWxpbmUudGhlbihwID0+IHAuZ2V0Qm91bmRzKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXh0RGF0YSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvbHlsaW5lLnRoZW4ocCA9PiBwLmdldEV4dERhdGEoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LFxyXG4gIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwLCBMbmdMYXQsIEJvdW5kcywgUG9seUVkaXRvciB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgUG9seWdvbiwgUG9seWdvblBhdGggfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcy9vdmVybGF5cy9hbWFwLnBvbHlnb24nO1xyXG5pbXBvcnQgeyBQb2x5Z29uT3B0aW9ucywgSUxuZ0xhdCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VGaWx0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9jaGFuZ2UtZmlsdGVyJztcclxuaW1wb3J0IHsgUG9seWdvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb2x5Z29uL3BvbHlnb24uc2VydmljZSc7XHJcblxyXG5jb25zdCBBTExfT1BUSU9OUyA9IFtcclxuICAnekluZGV4JyxcclxuICAncGF0aCcsXHJcbiAgJ2J1YmJsZScsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ3N0cm9rZUNvbG9yJyxcclxuICAnc3Ryb2tlT3BhY2l0eScsXHJcbiAgJ3N0cm9rZVdlaWdodCcsXHJcbiAgJ2ZpbGxDb2xvcicsXHJcbiAgJ2ZpbGxPcGFjaXR5JyxcclxuICAnc3Ryb2tlU3R5bGUnLFxyXG4gICdzdHJva2VEYXNoYXJyYXknLFxyXG4gICdleHREYXRhJyxcclxuICAnZHJhZ2dhYmxlJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLXBvbHlnb24nLFxyXG4gIGV4cG9ydEFzOiAncG9seWdvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIEFtYXBQb2x5Z29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIFRBRyA9ICdhbWFwLXBvbHlnb24nO1xyXG5cclxuICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgaW4gUG9seWdvbk9wdGlvbnM6XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgcGF0aDogSUxuZ0xhdFtdIHwgSUxuZ0xhdFtdW107XHJcbiAgQElucHV0KCkgYnViYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGN1cnNvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3Ryb2tlT3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0cm9rZVdlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGZpbGxDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGxPcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3Ryb2tlU3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHJva2VEYXNoYXJyYXk6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGV4dERhdGE6IGFueTtcclxuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XHJcblxyXG4gIC8vIFRoaXMgb3B0aW9ucyBwcm9wZXJ0eSB3aWxsIG92ZXJyaWRlIG90aGVyIHByb3BlcnR5OlxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBvbHlnb25PcHRpb25zO1xyXG5cclxuICAvLyBFeHRyYSBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlZGl0b3IgPSBmYWxzZTtcclxuXHJcbiAgLy8gYW1hcC1wb2x5Z29uIGV2ZW50czpcclxuICBAT3V0cHV0KCkgcG9seWdvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJpZ2h0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHBvbHlnb25IaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwb2x5Z29uU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZVVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIGVkaXRvciBldmVudHM6XHJcbiAgQE91dHB1dCgpIGVkaXRvckFkZG5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVkaXRvclJlbW92ZW5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVkaXRvckFkanVzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZWRpdG9yRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9wb2x5Z29uOiBQcm9taXNlPFBvbHlnb24+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfZWRpdG9yOiBQb2x5RWRpdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb2x5Z29uczogUG9seWdvblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGZpbHRlciA9IENoYW5nZUZpbHRlci5vZihjaGFuZ2VzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX3BvbHlnb24pIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBVdGlscy5nZXRPcHRpb25zRm9yPFBvbHlnb25PcHRpb25zPih0aGlzLCBBTExfT1BUSU9OUyk7XHJcbiAgICAgIHRoaXMuX3BvbHlnb24gPSB0aGlzLnBvbHlnb25zLmNyZWF0ZShvcHRpb25zKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX3BvbHlnb24udGhlbihwID0+IHRoaXMucmVhZHkuZW1pdChwKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWx0ZXIuaGFzPFBvbHlnb25QYXRoPigncGF0aCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0UGF0aCh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8UG9seWdvbk9wdGlvbnM+KCdvcHRpb25zJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRPcHRpb25zKHYgfHwge30pKTtcclxuICAgICAgZmlsdGVyLmhhczxhbnk+KCdleHREYXRhJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRFeHREYXRhKHYpKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdoaWRkZW4nKS5zdWJzY3JpYmUodiA9PiB2ID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKSk7XHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdlZGl0b3InKS5zdWJzY3JpYmUodiA9PiB0aGlzLnRvZ2dsZUVkaXRvcih2KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucG9seWdvbnMuZGVzdHJveSh0aGlzLl9wb2x5Z29uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLmJpbmRQb2x5Z29uRXZlbnQoJ2NsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5wb2x5Z29uQ2xpY2suZW1pdChlKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5Z29uRXZlbnQoJ2RibGNsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5kYmxDbGljay5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5Z29uRXZlbnQoJ3JpZ2h0Y2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnJpZ2h0Q2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWdvbkV2ZW50KCdoaWRlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5wb2x5Z29uSGlkZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5Z29uRXZlbnQoJ3Nob3cnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnBvbHlnb25TaG93LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFBvbHlnb25FdmVudCgnbW91c2Vkb3duJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZURvd24uZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWdvbkV2ZW50KCdtb3VzZXVwJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZVVwLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFBvbHlnb25FdmVudCgnbW91c2VvdmVyJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU92ZXIuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWdvbkV2ZW50KCdtb3VzZW91dCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VPdXQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWdvbkV2ZW50KCdjaGFuZ2UnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNoYW5nZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5Z29uRXZlbnQoJ3RvdWNoc3RhcnQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnRvdWNoU3RhcnQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUG9seWdvbkV2ZW50KCd0b3VjaG1vdmUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnRvdWNoTW92ZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRQb2x5Z29uRXZlbnQoJ3RvdWNoZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaEVuZC5lbWl0KGUpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRQb2x5Z29uRXZlbnQoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbnMuYmluZEV2ZW50KHRoaXMuX3BvbHlnb24sIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEVkaXRvckV2ZW50cyhldmVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5iaW5kRXZlbnQodGhpcy5fZWRpdG9yLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBQdWJsaWMgbWV0aG9kczpcclxuICB0b2dnbGVFZGl0b3IodjogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHYgJiYgIXRoaXMuX2VkaXRvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5sb2FkRWRpdG9yKClcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9wb2x5Z29uKVxyXG4gICAgICAgIC50aGVuKGMgPT4gdGhpcy5wb2x5Z29ucy5jcmVhdGVFZGl0b3IoYykpXHJcbiAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcclxuICAgICAgICAgIHRoaXMuX2VkaXRvciA9IGVkaXRvcjtcclxuICAgICAgICAgIC8vIEJpbmQgZXZlbnRzOlxyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdhZGRub2RlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JBZGRub2RlLmVtaXQoZSkpKTtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEVkaXRvckV2ZW50cygnYWRqdXN0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JBZGp1c3QuZW1pdChlKSkpO1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdyZW1vdmVub2RlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JSZW1vdmVub2RlLmVtaXQoZSkpKTtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEVkaXRvckV2ZW50cygnZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JFbmQuZW1pdChlKSkpO1xyXG4gICAgICAgICAgZWRpdG9yLm9wZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XHJcbiAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLm9wZW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3IuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9seWdvbi50aGVuKHAgPT4gcC5zaG93KCkpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uLnRoZW4ocCA9PiBwLmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICBjb250YWlucyhwb2ludDogTG5nTGF0fElMbmdMYXQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uLnRoZW4ocCA9PiBwLmNvbnRhaW5zKHBvaW50KSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR0ZXJzOlxyXG4gIHNldFBhdGgocGF0aDogUG9seWdvblBhdGgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uLnRoZW4ocCA9PiBwLnNldFBhdGgocGF0aCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHQ6IFBvbHlnb25PcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9seWdvbi50aGVuKHAgPT4gcC5zZXRPcHRpb25zKG9wdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0RGF0YShleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvbHlnb24udGhlbihwID0+IHAuc2V0RXh0RGF0YShleHQpKTtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnM6XHJcbiAgZ2V0UGF0aCgpOiBQcm9taXNlPG51bWJlcltdW10+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uLnRoZW4ocCA9PiBwLmdldFBhdGgoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25zKCk6IFByb21pc2U8UG9seWdvbk9wdGlvbnM+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uLnRoZW4ocCA9PiBwLmdldE9wdGlvbnMoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRCb3VuZHMoKTogUHJvbWlzZTxCb3VuZHM+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uLnRoZW4ocCA9PiBwLmdldEJvdW5kcygpKTtcclxuICB9XHJcblxyXG4gIGdldEV4dERhdGEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uLnRoZW4ocCA9PiBwLmdldEV4dERhdGEoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBPbkluaXQsXHJcbiAgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb29sQmFyLCBNYXJrZXIsIFBpeGVsLCBMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IFRvb2xiYXJPcHRpb25zLCBJUGl4ZWwgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhbmdlLWZpbHRlcic7XHJcbmltcG9ydCB7IFRvb2xCYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9vbGJhci90b29sYmFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaXhlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9waXhlbC9waXhlbC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEFMTF9PUFRJT05TID0gW1xyXG4gICdvZmZzZXQnLFxyXG4gICdwb3NpdGlvbicsXHJcbiAgJ3J1bGVyJyxcclxuICAnbm9JcExvY2F0ZScsXHJcbiAgJ2xvY2F0ZScsXHJcbiAgJ2xpdGVTdHlsZScsXHJcbiAgJ2RpcmVjdGlvbicsXHJcbiAgJ2F1dG9Qb3NpdGlvbicsXHJcbiAgJ2xvY2F0aW9uTWFya2VyJyxcclxuICAndXNlTmF0aXZlJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLXRvb2wtYmFyJyxcclxuICBleHBvcnRBczogJ3Rvb2xiYXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbWFwVG9vbEJhckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIFRBRyA9ICdhbWFwLXRvb2wtYmFyJztcclxuXHJcbiAgLy8gVGhlc2UgcHJvcGVydGllcyBhcmUgc3VwcG9ydGVkIGluIFRvb2xiYXJPcHRpb25zOlxyXG4gIEBJbnB1dCgpIG9mZnNldDogSVBpeGVsO1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcnVsZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbm9JcExvY2F0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBsb2NhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbGl0ZVN0eWxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhdXRvUG9zaXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbG9jYXRpb25NYXJrZXI6IE1hcmtlcjtcclxuICBASW5wdXQoKSB1c2VOYXRpdmU6IGJvb2xlYW47XHJcblxyXG4gIC8vIEV4dHJhIHByb3BlcnR5OlxyXG4gIEBJbnB1dCgpIGhpZGRlbiA9IGZhbHNlO1xyXG5cclxuICAvLyBhbWFwLXRvb2wtYmFyIGV2ZW50czpcclxuICBAT3V0cHV0KCkgem9vbWNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxvY2F0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG9vbGJhckhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvb2xiYXJTaG93ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF90b29sYmFyOiBQcm9taXNlPFRvb2xCYXI+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgdG9vbGJhcnM6IFRvb2xCYXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwaXhlbDogUGl4ZWxTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBVdGlscy5nZXRPcHRpb25zRm9yPFRvb2xiYXJPcHRpb25zPih0aGlzLCBBTExfT1BUSU9OUyk7XHJcbiAgICB0aGlzLl90b29sYmFyID0gdGhpcy50b29sYmFycy5jcmVhdGUob3B0aW9ucyk7XHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIHRoaXMuX3Rvb2xiYXIudGhlbih0ID0+IHRoaXMucmVhZHkuZW1pdCh0KSk7XHJcbiAgICB0aGlzLmhpZGRlbiA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Rvb2xiYXIpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyID0gQ2hhbmdlRmlsdGVyLm9mKGNoYW5nZXMpO1xyXG4gICAgZmlsdGVyLmhhczxhbnk+KCdydWxlcicpLnN1YnNjcmliZSh2ID0+IHYgPyB0aGlzLnNob3dSdWxlcigpIDogdGhpcy5oaWRlUnVsZXIoKSk7XHJcbiAgICBmaWx0ZXIuaGFzPGFueT4oJ2RpcmVjdGlvbicpLnN1YnNjcmliZSh2ID0+IHYgPyB0aGlzLnNob3dEaXJlY3Rpb24oKSA6IHRoaXMuaGlkZURpcmVjdGlvbigpKTtcclxuICAgIGZpbHRlci5oYXM8YW55PignbG9jYXRlJykuc3Vic2NyaWJlKHYgPT4gdiA/IHRoaXMuc2hvd0xvY2F0aW9uKCkgOiB0aGlzLmhpZGVMb2NhdGlvbigpKTtcclxuICAgIGZpbHRlci5ub3RFbXB0eTxJUGl4ZWw+KCdvZmZzZXQnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldE9mZnNldCh2KSk7XHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdoaWRkZW4nKS5zdWJzY3JpYmUodiA9PiB2ID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMudG9vbGJhcnMuZGVzdHJveSh0aGlzLl90b29sYmFyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLmJpbmRUb29sQmFyRXZlbnQoJ3pvb21jaGFuZ2VkJykuc3Vic2NyaWJlKGUgPT4gdGhpcy56b29tY2hhbmdlZC5lbWl0KGUpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFRvb2xCYXJFdmVudCgnbG9jYXRpb24nKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmxvY2F0aW9uLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFRvb2xCYXJFdmVudCgnc2hvdycpLnN1YnNjcmliZShlID0+IHRoaXMudG9vbGJhclNob3cuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVG9vbEJhckV2ZW50KCdoaWRlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b29sYmFySGlkZS5lbWl0KGUpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRUb29sQmFyRXZlbnQoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudG9vbGJhcnMuYmluZEV2ZW50KHRoaXMuX3Rvb2xiYXIsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8vIFB1YmxpYyBtZXRob2RzOlxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhci50aGVuKHQgPT4gdC5zaG93KCkpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90b29sYmFyLnRoZW4odCA9PiB0LmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICBzaG93UnVsZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhci50aGVuKHQgPT4gdC5zaG93UnVsZXIoKSk7XHJcbiAgfVxyXG5cclxuICBoaWRlUnVsZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhci50aGVuKHQgPT4gdC5oaWRlUnVsZXIoKSk7XHJcbiAgfVxyXG5cclxuICBzaG93RGlyZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2xiYXIudGhlbih0ID0+IHQuc2hvd0RpcmVjdGlvbigpKTtcclxuICB9XHJcblxyXG4gIGhpZGVEaXJlY3Rpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhci50aGVuKHQgPT4gdC5oaWRlRGlyZWN0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2xiYXIudGhlbih0ID0+IHQuc2hvd0xvY2F0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgaGlkZUxvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2xiYXIudGhlbih0ID0+IHQuaGlkZUxvY2F0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgZG9Mb2NhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90b29sYmFyLnRoZW4odCA9PiB0LmRvTG9jYXRpb24oKSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR0ZXJzOlxyXG4gIHNldE9mZnNldChvZmZzZXQ6IElQaXhlbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2xiYXIudGhlbih0ID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBpeGVsLmNyZWF0ZShvZmZzZXQsICdvZmZzZXQnKTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdC5zZXRPZmZzZXQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnM6XHJcbiAgZ2V0T2Zmc2V0KCk6IFByb21pc2U8UGl4ZWw+IHtcclxuICAgIHJldHVybiB0aGlzLl90b29sYmFyLnRoZW4odCA9PiB0LmdldE9mZnNldCgpKTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCk6IFByb21pc2U8TG5nTGF0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhci50aGVuKHQgPT4gdC5nZXRMb2NhdGlvbigpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcclxuICBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXJrZXJDbHVzdGVyZXJPcHRpb25zLCBJQ2x1c3RlclN0eWxlLCBSZW5kZXJPYmplY3QgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBNYXJrZXJDbHVzdGVyZXIsIE1hcmtlciwgQ2x1c3RlclN0eWxlLCBNYXAgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VGaWx0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9jaGFuZ2UtZmlsdGVyJztcclxuaW1wb3J0IHsgQW1hcE1hcmtlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvYW1hcC1tYXJrZXIvYW1hcC1tYXJrZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWFya2VyQ2x1c3RlcmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21hcmtlci1jbHVzdGVyZXIvbWFya2VyLWNsdXN0ZXJlci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEFMTF9PUFRJT05TID0gW1xyXG4gICdncmlkU2l6ZScsXHJcbiAgJ21pbkNsdXN0ZXJTaXplJyxcclxuICAnbWF4Wm9vbScsXHJcbiAgJ2F2ZXJhZ2VDZW50ZXInLFxyXG4gICdzdHlsZXMnLFxyXG4gICdyZW5kZXJDbHVzZXJNYXJrZXInLFxyXG4gICd6b29tT25DbGljaydcclxuXTtcclxuXHJcbi8qKlxyXG4gKiDDp8KUwqjDpMK6wo7DpcKcwrDDpcKbwr7DpMK4worDpcKKwqDDqMK9wr3DpcKkwqfDqcKHwo/Dp8KCwrnDpsKgwofDqMKuwrDDr8K8wozDpsKPwpDDqcKrwpjDpcKcwrDDpcKbwr7Dp8KawoTDp8K7wpjDpcKIwrbDpcKSwozDpsKYwr7Dp8KkwrrDpsKAwqfDqMKDwr3Do8KAwoJcclxuICpcclxuICogQGV4YW1wbGVcclxuICogPG5neC1hbWFwIGNsYXNzPVwiZGVtby1tYXAtbGdcIiBbcmVzaXplRW5hYmxlXT1cInRydWVcIj5cclxuICogICA8YW1hcC1tYXJrZXItY2x1c3RlcmVyIFtncmlkU2l6ZV09XCI4MFwiPlxyXG4gKiAgICAgPGFtYXAtbWFya2VyICpuZ0Zvcj1cImxldCBtYXJrZXIgb2YgbWFya2Vyc1wiIFtwb3NpdGlvbl09XCJtYXJrZXJcIj48L2FtYXAtbWFya2VyPlxyXG4gKiAgIDwvYW1hcC1tYXJrZXItY2x1c3RlcmVyPlxyXG4gKiA8L25neC1hbWFwPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLW1hcmtlci1jbHVzdGVyZXInLFxyXG4gIGV4cG9ydEFzOiAnbWFya2VyLWNsdXN0ZXJlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEFtYXBNYXJrZXJDbHVzdGVyZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBUQUcgPSAnYW1hcC1tYXJrZXItY2x1c3RlcmVyJztcclxuXHJcbiAgLyoqIMOowoHCmsOlwpDCiMOowq7CocOnwq7Cl8OmwpfCtsOnwr3CkcOmwqDCvMOnwprChMOlwoPCj8OnwrTCoMOlwqTCp8OlwrDCj8OvwrzCjMOpwrvCmMOowq7CpDYwICovXHJcbiAgQElucHV0KCkgZ3JpZFNpemU6IG51bWJlcjtcclxuICAvKiogw6jCgcKaw6XCkMKIw6fCmsKEw6bCnMKAw6XCsMKPw6bClcKww6nCh8KPw6PCgMKCw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6MsOvwrzCjMOlwo3Cs8OlwrDCj8OkwrrCjjLDpMK4wqrDp8KCwrnDpcKIwpnDpMK4wo3DqMKDwr3DpsKIwpDDpMK4wrrDpMK4woDDpMK4wqrDqMKBwprDpcKQwoggKi9cclxuICBASW5wdXQoKSBtaW5DbHVzdGVyU2l6ZTogbnVtYmVyO1xyXG4gIC8qKiDDpsKcwoDDpcKkwqfDp8KawoTDqMKBwprDpcKQwojDp8K6wqfDpcKIwqvDr8K8wozDpcKkwqfDpMK6wo7DqMKvwqXDp8K6wqfDpcKIwqvDpcKwwrHDpMK4wo3DqMK/wpvDqMKhwozDp8KbwrjDpcK6wpTDp8KawoTDqMKBwprDpcKQwojDo8KAwoLDqcK7wpjDqMKuwqTDpcKAwrzDpMK4wroxOCAqL1xyXG4gIEBJbnB1dCgpIG1heFpvb206IG51bWJlcjtcclxuICAvKiogw6jCgcKaw6XCkMKIw6fCgsK5w6fCmsKEw6XCm8K+w6bCoMKHw6TCvcKNw6fCvcKuw6bCmMKvw6XCkMKmw6bCmMKvw6bCicKAw6bCnMKJw6jCgcKaw6XCkMKIw6XChsKFw6fCgsK5w6fCmsKEw6TCuMKtw6XCv8KDw6fCgsK5w6PCgMKCw6nCu8KYw6jCrsKkw6TCuMK6w6XCkMKmICovXHJcbiAgQElucHV0KCkgYXZlcmFnZUNlbnRlcjogYm9vbGVhbjtcclxuICAvKiogw6bCjMKHw6XCrsKaw6jCgcKaw6XCkMKIw6XCkMKOw6fCmsKEw6fCgsK5w6bCoMKHw6jCrsKww6fCmsKEw6XCm8K+w6bCoMKHw6bCoMK3w6XCvMKPICovXHJcbiAgQElucHV0KCkgc3R5bGVzOiBJQ2x1c3RlclN0eWxlW107XHJcbiAgLyoqIMOowq/CpcOmwpbCucOmwrPClcOnwpTCqMOmwp3CpcOlwq7CnsOnwo7CsMOowoHCmsOlwpDCiMOnwoLCucOnwprChMOowofCqsOlwq7CmsOkwrnCicOnwrvCmMOlwojCtsOvwrzCjMOnwpTCscOlwrzCgMOlwo/CkcOowoDChcOowofCqsOlwrfCscOlwq7CnsOnwo7CsCAqL1xyXG4gIEBJbnB1dCgpIHJlbmRlckNsdXNlck1hcmtlcjogKG9iamVjdDogUmVuZGVyT2JqZWN0KSA9PiB2b2lkO1xyXG4gIC8qKiDDp8KCwrnDpcKHwrvDqMKBwprDpcKQwojDp8KCwrnDpsKXwrbDr8K8wozDpsKYwq/DpcKQwqbDpsKVwqPDpcK8woDDr8K8wozDqcK7wpjDqMKuwqTDpcKAwrzDpMK4wrrDr8K8wpp0cnVlICovXHJcbiAgQElucHV0KCkgem9vbU9uQ2xpY2s6IGJvb2xlYW47XHJcblxyXG4gIC8qKiDDp8KCwrnDqMKBwprDpcKQwojDpsK4wrLDpsKfwpPDpcKuwozDpsKIwpDDpcKQwo7DqMKnwqbDpcKPwpEgKi9cclxuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIMOnwoLCucOlwofCu8OkwrrCi8OkwrvCtiAqL1xyXG4gIEBPdXRwdXQoKSBjbHVzdGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIGFtYXAtbWFya2VyIGRpcmVjdGl2ZXM6XHJcbiAgQENvbnRlbnRDaGlsZHJlbihBbWFwTWFya2VyRGlyZWN0aXZlKSBtYXJrZXJMaXN0ID0gbmV3IFF1ZXJ5TGlzdDxBbWFwTWFya2VyRGlyZWN0aXZlPigpO1xyXG5cclxuICBwcml2YXRlIF9jbHVzdGVyOiBQcm9taXNlPE1hcmtlckNsdXN0ZXJlcj47XHJcbiAgcHJpdmF0ZSBfbWFya2VyczogUHJvbWlzZTxNYXJrZXJbXT47XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjbHVzdGVyczogTWFya2VyQ2x1c3RlcmVyU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5fY2x1c3Rlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyID0gQ2hhbmdlRmlsdGVyLm9mKGNoYW5nZXMpO1xyXG4gICAgZmlsdGVyLm5vdEVtcHR5PG51bWJlcj4oJ2dyaWRTaXplJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRHcmlkU2l6ZSh2KSk7XHJcbiAgICBmaWx0ZXIubm90RW1wdHk8bnVtYmVyPignbWluQ2x1c3RlclNpemUnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldE1pbkNsdXN0ZXJTaXplKHYpKTtcclxuICAgIGZpbHRlci5oYXM8bnVtYmVyPignbWF4Wm9vbScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0TWF4Wm9vbSh2KSk7XHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdhdmVyYWdlQ2VudGVyJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRBdmVyYWdlQ2VudGVyKHYpKTtcclxuICAgIGZpbHRlci5oYXM8SUNsdXN0ZXJTdHlsZVtdPignc3R5bGVzJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRTdHlsZXModikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gVXRpbHMuZ2V0T3B0aW9uc0ZvcjxNYXJrZXJDbHVzdGVyZXJPcHRpb25zPih0aGlzLCBBTExfT1BUSU9OUyk7XHJcbiAgICB0aGlzLl9jbHVzdGVyID0gdGhpcy5jbHVzdGVycy5jcmVhdGUob3B0aW9ucyk7XHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jbHVzdGVycy5kZXN0cm95KHRoaXMuX2NsdXN0ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVNYXJrZXJzKClcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fY2x1c3RlcilcclxuICAgICAgLnRoZW4oYyA9PiB0aGlzLnJlYWR5LmVtaXQoYykpO1xyXG4gICAgdGhpcy5tYXJrZXJMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlTWFya2VycygpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTWFya2VycygpIHtcclxuICAgIGNvbnN0IG1hcmtlclByb21pc2VMaXN0ID0gdGhpcy5tYXJrZXJMaXN0Lm1hcChkID0+IGQubWFya2VyKTtcclxuICAgIHRoaXMuX21hcmtlcnMgPSBQcm9taXNlLmFsbChtYXJrZXJQcm9taXNlTGlzdCk7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy50aGVuKGxpc3QgPT4gdGhpcy5zZXRNYXJrZXJzKGxpc3QpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLmNsdXN0ZXJzLmJpbmRFdmVudCh0aGlzLl9jbHVzdGVyLCAnY2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNsdXN0ZXJDbGljay5lbWl0KGUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwrfCu8OlworCoMOkwrjCgMOkwrjCqsOpwpzCgMOowr/Cm8OowqHCjMOowoHCmsOlwpDCiMOnwprChMOnwoLCucOmwqDCh8Oowq7CsFxyXG4gICAqIEBwYXJhbSBtYXJrZXJcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGFkZE1hcmtlcihtYXJrZXI6IE1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuYWRkTWFya2VyKG1hcmtlcikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XCiMKgw6nCmcKkw6TCuMKAw6TCuMKqw6jCgcKaw6XCkMKIw6fCmsKEw6fCgsK5w6bCoMKHw6jCrsKwXHJcbiAgICogQHBhcmFtIG1hcmtlclxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgcmVtb3ZlTWFya2VyKG1hcmtlcjogTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2x1c3Rlci50aGVuKGNsdXN0ZXIgPT4gY2x1c3Rlci5yZW1vdmVNYXJrZXIobWFya2VyKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDqMKBwprDpcKQwojDp8KCwrnDp8KawoTDpsKAwrvDpsKVwrDDqcKHwo9cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldENsdXN0ZXJzQ291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyLnRoZW4oY2x1c3RlciA9PiBjbHVzdGVyLmdldENsdXN0ZXJzQ291bnQoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDqMKBwprDpcKQwojDp8K9wpHDpsKgwrzDp8KawoTDpcKDwo/Dp8K0wqDDpcKkwqfDpcKwwo9cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldEdyaWRTaXplKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2x1c3Rlci50aGVuKGNsdXN0ZXIgPT4gY2x1c3Rlci5nZXRHcmlkU2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOlwpzCsMOlwpvCvsOkwrjCrcOnwoLCucOmwqDCh8Oowq7CsMOnwprChMOmwpzCgMOlwqTCp8OowoHCmsOlwpDCiMOnwrrCp8OlwojCq1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgZ2V0TWF4Wm9vbSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuZ2V0TWF4Wm9vbSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOlwo3ClcOkwrjCqsOowoHCmsOlwpDCiMOnwprChMOmwpzCgMOlwrDCj8OmwpXCsMOpwofCj1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgZ2V0TWluQ2x1c3RlclNpemUoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyLnRoZW4oY2x1c3RlciA9PiBjbHVzdGVyLmdldE1pbkNsdXN0ZXJTaXplKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWw6jCgcKaw6XCkMKIw6fCmsKEw6bCoMK3w6XCvMKPw6nCo8KOw6bCoMK8w6nCm8KGw6XCkMKIXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBnZXRTdHlsZXMoKTogUHJvbWlzZTxDbHVzdGVyU3R5bGVbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuZ2V0U3R5bGVzKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCrsK+w6fCvcKuw6jCgcKaw6XCkMKIw6fCvcKRw6bCoMK8w6fCmsKEw6XCg8KPw6fCtMKgw6XCpMKnw6XCsMKPXHJcbiAgICogQHBhcmFtIHNpemVcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHNldEdyaWRTaXplKHNpemU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuc2V0R3JpZFNpemUoc2l6ZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCrsK+w6fCvcKuw6XCnMKww6XCm8K+w6TCuMKtw6fCgsK5w6bCoMKHw6jCrsKww6fCmsKEw6bCnMKAw6XCpMKnw6jCgcKaw6XCkMKIw6fCusKnw6XCiMKrXHJcbiAgICogQHBhcmFtIHpvb21cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHNldE1heFpvb20oem9vbTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2x1c3Rlci50aGVuKGNsdXN0ZXIgPT4gY2x1c3Rlci5zZXRNYXhab29tKHpvb20pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwo3ClcOkwrjCqsOowoHCmsOlwpDCiMOnwprChMOmwpzCgMOlwrDCj8OmwpXCsMOpwofCj1xyXG4gICAqIEBwYXJhbSBzaXplXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBzZXRNaW5DbHVzdGVyU2l6ZShzaXplOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyLnRoZW4oY2x1c3RlciA9PiBjbHVzdGVyLnNldE1pbkNsdXN0ZXJTaXplKHNpemUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOowoHCmsOlwpDCiMOnwprChMOmwqDCt8OlwrzCj8OpwqPCjsOmwqDCvFxyXG4gICAqIEBwYXJhbSBzdHlsZXNcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHNldFN0eWxlcyhzdHlsZXM6IElDbHVzdGVyU3R5bGVbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IHtcclxuICAgICAgY29uc3QgcyA9IHN0eWxlcy5tYXAoc3R5bGUgPT4gdGhpcy5jbHVzdGVycy5jcmVhdGVTdHlsZShzdHlsZSkpO1xyXG4gICAgICByZXR1cm4gY2x1c3Rlci5zZXRTdHlsZXMocyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOkwrvCjsOlwpzCsMOlwpvCvsOkwrjCisOlwr3Cu8OlwrrClcOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOowoHCmsOlwpDCiMOnwoLCucOmwqDCh8Oowq7CsFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgY2xlYXJNYXJrZXJzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuY2xlYXJNYXJrZXJzKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCrsK+w6fCvcKuw6XCsMKGw6jCv8Kbw6jCocKMw6fCgsK5w6jCgcKaw6XCkMKIw6fCmsKEw6XCnMKww6XCm8K+w6XCr8K5w6jCscKhXHJcbiAgICogQHBhcmFtIG1hcFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgc2V0TWFwKG1hcDogTWFwKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2x1c3Rlci50aGVuKGNsdXN0ZXIgPT4gY2x1c3Rlci5zZXRNYXAobWFwKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKuwr7Dp8K9wq7DpcKwwobDqMK/wpvDqMKhwozDp8KCwrnDqMKBwprDpcKQwojDpsKYwr7Dp8KkwrrDp8KawoTDp8KCwrnDpsKgwofDqMKuwrDDqcKbwobDpcKQwohcclxuICAgKiBAcGFyYW0gbWFya2Vyc1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgc2V0TWFya2VycyhtYXJrZXJzOiBNYXJrZXJbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuc2V0TWFya2VycyhtYXJrZXJzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDqMKvwqXDp8KCwrnDqMKBwprDpcKQwojDp8KawoTDpcKcwrDDpcKbwr7DpcKvwrnDqMKxwqFcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldE1hcCgpOiBQcm9taXNlPE1hcD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuZ2V0TWFwKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWw6jCr8Klw6fCgsK5w6jCgcKaw6XCkMKIw6TCuMKtw6fCmsKEw6fCgsK5w6bCoMKHw6jCrsKww6nCm8KGw6XCkMKIXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBnZXRNYXJrZXJzKCk6IFByb21pc2U8TWFya2VyW10+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyLnRoZW4oY2x1c3RlciA9PiBjbHVzdGVyLmdldE1hcmtlcnMoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsK3wrvDpcKKwqDDpMK4woDDp8K7woTDqcKcwoDDqMK/wpvDqMKhwozDqMKBwprDpcKQwojDp8KawoTDp8KCwrnDpsKgwofDqMKuwrBcclxuICAgKiBAcGFyYW0gbWFya2Vyc1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgYWRkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIuYWRkTWFya2VycyhtYXJrZXJzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKIwqDDqcKZwqTDpMK4woDDp8K7woTDqMKBwprDpcKQwojDp8KawoTDp8KCwrnDpsKgwofDqMKuwrBcclxuICAgKiBAcGFyYW0gbWFya2Vyc1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgcmVtb3ZlTWFya2VycyhtYXJrZXJzOiBNYXJrZXJbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXIudGhlbihjbHVzdGVyID0+IGNsdXN0ZXIucmVtb3ZlTWFya2VycyhtYXJrZXJzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDpcKNwpXDpMK4wqrDqMKBwprDpcKQwojDp8KCwrnDpMK9wo3Dp8K9wq7DpsKYwq/DpcKQwqbDpsKYwq/DqMKBwprDpcKQwojDpcKGwoXDpsKJwoDDpsKcwonDpsKgwofDqMKuwrDDp8KawoTDpcK5wrPDpcKdwofDpMK4wq3DpcK/woNcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGlzQXZlcmFnZUNlbnRlcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyLnRoZW4oY2x1c3RlciA9PiBjbHVzdGVyLmlzQXZlcmFnZUNlbnRlcigpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwo3ClcOkwrjCqsOowoHCmsOlwpDCiMOnwoLCucOkwr3CjcOnwr3CrsOmwpjCr8OlwpDCpsOmwpjCr8OowoHCmsOlwpDCiMOlwobChcOmwonCgMOmwpzCicOmwqDCh8Oowq7CsMOnwprChMOlwrnCs8Olwp3Ch8OkwrjCrcOlwr/Cg1xyXG4gICAqIEBwYXJhbSBhdmVyYWdlQ2VudGVyXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBzZXRBdmVyYWdlQ2VudGVyKGF2ZXJhZ2VDZW50ZXI6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyLnRoZW4oY2x1c3RlciA9PiBjbHVzdGVyLnNldEF2ZXJhZ2VDZW50ZXIoYXZlcmFnZUNlbnRlcikpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBHZW9jb2RlciB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEdlb2NvZGVyT3B0aW9ucywgSUxuZ0xhdCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBsdWdpbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9wbHVnaW4tbG9hZGVyL3BsdWdpbi1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50QmluZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQtYmluZGVyJztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuLyoqXHJcbiAqIEFtYXBHZW9jb2RlcldyYXBwZXLDpcKvwrnDqMKxwqHDpcKwwobDqcKrwpjDpcK+wrfDpcKOwp/Dp8KUwp/Dp8KawoRHZW9jb2RlcsOlwq/CucOowrHCocOmwo/CkMOkwr7Cm8OnwprChMOmwpbCucOmwrPClcOlwrDCgcOowqPChcOmwojCkFByb21pc2XDp8KawoTDpcKuwp7Dp8KOwrDDr8K8wozDpsKbwrTDpsKWwrnDpMK+wr/DpcKbwp7DqMKwwoNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbWFwR2VvY29kZXJXcmFwcGVyIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIHByaXZhdGUgX2dlb2NvZGVyOiBHZW9jb2RlcjtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0cz86IEdlb2NvZGVyT3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2dlb2NvZGVyID0gbmV3IEFNYXAuR2VvY29kZXIob3B0cyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmF0aXZlKCk6IEdlb2NvZGVyIHtcclxuICAgIHJldHVybiB0aGlzLl9nZW9jb2RlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOnwpTCqMOkwrrCjsOkwr7CpsOlwpDCrEdlb2NvZGVyw6TCusKLw6TCu8K2w6/CvMKMw6jCv8KUw6XCm8Kew6XCj8Kvw6TCu8Klw6jCosKrc3Vic2NyaWJlw6fCmsKET2JzZXJ2YWJsZcOlwq/CucOowrHCoVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5iaW5kRXZlbnQ8R2VvY29kZXI+KHRoaXMuX2dlb2NvZGVyLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbihhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPHtzdGF0dXM6IHN0cmluZywgcmVzdWx0OiBhbnl9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9nZW9jb2Rlci5nZXRMb2NhdGlvbihhZGRyZXNzLCAoc3RhdHVzLCByZXN1bHQpID0+IHtcclxuICAgICAgcmVzb2x2ZSh7c3RhdHVzLCByZXN1bHR9KTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHNldENpdHkoY2l0eTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLl9nZW9jb2Rlci5zZXRDaXR5KGNpdHkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWRkcmVzcyhsb2NhdGlvbjogSUxuZ0xhdHxJTG5nTGF0W10pOiBQcm9taXNlPHtzdGF0dXM6IHN0cmluZywgcmVzdWx0OiBhbnl9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9nZW9jb2Rlci5nZXRBZGRyZXNzKGxvY2F0aW9uLCAoc3RhdHVzLCByZXN1bHQpID0+IHtcclxuICAgICAgcmVzb2x2ZSh7c3RhdHVzLCByZXN1bHR9KTtcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDDpcKcwrDDp8KQwobDp8K8wpbDp8KgwoHDpMK4wo7DqcKAwobDpcKcwrDDp8KQwobDp8K8wpbDp8KgwoHDpsKcwo3DpcKKwqHDr8K8wozDp8KUwqjDpMK6wo7DpcKcwrDDpcKdwoDDpsKPwo/DqMK/wrDDpMK4wo7DpcKdwpDDpsKgwofDpMK5wovDqcKXwrTDp8KawoTDqMK9wqzDpsKNwqLDo8KAwoJcclxuICogw6TCvcK/w6fClMKoJ29mKCknw6bClsK5w6bCs8KVw6XCj8Kvw6TCu8Klw6XCvsKXw6XCiMKwUHJvbWlzZTxBbWFwR2VvY29kZXJXcmFwcGVyPsOlwq/CucOowrHCocOjwoDCglxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyDDpcK8wpXDpcKFwqVzZXJ2aWNlw6XCksKMd3JhcHBlcsOnwrHCu8Olwp7Ci8OlwqPCsMOmwpjCjlxyXG4gKiBpbXBvcnQgeyBBbWFwR2VvY29kZXJTZXJ2aWNlLCBBbWFwR2VvY29kZXJXcmFwcGVyIH0gZnJvbSAnbmd4LWFtYXAnO1xyXG4gKlxyXG4gKiAvLyDDpcKuwprDpMK5wol3cmFwcGVyw6fCmsKEw6fCvMKTw6XCrcKYw6/CvMKaXHJcbiAqIHByaXZhdGUgZ2VvUHJvbWlzZTogUHJvbWlzZTxBbWFwR2VvY29kZXJXcmFwcGVyPjtcclxuICpcclxuICogLy8gw6TCvcK/w6fClMKoc2VydmljZcOmwp7ChMOpwoDCoHdyYXBwZXLDpcKvwrnDqMKxwqFcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBBbWFwR2VvY29kZXI6IEFtYXBHZW9jb2RlclNlcnZpY2UpIHtcclxuICogICAvLyDDpMK9wr/Dp8KUwqggQW1hcEdlb2NvZGVyU2VydmljZSDDpcKIwpvDpcK7wrogcHJvbWlzZSB3cmFwcGVyXHJcbiAqICAgdGhpcy5nZW9Qcm9taXNlID0gQW1hcEdlb2NvZGVyLm9mKHtcclxuICogICAgIGNpdHk6IFwiMDEwXCIsIC8vw6XCn8KOw6XCuMKCw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaw6LCgMKcw6XChcKow6XCm8K9w6LCgMKdXHJcbiAqICAgICByYWRpdXM6IDEwMDAgLy/DqMKMwoPDpcKbwrTDr8K8wozDqcK7wpjDqMKuwqTDr8K8wpo1MDBcclxuICogICB9KTtcclxuICogfVxyXG4gKlxyXG4gKiAvLyDDpMK9wr/Dp8KUwqhBTWFwLkdlb2NvZGVyw6fCmsKEd3JhcHBlcsOlwq/CucOowrHCoVxyXG4gKiB0aGlzLmdlb1Byb21pc2UudGhlbihnZW9jb2RlciA9PiBnZW9jb2Rlci5nZXRMb2NhdGlvbih0aGlzLmFkZHJlc3MpKVxyXG4gKiAgIC50aGVuKGRhdGEgPT4ge1xyXG4gKiAgICAgY29uc29sZS5sb2coJ2dldCBsb2NhdGlvbiBvZiBhZGRyZXNzOicsIHRoaXMuYWRkcmVzcyk7XHJcbiAqICAgICBjb25zb2xlLmxvZygnc3RhdHVzOicsIGRhdGEuc3RhdHVzKTtcclxuICogICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6JywgZGF0YS5yZXN1bHQpO1xyXG4gKlxyXG4gKiAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnY29tcGxldGUnICYmIGRhdGEucmVzdWx0LmluZm8gPT09ICdPSycpIHtcclxuICogICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQuZ2VvY29kZXNbMF0ubG9jYXRpb24pO1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdC5nZW9jb2Rlc1swXS5mb3JtYXR0ZWRBZGRyZXNzKTtcclxuICogICAgIH1cclxuICogIH0pO1xyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW1hcEdlb2NvZGVyU2VydmljZSB7XHJcbiAgVEFHID0gJ2FtYXAtZ2VvY29kZXInO1xyXG5cclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UpIHt9XHJcblxyXG4gIG9mKG9wdHM/OiBHZW9jb2Rlck9wdGlvbnMpOiBQcm9taXNlPEFtYXBHZW9jb2RlcldyYXBwZXI+IHtcclxuICAgIGlmICghdGhpcy5fcGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX3BsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLkdlb2NvZGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbi50aGVuKCgpID0+IG5ldyBBbWFwR2VvY29kZXJXcmFwcGVyKG9wdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIEF1dG9jb21wbGV0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbi8qKlxyXG4gKiDDpsKgwrnDpsKNwq7DqMK+wpPDpcKFwqXDpcKFwrPDqcKUwq7DpcKtwpfDpsKPwpDDp8KkwrrDpcKMwrnDqcKFwo3DpMK/wqHDpsKBwq/Dr8K8wozDpcKPwq/DpcKwwoZQb2nDp8KxwrvDpcKewovDpcKSwozDpcKfwo7DpcK4woLDpMK9wpzDpMK4wrrDqMK+wpPDpcKFwqXDpsKPwpDDp8KkwrrDp8KawoTDqcKZwpDDpcKIwrbDpsKdwqHDpMK7wrZcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFtYXBBdXRvY29tcGxldGVTZXJ2aWNlIHtcclxuICBUQUcgPSAnYW1hcC1hdXRvY29tcGxldGUnO1xyXG5cclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UpIHt9XHJcblxyXG4gIG9mKG9wdHM/OiBBdXRvY29tcGxldGVPcHRpb25zKTogUHJvbWlzZTxBbWFwQXV0b2NvbXBsZXRlV3JhcHBlcj4ge1xyXG4gICAgaWYgKCF0aGlzLl9wbHVnaW4pIHtcclxuICAgICAgdGhpcy5fcGx1Z2luID0gdGhpcy5wbHVnaW5zLmxvYWQoJ0FNYXAuQXV0b2NvbXBsZXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbi50aGVuKCgpID0+IG5ldyBBbWFwQXV0b2NvbXBsZXRlV3JhcHBlcihvcHRzKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW1hcEF1dG9jb21wbGV0ZVdyYXBwZXLDpcKvwrnDqMKxwqHDpcKwwobDqcKrwpjDpcK+wrfDpcKOwp/Dp8KUwp/Dp8KawoRBdXRvY29tcGxldGXDpcKvwrnDqMKxwqHDpsKPwpDDpMK+wpvDp8KawoTDpsKWwrnDpsKzwpXDpcKwwoHDqMKjwoXDpsKIwpBQcm9taXNlw6fCmsKEw6XCrsKew6fCjsKww6/CvMKMw6bCm8K0w6bClsK5w6TCvsK/w6XCm8Kew6jCsMKDXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW1hcEF1dG9jb21wbGV0ZVdyYXBwZXIgZXh0ZW5kcyBFdmVudEJpbmRlciB7XHJcbiAgcHJpdmF0ZSBfYXV0b2NvbXBsZXRlOiBBdXRvY29tcGxldGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdHM/OiBBdXRvY29tcGxldGVPcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gbmV3IEFNYXAuQXV0b2NvbXBsZXRlKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hdGl2ZSgpOiBBdXRvY29tcGxldGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9jb21wbGV0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOnwpTCqMOkwrrCjsOkwr7CpsOlwpDCrEF1dG9jb21wbGV0ZcOkwrrCi8OkwrvCtsOvwrzCjMOowr/ClMOlwpvCnsOlwo/Cr8OkwrvCpcOowqLCq3N1YnNjcmliZcOnwprChE9ic2VydmFibGXDpcKvwrnDqMKxwqFcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmluZEV2ZW50PEF1dG9jb21wbGV0ZT4odGhpcy5fYXV0b2NvbXBsZXRlLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTx7c3RhdHVzOiBzdHJpbmcsIHJlc3VsdDogYW55fT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fYXV0b2NvbXBsZXRlLnNlYXJjaChhZGRyZXNzLCAoc3RhdHVzLCByZXN1bHQpID0+IHtcclxuICAgICAgcmVzb2x2ZSh7c3RhdHVzLCByZXN1bHR9KTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHNldENpdHkoY2l0eTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hdXRvY29tcGxldGUuc2V0Q2l0eShjaXR5KTtcclxuICB9XHJcblxyXG4gIHNldFR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hdXRvY29tcGxldGUuc2V0VHlwZSh0eXBlKTtcclxuICB9XHJcblxyXG4gIHNldENpdHlMaW1pdChsaW1pdDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlLnNldENpdHlMaW1pdChsaW1pdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZU9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBbWFwQXV0b2NvbXBsZXRlU2VydmljZSwgQW1hcEF1dG9jb21wbGV0ZVdyYXBwZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbWFwLWF1dG9jb21wbGV0ZS9hbWFwLWF1dG9jb21wbGV0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IENoYW5nZUZpbHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYW5nZS1maWx0ZXInO1xyXG5cclxuY29uc3QgQUxMX09QVElPTlMgPSBbXHJcbiAgJ3R5cGUnLFxyXG4gICdjaXR5JyxcclxuICAnZGF0YXR5cGUnLFxyXG4gICdjaXR5bGltaXQnXHJcbl07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W2FtYXBBdXRvY29tcGxldGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW1hcEF1dG9jb21wbGV0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIFRBRyA9ICdhbWFwLWF1dG9jb21wbGV0ZSc7XHJcblxyXG4gIC8qKiDDqMK+wpPDpcKFwqXDpsKPwpDDp8KkwrrDpsKXwrbDqcKZwpDDpcKuwppQT0nDp8KxwrvDpcKewovDr8K8wozDpcKkwprDpMK4wqrDp8KxwrvDpcKewovDp8KUwqjDosKAwpx8w6LCgMKdw6XCiMKGw6nCmsKUw6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6/CvMKaw6bCicKAw6bCnMKJw6fCscK7w6XCiMKrICovXHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIC8qKiDDqMK+wpPDpcKFwqXDpsKPwpDDp8KkwrrDpsKXwrbDqcKZwpDDpcKuwprDpcKfwo7DpcK4woIgKi9cclxuICBASW5wdXQoKSBjaXR5OiBzdHJpbmc7XHJcbiAgLyoqIMOowr/ClMOlwpvCnsOnwprChMOmwpXCsMOmwo3CrsOnwrHCu8Olwp7CiyAqL1xyXG4gIEBJbnB1dCgpIGRhdGF0eXBlOiBzdHJpbmc7XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOpwpnCkMOlwojCtsOlwpzCqMOowq7CvsOnwr3CrsOnwprChMOlwp/CjsOlwrjCgsOlwobChcOmwpDCnMOnwrTCoiAqL1xyXG4gIEBJbnB1dCgpIGNpdHlsaW1pdDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIMOmwo/CksOkwrvCtsOowr3CvcOlwoXCpcOlwq7CjMOmwq/ClcOmwpfCtsOowqfCpsOlwo/CkSAqL1xyXG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogQXV0b2NvbXBsZXRlw6bCj8KSw6TCu8K2w6jCp8Kmw6XCj8KRY29tcGxldGXDpMK6wovDpMK7wrbDpsKXwrbDqMKnwqbDpcKPwpEgKi9cclxuICBAT3V0cHV0KCkgY29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIEF1dG9jb21wbGV0ZcOmwo/CksOkwrvCtsOowqfCpsOlwo/CkWVycm9yw6TCusKLw6TCu8K2w6bCl8K2w6jCp8Kmw6XCj8KRICovXHJcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBBdXRvY29tcGxldGXDpsKPwpLDpMK7wrbDqMKnwqbDpcKPwpFzZWxlY3TDpMK6wovDpMK7wrbDpsKXwrbDqMKnwqbDpcKPwpEgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBBdXRvY29tcGxldGXDpsKPwpLDpMK7wrbDqMKnwqbDpcKPwpFjaG9vc2XDpMK6wovDpMK7wrbDpsKXwrbDqMKnwqbDpcKPwpEgKi9cclxuICBAT3V0cHV0KCkgY2hvb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8QW1hcEF1dG9jb21wbGV0ZVdyYXBwZXI+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhdXRvczogQW1hcEF1dG9jb21wbGV0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuX3BsdWdpbikge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBDaGFuZ2VGaWx0ZXIub2YoY2hhbmdlcyk7XHJcbiAgICAgIGZpbHRlci5oYXM8c3RyaW5nPignY2l0eScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0Q2l0eSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8c3RyaW5nPigndHlwZScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0VHlwZSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8Ym9vbGVhbj4oJ2NpdHlsaW1pdCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0Q2l0eUxpbWl0KHYpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IFV0aWxzLmdldE9wdGlvbnNGb3I8QXV0b2NvbXBsZXRlT3B0aW9ucz4odGhpcywgQUxMX09QVElPTlMpO1xyXG4gICAgb3B0aW9ucy5pbnB1dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuX3BsdWdpbiA9IHRoaXMuYXV0b3Mub2Yob3B0aW9ucyk7XHJcbiAgICB0aGlzLl9wbHVnaW4udGhlbih3cmFwcGVyID0+IHtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKHdyYXBwZXIpO1xyXG4gICAgICB0aGlzLnJlYWR5LmVtaXQod3JhcHBlcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cyh3cmFwcGVyOiBBbWFwQXV0b2NvbXBsZXRlV3JhcHBlcikge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gd3JhcHBlci5vbignY29tcGxldGUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNvbXBsZXRlLmVtaXQoZSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZCh3cmFwcGVyLm9uKCdlcnJvcicpLnN1YnNjcmliZShlID0+IHRoaXMuZXJyb3IuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZCh3cmFwcGVyLm9uKCdzZWxlY3QnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnNlbGVjdC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKHdyYXBwZXIub24oJ2Nob29zZScpLnN1YnNjcmliZShlID0+IHRoaXMuY2hvb3NlLmVtaXQoZSkpKTtcclxuICB9XHJcblxyXG4gIC8vIFNldHRlcnNcclxuICBzZXRDaXR5KGNpdHk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbi50aGVuKHdyYXBwZXIgPT4gd3JhcHBlci5zZXRDaXR5KGNpdHkpKTtcclxuICB9XHJcblxyXG4gIHNldFR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGx1Z2luLnRoZW4od3JhcHBlciA9PiB3cmFwcGVyLnNldFR5cGUodHlwZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2l0eUxpbWl0KGxpbWl0OiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGx1Z2luLnRoZW4od3JhcHBlciA9PiB3cmFwcGVyLnNldENpdHlMaW1pdChsaW1pdCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBQbGFjZVNlYXJjaCwgQm91bmRzLCBQb2x5Z29uIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBQbGFjZVNlYXJjaE9wdGlvbnMsIElMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGx1Z2luTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL3BsdWdpbi1sb2FkZXIvcGx1Z2luLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG4vKipcclxuICogw6XCnMKww6fCgsK5w6bCkMKcw6fCtMKiw6bCnMKNw6XCisKhw6/CvMKMw6bCj8KQw6TCvsKbw6bCn8KQw6TCuMKAw6fCicK5w6XCrsKaw6XCnMKww6XCjMK6w6fCmsKEw6TCvcKNw6fCvcKuw6bCn8Klw6jCr8Kiw6bCnMKNw6XCisKhXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbWFwUGxhY2VTZWFyY2hTZXJ2aWNlIHtcclxuICBUQUcgPSAnYW1hcC1wbGFjZS1zZWFyY2gnO1xyXG5cclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UpIHt9XHJcblxyXG4gIG9mKG9wdHM/OiBQbGFjZVNlYXJjaE9wdGlvbnMpOiBQcm9taXNlPEFtYXBQbGFjZVNlYXJjaFdyYXBwZXI+IHtcclxuICAgIGlmICghdGhpcy5fcGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX3BsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLlBsYWNlU2VhcmNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbi50aGVuKCgpID0+IG5ldyBBbWFwUGxhY2VTZWFyY2hXcmFwcGVyKG9wdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbWFwUGxhY2VTZWFyY2hXcmFwcGVyw6XCr8K5w6jCscKhw6XCsMKGw6nCq8KYw6XCvsK3w6XCjsKfw6fClMKfw6fCmsKEUGxhY2VTZWFyY2jDpcKvwrnDqMKxwqHDpsKPwpDDpMK+wpvDp8KawoTDpsKWwrnDpsKzwpXDpcKwwoHDqMKjwoXDpsKIwpBQcm9taXNlw6fCmsKEw6XCrsKew6fCjsKww6/CvMKMw6bCm8K0w6bClsK5w6TCvsK/w6XCm8Kew6jCsMKDXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW1hcFBsYWNlU2VhcmNoV3JhcHBlciBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBwcml2YXRlIF9wbGFjZVNlYXJjaDogUGxhY2VTZWFyY2g7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdHM/OiBQbGFjZVNlYXJjaE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9wbGFjZVNlYXJjaCA9IG5ldyBBTWFwLlBsYWNlU2VhcmNoKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hdGl2ZSgpOiBQbGFjZVNlYXJjaCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VTZWFyY2g7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDp8KUwqjDpMK6wo7DpMK+wqbDpcKQwqxQbGFjZVNlYXJjaMOkwrrCi8OkwrvCtsOvwrzCjMOowr/ClMOlwpvCnsOlwo/Cr8OkwrvCpcOowqLCq3N1YnNjcmliZcOnwprChE9ic2VydmFibGXDpcKvwrnDqMKxwqFcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmluZEV2ZW50PFBsYWNlU2VhcmNoPih0aGlzLl9wbGFjZVNlYXJjaCwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8e3N0YXR1czogc3RyaW5nLCByZXN1bHQ6IGFueX0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3BsYWNlU2VhcmNoLnNlYXJjaChhZGRyZXNzLCAoc3RhdHVzLCByZXN1bHQpID0+IHtcclxuICAgICAgcmVzb2x2ZSh7c3RhdHVzLCByZXN1bHR9KTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaE5lYXJCeShrZXl3b3JkOiBzdHJpbmcsIGNlbnRlcjogSUxuZ0xhdCwgcmFkaXVzOiBudW1iZXIpOiBQcm9taXNlPHtzdGF0dXM6IHN0cmluZywgcmVzdWx0OiBhbnl9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9wbGFjZVNlYXJjaC5zZWFyY2hOZWFyQnkoa2V5d29yZCwgY2VudGVyLCByYWRpdXMsIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKHtzdGF0dXMsIHJlc3VsdH0pO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoSW5Cb3VuZHMoa2V5d29yZDogc3RyaW5nLCBib3VuZHM6IEJvdW5kc3xQb2x5Z29uKTogUHJvbWlzZTx7c3RhdHVzOiBzdHJpbmcsIHJlc3VsdDogYW55fT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcGxhY2VTZWFyY2guc2VhcmNoSW5Cb3VuZHMoa2V5d29yZCwgYm91bmRzLCAoc3RhdHVzLCByZXN1bHQpID0+IHtcclxuICAgICAgcmVzb2x2ZSh7c3RhdHVzLCByZXN1bHR9KTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGdldERldGFpbHMoUE9JSUQ6IHN0cmluZyk6IFByb21pc2U8e3N0YXR1czogc3RyaW5nLCByZXN1bHQ6IGFueX0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3BsYWNlU2VhcmNoLmdldERldGFpbHMoUE9JSUQsIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKHtzdGF0dXMsIHJlc3VsdH0pO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFnZUluZGV4KHBhZ2VJbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wbGFjZVNlYXJjaC5zZXRQYWdlSW5kZXgocGFnZUluZGV4KTtcclxuICB9XHJcblxyXG4gIHNldFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BsYWNlU2VhcmNoLnNldFBhZ2VTaXplKHBhZ2VTaXplKTtcclxuICB9XHJcblxyXG4gIHNldExhbmcobGFuZzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wbGFjZVNlYXJjaC5zZXRMYW5nKGxhbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFuZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFjZVNlYXJjaC5nZXRMYW5nKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuX3BsYWNlU2VhcmNoLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBwb2lPbkFNQVAob2JqOiBhbnkpIHtcclxuICAgIHRoaXMuX3BsYWNlU2VhcmNoLnBvaU9uQU1BUChvYmopO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2l0eShjaXR5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BsYWNlU2VhcmNoLnNldENpdHkoY2l0eSk7XHJcbiAgfVxyXG5cclxuICBzZXRUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcGxhY2VTZWFyY2guc2V0VHlwZSh0eXBlKTtcclxuICB9XHJcblxyXG4gIHNldENpdHlMaW1pdChsaW1pdDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcGxhY2VTZWFyY2guc2V0Q2l0eUxpbWl0KGxpbWl0KTtcclxuICB9XHJcblxyXG4gIGRldGFpbE9uQU1BUChvYmo6IGFueSkge1xyXG4gICAgdGhpcy5fcGxhY2VTZWFyY2gucG9pT25BTUFQKG9iaik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIERpc3RyaWN0U2VhcmNoIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBEaXN0cmljdFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGx1Z2luTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL3BsdWdpbi1sb2FkZXIvcGx1Z2luLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5pbXBvcnQgeyBEaXN0cmljdFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzL2Rpc3RyaWN0LXNlYXJjaC9kaXN0cmljdC1zZWFyY2gtcmVzdWx0JztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuLyoqXHJcbiAqIMOowqHCjMOmwpTCv8OlwozCusOlwp/Cn8OmwpDCnMOnwrTCosOmwpzCjcOlworCoVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW1hcERpc3RyaWN0U2VhcmNoU2VydmljZSB7XHJcbiAgVEFHID0gJ2FtYXAtZGlzdHJpY3Qtc2VhcmNoJztcclxuXHJcbiAgcHJpdmF0ZSBfcGx1Z2luOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBwbHVnaW5zOiBQbHVnaW5Mb2FkZXJTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBvZihvcHRzPzogRGlzdHJpY3RTZWFyY2hPcHRpb25zKTogUHJvbWlzZTxBbWFwRGlzdHJpY3RTZWFyY2hXcmFwcGVyPiB7XHJcbiAgICBpZiAoIXRoaXMuX3BsdWdpbikge1xyXG4gICAgICB0aGlzLl9wbHVnaW4gPSB0aGlzLnBsdWdpbnMubG9hZCgnQU1hcC5EaXN0cmljdFNlYXJjaCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9wbHVnaW4udGhlbigoKSA9PiBuZXcgQW1hcERpc3RyaWN0U2VhcmNoV3JhcHBlcihvcHRzKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW1hcERpc3RyaWN0U2VhcmNoV3JhcHBlcsOlwq/CucOowrHCocOlwrDChsOpwqvCmMOlwr7Ct8Olwo7Cn8OnwpTCn8OnwprChERpc3RyaWN0U2VhcmNow6XCr8K5w6jCscKhw6bCj8KQw6TCvsKbw6fCmsKEw6bClsK5w6bCs8KVw6XCsMKBw6jCo8KFw6bCiMKQUHJvbWlzZcOnwprChMOlwq7CnsOnwo7CsMOvwrzCjMOmwpvCtMOmwpbCucOkwr7Cv8OlwpvCnsOowrDCg1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFtYXBEaXN0cmljdFNlYXJjaFdyYXBwZXIgZXh0ZW5kcyBFdmVudEJpbmRlciB7XHJcbiAgcHJpdmF0ZSBfZGlzdHJpY3RTZWFyY2g6IERpc3RyaWN0U2VhcmNoO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRzPzogRGlzdHJpY3RTZWFyY2hPcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fZGlzdHJpY3RTZWFyY2ggPSBuZXcgQU1hcC5EaXN0cmljdFNlYXJjaChvcHRzKTtcclxuICB9XHJcblxyXG4gIGdldCBuYXRpdmUoKTogRGlzdHJpY3RTZWFyY2gge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWN0U2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6fClMKow6TCusKOw6TCvsKmw6XCkMKsRGlzdHJpY3RTZWFyY2jDpMK6wovDpMK7wrbDr8K8wozDqMK/wpTDpcKbwp7DpcKPwq/DpMK7wqXDqMKiwqtzdWJzY3JpYmXDp8KawoRPYnNlcnZhYmxlw6XCr8K5w6jCscKhXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRFdmVudDxEaXN0cmljdFNlYXJjaD4odGhpcy5fZGlzdHJpY3RTZWFyY2gsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChhZGRyZXNzOiBzdHJpbmcsIG9wdHM/OiBEaXN0cmljdFNlYXJjaE9wdGlvbnMpOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmcsIHJlc3VsdDogc3RyaW5nIHwgRGlzdHJpY3RTZWFyY2hSZXN1bHQgfT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fZGlzdHJpY3RTZWFyY2guc2VhcmNoKGFkZHJlc3MsIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKHsgc3RhdHVzLCByZXN1bHQgfSk7XHJcbiAgICB9LCBvcHRzKSk7XHJcbiAgfVxyXG5cclxuICBzZXRMZXZlbChsZXZlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kaXN0cmljdFNlYXJjaC5zZXRMZXZlbChsZXZlbCk7XHJcbiAgfVxyXG5cclxuICBzZXRTdWJkaXN0cmljdChkaXN0cmljdDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kaXN0cmljdFNlYXJjaC5zZXRTdWJkaXN0cmljdChkaXN0cmljdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LFxyXG4gIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2lyY2xlLCBNYXAsIExuZ0xhdCwgQm91bmRzLCBDaXJjbGVFZGl0b3IgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IENpcmNsZU9wdGlvbnMsIElMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhbmdlLWZpbHRlcic7XHJcbmltcG9ydCB7IENpcmNsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaXJjbGUvY2lyY2xlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgQUxMX09QVElPTlMgPSBbXHJcbiAgJ3pJbmRleCcsXHJcbiAgJ2NlbnRlcicsXHJcbiAgJ2J1YmJsZScsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ3JhZGl1cycsXHJcbiAgJ3N0cm9rZUNvbG9yJyxcclxuICAnc3Ryb2tlT3BhY2l0eScsXHJcbiAgJ3N0cm9rZVdlaWdodCcsXHJcbiAgJ2ZpbGxDb2xvcicsXHJcbiAgJ2ZpbGxPcGFjaXR5JyxcclxuICAnc3Ryb2tlU3R5bGUnLFxyXG4gICdzdHJva2VEYXNoYXJyYXknLFxyXG4gICdleHREYXRhJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLWNpcmNsZScsXHJcbiAgZXhwb3J0QXM6ICdjaXJjbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbWFwQ2lyY2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIFRBRyA9ICdhbWFwLWNpcmNsZSc7XHJcblxyXG4gIC8vIFRoZXNlIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBpbiBDaXJjbGVPcHRpb25zOlxyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNlbnRlcjogSUxuZ0xhdDtcclxuICBASW5wdXQoKSBidWJibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsbE9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdHJva2VTdHlsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0cm9rZURhc2hhcnJheTogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZXh0RGF0YTogYW55O1xyXG5cclxuICAvLyBUaGlzIG9wdGlvbnMgcHJvcGVydHkgd2lsbCBvdmVycmlkZSBvdGhlciBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBvcHRpb25zOiBDaXJjbGVPcHRpb25zO1xyXG5cclxuICAvLyBFeHRyYSBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlZGl0b3IgPSBmYWxzZTtcclxuXHJcbiAgLy8gYW1hcC1jaXJjbGUgZXZlbnRzOlxyXG4gIEBPdXRwdXQoKSBjaXJjbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByaWdodENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjaXJjbGVIaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjaXJjbGVTaG93ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZURvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlVXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gZWRpdG9yIGV2ZW50czpcclxuICBAT3V0cHV0KCkgZWRpdG9yTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZWRpdG9yQWRqdXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0b3JFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgX2NpcmNsZTogUHJvbWlzZTxDaXJjbGU+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfZWRpdG9yOiBDaXJjbGVFZGl0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNpcmNsZXM6IENpcmNsZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGZpbHRlciA9IENoYW5nZUZpbHRlci5vZihjaGFuZ2VzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2NpcmNsZSkge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IFV0aWxzLmdldE9wdGlvbnNGb3I8Q2lyY2xlT3B0aW9ucz4odGhpcywgQUxMX09QVElPTlMpO1xyXG4gICAgICB0aGlzLl9jaXJjbGUgPSB0aGlzLmNpcmNsZXMuY3JlYXRlKG9wdGlvbnMpO1xyXG4gICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgdGhpcy5fY2lyY2xlLnRoZW4ocCA9PiB0aGlzLnJlYWR5LmVtaXQocCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLmhhczxDaXJjbGVPcHRpb25zPignb3B0aW9ucycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0T3B0aW9ucyh2IHx8IHt9KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PignZXh0RGF0YScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0RXh0RGF0YSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8bnVtYmVyPigncmFkaXVzJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRSYWRpdXModikpO1xyXG4gICAgICBmaWx0ZXIubm90RW1wdHk8TG5nTGF0PignY2VudGVyJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRDZW50ZXIodikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlci5oYXM8Ym9vbGVhbj4oJ2hpZGRlbicpLnN1YnNjcmliZSh2ID0+IHYgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpKTtcclxuICAgIGZpbHRlci5oYXM8Ym9vbGVhbj4oJ2VkaXRvcicpLnN1YnNjcmliZSh2ID0+IHRoaXMudG9nZ2xlRWRpdG9yKHYpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jaXJjbGVzLmRlc3Ryb3kodGhpcy5fY2lyY2xlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLmJpbmRFdmVudCgnY2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNpcmNsZUNsaWNrLmVtaXQoZSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ2RibGNsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5kYmxDbGljay5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgncmlnaHRjbGljaycpLnN1YnNjcmliZShlID0+IHRoaXMucmlnaHRDbGljay5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgnaGlkZScpLnN1YnNjcmliZShlID0+IHRoaXMuY2lyY2xlSGlkZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgnc2hvdycpLnN1YnNjcmliZShlID0+IHRoaXMuY2lyY2xlU2hvdy5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgnbW91c2Vkb3duJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZURvd24uZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ21vdXNldXAnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlVXAuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ21vdXNlb3ZlcicpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VPdmVyLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdtb3VzZW91dCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VPdXQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ2NoYW5nZScpLnN1YnNjcmliZShlID0+IHRoaXMuY2hhbmdlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCd0b3VjaHN0YXJ0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaFN0YXJ0LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCd0b3VjaG1vdmUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnRvdWNoTW92ZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgndG91Y2hlbmQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnRvdWNoRW5kLmVtaXQoZSkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmNpcmNsZXMuYmluZEV2ZW50KHRoaXMuX2NpcmNsZSwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kRWRpdG9yRXZlbnRzKGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmNpcmNsZXMuYmluZEV2ZW50KHRoaXMuX2VkaXRvciwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gUHVibGljIG1ldGhvZHM6XHJcbiAgdG9nZ2xlRWRpdG9yKHY6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh2ICYmICF0aGlzLl9lZGl0b3IpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlcy5sb2FkRWRpdG9yKClcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9jaXJjbGUpXHJcbiAgICAgICAgLnRoZW4oYyA9PiB0aGlzLmNpcmNsZXMuY3JlYXRlRWRpdG9yKGMpKVxyXG4gICAgICAgIC50aGVuKGVkaXRvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9lZGl0b3IgPSBlZGl0b3I7XHJcbiAgICAgICAgICAvLyBCaW5kIGV2ZW50czpcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEVkaXRvckV2ZW50cygnbW92ZScpLnN1YnNjcmliZShlID0+IHRoaXMuZWRpdG9yTW92ZS5lbWl0KGUpKSk7XHJcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFZGl0b3JFdmVudHMoJ2FkanVzdCcpLnN1YnNjcmliZShlID0+IHRoaXMuZWRpdG9yQWRqdXN0LmVtaXQoZSkpKTtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEVkaXRvckV2ZW50cygnZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JFbmQuZW1pdChlKSkpO1xyXG4gICAgICAgICAgZWRpdG9yLm9wZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XHJcbiAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLm9wZW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3IuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlLnRoZW4oYyA9PiBjLnNob3coKSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZS50aGVuKGMgPT4gYy5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbnMocG9pbnQ6IExuZ0xhdHxJTG5nTGF0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlLnRoZW4oYyA9PiBjLmNvbnRhaW5zKHBvaW50KSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR0ZXJzOlxyXG4gIHNldENlbnRlcihsbmdsYXQ6IExuZ0xhdHxJTG5nTGF0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlLnRoZW4oYyA9PiBjLnNldENlbnRlcihsbmdsYXQpKTtcclxuICB9XHJcblxyXG4gIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZS50aGVuKGMgPT4gYy5zZXRSYWRpdXMocmFkaXVzKSk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdDogQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZS50aGVuKGMgPT4gYy5zZXRPcHRpb25zKG9wdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0RGF0YShleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZS50aGVuKGMgPT4gYy5zZXRFeHREYXRhKGV4dCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0dGVyczpcclxuICBnZXRDZW50ZXIoKTogUHJvbWlzZTxMbmdMYXQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaXJjbGUudGhlbihjID0+IGMuZ2V0Q2VudGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFkaXVzKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlLnRoZW4oYyA9PiBjLmdldFJhZGl1cygpKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbnMoKTogUHJvbWlzZTxDaXJjbGVPcHRpb25zPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlLnRoZW4oYyA9PiBjLmdldE9wdGlvbnMoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRCb3VuZHMoKTogUHJvbWlzZTxCb3VuZHM+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaXJjbGUudGhlbihjID0+IGMuZ2V0Qm91bmRzKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXh0RGF0YSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZS50aGVuKGMgPT4gYy5nZXRFeHREYXRhKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIE9uRGVzdHJveSxcclxuICBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENpcmNsZU1hcmtlciwgTWFwLCBMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IENpcmNsZU1hcmtlck9wdGlvbnMsIElMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhbmdlLWZpbHRlcic7XHJcbmltcG9ydCB7IENpcmNsZU1hcmtlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaXJjbGUtbWFya2VyL2NpcmNsZS1tYXJrZXIuc2VydmljZSc7XHJcblxyXG5jb25zdCBBTExfT1BUSU9OUyA9IFtcclxuICAnekluZGV4JyxcclxuICAnY2VudGVyJyxcclxuICAnYnViYmxlJyxcclxuICAnY3Vyc29yJyxcclxuICAncmFkaXVzJyxcclxuICAnc3Ryb2tlQ29sb3InLFxyXG4gICdzdHJva2VPcGFjaXR5JyxcclxuICAnc3Ryb2tlV2VpZ2h0JyxcclxuICAnZmlsbENvbG9yJyxcclxuICAnZmlsbE9wYWNpdHknLFxyXG4gICdleHREYXRhJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLWNpcmNsZS1tYXJrZXInLFxyXG4gIGV4cG9ydEFzOiAnY2lyY2xlLW1hcmtlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEFtYXBDaXJjbGVNYXJrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgVEFHID0gJ2FtYXAtY2lyY2xlLW1hcmtlcic7XHJcblxyXG4gIC8vIFRoZXNlIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBpbiBDaXJjbGVNYXJrZXJPcHRpb25zOlxyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNlbnRlcjogSUxuZ0xhdDtcclxuICBASW5wdXQoKSBidWJibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsbE9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKSBleHREYXRhOiBhbnk7XHJcblxyXG4gIC8vIFRoaXMgb3B0aW9ucyBwcm9wZXJ0eSB3aWxsIG92ZXJyaWRlIG90aGVyIHByb3BlcnR5OlxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IENpcmNsZU1hcmtlck9wdGlvbnM7XHJcblxyXG4gIC8vIEV4dHJhIHByb3BlcnR5OlxyXG4gIEBJbnB1dCgpIGhpZGRlbiA9IGZhbHNlO1xyXG5cclxuICAvLyBhbWFwLWNpcmNsZSBldmVudHM6XHJcbiAgQE91dHB1dCgpIGNpcmNsZU1hcmtlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJpZ2h0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNpcmNsZU1hcmtlckhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNpcmNsZU1hcmtlclNob3cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9jbTogUHJvbWlzZTxDaXJjbGVNYXJrZXI+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgY21zOiBDaXJjbGVNYXJrZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSBDaGFuZ2VGaWx0ZXIub2YoY2hhbmdlcyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9jbSkge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IFV0aWxzLmdldE9wdGlvbnNGb3I8Q2lyY2xlTWFya2VyT3B0aW9ucz4odGhpcywgQUxMX09QVElPTlMpO1xyXG4gICAgICB0aGlzLl9jbSA9IHRoaXMuY21zLmNyZWF0ZShvcHRpb25zKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX2NtLnRoZW4ocCA9PiB0aGlzLnJlYWR5LmVtaXQocCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLmhhczxDaXJjbGVNYXJrZXJPcHRpb25zPignb3B0aW9ucycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0T3B0aW9ucyh2IHx8IHt9KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PignZXh0RGF0YScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0RXh0RGF0YSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8bnVtYmVyPigncmFkaXVzJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRSYWRpdXModikpO1xyXG4gICAgICBmaWx0ZXIubm90RW1wdHk8TG5nTGF0PignY2VudGVyJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRDZW50ZXIodikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlci5oYXM8Ym9vbGVhbj4oJ2hpZGRlbicpLnN1YnNjcmliZSh2ID0+IHYgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jbXMuZGVzdHJveSh0aGlzLl9jbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRFdmVudHMoKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gdGhpcy5iaW5kRXZlbnQoJ2NsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5jaXJjbGVNYXJrZXJDbGljay5lbWl0KGUpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdkYmxjbGljaycpLnN1YnNjcmliZShlID0+IHRoaXMuZGJsQ2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ3JpZ2h0Y2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnJpZ2h0Q2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ2hpZGUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNpcmNsZU1hcmtlckhpZGUuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ3Nob3cnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNpcmNsZU1hcmtlclNob3cuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ21vdXNlZG93bicpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VEb3duLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdtb3VzZXVwJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZVVwLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdtb3VzZW92ZXInKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlT3Zlci5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgnbW91c2VvdXQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlT3V0LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdjaGFuZ2UnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNoYW5nZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgndG91Y2hzdGFydCcpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hTdGFydC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgndG91Y2htb3ZlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaE1vdmUuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ3RvdWNoZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaEVuZC5lbWl0KGUpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRFdmVudChldmVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbXMuYmluZEV2ZW50KHRoaXMuX2NtLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBQdWJsaWMgbWV0aG9kczpcclxuICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NtLnRoZW4oYyA9PiBjLnNob3coKSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NtLnRoZW4oYyA9PiBjLmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR0ZXJzOlxyXG4gIHNldENlbnRlcihsbmdsYXQ6IExuZ0xhdHxJTG5nTGF0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY20udGhlbihjID0+IGMuc2V0Q2VudGVyKGxuZ2xhdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFkaXVzKHJhZGl1czogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY20udGhlbihjID0+IGMuc2V0UmFkaXVzKHJhZGl1cykpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHQ6IENpcmNsZU1hcmtlck9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbS50aGVuKGMgPT4gYy5zZXRPcHRpb25zKG9wdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0RGF0YShleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NtLnRoZW4oYyA9PiBjLnNldEV4dERhdGEoZXh0KSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJzOlxyXG4gIGdldENlbnRlcigpOiBQcm9taXNlPExuZ0xhdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NtLnRoZW4oYyA9PiBjLmdldENlbnRlcigpKTtcclxuICB9XHJcblxyXG4gIGdldFJhZGl1cygpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NtLnRoZW4oYyA9PiBjLmdldFJhZGl1cygpKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbnMoKTogUHJvbWlzZTxDaXJjbGVNYXJrZXJPcHRpb25zPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY20udGhlbihjID0+IGMuZ2V0T3B0aW9ucygpKTtcclxuICB9XHJcblxyXG4gIGdldEV4dERhdGEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9jbS50aGVuKGMgPT4gYy5nZXRFeHREYXRhKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9wbHVnaW4tbG9hZGVyL3BsdWdpbi1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50QmluZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQtYmluZGVyJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgQ2lyY2xlLCBNYXJrZXIsIE1vdXNlVG9vbCwgUG9seWxpbmUsIFBvbHlnb24sIE1hcCB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDaXJjbGVPcHRpb25zLCBNYXJrZXJPcHRpb25zLCBQb2x5Z29uT3B0aW9ucywgUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFtYXBNb3VzZVRvb2xTZXJ2aWNlIHtcclxuICBUQUcgPSAnYW1hcC1tb3VzZS10b29sJztcclxuXHJcbiAgcHJpdmF0ZSBfcGx1Z2luOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBwbHVnaW5zOiBQbHVnaW5Mb2FkZXJTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBvZihtYXA6IE1hcCkge1xyXG4gICAgaWYgKCF0aGlzLl9wbHVnaW4pIHtcclxuICAgICAgdGhpcy5fcGx1Z2luID0gdGhpcy5wbHVnaW5zLmxvYWQoJ0FNYXAuTW91c2VUb29sJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fcGx1Z2luLnRoZW4oKCkgPT4gbmV3IEFtYXBNb3VzZVRvb2xXcmFwcGVyKG1hcCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFtYXBNb3VzZVRvb2xXcmFwcGVyIGV4dGVuZHMgRXZlbnRCaW5kZXIge1xyXG4gIHByaXZhdGUgX21vdXNlVG9vbDogTW91c2VUb29sO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy8gSSdtIG5vdCBhYmxlIHRvIHVzZSBkZWNsYXJlZCB0eXBlICdNYXAnIGhlcmUsIHJvbGx1cCBjb21wbGFpbnM6XHJcbiAgLy8gJ01hcCcgaXMgbm90IGV4cG9ydGVkIGJ5IGxpYi8ubmdfcGtnX2J1aWxkL25neC1hbWFwL3RzL3R5cGVzL2NsYXNzL2FtYXAubWFwLmpzXHJcbiAgLy8gaXQgbWF5IGJlIHJlbGF0ZWQgdG8gdGhpcyBpc3N1ZVxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xMDQ4XHJcbiAgY29uc3RydWN0b3IobWFwOiBhbnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9tb3VzZVRvb2wgPSBuZXcgQU1hcC5Nb3VzZVRvb2wobWFwKTtcclxuICB9XHJcblxyXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmluZEV2ZW50PE1vdXNlVG9vbD4odGhpcy5fbW91c2VUb29sLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmF0aXZlKCk6IE1vdXNlVG9vbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW91c2VUb29sO1xyXG4gIH1cclxuXHJcbiAgbWFya2VyKG9wdGlvbnM/OiBNYXJrZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9leGVjKCdtYXJrZXInLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHBvbHlsaW5lKG9wdGlvbnM/OiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhlYygncG9seWxpbmUnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHBvbHlnb24ob3B0aW9ucz86IFBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhlYygncG9seWdvbicsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY2lyY2xlKG9wdGlvbnM/OiBDaXJjbGVPcHRpb25zKTogUHJvbWlzZTxDaXJjbGU+IHtcclxuICAgIHJldHVybiB0aGlzLl9leGVjKCdjaXJjbGUnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG8gYWRkIHJlY3RhbmdsZSBjbGFzc1xyXG4gIHJlY3RhbmdsZShvcHRpb25zPzogUG9seWdvbk9wdGlvbnMpOiBQcm9taXNlPFBvbHlnb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9leGVjKCdyZWN0YW5nbGUnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHJ1bGUob3B0aW9ucz86IFBvbHlsaW5lT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4ZWMoJ3J1bGUnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIG1lYXN1cmVBcmVhKG9wdGlvbnM/OiBQb2x5Z29uT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4ZWMoJ21lYXN1cmVBcmVhJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICByZWN0Wm9vbUluKG9wdGlvbnM/OiBQb2x5Z29uT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4ZWMoJ3JlY3Rab29tSW4nLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHJlY3Rab29tT3V0KG9wdGlvbnM/OiBQb2x5Z29uT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4ZWMoJ3JlY3Rab29tT3V0Jywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShjbGVhcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX21vdXNlVG9vbC5jbG9zZShjbGVhcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9leGVjPFQ+KG1ldGhvZDogc3RyaW5nLCBvcHRzOiBhbnkpOiBQcm9taXNlPFQ+IHtcclxuICAgIHRoaXMuX21vdXNlVG9vbFttZXRob2RdKG9wdHMpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLm9uKCdkcmF3JylcclxuICAgICAgICAuc3Vic2NyaWJlKCh7IG9iaiB9KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICByZXNvbHZlKG9iaik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcclxuICBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG5nTGF0LCBTaXplLCBUZXh0LCBJY29uLCBQaXhlbCwgTWFwIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBJTG5nTGF0LCBJUGl4ZWwsIElJY29uLCBUZXh0T3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VGaWx0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9jaGFuZ2UtZmlsdGVyJztcclxuaW1wb3J0IHsgVGV4dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZXh0L3RleHQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpeGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BpeGVsL3BpeGVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ljb24vaWNvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW1hcEluZm9XaW5kb3dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FtYXAtaW5mby13aW5kb3cvYW1hcC1pbmZvLXdpbmRvdy5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQUxMX09QVElPTlMgPSBbXHJcbiAgJ3RleHQnLFxyXG4gICd0ZXh0QWxpZ24nLFxyXG4gICd2ZXJ0aWNhbEFsaWduJyxcclxuICAncG9zaXRpb24nLFxyXG4gICdvZmZzZXQnLFxyXG4gICd0b3BXaGVuQ2xpY2snLFxyXG4gICdidWJibGUnLFxyXG4gICdkcmFnZ2FibGUnLFxyXG4gICdyYWlzZU9uRHJhZycsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ3Zpc2libGUnLFxyXG4gICd6SW5kZXgnLFxyXG4gICdhbmdsZScsXHJcbiAgJ2F1dG9Sb3RhdGlvbicsXHJcbiAgJ2FuaW1hdGlvbicsXHJcbiAgJ3NoYWRvdycsXHJcbiAgJ3RpdGxlJyxcclxuICAnY2xpY2thYmxlJyxcclxuICAnZXh0RGF0YScsXHJcbiAgJ3N0eWxlJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLXRleHQnLFxyXG4gIGV4cG9ydEFzOiAndGV4dCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFtYXBUZXh0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIFRBRyA9ICdhbWFwLXRleHQnO1xyXG5cclxuICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgaW4gVGV4dE9wdGlvbnM6XHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRleHRBbGlnbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246IHN0cmluZztcclxuICBASW5wdXQoKSBwb3NpdGlvbjogSUxuZ0xhdDtcclxuICBASW5wdXQoKSBvZmZzZXQ6IElQaXhlbDtcclxuICBASW5wdXQoKSB0b3BXaGVuQ2xpY2s6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYnViYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSByYWlzZU9uRHJhZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjdXJzb3I6IHN0cmluZztcclxuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGFuZ2xlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgYXV0b1JvdGF0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNoYWRvdzogSUljb247XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbGlja2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXh0RGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIHN0eWxlOiBhbnk7XHJcblxyXG4gIC8vIEV4dHJhIHByb3BlcnR5OlxyXG4gIEBJbnB1dCgpIGlzVG9wOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhpZGRlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wZW5JbmZvV2luZG93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpbkNsdXN0ZXIgPSBmYWxzZTtcclxuXHJcbiAgLy8gYW1hcC10ZXh0IGV2ZW50czpcclxuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRleHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJpZ2h0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZVVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdnaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3ZpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdmVlbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdmVhbG9uZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gYW1hcC1pbmZvLXdpbmRvdzpcclxuICBAQ29udGVudENoaWxkcmVuKEFtYXBJbmZvV2luZG93Q29tcG9uZW50KSBpbmZvV2luZG93Q29tcG9uZW50ID0gbmV3IFF1ZXJ5TGlzdDxBbWFwSW5mb1dpbmRvd0NvbXBvbmVudD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfdGV4dDogUHJvbWlzZTxUZXh0PjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRleHRzOiBUZXh0U2VydmljZSxcclxuICAgIHByaXZhdGUgcGl4ZWw6IFBpeGVsU2VydmljZSxcclxuICAgIHByaXZhdGUgaWNvbnM6IEljb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgZmlsdGVyID0gQ2hhbmdlRmlsdGVyLm9mKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmICghdGhpcy5fdGV4dCkge1xyXG4gICAgICAvLyBkbyBub3QgZHJhdyB0ZXh0IHdoZW4gbm8gcG9pc3Rpb24gZGVmaW5lZC5cclxuICAgICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7IHJldHVybjsgfVxyXG4gICAgICBjb25zdCBvcHRpb25zID0gVXRpbHMuZ2V0T3B0aW9uc0ZvcjxUZXh0T3B0aW9ucz4odGhpcywgQUxMX09QVElPTlMpO1xyXG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy50ZXh0cy5jcmVhdGUob3B0aW9ucywgIXRoaXMuaW5DbHVzdGVyKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRoaXMucmVhZHkuZW1pdCh0ZXh0KSk7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5mb1dpbmRvdygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUluZm9XaW5kb3dQb3NpdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLmhhczxzdHJpbmc+KCd0ZXh0Jykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRUZXh0KHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxJSWNvbj4oJ3NoYWRvdycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0U2hhZG93KHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxzdHJpbmc+KCd0aXRsZScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0VGl0bGUodikpO1xyXG4gICAgICBmaWx0ZXIuaGFzPGFueT4oJ2V4dERhdGEnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldEV4dERhdGEodikpO1xyXG4gICAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdjbGlja2FibGUnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldENsaWNrYWJsZSghIXYpKTtcclxuICAgICAgZmlsdGVyLmhhczxib29sZWFuPignZHJhZ2dhYmxlJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXREcmFnZ2FibGUoISF2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PigndmlzaWJsZScpLnN1YnNjcmliZSh2ID0+IHYgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpKTtcclxuICAgICAgZmlsdGVyLmhhczxzdHJpbmc+KCdjdXJzb3InKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldEN1cnNvcih2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8c3RyaW5nPignYW5pbWF0aW9uJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRBbmltYXRpb24odikpO1xyXG4gICAgICBmaWx0ZXIuaGFzPHN0cmluZz4oJ3N0eWxlJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRTdHlsZSh2KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8bnVtYmVyPignYW5nbGUnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldEFuZ2xlKHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxudW1iZXI+KCd6SW5kZXgnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldHpJbmRleCh2KSk7XHJcbiAgICAgIGZpbHRlci5ub3RFbXB0eTxJUGl4ZWw+KCdvZmZzZXQnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldE9mZnNldCh2KSk7XHJcbiAgICAgIGZpbHRlci5ub3RFbXB0eTxMbmdMYXQ+KCdwb3NpdGlvbicpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0UG9zaXRpb24odikpO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignaXNUb3AnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldFRvcCghIXYpKTtcclxuICAgIGZpbHRlci5oYXM8Ym9vbGVhbj4oJ2hpZGRlbicpLnN1YnNjcmliZSh2ID0+IHYgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnRleHRzLmRlc3Ryb3kodGhpcy5fdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUluZm9XaW5kb3coKTtcclxuICAgIHRoaXMuaW5mb1dpbmRvd0NvbXBvbmVudC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUluZm9XaW5kb3coKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUluZm9XaW5kb3coKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvV2luZG93Q29tcG9uZW50ICYmIHRoaXMuX3RleHQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5mb1dpbmRvd0NvbXBvbmVudC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZSh0aGlzLlRBRywgJ0V4cGVjdGVkIG5vIG1vcmUgdGhhbiAxIGluZm8gd2luZG93LicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbmZvV2luZG93Q29tcG9uZW50LmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICBjb21wb25lbnQuaG9zdE1hcmtlciA9IHRoaXMuX3RleHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJbmZvV2luZG93UG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvV2luZG93Q29tcG9uZW50ICYmIHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5pbmZvV2luZG93Q29tcG9uZW50LmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICBjb21wb25lbnQudG9nZ2xlT3BlbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLmJpbmRUZXh0RXZlbnQoJ2NsaWNrJykuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vcGVuSW5mb1dpbmRvdykge1xyXG4gICAgICAgIHRoaXMuaW5mb1dpbmRvd0NvbXBvbmVudC5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICBjb21wb25lbnQub3BlbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGV4dENsaWNrLmVtaXQoZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFRleHRFdmVudCgnZGJsY2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFRleHRFdmVudCgncmlnaHRjbGljaycpLnN1YnNjcmliZShlID0+IHRoaXMucmlnaHRDbGljay5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRUZXh0RXZlbnQoJ21vdXNlbW92ZScpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VNb3ZlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFRleHRFdmVudCgnbW91c2VvdmVyJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU92ZXIuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVGV4dEV2ZW50KCdtb3VzZW91dCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VPdXQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVGV4dEV2ZW50KCdtb3VzZWRvd24nKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlRG93bi5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRUZXh0RXZlbnQoJ21vdXNldXAnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlVXAuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVGV4dEV2ZW50KCdkcmFnc3RhcnQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRyYWdTdGFydC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRUZXh0RXZlbnQoJ2RyYWdnaW5nJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5kcmFnZ2luZy5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRUZXh0RXZlbnQoJ2RyYWdlbmQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRyYWdFbmQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVGV4dEV2ZW50KCd0b3VjaHN0YXJ0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaFN0YXJ0LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFRleHRFdmVudCgndG91Y2htb3ZlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaE1vdmUuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVGV4dEV2ZW50KCd0b3VjaGVuZCcpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hFbmQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVGV4dEV2ZW50KCdtb3ZpbmcnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdmluZy5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRUZXh0RXZlbnQoJ21vdmVlbmQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdmVlbmQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kVGV4dEV2ZW50KCdtb3ZlYWxvbmcnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdmVhbG9uZy5lbWl0KGUpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRUZXh0RXZlbnQoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudGV4dHMuYmluZEV2ZW50KHRoaXMuX3RleHQsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGdldCBtYXJrZXIoKTogUHJvbWlzZTxUZXh0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcclxuICB9XHJcblxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKG0gPT4gbS5zaG93KCkpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4obSA9PiBtLmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBBbmltYXRpb25zXHJcbiAgbW92ZVRvKHBvc2l0aW9uOiBJTG5nTGF0LCBzcGVlZDogbnVtYmVyLCBmPzogKGs6IGFueSkgPT4gYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5tb3ZlVG8ocG9zaXRpb24sIHNwZWVkLCBmKSk7XHJcbiAgfVxyXG5cclxuICBtb3ZlQWxvbmcocGF0aDogSUxuZ0xhdFtdLCBzcGVlZDogbnVtYmVyLCBmPzogKGs6IGFueSkgPT4gYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5tb3ZlQWxvbmcocGF0aCwgc3BlZWQsIGYpKTtcclxuICB9XHJcblxyXG4gIHN0b3BNb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuc3RvcE1vdmUoKSk7XHJcbiAgfVxyXG5cclxuICBwYXVzZU1vdmUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5wYXVzZU1vdmUoKSk7XHJcbiAgfVxyXG5cclxuICByZXN1bWVNb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQucmVzdW1lTW92ZSgpKTtcclxuICB9XHJcblxyXG4gIC8vIFNldHRlcnNcclxuICBzZXRUZXh0KHRleHQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ID0+IHQuc2V0VGV4dCh0ZXh0KSk7XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZShvYmo6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ID0+IHQuc2V0U3R5bGUob2JqKSk7XHJcbiAgfVxyXG5cclxuICBzZXRPZmZzZXQob2Zmc2V0OiBJUGl4ZWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4odGV4dCA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5waXhlbC5jcmVhdGUob2Zmc2V0LCAnb2Zmc2V0Jyk7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRleHQuc2V0T2Zmc2V0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTaGFkb3coc2hhZG93OiBJSWNvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSA8SWNvbj50aGlzLmljb25zLmNyZWF0ZShzaGFkb3csICdzaGFkb3cnKTtcclxuICAgICAgdGV4dC5zZXRTaGFkb3codmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5zZXREcmFnZ2FibGUoZHJhZ2dhYmxlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5zZXRDbGlja2FibGUoY2xpY2thYmxlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbihwb3NpdGlvbjogTG5nTGF0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4ge1xyXG4gICAgICB0ZXh0LnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgdGhpcy51cGRhdGVJbmZvV2luZG93UG9zaXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QW5nbGUoYW5nbGU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuc2V0QW5nbGUoYW5nbGUpKTtcclxuICB9XHJcblxyXG4gIHNldHpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuc2V0ekluZGV4KHpJbmRleCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuc2V0VGl0bGUodGl0bGUpKTtcclxuICB9XHJcblxyXG4gIHNldEN1cnNvcihjdXJzb3I6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuc2V0Q3Vyc29yKGN1cnNvcikpO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9wKGlzVG9wOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5zZXRUb3AoaXNUb3ApKTtcclxuICB9XHJcblxyXG4gIHNldEV4dERhdGEoZGF0YTogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5zZXRFeHREYXRhKGRhdGEpKTtcclxuICB9XHJcblxyXG4gIHNldEFuaW1hdGlvbihhbmltYXRpb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuc2V0QW5pbWF0aW9uKGFuaW1hdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0dGVyc1xyXG4gIGdldFRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4odGV4dCA9PiB0ZXh0LmdldFRleHQoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRPZmZzZXQoKTogUHJvbWlzZTxQaXhlbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuZ2V0T2Zmc2V0KCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zaXRpb24oKTogUHJvbWlzZTxMbmdMYXQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4odGV4dCA9PiB0ZXh0LmdldFBvc2l0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5nbGUoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4odGV4dCA9PiB0ZXh0LmdldEFuZ2xlKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0ekluZGV4KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5nZXR6SW5kZXgoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQudGhlbih0ZXh0ID0+IHRleHQuZ2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3AoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5nZXRUb3AoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTaGFkb3coKTogUHJvbWlzZTxJY29uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5nZXRTaGFkb3coKSk7XHJcbiAgfVxyXG5cclxuICBnZXRFeHREYXRhKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5nZXRFeHREYXRhKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWFwKCk6IFByb21pc2U8TWFwPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dC50aGVuKHRleHQgPT4gdGV4dC5nZXRNYXAoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4odGV4dCA9PiB0ZXh0LmdldEFuaW1hdGlvbigpKTtcclxuICB9XHJcblxyXG4gIGdldENsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4odGV4dCA9PiB0ZXh0LmdldENsaWNrYWJsZSgpKTtcclxuICB9XHJcblxyXG4gIGdldERyYWdnYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0LnRoZW4odGV4dCA9PiB0ZXh0LmdldERyYWdnYWJsZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksXHJcbiAgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZXppZXJDdXJ2ZSwgTWFwLCBCb3VuZHMgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IEJlemllckN1cnZlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEN1cnZlUGF0aCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZS9vdmVybGF5cy9iZXppZXItY3VydmUtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhbmdlLWZpbHRlcic7XHJcbmltcG9ydCB7IEJlemllckN1cnZlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Jlemllci1jdXJ2ZS9iZXppZXItY3VydmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlemllckN1cnZlRWRpdG9yLCBCZXppZXJDdXJ2ZUVkaXRvck9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcy9hbWFwLmVkaXRvcic7XHJcblxyXG5jb25zdCBBTExfT1BUSU9OUyA9IFtcclxuICAncGF0aCcsXHJcbiAgJ3N0cm9rZUNvbG9yJyxcclxuICAnc3Ryb2tlT3BhY2l0eScsXHJcbiAgJ3N0cm9rZVdlaWdodCcsXHJcbiAgJ3N0cm9rZVN0eWxlJyxcclxuICAnc3Ryb2tlRGFzaGFycmF5JyxcclxuICAnekluZGV4JyxcclxuICAnc2hvd0RpcicsXHJcbiAgJ2J1YmJsZScsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ2lzT3V0bGluZScsXHJcbiAgJ291dGxpbmVDb2xvcicsXHJcbiAgJ2JvcmRlcldlaWdodCcsXHJcbl07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2FtYXAtYmV6aWVyLWN1cnZlJyxcclxuICBleHBvcnRBczogJ2Jlemllci1jdXJ2ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFtYXBCZXppZXJDdXJ2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBUQUcgPSAnYW1hcC1iZXppZXItY3VydmUnO1xyXG5cclxuICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgaW4gQmV6aWVyQ3VydmVPcHRpb25zOlxyXG4gIEBJbnB1dCgpIHBhdGg6IEN1cnZlUGF0aDtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBidWJibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNPdXRsaW5lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJvcmRlcldlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG91dGxpbmVDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3Ryb2tlT3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0cm9rZVdlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0cm9rZVN0eWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3Ryb2tlRGFzaGFycmF5OiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBleHREYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgc2hvd0RpcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjdXJzb3I6IHN0cmluZztcclxuXHJcbiAgLy8gVGhpcyBvcHRpb25zIHByb3BlcnR5IHdpbGwgb3ZlcnJpZGUgb3RoZXIgcHJvcGVydHk6XHJcbiAgQElucHV0KCkgb3B0aW9uczogQmV6aWVyQ3VydmVPcHRpb25zO1xyXG5cclxuICAvLyBFeHRyYSBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlZGl0b3IgPSBmYWxzZTtcclxuICBASW5wdXQoKSBlZGl0b3JPcHRpb25zOiBCZXppZXJDdXJ2ZUVkaXRvck9wdGlvbnM7XHJcblxyXG4gIC8vIGFtYXAtYmV6aWVyLWN1cnZlIGV2ZW50czpcclxuICBAT3V0cHV0KCkgYmV6aWVyQ3VydmVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByaWdodENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBiZXppZXJDdXJ2ZUhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGJlemllckN1cnZlU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZVVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIGVkaXRvciBldmVudHM6XHJcbiAgQE91dHB1dCgpIGVkaXRvckFkZG5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVkaXRvclJlbW92ZW5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVkaXRvckFkanVzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZWRpdG9yRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9iZXppZXJDdXJ2ZTogUHJvbWlzZTxCZXppZXJDdXJ2ZT47XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIF9lZGl0b3I6IEJlemllckN1cnZlRWRpdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBiZXppZXJDdXJ2ZXM6IEJlemllckN1cnZlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgZmlsdGVyID0gQ2hhbmdlRmlsdGVyLm9mKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmICghdGhpcy5fYmV6aWVyQ3VydmUpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBVdGlscy5nZXRPcHRpb25zRm9yPEJlemllckN1cnZlT3B0aW9ucz4odGhpcywgQUxMX09QVElPTlMpO1xyXG4gICAgICB0aGlzLl9iZXppZXJDdXJ2ZSA9IHRoaXMuYmV6aWVyQ3VydmVzLmNyZWF0ZShvcHRpb25zKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX2JlemllckN1cnZlLnRoZW4ocCA9PiB0aGlzLnJlYWR5LmVtaXQocCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLmhhczxDdXJ2ZVBhdGg+KCdwYXRoJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRQYXRoKHYpKTtcclxuICAgICAgZmlsdGVyLmhhczxCZXppZXJDdXJ2ZU9wdGlvbnM+KCdvcHRpb25zJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRPcHRpb25zKHYgfHwge30pKTtcclxuICAgICAgZmlsdGVyLmhhczxhbnk+KCdleHREYXRhJykuc3Vic2NyaWJlKHYgPT4gdGhpcy5zZXRFeHREYXRhKHYpKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdoaWRkZW4nKS5zdWJzY3JpYmUodiA9PiB2ID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKSk7XHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdlZGl0b3InKS5zdWJzY3JpYmUodiA9PiB0aGlzLnRvZ2dsZUVkaXRvcih2KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuYmV6aWVyQ3VydmVzLmRlc3Ryb3kodGhpcy5fYmV6aWVyQ3VydmUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kRXZlbnRzKCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IHRoaXMuYmluZEJlemllckN1cnZlRXZlbnQoJ2NsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5iZXppZXJDdXJ2ZUNsaWNrLmVtaXQoZSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kQmV6aWVyQ3VydmVFdmVudCgnZGJsY2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEJlemllckN1cnZlRXZlbnQoJ3JpZ2h0Y2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnJpZ2h0Q2xpY2suZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kQmV6aWVyQ3VydmVFdmVudCgnaGlkZScpLnN1YnNjcmliZShlID0+IHRoaXMuYmV6aWVyQ3VydmVIaWRlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEJlemllckN1cnZlRXZlbnQoJ3Nob3cnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmJlemllckN1cnZlU2hvdy5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRCZXppZXJDdXJ2ZUV2ZW50KCdtb3VzZWRvd24nKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlRG93bi5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRCZXppZXJDdXJ2ZUV2ZW50KCdtb3VzZXVwJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZVVwLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEJlemllckN1cnZlRXZlbnQoJ21vdXNlb3ZlcicpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VPdmVyLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEJlemllckN1cnZlRXZlbnQoJ21vdXNlb3V0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU91dC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRCZXppZXJDdXJ2ZUV2ZW50KCdjaGFuZ2UnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNoYW5nZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRCZXppZXJDdXJ2ZUV2ZW50KCd0b3VjaHN0YXJ0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaFN0YXJ0LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEJlemllckN1cnZlRXZlbnQoJ3RvdWNobW92ZScpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hNb3ZlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEJlemllckN1cnZlRXZlbnQoJ3RvdWNoZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaEVuZC5lbWl0KGUpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRCZXppZXJDdXJ2ZUV2ZW50KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJlemllckN1cnZlcy5iaW5kRXZlbnQodGhpcy5fYmV6aWVyQ3VydmUsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZEVkaXRvckV2ZW50cyhldmVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZXppZXJDdXJ2ZXMuYmluZEV2ZW50KHRoaXMuX2VkaXRvciwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gUHVibGljIG1ldGhvZHM6XHJcbiAgdG9nZ2xlRWRpdG9yKHY6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh2ICYmICF0aGlzLl9lZGl0b3IpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYmV6aWVyQ3VydmVzLmxvYWRFZGl0b3IoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuX2JlemllckN1cnZlKVxyXG4gICAgICAgIC50aGVuKGMgPT4gdGhpcy5iZXppZXJDdXJ2ZXMuY3JlYXRlRWRpdG9yKGMsIHRoaXMuZWRpdG9yT3B0aW9ucykpXHJcbiAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcclxuICAgICAgICAgIHRoaXMuX2VkaXRvciA9IGVkaXRvcjtcclxuICAgICAgICAgIC8vIEJpbmQgZXZlbnRzOlxyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdhZGRub2RlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JBZGRub2RlLmVtaXQoZSkpKTtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEVkaXRvckV2ZW50cygnYWRqdXN0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JBZGp1c3QuZW1pdChlKSkpO1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdyZW1vdmVub2RlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JSZW1vdmVub2RlLmVtaXQoZSkpKTtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEVkaXRvckV2ZW50cygnZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lZGl0b3JFbmQuZW1pdChlKSkpO1xyXG4gICAgICAgICAgZWRpdG9yLm9wZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XHJcbiAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLm9wZW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3IuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmV6aWVyQ3VydmUudGhlbihwID0+IHAuc2hvdygpKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmV6aWVyQ3VydmUudGhlbihwID0+IHAuaGlkZSgpKTtcclxuICB9XHJcblxyXG4gIC8vIFNldHRlcnM6XHJcbiAgc2V0UGF0aChwYXRoOiBDdXJ2ZVBhdGgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9iZXppZXJDdXJ2ZS50aGVuKHAgPT4gcC5zZXRQYXRoKHBhdGgpKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMob3B0OiBCZXppZXJDdXJ2ZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9iZXppZXJDdXJ2ZS50aGVuKHAgPT4gcC5zZXRPcHRpb25zKG9wdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0RGF0YShleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JlemllckN1cnZlLnRoZW4ocCA9PiBwLnNldEV4dERhdGEoZXh0KSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJzOlxyXG4gIGdldFBhdGgoKTogUHJvbWlzZTxudW1iZXJbXVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmV6aWVyQ3VydmUudGhlbihwID0+IHAuZ2V0UGF0aCgpKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbnMoKTogUHJvbWlzZTxCZXppZXJDdXJ2ZU9wdGlvbnM+IHtcclxuICAgIHJldHVybiB0aGlzLl9iZXppZXJDdXJ2ZS50aGVuKHAgPT4gcC5nZXRPcHRpb25zKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGVuZ3RoKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmV6aWVyQ3VydmUudGhlbihwID0+IHAuZ2V0TGVuZ3RoKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm91bmRzKCk6IFByb21pc2U8Qm91bmRzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmV6aWVyQ3VydmUudGhlbihwID0+IHAuZ2V0Qm91bmRzKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXh0RGF0YSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JlemllckN1cnZlLnRoZW4ocCA9PiBwLmdldEV4dERhdGEoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LFxyXG4gIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWxsaXBzZSwgTWFwLCBMbmdMYXQsIEJvdW5kcywgRWxsaXBzZUVkaXRvciB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgRWxsaXBzZU9wdGlvbnMsIElMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhbmdlLWZpbHRlcic7XHJcbmltcG9ydCB7IEVsbGlwc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZWxsaXBzZS9lbGxpcHNlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgQUxMX09QVElPTlMgPSBbXHJcbiAgJ3pJbmRleCcsXHJcbiAgJ2NlbnRlcicsXHJcbiAgJ2J1YmJsZScsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ3JhZGl1cycsXHJcbiAgJ3N0cm9rZUNvbG9yJyxcclxuICAnc3Ryb2tlT3BhY2l0eScsXHJcbiAgJ3N0cm9rZVdlaWdodCcsXHJcbiAgJ2ZpbGxDb2xvcicsXHJcbiAgJ2ZpbGxPcGFjaXR5JyxcclxuICAnc3Ryb2tlU3R5bGUnLFxyXG4gICdzdHJva2VEYXNoYXJyYXknLFxyXG4gICdleHREYXRhJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLWVsbGlwc2UnLFxyXG4gIGV4cG9ydEFzOiAnZWxsaXBzZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFtYXBFbGxpcHNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIFRBRyA9ICdhbWFwLWVsbGlwc2UnO1xyXG5cclxuICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgaW4gRWxsaXBzZU9wdGlvbnM6XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY2VudGVyOiBJTG5nTGF0O1xyXG4gIEBJbnB1dCgpIGJ1YmJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjdXJzb3I6IHN0cmluZztcclxuICBASW5wdXQoKSByYWRpdXM6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdHJva2VXZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBmaWxsT3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0cm9rZVN0eWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3Ryb2tlRGFzaGFycmF5OiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBleHREYXRhOiBhbnk7XHJcblxyXG4gIC8vIFRoaXMgb3B0aW9ucyBwcm9wZXJ0eSB3aWxsIG92ZXJyaWRlIG90aGVyIHByb3BlcnR5OlxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEVsbGlwc2VPcHRpb25zO1xyXG5cclxuICAvLyBFeHRyYSBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlZGl0b3IgPSBmYWxzZTtcclxuXHJcbiAgLy8gYW1hcC1lbGxpcHNlIGV2ZW50czpcclxuICBAT3V0cHV0KCkgZWxsaXBzZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJpZ2h0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVsbGlwc2VIaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlbGxpcHNlU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZVVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIGVkaXRvciBldmVudHM6XHJcbiAgQE91dHB1dCgpIGVkaXRvck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVkaXRvckFkanVzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZWRpdG9yRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9lbGxpcHNlOiBQcm9taXNlPEVsbGlwc2U+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfZWRpdG9yOiBFbGxpcHNlRWRpdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGxpcHNlczogRWxsaXBzZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGZpbHRlciA9IENoYW5nZUZpbHRlci5vZihjaGFuZ2VzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2VsbGlwc2UpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBVdGlscy5nZXRPcHRpb25zRm9yPEVsbGlwc2VPcHRpb25zPih0aGlzLCBBTExfT1BUSU9OUyk7XHJcbiAgICAgIHRoaXMuX2VsbGlwc2UgPSB0aGlzLmVsbGlwc2VzLmNyZWF0ZShvcHRpb25zKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX2VsbGlwc2UudGhlbihwID0+IHRoaXMucmVhZHkuZW1pdChwKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWx0ZXIuaGFzPEVsbGlwc2VPcHRpb25zPignb3B0aW9ucycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0T3B0aW9ucyh2IHx8IHt9KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PignZXh0RGF0YScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0RXh0RGF0YSh2KSk7XHJcbiAgICAgIGZpbHRlci5ub3RFbXB0eTxMbmdMYXQ+KCdjZW50ZXInKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldENlbnRlcih2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignaGlkZGVuJykuc3Vic2NyaWJlKHYgPT4gdiA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCkpO1xyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignZWRpdG9yJykuc3Vic2NyaWJlKHYgPT4gdGhpcy50b2dnbGVFZGl0b3IodikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmVsbGlwc2VzLmRlc3Ryb3kodGhpcy5fZWxsaXBzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRFdmVudHMoKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gdGhpcy5iaW5kRXZlbnQoJ2NsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lbGxpcHNlQ2xpY2suZW1pdChlKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgnZGJsY2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdyaWdodGNsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5yaWdodENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdoaWRlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5lbGxpcHNlSGlkZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgnc2hvdycpLnN1YnNjcmliZShlID0+IHRoaXMuZWxsaXBzZVNob3cuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ21vdXNlZG93bicpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VEb3duLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdtb3VzZXVwJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZVVwLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdtb3VzZW92ZXInKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlT3Zlci5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgnbW91c2VvdXQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlT3V0LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZEV2ZW50KCdjaGFuZ2UnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmNoYW5nZS5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgndG91Y2hzdGFydCcpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hTdGFydC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFdmVudCgndG91Y2htb3ZlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaE1vdmUuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRXZlbnQoJ3RvdWNoZW5kJykuc3Vic2NyaWJlKGUgPT4gdGhpcy50b3VjaEVuZC5lbWl0KGUpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRFdmVudChldmVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGxpcHNlcy5iaW5kRXZlbnQodGhpcy5fZWxsaXBzZSwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kRWRpdG9yRXZlbnRzKGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmVsbGlwc2VzLmJpbmRFdmVudCh0aGlzLl9lZGl0b3IsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8vIFB1YmxpYyBtZXRob2RzOlxyXG4gIHRvZ2dsZUVkaXRvcih2OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodiAmJiAhdGhpcy5fZWRpdG9yKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVsbGlwc2VzLmxvYWRFZGl0b3IoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuX2VsbGlwc2UpXHJcbiAgICAgICAgLnRoZW4oYyA9PiB0aGlzLmVsbGlwc2VzLmNyZWF0ZUVkaXRvcihjKSlcclxuICAgICAgICAudGhlbihlZGl0b3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fZWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgICAgLy8gQmluZCBldmVudHM6XHJcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFZGl0b3JFdmVudHMoJ21vdmUnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmVkaXRvck1vdmUuZW1pdChlKSkpO1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdhZGp1c3QnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmVkaXRvckFkanVzdC5lbWl0KGUpKSk7XHJcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFZGl0b3JFdmVudHMoJ2VuZCcpLnN1YnNjcmliZShlID0+IHRoaXMuZWRpdG9yRW5kLmVtaXQoZSkpKTtcclxuICAgICAgICAgIGVkaXRvci5vcGVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xyXG4gICAgICBpZiAodikge1xyXG4gICAgICAgIHRoaXMuX2VkaXRvci5vcGVuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsbGlwc2UudGhlbihjID0+IGMuc2hvdygpKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxsaXBzZS50aGVuKGMgPT4gYy5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbnMocG9pbnQ6IExuZ0xhdHxJTG5nTGF0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxsaXBzZS50aGVuKGMgPT4gYy5jb250YWlucyhwb2ludCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0dGVyczpcclxuICBzZXRDZW50ZXIobG5nbGF0OiBMbmdMYXR8SUxuZ0xhdCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsbGlwc2UudGhlbihjID0+IGMuc2V0Q2VudGVyKGxuZ2xhdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHQ6IEVsbGlwc2VPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxsaXBzZS50aGVuKGMgPT4gYy5zZXRPcHRpb25zKG9wdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0RGF0YShleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsbGlwc2UudGhlbihjID0+IGMuc2V0RXh0RGF0YShleHQpKTtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnM6XHJcbiAgZ2V0Q2VudGVyKCk6IFByb21pc2U8TG5nTGF0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxsaXBzZS50aGVuKGMgPT4gYy5nZXRDZW50ZXIoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25zKCk6IFByb21pc2U8RWxsaXBzZU9wdGlvbnM+IHtcclxuICAgIHJldHVybiB0aGlzLl9lbGxpcHNlLnRoZW4oYyA9PiBjLmdldE9wdGlvbnMoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRCb3VuZHMoKTogUHJvbWlzZTxCb3VuZHM+IHtcclxuICAgIHJldHVybiB0aGlzLl9lbGxpcHNlLnRoZW4oYyA9PiBjLmdldEJvdW5kcygpKTtcclxuICB9XHJcblxyXG4gIGdldEV4dERhdGEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9lbGxpcHNlLnRoZW4oYyA9PiBjLmdldEV4dERhdGEoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LFxyXG4gIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwLCBMbmdMYXQsIEJvdW5kcywgUmVjdGFuZ2xlRWRpdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IFJlY3RhbmdsZU9wdGlvbnMsIElMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ2hhbmdlRmlsdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhbmdlLWZpbHRlcic7XHJcbmltcG9ydCB7IFJlY3RhbmdsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZWN0YW5nbGUvcmVjdGFuZ2xlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgQUxMX09QVElPTlMgPSBbXHJcbiAgJ3pJbmRleCcsXHJcbiAgJ2JvdW5kcycsXHJcbiAgJ2J1YmJsZScsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ3N0cm9rZUNvbG9yJyxcclxuICAnc3Ryb2tlT3BhY2l0eScsXHJcbiAgJ3N0cm9rZVdlaWdodCcsXHJcbiAgJ2ZpbGxDb2xvcicsXHJcbiAgJ2ZpbGxPcGFjaXR5JyxcclxuICAnc3Ryb2tlU3R5bGUnLFxyXG4gICdzdHJva2VEYXNoYXJyYXknLFxyXG4gICdleHREYXRhJyxcclxuICAnZHJhZ2dhYmxlJ1xyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhbWFwLXJlY3RhbmdsZScsXHJcbiAgZXhwb3J0QXM6ICdyZWN0YW5nbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbWFwUmVjdGFuZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIFRBRyA9ICdhbWFwLXJlY3RhbmdsZSc7XHJcblxyXG4gIC8vIFRoZXNlIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBpbiBSZWN0YW5nbGVPcHRpb25zOlxyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGJvdW5kczogQm91bmRzO1xyXG4gIEBJbnB1dCgpIGJ1YmJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjdXJzb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdHJva2VXZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBmaWxsT3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0cm9rZVN0eWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3Ryb2tlRGFzaGFycmF5OiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBleHREYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG5cclxuICAvLyBUaGlzIG9wdGlvbnMgcHJvcGVydHkgd2lsbCBvdmVycmlkZSBvdGhlciBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBvcHRpb25zOiBSZWN0YW5nbGVPcHRpb25zO1xyXG5cclxuICAvLyBFeHRyYSBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlZGl0b3IgPSBmYWxzZTtcclxuXHJcbiAgLy8gYW1hcC1yZWN0YW5nbGUgZXZlbnRzOlxyXG4gIEBPdXRwdXQoKSByZWN0YW5nbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByaWdodENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWN0YW5nbGVIaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWN0YW5nbGVTaG93ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZURvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlVXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gZWRpdG9yIGV2ZW50czpcclxuICBAT3V0cHV0KCkgZWRpdG9yQWRqdXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0b3JFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgX3JlY3RhbmdsZTogUHJvbWlzZTxSZWN0YW5nbGU+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfZWRpdG9yOiBSZWN0YW5nbGVFZGl0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlY3RhbmdsZXM6IFJlY3RhbmdsZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGZpbHRlciA9IENoYW5nZUZpbHRlci5vZihjaGFuZ2VzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX3JlY3RhbmdsZSkge1xyXG4gICAgICAvLyBkbyBub3QgZHJhdyByZWN0YW5nbGUgd2hlbiBubyBib3VuZHMgZGVmaW5lZC5cclxuICAgICAgaWYgKCF0aGlzLmJvdW5kcyAmJiAhKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYm91bmRzKSkgeyByZXR1cm47IH1cclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBVdGlscy5nZXRPcHRpb25zRm9yPFJlY3RhbmdsZU9wdGlvbnM+KHRoaXMsIEFMTF9PUFRJT05TKTtcclxuICAgICAgdGhpcy5fcmVjdGFuZ2xlID0gdGhpcy5yZWN0YW5nbGVzLmNyZWF0ZShvcHRpb25zKTtcclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuX3JlY3RhbmdsZS50aGVuKHAgPT4gdGhpcy5yZWFkeS5lbWl0KHApKTtcclxuICAgICAgdGhpcy50b2dnbGVFZGl0b3IodGhpcy5lZGl0b3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLmhhczxSZWN0YW5nbGVPcHRpb25zPignb3B0aW9ucycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0T3B0aW9ucyh2IHx8IHt9KSk7XHJcbiAgICAgIGZpbHRlci5oYXM8YW55PignZXh0RGF0YScpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0RXh0RGF0YSh2KSk7XHJcbiAgICAgIGZpbHRlci5ub3RFbXB0eTxCb3VuZHM+KCdib3VuZHMnKS5zdWJzY3JpYmUodiA9PiB0aGlzLnNldEJvdW5kcyh2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignaGlkZGVuJykuc3Vic2NyaWJlKHYgPT4gdiA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCkpO1xyXG4gICAgZmlsdGVyLmhhczxib29sZWFuPignZWRpdG9yJykuc3Vic2NyaWJlKHYgPT4gdGhpcy50b2dnbGVFZGl0b3IodikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnJlY3RhbmdsZXMuZGVzdHJveSh0aGlzLl9yZWN0YW5nbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kRXZlbnRzKCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IHRoaXMuYmluZFJlY3RhbmdsZUV2ZW50KCdjbGljaycpLnN1YnNjcmliZShlID0+IHRoaXMucmVjdGFuZ2xlQ2xpY2suZW1pdChlKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRSZWN0YW5nbGVFdmVudCgnZGJsY2xpY2snKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFJlY3RhbmdsZUV2ZW50KCdyaWdodGNsaWNrJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5yaWdodENsaWNrLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFJlY3RhbmdsZUV2ZW50KCdoaWRlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5yZWN0YW5nbGVIaWRlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFJlY3RhbmdsZUV2ZW50KCdzaG93Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5yZWN0YW5nbGVTaG93LmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFJlY3RhbmdsZUV2ZW50KCdtb3VzZWRvd24nKS5zdWJzY3JpYmUoZSA9PiB0aGlzLm1vdXNlRG93bi5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRSZWN0YW5nbGVFdmVudCgnbW91c2V1cCcpLnN1YnNjcmliZShlID0+IHRoaXMubW91c2VVcC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRSZWN0YW5nbGVFdmVudCgnbW91c2VvdmVyJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU92ZXIuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUmVjdGFuZ2xlRXZlbnQoJ21vdXNlb3V0Jykuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU91dC5lbWl0KGUpKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRSZWN0YW5nbGVFdmVudCgnY2hhbmdlJykuc3Vic2NyaWJlKGUgPT4gdGhpcy5jaGFuZ2UuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUmVjdGFuZ2xlRXZlbnQoJ3RvdWNoc3RhcnQnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnRvdWNoU3RhcnQuZW1pdChlKSkpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kUmVjdGFuZ2xlRXZlbnQoJ3RvdWNobW92ZScpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hNb3ZlLmVtaXQoZSkpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuYmluZFJlY3RhbmdsZUV2ZW50KCd0b3VjaGVuZCcpLnN1YnNjcmliZShlID0+IHRoaXMudG91Y2hFbmQuZW1pdChlKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kUmVjdGFuZ2xlRXZlbnQoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjdGFuZ2xlcy5iaW5kRXZlbnQodGhpcy5fcmVjdGFuZ2xlLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRFZGl0b3JFdmVudHMoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjdGFuZ2xlcy5iaW5kRXZlbnQodGhpcy5fZWRpdG9yLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBQdWJsaWMgbWV0aG9kczpcclxuICB0b2dnbGVFZGl0b3IodjogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHYgJiYgIXRoaXMuX2VkaXRvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWN0YW5nbGVzLmxvYWRFZGl0b3IoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlY3RhbmdsZSlcclxuICAgICAgICAudGhlbihjID0+IHRoaXMucmVjdGFuZ2xlcy5jcmVhdGVFZGl0b3IoYykpXHJcbiAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcclxuICAgICAgICAgIHRoaXMuX2VkaXRvciA9IGVkaXRvcjtcclxuICAgICAgICAgIC8vIEJpbmQgZXZlbnRzOlxyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iaW5kRWRpdG9yRXZlbnRzKCdhZGp1c3QnKS5zdWJzY3JpYmUoZSA9PiB0aGlzLmVkaXRvckFkanVzdC5lbWl0KGUpKSk7XHJcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJpbmRFZGl0b3JFdmVudHMoJ2VuZCcpLnN1YnNjcmliZShlID0+IHRoaXMuZWRpdG9yRW5kLmVtaXQoZSkpKTtcclxuICAgICAgICAgIGVkaXRvci5vcGVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xyXG4gICAgICBpZiAodikge1xyXG4gICAgICAgIHRoaXMuX2VkaXRvci5vcGVuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZS50aGVuKHIgPT4gci5zaG93KCkpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGUudGhlbihyID0+IHIuaGlkZSgpKTtcclxuICB9XHJcblxyXG4gIGNvbnRhaW5zKHBvaW50OiBMbmdMYXR8SUxuZ0xhdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZS50aGVuKHIgPT4gci5jb250YWlucyhwb2ludCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0dGVyczpcclxuICBzZXRCb3VuZHMoYm91bmRzOiBCb3VuZHMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGUudGhlbihyID0+IHIuc2V0Qm91bmRzKGJvdW5kcykpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHQ6IFJlY3RhbmdsZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGUudGhlbihyID0+IHIuc2V0T3B0aW9ucyhvcHQpKTtcclxuICB9XHJcblxyXG4gIHNldEV4dERhdGEoZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGUudGhlbihyID0+IHIuc2V0RXh0RGF0YShleHQpKTtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnM6XHJcbiAgZ2V0T3B0aW9ucygpOiBQcm9taXNlPFJlY3RhbmdsZU9wdGlvbnM+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGUudGhlbihyID0+IHIuZ2V0T3B0aW9ucygpKTtcclxuICB9XHJcblxyXG4gIGdldEJvdW5kcygpOiBQcm9taXNlPEJvdW5kcz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZS50aGVuKHIgPT4gci5nZXRCb3VuZHMoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRFeHREYXRhKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVjdGFuZ2xlLnRoZW4ociA9PiByLmdldEV4dERhdGEoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBPbkluaXQsXHJcbiAgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIZWF0bWFwLCBNYXAsIEhlYXRtYXBEYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyBIZWF0bWFwT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VGaWx0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9jaGFuZ2UtZmlsdGVyJztcclxuaW1wb3J0IHsgSGVhdG1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWF0bWFwL2hlYXRtYXAuc2VydmljZSc7XHJcblxyXG5jb25zdCBBTExfT1BUSU9OUyA9IFtcclxuICAncmFkaXVzJyxcclxuICAnZ3JhZGllbnQnLFxyXG4gICdvcGFjaXR5JyxcclxuICAnem9vbXMnXHJcbl07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2FtYXAtaGVhdG1hcCcsXHJcbiAgZXhwb3J0QXM6ICdoZWF0bWFwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW1hcEhlYXRtYXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBUQUcgPSAnYW1hcC1oZWF0bWFwJztcclxuXHJcbiAgLy8gVGhlc2UgcHJvcGVydGllcyBhcmUgc3VwcG9ydGVkIGluIEhlYXRtYXBPcHRpb25zOlxyXG4gIEBJbnB1dCgpIHJhZGl1czogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGdyYWRpZW50OiBhbnk7XHJcbiAgQElucHV0KCkgb3BhY2l0eTogbnVtYmVyW107XHJcbiAgQElucHV0KCkgem9vbXM6IG51bWJlcltdO1xyXG5cclxuICAvLyBUaGlzIG9wdGlvbnMgcHJvcGVydHkgd2lsbCBvdmVycmlkZSBvdGhlciBwcm9wZXJ0eTpcclxuICBASW5wdXQoKSBvcHRpb25zOiBIZWF0bWFwT3B0aW9ucztcclxuICBASW5wdXQoKSBkYXRhc2V0OiBIZWF0bWFwRGF0YTtcclxuXHJcbiAgLy8gRXh0cmEgcHJvcGVydHk6XHJcbiAgQElucHV0KCkgaGlkZGVuID0gZmFsc2U7XHJcblxyXG4gIC8vIGFtYXAtdG9vbC1iYXIgZXZlbnRzOlxyXG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBfaGVhdG1hcDogUHJvbWlzZTxIZWF0bWFwPjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGhtczogSGVhdG1hcFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGZpbHRlciA9IENoYW5nZUZpbHRlci5vZihjaGFuZ2VzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2hlYXRtYXApIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBVdGlscy5nZXRPcHRpb25zRm9yPEhlYXRtYXBPcHRpb25zPih0aGlzLCBBTExfT1BUSU9OUyk7XHJcbiAgICAgIHRoaXMuX2hlYXRtYXAgPSB0aGlzLmhtcy5jcmVhdGUob3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICB0aGlzLl9oZWF0bWFwLnRoZW4odCA9PiB0aGlzLnJlYWR5LmVtaXQodCkpO1xyXG4gICAgICB0aGlzLmhpZGRlbiA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWx0ZXIuaGFzPEhlYXRtYXBPcHRpb25zPignb3B0aW9ucycpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0T3B0aW9ucyh2IHx8IHt9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyLm5vdEVtcHR5PEhlYXRtYXBEYXRhPignZGF0YXNldCcpLnN1YnNjcmliZSh2ID0+IHRoaXMuc2V0RGF0YVNldCh2KSk7XHJcbiAgICBmaWx0ZXIuaGFzPGJvb2xlYW4+KCdoaWRkZW4nKS5zdWJzY3JpYmUodiA9PiB2ID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcbiAgICB0aGlzLmhtcy5kZXN0cm95KHRoaXMuX2hlYXRtYXApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kRXZlbnRzKCkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kSGVhdG1hcEV2ZW50KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmhtcy5iaW5kRXZlbnQodGhpcy5faGVhdG1hcCwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmJpbmRFdmVudHMoKSB7XHJcbiAgfVxyXG5cclxuICAvLyBQdWJsaWMgbWV0aG9kczpcclxuICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYXRtYXAudGhlbih0ID0+IHQuc2hvdygpKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhdG1hcC50aGVuKHQgPT4gdC5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0dGVyczpcclxuICBzZXRPcHRpb25zKG9wdDogSGVhdG1hcE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9oZWF0bWFwLnRoZW4ocCA9PiBwLnNldE9wdGlvbnMob3B0KSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRhU2V0KGRhdGE6IEhlYXRtYXBEYXRhKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhdG1hcC50aGVuKHAgPT4gcC5zZXREYXRhU2V0KGRhdGEpKTtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnM6XHJcbiAgZ2V0RGF0YVNldCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYXRtYXAudGhlbih0ID0+IHQuZ2V0RGF0YVNldCgpKTtcclxuICB9XHJcblxyXG4gIGdldE1hcCgpOiBQcm9taXNlPE1hcD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYXRtYXAudGhlbih0ID0+IHQuZ2V0TWFwKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBEcml2aW5nLCBMbmdMYXQgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IERyaXZpbmdPcHRpb25zLCBJTG5nTGF0IH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsdWdpbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9wbHVnaW4tbG9hZGVyL3BsdWdpbi1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50QmluZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQtYmluZGVyJztcclxuaW1wb3J0IHsgRHJpdmluZ1Jlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzL2RyaXZpbmcvZHJpdmluZy1yZXN1bHQnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG4vKipcclxuICogw6nCqcK+w6jCvcKmw6jCt8Kvw6fCusK/w6jCp8KEw6XCiMKSw6bCnMKNw6XCisKhXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbWFwRHJpdmluZ1NlcnZpY2Uge1xyXG4gIFRBRyA9ICdhbWFwLWRyaXZpbmcnO1xyXG5cclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldCBsb2FkZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuX3BsdWdpbikge1xyXG4gICAgICB0aGlzLl9wbHVnaW4gPSB0aGlzLnBsdWdpbnMubG9hZCgnQU1hcC5Ecml2aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbjtcclxuICB9XHJcblxyXG4gIG9mKG9wdHM/OiBEcml2aW5nT3B0aW9ucyk6IFByb21pc2U8QW1hcERyaXZpbmdXcmFwcGVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQudGhlbigoKSA9PiBuZXcgQW1hcERyaXZpbmdXcmFwcGVyKG9wdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbWFwRHJpdmluZ1dyYXBwZXLDpcKvwrnDqMKxwqHDpcKwwobDqcKrwpjDpcK+wrfDpcKOwp/Dp8KUwp/Dp8KawoREcml2aW5nw6XCr8K5w6jCscKhw6bCj8KQw6TCvsKbw6fCmsKEw6bClsK5w6bCs8KVw6XCsMKBw6jCo8KFw6bCiMKQUHJvbWlzZcOnwprChMOlwq7CnsOnwo7CsMOvwrzCjMOmwpvCtMOmwpbCucOkwr7Cv8OlwpvCnsOowrDCg1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFtYXBEcml2aW5nV3JhcHBlciBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBwcml2YXRlIF9kcml2aW5nOiBEcml2aW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRzPzogRHJpdmluZ09wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9kcml2aW5nID0gbmV3IEFNYXAuRHJpdmluZyhvcHRzKTtcclxuICB9XHJcblxyXG4gIGdldCBuYXRpdmUoKTogRHJpdmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJpdmluZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOnwpTCqMOkwrrCjsOkwr7CpsOlwpDCrERyaXZpbmfDpMK6wovDpMK7wrbDr8K8wozDqMK/wpTDpcKbwp7DpcKPwq/DpMK7wqXDqMKiwqtzdWJzY3JpYmXDp8KawoRPYnNlcnZhYmxlw6XCr8K5w6jCscKhXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRFdmVudDxEcml2aW5nPih0aGlzLl9kcml2aW5nLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2gob3JpZ2luOiBhbnlbXSwgZGVzdGluYXRpb24/OiBJTG5nTGF0LCBvcHRzPzogYW55KTogUHJvbWlzZTx7IHN0YXR1czogc3RyaW5nLCByZXN1bHQ6IHN0cmluZyB8IERyaXZpbmdSZXN1bHQgfT4ge1xyXG4gICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fZHJpdmluZy5zZWFyY2gob3JpZ2luLCBkZXN0aW5hdGlvbiwgb3B0cywgKHN0YXR1cywgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IHN0YXR1cywgcmVzdWx0IH0pO1xyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9kcml2aW5nLnNlYXJjaChvcmlnaW4sIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoeyBzdGF0dXMsIHJlc3VsdCB9KTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UG9saWN5KHBvbGljeTogYW55KSB7XHJcbiAgICB0aGlzLl9kcml2aW5nLnNldFBvbGljeShwb2xpY3kpO1xyXG4gIH1cclxuXHJcbiAgc2V0QXZvaWRQb2x5Z29ucyhwYXRoOiBJTG5nTGF0W10pIHtcclxuICAgIHRoaXMuX2RyaXZpbmcuc2V0QXZvaWRQb2x5Z29ucyhwYXRoKTtcclxuICB9XHJcblxyXG4gIHNldEF2b2lkUm9hZChyb2FkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2RyaXZpbmcuc2V0QXZvaWRSb2FkKHJvYWQpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJBdm9pZFJvYWQoKSB7XHJcbiAgICB0aGlzLl9kcml2aW5nLmNsZWFyQXZvaWRSb2FkKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhckF2b2lkUG9seWdvbnMoKSB7XHJcbiAgICB0aGlzLl9kcml2aW5nLmNsZWFyQXZvaWRQb2x5Z29ucygpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9kcml2aW5nLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBdm9pZFBvbHlnb25zKCk6IExuZ0xhdFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9kcml2aW5nLmdldEF2b2lkUG9seWdvbnMoKTtcclxuICB9XHJcbiAgZ2V0QXZvaWRSb2FkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJpdmluZy5nZXRBdm9pZFJvYWQoKTtcclxuICB9XHJcblxyXG4gIHNldFByb3ZpbmNlQW5kTnVtYmVyKHByb3ZpbmNlOiBzdHJpbmcsIG51bWJlcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kcml2aW5nLnNldFByb3ZpbmNlQW5kTnVtYmVyKHByb3ZpbmNlLCBudW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoT25BTUFQKG9iajogYW55KSB7XHJcbiAgICB0aGlzLl9kcml2aW5nLnNlYXJjaE9uQU1BUChvYmopO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQU1hcENsYXNzLCBUcnVja0RyaXZpbmcgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IFRydWNrRHJpdmluZ09wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGx1Z2luTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL3BsdWdpbi1sb2FkZXIvcGx1Z2luLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCaW5kZXIgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC1iaW5kZXInO1xyXG5pbXBvcnQgeyBEcml2aW5nUmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MvZHJpdmluZy9kcml2aW5nLXJlc3VsdCc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEFNYXA6IEFNYXBDbGFzcztcclxuXHJcbi8qKlxyXG4gKiDDqMK0wqfDqMK9wqbDqMK3wq/Dp8K6wr/DqMKnwoTDpcKIwpLDpsKcwo3DpcKKwqFcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFtYXBUcnVja0RyaXZpbmdTZXJ2aWNlIHtcclxuICBUQUcgPSAnYW1hcC10cnVjay1kcml2aW5nJztcclxuXHJcbiAgcHJpdmF0ZSBfcGx1Z2luOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBwbHVnaW5zOiBQbHVnaW5Mb2FkZXJTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9hZGVkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKCF0aGlzLl9wbHVnaW4pIHtcclxuICAgICAgdGhpcy5fcGx1Z2luID0gdGhpcy5wbHVnaW5zLmxvYWQoJ0FNYXAuVHJ1Y2tEcml2aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbjtcclxuICB9XHJcblxyXG4gIG9mKG9wdHM/OiBUcnVja0RyaXZpbmdPcHRpb25zKTogUHJvbWlzZTxBbWFwVHJ1Y2tEcml2aW5nV3JhcHBlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkLnRoZW4oKCkgPT4gbmV3IEFtYXBUcnVja0RyaXZpbmdXcmFwcGVyKG9wdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbWFwVHJ1Y2tEcml2aW5nV3JhcHBlcsOlwq/CucOowrHCocOlwrDChsOpwqvCmMOlwr7Ct8Olwo7Cn8OnwpTCn8OnwprChFRydWNrRHJpdmluZ8Olwq/CucOowrHCocOmwo/CkMOkwr7Cm8OnwprChMOmwpbCucOmwrPClcOlwrDCgcOowqPChcOmwojCkFByb21pc2XDp8KawoTDpcKuwp7Dp8KOwrDDr8K8wozDpsKbwrTDpsKWwrnDpMK+wr/DpcKbwp7DqMKwwoNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbWFwVHJ1Y2tEcml2aW5nV3JhcHBlciBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBwcml2YXRlIF9kcml2aW5nOiBUcnVja0RyaXZpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdHM/OiBUcnVja0RyaXZpbmdPcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fZHJpdmluZyA9IG5ldyBBTWFwLlRydWNrRHJpdmluZyhvcHRzKTtcclxuICB9XHJcblxyXG4gIGdldCBuYXRpdmUoKTogVHJ1Y2tEcml2aW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kcml2aW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6fClMKow6TCusKOw6TCvsKmw6XCkMKsVHJ1Y2tEcml2aW5nw6TCusKLw6TCu8K2w6/CvMKMw6jCv8KUw6XCm8Kew6XCj8Kvw6TCu8Klw6jCosKrc3Vic2NyaWJlw6fCmsKET2JzZXJ2YWJsZcOlwq/CucOowrHCoVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5iaW5kRXZlbnQ8VHJ1Y2tEcml2aW5nPih0aGlzLl9kcml2aW5nLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2gocGF0aDogYW55W10pOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmcsIHJlc3VsdDogc3RyaW5nIHwgRHJpdmluZ1Jlc3VsdCB9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9kcml2aW5nLnNlYXJjaChwYXRoLCAoc3RhdHVzLCByZXN1bHQpID0+IHtcclxuICAgICAgcmVzb2x2ZSh7IHN0YXR1cywgcmVzdWx0IH0pO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9kcml2aW5nLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBzZXRQcm92aW5jZUFuZE51bWJlcihwcm92aW5jZTogc3RyaW5nLCBudW1iZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZHJpdmluZy5zZXRQcm92aW5jZUFuZE51bWJlcihwcm92aW5jZSwgbnVtYmVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFNYXBDbGFzcywgVHJhbnNmZXIgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyT3B0aW9ucywgSUxuZ0xhdCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyUmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMvY2xhc3MvdHJhbnNmZXIvdHJhbnNmZXItcmVzdWx0JztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuLyoqXHJcbiAqIMOlwoXCrMOkwrrCpMOmwo3CosOkwrnCmMOowrfCr8Olwr7ChMOowqfChMOlwojCksOmwpzCjcOlworCoVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW1hcFRyYW5zZmVyU2VydmljZSB7XHJcbiAgVEFHID0gJ2FtYXAtdHJhbnNmZXInO1xyXG5cclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldCBsb2FkZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuX3BsdWdpbikge1xyXG4gICAgICB0aGlzLl9wbHVnaW4gPSB0aGlzLnBsdWdpbnMubG9hZCgnQU1hcC5UcmFuc2ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9wbHVnaW47XHJcbiAgfVxyXG5cclxuICBvZihvcHRzPzogVHJhbnNmZXJPcHRpb25zKTogUHJvbWlzZTxBbWFwVHJhbnNmZXJXcmFwcGVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQudGhlbigoKSA9PiBuZXcgQW1hcFRyYW5zZmVyV3JhcHBlcihvcHRzKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW1hcFRyYW5zZmVyV3JhcHBlcsOlwq/CucOowrHCocOlwrDChsOpwqvCmMOlwr7Ct8Olwo7Cn8OnwpTCn8OnwprChFRyYW5zZmVyw6XCr8K5w6jCscKhw6bCj8KQw6TCvsKbw6fCmsKEw6bClsK5w6bCs8KVw6XCsMKBw6jCo8KFw6bCiMKQUHJvbWlzZcOnwprChMOlwq7CnsOnwo7CsMOvwrzCjMOmwpvCtMOmwpbCucOkwr7Cv8OlwpvCnsOowrDCg1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFtYXBUcmFuc2ZlcldyYXBwZXIgZXh0ZW5kcyBFdmVudEJpbmRlciB7XHJcbiAgcHJpdmF0ZSBfdHJhbnNmZXI6IFRyYW5zZmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRzPzogVHJhbnNmZXJPcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fdHJhbnNmZXIgPSBuZXcgQU1hcC5UcmFuc2ZlcihvcHRzKTtcclxuICB9XHJcblxyXG4gIGdldCBuYXRpdmUoKTogVHJhbnNmZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zZmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6fClMKow6TCusKOw6TCvsKmw6XCkMKsVHJhbnNmZXLDpMK6wovDpMK7wrbDr8K8wozDqMK/wpTDpcKbwp7DpcKPwq/DpMK7wqXDqMKiwqtzdWJzY3JpYmXDp8KawoRPYnNlcnZhYmxlw6XCr8K5w6jCscKhXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRFdmVudDxUcmFuc2Zlcj4odGhpcy5fdHJhbnNmZXIsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChvcmlnaW46IGFueVtdLCBkZXN0aW5hdGlvbj86IElMbmdMYXQpOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmcsIHJlc3VsdDogc3RyaW5nIHwgVHJhbnNmZXJSZXN1bHQgfT4ge1xyXG4gICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fdHJhbnNmZXIuc2VhcmNoKG9yaWdpbiwgZGVzdGluYXRpb24sIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoeyBzdGF0dXMsIHJlc3VsdCB9KTtcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fdHJhbnNmZXIuc2VhcmNoKG9yaWdpbiwgKHN0YXR1cywgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IHN0YXR1cywgcmVzdWx0IH0pO1xyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQb2xpY3kocG9saWN5OiBhbnkpIHtcclxuICAgIHRoaXMuX3RyYW5zZmVyLnNldFBvbGljeShwb2xpY3kpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2l0eShjaXR5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RyYW5zZmVyLnNldENpdHkoY2l0eSk7XHJcbiAgfVxyXG5cclxuICBzZXRDaXR5ZChjaXR5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RyYW5zZmVyLnNldENpdHlkKGNpdHkpO1xyXG4gIH1cclxuXHJcbiAgbGVhdmVBdCh0aW1lOiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHJhbnNmZXIubGVhdmVBdCh0aW1lLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5fdHJhbnNmZXIuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaE9uQU1BUChvYmo6IGFueSkge1xyXG4gICAgdGhpcy5fdHJhbnNmZXIuc2VhcmNoT25BTUFQKG9iaik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIFdhbGtpbmcgfSBmcm9tICcuLi8uLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7IFdhbGtpbmdPcHRpb25zLCBJTG5nTGF0IH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsdWdpbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9wbHVnaW4tbG9hZGVyL3BsdWdpbi1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50QmluZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQtYmluZGVyJztcclxuaW1wb3J0IHsgV2Fsa2luZ1Jlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzL3dhbGtpbmcvd2Fsa2luZy1yZXN1bHQnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBBTWFwOiBBTWFwQ2xhc3M7XHJcblxyXG4vKipcclxuICogw6bCrcKlw6jCocKMw6jCt8Kvw6XCvsKEw6jCp8KEw6XCiMKSw6bCnMKNw6XCisKhXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbWFwV2Fsa2luZ1NlcnZpY2Uge1xyXG4gIFRBRyA9ICdhbWFwLXdhbGtpbmcnO1xyXG5cclxuICBwcml2YXRlIF9wbHVnaW46IFByb21pc2U8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIHBsdWdpbnM6IFBsdWdpbkxvYWRlclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldCBsb2FkZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuX3BsdWdpbikge1xyXG4gICAgICB0aGlzLl9wbHVnaW4gPSB0aGlzLnBsdWdpbnMubG9hZCgnQU1hcC5XYWxraW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbjtcclxuICB9XHJcblxyXG4gIG9mKG9wdHM/OiBXYWxraW5nT3B0aW9ucyk6IFByb21pc2U8QW1hcFdhbGtpbmdXcmFwcGVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQudGhlbigoKSA9PiBuZXcgQW1hcFdhbGtpbmdXcmFwcGVyKG9wdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbWFwV2Fsa2luZ1dyYXBwZXLDpcKvwrnDqMKxwqHDpcKwwobDqcKrwpjDpcK+wrfDpcKOwp/Dp8KUwp/Dp8KawoRXYWxraW5nw6XCr8K5w6jCscKhw6bCj8KQw6TCvsKbw6fCmsKEw6bClsK5w6bCs8KVw6XCsMKBw6jCo8KFw6bCiMKQUHJvbWlzZcOnwprChMOlwq7CnsOnwo7CsMOvwrzCjMOmwpvCtMOmwpbCucOkwr7Cv8OlwpvCnsOowrDCg1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFtYXBXYWxraW5nV3JhcHBlciBleHRlbmRzIEV2ZW50QmluZGVyIHtcclxuICBwcml2YXRlIF93YWxraW5nOiBXYWxraW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRzPzogV2Fsa2luZ09wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl93YWxraW5nID0gbmV3IEFNYXAuV2Fsa2luZyhvcHRzKTtcclxuICB9XHJcblxyXG4gIGdldCBuYXRpdmUoKTogV2Fsa2luZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2Fsa2luZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOnwpTCqMOkwrrCjsOkwr7CpsOlwpDCrFdhbGtpbmfDpMK6wovDpMK7wrbDr8K8wozDqMK/wpTDpcKbwp7DpcKPwq/DpMK7wqXDqMKiwqtzdWJzY3JpYmXDp8KawoRPYnNlcnZhYmxlw6XCr8K5w6jCscKhXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRFdmVudDxXYWxraW5nPih0aGlzLl93YWxraW5nLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2gob3JpZ2luOiBhbnlbXSwgZGVzdGluYXRpb24/OiBJTG5nTGF0KTogUHJvbWlzZTx7IHN0YXR1czogc3RyaW5nLCByZXN1bHQ6IHN0cmluZyB8IFdhbGtpbmdSZXN1bHQgfT4ge1xyXG4gICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fd2Fsa2luZy5zZWFyY2gob3JpZ2luLCBkZXN0aW5hdGlvbiwgKHN0YXR1cywgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IHN0YXR1cywgcmVzdWx0IH0pO1xyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl93YWxraW5nLnNlYXJjaChvcmlnaW4sIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoeyBzdGF0dXMsIHJlc3VsdCB9KTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl93YWxraW5nLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hPbkFNQVAob2JqOiBhbnkpIHtcclxuICAgIHRoaXMuX3dhbGtpbmcuc2VhcmNoT25BTUFQKG9iaik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBTWFwQ2xhc3MsIFJpZGluZyB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzJztcclxuaW1wb3J0IHsgUmlkaW5nT3B0aW9ucywgSUxuZ0xhdCB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudEJpbmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LWJpbmRlcic7XHJcbmltcG9ydCB7IFJpZGluZ1Jlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzL2NsYXNzL3JpZGluZy9yaWRpbmctcmVzdWx0JztcclxuXHJcbmRlY2xhcmUgY29uc3QgQU1hcDogQU1hcENsYXNzO1xyXG5cclxuLyoqXHJcbiAqIMOpwqrCkcOowqHCjMOowrfCr8Olwr7ChMOowqfChMOlwojCksOmwpzCjcOlworCoVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW1hcFJpZGluZ1NlcnZpY2Uge1xyXG4gIFRBRyA9ICdhbWFwLXJpZGluZyc7XHJcblxyXG4gIHByaXZhdGUgX3BsdWdpbjogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsIHByaXZhdGUgcGx1Z2luczogUGx1Z2luTG9hZGVyU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvYWRlZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5fcGx1Z2luKSB7XHJcbiAgICAgIHRoaXMuX3BsdWdpbiA9IHRoaXMucGx1Z2lucy5sb2FkKCdBTWFwLlJpZGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9wbHVnaW47XHJcbiAgfVxyXG5cclxuICBvZihvcHRzPzogUmlkaW5nT3B0aW9ucyk6IFByb21pc2U8QW1hcFJpZGluZ1dyYXBwZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRlZC50aGVuKCgpID0+IG5ldyBBbWFwUmlkaW5nV3JhcHBlcihvcHRzKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW1hcFJpZGluZ1dyYXBwZXLDpcKvwrnDqMKxwqHDpcKwwobDqcKrwpjDpcK+wrfDpcKOwp/Dp8KUwp/Dp8KawoRSaWRpbmfDpcKvwrnDqMKxwqHDpsKPwpDDpMK+wpvDp8KawoTDpsKWwrnDpsKzwpXDpcKwwoHDqMKjwoXDpsKIwpBQcm9taXNlw6fCmsKEw6XCrsKew6fCjsKww6/CvMKMw6bCm8K0w6bClsK5w6TCvsK/w6XCm8Kew6jCsMKDXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW1hcFJpZGluZ1dyYXBwZXIgZXh0ZW5kcyBFdmVudEJpbmRlciB7XHJcbiAgcHJpdmF0ZSBfcmlkaW5nOiBSaWRpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdHM/OiBSaWRpbmdPcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fcmlkaW5nID0gbmV3IEFNYXAuUmlkaW5nKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hdGl2ZSgpOiBSaWRpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZGluZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOnwpTCqMOkwrrCjsOkwr7CpsOlwpDCrFJpZGluZ8OkwrrCi8OkwrvCtsOvwrzCjMOowr/ClMOlwpvCnsOlwo/Cr8OkwrvCpcOowqLCq3N1YnNjcmliZcOnwprChE9ic2VydmFibGXDpcKvwrnDqMKxwqFcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmluZEV2ZW50PFJpZGluZz4odGhpcy5fcmlkaW5nLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2gob3JpZ2luOiBhbnlbXSwgZGVzdGluYXRpb24/OiBJTG5nTGF0KTogUHJvbWlzZTx7IHN0YXR1czogc3RyaW5nLCByZXN1bHQ6IHN0cmluZyB8IFJpZGluZ1Jlc3VsdCB9PiB7XHJcbiAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9yaWRpbmcuc2VhcmNoKG9yaWdpbiwgZGVzdGluYXRpb24sIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoeyBzdGF0dXMsIHJlc3VsdCB9KTtcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcmlkaW5nLnNlYXJjaChvcmlnaW4sIChzdGF0dXMsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoeyBzdGF0dXMsIHJlc3VsdCB9KTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9yaWRpbmcuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQVBJTG9hZGVyU2VydmljZSwgTUFQX0FQSV9DT05GSUcsIElNYXBBUElMb2FkZXJDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL21hcC1hcGktbG9hZGVyL21hcC1hcGktbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWJ1Z0xvZ2dlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dlci9kZWJ1Zy1sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpbmRvd1JlZiwgRG9jdW1lbnRSZWYgfSBmcm9tICcuL3V0aWxzL2Jyb3dzZXItZ2xvYmFscyc7XHJcbmltcG9ydCB7IE5neEFtYXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWFtYXAvbmd4LWFtYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW1hcE1hcmtlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hbWFwLW1hcmtlci9hbWFwLW1hcmtlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbWFwSW5mb1dpbmRvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93L2FtYXAtaW5mby13aW5kb3cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW1hcFBvbHlsaW5lRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2FtYXAtcG9seWxpbmUvYW1hcC1wb2x5bGluZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbWFwUG9seWdvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hbWFwLXBvbHlnb24vYW1hcC1wb2x5Z29uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFtYXBUb29sQmFyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2FtYXAtdG9vbGJhci9hbWFwLXRvb2xiYXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQW1hcE1hcmtlckNsdXN0ZXJlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hbWFwLW1hcmtlci1jbHVzdGVyZXIvYW1hcC1tYXJrZXItY2x1c3RlcmVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBpeGVsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGl4ZWwvcGl4ZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFNpemVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zaXplL3NpemUuc2VydmljZSc7XHJcbmltcG9ydCB7IEljb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pY29uL2ljb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGFiZWwvbGFiZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEFtYXBHZW9jb2RlclNlcnZpY2UsIEFtYXBHZW9jb2RlcldyYXBwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2FtYXAtZ2VvY29kZXIvYW1hcC1nZW9jb2Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGx1Z2luTG9hZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGx1Z2luLWxvYWRlci9wbHVnaW4tbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbWFwQXV0b2NvbXBsZXRlU2VydmljZSwgQW1hcEF1dG9jb21wbGV0ZVdyYXBwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2FtYXAtYXV0b2NvbXBsZXRlL2FtYXAtYXV0b2NvbXBsZXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbWFwQXV0b2NvbXBsZXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2FtYXAtYXV0b2NvbXBsZXRlL2FtYXAtYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFtYXBQbGFjZVNlYXJjaFNlcnZpY2UsIEFtYXBQbGFjZVNlYXJjaFdyYXBwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2FtYXAtcGxhY2Utc2VhcmNoL2FtYXAtcGxhY2Utc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbWFwRGlzdHJpY3RTZWFyY2hTZXJ2aWNlLCBBbWFwRGlzdHJpY3RTZWFyY2hXcmFwcGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbWFwLWRpc3RyaWN0LXNlYXJjaC9hbWFwLWRpc3RyaWN0LXNlYXJjaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW1hcENpcmNsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hbWFwLWNpcmNsZS9hbWFwLWNpcmNsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbWFwQ2lyY2xlTWFya2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2FtYXAtY2lyY2xlLW1hcmtlci9hbWFwLWNpcmNsZS1tYXJrZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQW1hcE1vdXNlVG9vbFNlcnZpY2UsIEFtYXBNb3VzZVRvb2xXcmFwcGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbWFwLW1vdXNlLXRvb2wvYW1hcC1tb3VzZS10b29sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbWFwVGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hbWFwLXRleHQvYW1hcC10ZXh0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFtYXBCZXppZXJDdXJ2ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hbWFwLWJlemllci1jdXJ2ZS9hbWFwLWJlemllci1jdXJ2ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbWFwRWxsaXBzZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hbWFwLWVsbGlwc2UvYW1hcC1lbGxpcHNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFtYXBSZWN0YW5nbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYW1hcC1yZWN0YW5nbGUvYW1hcC1yZWN0YW5nbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQW1hcEhlYXRtYXBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYW1hcC1oZWF0bWFwL2FtYXAtaGVhdG1hcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbWFwRHJpdmluZ1NlcnZpY2UsIEFtYXBEcml2aW5nV3JhcHBlciB9IGZyb20gJy4vc2VydmljZXMvYW1hcC1kcml2aW5nL2FtYXAtZHJpdmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW1hcFRydWNrRHJpdmluZ1NlcnZpY2UsIEFtYXBUcnVja0RyaXZpbmdXcmFwcGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbWFwLXRydWNrLWRyaXZpbmcvYW1hcC10cnVjay1kcml2aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbWFwVHJhbnNmZXJTZXJ2aWNlLCBBbWFwVHJhbnNmZXJXcmFwcGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbWFwLXRyYW5zZmVyL2FtYXAtdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFtYXBXYWxraW5nU2VydmljZSwgQW1hcFdhbGtpbmdXcmFwcGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbWFwLXdhbGtpbmcvYW1hcC13YWxraW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbWFwUmlkaW5nU2VydmljZSwgQW1hcFJpZGluZ1dyYXBwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2FtYXAtcmlkaW5nL2FtYXAtcmlkaW5nLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neEFtYXBDb21wb25lbnQsXHJcbiAgICBBbWFwTWFya2VyRGlyZWN0aXZlLFxyXG4gICAgQW1hcEluZm9XaW5kb3dDb21wb25lbnQsXHJcbiAgICBBbWFwUG9seWxpbmVEaXJlY3RpdmUsXHJcbiAgICBBbWFwVG9vbEJhckRpcmVjdGl2ZSxcclxuICAgIEFtYXBNYXJrZXJDbHVzdGVyZXJEaXJlY3RpdmUsXHJcbiAgICBBbWFwQXV0b2NvbXBsZXRlRGlyZWN0aXZlLFxyXG4gICAgQW1hcENpcmNsZURpcmVjdGl2ZSxcclxuICAgIEFtYXBDaXJjbGVNYXJrZXJEaXJlY3RpdmUsXHJcbiAgICBBbWFwUG9seWdvbkRpcmVjdGl2ZSxcclxuICAgIEFtYXBUZXh0RGlyZWN0aXZlLFxyXG4gICAgQW1hcEJlemllckN1cnZlRGlyZWN0aXZlLFxyXG4gICAgQW1hcEVsbGlwc2VEaXJlY3RpdmUsXHJcbiAgICBBbWFwUmVjdGFuZ2xlRGlyZWN0aXZlLFxyXG4gICAgQW1hcEhlYXRtYXBEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5neEFtYXBDb21wb25lbnQsXHJcbiAgICBBbWFwTWFya2VyRGlyZWN0aXZlLFxyXG4gICAgQW1hcEluZm9XaW5kb3dDb21wb25lbnQsXHJcbiAgICBBbWFwUG9seWxpbmVEaXJlY3RpdmUsXHJcbiAgICBBbWFwVG9vbEJhckRpcmVjdGl2ZSxcclxuICAgIEFtYXBNYXJrZXJDbHVzdGVyZXJEaXJlY3RpdmUsXHJcbiAgICBBbWFwQXV0b2NvbXBsZXRlRGlyZWN0aXZlLFxyXG4gICAgQW1hcENpcmNsZURpcmVjdGl2ZSxcclxuICAgIEFtYXBDaXJjbGVNYXJrZXJEaXJlY3RpdmUsXHJcbiAgICBBbWFwUG9seWdvbkRpcmVjdGl2ZSxcclxuICAgIEFtYXBUZXh0RGlyZWN0aXZlLFxyXG4gICAgQW1hcEJlemllckN1cnZlRGlyZWN0aXZlLFxyXG4gICAgQW1hcEVsbGlwc2VEaXJlY3RpdmUsXHJcbiAgICBBbWFwUmVjdGFuZ2xlRGlyZWN0aXZlLFxyXG4gICAgQW1hcEhlYXRtYXBEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hBbWFwTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChtYXBBUElMb2FkZXJDb25maWc/OiBJTWFwQVBJTG9hZGVyQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4QW1hcE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgV2luZG93UmVmLFxyXG4gICAgICAgIERvY3VtZW50UmVmLFxyXG4gICAgICAgIE1hcEFQSUxvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgeyBwcm92aWRlOiBNQVBfQVBJX0NPTkZJRywgdXNlVmFsdWU6IG1hcEFQSUxvYWRlckNvbmZpZyB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogTG9nZ2VyU2VydmljZSwgdXNlQ2xhc3M6IG1hcEFQSUxvYWRlckNvbmZpZy5kZWJ1ZyA/IERlYnVnTG9nZ2VyU2VydmljZSA6IExvZ2dlclNlcnZpY2UgfSxcclxuICAgICAgICBQaXhlbFNlcnZpY2UsXHJcbiAgICAgICAgU2l6ZVNlcnZpY2UsXHJcbiAgICAgICAgSWNvblNlcnZpY2UsXHJcbiAgICAgICAgTGFiZWxTZXJ2aWNlLFxyXG4gICAgICAgIEFtYXBHZW9jb2RlclNlcnZpY2UsXHJcbiAgICAgICAgUGx1Z2luTG9hZGVyU2VydmljZSxcclxuICAgICAgICBBbWFwQXV0b2NvbXBsZXRlU2VydmljZSxcclxuICAgICAgICBBbWFwTW91c2VUb29sU2VydmljZSxcclxuICAgICAgICBBbWFwUGxhY2VTZWFyY2hTZXJ2aWNlLFxyXG4gICAgICAgIEFtYXBEaXN0cmljdFNlYXJjaFNlcnZpY2UsXHJcbiAgICAgICAgQW1hcERyaXZpbmdTZXJ2aWNlLFxyXG4gICAgICAgIEFtYXBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgICAgICAgQW1hcFdhbGtpbmdTZXJ2aWNlLFxyXG4gICAgICAgIEFtYXBSaWRpbmdTZXJ2aWNlLFxyXG4gICAgICAgIEFtYXBUcnVja0RyaXZpbmdTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIE5neEFtYXBDb21wb25lbnQsXHJcbiAgQW1hcE1hcmtlckRpcmVjdGl2ZSxcclxuICBBbWFwSW5mb1dpbmRvd0NvbXBvbmVudCxcclxuICBBbWFwUG9seWxpbmVEaXJlY3RpdmUsXHJcbiAgQW1hcFRvb2xCYXJEaXJlY3RpdmUsXHJcbiAgQW1hcE1hcmtlckNsdXN0ZXJlckRpcmVjdGl2ZSxcclxuICBBbWFwR2VvY29kZXJTZXJ2aWNlLFxyXG4gIEFtYXBHZW9jb2RlcldyYXBwZXIsXHJcbiAgQW1hcEF1dG9jb21wbGV0ZVNlcnZpY2UsXHJcbiAgQW1hcEF1dG9jb21wbGV0ZVdyYXBwZXIsXHJcbiAgQW1hcEF1dG9jb21wbGV0ZURpcmVjdGl2ZSxcclxuICBBbWFwUGxhY2VTZWFyY2hTZXJ2aWNlLFxyXG4gIEFtYXBQbGFjZVNlYXJjaFdyYXBwZXIsXHJcbiAgQW1hcERpc3RyaWN0U2VhcmNoU2VydmljZSxcclxuICBBbWFwRGlzdHJpY3RTZWFyY2hXcmFwcGVyLFxyXG4gIEFtYXBNb3VzZVRvb2xTZXJ2aWNlLFxyXG4gIEFtYXBNb3VzZVRvb2xXcmFwcGVyLFxyXG4gIEFtYXBDaXJjbGVEaXJlY3RpdmUsXHJcbiAgQW1hcENpcmNsZU1hcmtlckRpcmVjdGl2ZSxcclxuICBBbWFwUG9seWdvbkRpcmVjdGl2ZSxcclxuICBBbWFwVGV4dERpcmVjdGl2ZSxcclxuICBBbWFwQmV6aWVyQ3VydmVEaXJlY3RpdmUsXHJcbiAgQW1hcEVsbGlwc2VEaXJlY3RpdmUsXHJcbiAgQW1hcFJlY3RhbmdsZURpcmVjdGl2ZSxcclxuICBBbWFwSGVhdG1hcERpcmVjdGl2ZSxcclxuICBBbWFwRHJpdmluZ1NlcnZpY2UsXHJcbiAgQW1hcERyaXZpbmdXcmFwcGVyLFxyXG4gIEFtYXBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgQW1hcFRyYW5zZmVyV3JhcHBlcixcclxuICBBbWFwV2Fsa2luZ1NlcnZpY2UsXHJcbiAgQW1hcFdhbGtpbmdXcmFwcGVyLFxyXG4gIEFtYXBSaWRpbmdTZXJ2aWNlLFxyXG4gIEFtYXBSaWRpbmdXcmFwcGVyLFxyXG4gIEFtYXBUcnVja0RyaXZpbmdTZXJ2aWNlLFxyXG4gIEFtYXBUcnVja0RyaXZpbmdXcmFwcGVyXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkFMTF9PUFRJT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7SUFJRSxtQ0FBZTs7O0lBQWY7UUFDRSxPQUFPLE1BQU0sQ0FBQztLQUNmOztnQkFKRixVQUFVOztvQkFGWDs7Ozs7Ozs7SUFXRSx1Q0FBaUI7OztJQUFqQjtRQUNFLE9BQU8sUUFBUSxDQUFDO0tBQ2pCOztnQkFKRixVQUFVOztzQkFUWDs7Ozs7Ozs7SUNLRTtLQUFpQjs7Ozs7O0lBRWpCLHlCQUFDOzs7OztJQUFELFVBQUUsR0FBVztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQzNCLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxZQUFLLE1BQUksR0FBRyxNQUFHLEdBQUssSUFBSSxHQUFFO0tBQ2xDOzs7Ozs7SUFFRCx5QkFBQzs7Ozs7SUFBRCxVQUFFLEdBQVc7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUMzQixPQUFPLENBQUMsS0FBSyxPQUFiLE9BQU8sWUFBTyxNQUFJLEdBQUcsTUFBRyxHQUFLLElBQUksR0FBRTtLQUNwQzs7Ozs7O0lBRUQseUJBQUM7Ozs7O0lBQUQsVUFBRSxHQUFXO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDM0IsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLFlBQU0sTUFBSSxHQUFHLE1BQUcsR0FBSyxJQUFJLEdBQUU7S0FDbkM7Ozs7OztJQUVELHlCQUFDOzs7OztJQUFELFVBQUUsR0FBVztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJB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QUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVks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QUFVLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxHQUFHLENBQVUsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxHQUFHLENBQVUsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxHQUFHLENBQU0sU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxHQUFHLENBQVMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBUyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsR0FBRyxDQUFTLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxHQUFHLENBQVMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDL0QsTUFB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ZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENB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SUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEs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TSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsR0FBRyxDQUFVLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUN4RSxNQUFNLENBQUMsR0FBRyxDQUFVLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUN4RSxNQUFNLENBQUMsR0FBRyxDQUFNLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUMsR0FBRyxDQUFTLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxHQUFHLENBQVMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDckUsTUFBTSxDQUFDLEdBQUcsQ0FBUyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsR0FBRyxDQUFTLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxHQUFHLENBQVMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDLFFBQVEsQ0FBUyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUNwRSxNQUFNLENBQUMsUUFBUSxDQUFTLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBVSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBVSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDN0U7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztLQUNGOzs7O0lBRUQsOENBQWtCOzs7SUFBbEI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDM0U7Ozs7SUFFTyw0Q0FBZ0I7Ozs7O1FBQ3RCLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztnQkFDeEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25DLENBQUMsQ0FBQztTQUNKOzs7OztJQUdLLG9EQUF3Qjs7OztRQUM5QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO2dCQUN4QyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDeEIsQ0FBQyxDQUFDO1NBQ0o7Ozs7O0lBR0ssc0NBQVU7Ozs7O1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzNELElBQUksS0FBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7b0JBQ3hDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHMUYseUNBQWE7Ozs7Y0FBQyxLQUFhO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFHakQsc0JBQUkscUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7O09BQUE7Ozs7SUFFRCxnQ0FBSTs7O0lBQUo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQztLQUN2Qzs7OztJQUVELGdDQUFJOzs7SUFBSjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7OztJQUdELGtDQUFNOzs7Ozs7SUFBTixVQUFPLFFBQWlCLEVBQUUsS0FBYSxFQUFFLENBQW1CO1FBQzFELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ2pFOzs7Ozs7O0lBRUQscUNBQVM7Ozs7OztJQUFULFVBQVUsSUFBZSxFQUFFLEtBQWEsRUFBRSxDQUFtQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUNoRTs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDbEQ7Ozs7SUFFRCxzQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFBLENBQUMsQ0FBQztLQUNuRDs7Ozs7O0lBR0QsbUNBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQzlDOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxHQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQzlDOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQU9DO1FBTkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDekIscUJBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWE7UUFBdkIsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUN6QixxQkFBTSxLQUFLLHFCQUFTLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsd0NBQVk7Ozs7SUFBWixVQUFhLFNBQWtCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUM5RDs7Ozs7SUFFRCx3Q0FBWTs7OztJQUFaLFVBQWEsU0FBa0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQzlEOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxRQUFnQjtRQUE1QixpQkFLQztRQUpDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDakMsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ3REOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUN4RDs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDdEQ7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxLQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUNwRDs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsSUFBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDdkQ7Ozs7O0lBRUQsd0NBQVk7Ozs7SUFBWixVQUFhLFNBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUM5RDs7Ozs7SUFHRCxtQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFBLENBQUMsQ0FBQztLQUNoRDs7OztJQUVELHFDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDcEQ7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFBLENBQUMsQ0FBQztLQUNqRDs7OztJQUVELHFDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDakQ7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFBLENBQUMsQ0FBQztLQUMvQzs7OztJQUVELHFDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFBLENBQUMsQ0FBQztLQUMvQzs7OztJQUVELHdDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBRUQsd0NBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDckQ7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFBLENBQUMsQ0FBQztLQUNyRDs7Z0JBNVRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCOzs7O2dCQXBDUSxhQUFhO2dCQUtiLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixXQUFXOzs7eUJBa0NqQixLQUFLOzhCQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUdMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO21DQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFHTCxNQUFNOzhCQUNOLE1BQU07NkJBQ04sTUFBTTsrQkFDTixNQUFNOzhCQUNOLE1BQU07OEJBQ04sTUFBTTs2QkFDTixNQUFNOzhCQUNOLE1BQU07NEJBQ04sTUFBTTs4QkFDTixNQUFNOzZCQUNOLE1BQU07NEJBQ04sTUFBTTsrQkFDTixNQUFNOzhCQUNOLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNOzRCQUNOLE1BQU07OEJBQ04sTUFBTTt3Q0FHTixlQUFlLFNBQUMsdUJBQXVCOzs0QkE1RjFDOzs7Ozs7O0FDQUEsQUFZQSxxQkFBTUEsY0FBVyxHQUFHO0lBQ2xCLE1BQU07SUFDTixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7Q0FDZixDQUFDOztJQTREQSxrQ0FDVSxRQUNBO1FBREEsV0FBTSxHQUFOLE1BQU07UUFDTixpQkFBWSxHQUFaLFlBQVk7bUJBdkRoQixtQkFBbUI7O3NCQXNCUCxLQUFLO3NCQUNMLEtBQUs7O2dDQUlNLElBQUksWUFBWSxFQUFFO3FCQUM3QixJQUFJLFlBQVksRUFBRTt3QkFDZixJQUFJLFlBQVksRUFBRTswQkFDaEIsSUFBSSxZQUFZLEVBQUU7K0JBQ2IsSUFBSSxZQUFZLEVBQUU7K0JBQ2xCLElBQUksWUFBWSxFQUFFO3lCQUN4QixJQUFJLFlBQVksRUFBRTt1QkFDcEIsSUFBSSxZQUFZLEVBQUU7eUJBQ2hCLElBQUksWUFBWSxFQUFFO3dCQUNuQixJQUFJLFlBQVksRUFBRTtzQkFDcEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2QsSUFBSSxZQUFZLEVBQUU7eUJBQ25CLElBQUksWUFBWSxFQUFFO3dCQUNuQixJQUFJLFlBQVksRUFBRTs7NkJBR2IsSUFBSSxZQUFZLEVBQUU7Z0NBQ2YsSUFBSSxZQUFZLEVBQUU7NEJBQ3RCLElBQUksWUFBWSxFQUFFO3lCQUNyQixJQUFJLFlBQVksRUFBRTtLQVVwQzs7Ozs7SUFFSiw4Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBZ0JDO1FBZkMscUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBcUIsSUFBSSxFQUFFQSxjQUFXLENBQUMsQ0FBQztZQUMzRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBWSxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsR0FBRyxDQUFxQixTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDbkYsTUFBTSxDQUFDLEdBQUcsQ0FBTSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztTQUMvRDtRQUVELE1BQU0sQ0FBQyxHQUFHLENBQVUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxHQUFHLENBQVUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDcEU7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUM5Qzs7OztJQUVPLDZDQUFVOzs7OztRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRy9GLHVEQUFvQjs7OztjQUFDLEtBQWE7UUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHdkQsbURBQWdCOzs7O2NBQUMsS0FBYTtRQUNwQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7SUFJMUQsK0NBQVk7Ozs7SUFBWixVQUFhLENBQVU7UUFBdkIsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO2lCQUNsQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUEsQ0FBQztpQkFDN0IsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBQSxDQUFDO2lCQUNoRSxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNWLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Z0JBRXRCLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztnQkFDckcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztnQkFDM0csS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUM3RixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZixDQUFDLENBQUM7U0FDTjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsdUNBQUk7OztJQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDOUM7Ozs7SUFFRCx1Q0FBSTs7O0lBQUo7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQztLQUM5Qzs7Ozs7O0lBR0QsMENBQU87Ozs7SUFBUCxVQUFRLElBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ3JEOzs7OztJQUVELDZDQUFVOzs7O0lBQVYsVUFBVyxHQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDdkQ7Ozs7O0lBRUQsNkNBQVU7Ozs7SUFBVixVQUFXLEdBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ3ZEOzs7OztJQUdELDBDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDcEQ7Ozs7SUFFRCw0Q0FBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFBLENBQUMsQ0FBQztLQUNuRDs7OztJQUVELDRDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ25EOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDcEQ7O2dCQWxMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQTVCUSxhQUFhO2dCQU1iLGtCQUFrQjs7O3lCQTJCeEIsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUdMLEtBQUs7MkJBR0wsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLEtBQUs7cUNBR0wsTUFBTTswQkFDTixNQUFNOzZCQUNOLE1BQU07K0JBQ04sTUFBTTtvQ0FDTixNQUFNO29DQUNOLE1BQU07OEJBQ04sTUFBTTs0QkFDTixNQUFNOzhCQUNOLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNOytCQUNOLE1BQU07OEJBQ04sTUFBTTs2QkFDTixNQUFNO2tDQUdOLE1BQU07cUNBQ04sTUFBTTtpQ0FDTixNQUFNOzhCQUNOLE1BQU07O21DQS9FVDs7Ozs7OztBQ0FBLEFBVUEscUJBQU1BLGNBQVcsR0FBRztJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixTQUFTO0NBQ1YsQ0FBQzs7SUF5REEsOEJBQ1UsUUFDQTtRQURBLFdBQU0sR0FBTixNQUFNO1FBQ04sYUFBUSxHQUFSLFFBQVE7bUJBcERaLGNBQWM7O3NCQXFCRixLQUFLO3NCQUNMLEtBQUs7OzRCQUdFLElBQUksWUFBWSxFQUFFO3FCQUN6QixJQUFJLFlBQVksRUFBRTt3QkFDZixJQUFJLFlBQVksRUFBRTswQkFDaEIsSUFBSSxZQUFZLEVBQUU7MkJBQ2pCLElBQUksWUFBWSxFQUFFOzJCQUNsQixJQUFJLFlBQVksRUFBRTt5QkFDcEIsSUFBSSxZQUFZLEVBQUU7dUJBQ3BCLElBQUksWUFBWSxFQUFFO3lCQUNoQixJQUFJLFlBQVksRUFBRTt3QkFDbkIsSUFBSSxZQUFZLEVBQUU7c0JBQ3BCLElBQUksWUFBWSxFQUFFOzBCQUNkLElBQUksWUFBWSxFQUFFO3lCQUNuQixJQUFJLFlBQVksRUFBRTt3QkFDbkIsSUFBSSxZQUFZLEVBQUU7OzBCQUdoQixJQUFJLFlBQVksRUFBRTs0QkFDaEIsSUFBSSxZQUFZLEVBQUU7eUJBQ3JCLElBQUksWUFBWSxFQUFFO0tBVXBDOzs7OztJQUVKLDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFnQkM7UUFmQyxxQkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFpQixJQUFJLEVBQUVBLGNBQVcsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxDQUFpQixTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDL0UsTUFBTSxDQUFDLEdBQUcsQ0FBTSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsUUFBUSxDQUFTLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBVSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLEdBQUcsQ0FBVSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUNwRTs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3RDOzs7O0lBRU8seUNBQVU7Ozs7O1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENB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

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_amap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-amap */ "./node_modules/ngx-amap/fesm5/ngx-amap.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_amap__WEBPACK_IMPORTED_MODULE_6__["NgxAmapModule"].forRoot({
                    apiKey: '3f9327e9dd62e0358cba4992514bef7e'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_7__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_7__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n    </ion-buttons>\n\n    <ion-title>全国</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"document\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tab2-content\">\n\n    <ngx-amap style=\"height: 100%;\" [center]=\"[116.397428, 39.90923]\" [zooms]=\"[3, 3]\">\n        <amap-marker\n                *ngFor=\"let riverMapPoint of riverMapPointList\"\n                [position]=\"[riverMapPoint.WQ_AM_PI_LNG, riverMapPoint.WQ_AM_PI_LAT]\"\n                [icon]=\"WATER_TYPE_AMAP_MARKER_MODEL[riverMapPoint.WATER_TYPE]\"\n        >\n\n        </amap-marker>\n    </ngx-amap>\n\n    <div class=\"nav-fixed\">\n        <ion-button expand=\"full\" color=\"light\">\n            <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n        </ion-button>\n        <ion-button expand=\"full\" color=\"light\">\n            <ion-icon slot=\"icon-only\" name=\"albums\"></ion-icon>\n        </ion-button>\n        <ion-button expand=\"full\" color=\"light\">\n            <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n    </div>\n\n    <div class=\"footer-fixed\">\n        <span>全国共有{{riverMapPointTotal}}个自动监测断面</span>\n        <span>2018-03</span>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-icon {\n  font-size: 22px; }\n\n.tab2-content .nav-fixed {\n  position: absolute;\n  bottom: 5em;\n  right: 1em;\n  width: 3em; }\n\n.tab2-content .nav-fixed ion-button {\n    margin: 0; }\n\n.tab2-content .footer-fixed {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex;\n  position: absolute;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-align-items: center;\n  padding: 0 1em;\n  bottom: 0;\n  height: 3em;\n  width: 100%;\n  color: #fff;\n  background: #000;\n  opacity: 0.6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5saS9qb2JQcm9qZWN0cy9teS1pb25pYy1hcHAvbXlBcHAvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksZUFBZSxFQUFBOztBQUtuQjtFQUdJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVUsRUFBQTs7QUFOZDtJQVNNLFNBQVMsRUFBQTs7QUFUZjtFQWVJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixzQ0FBc0M7RUFDdEMseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxufVxuXG4udGFiMi1jb250ZW50IHtcblxuICAubmF2LWZpeGVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1ZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICB3aWR0aDogM2VtO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLWZpeGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _river_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../river.service */ "./src/app/river.service.ts");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(riverService) {
        this.riverService = riverService;
    }
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.riverMapPointInfo$ = this.riverService.getMapPointList();
        this.WATER_TYPE_AMAP_MARKER_MODEL = {
            "1": "./../assets/img/1.png",
            "2": "./../assets/img/2.png",
            "3": "./../assets/img/3.png",
            "4": "./../assets/img/4.png",
            "5": "./../assets/img/5.png",
            "6": "./../assets/img/6.png"
        };
        this.riverMapPointInfo$.subscribe({
            next: function (res) {
                _this.riverMapPointList = res[0].data || [];
                _this.riverMapPointTotal = _this.riverMapPointList.length || 0;
                console.log("Observer got a next value: " + JSON.stringify(_this.riverMapPointList));
            },
            error: function (err) { return console.error("Observer got an error: " + err); },
            complete: function () { return console.log("Observer got a complete notification"); },
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tab2",
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_river_service__WEBPACK_IMPORTED_MODULE_2__["RiverService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map