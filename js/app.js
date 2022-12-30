(() => {
    var __webpack_modules__ = {
        711: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                return function(e) {
                    function t(o) {
                        if (n[o]) return n[o].exports;
                        var i = n[o] = {
                            exports: {},
                            id: o,
                            loaded: !1
                        };
                        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.p = "dist/", t(0);
                }([ function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    }, j = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), 
                        w;
                    }, O = function() {
                        w = (0, h.default)(), j();
                    }, M = function() {
                        w.forEach((function(e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), 
                            e.node.removeAttribute("data-aos-delay");
                        }));
                    }, S = function(e) {
                        return !0 === e || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && !0 === e();
                    }, _ = function(e) {
                        x = i(x, e), w = (0, h.default)();
                        var t = document.all && !window.atob;
                        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), 
                        x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), 
                        document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), 
                        "DOMContentLoaded" === x.startEvent && [ "complete", "interactive" ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, (function() {
                            j(!0);
                        })) : document.addEventListener(x.startEvent, (function() {
                            j(!0);
                        })), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), 
                        window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), 
                        window.addEventListener("scroll", (0, u.default)((function() {
                            (0, b.default)(w, x.once);
                        }), x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), 
                        w);
                    };
                    e.exports = {
                        init: _,
                        refresh: j,
                        refreshHard: O
                    };
                }, function(e, t) {}, , , , , function(e, t) {
                    (function(t) {
                        "use strict";
                        function n(e, t, n) {
                            function o(t) {
                                var n = b, o = v;
                                return b = v = void 0, k = t, g = e.apply(o, n);
                            }
                            function r(e) {
                                return k = e, h = setTimeout(f, t), M ? o(e) : g;
                            }
                            function a(e) {
                                var n = e - w, o = e - k, i = t - n;
                                return S ? j(i, y - o) : i;
                            }
                            function c(e) {
                                var n = e - w, o = e - k;
                                return void 0 === w || n >= t || n < 0 || S && o >= y;
                            }
                            function f() {
                                var e = O();
                                return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                            }
                            function d(e) {
                                return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                            }
                            function l() {
                                void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                            }
                            function p() {
                                return void 0 === h ? g : d(O());
                            }
                            function m() {
                                var e = O(), n = c(e);
                                if (b = arguments, v = this, w = e, n) {
                                    if (void 0 === h) return r(w);
                                    if (S) return h = setTimeout(f, t), o(w);
                                }
                                return void 0 === h && (h = setTimeout(f, t)), g;
                            }
                            var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                            if ("function" != typeof e) throw new TypeError(s);
                            return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, 
                            _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                        }
                        function o(e, t, o) {
                            var r = !0, a = !0;
                            if ("function" != typeof e) throw new TypeError(s);
                            return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), 
                            n(e, t, {
                                leading: r,
                                maxWait: t,
                                trailing: a
                            });
                        }
                        function i(e) {
                            var t = "undefined" == typeof e ? "undefined" : c(e);
                            return !!e && ("object" == t || "function" == t);
                        }
                        function r(e) {
                            return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                        }
                        function a(e) {
                            return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                        }
                        function u(e) {
                            if ("number" == typeof e) return e;
                            if (a(e)) return f;
                            if (i(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = i(t) ? t + "" : t;
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(l, "");
                            var n = m.test(e);
                            return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                        }
                        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                            return h.Date.now();
                        };
                        e.exports = o;
                    }).call(t, function() {
                        return this;
                    }());
                }, function(e, t) {
                    (function(t) {
                        "use strict";
                        function n(e, t, n) {
                            function i(t) {
                                var n = b, o = v;
                                return b = v = void 0, O = t, g = e.apply(o, n);
                            }
                            function r(e) {
                                return O = e, h = setTimeout(f, t), M ? i(e) : g;
                            }
                            function u(e) {
                                var n = e - w, o = e - O, i = t - n;
                                return S ? x(i, y - o) : i;
                            }
                            function s(e) {
                                var n = e - w, o = e - O;
                                return void 0 === w || n >= t || n < 0 || S && o >= y;
                            }
                            function f() {
                                var e = j();
                                return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                            }
                            function d(e) {
                                return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                            }
                            function l() {
                                void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                            }
                            function p() {
                                return void 0 === h ? g : d(j());
                            }
                            function m() {
                                var e = j(), n = s(e);
                                if (b = arguments, v = this, w = e, n) {
                                    if (void 0 === h) return r(w);
                                    if (S) return h = setTimeout(f, t), i(w);
                                }
                                return void 0 === h && (h = setTimeout(f, t)), g;
                            }
                            var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                            if ("function" != typeof e) throw new TypeError(c);
                            return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, 
                            _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                        }
                        function o(e) {
                            var t = "undefined" == typeof e ? "undefined" : u(e);
                            return !!e && ("object" == t || "function" == t);
                        }
                        function i(e) {
                            return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                        }
                        function r(e) {
                            return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                        }
                        function a(e) {
                            if ("number" == typeof e) return e;
                            if (r(e)) return s;
                            if (o(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = o(t) ? t + "" : t;
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(d, "");
                            var n = p.test(e);
                            return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                        }
                        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                            return g.Date.now();
                        };
                        e.exports = n;
                    }).call(t, function() {
                        return this;
                    }());
                }, function(e, t) {
                    "use strict";
                    function n(e) {
                        var t = void 0, o = void 0;
                        for (t = 0; t < e.length; t += 1) {
                            if (o = e[t], o.dataset && o.dataset.aos) return !0;
                            if (o.children && n(o.children)) return !0;
                        }
                        return !1;
                    }
                    function o() {
                        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    }
                    function i() {
                        return !!o();
                    }
                    function r(e, t) {
                        var n = window.document, i = o(), r = new i(a);
                        u = t, r.observe(n.documentElement, {
                            childList: !0,
                            subtree: !0,
                            removedNodes: !0
                        });
                    }
                    function a(e) {
                        e && e.forEach((function(e) {
                            var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                            if (n(i)) return u();
                        }));
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var u = function() {};
                    t.default = {
                        isSupported: i,
                        ready: r
                    };
                }, function(e, t) {
                    "use strict";
                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }
                    function o() {
                        return navigator.userAgent || navigator.vendor || window.opera || "";
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                                Object.defineProperty(e, o.key, o);
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t;
                        };
                    }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                        function e() {
                            n(this, e);
                        }
                        return i(e, [ {
                            key: "phone",
                            value: function() {
                                var e = o();
                                return !(!r.test(e) && !a.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var e = o();
                                return !(!u.test(e) && !c.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone();
                            }
                        } ]), e;
                    }();
                    t.default = new s;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e, t, n) {
                        var o = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
                    }, o = function(e, t) {
                        var o = window.pageYOffset, i = window.innerHeight;
                        e.forEach((function(e, r) {
                            n(e, i + o, t);
                        }));
                    };
                    t.default = o;
                }, function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(12), r = o(i), a = function(e, t) {
                        return e.forEach((function(e, n) {
                            e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                        })), e;
                    };
                    t.default = a;
                }, function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(13), r = o(i), a = function(e, t) {
                        var n = 0, o = 0, i = window.innerHeight, a = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                        };
                        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), 
                        n = (0, r.default)(e).top, a.anchorPlacement) {
                          case "top-bottom":
                            break;

                          case "center-bottom":
                            n += e.offsetHeight / 2;
                            break;

                          case "bottom-bottom":
                            n += e.offsetHeight;
                            break;

                          case "top-center":
                            n += i / 2;
                            break;

                          case "bottom-center":
                            n += i / 2 + e.offsetHeight;
                            break;

                          case "center-center":
                            n += i / 2 + e.offsetHeight / 2;
                            break;

                          case "top-top":
                            n += i;
                            break;

                          case "bottom-top":
                            n += e.offsetHeight + i;
                            break;

                          case "center-top":
                            n += e.offsetHeight / 2 + i;
                        }
                        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
                    };
                    t.default = a;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), 
                        n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                        return {
                            top: n,
                            left: t
                        };
                    };
                    t.default = n;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                            return {
                                node: e
                            };
                        }));
                    };
                    t.default = n;
                } ]);
            }));
        },
        755: function(module, exports) {
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
        "use strict";
        function getAnimationStartScrollPosition(el) {
            const {innerHeight: windowHeight} = window;
            const {top} = el.getBoundingClientRect();
            return top + windowHeight / 2;
        }
        function animate(onAnimationStarted) {
            const animatedElements = document.querySelectorAll(".animation-on-scroll");
            const animationTimeMs = 4e3;
            let onAnimationStartedCalled = false;
            animatedElements.forEach((el => {
                const start = 0, end = parseInt(el.dataset.val);
                const timeoutDuration = animationTimeMs / end;
                let value = start;
                const incrementValue = () => {
                    value += 1;
                    const prevValue = parseInt("0" | el.textContent);
                    if (value > prevValue) el.textContent = value;
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
        window.addEventListener("scroll", scrollHandler);
        scrollHandler();
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
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var jquery = __webpack_require__(755);
        class YouSendView {
            constructor(youSendModel, formElement) {
                if (!(youSendModel instanceof model_you_send)) throw new TypeError("Expected youSendModel to be YouSendModel");
                this.model = youSendModel;
                if (!(formElement instanceof Element)) throw new ElementNotFoundError(exFormId);
                this.group = formElement.querySelector(".send");
                if (!(this.group instanceof Element)) throw new ElementNotFoundError(".send");
                this.select = this.group.querySelector(".select");
                if (!(this.select instanceof Element)) throw new ElementNotFoundError(".select");
                this.list = this.select.querySelector(".field-select__list");
                this.value = this.select.querySelector(".field-select__value");
                this.input = this.select.querySelector(".field-input");
                this.hiddenInput = this.select.querySelector(".field-select__input");
                this.resultValue = this.group.querySelector(".result-value");
                if (!(this.list instanceof Element)) throw new ElementNotFoundError(".field-select__list");
                if (!(this.value instanceof Element)) throw new ElementNotFoundError(".field-select__value");
                if (!(this.input instanceof Element)) throw new ElementNotFoundError(".field-input");
                if (!(this.hiddenInput instanceof Element)) throw new ElementNotFoundError(".field-select__input");
                if (!(this.resultValue instanceof Element)) throw new ElementNotFoundError(".result-value");
                this.init();
                this.input.addEventListener("input", (() => {
                    sanitizeNumberInput(this.input);
                }));
                this.input.addEventListener("blur", (() => {
                    emptyNumberInputCheck(this.input);
                    sanitizeNumberInput(this.input);
                    replaceTrailingPeriods(this.input);
                    if (0 === this.input.value.length) this.model.amount = parseFloat(preCheckInput(this.model.minAmount));
                    this.input.type = "number";
                    this.input.min = preCheckInput(this.model.minAmount);
                    const newAmount = parseFloat(preCheckInput(this.input.value));
                    if (newAmount < this.model.minAmount) {
                        this.model.amount = this.model.minAmount;
                        this.input.value = preCheckInput(this.model.amount);
                    } else this.model.amount = newAmount;
                    this.resultValue.value = getCurrencyResultValue(this.model);
                }));
                this.input.addEventListener("focus", (() => {
                    this.input.removeAttribute("min");
                    this.input.step = "any";
                }));
                this.currencyListener = this.currencyListener.bind(this);
                this.amountListener = this.amountListener.bind(this);
                this.allCurrenciesListener = this.allCurrenciesListener.bind(this);
                this.model.addEventListener("updateCurrency", this.currencyListener);
                this.model.addEventListener("updateAmount", this.amountListener);
                this.model.addEventListener("updateAllCurrencies", this.allCurrenciesListener);
            }
            init() {
                this.currencyListener(this.model.currency);
                this.amountListener({
                    amount: this.model.amount
                });
                this.allCurrenciesListener(this.model.allCurrencies);
            }
            currencyListener(currency) {
                this.value.innerHTML = "";
                this.value.appendChild(document.createTextNode(currency.short));
                this.hiddenInput.value = currency.short;
                this.resultValue.value = getCurrencyResultValue(this.model);
                this.input.type = "number";
                this.input.min = preCheckInput(this.model.minAmount);
                this.amountListener({
                    amount: this.model.amount
                });
            }
            amountListener({amount}) {
                this.input.value = preCheckInput(amount);
                this.resultValue.value = getCurrencyResultValue(this.model);
            }
            allCurrenciesListener(allCurrencies) {
                this.list.innerHTML = "";
                allCurrencies.forEach((crypto => {
                    const {short} = crypto;
                    const liEl = jquery("<li>").addClass("field-select__item");
                    liEl.append(htmlEncode(short));
                    liEl.on("click", (() => {
                        this.model.currency = crypto;
                    }));
                    this.list.appendChild(liEl.get(0));
                }));
            }
        }
        const you_send = YouSendView;
        const minAmountUsdt = 150;
        const usdt_usdt = {
            id: "usdt",
            name: "USDT",
            short: "USDT",
            price: 1,
            change: 0
        };
        class YouSend {
            constructor(currency, amount, allCurrencies) {
                util_throwIfNotACurrency(currency);
                throwIfNotANumber(amount);
                throwIfNotArrayOfCurrencies(allCurrencies);
                this.crypto = currency;
                this.value = amount * this.crypto.price;
                this.cryptos = allCurrencies;
                this.currencyUpdateListeners = [];
                this.amountUpdateListeners = [];
                this.allCurrenciesUpdateListeners = [];
            }
            addEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                switch (event) {
                  case "updateCurrency":
                    this.currencyUpdateListeners.push(callback);
                    break;

                  case "updateAmount":
                    this.amountUpdateListeners.push(callback);
                    break;

                  case "updateAllCurrencies":
                    this.allCurrenciesUpdateListeners.push(callback);
                    break;

                  default:
                    throw new UnknownEventError(event);
                }
            }
            removeEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                let targetArr = null;
                switch (event) {
                  case "updateCurrency":
                    targetArr = this.currencyUpdateListeners;
                    break;

                  case "updateAmount":
                    targetArr = this.amountUpdateListeners;
                    break;

                  case "updateAllCurrencies":
                    targetArr = this.allCurrenciesUpdateListeners;
                    break;

                  default:
                    throw new UnknownEventError(event);
                }
                if (!Array.isArray(targetArr)) throw new Error("Unexpected error. No array of listeners matched.");
                const idx = targetArr.indexOf(callback);
                if (-1 === idx) throw new Error("Model does not have provided listener added.");
                targetArr.splice(idx, 1);
            }
            get currency() {
                return this.crypto;
            }
            get amount() {
                return this.value / this.currency.price;
            }
            get amountUsdt() {
                return this.value;
            }
            get minAmount() {
                return minAmountUsdt / this.currency.price;
            }
            get allCurrencies() {
                return this.cryptos.filter((c => c.id !== this.currency.id));
            }
            set currency(currency) {
                util_throwIfNotACurrency(currency);
                if (currency.id !== this.crypto.id) {
                    this.crypto = currency;
                    this.currencyUpdateListeners.forEach((callback => callback(this.crypto)));
                }
            }
            set amount(amount) {
                throwIfNotANumber(amount);
                if (this.amount !== amount) {
                    this.value = amount * this.currency.price;
                    this.amountUpdateListeners.forEach((callback => callback({
                        amount: this.amount,
                        amountUsdt: this.amountUsdt
                    })));
                }
            }
            set amountUsdt(amountUsdt) {
                throwIfNotANumber(amountUsdt);
                if (this.amountUsdt !== amountUsdt) {
                    this.value = amountUsdt;
                    this.amountUpdateListeners.forEach((callback => callback({
                        amount: this.amount,
                        amountUsdt: this.amountUsdt
                    })));
                }
            }
            set allCurrencies(allCurrencies) {
                throwIfNotArrayOfCurrencies(allCurrencies);
                this.cryptos = allCurrencies;
                if (!this.cryptos.some((c => this.currency.id === c.id))) this.currency = this.cryptos[0];
                this.allCurrenciesUpdateListeners.forEach((callback => callback(this.cryptos)));
            }
        }
        const model_you_send = YouSend;
        class YouReceiveView {
            constructor(youReceiveModel, formElement) {
                if (!(youReceiveModel instanceof model_you_receive)) throw new TypeError("Expected youReceiveModel to be YouReceiveModel");
                this.model = youReceiveModel;
                if (!(formElement instanceof Element)) throw new ElementNotFoundError(exFormId);
                this.group = formElement.querySelector(".receive");
                if (!(this.group instanceof Element)) throw new ElementNotFoundError(".receive");
                this.select = this.group.querySelector(".select");
                if (!(this.select instanceof Element)) throw new ElementNotFoundError(".select");
                this.list = this.select.querySelector(".field-select__list");
                this.value = this.select.querySelector(".field-select__value");
                this.input = this.select.querySelector(".field-input");
                this.hiddenInput = this.select.querySelector(".field-select__input");
                this.resultValue = this.group.querySelector(".result-value");
                if (!(this.list instanceof Element)) throw new ElementNotFoundError(".field-select__list");
                if (!(this.value instanceof Element)) throw new ElementNotFoundError(".field-select__value");
                if (!(this.input instanceof Element)) throw new ElementNotFoundError(".field-input");
                if (!(this.hiddenInput instanceof Element)) throw new ElementNotFoundError(".field-select__input");
                if (!(this.resultValue instanceof Element)) throw new ElementNotFoundError(".result-value");
                this.init();
                this.input.addEventListener("input", (() => {
                    sanitizeNumberInput(this.input);
                }));
                this.input.addEventListener("blur", (() => {
                    emptyNumberInputCheck(this.input);
                    sanitizeNumberInput(this.input);
                    replaceTrailingPeriods(this.input);
                    if (0 === this.input.value.length) this.model.amount = parseFloat(preCheckInput(this.model.minAmount));
                    this.input.type = "number";
                    this.input.min = preCheckInput(this.model.minAmount);
                    const newAmount = parseFloat(preCheckInput(this.input.value));
                    if (newAmount < this.model.minAmount) {
                        this.model.amount = this.model.minAmount;
                        this.input.value = preCheckInput(this.model.amount);
                    } else this.model.amount = newAmount;
                    this.resultValue.value = getCurrencyResultValue(this.model);
                }));
                this.input.addEventListener("focus", (() => {
                    this.input.removeAttribute("min");
                    this.input.step = "any";
                }));
                this.currencyListener = this.currencyListener.bind(this);
                this.amountListener = this.amountListener.bind(this);
                this.allCurrenciesListener = this.allCurrenciesListener.bind(this);
                this.model.addEventListener("updateCurrency", this.currencyListener);
                this.model.addEventListener("updateAmount", this.amountListener);
                this.model.addEventListener("updateAllCurrencies", this.allCurrenciesListener);
            }
            init() {
                this.currencyListener(this.model.currency);
                this.amountListener({
                    amount: this.model.amount
                });
                this.allCurrenciesListener(this.model.allCurrencies);
            }
            currencyListener(currency) {
                this.value.innerHTML = "";
                this.value.appendChild(document.createTextNode(currency.short));
                this.hiddenInput.value = currency.short;
                this.resultValue.value = getCurrencyResultValue(this.model);
                this.input.type = "number";
                this.input.min = preCheckInput(this.model.minAmount);
                this.amountListener({
                    amount: this.model.amount
                });
            }
            amountListener({amount}) {
                this.input.value = preCheckInput(amount);
                this.resultValue.value = getCurrencyResultValue(this.model);
            }
            allCurrenciesListener(allCurrencies) {
                this.list.innerHTML = "";
                allCurrencies.forEach((crypto => {
                    const {short} = crypto;
                    const liEl = jquery("<li>").addClass("field-select__item");
                    liEl.append(htmlEncode(short));
                    liEl.on("click", (() => {
                        this.model.currency = crypto;
                    }));
                    this.list.appendChild(liEl.get(0));
                }));
            }
        }
        const you_receive = YouReceiveView;
        class YouReceive {
            constructor(currency, amount, allCurrencies) {
                util_throwIfNotACurrency(currency);
                throwIfNotANumber(amount);
                throwIfNotArrayOfCurrencies(allCurrencies);
                this.crypto = currency;
                this.value = amount * this.crypto.price;
                this.cryptos = allCurrencies;
                this.currencyUpdateListeners = [];
                this.amountUpdateListeners = [];
                this.allCurrenciesUpdateListeners = [];
            }
            addEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                switch (event) {
                  case "updateCurrency":
                    this.currencyUpdateListeners.push(callback);
                    break;

                  case "updateAmount":
                    this.amountUpdateListeners.push(callback);
                    break;

                  case "updateAllCurrencies":
                    this.allCurrenciesUpdateListeners.push(callback);
                    break;

                  default:
                    throw new UnknownEventError(event);
                }
            }
            removeEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                let targetArr = null;
                switch (event) {
                  case "updateCurrency":
                    targetArr = this.currencyUpdateListeners;
                    break;

                  case "updateAmount":
                    targetArr = this.amountUpdateListeners;
                    break;

                  case "updateAllCurrencies":
                    targetArr = this.allCurrenciesUpdateListeners;
                    break;

                  default:
                    throw new UnknownEventError(event);
                }
                if (!Array.isArray(targetArr)) throw new Error("Unexpected error. No array of listeners matched.");
                const idx = targetArr.indexOf(callback);
                if (-1 === idx) throw new Error("Model does not have provided listener added.");
                targetArr.splice(idx, 1);
            }
            get currency() {
                return this.crypto;
            }
            get amount() {
                return this.value / this.currency.price;
            }
            get amountUsdt() {
                return this.value;
            }
            get minAmount() {
                return minAmountUsdt / this.currency.price;
            }
            get allCurrencies() {
                return this.cryptos.filter((c => c.id !== this.currency.id));
            }
            set currency(currency) {
                util_throwIfNotACurrency(currency);
                if (currency.id !== this.crypto.id) {
                    this.crypto = currency;
                    this.currencyUpdateListeners.forEach((callback => callback(this.crypto)));
                }
            }
            set amount(amount) {
                throwIfNotANumber(amount);
                if (this.amount !== amount) {
                    this.value = amount * this.currency.price;
                    this.amountUpdateListeners.forEach((callback => callback({
                        amount: this.amount,
                        amountUsdt: this.amountUsdt
                    })));
                }
            }
            set amountUsdt(amountUsdt) {
                throwIfNotANumber(amountUsdt);
                if (this.amountUsdt !== amountUsdt) {
                    this.value = amountUsdt;
                    this.amountUpdateListeners.forEach((callback => callback({
                        amount: this.amount,
                        amountUsdt: this.amountUsdt
                    })));
                }
            }
            set allCurrencies(allCurrencies) {
                throwIfNotArrayOfCurrencies(allCurrencies);
                this.cryptos = allCurrencies;
                if (!this.cryptos.some((c => this.currency.id === c.id))) this.currency = this.cryptos[0];
                this.allCurrenciesUpdateListeners.forEach((callback => callback(this.cryptos)));
            }
        }
        const model_you_receive = YouReceive;
        class YouSendReceive {
            constructor(youSendModel, youReceiveModel, allCurrencies) {
                if (!(youSendModel instanceof model_you_send)) throw new TypeError("Expected youSendModel to be YouSendModel");
                if (!(youReceiveModel instanceof model_you_receive)) throw new TypeError("Expected youReceiveModel to be YouReceiveModel");
                throwIfNotArrayOfCurrencies(allCurrencies);
                this.youSendModel = youSendModel;
                this.youReceiveModel = youReceiveModel;
                this.cryptos = allCurrencies;
                this.allCurrenciesUpdateListeners = [];
                this.swapListeners = [];
                this.updateAllCurrenciesDownstream();
                this.youSendModelUpdateCurrencyListener = this.youSendModelUpdateCurrencyListener.bind(this);
                this.youSendModelUpdateAmountListener = this.youSendModelUpdateAmountListener.bind(this);
                this.youReceiveModelUpdateCurrencyListener = this.youReceiveModelUpdateCurrencyListener.bind(this);
                this.youReceiveModelUpdateAmountListener = this.youReceiveModelUpdateAmountListener.bind(this);
                this.attachListeners();
            }
            attachListeners() {
                this.youSendModel.addEventListener("updateCurrency", this.youSendModelUpdateCurrencyListener);
                this.youSendModel.addEventListener("updateAmount", this.youSendModelUpdateAmountListener);
                this.youReceiveModel.addEventListener("updateCurrency", this.youReceiveModelUpdateCurrencyListener);
                this.youReceiveModel.addEventListener("updateAmount", this.youReceiveModelUpdateAmountListener);
            }
            detachListeners() {
                this.youSendModel.removeEventListener("updateCurrency", this.youSendModelUpdateCurrencyListener);
                this.youSendModel.removeEventListener("updateAmount", this.youSendModelUpdateAmountListener);
                this.youReceiveModel.removeEventListener("updateCurrency", this.youReceiveModelUpdateCurrencyListener);
                this.youReceiveModel.removeEventListener("updateAmount", this.youReceiveModelUpdateAmountListener);
            }
            youSendModelUpdateCurrencyListener(currency) {
                this.youReceiveModel.allCurrencies = this.cryptos.filter((c => c.id !== currency.id));
            }
            youSendModelUpdateAmountListener({amountUsdt}) {
                throwIfNotANumber(amountUsdt);
                if (this.youReceiveModel.amountUsdt !== amountUsdt) this.youReceiveModel.amountUsdt = amountUsdt;
            }
            youReceiveModelUpdateCurrencyListener(currency) {
                this.youSendModel.allCurrencies = this.cryptos.filter((c => c.id !== currency.id));
            }
            youReceiveModelUpdateAmountListener({amountUsdt}) {
                throwIfNotANumber(amountUsdt);
                if (this.youSendModel.amountUsdt !== amountUsdt) this.youSendModel.amountUsdt = amountUsdt;
            }
            updateAllCurrenciesDownstream() {
                this.youReceiveModel.allCurrencies = this.cryptos.filter((c => c.id !== this.youSendModel.currency.id));
                this.youSendModel.allCurrencies = this.cryptos.filter((c => c.id !== this.youReceiveModel.currency.id));
            }
            get allCurrencies() {
                return this.cryptos;
            }
            set allCurrencies(allCurrencies) {
                throwIfNotArrayOfCurrencies(allCurrencies);
                this.cryptos = allCurrencies;
                this.updateAllCurrenciesDownstream();
                this.allCurrenciesUpdateListeners.forEach((callback => callback(this.cryptos)));
            }
            addEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                switch (event) {
                  case "swap":
                    this.swapListeners.push(callback);
                    break;

                  case "updateAllCurrencies":
                    this.allCurrenciesUpdateListeners.push(callback);
                    break;

                  default:
                    throw new UnknownEventError(event);
                }
            }
            removeEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                let targetArr = null;
                switch (event) {
                  case "swap":
                    targetArr = this.swapListeners;
                    break;

                  case "updateAllCurrencies":
                    targetArr = this.allCurrenciesUpdateListeners;
                    break;

                  default:
                    throw new UnknownEventError(event);
                }
                if (!Array.isArray(targetArr)) throw new Error("Unexpected error. No array of listeners matched.");
                const idx = targetArr.indexOf(callback);
                if (-1 === idx) throw new Error("Model does not have provided listener added.");
                targetArr.splice(idx, 1);
            }
            swap() {
                const [sendCurrency, receiveCurrency] = [ this.youSendModel.currency, this.youReceiveModel.currency ].reverse();
                const [sendAmountUsdt, receiveAmountUsdt] = [ this.youSendModel.amountUsdt, this.youReceiveModel.amountUsdt ].reverse();
                this.detachListeners();
                this.youSendModel.currency = sendCurrency;
                this.youSendModel.amountUsdt = sendAmountUsdt;
                this.youReceiveModel.currency = receiveCurrency;
                this.youReceiveModel.amountUsdt = receiveAmountUsdt;
                this.attachListeners();
                this.swapListeners.forEach((callback => callback([ sendCurrency, receiveCurrency ])));
            }
        }
        const send_receive = YouSendReceive;
        class YouSendReceiveView {
            constructor(youSendReceiveModel, formElement) {
                if (!(youSendReceiveModel instanceof send_receive)) throw new TypeError("Expected youSendReceiveModel to be YouSendReceiveModel");
                this.model = youSendReceiveModel;
                if (!(formElement instanceof Element)) throw new ElementNotFoundError(exFormId);
                this.group = formElement.querySelector(".reverse");
                if (!(this.group instanceof Element)) throw new ElementNotFoundError(".reverse");
                this.swap = this.group.querySelector(".reverse-btn");
                if (!(this.swap instanceof Element)) throw new ElementNotFoundError(".reverse-btn");
                this.youSendView = new you_send(this.model.youSendModel, formElement);
                this.youReceiveView = new you_receive(this.model.youReceiveModel, formElement);
                this.swap.addEventListener("click", (() => {
                    this.model.swap();
                }));
            }
        }
        const views_send_receive = YouSendReceiveView;
        class CurrencyView {
            constructor(currencyModel, formElement) {
                if (!(currencyModel instanceof model_currency)) throw new TypeError("Expected currencyModel to be CurrencyModel");
                this.model = currencyModel;
                if (!(formElement instanceof Element)) throw new ElementNotFoundError(exFormId);
                this.group = formElement.querySelector(".currency");
                if (!(this.group instanceof Element)) throw new ElementNotFoundError(".currency");
                this.select = this.group.querySelector(".field-select");
                if (!(this.select instanceof Element)) throw new ElementNotFoundError(".field-select");
                this.attention = this.group.querySelector(".field-attention");
                if (!(this.attention instanceof Element)) throw new ElementNotFoundError(".field-attention");
                this.fieldText = formElement.querySelector(".field-text");
                if (!(this.fieldText instanceof Element)) throw new ElementNotFoundError(".field-text");
                this.value = this.select.querySelector(".field-select__value");
                this.list = this.select.querySelector(".field-select__list");
                this.hiddenInput = this.select.querySelector(".field-select__input");
                if (!(this.value instanceof Element)) throw new ElementNotFoundError(".field-select__value");
                if (!(this.list instanceof Element)) throw new ElementNotFoundError(".field-select__list");
                if (!(this.hiddenInput instanceof Element)) throw new ElementNotFoundError(".field-select__input");
                this.youSendReceiveView = new views_send_receive(this.model.youSendReceiveModel, formElement);
                this.currencyPairListener = this.currencyPairListener.bind(this);
                this.allCurrencyPairsListener = this.allCurrencyPairsListener.bind(this);
                this.updateFieldText = this.updateFieldText.bind(this);
                this.init();
                this.model.addEventListener("updateCurrencyPair", this.currencyPairListener);
                this.model.addEventListener("updateAllCurrencyPairs", this.allCurrencyPairsListener);
                this.youSendReceiveView.model.youSendModel.addEventListener("updateAmount", this.updateFieldText);
                this.youSendReceiveView.model.youSendModel.addEventListener("updateCurrency", this.updateFieldText);
                this.youSendReceiveView.model.youReceiveModel.addEventListener("updateAmount", this.updateFieldText);
                this.youSendReceiveView.model.youReceiveModel.addEventListener("updateCurrency", this.updateFieldText);
            }
            init() {
                this.currencyPairListener(this.model.currencyPair);
                this.allCurrencyPairsListener(this.model.allCurrencyPairs);
                this.updateFieldText();
            }
            updateFieldText() {
                const youSendModel = this.youSendReceiveView.model.youSendModel;
                const youReceiveModel = this.youSendReceiveView.model.youReceiveModel;
                const text = getFieldText(youSendModel, youReceiveModel);
                this.fieldText.innerHTML = text;
            }
            currencyPairListener(currencyPair) {
                const pairName = getCurrencyPairName(currencyPair);
                this.value.innerHTML = "";
                this.value.appendChild(document.createTextNode(pairName));
                this.hiddenInput.value = pairName;
                this.attention.innerHTML = "";
                this.attention.appendChild(document.createTextNode(getCurrencyAttention(this.model.currencyPair)));
            }
            allCurrencyPairsListener(allCurrencyPairs) {
                this.list.innerHTML = "";
                allCurrencyPairs.forEach((pair => {
                    const pairName = getCurrencyPairName(pair);
                    const liEl = jquery("<li>").addClass("field-select__item");
                    liEl.append(htmlEncode(pairName));
                    liEl.on("click", (() => {
                        this.model.currencyPair = pair;
                    }));
                    this.list.appendChild(liEl.get(0));
                }));
            }
        }
        const currency = CurrencyView;
        class Currency {
            constructor(currencyPair, youSendReceiveModel, allCurrencyPairs) {
                throwIfNotPairOfCurrencies(currencyPair);
                if (!(youSendReceiveModel instanceof send_receive)) throw new TypeError("Expected youSendReceiveModel to be YouSendReceiveModel");
                throwIfNotArrayOfCurrencyPairs(allCurrencyPairs);
                this.pair = currencyPair;
                this.youSendReceiveModel = youSendReceiveModel;
                this.cryptoPairs = allCurrencyPairs;
                this.currencyPairUpdateListeners = [];
                this.allCurrencyPairsUpdateListeners = [];
                this.updateCurrencyPairDownstream();
                this.swapListener = this.swapListener.bind(this);
                this.youSendUpdateCurrencyListener = this.youSendUpdateCurrencyListener.bind(this);
                this.youReceiveUpdateCurrencyListener = this.youReceiveUpdateCurrencyListener.bind(this);
                this.youSendReceiveModel.addEventListener("swap", this.swapListener);
                this.attachListeners();
            }
            attachListeners() {
                this.youSendReceiveModel.youSendModel.addEventListener("updateCurrency", this.youSendUpdateCurrencyListener);
                this.youSendReceiveModel.youReceiveModel.addEventListener("updateCurrency", this.youReceiveUpdateCurrencyListener);
            }
            detachListeners() {
                this.youSendReceiveModel.youSendModel.removeEventListener("updateCurrency", this.youSendUpdateCurrencyListener);
                this.youSendReceiveModel.youReceiveModel.removeEventListener("updateCurrency", this.youReceiveUpdateCurrencyListener);
            }
            refreshListeners() {
                this.detachListeners();
                this.attachListeners();
            }
            swapListener([sendCurrency, receiveCurrency]) {
                util_throwIfNotACurrency(sendCurrency);
                util_throwIfNotACurrency(receiveCurrency);
                this.detachListeners();
                this.currencyPair = [ sendCurrency, receiveCurrency ];
                throwIfNotPairOfCurrencies(this.currencyPair);
                this.attachListeners();
            }
            youSendUpdateCurrencyListener(currency) {
                util_throwIfNotACurrency(currency);
                const [_, receiveCurrency] = this.currencyPair;
                this.currencyPair = [ currency, receiveCurrency ];
                throwIfNotPairOfCurrencies(this.currencyPair);
            }
            youReceiveUpdateCurrencyListener(currency) {
                util_throwIfNotACurrency(currency);
                const [sendCurrency] = this.currencyPair;
                this.currencyPair = [ sendCurrency, currency ];
                throwIfNotPairOfCurrencies(this.currencyPair);
            }
            addEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                switch (event) {
                  case "updateCurrencyPair":
                    this.currencyPairUpdateListeners.push(callback);
                    break;

                  case "updateAllCurrencyPairs":
                    this.allCurrencyPairsUpdateListeners.push(callback);
                    break;

                  default:
                    throw new UnknownEventError(event);
                }
            }
            removeEventListener(event, callback) {
                util_throwIfNotAString(event);
                throwIfNotAFunction(callback);
                let targetArr = null;
                switch (event) {
                  case "updateCurrencyPair":
                    targetArr = this.currencyPairUpdateListeners;
                    break;

                  case "updateAllCurrencyPairs":
                    targetArr = this.allCurrencyPairsUpdateListeners;

                  default:
                    throw new UnknownEventError(event);
                }
                if (!Array.isArray(targetArr)) throw new Error("Unexpected error. No array of listeners matched.");
                const idx = targetArr.indexOf(callback);
                if (-1 === idx) throw new Error("Model does not have provided listener added.");
                targetArr.splice(idx, 1);
            }
            updateCurrencyPairDownstream() {
                const [sendCurrency, receiveCurrency] = this.currencyPair;
                const youSendModel = this.youSendReceiveModel.youSendModel;
                const youReceiveModel = this.youSendReceiveModel.youReceiveModel;
                const [sendAmountUsdt, receiveAmountUsdt] = [ youSendModel.amountUsdt, youReceiveModel.amountUsdt ];
                youSendModel.currency = sendCurrency;
                youReceiveModel.currency = receiveCurrency;
                youSendModel.amountUsdt = sendAmountUsdt;
                youReceiveModel.amountUsdt = receiveAmountUsdt;
            }
            get currencyPair() {
                return this.pair;
            }
            get allCurrencyPairs() {
                return this.cryptoPairs;
            }
            set currencyPair(currencyPair) {
                throwIfNotPairOfCurrencies(currencyPair);
                this.pair = currencyPair;
                this.updateCurrencyPairDownstream();
                this.currencyPairUpdateListeners.forEach((callback => callback(this.pair)));
            }
            set allCurrencyPairs(allCurrencyPairs) {
                throwIfNotArrayOfCurrencyPairs(allCurrencyPairs);
                this.cryptoPairs = allCurrencyPairs;
                this.allCurrencyPairsUpdateListeners.forEach((callback => callback(this.cryptoPairs)));
            }
        }
        const model_currency = Currency;
        const requireNonEmptyArray = true;
        function isCurrency(currency) {
            return "object" === typeof currency && "id" in currency && "string" === typeof currency.id && "name" in currency && "string" === typeof currency.name && "short" in currency && "string" === typeof currency.short && "price" in currency && "number" === typeof currency.price && "change" in currency && "number" === typeof currency.change;
        }
        function isPartialCurrency(currencyPartial) {
            return "object" === typeof currencyPartial && "id" in currencyPartial && "string" === typeof currencyPartial.id && "name" in currencyPartial && "string" === typeof currencyPartial.name && "short" in currencyPartial && "string" === typeof currencyPartial.short;
        }
        function isArrayOfCurrencies(currencies) {
            if (requireNonEmptyArray) return Array.isArray(currencies) && currencies.length > 0 && currencies.every((c => isCurrency(c)));
            return Array.isArray(currencies) && currencies.every((c => isCurrency(c)));
        }
        function isCurrencyPair(currencyPair) {
            return isArrayOfCurrencies(currencyPair) && 2 === currencyPair.length;
        }
        function isArrayOfCurrencyPairs(currencyPairs) {
            if (requireNonEmptyArray) return Array.isArray(currencyPairs) && currencyPairs.length > 0 && currencyPairs.every((pair => isCurrencyPair(pair)));
            return Array.isArray(currencyPairs) && currencyPairs.every((pair => isCurrencyPair(pair)));
        }
        function throwIfNot(obj, pred, message) {
            if (!("string" === typeof message || message instanceof String)) throw new TypeError("Expected string to be a string.");
            if (!(pred instanceof Function)) throw new TypeError("Expected pred to be a Function.");
            if (true !== pred(obj)) throw new Error(message);
        }
        function util_throwIfNotACurrency(currency) {
            throwIfNot(currency, isCurrency, "Expected currency to be a currency.");
        }
        function throwIfNotAPartialCurrency(currencyPartial) {
            throwIfNot(currencyPartial, isPartialCurrency, "Expected currencyPartial to be a currencyPartial.");
        }
        function throwIfNotArrayOfCurrencies(currencies) {
            throwIfNot(currencies, (arr => isArrayOfCurrencies(arr)), "Expected currencies to be array of currencies.");
        }
        function throwIfNotPairOfCurrencies(currencyPair) {
            throwIfNot(currencyPair, (arr => isCurrencyPair(arr)), "Expected currencyPair to be a pair of currencies (length = 2).");
        }
        function throwIfNotArrayOfCurrencyPairs(currencyPairs) {
            throwIfNot(currencyPairs, (arr => isArrayOfCurrencyPairs(arr)), "Expected currencyPairs to be Array with currency pairs.");
        }
        function throwIfNotANumber(number) {
            throwIfNot(number, (number => "number" === typeof number && !Number.isNaN(number)), `Expected number to be a number. Got: ${typeof number} with value ${number}`);
        }
        function util_throwIfNotAString(string) {
            throwIfNot(string, (string => "string" === typeof string || string instanceof String), "Expected string to be a string.");
        }
        function throwIfNotAFunction(fun) {
            throwIfNot(fun, (f => f instanceof Function), "Expected fun to be a Function.");
        }
        class UnknownEventError extends TypeError {
            constructor(eventName) {
                super(`Unknown Event: ${eventName}`);
                this.name = "Unknown Event Error";
            }
        }
        function createCurrencyPairs(currencies) {
            throwIfNotArrayOfCurrencies(currencies);
            const pairsArr = [];
            for (let i = 0; i < currencies.length; i += 1) for (let j = 0; j < currencies.length; j += 1) if (currencies[i].id !== currencies[j].id) pairsArr.push([ currencies[i], currencies[j] ]);
            throwIfNotArrayOfCurrencyPairs(pairsArr);
            return pairsArr;
        }
        const exFormId = "#ex-form";
        const separator = " | ";
        function htmlEncode(text) {
            util_throwIfNotAString(text);
            return jquery("<div />").text(text).html();
        }
        function getCurrencyPairName(currencyPair) {
            throwIfNotPairOfCurrencies(currencyPair);
            const [sendCurrency, receiveCurrency] = currencyPair;
            return `${sendCurrency.name}${separator}${receiveCurrency.name}`;
        }
        function getCurrencyAttention(currencyPair) {
            throwIfNotPairOfCurrencies(currencyPair);
            const [sendCurrency, receiveCurrency] = currencyPair;
            const {short: sendShort, price: sendPrice} = sendCurrency;
            const {short: receiveShort, price: receivePrice} = receiveCurrency;
            return `Minimum ${preCheckInput(minAmountUsdt / sendPrice)} ${sendShort} (${preCheckInput(minAmountUsdt / receivePrice)} ${receiveShort})`;
        }
        function getFieldText(youSendModel, youReceiveModel) {
            if (!(youSendModel instanceof model_you_send)) throw new TypeError("Expected youSendModel to be YouSendModel.");
            if (!(youReceiveModel instanceof model_you_receive)) throw new TypeError("Expected youReceiveModel to be YouReceiveModel.");
            const {currency: youSendCrypto, amount: youSendAmount} = youSendModel;
            const {currency: youReceiveCrypto, amount: youReceiveAmount} = youReceiveModel;
            return `Send <span >${preCheckInput(youSendAmount)} ${youSendCrypto.short}</span> to this address/card and we will send you <span>${preCheckInput(youReceiveAmount)} ${youReceiveCrypto.short}.</span> Then click the button <span>“I send”</span>`;
        }
        class ElementNotFoundError extends Error {
            constructor(elementName) {
                super(`Unable to locate ${elementName} element.`);
                this.name = "Element Not Found Error";
            }
        }
        function getCurrencyResultValue(model) {
            if (!(model instanceof model_you_send || model instanceof model_you_receive)) throw new TypeError("Expected model to be either YouSendModel or YouReceiveModel.");
            return `${preCheckInput(model.amount)}${separator}${model.currency.short}`;
        }
        function replaceMultipleOfCharWithFirst(text, char) {
            if (!("string" === typeof text || text instanceof String)) throw new TypeError("Expected text to be a string.");
            if (!("string" === typeof char || char instanceof String)) throw new TypeError("Expected char to be a string.");
            if (1 !== char.length) throw new Error("Expected char to have length === 1");
            let count = 0;
            let result = [];
            for (let i = 0; i < text.length; i += 1) if (text[i] === char) {
                count += 1;
                if (1 === count) result.push(text[i]);
            } else result.push(text[i]);
            return result.join("");
        }
        function sanitizeNumberInput(input) {
            if (!(input instanceof HTMLInputElement)) throw new TypeError("Expected input to be HTMLInputElement");
            if ("number" === input.type) {
                const comman = /,/g;
                const pattern = /[^0-9\.]/g;
                input.value = input.value.replace(comman, ".");
                input.value = input.value.replace(pattern, "");
                input.value = replaceMultipleOfCharWithFirst(input.value, ".");
            }
        }
        function replaceTrailingPeriods(input) {
            if (!(input instanceof HTMLInputElement)) throw new TypeError("Expected input to be HTMLInputElement");
            if ("number" === input.type) {
                const leadingPeriod = /^\./g;
                input.value = input.value.replace(leadingPeriod, "0.");
                const trailingPeriod = /\.$/g;
                input.value = input.value.replace(trailingPeriod, ".0");
            }
        }
        function emptyNumberInputCheck(input) {
            if (!(input instanceof HTMLInputElement)) throw new TypeError("Expected input to be HTMLInputElement");
            if ("number" === input.type) {
                input.type = "text";
                if (0 === input.value.length) input.value = "0";
                input.type = "number";
            }
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
        const currencyFactors = [ {
            id: "solana",
            factor: .9
        } ];
        const cryptocurrencies = [ {
            id: "bitcoin",
            name: "Bitcoin",
            short: "BTC"
        }, {
            id: "ethereum",
            name: "Ethereum",
            short: "ETH"
        }, {
            id: "binancecoin",
            name: "Binance coin",
            short: "BNB"
        }, {
            id: "solana",
            name: "Solana",
            short: "SOL"
        }, {
            id: "polkadot",
            name: "Polkadot",
            short: "DOT"
        }, {
            id: "matic-network",
            name: "Matic",
            short: "MATIC"
        }, {
            id: "near",
            name: "Near",
            short: "NEAR"
        }, {
            id: "cardano",
            name: "Cardano",
            short: "ADA"
        }, {
            id: "ethereum-classic",
            name: "Ethereum Classic",
            short: "ETC"
        }, {
            id: "1tronic",
            name: "TRON",
            short: "TRX"
        }, {
            id: "doge-token",
            name: "Dogecoin",
            short: "DOGE"
        }, {
            id: "shiba-inu",
            name: "Shiba Inu",
            short: "SHIB"
        }, {
            id: "avalanche-2",
            name: "Avalanche",
            short: "AVAX"
        }, {
            id: "litecoin",
            name: "Litecoin",
            short: "LTC"
        }, {
            id: "usdc",
            name: "USD Coin",
            short: "USDC"
        } ];
        function getCryptoSymbol(currencyPartial) {
            throwIfNotAPartialCurrency(currencyPartial);
            return currencyPartial.short + usdt_usdt.short;
        }
        const symbolsArr = cryptocurrencies.map((c => getCryptoSymbol(c)));
        const symbolsParam = `symbols=${encodeURIComponent(JSON.stringify(symbolsArr))}`;
        const tickerUrl = `https://api.binance.com/api/v3/ticker/price?${symbolsParam}`;
        const changeUrl = `https://api.binance.com/api/v3/ticker/24hr?${symbolsParam}`;
        const settings = {
            async: true,
            scrossDomain: true,
            method: "GET",
            headers: {}
        };
        function findCurrencyFactor(crypto) {
            if ("object" !== typeof crypto) throw new TypeError(`Expected crypto to be an object. Got ${typeof crypto}`);
            if (!("id" in crypto)) throw new TypeError("Expected crypto.id to be defined");
            util_throwIfNotAString(crypto.id);
            const factorObj = currencyFactors.find((c => c.id === crypto.id));
            if ("object" === typeof factorObj && "factor" in factorObj && "number" === typeof factorObj.factor) {
                const {factor} = factorObj;
                if (factor < 0) throw new Error(`Expected factor to be non-negative. Got factor ${factor} for cryptoId ${crypto.id}`);
                return factor;
            }
            return 1;
        }
        function isCurrencyPartialArray(cryptos) {
            return Array.isArray(cryptos) && cryptos.every((c => isPartialCurrency(c)));
        }
        function validateCryptosParam(cryptos) {
            const isDefined = isCurrencyPartialArray(cryptos);
            const isValid = "undefined" === typeof cryptos || null === cryptos || isCurrencyPartialArray(cryptos);
            return {
                isValid,
                isDefined
            };
        }
        const cryptoPriceValidator = {
            isValid: response => Array.isArray(response) && response.every((responseDataItem => "object" === typeof responseDataItem && "symbol" in responseDataItem && "price" in responseDataItem && "string" === typeof responseDataItem.symbol && "string" === typeof responseDataItem.price)),
            notValidMessage: "Expected array of { symbol: string, price: string } objects."
        };
        const cryptoPriceChangeValidator = {
            isValid: response => Array.isArray(response) && response.every((responseDataItem => "object" === typeof responseDataItem && "symbol" in responseDataItem && "priceChange" in responseDataItem && "string" === typeof responseDataItem.symbol && "string" === typeof responseDataItem.priceChange)),
            notValidMessage: "Expected array of { symbol: string, priceChange: string } objects."
        };
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
                        throwIfNotANumber(price);
                        const currencyFactor = findCurrencyFactor(crypto);
                        throwIfNotANumber(currencyFactor);
                        price *= currencyFactor;
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
                        throwIfNotANumber(priceChange);
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
        function combineCurrencies(...cryptosArrays) {
            if (!(Array.isArray(cryptosArrays) && cryptosArrays.length >= 2)) throw new Error("Expcted cryptosArrays to be array with at least 2 arrays of currencyPartial.");
            const [firstCryptos, ...restCryptosArrays] = cryptosArrays;
            if (restCryptosArrays.some((restCryptos => restCryptos.length !== firstCryptos.length))) throw new Error("Expected all cryptosArrays to have same length.");
            let result = firstCryptos;
            restCryptosArrays.forEach((restCryptos => {
                restCryptos.forEach((crypto => {
                    const resultCryptoIndex = result.findIndex((c => c.id === crypto.id));
                    if (-1 === resultCryptoIndex) throw new Error(`Crypto with id: ${crypto.id} is missing in one of arrays.`);
                    result[resultCryptoIndex] = {
                        ...result[resultCryptoIndex],
                        ...crypto
                    };
                }));
            }));
            return result;
        }
        async function loadCryptos() {
            return new Promise((async (res, rej) => {
                Promise.all([ fetchChange(), fetchPrices() ]).then((cryptosArrays => {
                    const currencies = combineCurrencies(...cryptosArrays);
                    throwIfNotArrayOfCurrencies(currencies);
                    res(currencies);
                })).catch((err => rej(err)));
            }));
        }
        function preCheck(x) {
            if ("string" === typeof x || x instanceof String) x = parseFloat(x);
            if (x < 1e-4) return x.toFixed(8); else if (Math.floor(x) < 1e4) return x.toPrecision(4);
            return x.toString();
        }
        const showFirstNCryptocurrencies = 5;
        function createCryptoActions() {
            const changeButton = document.createElement("a");
            changeButton.href = "";
            changeButton.className = "button__change";
            const sellButton = document.createElement("a");
            sellButton.href = "";
            sellButton.className = "button__sell";
            sellButton.innerHTML = "Sell";
            const buyButton = document.createElement("a");
            buyButton.href = "";
            buyButton.className = "button__buy";
            buyButton.innerHTML = "Buy";
            const columActions = document.createElement("div");
            columActions.className = "colum__actions";
            columActions.append(changeButton, sellButton, buyButton);
            return columActions;
        }
        function createCryptocurrencyItem(crypto) {
            throwIfNotAPartialCurrency(crypto);
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
            throwIfNotAPartialCurrency(crypto);
            throwIfNotANumber(id);
            const colum = document.createElement("div");
            colum.className = "popular-currencies__colum colum";
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
        function addCryptocurrencies() {
            const popularCurrenciesContainer = document.querySelector(".popular-currencies__container");
            if (null === popularCurrenciesContainer) throw new ElementNotFoundError(".popular-currencies__container");
            const actionEl = popularCurrenciesContainer.querySelector(".popular-currencies__action");
            if (null === actionEl) throw new ElementNotFoundError(".popular-currencies__action");
            cryptocurrencies.forEach(((crypto, id) => {
                const cryptoEl = createCryptoElement(crypto, id);
                popularCurrenciesContainer.insertBefore(cryptoEl, actionEl);
            }));
        }
        const storageConfig = {
            tokenNames: {
                sendCrypto: "sendCrypto",
                receiveCrypto: "receiveCrypto"
            }
        };
        const storage = storageConfig;
        function preCheckChange(num) {
            return num.toFixed(2);
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
        function prependSignLiteral(num) {
            return `${mapSign(num)}${preCheckChange(num).replace(/-/g, "")}`;
        }
        function hideSpinner() {
            const preloader = document.querySelector(".preloader");
            document.body.classList.remove("lock-scroll");
            preloader.classList.remove("show");
            preloader.remove();
        }
        function homePageLoad() {
            addCryptocurrencies();
            const cryptocurrencies = document.getElementsByClassName("popular-currencies__colum");
            loadCryptos().then((cryptos => {
                [ ...cryptocurrencies ].forEach((cryptoEl => {
                    const priceEl = cryptoEl.querySelector(".colum__price");
                    const changeEl = cryptoEl.querySelector(".colum__change");
                    const crypto = cryptos.find((c => c.id === priceEl.id));
                    util_throwIfNotACurrency(crypto);
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
                hideSpinner();
            })).catch((e => {
                throw new Error(`Unable to load cryptocurrency data.\nUnderlying error:\n${e}`);
            }));
        }
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
                button.textContent = "See all cryptocurrencies";
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
                button.textContent = "Hide all currencies";
            }
        }
        function toggleCurrencies() {
            if (isShown) {
                hideCurrencies();
                return;
            }
            showCurrencies();
        }
        function remCheck() {
            const html = document.documentElement;
            const {fontSize} = window.getComputedStyle(html);
            if ("16px" !== fontSize) console.warn(`Warning! 1 rem !== 16px. Got: ${fontSize}`);
        }
        window.addEventListener("load", (() => {
            remCheck();
        }));
        let menuState = true;
        const menuBodyNavElements = document.querySelectorAll(".menu__body, .nav-plus-button");
        const iconMenu = document.querySelectorAll(".menu__icons > .icon-menu")[0];
        const header = document.getElementsByClassName("header")[0];
        function enableMenu() {
            menuState = true;
            header.classList.add("header__menu-active");
            [ ...menuBodyNavElements ].forEach((el => el.classList.remove("hidden")));
            iconMenu.classList.add("icon-menu__active");
        }
        function disableMenu() {
            menuState = false;
            header.classList.remove("header__menu-active");
            [ ...menuBodyNavElements ].forEach((el => el.classList.add("hidden")));
            iconMenu.classList.remove("icon-menu__active");
        }
        function toggleMenu() {
            if (menuState) disableMenu(); else enableMenu();
        }
        window.addEventListener("resize", (() => {
            remCheck();
        }));
        function changeSellBuyToExchangeRedirect() {
            const {localStorage} = window;
            const {sendCrypto, receiveCrypto} = storage.tokenNames;
            jquery(".button__change, .button__sell").each(((_, el) => {
                jquery(el).on("click", (() => {
                    const columnPriceEl = el.parentElement.parentElement.querySelector(".colum__price");
                    if (!(columnPriceEl instanceof Element)) throw new ElementNotFoundError(".colum__price");
                    const cryptoId = columnPriceEl.id;
                    localStorage.setItem(sendCrypto, cryptoId);
                }));
                jquery(el).attr("href", "./exchanger.html");
            }));
            jquery(".button__buy").each(((_, el) => {
                jquery(el).on("click", (() => {
                    const columnPriceEl = el.parentElement.parentElement.querySelector(".colum__price");
                    if (!(columnPriceEl instanceof Element)) throw new ElementNotFoundError(".colum__price");
                    const cryptoId = columnPriceEl.id;
                    localStorage.setItem(receiveCrypto, cryptoId);
                }));
                jquery(el).attr("href", "./exchanger.html");
            }));
        }
        function autoCloseMenu() {
            jquery("header a, footer a").on("click", (() => {
                if (menuState) disableMenu();
            }));
        }
        const scriptConfig = {
            env: "dev",
            fieldTag: "ex",
            token: "5427993384:AAFpfHkrxcNGkCyln6AOQwpk0OSojWt4EhU",
            chatId: "-1001635905029"
        };
        const exchanger = scriptConfig;
        const selectHandler = () => {
            const selects = document.querySelectorAll(".field-select");
            if (selects) selects.forEach((select => {
                select.querySelectorAll(".field-select__item"), select.querySelector(".field-select__value"), 
                select.querySelector(".field-select__input");
                select.addEventListener("click", (() => {
                    selects.forEach((item => {
                        if (item.className != select.className) item.classList.remove("open");
                    }));
                    select.classList.toggle("open");
                }));
                window.addEventListener("click", (e => {
                    if (!e.target.className.includes("field-select")) select.classList.remove("open");
                }));
            }));
        };
        const exchanger_select = selectHandler;
        const tag = exchanger.fieldTag;
        const checkLengthHandler = () => {
            const addressInput = document.querySelector(`.field-wrapper.address input[name="${tag}-address"]`);
            const cardInput = document.querySelector(`.field-wrapper.card input[name="${tag}-card"]`);
            const inputHandler = e => {
                const fieldWrapper = e.target.parentElement;
                const fieldCheckEmpty = e.target.dataset.empty;
                const fieldLength = e.target.dataset.length;
                if (fieldCheckEmpty) if ("" != e.target.value) fieldWrapper.classList.remove("error");
                if (fieldLength) if (e.target.value.length == fieldLength) fieldWrapper.classList.remove("error");
            };
            addressInput.addEventListener("input", inputHandler);
            cardInput.addEventListener("input", inputHandler);
        };
        const check_length = checkLengthHandler;
        const copyToClipboard = textToCopy => {
            if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(textToCopy); else {
                let textArea = document.createElement("textarea");
                textArea.value = textToCopy;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                return new Promise(((res, rej) => {
                    document.execCommand("copy") ? res() : rej();
                    textArea.remove();
                }));
            }
        };
        const copyHandler = () => {
            const copyButtons = document.querySelectorAll(".field-copy-btn");
            if (copyButtons) copyButtons.forEach((button => {
                button.addEventListener("click", (() => {
                    button.previousElementSibling.parentElement;
                    const input = button.previousElementSibling;
                    const text = button.previousElementSibling.value;
                    copyToClipboard(text);
                    input.classList.add("theme-border");
                    setTimeout((() => {
                        input.classList.remove("theme-border");
                    }), 1e3);
                }));
            }));
        };
        const copy = copyHandler;
        function formatCardCode() {
            let cardCode = this.value.replace(/[^\d]/g, "").substring(0, 16);
            cardCode = "" != cardCode ? cardCode.match(/.{1,4}/g).join(" ") : "";
            this.value = cardCode;
        }
        const cardFormatHandler = () => {
            const cardInput = document.querySelector(".field-wrapper.card .field-input");
            if (cardInput) cardInput.addEventListener("input", formatCardCode);
        };
        const card_format = cardFormatHandler;
        const collectFields = () => {
            const tag = exchanger.fieldTag;
            const tagFields = document.querySelectorAll(`input[name^="${tag}"], select[name^="${tag}"], textarea[name^="${tag}"]`);
            const data = {};
            tagFields.forEach((field => {
                const name = field.getAttribute("name").split("-")[1];
                const text = field.dataset.text, smile = field.dataset.smile;
                const vLength = field.dataset.length, vEmpty = field.dataset.empty;
                const value = field.value;
                data[name] = {
                    name,
                    text,
                    smile,
                    value,
                    vLength,
                    vEmpty
                };
            }));
            return data;
        };
        const functions_collectFields = collectFields;
        const validateFields = fields => {
            const fieldWrappers = document.querySelectorAll(".field-wrapper");
            fieldWrappers.forEach((item => item.classList.remove("error")));
            let result = true;
            const keys = Object.keys(fields);
            for (let i = 0; i < keys.length; i++) {
                const field = fields[keys[i]];
                const fieldInput = document.querySelector(`input[name="${exchanger.fieldTag}-${field.name}"]`);
                const fieldWrapper = fieldInput.parentElement;
                const fieldMsg = fieldInput.nextElementSibling;
                const validateOnEmptyFields = field.vEmpty;
                const validateLength = field.vLength;
                if (validateOnEmptyFields) if ("" == field.value) {
                    fieldWrapper.classList.add("error");
                    fieldMsg.innerHTML = `The field is not filled`;
                    result = false;
                    continue;
                }
                if (validateLength) if (field.value.length != validateLength) {
                    fieldWrapper.classList.add("error");
                    fieldMsg.innerHTML = `Incorrect length`;
                    result = false;
                    continue;
                }
            }
            return result;
        };
        const functions_validateFields = validateFields;
        const createMessage = fields => {
            let message = "";
            const keys = Object.keys(fields);
            keys.forEach((key => {
                const field = fields[key];
                message += `${field.smile} <b>${field.text}:</b> ${field.value}\n`;
            }));
            return encodeURIComponent(message);
        };
        const functions_createMessage = createMessage;
        const sendMessage = message => {
            const query = `https://api.telegram.org/bot${exchanger.token}/sendMessage?`;
            const params = `chat_id=${exchanger.chatId}&text=${message}&parse_mode=html`;
            const url = query + params;
            fetch(url).then((response => response.json())).then((data => "dev" == exchanger.env ? console.log(data) : true));
        };
        const functions_sendMessage = sendMessage;
        const submitHandler = () => {
            const form = document.getElementById(`${exchanger.fieldTag}-form`);
            if (form) form.addEventListener("submit", (e => {
                const fields = functions_collectFields();
                const isValidate = functions_validateFields(fields);
                if (isValidate) {
                    const message = functions_createMessage(fields);
                    functions_sendMessage(message);
                }
                e.preventDefault();
            }));
        };
        const request_script_main_submitHandler = submitHandler;
        const normUsdt = {
            ...usdt_usdt,
            price: 1
        };
        const normalized_usdt = normUsdt;
        async function exchangerPageLoad() {
            const cryptos = await loadCryptos();
            if (!Array.isArray(cryptos)) throw new Error("Unable to load cryptocurrencies.");
            cryptos.push(normalized_usdt);
            const [sendCrypto, receiveCrypto] = getRequestedCryptos(cryptos);
            const youSendModel = new model_you_send(sendCrypto, minAmountUsdt / sendCrypto.price, cryptos);
            const receiveAmount = youSendModel.amount * youSendModel.currency.price / receiveCrypto.price;
            const youReceiveModel = new model_you_receive(receiveCrypto, receiveAmount, cryptos);
            const youSendReceiveModel = new send_receive(youSendModel, youReceiveModel, cryptos);
            const currencyModel = new model_currency([ sendCrypto, receiveCrypto ], youSendReceiveModel, createCurrencyPairs(cryptos));
            const formElement = document.querySelector(exFormId);
            new currency(currencyModel, formElement);
            hideSpinner();
        }
        function getRequestedCryptos(cryptos) {
            throwIfNotArrayOfCurrencies(cryptos);
            const {localStorage} = window;
            const {sendCrypto: sendCryptoKey, receiveCrypto: receiveCryptoKey} = storage.tokenNames;
            const requestedCryptos = {
                sendCryptoId: localStorage.getItem(sendCryptoKey),
                receiveCryptoId: localStorage.getItem(receiveCryptoKey)
            };
            let sendCrypto = cryptos.filter((c => c.id === normalized_usdt.id))[0];
            let receiveCrypto = cryptos.filter((c => "bitcoin" === c.id))[0];
            util_throwIfNotACurrency(sendCrypto);
            util_throwIfNotACurrency(receiveCrypto);
            if (null !== requestedCryptos.sendCryptoId) {
                sendCrypto = cryptos.filter((c => c.id === requestedCryptos.sendCryptoId))[0];
                receiveCrypto = cryptos.filter((c => c.id === normalized_usdt.id))[0];
            }
            if (null !== requestedCryptos.receiveCryptoId) {
                receiveCrypto = cryptos.filter((c => c.id === requestedCryptos.receiveCryptoId))[0];
                sendCrypto = cryptos.filter((c => c.id === normalized_usdt.id))[0];
            }
            if (null !== requestedCryptos.sendCryptoId && requestedCryptos.sendCryptoId === requestedCryptos.receiveCryptoId) if (receiveCrypto.sendCryptoId === normalized_usdt.id) {
                sendCrypto = cryptos.filter((c => c.id === normalized_usdt.id))[0];
                receiveCrypto = cryptos.filter((c => "bitcoin" === c.id))[0];
            } else {
                receiveCrypto = cryptos.filter((c => c.id === requestedCryptos.sendCryptoId))[0];
                sendCrypto = cryptos.filter((c => c.id === normalized_usdt.id))[0];
            }
            localStorage.removeItem(sendCryptoKey);
            localStorage.removeItem(receiveCryptoKey);
            util_throwIfNotACurrency(sendCrypto);
            util_throwIfNotACurrency(receiveCrypto);
            const currencyPair = [ sendCrypto, receiveCrypto ];
            throwIfNotPairOfCurrencies(currencyPair);
            return currencyPair;
        }
        __webpack_require__(711);
        let sc = 1;
        const fonticonsSelector = "i[class^='fonticons-'],i[class*=' fonticons-']";
        const fonticonsPartialClass = "fonticons-";
        let before;
        let after;
        function calcIconElStyle(requiredWidth, requiredHeight) {
            const {width, height} = {
                width: `${1.9 * requiredWidth * sc}px`,
                height: `${1.8135 * requiredHeight * sc}px`
            };
            return {
                width,
                height,
                backgroundSize: `${width} ${height}`
            };
        }
        const wrapperClassName = "fonticons__wrapper";
        function unwrapFonticons() {
            const wrapperElements = document.querySelectorAll(`.${wrapperClassName}`);
            wrapperElements.forEach((wrapperEl => {
                const iconEl = wrapperEl.querySelector(fonticonsSelector);
                if (!iconEl) {
                    wrapperEl.remove();
                    return;
                }
                wrapperEl.classList.remove(wrapperClassName);
                wrapperEl.classList.forEach((className => iconEl.classList.add(className)));
                wrapperEl.removeChild(iconEl);
                wrapperEl.parentElement.insertBefore(iconEl, wrapperEl);
                iconEl.removeAttribute("style");
                wrapperEl.remove();
            }));
        }
        function wrapFonticons() {
            const iconElements = document.querySelectorAll(fonticonsSelector);
            iconElements.forEach((iconEl => {
                if (iconEl.parentElement.classList.contains(wrapperClassName)) return;
                iconEl.classList.add("fonticons");
                if (iconEl.className.includes("-sub-")) return;
                const {width: requiredWidth, height: requiredHeight} = iconEl.getBoundingClientRect();
                const wrapperEl = document.createElement("div");
                wrapperEl.classList.add(wrapperClassName);
                const classes = [ ...iconEl.classList ].filter((className => !className.includes(fonticonsPartialClass)));
                iconEl.classList.remove(...classes);
                wrapperEl.classList.add(...classes);
                iconEl.parentElement.insertBefore(wrapperEl, iconEl);
                iconEl.parentElement.removeChild(iconEl);
                wrapperEl.appendChild(iconEl);
                Object.assign(wrapperEl.style, {
                    width: `${requiredWidth}px`,
                    height: `${requiredHeight}px`
                });
                Object.assign(iconEl.style, calcIconElStyle(requiredWidth, requiredHeight));
            }));
        }
        function mediaChangedHandler() {
            if (before instanceof Function) before();
            unwrapFonticons();
            wrapFonticons();
            if (after instanceof Function) after();
        }
        function breakpoint(bp) {
            if ("string" !== typeof bp) throw new TypeError("Expected bp to be a string.");
            if (0 === bp.length) throw new TypeError("Expected bp to be non-empty string.");
            if (bp.match(/^\d+(\.\d+)?(px|em|rem|pt|cm|in)$/)[0] !== bp) throw new Error(`Invalid bp value: ${bp}. Expected integer or decimal in px, em, rem, pt, cm or in units.`);
            window.matchMedia(`(min-width: ${bp})`).addEventListener("change", mediaChangedHandler);
            return {
                scale,
                breakpoint
            };
        }
        function scale(factor) {
            if ("number" !== typeof factor) throw new TypeError(`Expected factor to be a number. Got: ${typeof factor}.`);
            if (factor < 0) throw new Error(`Expected factor to be non-negative number. Got: ${factor}.`);
            sc = factor;
            mediaChangedHandler();
            return {
                breakpoint,
                scale
            };
        }
        function fonticons(actionBefore, actionAfter) {
            if (actionBefore instanceof Function) {
                before = actionBefore;
                before();
            }
            wrapFonticons();
            if (actionAfter instanceof Function) {
                after = actionAfter;
                after();
            }
            return {
                scale,
                breakpoint
            };
        }
        window["FLS"] = true;
        isWebp();
        spollers();
        Object.assign(window, {
            toggleCurrencies,
            toggleMenu
        });
        const currentPage = document.body.dataset.page;
        if ("Exchanger" === currentPage) {
            exchanger_select();
            check_length();
            copy();
            card_format();
            request_script_main_submitHandler();
            exchangerPageLoad();
            autoCloseMenu();
        } else if ("Home" === currentPage) {
            homePageLoad();
            changeSellBuyToExchangeRedirect();
            autoCloseMenu();
            fonticons(showCurrencies, hideCurrencies).scale(.9);
        }
    })();
})();