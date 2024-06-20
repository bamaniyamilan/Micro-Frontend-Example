(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('single-spa-angular/internals'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('single-spa-angular', ['exports', 'single-spa-angular/internals', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['single-spa-angular'] = {}, global['single-spa-angular-internals'], global.ng.core, global.ng.common));
}(this, (function (exports, internals, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SingleSpaPlatformLocation = /** @class */ (function (_super) {
        __extends(SingleSpaPlatformLocation, _super);
        function SingleSpaPlatformLocation() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            // This is a simple marker that helps us to ignore PopStateEvents
            // that was not dispatched by the browser.
            _this.skipNextPopState = false;
            // The key here is an actual forked `Zone` of some specific application.
            // We will be able to find the specific zone when application gets destroyed
            // by application `name`.
            // The reason of that the `onPopState` method is invoked during `bootstrapModule`
            // and we can't know what application has invoked it. Why should we know the application
            // that has invoked `onPopState`? When application gets destroyed in a `sharing dependencies mode`
            // (when there is a single platform per all applications) we want to remove application
            // specific `popstate` listeners. E.g. if there are 2 applications:
            // * shop application adds `popstate` listener
            // * navbar application adds `popstate` listener
            // When shop application gets destroyed we want to remove only its `popstate` listener.
            _this.zoneToOnPopStateListenersMap = new Map();
            // This is used only to make `Zone.wrap` happy, since it requires 2 arguments
            // and the second argument is a unique string which `zone.js` uses for debugging purposes.
            // We might want to use the application name, but we're not able to get it when `onPopState`
            // method is called during module bootstrapping.
            _this.source = 0;
            return _this;
        }
        SingleSpaPlatformLocation.prototype.destroyApplication = function (zoneIdentifier) {
            var e_1, _a;
            // TLDR: Angular adds `popstate` event listener and then doesn't remove it when application gets destroyed.
            // Basically, Angular has a potentional memory leak. The `ɵBrowserPlatformLocation`
            // has `onPopState` method which adds `popstate` event listener and forgets, see here:
            // https://github.com/angular/angular/blob/14be55c9facf3e47b8c97df4502dc3f0f897da03/packages/common/src/location/platform_location.ts#L126
            var zone = __spread(this.zoneToOnPopStateListenersMap.keys()).find(
            // `getZoneWith` will return a zone which defines a `key` and in our case
            // we define a custom key in `single-spa-angular.ts`
            // via this line of code:
            // `_properties[zoneIdentifier] = true;`
            function (zone) { return zone.getZoneWith(zoneIdentifier) !== null; });
            var onPopStateListeners = this.zoneToOnPopStateListenersMap.get(zone);
            if (Array.isArray(onPopStateListeners)) {
                try {
                    for (var onPopStateListeners_1 = __values(onPopStateListeners), onPopStateListeners_1_1 = onPopStateListeners_1.next(); !onPopStateListeners_1_1.done; onPopStateListeners_1_1 = onPopStateListeners_1.next()) {
                        var onPopStateListener = onPopStateListeners_1_1.value;
                        window.removeEventListener('popstate', onPopStateListener);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (onPopStateListeners_1_1 && !onPopStateListeners_1_1.done && (_a = onPopStateListeners_1.return)) _a.call(onPopStateListeners_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            this.zoneToOnPopStateListenersMap.delete(zone);
        };
        SingleSpaPlatformLocation.prototype.pushState = function (state, title, url) {
            this.skipNextPopState = true;
            _super.prototype.pushState.call(this, state, title, url);
        };
        SingleSpaPlatformLocation.prototype.replaceState = function (state, title, url) {
            this.skipNextPopState = true;
            _super.prototype.replaceState.call(this, state, title, url);
        };
        SingleSpaPlatformLocation.prototype.onPopState = function (fn) {
            var _this = this;
            // `Zone.current` will reference the zone that serves as an execution context
            // to some specific application, especially when `onPopState` is called.
            var zone = Zone.current;
            // Wrap any event listener into zone that is specific to some application.
            // The main issue is `back/forward` buttons of browsers, because they invoke
            // `history.back|forward` which dispatch `popstate` event. Since `single-spa`
            // overrides `history.replaceState` Angular's zone cannot intercept this event.
            // Only the root zone is able to intercept all events.
            // See https://github.com/single-spa/single-spa-angular/issues/94 for more details
            fn = zone.wrap(fn, "" + this.source++);
            var onPopStateListener = function (event) {
                // The `LocationChangeEvent` doesn't have the `singleSpa` property, since it's added
                // by `single-spa` starting from `5.4` version. We need this check because we want
                // to skip "unnatural" PopStateEvents, the one caused by `single-spa`.
                var popStateEventWasDispatchedBySingleSpa = !!event
                    .singleSpa;
                if (_this.skipNextPopState && popStateEventWasDispatchedBySingleSpa) {
                    _this.skipNextPopState = false;
                }
                else {
                    fn(event);
                }
            };
            this.storeOnPopStateListener(zone, onPopStateListener);
            _super.prototype.onPopState.call(this, onPopStateListener);
        };
        SingleSpaPlatformLocation.prototype.storeOnPopStateListener = function (zone, onPopStateListener) {
            // All listeners should be stored inside an array because the `onPopState` can be called
            // multiple times thus we wanna reference all listeners to remove them further.
            var onPopStateListeners = this.zoneToOnPopStateListenersMap.get(zone) || [];
            onPopStateListeners.push(onPopStateListener);
            if (!this.zoneToOnPopStateListenersMap.has(zone)) {
                this.zoneToOnPopStateListenersMap.set(zone, onPopStateListeners);
            }
        };
        return SingleSpaPlatformLocation;
    }(common.ɵBrowserPlatformLocation));
    SingleSpaPlatformLocation.decorators = [
        { type: core.Injectable }
    ];
    /**
     * The `PlatformLocation` class is an "injectee" of the `PathLocationStrategy`,
     * which creates `Subject` internally for listening on `popstate` events. We want
     * to provide this class in the most top injector that's used during bootstrapping.
     */
    function getSingleSpaExtraProviders() {
        return [
            {
                provide: SingleSpaPlatformLocation,
                useClass: SingleSpaPlatformLocation,
                deps: [[new core.Inject(common.DOCUMENT)]],
            },
            {
                provide: common.PlatformLocation,
                useExisting: SingleSpaPlatformLocation,
            },
        ];
    }

    var defaultOptions = {
        // Required options that will be set by the library consumer.
        NgZone: null,
        bootstrapFunction: null,
        template: null,
        // Optional options
        Router: undefined,
        domElementGetter: undefined,
        AnimationEngine: undefined,
        updateFunction: function () { return Promise.resolve(); },
        bootstrappedModule: null,
    };
    function singleSpaAngular(userOptions) {
        if (typeof userOptions !== 'object') {
            throw Error('single-spa-angular requires a configuration object');
        }
        var options = Object.assign(Object.assign({}, defaultOptions), userOptions);
        if (typeof options.bootstrapFunction !== 'function') {
            throw Error('single-spa-angular must be passed an options.bootstrapFunction');
        }
        if (typeof options.template !== 'string') {
            throw Error('single-spa-angular must be passed options.template string');
        }
        if (!options.NgZone) {
            throw Error("single-spa-angular must be passed the NgZone option");
        }
        if (options.Router && !options.NavigationStart) {
            // We call `console.warn` except of throwing `new Error()` since this will not
            // be a breaking change.
            console.warn("single-spa-angular must be passed the NavigationStart option");
        }
        return {
            bootstrap: bootstrap.bind(null, options),
            mount: mount.bind(null, options),
            unmount: unmount.bind(null, options),
            update: options.updateFunction,
        };
    }
    function bootstrap(options, props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Angular provides an opportunity to develop `zone-less` application, where developers
                // have to trigger change detection manually.
                // See https://angular.io/guide/zone#noopzone
                if (options.NgZone === 'noop') {
                    return [2 /*return*/];
                }
                // In order for multiple Angular apps to work concurrently on a page, they each need a unique identifier.
                options.zoneIdentifier = "single-spa-angular:" + (props.name || props.appName);
                // This is a hack, since NgZone doesn't allow you to configure the property that identifies your zone.
                // See https://github.com/PlaceMe-SAS/single-spa-angular-cli/issues/33,
                // https://github.com/single-spa/single-spa-angular/issues/47,
                // https://github.com/angular/angular/blob/a14dc2d7a4821a19f20a9547053a5734798f541e/packages/core/src/zone/ng_zone.ts#L144,
                // and https://github.com/angular/angular/blob/a14dc2d7a4821a19f20a9547053a5734798f541e/packages/core/src/zone/ng_zone.ts#L257
                options.NgZone.isInAngularZone = function () {
                    // @ts-ignore
                    return window.Zone.current._properties[options.zoneIdentifier] === true;
                };
                options.routingEventListener = function () {
                    options.bootstrappedNgZone.run(function () {
                        // See https://github.com/single-spa/single-spa-angular/issues/86
                        // Zone is unaware of the single-spa navigation change and so Angular change detection doesn't work
                        // unless we tell Zone that something happened
                    });
                };
                return [2 /*return*/];
            });
        });
    }
    function mount(options, props) {
        return __awaiter(this, void 0, void 0, function () {
            var bootstrapPromise, module, singleSpaPlatformLocation, ngZoneEnabled, bootstrappedOptions, ngZone, zoneIdentifier_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internals.getContainerElementAndSetTemplate(options, props);
                        bootstrapPromise = options.bootstrapFunction(props);
                        if (!(bootstrapPromise instanceof Promise)) {
                            throw Error("single-spa-angular: the options.bootstrapFunction must return a promise, but instead returned a '" + typeof bootstrapPromise + "' that is not a Promise");
                        }
                        return [4 /*yield*/, bootstrapPromise];
                    case 1:
                        module = _a.sent();
                        if (!module || typeof module.destroy !== 'function') {
                            throw Error("single-spa-angular: the options.bootstrapFunction returned a promise that did not resolve with a valid Angular module. Did you call platformBrowserDynamic().bootstrapModule() correctly?");
                        }
                        singleSpaPlatformLocation = module.injector.get(SingleSpaPlatformLocation, null);
                        ngZoneEnabled = options.NgZone !== 'noop';
                        // The user has to provide `BrowserPlatformLocation` only if his application uses routing.
                        // So if he provided `Router` but didn't provide `BrowserPlatformLocation` then we have to inform him.
                        // Also `getSingleSpaExtraProviders()` function should be called only if the user doesn't use
                        // `zone-less` change detection, if `NgZone` is `noop` then we can skip it.
                        if (ngZoneEnabled && options.Router && singleSpaPlatformLocation === null) {
                            throw new Error("\n      single-spa-angular: could not retrieve extra providers from the platform injector. Did you call platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule()?\n    ");
                        }
                        bootstrappedOptions = options;
                        if (ngZoneEnabled) {
                            ngZone = module.injector.get(options.NgZone);
                            zoneIdentifier_1 = bootstrappedOptions.zoneIdentifier;
                            // `NgZone` can be enabled but routing may not be used thus `getSingleSpaExtraProviders()`
                            // function was not called.
                            if (singleSpaPlatformLocation !== null) {
                                skipLocationChangeOnNonImperativeRoutingTriggers(module, options);
                                // Cleanup resources, especially remove event listeners thus they will not be added
                                // twice when application gets bootstrapped the second time.
                                module.onDestroy(function () {
                                    singleSpaPlatformLocation.destroyApplication(zoneIdentifier_1);
                                });
                            }
                            bootstrappedOptions.bootstrappedNgZone = ngZone;
                            bootstrappedOptions.bootstrappedNgZone['_inner']._properties[zoneIdentifier_1] = true;
                            window.addEventListener('single-spa:routing-event', bootstrappedOptions.routingEventListener);
                        }
                        bootstrappedOptions.bootstrappedModule = module;
                        return [2 /*return*/, module];
                }
            });
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function unmount(options, props) {
        return __awaiter(this, void 0, void 0, function () {
            var router, animationEngine;
            return __generator(this, function (_a) {
                if (options.Router) {
                    router = options.bootstrappedModule.injector.get(options.Router);
                    router.dispose();
                }
                if (options.routingEventListener) {
                    window.removeEventListener('single-spa:routing-event', options.routingEventListener);
                }
                if (options.AnimationEngine) {
                    animationEngine = options.bootstrappedModule.injector.get(options.AnimationEngine);
                    animationEngine._transitionEngine.flush();
                }
                options.bootstrappedModule.destroy();
                options.bootstrappedModule = null;
                // TODO: this is not an issue anymore and should be removed in the future.
                internals.removeApplicationFromDOMIfIvyEnabled(options, props);
                return [2 /*return*/];
            });
        });
    }
    function skipLocationChangeOnNonImperativeRoutingTriggers(module, options) {
        if (!options.NavigationStart) {
            // As discussed we don't do anything right now if the developer doesn't provide
            // `options.NavigationStart` since this might be a breaking change.
            return;
        }
        var router = module.injector.get(options.Router);
        var subscription = router.events.subscribe(function (event) {
            if (event instanceof options.NavigationStart) {
                var currentNavigation = router.getCurrentNavigation();
                // This listener will be set up for each Angular application
                // that has routing capabilities.
                // We set `skipLocationChange` for each non-imperative navigation,
                // Angular router checks under the hood if it has to change
                // the browser URL or not.
                // If `skipLocationChange` is truthy then Angular router will not call
                // `setBrowserUrl()` which calls `history.replaceState()` and dispatches `popstate` event.
                if (currentNavigation.trigger !== 'imperative') {
                    currentNavigation.extras.skipLocationChange = true;
                    currentNavigation.extras.replaceUrl = false;
                }
            }
        });
        module.onDestroy(function () {
            subscription.unsubscribe();
        });
    }

    /**
     * The public api for consumers of single-spa-angular
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.getSingleSpaExtraProviders = getSingleSpaExtraProviders;
    exports.singleSpaAngular = singleSpaAngular;
    exports.ɵa = SingleSpaPlatformLocation;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=single-spa-angular.umd.js.map
