import { NgModule, Injectable, NgZone, RendererFactoryV2 } from '@angular/core';
import { BrowserModule, ɵDomRendererFactoryV2 } from '@angular/platform-browser';
import { NoopAnimationPlayer, ɵAnimationGroupPlayer, sequence, AUTO_STYLE } from '@angular/animations';

/**
 * @abstract
 */
class AnimationEngine {
    /**
     * @abstract
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    registerTrigger(trigger, name) { }
    /**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    onInsert(element, domFn) { }
    /**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    onRemove(element, domFn) { }
    /**
     * @abstract
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    setProperty(element, property, value) { }
    /**
     * @abstract
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    listen(element, eventName, eventPhase, callback) { }
    /**
     * @abstract
     * @return {?}
     */
    flush() { }
    /**
     * @return {?}
     */
    get activePlayers() { throw new Error('...'); }
    /**
     * @return {?}
     */
    get queuedPlayers() { throw new Error('...'); }
}

/**
 * \@experimental Animation support is experimental.
 * @abstract
 */
class AnimationStyleNormalizer {
    /**
     * @abstract
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) { }
    /**
     * @abstract
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) { }
}
/**
 * \@experimental Animation support is experimental.
 */
class NoopAnimationStyleNormalizer {
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) { return propertyName; }
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        return (value);
    }
}

class WebAnimationsStyleNormalizer extends AnimationStyleNormalizer {
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
    }
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        let /** @type {?} */ unit = '';
        const /** @type {?} */ strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
            if (typeof value === 'number') {
                unit = 'px';
            }
            else {
                const /** @type {?} */ valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
                    errors.push(`Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
                }
            }
        }
        return strVal + unit;
    }
}
const /** @type {?} */ DIMENSIONAL_PROP_MAP = makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent'
    .split(','));
/**
 * @param {?} keys
 * @return {?}
 */
function makeBooleanMap(keys) {
    const /** @type {?} */ map = {};
    keys.forEach(key => map[key] = true);
    return map;
}
const /** @type {?} */ DASH_CASE_REGEXP = /-+([a-z0-9])/g;
/**
 * @param {?} input
 * @return {?}
 */
function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}

/**
 * @experimental
 */
class NoopAnimationDriver {
    animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
        return new NoopAnimationPlayer();
    }
}
/**
 * @experimental
 */
class AnimationDriver {
}
AnimationDriver.NOOP = new NoopAnimationDriver();

class AnimationRendererFactory {
    /**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     */
    constructor(delegate, _engine, _zone) {
        this.delegate = delegate;
        this._engine = _engine;
        this._zone = _zone;
    }
    /**
     * @param {?} hostElement
     * @param {?} type
     * @return {?}
     */
    createRenderer(hostElement, type) {
        let /** @type {?} */ delegate = this.delegate.createRenderer(hostElement, type);
        if (!hostElement || !type || !type.data || !type.data['animation'])
            return delegate;
        const /** @type {?} */ namespaceId = type.id;
        const /** @type {?} */ animationTriggers = (type.data['animation']);
        animationTriggers.forEach(trigger => this._engine.registerTrigger(trigger, namespaceify(namespaceId, trigger.name)));
        return new AnimationRenderer(delegate, this._engine, this._zone, namespaceId);
    }
}
AnimationRendererFactory.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AnimationRendererFactory.ctorParameters = () => [
    { type: RendererFactoryV2, },
    { type: AnimationEngine, },
    { type: NgZone, },
];
class AnimationRenderer {
    /**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     * @param {?} _namespaceId
     */
    constructor(delegate, _engine, _zone, _namespaceId) {
        this.delegate = delegate;
        this._engine = _engine;
        this._zone = _zone;
        this._namespaceId = _namespaceId;
        this.destroyNode = null;
        this._flushPromise = null;
        this.destroyNode = this.delegate.destroyNode ? (n) => delegate.destroyNode(n) : null;
    }
    /**
     * @return {?}
     */
    get data() { return this.delegate.data; }
    /**
     * @return {?}
     */
    destroy() { this.delegate.destroy(); }
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    createElement(name, namespace) {
        return this.delegate.createElement(name, namespace);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    createComment(value) { return this.delegate.createComment(value); }
    /**
     * @param {?} value
     * @return {?}
     */
    createText(value) { return this.delegate.createText(value); }
    /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    selectRootElement(selectorOrNode) {
        return this.delegate.selectRootElement(selectorOrNode);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    parentNode(node) { return this.delegate.parentNode(node); }
    /**
     * @param {?} node
     * @return {?}
     */
    nextSibling(node) { return this.delegate.nextSibling(node); }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    setAttribute(el, name, value, namespace) {
        this.delegate.setAttribute(el, name, value, namespace);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    removeAttribute(el, name, namespace) {
        this.delegate.removeAttribute(el, name, namespace);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    addClass(el, name) { this.delegate.addClass(el, name); }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    removeClass(el, name) { this.delegate.removeClass(el, name); }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} hasVendorPrefix
     * @param {?} hasImportant
     * @return {?}
     */
    setStyle(el, style, value, hasVendorPrefix, hasImportant) {
        this.delegate.setStyle(el, style, value, hasVendorPrefix, hasImportant);
    }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} hasVendorPrefix
     * @return {?}
     */
    removeStyle(el, style, hasVendorPrefix) {
        this.delegate.removeStyle(el, style, hasVendorPrefix);
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    setValue(node, value) { this.delegate.setValue(node, value); }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    appendChild(parent, newChild) {
        this._engine.onInsert(newChild, () => this.delegate.appendChild(parent, newChild));
        this._queueFlush();
    }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    insertBefore(parent, newChild, refChild) {
        this._engine.onInsert(newChild, () => this.delegate.insertBefore(parent, newChild, refChild));
        this._queueFlush();
    }
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    removeChild(parent, oldChild) {
        this._engine.onRemove(oldChild, () => this.delegate.removeChild(parent, oldChild));
        this._queueFlush();
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setProperty(el, name, value) {
        if (name.charAt(0) == '@') {
            this._engine.setProperty(el, namespaceify(this._namespaceId, name.substr(1)), value);
            this._queueFlush();
        }
        else {
            this.delegate.setProperty(el, name, value);
        }
    }
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(target, eventName, callback) {
        if (eventName.charAt(0) == '@') {
            const /** @type {?} */ element = resolveElementFromTarget(target);
            const [name, phase] = parseTriggerCallbackName(eventName.substr(1));
            return this._engine.listen(element, namespaceify(this._namespaceId, name), phase, (event) => {
                const /** @type {?} */ e = (event);
                if (e.triggerName) {
                    e.triggerName = deNamespaceify(this._namespaceId, e.triggerName);
                }
                this._zone.run(() => callback(event));
            });
        }
        return this.delegate.listen(target, eventName, callback);
    }
    /**
     * @return {?}
     */
    _queueFlush() {
        if (!this._flushPromise) {
            this._zone.runOutsideAngular(() => {
                this._flushPromise = Promise.resolve(null).then(() => {
                    this._flushPromise = null;
                    this._engine.flush();
                });
            });
        }
    }
}
/**
 * @param {?} target
 * @return {?}
 */
function resolveElementFromTarget(target) {
    switch (target) {
        case 'body':
            return document.body;
        case 'document':
            return document;
        case 'window':
            return window;
        default:
            return target;
    }
}
/**
 * @param {?} triggerName
 * @return {?}
 */
function parseTriggerCallbackName(triggerName) {
    const /** @type {?} */ dotIndex = triggerName.indexOf('.');
    const /** @type {?} */ trigger = triggerName.substring(0, dotIndex);
    const /** @type {?} */ phase = triggerName.substr(dotIndex + 1);
    return [trigger, phase];
}
/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function namespaceify(namespaceId, value) {
    return `${namespaceId}#${value}`;
}
/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function deNamespaceify(namespaceId, value) {
    return value.replace(namespaceId + '#', '');
}

const /** @type {?} */ ONE_SECOND = 1000;
/**
 * @param {?} exp
 * @param {?} errors
 * @return {?}
 */
function parseTimeExpression(exp, errors) {
    const /** @type {?} */ regex = /^([\.\d]+)(m?s)(?:\s+([\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
    let /** @type {?} */ duration;
    let /** @type {?} */ delay = 0;
    let /** @type {?} */ easing = null;
    if (typeof exp === 'string') {
        const /** @type {?} */ matches = exp.match(regex);
        if (matches === null) {
            errors.push(`The provided timing value "${exp}" is invalid.`);
            return { duration: 0, delay: 0, easing: null };
        }
        let /** @type {?} */ durationMatch = parseFloat(matches[1]);
        const /** @type {?} */ durationUnit = matches[2];
        if (durationUnit == 's') {
            durationMatch *= ONE_SECOND;
        }
        duration = Math.floor(durationMatch);
        const /** @type {?} */ delayMatch = matches[3];
        const /** @type {?} */ delayUnit = matches[4];
        if (delayMatch != null) {
            let /** @type {?} */ delayVal = parseFloat(delayMatch);
            if (delayUnit != null && delayUnit == 's') {
                delayVal *= ONE_SECOND;
            }
            delay = Math.floor(delayVal);
        }
        const /** @type {?} */ easingVal = matches[5];
        if (easingVal) {
            easing = easingVal;
        }
    }
    else {
        duration = (exp);
    }
    return { duration, delay, easing };
}
/**
 * @param {?} styles
 * @return {?}
 */
function normalizeStyles(styles) {
    const /** @type {?} */ normalizedStyles = {};
    styles.forEach(data => copyStyles(data, false, normalizedStyles));
    return normalizedStyles;
}
/**
 * @param {?} styles
 * @param {?} readPrototype
 * @param {?=} destination
 * @return {?}
 */
function copyStyles(styles, readPrototype, destination = {}) {
    if (readPrototype) {
        // we make use of a for-in loop so that the
        // prototypically inherited properties are
        // revealed from the backFill map
        for (let /** @type {?} */ prop in styles) {
            destination[prop] = styles[prop];
        }
    }
    else {
        Object.keys(styles).forEach(prop => destination[prop] = styles[prop]);
    }
    return destination;
}
/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function setStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(prop => element.style[prop] = styles[prop]);
    }
}
/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function eraseStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(prop => {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            element.style[prop] = '';
        });
    }
}

