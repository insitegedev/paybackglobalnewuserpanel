(() => {
    function n(n, e) {
        var o =
            ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
            n["@@iterator"];
        if (!o) {
            if (
                Array.isArray(n) ||
                (o = t(n)) ||
                (e && n && "number" == typeof n.length)
            ) {
                o && (n = o);
                var r = 0,
                    c = function () {};
                return {
                    s: c,
                    n: function () {
                        return r >= n.length
                            ? { done: !0 }
                            : { done: !1, value: n[r++] };
                    },
                    e: function (n) {
                        throw n;
                    },
                    f: c,
                };
            }
            throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
        }
        var a,
            l = !0,
            i = !1;
        return {
            s: function () {
                o = o.call(n);
            },
            n: function () {
                var n = o.next();
                return (l = n.done), n;
            },
            e: function (n) {
                (i = !0), (a = n);
            },
            f: function () {
                try {
                    l || null == o.return || o.return();
                } finally {
                    if (i) throw a;
                }
            },
        };
    }
    function e(n, e) {
        return (
            (function (n) {
                if (Array.isArray(n)) return n;
            })(n) ||
            (function (n, e) {
                var t =
                    null == n
                        ? null
                        : ("undefined" != typeof Symbol &&
                              n[Symbol.iterator]) ||
                          n["@@iterator"];
                if (null == t) return;
                var o,
                    r,
                    c = [],
                    a = !0,
                    l = !1;
                try {
                    for (
                        t = t.call(n);
                        !(a = (o = t.next()).done) &&
                        (c.push(o.value), !e || c.length !== e);
                        a = !0
                    );
                } catch (n) {
                    (l = !0), (r = n);
                } finally {
                    try {
                        a || null == t.return || t.return();
                    } finally {
                        if (l) throw r;
                    }
                }
                return c;
            })(n, e) ||
            t(n, e) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function t(n, e) {
        if (n) {
            if ("string" == typeof n) return o(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                    ? Array.from(n)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? o(n, e)
                    : void 0
            );
        }
    }
    function o(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, o = new Array(e); t < e; t++) o[t] = n[t];
        return o;
    }
    $(function () {
        "use strict";
        for (
            var t = document.querySelector(".pickr-container"),
                o = document.querySelector(".theme-container"),
                r = document.querySelector(".pickr-container1"),
                c = document.querySelector(".theme-container1"),
                a = document.querySelector(".pickr-container2"),
                l = document.querySelector(".theme-container2"),
                i = [],
                u = null,
                s = function () {
                    var r = e(g[f], 2),
                        c = r[0],
                        a = r[1],
                        l = document.createElement("button");
                    (l.innerHTML = c),
                        i.push(l),
                        l.addEventListener("click", function () {
                            var e = document.createElement("p");
                            t.appendChild(e), u && u.destroyAndRemove();
                            var o,
                                r = n(i);
                            try {
                                for (r.s(); !(o = r.n()).done; ) {
                                    var s = o.value;
                                    s.classList[s === l ? "add" : "remove"](
                                        "active"
                                    );
                                }
                            } catch (n) {
                                r.e(n);
                            } finally {
                                r.f();
                            }
                            (u = new Pickr(
                                Object.assign(
                                    { el: e, theme: c, default: "#6c5ffc" },
                                    a
                                )
                            ))
                                .on("init", function (n) {
                                    console.log('Event: "init"', n);
                                })
                                .on("hide", function (n) {
                                    console.log('Event: "hide"', n);
                                })
                                .on("show", function (n, e) {
                                    console.log('Event: "show"', n, e);
                                })
                                .on("save", function (n, e) {
                                    console.log('Event: "save"', n, e);
                                })
                                .on("clear", function (n) {
                                    console.log('Event: "clear"', n);
                                })
                                .on("change", function (n, e, t) {
                                    console.log('Event: "change"', n, e, t);
                                })
                                .on("changestop", function (n, e) {
                                    console.log('Event: "changestop"', n, e);
                                })
                                .on("cancel", function (n) {
                                    console.log(
                                        "cancel",
                                        u.getColor().toRGBA().toString(0)
                                    );
                                })
                                .on("swatchselect", function (n, e) {
                                    console.log('Event: "swatchselect"', n, e);
                                });
                        }),
                        o.appendChild(l);
                },
                f = 0,
                g = [
                    [
                        "classic",
                        {
                            swatches: [
                                "rgba(244, 67, 54, 1)",
                                "rgba(233, 30, 99, 0.95)",
                                "rgba(156, 39, 176, 0.9)",
                                "rgba(103, 58, 183, 0.85)",
                                "rgba(63, 81, 181, 0.8)",
                                "rgba(33, 150, 243, 0.75)",
                                "rgba(3, 169, 244, 0.7)",
                                "rgba(0, 188, 212, 0.7)",
                                "rgba(0, 150, 136, 0.75)",
                                "rgba(76, 175, 80, 0.8)",
                                "rgba(139, 195, 74, 0.85)",
                                "rgba(205, 220, 57, 0.9)",
                                "rgba(255, 235, 59, 0.95)",
                                "rgba(255, 193, 7, 1)",
                            ],
                            components: {
                                preview: !0,
                                opacity: !0,
                                hue: !0,
                                interaction: {
                                    hex: !0,
                                    rgba: !0,
                                    hsva: !0,
                                    input: !0,
                                    clear: !0,
                                    save: !0,
                                },
                            },
                        },
                    ],
                ];
            f < g.length;
            f++
        )
            s();
        i[0].click();
        for (
            var v = [],
                h = null,
                d = function () {
                    var t = e(p[b], 2),
                        o = t[0],
                        a = t[1],
                        l = document.createElement("button");
                    (l.innerHTML = o),
                        v.push(l),
                        l.addEventListener("click", function () {
                            var e = document.createElement("p");
                            r.appendChild(e), h && h.destroyAndRemove();
                            var t,
                                c = n(v);
                            try {
                                for (c.s(); !(t = c.n()).done; ) {
                                    var i = t.value;
                                    i.classList[i === l ? "add" : "remove"](
                                        "active"
                                    );
                                }
                            } catch (n) {
                                c.e(n);
                            } finally {
                                c.f();
                            }
                            (h = new Pickr(
                                Object.assign(
                                    { el: e, theme: o, default: "#fc5296" },
                                    a
                                )
                            ))
                                .on("init", function (n) {
                                    console.log('Event: "init"', n);
                                })
                                .on("hide", function (n) {
                                    console.log('Event: "hide"', n);
                                })
                                .on("show", function (n, e) {
                                    console.log('Event: "show"', n, e);
                                })
                                .on("save", function (n, e) {
                                    console.log('Event: "save"', n, e);
                                })
                                .on("clear", function (n) {
                                    console.log('Event: "clear"', n);
                                })
                                .on("change", function (n, e, t) {
                                    console.log('Event: "change"', n, e, t);
                                })
                                .on("changestop", function (n, e) {
                                    console.log('Event: "changestop"', n, e);
                                })
                                .on("cancel", function (n) {
                                    console.log(
                                        "cancel",
                                        h.getColor().toRGBA().toString(0)
                                    );
                                })
                                .on("swatchselect", function (n, e) {
                                    console.log('Event: "swatchselect"', n, e);
                                });
                        }),
                        c.appendChild(l);
                },
                b = 0,
                p = [
                    [
                        "monolith",
                        {
                            swatches: [
                                "rgba(244, 67, 54, 1)",
                                "rgba(233, 30, 99, 0.95)",
                                "rgba(156, 39, 176, 0.9)",
                                "rgba(103, 58, 183, 0.85)",
                                "rgba(63, 81, 181, 0.8)",
                                "rgba(33, 150, 243, 0.75)",
                                "rgba(3, 169, 244, 0.7)",
                            ],
                            defaultRepresentation: "HEXA",
                            components: {
                                preview: !0,
                                opacity: !0,
                                hue: !0,
                                interaction: {
                                    hex: !1,
                                    rgba: !1,
                                    hsva: !1,
                                    input: !0,
                                    clear: !0,
                                    save: !0,
                                },
                            },
                        },
                    ],
                ];
            b < p.length;
            b++
        )
            d();
        v[0].click();
        for (
            var m = [],
                y = null,
                E = function () {
                    var t = e(S[w], 2),
                        o = t[0],
                        r = t[1],
                        c = document.createElement("button");
                    (c.innerHTML = o),
                        m.push(c),
                        c.addEventListener("click", function () {
                            var e = document.createElement("p");
                            a.appendChild(e), y && y.destroyAndRemove();
                            var t,
                                l = n(m);
                            try {
                                for (l.s(); !(t = l.n()).done; ) {
                                    var i = t.value;
                                    i.classList[i === c ? "add" : "remove"](
                                        "active"
                                    );
                                }
                            } catch (n) {
                                l.e(n);
                            } finally {
                                l.f();
                            }
                            (y = new Pickr(
                                Object.assign(
                                    { el: e, theme: o, default: "#05c3fb" },
                                    r
                                )
                            ))
                                .on("init", function (n) {
                                    console.log('Event: "init"', n);
                                })
                                .on("hide", function (n) {
                                    console.log('Event: "hide"', n);
                                })
                                .on("show", function (n, e) {
                                    console.log('Event: "show"', n, e);
                                })
                                .on("save", function (n, e) {
                                    console.log('Event: "save"', n, e);
                                })
                                .on("clear", function (n) {
                                    console.log('Event: "clear"', n);
                                })
                                .on("change", function (n, e, t) {
                                    console.log('Event: "change"', n, e, t);
                                })
                                .on("changestop", function (n, e) {
                                    console.log('Event: "changestop"', n, e);
                                })
                                .on("cancel", function (n) {
                                    console.log(
                                        "cancel",
                                        y.getColor().toRGBA().toString(0)
                                    );
                                })
                                .on("swatchselect", function (n, e) {
                                    console.log('Event: "swatchselect"', n, e);
                                });
                        }),
                        l.appendChild(c);
                },
                w = 0,
                S = [
                    [
                        "nano",
                        {
                            swatches: [
                                "rgba(244, 67, 54, 1)",
                                "rgba(233, 30, 99, 0.95)",
                                "rgba(156, 39, 176, 0.9)",
                                "rgba(103, 58, 183, 0.85)",
                                "rgba(63, 81, 181, 0.8)",
                                "rgba(33, 150, 243, 0.75)",
                                "rgba(3, 169, 244, 0.7)",
                            ],
                            defaultRepresentation: "HEXA",
                            components: {
                                preview: !0,
                                opacity: !0,
                                hue: !0,
                                interaction: {
                                    hex: !1,
                                    rgba: !1,
                                    hsva: !1,
                                    input: !0,
                                    clear: !0,
                                    save: !0,
                                },
                            },
                        },
                    ],
                ];
            w < S.length;
            w++
        )
            E();
        m[0].click();
    });
})();
