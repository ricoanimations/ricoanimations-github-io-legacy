// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        r = function(a, b) {
            if (b) a: {
                var c = ea;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });
    var fa = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ha = function(a) {
            return a.raw = a
        },
        u = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ia = function(a) {
            if (!(a instanceof Array)) {
                a = u(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ka = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a,
                b)
        },
        la = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ka(d, e) && (a[e] = d[e])
            }
            return a
        };
    r("Object.assign", function(a) {
        return a || la
    });
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if ("undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = ma(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c,
                    e, d) || e
            }
        }(),
        oa;
    if ("function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        oa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = oa,
        w = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (ta) ta(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Fa = b.prototype
        },
        ua = function() {
            this.B = !1;
            this.A = null;
            this.j = void 0;
            this.g = 1;
            this.I = this.l = 0;
            this.o = null
        },
        va = function(a) {
            if (a.B) throw new TypeError("Generator is already running");
            a.B = !0
        };
    ua.prototype.C = function(a) {
        this.j = a
    };
    var wa = function(a, b) {
        a.o = {
            oe: b,
            fg: !0
        };
        a.g = a.l || a.I
    };
    ua.prototype.return = function(a) {
        this.o = {
            return: a
        };
        this.g = this.I
    };
    var xa = function(a, b, c) {
            a.g = c;
            return {
                value: b
            }
        },
        za = function(a) {
            a.g = 0;
            a.l = 0
        },
        Ca = function(a) {
            a.l = 0;
            var b = a.o.oe;
            a.o = null;
            return b
        },
        Da = function(a) {
            this.g = new ua;
            this.j = a
        },
        Ga = function(a, b) {
            va(a.g);
            var c = a.g.A;
            if (c) return Ea(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.g.return);
            a.g.return(b);
            return Fa(a)
        },
        Ea = function(a, b, c, d) {
            try {
                var e = b.call(a.g.A, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.g.B = !1, e;
                var f = e.value
            } catch (g) {
                return a.g.A =
                    null, wa(a.g, g), Fa(a)
            }
            a.g.A = null;
            d.call(a.g, f);
            return Fa(a)
        },
        Fa = function(a) {
            for (; a.g.g;) try {
                var b = a.j(a.g);
                if (b) return a.g.B = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.g.j = void 0, wa(a.g, c)
            }
            a.g.B = !1;
            if (a.g.o) {
                b = a.g.o;
                a.g.o = null;
                if (b.fg) throw b.oe;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Ha = function(a) {
            this.next = function(b) {
                va(a.g);
                a.g.A ? b = Ea(a, a.g.A.next, b, a.g.C) : (a.g.C(b), b = Fa(a));
                return b
            };
            this.throw = function(b) {
                va(a.g);
                a.g.A ? b = Ea(a, a.g.A["throw"], b, a.g.C) : (wa(a.g, b), b = Fa(a));
                return b
            };
            this.return = function(b) {
                return Ga(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Ja = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Ka = function(a) {
            return Ja(new Ha(new Da(a)))
        },
        La = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    r("Reflect", function(a) {
        return a ? a : {}
    });
    r("Reflect.construct", function() {
        return na
    });
    r("Reflect.setPrototypeOf", function(a) {
        return a ? a : ta ? function(b, c) {
            try {
                return ta(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    r("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.j = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.o()
                })
            }
            this.g.push(g)
        };
        var d = ea.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.o = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.A(m)
                    }
                }
            }
            this.g = null
        };
        b.prototype.A = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.j = [];
            this.C = !1;
            var h = this.A();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.A = function() {
            function g(m) {
                return function(n) {
                    k || (k = !0, m.call(h, n))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.H),
                reject: g(this.o)
            }
        };
        e.prototype.H = function(g) {
            if (g === this) this.o(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.N(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ?
                this.G(g) : this.B(g)
            }
        };
        e.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.o(k);
                return
            }
            "function" == typeof h ? this.P(h, g) : this.B(g)
        };
        e.prototype.o = function(g) {
            this.I(2, g)
        };
        e.prototype.B = function(g) {
            this.I(1, g)
        };
        e.prototype.I = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            2 === this.g && this.J();
            this.M()
        };
        e.prototype.J = function() {
            var g = this;
            d(function() {
                    if (g.F()) {
                        var h = ea.console;
                        "undefined" !== typeof h && h.error(g.l)
                    }
                },
                1)
        };
        e.prototype.F = function() {
            if (this.C) return !1;
            var g = ea.CustomEvent,
                h = ea.Event,
                k = ea.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        e.prototype.M = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
                this.j =
                    null
            }
        };
        var f = new b;
        e.prototype.N = function(g) {
            var h = this.A();
            g.qc(h.resolve, h.reject)
        };
        e.prototype.P = function(g, h) {
            var k = this.A();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        };
        e.prototype.then = function(g, h) {
            function k(q, t) {
                return "function" == typeof q ? function(v) {
                    try {
                        m(q(v))
                    } catch (y) {
                        n(y)
                    }
                } : t
            }
            var m, n, p = new e(function(q, t) {
                m = q;
                n = t
            });
            this.qc(k(g, m), k(h, n));
            return p
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.qc = function(g, h) {
            function k() {
                switch (m.g) {
                    case 1:
                        g(m.l);
                        break;
                    case 2:
                        h(m.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.g);
                }
            }
            var m = this;
            null == this.j ? f.j(k) : this.j.push(k);
            this.C = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var m = u(g), n = m.next(); !n.done; n = m.next()) c(n.value).qc(h, k)
            })
        };
        e.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? c([]) : new e(function(m, n) {
                function p(v) {
                    return function(y) {
                        q[v] = y;
                        t--;
                        0 == t && m(q)
                    }
                }
                var q = [],
                    t = 0;
                do q.push(void 0), t++, c(k.value).qc(p(q.length -
                    1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    r("Object.setPrototypeOf", function(a) {
        return a || ta
    });
    r("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    r("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var m = typeof k;
            return "object" === m && null !== k || "function" === m
        }

        function d(k) {
            if (!ka(k, f)) {
                var m = new b;
                ba(k, f, {
                    value: m
                })
            }
        }

        function e(k) {
            var m = Object[k];
            m && (Object[k] = function(n) {
                if (n instanceof b) return n;
                Object.isExtensible(n) && d(n);
                return m(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [k, 2],
                            [m, 3]
                        ]);
                    if (2 != n.get(k) || 3 != n.get(m)) return !1;
                    n.delete(k);
                    n.set(m, 4);
                    return !n.has(k) && 4 == n.get(m)
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.g = (g += Math.random() + 1).toString();
                if (k) {
                    k = u(k);
                    for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        h.prototype.set = function(k, m) {
            if (!c(k)) throw Error("Invalid WeakMap key");
            d(k);
            if (!ka(k, f)) throw Error("WeakMap key fail: " + k);
            k[f][this.g] = m;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ka(k, f) ? k[f][this.g] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ka(k, f) && ka(k[f],
                this.g)
        };
        h.prototype.delete = function(k) {
            return c(k) && ka(k, f) && ka(k[f], this.g) ? delete k[f][this.g] : !1
        };
        return h
    });
    r("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var m = k.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this[0][m.id] = []);
            m.pa ? m.pa.value = k : (m.pa = {
                next: this[1],
                Wa: this[1].Wa,
                head: this[1],
                key: h,
                value: k
            }, m.list.push(m.pa), this[1].Wa.next = m.pa, this[1].Wa = m.pa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.pa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.pa.Wa.next = h.pa.next, h.pa.next.Wa =
                h.pa.Wa, h.pa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Wa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).pa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).pa) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var m = this.entries(),
                    n; !(n = m.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var m = k && typeof k;
                "object" == m || "function" == m ? b.has(k) ? m = b.get(k) : (m = "" + ++g, b.set(k, m)) : m = "p_" + k;
                var n = h[0][m];
                if (n && ka(h[0], m))
                    for (h = 0; h < n.length; h++) {
                        var p = n[h];
                        if (k !== k && p.key !== p.key || k === p.key) return {
                            id: m,
                            list: n,
                            index: h,
                            pa: p
                        }
                    }
                return {
                    id: m,
                    list: n,
                    index: -1,
                    pa: void 0
                }
            },
            e = function(h, k) {
                var m = h[1];
                return fa(function() {
                    if (m) {
                        for (; m.head != h[1];) m = m.Wa;
                        for (; m.next != m.head;) return m =
                            m.next, {
                                done: !1,
                                value: k(m)
                            };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Wa = h.next = h.head = h
            },
            g = 0;
        return c
    });
    r("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    r("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    r("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    r("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    r("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    r("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ka(b, d) && c.push(b[d]);
            return c
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    var Ma = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ma(this, b, "includes").indexOf(b, c || 0)
        }
    });
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var Na = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Na(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Na(this, function(b) {
                return b
            })
        }
    });
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Na(this, function(b, c) {
                return c
            })
        }
    });
    r("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    r("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new Map;
            if (c) {
                c =
                    u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    r("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ka(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    r("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ma(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    r("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ma(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    r("globalThis", function(a) {
        return a || ea
    });
    r("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ma(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    r("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535,
                e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    r("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
            b = b[Symbol.iterator].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Oa = Oa || {},
        x = this || self,
        z = function(a, b, c) {
            a = a.split(".");
            c = c || x;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Qa = function(a) {
            var b = Pa("CLOSURE_FLAGS");
            a = b && b[a];
            return null != a ? a : !1
        },
        Pa = function(a, b) {
            a = a.split(".");
            b = b || x;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        Ra = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ?
                "array" : b : "null"
        },
        Sa = function(a) {
            var b = Ra(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ta = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Wa = function(a) {
            return Object.prototype.hasOwnProperty.call(a, Ua) && a[Ua] || (a[Ua] = ++Va)
        },
        Ya = function(a) {
            null !== a && "removeAttribute" in a && a.removeAttribute(Ua);
            try {
                delete a[Ua]
            } catch (b) {}
        },
        Ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Va = 0,
        Za = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        $a = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        ab = function(a, b, c) {
            ab = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Za : $a;
            return ab.apply(null, arguments)
        },
        cb = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        db = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Fa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.wi = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        eb = function(a) {
            return a
        };

    function fb(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, fb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    db(fb, Error);
    fb.prototype.name = "CustomError";
    var gb;
    var ib, jb = "function" === typeof String.prototype.ig,
        kb = "undefined" !== typeof TextEncoder;

    function lb(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (kb) {
            if (b && (jb ? !a.ig() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (ib || (ib = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };

    function nb(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    };
    var ob = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        pb = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        qb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        rb = function(a, b) {
            return -1 != a.indexOf(b)
        },
        ub = function(a, b) {
            return rb(a.toLowerCase(), b.toLowerCase())
        },
        wb = function(a, b) {
            var c = 0;
            a = qb(String(a)).split(".");
            b = qb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = vb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || vb(0 == f[2].length, 0 == g[2].length) || vb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        vb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var xb = Qa(610401301),
        yb = Qa(188588736);

    function zb() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ab, Cb = x.navigator;
    Ab = Cb ? Cb.userAgentData || null : null;

    function Db(a) {
        return xb ? Ab ? Ab.brands.some(function(b) {
            return (b = b.brand) && rb(b, a)
        }) : !1 : !1
    }

    function A(a) {
        return rb(zb(), a)
    };

    function Eb() {
        return xb ? !!Ab && 0 < Ab.brands.length : !1
    }

    function Fb() {
        return Eb() ? !1 : A("Opera")
    }

    function Gb() {
        return Eb() ? !1 : A("Trident") || A("MSIE")
    }

    function Hb() {
        return A("Firefox") || A("FxiOS")
    }

    function Ib() {
        return A("Safari") && !(Jb() || (Eb() ? 0 : A("Coast")) || Fb() || (Eb() ? 0 : A("Edge")) || (Eb() ? Db("Microsoft Edge") : A("Edg/")) || (Eb() ? Db("Opera") : A("OPR")) || Hb() || A("Silk") || A("Android"))
    }

    function Jb() {
        return Eb() ? Db("Chromium") : (A("Chrome") || A("CriOS")) && !(Eb() ? 0 : A("Edge")) || A("Silk")
    };

    function Kb() {
        return xb ? !!Ab && !!Ab.platform : !1
    }

    function Lb() {
        return Kb() ? "Android" === Ab.platform : A("Android")
    }

    function Mb() {
        return A("iPhone") && !A("iPod") && !A("iPad")
    }

    function Ob() {
        return Kb() ? "macOS" === Ab.platform : A("Macintosh")
    };
    var Pb = function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Qb = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        };

    function Rb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
    }
    var Sb = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Tb = function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Ub = function(a, b, c) {
            var d = c;
            Qb(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        Vb = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e],
                        e, a)) return !0;
            return !1
        };

    function Wb(a, b) {
        b = Xb(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Xb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function Yb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1
    }

    function Zb(a, b) {
        return 0 <= Pb(a, b)
    }

    function $b(a, b) {
        b = Pb(a, b);
        var c;
        (c = 0 <= b) && ac(a, b);
        return c
    }

    function ac(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }

    function cc(a, b) {
        var c = 0;
        Rb(a, function(d, e) {
            b.call(void 0, d, e, a) && ac(a, e) && c++
        })
    }

    function dc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function ec(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function fc(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = Ta(e) ? "o" + Wa(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    }

    function gc(a, b) {
        a.sort(b || hc)
    }

    function hc(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function ic(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = "";
        return b
    };
    var jc = function(a) {
        jc[" "](a);
        return a
    };
    jc[" "] = function() {};
    var kc = function(a, b) {
            try {
                return jc(a[b]), !0
            } catch (c) {}
            return !1
        },
        mc = function(a) {
            var b = lc;
            return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8)
        };
    var nc = Fb(),
        oc = Gb(),
        pc = A("Edge"),
        qc = A("Gecko") && !(ub(zb(), "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        rc = ub(zb(), "WebKit") && !A("Edge"),
        sc = Ob(),
        tc = Lb(),
        uc = Mb(),
        vc = A("iPad"),
        wc = A("iPod"),
        xc = Mb() || A("iPad") || A("iPod"),
        yc = function() {
            var a = x.document;
            return a ? a.documentMode : void 0
        },
        zc;
    a: {
        var Ac = "",
            Bc = function() {
                var a = zb();
                if (qc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (pc) return /Edge\/([\d\.]+)/.exec(a);
                if (oc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (rc) return /WebKit\/(\S+)/.exec(a);
                if (nc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Bc && (Ac = Bc ? Bc[1] : "");
        if (oc) {
            var Cc = yc();
            if (null != Cc && Cc > parseFloat(Ac)) {
                zc = String(Cc);
                break a
            }
        }
        zc = Ac
    }
    var Dc = zc,
        lc = {},
        Ec = function() {
            return mc(function() {
                return 0 <= wb(Dc, 8)
            })
        },
        Fc;
    if (x.document && oc) {
        var Gc = yc();
        Fc = Gc ? Gc : parseInt(Dc, 10) || void 0
    } else Fc = void 0;
    var Hc = Fc;
    var Ic = Hb(),
        Jc = A("Android") && !(Jb() || Hb() || Fb() || A("Silk")),
        Kc = Jb();
    Ib();
    var Lc = {},
        Mc = null,
        Oc = function(a, b) {
            void 0 === b && (b = 0);
            Nc();
            b = Lc[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    m = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + m + g + h + k
            }
            m = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    m = a[e + 1], k = b[(m & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | m >> 4] + k + d
            }
            return c.join("")
        },
        Qc = function(a) {
            var b = [];
            Pc(a, function(c) {
                b.push(c)
            });
            return b
        },
        Pc = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Mc[m];
                    if (null != n) return n;
                    if (!pb(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return k
            }
            Nc();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Nc = function() {
            if (!Mc) {
                Mc = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Lc[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Mc[f] && (Mc[f] = e)
                    }
                }
            }
        };
    var Rc = "undefined" !== typeof Uint8Array,
        Sc = !oc && "function" === typeof btoa;

    function Tc() {
        return "function" === typeof BigInt
    };
    var Uc = 0,
        Vc = 0,
        Wc;

    function Xc(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = u(Yc(c, a)), b = c.next().value, a = c.next().value, c = b);
        Uc = c >>> 0;
        Vc = a >>> 0
    }

    function Zc(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Tc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + $c(c) + $c(a));
        return c
    }

    function $c(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function ad() {
        var a = Uc,
            b = Vc;
        b & 2147483648 ? Tc() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = u(Yc(a, b)), a = b.next().value, b = b.next().value, a = "-" + Zc(a, b)) : a = Zc(a, b);
        return a
    }

    function bd(a) {
        if (16 > a.length) Xc(Number(a));
        else if (Tc()) a = BigInt(a), Uc = Number(a & BigInt(4294967295)) >>> 0, Vc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Vc = Uc = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Vc *= 1E6, Uc = 1E6 * Uc + d, 4294967296 <= Uc && (Vc += Math.trunc(Uc / 4294967296), Vc >>>= 0, Uc >>>= 0);
            b && (b = u(Yc(Uc, Vc)), a = b.next().value, b = b.next().value, Uc = a, Vc = b)
        }
    }

    function Yc(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    var cd = function(a, b) {
            this.j = a >>> 0;
            this.g = b >>> 0
        },
        ed = function(a) {
            if (!a) return dd || (dd = new cd(0, 0));
            if (!/^\d+$/.test(a)) return null;
            bd(a);
            return new cd(Uc, Vc)
        },
        dd, fd = function(a, b) {
            this.j = a >>> 0;
            this.g = b >>> 0
        },
        hd = function(a) {
            if (!a) return gd || (gd = new fd(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            bd(a);
            return new fd(Uc, Vc)
        },
        gd;
    var id = function() {
        this.g = []
    };
    id.prototype.length = function() {
        return this.g.length
    };
    id.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var jd = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        kd = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        ld = function(a, b) {
            if (0 <= b) kd(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        },
        md = function(a, b) {
            a.g.push(b >>> 0 & 255);
            a.g.push(b >>> 8 & 255);
            a.g.push(b >>> 16 & 255);
            a.g.push(b >>> 24 & 255)
        };
    var nd = function() {
            this.l = [];
            this.j = 0;
            this.g = new id
        },
        od = function(a, b) {
            0 !== b.length && (a.l.push(b), a.j += b.length)
        },
        qd = function(a, b) {
            pd(a, b, 2);
            b = a.g.end();
            od(a, b);
            b.push(a.j);
            return b
        },
        rd = function(a, b) {
            var c = b.pop();
            for (c = a.j + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.j++;
            b.push(c);
            a.j++
        },
        sd = function(a) {
            od(a, a.g.end());
            for (var b = new Uint8Array(a.j), c = a.l, d = c.length, e = 0, f = 0; f < d; f++) {
                var g = c[f];
                b.set(g, e);
                e += g.length
            }
            a.l = [b];
            return b
        },
        pd = function(a, b, c) {
            kd(a.g, 8 * b + c)
        },
        td = function(a, b, c) {
            pd(a, b, 2);
            kd(a.g, c.length);
            od(a, a.g.end());
            od(a, c)
        },
        ud = function(a, b, c, d) {
            null != c && (b = qd(a, b), d(c, a), rd(a, b))
        },
        wd = function(a, b, c) {
            var d = vd;
            if (null != c)
                for (var e = 0; e < c.length; e++) {
                    var f = qd(a, b);
                    d(c[e], a);
                    rd(a, f)
                }
        };
    var xd = function(a, b) {
        this.g = a;
        this.Ue = b
    };

    function yd(a) {
        return Array.prototype.slice.call(a)
    };

    function zd(a) {
        return "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : a
    }
    var Ad = zd(),
        Bd = zd("0di"),
        Cd = zd("2ex"),
        Dd = zd("0dg");
    var Ed = Ad ? function(a, b) {
            a[Ad] |= b
        } : function(a, b) {
            void 0 !== a.Ba ? a.Ba |= b : Object.defineProperties(a, {
                Ba: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Fd = Ad ? function(a, b) {
            a[Ad] &= ~b
        } : function(a, b) {
            void 0 !== a.Ba && (a.Ba &= ~b)
        };

    function Gd(a, b, c) {
        return c ? a | b : a & ~b
    }
    var Hd = Ad ? function(a) {
            return a[Ad] | 0
        } : function(a) {
            return a.Ba | 0
        },
        Id = Ad ? function(a) {
            return a[Ad]
        } : function(a) {
            return a.Ba
        },
        Jd = Ad ? function(a, b) {
            a[Ad] = b;
            return a
        } : function(a, b) {
            void 0 !== a.Ba ? a.Ba = b : Object.defineProperties(a, {
                Ba: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };

    function Kd(a) {
        Ed(a, 34);
        return a
    }

    function Ld(a) {
        Ed(a, 32);
        return a
    }

    function Md(a, b) {
        Jd(b, (a | 0) & -14591)
    }

    function Nd(a, b) {
        Jd(b, (a | 34) & -14557)
    }

    function Od(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Pd = {},
        Qd = {};

    function Rd(a) {
        return !(!a || "object" !== typeof a || a.jg !== Qd)
    }

    function Sd(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Td;

    function Ud(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = Hd(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        Jd(a, d | 1);
        return !0
    }
    var Vd, Wd = [];
    Jd(Wd, 55);
    Vd = Object.freeze(Wd);

    function Xd(a) {
        if (a & 2) throw Error();
    }
    var Yd = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.j = b;
        this.A = c
    };
    Yd.prototype.next = function() {
        if (this.l < this.g.length) {
            var a = this.g[this.l++];
            return {
                done: !1,
                value: this.j ? this.j.call(this.A, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    };
    Yd.prototype[Symbol.iterator] = function() {
        return new Yd(this.g, this.j, this.A)
    };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Zd = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var $d;

    function ae() {
        var a = Error();
        Zd(a, "incident");
        nb(a)
    }

    function be(a) {
        a = Error(a);
        Zd(a, "warning");
        return a
    };

    function ce(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    }

    function de(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + Ra(a) + ": " + a);
        return a
    }

    function ee(a) {
        return null == a ? a : de(a)
    }

    function fe(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    }
    var ge = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function he(a) {
        var b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : ge.test(a)
    }

    function ie(a) {
        if (!Number.isFinite(a)) throw be("enum");
        return a | 0
    }

    function je(a) {
        return null == a ? a : ie(a)
    }

    function ke(a) {
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function le(a) {
        if ("number" !== typeof a) throw be("int32");
        if (!Number.isFinite(a)) throw be("int32");
        return a | 0
    }

    function me(a) {
        return null == a ? a : le(a)
    }

    function ne(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function oe(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function pe(a) {
        if (null != a) {
            var b = !!b;
            if (!he(a)) throw be("int64");
            a = "string" === typeof a ? qe(a) : b ? re(a) : se(a)
        }
        return a
    }

    function te(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }

    function ue(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }

    function ve(a) {
        if (0 > a) {
            Xc(a);
            var b = Zc(Uc, Vc);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (te(String(a))) return a;
        Xc(a);
        return 4294967296 * Vc + (Uc >>> 0)
    }

    function se(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Xc(a);
            var b = Uc,
                c = Vc;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function re(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            var b = String(a);
            ue(b) ? a = b : (Xc(a), a = ad())
        }
        return a
    }

    function qe(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        ue(a) || (bd(a), a = ad());
        return a
    }

    function we(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function xe(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function ye(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function ze(a, b, c, d) {
        if (null != a && "object" === typeof a && a.xd === Pd) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Ae(b) : new b : void 0;
        var e = c = Hd(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && Jd(a, e);
        return new b(a)
    }

    function Ae(a) {
        var b = a[Bd];
        if (b) return b;
        b = new a;
        Kd(b.K);
        return a[Bd] = b
    }

    function Be(a, b, c) {
        if (b) return de(a);
        var d;
        return null != (d = fe(a)) ? d : c ? !1 : void 0
    }

    function De(a, b, c) {
        if (b) return we(a);
        var d;
        return null != (d = ye(a)) ? d : c ? "" : void 0
    };
    var Ee;

    function Fe(a, b) {
        Ee = b;
        a = new a(b);
        Ee = void 0;
        return a
    }
    var Ge, He;

    function Ie(a) {
        switch (typeof a) {
            case "boolean":
                return Ge || (Ge = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? He || (He = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function B(a, b, c) {
        null == a && (a = Ee);
        Ee = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = Hd(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (Sd(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b) throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b) throw Error("spvt");
                    d = d & -16760833 | (b & 1023) <<
                        14
                }
            }
        }
        Jd(a, d);
        return a
    };
    var Je = {},
        Ke = function() {
            try {
                var a = function() {
                    return na(Map, [], this.constructor)
                };
                w(a, Map);
                new a;
                return !1
            } catch (b) {
                return !0
            }
        }(),
        Le = function() {
            this.g = new Map
        };
    l = Le.prototype;
    l.get = function(a) {
        return this.g.get(a)
    };
    l.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    };
    l.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    };
    l.clear = function() {
        this.g.clear();
        this.size = this.g.size
    };
    l.has = function(a) {
        return this.g.has(a)
    };
    l.entries = function() {
        return this.g.entries()
    };
    l.keys = function() {
        return this.g.keys()
    };
    l.values = function() {
        return this.g.values()
    };
    l.forEach = function(a, b) {
        return this.g.forEach(a, b)
    };
    Le.prototype[Symbol.iterator] = function() {
        return this.entries()
    };
    var Me = function() {
        if (Ke) return Object.setPrototypeOf(Le.prototype, Map.prototype), Object.defineProperties(Le.prototype, {
            size: {
                value: 0,
                configurable: !0,
                enumerable: !0,
                writable: !0
            }
        }), Le;
        var a = function() {
            return na(Map, [], this.constructor)
        };
        w(a, Map);
        return a
    }();

    function Ne(a) {
        return a
    }
    var Pe = function(a, b, c, d) {
        c = void 0 === c ? Ne : c;
        d = void 0 === d ? Ne : d;
        var e = Me.call(this) || this;
        var f = Hd(a);
        f |= 64;
        Jd(a, f);
        e.Lb = f;
        e.Zc = b;
        e.Wb = c;
        e.Vd = e.Zc ? Oe : d;
        for (var g = 0; g < a.length; g++) {
            var h = a[g],
                k = c(h[0], !1, !0),
                m = h[1];
            b ? void 0 === m && (m = null) : m = d(h[1], !1, !0, void 0, void 0, f);
            Me.prototype.set.call(e, k, m)
        }
        return e
    };
    w(Pe, Me);
    var Qe = function(a) {
            if (a.Lb & 2) throw Error("Cannot mutate an immutable Map");
        },
        Te = function(a, b) {
            b = void 0 === b ? Re : b;
            if (0 !== a.size) return Se(a, b)
        },
        Se = function(a, b) {
            b = void 0 === b ? Re : b;
            var c = [];
            a = Me.prototype.entries.call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    l = Pe.prototype;
    l.clear = function() {
        Qe(this);
        Me.prototype.clear.call(this)
    };
    l.delete = function(a) {
        Qe(this);
        return Me.prototype.delete.call(this, this.Wb(a, !0, !1))
    };
    l.entries = function() {
        var a = Array.from(Me.prototype.keys.call(this));
        return new Yd(a, Ue, this)
    };
    l.keys = function() {
        return Me.prototype.keys.call(this)
    };
    l.values = function() {
        var a = Array.from(Me.prototype.keys.call(this));
        return new Yd(a, Pe.prototype.get, this)
    };
    l.forEach = function(a, b) {
        var c = this;
        Me.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    l.set = function(a, b) {
        Qe(this);
        a = this.Wb(a, !0, !1);
        return null == a ? this : null == b ? (Me.prototype.delete.call(this, a), this) : Me.prototype.set.call(this, a, this.Vd(b, !0, !0, this.Zc, !1, this.Lb))
    };
    l.has = function(a) {
        return Me.prototype.has.call(this, this.Wb(a, !1, !1))
    };
    l.get = function(a) {
        a = this.Wb(a, !1, !1);
        var b = Me.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Zc;
            return c ? (c = this.Vd(b, !1, !0, c, this.Gf, this.Lb), c !== b && Me.prototype.set.call(this, a, c), c) : b
        }
    };
    Pe.prototype[Symbol.iterator] = function() {
        return this.entries()
    };
    Pe.prototype.toJSON = void 0;
    Pe.prototype.jg = Qd;

    function Oe(a, b, c, d, e, f) {
        a = ze(a, d, c, f);
        e && (a = Ve(a));
        return a
    }

    function Re(a) {
        return a
    }

    function Ue(a) {
        return [a, this.get(a)]
    }
    var We;

    function Xe() {
        return We || (We = new Pe(Kd([]), void 0, void 0, void 0, Je))
    };

    function Ye(a, b) {
        return Ze(b)
    }

    function Ze(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Ud(a, void 0, 0)) return
                    } else {
                        if (Rc && null != a && a instanceof Uint8Array) {
                            if (Sc) {
                                for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                                b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                                a = btoa(b)
                            } else a = Oc(a);
                            return a
                        }
                        if (a instanceof Pe) return Te(a)
                    }
        }
        return a
    };

    function $e(a, b, c) {
        a = yd(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) b[f] = c(e[f])
        }
        return a
    }

    function af(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = Ud(a, void 0, 0) ? void 0 : e && Hd(a) & 2 ? a : bf(a, b, c, void 0 !== d, e);
            else if (Sd(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = af(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function bf(a, b, c, d, e) {
        var f = d || c ? Hd(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = yd(a);
        for (var g = 0; g < a.length; g++) a[g] = af(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function cf(a) {
        return af(a, df, void 0, void 0, !1)
    }

    function df(a) {
        return a.xd === Pd ? a.toJSON() : a instanceof Pe ? Te(a, cf) : Ze(a)
    };

    function ef(a, b, c) {
        c = void 0 === c ? Nd : c;
        if (null != a) {
            if (Rc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Hd(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? Jd(a, (d | 34) & -12293) : bf(a, ef, d & 4 ? Nd : c, !0, !0)
            }
            a.xd === Pd ? (c = a.K, d = Id(c), a = d & 2 ? a : Fe(a.constructor, ff(c, d, !0))) : a instanceof Pe && !(a.Lb & 2) && (c = Kd(Se(a, ef)), a = new Pe(c, a.Zc, a.Wb, a.Vd));
            return a
        }
    }

    function ff(a, b, c) {
        var d = c || b & 2 ? Nd : Md,
            e = !!(b & 32);
        a = $e(a, b, function(f) {
            return ef(f, e, d)
        });
        Ed(a, 32 | (c ? 2 : 0));
        return a
    }

    function Ve(a) {
        var b = a.K,
            c = Id(b);
        return c & 2 ? Fe(a.constructor, ff(b, c, !1)) : a
    };

    function gf(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[Dd] = (a.constructor[Dd] | 0) + 1) && ae();
        return 0 === c ? !1 : !(c & b)
    }
    var jf = function(a, b) {
        a = a.K;
        return hf(a, Id(a), b)
    };

    function kf(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    }
    var hf = function(a, b, c, d) {
            if (-1 === c) return null;
            var e = Od(b);
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                    if (kf(a, b, e, c) && null != Cd) {
                        var g;
                        a = null != (g = $d) ? g : $d = {};
                        g = a[Cd] || 0;
                        4 <= g || (a[Cd] = g + 1, ae())
                    }
                    return d
                }
                return kf(a, b, e, c)
            }
        },
        C = function(a, b, c) {
            var d = a.K,
                e = Id(d);
            Xd(e);
            lf(d, e, b, c);
            return a
        };

    function lf(a, b, c, d, e) {
        var f = Od(b);
        if (c >= f || e) {
            var g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == d) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && Jd(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function mf(a, b, c) {
        var d = a.K,
            e = Id(d),
            f = 2 & e ? 1 : 2,
            g = nf(d, e, b),
            h = Hd(g);
        if (gf(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(g)) g = yd(g), h = of (h, e), e = lf(d, e, b, g);
            for (var k = a = 0; a < g.length; a++) {
                var m = c(g[a]);
                null != m && (g[k++] = m)
            }
            k < a && (g.length = k);
            h = pf(h, e);
            h = Gd(h, 20, !0);
            h = Gd(h, 4096, !1);
            h = Gd(h, 8192, !1);
            Jd(g, h);
            2 & h && Object.freeze(g)
        }
        qf(h) || (c = h, (a = 1 === f) ? (32 & h || (g = yd(g), c = 0, e = lf(d, e, b, g)), h = Gd(h, 2, !0)) : h = rf(h, e, !1), h !== c && Jd(g, h), a && Object.freeze(g));
        2 === f && qf(h) && (g = yd(g), h = of (h, e), h = rf(h, e, !1), Jd(g, h), lf(d, e, b, g));
        return g
    }

    function nf(a, b, c) {
        a = hf(a, b, c);
        return Array.isArray(a) ? a : Vd
    }

    function pf(a, b) {
        0 === a && (a = of (a, b));
        return a = Gd(a, 1, !0)
    }

    function qf(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function sf(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Xe();
                    break a
                }
                h = []
            } else if (h.constructor === Pe) {
                if (0 == (h.Lb & 2) || k) {
                    a = h;
                    break a
                }
                h = Se(h)
            } else Array.isArray(h) ? c = !!(Hd(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Xe();
                    break a
                }
                c || (c = !0, Kd(h))
            } else if (c) {
                c = !1;
                k = yd(h);
                for (h = 0; h < k.length; h++) {
                    var m = k[h] = yd(k[h]);
                    Array.isArray(m[1]) && (m[1] = Kd(m[1]))
                }
                h = k
            }
            c || (Hd(h) & 64 ? Fd(h, 32) : 32 & b && Ld(h));f = new Pe(h, e, De, f);lf(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.Gf = !0);
        return a
    }

    function tf(a, b, c) {
        a = a.K;
        var d = Id(a);
        return sf(a, d, hf(a, d, b), b, void 0, c)
    }

    function uf(a, b, c, d) {
        var e = a.K,
            f = Id(e);
        Xd(f);
        if (null == c) return lf(e, f, b), a;
        var g = Hd(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            m = !k && !1;
        if (gf(a, g))
            for (g = 21, k && (c = yd(c), h = 0, g = of (g, f), g = rf(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        m && (c = yd(c), h = 0, g = of (g, f), g = rf(g, f, !0));
        g !== h && Jd(c, g);
        lf(e, f, b, c);
        return a
    }

    function D(a, b, c, d) {
        var e = a.K,
            f = Id(e);
        Xd(f);
        lf(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    var vf = function(a, b, c, d) {
        var e = a.K,
            f = Id(e);
        Xd(f);
        for (var g = f, h = 0, k = 0; k < c.length; k++) {
            var m = c[k];
            null != hf(e, g, m) && (0 !== h && (g = lf(e, g, h)), h = m)
        }(c = h) && c !== b && null != d && (f = lf(e, f, c));
        lf(e, f, b, d);
        return a
    };

    function wf(a, b, c, d) {
        a = a.K;
        var e = Id(a),
            f = hf(a, e, c, d);
        b = ze(f, b, !1, e);
        b !== f && null != b && lf(a, e, c, b, d);
        return b
    }
    var xf = function(a, b) {
            return (a = wf(a, b, 5, !1)) ? a : Ae(b)
        },
        yf = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = wf(a, b, c, d);
            if (null == b) return b;
            a = a.K;
            var e = Id(a);
            if (!(e & 2)) {
                var f = Ve(b);
                f !== b && (b = f, lf(a, e, c, b, d))
            }
            return b
        };

    function zf(a, b, c, d, e, f) {
        var g = !!(2 & b),
            h = g ? 1 : 2,
            k = 1 === h;
        h = 2 === h;
        e = !!e;
        f && (f = !g);
        g = nf(a, b, d);
        var m = Hd(g),
            n = !!(4 & m);
        if (!n) {
            m = pf(m, b);
            var p = g,
                q = b,
                t;
            (t = !!(2 & m)) && (q = Gd(q, 2, !0));
            for (var v = !t, y = !0, ca = 0, X = 0; ca < p.length; ca++) {
                var pa = ze(p[ca], c, !1, q);
                if (pa instanceof c) {
                    if (!t) {
                        var ya = !!(Hd(pa.K) & 2);
                        v && (v = !ya);
                        y && (y = ya)
                    }
                    p[X++] = pa
                }
            }
            X < ca && (p.length = X);
            m = Gd(m, 4, !0);
            m = Gd(m, 16, y);
            m = Gd(m, 8, v);
            Jd(p, m);
            t && Object.freeze(p)
        }
        c = !!(8 & m) || k && !g.length;
        if (f && !c) {
            qf(m) && (g = yd(g), m = of (m, b), b = lf(a, b, d, g));
            f = g;
            c = m;
            for (p = 0; p < f.length; p++) m =
                f[p], q = Ve(m), m !== q && (f[p] = q);
            c = Gd(c, 8, !0);
            c = Gd(c, 16, !f.length);
            Jd(f, c);
            m = c
        }
        qf(m) || (f = m, k ? (c = !!(32 & m), c || (g = yd(g), f = 0, b = lf(a, b, d, g)), m = Gd(m, !g.length || 16 & m && (!n || c) ? 2 : 2048, !0)) : m = rf(m, b, e), m !== f && Jd(g, m), k && Object.freeze(g));
        h && qf(m) && (g = yd(g), m = of (m, b), m = rf(m, b, e), Jd(g, m), lf(a, b, d, g));
        return g
    }
    var Af = function(a, b, c) {
            a = a.K;
            var d = Id(a);
            return zf(a, d, b, c, !1, !(2 & d))
        },
        Bf = function(a, b, c) {
            null == c && (c = void 0);
            return C(a, b, c)
        },
        Cf = function(a, b, c) {
            var d = a.K,
                e = Id(d);
            Xd(e);
            if (null == c) return lf(d, e, b), a;
            for (var f = Hd(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), m = !0, n = !0, p = 0; p < c.length; p++) {
                var q = c[p];
                h || (q = !!(Hd(q.K) & 2), m && (m = !q), n && (n = q))
            }
            h || (f = Gd(f, 5, !0), f = Gd(f, 8, m), f = Gd(f, 16, n));
            k && f !== g && (c = yd(c), g = 0, f = of (f, e), f = rf(f, e, !0));
            f !== g && Jd(c, f);
            lf(d, e, b, c);
            return a
        };

    function of (a, b) {
        a = Gd(a, 2, !!(2 & b));
        a = Gd(a, 32, !0);
        return a = Gd(a, 2048, !1)
    }

    function rf(a, b, c) {
        32 & b && c || (a = Gd(a, 32, !1));
        return a
    }

    function Df(a, b, c, d) {
        a = a.K;
        var e = Id(a);
        Xd(e);
        b = zf(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        Hd(c.K) & 2 ? Fd(b, 8) : Fd(b, 16);
        return c
    }
    var Ef = function(a, b, c, d) {
            Df(a, b, c, d);
            return a
        },
        Ff = function(a, b) {
            a = jf(a, b);
            var c;
            null == a ? c = a : he(a) ? "number" === typeof a ? c = se(a) : c = qe(a) : c = void 0;
            return c
        },
        Gf = function(a, b) {
            return ye(jf(a, b))
        };

    function Hf(a, b) {
        return null != a ? a : b
    }
    var If = function(a, b) {
            var c = void 0 === c ? !1 : c;
            return Hf(fe(jf(a, b)), c)
        },
        Jf = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return Hf(ne(jf(a, b)), c)
        },
        Kf = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return Hf(oe(jf(a, b)), c)
        },
        Lf = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return Hf(Ff(a, b), c)
        },
        E = function(a, b) {
            var c = void 0 === c ? "" : c;
            return Hf(Gf(a, b), c)
        },
        Mf = function(a, b) {
            var c = 0;
            c = void 0 === c ? 0 : c;
            return Hf(ke(jf(a, b)), c)
        },
        Nf = function(a, b) {
            var c = void 0 === c ? "0" : c;
            a = jf(a, b);
            b = !0;
            b = void 0 === b ? !1 : b;
            a = null == a ? a : he(a) ? "string" === typeof a ? qe(a) :
                b ? re(a) : se(a) : void 0;
            return Hf(a, c)
        },
        Of = function(a, b, c) {
            return C(a, b, ee(c))
        },
        Pf = function(a, b, c) {
            return C(a, b, xe(c))
        };
    var F = function(a, b, c) {
        this.K = B(a, b, c)
    };
    F.prototype.toJSON = function() {
        return Td ? Qf(this, this.K, !1) : Qf(this, bf(this.K, df, void 0, void 0, !1), !0)
    };
    var Rf = function(a) {
        Td = !0;
        try {
            return JSON.stringify(a.toJSON(), Ye)
        } finally {
            Td = !1
        }
    };
    F.prototype.xd = Pd;
    F.prototype.toString = function() {
        return Qf(this, this.K, !1).toString()
    };

    function Qf(a, b, c) {
        var d = yb ? void 0 : a.constructor.oa;
        var e = Id(c ? a.K : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (Sd(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    k = !1,
                    m;
                for (m in g) {
                    var n = g[m];
                    if (Array.isArray(n)) {
                        var p = n;
                        if (Ud(n, d, +m) || Rd(n) && 0 === n.size) n = null;
                        n != p && (k = !0)
                    }
                    null != n ? h[m] = n : k = !0
                }
                if (k) {
                    for (var q in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);a--
        }
        for (m = +!!(e & 512) - 1; 0 < a; a--) {
            q = a - 1;
            c = b[q];
            q -= m;
            if (!(null == c || Ud(c, d, q) || Rd(c) && 0 === c.size)) break;
            var t = !0
        }
        if (!f && !t) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };

    function Sf(a, b) {
        if (Array.isArray(b)) {
            var c = Hd(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            Jd(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    var Tf = Symbol();

    function Uf(a, b, c) {
        a[b] = c
    }
    var Vf = Symbol();

    function Wf(a) {
        var b = a[Vf];
        if (!b) {
            var c = Zf(a);
            b = function(d, e) {
                return $f(d, e, c)
            };
            a[Vf] = b
        }
        return b
    }
    var ag = Symbol();

    function bg(a) {
        return a.g
    }

    function cg(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Zf(b).g), c || (c = Wf(b)))
        }
    }

    function Zf(a) {
        var b = a[ag];
        if (b) return b;
        b = a[ag] = {};
        var c = bg,
            d = cg;
        var e = void 0 === e ? Uf : e;
        b.g = Ie(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.Nf = g, g = a[++f], "function" === typeof g && (b.l = g, b.j = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (k += g, g = a[++f]);
            var m = void 0;
            if (g instanceof xd) var n = g;
            else n = dg, f--;
            if (n.Ue) {
                g = a[++f];
                m = a;
                var p = f;
                "function" == typeof g && (g = g(), m[p] = g);
                m = g
            }
            g = a[++f];
            p = k + 1;
            "number" === typeof g && 0 > g && (p -= g, g = a[++f]);
            for (; k < p; k++) {
                var q = h[k];
                e(b, k, m ? d(n, m, q) : c(n, q))
            }
        }
        eg in a && Tf in a && ag in a && (a.length = 0);
        return b
    }
    var eg = Symbol();

    function fg(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Nf)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof xd ? c : [gg, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = Wf(c),
                        f = Zf(c).g;
                    c = (c = a.j) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    }

    function $f(a, b, c) {
        for (var d = Id(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var m = h - e,
                    n = fg(c, m);
                n && n(b, k, m)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var p in a) d = +p, Number.isNaN(d) || (e = a[p], null != e && (f = fg(c, d)) && f(b, e, d))
        }
    }
    var hg = function(a, b) {
        var c = new nd;
        $f(a.K, c, Zf(b));
        return sd(c)
    };

    function ig(a) {
        return new xd(a, !1)
    }

    function jg(a, b, c) {
        b = ce(b);
        null != b && (pd(a, c, 1), a = a.g, c = Wc || (Wc = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Uc = c.getUint32(0, !0), Vc = c.getUint32(4, !0), md(a, Uc), md(a, Vc))
    }

    function kg(a, b, c) {
        a: if (null != b) {
            if (he(b)) {
                if ("string" === typeof b) {
                    b = qe(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = se(b);
                    break a
                }
            }
            b = void 0
        }null != b && ("string" === typeof b && hd(b), null != b && (pd(a, c, 0), "number" === typeof b ? (a = a.g, Xc(b), jd(a, Uc, Vc)) : (c = hd(b), jd(a.g, c.j, c.g))))
    }

    function lg(a, b, c) {
        b = ne(b);
        null != b && null != b && (pd(a, c, 0), ld(a.g, b))
    }

    function mg(a, b, c) {
        b = fe(b);
        null != b && (pd(a, c, 0), a.g.g.push(b ? 1 : 0))
    }

    function ng(a, b, c) {
        b = ye(b);
        null != b && td(a, c, lb(b))
    }

    function og(a, b, c, d, e) {
        ud(a, c, b instanceof F ? b.K : Array.isArray(b) ? B(b, d[0], d[1]) : void 0, e)
    }

    function pg(a, b, c) {
        b = ne(b);
        null != b && (b = parseInt(b, 10), pd(a, c, 0), ld(a.g, b))
    }
    var qg = ig(jg),
        rg = ig(jg),
        sg = ig(function(a, b, c) {
            b = ce(b);
            null != b && (pd(a, c, 5), a = a.g, c = Wc || (Wc = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Vc = 0, Uc = c.getUint32(0, !0), md(a, Uc))
        }),
        tg = ig(kg),
        ug = ig(kg),
        vg = ig(kg),
        wg = ig(function(a, b, c) {
            a: if (null != b) {
                if (he(b)) {
                    if ("string" === typeof b) {
                        var d = Math.trunc(Number(b));
                        Number.isSafeInteger(d) && 0 <= d ? b = String(d) : (d = b.indexOf("."), -1 !== d && (b = b.substring(0, d)), te(b) || (bd(b), b = Zc(Uc, Vc)));
                        break a
                    }
                    if ("number" === typeof b) {
                        b = Math.trunc(b);
                        b = 0 <= b && Number.isSafeInteger(b) ?
                            b : ve(b);
                        break a
                    }
                }
                b = void 0
            }null != b && ("string" === typeof b && ed(b), null != b && (pd(a, c, 0), "number" === typeof b ? (a = a.g, Xc(b), jd(a, Uc, Vc)) : (c = ed(b), jd(a.g, c.j, c.g))))
        }),
        xg = ig(lg),
        yg = ig(lg),
        zg = ig(mg),
        Ag = ig(mg),
        Bg = ig(ng),
        Cg = ig(ng),
        Dg = ig(ng),
        Eg;
    Eg = new xd(function(a, b, c) {
        b = Sf(ye, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                null != g && td(e, f, lb(g))
            }
    }, !1);
    var gg = new xd(og, !0),
        dg = new xd(og, !0),
        Fg;
    Fg = new xd(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) og(a, b[f], c, d, e)
    }, !0);
    var Gg = ig(function(a, b, c) {
            b = oe(b);
            null != b && null != b && (pd(a, c, 0), kd(a.g, b))
        }),
        Hg = ig(pg),
        Ig;
    Ig = new xd(function(a, b, c) {
        b = Sf(ne, b);
        if (null != b && b.length) {
            c = qd(a, c);
            for (var d = 0; d < b.length; d++) ld(a.g, b[d]);
            rd(a, c)
        }
    }, !1);
    var Jg = ig(pg);

    function Kg(a) {
        return function(b) {
            return hg(b, a)
        }
    }

    function Lg(a) {
        return function() {
            return hg(this, a)
        }
    }

    function Mg(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Fe(a, Ld(b))
            }
            return b
        }
    };
    var Ng = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var Og = function() {},
        Pg = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        Qg = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        Rg = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = x.setTimeout(e, 1E3);
                    var g = d;
                    d = [];
                    a.apply(void 0, g)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var Sg = Pg(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            x.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function Tg(a) {
        return a ? a.passive && Sg() ? a : a.capture || !1 : !1
    }
    var Ug = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, Tg(d)), !0) : !1
        },
        Vg = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, Tg())
        };
    var G = function(a) {
        var b = "tb";
        if (a.tb && a.hasOwnProperty(b)) return a.tb;
        b = new a;
        return a.tb = b
    };
    var Wg = function() {
        var a = {};
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        }
    };

    function Xg() {
        var a = Yg;
        return G(Wg).j(a.g, a.defaultValue)
    };
    var Zg = oc || rc;

    function $g(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function ah(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function bh(a) {
        var b = ch,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function dh(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function eh(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function fh(a, b) {
        var c = Sa(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a) return;
            a = a[d[c]]
        }
        return a
    }

    function gh(a, b) {
        return null !== a && b in a
    }

    function hh(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function ih(a) {
        var b = jh,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function kh(a) {
        for (var b in a) return !1;
        return !0
    }

    function lh(a) {
        for (var b in a) delete a[b]
    }

    function mh(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var nh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function oh(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < nh.length; f++) c = nh[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var ph, qh = function() {
        if (void 0 === ph) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: eb,
                        createScript: eb,
                        createScriptURL: eb
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                ph = a
            } else ph = a
        }
        return ph
    };
    var rh = function(a) {
        this.g = a
    };
    rh.prototype.toString = function() {
        return this.g + ""
    };
    var sh = {},
        th = function(a) {
            var b = qh();
            a = b ? b.createScriptURL(a) : a;
            return new rh(a, sh)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var uh = function() {};
    uh.prototype.toString = function() {
        return this.Be
    };

    function vh(a) {
        var b = new uh;
        b.Be = a;
        return b
    }
    vh("about:blank");
    var wh = vh("about:invalid#zClosurez");
    var xh = function(a) {
        this.hg = a
    };

    function yh(a) {
        return new xh(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var zh = [yh("data"), yh("http"), yh("https"), yh("mailto"), yh("ftp"), new xh(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Ah(a) {
        if ("undefined" !== typeof MediaSource && a instanceof MediaSource) return vh(URL.createObjectURL(a));
        var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
        if (2 !== (null == b ? void 0 : b.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/\w+/i.test(b[1]))) throw Error("");
        return vh(URL.createObjectURL(a))
    }
    var Bh = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var Ch = {},
        Dh = function(a) {
            this.g = a
        };
    Dh.prototype.toString = function() {
        return this.g.toString()
    };
    var Eh = new Dh("", Ch);
    var Fh = {},
        Gh = function(a) {
            this.g = a
        };
    Gh.prototype.toString = function() {
        return this.g.toString()
    };
    var Hh = function(a) {
        return a instanceof Gh && a.constructor === Gh ? a.g : "type_error:SafeHtml"
    };

    function Ih(a) {
        var b = La.apply(1, arguments);
        if (0 === b.length) return th(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return th(c)
    };

    function Jh(a) {
        for (var b = La.apply(1, arguments), c = a[0], d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new Dh(c, Ch)
    };
    var Kh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    Kh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Kh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Kh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var H = function(a, b) {
            this.width = a;
            this.height = b
        },
        Lh = function(a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        };
    l = H.prototype;
    l.aspectRatio = function() {
        return this.width / this.height
    };
    l.isEmpty = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Mh(a, b) {
        if (1 === a.nodeType) {
            var c = a.tagName;
            if ("SCRIPT" === c || "STYLE" === c) throw Error("");
        }
        a.innerHTML = Hh(b)
    };

    function Nh(a, b) {
        a.src = b instanceof rh && b.constructor === rh ? b.g : "type_error:TrustedResourceUrl";
        var c, d;
        (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var Oh = function(a) {
        var b = [],
            c = [],
            d = {},
            e = function(f, g) {
                var h = g + "  ";
                try {
                    if (void 0 === f) b.push("undefined");
                    else if (null === f) b.push("NULL");
                    else if ("string" === typeof f) b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                    else if ("function" === typeof f) b.push(String(f).replace(/\n/g, "\n" + g));
                    else if (Ta(f)) {
                        f[Ua] || c.push(f);
                        var k = Wa(f);
                        if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");
                        else {
                            d[k] = !0;
                            b.push("{");
                            for (var m in f) "function" !== typeof f[m] && (b.push("\n"), b.push(h), b.push(m + " = "), e(f[m], h));
                            b.push("\n" +
                                g + "}");
                            delete d[k]
                        }
                    } else b.push(f)
                } catch (n) {
                    b.push("*** " + n + " ***")
                }
            };
        e(a, "");
        for (a = 0; a < c.length; a++) Ya(c[a]);
        return b.join("")
    };

    function Ph(a, b) {
        a.write(Hh(b))
    };
    var Qh = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Rh = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        Sh = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Th = function(a) {
            return null == a ? "" : String(a)
        },
        Uh = 2147483648 * Math.random() | 0,
        Vh = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        Wh = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        Xh = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])",
                "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        },
        Yh = function(a) {
            isFinite(a) && (a = String(a));
            return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
        };
    var ai = function(a) {
            return a ? new Zh($h(a)) : gb || (gb = new Zh)
        },
        bi = function(a) {
            var b = document;
            return "string" === typeof a ? b.getElementById(a) : a
        },
        di = function(a, b) {
            $g(b, function(c, d) {
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ci.hasOwnProperty(d) ? a.setAttribute(ci[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        ci = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        fi = function(a) {
            a = a.document;
            a = ei(a) ? a.documentElement : a.body;
            return new H(a.clientWidth, a.clientHeight)
        },
        gi = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : !rc && ei(a) ? a.documentElement : a.body || a.documentElement;
            a = a.parentWindow || a.defaultView;
            return oc && a.pageYOffset != b.scrollTop ? new Kh(b.scrollLeft, b.scrollTop) : new Kh(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        I = function(a) {
            return a ?
                a.parentWindow || a.defaultView : window
        },
        ji = function(a, b, c) {
            var d = arguments,
                e = document,
                f = d[1],
                g = hi(e, String(d[0]));
            f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : di(g, f));
            2 < d.length && ii(e, g, d, 2);
            return g
        },
        ii = function(a, b, c, d) {
            function e(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Sa(f) || Ta(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Ta(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    Qb(g ? ec(f) : f, e)
                }
            }
        },
        hi = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        ei = function(a) {
            return "CSS1Compat" == a.compatMode
        },
        ki = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        li = function(a) {
            var b;
            if (Zg && (b = a.parentElement)) return b;
            b = a.parentNode;
            return Ta(b) && 1 == b.nodeType ? b : null
        },
        mi = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a ==
                b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        $h = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        ni = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? I(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        oi = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        Zh = function(a) {
            this.g = a || x.document || document
        };
    l = Zh.prototype;
    l.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    l.appendChild = function(a, b) {
        a.appendChild(b)
    };
    l.append = function(a, b) {
        ii($h(a), a, arguments, 1)
    };
    l.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    l.contains = mi;
    var qi = function() {
            return xb && Ab ? Ab.mobile : !pi() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
        },
        pi = function() {
            return xb && Ab ? !Ab.mobile && (A("iPad") || A("Android") || A("Silk")) : A("iPad") || A("Android") && !A("Mobile") || A("Silk")
        };
    var ri = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        si = function(a) {
            var b = a.match(ri);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        },
        ti = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Qh(e) : "")
                }
            }
        },
        ui = /#|$/,
        vi = function(a, b) {
            var c = a.search(ui);
            a: {
                var d =
                    0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Qh(a.slice(d, -1 !== e ? e : 0))
        };
    var wi = function(a) {
            try {
                return !!a && null != a.location.href && kc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        yi = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? x : c;
            for (var d = 0; c && 40 > d++ && (!b && !wi(c) || !a(c));) c = xi(c)
        },
        zi = function() {
            var a = window;
            yi(function(b) {
                a = b;
                return !1
            });
            return a
        },
        xi = function(a) {
            try {
                var b = a.parent;
                if (b && b != a) return b
            } catch (c) {}
            return null
        },
        Ai = function() {
            var a = window;
            return wi(a.top) ? a.top : null
        },
        Bi = function() {
            if (!globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Ci = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Di = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        };

    function Ei(a) {
        var b, c;
        return null != (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0]) ? c : ""
    }
    var Fi = function() {
            var a = x;
            try {
                for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return !0;
                    case "http:":
                        return !1
                }
            } catch (c) {}
            return !0
        },
        Gi = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Hi = function(a, b) {
            for (var c = 0; 50 > c; ++c) {
                if (Gi(a, b)) return a;
                if (!(a = xi(a))) break
            }
            return null
        },
        Ii = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        },
        Ji = function(a) {
            for (var b = a; a && a != a.parent;) a = a.parent, wi(a) && (b =
                a);
            return b
        };
    var J = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    J.prototype.getWidth = function() {
        return this.right - this.left
    };
    J.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    var Ki = function(a) {
        return new J(a.top, a.right, a.bottom, a.left)
    };
    l = J.prototype;
    l.contains = function(a) {
        return this && a ? a instanceof J ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    l.expand = function(a, b, c, d) {
        Ta(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Li = function(a, b, c) {
        b instanceof Kh ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    var Mi = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Ni = function(a) {
            return new J(a.top, a.left + a.width, a.top + a.height, a.left)
        };
    l = Mi.prototype;
    l.contains = function(a) {
        return a instanceof Kh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    l.getSize = function() {
        return new H(this.width, this.height)
    };
    l.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Oi(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    var Pi = function() {
            this.S = {}
        },
        Qi = function() {
            var a = Oi(window);
            if (a) {
                if (a) {
                    var b = a.pageViewId;
                    a = a.clientId;
                    "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6))
                } else b = null;
                return +b
            }
            b = Ji(window);
            a = b.google_global_correlator;
            a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            return a
        },
        Si = function(a, b) {
            var c = Ri[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            return void 0 === d ? (a[c] = b(), a[c]) : d
        },
        Ti = function(a) {
            var b = Qi();
            return Si(a, function() {
                return b
            })
        },
        Vi = function() {
            if (Ui) var a = Ui;
            else {
                a =
                    ((a = void 0 === a ? Oi() : a) ? wi(a.master) ? a.master : null : null) || window;
                var b = a.google_persistent_state_async;
                a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Ui = b : a.google_persistent_state_async = Ui = new Pi
            }
            return Ti(a)
        },
        Ui = null,
        Wi = {},
        Ri = (Wi[8] = "google_prev_ad_formats_by_region", Wi[9] = "google_prev_ad_slotnames_by_region", Wi);
    var Yi = function(a, b, c, d, e) {
        Xi(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    };

    function Xi(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Ii("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && $b(a.google_image_requests, f);
                Vg(f, "load", g);
                Vg(f, "error", g)
            };
            Ug(f, "load", g);
            Ug(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var $i = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            Ci(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Zi(d, c)
        },
        Zi = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            var d = void 0 === d ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
                    eventSourceEligible: "true",
                    triggerEligible: "false"
                } :
                b.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                }), c.fetch(a, b)) : Yi(c, a, void 0, b, d)
        };
    var aj = function(a, b, c) {
            c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        },
        bj = function(a) {
            return !!(a.error && a.meta && a.id)
        };
    var cj = ha(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        dj = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? Ih(cj) : c;
            this.j = a;
            this.l = !1;
            this.g = null;
            this.A = !1;
            this.C = Math.random();
            this.o = b;
            this.B = this.Ua;
            this.I = c
        };
    l = dj.prototype;
    l.Nd = function(a) {
        this.j = a
    };
    l.Vc = function(a) {
        this.g = a
    };
    l.Od = function(a) {
        this.l = a
    };
    l.Pd = function(a) {
        this.A = a
    };
    l.Ua = function(a, b, c, d, e) {
        c = void 0 === c ? this.o : c;
        e = void 0 === e ? this.j : e;
        if ((this.A ? this.C : Math.random()) > c) return this.l;
        bj(b) || (b = new aj(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (b = x.document, a = Ii("SCRIPT", b), Nh(a, this.I), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), x.error_rep_loaded = !0);
        return this.l
    };
    l.wb = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.B(a, d, this.o, c, this.j)) throw d;
        }
    };
    l.Gd = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = La.apply(0, arguments);
            return e.wb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    var ej = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        fj = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };
    var gj = null;

    function hj() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ij() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    }

    function jj(a, b) {
        b = void 0 === b ? x : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    }

    function kj() {
        var a = void 0 === a ? x : a;
        var b = Math.min(jj("domLoading", a) || Infinity, jj("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(jj("responseEnd", a), jj("navigationStart", a)) : b
    };
    var lj = function(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    };
    var mj = x.performance,
        nj = !!(mj && mj.mark && mj.measure && mj.clearMarks),
        oj = Pg(function() {
            var a;
            if (a = nj) {
                var b;
                if (null === gj) {
                    gj = "";
                    try {
                        a = "";
                        try {
                            a = x.top.location.hash
                        } catch (c) {
                            a = x.location.hash
                        }
                        a && (gj = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = gj;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        pj = function(a, b) {
            this.events = [];
            this.g = b || x;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.l = oj() || (null !=
                c ? c : Math.random() < a)
        };
    pj.prototype.B = function() {
        this.l = !1;
        this.events != this.g.google_js_reporting_queue && (oj() && Qb(this.events, qj), this.events.length = 0)
    };
    pj.prototype.C = function(a) {
        !this.l || 2048 < this.events.length || this.events.push(a)
    };
    var qj = function(a) {
        a && mj && oj() && (mj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), mj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    pj.prototype.start = function(a, b) {
        if (!this.l) return null;
        a = new lj(a, b, ij() || hj());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        mj && oj() && mj.mark(b);
        return a
    };
    pj.prototype.end = function(a) {
        if (this.l && "number" === typeof a.value) {
            a.duration = (ij() || hj()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            mj && oj() && mj.mark(b);
            this.C(a)
        }
    };
    var rj = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };

    function sj(a) {
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        var b = qh();
        a = b ? b.createHTML(a) : a;
        return new Gh(a, Fh)
    };

    function tj(a, b, c) {
        Ci(b, function(d, e) {
            var f = c && c[e];
            !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
        });
        return a
    }
    var zj = function(a, b, c, d, e, f, g, h) {
        f = void 0 === f ? Infinity : f;
        g = void 0 === g ? !1 : g;
        pj.call(this, a, h);
        var k = this;
        this.H = b;
        this.domain = c;
        this.path = d;
        this.U = e;
        this.I = 0;
        this.o = {};
        this.G = {};
        this.aa = [];
        this.report = {};
        this.j = 0;
        this.F = [];
        this.J = f;
        this.H = b;
        this.domain = c;
        this.path = d;
        this.U = e;
        a = this.g.navigator;
        this.Y = !("csi.gstatic.com" !== this.domain || !a || !a.sendBeacon);
        this.g.performance && this.g.performance.now || uj(this, "dat", 1);
        a && a.deviceMemory && uj(this, "dmc", a.deviceMemory);
        this.g === this.g.top && uj(this, "top", 1);
        this.W = !g;
        this.N = function() {
            k.g.setTimeout(function() {
                vj(k)
            }, 1100)
        };
        this.P = function() {
            uj(k, "uet", 2);
            for (var n = u(k.aa), p = n.next(); !p.done; p = n.next()) {
                p = p.value;
                try {
                    p()
                } catch (t) {}
            }
            n = k.g;
            var q = void 0 === q ? {} : q;
            "function" === typeof window.CustomEvent ? p = new CustomEvent("rum_blp", q) : (p = document.createEvent("CustomEvent"), p.initCustomEvent("rum_blp", !!q.bubbles, !!q.cancelable, q.detail));
            n.dispatchEvent(p);
            vj(k);
            null != k.o.uet && (k.A -= 3 + k.o.uet.length + 2, delete k.o.uet)
        };
        this.ba = Rg(function() {
            vj(k)
        });
        this.ha =
            function() {
                var n = k.g.document;
                (null != n.hidden ? n.hidden : null != n.mozHidden ? n.mozHidden : null != n.webkitHidden && n.webkitHidden) && k.ba()
            };
        this.M = this.g.setTimeout(function() {
            vj(k)
        }, 5E3);
        this.A = b.length + c.length + d.length + e.length + 3;
        Qb(this.events, function(n) {
            wj(k, n)
        });
        b = rj(this.g);
        var m = function() {
            var n = La.apply(0, arguments)[0],
                p = n[0];
            n = n[1];
            var q = p.length + n.length + 2;
            8E3 < k.A + k.j + q && vj(k);
            k.F.push([p, n]);
            k.j += q;
            xj(k);
            return 0
        };
        Qb(b, function(n) {
            return m(n)
        });
        b.length = 0;
        b.push = m;
        uj(this, "puid", (this.I + 1).toString(36) +
            "~" + Date.now().toString(36));
        yj(this)
    };
    w(zj, pj);
    var yj = function(a) {
            "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
                vj(a)
            }, 0) : Ug(a.g, "load", a.N);
            var b = fj(a.g.document);
            "undefined" !== typeof b && Ug(a.g, b, a.ha);
            Ug(a.g, "pagehide", a.P)
        },
        uj = function(a, b, c) {
            c = String(c);
            a.A = null != a.o[b] ? a.A + (c.length - a.o[b].length) : a.A + (b.length + c.length + 2);
            a.o[b] = c
        },
        Cj = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            var f = Aj(a, b, c, d, e);
            8E3 < a.A + a.j + f && (vj(a), f = b.length + c.length + 2);
            Bj(a, b, c, d, e);
            a.j += f;
            xj(a)
        },
        Aj = function(a, b, c, d, e) {
            return null == a.report[b] ? b.length +
                c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.report[b].length
        },
        Bj = function(a, b, c, d, e) {
            a.report[b] = d && null != a.report[b] ? a.report[b] + ("" + (void 0 === e ? "" : e) + c) : c
        },
        xj = function(a) {
            6E3 <= a.A + a.j && vj(a)
        },
        vj = function(a) {
            if (a.l && a.W) {
                try {
                    a.j && (a.sendBeacon(a.report), a.I === a.J && a.B())
                } catch (b) {
                    (new dj).Ua(358, b)
                }
                a.report = {};
                a.j = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.M);
                a.M = 0
            }
        },
        Dj = function(a, b) {
            var c = a.H + "//" + a.domain + a.path + a.U,
                d = {};
            c = tj(c, a.o, d);
            c = tj(c, b, d);
            b = a.g;
            b.google_timing_params && (c = tj(c,
                b.google_timing_params, d), b.google_timing_params = void 0);
            Qb(a.F, function(e) {
                var f = u(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = tj(c, (g[e] = f, g))
            });
            a.F.length = 0;
            return c
        };
    zj.prototype.sendBeacon = function(a) {
        this.I++;
        a = Dj(this, a);
        var b = !1;
        try {
            b = !!(this.Y && this.g.navigator && this.g.navigator.sendBeacon(a, null))
        } catch (c) {
            this.Y = !1
        }
        b || Yi(this.g, a);
        uj(this, "puid", (this.I + 1).toString(36) + "~" + Date.now().toString(36))
    };
    var wj = function(a, b) {
        var c = "met." + b.type,
            d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
            e = Math.round(b.duration);
        b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") + (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
        Cj(a, c, b, !0, "~")
    };
    zj.prototype.C = function(a) {
        this.l && this.I < this.J && (pj.prototype.C.call(this, a), wj(this, a))
    };
    zj.prototype.B = function() {
        pj.prototype.B.call(this);
        this.g.clearTimeout(this.M);
        this.j = this.M = 0;
        this.report = {};
        lh(this.G);
        lh(this.o);
        Vg(this.g, "load", this.N);
        Vg(this.g, "pagehide", this.P)
    };
    var K = function() {
            this.g = new zj(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
            var a = Vi();
            null != a && uj(this.g, "c", a);
            a = parseInt(this.g.o.c, 10) / 2;
            null != a && uj(this.g, "slotId", a)
        },
        L = function(a, b, c) {
            if (null != c) {
                a = a.g;
                var d = b + "=" + c;
                a.G[d] || (Cj(a, b, c, !1), 1E3 > d.length && (a.G[d] = !0))
            }
        },
        Ej = function(a, b) {
            for (var c in b) b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
            a = a.g;
            var d = !1;
            c = 0;
            for (var e = u(Object.keys(b)), f = e.next(); !f.done; f = e.next()) f =
                f.value, null != a.report[f] && (d = !0), c += Aj(a, f, b[f], !1);
            (8E3 < a.A + a.j + c || d) && vj(a);
            d = u(Object.keys(b));
            for (e = d.next(); !e.done; e = d.next()) e = e.value, Bj(a, e, b[e], !1);
            a.j += c;
            xj(a)
        },
        Fj = function(a) {
            var b = K.getInstance().g;
            b.l && b.C(new lj(a, 4, hj() - 0, 0))
        };
    K.prototype.recordClick = function(a, b, c, d) {
        for (var e = !1, f = "notag"; void 0 != d && d != document.documentElement;) {
            var g = void 0,
                h = void 0;
            if ((null == (g = d) ? 0 : g.getAttribute("data-ck-navigates")) || (null == (h = d) ? 0 : h.getAttribute("data-ck-tag"))) {
                g = f = void 0;
                e = null != (g = null == (f = d) ? void 0 : f.getAttribute("data-ck-navigates")) ? g : !1;
                h = g = void 0;
                f = null != (h = null == (g = d) ? void 0 : g.getAttribute("data-ck-tag")) ? h : "notag";
                break
            }
            g = void 0;
            d = null != (g = d.parentElement) ? g : void 0
        }
        d = this.g;
        d.l && d.C(new lj(a + "_" + b + "x" + c + "|" + e + "|" + f, 4,
            hj(), 0))
    };
    K.getInstance = function() {
        return G(K)
    };
    var Gj = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        Hj = function(a) {
            try {
                return x.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (Gj(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Jj = function() {
            this.g = Ij
        },
        Kj = function(a, b, c) {
            if (null ==
                b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Kj(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Lj(d, c), c.push(":"), Kj(a, a.g ? a.g.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Lj(b,
                            c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        Mj = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\u000b"
        },
        Nj = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Lj = function(a, b) {
            b.push('"', a.replace(Nj, function(c) {
                var d = Mj[c];
                d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1),
                    Mj[c] = d);
                return d
            }), '"')
        };
    var Oj = function() {
            this.l = null;
            this.g = "missing-id";
            this.j = !1
        },
        Qj = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return Pj("missing-element", a.g), null
            }
            if (1 < b.length) return Pj("multiple-elements", a.g), null;
            b = b[0];
            return b ? b.innerHTML : (Pj("missing-element", a.g), null)
        },
        Sj = function() {
            var a = Rj,
                b = Qj(a);
            if (null !== b)
                if (Gj(b)) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = "string" === typeof d;
                    if ("string" == typeof c) {
                        var f = K.getInstance();
                        null != c && uj(f.g, "qqid", c)
                    }
                    e && (a.g = d);
                    "string" !== typeof b ? Pj("missing-flags", a.g) : (e || Pj("missing-binary-id", a.g), a.l = b)
                } else Pj("invalid-json", a.g)
        };
    Oj.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    };
    var Tj = function(a, b, c) {
            this.id = a;
            this.D = b;
            this.j = c;
            this.g = !1
        },
        M = function(a) {
            return a.g || a.j
        },
        Uj = function() {
            this.g = []
        },
        Vj = function() {
            this.g = new Map;
            this.j = !1;
            this.A = new Uj;
            this.o = new Tj(0, 0, !1);
            this.l = [this.A]
        },
        N = function(a) {
            var b = Wj;
            if (b.j || b.g.has(a.id) || null == a.D && null == a.control || 0 == a.Ai) return b.o;
            var c = b.A;
            if (null != a.control)
                for (var d = u(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else null != a.R && (c = a.R);
            d = 0;
            null != a.control ? d = a.control.D : null != a.D && (d =
                a.D);
            a = new Tj(a.id, d, !!a.Di);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        Xj = function() {
            var a = Wj;
            return [].concat(ia(a.g.keys())).filter(function(b) {
                return M(this.g.get(b))
            }, a)
        },
        Yj = function(a) {
            var b = Wj;
            b.j || (a.g(b.l, b.g), b.j = !0)
        };
    Vj.prototype.reset = function() {
        for (var a = u(this.g), b = a.next(); !b.done; b = a.next()) b = u(b.value), b.next(), b.next().value.g = !1;
        this.j = !1
    };
    var Wj = new Vj,
        ak = function() {
            return Zj.g.filter(function(a) {
                return M(a)
            }).map(function(a) {
                return a.id
            })
        };
    var bk = function() {};
    bk.prototype.g = function(a) {
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(1E3 * Math.random());
            b = u(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.D, d < c) {
                    e.g = !0;
                    break
                }
        }
    };
    var ck = function(a) {
        this.j = a
    };
    ck.prototype.g = function(a, b) {
        a = u(this.j);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.g = !0
    };
    var dk = function(a, b) {
        this.j = a;
        this.l = b
    };
    w(dk, ck);
    dk.prototype.g = function(a, b) {
        ck.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = u(this.j), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        L(K.getInstance(), "sei", b);
        L(K.getInstance(), "nsei", a);
        L(K.getInstance(), "bi", this.l)
    };
    var ek = function() {
        Oj.apply(this, arguments)
    };
    w(ek, Oj);
    var Pj = function(a, b) {
        var c = K.getInstance();
        L(c, "eee", a);
        L(c, "bi", b)
    };
    ek.getInstance = function() {
        return G(ek)
    };

    function fk() {
        return gk.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var Zj = new Uj,
        hk = new Uj,
        ik = new Uj,
        lk = new Uj,
        mk = new Uj,
        nk = new Uj,
        ok = new Uj,
        pk = new Uj,
        qk = new Uj,
        rk = new Uj,
        sk = new Uj,
        tk = new Uj,
        uk = new Uj,
        vk = new Uj,
        wk = new Uj,
        xk = new Uj,
        yk = new Uj,
        zk = new Uj,
        Ak = new Uj,
        Bk = new Uj,
        Ck = new Uj;
    N({
        id: 318475490,
        D: 0
    });
    N({
        id: 324123032,
        D: 0
    });
    N({
        id: 418572103,
        D: 0
    });
    N({
        id: 420706097,
        D: 10
    });
    N({
        id: 420706098,
        D: 10
    });
    N({
        id: 21062100,
        D: 0
    });
    N({
        id: 420706105,
        D: 0
    });
    N({
        id: 420706106,
        D: 0
    });
    N({
        id: 420706142,
        D: 0
    });
    N({
        id: 21064347,
        D: 0
    });
    N({
        id: 44745813,
        D: 0
    });
    N({
        id: 44746068,
        D: 0
    });
    N({
        id: 21064565,
        D: 0
    });
    N({
        id: 21064567,
        D: 0
    });
    N({
        id: 418572006,
        D: 10
    });
    N({
        id: 318513471,
        D: 0
    });
    var Dk = N({
            id: 44768716,
            D: 10,
            R: pk
        }),
        Ek = N({
            id: 44768717,
            D: 10,
            R: pk
        }),
        Fk = N({
            id: 44787137,
            D: 0,
            R: pk
        }),
        Gk = N({
            id: 44744588,
            D: 10
        }),
        Hk = N({
            id: 44747319,
            D: 10
        });
    N({
        id: 44740339,
        D: 10
    });
    var Ik = N({
        id: 44740340,
        D: 10
    });
    N({
        id: 44749839,
        D: 0
    });
    N({
        id: 44714743,
        D: 0
    });
    N({
        id: 44719216,
        D: 0
    });
    N({
        id: 44715336,
        D: 10
    });
    N({
        id: 75259410,
        D: 0
    });
    N({
        id: 75259412,
        D: 0
    });
    N({
        id: 75259413,
        D: 0
    });
    N({
        id: 44773378,
        D: 10,
        R: hk
    });
    var Jk = N({
        id: 44773379,
        D: 10,
        R: hk
    });
    N({
        id: 44724516,
        D: 0
    });
    N({
        id: 44726389,
        D: 10
    });
    N({
        id: 44752711,
        D: 50
    });
    N({
        id: 44752052,
        D: 50
    });
    N({
        id: 44752657,
        D: 50
    });
    N({
        id: 44781407,
        R: ik,
        D: 0
    });
    N({
        id: 44781408,
        R: ik,
        D: 0
    });
    N({
        id: 44781409,
        R: ik,
        D: 1E3
    });
    N({
        id: 44777647,
        R: lk,
        D: 0
    });
    N({
        id: 44777648,
        R: lk,
        D: 0
    });
    N({
        id: 44777649,
        R: lk,
        D: 1E3
    });
    N({
        id: 44727953,
        D: 0
    });
    N({
        id: 44782089,
        R: mk,
        D: 10
    });
    N({
        id: 44782090,
        R: mk,
        D: 10
    });
    N({
        id: 44733246,
        D: 10
    });
    N({
        id: 44750823,
        D: 10,
        R: nk
    });
    N({
        id: 44750824,
        D: 10,
        R: nk
    });
    N({
        id: 44794282,
        D: 10,
        R: nk
    });
    N({
        id: 44797013,
        D: 10,
        R: nk
    });
    N({
        id: 44797014,
        D: 10,
        R: nk
    });
    N({
        id: 44750822,
        D: 10,
        R: nk
    });
    N({
        id: 44751889,
        D: 10
    });
    N({
        id: 44751890,
        D: 10
    });
    N({
        id: 44752995,
        D: 10
    });
    N({
        id: 44752996,
        D: 10
    });
    N({
        id: 44762627,
        D: 0
    });
    N({
        id: 44762628,
        D: 0
    });
    N({
        id: 95322371,
        D: 5
    });
    N({
        id: 95322372,
        D: 5
    });
    N({
        id: 95327100,
        D: 0
    });
    N({
        id: 44801479,
        D: 10,
        R: ok
    });
    N({
        id: 44801480,
        D: 10,
        R: ok
    });
    N({
        id: 44752538,
        D: 0
    });
    N({
        id: 44754608,
        D: 10
    });
    N({
        id: 44754609,
        D: 10
    });
    N({
        id: 44770822,
        D: 10
    });
    N({
        id: 44770823,
        D: 10
    });
    N({
        id: 44770824,
        D: 10
    });
    N({
        id: 44770825,
        D: 10
    });
    N({
        id: 75259414,
        D: 0
    });
    var Kk, Lk = (null == (Kk = window.document.featurePolicy) ? 0 : Kk.allowedFeatures().includes("attribution-reporting")) ? 300 : 0;
    N({
        id: 44776494,
        D: Lk,
        R: qk
    });
    N({
        id: 44776495,
        D: Lk,
        R: qk
    });
    N({
        id: 44776384,
        D: 0
    });
    N({
        id: 95322945,
        D: 10
    });
    var Mk = N({
        id: 95322946,
        D: 10
    });
    N({
        id: 44787954,
        D: 0
    });
    N({
        id: 44789282,
        D: 0
    });
    N({
        id: 44792636,
        D: 0
    });
    N({
        id: 44794298,
        D: 0
    });
    N({
        id: 44803996,
        D: 0
    });
    N({
        id: 44805453,
        D: 0
    });
    N({
        id: 44804917,
        D: 0
    });
    N({
        id: 44809796,
        D: 0
    });
    N({
        id: 75259415,
        D: 0
    });
    var Nk = N({
            id: 75259416,
            D: 0
        }),
        Ok = N({
            id: 75259420,
            D: 0
        }),
        Pk = N({
            id: 75259421,
            D: 0
        });
    N({
        id: 44785452,
        D: 10
    });
    N({
        id: 44785453,
        D: 10
    });
    N({
        id: 45401791,
        D: 0
    });
    N({
        id: 44795414,
        D: 1,
        R: rk
    });
    var Qk = N({
            id: 44795415,
            D: 1,
            R: rk
        }),
        Rk = N({
            id: 44795416,
            D: 1,
            R: rk
        }),
        Sk = N({
            id: 44795417,
            D: 1,
            R: rk
        });
    N({
        id: 44805102,
        D: 5,
        R: sk
    });
    var Tk = N({
            id: 44805103,
            D: 5,
            R: sk
        }),
        Uk = N({
            id: 44805104,
            D: 5,
            R: sk
        }),
        Vk = N({
            id: 44805105,
            D: 5,
            R: sk
        }),
        Wk = N({
            id: 44805106,
            D: 5,
            R: sk
        });
    N({
        id: 95326337,
        D: 990,
        R: tk
    });
    N({
        id: 44802172,
        D: 10
    });
    var Xk = N({
        id: 44802173,
        D: 10
    });
    N({
        id: 44806074,
        D: 50,
        R: Ak
    });
    N({
        id: 44806075,
        D: 50,
        R: Ak
    });
    N({
        id: 44806732,
        D: 10
    });
    N({
        id: 44806733,
        D: 10
    });
    var Yk = window.navigator || {},
        Zk = Yk.cookieDeprecationLabel ? 990 : 0;
    N({
        id: 95322906,
        D: Yk.cookieDeprecationLabel ? 10 : 0,
        R: uk
    });
    var $k = N({
            id: 95320461,
            D: 0,
            R: uk
        }),
        al = N({
            id: 95322907,
            D: Zk,
            R: uk
        });
    N({
        id: 44807614,
        D: 10
    });
    N({
        id: 44807615,
        D: 10
    });
    N({
        id: 95322545,
        D: 10
    });
    var bl = N({
            id: 95322546,
            D: 10
        }),
        cl = N({
            id: 95322547,
            D: 10
        }),
        dl = N({
            id: 95322548,
            D: 10
        });
    N({
        id: 44809192,
        D: 10,
        R: zk
    });
    N({
        id: 44809193,
        D: 10,
        R: zk
    });
    N({
        id: 95320804,
        D: 10,
        R: zk
    });
    N({
        id: 95320805,
        D: 10,
        R: zk
    });
    N({
        id: 95321947,
        D: 1E3,
        R: vk
    });
    N({
        id: 95321698,
        D: 0
    });
    var el = N({
        id: 95321699,
        D: 0
    });
    N({
        id: 95322027,
        D: 1E3,
        R: wk
    });
    N({
        id: 95323893,
        D: 1E3,
        R: xk
    });
    N({
        id: 95324128,
        D: 1E3,
        R: yk
    });
    var fl = N({
        id: 46130031,
        D: 0
    });
    N({
        id: 95324168,
        D: 50,
        R: Ck
    });
    N({
        id: 95324169,
        D: 50,
        R: Ck
    });
    var gl = N({
        id: 95324210,
        D: 1E3,
        R: Bk
    });
    N({
        id: 95328713,
        D: 10
    });
    N({
        id: 95328714,
        D: 10
    });
    var hl = N({
        id: 95327848,
        D: 0
    });
    N({
        id: 31065644,
        D: 1
    });
    var il = N({
        id: 31065645,
        D: 1
    });
    if ("undefined" === typeof window.initializeVirtualDom) {
        var Rj = ek.getInstance();
        Rj.j || (Sj(), Rj.j = !0);
        var gk = Rj.l,
            jl;
        Rj.j || (Sj(), Rj.j = !0);
        jl = Rj.g;
        if (null != gk) {
            var kl = new dk(fk(), jl);
            Yj(kl)
        }
    };
    Wj.reset();
    Yj(new bk);
    var ll = function(a) {
        var b = {};
        Qb(a, function(c) {
            var d = c.g,
                e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.j(e) || (b[d] = null)) : b[d] = c
        });
        cc(a, function(c) {
            return null === b[c.g]
        })
    };
    var ml = {
            NONE: 0,
            jh: 1
        },
        nl = {
            hh: 0,
            Yh: 1,
            Xh: 2,
            Zh: 3
        },
        ol = {
            We: "a",
            ih: "d",
            VIDEO: "v"
        };
    var pl = function() {
        this.Z = 0;
        this.g = !1;
        this.j = -1;
        this.ub = !1;
        this.ta = 0
    };
    pl.prototype.isVisible = function() {
        return this.ub ? .3 <= this.Z : .5 <= this.Z
    };
    var ql = {
            gh: 0,
            mh: 1
        },
        rl = {
            668123728: 0,
            668123729: 1
        },
        sl = {
            44731964: 0,
            44731965: 1
        },
        tl = {
            NONE: 0,
            Lh: 1,
            rh: 2
        },
        ul = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };
    var vl = function() {
            this.g = null;
            this.A = !1;
            this.l = null
        },
        wl = function(a) {
            a.A = !0;
            return a
        },
        xl = function(a, b) {
            a.l && Qb(b, function(c) {
                c = a.l[c];
                void 0 !== c && a.j(c)
            })
        };
    vl.prototype.getValue = function() {
        return this.g
    };
    var yl = function(a) {
        vl.call(this);
        this.o = a
    };
    w(yl, vl);
    yl.prototype.j = function(a) {
        null === this.g && hh(this.o, a) && (this.g = a)
    };
    var zl = function() {
        vl.call(this)
    };
    w(zl, vl);
    zl.prototype.j = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    };
    var Al = function() {
        vl.call(this)
    };
    w(Al, vl);
    Al.prototype.j = function(a) {
        null === this.g && "string" === typeof a && (this.g = a)
    };
    var Bl = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    Bl.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    var Cl = function(a, b, c) {
            a.g[b] || (a.g[b] = new yl(c));
            return a.g[b]
        },
        Dl = function(a) {
            a.g.queryid || (a.g.queryid = new Al)
        },
        El = function(a, b, c) {
            (a = a.g[b]) && a.j(c)
        },
        Fl = function(a, b) {
            if (gh(a.j, b)) return a.j[b];
            if (a = a.g[b]) return a.getValue()
        },
        Gl = function(a) {
            var b = {},
                c = ah(a.g, function(d) {
                    return d.A
                });
            $g(c, function(d, e) {
                d = void 0 !== a.j[e] ? String(a.j[e]) : d.A && null !== d.g ? String(d.g) : "";
                0 < d.length && (b[e] = d)
            }, a);
            return b
        },
        Hl = function(a) {
            a = Gl(a);
            var b = [];
            $g(a, function(c, d) {
                d in Object.prototype || "undefined" != typeof c &&
                    b.push([d, ":", c].join(""))
            });
            return b
        },
        Il = function() {
            var a = O().T,
                b = ak();
            a.l && Qb(dh(a.g), function(c) {
                return xl(c, b)
            })
        };
    var Jl = function(a) {
        Cl(a, "od", ml);
        wl(Cl(a, "opac", ql));
        wl(Cl(a, "sbeos", ql));
        wl(Cl(a, "prf", ql));
        wl(Cl(a, "mwt", ql));
        Cl(a, "iogeo", ql)
    };
    var Kl = document,
        P = window;
    var Ll = !oc && !Ib();
    var Ml = function() {
        this.g = this.kb = null
    };
    var Nl = function() {};
    Nl.prototype.now = function() {
        return 0
    };
    Nl.prototype.j = function() {
        return 0
    };
    Nl.prototype.l = function() {
        return 0
    };
    Nl.prototype.g = function() {
        return 0
    };
    var Pl = function() {
        if (!Ol()) throw Error();
    };
    w(Pl, Nl);
    var Ol = function() {
        return !(!P || !P.performance)
    };
    Pl.prototype.now = function() {
        return Ol() && P.performance.now ? P.performance.now() : Nl.prototype.now.call(this)
    };
    Pl.prototype.j = function() {
        return Ol() && P.performance.memory ? P.performance.memory.totalJSHeapSize || 0 : Nl.prototype.j.call(this)
    };
    Pl.prototype.l = function() {
        return Ol() && P.performance.memory ? P.performance.memory.usedJSHeapSize || 0 : Nl.prototype.l.call(this)
    };
    Pl.prototype.g = function() {
        return Ol() && P.performance.memory ? P.performance.memory.jsHeapSizeLimit || 0 : Nl.prototype.g.call(this)
    };
    var Ql = function() {};
    Ql.prototype.isVisible = function() {
        return 1 === ej(Kl)
    };
    var Rl = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
        Tl = function() {
            var a = (this.g = x) || x;
            this.j = a.top == a ? 1 : wi(a.top) ? 2 : 3;
            3 != this.j && (a = x.top.document, this.l = a.referrer, Date.parse(a.lastModified));
            Sl(this.g)
        },
        Wl = function(a) {
            a = a || Sl();
            for (var b = new Ul(x.location.href, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
                var f = a[e];
                !c && Rl.test(f.url) && (c = f);
                if (f.url && !f.rd) {
                    b = f;
                    break
                }
            }
            e = null;
            f = a.length && a[d].url;
            0 != b.depth && f && (e = a[d]);
            return new Vl(b, e, c)
        },
        Sl = function(a) {
            var b = a || x,
                c = [],
                d = null;
            do {
                var e = b;
                if (wi(e)) {
                    var f = e.location.href;
                    d = e.document && e.document.referrer || null
                } else f = d, d = null;
                c.push(new Ul(f || ""));
                try {
                    b = e.parent
                } catch (g) {
                    b = null
                }
            } while (b && e != b);
            e = 0;
            for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
            e = a || x;
            if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)
                for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.rd = !0);
            return c
        },
        Vl = function(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        },
        Ul = function(a, b) {
            this.url = a;
            this.rd = !!b;
            this.depth =
                null
        };
    var Xl = function() {
            this.l = "&";
            this.j = {};
            this.A = 0;
            this.g = []
        },
        Yl = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        $l = function(a, b, c, d, e) {
            var f = [];
            Ci(a, function(g, h) {
                (g = Zl(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        Zl = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(Zl(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent($l(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        am = function(a, b, c) {
            a.g.push(b);
            a.j[b] = c
        },
        bm = function(a, b, c, d) {
            a.g.push(b);
            a.j[b] = Yl(c, d)
        },
        dm = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = cm(a) - c.length;
            if (0 > d) return "";
            a.g.sort(function(n, p) {
                return n - p
            });
            c = null;
            for (var e = "", f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.j[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var m = $l(h[k], a.l, ",$");
                    if (m) {
                        m = e + m;
                        if (d >= m.length) {
                            d -= m.length;
                            b += m;
                            e = a.l;
                            break
                        }
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c &&
                (a = e + "trn=" + c);
            return b + a
        },
        cm = function(a) {
            var b = 1,
                c;
            for (c in a.j) b = c.length > b ? c.length : b;
            return 3997 - b - a.l.length - 1
        };
    var em = function(a, b) {
            this.g = a;
            this.depth = b
        },
        gm = function() {
            var a = Sl(),
                b = Math.max(a.length - 1, 0),
                c = Wl(a);
            a = c.g;
            var d = c.j,
                e = c.l,
                f = [];
            c = function(h, k) {
                return null == h ? k : h
            };
            e && f.push(new em([e.url, e.rd ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new em([d.url, 2], 0));
            a.url && a != e && f.push(new em([a.url, 0], c(a.depth, b)));
            var g = Tb(f, function(h, k) {
                return f.slice(0, f.length - k)
            });
            !a.url || (e || d) && a != e || (d = Ei(a.url)) && g.push([new em([d, 1], c(a.depth, b))]);
            g.push([]);
            return Tb(g, function(h) {
                return fm(b, h)
            })
        };

    function fm(a, b) {
        var c = Ub(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = ic(c + 2);
        d[0] = a;
        Qb(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }

    function hm() {
        var a = void 0 === a ? gm() : a;
        return a.map(function(b) {
            return Zl(b)
        })
    };
    var im = function() {
            this.j = new Ql;
            this.g = Ol() ? new Pl : new Nl
        },
        km = function() {
            jm();
            var a = P.document;
            return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof P.setInterval && "function" === typeof P.clearInterval && "function" === typeof P.setTimeout && "function" === typeof P.clearTimeout)
        };
    im.prototype.setTimeout = function(a, b) {
        return P.setTimeout(a, b)
    };
    im.prototype.clearTimeout = function(a) {
        P.clearTimeout(a)
    };
    var lm = function() {
        jm();
        return hm()
    };
    var mm = function() {},
        jm = function() {
            var a = G(mm);
            if (!a.g) {
                if (!P) throw Error("Context has not been set and window is undefined.");
                a.g = G(im)
            }
            return a.g
        };
    var nm = function(a) {
        this.K = B(a)
    };
    w(nm, F);
    nm.prototype.g = Lg([0, qg, ug, -2, yg]);
    var om = function(a) {
            this.l = a;
            this.g = -1;
            this.j = this.A = 0
        },
        pm = function(a, b) {
            return function() {
                var c = La.apply(0, arguments);
                if (-1 < a.g) return b.apply(null, ia(c));
                try {
                    return a.g = a.l.g.now(), b.apply(null, ia(c))
                } finally {
                    a.A += a.l.g.now() - a.g, a.g = -1, a.j += 1
                }
            }
        };
    var qm = function(a, b) {
        this.j = a;
        this.l = b;
        this.g = new om(a)
    };
    var rm = function() {
            this.g = {}
        },
        tm = function() {
            var a = O().flags,
                b = sm;
            a = a.g[b.key];
            if ("proto" === b.valueType) {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var um = {
        Uh: 1,
        mi: 2,
        Qh: 3
    };
    var vm = function() {
        this.l = void 0;
        this.j = this.B = 0;
        this.o = -1;
        this.T = new Bl;
        wl(Cl(this.T, "mv", tl)).l = void 0 === ul ? null : ul;
        Cl(this.T, "omid", ql);
        wl(Cl(this.T, "epoh", ql));
        wl(Cl(this.T, "epph", ql));
        wl(Cl(this.T, "umt", ql)).l = void 0 === rl ? null : rl;
        wl(Cl(this.T, "phel", ql));
        wl(Cl(this.T, "phell", ql));
        wl(Cl(this.T, "oseid", um));
        var a = this.T;
        a.g.sloi || (a.g.sloi = new zl);
        wl(a.g.sloi);
        Cl(this.T, "mm", ol);
        wl(Cl(this.T, "ovms", nl));
        wl(Cl(this.T, "xdi", ql));
        wl(Cl(this.T, "amp", ql));
        wl(Cl(this.T, "prf", ql));
        wl(Cl(this.T, "gtx", ql));
        wl(Cl(this.T, "mvp_lv", ql));
        wl(Cl(this.T, "ssmol", ql)).l = void 0 === sl ? null : sl;
        wl(Cl(this.T, "fmd", ql));
        Cl(this.T, "gen204simple", ql);
        this.g = new qm(jm(), this.T);
        this.A = !1;
        this.flags = new rm
    };
    vm.prototype.Fd = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.T;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("="),
                        e = decodeURIComponent(d[0]);
                    1 < d.length ? (d = decodeURIComponent(d[1]), d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.g[e]) && e.j(d)
                }
            }
        }
    };
    var O = function() {
        return G(vm)
    };
    var wm = function(a, b, c, d, e) {
        if ((d ? a.l : Math.random()) < (e || a.g)) try {
            if (c instanceof Xl) var f = c;
            else f = new Xl, Ci(c, function(h, k) {
                var m = f,
                    n = m.A++;
                am(m, n, Yl(k, h))
            });
            var g = dm(f, a.j, "/pagead/gen_204?id=" + b + "&");
            g && (jm(), Yi(P, g))
        } catch (h) {}
    };
    var zm = function() {
        var a = xm;
        this.B = ym;
        this.o = "jserror";
        this.l = !0;
        this.j = null;
        this.C = this.Ua;
        this.g = void 0 === a ? null : a;
        this.A = !1
    };
    l = zm.prototype;
    l.Vc = function(a) {
        this.j = a
    };
    l.Nd = function(a) {
        this.o = a
    };
    l.Od = function(a) {
        this.l = a
    };
    l.Pd = function(a) {
        this.A = a
    };
    l.wb = function(a, b, c) {
        var d = this;
        return pm(O().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (h) {
                var g = d.l;
                try {
                    qj(e), g = d.C(a, new Am(Bm(h)), void 0, c)
                } catch (k) {
                    d.Ua(217, k)
                }
                if (!g) throw h;
            }
            return f
        })()
    };
    l.Gd = function(a, b, c, d) {
        var e = this;
        return pm(O().g.g, function() {
            var f = La.apply(0, arguments);
            return e.wb(a, function() {
                return b.apply(c, f)
            }, d)
        })
    };
    l.Ua = function(a, b, c, d, e) {
        e = e || this.o;
        try {
            var f = new Xl;
            bm(f, 1, "context", a);
            bj(b) || (b = new Am(Bm(b)));
            b.msg && bm(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j) try {
                this.j(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            am(f, 3, [g]);
            var h = Wl();
            h.j && bm(f, 4, "top", h.j.url || "");
            am(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? si(h.g.url) : ""
            }]);
            wm(this.B, e, f, this.A, c)
        } catch (k) {
            try {
                wm(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Bm(k),
                    url: h && h.g.url
                }, this.A, c)
            } catch (m) {}
        }
        return this.l
    };
    var Bm = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        Am = function(a) {
            aj.call(this, Error(a), {
                message: a
            })
        };
    w(Am, aj);
    var ym, Cm, xm = new pj(1, window),
        Dm = function() {
            P && "undefined" != typeof P.google_measure_js_timing && (P.google_measure_js_timing || xm.B())
        };
    ym = new function() {
        var a = "https:";
        P && P.location && "http:" === P.location.protocol && (a = "http:");
        this.j = a;
        this.g = .01;
        this.l = Math.random()
    };
    Cm = new zm;
    P && P.document && ("complete" == P.document.readyState ? Dm() : xm.l && Ug(P, "load", function() {
        Dm()
    }));
    var Em = function(a) {
            Cm.Vc(function(b) {
                Qb(a, function(c) {
                    c(b)
                })
            })
        },
        Fm = function(a, b) {
            return Cm.wb(a, b)
        },
        Gm = function(a, b, c, d) {
            return Cm.Gd(a, b, c, d)
        },
        Hm = function(a, b, c, d) {
            Cm.Ua(a, b, c, d)
        };
    var Im = Date.now(),
        Jm = -1,
        Km = -1,
        Lm, Mm = -1,
        Nm = !1,
        Om = function() {
            return Date.now() - Im
        },
        Pm = function() {
            var a = O().l,
                b = 0 <= Km ? Om() - Km : -1,
                c = Nm ? Om() - Jm : -1,
                d = 0 <= Mm ? Om() - Mm : -1;
            if (947190542 == a) return 100;
            if (79463069 == a) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            Hm(637, Error(), .001);
            var f = b; - 1 != c && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                }
            void 0 === g && (g = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : g
        };
    var Qm = function(a, b, c) {
        var d = new J(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.j = c
    };
    var Rm = function(a, b, c, d, e, f, g) {
        this.l = a;
        this.j = b;
        this.o = c;
        this.g = d;
        this.A = e;
        this.C = f;
        this.B = g
    };
    Rm.prototype.getTimestamp = function() {
        return this.C
    };
    var Sm = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        jh = {
            de: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            ERROR: "error",
            lf: "metric",
            PAUSE: "pause",
            wf: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            mf: "mute",
            Af: "unmute",
            FULLSCREEN: "fullscreen",
            hf: "exitfullscreen",
            bf: "bufferstart",
            af: "bufferfinish",
            Yd: "fully_viewable_audible_half_duration_impression",
            ce: "measurable_impression",
            Ve: "abandon",
            Xd: "engagedview",
            IMPRESSION: "impression",
            df: "creativeview",
            LOADED: "loaded",
            PROGRESS: "progress",
            Yg: "close",
            Zg: "collapse",
            nf: "overlay_resize",
            qf: "overlay_unmeasurable_impression",
            rf: "overlay_unviewable_impression",
            tf: "overlay_viewable_immediate_impression",
            sf: "overlay_viewable_end_of_session_impression",
            ff: "custom_metric_viewable",
            Xe: "audio_audible",
            Ze: "audio_measurable",
            Ye: "audio_impression"
        },
        Tm = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        Um = ["start", "firstquartile", "midpoint", "thirdquartile"],
        Vm = ["abandon"],
        Wm = {
            UNKNOWN: -1,
            de: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            lf: 5,
            PAUSE: 6,
            wf: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            mf: 10,
            Af: 11,
            FULLSCREEN: 12,
            hf: 13,
            Yd: 14,
            ce: 15,
            Ve: 16,
            Xd: 17,
            IMPRESSION: 18,
            df: 19,
            LOADED: 20,
            ff: 21,
            bf: 22,
            af: 23,
            Ye: 27,
            Ze: 28,
            Xe: 29
        };
    var ch = {
            Ug: "addEventListener",
            sh: "getMaxSize",
            th: "getScreenSize",
            uh: "getState",
            vh: "getVersion",
            Wh: "removeEventListener",
            Mh: "isViewable"
        },
        Xm = function(a) {
            var b = a !== a.top,
                c = a.top === Ji(a),
                d = -1,
                e = 0;
            if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid
            } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), bh(function(g) {
                return "function" === typeof f[g]
            }) || (e = 1));
            return {
                Da: f,
                tc: e,
                Dg: d
            }
        };
    var Ym = function() {
        var a = window.document;
        return a && "function" === typeof a.elementFromPoint
    };

    function Zm(a, b, c) {
        try {
            a && (b = b.top);
            var d = b;
            a && null !== d && d != d.top && (d = d.top);
            try {
                var e = (void 0 === c ? 0 : c) ? (new H(d.innerWidth, d.innerHeight)).round() : fi(d || window).round()
            } catch (n) {
                e = new H(-12245933, -12245933)
            }
            a = e;
            var f = a.height,
                g = a.width;
            if (-12245933 === g) return new J(g, g, g, g);
            var h = gi(ai(b.document).g),
                k = h.x,
                m = h.y;
            return new J(m, k + g, m + f, k)
        } catch (n) {
            return new J(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var an = function(a, b) {
            if ("string" === typeof b)(b = $m(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = $m(d, c);
                    f && (d.style[f] = e)
                }
        },
        bn = {},
        $m = function(a, b) {
            var c = bn[b];
            if (!c) {
                var d = Vh(b);
                c = d;
                void 0 === a.style[d] && (d = (rc ? "Webkit" : qc ? "Moz" : oc ? "ms" : null) + Xh(d), void 0 !== a.style[d] && (c = d));
                bn[b] = c
            }
            return c
        },
        cn = function(a, b) {
            var c = a.style[Vh(b)];
            return "undefined" !== typeof c ? c : a.style[$m(a, b)] || ""
        },
        dn = function(a, b) {
            var c = $h(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a,
                null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        en = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        fn = function(a) {
            var b = $h(a),
                c = new Kh(0, 0);
            var d = b ? $h(b) : document;
            d = !oc || 9 <= Number(Hc) || ei(ai(d).g) ? d.documentElement : d.body;
            if (a == d) return c;
            a = en(a);
            b = gi(ai(b).g);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        gn = function(a, b) {
            var c = new Kh(0, 0),
                d = I($h(a));
            if (!kc(d, "parent")) return c;
            do {
                if (d == b) var e = fn(a);
                else e = en(a), e = new Kh(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d &&
                d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        hn = function() {
            var a = "100%";
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        kn = function(a) {
            var b = jn;
            if ("none" != (dn(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        jn = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = rc && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = en(a), new H(a.right - a.left, a.bottom - a.top)) : new H(b, c)
        },
        on = function(a) {
            var b = $h(a),
                c = oc && a.currentStyle;
            if (c && ei(ai(b).g) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = ln(a, c.width, "width", "pixelWidth"), a = ln(a, c.height, "height", "pixelHeight"), new H(b, a);
            c = new H(a.offsetWidth, a.offsetHeight);
            if (oc) {
                b = mn(a, "paddingLeft");
                var d = mn(a, "paddingRight"),
                    e = mn(a, "paddingTop"),
                    f = mn(a, "paddingBottom");
                b = new J(e, d, f, b)
            } else b = dn(a, "paddingLeft"),
                d = dn(a, "paddingRight"), e = dn(a, "paddingTop"), f = dn(a, "paddingBottom"), b = new J(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(b));
            !oc || 9 <= Number(Hc) ? (d = dn(a, "borderLeftWidth"), e = dn(a, "borderRightWidth"), f = dn(a, "borderTopWidth"), a = dn(a, "borderBottomWidth"), a = new J(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d))) : (d = nn(a, "borderLeft"), e = nn(a, "borderRight"), f = nn(a, "borderTop"), a = nn(a, "borderBottom"), a = new J(f, e, a, d));
            return new H(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top -
                b.bottom - a.bottom)
        },
        ln = function(a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var e = a.style[c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return +b
        },
        mn = function(a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? ln(a, b, "left", "pixelLeft") : 0
        },
        pn = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        nn = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in pn ? pn[b] :
                ln(a, b, "left", "pixelLeft")
        };
    var qn = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };

    function rn(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && kc(a, "parentElement") ? rn(li(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var sn = function(a, b, c, d) {
        if (!a) return d;
        d = rn(a, b, c, d);
        if (!d.done) try {
            var e = $h(a),
                f = e && I(e);
            return sn(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };

    function tn(a) {
        var b = !oc || Ec();
        return sn(a, function(c, d) {
            c = kc(d, "style") && d.style && cn(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var un = function(a) {
            return sn(a, function(b, c) {
                return !(!kc(c, "style") || !c.style || "none" !== cn(c, "display"))
            }, function(b) {
                return b
            }, !1) ? !0 : tn(a)
        },
        vn = function(a) {
            return new J(a.top, a.right, a.bottom, a.left)
        },
        wn = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new J(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        xn = function(a) {
            return null != a && 0 <= a && 1 >= a
        };

    function yn() {
        var a = zb();
        return a ? Vb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return ub(a, b)
        }) || ub(a, "OMI/") && !ub(a, "XiaoMi/") ? !0 : ub(a, "Presto") && ub(a, "Linux") && !ub(a, "X11") && !ub(a, "Android") && !ub(a, "Mobi") : !1
    }

    function zn() {
        var a = zb();
        return ub(a, "AppleTV") || ub(a, "Apple TV") || ub(a, "CFNetwork") || ub(a, "tvOS")
    }

    function An() {
        var a;
        (a = ub(zb(), "CrKey") || ub(zb(), "PlayStation") || ub(zb(), "Roku") || yn() || ub(zb(), "Xbox") || zn()) || (a = zb(), a = ub(a, "sdk_google_atv_x86") || ub(a, "Android TV"));
        return a
    };
    var Cn = function() {
            this.l = !wi(P.top);
            this.C = pi() || qi();
            var a = Sl();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(ri)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.g = new J(0, 0, 0, 0);
            this.o = new H(0, 0);
            this.A = new H(0, 0);
            this.I = new J(0, 0, 0, 0);
            this.frameOffset = new Kh(0, 0);
            this.B = 0;
            this.M = !1;
            this.j = !(!P || !Xm(P).Da);
            Bn(this)
        },
        Dn = function(a, b) {
            b && b.screen && (a.o = new H(b.screen.width, b.screen.height))
        },
        En = function(a, b) {
            var c = a.g ? new H(a.g.getWidth(), a.g.getHeight()) :
                new H(0, 0);
            b = void 0 === b ? P : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0,
                e = 0;
            try {
                var f = b.document,
                    g = f.body,
                    h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight,
                        m = h.scrollWidth,
                        n = h.offsetHeight,
                        p = h.offsetWidth;
                    h.clientHeight != n && (k = g.scrollHeight, m = g.scrollWidth, n = g.offsetHeight, p = g.offsetWidth);
                    k > c.height ? k > n ? (d = k, e = m) : (d = n, e = p) : k < n ? (d = k, e = m) : (d = n, e = p)
                }
                var q =
                    new H(e, d)
            } catch (t) {
                q = new H(-12245933, -12245933)
            }
            a.A = q
        },
        Bn = function(a) {
            P && P.document && (a.I = Zm(!1, P, a.C), a.g = Zm(!0, P, a.C), En(a, P), Dn(a, P))
        },
        Gn = function() {
            var a = Fn();
            if (0 < a.B || a.M) return !0;
            a = jm().j.isVisible();
            var b = 0 === ej(Kl);
            return a || b
        },
        Fn = function() {
            return G(Cn)
        };
    var Hn = function(a) {
        this.l = a;
        this.j = 0;
        this.g = null
    };
    Hn.prototype.cancel = function() {
        jm().clearTimeout(this.g);
        this.g = null
    };
    var In = function(a) {
        var b = jm(),
            c = O().g.g;
        a.g = b.setTimeout(pm(c, Gm(143, function() {
            a.j++;
            a.l.sample()
        })), Pm())
    };
    var Jn = function(a, b, c) {
        this.l = a;
        this.ka = void 0 === c ? "na" : c;
        this.o = [];
        this.va = !1;
        this.A = new Qm(-1, !0, this);
        this.g = this;
        this.M = b;
        this.H = this.F = !1;
        this.Y = "uk";
        this.P = !1;
        this.C = !0
    };
    Jn.prototype.G = function() {
        return !1
    };
    Jn.prototype.initialize = function() {
        return this.va = !0
    };
    Jn.prototype.Cb = function() {
        return this.g.Y
    };
    Jn.prototype.Tb = function() {
        return this.g.H
    };
    var Ln = function(a, b, c) {
        if (!a.H || (void 0 === c ? 0 : c)) a.H = !0, a.Y = b, a.M = 0, a.g != a || Kn(a)
    };
    Jn.prototype.getName = function() {
        return this.g.ka
    };
    Jn.prototype.fb = function() {
        return this.g.aa()
    };
    Jn.prototype.aa = function() {
        return {}
    };
    Jn.prototype.Qa = function() {
        return this.g.M
    };
    var Mn = function(a, b) {
        Zb(a.o, b) || (a.o.push(b), b.Eb(a.g), b.gb(a.A), b.Ma() && (a.F = !0))
    };
    Jn.prototype.U = function() {
        var a = Fn();
        a.g = Zm(!0, this.l, a.C)
    };
    Jn.prototype.W = function() {
        Dn(Fn(), this.l)
    };
    Jn.prototype.ba = function() {
        return this.A.g
    };
    var Nn = function(a) {
        a = a.g;
        a.W();
        a.U();
        var b = Fn();
        b.I = Zm(!1, a.l, b.C);
        En(Fn(), a.l);
        a.A.g = a.ba()
    };
    Jn.prototype.sample = function() {};
    Jn.prototype.isActive = function() {
        return this.g.C
    };
    var On = function(a) {
            a.F = a.o.length ? Vb(a.o, function(b) {
                return b.Ma()
            }) : !1
        },
        Pn = function(a) {
            var b = ec(a.o);
            Qb(b, function(c) {
                c.gb(a.A)
            })
        },
        Kn = function(a) {
            var b = ec(a.o);
            Qb(b, function(c) {
                c.Eb(a.g)
            });
            a.g != a || Pn(a)
        };
    l = Jn.prototype;
    l.Eb = function(a) {
        var b = this.g;
        this.g = a.Qa() >= this.M ? a : this;
        b !== this.g ? (this.C = this.g.C, Kn(this)) : this.C !== this.g.C && (this.C = this.g.C, Kn(this))
    };
    l.gb = function(a) {
        if (a.j === this.g) {
            var b = this.A,
                c = this.F;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.A = a;
            !c && Pn(this)
        }
    };
    l.Ma = function() {
        return this.F
    };
    l.X = function() {
        this.P = !0
    };
    l.Ca = function() {
        return this.P
    };
    var Qn = function(a, b, c, d) {
        this.l = a;
        this.g = new J(0, 0, 0, 0);
        this.o = new J(0, 0, 0, 0);
        this.j = b;
        this.T = c;
        this.H = d;
        this.G = !1;
        this.timestamp = -1;
        this.I = new Rm(b.A, this.g, new J(0, 0, 0, 0), 0, 0, Om(), 0)
    };
    l = Qn.prototype;
    l.cd = function() {
        return !0
    };
    l.dc = function() {};
    l.X = function() {
        if (!this.Ca()) {
            var a = this.j;
            $b(a.o, this);
            a.F && this.Ma() && On(a);
            this.dc();
            this.G = !0
        }
    };
    l.Ca = function() {
        return this.G
    };
    l.fb = function() {
        return this.j.fb()
    };
    l.Qa = function() {
        return this.j.Qa()
    };
    l.Cb = function() {
        return this.j.Cb()
    };
    l.Tb = function() {
        return this.j.Tb()
    };
    l.Eb = function() {};
    l.gb = function() {
        this.ab()
    };
    l.Ma = function() {
        return this.H
    };
    var Rn = function(a) {
        this.o = !1;
        this.g = a;
        this.A = function() {}
    };
    l = Rn.prototype;
    l.Qa = function() {
        return this.g.Qa()
    };
    l.Cb = function() {
        return this.g.Cb()
    };
    l.Tb = function() {
        return this.g.Tb()
    };
    l.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.ec(a, b, c), Mn(this.g, d));
        return d
    };
    l.Zd = function() {
        return this.Kb()
    };
    l.Kb = function() {
        return !1
    };
    l.init = function(a) {
        return this.g.initialize() ? (Mn(this.g, this), this.A = a, !0) : !1
    };
    l.Eb = function(a) {
        0 == a.Qa() && this.A(a.Cb(), this)
    };
    l.gb = function() {};
    l.Ma = function() {
        return !1
    };
    l.X = function() {
        this.o = !0
    };
    l.Ca = function() {
        return this.o
    };
    l.fb = function() {
        return {}
    };
    var Sn = function(a, b, c) {
            this.l = void 0 === c ? 0 : c;
            this.j = a;
            this.g = null == b ? "" : b
        },
        Tn = function(a) {
            switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16
            }
        },
        Un = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.j < b.j ? !0 : a.j > b.j ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var Vn = function() {
        this.l = 0;
        this.g = [];
        this.j = !1
    };
    Vn.prototype.add = function(a, b, c) {
        ++this.l;
        a = new Sn(a, b, c);
        this.g.push(new Sn(a.j, a.g, a.l + this.l / 4096));
        this.j = !0;
        return this
    };
    var Wn = function(a, b) {
            Qb(b.g, function(c) {
                a.add(c.j, c.g, Tn(c))
            })
        },
        Xn = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = void 0 === d ? !0 : d;
            Ci(b, function(e, f) {
                d && void 0 === e || a.add(f, e, c)
            });
            return a
        },
        Zn = function(a) {
            var b = Yn;
            a.j && (gc(a.g, function(c, d) {
                return Un(d, c) ? 1 : Un(c, d) ? -1 : 0
            }), a.j = !1);
            return Ub(a.g, function(c, d) {
                d = b(d);
                return "" + c + ("" != c && "" != d ? "&" : "") + d
            }, "")
        };
    var Yn = function(a) {
        var b = a.j;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Zb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var $n = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new Vn;
        void 0 !== a && Wn(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    };
    $n.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = Zn(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };
    var ao = function(a) {
            var b = [],
                c = [];
            $g(a, function(d, e) {
                if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                        b.unshift(d);
                        break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d);
                        break;
                    default:
                        b.push(d)
                }
            });
            return b.concat(c)
        },
        bo = function(a) {
            a = a.toString();
            jm();
            Yi(P, a)
        };
    var co = function() {
        this.g = 0
    };

    function eo(a) {
        a && "function" == typeof a.X && a.X()
    };
    var Q = function() {
        this.M = this.M;
        this.I = this.I
    };
    Q.prototype.M = !1;
    Q.prototype.Ca = function() {
        return this.M
    };
    Q.prototype.X = function() {
        this.M || (this.M = !0, this.L())
    };
    var go = function(a, b) {
            fo(a, cb(eo, b))
        },
        fo = function(a, b) {
            a.M ? b() : (a.I || (a.I = []), a.I.push(b))
        };
    Q.prototype.L = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };
    var ho = function(a, b, c) {
        Qb(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.A())) {
                d.g = !0;
                var f = d.j(),
                    g = new Vn;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.o);
                d = G(co);
                g.add("i", d.g++);
                g.add("adk", e);
                Xn(g, f);
                e = new $n(g);
                bo(e)
            }
        })
    };
    var io = function() {
            this.j = this.l = this.A = this.g = 0
        },
        jo = function(a, b, c, d) {
            b && (a.g += c, a.j += c, a.A += c, a.l = Math.max(a.l, a.A));
            if (void 0 === d ? !b : d) a.A = 0
        };
    var ko = [1, .75, .5, .3, 0],
        lo = function(a) {
            this.j = a = void 0 === a ? ko : a;
            this.g = Tb(this.j, function() {
                return new io
            })
        },
        no = function(a, b) {
            return mo(a, function(c) {
                return c.g
            }, void 0 === b ? !0 : b)
        },
        po = function(a, b) {
            return oo(a, b, function(c) {
                return c.g
            })
        },
        qo = function(a, b) {
            return mo(a, function(c) {
                return c.l
            }, void 0 === b ? !0 : b)
        },
        ro = function(a, b) {
            return oo(a, b, function(c) {
                return c.l
            })
        },
        so = function(a, b) {
            return oo(a, b, function(c) {
                return c.j
            })
        },
        to = function(a) {
            Qb(a.g, function(b) {
                b.j = 0
            })
        },
        uo = function(a, b, c, d, e, f, g) {
            g = void 0 ===
                g ? !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.j.length; f++) {
                var h = a.j[f],
                    k = 0 < c && c >= h;
                h = !(0 < b && b >= h) || d;
                jo(a.g[f], g && k, e, !g || h)
            }
        },
        mo = function(a, b, c) {
            a = Tb(a.g, function(d) {
                return b(d)
            });
            return c ? a : vo(a)
        },
        oo = function(a, b, c) {
            var d = Yb(a.j, function(e) {
                return b <= e
            });
            return -1 == d ? 0 : c(a.g[d])
        },
        vo = function(a) {
            return Tb(a, function(b, c, d) {
                return 0 < c ? d[c] - d[c - 1] : d[c]
            })
        };
    var wo = function() {
            this.j = new lo;
            this.Y = new io;
            this.H = this.C = -1;
            this.ha = 1E3;
            this.da = new lo([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.P = this.J = -1
        },
        xo = function(a, b) {
            return qo(a.j, void 0 === b ? !0 : b)
        };
    wo.prototype.M = function(a, b, c, d) {
        this.C = -1 != this.C ? Math.min(this.C, b.Z) : b.Z;
        this.H = Math.max(this.H, b.Z);
        this.J = -1 != this.J ? Math.min(this.J, b.ta) : b.ta;
        this.P = Math.max(this.P, b.ta);
        uo(this.da, b.ta, c.ta, b.g, a, d);
        uo(this.j, b.Z, c.Z, b.g, a, d);
        c = d || c.ub != b.ub ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        jo(this.Y, c, a, b)
    };
    wo.prototype.Ta = function() {
        return this.Y.l >= this.ha
    };
    if (Kl && Kl.URL) {
        var yo = Kl.URL,
            zo;
        if (zo = !!yo) {
            var Ao;
            a: {
                if (yo) {
                    var Bo = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                    try {
                        var Co = Bo.exec(decodeURIComponent(yo));
                        if (Co) {
                            Ao = Co[1] && 1 < Co[1].length ? Co[1].substring(1) : "true";
                            break a
                        }
                    } catch (a) {}
                }
                Ao = ""
            }
            zo = 0 < Ao.length
        }
        Cm.Od(!zo)
    }
    var Do = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = Gm(d, c);
        Ug(a, b, c, {
            capture: e
        })
    };
    var Eo = new J(0, 0, 0, 0);

    function Fo(a, b) {
        b = Go(b);
        return 0 === b ? 0 : Go(a) / b
    }

    function Go(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Ho(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                if (a = li(a) || a) {
                    var d = $h(a),
                        e = d && I(d),
                        f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }

    function Io(a, b, c) {
        if (!a || !b) return !1;
        b = Li(Ki(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        wi(window.top) && window.top && window.top.document && (window = window.top);
        if (!Ym()) return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = $h(c)) && b.defaultView && b.defaultView.frameElement) && Ho(b, a);
        var d = a === c;
        a = !d && a && oi(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Jo(a, b, c, d) {
        return Fn().l ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? Fm(208, function() {
            return Io(a, b, c)
        }) : !1
    };
    var Ko = new J(0, 0, 0, 0),
        Mo = function(a, b, c) {
            Q.call(this);
            this.position = Ki(Ko);
            this.Lc = this.zc();
            this.td = -2;
            this.Ig = Date.now();
            this.Pe = -1;
            this.Cc = b;
            this.Bc = null;
            this.Pb = !1;
            this.Qc = null;
            this.opacity = -1;
            this.xg = c;
            this.Jg = !1;
            this.wd = function() {};
            this.Re = function() {};
            this.ua = new Ml;
            this.ua.kb = a;
            this.ua.g = a;
            this.Ra = !1;
            this.qb = {
                zd: null,
                yd: null
            };
            this.Le = !0;
            this.bc = null;
            this.Fb = this.gg = !1;
            O().B++;
            this.ra = this.md();
            this.Oe = -1;
            this.ca = null;
            this.te = this.eg = !1;
            this.T = new Bl;
            Jl(this.T);
            Lo(this);
            1 == this.xg ? El(this.T,
                "od", 1) : El(this.T, "od", 0)
        };
    w(Mo, Q);
    Mo.prototype.L = function() {
        this.ua.g && (this.qb.zd && (Vg(this.ua.g, "mouseover", this.qb.zd), this.qb.zd = null), this.qb.yd && (Vg(this.ua.g, "mouseout", this.qb.yd), this.qb.yd = null));
        this.bc && this.bc.X();
        this.ca && this.ca.X();
        delete this.Lc;
        delete this.wd;
        delete this.Re;
        delete this.ua.kb;
        delete this.ua.g;
        delete this.qb;
        delete this.bc;
        delete this.ca;
        delete this.T;
        Q.prototype.L.call(this)
    };
    Mo.prototype.sb = function() {
        return this.ca ? this.ca.g : this.position
    };
    Mo.prototype.Fd = function(a) {
        O().Fd(a)
    };
    var Lo = function(a) {
        a = a.ua.kb;
        var b;
        if (b = a && a.getAttribute) b = /-[a-z]/.test("googleAvInapp") ? !1 : Ll && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Wh()) : !!a.getAttribute("data-" + Wh());
        b && (Fn().j = !0)
    };
    Mo.prototype.Ma = function() {
        return !1
    };
    Mo.prototype.zc = function() {
        return new wo
    };
    Mo.prototype.qa = function() {
        return this.Lc
    };
    var No = function(a, b) {
            b != a.Fb && (a.Fb = b, a = Fn(), b ? a.B++ : 0 < a.B && a.B--)
        },
        Oo = function(a, b) {
            if (a.ca) {
                if (b.getName() === a.ca.getName()) return;
                a.ca.X();
                a.ca = null
            }
            b = b.create(a.ua.g, a.T, a.Ma());
            if (b = null != b && b.cd() ? b : null) a.ca = b
        },
        Po = function(a, b, c) {
            if (!a.Bc || -1 == a.Cc || -1 === b.getTimestamp() || -1 === a.Bc.getTimestamp()) return 0;
            a = b.getTimestamp() - a.Bc.getTimestamp();
            return a > c ? 0 : a
        };
    Mo.prototype.qe = function(a) {
        return Po(this, a, 1E4)
    };
    var Qo = function(a, b, c) {
            if (a.ca) {
                a.ca.ab();
                var d = a.ca.I,
                    e = d.l,
                    f = e.g;
                if (null != d.o) {
                    var g = d.j;
                    a.Qc = new Kh(g.left - f.left, g.top - f.top)
                }
                f = a.Xc() ? Math.max(d.g, d.A) : d.g;
                g = {};
                null !== e.volume && (g.volume = e.volume);
                e = a.qe(d);
                a.Bc = d;
                a.Sd(f, b, c, !1, g, e, d.B)
            }
        },
        Ro = function(a) {
            if (a.Pb && a.bc) {
                var b = 1 == Fl(a.T, "od"),
                    c = Fn().g,
                    d = a.bc,
                    e = a.ca ? a.ca.getName() : "ns",
                    f = a.Qc,
                    g = new H(c.getWidth(), c.getHeight());
                c = a.Xc();
                a = {
                    Fg: e,
                    Qc: f,
                    Tg: g,
                    Xc: c,
                    Z: a.ra.Z,
                    Og: b
                };
                if (b = d.j) {
                    b.ab();
                    e = b.I;
                    f = e.l.g;
                    var h = g = null;
                    null != e.o && f && (g = e.j, g = new Kh(g.left -
                        f.left, g.top - f.top), h = new H(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.g, e.A) : e.g;
                    c = {
                        Fg: b.getName(),
                        Qc: g,
                        Tg: h,
                        Xc: c,
                        Og: !1,
                        Z: e
                    }
                } else c = null;
                c && ho(d, a, c)
            }
        };
    l = Mo.prototype;
    l.Sd = function(a, b, c, d, e, f, g) {
        this.Ra || (this.Pb && (a = this.dd(a, c, e, g), d = d && this.ra.Z >= (this.ub() ? .3 : .5), this.Td(f, a, d), this.Cc = b, 0 < a.Z && -1 === this.Oe && (this.Oe = b), -1 == this.Pe && this.Ta() && (this.Pe = b), -2 == this.td && (this.td = Go(this.sb()) ? a.Z : -1), this.ra = a), this.wd(this))
    };
    l.Td = function(a, b, c) {
        this.qa().M(a, b, this.ra, c)
    };
    l.md = function() {
        return new pl
    };
    l.dd = function(a, b, c, d) {
        c = this.md();
        c.g = b;
        b = jm().j;
        b = 0 === ej(Kl) ? -1 : b.isVisible() ? 0 : 1;
        c.j = b;
        c.Z = this.hd(a);
        c.ub = this.ub();
        c.ta = d;
        return c
    };
    l.hd = function(a) {
        return 0 === this.opacity && 1 === Fl(this.T, "opac") ? 0 : a
    };
    l.ub = function() {
        return !1
    };
    l.Xc = function() {
        return this.eg || this.gg
    };
    l.ya = function() {
        return 0
    };
    l.Ta = function() {
        return this.Lc.Ta()
    };
    l.se = function() {
        var a = this.Pb;
        a = (this.te || this.Ca()) && !a;
        var b = 2 !== O().j || this.Jg;
        return this.Ra || b && a ? 2 : this.Ta() ? 4 : 3
    };
    l.xc = function() {
        return 0
    };
    var So = function(a, b, c) {
        b && (a.wd = b);
        c && (a.Re = c)
    };
    var To = function() {};
    To.prototype.next = function() {
        return Uo
    };
    var Uo = {
        done: !0,
        value: void 0
    };
    To.prototype.zb = function() {
        return this
    };
    var Vo = function() {
            this.A = this.g = this.l = this.j = this.o = 0
        },
        Wo = function(a) {
            var b = {};
            b = (b.ptlt = Date.now() - a.o, b);
            var c = a.j;
            c && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.A) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var Xo = function() {
        pl.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.l = !1;
        this.mediaTime = -1
    };
    w(Xo, pl);
    var Yo = function(a) {
        return xn(a.volume) && 0 < a.volume
    };
    var $o = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Array.isArray(f) && d(e)) return Zo(f, b, c)
            }
        },
        ap = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        bp = function(a) {
            return function(b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        Zo = function(a, b, c) {
            return void 0 === c || c ? Sb(a, function(d, e) {
                return Zb(b, e)
            }) : Tb(b, function(d, e, f) {
                return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g +
                        h
                }, 0)
            })
        };
    var cp = bp([void 0, 1, 2, 3, 4, 8, 16]),
        dp = bp([void 0, 4, 8, 16]),
        ep = {
            sv: "sv",
            v: "v",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: ap("p0", dp),
            p1: ap("p1", dp),
            p2: ap("p2", dp),
            p3: ap("p3", dp),
            cp: "cp",
            tos: "tos",
            mtos: "mtos",
            amtos: "amtos",
            mtos1: $o("mtos1", [0, 2, 4], !1, dp),
            mtos2: $o("mtos2", [0, 2, 4], !1, dp),
            mtos3: $o("mtos3", [0, 2, 4], !1, dp),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: ap("a0", dp),
            a1: ap("a1", dp),
            a2: ap("a2", dp),
            a3: ap("a3", dp),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: ap("c0", dp),
            c1: ap("c1", dp),
            c2: ap("c2", dp),
            c3: ap("c3", dp),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: ap("qmtos", cp),
            qnc: ap("qnc", cp),
            qmv: ap("qmv", cp),
            qnv: ap("qnv", cp),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: ap("ss0", dp),
            ss1: ap("ss1", dp),
            ss2: ap("ss2", dp),
            ss3: ap("ss3", dp),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids",
            omidpv: "omidpv",
            omidam: "omidam",
            omidct: "omidct",
            omidia: "omidia",
            omiddc: "omiddc",
            omidlat: "omidlat",
            omiddit: "omiddit",
            nopd: "nopd",
            co: "co"
        },
        fp = Object.assign({}, ep, {
            avid: function(a) {
                return function() {
                    return a
                }
            }("audio"),
            avas: "avas",
            vs: "vs"
        }),
        gp = {
            atos: "atos",
            avt: $o("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: function(a, b) {
                return function(c) {
                    return void 0 === c[a] && void 0 !== b ? b : c[a]
                }
            }("ss", 0),
            t: "t"
        };
    var hp = function() {
        this.j = this.g = ""
    };
    var ip = function() {},
        jp = function(a, b) {
            var c = {};
            if (void 0 !== a)
                if (null != b)
                    for (var d in b) {
                        var e = b[d];
                        d in Object.prototype || null != e && (c[d] = "function" === typeof e ? e(a) : a[e])
                    } else oh(c, a);
            return Zn(Xn(new Vn, c))
        };
    var kp = function() {
        var a = {};
        this.j = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a.mut = [33554432, 33554432], a.umutb = [67108864, 67108864], a.tvoff = [134217728, 134217728], a);
        this.g = {};
        for (var b in this.j) 0 < this.j[b][1] && (this.g[b] = 0);
        this.l = 0
    };
    kp.prototype.reportEvent = function(a) {
        var b = this.j[a],
            c = b[1];
        this.l += b[0];
        0 < c && 0 == this.g[a] && (this.g[a] = 1)
    };
    var lp = function(a) {
            var b = eh(a.j),
                c = 0,
                d;
            for (d in a.g) Zb(b, d) && 1 == a.g[d] && (c += a.j[d][1], a.g[d] = 2);
            return c
        },
        mp = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (1 == d || 2 == d) b += a.j[c][1]
            }
            return b
        };
    var np = function() {
        this.g = this.j = 0
    };
    np.prototype.getValue = function() {
        return this.j
    };
    var op = function(a, b, c) {
        32 <= b || (a.g & 1 << b && !c ? a.j &= ~(1 << b) : a.g & 1 << b || !c || (a.j |= 1 << b), a.g |= 1 << b)
    };
    var pp = function() {
        wo.call(this);
        this.l = new io;
        this.W = this.F = this.N = 0;
        this.I = -1;
        this.ka = new io;
        this.o = new io;
        this.g = new lo;
        this.B = this.A = -1;
        this.G = new io;
        this.ha = 2E3;
        this.U = new np;
        this.ba = new np;
        this.aa = new np
    };
    w(pp, wo);
    var qp = function(a, b, c) {
        var d = a.W;
        Nm || c || -1 == a.I || (d += b - a.I);
        return d
    };
    pp.prototype.M = function(a, b, c, d) {
        if (!b.l) {
            wo.prototype.M.call(this, a, b, c, d);
            var e = Yo(b) && Yo(c),
                f = .5 <= (d ? Math.min(b.Z, c.Z) : c.Z);
            xn(b.volume) && (this.A = -1 != this.A ? Math.min(this.A, b.volume) : b.volume, this.B = Math.max(this.B, b.volume));
            f && (this.N += a, this.F += e ? a : 0);
            uo(this.g, b.Z, c.Z, b.g, a, d, e);
            jo(this.l, !0, a);
            jo(this.o, e, a);
            jo(this.G, c.fullscreen, a);
            jo(this.ka, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            op(this.U, a, b.isVisible());
            op(this.ba, a, 1 <= b.Z);
            op(this.aa, a, Yo(b))
        }
    };
    var rp = function() {
        this.l = !1
    };
    rp.prototype.j = function(a) {
        this.l || (this.g(a) ? (a = this.M.report(this.A, a), this.o |= a, a = 0 == a) : a = !1, this.l = a)
    };
    var sp = function(a, b) {
        this.l = !1;
        this.A = a;
        this.M = b;
        this.o = 0
    };
    w(sp, rp);
    sp.prototype.g = function() {
        return !0
    };
    sp.prototype.B = function() {
        return !1
    };
    sp.prototype.getId = function() {
        var a = this,
            b = ih(function(c) {
                return c == a.A
            });
        return Wm[b].toString()
    };
    sp.prototype.toString = function() {
        var a = "";
        this.B() && (a += "c");
        this.l && (a += "s");
        0 < this.o && (a += ":" + this.o);
        return this.getId() + a
    };
    var tp = function(a, b) {
        sp.call(this, a, b);
        this.C = []
    };
    w(tp, sp);
    tp.prototype.j = function(a, b) {
        b = void 0 === b ? null : b;
        null != b && this.C.push(b);
        sp.prototype.j.call(this, a)
    };
    var up = function() {};
    var vp = function() {};
    w(vp, up);
    vp.prototype.j = function() {
        return null
    };
    vp.prototype.l = function() {
        return []
    };
    var wp = function(a, b, c, d) {
        Qn.call(this, a, b, c, d)
    };
    w(wp, Qn);
    l = wp.prototype;
    l.fd = function() {
        if (this.l) {
            var a = this.l,
                b = this.j.g.l;
            try {
                try {
                    var c = vn(a.getBoundingClientRect())
                } catch (m) {
                    c = new J(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = gn(a, b),
                    g = f.x,
                    h = f.y;
                var k = new J(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (m) {
                k = Ki(Eo)
            }
            this.g = k
        }
    };
    l.he = function() {
        this.o = this.j.A.g
    };
    l.ve = function(a) {
        var b = 1 == Fl(this.T, "od");
        return Jo(a, this.o, this.l, b)
    };
    l.ie = function() {
        this.timestamp = Om()
    };
    l.ab = function() {
        this.ie();
        this.fd();
        if (this.l && "number" === typeof this.l.videoWidth && "number" === typeof this.l.videoHeight) {
            var a = this.l;
            var b = new H(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = a.getWidth(),
                d = a.getHeight(),
                e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Ki(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
            this.g = a
        }
        this.he();
        a = this.g;
        c = this.o;
        a = a.left <=
            c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new J(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new J(0, 0, 0, 0);
        c = a.top >= a.bottom || a.left >= a.right ? new J(0, 0, 0, 0) : a;
        a = this.j.A;
        b = e = d = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.ve(c) ? c = new J(0, 0, 0, 0) : (d = Fn().o, b = new J(0, d.height, d.width, 0), d = Fo(c, this.g), e = Fo(c, Fn().g), b = Fo(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new J(0, 0, 0, 0) : Li(c, -this.g.left, -this.g.top);
        Gn() || (e = d = 0);
        this.I = new Rm(a, this.g, c, d, e, this.timestamp, b)
    };
    l.getName = function() {
        return this.j.getName()
    };
    var xp = new J(0, 0, 0, 0),
        yp = function(a, b, c) {
            Qn.call(this, null, a, b, c);
            this.C = a.isActive();
            this.B = 0
        };
    w(yp, wp);
    l = yp.prototype;
    l.cd = function() {
        this.A();
        return !0
    };
    l.gb = function() {
        wp.prototype.ab.call(this)
    };
    l.ie = function() {};
    l.fd = function() {};
    l.ab = function() {
        this.A();
        wp.prototype.ab.call(this)
    };
    l.Eb = function(a) {
        a = a.isActive();
        a !== this.C && (a ? this.A() : (Fn().g = new J(0, 0, 0, 0), this.g = new J(0, 0, 0, 0), this.o = new J(0, 0, 0, 0), this.timestamp = -1));
        this.C = a
    };

    function zp(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var Ap = {},
        Bp = (Ap.firstquartile = 0, Ap.midpoint = 1, Ap.thirdquartile = 2, Ap.complete = 3, Ap),
        Cp = function(a, b, c, d, e, f) {
            f = void 0 === f ? new vp : f;
            Mo.call(this, b, c, d);
            this.Ed = e;
            this.ld = 0;
            this.ia = {};
            this.ga = new kp;
            this.Te = {};
            this.ma = "";
            this.lb = null;
            this.Pa = !1;
            this.g = [];
            this.Va = f.j();
            this.B = f.l();
            this.o = null;
            this.l = -1;
            this.aa = this.G = void 0;
            this.J = this.H = 0;
            this.U = -1;
            this.ka = this.da = !1;
            this.P = this.F = this.j = this.Jb = this.Oa = 0;
            new lo;
            this.W = this.ba = 0;
            this.ha = -1;
            this.la = 0;
            this.C = Og;
            this.N = [this.zc()];
            this.Bb = 2;
            this.yb = {};
            this.yb.pause = "p";
            this.yb.resume = "r";
            this.yb.skip = "s";
            this.yb.mute = "m";
            this.yb.unmute = "um";
            this.yb.exitfullscreen = "ef";
            this.A = null;
            this.Ga = this.Ha = !1;
            this.Ab = Math.floor(Date.now() / 1E3 - 1704067200);
            this.Y = 0
        };
    w(Cp, Mo);
    Cp.prototype.Ma = function() {
        return !0
    };
    var Dp = function(a) {
            a.te = !0;
            0 != a.la && (a.la = 3)
        },
        Ep = function(a) {
            return void 0 === a ? a : Number(a) ? qn(a, 3) : 0
        };
    l = Cp.prototype;
    l.qe = function(a) {
        return Po(this, a, Math.max(1E4, this.l / 3))
    };
    l.Sd = function(a, b, c, d, e, f, g) {
        var h = this,
            k = this.C(this) || {};
        oh(k, e);
        this.l = k.duration || this.l;
        this.G = k.isVpaid || this.G;
        this.aa = k.isYouTube || this.aa;
        jm();
        this.Ga = !1;
        e = Fp(this, b);
        1 === Gp(this) && (f = e);
        Mo.prototype.Sd.call(this, a, b, c, d, k, f, g);
        this.Va && this.Va.l && Qb(this.B, function(m) {
            m.j(h)
        })
    };
    l.Td = function(a, b, c) {
        Mo.prototype.Td.call(this, a, b, c);
        Hp(this).M(a, b, this.ra, c);
        this.ka = Yo(this.ra) && Yo(b); - 1 == this.U && this.da && (this.U = this.qa().l.g);
        this.ga.l = 0;
        a = this.Ta();
        b.isVisible() && this.ga.reportEvent("vs");
        a && this.ga.reportEvent("vw");
        xn(b.volume) && this.ga.reportEvent("am");
        Yo(b) ? this.ga.reportEvent("a") : this.ga.reportEvent("mut");
        this.Fb && this.ga.reportEvent("f"); - 1 != b.j && (this.ga.reportEvent("bm"), 1 == b.j && (this.ga.reportEvent("b"), Yo(b) && this.ga.reportEvent("umutb")));
        Yo(b) && b.isVisible() &&
            this.ga.reportEvent("avs");
        this.ka && a && this.ga.reportEvent("avw");
        0 < b.Z && this.ga.reportEvent("pv");
        Ip(this, this.qa().l.g, !0) && this.ga.reportEvent("gdr");
        2E3 <= ro(this.qa().j, 1) && this.ga.reportEvent("pmx");
        this.Ga && this.ga.reportEvent("tvoff")
    };
    l.zc = function() {
        return new pp
    };
    l.qa = function() {
        return this.Lc
    };
    var Hp = function(a, b) {
        return a.N[null != b && b < a.N.length ? b : a.N.length - 1]
    };
    Cp.prototype.md = function() {
        return new Xo
    };
    Cp.prototype.dd = function(a, b, c, d) {
        a = Mo.prototype.dd.call(this, a, b, c, void 0 === d ? -1 : d);
        a.fullscreen = this.Fb;
        a.l = 2 == this.la;
        a.volume = c.volume;
        xn(a.volume) || (this.Oa++, b = this.ra, xn(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
        return a
    };
    var Gp = function(a) {
            var b = !!Fl(O().T, "umt");
            return a.G || !b && !a.aa ? 0 : 1
        },
        Fp = function(a, b) {
            2 == a.la ? b = 0 : -1 == a.Cc ? b = 0 : (b -= a.Cc, b = b > Math.max(1E4, a.l / 3) ? 0 : b);
            var c = a.C(a) || {};
            c = void 0 !== c.currentTime ? c.currentTime : a.H;
            var d = c - a.H,
                e = 0;
            0 <= d ? (a.J += b, a.W += Math.max(b - d, 0), e = Math.min(d, a.J)) : a.ba += Math.abs(d);
            0 != d && (a.J = 0); - 1 == a.ha && 0 < d && (a.ha = 0 <= Mm ? Om() - Mm : -1);
            a.H = c;
            return e
        };
    Cp.prototype.hd = function(a) {
        return Fn(), this.Fb ? 1 : Mo.prototype.hd.call(this, a)
    };
    Cp.prototype.ya = function() {
        return 1
    };
    Cp.prototype.getDuration = function() {
        return this.l
    };
    var Jp = function(a, b) {
            Vb(a.B, function(c) {
                return c.A == b.A
            }) || a.B.push(b)
        },
        Kp = function(a) {
            var b = po(a.qa().g, 1);
            return Ip(a, b)
        },
        Ip = function(a, b, c) {
            return 15E3 <= b ? !0 : a.da ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.U ? b >= a.U : !1 : !1
        },
        Np = function(a) {
            var b = {},
                c = Fn();
            b.insideIframe = c.l;
            b.unmeasurable = a.Ra;
            b.position = a.sb();
            b.exposure = a.ra.Z;
            b.documentSize = c.A;
            b.viewportSize = new H(c.g.getWidth(), c.g.getHeight());
            null != a.A && (b.presenceData = a.A);
            b.screenShare = a.ra.ta;
            return b
        },
        Op = function(a) {
            var b = qn(a.ra.Z, 2),
                c = a.ga.l,
                d = a.ra,
                e = Hp(a),
                f = Ep(e.A),
                g = Ep(e.B),
                h = Ep(d.volume),
                k = qn(e.C, 2),
                m = qn(e.H, 2),
                n = qn(d.Z, 2),
                p = qn(e.J, 2),
                q = qn(e.P, 2);
            d = qn(d.ta, 2);
            a = Ki(a.sb());
            a.round();
            e = xo(e, !1);
            return {
                Sg: b,
                Vb: c,
                Mc: f,
                Ic: g,
                Mb: h,
                Nc: k,
                Jc: m,
                Z: n,
                Oc: p,
                Kc: q,
                ta: d,
                position: a,
                Pc: e
            }
        },
        Qp = function(a, b) {
            Pp(a.g, b, function() {
                return {
                    Sg: 0,
                    Vb: void 0,
                    Mc: -1,
                    Ic: -1,
                    Mb: -1,
                    Nc: -1,
                    Jc: -1,
                    Z: -1,
                    Oc: -1,
                    Kc: -1,
                    ta: -1,
                    position: void 0,
                    Pc: []
                }
            });
            a.g[b] = Op(a)
        },
        Pp = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        Tp = function(a, b, c) {
            var d = a.Te[b];
            if (null != d) return d;
            d = Rp(a, b);
            var e = ih(function(f) {
                return f == b
            });
            a = Sp(a, d, d, c, Bp[jh[e]]);
            "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
            return a
        },
        Up = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        Sp = function(a, b, c, d, e) {
            if (a.Ra) return {
                "if": 0,
                vs: 0
            };
            var f = Ki(a.sb());
            f.round();
            var g = Fn(),
                h = O(),
                k = a.qa(),
                m = a.ca ? a.ca.getName() : "ns",
                n = {};
            n["if"] = g.l ? 1 : void 0;
            n.sdk = a.o ? a.o : void 0;
            n.t = a.Ig;
            n.p = [f.top, f.left, f.bottom, f.right];
            n.tos = no(k.j, !1);
            n.mtos = xo(k);
            n.mcvt = k.Y.l;
            n.ps = void 0;
            n.vht = qp(k, Om(), 2 == a.la);
            n.mut = k.ka.l;
            n.a = Ep(a.ra.volume);
            n.mv = Ep(k.B);
            n.fs = a.Fb ? 1 : 0;
            n.ft = k.G.g;
            n.at = k.o.g;
            n.as = 0 < k.A ? 1 : 0;
            n.atos = no(k.g);
            n.ssb = no(k.da, !1);
            n.amtos = qo(k.g, !1);
            n.uac = a.Oa;
            n.vpt = k.l.g;
            "nio" == m && (n.nio = 1, n.avms = "nio");
            n.gmm = "4";
            n.gdr = Ip(a, k.l.g, !0) ? 1 : 0;
            n.efpf = a.Bb;
            if ("gsv" == m || "nis" == m) f = a.ca, 0 < f.B && (n.nnut = f.B);
            n.tcm = Gp(a);
            n.nmt = a.ba;
            n.bt = a.W;
            n.pst = a.ha;
            n.vpaid = a.G;
            n.dur = a.l;
            n.vmtime = a.H;
            n.is = a.ga.l;
            1 <= a.g.length && (n.i0 = a.g[0].Vb, n.a0 = [a.g[0].Mb], n.c0 = [a.g[0].Z], n.ss0 = [a.g[0].ta], f = a.g[0].position,
                n.p0 = f ? zp(f) : void 0);
            2 <= a.g.length && (n.i1 = a.g[1].Vb, n.a1 = Up(a.g[1].Mc, a.g[1].Mb, a.g[1].Ic), n.c1 = Up(a.g[1].Nc, a.g[1].Z, a.g[1].Jc), n.ss1 = Up(a.g[1].Oc, a.g[1].ta, a.g[1].Kc), f = a.g[1].position, n.p1 = f ? zp(f) : void 0, n.mtos1 = a.g[1].Pc);
            3 <= a.g.length && (n.i2 = a.g[2].Vb, n.a2 = Up(a.g[2].Mc, a.g[2].Mb, a.g[2].Ic), n.c2 = Up(a.g[2].Nc, a.g[2].Z, a.g[2].Jc), n.ss2 = Up(a.g[2].Oc, a.g[2].ta, a.g[2].Kc), f = a.g[2].position, n.p2 = f ? zp(f) : void 0, n.mtos2 = a.g[2].Pc);
            4 <= a.g.length && (n.i3 = a.g[3].Vb, n.a3 = Up(a.g[3].Mc, a.g[3].Mb, a.g[3].Ic),
                n.c3 = Up(a.g[3].Nc, a.g[3].Z, a.g[3].Jc), n.ss3 = Up(a.g[3].Oc, a.g[3].ta, a.g[3].Kc), f = a.g[3].position, n.p3 = f ? zp(f) : void 0, n.mtos3 = a.g[3].Pc);
            n.cs = mp(a.ga);
            b && (n.ic = lp(a.ga), n.dvpt = k.l.j, n.dvs = so(k.j, .5), n.dfvs = so(k.j, 1), n.davs = so(k.g, .5), n.dafvs = so(k.g, 1), c && (k.l.j = 0, to(k.j), to(k.g)), a.Ta() && (n.dtos = k.N, n.dav = k.F, n.dtoss = a.ld + 1, c && (k.N = 0, k.F = 0, a.ld++)), n.dat = k.o.j, n.dft = k.G.j, c && (k.o.j = 0, k.G.j = 0));
            n.ps = [g.A.width, g.A.height];
            n.bs = [g.g.getWidth(), g.g.getHeight()];
            n.scs = [g.o.width, g.o.height];
            n.dom = g.domain;
            a.Jb && (n.vds = a.Jb);
            if (0 < a.B.length || a.Va) b = ec(a.B), a.Va && b.push(a.Va), n.pings = Tb(b, function(p) {
                return p.toString()
            });
            b = Tb(Sb(a.B, function(p) {
                return p.B()
            }), function(p) {
                return p.getId()
            });
            fc(b);
            n.ces = b;
            a.j && (n.vmer = a.j);
            a.F && (n.vmmk = a.F);
            a.P && (n.vmiec = a.P);
            n.avms = a.ca ? a.ca.getName() : "ns";
            a.ca && oh(n, a.ca.fb());
            d ? (n.c = qn(a.ra.Z, 2), n.ss = qn(a.ra.ta, 2)) : n.tth = Om() - Lm;
            n.mc = qn(k.H, 2);
            n.nc = qn(k.C, 2);
            n.mv = Ep(k.B);
            n.nv = Ep(k.A);
            n.lte = qn(a.td, 2);
            d = Hp(a, e);
            xo(k);
            n.qmtos = xo(d);
            n.qnc = qn(d.C, 2);
            n.qmv = Ep(d.B);
            n.qnv =
                Ep(d.A);
            n.qas = 0 < d.A ? 1 : 0;
            n.qi = a.ma;
            n.avms || (n.avms = "geo");
            n.psm = k.U.g;
            n.psv = k.U.getValue();
            n.psfv = k.ba.getValue();
            n.psa = k.aa.getValue();
            h = Hl(h.T);
            h.length && (n.veid = h);
            a.A && oh(n, Wo(a.A));
            n.avas = a.xc();
            n.vs = a.se();
            n.co = Vp(a);
            return n
        },
        Rp = function(a, b) {
            if (Zb(Vm, b)) return !0;
            var c = a.ia[b];
            return void 0 !== c ? (a.ia[b] = !0, !c) : !1
        };
    Cp.prototype.se = function() {
        return this.Ra ? 2 : Kp(this) ? 5 : this.Ta() ? 4 : 3
    };
    Cp.prototype.xc = function() {
        return this.Ha ? 2E3 <= this.qa().o.l ? 4 : 3 : 2
    };
    var Vp = function(a) {
        var b = a.Y.toString(10).padStart(2, "0");
        b = "" + a.Ab + b;
        99 > a.Y && a.Y++;
        return b
    };
    var Wp = Date.now(),
        Zp = function() {
            this.g = {};
            var a = I();
            Xp(this, a, document);
            var b = Yp();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) Xp(this, c, c.document);
                    Xp(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        Yp = function() {
            var a = document.documentElement;
            try {
                if (!wi(I().top)) return "2";
                var b = [],
                    c = I(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && 0 != b.length ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        Xp = function(a, b, c) {
            Do(c, "mousedown", function() {
                return $p(a)
            }, 301);
            Do(b, "scroll", function() {
                return aq(a)
            }, 302);
            Do(c, "touchmove", function() {
                return bq(a)
            }, 303);
            Do(c, "mousemove", function() {
                return cq(a)
            }, 304);
            Do(c, "keydown", function() {
                return dq(a)
            }, 305)
        },
        $p = function(a) {
            $g(a.g, function(b) {
                1E5 < b.l || ++b.l
            })
        },
        aq = function(a) {
            $g(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        bq = function(a) {
            $g(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        dq = function(a) {
            $g(a.g, function(b) {
                1E5 < b.j || ++b.j
            })
        },
        cq = function(a) {
            $g(a.g, function(b) {
                1E5 < b.A || ++b.A
            })
        };
    var eq = function() {
            this.g = [];
            this.j = []
        },
        fq = function(a, b) {
            return Wb(a.g, function(c) {
                return c.ma == b
            })
        },
        gq = function(a, b) {
            return b ? Wb(a.g, function(c) {
                return c.ua.kb == b
            }) : null
        },
        hq = function(a, b) {
            return Wb(a.j, function(c) {
                return 2 == c.ya() && c.ma == b
            })
        },
        jq = function() {
            var a = iq;
            return 0 == a.g.length ? a.j : 0 == a.j.length ? a.g : dc(a.j, a.g)
        };
    eq.prototype.reset = function() {
        this.g = [];
        this.j = []
    };
    var kq = function(a, b) {
            a = 1 == b.ya() ? a.g : a.j;
            var c = Xb(a, function(d) {
                return d == b
            });
            return -1 != c ? (a.splice(c, 1), b.ca && b.ca.dc(), b.X(), !0) : !1
        },
        lq = function(a) {
            var b = iq;
            if (kq(b, a)) {
                switch (a.ya()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return hq(b, a.ma)
                        };
                        break;
                    case 1:
                        c = function() {
                            return fq(b, a.ma)
                        }
                }
                for (var d = c(); d; d = c()) kq(b, d)
            }
        },
        mq = function(a) {
            var b = iq;
            a = Sb(a, function(c) {
                return !gq(b, c.ua.kb)
            });
            b.g.push.apply(b.g, ia(a))
        },
        nq = function(a) {
            var b = [];
            Qb(a, function(c) {
                Vb(iq.g, function(d) {
                    return d.ua.kb ===
                        c.ua.kb && d.ma === c.ma
                }) || (iq.g.push(c), b.push(c))
            })
        },
        iq = G(eq);
    var oq = function() {
            this.g = this.j = null
        },
        pq = function(a, b) {
            if (null == a.j) return !1;
            var c = function(d, e) {
                b(d, e)
            };
            a.g = Wb(a.j, function(d) {
                return null != d && d.Zd()
            });
            a.g && (a.g.init(c) ? Nn(a.g.g) : b(a.g.g.Cb(), a.g));
            return null != a.g
        };
    var rq = function(a) {
        a = qq(a);
        Rn.call(this, a.length ? a[a.length - 1] : new Jn(P, 0));
        this.l = a;
        this.j = null
    };
    w(rq, Rn);
    l = rq.prototype;
    l.getName = function() {
        return (this.j ? this.j : this.g).getName()
    };
    l.fb = function() {
        return (this.j ? this.j : this.g).fb()
    };
    l.Qa = function() {
        return (this.j ? this.j : this.g).Qa()
    };
    l.init = function(a) {
        var b = !1;
        Qb(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.A = a, Mn(this.g, this));
        return b
    };
    l.X = function() {
        Qb(this.l, function(a) {
            a.X()
        });
        Rn.prototype.X.call(this)
    };
    l.Zd = function() {
        return Vb(this.l, function(a) {
            return a.G()
        })
    };
    l.Kb = function() {
        return Vb(this.l, function(a) {
            return a.G()
        })
    };
    l.ec = function(a, b, c) {
        return new wp(a, this.g, b, c)
    };
    l.gb = function(a) {
        this.j = a.j
    };
    var qq = function(a) {
        if (!a.length) return [];
        a = Sb(a, function(c) {
            return null != c && c.G()
        });
        for (var b = 1; b < a.length; b++) Mn(a[b - 1], a[b]);
        return a
    };
    var sq = {
            threshold: [0, .3, .5, .75, 1]
        },
        tq = function(a, b, c, d) {
            Qn.call(this, a, b, c, d);
            this.F = this.M = this.B = this.C = this.A = null
        };
    w(tq, wp);
    tq.prototype.cd = function() {
        var a = this;
        this.F || (this.F = Om());
        if (Fm(298, function() {
                return uq(a)
            })) return !0;
        Ln(this.j, "msf");
        return !1
    };
    tq.prototype.dc = function() {
        if (this.A && this.l) try {
            this.A.unobserve(this.l), this.C ? (this.C.unobserve(this.l), this.C = null) : this.B && (this.B.disconnect(), this.B = null)
        } catch (a) {}
    };
    var vq = function(a) {
            return a.A && a.A.takeRecords ? a.A.takeRecords() : []
        },
        uq = function(a) {
            if (!a.l) return !1;
            var b = a.l,
                c = a.j.g.l,
                d = O().g.g;
            a.A = new c.IntersectionObserver(pm(d, function(e) {
                return wq(a, e)
            }), sq);
            d = pm(d, function() {
                a.A.unobserve(b);
                a.A.observe(b);
                wq(a, vq(a))
            });
            c.ResizeObserver ? (a.C = new c.ResizeObserver(d), a.C.observe(b)) : c.MutationObserver && (a.B = new x.MutationObserver(d), a.B.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.A.observe(b);
            wq(a, vq(a));
            return !0
        },
        wq = function(a,
            b) {
            try {
                if (b.length) {
                    a.M || (a.M = Om());
                    var c = xq(b),
                        d = gn(a.l, a.j.g.l),
                        e = d.x,
                        f = d.y;
                    a.g = new J(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = vn(c.intersectionRect);
                    a.o = Li(g, a.g.left - g.left, a.g.top - g.top)
                }
            } catch (h) {
                a.dc(), Hm(299, h)
            }
        },
        xq = function(a) {
            return Ub(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    l = tq.prototype;
    l.ab = function() {
        var a = vq(this);
        0 < a.length && wq(this, a);
        wp.prototype.ab.call(this)
    };
    l.fd = function() {};
    l.ve = function() {
        return !1
    };
    l.he = function() {};
    l.fb = function() {
        var a = {};
        return Object.assign(this.j.fb(), (a.niot_obs = this.F, a.niot_cbk = this.M, a))
    };
    l.getName = function() {
        return "nio"
    };
    var yq = function(a) {
        a = void 0 === a ? P : a;
        Rn.call(this, new Jn(a, 2))
    };
    w(yq, Rn);
    yq.prototype.getName = function() {
        return "nio"
    };
    yq.prototype.Kb = function() {
        return !Fn().j && null != this.g.g.l.IntersectionObserver
    };
    yq.prototype.ec = function(a, b, c) {
        return new tq(a, this.g, b, c)
    };
    var Aq = function() {
        var a = zq();
        Jn.call(this, P.top, a, "geo")
    };
    w(Aq, Jn);
    Aq.prototype.ba = function() {
        return Fn().g
    };
    Aq.prototype.G = function() {
        var a = zq();
        this.M !== a && (this.g != this && a > this.g.M && (this.g = this, Kn(this)), this.M = a);
        return 2 == a
    };
    var zq = function() {
        O();
        var a = Fn();
        return a.l || a.j ? 0 : 2
    };
    var Bq = function() {};
    var Cq = function() {
            this.done = !1;
            this.g = {
                Bf: 0,
                ee: 0,
                Mi: 0,
                ne: 0,
                qd: -1,
                Jf: 0,
                If: 0,
                Kf: 0,
                Eg: 0
            };
            this.o = null;
            this.B = !1;
            this.l = null;
            this.C = 0;
            this.j = new Hn(this)
        },
        Fq = function() {
            var a = Dq;
            a.B || (a.B = !0, Eq(a, function() {
                return a.A.apply(a, ia(La.apply(0, arguments)))
            }), a.A())
        };
    Cq.prototype.sample = function() {
        Gq(this, jq(), !1)
    };
    var Hq = function() {
            G(Bq);
            var a = G(oq);
            null != a.g && a.g.g ? Nn(a.g.g) : Bn(Fn())
        },
        Gq = function(a, b, c) {
            if (!a.done && (a.j.cancel(), 0 != b.length)) {
                a.l = null;
                try {
                    Hq();
                    var d = Om();
                    O().o = d;
                    if (null != G(oq).g)
                        for (var e = 0; e < b.length; e++) Qo(b[e], d, c);
                    for (d = 0; d < b.length; d++) Ro(b[d]);
                    ++a.g.ne
                } finally {
                    c ? Qb(b, function(f) {
                        f.ra.Z = 0
                    }) : In(a.j)
                }
            }
        },
        Eq = function(a, b) {
            if (!a.o) {
                b = Gm(142, b);
                jm();
                var c = fj(Kl);
                c && Ug(Kl, c, b, {
                    capture: !1
                }) && (a.o = b)
            }
        };
    Cq.prototype.A = function() {
        var a = Gn(),
            b = Om();
        a ? (Nm || (Jm = b, Qb(iq.g, function(c) {
            var d = c.qa();
            d.W = qp(d, b, 1 != c.la)
        })), Nm = !0) : (this.C = Iq(this, b), Nm = !1, Lm = b, Qb(iq.g, function(c) {
            c.Pb && (c.qa().I = b)
        }));
        Gq(this, jq(), !a)
    };
    var Jq = function() {
            var a = G(oq);
            if (null != a.g) {
                var b = a.g;
                Qb(jq(), function(c) {
                    return Oo(c, b)
                })
            }
        },
        Iq = function(a, b) {
            a = a.C;
            Nm && (a += b - Jm);
            return a
        },
        Kq = function(a) {
            a = void 0 === a ? function() {
                return {}
            } : a;
            Cm.Nd("av-js");
            ym.g = .01;
            Em([function(b) {
                var c = O(),
                    d = {};
                d = (d.bin = c.j, d.type = "error", d);
                c = Gl(c.T);
                if (!Dq.l) {
                    var e = Dq,
                        f = P.document,
                        g = 0 <= Km ? Om() - Km : -1,
                        h = Om(); - 1 == e.g.qd && (g = h);
                    var k = Fn(),
                        m = O(),
                        n = Gl(m.T),
                        p = jq();
                    try {
                        if (0 < p.length) {
                            var q = k.g;
                            q && (n.bs = [q.getWidth(), q.getHeight()]);
                            var t = k.A;
                            t && (n.ps = [t.width, t.height]);
                            P.screen && (n.scs = [P.screen.width, P.screen.height])
                        } else n.url = encodeURIComponent(P.location.href.substring(0, 512)), f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        n.tt = g;
                        n.pt = Km;
                        n.bin = m.j;
                        void 0 !== P.google_osd_load_pub_page_exp && (n.olpp = P.google_osd_load_pub_page_exp);
                        n.deb = [1, e.g.Bf, e.g.ee, e.g.ne, e.g.qd, 0, e.j.j, e.g.Jf, e.g.If, e.g.Kf, e.g.Eg, -1].join(";");
                        n.tvt = Iq(e, h);
                        k.j && (n.inapp = 1);
                        if (null !== P && P != P.top) {
                            0 < p.length && (n.iframe_loc = encodeURIComponent(P.location.href.substring(0,
                                512)));
                            var v = k.I;
                            n.is = [v.getWidth(), v.getHeight()]
                        }
                    } catch (ca) {
                        n.error = 1
                    }
                    Dq.l = n
                }
                t = Dq.l;
                q = {};
                for (var y in t) q[y] = t[y];
                y = O().g;
                if (1 == Fl(y.l, "prf")) {
                    t = new nm;
                    v = y.g;
                    e = 0; - 1 < v.g && (e = v.l.g.now() - v.g);
                    v = v.A + e;
                    if (null != v && "number" !== typeof v) throw Error("Value of float/double field must be a number, found " + typeof v + ": " + v);
                    t = D(t, 1, v, 0);
                    v = y.g;
                    t = D(t, 5, me(-1 < v.g ? v.j + 1 : v.j), 0);
                    t = D(t, 2, pe(y.j.g.l()), "0");
                    t = D(t, 3, pe(y.j.g.j()), "0");
                    y = D(t, 4, pe(y.j.g.g()), "0");
                    t = {};
                    y = (t.pf = Oc(y.g()), t)
                } else y = {};
                oh(q, y);
                oh(b, d, c,
                    q, a())
            }])
        },
        Dq = G(Cq);
    var Lq = null,
        Mq = "",
        Nq = !1,
        Oq = function() {
            var a = Lq || P;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };

    function Pq() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
            b;
        if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : null
    }
    var Qq = function() {
            return "ima_html5_sdk".includes("ima_html5_sdk") ? {
                Ja: "ima",
                Ka: null
            } : "ima_html5_sdk".includes("ima_native_sdk") ? {
                Ja: "nima",
                Ka: null
            } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
                Ja: "an",
                Ka: null
            } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
                Ja: "cast",
                Ka: Pq()
            } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
                Ja: "yw",
                Ka: Pq()
            } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
                Ja: "out",
                Ka: Pq()
            } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
                Ja: "r",
                Ka: Pq()
            } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
                Ja: "n",
                Ka: Pq()
            } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
                Ja: "int",
                Ka: Pq()
            } : {
                Ja: "j",
                Ka: null
            }
        },
        Rq = Qq().Ja,
        Sq = Qq().Ka;
    var Uq = function(a, b) {
            var c = {
                sv: "961"
            };
            null !== Sq && (c.v = Sq);
            c.cb = Rq;
            c.nas = iq.g.length;
            c.msg = a;
            void 0 !== b && (a = Tq(b)) && (c.e = Wm[a]);
            return c
        },
        Vq = function(a) {
            return 0 == a.lastIndexOf("custom_metric_viewable", 0)
        },
        Tq = function(a) {
            var b = Vq(a) ? "custom_metric_viewable" : a.toLowerCase();
            return ih(function(c) {
                return c == b
            })
        };
    var Wq = {
            nh: "visible",
            Wg: "audible",
            ci: "time",
            ei: "timetype"
        },
        Xq = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return "0" == a || "1" == a
            },
            timetype: function(a) {
                return "mtos" == a || "tos" == a
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        Yq = function() {
            this.g = void 0;
            this.j = !1;
            this.l = 0;
            this.A = -1;
            this.o = "tos"
        },
        Zq = function(a) {
            try {
                var b = a.split(",");
                return b.length > eh(Wq).length ? null : Ub(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (2 != d.length || void 0 ===
                        Xq[d[0]] || !Xq[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        $q = function(a, b) {
            if (void 0 == a.g) return 0;
            switch (a.o) {
                case "mtos":
                    return a.j ? ro(b.g, a.g) : ro(b.j, a.g);
                case "tos":
                    return a.j ? po(b.g, a.g) : po(b.j, a.g)
            }
            return 0
        };
    var ar = function(a, b, c, d) {
        sp.call(this, b, d);
        this.C = a;
        this.I = c
    };
    w(ar, sp);
    ar.prototype.getId = function() {
        return this.C
    };
    ar.prototype.B = function() {
        return !0
    };
    ar.prototype.g = function(a) {
        var b = a.qa(),
            c = a.getDuration();
        return Vb(this.I, function(d) {
            if (void 0 != d.g) var e = $q(d, b);
            else b: {
                switch (d.o) {
                    case "mtos":
                        e = d.j ? b.o.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.j ? b.o.g : b.l.g;
                        break b
                }
                e = 0
            }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.A * c : -1, d = -1 != d && e >= d);
            return d
        })
    };
    var br = function() {};
    w(br, ip);
    br.prototype.g = function(a) {
        var b = new hp;
        b.g = jp(a, ep);
        b.j = jp(a, gp);
        return b
    };
    var cr = function(a) {
        sp.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    w(cr, sp);
    cr.prototype.g = function(a) {
        return Kp(a)
    };
    var dr = function(a) {
        this.g = a
    };
    w(dr, up);
    var er = function(a, b) {
        sp.call(this, a, b)
    };
    w(er, sp);
    er.prototype.g = function(a) {
        return a.qa().Ta()
    };
    var fr = function(a) {
        tp.call(this, "measurable_impression", a)
    };
    w(fr, tp);
    fr.prototype.g = function(a) {
        var b = Zb(this.C, Fl(O().T, "ovms"));
        return !a.Ra && (0 != a.la || b)
    };
    var gr = function() {
        dr.apply(this, arguments)
    };
    w(gr, dr);
    gr.prototype.j = function() {
        return new fr(this.g)
    };
    gr.prototype.l = function() {
        return [new er("viewable_impression", this.g), new cr(this.g)]
    };
    var hr = function(a, b, c) {
        yp.call(this, a, b, c)
    };
    w(hr, yp);
    hr.prototype.A = function() {
        var a = Pa("ima.admob.getViewability"),
            b = Fl(this.T, "queryid");
        "function" === typeof a && b && a(b)
    };
    hr.prototype.getName = function() {
        return "gsv"
    };
    var ir = function(a) {
        a = void 0 === a ? P : a;
        Rn.call(this, new Jn(a, 2))
    };
    w(ir, Rn);
    ir.prototype.getName = function() {
        return "gsv"
    };
    ir.prototype.Kb = function() {
        var a = Fn();
        O();
        return a.j && !1
    };
    ir.prototype.ec = function(a, b, c) {
        return new hr(this.g, b, c)
    };
    var jr = function(a, b, c) {
        yp.call(this, a, b, c)
    };
    w(jr, yp);
    jr.prototype.A = function() {
        var a = this,
            b = Pa("ima.bridge.getNativeViewability"),
            c = Fl(this.T, "queryid");
        "function" === typeof b && c && b(c, function(d) {
            kh(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.g = wn(d.opt_nativeViewBounds || {});
            var g = a.j.A;
            g.g = f ? Ki(xp) : wn(e);
            a.timestamp = d.opt_nativeTime || -1;
            Fn().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    };
    jr.prototype.getName = function() {
        return "nis"
    };
    var kr = function(a) {
        a = void 0 === a ? P : a;
        Rn.call(this, new Jn(a, 2))
    };
    w(kr, Rn);
    kr.prototype.getName = function() {
        return "nis"
    };
    kr.prototype.Kb = function() {
        var a = Fn();
        O();
        return a.j && !1
    };
    kr.prototype.ec = function(a, b, c) {
        return new jr(this.g, b, c)
    };
    var lr = function() {
        Jn.call(this, P, 2, "mraid");
        this.ha = 0;
        this.J = this.N = !1;
        this.I = null;
        this.j = Xm(this.l);
        this.A.g = new J(0, 0, 0, 0);
        this.da = !1
    };
    w(lr, Jn);
    lr.prototype.G = function() {
        return null != this.j.Da
    };
    lr.prototype.aa = function() {
        var a = {};
        this.ha && (a.mraid = this.ha);
        this.N && (a.mlc = 1);
        a.mtop = this.j.Dg;
        this.I && (a.mse = this.I);
        this.da && (a.msc = 1);
        a.mcp = this.j.tc;
        return a
    };
    lr.prototype.B = function(a) {
        var b = La.apply(1, arguments);
        try {
            return this.j.Da[a].apply(this.j.Da, b)
        } catch (c) {
            Hm(538, c, .01, function(d) {
                d.method = a
            })
        }
    };
    var mr = function(a, b, c) {
        a.B("addEventListener", b, c)
    };
    lr.prototype.initialize = function() {
        var a = this;
        if (this.va) return !this.Tb();
        this.va = !0;
        if (2 === this.j.tc) return this.I = "ng", Ln(this, "w"), !1;
        if (1 === this.j.tc) return this.I = "mm", Ln(this, "w"), !1;
        Fn().M = !0;
        this.l.document.readyState && "complete" == this.l.document.readyState ? nr(this) : Do(this.l, "load", function() {
            jm().setTimeout(Gm(292, function() {
                return nr(a)
            }), 100)
        }, 292);
        return !0
    };
    var nr = function(a) {
            O().A = !!a.B("isViewable");
            mr(a, "viewableChange", or);
            "loading" === a.B("getState") ? mr(a, "ready", pr) : qr(a)
        },
        qr = function(a) {
            "string" === typeof a.j.Da.AFMA_LIDAR ? (a.N = !0, rr(a)) : (a.j.tc = 3, a.I = "nc", Ln(a, "w"))
        },
        rr = function(a) {
            a.J = !1;
            var b = 1 == Fl(O().T, "rmmt"),
                c = !!a.B("isViewable");
            (b ? !c : 1) && jm().setTimeout(Gm(524, function() {
                a.J || (sr(a), Hm(540, Error()), a.I = "mt", Ln(a, "w"))
            }), 500);
            tr(a);
            mr(a, a.j.Da.AFMA_LIDAR, ur)
        },
        tr = function(a) {
            var b = 1 == Fl(O().T, "sneio"),
                c = void 0 !== a.j.Da.AFMA_LIDAR_EXP_1,
                d =
                void 0 !== a.j.Da.AFMA_LIDAR_EXP_2;
            (b = b && d) && (a.j.Da.AFMA_LIDAR_EXP_2 = !0);
            c && (a.j.Da.AFMA_LIDAR_EXP_1 = !b)
        },
        sr = function(a) {
            a.B("removeEventListener", a.j.Da.AFMA_LIDAR, ur);
            a.N = !1
        };
    lr.prototype.U = function() {
        var a = Fn(),
            b = vr(this, "getMaxSize");
        a.g = new J(0, b.width, b.height, 0)
    };
    lr.prototype.W = function() {
        Fn().o = vr(this, "getScreenSize")
    };
    var vr = function(a, b) {
        if ("loading" === a.B("getState")) return new H(-1, -1);
        b = a.B(b);
        if (!b) return new H(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new H(-1, -1) : new H(a, b)
    };
    lr.prototype.X = function() {
        sr(this);
        Jn.prototype.X.call(this)
    };
    var pr = function() {
            try {
                var a = G(lr);
                a.B("removeEventListener", "ready", pr);
                qr(a)
            } catch (b) {
                Hm(541, b)
            }
        },
        ur = function(a, b) {
            try {
                var c = G(lr);
                c.J = !0;
                var d = a ? new J(a.y, a.x + a.width, a.y + a.height, a.x) : new J(0, 0, 0, 0);
                var e = Om(),
                    f = Gn();
                var g = new Qm(e, f, c);
                g.g = d;
                g.volume = b;
                c.gb(g)
            } catch (h) {
                Hm(542, h)
            }
        },
        or = function(a) {
            var b = O(),
                c = G(lr);
            a && !b.A && (b.A = !0, c.da = !0, c.I && Ln(c, "w", !0))
        };
    var sm = new function(a, b) {
        this.key = a;
        this.defaultValue = void 0 === b ? !1 : b;
        this.valueType = "boolean"
    }("45378663");
    var xr = function() {
        this.l = this.va = !1;
        this.g = this.j = null;
        var a = {};
        this.N = (a.start = this.bg, a.firstquartile = this.Wf, a.midpoint = this.Yf, a.thirdquartile = this.cg, a.complete = this.Tf, a.error = this.Uf, a.pause = this.Dd, a.resume = this.Ie, a.skip = this.ag, a.viewable_impression = this.La, a.mute = this.Ib, a.unmute = this.Ib, a.fullscreen = this.Xf, a.exitfullscreen = this.Vf, a.fully_viewable_audible_half_duration_impression = this.La, a.measurable_impression = this.La, a.abandon = this.Dd, a.engagedview = this.La, a.impression = this.La, a.creativeview =
            this.La, a.progress = this.Ib, a.custom_metric_viewable = this.La, a.bufferstart = this.Dd, a.bufferfinish = this.Ie, a.audio_measurable = this.La, a.audio_audible = this.La, a);
        a = {};
        this.U = (a.overlay_resize = this.Zf, a.abandon = this.od, a.close = this.od, a.collapse = this.od, a.overlay_unmeasurable_impression = function(b) {
            return Tp(b, "overlay_unmeasurable_impression", Gn())
        }, a.overlay_viewable_immediate_impression = function(b) {
            return Tp(b, "overlay_viewable_immediate_impression", Gn())
        }, a.overlay_unviewable_impression = function(b) {
            return Tp(b,
                "overlay_unviewable_impression", Gn())
        }, a.overlay_viewable_end_of_session_impression = function(b) {
            return Tp(b, "overlay_viewable_end_of_session_impression", Gn())
        }, a);
        O().j = 3;
        wr(this)
    };
    xr.prototype.o = function(a) {
        No(a, !1);
        lq(a)
    };
    xr.prototype.I = function() {};
    var yr = function(a, b, c, d) {
        a = a.B(null, d, !0, b);
        a.o = c;
        mq([a]);
        return a
    };
    xr.prototype.B = function(a, b, c, d) {
        var e = this;
        a = new Cp(P, a, c ? b : -1, 7, this.jd(), this.ke());
        a.ma = d;
        Dl(a.T);
        El(a.T, "queryid", a.ma);
        a.Fd("");
        So(a, function() {
            return e.J.apply(e, ia(La.apply(0, arguments)))
        }, function() {
            return e.P.apply(e, ia(La.apply(0, arguments)))
        });
        (d = G(oq).g) && Oo(a, d);
        a.ua.kb && G(Bq);
        return a
    };
    var zr = function(a, b, c) {
            ll(b);
            var d = a.g;
            Qb(b, function(e) {
                var f = Tb(e.l, function(g) {
                    var h = Zq(g);
                    if (null == h) g = null;
                    else if (g = new Yq, null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.j = 1 == h.audible), null != h.time) {
                        var k = "mtos" == h.timetype ? "mtos" : "tos",
                            m = ob(h.time, "%") ? "%" : "ms";
                        h = parseInt(h.time, 10);
                        "%" == m && (h /= 100);
                        "ms" == m ? (g.l = h, g.A = -1) : (g.l = -1, g.A = h);
                        g.o = void 0 === k ? "tos" : k
                    }
                    return g
                });
                Vb(f, function(g) {
                    return null == g
                }) || Jp(c, new ar(e.id, e.g, f, d))
            })
        },
        Ar = function() {
            var a = [],
                b = O();
            a.push(G(Aq));
            Fl(b.T,
                "mvp_lv") && a.push(G(lr));
            b = [new ir, new kr];
            b.push(new rq(a));
            b.push(new yq(P));
            return b
        },
        Cr = function(a) {
            if (!a.va) {
                a.va = !0;
                try {
                    var b = Om(),
                        c = O(),
                        d = Fn();
                    Km = b;
                    c.l = 79463069;
                    "o" !== a.j && (Lq = Ji(P));
                    if (km()) {
                        Dq.g.ee = 0;
                        Dq.g.qd = Om() - b;
                        var e = Ar(),
                            f = G(oq);
                        f.j = e;
                        pq(f, function() {
                            Br()
                        }) ? Dq.done || (Jq(), Mn(f.g.g, a), Fq()) : d.l ? Br() : Fq()
                    } else Nq = !0
                } catch (g) {
                    throw iq.reset(), g;
                }
            }
        },
        Dr = function(a) {
            Dq.j.cancel();
            Mq = a;
            Dq.done = !0
        },
        Er = function(a) {
            if (a.j) return a.j;
            var b = G(oq).g;
            if (b) switch (b.getName()) {
                case "nis":
                    a.j = "n";
                    break;
                case "gsv":
                    a.j = "m"
            }
            a.j || (a.j = "h");
            return a.j
        },
        Fr = function(a, b, c) {
            if (null == a.g) return b.Jb |= 4, !1;
            a = a.g.report(c, b);
            b.Jb |= a;
            return 0 == a
        };
    xr.prototype.Eb = function(a) {
        switch (a.Qa()) {
            case 0:
                if (a = G(oq).g) a = a.g, $b(a.o, this), a.F && this.Ma() && On(a);
                Br();
                break;
            case 2:
                Fq()
        }
    };
    xr.prototype.gb = function() {};
    xr.prototype.Ma = function() {
        return !1
    };
    var Br = function() {
        var a = [new yq(P)],
            b = G(oq);
        b.j = a;
        pq(b, function() {
            Dr("i")
        }) ? Dq.done || (Jq(), Fq()) : Dr("i")
    };
    xr.prototype.P = function(a, b) {
        a.Ra = !0;
        switch (a.ya()) {
            case 1:
                Gr(a, b);
                break;
            case 2:
                this.Id(a)
        }
        this.Md(a)
    };
    var Gr = function(a, b) {
        if (!a.Pa) {
            var c = Tp(a, "start", Gn());
            c = a.Ed.g(c).g;
            var d = {
                id: "lidarv"
            };
            d.r = b;
            d.sv = "961";
            null !== Sq && (d.v = Sq);
            ti(c, function(e, f) {
                return d[e] = "mtos" == e || "tos" == e ? f : encodeURIComponent(f)
            });
            b = Oq();
            ti(b, function(e, f) {
                return d[e] = encodeURIComponent(f)
            });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + Zn(Xn(new Vn, d));
            bo(b);
            a.Pa = !0
        }
    };
    l = xr.prototype;
    l.bg = function(a) {
        var b = a.C(a);
        b && (b = b.volume, a.Ha = xn(b) && 0 < b);
        Qp(a, 0);
        return Tp(a, "start", Gn())
    };
    l.Ib = function(a, b, c) {
        Gq(Dq, [a], !Gn());
        return this.La(a, b, c)
    };
    l.La = function(a, b, c) {
        return Tp(a, c, Gn())
    };
    l.Wf = function(a) {
        return Hr(a, "firstquartile", 1)
    };
    l.Yf = function(a) {
        a.da = !0;
        return Hr(a, "midpoint", 2)
    };
    l.cg = function(a) {
        return Hr(a, "thirdquartile", 3)
    };
    l.Tf = function(a) {
        var b = Hr(a, "complete", 4);
        Dp(a);
        return b
    };
    l.Uf = function(a) {
        a.la = 3;
        return Tp(a, "error", Gn())
    };
    var Hr = function(a, b, c) {
        Gq(Dq, [a], !Gn());
        Qp(a, c);
        4 != c && Pp(a.N, c, a.zc);
        return Tp(a, b, Gn())
    };
    l = xr.prototype;
    l.Ie = function(a, b, c) {
        b = Gn();
        2 != a.la || b || (a.qa().I = Om());
        Gq(Dq, [a], !b);
        2 == a.la && (a.la = 1);
        return Tp(a, c, b)
    };
    l.ag = function(a, b) {
        b = this.Ib(a, b || {}, "skip");
        Dp(a);
        return b
    };
    l.Xf = function(a, b) {
        No(a, !0);
        return this.Ib(a, b || {}, "fullscreen")
    };
    l.Vf = function(a, b) {
        No(a, !1);
        return this.Ib(a, b || {}, "exitfullscreen")
    };
    l.Dd = function(a, b, c) {
        b = a.qa();
        b.W = qp(b, Om(), 1 != a.la);
        Gq(Dq, [a], !Gn());
        1 == a.la && (a.la = 2);
        return Tp(a, c, Gn())
    };
    l.Zf = function(a) {
        Gq(Dq, [a], !Gn());
        return a.j()
    };
    l.od = function(a) {
        Gq(Dq, [a], !Gn());
        this.Fe(a);
        Dp(a);
        return a.j()
    };
    var wr = function(a) {
            Kq(function() {
                var b = Ir();
                null != a.j && (b.sdk = a.j);
                var c = G(oq);
                null != c.g && (b.avms = c.g.getName());
                return b
            })
        },
        Jr = function(a, b, c, d) {
            var e = gq(iq, c);
            null !== e && e.ma !== b && (a.o(e), e = null);
            e || (b = a.B(c, Om(), !1, b), 0 == iq.j.length && (O().l = 79463069), nq([b]), e = b, e.o = Er(a), d && (e.lb = d));
            return e
        };
    xr.prototype.J = function() {};
    var Lr = function(a, b) {
        b.F = 0;
        for (var c in Sm) null == a[c] && (b.F |= Sm[c]);
        Kr(a, "currentTime");
        Kr(a, "duration")
    };
    l = xr.prototype;
    l.Id = function() {};
    l.Fe = function() {};
    l.ae = function() {};
    l.Md = function() {};
    l.kd = function() {};
    l.ke = function() {
        this.g || (this.g = this.kd());
        return null == this.g || this.l ? new vp : new gr(this.g)
    };
    l.jd = function() {
        return new br
    };
    var Kr = function(a, b) {
            var c = a[b];
            void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
        },
        Ir = function() {
            var a = Fn(),
                b = {},
                c = {},
                d = {};
            return Object.assign({}, (b.sv = "961", b), null !== Sq && (c.v = Sq, c), (d["if"] = a.l ? "1" : "0", d.nas = String(iq.g.length), d))
        };
    var Mr = function(a) {
        sp.call(this, "audio_audible", a)
    };
    w(Mr, sp);
    Mr.prototype.g = function(a) {
        return 4 == a.xc()
    };
    var Nr = function(a) {
        tp.call(this, "audio_measurable", a)
    };
    w(Nr, tp);
    Nr.prototype.g = function(a) {
        a = a.xc();
        return 3 == a || 4 == a
    };
    var Or = function() {
        dr.apply(this, arguments)
    };
    w(Or, dr);
    Or.prototype.j = function() {
        return new Nr(this.g)
    };
    Or.prototype.l = function() {
        return [new Mr(this.g)]
    };
    var Pr = function() {};
    w(Pr, ip);
    Pr.prototype.g = function(a) {
        a && (28 === a.e && (a = Object.assign({}, a, {
            avas: 3
        })), 4 === a.vs || 5 === a.vs) && (a = Object.assign({}, a, {
            vs: 3
        }));
        var b = new hp;
        b.g = jp(a, fp);
        b.j = jp(a, gp);
        return b
    };
    var Qr = function(a) {
        this.j = a
    };
    Qr.prototype.report = function(a, b) {
        var c = this.g(b);
        if ("function" === typeof c) {
            var d = {};
            var e = {};
            d = Object.assign({}, null !== Sq && (d.v = Sq, d), (e.sv = "961", e.cb = Rq, e.e = Rr(a), e));
            e = Tp(b, a, Gn());
            oh(d, e);
            b.Te[a] = e;
            d = 2 == b.ya() ? ao(d).join("&") : b.Ed.g(d).g;
            try {
                return c(b.ma, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var Rr = function(a) {
        var b = Vq(a) ? "custom_metric_viewable" : a;
        a = ih(function(c) {
            return c == b
        });
        return Wm[a]
    };
    Qr.prototype.g = function() {
        return Pa(this.j)
    };
    var Sr = function(a, b) {
        this.j = a;
        this.l = b
    };
    w(Sr, Qr);
    Sr.prototype.g = function(a) {
        if (!a.lb) return Qr.prototype.g.call(this, a);
        if (this.l[a.lb]) return function() {};
        Hm(393, Error());
        return null
    };
    var Tr = function() {
        xr.call(this);
        this.F = void 0;
        this.G = null;
        this.M = !1;
        this.A = {};
        this.H = 0;
        this.C = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"
    };
    w(Tr, xr);
    Tr.prototype.I = function(a, b) {
        var c = this,
            d = G(oq);
        if (null != d.g) switch (d.g.getName()) {
            case "nis":
                var e = Ur(this, a, b);
                break;
            case "gsv":
                e = Vr(this, a, b);
                break;
            case "exc":
                e = Wr(this, a)
        }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Jr(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.ya() && (e.C == Og && (e.C = function(f) {
            return c.ae(f)
        }), Xr(this, e, b));
        return e
    };
    var Xr = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.g && Array.isArray(c) && zr(a, c, b)
    };
    Tr.prototype.ae = function(a) {
        a.j = 0;
        a.P = 0;
        if ("h" == a.o || "n" == a.o) {
            var b;
            O();
            if (a.lb && Yr(this)) {
                var c = this.A[a.lb];
                c ? b = function(e) {
                    return Zr(c, e)
                } : null !== c && Hm(379, Error())
            } else b = Pa("ima.common.getVideoMetadata");
            if ("function" === typeof b) try {
                var d = b(a.ma)
            } catch (e) {
                a.j |= 4
            } else a.j |= 2
        } else if ("b" == a.o)
            if (b = Pa("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try {
                d = b(a.ma)
            } catch (e) {
                a.j |= 4
            } else a.j |= 2;
            else if ("ml" == a.o)
            if (b = Pa("ima.common.getVideoMetadata"), "function" === typeof b) try {
                d = b(a.ma)
            } catch (e) {
                a.j |=
                    4
            } else a.j |= 2;
            else a.j |= 1;
        a.j || (void 0 === d ? a.j |= 8 : null === d ? a.j |= 16 : kh(d) ? a.j |= 32 : null != d.errorCode && (a.P = d.errorCode, a.j |= 64));
        null == d && (d = {});
        Lr(d, a);
        xn(d.volume) && xn(this.F) && (d.volume *= this.F);
        return d
    };
    var Vr = function(a, b, c) {
            var d = fq(iq, b);
            d || (d = c.opt_nativeTime || -1, d = yr(a, b, Er(a), d), c.opt_osdId && (d.lb = c.opt_osdId));
            return d
        },
        Ur = function(a, b, c) {
            var d = fq(iq, b);
            d || (d = yr(a, b, "n", c.opt_nativeTime || -1));
            return d
        },
        Wr = function(a, b) {
            var c = fq(iq, b);
            c || (c = yr(a, b, "h", -1));
            return c
        };
    Tr.prototype.kd = function() {
        if (Yr(this)) return new Sr("ima.common.triggerExternalActivityEvent", this.A);
        var a = $r(this);
        return null != a ? new Qr(a) : null
    };
    var $r = function(a) {
        O();
        switch (Er(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    Tr.prototype.Id = function(a) {
        !a.g && a.Ra && Fr(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    Tr.prototype.Fe = function(a) {
        a.Le && (a.Ta() ? Fr(this, a, "overlay_viewable_end_of_session_impression") : Fr(this, a, "overlay_unviewable_impression"), a.Le = !1)
    };
    var as = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        oh(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        var f = a.I(b, c);
        c = f ? f.Ed : a.jd();
        if (e.opt_bounds) return c.g(Uq("ol", d));
        if (void 0 !== d)
            if (void 0 !== Tq(d))
                if (Nq) a = Uq("ue", d);
                else if (Cr(a), "i" == Mq) a = Uq("i", d), a["if"] = 0;
        else if (b = a.I(b, e)) {
            b: {
                "i" == Mq && (b.Ra = !0, a.Md(b));f = e.opt_fullscreen;void 0 !== f && No(b, !!f);
                var g;
                if (f = !Fn().j && !An()) jm(),
                f = 0 === ej(Kl);
                if (g = f) {
                    switch (b.ya()) {
                        case 1:
                            Gr(b, "pv");
                            break;
                        case 2:
                            a.Id(b)
                    }
                    Dr("pv")
                }
                f = d.toLowerCase();
                if (g = !g) c: {
                    if (Fl(O().T,
                            "ssmol") && (g = a.l, "loaded" === f)) break c;g = Zb(Tm, f)
                }
                if (g && 0 == b.la) {
                    "i" != Mq && (Dq.done = !1);
                    g = void 0 !== e ? e.opt_nativeTime : void 0;
                    Mm = g = "number" === typeof g ? g : Om();
                    b.Pb = !0;
                    var h = Gn();
                    b.la = 1;
                    b.ia = {};
                    b.ia.start = !1;
                    b.ia.firstquartile = !1;
                    b.ia.midpoint = !1;
                    b.ia.thirdquartile = !1;
                    b.ia.complete = !1;
                    b.ia.resume = !1;
                    b.ia.pause = !1;
                    b.ia.skip = !1;
                    b.ia.mute = !1;
                    b.ia.unmute = !1;
                    b.ia.viewable_impression = !1;
                    b.ia.measurable_impression = !1;
                    b.ia.fully_viewable_audible_half_duration_impression = !1;
                    b.ia.fullscreen = !1;
                    b.ia.exitfullscreen = !1;
                    b.ld = 0;
                    h || (b.qa().I = g);
                    Gq(Dq, [b], !h)
                }(g = b.yb[f]) && b.ga.reportEvent(g);Fl(O().T, "fmd") || Zb(Um, f) && b.Va && b.Va.j(b, null);
                switch (b.ya()) {
                    case 1:
                        var k = Vq(f) ? a.N.custom_metric_viewable : a.N[f];
                        break;
                    case 2:
                        k = a.U[f]
                }
                if (k && (d = k.call(a, b, e, d), Fl(O().T, "fmd") && Zb(Um, f) && b.Va && b.Va.j(b, null), void 0 !== d)) {
                    e = Uq(void 0, f);
                    oh(e, d);
                    d = e;
                    break b
                }
                d = void 0
            }
            3 == b.la && a.o(b);a = d
        }
        else a = Uq("nf", d);
        else a = void 0;
        else Nq ? a = Uq("ue") : f ? (a = Uq(), oh(a, Sp(f, !0, !1, !1))) : a = Uq("nf");
        return "string" === typeof a ? c.g() : c.g(a)
    };
    Tr.prototype.J = function(a) {
        this.l && 1 == a.ya() && bs(this, a)
    };
    Tr.prototype.Md = function(a) {
        this.l && 1 == a.ya() && bs(this, a)
    };
    var bs = function(a, b) {
            var c;
            if (b.lb && Yr(a)) {
                var d = a.A[b.lb];
                d ? c = function(f, g) {
                    cs(d, f, g)
                } : null !== d && Hm(379, Error())
            } else c = Pa("ima.common.triggerViewabilityMeasurementUpdate");
            if ("function" === typeof c) {
                var e = Np(b);
                e.nativeVolume = a.F;
                c(b.ma, e)
            }
        },
        Yr = function(a) {
            return (O(), "h" != Er(a) && "m" != Er(a)) ? !1 : 0 != a.H
        };
    Tr.prototype.B = function(a, b, c, d) {
        if (tm()) {
            var e = Fl(O().T, "mm"),
                f = {};
            (e = (f[ol.We] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO", f[ol.VIDEO] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO", f)[e]) && e && (this.C = e);
            "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" === this.C && Hm(1044, Error())
        }
        a = xr.prototype.B.call(this, a, b, c, d);
        this.M && (b = this.G, null == a.A && (a.A = new Vo), b.g[a.ma] = a.A, a.A.o = Wp);
        return a
    };
    Tr.prototype.o = function(a) {
        a && 1 == a.ya() && this.M && delete this.G.g[a.ma];
        return xr.prototype.o.call(this, a)
    };
    Tr.prototype.ke = function() {
        this.g || (this.g = this.kd());
        return null == this.g || this.l ? new vp : "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.C ? new Or(this.g) : new gr(this.g)
    };
    Tr.prototype.jd = function() {
        return "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.C ? new Pr : new br
    };
    var ds = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.j, b
        },
        es = function(a, b, c) {
            c = void 0 === c ? {} : c;
            a = as(G(Tr), b, c, a);
            return ds(a)
        },
        fs = Gm(193, es, void 0, Ir);
    z("Goog_AdSense_Lidar_sendVastEvent", fs);
    var gs = Gm(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = as(G(Tr), a, b);
        return ds(a)
    });
    z("Goog_AdSense_Lidar_getViewability", gs);
    var hs = Gm(195, function() {
        return lm()
    });
    z("Goog_AdSense_Lidar_getUrlSignalsArray", hs);
    var is = Gm(196, function() {
        return JSON.stringify(lm())
    });
    z("Goog_AdSense_Lidar_getUrlSignalsList", is);
    x.console && "function" === typeof x.console.log && ab(x.console.log, x.console);
    var js = function(a) {
        for (var b = [], c = a = I(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var ks = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1
    };
    ks.prototype.stopPropagation = function() {
        this.j = !0
    };
    ks.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var ls = function() {
        if (!x.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            x.addEventListener("test", c, b);
            x.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    var ms = function(a, b) {
        ks.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    db(ms, ks);
    var ns = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    ms.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? qc && (kc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ?
            a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ns[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && ms.Fa.preventDefault.call(this)
    };
    ms.prototype.stopPropagation = function() {
        ms.Fa.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    ms.prototype.preventDefault = function() {
        ms.Fa.preventDefault.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var os = "closure_listenable_" + (1E6 * Math.random() | 0),
        ps = function(a) {
            return !(!a || !a[os])
        };
    var qs = 0;
    var rs = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ac = e;
            this.key = ++qs;
            this.ac = this.lc = !1
        },
        ts = function(a) {
            a.ac = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.Ac = null
        };
    var us = function(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    };
    us.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.j++);
        var g = vs(a, b, d, e); - 1 < g ? (b = a[g], c || (b.lc = !1)) : (b = new rs(b, this.src, f, !!d, e), b.lc = c, a.push(b));
        return b
    };
    us.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = vs(e, b, c, d);
        return -1 < b ? (ts(e[b]), ac(e, b), 0 == e.length && (delete this.g[a], this.j--), !0) : !1
    };
    var ws = function(a, b) {
        var c = b.type;
        c in a.g && $b(a.g[c], b) && (ts(b), 0 == a.g[c].length && (delete a.g[c], a.j--))
    };
    us.prototype.Rb = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = vs(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var vs = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ac && f.listener == b && f.capture == !!c && f.Ac == d) return e
        }
        return -1
    };
    var xs = "closure_lm_" + (1E6 * Math.random() | 0),
        ys = {},
        zs = 0,
        Bs = function(a, b, c, d, e) {
            if (d && d.once) return As(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) Bs(a, b[f], c, d, e);
                return null
            }
            c = Cs(c);
            return ps(a) ? a.O(b, c, Ta(d) ? !!d.capture : !!d, e) : Ds(a, b, c, !1, d, e)
        },
        Ds = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Ta(e) ? !!e.capture : !!e,
                h = Es(a);
            h || (a[xs] = h = new us(a));
            c = h.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = Fs();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) ls || (e = g), void 0 ===
                e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Gs(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            zs++;
            return c
        },
        Fs = function() {
            var a = Hs,
                b = function(c) {
                    return a.call(b.src, b.listener, c)
                };
            return b
        },
        As = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) As(a, b[f], c, d, e);
                return null
            }
            c = Cs(c);
            return ps(a) ? a.Xb(b, c, Ta(d) ? !!d.capture : !!d, e) : Ds(a, b, c, !0, d, e)
        },
        Is =
        function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Is(a, b[f], c, d, e);
            else d = Ta(d) ? !!d.capture : !!d, c = Cs(c), ps(a) ? a.ob(b, c, d, e) : a && (a = Es(a)) && (b = a.Rb(b, c, d, e)) && Js(b)
        },
        Js = function(a) {
            if ("number" !== typeof a && a && !a.ac) {
                var b = a.src;
                if (ps(b)) ws(b.A, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Gs(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    zs--;
                    (c = Es(b)) ? (ws(c, a), 0 == c.j && (c.src = null, b[xs] = null)) : ts(a)
                }
            }
        },
        Gs = function(a) {
            return a in ys ? ys[a] : ys[a] = "on" + a
        },
        Hs = function(a, b) {
            if (a.ac) a = !0;
            else {
                b = new ms(b, this);
                var c = a.listener,
                    d = a.Ac || a.src;
                a.lc && Js(a);
                a = c.call(d, b)
            }
            return a
        },
        Es = function(a) {
            a = a[xs];
            return a instanceof us ? a : null
        },
        Ks = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Cs = function(a) {
            if ("function" === typeof a) return a;
            a[Ks] || (a[Ks] = function(b) {
                return a.handleEvent(b)
            });
            return a[Ks]
        };
    var R = function() {
        Q.call(this);
        this.A = new us(this);
        this.Ab = this;
        this.ha = null
    };
    db(R, Q);
    R.prototype[os] = !0;
    l = R.prototype;
    l.addEventListener = function(a, b, c, d) {
        Bs(this, a, b, c, d)
    };
    l.removeEventListener = function(a, b, c, d) {
        Is(this, a, b, c, d)
    };
    l.dispatchEvent = function(a) {
        var b, c = this.ha;
        if (c)
            for (b = []; c; c = c.ha) b.push(c);
        c = this.Ab;
        var d = a.type || a;
        if ("string" === typeof a) a = new ks(a, c);
        else if (a instanceof ks) a.target = a.target || c;
        else {
            var e = a;
            a = new ks(d, c);
            oh(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.j && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = Ls(g, d, !0, a) && e
            }
        a.j || (g = a.currentTarget = c, e = Ls(g, d, !0, a) && e, a.j || (e = Ls(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.j && f < b.length; f++) g = a.currentTarget = b[f], e = Ls(g, d, !1, a) && e;
        return e
    };
    l.L = function() {
        R.Fa.L.call(this);
        if (this.A) {
            var a = this.A,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, ts(d[e]);
                delete a.g[c];
                a.j--
            }
        }
        this.ha = null
    };
    l.O = function(a, b, c, d) {
        return this.A.add(String(a), b, !1, c, d)
    };
    l.Xb = function(a, b, c, d) {
        return this.A.add(String(a), b, !0, c, d)
    };
    l.ob = function(a, b, c, d) {
        this.A.remove(String(a), b, c, d)
    };
    var Ls = function(a, b, c, d) {
        b = a.A.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ac && g.capture == c) {
                var h = g.listener,
                    k = g.Ac || g.src;
                g.lc && ws(a.A, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    R.prototype.Rb = function(a, b, c, d) {
        return this.A.Rb(String(a), b, c, d)
    };
    var Ms = function(a, b) {
        this.l = a;
        this.A = b;
        this.j = 0;
        this.g = null
    };
    Ms.prototype.get = function() {
        if (0 < this.j) {
            this.j--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var Ns = function(a, b) {
        a.A(b);
        100 > a.j && (a.j++, b.next = a.g, a.g = b)
    };
    var Os, Ps = function() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
            var e = hi(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = ab(function(k) {
                    if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Gb()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.je;
                    c.je = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    je: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            x.setTimeout(e, 0)
        }
    };
    var Qs = function() {
        this.j = this.g = null
    };
    Qs.prototype.add = function(a, b) {
        var c = Rs.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.g = c;
        this.j = c
    };
    Qs.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.j = null), a.next = null);
        return a
    };
    var Rs = new Ms(function() {
            return new Ss
        }, function(a) {
            return a.reset()
        }),
        Ss = function() {
            this.next = this.g = this.j = null
        };
    Ss.prototype.set = function(a, b) {
        this.j = a;
        this.g = b;
        this.next = null
    };
    Ss.prototype.reset = function() {
        this.next = this.g = this.j = null
    };
    var Ts, Us = !1,
        Vs = new Qs,
        Xs = function(a, b) {
            Ts || Ws();
            Us || (Ts(), Us = !0);
            Vs.add(a, b)
        },
        Ws = function() {
            if (x.Promise && x.Promise.resolve) {
                var a = x.Promise.resolve(void 0);
                Ts = function() {
                    a.then(Ys)
                }
            } else Ts = function() {
                var b = Ys;
                "function" !== typeof x.setImmediate || x.Window && x.Window.prototype && (Eb() || !A("Edge")) && x.Window.prototype.setImmediate == x.setImmediate ? (Os || (Os = Ps()), Os(b)) : x.setImmediate(b)
            }
        },
        Ys = function() {
            for (var a; a = Vs.remove();) {
                try {
                    a.j.call(a.g)
                } catch (b) {
                    nb(b)
                }
                Ns(Rs, a)
            }
            Us = !1
        };
    var Zs = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var at = function(a) {
            this.g = 0;
            this.C = void 0;
            this.A = this.j = this.l = null;
            this.o = this.B = !1;
            if (a != Og) try {
                var b = this;
                a.call(void 0, function(c) {
                    $s(b, 2, c)
                }, function(c) {
                    $s(b, 3, c)
                })
            } catch (c) {
                $s(this, 3, c)
            }
        },
        bt = function() {
            this.next = this.context = this.j = this.l = this.g = null;
            this.A = !1
        };
    bt.prototype.reset = function() {
        this.context = this.j = this.l = this.g = null;
        this.A = !1
    };
    var ct = new Ms(function() {
            return new bt
        }, function(a) {
            a.reset()
        }),
        dt = function(a, b, c) {
            var d = ct.get();
            d.l = a;
            d.j = b;
            d.context = c;
            return d
        };
    at.prototype.then = function(a, b, c) {
        return et(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    at.prototype.$goog_Thenable = !0;
    at.prototype.I = function(a, b) {
        return et(this, null, a, b)
    };
    at.prototype.catch = at.prototype.I;
    at.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new ft(a);
            Xs(function() {
                gt(this, b)
            }, this)
        }
    };
    var gt = function(a, b) {
            if (0 == a.g)
                if (a.l) {
                    var c = a.l;
                    if (c.j) {
                        for (var d = 0, e = null, f = null, g = c.j; g && (g.A || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.g && 1 == d ? gt(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d.next.next) : ht(c), it(c, e, 3, b)))
                    }
                    a.l = null
                } else $s(a, 3, b)
        },
        kt = function(a, b) {
            a.j || 2 != a.g && 3 != a.g || jt(a);
            a.A ? a.A.next = b : a.j = b;
            a.A = b
        },
        et = function(a, b, c, d) {
            var e = dt(null, null, null);
            e.g = new at(function(f, g) {
                e.l = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.j = c ? function(h) {
                    try {
                        var k = c.call(d,
                            h);
                        void 0 === k && h instanceof ft ? g(h) : f(k)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.g.l = a;
            kt(a, e);
            return e.g
        };
    at.prototype.F = function(a) {
        this.g = 0;
        $s(this, 2, a)
    };
    at.prototype.G = function(a) {
        this.g = 0;
        $s(this, 3, a)
    };
    var $s = function(a, b, c) {
            if (0 == a.g) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.F,
                        f = a.G;
                    if (d instanceof at) {
                        kt(d, dt(e || Og, f || null, a));
                        var g = !0
                    } else if (Zs(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (Ta(d)) try {
                            var h = d.then;
                            if ("function" === typeof h) {
                                lt(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g || (a.C = c, a.g = b, a.l = null, jt(a), 3 != b || c instanceof ft || mt(a, c))
            }
        },
        lt = function(a, b, c, d, e) {
            var f = !1,
                g = function(k) {
                    f || (f = !0, c.call(e, k))
                },
                h = function(k) {
                    f || (f = !0, d.call(e,
                        k))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        jt = function(a) {
            a.B || (a.B = !0, Xs(a.M, a))
        },
        ht = function(a) {
            var b = null;
            a.j && (b = a.j, a.j = b.next, b.next = null);
            a.j || (a.A = null);
            return b
        };
    at.prototype.M = function() {
        for (var a; a = ht(this);) it(this, a, this.g, this.C);
        this.B = !1
    };
    var it = function(a, b, c, d) {
            if (3 == c && b.j && !b.A)
                for (; a && a.o; a = a.l) a.o = !1;
            if (b.g) b.g.l = null, nt(b, c, d);
            else try {
                b.A ? b.l.call(b.context) : nt(b, c, d)
            } catch (e) {
                ot.call(null, e)
            }
            Ns(ct, b)
        },
        nt = function(a, b, c) {
            2 == b ? a.l.call(a.context, c) : a.j && a.j.call(a.context, c)
        },
        mt = function(a, b) {
            a.o = !0;
            Xs(function() {
                a.o && ot.call(null, b)
            })
        },
        ot = nb,
        ft = function(a) {
            fb.call(this, a)
        };
    db(ft, fb);
    ft.prototype.name = "cancel";
    var pt = function(a, b) {
        R.call(this);
        this.j = a || 1;
        this.g = b || x;
        this.l = ab(this.Hg, this);
        this.o = Date.now()
    };
    db(pt, R);
    l = pt.prototype;
    l.enabled = !1;
    l.Na = null;
    l.Hg = function() {
        if (this.enabled) {
            var a = Date.now() - this.o;
            0 < a && a < .8 * this.j ? this.Na = this.g.setTimeout(this.l, this.j - a) : (this.Na && (this.g.clearTimeout(this.Na), this.Na = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    l.start = function() {
        this.enabled = !0;
        this.Na || (this.Na = this.g.setTimeout(this.l, this.j), this.o = Date.now())
    };
    l.stop = function() {
        this.enabled = !1;
        this.Na && (this.g.clearTimeout(this.Na), this.Na = null)
    };
    l.L = function() {
        pt.Fa.L.call(this);
        this.stop();
        delete this.g
    };
    var qt = function(a, b, c) {
            if ("function" === typeof a) c && (a = ab(a, c));
            else if (a && "function" == typeof a.handleEvent) a = ab(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
        },
        rt = function(a, b) {
            var c = null;
            return (new at(function(d, e) {
                c = qt(function() {
                    d(b)
                }, a); - 1 == c && e(Error("Failed to schedule timer."))
            })).I(function(d) {
                x.clearTimeout(c);
                throw d;
            })
        };
    var tt = function() {
        return Math.round(Date.now() / 1E3)
    };
    var ut = function() {
        this.g = {};
        return this
    };
    ut.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    };
    ut.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var vt = function(a, b) {
        a.g.eb = mh(a.g, "eb", 0) | b
    };
    ut.prototype.get = function(a) {
        return mh(this.g, a, null)
    };
    var wt = null,
        xt = function() {
            this.g = {};
            this.j = 0
        },
        yt = function() {
            wt || (wt = new xt);
            return wt
        },
        zt = function(a, b) {
            a.g[b.getName()] = b
        },
        At = function(a, b) {
            this.A = a;
            this.l = !0;
            this.g = b
        };
    At.prototype.getName = function() {
        return this.A
    };
    At.prototype.getValue = function() {
        return this.g
    };
    At.prototype.j = function() {
        return String(this.g)
    };
    var Bt = function(a, b) {
        At.call(this, String(a), b);
        this.o = a;
        this.g = !!b
    };
    w(Bt, At);
    Bt.prototype.j = function() {
        return this.g ? "1" : "0"
    };
    var Ct = function(a, b) {
        At.call(this, a, b)
    };
    w(Ct, At);
    Ct.prototype.j = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    };
    var Dt = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0]),
                c = Number(a[1]);
            return new Ct("", new Mi(c, b, Number(a[3]) - c, Number(a[2]) - b))
        }
        return new Ct("", new Mi(0, 0, 0, 0))
    };
    var Et = function(a) {
            var b = new Mi(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Mi(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var k = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (k <= f) {
                            e.left = g;
                            e.top = k;
                            e.width = h - g;
                            e.height = f - k;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        Ft = function(a, b) {
            var c = a.getBoundingClientRect();
            a = gn(a,
                b);
            return new Mi(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        Gt = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new Mi(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;zt(a, new At("vp", d));d && 0 < d ? (e = Ni(b), f = Ni(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;zt(a, new Bt(512,
                    e));d && 0 < d ? (e = Ni(b), f = Ni(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;zt(a, new Bt(1024, e));d && 0 < d ? (e = Ni(b), f = Ni(c), e = e.left >= f.left && e.left < f.right) : e = !1;zt(a, new Bt(2048, e));d && 0 < d ? (b = Ni(b), c = Ni(c), c = b.right <= c.right && b.right > c.left) : c = !1;zt(a, new Bt(4096, c))
            }
        };
    var Ht = function(a, b) {
        var c = 0;
        fh(I(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = yt();
            a.g = {};
            var e = new Bt(32, !0);
            e.l = !1;
            zt(a, e);
            e = I().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            zt(a, new Bt(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = I().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (n) {
                    g = !1
                }
                if (g) {
                    var h = js(d);
                    var k = h && 0 != h.length ? "1" : "0"
                } else k = "2"
            } catch (n) {
                k = "2"
            }
            zt(a, new Bt(256,
                "2" == k));
            zt(a, new Bt(128, "1" == k));
            h = g = I().top;
            "2" == k && (h = I());
            f = Ft(d, h);
            zt(a, new Ct("er", f));
            try {
                var m = h.document && !h.document.body ? null : fi(h || window)
            } catch (n) {
                m = null
            }
            m ? (h = gi(ai(h.document).g), zt(a, new Bt(16384, !!h)), m = h ? new Mi(h.x, h.y, m.width, m.height) : null) : m = null;
            zt(a, new Ct("vi", m));
            if (m && "1" == k) {
                k = js(d);
                d = [];
                for (h = 0; h < k.length; h++)(e = Ft(k[h], g)) && d.push(e);
                d.push(m);
                m = Et(d)
            }
            Gt(a, f, m);
            a.j && zt(a, new At("ts", tt() - a.j));
            a.j = tt()
        } else a = yt(), a.g = {}, a.j = tt(), zt(a, new Bt(32, !1));
        this.l = a;
        this.g = new ut;
        this.g.set("ve", 4);
        c && vt(this.g, 1);
        fh(I(), "ima", "video", "client", "crossdomainTag") && vt(this.g, 4);
        fh(I(), "ima", "video", "client", "sdkTag") && vt(this.g, 8);
        fh(I(), "ima", "video", "client", "jsTag") && vt(this.g, 2);
        b && mh(b, "fullscreen", !1) && vt(this.g, 16);
        this.j = b = null;
        if (c && (c = fh(I(), "ima", "video", "client"), c.getEData)) {
            this.j = c.getEData();
            if (c = fh(I(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.j.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi, b && a &&
                    (b = Dt(b).getValue(), a = Dt(a).getValue(), k = null, mh(c.g, "er", null) && (k = mh(c.g, "er", null).getValue(), k.top += b.top, k.left += b.left, zt(c, new Ct("er", k))), mh(c.g, "vi", null) && (m = mh(c.g, "vi", null).getValue(), m.top += b.top, m.left += b.left, d = [], d.push(m), d.push(b), d.push(a), b = Et(d), Gt(c, k, b), zt(c, new Ct("vi", a))));
            a: {
                if (this.j) {
                    if (this.j.getTagLoadTimestamp) {
                        b = this.j.getTagLoadTimestamp();
                        break a
                    }
                    if (this.j.getTimeSinceTagLoadSeconds) {
                        b = this.j.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance &&
            window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", tt() - (null != a ? a : null != b ? b : tt()))
    };
    new pt(200);
    var It = function(a, b) {
        try {
            var c = new Ht(a, b);
            a = [];
            var d = Number(c.g.get("eb"));
            c.g.remove("eb");
            var e, f = c.g;
            b = [];
            for (var g in f.g) b.push(g + f.g[g]);
            (e = b.join("_")) && a.push(e);
            if (c.j) {
                var h = c.j.serialize();
                h && a.push(h)
            }
            var k, m = c.l;
            e = d;
            f = [];
            e || (e = 0);
            for (var n in m.g) {
                var p = m.g[n];
                if (p instanceof Bt) p.getValue() && (e |= p.o);
                else {
                    var q = m.g[n],
                        t = q.l ? q.j() : "";
                    t && f.push(n + t)
                }
            }
            f.push("eb" + String(e));
            (k = f.join("_")) && a.push(k);
            c.g.set("eb", d);
            return a.join("_")
        } catch (v) {
            return "tle;" + Rh(v.name, 12) + ";" + Rh(v.message,
                40)
        }
    };
    var Jt = function(a) {
        this.K = B(a)
    };
    w(Jt, F);
    Jt.prototype.getId = function() {
        return E(this, 1)
    };
    var Kt = [0, Bg];
    var Lt = function(a) {
        this.K = B(a)
    };
    w(Lt, F);
    Lt.prototype.getWidth = function() {
        return Jf(this, 1)
    };
    Lt.prototype.getHeight = function() {
        return Jf(this, 2)
    };
    var Mt = [0, xg, -1];
    var Nt = function(a) {
        this.K = B(a)
    };
    w(Nt, F);
    var Ot = [0, tg, zg, Bg, -1];
    var Pt = function(a) {
        this.K = B(a)
    };
    w(Pt, F);
    Pt.prototype.getAdId = function() {
        return E(this, 1)
    };
    Pt.prototype.getSize = function() {
        return yf(this, Lt, 7)
    };
    Pt.prototype.Sb = function() {
        return yf(this, Nt, 9)
    };
    Pt.oa = [4];
    var Qt = [0, Bg, tg, Bg, Eg, Hg, Kt, Mt, tg, Ot];
    var Rt = function(a) {
        this.K = B(a)
    };
    w(Rt, F);
    var St = function(a, b) {
            return C(a, 1, je(b))
        },
        Tt = function(a, b) {
            return Of(a, 4, b)
        },
        Ut = function(a, b) {
            return C(a, 2, me(b))
        },
        Vt = [0, Hg, xg, Bg, zg];
    var Wt = function(a) {
        this.K = B(a)
    };
    w(Wt, F);
    var Xt = function(a, b) {
            return Pf(a, 1, b)
        },
        Yt = function(a, b) {
            return Ef(a, 3, Pt, b)
        },
        Zt = function(a, b) {
            return C(a, 4, je(b))
        };
    Wt.oa = [10, 3];
    var $t = [0, Bg, tg, Fg, Qt, Hg, Vt, zg, Hg, 2, Eg];
    var au = function(a) {
        this.K = B(a)
    };
    w(au, F);
    var bu = [0, Hg, zg, tg];
    var cu = function(a) {
        this.K = B(a)
    };
    w(cu, F);
    var du = function(a, b) {
            return Df(a, 2, Wt, b)
        },
        eu = function(a, b) {
            Bf(a, 5, b)
        },
        fu = function(a, b) {
            Pf(a, 10, b)
        };
    cu.oa = [2];
    var gu = [0, Hg, Fg, $t, Hg, Bg, Vt, Bg, zg, xg, bu, Bg, -1];
    var hu = function(a) {
        this.K = B(a)
    };
    w(hu, F);
    var iu = function(a) {
        var b = new cu;
        b = C(b, 1, je(1));
        return Df(a, 1, cu, b)
    };
    hu.oa = [1];
    hu.prototype.g = Lg([0, Fg, gu]);
    var ju = function(a) {
        this.K = B(a)
    };
    w(ju, F);
    var ku = function(a) {
        this.K = B(a)
    };
    w(ku, F);
    var lu = function(a) {
        this.K = B(a)
    };
    w(lu, F);
    lu.oa = [1];
    var mu = function(a) {
        this.K = B(a)
    };
    w(mu, F);
    var nu = Mg(mu);
    mu.oa = [1];
    var ou = function(a) {
        this.K = B(a)
    };
    w(ou, F);
    var pu = function(a) {
            var b = new ou;
            return C(b, 1, je(a))
        },
        qu = [0, Hg];
    var ru = function(a) {
        this.K = B(a)
    };
    w(ru, F);
    var tu = function(a) {
            var b = new ru;
            return Pf(b, 1, a)
        },
        uu = function(a) {
            var b = window.Date.now();
            b = Number.isFinite(b) ? Math.round(b) : 0;
            return C(a, 3, pe(b))
        };
    ru.prototype.getError = function() {
        return yf(this, ou, 10)
    };
    ru.prototype.Ya = function(a) {
        return Bf(this, 10, a)
    };
    var vu = Mg(ru),
        wu = [0, Bg, -1, tg, xg, -2, tg, sg, zg, qu, zg];
    var xu = [0, 1, [0, wg, -2], -1, Bg, -1, zg, [0, 3, Hg, Bg], tg, Ig, Gg];
    var yu = function(a) {
        this.K = B(a)
    };
    w(yu, F);
    yu.oa = [1, 2];
    yu.prototype.g = Lg([0, Fg, xu, Fg, wu]);
    var Bu = function() {
        var a = zu;
        this.o = Au;
        this.B = "jserror";
        this.A = !0;
        this.g = void 0 === a ? null : a;
        this.j = null;
        this.l = !1;
        this.C = this.Ua
    };
    l = Bu.prototype;
    l.Vc = function(a) {
        this.j = a
    };
    l.Nd = function(a) {
        this.B = a
    };
    l.Od = function(a) {
        this.A = a
    };
    l.Pd = function(a) {
        this.l = a
    };
    l.wb = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (h) {
            b = this.A;
            try {
                qj(d), b = this.C(a, new aj(h, {
                    message: Cu(h)
                }), void 0, c)
            } catch (k) {
                this.Ua(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    l.Gd = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = La.apply(0, arguments);
            return e.wb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    l.Ua = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Xl;
            bm(f, 1, "context", a);
            bj(b) || (b = new aj(b, {
                message: Cu(b)
            }));
            b.msg && bm(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j) try {
                this.j(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            am(f, 3, [g]);
            var h = Wl();
            h.j && bm(f, 4, "top", h.j.url || "");
            am(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? si(h.g.url) : ""
            }]);
            Du(this.o, e, f, this.l, c)
        } catch (k) {
            try {
                Du(this.o, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Cu(k),
                    url: h && h.g.url
                }, this.l, c)
            } catch (m) {}
        }
        return this.A
    };
    var Cu = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var Eu = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        Fu = function(a) {
            if (!x.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Hc: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            a.remove("TESTCOOKIESENABLED");
            return !0
        };
    l = Eu.prototype;
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Li;
            d = c.Je || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Hc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = qb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Hc: 0,
            path: b,
            domain: c
        });
        return d
    };
    l.yc = function() {
        return Gu(this).keys
    };
    l.Db = function() {
        return Gu(this).values
    };
    l.isEmpty = function() {
        return !this.g.cookie
    };
    l.clear = function() {
        for (var a = Gu(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    var Gu = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = qb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };

    function Hu(a) {
        return new Eu(a.document)
    };

    function Iu(a, b, c) {
        return If(b, 5) ? Ju(a, c) : null
    }
    var Ku;

    function Lu() {
        var a = (new Mu).g;
        return Ku ? Ku : "null" === a.origin ? Ku = !1 : Ku = Fu(Hu(a))
    }

    function Ju(a, b) {
        b = "null" !== b.origin ? b.document.cookie : null;
        return null === b ? null : (new Eu({
            cookie: b
        })).get(a) || ""
    };
    var Nu = function(a) {
        this.K = B(a)
    };
    w(Nu, F);
    var Ou = Kg([0, Jg, Cg]);

    function Pu(a, b) {
        var c = new nd;
        try {
            var d = a.filter(function(f) {
                return f.ud
            }).map(Qu);
            wd(c, 1, d);
            ud(c, 2, Ou(b), vd);
            var e = a.filter(function(f) {
                return !f.ud
            }).map(Qu);
            wd(c, 3, e)
        } catch (f) {
            Ru(f, b)
        }
        return sd(c)
    }

    function Ru(a, b) {
        try {
            $i({
                m: Cu(a instanceof Error ? a : Error(String(a))),
                b: Mf(b, 1) || null,
                v: E(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }

    function Qu(a) {
        var b = new nd;
        ud(b, a.Qe, a.Ke, vd);
        return sd(b)
    }

    function vd(a, b) {
        a = a.subarray(0, a.length);
        od(b, b.g.end());
        od(b, a)
    }
    var Su = function(a, b) {
        var c = new Nu;
        a = D(c, 1, je(a), 0);
        b = D(a, 2, xe(b), "");
        a = b.K;
        c = Id(a);
        this.g = c & 2 ? b : Fe(b.constructor, ff(a, c, !0))
    };
    var Tu = function(a) {
        this.K = B(a)
    };
    w(Tu, F);
    var Uu = [1, 2, 3],
        Vu = [0, Uu, Dg, vg, Ag];
    var Wu = function(a) {
        this.K = B(a)
    };
    w(Wu, F);
    var Xu = [2, 4],
        Yu = [0, Xu, 1, vg, 1, rg];
    var Zu = function(a) {
        this.K = B(a)
    };
    w(Zu, F);
    Zu.oa = [4];
    var $u = Kg([0, Cg, 1, Yu, Fg, Vu]);
    var av = function(a) {
        this.K = B(a)
    };
    w(av, F);
    av.prototype.getTagSessionCorrelator = function() {
        return Lf(this, 1)
    };
    var bv = function(a, b) {
            return D(a, 1, pe(b), "0")
        },
        cv = function(a, b) {
            return D(a, 2, pe(b), "0")
        },
        dv = Kg([0, ug, -1]);
    var ev = function(a) {
        this.K = B(a)
    };
    w(ev, F);
    ev.prototype.getEscapedQemQueryId = function() {
        return E(this, 4)
    };
    ev.oa = [2, 23, 29];
    var fv = function(a) {
        this.K = B(a)
    };
    w(fv, F);
    var gv = function(a) {
        this.K = B(a)
    };
    w(gv, F);
    gv.prototype.getEscapedQemQueryId = function() {
        return E(this, 2)
    };
    var iv = function(a) {
            this.Gg = new hv(a)
        },
        hv = function(a) {
            this.Kg = new jv(a)
        },
        jv = function(a) {
            this.Ff = new kv(a)
        },
        kv = function(a) {
            this.pd = function(b) {
                var c = b.Qd,
                    d = b.ed;
                b = b.status;
                var e = new Zu;
                e = D(e, 1, xe("SOomke"), "");
                var f = new Tu;
                d = vf(f, 1, Uu, xe(d));
                d = Ef(e, 4, Tu, d);
                e = new Tu;
                b = vf(e, 1, Uu, xe(b));
                b = Ef(d, 4, Tu, b);
                d = new Wu;
                c = vf(d, 2, Xu, pe(Math.round(c)));
                c = Bf(b, 3, c);
                a(c)
            }
        },
        lv = function() {
            Su.apply(this, arguments);
            var a = this;
            this.lg = new iv(function(b) {
                return a.B(b)
            })
        };
    w(lv, Su);
    var mv = function() {
        lv.apply(this, arguments)
    };
    w(mv, lv);
    mv.prototype.o = function() {
        this.j.apply(this, ia(La.apply(0, arguments).map(function(a) {
            return {
                ud: !0,
                Qe: 16,
                Ke: dv(a)
            }
        })))
    };
    mv.prototype.B = function() {
        this.j.apply(this, ia(La.apply(0, arguments).map(function(a) {
            return {
                ud: !1,
                Qe: 1,
                Ke: $u(a)
            }
        })))
    };
    var nv = function() {};
    var ov = function() {
            this.g = Math.random()
        },
        pv = function() {
            var a = Au,
                b = window.google_srt;
            0 <= b && 1 >= b && (a.g = b)
        },
        Du = function(a, b, c, d, e) {
            if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
                if (c instanceof Xl) var f = c;
                else f = new Xl, Ci(c, function(h, k) {
                    var m = f,
                        n = m.A++;
                    am(m, n, Yl(k, h))
                });
                var g = dm(f, "https:", "/pagead/gen_204?id=" + b + "&");
                g && Yi(x, g)
            } catch (h) {}
        };
    var Au, qv, zu = new pj(1, window);
    (function(a) {
        Au = null != a ? a : new ov;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        pv();
        qv = new Bu;
        qv.Vc(function() {});
        qv.Pd(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || zu.B() : zu.l && Ug(window, "load", function() {
            window.google_measure_js_timing || zu.B()
        })
    })();
    var rv = (new Date).getTime();
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    var tv = function(a) {
        this.K = B(a)
    };
    w(tv, F);
    tv.oa = [3];
    var uv = function(a) {
        this.K = B(a)
    };
    w(uv, F);
    var vv = function(a, b) {
            return uf(a, 1, b, ie)
        },
        wv = function(a, b) {
            return uf(a, 2, b, ie)
        },
        xv = function(a, b) {
            return uf(a, 3, b, le)
        },
        yv = function(a, b) {
            uf(a, 4, b, le)
        };
    uv.oa = [1, 2, 3, 4];
    var zv = function(a) {
        this.K = B(a)
    };
    w(zv, F);
    var Av = function(a) {
        this.K = B(a)
    };
    w(Av, F);
    Av.prototype.getVersion = function() {
        return Jf(this, 1)
    };
    var Bv = function(a, b) {
            return D(a, 1, me(b), 0)
        },
        Cv = function(a, b) {
            return Bf(a, 2, b)
        },
        Dv = function(a, b) {
            return Bf(a, 3, b)
        },
        Ev = function(a, b) {
            return D(a, 4, me(b), 0)
        },
        Fv = function(a, b) {
            return D(a, 5, me(b), 0)
        },
        Gv = function(a, b) {
            return D(a, 6, me(b), 0)
        },
        Hv = function(a, b) {
            return D(a, 7, xe(b), "")
        },
        Iv = function(a, b) {
            return D(a, 8, me(b), 0)
        },
        Jv = function(a, b) {
            return D(a, 9, me(b), 0)
        },
        Kv = function(a, b) {
            return D(a, 10, ee(b), !1)
        },
        Lv = function(a, b) {
            return D(a, 11, ee(b), !1)
        },
        Mv = function(a, b) {
            return uf(a, 12, b, ie)
        },
        Nv = function(a, b) {
            return uf(a,
                13, b, ie)
        },
        Ov = function(a, b) {
            return uf(a, 14, b, ie)
        },
        Pv = function(a, b) {
            return D(a, 15, ee(b), !1)
        },
        Qv = function(a, b) {
            return D(a, 16, xe(b), "")
        },
        Rv = function(a, b) {
            return uf(a, 17, b, le)
        },
        Sv = function(a, b) {
            return uf(a, 18, b, le)
        },
        Tv = function(a, b) {
            return Cf(a, 19, b)
        };
    Av.oa = [12, 13, 14, 17, 18, 19];
    var Uv = function(a) {
        this.K = B(a)
    };
    w(Uv, F);
    var Vv = "a".charCodeAt(),
        Wv = dh({
            Gh: 0,
            Fh: 1,
            Ch: 2,
            xh: 3,
            Dh: 4,
            yh: 5,
            Eh: 6,
            Ah: 7,
            Bh: 8,
            wh: 9,
            zh: 10,
            Hh: 11
        }),
        Xv = dh({
            Jh: 0,
            Kh: 1,
            Ih: 2
        });
    var Yv = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.j = a;
            this.g = 0
        },
        $v = function(a) {
            a = Zv(a, 36);
            var b = new zv;
            b = D(b, 1, pe(Math.floor(a / 10)), "0");
            return D(b, 2, me(a % 10 * 1E8), 0)
        },
        aw = function(a) {
            return String.fromCharCode(Vv + Zv(a, 6)) + String.fromCharCode(Vv + Zv(a, 6))
        },
        dw = function(a) {
            var b = Zv(a, 16);
            return !0 === !!Zv(a, 1) ? (a = bw(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : cw(a, b)
        },
        ew = function(a) {
            for (var b = [], c = Zv(a, 12); c--;) {
                var d =
                    Zv(a, 6),
                    e = Zv(a, 2),
                    f = bw(a),
                    g = b,
                    h = g.push,
                    k = new tv;
                d = D(k, 1, je(d), 0);
                e = D(d, 2, je(e), 0);
                f = uf(e, 3, f, le);
                h.call(g, f)
            }
            return b
        },
        bw = function(a) {
            for (var b = Zv(a, 12), c = []; b--;) {
                var d = !0 === !!Zv(a, 1),
                    e = Zv(a, 16);
                if (d)
                    for (d = Zv(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        cw = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (Zv(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        Zv = function(a, b) {
            if (a.g + b > a.j.length) throw Error("Requested length " +
                b + " is past end of string.");
            var c = a.j.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    Yv.prototype.skip = function(a) {
        this.g += a
    };
    var fw = function(a) {
        try {
            var b = Qc(a).map(function(f) {
                    return f.toString(2).padStart(8, "0")
                }).join(""),
                c = new Yv(b);
            if (3 !== Zv(c, 3)) return null;
            var d = wv(vv(new uv, cw(c, 24, Wv)), cw(c, 24, Wv)),
                e = Zv(c, 6);
            0 !== e && yv(xv(d, cw(c, e)), cw(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var gw = function(a) {
        try {
            var b = Qc(a).map(function(d) {
                    return d.toString(2).padStart(8, "0")
                }).join(""),
                c = new Yv(b);
            return Tv(Sv(Rv(Qv(Pv(Ov(Nv(Mv(Lv(Kv(Jv(Iv(Hv(Gv(Fv(Ev(Dv(Cv(Bv(new Av, Zv(c, 6)), $v(c)), $v(c)), Zv(c, 12)), Zv(c, 12)), Zv(c, 6)), aw(c)), Zv(c, 12)), Zv(c, 6)), !!Zv(c, 1)), !!Zv(c, 1)), cw(c, 12, Xv)), cw(c, 24, Wv)), cw(c, 24, Wv)), !!Zv(c, 1)), aw(c)), dw(c)), dw(c)), ew(c))
        } catch (d) {
            return null
        }
    };
    var iw = function(a) {
            if (!a) return null;
            var b = a.split(".");
            if (4 < b.length) return null;
            a = gw(b[0]);
            if (!a) return null;
            var c = new Uv;
            a = Bf(c, 1, a);
            b.shift();
            b = u(b);
            for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, hw(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = fw(c);
                    if (!c) return null;
                    Bf(a, 2, c);
                    break;
                default:
                    return null
            }
            return a
        },
        hw = function(a) {
            try {
                var b = Qc(a).map(function(c) {
                    return c.toString(2).padStart(8, "0")
                }).join("");
                return Zv(new Yv(b), 3)
            } catch (c) {
                return -1
            }
        };
    var jw = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = u(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = u(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
        delete c[0];
        return c
    };
    var kw = function(a, b, c, d) {
        mv.call(this, a, b);
        this.A = c;
        this.l = d
    };
    w(kw, mv);
    kw.prototype.j = function() {
        var a = La.apply(0, arguments);
        try {
            var b = encodeURIComponent(Oc(Pu(a, this.g), 3));
            this.l(this.A + "?e=4&d=" + b)
        } catch (c) {
            Ru(c, this.g)
        }
    };
    var Yg = new function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? 0 : b
        }(494575051),
        lw = new Ng(489560439),
        mw = new Ng(505762507);
    var nw = function(a) {
        this.K = B(a)
    };
    w(nw, F);
    var ow = function(a) {
        var b = new nw,
            c = b.K,
            d = Hd(c);
        Xd(Id(b.K));
        var e = d & 2;
        b = hf(c, d, 1, !1);
        Array.isArray(b) || (b = Vd);
        var f = !!(d & 32),
            g = Hd(b);
        0 === g && f && !e ? (g |= 33, Jd(b, g)) : g & 1 || (g |= 1, Jd(b, g));
        if (e) g & 2 || Kd(b), Object.freeze(b);
        else if (2 & g || 2048 & g) b = yd(b), e = 1, f && (e |= 32), Jd(b, e), lf(c, d, 1, b, !1);
        c = b;
        d = Hd(c);
        d = !!(4 & d) && !!(4096 & d);
        if (Array.isArray(a))
            for (b = 0; b < a.length; b++) c.push(ie(a[b], d));
        else
            for (a = u(a), b = a.next(); !b.done; b = a.next()) c.push(ie(b.value, d))
    };
    nw.oa = [1];
    var pw = /^((market|itms|intent|itms-appss):\/\/)/i;
    var qw = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var rw = function(a) {
        var b = a.Za,
            c = a.height,
            d = a.width,
            e = void 0 === a.Ea ? !1 : a.Ea;
        this.pb = a.pb;
        this.Za = b;
        this.height = c;
        this.width = d;
        this.Ea = e
    };
    rw.prototype.getHeight = function() {
        return this.height
    };
    rw.prototype.getWidth = function() {
        return this.width
    };
    var tw = function(a) {
        var b = a.Rg,
            c = a.Ef,
            d = a.Qg,
            e = a.Df;
        rw.call(this, {
            pb: a.pb,
            Za: a.Za,
            height: a.height,
            width: a.width,
            Ea: void 0 === a.Ea ? !1 : a.Ea
        });
        this.A = b;
        this.j = c;
        this.l = d;
        this.g = e
    };
    w(tw, rw);
    var uw = function(a) {
        var b = a.kg;
        rw.call(this, {
            pb: a.pb,
            Za: a.Za,
            height: a.height,
            width: a.width,
            Ea: void 0 === a.Ea ? !1 : a.Ea
        });
        this.g = b
    };
    w(uw, rw);
    uw.prototype.getMediaUrl = function() {
        return this.g
    };

    function vw(a) {
        return new(Function.prototype.bind.apply(a, [null].concat(ia(La.apply(1, arguments)))))
    };
    var ww = function(a, b, c, d) {
        Q.call(this);
        this.G = b;
        this.F = c;
        this.C = d;
        this.o = new Map;
        this.H = 0;
        this.A = new Map;
        this.B = new Map;
        this.l = void 0;
        this.j = a
    };
    w(ww, Q);
    ww.prototype.L = function() {
        delete this.g;
        this.o.clear();
        this.A.clear();
        this.B.clear();
        this.l && (Vg(this.j, "message", this.l), delete this.l);
        delete this.j;
        delete this.C;
        Q.prototype.L.call(this)
    };
    var xw = function(a) {
            if (a.g) return a.g;
            a.F && a.F(a.j) ? a.g = a.j : a.g = Hi(a.j, a.G);
            var b;
            return null != (b = a.g) ? b : null
        },
        zw = function(a, b, c) {
            if (xw(a))
                if (a.g === a.j)(b = a.o.get(b)) && b(a.g, c);
                else {
                    var d = a.A.get(b);
                    if (d && d.Yb) {
                        yw(a);
                        var e = ++a.H;
                        a.B.set(e, {
                            Gb: d.Gb,
                            Lf: d.Gc(c),
                            wg: "addEventListener" === b
                        });
                        a.g.postMessage(d.Yb(c, e), "*")
                    }
                }
        },
        yw = function(a) {
            a.l || (a.l = function(b) {
                    try {
                        var c = a.C ? a.C(b) : void 0;
                        if (c) {
                            var d = c.Ae,
                                e = a.B.get(d);
                            if (e) {
                                e.wg || a.B.delete(d);
                                var f;
                                null == (f = e.Gb) || f.call(e, e.Lf, c.payload)
                            }
                        }
                    } catch (g) {}
                },
                Ug(a.j, "message", a.l))
        };
    var Aw = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        Bw = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        Cw = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.wa({
                    uc: null != c ? c : void 0,
                    wc: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        Dw = {
            Gc: function(a) {
                return a.listener
            },
            Yb: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            Gb: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        Ew = {
            Gc: function(a) {
                return a.listener
            },
            Yb: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            Gb: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                null == a || a(c, b.success)
            }
        },
        Fw = {
            Gc: function(a) {
                return a.wa
            },
            Yb: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }, c
            },
            Gb: function(a, b) {
                b = b.__gppReturn;
                var c;
                a({
                    uc: null != (c = b.returnValue) ? c : void 0,
                    wc: b.success ? void 0 : 2
                })
            }
        };

    function Gw(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Ae: b.__gppReturn.callId
        }
    }
    var Hw = function(a, b) {
        var c = void 0 === b ? {} : b;
        b = c.timeoutMs;
        c = c.allowEmptyApplicableSection;
        Q.call(this);
        this.caller = new ww(a, "__gppLocator", function(d) {
            return "function" === typeof d.__gpp
        }, Gw);
        this.caller.o.set("addEventListener", Aw);
        this.caller.A.set("addEventListener", Dw);
        this.caller.o.set("removeEventListener", Bw);
        this.caller.A.set("removeEventListener", Ew);
        this.caller.o.set("getDataWithCallback", Cw);
        this.caller.A.set("getDataWithCallback", Fw);
        this.timeoutMs = null != b ? b : 500;
        this.allowEmptyApplicableSection =
            c
    };
    w(Hw, Q);
    Hw.prototype.L = function() {
        this.caller.X();
        Q.prototype.L.call(this)
    };
    Hw.prototype.addEventListener = function(a) {
        var b = this,
            c = Qg(function() {
                a(Iw, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        zw(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion) {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else !Array.isArray(e.pingData.applicableSections) || 0 === e.pingData.applicableSections.length && !b.allowEmptyApplicableSection ? (b.removeEventListener(e.listenerId), h = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 2,
                            gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                            applicableSections: [-1]
                        }
                    }) : h = e;
                    a(h, f)
                } catch (k) {
                    if (null == e ? 0 : e.listenerId) try {
                        b.removeEventListener(e.listenerId)
                    } catch (m) {
                        a(Jw, !0);
                        return
                    }
                    a(Kw, !0)
                }
            }
        })
    };
    Hw.prototype.removeEventListener = function(a) {
        zw(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    };
    var Kw = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        Iw = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        Jw = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    var Lw = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Mw = function(a, b) {
            b = void 0 === b ? {} : b;
            Q.call(this);
            this.j = a;
            this.g = null;
            this.B = {};
            this.C = 0;
            var c;
            this.A = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.o = null != (d = b.xi) ? d : !1;
            this.l =
                null
        };
    w(Mw, Q);
    Mw.prototype.L = function() {
        this.B = {};
        this.l && (Vg(this.j, "message", this.l), delete this.l);
        delete this.B;
        delete this.j;
        delete this.g;
        Q.prototype.L.call(this)
    };
    var Ow = function(a) {
            return "function" === typeof a.j.__tcfapi || null != Nw(a)
        },
        Rw = function(a, b) {
            var c = {
                    internalErrorState: 0,
                    internalBlockOnErrors: a.o
                },
                d = Qg(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.A && (e = setTimeout(function() {
                e = 0;
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.A));
            Pw(a, "addEventListener", function(f) {
                f && (c = f, c.internalErrorState = Lw(c), c.internalBlockOnErrors = a.o, Qw(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Pw(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f),
                    d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
            })
        };
    Mw.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.o
            },
            d = Qg(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Lw(c), c.internalBlockOnErrors = b.o, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Pw(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Mw.prototype.removeEventListener = function(a) {
        a && a.listenerId && Pw(this, "removeEventListener", null, a.listenerId)
    };
    var Tw = function(a, b, c) {
            var d = void 0 === d ? "755" : d;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var e = a.publisher.restrictions[b];
                    if (void 0 !== e) {
                        e = e[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            if (0 === e) return !1;
            var f = c;
            2 === c ? (f = 0, 2 === e && (f = 1)) : 3 === c && (f = 1, 1 === e && (f = 0));
            a = 0 === f ? a.purpose && a.vendor ? (c = Sw(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && Sw(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? Sw(a.purpose.legitimateInterests, b) && Sw(a.vendor.legitimateInterests,
                void 0 === d ? "755" : d) : !0 : !0;
            return a
        },
        Sw = function(a, b) {
            return !(!a || !a[b])
        },
        Pw = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
            else if (Nw(a)) {
                Uw(a);
                var e = ++a.C;
                a.B[e] = c;
                a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        Nw = function(a) {
            if (a.g) return a.g;
            a.g = Hi(a.j, "__tcfapiLocator");
            return a.g
        },
        Uw = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.B[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Ug(a.j, "message", a.l))
        },
        Qw = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Lw(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? ($i({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        Vw = function(a) {
            var b = ["2", "7", "9", "10"];
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return Tw(a,
                    c, 1)
            })
        };
    ow([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    ow([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    ow([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    new nw;
    var S = function(a, b) {
        this.j = this.B = this.A = "";
        this.I = null;
        this.M = this.l = "";
        this.o = !1;
        var c;
        a instanceof S ? (this.o = void 0 !== b ? b : a.o, Ww(this, a.A), this.B = a.B, this.j = a.j, Xw(this, a.I), this.l = a.l, Yw(this, Zw(a.g)), this.M = a.F()) : a && (c = String(a).match(ri)) ? (this.o = !!b, Ww(this, c[1] || "", !0), this.B = $w(c[2] || ""), this.j = $w(c[3] || "", !0), Xw(this, c[4]), this.l = $w(c[5] || "", !0), Yw(this, c[6] || "", !0), this.M = $w(c[7] || "")) : (this.o = !!b, this.g = new ax(null, this.o))
    };
    S.prototype.toString = function() {
        var a = [],
            b = this.A;
        b && a.push(bx(b, cx, !0), ":");
        var c = this.j;
        if (c || "file" == b) a.push("//"), (b = this.B) && a.push(bx(b, cx, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, null != c && a.push(":", String(c));
        if (c = this.l) this.j && "/" != c.charAt(0) && a.push("/"), a.push(bx(c, "/" == c.charAt(0) ? dx : ex, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.F()) && a.push("#", bx(c, fx));
        return a.join("")
    };
    S.prototype.resolve = function(a) {
        var b = this.G(),
            c = !!a.A;
        c ? Ww(b, a.A) : c = !!a.B;
        c ? b.B = a.B : c = !!a.j;
        c ? b.j = a.j : c = null != a.I;
        var d = a.l;
        if (c) Xw(b, a.I);
        else if (c = !!a.l) {
            if ("/" != d.charAt(0))
                if (this.j && !this.l) d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/"); - 1 != e && (d = b.l.slice(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (rb(e, "./") || rb(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d &&
                        g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.l = d : c = "" !== a.g.toString();
        c ? Yw(b, Zw(a.g)) : c = !!a.M;
        c && (b.M = a.F());
        return b
    };
    S.prototype.G = function() {
        return new S(this)
    };
    var Ww = function(a, b, c) {
            a.A = c ? $w(b, !0) : b;
            a.A && (a.A = a.A.replace(/:$/, ""))
        },
        Xw = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.I = b
            } else a.I = null
        },
        Yw = function(a, b, c) {
            b instanceof ax ? (a.g = b, gx(a.g, a.o)) : (c || (b = bx(b, hx)), a.g = new ax(b, a.o))
        },
        ix = function(a, b, c) {
            a.g.set(b, c);
            return a
        };
    S.prototype.F = function() {
        return this.M
    };
    var jx = function(a) {
            return a instanceof S ? a.G() : new S(a, void 0)
        },
        $w = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        bx = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, kx), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        kx = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        cx = /[#\/\?@]/g,
        ex = /[#\?:]/g,
        dx = /[#\?]/g,
        hx = /[#\?@]/g,
        fx = /#/g,
        ax = function(a, b) {
            this.j = this.g = null;
            this.l = a || null;
            this.A = !!b
        },
        lx = function(a) {
            a.g ||
                (a.g = new Map, a.j = 0, a.l && ti(a.l, function(b, c) {
                    a.add(Qh(b), c)
                }))
        };
    ax.prototype.add = function(a, b) {
        lx(this);
        this.l = null;
        a = mx(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.j += 1;
        return this
    };
    ax.prototype.remove = function(a) {
        lx(this);
        a = mx(this, a);
        return this.g.has(a) ? (this.l = null, this.j -= this.g.get(a).length, this.g.delete(a)) : !1
    };
    ax.prototype.clear = function() {
        this.g = this.l = null;
        this.j = 0
    };
    ax.prototype.isEmpty = function() {
        lx(this);
        return 0 == this.j
    };
    var nx = function(a, b) {
        lx(a);
        b = mx(a, b);
        return a.g.has(b)
    };
    l = ax.prototype;
    l.forEach = function(a, b) {
        lx(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    l.yc = function() {
        lx(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    l.Db = function(a) {
        lx(this);
        var b = [];
        if ("string" === typeof a) nx(this, a) && (b = b.concat(this.g.get(mx(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    l.set = function(a, b) {
        lx(this);
        this.l = null;
        a = mx(this, a);
        nx(this, a) && (this.j -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.j += 1;
        return this
    };
    l.get = function(a, b) {
        if (!a) return b;
        a = this.Db(a);
        return 0 < a.length ? String(a[0]) : b
    };
    l.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.Db(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    var Zw = function(a) {
            var b = new ax;
            b.l = a.l;
            a.g && (b.g = new Map(a.g), b.j = a.j);
            return b
        },
        mx = function(a, b) {
            b = String(b);
            a.A && (b = b.toLowerCase());
            return b
        },
        gx = function(a, b) {
            b && !a.A && (lx(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.l = null, this.g.set(mx(this, e), ec(c)), this.j += c.length))
            }, a));
            a.A = b
        };
    var ox, px, qx, rx = function() {
            return x.navigator ? x.navigator.userAgent : ""
        },
        sx = rb(rx(), "(iPad") || rb(rx(), "(Macintosh") || rb(rx(), "(iPod") || rb(rx(), "(iPhone");
    var tx = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        ux = ["c.googlesyndication.com"];

    function vx(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        null == a || !a.startsWith("http") || (null == a ? 0 : a.startsWith("https")) ? c = !1 : wx(a, ux) ? c = !1 : b.includes("https") && wx(a, tx) && (c = !0);
        return c ? (a = new S(a), L(K.getInstance(), "htp", "1"), Ww(a, "https"), a.toString()) : a
    }

    function xx(a) {
        if (!a) return !1;
        try {
            var b = "string" === typeof a ? new S(a) : a;
            return "gcache" == b.A && !!b.g.get("url")
        } catch (c) {
            return !1
        }
    }

    function yx(a) {
        try {
            var b = "string" === typeof a ? new S(a) : a;
            if (xx(b)) {
                var c = b.g.get("url");
                return "undefined" === typeof c ? null : c
            }
        } catch (d) {}
        return null
    }

    function wx(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    }

    function zx(a) {
        a = new S(a);
        var b = a.j;
        if ("http" != a.A && "https" != a.A) a = !1;
        else if (-1 == b.indexOf(".") || b.match(/^[\.0-9]*$/)) a = !1;
        else a: {
            try {
                Qh(a.toString())
            } catch (c) {
                a = !1;
                break a
            }
            a = !0
        }
        return a
    };
    var Ax = -1;

    function Bx(a, b) {
        b = null != b ? b : "";
        oc && (b = "");
        if (!pb(Th(a))) {
            var c = a instanceof uh || !pw.test(a) ? a : vh(a);
            if (c instanceof uh) var d = c;
            else {
                d = void 0 === d ? zh : d;
                a: if (d = void 0 === d ? zh : d, !(a instanceof uh)) {
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof xh && e.hg(a)) {
                            a = vh(a);
                            break a
                        }
                    }
                    a = void 0
                }
                d = a || wh
            }
            a = window;
            if (d instanceof uh)
                if (d instanceof uh) d = d.Be;
                else throw Error("");
            else d = Bh.test(d) ? d : void 0;
            void 0 !== d && a.open(d, "_blank", b)
        }
    };

    function Cx(a, b) {
        for (var c; !(c = a.next()).done;) b(c.value)
    }
    var Dx = function(a, b) {
        this.g = a[x.Symbol.iterator]();
        this.j = b
    };
    Dx.prototype[Symbol.iterator] = function() {
        return this
    };
    Dx.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    };
    var Ex = function(a, b) {
        return new Dx(a, b)
    };
    var Fx = function(a, b) {
        var c = new Set(a);
        Cx(b[Symbol.iterator](), function(d) {
            return c.add(d)
        });
        return c
    };
    var Gx = new Map,
        Hx = function() {
            this.j = this.g = null
        };

    function Ix(a, b, c, d) {
        var e = kn(a);
        Lh(b, e) ? (e = setTimeout(function() {
            return Ix(a, b, c, d)
        }, 200), d.j = e) : (Jx(d), c(e))
    }

    function Kx(a) {
        var b = new Hx,
            c = new Promise(function(f) {
                var g = kn(a);
                if ("ResizeObserver" in window) {
                    var h = new ResizeObserver(function(k) {
                        window.requestAnimationFrame(function() {
                            for (var m = new H(0, 0), n = u(k), p = n.next(); !p.done; p = n.next())
                                if (p = p.value, p.contentBoxSize ? (p = Array.isArray(p.contentBoxSize) ? p.contentBoxSize[0] : p.contentBoxSize, m.width = Math.floor(p.inlineSize), m.height = Math.floor(p.blockSize)) : (m.width = Math.floor(p.contentRect.width), m.height = Math.floor(p.contentRect.height)), !Lh(g, m)) return Jx(b),
                                    f(m)
                        })
                    });
                    b.g = h;
                    h.observe(a)
                } else Ix(a, g, f, b)
            }),
            d, e = null != (d = Gx.get(c)) ? d : new Set;
        e.add(b);
        Gx.set(c, e);
        return c
    }

    function Lx(a, b) {
        b = void 0 === b ? new H(1, 1) : b;
        var c = function(g) {
                var h = Kx(a),
                    k, m = null != (k = Gx.get(g)) ? k : new Set,
                    n;
                k = null != (n = Gx.get(h)) ? n : new Set;
                Gx.set(g, Fx(m, k));
                return h
            },
            d = function(g, h) {
                c(g).then(function(k) {
                    return b.width <= k.width && b.height <= k.height ? (Mx(g), h(k)) : d(g, h)
                })
            },
            e, f = new Promise(function(g) {
                e = g
            });
        d(f, e);
        return f
    }

    function Mx(a) {
        a = Gx.get(a);
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) Jx(b.value)
    }

    function Jx(a) {
        a.j && window.clearTimeout(a.j);
        a.g && (a.g.disconnect(), a.g = null)
    };
    var Nx = /OS (\S+) like/,
        Ox = /Android ([\d\.]+)/;

    function Px(a, b) {
        a = (a = a.exec(zb())) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= wb(a, b)
    }
    var Qx = function() {
            return vc || sc && "ontouchstart" in document.documentElement
        },
        Rx = function(a) {
            return xc && Px(Nx, a)
        },
        Sx = function(a) {
            return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var Tx = function(a) {
        R.call(this);
        this.j = a;
        this.o = this.B = !1;
        this.C = this.F = 0;
        this.g = new pt(1E3);
        go(this, this.g);
        Bs(this.g, "tick", this.G, !1, this);
        Bs(this.j, "pause", this.l, !1, this);
        Bs(this.j, "playing", this.l, !1, this);
        Bs(this.j, "ended", this.l, !1, this);
        Bs(this.j, "timeupdate", this.l, !1, this)
    };
    w(Tx, R);
    var Ux = function(a) {
        var b;
        return null != (b = a.j.currentTime) ? b : a.j.getCurrentTime()
    };
    Tx.prototype.l = function(a) {
        switch (a.type) {
            case "playing":
                Vx(this);
                break;
            case "pause":
            case "ended":
                this.g.enabled && this.g.stop();
                break;
            case "timeupdate":
                !this.B && 0 < Ux(this) && (this.B = !0, Vx(this))
        }
    };
    var Vx = function(a) {
        !a.g.enabled && a.B && (a.F = 1E3 * Ux(a), a.C = Date.now(), a.o = !1, a.g.start())
    };
    Tx.prototype.G = function() {
        var a = Date.now(),
            b = a - this.C,
            c = 1E3 * Ux(this);
        c - this.F < .5 * b ? this.o || (this.o = !0, this.dispatchEvent("playbackStalled")) : this.o = !1;
        this.F = c;
        this.C = a
    };
    var Wx = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        Xx = /\bocr\b/;

    function Yx(a) {
        if (pb(Th(a)) || oc && 2048 < a.length) return !1;
        try {
            if ((new S(a)).F().match(Xx)) return !0
        } catch (b) {}
        return null != Wx.find(function(b) {
            return null != a.match(b)
        })
    };

    function Zx(a, b) {
        return pb(b) ? !1 : (new RegExp(a)).test(b)
    }

    function $x(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            2 == d.length && (c = qb(d[0]), d = qb(d[1]), 0 < c.length && (b[c] = d))
        });
        return b
    }

    function ay(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a) return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a)) return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    };
    var by = function() {
        this.g = Date.now()
    };
    by.prototype.reset = function() {
        this.g = Date.now()
    };
    var cy = function(a) {
        a = a.g + 5E3 - Date.now();
        return 0 < a ? a : 0
    };
    var dy = function(a, b) {
        this.url = a;
        this.g = void 0 === b ? null : b
    };
    var ey = function(a) {
        switch (a) {
            case 0:
                return "No Error";
            case 1:
                return "Access denied to content document";
            case 2:
                return "File not found";
            case 3:
                return "Firefox silently errored";
            case 4:
                return "Application custom error";
            case 5:
                return "An exception occurred";
            case 6:
                return "Http response at 400 or 500 level";
            case 7:
                return "Request was aborted";
            case 8:
                return "Request timed out";
            case 9:
                return "The resource is not available offline";
            default:
                return "Unrecognized error code"
        }
    };
    var fy = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.errorCode = a
    };
    w(fy, Error);
    var gy = function() {
            if (!oc) return !1;
            try {
                return new ActiveXObject("MSXML2.DOMDocument"), !0
            } catch (a) {
                return !1
            }
        },
        hy = oc && gy();
    var iy = function(a) {
        Q.call(this);
        this.A = a;
        this.j = {}
    };
    db(iy, Q);
    var jy = [];
    iy.prototype.O = function(a, b, c, d) {
        return ky(this, a, b, c, d)
    };
    var ky = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (jy[0] = c.toString()), c = jy);
        for (var g = 0; g < c.length; g++) {
            var h = Bs(b, c[g], d || a.handleEvent, e || !1, f || a.A || a);
            if (!h) break;
            a.j[h.key] = h
        }
        return a
    };
    iy.prototype.Xb = function(a, b, c, d) {
        return ly(this, a, b, c, d)
    };
    var ly = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) ly(a, b, c[g], d, e, f);
        else {
            b = As(b, c, d || a.handleEvent, e, f || a.A || a);
            if (!b) return a;
            a.j[b.key] = b
        }
        return a
    };
    iy.prototype.ob = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.ob(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Ta(d) ? !!d.capture : !!d, e = e || this.A || this, c = Cs(c), d = !!d, b = ps(a) ? a.Rb(b, c, d, e) : a ? (a = Es(a)) ? a.Rb(b, c, d, e) : null : null, b && (Js(b), delete this.j[b.key])
    };
    var my = function(a) {
        $g(a.j, function(b, c) {
            this.j.hasOwnProperty(c) && Js(b)
        }, a);
        a.j = {}
    };
    iy.prototype.L = function() {
        iy.Fa.L.call(this);
        my(this)
    };
    iy.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var ny = function() {};
    ny.prototype.g = null;
    var oy = function(a) {
        var b;
        (b = a.g) || (b = a.g = {});
        return b
    };
    var py, qy = function() {};
    db(qy, ny);
    py = new qy;
    var ry = function(a) {
        R.call(this);
        this.headers = new Map;
        this.ba = a || null;
        this.j = !1;
        this.G = this.g = null;
        this.N = "";
        this.o = 0;
        this.l = this.J = this.B = this.H = !1;
        this.F = 0;
        this.C = null;
        this.Y = "";
        this.P = this.U = !1
    };
    db(ry, R);
    var sy = /^https?$/i,
        ty = ["POST", "PUT"],
        yy = function(a, b, c, d) {
            if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.N + "; newUri=" + b);
            c = c ? c.toUpperCase() : "GET";
            a.N = b;
            a.o = 0;
            a.H = !1;
            a.j = !0;
            a.g = new XMLHttpRequest;
            a.G = a.ba ? oy(a.ba) : oy(py);
            a.g.onreadystatechange = ab(a.W, a);
            try {
                a.J = !0, a.g.open(c, String(b), !0), a.J = !1
            } catch (g) {
                uy(a);
                return
            }
            b = d || "";
            d = new Map(a.headers);
            var e = Array.from(d.keys()).find(function(g) {
                    return "content-type" == g.toLowerCase()
                }),
                f = x.FormData && b instanceof x.FormData;
            !Zb(ty, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            c = u(d);
            for (d = c.next(); !d.done; d = c.next()) e = u(d.value), d = e.next().value, e = e.next().value, a.g.setRequestHeader(d, e);
            a.Y && (a.g.responseType = a.Y);
            "withCredentials" in a.g && a.g.withCredentials !== a.U && (a.g.withCredentials = a.U);
            try {
                vy(a), 0 < a.F && (a.P = wy(a.g), a.P ? (a.g.timeout = a.F, a.g.ontimeout = ab(a.aa, a)) : a.C = qt(a.aa, a.F, a)), a.B = !0, a.g.send(b), a.B = !1
            } catch (g) {
                uy(a)
            }
        },
        wy = function(a) {
            return oc && "number" === typeof a.timeout &&
                void 0 !== a.ontimeout
        };
    ry.prototype.aa = function() {
        "undefined" != typeof Oa && this.g && (this.o = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var uy = function(a) {
            a.j = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.o = 5;
            zy(a);
            Ay(a)
        },
        zy = function(a) {
            a.H || (a.H = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    ry.prototype.abort = function(a) {
        this.g && this.j && (this.j = !1, this.l = !0, this.g.abort(), this.l = !1, this.o = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ay(this))
    };
    ry.prototype.L = function() {
        this.g && (this.j && (this.j = !1, this.l = !0, this.g.abort(), this.l = !1), Ay(this, !0));
        ry.Fa.L.call(this)
    };
    ry.prototype.W = function() {
        this.Ca() || (this.J || this.B || this.l ? By(this) : this.da())
    };
    ry.prototype.da = function() {
        By(this)
    };
    var By = function(a) {
            if (a.j && "undefined" != typeof Oa && (!a.G[1] || 4 != Cy(a) || 2 != Iy(a)))
                if (a.B && 4 == Cy(a)) qt(a.W, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == Cy(a)) {
                a.j = !1;
                try {
                    var b = Iy(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.N).match(ri)[1] || null;
                            !f && x.self && x.self.location && (f = x.self.location.protocol.slice(0, -1));
                            e = !sy.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.o = 6, zy(a))
                } finally {
                    Ay(a)
                }
            }
        },
        Ay = function(a, b) {
            if (a.g) {
                vy(a);
                var c = a.g,
                    d = a.G[0] ? function() {} : null;
                a.g = null;
                a.G = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        vy = function(a) {
            a.g && a.P && (a.g.ontimeout = null);
            a.C && (x.clearTimeout(a.C), a.C = null)
        };
    ry.prototype.isActive = function() {
        return !!this.g
    };
    var Cy = function(a) {
            return a.g ? a.g.readyState : 0
        },
        Iy = function(a) {
            try {
                return 2 < Cy(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        Jy = function(a) {
            if (a.g) {
                a: {
                    a = a.g.responseText;
                    if (x.JSON) try {
                        var b = x.JSON.parse(a);
                        break a
                    } catch (c) {}
                    b = Hj(a)
                }
                return b
            }
        };
    var Ky = function() {};
    Ky.prototype.get = function(a) {
        return Ly({
            url: a.url,
            timeout: a.timeout,
            withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
            method: "GET",
            headers: void 0 === a.headers ? {} : a.headers
        })
    };
    var Ly = function(a) {
            var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ? void 0 : a.content,
                g = void 0 === a.headers ? {} : a.headers;
            return My({
                url: b,
                timeout: c,
                withCredentials: d,
                method: e,
                content: f,
                headers: g
            }).then(function(h) {
                return Promise.resolve(h)
            }, function(h) {
                return h instanceof Error && 6 == h.message && d ? My({
                    url: b,
                    timeout: c,
                    withCredentials: !d,
                    method: e,
                    content: f,
                    headers: g
                }) : Promise.reject(h)
            })
        },
        My = function(a) {
            var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ?
                void 0 : a.content;
            a = void 0 === a.headers ? {} : a.headers;
            var g = new ry;
            g.U = d;
            g.F = Math.max(0, cy(c));
            for (var h in a) g.headers.set(h, a[h]);
            var k = new iy;
            return new Promise(function(m, n) {
                k.Xb(g, "success", function() {
                    a: {
                        if (zn()) try {
                            Jy(g);
                            var p = "application/json";
                            break a
                        } catch (v) {
                            p = "application/xml";
                            break a
                        }
                        g.g && 4 == Cy(g) ? (p = g.g.getResponseHeader("Content-Type"), p = null === p ? void 0 : p) : p = void 0;p = p || ""
                    }
                    if (-1 != p.indexOf("application/json")) try {
                        m(Jy(g) || {})
                    } catch (v) {
                        n(new fy(5, Iy(g)))
                    } else {
                        try {
                            var q = g.g ? g.g.responseXML :
                                null
                        } catch (v) {
                            q = null
                        }
                        if (null == q) {
                            try {
                                var t = g.g ? g.g.responseText : ""
                            } catch (v) {
                                t = ""
                            }
                            q = t;
                            if ("undefined" != typeof DOMParser) t = new DOMParser, q = sj(q), q = t.parseFromString(Hh(q), "application/xml");
                            else if (hy) {
                                t = new ActiveXObject("MSXML2.DOMDocument");
                                t.resolveExternals = !1;
                                t.validateOnParse = !1;
                                try {
                                    t.setProperty("ProhibitDTD", !0), t.setProperty("MaxXMLSize", 2048), t.setProperty("MaxElementDepth", 256)
                                } catch (v) {}
                                t.loadXML(q);
                                q = t
                            } else throw Error("Your browser does not support loading xml documents");
                        }
                        m(q)
                    }
                    k.X();
                    g.X()
                });
                k.Xb(g, ["error", "timeout"], function() {
                    n(new fy(g.o, Iy(g)));
                    k.X();
                    g.X()
                });
                yy(g, vx(b), e, f)
            })
        };
    z("google.javascript.ads.imalib.common.UrlLoader", Ky);
    var Ny = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];

    function Oy() {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"))
    }

    function Py(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }

    function Qy() {
        var a = window.navigator,
            b = window.document;
        return !!(window.isSecureContext && "runAdAuction" in a && a.runAdAuction instanceof Function && Py("run-ad-auction", b))
    };
    var Ry = RegExp("ad\\.doubleclick\\.net/ddm/track(imp|clk)"),
        Vy = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            e = void 0 === e ? null : e;
            try {
                if (b = (void 0 === d ? 0 : d) ? vx(b, "https") : vx(b), Ry.test(b) && (b = b.replace("?", ";tpsrc=ima?"), e = e || ""), c = c || Yx(b), a.j || null != e) Sy(a, b, c, e);
                else {
                    var f = Oy() ? e : null;
                    zn() ? Ty(b) : Uy(a, b, c, f)
                }
            } catch (g) {}
        },
        Wy = function(a, b) {
            var c = {
                keepalive: !0,
                method: "get",
                redirect: "follow"
            };
            a && (c.referrerPolicy = "no-referrer");
            b ? (c.credentials = "include", "setAttributionReporting" in XMLHttpRequest.prototype ? (c.attributionReporting = {
                eventSourceEligible: !0,
                triggerEligible: !1
            }, c.mode = "no-cors") : c.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }) : c.mode = "no-cors";
            return c
        },
        Sy = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            L(K.getInstance(), "faa", "1");
            L(K.getInstance(), "alp", null === d ? "0" : "1");
            var e = Oy();
            L(K.getInstance(), "arpa", e ? "1" : "0");
            fetch(b, Wy(c, "" === d && e)).then(function() {
                L(K.getInstance(), "fas", "1")
            }).catch(function() {
                L(K.getInstance(), "faf", "1");
                a.j = !1;
                var f = d;
                f = Oy() ? f : null;
                zn() ? Ty(b) : Uy(a, b, c, f)
            });
            e && d && fetch(d, Wy(c, !0))
        },
        Uy = function(a, b, c, d) {
            var e = new Image,
                f = (a.l++).toString();
            a.g.set(f, e);
            e.onload = e.onerror = function() {
                a.g.delete(f)
            };
            c && (e.referrerPolicy = "no-referrer");
            null != d && (e.attributionSrc = d);
            e.src = b
        },
        Ty = function(a) {
            (new Ky).get({
                url: a,
                timeout: new by
            })
        };
    var Xy = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        Xg: "beginFullscreen",
        CAN_PLAY: "canPlay",
        CAN_PLAY_THROUGH: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        kh: "end",
        lh: "endFullscreen",
        ERROR: "error",
        ph: "focusSkipButton",
        LOAD_START: "loadStart",
        LOADED: "loaded",
        Nh: "mediaLoadTimeout",
        Oh: "mediaPlaybackTimeout",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        SEEKED: "seeked",
        SEEKING: "seeking",
        ai: "skip",
        xf: "skipShown",
        STALLED: "stalled",
        de: "start",
        TIME_UPDATE: "timeUpdate",
        di: "timedMetadata",
        pi: "volumeChange",
        WAITING: "waiting",
        ri: "windowFocusChanged",
        qh: "fullyLoaded"
    };
    var Yy = function() {
        R.apply(this, arguments)
    };
    w(Yy, R);
    Yy.prototype.C = function() {
        return !1
    };
    Yy.prototype.F = function() {
        return -1
    };
    Yy.prototype.G = function() {};
    var Zy = {},
        $y = (Zy[18] = -1, Zy[22] = -1, Zy[43] = 350, Zy[44] = 350, Zy[45] = 350, Zy[59] = -1, Zy[133] = 350, Zy[134] = 350, Zy[135] = 350, Zy[136] = 350, Zy[139] = 50, Zy[140] = 50, Zy[141] = 50, Zy[160] = 350, Zy[242] = 150, Zy[243] = 150, Zy[244] = 150, Zy[245] = 150, Zy[247] = 150, Zy[249] = 50, Zy[250] = 50, Zy[251] = 50, Zy[278] = 150, Zy[342] = -1, Zy[343] = -1, Zy[344] = -1, Zy[345] = -1, Zy[346] = -1, Zy[347] = -1, Zy),
        az = {},
        bz = (az[18] = !1, az[22] = !1, az[43] = !0, az[44] = !0, az[45] = !0, az[59] = !1, az[133] = !0, az[134] = !0, az[135] = !0, az[136] = !0, az[139] = !0, az[140] = !0, az[141] = !0, az[160] = !0,
            az[242] = !0, az[243] = !0, az[244] = !0, az[245] = !0, az[247] = !0, az[249] = !0, az[250] = !0, az[251] = !0, az[278] = !0, az[342] = !1, az[343] = !1, az[344] = !1, az[345] = !1, az[346] = !1, az[347] = !1, az),
        cz = {},
        dz = (cz[18] = "video/mp4", cz[22] = "video/mp4", cz[43] = "video/webm", cz[44] = "video/webm", cz[45] = "video/webm", cz[59] = "video/mp4", cz[133] = "video/mp4", cz[134] = "video/mp4", cz[135] = "video/mp4", cz[136] = "video/mp4", cz[139] = "audio/mp4", cz[140] = "audio/mp4", cz[141] = "audio/mp4", cz[160] = "video/mp4", cz[242] = "video/webm", cz[243] = "video/webm", cz[244] =
            "video/webm", cz[245] = "video/webm", cz[247] = "video/webm", cz[249] = "audio/webm", cz[250] = "audio/webm", cz[251] = "audio/webm", cz[278] = "video/webm", cz[342] = "video/mp4", cz[343] = "video/mp4", cz[344] = "video/mp4", cz[345] = "video/mp4", cz[346] = "video/mp4", cz[347] = "video/mp4", cz),
        ez = {},
        fz = (ez[18] = "avc1.42001E, mp4a.40.2", ez[22] = "avc1.64001F, mp4a.40.2", ez[43] = "vp8, vorbis", ez[44] = "vp8, vorbis", ez[45] = "vp8, vorbis", ez[59] = "avc1.4D001F, mp4a.40.2", ez[133] = "avc1.4D401E", ez[134] = "avc1.4D401E", ez[135] = "avc1.4D401E", ez[136] =
            "avc1.4D401E", ez[139] = "mp4a.40.2", ez[140] = "mp4a.40.2", ez[141] = "mp4a.40.2", ez[160] = "avc1.4D401E", ez[242] = "vp9", ez[243] = "vp9", ez[244] = "vp9", ez[245] = "vp9", ez[247] = "vp9", ez[249] = "opus", ez[250] = "opus", ez[251] = "opus", ez[278] = "vp9", ez[342] = "avc1.42E01E, mp4a.40.2", ez[343] = "avc1.42E01E, mp4a.40.2", ez[344] = "avc1.42E01E, mp4a.40.2", ez[345] = "avc1.42E01E, mp4a.40.2", ez[346] = "avc1.42E01E, mp4a.40.2", ez[347] = "avc1.4D001F, mp4a.40.2", ez);
    var gz = RegExp("/itag/(\\d+)/");

    function hz(a) {
        var b = Number(vi(a, "itag"));
        return b ? b : (a = a.match(gz)) && 2 === a.length ? Number(a[1]) : null
    }

    function iz(a) {
        var b = dz[a];
        a = fz[a];
        b ? (b = Th(b).toLowerCase(), b = a ? b + '; codecs="' + Th(a) + '"' : b) : b = "";
        return b
    }

    function jz(a, b) {
        if ("function" === typeof CustomEvent) return new CustomEvent(a, {
            detail: b
        });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    };
    var kz = function(a, b) {
        Yy.call(this);
        var c = this;
        this.j = b;
        this.B = this.l = this.g = 0;
        this.o = null;
        this.uri = new S(a);
        this.state = 0;
        var d;
        this.H = null == (d = this.j) ? void 0 : d.initialize();
        fo(this, function() {
            eo(c.j)
        })
    };
    w(kz, Yy);
    kz.prototype.F = function() {
        return this.g
    };
    kz.prototype.C = function() {
        return 3 === this.state
    };
    kz.prototype.G = function(a) {
        1 === this.state ? (this.g += a, this.state = 2) : 0 === this.state && (this.g += a, this.state = 1, lz(this))
    };
    var lz = function(a) {
            Ka(function(b) {
                if (1 == b.g) return 2 === a.state && (a.state = 1), xa(b, mz(a), 4);
                var c = 3 < a.B;
                if (c) {
                    null === a.o && (a.o = 400);
                    var d = jz("media_source_error", {
                        code: 0 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.l + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.l < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0), b.g = 0)
            })
        },
        mz = function(a) {
            var b;
            return Ka(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.l + "-" + (a.g - 1);
                        ix(a.uri,
                            "range", b);
                        if (!a.j) {
                            c.g = 2;
                            break
                        }
                        return xa(c, a.H, 3);
                    case 3:
                        return c.return(nz(a));
                    case 2:
                        return c.l = 4, xa(c, oz(a), 6);
                    case 6:
                        za(c);
                        break;
                    case 4:
                        Ca(c), a.B++, c.g = 0
                }
            })
        },
        nz = function(a) {
            var b;
            return Ka(function(c) {
                switch (c.g) {
                    case 1:
                        return a.j ? xa(c, a.j.Sb(a.uri), 2) : c.return(Promise.reject());
                    case 2:
                        if (b = c.j) return b.xa && (a.state = 3), pz(a, b.video), c.return();
                        c.l = 3;
                        return xa(c, oz(a), 5);
                    case 5:
                        za(c);
                        break;
                    case 3:
                        Ca(c), a.B++, c.g = 0
                }
            })
        },
        oz = function(a) {
            var b, c, d, e, f, g, h;
            return Ka(function(k) {
                if (1 == k.g) return b = 0,
                    c = a.g - a.l, xa(k, fetch(a.uri.toString()), 2);
                d = k.j;
                if (400 <= d.status) return L(K.getInstance(), "lvlfes", d.status.toString()), a.o = d.status, k.return(Promise.reject());
                f = null == (e = d.body) ? void 0 : e.getReader();
                if (!f) return Fj("lvlmr"), a.o = d.status, k.return(Promise.reject());
                g = [];
                h = function() {
                    var m, n, p, q, t, v;
                    return Ka(function(y) {
                        if (1 == y.g) return xa(y, f.read(), 2);
                        m = y.j;
                        n = m.done;
                        p = m.value;
                        if (n) return q = b < c, qz(a, g, q), y.return();
                        g.push(p);
                        b += null == (t = p) ? void 0 : t.length;
                        pz(a, null == (v = p) ? void 0 : v.buffer);
                        return xa(y,
                            h(), 0)
                    })
                };
                return xa(k, h(), 0)
            })
        },
        qz = function(a, b, c) {
            c && (a.state = 3, pz(a, new ArrayBuffer(0)));
            var d = new Uint8Array(b.reduce(function(g, h) {
                    return g + h.length
                }, 0)),
                e = 0;
            b = u(b);
            for (var f = b.next(); !f.done; f = b.next()) f = f.value, d.set(f, e), e += f.length;
            a.j && 0 < d.buffer.byteLength && a.j.jc(d.buffer, a.uri, 0, c)
        },
        pz = function(a, b) {
            null !== b && (b = b.slice(0), a.l += b.byteLength, a.dispatchEvent({
                type: "progress",
                gd: b
            }))
        };
    kz.prototype.L = function() {
        var a;
        (null == (a = this.j) ? 0 : a.Sa()) && this.j.close();
        Yy.prototype.L.call(this)
    };
    var sz = function(a) {
            this.uri = a;
            this.g = rz(a)
        },
        rz = function(a) {
            return new Map(a.l.split("/").reduce(function(b, c, d, e) {
                d % 2 && b.set(e[d - 1], c);
                return b
            }, new Map))
        };
    sz.prototype.getId = function() {
        return tz(this, "id")
    };
    var uz = function(a) {
            a = a.uri.g.get("range");
            if (!a) return null;
            a = a.split("-")[0];
            return !a || isNaN(Number(a)) ? null : Number(a)
        },
        tz = function(a, b) {
            var c = a.uri.g.get(b);
            return c ? c : (a = a.g.get(b)) ? a : null
        };
    var vz = function() {};
    var wz = ["doubleclick.net"];

    function xz() {
        if (Mb() || A("iPad") || A("iPod")) return !1;
        if (Lb()) {
            if (void 0 === qx) {
                a: {
                    if (void 0 === ox) {
                        if (sx) {
                            var a = rb(rx(), "Safari");
                            var b = (new S(window.location.href)).g.Db("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
                                    var c = b.lastIndexOf("v");
                                    if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || "0.0.0" !== b) {
                                a = ox = !0;
                                break a
                            }
                        }
                        ox = !1
                    }
                    a = ox
                }
                a || (void 0 === px && (px = rb(rx(), "afma-sdk-a") ? !0 : !1), a = px);qx = a
            }
            return qx ? !0 : pi() ? !1 : yz()
        }
        a = Ob() ||
            (Kb() ? "Linux" === Ab.platform : A("Linux")) || (Kb() ? "Windows" === Ab.platform : A("Windows")) || (Kb() ? "Chrome OS" === Ab.platform : A("CrOS"));
        return (M(Ik) || M(Gk) || M(Hk)) && a && Jb() ? yz() : !1
    }

    function yz() {
        var a = !1,
            b = (new S(window.location.href)).j;
        wz.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    };
    var zz, Cz = function(a, b, c) {
        if ("number" === typeof a) var d = {
            name: Az(a)
        };
        else d = a, a = Bz(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        fb.call(this, b)
    };
    db(Cz, fb);
    Cz.prototype.getName = function() {
        return this.g.name || ""
    };
    var Dz = {
            zf: 1,
            Sh: 2,
            NOT_FOUND_ERR: 3,
            cf: 4,
            gf: 5,
            Th: 6,
            yf: 7,
            ABORT_ERR: 8,
            vf: 9,
            gi: 10,
            TIMEOUT_ERR: 11,
            uf: 12,
            INVALID_ACCESS_ERR: 13,
            INVALID_STATE_ERR: 14
        },
        Ez = (x.g || x.j || Dz).zf,
        Fz = (x.g || x.j || Dz).NOT_FOUND_ERR,
        Gz = (x.g || x.j || Dz).cf,
        Hz = (x.g || x.j || Dz).gf,
        Iz = (x.g || x.j || Dz).yf,
        Jz = (x.g || x.j || Dz).ABORT_ERR,
        Kz = (x.g || x.j || Dz).vf,
        Lz = (x.g || x.j || Dz).TIMEOUT_ERR,
        Mz = (x.g || x.j || Dz).uf,
        Nz = (x.DOMException || Dz).INVALID_ACCESS_ERR,
        Oz = (x.DOMException || Dz).INVALID_STATE_ERR,
        Bz = function(a) {
            switch (a) {
                case "UnknownError":
                    return Ez;
                case "NotFoundError":
                    return Fz;
                case "ConstraintError":
                    return Gz;
                case "DataError":
                    return Hz;
                case "TransactionInactiveError":
                    return Iz;
                case "AbortError":
                    return Jz;
                case "ReadOnlyError":
                    return Kz;
                case "TimeoutError":
                    return Lz;
                case "QuotaExceededError":
                    return Mz;
                case "InvalidAccessError":
                    return Nz;
                case "InvalidStateError":
                    return Oz;
                default:
                    return Ez
            }
        },
        Az = function(a) {
            switch (a) {
                case Ez:
                    return "UnknownError";
                case Fz:
                    return "NotFoundError";
                case Gz:
                    return "ConstraintError";
                case Hz:
                    return "DataError";
                case Iz:
                    return "TransactionInactiveError";
                case Jz:
                    return "AbortError";
                case Kz:
                    return "ReadOnlyError";
                case Lz:
                    return "TimeoutError";
                case Mz:
                    return "QuotaExceededError";
                case Nz:
                    return "InvalidAccessError";
                case Oz:
                    return "InvalidStateError";
                default:
                    return "UnknownError"
            }
        },
        Pz = function(a, b) {
            return "error" in a ? new Cz(a.error, b) : new Cz({
                name: "UnknownError"
            }, b)
        },
        Qz = function(a, b) {
            return "name" in a ? new Cz(a, b + ": " + a.message) : new Cz({
                name: "UnknownError"
            }, b)
        };
    var Rz = function(a) {
            this.g = a
        },
        Sz = x.IDBKeyRange || x.webkitIDBKeyRange;

    function Tz() {};
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    var Uz = function(a, b) {
        this.o = [];
        this.H = a;
        this.G = b || null;
        this.A = this.l = !1;
        this.j = void 0;
        this.M = this.J = this.C = !1;
        this.B = 0;
        this.g = null;
        this.I = 0
    };
    db(Uz, Tz);
    Uz.prototype.cancel = function(a) {
        if (this.l) this.j instanceof Uz && this.j.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.I--, 0 >= b.I && b.cancel())
            }
            this.H ? this.H.call(this.G, this) : this.M = !0;
            this.l || Vz(this, new Wz(this))
        }
    };
    Uz.prototype.F = function(a, b) {
        this.C = !1;
        Xz(this, a, b)
    };
    var Xz = function(a, b, c) {
            a.l = !0;
            a.j = c;
            a.A = !b;
            Yz(a)
        },
        $z = function(a) {
            if (a.l) {
                if (!a.M) throw new Zz(a);
                a.M = !1
            }
        };
    Uz.prototype.wa = function(a) {
        $z(this);
        Xz(this, !0, a)
    };
    var Vz = function(a, b) {
            $z(a);
            Xz(a, !1, b)
        },
        bA = function(a, b) {
            return aA(a, b, null)
        },
        aA = function(a, b, c, d) {
            a.o.push([b, c, d]);
            a.l && Yz(a);
            return a
        };
    Uz.prototype.then = function(a, b, c) {
        var d, e, f = new at(function(g, h) {
            e = g;
            d = h
        });
        aA(this, e, function(g) {
            g instanceof Wz ? f.cancel() : d(g);
            return cA
        }, this);
        return f.then(a, b, c)
    };
    Uz.prototype.$goog_Thenable = !0;
    var dA = function(a) {
            return Vb(a.o, function(b) {
                return "function" === typeof b[1]
            })
        },
        cA = {},
        Yz = function(a) {
            if (a.B && a.l && dA(a)) {
                var b = a.B,
                    c = eA[b];
                c && (x.clearTimeout(c.g), delete eA[b]);
                a.B = 0
            }
            a.g && (a.g.I--, delete a.g);
            b = a.j;
            for (var d = c = !1; a.o.length && !a.C;) {
                var e = a.o.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.A ? g : f) try {
                    var h = f.call(e || a.G, b);
                    h === cA && (h = void 0);
                    void 0 !== h && (a.A = a.A && (h == b || h instanceof Error), a.j = b = h);
                    if (Zs(b) || "function" === typeof x.Promise && b instanceof x.Promise) d = !0, a.C = !0
                } catch (k) {
                    b = k, a.A = !0, dA(a) ||
                        (c = !0)
                }
            }
            a.j = b;
            d && (h = ab(a.F, a, !0), d = ab(a.F, a, !1), b instanceof Uz ? (aA(b, h, d), b.J = !0) : b.then(h, d));
            c && (b = new fA(b), eA[b.g] = b, a.B = b.g)
        },
        Zz = function() {
            fb.call(this)
        };
    db(Zz, fb);
    Zz.prototype.message = "Deferred has already fired";
    Zz.prototype.name = "AlreadyCalledError";
    var Wz = function() {
        fb.call(this)
    };
    db(Wz, fb);
    Wz.prototype.message = "Deferred was canceled";
    Wz.prototype.name = "CanceledError";
    var fA = function(a) {
        this.g = x.setTimeout(ab(this.l, this), 0);
        this.j = a
    };
    fA.prototype.l = function() {
        delete eA[this.g];
        throw this.j;
    };
    var eA = {};
    var gA = function() {
        R.call(this)
    };
    db(gA, R);
    gA.prototype.g = null;
    gA.prototype.next = function(a) {
        if (a) this.g["continue"](a);
        else this.g["continue"]()
    };
    gA.prototype.remove = function() {
        var a = new Uz;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return Vz(a, Qz(c, "deleting via cursor")), a
        }
        b.onsuccess = function() {
            a.wa()
        };
        b.onerror = function(c) {
            Vz(a, Pz(c.target, "deleting via cursor"))
        };
        return a
    };
    gA.prototype.getValue = function() {
        return this.g.value
    };
    var hA = function(a, b) {
        var c = new gA;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.X(), Qz(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        };
        d.onerror = function() {
            c.dispatchEvent("e")
        };
        return c
    };
    var iA = function(a) {
        this.g = a
    };
    iA.prototype.getName = function() {
        return this.g.name
    };
    var jA = function(a, b, c) {
        var d = new Uz;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + Oh(c), Vz(d, Qz(f, b)), d
        }
        e.onsuccess = function(f) {
            d.wa(f.target.result)
        };
        e.onerror = function(f) {
            b += " with key " + Oh(c);
            Vz(d, Pz(f.target, b))
        };
        return d
    };
    iA.prototype.get = function(a) {
        return jA(this, "getting from index " + this.getName(), a)
    };
    var kA = function(a, b) {
        return hA(a.g, b)
    };
    var lA = function(a) {
        this.g = a
    };
    lA.prototype.getName = function() {
        return this.g.name
    };
    var mA = function(a, b, c, d, e) {
            var f = new Uz;
            try {
                var g = e ? a.g[b](d, e) : a.g[b](d)
            } catch (h) {
                return c += Oh(d), e && (c += ", with key " + Oh(e)), Vz(f, Qz(h, c)), f
            }
            g.onsuccess = function(h) {
                f.wa(h.target.result)
            };
            g.onerror = function(h) {
                c += Oh(d);
                e && (c += ", with key " + Oh(e));
                Vz(f, Pz(h.target, c))
            };
            return f
        },
        nA = function(a, b) {
            return mA(a, "put", "putting into " + a.getName() + " with value", b)
        };
    lA.prototype.add = function(a, b) {
        return mA(this, "add", "adding into " + this.getName() + " with value ", a, b)
    };
    lA.prototype.remove = function(a) {
        var b = new Uz;
        try {
            var c = this.g["delete"](a instanceof Rz ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + Oh(a), Vz(b, Qz(e, c)), b
        }
        c.onsuccess = function() {
            b.wa()
        };
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + Oh(a);
            Vz(b, Pz(e.target, f))
        };
        return b
    };
    lA.prototype.get = function(a) {
        var b = new Uz;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + Oh(a), Vz(b, Qz(e, c)), b
        }
        c.onsuccess = function(e) {
            b.wa(e.target.result)
        };
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + Oh(a);
            Vz(b, Pz(e.target, f))
        };
        return b
    };
    lA.prototype.clear = function() {
        var a = "clearing store " + this.getName(),
            b = new Uz;
        try {
            var c = this.g.clear()
        } catch (d) {
            return Vz(b, Qz(d, a)), b
        }
        c.onsuccess = function() {
            b.wa()
        };
        c.onerror = function(d) {
            Vz(b, Pz(d.target, a))
        };
        return b
    };
    var oA = function(a) {
        try {
            return new iA(a.g.index("timestamp"))
        } catch (b) {
            throw Qz(b, "getting index timestamp");
        }
    };
    var pA = function(a, b) {
        R.call(this);
        this.g = a;
        this.l = b;
        this.j = new iy(this);
        this.j.O(this.g, "complete", ab(this.dispatchEvent, this, "complete"));
        this.j.O(this.g, "abort", ab(this.dispatchEvent, this, "abort"));
        this.j.O(this.g, "error", this.jf)
    };
    db(pA, R);
    l = pA.prototype;
    l.jf = function(a) {
        a.target instanceof Cz ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: Pz(a.target, "in transaction")
        })
    };
    l.objectStore = function(a) {
        try {
            return new lA(this.g.objectStore(a))
        } catch (b) {
            throw Qz(b, "getting object store " + a);
        }
    };
    l.commit = function(a) {
        if (this.g.commit || !a) try {
            this.g.commit()
        } catch (b) {
            throw Qz(b, "cannot commit the transaction");
        }
    };
    l.wait = function() {
        var a = new Uz;
        As(this, "complete", ab(a.wa, a));
        var b = As(this, "abort", function() {
            Js(c);
            Vz(a, new Cz(Jz, "waiting for transaction to complete"))
        });
        var c = As(this, "error", function(e) {
            Js(b);
            Vz(a, e.target)
        });
        var d = this.l;
        return bA(a, function() {
            return d
        })
    };
    l.abort = function() {
        this.g.abort()
    };
    l.L = function() {
        pA.Fa.L.call(this);
        this.j.X()
    };
    var qA = function(a) {
        R.call(this);
        this.g = a;
        this.j = new iy(this);
        this.j.O(this.g, "abort", ab(this.dispatchEvent, this, "abort"));
        this.j.O(this.g, "error", this.kf);
        this.j.O(this.g, "versionchange", this.Mf);
        this.j.O(this.g, "close", ab(this.dispatchEvent, this, "close"))
    };
    db(qA, R);
    l = qA.prototype;
    l.Bd = !0;
    l.kf = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    };
    l.Mf = function(a) {
        this.dispatchEvent(new rA(a.oldVersion, a.newVersion))
    };
    l.close = function() {
        this.Bd && (this.g.close(), this.Bd = !1)
    };
    l.Sa = function() {
        return this.Bd
    };
    l.getName = function() {
        return this.g.name
    };
    l.getVersion = function() {
        return Number(this.g.version)
    };
    var sA = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new pA(c, a)
        } catch (d) {
            throw Qz(d, "creating transaction");
        }
    };
    qA.prototype.L = function() {
        qA.Fa.L.call(this);
        this.j.X()
    };
    var rA = function(a, b) {
        ks.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    db(rA, ks);
    var tA = function(a) {
        var b = new Uz;
        void 0 == zz && (zz = x.indexedDB || x.mozIndexedDB || x.webkitIndexedDB || x.moz_indexedDB);
        var c = zz.open("IndexedDbVideoChunkPersistentStorage", 6);
        c.onsuccess = function(d) {
            d = new qA(d.target.result);
            b.wa(d)
        };
        c.onerror = function(d) {
            Vz(b, Pz(d.target, "opening database IndexedDbVideoChunkPersistentStorage"))
        };
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new qA(d.target.result);
                a(new rA(d.oldVersion, d.newVersion), e, new pA(d.target.transaction, e))
            }
        };
        c.onblocked = function() {};
        return b
    };
    var uA = function() {
        R.apply(this, arguments);
        this.g = null
    };
    w(uA, R);
    uA.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(tA(this.j)).then(function(b) {
            a.g = b
        }, function(b) {
            L(K.getInstance(), "codf", b.message)
        })
    };
    uA.prototype.Sa = function() {
        return null !== this.g && this.g.Sa()
    };
    uA.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            vA(a, b)
        })).then(function() {
            return wA()
        }).then(function() {
            a.g.close()
        })
    };
    var wA = function() {
        var a;
        return (null == (a = navigator.storage) ? 0 : a.estimate) ? navigator.storage.estimate().then(function(b) {
            L(K.getInstance(), "csue", String(b.usage))
        }) : Promise.resolve(void 0)
    };
    uA.prototype.Sb = function(a) {
        return (a = xA(a, 0)) ? yA(this, zA(a), a.Dc) : Promise.resolve(null)
    };
    uA.prototype.jc = function(a, b, c, d) {
        (b = xA(b, c)) ? (c = b.startIndex, AA(this, {
            yi: zA(b),
            startIndex: c,
            vc: c + a.byteLength - 1,
            Dc: b.Dc,
            timestamp: new Date(Date.now()),
            xa: d,
            vb: b.vb,
            video: a
        })) : Promise.resolve(void 0)
    };
    uA.prototype.j = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk")) try {
            b.g.deleteObjectStore("MediaSourceVideoChunk")
        } catch (d) {
            throw Qz(d, "deleting object store MediaSourceVideoChunk");
        }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new lA(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw Qz(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw Qz(d, "creating new index timestamp with key path timestamp");
        }
    };
    var vA = function(a, b) {
            var c = new Date(Date.now());
            c.setDate(c.getDate() - 30);
            c = new Rz(Sz.upperBound(c, void 0));
            var d = kA(oA(sA(a.g).objectStore("MediaSourceVideoChunk")), c),
                e = d.O("n", function() {
                    d.remove();
                    d.next()
                });
            As(d, "c", function() {
                Js(e);
                b()
            })
        },
        xA = function(a, b) {
            var c = new sz(a);
            a = c.getId();
            var d = tz(c, "itag"),
                e = tz(c, "source"),
                f = tz(c, "lmt");
            c = uz(c);
            var g = [];
            a ? d ? e ? f ? null === c && g.push("startIndex") : g.push("lmt") : g.push("source") : g.push("itag") : g.push("videoId");
            return 0 < g.length ? (L(K.getInstance(), "civp",
                g.join("-")), null) : {
                Pg: a,
                vb: d,
                source: e,
                Dc: f,
                startIndex: c + b
            }
        },
        zA = function(a) {
            for (var b = [a.Pg, a.source, a.startIndex].join(), c = 0, d = 0; d < b.length; d++) c = Math.imul(31, c) + b.charCodeAt(d) | 0;
            return c.toString() + "," + a.vb
        },
        yA = function(a, b, c) {
            var d = sA(a.g).objectStore("MediaSourceVideoChunk");
            return Promise.resolve(d.get(b)).then(function(e) {
                if (!e) return L(K.getInstance(), "cenf", "1"), null;
                if (e.Dc !== c) return L(K.getInstance(), "cdl", "1"), d.remove(b).then(null, function(f) {
                        L(K.getInstance(), "crdlvf", f.message)
                    }),
                    null;
                L(K.getInstance(), "cefml", "1");
                return {
                    vb: e.vb,
                    vc: e.vc,
                    xa: e.xa,
                    video: e.video
                }
            }, function(e) {
                L(K.getInstance(), "cgvf", e.message);
                return null
            })
        },
        AA = function(a, b) {
            a = sA(a.g).objectStore("MediaSourceVideoChunk");
            Promise.resolve(nA(a, b)).then(function() {
                L(K.getInstance(), "cavs", "1")
            }, function(c) {
                L(K.getInstance(), "cavf", c.message)
            })
        };
    var BA = function(a) {
        Yy.call(this);
        var b = this;
        this.H = this.j = this.g = 0;
        this.o = this.J = null;
        this.uri = new S(a);
        this.state = 0;
        this.l = (this.B = xz() && !xx(this.uri)) ? vw(uA) : null;
        fo(this, function() {
            eo(b.l)
        });
        this.J = this.B ? this.l.initialize() : null
    };
    w(BA, Yy);
    BA.prototype.F = function() {
        return this.g
    };
    BA.prototype.C = function() {
        return 3 === this.state
    };
    BA.prototype.G = function(a) {
        1 === this.state ? (this.g += a, this.state = 2) : 0 === this.state && (this.g += a, this.state = 1, CA(this))
    };
    var CA = function(a) {
            Ka(function(b) {
                if (1 == b.g) return 2 === a.state && (a.state = 1), xa(b, DA(a), 4);
                var c = 3 < a.H;
                if (c && null !== a.o) {
                    var d = jz("media_source_error", {
                        code: 0 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.j + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.j < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0), b.g = 0)
            })
        },
        DA = function(a) {
            var b;
            return Ka(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.j + "-" + (a.g - 1);
                        ix(a.uri, "range",
                            b);
                        if (!a.B) {
                            c.g = 2;
                            break
                        }
                        return xa(c, a.J, 3);
                    case 3:
                        return c.return(EA(a));
                    case 2:
                        return c.l = 4, xa(c, FA(a), 6);
                    case 6:
                        za(c);
                        break;
                    case 4:
                        Ca(c), GA(a), c.g = 0
                }
            })
        },
        EA = function(a) {
            var b;
            return Ka(function(c) {
                switch (c.g) {
                    case 1:
                        return xa(c, a.l.Sb(a.uri), 2);
                    case 2:
                        if (b = c.j) {
                            b.xa && (a.state = 3);
                            HA(a, b.video, 0);
                            c.g = 0;
                            break
                        }
                        c.l = 4;
                        return xa(c, FA(a), 6);
                    case 6:
                        za(c);
                        break;
                    case 4:
                        Ca(c), GA(a), c.g = 0
                }
            })
        },
        GA = function(a) {
            if (M(fl)) {
                a: {
                    var b = new sz(a.uri);
                    var c, d;
                    if (null == (c = b.uri) ? 0 : null == (d = c.l) ? 0 : d.startsWith("/videoplayback")) {
                        var e =
                            (c = tz(b, "mn")) ? c.split(",") : null;
                        d = tz(b, "fvip");
                        c = b.uri.G();
                        if (e && d) {
                            var f = (Number(tz(b, "fallback_count")) || 0) + 1;
                            if (e = e[f]) {
                                c.j = "r" + d + "---" + e + ".googlevideo.com";
                                ix(c, "fallback_count", f);
                                b = c;
                                break a
                            }
                        }
                        var g, h;
                        d = Number((null != (h = null == (g = c.g.get("cmo")) ? void 0 : g.split("=")) ? h : [])[1]) || 0;
                        b.uri.j.match(/^r{1,2}(\d+)---(.+)\.googlevideo.com$/) && (c.j = "redirector.googlevideo.com");
                        ix(c, "cmo", "pf=" + (d + 1));
                        b = c
                    } else b = b.uri
                }
                a.uri = b;a.dispatchEvent(jz("bandaid_fallback_count"))
            }
            a.H++
        },
        FA = function(a) {
            return new Promise(function(b,
                c) {
                var d = new XMLHttpRequest,
                    e = 0,
                    f = a.g - a.j;
                d.addEventListener("load", function() {
                    Fj("lvlcl");
                    if (400 <= d.status) L(K.getInstance(), "lvlxes", d.status.toString()), a.o = d.status, c();
                    else {
                        var g = d.response;
                        g.byteLength < f && (a.state = 3);
                        var h = HA(a, g, e);
                        e += h;
                        a.B && 0 < g.byteLength && a.l.jc(g, a.uri, 0, g.byteLength < f);
                        b()
                    }
                });
                d.addEventListener("timeout", function() {
                    Fj("lvlct");
                    a.o = d.status;
                    c()
                });
                d.addEventListener("error", function() {
                    Fj("lvlce");
                    a.o = d.status;
                    c()
                });
                d.addEventListener("progress", function() {
                    if (400 <= d.status) a.o =
                        d.status;
                    else {
                        var g = HA(a, d.response, e);
                        e += g
                    }
                });
                d.responseType = "arraybuffer";
                d.open("get", a.uri.toString());
                d.send(null)
            })
        },
        HA = function(a, b, c) {
            if (null === b) return 0;
            b = b.slice(c);
            a.j += b.byteLength;
            a.dispatchEvent({
                type: "progress",
                gd: b
            });
            return b.byteLength
        };
    BA.prototype.L = function() {
        this.B && this.l.Sa() && this.l.close();
        Yy.prototype.L.call(this)
    };
    var IA = {
        Ii: 2E5,
        Gi: 7E4,
        Ia: 3E5,
        Fi: 5E3,
        Pi: 5E3,
        Hi: 6E3
    };

    function JA() {
        return !!window.MediaSource
    }

    function KA(a) {
        return [43, 44, 45].includes(a) && Ic ? !1 : bz[a] ? (a = iz(a), !!a && JA() && MediaSource.isTypeSupported(a)) : !1
    };
    var LA = function() {};
    LA.prototype.ng = function(a, b, c) {
        return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0
    };
    var NA = function(a, b) {
            var c = this;
            this.g = a;
            this.index = b;
            this.j = [];
            this.g || Fj("msms_sbf" + this.index);
            this.g.addEventListener("updateend", function() {
                MA(c)
            });
            this.g.addEventListener("error", function() {
                Fj("msms_sbe" + c.index)
            })
        },
        MA = function(a) {
            if (0 < a.j.length && !a.g.updating) {
                var b = a.j.shift();
                a.g.appendBuffer(b)
            }
        };
    var OA = function() {
        this.g = this.cache = null
    };
    l = OA.prototype;
    l.initialize = function() {
        var a = this;
        return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function(b) {
            a.cache = b
        }, function(b) {
            L(K.getInstance(), "codf", b.message)
        })
    };
    l.Sa = function() {
        return null !== this.cache
    };
    l.close = function() {
        return Promise.resolve()
    };
    l.Sb = function(a) {
        var b = this;
        a = PA(this, a);
        return this.Sa() && a ? this.cache.match(a).then(function(c) {
            if (!c) return L(K.getInstance(), "cenf", "1"), Promise.resolve(null);
            L(K.getInstance(), "cef", "1");
            return c.arrayBuffer().then(function(d) {
                var e = uz(b.g),
                    f;
                (f = b.g.uri.g.get("range")) ? (f = f.split("-")[1], f = !f || isNaN(Number(f)) ? null : Number(f)) : f = null;
                e = e + d.byteLength - 1;
                f = f > e;
                return {
                    vb: tz(b.g, "itag"),
                    vc: e,
                    xa: f,
                    video: d
                }
            })
        }, function(c) {
            L(K.getInstance(), "cgvf", c.message);
            return Promise.resolve(null)
        }) : (L(K.getInstance(),
            "cgvf", "1"), Promise.resolve(null))
    };
    l.jc = function(a, b) {
        b = PA(this, b);
        a = new Response(a);
        this.Sa() && b ? this.cache.put(b, a).then(function() {
            L(K.getInstance(), "cavs", "1")
        }, function(c) {
            L(K.getInstance(), "cavf", c.message)
        }) : (L(K.getInstance(), "cavf", "1"), Promise.resolve())
    };
    var PA = function(a, b) {
        a.g = new sz(b);
        b = a.g.getId();
        var c = tz(a.g, "itag"),
            d = tz(a.g, "source"),
            e = tz(a.g, "lmt");
        a = tz(a.g, "range");
        if (b && c && d && a) return new Request("http://url/videoplayback?id=" + b + "&itag=" + c + "&source=" + d + "&lmt=" + e + "&range=" + a);
        L(K.getInstance(), "civp", "1");
        return null
    };
    var SA = function(a) {
        R.call(this);
        var b = this;
        this.l = a;
        this.g = [];
        this.B = null;
        this.C = 0;
        this.N = !1;
        this.G = 0;
        this.F = [];
        if (M(Nk)) {
            var c = null;
            xz() && (M(Pk) ? c = vw(OA) : c = vw(uA));
            this.o = this.l.map(function(d) {
                return vw(kz, d.url, xx(d.url) ? null : c)
            })
        } else this.o = this.l.map(function(d) {
            return vw(BA, d.url)
        });
        this.j = vw(MediaSource);
        this.H = function() {
            QA(b)
        };
        this.j.addEventListener("sourceopen", this.H);
        this.J = RA(this)
    };
    w(SA, R);
    var RA = function(a) {
            for (var b = [], c = 0; c < a.l.length; ++c) b.push(new LA);
            return b
        },
        QA = function(a) {
            Fj("msms_oso");
            for (var b = {
                    za: 0
                }; b.za < a.l.length; b = {
                    Hd: void 0,
                    Ec: void 0,
                    nb: void 0,
                    za: b.za,
                    Fc: void 0
                }, ++b.za) {
                var c = a.l[b.za];
                L(K.getInstance(), "msms_mime" + b.za, c.mimeType);
                L(K.getInstance(), "msms_cs" + b.za, c.Ia.toString());
                M(Ok) ? (b.Hd = new NA(a.j.addSourceBuffer(c.mimeType), b.za), b.Ec = a.o[b.za], b.Ec.O("progress", function(d) {
                    return function(e) {
                        var f = d.Hd,
                            g = d.Ec;
                        e = e.gd;
                        0 !== e.byteLength && (f.j.push(e), MA(f));
                        g.C() &&
                            (a.C++, a.C === a.g.length && TA(a))
                    }
                }(b)), b.Ec.O("media_source_error", function(d) {
                    a.dispatchEvent(d)
                }), a.g.push(b.Hd.g)) : (b.nb = a.j.addSourceBuffer(c.mimeType), b.nb ? (b.Fc = a.o[b.za], M(Nk) && b.nb.addEventListener("updateend", function(d) {
                    return function() {
                        if (0 < a.F.length && !d.nb.updating) {
                            var e = a.F.shift();
                            d.nb.appendBuffer(e)
                        }
                    }
                }(b)), b.nb.addEventListener("error", function(d) {
                    return function() {
                        Fj("msms_sbe" + d.za)
                    }
                }(b)), b.Fc.O("progress", function(d) {
                    return function(e) {
                        var f = d.nb,
                            g = d.Fc;
                        e = e.gd;
                        0 !== e.byteLength &&
                            (M(Nk) ? f.updating ? a.F.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
                        g.C() && (a.C++, a.C === a.g.length && TA(a))
                    }
                }(b)), b.Fc.O("media_source_error", function(d) {
                    a.dispatchEvent(d)
                }), a.g.push(b.nb)) : Fj("msms_sbf" + b.za))
            }
            L(K.getInstance(), "msms_ns", a.g.length.toString());
            a.N = !0;
            UA(a)
        },
        TA = function(a) {
            Promise.all(a.g.map(function(b) {
                return new Promise(function(c) {
                    b.updating ? b.addEventListener("updateend", function() {
                        c()
                    }) : c()
                })
            })).then(function() {
                a.j.endOfStream()
            })
        },
        UA = function(a) {
            if (a.N)
                for (var b = 0; b < a.l.length; ++b) {
                    var c =
                        a.o[b],
                        d = a.g[b];
                    d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
                    d = a.J[b].ng(a.G, d, c.F());
                    0 !== d && c.G(d)
                }
        },
        VA = function(a) {
            a.B = Ah(a.j).toString();
            return a.B
        };
    SA.prototype.L = function() {
        this.B && window.URL.revokeObjectURL(this.B);
        for (var a = u(this.o), b = a.next(); !b.done; b = a.next()) b.value.X();
        this.j.removeEventListener("sourceopen", this.H);
        R.prototype.L.call(this)
    };
    SA.prototype.Wc = function(a) {
        this.J.filter(function() {
            return !1
        }).map(function(b) {
            return b
        }).forEach(function(b) {
            b.g = Object.assign({}, IA, b.g, a)
        })
    };
    var WA = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"),
        XA = RegExp("outstream.min.js"),
        YA = RegExp("outstream.min.css"),
        ZA = RegExp("fonts.gstatic.com"),
        $A = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
        aB = RegExp("custom.elements.min.js");

    function bB(a, b) {
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            k = 0,
            m = !1,
            n = !1;
        if ("function" === typeof Pa("performance.getEntriesByType", x) && "transferSize" in x.PerformanceResourceTiming.prototype) {
            var p = x.performance.getEntriesByType("resource");
            p = u(p);
            for (var q = p.next(); !q.done; q = p.next()) q = q.value, WA.test(q.name) || (f += 1, q.transferSize ? (c += q.transferSize, q.encodedBodySize && q.transferSize < q.encodedBodySize && (h += 1, e += q.encodedBodySize, XA.test(q.name) && (m = !0), YA.test(q.name) && (n = !0)), $A.test(q.name) && (d += q.transferSize)) :
                0 === q.transferSize && 0 === q.encodedBodySize ? aB.test(q.name) ? c += 6686 : ZA.test(q.name) || (k += 1, Ej(K.getInstance(), {
                    event_name: "unmeasurable_asset",
                    resource_name: q.name,
                    encoded_body_size: q.encodedBodySize,
                    transfer_size: q.transferSize
                })) : (g += 1, e += q.encodedBodySize, XA.test(q.name) && (m = !0), YA.test(q.name) && (n = !0)));
            p = 0;
            if (a.duration) {
                for (q = 0; q < a.buffered.length; q++) p += a.buffered.end(q) - a.buffered.start(q);
                p = Math.min(p, a.duration)
            }
            Ej(K.getInstance(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: m,
                css_cached: n,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: p.toFixed(2)
            })
        } else L(K.getInstance(), "error", "reporting_timing_not_supported")
    };
    var cB = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.Ia = c;
        this.g = void 0 === d ? null : d
    };

    function dB(a) {
        var b = K.getInstance(),
            c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime, L(b, "vqdf", String(c.droppedVideoFrames)), L(b, "vqtf", String(c.totalVideoFrames)), L(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : L(b, "vqu", "1")
    };
    var eB = function(a) {
        this.g = a
    };
    eB.prototype.toString = function() {
        return this.g
    };
    var fB = new eB("video_mute"),
        gB = new eB("video_caption_visibility");
    var hB = function(a) {
        Q.call(this);
        this.B = 1;
        this.l = [];
        this.A = 0;
        this.g = [];
        this.j = {};
        this.F = !!a
    };
    db(hB, Q);
    var iB = function(a, b, c) {
            var d = gB.toString(),
                e = a.j[d];
            e || (e = a.j[d] = []);
            var f = a.B;
            a.g[f] = d;
            a.g[f + 1] = b;
            a.g[f + 2] = c;
            a.B = f + 3;
            e.push(f)
        },
        jB = function(a, b, c) {
            var d = a.j[gB.toString()];
            if (d) {
                var e = a.g;
                (d = d.find(function(f) {
                    return e[f + 1] == b && e[f + 2] == c
                })) && a.o(d)
            }
        };
    hB.prototype.o = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.j[b];
            0 != this.A ? (this.l.push(a), this.g[a + 1] = function() {}) : (c && $b(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    hB.prototype.C = function(a, b) {
        var c = this.j[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.F)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    kB(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.A++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.Ca(); e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.A--, 0 < this.l.length && 0 == this.A)
                            for (; c = this.l.pop();) this.o(c)
                    }
                }
        }
    };
    var kB = function(a, b, c) {
        Xs(function() {
            a.apply(b, c)
        })
    };
    hB.prototype.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.o, this), delete this.j[a])
        } else this.g.length = 0, this.j = {}
    };
    hB.prototype.L = function() {
        hB.Fa.L.call(this);
        this.clear();
        this.l.length = 0
    };
    var lB = function(a) {
        Q.call(this);
        this.g = new hB(a);
        go(this, this.g)
    };
    db(lB, Q);
    lB.prototype.clear = function(a) {
        this.g.clear(void 0 !== a ? a.toString() : void 0)
    };
    var mB = function(a) {
        a = void 0 === a ? null : a;
        Q.call(this);
        this.g = new iy(this);
        go(this, this.g);
        this.xb = a
    };
    w(mB, Q);
    var nB = function(a, b, c) {
        a.xb && (iB(a.xb.g, b, c), fo(a, function() {
            jB(a.xb.g, b, c)
        }))
    };
    var oB = function(a, b) {
        mB.call(this, b);
        nB(this, function(c) {
            c ? a.g.mode = "showing" : a.ib()
        }, this)
    };
    w(oB, mB);
    var pB = function() {
        R.call(this);
        this.l = new iy(this);
        go(this, this.l)
    };
    w(pB, R);
    var rB = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        pB.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = ji("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.j = document.createElement("style");
        a.appendChild(this.j);
        this.g = a.textTracks[0];
        qB(this);
        c ? this.g.mode = "showing" : this.ib()
    };
    w(rB, pB);
    var qB = function(a) {
        var b = a.g;
        document.addEventListener("updateCueStyles", function(c) {
            a.j.textContent = c.detail.style
        }, !0);
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    rB.prototype.ib = function() {
        this.g.mode = "hidden"
    };

    function sB(a, b) {
        if ("undefined" !== typeof ReportingObserver) {
            var c = function(e) {
                    e = u(e);
                    for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f)
                },
                d = new ReportingObserver(c, {
                    buffered: !0
                });
            x.addEventListener("pagehide", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }

    function tB(a) {
        a = void 0 === a ? null : a;
        sB(function(b) {
            return b.body && "HeavyAdIntervention" === b.body.id
        }, function(b) {
            var c = b.body.message,
                d = K.getInstance();
            L(d, "ham", c);
            c.includes("CPU") ? L(d, "hacpu", "true") : c.includes("network") && L(d, "habytes", "true");
            a && a(b)
        })
    };
    var uB = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "),
        vB = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disablePictureInPicture disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play requestPictureInPicture setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "),
        wB = {
            childList: !0
        },
        xB = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}.toString()),
        yB = HTMLElement;
    xB && (yB = function() {
        var a = Object.getPrototypeOf(this).constructor;
        return x.Reflect.construct(HTMLElement, [], a)
    }, Object.setPrototypeOf(yB, HTMLElement), Object.setPrototypeOf(yB.prototype, HTMLElement.prototype));
    var zB = function(a) {
            if (null !== a) {
                a = u(a);
                for (var b = a.next(); !b.done; b = a.next())
                    if (b = b.value, b.nodeName === "TRACK".toString()) return b
            }
            return null
        },
        AB = function(a, b) {
            this.code = a;
            this.message = void 0 === b ? "" : b
        },
        BB = function(a) {
            AB.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a)
        };
    w(BB, AB);
    var FB = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = yB.call(this) || this;
        L(K.getInstance(), "ulv", "1");
        c.Mg = b;
        c.sa = null;
        c.Ce = null;
        c.fe = null;
        c.V = ji("VIDEO");
        CB(c);
        c.xb = a || new lB;
        DB(c);
        c.rc = null;
        EB(c);
        c.attachShadow({
            mode: "open"
        });
        c.shadowRoot.appendChild(c.V);
        tB(function() {
            L(K.getInstance(), "has", c.src || c.bb);
            L(K.getInstance(), "hat", String(c.V.currentTime))
        });
        c.Uc = !1;
        c.Ge = !1;
        c.Zb = null;
        c.bd = null;
        c.Ng = !1;
        c.Me = !1;
        c.Ci = null;
        c.Nb = null;
        return c
    };
    w(FB, yB);
    var GB = function(a) {
        a.V.load();
        M(hl) && a.V.dispatchEvent(new Event("canplaythrough"))
    };
    FB.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
            case "src":
                HB(this, c);
                break;
            case "demuxedaudiosrc":
            case "demuxedvideosrc":
                IB(this);
                break;
            case "muted":
                this.V[a] = "" === c ? !0 : !!c;
                JB(this, a, c);
                break;
            default:
                JB(this, a, c)
        }
    };
    FB.prototype.Wc = function(a) {
        this.Nb = a;
        var b;
        null == (b = this.sa) || b.Wc(a)
    };
    var JB = function(a, b, c) {
            c !== a.V.getAttribute(b) && (null === c ? a.V.removeAttribute(b) : a.V.setAttribute(b, c))
        },
        KB = function(a) {
            a.sa && (a.V.removeEventListener("timeupdate", a.Zb), a.sa.X(), a.sa = null)
        },
        LB = function(a, b) {
            a.fe = b;
            a.V.dispatchEvent(new Event("error"))
        },
        CB = function(a) {
            MB(a);
            NB(a);
            a.V.addEventListener("loadedmetadata", function() {
                a.bd = Lx(a);
                a.bd.then(function(b) {
                    var c = a.V.videoWidth;
                    var d = a.V.videoHeight,
                        e = b.width,
                        f = b.height;
                    0 < c && 0 < d && 0 < e && 0 < f ? (b = b.width / b.height, c /= d, c = .97 <= Math.min(c, b) / Math.max(c,
                        b) ? "cover" : "contain") : c = null;
                    null !== c && an(a.V, {
                        "object-fit": c
                    })
                })
            });
            a.V.addEventListener("play", function() {
                a.Ge || (bB(a.V, "first_play"), a.Ge = !0)
            });
            a.V.addEventListener("pause", function() {
                a.Uc || (bB(a.V, "first_pause"), dB(a.V), a.Uc = !0)
            });
            Bs(x, "pagehide", function() {
                a.Uc || (bB(a.V, "first_pause"), dB(a.V), a.Uc = !0)
            });
            a.V.addEventListener("stalled", function() {
                L(K.getInstance(), "ves", "1")
            });
            (new Tx(a.V)).O("playbackStalled", function() {
                return L(K.getInstance(), "pbs", "1")
            });
            a.V.addEventListener("media_source_error",
                function(b) {
                    KB(a);
                    b = b.detail;
                    LB(a, new AB(b.code, b.message))
                });
            OB(a)
        },
        EB = function(a) {
            var b = zB(a.childNodes);
            b && PB(a, b);
            null === a.rc && QB(a)
        },
        QB = function(a) {
            if (x.MutationObserver) {
                var b = new MutationObserver(function(c) {
                    c = u(c);
                    for (var d = c.next(); !d.done; d = c.next())
                        if (d = d.value, "childList" === d.type && (d = zB(d.addedNodes))) {
                            PB(a, d);
                            b.disconnect();
                            break
                        }
                });
                b.observe(a, wB)
            }
        },
        DB = function(a) {
            a.V.addEventListener("volumechange", function() {
                a.xb.g.C(fB.toString(), a.V.muted);
                a.Mg || a.xb.g.C(gB.toString(), a.V.muted)
            })
        },
        PB = function(a, b) {
            if (null === a.rc && b.hasAttribute("src")) {
                var c = b.getAttribute("src");
                a.rc = new rB(a.V, c, b.hasAttribute("default"));
                new oB(a.rc, a.xb);
                c.includes("kind=asr") && L(K.getInstance(), "act", "1")
            }
        },
        HB = function(a, b) {
            if (b !== a.Ce) {
                a.Ce = b;
                a.Ng && b && xx(b) && (b = yx(b));
                var c = b ? hz(b) : null,
                    d = !!c && KA(c);
                L(K.getInstance(), "umsem", d ? "1" : "0");
                d ? (b = vw(cB, b, iz(c), 1E3 * $y[c], null), a.sa = vw(SA, [b]), a.Nb && a.sa.Wc(a.Nb), a.sa.O("media_source_error", function(e) {
                        e = jz("media_source_error", e.detail);
                        a.V.dispatchEvent(e)
                    }),
                    a.Zb = function() {
                        var e = a.sa;
                        e.G = 1E3 * a.V.currentTime;
                        UA(e)
                    }, a.V.addEventListener("timeupdate", a.Zb), JB(a, "src", VA(a.sa))) : (KB(a), JB(a, "src", b));
                a.Me || GB(a)
            }
        },
        IB = function(a) {
            a.src && LB(a, new AB(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
            if (!a.rb && !a.bb && a.sa) KB(a), JB(a, "src", null), GB(a);
            else if (a.rb && a.bb) {
                var b = hz(xx(a.bb) ? yx(a.bb) : a.bb),
                    c = hz(xx(a.rb) ? yx(a.rb) : a.rb);
                if (b && KA(b))
                    if (c && KA(c)) {
                        var d = !!b && KA(b) && !!c && KA(c);
                        L(K.getInstance(), "umsed", d ? "1" : "0");
                        b = vw(cB,
                            a.bb, iz(b), -1, null);
                        c = vw(cB, a.rb, iz(c), -1, null);
                        a.sa = vw(SA, [b, c]);
                        a.Nb && a.sa.Wc(a.Nb);
                        a.sa.O("media_source_error", function(e) {
                            e = jz("media_source_error", e.detail);
                            a.V.dispatchEvent(e)
                        });
                        a.Zb = function() {
                            var e = a.sa;
                            e.G = 1E3 * a.V.currentTime;
                            UA(e)
                        };
                        a.V.addEventListener("timeupdate", a.Zb);
                        JB(a, "src", VA(a.sa));
                        a.Me || GB(a)
                    } else LB(a, new BB('Audio itag "' + c + '" not supported.'));
                else LB(a, new BB('Video itag "' + b + '" not supported.'))
            }
        },
        MB = function(a) {
            for (var b = u(vB), c = b.next(), d = {}; !c.done; d = {
                    Xa: void 0,
                    getValue: void 0
                },
                c = b.next()) d.Xa = c.value, d.Xa in a.V && ("function" === typeof a.V[d.Xa] ? (d.getValue = a.V[d.Xa].bind(a.V), Object.defineProperty(a, d.Xa, {
                set: function(e) {
                    return function(f) {
                        a.V[e.Xa] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return e.getValue
                    }
                }(d)
            })) : Object.defineProperty(a, d.Xa, {
                set: function(e) {
                    return function(f) {
                        a.V[e.Xa] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return a.V[e.Xa]
                    }
                }(d)
            }))
        },
        NB = function(a) {
            Object.defineProperty(a, "error", {
                set: function() {},
                get: function() {
                    return a.V.error ? a.V.error : a.fe
                }
            })
        },
        OB =
        function(a) {
            a.V.style.width = hn();
            a.V.style.height = hn()
        };
    FB.prototype.disconnectedCallback = function() {
        this.bd && Mx(this.bd);
        yB.prototype.disconnectedCallback && yB.prototype.disconnectedCallback.call(this)
    };
    ea.Object.defineProperties(FB.prototype, {
        rb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        bb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    ea.Object.defineProperties(FB, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return uB
            }
        }
    });
    x.customElements && (x.customElements.get("lima-video") || x.customElements.define("lima-video", FB));

    function RB() {
        var a = vw(uA);
        a.initialize().then(function() {
            var b = jz("initialized");
            a.dispatchEvent(b)
        });
        return a
    }
    var TB = function(a, b, c, d, e) {
        Q.call(this);
        this.G = a;
        this.j = c;
        this.A = e;
        this.aa = this.U = this.Ab = this.F = this.l = this.Pa = 0;
        this.C = [];
        this.N = !1;
        this.ba = this.da = this.ha = null;
        this.Ga = !1;
        this.Bb = this.J = this.o = this.Ha = this.Oa = null;
        this.xa = !1;
        this.H = new S(b.url);
        this.Ia = b.Ia;
        this.ka = d;
        (this.P = b.g) || this.H.g.remove("alr");
        L(K.getInstance(), "sl_dv" + this.A, (null !== this.P).toString());
        this.W = !this.P;
        this.g = new XMLHttpRequest;
        this.Y = .1;
        if (this.B = xz() && !xx(this.H)) this.o = RB(), go(this, this.o);
        SB(this)
    };
    w(TB, Q);
    var UB = function(a, b) {
            b = jz("media_source_error", b);
            a.G.dispatchEvent(b)
        },
        VB = function(a, b) {
            UB(a, {
                code: 1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                message: b
            })
        },
        SB = function(a) {
            a.ha = function() {
                WB(a);
                if (a.W) {
                    var b = a.g.responseText;
                    a.N = !b || b.length < a.Ia;
                    a.U = 0;
                    Fj("sl_cc" + a.A + "_" + a.l);
                    a.F++;
                    XB(a)
                }
            };
            a.da = function() {
                WB(a)
            };
            a.ba = function() {
                Fj("sl_ec" + a.A + "_" + a.l);
                VB(a, "Failed to load chunk " + a.l + " for stream " + a.A)
            };
            a.g.addEventListener("load", a.ha);
            a.g.addEventListener("progress",
                a.da);
            a.g.addEventListener("error", a.ba);
            a.j.addEventListener("updateend", function() {
                a.j.buffered.length && (a.Ab = a.j.buffered.end(0), a.B ? a.xa && !a.j.updating && a.l === a.F && (Fj("sl_lc" + a.A), a.ka()) : a.N && !a.j.updating && a.l === a.F && (Fj("sl_lc" + a.A), a.ka()));
                !a.Ga && 1 < a.G.buffered.length && (L(K.getInstance(), "dbr", "1"), a.Ga = !0)
            });
            a.j.addEventListener("update", function() {
                a.C.length && !a.j.updating && a.j.appendBuffer(a.C.shift())
            });
            a.j.addEventListener("error", function() {
                Fj("msb_err" + a.A);
                UB(a, {
                    code: MediaError.MEDIA_ERR_DECODE,
                    message: "Error on SourceBuffer " + a.A
                })
            });
            a.B ? (a.o.Sa() ? YB(a) : a.Oa = Bs(a.o, "initialized", function() {
                YB(a)
            }), a.Ha = Bs(a.o, "get_video_succeeded", function() {
                XB(a)
            })) : YB(a)
        },
        $B = function(a) {
            Fj("sl_rc" + a.A + "_" + a.l);
            var b = ZB(a);
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.B && (a.J = null, a.Bb = b)
        },
        WB = function(a) {
            if (400 <= a.g.status) VB(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.A);
            else {
                if (!a.W) {
                    var b = a.g.getResponseHeader("content-type");
                    if (b && 0 <= b.indexOf("text/plain")) {
                        a.g.readyState === XMLHttpRequest.DONE && (a.H = new S(a.g.response), a.l = 0, a.F = 0, a.Pa++, YB(a));
                        return
                    }
                    a.W = !0;
                    Fj("sl_redc" + a.A);
                    L(K.getInstance(), "sl_tr" + a.A, a.Pa.toString())
                }
                a.H.g.remove("alr");
                if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) b = aC(a, a.U), a.U = a.g.response.length, a.aa += b.byteLength, bC(a, b);
                if (a.B && a.g.readyState === XMLHttpRequest.DONE && (b = aC(a, 0), 0 < b.byteLength)) {
                    var c = a.g.responseText;
                    a.xa = !c || c.length < a.Ia;
                    a.o.jc(b, new S(a.Bb),
                        0, a.xa)
                }
            }
        },
        bC = function(a, b) {
            0 < b.byteLength && (a.j.updating || a.C.length ? a.C.push(b) : a.j.appendBuffer(b))
        },
        aC = function(a, b) {
            a = a.g.response;
            for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
            return c.buffer
        },
        XB = function(a) {
            var b = Ax; - 1 !== b && b < a.aa + a.Ia ? (a.G.pause(), Ax = -1, b = !1) : (b = a.F === a.l && !a.j.updating && !a.C.length, b = a.B ? !a.xa && b && a.G.currentTime >= a.Y : !a.N && b && a.G.currentTime >= a.Y);
            b && (a.Y = a.Ab + .1, YB(a))
        },
        ZB = function(a) {
            var b = a.B && a.J ? a.J + 1 : a.l * a.Ia;
            return ix(a.H, "range",
                b + "-" + (b + a.Ia - 1)).toString()
        },
        YB = function(a) {
            if (a.B) {
                var b = new S(ZB(a));
                a.o.Sb(b).then(function(c) {
                    c ? (a.J = Number(c.vc), a.xa = c.xa, bC(a, c.video), c = jz("get_video_succeeded"), a.o.dispatchEvent(c), a.F++) : $B(a);
                    a.l++
                })
            } else $B(a), a.l++
        };
    TB.prototype.L = function() {
        this.B && this.o.Sa() && this.o.close();
        this.g.removeEventListener("load", this.ha);
        this.g.removeEventListener("progress", this.da);
        this.g.removeEventListener("error", this.ba);
        Js(this.Oa);
        Js(this.Ha);
        Q.prototype.L.call(this)
    };
    var dC = function(a, b) {
        Q.call(this);
        var c = this;
        this.o = a;
        this.G = b;
        this.g = new MediaSource;
        this.F = [];
        this.l = [];
        this.j = this.A = null;
        this.B = !1;
        this.C = function() {
            cC(c)
        };
        this.g.addEventListener("sourceopen", this.C)
    };
    w(dC, Q);
    var eC = function(a) {
            a.A && a.o.removeEventListener("timeupdate", a.A)
        },
        cC = function(a) {
            Fj("msmsw_oso");
            a.A = function() {
                if (!a.B)
                    for (var e = u(a.l), f = e.next(); !f.done; f = e.next()) XB(f.value)
            };
            a.o.addEventListener("timeupdate", a.A);
            for (var b = 0; b < a.G.length; b++) {
                var c = a.G[b];
                L(K.getInstance(), "msmsw_mime" + b, c.mimeType);
                L(K.getInstance(), "msmsw_cs" + b, c.Ia.toString());
                var d = a.g.addSourceBuffer(c.mimeType);
                d ? (a.F.push(d), c = vw(TB, a.o, c, d, function() {
                    a: if (!a.B) {
                        for (var e = u(a.l), f = e.next(); !f.done; f = e.next())
                            if (f = f.value,
                                f.B ? !f.xa || f.j.updating || f.C.length : !f.N || f.j.updating || f.C.length) break a;
                        a.g.endOfStream();
                        a.B = !0;
                        eC(a)
                    }
                }, b), a.l.push(c)) : Fj("msmsw_sbf" + b)
            }
            L(K.getInstance(), "msmsw_ns", a.F.length.toString())
        };
    dC.prototype.L = function() {
        this.j && window.URL.revokeObjectURL(this.j);
        for (var a = u(this.l), b = a.next(); !b.done; b = a.next()) b.value.X();
        eC(this);
        this.g.removeEventListener("sourceopen", this.C);
        Q.prototype.L.call(this)
    };
    RegExp.prototype.hasOwnProperty("sticky");
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var fC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        gC = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = fC[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var iC = function(a) {
        S.call(this, a);
        this.C = new Map;
        a = this.l;
        var b = a.indexOf(";"),
            c = null;
        0 <= b ? (this.l = a.substring(0, b), c = a.substring(b + 1)) : this.l = a;
        hC(this, c)
    };
    w(iC, S);
    iC.prototype.toString = function() {
        return jC(this, S.prototype.toString.call(this))
    };
    iC.prototype.F = function() {
        return ""
    };
    var hC = function(a, b) {
            pb(Th(b)) || b.split(";").forEach(function(c) {
                var d = c.indexOf("=");
                if (!(0 >= d)) {
                    var e = Qh(c.substring(0, d));
                    c = Qh(c.substring(d + 1));
                    d = a.C.get(e);
                    null != d ? d.includes(c) || d.push(c) : d = [Th(c)];
                    a.C.set(e, d)
                }
            }, a)
        },
        kC = function(a) {
            if (pb(Th("ord"))) return null;
            a = a.C.get("ord");
            return null != a ? a : null
        },
        lC = function(a, b) {
            pb(Th("ord")) || (b = b.map(Th), a.C.set("ord", b))
        },
        jC = function(a, b) {
            b = [Th(b)];
            b.push.apply(b, ia(mC(a)));
            return b.join(";")
        },
        mC = function(a) {
            var b = kC(a);
            null == b ? b = [Th(Date.now())] : pb(Th("ord")) ||
                a.C.delete("ord");
            var c = [];
            a.C.forEach(function(d, e) {
                d.forEach(function(f) {
                    c.push(e + "=" + f)
                })
            });
            c.push("ord=" + b[0]);
            lC(a, b);
            return c
        };
    iC.prototype.G = function() {
        return new iC(this.toString())
    };

    function nC(a) {
        var b = new iC(a);
        a = b.j;
        b = jC(b, b.l);
        return !ob(a, ".g.doubleclick.net") && (ob(a, "doubleclick.net") || ob(a, "pagead2.googlesyndication.com")) && Zx("/(ad|pfad)[x|i|j]?/", b)
    }

    function oC(a) {
        return "bid.g.doubleclick.net" == (new S(a)).j
    }

    function pC(a) {
        a = new S(a);
        var b = a.l;
        return ob(a.j, "googleads.g.doubleclick.net") && Zx("/pagead/(live/)?ads", b)
    }

    function qC(a) {
        a = new S(a);
        var b = a.l;
        return ob(a.j, "doubleclick.net") && Zx("/gampad/(live/)?ads", b)
    }

    function rC(a) {
        a = new S(a);
        var b = a.l;
        return "ad.doubleclick.net" === a.j && Zx("/dv3/adv", b)
    };
    var T = {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        OVERLAY_AD_LOADING_FAILED: 502,
        VAST_NONLINEAR_ASSET_MISMATCH: 503,
        COMPANION_REQUIRED_ERROR: 602,
        COMPANION_AD_LOADING_FAILED: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        PROTECTED_AUDIENCE_API_ERROR: 1014,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        INVALID_ARGUMENTS: 1101,
        NATIVE_MESSAGE_ERROR: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        bi: 2002
    };
    T[-1] = "DEPRECATED_ERROR_CODE";
    T[100] = "VAST_MALFORMED_RESPONSE";
    T[101] = "VAST_SCHEMA_VALIDATION_ERROR";
    T[102] = "VAST_UNSUPPORTED_VERSION";
    T[200] = "VAST_TRAFFICKING_ERROR";
    T[201] = "VAST_UNEXPECTED_LINEARITY";
    T[202] = "VAST_UNEXPECTED_DURATION_ERROR";
    T[300] = "VAST_WRAPPER_ERROR";
    T[301] = "VAST_LOAD_TIMEOUT";
    T[302] = "VAST_TOO_MANY_REDIRECTS";
    T[303] = "VAST_NO_ADS_AFTER_WRAPPER";
    T[400] = "VIDEO_PLAY_ERROR";
    T[402] = "VAST_MEDIA_LOAD_TIMEOUT";
    T[403] = "VAST_LINEAR_ASSET_MISMATCH";
    T[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
    T[500] = "OVERLAY_AD_PLAYING_FAILED";
    T[501] = "NONLINEAR_DIMENSIONS_ERROR";
    T[502] = "OVERLAY_AD_LOADING_FAILED";
    T[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
    T[602] = "COMPANION_REQUIRED_ERROR";
    T[603] = "COMPANION_AD_LOADING_FAILED";
    T[900] = "UNKNOWN_ERROR";
    T[901] = "VPAID_ERROR";
    T[1005] = "FAILED_TO_REQUEST_ADS";
    T[1007] = "VAST_ASSET_NOT_FOUND";
    T[1009] = "VAST_EMPTY_RESPONSE";
    T[1010] = "UNKNOWN_AD_RESPONSE";
    T[1011] = "UNSUPPORTED_LOCALE";
    T[1012] = "ADS_REQUEST_NETWORK_ERROR";
    T[1013] = "INVALID_AD_TAG";
    T[1014] = "PROTECTED_AUDIENCE_API_ERROR";
    T[1020] = "STREAM_INITIALIZATION_FAILED";
    T[1021] = "ASSET_FALLBACK_FAILED";
    T[1101] = "INVALID_ARGUMENTS";
    T[1204] = "NATIVE_MESSAGE_ERROR";
    T[1205] = "AUTOPLAY_DISALLOWED";
    T[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
    T[2002] = "SUPPORTED_ADS_NOT_FOUND";
    var sC = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.type = a;
        this.errorMessage = b;
        this.errorCode = c;
        this.ad = this.g = null
    };
    w(sC, Error);
    l = sC.prototype;
    l.getAd = function() {
        return this.ad
    };
    l.getInnerError = function() {
        return this.g
    };
    l.getMessage = function() {
        return this.errorMessage
    };
    l.getErrorCode = function() {
        return this.errorCode
    };
    l.getVastErrorCode = function() {
        return 1E3 > this.errorCode ? this.errorCode : 900
    };
    l.getType = function() {
        return this.type
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    };
    var tC = ha(["https://imasdk.googleapis.com/js/sdkloader/car.js"]),
        uC = Ih(tC);

    function vC(a) {
        return a ? pC(a) ? "adsense" : oC(a) ? "dbm" : nC(a) ? "dcm" : rC(a) ? "dv3" : qC(a) ? "xfp" : "thirdparty" : ""
    }

    function wC(a) {
        if ("" === a) return null;
        a = new S(a);
        var b;
        b = (b = a.g.get("slotname") || a.g.get("iu")) ? (b = /\/(\d+)(?:,\d+){0,2}\//.exec(b)) && 2 === b.length ? b[1] : null : null;
        if (!b) {
            var c;
            b = (a = null != (c = a.g.get("client")) ? c : "") ? a : null
        }
        return b
    }

    function xC(a, b) {
        try {
            var c = new URL(a);
            return c.searchParams.get("slotname") || c.searchParams.get("iu") || ""
        } catch (d) {
            null == b || b(d)
        }
        return ""
    };
    var yC = function(a) {
        var b = {};
        b = (b.IABUSPrivacy_String = "uspString", b.IABTCF_gdprApplies = "gdprApplies", b.IABTCF_TCString = "tcString", b.IABTCF_AddtlConsent = "addtlConsent", b.IABGPP_HDR_GppString = "gppString", b.IABGPP_GppSID = "gppSid", b);
        for (var c in b) null != a[c] && (a[b[c]] = a[c], delete a[c]);
        this.we = !!a.isGdprLoader;
        c = a.uspString;
        this.uspString = "string" === typeof c ? c : "";
        c = a.gdprApplies;
        this.j = "boolean" === typeof c ? c ? "1" : "0" : "number" !== typeof c || 1 !== c && 0 !== c ? "string" !== typeof c || "1" !== c && "0" !== c ? "" : "1" === c ? "1" :
            "0" : 1 === c ? "1" : "0";
        c = a.tcString;
        this.g = "string" === typeof c ? c : "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
        a = a.gppString;
        this.gppString = "string" === typeof a ? a : ""
    };
    var zC = function(a) {
            this.g = a
        },
        AC = function(a, b) {
            return gh(a.g, b) && (a = a.g[b], "boolean" === typeof a) ? a : !1
        },
        BC = function(a) {
            return gh(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, "number" === typeof a) ? a : NaN
        },
        CC = function(a) {
            if (gh(a.g, "forceExperimentIds")) {
                a = a.g.forceExperimentIds;
                var b = [],
                    c = 0;
                Array.isArray(a) && a.forEach(function(d) {
                    "number" === typeof d && (b[c++] = d)
                });
                return b
            }
            return null
        };
    var U = function() {
            this.G = "always";
            this.U = 4;
            this.ppid = null;
            this.o = 1;
            this.g = 0;
            this.A = !0;
            this.locale = "en";
            this.l = null;
            this.j = !1;
            this.playerVersion = this.playerType = "";
            this.C = null;
            this.F = this.M = -1;
            this.B = "";
            this.N = !1;
            this.J = !0;
            this.sessionId = gC();
            this.P = {};
            this.I = "";
            this.H = 0;
            try {
                this.W = gm()[0]
            } catch (a) {}
        },
        DC = function(a) {
            a = Th(a);
            pb(a) || (a = a.substring(0, 20));
            return a
        };
    l = U.prototype;
    l.setCompanionBackfill = function(a) {
        this.G = a
    };
    l.getCompanionBackfill = function() {
        return this.G
    };
    l.setNumRedirects = function(a) {
        this.U = a
    };
    l.getNumRedirects = function() {
        return this.U
    };
    l.setPpid = function(a) {
        this.ppid = a
    };
    l.getPpid = function() {
        return this.ppid
    };
    l.setVpaidAllowed = function(a) {
        "boolean" === typeof a && (this.o = a ? 1 : 0)
    };
    l.setVpaidMode = function(a) {
        this.o = a
    };
    l.Sf = function() {
        return this.o
    };
    l.setAutoPlayAdBreaks = function(a) {
        this.A = a
    };
    l.dg = function() {
        return this.A
    };
    l.Ag = function(a) {
        this.j = a
    };
    l.Rf = function() {
        return this.j
    };
    l.setLocale = function(a) {
        if (a = ay(a)) this.locale = a
    };
    l.getLocale = function() {
        return this.locale
    };
    l.setPlayerType = function(a) {
        this.playerType = DC(a)
    };
    l.getPlayerType = function() {
        return this.playerType
    };
    l.setPlayerVersion = function(a) {
        this.playerVersion = DC(a)
    };
    l.getPlayerVersion = function() {
        return this.playerVersion
    };
    var EC = function(a) {
        if (null == a.C) {
            var b = {};
            var c = (new S(I().location.href)).g;
            if (nx(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.C = new zC(b)
        }
        return a.C
    };
    l = U.prototype;
    l.Bg = function(a) {
        this.M = a
    };
    l.Cg = function(a) {
        this.F = a
    };
    l.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.N = a
    };
    l.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.N
    };
    l.isCookiesEnabled = function() {
        return this.J
    };
    l.setCookiesEnabled = function(a) {
        null != a && (this.J = a)
    };
    l.setSessionId = function(a) {
        this.sessionId = a
    };
    l.zg = function() {};
    l.Qf = function() {
        return !0
    };
    l.setFeatureFlags = function(a) {
        this.P = a
    };
    l.getFeatureFlags = function() {
        return this.P
    };
    var FC = function(a, b) {
        b = void 0 === b ? null : b;
        var c = {};
        null != b && (c.activeViewPushUpdates = b);
        c.activityMonitorMode = a.g;
        c.adsToken = a.B;
        c.autoPlayAdBreaks = a.A;
        c.companionBackfill = a.getCompanionBackfill();
        c.cookiesEnabled = a.isCookiesEnabled();
        c.disableCustomPlaybackForIOS10Plus = a.getDisableCustomPlaybackForIOS10Plus();
        c.engagementDetection = !0;
        c.isFunctionalTest = !1;
        c.isVpaidAdapter = a.j;
        c["1pJar"] = "";
        c.numRedirects = a.getNumRedirects();
        c.pageCorrelator = a.M;
        c.persistentStateCorrelator = Vi();
        c.playerType = a.getPlayerType();
        c.playerVersion = a.getPlayerVersion();
        c.ppid = a.getPpid();
        c.privacyControls = "";
        c.reportMediaRequests = !1;
        c.sessionId = a.sessionId;
        c.streamCorrelator = a.F;
        c.testingConfig = EC(a).g;
        c.urlSignals = a.W;
        c.vpaidMode = a.o;
        c.featureFlags = a.getFeatureFlags();
        c.cookieDeprecationLabel = a.I;
        c.cookieDeprecationLabelStatus = a.H;
        return c
    };
    U.prototype.getFeatureFlags = U.prototype.getFeatureFlags;
    U.prototype.setFeatureFlags = U.prototype.setFeatureFlags;
    U.prototype.getDisableFlashAds = U.prototype.Qf;
    U.prototype.setDisableFlashAds = U.prototype.zg;
    U.prototype.setSessionId = U.prototype.setSessionId;
    U.prototype.setCookiesEnabled = U.prototype.setCookiesEnabled;
    U.prototype.isCookiesEnabled = U.prototype.isCookiesEnabled;
    U.prototype.getDisableCustomPlaybackForIOS10Plus = U.prototype.getDisableCustomPlaybackForIOS10Plus;
    U.prototype.setDisableCustomPlaybackForIOS10Plus = U.prototype.setDisableCustomPlaybackForIOS10Plus;
    U.prototype.setStreamCorrelator = U.prototype.Cg;
    U.prototype.setPageCorrelator = U.prototype.Bg;
    U.prototype.getPlayerVersion = U.prototype.getPlayerVersion;
    U.prototype.setPlayerVersion = U.prototype.setPlayerVersion;
    U.prototype.getPlayerType = U.prototype.getPlayerType;
    U.prototype.setPlayerType = U.prototype.setPlayerType;
    U.prototype.getLocale = U.prototype.getLocale;
    U.prototype.setLocale = U.prototype.setLocale;
    U.prototype.getIsVpaidAdapter = U.prototype.Rf;
    U.prototype.setIsVpaidAdapter = U.prototype.Ag;
    U.prototype.isAutoPlayAdBreaks = U.prototype.dg;
    U.prototype.setAutoPlayAdBreaks = U.prototype.setAutoPlayAdBreaks;
    U.prototype.getVpaidMode = U.prototype.Sf;
    U.prototype.setVpaidMode = U.prototype.setVpaidMode;
    U.prototype.setVpaidAllowed = U.prototype.setVpaidAllowed;
    U.prototype.getPpid = U.prototype.getPpid;
    U.prototype.setPpid = U.prototype.setPpid;
    U.prototype.getNumRedirects = U.prototype.getNumRedirects;
    U.prototype.setNumRedirects = U.prototype.setNumRedirects;
    U.prototype.getCompanionBackfill = U.prototype.getCompanionBackfill;
    U.prototype.setCompanionBackfill = U.prototype.setCompanionBackfill;
    var GC = new U;
    var HC = function(a) {
        this.K = B(a)
    };
    w(HC, F);
    HC.oa = [10];

    function IC(a) {
        var b = {};
        (new S(a)).g.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    var JC = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? {} : b;
            var c = {};
            a = u(Object.entries(a));
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = u(d.value);
                d = e.next().value;
                e = e.next().value;
                null != e && (c[d] = String(e))
            }
            this.g = c;
            this.j = new yC(b)
        },
        KC = function(a, b) {
            if (!(pC(a) || nC(a) || qC(a) || oC(a) || rC(a))) {
                var c = new S(a),
                    d = c.l;
                "pubads.g.doubleclick.net" === c.j && (Zx("/ssai/", d) || Zx("/ondemand/", d))
            }
            return new JC(IC(a), b)
        },
        NC = function(a) {
            var b = a.j.g;
            var c = LC(a, "gdpr_consent");
            b = b && "tcunavailable" !== b ? b : "tcunavailable" ===
                b ? c || b : c || "";
            if ("tcunavailable" === b) return null;
            var d;
            a = MC(a);
            if ((c = iw(b)) && b) {
                var e = yf(c, Av, 1);
                c = yf(c, uv, 2) || new uv;
                var f = Jf(e, 9),
                    g = Jf(e, 4),
                    h = Jf(e, 5),
                    k = If(e, 10),
                    m = If(e, 11),
                    n = E(e, 16),
                    p = If(e, 15),
                    q = {
                        consents: jw(mf(e, 13, ke), Wv),
                        legitimateInterests: jw(mf(e, 14, ke), Wv)
                    },
                    t = {
                        consents: jw(mf(e, 17, ne)),
                        legitimateInterests: jw(mf(e, 18, ne))
                    },
                    v = jw(mf(e, 12, ke), Xv),
                    y = Af(e, tv, 19);
                e = {};
                y = u(y);
                for (var ca = y.next(); !ca.done; ca = y.next()) {
                    ca = ca.value;
                    var X = Mf(ca, 1);
                    e[X] = e[X] || {};
                    var pa = mf(ca, 3, ne);
                    pa = u(pa);
                    for (var ya = pa.next(); !ya.done; ya =
                        pa.next()) e[X][ya.value] = Mf(ca, 2)
                }
                b = {
                    tcString: b,
                    tcfPolicyVersion: f,
                    gdprApplies: a,
                    cmpId: g,
                    cmpVersion: h,
                    isServiceSpecific: k,
                    useNonStandardStacks: m,
                    publisherCC: n,
                    purposeOneTreatment: p,
                    purpose: q,
                    vendor: t,
                    specialFeatureOptins: v,
                    publisher: {
                        restrictions: e,
                        consents: jw(mf(c, 1, ke), Wv),
                        legitimateInterests: jw(mf(c, 2, ke), Wv),
                        customPurposes: {
                            consents: jw(mf(c, 3, ne)),
                            legitimateInterests: jw(mf(c, 4, ne))
                        }
                    }
                }
            } else b = null;
            return null != (d = b) ? d : null
        },
        LC = function(a, b) {
            if (a.g.hasOwnProperty(b)) return a.g[b]
        },
        PC = function(a) {
            var b;
            if (!(b = OC(a))) {
                if (MC(a)) {
                    a = NC(a);
                    if (b = !!a) {
                        var c = void 0 === c ? {} : c;
                        b = Qw(a) ? !1 === a.gdprApplies ? !0 : "tcunavailable" === a.tcString ? !c.ue : (c.ue || void 0 !== a.gdprApplies || c.Ei) && (c.ue || "string" === typeof a.tcString && a.tcString.length) ? Tw(a, "1", 0) : !0 : !1
                    }
                    c = b
                } else c = !0;
                b = !c
            }
            return b
        },
        OC = function(a) {
            a = LC(a, "ltd");
            return "1" === a || "true" === a
        },
        MC = function(a) {
            var b = LC(a, "gdpr");
            a = a.j.j;
            b = ("1" === a || "0" === a ? a : void 0 !== b ? b : "").toLowerCase();
            return "true" === b || "1" === b
        },
        QC = function(a) {
            var b = new HC;
            var c = !PC(a);
            c = Of(b, 5, c);
            MC(a) ? (a = NC(a), a = !!a && !Vw(a)) : a = !1;
            Of(c, 8, a);
            return b
        };
    var RC = function(a) {
        this.K = B(a)
    };
    w(RC, F);
    RC.prototype.getVersion = function() {
        return E(this, 2)
    };
    var SC = function(a) {
        this.K = B(a)
    };
    w(SC, F);
    var TC = function(a, b) {
            return Pf(a, 2, b)
        },
        UC = function(a, b) {
            return Pf(a, 3, b)
        },
        VC = function(a, b) {
            return Pf(a, 4, b)
        },
        WC = function(a, b) {
            return Pf(a, 5, b)
        },
        XC = function(a, b) {
            return Pf(a, 9, b)
        },
        YC = function(a, b) {
            return Cf(a, 10, b)
        },
        ZC = function(a, b) {
            return Of(a, 11, b)
        },
        $C = function(a, b) {
            return Pf(a, 1, b)
        },
        aD = function(a, b) {
            return Of(a, 7, b)
        };
    SC.oa = [10, 6];
    var bD = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function cD(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function dD(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function eD() {
        var a = window;
        if (!dD(a)) return null;
        var b = cD(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(bD).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function fD(a) {
        var b;
        return ZC(YC(WC(TC($C(VC(aD(XC(UC(new SC, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new RC;
            d = Pf(d, 1, c.brand);
            return Pf(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function gD() {
        var a, b;
        return null != (b = null == (a = eD()) ? void 0 : a.then(function(c) {
            return fD(c)
        })) ? b : null
    };
    var iD = function() {
            this.appName = null;
            new JC;
            gC();
            this.deviceId = "";
            this.mg = null;
            this.g = Math.floor(4503599627370496 * Math.random());
            this.j = this.referrer = this.ppid = null;
            hD(this)
        },
        jD = function() {
            iD.getInstance();
            var a = "h.3.633.0";
            GC.j && (a += "/vpaid_adapter");
            return a
        },
        hD = function(a) {
            var b = gD();
            b && b.then(function(c) {
                if (null == c) c = null;
                else {
                    c = Rf(c);
                    for (var d = [], e = 0, f = 0; f < c.length; f++) {
                        var g = c.charCodeAt(f);
                        255 < g && (d[e++] = g & 255, g >>= 8);
                        d[e++] = g
                    }
                    c = Oc(d, 3)
                }
                a.j = c
            })
        };
    iD.getInstance = function() {
        return G(iD)
    };
    var lD = function(a) {
            a = void 0 === a ? !1 : a;
            var b = EC(GC);
            if (b && AC(b, "forceCustomPlayback") || GC.j) return !0;
            if (Qx() && a) return !1;
            a = a && (Qx() || Rx(10)) && GC.getDisableCustomPlaybackForIOS10Plus();
            return (uc || wc) && !a || tc && (!tc || !Px(Ox, 4)) || kD() ? !0 : !1
        },
        mD = function(a) {
            return null === a ? !1 : GC.j ? !0 : xc || Qx() ? Sx(a) ? Qx() || Rx(10) && GC.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : tc && (!tc || !Px(Ox, 4)) || kD() ? !0 : !1
        },
        nD = function() {
            var a = EC(GC);
            return a && AC(a, "disableOnScreenDetection") ? !1 : !zn()
        },
        kD = function() {
            return 1 === oD() ||
                2 === oD()
        },
        oD = function() {
            switch (iD.getInstance(), 0) {
                case 1:
                    return 3;
                case 2:
                    return 1
            }
            return (iD.getInstance(), iD.getInstance(), "tvos" === (iD.getInstance(), null)) ? 1 : An() ? 2 : 0
        };
    var pD = function(a, b) {
        return 0 == a.indexOf(b) ? a.substr(b.length) : null
    };

    function qD() {
        if (zn()) return window.location.href;
        var a = Wl(),
            b = a.j,
            c = a.g;
        a = a.l;
        var d = null;
        if (a) try {
            var e = jx(a.url),
                f = e.l,
                g = pD(f, "/v/");
            g || (g = pD(f, "/a/"));
            if (!g) throw Error("Can not extract standalone amp url.");
            var h = pD("/" + g, "/s/"),
                k = Zw(e.g);
            k.remove("amp_js_v");
            k.remove("amp_lite");
            var m = h ? jx("https://" + h) : jx("http://" + g);
            Yw(m, k);
            d = m.toString()
        } catch (n) {
            d = null
        }
        return d ? d : b && b.url ? b.url : c && c.url ? c.url : ""
    }

    function rD() {
        var a = Sl();
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.url && b.url.includes("amp=1")) return !0;
        return null != window.context ? (a = Number(window.context.ampcontextVersion), isNaN(a) ? !1 : 0 < Math.floor(a)) : null != Wl().l
    }

    function sD() {
        var a = I().location.ancestorOrigins;
        return a ? 0 < a.length ? [].concat(ia(a)).join(",") : "" : ""
    };

    function tD() {
        var a = I(),
            b = document;
        return new S(a.parent === a ? a.location.href : b.referrer)
    }

    function uD(a, b) {
        ix(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (0 >= c) return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
            ix(a, "url", d)
        } catch (g) {}
        return a.toString()
    };
    var V = {},
        vD = (V.creativeView = "creativeview", V.start = "start", V.midpoint = "midpoint", V.firstQuartile = "firstquartile", V.thirdQuartile = "thirdquartile", V.complete = "complete", V.mute = "mute", V.unmute = "unmute", V.pause = "pause", V.rewind = "rewind", V.resume = "resume", V.fullscreen = "fullscreen", V.exitFullscreen = "exitfullscreen", V.expand = "expand", V.collapse = "collapse", V.close = "close", V.acceptInvitation = "acceptinvitation", V.adCanPlay = "adCanPlay", V.adStarted = "adStarted", V.abandon = "abandon", V.acceptInvitationLinear = "acceptinvitationlinear",
            V.engagedView = "engagedview", V.instreamAdComplete = "instreamAdComplete", V.skipShown = "skipshown", V.skippableStateChanged = "skippableStateChanged", V.skip = "skip", V.progress = "progress", V.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", V.annotation_start = "annotation_start", V.annotation_click = "annotation_click", V.annotation_close = "annotation_close", V.cta_annotation_shown = "cta_annotation_shown", V.cta_annotation_clicked = "cta_annotation_clicked", V.cta_annotation_closed = "cta_annotation_closed", V.replay = "replay",
            V.stop = "stop", V.autoplayDisallowed = "autoplayDisallowed", V.error = "error", V.mediaLoadTimeout = "mediaLoadTimeout", V.linearChanged = "linearChanged", V.click = "click", V.contentPauseRequested = "contentPauseRequested", V.contentResumeRequested = "contentResumeRequested", V.discardAdBreak = "discardAdBreak", V.updateAdsRenderingSettings = "updateAdsRenderingSettings", V.durationChange = "durationChange", V.expandedChanged = "expandedChanged", V.autoClose = "autoClose", V.userClose = "userClose", V.userRecall = "userRecall", V.prefetched =
            "prefetched", V.loaded = "loaded", V.init = "init", V.allAdsCompleted = "allAdsCompleted", V.adMetadata = "adMetadata", V.adBreakReady = "adBreakReady", V.adBreakFetchError = "adBreakFetchError", V.log = "log", V.volumeChange = "volumeChange", V.companionBackfill = "companionBackfill", V.companionInitialized = "companionInitialized", V.companionImpression = "companionImpression", V.companionClick = "companionClick", V.impression = "impression", V.interaction = "interaction", V.adProgress = "adProgress", V.adBuffering = "adBuffering", V.trackingUrlPinged =
            "trackingUrlPinged", V.measurable_impression = "measurable_impression", V.custom_metric_viewable = "custom_metric_viewable", V.viewable_impression = "viewable_impression", V.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", V.audio_audible = "audio_audible", V.audio_measurable = "audio_measurable", V.overlay_resize = "overlay_resize", V.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", V.overlay_unviewable_impression = "overlay_unviewable_impression", V.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", V.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", V.externalActivityEvent = "externalActivityEvent", V.adEvent = "adEvent", V.configure = "configure", V.remainingTime = "remainingTime", V.destroy = "destroy", V.resize = "resize", V.volume = "volume", V.authorIconClicked = "videoAuthorIconClicked", V.authorNameClicked = "videoAuthorClicked", V.videoClicked = "videoClicked", V.videoIconClicked = "videoIconClicked", V.learnMoreClicked = "videoLearnMoreClicked",
            V.muteClicked = "videoMuteClicked", V.titleClicked = "videoTitleClicked", V.videoSkipClicked = "SKIPPED", V.unmuteClicked = "videoUnmuteClicked", V.vpaidEvent = "vpaidEvent", V.show_ad = "show_ad", V.video_card_endcap_collapse = "video_card_endcap_collapse", V.video_card_endcap_dismiss = "video_card_endcap_dismiss", V.video_card_endcap_impression = "video_card_endcap_impression", V.mediaUrlPinged = "mediaUrlPinged", V.breakStart = "breakstart", V.breakEnd = "breakend", V.omidReady = "omidReady", V.omidUnavailable = "omidUnavailable", V.omidAdSessionCompleted =
            "omidAdSessionCompleted", V.omidAdSessionAbandoned = "omidAdSessionAbandoned", V.verificationNotExecuted = "verificationNotExecuted", V.loadStart = "loadStart", V.seeked = "seeked", V.seeking = "seeking", V);
    var wD = new function() {
        this.g = new Map;
        this.l = 0;
        this.j = null != window.fetch
    };

    function xD(a) {
        var b = void 0 === b ? wD : b;
        var c = void 0 === c ? null : c;
        a = new dy(a, c ? c : c);
        var d = void 0 === d ? !1 : d;
        var e = void 0 === e ? !1 : e;
        null != a.g || e ? Vy(b, a.url, d, e, a.g) : Vy(b, a.url, d)
    };
    var W = function() {
        this.l = .01 > Math.random();
        this.j = Math.floor(4503599627370496 * Math.random());
        this.g = null
    };
    W.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (null == x.G_testRunner && (this.l || (void 0 === c ? 0 : c))) {
            b.lid = a;
            jD() && (b.sdkv = jD());
            this.g && (b.palv = this.g);
            a = Xj().sort().join(",");
            pb(Th(a)) || (b.e = a);
            b = yD(this, b);
            var d = new S("http://pagead2.googlesyndication.com/pagead/gen_204");
            $g(b, function(e, f) {
                null != e && ix(d, f, null == e ? "" : "boolean" === typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = tD().A;
            "http" !== b && "https" !== b || Ww(d, b);
            b = d.toString();
            a = d.g.get("url");
            null != a && Gb() && 2083 < b.length && (b = uD(d, a));
            xD(b)
        }
    };
    var yD = function(a, b) {
        b.id = "ima_html5";
        var c = tD();
        b.c = a.j;
        b.domain = c.j;
        return b
    };
    W.getInstance = function() {
        return G(W)
    };

    function zD(a) {
        var b = Date.now(),
            c = {};
        a = (c["x-afma-token-requester-type"] = a, c);
        c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(sD());
        return (new Ky).get({
            url: c,
            withCredentials: !0,
            timeout: new by,
            headers: a
        }).then(function(d) {
            var e = Date.now();
            d = d.newToken || "";
            var f = {};
            W.getInstance().report(182, (f.t = e - b, f.aos = sD(), f));
            return new AD(d)
        }).catch(function(d) {
            var e = "not instanceof Error";
            d instanceof Error && (e = ey(Number(d.message)));
            d = Date.now();
            var f = {};
            W.getInstance().report(182,
                (f.except = e, f.t = d - b, f));
            return Promise.resolve(BD)
        })
    }
    var CD = function() {
        R.call(this);
        this.g = null;
        this.o = new iy(this);
        go(this, this.o);
        this.j = new pt(72E5);
        this.l = Promise.resolve(BD)
    };
    w(CD, R);
    var DD = function(a) {
        var b = "requester_type_8";
        b = void 0 === b ? "requester_type_9" : b;
        var c = function(d) {
            a.g = d;
            return a.g
        };
        a.l = zD(b).then(c);
        a.j = new pt(72E5);
        a.o.O(a.j, "tick", function() {
            a.l = zD(b).then(c)
        });
        a.j.start();
        fo(a, function() {
            a.j.stop()
        })
    };
    CD.prototype.getId = function() {
        var a = this;
        return Ka(function(b) {
            if (1 == b.g) return null != a.g && a.g !== BD ? (b.g = 2, b = void 0) : b = xa(b, a.l, 3), b;
            2 != b.g && (a.g = b.j);
            return b.return(a.g)
        })
    };
    var AD = function(a) {
            this.id = a
        },
        BD = new AD("");
    var ED = function(a, b, c, d, e) {
            this.name = a;
            this.type = b;
            this.data = c;
            this.id = d;
            this.g = e
        },
        FD = function(a) {
            R.call(this);
            this.l = [];
            this.j = !1;
            this.sessionId = a || "goog_" + Uh++
        };
    w(FD, R);
    FD.prototype.connect = function() {
        for (this.j = !0; 0 !== this.l.length;) {
            var a = this.l.shift();
            a && this.sendMessage(a)
        }
    };
    var GD = function(a, b, c, d, e, f) {
        a.j ? a.sendMessage(new ED(b, c, d, e, f)) : a.l.push(new ED(b, c, d, e, f))
    };
    FD.prototype.sendMessage = function() {};
    var HD = function(a, b, c, d, e, f) {
        e = void 0 === e ? "" : e;
        f = void 0 === f ? "" : f;
        ks.call(this, a);
        this.messageType = b;
        this.na = c;
        this.sessionId = d;
        this.origin = e;
        this.id = f
    };
    w(HD, ks);
    HD.prototype.getId = function() {
        return this.id
    };
    HD.prototype.toString = function() {
        return ""
    };
    var ID = {
            IMAGE: "Image",
            FLASH: "Flash",
            ALL: "All"
        },
        JD = {
            HTML: "Html",
            IFRAME: "IFrame",
            STATIC: "Static",
            ALL: "All"
        },
        KD = {
            IGNORE: "IgnoreSize",
            SELECT_EXACT_MATCH: "SelectExactMatch",
            SELECT_NEAR_MATCH: "SelectNearMatch",
            SELECT_FLUID: "SelectFluid"
        },
        LD = function() {
            this.allowCustom = !0;
            this.creativeType = this.resourceType = "All";
            this.sizeCriteria = "SelectExactMatch";
            this.nearMatchPercent = 90;
            this.adSlotIds = []
        };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", ID);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", JD);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", KD);
    var ND = function(a, b) {
            b = void 0 === b ? new LD : b;
            this.g = a;
            this.settings = b ? b : new LD;
            this.resourceType = MD(JD, this.settings.resourceType) ? this.settings.resourceType : "All";
            this.creativeType = MD(ID, this.settings.creativeType) ? this.settings.creativeType : "All";
            this.sizeCriteria = MD(KD, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
            this.adSlotIds = null != this.settings.adSlotIds ? this.settings.adSlotIds : [];
            this.nearMatchPercent = "number" === typeof this.settings.nearMatchPercent && 0 < this.settings.nearMatchPercent &&
                100 >= this.settings.nearMatchPercent ? this.settings.nearMatchPercent : 90
        },
        QD = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.settings.allowCustom && (!pb(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && OD(a, d) ? c.push(d) : (d = PD(a, d), null != d && !pb(d.getContent()) && c.push(d)))
            });
            return c
        };
    ND.prototype.re = function() {
        return this.resourceType
    };
    var OD = function(a, b) {
            var c;
            if (c = "Flash" !== b.getContentType()) {
                if (c = "All" === a.resourceType || a.resourceType === b.re()) c = b.getContentType(), c = null == c ? !0 : "All" === a.creativeType || a.creativeType === c;
                c && (c = b.getAdSlotId(), c = 0 === a.adSlotIds.length ? !0 : null != c ? a.adSlotIds.includes(c) : !1)
            }
            if (c)
                if (c = b.getSize(), (b = !!b.data.fluidSize) || a.g.pe) a = b && a.g.pe;
                else if ("IgnoreSize" === a.sizeCriteria || Lh(a.g.size, c)) a = !0;
            else {
                if (b = "SelectNearMatch" === a.sizeCriteria) b = c.width, c = c.height, b = b > a.g.size.width || c > a.g.size.height ||
                    b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
                a = b
            } else a = !1;
            return a
        },
        PD = function(a, b) {
            b = RD(b);
            return null == b ? null : b.find(function(c) {
                return OD(a, c)
            }) || null
        },
        MD = function(a, b) {
            return null != b && hh(a, b)
        };
    var SD = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    SD.prototype.getErrorCode = function() {
        return this.errorCode
    };
    SD.prototype.getMessage = function() {
        return this.message
    };
    var TD = new SD("Failed to initialize ad playback element before starting ad playback.", 400),
        UD = new SD("The provided {0} information: {1} is invalid.", 1101);

    function VD(a, b) {
        var c = void 0 === b ? null : b;
        var d = La.apply(2, arguments);
        if (!(c instanceof sC)) {
            var e = a.getErrorCode(),
                f = a.getMessage();
            if (0 < d.length)
                for (var g = 0; g < d.length; g++) f = f.replace(new RegExp("\\{" + g + "\\}", "ig"), d[g]);
            d = new sC("adPlayError", f, e);
            d.g = c;
            c = d
        }
        return c
    };
    var WD = function() {};
    WD.getInstance = function() {
        throw Error("Must be overridden");
    };
    var XD = function() {
        this.g = 0
    };
    w(XD, WD);
    XD.tb = void 0;
    XD.getInstance = function() {
        return XD.tb ? XD.tb : XD.tb = new XD
    };

    function YD(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = XD.getInstance();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        if (2 === e.g) {
            e = {};
            var f = Object,
                g = f.assign;
            e.c = String(a);
            a = String;
            var h = window;
            if ("number" !== typeof h.goog_pvsid) try {
                var k = Object,
                    m = k.defineProperty,
                    n = void 0;
                n = void 0 === n ? Math.random : n;
                var p = Math.floor(n() * Math.pow(2, 52));
                m.call(k, h, "goog_pvsid", {
                    value: p,
                    configurable: !1
                })
            } catch (q) {}
            e.pc = a(Number(h.goog_pvsid) || -1);
            e.em = c;
            e.lid = b;
            G(nv);
            $i(g.call(f, {}, (e.eids = "", e), d), "esp")
        }
    };

    function ZD() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                Vg(a, "load", d)
            };
            Ug(a, "load", d)
        })
    };
    var $D = function() {
            this.cache = {}
        },
        bE = function() {
            aE || (aE = new $D);
            return aE
        },
        cE = function(a) {
            var b = Ff(a, 3);
            if (!b) return 3;
            if (void 0 === Gf(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    $D.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Hb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            YD(6, a, null == (d = g) ? void 0 : d.message);
            return {
                Hb: null,
                success: !1
            }
        }
        if (!c) return {
            Hb: null,
            success: !0
        };
        try {
            var e = vu(c);
            this.cache[a] = e;
            return {
                Hb: e,
                success: !0
            }
        } catch (g) {
            var f;
            YD(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Hb: null,
                success: !1
            }
        }
    };
    $D.prototype.set = function(a, b) {
        var c = Gf(a, 1),
            d = "_GESPSK-" + c;
        uu(a);
        try {
            b.setItem(d, Rf(a))
        } catch (f) {
            var e;
            YD(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    $D.prototype.remove = function(a, b) {
        a = Gf(a, 1);
        try {
            b.removeItem("_GESPSK-" + a), delete this.cache[a]
        } catch (d) {
            var c;
            YD(8, a, null == (c = d) ? void 0 : c.message)
        }
    };
    var aE = null;
    var dE = function() {
        Q.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    w(dE, Q);
    var eE = function(a, b) {
        a.j.push({
            ge: !1,
            me: b
        })
    };
    dE.prototype.L = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        Q.prototype.L.call(this)
    };
    var fE = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var gE = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, gE.prototype);
        this.name = "InputError"
    };
    w(gE, Error);
    var hE = function() {
            this.jb = !1
        },
        iE = function() {
            hE.apply(this, arguments);
            this.Sc = new fE
        };
    w(iE, hE);
    var jE = function(a, b) {
        a.jb || (a.jb = !0, a.Rc = b, a.Sc.resolve(b))
    };
    ea.Object.defineProperties(iE.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Sc.promise
            }
        },
        He: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.jb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Cd
            }
        }
    });
    var kE = function() {
        iE.apply(this, arguments)
    };
    w(kE, iE);
    var lE = function(a, b) {
            jE(a, b)
        },
        mE = function(a, b) {
            b.then(function(c) {
                jE(a, c)
            })
        };
    kE.prototype.Ya = function(a) {
        this.jb || (this.jb = !0, this.Rc = null, this.Cd = a, this.Sc.reject(a))
    };
    var nE = function(a) {
        this.jb = !1;
        this.g = a
    };
    w(nE, hE);
    nE.prototype.He = function() {
        return this.g.jb
    };
    ea.Object.defineProperties(nE.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.Cd
            }
        }
    });
    var oE = function(a) {
        nE.call(this, a);
        this.g = a
    };
    w(oE, nE);
    ea.Object.defineProperties(oE.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.Rc
            }
        }
    });
    var pE = function(a) {
        nE.call(this, a);
        this.g = a
    };
    w(pE, nE);
    ea.Object.defineProperties(pE.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.g.Rc) ? a : null
            }
        }
    });
    var qE = function() {
        iE.apply(this, arguments)
    };
    w(qE, iE);
    qE.prototype.notify = function() {
        jE(this, null)
    };

    function rE(a, b) {
        var c, d;
        return Ka(function(e) {
            if (1 == e.g) return c = b ? a.filter(function(f) {
                return !f.ge
            }) : a, xa(e, Promise.all(c.map(function(f) {
                return f.me.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.ge
            });
            return xa(e, Promise.race([Promise.all(d.map(function(f) {
                return f.me.promise
            })), new Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    }
    var sE = function(a, b, c) {
        Q.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.A = c;
        this.B = !1;
        this.g = new dE;
        go(this, this.g)
    };
    w(sE, Q);
    sE.prototype.start = function() {
        var a = this,
            b;
        return Ka(function(c) {
            if (1 == c.g) {
                if (a.B) return c.return();
                a.B = !0;
                c.l = 2;
                return xa(c, rE(a.g.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.Ca()) {
                    for (var d = 0, e = u(a.g.l), f = e.next(); !f.done; f = e.next()) {
                        if (null == f.value.g.Rc) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.j()
                }
                return za(c)
            }
            b = Ca(c);
            if (a.Ca()) return c.return();
            if (!(b instanceof gE) && b instanceof Error && (a.A ? a.A(a.id, b) : a.C(a.id, b), !a.A && a.g.g.length))
                for (d = new gE(b.message), e = u(a.g.g), f = e.next(); !f.done; f = e.next())
                    if (f =
                        f.value, !f.He) {
                        var g = d;
                        f.jb = !0;
                        f.Cd = g;
                        f.Sc.reject(g)
                    }
            c.g = 0
        })
    };
    var tE = function(a) {
            var b = void 0 === b ? new kE : b;
            a.g.g.push(b);
            return b
        },
        uE = function(a) {
            var b = void 0 === b ? new qE : b;
            a.g.g.push(b);
            return b
        },
        vE = function(a, b) {
            eE(a.g, b);
            b = new oE(b);
            a.g.l.push(b);
            return b
        },
        wE = function(a, b) {
            eE(a.g, b);
            return new pE(b)
        };
    var xE = function(a, b) {
        sE.call(this, a);
        this.id = a;
        this.C = b
    };
    w(xE, sE);

    function yE(a, b) {
        return Af(a, ru, 2).some(function(c) {
            return Gf(c, 1) === b && null != Gf(c, 2)
        })
    };

    function zE(a) {
        var b = new yu;
        if (a) {
            var c = [],
                d = RegExp("^_GESPSK-(.+)$");
            try {
                for (var e = 0; e < a.length; e++) {
                    var f = (d.exec(a.key(e)) || [])[1];
                    f && c.push(f)
                }
            } catch (k) {}
            c = u(c);
            e = c.next();
            for (d = {}; !e.done; d = {
                    Ub: void 0
                }, e = c.next())
                if (d.Ub = e.value, (e = bE().get(d.Ub, a).Hb) && !yE(b, d.Ub) && (f = cE(e), 2 !== f && 3 !== f)) {
                    Of(e, 9, !1);
                    if ((f = Gf(e, 2)) && 1024 < f.length) {
                        var g = {};
                        YD(55, d.Ub, null, (g.sl = String(f.length), g));
                        f = e.Ya(pu(108));
                        C(f, 2)
                    }
                    Ef(b, 2, ru, e);
                    e = Gf(e, 2);
                    g = f = void 0;
                    var h = {};
                    YD(19, d.Ub, null, (h.hs = e ? "1" : "0", h.sl = String(null !=
                        (g = null == (f = e) ? void 0 : f.length) ? g : -1), h))
                }
        }
        if (!Af(b, ru, 2).length) return null;
        a = {};
        YD(50, "", null, (a.ns = String(Af(b, ru, 2).length), a));
        return Oc(b.g(), 3)
    };
    var AE = {
        Se: !1
    };
    var BE = function() {
        Q.call(this);
        this.A = [];
        this.B = [];
        this.o = {};
        this.g = [];
        this.j = new fE;
        this.l = {}
    };
    w(BE, Q);
    var CE = function(a, b) {
            go(a, b);
            a.A.push(b)
        },
        DE = function(a, b) {
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) CE(a, c.value)
        },
        EE = function(a) {
            var b, c, d, e, f, g, h, k, m, n, p, q;
            Ka(function(t) {
                switch (t.g) {
                    case 1:
                        if (!a.g.length) {
                            t.g = 2;
                            break
                        }
                        return xa(t, Promise.all(a.g.map(function(v) {
                            return v.j.promise
                        })), 2);
                    case 2:
                        b = u(a.A);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.start();
                        e = u(a.B);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, EE(g);
                        if (!a.l) {
                            t.g = 4;
                            break
                        }
                        h = Object.keys(a.l);
                        if (!h.length) {
                            t.g = 4;
                            break
                        }
                        return xa(t, Promise.all(Object.values(a.l).map(function(v) {
                                return v.promise
                            })),
                            6);
                    case 6:
                        for (k = t.j, m = 0, n = u(h), p = n.next(); !p.done; p = n.next()) q = p.value, a.o[q] = k[m++];
                    case 4:
                        return a.j.resolve(a.o), t.return(a.j.promise)
                }
            })
        };
    BE.prototype.run = function() {
        EE(this)
    };
    BE.prototype.L = function() {
        Q.prototype.L.call(this);
        this.A.length = 0;
        this.B.length = 0;
        this.g.length = 0
    };
    var FE = function(a, b, c, d) {
        xE.call(this, 1041, d);
        this.storage = b;
        this.o = vE(this, a);
        c && (this.l = wE(this, c))
    };
    w(FE, xE);
    FE.prototype.j = function() {
        var a = this.o.value,
            b, c, d = null != (c = this.storage) ? c : null == (b = this.l) ? void 0 : b.value;
        d && bE().set(a, d) && null != Gf(a, 2) && YD(27, Gf(a, 1))
    };
    var GE = function(a, b) {
        xE.call(this, 1094, b);
        this.l = uE(this);
        this.o = vE(this, a)
    };
    w(GE, xE);
    GE.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = u(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, c.startsWith("_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            aE = new $D;
            this.l.notify()
        }
    };
    var HE = function(a, b) {
        xE.call(this, 1048, b);
        this.l = tE(this);
        this.o = tE(this);
        this.F = vE(this, a)
    };
    w(HE, xE);
    HE.prototype.j = function() {
        var a = this.F.value,
            b = function(c) {
                var d = {};
                YD(c, Gf(a, 1), null, (d.tic = String(Math.round((Date.now() - Ff(a, 3)) / 6E4)), d))
            };
        switch (cE(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                jE(this.o, a);
                break;
            case 2:
                b(26);
                jE(this.l, a);
                break;
            case 3:
                YD(9, Gf(a, 1));
                jE(this.l, a);
                break;
            case 4:
                b(23), jE(this.l, a)
        }
    };
    var IE = function(a, b, c) {
        xE.call(this, 1027, c);
        this.sc = a;
        this.storage = b;
        this.l = tE(this);
        this.o = tE(this)
    };
    w(IE, xE);
    IE.prototype.j = function() {
        var a = bE().get(this.sc, this.storage).Hb;
        if (!a) {
            a = uu(tu(this.sc));
            var b = this.o,
                c = a.Ya(pu(100));
            jE(b, c)
        }
        jE(this.l, a)
    };
    var JE = function(a, b, c) {
        xE.call(this, 1046, c);
        this.output = uE(this);
        this.l = tE(this);
        this.o = vE(this, b);
        eE(this.g, a)
    };
    w(JE, xE);
    JE.prototype.j = function() {
        jE(this.l, this.o.value)
    };
    var KE = function(a, b, c) {
        xE.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = tE(this);
        this.o = tE(this);
        this.F = tE(this);
        this.G = vE(this, b)
    };
    w(KE, xE);
    KE.prototype.j = function() {
        var a = this,
            b = this.G.value,
            c = Gf(b, 1);
        YD(18, c);
        try {
            var d = hj();
            this.collectorFunction().then(function(e) {
                YD(29, c, null, {
                    delta: String(hj() - d)
                });
                var f = a.l,
                    g = Pf(b, 2, e);
                jE(f, g);
                jE(a.F, null != e ? e : null)
            }).catch(function(e) {
                YD(28, c, LE(e));
                e = a.o;
                var f = b.Ya(pu(106));
                jE(e, f)
            })
        } catch (e) {
            YD(1, c, LE(e)), lE(this.o, b.Ya(pu(107)))
        }
    };

    function LE(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var ME = function(a, b) {
        xE.call(this, 1028, b);
        this.l = tE(this);
        this.o = vE(this, a)
    };
    w(ME, xE);
    ME.prototype.j = function() {
        var a = this.o.value,
            b = Gf(a, 1);
        null != Ff(a, 3) || YD(35, b);
        jE(this.l, a)
    };
    var NE = function(a, b, c, d, e) {
        xE.call(this, 1050, e);
        this.G = c;
        this.F = d;
        this.l = tE(this);
        this.o = vE(this, a);
        this.H = wE(this, b)
    };
    w(NE, xE);
    NE.prototype.j = function() {
        var a = this.o.value,
            b = Gf(a, 1),
            c = this.H.value;
        if (null == c) YD(41, b), a.Ya(pu(111)), jE(this.l, a);
        else if ("string" !== typeof c) YD(21, b), b = this.l, a = a.Ya(pu(113)), jE(b, a);
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.F : this.G)) {
                var d = {};
                YD(12, b, null, (d.sl = String(c.length), d));
                b = a.Ya(pu(108));
                C(b, 2)
            } else c.length || YD(20, b), C(a, 10);
            jE(this.l, a)
        }
    };
    var OE = function(a) {
        xE.call(this, 1046, a);
        this.output = uE(this)
    };
    w(OE, xE);
    OE.prototype.j = function() {
        var a = this;
        ZD().then(function() {
            a.output.notify()
        })
    };

    function PE(a, b, c, d, e, f) {
        f = void 0 === f ? AE : f;
        var g, h, k, m, n, p, q, t, v, y, ca, X, pa;
        return Ka(function(ya) {
            return 1 == ya.g ? (g = new BE, h = new IE(a, c, e), CE(g, h), CE(g, new FE(h.o, void 0, d, e)), k = new ME(h.l, e), CE(g, k), m = new HE(k.l, e), CE(g, m), n = new KE(b, m.l, e), CE(g, n), CE(g, new FE(n.o, void 0, d, e)), p = new NE(n.l, n.F, f.Se ? 1024 : 300, f.Se ? 1024 : 1E3, e), CE(g, p), CE(g, new FE(p.l, void 0, d, e)), q = new OE(e), CE(g, q), t = new JE(q.output, m.o, e), CE(g, t), v = new KE(b, t.l, e), CE(g, v), y = new FE(v.l, void 0, d, e), CE(g, y), g.run(), pa = a, xa(ya, p.l.promise,
                2)) : ya.return({
                id: pa,
                collectorGeneratedData: null != (X = null == (ca = ya.j) ? void 0 : Gf(ca, 2)) ? X : null
            })
        })
    };
    var QE = function(a, b, c, d, e) {
        e = void 0 === e ? AE : e;
        xE.call(this, 1059, d);
        this.H = b;
        this.G = c;
        this.o = e;
        this.l = tE(this);
        this.J = vE(this, a);
        this.F = wE(this, c)
    };
    w(QE, xE);
    QE.prototype.j = function() {
        var a = this.F.value;
        if (a) {
            var b = this.J.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            YD(42, b, null, (c.ea = String(Number(this.H)), c));
            mE(this.l, PE(b, d, a, this.G, this.C, this.o))
        }
    };
    var RE = function(a, b) {
        xE.call(this, 1057, b);
        this.l = a;
        this.o = tE(this);
        this.F = tE(this)
    };
    w(RE, xE);
    RE.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l) YD(46, "UNKNOWN_COLLECTOR_ID"), SE(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, YD(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, YD(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), SE(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (YD(14, a), SE(this, a, 105)) : G(Wg).g(mw.g, mw.defaultValue).includes(a) ? (YD(22, a), SE(this, a, 104)) : jE(this.F, this.l)
            }
        else YD(39,
            "UNKNOWN_COLLECTOR_ID"), SE(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var SE = function(a, b, c) {
        a = a.o;
        b = tu(b).Ya(pu(c));
        jE(a, b)
    };
    var TE = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? AE : e;
        this.g = b;
        this.l = c;
        this.A = f;
        this.M = d;
        this.I = e;
        this.C = [];
        this.B = [];
        this.o = [];
        this.j = 0;
        a = u(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    TE.prototype.push = function(a) {
        var b = this;
        this.l || this.M();
        var c = function(f, g) {
            return void UE(b, f, g)
        };
        a = new RE(a, c);
        var d = new FE(a.o, void 0, this.g, c);
        c = new QE(a.F, this.l, this.g, c, this.I);
        var e = new BE;
        DE(e, [a, d, c]);
        e.run();
        a = c.l.promise;
        this.C.push(a);
        d = u(this.B);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    TE.prototype.addOnSignalResolveCallback = function(a) {
        this.B.push(a);
        for (var b = u(this.C), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    TE.prototype.addErrorHandler = function(a) {
        this.o.push(a)
    };
    TE.prototype.clearAllCache = function() {
        var a = this,
            b = this.A.currentScript instanceof HTMLScriptElement ? this.A.currentScript.src : "";
        if (1 === this.j) {
            var c = {};
            YD(49, "", null, (c.url = b, c))
        } else if (c = String(Di(null != b ? b : "")), G(Wg).g(lw.g, lw.defaultValue).includes(c)) c = {}, YD(48, "", null, (c.url = b, c));
        else {
            var d = new BE;
            c = new GE(this.g, function(e, f) {
                return void UE(a, e, f)
            });
            CE(d, c);
            d.run();
            this.j = 1;
            setTimeout(function() {
                a.j = 0
            }, 1E3 * Xg());
            d = {};
            YD(43, "", null, (d.url = b, d));
            return c.l.promise
        }
    };
    var UE = function(a, b, c) {
            a = u(a.o);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        VE = function(a) {
            this.push = function(b) {
                a.push(b)
            };
            this.addOnSignalResolveCallback = function(b) {
                a.addOnSignalResolveCallback(b)
            };
            this.addErrorHandler = function(b) {
                a.addErrorHandler(b)
            };
            this.clearAllCache = function() {
                a.clearAllCache()
            }
        };

    function WE(a, b, c, d, e, f) {
        f = void 0 === f ? AE : f;
        zi() !== Ai() ? YD(16, "") : XE(a, "encryptedSignalProviders", c, e) && XE(a, "secureSignalProviders", c, e) || (YD(38, ""), YE(a, "encryptedSignalProviders", b, f, c, d, e), YE(a, "secureSignalProviders", b, f, c, function() {}, e))
    }

    function XE(a, b, c, d) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a = a[b];
        d && a.addOnSignalResolveCallback(d);
        a.addErrorHandler(c);
        return !0
    }

    function YE(a, b, c, d, e, f, g) {
        var h, k = new TE(null != (h = a[b]) ? h : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new VE(k);
        g && k.addOnSignalResolveCallback(g);
        k.addErrorHandler(e)
    }

    function ZE(a, b, c, d, e) {
        var f = void 0 === f ? AE : f;
        var g = new kE;
        jE(g, b);
        WE(a, g, c, d, e, f)
    }

    function $E(a, b, c, d) {
        var e = aF,
            f = new Map;
        b = b.map(function(g) {
            var h = g.sc;
            return new Promise(function(k) {
                f.set(h, k)
            })
        });
        ZE(a, c, d, e, function(g) {
            var h = g.collectorGeneratedData;
            g = g.id;
            var k;
            return void(null == (k = f.get(g)) ? void 0 : k({
                collectorGeneratedData: h,
                id: g
            }))
        });
        return b
    };

    function bF() {
        var a;
        return null != (a = x.googletag) ? a : x.googletag = {
            cmd: []
        }
    };

    function cF(a) {
        if (!a || PC(a)) return null;
        try {
            return window.localStorage
        } catch (b) {
            return null
        }
    }

    function dF(a, b) {
        (a = cF(a)) && ZE(bF(), a, function() {}, aF, b)
    }

    function eF(a, b) {
        return (b = cF(b)) && 0 !== a.length ? $E(bF(), a, b, function() {}) : null
    }

    function aF() {};

    function fF(a, b, c, d) {
        var e = new fE,
            f = "",
            g = function(k) {
                try {
                    var m = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === m.paw_id && (Vg(a, "message", g), m.error ? e.reject(Error(m.error)) : e.resolve(d(m)))
                } catch (n) {}
            },
            h = gF(a);
        return h ? (Ug(a, "message", g), f = c(h), e.promise) : (c = hF(a)) ? (f = String(Math.floor(2147483647 * Bi())), Ug(a, "message", g), b(c, f), e.promise) : null
    }

    function iF(a) {
        return fF(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }

    function jF() {
        var a = window;
        return !!gF(a) || !!hF(a)
    }

    function gF(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    }

    function hF(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    var kF = function() {
            this.timeoutMs = 500;
            this.j = iF;
            this.signal = null;
            this.g = 0
        },
        lF = function(a) {
            if (M(Mk) || !jF()) return Promise.resolve(null);
            var b;
            return (null != (b = a.j(window)) ? b : Promise.resolve(null)).catch(function() {
                return "0"
            })
        },
        nF = function(a) {
            var b;
            return Ka(function(c) {
                if (1 == c.g) return b = Date.now() - a.g, !a.signal || 3E5 < b ? c = xa(c, mF(a), 3) : (c.g = 2, c = void 0), c;
                2 != c.g && (a.signal = c.j, a.g = Date.now());
                return c.return(a.signal)
            })
        },
        mF = function(a) {
            return Promise.race([lF(a).then(function(b) {
                if (null == b) return null;
                a.signal = 1E4 < b.length ? "0" : b;
                a.g = Date.now();
                return a.signal
            }), rt(a.timeoutMs, "0")])
        };

    function Ij(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }

    function oF(a, b) {
        return b && 0 === b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b
    }
    var pF = function(a, b) {
        FD.call(this, b);
        this.o = a;
        this.g = null;
        this.B = new iy(this);
        this.B.O(I(), "message", this.C)
    };
    w(pF, FD);
    var qF = function(a) {
        if (null == a || "string" !== typeof a || !a.startsWith("ima://")) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, oF)
        } catch (b) {
            return null
        }
    };
    pF.prototype.sendMessage = function(a) {
        if (null != this.g && null != this.g.postMessage) {
            var b = this.g,
                c = b.postMessage,
                d = {};
            d.name = a.name;
            d.type = a.type;
            null != a.data && (d.data = a.data);
            a.id && (d.id = a.id);
            a.g && (d.replyToMessageId = a.g);
            d.sid = this.sessionId;
            d.channel = this.o;
            a = [];
            Kj(new Jj, d, a);
            c.call(b, "ima://" + a.join(""), "*")
        }
        null != this.g && null == this.g.postMessage && W.getInstance().report(11)
    };
    pF.prototype.L = function() {
        eo(this.B);
        this.g = null;
        FD.prototype.L.call(this)
    };
    pF.prototype.C = function(a) {
        a = a.g;
        var b = qF(a.data);
        if (rF(this, b)) {
            if (null === this.g) this.g = a.source, this.j || this.connect();
            else if (this.g !== a.source) return;
            rF(this, b) && this.dispatchEvent(new HD(b.name, b.type, b.data || {}, b.sid, a.origin, b.id, b.replyToMessageId))
        }
    };
    var rF = function(a, b) {
        if (null == b) return !1;
        var c = b.channel;
        if (null == c || c !== a.o) return !1;
        b = b.sid;
        return null == b || "*" !== a.sessionId && b !== a.sessionId ? !1 : !0
    };
    var sF = function() {
        R.call(this);
        this.G = !1;
        this.g = null;
        this.B = this.F = this.N = !1;
        this.j = 0;
        this.o = [];
        this.C = !1;
        this.U = this.P = Infinity;
        this.l = 0;
        this.H = {};
        this.J = new iy(this);
        go(this, this.J)
    };
    w(sF, R);
    var uF = function(a, b) {
            null == b || a.G || (a.g = b, tF(a), a.G = !0)
        },
        wF = function(a) {
            null != a.g && a.G && (vF(a), a.G = !1, a.F = !1, a.B = !1, a.j = 0, a.o = [], a.C = !1)
        },
        tF = function(a) {
            vF(a);
            !(a.g instanceof R) && "ontouchstart" in document.documentElement && xc ? (a.H = {
                touchstart: function(b) {
                    a.F = !0;
                    a.j = b.touches.length;
                    a.l && (window.clearTimeout(a.l), a.l = 0, a.N = !0);
                    a.C = xF(a, b.touches) || 1 !== b.touches.length;
                    a.C ? (a.P = Infinity, a.U = Infinity) : (a.P = b.touches[0].clientX, a.U = b.touches[0].clientY);
                    b = b.touches;
                    a.o = [];
                    for (var c = 0; c < b.length; c++) a.o.push(b[c].identifier)
                },
                touchmove: function(b) {
                    a.j = b.touches.length;
                    if (!Rx(8) || Math.pow(b.changedTouches[0].clientX - a.P, 2) + Math.pow(b.changedTouches[0].clientY - a.U, 2) > Math.pow(5, 2)) a.B = !0
                },
                touchend: function(b) {
                    return void yF(a, b)
                }
            }, $g(a.H, function(b, c) {
                a.g.addEventListener(c, b, !1)
            })) : a.J.O(a.g, "click", a.W)
        },
        vF = function(a) {
            a.J.ob(a.g, "click", a.W);
            $g(a.H, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.H = {}
        },
        yF = function(a, b) {
            !a.F || 1 !== a.j || a.B || a.N || a.C || !xF(a, b.changedTouches) || (a.l = window.setTimeout(function() {
                    return void zF(a)
                },
                300));
            a.j = b.touches.length;
            0 === a.j && (a.F = !1, a.B = !1, a.o = []);
            a.N = !1
        };
    sF.prototype.W = function() {
        zF(this)
    };
    var xF = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.o.includes(b[c].identifier)) return !0;
            return !1
        },
        zF = function(a) {
            a.l = 0;
            a.dispatchEvent(new ks("click"))
        };
    sF.prototype.L = function() {
        wF(this);
        R.prototype.L.call(this)
    };
    var AF = gC().toString();

    function BF(a) {
        return "number" === typeof a ? a.toString() : ""
    };
    var CF = function() {
        this.l = function() {
            return new XMLHttpRequest
        };
        this.g = new fE;
        this.j = this.config = null
    };
    CF.prototype.getConfig = function() {
        var a = this;
        return Ka(function(b) {
            return 1 == b.g ? xa(b, a.g.promise, 2) : b.return(a.config)
        })
    };
    var GF = function() {
            var a = DF,
                b = EF,
                c = a.l();
            c.timeout = 6E4;
            c.open("GET", b, !0);
            c.onload = function() {
                if (200 > c.status || 300 <= c.status) FF(a, Error("status: " + c.status));
                else {
                    var d = c.responseText,
                        e = null;
                    try {
                        e = nu(d)
                    } catch (f) {
                        FF(a, Error("per-pub config could not be deserialized"));
                        return
                    }
                    a.g.resolve();
                    a.config = e
                }
            };
            c.onerror = function() {
                FF(a, Error("status: " + c.status))
            };
            c.send()
        },
        FF = function(a, b) {
            a.j = b;
            a.g.resolve()
        },
        HF = new CF;

    function IF() {
        var a = JF,
            b = a.appName,
            c = a.mg;
        a = a.pageUrl;
        var d = new URL("https://securepubads.g.doubleclick.net/pagead/ima_ppub_config");
        return b && c ? ("android" === c ? d.searchParams.set("msid", b) : "ios" === c && d.searchParams.set("an", b), d.toString()) : a ? (d.searchParams.set("ippd", a), d.toString()) : null
    };

    function KF(a, b) {
        var c, d, e;
        a = null != (e = null == (c = yf(a, lu, 2)) ? void 0 : null == (d = Af(c, ku, 1)) ? void 0 : d.map(function(g) {
            return E(g, 1)
        })) ? e : [];
        var f = wC(b);
        c = a.some(function(g) {
            return g === f
        });
        b = vC(b);
        W.getInstance().report(190, {
            fm: c,
            rt: b
        })
    };
    var LF = function(a, b) {
        Q.call(this);
        var c = this;
        this.g = a;
        this.j = new Map;
        this.l = function(d) {
            var e = c.j.get(d.messageType);
            if (e) {
                var f = "goog_" + Uh++,
                    g = d.getId();
                e(d.na).then(function(h) {
                    GD(c.g, d.type, d.messageType, h, f, g)
                })
            }
        };
        this.g.O(b, this.l);
        fo(this, function() {
            c.j.clear();
            c.g.ob(b, c.l)
        })
    };
    w(LF, Q);
    var MF = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var NF = function(a, b) {
        Q.call(this);
        this.g = a;
        this.timeoutMs = b;
        go(this, this.g)
    };
    w(NF, Q);
    var PF = function(a) {
            if (!xw(a.g.caller)) return Promise.resolve(null);
            var b = new fE,
                c = null;
            a.g.addEventListener(function(e) {
                if (1 === e.pingData.internalErrorState) b.resolve(null);
                else if ("listenerRegistered" === e.eventName) c = e.listenerId, 1 === e.pingData.applicableSections.length && -1 === e.pingData.applicableSections[0] && b.resolve(new OF("", "-1"));
                else if ("signalStatus" === e.eventName && "ready" === e.data) {
                    e = e.pingData;
                    var f, g = (null != (f = e.applicableSections) ? f : []).join("_");
                    b.resolve(new OF(e.gppString, g))
                }
            });
            var d =
                new Promise(function(e) {
                    setTimeout(function() {
                        e(null)
                    }, a.timeoutMs)
                });
            d = Promise.race([b.promise, d]);
            d.then(function() {
                null !== c && a.g.removeEventListener(c)
            });
            return d
        },
        OF = function(a, b) {
            this.gppString = a;
            this.sid = b
        };
    var QF = ha(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"]),
        RF = ha(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"]),
        SF = ha(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"]),
        TF = ha(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"]),
        UF = Ih(QF),
        VF = Ih(RF),
        WF = Ih(SF),
        XF = Ih(TF);

    function YF(a) {
        return (a = ni(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }

    function ZF(a) {
        var b, c, d, e, f, g;
        return Ka(function(h) {
            if (1 == h.g) return b = ji("IFRAME", {
                style: "display: none",
                title: "Advertisement"
            }), c = new Promise(function(k) {
                b.addEventListener("load", function() {
                    k()
                })
            }), a.appendChild(b), xa(h, c, 2);
            d = ji("SCRIPT");
            e = UF;
            M(Dk) ? e = VF : M(Ek) ? e = WF : M(Fk) && (e = XF);
            Nh(d, e);
            f = new Promise(function(k, m) {
                d.addEventListener("load", function() {
                    YF(b) ? k(b) : m()
                })
            });
            g = b.contentDocument || b.contentWindow.document;
            g.head.appendChild(d);
            return h.return(f)
        })
    };
    var $F = function(a, b) {
        R.call(this);
        this.j = b;
        this.g = YF(a)
    };
    w($F, R);
    var bG = function(a) {
            try {
                a.g && a.g.registerSessionObserver(function(b) {
                    "sessionStart" === b.type ? aG(a, a.j) : "sessionFinish" === b.type && bG(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        aG = function(a, b) {
            b instanceof FB && (b = b.V);
            var c;
            if ("AUDIO" !== (null == (c = b.tagName) ? void 0 : c.toUpperCase())) try {
                a.g && a.g.setVideoElement(b)
            } catch (d) {
                a.dispatchEvent(new Event("error"))
            }
        },
        cG = function(a, b) {
            try {
                a.g && a.g.setSessionClientWindow(b)
            } catch (c) {
                a.dispatchEvent(new Event("error"))
            }
        };
    var dG = function(a) {
        this.data = a
    };
    l = dG.prototype;
    l.getTotalAds = function() {
        return this.data.totalAds
    };
    l.getMaxDuration = function() {
        return this.data.maxDuration
    };
    l.getAdPosition = function() {
        return this.data.adPosition
    };
    l.getPodIndex = function() {
        return this.data.podIndex
    };
    l.getTimeOffset = function() {
        return this.data.timeOffset
    };
    l.getIsBumper = function() {
        return this.data.isBumper
    };
    dG.prototype.getIsBumper = dG.prototype.getIsBumper;
    dG.prototype.getTimeOffset = dG.prototype.getTimeOffset;
    dG.prototype.getPodIndex = dG.prototype.getPodIndex;
    dG.prototype.getAdPosition = dG.prototype.getAdPosition;
    dG.prototype.getMaxDuration = dG.prototype.getMaxDuration;
    dG.prototype.getTotalAds = dG.prototype.getTotalAds;
    var eG = function(a) {
        this.data = a
    };
    l = eG.prototype;
    l.getContent = function() {
        return this.data.content
    };
    l.getContentType = function() {
        return this.data.contentType
    };
    l.getWidth = function() {
        return this.getSize().width
    };
    l.getHeight = function() {
        return this.getSize().height
    };
    l.getAdSlotId = function() {
        return this.data.adSlotId
    };
    l.getSize = function() {
        return this.data.size
    };
    l.re = function() {
        return this.data.resourceType
    };
    var RD = function(a) {
        return (a = a.data.backupCompanions) ? a.map(function(b) {
            return new eG(b)
        }) : []
    };
    eG.prototype.getAdSlotId = eG.prototype.getAdSlotId;
    eG.prototype.getHeight = eG.prototype.getHeight;
    eG.prototype.getWidth = eG.prototype.getWidth;
    eG.prototype.getContentType = eG.prototype.getContentType;
    eG.prototype.getContent = eG.prototype.getContent;
    var fG = function(a, b) {
        this.j = a;
        this.g = b
    };
    fG.prototype.getAdIdValue = function() {
        return this.j
    };
    fG.prototype.getAdIdRegistry = function() {
        return this.g
    };
    fG.prototype.getAdIdRegistry = fG.prototype.getAdIdRegistry;
    fG.prototype.getAdIdValue = fG.prototype.getAdIdValue;
    var Y = function(a) {
        this.data = a
    };
    Y.prototype.getAdId = function() {
        return this.data.adId
    };
    Y.prototype.getCreativeAdId = function() {
        return this.data.creativeAdId
    };
    Y.prototype.getCreativeId = function() {
        return this.data.creativeId
    };
    var gG = function(a) {
        return a.data.adQueryId
    };
    l = Y.prototype;
    l.getAdSystem = function() {
        return this.data.adSystem
    };
    l.getAdvertiserName = function() {
        return this.data.advertiserName
    };
    l.getApiFramework = function() {
        return this.data.apiFramework
    };
    l.getWrapperAdIds = function() {
        return this.data.adWrapperIds
    };
    l.getWrapperCreativeIds = function() {
        return this.data.adWrapperCreativeIds
    };
    l.getWrapperAdSystems = function() {
        return this.data.adWrapperSystems
    };
    l.isLinear = function() {
        return this.data.linear
    };
    l.isSkippable = function() {
        return this.data.skippable
    };
    l.getContentType = function() {
        return this.data.contentType
    };
    l.getDescription = function() {
        return this.data.description
    };
    l.getTitle = function() {
        return this.data.title
    };
    l.getDuration = function() {
        return this.data.duration
    };
    l.getVastMediaWidth = function() {
        return this.data.vastMediaWidth
    };
    l.getVastMediaHeight = function() {
        return this.data.vastMediaHeight
    };
    l.getWidth = function() {
        return this.data.width
    };
    l.getHeight = function() {
        return this.data.height
    };
    l.getUiElements = function() {
        return this.data.uiElements
    };
    l.getMinSuggestedDuration = function() {
        return this.data.minSuggestedDuration
    };
    l.getAdPodInfo = function() {
        return new dG(this.data.adPodInfo)
    };
    l.getCompanionAds = function(a, b, c) {
        if (!this.data.companions) return [];
        var d = this.data.companions.map(function(e) {
            return new eG(e)
        });
        return QD(new ND({
            size: new H(a, b),
            pe: c ? "SelectFluid" === c.sizeCriteria : !1
        }, c), d)
    };
    l.getTraffickingParameters = function() {
        return $x(Th(this.data.traffickingParameters))
    };
    l.getTraffickingParametersString = function() {
        return this.data.traffickingParameters
    };
    l.getVastMediaBitrate = function() {
        return this.data.vastMediaBitrate
    };
    l.getMediaUrl = function() {
        return this.data.mediaUrl
    };
    l.getSurveyUrl = function() {
        return this.data.surveyUrl
    };
    l.getDealId = function() {
        return this.data.dealId
    };
    l.getUniversalAdIds = function() {
        return (this.data.universalAdIds || []).map(function(a) {
            return new fG(a.adIdValue, a.adIdRegistry)
        })
    };
    l.getUniversalAdIdValue = function() {
        return this.data.universalAdIdValue
    };
    l.getUniversalAdIdRegistry = function() {
        return this.data.universalAdIdRegistry
    };
    l.getSkipTimeOffset = function() {
        return this.data.skipTimeOffset
    };
    l.ye = function() {
        return this.data.disableUi
    };
    Y.prototype.isUiDisabled = Y.prototype.ye;
    Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
    Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
    Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
    Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
    Y.prototype.getDealId = Y.prototype.getDealId;
    Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
    Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
    Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
    Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
    Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
    Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
    Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
    Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
    Y.prototype.getUiElements = Y.prototype.getUiElements;
    Y.prototype.getHeight = Y.prototype.getHeight;
    Y.prototype.getWidth = Y.prototype.getWidth;
    Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
    Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
    Y.prototype.getDuration = Y.prototype.getDuration;
    Y.prototype.getTitle = Y.prototype.getTitle;
    Y.prototype.getDescription = Y.prototype.getDescription;
    Y.prototype.getContentType = Y.prototype.getContentType;
    Y.prototype.isSkippable = Y.prototype.isSkippable;
    Y.prototype.isLinear = Y.prototype.isLinear;
    Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
    Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
    Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
    Y.prototype.getApiFramework = Y.prototype.getApiFramework;
    Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
    Y.prototype.getAdSystem = Y.prototype.getAdSystem;
    Y.prototype.getCreativeId = Y.prototype.getCreativeId;
    Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
    Y.prototype.getAdId = Y.prototype.getAdId;
    var hG = function(a) {
        this.g = a
    };
    hG.prototype.getCuePoints = function() {
        return this.g
    };
    hG.prototype.getCuePoints = hG.prototype.getCuePoints;
    var jG = function() {
            this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
            this.autoAlign = this.useVideoAdUi = !0;
            this.bitrate = -1;
            this.enablePreloading = !1;
            this.loadVideoTimeout = iG;
            this.mimeTypes = null;
            this.playAdsAfterTime = -1;
            this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            this.uiElements = null;
            this.useStyledNonLinearAds = this.useStyledLinearAds = !1
        },
        kG = function(a, b) {
            var c = {};
            Object.assign(c, a);
            b && (c.disableClickThrough = !0);
            return c
        };
    jG.prototype.append = function(a) {
        if (a) {
            var b = a.autoAlign;
            null != b && (this.autoAlign = b);
            b = Yh(a.bitrate);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            (b = a.mimeTypes) && 0 !== b.length && (this.mimeTypes = b);
            b = Yh(a.playAdsAfterTime);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete =
                a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = Yh(a.loadVideoTimeout);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi
        }
    };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
    var iG = M(Qk) ? 4E3 : M(Rk) ? 6500 : M(Sk) ? 12E3 : 8E3;
    var lG = function(a) {
        this.K = B(a)
    };
    w(lG, F);
    var mG = function(a) {
        this.K = B(a)
    };
    w(mG, F);
    var nG = function(a) {
        this.K = B(a)
    };
    w(nG, F);
    var oG = function(a) {
        this.K = B(a)
    };
    w(oG, F);
    var pG = function(a) {
        this.K = B(a)
    };
    w(pG, F);
    var qG = function(a) {
        return xf(a, gv)
    };
    pG.prototype.getWidth = function() {
        return Jf(this, 9)
    };
    pG.prototype.getHeight = function() {
        return Jf(this, 10)
    };
    var rG = Mg(pG);
    pG.oa = [3, 7, 27, 11, 32];

    function sG(a) {
        var b = a.Lg,
            c = a.zi,
            d = a.Ji,
            e = a.auctionNonce,
            f = void 0 === a.Cf ? 0 : a.Cf,
            g = a.Ki;
        a = !If(b, 14);
        for (var h = {}, k = u(Af(b, mG, 7)), m = k.next(); !m.done; m = k.next()) {
            m = m.value;
            var n = {},
                p = void 0,
                q = null == (p = d) ? void 0 : p.lg.Gg.Kg.Ff;
            p = E(m, 1);
            if (E(m, 2).length) try {
                if (n = JSON.parse(E(m, 2)), 1 > 100 * Bi()) {
                    var t = void 0;
                    null == (t = q) || t.pd({
                        ed: p,
                        status: "SUCCESS",
                        Qd: 100
                    })
                }
            } catch (pa) {
                t = void 0, null == (t = q) || t.pd({
                    ed: p,
                    status: "ERROR",
                    Qd: 1
                })
            } else t = void 0, null == (t = q) || t.pd({
                ed: p,
                status: "EMPTY",
                Qd: 1
            });
            h[E(m, 1)] = n
        }
        if (d = yf(b, ev,
                6)) h["https://googleads.g.doubleclick.net"] = d.toJSON(), h["https://td.doubleclick.net"] = d.toJSON();
        k = {};
        d = Af(b, oG, 11);
        d = u(d);
        for (m = d.next(); !m.done; m = d.next()) m = m.value, k[E(m, 1)] = Jf(m, 2);
        m = {};
        0 !== Jf(b, 21) && (m["*"] = Jf(b, 21));
        if (0 < Af(b, nG, 32).length) {
            var v = {};
            d = u(Af(b, nG, 32));
            for (n = d.next(); !n.done; n = d.next()) n = n.value, v[E(n, 1)] = Jf(n, 2)
        }
        n = {};
        null != oe(jf(b, 18)) && (n["https://googleads.g.doubleclick.net"] = Kf(b, 18), n["https://td.doubleclick.net"] = Kf(b, 18));
        d = b.K;
        q = Id(d);
        d = sf(d, q, hf(d, q, 24), 24, lG);
        d = u(d);
        for (q = d.next(); !q.done; q = d.next()) p = q.value, Kf(p[1], 4) && (q = p[0], p = Kf(p[1], 4), n[q] = p);
        d = E(b, 1).split("/td/")[0];
        null == (q = yf(b, gv, 5)) ? q = void 0 : (p = q.K, q = Fe(q.constructor, ff(p, Id(p), !1)));
        var y;
        null != q && null != (y = yf(q, fv, 5)) && C(y, 2);
        y = Object;
        p = y.assign;
        t = E(b, 1);
        var ca = E(b, 2);
        var X = mf(b, 3, ye);
        v = p.call(y, {}, {
            seller: d,
            decisionLogicUrl: t,
            trustedScoringSignalsUrl: ca,
            interestGroupBuyers: X,
            sellerExperimentGroupId: Kf(b, 17),
            auctionSignals: JSON.parse(E(b, 4) || "{}"),
            sellerSignals: (null == q ? void 0 : q.toJSON()) || [],
            sellerTimeout: Jf(b,
                15) || 50,
            perBuyerExperimentGroupIds: n,
            perBuyerSignals: h,
            perBuyerTimeouts: k,
            perBuyerCumulativeTimeouts: m
        }, v ? {
            perBuyerGroupLimits: v
        } : {}, a ? {
            resolveToConfig: a
        } : {});
        if (null == b ? 0 : If(qG(b), 25)) v.sellerCurrency = "USD", h = Object, y = h.fromEntries, k = tf(b, 22, De), v.perBuyerCurrencies = y.call(h, k);
        E(b, 28) && (v.directFromSellerSignalsHeaderAdSlot = E(b, 28));
        e && (v.auctionNonce = e, v.additionalBids = Promise.resolve());
        tf(b, 33, De).size && (v.deprecatedRenderURLReplacements = Object.fromEntries(tf(b, 33, De).entries()), (e = v.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) &&
            (v.deprecatedRenderURLReplacements["${RENDER_DATA}"] = e));
        switch (f) {
            case 1:
                v.allSlotsRequestedSizes = [{
                    width: b.getWidth(),
                    height: b.getHeight()
                }]
        }
        g && (v.reportingTimeout = g);
        f = Object;
        e = f.assign;
        g = E(b, 1);
        h = Kf(b, 17);
        y = new gv;
        k = qG(b);
        void 0 !== wf(k, fv, 5, !1) && (k = new fv, m = Nf(xf(qG(b), fv), 2), k = D(k, 2, pe(m), "0"), m = Nf(xf(qG(b), fv), 4), k = D(k, 4, pe(m), "0"), Bf(y, 5, k));
        qG(b).getEscapedQemQueryId() && (k = qG(b).getEscapedQemQueryId(), D(y, 2, xe(k), ""));
        E(qG(b), 6) && (k = E(qG(b), 6), D(y, 6, xe(k), ""));
        If(qG(b), 21) && D(y, 21, ee(!0), !1);
        If(qG(b), 4) && D(y, 4, ee(!0), !1);
        E(qG(b), 11) && (k = E(qG(b), 11), D(y, 11, xe(k), ""));
        y = y.toJSON();
        k = Jf(b, 15) || 50;
        if (If(b, 30)) {
            if (null == c || !c.length) throw Error("top_td_without_component_auction");
        } else c = [v].concat(ia(null != c ? c : []));
        c = e.call(f, {}, {
            seller: d,
            decisionLogicUrl: g,
            sellerExperimentGroupId: h,
            sellerSignals: y,
            sellerTimeout: k,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: c
        }, a ? {
            resolveToConfig: a
        } : {});
        E(b, 28) && (c.directFromSellerSignalsHeaderAdSlot = E(b, 28));
        return c
    };
    var uG = function(a, b) {
        Q.call(this);
        var c = this;
        this.j = b;
        this.l = function(d) {
            return tG(c, d.tdconfig).then(function(e) {
                var f = {};
                return f.ffconfig = ("string" === typeof e ? e : null == e ? void 0 : e.url) || "", f
            })
        };
        this.g = new LF(a, "fledge");
        go(this, this.g)
    };
    w(uG, Q);
    var tG = function(a, b) {
            try {
                return vG(a, b).catch(function() {
                    return null
                })
            } catch (c) {
                return Promise.resolve(null)
            }
        },
        vG = function(a, b) {
            b = rG(b);
            var c = sG({
                Lg: b
            });
            b = rt(500, null);
            a = a.j.runAdAuction(c).then(function(d) {
                return d
            });
            return Promise.race([b, a])
        };
    var xG = function(a, b, c) {
        Q.call(this);
        this.C = a;
        this.o = b;
        this.B = c;
        this.g = this.j = this.l = null;
        this.A = 0;
        a = new iy(this);
        go(this, a);
        wG(this);
        a.O(this.o, "adsManager", this.F)
    };
    w(xG, Q);
    var yG = function(a, b) {
            a.l = b;
            a.g && a.l && cG(a.g, a.l)
        },
        wG = function(a) {
            ZF(a.C).then(function(b) {
                return void zG(a, b)
            }).catch(function() {
                return void AG(a)
            })
        };
    xG.prototype.F = function(a) {
        if (["complete", "skip", "error"].includes(a.messageType)) {
            this.A++;
            if (10 === this.A) {
                this.A = 0;
                var b;
                null == (b = this.g) || b.X();
                wG(this)
            }
            a = ni(this.j);
            var c;
            a && (null == (c = a.frames) ? 0 : c.omid_v1_present) || W.getInstance().report(188, {})
        }
    };
    var zG = function(a, b) {
            a.j = b;
            a.g = new $F(b, a.B);
            a.g.O("error", function() {
                return void AG(a)
            });
            bG(a.g);
            a.g && a.l && cG(a.g, a.l)
        },
        AG = function(a) {
            GD(a.o, "omid", "iframeFailed");
            a.X()
        };
    xG.prototype.L = function() {
        this.j && (ki(this.j), this.j = null);
        Q.prototype.L.call(this)
    };
    var BG = function(a, b, c, d) {
        Q.call(this);
        this.A = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.j = new iy(this);
        go(this, this.j);
        this.j.O(this.A, d, this.B)
    };
    w(BG, Q);
    var CG = function(a, b) {
        var c = b.na;
        switch (b.messageType) {
            case "showVideo":
                a.l.Yc();
                break;
            case "hide":
                a.l.ib();
                break;
            case "resizeAndPositionVideo":
                b = c.resizeAndPositionVideo;
                a.l.Jd(new Mi(b.x, b.y, b.width, b.height));
                break;
            case "restoreSizeAndPositionVideo":
                a.l.Kd()
        }
    };
    BG.prototype.B = function(a) {
        var b = a.na;
        switch (a.messageType) {
            case "activate":
                this.l.hc(this.g);
                break;
            case "startTracking":
                a = this.g;
                var c = this.o;
                this.j.O(a, dh(Xy), c);
                this.j.O(a, MF, c);
                a = this.g;
                DG(a);
                a.j.O(a.g, MF, a.Oa);
                a.j.O(a.g, "ended", a.og);
                a.j.O(a.g, "webkitbeginfullscreen", a.Pa);
                a.j.O(a.g, "webkitendfullscreen", a.da);
                a.j.O(a.g, "loadedmetadata", a.qg);
                a.j.O(a.g, "pause", a.sg);
                a.j.O(a.g, "playing", a.ze);
                a.j.O(a.g, "timeupdate", a.tg);
                a.j.O(a.g, "volumechange", a.vg);
                a.j.O(a.g, "error", a.Y);
                a.j.O(a.g, Jc || xc &&
                    !Rx(8) ? "loadeddata" : "canplay", a.pg);
                a.o = new sF;
                a.j.O(a.o, "click", a.ka);
                uF(a.o, a.g);
                a.G = new pt(1E3);
                a.j.O(a.G, "tick", a.Ha);
                a.G.start();
                break;
            case "stopTracking":
                a = this.g;
                c = this.o;
                this.j.ob(a, dh(Xy), c);
                this.j.ob(a, MF, c);
                DG(this.g);
                break;
            case "exitFullscreen":
                a = this.g;
                (uc || wc) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
                break;
            case "play":
                EG(this.g);
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    k = b.demuxedVideoUrl,
                    m = b.demuxedAudioMimeType,
                    n = b.demuxedVideoMimeType,
                    p = b.demuxedAudioCodec,
                    q = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var t = null;
                k && h && b && n && m && q && p && (t = new tw({
                    Rg: k,
                    Ef: h,
                    Oi: null,
                    ti: null,
                    Qg: n,
                    Df: m,
                    pb: q,
                    Za: p,
                    height: null,
                    width: null,
                    Ea: b,
                    Ni: null,
                    si: null
                }));
                h = null;
                d && e && g && f && (h = new uw({
                    kg: d,
                    vb: null,
                    mimeType: e,
                    pb: g,
                    Za: f,
                    height: null,
                    width: null,
                    Ea: b,
                    Bi: null
                }));
                t ? a.load(c, t) : h ? a.load(c, h) : a.load(c, null);
                break;
            case "unload":
                a = this.g;
                FG(a);
                a.U = !1;
                "removeAttribute" in a.g ? a.g.removeAttribute("src") :
                    a.g.src = "";
                a.g.load();
                break;
            case "setCurrentTime":
                this.g.g.currentTime = b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    BG.prototype.o = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        GD(this.A,
            this.C, a, b)
    };
    var GG = function(a, b) {
        Q.call(this);
        this.j = b;
        this.g = null;
        this.l = new BG(a, b, this.j.fa, "videoDisplay1");
        go(this, this.l);
        var c = this.j.Aa;
        null != c && (this.g = new BG(a, b, c, "videoDisplay2"), go(this, this.g))
    };
    w(GG, Q);
    var HG = function(a, b, c, d) {
        var e = Ii("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        e.setAttribute("aria-label", "Advertisement");
        e.title = "3rd party ad content";
        e.tabIndex = 0;
        a.appendChild(e);
        return e
    };

    function IG() {
        var a, b, c, d = I();
        d = void 0 === d ? window : d;
        d = (null != (c = void 0 === d ? null : d) ? c : window).googletag;
        c = (null == d ? 0 : d.apiReady) ? d : void 0;
        return null != (b = null == c ? void 0 : null == (a = c.companionAds) ? void 0 : a.call(c)) ? b : null
    }

    function JG(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = u(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value, "string" !== typeof d) {
                var e = {};
                c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e))
            } else "fluid" === d && (d = {}, c.push((d.fluidSize = !0, d)));
        return b.adSizes = c, b
    }

    function KG(a) {
        var b = IG();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(q) {
                return [q.getSlotId().getId(), q]
            }));
            a = u(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value,
                    f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = bi(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth,
                            k = e.adHeight;
                        e.fluidSize && (k = on(d), h = k.width, k = k.height);
                        d.textContent = "";
                        if (e.friendlyIframeRendering) try {
                            var m = "google_companion_" + f.getSlotId().getId(),
                                n = HG(d,
                                    m, h, k),
                                p = n.contentWindow ? n.contentWindow.document : n.contentDocument;
                            qc && p.open("text/html", "replace");
                            Ph(p, sj(g));
                            p.close()
                        } catch (q) {} else Mh(d, sj(g)), d.style.width = h + "px", d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    };
    var LG = function(a, b, c, d, e, f) {
        HD.call(this, a, b, c, d, e);
        this.g = f
    };
    w(LG, HD);
    var MG = function(a, b) {
        R.call(this);
        this.B = a;
        this.o = b;
        this.g = {};
        this.j = new iy(this);
        go(this, this.j);
        this.j.O(I(), "message", this.l)
    };
    w(MG, R);
    var NG = function(a, b) {
            var c = b.g;
            a.g.hasOwnProperty(c) && GD(a.g[c], b.type, b.messageType, b.na)
        },
        OG = function(a, b, c, d) {
            a.g.hasOwnProperty(b) || (c = new pF(b, c), a.j.O(c, a.B, function(e) {
                this.dispatchEvent(new LG(e.type, e.messageType, e.na, e.sessionId, e.origin, b))
            }), c.g = d, c.connect(), a.g[b] = c)
        };
    MG.prototype.L = function() {
        for (var a = u(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) eo(b.value);
        R.prototype.L.call(this)
    };
    MG.prototype.l = function(a) {
        a = a.g;
        var b = qF(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.o && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                OG(this, c, d, a.source);
                this.dispatchEvent(new LG(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };

    function PG() {
        return !!Pa("googletag.cmd", I())
    }

    function QG() {
        var a = Pa("googletag.console", I());
        return null != a ? a : null
    }
    var RG = function() {
        iy.call(this);
        this.g = null;
        this.l = new MG("gpt", !0);
        go(this, this.l);
        this.O(this.l, "gpt", this.B);
        PG() || I().top === I() || (this.g = new MG("gpt", !1), go(this, this.g), this.O(this.g, "gpt", this.o))
    };
    w(RG, iy);
    RG.prototype.B = function(a) {
        var b = a.origin,
            c = "//imasdk.googleapis.com".match(ri);
        b = b.match(ri);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g) OG(this.g, a.g, a.sessionId, I().parent), null != this.g && NG(this.g, a);
            else if (c = a.na, null != c && void 0 !== c.scope) {
            b = c.scope;
            c = c.args;
            var d;
            if ("proxy" === b) {
                var e = a.messageType;
                "isGptPresent" === e ? d = PG() : "isConsolePresent" === e && (d = null != QG())
            } else if (PG())
                if ("pubads" === b || "companionAds" === b) {
                    d = a.messageType;
                    var f = I().googletag;
                    if (null != f && null != f[b] && (b = f[b](), null != b && (d =
                            b[d], null != d))) try {
                        e = d.apply(b, c)
                    } catch (g) {}
                    d = e
                } else if ("console" === b) {
                if (e = QG(), null != e && (b = e[a.messageType], null != b)) try {
                    b.apply(e, c)
                } catch (g) {}
            } else null === b && (e = a.messageType, "googleGetCompanionAdSlots" === e ? (e = IG()) ? (e = e.getSlots().map(JG), d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" === e && KG(null == c ? void 0 : c[0]), d = null));
            void 0 !== d && (a.na.returnValue = d, NG(this.l, a))
        }
    };
    RG.prototype.o = function(a) {
        NG(this.l, a)
    };
    var SG = function(a, b) {
        if (a.g) {
            var c = a.g;
            eo(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, eo(a.g[b]), delete a.g[b])
    };
    var TG = ha(["https://securepubads.g.doubleclick.net/pagead/js/car.js"]),
        UG = Ih(TG);

    function VG(a) {
        for (var b = [], c = 0; 8 > c; ++c) {
            var d = new kw(7, "", "https://pagead2.googlesyndication.com/pagead/ping", function(f) {
                    b.push({
                        url: f
                    })
                }),
                e = cv(bv(new av, a), c);
            d.o(e)
        }
        return b
    }

    function WG(a, b) {
        var c = uC;
        c = void 0 === c ? UG : c;
        var d, e;
        Ka(function(f) {
            switch (f.g) {
                case 1:
                    d = a;
                    if (d.sharedStorage) {
                        var g = d.sharedStorage.set("ps_cct", String(hj()), {
                            ignoreIfPresent: !0
                        });
                        f = xa(f, g, 2)
                    } else f = f.return();
                    return f;
                case 2:
                    return xa(f, d.sharedStorage.worklet.addModule(c.toString()), 3);
                case 3:
                    return xa(f, d.sharedStorage.selectURL("ps_caus", VG(b), {
                        resolveToConfig: !0
                    }), 4);
                case 4:
                    e = f.j;
                    g = d.document.body;
                    var h = document.createElement("fencedframe");
                    h.id = "ps_caff";
                    h.name = "ps_caff";
                    h.mode = "opaque-ads";
                    h.config = e;
                    g.appendChild(h);
                    f.g = 0
            }
        })
    };
    var YG = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, m, n, p) {
                if ("%" == m) return "%";
                var q = c.shift();
                if ("undefined" == typeof q) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = q;
                return XG[m].apply(null, arguments)
            })
        },
        XG = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Sh(" ", Number(c) - a.length) : Sh(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + Sh(" ", a) : f + Sh(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return XG.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    XG.i = XG.d;
    XG.u = XG.d;

    function ZG() {
        return ["autoplay", "attribution-reporting"].filter(function(a) {
            var b = document.featurePolicy;
            return void 0 !== b && "function" == typeof b.allowedFeatures && "object" == typeof b.allowedFeatures() && b.allowedFeatures().includes(a)
        }).join(";")
    }
    var aH = function(a, b) {
        R.call(this);
        this.F = b;
        this.N = this.J = null;
        this.H = !1;
        this.G = "goog_" + Uh++;
        this.B = new Map;
        this.j = null;
        var c = I();
        var d = Pa("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new RG, z("google.ima.gptProxyInstance", d, c), c = d);
        this.Y = c;
        this.C = null;
        this.o = new iy(this);
        go(this, this.o);
        c = this.G;
        d = (Fi() ? "https:" : "http:") + YG("//imasdk.googleapis.com/js/core/bridge3.633.0_%s.html", GC.getLocale());
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 === e.location.href.indexOf(d) || 0 === e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (k) {}
                    e = e.parent
                } while (e !== e.top)
            } catch (k) {}
            f = !1
        }
        f && (d += "?f=" + c);
        f = window.document;
        if (Ny.length && f.head) {
            e = u(Ny);
            for (var g = e.next(); !g.done; g = e.next())
                if ((g = g.value) && f.head) {
                    var h = Ii("META");
                    f.head.appendChild(h);
                    h.httpEquiv = "origin-trial";
                    h.content = g
                }
        }
        f = ZG();
        c = ji("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: f,
            id: c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;",
            title: "Advertisement"
        });
        this.o.Xb(c, "load", this.da);
        a.appendChild(c);
        this.g =
            c;
        this.l = $G(this);
        this.P = new uG(this.l, navigator);
        go(this, this.P);
        c = this.P;
        c.g.j.set("auction", c.l);
        this.U = new GG(this.l, this.F);
        go(this, this.U);
        this.F.fa && this.o.O(this.l, "displayContainer", this.W);
        this.o.O(this.l, "mouse", this.aa);
        this.o.O(this.l, "touch", this.ba);
        kD() || (this.C = new xG(a, this.l, b.fa.P.g), go(this, this.C))
    };
    w(aH, R);
    var $G = function(a, b) {
        b = void 0 === b ? "*" : b;
        var c = a.B.get(b);
        null == c && (c = new pF(a.G, b), a.H && (c.g = ni(a.g), c.connect()), a.B.set(b, c));
        return c
    };
    aH.prototype.hc = function(a) {
        var b;
        null != (b = this.C) && (a = a.P.g, b.B = a, b.g && (b = b.g, b.j = a, aG(b, a)))
    };
    aH.prototype.L = function() {
        null !== this.j && (this.j.X(), this.j = null);
        this.B.forEach(function(a) {
            eo(a)
        });
        this.B.clear();
        SG(this.Y, this.G);
        ki(this.g);
        R.prototype.L.call(this)
    };
    aH.prototype.aa = function(a) {
        var b = a.na,
            c = fn(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    };
    var bH = function(a, b) {
        var c = fn(a.g),
            d = !!("TouchEvent" in window && 0 < TouchEvent.length);
        b = b.map(function(f) {
            return d ? new Touch({
                identifier: f.identifier,
                target: a.g,
                clientX: f.clientX,
                clientY: f.clientY,
                screenX: f.screenX,
                screenY: f.screenY,
                pageX: f.pageX + c.x,
                pageY: f.pageY + c.y
            }) : document.createTouch(window, a.g, f.identifier, f.pageX + c.x, f.pageY + c.y, f.screenX, f.screenY)
        });
        if (d) return b;
        var e;
        return null == (e = document.createTouchList) ? void 0 : e.apply(document, b)
    };
    aH.prototype.ba = function(a) {
        var b = a.na,
            c = fn(this.g);
        if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: bH(this, b.touches),
            targetTouches: bH(this, b.targetTouches),
            changedTouches: bH(this, b.changedTouches)
        }, a = new TouchEvent(a.messageType, b), this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX,
                b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, bH(this, b.touches), bH(this, b.targetTouches), bH(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    };
    aH.prototype.W = function(a) {
        switch (a.messageType) {
            case "showVideo":
                null == this.j ? (this.j = new sF, this.o.O(this.j, "click", this.ka)) : wF(this.j);
                uF(this.j, this.F.Qb());
                break;
            case "hide":
                null !== this.j && (this.j.X(), this.j = null)
        }
        var b = this.U;
        CG(b.l, a);
        b.g && CG(b.g, a)
    };
    aH.prototype.ka = function() {
        GD(this.l, "displayContainer", "videoClick")
    };
    aH.prototype.da = function() {
        this.J = kj();
        this.N = hj();
        var a = ni(this.g);
        this.B.forEach(function(c) {
            c.g = a;
            c.connect()
        });
        var b;
        null == (b = this.C) || yG(b, a);
        this.H = !0
    };
    var cH = ha(["https://s0.2mdn.net/instream/video/client.js"]),
        dH = null,
        eH = function() {
            R.call(this);
            this.g = null;
            this.j = new Map;
            this.l = new Map;
            this.va = this.C = !1;
            this.o = null;
            this.B = new iy(this);
            go(this, this.B)
        };
    w(eH, R);
    var fH = function() {
            null == dH && (dH = new eH);
            return dH
        },
        cs = function(a, b, c) {
            var d = {};
            d.queryId = b;
            d.viewabilityData = c;
            a.g && GD(a.g, "activityMonitor", "viewabilityMeasurement", d)
        };
    eH.prototype.destroy = function() {
        this.B.ob(this.g, "activityMonitor", this.F);
        this.va = !1;
        this.j.clear()
    };
    eH.prototype.L = function() {
        this.destroy();
        R.prototype.L.call(this)
    };
    eH.prototype.init = function(a) {
        if (!this.va) {
            if (this.g = a || null) this.B.O(this.g, "activityMonitor", this.F), gH(this);
            if (!(x.ima && x.ima.video && x.ima.video.client && x.ima.video.client.tagged)) {
                z("ima.video.client.sdkTag", !0);
                var b = x.document;
                a = hi(document, "SCRIPT");
                var c = Ih(cH);
                Nh(a, c);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            Il();
            G(Tr).H = GC.g;
            this.C = !0;
            G(Tr).l = !0;
            this.o = null;
            a = G(Tr);
            b = "h" == Er(a) || "b" == Er(a);
            c = !(O(), !1);
            b && c && (a.M = !0, a.G = new Zp);
            this.va = !0
        }
    };
    var iH = function(a) {
            if (null == a) return !1;
            if ((uc || wc) && null !== a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            a = hH(a);
            var b = window.screen.availHeight || window.screen.height;
            return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
        },
        hH = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                "function" === typeof a.getBoundingClientRect && mi($h(a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        jH = function(a, b, c, d, e) {
            e =
                void 0 === e ? {} : e;
            if (a.va) {
                d && null == e.opt_osdId && (e.opt_osdId = d);
                if (a.o) return a.o(b, c, e);
                if (a = d ? a.l.get(d) : GC.l) null == e.opt_fullscreen && (e.opt_fullscreen = iH(a)), null == e.opt_adElement && (e.opt_adElement = a);
                return qv.wb(469, cb(es, b, c, e)) || {}
            }
            return {}
        },
        kH = function(a) {
            var b;
            0 !== GC.g ? b = G(Tr).l : b = a.C;
            return b
        },
        lH = function(a, b) {
            var c = String(Math.floor(1E9 * Math.random()));
            a.l.set(c, b);
            0 !== GC.g && (G(Tr).A[c] = a);
            return c
        },
        mH = function(a, b, c) {
            if (c) a.j.get(c) === b && a.j.delete(c);
            else {
                var d = [];
                a.j.forEach(function(e,
                    f) {
                    e === b && d.push(f)
                });
                d.forEach(a.j.delete, a.j)
            }
        },
        Zr = function(a, b) {
            a = a.j.get(b);
            return "function" === typeof a ? a() : {}
        },
        gH = function(a) {
            if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                var c;
                null == (c = a.g) || GD(c, "activityMonitor", "pageSignals", b)
            }
        };
    eH.prototype.F = function(a) {
        var b = a.na,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.messageType) {
            case "getPageSignals":
                gH(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = jH(this, e, c, a, f);
                var g;
                null == (g = this.g) || GD(g, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, gh(b, "isFullscreen") && (e = b.isFullscreen), gh(b, "loggingId") && (b = b.loggingId,
                    c.loggingId = b, W.getInstance().report(43, {
                        step: "beforeLookup",
                        logid: b,
                        time: Date.now()
                    })), c.engagementString = nH(this, a, e), this.g && GD(this.g, "activityMonitor", "engagement", c)
        }
    };
    var nH = function(a, b, c) {
        var d, e = b ? null != (d = a.l.get(b)) ? d : null : GC.l;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = It(function() {
                return e
            }, a)
        } catch (f) {
            c = f, c = "sdktle;" + Rh(c.name, 12) + ";" + Rh(c.message, 40)
        }
        return c
    };
    z("ima.common.getVideoMetadata", function(a) {
        return Zr(fH(), a)
    });
    z("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        cs(fH(), a, b)
    });
    var oH = function(a) {
            this.g = a;
            this.l = "";
            this.j = -1;
            this.A = !1
        },
        qH = function(a, b) {
            if (0 <= a.j) {
                var c = null == b ? function() {} : b,
                    d = function() {
                        pH(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.l;
                a.g.load()
            } else null != b && b()
        },
        pH = function(a, b) {
            var c = 0 < a.g.seekable.length;
            a.A ? c ? (a.g.currentTime = a.j, rH(a), b()) : setTimeout(function() {
                return void pH(a, b)
            }, 100) : (rH(a), b())
        },
        rH = function(a) {
            a.j = -1;
            a.l = "";
            a.A = !1
        };
    var sH = new H(5, 5),
        tH = function(a) {
            R.call(this);
            this.g = a;
            this.o = this.ba = null;
            this.C = 0;
            this.J = this.F = this.U = this.loaded = this.H = !1;
            this.W = this.G = this.N = this.l = null;
            this.aa = !1;
            this.B = null;
            this.P = new oH(a);
            this.j = new iy(this);
            go(this, this.j);
            this.size = this.getSize();
            this.fullscreen = iH(this.g)
        };
    w(tH, R);
    l = tH.prototype;
    l.be = function() {
        var a = this.P;
        a.l = a.g.currentSrc;
        a.A = 0 < a.g.seekable.length;
        a.j = a.g.ended ? -1 : a.g.currentTime
    };
    l.fc = function(a) {
        qH(this.P, a)
    };
    l.load = function(a, b) {
        var c = K.getInstance().g;
        c.W = !0;
        vj(c);
        Fj("hvd_lc");
        FG(this);
        this.U = !1;
        if (b)
            if (Fj("hvd_ad"), b instanceof uw) {
                if (Fj("hvd_mad"), c = b.getMediaUrl()) {
                    Fj("hvd_admu");
                    Fj("hvd_src");
                    this.g.src = c;
                    this.g.load();
                    return
                }
            } else if (b instanceof tw) {
            Fj("hvd_dad");
            c = b.A;
            var d = b.j,
                e = b.l,
                f = b.g,
                g = b.pb,
                h = b.Za;
            if (c && d && e && f && g && h && (Fj("hvd_addu"), b.Ea)) {
                Fj("hvd_admse");
                b = e + '; codecs="' + g + '"';
                f = f + '; codecs="' + h + '"';
                if (JA() && JA() && MediaSource.isTypeSupported(b) && JA() && MediaSource.isTypeSupported(f)) {
                    Fj("hvd_ymse");
                    Fj("hvd_mse");
                    a = !1;
                    try {
                        -1 !== window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                    } catch (k) {}
                    x.customElements ? a ? a = !0 : (M(Jk) && W.getInstance().report(153, {
                        limvid: "vd"
                    }), a = M(Jk) || M(Ik) || M(Gk) || M(Hk) ? !0 : !1) : a = !1;
                    a && this.g instanceof FB ? (this.g.bb = c, this.g.rb = d) : (this.ba = new dC(this.g, [new cB(c, b, 35E4, new vz), new cB(d, f, 82E3, new vz)]), go(this, this.ba), a = this.g, c = this.ba, c.j || (c.j = Ah(c.g).toString()), c = c.j, a.src = c);
                    this.g.load();
                    return
                }
                Fj("hvd_nmse")
            }
        } else Fj("hvd_uad");
        a ? (Fj("hvd_src"), this.g.src =
            a) : Fj("hvd_vn");
        this.g.load()
    };
    l.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = 0 === a ? !0 : !1
    };
    l.Jd = function(a) {
        this.g.style.left = String(a.left) + "px";
        this.g.style.top = String(a.top) + "px";
        this.g.style.width = String(a.width) + "px";
        this.g.style.height = String(a.height) + "px"
    };
    l.Kd = function() {
        this.g.style.width = "100%";
        this.g.style.height = "100%";
        this.g.style.left = "0";
        this.g.style.right = "0"
    };
    l.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    };
    var EG = function(a) {
        a.aa = !1;
        a.U || Gb() ? (a.J = !1, a.l = a.g.play(), null != a.l && (a.N = null, a.l.then(function() {
            a.l = null;
            a.ze(a.N);
            a.N = null
        }).catch(function(b) {
            a.l = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" === c || "NotAllowedError" === c ? a.dispatchEvent("autoplayDisallowed") : a.Y()
        }))) : a.J = !0
    };
    l = tH.prototype;
    l.pause = function() {
        null == this.l && (this.aa = !0, this.g.pause())
    };
    l.getCurrentTime = function() {
        return this.g.currentTime
    };
    l.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    l.getSize = function() {
        return new H(this.g.offsetWidth, this.g.offsetHeight)
    };
    l.L = function() {
        this.W && Mx(this.W);
        DG(this);
        R.prototype.L.call(this)
    };
    var DG = function(a) {
            null != a.o && (wF(a.o), a.o = null);
            null != a.G && a.G.X();
            my(a.j);
            FG(a)
        },
        FG = function(a) {
            a.loaded = !1;
            a.F = !1;
            a.H = !1;
            a.J = !1;
            a.C = 0;
            a.l = null;
            a.N = null;
            eo(a.B)
        };
    tH.prototype.Oa = function(a) {
        this.dispatchEvent(a.type)
    };
    var vH = function(a) {
        if (!a.F) {
            a.F = !0;
            a.dispatchEvent("start");
            try {
                if (M(Jk) && x.customElements) {
                    var b = x.customElements.get("lima-video");
                    a.g instanceof b ? W.getInstance().report(153, {
                        limvid: "limastart"
                    }) : W.getInstance().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (c) {
                W.getInstance().report(153, {
                    limvid: "startfail"
                })
            }
            b = "function" === typeof a.g.getAttribute && null != a.g.getAttribute("playsinline");
            b = void 0 === b ? !1 : b;
            (!Qx() && !Rx(10) || !b && (iD.getInstance(), !1) ? (iD.getInstance(), ub(zb(), "Xbox")) || (uc || wc ? 0 : (!tc || tc &&
                Px(Ox, 4)) && (zn() ? (iD.getInstance(), !1) : !kD())) : 1) || !tc || tc && Px(Ox, 3) || (uc || wc) && !Rx(4) || uH(a)
        }
    };
    l = tH.prototype;
    l.qg = function() {
        this.U = !0;
        this.J && EG(this);
        this.J = !1;
        wH(this)
    };
    l.pg = function() {
        this.loaded || (this.loaded = !0, this.dispatchEvent("loaded"))
    };
    l.ze = function(a) {
        null != this.l ? this.N = a : (this.dispatchEvent("play"), xc || Qx() || Jc || vH(this))
    };
    l.tg = function(a) {
        if (!this.F && (xc || Qx() || Jc)) {
            if (0 >= this.getCurrentTime()) return;
            if (Jc && this.g.ended && 1 === this.getDuration()) {
                this.Y(a);
                return
            }
            vH(this)
        }
        if (xc || ub(zb(), "Nintendo WiiU")) {
            if (1.5 < this.getCurrentTime() - this.C) {
                this.H = !0;
                this.g.currentTime = this.C;
                return
            }
            this.H = !1;
            this.getCurrentTime() > this.C && (this.C = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    };
    l.vg = function() {
        this.dispatchEvent("volumeChange")
    };
    l.sg = function() {
        if (this.F && xc && !this.aa && (2 > xH(this) || this.H)) {
            this.B = new pt(250);
            this.j.O(this.B, "tick", this.Ga);
            this.B.start();
            var a = !0
        } else a = !1;
        a || this.l || this.dispatchEvent("pause")
    };
    l.og = function() {
        var a = !0;
        if (xc || ub(zb(), "Nintendo WiiU")) a = this.C >= this.g.duration - 1.5;
        !this.H && a && this.dispatchEvent("end")
    };
    var uH = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    tH.prototype.da = function() {
        this.dispatchEvent("endFullscreen")
    };
    tH.prototype.Y = function() {
        this.dispatchEvent("error")
    };
    tH.prototype.ka = function() {
        this.dispatchEvent("click")
    };
    var wH = function(a) {
        a.g instanceof HTMLElement && (a.W = Lx(a.g, sH), a.W.then(function(b) {
            a.Ca() || L(K.getInstance(), "ps", b.width + "x" + b.height)
        }))
    };
    tH.prototype.Ha = function() {
        var a = this.getSize(),
            b = iH(this.g);
        if (a.width !== this.size.width || a.height !== this.size.height) !this.fullscreen && b ? uH(this) : this.fullscreen && !b && this.da(), this.size = a, this.fullscreen = b
    };
    tH.prototype.Ga = function() {
        if (!this.g.ended && this.g.paused && (xc || Kc ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime,
                b = xH(this);
            0 < b && (2 <= b || 2 > a) && (eo(this.B), EG(this))
        } else eo(this.B)
    };
    var xH = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b;) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    tH.prototype.Pa = function() {
        W.getInstance().report(139);
        uH(this)
    };
    var BH = function(a) {
            if (a instanceof yH || a instanceof zH || a instanceof AH) return a;
            if ("function" == typeof a.next) return new yH(function() {
                return a
            });
            if ("function" == typeof a[Symbol.iterator]) return new yH(function() {
                return a[Symbol.iterator]()
            });
            if ("function" == typeof a.zb) return new yH(function() {
                return a.zb()
            });
            throw Error("Not an iterator or iterable.");
        },
        yH = function(a) {
            this.g = a
        };
    yH.prototype.zb = function() {
        return new zH(this.g())
    };
    yH.prototype[Symbol.iterator] = function() {
        return new AH(this.g())
    };
    yH.prototype.j = function() {
        return new AH(this.g())
    };
    var zH = function(a) {
        this.g = a
    };
    w(zH, To);
    zH.prototype.next = function() {
        return this.g.next()
    };
    zH.prototype[Symbol.iterator] = function() {
        return new AH(this.g)
    };
    zH.prototype.j = function() {
        return new AH(this.g)
    };
    var AH = function(a) {
        yH.call(this, function() {
            return a
        });
        this.l = a
    };
    w(AH, yH);
    AH.prototype.next = function() {
        return this.l.next()
    };
    var CH = function(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof CH)
                for (c = a.yc(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    l = CH.prototype;
    l.Db = function() {
        DH(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.j[this.g[b]]);
        return a
    };
    l.yc = function() {
        DH(this);
        return this.g.concat()
    };
    l.has = function(a) {
        return EH(this.j, a)
    };
    l.isEmpty = function() {
        return 0 == this.size
    };
    l.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    };
    l.remove = function(a) {
        return this.delete(a)
    };
    l.delete = function(a) {
        return EH(this.j, a) ? (delete this.j[a], --this.size, this.l++, this.g.length > 2 * this.size && DH(this), !0) : !1
    };
    var DH = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                EH(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], EH(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    l = CH.prototype;
    l.get = function(a, b) {
        return EH(this.j, a) ? this.j[a] : b
    };
    l.set = function(a, b) {
        EH(this.j, a) || (this.size += 1, this.g.push(a), this.l++);
        this.j[a] = b
    };
    l.forEach = function(a, b) {
        for (var c = this.yc(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    l.keys = function() {
        return BH(this.zb(!0)).j()
    };
    l.values = function() {
        return BH(this.zb(!1)).j()
    };
    l.entries = function() {
        var a = this;
        return Ex(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    l.zb = function(a) {
        DH(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new To;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return Uo;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        };
        return e
    };
    var EH = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var GH = function() {
        R.call(this);
        this.currentTime = this.C = 0;
        this.duration = NaN;
        this.j = !0;
        this.volume = 1;
        this.muted = !1;
        this.H = 1;
        this.playbackRate = 0;
        this.G = null;
        this.o = 0;
        this.l = this.g = null;
        this.buffered = new FH;
        this.J = new FH;
        this.F = "";
        this.tagName = "VIDEO";
        this.height = this.width = 0;
        this.canPlayType = function() {
            return ""
        };
        this.B = new iy(this);
        go(this, this.B);
        var a = EC(GC);
        a && (this.duration = BC(a))
    };
    w(GH, R);
    var HH = function() {
        var a = ["video/mp4"],
            b = ["video/ogg"],
            c = new GH;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        };
        return c
    };
    l = GH.prototype;
    l.pause = function() {
        if (!this.j) {
            var a;
            null == (a = this.G) || a.stop();
            this.j = !0;
            this.dispatchEvent("timeupdate");
            this.dispatchEvent("pause")
        }
    };
    l.load = function() {
        this.C = 0;
        this.j = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
        this.setProperty("duration", a);
        a = this.J;
        a.g.push(new IH(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new IH(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.H
    };
    l.setProperty = function(a, b) {
        switch (a) {
            case "currentTime":
                a = Number(b);
                this.dispatchEvent("seeking");
                this.currentTime = a;
                this.dispatchEvent("seeked");
                a = Date.now() - this.o;
                b = this.currentTime + a / 1E3;
                this.o += a;
                2 < this.C && (this.currentTime = Math.min(b, this.duration));
                this.dispatchEvent("timeupdate");
                if (this.currentTime === this.duration) {
                    this.j = !0;
                    var c;
                    null == (c = this.G) || c.stop();
                    this.dispatchEvent("ended")
                }
                break;
            case "duration":
                this.duration = Number(b);
                this.dispatchEvent("durationchange");
                break;
            case "volume":
                this.setVolume(Number(b));
                break;
            default:
                throw Error("Property setter not implemented");
        }
    };
    l.setVolume = function(a) {
        this.volume = a;
        this.dispatchEvent("volumechange")
    };
    l.setAttribute = function(a, b) {
        null != a && JH.set(a, b)
    };
    l.getAttribute = function(a) {
        return JH.get(a)
    };
    l.ug = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.l && (this.l.innerText = b);
        c && this.g && (this.g.style.backgroundColor = c)
    };
    ea.Object.defineProperties(GH.prototype, {
        src: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.F
            },
            set: function(a) {
                this.F = a
            }
        }
    });
    var JH = new CH,
        IH = function(a) {
            this.startTime = 0;
            this.endTime = a
        },
        FH = function() {
            this.length = 0;
            this.g = []
        };
    FH.prototype.start = function(a) {
        return this.g[a].startTime
    };
    FH.prototype.end = function(a) {
        return this.g[a].endTime
    };
    var LH = function(a) {
        Q.call(this);
        this.A = a;
        this.l = this.g = null;
        this.j = KH(this);
        this.g = ji("DIV", {
            style: "display:none;"
        });
        this.A.appendChild(this.g);
        this.g.appendChild(this.j);
        this.l = ji("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        });
        this.g.appendChild(this.l);
        tB(function() {
            L(K.getInstance(), "haob", "1")
        })
    };
    w(LH, Q);
    LH.prototype.initialize = function() {
        this.j && this.j.load()
    };
    LH.prototype.L = function() {
        ki(this.g);
        Q.prototype.L.call(this)
    };
    var KH = function(a) {
            var b = EC(GC);
            if (AC(b, "useVideoElementFake")) a = HH(), b = ji("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            }), Object.assign(b, a), a.g = ji("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            }), a.l = ji("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            }), a.g.appendChild(a.l), b.appendChild(a.g), a.B.O(a, ["loadeddata", "playing", "pause", "ended"], a.ug), a = b;
            else {
                b = !1;
                try {
                    -1 !== window.location.search.indexOf("goog_limavideo=true") &&
                        (b = !0)
                } catch (c) {}
                if (MH(a, b)) {
                    b && console.log("force lima video in wrapper");
                    a = null;
                    try {
                        a = new FB
                    } catch (c) {
                        a = ji("lima-video"), M(Jk) && W.getInstance().report(153, {
                            limvid: "firefail"
                        })
                    }
                    a.style.backgroundColor = "#000";
                    a.style.height = "100%";
                    a.style.width = "100%";
                    a.style.position = "absolute";
                    a.style.left = "0";
                    a.style.top = "0"
                } else a = ji("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: "Advertisement".toString()
                })
            }
            a.setAttribute("webkit-playsinline", "true");
            a.setAttribute("playsinline",
                "true");
            return a
        },
        MH = function(a, b) {
            if (!x.customElements) return !1;
            if (b) return !0;
            if (Hb() && $h(a.A) !== document) return !1;
            M(Jk) && W.getInstance().report(153, {
                limvid: "vw"
            });
            return M(Ik) || M(Jk) || M(Gk) || M(Hk) ? !0 : !1
        };
    LH.prototype.Qb = function() {
        return this.l
    };
    LH.prototype.ib = function() {
        var a = this.g;
        null != a && (a.style.display = "none")
    };
    var QH = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (null == a || !mi($h(d), d)) throw VD(UD, null, "containerElement", "element");
        this.j = b;
        this.P = mD(this.j || null);
        this.N = Sx(this.j || null);
        this.J = String(Math.floor(1E9 * Math.random()));
        this.F = !1;
        this.Tc = a;
        this.H = null != b;
        GC.g = 2;
        this.I = NH(b ? b : null);
        d = ji("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.A = d;
        this.g = null;
        OH(this) && b ? a = new tH(b) : (this.g = new LH(this.A), a = new tH(this.g.j));
        this.fa = a;
        this.Aa = this.l = null;
        if (a = this.g && GC.A) a = !(OH(this) || uc || wc || An() || tc && (!tc || !Px(Ox, 4)));
        a && (this.l = new LH(this.A), this.Aa = new tH(this.l.j));
        this.o = c || null;
        this.G = null != this.o;
        OH(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.A, GC.l = c) : c = b : c = this.A;
        this.C = c;
        this.B = new aH(this.A, this);
        this.size = new H(0, 0);
        this.M = "";
        b && (b = jx(b.src || b.currentSrc), 200 > b.toString().length ? this.M = b.toString() : 200 > b.j.length && (this.M = b.j));
        this.Wd = new Map;
        this.Wd.set("videoDisplay1", this.fa);
        this.Aa && this.Wd.set("videoDisplay2",
            this.Aa);
        PH(this) && !GC.j && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.")
    };
    l = QH.prototype;
    l.initialize = function() {
        this.F = !0;
        null != this.g && this.g.initialize();
        null != this.l && this.l.initialize()
    };
    l.va = function() {
        return this.F
    };
    l.destroy = function() {
        var a = this;
        this.j = null;
        eo(this.g);
        eo(this.l);
        eo(this.B);
        this.fa.fc(function() {
            return eo(a.fa)
        });
        null != this.Aa && this.Aa.fc(function() {
            return eo(a.Aa)
        });
        ki(this.A)
    };
    l.Yc = function() {
        if (null != this.g) {
            var a = this.g.g;
            null != a && (a.style.display = "block")
        }
    };
    l.hc = function(a) {
        this.fa !== a && this.g && this.l && this.Aa && (a.setVolume(this.fa.getVolume()), a = this.fa, this.fa = this.Aa, this.Aa = a, a = this.g, this.g = this.l, this.l = a, this.l.ib(), this.B.hc(this.fa))
    };
    l.ib = function() {
        null != this.g && this.g.ib()
    };
    l.Qb = function() {
        return this.G && this.o ? this.o : null != this.g ? this.g.Qb() : null
    };
    var OH = function(a) {
            return lD(a.I) && a.H
        },
        PH = function(a) {
            var b = ["VIDEO", "AUDIO"],
                c;
            return OH(a) && !!a.j && !b.includes(null == (c = a.j.tagName) ? void 0 : c.toUpperCase())
        };
    QH.prototype.getSize = function() {
        return this.size
    };
    var NH = function(a) {
        return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1
    };
    QH.prototype.Jd = function(a) {
        this.fa.Jd(a)
    };
    QH.prototype.Kd = function() {
        this.fa.Kd()
    };
    QH.prototype.destroy = QH.prototype.destroy;
    QH.prototype.initialize = QH.prototype.initialize;
    var RH = {
            AD_LOAD: "adLoadError",
            AD_PLAY: "adPlayError"
        },
        SH = function(a) {
            var b = Error.call(this);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.data = a
        };
    w(SH, Error);
    l = SH.prototype;
    l.getInnerError = function() {
        var a = this.data.innerError;
        return a instanceof Object ? new SH(a) : null != a ? Error(a) : null
    };
    l.getMessage = function() {
        return this.data.errorMessage
    };
    l.getErrorCode = function() {
        return this.data.errorCode
    };
    l.getVastErrorCode = function() {
        var a = this.getErrorCode();
        return 1E3 > a ? a : 900
    };
    l.getType = function() {
        return this.data.type
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    };
    SH.prototype.getType = SH.prototype.getType;
    SH.prototype.getVastErrorCode = SH.prototype.getVastErrorCode;
    SH.prototype.getErrorCode = SH.prototype.getErrorCode;
    SH.prototype.getMessage = SH.prototype.getMessage;
    SH.prototype.getInnerError = SH.prototype.getInnerError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", RH);
    var TH = {
            AD_ERROR: "adError"
        },
        UH = function(a, b) {
            b = void 0 === b ? null : b;
            ks.call(this, "adError");
            this.error = a;
            this.g = b
        };
    w(UH, ks);
    UH.prototype.getError = function() {
        return this.error
    };
    UH.prototype.getUserRequestContext = function() {
        return this.g
    };
    UH.prototype.getUserRequestContext = UH.prototype.getUserRequestContext;
    UH.prototype.getError = UH.prototype.getError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", TH);
    var VH = {
            AD_CAN_PLAY: "adCanPlay",
            Vg: "adStarted",
            CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
            CONTENT_RESUME_REQUESTED: "contentResumeRequested",
            CLICK: "click",
            VIDEO_CLICKED: "videoClicked",
            VIDEO_ICON_CLICKED: "videoIconClicked",
            Xd: "engagedView",
            EXPANDED_CHANGED: "expandedChanged",
            STARTED: "start",
            AD_PROGRESS: "adProgress",
            AD_BUFFERING: "adBuffering",
            IMPRESSION: "impression",
            ce: "measurable_impression",
            VIEWABLE_IMPRESSION: "viewable_impression",
            Yd: "fully_viewable_audible_half_duration_impression",
            nf: "overlay_resize",
            qf: "overlay_unmeasurable_impression",
            rf: "overlay_unviewable_impression",
            tf: "overlay_viewable_immediate_impression",
            sf: "overlay_viewable_end_of_session_impression",
            oh: "externalActivityEvent",
            PAUSED: "pause",
            RESUMED: "resume",
            FIRST_QUARTILE: "firstQuartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdQuartile",
            COMPLETE: "complete",
            DURATION_CHANGE: "durationChange",
            USER_CLOSE: "userClose",
            hi: "userRecall",
            Vh: "prefetched",
            LOADED: "loaded",
            ALL_ADS_COMPLETED: "allAdsCompleted",
            SKIPPED: "skip",
            xf: "skipShown",
            LINEAR_CHANGED: "linearChanged",
            SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
            AD_METADATA: "adMetadata",
            AD_BREAK_FETCH_ERROR: "adBreakFetchError",
            AD_BREAK_READY: "adBreakReady",
            LOG: "log",
            VOLUME_CHANGED: "volumeChange",
            VOLUME_MUTED: "mute",
            INTERACTION: "interaction",
            ah: "companionBackfill",
            fi: "trackingUrlPinged",
            ji: "video_card_endcap_collapse",
            ki: "video_card_endcap_dismiss",
            li: "video_card_endcap_impression",
            fh: "companionInitialized",
            eh: "companionImpression",
            bh: "companionClick",
            Ph: "mediaUrlPinged",
            LOAD_START: "loadStart",
            Rh: "navigationRequested"
        },
        WH = function(a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? null : c;
            ks.call(this, a);
            this.ad = b;
            this.l = c
        };
    w(WH, ks);
    WH.prototype.getAd = function() {
        return this.ad
    };
    WH.prototype.getAdData = function() {
        return this.l
    };
    WH.prototype.getAdData = WH.prototype.getAdData;
    WH.prototype.getAd = WH.prototype.getAd;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", VH);
    var XH = function(a, b) {
        b = void 0 === b ? null : b;
        WH.call(this, "adMetadata", a);
        this.g = b
    };
    w(XH, WH);
    XH.prototype.Of = function() {
        return this.g
    };
    XH.prototype.getAdCuePoints = XH.prototype.Of;
    var YH = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var ZH = function(a, b) {
        R.call(this);
        this.l = a;
        this.B = b;
        this.j = this.l.currentTime;
        this.g = new pt(250);
        go(this, this.g);
        this.o = new iy(this);
        go(this, this.o);
        ky(this.o, this.g, "tick", this.C, !1, this)
    };
    w(ZH, R);
    ZH.prototype.sb = function() {
        return this.j
    };
    ZH.prototype.start = function() {
        $H(this);
        this.g.start()
    };
    ZH.prototype.stop = function() {
        this.g.stop()
    };
    ZH.prototype.C = function() {
        var a = this.l.currentTime;
        a !== this.sb() && (this.j = a, $H(this))
    };
    var $H = function(a) {
        var b = {};
        b.currentTime = a.sb();
        GD(a.B, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var aI = rc && "srcdoc" in hi(document, "IFRAME"),
        bI = function(a, b) {
            a.open("text/html", "replace");
            Ph(a, sj(String(b)));
            a.close()
        };
    var cI = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        dI = function(a) {
            a = qb(a);
            if ("" == a) return null;
            var b = String(a.slice(0, 4)).toLowerCase();
            if (0 == ("url(" <
                    b ? -1 : "url(" == b ? 0 : 1)) return null;
            if (0 < a.indexOf("(")) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in cI)) return null
            }
            return a
        };

    function eI(a, b) {
        a = x[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function fI(a) {
        var b = x.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    eI("Element", "attributes") || eI("Node", "attributes");
    eI("Element", "innerHTML") || eI("HTMLElement", "innerHTML");
    eI("Node", "nodeName");
    eI("Node", "nodeType");
    eI("Node", "parentNode");
    eI("Node", "childNodes");
    eI("HTMLElement", "style") || eI("Element", "style");
    eI("HTMLStyleElement", "sheet");
    var gI = fI("getPropertyValue"),
        hI = fI("setProperty");
    eI("Element", "namespaceURI") || eI("Node", "namespaceURI");

    function iI(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (oc && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var jI = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        lI = function(a) {
            if (!a) return Eh;
            var b = document.createElement("div").style;
            kI(a).forEach(function(c) {
                var d = rc && c in jI ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = iI(gI, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = dI(c), null != c && iI(hI, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
            });
            return new Dh(b.cssText ||
                "", Ch)
        },
        kI = function(a) {
            Sa(a) ? a = ec(a) : (a = eh(a), $b(a, "cssText"));
            return a
        };
    var mI = ha([""]),
        nI = function(a, b, c) {
            R.call(this);
            this.j = a;
            this.o = b;
            this.C = c;
            this.g = null;
            this.F = "";
            this.G = Jh(mI);
            this.H = 0;
            this.B = this.slot = this.l = null;
            this.sessionId = ""
        };
    w(nI, R);
    nI.prototype.init = function(a) {
        this.sessionId = a;
        a = "about:blank";
        oc && (a = "");
        this.l = ji("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent",
            title: "Advertisement"
        });
        an(this.l, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.j.Tc;
        a.appendChild(this.l);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        null == this.B && (this.B = new iy(this));
        this.B.O(a, "message", this.J);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.sessionId +
            '");\x3c/script></body>');
        if (Kc || Ic || pc) {
            var b = this.l.contentWindow;
            b && bI(b.document, a)
        } else b = this.l, aI ? (a = sj(a), b.srcdoc = Hh(a)) : (b = b.contentWindow) && bI(b.document, a)
    };
    nI.prototype.J = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (v) {
                return
            }
            var d = c.session;
            if (null != d && this.sessionId === d) switch (c.type) {
                case "friendlyReady":
                    var e = oI(this);
                    if (null != e) {
                        this.g = e;
                        this.F = e.currentSrc;
                        var f = e.style.cssText;
                        if (oc && 10 > document.documentMode) var g = Eh;
                        else {
                            var h = document.implementation.createHTMLDocument("").createElement("DIV");
                            h.style.cssText = f;
                            g = lI(h.style)
                        }
                        this.G = g;
                        this.H = e.currentTime
                    } else {
                        var k = this.j.Tc,
                            m = "border: 0; margin: 0; padding: 0; position: absolute; ",
                            n = this.j.getSize();
                        m += "width:" + n.width + "px;";
                        m += "height:" + n.height + "px;";
                        this.g = ji("VIDEO", {
                            style: m,
                            autoplay: !0
                        });
                        k.appendChild(this.g)
                    }
                    var p = this.j.Tc;
                    k = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var q = kn(this.g);
                    k += "width:" + q.width + "px;";
                    k += "height:" + q.height + "px;";
                    this.slot = ji("DIV", {
                        style: k
                    });
                    p.appendChild(this.slot);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.slot)
                    } catch (v) {
                        pI(this)
                    }
                    GD(this.o, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !qi() && !pi() && an(this.g, {
                        visibility: "visible"
                    });
                    GD(this.o, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    qI(this);
                    GD(this.o, "vpaid", "", b);
                    break;
                case "startAd":
                    p = {};
                    if (this.g) {
                        m = this.g.paused;
                        var t = 0 < this.g.currentTime;
                        p.apl = t && !m ? "1" : "0";
                        p.ip = m ? "1" : "0";
                        p.iavp = t ? "1" : "0"
                    } else p.apl = "n";
                    W.getInstance().report(99, p);
                    GD(this.o, "vpaid", "", b);
                    this.Yc();
                    break;
                default:
                    GD(this.o, "vpaid", "", b)
            }
        } catch (v) {
            pI(this)
        }
    };
    var pI = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.sessionId;
        b = JSON.stringify(b);
        a.postMessage(b)
    };
    nI.prototype.postMessage = function(a) {
        window.postMessage(a, "*")
    };
    var oI = function(a) {
        return ("videoDisplayUnknown" === a.C ? a.j.fa : a.j.Wd.get(a.C)).P.g
    };
    nI.prototype.Yc = function() {
        null != oI(this) && this.j.Yc()
    };
    var qI = function(a) {
        a.g && !qi() && !pi() && an(a.g, {
            visibility: "hidden"
        })
    };
    nI.prototype.L = function() {
        eo(this.B);
        this.B = null;
        ki(this.slot);
        this.slot = null;
        ki(this.l);
        this.l = null;
        var a = oI(this);
        if (null != a) {
            var b = this.G;
            a.style.cssText = b instanceof Dh && b.constructor === Dh ? b.g : "type_error:SafeStyle";
            qi() || pi() ? (a.src = this.F, a.currentTime = this.H) : (a.removeAttribute("src"), this.j.ib())
        } else ki(this.g), this.g = null;
        R.prototype.L.call(this)
    };
    var rI = function(a, b) {
        Q.call(this);
        this.j = a;
        this.l = b;
        this.g = new Map
    };
    w(rI, Q);
    var sI = function(a, b) {
        try {
            var c = b.na,
                d = c.session;
            switch (c.vpaidEventType) {
                case "createFriendlyIframe":
                    b = "videoDisplayUnknown";
                    c.videoDisplayName && (b = c.videoDisplayName);
                    var e = c.session,
                        f = new nI(a.j, a.l, b);
                    a.g.set(e, f);
                    f.init(e);
                    break;
                case "vpaidNonLinear":
                    var g = a.g.get(d);
                    g && qI(g);
                    break;
                case "destroyFriendlyIframe":
                    var h = a.g.get(d);
                    h && (h.X(), a.g.delete(d))
            }
        } catch (k) {
            W.getInstance().report(125, {
                msg: k.message
            })
        }
    };
    rI.prototype.L = function() {
        this.g.forEach(function(a) {
            a.X()
        })
    };
    var tI = function(a) {
        this.K = B(a)
    };
    w(tI, F);
    tI.prototype.getValue = function() {
        return E(this, 1)
    };
    tI.prototype.getVersion = function() {
        return Mf(this, 5)
    };
    var uI = Mg(tI);
    var vI = function() {
            this.g = window;
            this.j = 0
        },
        wI = function(a, b) {
            if (0 === a.j) {
                if (b && Iu("__gads", b, a.g)) b = !0;
                else {
                    var c = a.g;
                    If(b, 5) && "null" !== c.origin && Hu(c).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === Iu("GoogleAdServingTest", b, a.g)) {
                        var d = a.g;
                        If(b, 5) && "null" !== d.origin && Hu(d).remove("GoogleAdServingTest", void 0, void 0)
                    }
                    b = c
                }
                a.j = b ? 2 : 1
            }
            return 2 === a.j
        },
        xI = function(a, b, c, d) {
            if (d) {
                var e = Lf(c, 2) - Date.now() / 1E3;
                e = {
                    Hc: Math.max(e, 0),
                    path: E(c, 3),
                    domain: E(c, 4),
                    Je: !1
                };
                c = c.getValue();
                a = a.g;
                If(d, 5) && "null" !==
                    a.origin && Hu(a).set(b, c, e)
            }
        },
        yI = function(a, b, c) {
            if (c && Iu(b, c, a.g)) {
                var d = a.g.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = u(d);
                for (var g = d.next(); !g.done; g = d.next()) e = b, f = a.g, g = g.value, If(c, 5) && "null" !== f.origin && Hu(f).remove(e, "/", g)
            }
        };
    var zI = function() {
        this.g = [];
        this.j = []
    };
    l = zI.prototype;
    l.isEmpty = function() {
        return 0 === this.g.length && 0 === this.j.length
    };
    l.clear = function() {
        this.g = [];
        this.j = []
    };
    l.contains = function(a) {
        return Zb(this.g, a) || Zb(this.j, a)
    };
    l.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;0 > c && (c = Math.max(0, b.length + c));
            if ("string" === typeof b) c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
            else {
                for (; 0 <= c; c--)
                    if (c in b && b[c] === a) break b;
                c = -1
            }
        }
        0 <= c ? (ac(b, c), b = !0) : b = !1;
        return b || $b(this.j, a)
    };
    l.Db = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.j.length;
        for (b = 0; b < c; ++b) a.push(this.j[b]);
        return a
    };
    var Z = function(a, b, c, d, e, f, g, h) {
        R.call(this);
        var k = this;
        this.H = a;
        this.g = b;
        this.adTagUrl = c;
        this.da = d;
        this.Pa = e;
        this.F = g;
        this.Oa = h;
        this.o = new jG;
        this.N = !1;
        this.volume = 1;
        this.da = d;
        this.ba = -1;
        this.C = this.l = this.j = null;
        this.B = new ZH({
            currentTime: 0
        }, this.F);
        this.G = new zI;
        this.ka = this.W = !1;
        this.Y = new Map;
        this.aa = this.Ga = !1;
        this.Ha = new rI(b, g);
        go(this, this.Ha);
        this.J = f && null != this.g.o;
        this.P = function() {
            var m = k.g.fa,
                n = m.getCurrentTime();
            m = m.getDuration();
            return {
                currentTime: n,
                duration: m,
                isPlaying: !0,
                volume: k.volume
            }
        };
        this.U = new iy(this);
        this.U.O(this.F, "adsManager", this.Bb)
    };
    w(Z, R);
    Z.prototype.Bb = function(a) {
        var b = this,
            c = a.messageType,
            d = a.na,
            e = {};
        switch (c) {
            case "error":
                AI(this);
                BI(this, d);
                break;
            case "contentPauseRequested":
                W.getInstance().report(130);
                CI(this);
                this.B.stop();
                DI(this, c, d);
                break;
            case "contentResumeRequested":
                EI(this, function() {
                    DI(b, c, d)
                });
                break;
            case "remainingTime":
                this.ba = d.remainingTime;
                break;
            case "skip":
                DI(this, c, d);
                break;
            case "log":
                DI(this, c, d, d.logData);
                break;
            case "companionBackfill":
                a = Pa("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipShown":
                this.N = !0;
                DI(this, c, d);
                break;
            case "interaction":
                DI(this, c, d, d.interactionData);
                break;
            case "vpaidEvent":
                sI(this.Ha, a);
                break;
            case "skippableStateChanged":
                e = d.adData;
                null != e.skippable && (this.N = e.skippable);
                DI(this, c, d);
                break;
            case "volumeChange":
                e = d.adData;
                null != e && "number" === typeof e.volume && (this.volume = e.volume);
                DI(this, c, d);
                break;
            case "firstQuartile":
                DI(this, vD.firstQuartile, d);
                DI(this, c, d);
                break;
            case "thirdQuartile":
                DI(this, vD.thirdQuartile, d);
                DI(this, c, d);
                break;
            case "updateGfpCookie":
                FI(this, d);
                break;
            default:
                DI(this, c, d)
        }
    };
    var DI = function(a, b, c, d) {
            if (null == c.companions) {
                var e = a.Y.get(c.adId);
                c.companions = null != e ? e : []
            }
            var f = c.adData;
            if (e = null == f ? null : new Y(f)) a.j = e;
            switch (b) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new WH(b, null, c);
                    break;
                case "adMetadata":
                    b = null;
                    null != c.adCuePoints && (b = new hG(c.adCuePoints));
                    b = new XH(e, b);
                    break;
                case "allAdsCompleted":
                    a.j = null;
                    a.Ga = !0;
                    b = new WH(b, e);
                    break;
                case "contentPauseRequested":
                    a.aa = !1;
                    b = new WH(b, e);
                    break;
                case "contentResumeRequested":
                    a.j = null;
                    a.aa = !0;
                    b = new WH(b, e);
                    break;
                case "loaded":
                    a.ba =
                        e.getDuration();
                    a.N = !1;
                    nD() && (d = a.H, c = a.Pa, d.j.set(gG(e), a.P), kH(d) && jH(d, "loaded", gG(e), c));
                    b = new WH(b, e, f);
                    break;
                case "start":
                    a.Y.set(c.adId, c.companions);
                    null != a.g.Qb() && (null == a.l ? (a.l = new sF, a.U.O(a.l, "click", a.rg)) : wF(a.l), uF(a.l, a.g.Qb()));
                    b = new WH(b, e);
                    break;
                case "complete":
                    null != a.l && wF(a.l);
                    nD() && mH(a.H, a.P, gG(e));
                    a.j = null;
                    a.Y.delete(c.adId);
                    b = new WH(b, e);
                    break;
                case "log":
                    c = null;
                    null != d && null != d.type ? (f = d.type, f = "adLoadError" === f || "adPlayError" === f) : f = !1;
                    f && (c = {
                        adError: new SH(d)
                    });
                    b = new WH(b,
                        e, c);
                    break;
                case "interaction":
                    b = new WH(b, e, d);
                    break;
                case "adProgress":
                    b = new WH(b, e, new YH(c));
                    break;
                default:
                    b = new WH(b, e)
            }
            a.dispatchEvent(b);
            a.Ga && a.aa && a.destroy()
        },
        BI = function(a, b) {
            var c = new UH(new SH(b));
            a.W ? (a.dispatchEvent(c), nD() && a.j && mH(a.H, a.P, gG(a.j)), a.j = null) : a.G.j.push(c);
            a = {
                error: b.errorCode,
                vis: ej(document)
            };
            W.getInstance().report(7, a)
        },
        GI = function(a, b, c) {
            GD(a.F, "adsManager", b, c)
        },
        EI = function(a, b) {
            W.getInstance().report(131);
            AI(a, b);
            a.Ca() || a.B.start()
        },
        CI = function(a) {
            var b = a.g.fa;
            OH(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != b.be && b.be()
        },
        AI = function(a, b) {
            var c = a.g.fa;
            OH(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != c.fc ? c.fc(b) : b && b()
        };
    l = Z.prototype;
    l.configureAdsManager = function(a, b) {
        this.C = a;
        null != a.currentTime && (this.B = new ZH(a, this.F), this.B.start());
        null != b && (this.o = HI(b))
    };
    l.init = function(a, b, c, d) {
        if (this.G.isEmpty()) {
            var e = this.g,
                f = null;
            e.j && null == d && (f = {
                vd: "setnull"
            });
            e.j && e.j === d && (f = {
                vd: "match"
            });
            if (e.j && e.j !== d) {
                f = mD(d || null);
                var g = Sx(d || null);
                f = {
                    vd: "diff",
                    oc: e.P,
                    nc: f,
                    oi: e.N,
                    ni: g
                }
            }!e.j && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.J, W.getInstance().report(93, f));
            null != d && (e.I = NH(d), lD(e.I) && (e.H = !0, eo(e.g), eo(e.l), eo(e.Aa), e.g = null, e.l = null, e.Aa = null, eo(e.fa), e.fa = new tH(d), "function" !== typeof d.getBoundingClientRect ? (e.C = e.A, GC.l = e.C) : e.C = d, e.B.hc(e.fa)));
            this.W = !0;
            this.resize(a,
                b, c);
            d = kG(this.o, this.J);
            e = {};
            a = (e.adsRenderingSettings = d, e.width = a, e.height = b, e.viewMode = c, e);
            GI(this, "init", a)
        } else {
            for (; !this.G.isEmpty();) b = a = this.G, 0 === b.g.length && (b.g = b.j, b.g.reverse(), b.j = []), a = a.g.pop(), this.dispatchEvent(a);
            this.X()
        }
    };
    l.isCustomPlaybackUsed = function() {
        return OH(this.g)
    };
    l.isCustomClickTrackingUsed = function() {
        return this.J
    };
    l.getRemainingTime = function() {
        return this.ba
    };
    l.getAdSkippableState = function() {
        return this.N
    };
    l.discardAdBreak = function() {
        GI(this, "discardAdBreak")
    };
    l.updateAdsRenderingSettings = function(a) {
        if (null != a) {
            a = HI(a);
            var b = this.o.bitrate,
                c = a.bitrate;
            W.getInstance().report(96, {
                init: this.W ? "1" : "0",
                start: this.ka ? "1" : "0",
                old: b,
                "new": c,
                changed: b !== c ? "1" : "0"
            });
            this.o = a;
            a = kG(this.o, this.J);
            b = {};
            a = (b.adsRenderingSettings = a, b);
            GI(this, "updateAdsRenderingSettings", a)
        }
    };
    l.skip = function() {
        GI(this, "skip")
    };
    l.start = function() {
        if (this.adTagUrl) {
            (uc || wc) && W.getInstance().report(50, {
                customPlayback: OH(this.g)
            });
            this.g.va() || W.getInstance().report(26, {
                adtagurl: this.adTagUrl,
                customPlayback: OH(this.g)
            });
            un(this.g.A) && W.getInstance().report(30, {
                adtagurl: this.adTagUrl,
                customPlayback: OH(this.g)
            });
            var a = this.g.o,
                b = this.g.A,
                c;
            if (c = a && b && !un(a)) a = hH(a), b = hH(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            b = c;
            W.getInstance().report(31, {
                adtagurl: this.adTagUrl,
                customPlayback: OH(this.g),
                covers: b
            })
        }
        if (!this.g.va() && !OH(this.g)) throw VD(TD);
        b = this.g;
        b.G = this.J && null != b.o;
        this.g.B.g.style.opacity = "1";
        if (null != this.C && 1 === this.getVolume()) {
            var d, e;
            if ("boolean" === typeof(null == (d = this.C) ? void 0 : d.muted) && (null == (e = this.C) ? 0 : e.muted)) this.setVolume(0);
            else {
                var f;
                if ("number" === typeof(null == (f = this.C) ? void 0 : f.volume)) {
                    var g;
                    d = null == (g = this.C) ? void 0 : g.volume;
                    if (0 <= d && 1 >= d) {
                        var h;
                        this.setVolume(null == (h = this.C) ? void 0 : h.volume)
                    }
                }
            }
        }
        this.ka = !0;
        GI(this, "start")
    };
    l.rg = function() {
        if (!this.o.disableClickThrough && null != this.j) {
            var a = this.j.data.clickThroughUrl;
            null != a && Bx(a, this.j.data.attributionParams)
        }
    };
    l.resize = function(a, b, c) {
        var d = this.g,
            e = d.A;
        null != e && (-1 === a ? (e.style.right = "0", e.style.left = "0") : e.style.width = a + "px", -1 === b ? (e.style.bottom = "0", e.style.top = "0") : e.style.height = b + "px");
        e = d.B;
        e.g.width = -1 === a ? "100%" : String(a);
        e.g.height = -1 === b ? "100%" : String(b);
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.size = new H(a, b);
        d = {};
        a = (d.width = a, d.height = b, d.viewMode = c, d);
        GI(this, "resize", a)
    };
    l.stop = function() {
        GI(this, "stop")
    };
    l.expand = function() {
        GI(this, "expand")
    };
    l.collapse = function() {
        GI(this, "collapse")
    };
    l.getVolume = function() {
        return this.volume
    };
    l.setVolume = function(a) {
        this.volume = a;
        this.g.fa.setVolume(a);
        var b = {};
        a = (b.volume = a, b);
        GI(this, "volume", a)
    };
    l.pause = function() {
        GI(this, "pause")
    };
    l.resume = function() {
        GI(this, "resume")
    };
    l.destroy = function() {
        this.X()
    };
    l.getCuePoints = function() {
        return this.da
    };
    l.Pf = function() {
        return this.j
    };
    l.L = function() {
        GI(this, "destroy");
        null != this.l && this.l.X();
        this.U.X();
        this.G.clear();
        this.B && (this.B.stop(), this.B.X());
        nD() && mH(this.H, this.P);
        R.prototype.L.call(this)
    };
    l.Hf = function() {
        W.getInstance().report(124, {
            api: "clicked"
        });
        var a = this.j && this.j.data.clickThroughUrl,
            b;
        if (a && (null == (b = this.j) ? 0 : b.ye())) {
            var c;
            Bx(a, null == (c = this.j) ? void 0 : c.data.attributionParams)
        }
        GI(this, "click")
    };
    l.focus = function() {
        GD(this.F, "userInteraction", "focusUiElement")
    };
    var FI = function(a, b) {
        var c = b.gfpCookieUserEnabled;
        b = b.gfpCookieClearData;
        var d = new tI;
        d = Pf(d, 1, c ? "0" : "1");
        d = C(d, 2, pe(2147483647));
        d = Pf(d, 3, "/");
        d = Pf(d, 4, window.location.hostname);
        var e = new vI,
            f, g;
        a = null != (g = null == (f = a.Oa) ? void 0 : QC(f)) ? g : null;
        xI(e, "__gpi_opt_out", d, a);
        if (!c || b) yI(e, "__gads", a), yI(e, "__gpi", a)
    };
    Z.prototype.clicked = Z.prototype.Hf;
    Z.prototype.getCurrentAd = Z.prototype.Pf;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
    Z.prototype.init = Z.prototype.init;

    function HI(a) {
        if (a instanceof jG) return W.getInstance().report(174, {
            valid: !0
        }), a;
        W.getInstance().report(174, {
            valid: !1
        });
        var b = new jG;
        b.append(a);
        return b
    };
    var II = {
            ADS_MANAGER_LOADED: "adsManagerLoaded"
        },
        JI = function(a, b) {
            ks.call(this, "adsManagerLoaded");
            this.g = a;
            this.l = b
        };
    w(JI, ks);
    JI.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        this.g.configureAdsManager(a, b);
        return this.g
    };
    JI.prototype.getUserRequestContext = function() {
        return this.l
    };
    JI.prototype.getUserRequestContext = JI.prototype.getUserRequestContext;
    JI.prototype.getAdsManager = JI.prototype.getAdsManager;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", II);
    var KI = function() {
        this.continuousPlayback = this.adWillPlayMuted = this.adWillAutoPlay = null;
        this.descriptionUrl = "";
        this.iconsSupported = !1;
        this.nonceLengthLimit = Number.MAX_SAFE_INTEGER;
        this.ppid = this.playerVersion = this.playerType = this.omidVersion = this.omidPartnerVersion = this.omidPartnerName = "";
        this.sessionId = AF;
        this.skippablesSupported = !1;
        this.supportedApiFrameworks = [];
        this.videoWidth = this.videoHeight = -1;
        this.url = ""
    };
    z("goog.pal.NonceRequest", KI);
    var LI = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.wa({
                    uc: null != c ? c : void 0,
                    wc: d ? void 0 : 2
                })
            })
        },
        MI = {
            Gc: function(a) {
                return a.wa
            },
            Yb: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Gb: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    uc: null != (c = b.returnValue) ? c : void 0,
                    wc: b.success ? void 0 : 2
                })
            }
        };

    function NI(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Ae: b.__uspapiReturn.callId
        }
    }
    var OI = function(a, b) {
        b = void 0 === b ? {} : b;
        Q.call(this);
        var c;
        this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
        this.caller = new ww(a, "__uspapiLocator", function(d) {
            return "function" === typeof d.__uspapi
        }, NI);
        this.caller.o.set("getDataWithCallback", LI);
        this.caller.A.set("getDataWithCallback", MI)
    };
    w(OI, Q);
    OI.prototype.L = function() {
        this.caller.X();
        Q.prototype.L.call(this)
    };
    var PI = function(a, b) {
        var c = {};
        if (xw(a.caller)) {
            var d = Qg(function() {
                b(c)
            });
            zw(a.caller, "getDataWithCallback", {
                wa: function(e) {
                    e.wc || (c = e.uc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var Mu = function() {
        this.g = window
    };

    function QI() {
        var a = window,
            b, c;
        return null != (c = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }).find(function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };

    function RI(a, b) {
        var c, d, e;
        null == b ? e = void 0 : e = b.get.call(b, a);
        return null != (d = null != (c = e) ? c : null == b ? void 0 : b.get(Di(a))) ? d : 0
    };
    var SI = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        TI = new Map;

    function UI(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, m, n, p = null != (n = null == (g = f(null != (k = b.Ob) ? k : "")) ? void 0 : g.bids) ? n : null == (h = f(null != (m = b.adUnitCode) ? m : "")) ? void 0 : h.bids;
            if (null != p && p.length && (g = p.filter(function(v) {
                    var y = v.adId;
                    return v.auctionId !== c && Object.values(d).some(function(ca) {
                        return ca.includes(y)
                    })
                }), g.length)) {
                var q, t;
                f = null == (q = e.adUnits) ? void 0 : null == (t = q.find(function(v) {
                    v = v.code;
                    return v === b.Ob || v === b.adUnitCode
                })) ? void 0 : t.mediaTypes;
                q = u(g);
                for (t = q.next(); !t.done; t =
                    q.next()) t = t.value, g = VI(t, d, f), g = du(a, Yt(Of(Zt(Xt(new Wt, t.bidder), 1), 6, !0), g)), WI(t.bidder, e, g), "number" === typeof t.timeToRespond && C(g, 2, pe(Math.round(t.timeToRespond)))
            }
        }
    }

    function WI(a, b, c) {
        for (var d = []; a && !d.includes(a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        uf(c, 10, d, we)
    }

    function XI(a, b, c) {
        null != ke(jf(a, 3)) || (c === b.adUnitCode ? C(a, 3, je(1)) : c === b.Ob && C(a, 3, je(2)))
    }

    function YI(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : Mf(f, 1)) && Bf(b, 5, f);
        void 0 !== wf(a, Rt, 5, !1) || (f ? 1 === Mf(f, 1) ? eu(a, f) : eu(a, Ut(St(Tt(new Rt, e), 1), RI(c, d))) : eu(a, St(Tt(new Rt, e), RI(c, d) ? 2 : 3)))
    }

    function VI(a, b, c) {
        var d = a.cpm,
            e = a.originalCpm,
            f = a.currency,
            g = a.originalCurrency,
            h = a.dealId,
            k = a.adserverTargeting,
            m = a.bidder,
            n = a.adId,
            p = a.mediaType,
            q = a.height,
            t = a.width,
            v = new Pt;
        "number" === typeof d && (C(v, 2, pe(Math.round(1E6 * d))), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === Lf(v, 2) || C(v, 8, pe(d))));
        "string" === typeof f && Pf(v, 3, f);
        ["string", "number"].includes(typeof h) && (f = new Jt, h = Pf(f, 1, String(h)), Bf(v, 6, h));
        if ("object" === typeof k)
            for (h = u(["", "_" + m]), f = h.next(); !f.done; f = h.next()) {
                d = f.value;
                f = [];
                e = u(Object.entries(k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = u(g.value);
                    var y = g.next().value;
                    g = g.next().value;
                    y = ("" + y + d).slice(0, 20);
                    var ca = void 0;
                    if (null != (ca = b[y]) && ca.length)
                        if (b[y][0] === String(g)) f.push(y);
                        else {
                            f = [];
                            break
                        }
                }
                d = mf(v, 4, ye);
                uf(v, 4, d.concat(f), we)
            }
        switch (p || "banner") {
            case "banner":
                C(v, 5, je(1));
                break;
            case "native":
                C(v, 5, je(2));
                break;
            case "video":
                C(v, 5, je(3));
                b = new Nt;
                var X;
                if ("adpod" === (null == c ? void 0 : null == (X = c.video) ? void 0 : X.context)) {
                    var pa, ya = null == c ? void 0 : null == (pa = c.video) ?
                        void 0 : pa.adPodDurationSec;
                    C(b, 1, pe(ya))
                } else pa = null == c ? void 0 : null == (ya = c.video) ? void 0 : ya.maxduration, C(b, 1, pe(pa));
                var Aa;
                if ("number" === typeof(null == c ? void 0 : null == (Aa = c.video) ? void 0 : Aa.skip)) {
                    var Ba;
                    c = !!(null == c ? 0 : null == (Ba = c.video) ? 0 : Ba.skip);
                    Of(b, 2, c)
                }
                var bc;
                a = null == (bc = a.meta) ? void 0 : bc.adServerCatId;
                bc = Pf(b, 3, a);
                if ("object" !== typeof k) k = null;
                else {
                    var Xa, sb;
                    a = String(null != (sb = null != (Xa = k["hb_pb_cat_dur_" + m]) ? Xa : k.hb_pb_cat_dur) ? sb : "");
                    var Bb, tb, Ce, Nb;
                    Xa = String(null != (Nb = null != (Ce = null != (tb =
                        null != (Bb = k["hb_cache_id_" + m]) ? Bb : k["hb_uuid_" + m]) ? tb : k.hb_cache_id) ? Ce : k.hb_uuid) ? Nb : "");
                    k = a && Xa ? a + "_" + Xa : Xa ? Xa : null
                }
                Pf(bc, 4, k);
                Bf(v, 9, b)
        }
        Number.isFinite(q) && Number.isFinite(t) && (k = new Lt, t = C(k, 1, me(Math.round(t))), q = C(t, 2, me(Math.round(q))), Bf(v, 7, q));
        "string" === typeof n && Pf(v, 1, n);
        return v
    }

    function ZI(a, b) {
        var c = new Map,
            d = function(k) {
                var m = c.get(k);
                m || (m = {}, c.set(k, m));
                return m
            },
            e = [];
        a = u(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, ia(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = u(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).yg = f)
            }
        }
        d = new Map;
        a = u(c.entries());
        for (f = a.next(); !f.done; f = a.next()) g = u(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.yg, g && h && d.set(f, {
            latency: h - g,
            xe: !1
        });
        e = u(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.xe = !0;
        return d
    }

    function $I(a, b) {
        var c = {};
        c = void 0 === c ? {} : c;
        var d = void 0 === d ? new Map : d;
        var e = void 0 === e ? !1 : e;
        var f = void 0 === f ? new Map : f;
        var g = void 0 === g ? new au : g;
        var h = void 0 === h ? 0 : h;
        var k = new Map,
            m = (0, a.getEvents)(),
            n = m.filter(function(Ia) {
                var bb = Ia.args;
                return "auctionEnd" === Ia.eventType && bb.auctionId
            }),
            p = new hu,
            q = function(Ia) {
                return Ia === b.Ob || Ia === b.adUnitCode
            },
            t, v, y, ca = null != (y = TI.get((null != (t = b.Ob) ? t : "") + (null != (v = b.adUnitCode) ? v : ""))) ? y : 0,
            X;
        n = null != (X = n.filter(function(Ia) {
            var bb, Xf, jk;
            return Number(null ==
                (bb = Ia.args) ? void 0 : bb.timestamp) > ca && (null == (Xf = Ia.args) ? void 0 : null == (jk = Xf.adUnitCodes) ? void 0 : jk.find(q))
        })) ? X : [];
        if (!n.length) return null;
        var pa;
        if (n = null == (pa = n.reduce(function(Ia, bb) {
                return Number(bb.args.timestamp) > Number(Ia.args.timestamp) ? bb : Ia
            })) ? void 0 : pa.args) {
            X = void 0 === n.bidderRequests ? [] : n.bidderRequests;
            pa = void 0 === n.bidsReceived ? [] : n.bidsReceived;
            var ya = n.auctionId;
            n = n.timestamp;
            if (ya && null != n && X.length) {
                var Aa, Ba;
                TI.set((null != (Aa = b.Ob) ? Aa : "") + (null != (Ba = b.adUnitCode) ? Ba : ""), n);
                Aa = iu(p);
                a.version && SI.test(a.version) && Pf(Aa, 6, a.version);
                var bc, Xa, sb;
                if (null == (bc = a.getConfig) ? 0 : null == (Xa = bc.call(a).cache) ? 0 : null == (sb = Xa.url) ? 0 : sb.length) {
                    var Bb, tb;
                    fu(Aa, null == (Bb = a.getConfig) ? void 0 : null == (tb = Bb.call(a).cache) ? void 0 : tb.url)
                }
                Bf(Aa, 9, g);
                g = Pg(function() {
                    return ZI(m, ya)
                });
                bc = u(X);
                sb = bc.next();
                for (Xa = {}; !sb.done; Xa = {
                        bidderCode: void 0,
                        Ne: void 0
                    }, sb = bc.next())
                    for (Bb = sb.value, Xa.bidderCode = Bb.bidderCode, tb = Bb.bids, sb = Bb.timeout, Xa.Ne = Bb.src, Bb = Bb.auctionStart, tb = u(tb), X = tb.next(),
                        Ba = {}; !X.done; Ba = {
                            kc: void 0
                        }, X = tb.next())
                        if (y = X.value, Ba.kc = y.bidId, v = y.transactionId, X = y.adUnitCode, n = y.getFloor, t = y.mediaTypes, y = y.ortb2Imp, Ba.kc && q(X)) {
                            XI(Aa, b, X);
                            var Ce = void 0,
                                Nb = void 0;
                            h && null == Gf(Aa, 11) && "string" === typeof(null == (Ce = y) ? void 0 : null == (Nb = Ce.ext) ? void 0 : Nb.gpid) && Pf(Aa, 11, y.ext.gpid.substring(0, h));
                            v && (null != Gf(Aa, 4) || Pf(Aa, 4, v), k.has(v) || k.set(v, Bb));
                            null == ne(jf(Aa, 8)) && Number.isFinite(sb) && C(Aa, 8, me(sb));
                            y = pa.find(function(Ia) {
                                return function(bb) {
                                    return bb.requestId === Ia.kc
                                }
                            }(Ba));
                            v = du(Aa, function(Ia) {
                                return function() {
                                    var bb = Xt(new Wt, Ia.bidderCode);
                                    WI(Ia.bidderCode, a, bb);
                                    switch (Ia.Ne) {
                                        case "client":
                                            C(bb, 7, je(1));
                                            break;
                                        case "s2s":
                                            C(bb, 7, je(2))
                                    }
                                    return bb
                                }
                            }(Xa)());
                            YI(Aa, v, X, d, e, f, n);
                            y ? (Zt(v, 1), "number" === typeof y.timeToRespond && Number.isFinite(y.timeToRespond) && C(v, 2, pe(Math.round(y.timeToRespond))), Ba = VI(y, c, t), Yt(v, Ba)) : (Ba = g().get(Ba.kc)) && !Ba.xe ? (Zt(v, 2), Number.isFinite(Ba.latency) && C(v, 2, pe(Math.round(Ba.latency)))) : (Ba = Zt(v, 3), Number.isFinite(sb) && C(Ba, 2, pe(Math.round(sb))))
                        }
                var Yf;
                (null == (Yf = a.getConfig) ? 0 : Yf.call(a).useBidCache) && UI(Aa, b, ya, c, a);
                return p
            }
        }
    };
    var aJ = function(a) {
        R.call(this);
        var b = this;
        this.G = !1;
        var c = CC(EC(this.getSettings()));
        c && 0 < c.length && (Wj.reset(), Yj(new ck(c)));
        this.C = new vI;
        this.B = null;
        this.j = a;
        this.H = new Map;
        this.l = this.j.B;
        this.N = new iy(this);
        go(this, this.N);
        this.W = new Mw(window, {
            timeoutMs: 500
        });
        this.Y = new OI(window, {
            timeoutMs: 500
        });
        this.P = new kF;
        nF(this.P);
        a = new Hw(window, {
            timeoutMs: 500
        });
        this.U = new NF(a, 500);
        go(this, this.U);
        this.g = null;
        this.J = {};
        0 !== GC.g ? (this.o = new eH, go(this, this.o)) : this.o = fH();
        nD() && (this.o.init($G(this.l)),
            this.F = lH(this.o, this.j.C), fo(this, function() {
                var d = b.F;
                b.o.l.delete(d);
                0 !== GC.g && (G(Tr).A[d] = null)
            }))
    };
    w(aJ, R);
    aJ.prototype.destroy = function() {
        this.X()
    };
    aJ.prototype.getVersion = function() {
        return "h.3.633.0"
    };
    aJ.prototype.requestAds = function(a, b) {
        var c = this,
            d = [],
            e = null;
        Ow(this.W) && d.push(new Promise(function(h) {
            Rw(c.W, function(k) {
                e = k;
                h()
            })
        }));
        var f = null;
        xw(this.Y.caller) && d.push(new Promise(function(h) {
            PI(c.Y, function(k) {
                f = k;
                h()
            })
        }));
        var g = null;
        d.push(PF(this.U).then(function(h) {
            g = h
        }));
        Promise.all(d).then(function() {
            bJ(c, a, b, {
                Rd: e,
                Ud: f,
                nd: g
            })
        })
    };
    var bJ = function(a, b, c, d) {
        var e = b.adTagUrl,
            f = "goog_" + Uh++;
        a.H.set(f, c || null);
        var g = cJ({
            adTagUrl: e,
            we: !1,
            Rd: d.Rd,
            Ud: d.Ud,
            nd: d.nd
        });
        a.g = KC(e, g || {});
        dF(a.g, function() {
            dJ(a)
        });
        c = Promise.resolve();
        M(Xk) && (c = new Promise(function(q) {
            setTimeout(function() {
                q()
            }, 50)
        }));
        var h, k = null == (h = b.adTagUrl) ? void 0 : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE"),
            m = PC(a.g);
        h = eJ(a, m, k);
        d = nF(a.P);
        var n = Promise.resolve(null);
        if (M(bl) || M(cl) || M(dl) || M(gl)) {
            n = 0;
            M(bl) ? n = 50 : M(cl) || M(gl) ? n = 500 : M(dl) && (n = 5E3);
            var p = HF.getConfig().then(function(q) {
                q &&
                    KF(q, null != e ? e : "");
                var t = HF.j;
                t && (t = t.message, W.getInstance().report(189, {
                    message: t
                }));
                return q
            });
            n = Promise.race([p, rt(n, null)])
        }
        fJ(a);
        Promise.all([c, h, d, n]).then(function(q) {
            var t = u(q);
            t.next();
            t.next();
            q = t.next().value;
            t = t.next().value;
            var v = {};
            W.getInstance().report(182, (v.aid = !!GC.B, v.aidf = !!a.B, v.hsc = !m && k, v));
            t = gJ(a, b, g, q, t);
            v = $G(a.l, f);
            a.N.O(v, "adsLoader", a.aa);
            GD(v, "adsLoader", "requestAds", t);
            t = {};
            W.getInstance().report(155, (t.ws = jF(), t.blob = null != q ? q : "undef", t))
        })
    };
    aJ.prototype.getSettings = function() {
        return GC
    };
    aJ.prototype.contentComplete = function() {
        GD($G(this.l), "adsLoader", "contentComplete")
    };
    aJ.prototype.aa = function(a) {
        var b = a.messageType;
        switch (b) {
            case "adsLoaded":
                var c = a.na,
                    d = a.sessionId;
                c = new Z(this.o, this.j, c.adTagUrl || "", c.adCuePoints, this.F, c.isCustomClickTrackingAllowed, $G(this.l, d), this.g);
                this.dispatchEvent(new JI(c, hJ(this, d)));
                break;
            case "error":
                c = a.na;
                this.dispatchEvent(new UH(new SH(c), hJ(this, a.sessionId)));
                c = {
                    error: c.errorCode,
                    vis: ej(document)
                };
                W.getInstance().report(7, c);
                break;
            case "cookieUpdate":
                a = a.na;
                if (null == a) break;
                if (GC.isCookiesEnabled()) {
                    b = new HC;
                    Of(b, 5, !0);
                    var e =
                        a.gfpCookie;
                    e && xI(this.C, "__gads", uI(e), b);
                    (e = a.gfpCookieV2) && xI(this.C, "__gpi", uI(e), b)
                }
                b = a.eoidCookie;
                if (M(gl) && b) {
                    e = new Mu;
                    try {
                        c = uI(b);
                        d = void 0 === d ? !1 : d;
                        var f = Lf(c, 2) - Date.now() / 1E3,
                            g = {
                                Hc: Math.max(f, 0),
                                path: E(c, 3),
                                domain: E(c, 4),
                                Je: !1
                            };
                        if (d) {
                            var h = c.getValue(),
                                k = e.g;
                            "null" !== k.origin && Hu(k).set("__eoi", h, g)
                        } else Hu(e.g).set("__eoi", c.getValue(), g)
                    } catch (n) {
                        var m;
                        W.getInstance().report(198, {
                            action: "write",
                            message: null == (m = n) ? void 0 : m.message
                        }, !0)
                    }
                }
                iJ(this, a.encryptedSignalBidderIds || []);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new WH(b,
                    null, a.na))
        }
    };
    var iJ = function(a, b) {
            0 !== b.length && (b = eF(b.map(function(c) {
                return {
                    sc: c
                }
            }), a.g)) && b.forEach(function(c) {
                c.then(function(d) {
                    d && dJ(a)
                })
            })
        },
        dJ = function(a) {
            var b = zE(cF(a.g));
            b && (a.J.espSignals = b, GD($G(a.l), "adsLoader", "signalsRefresh", a.J))
        },
        hJ = function(a, b) {
            var c = a.H.get(b);
            a.H.delete(b);
            return null != c ? c : null
        },
        cJ = function(a) {
            var b = a.Rd,
                c = a.Ud,
                d = a.nd,
                e, f, g, h, k, m, n = {};
            var p = void 0 === p ? x : p;
            return n.gfcLoaded = Gi(p.top, "googlefcLoaded"), n.isGdprLoader = a.we, n.addtlConsent = null != (e = null == b ? void 0 : b.addtlConsent) ?
                e : null, n.gdprApplies = null != (f = null == b ? void 0 : b.gdprApplies) ? f : null, n.tcString = null != (g = null == b ? void 0 : b.tcString) ? g : null, n.uspString = null != (h = null == c ? void 0 : c.uspString) ? h : null, n.gppString = null != (k = null == d ? void 0 : d.gppString) ? k : null, n.gppSid = null != (m = null == d ? void 0 : d.sid) ? m : null, n
        },
        jJ = function(a, b) {
            var c = {};
            c.contentMediaUrl = a.j.M;
            c.customClickTrackingProvided = null != a.j.o;
            c.isAmp = rD();
            a: {
                try {
                    var d = window.top.location.href
                } catch (ca) {
                    d = 2;
                    break a
                }
                d = null == d ? 2 : d == window.document.location.href ? 0 : 1
            }
            c.iframeState =
                d;
            c.imaHostingDomain = window.document.domain;
            c.imaHostingPageUrl = window.document.URL;
            c.topAccessiblePageUrl = qD();
            c.referrer = window.document.referrer;
            c.domLoadTime = a.l.J;
            c.sdkImplLoadTime = a.l.N;
            c.supportsResizing = !OH(a.j);
            d = I().location.ancestorOrigins;
            c.topOrigin = d ? 0 < d.length && 200 > d[d.length - 1].length ? d[d.length - 1] : "" : null;
            c.osdId = a.F;
            c.usesCustomVideoPlayback = OH(a.j);
            c.usesProxyMediaElement = PH(a.j);
            c.usesInlinePlayback = a.j.I;
            d = a.j.Tc;
            a = [];
            var e = "",
                f = "";
            if (null != d) {
                e = d;
                f = !0;
                f = void 0 === f ? !1 : f;
                for (var g = [], h = 0; e && 25 > h; ++h) {
                    var k = "";
                    void 0 !== f && f || (k = (k = 9 !== e.nodeType && e.id) ? "/" + k : "");
                    a: {
                        if (e && e.nodeName && e.parentElement) {
                            var m = e.nodeName.toString().toLowerCase();
                            for (var n = e.parentElement.childNodes, p = 0, q = 0; q < n.length; ++q) {
                                var t = n[q];
                                if (t.nodeName && t.nodeName.toString().toLowerCase() === m) {
                                    if (e === t) {
                                        m = "." + p;
                                        break a
                                    }++p
                                }
                            }
                        }
                        m = ""
                    }
                    g.push((e.nodeName && e.nodeName.toString().toLowerCase()) + k + m);
                    e = e.parentElement
                }
                e = g.join();
                if (d) {
                    d = (d = d.ownerDocument) && (d.defaultView || d.parentWindow) || null;
                    f = [];
                    if (d) try {
                        var v =
                            d.parent;
                        for (g = 0; v && v !== d && 25 > g; ++g) {
                            var y = v.frames;
                            for (h = 0; h < y.length; ++h)
                                if (d === y[h]) {
                                    f.push(h);
                                    break
                                }
                            d = v;
                            v = d.parent
                        }
                    } catch (ca) {}
                    f = f.join()
                } else f = ""
            }
            a.push(e, f);
            if (null != b) {
                for (v = 0; v < qw.length - 1; ++v) a.push(vi(b, qw[v]) || "");
                b = vi(b, "videoad_start_delay");
                v = "";
                b && (b = parseInt(b, 10), v = 0 > b ? "postroll" : 0 == b ? "preroll" : "midroll");
                a.push(v)
            } else
                for (b = 0; b < qw.length; ++b) a.push("");
            return c.videoAdKey = Di(a.join(":")).toString(), c
        },
        kJ = function(a) {
            if (!(M(Tk) || M(Uk) || M(Vk) || M(Wk))) return null;
            try {
                var b = new KI,
                    c = null;
                a.pageUrl ? c = a.pageUrl : zx(a.adTagUrl) && (c = (new URL(a.adTagUrl)).searchParams.get("url"));
                c && zx(c) && (b.url = c);
                b.videoHeight = a.linearAdSlotHeight;
                b.videoWidth = a.linearAdSlotWidth;
                a = Map;
                c = [];
                var d = c.concat,
                    e = Map,
                    f = [],
                    g = f.concat,
                    h = new Map;
                h.set("eid", Xj().sort().join(","));
                h.set("aselc", "3");
                h.set("correlator", "");
                h.set("pal_v", "");
                h.set("ref", (new Tl).l || window.document.referrer);
                h.set("useragent", zb());
                h.set("sdkv", "");
                var k = ia(h),
                    m = new Map;
                null != b.adWillAutoPlay && m.set("vpa", b.adWillAutoPlay ?
                    "auto" : "click");
                null != b.adWillPlayMuted && m.set("vpmute", b.adWillPlayMuted ? "1" : "0");
                null != b.continuousPlayback && m.set("vconp", b.continuousPlayback ? "2" : "1");
                m.set("wta", b.iconsSupported ? "1" : "0");
                m.set("pss", b.skippablesSupported ? "1" : "0");
                500 >= b.descriptionUrl.length && m.set("video_url_to_fetch", b.descriptionUrl);
                200 >= b.ppid.length && m.set("ppid", b.ppid);
                200 >= b.playerType.length && m.set("mpt", b.playerType);
                200 >= b.playerVersion.length && m.set("mpv", b.playerVersion);
                m.set("sid", b.sessionId);
                var n = b.videoHeight,
                    p = b.videoWidth;
                if (-1 !== n || -1 !== p) {
                    var q = 0 <= n ? n.toString() : "0",
                        t = 0 <= p ? p.toString() : "0";
                    h = "l";
                    n > p && (h = "p");
                    m.set("vp_h", q);
                    m.set("vp_w", t);
                    m.set("u_so", h)
                }
                var v = ia(m),
                    y = new Map;
                m = {};
                m.u_tz = -(new Date).getTimezoneOffset();
                var ca = void 0 === ca ? P : ca;
                try {
                    var X = ca.history.length
                } catch (Dy) {
                    X = 0
                }
                m.u_his = X;
                var pa;
                m.u_h = null == (pa = P.screen) ? void 0 : pa.height;
                var ya;
                m.u_w = null == (ya = P.screen) ? void 0 : ya.width;
                var Aa;
                m.u_ah = null == (Aa = P.screen) ? void 0 : Aa.availHeight;
                var Ba;
                m.u_aw = null == (Ba = P.screen) ? void 0 : Ba.availWidth;
                var bc;
                m.u_cd = null == (bc = P.screen) ? void 0 : bc.colorDepth;
                y.set("u_ah", BF(m.u_ah));
                y.set("u_aw", BF(m.u_aw));
                y.set("u_cd", BF(m.u_cd));
                y.set("u_his", BF(m.u_his));
                y.set("nhd", BF(Math.max(Sl().length, 0)));
                y.set("u_h", BF(m.u_h));
                y.set("u_w", BF(m.u_w));
                y.set("dt", BF(rv));
                y.set("u_tz", BF(m.u_tz));
                var Xa = new e(g.call(f, k, v, ia(y)));
                var sb = ia(Xa);
                Xa = Map;
                g = [];
                var Bb = g.concat,
                    tb = new Map;
                tb.set("sodar_correlator", "");
                var Ce = ia(tb),
                    Nb = new Map;
                tb = !1;
                var Yf = b.omidVersion;
                0 < Yf.length && 200 >= Yf.length && Nb.set("omid_v",
                    Yf);
                var Ia = b.omidPartnerName,
                    bb = b.omidPartnerVersion;
                0 < Ia.length && 0 < bb.length && 200 >= Ia.length && 200 >= bb.length && (Nb.set("omid_p", Ia + "/" + bb), tb = !0);
                var Xf = b.supportedApiFrameworks;
                !Xf.includes(7) && tb && Xf.push(7);
                Nb.set("sdk_apis", Xf.toString());
                var jk = qD(),
                    Lp = Wl();
                var Ey = Lp.j ? Lp.j.url : Lp.g.url;
                Nb.set("top", jk);
                b.url ? (Nb.set("url", b.url), Nb.set("loc", Ey)) : Nb.set("url", Ey);
                var xJ = new Xa(Bb.call(g, Ce, ia(Nb)));
                for (var kk = new a(d.call(c, sb, ia(xJ))), Fy = u(kk.keys()), Mp = Fy.next(); !Mp.done; Mp = Fy.next()) {
                    var Gy =
                        Mp.value;
                    pb(kk.get(Gy)) && kk.delete(Gy)
                }
                return kk
            } catch (Dy) {
                var Hy;
                W.getInstance().report(181, {
                    message: null == (Hy = Dy) ? void 0 : Hy.message
                });
                return null
            }
        },
        lJ = function(a, b, c) {
            a = OC(a);
            var d;
            b = wC(null != (d = b.adTagUrl) ? d : "");
            c = null == c ? void 0 : yf(c, ju, 3);
            var e;
            c = !!b && (null == c ? void 0 : null == (e = tf(c, 1, Be)) ? void 0 : e.get(b));
            W.getInstance().report(196, {
                status: c,
                network: b
            });
            return {
                De: a,
                Ee: !c
            }
        },
        mJ = function(a, b, c) {
            var d = QC(a);
            b = lJ(a, b, c);
            a = b.De;
            b = b.Ee;
            return !Lu() || If(d, 8) || (a || !If(d, 5)) && b ? !1 : !0
        },
        nJ = function(a, b, c) {
            var d =
                QC(a);
            a = lJ(a, b, c);
            b = new Mu;
            c = void 0;
            try {
                var e = a.De,
                    f = a.Ee;
                var g = void 0 === g ? !1 : g;
                if (If(d, 8) || (e || !If(d, 5)) && f) c = void 0;
                else if (g) {
                    var h;
                    c = null != (h = Ju("__eoi", b.g)) ? h : void 0
                } else c = (new Eu(b.g.document)).get("__eoi") || ""
            } catch (m) {
                var k;
                W.getInstance().report(198, {
                    action: "read",
                    message: null == (k = m) ? void 0 : k.message
                }, !0)
            }
            return c
        },
        eJ = function(a, b, c) {
            if (b) return a.B = null, Promise.resolve([]);
            b = [];
            b.push(oJ());
            c && b.push(pJ(a));
            return Promise.all(b)
        },
        pJ = function(a) {
            var b;
            return Ka(function(c) {
                if (1 == c.g) return a.B ||
                    (a.B = new CD, DD(a.B)), xa(c, a.B.getId(), 2);
                b = c.j;
                GC.B = b.id || "";
                c.g = 0
            })
        },
        oJ = function() {
            return Jb() && (M(al) || M($k)) ? M($k) ? new Promise(function(a) {
                setTimeout(function() {
                    a()
                }, 50)
            }) : qJ().then(function(a) {
                var b, c = null != (b = a.label) ? b : "";
                GC.I = c;
                GC.H = a.status
            }) : Promise.resolve()
        },
        qJ = function() {
            if (navigator.cookieDeprecationLabel) {
                var a = navigator.cookieDeprecationLabel.getValue().then(function(c) {
                        return {
                            label: c,
                            status: 1
                        }
                    }).catch(function() {
                        return {
                            label: "",
                            status: 2
                        }
                    }),
                    b = new Promise(function(c) {
                        setTimeout(function() {
                            c({
                                label: "",
                                status: 5
                            })
                        }, 50)
                    });
                return Promise.race([b, a])
            }
            return Promise.resolve({
                label: "",
                status: 3
            })
        },
        gJ = function(a, b, c, d, e) {
            var f = {};
            f = (f.limaExperimentIds = Xj().sort().join(","), f);
            var g = FC(a.getSettings(), kH(a.o)),
                h = jJ(a, b.adTagUrl),
                k = Qy(),
                m = {};
            c = (m.consentSettings = c, m.imalibExperiments = f, m.settings = g, m.videoEnvironment = h, m.isFledgeEligible = k, m);
            Object.assign(c, rJ(b));
            a.g && GC.isCookiesEnabled() && (f = QC(a.g), c.isBrowserCookieEnabled = wI(a.C, f), g = f ? Iu("__gads", f, a.C.g) : null, null !== g && (c.gfpCookieValue = g), g = f ? Iu("__gpi",
                f, a.C.g) : null, null !== g && (c.gfpCookieV2Id = g), f = f ? Iu("__gpi_opt_out", f, a.C.g) : null, null !== f && (c.gfpCookieV2OptOut = f));
            a.g && M(gl) && (f = mJ(a.g, b, e), c.eoidCookieEnabled = f, (e = nJ(a.g, b, e)) && (c.eoidCookieValue = e));
            if (e = zE(cF(a.g))) a.J.espSignals = e, c.espSignals = e;
            (a = kJ(b)) && (c.palSignals = Object.fromEntries(a));
            d && (c.gmaSignals = d);
            c.isEapLoader = !1;
            if (M(il)) {
                d = function(t) {
                    W.getInstance().report(195, {
                        message: null == t ? void 0 : t.message
                    })
                };
                try {
                    var n = QI();
                    if (n) {
                        var p = xC(b.adTagUrl, d);
                        if (p) {
                            var q = $I(n, {
                                adUnitCode: p
                            });
                            c.clientBidsProto = q ? Oc(q.g(), 3) : void 0
                        }
                    }
                } catch (t) {
                    d(t)
                }
            }
            return c
        },
        fJ = function(a) {
            var b = I(),
                c, d = null == (c = a.g) ? void 0 : PC(c);
            c = b.isSecureContext;
            var e = b.document;
            e = void 0 === e ? b.document : e;
            b = !!(c && "sharedStorage" in b && b.sharedStorage && Py("shared-storage", e));
            c = a.G || d || !b;
            M(el) && (W.getInstance().report(191, {
                enabled: !c,
                clientAgePingCalled: a.G,
                isIdless: d,
                isSharedStorageEnabled: b
            }), c || (a.G = !0, d = a.l, a = iD.getInstance().g, (d = ni(d.g)) && WG(d, a)))
        };
    aJ.prototype.contentComplete = aJ.prototype.contentComplete;
    aJ.prototype.getSettings = aJ.prototype.getSettings;
    aJ.prototype.requestAds = aJ.prototype.requestAds;
    aJ.prototype.getVersion = aJ.prototype.getVersion;
    aJ.prototype.destroy = aJ.prototype.destroy;
    var sJ = function() {
            this.l = this.j = "unknown";
            this.g = "0";
            this.adsResponse = null;
            this.adTagUrl = "";
            this.contentTitle = this.contentKeywords = this.contentDuration = null;
            this.forceNonLinearFullSlot = !1;
            this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
            this.omidAccessModeRules = {};
            this.pageUrl = null;
            this.vastLoadTimeout = 5E3
        },
        rJ = function(a) {
            var b = {};
            b.adsResponse = a.adsResponse;
            b.videoPlayActivation = a.j;
            b.videoPlayMuted = a.l;
            b.videoContinuousPlay =
                a.g;
            b.adTagUrl = a.adTagUrl;
            b.contentDuration = a.contentDuration;
            b.contentKeywords = a.contentKeywords;
            b.contentTitle = a.contentTitle;
            b.linearAdSlotWidth = a.linearAdSlotWidth;
            b.linearAdSlotHeight = a.linearAdSlotHeight;
            b.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth;
            b.nonLinearAdSlotHeight = a.nonLinearAdSlotHeight;
            b.forceNonLinearFullSlot = a.forceNonLinearFullSlot;
            b.liveStreamPrefetchSeconds = a.liveStreamPrefetchSeconds;
            b.vastLoadTimeout = a.vastLoadTimeout;
            b.omidAccessModeRules = a.omidAccessModeRules;
            b.pageUrl = a.pageUrl;
            return b
        };
    sJ.prototype.setAdWillAutoPlay = function(a) {
        this.j = a ? "auto" : "click"
    };
    sJ.prototype.setAdWillPlayMuted = function(a) {
        this.l = a ? "muted" : "unmuted"
    };
    sJ.prototype.setContinuousPlayback = function(a) {
        this.g = a ? "2" : "1"
    };
    sJ.prototype.setContinuousPlayback = sJ.prototype.setContinuousPlayback;
    sJ.prototype.setAdWillPlayMuted = sJ.prototype.setAdWillPlayMuted;
    sJ.prototype.setAdWillAutoPlay = sJ.prototype.setAdWillAutoPlay;

    function tJ(a, b) {
        return a && (a[b] || (a[b] = {}))
    }

    function uJ(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(tJ, c)[a[a.length - 1]] = b
    };
    var vJ = new Map([
        [2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]],
        [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/, /^(https?:\/\/|\/\/)?(\w\.?)+\.dv\.tech\/.*$/]],
        [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]],
        [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]],
        [6, []],
        [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/,
            /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/
        ]],
        [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]],
        [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]
    ]);
    uJ("OmidSessionClient.verificationVendorIdForScriptUrl", function(a) {
        for (var b = u(vJ.keys()), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = u(vJ.get(c)), e = d.next(); !e.done; e = d.next())
                if (e.value.test(a)) return c
        }
        return 1
    });
    uJ("OmidSessionClient.VerificationVendorId", {
        OTHER: 1,
        MOAT: 2,
        DOUBLEVERIFY: 3,
        INTEGRAL_AD_SCIENCE: 4,
        PIXELATE: 5,
        NIELSEN: 6,
        COMSCORE: 7,
        MEETRICS: 8,
        GOOGLE: 9
    });
    z("google.ima.AdCuePoints.POSTROLL", -1, window);
    z("google.ima.AdCuePoints.PREROLL", 0, window);
    z("google.ima.AdDisplayContainer", QH, window);
    z("google.ima.AdError.ErrorCode", T, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    z("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    z("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    z("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.Type", RH, window);
    z("google.ima.AdErrorEvent.Type", TH, window);
    z("google.ima.AdEvent.Type", VH, window);
    z("google.ima.AdsLoader", aJ, window);
    z("google.ima.AdsManagerLoadedEvent.Type", II, window);
    z("google.ima.CompanionAdSelectionSettings", LD, window);
    z("google.ima.CompanionAdSelectionSettings.CreativeType", ID);
    z("google.ima.CompanionAdSelectionSettings.ResourceType", JD);
    z("google.ima.CompanionAdSelectionSettings.SizeCriteria", KD);
    z("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    z("ima.ImaSdkSettings", U, window);
    z("google.ima.settings", GC, window);
    z("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    });
    z("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2,
        0: "DISABLED",
        1: "ENABLED",
        2: "INSECURE"
    });
    z("google.ima.AdsRenderingSettings", jG, window);
    z("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    z("google.ima.AdsRequest", sJ, window);
    z("google.ima.VERSION", "3.633.0");
    z("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    });
    z("google.ima.OmidVerificationVendor", {
        COMSCORE: 7,
        DOUBLEVERIFY: 3,
        GOOGLE: 9,
        INTEGRAL_AD_SCIENCE: 4,
        MEETRICS: 8,
        MOAT: 2,
        NIELSEN: 6,
        PIXELATE: 5,
        OTHER: 1,
        7: "COMSCORE",
        3: "DOUBLEVERIFY",
        9: "GOOGLE",
        4: "INTEGRAL_AD_SCIENCE",
        8: "MEETRICS",
        2: "MOAT",
        6: "NIELSEN",
        5: "PIXELATE",
        1: "OTHER"
    });
    z("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    });
    z("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    });
    var wJ = function(a, b, c) {
            this.j = c;
            0 === b.length && (b = [
                []
            ]);
            this.g = b.map(function(d) {
                d = a.concat(d);
                for (var e = [], f = 0, g = 0; f < d.length;) {
                    var h = d[f++];
                    if (128 > h) e[g++] = String.fromCharCode(h);
                    else if (191 < h && 224 > h) {
                        var k = d[f++];
                        e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                    } else if (239 < h && 365 > h) {
                        k = d[f++];
                        var m = d[f++],
                            n = d[f++];
                        h = ((h & 7) << 18 | (k & 63) << 12 | (m & 63) << 6 | n & 63) - 65536;
                        e[g++] = String.fromCharCode(55296 + (h >> 10));
                        e[g++] = String.fromCharCode(56320 + (h & 1023))
                    } else k = d[f++], m = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                        (k & 63) << 6 | m & 63)
                }
                return new RegExp(e.join(""))
            })
        },
        yJ = function(a, b) {
            return b ? a.g.some(function(c) {
                c = b.match(c);
                return null == c ? !1 : !a.j || 1 <= c.length && "3.633.0" === c[1] || 2 <= c.length && "3.633.0" === c[2] ? !0 : !1
            }) : !1
        },
        zJ = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        AJ = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48, 92, 46, 50, 109, 100,
            110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47
        ],
        BJ = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47],
        CJ = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]
        ],
        DJ = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97,
                45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        EJ = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101,
                98, 117, 103, 92, 46, 106, 115
            ]
        ],
        FJ = new wJ(zJ, CJ, !1);
    new wJ(zJ, DJ, !0);
    var GJ = new wJ(AJ, CJ, !1);
    new wJ(AJ, DJ, !0);
    var HJ = new wJ([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45, 57, 46, 93, 43, 47], CJ, !1),
        IJ = new wJ([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103,
            101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1);
    new wJ(zJ, [
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125,
            41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
        ]
    ], !0);
    var JJ = new wJ(zJ, EJ, !1),
        KJ = new wJ(zJ, EJ, !1);
    new wJ(BJ, [
        [112, 97, 108, 46, 106, 115]
    ], !1);
    new wJ(BJ, [
        [99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]
    ], !1);
    new wJ(BJ, [
        [99, 116, 118, 95, 112, 97, 108, 46, 106, 115]
    ], !1);

    function LJ(a, b) {
        for (var c = {}, d = 0; d < b.length; c = {
                Ld: void 0
            }, d++)
            if (c.Ld = b[d], a.some(function(e) {
                    return function(f) {
                        return yJ(f, e.Ld.src)
                    }
                }(c))) return c.Ld;
        return null
    };
    if (! function(a) {
            if (a.some(function(c) {
                    return yJ(c, I().location.href)
                })) return !0;
            var b = LJ(a, document.querySelectorAll && document.querySelector ? document.querySelectorAll("SCRIPT") : document.getElementsByTagName("SCRIPT"));
            null == b && document.querySelectorAll && (b = LJ(a, document.querySelectorAll("script")));
            return null != b
        }([FJ, HJ, GJ, IJ, JJ, KJ])) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
    if (M(bl) || M(cl) || M(dl) || M(gl)) {
        var DF = HF,
            JF = {
                pageUrl: qD()
            },
            EF = IF();
        if (EF) try {
            GF()
        } catch (a) {
            FF(DF, a)
        } else FF(DF, Error("Could not generate config URL"))
    };
})();