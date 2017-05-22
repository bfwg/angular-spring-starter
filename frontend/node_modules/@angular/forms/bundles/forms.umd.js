(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/forms', ['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/observable/fromPromise', 'rxjs/Observable'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'), require('rxjs/operator/toPromise'), require('rxjs/Subject'), require('rxjs/observable/fromPromise'), require('rxjs/Observable'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core, global.Rx.Observable.prototype, global.Rx, global.Rx.Observable, global.Rx);
        global.ng = global.ng || {};
        global.ng.forms = mod.exports;
    }
})(this, function (exports, _core, _toPromise, _Subject2, _fromPromise) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵr = exports.ɵw = exports.ɵu = exports.ɵv = exports.ɵt = exports.ɵs = exports.ɵp = exports.ɵq = exports.ɵo = exports.ɵm = exports.ɵn = exports.ɵl = exports.ɵk = exports.ɵj = exports.ɵbe = exports.ɵbd = exports.ɵi = exports.ɵh = exports.ɵbc = exports.ɵbb = exports.ɵbf = exports.ɵg = exports.ɵf = exports.ɵe = exports.ɵd = exports.ɵc = exports.ɵb = exports.ɵa = exports.ɵy = exports.ɵx = exports.ɵz = exports.ɵba = exports.ReactiveFormsModule = exports.FormsModule = exports.VERSION = exports.Validators = exports.NG_VALIDATORS = exports.NG_ASYNC_VALIDATORS = exports.FormGroup = exports.FormControl = exports.FormArray = exports.AbstractControl = exports.FormBuilder = exports.RequiredValidator = exports.PatternValidator = exports.MinLengthValidator = exports.MaxLengthValidator = exports.EmailValidator = exports.CheckboxRequiredValidator = exports.SelectMultipleControlValueAccessor = exports.SelectControlValueAccessor = exports.NgSelectOption = exports.FormGroupName = exports.FormArrayName = exports.FormGroupDirective = exports.FormControlName = exports.FormControlDirective = exports.RadioControlValueAccessor = exports.NgModelGroup = exports.NgModel = exports.NgForm = exports.NgControlStatusGroup = exports.NgControlStatus = exports.NgControl = exports.DefaultValueAccessor = exports.NG_VALUE_ACCESSOR = exports.ControlContainer = exports.CheckboxControlValueAccessor = exports.AbstractFormGroupDirective = exports.AbstractControlDirective = undefined;

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var AbstractControlDirective = function () {
        function AbstractControlDirective() {
            _classCallCheck(this, AbstractControlDirective);
        }

        _createClass(AbstractControlDirective, [{
            key: 'reset',
            value: function reset() {
                var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

                if (this.control) this.control.reset(value);
            }
        }, {
            key: 'hasError',
            value: function hasError(errorCode) {
                var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                return this.control ? this.control.hasError(errorCode, path) : false;
            }
        }, {
            key: 'getError',
            value: function getError(errorCode) {
                var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                return this.control ? this.control.getError(errorCode, path) : null;
            }
        }, {
            key: 'control',
            get: function get() {
                throw new Error('unimplemented');
            }
        }, {
            key: 'value',
            get: function get() {
                return this.control ? this.control.value : null;
            }
        }, {
            key: 'valid',
            get: function get() {
                return this.control ? this.control.valid : null;
            }
        }, {
            key: 'invalid',
            get: function get() {
                return this.control ? this.control.invalid : null;
            }
        }, {
            key: 'pending',
            get: function get() {
                return this.control ? this.control.pending : null;
            }
        }, {
            key: 'errors',
            get: function get() {
                return this.control ? this.control.errors : null;
            }
        }, {
            key: 'pristine',
            get: function get() {
                return this.control ? this.control.pristine : null;
            }
        }, {
            key: 'dirty',
            get: function get() {
                return this.control ? this.control.dirty : null;
            }
        }, {
            key: 'touched',
            get: function get() {
                return this.control ? this.control.touched : null;
            }
        }, {
            key: 'untouched',
            get: function get() {
                return this.control ? this.control.untouched : null;
            }
        }, {
            key: 'disabled',
            get: function get() {
                return this.control ? this.control.disabled : null;
            }
        }, {
            key: 'enabled',
            get: function get() {
                return this.control ? this.control.enabled : null;
            }
        }, {
            key: 'statusChanges',
            get: function get() {
                return this.control ? this.control.statusChanges : null;
            }
        }, {
            key: 'valueChanges',
            get: function get() {
                return this.control ? this.control.valueChanges : null;
            }
        }, {
            key: 'path',
            get: function get() {
                return null;
            }
        }]);

        return AbstractControlDirective;
    }();

    var ControlContainer = function (_AbstractControlDirec) {
        _inherits(ControlContainer, _AbstractControlDirec);

        function ControlContainer() {
            _classCallCheck(this, ControlContainer);

            return _possibleConstructorReturn(this, (ControlContainer.__proto__ || Object.getPrototypeOf(ControlContainer)).apply(this, arguments));
        }

        _createClass(ControlContainer, [{
            key: 'formDirective',
            get: function get() {
                return null;
            }
        }, {
            key: 'path',
            get: function get() {
                return null;
            }
        }]);

        return ControlContainer;
    }(AbstractControlDirective);

    /**
     * @param {?} obj
     * @return {?}
     */
    function isPresent(obj) {
        return obj != null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isBlank(obj) {
        return obj == null;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function looseIdentical(a, b) {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }

    /**
     * Wraps Javascript Objects
     */

    var StringMapWrapper = function () {
        function StringMapWrapper() {
            _classCallCheck(this, StringMapWrapper);
        }

        _createClass(StringMapWrapper, null, [{
            key: 'merge',
            value: function merge(m1, m2) {
                var /** @type {?} */m = {};
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(m1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var k = _step.value;

                        m[k] = m1[k];
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = Object.keys(m2)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _k = _step2.value;

                        m[_k] = m2[_k];
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return m;
            }
        }, {
            key: 'equals',
            value: function equals(m1, m2) {
                var /** @type {?} */k1 = Object.keys(m1);
                var /** @type {?} */k2 = Object.keys(m2);
                if (k1.length != k2.length) {
                    return false;
                }
                for (var /** @type {?} */i = 0; i < k1.length; i++) {
                    var /** @type {?} */key = k1[i];
                    if (m1[key] !== m2[key]) {
                        return false;
                    }
                }
                return true;
            }
        }]);

        return StringMapWrapper;
    }();

    var ListWrapper = function () {
        function ListWrapper() {
            _classCallCheck(this, ListWrapper);
        }

        _createClass(ListWrapper, null, [{
            key: 'findLast',
            value: function findLast(arr, condition) {
                for (var /** @type {?} */i = arr.length - 1; i >= 0; i--) {
                    if (condition(arr[i])) {
                        return arr[i];
                    }
                }
                return null;
            }
        }, {
            key: 'removeAll',
            value: function removeAll(list, items) {
                for (var /** @type {?} */i = 0; i < items.length; ++i) {
                    var /** @type {?} */index = list.indexOf(items[i]);
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                }
            }
        }, {
            key: 'remove',
            value: function remove(list, el) {
                var /** @type {?} */index = list.indexOf(el);
                if (index > -1) {
                    list.splice(index, 1);
                    return true;
                }
                return false;
            }
        }, {
            key: 'equals',
            value: function equals(a, b) {
                if (a.length != b.length) return false;
                for (var /** @type {?} */i = 0; i < a.length; ++i) {
                    if (a[i] !== b[i]) return false;
                }
                return true;
            }
        }, {
            key: 'flatten',
            value: function flatten(list) {
                return list.reduce(function (flat, item) {
                    var /** @type {?} */flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
                    return flat.concat(flatItem);
                }, []);
            }
        }]);

        return ListWrapper;
    }();

    /**
     * @param {?} value
     * @return {?}
     */
    function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }
    /**
     * Providers for validators to be used for {@link FormControl}s in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * ### Example
     *
     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
     * @stable
     */
    var /** @type {?} */NG_VALIDATORS = new _core.InjectionToken('NgValidators');
    /**
     * Providers for asynchronous validators to be used for {@link FormControl}s
     * in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * See {@link NG_VALIDATORS} for more details.
     *
     * @stable
     */
    var /** @type {?} */NG_ASYNC_VALIDATORS = new _core.InjectionToken('NgAsyncValidators');
    var /** @type {?} */EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    /**
     * Provides a set of validators used by form controls.
     *
     * A validator is a function that processes a {\@link FormControl} or collection of
     * controls and returns a map of errors. A null map means that validation has passed.
     *
     * ### Example
     *
     * ```typescript
     * var loginControl = new FormControl("", Validators.required)
     * ```
     *
     * \@stable
     */

    var Validators = function () {
        function Validators() {
            _classCallCheck(this, Validators);
        }

        _createClass(Validators, null, [{
            key: 'equalsTo',
            value: function equalsTo() {
                for (var _len = arguments.length, fieldPaths = Array(_len), _key = 0; _key < _len; _key++) {
                    fieldPaths[_key] = arguments[_key];
                }

                return function (control) {
                    if (fieldPaths.length < 1) {
                        throw new Error('You must compare to at least 1 other field');
                    }
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = fieldPaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var fieldName = _step3.value;

                            var /** @type {?} */field = control.parent.get(fieldName);
                            if (!field) {
                                throw new Error('Field: ' + fieldName + ' undefined, are you sure that ' + fieldName + ' exists in the group');
                            }
                            if (field.value !== control.value) {
                                return { 'equalsTo': { 'unequalField': fieldName } };
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    return null;
                };
            }
        }, {
            key: 'required',
            value: function required(control) {
                return isEmptyInputValue(control.value) ? { 'required': true } : null;
            }
        }, {
            key: 'requiredTrue',
            value: function requiredTrue(control) {
                return control.value === true ? null : { 'required': true };
            }
        }, {
            key: 'email',
            value: function email(control) {
                return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
            }
        }, {
            key: 'minLength',
            value: function minLength(_minLength) {
                return function (control) {
                    if (isEmptyInputValue(control.value)) {
                        return null; // don't validate empty values to allow optional controls
                    }
                    var /** @type {?} */length = control.value ? control.value.length : 0;
                    return length < _minLength ? { 'minlength': { 'requiredLength': _minLength, 'actualLength': length } } : null;
                };
            }
        }, {
            key: 'maxLength',
            value: function maxLength(_maxLength) {
                return function (control) {
                    var /** @type {?} */length = control.value ? control.value.length : 0;
                    return length > _maxLength ? { 'maxlength': { 'requiredLength': _maxLength, 'actualLength': length } } : null;
                };
            }
        }, {
            key: 'pattern',
            value: function pattern(_pattern) {
                if (!_pattern) return Validators.nullValidator;
                var /** @type {?} */regex = void 0;
                var /** @type {?} */regexStr = void 0;
                if (typeof _pattern === 'string') {
                    regexStr = '^' + _pattern + '$';
                    regex = new RegExp(regexStr);
                } else {
                    regexStr = _pattern.toString();
                    regex = _pattern;
                }
                return function (control) {
                    if (isEmptyInputValue(control.value)) {
                        return null; // don't validate empty values to allow optional controls
                    }
                    var /** @type {?} */value = control.value;
                    return regex.test(value) ? null : { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
                };
            }
        }, {
            key: 'nullValidator',
            value: function nullValidator(c) {
                return null;
            }
        }, {
            key: 'compose',
            value: function compose(validators) {
                if (!validators) return null;
                var /** @type {?} */presentValidators = validators.filter(isPresent);
                if (presentValidators.length == 0) return null;
                return function (control) {
                    return _mergeErrors(_executeValidators(control, presentValidators));
                };
            }
        }, {
            key: 'composeAsync',
            value: function composeAsync(validators) {
                if (!validators) return null;
                var /** @type {?} */presentValidators = validators.filter(isPresent);
                if (presentValidators.length == 0) return null;
                return function (control) {
                    var /** @type {?} */promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
                    return Promise.all(promises).then(_mergeErrors);
                };
            }
        }]);

        return Validators;
    }();

    /**
     * @param {?} obj
     * @return {?}
     */
    function _convertToPromise(obj) {
        return (0, _core.ɵisPromise)(obj) ? obj : _toPromise.toPromise.call(obj);
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */
    function _executeValidators(control, validators) {
        return validators.map(function (v) {
            return v(control);
        });
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */
    function _executeAsyncValidators(control, validators) {
        return validators.map(function (v) {
            return v(control);
        });
    }
    /**
     * @param {?} arrayOfErrors
     * @return {?}
     */
    function _mergeErrors(arrayOfErrors) {
        var /** @type {?} */res = arrayOfErrors.reduce(function (res, errors) {
            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
        }, {});
        return Object.keys(res).length === 0 ? null : res;
    }

    /**
     * Used to provide a {@link ControlValueAccessor} for form controls.
     *
     * See {@link DefaultValueAccessor} for how to implement one.
     * @stable
     */
    var /** @type {?} */NG_VALUE_ACCESSOR = new _core.InjectionToken('NgValueAccessor');

    var /** @type {?} */CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: (0, _core.forwardRef)(function () {
            return CheckboxControlValueAccessor;
        }),
        multi: true
    };
    /**
     * The accessor for writing a value and listening to changes on a checkbox input element.
     *
     *  ### Example
     *  ```
     *  <input type="checkbox" name="rememberLogin" ngModel>
     *  ```
     *
     *  \@stable
     */

    var CheckboxControlValueAccessor = function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
            _classCallCheck(this, CheckboxControlValueAccessor);

            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) {};
            this.onTouched = function () {};
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(CheckboxControlValueAccessor, [{
            key: 'writeValue',
            value: function writeValue(value) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                this.onChange = fn;
            }
        }, {
            key: 'registerOnTouched',
            value: function registerOnTouched(fn) {
                this.onTouched = fn;
            }
        }, {
            key: 'setDisabledState',
            value: function setDisabledState(isDisabled) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            }
        }]);

        return CheckboxControlValueAccessor;
    }();

    CheckboxControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
            providers: [CHECKBOX_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    CheckboxControlValueAccessor.ctorParameters = function () {
        return [{ type: _core.Renderer }, { type: _core.ElementRef }];
    };

    var /** @type {?} */DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: (0, _core.forwardRef)(function () {
            return DefaultValueAccessor;
        }),
        multi: true
    };
    /**
     * The default accessor for writing a value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="text" name="searchQuery" ngModel>
     *  ```
     *
     *  \@stable
     */

    var DefaultValueAccessor = function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function DefaultValueAccessor(_renderer, _elementRef) {
            _classCallCheck(this, DefaultValueAccessor);

            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) {};
            this.onTouched = function () {};
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(DefaultValueAccessor, [{
            key: 'writeValue',
            value: function writeValue(value) {
                var /** @type {?} */normalizedValue = value == null ? '' : value;
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                this.onChange = fn;
            }
        }, {
            key: 'registerOnTouched',
            value: function registerOnTouched(fn) {
                this.onTouched = fn;
            }
        }, {
            key: 'setDisabledState',
            value: function setDisabledState(isDisabled) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            }
        }]);

        return DefaultValueAccessor;
    }();

    DefaultValueAccessor.decorators = [{ type: _core.Directive, args: [{
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngControl],[ngModel],[ngFormControl]',
            host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
            providers: [DEFAULT_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    DefaultValueAccessor.ctorParameters = function () {
        return [{ type: _core.Renderer }, { type: _core.ElementRef }];
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} validator
     * @return {?}
     */
    function normalizeValidator(validator) {
        if (validator.validate) {
            return function (c) {
                return validator.validate(c);
            };
        } else {
            return validator;
        }
    }
    /**
     * @param {?} validator
     * @return {?}
     */
    function normalizeAsyncValidator(validator) {
        if (validator.validate) {
            return function (c) {
                return validator.validate(c);
            };
        } else {
            return validator;
        }
    }

    var /** @type {?} */NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: (0, _core.forwardRef)(function () {
            return NumberValueAccessor;
        }),
        multi: true
    };
    /**
     * The accessor for writing a number value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="number" [(ngModel)]="age">
     *  ```
     */

    var NumberValueAccessor = function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function NumberValueAccessor(_renderer, _elementRef) {
            _classCallCheck(this, NumberValueAccessor);

            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) {};
            this.onTouched = function () {};
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(NumberValueAccessor, [{
            key: 'writeValue',
            value: function writeValue(value) {
                // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
                var /** @type {?} */normalizedValue = value == null ? '' : value;
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                this.onChange = function (value) {
                    fn(value == '' ? null : parseFloat(value));
                };
            }
        }, {
            key: 'registerOnTouched',
            value: function registerOnTouched(fn) {
                this.onTouched = fn;
            }
        }, {
            key: 'setDisabledState',
            value: function setDisabledState(isDisabled) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            }
        }]);

        return NumberValueAccessor;
    }();

    NumberValueAccessor.decorators = [{ type: _core.Directive, args: [{
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    NumberValueAccessor.ctorParameters = function () {
        return [{ type: _core.Renderer }, { type: _core.ElementRef }];
    };

    /**
     * @return {?}
     */
    function unimplemented() {
        throw new Error('unimplemented');
    }
    /**
     * A base class that all control directive extend.
     * It binds a {\@link FormControl} object to a DOM element.
     *
     * Used internally by Angular forms.
     *
     * \@stable
     * @abstract
     */

    var NgControl = function (_AbstractControlDirec2) {
        _inherits(NgControl, _AbstractControlDirec2);

        function NgControl() {
            _classCallCheck(this, NgControl);

            var _this2 = _possibleConstructorReturn(this, (NgControl.__proto__ || Object.getPrototypeOf(NgControl)).apply(this, arguments));

            /** @internal */
            _this2._parent = null;
            _this2.name = null;
            _this2.valueAccessor = null;
            /** @internal */
            _this2._rawValidators = [];
            /** @internal */
            _this2._rawAsyncValidators = [];
            return _this2;
        }
        /**
         * @return {?}
         */


        _createClass(NgControl, [{
            key: 'viewToModelUpdate',
            value: function viewToModelUpdate(newValue) {}
        }, {
            key: 'validator',
            get: function get() {
                return unimplemented();
            }
        }, {
            key: 'asyncValidator',
            get: function get() {
                return unimplemented();
            }
        }]);

        return NgControl;
    }(AbstractControlDirective);

    var /** @type {?} */RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: (0, _core.forwardRef)(function () {
            return RadioControlValueAccessor;
        }),
        multi: true
    };
    /**
     * Internal class used by Angular to uncheck radio buttons with the matching name.
     */

    var RadioControlRegistry = function () {
        function RadioControlRegistry() {
            _classCallCheck(this, RadioControlRegistry);

            this._accessors = [];
        }
        /**
         * @param {?} control
         * @param {?} accessor
         * @return {?}
         */


        _createClass(RadioControlRegistry, [{
            key: 'add',
            value: function add(control, accessor) {
                this._accessors.push([control, accessor]);
            }
        }, {
            key: 'remove',
            value: function remove(accessor) {
                for (var /** @type {?} */i = this._accessors.length - 1; i >= 0; --i) {
                    if (this._accessors[i][1] === accessor) {
                        this._accessors.splice(i, 1);
                        return;
                    }
                }
            }
        }, {
            key: 'select',
            value: function select(accessor) {
                var _this3 = this;

                this._accessors.forEach(function (c) {
                    if (_this3._isSameGroup(c, accessor) && c[1] !== accessor) {
                        c[1].fireUncheck(accessor.value);
                    }
                });
            }
        }, {
            key: '_isSameGroup',
            value: function _isSameGroup(controlPair, accessor) {
                if (!controlPair[0].control) return false;
                return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
            }
        }]);

        return RadioControlRegistry;
    }();

    RadioControlRegistry.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    RadioControlRegistry.ctorParameters = function () {
        return [];
    };
    /**
     * \@whatItDoes Writes radio control values and listens to radio control changes.
     *
     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
     * to keep the view synced with the {\@link FormControl} model.
     *
     * \@howToUse
     *
     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
     * value accessor will be active on any radio control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use radio buttons with form directives
     *
     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
     * in the same group have the same `name` attribute.  Radio buttons with different `name`
     * attributes do not affect each other.
     *
     * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
     *
     * When using radio buttons in a reactive form, radio buttons in the same group should have the
     * same `formControlName`. You can also add a `name` attribute, but it's optional.
     *
     * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     *  * **npm package**: `\@angular/forms`
     *
     *  \@stable
     */

    var RadioControlValueAccessor = function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         * @param {?} _registry
         * @param {?} _injector
         */
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
            _classCallCheck(this, RadioControlValueAccessor);

            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._registry = _registry;
            this._injector = _injector;
            this.onChange = function () {};
            this.onTouched = function () {};
        }
        /**
         * @return {?}
         */


        _createClass(RadioControlValueAccessor, [{
            key: 'ngOnInit',
            value: function ngOnInit() {
                this._control = this._injector.get(NgControl);
                this._checkName();
                this._registry.add(this._control, this);
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this._registry.remove(this);
            }
        }, {
            key: 'writeValue',
            value: function writeValue(value) {
                this._state = value === this.value;
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                var _this4 = this;

                this._fn = fn;
                this.onChange = function () {
                    fn(_this4.value);
                    _this4._registry.select(_this4);
                };
            }
        }, {
            key: 'fireUncheck',
            value: function fireUncheck(value) {
                this.writeValue(value);
            }
        }, {
            key: 'registerOnTouched',
            value: function registerOnTouched(fn) {
                this.onTouched = fn;
            }
        }, {
            key: 'setDisabledState',
            value: function setDisabledState(isDisabled) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            }
        }, {
            key: '_checkName',
            value: function _checkName() {
                if (this.name && this.formControlName && this.name !== this.formControlName) {
                    this._throwNameError();
                }
                if (!this.name && this.formControlName) this.name = this.formControlName;
            }
        }, {
            key: '_throwNameError',
            value: function _throwNameError() {
                throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ');
            }
        }]);

        return RadioControlValueAccessor;
    }();

    RadioControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
            providers: [RADIO_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    RadioControlValueAccessor.ctorParameters = function () {
        return [{ type: _core.Renderer }, { type: _core.ElementRef }, { type: RadioControlRegistry }, { type: _core.Injector }];
    };
    RadioControlValueAccessor.propDecorators = {
        'name': [{ type: _core.Input }],
        'formControlName': [{ type: _core.Input }],
        'value': [{ type: _core.Input }]
    };

    var /** @type {?} */RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: (0, _core.forwardRef)(function () {
            return RangeValueAccessor;
        }),
        multi: true
    };
    /**
     * The accessor for writing a range value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="range" [(ngModel)]="age" >
     *  ```
     */

    var RangeValueAccessor = function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function RangeValueAccessor(_renderer, _elementRef) {
            _classCallCheck(this, RangeValueAccessor);

            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) {};
            this.onTouched = function () {};
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(RangeValueAccessor, [{
            key: 'writeValue',
            value: function writeValue(value) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                this.onChange = function (value) {
                    fn(value == '' ? null : parseFloat(value));
                };
            }
        }, {
            key: 'registerOnTouched',
            value: function registerOnTouched(fn) {
                this.onTouched = fn;
            }
        }, {
            key: 'setDisabledState',
            value: function setDisabledState(isDisabled) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            }
        }]);

        return RangeValueAccessor;
    }();

    RangeValueAccessor.decorators = [{ type: _core.Directive, args: [{
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    RangeValueAccessor.ctorParameters = function () {
        return [{ type: _core.Renderer }, { type: _core.ElementRef }];
    };

    var /** @type {?} */SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: (0, _core.forwardRef)(function () {
            return SelectControlValueAccessor;
        }),
        multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    function _buildValueString(id, value) {
        if (id == null) return '' + value;
        if (!isPrimitive(value)) value = 'Object';
        return (id + ': ' + value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */
    function _extractId(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * \@whatItDoes Writes values and listens to changes on a select element.
     *
     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
     * to keep the view synced with the {\@link FormControl} model.
     *
     * \@howToUse
     *
     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
     * value accessor will be active on any select control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use select controls with form directives
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * If your option values are simple strings, you can bind to the normal `value` property
     * on the option.  If your option values happen to be objects (and you'd like to save the
     * selection in your form as an object), use `ngValue` instead:
     *
     * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * In reactive forms, you'll also want to add your form directive (`formControlName` or
     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
     * choice of binding to the  `value` or `ngValue` property on the select's options.
     *
     * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Caveat: Option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * #### Syntax
     *
     * ```
     * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * Note: We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */

    var SelectControlValueAccessor = function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function SelectControlValueAccessor(_renderer, _elementRef) {
            _classCallCheck(this, SelectControlValueAccessor);

            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) {};
            this.onTouched = function () {};
            this._compareWith = looseIdentical;
        }
        /**
         * @param {?} fn
         * @return {?}
         */


        _createClass(SelectControlValueAccessor, [{
            key: 'writeValue',
            value: function writeValue(value) {
                this.value = value;
                var /** @type {?} */id = this._getOptionId(value);
                if (id == null) {
                    this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                }
                var /** @type {?} */valueString = _buildValueString(id, value);
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                var _this5 = this;

                this.onChange = function (valueString) {
                    _this5.value = valueString;
                    fn(_this5._getOptionValue(valueString));
                };
            }
        }, {
            key: 'registerOnTouched',
            value: function registerOnTouched(fn) {
                this.onTouched = fn;
            }
        }, {
            key: 'setDisabledState',
            value: function setDisabledState(isDisabled) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            }
        }, {
            key: '_registerOption',
            value: function _registerOption() {
                return (this._idCounter++).toString();
            }
        }, {
            key: '_getOptionId',
            value: function _getOptionId(value) {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = Array.from(this._optionMap.keys())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var id = _step4.value;

                        if (this._compareWith(this._optionMap.get(id), value)) return id;
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                return null;
            }
        }, {
            key: '_getOptionValue',
            value: function _getOptionValue(valueString) {
                var /** @type {?} */id = _extractId(valueString);
                return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
            }
        }, {
            key: 'compareWith',
            set: function set(fn) {
                if (typeof fn !== 'function') {
                    throw new Error('compareWith must be a function, but received ' + JSON.stringify(fn));
                }
                this._compareWith = fn;
            }
        }]);

        return SelectControlValueAccessor;
    }();

    SelectControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
            providers: [SELECT_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    SelectControlValueAccessor.ctorParameters = function () {
        return [{ type: _core.Renderer }, { type: _core.ElementRef }];
    };
    SelectControlValueAccessor.propDecorators = {
        'compareWith': [{ type: _core.Input }]
    };
    /**
     * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * \@howToUse
     *
     * See docs for {\@link SelectControlValueAccessor} for usage examples.
     *
     * \@stable
     */

    var NgSelectOption = function () {
        /**
         * @param {?} _element
         * @param {?} _renderer
         * @param {?} _select
         */
        function NgSelectOption(_element, _renderer, _select) {
            _classCallCheck(this, NgSelectOption);

            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select) this.id = this._select._registerOption();
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(NgSelectOption, [{
            key: '_setElementValue',
            value: function _setElementValue(value) {
                this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                if (this._select) {
                    this._select._optionMap.delete(this.id);
                    this._select.writeValue(this._select.value);
                }
            }
        }, {
            key: 'ngValue',
            set: function set(value) {
                if (this._select == null) return;
                this._select._optionMap.set(this.id, value);
                this._setElementValue(_buildValueString(this.id, value));
                this._select.writeValue(this._select.value);
            }
        }, {
            key: 'value',
            set: function set(value) {
                this._setElementValue(value);
                if (this._select) this._select.writeValue(this._select.value);
            }
        }]);

        return NgSelectOption;
    }();

    NgSelectOption.decorators = [{ type: _core.Directive, args: [{ selector: 'option' }] }];
    /** @nocollapse */
    NgSelectOption.ctorParameters = function () {
        return [{ type: _core.ElementRef }, { type: _core.Renderer }, { type: SelectControlValueAccessor, decorators: [{ type: _core.Optional }, { type: _core.Host }] }];
    };
    NgSelectOption.propDecorators = {
        'ngValue': [{ type: _core.Input, args: ['ngValue'] }],
        'value': [{ type: _core.Input, args: ['value'] }]
    };

    var /** @type {?} */SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: (0, _core.forwardRef)(function () {
            return SelectMultipleControlValueAccessor;
        }),
        multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    function _buildValueString$1(id, value) {
        if (id == null) return '' + value;
        if (typeof value === 'string') value = '\'' + value + '\'';
        if (!isPrimitive(value)) value = 'Object';
        return (id + ': ' + value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */
    function _extractId$1(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * The accessor for writing a value and listening to changes on a select element.
     *
     *  ### Caveat: Options selection
     *
     * Angular uses object identity to select options. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
     * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects options by the return value of the function.
     *
     * #### Syntax
     *
     * ```
     * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * \@stable
     */

    var SelectMultipleControlValueAccessor = function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
            _classCallCheck(this, SelectMultipleControlValueAccessor);

            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) {};
            this.onTouched = function () {};
            this._compareWith = looseIdentical;
        }
        /**
         * @param {?} fn
         * @return {?}
         */


        _createClass(SelectMultipleControlValueAccessor, [{
            key: 'writeValue',
            value: function writeValue(value) {
                var _this6 = this;

                this.value = value;
                var /** @type {?} */optionSelectedStateSetter = void 0;
                if (Array.isArray(value)) {
                    // convert values to ids
                    var /** @type {?} */ids = value.map(function (v) {
                        return _this6._getOptionId(v);
                    });
                    optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                        opt._setSelected(ids.indexOf(o.toString()) > -1);
                    };
                } else {
                    optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                        opt._setSelected(false);
                    };
                }
                this._optionMap.forEach(optionSelectedStateSetter);
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                var _this7 = this;

                this.onChange = function (_) {
                    var /** @type {?} */selected = [];
                    if (_.hasOwnProperty('selectedOptions')) {
                        var /** @type {?} */options = _.selectedOptions;
                        for (var /** @type {?} */i = 0; i < options.length; i++) {
                            var /** @type {?} */opt = options.item(i);
                            var /** @type {?} */val = _this7._getOptionValue(opt.value);
                            selected.push(val);
                        }
                    } else {
                        var /** @type {?} */_options = _.options;
                        for (var /** @type {?} */_i = 0; _i < _options.length; _i++) {
                            var /** @type {?} */_opt = _options.item(_i);
                            if (_opt.selected) {
                                var /** @type {?} */_val = _this7._getOptionValue(_opt.value);
                                selected.push(_val);
                            }
                        }
                    }
                    _this7.value = selected;
                    fn(selected);
                };
            }
        }, {
            key: 'registerOnTouched',
            value: function registerOnTouched(fn) {
                this.onTouched = fn;
            }
        }, {
            key: 'setDisabledState',
            value: function setDisabledState(isDisabled) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            }
        }, {
            key: '_registerOption',
            value: function _registerOption(value) {
                var /** @type {?} */id = (this._idCounter++).toString();
                this._optionMap.set(id, value);
                return id;
            }
        }, {
            key: '_getOptionId',
            value: function _getOptionId(value) {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = Array.from(this._optionMap.keys())[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var id = _step5.value;

                        if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                return null;
            }
        }, {
            key: '_getOptionValue',
            value: function _getOptionValue(valueString) {
                var /** @type {?} */id = _extractId$1(valueString);
                return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
            }
        }, {
            key: 'compareWith',
            set: function set(fn) {
                if (typeof fn !== 'function') {
                    throw new Error('compareWith must be a function, but received ' + JSON.stringify(fn));
                }
                this._compareWith = fn;
            }
        }]);

        return SelectMultipleControlValueAccessor;
    }();

    SelectMultipleControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    SelectMultipleControlValueAccessor.ctorParameters = function () {
        return [{ type: _core.Renderer }, { type: _core.ElementRef }];
    };
    SelectMultipleControlValueAccessor.propDecorators = {
        'compareWith': [{ type: _core.Input }]
    };
    /**
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * ### Example
     *
     * ```
     * <select multiple name="city" ngModel>
     *   <option *ngFor="let c of cities" [value]="c"></option>
     * </select>
     * ```
     */

    var NgSelectMultipleOption = function () {
        /**
         * @param {?} _element
         * @param {?} _renderer
         * @param {?} _select
         */
        function NgSelectMultipleOption(_element, _renderer, _select) {
            _classCallCheck(this, NgSelectMultipleOption);

            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select) {
                this.id = this._select._registerOption(this);
            }
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(NgSelectMultipleOption, [{
            key: '_setElementValue',
            value: function _setElementValue(value) {
                this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
            }
        }, {
            key: '_setSelected',
            value: function _setSelected(selected) {
                this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                if (this._select) {
                    this._select._optionMap.delete(this.id);
                    this._select.writeValue(this._select.value);
                }
            }
        }, {
            key: 'ngValue',
            set: function set(value) {
                if (this._select == null) return;
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
        }, {
            key: 'value',
            set: function set(value) {
                if (this._select) {
                    this._value = value;
                    this._setElementValue(_buildValueString$1(this.id, value));
                    this._select.writeValue(this._select.value);
                } else {
                    this._setElementValue(value);
                }
            }
        }]);

        return NgSelectMultipleOption;
    }();

    NgSelectMultipleOption.decorators = [{ type: _core.Directive, args: [{ selector: 'option' }] }];
    /** @nocollapse */
    NgSelectMultipleOption.ctorParameters = function () {
        return [{ type: _core.ElementRef }, { type: _core.Renderer }, { type: SelectMultipleControlValueAccessor, decorators: [{ type: _core.Optional }, { type: _core.Host }] }];
    };
    NgSelectMultipleOption.propDecorators = {
        'ngValue': [{ type: _core.Input, args: ['ngValue'] }],
        'value': [{ type: _core.Input, args: ['value'] }]
    };

    /**
     * @param {?} name
     * @param {?} parent
     * @return {?}
     */
    function controlPath(name, parent) {
        return [].concat(_toConsumableArray(parent.path), [name]);
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function setUpControl(control, dir) {
        if (!control) _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
        dir.valueAccessor.writeValue(control.value);
        // view -> model
        dir.valueAccessor.registerOnChange(function (newValue) {
            dir.viewToModelUpdate(newValue);
            control.markAsDirty();
            control.setValue(newValue, { emitModelToViewChange: false });
        });
        // touched
        dir.valueAccessor.registerOnTouched(function () {
            return control.markAsTouched();
        });
        control.registerOnChange(function (newValue, emitModelEvent) {
            // control -> view
            dir.valueAccessor.writeValue(newValue);
            // control -> ngModel
            if (emitModelEvent) dir.viewToModelUpdate(newValue);
        });
        if (dir.valueAccessor.setDisabledState) {
            control.registerOnDisabledChange(function (isDisabled) {
                dir.valueAccessor.setDisabledState(isDisabled);
            });
        }
        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
                return control.updateValueAndValidity();
            });
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
                return control.updateValueAndValidity();
            });
        });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function cleanUpControl(control, dir) {
        dir.valueAccessor.registerOnChange(function () {
            return _noControlError(dir);
        });
        dir.valueAccessor.registerOnTouched(function () {
            return _noControlError(dir);
        });
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        if (control) control._clearChangeFns();
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function setUpFormContainer(control, dir) {
        if (isBlank(control)) _throwError(dir, 'Cannot find control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    /**
     * @param {?} dir
     * @return {?}
     */
    function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    /**
     * @param {?} dir
     * @param {?} message
     * @return {?}
     */
    function _throwError(dir, message) {
        var /** @type {?} */messageEnd = void 0;
        if (dir.path.length > 1) {
            messageEnd = 'path: \'' + dir.path.join(' -> ') + '\'';
        } else if (dir.path[0]) {
            messageEnd = 'name: \'' + dir.path + '\'';
        } else {
            messageEnd = 'unspecified name attribute';
        }
        throw new Error(message + ' ' + messageEnd);
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    function composeValidators(validators) {
        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    function composeAsyncValidators(validators) {
        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) return false;
        var /** @type {?} */change = changes['model'];
        if (change.isFirstChange()) return true;
        return !looseIdentical(viewModel, change.currentValue);
    }
    var /** @type {?} */BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];
    /**
     * @param {?} valueAccessor
     * @return {?}
     */
    function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) {
            return valueAccessor.constructor === a;
        });
    }
    /**
     * @param {?} dir
     * @param {?} valueAccessors
     * @return {?}
     */
    function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors) return null;
        var /** @type {?} */defaultAccessor = void 0;
        var /** @type {?} */builtinAccessor = void 0;
        var /** @type {?} */customAccessor = void 0;
        valueAccessors.forEach(function (v) {
            if (v.constructor === DefaultValueAccessor) {
                defaultAccessor = v;
            } else if (isBuiltInAccessor(v)) {
                if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
                builtinAccessor = v;
            } else {
                if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
                customAccessor = v;
            }
        });
        if (customAccessor) return customAccessor;
        if (builtinAccessor) return builtinAccessor;
        if (defaultAccessor) return defaultAccessor;
        _throwError(dir, 'No valid value accessor for form control with');
        return null;
    }

    /**
     * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
     *
     * \@stable
     */

    var AbstractFormGroupDirective = function (_ControlContainer) {
        _inherits(AbstractFormGroupDirective, _ControlContainer);

        function AbstractFormGroupDirective() {
            _classCallCheck(this, AbstractFormGroupDirective);

            return _possibleConstructorReturn(this, (AbstractFormGroupDirective.__proto__ || Object.getPrototypeOf(AbstractFormGroupDirective)).apply(this, arguments));
        }

        _createClass(AbstractFormGroupDirective, [{
            key: 'ngOnInit',
            value: function ngOnInit() {
                this._checkParentType();
                this.formDirective.addFormGroup(this);
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                if (this.formDirective) {
                    this.formDirective.removeFormGroup(this);
                }
            }
        }, {
            key: '_checkParentType',
            value: function _checkParentType() {}
        }, {
            key: 'control',
            get: function get() {
                return this.formDirective.getFormGroup(this);
            }
        }, {
            key: 'path',
            get: function get() {
                return controlPath(this.name, this._parent);
            }
        }, {
            key: 'formDirective',
            get: function get() {
                return this._parent ? this._parent.formDirective : null;
            }
        }, {
            key: 'validator',
            get: function get() {
                return composeValidators(this._validators);
            }
        }, {
            key: 'asyncValidator',
            get: function get() {
                return composeAsyncValidators(this._asyncValidators);
            }
        }]);

        return AbstractFormGroupDirective;
    }(ControlContainer);

    var AbstractControlStatus = function () {
        /**
         * @param {?} cd
         */
        function AbstractControlStatus(cd) {
            _classCallCheck(this, AbstractControlStatus);

            this._cd = cd;
        }
        /**
         * @return {?}
         */


        _createClass(AbstractControlStatus, [{
            key: 'ngClassUntouched',
            get: function get() {
                return this._cd.control ? this._cd.control.untouched : false;
            }
        }, {
            key: 'ngClassTouched',
            get: function get() {
                return this._cd.control ? this._cd.control.touched : false;
            }
        }, {
            key: 'ngClassPristine',
            get: function get() {
                return this._cd.control ? this._cd.control.pristine : false;
            }
        }, {
            key: 'ngClassDirty',
            get: function get() {
                return this._cd.control ? this._cd.control.dirty : false;
            }
        }, {
            key: 'ngClassValid',
            get: function get() {
                return this._cd.control ? this._cd.control.valid : false;
            }
        }, {
            key: 'ngClassInvalid',
            get: function get() {
                return this._cd.control ? this._cd.control.invalid : false;
            }
        }, {
            key: 'ngClassPending',
            get: function get() {
                return this._cd.control ? this._cd.control.pending : false;
            }
        }]);

        return AbstractControlStatus;
    }();

    var /** @type {?} */ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid',
        '[class.ng-pending]': 'ngClassPending'
    };
    /**
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * \@stable
     */

    var NgControlStatus = function (_AbstractControlStatu) {
        _inherits(NgControlStatus, _AbstractControlStatu);

        /**
         * @param {?} cd
         */
        function NgControlStatus(cd) {
            _classCallCheck(this, NgControlStatus);

            return _possibleConstructorReturn(this, (NgControlStatus.__proto__ || Object.getPrototypeOf(NgControlStatus)).call(this, cd));
        }

        return NgControlStatus;
    }(AbstractControlStatus);

    NgControlStatus.decorators = [{ type: _core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost }] }];
    /** @nocollapse */
    NgControlStatus.ctorParameters = function () {
        return [{ type: NgControl, decorators: [{ type: _core.Self }] }];
    };
    /**
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * \@stable
     */

    var NgControlStatusGroup = function (_AbstractControlStatu2) {
        _inherits(NgControlStatusGroup, _AbstractControlStatu2);

        /**
         * @param {?} cd
         */
        function NgControlStatusGroup(cd) {
            _classCallCheck(this, NgControlStatusGroup);

            return _possibleConstructorReturn(this, (NgControlStatusGroup.__proto__ || Object.getPrototypeOf(NgControlStatusGroup)).call(this, cd));
        }

        return NgControlStatusGroup;
    }(AbstractControlStatus);

    NgControlStatusGroup.decorators = [{ type: _core.Directive, args: [{
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
        }] }];
    /** @nocollapse */
    NgControlStatusGroup.ctorParameters = function () {
        return [{ type: ControlContainer, decorators: [{ type: _core.Self }] }];
    };

    /**
     * Use by directives and components to emit custom Events.
     *
     * ### Examples
     *
     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
     * title gets clicked:
     *
     * ```
     * \@Component({
     *   selector: 'zippy',
     *   template: `
     *   <div class="zippy">
     *     <div (click)="toggle()">Toggle</div>
     *     <div [hidden]="!visible">
     *       <ng-content></ng-content>
     *     </div>
     *  </div>`})
     * export class Zippy {
     *   visible: boolean = true;
     *   \@Output() open: EventEmitter<any> = new EventEmitter();
     *   \@Output() close: EventEmitter<any> = new EventEmitter();
     *
     *   toggle() {
     *     this.visible = !this.visible;
     *     if (this.visible) {
     *       this.open.emit(null);
     *     } else {
     *       this.close.emit(null);
     *     }
     *   }
     * }
     * ```
     *
     * The events payload can be accessed by the parameter `$event` on the components output event
     * handler:
     *
     * ```
     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
     * ```
     *
     * Uses Rx.Observable but provides an adapter to make it work as specified here:
     * https://github.com/jhusain/observable-spec
     *
     * Once a reference implementation of the spec is available, switch to it.
     * \@stable
     */

    var EventEmitter = function (_Subject) {
        _inherits(EventEmitter, _Subject);

        /**
         * Creates an instance of [EventEmitter], which depending on [isAsync],
         * delivers events synchronously or asynchronously.
         * @param {?=} isAsync
         */
        function EventEmitter() {
            var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _classCallCheck(this, EventEmitter);

            var _this11 = _possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).call(this));

            _this11.__isAsync = isAsync;
            return _this11;
        }
        /**
         * @param {?=} value
         * @return {?}
         */


        _createClass(EventEmitter, [{
            key: 'emit',
            value: function emit(value) {
                _get(EventEmitter.prototype.__proto__ || Object.getPrototypeOf(EventEmitter.prototype), 'next', this).call(this, value);
            }
        }, {
            key: 'subscribe',
            value: function subscribe(generatorOrNext, error, complete) {
                var /** @type {?} */schedulerFn = void 0;
                var /** @type {?} */errorFn = function errorFn(err) {
                    return null;
                };
                var /** @type {?} */completeFn = function completeFn() {
                    return null;
                };
                if (generatorOrNext && (typeof generatorOrNext === 'undefined' ? 'undefined' : _typeof(generatorOrNext)) === 'object') {
                    schedulerFn = this.__isAsync ? function (value) {
                        setTimeout(function () {
                            return generatorOrNext.next(value);
                        });
                    } : function (value) {
                        generatorOrNext.next(value);
                    };
                    if (generatorOrNext.error) {
                        errorFn = this.__isAsync ? function (err) {
                            setTimeout(function () {
                                return generatorOrNext.error(err);
                            });
                        } : function (err) {
                            generatorOrNext.error(err);
                        };
                    }
                    if (generatorOrNext.complete) {
                        completeFn = this.__isAsync ? function () {
                            setTimeout(function () {
                                return generatorOrNext.complete();
                            });
                        } : function () {
                            generatorOrNext.complete();
                        };
                    }
                } else {
                    schedulerFn = this.__isAsync ? function (value) {
                        setTimeout(function () {
                            return generatorOrNext(value);
                        });
                    } : function (value) {
                        generatorOrNext(value);
                    };
                    if (error) {
                        errorFn = this.__isAsync ? function (err) {
                            setTimeout(function () {
                                return error(err);
                            });
                        } : function (err) {
                            error(err);
                        };
                    }
                    if (complete) {
                        completeFn = this.__isAsync ? function () {
                            setTimeout(function () {
                                return complete();
                            });
                        } : function () {
                            complete();
                        };
                    }
                }
                return _get(EventEmitter.prototype.__proto__ || Object.getPrototypeOf(EventEmitter.prototype), 'subscribe', this).call(this, schedulerFn, errorFn, completeFn);
            }
        }]);

        return EventEmitter;
    }(_Subject2.Subject);

    /**
     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
     */
    var /** @type {?} */VALID = 'VALID';
    /**
     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
     */
    var /** @type {?} */INVALID = 'INVALID';
    /**
     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
     * errors are not yet available for the input value.
     */
    var /** @type {?} */PENDING = 'PENDING';
    /**
     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
     * calculations of validity or value.
     */
    var /** @type {?} */DISABLED = 'DISABLED';
    /**
     * @param {?} control
     * @param {?} path
     * @param {?} delimiter
     * @return {?}
     */
    function _find(control, path, delimiter) {
        if (path == null) return null;
        if (!(path instanceof Array)) {
            path = path.split(delimiter);
        }
        if (path instanceof Array && path.length === 0) return null;
        return path.reduce(function (v, name) {
            if (v instanceof FormGroup) {
                return v.controls[name] || null;
            }
            if (v instanceof FormArray) {
                return v.at( /** @type {?} */name) || null;
            }
            return null;
        }, control);
    }
    /**
     * @param {?} r
     * @return {?}
     */
    function toObservable(r) {
        return (0, _core.ɵisPromise)(r) ? (0, _fromPromise.fromPromise)(r) : r;
    }
    /**
     * @param {?} validator
     * @return {?}
     */
    function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator;
    }
    /**
     * @param {?} asyncValidator
     * @return {?}
     */
    function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
    }
    /**
     * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
     * {\@link FormArray}.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * \@stable
     * @abstract
     */

    var AbstractControl = function () {
        /**
         * @param {?} validator
         * @param {?} asyncValidator
         */
        function AbstractControl(validator, asyncValidator) {
            _classCallCheck(this, AbstractControl);

            this.validator = validator;
            this.asyncValidator = asyncValidator;
            /** @internal */
            this._onCollectionChange = function () {};
            this._pristine = true;
            this._touched = false;
            /** @internal */
            this._onDisabledChange = [];
        }
        /**
         * The value of the control.
         * @return {?}
         */


        _createClass(AbstractControl, [{
            key: 'setValidators',
            value: function setValidators(newValidator) {
                this.validator = coerceToValidator(newValidator);
            }
        }, {
            key: 'setAsyncValidators',
            value: function setAsyncValidators(newValidator) {
                this.asyncValidator = coerceToAsyncValidator(newValidator);
            }
        }, {
            key: 'clearValidators',
            value: function clearValidators() {
                this.validator = null;
            }
        }, {
            key: 'clearAsyncValidators',
            value: function clearAsyncValidators() {
                this.asyncValidator = null;
            }
        }, {
            key: 'markAsTouched',
            value: function markAsTouched() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref.onlySelf;

                this._touched = true;
                if (this._parent && !onlySelf) {
                    this._parent.markAsTouched({ onlySelf: onlySelf });
                }
            }
        }, {
            key: 'markAsUntouched',
            value: function markAsUntouched() {
                var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref2.onlySelf;

                this._touched = false;
                this._forEachChild(function (control) {
                    control.markAsUntouched({ onlySelf: true });
                });
                if (this._parent && !onlySelf) {
                    this._parent._updateTouched({ onlySelf: onlySelf });
                }
            }
        }, {
            key: 'markAsDirty',
            value: function markAsDirty() {
                var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref3.onlySelf;

                this._pristine = false;
                if (this._parent && !onlySelf) {
                    this._parent.markAsDirty({ onlySelf: onlySelf });
                }
            }
        }, {
            key: 'markAsPristine',
            value: function markAsPristine() {
                var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref4.onlySelf;

                this._pristine = true;
                this._forEachChild(function (control) {
                    control.markAsPristine({ onlySelf: true });
                });
                if (this._parent && !onlySelf) {
                    this._parent._updatePristine({ onlySelf: onlySelf });
                }
            }
        }, {
            key: 'markAsPending',
            value: function markAsPending() {
                var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref5.onlySelf;

                this._status = PENDING;
                if (this._parent && !onlySelf) {
                    this._parent.markAsPending({ onlySelf: onlySelf });
                }
            }
        }, {
            key: 'disable',
            value: function disable() {
                var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref6.onlySelf,
                    emitEvent = _ref6.emitEvent;

                this._status = DISABLED;
                this._errors = null;
                this._forEachChild(function (control) {
                    control.disable({ onlySelf: true });
                });
                this._updateValue();
                if (emitEvent !== false) {
                    this._valueChanges.emit(this._value);
                    this._statusChanges.emit(this._status);
                }
                this._updateAncestors(onlySelf);
                this._onDisabledChange.forEach(function (changeFn) {
                    return changeFn(true);
                });
            }
        }, {
            key: 'enable',
            value: function enable() {
                var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref7.onlySelf,
                    emitEvent = _ref7.emitEvent;

                this._status = VALID;
                this._forEachChild(function (control) {
                    control.enable({ onlySelf: true });
                });
                this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
                this._updateAncestors(onlySelf);
                this._onDisabledChange.forEach(function (changeFn) {
                    return changeFn(false);
                });
            }
        }, {
            key: '_updateAncestors',
            value: function _updateAncestors(onlySelf) {
                if (this._parent && !onlySelf) {
                    this._parent.updateValueAndValidity();
                    this._parent._updatePristine();
                    this._parent._updateTouched();
                }
            }
        }, {
            key: 'setParent',
            value: function setParent(parent) {
                this._parent = parent;
            }
        }, {
            key: 'setValue',
            value: function setValue(value, options) {}
        }, {
            key: 'patchValue',
            value: function patchValue(value, options) {}
        }, {
            key: 'reset',
            value: function reset(value, options) {}
        }, {
            key: 'updateValueAndValidity',
            value: function updateValueAndValidity() {
                var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref8.onlySelf,
                    emitEvent = _ref8.emitEvent;

                this._setInitialStatus();
                this._updateValue();
                if (this.enabled) {
                    this._cancelExistingSubscription();
                    this._errors = this._runValidator();
                    this._status = this._calculateStatus();
                    if (this._status === VALID || this._status === PENDING) {
                        this._runAsyncValidator(emitEvent);
                    }
                }
                if (emitEvent !== false) {
                    this._valueChanges.emit(this._value);
                    this._statusChanges.emit(this._status);
                }
                if (this._parent && !onlySelf) {
                    this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
                }
            }
        }, {
            key: '_updateTreeValidity',
            value: function _updateTreeValidity() {
                var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { emitEvent: true },
                    emitEvent = _ref9.emitEvent;

                this._forEachChild(function (ctrl) {
                    return ctrl._updateTreeValidity({ emitEvent: emitEvent });
                });
                this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
            }
        }, {
            key: '_setInitialStatus',
            value: function _setInitialStatus() {
                this._status = this._allControlsDisabled() ? DISABLED : VALID;
            }
        }, {
            key: '_runValidator',
            value: function _runValidator() {
                return this.validator ? this.validator(this) : null;
            }
        }, {
            key: '_runAsyncValidator',
            value: function _runAsyncValidator(emitEvent) {
                var _this12 = this;

                if (this.asyncValidator) {
                    this._status = PENDING;
                    var /** @type {?} */obs = toObservable(this.asyncValidator(this));
                    if (!(0, _core.ɵisObservable)(obs)) {
                        throw new Error('expected the following validator to return Promise or Observable: ' + this.asyncValidator + '. If you are using FormBuilder; did you forget to brace your validators in an array?');
                    }
                    this._asyncValidationSubscription = obs.subscribe({ next: function next(res) {
                            return _this12.setErrors(res, { emitEvent: emitEvent });
                        } });
                }
            }
        }, {
            key: '_cancelExistingSubscription',
            value: function _cancelExistingSubscription() {
                if (this._asyncValidationSubscription) {
                    this._asyncValidationSubscription.unsubscribe();
                }
            }
        }, {
            key: 'setErrors',
            value: function setErrors(errors) {
                var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    emitEvent = _ref10.emitEvent;

                this._errors = errors;
                this._updateControlsErrors(emitEvent !== false);
            }
        }, {
            key: 'get',
            value: function get(path) {
                return _find(this, path, '.');
            }
        }, {
            key: 'getError',
            value: function getError(errorCode) {
                var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                var /** @type {?} */control = path ? this.get(path) : this;
                return control && control._errors ? control._errors[errorCode] : null;
            }
        }, {
            key: 'hasError',
            value: function hasError(errorCode) {
                var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                return !!this.getError(errorCode, path);
            }
        }, {
            key: '_updateControlsErrors',
            value: function _updateControlsErrors(emitEvent) {
                this._status = this._calculateStatus();
                if (emitEvent) {
                    this._statusChanges.emit(this._status);
                }
                if (this._parent) {
                    this._parent._updateControlsErrors(emitEvent);
                }
            }
        }, {
            key: '_initObservables',
            value: function _initObservables() {
                this._valueChanges = new EventEmitter();
                this._statusChanges = new EventEmitter();
            }
        }, {
            key: '_calculateStatus',
            value: function _calculateStatus() {
                if (this._allControlsDisabled()) return DISABLED;
                if (this._errors) return INVALID;
                if (this._anyControlsHaveStatus(PENDING)) return PENDING;
                if (this._anyControlsHaveStatus(INVALID)) return INVALID;
                return VALID;
            }
        }, {
            key: '_updateValue',
            value: function _updateValue() {}
        }, {
            key: '_forEachChild',
            value: function _forEachChild(cb) {}
        }, {
            key: '_anyControls',
            value: function _anyControls(condition) {}
        }, {
            key: '_allControlsDisabled',
            value: function _allControlsDisabled() {}
        }, {
            key: '_anyControlsHaveStatus',
            value: function _anyControlsHaveStatus(status) {
                return this._anyControls(function (control) {
                    return control.status === status;
                });
            }
        }, {
            key: '_anyControlsDirty',
            value: function _anyControlsDirty() {
                return this._anyControls(function (control) {
                    return control.dirty;
                });
            }
        }, {
            key: '_anyControlsTouched',
            value: function _anyControlsTouched() {
                return this._anyControls(function (control) {
                    return control.touched;
                });
            }
        }, {
            key: '_updatePristine',
            value: function _updatePristine() {
                var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref11.onlySelf;

                this._pristine = !this._anyControlsDirty();
                if (this._parent && !onlySelf) {
                    this._parent._updatePristine({ onlySelf: onlySelf });
                }
            }
        }, {
            key: '_updateTouched',
            value: function _updateTouched() {
                var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    onlySelf = _ref12.onlySelf;

                this._touched = this._anyControlsTouched();
                if (this._parent && !onlySelf) {
                    this._parent._updateTouched({ onlySelf: onlySelf });
                }
            }
        }, {
            key: '_isBoxedValue',
            value: function _isBoxedValue(formState) {
                return (typeof formState === 'undefined' ? 'undefined' : _typeof(formState)) === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
            }
        }, {
            key: '_registerOnCollectionChange',
            value: function _registerOnCollectionChange(fn) {
                this._onCollectionChange = fn;
            }
        }, {
            key: 'value',
            get: function get() {
                return this._value;
            }
        }, {
            key: 'parent',
            get: function get() {
                return this._parent;
            }
        }, {
            key: 'status',
            get: function get() {
                return this._status;
            }
        }, {
            key: 'valid',
            get: function get() {
                return this._status === VALID;
            }
        }, {
            key: 'invalid',
            get: function get() {
                return this._status === INVALID;
            }
        }, {
            key: 'pending',
            get: function get() {
                return this._status == PENDING;
            }
        }, {
            key: 'disabled',
            get: function get() {
                return this._status === DISABLED;
            }
        }, {
            key: 'enabled',
            get: function get() {
                return this._status !== DISABLED;
            }
        }, {
            key: 'errors',
            get: function get() {
                return this._errors;
            }
        }, {
            key: 'pristine',
            get: function get() {
                return this._pristine;
            }
        }, {
            key: 'dirty',
            get: function get() {
                return !this.pristine;
            }
        }, {
            key: 'touched',
            get: function get() {
                return this._touched;
            }
        }, {
            key: 'untouched',
            get: function get() {
                return !this._touched;
            }
        }, {
            key: 'valueChanges',
            get: function get() {
                return this._valueChanges;
            }
        }, {
            key: 'statusChanges',
            get: function get() {
                return this._statusChanges;
            }
        }, {
            key: 'root',
            get: function get() {
                var /** @type {?} */x = this;
                while (x._parent) {
                    x = x._parent;
                }
                return x;
            }
        }]);

        return AbstractControl;
    }();

    var FormControl = function (_AbstractControl) {
        _inherits(FormControl, _AbstractControl);

        /**
         * @param {?=} formState
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormControl() {
            var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            _classCallCheck(this, FormControl);

            var _this13 = _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)));

            /** @internal */
            _this13._onChange = [];
            _this13._applyFormState(formState);
            _this13.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            _this13._initObservables();
            return _this13;
        }
        /**
         * Set the value of the form control to `value`.
         *
         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
         * and not its parent component. This defaults to false.
         *
         * If `emitEvent` is `true`, this
         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
         * to true (as it falls through to `updateValueAndValidity`).
         *
         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
         * specified.
         *
         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */


        _createClass(FormControl, [{
            key: 'setValue',
            value: function setValue(value) {
                var _this14 = this;

                var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref13.onlySelf,
                    emitEvent = _ref13.emitEvent,
                    emitModelToViewChange = _ref13.emitModelToViewChange,
                    emitViewToModelChange = _ref13.emitViewToModelChange;

                this._value = value;
                if (this._onChange.length && emitModelToViewChange !== false) {
                    this._onChange.forEach(function (changeFn) {
                        return changeFn(_this14._value, emitViewToModelChange !== false);
                    });
                }
                this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }, {
            key: 'patchValue',
            value: function patchValue(value) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                this.setValue(value, options);
            }
        }, {
            key: 'reset',
            value: function reset() {
                var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref14.onlySelf,
                    emitEvent = _ref14.emitEvent;

                this._applyFormState(formState);
                this.markAsPristine({ onlySelf: onlySelf });
                this.markAsUntouched({ onlySelf: onlySelf });
                this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }, {
            key: '_updateValue',
            value: function _updateValue() {}
        }, {
            key: '_anyControls',
            value: function _anyControls(condition) {
                return false;
            }
        }, {
            key: '_allControlsDisabled',
            value: function _allControlsDisabled() {
                return this.disabled;
            }
        }, {
            key: 'registerOnChange',
            value: function registerOnChange(fn) {
                this._onChange.push(fn);
            }
        }, {
            key: '_clearChangeFns',
            value: function _clearChangeFns() {
                this._onChange = [];
                this._onDisabledChange = [];
                this._onCollectionChange = function () {};
            }
        }, {
            key: 'registerOnDisabledChange',
            value: function registerOnDisabledChange(fn) {
                this._onDisabledChange.push(fn);
            }
        }, {
            key: '_forEachChild',
            value: function _forEachChild(cb) {}
        }, {
            key: '_applyFormState',
            value: function _applyFormState(formState) {
                if (this._isBoxedValue(formState)) {
                    this._value = formState.value;
                    formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) : this.enable({ onlySelf: true, emitEvent: false });
                } else {
                    this._value = formState;
                }
            }
        }]);

        return FormControl;
    }(AbstractControl);

    var FormGroup = function (_AbstractControl2) {
        _inherits(FormGroup, _AbstractControl2);

        /**
         * @param {?} controls
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormGroup(controls) {
            var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            _classCallCheck(this, FormGroup);

            var _this15 = _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).call(this, validator, asyncValidator));

            _this15.controls = controls;
            _this15._initObservables();
            _this15._setUpControls();
            _this15.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return _this15;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update value or validity of the control, so for
         * most cases you'll want to use {\@link FormGroup.addControl} instead.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */


        _createClass(FormGroup, [{
            key: 'registerControl',
            value: function registerControl(name, control) {
                if (this.controls[name]) return this.controls[name];
                this.controls[name] = control;
                control.setParent(this);
                control._registerOnCollectionChange(this._onCollectionChange);
                return control;
            }
        }, {
            key: 'addControl',
            value: function addControl(name, control) {
                this.registerControl(name, control);
                this.updateValueAndValidity();
                this._onCollectionChange();
            }
        }, {
            key: 'removeControl',
            value: function removeControl(name) {
                if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
                delete this.controls[name];
                this.updateValueAndValidity();
                this._onCollectionChange();
            }
        }, {
            key: 'setControl',
            value: function setControl(name, control) {
                if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
                delete this.controls[name];
                if (control) this.registerControl(name, control);
                this.updateValueAndValidity();
                this._onCollectionChange();
            }
        }, {
            key: 'contains',
            value: function contains(controlName) {
                return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
            }
        }, {
            key: 'setValue',
            value: function setValue(value) {
                var _this16 = this;

                var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref15.onlySelf,
                    emitEvent = _ref15.emitEvent;

                this._checkAllValuesPresent(value);
                Object.keys(value).forEach(function (name) {
                    _this16._throwIfControlMissing(name);
                    _this16.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
                });
                this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }, {
            key: 'patchValue',
            value: function patchValue(value) {
                var _this17 = this;

                var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref16.onlySelf,
                    emitEvent = _ref16.emitEvent;

                Object.keys(value).forEach(function (name) {
                    if (_this17.controls[name]) {
                        _this17.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
                    }
                });
                this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }, {
            key: 'reset',
            value: function reset() {
                var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref17.onlySelf,
                    emitEvent = _ref17.emitEvent;

                this._forEachChild(function (control, name) {
                    control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
                });
                this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
                this._updatePristine({ onlySelf: onlySelf });
                this._updateTouched({ onlySelf: onlySelf });
            }
        }, {
            key: 'getRawValue',
            value: function getRawValue() {
                return this._reduceChildren({}, function (acc, control, name) {
                    acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
                    return acc;
                });
            }
        }, {
            key: '_throwIfControlMissing',
            value: function _throwIfControlMissing(name) {
                if (!Object.keys(this.controls).length) {
                    throw new Error('\n        There are no form controls registered with this group yet.  If you\'re using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ');
                }
                if (!this.controls[name]) {
                    throw new Error('Cannot find form control with name: ' + name + '.');
                }
            }
        }, {
            key: '_forEachChild',
            value: function _forEachChild(cb) {
                var _this18 = this;

                Object.keys(this.controls).forEach(function (k) {
                    return cb(_this18.controls[k], k);
                });
            }
        }, {
            key: '_setUpControls',
            value: function _setUpControls() {
                var _this19 = this;

                this._forEachChild(function (control) {
                    control.setParent(_this19);
                    control._registerOnCollectionChange(_this19._onCollectionChange);
                });
            }
        }, {
            key: '_updateValue',
            value: function _updateValue() {
                this._value = this._reduceValue();
            }
        }, {
            key: '_anyControls',
            value: function _anyControls(condition) {
                var _this20 = this;

                var /** @type {?} */res = false;
                this._forEachChild(function (control, name) {
                    res = res || _this20.contains(name) && condition(control);
                });
                return res;
            }
        }, {
            key: '_reduceValue',
            value: function _reduceValue() {
                var _this21 = this;

                return this._reduceChildren({}, function (acc, control, name) {
                    if (control.enabled || _this21.disabled) {
                        acc[name] = control.value;
                    }
                    return acc;
                });
            }
        }, {
            key: '_reduceChildren',
            value: function _reduceChildren(initValue, fn) {
                var /** @type {?} */res = initValue;
                this._forEachChild(function (control, name) {
                    res = fn(res, control, name);
                });
                return res;
            }
        }, {
            key: '_allControlsDisabled',
            value: function _allControlsDisabled() {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = Object.keys(this.controls)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var controlName = _step6.value;

                        if (this.controls[controlName].enabled) {
                            return false;
                        }
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                return Object.keys(this.controls).length > 0 || this.disabled;
            }
        }, {
            key: '_checkAllValuesPresent',
            value: function _checkAllValuesPresent(value) {
                this._forEachChild(function (control, name) {
                    if (value[name] === undefined) {
                        throw new Error('Must supply a value for form control with name: \'' + name + '\'.');
                    }
                });
            }
        }]);

        return FormGroup;
    }(AbstractControl);

    var FormArray = function (_AbstractControl3) {
        _inherits(FormArray, _AbstractControl3);

        /**
         * @param {?} controls
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormArray(controls) {
            var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            _classCallCheck(this, FormArray);

            var _this22 = _possibleConstructorReturn(this, (FormArray.__proto__ || Object.getPrototypeOf(FormArray)).call(this, validator, asyncValidator));

            _this22.controls = controls;
            _this22._initObservables();
            _this22._setUpControls();
            _this22.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return _this22;
        }
        /**
         * Get the {\@link AbstractControl} at the given `index` in the array.
         * @param {?} index
         * @return {?}
         */


        _createClass(FormArray, [{
            key: 'at',
            value: function at(index) {
                return this.controls[index];
            }
        }, {
            key: 'push',
            value: function push(control) {
                this.controls.push(control);
                this._registerControl(control);
                this.updateValueAndValidity();
                this._onCollectionChange();
            }
        }, {
            key: 'insert',
            value: function insert(index, control) {
                this.controls.splice(index, 0, control);
                this._registerControl(control);
                this.updateValueAndValidity();
                this._onCollectionChange();
            }
        }, {
            key: 'removeAt',
            value: function removeAt(index) {
                if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
                this.controls.splice(index, 1);
                this.updateValueAndValidity();
                this._onCollectionChange();
            }
        }, {
            key: 'setControl',
            value: function setControl(index, control) {
                if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
                this.controls.splice(index, 1);
                if (control) {
                    this.controls.splice(index, 0, control);
                    this._registerControl(control);
                }
                this.updateValueAndValidity();
                this._onCollectionChange();
            }
        }, {
            key: 'setValue',
            value: function setValue(value) {
                var _this23 = this;

                var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref18.onlySelf,
                    emitEvent = _ref18.emitEvent;

                this._checkAllValuesPresent(value);
                value.forEach(function (newValue, index) {
                    _this23._throwIfControlMissing(index);
                    _this23.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
                });
                this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }, {
            key: 'patchValue',
            value: function patchValue(value) {
                var _this24 = this;

                var _ref19 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref19.onlySelf,
                    emitEvent = _ref19.emitEvent;

                value.forEach(function (newValue, index) {
                    if (_this24.at(index)) {
                        _this24.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
                    }
                });
                this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }, {
            key: 'reset',
            value: function reset() {
                var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                var _ref20 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    onlySelf = _ref20.onlySelf,
                    emitEvent = _ref20.emitEvent;

                this._forEachChild(function (control, index) {
                    control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
                });
                this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
                this._updatePristine({ onlySelf: onlySelf });
                this._updateTouched({ onlySelf: onlySelf });
            }
        }, {
            key: 'getRawValue',
            value: function getRawValue() {
                return this.controls.map(function (control) {
                    return control instanceof FormControl ? control.value : control.getRawValue();
                });
            }
        }, {
            key: '_throwIfControlMissing',
            value: function _throwIfControlMissing(index) {
                if (!this.controls.length) {
                    throw new Error('\n        There are no form controls registered with this array yet.  If you\'re using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ');
                }
                if (!this.at(index)) {
                    throw new Error('Cannot find form control at index ' + index);
                }
            }
        }, {
            key: '_forEachChild',
            value: function _forEachChild(cb) {
                this.controls.forEach(function (control, index) {
                    cb(control, index);
                });
            }
        }, {
            key: '_updateValue',
            value: function _updateValue() {
                var _this25 = this;

                this._value = this.controls.filter(function (control) {
                    return control.enabled || _this25.disabled;
                }).map(function (control) {
                    return control.value;
                });
            }
        }, {
            key: '_anyControls',
            value: function _anyControls(condition) {
                return this.controls.some(function (control) {
                    return control.enabled && condition(control);
                });
            }
        }, {
            key: '_setUpControls',
            value: function _setUpControls() {
                var _this26 = this;

                this._forEachChild(function (control) {
                    return _this26._registerControl(control);
                });
            }
        }, {
            key: '_checkAllValuesPresent',
            value: function _checkAllValuesPresent(value) {
                this._forEachChild(function (control, i) {
                    if (value[i] === undefined) {
                        throw new Error('Must supply a value for form control at index: ' + i + '.');
                    }
                });
            }
        }, {
            key: '_allControlsDisabled',
            value: function _allControlsDisabled() {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = this.controls[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var control = _step7.value;

                        if (control.enabled) return false;
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }

                return this.controls.length > 0 || this.disabled;
            }
        }, {
            key: '_registerControl',
            value: function _registerControl(control) {
                control.setParent(this);
                control._registerOnCollectionChange(this._onCollectionChange);
            }
        }, {
            key: 'length',
            get: function get() {
                return this.controls.length;
            }
        }]);

        return FormArray;
    }(AbstractControl);

    var /** @type {?} */formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: (0, _core.forwardRef)(function () {
            return NgForm;
        })
    };
    var /** @type {?} */resolvedPromise = Promise.resolve(null);
    /**
     * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * \@howToUse
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You can export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
     * will give you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, you'll want to use {\@link NgModel} with a
     * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
     * sub-groups within the form.
     *
     * You can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     *  \@stable
     */

    var NgForm = function (_ControlContainer2) {
        _inherits(NgForm, _ControlContainer2);

        /**
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function NgForm(validators, asyncValidators) {
            _classCallCheck(this, NgForm);

            var _this27 = _possibleConstructorReturn(this, (NgForm.__proto__ || Object.getPrototypeOf(NgForm)).call(this));

            _this27._submitted = false;
            _this27.ngSubmit = new EventEmitter();
            _this27.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
            return _this27;
        }
        /**
         * @return {?}
         */


        _createClass(NgForm, [{
            key: 'addControl',
            value: function addControl(dir) {
                var _this28 = this;

                resolvedPromise.then(function () {
                    var /** @type {?} */container = _this28._findContainer(dir.path);
                    dir._control = container.registerControl(dir.name, dir.control);
                    setUpControl(dir.control, dir);
                    dir.control.updateValueAndValidity({ emitEvent: false });
                });
            }
        }, {
            key: 'getControl',
            value: function getControl(dir) {
                return this.form.get(dir.path);
            }
        }, {
            key: 'removeControl',
            value: function removeControl(dir) {
                var _this29 = this;

                resolvedPromise.then(function () {
                    var /** @type {?} */container = _this29._findContainer(dir.path);
                    if (container) {
                        container.removeControl(dir.name);
                    }
                });
            }
        }, {
            key: 'addFormGroup',
            value: function addFormGroup(dir) {
                var _this30 = this;

                resolvedPromise.then(function () {
                    var /** @type {?} */container = _this30._findContainer(dir.path);
                    var /** @type {?} */group = new FormGroup({});
                    setUpFormContainer(group, dir);
                    container.registerControl(dir.name, group);
                    group.updateValueAndValidity({ emitEvent: false });
                });
            }
        }, {
            key: 'removeFormGroup',
            value: function removeFormGroup(dir) {
                var _this31 = this;

                resolvedPromise.then(function () {
                    var /** @type {?} */container = _this31._findContainer(dir.path);
                    if (container) {
                        container.removeControl(dir.name);
                    }
                });
            }
        }, {
            key: 'getFormGroup',
            value: function getFormGroup(dir) {
                return this.form.get(dir.path);
            }
        }, {
            key: 'updateModel',
            value: function updateModel(dir, value) {
                var _this32 = this;

                resolvedPromise.then(function () {
                    var /** @type {?} */ctrl = _this32.form.get(dir.path);
                    ctrl.setValue(value);
                });
            }
        }, {
            key: 'setValue',
            value: function setValue(value) {
                this.control.setValue(value);
            }
        }, {
            key: 'onSubmit',
            value: function onSubmit($event) {
                this._submitted = true;
                this.ngSubmit.emit($event);
                return false;
            }
        }, {
            key: 'onReset',
            value: function onReset() {
                this.resetForm();
            }
        }, {
            key: 'resetForm',
            value: function resetForm() {
                var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

                this.form.reset(value);
                this._submitted = false;
            }
        }, {
            key: '_findContainer',
            value: function _findContainer(path) {
                path.pop();
                return path.length ? this.form.get(path) : this.form;
            }
        }, {
            key: 'submitted',
            get: function get() {
                return this._submitted;
            }
        }, {
            key: 'formDirective',
            get: function get() {
                return this;
            }
        }, {
            key: 'control',
            get: function get() {
                return this.form;
            }
        }, {
            key: 'path',
            get: function get() {
                return [];
            }
        }, {
            key: 'controls',
            get: function get() {
                return this.form.controls;
            }
        }]);

        return NgForm;
    }(ControlContainer);

    NgForm.decorators = [{ type: _core.Directive, args: [{
            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
            providers: [formDirectiveProvider],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
        }] }];
    /** @nocollapse */
    NgForm.ctorParameters = function () {
        return [{ type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }];
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var /** @type {?} */Examples = {
        formControlName: '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        formGroupName: '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        formArrayName: '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; let i=index">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
        ngModelGroup: '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        ngModelWithFormGroup: '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
    };

    var TemplateDrivenErrors = function () {
        function TemplateDrivenErrors() {
            _classCallCheck(this, TemplateDrivenErrors);
        }

        _createClass(TemplateDrivenErrors, null, [{
            key: 'modelParentException',
            value: function modelParentException() {
                throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      ' + Examples.formControlName + '\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      ' + Examples.ngModelWithFormGroup);
            }
        }, {
            key: 'formGroupNameException',
            value: function formGroupNameException() {
                throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ' + Examples.formGroupName + '\n\n      Option 2:  Update ngModel\'s parent be ngModelGroup (template-driven strategy):\n\n      ' + Examples.ngModelGroup);
            }
        }, {
            key: 'missingNameException',
            value: function missingNameException() {
                throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">');
            }
        }, {
            key: 'modelGroupParentException',
            value: function modelGroupParentException() {
                throw new Error('\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ' + Examples.formGroupName + '\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ' + Examples.ngModelGroup);
            }
        }]);

        return TemplateDrivenErrors;
    }();

    var /** @type {?} */modelGroupProvider = {
        provide: ControlContainer,
        useExisting: (0, _core.forwardRef)(function () {
            return NgModelGroup;
        })
    };
    /**
     * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
     *
     * \@howToUse
     *
     * This directive can only be used as a child of {\@link NgForm} (or in other words,
     * within `<form>` tags).
     *
     * Use this directive if you'd like to create a sub-group within a form. This can
     * come in handy if you want to validate a sub-group of your form separately from
     * the rest of your form, or if some values in your domain model make more sense to
     * consume together in a nested object.
     *
     * Pass in the name you'd like this sub-group to have and it will become the key
     * for the sub-group in the form's full value. You can also export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     * \@stable
     */

    var NgModelGroup = function (_AbstractFormGroupDir) {
        _inherits(NgModelGroup, _AbstractFormGroupDir);

        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function NgModelGroup(parent, validators, asyncValidators) {
            _classCallCheck(this, NgModelGroup);

            var _this33 = _possibleConstructorReturn(this, (NgModelGroup.__proto__ || Object.getPrototypeOf(NgModelGroup)).call(this));

            _this33._parent = parent;
            _this33._validators = validators;
            _this33._asyncValidators = asyncValidators;
            return _this33;
        }
        /**
         * \@internal
         * @return {?}
         */


        _createClass(NgModelGroup, [{
            key: '_checkParentType',
            value: function _checkParentType() {
                if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                    TemplateDrivenErrors.modelGroupParentException();
                }
            }
        }]);

        return NgModelGroup;
    }(AbstractFormGroupDirective);

    NgModelGroup.decorators = [{ type: _core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }] }];
    /** @nocollapse */
    NgModelGroup.ctorParameters = function () {
        return [{ type: ControlContainer, decorators: [{ type: _core.Host }, { type: _core.SkipSelf }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }];
    };
    NgModelGroup.propDecorators = {
        'name': [{ type: _core.Input, args: ['ngModelGroup'] }]
    };

    var /** @type {?} */formControlBinding = {
        provide: NgControl,
        useExisting: (0, _core.forwardRef)(function () {
            return NgModel;
        })
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     */
    var /** @type {?} */resolvedPromise$1 = Promise.resolve(null);
    /**
     * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
     * to a form control element.
     *
     * The {\@link FormControl} instance will track the value, user interaction, and
     * validation status of the control and keep the view synced with the model. If used
     * within a parent form, the directive will also register itself with the form as a child
     * control.
     *
     * \@howToUse
     *
     * This directive can be used by itself or as part of a larger form. All you need is the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
     * the domain model in your class as well.
     *
     * If you wish to inspect the properties of the associated {\@link FormControl} (like
     * validity state), you can also export the directive into a local template variable using
     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
     * will fall through to the control anyway, so you can access them directly. You can see a
     * full list of properties directly available in {\@link AbstractControlDirective}.
     *
     * The following is an example of a simple standalone control using `ngModel`:
     *
     * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * It's worth noting that in the context of a parent form, you often can skip one-way or
     * two-way binding because the parent form will sync the value for you. You can access
     * its properties by exporting it into a local template variable using `ngForm` (ex:
     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * Take a look at an example of using `ngModel` within a form:
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * To see `ngModel` examples with different form control types, see:
     *
     * * Radio buttons: {\@link RadioControlValueAccessor}
     * * Selects: {\@link SelectControlValueAccessor}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: `FormsModule`
     *
     *  \@stable
     */

    var NgModel = function (_NgControl) {
        _inherits(NgModel, _NgControl);

        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function NgModel(parent, validators, asyncValidators, valueAccessors) {
            _classCallCheck(this, NgModel);

            var _this34 = _possibleConstructorReturn(this, (NgModel.__proto__ || Object.getPrototypeOf(NgModel)).call(this));

            /** @internal */
            _this34._control = new FormControl();
            /** @internal */
            _this34._registered = false;
            _this34._composing = false;
            _this34.update = new EventEmitter();
            _this34._parent = parent;
            _this34._rawValidators = validators || [];
            _this34._rawAsyncValidators = asyncValidators || [];
            _this34.valueAccessor = selectValueAccessor(_this34, valueAccessors);
            return _this34;
        }
        /**
         * @return {?}
         */


        _createClass(NgModel, [{
            key: 'compositionStart',
            value: function compositionStart() {
                this._composing = true;
            }
        }, {
            key: 'compositionEnd',
            value: function compositionEnd() {
                this._composing = false;
                this.update.emit(this.viewModel);
            }
        }, {
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                this._checkForErrors();
                if (!this._registered) this._setUpControl();
                if ('isDisabled' in changes) {
                    this._updateDisabled(changes);
                }
                if (isPropertyUpdated(changes, this.viewModel)) {
                    this._updateValue(this.model);
                    this.viewModel = this.model;
                }
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this.formDirective && this.formDirective.removeControl(this);
            }
        }, {
            key: 'viewToModelUpdate',
            value: function viewToModelUpdate(newValue) {
                this.viewModel = newValue;
                !this._composing && this.update.emit(newValue);
            }
        }, {
            key: '_setUpControl',
            value: function _setUpControl() {
                this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
                this._registered = true;
            }
        }, {
            key: '_isStandalone',
            value: function _isStandalone() {
                return !this._parent || this.options && this.options.standalone;
            }
        }, {
            key: '_setUpStandalone',
            value: function _setUpStandalone() {
                setUpControl(this._control, this);
                this._control.updateValueAndValidity({ emitEvent: false });
            }
        }, {
            key: '_checkForErrors',
            value: function _checkForErrors() {
                if (!this._isStandalone()) {
                    this._checkParentType();
                }
                this._checkName();
            }
        }, {
            key: '_checkParentType',
            value: function _checkParentType() {
                if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
                    TemplateDrivenErrors.formGroupNameException();
                } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                    TemplateDrivenErrors.modelParentException();
                }
            }
        }, {
            key: '_checkName',
            value: function _checkName() {
                if (this.options && this.options.name) this.name = this.options.name;
                if (!this._isStandalone() && !this.name) {
                    TemplateDrivenErrors.missingNameException();
                }
            }
        }, {
            key: '_updateValue',
            value: function _updateValue(value) {
                var _this35 = this;

                resolvedPromise$1.then(function () {
                    _this35.control.setValue(value, { emitViewToModelChange: false });
                });
            }
        }, {
            key: '_updateDisabled',
            value: function _updateDisabled(changes) {
                var _this36 = this;

                var /** @type {?} */disabledValue = changes['isDisabled'].currentValue;
                var /** @type {?} */isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
                resolvedPromise$1.then(function () {
                    if (isDisabled && !_this36.control.disabled) {
                        _this36.control.disable();
                    } else if (!isDisabled && _this36.control.disabled) {
                        _this36.control.enable();
                    }
                });
            }
        }, {
            key: 'control',
            get: function get() {
                return this._control;
            }
        }, {
            key: 'path',
            get: function get() {
                return this._parent ? controlPath(this.name, this._parent) : [this.name];
            }
        }, {
            key: 'formDirective',
            get: function get() {
                return this._parent ? this._parent.formDirective : null;
            }
        }, {
            key: 'validator',
            get: function get() {
                return composeValidators(this._rawValidators);
            }
        }, {
            key: 'asyncValidator',
            get: function get() {
                return composeAsyncValidators(this._rawAsyncValidators);
            }
        }]);

        return NgModel;
    }(NgControl);

    NgModel.decorators = [{ type: _core.Directive, args: [{
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
        }] }];
    /** @nocollapse */
    NgModel.ctorParameters = function () {
        return [{ type: ControlContainer, decorators: [{ type: _core.Optional }, { type: _core.Host }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALUE_ACCESSOR] }] }];
    };
    NgModel.propDecorators = {
        'name': [{ type: _core.Input }],
        'isDisabled': [{ type: _core.Input, args: ['disabled'] }],
        'model': [{ type: _core.Input, args: ['ngModel'] }],
        'options': [{ type: _core.Input, args: ['ngModelOptions'] }],
        'update': [{ type: _core.Output, args: ['ngModelChange'] }],
        'compositionStart': [{ type: _core.HostListener, args: ['compositionstart'] }],
        'compositionEnd': [{ type: _core.HostListener, args: ['compositionend'] }]
    };

    var ReactiveErrors = function () {
        function ReactiveErrors() {
            _classCallCheck(this, ReactiveErrors);
        }

        _createClass(ReactiveErrors, null, [{
            key: 'controlParentException',
            value: function controlParentException() {
                throw new Error('formControlName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ' + Examples.formControlName);
            }
        }, {
            key: 'ngModelGroupException',
            value: function ngModelGroupException() {
                throw new Error('formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' + Examples.formGroupName + '\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ' + Examples.ngModelGroup);
            }
        }, {
            key: 'missingFormException',
            value: function missingFormException() {
                throw new Error('formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ' + Examples.formControlName);
            }
        }, {
            key: 'groupParentException',
            value: function groupParentException() {
                throw new Error('formGroupName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ' + Examples.formGroupName);
            }
        }, {
            key: 'arrayParentException',
            value: function arrayParentException() {
                throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ' + Examples.formArrayName);
            }
        }, {
            key: 'disabledAttrWarning',
            value: function disabledAttrWarning() {
                console.warn('\n      It looks like you\'re using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid \'changed after checked\' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: \'Nancy\', disabled: true}, Validators.required),\n        last: new FormControl(\'Drew\', Validators.required)\n      });\n    ');
            }
        }]);

        return ReactiveErrors;
    }();

    var /** @type {?} */formControlBinding$1 = {
        provide: NgControl,
        useExisting: (0, _core.forwardRef)(function () {
            return FormControlDirective;
        })
    };
    /**
     * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
     *
     * In other words, this directive ensures that any values written to the {\@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {\@link FormControl} instance (view -> model).
     *
     * \@howToUse
     *
     * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
     * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
     * {\@link FormControlDirective}.
     *
     * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
     * it does not require that your {\@link FormControl} instance be part of any parent
     * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
     * exists above it.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormControl} instance. See a full list of available properties in
     * {\@link AbstractControl}.
     *
     * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
     * or you can set it programmatically later using {\@link AbstractControl.setValue} or
     * {\@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     *  \@stable
     */

    var FormControlDirective = function (_NgControl2) {
        _inherits(FormControlDirective, _NgControl2);

        /**
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function FormControlDirective(validators, asyncValidators, valueAccessors) {
            _classCallCheck(this, FormControlDirective);

            var _this37 = _possibleConstructorReturn(this, (FormControlDirective.__proto__ || Object.getPrototypeOf(FormControlDirective)).call(this));

            _this37.update = new EventEmitter();
            _this37._rawValidators = validators || [];
            _this37._rawAsyncValidators = asyncValidators || [];
            _this37.valueAccessor = selectValueAccessor(_this37, valueAccessors);
            return _this37;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */


        _createClass(FormControlDirective, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if (this._isControlChanged(changes)) {
                    setUpControl(this.form, this);
                    if (this.control.disabled && this.valueAccessor.setDisabledState) {
                        this.valueAccessor.setDisabledState(true);
                    }
                    this.form.updateValueAndValidity({ emitEvent: false });
                }
                if (isPropertyUpdated(changes, this.viewModel)) {
                    this.form.setValue(this.model);
                    this.viewModel = this.model;
                }
            }
        }, {
            key: 'viewToModelUpdate',
            value: function viewToModelUpdate(newValue) {
                this.viewModel = newValue;
                this.update.emit(newValue);
            }
        }, {
            key: '_isControlChanged',
            value: function _isControlChanged(changes) {
                return changes.hasOwnProperty('form');
            }
        }, {
            key: 'isDisabled',
            set: function set(isDisabled) {
                ReactiveErrors.disabledAttrWarning();
            }
        }, {
            key: 'path',
            get: function get() {
                return [];
            }
        }, {
            key: 'validator',
            get: function get() {
                return composeValidators(this._rawValidators);
            }
        }, {
            key: 'asyncValidator',
            get: function get() {
                return composeAsyncValidators(this._rawAsyncValidators);
            }
        }, {
            key: 'control',
            get: function get() {
                return this.form;
            }
        }]);

        return FormControlDirective;
    }(NgControl);

    FormControlDirective.decorators = [{ type: _core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' }] }];
    /** @nocollapse */
    FormControlDirective.ctorParameters = function () {
        return [{ type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALUE_ACCESSOR] }] }];
    };
    FormControlDirective.propDecorators = {
        'form': [{ type: _core.Input, args: ['formControl'] }],
        'model': [{ type: _core.Input, args: ['ngModel'] }],
        'update': [{ type: _core.Output, args: ['ngModelChange'] }],
        'isDisabled': [{ type: _core.Input, args: ['disabled'] }]
    };

    var /** @type {?} */formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: (0, _core.forwardRef)(function () {
            return FormGroupDirective;
        })
    };
    /**
     * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
     *
     * \@howToUse
     *
     * This directive accepts an existing {\@link FormGroup} instance. It will then use this
     * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
     * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
     * and {\@link FormArrayName} directives.
     *
     * **Set value**: You can set the form's initial value when instantiating the
     * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
     * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
     * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
     * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
     * re-calculated.
     *
     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: {\@link ReactiveFormsModule}
     *
     *  \@stable
     */

    var FormGroupDirective = function (_ControlContainer3) {
        _inherits(FormGroupDirective, _ControlContainer3);

        /**
         * @param {?} _validators
         * @param {?} _asyncValidators
         */
        function FormGroupDirective(_validators, _asyncValidators) {
            _classCallCheck(this, FormGroupDirective);

            var _this38 = _possibleConstructorReturn(this, (FormGroupDirective.__proto__ || Object.getPrototypeOf(FormGroupDirective)).call(this));

            _this38._validators = _validators;
            _this38._asyncValidators = _asyncValidators;
            _this38._submitted = false;
            _this38.directives = [];
            _this38.form = null;
            _this38.ngSubmit = new EventEmitter();
            return _this38;
        }
        /**
         * @param {?} changes
         * @return {?}
         */


        _createClass(FormGroupDirective, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                this._checkFormPresent();
                if (changes.hasOwnProperty('form')) {
                    this._updateValidators();
                    this._updateDomValue();
                    this._updateRegistrations();
                }
            }
        }, {
            key: 'addControl',
            value: function addControl(dir) {
                var /** @type {?} */ctrl = this.form.get(dir.path);
                setUpControl(ctrl, dir);
                ctrl.updateValueAndValidity({ emitEvent: false });
                this.directives.push(dir);
                return ctrl;
            }
        }, {
            key: 'getControl',
            value: function getControl(dir) {
                return this.form.get(dir.path);
            }
        }, {
            key: 'removeControl',
            value: function removeControl(dir) {
                ListWrapper.remove(this.directives, dir);
            }
        }, {
            key: 'addFormGroup',
            value: function addFormGroup(dir) {
                var /** @type {?} */ctrl = this.form.get(dir.path);
                setUpFormContainer(ctrl, dir);
                ctrl.updateValueAndValidity({ emitEvent: false });
            }
        }, {
            key: 'removeFormGroup',
            value: function removeFormGroup(dir) {}
        }, {
            key: 'getFormGroup',
            value: function getFormGroup(dir) {
                return this.form.get(dir.path);
            }
        }, {
            key: 'addFormArray',
            value: function addFormArray(dir) {
                var /** @type {?} */ctrl = this.form.get(dir.path);
                setUpFormContainer(ctrl, dir);
                ctrl.updateValueAndValidity({ emitEvent: false });
            }
        }, {
            key: 'removeFormArray',
            value: function removeFormArray(dir) {}
        }, {
            key: 'getFormArray',
            value: function getFormArray(dir) {
                return this.form.get(dir.path);
            }
        }, {
            key: 'updateModel',
            value: function updateModel(dir, value) {
                var /** @type {?} */ctrl = this.form.get(dir.path);
                ctrl.setValue(value);
            }
        }, {
            key: 'onSubmit',
            value: function onSubmit($event) {
                this._submitted = true;
                this.ngSubmit.emit($event);
                return false;
            }
        }, {
            key: 'onReset',
            value: function onReset() {
                this.resetForm();
            }
        }, {
            key: 'resetForm',
            value: function resetForm() {
                var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

                this.form.reset(value);
                this._submitted = false;
            }
        }, {
            key: '_updateDomValue',
            value: function _updateDomValue() {
                var _this39 = this;

                this.directives.forEach(function (dir) {
                    var /** @type {?} */newCtrl = _this39.form.get(dir.path);
                    if (dir._control !== newCtrl) {
                        cleanUpControl(dir._control, dir);
                        if (newCtrl) setUpControl(newCtrl, dir);
                        dir._control = newCtrl;
                    }
                });
                this.form._updateTreeValidity({ emitEvent: false });
            }
        }, {
            key: '_updateRegistrations',
            value: function _updateRegistrations() {
                var _this40 = this;

                this.form._registerOnCollectionChange(function () {
                    return _this40._updateDomValue();
                });
                if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
                this._oldForm = this.form;
            }
        }, {
            key: '_updateValidators',
            value: function _updateValidators() {
                var /** @type {?} */sync = composeValidators(this._validators);
                this.form.validator = Validators.compose([this.form.validator, sync]);
                var /** @type {?} */async = composeAsyncValidators(this._asyncValidators);
                this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
            }
        }, {
            key: '_checkFormPresent',
            value: function _checkFormPresent() {
                if (!this.form) {
                    ReactiveErrors.missingFormException();
                }
            }
        }, {
            key: 'submitted',
            get: function get() {
                return this._submitted;
            }
        }, {
            key: 'formDirective',
            get: function get() {
                return this;
            }
        }, {
            key: 'control',
            get: function get() {
                return this.form;
            }
        }, {
            key: 'path',
            get: function get() {
                return [];
            }
        }]);

        return FormGroupDirective;
    }(ControlContainer);

    FormGroupDirective.decorators = [{ type: _core.Directive, args: [{
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            exportAs: 'ngForm'
        }] }];
    /** @nocollapse */
    FormGroupDirective.ctorParameters = function () {
        return [{ type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }];
    };
    FormGroupDirective.propDecorators = {
        'form': [{ type: _core.Input, args: ['formGroup'] }],
        'ngSubmit': [{ type: _core.Output }]
    };

    var /** @type {?} */formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: (0, _core.forwardRef)(function () {
            return FormGroupName;
        })
    };
    /**
     * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
     *
     * \@howToUse
     *
     * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {\@link FormGroup} you want to link, and
     * will look for a {\@link FormGroup} registered with that name in the parent
     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
     *
     * Nested form groups can come in handy when you want to validate a sub-group of a
     * form separately from the rest or when you'd like to group the values of certain
     * controls into their own nested object.
     *
     * **Access the group**: You can access the associated {\@link FormGroup} using the
     * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
     *
     * You can also access individual controls within the group using dot syntax.
     * Ex: `this.form.get('name.first')`
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {\@link FormGroup}, or you can set it programmatically later using
     * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the group, you can
     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * \@stable
     */

    var FormGroupName = function (_AbstractFormGroupDir2) {
        _inherits(FormGroupName, _AbstractFormGroupDir2);

        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function FormGroupName(parent, validators, asyncValidators) {
            _classCallCheck(this, FormGroupName);

            var _this41 = _possibleConstructorReturn(this, (FormGroupName.__proto__ || Object.getPrototypeOf(FormGroupName)).call(this));

            _this41._parent = parent;
            _this41._validators = validators;
            _this41._asyncValidators = asyncValidators;
            return _this41;
        }
        /**
         * \@internal
         * @return {?}
         */


        _createClass(FormGroupName, [{
            key: '_checkParentType',
            value: function _checkParentType() {
                if (_hasInvalidParent(this._parent)) {
                    ReactiveErrors.groupParentException();
                }
            }
        }]);

        return FormGroupName;
    }(AbstractFormGroupDirective);

    FormGroupName.decorators = [{ type: _core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] }] }];
    /** @nocollapse */
    FormGroupName.ctorParameters = function () {
        return [{ type: ControlContainer, decorators: [{ type: _core.Optional }, { type: _core.Host }, { type: _core.SkipSelf }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }];
    };
    FormGroupName.propDecorators = {
        'name': [{ type: _core.Input, args: ['formGroupName'] }]
    };
    var /** @type {?} */formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: (0, _core.forwardRef)(function () {
            return FormArrayName;
        })
    };
    /**
     * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
     *
     * \@howToUse
     *
     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {\@link FormArray} you want to link, and
     * will look for a {\@link FormArray} registered with that name in the parent
     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
     *
     * Nested form arrays can come in handy when you have a group of form controls but
     * you're not sure how many there will be. Form arrays allow you to create new
     * form controls dynamically.
     *
     * **Access the array**: You can access the associated {\@link FormArray} using the
     * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
     * Ex: `this.form.get('cities')`.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {\@link FormArray}, or you can set the value programmatically later using the
     * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
     * methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the array, you can
     * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
     * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
     * status is re-calculated.
     *
     * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
     * calling its {\@link FormArray.push} method.
     *  Ex: `this.form.get('cities').push(new FormControl());`
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * \@stable
     */

    var FormArrayName = function (_ControlContainer4) {
        _inherits(FormArrayName, _ControlContainer4);

        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function FormArrayName(parent, validators, asyncValidators) {
            _classCallCheck(this, FormArrayName);

            var _this42 = _possibleConstructorReturn(this, (FormArrayName.__proto__ || Object.getPrototypeOf(FormArrayName)).call(this));

            _this42._parent = parent;
            _this42._validators = validators;
            _this42._asyncValidators = asyncValidators;
            return _this42;
        }
        /**
         * @return {?}
         */


        _createClass(FormArrayName, [{
            key: 'ngOnInit',
            value: function ngOnInit() {
                this._checkParentType();
                this.formDirective.addFormArray(this);
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                if (this.formDirective) {
                    this.formDirective.removeFormArray(this);
                }
            }
        }, {
            key: '_checkParentType',
            value: function _checkParentType() {
                if (_hasInvalidParent(this._parent)) {
                    ReactiveErrors.arrayParentException();
                }
            }
        }, {
            key: 'control',
            get: function get() {
                return this.formDirective.getFormArray(this);
            }
        }, {
            key: 'formDirective',
            get: function get() {
                return this._parent ? this._parent.formDirective : null;
            }
        }, {
            key: 'path',
            get: function get() {
                return controlPath(this.name, this._parent);
            }
        }, {
            key: 'validator',
            get: function get() {
                return composeValidators(this._validators);
            }
        }, {
            key: 'asyncValidator',
            get: function get() {
                return composeAsyncValidators(this._asyncValidators);
            }
        }]);

        return FormArrayName;
    }(ControlContainer);

    FormArrayName.decorators = [{ type: _core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] }] }];
    /** @nocollapse */
    FormArrayName.ctorParameters = function () {
        return [{ type: ControlContainer, decorators: [{ type: _core.Optional }, { type: _core.Host }, { type: _core.SkipSelf }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }];
    };
    FormArrayName.propDecorators = {
        'name': [{ type: _core.Input, args: ['formArrayName'] }]
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
    }

    var /** @type {?} */controlNameBinding = {
        provide: NgControl,
        useExisting: (0, _core.forwardRef)(function () {
            return FormControlName;
        })
    };
    /**
     * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
     * element by name.
     *
     * In other words, this directive ensures that any values written to the {\@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {\@link FormControl} instance (view -> model).
     *
     * \@howToUse
     *
     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the {\@link FormControl} instance you want to
     * link, and will look for a {\@link FormControl} registered with that name in the
     * closest {\@link FormGroup} or {\@link FormArray} above it.
     *
     * **Access the control**: You can access the {\@link FormControl} associated with
     * this directive by using the {\@link AbstractControl.get} method.
     * Ex: `this.form.get('first');`
     *
     * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
     * See a full list of available properties in {\@link AbstractControl}.
     *
     *  **Set value**: You can set an initial value for the control when instantiating the
     *  {\@link FormControl}, or you can set it programmatically later using
     *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: {\@link RadioControlValueAccessor}
     * * Selects: {\@link SelectControlValueAccessor}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: {\@link ReactiveFormsModule}
     *
     *  \@stable
     */

    var FormControlName = function (_NgControl3) {
        _inherits(FormControlName, _NgControl3);

        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
            _classCallCheck(this, FormControlName);

            var _this43 = _possibleConstructorReturn(this, (FormControlName.__proto__ || Object.getPrototypeOf(FormControlName)).call(this));

            _this43._added = false;
            _this43.update = new EventEmitter();
            _this43._parent = parent;
            _this43._rawValidators = validators || [];
            _this43._rawAsyncValidators = asyncValidators || [];
            _this43.valueAccessor = selectValueAccessor(_this43, valueAccessors);
            return _this43;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */


        _createClass(FormControlName, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if (!this._added) this._setUpControl();
                if (isPropertyUpdated(changes, this.viewModel)) {
                    this.viewModel = this.model;
                    this.formDirective.updateModel(this, this.model);
                }
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                if (this.formDirective) {
                    this.formDirective.removeControl(this);
                }
            }
        }, {
            key: 'viewToModelUpdate',
            value: function viewToModelUpdate(newValue) {
                this.viewModel = newValue;
                this.update.emit(newValue);
            }
        }, {
            key: '_checkParentType',
            value: function _checkParentType() {
                if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
                    ReactiveErrors.ngModelGroupException();
                } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
                    ReactiveErrors.controlParentException();
                }
            }
        }, {
            key: '_setUpControl',
            value: function _setUpControl() {
                this._checkParentType();
                this._control = this.formDirective.addControl(this);
                if (this.control.disabled && this.valueAccessor.setDisabledState) {
                    this.valueAccessor.setDisabledState(true);
                }
                this._added = true;
            }
        }, {
            key: 'isDisabled',
            set: function set(isDisabled) {
                ReactiveErrors.disabledAttrWarning();
            }
        }, {
            key: 'path',
            get: function get() {
                return controlPath(this.name, this._parent);
            }
        }, {
            key: 'formDirective',
            get: function get() {
                return this._parent ? this._parent.formDirective : null;
            }
        }, {
            key: 'validator',
            get: function get() {
                return composeValidators(this._rawValidators);
            }
        }, {
            key: 'asyncValidator',
            get: function get() {
                return composeAsyncValidators(this._rawAsyncValidators);
            }
        }, {
            key: 'control',
            get: function get() {
                return this._control;
            }
        }]);

        return FormControlName;
    }(NgControl);

    FormControlName.decorators = [{ type: _core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] }] }];
    /** @nocollapse */
    FormControlName.ctorParameters = function () {
        return [{ type: ControlContainer, decorators: [{ type: _core.Optional }, { type: _core.Host }, { type: _core.SkipSelf }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [NG_VALUE_ACCESSOR] }] }];
    };
    FormControlName.propDecorators = {
        'name': [{ type: _core.Input, args: ['formControlName'] }],
        'model': [{ type: _core.Input, args: ['ngModel'] }],
        'update': [{ type: _core.Output, args: ['ngModelChange'] }],
        'isDisabled': [{ type: _core.Input, args: ['disabled'] }]
    };

    var /** @type {?} */REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: (0, _core.forwardRef)(function () {
            return RequiredValidator;
        }),
        multi: true
    };
    var /** @type {?} */CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: (0, _core.forwardRef)(function () {
            return CheckboxRequiredValidator;
        }),
        multi: true
    };
    /**
     * A Directive that adds the `required` validator to any controls marked with the
     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * \@stable
     */

    var RequiredValidator = function () {
        function RequiredValidator() {
            _classCallCheck(this, RequiredValidator);
        }

        _createClass(RequiredValidator, [{
            key: 'validate',
            value: function validate(c) {
                return this.required ? Validators.required(c) : null;
            }
        }, {
            key: 'registerOnValidatorChange',
            value: function registerOnValidatorChange(fn) {
                this._onChange = fn;
            }
        }, {
            key: 'required',
            get: function get() {
                return this._required;
            },
            set: function set(value) {
                this._required = value != null && value !== false && '' + value !== 'false';
                if (this._onChange) this._onChange();
            }
        }]);

        return RequiredValidator;
    }();

    RequiredValidator.decorators = [{ type: _core.Directive, args: [{
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        }] }];
    /** @nocollapse */
    RequiredValidator.ctorParameters = function () {
        return [];
    };
    RequiredValidator.propDecorators = {
        'required': [{ type: _core.Input }]
    };
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * \@experimental
     */

    var CheckboxRequiredValidator = function (_RequiredValidator) {
        _inherits(CheckboxRequiredValidator, _RequiredValidator);

        function CheckboxRequiredValidator() {
            _classCallCheck(this, CheckboxRequiredValidator);

            return _possibleConstructorReturn(this, (CheckboxRequiredValidator.__proto__ || Object.getPrototypeOf(CheckboxRequiredValidator)).apply(this, arguments));
        }

        _createClass(CheckboxRequiredValidator, [{
            key: 'validate',
            value: function validate(c) {
                return this.required ? Validators.requiredTrue(c) : null;
            }
        }]);

        return CheckboxRequiredValidator;
    }(RequiredValidator);

    CheckboxRequiredValidator.decorators = [{ type: _core.Directive, args: [{
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        }] }];
    /** @nocollapse */
    CheckboxRequiredValidator.ctorParameters = function () {
        return [];
    };
    /**
     * Provider which adds {@link EmailValidator} to {@link NG_VALIDATORS}.
     */
    var /** @type {?} */EMAIL_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: (0, _core.forwardRef)(function () {
            return EmailValidator;
        }),
        multi: true
    };
    /**
     * A Directive that adds the `email` validator to controls marked with the
     * `email` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * \@experimental
     */

    var EmailValidator = function () {
        function EmailValidator() {
            _classCallCheck(this, EmailValidator);
        }

        _createClass(EmailValidator, [{
            key: 'validate',
            value: function validate(c) {
                return this._enabled ? Validators.email(c) : null;
            }
        }, {
            key: 'registerOnValidatorChange',
            value: function registerOnValidatorChange(fn) {
                this._onChange = fn;
            }
        }, {
            key: 'email',
            set: function set(value) {
                this._enabled = value === '' || value === true || value === 'true';
                if (this._onChange) this._onChange();
            }
        }]);

        return EmailValidator;
    }();

    EmailValidator.decorators = [{ type: _core.Directive, args: [{
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
        }] }];
    /** @nocollapse */
    EmailValidator.ctorParameters = function () {
        return [];
    };
    EmailValidator.propDecorators = {
        'email': [{ type: _core.Input }]
    };
    /**
     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='min'}
     */
    var /** @type {?} */MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: (0, _core.forwardRef)(function () {
            return MinLengthValidator;
        }),
        multi: true
    };
    /**
     * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
     *
     * \@stable
     */

    var MinLengthValidator = function () {
        function MinLengthValidator() {
            _classCallCheck(this, MinLengthValidator);
        }

        _createClass(MinLengthValidator, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if ('minlength' in changes) {
                    this._createValidator();
                    if (this._onChange) this._onChange();
                }
            }
        }, {
            key: 'validate',
            value: function validate(c) {
                return this.minlength == null ? null : this._validator(c);
            }
        }, {
            key: 'registerOnValidatorChange',
            value: function registerOnValidatorChange(fn) {
                this._onChange = fn;
            }
        }, {
            key: '_createValidator',
            value: function _createValidator() {
                this._validator = Validators.minLength(parseInt(this.minlength, 10));
            }
        }]);

        return MinLengthValidator;
    }();

    MinLengthValidator.decorators = [{ type: _core.Directive, args: [{
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: { '[attr.minlength]': 'minlength ? minlength : null' }
        }] }];
    /** @nocollapse */
    MinLengthValidator.ctorParameters = function () {
        return [];
    };
    MinLengthValidator.propDecorators = {
        'minlength': [{ type: _core.Input }]
    };
    /**
     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='max'}
     */
    var /** @type {?} */MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: (0, _core.forwardRef)(function () {
            return MaxLengthValidator;
        }),
        multi: true
    };
    /**
     * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
     * `formControl`,
     * or control with `ngModel` that also has a `maxlength` attribute.
     *
     * \@stable
     */

    var MaxLengthValidator = function () {
        function MaxLengthValidator() {
            _classCallCheck(this, MaxLengthValidator);
        }

        _createClass(MaxLengthValidator, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if ('maxlength' in changes) {
                    this._createValidator();
                    if (this._onChange) this._onChange();
                }
            }
        }, {
            key: 'validate',
            value: function validate(c) {
                return this.maxlength != null ? this._validator(c) : null;
            }
        }, {
            key: 'registerOnValidatorChange',
            value: function registerOnValidatorChange(fn) {
                this._onChange = fn;
            }
        }, {
            key: '_createValidator',
            value: function _createValidator() {
                this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
            }
        }]);

        return MaxLengthValidator;
    }();

    MaxLengthValidator.decorators = [{ type: _core.Directive, args: [{
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
        }] }];
    /** @nocollapse */
    MaxLengthValidator.ctorParameters = function () {
        return [];
    };
    MaxLengthValidator.propDecorators = {
        'maxlength': [{ type: _core.Input }]
    };
    var /** @type {?} */PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: (0, _core.forwardRef)(function () {
            return PatternValidator;
        }),
        multi: true
    };
    /**
     * A Directive that adds the `pattern` validator to any controls marked with the
     * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
     * as the regex to validate Control value against.  Follows pattern attribute
     * semantics; i.e. regex must match entire Control value.
     *
     * ### Example
     *
     * ```
     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
     * ```
     * \@stable
     */

    var PatternValidator = function () {
        function PatternValidator() {
            _classCallCheck(this, PatternValidator);
        }

        _createClass(PatternValidator, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if ('pattern' in changes) {
                    this._createValidator();
                    if (this._onChange) this._onChange();
                }
            }
        }, {
            key: 'validate',
            value: function validate(c) {
                return this._validator(c);
            }
        }, {
            key: 'registerOnValidatorChange',
            value: function registerOnValidatorChange(fn) {
                this._onChange = fn;
            }
        }, {
            key: '_createValidator',
            value: function _createValidator() {
                this._validator = Validators.pattern(this.pattern);
            }
        }]);

        return PatternValidator;
    }();

    PatternValidator.decorators = [{ type: _core.Directive, args: [{
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: { '[attr.pattern]': 'pattern ? pattern : null' }
        }] }];
    /** @nocollapse */
    PatternValidator.ctorParameters = function () {
        return [];
    };
    PatternValidator.propDecorators = {
        'pattern': [{ type: _core.Input }]
    };

    /**
     * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
     *
     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
     * forms.
     *
     * \@howToUse
     *
     * To use, inject `FormBuilder` into your component class. You can then call its methods
     * directly.
     *
     * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
     *
     *  * **npm package**: `\@angular/forms`
     *
     *  * **NgModule**: {\@link ReactiveFormsModule}
     *
     * \@stable
     */

    var FormBuilder = function () {
        function FormBuilder() {
            _classCallCheck(this, FormBuilder);
        }

        _createClass(FormBuilder, [{
            key: 'group',
            value: function group(controlsConfig) {
                var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                var /** @type {?} */controls = this._reduceControls(controlsConfig);
                var /** @type {?} */validator = isPresent(extra) ? extra['validator'] : null;
                var /** @type {?} */asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
                return new FormGroup(controls, validator, asyncValidator);
            }
        }, {
            key: 'control',
            value: function control(formState) {
                var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                return new FormControl(formState, validator, asyncValidator);
            }
        }, {
            key: 'array',
            value: function array(controlsConfig) {
                var _this45 = this;

                var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var /** @type {?} */controls = controlsConfig.map(function (c) {
                    return _this45._createControl(c);
                });
                return new FormArray(controls, validator, asyncValidator);
            }
        }, {
            key: '_reduceControls',
            value: function _reduceControls(controlsConfig) {
                var _this46 = this;

                var /** @type {?} */controls = {};
                Object.keys(controlsConfig).forEach(function (controlName) {
                    controls[controlName] = _this46._createControl(controlsConfig[controlName]);
                });
                return controls;
            }
        }, {
            key: '_createControl',
            value: function _createControl(controlConfig) {
                if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
                    return controlConfig;
                } else if (Array.isArray(controlConfig)) {
                    var /** @type {?} */value = controlConfig[0];
                    var /** @type {?} */validator = controlConfig.length > 1 ? controlConfig[1] : null;
                    var /** @type {?} */asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                    return this.control(value, validator, asyncValidator);
                } else {
                    return this.control(controlConfig);
                }
            }
        }]);

        return FormBuilder;
    }();

    FormBuilder.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    FormBuilder.ctorParameters = function () {
        return [];
    };

    /**
     * @stable
     */
    var /** @type {?} */VERSION = new _core.Version('4.0.0-rc.1');

    /**
     * \@whatItDoes Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * \@experimental
     */

    var NgNoValidate = function NgNoValidate() {
        _classCallCheck(this, NgNoValidate);
    };

    NgNoValidate.decorators = [{ type: _core.Directive, args: [{
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: { 'novalidate': '' }
        }] }];
    /** @nocollapse */
    NgNoValidate.ctorParameters = function () {
        return [];
    };

    var /** @type {?} */SHARED_FORM_DIRECTIVES = [NgNoValidate, NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
    var /** @type {?} */TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    var /** @type {?} */REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */

    var InternalFormsSharedModule = function InternalFormsSharedModule() {
        _classCallCheck(this, InternalFormsSharedModule);
    };

    InternalFormsSharedModule.decorators = [{ type: _core.NgModule, args: [{
            declarations: SHARED_FORM_DIRECTIVES,
            exports: SHARED_FORM_DIRECTIVES
        }] }];
    /** @nocollapse */
    InternalFormsSharedModule.ctorParameters = function () {
        return [];
    };

    /**
     * The ng module for forms.
     * \@stable
     */

    var FormsModule = function FormsModule() {
        _classCallCheck(this, FormsModule);
    };

    FormsModule.decorators = [{ type: _core.NgModule, args: [{
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        }] }];
    /** @nocollapse */
    FormsModule.ctorParameters = function () {
        return [];
    };
    /**
     * The ng module for reactive forms.
     * \@stable
     */

    var ReactiveFormsModule = function ReactiveFormsModule() {
        _classCallCheck(this, ReactiveFormsModule);
    };

    ReactiveFormsModule.decorators = [{ type: _core.NgModule, args: [{
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        }] }];
    /** @nocollapse */
    ReactiveFormsModule.ctorParameters = function () {
        return [];
    };

    exports.AbstractControlDirective = AbstractControlDirective;
    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
    exports.ControlContainer = ControlContainer;
    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
    exports.DefaultValueAccessor = DefaultValueAccessor;
    exports.NgControl = NgControl;
    exports.NgControlStatus = NgControlStatus;
    exports.NgControlStatusGroup = NgControlStatusGroup;
    exports.NgForm = NgForm;
    exports.NgModel = NgModel;
    exports.NgModelGroup = NgModelGroup;
    exports.RadioControlValueAccessor = RadioControlValueAccessor;
    exports.FormControlDirective = FormControlDirective;
    exports.FormControlName = FormControlName;
    exports.FormGroupDirective = FormGroupDirective;
    exports.FormArrayName = FormArrayName;
    exports.FormGroupName = FormGroupName;
    exports.NgSelectOption = NgSelectOption;
    exports.SelectControlValueAccessor = SelectControlValueAccessor;
    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
    exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
    exports.EmailValidator = EmailValidator;
    exports.MaxLengthValidator = MaxLengthValidator;
    exports.MinLengthValidator = MinLengthValidator;
    exports.PatternValidator = PatternValidator;
    exports.RequiredValidator = RequiredValidator;
    exports.FormBuilder = FormBuilder;
    exports.AbstractControl = AbstractControl;
    exports.FormArray = FormArray;
    exports.FormControl = FormControl;
    exports.FormGroup = FormGroup;
    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
    exports.NG_VALIDATORS = NG_VALIDATORS;
    exports.Validators = Validators;
    exports.VERSION = VERSION;
    exports.FormsModule = FormsModule;
    exports.ReactiveFormsModule = ReactiveFormsModule;
    exports.ɵba = InternalFormsSharedModule;
    exports.ɵz = REACTIVE_DRIVEN_DIRECTIVES;
    exports.ɵx = SHARED_FORM_DIRECTIVES;
    exports.ɵy = TEMPLATE_DRIVEN_DIRECTIVES;
    exports.ɵa = CHECKBOX_VALUE_ACCESSOR;
    exports.ɵb = DEFAULT_VALUE_ACCESSOR;
    exports.ɵc = AbstractControlStatus;
    exports.ɵd = ngControlStatusHost;
    exports.ɵe = formDirectiveProvider;
    exports.ɵf = formControlBinding;
    exports.ɵg = modelGroupProvider;
    exports.ɵbf = NgNoValidate;
    exports.ɵbb = NUMBER_VALUE_ACCESSOR;
    exports.ɵbc = NumberValueAccessor;
    exports.ɵh = RADIO_VALUE_ACCESSOR;
    exports.ɵi = RadioControlRegistry;
    exports.ɵbd = RANGE_VALUE_ACCESSOR;
    exports.ɵbe = RangeValueAccessor;
    exports.ɵj = formControlBinding$1;
    exports.ɵk = controlNameBinding;
    exports.ɵl = formDirectiveProvider$1;
    exports.ɵn = formArrayNameProvider;
    exports.ɵm = formGroupNameProvider;
    exports.ɵo = SELECT_VALUE_ACCESSOR;
    exports.ɵq = NgSelectMultipleOption;
    exports.ɵp = SELECT_MULTIPLE_VALUE_ACCESSOR;
    exports.ɵs = CHECKBOX_REQUIRED_VALIDATOR;
    exports.ɵt = EMAIL_VALIDATOR;
    exports.ɵv = MAX_LENGTH_VALIDATOR;
    exports.ɵu = MIN_LENGTH_VALIDATOR;
    exports.ɵw = PATTERN_VALIDATOR;
    exports.ɵr = REQUIRED_VALIDATOR;
});