/**
 * @param {?} visitor
 * @param {?} node
 * @param {?} context
 * @return {?}
 */
function visitAnimationNode(visitor, node, context) {
    switch (node.type) {
        case 0 /* State */:
            return visitor.visitState(/** @type {?} */ (node), context);
        case 1 /* Transition */:
            return visitor.visitTransition(/** @type {?} */ (node), context);
        case 2 /* Sequence */:
            return visitor.visitSequence(/** @type {?} */ (node), context);
        case 3 /* Group */:
            return visitor.visitGroup(/** @type {?} */ (node), context);
        case 4 /* Animate */:
            return visitor.visitAnimate(/** @type {?} */ (node), context);
        case 5 /* KeyframeSequence */:
            return visitor.visitKeyframeSequence(/** @type {?} */ (node), context);
        case 6 /* Style */:
            return visitor.visitStyle(/** @type {?} */ (node), context);
        default:
            throw new Error(`Unable to resolve animation metadata node #${node.type}`);
    }
}

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
 */ const /** @type {?} */ ANY_STATE = '*';
/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */
function parseTransitionExpr(transitionValue, errors) {
    const /** @type {?} */ expressions = [];
    if (typeof transitionValue == 'string') {
        ((transitionValue))
            .split(/\s*,\s*/)
            .forEach(str => parseInnerTransitionStr(str, expressions, errors));
    }
    else {
        expressions.push(/** @type {?} */ (transitionValue));
    }
    return expressions;
}
/**
 * @param {?} eventStr
 * @param {?} expressions
 * @param {?} errors
 * @return {?}
 */
function parseInnerTransitionStr(eventStr, expressions, errors) {
    if (eventStr[0] == ':') {
        eventStr = parseAnimationAlias(eventStr, errors);
    }
    const /** @type {?} */ match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (match == null || match.length < 4) {
        errors.push(`The provided transition expression "${eventStr}" is not supported`);
        return expressions;
    }
    const /** @type {?} */ fromState = match[1];
    const /** @type {?} */ separator = match[2];
    const /** @type {?} */ toState = match[3];
    expressions.push(makeLambdaFromStates(fromState, toState));
    const /** @type {?} */ isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
    if (separator[0] == '<' && !isFullAnyStateExpr) {
        expressions.push(makeLambdaFromStates(toState, fromState));
    }
}
/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */
function parseAnimationAlias(alias, errors) {
    switch (alias) {
        case ':enter':
            return 'void => *';
        case ':leave':
            return '* => void';
        default:
            errors.push(`The transition alias value "${alias}" is not supported`);
            return '* => *';
    }
}
/**
 * @param {?} lhs
 * @param {?} rhs
 * @return {?}
 */
function makeLambdaFromStates(lhs, rhs) {
    return (fromState, toState) => {
        const /** @type {?} */ lhsMatch = lhs == ANY_STATE || lhs == fromState;
        const /** @type {?} */ rhsMatch = rhs == ANY_STATE || rhs == toState;
        return lhsMatch && rhsMatch;
    };
}

/**
 * @param {?} keyframes
 * @param {?} duration
 * @param {?} delay
 * @param {?} easing
 * @return {?}
 */
function createTimelineInstruction(keyframes, duration, delay, easing) {
    return {
        type: 1 /* TimelineAnimation */,
        keyframes,
        duration,
        delay,
        totalTime: duration + delay, easing
    };
}

/**
 * @param {?} ast
 * @param {?=} startingStyles
 * @param {?=} finalStyles
 * @return {?}
 */
