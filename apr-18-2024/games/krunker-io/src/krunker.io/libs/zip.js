! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).zip = {})
}(this, (function(t) {
    "use strict";
    const e = 256,
        n = 256,
        i = -2,
        r = -5;

    function a(t) {
        return s(t.map((([t, e]) => new Array(t).fill(e, 0, t))))
    }

    function s(t) {
        return t.reduce(((t, e) => t.concat(Array.isArray(e) ? s(e) : e)), [])
    }
    const o = [0, 1, 2, 3].concat(...a([
        [2, 4],
        [2, 5],
        [4, 6],
        [4, 7],
        [8, 8],
        [8, 9],
        [16, 10],
        [16, 11],
        [32, 12],
        [32, 13],
        [64, 14],
        [64, 15],
        [2, 0],
        [1, 16],
        [1, 17],
        [2, 18],
        [2, 19],
        [4, 20],
        [4, 21],
        [8, 22],
        [8, 23],
        [16, 24],
        [16, 25],
        [32, 26],
        [32, 27],
        [64, 28],
        [64, 29]
    ]));

    function l() {
        const t = this;

        function e(t, e) {
            let n = 0;
            do {
                n |= 1 & t, t >>>= 1, n <<= 1
            } while (--e > 0);
            return n >>> 1
        }
        t.build_tree = function(n) {
            const i = t.dyn_tree,
                r = t.stat_desc.static_tree,
                a = t.stat_desc.elems;
            let s, o, l, d = -1;
            for (n.heap_len = 0, n.heap_max = 573, s = 0; s < a; s++) 0 !== i[2 * s] ? (n.heap[++n.heap_len] = d = s, n.depth[s] = 0) : i[2 * s + 1] = 0;
            for (; n.heap_len < 2;) l = n.heap[++n.heap_len] = d < 2 ? ++d : 0, i[2 * l] = 1, n.depth[l] = 0, n.opt_len--, r && (n.static_len -= r[2 * l + 1]);
            for (t.max_code = d, s = Math.floor(n.heap_len / 2); s >= 1; s--) n.pqdownheap(i, s);
            l = a;
            do {
                s = n.heap[1], n.heap[1] = n.heap[n.heap_len--], n.pqdownheap(i, 1), o = n.heap[1], n.heap[--n.heap_max] = s, n.heap[--n.heap_max] = o, i[2 * l] = i[2 * s] + i[2 * o], n.depth[l] = Math.max(n.depth[s], n.depth[o]) + 1, i[2 * s + 1] = i[2 * o + 1] = l, n.heap[1] = l++, n.pqdownheap(i, 1)
            } while (n.heap_len >= 2);
            n.heap[--n.heap_max] = n.heap[1],
                function(e) {
                    const n = t.dyn_tree,
                        i = t.stat_desc.static_tree,
                        r = t.stat_desc.extra_bits,
                        a = t.stat_desc.extra_base,
                        s = t.stat_desc.max_length;
                    let o, l, d, c, f, u, p = 0;
                    for (c = 0; c <= 15; c++) e.bl_count[c] = 0;
                    for (n[2 * e.heap[e.heap_max] + 1] = 0, o = e.heap_max + 1; o < 573; o++) l = e.heap[o], c = n[2 * n[2 * l + 1] + 1] + 1, c > s && (c = s, p++), n[2 * l + 1] = c, l > t.max_code || (e.bl_count[c]++, f = 0, l >= a && (f = r[l - a]), u = n[2 * l], e.opt_len += u * (c + f), i && (e.static_len += u * (i[2 * l + 1] + f)));
                    if (0 !== p) {
                        do {
                            for (c = s - 1; 0 === e.bl_count[c];) c--;
                            e.bl_count[c]--, e.bl_count[c + 1] += 2, e.bl_count[s]--, p -= 2
                        } while (p > 0);
                        for (c = s; 0 !== c; c--)
                            for (l = e.bl_count[c]; 0 !== l;) d = e.heap[--o], d > t.max_code || (n[2 * d + 1] != c && (e.opt_len += (c - n[2 * d + 1]) * n[2 * d], n[2 * d + 1] = c), l--)
                    }
                }(n),
                function(t, n, i) {
                    const r = [];
                    let a, s, o, l = 0;
                    for (a = 1; a <= 15; a++) r[a] = l = l + i[a - 1] << 1;
                    for (s = 0; s <= n; s++) o = t[2 * s + 1], 0 !== o && (t[2 * s] = e(r[o]++, o))
                }(i, t.max_code, n.bl_count)
        }
    }

    function d(t, e, n, i, r) {
        const a = this;
        a.static_tree = t, a.extra_bits = e, a.extra_base = n, a.elems = i, a.max_length = r
    }
    l._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...a([
        [2, 8],
        [2, 9],
        [2, 10],
        [2, 11],
        [4, 12],
        [4, 13],
        [4, 14],
        [4, 15],
        [8, 16],
        [8, 17],
        [8, 18],
        [8, 19],
        [16, 20],
        [16, 21],
        [16, 22],
        [16, 23],
        [32, 24],
        [32, 25],
        [32, 26],
        [31, 27],
        [1, 28]
    ])), l.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], l.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], l.d_code = function(t) {
        return t < 256 ? o[t] : o[256 + (t >>> 7)]
    }, l.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], l.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], l.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], l.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], d.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], d.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], d.static_l_desc = new d(d.static_ltree, l.extra_lbits, 257, 286, 15), d.static_d_desc = new d(d.static_dtree, l.extra_dbits, 0, 30, 15), d.static_bl_desc = new d(null, l.extra_blbits, 0, 19, 7);

    function c(t, e, n, i, r) {
        const a = this;
        a.good_length = t, a.max_lazy = e, a.nice_length = n, a.max_chain = i, a.func = r
    }
    const f = [new c(0, 0, 0, 0, 0), new c(4, 4, 8, 4, 1), new c(4, 5, 16, 8, 1), new c(4, 6, 32, 32, 1), new c(4, 4, 16, 16, 2), new c(8, 16, 32, 32, 2), new c(8, 16, 128, 128, 2), new c(8, 32, 128, 256, 2), new c(32, 128, 258, 1024, 2), new c(32, 258, 258, 4096, 2)],
        u = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""],
        p = 113,
        h = 666,
        m = 258,
        _ = 262;

    function x(t, e, n, i) {
        const r = t[2 * e],
            a = t[2 * n];
        return r < a || r == a && i[e] <= i[n]
    }

    function w() {
        const t = this;
        let a, s, o, c, w, g, b, v, y, k, z, A, U, E, S, D, R, I, B, j, T, C, F, M, W, O, H, q, N, L, P, V, Z;
        const K = new l,
            G = new l,
            X = new l;
        let Q, Y, J, $, tt, et, nt, it;

        function rt() {
            let e;
            for (e = 0; e < 286; e++) P[2 * e] = 0;
            for (e = 0; e < 30; e++) V[2 * e] = 0;
            for (e = 0; e < 19; e++) Z[2 * e] = 0;
            P[512] = 1, t.opt_len = t.static_len = 0, J = tt = 0
        }

        function at(t, e) {
            let n, i = -1,
                r = t[1],
                a = 0,
                s = 7,
                o = 4;
            0 === r && (s = 138, o = 3), t[2 * (e + 1) + 1] = 65535;
            for (let l = 0; l <= e; l++) n = r, r = t[2 * (l + 1) + 1], ++a < s && n == r || (a < o ? Z[2 * n] += a : 0 !== n ? (n != i && Z[2 * n]++, Z[32]++) : a <= 10 ? Z[34]++ : Z[36]++, a = 0, i = n, 0 === r ? (s = 138, o = 3) : n == r ? (s = 6, o = 3) : (s = 7, o = 4))
        }

        function st(e) {
            t.pending_buf[t.pending++] = e
        }

        function ot(t) {
            st(255 & t), st(t >>> 8 & 255)
        }

        function lt(t, e) {
            let n;
            const i = e;
            it > 16 - i ? (n = t, nt |= n << it & 65535, ot(nt), nt = n >>> 16 - it, it += i - 16) : (nt |= t << it & 65535, it += i)
        }

        function dt(t, e) {
            const n = 2 * t;
            lt(65535 & e[n], 65535 & e[n + 1])
        }

        function ct(t, e) {
            let n, i, r = -1,
                a = t[1],
                s = 0,
                o = 7,
                l = 4;
            for (0 === a && (o = 138, l = 3), n = 0; n <= e; n++)
                if (i = a, a = t[2 * (n + 1) + 1], !(++s < o && i == a)) {
                    if (s < l)
                        do {
                            dt(i, Z)
                        } while (0 != --s);
                    else 0 !== i ? (i != r && (dt(i, Z), s--), dt(16, Z), lt(s - 3, 2)) : s <= 10 ? (dt(17, Z), lt(s - 3, 3)) : (dt(18, Z), lt(s - 11, 7));
                    s = 0, r = i, 0 === a ? (o = 138, l = 3) : i == a ? (o = 6, l = 3) : (o = 7, l = 4)
                }
        }

        function ft() {
            16 == it ? (ot(nt), nt = 0, it = 0) : it >= 8 && (st(255 & nt), nt >>>= 8, it -= 8)
        }

        function ut(n, i) {
            let r, a, s;
            if (t.pending_buf[$ + 2 * J] = n >>> 8 & 255, t.pending_buf[$ + 2 * J + 1] = 255 & n, t.pending_buf[Q + J] = 255 & i, J++, 0 === n ? P[2 * i]++ : (tt++, n--, P[2 * (l._length_code[i] + e + 1)]++, V[2 * l.d_code(n)]++), 0 == (8191 & J) && H > 2) {
                for (r = 8 * J, a = T - R, s = 0; s < 30; s++) r += V[2 * s] * (5 + l.extra_dbits[s]);
                if (r >>>= 3, tt < Math.floor(J / 2) && r < Math.floor(a / 2)) return !0
            }
            return J == Y - 1
        }

        function pt(i, r) {
            let a, s, o, d, c = 0;
            if (0 !== J)
                do {
                    a = t.pending_buf[$ + 2 * c] << 8 & 65280 | 255 & t.pending_buf[$ + 2 * c + 1], s = 255 & t.pending_buf[Q + c], c++, 0 === a ? dt(s, i) : (o = l._length_code[s], dt(o + e + 1, i), d = l.extra_lbits[o], 0 !== d && (s -= l.base_length[o], lt(s, d)), a--, o = l.d_code(a), dt(o, r), d = l.extra_dbits[o], 0 !== d && (a -= l.base_dist[o], lt(a, d)))
                } while (c < J);
            dt(n, i), et = i[513]
        }

        function ht() {
            it > 8 ? ot(nt) : it > 0 && st(255 & nt), nt = 0, it = 0
        }

        function mt(e, n, i) {
            lt(0 + (i ? 1 : 0), 3),
                function(e, n, i) {
                    ht(), et = 8, i && (ot(n), ot(~n)), t.pending_buf.set(v.subarray(e, e + n), t.pending), t.pending += n
                }(e, n, !0)
        }

        function _t(e, n, i) {
            let r, a, s = 0;
            H > 0 ? (K.build_tree(t), G.build_tree(t), s = function() {
                let e;
                for (at(P, K.max_code), at(V, G.max_code), X.build_tree(t), e = 18; e >= 3 && 0 === Z[2 * l.bl_order[e] + 1]; e--);
                return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
            }(), r = t.opt_len + 3 + 7 >>> 3, a = t.static_len + 3 + 7 >>> 3, a <= r && (r = a)) : r = a = n + 5, n + 4 <= r && -1 != e ? mt(e, n, i) : a == r ? (lt(2 + (i ? 1 : 0), 3), pt(d.static_ltree, d.static_dtree)) : (lt(4 + (i ? 1 : 0), 3), function(t, e, n) {
                let i;
                for (lt(t - 257, 5), lt(e - 1, 5), lt(n - 4, 4), i = 0; i < n; i++) lt(Z[2 * l.bl_order[i] + 1], 3);
                ct(P, t - 1), ct(V, e - 1)
            }(K.max_code + 1, G.max_code + 1, s + 1), pt(P, V)), rt(), i && ht()
        }

        function xt(t) {
            _t(R >= 0 ? R : -1, T - R, t), R = T, a.flush_pending()
        }

        function wt() {
            let t, e, n, i;
            do {
                if (i = y - F - T, 0 === i && 0 === T && 0 === F) i = w;
                else if (-1 == i) i--;
                else if (T >= w + w - _) {
                    v.set(v.subarray(w, w + w), 0), C -= w, T -= w, R -= w, t = U, n = t;
                    do {
                        e = 65535 & z[--n], z[n] = e >= w ? e - w : 0
                    } while (0 != --t);
                    t = w, n = t;
                    do {
                        e = 65535 & k[--n], k[n] = e >= w ? e - w : 0
                    } while (0 != --t);
                    i += w
                }
                if (0 === a.avail_in) return;
                t = a.read_buf(v, T + F, i), F += t, F >= 3 && (A = 255 & v[T], A = (A << D ^ 255 & v[T + 1]) & S)
            } while (F < _ && 0 !== a.avail_in)
        }

        function gt(t) {
            let e, n, i = W,
                r = T,
                a = M;
            const s = T > w - _ ? T - (w - _) : 0;
            let o = L;
            const l = b,
                d = T + m;
            let c = v[r + a - 1],
                f = v[r + a];
            M >= N && (i >>= 2), o > F && (o = F);
            do {
                if (e = t, v[e + a] == f && v[e + a - 1] == c && v[e] == v[r] && v[++e] == v[r + 1]) {
                    r += 2, e++;
                    do {} while (v[++r] == v[++e] && v[++r] == v[++e] && v[++r] == v[++e] && v[++r] == v[++e] && v[++r] == v[++e] && v[++r] == v[++e] && v[++r] == v[++e] && v[++r] == v[++e] && r < d);
                    if (n = m - (d - r), r = d - m, n > a) {
                        if (C = t, a = n, n >= o) break;
                        c = v[r + a - 1], f = v[r + a]
                    }
                }
            } while ((t = 65535 & k[t & l]) > s && 0 != --i);
            return a <= F ? a : F
        }

        function bt(e) {
            return e.total_in = e.total_out = 0, e.msg = null, t.pending = 0, t.pending_out = 0, s = p, c = 0, K.dyn_tree = P, K.stat_desc = d.static_l_desc, G.dyn_tree = V, G.stat_desc = d.static_d_desc, X.dyn_tree = Z, X.stat_desc = d.static_bl_desc, nt = 0, it = 0, et = 8, rt(),
                function() {
                    y = 2 * w, z[U - 1] = 0;
                    for (let t = 0; t < U - 1; t++) z[t] = 0;
                    O = f[H].max_lazy, N = f[H].good_length, L = f[H].nice_length, W = f[H].max_chain, T = 0, R = 0, F = 0, I = M = 2, j = 0, A = 0
                }(), 0
        }
        t.depth = [], t.bl_count = [], t.heap = [], P = [], V = [], Z = [], t.pqdownheap = function(e, n) {
            const i = t.heap,
                r = i[n];
            let a = n << 1;
            for (; a <= t.heap_len && (a < t.heap_len && x(e, i[a + 1], i[a], t.depth) && a++, !x(e, r, i[a], t.depth));) i[n] = i[a], n = a, a <<= 1;
            i[n] = r
        }, t.deflateInit = function(e, n, r, a, s, l) {
            return a || (a = 8), s || (s = 8), l || (l = 0), e.msg = null, -1 == n && (n = 6), s < 1 || s > 9 || 8 != a || r < 9 || r > 15 || n < 0 || n > 9 || l < 0 || l > 2 ? i : (e.dstate = t, g = r, w = 1 << g, b = w - 1, E = s + 7, U = 1 << E, S = U - 1, D = Math.floor((E + 3 - 1) / 3), v = new Uint8Array(2 * w), k = [], z = [], Y = 1 << s + 6, t.pending_buf = new Uint8Array(4 * Y), o = 4 * Y, $ = Math.floor(Y / 2), Q = 3 * Y, H = n, q = l, bt(e))
        }, t.deflateEnd = function() {
            return 42 != s && s != p && s != h ? i : (t.pending_buf = null, z = null, k = null, v = null, t.dstate = null, s == p ? -3 : 0)
        }, t.deflateParams = function(t, e, n) {
            let r = 0;
            return -1 == e && (e = 6), e < 0 || e > 9 || n < 0 || n > 2 ? i : (f[H].func != f[e].func && 0 !== t.total_in && (r = t.deflate(1)), H != e && (H = e, O = f[H].max_lazy, N = f[H].good_length, L = f[H].nice_length, W = f[H].max_chain), q = n, r)
        }, t.deflateSetDictionary = function(t, e, n) {
            let r, a = n,
                o = 0;
            if (!e || 42 != s) return i;
            if (a < 3) return 0;
            for (a > w - _ && (a = w - _, o = n - a), v.set(e.subarray(o, o + a), 0), T = a, R = a, A = 255 & v[0], A = (A << D ^ 255 & v[1]) & S, r = 0; r <= a - 3; r++) A = (A << D ^ 255 & v[r + 2]) & S, k[r & b] = z[A], z[A] = r;
            return 0
        }, t.deflate = function(e, l) {
            let m, x, y, E, W;
            if (l > 4 || l < 0) return i;
            if (!e.next_out || !e.next_in && 0 !== e.avail_in || s == h && 4 != l) return e.msg = u[4], i;
            if (0 === e.avail_out) return e.msg = u[7], r;
            var N;
            if (a = e, E = c, c = l, 42 == s && (x = 8 + (g - 8 << 4) << 8, y = (H - 1 & 255) >> 1, y > 3 && (y = 3), x |= y << 6, 0 !== T && (x |= 32), x += 31 - x % 31, s = p, st((N = x) >> 8 & 255), st(255 & N)), 0 !== t.pending) {
                if (a.flush_pending(), 0 === a.avail_out) return c = -1, 0
            } else if (0 === a.avail_in && l <= E && 4 != l) return a.msg = u[7], r;
            if (s == h && 0 !== a.avail_in) return e.msg = u[7], r;
            if (0 !== a.avail_in || 0 !== F || 0 != l && s != h) {
                switch (W = -1, f[H].func) {
                    case 0:
                        W = function(t) {
                            let e, n = 65535;
                            for (n > o - 5 && (n = o - 5);;) {
                                if (F <= 1) {
                                    if (wt(), 0 === F && 0 == t) return 0;
                                    if (0 === F) break
                                }
                                if (T += F, F = 0, e = R + n, (0 === T || T >= e) && (F = T - e, T = e, xt(!1), 0 === a.avail_out)) return 0;
                                if (T - R >= w - _ && (xt(!1), 0 === a.avail_out)) return 0
                            }
                            return xt(4 == t), 0 === a.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                        }(l);
                        break;
                    case 1:
                        W = function(t) {
                            let e, n = 0;
                            for (;;) {
                                if (F < _) {
                                    if (wt(), F < _ && 0 == t) return 0;
                                    if (0 === F) break
                                }
                                if (F >= 3 && (A = (A << D ^ 255 & v[T + 2]) & S, n = 65535 & z[A], k[T & b] = z[A], z[A] = T), 0 !== n && (T - n & 65535) <= w - _ && 2 != q && (I = gt(n)), I >= 3)
                                    if (e = ut(T - C, I - 3), F -= I, I <= O && F >= 3) {
                                        I--;
                                        do {
                                            T++, A = (A << D ^ 255 & v[T + 2]) & S, n = 65535 & z[A], k[T & b] = z[A], z[A] = T
                                        } while (0 != --I);
                                        T++
                                    } else T += I, I = 0, A = 255 & v[T], A = (A << D ^ 255 & v[T + 1]) & S;
                                else e = ut(0, 255 & v[T]), F--, T++;
                                if (e && (xt(!1), 0 === a.avail_out)) return 0
                            }
                            return xt(4 == t), 0 === a.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                        }(l);
                        break;
                    case 2:
                        W = function(t) {
                            let e, n, i = 0;
                            for (;;) {
                                if (F < _) {
                                    if (wt(), F < _ && 0 == t) return 0;
                                    if (0 === F) break
                                }
                                if (F >= 3 && (A = (A << D ^ 255 & v[T + 2]) & S, i = 65535 & z[A], k[T & b] = z[A], z[A] = T), M = I, B = C, I = 2, 0 !== i && M < O && (T - i & 65535) <= w - _ && (2 != q && (I = gt(i)), I <= 5 && (1 == q || 3 == I && T - C > 4096) && (I = 2)), M >= 3 && I <= M) {
                                    n = T + F - 3, e = ut(T - 1 - B, M - 3), F -= M - 1, M -= 2;
                                    do {
                                        ++T <= n && (A = (A << D ^ 255 & v[T + 2]) & S, i = 65535 & z[A], k[T & b] = z[A], z[A] = T)
                                    } while (0 != --M);
                                    if (j = 0, I = 2, T++, e && (xt(!1), 0 === a.avail_out)) return 0
                                } else if (0 !== j) {
                                    if (e = ut(0, 255 & v[T - 1]), e && xt(!1), T++, F--, 0 === a.avail_out) return 0
                                } else j = 1, T++, F--
                            }
                            return 0 !== j && (e = ut(0, 255 & v[T - 1]), j = 0), xt(4 == t), 0 === a.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                        }(l)
                }
                if (2 != W && 3 != W || (s = h), 0 == W || 2 == W) return 0 === a.avail_out && (c = -1), 0;
                if (1 == W) {
                    if (1 == l) lt(2, 3), dt(n, d.static_ltree), ft(), 1 + et + 10 - it < 9 && (lt(2, 3), dt(n, d.static_ltree), ft()), et = 7;
                    else if (mt(0, 0, !1), 3 == l)
                        for (m = 0; m < U; m++) z[m] = 0;
                    if (a.flush_pending(), 0 === a.avail_out) return c = -1, 0
                }
            }
            return 4 != l ? 0 : 1
        }
    }

    function g() {
        const t = this;
        t.next_in_index = 0, t.next_out_index = 0, t.avail_in = 0, t.total_in = 0, t.avail_out = 0, t.total_out = 0
    }
    g.prototype = {
        deflateInit: function(t, e) {
            const n = this;
            return n.dstate = new w, e || (e = 15), n.dstate.deflateInit(n, t, e)
        },
        deflate: function(t) {
            const e = this;
            return e.dstate ? e.dstate.deflate(e, t) : i
        },
        deflateEnd: function() {
            const t = this;
            if (!t.dstate) return i;
            const e = t.dstate.deflateEnd();
            return t.dstate = null, e
        },
        deflateParams: function(t, e) {
            const n = this;
            return n.dstate ? n.dstate.deflateParams(n, t, e) : i
        },
        deflateSetDictionary: function(t, e) {
            const n = this;
            return n.dstate ? n.dstate.deflateSetDictionary(n, t, e) : i
        },
        read_buf: function(t, e, n) {
            const i = this;
            let r = i.avail_in;
            return r > n && (r = n), 0 === r ? 0 : (i.avail_in -= r, t.set(i.next_in.subarray(i.next_in_index, i.next_in_index + r), e), i.next_in_index += r, i.total_in += r, r)
        },
        flush_pending: function() {
            const t = this;
            let e = t.dstate.pending;
            e > t.avail_out && (e = t.avail_out), 0 !== e && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index), t.next_out_index += e, t.dstate.pending_out += e, t.total_out += e, t.avail_out -= e, t.dstate.pending -= e, 0 === t.dstate.pending && (t.dstate.pending_out = 0))
        }
    };
    const b = -2,
        v = -3,
        y = -5,
        k = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
        z = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255],
        A = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577],
        U = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        E = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112],
        S = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        D = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        R = 15;

    function I() {
        let t, e, n, i, r, a;

        function s(t, e, s, o, l, d, c, f, u, p, h) {
            let m, _, x, w, g, b, k, z, A, U, E, S, D, I, B;
            U = 0, g = s;
            do {
                n[t[e + U]]++, U++, g--
            } while (0 !== g);
            if (n[0] == s) return c[0] = -1, f[0] = 0, 0;
            for (z = f[0], b = 1; b <= R && 0 === n[b]; b++);
            for (k = b, z < b && (z = b), g = R; 0 !== g && 0 === n[g]; g--);
            for (x = g, z > g && (z = g), f[0] = z, I = 1 << b; b < g; b++, I <<= 1)
                if ((I -= n[b]) < 0) return v;
            if ((I -= n[g]) < 0) return v;
            for (n[g] += I, a[1] = b = 0, U = 1, D = 2; 0 != --g;) a[D] = b += n[U], D++, U++;
            g = 0, U = 0;
            do {
                0 !== (b = t[e + U]) && (h[a[b]++] = g), U++
            } while (++g < s);
            for (s = a[x], a[0] = g = 0, U = 0, w = -1, S = -z, r[0] = 0, E = 0, B = 0; k <= x; k++)
                for (m = n[k]; 0 != m--;) {
                    for (; k > S + z;) {
                        if (w++, S += z, B = x - S, B = B > z ? z : B, (_ = 1 << (b = k - S)) > m + 1 && (_ -= m + 1, D = k, b < B))
                            for (; ++b < B && !((_ <<= 1) <= n[++D]);) _ -= n[D];
                        if (B = 1 << b, p[0] + B > 1440) return v;
                        r[w] = E = p[0], p[0] += B, 0 !== w ? (a[w] = g, i[0] = b, i[1] = z, b = g >>> S - z, i[2] = E - r[w - 1] - b, u.set(i, 3 * (r[w - 1] + b))) : c[0] = E
                    }
                    for (i[1] = k - S, U >= s ? i[0] = 192 : h[U] < o ? (i[0] = h[U] < 256 ? 0 : 96, i[2] = h[U++]) : (i[0] = d[h[U] - o] + 16 + 64, i[2] = l[h[U++] - o]), _ = 1 << k - S, b = g >>> S; b < B; b += _) u.set(i, 3 * (E + b));
                    for (b = 1 << k - 1; 0 != (g & b); b >>>= 1) g ^= b;
                    for (g ^= b, A = (1 << S) - 1;
                        (g & A) != a[w];) w--, S -= z, A = (1 << S) - 1
                }
            return 0 !== I && 1 != x ? y : 0
        }

        function o(s) {
            let o;
            for (t || (t = [], e = [], n = new Int32Array(16), i = [], r = new Int32Array(R), a = new Int32Array(16)), e.length < s && (e = []), o = 0; o < s; o++) e[o] = 0;
            for (o = 0; o < 16; o++) n[o] = 0;
            for (o = 0; o < 3; o++) i[o] = 0;
            r.set(n.subarray(0, R), 0), a.set(n.subarray(0, 16), 0)
        }
        this.inflate_trees_bits = function(n, i, r, a, l) {
            let d;
            return o(19), t[0] = 0, d = s(n, 0, 19, 19, null, null, r, i, a, t, e), d == v ? l.msg = "oversubscribed dynamic bit lengths tree" : d != y && 0 !== i[0] || (l.msg = "incomplete dynamic bit lengths tree", d = v), d
        }, this.inflate_trees_dynamic = function(n, i, r, a, l, d, c, f, u) {
            let p;
            return o(288), t[0] = 0, p = s(r, 0, n, 257, U, E, d, a, f, t, e), 0 != p || 0 === a[0] ? (p == v ? u.msg = "oversubscribed literal/length tree" : -4 != p && (u.msg = "incomplete literal/length tree", p = v), p) : (o(288), p = s(r, n, i, 0, S, D, c, l, f, t, e), 0 != p || 0 === l[0] && n > 257 ? (p == v ? u.msg = "oversubscribed distance tree" : p == y ? (u.msg = "incomplete distance tree", p = v) : -4 != p && (u.msg = "empty distance tree with lengths", p = v), p) : 0)
        }
    }
    I.inflate_trees_fixed = function(t, e, n, i) {
        return t[0] = 9, e[0] = 5, n[0] = z, i[0] = A, 0
    };

    function B() {
        const t = this;
        let e, n, i, r, a = 0,
            s = 0,
            o = 0,
            l = 0,
            d = 0,
            c = 0,
            f = 0,
            u = 0,
            p = 0,
            h = 0;

        function m(t, e, n, i, r, a, s, o) {
            let l, d, c, f, u, p, h, m, _, x, w, g, b, y, z, A;
            h = o.next_in_index, m = o.avail_in, u = s.bitb, p = s.bitk, _ = s.write, x = _ < s.read ? s.read - _ - 1 : s.end - _, w = k[t], g = k[e];
            do {
                for (; p < 20;) m--, u |= (255 & o.read_byte(h++)) << p, p += 8;
                if (l = u & w, d = n, c = i, A = 3 * (c + l), 0 !== (f = d[A]))
                    for (;;) {
                        if (u >>= d[A + 1], p -= d[A + 1], 0 != (16 & f)) {
                            for (f &= 15, b = d[A + 2] + (u & k[f]), u >>= f, p -= f; p < 15;) m--, u |= (255 & o.read_byte(h++)) << p, p += 8;
                            for (l = u & g, d = r, c = a, A = 3 * (c + l), f = d[A];;) {
                                if (u >>= d[A + 1], p -= d[A + 1], 0 != (16 & f)) {
                                    for (f &= 15; p < f;) m--, u |= (255 & o.read_byte(h++)) << p, p += 8;
                                    if (y = d[A + 2] + (u & k[f]), u >>= f, p -= f, x -= b, _ >= y) z = _ - y, _ - z > 0 && 2 > _ - z ? (s.window[_++] = s.window[z++], s.window[_++] = s.window[z++], b -= 2) : (s.window.set(s.window.subarray(z, z + 2), _), _ += 2, z += 2, b -= 2);
                                    else {
                                        z = _ - y;
                                        do {
                                            z += s.end
                                        } while (z < 0);
                                        if (f = s.end - z, b > f) {
                                            if (b -= f, _ - z > 0 && f > _ - z)
                                                do {
                                                    s.window[_++] = s.window[z++]
                                                } while (0 != --f);
                                            else s.window.set(s.window.subarray(z, z + f), _), _ += f, z += f, f = 0;
                                            z = 0
                                        }
                                    }
                                    if (_ - z > 0 && b > _ - z)
                                        do {
                                            s.window[_++] = s.window[z++]
                                        } while (0 != --b);
                                    else s.window.set(s.window.subarray(z, z + b), _), _ += b, z += b, b = 0;
                                    break
                                }
                                if (0 != (64 & f)) return o.msg = "invalid distance code", b = o.avail_in - m, b = p >> 3 < b ? p >> 3 : b, m += b, h -= b, p -= b << 3, s.bitb = u, s.bitk = p, o.avail_in = m, o.total_in += h - o.next_in_index, o.next_in_index = h, s.write = _, v;
                                l += d[A + 2], l += u & k[f], A = 3 * (c + l), f = d[A]
                            }
                            break
                        }
                        if (0 != (64 & f)) return 0 != (32 & f) ? (b = o.avail_in - m, b = p >> 3 < b ? p >> 3 : b, m += b, h -= b, p -= b << 3, s.bitb = u, s.bitk = p, o.avail_in = m, o.total_in += h - o.next_in_index, o.next_in_index = h, s.write = _, 1) : (o.msg = "invalid literal/length code", b = o.avail_in - m, b = p >> 3 < b ? p >> 3 : b, m += b, h -= b, p -= b << 3, s.bitb = u, s.bitk = p, o.avail_in = m, o.total_in += h - o.next_in_index, o.next_in_index = h, s.write = _, v);
                        if (l += d[A + 2], l += u & k[f], A = 3 * (c + l), 0 === (f = d[A])) {
                            u >>= d[A + 1], p -= d[A + 1], s.window[_++] = d[A + 2], x--;
                            break
                        }
                    } else u >>= d[A + 1], p -= d[A + 1], s.window[_++] = d[A + 2], x--
            } while (x >= 258 && m >= 10);
            return b = o.avail_in - m, b = p >> 3 < b ? p >> 3 : b, m += b, h -= b, p -= b << 3, s.bitb = u, s.bitk = p, o.avail_in = m, o.total_in += h - o.next_in_index, o.next_in_index = h, s.write = _, 0
        }
        t.init = function(t, a, s, o, l, d) {
            e = 0, f = t, u = a, i = s, p = o, r = l, h = d, n = null
        }, t.proc = function(t, _, x) {
            let w, g, y, z, A, U, E, S = 0,
                D = 0,
                R = 0;
            for (R = _.next_in_index, z = _.avail_in, S = t.bitb, D = t.bitk, A = t.write, U = A < t.read ? t.read - A - 1 : t.end - A;;) switch (e) {
                case 0:
                    if (U >= 258 && z >= 10 && (t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, x = m(f, u, i, p, r, h, t, _), R = _.next_in_index, z = _.avail_in, S = t.bitb, D = t.bitk, A = t.write, U = A < t.read ? t.read - A - 1 : t.end - A, 0 != x)) {
                        e = 1 == x ? 7 : 9;
                        break
                    }
                    o = f, n = i, s = p, e = 1;
                case 1:
                    for (w = o; D < w;) {
                        if (0 === z) return t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                        x = 0, z--, S |= (255 & _.read_byte(R++)) << D, D += 8
                    }
                    if (g = 3 * (s + (S & k[w])), S >>>= n[g + 1], D -= n[g + 1], y = n[g], 0 === y) {
                        l = n[g + 2], e = 6;
                        break
                    }
                    if (0 != (16 & y)) {
                        d = 15 & y, a = n[g + 2], e = 2;
                        break
                    }
                    if (0 == (64 & y)) {
                        o = y, s = g / 3 + n[g + 2];
                        break
                    }
                    if (0 != (32 & y)) {
                        e = 7;
                        break
                    }
                    return e = 9, _.msg = "invalid literal/length code", x = v, t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                case 2:
                    for (w = d; D < w;) {
                        if (0 === z) return t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                        x = 0, z--, S |= (255 & _.read_byte(R++)) << D, D += 8
                    }
                    a += S & k[w], S >>= w, D -= w, o = u, n = r, s = h, e = 3;
                case 3:
                    for (w = o; D < w;) {
                        if (0 === z) return t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                        x = 0, z--, S |= (255 & _.read_byte(R++)) << D, D += 8
                    }
                    if (g = 3 * (s + (S & k[w])), S >>= n[g + 1], D -= n[g + 1], y = n[g], 0 != (16 & y)) {
                        d = 15 & y, c = n[g + 2], e = 4;
                        break
                    }
                    if (0 == (64 & y)) {
                        o = y, s = g / 3 + n[g + 2];
                        break
                    }
                    return e = 9, _.msg = "invalid distance code", x = v, t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                case 4:
                    for (w = d; D < w;) {
                        if (0 === z) return t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                        x = 0, z--, S |= (255 & _.read_byte(R++)) << D, D += 8
                    }
                    c += S & k[w], S >>= w, D -= w, e = 5;
                case 5:
                    for (E = A - c; E < 0;) E += t.end;
                    for (; 0 !== a;) {
                        if (0 === U && (A == t.end && 0 !== t.read && (A = 0, U = A < t.read ? t.read - A - 1 : t.end - A), 0 === U && (t.write = A, x = t.inflate_flush(_, x), A = t.write, U = A < t.read ? t.read - A - 1 : t.end - A, A == t.end && 0 !== t.read && (A = 0, U = A < t.read ? t.read - A - 1 : t.end - A), 0 === U))) return t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                        t.window[A++] = t.window[E++], U--, E == t.end && (E = 0), a--
                    }
                    e = 0;
                    break;
                case 6:
                    if (0 === U && (A == t.end && 0 !== t.read && (A = 0, U = A < t.read ? t.read - A - 1 : t.end - A), 0 === U && (t.write = A, x = t.inflate_flush(_, x), A = t.write, U = A < t.read ? t.read - A - 1 : t.end - A, A == t.end && 0 !== t.read && (A = 0, U = A < t.read ? t.read - A - 1 : t.end - A), 0 === U))) return t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                    x = 0, t.window[A++] = l, U--, e = 0;
                    break;
                case 7:
                    if (D > 7 && (D -= 8, z++, R--), t.write = A, x = t.inflate_flush(_, x), A = t.write, U = A < t.read ? t.read - A - 1 : t.end - A, t.read != t.write) return t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                    e = 8;
                case 8:
                    return x = 1, t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                case 9:
                    return x = v, t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x);
                default:
                    return x = b, t.bitb = S, t.bitk = D, _.avail_in = z, _.total_in += R - _.next_in_index, _.next_in_index = R, t.write = A, t.inflate_flush(_, x)
            }
        }, t.free = function() {}
    }
    const j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

    function T(t, e) {
        const n = this;
        let i, r = 0,
            a = 0,
            s = 0,
            o = 0;
        const l = [0],
            d = [0],
            c = new B;
        let f = 0,
            u = new Int32Array(4320);
        const p = new I;
        n.bitk = 0, n.bitb = 0, n.window = new Uint8Array(e), n.end = e, n.read = 0, n.write = 0, n.reset = function(t, e) {
            e && (e[0] = 0), 6 == r && c.free(t), r = 0, n.bitk = 0, n.bitb = 0, n.read = n.write = 0
        }, n.reset(t, null), n.inflate_flush = function(t, e) {
            let i, r, a;
            return r = t.next_out_index, a = n.read, i = (a <= n.write ? n.write : n.end) - a, i > t.avail_out && (i = t.avail_out), 0 !== i && e == y && (e = 0), t.avail_out -= i, t.total_out += i, t.next_out.set(n.window.subarray(a, a + i), r), r += i, a += i, a == n.end && (a = 0, n.write == n.end && (n.write = 0), i = n.write - a, i > t.avail_out && (i = t.avail_out), 0 !== i && e == y && (e = 0), t.avail_out -= i, t.total_out += i, t.next_out.set(n.window.subarray(a, a + i), r), r += i, a += i), t.next_out_index = r, n.read = a, e
        }, n.proc = function(t, e) {
            let h, m, _, x, w, g, y, z;
            for (x = t.next_in_index, w = t.avail_in, m = n.bitb, _ = n.bitk, g = n.write, y = g < n.read ? n.read - g - 1 : n.end - g;;) {
                let A, U, E, S, D, R, B, T;
                switch (r) {
                    case 0:
                        for (; _ < 3;) {
                            if (0 === w) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                            e = 0, w--, m |= (255 & t.read_byte(x++)) << _, _ += 8
                        }
                        switch (h = 7 & m, f = 1 & h, h >>> 1) {
                            case 0:
                                m >>>= 3, _ -= 3, h = 7 & _, m >>>= h, _ -= h, r = 1;
                                break;
                            case 1:
                                A = [], U = [], E = [
                                    []
                                ], S = [
                                    []
                                ], I.inflate_trees_fixed(A, U, E, S), c.init(A[0], U[0], E[0], 0, S[0], 0), m >>>= 3, _ -= 3, r = 6;
                                break;
                            case 2:
                                m >>>= 3, _ -= 3, r = 3;
                                break;
                            case 3:
                                return m >>>= 3, _ -= 3, r = 9, t.msg = "invalid block type", e = v, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e)
                        }
                        break;
                    case 1:
                        for (; _ < 32;) {
                            if (0 === w) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                            e = 0, w--, m |= (255 & t.read_byte(x++)) << _, _ += 8
                        }
                        if ((~m >>> 16 & 65535) != (65535 & m)) return r = 9, t.msg = "invalid stored block lengths", e = v, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                        a = 65535 & m, m = _ = 0, r = 0 !== a ? 2 : 0 !== f ? 7 : 0;
                        break;
                    case 2:
                        if (0 === w) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                        if (0 === y && (g == n.end && 0 !== n.read && (g = 0, y = g < n.read ? n.read - g - 1 : n.end - g), 0 === y && (n.write = g, e = n.inflate_flush(t, e), g = n.write, y = g < n.read ? n.read - g - 1 : n.end - g, g == n.end && 0 !== n.read && (g = 0, y = g < n.read ? n.read - g - 1 : n.end - g), 0 === y))) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                        if (e = 0, h = a, h > w && (h = w), h > y && (h = y), n.window.set(t.read_buf(x, h), g), x += h, w -= h, g += h, y -= h, 0 != (a -= h)) break;
                        r = 0 !== f ? 7 : 0;
                        break;
                    case 3:
                        for (; _ < 14;) {
                            if (0 === w) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                            e = 0, w--, m |= (255 & t.read_byte(x++)) << _, _ += 8
                        }
                        if (s = h = 16383 & m, (31 & h) > 29 || (h >> 5 & 31) > 29) return r = 9, t.msg = "too many length or distance symbols", e = v, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                        if (h = 258 + (31 & h) + (h >> 5 & 31), !i || i.length < h) i = [];
                        else
                            for (z = 0; z < h; z++) i[z] = 0;
                        m >>>= 14, _ -= 14, o = 0, r = 4;
                    case 4:
                        for (; o < 4 + (s >>> 10);) {
                            for (; _ < 3;) {
                                if (0 === w) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                                e = 0, w--, m |= (255 & t.read_byte(x++)) << _, _ += 8
                            }
                            i[j[o++]] = 7 & m, m >>>= 3, _ -= 3
                        }
                        for (; o < 19;) i[j[o++]] = 0;
                        if (l[0] = 7, h = p.inflate_trees_bits(i, l, d, u, t), 0 != h) return (e = h) == v && (i = null, r = 9), n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                        o = 0, r = 5;
                    case 5:
                        for (; h = s, !(o >= 258 + (31 & h) + (h >> 5 & 31));) {
                            let a, c;
                            for (h = l[0]; _ < h;) {
                                if (0 === w) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                                e = 0, w--, m |= (255 & t.read_byte(x++)) << _, _ += 8
                            }
                            if (h = u[3 * (d[0] + (m & k[h])) + 1], c = u[3 * (d[0] + (m & k[h])) + 2], c < 16) m >>>= h, _ -= h, i[o++] = c;
                            else {
                                for (z = 18 == c ? 7 : c - 14, a = 18 == c ? 11 : 3; _ < h + z;) {
                                    if (0 === w) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                                    e = 0, w--, m |= (255 & t.read_byte(x++)) << _, _ += 8
                                }
                                if (m >>>= h, _ -= h, a += m & k[z], m >>>= z, _ -= z, z = o, h = s, z + a > 258 + (31 & h) + (h >> 5 & 31) || 16 == c && z < 1) return i = null, r = 9, t.msg = "invalid bit length repeat", e = v, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                                c = 16 == c ? i[z - 1] : 0;
                                do {
                                    i[z++] = c
                                } while (0 != --a);
                                o = z
                            }
                        }
                        if (d[0] = -1, D = [], R = [], B = [], T = [], D[0] = 9, R[0] = 6, h = s, h = p.inflate_trees_dynamic(257 + (31 & h), 1 + (h >> 5 & 31), i, D, R, B, T, u, t), 0 != h) return h == v && (i = null, r = 9), e = h, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                        c.init(D[0], R[0], u, B[0], u, T[0]), r = 6;
                    case 6:
                        if (n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, 1 != (e = c.proc(n, t, e))) return n.inflate_flush(t, e);
                        if (e = 0, c.free(t), x = t.next_in_index, w = t.avail_in, m = n.bitb, _ = n.bitk, g = n.write, y = g < n.read ? n.read - g - 1 : n.end - g, 0 === f) {
                            r = 0;
                            break
                        }
                        r = 7;
                    case 7:
                        if (n.write = g, e = n.inflate_flush(t, e), g = n.write, y = g < n.read ? n.read - g - 1 : n.end - g, n.read != n.write) return n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                        r = 8;
                    case 8:
                        return e = 1, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                    case 9:
                        return e = v, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e);
                    default:
                        return e = b, n.bitb = m, n.bitk = _, t.avail_in = w, t.total_in += x - t.next_in_index, t.next_in_index = x, n.write = g, n.inflate_flush(t, e)
                }
            }
        }, n.free = function(t) {
            n.reset(t, null), n.window = null, u = null
        }, n.set_dictionary = function(t, e, i) {
            n.window.set(t.subarray(e, e + i), 0), n.read = n.write = i
        }, n.sync_point = function() {
            return 1 == r ? 1 : 0
        }
    }
    const C = 13,
        F = [0, 0, 255, 255];

    function M() {
        const t = this;

        function e(t) {
            return t && t.istate ? (t.total_in = t.total_out = 0, t.msg = null, t.istate.mode = 7, t.istate.blocks.reset(t, null), 0) : b
        }
        t.mode = 0, t.method = 0, t.was = [0], t.need = 0, t.marker = 0, t.wbits = 0, t.inflateEnd = function(e) {
            return t.blocks && t.blocks.free(e), t.blocks = null, 0
        }, t.inflateInit = function(n, i) {
            return n.msg = null, t.blocks = null, i < 8 || i > 15 ? (t.inflateEnd(n), b) : (t.wbits = i, n.istate.blocks = new T(n, 1 << i), e(n), 0)
        }, t.inflate = function(t, e) {
            let n, i;
            if (!t || !t.istate || !t.next_in) return b;
            const r = t.istate;
            for (e = 4 == e ? y : 0, n = y;;) switch (r.mode) {
                case 0:
                    if (0 === t.avail_in) return n;
                    if (n = e, t.avail_in--, t.total_in++, 8 != (15 & (r.method = t.read_byte(t.next_in_index++)))) {
                        r.mode = C, t.msg = "unknown compression method", r.marker = 5;
                        break
                    }
                    if (8 + (r.method >> 4) > r.wbits) {
                        r.mode = C, t.msg = "invalid window size", r.marker = 5;
                        break
                    }
                    r.mode = 1;
                case 1:
                    if (0 === t.avail_in) return n;
                    if (n = e, t.avail_in--, t.total_in++, i = 255 & t.read_byte(t.next_in_index++), ((r.method << 8) + i) % 31 != 0) {
                        r.mode = C, t.msg = "incorrect header check", r.marker = 5;
                        break
                    }
                    if (0 == (32 & i)) {
                        r.mode = 7;
                        break
                    }
                    r.mode = 2;
                case 2:
                    if (0 === t.avail_in) return n;
                    n = e, t.avail_in--, t.total_in++, r.need = (255 & t.read_byte(t.next_in_index++)) << 24 & 4278190080, r.mode = 3;
                case 3:
                    if (0 === t.avail_in) return n;
                    n = e, t.avail_in--, t.total_in++, r.need += (255 & t.read_byte(t.next_in_index++)) << 16 & 16711680, r.mode = 4;
                case 4:
                    if (0 === t.avail_in) return n;
                    n = e, t.avail_in--, t.total_in++, r.need += (255 & t.read_byte(t.next_in_index++)) << 8 & 65280, r.mode = 5;
                case 5:
                    return 0 === t.avail_in ? n : (n = e, t.avail_in--, t.total_in++, r.need += 255 & t.read_byte(t.next_in_index++), r.mode = 6, 2);
                case 6:
                    return r.mode = C, t.msg = "need dictionary", r.marker = 0, b;
                case 7:
                    if (n = r.blocks.proc(t, n), n == v) {
                        r.mode = C, r.marker = 0;
                        break
                    }
                    if (0 == n && (n = e), 1 != n) return n;
                    n = e, r.blocks.reset(t, r.was), r.mode = 12;
                case 12:
                    return 1;
                case C:
                    return v;
                default:
                    return b
            }
        }, t.inflateSetDictionary = function(t, e, n) {
            let i = 0,
                r = n;
            if (!t || !t.istate || 6 != t.istate.mode) return b;
            const a = t.istate;
            return r >= 1 << a.wbits && (r = (1 << a.wbits) - 1, i = n - r), a.blocks.set_dictionary(e, i, r), a.mode = 7, 0
        }, t.inflateSync = function(t) {
            let n, i, r, a, s;
            if (!t || !t.istate) return b;
            const o = t.istate;
            if (o.mode != C && (o.mode = C, o.marker = 0), 0 === (n = t.avail_in)) return y;
            for (i = t.next_in_index, r = o.marker; 0 !== n && r < 4;) t.read_byte(i) == F[r] ? r++ : r = 0 !== t.read_byte(i) ? 0 : 4 - r, i++, n--;
            return t.total_in += i - t.next_in_index, t.next_in_index = i, t.avail_in = n, o.marker = r, 4 != r ? v : (a = t.total_in, s = t.total_out, e(t), t.total_in = a, t.total_out = s, o.mode = 7, 0)
        }, t.inflateSyncPoint = function(t) {
            return t && t.istate && t.istate.blocks ? t.istate.blocks.sync_point() : b
        }
    }

    function W() {}
    W.prototype = {
        inflateInit: function(t) {
            const e = this;
            return e.istate = new M, t || (t = 15), e.istate.inflateInit(e, t)
        },
        inflate: function(t) {
            const e = this;
            return e.istate ? e.istate.inflate(e, t) : b
        },
        inflateEnd: function() {
            const t = this;
            if (!t.istate) return b;
            const e = t.istate.inflateEnd(t);
            return t.istate = null, e
        },
        inflateSync: function() {
            const t = this;
            return t.istate ? t.istate.inflateSync(t) : b
        },
        inflateSetDictionary: function(t, e) {
            const n = this;
            return n.istate ? n.istate.inflateSetDictionary(n, t, e) : b
        },
        read_byte: function(t) {
            return this.next_in[t]
        },
        read_buf: function(t, e) {
            return this.next_in.subarray(t, t + e)
        }
    };
    const O = {
            chunkSize: 524288,
            maxWorkers: "undefined" != typeof navigator && navigator.hardwareConcurrency || 2,
            terminateWorkerTimeout: 5e3,
            useWebWorkers: !0,
            workerScripts: void 0
        },
        H = Object.assign({}, O);

    function q() {
        return H
    }

    function N(t) {
        if (void 0 !== t.chunkSize && (H.chunkSize = t.chunkSize), void 0 !== t.maxWorkers && (H.maxWorkers = t.maxWorkers), void 0 !== t.terminateWorkerTimeout && (H.terminateWorkerTimeout = t.terminateWorkerTimeout), void 0 !== t.useWebWorkers && (H.useWebWorkers = t.useWebWorkers), void 0 !== t.Deflate && (H.Deflate = t.Deflate), void 0 !== t.Inflate && (H.Inflate = t.Inflate), void 0 !== t.workerScripts) {
            if (t.workerScripts.deflate) {
                if (!Array.isArray(t.workerScripts.deflate)) throw new Error("workerScripts.deflate must be an array");
                H.workerScripts || (H.workerScripts = {}), H.workerScripts.deflate = t.workerScripts.deflate
            }
            if (t.workerScripts.inflate) {
                if (!Array.isArray(t.workerScripts.inflate)) throw new Error("workerScripts.inflate must be an array");
                H.workerScripts || (H.workerScripts = {}), H.workerScripts.inflate = t.workerScripts.inflate
            }
        }
    }
    const L = {
            application: {
                "andrew-inset": "ez",
                annodex: "anx",
                "atom+xml": "atom",
                "atomcat+xml": "atomcat",
                "atomserv+xml": "atomsrv",
                bbolin: "lin",
                cap: ["cap", "pcap"],
                "cu-seeme": "cu",
                "davmount+xml": "davmount",
                dsptype: "tsp",
                ecmascript: ["es", "ecma"],
                futuresplash: "spl",
                hta: "hta",
                "java-archive": "jar",
                "java-serialized-object": "ser",
                "java-vm": "class",
                javascript: "js",
                m3g: "m3g",
                "mac-binhex40": "hqx",
                mathematica: ["nb", "ma", "mb"],
                msaccess: "mdb",
                msword: ["doc", "dot"],
                mxf: "mxf",
                oda: "oda",
                ogg: "ogx",
                pdf: "pdf",
                "pgp-keys": "key",
                "pgp-signature": ["asc", "sig"],
                "pics-rules": "prf",
                postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
                rar: "rar",
                "rdf+xml": "rdf",
                "rss+xml": "rss",
                rtf: "rtf",
                smil: ["smi", "smil"],
                "xhtml+xml": ["xhtml", "xht"],
                xml: ["xml", "xsl", "xsd"],
                "xspf+xml": "xspf",
                zip: "zip",
                "vnd.android.package-archive": "apk",
                "vnd.cinderella": "cdy",
                "vnd.google-earth.kml+xml": "kml",
                "vnd.google-earth.kmz": "kmz",
                "vnd.mozilla.xul+xml": "xul",
                "vnd.ms-excel": ["xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw"],
                "vnd.ms-pki.seccat": "cat",
                "vnd.ms-pki.stl": "stl",
                "vnd.ms-powerpoint": ["ppt", "pps", "pot"],
                "vnd.oasis.opendocument.chart": "odc",
                "vnd.oasis.opendocument.database": "odb",
                "vnd.oasis.opendocument.formula": "odf",
                "vnd.oasis.opendocument.graphics": "odg",
                "vnd.oasis.opendocument.graphics-template": "otg",
                "vnd.oasis.opendocument.image": "odi",
                "vnd.oasis.opendocument.presentation": "odp",
                "vnd.oasis.opendocument.presentation-template": "otp",
                "vnd.oasis.opendocument.spreadsheet": "ods",
                "vnd.oasis.opendocument.spreadsheet-template": "ots",
                "vnd.oasis.opendocument.text": "odt",
                "vnd.oasis.opendocument.text-master": "odm",
                "vnd.oasis.opendocument.text-template": "ott",
                "vnd.oasis.opendocument.text-web": "oth",
                "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
                "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
                "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
                "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
                "vnd.openxmlformats-officedocument.presentationml.template": "potx",
                "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
                "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
                "vnd.smaf": "mmf",
                "vnd.stardivision.calc": "sdc",
                "vnd.stardivision.chart": "sds",
                "vnd.stardivision.draw": "sda",
                "vnd.stardivision.impress": "sdd",
                "vnd.stardivision.math": ["sdf", "smf"],
                "vnd.stardivision.writer": ["sdw", "vor"],
                "vnd.stardivision.writer-global": "sgl",
                "vnd.sun.xml.calc": "sxc",
                "vnd.sun.xml.calc.template": "stc",
                "vnd.sun.xml.draw": "sxd",
                "vnd.sun.xml.draw.template": "std",
                "vnd.sun.xml.impress": "sxi",
                "vnd.sun.xml.impress.template": "sti",
                "vnd.sun.xml.math": "sxm",
                "vnd.sun.xml.writer": "sxw",
                "vnd.sun.xml.writer.global": "sxg",
                "vnd.sun.xml.writer.template": "stw",
                "vnd.symbian.install": ["sis", "sisx"],
                "vnd.visio": ["vsd", "vst", "vss", "vsw"],
                "vnd.wap.wbxml": "wbxml",
                "vnd.wap.wmlc": "wmlc",
                "vnd.wap.wmlscriptc": "wmlsc",
                "vnd.wordperfect": "wpd",
                "vnd.wordperfect5.1": "wp5",
                "x-123": "wk",
                "x-7z-compressed": "7z",
                "x-abiword": "abw",
                "x-apple-diskimage": "dmg",
                "x-bcpio": "bcpio",
                "x-bittorrent": "torrent",
                "x-cbr": ["cbr", "cba", "cbt", "cb7"],
                "x-cbz": "cbz",
                "x-cdf": ["cdf", "cda"],
                "x-cdlink": "vcd",
                "x-chess-pgn": "pgn",
                "x-cpio": "cpio",
                "x-csh": "csh",
                "x-debian-package": ["deb", "udeb"],
                "x-director": ["dcr", "dir", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
                "x-dms": "dms",
                "x-doom": "wad",
                "x-dvi": "dvi",
                "x-httpd-eruby": "rhtml",
                "x-font": "pcf.Z",
                "x-freemind": "mm",
                "x-gnumeric": "gnumeric",
                "x-go-sgf": "sgf",
                "x-graphing-calculator": "gcf",
                "x-gtar": ["gtar", "taz"],
                "x-hdf": "hdf",
                "x-httpd-php": ["phtml", "pht", "php"],
                "x-httpd-php-source": "phps",
                "x-httpd-php3": "php3",
                "x-httpd-php3-preprocessed": "php3p",
                "x-httpd-php4": "php4",
                "x-httpd-php5": "php5",
                "x-ica": "ica",
                "x-info": "info",
                "x-internet-signup": ["ins", "isp"],
                "x-iphone": "iii",
                "x-iso9660-image": "iso",
                "x-java-jnlp-file": "jnlp",
                "x-jmol": "jmz",
                "x-killustrator": "kil",
                "x-koan": ["skp", "skd", "skt", "skm"],
                "x-kpresenter": ["kpr", "kpt"],
                "x-kword": ["kwd", "kwt"],
                "x-latex": "latex",
                "x-lha": "lha",
                "x-lyx": "lyx",
                "x-lzh": "lzh",
                "x-lzx": "lzx",
                "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
                "x-ms-wmd": "wmd",
                "x-ms-wmz": "wmz",
                "x-msdos-program": ["com", "exe", "bat", "dll"],
                "x-msi": "msi",
                "x-netcdf": ["nc", "cdf"],
                "x-ns-proxy-autoconfig": ["pac", "dat"],
                "x-nwc": "nwc",
                "x-object": "o",
                "x-oz-application": "oza",
                "x-pkcs7-certreqresp": "p7r",
                "x-python-code": ["pyc", "pyo"],
                "x-qgis": ["qgs", "shp", "shx"],
                "x-quicktimeplayer": "qtl",
                "x-redhat-package-manager": "rpm",
                "x-ruby": "rb",
                "x-sh": "sh",
                "x-shar": "shar",
                "x-shockwave-flash": ["swf", "swfl"],
                "x-silverlight": "scr",
                "x-stuffit": "sit",
                "x-sv4cpio": "sv4cpio",
                "x-sv4crc": "sv4crc",
                "x-tar": "tar",
                "x-tcl": "tcl",
                "x-tex-gf": "gf",
                "x-tex-pk": "pk",
                "x-texinfo": ["texinfo", "texi"],
                "x-trash": ["~", "%", "bak", "old", "sik"],
                "x-troff": ["t", "tr", "roff"],
                "x-troff-man": "man",
                "x-troff-me": "me",
                "x-troff-ms": "ms",
                "x-ustar": "ustar",
                "x-wais-source": "src",
                "x-wingz": "wz",
                "x-x509-ca-cert": ["crt", "der", "cer"],
                "x-xcf": "xcf",
                "x-xfig": "fig",
                "x-xpinstall": "xpi",
                applixware: "aw",
                "atomsvc+xml": "atomsvc",
                "ccxml+xml": "ccxml",
                "cdmi-capability": "cdmia",
                "cdmi-container": "cdmic",
                "cdmi-domain": "cdmid",
                "cdmi-object": "cdmio",
                "cdmi-queue": "cdmiq",
                "docbook+xml": "dbk",
                "dssc+der": "dssc",
                "dssc+xml": "xdssc",
                "emma+xml": "emma",
                "epub+zip": "epub",
                exi: "exi",
                "font-tdpfr": "pfr",
                "gml+xml": "gml",
                "gpx+xml": "gpx",
                gxf: "gxf",
                hyperstudio: "stk",
                "inkml+xml": ["ink", "inkml"],
                ipfix: "ipfix",
                json: "json",
                "jsonml+json": "jsonml",
                "lost+xml": "lostxml",
                "mads+xml": "mads",
                marc: "mrc",
                "marcxml+xml": "mrcx",
                "mathml+xml": "mathml",
                mbox: "mbox",
                "mediaservercontrol+xml": "mscml",
                "metalink+xml": "metalink",
                "metalink4+xml": "meta4",
                "mets+xml": "mets",
                "mods+xml": "mods",
                mp21: ["m21", "mp21"],
                mp4: "mp4s",
                "oebps-package+xml": "opf",
                "omdoc+xml": "omdoc",
                onenote: ["onetoc", "onetoc2", "onetmp", "onepkg"],
                oxps: "oxps",
                "patch-ops-error+xml": "xer",
                "pgp-encrypted": "pgp",
                pkcs10: "p10",
                "pkcs7-mime": ["p7m", "p7c"],
                "pkcs7-signature": "p7s",
                pkcs8: "p8",
                "pkix-attr-cert": "ac",
                "pkix-crl": "crl",
                "pkix-pkipath": "pkipath",
                pkixcmp: "pki",
                "pls+xml": "pls",
                "prs.cww": "cww",
                "pskc+xml": "pskcxml",
                "reginfo+xml": "rif",
                "relax-ng-compact-syntax": "rnc",
                "resource-lists+xml": "rl",
                "resource-lists-diff+xml": "rld",
                "rls-services+xml": "rs",
                "rpki-ghostbusters": "gbr",
                "rpki-manifest": "mft",
                "rpki-roa": "roa",
                "rsd+xml": "rsd",
                "sbml+xml": "sbml",
                "scvp-cv-request": "scq",
                "scvp-cv-response": "scs",
                "scvp-vp-request": "spq",
                "scvp-vp-response": "spp",
                sdp: "sdp",
                "set-payment-initiation": "setpay",
                "set-registration-initiation": "setreg",
                "shf+xml": "shf",
                "sparql-query": "rq",
                "sparql-results+xml": "srx",
                srgs: "gram",
                "srgs+xml": "grxml",
                "sru+xml": "sru",
                "ssdl+xml": "ssdl",
                "ssml+xml": "ssml",
                "tei+xml": ["tei", "teicorpus"],
                "thraud+xml": "tfi",
                "timestamped-data": "tsd",
                "vnd.3gpp.pic-bw-large": "plb",
                "vnd.3gpp.pic-bw-small": "psb",
                "vnd.3gpp.pic-bw-var": "pvb",
                "vnd.3gpp2.tcap": "tcap",
                "vnd.3m.post-it-notes": "pwn",
                "vnd.accpac.simply.aso": "aso",
                "vnd.accpac.simply.imp": "imp",
                "vnd.acucobol": "acu",
                "vnd.acucorp": ["atc", "acutc"],
                "vnd.adobe.air-application-installer-package+zip": "air",
                "vnd.adobe.formscentral.fcdt": "fcdt",
                "vnd.adobe.fxp": ["fxp", "fxpl"],
                "vnd.adobe.xdp+xml": "xdp",
                "vnd.adobe.xfdf": "xfdf",
                "vnd.ahead.space": "ahead",
                "vnd.airzip.filesecure.azf": "azf",
                "vnd.airzip.filesecure.azs": "azs",
                "vnd.amazon.ebook": "azw",
                "vnd.americandynamics.acc": "acc",
                "vnd.amiga.ami": "ami",
                "vnd.anser-web-certificate-issue-initiation": "cii",
                "vnd.anser-web-funds-transfer-initiation": "fti",
                "vnd.antix.game-component": "atx",
                "vnd.apple.installer+xml": "mpkg",
                "vnd.apple.mpegurl": "m3u8",
                "vnd.aristanetworks.swi": "swi",
                "vnd.astraea-software.iota": "iota",
                "vnd.audiograph": "aep",
                "vnd.blueice.multipass": "mpm",
                "vnd.bmi": "bmi",
                "vnd.businessobjects": "rep",
                "vnd.chemdraw+xml": "cdxml",
                "vnd.chipnuts.karaoke-mmd": "mmd",
                "vnd.claymore": "cla",
                "vnd.cloanto.rp9": "rp9",
                "vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
                "vnd.cluetrust.cartomobile-config": "c11amc",
                "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
                "vnd.commonspace": "csp",
                "vnd.contact.cmsg": "cdbcmsg",
                "vnd.cosmocaller": "cmc",
                "vnd.crick.clicker": "clkx",
                "vnd.crick.clicker.keyboard": "clkk",
                "vnd.crick.clicker.palette": "clkp",
                "vnd.crick.clicker.template": "clkt",
                "vnd.crick.clicker.wordbank": "clkw",
                "vnd.criticaltools.wbs+xml": "wbs",
                "vnd.ctc-posml": "pml",
                "vnd.cups-ppd": "ppd",
                "vnd.curl.car": "car",
                "vnd.curl.pcurl": "pcurl",
                "vnd.dart": "dart",
                "vnd.data-vision.rdz": "rdz",
                "vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
                "vnd.dece.ttml+xml": ["uvt", "uvvt"],
                "vnd.dece.unspecified": ["uvx", "uvvx"],
                "vnd.dece.zip": ["uvz", "uvvz"],
                "vnd.denovo.fcselayout-link": "fe_launch",
                "vnd.dna": "dna",
                "vnd.dolby.mlp": "mlp",
                "vnd.dpgraph": "dpg",
                "vnd.dreamfactory": "dfac",
                "vnd.ds-keypoint": "kpxx",
                "vnd.dvb.ait": "ait",
                "vnd.dvb.service": "svc",
                "vnd.dynageo": "geo",
                "vnd.ecowin.chart": "mag",
                "vnd.enliven": "nml",
                "vnd.epson.esf": "esf",
                "vnd.epson.msf": "msf",
                "vnd.epson.quickanime": "qam",
                "vnd.epson.salt": "slt",
                "vnd.epson.ssf": "ssf",
                "vnd.eszigno3+xml": ["es3", "et3"],
                "vnd.ezpix-album": "ez2",
                "vnd.ezpix-package": "ez3",
                "vnd.fdf": "fdf",
                "vnd.fdsn.mseed": "mseed",
                "vnd.fdsn.seed": ["seed", "dataless"],
                "vnd.flographit": "gph",
                "vnd.fluxtime.clip": "ftc",
                "vnd.framemaker": ["fm", "frame", "maker", "book"],
                "vnd.frogans.fnc": "fnc",
                "vnd.frogans.ltf": "ltf",
                "vnd.fsc.weblaunch": "fsc",
                "vnd.fujitsu.oasys": "oas",
                "vnd.fujitsu.oasys2": "oa2",
                "vnd.fujitsu.oasys3": "oa3",
                "vnd.fujitsu.oasysgp": "fg5",
                "vnd.fujitsu.oasysprs": "bh2",
                "vnd.fujixerox.ddd": "ddd",
                "vnd.fujixerox.docuworks": "xdw",
                "vnd.fujixerox.docuworks.binder": "xbd",
                "vnd.fuzzysheet": "fzs",
                "vnd.genomatix.tuxedo": "txd",
                "vnd.geogebra.file": "ggb",
                "vnd.geogebra.tool": "ggt",
                "vnd.geometry-explorer": ["gex", "gre"],
                "vnd.geonext": "gxt",
                "vnd.geoplan": "g2w",
                "vnd.geospace": "g3w",
                "vnd.gmx": "gmx",
                "vnd.grafeq": ["gqf", "gqs"],
                "vnd.groove-account": "gac",
                "vnd.groove-help": "ghf",
                "vnd.groove-identity-message": "gim",
                "vnd.groove-injector": "grv",
                "vnd.groove-tool-message": "gtm",
                "vnd.groove-tool-template": "tpl",
                "vnd.groove-vcard": "vcg",
                "vnd.hal+xml": "hal",
                "vnd.handheld-entertainment+xml": "zmm",
                "vnd.hbci": "hbci",
                "vnd.hhe.lesson-player": "les",
                "vnd.hp-hpgl": "hpgl",
                "vnd.hp-hpid": "hpid",
                "vnd.hp-hps": "hps",
                "vnd.hp-jlyt": "jlt",
                "vnd.hp-pcl": "pcl",
                "vnd.hp-pclxl": "pclxl",
                "vnd.hydrostatix.sof-data": "sfd-hdstx",
                "vnd.ibm.minipay": "mpy",
                "vnd.ibm.modcap": ["afp", "listafp", "list3820"],
                "vnd.ibm.rights-management": "irm",
                "vnd.ibm.secure-container": "sc",
                "vnd.iccprofile": ["icc", "icm"],
                "vnd.igloader": "igl",
                "vnd.immervision-ivp": "ivp",
                "vnd.immervision-ivu": "ivu",
                "vnd.insors.igm": "igm",
                "vnd.intercon.formnet": ["xpw", "xpx"],
                "vnd.intergeo": "i2g",
                "vnd.intu.qbo": "qbo",
                "vnd.intu.qfx": "qfx",
                "vnd.ipunplugged.rcprofile": "rcprofile",
                "vnd.irepository.package+xml": "irp",
                "vnd.is-xpr": "xpr",
                "vnd.isac.fcs": "fcs",
                "vnd.jam": "jam",
                "vnd.jcp.javame.midlet-rms": "rms",
                "vnd.jisp": "jisp",
                "vnd.joost.joda-archive": "joda",
                "vnd.kahootz": ["ktz", "ktr"],
                "vnd.kde.karbon": "karbon",
                "vnd.kde.kchart": "chrt",
                "vnd.kde.kformula": "kfo",
                "vnd.kde.kivio": "flw",
                "vnd.kde.kontour": "kon",
                "vnd.kde.kpresenter": ["kpr", "kpt"],
                "vnd.kde.kspread": "ksp",
                "vnd.kde.kword": ["kwd", "kwt"],
                "vnd.kenameaapp": "htke",
                "vnd.kidspiration": "kia",
                "vnd.kinar": ["kne", "knp"],
                "vnd.koan": ["skp", "skd", "skt", "skm"],
                "vnd.kodak-descriptor": "sse",
                "vnd.las.las+xml": "lasxml",
                "vnd.llamagraphics.life-balance.desktop": "lbd",
                "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
                "vnd.lotus-1-2-3": "123",
                "vnd.lotus-approach": "apr",
                "vnd.lotus-freelance": "pre",
                "vnd.lotus-notes": "nsf",
                "vnd.lotus-organizer": "org",
                "vnd.lotus-screencam": "scm",
                "vnd.lotus-wordpro": "lwp",
                "vnd.macports.portpkg": "portpkg",
                "vnd.mcd": "mcd",
                "vnd.medcalcdata": "mc1",
                "vnd.mediastation.cdkey": "cdkey",
                "vnd.mfer": "mwf",
                "vnd.mfmp": "mfm",
                "vnd.micrografx.flo": "flo",
                "vnd.micrografx.igx": "igx",
                "vnd.mif": "mif",
                "vnd.mobius.daf": "daf",
                "vnd.mobius.dis": "dis",
                "vnd.mobius.mbk": "mbk",
                "vnd.mobius.mqy": "mqy",
                "vnd.mobius.msl": "msl",
                "vnd.mobius.plc": "plc",
                "vnd.mobius.txf": "txf",
                "vnd.mophun.application": "mpn",
                "vnd.mophun.certificate": "mpc",
                "vnd.ms-artgalry": "cil",
                "vnd.ms-cab-compressed": "cab",
                "vnd.ms-excel.addin.macroenabled.12": "xlam",
                "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
                "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
                "vnd.ms-excel.template.macroenabled.12": "xltm",
                "vnd.ms-fontobject": "eot",
                "vnd.ms-htmlhelp": "chm",
                "vnd.ms-ims": "ims",
                "vnd.ms-lrm": "lrm",
                "vnd.ms-officetheme": "thmx",
                "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
                "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
                "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
                "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
                "vnd.ms-powerpoint.template.macroenabled.12": "potm",
                "vnd.ms-project": ["mpp", "mpt"],
                "vnd.ms-word.document.macroenabled.12": "docm",
                "vnd.ms-word.template.macroenabled.12": "dotm",
                "vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
                "vnd.ms-wpl": "wpl",
                "vnd.ms-xpsdocument": "xps",
                "vnd.mseq": "mseq",
                "vnd.musician": "mus",
                "vnd.muvee.style": "msty",
                "vnd.mynfc": "taglet",
                "vnd.neurolanguage.nlu": "nlu",
                "vnd.nitf": ["ntf", "nitf"],
                "vnd.noblenet-directory": "nnd",
                "vnd.noblenet-sealer": "nns",
                "vnd.noblenet-web": "nnw",
                "vnd.nokia.n-gage.data": "ngdat",
                "vnd.nokia.n-gage.symbian.install": "n-gage",
                "vnd.nokia.radio-preset": "rpst",
                "vnd.nokia.radio-presets": "rpss",
                "vnd.novadigm.edm": "edm",
                "vnd.novadigm.edx": "edx",
                "vnd.novadigm.ext": "ext",
                "vnd.oasis.opendocument.chart-template": "otc",
                "vnd.oasis.opendocument.formula-template": "odft",
                "vnd.oasis.opendocument.image-template": "oti",
                "vnd.olpc-sugar": "xo",
                "vnd.oma.dd2+xml": "dd2",
                "vnd.openofficeorg.extension": "oxt",
                "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
                "vnd.osgeo.mapguide.package": "mgp",
                "vnd.osgi.dp": "dp",
                "vnd.osgi.subsystem": "esa",
                "vnd.palm": ["pdb", "pqa", "oprc"],
                "vnd.pawaafile": "paw",
                "vnd.pg.format": "str",
                "vnd.pg.osasli": "ei6",
                "vnd.picsel": "efif",
                "vnd.pmi.widget": "wg",
                "vnd.pocketlearn": "plf",
                "vnd.powerbuilder6": "pbd",
                "vnd.previewsystems.box": "box",
                "vnd.proteus.magazine": "mgz",
                "vnd.publishare-delta-tree": "qps",
                "vnd.pvi.ptid1": "ptid",
                "vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
                "vnd.realvnc.bed": "bed",
                "vnd.recordare.musicxml": "mxl",
                "vnd.recordare.musicxml+xml": "musicxml",
                "vnd.rig.cryptonote": "cryptonote",
                "vnd.rn-realmedia": "rm",
                "vnd.rn-realmedia-vbr": "rmvb",
                "vnd.route66.link66+xml": "link66",
                "vnd.sailingtracker.track": "st",
                "vnd.seemail": "see",
                "vnd.sema": "sema",
                "vnd.semd": "semd",
                "vnd.semf": "semf",
                "vnd.shana.informed.formdata": "ifm",
                "vnd.shana.informed.formtemplate": "itp",
                "vnd.shana.informed.interchange": "iif",
                "vnd.shana.informed.package": "ipk",
                "vnd.simtech-mindmapper": ["twd", "twds"],
                "vnd.smart.teacher": "teacher",
                "vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
                "vnd.spotfire.dxp": "dxp",
                "vnd.spotfire.sfs": "sfs",
                "vnd.stepmania.package": "smzip",
                "vnd.stepmania.stepchart": "sm",
                "vnd.sus-calendar": ["sus", "susp"],
                "vnd.svd": "svd",
                "vnd.syncml+xml": "xsm",
                "vnd.syncml.dm+wbxml": "bdm",
                "vnd.syncml.dm+xml": "xdm",
                "vnd.tao.intent-module-archive": "tao",
                "vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
                "vnd.tmobile-livetv": "tmo",
                "vnd.trid.tpt": "tpt",
                "vnd.triscape.mxs": "mxs",
                "vnd.trueapp": "tra",
                "vnd.ufdl": ["ufd", "ufdl"],
                "vnd.uiq.theme": "utz",
                "vnd.umajin": "umj",
                "vnd.unity": "unityweb",
                "vnd.uoml+xml": "uoml",
                "vnd.vcx": "vcx",
                "vnd.visionary": "vis",
                "vnd.vsf": "vsf",
                "vnd.webturbo": "wtb",
                "vnd.wolfram.player": "nbp",
                "vnd.wqd": "wqd",
                "vnd.wt.stf": "stf",
                "vnd.xara": "xar",
                "vnd.xfdl": "xfdl",
                "vnd.yamaha.hv-dic": "hvd",
                "vnd.yamaha.hv-script": "hvs",
                "vnd.yamaha.hv-voice": "hvp",
                "vnd.yamaha.openscoreformat": "osf",
                "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
                "vnd.yamaha.smaf-audio": "saf",
                "vnd.yamaha.smaf-phrase": "spf",
                "vnd.yellowriver-custom-menu": "cmp",
                "vnd.zul": ["zir", "zirz"],
                "vnd.zzazz.deck+xml": "zaz",
                "voicexml+xml": "vxml",
                widget: "wgt",
                winhlp: "hlp",
                "wsdl+xml": "wsdl",
                "wspolicy+xml": "wspolicy",
                "x-ace-compressed": "ace",
                "x-authorware-bin": ["aab", "x32", "u32", "vox"],
                "x-authorware-map": "aam",
                "x-authorware-seg": "aas",
                "x-blorb": ["blb", "blorb"],
                "x-bzip": "bz",
                "x-bzip2": ["bz2", "boz"],
                "x-cfs-compressed": "cfs",
                "x-chat": "chat",
                "x-conference": "nsc",
                "x-dgc-compressed": "dgc",
                "x-dtbncx+xml": "ncx",
                "x-dtbook+xml": "dtb",
                "x-dtbresource+xml": "res",
                "x-eva": "eva",
                "x-font-bdf": "bdf",
                "x-font-ghostscript": "gsf",
                "x-font-linux-psf": "psf",
                "x-font-otf": "otf",
                "x-font-pcf": "pcf",
                "x-font-snf": "snf",
                "x-font-ttf": ["ttf", "ttc"],
                "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
                "x-font-woff": "woff",
                "x-freearc": "arc",
                "x-gca-compressed": "gca",
                "x-glulx": "ulx",
                "x-gramps-xml": "gramps",
                "x-install-instructions": "install",
                "x-lzh-compressed": ["lzh", "lha"],
                "x-mie": "mie",
                "x-mobipocket-ebook": ["prc", "mobi"],
                "x-ms-application": "application",
                "x-ms-shortcut": "lnk",
                "x-ms-xbap": "xbap",
                "x-msbinder": "obd",
                "x-mscardfile": "crd",
                "x-msclip": "clp",
                "x-msdownload": ["exe", "dll", "com", "bat", "msi"],
                "x-msmediaview": ["mvb", "m13", "m14"],
                "x-msmetafile": ["wmf", "wmz", "emf", "emz"],
                "x-msmoney": "mny",
                "x-mspublisher": "pub",
                "x-msschedule": "scd",
                "x-msterminal": "trm",
                "x-mswrite": "wri",
                "x-nzb": "nzb",
                "x-pkcs12": ["p12", "pfx"],
                "x-pkcs7-certificates": ["p7b", "spc"],
                "x-research-info-systems": "ris",
                "x-silverlight-app": "xap",
                "x-sql": "sql",
                "x-stuffitx": "sitx",
                "x-subrip": "srt",
                "x-t3vm-image": "t3",
                "x-tads": "gam",
                "x-tex": "tex",
                "x-tex-tfm": "tfm",
                "x-tgif": "obj",
                "x-xliff+xml": "xlf",
                "x-xz": "xz",
                "x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
                "xaml+xml": "xaml",
                "xcap-diff+xml": "xdf",
                "xenc+xml": "xenc",
                "xml-dtd": "dtd",
                "xop+xml": "xop",
                "xproc+xml": "xpl",
                "xslt+xml": "xslt",
                "xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
                yang: "yang",
                "yin+xml": "yin",
                envoy: "evy",
                fractals: "fif",
                "internet-property-stream": "acx",
                olescript: "axs",
                "vnd.ms-outlook": "msg",
                "vnd.ms-pkicertstore": "sst",
                "x-compress": "z",
                "x-compressed": "tgz",
                "x-gzip": "gz",
                "x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"],
                "x-pkcs7-mime": ["p7c", "p7m"],
                "ynd.ms-pkipko": "pko"
            },
            audio: {
                amr: "amr",
                "amr-wb": "awb",
                annodex: "axa",
                basic: ["au", "snd"],
                flac: "flac",
                midi: ["mid", "midi", "kar", "rmi"],
                mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
                mpegurl: "m3u",
                ogg: ["oga", "ogg", "spx"],
                "prs.sid": "sid",
                "x-aiff": ["aif", "aiff", "aifc"],
                "x-gsm": "gsm",
                "x-ms-wma": "wma",
                "x-ms-wax": "wax",
                "x-pn-realaudio": "ram",
                "x-realaudio": "ra",
                "x-sd2": "sd2",
                "x-wav": "wav",
                adpcm: "adp",
                mp4: "mp4a",
                s3m: "s3m",
                silk: "sil",
                "vnd.dece.audio": ["uva", "uvva"],
                "vnd.digital-winds": "eol",
                "vnd.dra": "dra",
                "vnd.dts": "dts",
                "vnd.dts.hd": "dtshd",
                "vnd.lucent.voice": "lvp",
                "vnd.ms-playready.media.pya": "pya",
                "vnd.nuera.ecelp4800": "ecelp4800",
                "vnd.nuera.ecelp7470": "ecelp7470",
                "vnd.nuera.ecelp9600": "ecelp9600",
                "vnd.rip": "rip",
                webm: "weba",
                "x-aac": "aac",
                "x-caf": "caf",
                "x-matroska": "mka",
                "x-pn-realaudio-plugin": "rmp",
                xm: "xm",
                mid: ["mid", "rmi"]
            },
            chemical: {
                "x-alchemy": "alc",
                "x-cache": ["cac", "cache"],
                "x-cache-csf": "csf",
                "x-cactvs-binary": ["cbin", "cascii", "ctab"],
                "x-cdx": "cdx",
                "x-chem3d": "c3d",
                "x-cif": "cif",
                "x-cmdf": "cmdf",
                "x-cml": "cml",
                "x-compass": "cpa",
                "x-crossfire": "bsd",
                "x-csml": ["csml", "csm"],
                "x-ctx": "ctx",
                "x-cxf": ["cxf", "cef"],
                "x-embl-dl-nucleotide": ["emb", "embl"],
                "x-gamess-input": ["inp", "gam", "gamin"],
                "x-gaussian-checkpoint": ["fch", "fchk"],
                "x-gaussian-cube": "cub",
                "x-gaussian-input": ["gau", "gjc", "gjf"],
                "x-gaussian-log": "gal",
                "x-gcg8-sequence": "gcg",
                "x-genbank": "gen",
                "x-hin": "hin",
                "x-isostar": ["istr", "ist"],
                "x-jcamp-dx": ["jdx", "dx"],
                "x-kinemage": "kin",
                "x-macmolecule": "mcm",
                "x-macromodel-input": ["mmd", "mmod"],
                "x-mdl-molfile": "mol",
                "x-mdl-rdfile": "rd",
                "x-mdl-rxnfile": "rxn",
                "x-mdl-sdfile": ["sd", "sdf"],
                "x-mdl-tgf": "tgf",
                "x-mmcif": "mcif",
                "x-mol2": "mol2",
                "x-molconn-Z": "b",
                "x-mopac-graph": "gpt",
                "x-mopac-input": ["mop", "mopcrt", "mpc", "zmt"],
                "x-mopac-out": "moo",
                "x-ncbi-asn1": "asn",
                "x-ncbi-asn1-ascii": ["prt", "ent"],
                "x-ncbi-asn1-binary": ["val", "aso"],
                "x-pdb": ["pdb", "ent"],
                "x-rosdal": "ros",
                "x-swissprot": "sw",
                "x-vamas-iso14976": "vms",
                "x-vmd": "vmd",
                "x-xtel": "xtel",
                "x-xyz": "xyz"
            },
            image: {
                gif: "gif",
                ief: "ief",
                jpeg: ["jpeg", "jpg", "jpe"],
                pcx: "pcx",
                png: "png",
                "svg+xml": ["svg", "svgz"],
                tiff: ["tiff", "tif"],
                "vnd.djvu": ["djvu", "djv"],
                "vnd.wap.wbmp": "wbmp",
                "x-canon-cr2": "cr2",
                "x-canon-crw": "crw",
                "x-cmu-raster": "ras",
                "x-coreldraw": "cdr",
                "x-coreldrawpattern": "pat",
                "x-coreldrawtemplate": "cdt",
                "x-corelphotopaint": "cpt",
                "x-epson-erf": "erf",
                "x-icon": "ico",
                "x-jg": "art",
                "x-jng": "jng",
                "x-nikon-nef": "nef",
                "x-olympus-orf": "orf",
                "x-photoshop": "psd",
                "x-portable-anymap": "pnm",
                "x-portable-bitmap": "pbm",
                "x-portable-graymap": "pgm",
                "x-portable-pixmap": "ppm",
                "x-rgb": "rgb",
                "x-xbitmap": "xbm",
                "x-xpixmap": "xpm",
                "x-xwindowdump": "xwd",
                bmp: "bmp",
                cgm: "cgm",
                g3fax: "g3",
                ktx: "ktx",
                "prs.btif": "btif",
                sgi: "sgi",
                "vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
                "vnd.dwg": "dwg",
                "vnd.dxf": "dxf",
                "vnd.fastbidsheet": "fbs",
                "vnd.fpx": "fpx",
                "vnd.fst": "fst",
                "vnd.fujixerox.edmics-mmr": "mmr",
                "vnd.fujixerox.edmics-rlc": "rlc",
                "vnd.ms-modi": "mdi",
                "vnd.ms-photo": "wdp",
                "vnd.net-fpx": "npx",
                "vnd.xiff": "xif",
                webp: "webp",
                "x-3ds": "3ds",
                "x-cmx": "cmx",
                "x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
                "x-pict": ["pic", "pct"],
                "x-tga": "tga",
                "cis-cod": "cod",
                pipeg: "jfif"
            },
            message: {
                rfc822: ["eml", "mime", "mht", "mhtml", "nws"]
            },
            model: {
                iges: ["igs", "iges"],
                mesh: ["msh", "mesh", "silo"],
                vrml: ["wrl", "vrml"],
                "x3d+vrml": ["x3dv", "x3dvz"],
                "x3d+xml": ["x3d", "x3dz"],
                "x3d+binary": ["x3db", "x3dbz"],
                "vnd.collada+xml": "dae",
                "vnd.dwf": "dwf",
                "vnd.gdl": "gdl",
                "vnd.gtw": "gtw",
                "vnd.mts": "mts",
                "vnd.vtu": "vtu"
            },
            text: {
                "cache-manifest": ["manifest", "appcache"],
                calendar: ["ics", "icz", "ifb"],
                css: "css",
                csv: "csv",
                h323: "323",
                html: ["html", "htm", "shtml", "stm"],
                iuls: "uls",
                mathml: "mml",
                plain: ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
                richtext: "rtx",
                scriptlet: ["sct", "wsc"],
                texmacs: ["tm", "ts"],
                "tab-separated-values": "tsv",
                "vnd.sun.j2me.app-descriptor": "jad",
                "vnd.wap.wml": "wml",
                "vnd.wap.wmlscript": "wmls",
                "x-bibtex": "bib",
                "x-boo": "boo",
                "x-c++hdr": ["h++", "hpp", "hxx", "hh"],
                "x-c++src": ["c++", "cpp", "cxx", "cc"],
                "x-component": "htc",
                "x-dsrc": "d",
                "x-diff": ["diff", "patch"],
                "x-haskell": "hs",
                "x-java": "java",
                "x-literate-haskell": "lhs",
                "x-moc": "moc",
                "x-pascal": ["p", "pas"],
                "x-pcs-gcd": "gcd",
                "x-perl": ["pl", "pm"],
                "x-python": "py",
                "x-scala": "scala",
                "x-setext": "etx",
                "x-tcl": ["tcl", "tk"],
                "x-tex": ["tex", "ltx", "sty", "cls"],
                "x-vcalendar": "vcs",
                "x-vcard": "vcf",
                n3: "n3",
                "prs.lines.tag": "dsc",
                sgml: ["sgml", "sgm"],
                troff: ["t", "tr", "roff", "man", "me", "ms"],
                turtle: "ttl",
                "uri-list": ["uri", "uris", "urls"],
                vcard: "vcard",
                "vnd.curl": "curl",
                "vnd.curl.dcurl": "dcurl",
                "vnd.curl.scurl": "scurl",
                "vnd.curl.mcurl": "mcurl",
                "vnd.dvb.subtitle": "sub",
                "vnd.fly": "fly",
                "vnd.fmi.flexstor": "flx",
                "vnd.graphviz": "gv",
                "vnd.in3d.3dml": "3dml",
                "vnd.in3d.spot": "spot",
                "x-asm": ["s", "asm"],
                "x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
                "x-fortran": ["f", "for", "f77", "f90"],
                "x-opml": "opml",
                "x-nfo": "nfo",
                "x-sfv": "sfv",
                "x-uuencode": "uu",
                webviewhtml: "htt"
            },
            video: {
                avif: ".avif",
                "3gpp": "3gp",
                annodex: "axv",
                dl: "dl",
                dv: ["dif", "dv"],
                fli: "fli",
                gl: "gl",
                mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
                mp4: ["mp4", "mp4v", "mpg4"],
                quicktime: ["qt", "mov"],
                ogg: "ogv",
                "vnd.mpegurl": ["mxu", "m4u"],
                "x-flv": "flv",
                "x-la-asf": ["lsf", "lsx"],
                "x-mng": "mng",
                "x-ms-asf": ["asf", "asx", "asr"],
                "x-ms-wm": "wm",
                "x-ms-wmv": "wmv",
                "x-ms-wmx": "wmx",
                "x-ms-wvx": "wvx",
                "x-msvideo": "avi",
                "x-sgi-movie": "movie",
                "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
                "3gpp2": "3g2",
                h261: "h261",
                h263: "h263",
                h264: "h264",
                jpeg: "jpgv",
                jpm: ["jpm", "jpgm"],
                mj2: ["mj2", "mjp2"],
                "vnd.dece.hd": ["uvh", "uvvh"],
                "vnd.dece.mobile": ["uvm", "uvvm"],
                "vnd.dece.pd": ["uvp", "uvvp"],
                "vnd.dece.sd": ["uvs", "uvvs"],
                "vnd.dece.video": ["uvv", "uvvv"],
                "vnd.dvb.file": "dvb",
                "vnd.fvt": "fvt",
                "vnd.ms-playready.media.pyv": "pyv",
                "vnd.uvvu.mp4": ["uvu", "uvvu"],
                "vnd.vivo": "viv",
                webm: "webm",
                "x-f4v": "f4v",
                "x-m4v": "m4v",
                "x-ms-vob": "vob",
                "x-smv": "smv"
            },
            "x-conference": {
                "x-cooltalk": "ice"
            },
            "x-world": {
                "x-vrml": ["vrm", "vrml", "wrl", "flr", "wrz", "xaf", "xof"]
            }
        },
        P = (() => {
            const t = {};
            for (let e in L)
                if (L.hasOwnProperty(e))
                    for (let n in L[e])
                        if (L[e].hasOwnProperty(n)) {
                            const i = L[e][n];
                            if ("string" == typeof i) t[i] = e + "/" + n;
                            else
                                for (let r = 0; r < i.length; r++) t[i[r]] = e + "/" + n
                        }
            return t
        })();
    const V = [];
    for (let t = 0; t < 256; t++) {
        let e = t;
        for (let t = 0; t < 8; t++) 1 & e ? e = e >>> 1 ^ 3988292384 : e >>>= 1;
        V[t] = e
    }
    class Z {
        constructor(t) {
            this.crc = t || -1
        }
        append(t) {
            let e = 0 | this.crc;
            for (let n = 0, i = 0 | t.length; n < i; n++) e = e >>> 8 ^ V[255 & (e ^ t[n])];
            this.crc = e
        }
        get() {
            return ~this.crc
        }
    }

    function K(t) {
        if ("undefined" == typeof TextEncoder) {
            t = unescape(encodeURIComponent(t));
            const e = new Uint8Array(t.length);
            for (let n = 0; n < e.length; n++) e[n] = t.charCodeAt(n);
            return e
        }
        return (new TextEncoder).encode(t)
    }
    const G = {
            concat(t, e) {
                if (0 === t.length || 0 === e.length) return t.concat(e);
                const n = t[t.length - 1],
                    i = G.getPartial(n);
                return 32 === i ? t.concat(e) : G._shiftRight(e, i, 0 | n, t.slice(0, t.length - 1))
            },
            bitLength(t) {
                const e = t.length;
                if (0 === e) return 0;
                const n = t[e - 1];
                return 32 * (e - 1) + G.getPartial(n)
            },
            clamp(t, e) {
                if (32 * t.length < e) return t;
                const n = (t = t.slice(0, Math.ceil(e / 32))).length;
                return e &= 31, n > 0 && e && (t[n - 1] = G.partial(e, t[n - 1] & 2147483648 >> e - 1, 1)), t
            },
            partial: (t, e, n) => 32 === t ? e : (n ? 0 | e : e << 32 - t) + 1099511627776 * t,
            getPartial: t => Math.round(t / 1099511627776) || 32,
            _shiftRight(t, e, n, i) {
                for (void 0 === i && (i = []); e >= 32; e -= 32) i.push(n), n = 0;
                if (0 === e) return i.concat(t);
                for (let r = 0; r < t.length; r++) i.push(n | t[r] >>> e), n = t[r] << 32 - e;
                const r = t.length ? t[t.length - 1] : 0,
                    a = G.getPartial(r);
                return i.push(G.partial(e + a & 31, e + a > 32 ? n : i.pop(), 1)), i
            }
        },
        X = {
            bytes: {
                fromBits(t) {
                    const e = G.bitLength(t) / 8,
                        n = new Uint8Array(e);
                    let i;
                    for (let r = 0; r < e; r++) 0 == (3 & r) && (i = t[r / 4]), n[r] = i >>> 24, i <<= 8;
                    return n
                },
                toBits(t) {
                    const e = [];
                    let n, i = 0;
                    for (n = 0; n < t.length; n++) i = i << 8 | t[n], 3 == (3 & n) && (e.push(i), i = 0);
                    return 3 & n && e.push(G.partial(8 * (3 & n), i)), e
                }
            }
        },
        Q = {
            sha1: function(t) {
                t ? (this._h = t._h.slice(0), this._buffer = t._buffer.slice(0), this._length = t._length) : this.reset()
            }
        };
    Q.sha1.prototype = {
        blockSize: 512,
        reset: function() {
            const t = this;
            return t._h = this._init.slice(0), t._buffer = [], t._length = 0, t
        },
        update: function(t) {
            const e = this;
            "string" == typeof t && (t = X.utf8String.toBits(t));
            const n = e._buffer = G.concat(e._buffer, t),
                i = e._length,
                r = e._length = i + G.bitLength(t);
            if (r > 9007199254740991) throw new Error("Cannot hash more than 2^53 - 1 bits");
            const a = new Uint32Array(n);
            let s = 0;
            for (let t = e.blockSize + i - (e.blockSize + i & e.blockSize - 1); t <= r; t += e.blockSize) e._block(a.subarray(16 * s, 16 * (s + 1))), s += 1;
            return n.splice(0, 16 * s), e
        },
        finalize: function() {
            const t = this;
            let e = t._buffer;
            const n = t._h;
            e = G.concat(e, [G.partial(1, 1)]);
            for (let t = e.length + 2; 15 & t; t++) e.push(0);
            for (e.push(Math.floor(t._length / 4294967296)), e.push(0 | t._length); e.length;) t._block(e.splice(0, 16));
            return t.reset(), n
        },
        _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        _key: [1518500249, 1859775393, 2400959708, 3395469782],
        _f: function(t, e, n, i) {
            return t <= 19 ? e & n | ~e & i : t <= 39 ? e ^ n ^ i : t <= 59 ? e & n | e & i | n & i : t <= 79 ? e ^ n ^ i : void 0
        },
        _S: function(t, e) {
            return e << t | e >>> 32 - t
        },
        _block: function(t) {
            const e = this,
                n = e._h,
                i = Array(80);
            for (let e = 0; e < 16; e++) i[e] = t[e];
            let r = n[0],
                a = n[1],
                s = n[2],
                o = n[3],
                l = n[4];
            for (let t = 0; t <= 79; t++) {
                t >= 16 && (i[t] = e._S(1, i[t - 3] ^ i[t - 8] ^ i[t - 14] ^ i[t - 16]));
                const n = e._S(5, r) + e._f(t, a, s, o) + l + i[t] + e._key[Math.floor(t / 20)] | 0;
                l = o, o = s, s = e._S(30, a), a = r, r = n
            }
            n[0] = n[0] + r | 0, n[1] = n[1] + a | 0, n[2] = n[2] + s | 0, n[3] = n[3] + o | 0, n[4] = n[4] + l | 0
        }
    };
    const Y = {
            aes: class {
                constructor(t) {
                    const e = this;
                    e._tables = [
                        [
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [
                            [],
                            [],
                            [],
                            [],
                            []
                        ]
                    ], e._tables[0][0][0] || e._precompute();
                    const n = e._tables[0][4],
                        i = e._tables[1],
                        r = t.length;
                    let a, s, o, l = 1;
                    if (4 !== r && 6 !== r && 8 !== r) throw new Error("invalid aes key size");
                    for (e._key = [s = t.slice(0), o = []], a = r; a < 4 * r + 28; a++) {
                        let t = s[a - 1];
                        (a % r == 0 || 8 === r && a % r == 4) && (t = n[t >>> 24] << 24 ^ n[t >> 16 & 255] << 16 ^ n[t >> 8 & 255] << 8 ^ n[255 & t], a % r == 0 && (t = t << 8 ^ t >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), s[a] = s[a - r] ^ t
                    }
                    for (let t = 0; a; t++, a--) {
                        const e = s[3 & t ? a : a - 4];
                        o[t] = a <= 4 || t < 4 ? e : i[0][n[e >>> 24]] ^ i[1][n[e >> 16 & 255]] ^ i[2][n[e >> 8 & 255]] ^ i[3][n[255 & e]]
                    }
                }
                encrypt(t) {
                    return this._crypt(t, 0)
                }
                decrypt(t) {
                    return this._crypt(t, 1)
                }
                _precompute() {
                    const t = this._tables[0],
                        e = this._tables[1],
                        n = t[4],
                        i = e[4],
                        r = [],
                        a = [];
                    let s, o, l, d;
                    for (let t = 0; t < 256; t++) a[(r[t] = t << 1 ^ 283 * (t >> 7)) ^ t] = t;
                    for (let c = s = 0; !n[c]; c ^= o || 1, s = a[s] || 1) {
                        let a = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                        a = a >> 8 ^ 255 & a ^ 99, n[c] = a, i[a] = c, d = r[l = r[o = r[c]]];
                        let f = 16843009 * d ^ 65537 * l ^ 257 * o ^ 16843008 * c,
                            u = 257 * r[a] ^ 16843008 * a;
                        for (let n = 0; n < 4; n++) t[n][c] = u = u << 24 ^ u >>> 8, e[n][a] = f = f << 24 ^ f >>> 8
                    }
                    for (let n = 0; n < 5; n++) t[n] = t[n].slice(0), e[n] = e[n].slice(0)
                }
                _crypt(t, e) {
                    if (4 !== t.length) throw new Error("invalid aes block size");
                    const n = this._key[e],
                        i = n.length / 4 - 2,
                        r = [0, 0, 0, 0],
                        a = this._tables[e],
                        s = a[0],
                        o = a[1],
                        l = a[2],
                        d = a[3],
                        c = a[4];
                    let f, u, p, h = t[0] ^ n[0],
                        m = t[e ? 3 : 1] ^ n[1],
                        _ = t[2] ^ n[2],
                        x = t[e ? 1 : 3] ^ n[3],
                        w = 4;
                    for (let t = 0; t < i; t++) f = s[h >>> 24] ^ o[m >> 16 & 255] ^ l[_ >> 8 & 255] ^ d[255 & x] ^ n[w], u = s[m >>> 24] ^ o[_ >> 16 & 255] ^ l[x >> 8 & 255] ^ d[255 & h] ^ n[w + 1], p = s[_ >>> 24] ^ o[x >> 16 & 255] ^ l[h >> 8 & 255] ^ d[255 & m] ^ n[w + 2], x = s[x >>> 24] ^ o[h >> 16 & 255] ^ l[m >> 8 & 255] ^ d[255 & _] ^ n[w + 3], w += 4, h = f, m = u, _ = p;
                    for (let t = 0; t < 4; t++) r[e ? 3 & -t : t] = c[h >>> 24] << 24 ^ c[m >> 16 & 255] << 16 ^ c[_ >> 8 & 255] << 8 ^ c[255 & x] ^ n[w++], f = h, h = m, m = _, _ = x, x = f;
                    return r
                }
            }
        },
        J = {
            ctrGladman: class {
                constructor(t, e) {
                    this._prf = t, this._initIv = e, this._iv = e
                }
                reset() {
                    this._iv = this._initIv
                }
                update(t) {
                    return this.calculate(this._prf, t, this._iv)
                }
                incWord(t) {
                    if (255 == (t >> 24 & 255)) {
                        let e = t >> 16 & 255,
                            n = t >> 8 & 255,
                            i = 255 & t;
                        255 === e ? (e = 0, 255 === n ? (n = 0, 255 === i ? i = 0 : ++i) : ++n) : ++e, t = 0, t += e << 16, t += n << 8, t += i
                    } else t += 1 << 24;
                    return t
                }
                incCounter(t) {
                    0 === (t[0] = this.incWord(t[0])) && (t[1] = this.incWord(t[1]))
                }
                calculate(t, e, n) {
                    let i;
                    if (!(i = e.length)) return [];
                    const r = G.bitLength(e);
                    for (let r = 0; r < i; r += 4) {
                        this.incCounter(n);
                        const i = t.encrypt(n);
                        e[r] ^= i[0], e[r + 1] ^= i[1], e[r + 2] ^= i[2], e[r + 3] ^= i[3]
                    }
                    return G.clamp(e, r)
                }
            }
        },
        $ = {
            hmacSha1: class {
                constructor(t) {
                    const e = this,
                        n = e._hash = Q.sha1,
                        i = [
                            [],
                            []
                        ],
                        r = n.prototype.blockSize / 32;
                    e._baseHash = [new n, new n], t.length > r && (t = n.hash(t));
                    for (let e = 0; e < r; e++) i[0][e] = 909522486 ^ t[e], i[1][e] = 1549556828 ^ t[e];
                    e._baseHash[0].update(i[0]), e._baseHash[1].update(i[1]), e._resultHash = new n(e._baseHash[0])
                }
                reset() {
                    const t = this;
                    t._resultHash = new t._hash(t._baseHash[0]), t._updated = !1
                }
                update(t) {
                    this._updated = !0, this._resultHash.update(t)
                }
                digest() {
                    const t = this,
                        e = t._resultHash.finalize(),
                        n = new t._hash(t._baseHash[1]).update(e).finalize();
                    return t.reset(), n
                }
            }
        },
        tt = "Invalid pasword",
        et = 16,
        nt = {
            name: "PBKDF2"
        },
        it = Object.assign({
            hash: {
                name: "HMAC"
            }
        }, nt),
        rt = Object.assign({
            iterations: 1e3,
            hash: {
                name: "SHA-1"
            }
        }, nt),
        at = ["deriveBits"],
        st = [8, 12, 16],
        ot = [16, 24, 32],
        lt = 10,
        dt = [0, 0, 0, 0],
        ct = X.bytes,
        ft = Y.aes,
        ut = J.ctrGladman,
        pt = $.hmacSha1;
    class ht {
        constructor(t, e, n) {
            Object.assign(this, {
                password: t,
                signed: e,
                strength: n - 1,
                pendingInput: new Uint8Array(0)
            })
        }
        async append(t) {
            const e = this;
            if (e.password) {
                const n = gt(t, 0, st[e.strength] + 2);
                await async function(t, e, n) {
                    await xt(t, n, gt(e, 0, st[t.strength]));
                    const i = gt(e, st[t.strength]),
                        r = t.keys.passwordVerification;
                    if (r[0] != i[0] || r[1] != i[1]) throw new Error(tt)
                }(e, n, e.password), e.password = null, e.aesCtrGladman = new ut(new ft(e.keys.key), Array.from(dt)), e.hmac = new pt(e.keys.authentication), t = gt(t, st[e.strength] + 2)
            }
            return _t(e, t, new Uint8Array(t.length - lt - (t.length - lt) % et), 0, lt, !0)
        }
        flush() {
            const t = this,
                e = t.pendingInput,
                n = gt(e, 0, e.length - lt),
                i = gt(e, e.length - lt);
            let r = new Uint8Array(0);
            if (n.length) {
                const e = ct.toBits(n);
                t.hmac.update(e);
                const i = t.aesCtrGladman.update(e);
                r = ct.fromBits(i)
            }
            let a = !0;
            if (t.signed) {
                const e = gt(ct.fromBits(t.hmac.digest()), 0, lt);
                for (let t = 0; t < lt; t++) e[t] != i[t] && (a = !1)
            }
            return {
                valid: a,
                data: r
            }
        }
    }
    class mt {
        constructor(t, e) {
            Object.assign(this, {
                password: t,
                strength: e - 1,
                pendingInput: new Uint8Array(0)
            })
        }
        async append(t) {
            const e = this;
            let n = new Uint8Array(0);
            e.password && (n = await async function(t, e) {
                const n = crypto.getRandomValues(new Uint8Array(st[t.strength]));
                return await xt(t, e, n), wt(n, t.keys.passwordVerification)
            }(e, e.password), e.password = null, e.aesCtrGladman = new ut(new ft(e.keys.key), Array.from(dt)), e.hmac = new pt(e.keys.authentication));
            const i = new Uint8Array(n.length + t.length - t.length % et);
            return i.set(n, 0), _t(e, t, i, n.length, 0)
        }
        flush() {
            const t = this;
            let e = new Uint8Array(0);
            if (t.pendingInput.length) {
                const n = t.aesCtrGladman.update(ct.toBits(t.pendingInput));
                t.hmac.update(n), e = ct.fromBits(n)
            }
            const n = gt(ct.fromBits(t.hmac.digest()), 0, lt);
            return {
                data: wt(e, n),
                signature: n
            }
        }
    }

    function _t(t, e, n, i, r, a) {
        const s = e.length - r;
        let o;
        for (t.pendingInput.length && (e = wt(t.pendingInput, e), n = function(t, e) {
                if (e && e > t.length) {
                    const n = t;
                    (t = new Uint8Array(e)).set(n, 0)
                }
                return t
            }(n, s - s % et)), o = 0; o <= s - et; o += et) {
            const r = ct.toBits(gt(e, o, o + et));
            a && t.hmac.update(r);
            const s = t.aesCtrGladman.update(r);
            a || t.hmac.update(s), n.set(ct.fromBits(s), o + i)
        }
        return t.pendingInput = gt(e, o), n
    }
    async function xt(t, e, n) {
        const i = K(e),
            r = await crypto.subtle.importKey("raw", i, it, !1, at),
            a = await crypto.subtle.deriveBits(Object.assign({
                salt: n
            }, rt), r, 8 * (2 * ot[t.strength] + 2)),
            s = new Uint8Array(a);
        t.keys = {
            key: ct.toBits(gt(s, 0, ot[t.strength])),
            authentication: ct.toBits(gt(s, ot[t.strength], 2 * ot[t.strength])),
            passwordVerification: gt(s, 2 * ot[t.strength])
        }
    }

    function wt(t, e) {
        let n = t;
        return t.length + e.length && (n = new Uint8Array(t.length + e.length), n.set(t, 0), n.set(e, t.length)), n
    }

    function gt(t, e, n) {
        return t.subarray(e, n)
    }
    const bt = 12;
    class vt {
        constructor(t, e) {
            Object.assign(this, {
                password: t,
                passwordVerification: e
            }), At(this, t)
        }
        append(t) {
            const e = this;
            if (e.password) {
                const n = kt(e, t.subarray(0, bt));
                if (e.password = null, n[11] != e.passwordVerification) throw new Error(tt);
                t = t.subarray(bt)
            }
            return kt(e, t)
        }
        flush() {
            return {
                valid: !0,
                data: new Uint8Array(0)
            }
        }
    }
    class yt {
        constructor(t, e) {
            Object.assign(this, {
                password: t,
                passwordVerification: e
            }), At(this, t)
        }
        append(t) {
            const e = this;
            let n, i;
            if (e.password) {
                e.password = null;
                const r = crypto.getRandomValues(new Uint8Array(bt));
                r[11] = e.passwordVerification, n = new Uint8Array(t.length + r.length), n.set(zt(e, r), 0), i = bt
            } else n = new Uint8Array(t.length), i = 0;
            return n.set(zt(e, t), i), n
        }
        flush() {
            return {
                data: new Uint8Array(0)
            }
        }
    }

    function kt(t, e) {
        const n = new Uint8Array(e.length);
        for (let i = 0; i < e.length; i++) n[i] = Et(t) ^ e[i], Ut(t, n[i]);
        return n
    }

    function zt(t, e) {
        const n = new Uint8Array(e.length);
        for (let i = 0; i < e.length; i++) n[i] = Et(t) ^ e[i], Ut(t, e[i]);
        return n
    }

    function At(t, e) {
        t.keys = [305419896, 591751049, 878082192], t.crcKey0 = new Z(t.keys[0]), t.crcKey2 = new Z(t.keys[2]);
        for (let n = 0; n < e.length; n++) Ut(t, e.charCodeAt(n))
    }

    function Ut(t, e) {
        t.crcKey0.append([e]), t.keys[0] = ~t.crcKey0.get(), t.keys[1] = Dt(t.keys[1] + St(t.keys[0])), t.keys[1] = Dt(Math.imul(t.keys[1], 134775813) + 1), t.crcKey2.append([t.keys[1] >>> 24]), t.keys[2] = ~t.crcKey2.get()
    }

    function Et(t) {
        const e = 2 | t.keys[2];
        return St(Math.imul(e, 1 ^ e) >>> 8)
    }

    function St(t) {
        return 255 & t
    }

    function Dt(t) {
        return 4294967295 & t
    }
    const Rt = "deflate",
        It = "inflate",
        Bt = "Invalid signature";
    class jt {
        constructor(t, {
            signature: e,
            password: n,
            signed: i,
            compressed: r,
            zipCrypto: a,
            passwordVerification: s,
            encryptionStrength: o
        }, {
            chunkSize: l
        }) {
            const d = Boolean(n);
            Object.assign(this, {
                signature: e,
                encrypted: d,
                signed: i,
                compressed: r,
                inflate: r && new t({
                    chunkSize: l
                }),
                crc32: i && new Z,
                zipCrypto: a,
                decrypt: d && a ? new vt(n, s) : new ht(n, i, o)
            })
        }
        async append(t) {
            const e = this;
            return e.encrypted && t.length && (t = await e.decrypt.append(t)), e.compressed && t.length && (t = await e.inflate.append(t)), (!e.encrypted || e.zipCrypto) && e.signed && t.length && e.crc32.append(t), t
        }
        async flush() {
            const t = this;
            let e, n = new Uint8Array(0);
            if (t.encrypted) {
                const e = t.decrypt.flush();
                if (!e.valid) throw new Error(Bt);
                n = e.data
            }
            if ((!t.encrypted || t.zipCrypto) && t.signed) {
                const n = new DataView(new Uint8Array(4).buffer);
                if (e = t.crc32.get(), n.setUint32(0, e), t.signature != n.getUint32(0, !1)) throw new Error(Bt)
            }
            return t.compressed && (n = await t.inflate.append(n) || new Uint8Array(0), await t.inflate.flush()), {
                data: n,
                signature: e
            }
        }
    }
    class Tt {
        constructor(t, {
            encrypted: e,
            signed: n,
            compressed: i,
            level: r,
            zipCrypto: a,
            password: s,
            passwordVerification: o,
            encryptionStrength: l
        }, {
            chunkSize: d
        }) {
            Object.assign(this, {
                encrypted: e,
                signed: n,
                compressed: i,
                deflate: i && new t({
                    level: r || 5,
                    chunkSize: d
                }),
                crc32: n && new Z,
                zipCrypto: a,
                encrypt: e && a ? new yt(s, o) : new mt(s, l)
            })
        }
        async append(t) {
            const e = this;
            let n = t;
            return e.compressed && t.length && (n = await e.deflate.append(t)), e.encrypted && n.length && (n = await e.encrypt.append(n)), (!e.encrypted || e.zipCrypto) && e.signed && t.length && e.crc32.append(t), n
        }
        async flush() {
            const t = this;
            let e, n = new Uint8Array(0);
            if (t.compressed && (n = await t.deflate.flush() || new Uint8Array(0)), t.encrypted) {
                n = await t.encrypt.append(n);
                const i = t.encrypt.flush();
                e = i.signature;
                const r = new Uint8Array(n.length + i.data.length);
                r.set(n, 0), r.set(i.data, n.length), n = r
            }
            return t.encrypted && !t.zipCrypto || !t.signed || (e = t.crc32.get()), {
                data: n,
                signature: e
            }
        }
    }
    const Ct = "init",
        Ft = "append",
        Mt = "flush",
        Wt = "message";
    let Ot = !0;
    var Ht = (t, e, n, i, r, a, s) => (Object.assign(t, {
        busy: !0,
        codecConstructor: e,
        options: Object.assign({}, n),
        scripts: s,
        terminate() {
            t.worker && !t.busy && (t.worker.terminate(), t.interface = null)
        },
        onTaskFinished() {
            t.busy = !1, r(t)
        }
    }), a ? function(t, e) {
        let n;
        const i = {
            type: "module"
        };
        if (!t.interface) {
            if (Ot) try {
                t.worker = r()
            } catch (e) {
                Ot = !1, t.worker = r(i)
            } else t.worker = r(i);
            t.worker.addEventListener(Wt, o, !1), t.interface = {
                append: t => a({
                    type: Ft,
                    data: t
                }), flush: () => a({
                    type: Mt
                })
            }
        }
        return t.interface;

        function r(e = {}) {
            let n;
            try {
                n = new URL(t.scripts[0], "undefined" == typeof document && "undefined" == typeof location ? new(require("url").URL)("file:" + __filename).href : "undefined" == typeof document ? location.href : document.currentScript && document.currentScript.src || new URL("zip-fs-full.min.js", document.baseURI).href)
            } catch (e) {
                n = t.scripts[0]
            }
            return new Worker(n, e)
        }
        async function a(i) {
            if (!n) {
                const n = t.options,
                    i = t.scripts.slice(1);
                await s({
                    scripts: i,
                    type: Ct,
                    options: n,
                    config: {
                        chunkSize: e.chunkSize
                    }
                })
            }
            return s(i)
        }

        function s(e) {
            const i = t.worker,
                r = new Promise(((t, e) => n = {
                    resolve: t,
                    reject: e
                }));
            try {
                if (e.data) try {
                    e.data = e.data.buffer, i.postMessage(e, [e.data])
                } catch (t) {
                    i.postMessage(e)
                } else i.postMessage(e)
            } catch (e) {
                n.reject(e), n = null, t.onTaskFinished()
            }
            return r
        }

        function o(e) {
            const i = e.data;
            if (n) {
                const e = i.error,
                    r = i.type;
                if (e) {
                    const i = new Error(e.message);
                    i.stack = e.stack, n.reject(i), n = null, t.onTaskFinished()
                } else if (r == Ct || r == Mt || r == Ft) {
                    const e = i.data;
                    r == Mt ? (n.resolve({
                        data: new Uint8Array(e),
                        signature: i.signature
                    }), n = null, t.onTaskFinished()) : n.resolve(e && new Uint8Array(e))
                }
            }
        }
    }(t, i) : function(t, e) {
        const n = function(t, e, n) {
            return e.codecType.startsWith(Rt) ? new Tt(t, e, n) : e.codecType.startsWith(It) ? new jt(t, e, n) : void 0
        }(t.codecConstructor, t.options, e);
        return {
            async append(e) {
                try {
                    return await n.append(e)
                } catch (e) {
                    throw t.onTaskFinished(), e
                }
            },
            async flush() {
                try {
                    return await n.flush()
                } finally {
                    t.onTaskFinished()
                }
            }
        }
    }(t, i));
    let qt = [],
        Nt = [];

    function Lt(t, e, n) {
        const i = !(!e.compressed && !e.signed && !e.encrypted) && (e.useWebWorkers || void 0 === e.useWebWorkers && n.useWebWorkers),
            r = i && n.workerScripts ? n.workerScripts[e.codecType] : [];
        if (qt.length < n.maxWorkers) {
            const s = {};
            return qt.push(s), Ht(s, t, e, n, a, i, r)
        } {
            const s = qt.find((t => !t.busy));
            return s ? (Pt(s), Ht(s, t, e, n, a, i, r)) : new Promise((n => Nt.push({
                resolve: n,
                codecConstructor: t,
                options: e,
                webWorker: i,
                scripts: r
            })))
        }

        function a(t) {
            if (Nt.length) {
                const [{
                    resolve: e,
                    codecConstructor: i,
                    options: r,
                    webWorker: s,
                    scripts: o
                }] = Nt.splice(0, 1);
                e(Ht(t, i, r, n, a, s, o))
            } else t.worker ? (Pt(t), Number.isFinite(n.terminateWorkerTimeout) && n.terminateWorkerTimeout >= 0 && (t.terminateTimeout = setTimeout((() => {
                qt = qt.filter((e => e != t)), t.terminate()
            }), n.terminateWorkerTimeout))) : qt = qt.filter((e => e != t))
        }
    }

    function Pt(t) {
        t.terminateTimeout && (clearTimeout(t.terminateTimeout), t.terminateTimeout = null)
    }

    function Vt(t, e, n) {
        return class {
            constructor(i) {
                const r = this;
                r.codec = new t(Object.assign({}, e, i)), n(r.codec, (t => {
                    if (r.pendingData) {
                        const e = r.pendingData;
                        r.pendingData = new Uint8Array(e.length + t.length), r.pendingData.set(e, 0), r.pendingData.set(t, e.length)
                    } else r.pendingData = new Uint8Array(t)
                }))
            }
            async append(t) {
                return this.codec.push(t), i(this)
            }
            async flush() {
                return this.codec.push(new Uint8Array(0), !0), i(this)
            }
        };

        function i(t) {
            if (t.pendingData) {
                const e = t.pendingData;
                return t.pendingData = null, e
            }
            return new Uint8Array(0)
        }
    }
    const Zt = "HTTP error ",
        Kt = "HTTP Range not supported",
        Gt = "text/plain",
        Xt = "GET",
        Qt = "bytes";
    class Yt {
        constructor() {
            this.size = 0
        }
        init() {
            this.initialized = !0
        }
    }
    class Jt extends Yt {}
    class $t extends Yt {
        writeUint8Array(t) {
            this.size += t.length
        }
    }
    class te extends Jt {
        constructor(t) {
            super(), this.blobReader = new re(new Blob([t], {
                type: Gt
            }))
        }
        async init() {
            super.init(), this.blobReader.init(), this.size = this.blobReader.size
        }
        async readUint8Array(t, e) {
            return this.blobReader.readUint8Array(t, e)
        }
    }
    class ee extends $t {
        constructor(t) {
            super(), this.encoding = t, this.blob = new Blob([], {
                type: Gt
            })
        }
        async writeUint8Array(t) {
            super.writeUint8Array(t), this.blob = new Blob([this.blob, t.buffer], {
                type: Gt
            })
        }
        getData() {
            if (this.blob.text) return this.blob.text(); {
                const t = new FileReader;
                return new Promise(((e, n) => {
                    t.onload = t => e(t.target.result), t.onerror = () => n(t.error), t.readAsText(this.blob, this.encoding)
                }))
            }
        }
    }
    class ne extends Jt {
        constructor(t) {
            super(), this.dataURI = t;
            let e = t.length;
            for (;
                "=" == t.charAt(e - 1);) e--;
            this.dataStart = t.indexOf(",") + 1, this.size = Math.floor(.75 * (e - this.dataStart))
        }
        async readUint8Array(t, e) {
            const n = new Uint8Array(e),
                i = 4 * Math.floor(t / 3),
                r = atob(this.dataURI.substring(i + this.dataStart, 4 * Math.ceil((t + e) / 3) + this.dataStart)),
                a = t - 3 * Math.floor(i / 4);
            for (let t = a; t < a + e; t++) n[t - a] = r.charCodeAt(t);
            return n
        }
    }
    class ie extends $t {
        constructor(t) {
            super(), this.data = "data:" + (t || "") + ";base64,", this.pending = []
        }
        async writeUint8Array(t) {
            super.writeUint8Array(t);
            let e = 0,
                n = this.pending;
            const i = this.pending.length;
            for (this.pending = "", e = 0; e < 3 * Math.floor((i + t.length) / 3) - i; e++) n += String.fromCharCode(t[e]);
            for (; e < t.length; e++) this.pending += String.fromCharCode(t[e]);
            n.length > 2 ? this.data += btoa(n) : this.pending = n
        }
        getData() {
            return this.data + btoa(this.pending)
        }
    }
    class re extends Jt {
        constructor(t) {
            super(), this.blob = t, this.size = t.size
        }
        async readUint8Array(t, e) {
            if (this.blob.arrayBuffer) return new Uint8Array(await this.blob.slice(t, t + e).arrayBuffer()); {
                const n = new FileReader;
                return new Promise(((i, r) => {
                    n.onload = t => i(new Uint8Array(t.target.result)), n.onerror = () => r(n.error), n.readAsArrayBuffer(this.blob.slice(t, t + e))
                }))
            }
        }
    }
    class ae extends $t {
        constructor(t) {
            super(), this.contentType = t, this.arrayBuffers = []
        }
        async writeUint8Array(t) {
            super.writeUint8Array(t), this.arrayBuffers.push(t.buffer)
        }
        getData() {
            return this.blob || (this.blob = new Blob(this.arrayBuffers, {
                type: this.contentType
            })), this.blob
        }
    }
    class se extends Jt {
        constructor(t, e) {
            super(), this.url = t, this.preventHeadRequest = e.preventHeadRequest, this.useRangeHeader = e.useRangeHeader, this.forceRangeRequests = e.forceRangeRequests, this.options = Object.assign({}, e), delete this.options.preventHeadRequest, delete this.options.useRangeHeader, delete this.options.forceRangeRequests, delete this.options.useXHR
        }
        async init() {
            super.init(), await le(this, _e, ue)
        }
        async readUint8Array(t, e) {
            return de(this, t, e, _e, ue)
        }
    }
    class oe extends Jt {
        constructor(t, e) {
            super(), this.url = t, this.preventHeadRequest = e.preventHeadRequest, this.useRangeHeader = e.useRangeHeader, this.forceRangeRequests = e.forceRangeRequests, this.options = e
        }
        async init() {
            super.init(), await le(this, xe, pe)
        }
        async readUint8Array(t, e) {
            return de(this, t, e, xe, pe)
        }
    }
    async function le(t, e, n) {
        if (function(t) {
                if ("undefined" != typeof document) {
                    const e = document.createElement("a");
                    return e.href = t, "http:" == e.protocol || "https:" == e.protocol
                }
                return /^https?:\/\//i.test(t)
            }(t.url) && (t.useRangeHeader || t.forceRangeRequests)) {
            const i = await e(Xt, t, ce(t));
            if (!t.forceRangeRequests && i.headers.get("Accept-Ranges") != Qt) throw new Error(Kt); {
                let r;
                const a = i.headers.get("Content-Range");
                if (a) {
                    const t = a.trim().split(/\s*\/\s*/);
                    if (t.length) {
                        const e = t[1];
                        e && "*" != e && (r = Number(e))
                    }
                }
                void 0 === r ? await me(t, e, n) : t.size = r
            }
        } else await me(t, e, n)
    }
    async function de(t, e, n, i, r) {
        if (t.useRangeHeader || t.forceRangeRequests) {
            const r = await i(Xt, t, ce(t, e, n));
            if (206 != r.status) throw new Error(Kt);
            return new Uint8Array(await r.arrayBuffer())
        }
        return t.data || await r(t, t.options), new Uint8Array(t.data.subarray(e, e + n))
    }

    function ce(t, e = 0, n = 1) {
        return Object.assign({}, fe(t), {
            Range: "bytes=" + e + "-" + (e + n - 1)
        })
    }

    function fe(t) {
        let e = t.options.headers;
        if (e) return Symbol.iterator in e ? Object.fromEntries(e) : e
    }
    async function ue(t) {
        await he(t, _e)
    }
    async function pe(t) {
        await he(t, xe)
    }
    async function he(t, e) {
        const n = await e(Xt, t, fe(t));
        t.data = new Uint8Array(await n.arrayBuffer()), t.size || (t.size = t.data.length)
    }
    async function me(t, e, n) {
        if (t.preventHeadRequest) await n(t, t.options);
        else {
            const i = (await e("HEAD", t, fe(t))).headers.get("Content-Length");
            i ? t.size = Number(i) : await n(t, t.options)
        }
    }
    async function _e(t, {
        options: e,
        url: n
    }, i) {
        const r = await fetch(n, Object.assign({}, e, {
            method: t,
            headers: i
        }));
        if (r.status < 400) return r;
        throw new Error(Zt + (r.statusText || r.status))
    }

    function xe(t, {
        url: e
    }, n) {
        return new Promise(((i, r) => {
            const a = new XMLHttpRequest;
            if (a.addEventListener("load", (() => {
                    if (a.status < 400) {
                        const t = [];
                        a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((e => {
                            const n = e.trim().split(/\s*:\s*/);
                            n[0] = n[0].trim().replace(/^[a-z]|-[a-z]/g, (t => t.toUpperCase())), t.push(n)
                        })), i({
                            status: a.status,
                            arrayBuffer: () => a.response,
                            headers: new Map(t)
                        })
                    } else r(new Error(Zt + (a.statusText || a.status)))
                }), !1), a.addEventListener("error", (t => r(t.detail.error)), !1), a.open(t, e), n)
                for (const t of Object.entries(n)) a.setRequestHeader(t[0], t[1]);
            a.responseType = "arraybuffer", a.send()
        }))
    }
    class we extends Jt {
        constructor(t, e = {}) {
            super(), this.url = t, e.useXHR ? this.reader = new oe(t, e) : this.reader = new se(t, e)
        }
        set size(t) {}
        get size() {
            return this.reader.size
        }
        async init() {
            super.init(), await this.reader.init()
        }
        async readUint8Array(t, e) {
            return this.reader.readUint8Array(t, e)
        }
    }
    class ge extends Jt {
        constructor(t) {
            super(), this.array = t, this.size = t.length
        }
        async readUint8Array(t, e) {
            return this.array.slice(t, t + e)
        }
    }
    class be extends $t {
        constructor() {
            super(), this.array = new Uint8Array(0)
        }
        async writeUint8Array(t) {
            super.writeUint8Array(t);
            const e = this.array;
            this.array = new Uint8Array(e.length + t.length), this.array.set(e), this.array.set(t, e.length)
        }
        getData() {
            return this.array
        }
    }
    const ve = 4294967295,
        ye = 65535,
        ke = 67324752,
        ze = 134695760,
        Ae = 33639248,
        Ue = 101010256,
        Ee = 101075792,
        Se = 117853008,
        De = 39169,
        Re = 21589,
        Ie = 2048,
        Be = "/",
        je = new Date(2107, 11, 31),
        Te = new Date(1980, 0, 1),
        Ce = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split("");
    async function Fe(t, e) {
        if (e && "cp437" == e.trim().toLowerCase()) return (t => {
            let e = "";
            for (let n = 0; n < t.length; n++) e += Ce[t[n]];
            return e
        })(t);
        if ("undefined" == typeof TextDecoder) {
            const e = new FileReader;
            return new Promise(((n, i) => {
                e.onload = t => n(t.target.result), e.onerror = () => i(e.error), e.readAsText(new Blob([t]))
            }))
        }
        return new TextDecoder(e).decode(t)
    }
    const Me = "Abort error";
    async function We(t, e, n, i, r, a, s) {
        const o = Math.max(a.chunkSize, 64);
        return async function a(l = 0, d = 0) {
            const c = s.signal;
            if (l < r) {
                Oe(c, t);
                const f = await e.readUint8Array(l + i, Math.min(o, r - l)),
                    u = f.length;
                Oe(c, t);
                const p = await t.append(f);
                if (Oe(c, t), d += await He(n, p), s.onprogress) try {
                    s.onprogress(l + u, r)
                } catch (t) {}
                return a(l + o, d)
            } {
                const e = await t.flush();
                return d += await He(n, e.data), {
                    signature: e.signature,
                    length: d
                }
            }
        }()
    }

    function Oe(t, e) {
        if (t && t.aborted) throw e.flush(), new Error(Me)
    }
    async function He(t, e) {
        return e.length && await t.writeUint8Array(e), e.length
    }
    const qe = ["filename", "rawFilename", "directory", "encrypted", "compressedSize", "uncompressedSize", "lastModDate", "rawLastModDate", "comment", "rawComment", "signature", "extraField", "rawExtraField", "bitFlag", "extraFieldZip64", "extraFieldUnicodePath", "extraFieldUnicodeComment", "extraFieldAES", "filenameUTF8", "commentUTF8", "offset", "zip64", "compressionMethod", "extraFieldNTFS", "lastAccessDate", "creationDate", "extraFieldExtendedTimestamp", "version", "versionMadeBy", "msDosCompatible", "internalFileAttribute", "externalFileAttribute"];
    class Ne {
        constructor(t) {
            qe.forEach((e => this[e] = t[e]))
        }
    }
    const Le = "File format is not recognized",
        Pe = "End of central directory not found",
        Ve = "End of Zip64 central directory not found",
        Ze = "End of Zip64 central directory locator not found",
        Ke = "Central directory header not found",
        Ge = "Local file header not found",
        Xe = "Zip64 extra field not found",
        Qe = "File contains encrypted entry",
        Ye = "Encryption method not supported",
        Je = "Compression method not supported",
        $e = "utf-8",
        tn = "cp437",
        en = ["uncompressedSize", "compressedSize", "offset"];
    class nn {
        constructor(t, e = {}) {
            Object.assign(this, {
                reader: t,
                options: e,
                config: q()
            })
        }
        async getEntries(t = {}) {
            const e = this,
                n = e.reader;
            if (n.initialized || await n.init(), n.size < 22) throw new Error(Le);
            const i = await async function(t, e, n, i, r) {
                const a = new Uint8Array(4);
                ! function(t, e, n) {
                    t.setUint32(e, n, !0)
                }(mn(a), 0, e);
                const s = i + r;
                return await o(i) || await o(Math.min(s, n));
                async function o(e) {
                    const r = n - e,
                        s = await _n(t, r, e);
                    for (let t = s.length - i; t >= 0; t--)
                        if (s[t] == a[0] && s[t + 1] == a[1] && s[t + 2] == a[2] && s[t + 3] == a[3]) return {
                            offset: r + t,
                            buffer: s.slice(t, t + i).buffer
                        }
                }
            }(n, Ue, n.size, 22, 1048560);
            if (!i) throw new Error(Pe);
            const r = mn(i);
            let a = pn(r, 12),
                s = pn(r, 16),
                o = un(r, 8),
                l = 0;
            if (s == ve || a == ve || o == ye) {
                const t = mn(await _n(n, i.offset - 20, 20));
                if (pn(t, 0) != Se) throw new Error(Ve);
                s = hn(t, 8);
                let e = await _n(n, s, 56),
                    r = mn(e);
                const d = i.offset - 20 - 56;
                if (pn(r, 0) != Ee && s != d) {
                    const t = s;
                    s = d, l = s - t, e = await _n(n, s, 56), r = mn(e)
                }
                if (pn(r, 0) != Ee) throw new Error(Ze);
                o = hn(r, 32), a = hn(r, 40), s -= a
            }
            if (s < 0 || s >= n.size) throw new Error(Le);
            let d = 0,
                c = await _n(n, s, a),
                f = mn(c);
            const u = i.offset - a;
            if (pn(f, d) != Ae && s != u) {
                const t = s;
                s = u, l = s - t, c = await _n(n, s, a), f = mn(c)
            }
            if (s < 0 || s >= n.size) throw new Error(Le);
            const p = [];
            for (let i = 0; i < o; i++) {
                const r = new rn(n, e.config, e.options);
                if (pn(f, d) != Ae) throw new Error(Ke);
                an(r, f, d + 6);
                const a = Boolean(r.bitFlag.languageEncodingFlag),
                    s = d + 46,
                    u = s + r.filenameLength,
                    h = u + r.extraFieldLength,
                    m = un(f, d + 4),
                    _ = 0 == (0 & m);
                Object.assign(r, {
                    versionMadeBy: m,
                    msDosCompatible: _,
                    compressedSize: 0,
                    uncompressedSize: 0,
                    commentLength: un(f, d + 32),
                    directory: _ && 16 == (16 & fn(f, d + 38)),
                    offset: pn(f, d + 42) + l,
                    internalFileAttribute: pn(f, d + 34),
                    externalFileAttribute: pn(f, d + 38),
                    rawFilename: c.subarray(s, u),
                    filenameUTF8: a,
                    commentUTF8: a,
                    rawExtraField: c.subarray(u, h)
                });
                const x = h + r.commentLength;
                r.rawComment = c.subarray(h, x);
                const w = ln(e, t, "filenameEncoding"),
                    g = ln(e, t, "commentEncoding"),
                    [b, v] = await Promise.all([Fe(r.rawFilename, r.filenameUTF8 ? $e : w || tn), Fe(r.rawComment, r.commentUTF8 ? $e : g || tn)]);
                r.filename = b, r.comment = v, !r.directory && r.filename.endsWith(Be) && (r.directory = !0), await sn(r, r, f, d + 6);
                const y = new Ne(r);
                if (y.getData = (t, e) => r.getData(t, y, e), p.push(y), d = x, t.onprogress) try {
                    t.onprogress(i + 1, o, new Ne(r))
                } catch (t) {}
            }
            return p
        }
        async close() {}
    }
    class rn {
        constructor(t, e, n) {
            Object.assign(this, {
                reader: t,
                config: e,
                options: n
            })
        }
        async getData(t, e, n = {}) {
            const i = this,
                {
                    reader: r,
                    offset: a,
                    extraFieldAES: s,
                    compressionMethod: o,
                    config: l,
                    bitFlag: d,
                    signature: c,
                    rawLastModDate: f,
                    compressedSize: u
                } = i,
                p = i.localDirectory = {};
            r.initialized || await r.init();
            let h = await _n(r, a, 30);
            const m = mn(h);
            let _ = ln(i, n, "password");
            if (_ = _ && _.length && _, s && 99 != s.originalCompressionMethod) throw new Error(Je);
            if (0 != o && 8 != o) throw new Error(Je);
            if (pn(m, 0) != ke) throw new Error(Ge);
            an(p, m, 4), h = await _n(r, a, 30 + p.filenameLength + p.extraFieldLength), p.rawExtraField = h.subarray(30 + p.filenameLength), await sn(i, p, m, 4), e.lastAccessDate = p.lastAccessDate, e.creationDate = p.creationDate;
            const x = i.encrypted && p.encrypted,
                w = x && !s;
            if (x) {
                if (!w && void 0 === s.strength) throw new Error(Ye);
                if (!_) throw new Error(Qe)
            }
            const g = await Lt(l.Inflate, {
                codecType: It,
                password: _,
                zipCrypto: w,
                encryptionStrength: s && s.strength,
                signed: ln(i, n, "checkSignature"),
                passwordVerification: w && (d.dataDescriptor ? f >>> 8 & 255 : c >>> 24 & 255),
                signature: c,
                compressed: 0 != o,
                encrypted: x,
                useWebWorkers: ln(i, n, "useWebWorkers")
            }, l);
            t.initialized || await t.init();
            const b = ln(i, n, "signal"),
                v = a + 30 + p.filenameLength + p.extraFieldLength;
            return await We(g, r, t, v, u, l, {
                onprogress: n.onprogress,
                signal: b
            }), t.getData()
        }
    }

    function an(t, e, n) {
        const i = t.rawBitFlag = un(e, n + 2),
            r = 1 == (1 & i),
            a = pn(e, n + 6);
        Object.assign(t, {
            encrypted: r,
            version: un(e, n),
            bitFlag: {
                level: (6 & i) >> 1,
                dataDescriptor: 8 == (8 & i),
                languageEncodingFlag: (i & Ie) == Ie
            },
            rawLastModDate: a,
            lastModDate: dn(a),
            filenameLength: un(e, n + 22),
            extraFieldLength: un(e, n + 24)
        })
    }
    async function sn(t, e, n, i) {
        const r = e.rawExtraField,
            a = e.extraField = new Map,
            s = mn(new Uint8Array(r));
        let o = 0;
        try {
            for (; o < r.length;) {
                const t = un(s, o),
                    e = un(s, o + 2);
                a.set(t, {
                    type: t,
                    data: r.slice(o + 4, o + 4 + e)
                }), o += 4 + e
            }
        } catch (t) {}
        const l = un(n, i + 4);
        e.signature = pn(n, i + 10), e.uncompressedSize = pn(n, i + 18), e.compressedSize = pn(n, i + 14);
        const d = a.get(1);
        d && (! function(t, e) {
            e.zip64 = !0;
            const n = mn(t.data);
            t.values = [];
            for (let e = 0; e < Math.floor(t.data.length / 8); e++) t.values.push(hn(n, 0 + 8 * e));
            const i = en.filter((t => e[t] == ve));
            for (let e = 0; e < i.length; e++) t[i[e]] = t.values[e];
            en.forEach((n => {
                if (e[n] == ve) {
                    if (void 0 === t[n]) throw new Error(Xe);
                    e[n] = t[n]
                }
            }))
        }(d, e), e.extraFieldZip64 = d);
        const c = a.get(28789);
        c && (await on(c, "filename", "rawFilename", e, t), e.extraFieldUnicodePath = c);
        const f = a.get(25461);
        f && (await on(f, "comment", "rawComment", e, t), e.extraFieldUnicodeComment = f);
        const u = a.get(39169);
        u ? (! function(t, e, n) {
            const i = mn(t.data);
            t.vendorVersion = fn(i, 0), t.vendorId = fn(i, 2);
            const r = fn(i, 4);
            t.strength = r, t.originalCompressionMethod = n, e.compressionMethod = t.compressionMethod = un(i, 5)
        }(u, e, l), e.extraFieldAES = u) : e.compressionMethod = l;
        const p = a.get(10);
        p && (! function(t, e) {
            const n = mn(t.data);
            let i, r = 4;
            try {
                for (; r < t.data.length && !i;) {
                    const e = un(n, r),
                        a = un(n, r + 2);
                    1 == e && (i = t.data.slice(r + 4, r + 4 + a)), r += 4 + a
                }
            } catch (t) {}
            try {
                if (i && 24 == i.length) {
                    const n = mn(i),
                        r = n.getBigUint64(0, !0),
                        a = n.getBigUint64(8, !0),
                        s = n.getBigUint64(16, !0);
                    Object.assign(t, {
                        rawLastModDate: r,
                        rawLastAccessDate: a,
                        rawCreationDate: s
                    });
                    const o = cn(r),
                        l = cn(a),
                        d = {
                            lastModDate: o,
                            lastAccessDate: l,
                            creationDate: cn(s)
                        };
                    Object.assign(t, d), Object.assign(e, d)
                }
            } catch (t) {}
        }(p, e), e.extraFieldNTFS = p);
        const h = a.get(Re);
        h && (! function(t, e) {
            const n = mn(t.data),
                i = fn(n, 0),
                r = [],
                a = [];
            1 == (1 & i) && (r.push("lastModDate"), a.push("rawLastModDate"));
            2 == (2 & i) && (r.push("lastAccessDate"), a.push("rawLastAccessDate"));
            4 == (4 & i) && (r.push("creationDate"), a.push("rawCreationDate"));
            let s = 1;
            r.forEach(((i, r) => {
                if (t.data.length >= s + 4) {
                    const o = pn(n, s);
                    e[i] = t[i] = new Date(1e3 * o);
                    const l = a[r];
                    t[l] = o
                }
                s += 4
            }))
        }(h, e), e.extraFieldExtendedTimestamp = h)
    }
    async function on(t, e, n, i, r) {
        const a = mn(t.data);
        t.version = fn(a, 0), t.signature = pn(a, 1);
        const s = new Z;
        s.append(r[n]);
        const o = mn(new Uint8Array(4));
        o.setUint32(0, s.get(), !0), t[e] = await Fe(t.data.subarray(5)), t.valid = !r.bitFlag.languageEncodingFlag && t.signature == pn(o, 0), t.valid && (i[e] = t[e], i[e + "UTF8"] = !0)
    }

    function ln(t, e, n) {
        return void 0 === e[n] ? t.options[n] : e[n]
    }

    function dn(t) {
        const e = (4294901760 & t) >> 16,
            n = 65535 & t;
        try {
            return new Date(1980 + ((65024 & e) >> 9), ((480 & e) >> 5) - 1, 31 & e, (63488 & n) >> 11, (2016 & n) >> 5, 2 * (31 & n), 0)
        } catch (t) {}
    }

    function cn(t) {
        return new Date(Number(t / BigInt(1e4) - BigInt(116444736e5)))
    }

    function fn(t, e) {
        return t.getUint8(e)
    }

    function un(t, e) {
        return t.getUint16(e, !0)
    }

    function pn(t, e) {
        return t.getUint32(e, !0)
    }

    function hn(t, e) {
        return Number(t.getBigUint64(e, !0))
    }

    function mn(t) {
        return new DataView(t.buffer)
    }

    function _n(t, e, n) {
        return t.readUint8Array(e, n)
    }
    const xn = "File already exists",
        wn = "Zip file comment exceeds 64KB",
        gn = "File entry comment exceeds 64KB",
        bn = "File entry name exceeds 64KB",
        vn = "Version exceeds 65535",
        yn = "The strength must equal 1, 2, or 3",
        kn = "Extra field type exceeds 65535",
        zn = "Extra field data exceeds 64KB",
        An = "Zip64 is not supported",
        Un = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
    let En = 0;
    class Sn {
        constructor(t, e = {}) {
            Object.assign(this, {
                writer: t,
                options: e,
                config: q(),
                files: new Map,
                offset: t.size,
                pendingCompressedSize: 0,
                pendingEntries: []
            })
        }
        async add(t = "", e, n = {}) {
            const i = this;
            if (!(En < i.config.maxWorkers)) return new Promise(((r, a) => i.pendingEntries.push({
                name: t,
                reader: e,
                options: n,
                resolve: r,
                reject: a
            })));
            En++;
            try {
                return await async function(t, e, n, i) {
                    e = e.trim(), i.directory && !e.endsWith(Be) ? e += Be : i.directory = e.endsWith(Be);
                    if (t.files.has(e)) throw new Error(xn);
                    const r = K(e);
                    if (r.length > ye) throw new Error(bn);
                    const a = i.comment || "",
                        s = K(a);
                    if (s.length > ye) throw new Error(gn);
                    const o = t.options.version || i.version || 0;
                    if (o > ye) throw new Error(vn);
                    const l = t.options.versionMadeBy || i.versionMadeBy || 20;
                    if (l > ye) throw new Error(vn);
                    const d = In(t, i, "lastModDate") || new Date,
                        c = In(t, i, "lastAccessDate"),
                        f = In(t, i, "creationDate"),
                        u = In(t, i, "password"),
                        p = In(t, i, "encryptionStrength") || 3,
                        h = In(t, i, "zipCrypto");
                    if (void 0 !== u && void 0 !== p && (p < 1 || p > 3)) throw new Error(yn);
                    let m = new Uint8Array(0);
                    const _ = i.extraField;
                    if (_) {
                        let t = 0,
                            e = 0;
                        _.forEach((e => t += 4 + e.length)), m = new Uint8Array(t), _.forEach(((t, n) => {
                            if (n > ye) throw new Error(kn);
                            if (t.length > ye) throw new Error(zn);
                            Fn(m, new Uint16Array([n]), e), Fn(m, new Uint16Array([t.length]), e + 2), Fn(m, t, e + 4), e += 4 + t.length
                        }))
                    }
                    let x = In(t, i, "extendedTimestamp");
                    void 0 === x && (x = !0);
                    let w = 0,
                        g = In(t, i, "keepOrder");
                    void 0 === g && (g = !0);
                    let b = 0,
                        v = In(t, i, "msDosCompatible");
                    void 0 === v && (v = !0);
                    const y = In(t, i, "internalFileAttribute") || 0,
                        k = In(t, i, "externalFileAttribute") || 0;
                    n && (n.initialized || await n.init(), b = n.size, w = function(t) {
                        return t + 5 * (Math.floor(t / 16383) + 1)
                    }(b));
                    let z = i.zip64 || t.options.zip64 || !1;
                    if (t.offset + t.pendingCompressedSize >= ve || b >= ve || w >= ve) {
                        if (!1 === i.zip64 || !1 === t.options.zip64 || !g) throw new Error(An);
                        z = !0
                    }
                    t.pendingCompressedSize += w, await Promise.resolve();
                    const A = In(t, i, "level"),
                        U = In(t, i, "useWebWorkers"),
                        E = In(t, i, "bufferedWrite");
                    let S = In(t, i, "dataDescriptor"),
                        D = In(t, i, "dataDescriptorSignature");
                    const R = In(t, i, "signal");
                    void 0 === S && (S = !0);
                    S && void 0 === D && (D = !0);
                    const I = await async function(t, e, n, i) {
                        const r = t.files,
                            a = t.writer,
                            s = Array.from(r.values()).pop();
                        let o, l, d, c = {};
                        r.set(e, c);
                        try {
                            let f, u, p;
                            if (i.keepOrder && (f = s && s.lock), c.lock = p = new Promise((t => d = t)), i.bufferedWrite || t.lockWrite || !i.dataDescriptor ? (u = new ae, u.init(), o = !0) : (t.lockWrite = new Promise((t => l = t)), a.initialized || await a.init(), u = a), c = await async function(t, e, n, i) {
                                    const {
                                        rawFilename: r,
                                        lastAccessDate: a,
                                        creationDate: s,
                                        password: o,
                                        level: l,
                                        zip64: d,
                                        zipCrypto: c,
                                        dataDescriptor: f,
                                        dataDescriptorSignature: u,
                                        directory: p,
                                        version: h,
                                        versionMadeBy: m,
                                        rawComment: _,
                                        rawExtraField: x,
                                        useWebWorkers: w,
                                        onprogress: g,
                                        signal: b,
                                        encryptionStrength: v,
                                        extendedTimestamp: y,
                                        msDosCompatible: k,
                                        internalFileAttribute: z,
                                        externalFileAttribute: A
                                    } = i, U = Boolean(o && o.length), E = 0 !== l && !p;
                                    let S, D, R;
                                    if (U && !c) {
                                        S = new Uint8Array(Un.length + 2);
                                        const t = Mn(S);
                                        jn(t, 0, De), Fn(S, Un, 2), Bn(t, 8, v)
                                    } else S = new Uint8Array(0);
                                    if (y) {
                                        R = new Uint8Array(9 + (a ? 4 : 0) + (s ? 4 : 0));
                                        const t = Mn(R);
                                        jn(t, 0, Re), jn(t, 2, R.length - 4);
                                        Bn(t, 4, 1 + (a ? 2 : 0) + (s ? 4 : 0)), Tn(t, 5, Math.floor(i.lastModDate.getTime() / 1e3)), a && Tn(t, 9, Math.floor(a.getTime() / 1e3)), s && Tn(t, 13, Math.floor(s.getTime() / 1e3));
                                        try {
                                            D = new Uint8Array(36);
                                            const t = Mn(D),
                                                e = Rn(i.lastModDate);
                                            jn(t, 0, 10), jn(t, 2, 32), jn(t, 8, 1), jn(t, 10, 24), Cn(t, 12, e), Cn(t, 20, Rn(a) || e), Cn(t, 28, Rn(s) || e)
                                        } catch (t) {
                                            D = new Uint8Array(0)
                                        }
                                    } else D = R = new Uint8Array(0);
                                    const I = {
                                        version: h || 20,
                                        versionMadeBy: m,
                                        zip64: d,
                                        directory: Boolean(p),
                                        filenameUTF8: !0,
                                        rawFilename: r,
                                        commentUTF8: !0,
                                        rawComment: _,
                                        rawExtraFieldZip64: d ? new Uint8Array(28) : new Uint8Array(0),
                                        rawExtraFieldExtendedTimestamp: R,
                                        rawExtraFieldNTFS: D,
                                        rawExtraFieldAES: S,
                                        rawExtraField: x,
                                        extendedTimestamp: y,
                                        msDosCompatible: k,
                                        internalFileAttribute: z,
                                        externalFileAttribute: A
                                    };
                                    let B = I.uncompressedSize = 0,
                                        j = Ie;
                                    f && (j |= 8);
                                    let T = 0;
                                    E && (T = 8);
                                    d && (I.version = I.version > 45 ? I.version : 45);
                                    U && (j |= 1, c || (I.version = I.version > 51 ? I.version : 51, T = 99, E && (I.rawExtraFieldAES[9] = 8)));
                                    I.compressionMethod = T;
                                    const C = I.headerArray = new Uint8Array(26),
                                        F = Mn(C);
                                    jn(F, 0, I.version), jn(F, 2, j), jn(F, 4, T);
                                    const M = new Uint32Array(1),
                                        W = Mn(M);
                                    let O;
                                    O = i.lastModDate < Te ? Te : i.lastModDate > je ? je : i.lastModDate;
                                    jn(W, 0, (O.getHours() << 6 | O.getMinutes()) << 5 | O.getSeconds() / 2), jn(W, 2, (O.getFullYear() - 1980 << 4 | O.getMonth() + 1) << 5 | O.getDate());
                                    const H = M[0];
                                    Tn(F, 6, H), jn(F, 22, r.length);
                                    const q = S.length + R.length + D.length + I.rawExtraField.length;
                                    jn(F, 24, q);
                                    const N = new Uint8Array(30 + r.length + q);
                                    let L;
                                    Tn(Mn(N), 0, ke), Fn(N, C, 4), Fn(N, r, 30), Fn(N, S, 30 + r.length), Fn(N, R, 30 + r.length + S.length), Fn(N, D, 30 + r.length + S.length + R.length), Fn(N, I.rawExtraField, 30 + r.length + S.length + R.length + D.length);
                                    let P = 0;
                                    if (t) {
                                        B = I.uncompressedSize = t.size;
                                        const i = await Lt(n.Deflate, {
                                            codecType: Rt,
                                            level: l,
                                            password: o,
                                            encryptionStrength: v,
                                            zipCrypto: U && c,
                                            passwordVerification: U && c && H >> 8 & 255,
                                            signed: !0,
                                            compressed: E,
                                            encrypted: U,
                                            useWebWorkers: w
                                        }, n);
                                        await e.writeUint8Array(N), I.dataWritten = !0, L = await We(i, t, e, 0, B, n, {
                                            onprogress: g,
                                            signal: b
                                        }), P = L.length
                                    } else await e.writeUint8Array(N), I.dataWritten = !0;
                                    let V, Z = new Uint8Array(0),
                                        K = 0;
                                    f && (Z = new Uint8Array(d ? u ? 24 : 20 : u ? 16 : 12), V = Mn(Z), u && (K = 4, Tn(V, 0, ze)));
                                    if (t) {
                                        const t = L.signature;
                                        if (U && !c || void 0 === t || (Tn(F, 10, t), I.signature = t, f && Tn(V, K, t)), d) {
                                            const t = Mn(I.rawExtraFieldZip64);
                                            jn(t, 0, 1), jn(t, 2, 24), Tn(F, 14, ve), Cn(t, 12, BigInt(P)), Tn(F, 18, ve), Cn(t, 4, BigInt(B)), f && (Cn(V, K + 4, BigInt(P)), Cn(V, K + 12, BigInt(B)))
                                        } else Tn(F, 14, P), Tn(F, 18, B), f && (Tn(V, K + 4, P), Tn(V, K + 8, B))
                                    }
                                    f && await e.writeUint8Array(Z);
                                    const G = N.length + P + Z.length;
                                    return Object.assign(I, {
                                        compressedSize: P,
                                        lastModDate: O,
                                        rawLastModDate: H,
                                        creationDate: s,
                                        lastAccessDate: a,
                                        encrypted: U,
                                        length: G
                                    }), I
                                }(n, u, t.config, i), c.lock = p, r.set(e, c), c.filename = e, o) {
                                let e = 0;
                                const n = u.getData();
                                let s;
                                await Promise.all([t.lockWrite, f]);
                                do {
                                    s = Array.from(r.values()).find((t => t.writingBufferedData)), s && await s.lock
                                } while (s && s.lock);
                                if (c.writingBufferedData = !0, !i.dataDescriptor) {
                                    const t = 26,
                                        r = await Dn(n, 0, t),
                                        s = new DataView(r);
                                    c.encrypted && !i.zipCrypto || Tn(s, 14, c.signature), c.zip64 ? (Tn(s, 18, ve), Tn(s, 22, ve)) : (Tn(s, 18, c.compressedSize), Tn(s, 22, c.uncompressedSize)), await a.writeUint8Array(new Uint8Array(r)), e = t
                                }
                                await async function(t, e, n = 0) {
                                    const i = 536870912;
                                    async function r() {
                                        if (n < e.size) {
                                            const a = await Dn(e, n, n + i);
                                            await t.writeUint8Array(new Uint8Array(a)), n += i, await r()
                                        }
                                    }
                                    await r()
                                }(a, n, e), delete c.writingBufferedData
                            }
                            if (c.offset = t.offset, c.zip64) {
                                Cn(Mn(c.rawExtraFieldZip64), 20, BigInt(c.offset))
                            } else if (c.offset >= ve) throw new Error(An);
                            return t.offset += c.length, c
                        } catch (n) {
                            throw (o && c.writingBufferedData || !o && c.dataWritten) && (n.corruptedEntry = t.hasCorruptedEntries = !0, c.uncompressedSize && (t.offset += c.uncompressedSize)), r.delete(e), n
                        } finally {
                            d(), l && l()
                        }
                    }(t, e, n, Object.assign({}, i, {
                        rawFilename: r,
                        rawComment: s,
                        version: o,
                        versionMadeBy: l,
                        lastModDate: d,
                        lastAccessDate: c,
                        creationDate: f,
                        rawExtraField: m,
                        zip64: z,
                        password: u,
                        level: A,
                        useWebWorkers: U,
                        encryptionStrength: p,
                        extendedTimestamp: x,
                        zipCrypto: h,
                        bufferedWrite: E,
                        keepOrder: g,
                        dataDescriptor: S,
                        dataDescriptorSignature: D,
                        signal: R,
                        msDosCompatible: v,
                        internalFileAttribute: y,
                        externalFileAttribute: k
                    }));
                    w && (t.pendingCompressedSize -= w);
                    return Object.assign(I, {
                        name: e,
                        comment: a,
                        extraField: _
                    }), new Ne(I)
                }(i, t, e, n)
            } finally {
                En--;
                const t = i.pendingEntries.shift();
                t && i.add(t.name, t.reader, t.options).then(t.resolve).catch(t.reject)
            }
        }
        async close(t = new Uint8Array(0), e = {}) {
            return await async function(t, e, n) {
                const i = t.writer,
                    r = t.files;
                let a = 0,
                    s = 0,
                    o = t.offset,
                    l = r.size;
                for (const [, t] of r) s += 46 + t.rawFilename.length + t.rawComment.length + t.rawExtraFieldZip64.length + t.rawExtraFieldAES.length + t.rawExtraFieldExtendedTimestamp.length + t.rawExtraFieldNTFS.length + t.rawExtraField.length;
                let d = n.zip64 || t.options.zip64 || !1;
                if (o >= ve || s >= ve || l >= ye) {
                    if (!1 === n.zip64 || !1 === t.options.zip64) throw new Error(An);
                    d = !0
                }
                const c = new Uint8Array(s + (d ? 98 : 22)),
                    f = Mn(c);
                if (e && e.length) {
                    if (!(e.length <= ye)) throw new Error(wn);
                    jn(f, a + 20, e.length)
                }
                for (const [t, e] of Array.from(r.values()).entries()) {
                    const {
                        rawFilename: i,
                        rawExtraFieldZip64: s,
                        rawExtraFieldAES: o,
                        rawExtraField: l,
                        rawComment: d,
                        versionMadeBy: u,
                        headerArray: p,
                        directory: h,
                        zip64: m,
                        msDosCompatible: _,
                        internalFileAttribute: x,
                        externalFileAttribute: w
                    } = e;
                    let g, b;
                    if (e.extendedTimestamp) {
                        b = e.rawExtraFieldNTFS, g = new Uint8Array(9);
                        const t = Mn(g);
                        jn(t, 0, Re), jn(t, 2, g.length - 4), Bn(t, 4, 1), Tn(t, 5, Math.floor(e.lastModDate.getTime() / 1e3))
                    } else b = g = new Uint8Array(0);
                    const v = s.length + o.length + g.length + b.length + l.length;
                    if (Tn(f, a, Ae), jn(f, a + 4, u), Fn(c, p, a + 6), jn(f, a + 30, v), jn(f, a + 32, d.length), Tn(f, a + 34, x), w ? Tn(f, a + 38, w) : h && _ && Bn(f, a + 38, 16), Tn(f, a + 42, m ? ve : e.offset), Fn(c, i, a + 46), Fn(c, s, a + 46 + i.length), Fn(c, o, a + 46 + i.length + s.length), Fn(c, g, a + 46 + i.length + s.length + o.length), Fn(c, b, a + 46 + i.length + s.length + o.length + g.length), Fn(c, l, a + 46 + i.length + s.length + o.length + g.length + b.length), Fn(c, d, a + 46 + i.length + v), a += 46 + i.length + v + d.length, n.onprogress) try {
                        n.onprogress(t + 1, r.size, new Ne(e))
                    } catch (t) {}
                }
                d && (Tn(f, a, Ee), Cn(f, a + 4, BigInt(44)), jn(f, a + 12, 45), jn(f, a + 14, 45), Cn(f, a + 24, BigInt(l)), Cn(f, a + 32, BigInt(l)), Cn(f, a + 40, BigInt(s)), Cn(f, a + 48, BigInt(o)), Tn(f, a + 56, Se), Cn(f, a + 64, BigInt(o) + BigInt(s)), Tn(f, a + 72, 1), l = ye, o = ve, s = ve, a += 76);
                Tn(f, a, Ue), jn(f, a + 8, l), jn(f, a + 10, l), Tn(f, a + 12, s), Tn(f, a + 16, o), await i.writeUint8Array(c), e && e.length && await i.writeUint8Array(e)
            }(this, t, e), this.writer.getData()
        }
    }

    function Dn(t, e, n) {
        if (t.arrayBuffer) return e || n ? t.slice(e, n).arrayBuffer() : t.arrayBuffer(); {
            const i = new FileReader;
            return new Promise(((r, a) => {
                i.onload = t => r(t.target.result), i.onerror = () => a(i.error), i.readAsArrayBuffer(e || n ? t.slice(e, n) : t)
            }))
        }
    }

    function Rn(t) {
        if (t) return (BigInt(t.getTime()) + BigInt(116444736e5)) * BigInt(1e4)
    }

    function In(t, e, n) {
        return void 0 === e[n] ? t.options[n] : e[n]
    }

    function Bn(t, e, n) {
        t.setUint8(e, n)
    }

    function jn(t, e, n) {
        t.setUint16(e, n, !0)
    }

    function Tn(t, e, n) {
        t.setUint32(e, n, !0)
    }

    function Cn(t, e, n) {
        t.setBigUint64(e, n, !0)
    }

    function Fn(t, e, n) {
        t.set(e, n)
    }

    function Mn(t) {
        return new DataView(t.buffer)
    }
    const Wn = 524288;
    class On {
        constructor(t, e, n, i) {
            const r = this;
            if (t.root && i && i.getChildByName(e)) throw new Error("Entry filename already exists");
            n || (n = {}), Object.assign(r, {
                fs: t,
                name: e,
                data: n.data,
                id: t.entries.length,
                parent: i,
                children: [],
                uncompressedSize: 0
            }), t.entries.push(r), i && r.parent.children.push(r)
        }
        moveTo(t) {
            this.fs.move(this, t)
        }
        getFullname() {
            return this.getRelativeName()
        }
        getRelativeName(t = this.fs.root) {
            let e = this.name,
                n = this.parent;
            for (; n && n != t;) e = (n.name ? n.name + "/" : "") + e, n = n.parent;
            return e
        }
        isDescendantOf(t) {
            let e = this.parent;
            for (; e && e.id != t.id;) e = e.parent;
            return Boolean(e)
        }
    }
    class Hn extends On {
        constructor(t, e, n, i) {
            super(t, e, n, i);
            const r = this;
            r.Reader = n.Reader, r.Writer = n.Writer, n.getData && (r.getData = n.getData)
        }
        async getData(t, e = {}) {
            const n = this;
            return !t || t.constructor == n.Writer && n.data ? n.data : (n.reader = new n.Reader(n.data, e), await n.reader.init(), t.initialized || await t.init(), n.uncompressedSize = n.reader.size, async function(t, e) {
                return n();
                async function n(i = 0) {
                    const r = i * Wn;
                    if (r < t.size) {
                        const a = await t.readUint8Array(r, Math.min(Wn, t.size - r));
                        return await e.writeUint8Array(a), n(i + 1)
                    }
                    return e.getData()
                }
            }(n.reader, t))
        }
        getText(t, e) {
            return this.getData(new ee(t), e)
        }
        getBlob(t, e) {
            return this.getData(new ae(t), e)
        }
        getData64URI(t, e) {
            return this.getData(new ie(t), e)
        }
        getUint8Array(t) {
            return this.getData(new be, t)
        }
        replaceBlob(t) {
            Object.assign(this, {
                data: t,
                Reader: re,
                Writer: ae,
                reader: null
            })
        }
        replaceText(t) {
            Object.assign(this, {
                data: t,
                Reader: te,
                Writer: ee,
                reader: null
            })
        }
        replaceData64URI(t) {
            Object.assign(this, {
                data: t,
                Reader: ne,
                Writer: ie,
                reader: null
            })
        }
        replaceUint8Array(t) {
            Object.assign(this, {
                data: t,
                Reader: ge,
                Writer: be,
                reader: null
            })
        }
    }
    class qn extends On {
        constructor(t, e, n, i) {
            super(t, e, n, i), this.directory = !0
        }
        addDirectory(t) {
            return Kn(this, t, null, !0)
        }
        addText(t, e) {
            return Kn(this, t, {
                data: e,
                Reader: te,
                Writer: ee
            })
        }
        addBlob(t, e) {
            return Kn(this, t, {
                data: e,
                Reader: re,
                Writer: ae
            })
        }
        addData64URI(t, e) {
            return Kn(this, t, {
                data: e,
                Reader: ne,
                Writer: ie
            })
        }
        addUint8Array(t, e) {
            return Kn(this, t, {
                data: e,
                Reader: ge,
                Writer: be
            })
        }
        addHttpContent(t, e, n = {}) {
            return Kn(this, t, {
                data: e,
                Reader: class extends we {
                    constructor(t) {
                        super(t, n)
                    }
                }
            })
        }
        async addFileSystemEntry(t) {
            return async function(t, e) {
                if (e.isDirectory) {
                    const i = t.addDirectory(e.name);
                    return await n(i, e), i
                }
                return new Promise(((n, i) => e.file((i => n(t.addBlob(e.name, i))), i)));
                async function n(t, e) {
                    const r = await i(e);
                    for (const e of r) e.isDirectory ? await n(t.addDirectory(e.name), e) : await new Promise(((n, i) => {
                        e.file((i => {
                            const r = t.addBlob(e.name, i);
                            r.uncompressedSize = i.size, n(r)
                        }), i)
                    }))
                }

                function i(t) {
                    return new Promise(((e, n) => {
                        let i = [];

                        function r(t) {
                            t.readEntries((n => {
                                n.length ? (i = i.concat(n), r(t)) : e(i)
                            }), n)
                        }
                        t.isDirectory && r(t.createReader()), t.isFile && e(i)
                    }))
                }
            }(this, t)
        }
        async addData(t, e) {
            return Kn(this, t, e)
        }
        async importBlob(t, e = {}) {
            await this.importZip(new re(t), e)
        }
        async importData64URI(t, e = {}) {
            await this.importZip(new ne(t), e)
        }
        async importUint8Array(t, e = {}) {
            await this.importZip(new ge(t), e)
        }
        async importHttpContent(t, e = {}) {
            await this.importZip(new we(t, e), e)
        }
        async exportBlob(t = {}) {
            return this.exportZip(new ae("application/zip"), t)
        }
        async exportData64URI(t = {}) {
            return this.exportZip(new ie("application/zip"), t)
        }
        async exportUint8Array(t = {}) {
            return this.exportZip(new be, t)
        }
        async importZip(t, e) {
            t.initialized || await t.init();
            const n = new nn(t, e);
            (await n.getEntries()).forEach((t => {
                let n = this;
                const i = t.filename.split("/"),
                    r = i.pop();
                i.forEach((t => n = n.getChildByName(t) || new qn(this.fs, t, null, n))), t.directory || Kn(n, r, {
                    data: t,
                    Reader: Ln(Object.assign({}, e))
                })
            }))
        }
        async exportZip(t, e) {
            const n = this;
            await Pn(n), await t.init();
            const i = new Sn(t, e);
            return await async function(t, e, n, i) {
                const r = e,
                    a = new Map;
                async function s(t, e) {
                    async function o() {
                        if (i.bufferedWrite) await Promise.all(e.children.map(l));
                        else
                            for (const t of e.children) await l(t)
                    }
                    async function l(e) {
                        const o = i.relativePath ? e.getRelativeName(r) : e.getFullname();
                        await t.add(o, e.reader, Object.assign({
                            directory: e.directory
                        }, Object.assign({}, i, {
                            onprogress: t => {
                                if (i.onprogress) {
                                    a.set(o, t);
                                    try {
                                        i.onprogress(Array.from(a.values()).reduce(((t, e) => t + e)), n)
                                    } catch (t) {}
                                }
                            }
                        }))), await s(t, e)
                    }
                    await o()
                }
                await s(t, e)
            }(i, n, function(t, e) {
                let n = 0;
                return t.forEach(i), n;

                function i(t) {
                    n += t[e], t.children && t.children.forEach(i)
                }
            }([n], "uncompressedSize"), e), await i.close(), t.getData()
        }
        getChildByName(t) {
            const e = this.children;
            for (let n = 0; n < e.length; n++) {
                const i = e[n];
                if (i.name == t) return i
            }
        }
    }
    const Nn = {
        FS: class {
            constructor() {
                Zn(this)
            }
            get children() {
                return this.root.children
            }
            remove(t) {
                Vn(t), this.entries[t.id] = null
            }
            move(t, e) {
                if (t == this.root) throw new Error("Root directory cannot be moved");
                if (!e.directory) throw new Error("Target entry is not a directory");
                if (e.isDescendantOf(t)) throw new Error("Entry is a ancestor of target entry");
                if (t != e) {
                    if (e.getChildByName(t.name)) throw new Error("Entry filename already exists");
                    Vn(t), t.parent = e, e.children.push(t)
                }
            }
            find(t) {
                const e = t.split("/");
                let n = this.root;
                for (let t = 0; n && t < e.length; t++) n = n.getChildByName(e[t]);
                return n
            }
            getById(t) {
                return this.entries[t]
            }
            getChildByName(t) {
                return this.root.getChildByName(t)
            }
            addDirectory(t) {
                return this.root.addDirectory(t)
            }
            addText(t, e) {
                return this.root.addText(t, e)
            }
            addBlob(t, e) {
                return this.root.addBlob(t, e)
            }
            addData64URI(t, e) {
                return this.root.addData64URI(t, e)
            }
            addHttpContent(t, e, n) {
                return this.root.addHttpContent(t, e, n)
            }
            async addFileSystemEntry(t) {
                return this.root.addFileSystemEntry(t)
            }
            async addData(t, e) {
                return this.root.addData(t, e)
            }
            async importBlob(t, e) {
                Zn(this), await this.root.importBlob(t, e)
            }
            async importData64URI(t, e) {
                Zn(this), await this.root.importData64URI(t, e)
            }
            async importHttpContent(t, e) {
                Zn(this), await this.root.importHttpContent(t, e)
            }
            async exportBlob(t) {
                return this.root.exportBlob(t)
            }
            async exportData64URI(t) {
                return this.root.exportData64URI(t)
            }
        },
        ZipDirectoryEntry: qn,
        ZipFileEntry: Hn
    };

    function Ln(t) {
        return class extends Jt {
            constructor(t, e = {}) {
                super(), this.entry = t, this.options = e
            }
            async init() {
                const e = this;
                e.size = e.entry.uncompressedSize;
                const n = await e.entry.getData(new ae, Object.assign({}, e.options, t));
                e.data = n, e.blobReader = new re(n)
            }
            async readUint8Array(t, e) {
                return this.blobReader.readUint8Array(t, e)
            }
        }
    }
    async function Pn(t) {
        if (t.children.length)
            for (const e of t.children) e.directory ? await Pn(e) : (e.reader = new e.Reader(e.data), await e.reader.init(), e.uncompressedSize = e.reader.size)
    }

    function Vn(t) {
        const e = t.parent.children;
        e.forEach(((n, i) => {
            n.id == t.id && e.splice(i, 1)
        }))
    }

    function Zn(t) {
        t.entries = [], t.root = new qn(t)
    }

    function Kn(t, e, n, i) {
        if (t.directory) return i ? new qn(t.fs, e, n, t) : new Hn(t.fs, e, n, t);
        throw new Error("Parent entry is not a directory")
    }(t => {
        if ("function" == typeof URL.createObjectURL) {
            const e = '\n\t\t\t\n\nconst t=[];for(let e=0;e<256;e++){let n=e;for(let t=0;t<8;t++)1&n?n=n>>>1^3988292384:n>>>=1;t[e]=n;}class e{constructor(t){this.crc=t||-1;}append(e){let n=0|this.crc;for(let i=0,a=0|e.length;i<a;i++)n=n>>>8^t[255&(n^e[i])];this.crc=n;}get(){return ~this.crc}}const n={concat(t,e){if(0===t.length||0===e.length)return t.concat(e);const i=t[t.length-1],a=n.getPartial(i);return 32===a?t.concat(e):n._shiftRight(e,a,0|i,t.slice(0,t.length-1))},bitLength(t){const e=t.length;if(0===e)return 0;const i=t[e-1];return 32*(e-1)+n.getPartial(i)},clamp(t,e){if(32*t.length<e)return t;const i=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,i>0&&e&&(t[i-1]=n.partial(e,t[i-1]&2147483648>>e-1,1)),t},partial:(t,e,n)=>32===t?e:(n?0|e:e<<32-t)+1099511627776*t,getPartial:t=>Math.round(t/1099511627776)||32,_shiftRight(t,e,i,a){for(void 0===a&&(a=[]);e>=32;e-=32)a.push(i),i=0;if(0===e)return a.concat(t);for(let n=0;n<t.length;n++)a.push(i|t[n]>>>e),i=t[n]<<32-e;const r=t.length?t[t.length-1]:0,s=n.getPartial(r);return a.push(n.partial(e+s&31,e+s>32?i:a.pop(),1)),a}},i={bytes:{fromBits(t){const e=n.bitLength(t)/8,i=new Uint8Array(e);let a;for(let n=0;n<e;n++)0==(3&n)&&(a=t[n/4]),i[n]=a>>>24,a<<=8;return i},toBits(t){const e=[];let i,a=0;for(i=0;i<t.length;i++)a=a<<8|t[i],3==(3&i)&&(e.push(a),a=0);return 3&i&&e.push(n.partial(8*(3&i),a)),e}}},a={sha1:function(t){t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset();}};a.sha1.prototype={blockSize:512,reset:function(){const t=this;return t._h=this._init.slice(0),t._buffer=[],t._length=0,t},update:function(t){const e=this;"string"==typeof t&&(t=i.utf8String.toBits(t));const a=e._buffer=n.concat(e._buffer,t),r=e._length,s=e._length=r+n.bitLength(t);if(s>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const o=new Uint32Array(a);let l=0;for(let t=e.blockSize+r-(e.blockSize+r&e.blockSize-1);t<=s;t+=e.blockSize)e._block(o.subarray(16*l,16*(l+1))),l+=1;return a.splice(0,16*l),e},finalize:function(){const t=this;let e=t._buffer;const i=t._h;e=n.concat(e,[n.partial(1,1)]);for(let t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(t._length/4294967296)),e.push(0|t._length);e.length;)t._block(e.splice(0,16));return t.reset(),i},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(t,e,n,i){return t<=19?e&n|~e&i:t<=39?e^n^i:t<=59?e&n|e&i|n&i:t<=79?e^n^i:void 0},_S:function(t,e){return e<<t|e>>>32-t},_block:function(t){const e=this,n=e._h,i=Array(80);for(let e=0;e<16;e++)i[e]=t[e];let a=n[0],r=n[1],s=n[2],o=n[3],l=n[4];for(let t=0;t<=79;t++){t>=16&&(i[t]=e._S(1,i[t-3]^i[t-8]^i[t-14]^i[t-16]));const n=e._S(5,a)+e._f(t,r,s,o)+l+i[t]+e._key[Math.floor(t/20)]|0;l=o,o=s,s=e._S(30,r),r=a,a=n;}n[0]=n[0]+a|0,n[1]=n[1]+r|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+l|0;}};const r={aes:class{constructor(t){const e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();const n=e._tables[0][4],i=e._tables[1],a=t.length;let r,s,o,l=1;if(4!==a&&6!==a&&8!==a)throw new Error("invalid aes key size");for(e._key=[s=t.slice(0),o=[]],r=a;r<4*a+28;r++){let t=s[r-1];(r%a==0||8===a&&r%a==4)&&(t=n[t>>>24]<<24^n[t>>16&255]<<16^n[t>>8&255]<<8^n[255&t],r%a==0&&(t=t<<8^t>>>24^l<<24,l=l<<1^283*(l>>7))),s[r]=s[r-a]^t;}for(let t=0;r;t++,r--){const e=s[3&t?r:r-4];o[t]=r<=4||t<4?e:i[0][n[e>>>24]]^i[1][n[e>>16&255]]^i[2][n[e>>8&255]]^i[3][n[255&e]];}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){const t=this._tables[0],e=this._tables[1],n=t[4],i=e[4],a=[],r=[];let s,o,l,_;for(let t=0;t<256;t++)r[(a[t]=t<<1^283*(t>>7))^t]=t;for(let d=s=0;!n[d];d^=o||1,s=r[s]||1){let r=s^s<<1^s<<2^s<<3^s<<4;r=r>>8^255&r^99,n[d]=r,i[r]=d,_=a[l=a[o=a[d]]];let c=16843009*_^65537*l^257*o^16843008*d,f=257*a[r]^16843008*r;for(let n=0;n<4;n++)t[n][d]=f=f<<24^f>>>8,e[n][r]=c=c<<24^c>>>8;}for(let n=0;n<5;n++)t[n]=t[n].slice(0),e[n]=e[n].slice(0);}_crypt(t,e){if(4!==t.length)throw new Error("invalid aes block size");const n=this._key[e],i=n.length/4-2,a=[0,0,0,0],r=this._tables[e],s=r[0],o=r[1],l=r[2],_=r[3],d=r[4];let c,f,u,h=t[0]^n[0],b=t[e?3:1]^n[1],w=t[2]^n[2],p=t[e?1:3]^n[3],x=4;for(let t=0;t<i;t++)c=s[h>>>24]^o[b>>16&255]^l[w>>8&255]^_[255&p]^n[x],f=s[b>>>24]^o[w>>16&255]^l[p>>8&255]^_[255&h]^n[x+1],u=s[w>>>24]^o[p>>16&255]^l[h>>8&255]^_[255&b]^n[x+2],p=s[p>>>24]^o[h>>16&255]^l[b>>8&255]^_[255&w]^n[x+3],x+=4,h=c,b=f,w=u;for(let t=0;t<4;t++)a[e?3&-t:t]=d[h>>>24]<<24^d[b>>16&255]<<16^d[w>>8&255]<<8^d[255&p]^n[x++],c=h,h=b,b=w,w=p,p=c;return a}}},s={ctrGladman:class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e;}reset(){this._iv=this._initIv;}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if(255==(t>>24&255)){let e=t>>16&255,n=t>>8&255,i=255&t;255===e?(e=0,255===n?(n=0,255===i?i=0:++i):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=i;}else t+=1<<24;return t}incCounter(t){0===(t[0]=this.incWord(t[0]))&&(t[1]=this.incWord(t[1]));}calculate(t,e,i){let a;if(!(a=e.length))return [];const r=n.bitLength(e);for(let n=0;n<a;n+=4){this.incCounter(i);const a=t.encrypt(i);e[n]^=a[0],e[n+1]^=a[1],e[n+2]^=a[2],e[n+3]^=a[3];}return n.clamp(e,r)}}},o={hmacSha1:class{constructor(t){const e=this,n=e._hash=a.sha1,i=[[],[]],r=n.prototype.blockSize/32;e._baseHash=[new n,new n],t.length>r&&(t=n.hash(t));for(let e=0;e<r;e++)i[0][e]=909522486^t[e],i[1][e]=1549556828^t[e];e._baseHash[0].update(i[0]),e._baseHash[1].update(i[1]),e._resultHash=new n(e._baseHash[0]);}reset(){const t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1;}update(t){this._updated=!0,this._resultHash.update(t);}digest(){const t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}}},l={name:"PBKDF2"},_=Object.assign({hash:{name:"HMAC"}},l),d=Object.assign({iterations:1e3,hash:{name:"SHA-1"}},l),c=["deriveBits"],f=[8,12,16],u=[16,24,32],h=[0,0,0,0],b=i.bytes,w=r.aes,p=s.ctrGladman,x=o.hmacSha1;class g{constructor(t,e,n){Object.assign(this,{password:t,signed:e,strength:n-1,pendingInput:new Uint8Array(0)});}async append(t){const e=this;if(e.password){const n=A(t,0,f[e.strength]+2);await async function(t,e,n){await k(t,n,A(e,0,f[t.strength]));const i=A(e,f[t.strength]),a=t.keys.passwordVerification;if(a[0]!=i[0]||a[1]!=i[1])throw new Error("Invalid pasword")}(e,n,e.password),e.password=null,e.aesCtrGladman=new p(new w(e.keys.key),Array.from(h)),e.hmac=new x(e.keys.authentication),t=A(t,f[e.strength]+2);}return m(e,t,new Uint8Array(t.length-10-(t.length-10)%16),0,10,!0)}flush(){const t=this,e=t.pendingInput,n=A(e,0,e.length-10),i=A(e,e.length-10);let a=new Uint8Array(0);if(n.length){const e=b.toBits(n);t.hmac.update(e);const i=t.aesCtrGladman.update(e);a=b.fromBits(i);}let r=!0;if(t.signed){const e=A(b.fromBits(t.hmac.digest()),0,10);for(let t=0;t<10;t++)e[t]!=i[t]&&(r=!1);}return {valid:r,data:a}}}class y{constructor(t,e){Object.assign(this,{password:t,strength:e-1,pendingInput:new Uint8Array(0)});}async append(t){const e=this;let n=new Uint8Array(0);e.password&&(n=await async function(t,e){const n=crypto.getRandomValues(new Uint8Array(f[t.strength]));return await k(t,e,n),v(n,t.keys.passwordVerification)}(e,e.password),e.password=null,e.aesCtrGladman=new p(new w(e.keys.key),Array.from(h)),e.hmac=new x(e.keys.authentication));const i=new Uint8Array(n.length+t.length-t.length%16);return i.set(n,0),m(e,t,i,n.length,0)}flush(){const t=this;let e=new Uint8Array(0);if(t.pendingInput.length){const n=t.aesCtrGladman.update(b.toBits(t.pendingInput));t.hmac.update(n),e=b.fromBits(n);}const n=A(b.fromBits(t.hmac.digest()),0,10);return {data:v(e,n),signature:n}}}function m(t,e,n,i,a,r){const s=e.length-a;let o;for(t.pendingInput.length&&(e=v(t.pendingInput,e),n=function(t,e){if(e&&e>t.length){const n=t;(t=new Uint8Array(e)).set(n,0);}return t}(n,s-s%16)),o=0;o<=s-16;o+=16){const a=b.toBits(A(e,o,o+16));r&&t.hmac.update(a);const s=t.aesCtrGladman.update(a);r||t.hmac.update(s),n.set(b.fromBits(s),o+i);}return t.pendingInput=A(e,o),n}async function k(t,e,n){const i=function(t){if("undefined"==typeof TextEncoder){t=unescape(encodeURIComponent(t));const e=new Uint8Array(t.length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}return (new TextEncoder).encode(t)}(e),a=await crypto.subtle.importKey("raw",i,_,!1,c),r=await crypto.subtle.deriveBits(Object.assign({salt:n},d),a,8*(2*u[t.strength]+2)),s=new Uint8Array(r);t.keys={key:b.toBits(A(s,0,u[t.strength])),authentication:b.toBits(A(s,u[t.strength],2*u[t.strength])),passwordVerification:A(s,2*u[t.strength])};}function v(t,e){let n=t;return t.length+e.length&&(n=new Uint8Array(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function A(t,e,n){return t.subarray(e,n)}class U{constructor(t,e){Object.assign(this,{password:t,passwordVerification:e}),E(this,t);}append(t){const e=this;if(e.password){const n=z(e,t.subarray(0,12));if(e.password=null,n[11]!=e.passwordVerification)throw new Error("Invalid pasword");t=t.subarray(12);}return z(e,t)}flush(){return {valid:!0,data:new Uint8Array(0)}}}class S{constructor(t,e){Object.assign(this,{password:t,passwordVerification:e}),E(this,t);}append(t){const e=this;let n,i;if(e.password){e.password=null;const a=crypto.getRandomValues(new Uint8Array(12));a[11]=e.passwordVerification,n=new Uint8Array(t.length+a.length),n.set(I(e,a),0),i=12;}else n=new Uint8Array(t.length),i=0;return n.set(I(e,t),i),n}flush(){return {data:new Uint8Array(0)}}}function z(t,e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=M(t)^e[i],C(t,n[i]);return n}function I(t,e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=M(t)^e[i],C(t,e[i]);return n}function E(t,n){t.keys=[305419896,591751049,878082192],t.crcKey0=new e(t.keys[0]),t.crcKey2=new e(t.keys[2]);for(let e=0;e<n.length;e++)C(t,n.charCodeAt(e));}function C(t,e){t.crcKey0.append([e]),t.keys[0]=~t.crcKey0.get(),t.keys[1]=H(t.keys[1]+B(t.keys[0])),t.keys[1]=H(Math.imul(t.keys[1],134775813)+1),t.crcKey2.append([t.keys[1]>>>24]),t.keys[2]=~t.crcKey2.get();}function M(t){const e=2|t.keys[2];return B(Math.imul(e,1^e)>>>8)}function B(t){return 255&t}function H(t){return 4294967295&t}class V{constructor(t,{signature:n,password:i,signed:a,compressed:r,zipCrypto:s,passwordVerification:o,encryptionStrength:l},{chunkSize:_}){const d=Boolean(i);Object.assign(this,{signature:n,encrypted:d,signed:a,compressed:r,inflate:r&&new t({chunkSize:_}),crc32:a&&new e,zipCrypto:s,decrypt:d&&s?new U(i,o):new g(i,a,l)});}async append(t){const e=this;return e.encrypted&&t.length&&(t=await e.decrypt.append(t)),e.compressed&&t.length&&(t=await e.inflate.append(t)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.crc32.append(t),t}async flush(){const t=this;let e,n=new Uint8Array(0);if(t.encrypted){const e=t.decrypt.flush();if(!e.valid)throw new Error("Invalid signature");n=e.data;}if((!t.encrypted||t.zipCrypto)&&t.signed){const n=new DataView(new Uint8Array(4).buffer);if(e=t.crc32.get(),n.setUint32(0,e),t.signature!=n.getUint32(0,!1))throw new Error("Invalid signature")}return t.compressed&&(n=await t.inflate.append(n)||new Uint8Array(0),await t.inflate.flush()),{data:n,signature:e}}}class D{constructor(t,{encrypted:n,signed:i,compressed:a,level:r,zipCrypto:s,password:o,passwordVerification:l,encryptionStrength:_},{chunkSize:d}){Object.assign(this,{encrypted:n,signed:i,compressed:a,deflate:a&&new t({level:r||5,chunkSize:d}),crc32:i&&new e,zipCrypto:s,encrypt:n&&s?new S(o,l):new y(o,_)});}async append(t){const e=this;let n=t;return e.compressed&&t.length&&(n=await e.deflate.append(t)),e.encrypted&&n.length&&(n=await e.encrypt.append(n)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.crc32.append(t),n}async flush(){const t=this;let e,n=new Uint8Array(0);if(t.compressed&&(n=await t.deflate.flush()||new Uint8Array(0)),t.encrypted){n=await t.encrypt.append(n);const i=t.encrypt.flush();e=i.signature;const a=new Uint8Array(n.length+i.data.length);a.set(n,0),a.set(i.data,n.length),n=a;}return t.encrypted&&!t.zipCrypto||!t.signed||(e=t.crc32.get()),{data:n,signature:e}}}const j={init(t){t.scripts&&t.scripts.length&&importScripts.apply(void 0,t.scripts);const e=t.options;let n;self.initCodec&&self.initCodec(),e.codecType.startsWith("deflate")?n=self.Deflate:e.codecType.startsWith("inflate")&&(n=self.Inflate),O=function(t,e,n){return e.codecType.startsWith("deflate")?new D(t,e,n):e.codecType.startsWith("inflate")?new V(t,e,n):void 0}(n,e,t.config);},append:async t=>({data:await O.append(t.data)}),flush:()=>O.flush()};let O;addEventListener("message",(async t=>{const e=t.data,n=e.type,i=j[n];if(i)try{e.data&&(e.data=new Uint8Array(e.data));const t=await i(e)||{};if(t.type=n,t.data)try{t.data=t.data.buffer,postMessage(t,[t.data]);}catch(e){postMessage(t);}else postMessage(t);}catch(t){postMessage({type:n,error:{message:t.message,stack:t.stack}});}}));function P(t){return K(t.map((([t,e])=>new Array(t).fill(e,0,t))))}function K(t){return t.reduce(((t,e)=>t.concat(Array.isArray(e)?K(e):e)),[])}const G=[0,1,2,3].concat(...P([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function W(){const t=this;function e(t,e){let n=0;do{n|=1&t,t>>>=1,n<<=1;}while(--e>0);return n>>>1}t.build_tree=function(n){const i=t.dyn_tree,a=t.stat_desc.static_tree,r=t.stat_desc.elems;let s,o,l,_=-1;for(n.heap_len=0,n.heap_max=573,s=0;s<r;s++)0!==i[2*s]?(n.heap[++n.heap_len]=_=s,n.depth[s]=0):i[2*s+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=_<2?++_:0,i[2*l]=1,n.depth[l]=0,n.opt_len--,a&&(n.static_len-=a[2*l+1]);for(t.max_code=_,s=Math.floor(n.heap_len/2);s>=1;s--)n.pqdownheap(i,s);l=r;do{s=n.heap[1],n.heap[1]=n.heap[n.heap_len--],n.pqdownheap(i,1),o=n.heap[1],n.heap[--n.heap_max]=s,n.heap[--n.heap_max]=o,i[2*l]=i[2*s]+i[2*o],n.depth[l]=Math.max(n.depth[s],n.depth[o])+1,i[2*s+1]=i[2*o+1]=l,n.heap[1]=l++,n.pqdownheap(i,1);}while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],function(e){const n=t.dyn_tree,i=t.stat_desc.static_tree,a=t.stat_desc.extra_bits,r=t.stat_desc.extra_base,s=t.stat_desc.max_length;let o,l,_,d,c,f,u=0;for(d=0;d<=15;d++)e.bl_count[d]=0;for(n[2*e.heap[e.heap_max]+1]=0,o=e.heap_max+1;o<573;o++)l=e.heap[o],d=n[2*n[2*l+1]+1]+1,d>s&&(d=s,u++),n[2*l+1]=d,l>t.max_code||(e.bl_count[d]++,c=0,l>=r&&(c=a[l-r]),f=n[2*l],e.opt_len+=f*(d+c),i&&(e.static_len+=f*(i[2*l+1]+c)));if(0!==u){do{for(d=s-1;0===e.bl_count[d];)d--;e.bl_count[d]--,e.bl_count[d+1]+=2,e.bl_count[s]--,u-=2;}while(u>0);for(d=s;0!==d;d--)for(l=e.bl_count[d];0!==l;)_=e.heap[--o],_>t.max_code||(n[2*_+1]!=d&&(e.opt_len+=(d-n[2*_+1])*n[2*_],n[2*_+1]=d),l--);}}(n),function(t,n,i){const a=[];let r,s,o,l=0;for(r=1;r<=15;r++)a[r]=l=l+i[r-1]<<1;for(s=0;s<=n;s++)o=t[2*s+1],0!==o&&(t[2*s]=e(a[o]++,o));}(i,t.max_code,n.bl_count);};}function T(t,e,n,i,a){const r=this;r.static_tree=t,r.extra_bits=e,r.extra_base=n,r.elems=i,r.max_length=a;}W._length_code=[0,1,2,3,4,5,6,7].concat(...P([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),W.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],W.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],W.d_code=function(t){return t<256?G[t]:G[256+(t>>>7)]},W.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],W.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],T.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],T.static_l_desc=new T(T.static_ltree,W.extra_lbits,257,286,15),T.static_d_desc=new T(T.static_dtree,W.extra_dbits,0,30,15),T.static_bl_desc=new T(null,W.extra_blbits,0,19,7);function L(t,e,n,i,a){const r=this;r.good_length=t,r.max_lazy=e,r.nice_length=n,r.max_chain=i,r.func=a;}const R=[new L(0,0,0,0,0),new L(4,4,8,4,1),new L(4,5,16,8,1),new L(4,6,32,32,1),new L(4,4,16,16,2),new L(8,16,32,32,2),new L(8,16,128,128,2),new L(8,32,128,256,2),new L(32,128,258,1024,2),new L(32,258,258,4096,2)],q=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function F(t,e,n,i){const a=t[2*e],r=t[2*n];return a<r||a==r&&i[e]<=i[n]}function J(){const t=this;let e,n,i,a,r,s,o,l,_,d,c,f,u,h,b,w,p,x,g,y,m,k,v,A,U,S,z,I,E,C,M,B,H;const V=new W,D=new W,j=new W;let O,P,K,G,L,J,N,Q;function X(){let e;for(e=0;e<286;e++)M[2*e]=0;for(e=0;e<30;e++)B[2*e]=0;for(e=0;e<19;e++)H[2*e]=0;M[512]=1,t.opt_len=t.static_len=0,K=L=0;}function Y(t,e){let n,i=-1,a=t[1],r=0,s=7,o=4;0===a&&(s=138,o=3),t[2*(e+1)+1]=65535;for(let l=0;l<=e;l++)n=a,a=t[2*(l+1)+1],++r<s&&n==a||(r<o?H[2*n]+=r:0!==n?(n!=i&&H[2*n]++,H[32]++):r<=10?H[34]++:H[36]++,r=0,i=n,0===a?(s=138,o=3):n==a?(s=6,o=3):(s=7,o=4));}function Z(e){t.pending_buf[t.pending++]=e;}function $(t){Z(255&t),Z(t>>>8&255);}function tt(t,e){let n;const i=e;Q>16-i?(n=t,N|=n<<Q&65535,$(N),N=n>>>16-Q,Q+=i-16):(N|=t<<Q&65535,Q+=i);}function et(t,e){const n=2*t;tt(65535&e[n],65535&e[n+1]);}function nt(t,e){let n,i,a=-1,r=t[1],s=0,o=7,l=4;for(0===r&&(o=138,l=3),n=0;n<=e;n++)if(i=r,r=t[2*(n+1)+1],!(++s<o&&i==r)){if(s<l)do{et(i,H);}while(0!=--s);else 0!==i?(i!=a&&(et(i,H),s--),et(16,H),tt(s-3,2)):s<=10?(et(17,H),tt(s-3,3)):(et(18,H),tt(s-11,7));s=0,a=i,0===r?(o=138,l=3):i==r?(o=6,l=3):(o=7,l=4);}}function it(){16==Q?($(N),N=0,Q=0):Q>=8&&(Z(255&N),N>>>=8,Q-=8);}function at(e,n){let i,a,r;if(t.pending_buf[G+2*K]=e>>>8&255,t.pending_buf[G+2*K+1]=255&e,t.pending_buf[O+K]=255&n,K++,0===e?M[2*n]++:(L++,e--,M[2*(W._length_code[n]+256+1)]++,B[2*W.d_code(e)]++),0==(8191&K)&&z>2){for(i=8*K,a=m-p,r=0;r<30;r++)i+=B[2*r]*(5+W.extra_dbits[r]);if(i>>>=3,L<Math.floor(K/2)&&i<Math.floor(a/2))return !0}return K==P-1}function rt(e,n){let i,a,r,s,o=0;if(0!==K)do{i=t.pending_buf[G+2*o]<<8&65280|255&t.pending_buf[G+2*o+1],a=255&t.pending_buf[O+o],o++,0===i?et(a,e):(r=W._length_code[a],et(r+256+1,e),s=W.extra_lbits[r],0!==s&&(a-=W.base_length[r],tt(a,s)),i--,r=W.d_code(i),et(r,n),s=W.extra_dbits[r],0!==s&&(i-=W.base_dist[r],tt(i,s)));}while(o<K);et(256,e),J=e[513];}function st(){Q>8?$(N):Q>0&&Z(255&N),N=0,Q=0;}function ot(e,n,i){tt(0+(i?1:0),3),function(e,n,i){st(),J=8,i&&($(n),$(~n)),t.pending_buf.set(l.subarray(e,e+n),t.pending),t.pending+=n;}(e,n,!0);}function lt(e,n,i){let a,r,s=0;z>0?(V.build_tree(t),D.build_tree(t),s=function(){let e;for(Y(M,V.max_code),Y(B,D.max_code),j.build_tree(t),e=18;e>=3&&0===H[2*W.bl_order[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(),a=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=a&&(a=r)):a=r=n+5,n+4<=a&&-1!=e?ot(e,n,i):r==a?(tt(2+(i?1:0),3),rt(T.static_ltree,T.static_dtree)):(tt(4+(i?1:0),3),function(t,e,n){let i;for(tt(t-257,5),tt(e-1,5),tt(n-4,4),i=0;i<n;i++)tt(H[2*W.bl_order[i]+1],3);nt(M,t-1),nt(B,e-1);}(V.max_code+1,D.max_code+1,s+1),rt(M,B)),X(),i&&st();}function _t(t){lt(p>=0?p:-1,m-p,t),p=m,e.flush_pending();}function dt(){let t,n,i,a;do{if(a=_-v-m,0===a&&0===m&&0===v)a=r;else if(-1==a)a--;else if(m>=r+r-262){l.set(l.subarray(r,r+r),0),k-=r,m-=r,p-=r,t=u,i=t;do{n=65535&c[--i],c[i]=n>=r?n-r:0;}while(0!=--t);t=r,i=t;do{n=65535&d[--i],d[i]=n>=r?n-r:0;}while(0!=--t);a+=r;}if(0===e.avail_in)return;t=e.read_buf(l,m+v,a),v+=t,v>=3&&(f=255&l[m],f=(f<<w^255&l[m+1])&b);}while(v<262&&0!==e.avail_in)}function ct(t){let e,n,i=U,a=m,s=A;const _=m>r-262?m-(r-262):0;let c=C;const f=o,u=m+258;let h=l[a+s-1],b=l[a+s];A>=E&&(i>>=2),c>v&&(c=v);do{if(e=t,l[e+s]==b&&l[e+s-1]==h&&l[e]==l[a]&&l[++e]==l[a+1]){a+=2,e++;do{}while(l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&a<u);if(n=258-(u-a),a=u-258,n>s){if(k=t,s=n,n>=c)break;h=l[a+s-1],b=l[a+s];}}}while((t=65535&d[t&f])>_&&0!=--i);return s<=v?s:v}function ft(e){return e.total_in=e.total_out=0,e.msg=null,t.pending=0,t.pending_out=0,n=113,a=0,V.dyn_tree=M,V.stat_desc=T.static_l_desc,D.dyn_tree=B,D.stat_desc=T.static_d_desc,j.dyn_tree=H,j.stat_desc=T.static_bl_desc,N=0,Q=0,J=8,X(),function(){_=2*r,c[u-1]=0;for(let t=0;t<u-1;t++)c[t]=0;S=R[z].max_lazy,E=R[z].good_length,C=R[z].nice_length,U=R[z].max_chain,m=0,p=0,v=0,x=A=2,y=0,f=0;}(),0}t.depth=[],t.bl_count=[],t.heap=[],M=[],B=[],H=[],t.pqdownheap=function(e,n){const i=t.heap,a=i[n];let r=n<<1;for(;r<=t.heap_len&&(r<t.heap_len&&F(e,i[r+1],i[r],t.depth)&&r++,!F(e,a,i[r],t.depth));)i[n]=i[r],n=r,r<<=1;i[n]=a;},t.deflateInit=function(e,n,a,_,f,p){return _||(_=8),f||(f=8),p||(p=0),e.msg=null,-1==n&&(n=6),f<1||f>9||8!=_||a<9||a>15||n<0||n>9||p<0||p>2?-2:(e.dstate=t,s=a,r=1<<s,o=r-1,h=f+7,u=1<<h,b=u-1,w=Math.floor((h+3-1)/3),l=new Uint8Array(2*r),d=[],c=[],P=1<<f+6,t.pending_buf=new Uint8Array(4*P),i=4*P,G=Math.floor(P/2),O=3*P,z=n,I=p,ft(e))},t.deflateEnd=function(){return 42!=n&&113!=n&&666!=n?-2:(t.pending_buf=null,c=null,d=null,l=null,t.dstate=null,113==n?-3:0)},t.deflateParams=function(t,e,n){let i=0;return -1==e&&(e=6),e<0||e>9||n<0||n>2?-2:(R[z].func!=R[e].func&&0!==t.total_in&&(i=t.deflate(1)),z!=e&&(z=e,S=R[z].max_lazy,E=R[z].good_length,C=R[z].nice_length,U=R[z].max_chain),I=n,i)},t.deflateSetDictionary=function(t,e,i){let a,s=i,_=0;if(!e||42!=n)return -2;if(s<3)return 0;for(s>r-262&&(s=r-262,_=i-s),l.set(e.subarray(_,_+s),0),m=s,p=s,f=255&l[0],f=(f<<w^255&l[1])&b,a=0;a<=s-3;a++)f=(f<<w^255&l[a+2])&b,d[a&o]=c[f],c[f]=a;return 0},t.deflate=function(_,h){let U,E,C,M,B;if(h>4||h<0)return -2;if(!_.next_out||!_.next_in&&0!==_.avail_in||666==n&&4!=h)return _.msg=q[4],-2;if(0===_.avail_out)return _.msg=q[7],-5;var H;if(e=_,M=a,a=h,42==n&&(E=8+(s-8<<4)<<8,C=(z-1&255)>>1,C>3&&(C=3),E|=C<<6,0!==m&&(E|=32),E+=31-E%31,n=113,Z((H=E)>>8&255),Z(255&H)),0!==t.pending){if(e.flush_pending(),0===e.avail_out)return a=-1,0}else if(0===e.avail_in&&h<=M&&4!=h)return e.msg=q[7],-5;if(666==n&&0!==e.avail_in)return _.msg=q[7],-5;if(0!==e.avail_in||0!==v||0!=h&&666!=n){switch(B=-1,R[z].func){case 0:B=function(t){let n,a=65535;for(a>i-5&&(a=i-5);;){if(v<=1){if(dt(),0===v&&0==t)return 0;if(0===v)break}if(m+=v,v=0,n=p+a,(0===m||m>=n)&&(v=m-n,m=n,_t(!1),0===e.avail_out))return 0;if(m-p>=r-262&&(_t(!1),0===e.avail_out))return 0}return _t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);break;case 1:B=function(t){let n,i=0;for(;;){if(v<262){if(dt(),v<262&&0==t)return 0;if(0===v)break}if(v>=3&&(f=(f<<w^255&l[m+2])&b,i=65535&c[f],d[m&o]=c[f],c[f]=m),0!==i&&(m-i&65535)<=r-262&&2!=I&&(x=ct(i)),x>=3)if(n=at(m-k,x-3),v-=x,x<=S&&v>=3){x--;do{m++,f=(f<<w^255&l[m+2])&b,i=65535&c[f],d[m&o]=c[f],c[f]=m;}while(0!=--x);m++;}else m+=x,x=0,f=255&l[m],f=(f<<w^255&l[m+1])&b;else n=at(0,255&l[m]),v--,m++;if(n&&(_t(!1),0===e.avail_out))return 0}return _t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);break;case 2:B=function(t){let n,i,a=0;for(;;){if(v<262){if(dt(),v<262&&0==t)return 0;if(0===v)break}if(v>=3&&(f=(f<<w^255&l[m+2])&b,a=65535&c[f],d[m&o]=c[f],c[f]=m),A=x,g=k,x=2,0!==a&&A<S&&(m-a&65535)<=r-262&&(2!=I&&(x=ct(a)),x<=5&&(1==I||3==x&&m-k>4096)&&(x=2)),A>=3&&x<=A){i=m+v-3,n=at(m-1-g,A-3),v-=A-1,A-=2;do{++m<=i&&(f=(f<<w^255&l[m+2])&b,a=65535&c[f],d[m&o]=c[f],c[f]=m);}while(0!=--A);if(y=0,x=2,m++,n&&(_t(!1),0===e.avail_out))return 0}else if(0!==y){if(n=at(0,255&l[m-1]),n&&_t(!1),m++,v--,0===e.avail_out)return 0}else y=1,m++,v--;}return 0!==y&&(n=at(0,255&l[m-1]),y=0),_t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);}if(2!=B&&3!=B||(n=666),0==B||2==B)return 0===e.avail_out&&(a=-1),0;if(1==B){if(1==h)tt(2,3),et(256,T.static_ltree),it(),1+J+10-Q<9&&(tt(2,3),et(256,T.static_ltree),it()),J=7;else if(ot(0,0,!1),3==h)for(U=0;U<u;U++)c[U]=0;if(e.flush_pending(),0===e.avail_out)return a=-1,0}}return 4!=h?0:1};}function N(){const t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0;}function Q(t){const e=new N,n=(i=t&&t.chunkSize?t.chunkSize:65536)+5*(Math.floor(i/16383)+1);var i;const a=new Uint8Array(n);let r=t?t.level:-1;void 0===r&&(r=-1),e.deflateInit(r),e.next_out=a,this.append=function(t,i){let r,s,o=0,l=0,_=0;const d=[];if(t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=n,r=e.deflate(0),0!=r)throw new Error("deflating: "+e.msg);e.next_out_index&&(e.next_out_index==n?d.push(new Uint8Array(a)):d.push(a.slice(0,e.next_out_index))),_+=e.next_out_index,i&&e.next_in_index>0&&e.next_in_index!=o&&(i(e.next_in_index),o=e.next_in_index);}while(e.avail_in>0||0===e.avail_out);return d.length>1?(s=new Uint8Array(_),d.forEach((function(t){s.set(t,l),l+=t.length;}))):s=d[0]||new Uint8Array(0),s}},this.flush=function(){let t,i,r=0,s=0;const o=[];do{if(e.next_out_index=0,e.avail_out=n,t=e.deflate(4),1!=t&&0!=t)throw new Error("deflating: "+e.msg);n-e.avail_out>0&&o.push(a.slice(0,e.next_out_index)),s+=e.next_out_index;}while(e.avail_in>0||0===e.avail_out);return e.deflateEnd(),i=new Uint8Array(s),o.forEach((function(t){i.set(t,r),r+=t.length;})),i};}N.prototype={deflateInit:function(t,e){const n=this;return n.dstate=new J,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate:function(t){const e=this;return e.dstate?e.dstate.deflate(e,t):-2},deflateEnd:function(){const t=this;if(!t.dstate)return -2;const e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams:function(t,e){const n=this;return n.dstate?n.dstate.deflateParams(n,t,e):-2},deflateSetDictionary:function(t,e){const n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):-2},read_buf:function(t,e,n){const i=this;let a=i.avail_in;return a>n&&(a=n),0===a?0:(i.avail_in-=a,t.set(i.next_in.subarray(i.next_in_index,i.next_in_index+a),e),i.next_in_index+=a,i.total_in+=a,a)},flush_pending:function(){const t=this;let e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0));}};const X=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Y=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],Z=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],$=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],tt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],et=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],nt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function it(){let t,e,n,i,a,r;function s(t,e,s,o,l,_,d,c,f,u,h){let b,w,p,x,g,y,m,k,v,A,U,S,z,I,E;A=0,g=s;do{n[t[e+A]]++,A++,g--;}while(0!==g);if(n[0]==s)return d[0]=-1,c[0]=0,0;for(k=c[0],y=1;y<=15&&0===n[y];y++);for(m=y,k<y&&(k=y),g=15;0!==g&&0===n[g];g--);for(p=g,k>g&&(k=g),c[0]=k,I=1<<y;y<g;y++,I<<=1)if((I-=n[y])<0)return -3;if((I-=n[g])<0)return -3;for(n[g]+=I,r[1]=y=0,A=1,z=2;0!=--g;)r[z]=y+=n[A],z++,A++;g=0,A=0;do{0!==(y=t[e+A])&&(h[r[y]++]=g),A++;}while(++g<s);for(s=r[p],r[0]=g=0,A=0,x=-1,S=-k,a[0]=0,U=0,E=0;m<=p;m++)for(b=n[m];0!=b--;){for(;m>S+k;){if(x++,S+=k,E=p-S,E=E>k?k:E,(w=1<<(y=m-S))>b+1&&(w-=b+1,z=m,y<E))for(;++y<E&&!((w<<=1)<=n[++z]);)w-=n[z];if(E=1<<y,u[0]+E>1440)return -3;a[x]=U=u[0],u[0]+=E,0!==x?(r[x]=g,i[0]=y,i[1]=k,y=g>>>S-k,i[2]=U-a[x-1]-y,f.set(i,3*(a[x-1]+y))):d[0]=U;}for(i[1]=m-S,A>=s?i[0]=192:h[A]<o?(i[0]=h[A]<256?0:96,i[2]=h[A++]):(i[0]=_[h[A]-o]+16+64,i[2]=l[h[A++]-o]),w=1<<m-S,y=g>>>S;y<E;y+=w)f.set(i,3*(U+y));for(y=1<<m-1;0!=(g&y);y>>>=1)g^=y;for(g^=y,v=(1<<S)-1;(g&v)!=r[x];)x--,S-=k,v=(1<<S)-1;}return 0!==I&&1!=p?-5:0}function o(s){let o;for(t||(t=[],e=[],n=new Int32Array(16),i=[],a=new Int32Array(15),r=new Int32Array(16)),e.length<s&&(e=[]),o=0;o<s;o++)e[o]=0;for(o=0;o<16;o++)n[o]=0;for(o=0;o<3;o++)i[o]=0;a.set(n.subarray(0,15),0),r.set(n.subarray(0,16),0);}this.inflate_trees_bits=function(n,i,a,r,l){let _;return o(19),t[0]=0,_=s(n,0,19,19,null,null,a,i,r,t,e),-3==_?l.msg="oversubscribed dynamic bit lengths tree":-5!=_&&0!==i[0]||(l.msg="incomplete dynamic bit lengths tree",_=-3),_},this.inflate_trees_dynamic=function(n,i,a,r,l,_,d,c,f){let u;return o(288),t[0]=0,u=s(a,0,n,257,$,tt,_,r,c,t,e),0!=u||0===r[0]?(-3==u?f.msg="oversubscribed literal/length tree":-4!=u&&(f.msg="incomplete literal/length tree",u=-3),u):(o(288),u=s(a,n,i,0,et,nt,d,l,c,t,e),0!=u||0===l[0]&&n>257?(-3==u?f.msg="oversubscribed distance tree":-5==u?(f.msg="incomplete distance tree",u=-3):-4!=u&&(f.msg="empty distance tree with lengths",u=-3),u):0)};}it.inflate_trees_fixed=function(t,e,n,i){return t[0]=9,e[0]=5,n[0]=Y,i[0]=Z,0};function at(){const t=this;let e,n,i,a,r=0,s=0,o=0,l=0,_=0,d=0,c=0,f=0,u=0,h=0;function b(t,e,n,i,a,r,s,o){let l,_,d,c,f,u,h,b,w,p,x,g,y,m,k,v;h=o.next_in_index,b=o.avail_in,f=s.bitb,u=s.bitk,w=s.write,p=w<s.read?s.read-w-1:s.end-w,x=X[t],g=X[e];do{for(;u<20;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;if(l=f&x,_=n,d=i,v=3*(d+l),0!==(c=_[v]))for(;;){if(f>>=_[v+1],u-=_[v+1],0!=(16&c)){for(c&=15,y=_[v+2]+(f&X[c]),f>>=c,u-=c;u<15;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;for(l=f&g,_=a,d=r,v=3*(d+l),c=_[v];;){if(f>>=_[v+1],u-=_[v+1],0!=(16&c)){for(c&=15;u<c;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;if(m=_[v+2]+(f&X[c]),f>>=c,u-=c,p-=y,w>=m)k=w-m,w-k>0&&2>w-k?(s.window[w++]=s.window[k++],s.window[w++]=s.window[k++],y-=2):(s.window.set(s.window.subarray(k,k+2),w),w+=2,k+=2,y-=2);else {k=w-m;do{k+=s.end;}while(k<0);if(c=s.end-k,y>c){if(y-=c,w-k>0&&c>w-k)do{s.window[w++]=s.window[k++];}while(0!=--c);else s.window.set(s.window.subarray(k,k+c),w),w+=c,k+=c,c=0;k=0;}}if(w-k>0&&y>w-k)do{s.window[w++]=s.window[k++];}while(0!=--y);else s.window.set(s.window.subarray(k,k+y),w),w+=y,k+=y,y=0;break}if(0!=(64&c))return o.msg="invalid distance code",y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,-3;l+=_[v+2],l+=f&X[c],v=3*(d+l),c=_[v];}break}if(0!=(64&c))return 0!=(32&c)?(y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,1):(o.msg="invalid literal/length code",y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,-3);if(l+=_[v+2],l+=f&X[c],v=3*(d+l),0===(c=_[v])){f>>=_[v+1],u-=_[v+1],s.window[w++]=_[v+2],p--;break}}else f>>=_[v+1],u-=_[v+1],s.window[w++]=_[v+2],p--;}while(p>=258&&b>=10);return y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,0}t.init=function(t,r,s,o,l,_){e=0,c=t,f=r,i=s,u=o,a=l,h=_,n=null;},t.proc=function(t,w,p){let x,g,y,m,k,v,A,U=0,S=0,z=0;for(z=w.next_in_index,m=w.avail_in,U=t.bitb,S=t.bitk,k=t.write,v=k<t.read?t.read-k-1:t.end-k;;)switch(e){case 0:if(v>=258&&m>=10&&(t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,p=b(c,f,i,u,a,h,t,w),z=w.next_in_index,m=w.avail_in,U=t.bitb,S=t.bitk,k=t.write,v=k<t.read?t.read-k-1:t.end-k,0!=p)){e=1==p?7:9;break}o=c,n=i,s=u,e=1;case 1:for(x=o;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}if(g=3*(s+(U&X[x])),U>>>=n[g+1],S-=n[g+1],y=n[g],0===y){l=n[g+2],e=6;break}if(0!=(16&y)){_=15&y,r=n[g+2],e=2;break}if(0==(64&y)){o=y,s=g/3+n[g+2];break}if(0!=(32&y)){e=7;break}return e=9,w.msg="invalid literal/length code",p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 2:for(x=_;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}r+=U&X[x],U>>=x,S-=x,o=f,n=a,s=h,e=3;case 3:for(x=o;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}if(g=3*(s+(U&X[x])),U>>=n[g+1],S-=n[g+1],y=n[g],0!=(16&y)){_=15&y,d=n[g+2],e=4;break}if(0==(64&y)){o=y,s=g/3+n[g+2];break}return e=9,w.msg="invalid distance code",p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 4:for(x=_;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}d+=U&X[x],U>>=x,S-=x,e=5;case 5:for(A=k-d;A<0;)A+=t.end;for(;0!==r;){if(0===v&&(k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v&&(t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v)))return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);t.window[k++]=t.window[A++],v--,A==t.end&&(A=0),r--;}e=0;break;case 6:if(0===v&&(k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v&&(t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v)))return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,t.window[k++]=l,v--,e=0;break;case 7:if(S>7&&(S-=8,m++,z--),t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,t.read!=t.write)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);e=8;case 8:return p=1,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 9:return p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);default:return p=-2,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p)}},t.free=function(){};}const rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function st(t,e){const n=this;let i,a=0,r=0,s=0,o=0;const l=[0],_=[0],d=new at;let c=0,f=new Int32Array(4320);const u=new it;n.bitk=0,n.bitb=0,n.window=new Uint8Array(e),n.end=e,n.read=0,n.write=0,n.reset=function(t,e){e&&(e[0]=0),6==a&&d.free(t),a=0,n.bitk=0,n.bitb=0,n.read=n.write=0;},n.reset(t,null),n.inflate_flush=function(t,e){let i,a,r;return a=t.next_out_index,r=n.read,i=(r<=n.write?n.write:n.end)-r,i>t.avail_out&&(i=t.avail_out),0!==i&&-5==e&&(e=0),t.avail_out-=i,t.total_out+=i,t.next_out.set(n.window.subarray(r,r+i),a),a+=i,r+=i,r==n.end&&(r=0,n.write==n.end&&(n.write=0),i=n.write-r,i>t.avail_out&&(i=t.avail_out),0!==i&&-5==e&&(e=0),t.avail_out-=i,t.total_out+=i,t.next_out.set(n.window.subarray(r,r+i),a),a+=i,r+=i),t.next_out_index=a,n.read=r,e},n.proc=function(t,e){let h,b,w,p,x,g,y,m;for(p=t.next_in_index,x=t.avail_in,b=n.bitb,w=n.bitk,g=n.write,y=g<n.read?n.read-g-1:n.end-g;;){let k,v,A,U,S,z,I,E;switch(a){case 0:for(;w<3;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}switch(h=7&b,c=1&h,h>>>1){case 0:b>>>=3,w-=3,h=7&w,b>>>=h,w-=h,a=1;break;case 1:k=[],v=[],A=[[]],U=[[]],it.inflate_trees_fixed(k,v,A,U),d.init(k[0],v[0],A[0],0,U[0],0),b>>>=3,w-=3,a=6;break;case 2:b>>>=3,w-=3,a=3;break;case 3:return b>>>=3,w-=3,a=9,t.msg="invalid block type",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e)}break;case 1:for(;w<32;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if((~b>>>16&65535)!=(65535&b))return a=9,t.msg="invalid stored block lengths",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);r=65535&b,b=w=0,a=0!==r?2:0!==c?7:0;break;case 2:if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(0===y&&(g==n.end&&0!==n.read&&(g=0,y=g<n.read?n.read-g-1:n.end-g),0===y&&(n.write=g,e=n.inflate_flush(t,e),g=n.write,y=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,y=g<n.read?n.read-g-1:n.end-g),0===y)))return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(e=0,h=r,h>x&&(h=x),h>y&&(h=y),n.window.set(t.read_buf(p,h),g),p+=h,x-=h,g+=h,y-=h,0!=(r-=h))break;a=0!==c?7:0;break;case 3:for(;w<14;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(s=h=16383&b,(31&h)>29||(h>>5&31)>29)return a=9,t.msg="too many length or distance symbols",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(h=258+(31&h)+(h>>5&31),!i||i.length<h)i=[];else for(m=0;m<h;m++)i[m]=0;b>>>=14,w-=14,o=0,a=4;case 4:for(;o<4+(s>>>10);){for(;w<3;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}i[rt[o++]]=7&b,b>>>=3,w-=3;}for(;o<19;)i[rt[o++]]=0;if(l[0]=7,h=u.inflate_trees_bits(i,l,_,f,t),0!=h)return -3==(e=h)&&(i=null,a=9),n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);o=0,a=5;case 5:for(;h=s,!(o>=258+(31&h)+(h>>5&31));){let r,d;for(h=l[0];w<h;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(h=f[3*(_[0]+(b&X[h]))+1],d=f[3*(_[0]+(b&X[h]))+2],d<16)b>>>=h,w-=h,i[o++]=d;else {for(m=18==d?7:d-14,r=18==d?11:3;w<h+m;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(b>>>=h,w-=h,r+=b&X[m],b>>>=m,w-=m,m=o,h=s,m+r>258+(31&h)+(h>>5&31)||16==d&&m<1)return i=null,a=9,t.msg="invalid bit length repeat",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);d=16==d?i[m-1]:0;do{i[m++]=d;}while(0!=--r);o=m;}}if(_[0]=-1,S=[],z=[],I=[],E=[],S[0]=9,z[0]=6,h=s,h=u.inflate_trees_dynamic(257+(31&h),1+(h>>5&31),i,S,z,I,E,f,t),0!=h)return -3==h&&(i=null,a=9),e=h,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);d.init(S[0],z[0],f,I[0],f,E[0]),a=6;case 6:if(n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,1!=(e=d.proc(n,t,e)))return n.inflate_flush(t,e);if(e=0,d.free(t),p=t.next_in_index,x=t.avail_in,b=n.bitb,w=n.bitk,g=n.write,y=g<n.read?n.read-g-1:n.end-g,0===c){a=0;break}a=7;case 7:if(n.write=g,e=n.inflate_flush(t,e),g=n.write,y=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);a=8;case 8:return e=1,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);case 9:return e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);default:return e=-2,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e)}}},n.free=function(t){n.reset(t,null),n.window=null,f=null;},n.set_dictionary=function(t,e,i){n.window.set(t.subarray(e,e+i),0),n.read=n.write=i;},n.sync_point=function(){return 1==a?1:0};}const ot=[0,0,255,255];function lt(){const t=this;function e(t){return t&&t.istate?(t.total_in=t.total_out=0,t.msg=null,t.istate.mode=7,t.istate.blocks.reset(t,null),0):-2}t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0,t.inflateEnd=function(e){return t.blocks&&t.blocks.free(e),t.blocks=null,0},t.inflateInit=function(n,i){return n.msg=null,t.blocks=null,i<8||i>15?(t.inflateEnd(n),-2):(t.wbits=i,n.istate.blocks=new st(n,1<<i),e(n),0)},t.inflate=function(t,e){let n,i;if(!t||!t.istate||!t.next_in)return -2;const a=t.istate;for(e=4==e?-5:0,n=-5;;)switch(a.mode){case 0:if(0===t.avail_in)return n;if(n=e,t.avail_in--,t.total_in++,8!=(15&(a.method=t.read_byte(t.next_in_index++)))){a.mode=13,t.msg="unknown compression method",a.marker=5;break}if(8+(a.method>>4)>a.wbits){a.mode=13,t.msg="invalid window size",a.marker=5;break}a.mode=1;case 1:if(0===t.avail_in)return n;if(n=e,t.avail_in--,t.total_in++,i=255&t.read_byte(t.next_in_index++),((a.method<<8)+i)%31!=0){a.mode=13,t.msg="incorrect header check",a.marker=5;break}if(0==(32&i)){a.mode=7;break}a.mode=2;case 2:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need=(255&t.read_byte(t.next_in_index++))<<24&4278190080,a.mode=3;case 3:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need+=(255&t.read_byte(t.next_in_index++))<<16&16711680,a.mode=4;case 4:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need+=(255&t.read_byte(t.next_in_index++))<<8&65280,a.mode=5;case 5:return 0===t.avail_in?n:(n=e,t.avail_in--,t.total_in++,a.need+=255&t.read_byte(t.next_in_index++),a.mode=6,2);case 6:return a.mode=13,t.msg="need dictionary",a.marker=0,-2;case 7:if(n=a.blocks.proc(t,n),-3==n){a.mode=13,a.marker=0;break}if(0==n&&(n=e),1!=n)return n;n=e,a.blocks.reset(t,a.was),a.mode=12;case 12:return 1;case 13:return -3;default:return -2}},t.inflateSetDictionary=function(t,e,n){let i=0,a=n;if(!t||!t.istate||6!=t.istate.mode)return -2;const r=t.istate;return a>=1<<r.wbits&&(a=(1<<r.wbits)-1,i=n-a),r.blocks.set_dictionary(e,i,a),r.mode=7,0},t.inflateSync=function(t){let n,i,a,r,s;if(!t||!t.istate)return -2;const o=t.istate;if(13!=o.mode&&(o.mode=13,o.marker=0),0===(n=t.avail_in))return -5;for(i=t.next_in_index,a=o.marker;0!==n&&a<4;)t.read_byte(i)==ot[a]?a++:a=0!==t.read_byte(i)?0:4-a,i++,n--;return t.total_in+=i-t.next_in_index,t.next_in_index=i,t.avail_in=n,o.marker=a,4!=a?-3:(r=t.total_in,s=t.total_out,e(t),t.total_in=r,t.total_out=s,o.mode=7,0)},t.inflateSyncPoint=function(t){return t&&t.istate&&t.istate.blocks?t.istate.blocks.sync_point():-2};}function _t(){}function dt(t){const e=new _t,n=t&&t.chunkSize?Math.floor(2*t.chunkSize):131072,i=new Uint8Array(n);let a=!1;e.inflateInit(),e.next_out=i,this.append=function(t,r){const s=[];let o,l,_=0,d=0,c=0;if(0!==t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=n,0!==e.avail_in||a||(e.next_in_index=0,a=!0),o=e.inflate(0),a&&-5===o){if(0!==e.avail_in)throw new Error("inflating: bad input")}else if(0!==o&&1!==o)throw new Error("inflating: "+e.msg);if((a||1===o)&&e.avail_in===t.length)throw new Error("inflating: bad input");e.next_out_index&&(e.next_out_index===n?s.push(new Uint8Array(i)):s.push(i.slice(0,e.next_out_index))),c+=e.next_out_index,r&&e.next_in_index>0&&e.next_in_index!=_&&(r(e.next_in_index),_=e.next_in_index);}while(e.avail_in>0||0===e.avail_out);return s.length>1?(l=new Uint8Array(c),s.forEach((function(t){l.set(t,d),d+=t.length;}))):l=s[0]||new Uint8Array(0),l}},this.flush=function(){e.inflateEnd();};}_t.prototype={inflateInit:function(t){const e=this;return e.istate=new lt,t||(t=15),e.istate.inflateInit(e,t)},inflate:function(t){const e=this;return e.istate?e.istate.inflate(e,t):-2},inflateEnd:function(){const t=this;if(!t.istate)return -2;const e=t.istate.inflateEnd(t);return t.istate=null,e},inflateSync:function(){const t=this;return t.istate?t.istate.inflateSync(t):-2},inflateSetDictionary:function(t,e){const n=this;return n.istate?n.istate.inflateSetDictionary(n,t,e):-2},read_byte:function(t){return this.next_in[t]},read_buf:function(t,e){return this.next_in.subarray(t,t+e)}},self.initCodec=()=>{self.Deflate=Q,self.Inflate=dt;};\n\n\t\t',
                n = URL.createObjectURL(new Blob([e], {
                    type: "text/javascript"
                }));
            t({
                workerScripts: {
                    inflate: [n],
                    deflate: [n]
                }
            })
        }
    })(N), N({
        Deflate: function(t) {
            const e = new g,
                n = (i = t && t.chunkSize ? t.chunkSize : 65536) + 5 * (Math.floor(i / 16383) + 1);
            var i;
            const r = new Uint8Array(n);
            let a = t ? t.level : -1;
            void 0 === a && (a = -1), e.deflateInit(a), e.next_out = r, this.append = function(t, i) {
                let a, s, o = 0,
                    l = 0,
                    d = 0;
                const c = [];
                if (t.length) {
                    e.next_in_index = 0, e.next_in = t, e.avail_in = t.length;
                    do {
                        if (e.next_out_index = 0, e.avail_out = n, a = e.deflate(0), 0 != a) throw new Error("deflating: " + e.msg);
                        e.next_out_index && (e.next_out_index == n ? c.push(new Uint8Array(r)) : c.push(r.slice(0, e.next_out_index))), d += e.next_out_index, i && e.next_in_index > 0 && e.next_in_index != o && (i(e.next_in_index), o = e.next_in_index)
                    } while (e.avail_in > 0 || 0 === e.avail_out);
                    return c.length > 1 ? (s = new Uint8Array(d), c.forEach((function(t) {
                        s.set(t, l), l += t.length
                    }))) : s = c[0] || new Uint8Array(0), s
                }
            }, this.flush = function() {
                let t, i, a = 0,
                    s = 0;
                const o = [];
                do {
                    if (e.next_out_index = 0, e.avail_out = n, t = e.deflate(4), 1 != t && 0 != t) throw new Error("deflating: " + e.msg);
                    n - e.avail_out > 0 && o.push(r.slice(0, e.next_out_index)), s += e.next_out_index
                } while (e.avail_in > 0 || 0 === e.avail_out);
                return e.deflateEnd(), i = new Uint8Array(s), o.forEach((function(t) {
                    i.set(t, a), a += t.length
                })), i
            }
        },
        Inflate: function(t) {
            const e = new W,
                n = t && t.chunkSize ? Math.floor(2 * t.chunkSize) : 131072,
                i = new Uint8Array(n);
            let r = !1;
            e.inflateInit(), e.next_out = i, this.append = function(t, a) {
                const s = [];
                let o, l, d = 0,
                    c = 0,
                    f = 0;
                if (0 !== t.length) {
                    e.next_in_index = 0, e.next_in = t, e.avail_in = t.length;
                    do {
                        if (e.next_out_index = 0, e.avail_out = n, 0 !== e.avail_in || r || (e.next_in_index = 0, r = !0), o = e.inflate(0), r && o === y) {
                            if (0 !== e.avail_in) throw new Error("inflating: bad input")
                        } else if (0 !== o && 1 !== o) throw new Error("inflating: " + e.msg);
                        if ((r || 1 === o) && e.avail_in === t.length) throw new Error("inflating: bad input");
                        e.next_out_index && (e.next_out_index === n ? s.push(new Uint8Array(i)) : s.push(i.slice(0, e.next_out_index))), f += e.next_out_index, a && e.next_in_index > 0 && e.next_in_index != d && (a(e.next_in_index), d = e.next_in_index)
                    } while (e.avail_in > 0 || 0 === e.avail_out);
                    return s.length > 1 ? (l = new Uint8Array(f), s.forEach((function(t) {
                        l.set(t, c), c += t.length
                    }))) : l = s[0] || new Uint8Array(0), l
                }
            }, this.flush = function() {
                e.inflateEnd()
            }
        }
    }), t.BlobReader = re, t.BlobWriter = ae, t.Data64URIReader = ne, t.Data64URIWriter = ie, t.ERR_ABORT = Me, t.ERR_BAD_FORMAT = Le, t.ERR_CENTRAL_DIRECTORY_NOT_FOUND = Ke, t.ERR_DUPLICATED_NAME = xn, t.ERR_ENCRYPTED = Qe, t.ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = Ze, t.ERR_EOCDR_NOT_FOUND = Pe, t.ERR_EOCDR_ZIP64_NOT_FOUND = Ve, t.ERR_EXTRAFIELD_ZIP64_NOT_FOUND = Xe, t.ERR_HTTP_RANGE = Kt, t.ERR_INVALID_COMMENT = wn, t.ERR_INVALID_ENCRYPTION_STRENGTH = yn, t.ERR_INVALID_ENTRY_COMMENT = gn, t.ERR_INVALID_ENTRY_NAME = bn, t.ERR_INVALID_EXTRAFIELD_DATA = zn, t.ERR_INVALID_EXTRAFIELD_TYPE = kn, t.ERR_INVALID_PASSWORD = tt, t.ERR_INVALID_SIGNATURE = Bt, t.ERR_INVALID_VERSION = vn, t.ERR_LOCAL_FILE_HEADER_NOT_FOUND = Ge, t.ERR_UNSUPPORTED_COMPRESSION = Je, t.ERR_UNSUPPORTED_ENCRYPTION = Ye, t.ERR_UNSUPPORTED_FORMAT = An, t.HttpRangeReader = class extends we {
        constructor(t, e = {}) {
            e.useRangeHeader = !0, super(t, e)
        }
    }, t.HttpReader = we, t.Reader = Jt, t.TextReader = te, t.TextWriter = ee, t.Uint8ArrayReader = ge, t.Uint8ArrayWriter = be, t.Writer = $t, t.ZipReader = nn, t.ZipWriter = Sn, t.configure = N, t.fs = Nn, t.getMimeType = function(t) {
        return t && P[t.split(".").pop().toLowerCase()] || "application/octet-stream"
    }, t.initShimAsyncCodec = (t, e = {}, n) => ({
        Deflate: Vt(t.Deflate, e.deflate, n),
        Inflate: Vt(t.Inflate, e.inflate, n)
    }), t.terminateWorkers = function() {
        qt.forEach((t => {
            Pt(t), t.terminate()
        }))
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));