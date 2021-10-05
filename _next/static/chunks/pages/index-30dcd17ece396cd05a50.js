(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        6858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return I
                },
                default: function() {
                    return S
                }
            });
            var r = n(5893),
                a = n(7757),
                i = n.n(a),
                s = n(18),
                c = n(2137),
                o = n(7294),
                u = n(1163),
                d = n(9163),
                l = n(6341);

            function p(e) {
                var t = (0, u.useRouter)(),
                    n = (0, o.useState)(0),
                    a = n[0],
                    i = n[1];
                return (0, r.jsx)(l.Z, {
                    fade: !0,
                    activeIndex: a,
                    onSelect: function(e, t) {
                        i(e)
                    },
                    style: {
                        width: "100%"
                    },
                    interval: 5e3,
                    children: e.carouselList.map((function(e) {
                        return (0, r.jsx)(l.Z.Item, {
                            children: (0, r.jsx)("img", {
                                onClick: function() {
                                    return t.push("/details/".concat(e.id, "?tv=").concat(!!e.first_air_date))
                                },
                                className: "d-block w-50",
                                src: "https://image.tmdb.org/t/p/w500/".concat(e.poster_path),
                                alt: "First slide"
                            })
                        }, e.id)
                    }))
                })
            }
            d.ZP.div.withConfig({
                displayName: "Carousel__TransparentBlack",
                componentId: "sc-s1uzo9-0"
            })(["width:100%;height:7rem;background-color:rgba(0,0,0,0.5);position:absolute;bottom:0;"]);

            function h(e) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = (0, c.Z)(i().mark((function e(t) {
                    var n, r;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("7a8ca7c97583e31eb5853b4d959ffe0c", "&page=").concat(t));
                            case 2:
                                return n = e.sent, e.next = 5, n.json();
                            case 5:
                                return r = e.sent, e.abrupt("return", r);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function m(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = (0, c.Z)(i().mark((function e(t) {
                    var n, r;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("7a8ca7c97583e31eb5853b4d959ffe0c", "&query=").concat(t, "&page=1&include_adult=false"));
                            case 2:
                                return n = e.sent, e.next = 5, n.json();
                            case 5:
                                return r = e.sent, e.abrupt("return", r);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function x(e, t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, c.Z)(i().mark((function e(t, n) {
                    var r, a;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("7a8ca7c97583e31eb5853b4d959ffe0c", "&with_genres=").concat(t, "&sort_by=vote_count.desc&page=").concat(n));
                            case 2:
                                return r = e.sent, e.next = 5, r.json();
                            case 5:
                                return a = e.sent, e.abrupt("return", a);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function v(e, t) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, c.Z)(i().mark((function e(t, n) {
                    var r, a;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("7a8ca7c97583e31eb5853b4d959ffe0c", "&year=").concat(t, "&page=").concat(n));
                            case 2:
                                return r = e.sent, e.next = 5, r.json();
                            case 5:
                                return a = e.sent, e.abrupt("return", a);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var _ = d.ZP.div.withConfig({
                    displayName: "pages__MainScreen",
                    componentId: "sc-1w8uriw-0"
                })(["width:calc(70vw - 20px);max-width:500px;margin:1rem auto;border-radius:10px;color:black;padding:1rem;"]),
                y = d.ZP.input.withConfig({
                    displayName: "pages__Search",
                    componentId: "sc-1w8uriw-1"
                })(["width:40rem;max-width:40vw;min-width:40rem;display:block;margin:2rem auto;padding:1rem 3rem;font-size:2rem;border-radius:10px;"]),
                j = d.ZP.div.withConfig({
                    displayName: "pages__FilterContainer",
                    componentId: "sc-1w8uriw-2"
                })(["margin:2rem auto;max-width:100vw;width:60rem;text-align:center;"]),
                k = d.ZP.select.withConfig({
                    displayName: "pages__Filter",
                    componentId: "sc-1w8uriw-3"
                })(["width:16rem;margin:0 2rem;padding:1rem 3rem;font-size:2rem;border-radius:10px;"]),
                C = d.ZP.div.withConfig({
                    displayName: "pages__CardContainer",
                    componentId: "sc-1w8uriw-4"
                })(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;align-items:stretch;width:calc(100vw - 20px);max-width:1000px;margin:4rem auto;"]),
                Z = d.ZP.div.withConfig({
                    displayName: "pages__Card",
                    componentId: "sc-1w8uriw-5"
                })(["width:80vw;max-width:25rem;background-color:rgba(240,248,255,0.9);box-shadow:0 0 15px 0 rgba(0,0,0,0.5);margin:0 1rem 2rem 0;border-radius:10px;text-align:center;color:black;display:flex;justify-content:center;align-items:center;.content{padding:1rem;width:100%;margin:0 auto;}& h1{margin:1rem 0;font-size:1.5rem;}"]),
                N = d.ZP.button.withConfig({
                    displayName: "pages__Button",
                    componentId: "sc-1w8uriw-6"
                })(["display:block;padding:1rem;margin:1rem auto;background-color:rgba(240,248,255,0.8);box-shadow:0 0 15px 0 rgba(0,0,0,0.5);font-size:1.8rem;font-weight:bold;color:black;width:10vw;min-width:150px;outline:none;border-radius:10px;"]),
                I = !0,
                S = function(e) {
                    var t = (0, u.useRouter)(),
                        n = (0, o.useState)(""),
                        a = n[0],
                        d = n[1],
                        l = (0, o.useState)(!1),
                        f = l[0],
                        w = l[1],
                        g = (0, o.useState)(1),
                        b = g[0],
                        I = g[1],
                        S = (0, o.useState)(!1),
                        P = S[0],
                        T = S[1],
                        E = (0, o.useState)(e.nowPlaying.results),
                        z = E[0],
                        M = E[1],
                        F = (0, o.useState)(null),
                        L = F[0],
                        A = F[1],
                        B = (0, o.useState)(null),
                        H = B[0],
                        O = B[1],
                        R = function() {
                            var e = (0, c.Z)(i().mark((function e() {
                                var t, n;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T(!0), t = document.body.scrollHeight, !L) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 5, x(L, b + 1);
                                        case 5:
                                            n = e.sent, e.next = 17;
                                            break;
                                        case 8:
                                            if (!H) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 11, v(H, b + 1);
                                        case 11:
                                            n = e.sent, e.next = 17;
                                            break;
                                        case 14:
                                            return e.next = 16, h(b + 1);
                                        case 16:
                                            n = e.sent;
                                        case 17:
                                            M((function(e) {
                                                return [].concat((0, s.Z)(e), (0, s.Z)(n.results))
                                            })), T(!1), I(b + 1), window.scrollTo(0, t - 300);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, o.useEffect)((function() {
                        var e = setTimeout((0, c.Z)(i().mark((function e() {
                            var t, n;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("" == a.trim()) {
                                            e.next = 10;
                                            break
                                        }
                                        return w(!0), O(""), A(""), e.next = 6, m(a);
                                    case 6:
                                        (t = e.sent).results && (T(!0), console.log(t), M(t.results), t.results.length >= 1 ? T(!1) : T(!0)), e.next = 16;
                                        break;
                                    case 10:
                                        return e.next = 12, h(1);
                                    case 12:
                                        n = e.sent, M((function(e) {
                                            return (0, s.Z)(n.results)
                                        })), I(1), w(!1);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e3);
                        return function() {
                            clearTimeout(e)
                        }
                    }), [a]);
                    var X = function() {
                            var e = (0, c.Z)(i().mark((function e(t) {
                                var n;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O(""), A(t.target.value), T(!0), e.next = 5, x(t.target.value, 1);
                                        case 5:
                                            n = e.sent, M(n.results), T(!1);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        q = function() {
                            var e = (0, c.Z)(i().mark((function e(t) {
                                var n;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return A(""), O(t.target.value), T(!0), e.next = 5, v(t.target.value, 1);
                                        case 5:
                                            n = e.sent, M(n.results), T(!1);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(_, {
                            children: (0, r.jsx)("center", {
                                children: (0, r.jsx)(p, {
                                    carouselList: e.carouselList
                                })
                            })
                        }), (0, r.jsx)(y, {
                            type: "text",
                            placeholder: "Search",
                            value: a,
                            onChange: function(e) {
                                return d(e.target.value)
                            }
                        }), (0, r.jsxs)(j, {
                            children: [(0, r.jsxs)(k, {
                                onChange: X,
                                value: L,
                                children: [(0, r.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    selected: !0,
                                    hidden: !0,
                                    children: "Genre"
                                }), (0, r.jsx)("option", {
                                    value: "28",
                                    children: "Action"
                                }), (0, r.jsx)("option", {
                                    value: "27",
                                    children: "Horror"
                                }), (0, r.jsx)("option", {
                                    value: "53",
                                    children: "Thriller"
                                })]
                            }), (0, r.jsxs)(k, {
                                onChange: q,
                                value: H,
                                children: [(0, r.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    selected: !0,
                                    hidden: !0,
                                    children: "Year"
                                }), (0, r.jsx)("option", {
                                    value: "2021",
                                    children: "2021"
                                }), (0, r.jsx)("option", {
                                    value: "2020",
                                    children: "2020"
                                }), (0, r.jsx)("option", {
                                    value: "2019",
                                    children: "2019"
                                })]
                            })]
                        }), (0, r.jsx)(C, {
                            children: P ? (0, r.jsx)(Z, {
                                children: (0, r.jsxs)("div", {
                                    className: "content",
                                    children: [(0, r.jsx)("img", {
                                        src: "https://2gyntc2a2i9a22ifya16a222-wpengine.netdna-ssl.com/wp-content/uploads/sites/29/2014/12/Image-Not-Available.jpg",
                                        alt: "Image",
                                        width: "100%"
                                    }), (0, r.jsx)("h1", {
                                        children: "No Movies Found"
                                    })]
                                })
                            }, Math.random()) : z.map((function(e) {
                                return (0, r.jsx)(Z, {
                                    onClick: function() {
                                        return t.push("/details/".concat(e.id, "?tv=").concat(!!e.first_air_date))
                                    },
                                    children: (0, r.jsxs)("div", {
                                        className: "content",
                                        children: [(0, r.jsx)("img", {
                                            src: e.poster_path ? "https://image.tmdb.org/t/p/w500/".concat(e.poster_path) : "https://2gyntc2a2i9a22ifya16a222-wpengine.netdna-ssl.com/wp-content/uploads/sites/29/2014/12/Image-Not-Available.jpg",
                                            alt: "Image",
                                            width: "100%"
                                        }), (0, r.jsxs)("h1", {
                                            children: [e.original_title || e.original_name, e.release_date ? " (".concat(e.release_date.split("-")[0], ")") : "", e.first_air_date ? " (".concat(e.first_air_date.split("-")[0], ")") : ""]
                                        })]
                                    })
                                }, Math.random())
                            }))
                        }), !f && (0, r.jsx)(N, {
                            onClick: R,
                            children: "Load More"
                        })]
                    })
                }
        },
        8581: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(6858)
            }])
        }
    },
    function(e) {
        e.O(0, [774, 707, 888, 179], (function() {
            return t = 8581, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);