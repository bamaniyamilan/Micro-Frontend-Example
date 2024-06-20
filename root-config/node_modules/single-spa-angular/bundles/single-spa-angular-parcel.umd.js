(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('single-spa-angular/parcel', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['single-spa-angular'] = global['single-spa-angular'] || {}, global['single-spa-angular'].parcel = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var ParcelComponent = /** @class */ (function () {
        function ParcelComponent(host) {
            this.host = host;
            this.config = null;
            this.mountParcel = null;
            this.onParcelMount = null;
            this.wrapWith = 'div';
            this.customProps = {};
            this.appendTo = null;
            this.handleError = function (error) { return console.error(error); };
            this.hasError = false;
            this.wrapper = null;
            this.parcel = null;
            this.task = null;
        }
        ParcelComponent.prototype.ngOnChanges = function () {
            var _this = this;
            this.scheduleTask("update" /* Update */, function () {
                if (_this.parcel !== null && _this.parcel.update) {
                    return _this.parcel.update(_this.customProps);
                }
            });
        };
        ParcelComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.scheduleTask("mount" /* Mount */, function () {
                if (_this.mountParcel === null) {
                    throw new Error('single-spa-angular: the [mountParcel] binding is required when using the <parcel> component. You can either (1) import mountRootParcel from single-spa or (2) use the mountParcel prop provided to single-spa applications.');
                }
                _this.wrapper = document.createElement(_this.wrapWith);
                if (_this.appendTo !== null) {
                    _this.appendTo.appendChild(_this.wrapper);
                }
                else {
                    _this.host.nativeElement.appendChild(_this.wrapper);
                }
                _this.parcel = _this.mountParcel(_this.config, Object.assign(Object.assign({}, _this.customProps), { domElement: _this.wrapper }));
                if (_this.onParcelMount !== null) {
                    _this.parcel.mountPromise.then(_this.onParcelMount);
                }
                _this.unmounted = false;
                return _this.parcel.mountPromise;
            });
        };
        ParcelComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            this.scheduleTask("unmount" /* Unmount */, function () {
                if (_this.parcel !== null && _this.parcel.getStatus() === 'MOUNTED') {
                    return _this.parcel.unmount();
                }
            });
            if (this.wrapper !== null) {
                this.wrapper.parentNode.removeChild(this.wrapper);
            }
            this.unmounted = true;
        };
        ParcelComponent.prototype.scheduleTask = function (action, task) {
            var _this = this;
            if (this.hasError && action !== "unmount" /* Unmount */) {
                // In an error state, we don't do anything anymore except for unmounting
                return;
            }
            this.task = (this.task || Promise.resolve())
                .then(function () {
                if (_this.unmounted && action !== "unmount" /* Unmount */) {
                    // Never do anything once the angular component unmounts
                    return;
                }
                return task();
            })
                .catch(function (error) {
                _this.task = Promise.resolve();
                _this.hasError = true;
                if (error === null || error === void 0 ? void 0 : error.message) {
                    error.message = "During '" + action + "', parcel threw an error: " + error.message;
                }
                if (typeof _this.handleError === 'function') {
                    _this.handleError(error);
                }
                else {
                    setTimeout(function () {
                        throw error;
                    });
                }
                // No more things to do should be done -- the parcel is in an error state
                throw error;
            });
        };
        return ParcelComponent;
    }());
    ParcelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'parcel',
                    template: '',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    ParcelComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ParcelComponent.propDecorators = {
        config: [{ type: core.Input }],
        mountParcel: [{ type: core.Input }],
        onParcelMount: [{ type: core.Input }],
        wrapWith: [{ type: core.Input }],
        customProps: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        handleError: [{ type: core.Input }]
    };

    var ParcelModule = /** @class */ (function () {
        function ParcelModule() {
        }
        return ParcelModule;
    }());
    ParcelModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ParcelComponent],
                    exports: [ParcelComponent],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ParcelComponent = ParcelComponent;
    exports.ParcelModule = ParcelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=single-spa-angular-parcel.umd.js.map
