(() => {
    var __webpack_modules__ = {
        1807: module => {
            var canUseDOM = !!("undefined" !== typeof window && window.document && window.document.createElement);
            module.exports = canUseDOM;
        },
        9755: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * jQuery JavaScript Library v3.6.2
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-13T14:56Z
 */            (function(global, factory) {
                "use strict";
                if (true && "object" === typeof module.exports) module.exports = global.document ? factory(global, true) : function(w) {
                    if (!w.document) throw new Error("jQuery requires a window with a document");
                    return factory(w);
                }; else factory(global);
            })("undefined" !== typeof window ? window : this, (function(window, noGlobal) {
                "use strict";
                var arr = [];
                var getProto = Object.getPrototypeOf;
                var slice = arr.slice;
                var flat = arr.flat ? function(array) {
                    return arr.flat.call(array);
                } : function(array) {
                    return arr.concat.apply([], array);
                };
                var push = arr.push;
                var indexOf = arr.indexOf;
                var class2type = {};
                var toString = class2type.toString;
                var hasOwn = class2type.hasOwnProperty;
                var fnToString = hasOwn.toString;
                var ObjectFunctionString = fnToString.call(Object);
                var support = {};
                var isFunction = function isFunction(obj) {
                    return "function" === typeof obj && "number" !== typeof obj.nodeType && "function" !== typeof obj.item;
                };
                var isWindow = function isWindow(obj) {
                    return null != obj && obj === obj.window;
                };
                var document = window.document;
                var preservedScriptAttributes = {
                    type: true,
                    src: true,
                    nonce: true,
                    noModule: true
                };
                function DOMEval(code, node, doc) {
                    doc = doc || document;
                    var i, val, script = doc.createElement("script");
                    script.text = code;
                    if (node) for (i in preservedScriptAttributes) {
                        val = node[i] || node.getAttribute && node.getAttribute(i);
                        if (val) script.setAttribute(i, val);
                    }
                    doc.head.appendChild(script).parentNode.removeChild(script);
                }
                function toType(obj) {
                    if (null == obj) return obj + "";
                    return "object" === typeof obj || "function" === typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
                }
                var version = "3.6.2", jQuery = function(selector, context) {
                    return new jQuery.fn.init(selector, context);
                };
                jQuery.fn = jQuery.prototype = {
                    jquery: version,
                    constructor: jQuery,
                    length: 0,
                    toArray: function() {
                        return slice.call(this);
                    },
                    get: function(num) {
                        if (null == num) return slice.call(this);
                        return num < 0 ? this[num + this.length] : this[num];
                    },
                    pushStack: function(elems) {
                        var ret = jQuery.merge(this.constructor(), elems);
                        ret.prevObject = this;
                        return ret;
                    },
                    each: function(callback) {
                        return jQuery.each(this, callback);
                    },
                    map: function(callback) {
                        return this.pushStack(jQuery.map(this, (function(elem, i) {
                            return callback.call(elem, i, elem);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(slice.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return (i + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return i % 2;
                        })));
                    },
                    eq: function(i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push,
                    sort: arr.sort,
                    splice: arr.splice
                };
                jQuery.extend = jQuery.fn.extend = function() {
                    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                    if ("boolean" === typeof target) {
                        deep = target;
                        target = arguments[i] || {};
                        i++;
                    }
                    if ("object" !== typeof target && !isFunction(target)) target = {};
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for (;i < length; i++) if (null != (options = arguments[i])) for (name in options) {
                        copy = options[name];
                        if ("__proto__" === name || target === copy) continue;
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            src = target[name];
                            if (copyIsArray && !Array.isArray(src)) clone = []; else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {}; else clone = src;
                            copyIsArray = false;
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (void 0 !== copy) target[name] = copy;
                    }
                    return target;
                };
                jQuery.extend({
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    isReady: true,
                    error: function(msg) {
                        throw new Error(msg);
                    },
                    noop: function() {},
                    isPlainObject: function(obj) {
                        var proto, Ctor;
                        if (!obj || "[object Object]" !== toString.call(obj)) return false;
                        proto = getProto(obj);
                        if (!proto) return true;
                        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                        return "function" === typeof Ctor && fnToString.call(Ctor) === ObjectFunctionString;
                    },
                    isEmptyObject: function(obj) {
                        var name;
                        for (name in obj) return false;
                        return true;
                    },
                    globalEval: function(code, options, doc) {
                        DOMEval(code, {
                            nonce: options && options.nonce
                        }, doc);
                    },
                    each: function(obj, callback) {
                        var length, i = 0;
                        if (isArrayLike(obj)) {
                            length = obj.length;
                            for (;i < length; i++) if (false === callback.call(obj[i], i, obj[i])) break;
                        } else for (i in obj) if (false === callback.call(obj[i], i, obj[i])) break;
                        return obj;
                    },
                    makeArray: function(arr, results) {
                        var ret = results || [];
                        if (null != arr) if (isArrayLike(Object(arr))) jQuery.merge(ret, "string" === typeof arr ? [ arr ] : arr); else push.call(ret, arr);
                        return ret;
                    },
                    inArray: function(elem, arr, i) {
                        return null == arr ? -1 : indexOf.call(arr, elem, i);
                    },
                    merge: function(first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        for (;j < len; j++) first[i++] = second[j];
                        first.length = i;
                        return first;
                    },
                    grep: function(elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        for (;i < length; i++) {
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                        }
                        return matches;
                    },
                    map: function(elems, callback, arg) {
                        var length, value, i = 0, ret = [];
                        if (isArrayLike(elems)) {
                            length = elems.length;
                            for (;i < length; i++) {
                                value = callback(elems[i], i, arg);
                                if (null != value) ret.push(value);
                            }
                        } else for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (null != value) ret.push(value);
                        }
                        return flat(ret);
                    },
                    guid: 1,
                    support
                });
                if ("function" === typeof Symbol) jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                }));
                function isArrayLike(obj) {
                    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                    if (isFunction(obj) || isWindow(obj)) return false;
                    return "array" === type || 0 === length || "number" === typeof length && length > 0 && length - 1 in obj;
                }
                var Sizzle = 
                /*!
 * Sizzle CSS Selector Engine v2.3.8
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2022-11-16
 */
                function(window) {
                    var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                        if (a === b) hasDuplicate = true;
                        return 0;
                    }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                        var i = 0, len = list.length;
                        for (;i < len; i++) if (list[i] === elem) return i;
                        return -1;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        ID: new RegExp("^#(" + identifier + ")"),
                        CLASS: new RegExp("^\\.(" + identifier + ")"),
                        TAG: new RegExp("^(" + identifier + "|[*])"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 65536;
                        return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
                    }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                        if (asCodePoint) {
                            if ("\0" === ch) return "�";
                            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                        }
                        return "\\" + ch;
                    }, unloadHandler = function() {
                        setDocument();
                    }, inDisabledFieldset = addCombinator((function(elem) {
                        return true === elem.disabled && "fieldset" === elem.nodeName.toLowerCase();
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: arr.length ? function(target, els) {
                                pushNative.apply(target, slice.call(els));
                            } : function(target, els) {
                                var j = target.length, i = 0;
                                while (target[j++] = els[i++]) ;
                                target.length = j - 1;
                            }
                        };
                    }
                    function Sizzle(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                        results = results || [];
                        if ("string" !== typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                        if (!seed) {
                            setDocument(context);
                            context = context || document;
                            if (documentIsHTML) {
                                if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                                    if (9 === nodeType) if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else return results; else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else if (match[2]) {
                                    push.apply(results, context.getElementsByTagName(selector));
                                    return results;
                                } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                    push.apply(results, context.getElementsByClassName(m));
                                    return results;
                                }
                                if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== nodeType || "object" !== context.nodeName.toLowerCase())) {
                                    newSelector = selector;
                                    newContext = context;
                                    if (1 === nodeType && (rdescend.test(selector) || rcombinators.test(selector))) {
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                        if (newContext !== context || !support.scope) if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape); else context.setAttribute("id", nid = expando);
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while (i--) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                        newSelector = groups.join(",");
                                    }
                                    try {
                                        if (support.cssSupportsSelector && !CSS.supports("selector(" + newSelector + ")")) throw new Error;
                                        push.apply(results, newContext.querySelectorAll(newSelector));
                                        return results;
                                    } catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    } finally {
                                        if (nid === expando) context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }
                    function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            if (keys.push(key + " ") > Expr.cacheLength) delete cache[keys.shift()];
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    function assert(fn) {
                        var el = document.createElement("fieldset");
                        try {
                            return !!fn(el);
                        } catch (e) {
                            return false;
                        } finally {
                            if (el.parentNode) el.parentNode.removeChild(el);
                            el = null;
                        }
                    }
                    function addHandle(attrs, handler) {
                        var arr = attrs.split("|"), i = arr.length;
                        while (i--) Expr.attrHandle[arr[i]] = handler;
                    }
                    function siblingCheck(a, b) {
                        var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                        if (diff) return diff;
                        if (cur) while (cur = cur.nextSibling) if (cur === b) return -1;
                        return a ? 1 : -1;
                    }
                    function createInputPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && elem.type === type;
                        };
                    }
                    function createButtonPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return ("input" === name || "button" === name) && elem.type === type;
                        };
                    }
                    function createDisabledPseudo(disabled) {
                        return function(elem) {
                            if ("form" in elem) {
                                if (elem.parentNode && false === elem.disabled) {
                                    if ("label" in elem) if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled; else return elem.disabled === disabled;
                                    return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                                }
                                return elem.disabled === disabled;
                            } else if ("label" in elem) return elem.disabled === disabled;
                            return false;
                        };
                    }
                    function createPositionalPseudo(fn) {
                        return markFunction((function(argument) {
                            argument = +argument;
                            return markFunction((function(seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                            }));
                        }));
                    }
                    function testContext(context) {
                        return context && "undefined" !== typeof context.getElementsByTagName && context;
                    }
                    support = Sizzle.support = {};
                    isXML = Sizzle.isXML = function(elem) {
                        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
                        return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
                    };
                    setDocument = Sizzle.setDocument = function(node) {
                        var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                        if (doc == document || 9 !== doc.nodeType || !doc.documentElement) return document;
                        document = doc;
                        docElem = document.documentElement;
                        documentIsHTML = !isXML(document);
                        if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false); else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
                        support.scope = assert((function(el) {
                            docElem.appendChild(el).appendChild(document.createElement("div"));
                            return "undefined" !== typeof el.querySelectorAll && !el.querySelectorAll(":scope fieldset div").length;
                        }));
                        support.cssSupportsSelector = assert((function() {
                            return CSS.supports("selector(*)") && document.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))");
                        }));
                        support.attributes = assert((function(el) {
                            el.className = "i";
                            return !el.getAttribute("className");
                        }));
                        support.getElementsByTagName = assert((function(el) {
                            el.appendChild(document.createComment(""));
                            return !el.getElementsByTagName("*").length;
                        }));
                        support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                        support.getById = assert((function(el) {
                            docElem.appendChild(el).id = expando;
                            return !document.getElementsByName || !document.getElementsByName(expando).length;
                        }));
                        if (support.getById) {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if ("undefined" !== typeof context.getElementById && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [ elem ] : [];
                                }
                            };
                        } else {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = "undefined" !== typeof elem.getAttributeNode && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if ("undefined" !== typeof context.getElementById && documentIsHTML) {
                                    var node, i, elems, elem = context.getElementById(id);
                                    if (elem) {
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) return [ elem ];
                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while (elem = elems[i++]) {
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) return [ elem ];
                                        }
                                    }
                                    return [];
                                }
                            };
                        }
                        Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                            if ("undefined" !== typeof context.getElementsByTagName) return context.getElementsByTagName(tag); else if (support.qsa) return context.querySelectorAll(tag);
                        } : function(tag, context) {
                            var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                            if ("*" === tag) {
                                while (elem = results[i++]) if (1 === elem.nodeType) tmp.push(elem);
                                return tmp;
                            }
                            return results;
                        };
                        Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                            if ("undefined" !== typeof context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className);
                        };
                        rbuggyMatches = [];
                        rbuggyQSA = [];
                        if (support.qsa = rnative.test(document.querySelectorAll)) {
                            assert((function(el) {
                                var input;
                                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                                if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                                input = document.createElement("input");
                                input.setAttribute("name", "");
                                el.appendChild(input);
                                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                                el.querySelectorAll("\\\f");
                                rbuggyQSA.push("[\\r\\n\\f]");
                            }));
                            assert((function(el) {
                                el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                                var input = document.createElement("input");
                                input.setAttribute("type", "hidden");
                                el.appendChild(input).setAttribute("name", "D");
                                if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                if (2 !== el.querySelectorAll(":enabled").length) rbuggyQSA.push(":enabled", ":disabled");
                                docElem.appendChild(el).disabled = true;
                                if (2 !== el.querySelectorAll(":disabled").length) rbuggyQSA.push(":enabled", ":disabled");
                                el.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            }));
                        }
                        if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert((function(el) {
                            support.disconnectedMatch = matches.call(el, "*");
                            matches.call(el, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos);
                        }));
                        if (!support.cssSupportsSelector) rbuggyQSA.push(":has");
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                        hasCompare = rnative.test(docElem.compareDocumentPosition);
                        contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                            var adown = 9 === a.nodeType && a.documentElement || a, bup = b && b.parentNode;
                            return a === bup || !!(bup && 1 === bup.nodeType && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
                        } : function(a, b) {
                            if (b) while (b = b.parentNode) if (b === a) return true;
                            return false;
                        };
                        sortOrder = hasCompare ? function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) return compare;
                            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                            if (1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                                if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                                return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                            }
                            return 4 & compare ? -1 : 1;
                        } : function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                            if (!aup || !bup) return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; else if (aup === bup) return siblingCheck(a, b);
                            cur = a;
                            while (cur = cur.parentNode) ap.unshift(cur);
                            cur = b;
                            while (cur = cur.parentNode) bp.unshift(cur);
                            while (ap[i] === bp[i]) i++;
                            return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0;
                        };
                        return document;
                    };
                    Sizzle.matches = function(expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };
                    Sizzle.matchesSelector = function(elem, expr) {
                        setDocument(elem);
                        if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
                        } catch (e) {
                            nonnativeSelectorCache(expr, true);
                        }
                        return Sizzle(expr, document, null, [ elem ]).length > 0;
                    };
                    Sizzle.contains = function(context, elem) {
                        if ((context.ownerDocument || context) != document) setDocument(context);
                        return contains(context, elem);
                    };
                    Sizzle.attr = function(elem, name) {
                        if ((elem.ownerDocument || elem) != document) setDocument(elem);
                        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                        return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    };
                    Sizzle.escape = function(sel) {
                        return (sel + "").replace(rcssescape, fcssescape);
                    };
                    Sizzle.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    Sizzle.uniqueSort = function(results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
                            while (j--) results.splice(duplicates[j], 1);
                        }
                        sortInput = null;
                        return results;
                    };
                    getText = Sizzle.getText = function(elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) while (node = elem[i++]) ret += getText(node); else if (1 === nodeType || 9 === nodeType || 11 === nodeType) if ("string" === typeof elem.textContent) return elem.textContent; else for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem); else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
                        return ret;
                    };
                    Expr = Sizzle.selectors = {
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(match) {
                                match[1] = match[1].replace(runescape, funescape);
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if ("~=" === match[2]) match[3] = " " + match[3] + " ";
                                return match.slice(0, 4);
                            },
                            CHILD: function(match) {
                                match[1] = match[1].toLowerCase();
                                if ("nth" === match[1].slice(0, 3)) {
                                    if (!match[3]) Sizzle.error(match[0]);
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3]));
                                    match[5] = +(match[7] + match[8] || "odd" === match[3]);
                                } else if (match[3]) Sizzle.error(match[0]);
                                return match;
                            },
                            PSEUDO: function(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr["CHILD"].test(match[0])) return null;
                                if (match[3]) match[2] = match[4] || match[5] || ""; else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            TAG: function(nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return "*" === nodeNameSelector ? function() {
                                    return true;
                                } : function(elem) {
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                            },
                            CLASS: function(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, (function(elem) {
                                    return pattern.test("string" === typeof elem.className && elem.className || "undefined" !== typeof elem.getAttribute && elem.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(name, operator, check) {
                                return function(elem) {
                                    var result = Sizzle.attr(elem, name);
                                    if (null == result) return "!=" === operator;
                                    if (!operator) return true;
                                    result += "";
                                    return "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                                };
                            },
                            CHILD: function(type, what, _argument, first, last) {
                                var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4), ofType = "of-type" === what;
                                return 1 === first && 0 === last ? function(elem) {
                                    return !!elem.parentNode;
                                } : function(elem, _context, xml) {
                                    var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                    if (parent) {
                                        if (simple) {
                                            while (dir) {
                                                node = elem;
                                                while (node = node[dir]) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return false;
                                                start = dir = "only" === type && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [ forward ? parent.firstChild : parent.lastChild ];
                                        if (forward && useCache) {
                                            node = parent;
                                            outerCache = node[expando] || (node[expando] = {});
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (1 === node.nodeType && ++diff && node === elem) {
                                                uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        } else {
                                            if (useCache) {
                                                node = elem;
                                                outerCache = node[expando] || (node[expando] = {});
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                cache = uniqueCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex;
                                            }
                                            if (false === diff) while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [ dirruns, diff ];
                                                }
                                                if (node === elem) break;
                                            }
                                        }
                                        diff -= last;
                                        return diff === first || diff % first === 0 && diff / first >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(pseudo, argument) {
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                                if (fn[expando]) return fn(argument);
                                if (fn.length > 1) {
                                    args = [ pseudo, pseudo, "", argument ];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction((function(seed, matches) {
                                        var idx, matched = fn(seed, argument), i = matched.length;
                                        while (i--) {
                                            idx = indexOf(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    })) : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            not: markFunction((function(selector) {
                                var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                                return matcher[expando] ? markFunction((function(seed, matches, _context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                    while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                                })) : function(elem, _context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    input[0] = null;
                                    return !results.pop();
                                };
                            })),
                            has: markFunction((function(selector) {
                                return function(elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            })),
                            contains: markFunction((function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                                };
                            })),
                            lang: markFunction((function(lang) {
                                if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                                        }
                                    } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return false;
                                };
                            })),
                            target: function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            root: function(elem) {
                                return elem === docElem;
                            },
                            focus: function(elem) {
                                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            enabled: createDisabledPseudo(false),
                            disabled: createDisabledPseudo(true),
                            checked: function(elem) {
                                var nodeName = elem.nodeName.toLowerCase();
                                return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
                            },
                            selected: function(elem) {
                                if (elem.parentNode) elem.parentNode.selectedIndex;
                                return true === elem.selected;
                            },
                            empty: function(elem) {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
                                return true;
                            },
                            parent: function(elem) {
                                return !Expr.pseudos["empty"](elem);
                            },
                            header: function(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            input: function(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            button: function(elem) {
                                var name = elem.nodeName.toLowerCase();
                                return "input" === name && "button" === elem.type || "button" === name;
                            },
                            text: function(elem) {
                                var attr;
                                return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase());
                            },
                            first: createPositionalPseudo((function() {
                                return [ 0 ];
                            })),
                            last: createPositionalPseudo((function(_matchIndexes, length) {
                                return [ length - 1 ];
                            })),
                            eq: createPositionalPseudo((function(_matchIndexes, length, argument) {
                                return [ argument < 0 ? argument + length : argument ];
                            })),
                            even: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 0;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            odd: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 1;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            lt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument > length ? length : argument;
                                for (;--i >= 0; ) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            gt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (;++i < length; ) matchIndexes.push(i);
                                return matchIndexes;
                            }))
                        }
                    };
                    Expr.pseudos["nth"] = Expr.pseudos["eq"];
                    for (i in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    }) Expr.pseudos[i] = createInputPseudo(i);
                    for (i in {
                        submit: true,
                        reset: true
                    }) Expr.pseudos[i] = createButtonPseudo(i);
                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters;
                    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) {
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) soFar = soFar.slice(match[0].length) || soFar;
                                groups.push(tokens = []);
                            }
                            matched = false;
                            if (match = rcombinators.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            for (type in Expr.filter) if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            if (!matched) break;
                        }
                        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                    };
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for (;i < len; i++) selector += tokens[i].value;
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && "parentNode" === key, doneName = done++;
                        return combinator.first ? function(elem, context, xml) {
                            while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                            return false;
                        } : function(elem, context, xml) {
                            var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                            if (xml) {
                                while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) if (matcher(elem, context, xml)) return true;
                            } else while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem; else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; else {
                                    uniqueCache[key] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) return true;
                                }
                            }
                            return false;
                        };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function(elem, context, xml) {
                            var i = matchers.length;
                            while (i--) if (!matchers[i](elem, context, xml)) return false;
                            return true;
                        } : matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for (;i < len; i++) Sizzle(selector, contexts[i], results);
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map;
                        for (;i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) map.push(i);
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                        if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                        return markFunction((function(seed, results, context, xml) {
                            var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                            if (matcher) matcher(matcherIn, matcherOut, context, xml);
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                i = temp.length;
                                while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
                                        postFinder(null, matcherOut = [], temp, xml);
                                    }
                                    i = matcherOut.length;
                                    while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                                }
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) postFinder(null, results, matcherOut, xml); else push.apply(results, matcherOut);
                            }
                        }));
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator((function(elem) {
                            return elem === checkContext;
                        }), implicitRelative, true), matchAnyContext = addCombinator((function(elem) {
                            return indexOf(checkContext, elem) > -1;
                        }), implicitRelative, true), matchers = [ function(elem, context, xml) {
                            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            checkContext = null;
                            return ret;
                        } ];
                        for (;i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (;j < len; j++) if (Expr.relative[tokens[j].type]) break;
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: " " === tokens[i - 2].type ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                            if (outermost) outermostContext = context == document || context || outermost;
                            for (;i !== len && null != (elem = elems[i]); i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    if (!context && elem.ownerDocument != document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while (matcher = elementMatchers[j++]) if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                    if (outermost) dirruns = dirrunsUnique;
                                }
                                if (bySet) {
                                    if (elem = !matcher && elem) matchedCount--;
                                    if (seed) unmatched.push(elem);
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0) while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                    setMatched = condense(setMatched);
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    compile = Sizzle.compile = function(selector, match) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            if (!match) match = tokenize(selector);
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) setMatchers.push(cached); else elementMatchers.push(cached);
                            }
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            cached.selector = selector;
                        }
                        return cached;
                    };
                    select = Sizzle.select = function(selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = "function" === typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || [];
                        if (1 === match.length) {
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) return results; else if (compiled) context = context.parentNode;
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                if (Expr.relative[type = token.type]) break;
                                if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    };
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    support.detectDuplicates = !!hasDuplicate;
                    setDocument();
                    support.sortDetached = assert((function(el) {
                        return 1 & el.compareDocumentPosition(document.createElement("fieldset"));
                    }));
                    if (!assert((function(el) {
                        el.innerHTML = "<a href='#'></a>";
                        return "#" === el.firstChild.getAttribute("href");
                    }))) addHandle("type|href|height|width", (function(elem, name, isXML) {
                        if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
                    }));
                    if (!support.attributes || !assert((function(el) {
                        el.innerHTML = "<input/>";
                        el.firstChild.setAttribute("value", "");
                        return "" === el.firstChild.getAttribute("value");
                    }))) addHandle("value", (function(elem, _name, isXML) {
                        if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue;
                    }));
                    if (!assert((function(el) {
                        return null == el.getAttribute("disabled");
                    }))) addHandle(booleans, (function(elem, name, isXML) {
                        var val;
                        if (!isXML) return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }));
                    return Sizzle;
                }(window);
                jQuery.find = Sizzle;
                jQuery.expr = Sizzle.selectors;
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
                jQuery.text = Sizzle.getText;
                jQuery.isXMLDoc = Sizzle.isXML;
                jQuery.contains = Sizzle.contains;
                jQuery.escapeSelector = Sizzle.escape;
                var dir = function(elem, dir, until) {
                    var matched = [], truncate = void 0 !== until;
                    while ((elem = elem[dir]) && 9 !== elem.nodeType) if (1 === elem.nodeType) {
                        if (truncate && jQuery(elem).is(until)) break;
                        matched.push(elem);
                    }
                    return matched;
                };
                var siblings = function(n, elem) {
                    var matched = [];
                    for (;n; n = n.nextSibling) if (1 === n.nodeType && n !== elem) matched.push(n);
                    return matched;
                };
                var rneedsContext = jQuery.expr.match.needsContext;
                function nodeName(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                }
                var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function winnow(elements, qualifier, not) {
                    if (isFunction(qualifier)) return jQuery.grep(elements, (function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    }));
                    if (qualifier.nodeType) return jQuery.grep(elements, (function(elem) {
                        return elem === qualifier !== not;
                    }));
                    if ("string" !== typeof qualifier) return jQuery.grep(elements, (function(elem) {
                        return indexOf.call(qualifier, elem) > -1 !== not;
                    }));
                    return jQuery.filter(qualifier, elements, not);
                }
                jQuery.filter = function(expr, elems, not) {
                    var elem = elems[0];
                    if (not) expr = ":not(" + expr + ")";
                    if (1 === elems.length && 1 === elem.nodeType) return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
                    return jQuery.find.matches(expr, jQuery.grep(elems, (function(elem) {
                        return 1 === elem.nodeType;
                    })));
                };
                jQuery.fn.extend({
                    find: function(selector) {
                        var i, ret, len = this.length, self = this;
                        if ("string" !== typeof selector) return this.pushStack(jQuery(selector).filter((function() {
                            for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
                        })));
                        ret = this.pushStack([]);
                        for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function(selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function(selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function(selector) {
                        return !!winnow(this, "string" === typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                    }
                });
                var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
                    var match, elem;
                    if (!selector) return this;
                    root = root || rootjQuery;
                    if ("string" === typeof selector) {
                        if ("<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3) match = [ null, selector, null ]; else match = rquickExpr.exec(selector);
                        if (match && (match[1] || !context)) if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (isFunction(this[match])) this[match](context[match]); else this.attr(match, context[match]);
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem) {
                                this[0] = elem;
                                this.length = 1;
                            }
                            return this;
                        } else if (!context || context.jquery) return (context || root).find(selector); else return this.constructor(context).find(selector);
                    } else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;
                    } else if (isFunction(selector)) return void 0 !== root.ready ? root.ready(selector) : selector(jQuery);
                    return jQuery.makeArray(selector, this);
                };
                init.prototype = jQuery.fn;
                rootjQuery = jQuery(document);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.fn.extend({
                    has: function(target) {
                        var targets = jQuery(target, this), l = targets.length;
                        return this.filter((function() {
                            var i = 0;
                            for (;i < l; i++) if (jQuery.contains(this, targets[i])) return true;
                        }));
                    },
                    closest: function(selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], targets = "string" !== typeof selectors && jQuery(selectors);
                        if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                    },
                    index: function(elem) {
                        if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        if ("string" === typeof elem) return indexOf.call(jQuery(elem), this[0]);
                        return indexOf.call(this, elem.jquery ? elem[0] : elem);
                    },
                    add: function(selector, context) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function(selector) {
                        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    while ((cur = cur[dir]) && 1 !== cur.nodeType) ;
                    return cur;
                }
                jQuery.each({
                    parent: function(elem) {
                        var parent = elem.parentNode;
                        return parent && 11 !== parent.nodeType ? parent : null;
                    },
                    parents: function(elem) {
                        return dir(elem, "parentNode");
                    },
                    parentsUntil: function(elem, _i, until) {
                        return dir(elem, "parentNode", until);
                    },
                    next: function(elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function(elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function(elem) {
                        return dir(elem, "nextSibling");
                    },
                    prevAll: function(elem) {
                        return dir(elem, "previousSibling");
                    },
                    nextUntil: function(elem, _i, until) {
                        return dir(elem, "nextSibling", until);
                    },
                    prevUntil: function(elem, _i, until) {
                        return dir(elem, "previousSibling", until);
                    },
                    siblings: function(elem) {
                        return siblings((elem.parentNode || {}).firstChild, elem);
                    },
                    children: function(elem) {
                        return siblings(elem.firstChild);
                    },
                    contents: function(elem) {
                        if (null != elem.contentDocument && getProto(elem.contentDocument)) return elem.contentDocument;
                        if (nodeName(elem, "template")) elem = elem.content || elem;
                        return jQuery.merge([], elem.childNodes);
                    }
                }, (function(name, fn) {
                    jQuery.fn[name] = function(until, selector) {
                        var matched = jQuery.map(this, fn, until);
                        if ("Until" !== name.slice(-5)) selector = until;
                        if (selector && "string" === typeof selector) matched = jQuery.filter(selector, matched);
                        if (this.length > 1) {
                            if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                            if (rparentsprev.test(name)) matched.reverse();
                        }
                        return this.pushStack(matched);
                    };
                }));
                var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
                function createOptions(options) {
                    var object = {};
                    jQuery.each(options.match(rnothtmlwhite) || [], (function(_, flag) {
                        object[flag] = true;
                    }));
                    return object;
                }
                jQuery.Callbacks = function(options) {
                    options = "string" === typeof options ? createOptions(options) : jQuery.extend({}, options);
                    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                        locked = locked || options.once;
                        fired = firing = true;
                        for (;queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) if (false === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse) {
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                        if (!options.memory) memory = false;
                        firing = false;
                        if (locked) if (memory) list = []; else list = "";
                    }, self = {
                        add: function() {
                            if (list) {
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }
                                (function add(args) {
                                    jQuery.each(args, (function(_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) list.push(arg);
                                        } else if (arg && arg.length && "string" !== toType(arg)) add(arg);
                                    }));
                                })(arguments);
                                if (memory && !firing) fire();
                            }
                            return this;
                        },
                        remove: function() {
                            jQuery.each(arguments, (function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    if (index <= firingIndex) firingIndex--;
                                }
                            }));
                            return this;
                        },
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        },
                        empty: function() {
                            if (list) list = [];
                            return this;
                        },
                        disable: function() {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },
                        lock: function() {
                            locked = queue = [];
                            if (!memory && !firing) list = memory = "";
                            return this;
                        },
                        locked: function() {
                            return !!locked;
                        },
                        fireWith: function(context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [ context, args.slice ? args.slice() : args ];
                                queue.push(args);
                                if (!firing) fire();
                            }
                            return this;
                        },
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        fired: function() {
                            return !!fired;
                        }
                    };
                    return self;
                };
                function Identity(v) {
                    return v;
                }
                function Thrower(ex) {
                    throw ex;
                }
                function adoptValue(value, resolve, reject, noValue) {
                    var method;
                    try {
                        if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject); else if (value && isFunction(method = value.then)) method.call(value, resolve, reject); else resolve.apply(void 0, [ value ].slice(noValue));
                    } catch (value) {
                        reject.apply(void 0, [ value ]);
                    }
                }
                jQuery.extend({
                    Deferred: function(func) {
                        var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            catch: function(fn) {
                                return promise.then(null, fn);
                            },
                            pipe: function() {
                                var fns = arguments;
                                return jQuery.Deferred((function(newDefer) {
                                    jQuery.each(tuples, (function(_i, tuple) {
                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                        deferred[tuple[1]]((function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject); else newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                        }));
                                    }));
                                    fns = null;
                                })).promise();
                            },
                            then: function(onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;
                                function resolve(depth, deferred, handler, special) {
                                    return function() {
                                        var that = this, args = arguments, mightThrow = function() {
                                            var returned, then;
                                            if (depth < maxDepth) return;
                                            returned = handler.apply(that, args);
                                            if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            then = returned && ("object" === typeof returned || "function" === typeof returned) && returned.then;
                                            if (isFunction(then)) if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); else {
                                                maxDepth++;
                                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                            } else {
                                                if (handler !== Identity) {
                                                    that = void 0;
                                                    args = [ returned ];
                                                }
                                                (special || deferred.resolveWith)(that, args);
                                            }
                                        }, process = special ? mightThrow : function() {
                                            try {
                                                mightThrow();
                                            } catch (e) {
                                                if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                                if (depth + 1 >= maxDepth) {
                                                    if (handler !== Thrower) {
                                                        that = void 0;
                                                        args = [ e ];
                                                    }
                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };
                                        if (depth) process(); else {
                                            if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                            window.setTimeout(process);
                                        }
                                    };
                                }
                                return jQuery.Deferred((function(newDefer) {
                                    tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                                    tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                                    tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                                })).promise();
                            },
                            promise: function(obj) {
                                return null != obj ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred = {};
                        jQuery.each(tuples, (function(i, tuple) {
                            var list = tuple[2], stateString = tuple[5];
                            promise[tuple[1]] = list.add;
                            if (stateString) list.add((function() {
                                state = stateString;
                            }), tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                            list.add(tuple[3].fire);
                            deferred[tuple[0]] = function() {
                                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                                return this;
                            };
                            deferred[tuple[0] + "With"] = list.fireWith;
                        }));
                        promise.promise(deferred);
                        if (func) func.call(deferred, deferred);
                        return deferred;
                    },
                    when: function(singleValue) {
                        var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i) {
                            return function(value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                            };
                        };
                        if (remaining <= 1) {
                            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                            if ("pending" === primary.state() || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
                        }
                        while (i--) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                        return primary.promise();
                    }
                });
                var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function(error, stack) {
                    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
                };
                jQuery.readyException = function(error) {
                    window.setTimeout((function() {
                        throw error;
                    }));
                };
                var readyList = jQuery.Deferred();
                jQuery.fn.ready = function(fn) {
                    readyList.then(fn).catch((function(error) {
                        jQuery.readyException(error);
                    }));
                    return this;
                };
                jQuery.extend({
                    isReady: false,
                    readyWait: 1,
                    ready: function(wait) {
                        if (true === wait ? --jQuery.readyWait : jQuery.isReady) return;
                        jQuery.isReady = true;
                        if (true !== wait && --jQuery.readyWait > 0) return;
                        readyList.resolveWith(document, [ jQuery ]);
                    }
                });
                jQuery.ready.then = readyList.then;
                function completed() {
                    document.removeEventListener("DOMContentLoaded", completed);
                    window.removeEventListener("load", completed);
                    jQuery.ready();
                }
                if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) window.setTimeout(jQuery.ready); else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed);
                }
                var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0, len = elems.length, bulk = null == key;
                    if ("object" === toType(key)) {
                        chainable = true;
                        for (i in key) access(elems, fn, i, key[i], true, emptyGet, raw);
                    } else if (void 0 !== value) {
                        chainable = true;
                        if (!isFunction(value)) raw = true;
                        if (bulk) if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            bulk = fn;
                            fn = function(elem, _key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                        if (fn) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                    if (chainable) return elems;
                    if (bulk) return fn.call(elems);
                    return len ? fn(elems[0], key) : emptyGet;
                };
                var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
                function fcamelCase(_all, letter) {
                    return letter.toUpperCase();
                }
                function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                }
                var acceptData = function(owner) {
                    return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
                };
                function Data() {
                    this.expando = jQuery.expando + Data.uid++;
                }
                Data.uid = 1;
                Data.prototype = {
                    cache: function(owner) {
                        var value = owner[this.expando];
                        if (!value) {
                            value = {};
                            if (acceptData(owner)) if (owner.nodeType) owner[this.expando] = value; else Object.defineProperty(owner, this.expando, {
                                value,
                                configurable: true
                            });
                        }
                        return value;
                    },
                    set: function(owner, data, value) {
                        var prop, cache = this.cache(owner);
                        if ("string" === typeof data) cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
                        return cache;
                    },
                    get: function(owner, key) {
                        return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function(owner, key, value) {
                        if (void 0 === key || key && "string" === typeof key && void 0 === value) return this.get(owner, key);
                        this.set(owner, key, value);
                        return void 0 !== value ? value : key;
                    },
                    remove: function(owner, key) {
                        var i, cache = owner[this.expando];
                        if (void 0 === cache) return;
                        if (void 0 !== key) {
                            if (Array.isArray(key)) key = key.map(camelCase); else {
                                key = camelCase(key);
                                key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                            }
                            i = key.length;
                            while (i--) delete cache[key[i]];
                        }
                        if (void 0 === key || jQuery.isEmptyObject(cache)) if (owner.nodeType) owner[this.expando] = void 0; else delete owner[this.expando];
                    },
                    hasData: function(owner) {
                        var cache = owner[this.expando];
                        return void 0 !== cache && !jQuery.isEmptyObject(cache);
                    }
                };
                var dataPriv = new Data;
                var dataUser = new Data;
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
                function getData(data) {
                    if ("true" === data) return true;
                    if ("false" === data) return false;
                    if ("null" === data) return null;
                    if (data === +data + "") return +data;
                    if (rbrace.test(data)) return JSON.parse(data);
                    return data;
                }
                function dataAttr(elem, key, data) {
                    var name;
                    if (void 0 === data && 1 === elem.nodeType) {
                        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                        data = elem.getAttribute(name);
                        if ("string" === typeof data) {
                            try {
                                data = getData(data);
                            } catch (e) {}
                            dataUser.set(elem, key, data);
                        } else data = void 0;
                    }
                    return data;
                }
                jQuery.extend({
                    hasData: function(elem) {
                        return dataUser.hasData(elem) || dataPriv.hasData(elem);
                    },
                    data: function(elem, name, data) {
                        return dataUser.access(elem, name, data);
                    },
                    removeData: function(elem, name) {
                        dataUser.remove(elem, name);
                    },
                    _data: function(elem, name, data) {
                        return dataPriv.access(elem, name, data);
                    },
                    _removeData: function(elem, name) {
                        dataPriv.remove(elem, name);
                    }
                });
                jQuery.fn.extend({
                    data: function(key, value) {
                        var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                        if (void 0 === key) {
                            if (this.length) {
                                data = dataUser.get(elem);
                                if (1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs")) {
                                    i = attrs.length;
                                    while (i--) if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (0 === name.indexOf("data-")) {
                                            name = camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                    dataPriv.set(elem, "hasDataAttrs", true);
                                }
                            }
                            return data;
                        }
                        if ("object" === typeof key) return this.each((function() {
                            dataUser.set(this, key);
                        }));
                        return access(this, (function(value) {
                            var data;
                            if (elem && void 0 === value) {
                                data = dataUser.get(elem, key);
                                if (void 0 !== data) return data;
                                data = dataAttr(elem, key);
                                if (void 0 !== data) return data;
                                return;
                            }
                            this.each((function() {
                                dataUser.set(this, key, value);
                            }));
                        }), null, value, arguments.length > 1, null, true);
                    },
                    removeData: function(key) {
                        return this.each((function() {
                            dataUser.remove(this, key);
                        }));
                    }
                });
                jQuery.extend({
                    queue: function(elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = dataPriv.get(elem, type);
                            if (data) if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data)); else queue.push(data);
                            return queue || [];
                        }
                    },
                    dequeue: function(elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                            jQuery.dequeue(elem, type);
                        };
                        if ("inprogress" === fn) {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            if ("fx" === type) queue.unshift("inprogress");
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) hooks.empty.fire();
                    },
                    _queueHooks: function(elem, type) {
                        var key = type + "queueHooks";
                        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                            empty: jQuery.Callbacks("once memory").add((function() {
                                dataPriv.remove(elem, [ type + "queue", key ]);
                            }))
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        if ("string" !== typeof type) {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) return jQuery.queue(this[0], type);
                        return void 0 === data ? this : this.each((function() {
                            var queue = jQuery.queue(this, type, data);
                            jQuery._queueHooks(this, type);
                            if ("fx" === type && "inprogress" !== queue[0]) jQuery.dequeue(this, type);
                        }));
                    },
                    dequeue: function(type) {
                        return this.each((function() {
                            jQuery.dequeue(this, type);
                        }));
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", []);
                    },
                    promise: function(type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                            if (!--count) defer.resolveWith(elements, [ elements ]);
                        };
                        if ("string" !== typeof type) {
                            obj = type;
                            type = void 0;
                        }
                        type = type || "fx";
                        while (i--) {
                            tmp = dataPriv.get(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
                var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
                var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
                var documentElement = document.documentElement;
                var isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                }, composed = {
                    composed: true
                };
                if (documentElement.getRootNode) isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
                };
                var isHiddenWithinTree = function(elem, el) {
                    elem = el || elem;
                    return "none" === elem.style.display || "" === elem.style.display && isAttached(elem) && "none" === jQuery.css(elem, "display");
                };
                function adjustCSS(elem, prop, valueParts, tween) {
                    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                        return tween.cur();
                    } : function() {
                        return jQuery.css(elem, prop, "");
                    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                    if (initialInUnit && initialInUnit[3] !== unit) {
                        initial /= 2;
                        unit = unit || initialInUnit[3];
                        initialInUnit = +initial || 1;
                        while (maxIterations--) {
                            jQuery.style(elem, prop, initialInUnit + unit);
                            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) maxIterations = 0;
                            initialInUnit /= scale;
                        }
                        initialInUnit *= 2;
                        jQuery.style(elem, prop, initialInUnit + unit);
                        valueParts = valueParts || [];
                    }
                    if (valueParts) {
                        initialInUnit = +initialInUnit || +initial || 0;
                        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                        if (tween) {
                            tween.unit = unit;
                            tween.start = initialInUnit;
                            tween.end = adjusted;
                        }
                    }
                    return adjusted;
                }
                var defaultDisplayMap = {};
                function getDefaultDisplay(elem) {
                    var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                    if (display) return display;
                    temp = doc.body.appendChild(doc.createElement(nodeName));
                    display = jQuery.css(temp, "display");
                    temp.parentNode.removeChild(temp);
                    if ("none" === display) display = "block";
                    defaultDisplayMap[nodeName] = display;
                    return display;
                }
                function showHide(elements, show) {
                    var display, elem, values = [], index = 0, length = elements.length;
                    for (;index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) continue;
                        display = elem.style.display;
                        if (show) {
                            if ("none" === display) {
                                values[index] = dataPriv.get(elem, "display") || null;
                                if (!values[index]) elem.style.display = "";
                            }
                            if ("" === elem.style.display && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
                        } else if ("none" !== display) {
                            values[index] = "none";
                            dataPriv.set(elem, "display", display);
                        }
                    }
                    for (index = 0; index < length; index++) if (null != values[index]) elements[index].style.display = values[index];
                    return elements;
                }
                jQuery.fn.extend({
                    show: function() {
                        return showHide(this, true);
                    },
                    hide: function() {
                        return showHide(this);
                    },
                    toggle: function(state) {
                        if ("boolean" === typeof state) return state ? this.show() : this.hide();
                        return this.each((function() {
                            if (isHiddenWithinTree(this)) jQuery(this).show(); else jQuery(this).hide();
                        }));
                    }
                });
                var rcheckableType = /^(?:checkbox|radio)$/i;
                var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
                var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
                (function() {
                    var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("checked", "checked");
                    input.setAttribute("name", "t");
                    div.appendChild(input);
                    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    div.innerHTML = "<textarea>x</textarea>";
                    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    div.innerHTML = "<option></option>";
                    support.option = !!div.lastChild;
                })();
                var wrapMap = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                if (!support.option) wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
                function getAll(context, tag) {
                    var ret;
                    if ("undefined" !== typeof context.getElementsByTagName) ret = context.getElementsByTagName(tag || "*"); else if ("undefined" !== typeof context.querySelectorAll) ret = context.querySelectorAll(tag || "*"); else ret = [];
                    if (void 0 === tag || tag && nodeName(context, tag)) return jQuery.merge([ context ], ret);
                    return ret;
                }
                function setGlobalEval(elems, refElements) {
                    var i = 0, l = elems.length;
                    for (;i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                }
                var rhtml = /<|&#?\w+;/;
                function buildFragment(elems, context, scripts, selection, ignored) {
                    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                    for (;i < l; i++) {
                        elem = elems[i];
                        if (elem || 0 === elem) if ("object" === toType(elem)) jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                            tmp = tmp || fragment.appendChild(context.createElement("div"));
                            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                            j = wrap[0];
                            while (j--) tmp = tmp.lastChild;
                            jQuery.merge(nodes, tmp.childNodes);
                            tmp = fragment.firstChild;
                            tmp.textContent = "";
                        }
                    }
                    fragment.textContent = "";
                    i = 0;
                    while (elem = nodes[i++]) {
                        if (selection && jQuery.inArray(elem, selection) > -1) {
                            if (ignored) ignored.push(elem);
                            continue;
                        }
                        attached = isAttached(elem);
                        tmp = getAll(fragment.appendChild(elem), "script");
                        if (attached) setGlobalEval(tmp);
                        if (scripts) {
                            j = 0;
                            while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
                        }
                    }
                    return fragment;
                }
                var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                function expectSync(elem, type) {
                    return elem === safeActiveElement() === ("focus" === type);
                }
                function safeActiveElement() {
                    try {
                        return document.activeElement;
                    } catch (err) {}
                }
                function on(elem, types, selector, data, fn, one) {
                    var origFn, type;
                    if ("object" === typeof types) {
                        if ("string" !== typeof selector) {
                            data = data || selector;
                            selector = void 0;
                        }
                        for (type in types) on(elem, type, selector, data, types[type], one);
                        return elem;
                    }
                    if (null == data && null == fn) {
                        fn = selector;
                        data = selector = void 0;
                    } else if (null == fn) if ("string" === typeof selector) {
                        fn = data;
                        data = void 0;
                    } else {
                        fn = data;
                        data = selector;
                        selector = void 0;
                    }
                    if (false === fn) fn = returnFalse; else if (!fn) return elem;
                    if (1 === one) {
                        origFn = fn;
                        fn = function(event) {
                            jQuery().off(event);
                            return origFn.apply(this, arguments);
                        };
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                    }
                    return elem.each((function() {
                        jQuery.event.add(this, types, fn, data, selector);
                    }));
                }
                jQuery.event = {
                    global: {},
                    add: function(elem, types, handler, data, selector) {
                        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                        if (!acceptData(elem)) return;
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        if (selector) jQuery.find.matchesSelector(documentElement, selector);
                        if (!handler.guid) handler.guid = jQuery.guid++;
                        if (!(events = elemData.events)) events = elemData.events = Object.create(null);
                        if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                            return "undefined" !== typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                        };
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) continue;
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            special = jQuery.event.special[type] || {};
                            handleObj = jQuery.extend({
                                type,
                                origType,
                                data,
                                handler,
                                guid: handler.guid,
                                selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                if (!special.setup || false === special.setup.call(elem, data, namespaces, eventHandle)) if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                            }
                            if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj); else handlers.push(handleObj);
                            jQuery.event.global[type] = true;
                        }
                    },
                    remove: function(elem, types, handler, selector, mappedTypes) {
                        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                        if (!elemData || !(events = elemData.events)) return;
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) {
                                for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                continue;
                            }
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            origCount = j = handlers.length;
                            while (j--) {
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || "**" === selector && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) handlers.delegateCount--;
                                    if (special.remove) special.remove.call(elem, handleObj);
                                }
                            }
                            if (origCount && !handlers.length) {
                                if (!special.teardown || false === special.teardown.call(elem, namespaces, elemData.handle)) jQuery.removeEvent(elem, type, elemData.handle);
                                delete events[type];
                            }
                        }
                        if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
                    },
                    dispatch: function(nativeEvent) {
                        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                        args[0] = event;
                        for (i = 1; i < arguments.length; i++) args[i] = arguments[i];
                        event.delegateTarget = this;
                        if (special.preDispatch && false === special.preDispatch.call(this, event)) return;
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        i = 0;
                        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                            event.currentTarget = matched.elem;
                            j = 0;
                            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.rnamespace || false === handleObj.namespace || event.rnamespace.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (void 0 !== ret) if (false === (event.result = ret)) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                        if (special.postDispatch) special.postDispatch.call(this, event);
                        return event.result;
                    },
                    handlers: function(event, handlers) {
                        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1)) for (;cur !== this; cur = cur.parentNode || this) if (1 === cur.nodeType && !("click" === event.type && true === cur.disabled)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (void 0 === matchedSelectors[sel]) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                                if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                            }
                            if (matchedHandlers.length) handlerQueue.push({
                                elem: cur,
                                handlers: matchedHandlers
                            });
                        }
                        cur = this;
                        if (delegateCount < handlers.length) handlerQueue.push({
                            elem: cur,
                            handlers: handlers.slice(delegateCount)
                        });
                        return handlerQueue;
                    },
                    addProp: function(name, hook) {
                        Object.defineProperty(jQuery.Event.prototype, name, {
                            enumerable: true,
                            configurable: true,
                            get: isFunction(hook) ? function() {
                                if (this.originalEvent) return hook(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[name];
                            },
                            set: function(value) {
                                Object.defineProperty(this, name, {
                                    enumerable: true,
                                    configurable: true,
                                    writable: true,
                                    value
                                });
                            }
                        });
                    },
                    fix: function(originalEvent) {
                        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                    },
                    special: {
                        load: {
                            noBubble: true
                        },
                        click: {
                            setup: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click", returnTrue);
                                return false;
                            },
                            trigger: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                                return true;
                            },
                            _default: function(event) {
                                var target = event.target;
                                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(event) {
                                if (void 0 !== event.result && event.originalEvent) event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                };
                function leverageNative(el, type, expectSync) {
                    if (!expectSync) {
                        if (void 0 === dataPriv.get(el, type)) jQuery.event.add(el, type, returnTrue);
                        return;
                    }
                    dataPriv.set(el, type, false);
                    jQuery.event.add(el, type, {
                        namespace: false,
                        handler: function(event) {
                            var notAsync, result, saved = dataPriv.get(this, type);
                            if (1 & event.isTrigger && this[type]) {
                                if (!saved.length) {
                                    saved = slice.call(arguments);
                                    dataPriv.set(this, type, saved);
                                    notAsync = expectSync(this, type);
                                    this[type]();
                                    result = dataPriv.get(this, type);
                                    if (saved !== result || notAsync) dataPriv.set(this, type, false); else result = {};
                                    if (saved !== result) {
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        return result && result.value;
                                    }
                                } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                            } else if (saved.length) {
                                dataPriv.set(this, type, {
                                    value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                                });
                                event.stopImmediatePropagation();
                            }
                        }
                    });
                }
                jQuery.removeEvent = function(elem, type, handle) {
                    if (elem.removeEventListener) elem.removeEventListener(type, handle);
                };
                jQuery.Event = function(src, props) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? returnTrue : returnFalse;
                        this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
                        this.currentTarget = src.currentTarget;
                        this.relatedTarget = src.relatedTarget;
                    } else this.type = src;
                    if (props) jQuery.extend(this, props);
                    this.timeStamp = src && src.timeStamp || Date.now();
                    this[jQuery.expando] = true;
                };
                jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: false,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (e && !this.isSimulated) e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopImmediatePropagation();
                        this.stopPropagation();
                    }
                };
                jQuery.each({
                    altKey: true,
                    bubbles: true,
                    cancelable: true,
                    changedTouches: true,
                    ctrlKey: true,
                    detail: true,
                    eventPhase: true,
                    metaKey: true,
                    pageX: true,
                    pageY: true,
                    shiftKey: true,
                    view: true,
                    char: true,
                    code: true,
                    charCode: true,
                    key: true,
                    keyCode: true,
                    button: true,
                    buttons: true,
                    clientX: true,
                    clientY: true,
                    offsetX: true,
                    offsetY: true,
                    pointerId: true,
                    pointerType: true,
                    screenX: true,
                    screenY: true,
                    targetTouches: true,
                    toElement: true,
                    touches: true,
                    which: true
                }, jQuery.event.addProp);
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(type, delegateType) {
                    jQuery.event.special[type] = {
                        setup: function() {
                            leverageNative(this, type, expectSync);
                            return false;
                        },
                        trigger: function() {
                            leverageNative(this, type);
                            return true;
                        },
                        _default: function(event) {
                            return dataPriv.get(event.target, type);
                        },
                        delegateType
                    };
                }));
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function(event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            if (!related || related !== target && !jQuery.contains(target, related)) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                }));
                jQuery.fn.extend({
                    on: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function(types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if ("object" === typeof types) {
                            for (type in types) this.off(type, selector, types[type]);
                            return this;
                        }
                        if (false === selector || "function" === typeof selector) {
                            fn = selector;
                            selector = void 0;
                        }
                        if (false === fn) fn = returnFalse;
                        return this.each((function() {
                            jQuery.event.remove(this, types, fn, selector);
                        }));
                    }
                });
                var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function manipulationTarget(elem, content) {
                    if (nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
                    return elem;
                }
                function disableScript(elem) {
                    elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    if ("true/" === (elem.type || "").slice(0, 5)) elem.type = elem.type.slice(5); else elem.removeAttribute("type");
                    return elem;
                }
                function cloneCopyEvent(src, dest) {
                    var i, l, type, pdataOld, udataOld, udataCur, events;
                    if (1 !== dest.nodeType) return;
                    if (dataPriv.hasData(src)) {
                        pdataOld = dataPriv.get(src);
                        events = pdataOld.events;
                        if (events) {
                            dataPriv.remove(dest, "handle events");
                            for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                    if (dataUser.hasData(src)) {
                        udataOld = dataUser.access(src);
                        udataCur = jQuery.extend({}, udataOld);
                        dataUser.set(dest, udataCur);
                    }
                }
                function fixInput(src, dest) {
                    var nodeName = dest.nodeName.toLowerCase();
                    if ("input" === nodeName && rcheckableType.test(src.type)) dest.checked = src.checked; else if ("input" === nodeName || "textarea" === nodeName) dest.defaultValue = src.defaultValue;
                }
                function domManip(collection, args, callback, ignored) {
                    args = flat(args);
                    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                    if (valueIsFunction || l > 1 && "string" === typeof value && !support.checkClone && rchecked.test(value)) return collection.each((function(index) {
                        var self = collection.eq(index);
                        if (valueIsFunction) args[0] = value.call(this, index, self.html());
                        domManip(self, args, callback, ignored);
                    }));
                    if (l) {
                        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                        first = fragment.firstChild;
                        if (1 === fragment.childNodes.length) fragment = first;
                        if (first || ignored) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            for (;i < l; i++) {
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
                                }
                                callback.call(collection[i], node, i);
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                jQuery.map(scripts, restoreScript);
                                for (i = 0; i < hasScripts; i++) {
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) if (node.src && "module" !== (node.type || "").toLowerCase()) {
                                        if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                            nonce: node.nonce || node.getAttribute("nonce")
                                        }, doc);
                                    } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                }
                            }
                        }
                    }
                    return collection;
                }
                function remove(elem, selector, keepData) {
                    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                    for (;null != (node = nodes[i]); i++) {
                        if (!keepData && 1 === node.nodeType) jQuery.cleanData(getAll(node));
                        if (node.parentNode) {
                            if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                            node.parentNode.removeChild(node);
                        }
                    }
                    return elem;
                }
                jQuery.extend({
                    htmlPrefilter: function(html) {
                        return html;
                    },
                    clone: function(elem, dataAndEvents, deepDataAndEvents) {
                        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                        if (!support.noCloneChecked && (1 === elem.nodeType || 11 === elem.nodeType) && !jQuery.isXMLDoc(elem)) {
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for (i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                        }
                        if (dataAndEvents) if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                        } else cloneCopyEvent(elem, clone);
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        return clone;
                    },
                    cleanData: function(elems) {
                        var data, elem, type, special = jQuery.event.special, i = 0;
                        for (;void 0 !== (elem = elems[i]); i++) if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type); else jQuery.removeEvent(elem, type, data.handle);
                                elem[dataPriv.expando] = void 0;
                            }
                            if (elem[dataUser.expando]) elem[dataUser.expando] = void 0;
                        }
                    }
                });
                jQuery.fn.extend({
                    detach: function(selector) {
                        return remove(this, selector, true);
                    },
                    remove: function(selector) {
                        return remove(this, selector);
                    },
                    text: function(value) {
                        return access(this, (function(value) {
                            return void 0 === value ? jQuery.text(this) : this.empty().each((function() {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = value;
                            }));
                        }), null, value, arguments.length);
                    },
                    append: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        }));
                    },
                    prepend: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this);
                        }));
                    },
                    after: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        var elem, i = 0;
                        for (;null != (elem = this[i]); i++) if (1 === elem.nodeType) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.textContent = "";
                        }
                        return this;
                    },
                    clone: function(dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = null == dataAndEvents ? false : dataAndEvents;
                        deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents;
                        return this.map((function() {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        }));
                    },
                    html: function(value) {
                        return access(this, (function(value) {
                            var elem = this[0] || {}, i = 0, l = this.length;
                            if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                            if ("string" === typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                                value = jQuery.htmlPrefilter(value);
                                try {
                                    for (;i < l; i++) {
                                        elem = this[i] || {};
                                        if (1 === elem.nodeType) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                } catch (e) {}
                            }
                            if (elem) this.empty().append(value);
                        }), null, value, arguments.length);
                    },
                    replaceWith: function() {
                        var ignored = [];
                        return domManip(this, arguments, (function(elem) {
                            var parent = this.parentNode;
                            if (jQuery.inArray(this, ignored) < 0) {
                                jQuery.cleanData(getAll(this));
                                if (parent) parent.replaceChild(elem, this);
                            }
                        }), ignored);
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(name, original) {
                    jQuery.fn[name] = function(selector) {
                        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                        for (;i <= last; i++) {
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            push.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                }));
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var rcustomProp = /^--/;
                var getStyles = function(elem) {
                    var view = elem.ownerDocument.defaultView;
                    if (!view || !view.opener) view = window;
                    return view.getComputedStyle(elem);
                };
                var swap = function(elem, options, callback) {
                    var ret, name, old = {};
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.call(elem);
                    for (name in options) elem.style[name] = old[name];
                    return ret;
                };
                var rboxStyle = new RegExp(cssExpand.join("|"), "i");
                var whitespace = "[\\x20\\t\\r\\n\\f]";
                var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
                (function() {
                    function computeStyleTests() {
                        if (!div) return;
                        container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                        documentElement.appendChild(container).appendChild(div);
                        var divStyle = window.getComputedStyle(div);
                        pixelPositionVal = "1%" !== divStyle.top;
                        reliableMarginLeftVal = 12 === roundPixelMeasures(divStyle.marginLeft);
                        div.style.right = "60%";
                        pixelBoxStylesVal = 36 === roundPixelMeasures(divStyle.right);
                        boxSizingReliableVal = 36 === roundPixelMeasures(divStyle.width);
                        div.style.position = "absolute";
                        scrollboxSizeVal = 12 === roundPixelMeasures(div.offsetWidth / 3);
                        documentElement.removeChild(container);
                        div = null;
                    }
                    function roundPixelMeasures(measure) {
                        return Math.round(parseFloat(measure));
                    }
                    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                    if (!div.style) return;
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support.clearCloneStyle = "content-box" === div.style.backgroundClip;
                    jQuery.extend(support, {
                        boxSizingReliable: function() {
                            computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelBoxStyles: function() {
                            computeStyleTests();
                            return pixelBoxStylesVal;
                        },
                        pixelPosition: function() {
                            computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginLeft: function() {
                            computeStyleTests();
                            return reliableMarginLeftVal;
                        },
                        scrollboxSize: function() {
                            computeStyleTests();
                            return scrollboxSizeVal;
                        },
                        reliableTrDimensions: function() {
                            var table, tr, trChild, trStyle;
                            if (null == reliableTrDimensionsVal) {
                                table = document.createElement("table");
                                tr = document.createElement("tr");
                                trChild = document.createElement("div");
                                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                                tr.style.cssText = "border:1px solid";
                                tr.style.height = "1px";
                                trChild.style.height = "9px";
                                trChild.style.display = "block";
                                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                                trStyle = window.getComputedStyle(tr);
                                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                                documentElement.removeChild(table);
                            }
                            return reliableTrDimensionsVal;
                        }
                    });
                })();
                function curCSS(elem, name, computed) {
                    var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
                    computed = computed || getStyles(elem);
                    if (computed) {
                        ret = computed.getPropertyValue(name) || computed[name];
                        if (isCustomProp && ret) ret = ret.replace(rtrimCSS, "$1") || void 0;
                        if ("" === ret && !isAttached(elem)) ret = jQuery.style(elem, name);
                        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }
                    return void 0 !== ret ? ret + "" : ret;
                }
                function addGetHookIf(conditionFn, hookFn) {
                    return {
                        get: function() {
                            if (conditionFn()) {
                                delete this.get;
                                return;
                            }
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
                function vendorPropName(name) {
                    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                    while (i--) {
                        name = cssPrefixes[i] + capName;
                        if (name in emptyStyle) return name;
                    }
                }
                function finalPropName(name) {
                    var final = jQuery.cssProps[name] || vendorProps[name];
                    if (final) return final;
                    if (name in emptyStyle) return name;
                    return vendorProps[name] = vendorPropName(name) || name;
                }
                var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function setPositiveNumber(_elem, value, subtract) {
                    var matches = rcssNum.exec(value);
                    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
                }
                function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                    var i = "width" === dimension ? 1 : 0, extra = 0, delta = 0;
                    if (box === (isBorderBox ? "border" : "content")) return 0;
                    for (;i < 4; i += 2) {
                        if ("margin" === box) delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                        if (!isBorderBox) {
                            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if ("padding" !== box) delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        } else {
                            if ("content" === box) delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if ("margin" !== box) delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                    if (!isBorderBox && computedVal >= 0) delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
                    return delta;
                }
                function getWidthOrHeight(elem, dimension, extra) {
                    var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && "border-box" === jQuery.css(elem, "boxSizing", false, styles), valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                    if (rnumnonpx.test(val)) {
                        if (!extra) return val;
                        val = "auto";
                    }
                    if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || "auto" === val || !parseFloat(val) && "inline" === jQuery.css(elem, "display", false, styles)) && elem.getClientRects().length) {
                        isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
                        valueIsBorderBox = offsetProp in elem;
                        if (valueIsBorderBox) val = elem[offsetProp];
                    }
                    val = parseFloat(val) || 0;
                    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
                }
                jQuery.extend({
                    cssHooks: {
                        opacity: {
                            get: function(elem, computed) {
                                if (computed) {
                                    var ret = curCSS(elem, "opacity");
                                    return "" === ret ? "1" : ret;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: true,
                        columnCount: true,
                        fillOpacity: true,
                        flexGrow: true,
                        flexShrink: true,
                        fontWeight: true,
                        gridArea: true,
                        gridColumn: true,
                        gridColumnEnd: true,
                        gridColumnStart: true,
                        gridRow: true,
                        gridRowEnd: true,
                        gridRowStart: true,
                        lineHeight: true,
                        opacity: true,
                        order: true,
                        orphans: true,
                        widows: true,
                        zIndex: true,
                        zoom: true
                    },
                    cssProps: {},
                    style: function(elem, name, value, extra) {
                        if (!elem || 3 === elem.nodeType || 8 === elem.nodeType || !elem.style) return;
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (void 0 !== value) {
                            type = typeof value;
                            if ("string" === type && (ret = rcssNum.exec(value)) && ret[1]) {
                                value = adjustCSS(elem, name, ret);
                                type = "number";
                            }
                            if (null == value || value !== value) return;
                            if ("number" === type && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                            if (!support.clearCloneStyle && "" === value && 0 === name.indexOf("background")) style[name] = "inherit";
                            if (!hooks || !("set" in hooks) || void 0 !== (value = hooks.set(elem, value, extra))) if (isCustomProp) style.setProperty(name, value); else style[name] = value;
                        } else {
                            if (hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra))) return ret;
                            return style[name];
                        }
                    },
                    css: function(elem, name, extra, styles) {
                        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                        if (void 0 === val) val = curCSS(elem, name, styles);
                        if ("normal" === val && name in cssNormalTransform) val = cssNormalTransform[name];
                        if ("" === extra || extra) {
                            num = parseFloat(val);
                            return true === extra || isFinite(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each([ "height", "width" ], (function(_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function(elem, computed, extra) {
                            if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, (function() {
                                return getWidthOrHeight(elem, dimension, extra);
                            })) : getWidthOrHeight(elem, dimension, extra);
                        },
                        set: function(elem, value, extra) {
                            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && "absolute" === styles.position, boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && "border-box" === jQuery.css(elem, "boxSizing", false, styles), subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                            if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
                            if (subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px")) {
                                elem.style[dimension] = value;
                                value = jQuery.css(elem, dimension);
                            }
                            return setPositiveNumber(elem, value, subtract);
                        }
                    };
                }));
                jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, (function(elem, computed) {
                    if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, (function() {
                        return elem.getBoundingClientRect().left;
                    }))) + "px";
                }));
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function(value) {
                            var i = 0, expanded = {}, parts = "string" === typeof value ? value.split(" ") : [ value ];
                            for (;i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        }
                    };
                    if ("margin" !== prefix) jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }));
                jQuery.fn.extend({
                    css: function(name, value) {
                        return access(this, (function(elem, name, value) {
                            var styles, len, map = {}, i = 0;
                            if (Array.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for (;i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                return map;
                            }
                            return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                        }), name, value, arguments.length > 1);
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function(elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || jQuery.easing._default;
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function() {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function(percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); else this.pos = eased = percent;
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) this.options.step.call(this.elem, this.now, this);
                        if (hooks && hooks.set) hooks.set(this); else Tween.propHooks._default.set(this);
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function(tween) {
                            var result;
                            if (1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop]) return tween.elem[tween.prop];
                            result = jQuery.css(tween.elem, tween.prop, "");
                            return !result || "auto" === result ? 0 : result;
                        },
                        set: function(tween) {
                            if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween); else if (1 === tween.elem.nodeType && (jQuery.cssHooks[tween.prop] || null != tween.elem.style[finalPropName(tween.prop)])) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); else tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                    }
                };
                jQuery.easing = {
                    linear: function(p) {
                        return p;
                    },
                    swing: function(p) {
                        return .5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing"
                };
                jQuery.fx = Tween.prototype.init;
                jQuery.fx.step = {};
                var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
                function schedule() {
                    if (inProgress) {
                        if (false === document.hidden && window.requestAnimationFrame) window.requestAnimationFrame(schedule); else window.setTimeout(schedule, jQuery.fx.interval);
                        jQuery.fx.tick();
                    }
                }
                function createFxNow() {
                    window.setTimeout((function() {
                        fxNow = void 0;
                    }));
                    return fxNow = Date.now();
                }
                function genFx(type, includeWidth) {
                    var which, i = 0, attrs = {
                        height: type
                    };
                    includeWidth = includeWidth ? 1 : 0;
                    for (;i < 4; i += 2 - includeWidth) {
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) attrs.opacity = attrs.width = type;
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                    for (;index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (null == hooks.unqueued) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function() {
                                if (!hooks.unqueued) oldfire();
                            };
                        }
                        hooks.unqueued++;
                        anim.always((function() {
                            anim.always((function() {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                            }));
                        }));
                    }
                    for (prop in props) {
                        value = props[prop];
                        if (rfxtypes.test(value)) {
                            delete props[prop];
                            toggle = toggle || "toggle" === value;
                            if (value === (hidden ? "hide" : "show")) if ("show" === value && dataShow && void 0 !== dataShow[prop]) hidden = true; else continue;
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        }
                    }
                    propTween = !jQuery.isEmptyObject(props);
                    if (!propTween && jQuery.isEmptyObject(orig)) return;
                    if (isBox && 1 === elem.nodeType) {
                        opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                        restoreDisplay = dataShow && dataShow.display;
                        if (null == restoreDisplay) restoreDisplay = dataPriv.get(elem, "display");
                        display = jQuery.css(elem, "display");
                        if ("none" === display) if (restoreDisplay) display = restoreDisplay; else {
                            showHide([ elem ], true);
                            restoreDisplay = elem.style.display || restoreDisplay;
                            display = jQuery.css(elem, "display");
                            showHide([ elem ]);
                        }
                        if ("inline" === display || "inline-block" === display && null != restoreDisplay) if ("none" === jQuery.css(elem, "float")) {
                            if (!propTween) {
                                anim.done((function() {
                                    style.display = restoreDisplay;
                                }));
                                if (null == restoreDisplay) {
                                    display = style.display;
                                    restoreDisplay = "none" === display ? "" : display;
                                }
                            }
                            style.display = "inline-block";
                        }
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        anim.always((function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        }));
                    }
                    propTween = false;
                    for (prop in orig) {
                        if (!propTween) {
                            if (dataShow) {
                                if ("hidden" in dataShow) hidden = dataShow.hidden;
                            } else dataShow = dataPriv.access(elem, "fxshow", {
                                display: restoreDisplay
                            });
                            if (toggle) dataShow.hidden = !hidden;
                            if (hidden) showHide([ elem ], true);
                            anim.done((function() {
                                if (!hidden) showHide([ elem ]);
                                dataPriv.remove(elem, "fxshow");
                                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
                            }));
                        }
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = propTween.start;
                            if (hidden) {
                                propTween.end = propTween.start;
                                propTween.start = 0;
                            }
                        }
                    }
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    for (index in props) {
                        name = camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (Array.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            for (index in value) if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        } else specialEasing[name] = easing;
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always((function() {
                        delete tick.elem;
                    })), tick = function() {
                        if (stopped) return false;
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for (;index < length; index++) animation.tweens[index].run(percent);
                        deferred.notifyWith(elem, [ animation, percent, remaining ]);
                        if (percent < 1 && length) return remaining;
                        if (!length) deferred.notifyWith(elem, [ animation, 1, 0 ]);
                        deferred.resolveWith(elem, [ animation ]);
                        return false;
                    }, animation = deferred.promise({
                        elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            stopped = true;
                            for (;index < length; index++) animation.tweens[index].run(1);
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [ animation, 1, 0 ]);
                                deferred.resolveWith(elem, [ animation, gotoEnd ]);
                            } else deferred.rejectWith(elem, [ animation, gotoEnd ]);
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for (;index < length; index++) {
                        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                        if (result) {
                            if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                            return result;
                        }
                    }
                    jQuery.map(props, createTween, animation);
                    if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation;
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [ function(prop, value) {
                            var tween = this.createTween(prop, value);
                            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                            return tween;
                        } ]
                    },
                    tweener: function(props, callback) {
                        if (isFunction(props)) {
                            callback = props;
                            props = [ "*" ];
                        } else props = props.match(rnothtmlwhite);
                        var prop, index = 0, length = props.length;
                        for (;index < length; index++) {
                            prop = props[index];
                            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                            Animation.tweeners[prop].unshift(callback);
                        }
                    },
                    prefilters: [ defaultPrefilter ],
                    prefilter: function(callback, prepend) {
                        if (prepend) Animation.prefilters.unshift(callback); else Animation.prefilters.push(callback);
                    }
                });
                jQuery.speed = function(speed, easing, fn) {
                    var opt = speed && "object" === typeof speed ? jQuery.extend({}, speed) : {
                        complete: fn || !fn && easing || isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !isFunction(easing) && easing
                    };
                    if (jQuery.fx.off) opt.duration = 0; else if ("number" !== typeof opt.duration) if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration]; else opt.duration = jQuery.fx.speeds._default;
                    if (null == opt.queue || true === opt.queue) opt.queue = "fx";
                    opt.old = opt.complete;
                    opt.complete = function() {
                        if (isFunction(opt.old)) opt.old.call(this);
                        if (opt.queue) jQuery.dequeue(this, opt.queue);
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function(speed, to, easing, callback) {
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                            opacity: to
                        }, speed, easing, callback);
                    },
                    animate: function(prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            if (empty || dataPriv.get(this, "finish")) anim.stop(true);
                        };
                        doAnimation.finish = doAnimation;
                        return empty || false === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function(type, clearQueue, gotoEnd) {
                        var stopQueue = function(hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if ("string" !== typeof type) {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = void 0;
                        }
                        if (clearQueue) this.queue(type || "fx", []);
                        return this.each((function() {
                            var dequeue = true, index = null != type && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                            if (index) {
                                if (data[index] && data[index].stop) stopQueue(data[index]);
                            } else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && (null == type || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                            if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                        }));
                    },
                    finish: function(type) {
                        if (false !== type) type = type || "fx";
                        return this.each((function() {
                            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            data.finish = true;
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) hooks.stop.call(this, true);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                            for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                            delete data.finish;
                        }));
                    }
                });
                jQuery.each([ "toggle", "show", "hide" ], (function(_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return null == speed || "boolean" === typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                    };
                }));
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(name, props) {
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                }));
                jQuery.timers = [];
                jQuery.fx.tick = function() {
                    var timer, i = 0, timers = jQuery.timers;
                    fxNow = Date.now();
                    for (;i < timers.length; i++) {
                        timer = timers[i];
                        if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                    }
                    if (!timers.length) jQuery.fx.stop();
                    fxNow = void 0;
                };
                jQuery.fx.timer = function(timer) {
                    jQuery.timers.push(timer);
                    jQuery.fx.start();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function() {
                    if (inProgress) return;
                    inProgress = true;
                    schedule();
                };
                jQuery.fx.stop = function() {
                    inProgress = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                };
                jQuery.fn.delay = function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, (function(next, hooks) {
                        var timeout = window.setTimeout(next, time);
                        hooks.stop = function() {
                            window.clearTimeout(timeout);
                        };
                    }));
                };
                (function() {
                    var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
                    input.type = "checkbox";
                    support.checkOn = "" !== input.value;
                    support.optSelected = opt.selected;
                    input = document.createElement("input");
                    input.value = "t";
                    input.type = "radio";
                    support.radioValue = "t" === input.value;
                })();
                var boolHook, attrHandle = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function(name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function(name) {
                        return this.each((function() {
                            jQuery.removeAttr(this, name);
                        }));
                    }
                });
                jQuery.extend({
                    attr: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (3 === nType || 8 === nType || 2 === nType) return;
                        if ("undefined" === typeof elem.getAttribute) return jQuery.prop(elem, name, value);
                        if (1 !== nType || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
                        if (void 0 !== value) {
                            if (null === value) {
                                jQuery.removeAttr(elem, name);
                                return;
                            }
                            if (hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) return ret;
                            elem.setAttribute(name, value + "");
                            return value;
                        }
                        if (hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) return ret;
                        ret = jQuery.find.attr(elem, name);
                        return null == ret ? void 0 : ret;
                    },
                    attrHooks: {
                        type: {
                            set: function(elem, value) {
                                if (!support.radioValue && "radio" === value && nodeName(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) elem.value = val;
                                    return value;
                                }
                            }
                        }
                    },
                    removeAttr: function(elem, value) {
                        var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && 1 === elem.nodeType) while (name = attrNames[i++]) elem.removeAttribute(name);
                    }
                });
                boolHook = {
                    set: function(elem, value, name) {
                        if (false === value) jQuery.removeAttr(elem, name); else elem.setAttribute(name, name);
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(_i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = function(elem, name, isXML) {
                        var ret, handle, lowercaseName = name.toLowerCase();
                        if (!isXML) {
                            handle = attrHandle[lowercaseName];
                            attrHandle[lowercaseName] = ret;
                            ret = null != getter(elem, name, isXML) ? lowercaseName : null;
                            attrHandle[lowercaseName] = handle;
                        }
                        return ret;
                    };
                }));
                var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function(name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function(name) {
                        return this.each((function() {
                            delete this[jQuery.propFix[name] || name];
                        }));
                    }
                });
                jQuery.extend({
                    prop: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (3 === nType || 8 === nType || 2 === nType) return;
                        if (1 !== nType || !jQuery.isXMLDoc(elem)) {
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (void 0 !== value) {
                            if (hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) return ret;
                            return elem[name] = value;
                        }
                        if (hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) return ret;
                        return elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(elem) {
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                if (tabindex) return parseInt(tabindex, 10);
                                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                                return -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                });
                if (!support.optSelected) jQuery.propHooks.selected = {
                    get: function(elem) {
                        var parent = elem.parentNode;
                        if (parent && parent.parentNode) parent.parentNode.selectedIndex;
                        return null;
                    },
                    set: function(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) parent.parentNode.selectedIndex;
                        }
                    }
                };
                jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    jQuery.propFix[this.toLowerCase()] = this;
                }));
                function stripAndCollapse(value) {
                    var tokens = value.match(rnothtmlwhite) || [];
                    return tokens.join(" ");
                }
                function getClass(elem) {
                    return elem.getAttribute && elem.getAttribute("class") || "";
                }
                function classesToArray(value) {
                    if (Array.isArray(value)) return value;
                    if ("string" === typeof value) return value.match(rnothtmlwhite) || [];
                    return [];
                }
                jQuery.fn.extend({
                    addClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        }));
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = 1 === this.nodeType && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    removeClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = 1 === this.nodeType && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    while (cur.indexOf(" " + className + " ") > -1) cur = cur.replace(" " + className + " ", " ");
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    toggleClass: function(value, stateVal) {
                        var classNames, className, i, self, type = typeof value, isValidValue = "string" === type || Array.isArray(value);
                        if (isFunction(value)) return this.each((function(i) {
                            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                        }));
                        if ("boolean" === typeof stateVal && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
                        classNames = classesToArray(value);
                        return this.each((function() {
                            if (isValidValue) {
                                self = jQuery(this);
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (self.hasClass(className)) self.removeClass(className); else self.addClass(className);
                                }
                            } else if (void 0 === value || "boolean" === type) {
                                className = getClass(this);
                                if (className) dataPriv.set(this, "__className__", className);
                                if (this.setAttribute) this.setAttribute("class", className || false === value ? "" : dataPriv.get(this, "__className__") || "");
                            }
                        }));
                    },
                    hasClass: function(selector) {
                        var className, elem, i = 0;
                        className = " " + selector + " ";
                        while (elem = this[i++]) if (1 === elem.nodeType && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
                        return false;
                    }
                });
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function(value) {
                        var hooks, ret, valueIsFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value"))) return ret;
                                ret = elem.value;
                                if ("string" === typeof ret) return ret.replace(rreturn, "");
                                return null == ret ? "" : ret;
                            }
                            return;
                        }
                        valueIsFunction = isFunction(value);
                        return this.each((function(i) {
                            var val;
                            if (1 !== this.nodeType) return;
                            if (valueIsFunction) val = value.call(this, i, jQuery(this).val()); else val = value;
                            if (null == val) val = ""; else if ("number" === typeof val) val += ""; else if (Array.isArray(val)) val = jQuery.map(val, (function(value) {
                                return null == value ? "" : value + "";
                            }));
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            if (!hooks || !("set" in hooks) || void 0 === hooks.set(this, val, "value")) this.value = val;
                        }));
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return null != val ? val : stripAndCollapse(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function(elem) {
                                var value, option, i, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type, values = one ? null : [], max = one ? index + 1 : options.length;
                                if (index < 0) i = max; else i = one ? index : 0;
                                for (;i < max; i++) {
                                    option = options[i];
                                    if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                        value = jQuery(option).val();
                                        if (one) return value;
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function(elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while (i--) {
                                    option = options[i];
                                    if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                                }
                                if (!optionSet) elem.selectedIndex = -1;
                                return values;
                            }
                        }
                    }
                });
                jQuery.each([ "radio", "checkbox" ], (function() {
                    jQuery.valHooks[this] = {
                        set: function(elem, value) {
                            if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                        }
                    };
                    if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
                        return null === elem.getAttribute("value") ? "on" : elem.value;
                    };
                }));
                support.focusin = "onfocusin" in window;
                var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
                    e.stopPropagation();
                };
                jQuery.extend(jQuery.event, {
                    trigger: function(event, data, elem, onlyHandlers) {
                        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = lastElement = tmp = elem = elem || document;
                        if (3 === elem.nodeType || 8 === elem.nodeType) return;
                        if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                        if (type.indexOf(".") > -1) {
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" === typeof event && event);
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        event.result = void 0;
                        if (!event.target) event.target = elem;
                        data = null == data ? [ event ] : jQuery.makeArray(data, [ event ]);
                        special = jQuery.event.special[type] || {};
                        if (!onlyHandlers && special.trigger && false === special.trigger.apply(elem, data)) return;
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                            for (;cur; cur = cur.parentNode) {
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        i = 0;
                        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                            lastElement = cur;
                            event.type = i > 1 ? bubbleType : special.bindType || type;
                            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                            if (handle) handle.apply(cur, data);
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (false === event.result) event.preventDefault();
                            }
                        }
                        event.type = type;
                        if (!onlyHandlers && !event.isDefaultPrevented()) if ((!special._default || false === special._default.apply(eventPath.pop(), data)) && acceptData(elem)) if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) elem[ontype] = null;
                            jQuery.event.triggered = type;
                            if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                            elem[type]();
                            if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                            jQuery.event.triggered = void 0;
                            if (tmp) elem[ontype] = tmp;
                        }
                        return event.result;
                    },
                    simulate: function(type, elem, event) {
                        var e = jQuery.extend(new jQuery.Event, event, {
                            type,
                            isSimulated: true
                        });
                        jQuery.event.trigger(e, null, elem);
                    }
                });
                jQuery.fn.extend({
                    trigger: function(type, data) {
                        return this.each((function() {
                            jQuery.event.trigger(type, data, this);
                        }));
                    },
                    triggerHandler: function(type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, true);
                    }
                });
                if (!support.focusin) jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(orig, fix) {
                    var handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                    };
                    jQuery.event.special[fix] = {
                        setup: function() {
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                            if (!attaches) doc.addEventListener(orig, handler, true);
                            dataPriv.access(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                dataPriv.remove(doc, fix);
                            } else dataPriv.access(doc, fix, attaches);
                        }
                    };
                }));
                var location = window.location;
                var nonce = {
                    guid: Date.now()
                };
                var rquery = /\?/;
                jQuery.parseXML = function(data) {
                    var xml, parserErrorElem;
                    if (!data || "string" !== typeof data) return null;
                    try {
                        xml = (new window.DOMParser).parseFromString(data, "text/xml");
                    } catch (e) {}
                    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
                    if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, (function(el) {
                        return el.textContent;
                    })).join("\n") : data));
                    return xml;
                };
                var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (Array.isArray(obj)) jQuery.each(obj, (function(i, v) {
                        if (traditional || rbracket.test(prefix)) add(prefix, v); else buildParams(prefix + "[" + ("object" === typeof v && null != v ? i : "") + "]", v, traditional, add);
                    })); else if (!traditional && "object" === toType(obj)) for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
                }
                jQuery.param = function(a, traditional) {
                    var prefix, s = [], add = function(key, valueOrFunction) {
                        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == value ? "" : value);
                    };
                    if (null == a) return "";
                    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, (function() {
                        add(this.name, this.value);
                    })); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                    return s.join("&");
                };
                jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })).filter((function() {
                            var type = this.type;
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                        })).map((function(_i, elem) {
                            var val = jQuery(this).val();
                            if (null == val) return null;
                            if (Array.isArray(val)) return jQuery.map(val, (function(val) {
                                return {
                                    name: elem.name,
                                    value: val.replace(rCRLF, "\r\n")
                                };
                            }));
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        })).get();
                    }
                });
                var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
                originAnchor.href = location.href;
                function addToPrefiltersOrTransports(structure) {
                    return function(dataTypeExpression, func) {
                        if ("string" !== typeof dataTypeExpression) {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                        if (isFunction(func)) while (dataType = dataTypes[i++]) if ("+" === dataType[0]) {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else (structure[dataType] = structure[dataType] || []).push(func);
                    };
                }
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {}, seekingTransport = structure === transports;
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], (function(_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if ("string" === typeof dataTypeOrTransport && !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                        }));
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                function ajaxExtend(target, src) {
                    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                    for (key in src) if (void 0 !== src[key]) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                    if (deep) jQuery.extend(true, target, deep);
                    return target;
                }
                function ajaxHandleResponses(s, jqXHR, responses) {
                    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                    while ("*" === dataTypes[0]) {
                        dataTypes.shift();
                        if (void 0 === ct) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                    if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) firstDataType = type;
                        }
                        finalDataType = finalDataType || firstDataType;
                    }
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                        return responses[finalDataType];
                    }
                }
                function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    while (current) {
                        if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                        if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                        prev = current;
                        current = dataTypes.shift();
                        if (current) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
                            conv = converters[prev + " " + current] || converters["* " + current];
                            if (!conv) for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (true === conv) conv = converters[conv2]; else if (true !== converters[conv2]) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (true !== conv) if (conv && s.throws) response = conv(response); else try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }
                jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: rlocalProtocol.test(location.protocol),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": true,
                            "text json": JSON.parse,
                            "text xml": jQuery.parseXML
                        },
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    ajaxSetup: function(target, settings) {
                        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    ajax: function(url, options) {
                        if ("object" === typeof url) {
                            options = url;
                            url = void 0;
                        }
                        options = options || {};
                        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                            readyState: 0,
                            getResponseHeader: function(key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return null == match ? null : match.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return completed ? responseHeadersString : null;
                            },
                            setRequestHeader: function(name, value) {
                                if (null == completed) {
                                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            overrideMimeType: function(type) {
                                if (null == completed) s.mimeType = type;
                                return this;
                            },
                            statusCode: function(map) {
                                var code;
                                if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (code in map) statusCode[code] = [ statusCode[code], map[code] ];
                                return this;
                            },
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) transport.abort(finalText);
                                done(0, finalText);
                                return this;
                            }
                        };
                        deferred.promise(jqXHR);
                        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                        s.type = options.method || options.type || s.method || s.type;
                        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                        if (null == s.crossDomain) {
                            urlAnchor = document.createElement("a");
                            try {
                                urlAnchor.href = s.url;
                                urlAnchor.href = urlAnchor.href;
                                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                            } catch (e) {
                                s.crossDomain = true;
                            }
                        }
                        if (s.data && s.processData && "string" !== typeof s.data) s.data = jQuery.param(s.data, s.traditional);
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        if (completed) return jqXHR;
                        fireGlobals = jQuery.event && s.global;
                        if (fireGlobals && 0 === jQuery.active++) jQuery.event.trigger("ajaxStart");
                        s.type = s.type.toUpperCase();
                        s.hasContent = !rnoContent.test(s.type);
                        cacheURL = s.url.replace(rhash, "");
                        if (!s.hasContent) {
                            uncached = s.url.slice(cacheURL.length);
                            if (s.data && (s.processData || "string" === typeof s.data)) {
                                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                delete s.data;
                            }
                            if (false === s.cache) {
                                cacheURL = cacheURL.replace(rantiCache, "$1");
                                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                            }
                            s.url = cacheURL + uncached;
                        } else if (s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded")) s.data = s.data.replace(r20, "+");
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                        if (s.data && s.hasContent && false !== s.contentType || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                        for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                        if (s.beforeSend && (false === s.beforeSend.call(callbackContext, jqXHR, s) || completed)) return jqXHR.abort();
                        strAbort = "abort";
                        completeDeferred.add(s.complete);
                        jqXHR.done(s.success);
                        jqXHR.fail(s.error);
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        if (!transport) done(-1, "No Transport"); else {
                            jqXHR.readyState = 1;
                            if (fireGlobals) globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                            if (completed) return jqXHR;
                            if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout((function() {
                                jqXHR.abort("timeout");
                            }), s.timeout);
                            try {
                                completed = false;
                                transport.send(requestHeaders, done);
                            } catch (e) {
                                if (completed) throw e;
                                done(-1, e);
                            }
                        }
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            if (completed) return;
                            completed = true;
                            if (timeoutTimer) window.clearTimeout(timeoutTimer);
                            transport = void 0;
                            responseHeadersString = headers || "";
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            isSuccess = status >= 200 && status < 300 || 304 === status;
                            if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            if (isSuccess) {
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) jQuery.lastModified[cacheURL] = modified;
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) jQuery.etag[cacheURL] = modified;
                                }
                                if (204 === status || "HEAD" === s.type) statusText = "nocontent"; else if (304 === status) statusText = "notmodified"; else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            } else {
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) status = 0;
                                }
                            }
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            if (isSuccess) deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]); else deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                            jqXHR.statusCode(statusCode);
                            statusCode = void 0;
                            if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                            completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                                if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function(url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function(url, callback) {
                        return jQuery.get(url, void 0, callback, "script");
                    }
                });
                jQuery.each([ "get", "post" ], (function(_i, method) {
                    jQuery[method] = function(url, data, callback, type) {
                        if (isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = void 0;
                        }
                        return jQuery.ajax(jQuery.extend({
                            url,
                            type: method,
                            dataType: type,
                            data,
                            success: callback
                        }, jQuery.isPlainObject(url) && url));
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    var i;
                    for (i in s.headers) if ("content-type" === i.toLowerCase()) s.contentType = s.headers[i] || "";
                }));
                jQuery._evalUrl = function(url, options, doc) {
                    return jQuery.ajax({
                        url,
                        type: "GET",
                        dataType: "script",
                        cache: true,
                        async: false,
                        global: false,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(response) {
                            jQuery.globalEval(response, options, doc);
                        }
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function(html) {
                        var wrap;
                        if (this[0]) {
                            if (isFunction(html)) html = html.call(this[0]);
                            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) wrap.insertBefore(this[0]);
                            wrap.map((function() {
                                var elem = this;
                                while (elem.firstElementChild) elem = elem.firstElementChild;
                                return elem;
                            })).append(this);
                        }
                        return this;
                    },
                    wrapInner: function(html) {
                        if (isFunction(html)) return this.each((function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        }));
                        return this.each((function() {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) contents.wrapAll(html); else self.append(html);
                        }));
                    },
                    wrap: function(html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each((function(i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        }));
                    },
                    unwrap: function(selector) {
                        this.parent(selector).not("body").each((function() {
                            jQuery(this).replaceWith(this.childNodes);
                        }));
                        return this;
                    }
                });
                jQuery.expr.pseudos.hidden = function(elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                };
                jQuery.expr.pseudos.visible = function(elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                };
                jQuery.ajaxSettings.xhr = function() {
                    try {
                        return new window.XMLHttpRequest;
                    } catch (e) {}
                };
                var xhrSuccessStatus = {
                    0: 200,
                    1223: 204
                }, xhrSupported = jQuery.ajaxSettings.xhr();
                support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
                support.ajax = xhrSupported = !!xhrSupported;
                jQuery.ajaxTransport((function(options) {
                    var callback, errorCallback;
                    if (support.cors || xhrSupported && !options.crossDomain) return {
                        send: function(headers, complete) {
                            var i, xhr = options.xhr();
                            xhr.open(options.type, options.url, options.async, options.username, options.password);
                            if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                            if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                            if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                            for (i in headers) xhr.setRequestHeader(i, headers[i]);
                            callback = function(type) {
                                return function() {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                        if ("abort" === type) xhr.abort(); else if ("error" === type) if ("number" !== typeof xhr.status) complete(0, "error"); else complete(xhr.status, xhr.statusText); else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" !== typeof xhr.responseText ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                };
                            };
                            xhr.onload = callback();
                            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                            if (void 0 !== xhr.onabort) xhr.onabort = errorCallback; else xhr.onreadystatechange = function() {
                                if (4 === xhr.readyState) window.setTimeout((function() {
                                    if (callback) errorCallback();
                                }));
                            };
                            callback = callback("abort");
                            try {
                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) {
                                if (callback) throw e;
                            }
                        },
                        abort: function() {
                            if (callback) callback();
                        }
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    if (s.crossDomain) s.contents.script = false;
                }));
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                jQuery.ajaxPrefilter("script", (function(s) {
                    if (void 0 === s.cache) s.cache = false;
                    if (s.crossDomain) s.type = "GET";
                }));
                jQuery.ajaxTransport("script", (function(s) {
                    if (s.crossDomain || s.scriptAttrs) {
                        var script, callback;
                        return {
                            send: function(_, complete) {
                                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                                    charset: s.scriptCharset,
                                    src: s.url
                                }).on("load error", callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) complete("error" === evt.type ? 404 : 200, evt.type);
                                });
                                document.head.appendChild(script[0]);
                            },
                            abort: function() {
                                if (callback) callback();
                            }
                        };
                    }
                }));
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                        this[callback] = true;
                        return callback;
                    }
                });
                jQuery.ajaxPrefilter("json jsonp", (function(s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = false !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" === typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                    if (jsonProp || "jsonp" === s.dataTypes[0]) {
                        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                        if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); else if (false !== s.jsonp) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        s.converters["script json"] = function() {
                            if (!responseContainer) jQuery.error(callbackName + " was not called");
                            return responseContainer[0];
                        };
                        s.dataTypes[0] = "json";
                        overwritten = window[callbackName];
                        window[callbackName] = function() {
                            responseContainer = arguments;
                        };
                        jqXHR.always((function() {
                            if (void 0 === overwritten) jQuery(window).removeProp(callbackName); else window[callbackName] = overwritten;
                            if (s[callbackName]) {
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                oldCallbacks.push(callbackName);
                            }
                            if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                            responseContainer = overwritten = void 0;
                        }));
                        return "script";
                    }
                }));
                support.createHTMLDocument = function() {
                    var body = document.implementation.createHTMLDocument("").body;
                    body.innerHTML = "<form></form><form></form>";
                    return 2 === body.childNodes.length;
                }();
                jQuery.parseHTML = function(data, context, keepScripts) {
                    if ("string" !== typeof data) return [];
                    if ("boolean" === typeof context) {
                        keepScripts = context;
                        context = false;
                    }
                    var base, parsed, scripts;
                    if (!context) if (support.createHTMLDocument) {
                        context = document.implementation.createHTMLDocument("");
                        base = context.createElement("base");
                        base.href = document.location.href;
                        context.head.appendChild(base);
                    } else context = document;
                    parsed = rsingleTag.exec(data);
                    scripts = !keepScripts && [];
                    if (parsed) return [ context.createElement(parsed[1]) ];
                    parsed = buildFragment([ data ], context, scripts);
                    if (scripts && scripts.length) jQuery(scripts).remove();
                    return jQuery.merge([], parsed.childNodes);
                };
                jQuery.fn.load = function(url, params, callback) {
                    var selector, type, response, self = this, off = url.indexOf(" ");
                    if (off > -1) {
                        selector = stripAndCollapse(url.slice(off));
                        url = url.slice(0, off);
                    }
                    if (isFunction(params)) {
                        callback = params;
                        params = void 0;
                    } else if (params && "object" === typeof params) type = "POST";
                    if (self.length > 0) jQuery.ajax({
                        url,
                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done((function(responseText) {
                        response = arguments;
                        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                    })).always(callback && function(jqXHR, status) {
                        self.each((function() {
                            callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                        }));
                    });
                    return this;
                };
                jQuery.expr.pseudos.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, (function(fn) {
                        return elem === fn.elem;
                    })).length;
                };
                jQuery.offset = {
                    setOffset: function(elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                        if ("static" === position) elem.style.position = "relative";
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        } else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (isFunction(options)) options = options.call(elem, i, jQuery.extend({}, curOffset));
                        if (null != options.top) props.top = options.top - curOffset.top + curTop;
                        if (null != options.left) props.left = options.left - curOffset.left + curLeft;
                        if ("using" in options) options.using.call(elem, props); else curElem.css(props);
                    }
                };
                jQuery.fn.extend({
                    offset: function(options) {
                        if (arguments.length) return void 0 === options ? this : this.each((function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        }));
                        var rect, win, elem = this[0];
                        if (!elem) return;
                        if (!elem.getClientRects().length) return {
                            top: 0,
                            left: 0
                        };
                        rect = elem.getBoundingClientRect();
                        win = elem.ownerDocument.defaultView;
                        return {
                            top: rect.top + win.pageYOffset,
                            left: rect.left + win.pageXOffset
                        };
                    },
                    position: function() {
                        if (!this[0]) return;
                        var offsetParent, offset, doc, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === jQuery.css(elem, "position")) offset = elem.getBoundingClientRect(); else {
                            offset = this.offset();
                            doc = elem.ownerDocument;
                            offsetParent = elem.offsetParent || doc.documentElement;
                            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && "static" === jQuery.css(offsetParent, "position")) offsetParent = offsetParent.parentNode;
                            if (offsetParent && offsetParent !== elem && 1 === offsetParent.nodeType) {
                                parentOffset = jQuery(offsetParent).offset();
                                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                            }
                        }
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            var offsetParent = this.offsetParent;
                            while (offsetParent && "static" === jQuery.css(offsetParent, "position")) offsetParent = offsetParent.offsetParent;
                            return offsetParent || documentElement;
                        }));
                    }
                });
                jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function(val) {
                        return access(this, (function(elem, method, val) {
                            var win;
                            if (isWindow(elem)) win = elem; else if (9 === elem.nodeType) win = elem.defaultView;
                            if (void 0 === val) return win ? win[prop] : elem[method];
                            if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset); else elem[method] = val;
                        }), method, val, arguments.length);
                    };
                }));
                jQuery.each([ "top", "left" ], (function(_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, (function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }));
                }));
                jQuery.each({
                    Height: "height",
                    Width: "width"
                }, (function(name, type) {
                    jQuery.each({
                        padding: "inner" + name,
                        content: type,
                        "": "outer" + name
                    }, (function(defaultExtra, funcName) {
                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || "boolean" !== typeof margin), extra = defaultExtra || (true === margin || true === value ? "margin" : "border");
                            return access(this, (function(elem, type, value) {
                                var doc;
                                if (isWindow(elem)) return 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name];
                                if (9 === elem.nodeType) {
                                    doc = elem.documentElement;
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                            }), type, chainable ? margin : void 0, chainable);
                        };
                    }));
                }));
                jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(_i, type) {
                    jQuery.fn[type] = function(fn) {
                        return this.on(type, fn);
                    };
                }));
                jQuery.fn.extend({
                    bind: function(types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function(types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function(selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function(selector, types, fn) {
                        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    },
                    hover: function(fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    }
                });
                jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(_i, name) {
                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                }));
                var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                jQuery.proxy = function(fn, context) {
                    var tmp, args, proxy;
                    if ("string" === typeof context) {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    }
                    if (!isFunction(fn)) return;
                    args = slice.call(arguments, 2);
                    proxy = function() {
                        return fn.apply(context || this, args.concat(slice.call(arguments)));
                    };
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                };
                jQuery.holdReady = function(hold) {
                    if (hold) jQuery.readyWait++; else jQuery.ready(true);
                };
                jQuery.isArray = Array.isArray;
                jQuery.parseJSON = JSON.parse;
                jQuery.nodeName = nodeName;
                jQuery.isFunction = isFunction;
                jQuery.isWindow = isWindow;
                jQuery.camelCase = camelCase;
                jQuery.type = toType;
                jQuery.now = Date.now;
                jQuery.isNumeric = function(obj) {
                    var type = jQuery.type(obj);
                    return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj));
                };
                jQuery.trim = function(text) {
                    return null == text ? "" : (text + "").replace(rtrim, "$1");
                };
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return jQuery;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                var _jQuery = window.jQuery, _$ = window.$;
                jQuery.noConflict = function(deep) {
                    if (window.$ === jQuery) window.$ = _$;
                    if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
                    return jQuery;
                };
                if ("undefined" === typeof noGlobal) window.jQuery = window.$ = jQuery;
                return jQuery;
            }));
        },
        1296: (module, __unused_webpack_exports, __webpack_require__) => {
            var FUNC_ERROR_TEXT = "Expected a function";
            var NAN = 0 / 0;
            var symbolTag = "[object Symbol]";
            var reTrim = /^\s+|\s+$/g;
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            var reIsBinary = /^0b[01]+$/i;
            var reIsOctal = /^0o[0-7]+$/i;
            var freeParseInt = parseInt;
            var freeGlobal = "object" == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
            var freeSelf = "object" == typeof self && self && self.Object === Object && self;
            var root = freeGlobal || freeSelf || Function("return this")();
            var objectProto = Object.prototype;
            var objectToString = objectProto.toString;
            var nativeMax = Math.max, nativeMin = Math.min;
            var now = function() {
                return root.Date.now();
            };
            function debounce(func, wait, options) {
                var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
                if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                wait = toNumber(wait) || 0;
                if (isObject(options)) {
                    leading = !!options.leading;
                    maxing = "maxWait" in options;
                    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                    trailing = "trailing" in options ? !!options.trailing : trailing;
                }
                function invokeFunc(time) {
                    var args = lastArgs, thisArg = lastThis;
                    lastArgs = lastThis = void 0;
                    lastInvokeTime = time;
                    result = func.apply(thisArg, args);
                    return result;
                }
                function leadingEdge(time) {
                    lastInvokeTime = time;
                    timerId = setTimeout(timerExpired, wait);
                    return leading ? invokeFunc(time) : result;
                }
                function remainingWait(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                }
                function shouldInvoke(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                    return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                }
                function timerExpired() {
                    var time = now();
                    if (shouldInvoke(time)) return trailingEdge(time);
                    timerId = setTimeout(timerExpired, remainingWait(time));
                }
                function trailingEdge(time) {
                    timerId = void 0;
                    if (trailing && lastArgs) return invokeFunc(time);
                    lastArgs = lastThis = void 0;
                    return result;
                }
                function cancel() {
                    if (void 0 !== timerId) clearTimeout(timerId);
                    lastInvokeTime = 0;
                    lastArgs = lastCallTime = lastThis = timerId = void 0;
                }
                function flush() {
                    return void 0 === timerId ? result : trailingEdge(now());
                }
                function debounced() {
                    var time = now(), isInvoking = shouldInvoke(time);
                    lastArgs = arguments;
                    lastThis = this;
                    lastCallTime = time;
                    if (isInvoking) {
                        if (void 0 === timerId) return leadingEdge(lastCallTime);
                        if (maxing) {
                            timerId = setTimeout(timerExpired, wait);
                            return invokeFunc(lastCallTime);
                        }
                    }
                    if (void 0 === timerId) timerId = setTimeout(timerExpired, wait);
                    return result;
                }
                debounced.cancel = cancel;
                debounced.flush = flush;
                return debounced;
            }
            function isObject(value) {
                var type = typeof value;
                return !!value && ("object" == type || "function" == type);
            }
            function isObjectLike(value) {
                return !!value && "object" == typeof value;
            }
            function isSymbol(value) {
                return "symbol" == typeof value || isObjectLike(value) && objectToString.call(value) == symbolTag;
            }
            function toNumber(value) {
                if ("number" == typeof value) return value;
                if (isSymbol(value)) return NAN;
                if (isObject(value)) {
                    var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                    value = isObject(other) ? other + "" : other;
                }
                if ("string" != typeof value) return 0 === value ? value : +value;
                value = value.replace(reTrim, "");
                var isBinary = reIsBinary.test(value);
                return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
            }
            module.exports = debounce;
        },
        773: (module, __unused_webpack_exports, __webpack_require__) => {
            var FUNC_ERROR_TEXT = "Expected a function";
            var HASH_UNDEFINED = "__lodash_hash_undefined__";
            var funcTag = "[object Function]", genTag = "[object GeneratorFunction]";
            var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
            var reIsHostCtor = /^\[object .+?Constructor\]$/;
            var freeGlobal = "object" == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
            var freeSelf = "object" == typeof self && self && self.Object === Object && self;
            var root = freeGlobal || freeSelf || Function("return this")();
            function getValue(object, key) {
                return null == object ? void 0 : object[key];
            }
            function isHostObject(value) {
                var result = false;
                if (null != value && "function" != typeof value.toString) try {
                    result = !!(value + "");
                } catch (e) {}
                return result;
            }
            var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
            var coreJsData = root["__core-js_shared__"];
            var maskSrcKey = function() {
                var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
                return uid ? "Symbol(src)_1." + uid : "";
            }();
            var funcToString = funcProto.toString;
            var hasOwnProperty = objectProto.hasOwnProperty;
            var objectToString = objectProto.toString;
            var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            var splice = arrayProto.splice;
            var Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
            function Hash(entries) {
                var index = -1, length = entries ? entries.length : 0;
                this.clear();
                while (++index < length) {
                    var entry = entries[index];
                    this.set(entry[0], entry[1]);
                }
            }
            function hashClear() {
                this.__data__ = nativeCreate ? nativeCreate(null) : {};
            }
            function hashDelete(key) {
                return this.has(key) && delete this.__data__[key];
            }
            function hashGet(key) {
                var data = this.__data__;
                if (nativeCreate) {
                    var result = data[key];
                    return result === HASH_UNDEFINED ? void 0 : result;
                }
                return hasOwnProperty.call(data, key) ? data[key] : void 0;
            }
            function hashHas(key) {
                var data = this.__data__;
                return nativeCreate ? void 0 !== data[key] : hasOwnProperty.call(data, key);
            }
            function hashSet(key, value) {
                var data = this.__data__;
                data[key] = nativeCreate && void 0 === value ? HASH_UNDEFINED : value;
                return this;
            }
            Hash.prototype.clear = hashClear;
            Hash.prototype["delete"] = hashDelete;
            Hash.prototype.get = hashGet;
            Hash.prototype.has = hashHas;
            Hash.prototype.set = hashSet;
            function ListCache(entries) {
                var index = -1, length = entries ? entries.length : 0;
                this.clear();
                while (++index < length) {
                    var entry = entries[index];
                    this.set(entry[0], entry[1]);
                }
            }
            function listCacheClear() {
                this.__data__ = [];
            }
            function listCacheDelete(key) {
                var data = this.__data__, index = assocIndexOf(data, key);
                if (index < 0) return false;
                var lastIndex = data.length - 1;
                if (index == lastIndex) data.pop(); else splice.call(data, index, 1);
                return true;
            }
            function listCacheGet(key) {
                var data = this.__data__, index = assocIndexOf(data, key);
                return index < 0 ? void 0 : data[index][1];
            }
            function listCacheHas(key) {
                return assocIndexOf(this.__data__, key) > -1;
            }
            function listCacheSet(key, value) {
                var data = this.__data__, index = assocIndexOf(data, key);
                if (index < 0) data.push([ key, value ]); else data[index][1] = value;
                return this;
            }
            ListCache.prototype.clear = listCacheClear;
            ListCache.prototype["delete"] = listCacheDelete;
            ListCache.prototype.get = listCacheGet;
            ListCache.prototype.has = listCacheHas;
            ListCache.prototype.set = listCacheSet;
            function MapCache(entries) {
                var index = -1, length = entries ? entries.length : 0;
                this.clear();
                while (++index < length) {
                    var entry = entries[index];
                    this.set(entry[0], entry[1]);
                }
            }
            function mapCacheClear() {
                this.__data__ = {
                    hash: new Hash,
                    map: new (Map || ListCache),
                    string: new Hash
                };
            }
            function mapCacheDelete(key) {
                return getMapData(this, key)["delete"](key);
            }
            function mapCacheGet(key) {
                return getMapData(this, key).get(key);
            }
            function mapCacheHas(key) {
                return getMapData(this, key).has(key);
            }
            function mapCacheSet(key, value) {
                getMapData(this, key).set(key, value);
                return this;
            }
            MapCache.prototype.clear = mapCacheClear;
            MapCache.prototype["delete"] = mapCacheDelete;
            MapCache.prototype.get = mapCacheGet;
            MapCache.prototype.has = mapCacheHas;
            MapCache.prototype.set = mapCacheSet;
            function assocIndexOf(array, key) {
                var length = array.length;
                while (length--) if (eq(array[length][0], key)) return length;
                return -1;
            }
            function baseIsNative(value) {
                if (!isObject(value) || isMasked(value)) return false;
                var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
                return pattern.test(toSource(value));
            }
            function getMapData(map, key) {
                var data = map.__data__;
                return isKeyable(key) ? data["string" == typeof key ? "string" : "hash"] : data.map;
            }
            function getNative(object, key) {
                var value = getValue(object, key);
                return baseIsNative(value) ? value : void 0;
            }
            function isKeyable(value) {
                var type = typeof value;
                return "string" == type || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value;
            }
            function isMasked(func) {
                return !!maskSrcKey && maskSrcKey in func;
            }
            function toSource(func) {
                if (null != func) {
                    try {
                        return funcToString.call(func);
                    } catch (e) {}
                    try {
                        return func + "";
                    } catch (e) {}
                }
                return "";
            }
            function memoize(func, resolver) {
                if ("function" != typeof func || resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
                var memoized = function() {
                    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                    if (cache.has(key)) return cache.get(key);
                    var result = func.apply(this, args);
                    memoized.cache = cache.set(key, result);
                    return result;
                };
                memoized.cache = new (memoize.Cache || MapCache);
                return memoized;
            }
            memoize.Cache = MapCache;
            function eq(value, other) {
                return value === other || value !== value && other !== other;
            }
            function isFunction(value) {
                var tag = isObject(value) ? objectToString.call(value) : "";
                return tag == funcTag || tag == genTag;
            }
            function isObject(value) {
                var type = typeof value;
                return !!value && ("object" == type || "function" == type);
            }
            module.exports = memoize;
        },
        3096: (module, __unused_webpack_exports, __webpack_require__) => {
            var FUNC_ERROR_TEXT = "Expected a function";
            var NAN = 0 / 0;
            var symbolTag = "[object Symbol]";
            var reTrim = /^\s+|\s+$/g;
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            var reIsBinary = /^0b[01]+$/i;
            var reIsOctal = /^0o[0-7]+$/i;
            var freeParseInt = parseInt;
            var freeGlobal = "object" == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
            var freeSelf = "object" == typeof self && self && self.Object === Object && self;
            var root = freeGlobal || freeSelf || Function("return this")();
            var objectProto = Object.prototype;
            var objectToString = objectProto.toString;
            var nativeMax = Math.max, nativeMin = Math.min;
            var now = function() {
                return root.Date.now();
            };
            function debounce(func, wait, options) {
                var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
                if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                wait = toNumber(wait) || 0;
                if (isObject(options)) {
                    leading = !!options.leading;
                    maxing = "maxWait" in options;
                    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                    trailing = "trailing" in options ? !!options.trailing : trailing;
                }
                function invokeFunc(time) {
                    var args = lastArgs, thisArg = lastThis;
                    lastArgs = lastThis = void 0;
                    lastInvokeTime = time;
                    result = func.apply(thisArg, args);
                    return result;
                }
                function leadingEdge(time) {
                    lastInvokeTime = time;
                    timerId = setTimeout(timerExpired, wait);
                    return leading ? invokeFunc(time) : result;
                }
                function remainingWait(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                }
                function shouldInvoke(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                    return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                }
                function timerExpired() {
                    var time = now();
                    if (shouldInvoke(time)) return trailingEdge(time);
                    timerId = setTimeout(timerExpired, remainingWait(time));
                }
                function trailingEdge(time) {
                    timerId = void 0;
                    if (trailing && lastArgs) return invokeFunc(time);
                    lastArgs = lastThis = void 0;
                    return result;
                }
                function cancel() {
                    if (void 0 !== timerId) clearTimeout(timerId);
                    lastInvokeTime = 0;
                    lastArgs = lastCallTime = lastThis = timerId = void 0;
                }
                function flush() {
                    return void 0 === timerId ? result : trailingEdge(now());
                }
                function debounced() {
                    var time = now(), isInvoking = shouldInvoke(time);
                    lastArgs = arguments;
                    lastThis = this;
                    lastCallTime = time;
                    if (isInvoking) {
                        if (void 0 === timerId) return leadingEdge(lastCallTime);
                        if (maxing) {
                            timerId = setTimeout(timerExpired, wait);
                            return invokeFunc(lastCallTime);
                        }
                    }
                    if (void 0 === timerId) timerId = setTimeout(timerExpired, wait);
                    return result;
                }
                debounced.cancel = cancel;
                debounced.flush = flush;
                return debounced;
            }
            function throttle(func, wait, options) {
                var leading = true, trailing = true;
                if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                if (isObject(options)) {
                    leading = "leading" in options ? !!options.leading : leading;
                    trailing = "trailing" in options ? !!options.trailing : trailing;
                }
                return debounce(func, wait, {
                    leading,
                    maxWait: wait,
                    trailing
                });
            }
            function isObject(value) {
                var type = typeof value;
                return !!value && ("object" == type || "function" == type);
            }
            function isObjectLike(value) {
                return !!value && "object" == typeof value;
            }
            function isSymbol(value) {
                return "symbol" == typeof value || isObjectLike(value) && objectToString.call(value) == symbolTag;
            }
            function toNumber(value) {
                if ("number" == typeof value) return value;
                if (isSymbol(value)) return NAN;
                if (isObject(value)) {
                    var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                    value = isObject(other) ? other + "" : other;
                }
                if ("string" != typeof value) return 0 === value ? value : +value;
                value = value.replace(reTrim, "");
                var isBinary = reIsBinary.test(value);
                return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
            }
            module.exports = throttle;
        },
        4733: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function() {
                "use strict";
                var __bind = function(fn, me) {
                    return function() {
                        return fn.apply(me, arguments);
                    };
                };
                (function(root, factory) {
                    if (true) return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return root.i18n = factory();
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                })("undefined" !== typeof self && null !== self ? self : this, (function() {
                    var Translator, i18n, translator;
                    Translator = function() {
                        function Translator() {
                            this.translate = __bind(this.translate, this);
                            this.data = {
                                values: {},
                                contexts: []
                            };
                            this.globalContext = {};
                        }
                        Translator.prototype.translate = function(text, defaultNumOrFormatting, numOrFormattingOrContext, formattingOrContext, context) {
                            var defaultText, formatting, isObject, num;
                            if (null == context) context = this.globalContext;
                            isObject = function(obj) {
                                var type;
                                type = typeof obj;
                                return "function" === type || "object" === type && !!obj;
                            };
                            if (isObject(defaultNumOrFormatting)) {
                                defaultText = null;
                                num = null;
                                formatting = defaultNumOrFormatting;
                                context = numOrFormattingOrContext || this.globalContext;
                            } else if ("number" === typeof defaultNumOrFormatting) {
                                defaultText = null;
                                num = defaultNumOrFormatting;
                                formatting = numOrFormattingOrContext;
                                context = formattingOrContext || this.globalContext;
                            } else {
                                defaultText = defaultNumOrFormatting;
                                if ("number" === typeof numOrFormattingOrContext) {
                                    num = numOrFormattingOrContext;
                                    formatting = formattingOrContext;
                                    context;
                                } else {
                                    num = null;
                                    formatting = numOrFormattingOrContext;
                                    context = formattingOrContext || this.globalContext;
                                }
                            }
                            if (isObject(text)) {
                                if (isObject(text["i18n"])) text = text["i18n"];
                                return this.translateHash(text, context);
                            } else return this.translateText(text, num, formatting, context, defaultText);
                        };
                        Translator.prototype.add = function(d) {
                            var c, k, v, _i, _len, _ref, _ref1, _results;
                            if (null != d.values) {
                                _ref = d.values;
                                for (k in _ref) {
                                    v = _ref[k];
                                    this.data.values[k] = v;
                                }
                            }
                            if (null != d.contexts) {
                                _ref1 = d.contexts;
                                _results = [];
                                for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                                    c = _ref1[_i];
                                    _results.push(this.data.contexts.push(c));
                                }
                                return _results;
                            }
                        };
                        Translator.prototype.setContext = function(key, value) {
                            return this.globalContext[key] = value;
                        };
                        Translator.prototype.extend = function(ext) {
                            return this.extension = ext;
                        };
                        Translator.prototype.clearContext = function(key) {
                            return this.globalContext[key] = null;
                        };
                        Translator.prototype.reset = function() {
                            this.resetData();
                            return this.resetContext();
                        };
                        Translator.prototype.resetData = function() {
                            return this.data = {
                                values: {},
                                contexts: []
                            };
                        };
                        Translator.prototype.resetContext = function() {
                            return this.globalContext = {};
                        };
                        Translator.prototype.translateHash = function(hash, context) {
                            var k, v;
                            for (k in hash) {
                                v = hash[k];
                                if ("string" === typeof v) hash[k] = this.translateText(v, null, null, context);
                            }
                            return hash;
                        };
                        Translator.prototype.translateText = function(text, num, formatting, context, defaultText) {
                            var contextData, result;
                            if (null == context) context = this.globalContext;
                            if (null == this.data) return this.useOriginalText(defaultText || text, num, formatting);
                            contextData = this.getContextData(this.data, context);
                            if (null != contextData) result = this.findTranslation(text, num, formatting, contextData.values, defaultText);
                            if (null == result) result = this.findTranslation(text, num, formatting, this.data.values, defaultText);
                            if (null == result) return this.useOriginalText(defaultText || text, num, formatting);
                            return result;
                        };
                        Translator.prototype.findTranslation = function(text, num, formatting, data, defaultText) {
                            var a, b, c, d, e, result, triple, value, _i, _len;
                            value = data[text];
                            if (null == value) return null;
                            if ("object" === typeof value && !Array.isArray(value)) if (this.extension && "function" === typeof this.extension) {
                                value = this.extension(text, num, formatting, value);
                                value = this.applyNumbers(value, num);
                                return this.applyFormatting(value, num, formatting);
                            } else return this.useOriginalText(defaultText || text, num, formatting);
                            if (null == num && !Array.isArray(value)) {
                                if ("string" === typeof value) return this.applyFormatting(value, num, formatting);
                            } else if (value instanceof Array || value.length) {
                                a = null === num;
                                for (_i = 0, _len = value.length; _i < _len; _i++) {
                                    triple = value[_i];
                                    b = null === triple[0];
                                    c = null === triple[1];
                                    d = num >= triple[0];
                                    e = num <= triple[1];
                                    if (a && b && c || !a && (!b && d && (c || e) || b && !c && e)) {
                                        result = this.applyFormatting(triple[2].replace("-%n", String(-num)), num, formatting);
                                        return this.applyFormatting(result.replace("%n", String(num)), num, formatting);
                                    }
                                }
                            }
                            return null;
                        };
                        Translator.prototype.applyNumbers = function(str, num) {
                            str = str.replace("-%n", String(-num));
                            str = str.replace("%n", String(num));
                            return str;
                        };
                        Translator.prototype.getContextData = function(data, context) {
                            var c, equal, key, value, _i, _len, _ref, _ref1;
                            if (null == data.contexts) return null;
                            _ref = data.contexts;
                            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                                c = _ref[_i];
                                equal = true;
                                _ref1 = c.matches;
                                for (key in _ref1) {
                                    value = _ref1[key];
                                    equal = equal && value === context[key];
                                }
                                if (equal) return c;
                            }
                            return null;
                        };
                        Translator.prototype.useOriginalText = function(text, num, formatting) {
                            if (null == num) return this.applyFormatting(text, num, formatting);
                            return this.applyFormatting(text.replace("%n", String(num)), num, formatting);
                        };
                        Translator.prototype.applyFormatting = function(text, num, formatting) {
                            var ind, regex;
                            for (ind in formatting) {
                                regex = new RegExp("%{" + ind + "}", "g");
                                text = text.replace(regex, formatting[ind]);
                            }
                            return text;
                        };
                        return Translator;
                    }();
                    translator = new Translator;
                    i18n = translator.translate;
                    i18n.translator = translator;
                    i18n.create = function(data) {
                        var trans;
                        trans = new Translator;
                        if (null != data) trans.add(data);
                        trans.translate.create = i18n.create;
                        trans.translate.translator = trans;
                        return trans.translate;
                    };
                    return i18n;
                }));
            }).call(this);
        },
        5055: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(6282);
            var tryToString = __webpack_require__(180);
            var $TypeError = TypeError;
            module.exports = function(argument) {
                if (isCallable(argument)) return argument;
                throw $TypeError(tryToString(argument) + " is not a function");
            };
        },
        2004: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(6282);
            var $String = String;
            var $TypeError = TypeError;
            module.exports = function(argument) {
                if ("object" == typeof argument || isCallable(argument)) return argument;
                throw $TypeError("Can't set " + $String(argument) + " as a prototype");
            };
        },
        9256: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(8149);
            var create = __webpack_require__(1525);
            var defineProperty = __webpack_require__(9168).f;
            var UNSCOPABLES = wellKnownSymbol("unscopables");
            var ArrayPrototype = Array.prototype;
            if (void 0 == ArrayPrototype[UNSCOPABLES]) defineProperty(ArrayPrototype, UNSCOPABLES, {
                configurable: true,
                value: create(null)
            });
            module.exports = function(key) {
                ArrayPrototype[UNSCOPABLES][key] = true;
            };
        },
        3615: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var charAt = __webpack_require__(7321).charAt;
            module.exports = function(S, index, unicode) {
                return index + (unicode ? charAt(S, index).length : 1);
            };
        },
        3046: (module, __unused_webpack_exports, __webpack_require__) => {
            var isPrototypeOf = __webpack_require__(1786);
            var $TypeError = TypeError;
            module.exports = function(it, Prototype) {
                if (isPrototypeOf(Prototype, it)) return it;
                throw $TypeError("Incorrect invocation");
            };
        },
        1474: (module, __unused_webpack_exports, __webpack_require__) => {
            var isObject = __webpack_require__(5896);
            var $String = String;
            var $TypeError = TypeError;
            module.exports = function(argument) {
                if (isObject(argument)) return argument;
                throw $TypeError($String(argument) + " is not an object");
            };
        },
        8774: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            module.exports = fails((function() {
                if ("function" == typeof ArrayBuffer) {
                    var buffer = new ArrayBuffer(8);
                    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, "a", {
                        value: 8
                    });
                }
            }));
        },
        1269: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $forEach = __webpack_require__(528).forEach;
            var arrayMethodIsStrict = __webpack_require__(1923);
            var STRICT_METHOD = arrayMethodIsStrict("forEach");
            module.exports = !STRICT_METHOD ? function forEach(callbackfn) {
                return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            } : [].forEach;
        },
        5675: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIndexedObject = __webpack_require__(3206);
            var toAbsoluteIndex = __webpack_require__(9623);
            var lengthOfArrayLike = __webpack_require__(1829);
            var createMethod = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = lengthOfArrayLike(O);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    if (IS_INCLUDES && el != el) while (length > index) {
                        value = O[index++];
                        if (value != value) return true;
                    } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                    return !IS_INCLUDES && -1;
                };
            };
            module.exports = {
                includes: createMethod(true),
                indexOf: createMethod(false)
            };
        },
        528: (module, __unused_webpack_exports, __webpack_require__) => {
            var bind = __webpack_require__(1098);
            var uncurryThis = __webpack_require__(1768);
            var IndexedObject = __webpack_require__(7530);
            var toObject = __webpack_require__(9473);
            var lengthOfArrayLike = __webpack_require__(1829);
            var arraySpeciesCreate = __webpack_require__(2768);
            var push = uncurryThis([].push);
            var createMethod = function(TYPE) {
                var IS_MAP = 1 == TYPE;
                var IS_FILTER = 2 == TYPE;
                var IS_SOME = 3 == TYPE;
                var IS_EVERY = 4 == TYPE;
                var IS_FIND_INDEX = 6 == TYPE;
                var IS_FILTER_REJECT = 7 == TYPE;
                var NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
                return function($this, callbackfn, that, specificCreate) {
                    var O = toObject($this);
                    var self = IndexedObject(O);
                    var boundFunction = bind(callbackfn, that);
                    var length = lengthOfArrayLike(self);
                    var index = 0;
                    var create = specificCreate || arraySpeciesCreate;
                    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
                    var value, result;
                    for (;length > index; index++) if (NO_HOLES || index in self) {
                        value = self[index];
                        result = boundFunction(value, index, O);
                        if (TYPE) if (IS_MAP) target[index] = result; else if (result) switch (TYPE) {
                          case 3:
                            return true;

                          case 5:
                            return value;

                          case 6:
                            return index;

                          case 2:
                            push(target, value);
                        } else switch (TYPE) {
                          case 4:
                            return false;

                          case 7:
                            push(target, value);
                        }
                    }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
                };
            };
            module.exports = {
                forEach: createMethod(0),
                map: createMethod(1),
                filter: createMethod(2),
                some: createMethod(3),
                every: createMethod(4),
                find: createMethod(5),
                findIndex: createMethod(6),
                filterReject: createMethod(7)
            };
        },
        4820: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            var wellKnownSymbol = __webpack_require__(8149);
            var V8_VERSION = __webpack_require__(4324);
            var SPECIES = wellKnownSymbol("species");
            module.exports = function(METHOD_NAME) {
                return V8_VERSION >= 51 || !fails((function() {
                    var array = [];
                    var constructor = array.constructor = {};
                    constructor[SPECIES] = function() {
                        return {
                            foo: 1
                        };
                    };
                    return 1 !== array[METHOD_NAME](Boolean).foo;
                }));
            };
        },
        1923: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var fails = __webpack_require__(6183);
            module.exports = function(METHOD_NAME, argument) {
                var method = [][METHOD_NAME];
                return !!method && fails((function() {
                    method.call(null, argument || function() {
                        return 1;
                    }, 1);
                }));
            };
        },
        6589: (module, __unused_webpack_exports, __webpack_require__) => {
            var aCallable = __webpack_require__(5055);
            var toObject = __webpack_require__(9473);
            var IndexedObject = __webpack_require__(7530);
            var lengthOfArrayLike = __webpack_require__(1829);
            var $TypeError = TypeError;
            var createMethod = function(IS_RIGHT) {
                return function(that, callbackfn, argumentsLength, memo) {
                    aCallable(callbackfn);
                    var O = toObject(that);
                    var self = IndexedObject(O);
                    var length = lengthOfArrayLike(O);
                    var index = IS_RIGHT ? length - 1 : 0;
                    var i = IS_RIGHT ? -1 : 1;
                    if (argumentsLength < 2) while (true) {
                        if (index in self) {
                            memo = self[index];
                            index += i;
                            break;
                        }
                        index += i;
                        if (IS_RIGHT ? index < 0 : length <= index) throw $TypeError("Reduce of empty array with no initial value");
                    }
                    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) memo = callbackfn(memo, self[index], index, O);
                    return memo;
                };
            };
            module.exports = {
                left: createMethod(false),
                right: createMethod(true)
            };
        },
        4072: (module, __unused_webpack_exports, __webpack_require__) => {
            var toAbsoluteIndex = __webpack_require__(9623);
            var lengthOfArrayLike = __webpack_require__(1829);
            var createProperty = __webpack_require__(2759);
            var $Array = Array;
            var max = Math.max;
            module.exports = function(O, start, end) {
                var length = lengthOfArrayLike(O);
                var k = toAbsoluteIndex(start, length);
                var fin = toAbsoluteIndex(void 0 === end ? length : end, length);
                var result = $Array(max(fin - k, 0));
                for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
                result.length = n;
                return result;
            };
        },
        9882: (module, __unused_webpack_exports, __webpack_require__) => {
            var isArray = __webpack_require__(7931);
            var isConstructor = __webpack_require__(2240);
            var isObject = __webpack_require__(5896);
            var wellKnownSymbol = __webpack_require__(8149);
            var SPECIES = wellKnownSymbol("species");
            var $Array = Array;
            module.exports = function(originalArray) {
                var C;
                if (isArray(originalArray)) {
                    C = originalArray.constructor;
                    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = void 0; else if (isObject(C)) {
                        C = C[SPECIES];
                        if (null === C) C = void 0;
                    }
                }
                return void 0 === C ? $Array : C;
            };
        },
        2768: (module, __unused_webpack_exports, __webpack_require__) => {
            var arraySpeciesConstructor = __webpack_require__(9882);
            module.exports = function(originalArray, length) {
                return new (arraySpeciesConstructor(originalArray))(0 === length ? 0 : length);
            };
        },
        1751: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(8149);
            var ITERATOR = wellKnownSymbol("iterator");
            var SAFE_CLOSING = false;
            try {
                var called = 0;
                var iteratorWithReturn = {
                    next: function() {
                        return {
                            done: !!called++
                        };
                    },
                    return: function() {
                        SAFE_CLOSING = true;
                    }
                };
                iteratorWithReturn[ITERATOR] = function() {
                    return this;
                };
                Array.from(iteratorWithReturn, (function() {
                    throw 2;
                }));
            } catch (error) {}
            module.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                    var object = {};
                    object[ITERATOR] = function() {
                        return {
                            next: function() {
                                return {
                                    done: ITERATION_SUPPORT = true
                                };
                            }
                        };
                    };
                    exec(object);
                } catch (error) {}
                return ITERATION_SUPPORT;
            };
        },
        1510: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var toString = uncurryThis({}.toString);
            var stringSlice = uncurryThis("".slice);
            module.exports = function(it) {
                return stringSlice(toString(it), 8, -1);
            };
        },
        9225: (module, __unused_webpack_exports, __webpack_require__) => {
            var TO_STRING_TAG_SUPPORT = __webpack_require__(4823);
            var isCallable = __webpack_require__(6282);
            var classofRaw = __webpack_require__(1510);
            var wellKnownSymbol = __webpack_require__(8149);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var $Object = Object;
            var CORRECT_ARGUMENTS = "Arguments" == classofRaw(function() {
                return arguments;
            }());
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (error) {}
            };
            module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
                var O, tag, result;
                return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : "Object" == (result = classofRaw(O)) && isCallable(O.callee) ? "Arguments" : result;
            };
        },
        7790: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var uncurryThis = __webpack_require__(1768);
            var defineBuiltIns = __webpack_require__(6367);
            var getWeakData = __webpack_require__(6582).getWeakData;
            var anInstance = __webpack_require__(3046);
            var anObject = __webpack_require__(1474);
            var isNullOrUndefined = __webpack_require__(2420);
            var isObject = __webpack_require__(5896);
            var iterate = __webpack_require__(1518);
            var ArrayIterationModule = __webpack_require__(528);
            var hasOwn = __webpack_require__(8281);
            var InternalStateModule = __webpack_require__(1030);
            var setInternalState = InternalStateModule.set;
            var internalStateGetterFor = InternalStateModule.getterFor;
            var find = ArrayIterationModule.find;
            var findIndex = ArrayIterationModule.findIndex;
            var splice = uncurryThis([].splice);
            var id = 0;
            var uncaughtFrozenStore = function(store) {
                return store.frozen || (store.frozen = new UncaughtFrozenStore);
            };
            var UncaughtFrozenStore = function() {
                this.entries = [];
            };
            var findUncaughtFrozen = function(store, key) {
                return find(store.entries, (function(it) {
                    return it[0] === key;
                }));
            };
            UncaughtFrozenStore.prototype = {
                get: function(key) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) return entry[1];
                },
                has: function(key) {
                    return !!findUncaughtFrozen(this, key);
                },
                set: function(key, value) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) entry[1] = value; else this.entries.push([ key, value ]);
                },
                delete: function(key) {
                    var index = findIndex(this.entries, (function(it) {
                        return it[0] === key;
                    }));
                    if (~index) splice(this.entries, index, 1);
                    return !!~index;
                }
            };
            module.exports = {
                getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
                    var Constructor = wrapper((function(that, iterable) {
                        anInstance(that, Prototype);
                        setInternalState(that, {
                            type: CONSTRUCTOR_NAME,
                            id: id++,
                            frozen: void 0
                        });
                        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                            that,
                            AS_ENTRIES: IS_MAP
                        });
                    }));
                    var Prototype = Constructor.prototype;
                    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
                    var define = function(that, key, value) {
                        var state = getInternalState(that);
                        var data = getWeakData(anObject(key), true);
                        if (true === data) uncaughtFrozenStore(state).set(key, value); else data[state.id] = value;
                        return that;
                    };
                    defineBuiltIns(Prototype, {
                        delete: function(key) {
                            var state = getInternalState(this);
                            if (!isObject(key)) return false;
                            var data = getWeakData(key);
                            if (true === data) return uncaughtFrozenStore(state)["delete"](key);
                            return data && hasOwn(data, state.id) && delete data[state.id];
                        },
                        has: function has(key) {
                            var state = getInternalState(this);
                            if (!isObject(key)) return false;
                            var data = getWeakData(key);
                            if (true === data) return uncaughtFrozenStore(state).has(key);
                            return data && hasOwn(data, state.id);
                        }
                    });
                    defineBuiltIns(Prototype, IS_MAP ? {
                        get: function get(key) {
                            var state = getInternalState(this);
                            if (isObject(key)) {
                                var data = getWeakData(key);
                                if (true === data) return uncaughtFrozenStore(state).get(key);
                                return data ? data[state.id] : void 0;
                            }
                        },
                        set: function set(key, value) {
                            return define(this, key, value);
                        }
                    } : {
                        add: function add(value) {
                            return define(this, value, true);
                        }
                    });
                    return Constructor;
                }
            };
        },
        6645: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(4761);
            var global = __webpack_require__(8454);
            var uncurryThis = __webpack_require__(1768);
            var isForced = __webpack_require__(1949);
            var defineBuiltIn = __webpack_require__(2054);
            var InternalMetadataModule = __webpack_require__(6582);
            var iterate = __webpack_require__(1518);
            var anInstance = __webpack_require__(3046);
            var isCallable = __webpack_require__(6282);
            var isNullOrUndefined = __webpack_require__(2420);
            var isObject = __webpack_require__(5896);
            var fails = __webpack_require__(6183);
            var checkCorrectnessOfIteration = __webpack_require__(1751);
            var setToStringTag = __webpack_require__(820);
            var inheritIfRequired = __webpack_require__(7770);
            module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
                var IS_MAP = -1 !== CONSTRUCTOR_NAME.indexOf("Map");
                var IS_WEAK = -1 !== CONSTRUCTOR_NAME.indexOf("Weak");
                var ADDER = IS_MAP ? "set" : "add";
                var NativeConstructor = global[CONSTRUCTOR_NAME];
                var NativePrototype = NativeConstructor && NativeConstructor.prototype;
                var Constructor = NativeConstructor;
                var exported = {};
                var fixMethod = function(KEY) {
                    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
                    defineBuiltIn(NativePrototype, KEY, "add" == KEY ? function add(value) {
                        uncurriedNativeMethod(this, 0 === value ? 0 : value);
                        return this;
                    } : "delete" == KEY ? function(key) {
                        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, 0 === key ? 0 : key);
                    } : "get" == KEY ? function get(key) {
                        return IS_WEAK && !isObject(key) ? void 0 : uncurriedNativeMethod(this, 0 === key ? 0 : key);
                    } : "has" == KEY ? function has(key) {
                        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, 0 === key ? 0 : key);
                    } : function set(key, value) {
                        uncurriedNativeMethod(this, 0 === key ? 0 : key, value);
                        return this;
                    });
                };
                var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails((function() {
                    (new NativeConstructor).entries().next();
                }))));
                if (REPLACE) {
                    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
                    InternalMetadataModule.enable();
                } else if (isForced(CONSTRUCTOR_NAME, true)) {
                    var instance = new Constructor;
                    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                    var THROWS_ON_PRIMITIVES = fails((function() {
                        instance.has(1);
                    }));
                    var ACCEPT_ITERABLES = checkCorrectnessOfIteration((function(iterable) {
                        new NativeConstructor(iterable);
                    }));
                    var BUGGY_ZERO = !IS_WEAK && fails((function() {
                        var $instance = new NativeConstructor;
                        var index = 5;
                        while (index--) $instance[ADDER](index, index);
                        return !$instance.has(-0);
                    }));
                    if (!ACCEPT_ITERABLES) {
                        Constructor = wrapper((function(dummy, iterable) {
                            anInstance(dummy, NativePrototype);
                            var that = inheritIfRequired(new NativeConstructor, dummy, Constructor);
                            if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                                that,
                                AS_ENTRIES: IS_MAP
                            });
                            return that;
                        }));
                        Constructor.prototype = NativePrototype;
                        NativePrototype.constructor = Constructor;
                    }
                    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                        fixMethod("delete");
                        fixMethod("has");
                        IS_MAP && fixMethod("get");
                    }
                    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
                }
                exported[CONSTRUCTOR_NAME] = Constructor;
                $({
                    global: true,
                    constructor: true,
                    forced: Constructor != NativeConstructor
                }, exported);
                setToStringTag(Constructor, CONSTRUCTOR_NAME);
                if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
                return Constructor;
            };
        },
        882: (module, __unused_webpack_exports, __webpack_require__) => {
            var hasOwn = __webpack_require__(8281);
            var ownKeys = __webpack_require__(1441);
            var getOwnPropertyDescriptorModule = __webpack_require__(5663);
            var definePropertyModule = __webpack_require__(9168);
            module.exports = function(target, source, exceptions) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        },
        7401: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            module.exports = !fails((function() {
                function F() {}
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F) !== F.prototype;
            }));
        },
        5351: module => {
            module.exports = function(value, done) {
                return {
                    value,
                    done
                };
            };
        },
        1501: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var definePropertyModule = __webpack_require__(9168);
            var createPropertyDescriptor = __webpack_require__(9273);
            module.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        },
        9273: module => {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(1 & bitmap),
                    configurable: !(2 & bitmap),
                    writable: !(4 & bitmap),
                    value
                };
            };
        },
        2759: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toPropertyKey = __webpack_require__(2988);
            var definePropertyModule = __webpack_require__(9168);
            var createPropertyDescriptor = __webpack_require__(9273);
            module.exports = function(object, key, value) {
                var propertyKey = toPropertyKey(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value)); else object[propertyKey] = value;
            };
        },
        2054: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(6282);
            var definePropertyModule = __webpack_require__(9168);
            var makeBuiltIn = __webpack_require__(5903);
            var defineGlobalProperty = __webpack_require__(7194);
            module.exports = function(O, key, value, options) {
                if (!options) options = {};
                var simple = options.enumerable;
                var name = void 0 !== options.name ? options.name : key;
                if (isCallable(value)) makeBuiltIn(value, name, options);
                if (options.global) if (simple) O[key] = value; else defineGlobalProperty(key, value); else {
                    try {
                        if (!options.unsafe) delete O[key]; else if (O[key]) simple = true;
                    } catch (error) {}
                    if (simple) O[key] = value; else definePropertyModule.f(O, key, {
                        value,
                        enumerable: false,
                        configurable: !options.nonConfigurable,
                        writable: !options.nonWritable
                    });
                }
                return O;
            };
        },
        6367: (module, __unused_webpack_exports, __webpack_require__) => {
            var defineBuiltIn = __webpack_require__(2054);
            module.exports = function(target, src, options) {
                for (var key in src) defineBuiltIn(target, key, src[key], options);
                return target;
            };
        },
        7194: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var defineProperty = Object.defineProperty;
            module.exports = function(key, value) {
                try {
                    defineProperty(global, key, {
                        value,
                        configurable: true,
                        writable: true
                    });
                } catch (error) {
                    global[key] = value;
                }
                return value;
            };
        },
        723: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            module.exports = !fails((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7;
                    }
                })[1];
            }));
        },
        1685: module => {
            var documentAll = "object" == typeof document && document.all;
            var IS_HTMLDDA = "undefined" == typeof documentAll && void 0 !== documentAll;
            module.exports = {
                all: documentAll,
                IS_HTMLDDA
            };
        },
        7282: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var isObject = __webpack_require__(5896);
            var document = global.document;
            var EXISTS = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return EXISTS ? document.createElement(it) : {};
            };
        },
        6181: module => {
            module.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            };
        },
        2387: (module, __unused_webpack_exports, __webpack_require__) => {
            var documentCreateElement = __webpack_require__(7282);
            var classList = documentCreateElement("span").classList;
            var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
            module.exports = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
        },
        7594: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(1510);
            var global = __webpack_require__(8454);
            module.exports = "process" == classof(global.process);
        },
        2543: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(4991);
            module.exports = getBuiltIn("navigator", "userAgent") || "";
        },
        4324: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var userAgent = __webpack_require__(2543);
            var process = global.process;
            var Deno = global.Deno;
            var versions = process && process.versions || Deno && Deno.version;
            var v8 = versions && versions.v8;
            var match, version;
            if (v8) {
                match = v8.split(".");
                version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
            }
            if (!version && userAgent) {
                match = userAgent.match(/Edge\/(\d+)/);
                if (!match || match[1] >= 74) {
                    match = userAgent.match(/Chrome\/(\d+)/);
                    if (match) version = +match[1];
                }
            }
            module.exports = version;
        },
        8409: module => {
            module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
        },
        4761: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var getOwnPropertyDescriptor = __webpack_require__(5663).f;
            var createNonEnumerableProperty = __webpack_require__(1501);
            var defineBuiltIn = __webpack_require__(2054);
            var defineGlobalProperty = __webpack_require__(7194);
            var copyConstructorProperties = __webpack_require__(882);
            var isForced = __webpack_require__(1949);
            module.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global; else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {}); else target = (global[TARGET] || {}).prototype;
                if (target) for (key in source) {
                    sourceProperty = source[key];
                    if (options.dontCallGetSet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                    if (!FORCED && void 0 !== targetProperty) {
                        if (typeof sourceProperty == typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
                    defineBuiltIn(target, key, sourceProperty, options);
                }
            };
        },
        6183: module => {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
        },
        9696: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            __webpack_require__(9989);
            var uncurryThis = __webpack_require__(9252);
            var defineBuiltIn = __webpack_require__(2054);
            var regexpExec = __webpack_require__(5510);
            var fails = __webpack_require__(6183);
            var wellKnownSymbol = __webpack_require__(8149);
            var createNonEnumerableProperty = __webpack_require__(1501);
            var SPECIES = wellKnownSymbol("species");
            var RegExpPrototype = RegExp.prototype;
            module.exports = function(KEY, exec, FORCED, SHAM) {
                var SYMBOL = wellKnownSymbol(KEY);
                var DELEGATES_TO_SYMBOL = !fails((function() {
                    var O = {};
                    O[SYMBOL] = function() {
                        return 7;
                    };
                    return 7 != ""[KEY](O);
                }));
                var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails((function() {
                    var execCalled = false;
                    var re = /a/;
                    if ("split" === KEY) {
                        re = {};
                        re.constructor = {};
                        re.constructor[SPECIES] = function() {
                            return re;
                        };
                        re.flags = "";
                        re[SYMBOL] = /./[SYMBOL];
                    }
                    re.exec = function() {
                        execCalled = true;
                        return null;
                    };
                    re[SYMBOL]("");
                    return !execCalled;
                }));
                if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
                    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
                    var methods = exec(SYMBOL, ""[KEY], (function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                        var uncurriedNativeMethod = uncurryThis(nativeMethod);
                        var $exec = regexp.exec;
                        if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                            if (DELEGATES_TO_SYMBOL && !forceStringMethod) return {
                                done: true,
                                value: uncurriedNativeRegExpMethod(regexp, str, arg2)
                            };
                            return {
                                done: true,
                                value: uncurriedNativeMethod(str, regexp, arg2)
                            };
                        }
                        return {
                            done: false
                        };
                    }));
                    defineBuiltIn(String.prototype, KEY, methods[0]);
                    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
                }
                if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
            };
        },
        3116: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            module.exports = !fails((function() {
                return Object.isExtensible(Object.preventExtensions({}));
            }));
        },
        6218: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_BIND = __webpack_require__(160);
            var FunctionPrototype = Function.prototype;
            var apply = FunctionPrototype.apply;
            var call = FunctionPrototype.call;
            module.exports = "object" == typeof Reflect && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
                return call.apply(apply, arguments);
            });
        },
        1098: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(9252);
            var aCallable = __webpack_require__(5055);
            var NATIVE_BIND = __webpack_require__(160);
            var bind = uncurryThis(uncurryThis.bind);
            module.exports = function(fn, that) {
                aCallable(fn);
                return void 0 === that ? fn : NATIVE_BIND ? bind(fn, that) : function() {
                    return fn.apply(that, arguments);
                };
            };
        },
        160: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            module.exports = !fails((function() {
                var test = function() {}.bind();
                return "function" != typeof test || test.hasOwnProperty("prototype");
            }));
        },
        4552: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_BIND = __webpack_require__(160);
            var call = Function.prototype.call;
            module.exports = NATIVE_BIND ? call.bind(call) : function() {
                return call.apply(call, arguments);
            };
        },
        4530: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var hasOwn = __webpack_require__(8281);
            var FunctionPrototype = Function.prototype;
            var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
            var EXISTS = hasOwn(FunctionPrototype, "name");
            var PROPER = EXISTS && "something" === function something() {}.name;
            var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
            module.exports = {
                EXISTS,
                PROPER,
                CONFIGURABLE
            };
        },
        9252: (module, __unused_webpack_exports, __webpack_require__) => {
            var classofRaw = __webpack_require__(1510);
            var uncurryThis = __webpack_require__(1768);
            module.exports = function(fn) {
                if ("Function" === classofRaw(fn)) return uncurryThis(fn);
            };
        },
        1768: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_BIND = __webpack_require__(160);
            var FunctionPrototype = Function.prototype;
            var call = FunctionPrototype.call;
            var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
            module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
                return function() {
                    return call.apply(fn, arguments);
                };
            };
        },
        4991: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var isCallable = __webpack_require__(6282);
            var aFunction = function(argument) {
                return isCallable(argument) ? argument : void 0;
            };
            module.exports = function(namespace, method) {
                return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
            };
        },
        650: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(9225);
            var getMethod = __webpack_require__(9827);
            var isNullOrUndefined = __webpack_require__(2420);
            var Iterators = __webpack_require__(6126);
            var wellKnownSymbol = __webpack_require__(8149);
            var ITERATOR = wellKnownSymbol("iterator");
            module.exports = function(it) {
                if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
            };
        },
        7755: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4552);
            var aCallable = __webpack_require__(5055);
            var anObject = __webpack_require__(1474);
            var tryToString = __webpack_require__(180);
            var getIteratorMethod = __webpack_require__(650);
            var $TypeError = TypeError;
            module.exports = function(argument, usingIterator) {
                var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
                if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
                throw $TypeError(tryToString(argument) + " is not iterable");
            };
        },
        9827: (module, __unused_webpack_exports, __webpack_require__) => {
            var aCallable = __webpack_require__(5055);
            var isNullOrUndefined = __webpack_require__(2420);
            module.exports = function(V, P) {
                var func = V[P];
                return isNullOrUndefined(func) ? void 0 : aCallable(func);
            };
        },
        4742: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var toObject = __webpack_require__(9473);
            var floor = Math.floor;
            var charAt = uncurryThis("".charAt);
            var replace = uncurryThis("".replace);
            var stringSlice = uncurryThis("".slice);
            var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
            var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
            module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
                var tailPos = position + matched.length;
                var m = captures.length;
                var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                if (void 0 !== namedCaptures) {
                    namedCaptures = toObject(namedCaptures);
                    symbols = SUBSTITUTION_SYMBOLS;
                }
                return replace(replacement, symbols, (function(match, ch) {
                    var capture;
                    switch (charAt(ch, 0)) {
                      case "$":
                        return "$";

                      case "&":
                        return matched;

                      case "`":
                        return stringSlice(str, 0, position);

                      case "'":
                        return stringSlice(str, tailPos);

                      case "<":
                        capture = namedCaptures[stringSlice(ch, 1, -1)];
                        break;

                      default:
                        var n = +ch;
                        if (0 === n) return match;
                        if (n > m) {
                            var f = floor(n / 10);
                            if (0 === f) return match;
                            if (f <= m) return void 0 === captures[f - 1] ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                            return match;
                        }
                        capture = captures[n - 1];
                    }
                    return void 0 === capture ? "" : capture;
                }));
            };
        },
        8454: (module, __unused_webpack_exports, __webpack_require__) => {
            var check = function(it) {
                return it && it.Math == Math && it;
            };
            module.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof __webpack_require__.g && __webpack_require__.g) || function() {
                return this;
            }() || Function("return this")();
        },
        8281: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var toObject = __webpack_require__(9473);
            var hasOwnProperty = uncurryThis({}.hasOwnProperty);
            module.exports = Object.hasOwn || function hasOwn(it, key) {
                return hasOwnProperty(toObject(it), key);
            };
        },
        4377: module => {
            module.exports = {};
        },
        7461: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(4991);
            module.exports = getBuiltIn("document", "documentElement");
        },
        4985: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var fails = __webpack_require__(6183);
            var createElement = __webpack_require__(7282);
            module.exports = !DESCRIPTORS && !fails((function() {
                return 7 != Object.defineProperty(createElement("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            }));
        },
        7530: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var fails = __webpack_require__(6183);
            var classof = __webpack_require__(1510);
            var $Object = Object;
            var split = uncurryThis("".split);
            module.exports = fails((function() {
                return !$Object("z").propertyIsEnumerable(0);
            })) ? function(it) {
                return "String" == classof(it) ? split(it, "") : $Object(it);
            } : $Object;
        },
        7770: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(6282);
            var isObject = __webpack_require__(5896);
            var setPrototypeOf = __webpack_require__(5900);
            module.exports = function($this, dummy, Wrapper) {
                var NewTarget, NewTargetPrototype;
                if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
                return $this;
            };
        },
        6901: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var isCallable = __webpack_require__(6282);
            var store = __webpack_require__(2047);
            var functionToString = uncurryThis(Function.toString);
            if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
                return functionToString(it);
            };
            module.exports = store.inspectSource;
        },
        6582: (module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(4761);
            var uncurryThis = __webpack_require__(1768);
            var hiddenKeys = __webpack_require__(4377);
            var isObject = __webpack_require__(5896);
            var hasOwn = __webpack_require__(8281);
            var defineProperty = __webpack_require__(9168).f;
            var getOwnPropertyNamesModule = __webpack_require__(6785);
            var getOwnPropertyNamesExternalModule = __webpack_require__(6675);
            var isExtensible = __webpack_require__(6662);
            var uid = __webpack_require__(9059);
            var FREEZING = __webpack_require__(3116);
            var REQUIRED = false;
            var METADATA = uid("meta");
            var id = 0;
            var setMetadata = function(it) {
                defineProperty(it, METADATA, {
                    value: {
                        objectID: "O" + id++,
                        weakData: {}
                    }
                });
            };
            var fastKey = function(it, create) {
                if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
                if (!hasOwn(it, METADATA)) {
                    if (!isExtensible(it)) return "F";
                    if (!create) return "E";
                    setMetadata(it);
                }
                return it[METADATA].objectID;
            };
            var getWeakData = function(it, create) {
                if (!hasOwn(it, METADATA)) {
                    if (!isExtensible(it)) return true;
                    if (!create) return false;
                    setMetadata(it);
                }
                return it[METADATA].weakData;
            };
            var onFreeze = function(it) {
                if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
                return it;
            };
            var enable = function() {
                meta.enable = function() {};
                REQUIRED = true;
                var getOwnPropertyNames = getOwnPropertyNamesModule.f;
                var splice = uncurryThis([].splice);
                var test = {};
                test[METADATA] = 1;
                if (getOwnPropertyNames(test).length) {
                    getOwnPropertyNamesModule.f = function(it) {
                        var result = getOwnPropertyNames(it);
                        for (var i = 0, length = result.length; i < length; i++) if (result[i] === METADATA) {
                            splice(result, i, 1);
                            break;
                        }
                        return result;
                    };
                    $({
                        target: "Object",
                        stat: true,
                        forced: true
                    }, {
                        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
                    });
                }
            };
            var meta = module.exports = {
                enable,
                fastKey,
                getWeakData,
                onFreeze
            };
            hiddenKeys[METADATA] = true;
        },
        1030: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_WEAK_MAP = __webpack_require__(9780);
            var global = __webpack_require__(8454);
            var isObject = __webpack_require__(5896);
            var createNonEnumerableProperty = __webpack_require__(1501);
            var hasOwn = __webpack_require__(8281);
            var shared = __webpack_require__(2047);
            var sharedKey = __webpack_require__(8873);
            var hiddenKeys = __webpack_require__(4377);
            var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
            var TypeError = global.TypeError;
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                    return state;
                };
            };
            if (NATIVE_WEAK_MAP || shared.state) {
                var store = shared.state || (shared.state = new WeakMap);
                store.get = store.get;
                store.has = store.has;
                store.set = store.set;
                set = function(it, metadata) {
                    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
                    metadata.facade = it;
                    store.set(it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return store.get(it) || {};
                };
                has = function(it) {
                    return store.has(it);
                };
            } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
                    metadata.facade = it;
                    createNonEnumerableProperty(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return hasOwn(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                    return hasOwn(it, STATE);
                };
            }
            module.exports = {
                set,
                get,
                has,
                enforce,
                getterFor
            };
        },
        5859: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(8149);
            var Iterators = __webpack_require__(6126);
            var ITERATOR = wellKnownSymbol("iterator");
            var ArrayPrototype = Array.prototype;
            module.exports = function(it) {
                return void 0 !== it && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        },
        7931: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(1510);
            module.exports = Array.isArray || function isArray(argument) {
                return "Array" == classof(argument);
            };
        },
        6282: (module, __unused_webpack_exports, __webpack_require__) => {
            var $documentAll = __webpack_require__(1685);
            var documentAll = $documentAll.all;
            module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
                return "function" == typeof argument || argument === documentAll;
            } : function(argument) {
                return "function" == typeof argument;
            };
        },
        2240: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var fails = __webpack_require__(6183);
            var isCallable = __webpack_require__(6282);
            var classof = __webpack_require__(9225);
            var getBuiltIn = __webpack_require__(4991);
            var inspectSource = __webpack_require__(6901);
            var noop = function() {};
            var empty = [];
            var construct = getBuiltIn("Reflect", "construct");
            var constructorRegExp = /^\s*(?:class|function)\b/;
            var exec = uncurryThis(constructorRegExp.exec);
            var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
            var isConstructorModern = function isConstructor(argument) {
                if (!isCallable(argument)) return false;
                try {
                    construct(noop, empty, argument);
                    return true;
                } catch (error) {
                    return false;
                }
            };
            var isConstructorLegacy = function isConstructor(argument) {
                if (!isCallable(argument)) return false;
                switch (classof(argument)) {
                  case "AsyncFunction":
                  case "GeneratorFunction":
                  case "AsyncGeneratorFunction":
                    return false;
                }
                try {
                    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
                } catch (error) {
                    return true;
                }
            };
            isConstructorLegacy.sham = true;
            module.exports = !construct || fails((function() {
                var called;
                return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern((function() {
                    called = true;
                })) || called;
            })) ? isConstructorLegacy : isConstructorModern;
        },
        1949: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            var isCallable = __webpack_require__(6282);
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            module.exports = isForced;
        },
        2420: module => {
            module.exports = function(it) {
                return null === it || void 0 === it;
            };
        },
        5896: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(6282);
            var $documentAll = __webpack_require__(1685);
            var documentAll = $documentAll.all;
            module.exports = $documentAll.IS_HTMLDDA ? function(it) {
                return "object" == typeof it ? null !== it : isCallable(it) || it === documentAll;
            } : function(it) {
                return "object" == typeof it ? null !== it : isCallable(it);
            };
        },
        8977: module => {
            module.exports = false;
        },
        1527: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(4991);
            var isCallable = __webpack_require__(6282);
            var isPrototypeOf = __webpack_require__(1786);
            var USE_SYMBOL_AS_UID = __webpack_require__(4746);
            var $Object = Object;
            module.exports = USE_SYMBOL_AS_UID ? function(it) {
                return "symbol" == typeof it;
            } : function(it) {
                var $Symbol = getBuiltIn("Symbol");
                return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
            };
        },
        1518: (module, __unused_webpack_exports, __webpack_require__) => {
            var bind = __webpack_require__(1098);
            var call = __webpack_require__(4552);
            var anObject = __webpack_require__(1474);
            var tryToString = __webpack_require__(180);
            var isArrayIteratorMethod = __webpack_require__(5859);
            var lengthOfArrayLike = __webpack_require__(1829);
            var isPrototypeOf = __webpack_require__(1786);
            var getIterator = __webpack_require__(7755);
            var getIteratorMethod = __webpack_require__(650);
            var iteratorClose = __webpack_require__(9193);
            var $TypeError = TypeError;
            var Result = function(stopped, result) {
                this.stopped = stopped;
                this.result = result;
            };
            var ResultPrototype = Result.prototype;
            module.exports = function(iterable, unboundFunction, options) {
                var that = options && options.that;
                var AS_ENTRIES = !!(options && options.AS_ENTRIES);
                var IS_RECORD = !!(options && options.IS_RECORD);
                var IS_ITERATOR = !!(options && options.IS_ITERATOR);
                var INTERRUPTED = !!(options && options.INTERRUPTED);
                var fn = bind(unboundFunction, that);
                var iterator, iterFn, index, length, result, next, step;
                var stop = function(condition) {
                    if (iterator) iteratorClose(iterator, "normal", condition);
                    return new Result(true, condition);
                };
                var callFn = function(value) {
                    if (AS_ENTRIES) {
                        anObject(value);
                        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
                    }
                    return INTERRUPTED ? fn(value, stop) : fn(value);
                };
                if (IS_RECORD) iterator = iterable.iterator; else if (IS_ITERATOR) iterator = iterable; else {
                    iterFn = getIteratorMethod(iterable);
                    if (!iterFn) throw $TypeError(tryToString(iterable) + " is not iterable");
                    if (isArrayIteratorMethod(iterFn)) {
                        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
                            result = callFn(iterable[index]);
                            if (result && isPrototypeOf(ResultPrototype, result)) return result;
                        }
                        return new Result(false);
                    }
                    iterator = getIterator(iterable, iterFn);
                }
                next = IS_RECORD ? iterable.next : iterator.next;
                while (!(step = call(next, iterator)).done) {
                    try {
                        result = callFn(step.value);
                    } catch (error) {
                        iteratorClose(iterator, "throw", error);
                    }
                    if ("object" == typeof result && result && isPrototypeOf(ResultPrototype, result)) return result;
                }
                return new Result(false);
            };
        },
        9193: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4552);
            var anObject = __webpack_require__(1474);
            var getMethod = __webpack_require__(9827);
            module.exports = function(iterator, kind, value) {
                var innerResult, innerError;
                anObject(iterator);
                try {
                    innerResult = getMethod(iterator, "return");
                    if (!innerResult) {
                        if ("throw" === kind) throw value;
                        return value;
                    }
                    innerResult = call(innerResult, iterator);
                } catch (error) {
                    innerError = true;
                    innerResult = error;
                }
                if ("throw" === kind) throw value;
                if (innerError) throw innerResult;
                anObject(innerResult);
                return value;
            };
        },
        392: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var IteratorPrototype = __webpack_require__(6524).IteratorPrototype;
            var create = __webpack_require__(1525);
            var createPropertyDescriptor = __webpack_require__(9273);
            var setToStringTag = __webpack_require__(820);
            var Iterators = __webpack_require__(6126);
            var returnThis = function() {
                return this;
            };
            module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create(IteratorPrototype, {
                    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
                });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
            };
        },
        335: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(4761);
            var call = __webpack_require__(4552);
            var IS_PURE = __webpack_require__(8977);
            var FunctionName = __webpack_require__(4530);
            var isCallable = __webpack_require__(6282);
            var createIteratorConstructor = __webpack_require__(392);
            var getPrototypeOf = __webpack_require__(4204);
            var setPrototypeOf = __webpack_require__(5900);
            var setToStringTag = __webpack_require__(820);
            var createNonEnumerableProperty = __webpack_require__(1501);
            var defineBuiltIn = __webpack_require__(2054);
            var wellKnownSymbol = __webpack_require__(8149);
            var Iterators = __webpack_require__(6126);
            var IteratorsCore = __webpack_require__(6524);
            var PROPER_FUNCTION_NAME = FunctionName.PROPER;
            var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol("iterator");
            var KEYS = "keys";
            var VALUES = "values";
            var ENTRIES = "entries";
            var returnThis = function() {
                return this;
            };
            module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch (KIND) {
                      case KEYS:
                        return function keys() {
                            return new IteratorConstructor(this, KIND);
                        };

                      case VALUES:
                        return function values() {
                            return new IteratorConstructor(this, KIND);
                        };

                      case ENTRIES:
                        return function entries() {
                            return new IteratorConstructor(this, KIND);
                        };
                    }
                    return function() {
                        return new IteratorConstructor(this);
                    };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = "Array" == NAME ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable));
                    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                        if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype); else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
                        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                    }
                }
                if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, "name", VALUES); else {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                        return call(nativeIterator, this);
                    };
                }
                if (DEFAULT) {
                    methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED) {
                        for (KEY in methods) if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
                    } else $({
                        target: NAME,
                        proto: true,
                        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                    }, methods);
                }
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
                    name: DEFAULT
                });
                Iterators[NAME] = defaultIterator;
                return methods;
            };
        },
        6524: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var fails = __webpack_require__(6183);
            var isCallable = __webpack_require__(6282);
            var isObject = __webpack_require__(5896);
            var create = __webpack_require__(1525);
            var getPrototypeOf = __webpack_require__(4204);
            var defineBuiltIn = __webpack_require__(2054);
            var wellKnownSymbol = __webpack_require__(8149);
            var IS_PURE = __webpack_require__(8977);
            var ITERATOR = wellKnownSymbol("iterator");
            var BUGGY_SAFARI_ITERATORS = false;
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
                arrayIterator = [].keys();
                if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true; else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
            }
            var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails((function() {
                var test = {};
                return IteratorPrototype[ITERATOR].call(test) !== test;
            }));
            if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
            if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, (function() {
                return this;
            }));
            module.exports = {
                IteratorPrototype,
                BUGGY_SAFARI_ITERATORS
            };
        },
        6126: module => {
            module.exports = {};
        },
        1829: (module, __unused_webpack_exports, __webpack_require__) => {
            var toLength = __webpack_require__(3917);
            module.exports = function(obj) {
                return toLength(obj.length);
            };
        },
        5903: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            var isCallable = __webpack_require__(6282);
            var hasOwn = __webpack_require__(8281);
            var DESCRIPTORS = __webpack_require__(723);
            var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(4530).CONFIGURABLE;
            var inspectSource = __webpack_require__(6901);
            var InternalStateModule = __webpack_require__(1030);
            var enforceInternalState = InternalStateModule.enforce;
            var getInternalState = InternalStateModule.get;
            var defineProperty = Object.defineProperty;
            var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails((function() {
                return 8 !== defineProperty((function() {}), "length", {
                    value: 8
                }).length;
            }));
            var TEMPLATE = String(String).split("String");
            var makeBuiltIn = module.exports = function(value, name, options) {
                if ("Symbol(" === String(name).slice(0, 7)) name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
                if (options && options.getter) name = "get " + name;
                if (options && options.setter) name = "set " + name;
                if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) if (DESCRIPTORS) defineProperty(value, "name", {
                    value: name,
                    configurable: true
                }); else value.name = name;
                if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
                    value: options.arity
                });
                try {
                    if (options && hasOwn(options, "constructor") && options.constructor) {
                        if (DESCRIPTORS) defineProperty(value, "prototype", {
                            writable: false
                        });
                    } else if (value.prototype) value.prototype = void 0;
                } catch (error) {}
                var state = enforceInternalState(value);
                if (!hasOwn(state, "source")) state.source = TEMPLATE.join("string" == typeof name ? name : "");
                return value;
            };
            Function.prototype.toString = makeBuiltIn((function toString() {
                return isCallable(this) && getInternalState(this).source || inspectSource(this);
            }), "toString");
        },
        1021: module => {
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = Math.trunc || function trunc(x) {
                var n = +x;
                return (n > 0 ? floor : ceil)(n);
            };
        },
        8513: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var fails = __webpack_require__(6183);
            var uncurryThis = __webpack_require__(1768);
            var toString = __webpack_require__(7655);
            var trim = __webpack_require__(9749).trim;
            var whitespaces = __webpack_require__(8342);
            var $parseInt = global.parseInt;
            var Symbol = global.Symbol;
            var ITERATOR = Symbol && Symbol.iterator;
            var hex = /^[+-]?0x/i;
            var exec = uncurryThis(hex.exec);
            var FORCED = 8 !== $parseInt(whitespaces + "08") || 22 !== $parseInt(whitespaces + "0x16") || ITERATOR && !fails((function() {
                $parseInt(Object(ITERATOR));
            }));
            module.exports = FORCED ? function parseInt(string, radix) {
                var S = trim(toString(string));
                return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
            } : $parseInt;
        },
        4727: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var DESCRIPTORS = __webpack_require__(723);
            var uncurryThis = __webpack_require__(1768);
            var call = __webpack_require__(4552);
            var fails = __webpack_require__(6183);
            var objectKeys = __webpack_require__(1340);
            var getOwnPropertySymbolsModule = __webpack_require__(8074);
            var propertyIsEnumerableModule = __webpack_require__(4043);
            var toObject = __webpack_require__(9473);
            var IndexedObject = __webpack_require__(7530);
            var $assign = Object.assign;
            var defineProperty = Object.defineProperty;
            var concat = uncurryThis([].concat);
            module.exports = !$assign || fails((function() {
                if (DESCRIPTORS && 1 !== $assign({
                    b: 1
                }, $assign(defineProperty({}, "a", {
                    enumerable: true,
                    get: function() {
                        defineProperty(this, "b", {
                            value: 3,
                            enumerable: false
                        });
                    }
                }), {
                    b: 2
                })).b) return true;
                var A = {};
                var B = {};
                var symbol = Symbol();
                var alphabet = "abcdefghijklmnopqrst";
                A[symbol] = 7;
                alphabet.split("").forEach((function(chr) {
                    B[chr] = chr;
                }));
                return 7 != $assign({}, A)[symbol] || objectKeys($assign({}, B)).join("") != alphabet;
            })) ? function assign(target, source) {
                var T = toObject(target);
                var argumentsLength = arguments.length;
                var index = 1;
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                var propertyIsEnumerable = propertyIsEnumerableModule.f;
                while (argumentsLength > index) {
                    var S = IndexedObject(arguments[index++]);
                    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while (length > j) {
                        key = keys[j++];
                        if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
                    }
                }
                return T;
            } : $assign;
        },
        1525: (module, __unused_webpack_exports, __webpack_require__) => {
            var anObject = __webpack_require__(1474);
            var definePropertiesModule = __webpack_require__(262);
            var enumBugKeys = __webpack_require__(8409);
            var hiddenKeys = __webpack_require__(4377);
            var html = __webpack_require__(7461);
            var documentCreateElement = __webpack_require__(7282);
            var sharedKey = __webpack_require__(8873);
            var GT = ">";
            var LT = "<";
            var PROTOTYPE = "prototype";
            var SCRIPT = "script";
            var IE_PROTO = sharedKey("IE_PROTO");
            var EmptyConstructor = function() {};
            var scriptTag = function(content) {
                return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
            };
            var NullProtoObjectViaActiveX = function(activeXDocument) {
                activeXDocument.write(scriptTag(""));
                activeXDocument.close();
                var temp = activeXDocument.parentWindow.Object;
                activeXDocument = null;
                return temp;
            };
            var NullProtoObjectViaIFrame = function() {
                var iframe = documentCreateElement("iframe");
                var JS = "java" + SCRIPT + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html.appendChild(iframe);
                iframe.src = String(JS);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(scriptTag("document.F=Object"));
                iframeDocument.close();
                return iframeDocument.F;
            };
            var activeXDocument;
            var NullProtoObject = function() {
                try {
                    activeXDocument = new ActiveXObject("htmlfile");
                } catch (error) {}
                NullProtoObject = "undefined" != typeof document ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
                var length = enumBugKeys.length;
                while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
                return NullProtoObject();
            };
            hiddenKeys[IE_PROTO] = true;
            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (null !== O) {
                    EmptyConstructor[PROTOTYPE] = anObject(O);
                    result = new EmptyConstructor;
                    EmptyConstructor[PROTOTYPE] = null;
                    result[IE_PROTO] = O;
                } else result = NullProtoObject();
                return void 0 === Properties ? result : definePropertiesModule.f(result, Properties);
            };
        },
        262: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8654);
            var definePropertyModule = __webpack_require__(9168);
            var anObject = __webpack_require__(1474);
            var toIndexedObject = __webpack_require__(3206);
            var objectKeys = __webpack_require__(1340);
            exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var props = toIndexedObject(Properties);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var index = 0;
                var key;
                while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
                return O;
            };
        },
        9168: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var IE8_DOM_DEFINE = __webpack_require__(4985);
            var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8654);
            var anObject = __webpack_require__(1474);
            var toPropertyKey = __webpack_require__(2988);
            var $TypeError = TypeError;
            var $defineProperty = Object.defineProperty;
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var ENUMERABLE = "enumerable";
            var CONFIGURABLE = "configurable";
            var WRITABLE = "writable";
            exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if ("function" === typeof O && "prototype" === P && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
                    var current = $getOwnPropertyDescriptor(O, P);
                    if (current && current[WRITABLE]) {
                        O[P] = Attributes.value;
                        Attributes = {
                            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                            writable: false
                        };
                    }
                }
                return $defineProperty(O, P, Attributes);
            } : $defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return $defineProperty(O, P, Attributes);
                } catch (error) {}
                if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
            };
        },
        5663: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var call = __webpack_require__(4552);
            var propertyIsEnumerableModule = __webpack_require__(4043);
            var createPropertyDescriptor = __webpack_require__(9273);
            var toIndexedObject = __webpack_require__(3206);
            var toPropertyKey = __webpack_require__(2988);
            var hasOwn = __webpack_require__(8281);
            var IE8_DOM_DEFINE = __webpack_require__(4985);
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPropertyKey(P);
                if (IE8_DOM_DEFINE) try {
                    return $getOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
            };
        },
        6675: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(1510);
            var toIndexedObject = __webpack_require__(3206);
            var $getOwnPropertyNames = __webpack_require__(6785).f;
            var arraySlice = __webpack_require__(4072);
            var windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            var getWindowNames = function(it) {
                try {
                    return $getOwnPropertyNames(it);
                } catch (error) {
                    return arraySlice(windowNames);
                }
            };
            module.exports.f = function getOwnPropertyNames(it) {
                return windowNames && "Window" == classof(it) ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
            };
        },
        6785: (__unused_webpack_module, exports, __webpack_require__) => {
            var internalObjectKeys = __webpack_require__(5113);
            var enumBugKeys = __webpack_require__(8409);
            var hiddenKeys = enumBugKeys.concat("length", "prototype");
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        },
        8074: (__unused_webpack_module, exports) => {
            exports.f = Object.getOwnPropertySymbols;
        },
        4204: (module, __unused_webpack_exports, __webpack_require__) => {
            var hasOwn = __webpack_require__(8281);
            var isCallable = __webpack_require__(6282);
            var toObject = __webpack_require__(9473);
            var sharedKey = __webpack_require__(8873);
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__(7401);
            var IE_PROTO = sharedKey("IE_PROTO");
            var $Object = Object;
            var ObjectPrototype = $Object.prototype;
            module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
                var object = toObject(O);
                if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
                var constructor = object.constructor;
                if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
                return object instanceof $Object ? ObjectPrototype : null;
            };
        },
        6662: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            var isObject = __webpack_require__(5896);
            var classof = __webpack_require__(1510);
            var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(8774);
            var $isExtensible = Object.isExtensible;
            var FAILS_ON_PRIMITIVES = fails((function() {
                $isExtensible(1);
            }));
            module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
                if (!isObject(it)) return false;
                if (ARRAY_BUFFER_NON_EXTENSIBLE && "ArrayBuffer" == classof(it)) return false;
                return $isExtensible ? $isExtensible(it) : true;
            } : $isExtensible;
        },
        1786: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            module.exports = uncurryThis({}.isPrototypeOf);
        },
        5113: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var hasOwn = __webpack_require__(8281);
            var toIndexedObject = __webpack_require__(3206);
            var indexOf = __webpack_require__(5675).indexOf;
            var hiddenKeys = __webpack_require__(4377);
            var push = uncurryThis([].push);
            module.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
                while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
                return result;
            };
        },
        1340: (module, __unused_webpack_exports, __webpack_require__) => {
            var internalObjectKeys = __webpack_require__(5113);
            var enumBugKeys = __webpack_require__(8409);
            module.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        },
        4043: (__unused_webpack_module, exports) => {
            "use strict";
            var $propertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : $propertyIsEnumerable;
        },
        5900: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var anObject = __webpack_require__(1474);
            var aPossiblePrototype = __webpack_require__(2004);
            module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;
                try {
                    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
                    setter(test, []);
                    CORRECT_SETTER = test instanceof Array;
                } catch (error) {}
                return function setPrototypeOf(O, proto) {
                    anObject(O);
                    aPossiblePrototype(proto);
                    if (CORRECT_SETTER) setter(O, proto); else O.__proto__ = proto;
                    return O;
                };
            }() : void 0);
        },
        4117: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var TO_STRING_TAG_SUPPORT = __webpack_require__(4823);
            var classof = __webpack_require__(9225);
            module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
                return "[object " + classof(this) + "]";
            };
        },
        6891: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4552);
            var isCallable = __webpack_require__(6282);
            var isObject = __webpack_require__(5896);
            var $TypeError = TypeError;
            module.exports = function(input, pref) {
                var fn, val;
                if ("string" === pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
                if ("string" !== pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                throw $TypeError("Can't convert object to primitive value");
            };
        },
        1441: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(4991);
            var uncurryThis = __webpack_require__(1768);
            var getOwnPropertyNamesModule = __webpack_require__(6785);
            var getOwnPropertySymbolsModule = __webpack_require__(8074);
            var anObject = __webpack_require__(1474);
            var concat = uncurryThis([].concat);
            module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
            };
        },
        8734: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4552);
            var anObject = __webpack_require__(1474);
            var isCallable = __webpack_require__(6282);
            var classof = __webpack_require__(1510);
            var regexpExec = __webpack_require__(5510);
            var $TypeError = TypeError;
            module.exports = function(R, S) {
                var exec = R.exec;
                if (isCallable(exec)) {
                    var result = call(exec, R, S);
                    if (null !== result) anObject(result);
                    return result;
                }
                if ("RegExp" === classof(R)) return call(regexpExec, R, S);
                throw $TypeError("RegExp#exec called on incompatible receiver");
            };
        },
        5510: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var call = __webpack_require__(4552);
            var uncurryThis = __webpack_require__(1768);
            var toString = __webpack_require__(7655);
            var regexpFlags = __webpack_require__(8383);
            var stickyHelpers = __webpack_require__(6558);
            var shared = __webpack_require__(1748);
            var create = __webpack_require__(1525);
            var getInternalState = __webpack_require__(1030).get;
            var UNSUPPORTED_DOT_ALL = __webpack_require__(7672);
            var UNSUPPORTED_NCG = __webpack_require__(9729);
            var nativeReplace = shared("native-string-replace", String.prototype.replace);
            var nativeExec = RegExp.prototype.exec;
            var patchedExec = nativeExec;
            var charAt = uncurryThis("".charAt);
            var indexOf = uncurryThis("".indexOf);
            var replace = uncurryThis("".replace);
            var stringSlice = uncurryThis("".slice);
            var UPDATES_LAST_INDEX_WRONG = function() {
                var re1 = /a/;
                var re2 = /b*/g;
                call(nativeExec, re1, "a");
                call(nativeExec, re2, "a");
                return 0 !== re1.lastIndex || 0 !== re2.lastIndex;
            }();
            var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
            var NPCG_INCLUDED = void 0 !== /()??/.exec("")[1];
            var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
            if (PATCH) patchedExec = function exec(string) {
                var re = this;
                var state = getInternalState(re);
                var str = toString(string);
                var raw = state.raw;
                var result, reCopy, lastIndex, match, i, object, group;
                if (raw) {
                    raw.lastIndex = re.lastIndex;
                    result = call(patchedExec, raw, str);
                    re.lastIndex = raw.lastIndex;
                    return result;
                }
                var groups = state.groups;
                var sticky = UNSUPPORTED_Y && re.sticky;
                var flags = call(regexpFlags, re);
                var source = re.source;
                var charsAdded = 0;
                var strCopy = str;
                if (sticky) {
                    flags = replace(flags, "y", "");
                    if (-1 === indexOf(flags, "g")) flags += "g";
                    strCopy = stringSlice(str, re.lastIndex);
                    if (re.lastIndex > 0 && (!re.multiline || re.multiline && "\n" !== charAt(str, re.lastIndex - 1))) {
                        source = "(?: " + source + ")";
                        strCopy = " " + strCopy;
                        charsAdded++;
                    }
                    reCopy = new RegExp("^(?:" + source + ")", flags);
                }
                if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
                if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
                match = call(nativeExec, sticky ? reCopy : re, strCopy);
                if (sticky) if (match) {
                    match.input = stringSlice(match.input, charsAdded);
                    match[0] = stringSlice(match[0], charsAdded);
                    match.index = re.lastIndex;
                    re.lastIndex += match[0].length;
                } else re.lastIndex = 0; else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
                if (NPCG_INCLUDED && match && match.length > 1) call(nativeReplace, match[0], reCopy, (function() {
                    for (i = 1; i < arguments.length - 2; i++) if (void 0 === arguments[i]) match[i] = void 0;
                }));
                if (match && groups) {
                    match.groups = object = create(null);
                    for (i = 0; i < groups.length; i++) {
                        group = groups[i];
                        object[group[0]] = match[group[1]];
                    }
                }
                return match;
            };
            module.exports = patchedExec;
        },
        8383: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var anObject = __webpack_require__(1474);
            module.exports = function() {
                var that = anObject(this);
                var result = "";
                if (that.hasIndices) result += "d";
                if (that.global) result += "g";
                if (that.ignoreCase) result += "i";
                if (that.multiline) result += "m";
                if (that.dotAll) result += "s";
                if (that.unicode) result += "u";
                if (that.unicodeSets) result += "v";
                if (that.sticky) result += "y";
                return result;
            };
        },
        6558: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            var global = __webpack_require__(8454);
            var $RegExp = global.RegExp;
            var UNSUPPORTED_Y = fails((function() {
                var re = $RegExp("a", "y");
                re.lastIndex = 2;
                return null != re.exec("abcd");
            }));
            var MISSED_STICKY = UNSUPPORTED_Y || fails((function() {
                return !$RegExp("a", "y").sticky;
            }));
            var BROKEN_CARET = UNSUPPORTED_Y || fails((function() {
                var re = $RegExp("^r", "gy");
                re.lastIndex = 2;
                return null != re.exec("str");
            }));
            module.exports = {
                BROKEN_CARET,
                MISSED_STICKY,
                UNSUPPORTED_Y
            };
        },
        7672: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            var global = __webpack_require__(8454);
            var $RegExp = global.RegExp;
            module.exports = fails((function() {
                var re = $RegExp(".", "s");
                return !(re.dotAll && re.exec("\n") && "s" === re.flags);
            }));
        },
        9729: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6183);
            var global = __webpack_require__(8454);
            var $RegExp = global.RegExp;
            module.exports = fails((function() {
                var re = $RegExp("(?<a>b)", "g");
                return "b" !== re.exec("b").groups.a || "bc" !== "b".replace(re, "$<a>c");
            }));
        },
        7431: (module, __unused_webpack_exports, __webpack_require__) => {
            var isNullOrUndefined = __webpack_require__(2420);
            var $TypeError = TypeError;
            module.exports = function(it) {
                if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
                return it;
            };
        },
        820: (module, __unused_webpack_exports, __webpack_require__) => {
            var defineProperty = __webpack_require__(9168).f;
            var hasOwn = __webpack_require__(8281);
            var wellKnownSymbol = __webpack_require__(8149);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            module.exports = function(target, TAG, STATIC) {
                if (target && !STATIC) target = target.prototype;
                if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            };
        },
        8873: (module, __unused_webpack_exports, __webpack_require__) => {
            var shared = __webpack_require__(1748);
            var uid = __webpack_require__(9059);
            var keys = shared("keys");
            module.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        },
        2047: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var defineGlobalProperty = __webpack_require__(7194);
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || defineGlobalProperty(SHARED, {});
            module.exports = store;
        },
        1748: (module, __unused_webpack_exports, __webpack_require__) => {
            var IS_PURE = __webpack_require__(8977);
            var store = __webpack_require__(2047);
            (module.exports = function(key, value) {
                return store[key] || (store[key] = void 0 !== value ? value : {});
            })("versions", []).push({
                version: "3.26.1",
                mode: IS_PURE ? "pure" : "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            });
        },
        7321: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var toIntegerOrInfinity = __webpack_require__(8037);
            var toString = __webpack_require__(7655);
            var requireObjectCoercible = __webpack_require__(7431);
            var charAt = uncurryThis("".charAt);
            var charCodeAt = uncurryThis("".charCodeAt);
            var stringSlice = uncurryThis("".slice);
            var createMethod = function(CONVERT_TO_STRING) {
                return function($this, pos) {
                    var S = toString(requireObjectCoercible($this));
                    var position = toIntegerOrInfinity(pos);
                    var size = S.length;
                    var first, second;
                    if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
                    first = charCodeAt(S, position);
                    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
                };
            };
            module.exports = {
                codeAt: createMethod(false),
                charAt: createMethod(true)
            };
        },
        9749: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var requireObjectCoercible = __webpack_require__(7431);
            var toString = __webpack_require__(7655);
            var whitespaces = __webpack_require__(8342);
            var replace = uncurryThis("".replace);
            var whitespace = "[" + whitespaces + "]";
            var ltrim = RegExp("^" + whitespace + whitespace + "*");
            var rtrim = RegExp(whitespace + whitespace + "*$");
            var createMethod = function(TYPE) {
                return function($this) {
                    var string = toString(requireObjectCoercible($this));
                    if (1 & TYPE) string = replace(string, ltrim, "");
                    if (2 & TYPE) string = replace(string, rtrim, "");
                    return string;
                };
            };
            module.exports = {
                start: createMethod(1),
                end: createMethod(2),
                trim: createMethod(3)
            };
        },
        3801: (module, __unused_webpack_exports, __webpack_require__) => {
            var V8_VERSION = __webpack_require__(4324);
            var fails = __webpack_require__(6183);
            module.exports = !!Object.getOwnPropertySymbols && !fails((function() {
                var symbol = Symbol();
                return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
            }));
        },
        9623: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIntegerOrInfinity = __webpack_require__(8037);
            var max = Math.max;
            var min = Math.min;
            module.exports = function(index, length) {
                var integer = toIntegerOrInfinity(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        },
        3206: (module, __unused_webpack_exports, __webpack_require__) => {
            var IndexedObject = __webpack_require__(7530);
            var requireObjectCoercible = __webpack_require__(7431);
            module.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        },
        8037: (module, __unused_webpack_exports, __webpack_require__) => {
            var trunc = __webpack_require__(1021);
            module.exports = function(argument) {
                var number = +argument;
                return number !== number || 0 === number ? 0 : trunc(number);
            };
        },
        3917: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIntegerOrInfinity = __webpack_require__(8037);
            var min = Math.min;
            module.exports = function(argument) {
                return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
            };
        },
        9473: (module, __unused_webpack_exports, __webpack_require__) => {
            var requireObjectCoercible = __webpack_require__(7431);
            var $Object = Object;
            module.exports = function(argument) {
                return $Object(requireObjectCoercible(argument));
            };
        },
        3948: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4552);
            var isObject = __webpack_require__(5896);
            var isSymbol = __webpack_require__(1527);
            var getMethod = __webpack_require__(9827);
            var ordinaryToPrimitive = __webpack_require__(6891);
            var wellKnownSymbol = __webpack_require__(8149);
            var $TypeError = TypeError;
            var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
            module.exports = function(input, pref) {
                if (!isObject(input) || isSymbol(input)) return input;
                var exoticToPrim = getMethod(input, TO_PRIMITIVE);
                var result;
                if (exoticToPrim) {
                    if (void 0 === pref) pref = "default";
                    result = call(exoticToPrim, input, pref);
                    if (!isObject(result) || isSymbol(result)) return result;
                    throw $TypeError("Can't convert object to primitive value");
                }
                if (void 0 === pref) pref = "number";
                return ordinaryToPrimitive(input, pref);
            };
        },
        2988: (module, __unused_webpack_exports, __webpack_require__) => {
            var toPrimitive = __webpack_require__(3948);
            var isSymbol = __webpack_require__(1527);
            module.exports = function(argument) {
                var key = toPrimitive(argument, "string");
                return isSymbol(key) ? key : key + "";
            };
        },
        4823: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(8149);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var test = {};
            test[TO_STRING_TAG] = "z";
            module.exports = "[object z]" === String(test);
        },
        7655: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(9225);
            var $String = String;
            module.exports = function(argument) {
                if ("Symbol" === classof(argument)) throw TypeError("Cannot convert a Symbol value to a string");
                return $String(argument);
            };
        },
        180: module => {
            var $String = String;
            module.exports = function(argument) {
                try {
                    return $String(argument);
                } catch (error) {
                    return "Object";
                }
            };
        },
        9059: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(1768);
            var id = 0;
            var postfix = Math.random();
            var toString = uncurryThis(1..toString);
            module.exports = function(key) {
                return "Symbol(" + (void 0 === key ? "" : key) + ")_" + toString(++id + postfix, 36);
            };
        },
        4746: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_SYMBOL = __webpack_require__(3801);
            module.exports = NATIVE_SYMBOL && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        8654: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var fails = __webpack_require__(6183);
            module.exports = DESCRIPTORS && fails((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: false
                }).prototype;
            }));
        },
        9780: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var isCallable = __webpack_require__(6282);
            var WeakMap = global.WeakMap;
            module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
        },
        8149: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var shared = __webpack_require__(1748);
            var hasOwn = __webpack_require__(8281);
            var uid = __webpack_require__(9059);
            var NATIVE_SYMBOL = __webpack_require__(3801);
            var USE_SYMBOL_AS_UID = __webpack_require__(4746);
            var WellKnownSymbolsStore = shared("wks");
            var Symbol = global.Symbol;
            var symbolFor = Symbol && Symbol["for"];
            var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
            module.exports = function(name) {
                if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || "string" == typeof WellKnownSymbolsStore[name])) {
                    var description = "Symbol." + name;
                    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name]; else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description); else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
                }
                return WellKnownSymbolsStore[name];
            };
        },
        8342: module => {
            module.exports = "\t\n\v\f\r      " + "          　\u2028\u2029\ufeff";
        },
        8165: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(4761);
            var $filter = __webpack_require__(528).filter;
            var arrayMethodHasSpeciesSupport = __webpack_require__(4820);
            var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
            $({
                target: "Array",
                proto: true,
                forced: !HAS_SPECIES_SUPPORT
            }, {
                filter: function filter(callbackfn) {
                    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
        },
        7543: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toIndexedObject = __webpack_require__(3206);
            var addToUnscopables = __webpack_require__(9256);
            var Iterators = __webpack_require__(6126);
            var InternalStateModule = __webpack_require__(1030);
            var defineProperty = __webpack_require__(9168).f;
            var defineIterator = __webpack_require__(335);
            var createIterResultObject = __webpack_require__(5351);
            var IS_PURE = __webpack_require__(8977);
            var DESCRIPTORS = __webpack_require__(723);
            var ARRAY_ITERATOR = "Array Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
            module.exports = defineIterator(Array, "Array", (function(iterated, kind) {
                setInternalState(this, {
                    type: ARRAY_ITERATOR,
                    target: toIndexedObject(iterated),
                    index: 0,
                    kind
                });
            }), (function() {
                var state = getInternalState(this);
                var target = state.target;
                var kind = state.kind;
                var index = state.index++;
                if (!target || index >= target.length) {
                    state.target = void 0;
                    return createIterResultObject(void 0, true);
                }
                if ("keys" == kind) return createIterResultObject(index, false);
                if ("values" == kind) return createIterResultObject(target[index], false);
                return createIterResultObject([ index, target[index] ], false);
            }), "values");
            var values = Iterators.Arguments = Iterators.Array;
            addToUnscopables("keys");
            addToUnscopables("values");
            addToUnscopables("entries");
            if (!IS_PURE && DESCRIPTORS && "values" !== values.name) try {
                defineProperty(values, "name", {
                    value: "values"
                });
            } catch (error) {}
        },
        7985: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(4761);
            var $reduce = __webpack_require__(6589).left;
            var arrayMethodIsStrict = __webpack_require__(1923);
            var CHROME_VERSION = __webpack_require__(4324);
            var IS_NODE = __webpack_require__(7594);
            var STRICT_METHOD = arrayMethodIsStrict("reduce");
            var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
            $({
                target: "Array",
                proto: true,
                forced: !STRICT_METHOD || CHROME_BUG
            }, {
                reduce: function reduce(callbackfn) {
                    var length = arguments.length;
                    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
                }
            });
        },
        6618: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(723);
            var FUNCTION_NAME_EXISTS = __webpack_require__(4530).EXISTS;
            var uncurryThis = __webpack_require__(1768);
            var defineProperty = __webpack_require__(9168).f;
            var FunctionPrototype = Function.prototype;
            var functionToString = uncurryThis(FunctionPrototype.toString);
            var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
            var regExpExec = uncurryThis(nameRE.exec);
            var NAME = "name";
            if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) defineProperty(FunctionPrototype, NAME, {
                configurable: true,
                get: function() {
                    try {
                        return regExpExec(nameRE, functionToString(this))[1];
                    } catch (error) {
                        return "";
                    }
                }
            });
        },
        7692: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(4761);
            var assign = __webpack_require__(4727);
            $({
                target: "Object",
                stat: true,
                arity: 2,
                forced: Object.assign !== assign
            }, {
                assign
            });
        },
        2352: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var TO_STRING_TAG_SUPPORT = __webpack_require__(4823);
            var defineBuiltIn = __webpack_require__(2054);
            var toString = __webpack_require__(4117);
            if (!TO_STRING_TAG_SUPPORT) defineBuiltIn(Object.prototype, "toString", toString, {
                unsafe: true
            });
        },
        4249: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(4761);
            var $parseInt = __webpack_require__(8513);
            $({
                global: true,
                forced: parseInt != $parseInt
            }, {
                parseInt: $parseInt
            });
        },
        9989: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(4761);
            var exec = __webpack_require__(5510);
            $({
                target: "RegExp",
                proto: true,
                forced: /./.exec !== exec
            }, {
                exec
            });
        },
        3344: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var charAt = __webpack_require__(7321).charAt;
            var toString = __webpack_require__(7655);
            var InternalStateModule = __webpack_require__(1030);
            var defineIterator = __webpack_require__(335);
            var createIterResultObject = __webpack_require__(5351);
            var STRING_ITERATOR = "String Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            defineIterator(String, "String", (function(iterated) {
                setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: toString(iterated),
                    index: 0
                });
            }), (function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return createIterResultObject(void 0, true);
                point = charAt(string, index);
                state.index += point.length;
                return createIterResultObject(point, false);
            }));
        },
        8307: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var call = __webpack_require__(4552);
            var fixRegExpWellKnownSymbolLogic = __webpack_require__(9696);
            var anObject = __webpack_require__(1474);
            var isNullOrUndefined = __webpack_require__(2420);
            var toLength = __webpack_require__(3917);
            var toString = __webpack_require__(7655);
            var requireObjectCoercible = __webpack_require__(7431);
            var getMethod = __webpack_require__(9827);
            var advanceStringIndex = __webpack_require__(3615);
            var regExpExec = __webpack_require__(8734);
            fixRegExpWellKnownSymbolLogic("match", (function(MATCH, nativeMatch, maybeCallNative) {
                return [ function match(regexp) {
                    var O = requireObjectCoercible(this);
                    var matcher = isNullOrUndefined(regexp) ? void 0 : getMethod(regexp, MATCH);
                    return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
                }, function(string) {
                    var rx = anObject(this);
                    var S = toString(string);
                    var res = maybeCallNative(nativeMatch, rx, S);
                    if (res.done) return res.value;
                    if (!rx.global) return regExpExec(rx, S);
                    var fullUnicode = rx.unicode;
                    rx.lastIndex = 0;
                    var A = [];
                    var n = 0;
                    var result;
                    while (null !== (result = regExpExec(rx, S))) {
                        var matchStr = toString(result[0]);
                        A[n] = matchStr;
                        if ("" === matchStr) rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                        n++;
                    }
                    return 0 === n ? null : A;
                } ];
            }));
        },
        4390: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var apply = __webpack_require__(6218);
            var call = __webpack_require__(4552);
            var uncurryThis = __webpack_require__(1768);
            var fixRegExpWellKnownSymbolLogic = __webpack_require__(9696);
            var fails = __webpack_require__(6183);
            var anObject = __webpack_require__(1474);
            var isCallable = __webpack_require__(6282);
            var isNullOrUndefined = __webpack_require__(2420);
            var toIntegerOrInfinity = __webpack_require__(8037);
            var toLength = __webpack_require__(3917);
            var toString = __webpack_require__(7655);
            var requireObjectCoercible = __webpack_require__(7431);
            var advanceStringIndex = __webpack_require__(3615);
            var getMethod = __webpack_require__(9827);
            var getSubstitution = __webpack_require__(4742);
            var regExpExec = __webpack_require__(8734);
            var wellKnownSymbol = __webpack_require__(8149);
            var REPLACE = wellKnownSymbol("replace");
            var max = Math.max;
            var min = Math.min;
            var concat = uncurryThis([].concat);
            var push = uncurryThis([].push);
            var stringIndexOf = uncurryThis("".indexOf);
            var stringSlice = uncurryThis("".slice);
            var maybeToString = function(it) {
                return void 0 === it ? it : String(it);
            };
            var REPLACE_KEEPS_$0 = function() {
                return "$0" === "a".replace(/./, "$0");
            }();
            var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
                if (/./[REPLACE]) return "" === /./[REPLACE]("a", "$0");
                return false;
            }();
            var REPLACE_SUPPORTS_NAMED_GROUPS = !fails((function() {
                var re = /./;
                re.exec = function() {
                    var result = [];
                    result.groups = {
                        a: "7"
                    };
                    return result;
                };
                return "7" !== "".replace(re, "$<a>");
            }));
            fixRegExpWellKnownSymbolLogic("replace", (function(_, nativeReplace, maybeCallNative) {
                var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
                return [ function replace(searchValue, replaceValue) {
                    var O = requireObjectCoercible(this);
                    var replacer = isNullOrUndefined(searchValue) ? void 0 : getMethod(searchValue, REPLACE);
                    return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
                }, function(string, replaceValue) {
                    var rx = anObject(this);
                    var S = toString(string);
                    if ("string" == typeof replaceValue && -1 === stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) && -1 === stringIndexOf(replaceValue, "$<")) {
                        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
                        if (res.done) return res.value;
                    }
                    var functionalReplace = isCallable(replaceValue);
                    if (!functionalReplace) replaceValue = toString(replaceValue);
                    var global = rx.global;
                    if (global) {
                        var fullUnicode = rx.unicode;
                        rx.lastIndex = 0;
                    }
                    var results = [];
                    while (true) {
                        var result = regExpExec(rx, S);
                        if (null === result) break;
                        push(results, result);
                        if (!global) break;
                        var matchStr = toString(result[0]);
                        if ("" === matchStr) rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                    }
                    var accumulatedResult = "";
                    var nextSourcePosition = 0;
                    for (var i = 0; i < results.length; i++) {
                        result = results[i];
                        var matched = toString(result[0]);
                        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
                        var captures = [];
                        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
                        var namedCaptures = result.groups;
                        if (functionalReplace) {
                            var replacerArgs = concat([ matched ], captures, position, S);
                            if (void 0 !== namedCaptures) push(replacerArgs, namedCaptures);
                            var replacement = toString(apply(replaceValue, void 0, replacerArgs));
                        } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                        if (position >= nextSourcePosition) {
                            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                            nextSourcePosition = position + matched.length;
                        }
                    }
                    return accumulatedResult + stringSlice(S, nextSourcePosition);
                } ];
            }), !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
        },
        9703: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var global = __webpack_require__(8454);
            var uncurryThis = __webpack_require__(1768);
            var defineBuiltIns = __webpack_require__(6367);
            var InternalMetadataModule = __webpack_require__(6582);
            var collection = __webpack_require__(6645);
            var collectionWeak = __webpack_require__(7790);
            var isObject = __webpack_require__(5896);
            var isExtensible = __webpack_require__(6662);
            var enforceInternalState = __webpack_require__(1030).enforce;
            var NATIVE_WEAK_MAP = __webpack_require__(9780);
            var IS_IE11 = !global.ActiveXObject && "ActiveXObject" in global;
            var InternalWeakMap;
            var wrapper = function(init) {
                return function WeakMap() {
                    return init(this, arguments.length ? arguments[0] : void 0);
                };
            };
            var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
            if (NATIVE_WEAK_MAP && IS_IE11) {
                InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
                InternalMetadataModule.enable();
                var WeakMapPrototype = $WeakMap.prototype;
                var nativeDelete = uncurryThis(WeakMapPrototype["delete"]);
                var nativeHas = uncurryThis(WeakMapPrototype.has);
                var nativeGet = uncurryThis(WeakMapPrototype.get);
                var nativeSet = uncurryThis(WeakMapPrototype.set);
                defineBuiltIns(WeakMapPrototype, {
                    delete: function(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeDelete(this, key) || state.frozen["delete"](key);
                        }
                        return nativeDelete(this, key);
                    },
                    has: function has(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeHas(this, key) || state.frozen.has(key);
                        }
                        return nativeHas(this, key);
                    },
                    get: function get(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
                        }
                        return nativeGet(this, key);
                    },
                    set: function set(key, value) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
                        } else nativeSet(this, key, value);
                        return this;
                    }
                });
            }
        },
        7323: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(9703);
        },
        3542: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var DOMIterables = __webpack_require__(6181);
            var DOMTokenListPrototype = __webpack_require__(2387);
            var forEach = __webpack_require__(1269);
            var createNonEnumerableProperty = __webpack_require__(1501);
            var handlePrototype = function(CollectionPrototype) {
                if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
                    createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
                } catch (error) {
                    CollectionPrototype.forEach = forEach;
                }
            };
            for (var COLLECTION_NAME in DOMIterables) if (DOMIterables[COLLECTION_NAME]) handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
            handlePrototype(DOMTokenListPrototype);
        },
        4079: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8454);
            var DOMIterables = __webpack_require__(6181);
            var DOMTokenListPrototype = __webpack_require__(2387);
            var ArrayIteratorMethods = __webpack_require__(7543);
            var createNonEnumerableProperty = __webpack_require__(1501);
            var wellKnownSymbol = __webpack_require__(8149);
            var ITERATOR = wellKnownSymbol("iterator");
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var ArrayValues = ArrayIteratorMethods.values;
            var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
                if (CollectionPrototype) {
                    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
                        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
                    } catch (error) {
                        CollectionPrototype[ITERATOR] = ArrayValues;
                    }
                    if (!CollectionPrototype[TO_STRING_TAG]) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
                    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                    } catch (error) {
                        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                    }
                }
            };
            for (var COLLECTION_NAME in DOMIterables) handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
            handlePrototype(DOMTokenListPrototype, "DOMTokenList");
        },
        3002: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        "use strict";
        function isString(str) {
            const value = "string" === typeof str || str instanceof String;
            return {
                value,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "string");
                },
                nonEmpty() {
                    return {
                        value: value ? str.trim().replace("\n", "").length > 0 : false,
                        throw(paramName) {
                            if (!this.value) throw new FalseIdentityError(paramName, "non-empty string");
                        }
                    };
                }
            };
        }
        const string = isString;
        class FalseIdentityError extends TypeError {
            constructor(paramName, identityName) {
                if (!string(paramName).nonEmpty().value) throw new TypeError("Expected paramName to be non-empty string.");
                super(`Expected ${paramName} to be ${identityName}.`);
                this.name = "False Identity Error";
            }
        }
        function isNumber(number) {
            const value = "number" === typeof number && !Number.isNaN(number);
            return {
                value,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "Number");
                },
                nonNegative() {
                    return {
                        value: value ? number >= 0 : false,
                        throw(paramName) {
                            if (!this.value) throw new FalseIdentityError(paramName, "non-negative Number");
                        }
                    };
                }
            };
        }
        const number = isNumber;
        function isFunction(fn) {
            return {
                value: fn instanceof Function,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "Function");
                }
            };
        }
        const identity_function = isFunction;
        function withPropertyFn(obj, propName, identity, prevResult) {
            if (!string(propName)) throw new TypeError("Expected name to be a string.");
            if (!identity_function(identity)) throw new TypeError("Expected identity to be a Function.");
            let idAns = {
                value: false
            };
            if ("object" === typeof obj && propName in obj) idAns = identity(obj[propName]);
            if (!("object" === typeof idAns && "value" in idAns && "boolean" === typeof idAns.value)) throw new TypeError("Expected identity() to return { value: boolean }.");
            const {value} = idAns;
            return {
                value: value && prevResult.value,
                throw(paramName) {
                    prevResult.throw(paramName);
                    if (!this.value) throw new FalseIdentityError(paramName, `object with property ${propName} satisfying identity`);
                }
            };
        }
        function isObject(obj) {
            const value = "object" === typeof obj;
            const withProperty = (name, identity) => {
                prevResult = withPropertyFn(obj, name, identity, prevResult);
                return {
                    ...prevResult,
                    withProperty
                };
            };
            let prevResult = {
                value,
                withProperty,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "object");
                }
            };
            return prevResult;
        }
        const object = isObject;
        function translationExists(i18nToken, language, ...i18nParams) {
            string(i18nToken).nonEmpty().throw("i18nToken");
            const translation = language.dict(i18nToken, ...i18nParams);
            return translation !== i18nToken;
        }
        const exists = translationExists;
        function getTranslation(i18nToken, language, ...i18nParams) {
            string(i18nToken).nonEmpty().throw("i18nToken");
            if (!exists(i18nToken, language, ...i18nParams)) throw new Error(`No '${i18nToken}' definition found for language ${language.name}. Check whether data-i18n attribute is spelled correctly.`);
            return language.dict(i18nToken, ...i18nParams);
        }
        const get = getTranslation;
        function getAnimationStartScrollPosition(el) {
            const {innerHeight: windowHeight} = window;
            const {top} = el.getBoundingClientRect();
            return top + windowHeight / 2;
        }
        function animate(onAnimationStarted) {
            const animatedElements = document.querySelectorAll(".animation-on-scroll");
            const animationTimeMs = 4e3;
            let onAnimationStartedCalled = false;
            const currentLanguage = window.detectUserLanguage();
            animatedElements.forEach((el => {
                const start = 0, end = parseInt(el.dataset.val);
                const timeoutDuration = animationTimeMs / end;
                let value = start;
                const incrementValue = () => {
                    value += 1;
                    const prevValue = parseInt("0" | el.textContent);
                    if (value > prevValue) if ("i18n" in el.dataset) {
                        const translatedCaption = get(el.dataset.i18n, currentLanguage, value);
                        el.textContent = translatedCaption;
                    } else el.textContent = value;
                };
                const interval = setInterval((() => {
                    if (!onAnimationStartedCalled && onAnimationStarted instanceof Function) {
                        onAnimationStartedCalled = true;
                        onAnimationStarted();
                    }
                    if (value >= end) {
                        clearInterval(interval);
                        return;
                    }
                    incrementValue();
                }), timeoutDuration);
            }));
        }
        function scrollHandler() {
            const {scrollY} = window;
            const triggerElement = document.querySelector(".features__content");
            if (null !== triggerElement) if (scrollY >= getAnimationStartScrollPosition(triggerElement)) animate((() => window.removeEventListener("scroll", scrollHandler)));
        }
        function prepareTranslatedElements() {
            const currentLanguage = window.detectUserLanguage();
            const translatedElements = [ ...document.querySelectorAll(".animation-on-scroll") ].filter((el => "i18n" in el.dataset));
            translatedElements.forEach((el => {
                el.textContent = get(el.dataset.i18n, currentLanguage, 0);
            }));
        }
        function useAnimationOnScroll() {
            prepareTranslatedElements();
            window.addEventListener("scroll", scrollHandler);
            scrollHandler();
        }
        const animation_on_scroll = useAnimationOnScroll;
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        __webpack_require__(2352);
        __webpack_require__(3542);
        var can_use_dom = __webpack_require__(1807);
        var can_use_dom_default = __webpack_require__.n(can_use_dom);
        __webpack_require__(4249);
        __webpack_require__(7692);
        __webpack_require__(8165);
        __webpack_require__(7543);
        __webpack_require__(3344);
        __webpack_require__(7323);
        __webpack_require__(4079);
        var lodash_throttle = __webpack_require__(3096);
        var lodash_throttle_default = __webpack_require__.n(lodash_throttle);
        var lodash_debounce = __webpack_require__(1296);
        var lodash_debounce_default = __webpack_require__.n(lodash_debounce);
        var lodash_memoize = __webpack_require__(773);
        var lodash_memoize_default = __webpack_require__.n(lodash_memoize);
        var resizeObservers = [];
        var hasActiveObservations = function() {
            return resizeObservers.some((function(ro) {
                return ro.activeTargets.length > 0;
            }));
        };
        var hasSkippedObservations = function() {
            return resizeObservers.some((function(ro) {
                return ro.skippedTargets.length > 0;
            }));
        };
        var msg = "ResizeObserver loop completed with undelivered notifications.";
        var deliverResizeLoopError = function() {
            var event;
            if ("function" === typeof ErrorEvent) event = new ErrorEvent("error", {
                message: msg
            }); else {
                event = document.createEvent("Event");
                event.initEvent("error", false, false);
                event.message = msg;
            }
            window.dispatchEvent(event);
        };
        var ResizeObserverBoxOptions;
        (function(ResizeObserverBoxOptions) {
            ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
            ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
            ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
        })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
        var freeze = function(obj) {
            return Object.freeze(obj);
        };
        var ResizeObserverSize = function() {
            function ResizeObserverSize(inlineSize, blockSize) {
                this.inlineSize = inlineSize;
                this.blockSize = blockSize;
                freeze(this);
            }
            return ResizeObserverSize;
        }();
        var DOMRectReadOnly = function() {
            function DOMRectReadOnly(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.top = this.y;
                this.left = this.x;
                this.bottom = this.top + this.height;
                this.right = this.left + this.width;
                return freeze(this);
            }
            DOMRectReadOnly.prototype.toJSON = function() {
                var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
                return {
                    x,
                    y,
                    top,
                    right,
                    bottom,
                    left,
                    width,
                    height
                };
            };
            DOMRectReadOnly.fromRect = function(rectangle) {
                return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            };
            return DOMRectReadOnly;
        }();
        var isSVG = function(target) {
            return target instanceof SVGElement && "getBBox" in target;
        };
        var isHidden = function(target) {
            if (isSVG(target)) {
                var _a = target.getBBox(), width = _a.width, height = _a.height;
                return !width && !height;
            }
            var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
            return !(offsetWidth || offsetHeight || target.getClientRects().length);
        };
        var isElement = function(obj) {
            var _a;
            if (obj instanceof Element) return true;
            var scope = null === (_a = null === obj || void 0 === obj ? void 0 : obj.ownerDocument) || void 0 === _a ? void 0 : _a.defaultView;
            return !!(scope && obj instanceof scope.Element);
        };
        var isReplacedElement = function(target) {
            switch (target.tagName) {
              case "INPUT":
                if ("image" !== target.type) break;

              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return true;
            }
            return false;
        };
        var global = "undefined" !== typeof window ? window : {};
        var cache = new WeakMap;
        var scrollRegexp = /auto|scroll/;
        var verticalRegexp = /^tb|vertical/;
        var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
        var parseDimension = function(pixel) {
            return parseFloat(pixel || "0");
        };
        var size = function(inlineSize, blockSize, switchSizes) {
            if (void 0 === inlineSize) inlineSize = 0;
            if (void 0 === blockSize) blockSize = 0;
            if (void 0 === switchSizes) switchSizes = false;
            return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
        };
        var zeroBoxes = freeze({
            devicePixelContentBoxSize: size(),
            borderBoxSize: size(),
            contentBoxSize: size(),
            contentRect: new DOMRectReadOnly(0, 0, 0, 0)
        });
        var calculateBoxSizes = function(target, forceRecalculation) {
            if (void 0 === forceRecalculation) forceRecalculation = false;
            if (cache.has(target) && !forceRecalculation) return cache.get(target);
            if (isHidden(target)) {
                cache.set(target, zeroBoxes);
                return zeroBoxes;
            }
            var cs = getComputedStyle(target);
            var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
            var removePadding = !IE && "border-box" === cs.boxSizing;
            var switchSizes = verticalRegexp.test(cs.writingMode || "");
            var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
            var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
            var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
            var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
            var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
            var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
            var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
            var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
            var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
            var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
            var horizontalPadding = paddingLeft + paddingRight;
            var verticalPadding = paddingTop + paddingBottom;
            var horizontalBorderArea = borderLeft + borderRight;
            var verticalBorderArea = borderTop + borderBottom;
            var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
            var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
            var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
            var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
            var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
            var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
            var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
            var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
            var boxes = freeze({
                devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
                borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
                contentBoxSize: size(contentWidth, contentHeight, switchSizes),
                contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
            });
            cache.set(target, boxes);
            return boxes;
        };
        var calculateBoxSize = function(target, observedBox, forceRecalculation) {
            var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
            switch (observedBox) {
              case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                return devicePixelContentBoxSize;

              case ResizeObserverBoxOptions.BORDER_BOX:
                return borderBoxSize;

              default:
                return contentBoxSize;
            }
        };
        var ResizeObserverEntry = function() {
            function ResizeObserverEntry(target) {
                var boxes = calculateBoxSizes(target);
                this.target = target;
                this.contentRect = boxes.contentRect;
                this.borderBoxSize = freeze([ boxes.borderBoxSize ]);
                this.contentBoxSize = freeze([ boxes.contentBoxSize ]);
                this.devicePixelContentBoxSize = freeze([ boxes.devicePixelContentBoxSize ]);
            }
            return ResizeObserverEntry;
        }();
        var calculateDepthForNode = function(node) {
            if (isHidden(node)) return 1 / 0;
            var depth = 0;
            var parent = node.parentNode;
            while (parent) {
                depth += 1;
                parent = parent.parentNode;
            }
            return depth;
        };
        var broadcastActiveObservations = function() {
            var shallowestDepth = 1 / 0;
            var callbacks = [];
            resizeObservers.forEach((function processObserver(ro) {
                if (0 === ro.activeTargets.length) return;
                var entries = [];
                ro.activeTargets.forEach((function processTarget(ot) {
                    var entry = new ResizeObserverEntry(ot.target);
                    var targetDepth = calculateDepthForNode(ot.target);
                    entries.push(entry);
                    ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
                    if (targetDepth < shallowestDepth) shallowestDepth = targetDepth;
                }));
                callbacks.push((function resizeObserverCallback() {
                    ro.callback.call(ro.observer, entries, ro.observer);
                }));
                ro.activeTargets.splice(0, ro.activeTargets.length);
            }));
            for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                var callback = callbacks_1[_i];
                callback();
            }
            return shallowestDepth;
        };
        var gatherActiveObservationsAtDepth = function(depth) {
            resizeObservers.forEach((function processObserver(ro) {
                ro.activeTargets.splice(0, ro.activeTargets.length);
                ro.skippedTargets.splice(0, ro.skippedTargets.length);
                ro.observationTargets.forEach((function processTarget(ot) {
                    if (ot.isActive()) if (calculateDepthForNode(ot.target) > depth) ro.activeTargets.push(ot); else ro.skippedTargets.push(ot);
                }));
            }));
        };
        var process = function() {
            var depth = 0;
            gatherActiveObservationsAtDepth(depth);
            while (hasActiveObservations()) {
                depth = broadcastActiveObservations();
                gatherActiveObservationsAtDepth(depth);
            }
            if (hasSkippedObservations()) deliverResizeLoopError();
            return depth > 0;
        };
        var trigger;
        var callbacks = [];
        var notify = function() {
            return callbacks.splice(0).forEach((function(cb) {
                return cb();
            }));
        };
        var queueMicroTask = function(callback) {
            if (!trigger) {
                var toggle_1 = 0;
                var el_1 = document.createTextNode("");
                var config = {
                    characterData: true
                };
                new MutationObserver((function() {
                    return notify();
                })).observe(el_1, config);
                trigger = function() {
                    el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
                };
            }
            callbacks.push(callback);
            trigger();
        };
        var queueResizeObserver = function(cb) {
            queueMicroTask((function ResizeObserver() {
                requestAnimationFrame(cb);
            }));
        };
        var watching = 0;
        var isWatching = function() {
            return !!watching;
        };
        var CATCH_PERIOD = 250;
        var observerConfig = {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true
        };
        var events = [ "resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus" ];
        var time = function(timeout) {
            if (void 0 === timeout) timeout = 0;
            return Date.now() + timeout;
        };
        var scheduled = false;
        var Scheduler = function() {
            function Scheduler() {
                var _this = this;
                this.stopped = true;
                this.listener = function() {
                    return _this.schedule();
                };
            }
            Scheduler.prototype.run = function(timeout) {
                var _this = this;
                if (void 0 === timeout) timeout = CATCH_PERIOD;
                if (scheduled) return;
                scheduled = true;
                var until = time(timeout);
                queueResizeObserver((function() {
                    var elementsHaveResized = false;
                    try {
                        elementsHaveResized = process();
                    } finally {
                        scheduled = false;
                        timeout = until - time();
                        if (!isWatching()) return;
                        if (elementsHaveResized) _this.run(1e3); else if (timeout > 0) _this.run(timeout); else _this.start();
                    }
                }));
            };
            Scheduler.prototype.schedule = function() {
                this.stop();
                this.run();
            };
            Scheduler.prototype.observe = function() {
                var _this = this;
                var cb = function() {
                    return _this.observer && _this.observer.observe(document.body, observerConfig);
                };
                document.body ? cb() : global.addEventListener("DOMContentLoaded", cb);
            };
            Scheduler.prototype.start = function() {
                var _this = this;
                if (this.stopped) {
                    this.stopped = false;
                    this.observer = new MutationObserver(this.listener);
                    this.observe();
                    events.forEach((function(name) {
                        return global.addEventListener(name, _this.listener, true);
                    }));
                }
            };
            Scheduler.prototype.stop = function() {
                var _this = this;
                if (!this.stopped) {
                    this.observer && this.observer.disconnect();
                    events.forEach((function(name) {
                        return global.removeEventListener(name, _this.listener, true);
                    }));
                    this.stopped = true;
                }
            };
            return Scheduler;
        }();
        var scheduler = new Scheduler;
        var updateCount = function(n) {
            !watching && n > 0 && scheduler.start();
            watching += n;
            !watching && scheduler.stop();
        };
        var skipNotifyOnElement = function(target) {
            return !isSVG(target) && !isReplacedElement(target) && "inline" === getComputedStyle(target).display;
        };
        var ResizeObservation = function() {
            function ResizeObservation(target, observedBox) {
                this.target = target;
                this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
                this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                };
            }
            ResizeObservation.prototype.isActive = function() {
                var size = calculateBoxSize(this.target, this.observedBox, true);
                if (skipNotifyOnElement(this.target)) this.lastReportedSize = size;
                if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) return true;
                return false;
            };
            return ResizeObservation;
        }();
        var ResizeObserverDetail = function() {
            function ResizeObserverDetail(resizeObserver, callback) {
                this.activeTargets = [];
                this.skippedTargets = [];
                this.observationTargets = [];
                this.observer = resizeObserver;
                this.callback = callback;
            }
            return ResizeObserverDetail;
        }();
        var observerMap = new WeakMap;
        var getObservationIndex = function(observationTargets, target) {
            for (var i = 0; i < observationTargets.length; i += 1) if (observationTargets[i].target === target) return i;
            return -1;
        };
        var ResizeObserverController = function() {
            function ResizeObserverController() {}
            ResizeObserverController.connect = function(resizeObserver, callback) {
                var detail = new ResizeObserverDetail(resizeObserver, callback);
                observerMap.set(resizeObserver, detail);
            };
            ResizeObserverController.observe = function(resizeObserver, target, options) {
                var detail = observerMap.get(resizeObserver);
                var firstObservation = 0 === detail.observationTargets.length;
                if (getObservationIndex(detail.observationTargets, target) < 0) {
                    firstObservation && resizeObservers.push(detail);
                    detail.observationTargets.push(new ResizeObservation(target, options && options.box));
                    updateCount(1);
                    scheduler.schedule();
                }
            };
            ResizeObserverController.unobserve = function(resizeObserver, target) {
                var detail = observerMap.get(resizeObserver);
                var index = getObservationIndex(detail.observationTargets, target);
                var lastObservation = 1 === detail.observationTargets.length;
                if (index >= 0) {
                    lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
                    detail.observationTargets.splice(index, 1);
                    updateCount(-1);
                }
            };
            ResizeObserverController.disconnect = function(resizeObserver) {
                var _this = this;
                var detail = observerMap.get(resizeObserver);
                detail.observationTargets.slice().forEach((function(ot) {
                    return _this.unobserve(resizeObserver, ot.target);
                }));
                detail.activeTargets.splice(0, detail.activeTargets.length);
            };
            return ResizeObserverController;
        }();
        var ResizeObserver = function() {
            function ResizeObserver(callback) {
                if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" !== typeof callback) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                ResizeObserverController.connect(this, callback);
            }
            ResizeObserver.prototype.observe = function(target, options) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!isElement(target)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                ResizeObserverController.observe(this, target, options);
            };
            ResizeObserver.prototype.unobserve = function(target) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!isElement(target)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                ResizeObserverController.unobserve(this, target);
            };
            ResizeObserver.prototype.disconnect = function() {
                ResizeObserverController.disconnect(this);
            };
            ResizeObserver.toString = function() {
                return "function ResizeObserver () { [polyfill code] }";
            };
            return ResizeObserver;
        }();
        __webpack_require__(7985);
        __webpack_require__(9989);
        __webpack_require__(8307);
        __webpack_require__(6618);
        __webpack_require__(4390);
        var getOptions = function getOptions(obj) {
            var options = Array.prototype.reduce.call(obj, (function(acc, attribute) {
                var option = attribute.name.match(/data-simplebar-(.+)/);
                if (option) {
                    var key = option[1].replace(/\W+(.)/g, (function(x, chr) {
                        return chr.toUpperCase();
                    }));
                    switch (attribute.value) {
                      case "true":
                        acc[key] = true;
                        break;

                      case "false":
                        acc[key] = false;
                        break;

                      case void 0:
                        acc[key] = true;
                        break;

                      default:
                        acc[key] = attribute.value;
                    }
                }
                return acc;
            }), {});
            return options;
        };
        function getElementWindow(element) {
            if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) return window;
            return element.ownerDocument.defaultView;
        }
        function getElementDocument(element) {
            if (!element || !element.ownerDocument) return document;
            return element.ownerDocument;
        }
        var cachedScrollbarWidth = null;
        var cachedDevicePixelRatio = null;
        if (can_use_dom_default()) window.addEventListener("resize", (function() {
            if (cachedDevicePixelRatio !== window.devicePixelRatio) {
                cachedDevicePixelRatio = window.devicePixelRatio;
                cachedScrollbarWidth = null;
            }
        }));
        function scrollbarWidth(el) {
            if (null === cachedScrollbarWidth) {
                var document = getElementDocument(el);
                if ("undefined" === typeof document) {
                    cachedScrollbarWidth = 0;
                    return cachedScrollbarWidth;
                }
                var body = document.body;
                var box = document.createElement("div");
                box.classList.add("simplebar-hide-scrollbar");
                body.appendChild(box);
                var width = box.getBoundingClientRect().right;
                body.removeChild(box);
                cachedScrollbarWidth = width;
            }
            return cachedScrollbarWidth;
        }
        var SimpleBar = function() {
            function SimpleBar(element, options) {
                var _this = this;
                this.onScroll = function() {
                    var elWindow = getElementWindow(_this.el);
                    if (!_this.scrollXTicking) {
                        elWindow.requestAnimationFrame(_this.scrollX);
                        _this.scrollXTicking = true;
                    }
                    if (!_this.scrollYTicking) {
                        elWindow.requestAnimationFrame(_this.scrollY);
                        _this.scrollYTicking = true;
                    }
                };
                this.scrollX = function() {
                    if (_this.axis.x.isOverflowing) {
                        _this.showScrollbar("x");
                        _this.positionScrollbar("x");
                    }
                    _this.scrollXTicking = false;
                };
                this.scrollY = function() {
                    if (_this.axis.y.isOverflowing) {
                        _this.showScrollbar("y");
                        _this.positionScrollbar("y");
                    }
                    _this.scrollYTicking = false;
                };
                this.onMouseEnter = function() {
                    _this.showScrollbar("x");
                    _this.showScrollbar("y");
                };
                this.onMouseMove = function(e) {
                    _this.mouseX = e.clientX;
                    _this.mouseY = e.clientY;
                    if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) _this.onMouseMoveForAxis("x");
                    if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) _this.onMouseMoveForAxis("y");
                };
                this.onMouseLeave = function() {
                    _this.onMouseMove.cancel();
                    if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) _this.onMouseLeaveForAxis("x");
                    if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) _this.onMouseLeaveForAxis("y");
                    _this.mouseX = -1;
                    _this.mouseY = -1;
                };
                this.onWindowResize = function() {
                    _this.scrollbarWidth = _this.getScrollbarWidth();
                    _this.hideNativeScrollbar();
                };
                this.hideScrollbars = function() {
                    _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
                    _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
                    if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
                        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);
                        _this.axis.y.isVisible = false;
                    }
                    if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
                        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);
                        _this.axis.x.isVisible = false;
                    }
                };
                this.onPointerEvent = function(e) {
                    var isWithinTrackXBounds, isWithinTrackYBounds;
                    _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
                    _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
                    if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
                    if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
                    if (isWithinTrackXBounds || isWithinTrackYBounds) {
                        e.preventDefault();
                        e.stopPropagation();
                        if ("mousedown" === e.type) {
                            if (isWithinTrackXBounds) {
                                _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
                                if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) _this.onDragStart(e, "x"); else _this.onTrackClick(e, "x");
                            }
                            if (isWithinTrackYBounds) {
                                _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
                                if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) _this.onDragStart(e, "y"); else _this.onTrackClick(e, "y");
                            }
                        }
                    }
                };
                this.drag = function(e) {
                    var eventOffset;
                    var track = _this.axis[_this.draggedAxis].track;
                    var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
                    var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
                    var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
                    var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
                    e.preventDefault();
                    e.stopPropagation();
                    if ("y" === _this.draggedAxis) eventOffset = e.pageY; else eventOffset = e.pageX;
                    var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset;
                    var dragPerc = dragPos / (trackSize - scrollbar.size);
                    var scrollPos = dragPerc * (contentSize - hostSize);
                    if ("x" === _this.draggedAxis) {
                        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
                        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
                    }
                    _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
                };
                this.onEndDrag = function(e) {
                    var elDocument = getElementDocument(_this.el);
                    var elWindow = getElementWindow(_this.el);
                    e.preventDefault();
                    e.stopPropagation();
                    _this.el.classList.remove(_this.classNames.dragging);
                    elDocument.removeEventListener("mousemove", _this.drag, true);
                    elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
                    _this.removePreventClickId = elWindow.setTimeout((function() {
                        elDocument.removeEventListener("click", _this.preventClick, true);
                        elDocument.removeEventListener("dblclick", _this.preventClick, true);
                        _this.removePreventClickId = null;
                    }));
                };
                this.preventClick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                };
                this.el = element;
                this.minScrollbarWidth = 20;
                this.options = Object.assign({}, SimpleBar.defaultOptions, options);
                this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, this.options.classNames);
                this.axis = {
                    x: {
                        scrollOffsetAttr: "scrollLeft",
                        sizeAttr: "width",
                        scrollSizeAttr: "scrollWidth",
                        offsetSizeAttr: "offsetWidth",
                        offsetAttr: "left",
                        overflowAttr: "overflowX",
                        dragOffset: 0,
                        isOverflowing: true,
                        isVisible: false,
                        forceVisible: false,
                        track: {},
                        scrollbar: {}
                    },
                    y: {
                        scrollOffsetAttr: "scrollTop",
                        sizeAttr: "height",
                        scrollSizeAttr: "scrollHeight",
                        offsetSizeAttr: "offsetHeight",
                        offsetAttr: "top",
                        overflowAttr: "overflowY",
                        dragOffset: 0,
                        isOverflowing: true,
                        isVisible: false,
                        forceVisible: false,
                        track: {},
                        scrollbar: {}
                    }
                };
                this.removePreventClickId = null;
                if (SimpleBar.instances.has(this.el)) return;
                this.recalculate = lodash_throttle_default()(this.recalculate.bind(this), 64);
                this.onMouseMove = lodash_throttle_default()(this.onMouseMove.bind(this), 64);
                this.hideScrollbars = lodash_debounce_default()(this.hideScrollbars.bind(this), this.options.timeout);
                this.onWindowResize = lodash_debounce_default()(this.onWindowResize.bind(this), 64, {
                    leading: true
                });
                SimpleBar.getRtlHelpers = lodash_memoize_default()(SimpleBar.getRtlHelpers);
                this.init();
            }
            SimpleBar.getRtlHelpers = function getRtlHelpers() {
                var dummyDiv = document.createElement("div");
                dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                var scrollbarDummyEl = dummyDiv.firstElementChild;
                document.body.appendChild(scrollbarDummyEl);
                var dummyContainerChild = scrollbarDummyEl.firstElementChild;
                scrollbarDummyEl.scrollLeft = 0;
                var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
                var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
                scrollbarDummyEl.scrollLeft = 999;
                var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
                return {
                    isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
                    isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
                };
            };
            SimpleBar.getOffset = function getOffset(el) {
                var rect = el.getBoundingClientRect();
                var elDocument = getElementDocument(el);
                var elWindow = getElementWindow(el);
                return {
                    top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
                    left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
                };
            };
            var _proto = SimpleBar.prototype;
            _proto.init = function init() {
                SimpleBar.instances.set(this.el, this);
                if (can_use_dom_default()) {
                    this.initDOM();
                    this.setAccessibilityAttributes();
                    this.scrollbarWidth = this.getScrollbarWidth();
                    this.recalculate();
                    this.initListeners();
                }
            };
            _proto.initDOM = function initDOM() {
                var _this2 = this;
                if (Array.prototype.filter.call(this.el.children, (function(child) {
                    return child.classList.contains(_this2.classNames.wrapper);
                })).length) {
                    this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
                    this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
                    this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
                    this.offsetEl = this.el.querySelector("." + this.classNames.offset);
                    this.maskEl = this.el.querySelector("." + this.classNames.mask);
                    this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
                    this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
                    this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
                    this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
                    this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
                } else {
                    this.wrapperEl = document.createElement("div");
                    this.contentWrapperEl = document.createElement("div");
                    this.offsetEl = document.createElement("div");
                    this.maskEl = document.createElement("div");
                    this.contentEl = document.createElement("div");
                    this.placeholderEl = document.createElement("div");
                    this.heightAutoObserverWrapperEl = document.createElement("div");
                    this.heightAutoObserverEl = document.createElement("div");
                    this.wrapperEl.classList.add(this.classNames.wrapper);
                    this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
                    this.offsetEl.classList.add(this.classNames.offset);
                    this.maskEl.classList.add(this.classNames.mask);
                    this.contentEl.classList.add(this.classNames.contentEl);
                    this.placeholderEl.classList.add(this.classNames.placeholder);
                    this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
                    this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);
                    while (this.el.firstChild) this.contentEl.appendChild(this.el.firstChild);
                    this.contentWrapperEl.appendChild(this.contentEl);
                    this.offsetEl.appendChild(this.contentWrapperEl);
                    this.maskEl.appendChild(this.offsetEl);
                    this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
                    this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
                    this.wrapperEl.appendChild(this.maskEl);
                    this.wrapperEl.appendChild(this.placeholderEl);
                    this.el.appendChild(this.wrapperEl);
                }
                if (!this.axis.x.track.el || !this.axis.y.track.el) {
                    var track = document.createElement("div");
                    var scrollbar = document.createElement("div");
                    track.classList.add(this.classNames.track);
                    scrollbar.classList.add(this.classNames.scrollbar);
                    track.appendChild(scrollbar);
                    this.axis.x.track.el = track.cloneNode(true);
                    this.axis.x.track.el.classList.add(this.classNames.horizontal);
                    this.axis.y.track.el = track.cloneNode(true);
                    this.axis.y.track.el.classList.add(this.classNames.vertical);
                    this.el.appendChild(this.axis.x.track.el);
                    this.el.appendChild(this.axis.y.track.el);
                }
                this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
                this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);
                if (!this.options.autoHide) {
                    this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
                    this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
                }
                this.el.setAttribute("data-simplebar", "init");
            };
            _proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
                var ariaLabel = this.options.ariaLabel || "scrollable content";
                this.contentWrapperEl.setAttribute("tabindex", "0");
                this.contentWrapperEl.setAttribute("role", "region");
                this.contentWrapperEl.setAttribute("aria-label", ariaLabel);
            };
            _proto.initListeners = function initListeners() {
                var _this3 = this;
                var elWindow = getElementWindow(this.el);
                if (this.options.autoHide) this.el.addEventListener("mouseenter", this.onMouseEnter);
                [ "mousedown", "click", "dblclick" ].forEach((function(e) {
                    _this3.el.addEventListener(e, _this3.onPointerEvent, true);
                }));
                [ "touchstart", "touchend", "touchmove" ].forEach((function(e) {
                    _this3.el.addEventListener(e, _this3.onPointerEvent, {
                        capture: true,
                        passive: true
                    });
                }));
                this.el.addEventListener("mousemove", this.onMouseMove);
                this.el.addEventListener("mouseleave", this.onMouseLeave);
                this.contentWrapperEl.addEventListener("scroll", this.onScroll);
                elWindow.addEventListener("resize", this.onWindowResize);
                var resizeObserverStarted = false;
                var resizeAnimationFrameId = null;
                var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
                this.resizeObserver = new resizeObserver((function() {
                    if (!resizeObserverStarted || null !== resizeAnimationFrameId) return;
                    resizeAnimationFrameId = elWindow.requestAnimationFrame((function() {
                        _this3.recalculate();
                        resizeAnimationFrameId = null;
                    }));
                }));
                this.resizeObserver.observe(this.el);
                this.resizeObserver.observe(this.contentEl);
                elWindow.requestAnimationFrame((function() {
                    resizeObserverStarted = true;
                }));
                this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
                this.mutationObserver.observe(this.contentEl, {
                    childList: true,
                    subtree: true,
                    characterData: true
                });
            };
            _proto.recalculate = function recalculate() {
                var elWindow = getElementWindow(this.el);
                this.elStyles = elWindow.getComputedStyle(this.el);
                this.isRtl = "rtl" === this.elStyles.direction;
                var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
                var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
                var contentElOffsetWidth = this.contentEl.offsetWidth;
                var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
                var elOverflowX = this.elStyles.overflowX;
                var elOverflowY = this.elStyles.overflowY;
                this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
                this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
                var contentElScrollHeight = this.contentEl.scrollHeight;
                var contentElScrollWidth = this.contentEl.scrollWidth;
                this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
                this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : "auto";
                this.placeholderEl.style.height = contentElScrollHeight + "px";
                var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
                this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
                this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
                this.axis.x.isOverflowing = "hidden" === elOverflowX ? false : this.axis.x.isOverflowing;
                this.axis.y.isOverflowing = "hidden" === elOverflowY ? false : this.axis.y.isOverflowing;
                this.axis.x.forceVisible = "x" === this.options.forceVisible || true === this.options.forceVisible;
                this.axis.y.forceVisible = "y" === this.options.forceVisible || true === this.options.forceVisible;
                this.hideNativeScrollbar();
                var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
                var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
                this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
                this.axis.x.scrollbar.size = this.getScrollbarSize("x");
                this.axis.y.scrollbar.size = this.getScrollbarSize("y");
                this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
                this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
                this.positionScrollbar("x");
                this.positionScrollbar("y");
                this.toggleTrackVisibility("x");
                this.toggleTrackVisibility("y");
            };
            _proto.getScrollbarSize = function getScrollbarSize(axis) {
                if (void 0 === axis) axis = "y";
                if (!this.axis[axis].isOverflowing) return 0;
                var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
                var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
                var scrollbarSize;
                var scrollbarRatio = trackSize / contentSize;
                scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
                if (this.options.scrollbarMaxSize) scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
                return scrollbarSize;
            };
            _proto.positionScrollbar = function positionScrollbar(axis) {
                if (void 0 === axis) axis = "y";
                if (!this.axis[axis].isOverflowing) return;
                var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
                var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
                var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
                var scrollbar = this.axis[axis].scrollbar;
                var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
                scrollOffset = "x" === axis && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
                var scrollPourcent = scrollOffset / (contentSize - hostSize);
                var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
                handleOffset = "x" === axis && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
                scrollbar.el.style.transform = "x" === axis ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
            };
            _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
                if (void 0 === axis) axis = "y";
                var track = this.axis[axis].track.el;
                var scrollbar = this.axis[axis].scrollbar.el;
                if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
                    track.style.visibility = "visible";
                    this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
                } else {
                    track.style.visibility = "hidden";
                    this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
                }
                if (this.axis[axis].isOverflowing) scrollbar.style.display = "block"; else scrollbar.style.display = "none";
            };
            _proto.hideNativeScrollbar = function hideNativeScrollbar() {
                this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
                this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
            };
            _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
                if (void 0 === axis) axis = "y";
                this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
                this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
                var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);
                if (isWithinScrollbarBoundsX) this.axis[axis].scrollbar.el.classList.add(this.classNames.hover); else this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
                if (this.isWithinBounds(this.axis[axis].track.rect)) {
                    this.showScrollbar(axis);
                    this.axis[axis].track.el.classList.add(this.classNames.hover);
                } else this.axis[axis].track.el.classList.remove(this.classNames.hover);
            };
            _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
                if (void 0 === axis) axis = "y";
                this.axis[axis].track.el.classList.remove(this.classNames.hover);
                this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
            };
            _proto.showScrollbar = function showScrollbar(axis) {
                if (void 0 === axis) axis = "y";
                var scrollbar = this.axis[axis].scrollbar.el;
                if (!this.axis[axis].isVisible) {
                    scrollbar.classList.add(this.classNames.visible);
                    this.axis[axis].isVisible = true;
                }
                if (this.options.autoHide) this.hideScrollbars();
            };
            _proto.onDragStart = function onDragStart(e, axis) {
                if (void 0 === axis) axis = "y";
                var elDocument = getElementDocument(this.el);
                var elWindow = getElementWindow(this.el);
                var scrollbar = this.axis[axis].scrollbar;
                var eventOffset = "y" === axis ? e.pageY : e.pageX;
                this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
                this.draggedAxis = axis;
                this.el.classList.add(this.classNames.dragging);
                elDocument.addEventListener("mousemove", this.drag, true);
                elDocument.addEventListener("mouseup", this.onEndDrag, true);
                if (null === this.removePreventClickId) {
                    elDocument.addEventListener("click", this.preventClick, true);
                    elDocument.addEventListener("dblclick", this.preventClick, true);
                } else {
                    elWindow.clearTimeout(this.removePreventClickId);
                    this.removePreventClickId = null;
                }
            };
            _proto.onTrackClick = function onTrackClick(e, axis) {
                var _this4 = this;
                if (void 0 === axis) axis = "y";
                if (!this.options.clickOnTrack) return;
                var elWindow = getElementWindow(this.el);
                this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
                var scrollbar = this.axis[axis].scrollbar;
                var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
                var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
                var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
                var t = "y" === axis ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
                var dir = t < 0 ? -1 : 1;
                var scrollSize = -1 === dir ? scrolled - hostSize : scrolled + hostSize;
                var scrollTo = function scrollTo() {
                    if (-1 === dir) {
                        if (scrolled > scrollSize) {
                            var _this4$contentWrapper;
                            scrolled -= _this4.options.clickOnTrackSpeed;
                            _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, 
                            _this4$contentWrapper));
                            elWindow.requestAnimationFrame(scrollTo);
                        }
                    } else if (scrolled < scrollSize) {
                        var _this4$contentWrapper2;
                        scrolled += _this4.options.clickOnTrackSpeed;
                        _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, 
                        _this4$contentWrapper2));
                        elWindow.requestAnimationFrame(scrollTo);
                    }
                };
                scrollTo();
            };
            _proto.getContentElement = function getContentElement() {
                return this.contentEl;
            };
            _proto.getScrollElement = function getScrollElement() {
                return this.contentWrapperEl;
            };
            _proto.getScrollbarWidth = function getScrollbarWidth() {
                try {
                    if ("none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) return 0; else return scrollbarWidth(this.el);
                } catch (e) {
                    return scrollbarWidth(this.el);
                }
            };
            _proto.removeListeners = function removeListeners() {
                var _this5 = this;
                var elWindow = getElementWindow(this.el);
                if (this.options.autoHide) this.el.removeEventListener("mouseenter", this.onMouseEnter);
                [ "mousedown", "click", "dblclick" ].forEach((function(e) {
                    _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
                }));
                [ "touchstart", "touchend", "touchmove" ].forEach((function(e) {
                    _this5.el.removeEventListener(e, _this5.onPointerEvent, {
                        capture: true,
                        passive: true
                    });
                }));
                this.el.removeEventListener("mousemove", this.onMouseMove);
                this.el.removeEventListener("mouseleave", this.onMouseLeave);
                if (this.contentWrapperEl) this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
                elWindow.removeEventListener("resize", this.onWindowResize);
                if (this.mutationObserver) this.mutationObserver.disconnect();
                if (this.resizeObserver) this.resizeObserver.disconnect();
                this.recalculate.cancel();
                this.onMouseMove.cancel();
                this.hideScrollbars.cancel();
                this.onWindowResize.cancel();
            };
            _proto.unMount = function unMount() {
                this.removeListeners();
                SimpleBar.instances.delete(this.el);
            };
            _proto.isWithinBounds = function isWithinBounds(bbox) {
                return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
            };
            _proto.findChild = function findChild(el, query) {
                var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
                return Array.prototype.filter.call(el.children, (function(child) {
                    return matches.call(child, query);
                }))[0];
            };
            return SimpleBar;
        }();
        SimpleBar.defaultOptions = {
            autoHide: true,
            forceVisible: false,
            clickOnTrack: true,
            clickOnTrackSpeed: 40,
            classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging"
            },
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            timeout: 1e3
        };
        SimpleBar.instances = new WeakMap;
        SimpleBar.initDOMLoadedElements = function() {
            document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
            window.removeEventListener("load", this.initDOMLoadedElements);
            Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(el) {
                if ("init" !== el.getAttribute("data-simplebar") && !SimpleBar.instances.has(el)) new SimpleBar(el, getOptions(el.attributes));
            }));
        };
        SimpleBar.removeObserver = function() {
            this.globalObserver.disconnect();
        };
        SimpleBar.initHtmlApi = function() {
            this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
            if ("undefined" !== typeof MutationObserver) {
                this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
                this.globalObserver.observe(document, {
                    childList: true,
                    subtree: true
                });
            }
            if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) window.setTimeout(this.initDOMLoadedElements); else {
                document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
                window.addEventListener("load", this.initDOMLoadedElements);
            }
        };
        SimpleBar.handleMutations = function(mutations) {
            mutations.forEach((function(mutation) {
                Array.prototype.forEach.call(mutation.addedNodes, (function(addedNode) {
                    if (1 === addedNode.nodeType) if (addedNode.hasAttribute("data-simplebar")) !SimpleBar.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar(addedNode, getOptions(addedNode.attributes)); else Array.prototype.forEach.call(addedNode.querySelectorAll("[data-simplebar]"), (function(el) {
                        if ("init" !== el.getAttribute("data-simplebar") && !SimpleBar.instances.has(el) && document.documentElement.contains(el)) new SimpleBar(el, getOptions(el.attributes));
                    }));
                }));
                Array.prototype.forEach.call(mutation.removedNodes, (function(removedNode) {
                    if (1 === removedNode.nodeType) if ("init" === removedNode.getAttribute("data-simplebar")) SimpleBar.instances.has(removedNode) && !document.documentElement.contains(removedNode) && SimpleBar.instances.get(removedNode).unMount(); else Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), (function(el) {
                        SimpleBar.instances.has(el) && !document.documentElement.contains(el) && SimpleBar.instances.get(el).unMount();
                    }));
                }));
            }));
        };
        SimpleBar.getOptions = getOptions;
        if (can_use_dom_default()) SimpleBar.initHtmlApi();
        var smooth_scroll_polyfills_min = __webpack_require__(3002);
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof smooth_scroll_polyfills_min) (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const desktopMedia = "(min-width: 78.75em)";
        function headerDesktop() {
            const header = document.querySelector(".header");
            const headerContainer = header.querySelector(".header__container");
            const mediaResult = window.matchMedia(desktopMedia);
            const moveToContainer = () => {
                const navPlusButton = header.querySelector(".nav-plus-button");
                header.removeChild(navPlusButton);
                headerContainer.appendChild(navPlusButton);
            };
            const moveToHeader = () => {
                const navPlusButton = headerContainer.querySelector(".nav-plus-button");
                headerContainer.removeChild(navPlusButton);
                header.appendChild(navPlusButton);
            };
            if (mediaResult.matches) moveToContainer();
            mediaResult.addEventListener("change", (e => {
                if (e.matches) moveToContainer(); else moveToHeader();
            }));
        }
        var jquery = __webpack_require__(9755);
        let menuState = true;
        const menuBodyNavElements = document.querySelectorAll(".menu__body, .nav-plus-button");
        const iconMenu = document.querySelectorAll(".menu__icons > .icon-menu")[0];
        const header = document.getElementsByClassName("header")[0];
        function enableMenu() {
            menuState = true;
            document.body.classList.add("lock", "lock-scroll");
            header.classList.add("header__menu-active");
            [ ...menuBodyNavElements ].forEach((el => el.classList.remove("hidden")));
            iconMenu.classList.add("icon-menu__active");
            header.classList.add("background");
        }
        function disableMenu() {
            menuState = false;
            document.body.classList.remove("lock", "lock-scroll");
            header.classList.remove("header__menu-active");
            [ ...menuBodyNavElements ].forEach((el => el.classList.add("hidden")));
            iconMenu.classList.remove("icon-menu__active");
            header.classList.remove("background");
        }
        function toggleMenu() {
            if (menuState) disableMenu(); else enableMenu();
        }
        function autoCloseMenu() {
            jquery("header a, footer a").on("click", (() => {
                if (menuState) disableMenu();
            }));
        }
        function getCurrentPage() {
            if ("page" in document.body.dataset) return document.body.dataset.page;
            throw new Error("The data-page attribute is missing in <body> element.");
        }
        const currentPage = getCurrentPage;
        class CurrencyFactor {
            constructor(currencyFactorData) {
                object(currencyFactorData).withProperty("id", (id => string(id).nonEmpty())).withProperty("factor", (factor => number(factor).nonNegative())).throw("currencyFactorData");
                const {id, factor} = currencyFactorData;
                this.id = id;
                this.factor = factor;
            }
        }
        class CurrencyPartial {
            constructor(currencyPartialData) {
                object(currencyPartialData).withProperty("id", (id => string(id).nonEmpty())).withProperty("name", (name => string(name).nonEmpty())).withProperty("short", (short => string(short).nonEmpty())).throw("currencyPartialData");
                const {id, name, short} = currencyPartialData;
                this.id = id;
                this.name = name;
                this.short = short;
                if ("price" in currencyPartialData) {
                    number(currencyPartialData.price).throw("currencyPartialData.price property");
                    this.price = currencyPartialData.price;
                }
                if ("change" in currencyPartialData) {
                    number(currencyPartialData.change).throw("currencyPartialData.change property");
                    this.change = currencyPartialData.change;
                }
                if ("address" in currencyPartialData && "card" in currencyPartialData) throw new Error('Currency cannot have both "address" and "card" properties defined.');
                if ("address" in currencyPartialData) {
                    string(currencyPartialData.address).nonEmpty().throw("currencyPartialData.address property");
                    if ("network" in currencyPartialData) {
                        string(currencyPartialData.network).throw("currencyDataPartial.network property");
                        this.network = currencyPartialData.network;
                    } else this.network = "";
                    this.address = currencyPartialData.address;
                } else if ("card" in currencyPartialData) {
                    string(currencyPartialData.card).nonEmpty().throw("currencyPartialData.card property");
                    this.card = currencyPartialData.card;
                    if (object(currencyPartialData).withProperty("network", (() => true)).value) throw new Error("Fiat currency cannot have assigned crypto network.");
                }
            }
            getFinal() {
                const currencyData = {
                    id: this.id,
                    name: this.name,
                    short: this.short,
                    price: this.price,
                    change: this.change
                };
                if (this.card) currencyData.card = this.card; else if (this.address) {
                    currencyData.address = this.address;
                    currencyData.network = this.network;
                }
                return new Currency(currencyData);
            }
        }
        class Currency extends CurrencyPartial {
            constructor(currencyData) {
                object(currencyData).withProperty("id", (id => string(id).nonEmpty())).withProperty("name", (name => string(name).nonEmpty())).withProperty("short", (short => string(short).nonEmpty())).withProperty("price", (price => number(price))).withProperty("change", (change => number(change))).throw("currencyData");
                if (!("card" in currencyData || "address" in currencyData)) throw new Error("currencyData should contain either currencyData.card or currencyData.address property.");
                if ("address" in currencyData) if (!("network" in currencyData)) throw new Error("currencyData should have assigned crypto network, if has address property.");
                super(currencyData);
                this.price;
                this.change;
            }
        }
        const showFirstNCryptocurrencies = 5;
        const currencyFactors = [ {
            id: "sol",
            factor: .9
        } ].map((currencyFactorData => new CurrencyFactor(currencyFactorData)));
        const cryptocurrencies = [ {
            id: "btc",
            name: "Bitcoin",
            short: "BTC",
            address: "bc1qyq8vm0k2h54d7g5eueefae63e29yyxgehskvcf"
        }, {
            id: "ltc",
            name: "Litecoin",
            short: "LTC",
            address: "ltc1qpkzhcxkeurxmzvkv8kj2k4dlr2nauerxflydzx"
        }, {
            id: "eth",
            name: "Ethereum",
            short: "ETH",
            network: "ERC20",
            address: "0x4f94f8dAfB517556162175BcA45cb3476dfE27E5"
        }, {
            id: "xrp",
            name: "Ripple",
            short: "XRP",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "doge",
            name: "Dogecoin",
            short: "DOGE",
            address: "DLm86Vf44xdpSRwV6X6168d9iNwDQKLqcG"
        }, {
            id: "bnb",
            name: "Binance coin",
            short: "BNB",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "sol",
            name: "Solana",
            short: "SOL",
            address: "AGDXgqwLidxazuoaVnsFXkbDvwJH1fwbFk8Uym8JKz7U"
        }, {
            id: "dot",
            name: "Polkadot",
            short: "DOT",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "matic",
            name: "Matic",
            short: "MATIC",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "near",
            name: "Near",
            short: "NEAR",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "ada",
            name: "Cardano",
            short: "ADA",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "etc",
            name: "Ethereum Classic",
            short: "ETC",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "trx",
            name: "TRON",
            short: "TRX",
            network: "TRC20",
            address: "TBDNX3tB8avz7BM6gRDQ2qJsVkb3hvimy8"
        }, {
            id: "shib",
            name: "Shiba Inu",
            short: "SHIB",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "avax",
            name: "Avalanche",
            short: "AVAX",
            address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "usdc",
            name: "USD Coin",
            short: "USDC",
            network: "ERC20",
            address: "0x4f94f8dAfB517556162175BcA45cb3476dfE27E5"
        } ].map((currencyPartialData => new CurrencyPartial(currencyPartialData)));
        [ {
            id: "usd",
            name: "US Dollar",
            short: "USD",
            card: "4444444444444444"
        } ].map((currencyPartialData => new CurrencyPartial(currencyPartialData)));
        const restCryptos = [ {
            id: "usdt-tron",
            name: "USDT",
            short: "USDT (TRC20)",
            price: 1,
            change: 0,
            network: "TRC20",
            address: "TBDNX3tB8avz7BM6gRDQ2qJsVkb3hvimy8"
        }, {
            id: "usdt-eth",
            name: "USDT",
            short: "USDT (ERC20)",
            price: 1,
            change: 0,
            network: "ERC20",
            address: "0x4f94f8dAfB517556162175BcA45cb3476dfE27E5"
        } ].map((currencyData => new Currency(currencyData)));
        class elementNotFound_ElementNotFoundError extends Error {
            constructor(elementName) {
                super(`Unable to locate ${elementName} element.`);
                this.name = "Element Not Found Error";
            }
        }
        const elementNotFound = elementNotFound_ElementNotFoundError;
        function isCurrencyPartial(partialCurrency) {
            return {
                value: partialCurrency instanceof CurrencyPartial,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "CurrencyPartial");
                }
            };
        }
        function isCurrency(currency) {
            return {
                value: currency instanceof Currency,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "Currency");
                }
            };
        }
        function isCurrencyPartialArray(currencyPartialArr) {
            const value = Array.isArray(currencyPartialArr) && currencyPartialArr.length > 0 && currencyPartialArr.every((cp => isCurrencyPartial(cp).value));
            return {
                value,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "non-empty CurrencyPartial[] array");
                }
            };
        }
        function isCurrencyArray(currenciesArr) {
            const value = Array.isArray(currenciesArr) && currenciesArr.length > 0 && currenciesArr.every((c => isCurrency(c).value));
            return {
                value,
                throw(paramName) {
                    if (!this.value) throw new FalseIdentityError(paramName, "non-empty Currency[] array");
                }
            };
        }
        function preCheck(x) {
            if ("string" === typeof x || x instanceof String) x = parseFloat(x);
            if (x < 1e-4) return x.toFixed(8); else if (Math.floor(x) < 1e4) return x.toPrecision(4);
            return x.toString();
        }
        function preCheckChange(num) {
            return num.toFixed(2);
        }
        function preCheckInput(x) {
            if ("string" === typeof x || x instanceof String) x = parseFloat(x);
            const preCheckLength = 8;
            const whole = Math.floor(x);
            const fr = x - whole;
            x = fr + whole;
            if (x > 0 && x.toString().length > preCheckLength + 1 || 0 === whole && fr < 1e-4) return x.toFixed(preCheckLength);
            return x.toString();
        }
        function getSign(num) {
            return 0 === num ? num : parseInt((num / Math.abs(num)).toFixed(0));
        }
        function mapSign(num) {
            switch (getSign(num)) {
              case 1:
                return "+";

              case -1:
                return "-";

              default:
                return "";
            }
        }
        function prependSignLiteral(num) {
            return `${mapSign(num)}${preCheckChange(num).replace(/-/g, "")}`;
        }
        function createCryptoActions() {
            const changeButton = document.createElement("a");
            changeButton.href = "";
            changeButton.className = "button__change i18n-style";
            const sellButton = document.createElement("a");
            sellButton.href = "";
            sellButton.className = "button__sell i18n";
            sellButton.dataset.i18n = "popular-currencies-sell";
            const buyButton = document.createElement("a");
            buyButton.href = "";
            buyButton.className = "button__buy i18n";
            buyButton.dataset.i18n = "popular-currencies-buy";
            const columActions = document.createElement("div");
            columActions.className = "colum__actions";
            columActions.append(changeButton, sellButton, buyButton);
            return columActions;
        }
        function createCryptocurrencyItem(crypto) {
            isCurrencyPartial(crypto).throw("crypto");
            const item = document.createElement("div");
            item.className = "cryptocurrency__item";
            const left = document.createElement("div");
            left.className = "cryptocurrency__left";
            const icon = document.createElement("i");
            icon.className = `fonticons-${crypto.short.toLowerCase()} cryptocurrency__icon`;
            const name = document.createElement("div");
            name.className = "cryptocurrency__name";
            name.innerHTML = crypto.name;
            left.append(icon, name);
            const short = document.createElement("div");
            short.className = "cryptocurrency__short";
            short.innerHTML = crypto.short;
            item.append(left, short);
            return item;
        }
        function createCryptoElement(crypto, id = 0) {
            isCurrencyPartial(crypto).throw("crypto");
            number(id).throw("id");
            const colum = document.createElement("div");
            colum.className = "popular-currencies__colum colum i18n-style";
            if (id > showFirstNCryptocurrencies - 1) {
                colum.classList.add("colum__hidden");
                colum.classList.add("colum__hideable");
            }
            const item = createCryptocurrencyItem(crypto);
            const price = document.createElement("div");
            price.className = "colum__price";
            price.id = crypto.id;
            const change = document.createElement("div");
            change.className = "colum__change";
            const actions = createCryptoActions();
            colum.append(item, price, change, actions);
            return colum;
        }
        const crypto_element = createCryptoElement;
        const storageConfig = {
            tokenNames: {
                targetCrypto: "targetCrypto",
                operation: "operation",
                currentLanguage: "currentLang",
                targetElement: "s"
            }
        };
        const storage = storageConfig;
        function changeSellBuyToExchangeRedirect() {
            const {targetCrypto, operation} = storage.tokenNames;
            jquery(".button__change").each(((_, el) => {
                const columnPriceEl = el.parentElement.parentElement.querySelector(".colum__price");
                if (!(columnPriceEl instanceof Element)) throw new elementNotFound(".colum__price");
                const cryptoId = columnPriceEl.id;
                jquery(el).attr("href", `exchanger.html?${targetCrypto}=${cryptoId}&${operation}=exchange`);
            }));
            jquery(".button__buy").each(((_, el) => {
                const columnPriceEl = el.parentElement.parentElement.querySelector(".colum__price");
                if (!(columnPriceEl instanceof Element)) throw new elementNotFound(".colum__price");
                const cryptoId = columnPriceEl.id;
                jquery(el).attr("href", `exchanger.html?${targetCrypto}=${cryptoId}&${operation}=buy`);
            }));
            jquery(".button__sell").each(((_, el) => {
                const columnPriceEl = el.parentElement.parentElement.querySelector(".colum__price");
                if (!(columnPriceEl instanceof Element)) throw new elementNotFound(".colum__price");
                const cryptoId = columnPriceEl.id;
                jquery(el).attr("href", `exchanger.html?${targetCrypto}=${cryptoId}&${operation}=sell`);
            }));
        }
        function addCryptocurrencies() {
            const popularCurrenciesContainer = document.querySelector(".popular-currencies__container");
            if (null === popularCurrenciesContainer) throw new elementNotFound(".popular-currencies__container");
            const actionEl = popularCurrenciesContainer.querySelector(".popular-currencies__action");
            if (null === actionEl) throw new elementNotFound(".popular-currencies__action");
            cryptocurrencies.forEach(((crypto, id) => {
                const cryptoEl = crypto_element(crypto, id);
                popularCurrenciesContainer.insertBefore(cryptoEl, actionEl);
            }));
            changeSellBuyToExchangeRedirect();
        }
        function mapSignStyleClass(num) {
            switch (getSign(num)) {
              case 1:
                return "change__positive";

              case -1:
                return "change__negative";

              default:
                return "";
            }
        }
        function fillCryptocurrencies(cryptos) {
            isCurrencyArray(cryptos).throw("cryptos");
            const cryptocurrencies = document.getElementsByClassName("popular-currencies__colum");
            [ ...cryptocurrencies ].forEach((cryptoEl => {
                const priceEl = cryptoEl.querySelector(".colum__price");
                const changeEl = cryptoEl.querySelector(".colum__change");
                const crypto = cryptos.find((c => c.id === priceEl.id));
                isCurrency(crypto).throw("crypto");
                const priceStr = preCheck(crypto.price);
                const changeValue = parseFloat(preCheckChange(crypto.change));
                const changeStr = prependSignLiteral(changeValue);
                const cryptocurrencyMobileEl = document.createElement("div");
                cryptocurrencyMobileEl.className = "cryptocurrency__price";
                cryptocurrencyMobileEl.innerHTML = priceStr;
                const cryptoNameEl = cryptoEl.querySelector(".cryptocurrency__name");
                cryptoNameEl.parentElement.removeChild(cryptoNameEl);
                const cryptoNamePrice = document.createElement("div");
                cryptoNamePrice.classList.add("cryptocurrency__nameprice");
                cryptoNamePrice.append(cryptoNameEl, cryptocurrencyMobileEl);
                const cryptoLeftEl = cryptoEl.querySelector(".cryptocurrency__left");
                cryptoLeftEl.appendChild(cryptoNamePrice);
                priceEl.innerHTML = priceStr;
                changeEl.innerHTML = changeStr;
                const changeElSignClass = mapSignStyleClass(changeValue);
                if (changeElSignClass) changeEl.classList.add(changeElSignClass);
            }));
        }
        function validateCryptosParam(cryptos) {
            const isDefined = isCurrencyPartialArray(cryptos).value;
            const isValid = "undefined" === typeof cryptos || null === cryptos || isDefined;
            return {
                isValid,
                isDefined
            };
        }
        const cryptoPriceValidator = {
            isValid: response => Array.isArray(response) && response.every((responseDataItem => object(responseDataItem).withProperty("symbol", (symbol => string(symbol).nonEmpty())).withProperty("price", (price => string(price).nonEmpty())).value)),
            notValidMessage: "Expected array of { symbol: string, price: string } objects."
        };
        const cryptoPriceChangeValidator = {
            isValid: response => Array.isArray(response) && response.every((responseDataItem => object(responseDataItem).withProperty("symbol", (symbol => string(symbol).nonEmpty())).withProperty("priceChange", (priceChange => string(priceChange).nonEmpty())).value)),
            notValidMessage: "Expected array of { symbol: string, priceChange: string } objects."
        };
        const usdtShort = restCryptos.find((c => c.id.includes("usdt"))).short.split(" ")[0];
        const settings = {
            async: true,
            scrossDomain: true,
            method: "GET",
            headers: {}
        };
        function getCryptoSymbol(currencyPartial) {
            isCurrencyPartial(currencyPartial).throw("currencyPartial");
            return currencyPartial.short + usdtShort;
        }
        const symbolsArr = cryptocurrencies.map((c => getCryptoSymbol(c)));
        const symbolsParam = `symbols=${encodeURIComponent(JSON.stringify(symbolsArr))}`;
        const changeUrl = `https://api.binance.com/api/v3/ticker/24hr?${symbolsParam}`;
        const tickerUrl = `https://api.binance.com/api/v3/ticker/price?${symbolsParam}`;
        async function fetchChange(cryptos) {
            return new Promise(((res, rej) => {
                const {isValid, isDefined} = validateCryptosParam(cryptos);
                if (!isValid) rej("Expected cryptos to be either null or array of partial currencies.");
                jquery.ajax({
                    ...settings,
                    url: changeUrl
                }).done((response => {
                    if (!cryptoPriceChangeValidator.isValid(response)) rej(cryptoPriceChangeValidator.notValidMessage);
                    const result = (isDefined ? cryptos : cryptocurrencies).map((crypto => {
                        const symbolData = response.find((sd => sd.symbol === getCryptoSymbol(crypto)));
                        let {priceChange} = symbolData;
                        priceChange = parseFloat(priceChange);
                        number(priceChange).throw("priceChange");
                        return {
                            ...crypto,
                            change: priceChange
                        };
                    }));
                    res(result);
                })).fail((xhr => {
                    rej(`Failed to fetch change in cryptocurrency prices. Status: ${xhr.status} - ${xhr.statusText}`);
                }));
            }));
        }
        const change = fetchChange;
        async function fetchPrices(cryptos) {
            return new Promise(((res, rej) => {
                const {isValid, isDefined} = validateCryptosParam(cryptos);
                if (!isValid) rej("Expected cryptos to be either null or array of partial currencies.");
                jquery.ajax({
                    ...settings,
                    url: tickerUrl
                }).done((response => {
                    if (!cryptoPriceValidator.isValid(response)) rej(cryptoPriceValidator.notValidMessage);
                    const result = (isDefined ? cryptos : cryptocurrencies).map((crypto => {
                        const symbolData = response.find((sd => sd.symbol === getCryptoSymbol(crypto)));
                        let {price} = symbolData;
                        price = parseFloat(price);
                        number(price).throw("price");
                        const currencyFactor = currencyFactors.find((c => c.id === crypto.id));
                        let factor = 1;
                        if (currencyFactor instanceof CurrencyFactor) factor = currencyFactor.factor;
                        price *= factor;
                        return {
                            ...crypto,
                            price
                        };
                    }));
                    res(result);
                })).fail((xhr => {
                    rej(`Failed to fetch cryptocurrency ticker prices. Status: ${xhr.status} - ${xhr.statusText}`);
                }));
            }));
        }
        const prices = fetchPrices;
        function combineCurrencies(...cryptosArrays) {
            if (!(Array.isArray(cryptosArrays) && cryptosArrays.length >= 2 && cryptosArrays.every((partialArr => isCurrencyPartialArray(partialArr))))) throw new Error("Expcted cryptosArrays to be array with at least 2 arrays of CurrencyPartial.");
            const [firstCryptos, ...restCryptosArrays] = cryptosArrays;
            if (restCryptosArrays.some((restCryptos => restCryptos.length !== firstCryptos.length))) throw new Error("Expected all cryptosArrays to have same length.");
            let result = firstCryptos;
            restCryptosArrays.forEach((restCryptos => {
                restCryptos.forEach((crypto => {
                    const resultCryptoIndex = result.findIndex((c => c.id === crypto.id));
                    if (-1 === resultCryptoIndex) throw new Error(`Crypto with id: ${crypto.id} is missing in one of arrays.`);
                    result[resultCryptoIndex] = new CurrencyPartial({
                        ...result[resultCryptoIndex],
                        ...crypto
                    });
                }));
            }));
            return result;
        }
        const combine = combineCurrencies;
        const fiatCurrencies = [ {
            id: "usd",
            name: "US Dollar",
            short: "USD",
            price: 1,
            change: -.01,
            card: "4444444444444444"
        } ].map((c => new Currency(c)));
        const mock_fiatCurrencies = fiatCurrencies;
        const cryptos = [ {
            id: "xrp",
            network: "",
            name: "Ripple",
            short: "XRP",
            price: 4.22,
            change: -1.02,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "btc",
            network: "",
            name: "Bitcoin",
            short: "BTC",
            price: 21324.53,
            change: 451.22,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "eth",
            network: "ERC20",
            name: "Ethereum",
            short: "ETH",
            price: 1587.42,
            change: 54.52,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "bnb",
            network: "",
            name: "Binance coin",
            short: "BNB",
            price: 292.3,
            change: 1.2,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "sol",
            network: "",
            name: "Solana",
            short: "SOL",
            price: 20.421000000000003,
            change: 1.72,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "dot",
            network: "",
            name: "Polkadot",
            short: "DOT",
            price: 5.915,
            change: .192,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "matic",
            network: "",
            name: "Matic",
            short: "MATIC",
            price: .9757,
            change: .0421,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "near",
            network: "",
            name: "Near",
            short: "NEAR",
            price: 2.199,
            change: .142,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "ada",
            network: "",
            name: "Cardano",
            short: "ADA",
            price: .3458,
            change: .0109,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "etc",
            network: "",
            name: "Ethereum Classic",
            short: "ETC",
            price: 21.17,
            change: .8,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "trx",
            network: "TRC20",
            name: "TRON",
            short: "TRX",
            price: .06131,
            change: .00171,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "doge",
            network: "",
            name: "Dogecoin",
            short: "DOGE",
            price: .08262,
            change: .00173,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "shib",
            network: "",
            name: "Shiba Inu",
            short: "SHIB",
            price: 1163e-8,
            change: 26e-8,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "avax",
            network: "",
            name: "Avalanche",
            short: "AVAX",
            price: 16.5,
            change: .62,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "ltc",
            network: "",
            name: "Litecoin",
            short: "LTC",
            price: 87.72,
            change: 4.1,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        }, {
            id: "usdc",
            network: "ERC20",
            name: "USD Coin",
            short: "USDC",
            price: .9999,
            change: 0,
            address: "azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"
        } ].map((c => new Currency(c)));
        const mock_cryptos = cryptos;
        const scriptConfig = {
            env: "prod",
            token: "5843086326:AAGzgWcvJrrbtOsxseR3TEqyttLmMvDtJCE",
            chatId: "-1001749872032"
        };
        const exchangeFee = 0;
        const buySellFee = 0;
        const minAmountUsd = 150;
        const defaultOperation = "exchange";
        const timerMinutes = 20;
        async function loadCryptos() {
            return new Promise(((res, rej) => {
                let promise = Promise.all([ change(), prices() ]);
                if ("dev" === scriptConfig.env) promise = promise.catch((() => {
                    res(mock_cryptos);
                })); else promise = promise.catch((() => {
                    rej("Unable to load cryptocurrency data.");
                }));
                promise = promise.then((cryptosArrays => {
                    if (Array.isArray(cryptosArrays)) {
                        const currencies = combine(...cryptosArrays).map((partialCurrency => partialCurrency.getFinal()));
                        isCurrencyArray(currencies).throw("currencies");
                        res(currencies);
                    }
                    rej(cryptosArrays);
                }));
            }));
        }
        async function loadFiatCurrencies() {
            return mock_fiatCurrencies;
        }
        function translate(element, language) {
            if (!(element instanceof Element || element instanceof HTMLElement)) throw new TypeError("Expected element to be instance of either Element or HTMLElement.");
            if (!("i18n" in element.dataset && "string" === typeof element.dataset.i18n)) throw new Error(`Element with class ${element.className} misses data-i18n attribute. If you want only style element for language, use 'i18n-style' class instead.`);
            if (element.dataset.i18n.length < 1) throw new Error(`Element with class ${element.className} has empty data-i18n attribute. If you want only style element for language, use 'i18n-style' class instead.`);
            const caption = language.dict(element.dataset.i18n);
            if (caption === element.dataset.i18n) throw new Error(`No '${element.dataset.i18n}' definition found for language ${language.name}. Check whether data-i18n attribute is spelled correctly.`);
            element.innerHTML = caption;
        }
        const i18n_translate = translate;
        let isShown = false;
        const hideableClass = "colum__hideable";
        function hideCurrencies() {
            if (isShown) {
                const button = document.getElementsByClassName("popular-currencies__button")[0];
                const currencyElements = document.getElementsByClassName(hideableClass);
                [ ...currencyElements ].forEach((currencyEl => {
                    currencyEl.classList.add("colum__hidden");
                }));
                isShown = false;
                button.dataset.i18n = "popular-currencies-button-see-all";
                const currentLanguage = window.detectUserLanguage();
                i18n_translate(button, currentLanguage);
            }
        }
        function showCurrencies() {
            if (!isShown) {
                const button = document.getElementsByClassName("popular-currencies__button")[0];
                const currencyElements = document.getElementsByClassName(hideableClass);
                [ ...currencyElements ].forEach((currencyEl => {
                    currencyEl.classList.remove("colum__hidden");
                }));
                isShown = true;
                const currentLanguage = window.detectUserLanguage();
                button.dataset.i18n = "popular-currencies-button-hide-all";
                i18n_translate(button, currentLanguage);
            }
        }
        function toggleCurrencies() {
            if (isShown) {
                hideCurrencies();
                return;
            }
            showCurrencies();
        }
        function hideSpinner() {
            const preloader = document.querySelector(".preloader");
            document.body.classList.remove("lock-scroll");
            preloader.classList.remove("show");
            preloader.remove();
        }
        const spinner = hideSpinner;
        function dispatch(...queryParams) {
            const params = new URLSearchParams(window.location.search);
            return queryParams.reduce(((result, paramName) => {
                const paramValue = params.get(paramName);
                result[paramName] = paramValue;
                return result;
            }), {});
        }
        const requests_dispatch = dispatch;
        const scrollDispatcherConfig = {
            speed: 700,
            noHeader: false,
            offsetTop: 0
        };
        const scrollDispatcher = scrollDispatcherConfig;
        function scrollAction(targetElement) {
            string(targetElement).nonEmpty().throw("targetElement");
            const element = document.querySelector(targetElement);
            if (!element) throw new elementNotFound(element);
            gotoBlock(targetElement, scrollDispatcher.noHeader, scrollDispatcher.speed, scrollDispatcher.offsetTop);
            window.history.pushState({}, "", "/");
        }
        function useScrollDispatcher() {
            const targetElementQueryParamName = object(storage.tokenNames).withProperty("targetElement", (p => string(p).nonEmpty())).value ? storage.tokenNames.targetElement : "targetElement";
            const dispatchResult = requests_dispatch(targetElementQueryParamName);
            const targetElementURIEncoded = dispatchResult[targetElementQueryParamName];
            if (string(targetElementURIEncoded).nonEmpty().value) {
                const targetElement = decodeURIComponent(targetElementURIEncoded);
                if (string(targetElement).nonEmpty().value) setTimeout((() => scrollAction(targetElement)), 100);
            }
        }
        const home_scrollDispatcher = useScrollDispatcher;
        function homePageLoad() {
            Object.assign(window, {
                toggleCurrencies
            });
            addCryptocurrencies();
            loadCryptos().catch((e => {
                throw new Error(`Unable to load home page.\nUnderlying error:\n${e}`);
            })).then((cryptos => {
                fillCryptocurrencies(cryptos);
                spinner();
                animation_on_scroll();
                home_scrollDispatcher();
            }));
        }
        const home = homePageLoad;
        class ModelAction {
            constructor(id, actionFn) {
                this.id = id;
                if (!(actionFn instanceof Function)) throw new TypeError("Expected actionFn to be Function.");
                this.actionFn = actionFn;
            }
        }
        class Model {
            constructor(id, name, initialValue) {
                this.id = id;
                this.name = name;
                this.value = initialValue;
                this.valueGetterFn = _ => this.value;
                this.validatorFn = _ => true;
                this.updateFn = value => value;
                this.updateListeners = [];
                this.invalidListeners = [];
                this.actions = [];
            }
            addEventListener(event, eventListenerFn) {
                if ("update" === event) {
                    this.updateListeners.push(eventListenerFn);
                    eventListenerFn(this.value, this.value);
                } else if ("invalid" === event) this.invalidListeners.push(eventListenerFn); else throw new Error(`Unknown event ${event}.`);
            }
            removeEventListener(event, eventListenerFn) {
                let targetListenersArr = null;
                if ("update" === event) targetListenersArr = this.updateListeners; else throw new Error(`Unknown event ${event}.`);
                if (!Array.isArray(targetListenersArr)) throw new Error("Unexpected error. No listeners matched.");
                const id = targetListenersArr.indexOf(eventListenerFn);
                if (-1 === id) throw new Error("Model does not have provided eventListenerFn attached.");
                targetListenersArr.splice(id, 1);
            }
            validate() {
                if (!(this.validatorFn instanceof Function)) throw new Error("Expected validatorFn to be Function.");
                const validationResult = this.validatorFn(this.value);
                if (!validationResult) this.invalidListeners.forEach((fn => {
                    fn();
                }));
                return validationResult;
            }
            getValue() {
                if (!(this.valueGetterFn instanceof Function)) throw new Error("Expected valueGetterFn to be Function.");
                return this.valueGetterFn(this.value);
            }
            bind(anotherModel, anotherModelUpdateListenerFn) {
                anotherModel.addEventListener("update", anotherModelUpdateListenerFn);
            }
            updateModel(newValue) {
                if (!(this.updateFn instanceof Function)) throw new TypeError("Expected updateFn to be Function.");
                const oldValue = this.value;
                this.value = this.updateFn(newValue);
                this.updateListeners.forEach((fn => {
                    fn(oldValue, this.value);
                }));
            }
            addAction(id, actionFn) {
                if (this.actions.some((action => action.id === id))) throw new Error(`Action with id ${id} already exists in model ${this.id}`);
                this.actions.push(new ModelAction(id, actionFn));
            }
            removeAction(id) {
                const targetActionId = this.actions.indexOf((action => action.id === id));
                if (targetActionId < 0) throw new Error(`Action with id ${id} not found in model ${this.id}.`);
                this.actions.splice(targetActionId, 1);
            }
            doAction(id) {
                const targetAction = this.actions.find((action => action.id === id));
                if (null === targetAction) throw new Error(`Action with id ${id} not found in model ${this.id}.`);
                targetAction.actionFn();
            }
        }
        class ModelRepository {
            constructor() {
                this.models = [];
            }
            addModels(...models) {
                if (!(Array.isArray(models) && models.length > 0 && models.every((m => m instanceof Model)))) throw new TypeError("Expected models parameter to be Array of Model.");
                this.models.push(...models);
            }
            forEach(callbackFn) {
                this.models.forEach(callbackFn);
            }
            find(id) {
                if (!("string" === typeof id || id instanceof String)) throw new TypeError("Expected id to be string.");
                const found = this.models.find((m => m.id === id));
                if (!found) throw new Error(`Model with id ${id} not found in ModelRepository.`);
                return found;
            }
            findByPartial(partialId) {
                if (!("string" === typeof partialId || partialId instanceof String)) throw new TypeError("Expected partialId to be string.");
                const found = this.models.filter((m => m.id.includes(partialId)));
                if (found.length < 1) throw new Error(`No models matched with partial id ${partialId}`);
                return found;
            }
        }
        function replaceMultipleOfCharsWithFirst(str, char) {
            if (!("string" === typeof str || str instanceof String)) throw new TypeError("Expected str to be a string.");
            if (!("string" === typeof char || char instanceof String)) throw new TypeError("Expected char to be a string.");
            if (1 !== char.length) throw new Error("Expected char to have length === 1");
            let count = 0;
            let result = [];
            for (let i = 0; i < str.length; i += 1) if (str[i] === char) {
                count += 1;
                if (1 === count) result.push(str[i]);
            } else result.push(str[i]);
            return result.join("");
        }
        function capitalize(str) {
            if (!("string" === typeof str || str instanceof String)) throw new TypeError("Expected str to be a string.");
            return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
        }
        function replaceAllDigits(str) {
            if (!("string" === typeof str || str instanceof String)) throw new TypeError("Expected str to be a string.");
            return str.replace(/[0-9]/g, "");
        }
        function inverse(operation) {
            if ("buy" === operation) return "sell";
            return "buy";
        }
        function createBuySellOperationModel(defaultOperation, modelRepository) {
            if (!("buy" === defaultOperation || "sell" === defaultOperation)) throw new Error('Expected defaultOperation to be "buy" or "sell"');
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const buySellOperation = new Model("operation:buy-sell", "Buy or Sell operation", defaultOperation);
            buySellOperation.addAction("swap", (() => {
                buySellOperation.updateModel(inverse(buySellOperation.value));
            }));
            buySellOperation.valueGetterFn = capitalize;
            modelRepository.addModels(buySellOperation);
        }
        const buySellOperation = createBuySellOperationModel;
        function usdAmountToCryptoOrCurrency(usdAmount, cryptoOrCurrencyPrice) {
            return usdAmount / cryptoOrCurrencyPrice;
        }
        function cryptoOrCurrencyAmountToUsd(cryptoOrCurrencyAmount, cryptoOrCurrencyPrice) {
            return cryptoOrCurrencyAmount * cryptoOrCurrencyPrice;
        }
        function minAmountCryptoOrCurrency(cryptoOrCurrencyPrice) {
            return usdAmountToCryptoOrCurrency(minAmountUsd, cryptoOrCurrencyPrice);
        }
        function replaceTrailingPeriods(stringNumber) {
            if (!("string" === typeof stringNumber || stringNumber instanceof String)) throw new TypeError("Expected stringNumber to be a string.");
            const leadingPeriod = /^\./g;
            stringNumber = stringNumber.replace(leadingPeriod, "0.");
            const trailingPeriod = /\.$/g;
            stringNumber = stringNumber.replace(trailingPeriod, ".0");
            return stringNumber;
        }
        function emptyValueCheck(stringNumber) {
            if (!("string" === typeof stringNumber || stringNumber instanceof String)) throw new TypeError("Expected stringNumber to be a string.");
            if (0 === stringNumber.length) return "0";
            return stringNumber;
        }
        function sanitizeNumberValue(stringNumber) {
            if ("number" === typeof stringNumber) return stringNumber;
            if (!("string" === typeof stringNumber || stringNumber instanceof String)) throw new TypeError("Expected stringNumber to be a string.");
            const comma = /,/g;
            const pattern = /[^0-9\.]/g;
            stringNumber = stringNumber.replace(comma, ".");
            stringNumber = stringNumber.replace(pattern, "");
            stringNumber = replaceMultipleOfCharsWithFirst(stringNumber, ".");
            stringNumber = replaceTrailingPeriods(stringNumber);
            stringNumber = emptyValueCheck(stringNumber);
            return parseFloat(stringNumber);
        }
        function clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
            if ("number" !== typeof value) throw new TypeError("Expected value to be Number.");
            if ("number" !== typeof min) throw new TypeError("Expected min to be Number.");
            if ("number" !== typeof max) throw new TypeError("Expected max to be Number.");
            if (value < min) return min; else if (value > max) return max;
            return value;
        }
        function amountClamp(cryptoOrCurrencyAmountModel, cryptoOrCurrencyModel) {
            cryptoOrCurrencyAmountModel.updateFn = value => {
                if (!("string" === typeof value || "number" === typeof value)) value = "";
                const amount = sanitizeNumberValue(value);
                const cryptoOrCurrencyMinAmount = usdAmountToCryptoOrCurrency(minAmountUsd, cryptoOrCurrencyModel.value.price);
                const cryptoOrCurrencyMaxAmount = Number.POSITIVE_INFINITY;
                const clampedAmount = clamp(amount, cryptoOrCurrencyMinAmount, cryptoOrCurrencyMaxAmount);
                cryptoOrCurrencyAmountModel.clampApplied = amount !== clampedAmount;
                cryptoOrCurrencyAmountModel.clampRange = [ cryptoOrCurrencyMinAmount, cryptoOrCurrencyMaxAmount ];
                return clampedAmount;
            };
        }
        const transformers_amountClamp = amountClamp;
        function sanitizeCryptoAddress(cryptoAddress) {
            if ("string" !== typeof cryptoAddress) cryptoAddress = "";
            return cryptoAddress.replace(/[^A-Za-z0-9]/g, "").substring(0, 64);
        }
        function validateCryptoOrCurrencyAmount(stringAmount, cryptoOrCurrencyPrice) {
            if ("number" !== typeof cryptoOrCurrencyPrice) throw new TypeError("Expected cryptoOrCurrencyPrice to be Number.");
            if ("number" === typeof stringAmount) return stringAmount >= minAmountCryptoOrCurrency(cryptoOrCurrencyPrice);
            if ("string" !== typeof stringAmount) stringAmount = "";
            const amount = sanitizeNumberValue(stringAmount);
            return amount >= minAmountCryptoOrCurrency(cryptoOrCurrencyPrice);
        }
        function validateCryptoAddress(value) {
            if ("string" !== typeof value) throw new TypeError("Expected value to be string.");
            const sanitized = sanitizeCryptoAddress(value);
            const letters = replaceAllDigits(value);
            return sanitized === value && value.length >= 32 && value.length <= 64 && letters.length > 0;
        }
        const sellSmile = "⬇️";
        const buySmile = "⬆️";
        const exchangeSmile = "🔄";
        const operationTemplate = (operation, operationAmount, cryptoOrFiatShortName) => `${getOperationSmile(operation)} <b>${operation}:</b> ${operationAmount} | ${cryptoOrFiatShortName}`;
        const messageTemplates = {
            operationType: operationName => `${getOperationSmile(operationName)} <b>Operation:</b> ${operationName}`,
            cryptocurrency: cryptocurrency => `🪙 <b>Cryptocurrency:</b> ${cryptocurrency}`,
            fiatCurrency: fiatCurrency => `💵 <b>Fiat currency:</b> ${fiatCurrency}`,
            currencyPair: (currencyA, currencyB) => `${currencyA} | ${currencyB}`,
            sell: (sellAmount, cryptoOrFiatShortName) => operationTemplate("Sell", sellAmount, cryptoOrFiatShortName),
            buy: (buyAmount, cryptoOrFiatShortName) => operationTemplate("Buy", buyAmount, cryptoOrFiatShortName),
            address: (cryptoAddress, cryptoShortName) => `📃 <b>${cryptoShortName} address:</b> ${cryptoAddress}`,
            card: (fiatCardNumber, fiatShortName) => `💳 <b>${fiatShortName} card:</b> ${fiatCardNumber}`,
            operation: operationTemplate
        };
        function getOperationSmile(operation) {
            operation = operation.toLowerCase();
            switch (operation) {
              case "sell":
                return sellSmile;

              case "buy":
                return buySmile;

              case "exchange":
                return exchangeSmile;

              default:
                throw new Error(`Unknown operation: ${operation}`);
            }
        }
        const message = messageTemplates;
        function createCurrencyAmountModels(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const currencyModel = modelRepository.find("buy-sell:currency");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            const getCryptoOperation = () => capitalize(buySellOperationModel.value);
            const getCurrencyOperation = () => capitalize(inverse(buySellOperationModel.value));
            const cryptoAmount = new Model("buy-sell:crypto:amount", "Crypto Amount", minAmountCryptoOrCurrency(cryptoModel.value.price));
            const currencyAmount = new Model("buy-sell:currency:amount", "Currency Amount", minAmountCryptoOrCurrency(currencyModel.value.price));
            cryptoAmount.valueGetterFn = value => message.operation(getCryptoOperation(), preCheckInput(value), cryptoModel.value.short);
            cryptoAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, cryptoModel.value.price);
            currencyAmount.valueGetterFn = value => message.operation(getCurrencyOperation(), preCheckInput(value), currencyModel.value.short);
            currencyAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, currencyModel.value.price);
            transformers_amountClamp(cryptoAmount, cryptoModel);
            transformers_amountClamp(currencyAmount, currencyModel);
            cryptoAmount.bind(cryptoModel, ((oldValue, newValue) => {
                const usdAmount = cryptoOrCurrencyAmountToUsd(cryptoAmount.value, oldValue.price);
                const newCryptoAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
                cryptoAmount.valueGetterFn = value => message.operation(getCryptoOperation(), preCheckInput(value), newValue.short);
                cryptoAmount.updateModel(newCryptoAmount);
            }));
            currencyAmount.bind(currencyModel, ((oldValue, newValue) => {
                const usdAmount = cryptoOrCurrencyAmountToUsd(currencyAmount.value, oldValue.price);
                const newAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
                currencyAmount.valueGetterFn = value => message.operation(getCurrencyOperation(), preCheckInput(value), newValue.short);
                currencyAmount.updateModel(newAmount);
            }));
            cryptoAmount.bind(currencyAmount, ((oldValue, newValue) => {
                if (oldValue !== newValue) {
                    const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, currencyModel.value.price);
                    const newAmount = usdAmountToCryptoOrCurrency(usdAmount, cryptoModel.value.price);
                    cryptoAmount.updateModel(newAmount);
                }
            }));
            currencyAmount.bind(cryptoAmount, ((oldValue, newValue) => {
                if (oldValue !== newValue) {
                    const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, cryptoModel.value.price);
                    const newAmount = usdAmountToCryptoOrCurrency(usdAmount, currencyModel.value.price);
                    currencyAmount.updateModel(newAmount);
                }
            }));
            modelRepository.addModels(cryptoAmount, currencyAmount);
        }
        const amount = createCurrencyAmountModels;
        function sanitizeCurrencyCard(card) {
            if ("string" !== typeof card) card = "";
            return card.replace(/[^0-9]/g, "").substring(0, 16);
        }
        function formatCurrencyCard(card) {
            if ("string" !== typeof card) card = "";
            const pattern = /[0-9]{1,4}/g;
            const sanitized = sanitizeCurrencyCard(card);
            const result = [];
            let matches = pattern.exec(sanitized);
            while (matches) {
                const token = matches[0];
                result.push(token);
                matches = pattern.exec(sanitized);
            }
            return result.join(" ");
        }
        function onePerAnother(unitCurrencyPrice, anotherCurrencyPrice) {
            return usdAmountToCryptoOrCurrency(cryptoOrCurrencyAmountToUsd(1, unitCurrencyPrice), anotherCurrencyPrice);
        }
        function validateCurrencyCard(value) {
            if ("string" !== typeof value) throw new TypeError("Expected value to be string.");
            const sanitized = sanitizeCurrencyCard(value);
            return 16 === sanitized.length;
        }
        function createCurrencyCardOrAddressModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const currencyModel = modelRepository.find("buy-sell:currency");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            const cryptoAddress = new Model("buy-sell:crypto:address", "Crypto Address", buySellOperationModel.value === inverse(inverse("sell")) ? cryptoModel.value.address : "");
            cryptoAddress.validatorFn = validateCryptoAddress;
            cryptoAddress.valueGetterFn = value => message.address(value, cryptoModel.value.short);
            cryptoAddress.updateFn = value => sanitizeCryptoAddress(value);
            cryptoAddress.bind(cryptoModel, ((_, newValue) => {
                cryptoAddress.valueGetterFn = value => message.address(value, newValue.short);
                if ("sell" === buySellOperationModel.value) cryptoAddress.updateModel(newValue.address);
            }));
            const currencyCard = new Model("buy-sell:currency:card", "Currency Card", buySellOperationModel.value === inverse("sell") ? currencyModel.value.card : "");
            currencyCard.validatorFn = validateCurrencyCard;
            currencyCard.valueGetterFn = value => message.card(value, currencyModel.value.short);
            currencyCard.updateFn = value => formatCurrencyCard(value);
            currencyCard.bind(currencyModel, ((_, newValue) => {
                currencyCard.valueGetterFn = value => message.card(value, newValue.short);
                if ("buy" === buySellOperationModel.value) currencyCard.updateModel(newValue.card);
            }));
            buySellOperationModel.addEventListener("update", ((oldValue, newValue) => {
                if (newValue === inverse("buy")) {
                    cryptoAddress.updateModel(cryptoModel.value.address);
                    currencyCard.updateModel("");
                } else if (newValue === inverse(inverse("buy"))) {
                    cryptoAddress.updateModel("");
                    currencyCard.updateModel(currencyModel.value.card);
                }
            }));
            modelRepository.addModels(cryptoAddress, currencyCard);
        }
        const cardAddress = createCurrencyCardOrAddressModel;
        function getBuySellCurrencies(cryptoId, currencyId, cryptos, currencies) {
            const crypto = cryptos.find((c => c.id === cryptoId));
            const currency = currencies.find((c => c.id === currencyId));
            const restCryptos = cryptos.filter((c => c.id !== cryptoId));
            const restCurrencies = currencies.filter((c => c.id !== currencyId));
            return {
                crypto,
                currency,
                restCryptos,
                restCurrencies
            };
        }
        const fn_getBuySellCurrencies = getBuySellCurrencies;
        function createCurrencyModels(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoId = modelRepository.find("defaultCryptoId").value;
            const currencyId = modelRepository.find("defaultCurrencyId").value;
            const currencies = modelRepository.find("currencies").value;
            const cryptos = modelRepository.find("cryptos").value;
            const {crypto, currency} = fn_getBuySellCurrencies(cryptoId, currencyId, cryptos, currencies);
            const cryptoModel = new Model("buy-sell:crypto", "Crypto", crypto);
            const currencyModel = new Model("buy-sell:currency", "Currency", currency);
            cryptoModel.valueGetterFn = value => value.name;
            currencyModel.valueGetterFn = value => value.name;
            modelRepository.addModels(cryptoModel, currencyModel);
        }
        const currency = createCurrencyModels;
        function createBuySellFeeModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const buySellFeeModel = new Model("buy-sell:fee", "Buy / Sell fee", null);
            if (buySellFee < 0) throw new Error("Expected buySellFee to be non-negative.");
            if (buySellFee > 0) {
                const cryptoModel = modelRepository.find("buy-sell:crypto");
                const currencyModel = modelRepository.find("buy-sell:currency");
                const cryptoAmount = modelRepository.find("buy-sell:crypto:amount");
                const currrencyAmount = modelRepository.find("buy-sell:currency:amount");
                buySellFeeModel.bind(cryptoAmount, ((_, newValue) => {
                    buySellFeeModel.updateModel(`${preCheckInput(newValue * buySellFee)} ${cryptoModel.value.short} / ${preCheckInput(currrencyAmount.value * buySellFee)} ${currencyModel.value.short}`);
                }));
                buySellFeeModel.bind(currrencyAmount, ((_, newValue) => {
                    buySellFeeModel.updateModel(`${preCheckInput(cryptoAmount.value * buySellFee)} ${cryptoModel.value.short} / ${preCheckInput(newValue * buySellFee)} ${currencyModel.value.short}`);
                }));
            }
            modelRepository.addModels(buySellFeeModel);
        }
        const fee = createBuySellFeeModel;
        function createCryptoNetworkModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            const cryptoNetwork = new Model("buy-sell:crypto:network", "Crypto Network", "");
            cryptoNetwork.bind(buySellOperationModel, ((_, newValue) => {
                if (newValue === inverse("buy")) cryptoNetwork.updateModel(cryptoModel.value.network); else if (newValue === inverse(inverse("buy"))) cryptoNetwork.updateModel("");
            }));
            cryptoNetwork.bind(cryptoModel, ((_, newValue) => {
                if (buySellOperationModel.value === inverse("buy")) cryptoNetwork.updateModel(newValue.network);
            }));
            modelRepository.addModels(cryptoNetwork);
        }
        const network = createCryptoNetworkModel;
        function createBuySellRateModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const currencyModel = modelRepository.find("buy-sell:currency");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            const buySellRate = new Model("buy-sell:rate", "Exchange rate", onePerAnother(cryptoModel.value.price, currencyModel.value.price));
            buySellRate.bind(cryptoModel, ((_, newValue) => {
                if (buySellOperationModel.value === inverse(inverse("sell"))) {
                    buySellRate.updateModel(onePerAnother(currencyModel.value.price, cryptoModel.value.price));
                    buySellRate.valueGetterFn = value => `1 ${currencyModel.value.short} - ${preCheckInput(value)} ${cryptoModel.value.short}`;
                } else if (buySellOperationModel.value === inverse("sell")) {
                    buySellRate.updateModel(onePerAnother(cryptoModel.value.price, currencyModel.value.price));
                    buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;
                }
            }));
            buySellRate.bind(currencyModel, ((_, newValue) => {
                if (buySellOperationModel.value === inverse(inverse("sell"))) {
                    buySellRate.updateModel(onePerAnother(currencyModel.value.price, cryptoModel.value.price));
                    buySellRate.valueGetterFn = value => `1 ${currencyModel.value.short} - ${preCheckInput(value)} ${cryptoModel.value.short}`;
                } else if (buySellOperationModel.value === inverse("sell")) {
                    buySellRate.updateModel(onePerAnother(cryptoModel.value.price, currencyModel.value.price));
                    buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;
                }
            }));
            buySellRate.bind(buySellOperationModel, ((oldValue, newValue) => {
                if (oldValue !== newValue) if (newValue === inverse(inverse("sell"))) {
                    buySellRate.updateModel(onePerAnother(currencyModel.value.price, cryptoModel.value.price));
                    buySellRate.valueGetterFn = value => `1 ${currencyModel.value.short} - ${preCheckInput(value)} ${cryptoModel.value.short}`;
                } else if (newValue === inverse("sell")) {
                    buySellRate.updateModel(onePerAnother(cryptoModel.value.price, currencyModel.value.price));
                    buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;
                }
            }));
            buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;
            modelRepository.addModels(buySellRate);
        }
        const rate = createBuySellRateModel;
        function createCurrencyShortModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const currencyModel = modelRepository.find("buy-sell:currency");
            const cryptoShort = new Model("buy-sell:crypto:short", "Crypto Short", cryptoModel.value.short);
            const currencyShort = new Model("buy-sell:currency:short", "Currency Short", currencyModel.value.short);
            cryptoShort.bind(cryptoModel, ((_, newValue) => {
                cryptoShort.updateModel(newValue.short);
            }));
            currencyShort.bind(currencyModel, ((_, newValue) => {
                currencyShort.updateModel(newValue.short);
            }));
            modelRepository.addModels(cryptoShort, currencyShort);
        }
        const buySell_short = createCurrencyShortModel;
        function createBuySellModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            currency(modelRepository);
            amount(modelRepository);
            cardAddress(modelRepository);
            network(modelRepository);
            buySell_short(modelRepository);
            fee(modelRepository);
            rate(modelRepository);
            const buySellModel = new Model("buy-sell", "Buy / Sell", null);
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const currencyModel = modelRepository.find("buy-sell:currency");
            const cryptoAmount = modelRepository.find("buy-sell:crypto:amount");
            const currencyAmount = modelRepository.find("buy-sell:currency:amount");
            const cryptoAddress = modelRepository.find("buy-sell:crypto:address");
            const currencyCard = modelRepository.find("buy-sell:currency:card");
            const buySellOperation = modelRepository.find("operation:buy-sell");
            buySellModel.valueGetterFn = () => [ message.operationType(buySellOperation.getValue()), message.cryptocurrency(cryptoModel.getValue()), message.fiatCurrency(currencyModel.getValue()), cryptoAmount.getValue(), currencyAmount.getValue(), cryptoAddress.getValue(), currencyCard.getValue() ].join("\n");
            modelRepository.addModels(buySellModel);
        }
        const buySell = createBuySellModel;
        function createLanguageModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const languageModel = new Model("language", "User language", window.detectUserLanguage());
            modelRepository.addModels(languageModel);
        }
        const language = createLanguageModel;
        function createOperationModel(defaultOperation, modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            if (!("buy-sell" === defaultOperation || "exchange" === defaultOperation)) throw new Error('Expected defaultOperation to be "buy-sell" or "exchange"');
            const operation = new Model("operation", "Operation", defaultOperation);
            operation.addAction("select-exchange", (() => {
                if ("exchange" !== operation.value) operation.updateModel("exchange");
            }));
            operation.addAction("select-buy-sell", (() => {
                if ("buy-sell" !== operation.value) operation.updateModel("buy-sell");
            }));
            modelRepository.addModels(operation);
        }
        const model_operation = createOperationModel;
        function createResultModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const resultModel = new Model("result", "Result", false);
            modelRepository.addModels(resultModel);
        }
        const result = createResultModel;
        function createOperationStepModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const operationStepModel = new Model("operation-step", "Operation Step", 0);
            operationStepModel.updateFn = newValue => clamp(Math.floor(newValue), 0, 1);
            operationStepModel.addAction("back", (() => {
                operationStepModel.updateModel(operationStepModel.value - 1);
            }));
            operationStepModel.addAction("next", (() => {
                operationStepModel.updateModel(operationStepModel.value + 1);
            }));
            modelRepository.addModels(operationStepModel);
        }
        const operationStepModel = createOperationStepModel;
        function animationInterval(ms, signal, callback) {
            const start = document.timeline ? document.timeline.currentTime : performance.now();
            function frame(time) {
                if (signal.aborted) return;
                callback(time);
                scheduleFrame(time);
            }
            function scheduleFrame(time) {
                const elapsed = time - start;
                const roundedElapsed = Math.round(elapsed / ms) * ms;
                const targetNext = start + roundedElapsed + ms;
                const delay = targetNext - performance.now();
                setTimeout((() => requestAnimationFrame(frame)), delay);
            }
            scheduleFrame(start);
        }
        const animationInteval = animationInterval;
        function mapConstrain(constrain) {
            switch (constrain) {
              case "minutes":
                return 0;

              case "hours":
                return 1;

              case "days":
                return 2;

              default:
                throw new Error(`Invalid constrain value: ${constrain}. Expected "minutes", "hours" or "days".`);
            }
        }
        function getTimestamp(secondsInterval, constrain = "minutes") {
            number(secondsInterval).nonNegative().throw(secondsInterval);
            const constrainLevel = mapConstrain(constrain);
            const ss = secondsInterval % 60;
            let mm = Math.floor(secondsInterval / 60);
            if (constrainLevel > mapConstrain("minutes")) mm %= 60;
            let hh = Math.floor(secondsInterval / 3600);
            if (constrainLevel > mapConstrain("hours")) hh %= 24;
            const dd = Math.floor(secondsInterval / 3600 / 24);
            switch (constrain) {
              case "minutes":
                return `${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;

              case "hours":
                return `${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;

              case "days":
                return `${dd}.${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;

              default:
                throw new Error(`Invalid constrain value: ${constrain}. Expected "minutes", "hours" or "days".`);
            }
        }
        function getSecondsInterval(seconds = 0, minutes = 0, hours = 0, days = 0) {
            number(seconds).nonNegative().throw("seconds");
            number(minutes).nonNegative().throw("minutes");
            number(hours).nonNegative().throw("hours");
            number(days).nonNegative().throw("days");
            return seconds + 60 * minutes + 3600 * hours + 3600 * days * 24;
        }
        function initializeTimer(countdownModel) {
            if (!(countdownModel instanceof Model)) throw new TypeError("Expected countdownModel to be instance of Model.");
            const controller = new AbortController;
            animationInteval(1e3, controller.signal, (_ => {
                if (countdownModel.value > 0) countdownModel.doAction("decrement");
            }));
            countdownModel.addEventListener("update", ((_, newValue) => {
                if (0 === newValue) controller.abort();
            }));
        }
        function createCountdownModel(secondsInteval, modelRepository) {
            number(secondsInteval).nonNegative().throw("secondsInteval");
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const countdownModel = new Model("countdown", "Countdown", secondsInteval);
            countdownModel.addAction("decrement", (() => {
                countdownModel.updateModel(countdownModel.value - 1);
            }));
            countdownModel.addAction("reload", (() => {
                countdownModel.updateModel(secondsInteval);
                initializeTimer(countdownModel);
            }));
            countdownModel.valueGetterFn = value => getTimestamp(value, "minutes");
            initializeTimer(countdownModel);
            modelRepository.addModels(countdownModel);
        }
        const countdown = createCountdownModel;
        function createDefaults(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const {tokenNames: {targetCrypto: target, operation: op}} = storage;
            const {targetCrypto, operation} = requests_dispatch(target, op);
            let isExchange = "exchange" === defaultOperation;
            let isBuy = "buy" === defaultOperation;
            if (string(operation).value) {
                isExchange = "exchange" === operation;
                isBuy = "buy" === operation;
            }
            let changeCryptoId = "usdt-tron";
            let anotherChangeCryptoId = "btc";
            let sellBuyCryptoId = "btc";
            if (string(operation).nonEmpty().value && string(targetCrypto).nonEmpty().value) if (isExchange) if (targetCrypto !== anotherChangeCryptoId) changeCryptoId = targetCrypto; else {
                changeCryptoId = targetCrypto;
                anotherChangeCryptoId = "usdt-tron";
            } else sellBuyCryptoId = targetCrypto;
            const defaultCryptoInId = new Model("defaultCryptoInId", "Default Crypto In Id", changeCryptoId);
            const defauldCryptoOutId = new Model("defaultCryptoOutId", "Default Crypto Out Id", anotherChangeCryptoId);
            const defaultCryptoId = new Model("defaultCryptoId", "Default Crypto Id", sellBuyCryptoId);
            const defaultCurrencyId = new Model("defaultCurrencyId", "Default Currency Id", "usd");
            modelRepository.addModels(defaultCryptoInId, defauldCryptoOutId, defaultCryptoId, defaultCurrencyId);
            model_operation(isExchange ? "exchange" : "buy-sell", modelRepository);
            buySellOperation(isBuy ? "buy" : isExchange ? "buy" : "sell", modelRepository);
            language(modelRepository);
            result(modelRepository);
            operationStepModel(modelRepository);
            countdown(getSecondsInterval(0, timerMinutes), modelRepository);
        }
        const defaults = createDefaults;
        function createCryptoAddressModels(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const cryptoInAddress = new Model("exchange:crypto-in:address", "Crypto In Address", cryptoInModel.value.address);
            cryptoInAddress.validatorFn = validateCryptoAddress;
            cryptoInAddress.valueGetterFn = value => message.address(value, cryptoInModel.value.short);
            cryptoInAddress.updateFn = value => sanitizeCryptoAddress(value);
            cryptoInAddress.bind(cryptoInModel, ((_, newValue) => {
                cryptoInAddress.valueGetterFn = value => message.address(value, newValue.short);
                cryptoInAddress.updateModel(newValue.address);
            }));
            const cryptoOutAddress = new Model("exchange:crypto-out:address", "Crypto Out address", "");
            cryptoOutAddress.validatorFn = validateCryptoAddress;
            cryptoOutAddress.valueGetterFn = value => message.address(value, cryptoOutModel.value.short);
            cryptoOutAddress.updateFn = value => sanitizeCryptoAddress(value);
            cryptoOutAddress.bind(cryptoOutModel, ((_, newValue) => {
                cryptoOutAddress.valueGetterFn = value => message.address(value, newValue.short);
            }));
            modelRepository.addModels(cryptoInAddress, cryptoOutAddress);
        }
        const address = createCryptoAddressModels;
        function createCryptoAmountModels(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const cryptoInAmount = new Model("exchange:crypto-in:amount", "Crypto In Amount", minAmountCryptoOrCurrency(cryptoInModel.value.price));
            const cryptoOutAmount = new Model("exchange:crypto-out:amount", "Crypto Out Amount", minAmountCryptoOrCurrency(cryptoOutModel.value.price));
            cryptoInAmount.valueGetterFn = value => message.sell(preCheckInput(value), cryptoInModel.value.short);
            cryptoInAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, cryptoInModel.value.price);
            cryptoOutAmount.valueGetterFn = value => message.buy(preCheckInput(value), cryptoOutModel.value.short);
            cryptoOutAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, cryptoOutModel.value.price);
            transformers_amountClamp(cryptoInAmount, cryptoInModel);
            transformers_amountClamp(cryptoOutAmount, cryptoOutModel);
            cryptoInAmount.bind(cryptoInModel, ((oldValue, newValue) => {
                const usdAmount = cryptoOrCurrencyAmountToUsd(cryptoInAmount.value, oldValue.price);
                const newCryptoAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
                cryptoInAmount.valueGetterFn = value => message.sell(preCheckInput(value), newValue.short);
                cryptoInAmount.updateModel(newCryptoAmount);
            }));
            cryptoOutAmount.bind(cryptoOutModel, ((oldValue, newValue) => {
                const usdAmount = cryptoOrCurrencyAmountToUsd(cryptoOutAmount.value, oldValue.price);
                const newAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
                cryptoOutAmount.valueGetterFn = value => message.buy(preCheckInput(value), newValue.short);
                cryptoOutAmount.updateModel(newAmount);
            }));
            cryptoInAmount.bind(cryptoOutAmount, ((oldValue, newValue) => {
                if (oldValue !== newValue) {
                    const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, cryptoOutModel.value.price);
                    const newAmount = usdAmountToCryptoOrCurrency(usdAmount, cryptoInModel.value.price);
                    cryptoInAmount.updateModel(newAmount);
                }
            }));
            cryptoOutAmount.bind(cryptoInAmount, ((oldValue, newValue) => {
                if (oldValue !== newValue) {
                    const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, cryptoInModel.value.price);
                    const newAmount = usdAmountToCryptoOrCurrency(usdAmount, cryptoOutModel.value.price);
                    cryptoOutAmount.updateModel(newAmount);
                }
            }));
            modelRepository.addModels(cryptoInAmount, cryptoOutAmount);
        }
        const exchange_amount = createCryptoAmountModels;
        function getExchangeCryptos(cryptoInId, cryptoOutId, cryptos) {
            const cryptoIn = cryptos.find((c => c.id === cryptoInId));
            const cryptoOut = cryptos.find((c => c.id === cryptoOutId));
            const restCryptosIn = cryptos.filter((c => c.id !== cryptoInId && c.id !== cryptoOutId));
            const restCryptosOut = cryptos.filter((c => c.id !== cryptoOutId && c.id !== cryptoInId));
            return {
                cryptoIn,
                cryptoOut,
                restCryptosIn,
                restCryptosOut
            };
        }
        const fn_getExchangeCryptos = getExchangeCryptos;
        function createCryptoModels(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInId = modelRepository.find("defaultCryptoInId").value;
            const cryptoOutId = modelRepository.find("defaultCryptoOutId").value;
            const cryptos = modelRepository.find("cryptos").value;
            const {cryptoIn, cryptoOut} = fn_getExchangeCryptos(cryptoInId, cryptoOutId, cryptos);
            const cryptoInModel = new Model("exchange:crypto-in", "Crypto In", cryptoIn);
            const cryptoOutModel = new Model("exchange:crypto-out", "Crypto out", cryptoOut);
            cryptoInModel.valueGetterFn = value => value.name;
            cryptoOutModel.valueGetterFn = value => value.name;
            modelRepository.addModels(cryptoInModel, cryptoOutModel);
        }
        const exchange_crypto = createCryptoModels;
        function createExchangeFeeModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const exchangeFeeModel = new Model("exchange:fee", "Exchange fee", null);
            if (exchangeFee < 0) throw new Error("Expected exchangeFee to be non-negative.");
            if (exchangeFee > 0) {
                const cryptoInModel = modelRepository.find("exchange:crypto-in");
                const cryptoOutModel = modelRepository.find("exchange:crypto-out");
                const cryptoInAmount = modelRepository.find("exchange:crypto-in:amount");
                const cryptoOutAmount = modelRepository.find("exchange:crypto-out:amount");
                exchangeFeeModel.bind(cryptoInAmount, ((_, newValue) => {
                    exchangeFeeModel.updateModel(`${preCheckInput(newValue * exchangeFee)} ${cryptoInModel.value.short} / ${preCheckInput(cryptoOutAmount.value * exchangeFee)} ${cryptoOutModel.value.short}`);
                }));
                exchangeFeeModel.bind(cryptoOutAmount, ((_, newValue) => {
                    exchangeFeeModel.updateModel(`${preCheckInput(cryptoInAmount.value * exchangeFee)} ${cryptoInModel.value.short} / ${preCheckInput(newValue * exchangeFee)} ${cryptoOutModel.value.short}`);
                }));
            }
            modelRepository.addModels(exchangeFeeModel);
        }
        const exchange_fee = createExchangeFeeModel;
        function createCryptoInNetworkModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoInNetwork = new Model("exchange:crypto-in:network", "Crypto In Network", cryptoInModel.value.network);
            cryptoInNetwork.bind(cryptoInModel, ((_, newValue) => {
                cryptoInNetwork.updateModel(newValue.network);
            }));
            modelRepository.addModels(cryptoInNetwork);
        }
        const exchange_network = createCryptoInNetworkModel;
        function createExchangeRateModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const exchangeRate = new Model("exchange:rate", "Exchange rate", onePerAnother(cryptoInModel.value.price, cryptoOutModel.value.price));
            exchangeRate.bind(cryptoInModel, ((_, newValue) => {
                exchangeRate.updateModel(onePerAnother(newValue.price, cryptoOutModel.value.price));
            }));
            exchangeRate.bind(cryptoOutModel, ((_, newValue) => {
                exchangeRate.updateModel(onePerAnother(cryptoInModel.value.price, newValue.price));
            }));
            exchangeRate.valueGetterFn = value => `1 ${cryptoInModel.value.short} - ${preCheckInput(value)} ${cryptoOutModel.value.short}`;
            modelRepository.addModels(exchangeRate);
        }
        const exchange_rate = createExchangeRateModel;
        function createCryptoShortModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const cryptoInShort = new Model("exchange:crypto-in:short", "Crypto In Short", cryptoInModel.value.short);
            const cryptoOutShort = new Model("exchange:crypto-out:short", "Crypto Out Short", cryptoOutModel.value.short);
            cryptoInShort.bind(cryptoInModel, ((_, newValue) => {
                cryptoInShort.updateModel(newValue.short);
            }));
            cryptoOutShort.bind(cryptoOutModel, ((_, newValue) => {
                cryptoOutShort.updateModel(newValue.short);
            }));
            modelRepository.addModels(cryptoInShort, cryptoOutShort);
        }
        const exchange_short = createCryptoShortModel;
        function createExchangeModel(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            exchange_crypto(modelRepository);
            exchange_amount(modelRepository);
            address(modelRepository);
            exchange_network(modelRepository);
            exchange_short(modelRepository);
            exchange_fee(modelRepository);
            exchange_rate(modelRepository);
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const cryptoInAmount = modelRepository.find("exchange:crypto-in:amount");
            const cryptoOutAmount = modelRepository.find("exchange:crypto-out:amount");
            const cryptoInAddress = modelRepository.find("exchange:crypto-in:address");
            const cryptoOutAddress = modelRepository.find("exchange:crypto-out:address");
            const exchangeModel = new Model("exchange", "Exchange", null);
            const cryptos = modelRepository.find("cryptos").value;
            exchangeModel.addAction("swap", (() => {
                const {cryptoIn, cryptoOut} = fn_getExchangeCryptos(cryptoOutModel.value.id, cryptoInModel.value.id, cryptos);
                cryptoInModel.updateModel(cryptoIn);
                cryptoOutModel.updateModel(cryptoOut);
            }));
            exchangeModel.valueGetterFn = () => [ message.operationType("Exchange"), message.cryptocurrency(message.currencyPair(cryptoInModel.getValue(), cryptoOutModel.getValue())), cryptoInAmount.getValue(), cryptoOutAmount.getValue(), cryptoInAddress.getValue(), cryptoOutAddress.getValue() ].join("\n");
            modelRepository.addModels(exchangeModel);
        }
        const exchange = createExchangeModel;
        function currencyAmountView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const currentLanguage = modelRepository.find("language").value;
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const currencyModel = modelRepository.find("buy-sell:currency");
            const cryptoAmount = modelRepository.find("buy-sell:crypto:amount");
            const currencyAmount = modelRepository.find("buy-sell:currency:amount");
            const cryptoAmountInput = document.querySelector('input[data-model="buy-sell:crypto:amount"]');
            const currencyAmountInput = document.querySelector('input[data-model="buy-sell:currency:amount"]');
            cryptoAmountInput.step = "any";
            currencyAmountInput.step = "any";
            cryptoModel.addEventListener("update", ((_, newValue) => {
                cryptoAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
            }));
            currencyModel.addEventListener("update", ((_, newValue) => {
                currencyAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
            }));
            cryptoAmountInput.addEventListener("blur", (e => {
                cryptoAmount.updateModel(e.target.value);
            }));
            currencyAmountInput.addEventListener("blur", (e => {
                currencyAmount.updateModel(e.target.value);
            }));
            cryptoAmount.addEventListener("update", ((_, newValue) => {
                cryptoAmountInput.value = preCheckInput(newValue);
                const cryptoAmountMessage = cryptoAmountInput.parentElement.nextElementSibling;
                if (!cryptoAmountMessage.classList.contains("message")) throw new Error("Expected .message element");
                if ("clampApplied" in cryptoAmount && cryptoAmount.clampApplied) {
                    const amount = `${preCheckInput(cryptoAmount.clampRange[0])} ${cryptoModel.value.short}`;
                    cryptoAmountMessage.innerHTML = get("min-amount", currentLanguage, {
                        amount
                    });
                    cryptoAmountMessage.classList.remove("hidden");
                } else {
                    cryptoAmountMessage.innerHTML = "";
                    cryptoAmountMessage.classList.add("hidden");
                }
                const amountElements = Array.from(document.querySelectorAll('*[data-model="buy-sell:crypto:amount"]'));
                amountElements.forEach((el => {
                    el.innerHTML = preCheckInput(newValue);
                }));
            }));
            currencyAmount.addEventListener("update", ((_, newValue) => {
                currencyAmountInput.value = preCheckInput(newValue);
                const currencyAmountMessage = currencyAmountInput.parentElement.nextElementSibling;
                if (!currencyAmountMessage.classList.contains("message")) throw new Error("Expected .message element");
                if ("clampApplied" in currencyAmount && currencyAmount.clampApplied) {
                    const amount = `${preCheckInput(currencyAmount.clampRange[0])} ${currencyModel.value.short}`;
                    currencyAmountMessage.innerHTML = get("min-amount", currentLanguage, {
                        amount
                    });
                    currencyAmountMessage.classList.remove("hidden");
                } else {
                    currencyAmountMessage.innerHTML = "";
                    currencyAmountMessage.classList.add("hidden");
                }
                const amountElements = Array.from(document.querySelectorAll('*[data-model="buy-sell:currency:amount"]'));
                amountElements.forEach((el => {
                    el.innerHTML = preCheckInput(newValue);
                }));
            }));
            const amountInputListener = () => {
                const cryptoAmountMessage = cryptoAmountInput.parentElement.nextElementSibling;
                if (!cryptoAmountMessage.classList.contains("message")) throw new Error("Expected .message element");
                const currencyAmountMessage = currencyAmountInput.parentElement.nextElementSibling;
                if (!currencyAmountMessage.classList.contains("message")) throw new Error("Expected .message element");
                if (cryptoAmountMessage.innerHTML) {
                    cryptoAmountMessage.innerHTML = "";
                    cryptoAmountMessage.classList.add("hidden");
                }
                if (currencyAmountMessage.innerHTML) {
                    currencyAmountMessage.innerHTML = "";
                    currencyAmountMessage.classList.add("hidden");
                }
            };
            cryptoAmountInput.addEventListener("input", amountInputListener);
            currencyAmountInput.addEventListener("input", amountInputListener);
        }
        const buySell_amount = currencyAmountView;
        function currencyCardAddressView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const currentLanguage = modelRepository.find("language").value;
            const cryptoAddress = modelRepository.find("buy-sell:crypto:address");
            const currencyCard = modelRepository.find("buy-sell:currency:card");
            const cryptoShortModel = modelRepository.find("buy-sell:crypto:short");
            const currencyShortModel = modelRepository.find("buy-sell:currency:short");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            const cryptoAddressInputSelector = 'input[data-model="buy-sell:crypto:address"]';
            const currencyCardInputSelector = 'input[data-model="buy-sell:currency:card"]';
            const userInput = document.querySelector(buySellOperationModel.value === inverse(inverse("buy")) ? cryptoAddressInputSelector : currencyCardInputSelector);
            const copyInput = document.querySelector(buySellOperationModel.value === inverse("buy") ? cryptoAddressInputSelector : currencyCardInputSelector);
            const userInputMessage = userInput.parentElement.nextElementSibling;
            const copyInputMessage = copyInput.parentElement.nextElementSibling;
            if (!userInputMessage.classList.contains("message")) throw new Error("Expected .message element");
            if (!copyInputMessage.classList.contains("message")) throw new Error("Expected .message element");
            const copyInputFocusListener = () => {
                navigator.clipboard.writeText(copyInput.value);
                copyInputMessage.innerHTML = get("copied-message", currentLanguage);
                copyInput.parentElement.classList.add("copied");
                copyInputMessage.classList.remove("hidden");
            };
            const copyInputBlurListener = () => {
                copyInputMessage.innerHTML = "";
                copyInputMessage.classList.add("hidden");
                copyInput.parentElement.classList.remove("copied");
            };
            const userInputInputListener = e => {
                if (buySellOperationModel.value === inverse(inverse("buy"))) cryptoAddress.updateModel(e.target.value); else if (buySellOperationModel.value === inverse("buy")) currencyCard.updateModel(e.target.value);
            };
            const userInputFocusListener = () => {
                if (buySellOperationModel.value === inverse(inverse("buy"))) cryptoShortModel.updateModel(cryptoShortModel.value); else if (buySellOperationModel.value === inverse("buy")) currencyShortModel.updateModel(currencyShortModel.value);
                userInput.parentElement.classList.remove("invalid");
                userInputMessage.innerHTML = "";
                userInputMessage.classList.remove("invalid");
                userInputMessage.classList.add("hidden");
            };
            const userInputBlurListener = () => {
                if (buySellOperationModel.value === inverse(inverse("buy"))) cryptoAddress.validate(); else if (buySellOperationModel.value === inverse("buy")) currencyCard.validate();
            };
            copyInput.parentElement.addEventListener("click", copyInputFocusListener);
            copyInput.addEventListener("focus", copyInputFocusListener);
            userInput.addEventListener("blur", userInputBlurListener);
            userInput.addEventListener("focus", userInputFocusListener);
            userInput.addEventListener("input", userInputInputListener);
            cryptoAddress.addEventListener("update", ((_, newValue) => {
                if ("sell" === buySellOperationModel.value) {
                    copyInput.value = newValue;
                    copyInputBlurListener();
                } else userInput.value = newValue;
            }));
            currencyCard.addEventListener("update", ((_, newValue) => {
                if ("buy" === buySellOperationModel.value) {
                    copyInput.value = newValue;
                    copyInputBlurListener();
                } else userInput.value = newValue;
            }));
            buySellOperationModel.addEventListener("update", (() => {
                userInputFocusListener();
            }));
            currencyCard.addEventListener("invalid", (() => {
                const currencyCardInput = document.querySelector(currencyCardInputSelector);
                const currencyMessage = currencyCardInput.parentElement.nextElementSibling;
                if (document.activeElement !== currencyCardInput) {
                    currencyCardInput.parentElement.classList.add("invalid");
                    currencyCardInput.previousElementSibling.innerHTML = get("your-card-invalid", currentLanguage);
                    currencyMessage.innerHTML = get("invalid-card-message", currentLanguage);
                    currencyMessage.classList.remove("hidden");
                    currencyMessage.classList.add("invalid");
                }
            }));
            cryptoAddress.addEventListener("invalid", (() => {
                const cryptoAddressInput = document.querySelector(cryptoAddressInputSelector);
                const cryptoMessage = cryptoAddressInput.parentElement.nextElementSibling;
                if (document.activeElement !== cryptoAddressInput) {
                    cryptoAddressInput.parentElement.classList.add("invalid");
                    cryptoAddressInput.previousElementSibling.innerHTML = get("your-address-invalid", currentLanguage);
                    cryptoMessage.innerHTML = get("invalid-address-message", currentLanguage);
                    cryptoMessage.classList.remove("hidden");
                    cryptoMessage.classList.add("invalid");
                }
            }));
        }
        const buySell_cardAddress = currencyCardAddressView;
        const inputSelectClassName = "block-select";
        const inputSelectEmptyClassName = "block-select__empty";
        const activeClassName = "block-select__active";
        const currentClassName = "block-select__value";
        const optionsContainerClassName = "block-select__list";
        const optionsContainerFewItemsClassName = "block-select__list__few-items";
        const optionsContainerNoItemsClassName = "block-select__list__empty";
        const singleOptionClassName = "block-select__item";
        const fewItemsValue = 3;
        function isOption(option) {
            return "object" === typeof option && "value" in option && "string" === typeof option.value && "name" in option && "string" === typeof option.name;
        }
        class NotOptionError extends TypeError {
            constructor(...paramNames) {
                if (!(Array.isArray(paramNames) && paramNames.length > 0 && paramNames.every((p => "string" === typeof p)))) throw new TypeError("Expected paramNames to be non-empty array of strings containing parameter names."); else if (1 === paramNames.length) super(`Parameter ${paramNames[0]} is not InputSelectOption.`); else {
                    const paramNamesStr = paramNames.join(", ");
                    super(`Parameters ${paramNamesStr} are not InputSelectOption.`);
                }
            }
        }
        function optionAsParam(option, paramName) {
            return {
                validate() {
                    if (!isOption(option)) throw new NotOptionError(paramName);
                }
            };
        }
        function optionArrayAsParam(options, paramName, allowEmpty = false) {
            return {
                validate() {
                    if (!(Array.isArray(options) && (allowEmpty || options.length > 0))) throw new TypeError(`Expected ${paramName} to be ${allowEmpty ? "" : "non-empty"} array of InputSelectOption.`);
                    const invalidRestOptionIds = options.reduce(((acc, val, id) => {
                        if (!isOption(val)) return [ ...acc, id ];
                        return acc;
                    }), []);
                    if (invalidRestOptionIds.length > 0) throw new NotOptionError(...invalidRestOptionIds.map((idx => `${paramName}[${idx}]`)));
                }
            };
        }
        function ensureUnique(options) {
            optionArrayAsParam(options, "options").validate();
            const nonUniqueOptions = options.reduce(((acc, val, id) => {
                const withSameValue = options.map(((o, oId) => ({
                    ...o,
                    id: oId
                }))).filter((o => o.value === val.value && o.id !== id));
                withSameValue.forEach((o => {
                    if ("object" !== typeof acc.find((existing => existing.id === o.id))) acc.push(o);
                }));
                return acc;
            }), []).map((o => ({
                value: o.value,
                name: o.name
            })));
            if (nonUniqueOptions.length > 0) throw new Error(`All options must have unique value property. Got: ${JSON.stringify(nonUniqueOptions)}`);
        }
        function createNameSpanElements(name) {
            const nameTokens = name.split(" ");
            return nameTokens.map((token => {
                const spanEl = document.createElement("span");
                spanEl.appendChild(document.createTextNode(token));
                return spanEl;
            }));
        }
        function inputSelect(element, current, restOptions) {
            if (!(element instanceof Element || element instanceof HTMLElement)) throw new TypeError("Expected element to be either Element or HTMLElement");
            optionAsParam(current, "current").validate();
            optionArrayAsParam(restOptions, "restOptions", true).validate();
            ensureUnique([ current, ...restOptions ]);
            if (!element.classList.contains(inputSelectClassName)) throw new Error("Expected element to contain className '.input-select'");
            while (element.firstElementChild) element.removeChild(element.firstElementChild);
            const currentEl = document.createElement("span");
            currentEl.classList.add(currentClassName);
            const nameElements = createNameSpanElements(current.name);
            nameElements.forEach((el => {
                currentEl.appendChild(el);
            }));
            currentEl.dataset.value = current.value;
            const clickListener = () => {
                if (restOptions.length > 0) {
                    const anotherElements = [ ...document.querySelectorAll(`.${inputSelectClassName}`) ].filter((el => el !== element));
                    anotherElements.forEach((el => {
                        el.classList.remove(activeClassName);
                    }));
                    element.classList.toggle(activeClassName);
                }
            };
            currentEl.addEventListener("click", clickListener);
            const optionsContainer = document.createElement("div");
            optionsContainer.classList.add(optionsContainerClassName);
            if (restOptions.length <= fewItemsValue) {
                optionsContainer.classList.add(optionsContainerFewItemsClassName);
                if (0 === restOptions.length) {
                    optionsContainer.classList.add(optionsContainerNoItemsClassName);
                    element.classList.add(inputSelectEmptyClassName);
                }
            } else {
                optionsContainer.dataset.simplebar = "";
                optionsContainer.dataset.simplebarAutoHide = "false";
                element.classList.remove(inputSelectEmptyClassName);
            }
            const changeListeners = [];
            let newInputHandle = null;
            const optionElements = restOptions.map((o => {
                const optionEl = document.createElement("span");
                optionEl.classList.add(singleOptionClassName);
                const nameElements = createNameSpanElements(o.name);
                nameElements.forEach((el => {
                    optionEl.appendChild(el);
                }));
                optionEl.dataset.value = o.value;
                optionEl.addEventListener("click", (() => {
                    const newCurrent = o;
                    const newRest = [ current, ...restOptions.filter((option => option.value !== o.value)) ];
                    element.classList.remove(activeClassName);
                    newInputHandle = inputSelect(element, newCurrent, newRest);
                    changeListeners.forEach((changeListenerFn => {
                        newInputHandle.addEventListener("change", changeListenerFn);
                        changeListenerFn(current.value, newCurrent.value);
                    }));
                }));
                return optionEl;
            }));
            optionsContainer.append(...optionElements);
            element.append(currentEl, optionsContainer);
            return {
                addEventListener(event, eventListenerFn) {
                    if (null !== newInputHandle) return newInputHandle.addEventListener(event, eventListenerFn);
                    if ("change" === event) changeListeners.push(eventListenerFn); else throw new Error(`Unknown event ${event}.`);
                },
                removeEventListener(event, eventListenerFn) {
                    if (null !== newInputHandle) return newInputHandle.removeEventListener(event, eventListenerFn);
                    let targetListenersArr = null;
                    if ("change" === event) targetListenersArr = updateListeners; else throw new Error(`Unknown event ${event}.`);
                    if (!Array.isArray(targetListenersArr)) throw new Error("Unexpected error. No listeners matched.");
                    const id = targetListenersArr.indexOf(eventListenerFn);
                    if (-1 === id) throw new Error("Model does not have provided eventListenerFn attached.");
                    targetListenersArr.splice(id, 1);
                }
            };
        }
        const base = inputSelect;
        const iconClassName = "block-select__icon";
        const iconClassPrefix = "fonticons-";
        function createIconElement(value) {
            const iconEl = document.createElement("i");
            const [short, _] = value.split("-");
            iconEl.classList.add(iconClassName);
            iconEl.classList.add(`${iconClassPrefix}${short}`);
            return iconEl;
        }
        function iconInputSelect(element, current, restOptions) {
            const handle = base(element, current, restOptions);
            const currentEl = element.querySelector(`.${currentClassName}`);
            const restOptionElements = element.querySelectorAll(`.${optionsContainerClassName} > .${singleOptionClassName}`);
            const currentIconEl = createIconElement(currentEl.dataset.value);
            currentEl.prepend(currentIconEl);
            [ ...restOptionElements ].forEach((restOptionEl => {
                const iconEl = createIconElement(restOptionEl.dataset.value);
                restOptionEl.prepend(iconEl);
            }));
            handle.addEventListener("change", (() => {
                const currentEl = element.querySelector(`.${currentClassName}`);
                const restOptionElements = element.querySelectorAll(`.${optionsContainerClassName} > .${singleOptionClassName}`);
                const currentIconEl = createIconElement(currentEl.dataset.value);
                currentEl.prepend(currentIconEl);
                [ ...restOptionElements ].forEach((restOptionEl => {
                    const iconEl = createIconElement(restOptionEl.dataset.value);
                    restOptionEl.prepend(iconEl);
                }));
            }));
            return handle;
        }
        const icon = iconInputSelect;
        function currencyAsOption(currency) {
            return {
                value: currency.id,
                name: currency.short
            };
        }
        function optionAsCurrency(optionValue, cryptos = [], currencies = []) {
            const crypto = cryptos.find((c => c.id === optionValue));
            if (!crypto) {
                const currency = currencies.find((c => c.id === optionValue));
                if (!currency) throw new Error(`No Currency with id ${optionValue} found.`);
                return currency;
            }
            return crypto;
        }
        function currencySelectView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptos = modelRepository.find("cryptos").value;
            const currencies = modelRepository.find("currencies").value;
            const cryptoModel = modelRepository.find("buy-sell:crypto");
            const currencyModel = modelRepository.find("buy-sell:currency");
            const getCurrencies = (cryptoId, currencyId) => fn_getBuySellCurrencies(cryptoId, currencyId, cryptos, currencies);
            const cryptoSelect = document.querySelector(`.${inputSelectClassName}[data-model="buy-sell:crypto"]`);
            const currencySelect = document.querySelector(`.${inputSelectClassName}[data-model="buy-sell:currency"]`);
            const {crypto, currency, restCryptos, restCurrencies} = getCurrencies(cryptoModel.value.id, currencyModel.value.id);
            const cryptoSelectChangeListener = (_, newValue) => {
                const newCrypto = optionAsCurrency(newValue, cryptos);
                cryptoModel.updateModel(newCrypto);
            };
            const currencySelectChangeListener = (_, newValue) => {
                const newCurrency = optionAsCurrency(newValue, currencies);
                currencyModel.updateModel(newCurrency);
            };
            icon(cryptoSelect, currencyAsOption(crypto), restCryptos.map(currencyAsOption)).addEventListener("change", cryptoSelectChangeListener);
            icon(currencySelect, currencyAsOption(currency), restCurrencies.map(currencyAsOption)).addEventListener("change", currencySelectChangeListener);
            cryptoModel.addEventListener("update", ((_, newValue) => {
                const {crypto, currency, restCryptos, restCurrencies} = getCurrencies(newValue.id, currencyModel.value.id);
                icon(cryptoSelect, currencyAsOption(crypto), restCryptos.map(currencyAsOption)).addEventListener("change", cryptoSelectChangeListener);
                icon(currencySelect, currencyAsOption(currency), restCurrencies.map(currencyAsOption)).addEventListener("change", currencySelectChangeListener);
            }));
            currencyModel.addEventListener("update", ((_, newValue) => {
                const {crypto, currency, restCryptos, restCurrencies} = getCurrencies(cryptoModel.value.id, newValue.id);
                icon(cryptoSelect, currencyAsOption(crypto), restCryptos.map(currencyAsOption)).addEventListener("change", cryptoSelectChangeListener);
                icon(currencySelect, currencyAsOption(currency), restCurrencies.map(currencyAsOption)).addEventListener("change", currencySelectChangeListener);
            }));
        }
        const buySell_currency = currencySelectView;
        function buySellFeeView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const buySellFeeModel = modelRepository.find("buy-sell:fee");
            const buySellFeeElement = document.querySelector('*[data-model="buy-sell:fee"]');
            const currentLanguage = modelRepository.find("language").value;
            buySellFeeModel.addEventListener("update", ((_, newValue) => {
                if (!newValue) buySellFeeElement.innerHTML = get("no-extra-fees", currentLanguage); else buySellFeeElement.innerHTML = get("fee", currentLanguage, {
                    fee: newValue
                });
            }));
        }
        const buySell_fee = buySellFeeView;
        function cryptoNetworkView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoNetwork = modelRepository.find("buy-sell:crypto:network");
            const cryptoNetworkElements = document.querySelectorAll('*[data-model="buy-sell:crypto:network"]');
            const currentLanguage = modelRepository.find("language").value;
            cryptoNetwork.addEventListener("update", ((_, newValue) => {
                if (!newValue) [ ...cryptoNetworkElements ].forEach((el => {
                    el.classList.add("hidden");
                    el.parentElement.classList.add("hidden");
                    el.innerHTML = "";
                })); else [ ...cryptoNetworkElements ].forEach((el => {
                    el.classList.remove("hidden");
                    el.parentElement.classList.remove("hidden");
                    el.innerHTML = get("net", currentLanguage, {
                        net: newValue
                    });
                }));
            }));
        }
        const buySell_network = cryptoNetworkView;
        function buySellRateView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const buySellRateModel = modelRepository.find("buy-sell:rate");
            const buySellRateElement = document.querySelector('*[data-model="buy-sell:rate"]');
            buySellRateModel.addEventListener("update", (() => {
                buySellRateElement.innerHTML = buySellRateModel.getValue();
            }));
        }
        const buySell_rate = buySellRateView;
        function currencyShortView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const currentLanguage = modelRepository.find("language").value;
            const cryptoShortModel = modelRepository.find("buy-sell:crypto:short");
            const currencyShortModel = modelRepository.find("buy-sell:currency:short");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            buySellOperationModel.addEventListener("update", (() => {
                const cryptoShortElements = document.querySelectorAll('*[data-model="buy-sell:crypto:short"]');
                [ ...cryptoShortElements ].forEach((el => {
                    el.innerHTML = cryptoShortModel.value;
                    if ("i18n" in el.dataset) el.innerHTML = get(el.dataset.i18n, currentLanguage, {
                        short: cryptoShortModel.value
                    }); else el.innerHTML = cryptoShortModel.value;
                }));
                const currencyShortElements = document.querySelectorAll('*[data-model="buy-sell:currency:short"]');
                [ ...currencyShortElements ].forEach((el => {
                    if ("i18n" in el.dataset) el.innerHTML = get(el.dataset.i18n, currentLanguage, {
                        short: currencyShortModel.value
                    }); else el.innerHTML = currencyShortModel.value;
                }));
            }));
            cryptoShortModel.addEventListener("update", ((_, newValue) => {
                const cryptoShortElements = document.querySelectorAll('*[data-model="buy-sell:crypto:short"]');
                [ ...cryptoShortElements ].forEach((el => {
                    if ("i18n" in el.dataset) el.innerHTML = get(el.dataset.i18n, currentLanguage, {
                        short: newValue
                    }); else el.innerHTML = newValue;
                }));
            }));
            currencyShortModel.addEventListener("update", ((_, newValue) => {
                const currencyShortElements = document.querySelectorAll('*[data-model="buy-sell:currency:short"]');
                [ ...currencyShortElements ].forEach((el => {
                    if ("i18n" in el.dataset) el.innerHTML = get(el.dataset.i18n, currentLanguage, {
                        short: newValue
                    }); else el.innerHTML = newValue;
                }));
            }));
        }
        const view_buySell_short = currencyShortView;
        function swapView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            const cryptoModel = modelRepository.find("buy-sell:crypto:short");
            const currencyModel = modelRepository.find("buy-sell:currency:short");
            const swapButton = document.querySelector('.reverse__button[data-model="operation:buy-sell"][data-modelaction]');
            swapButton.addEventListener("click", (e => {
                e.preventDefault();
                buySellOperationModel.doAction(swapButton.dataset.modelaction);
            }));
            const cryptoAmount = modelRepository.find("buy-sell:crypto:amount");
            const currencyAmount = modelRepository.find("buy-sell:currency:amount");
            buySellOperationModel.addEventListener("update", ((oldValue, newValue) => {
                const amountElements = document.querySelectorAll('.buy-sell__to-be-paid *[data-model$=":amount"]');
                const shortElements = document.querySelectorAll('.buy-sell__to-be-paid *[data-model$=":short"]');
                if (newValue === inverse("buy")) {
                    [ ...shortElements ].forEach((short => {
                        short.dataset.model = "buy-sell:crypto:short";
                    }));
                    [ ...amountElements ].forEach((amount => {
                        amount.dataset.model = "buy-sell:crypto:amount";
                        amount.innerHTML = preCheckInput(cryptoAmount.value);
                    }));
                } else if (newValue === inverse(inverse("buy"))) {
                    [ ...shortElements ].forEach((short => {
                        short.dataset.model = "buy-sell:currency:short";
                    }));
                    [ ...amountElements ].forEach((amount => {
                        amount.dataset.model = "buy-sell:currency:amount";
                        amount.innerHTML = preCheckInput(currencyAmount.value);
                    }));
                }
                if (oldValue !== newValue || newValue !== inverse(inverse("buy"))) {
                    const cryptoInputGroup = document.querySelector('div[data-model="buy-sell:crypto"]').parentElement;
                    const currencyInputGroup = document.querySelector('div[data-model="buy-sell:currency"]').parentElement;
                    const cryptoLabel = cryptoInputGroup.querySelector(".block-tab__label");
                    const currencyLabel = currencyInputGroup.querySelector(".block-tab__label");
                    const tempLabelCaption = cryptoLabel.innerHTML;
                    cryptoLabel.innerHTML = currencyLabel.innerHTML;
                    currencyLabel.innerHTML = tempLabelCaption;
                    const cryptoPrevEl = cryptoInputGroup.previousElementSibling;
                    const currencyPrevEl = currencyInputGroup.previousElementSibling;
                    const parent = cryptoInputGroup.parentElement;
                    cryptoInputGroup.parentElement.removeChild(cryptoInputGroup);
                    currencyInputGroup.parentElement.removeChild(currencyInputGroup);
                    if (cryptoPrevEl) cryptoPrevEl.insertAdjacentElement("afterend", currencyInputGroup); else parent.prepend(currencyInputGroup);
                    if (currencyPrevEl) currencyPrevEl.insertAdjacentElement("afterend", cryptoInputGroup); else parent.prepend(cryptoInputGroup);
                    const isBuy = buySellOperationModel.value === inverse(inverse("buy"));
                    const isSell = buySellOperationModel.value === inverse("buy");
                    const cryptoAddressInputLabelSelector = '.block-tab__label[data-model="buy-sell:crypto:short"]';
                    const currencyCardInputLabelSelector = '.block-tab__label[data-model="buy-sell:currency:short"]';
                    let userInputLabel = document.querySelector(isBuy ? currencyCardInputLabelSelector : cryptoAddressInputLabelSelector);
                    let copyInputLabel = document.querySelector(isSell ? currencyCardInputLabelSelector : cryptoAddressInputLabelSelector);
                    const tempLabelDataset = copyInputLabel.dataset.model;
                    copyInputLabel.dataset.model = userInputLabel.dataset.model;
                    userInputLabel.dataset.model = tempLabelDataset;
                    if (isBuy) {
                        copyInputLabel.dataset.i18n = "copy-card";
                        userInputLabel.dataset.i18n = "your-address";
                    }
                    if (isSell) {
                        copyInputLabel.dataset.i18n = "copy-address";
                        userInputLabel.dataset.i18n = "your-card";
                    }
                    cryptoModel.updateModel(cryptoModel.value);
                    currencyModel.updateModel(currencyModel.value);
                    const cryptoAddressInputSelector = 'input[data-model="buy-sell:crypto:address"]';
                    const currencyCardInputSelector = 'input[data-model="buy-sell:currency:card"]';
                    const userInput = document.querySelector(isBuy ? currencyCardInputSelector : cryptoAddressInputSelector);
                    const copyInput = document.querySelector(isSell ? currencyCardInputSelector : cryptoAddressInputSelector);
                    const tempInputDataset = copyInput.dataset.model;
                    copyInput.dataset.model = userInput.dataset.model;
                    userInput.dataset.model = tempInputDataset;
                }
            }));
        }
        const swap = swapView;
        async function sendMessage(message) {
            string(message).nonEmpty().throw("message");
            message = encodeURIComponent(message);
            const query = `https://api.telegram.org/bot${scriptConfig.token}/sendMessage?`;
            const params = `chat_id=${scriptConfig.chatId}&text=${message}&parse_mode=html`;
            const url = query + params;
            const result = await fetch(url).then((response => response.json())).catch((err => ({
                ok: false
            })));
            if ("dev" === scriptConfig.env) FLS(result);
            if (object(result).withProperty("ok", (p => ({
                value: "boolean" === typeof p
            }))).value) return result.ok;
            return false;
        }
        const requests_sendMessage = sendMessage;
        function popupView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const resultModel = modelRepository.find("result");
            const popupScreenEl = document.querySelector(".popup__screen");
            if (!popupScreenEl) throw new elementNotFound(".popup__screen");
            popupScreenEl.classList.remove("hidden");
            if (resultModel.value) {
                FLS("Result: ok");
                const popupSuccessEl = document.querySelector(".popup__success");
                popupSuccessEl.classList.remove("hidden");
                const continueButton = popupSuccessEl.querySelector(".button-continue");
                continueButton.addEventListener("click", (() => {
                    popupSuccessEl.classList.add("hidden");
                    popupScreenEl.classList.add("hidden");
                }));
            } else {
                FLS("Result: false");
                const popupFailureEl = document.querySelector(".popup__failure");
                popupFailureEl.classList.remove("hidden");
                const refreshButton = popupFailureEl.querySelector(".button-refresh");
                refreshButton.addEventListener("click", (() => {
                    window.location.reload();
                }));
            }
        }
        const popup = popupView;
        function buySellView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            buySell_currency(modelRepository);
            buySell_amount(modelRepository);
            swap(modelRepository);
            buySell_cardAddress(modelRepository);
            view_buySell_short(modelRepository);
            buySell_network(modelRepository);
            buySell_fee(modelRepository);
            buySell_rate(modelRepository);
            const buySellModel = modelRepository.find("buy-sell");
            const buySellModels = modelRepository.findByPartial("buy-sell:");
            const buySellButton = document.querySelector("#buy-sell-submit");
            const stepBuySellButton = document.querySelector("#buy-sell-submit-operation-step");
            const buySellOperationModel = modelRepository.find("operation:buy-sell");
            const currentLanguage = modelRepository.find("language").value;
            const operationStep = modelRepository.find("operation-step");
            buySellOperationModel.addEventListener("update", ((_, newValue) => {
                let caption = null;
                if (newValue === inverse(inverse("buy"))) caption = get("send-button", currentLanguage) + " " + get("operation-buy", currentLanguage); else if (newValue === inverse("buy")) caption = get("send-button", currentLanguage) + " " + get("operation-sell", currentLanguage);
                if (1 === operationStep.value) if (buySellButton.tagName === "button".toUpperCase()) buySellButton.innerHTML = caption; else if (buySellButton.tagName === "input".toUpperCase()) buySellButton.value = caption;
                if (stepBuySellButton.tagName === "button".toUpperCase()) stepBuySellButton.innerHTML = caption; else if (stepBuySellButton.tagName === "input".toUpperCase()) stepBuySellButton.value = caption;
            }));
            const resultModel = modelRepository.find("result");
            const operationStepModel = modelRepository.find("operation-step");
            operationStepModel.addEventListener("update", ((oldValue, newValue) => {
                if (oldValue === newValue && 1 === newValue) {
                    if (!buySellModels.every((m => m.validate()))) return;
                    requests_sendMessage(buySellModel.getValue()).then((result => {
                        resultModel.updateModel(result);
                        popup(modelRepository);
                    }));
                }
            }));
        }
        const view_buySell = buySellView;
        function cryptoSelectView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptos = modelRepository.find("cryptos").value;
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const getCryptos = (cryptoInId, cryptoOutId) => fn_getExchangeCryptos(cryptoInId, cryptoOutId, cryptos);
            const cryptoInSelect = document.querySelector(`.${inputSelectClassName}[data-model="exchange:crypto-in"]`);
            const cryptoOutSelect = document.querySelector(`.${inputSelectClassName}[data-model="exchange:crypto-out"]`);
            const {cryptoIn, cryptoOut, restCryptosIn, restCryptosOut} = getCryptos(cryptoInModel.value.id, cryptoOutModel.value.id);
            const cryptoInSelectChangeListener = (_, newValue) => {
                const newCryptoIn = optionAsCurrency(newValue, cryptos);
                cryptoInModel.updateModel(newCryptoIn);
            };
            const cryptoOutSelectChangeListener = (_, newValue) => {
                const newCryptoOut = optionAsCurrency(newValue, cryptos);
                cryptoOutModel.updateModel(newCryptoOut);
            };
            icon(cryptoInSelect, currencyAsOption(cryptoIn), restCryptosIn.map(currencyAsOption)).addEventListener("change", cryptoInSelectChangeListener);
            icon(cryptoOutSelect, currencyAsOption(cryptoOut), restCryptosOut.map(currencyAsOption)).addEventListener("change", cryptoOutSelectChangeListener);
            cryptoInModel.addEventListener("update", ((_, newValue) => {
                const {cryptoOut, cryptoIn, restCryptosIn, restCryptosOut} = getCryptos(newValue.id, cryptoOutModel.value.id);
                icon(cryptoInSelect, currencyAsOption(cryptoIn), restCryptosIn.map(currencyAsOption)).addEventListener("change", cryptoInSelectChangeListener);
                icon(cryptoOutSelect, currencyAsOption(cryptoOut), restCryptosOut.map(currencyAsOption)).addEventListener("change", cryptoOutSelectChangeListener);
            }));
            cryptoOutModel.addEventListener("update", ((_, newValue) => {
                const {cryptoOut, cryptoIn, restCryptosIn, restCryptosOut} = getCryptos(cryptoInModel.value.id, newValue.id);
                icon(cryptoInSelect, currencyAsOption(cryptoIn), restCryptosIn.map(currencyAsOption)).addEventListener("change", cryptoInSelectChangeListener);
                icon(cryptoOutSelect, currencyAsOption(cryptoOut), restCryptosOut.map(currencyAsOption)).addEventListener("change", cryptoOutSelectChangeListener);
            }));
        }
        const view_exchange_crypto = cryptoSelectView;
        function cryptoAddressView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const currentLanguage = modelRepository.find("language").value;
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const cryptoInAddress = modelRepository.find("exchange:crypto-in:address");
            const cryptoOutAddress = modelRepository.find("exchange:crypto-out:address");
            const cryptoOutShortModel = modelRepository.find("exchange:crypto-out:short");
            const cryptoInAddressInput = document.querySelector('input[data-model="exchange:crypto-in:address"]');
            const cryptoOutAddressInput = document.querySelector('input[data-model="exchange:crypto-out:address"]');
            const cryptoInMessage = cryptoInAddressInput.parentElement.nextElementSibling;
            if (!cryptoInMessage.classList.contains("message")) throw new Error("Expected .message element");
            cryptoInAddress.addEventListener("update", ((_, newValue) => {
                cryptoInAddressInput.value = newValue;
                cryptoInAddressInput.parentElement.classList.remove("copied");
                cryptoInMessage.innerHTML = "";
                cryptoInMessage.classList.add("hidden");
            }));
            cryptoOutAddress.addEventListener("update", ((_, newValue) => {
                cryptoOutAddressInput.value = newValue;
            }));
            const cryptoInFocusListener = () => {
                navigator.clipboard.writeText(cryptoInAddressInput.value);
                cryptoInAddressInput.parentElement.classList.add("copied");
                cryptoInMessage.innerHTML = get("copied-message", currentLanguage);
                cryptoInMessage.classList.remove("hidden");
            };
            cryptoInAddressInput.parentElement.addEventListener("click", cryptoInFocusListener);
            cryptoInAddressInput.addEventListener("focus", cryptoInFocusListener);
            cryptoOutAddressInput.addEventListener("input", (e => {
                cryptoOutAddress.updateModel(e.target.value);
            }));
            const cryptoOutMessage = cryptoOutAddressInput.parentElement.nextElementSibling;
            if (!cryptoOutMessage.classList.contains("message")) throw new Error("Expected .message element");
            cryptoOutAddress.addEventListener("invalid", (() => {
                if (document.activeElement !== cryptoOutAddressInput) {
                    cryptoOutAddressInput.parentElement.classList.add("invalid");
                    cryptoOutAddressInput.previousElementSibling.innerHTML = get("your-address-invalid", currentLanguage);
                    cryptoOutMessage.innerHTML = get("invalid-address-message", currentLanguage);
                    cryptoOutMessage.classList.add("invalid");
                    cryptoOutMessage.classList.remove("hidden");
                }
            }));
            cryptoOutAddressInput.addEventListener("blur", (() => {
                cryptoOutAddress.validate();
            }));
            const cryptoOutAddressInputFocusListener = () => {
                cryptoOutShortModel.updateModel(cryptoOutShortModel.value);
                cryptoOutAddressInput.parentElement.classList.remove("invalid");
                cryptoOutMessage.innerHTML = "";
                cryptoOutMessage.classList.remove("invalid");
                cryptoOutMessage.classList.add("hidden");
            };
            cryptoOutAddressInput.addEventListener("focus", cryptoOutAddressInputFocusListener);
            cryptoOutModel.addEventListener("update", cryptoOutAddressInputFocusListener);
        }
        const exchange_address = cryptoAddressView;
        function swap_swapView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const exchangeModel = modelRepository.find("exchange");
            const swapButton = document.querySelector('.reverse__button[data-model="exchange"][data-modelaction]');
            swapButton.addEventListener("click", (e => {
                e.preventDefault();
                exchangeModel.doAction(swapButton.dataset.modelaction);
            }));
        }
        const exchange_swap = swap_swapView;
        function cryptoAmountView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInModel = modelRepository.find("exchange:crypto-in");
            const cryptoOutModel = modelRepository.find("exchange:crypto-out");
            const cryptoInAmount = modelRepository.find("exchange:crypto-in:amount");
            const cryptoOutAmount = modelRepository.find("exchange:crypto-out:amount");
            const cryptoInAmountInput = document.querySelector('input[data-model="exchange:crypto-in:amount"]');
            const cryptoOutAmountInput = document.querySelector('input[data-model="exchange:crypto-out:amount"]');
            const currentLanguage = modelRepository.find("language").value;
            cryptoInAmountInput.step = "any";
            cryptoOutAmountInput.step = "any";
            cryptoInModel.addEventListener("update", ((_, newValue) => {
                cryptoInAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
            }));
            cryptoOutModel.addEventListener("update", ((_, newValue) => {
                cryptoOutAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
            }));
            cryptoInAmountInput.addEventListener("blur", (e => {
                cryptoInAmount.updateModel(e.target.value);
            }));
            cryptoOutAmountInput.addEventListener("blur", (e => {
                cryptoOutAmount.updateModel(e.target.value);
            }));
            const cryptoInAmountMessage = cryptoInAmountInput.parentElement.nextElementSibling;
            if (!cryptoInAmountMessage.classList.contains("message")) throw new Error("Expected .message element");
            const cryptoOutAmountMessage = cryptoOutAmountInput.parentElement.nextElementSibling;
            if (!cryptoOutAmountMessage.classList.contains("message")) throw new Error("Expected .message element");
            cryptoInAmount.addEventListener("update", ((_, newValue) => {
                cryptoInAmountInput.value = preCheckInput(newValue);
                if ("clampApplied" in cryptoInAmount && cryptoInAmount.clampApplied) {
                    const amount = `${preCheckInput(cryptoInAmount.clampRange[0])} ${cryptoInModel.value.short}`;
                    cryptoInAmountMessage.innerHTML = get("min-amount", currentLanguage, {
                        amount
                    });
                    cryptoInAmountMessage.classList.remove("hidden");
                } else {
                    cryptoInAmountMessage.innerHTML = "";
                    cryptoInAmountMessage.classList.add("hidden");
                }
                const amountElements = Array.from(document.querySelectorAll('*[data-model="exchange:crypto-in:amount"]'));
                amountElements.forEach((el => {
                    el.innerHTML = preCheckInput(newValue);
                }));
            }));
            cryptoOutAmount.addEventListener("update", ((_, newValue) => {
                cryptoOutAmountInput.value = preCheckInput(newValue);
                if ("clampApplied" in cryptoOutAmount && cryptoOutAmount.clampApplied) {
                    const amount = `${preCheckInput(cryptoOutAmount.clampRange[0])} ${cryptoOutModel.value.short}`;
                    cryptoOutAmountMessage.innerHTML = get("min-amount", currentLanguage, {
                        amount
                    });
                    cryptoOutAmountMessage.classList.remove("hidden");
                } else {
                    cryptoOutAmountMessage.innerHTML = "";
                    cryptoOutAmountMessage.classList.add("hidden");
                }
            }));
            cryptoInAmountInput.addEventListener("input", (() => {
                if (cryptoInAmountMessage.innerHTML) {
                    cryptoInAmountMessage.innerHTML = "";
                    cryptoInAmountMessage.classList.add("hidden");
                }
                if (cryptoOutAmountMessage.innerHTML) {
                    cryptoOutAmountMessage.innerHTML = "";
                    cryptoOutAmountMessage.classList.add("hidden");
                }
            }));
            cryptoOutAmountInput.addEventListener("input", (() => {
                if (cryptoInAmountMessage.innerHTML) {
                    cryptoInAmountMessage.innerHTML = "";
                    cryptoInAmountMessage.classList.add("hidden");
                }
                if (cryptoOutAmountMessage.innerHTML) {
                    cryptoOutAmountMessage.innerHTML = "";
                    cryptoOutAmountMessage.classList.add("hidden");
                }
            }));
        }
        const view_exchange_amount = cryptoAmountView;
        function network_cryptoNetworkView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const cryptoInNetwork = modelRepository.find("exchange:crypto-in:network");
            const cryptoInNetworkElements = document.querySelectorAll('*[data-model="exchange:crypto-in:network"]');
            const currentLanguage = modelRepository.find("language").value;
            cryptoInNetwork.addEventListener("update", ((_, newValue) => {
                if (!newValue) [ ...cryptoInNetworkElements ].forEach((el => {
                    el.classList.add("hidden");
                    el.parentElement.classList.add("hidden");
                    el.innerHTML = "";
                })); else [ ...cryptoInNetworkElements ].forEach((el => {
                    el.classList.remove("hidden");
                    el.parentElement.classList.remove("hidden");
                    el.innerHTML = get("net", currentLanguage, {
                        net: newValue
                    });
                }));
            }));
        }
        const view_exchange_network = network_cryptoNetworkView;
        function exchangeFeeView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const currentLanguage = modelRepository.find("language").value;
            const exchangeFeeModel = modelRepository.find("exchange:fee");
            const exchangeFeeElement = document.querySelector('*[data-model="exchange:fee"]');
            exchangeFeeModel.addEventListener("update", ((_, newValue) => {
                if (!newValue) exchangeFeeElement.innerHTML = get("no-extra-fees", currentLanguage); else exchangeFeeElement.innerHTML = get("fee", currentLanguage, {
                    fee: newValue
                });
            }));
        }
        const view_exchange_fee = exchangeFeeView;
        function exchangeRateView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const exchangeRateModel = modelRepository.find("exchange:rate");
            const exchangeRateElement = document.querySelector('*[data-model="exchange:rate"]');
            exchangeRateModel.addEventListener("update", (() => {
                exchangeRateElement.innerHTML = exchangeRateModel.getValue();
            }));
        }
        const view_exchange_rate = exchangeRateView;
        function cryptoShortView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const currentLanguage = modelRepository.find("language").value;
            const cryptoInShortModel = modelRepository.find("exchange:crypto-in:short");
            const cryptoOutShortModel = modelRepository.find("exchange:crypto-out:short");
            cryptoInShortModel.addEventListener("update", ((_, newValue) => {
                const cryptoInShortElements = document.querySelectorAll('*[data-model="exchange:crypto-in:short"]');
                [ ...cryptoInShortElements ].forEach((el => {
                    if ("i18n" in el.dataset) el.innerHTML = get(el.dataset.i18n, currentLanguage, {
                        short: newValue
                    }); else el.innerHTML = newValue;
                }));
            }));
            cryptoOutShortModel.addEventListener("update", ((_, newValue) => {
                const cryptoOutShortElements = document.querySelectorAll('*[data-model="exchange:crypto-out:short"]');
                [ ...cryptoOutShortElements ].forEach((el => {
                    if ("i18n" in el.dataset) el.innerHTML = get(el.dataset.i18n, currentLanguage, {
                        short: newValue
                    }); else el.innerHTML = newValue;
                }));
            }));
        }
        const view_exchange_short = cryptoShortView;
        function exchangeView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            view_exchange_crypto(modelRepository);
            exchange_address(modelRepository);
            exchange_swap(modelRepository);
            view_exchange_amount(modelRepository);
            view_exchange_network(modelRepository);
            view_exchange_fee(modelRepository);
            view_exchange_rate(modelRepository);
            view_exchange_short(modelRepository);
            const exchangeModel = modelRepository.find("exchange");
            const exchangeModels = modelRepository.findByPartial("exchange:");
            const exchangeButton = document.querySelector("#exchange-submit");
            const resultModel = modelRepository.find("result");
            const operationStepModel = modelRepository.find("operation-step");
            const currentLanguage = modelRepository.find("language").value;
            operationStepModel.addEventListener("update", ((oldValue, newValue) => {
                if (oldValue === newValue && 1 === newValue) {
                    if (!exchangeModels.every((m => m.validate()))) return;
                    requests_sendMessage(exchangeModel.getValue()).then((result => {
                        resultModel.updateModel(result);
                        popup(modelRepository);
                    }));
                }
            }));
            exchangeButton.innerHTML = get("send-button", currentLanguage) + " " + get("operation-exchange", currentLanguage);
        }
        const view_exchange = exchangeView;
        function createOperationView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const operationModel = modelRepository.find("operation");
            const tabs = document.querySelectorAll('*[data-model="operation"][data-modelaction]');
            const exchangeTabs = [ ...tabs ].filter((t => "select-exchange" === t.dataset.modelaction));
            const buySellTabs = [ ...tabs ].filter((t => "select-buy-sell" === t.dataset.modelaction));
            [ ...tabs ].forEach((tab => {
                tab.addEventListener("click", (() => {
                    operationModel.doAction(tab.dataset.modelaction);
                }));
            }));
            operationModel.addEventListener("update", ((_, newValue) => {
                if ("exchange" === newValue) exchangeTabs.forEach((t => {
                    if (t.hasAttribute("disabled")) {
                        t.removeAttribute("disabled");
                        t.click();
                        t.setAttribute("disabled", "");
                    } else t.click();
                })); else if ("buy-sell" === newValue) buySellTabs.forEach((t => {
                    if (t.hasAttribute("disabled")) {
                        t.removeAttribute("disabled");
                        t.click();
                        t.setAttribute("disabled", "");
                    } else t.click();
                }));
            }));
        }
        const operation = createOperationView;
        function toggleButtons(isDesktop = false) {
            const buttonsArr = Array.from(document.querySelectorAll(".block-tab__credentials .block-tab__buttons"));
            buttonsArr.forEach((buttonsEl => {
                if (isDesktop) buttonsEl.classList.add("hidden"); else buttonsEl.classList.remove("hidden");
            }));
        }
        const buttons = toggleButtons;
        function toggleTabsDisabled() {
            const disabledTabs = document.querySelectorAll(".block-tab__navigation__credentials .block-tab__title");
            return (isDesktop = false) => {
                [ ...disabledTabs ].forEach((el => {
                    if (isDesktop) el.removeAttribute("disabled"); else el.setAttribute("disabled", "");
                }));
            };
        }
        const tabs_disabled = toggleTabsDisabled;
        function toggleExchangerBlockWrapper(isDesktop = false) {
            const exchangerBlock = document.querySelector(".exchanger__block");
            const exchanger = document.querySelector(".exchanger");
            const exchangerContainer = document.querySelector(".exchanger__container");
            if (isDesktop) {
                const elements = document.querySelectorAll(".exchanger-block__tab");
                [ ...elements ].forEach((el => {
                    const wrapper = el.parentElement;
                    el.dataset.model = wrapper.dataset.model;
                    el.dataset.modelvalue = wrapper.dataset.modelvalue;
                    wrapper.removeChild(el);
                    wrapper.parentElement.removeChild(wrapper);
                    exchangerBlock.appendChild(el);
                }));
                exchangerBlock.parentElement.removeChild(exchangerBlock);
                exchangerBlock.classList.add("desktop");
                exchangerContainer.appendChild(exchangerBlock);
            } else {
                const elements = document.querySelectorAll(".exchanger-block__tab");
                while (exchangerBlock.firstChild) exchangerBlock.removeChild(exchangerBlock.firstChild);
                [ ...elements ].forEach((el => {
                    const wrapper = document.createElement("div");
                    wrapper.classList.add("exchanger__block__wrapper");
                    wrapper.appendChild(el);
                    wrapper.dataset.model = el.dataset.model;
                    wrapper.dataset.modelvalue = el.dataset.modelvalue;
                    exchangerBlock.appendChild(wrapper);
                }));
                exchangerBlock.parentElement.removeChild(exchangerBlock);
                exchangerBlock.classList.remove("desktop");
                exchanger.appendChild(exchangerBlock);
            }
        }
        const wrapper = toggleExchangerBlockWrapper;
        function createOperationStepView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const operationStep = modelRepository.find("operation-step");
            const operationBuySell = modelRepository.find("operation:buy-sell");
            const operationStepButtons = Array.from(document.querySelectorAll('*[data-model="operation-step"][data-modelaction]'));
            operationStepButtons.forEach((btn => {
                btn.addEventListener("click", (e => {
                    e.preventDefault();
                    operationStep.doAction(btn.dataset.modelaction);
                }));
            }));
            operationStep.addEventListener("update", ((_, newValue) => {
                const operationStepElements = Array.from(document.querySelectorAll('*[data-model="operation-step"][data-modelvalue]'));
                if (!Array.isArray(operationStepElements)) throw new TypeError("Expected Array.");
                [ ...operationStepElements ].forEach((el => {
                    if (parseInt(el.dataset.modelvalue) !== newValue) el.classList.remove("current"); else el.classList.add("current");
                }));
            }));
            const blockTabButtons = document.querySelectorAll("#buy-sell-submit, #exchange-submit");
            const currentLanguage = modelRepository.find("language").value;
            const mediaHandle = window.matchMedia("(min-width: 78.75em)");
            const toggleTabs = tabs_disabled();
            const exchangeButton = document.querySelector("#exchange-submit");
            const stepExchangeButton = document.querySelector("#exchange-submit-operation-step");
            const setupSteps = e => {
                if (e.matches) {
                    if (1 !== operationStep.value) operationStep.updateModel(1);
                    exchangeButton.innerHTML = get("send-button", currentLanguage) + " " + get("operation-exchange", currentLanguage);
                    operationBuySell.updateModel(operationBuySell.value);
                } else {
                    operationStep.updateModel(0);
                    stepExchangeButton.innerHTML = get("send-button", currentLanguage) + " " + get("operation-exchange", currentLanguage);
                    blockTabButtons.forEach((btn => {
                        btn.innerHTML = get("next-button", currentLanguage);
                    }));
                }
            };
            const mediaChangedListener = e => {
                buttons(e.matches);
                toggleTabs(e.matches);
                wrapper(e.matches);
                setupSteps(e);
            };
            if (mediaHandle.matches) mediaChangedListener(mediaHandle); else setupSteps(mediaHandle);
            mediaHandle.addEventListener("change", mediaChangedListener);
        }
        const operationStep = createOperationStepView;
        function createTimerPopupView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const countdownModel = modelRepository.find("countdown");
            const popupScreenEl = document.querySelector(".popup__screen");
            if (!popupScreenEl) throw new ElementNotFoundError(".popup__screen");
            const popupTimerEl = document.querySelector(".popup__timer");
            const continueButton = popupTimerEl.querySelector(".button-continue");
            continueButton.addEventListener("click", (() => {
                countdownModel.doAction("reload");
                popupScreenEl.classList.add("hidden");
                popupTimerEl.classList.add("hidden");
            }));
            countdownModel.addEventListener("update", ((_, newValue) => {
                if (0 === newValue) {
                    popupScreenEl.classList.remove("hidden");
                    popupTimerEl.classList.remove("hidden");
                }
            }));
        }
        const timerPopup = createTimerPopupView;
        function createCountdownView(modelRepository) {
            if (!(modelRepository instanceof ModelRepository)) throw new TypeError("Expected modelRepository to be instance of ModelRepository.");
            const countdownModel = modelRepository.find("countdown");
            const countdownMinutesEl = document.querySelector('*[data-model="countdown:mm"]');
            const countdownSecondsEl = document.querySelector('*[data-model="countdown:ss"]');
            countdownModel.addEventListener("update", (() => {
                const [mm, ss] = countdownModel.getValue().split(":");
                countdownMinutesEl.innerHTML = mm;
                countdownSecondsEl.innerHTML = ss;
            }));
            timerPopup(modelRepository);
        }
        const view_countdown = createCountdownView;
        function useViewModels(cryptos, currencies) {
            const models = new ModelRepository;
            const cryptosModel = new Model("cryptos", "Cryptos", cryptos);
            const currenciesModel = new Model("currencies", "Currencies", currencies);
            models.addModels(cryptosModel, currenciesModel);
            defaults(models);
            exchange(models);
            buySell(models);
            view_exchange(models);
            view_buySell(models);
            operation(models);
            operationStep(models);
            view_countdown(models);
            models.forEach((model => {
                model.addEventListener("update", ((oldValue, newValue) => {
                    FLS(`[Update ${model.id}]: "${oldValue}" => "${newValue}"`);
                }));
            }));
        }
        const viewmodel = useViewModels;
        const smallMedia = "(max-width: 78.75em)";
        function swapExchangeBlockTabs() {
            const blockTabs = document.querySelectorAll(".exchanger-block__tab");
            const exchangerBlock = blockTabs[0].parentElement;
            exchangerBlock.removeChild(blockTabs[0]);
            exchangerBlock.appendChild(blockTabs[0]);
        }
        function swapCopyInputFields() {
            const bodyElements = document.querySelectorAll(".block-tab__credentials > .block-tab__body");
            [ ...bodyElements ].forEach((bodyEl => {
                const btns = bodyEl.querySelector(".block-tab__buttons");
                const toBePaid = bodyEl.querySelector('*[class$="to-be-paid"]');
                bodyEl.removeChild(btns);
                bodyEl.removeChild(toBePaid);
                const fieldEl = bodyEl.querySelector(".block-tab__form");
                const fieldMsgEl = fieldEl.nextElementSibling;
                if (!fieldMsgEl.classList.contains("message")) throw new Error("Expected .message element.");
                bodyEl.removeChild(fieldEl);
                bodyEl.appendChild(fieldEl);
                bodyEl.removeChild(fieldMsgEl);
                bodyEl.appendChild(fieldMsgEl);
                const labelsEl = bodyEl.querySelector(".block-tab__labels");
                bodyEl.removeChild(labelsEl);
                bodyEl.insertBefore(labelsEl, fieldEl);
                bodyEl.appendChild(toBePaid);
                bodyEl.appendChild(btns);
            }));
        }
        function exchangerSmall() {
            const mediaResult = window.matchMedia(smallMedia);
            const mediaChangedListener = () => {
                swapCopyInputFields();
            };
            if (mediaResult.matches) mediaChangedListener();
            mediaResult.addEventListener("change", mediaChangedListener);
            swapExchangeBlockTabs();
        }
        const exchanger_small = exchangerSmall;
        function exchangerPageLoad() {
            exchanger_small();
            loadCryptos().catch((e => {
                throw new Error(`Unable to load exchange page.\nUnderlying error:\n${e}`);
            })).then((cryptos => {
                cryptos = [ ...cryptos, ...restCryptos ];
                loadFiatCurrencies().then((currencies => {
                    viewmodel(cryptos, currencies);
                    spinner();
                }));
            }));
        }
        const exchanger = exchangerPageLoad;
        var i18n = __webpack_require__(4733);
        const eng = {
            "header-cta": "Change",
            "header-cta-desktop": "Change crypto",
            "lang-select-language": "Language",
            "nav-home": "Home",
            "nav-exchange-rate": "Exchange rate",
            "nav-features": "Features",
            "nav-guarantees": "Guarantees",
            "nav-faq": "FAQ",
            "block-1-title": "Buy bitcoins and cryptocurrencies instantly and securely!",
            "block-1-subtitle": "Chaingex is a simple and secure platform to create your crypto portfolio and exchange currency with a guarantee.",
            "block-1-cta": "Change crypto",
            "block-2-step-1": "Choose crypto for change",
            "block-2-step-2": "Entering data exchange",
            "block-2-step-3": "Secure exchange cryptocurrencies",
            "popular-currencies-title": "Popular Cryptocurrencies",
            "popular-currencies-colum-1": "Name",
            "popular-currencies-colum-2": "Price",
            "popular-currencies-colum-3": "Change",
            "popular-currencies-colum-4": "Actions",
            "popular-currencies-sell": "Sell",
            "popular-currencies-buy": "Buy",
            "popular-currencies-button-see-all": "See all cryptocurrencies",
            "popular-currencies-button-hide-all": "Hide all cryptocurrencies",
            "features-title": "Our best users are all over the world with wide coverage",
            "features-text": "Our platform reaches people all over the world. Hereby we are trusted as the best platform for crypto trading.",
            "features-item-1-caption": "People chose us",
            "features-item-2-caption": "Exchange every day",
            "features-item-3-caption": "On the crypto market",
            "features-item-3-years": [ [ 0, 0, "%n Years" ], [ 1, 1, "%n Year" ], [ 2, null, "%n Years" ] ],
            "guarantees-title": "Exchange cryptocurrency right now and, most importantly, safely",
            "guarantees-text": "In order to safely exchange your cryptocurrency, you need to press only one button that will take you to the exchange itself",
            "guarantees-button": "Change",
            "faq-title": "Frequently asked questions (FAQ)",
            "faq-text": "Here we have listed the questions with answers that our clients often ask us.",
            "faq-item-body-popular-currencies-link": "‘Popular Cryptocurrencies’",
            "faq-item-1-title": "How can I convert one cryptocurrency into another?",
            "faq-item-1-body-chunk-1": "Select the ‘Change’ option in the app. You can also find it in the ",
            "faq-item-1-body-chunk-2": " section. Choose the cryptocurrencies you wish to convert. Enter the amount and crypto wallet address for the receive cryptocurrency. Click the ‘Exchange’ button to confirm.",
            "faq-item-2-title": "How to do transfer from Chaingex to my bank account?",
            "faq-item-2-body-chunk-1": "To transfer money to your bank account, choose the cryptocurrency you wish to sell in the ",
            "faq-item-2-body-chunk-2": " section. Enter the transfer amount and select your bank account currency. The transfer will be executed within 2-5 working days.",
            "faq-item-3-title": "How can I buy some crypto?",
            "faq-item-3-body-chunk-1": "In the ",
            "faq-item-3-body-chunk-2": " section choose a cryptocurrency to buy. Select the currency of your bank account, enter the amount and confirm the purchase. You can follow the same procedure on ‘Change’ page by selecting ‘Buy / Sell Crypto’ tab.",
            "faq-item-4-title": "How do I transfer cryptocurrency from Chaingex to another exchange?",
            "faq-item-4-body": "Click the ‘Change’ button and select ‘Exchange crypto’ tab. Choose a cryptocurrency you wish to send and its amount. Enter the destination crypto wallet address. To avoid losing your cryptocurrency, copy and paste the wallet address. Do not enter it manually.",
            "exchanger-title": "Limitless Crypto Exchange",
            "exchanger-subtitle": "Fast Crypto Swaps, Free of Custody",
            "crypto-address-tab": "Crypto address",
            "bank-tab": "Bank",
            "exchange-crypto-tab": "Exchange Crypto",
            "buy-sell-crypto-tab": "Buy / Sell Crypto",
            "exchange-button": "Exchange",
            "buy-button": "Buy",
            "sell-button": "Sell",
            "estimated-rate": "Estimated rate: ",
            "you-get": "You get",
            "you-send": "You send",
            "you-pay": "You pay",
            "no-extra-fees": "No extra fees",
            fee: "Fee: %{fee}",
            net: "Net: %{net}",
            "copy-card": "Copy %{short} card",
            "your-card": "Your %{short} card",
            "copy-address": "Copy %{short} address",
            "your-address": "Your %{short} address",
            "your-card-invalid": "Invalid card",
            "your-address-invalid": "Invalid address",
            "invalid-address-message": "Please, check your address. Do not write it by hand, copy from clipboard instead.",
            "invalid-card-message": "Please, check your card number.",
            "min-amount": "Min amount: %{amount}",
            "copied-message": "Copied",
            "popup-success-title": "Success!",
            "popup-success-text": "The exchange has been successfully completed, please wait for a confirmation message",
            "popup-failure-title": "Oh, no!",
            "popup-failure-text": "Something went wrong with the exchange, please try again or reload the page",
            "popup-timer-title": "Still here?",
            "popup-timer-text": "Click ‘Continue’ to proceed.",
            "popup-button-home": "Go to home",
            "popup-button-continue": "Continue",
            "popup-button-refresh": "Refresh",
            "back-button": "Back",
            "next-button": "Next",
            "send-button": "Confirm",
            "operation-exchange": "exchange",
            "operation-buy": "purchase",
            "operation-sell": "sale",
            "to-be-paid": "To Be Paid"
        };
        const translations_eng = eng;
        const de = {
            "header-cta": "Austauschen",
            "header-cta-desktop": "Krypto austauschen",
            "lang-select-language": "Sprache",
            "nav-home": "Startseite",
            "nav-exchange-rate": "Tauschrate",
            "nav-features": "Merkmale",
            "nav-guarantees": "Garantien",
            "nav-faq": "FAQ",
            "block-1-title": "Kaufen Sie Bitcoins und Kryptowährungen sofort und sicher!",
            "block-1-subtitle": "Chaingex ist eine einfache und sichere Plattform, um Ihr Krypto-Portfolio zu erstellen und Währungen mit einer Garantie auszutauschen.",
            "block-1-cta": "Krypto austauschen",
            "block-2-step-1": "Wählen Sie eine Kryptowährung",
            "block-2-step-2": "Eingeben die Austauschdetails",
            "block-2-step-3": "Kryptowährung sicher tauschen",
            "popular-currencies-title": "Beliebte Kryptowährungen",
            "popular-currencies-colum-1": "Name",
            "popular-currencies-colum-2": "Preis",
            "popular-currencies-colum-3": "Änderung",
            "popular-currencies-colum-4": "Aktionen",
            "popular-currencies-sell": "Verkaufen",
            "popular-currencies-buy": "Kaufen",
            "popular-currencies-button-see-all": "Alle Kryptowährungen anzeigen",
            "popular-currencies-button-hide-all": "Alle Kryptowährungen ausblenden",
            "features-title": "Unsere besten Benutzer sind auf der ganzen Welt mit einer breiten Abdeckung",
            "features-text": "Unsere Plattform erreicht Menschen auf der ganzen Welt. Hiermit wird uns als die beste Plattform für den Kryptohandel vertraut.",
            "features-item-1-caption": "Kunden wählen uns",
            "features-item-2-caption": "Jeden Tag austauschen",
            "features-item-3-caption": "Auf dem Kryptomarkt",
            "features-item-3-years": [ [ 0, 0, "%n Jahre" ], [ 1, 1, "%n Jahr" ], [ 2, null, "%n Jahre" ] ],
            "guarantees-title": "Tauschen Sie Kryptowährungen jetzt und, vor allem, sicher",
            "guarantees-text": "Um Ihre Kryptowährung sicher umzutauschen, müssen Sie nur eine Taste drücken, die Sie zur Börse selbst führt",
            "guarantees-button": "Austauschen",
            "faq-title": "Häufig gestellte Fragen (FAQ)",
            "faq-text": "Hier haben wir die Fragen mit Antworten aufgelistet, die uns unsere Kunden häufig stellen.",
            "faq-item-body-popular-currencies-link": "‘Beliebte Kryptowährungen’",
            "faq-item-1-title": "Wie kann ich eine Kryptowährung in eine andere umwandeln?",
            "faq-item-1-body-chunk-1": "Wählen Sie in der App die Option ‘Austauschen’. Sie finden es auch im Abschnitt ",
            "faq-item-1-body-chunk-2": ". Wählen Sie die Kryptowährungen aus, die Sie konvertieren möchten. Geben Sie den Betrag und die Krypto-Wallet-Adresse für die empfangene Kryptowährung ein. Klicken Sie zur Bestätigung auf die Schaltfläche ‘Austauschen’.",
            "faq-item-2-title": "Wie überweise ich von Chaingex auf mein Bankkonto?",
            "faq-item-2-body-chunk-1": "Um Geld auf Ihr Bankkonto zu überweisen, wählen Sie im Abschnitt ",
            "faq-item-2-body-chunk-2": " die Kryptowährung aus, die Sie verkaufen möchten. Geben Sie den Überweisungsbetrag ein und wählen Sie die Währung Ihres Bankkontos aus. Die Überweisung wird innerhalb von 2-5 Werktagen ausgeführt.",
            "faq-item-3-title": "Wie kann ich Krypto kaufen?",
            "faq-item-3-body-chunk-1": "Wählen Sie im Abschnitt ",
            "faq-item-3-body-chunk-2": " eine Kryptowährung aus, die Sie kaufen möchten. Wählen Sie die Währung Ihres Bankkontos aus, geben Sie den Betrag ein und bestätigen Sie den Kauf. Sie können das gleiche Verfahren auf der Seite ‘Austauschen’ durchführen, indem Sie die Registerkarte ‘Kaufen / Verkaufen’ auswählen.",
            "faq-item-4-title": "Wie übertrage ich Kryptowährung von Chaingex zu einer anderen Börse?",
            "faq-item-4-body": "Klicken Sie auf die Schaltfläche ‘Austauschen’ und wählen Sie die Registerkarte ‘Krypto tauschen’. Wählen Sie eine Kryptowährung, die Sie senden möchten, und deren Betrag. Geben Sie die Ziel-Krypto-Wallet-Adresse ein. Um den Verlust Ihrer Kryptowährung zu vermeiden, kopieren Sie die Wallet-Adresse und fügen Sie sie ein. Geben Sie es nicht manuell ein.",
            "exchanger-title": "Unbegrenzter Krypto-Austausch",
            "exchanger-subtitle": "Schnelle Krypto-Swaps, verwahrungsfrei",
            "crypto-address-tab": "Krypto-Adresse",
            "bank-tab": "Bank",
            "exchange-crypto-tab": "Krypto tauschen",
            "buy-sell-crypto-tab": "Kaufen / Verkaufen",
            "exchange-button": "Austausch",
            "buy-button": "Kaufen",
            "sell-button": "Verkaufen",
            "estimated-rate": "Geschätzter Preis: ",
            "you-get": "Sie kriegst",
            "you-send": "Sie sendest",
            "you-pay": "Sie zahlen",
            "no-extra-fees": "Keine zusätzlichen Gebühren",
            fee: "Gebühr: %{fee}",
            net: "Net: %{net}",
            "copy-card": "%{short} Karte kopieren",
            "your-card": "Deine %{short} Karte",
            "copy-address": "%{short} Adresse kopieren",
            "your-address": "Deine %{short} Adresse",
            "your-card-invalid": "Ungültige Karte",
            "your-address-invalid": "Ungültige Adresse",
            "invalid-address-message": "Bitte überprüfen Sie Ihre Adresse. Schreiben Sie es nicht von Hand, sondern kopieren Sie es aus der Zwischenablage.",
            "invalid-card-message": "Bitte überprüfen Sie Ihre Kartennummer.",
            "min-amount": "Mindestbetrag: %{amount}",
            "copied-message": "Kopiert",
            "popup-success-title": "Erfolg!",
            "popup-success-text": "Der Austausch wurde erfolgreich abgeschlossen, bitte warten Sie auf eine Bestätigungsnachricht",
            "popup-failure-title": "Ach nein!",
            "popup-failure-text": "Beim Austausch ist etwas schief gelaufen, bitte versuchen Sie es erneut oder laden Sie die Seite neu",
            "popup-timer-title": "Immer noch hier?",
            "popup-timer-text": "Klicken Sie auf ‘Weiter’, um fortzufahren.",
            "popup-button-home": "Zur Startseite",
            "popup-button-continue": "Weiter",
            "popup-button-refresh": "Neu laden",
            "back-button": "Zurück",
            "next-button": "Weiter",
            "send-button": "Bestätigen",
            "operation-exchange": "Austausch",
            "operation-buy": "Kauf",
            "operation-sell": "Verkauf",
            "to-be-paid": "Zu zahlen"
        };
        const translations_de = de;
        const pl = {
            "header-cta": "Wymień",
            "header-cta-desktop": "Wymień",
            "lang-select-language": "Język",
            "nav-home": "Strona główna",
            "nav-exchange-rate": "Kurs wymiany",
            "nav-features": "Osobliwości",
            "nav-guarantees": "Gwarancje",
            "nav-faq": "FAQ",
            "block-1-title": "Kupuj bitcoiny oraz kryptowaluty szybko i biezpiecznie!",
            "block-1-subtitle": "Chaingex to prosta i bezpieczna platforma do tworzenia portfela kryptowalut i wymiany walut z gwarancją.",
            "block-1-cta": "Wymień kryptowalutę",
            "block-2-step-1": "Wybierz kryptowalutę",
            "block-2-step-2": "Wypełnij dane",
            "block-2-step-3": "Bezpiecznie wymień ją",
            "popular-currencies-title": "Popularne Kryptowaluty",
            "popular-currencies-colum-1": "Nazwa",
            "popular-currencies-colum-2": "Cena",
            "popular-currencies-colum-3": "Zmiana",
            "popular-currencies-colum-4": "Akcje",
            "popular-currencies-sell": "Sprzedaj",
            "popular-currencies-buy": "Kup",
            "popular-currencies-button-see-all": "Zobacz wszystkie kryptowaluty",
            "popular-currencies-button-hide-all": "Ukryj wszystkie kryptowaluty",
            "features-title": "Nasi najlepsi użytkownicy są na całym świecie z szerokim zasięgiem",
            "features-text": "Nasza platforma dociera do ludzi na całym świecie. Cieszymy się zaufaniem jako najlepsza platforma do handlu kryptowalutami",
            "features-item-1-caption": "Klientów już wybrali nas",
            "features-item-2-caption": "Transakcji dziennie",
            "features-item-3-caption": "Na rynku kryptowalut",
            "features-item-3-years": [ [ 0, 0, "%n Lat" ], [ 1, 1, "%n Rok" ], [ 2, 4, "%n Lata" ], [ 5, null, "%n Lat" ] ],
            "guarantees-title": "Wymieniaj kryptowaluty już teraz i, co najważniejsze, bezpiecznie",
            "guarantees-text": "Aby bezpiecznie wymienić swoją kryptowalutę wystarczy nacisnąć tylko jeden przycisk, który przekieruje Cię do samej giełdy",
            "guarantees-button": "Wymień",
            "faq-title": "Często Zadawane Pytania (FAQ)",
            "faq-text": "Tutaj wymieniliśmy pytania wraz z odpowiedziami, które często zadają nam nasi klienci.",
            "faq-item-body-popular-currencies-link": "‘Popularne Kryptowaluty’",
            "faq-item-1-title": "Jak mogę przekonwertować jedną kryptowalutę na inną?",
            "faq-item-1-body-chunk-1": "Wybierz opcję ‘Wymień’ w aplikacji. Znajdziesz ją również w sekcji ",
            "faq-item-1-body-chunk-2": ". Wybierz kryptowaluty, które chcesz przekonwertować. Wprowadź sumę oraz adres krypto portfelu tej kryptowaluty, którą otrzymasz. Wciśnij przycisk ‘Wymień’ w celu potwierdzenia.",
            "faq-item-2-title": "Jak mogę przelać z Chaingex na swoje konto bankowe?",
            "faq-item-2-body-chunk-1": "Aby dokonać przelewu na własne konto bankowe, wybierz kryptowalutę, którą chcesz sprzedać w sekcji ",
            "faq-item-2-body-chunk-2": ". Wprowadź kwotę przelewu i wybierz walutę własnego konta bankowego. Przelew zostanie zrealizowany w ciągu 2-5 dni roboczych.",
            "faq-item-3-title": "Jak mogę kupić kryptowalutę?",
            "faq-item-3-body-chunk-1": "W sekcji ",
            "faq-item-3-body-chunk-2": " wybierz kryptowalutę, którą chcesz kupić. Wybierz walutę własnego konta bankowego, wprowadź sumę i potwierdź zakup. Możesz to zrobić w inny sposób, przechodząc na stronę ‘Wymiana’, wybierając zakładkę ‘Kup / Sprzedaj’.",
            "faq-item-4-title": "Jak przelać kryptowalutę z Chaingex na inną giełdę?",
            "faq-item-4-body": "Naciśnij przycisk ‘Wymień’ i wybierz zakładkę ‘Wymień’. Wybierz kryptowalutę, którą chcesz wysłać oraz jej sumę. Wprowadź adres krypto portfelu kryptowaluty do otrzymania. Żeby przelew nie zgubił się, skopiuj i wklej adres krypto portfelu. Nie wprowadzaj go ręcznie.",
            "exchanger-title": "Nieograniczona wymiana kryptowalut",
            "exchanger-subtitle": "Szybkie wymiany kryptowalut, wolne od opieki",
            "crypto-address-tab": "Adres kryptowaluty",
            "bank-tab": "Bank",
            "exchange-crypto-tab": "Wymień",
            "buy-sell-crypto-tab": "Kup / Sprzedaj",
            "exchange-button": "Wymień",
            "buy-button": "Kup",
            "sell-button": "Sprzedaj",
            "estimated-rate": "Szacowana stawka: ",
            "you-get": "Dostajesz",
            "you-send": "Wysyłasz",
            "you-pay": "Płacisz",
            "no-extra-fees": "Bez dodatkowych opłat",
            fee: "Opłata: %{fee}",
            net: "Sieć: %{net}",
            "copy-card": "Skopiuj kartę %{short}",
            "your-card": "Twoja karta %{short}",
            "copy-address": "Skopiuj adres %{short}",
            "your-address": "Twój adres %{short}",
            "your-card-invalid": "Niepoprawny nr karty",
            "your-address-invalid": "Niepoprawny adres portfela",
            "invalid-address-message": "Proszę sprawdzić swój adres. Nie pisz tego ręcznie, zamiast tego skopiuj i wklej go.",
            "invalid-card-message": "Proszę sprawdzić numer swojej karty.",
            "min-amount": "Min kwota: %{amount}",
            "copied-message": "Skopiowane",
            "popup-success-title": "Sukces!",
            "popup-success-text": "Wymiana została pomyślnie zakończona, proszę czekać na wiadomość potwierdzającą",
            "popup-failure-title": "O nie!",
            "popup-failure-text": "Coś poszło nie tak z wymianą, spróbuj ponownie lub przeładuj stronę",
            "popup-timer-title": "Ciągle tutaj?",
            "popup-timer-text": "Kliknij ‘Kontynuuj’, aby kontynuować.",
            "popup-button-home": "Strona główna",
            "popup-button-continue": "Kontynuuj",
            "popup-button-refresh": "Odśwież",
            "back-button": "Wstecz",
            "next-button": "Dalej",
            "send-button": "Potwierdź",
            "operation-exchange": "wymianę",
            "operation-buy": "kupno",
            "operation-sell": "spzredaż",
            "to-be-paid": "Do opłaty"
        };
        const translations_pl = pl;
        const rus = {
            "header-cta": "Обменять",
            "header-cta-desktop": "Обменять",
            "lang-select-language": "Язык",
            "nav-home": "Главная страница",
            "nav-exchange-rate": "Курс",
            "nav-features": "Особенности",
            "nav-guarantees": "Гарантии",
            "nav-faq": "FAQ",
            "block-1-title": "Покупайте биткойны и криптовалюты мгновенно и безопасно!",
            "block-1-subtitle": "Chaingex — это простая и безопасная платформа для создания своего криптопортфеля и обмена валюты с гарантией.",
            "block-1-cta": "Обменять криптовалюту",
            "block-2-step-1": "Выберите криптовалюту",
            "block-2-step-2": "Заполните данные",
            "block-2-step-3": "Надежно обменяйте её",
            "popular-currencies-title": "Популярные Криптовалюты",
            "popular-currencies-colum-1": "Название",
            "popular-currencies-colum-2": "Цена",
            "popular-currencies-colum-3": "Изменение",
            "popular-currencies-colum-4": "Действия",
            "popular-currencies-sell": "Продать",
            "popular-currencies-buy": "Купить",
            "popular-currencies-button-see-all": "Смотреть все криптовалюты",
            "popular-currencies-button-hide-all": "Скрыть все криптовалюты",
            "features-title": "Наши лучшие пользователи по всему миру с широким охватом",
            "features-text": "Наша платформа доступна людям по всему миру. Нам доверяют как лучшей платформе для криптотрейдинга.",
            "features-item-1-caption": "Клиентов уже с нами",
            "features-item-2-caption": "Транзакций ежедневно",
            "features-item-3-caption": "На рынке криптовалют",
            "features-item-3-years": [ [ 0, 0, "%n Лет" ], [ 1, 1, "%n Год" ], [ 2, 4, "%n Года" ], [ 5, null, "%n Лет" ] ],
            "guarantees-title": "Обменивайте криптовалюту прямо сейчас и, самое главное, безопасно",
            "guarantees-text": "Для того, чтобы безопасно обменять свою криптовалюту, вам нужно нажать всего одну кнопку, которая перенаправит вас к обмену",
            "guarantees-button": "Обменять",
            "faq-title": "Часто задаваемые вопросы (FAQ)",
            "faq-text": "Здесь мы перечислили вопросы с ответами, которые часто задают нам наши клиенты.",
            "faq-item-body-popular-currencies-link": "‘Популярные Криптовалюты’",
            "faq-item-1-title": "Как я могу конвертировать одну криптовалюту в другую?",
            "faq-item-1-body-chunk-1": "Выберите опцию ‘Обменять’ в приложении. Вы также можете найти её в разделе ",
            "faq-item-1-body-chunk-2": ". Выберите криптовалюты, которые хотите конвертировать. Введите сумму и адрес криптокошелька для криптовалюты, которую получаете. Нажмите кнопку ‘Обменять’ для подтверждения.",
            "faq-item-2-title": "Как я могу сделать перевод с Chaingex на свой банковский счёт?",
            "faq-item-2-body-chunk-1": "Чтобы перевести деньги на ваш банковский счёт, выберите криптовалюту, которую хотите продать в разделе ",
            "faq-item-2-body-chunk-2": ". Введите сумму перевода и выберите валюту вашего банковского счёта. Перевод будет осуществлен на протяжении 2-5 рабочих дней.",
            "faq-item-3-title": "Как я могу купить криптовалюту?",
            "faq-item-3-body-chunk-1": "В разделе ",
            "faq-item-3-body-chunk-2": " выберите криптовалюту, которую хотите купить. Выберите валюту вашего банковского счёта, введите сумму и подтвердите покупку. Вы можете это сделать также другим способом, перейдя на страницу ‘Обмен’, выбрав вкладку ‘Купить / Продать’.",
            "faq-item-4-title": "Как перевести криптовалюту с Chaingex на другую биржу?",
            "faq-item-4-body": "Нажмите кнопку ‘Обменять’ и выберите вкладку ‘Обменять’. Выберите криптловалюту, которую хотите отправить и её сумму. Введите адрес криптокошелька криптовалюты для получения. Чтобы избежать потери криптовалюты, скопируйте и вставьте адрес криптокошелька. Не вводите его вручную.",
            "exchanger-title": "Безграничная криптобиржа",
            "exchanger-subtitle": "Быстрые крипто-свопы без хранения",
            "crypto-address-tab": "Крипто-адрес",
            "bank-tab": "Банк",
            "exchange-crypto-tab": "Обменять",
            "buy-sell-crypto-tab": "Купить / Продать",
            "exchange-button": "Обменять",
            "buy-button": "Купить",
            "sell-button": "Продать",
            "estimated-rate": "Ориентировочный курс",
            "you-get": "Вы получаете",
            "you-send": "Вы отправляете",
            "you-pay": "Вы платите",
            "no-extra-fees": "Без дополнительных комиссий",
            fee: "Коммисия: %{fee}",
            net: "Сеть: %{net}",
            "copy-card": "Скопируйте %{short} карту",
            "your-card": "Ваша %{short} карта",
            "copy-address": "Скопируйте %{short} адрес",
            "your-address": "Ваш %{short} адрес",
            "your-card-invalid": "Неправильный номер карты",
            "your-address-invalid": "Неправильный адрес кошелька",
            "invalid-address-message": "Пожалуйста, проверьте свой адрес криптокошелька. Не пишите его от руки, а скопируйте из буфера обмена.",
            "invalid-card-message": "Пожалуйста, проверьте номер карты.",
            "min-amount": "Мин сумма: %{amount}",
            "copied-message": "Скопировано",
            "popup-success-title": "Успех!",
            "popup-success-text": "Обмен успешно завершен, пожалуйста, дождитесь подтверждающего сообщения",
            "popup-failure-title": "О, нет!",
            "popup-failure-text": "Что-то пошло не так при обмене, попробуйте еще раз или перезагрузите страницу",
            "popup-timer-title": "Все еще здесь?",
            "popup-timer-text": "Нажмите ‘Продолжить’, чтобы продолжить.",
            "popup-button-home": "На главную",
            "popup-button-continue": "Продолжить",
            "popup-button-refresh": "Обновить",
            "back-button": "Назад",
            "next-button": "Далее",
            "send-button": "Подтвердить",
            "operation-exchange": "обмен",
            "operation-buy": "покупку",
            "operation-sell": "продажу",
            "to-be-paid": "К оплате"
        };
        const translations_rus = rus;
        const translations = {
            eng: translations_eng,
            de: translations_de,
            pl: translations_pl,
            rus: translations_rus
        };
        const langs = [ {
            name: "English",
            shortNames: {
                short: "Eng",
                shorter: "EN"
            },
            value: "eng",
            styleClass: "i18n__eng",
            languageCodes: /en-*/g,
            dict: i18n.create({
                values: translations.eng
            })
        }, {
            name: "Russian",
            shortNames: {
                short: "Rus",
                shorter: "RU"
            },
            value: "rus",
            styleClass: "i18n__rus",
            languageCodes: [ "ru", "uk", "bg", "be" ],
            dict: i18n.create({
                values: translations.rus
            })
        }, {
            name: "Polish",
            shortNames: {
                short: "Pl",
                shorter: "PL"
            },
            value: "pl",
            styleClass: "i18n__pl",
            languageCodes: "pl",
            dict: i18n.create({
                values: translations.pl
            })
        }, {
            name: "German",
            shortNames: {
                short: "De",
                shorter: "DE"
            },
            value: "de",
            styleClass: "i18n__de",
            languageCodes: /de.*/g,
            dict: i18n.create({
                values: translations.de
            })
        } ];
        const data = langs;
        function setLanguage(languageValue) {
            const {tokenNames: {currentLanguage}} = storage;
            const {localStorage} = window;
            const language = data.find((lang => lang.value === languageValue));
            if (!language) throw new Error("Unabled to find language by languageValue.");
            localStorage.setItem(currentLanguage, language.value);
        }
        function getLanguage() {
            const {tokenNames: {currentLanguage}} = storage;
            const {localStorage} = window;
            const languageValue = localStorage.getItem(currentLanguage);
            if (!languageValue) return null;
            const language = data.find((lang => lang.value === languageValue));
            if (!language) throw new Error("Unabled to find language by languageValue.");
            return languageValue;
        }
        const defaultLanguage = data.find((lang => "eng" === lang.value));
        function isMatchLanguage(userLanguage, language) {
            if ("string" === typeof language.languageCodes || language.languageCodes instanceof String) return language.languageCodes === userLanguage;
            if (language.languageCodes instanceof RegExp) return language.languageCodes.test(userLanguage);
            for (const code of language.languageCodes) {
                if ("string" === typeof code || code instanceof String) if (code === userLanguage) return true;
                if (code instanceof RegExp) if (code.test(userLanguage)) return true;
            }
            return false;
        }
        function mapUserLanguage() {
            const userLanguage = navigator.language || navigator.userLanguage;
            for (const l of data) if (isMatchLanguage(userLanguage, l)) return l;
            if (defaultLanguage) return defaultLanguage;
            if (data.length > 0) return data[0];
            throw new Error("No languages in langs array are defined.");
        }
        function detectUserLanguage() {
            const currentLangValue = getLanguage();
            if (!currentLangValue) {
                const mappedLang = mapUserLanguage();
                setLanguage(mappedLang.value);
                return mappedLang;
            }
            const language = data.find((lang => lang.value === currentLangValue));
            if (!language) throw new Error("Unabled to find language by currentLangValue.");
            return language;
        }
        function useLanguageDetect() {
            window.detectUserLanguage = detectUserLanguage;
        }
        function scrollRouter(targetElement) {
            string(targetElement);
            if ("Home" !== currentPage()) {
                const targetElemenentParam = encodeURIComponent(targetElement);
                const targetElementQueryParamName = object(storage.tokenNames).withProperty("targetElement", (p => string(p).nonEmpty())).value ? storage.tokenNames.targetElement : "targetElement";
                window.location.href = `index.html?${targetElementQueryParamName}=${targetElemenentParam}`;
            } else scrollAction(targetElement);
        }
        const routers_scroll = scrollRouter;
        function useScrollRouter() {
            const scrollLinks = document.querySelectorAll("*[data-scrollrouter]");
            [ ...scrollLinks ].forEach((linkEl => {
                string(linkEl.dataset.scrollrouter).nonEmpty().throw("[data-scrollrouter]");
                linkEl.href = "scrollrouter";
                linkEl.addEventListener("click", (e => {
                    e.preventDefault();
                    routers_scroll(linkEl.dataset.scrollrouter);
                }));
            }));
        }
        const scroll_router = useScrollRouter;
        function style(element, language) {
            if (!(element instanceof Element || element instanceof HTMLElement)) throw new TypeError("Expected element to be instance of either Element or HTMLElement.");
            element.classList.add(language.styleClass);
        }
        const i18n_style = style;
        let currentLanguage = null;
        function optionClickedHandler(lang) {
            setLanguage(lang.value);
            window.location.reload(true);
        }
        function createMobileOption(lang) {
            const option = document.createElement("div");
            option.classList.add("lang-select__mobile__option");
            option.innerHTML = lang.shortNames.shorter;
            if (lang.value === currentLanguage.value) option.classList.add("lang-select__mobile__option__current"); else option.addEventListener("click", (() => optionClickedHandler(lang)));
            return option;
        }
        function createDesktopOption(lang) {
            const option = document.createElement("div");
            option.classList.add("lang-select__option");
            option.innerHTML = lang.shortNames.short;
            option.addEventListener("click", (() => optionClickedHandler(lang)));
            return option;
        }
        function useLanguageSelect() {
            const langSelectMobile = document.querySelector(".lang-select__mobile");
            while (langSelectMobile.firstElementChild) langSelectMobile.removeChild(langSelectMobile.firstElementChild);
            const langSelect = document.querySelector(".lang-select");
            while (langSelect.firstElementChild) langSelect.removeChild(langSelect.firstElementChild);
            const langSelectCurrent = document.createElement("div");
            langSelectCurrent.classList.add("lang-select__current");
            langSelectCurrent.innerHTML = currentLanguage.shortNames.short;
            const langSelectOptions = document.createElement("div");
            langSelectOptions.classList.add("lang-select__options");
            langSelect.append(langSelectCurrent, langSelectOptions);
            data.forEach((lang => {
                langSelectMobile.appendChild(createMobileOption(lang));
                if (lang.value !== currentLanguage.value) langSelectOptions.appendChild(createDesktopOption(lang));
            }));
        }
        function translatePage() {
            const elements = document.querySelectorAll(".i18n, .i18n-style");
            elements.forEach((el => {
                if (el.classList.contains("i18n")) {
                    i18n_style(el, currentLanguage);
                    i18n_translate(el, currentLanguage);
                } else if (el.classList.contains("i18n-style")) i18n_style(el, currentLanguage);
            }));
        }
        function useI18n() {
            if (!(window.detectUserLanguage instanceof Function)) useLanguageDetect();
            currentLanguage = window.detectUserLanguage();
            useLanguageSelect();
            translatePage();
        }
        const js_i18n = useI18n;
        useLanguageDetect();
        headerDesktop();
        autoCloseMenu();
        Object.assign(window, {
            toggleMenu
        });
        const page = currentPage();
        if ("Exchanger" === page) exchanger(); else if ("Home" === page) home();
        scroll_router();
        js_i18n();
        window["FLS"] = false;
        isWebp();
        spollers();
        tabs();
        pageNavigation();
    })();
})();