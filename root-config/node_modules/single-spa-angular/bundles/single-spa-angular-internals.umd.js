(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('single-spa-angular/internals', ['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['single-spa-angular-internals'] = {}));
}(this, (function (exports) { 'use strict';

    function removeApplicationFromDOMIfIvyEnabled(options, props) {
        if (ivyEnabled()) {
            var domElementGetter = chooseDomElementGetter(options, props);
            var domElement = getContainerElement(domElementGetter);
            // View Engine removes all nodes automatically when calling `NgModuleRef.destroy()`,
            // which calls `ComponentRef.destroy()`.
            // Basically this will remove `app-root` or any other selector from the container element.
            while (domElement.firstChild)
                domElement.removeChild(domElement.firstChild);
        }
    }
    function getContainerElementAndSetTemplate(options, props) {
        var domElementGetter = chooseDomElementGetter(options, props);
        if (!domElementGetter) {
            throw Error("Cannot mount angular application '" + (props.name || props.appName) + "' without a domElementGetter provided either as an opt or a prop");
        }
        var containerElement = getContainerElement(domElementGetter);
        containerElement.innerHTML = options.template;
        return containerElement;
    }
    function getContainerElement(domElementGetter) {
        var element = domElementGetter();
        if (!element) {
            throw Error('domElementGetter did not return a valid dom element');
        }
        return element;
    }
    function chooseDomElementGetter(opts, props) {
        var _a;
        props = (_a = props === null || props === void 0 ? void 0 : props.customProps) !== null && _a !== void 0 ? _a : props;
        if (props.domElement) {
            return function () { return props.domElement; };
        }
        else if (props.domElementGetter) {
            return props.domElementGetter;
        }
        else if (opts.domElementGetter) {
            return opts.domElementGetter;
        }
        else {
            return defaultDomElementGetter(props.name);
        }
    }
    function defaultDomElementGetter(name) {
        return function getDefaultDomElement() {
            var id = "single-spa-application:" + name;
            var domElement = document.getElementById(id);
            if (!domElement) {
                domElement = document.createElement('div');
                domElement.id = id;
                document.body.appendChild(domElement);
            }
            return domElement;
        };
    }
    function ivyEnabled() {
        try {
            // `ɵivyEnabled` variable is exposed starting from version 8.
            // We use `require` here except of a single `import { ɵivyEnabled }` because the
            // developer can use Angular version that doesn't expose it (all versions <8).
            // The `catch` statement will handle those cases.
            // eslint-disable-next-line
            var ɵivyEnabled = require('@angular/core').ɵivyEnabled;
            return !!ɵivyEnabled;
        }
        catch (_a) {
            return false;
        }
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.getContainerElementAndSetTemplate = getContainerElementAndSetTemplate;
    exports.removeApplicationFromDOMIfIvyEnabled = removeApplicationFromDOMIfIvyEnabled;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=single-spa-angular-internals.umd.js.map