function buildAnimationKeyframes(ast, startingStyles = {}, finalStyles = {}) {
    const /** @type {?} */ normalizedAst = Array.isArray(ast) ? sequence(/** @type {?} */ (ast)) : (ast);
    return new AnimationTimelineVisitor().buildKeyframes(normalizedAst, startingStyles, finalStyles);
}
class AnimationTimelineContext {
    /**
     * @param {?} errors
     * @param {?} timelines
     * @param {?=} initialTimeline
     */
    constructor(errors, timelines, initialTimeline = null) {
        this.errors = errors;
        this.timelines = timelines;
        this.previousNode = ({});
        this.subContextCount = 0;
        this.currentTimeline = initialTimeline || new TimelineBuilder(0);
        timelines.push(this.currentTimeline);
    }
    /**
     * @return {?}
     */
    createSubContext() {
        const /** @type {?} */ context = new AnimationTimelineContext(this.errors, this.timelines, this.currentTimeline.fork());
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        this.subContextCount++;
        return context;
    }
    /**
     * @param {?=} newTime
     * @return {?}
     */
    transformIntoNewTimeline(newTime = 0) {
        this.currentTimeline = this.currentTimeline.fork(newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    incrementTime(time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
    }
}
class AnimationTimelineVisitor {
    /**
     * @param {?} ast
     * @param {?} startingStyles
     * @param {?} finalStyles
     * @return {?}
     */
    buildKeyframes(ast, startingStyles, finalStyles) {
        const /** @type {?} */ context = new AnimationTimelineContext([], []);
        context.currentTimeline.setStyles(startingStyles);
        visitAnimationNode(this, ast, context);
        const /** @type {?} */ normalizedFinalStyles = copyStyles(finalStyles, true);
        // this is a special case for when animate(TIME) is used (without any styles)
        // thus indicating to create an animation arc between the final keyframe and
        // the destination styles. When this occurs we need to ensure that the styles
        // that are missing on the finalStyles map are set to AUTO
        if (Object.keys(context.currentTimeline.getFinalKeyframe()).length == 0) {
            context.currentTimeline.properties.forEach(prop => {
                const /** @type {?} */ val = normalizedFinalStyles[prop];
                if (val == null) {
                    normalizedFinalStyles[prop] = AUTO_STYLE;
                }
            });
        }
        context.currentTimeline.setStyles(normalizedFinalStyles);
        const /** @type {?} */ timelineInstructions = [];
        context.timelines.forEach(timeline => {
            // this checks to see if an actual animation happened
            if (timeline.hasStyling()) {
                timelineInstructions.push(timeline.buildKeyframes());
            }
        });
        if (timelineInstructions.length == 0) {
            timelineInstructions.push(createTimelineInstruction([], 0, 0, ''));
        }
        return timelineInstructions;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitState(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitTransition(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSequence(ast, context) {
        const /** @type {?} */ subContextCount = context.subContextCount;
        if (context.previousNode.type == 6 /* Style */) {
            context.currentTimeline.forwardFrame();
            context.currentTimeline.snapshotCurrentStyles();
        }
        ast.steps.forEach(s => visitAnimationNode(this, s, context));
        // this means that some animation function within the sequence
        // ended up creating a sub timeline (which means the current
        // timeline cannot overlap with the contents of the sequence)
        if (context.subContextCount > subContextCount) {
            context.transformIntoNewTimeline();
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitGroup(ast, context) {
        const /** @type {?} */ innerTimelines = [];
        let /** @type {?} */ furthestTime = context.currentTimeline.currentTime;
        ast.steps.forEach(s => {
            const /** @type {?} */ innerContext = context.createSubContext();
            visitAnimationNode(this, s, innerContext);
            furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
            innerTimelines.push(innerContext.currentTimeline);
        });
        // this operation is run after the AST loop because otherwise
        // if the parent timeline's collected styles were updated then
        // it would pass in invalid data into the new-to-be forked items
        innerTimelines.forEach(timeline => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimate(ast, context) {
        const /** @type {?} */ timings = ast.timings.hasOwnProperty('duration') ? (ast.timings) :
            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
        context.currentAnimateTimings = timings;
        if (timings.delay) {
            context.incrementTime(timings.delay);
            context.currentTimeline.snapshotCurrentStyles();
        }
        const /** @type {?} */ astType = ast.styles ? ast.styles.type : -1;
        if (astType == 5 /* KeyframeSequence */) {
            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
        }
        else {
            context.incrementTime(timings.duration);
            if (astType == 6 /* Style */) {
                this.visitStyle(/** @type {?} */ (ast.styles), context);
            }
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitStyle(ast, context) {
        // this is a special case when a style() call is issued directly after
        // a call to animate(). If the clock is not forwarded by one frame then
        // the style() calls will be merged into the previous animate() call
        // which is incorrect.
        if (!context.currentAnimateTimings &&
            context.previousNode.type == 4 /* Animate */) {
            context.currentTimeline.forwardFrame();
        }
        const /** @type {?} */ normalizedStyles = normalizeStyles(ast.styles);
        const /** @type {?} */ easing = context.currentAnimateTimings && context.currentAnimateTimings.easing;
        if (easing) {
            normalizedStyles['easing'] = easing;
        }
        context.currentTimeline.setStyles(normalizedStyles);
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyframeSequence(ast, context) {
        const /** @type {?} */ MAX_KEYFRAME_OFFSET = 1;
        const /** @type {?} */ limit = ast.steps.length - 1;
        const /** @type {?} */ firstKeyframe = ast.steps[0];
        let /** @type {?} */ offsetGap = 0;
        const /** @type {?} */ containsOffsets = firstKeyframe.styles.find(styles => styles['offset'] >= 0);
        if (!containsOffsets) {
            offsetGap = MAX_KEYFRAME_OFFSET / limit;
        }
        const /** @type {?} */ startTime = context.currentTimeline.duration;
        const /** @type {?} */ duration = context.currentAnimateTimings.duration;
        const /** @type {?} */ innerContext = context.createSubContext();
        const /** @type {?} */ innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = context.currentAnimateTimings.easing;
        ast.steps.forEach((step, i) => {
            const /** @type {?} */ normalizedStyles = normalizeStyles(step.styles);
            const /** @type {?} */ offset = containsOffsets ? (normalizedStyles['offset']) :
                (i == limit ? MAX_KEYFRAME_OFFSET : i * offsetGap);
            innerTimeline.forwardTime(offset * duration);
            innerTimeline.setStyles(normalizedStyles);
        });
        // this will ensure that the parent timeline gets all the styles from
        // the child even if the new timeline below is not used
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        // we do this because the window between this timeline and the sub timeline
        // should ensure that the styles within are exactly the same as they were before
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
    }
}
class TimelineBuilder {
    /**
     * @param {?} startTime
     * @param {?=} _globalTimelineStyles
     */
    constructor(startTime, _globalTimelineStyles = null) {
        this.startTime = startTime;
        this._globalTimelineStyles = _globalTimelineStyles;
        this.duration = 0;
        this.easing = '';
        this._keyframes = new Map();
        this._styleSummary = {};
        this._backFill = {};
        this._localTimelineStyles = Object.create(this._backFill, {});
        if (!this._globalTimelineStyles) {
            this._globalTimelineStyles = this._localTimelineStyles;
        }
        this._loadKeyframe();
    }
    /**
     * @return {?}
     */
    hasStyling() { return this._keyframes.size > 1; }
    /**
     * @return {?}
     */
    get currentTime() { return this.startTime + this.duration; }
    /**
     * @param {?=} currentTime
     * @return {?}
     */
    fork(currentTime = 0) {
        return new TimelineBuilder(currentTime || this.currentTime, this._globalTimelineStyles);
    }
    /**
     * @return {?}
     */
    _loadKeyframe() {
        this._currentKeyframe = this._keyframes.get(this.duration);
        if (!this._currentKeyframe) {
            this._currentKeyframe = Object.create(this._backFill, {});
            this._keyframes.set(this.duration, this._currentKeyframe);
        }
    }
    /**
     * @return {?}
     */
    forwardFrame() {
        this.duration++;
        this._loadKeyframe();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    forwardTime(time) {
        this.duration = time;
        this._loadKeyframe();
    }
    /**
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    _updateStyle(prop, value) {
        if (prop != 'easing') {
            this._localTimelineStyles[prop] = value;
            this._globalTimelineStyles[prop] = value;
            this._styleSummary[prop] = { time: this.currentTime, value };
        }
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    setStyles(styles) {
        Object.keys(styles).forEach(prop => {
            if (prop !== 'offset') {
                const /** @type {?} */ val = styles[prop];
                this._currentKeyframe[prop] = val;
                if (prop !== 'easing' && !this._localTimelineStyles[prop]) {
                    this._backFill[prop] = this._globalTimelineStyles[prop] || AUTO_STYLE;
                }
                this._updateStyle(prop, val);
            }
        });
        Object.keys(this._localTimelineStyles).forEach(prop => {
            if (!this._currentKeyframe.hasOwnProperty(prop)) {
                this._currentKeyframe[prop] = this._localTimelineStyles[prop];
            }
        });
    }
    /**
     * @return {?}
     */
    snapshotCurrentStyles() { copyStyles(this._localTimelineStyles, false, this._currentKeyframe); }
    /**
     * @return {?}
     */
    getFinalKeyframe() { return this._keyframes.get(this.duration); }
    /**
     * @return {?}
     */
    get properties() {
        const /** @type {?} */ properties = [];
        for (let /** @type {?} */ prop in this._currentKeyframe) {
            properties.push(prop);
        }
        return properties;
    }
    /**
     * @param {?} timeline
     * @return {?}
     */
    mergeTimelineCollectedStyles(timeline) {
        Object.keys(timeline._styleSummary).forEach(prop => {
            const /** @type {?} */ details0 = this._styleSummary[prop];
            const /** @type {?} */ details1 = timeline._styleSummary[prop];
            if (!details0 || details1.time > details0.time) {
                this._updateStyle(prop, details1.value);
            }
        });
    }
    /**
     * @return {?}
     */
    buildKeyframes() {
        const /** @type {?} */ finalKeyframes = [];
        // special case for when there are only start/destination
        // styles but no actual animation animate steps...
        if (this.duration == 0) {
            const /** @type {?} */ targetKeyframe = this.getFinalKeyframe();
            const /** @type {?} */ firstKeyframe = copyStyles(targetKeyframe, true);
            firstKeyframe['offset'] = 0;
            finalKeyframes.push(firstKeyframe);
            const /** @type {?} */ lastKeyframe = copyStyles(targetKeyframe, true);
            lastKeyframe['offset'] = 1;
            finalKeyframes.push(lastKeyframe);
        }
        else {
            this._keyframes.forEach((keyframe, time) => {
                const /** @type {?} */ finalKeyframe = copyStyles(keyframe, true);
                finalKeyframe['offset'] = time / this.duration;
                finalKeyframes.push(finalKeyframe);
            });
        }
        return createTimelineInstruction(finalKeyframes, this.duration, this.startTime, this.easing);
    }
}

/**
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @return {?}
 */
function createTransitionInstruction(triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines) {
    return {
        type: 0 /* TransitionAnimation */,
        triggerName,
        isRemovalTransition,
        fromState,
        fromStyles,
        toState,
        toStyles,
        timelines
    };
}

class AnimationTransitionFactory {
    /**
     * @param {?} _triggerName
     * @param {?} ast
     * @param {?} matchFns
     * @param {?} _stateStyles
     */
    constructor(_triggerName, ast, matchFns, _stateStyles) {
        this._triggerName = _triggerName;
        this.matchFns = matchFns;
        this._stateStyles = _stateStyles;
        this._animationAst = ast.animation;
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    match(currentState, nextState) {
        if (!oneOrMoreTransitionsMatch(this.matchFns, currentState, nextState))
            return;
        const /** @type {?} */ backupStateStyles = this._stateStyles['*'] || {};
        const /** @type {?} */ currentStateStyles = this._stateStyles[currentState] || backupStateStyles;
        const /** @type {?} */ nextStateStyles = this._stateStyles[nextState] || backupStateStyles;
        const /** @type {?} */ timelines = buildAnimationKeyframes(this._animationAst, currentStateStyles, nextStateStyles);
        return createTransitionInstruction(this._triggerName, currentState, nextState, nextState === 'void', currentStateStyles, nextStateStyles, timelines);
    }
}
/**
 * @param {?} matchFns
 * @param {?} currentState
 * @param {?} nextState
 * @return {?}
 */
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState) {
    return matchFns.some(fn => fn(currentState, nextState));
}

/**
 * @param {?} ast
 * @return {?}
 */
function validateAnimationSequence(ast) {
    return new AnimationValidatorVisitor().validate(ast);
}
class AnimationValidatorVisitor {
    /**
     * @param {?} ast
     * @return {?}
     */
    validate(ast) {
        const /** @type {?} */ context = new AnimationValidatorContext();
        visitAnimationNode(this, ast, context);
        return context.errors;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitState(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitTransition(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSequence(ast, context) {
        ast.steps.forEach(step => visitAnimationNode(this, step, context));
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitGroup(ast, context) {
        const /** @type {?} */ currentTime = context.currentTime;
        let /** @type {?} */ furthestTime = 0;
        ast.steps.forEach(step => {
            context.currentTime = currentTime;
            visitAnimationNode(this, step, context);
            furthestTime = Math.max(furthestTime, context.currentTime);
        });
        context.currentTime = furthestTime;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimate(ast, context) {
        // we reassign the timings here so that they are not reparsed each
        // time an animation occurs
        context.currentAnimateTimings = ast.timings =
            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
        const /** @type {?} */ astType = ast.styles && ast.styles.type;
        if (astType == 5 /* KeyframeSequence */) {
            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
        }
        else {
            context.currentTime +=
                context.currentAnimateTimings.duration + context.currentAnimateTimings.delay;
            if (astType == 6 /* Style */) {
                this.visitStyle(/** @type {?} */ (ast.styles), context);
            }
        }
        context.currentAnimateTimings = null;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitStyle(ast, context) {
        const /** @type {?} */ styleData = normalizeStyles(ast.styles);
        const /** @type {?} */ timings = context.currentAnimateTimings;
        let /** @type {?} */ endTime = context.currentTime;
        let /** @type {?} */ startTime = context.currentTime;
        if (timings && startTime > 0) {
            startTime -= timings.duration + timings.delay;
        }
        Object.keys(styleData).forEach(prop => {
            const /** @type {?} */ collectedEntry = context.collectedStyles[prop];
            let /** @type {?} */ updateCollectedStyle = true;
            if (collectedEntry) {
                if (startTime != endTime && startTime >= collectedEntry.startTime &&
                    endTime <= collectedEntry.endTime) {
                    context.errors.push(`The CSS property "${prop}" that exists between the times of "${collectedEntry.startTime}ms" and "${collectedEntry.endTime}ms" is also being animated in a parallel animation between the times of "${startTime}ms" and "${endTime}ms"`);
                    updateCollectedStyle = false;
                }
                // we always choose the smaller start time value since we
                // want to have a record of the entire animation window where
                // the style property is being animated in between
                startTime = collectedEntry.startTime;
            }
            if (updateCollectedStyle) {
                context.collectedStyles[prop] = { startTime, endTime };
            }
        });
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyframeSequence(ast, context) {
        let /** @type {?} */ totalKeyframesWithOffsets = 0;
        const /** @type {?} */ offsets = [];
        let /** @type {?} */ offsetsOutOfOrder = false;
        let /** @type {?} */ keyframesOutOfRange = false;
        let /** @type {?} */ previousOffset = 0;
        ast.steps.forEach(step => {
            const /** @type {?} */ styleData = normalizeStyles(step.styles);
            let /** @type {?} */ offset = 0;
            if (styleData.hasOwnProperty('offset')) {
                totalKeyframesWithOffsets++;
                offset = (styleData['offset']);
            }
            keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
            offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
            previousOffset = offset;
            offsets.push(offset);
        });
        if (keyframesOutOfRange) {
            context.errors.push(`Please ensure that all keyframe offsets are between 0 and 1`);
        }
        if (offsetsOutOfOrder) {
            context.errors.push(`Please ensure that all keyframe offsets are in order`);
        }
        const /** @type {?} */ length = ast.steps.length;
        let /** @type {?} */ generatedOffset = 0;
        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
            context.errors.push(`Not all style() steps within the declared keyframes() contain offsets`);
        }
        else if (totalKeyframesWithOffsets == 0) {
            generatedOffset = 1 / length;
        }
        const /** @type {?} */ limit = length - 1;
        const /** @type {?} */ currentTime = context.currentTime;
        const /** @type {?} */ animateDuration = context.currentAnimateTimings.duration;
        ast.steps.forEach((step, i) => {
            const /** @type {?} */ offset = generatedOffset > 0 ? (i == limit ? 1 : (generatedOffset * i)) : offsets[i];
            const /** @type {?} */ durationUpToThisFrame = offset * animateDuration;
            context.currentTime =
                currentTime + context.currentAnimateTimings.delay + durationUpToThisFrame;
            context.currentAnimateTimings.duration = durationUpToThisFrame;
            this.visitStyle(step, context);
        });
    }
}
class AnimationValidatorContext {
    constructor() {
        this.errors = [];
        this.currentTime = 0;
        this.collectedStyles = {};
    }
}

/**
 * \@experimental Animation support is experimental.
 * @param {?} name
 * @param {?} definitions
 * @return {?}
 */
function buildTrigger(name, definitions) {
    return new AnimationTriggerVisitor().buildTrigger(name, definitions);
}
/**
 * \@experimental Animation support is experimental.
 */
class AnimationTrigger {
    /**
     * @param {?} name
     * @param {?} states
     * @param {?} _transitionAsts
     */
    constructor(name, states, _transitionAsts) {
        this.name = name;
        this._transitionAsts = _transitionAsts;
        this.transitionFactories = [];
        this.states = {};
        Object.keys(states).forEach(stateName => { this.states[stateName] = copyStyles(states[stateName], false); });
        const errors = [];
        _transitionAsts.forEach(ast => {
            const exprs = parseTransitionExpr(ast.expr, errors);
            const sequenceErrors = validateAnimationSequence(ast);
            if (sequenceErrors.length) {
                errors.push(...sequenceErrors);
            }
            else {
                this.transitionFactories.push(new AnimationTransitionFactory(this.name, ast, exprs, states));
            }
        });
        if (errors.length) {
            const LINE_START = '\n - ';
            throw new Error(`Animation parsing for the ${name} trigger have failed:${LINE_START}${errors.join(LINE_START)}`);
        }
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    createFallbackInstruction(currentState, nextState) {
        const /** @type {?} */ backupStateStyles = this.states['*'] || {};
        const /** @type {?} */ currentStateStyles = this.states[currentState] || backupStateStyles;
        const /** @type {?} */ nextStateStyles = this.states[nextState] || backupStateStyles;
        return createTransitionInstruction(this.name, currentState, nextState, nextState == 'void', currentStateStyles, nextStateStyles, []);
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    matchTransition(currentState, nextState) {
        for (let /** @type {?} */ i = 0; i < this.transitionFactories.length; i++) {
            let /** @type {?} */ result = this.transitionFactories[i].match(currentState, nextState);
            if (result)
                return result;
        }
    }
}
class AnimationTriggerContext {
    constructor() {
        this.errors = [];
        this.states = {};
        this.transitions = [];
    }
}
class AnimationTriggerVisitor {
    /**
     * @param {?} name
     * @param {?} definitions
     * @return {?}
     */
    buildTrigger(name, definitions) {
        const /** @type {?} */ context = new AnimationTriggerContext();
        definitions.forEach(def => visitAnimationNode(this, def, context));
        return new AnimationTrigger(name, context.states, context.transitions);
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitState(ast, context) {
        context.states[ast.name] = normalizeStyles(ast.styles.styles);
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitTransition(ast, context) {
        context.transitions.push(ast);
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSequence(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitGroup(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimate(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitStyle(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyframeSequence(ast, context) { }
}

const /** @type {?} */ MARKED_FOR_ANIMATION = 'ng-animate';
const /** @type {?} */ MARKED_FOR_REMOVAL = '$$ngRemove';
class DomAnimationEngine {
    /**
     * @param {?} _driver
     * @param {?} _normalizer
     */
    constructor(_driver, _normalizer) {
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._flaggedInserts = new Set();
        this._queuedRemovals = new Map();
        this._queuedTransitionAnimations = [];
        this._activeTransitionAnimations = new Map();
        this._activeElementAnimations = new Map();
        this._elementTriggerStates = new Map();
        this._triggers = Object.create(null);
        this._triggerListeners = new Map();
    }
    /**
     * @return {?}
     */
    get queuedPlayers() {
        return this._queuedTransitionAnimations.map(q => q.player);
    }
    /**
     * @return {?}
     */
    get activePlayers() {
        const /** @type {?} */ players = [];
        this._activeElementAnimations.forEach(activePlayers => players.push(...activePlayers));
        return players;
    }
    /**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    registerTrigger(trigger, name = null) {
        name = name || trigger.name;
        if (this._triggers[name]) {
            return;
        }
        this._triggers[name] = buildTrigger(name, trigger.definitions);
    }
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    onInsert(element, domFn) {
        this._flaggedInserts.add(element);
        domFn();
    }
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    onRemove(element, domFn) {
        let /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
        if (lookupRef) {
            const /** @type {?} */ possibleTriggers = Object.keys(lookupRef);
            const /** @type {?} */ hasRemoval = possibleTriggers.some(triggerName => {
                const /** @type {?} */ oldValue = lookupRef[triggerName];
                const /** @type {?} */ instruction = this._triggers[triggerName].matchTransition(oldValue, 'void');
                return !!instruction;
            });
            if (hasRemoval) {
                element[MARKED_FOR_REMOVAL] = true;
                this._queuedRemovals.set(element, domFn);
                return;
            }
        }
        domFn();
    }
    /**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    setProperty(element, property, value) {
        const /** @type {?} */ trigger = this._triggers[property];
        if (!trigger) {
            throw new Error(`The provided animation trigger "${property}" has not been registered!`);
        }
        let /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
        if (!lookupRef) {
            this._elementTriggerStates.set(element, lookupRef = {});
        }
        let /** @type {?} */ oldValue = lookupRef[property] || 'void';
        if (oldValue != value) {
            let /** @type {?} */ instruction = trigger.matchTransition(oldValue, value);
            if (!instruction) {
                // we do this to make sure we always have an animation player so
                // that callback operations are properly called
                instruction = trigger.createFallbackInstruction(oldValue, value);
            }
            this.animateTransition(element, instruction);
            lookupRef[property] = value;
        }
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    listen(element, eventName, eventPhase, callback) {
        if (!eventPhase) {
            throw new Error(`Unable to listen on the animation trigger "${eventName}" because the provided event is undefined!`);
        }
        if (!this._triggers[eventName]) {
            throw new Error(`Unable to listen on the animation trigger event "${eventPhase}" because the animation trigger "${eventName}" doesn't exist!`);
        }
        let /** @type {?} */ elementListeners = this._triggerListeners.get(element);
        if (!elementListeners) {
            this._triggerListeners.set(element, elementListeners = []);
        }
        validatePlayerEvent(eventName, eventPhase);
        const /** @type {?} */ tuple = ({ triggerName: eventName, phase: eventPhase, callback });
        elementListeners.push(tuple);
        return () => {
            const /** @type {?} */ index = elementListeners.indexOf(tuple);
            if (index >= 0) {
                elementListeners.splice(index, 1);
            }
        };
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _onRemovalTransition(element) {
        // when a parent animation is set to trigger a removal we want to
        // find all of the children that are currently animating and clear
        // them out by destroying each of them.
        const /** @type {?} */ elms = element.querySelectorAll(MARKED_FOR_ANIMATION);
        for (let /** @type {?} */ i = 0; i < elms.length; i++) {
            const /** @type {?} */ elm = elms[i];
            const /** @type {?} */ activePlayers = this._activeElementAnimations.get(elm);
            if (activePlayers) {
                activePlayers.forEach(player => player.destroy());
            }
            const /** @type {?} */ activeTransitions = this._activeTransitionAnimations.get(elm);
            if (activeTransitions) {
                Object.keys(activeTransitions).forEach(triggerName => {
                    const /** @type {?} */ player = activeTransitions[triggerName];
                    if (player) {
                        player.destroy();
                    }
                });
            }
        }
        // we make a copy of the array because the actual source array is modified
        // each time a player is finished/destroyed (the forEach loop would fail otherwise)
        return copyArray(this._activeElementAnimations.get(element));
    }
    /**
     * @param {?} element
     * @param {?} instruction
     * @return {?}
     */
    animateTransition(element, instruction) {
        const /** @type {?} */ triggerName = instruction.triggerName;
        let /** @type {?} */ previousPlayers;
        if (instruction.isRemovalTransition) {
            previousPlayers = this._onRemovalTransition(element);
        }
        else {
            previousPlayers = [];
            const /** @type {?} */ existingTransitions = this._activeTransitionAnimations.get(element);
            const /** @type {?} */ existingPlayer = existingTransitions ? existingTransitions[triggerName] : null;
            if (existingPlayer) {
                previousPlayers.push(existingPlayer);
            }
        }
        // it's important to do this step before destroying the players
        // so that the onDone callback below won't fire before this
        eraseStyles(element, instruction.fromStyles);
        // we first run this so that the previous animation player
        // data can be passed into the successive animation players
        let /** @type {?} */ totalTime = 0;
        const /** @type {?} */ players = instruction.timelines.map(timelineInstruction => {
            totalTime = Math.max(totalTime, timelineInstruction.totalTime);
            return this._buildPlayer(element, timelineInstruction, previousPlayers);
        });
        previousPlayers.forEach(previousPlayer => previousPlayer.destroy());
        const /** @type {?} */ player = optimizeGroupPlayer(players);
        player.onDone(() => {
            player.destroy();
            const /** @type {?} */ elmTransitionMap = this._activeTransitionAnimations.get(element);
            if (elmTransitionMap) {
                delete elmTransitionMap[triggerName];
                if (Object.keys(elmTransitionMap).length == 0) {
                    this._activeTransitionAnimations.delete(element);
                }
            }
            deleteFromArrayMap(this._activeElementAnimations, element, player);
            setStyles(element, instruction.toStyles);
        });
        const /** @type {?} */ elmTransitionMap = getOrSetAsInMap(this._activeTransitionAnimations, element, {});
        elmTransitionMap[triggerName] = player;
        this._queuePlayer(element, triggerName, player, makeAnimationEvent(element, triggerName, instruction.fromState, instruction.toState, null, // this will be filled in during event creation
        totalTime));
        return player;
    }
    /**
     * @param {?} element
     * @param {?} instructions
     * @param {?=} previousPlayers
     * @return {?}
     */
    animateTimeline(element, instructions, previousPlayers = []) {
        const /** @type {?} */ players = instructions.map(instruction => {
            const /** @type {?} */ player = this._buildPlayer(element, instruction, previousPlayers);
            player.onDestroy(() => { deleteFromArrayMap(this._activeElementAnimations, element, player); });
            player.init();
            this._markPlayerAsActive(element, player);
            return player;
        });
        return optimizeGroupPlayer(players);
    }
    /**
     * @param {?} element
     * @param {?} instruction
     * @param {?} previousPlayers
     * @return {?}
     */
    _buildPlayer(element, instruction, previousPlayers) {
        return this._driver.animate(element, this._normalizeKeyframes(instruction.keyframes), instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    /**
     * @param {?} keyframes
     * @return {?}
     */
    _normalizeKeyframes(keyframes) {
        const /** @type {?} */ errors = [];
        const /** @type {?} */ normalizedKeyframes = [];
        keyframes.forEach(kf => {
            const /** @type {?} */ normalizedKeyframe = {};
            Object.keys(kf).forEach(prop => {
                let /** @type {?} */ normalizedProp = prop;
                let /** @type {?} */ normalizedValue = kf[prop];
                if (prop != 'offset') {
                    normalizedProp = this._normalizer.normalizePropertyName(prop, errors);
                    normalizedValue =
                        this._normalizer.normalizeStyleValue(prop, normalizedProp, kf[prop], errors);
                }
                normalizedKeyframe[normalizedProp] = normalizedValue;
            });
            normalizedKeyframes.push(normalizedKeyframe);
        });
        if (errors.length) {
            const /** @type {?} */ LINE_START = '\n - ';
            throw new Error(`Unable to animate due to the following errors:${LINE_START}${errors.join(LINE_START)}`);
        }
        return normalizedKeyframes;
    }
    /**
     * @param {?} element
     * @param {?} player
     * @return {?}
     */
    _markPlayerAsActive(element, player) {
        const /** @type {?} */ elementAnimations = getOrSetAsInMap(this._activeElementAnimations, element, []);
        elementAnimations.push(player);
    }
    /**
     * @param {?} element
     * @param {?} triggerName
     * @param {?} player
     * @param {?} event
     * @return {?}
     */
    _queuePlayer(element, triggerName, player, event) {
        const /** @type {?} */ tuple = ({ element, player, triggerName, event });
        this._queuedTransitionAnimations.push(tuple);
        player.init();
        element.classList.add(MARKED_FOR_ANIMATION);
        player.onDone(() => { element.classList.remove(MARKED_FOR_ANIMATION); });
    }
    /**
     * @return {?}
     */
    _flushQueuedAnimations() {
        parentLoop: while (this._queuedTransitionAnimations.length) {
            const { player, element, triggerName, event } = this._queuedTransitionAnimations.shift();
            let /** @type {?} */ parent = element;
            while (parent = parent.parentNode) {
                // this means that a parent element will or will not
                // have its own animation operation which in this case
                // there's no point in even trying to do an animation
                if (parent[MARKED_FOR_REMOVAL])
                    continue parentLoop;
            }
            // if a removal exists for the given element then we need cancel
            // all the queued players so that a proper removal animation can go
            if (this._queuedRemovals.has(element)) {
                player.destroy();
                continue;
            }
            const /** @type {?} */ listeners = this._triggerListeners.get(element);
            if (listeners) {
                listeners.forEach(tuple => {
                    if (tuple.triggerName == triggerName) {
                        listenOnPlayer(player, tuple.phase, event, tuple.callback);
                    }
                });
            }
            this._markPlayerAsActive(element, player);
            // in the event that an animation throws an error then we do
            // not want to re-run animations on any previous animations
            // if they have already been kicked off beforehand
            if (!player.hasStarted()) {
                player.play();
            }
        }
    }
    /**
     * @return {?}
     */
    flush() {
        this._flushQueuedAnimations();
        let /** @type {?} */ flushAgain = false;
        this._queuedRemovals.forEach((callback, element) => {
            // an item that was inserted/removed in the same flush means
            // that an animation should not happen anyway
            if (this._flaggedInserts.has(element))
                return;
            let /** @type {?} */ parent = element;
            let /** @type {?} */ players = [];
            while (parent = parent.parentNode) {
                // there is no reason to even try to
                if (parent[MARKED_FOR_REMOVAL]) {
                    callback();
                    return;
                }
                const /** @type {?} */ match = this._activeElementAnimations.get(parent);
                if (match) {
                    players.push(...match);
                    break;
                }
            }
            // the loop was unable to find an parent that is animating even
            // though this element has set to be removed, so the algorithm
            // should check to see if there are any triggers on the element
            // that are present to handle a leave animation and then setup
            // those players to facilitate the callback after done
            if (players.length == 0) {
                // this means that the element has valid state triggers
                const /** @type {?} */ stateDetails = this._elementTriggerStates.get(element);
                if (stateDetails) {
                    Object.keys(stateDetails).forEach(triggerName => {
                        const /** @type {?} */ oldValue = stateDetails[triggerName];
                        const /** @type {?} */ instruction = this._triggers[triggerName].matchTransition(oldValue, 'void');
                        if (instruction) {
                            players.push(this.animateTransition(element, instruction));
                            flushAgain = true;
                        }
                    });
                }
            }
            if (players.length) {
                optimizeGroupPlayer(players).onDone(callback);
            }
            else {
                callback();
            }
        });
        this._queuedRemovals.clear();
        this._flaggedInserts.clear();
        // this means that one or more leave animations were detected
        if (flushAgain) {
            this._flushQueuedAnimations();
        }
    }
}
/**
 * @param {?} map
 * @param {?} key
 * @param {?} defaultValue
 * @return {?}
 */
function getOrSetAsInMap(map, key, defaultValue) {
    let /** @type {?} */ value = map.get(key);
    if (!value) {
        map.set(key, value = defaultValue);
    }
    return value;
}
/**
 * @param {?} map
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function deleteFromArrayMap(map, key, value) {
    let /** @type {?} */ arr = map.get(key);
    if (arr) {
        const /** @type {?} */ index = arr.indexOf(value);
        if (index >= 0) {
            arr.splice(index, 1);
            if (arr.length == 0) {
                map.delete(key);
            }
        }
    }
}
/**
 * @param {?} players
 * @return {?}
 */
function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new NoopAnimationPlayer();
        case 1:
            return players[0];
        default:
            return new ɵAnimationGroupPlayer(players);
    }
}
/**
 * @param {?} source
 * @return {?}
 */
function copyArray(source) {
    return source ? source.splice(0) : [];
}
/**
 * @param {?} triggerName
 * @param {?} eventName
 * @return {?}
 */
function validatePlayerEvent(triggerName, eventName) {
    switch (eventName) {
        case 'start':
        case 'done':
            return;
        default:
            throw new Error(`The provided animation trigger event "${eventName}" for the animation trigger "${triggerName}" is not supported!`);
    }
}
/**
 * @param {?} player
 * @param {?} eventName
 * @param {?} baseEvent
 * @param {?} callback
 * @return {?}
 */
function listenOnPlayer(player, eventName, baseEvent, callback) {
    switch (eventName) {
        case 'start':
            player.onStart(() => {
                const /** @type {?} */ event = copyAnimationEvent(baseEvent);
                event.phaseName = 'start';
                callback(event);
            });
            break;
        case 'done':
            player.onDone(() => {
                const /** @type {?} */ event = copyAnimationEvent(baseEvent);
                event.phaseName = 'done';
                callback(event);
            });
            break;
    }
}
/**
 * @param {?} e
 * @return {?}
 */
function copyAnimationEvent(e) {
    return makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, e.phaseName, e.totalTime);
}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName, totalTime) {
    return ({ element, triggerName, fromState, toState, phaseName, totalTime });
}

const /** @type {?} */ DEFAULT_STATE_VALUE = 'void';
const /** @type {?} */ DEFAULT_STATE_STYLES = '*';
class NoopAnimationEngine extends AnimationEngine {
    constructor() {
        super(...arguments);
        this._listeners = new Map();
        this._changes = [];
        this._flaggedRemovals = new Set();
        this._onDoneFns = [];
        this._triggerStyles = Object.create(null);
    }
    /**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    registerTrigger(trigger, name = null) {
        name = name || trigger.name;
        if (this._triggerStyles[name]) {
            return;
        }
        const /** @type {?} */ stateMap = {};
        trigger.definitions.forEach(def => {
            if (def.type === 0 /* State */) {
                const /** @type {?} */ stateDef = (def);
                stateMap[stateDef.name] = normalizeStyles(stateDef.styles.styles);
            }
        });
        this._triggerStyles[name] = stateMap;
    }
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    onInsert(element, domFn) { domFn(); }
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    onRemove(element, domFn) {
        domFn();
        this._flaggedRemovals.add(element);
    }
    /**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    setProperty(element, property, value) {
        const /** @type {?} */ storageProp = makeStorageProp(property);
        const /** @type {?} */ oldValue = element[storageProp] || DEFAULT_STATE_VALUE;
        this._changes.push(/** @type {?} */ ({ element, oldValue, newValue: value, triggerName: property }));
        const /** @type {?} */ triggerStateStyles = this._triggerStyles[property] || {};
        const /** @type {?} */ fromStateStyles = triggerStateStyles[oldValue] || triggerStateStyles[DEFAULT_STATE_STYLES];
        if (fromStateStyles) {
            eraseStyles(element, fromStateStyles);
        }
        element[storageProp] = value;
        this._onDoneFns.push(() => {
            const /** @type {?} */ toStateStyles = triggerStateStyles[value] || triggerStateStyles[DEFAULT_STATE_STYLES];
            if (toStateStyles) {
                setStyles(element, toStateStyles);
            }
        });
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    listen(element, eventName, eventPhase, callback) {
        let /** @type {?} */ listeners = this._listeners.get(element);
        if (!listeners) {
            this._listeners.set(element, listeners = []);
        }
        const /** @type {?} */ tuple = ({ triggerName: eventName, eventPhase, callback });
        listeners.push(tuple);
        return () => tuple.doRemove = true;
    }
    /**
     * @return {?}
     */
    flush() {
        const /** @type {?} */ onStartCallbacks = [];
        const /** @type {?} */ onDoneCallbacks = [];
        /**
         * @param {?} listener
         * @param {?} data
         * @return {?}
         */
        function handleListener(listener, data) {
            const /** @type {?} */ phase = listener.eventPhase;
            const /** @type {?} */ event = makeAnimationEvent$1(data.element, data.triggerName, data.oldValue, data.newValue, phase, 0);
            if (phase == 'start') {
                onStartCallbacks.push(() => listener.callback(event));
            }
            else if (phase == 'done') {
                onDoneCallbacks.push(() => listener.callback(event));
            }
        }
        this._changes.forEach(change => {
            const /** @type {?} */ element = change.element;
            const /** @type {?} */ listeners = this._listeners.get(element);
            if (listeners) {
                listeners.forEach(listener => {
                    if (listener.triggerName == change.triggerName) {
                        handleListener(listener, change);
                    }
                });
            }
        });
        // upon removal ALL the animation triggers need to get fired
        this._flaggedRemovals.forEach(element => {
            const /** @type {?} */ listeners = this._listeners.get(element);
            if (listeners) {
                listeners.forEach(listener => {
                    const /** @type {?} */ triggerName = listener.triggerName;
                    const /** @type {?} */ storageProp = makeStorageProp(triggerName);
                    handleListener(listener, /** @type {?} */ ({
                        element: element,
                        triggerName: triggerName,
                        oldValue: element[storageProp] || DEFAULT_STATE_VALUE,
                        newValue: DEFAULT_STATE_VALUE
                    }));
                });
            }
        });
        // remove all the listeners after everything is complete
        Array.from(this._listeners.keys()).forEach(element => {
            const /** @type {?} */ listenersToKeep = this._listeners.get(element).filter(l => !l.doRemove);
            if (listenersToKeep.length) {
                this._listeners.set(element, listenersToKeep);
            }
            else {
                this._listeners.delete(element);
            }
        });
        onStartCallbacks.forEach(fn => fn());
        onDoneCallbacks.forEach(fn => fn());
        this._flaggedRemovals.clear();
        this._changes = [];
        this._onDoneFns.forEach(doneFn => doneFn());
        this._onDoneFns = [];
    }
    /**
     * @return {?}
     */
    get activePlayers() { return []; }
    /**
     * @return {?}
     */
    get queuedPlayers() { return []; }
}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function makeAnimationEvent$1(element, triggerName, fromState, toState, phaseName, totalTime) {
    return ({ element, triggerName, fromState, toState, phaseName, totalTime });
}
/**
 * @param {?} property
 * @return {?}
 */
function makeStorageProp(property) {
    return '_@_' + property;
}

class WebAnimationsPlayer {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @param {?=} previousPlayers
     */
    constructor(element, keyframes, options, previousPlayers = []) {
        this.element = element;
        this.keyframes = keyframes;
        this.options = options;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._initialized = false;
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.time = 0;
        this.parentPlayer = null;
        this._duration = options['duration'];
        this._delay = options['delay'] || 0;
        this.time = this._duration + this._delay;
        this.previousStyles = {};
        previousPlayers.forEach(player => {
            let styles = player._captureStyles();
            Object.keys(styles).forEach(prop => this.previousStyles[prop] = styles[prop]);
        });
    }
    /**
     * @return {?}
     */
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(fn => fn());
            this._onDoneFns = [];
        }
    }
    /**
     * @return {?}
     */
    init() {
        if (this._initialized)
            return;
        this._initialized = true;
        const /** @type {?} */ keyframes = this.keyframes.map(styles => {
            const /** @type {?} */ formattedKeyframe = {};
            Object.keys(styles).forEach((prop, index) => {
                let /** @type {?} */ value = styles[prop];
                if (value == AUTO_STYLE) {
                    value = _computeStyle(this.element, prop);
                }
                if (value != undefined) {
                    formattedKeyframe[prop] = value;
                }
            });
            return formattedKeyframe;
        });
        const /** @type {?} */ previousStyleProps = Object.keys(this.previousStyles);
        if (previousStyleProps.length) {
            let /** @type {?} */ startingKeyframe = keyframes[0];
            let /** @type {?} */ missingStyleProps = [];
            previousStyleProps.forEach(prop => {
                if (startingKeyframe[prop] != null) {
                    missingStyleProps.push(prop);
                }
                startingKeyframe[prop] = this.previousStyles[prop];
            });
            if (missingStyleProps.length) {
                const /** @type {?} */ self = this;
                // tslint:disable-next-line
                for (var /** @type {?} */ i = 1; i < keyframes.length; i++) {
                    let /** @type {?} */ kf = keyframes[i];
                    missingStyleProps.forEach(function (prop) {
                        kf[prop] = _computeStyle(self.element, prop);
                    });
                }
            }
        }
        this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
        this._finalKeyframe =
            keyframes.length ? _copyKeyframeStyles(keyframes[keyframes.length - 1]) : {};
        // this is required so that the player doesn't start to animate right away
        this._resetDomPlayerState();
        this._player.addEventListener('finish', () => this._onFinish());
    }
    /**
     * \@internal
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @return {?}
     */
    _triggerWebAnimation(element, keyframes, options) {
        // jscompiler doesn't seem to know animate is a native property because it's not fully
        // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
        return (element['animate'](keyframes, options));
    }
    /**
     * @return {?}
     */
    get domPlayer() { return this._player; }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) { this._onStartFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) { this._onDoneFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) { this._onDestroyFns.push(fn); }
    /**
     * @return {?}
     */
    play() {
        this.init();
        if (!this.hasStarted()) {
            this._onStartFns.forEach(fn => fn());
            this._onStartFns = [];
            this._started = true;
        }
        this._player.play();
    }
    /**
     * @return {?}
     */
    pause() {
        this.init();
        this._player.pause();
    }
    /**
     * @return {?}
     */
    finish() {
        this.init();
        this._onFinish();
        this._player.finish();
    }
    /**
     * @return {?}
     */
    reset() {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    }
    /**
     * @return {?}
     */
    _resetDomPlayerState() {
        if (this._player) {
            this._player.cancel();
        }
    }
    /**
     * @return {?}
     */
    restart() {
        this.reset();
        this.play();
    }
    /**
     * @return {?}
     */
    hasStarted() { return this._started; }
    /**
     * @return {?}
     */
    destroy() {
        if (!this._destroyed) {
            this._resetDomPlayerState();
            this._onFinish();
            this._destroyed = true;
            this._onDestroyFns.forEach(fn => fn());
            this._onDestroyFns = [];
        }
    }
    /**
     * @param {?} p
     * @return {?}
     */
    setPosition(p) { this._player.currentTime = p * this.time; }
    /**
     * @return {?}
     */
    getPosition() { return this._player.currentTime / this.time; }
    /**
     * @return {?}
     */
    _captureStyles() {
        const /** @type {?} */ styles = {};
        if (this.hasStarted()) {
            Object.keys(this._finalKeyframe).forEach(prop => {
                if (prop != 'offset') {
                    styles[prop] =
                        this._finished ? this._finalKeyframe[prop] : _computeStyle(this.element, prop);
                }
            });
        }
        return styles;
    }
}
/**
 * @param {?} element
 * @param {?} prop
 * @return {?}
 */
function _computeStyle(element, prop) {
    return ((window.getComputedStyle(element)))[prop];
}
/**
 * @param {?} styles
 * @return {?}
 */
function _copyKeyframeStyles(styles) {
    const /** @type {?} */ newStyles = {};
    Object.keys(styles).forEach(prop => {
        if (prop != 'offset') {
            newStyles[prop] = styles[prop];
        }
    });
    return newStyles;
}

class WebAnimationsDriver {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
    animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
        const /** @type {?} */ playerOptions = { 'duration': duration, 'delay': delay, 'fill': 'forwards' };
        // we check for this to avoid having a null|undefined value be present
        // for the easing (which results in an error for certain browsers #9752)
        if (easing) {
            playerOptions['easing'] = easing;
        }
        const /** @type {?} */ previousWebAnimationPlayers = (previousPlayers.filter(player => { return player instanceof WebAnimationsPlayer; }));
        return new WebAnimationsPlayer(element, keyframes, playerOptions, previousWebAnimationPlayers);
    }
}
/**
 * @return {?}
 */
function supportsWebAnimations() {
    return typeof Element !== 'undefined' && typeof ((Element)).prototype['animate'] === 'function';
}

class InjectableAnimationEngine extends DomAnimationEngine {
    /**
     * @param {?} driver
     * @param {?} normalizer
     */
    constructor(driver, normalizer) {
        super(driver, normalizer);
    }
}
InjectableAnimationEngine.decorators = [
    { type: Injectable },
];
/** @nocollapse */
InjectableAnimationEngine.ctorParameters = () => [
    { type: AnimationDriver, },
    { type: AnimationStyleNormalizer, },
];
/**
 * @return {?}
 */
function instantiateSupportedAnimationDriver() {
    if (supportsWebAnimations()) {
        return new WebAnimationsDriver();
    }
    return new NoopAnimationDriver();
}
/**
 * @return {?}
 */
function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
const /** @type {?} */ BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
    { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: AnimationEngine, useClass: InjectableAnimationEngine }, {
        provide: RendererFactoryV2,
        useFactory: instantiateRendererFactory,
        deps: [ɵDomRendererFactoryV2, AnimationEngine, NgZone]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
const /** @type {?} */ BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: AnimationEngine, useClass: NoopAnimationEngine }, {
        provide: RendererFactoryV2,
        useFactory: instantiateRendererFactory,
        deps: [ɵDomRendererFactoryV2, AnimationEngine, NgZone]
    }
];

/**
 * \@experimental Animation support is experimental.
 */
class BrowserAnimationsModule {
}
BrowserAnimationsModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                providers: BROWSER_ANIMATIONS_PROVIDERS,
            },] },
];
/** @nocollapse */
BrowserAnimationsModule.ctorParameters = () => [];
/**
 * \@experimental Animation support is experimental.
 */
class NoopAnimationsModule {
}
NoopAnimationsModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
            },] },
];
/** @nocollapse */
NoopAnimationsModule.ctorParameters = () => [];

class Animation {
    /**
     * @param {?} input
     */
    constructor(input) {
        const ast = Array.isArray(input) ? sequence(input) : input;
        const errors = validateAnimationSequence(ast);
        if (errors.length) {
            const errorMessage = `animation validation failed:\n${errors.join("\n")}`;
            throw new Error(errorMessage);
        }
        this._animationAst = ast;
    }
    /**
     * @param {?} startingStyles
     * @param {?} destinationStyles
     * @return {?}
     */
    buildTimelines(startingStyles, destinationStyles) {
        const /** @type {?} */ start = Array.isArray(startingStyles) ? normalizeStyles(startingStyles) : (startingStyles);
        const /** @type {?} */ dest = Array.isArray(destinationStyles) ? normalizeStyles(destinationStyles) : (destinationStyles);
        return buildAnimationKeyframes(this._animationAst, start, dest);
    }
    /**
     * @param {?} injector
     * @param {?} element
     * @param {?=} startingStyles
     * @param {?=} destinationStyles
     * @return {?}
     */
    create(injector, element, startingStyles = {}, destinationStyles = {}) {
        const /** @type {?} */ instructions = this.buildTimelines(startingStyles, destinationStyles);
        // note the code below is only here to make the tests happy (once the new renderer is
        // within core then the code below will interact with Renderer.transition(...))
        const /** @type {?} */ driver = injector.get(AnimationDriver);
        const /** @type {?} */ normalizer = injector.get(AnimationStyleNormalizer);
        const /** @type {?} */ engine = new DomAnimationEngine(driver, normalizer);
        return engine.animateTimeline(element, instructions);
    }
}

export { BrowserAnimationsModule, NoopAnimationsModule, AnimationDriver, AnimationEngine as ɵAnimationEngine, Animation as ɵAnimation, AnimationStyleNormalizer as ɵAnimationStyleNormalizer, NoopAnimationStyleNormalizer as ɵNoopAnimationStyleNormalizer, NoopAnimationDriver as ɵNoopAnimationDriver, AnimationRenderer as ɵAnimationRenderer, AnimationRendererFactory as ɵAnimationRendererFactory, DomAnimationEngine as ɵDomAnimationEngine, WebAnimationsStyleNormalizer as ɵg, BROWSER_ANIMATIONS_PROVIDERS as ɵe, BROWSER_NOOP_ANIMATIONS_PROVIDERS as ɵf, InjectableAnimationEngine as ɵa, instantiateDefaultStyleNormalizer as ɵc, instantiateRendererFactory as ɵd, instantiateSupportedAnimationDriver as ɵb, NoopAnimationEngine as ɵh };