(() => {
    var Te = Object.defineProperty,
        Ve = Object.defineProperties;
    var _e = Object.getOwnPropertyDescriptors;
    var be = Object.getOwnPropertySymbols;
    var Oe = Object.prototype.hasOwnProperty,
        Re = Object.prototype.propertyIsEnumerable;
    var Ce = (a, e, t) => e in a ? Te(a, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : a[e] = t,
        we = (a, e) => {
            for (var t in e || = {}) Oe.call(e, t) && Ce(a, t, e[t]);
            if (be)
                for (var t of be(e)) Re.call(e, t) && Ce(a, t, e[t]);
            return a
        },
        ve = (a, e) => Ve(a, _e(e));
    var i = (a, e, t) => (Ce(a, typeof e != "symbol" ? e + "" : e, t), t);
    var b = class extends Error {
        constructor(e) {
            super(e), this.name = "DecodingError"
        }
    };
    var v = class extends Error {
        constructor(e) {
            super(e), this.name = "EncodingError"
        }
    };
    var Q = class extends Error {
        constructor(e) {
            super(e), this.name = "GVLError"
        }
    };
    var y = class extends Error {
        constructor(e, t, s = "") {
            super(`invalid value ${t} passed for ${e} ${s}`), this.name = "TCModelError"
        }
    };
    var R = class {
        static encode(e) {
            if (!/^[0-1]+$/.test(e)) throw new v("Invalid bitField");
            let t = e.length % this.LCM;
            e += t ? "0".repeat(this.LCM - t) : "";
            let s = "";
            for (let r = 0; r < e.length; r += this.BASIS) s += this.DICT[parseInt(e.substr(r, this.BASIS), 2)];
            return s
        }
        static decode(e) {
            if (!/^[A-Za-z0-9\-_]+$/.test(e)) throw new b("Invalidly encoded Base64URL string");
            let t = "";
            for (let s = 0; s < e.length; s++) {
                let r = this.REVERSE_DICT.get(e[s]).toString(2);
                t += "0".repeat(this.BASIS - r.length) + r
            }
            return t
        }
    };
    i(R, "DICT", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), i(R, "REVERSE_DICT", new Map([
        ["A", 0],
        ["B", 1],
        ["C", 2],
        ["D", 3],
        ["E", 4],
        ["F", 5],
        ["G", 6],
        ["H", 7],
        ["I", 8],
        ["J", 9],
        ["K", 10],
        ["L", 11],
        ["M", 12],
        ["N", 13],
        ["O", 14],
        ["P", 15],
        ["Q", 16],
        ["R", 17],
        ["S", 18],
        ["T", 19],
        ["U", 20],
        ["V", 21],
        ["W", 22],
        ["X", 23],
        ["Y", 24],
        ["Z", 25],
        ["a", 26],
        ["b", 27],
        ["c", 28],
        ["d", 29],
        ["e", 30],
        ["f", 31],
        ["g", 32],
        ["h", 33],
        ["i", 34],
        ["j", 35],
        ["k", 36],
        ["l", 37],
        ["m", 38],
        ["n", 39],
        ["o", 40],
        ["p", 41],
        ["q", 42],
        ["r", 43],
        ["s", 44],
        ["t", 45],
        ["u", 46],
        ["v", 47],
        ["w", 48],
        ["x", 49],
        ["y", 50],
        ["z", 51],
        ["0", 52],
        ["1", 53],
        ["2", 54],
        ["3", 55],
        ["4", 56],
        ["5", 57],
        ["6", 58],
        ["7", 59],
        ["8", 60],
        ["9", 61],
        ["-", 62],
        ["_", 63]
    ])), i(R, "BASIS", 6), i(R, "LCM", 24);
    var U = class {
            has(e) {
                return U.langSet.has(e)
            }
            parseLanguage(e) {
                e = e.toUpperCase();
                let t = e.split("-")[0];
                if (e.length >= 2 && t.length == 2) {
                    if (U.langSet.has(e)) return e;
                    if (U.langSet.has(t)) return t;
                    let s = t + "-" + t;
                    if (U.langSet.has(s)) return s;
                    for (let r of U.langSet)
                        if (r.indexOf(e) !== -1 || r.indexOf(t) !== -1) return r
                }
                throw new Error(`unsupported language ${e}`)
            }
            forEach(e) {
                U.langSet.forEach(e)
            }
            get size() {
                return U.langSet.size
            }
        },
        K = U;
    i(K, "langSet", new Set(["AR", "BG", "BS", "CA", "CS", "DA", "DE", "EL", "EN", "ES", "ET", "EU", "FI", "FR", "GL", "HR", "HU", "IT", "JA", "LT", "LV", "MT", "NL", "NO", "PL", "PT-BR", "PT-PT", "RO", "RU", "SK", "SL", "SR-LATN", "SR-CYRL", "SV", "TR", "ZH"]));
    var o = class {};
    i(o, "cmpId", "cmpId"), i(o, "cmpVersion", "cmpVersion"), i(o, "consentLanguage", "consentLanguage"), i(o, "consentScreen", "consentScreen"), i(o, "created", "created"), i(o, "supportOOB", "supportOOB"), i(o, "isServiceSpecific", "isServiceSpecific"), i(o, "lastUpdated", "lastUpdated"), i(o, "numCustomPurposes", "numCustomPurposes"), i(o, "policyVersion", "policyVersion"), i(o, "publisherCountryCode", "publisherCountryCode"), i(o, "publisherCustomConsents", "publisherCustomConsents"), i(o, "publisherCustomLegitimateInterests", "publisherCustomLegitimateInterests"), i(o, "publisherLegitimateInterests", "publisherLegitimateInterests"), i(o, "publisherConsents", "publisherConsents"), i(o, "publisherRestrictions", "publisherRestrictions"), i(o, "purposeConsents", "purposeConsents"), i(o, "purposeLegitimateInterests", "purposeLegitimateInterests"), i(o, "purposeOneTreatment", "purposeOneTreatment"), i(o, "specialFeatureOptins", "specialFeatureOptins"), i(o, "useNonStandardTexts", "useNonStandardTexts"), i(o, "vendorConsents", "vendorConsents"), i(o, "vendorLegitimateInterests", "vendorLegitimateInterests"), i(o, "vendorListVersion", "vendorListVersion"), i(o, "vendorsAllowed", "vendorsAllowed"), i(o, "vendorsDisclosed", "vendorsDisclosed"), i(o, "version", "version");
    var V = class {
        clone() {
            let e = new this.constructor;
            return Object.keys(this).forEach(s => {
                let r = this.deepClone(this[s]);
                r !== void 0 && (e[s] = r)
            }), e
        }
        deepClone(e) {
            let t = typeof e;
            if (t === "number" || t === "string" || t === "boolean") return e;
            if (e !== null && t === "object") {
                if (typeof e.clone == "function") return e.clone();
                if (e instanceof Date) return new Date(e.getTime());
                if (e[Symbol.iterator] !== void 0) {
                    let s = [];
                    for (let r of e) s.push(this.deepClone(r));
                    return e instanceof Array ? s : new e.constructor(s)
                } else {
                    let s = {};
                    for (let r in e) e.hasOwnProperty(r) && (s[r] = this.deepClone(e[r]));
                    return s
                }
            }
        }
    };
    var T;
    (function(a) {
        a[a.NOT_ALLOWED = 0] = "NOT_ALLOWED", a[a.REQUIRE_CONSENT = 1] = "REQUIRE_CONSENT", a[a.REQUIRE_LI = 2] = "REQUIRE_LI"
    })(T || (T = {}));
    var se = class extends V {
            purposeId_;
            restrictionType;
            constructor(e, t) {
                super(), e !== void 0 && (this.purposeId = e), t !== void 0 && (this.restrictionType = t)
            }
            static unHash(e) {
                let t = e.split(this.hashSeparator),
                    s = new se;
                if (t.length !== 2) throw new y("hash", e);
                return s.purposeId = parseInt(t[0], 10), s.restrictionType = parseInt(t[1], 10), s
            }
            get hash() {
                if (!this.isValid()) throw new Error("cannot hash invalid PurposeRestriction");
                return `${this.purposeId}${se.hashSeparator}${this.restrictionType}`
            }
            get purposeId() {
                return this.purposeId_
            }
            set purposeId(e) {
                this.purposeId_ = e
            }
            isValid() {
                return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === T.NOT_ALLOWED || this.restrictionType === T.REQUIRE_CONSENT || this.restrictionType === T.REQUIRE_LI)
            }
            isSameAs(e) {
                return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType
            }
        },
        _ = se;
    i(_, "hashSeparator", "-");
    var W = class extends V {
        bitLength = 0;
        map = new Map;
        gvl_;
        has(e) {
            return this.map.has(e)
        }
        isOkToHave(e, t, s) {
            let r = !0;
            if (this.gvl ? .vendors) {
                let p = this.gvl.vendors[s];
                if (p)
                    if (e === T.NOT_ALLOWED) r = p.legIntPurposes.includes(t) || p.purposes.includes(t);
                    else if (p.flexiblePurposes.length) switch (e) {
                    case T.REQUIRE_CONSENT:
                        r = p.flexiblePurposes.includes(t) && p.legIntPurposes.includes(t);
                        break;
                    case T.REQUIRE_LI:
                        r = p.flexiblePurposes.includes(t) && p.purposes.includes(t);
                        break
                } else r = !1;
                else r = !1
            }
            return r
        }
        add(e, t) {
            if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                let s = t.hash;
                this.has(s) || (this.map.set(s, new Set), this.bitLength = 0), this.map.get(s).add(e)
            }
        }
        restrictPurposeToLegalBasis(e, t = Array.from(this.gvl.vendorIds)) {
            let s = e.hash;
            if (!this.has(s)) this.map.set(s, new Set(t)), this.bitLength = 0;
            else {
                let r = this.map.get(s);
                for (let p of t) r.add(p)
            }
        }
        getVendors(e) {
            let t = [];
            if (e) {
                let s = e.hash;
                this.has(s) && (t = Array.from(this.map.get(s)))
            } else {
                let s = new Set;
                this.map.forEach(r => {
                    Array.from(r).forEach(p => {
                        s.add(p)
                    })
                }), t = Array.from(s)
            }
            return t.sort((s, r) => s - r)
        }
        getRestrictionType(e, t) {
            let s;
            return this.getRestrictions(e).forEach(r => {
                r.purposeId === t && (s === void 0 || s > r.restrictionType) && (s = r.restrictionType)
            }), s
        }
        vendorHasRestriction(e, t) {
            let s = !1,
                r = this.getRestrictions(e);
            for (let p = 0; p < r.length && !s; p++) s = t.isSameAs(r[p]);
            return s
        }
        getMaxVendorId() {
            let e = 0;
            return this.map.forEach(t => {
                let s = Array.from(t);
                e = Math.max(s[s.length - 1], e)
            }), e
        }
        getRestrictions(e) {
            let t = [];
            return this.map.forEach((s, r) => {
                e ? s.has(e) && t.push(_.unHash(r)) : t.push(_.unHash(r))
            }), t
        }
        getPurposes() {
            let e = new Set;
            return this.map.forEach((t, s) => {
                e.add(_.unHash(s).purposeId)
            }), Array.from(e)
        }
        remove(e, t) {
            let s = t.hash,
                r = this.map.get(s);
            r && (r.delete(e), r.size == 0 && (this.map.delete(s), this.bitLength = 0))
        }
        set gvl(e) {
            this.gvl_ || (this.gvl_ = e, this.map.forEach((t, s) => {
                let r = _.unHash(s);
                Array.from(t).forEach(l => {
                    this.isOkToHave(r.restrictionType, r.purposeId, l) || t.delete(l)
                })
            }))
        }
        get gvl() {
            return this.gvl_
        }
        isEmpty() {
            return this.map.size === 0
        }
        get numRestrictions() {
            return this.map.size
        }
    };
    var Ae;
    (function(a) {
        a.COOKIE = "cookie", a.WEB = "web", a.APP = "app"
    })(Ae || (Ae = {}));
    var E;
    (function(a) {
        a.CORE = "core", a.VENDORS_DISCLOSED = "vendorsDisclosed", a.VENDORS_ALLOWED = "vendorsAllowed", a.PUBLISHER_TC = "publisherTC"
    })(E || (E = {}));
    var k = class {};
    i(k, "ID_TO_KEY", [E.CORE, E.VENDORS_DISCLOSED, E.VENDORS_ALLOWED, E.PUBLISHER_TC]), i(k, "KEY_TO_ID", {
        [E.CORE]: 0,
        [E.VENDORS_DISCLOSED]: 1,
        [E.VENDORS_ALLOWED]: 2,
        [E.PUBLISHER_TC]: 3
    });
    var w = class extends V {
        bitLength = 0;
        maxId_ = 0;
        set_ = new Set;*[Symbol.iterator]() {
            for (let e = 1; e <= this.maxId; e++) yield [e, this.has(e)]
        }
        values() {
            return this.set_.values()
        }
        get maxId() {
            return this.maxId_
        }
        has(e) {
            return this.set_.has(e)
        }
        unset(e) {
            Array.isArray(e) ? e.forEach(t => this.unset(t)) : typeof e == "object" ? this.unset(Object.keys(e).map(t => Number(t))) : (this.set_.delete(Number(e)), this.bitLength = 0, e === this.maxId && (this.maxId_ = 0, this.set_.forEach(t => {
                this.maxId_ = Math.max(this.maxId, t)
            })))
        }
        isIntMap(e) {
            let t = typeof e == "object";
            return t = t && Object.keys(e).every(s => {
                let r = Number.isInteger(parseInt(s, 10));
                return r = r && this.isValidNumber(e[s].id), r = r && e[s].name !== void 0, r
            }), t
        }
        isValidNumber(e) {
            return parseInt(e, 10) > 0
        }
        isSet(e) {
            let t = !1;
            return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t
        }
        set(e) {
            if (Array.isArray(e)) e.forEach(t => this.set(t));
            else if (this.isSet(e)) this.set(Array.from(e));
            else if (this.isIntMap(e)) this.set(Object.keys(e).map(t => Number(t)));
            else if (this.isValidNumber(e)) this.set_.add(e), this.maxId_ = Math.max(this.maxId, e), this.bitLength = 0;
            else throw new y("set()", e, "must be positive integer array, positive integer, Set<number>, or IntMap")
        }
        empty() {
            this.set_ = new Set
        }
        forEach(e) {
            for (let t = 1; t <= this.maxId; t++) e(this.has(t), t)
        }
        get size() {
            return this.set_.size
        }
        setAll(e) {
            this.set(e)
        }
    };
    var Ne, Pe, De, Ue, Fe, Ge, He, Me, Qe, ke, $e, Be, We, Je, ze, je, qe, Ye, n = class {};
    Ne = o.cmpId, Pe = o.cmpVersion, De = o.consentLanguage, Ue = o.consentScreen, Fe = o.created, Ge = o.isServiceSpecific, He = o.lastUpdated, Me = o.policyVersion, Qe = o.publisherCountryCode, ke = o.publisherLegitimateInterests, $e = o.publisherConsents, Be = o.purposeConsents, We = o.purposeLegitimateInterests, Je = o.purposeOneTreatment, ze = o.specialFeatureOptins, je = o.useNonStandardTexts, qe = o.vendorListVersion, Ye = o.version, i(n, Ne, 12), i(n, Pe, 12), i(n, De, 12), i(n, Ue, 6), i(n, Fe, 36), i(n, Ge, 1), i(n, He, 36), i(n, Me, 6), i(n, Qe, 12), i(n, ke, 24), i(n, $e, 24), i(n, Be, 24), i(n, We, 24), i(n, Je, 1), i(n, ze, 12), i(n, je, 1), i(n, qe, 12), i(n, Ye, 6), i(n, "anyBoolean", 1), i(n, "encodingType", 1), i(n, "maxId", 16), i(n, "numCustomPurposes", 6), i(n, "numEntries", 12), i(n, "numRestrictions", 12), i(n, "purposeId", 6), i(n, "restrictionType", 2), i(n, "segmentType", 3), i(n, "singleOrRange", 1), i(n, "vendorId", 16);
    var A = class {
        static encode(e) {
            return String(Number(e))
        }
        static decode(e) {
            return e === "1"
        }
    };
    var d = class {
        static encode(e, t) {
            let s;
            if (typeof e == "string" && (e = parseInt(e, 10)), s = e.toString(2), s.length > t || e < 0) throw new v(`${e} too large to encode into ${t}`);
            return s.length < t && (s = "0".repeat(t - s.length) + s), s
        }
        static decode(e, t) {
            if (t !== e.length) throw new b("invalid bit length");
            return parseInt(e, 2)
        }
    };
    var X = class {
        static encode(e, t) {
            return d.encode(Math.round(e.getTime() / 100), t)
        }
        static decode(e, t) {
            if (t !== e.length) throw new b("invalid bit length");
            let s = new Date;
            return s.setTime(d.decode(e, t) * 100), s
        }
    };
    var O = class {
        static encode(e, t) {
            let s = "";
            for (let r = 1; r <= t; r++) s += A.encode(e.has(r));
            return s
        }
        static decode(e, t) {
            if (e.length !== t) throw new b("bitfield encoding length mismatch");
            let s = new w;
            for (let r = 1; r <= t; r++) A.decode(e[r - 1]) && s.set(r);
            return s.bitLength = e.length, s
        }
    };
    var Z = class {
        static encode(e, t) {
            e = e.toUpperCase();
            let s = 65,
                r = e.charCodeAt(0) - s,
                p = e.charCodeAt(1) - s;
            if (r < 0 || r > 25 || p < 0 || p > 25) throw new v(`invalid language code: ${e}`);
            if (t % 2 === 1) throw new v(`numBits must be even, ${t} is not valid`);
            t = t / 2;
            let l = d.encode(r, t),
                u = d.encode(p, t);
            return l + u
        }
        static decode(e, t) {
            let s;
            if (t === e.length && !(e.length % 2)) {
                let p = e.length / 2,
                    l = d.decode(e.slice(0, p), p) + 65,
                    u = d.decode(e.slice(p), p) + 65;
                s = String.fromCharCode(l) + String.fromCharCode(u)
            } else throw new b("invalid bit length for language");
            return s
        }
    };
    var re = class {
        static encode(e) {
            let t = d.encode(e.numRestrictions, n.numRestrictions);
            if (!e.isEmpty()) {
                let s = Array.from(e.gvl.vendorIds),
                    r = (p, l) => {
                        let u = s.indexOf(p);
                        return s.indexOf(l) - u > 1
                    };
                e.getRestrictions().forEach(p => {
                    t += d.encode(p.purposeId, n.purposeId), t += d.encode(p.restrictionType, n.restrictionType);
                    let l = e.getVendors(p),
                        u = l.length,
                        h = 0,
                        g = 0,
                        m = "";
                    for (let I = 0; I < u; I++) {
                        let C = l[I];
                        if (g === 0 && (h++, g = C), I === u - 1 || r(C, l[I + 1])) {
                            let M = C !== g;
                            m += A.encode(M), m += d.encode(g, n.vendorId), M && (m += d.encode(C, n.vendorId)), g = 0
                        }
                    }
                    t += d.encode(h, n.numEntries), t += m
                })
            }
            return t
        }
        static decode(e) {
            let t = 0,
                s = new W,
                r = d.decode(e.substr(t, n.numRestrictions), n.numRestrictions);
            t += n.numRestrictions;
            for (let p = 0; p < r; p++) {
                let l = d.decode(e.substr(t, n.purposeId), n.purposeId);
                t += n.purposeId;
                let u = d.decode(e.substr(t, n.restrictionType), n.restrictionType);
                t += n.restrictionType;
                let h = new _(l, u),
                    g = d.decode(e.substr(t, n.numEntries), n.numEntries);
                t += n.numEntries;
                for (let m = 0; m < g; m++) {
                    let I = A.decode(e.substr(t, n.anyBoolean));
                    t += n.anyBoolean;
                    let C = d.decode(e.substr(t, n.vendorId), n.vendorId);
                    if (t += n.vendorId, I) {
                        let M = d.decode(e.substr(t, n.vendorId), n.vendorId);
                        if (t += n.vendorId, M < C) throw new b(`Invalid RangeEntry: endVendorId ${M} is less than ${C}`);
                        let ye = Array.from({
                            length: M - C + 1
                        }, (ot, Le) => C + Le);
                        s.restrictPurposeToLegalBasis(h, ye)
                    } else s.restrictPurposeToLegalBasis(h, [C])
                }
            }
            return s.bitLength = t, s
        }
    };
    var J;
    (function(a) {
        a[a.FIELD = 0] = "FIELD", a[a.RANGE = 1] = "RANGE"
    })(J || (J = {}));
    var F = class {
        static encode(e) {
            let t = [],
                s = [],
                r = d.encode(e.maxId, n.maxId),
                p = "",
                l, u = n.maxId + n.encodingType,
                h = u + e.maxId,
                g = n.vendorId * 2 + n.singleOrRange + n.numEntries,
                m = u + n.numEntries;
            return e.forEach((I, C) => {
                p += A.encode(I), l = e.maxId > g && m < h, l && I && (e.has(C + 1) ? s.length === 0 && (s.push(C), m += n.singleOrRange, m += n.vendorId) : (s.push(C), m += n.vendorId, t.push(s), s = []))
            }), l ? (r += String(J.RANGE), r += this.buildRangeEncoding(t)) : (r += String(J.FIELD), r += p), r
        }
        static decode(e, t) {
            let s, r = 0,
                p = d.decode(e.substr(r, n.maxId), n.maxId);
            r += n.maxId;
            let l = d.decode(e.charAt(r), n.encodingType);
            if (r += n.encodingType, l === J.RANGE) {
                if (s = new w, t === 1) {
                    if (e.substr(r, 1) === "1") throw new b("Unable to decode default consent=1");
                    r++
                }
                let u = d.decode(e.substr(r, n.numEntries), n.numEntries);
                r += n.numEntries;
                for (let h = 0; h < u; h++) {
                    let g = A.decode(e.charAt(r));
                    r += n.singleOrRange;
                    let m = d.decode(e.substr(r, n.vendorId), n.vendorId);
                    if (r += n.vendorId, g) {
                        let I = d.decode(e.substr(r, n.vendorId), n.vendorId);
                        r += n.vendorId;
                        for (let C = m; C <= I; C++) s.set(C)
                    } else s.set(m)
                }
            } else {
                let u = e.substr(r, p);
                r += p, s = O.decode(u, p)
            }
            return s.bitLength = r, s
        }
        static buildRangeEncoding(e) {
            let t = e.length,
                s = d.encode(t, n.numEntries);
            return e.forEach(r => {
                let p = r.length === 1;
                s += A.encode(!p), s += d.encode(r[0], n.vendorId), p || (s += d.encode(r[1], n.vendorId))
            }), s
        }
    };

    function Se() {
        return {
            [o.version]: d,
            [o.created]: X,
            [o.lastUpdated]: X,
            [o.cmpId]: d,
            [o.cmpVersion]: d,
            [o.consentScreen]: d,
            [o.consentLanguage]: Z,
            [o.vendorListVersion]: d,
            [o.policyVersion]: d,
            [o.isServiceSpecific]: A,
            [o.useNonStandardTexts]: A,
            [o.specialFeatureOptins]: O,
            [o.purposeConsents]: O,
            [o.purposeLegitimateInterests]: O,
            [o.purposeOneTreatment]: A,
            [o.publisherCountryCode]: Z,
            [o.vendorConsents]: F,
            [o.vendorLegitimateInterests]: F,
            [o.publisherRestrictions]: re,
            segmentType: d,
            [o.vendorsDisclosed]: F,
            [o.vendorsAllowed]: F,
            [o.publisherConsents]: O,
            [o.publisherLegitimateInterests]: O,
            [o.numCustomPurposes]: d,
            [o.publisherCustomConsents]: O,
            [o.publisherCustomLegitimateInterests]: O
        }
    }
    var oe = class {
        1 = {
            [E.CORE]: [o.version, o.created, o.lastUpdated, o.cmpId, o.cmpVersion, o.consentScreen, o.consentLanguage, o.vendorListVersion, o.purposeConsents, o.vendorConsents]
        };
        2 = {
            [E.CORE]: [o.version, o.created, o.lastUpdated, o.cmpId, o.cmpVersion, o.consentScreen, o.consentLanguage, o.vendorListVersion, o.policyVersion, o.isServiceSpecific, o.useNonStandardTexts, o.specialFeatureOptins, o.purposeConsents, o.purposeLegitimateInterests, o.purposeOneTreatment, o.publisherCountryCode, o.vendorConsents, o.vendorLegitimateInterests, o.publisherRestrictions],
            [E.PUBLISHER_TC]: [o.publisherConsents, o.publisherLegitimateInterests, o.numCustomPurposes, o.publisherCustomConsents, o.publisherCustomLegitimateInterests],
            [E.VENDORS_ALLOWED]: [o.vendorsAllowed],
            [E.VENDORS_DISCLOSED]: [o.vendorsDisclosed]
        }
    };
    var ie = class {
        1 = [E.CORE];
        2 = [E.CORE];
        constructor(e, t) {
            if (e.version === 2)
                if (e.isServiceSpecific) this[2].push(E.PUBLISHER_TC);
                else {
                    let s = !!(t && t.isForVendors);
                    (!s || e[o.supportOOB] === !0) && this[2].push(E.VENDORS_DISCLOSED), s && (e[o.supportOOB] && e[o.vendorsAllowed].size > 0 && this[2].push(E.VENDORS_ALLOWED), this[2].push(E.PUBLISHER_TC))
                }
        }
    };
    var z = class {
        static encode(e, t) {
            let s;
            try {
                s = this.fieldSequence[String(e.version)][t]
            } catch {
                throw new v(`Unable to encode version: ${e.version}, segment: ${t}`)
            }
            let r = "";
            t !== E.CORE && (r = d.encode(k.KEY_TO_ID[t], n.segmentType));
            let p = Se();
            return s.forEach(l => {
                let u = e[l],
                    h = p[l],
                    g = n[l];
                g === void 0 && this.isPublisherCustom(l) && (g = Number(e[o.numCustomPurposes]));
                try {
                    r += h.encode(u, g)
                } catch (m) {
                    throw new v(`Error encoding ${t}->${l}: ${m.message}`)
                }
            }), R.encode(r)
        }
        static decode(e, t, s) {
            let r = R.decode(e),
                p = 0;
            s === E.CORE && (t.version = d.decode(r.substr(p, n[o.version]), n[o.version])), s !== E.CORE && (p += n.segmentType);
            let l = this.fieldSequence[String(t.version)][s],
                u = Se();
            return l.forEach(h => {
                let g = u[h],
                    m = n[h];
                if (m === void 0 && this.isPublisherCustom(h) && (m = Number(t[o.numCustomPurposes])), m !== 0) {
                    let I = r.substr(p, m);
                    if (g === F ? t[h] = g.decode(I, t.version) : t[h] = g.decode(I, m), Number.isInteger(m)) p += m;
                    else if (Number.isInteger(t[h].bitLength)) p += t[h].bitLength;
                    else throw new b(h)
                }
            }), t
        }
        static isPublisherCustom(e) {
            return e.indexOf("publisherCustom") === 0
        }
    };
    i(z, "fieldSequence", new oe);
    var ee = class {
        static process(e, t) {
            let s = e.gvl;
            if (!s) throw new v("Unable to encode TCModel without a GVL");
            if (!s.isReady) throw new v("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
            e = e.clone(), e.consentLanguage = s.language.slice(0, 2).toUpperCase(), t ? .version > 0 && t ? .version <= this.processor.length ? e.version = t.version : e.version = this.processor.length;
            let r = e.version - 1;
            if (!this.processor[r]) throw new v(`Invalid version: ${e.version}`);
            return this.processor[r](e, s)
        }
    };
    i(ee, "processor", [e => e, (e, t) => {
        e.publisherRestrictions.gvl = t, e.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
        let s = new Map;
        return s.set("legIntPurposes", e.vendorLegitimateInterests), s.set("purposes", e.vendorConsents), s.forEach((r, p) => {
            r.forEach((l, u) => {
                if (l) {
                    let h = t.vendors[u];
                    if (!h || h.deletedDate) r.unset(u);
                    else if (h[p].length === 0 && !(p === "legIntPurposes" && h.purposes.length === 0 && h.legIntPurposes.length === 0 && h.specialPurposes.length > 0))
                        if (e.isServiceSpecific)
                            if (h.flexiblePurposes.length === 0) r.unset(u);
                            else {
                                let g = e.publisherRestrictions.getRestrictions(u),
                                    m = !1;
                                for (let I = 0, C = g.length; I < C && !m; I++) m = g[I].restrictionType === T.REQUIRE_CONSENT && p === "purposes" || g[I].restrictionType === T.REQUIRE_LI && p === "legIntPurposes";
                                m || r.unset(u)
                            }
                    else r.unset(u)
                }
            })
        }), e.vendorsDisclosed.set(t.vendors), e
    }]);
    var ne = class {
        static absCall(e, t, s, r) {
            return new Promise((p, l) => {
                let u = new XMLHttpRequest,
                    h = () => {
                        if (u.readyState == XMLHttpRequest.DONE)
                            if (u.status >= 200 && u.status < 300) {
                                let C = u.response;
                                if (typeof C == "string") try {
                                    C = JSON.parse(C)
                                } catch {}
                                p(C)
                            } else l(new Error(`HTTP Status: ${u.status} response type: ${u.responseType}`))
                    },
                    g = () => {
                        l(new Error("error"))
                    },
                    m = () => {
                        l(new Error("aborted"))
                    },
                    I = () => {
                        l(new Error("Timeout " + r + "ms " + e))
                    };
                u.withCredentials = s, u.addEventListener("load", h), u.addEventListener("error", g), u.addEventListener("abort", m), t === null ? u.open("GET", e, !0) : u.open("POST", e, !0), u.responseType = "json", u.timeout = r, u.ontimeout = I, u.send(t)
            })
        }
        static post(e, t, s = !1, r = 0) {
            return this.absCall(e, JSON.stringify(t), s, r)
        }
        static fetch(e, t = !1, s = 0) {
            return this.absCall(e, null, t, s)
        }
    };
    var f = class extends V {
            static set baseUrl(e) {
                if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e)) throw new Q("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
                e.length > 0 && e[e.length - 1] !== "/" && (e += "/"), this.baseUrl_ = e
            }
            static get baseUrl() {
                return this.baseUrl_
            }
            readyPromise;
            gvlSpecificationVersion;
            vendorListVersion;
            tcfPolicyVersion;
            lastUpdated;
            purposes;
            specialPurposes;
            features;
            specialFeatures;
            isReady_ = !1;
            vendors_;
            vendorIds;
            fullVendorList;
            byPurposeVendorMap;
            bySpecialPurposeVendorMap;
            byFeatureVendorMap;
            bySpecialFeatureVendorMap;
            stacks;
            dataCategories;
            lang_;
            cacheLang_;
            isLatest = !1;
            constructor(e) {
                super();
                let t = f.baseUrl;
                if (this.lang_ = f.DEFAULT_LANGUAGE, this.cacheLang_ = f.DEFAULT_LANGUAGE, this.isVendorList(e)) this.populate(e), this.readyPromise = Promise.resolve();
                else {
                    if (!t) throw new Q("must specify GVL.baseUrl before loading GVL json");
                    if (e > 0) {
                        let s = e;
                        f.CACHE.has(s) ? (this.populate(f.CACHE.get(s)), this.readyPromise = Promise.resolve()) : (t += f.versionedFilename.replace("[VERSION]", String(s)), this.readyPromise = this.fetchJson(t))
                    } else f.CACHE.has(f.LATEST_CACHE_KEY) ? (this.populate(f.CACHE.get(f.LATEST_CACHE_KEY)), this.readyPromise = Promise.resolve()) : (this.isLatest = !0, this.readyPromise = this.fetchJson(t + f.latestFilename))
                }
            }
            static emptyLanguageCache(e) {
                let t = !1;
                return e == null && f.LANGUAGE_CACHE.size > 0 ? (f.LANGUAGE_CACHE = new Map, t = !0) : typeof e == "string" && this.consentLanguages.has(e.toUpperCase()) && (f.LANGUAGE_CACHE.delete(e.toUpperCase()), t = !0), t
            }
            static emptyCache(e) {
                let t = !1;
                return Number.isInteger(e) && e >= 0 ? (f.CACHE.delete(e), t = !0) : e === void 0 && (f.CACHE = new Map, t = !0), t
            }
            cacheLanguage() {
                f.LANGUAGE_CACHE.has(this.cacheLang_) || f.LANGUAGE_CACHE.set(this.cacheLang_, {
                    purposes: this.purposes,
                    specialPurposes: this.specialPurposes,
                    features: this.features,
                    specialFeatures: this.specialFeatures,
                    stacks: this.stacks,
                    dataCategories: this.dataCategories
                })
            }
            async fetchJson(e) {
                try {
                    this.populate(await ne.fetch(e))
                } catch (t) {
                    throw new Q(t.message)
                }
            }
            getJson() {
                return JSON.parse(JSON.stringify({
                    gvlSpecificationVersion: this.gvlSpecificationVersion,
                    vendorListVersion: this.vendorListVersion,
                    tcfPolicyVersion: this.tcfPolicyVersion,
                    lastUpdated: this.lastUpdated,
                    purposes: this.purposes,
                    specialPurposes: this.specialPurposes,
                    features: this.features,
                    specialFeatures: this.specialFeatures,
                    stacks: this.stacks,
                    dataCategories: this.dataCategories,
                    vendors: this.fullVendorList
                }))
            }
            async changeLanguage(e) {
                let t = e;
                try {
                    t = f.consentLanguages.parseLanguage(e)
                } catch (r) {
                    throw new Q("Error during parsing the language: " + r.message)
                }
                let s = e.toUpperCase();
                if (!(t.toLowerCase() === f.DEFAULT_LANGUAGE.toLowerCase() && !f.LANGUAGE_CACHE.has(s)) && t !== this.lang_)
                    if (this.lang_ = t, f.LANGUAGE_CACHE.has(s)) {
                        let r = f.LANGUAGE_CACHE.get(s);
                        for (let p in r) r.hasOwnProperty(p) && (this[p] = r[p])
                    } else {
                        let r = f.baseUrl + f.languageFilename.replace("[LANG]", this.lang_.toLowerCase());
                        try {
                            await this.fetchJson(r), this.cacheLang_ = s, this.cacheLanguage()
                        } catch (p) {
                            throw new Q("unable to load language: " + p.message)
                        }
                    }
            }
            get language() {
                return this.lang_
            }
            isVendorList(e) {
                return e !== void 0 && e.vendors !== void 0
            }
            populate(e) {
                this.purposes = e.purposes, this.specialPurposes = e.specialPurposes, this.features = e.features, this.specialFeatures = e.specialFeatures, this.stacks = e.stacks, this.dataCategories = e.dataCategories, this.isVendorList(e) && (this.gvlSpecificationVersion = e.gvlSpecificationVersion, this.tcfPolicyVersion = e.tcfPolicyVersion, this.vendorListVersion = e.vendorListVersion, this.lastUpdated = e.lastUpdated, typeof this.lastUpdated == "string" && (this.lastUpdated = new Date(this.lastUpdated)), this.vendors_ = e.vendors, this.fullVendorList = e.vendors, this.mapVendors(), this.isReady_ = !0, this.isLatest && f.CACHE.set(f.LATEST_CACHE_KEY, this.getJson()), f.CACHE.has(this.vendorListVersion) || f.CACHE.set(this.vendorListVersion, this.getJson())), this.cacheLanguage()
            }
            mapVendors(e) {
                this.byPurposeVendorMap = {}, this.bySpecialPurposeVendorMap = {}, this.byFeatureVendorMap = {}, this.bySpecialFeatureVendorMap = {}, Object.keys(this.purposes).forEach(t => {
                    this.byPurposeVendorMap[t] = {
                        legInt: new Set,
                        consent: new Set,
                        flexible: new Set
                    }
                }), Object.keys(this.specialPurposes).forEach(t => {
                    this.bySpecialPurposeVendorMap[t] = new Set
                }), Object.keys(this.features).forEach(t => {
                    this.byFeatureVendorMap[t] = new Set
                }), Object.keys(this.specialFeatures).forEach(t => {
                    this.bySpecialFeatureVendorMap[t] = new Set
                }), Array.isArray(e) || (e = Object.keys(this.fullVendorList).map(t => +t)), this.vendorIds = new Set(e), this.vendors_ = e.reduce((t, s) => {
                    let r = this.vendors_[String(s)];
                    return r && r.deletedDate === void 0 && (r.purposes.forEach(p => {
                        this.byPurposeVendorMap[String(p)].consent.add(s)
                    }), r.specialPurposes.forEach(p => {
                        this.bySpecialPurposeVendorMap[String(p)].add(s)
                    }), r.legIntPurposes.forEach(p => {
                        this.byPurposeVendorMap[String(p)].legInt.add(s)
                    }), r.flexiblePurposes && r.flexiblePurposes.forEach(p => {
                        this.byPurposeVendorMap[String(p)].flexible.add(s)
                    }), r.features.forEach(p => {
                        this.byFeatureVendorMap[String(p)].add(s)
                    }), r.specialFeatures.forEach(p => {
                        this.bySpecialFeatureVendorMap[String(p)].add(s)
                    }), t[s] = r), t
                }, {})
            }
            getFilteredVendors(e, t, s, r) {
                let p = e.charAt(0).toUpperCase() + e.slice(1),
                    l, u = {};
                return e === "purpose" && s ? l = this["by" + p + "VendorMap"][String(t)][s] : l = this["by" + (r ? "Special" : "") + p + "VendorMap"][String(t)], l.forEach(h => {
                    u[String(h)] = this.vendors[String(h)]
                }), u
            }
            getVendorsWithConsentPurpose(e) {
                return this.getFilteredVendors("purpose", e, "consent")
            }
            getVendorsWithLegIntPurpose(e) {
                return this.getFilteredVendors("purpose", e, "legInt")
            }
            getVendorsWithFlexiblePurpose(e) {
                return this.getFilteredVendors("purpose", e, "flexible")
            }
            getVendorsWithSpecialPurpose(e) {
                return this.getFilteredVendors("purpose", e, void 0, !0)
            }
            getVendorsWithFeature(e) {
                return this.getFilteredVendors("feature", e)
            }
            getVendorsWithSpecialFeature(e) {
                return this.getFilteredVendors("feature", e, void 0, !0)
            }
            get vendors() {
                return this.vendors_
            }
            narrowVendorsTo(e) {
                this.mapVendors(e)
            }
            get isReady() {
                return this.isReady_
            }
            clone() {
                let e = new f(this.getJson());
                return this.lang_ !== f.DEFAULT_LANGUAGE && e.changeLanguage(this.lang_), e
            }
            static isInstanceOf(e) {
                return typeof e == "object" && typeof e.narrowVendorsTo == "function"
            }
        },
        S = f;
    i(S, "LANGUAGE_CACHE", new Map), i(S, "CACHE", new Map), i(S, "LATEST_CACHE_KEY", 0), i(S, "DEFAULT_LANGUAGE", "EN"), i(S, "consentLanguages", new K), i(S, "baseUrl_"), i(S, "latestFilename", "vendor-list.json"), i(S, "versionedFilename", "archives/vendor-list-v[VERSION].json"), i(S, "languageFilename", "purposes-[LANG].json");
    var G = class extends V {
        isServiceSpecific_ = !1;
        supportOOB_ = !0;
        useNonStandardTexts_ = !1;
        purposeOneTreatment_ = !1;
        publisherCountryCode_ = "AA";
        version_ = 2;
        consentScreen_ = 0;
        policyVersion_ = 4;
        consentLanguage_ = "EN";
        cmpId_ = 0;
        cmpVersion_ = 0;
        vendorListVersion_ = 0;
        numCustomPurposes_ = 0;
        gvl_;
        created;
        lastUpdated;
        specialFeatureOptins = new w;
        purposeConsents = new w;
        purposeLegitimateInterests = new w;
        publisherConsents = new w;
        publisherLegitimateInterests = new w;
        publisherCustomConsents = new w;
        publisherCustomLegitimateInterests = new w;
        customPurposes;
        vendorConsents = new w;
        vendorLegitimateInterests = new w;
        vendorsDisclosed = new w;
        vendorsAllowed = new w;
        publisherRestrictions = new W;
        constructor(e) {
            super(), e && (this.gvl = e), this.updated()
        }
        set gvl(e) {
            S.isInstanceOf(e) || (e = new S(e)), this.gvl_ = e, this.publisherRestrictions.gvl = e
        }
        get gvl() {
            return this.gvl_
        }
        set cmpId(e) {
            if (e = Number(e), Number.isInteger(e) && e > 1) this.cmpId_ = e;
            else throw new y("cmpId", e)
        }
        get cmpId() {
            return this.cmpId_
        }
        set cmpVersion(e) {
            if (e = Number(e), Number.isInteger(e) && e > -1) this.cmpVersion_ = e;
            else throw new y("cmpVersion", e)
        }
        get cmpVersion() {
            return this.cmpVersion_
        }
        set consentScreen(e) {
            if (e = Number(e), Number.isInteger(e) && e > -1) this.consentScreen_ = e;
            else throw new y("consentScreen", e)
        }
        get consentScreen() {
            return this.consentScreen_
        }
        set consentLanguage(e) {
            this.consentLanguage_ = e
        }
        get consentLanguage() {
            return this.consentLanguage_
        }
        set publisherCountryCode(e) {
            if (/^([A-z]){2}$/.test(e)) this.publisherCountryCode_ = e.toUpperCase();
            else throw new y("publisherCountryCode", e)
        }
        get publisherCountryCode() {
            return this.publisherCountryCode_
        }
        set vendorListVersion(e) {
            if (e = Number(e) >> 0, e < 0) throw new y("vendorListVersion", e);
            this.vendorListVersion_ = e
        }
        get vendorListVersion() {
            return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
        }
        set policyVersion(e) {
            if (this.policyVersion_ = parseInt(e, 10), this.policyVersion_ < 0) throw new y("policyVersion", e)
        }
        get policyVersion() {
            return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
        }
        set version(e) {
            this.version_ = parseInt(e, 10)
        }
        get version() {
            return this.version_
        }
        set isServiceSpecific(e) {
            this.isServiceSpecific_ = e
        }
        get isServiceSpecific() {
            return this.isServiceSpecific_
        }
        set useNonStandardTexts(e) {
            this.useNonStandardTexts_ = e
        }
        get useNonStandardTexts() {
            return this.useNonStandardTexts_
        }
        set supportOOB(e) {
            this.supportOOB_ = e
        }
        get supportOOB() {
            return this.supportOOB_
        }
        set purposeOneTreatment(e) {
            this.purposeOneTreatment_ = e
        }
        get purposeOneTreatment() {
            return this.purposeOneTreatment_
        }
        setAllVendorConsents() {
            this.vendorConsents.set(this.gvl.vendors)
        }
        unsetAllVendorConsents() {
            this.vendorConsents.empty()
        }
        setAllVendorsDisclosed() {
            this.vendorsDisclosed.set(this.gvl.vendors)
        }
        unsetAllVendorsDisclosed() {
            this.vendorsDisclosed.empty()
        }
        setAllVendorsAllowed() {
            this.vendorsAllowed.set(this.gvl.vendors)
        }
        unsetAllVendorsAllowed() {
            this.vendorsAllowed.empty()
        }
        setAllVendorLegitimateInterests() {
            this.vendorLegitimateInterests.set(this.gvl.vendors)
        }
        unsetAllVendorLegitimateInterests() {
            this.vendorLegitimateInterests.empty()
        }
        setAllPurposeConsents() {
            this.purposeConsents.set(this.gvl.purposes)
        }
        unsetAllPurposeConsents() {
            this.purposeConsents.empty()
        }
        setAllPurposeLegitimateInterests() {
            this.purposeLegitimateInterests.set(this.gvl.purposes)
        }
        unsetAllPurposeLegitimateInterests() {
            this.purposeLegitimateInterests.empty()
        }
        setAllSpecialFeatureOptins() {
            this.specialFeatureOptins.set(this.gvl.specialFeatures)
        }
        unsetAllSpecialFeatureOptins() {
            this.specialFeatureOptins.empty()
        }
        setAll() {
            this.setAllVendorConsents(), this.setAllPurposeLegitimateInterests(), this.setAllSpecialFeatureOptins(), this.setAllPurposeConsents(), this.setAllVendorLegitimateInterests()
        }
        unsetAll() {
            this.unsetAllVendorConsents(), this.unsetAllPurposeLegitimateInterests(), this.unsetAllSpecialFeatureOptins(), this.unsetAllPurposeConsents(), this.unsetAllVendorLegitimateInterests()
        }
        get numCustomPurposes() {
            let e = this.numCustomPurposes_;
            if (typeof this.customPurposes == "object") {
                let t = Object.keys(this.customPurposes).sort((s, r) => Number(s) - Number(r));
                e = parseInt(t.pop(), 10)
            }
            return e
        }
        set numCustomPurposes(e) {
            if (this.numCustomPurposes_ = parseInt(e, 10), this.numCustomPurposes_ < 0) throw new y("numCustomPurposes", e)
        }
        updated() {
            let e = new Date,
                t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
            this.created = t, this.lastUpdated = t
        }
    };
    i(G, "consentLanguages", S.consentLanguages);
    var j = class {
        static encode(e, t) {
            let s = "",
                r;
            return e = ee.process(e, t), Array.isArray(t ? .segments) ? r = t.segments : r = new ie(e, t)["" + e.version], r.forEach((p, l) => {
                let u = "";
                l < r.length - 1 && (u = "."), s += z.encode(e, p) + u
            }), s
        }
        static decode(e, t) {
            let s = e.split("."),
                r = s.length;
            t || (t = new G);
            for (let p = 0; p < r; p++) {
                let l = s[p],
                    h = R.decode(l.charAt(0)).substr(0, n.segmentType),
                    g = k.ID_TO_KEY[d.decode(h, n.segmentType).toString()];
                z.decode(l, t, g)
            }
            return t
        }
    };
    var x;
    (function(a) {
        a.PING = "ping", a.GET_TC_DATA = "getTCData", a.GET_IN_APP_TC_DATA = "getInAppTCData", a.GET_VENDOR_LIST = "getVendorList", a.ADD_EVENT_LISTENER = "addEventListener", a.REMOVE_EVENT_LISTENER = "removeEventListener"
    })(x || (x = {}));
    var N;
    (function(a) {
        a.STUB = "stub", a.LOADING = "loading", a.LOADED = "loaded", a.ERROR = "error"
    })(N || (N = {}));
    var H;
    (function(a) {
        a.VISIBLE = "visible", a.HIDDEN = "hidden", a.DISABLED = "disabled"
    })(H || (H = {}));
    var q;
    (function(a) {
        a.TC_LOADED = "tcloaded", a.CMP_UI_SHOWN = "cmpuishown", a.USER_ACTION_COMPLETE = "useractioncomplete"
    })(q || (q = {}));
    var P = class {
        listenerId;
        callback;
        next;
        param;
        success = !0;
        constructor(e, t, s, r) {
            Object.assign(this, {
                callback: e,
                listenerId: s,
                param: t,
                next: r
            });
            try {
                this.respond()
            } catch {
                this.invokeCallback(null)
            }
        }
        invokeCallback(e) {
            let t = e !== null;
            typeof this.next == "function" ? this.callback(this.next, e, t) : this.callback(e, t)
        }
    };
    var D = class extends P {
        respond() {
            this.throwIfParamInvalid(), this.invokeCallback(new Y(this.param, this.listenerId))
        }
        throwIfParamInvalid() {
            if (this.param !== void 0 && (!Array.isArray(this.param) || !this.param.every(Number.isInteger))) throw new Error("Invalid Parameter")
        }
    };
    var ae = class {
        eventQueue = new Map;
        queueNumber = 0;
        add(e) {
            return this.eventQueue.set(this.queueNumber, e), this.queueNumber++
        }
        remove(e) {
            return this.eventQueue.delete(e)
        }
        exec() {
            this.eventQueue.forEach((e, t) => {
                new D(e.callback, e.param, t, e.next)
            })
        }
        clear() {
            this.queueNumber = 0, this.eventQueue.clear()
        }
        get size() {
            return this.eventQueue.size
        }
    };
    var c = class {
        static reset() {
            delete this.cmpId, delete this.cmpVersion, delete this.eventStatus, delete this.gdprApplies, delete this.tcModel, delete this.tcString, delete this.tcfPolicyVersion, this.cmpStatus = N.LOADING, this.disabled = !1, this.displayStatus = H.HIDDEN, this.eventQueue.clear()
        }
    };
    i(c, "apiVersion", "2"), i(c, "tcfPolicyVersion"), i(c, "eventQueue", new ae), i(c, "cmpStatus", N.LOADING), i(c, "disabled", !1), i(c, "displayStatus", H.HIDDEN), i(c, "cmpId"), i(c, "cmpVersion"), i(c, "eventStatus"), i(c, "gdprApplies"), i(c, "tcModel"), i(c, "tcString");
    var $ = class {
        cmpId = c.cmpId;
        cmpVersion = c.cmpVersion;
        gdprApplies = c.gdprApplies;
        tcfPolicyVersion = c.tcfPolicyVersion
    };
    var pe = class extends $ {
        cmpStatus = N.ERROR
    };
    var Y = class extends $ {
        tcString;
        listenerId;
        eventStatus;
        cmpStatus;
        isServiceSpecific;
        useNonStandardTexts;
        publisherCC;
        purposeOneTreatment;
        outOfBand;
        purpose;
        vendor;
        specialFeatureOptins;
        publisher;
        constructor(e, t) {
            if (super(), this.eventStatus = c.eventStatus, this.cmpStatus = c.cmpStatus, this.listenerId = t, c.gdprApplies) {
                let s = c.tcModel;
                this.tcString = c.tcString, this.isServiceSpecific = s.isServiceSpecific, this.useNonStandardTexts = s.useNonStandardTexts, this.purposeOneTreatment = s.purposeOneTreatment, this.publisherCC = s.publisherCountryCode, this.outOfBand = {
                    allowedVendors: this.createVectorField(s.vendorsAllowed, e),
                    disclosedVendors: this.createVectorField(s.vendorsDisclosed, e)
                }, this.purpose = {
                    consents: this.createVectorField(s.purposeConsents),
                    legitimateInterests: this.createVectorField(s.purposeLegitimateInterests)
                }, this.vendor = {
                    consents: this.createVectorField(s.vendorConsents, e),
                    legitimateInterests: this.createVectorField(s.vendorLegitimateInterests, e)
                }, this.specialFeatureOptins = this.createVectorField(s.specialFeatureOptins), this.publisher = {
                    consents: this.createVectorField(s.publisherConsents),
                    legitimateInterests: this.createVectorField(s.publisherLegitimateInterests),
                    customPurpose: {
                        consents: this.createVectorField(s.publisherCustomConsents),
                        legitimateInterests: this.createVectorField(s.publisherCustomLegitimateInterests)
                    },
                    restrictions: this.createRestrictions(s.publisherRestrictions)
                }
            }
        }
        createRestrictions(e) {
            let t = {};
            if (e.numRestrictions > 0) {
                let s = e.getMaxVendorId();
                for (let r = 1; r <= s; r++) {
                    let p = r.toString();
                    e.getRestrictions(r).forEach(l => {
                        let u = l.purposeId.toString();
                        t[u] || (t[u] = {}), t[u][p] = l.restrictionType
                    })
                }
            }
            return t
        }
        createVectorField(e, t) {
            return t ? t.reduce((s, r) => (s[String(r)] = e.has(Number(r)), s), {}) : [...e].reduce((s, r) => (s[r[0].toString(10)] = r[1], s), {})
        }
    };
    var ce = class extends Y {
        constructor(e) {
            super(e), delete this.outOfBand
        }
        createVectorField(e) {
            return [...e].reduce((t, s) => (t += s[1] ? "1" : "0", t), "")
        }
        createRestrictions(e) {
            let t = {};
            if (e.numRestrictions > 0) {
                let s = e.getMaxVendorId();
                e.getRestrictions().forEach(r => {
                    t[r.purposeId.toString()] = "_".repeat(s)
                });
                for (let r = 0; r < s; r++) {
                    let p = r + 1;
                    e.getRestrictions(p).forEach(l => {
                        let u = l.restrictionType.toString(),
                            h = l.purposeId.toString(),
                            g = t[h].substr(0, r),
                            m = t[h].substr(r + 1);
                        t[h] = g + u + m
                    })
                }
            }
            return t
        }
    };
    var ue = class extends $ {
        cmpLoaded = !0;
        cmpStatus = c.cmpStatus;
        displayStatus = c.displayStatus;
        apiVersion = String(c.apiVersion);
        gvlVersion;
        constructor() {
            super(), c.tcModel && c.tcModel.vendorListVersion && (this.gvlVersion = +c.tcModel.vendorListVersion)
        }
    };
    var le = class extends P {
        respond() {
            this.invokeCallback(new ue)
        }
    };
    var de = class extends D {
        respond() {
            this.throwIfParamInvalid(), this.invokeCallback(new ce(this.param))
        }
    };
    var he = class extends P {
        respond() {
            let e = c.tcModel,
                t = e.vendorListVersion,
                s;
            this.param === void 0 && (this.param = t), this.param === t && e.gvl ? s = e.gvl : s = new S(this.param), s.readyPromise.then(() => {
                this.invokeCallback(s.getJson())
            })
        }
    };
    var me = class extends D {
        respond() {
            this.listenerId = c.eventQueue.add({
                callback: this.callback,
                param: this.param,
                next: this.next
            }), super.respond()
        }
    };
    var fe = class extends P {
        respond() {
            this.invokeCallback(c.eventQueue.remove(this.param))
        }
    };
    var Ke, Xe, Ze, et, tt, st, L = class {};
    Ke = x.PING, Xe = x.GET_TC_DATA, Ze = x.GET_IN_APP_TC_DATA, et = x.GET_VENDOR_LIST, tt = x.ADD_EVENT_LISTENER, st = x.REMOVE_EVENT_LISTENER, i(L, Ke, le), i(L, Xe, D), i(L, Ze, de), i(L, et, he), i(L, tt, me), i(L, st, fe);
    var te = class {
        static has(e) {
            return typeof e == "string" && (e = Number(e)), this.set_.has(e)
        }
    };
    i(te, "set_", new Set([0, 2, void 0, null]));
    var ge = "__tcfapi",
        Ee = class {
            callQueue;
            customCommands;
            constructor(e) {
                if (e) {
                    let t = x.ADD_EVENT_LISTENER;
                    if (e ? .[t]) throw new Error(`Built-In Custom Commmand for ${t} not allowed: Use ${x.GET_TC_DATA} instead`);
                    if (t = x.REMOVE_EVENT_LISTENER, e ? .[t]) throw new Error(`Built-In Custom Commmand for ${t} not allowed`);
                    e ? .[x.GET_TC_DATA] && (e[x.ADD_EVENT_LISTENER] = e[x.GET_TC_DATA], e[x.REMOVE_EVENT_LISTENER] = e[x.GET_TC_DATA]), this.customCommands = e
                }
                try {
                    this.callQueue = window[ge]() || []
                } catch {
                    this.callQueue = []
                } finally {
                    window[ge] = this.apiCall.bind(this), this.purgeQueuedCalls()
                }
            }
            apiCall(e, t, s, ...r) {
                if (typeof e != "string") s(null, !1);
                else if (!te.has(t)) s(null, !1);
                else {
                    if (typeof s != "function") throw new Error("invalid callback function");
                    c.disabled ? s(new pe, !1) : !this.isCustomCommand(e) && !this.isBuiltInCommand(e) ? s(null, !1) : this.isCustomCommand(e) && !this.isBuiltInCommand(e) ? this.customCommands[e](s, ...r) : e === x.PING ? this.isCustomCommand(e) ? new L[e](this.customCommands[e], r[0], null, s) : new L[e](s, r[0]) : c.tcModel === void 0 ? this.callQueue.push([e, t, s, ...r]) : this.isCustomCommand(e) && this.isBuiltInCommand(e) ? new L[e](this.customCommands[e], r[0], null, s) : new L[e](s, r[0])
                }
            }
            purgeQueuedCalls() {
                let e = this.callQueue;
                this.callQueue = [], e.forEach(t => {
                    window[ge](...t)
                })
            }
            isCustomCommand(e) {
                return this.customCommands && typeof this.customCommands[e] == "function"
            }
            isBuiltInCommand(e) {
                return L[e] !== void 0
            }
        };
    var Ie = class {
        callResponder;
        isServiceSpecific;
        numUpdates = 0;
        constructor(e, t, s = !1, r) {
            this.throwIfInvalidInt(e, "cmpId", 2), this.throwIfInvalidInt(t, "cmpVersion", 0), c.cmpId = e, c.cmpVersion = t, c.tcfPolicyVersion = 4, this.isServiceSpecific = !!s, this.callResponder = new Ee(r)
        }
        throwIfInvalidInt(e, t, s) {
            if (!(typeof e == "number" && Number.isInteger(e) && e >= s)) throw new Error(`Invalid ${t}: ${e}`)
        }
        update(e, t = !1) {
            if (c.disabled) throw new Error("CmpApi Disabled");
            c.cmpStatus = N.LOADED, t ? (c.displayStatus = H.VISIBLE, c.eventStatus = q.CMP_UI_SHOWN) : c.tcModel === void 0 ? (c.displayStatus = H.DISABLED, c.eventStatus = q.TC_LOADED) : (c.displayStatus = H.HIDDEN, c.eventStatus = q.USER_ACTION_COMPLETE), c.gdprApplies = e !== null, c.gdprApplies ? (e === "" ? (c.tcModel = new G, c.tcModel.cmpId = c.cmpId, c.tcModel.cmpVersion = c.cmpVersion) : c.tcModel = j.decode(e), c.tcModel.isServiceSpecific = this.isServiceSpecific, c.tcfPolicyVersion = Number(c.tcModel.policyVersion), c.tcString = e) : c.tcModel = null, this.numUpdates === 0 ? this.callResponder.purgeQueuedCalls() : c.eventQueue.exec(), this.numUpdates++
        }
        disable() {
            c.disabled = !0, c.cmpStatus = N.ERROR
        }
    };
    var xe = class {
            constructor() {}
            receiveMessage(e) {
                let t = typeof e.data == "string",
                    s = {};
                try {
                    t ? s = JSON.parse(e.data) : s = e.data
                } catch (r) {}
                if (s && s.__tcfapiCall) {
                    let r = s.__tcfapiCall.callId,
                        p = s.__tcfapiCall.command,
                        l = s.__tcfapiCall.parameter,
                        u = s.__tcfapiCall.version,
                        h = function(g, m) {
                            let I = {
                                __tcfapiReturn: {
                                    returnValue: g,
                                    success: m,
                                    callId: r,
                                    command: p
                                }
                            };
                            e && e.source && e.source.postMessage && e.source.postMessage(t ? JSON.stringify(I) : I, "*")
                        };
                    window.__tcfapi.apply(window, [p, u, h, l])
                } else s && s.hasOwnProperty("OnetrustIABCookies") && (s.OnetrustIABCookies === "blocked" && (s.OnetrustIABCookies = null), window.OneTrust.updateConsentFromCookies(s.OnetrustIABCookies))
            }
            initializeTCF() {
                window.removeEventListener("message", window.receiveOTMessage), delete window.receiveOTMessage, (window.attachEvent || window.addEventListener)("message", t => B.receiveMessage(t), !1)
            }
            getGVLObject(e, t) {
                if (e) {
                    let s = e.substr(e.lastIndexOf("/") + 1);
                    S.baseUrl = e.replace("/" + s, ""), S.latestFilename = s
                }
                return new S(t)
            }
            getTCModelObject(e) {
                return new G(e)
            }
            getTCStringObject() {
                return j
            }
            getCmpApi(e, t, s, r = {}) {
                return new Ie(e, t, s, r)
            }
            getPurposeRestriction(e, t) {
                return new _(e, t)
            }
        },
        B = new xe;
    B.initializeTCF();
    var rt = {
        gvl: B.getGVLObject,
        tcModel: B.getTCModelObject,
        tcString: B.getTCStringObject,
        cmpApi: B.getCmpApi,
        purposeRestriction: B.getPurposeRestriction
    };
    window.otIabModule = ve(we({}, window.otIabModule), {
        tcfSdkRef: rt
    });
})();