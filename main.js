import {r as n, at as b, au as N, aM as $, aN as F, j as e, z as d, Z as y, aO as V, aP as G, aQ as Y, aR as Z, aS as q, aT as k, aU as B, aV as Q, e as W, A as z, ay as D, aW as f, aX as X, aY as J, aZ as K, a_ as ee, a$ as te, b0 as se, b1 as ae, b2 as re, b3 as I, ar as C, b4 as ne, b5 as v, b6 as oe, b7 as ie, x as ue, i as ce, b8 as le, b9 as pe, ba as de, T as w, bb as me} from "./index-B59N3yFD.js";
function xe() {
    return window.location.href = b({
        section: N.DASHBOARD,
        path: $.DOMAIN_AUTH,
        searchParams: new URLSearchParams(`${F}=${window.location.href}`)
    }),
    e.jsx(d, {
        overlay: !0
    })
}
const U = n.memo(xe)
  , fe = t => n.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    ...t
}, n.createElement("g", {
    clipPath: "url(#clip0_5659_466)"
}, n.createElement("path", {
    d: "M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z",
    fill: "#A3A8B8"
})), n.createElement("defs", null, n.createElement("clipPath", {
    id: "clip0_5659_466"
}, n.createElement("rect", {
    width: 16,
    height: 16,
    fill: "white"
}))))
  , he = "_container_1upux_1"
  , ge = "_hostedName_1upux_12"
  , Ee = "_linkOutText_1upux_17"
  , Ae = "_linkOutIcon_1upux_23"
  , j = {
    container: he,
    hostedName: ge,
    linkOutText: Ee,
    linkOutIcon: Ae
};
function je({utmString: t}) {
    return e.jsxs("div", {
        className: j.container,
        children: [e.jsx("div", {
            className: j.hostedName,
            children: "Built with Streamlit 🎈"
        }), e.jsx("div", {
            children: e.jsxs("a", {
                href: t,
                className: j.linkOutText,
                target: "_blank",
                rel: "noopener noreferrer",
                children: ["Fullscreen ", e.jsx(fe, {
                    className: j.linkOutIcon
                })]
            })
        })]
    })
}
const be = n.memo(je);
function Ne({app: t, appContext: l, dispatch: h, isOwner: a, appState: m, appRunCount: r, isInState: s, isPrivate: u, isEmbed: c, isTemplate: o, streamlitVersion: x, bootingTime: g, creatorProfilePage: E}) {
    if (s("INITIAL"))
        return e.jsx(d, {});
    if (s("UNAUTHORIZED"))
        return e.jsx(U, {});
    if (s("AMBIGUOUS_UPDATING"))
        return e.jsx(d, {
            message: "App is updating"
        });
    let i = "Your app is in the oven";
    return a || (g > 2e4 ? i = `Hmm... looks like it's taking longer than normal.
Check back in a minute or two!` : i = "This will take just a sec! Your app is waking up!"),
    s("BOOTING") ? !a && t.appId ? e.jsx(I, {
        message: i,
        appId: t.appId
    }) : a ? e.jsx(C, {
        message: i
    }) : e.jsx(d, {
        message: "App is booting"
    }) : s("REBOOTING") ? !a && t.appId ? e.jsx(I, {
        message: i,
        appId: t.appId
    }) : a ? e.jsx(C, {
        message: i
    }) : e.jsx(d, {
        message: "App is updating"
    }) : s("RUNNING") || s("DELETED") && a ? e.jsxs(e.Fragment, {
        children: [!a && c && !o && e.jsx(be, {
            utmString: "/?utm_medium=oembed"
        }), e.jsx(ne, {
            app: t,
            isOwner: a,
            className: f.iframe,
            showViewerBadge: !a && !c && !o,
            showBalloons: l.showBalloons && s("RUNNING"),
            onAnimationEnd: () => {
                h({
                    type: "END_DEPLOY"
                })
            }
            ,
            isPrivate: u,
            creatorProfilePage: E
        }, r)]
    }) : s("ERROR") ? e.jsx(v, {
        app: t,
        isOwner: a,
        details: m?.context?.error
    }) : s("RESOURCE_BUSY") ? e.jsx(oe, {
        app: t,
        isOwner: a,
        isPrivateRepo: u,
        streamlitVersion: x
    }) : s("SUSPENDED") ? e.jsx(ie, {
        app: t,
        isOwner: a
    }) : e.jsx(v, {
        app: t,
        isOwner: a,
        details: `Encountered an unknown app state: ${m?.value}`
    })
}
function Re({app: t, user: l}) {
    const h = y()
      , a = V()
      , m = G()
      , {state: r, dispatch: s} = Y()
      , {isOwner: u, isPending: c, platformStatus: o, status: x, streamlitVersion: g, viewerAuthEnabled: E} = Z(t.appId)
      , {appState: i, isInState: p} = q(t)
      , [R,T] = n.useState(0)
      , {context: P} = k(t.appId)
      , O = P?.app?.source.repository.isPrivate ?? !0
      , H = P?.app?.creatorProfilePage
      , {query: A} = B.parseUrl(h.search)
      , S = n.useRef(Date.now());
    n.useEffect( () => {
        a && s({
            type: "HIDE_SIDEBAR"
        })
    }
    , [a, s]);
    const L = () => {
        r.showSidebar ? s({
            type: "HIDE_SIDEBAR"
        }) : s({
            type: "SHOW_SIDEBAR"
        })
    }
    ;
    return n.useEffect( () => {
        r.showBalloons && !c && p("RUNNING") && Q.logger.info("Completed triggering deployment", {
            event_id: W.CompleteDeploy,
            app_status: x,
            platform_status: o
        })
    }
    , [r.showBalloons, c, p, x, o]),
    p("SUSPENDED") && (S.current = Date.now()),
    c || p(void 0) ? e.jsx(d, {
        overlay: !0
    }) : p("NOT_FOUND") || p("DELETED") && !u ? e.jsx(z, {}) : e.jsxs("div", {
        className: D(f.streamlitAppContainer, {
            [f.embed]: A.embed && !A.template
        }),
        children: [e.jsx(X, {
            onDelete: () => {
                const M = b({
                    section: N.DASHBOARD,
                    searchParams: new URLSearchParams(`${J}=${m.Name() || ""}`)
                });
                window.location.href = M
            }
        }), e.jsx(K, {
            hideTab: [ee.General]
        }), e.jsx(te, {}), e.jsx(se, {}), e.jsx(ae, {
            onRestart: () => {
                T(R + 1)
            }
        }), e.jsxs("div", {
            className: D(f.stateContainer, {
                [f.withTerminal]: l && u && r.showSidebar
            }),
            children: [Ne({
                app: t,
                appContext: r,
                appRunCount: R,
                dispatch: s,
                isOwner: u,
                appState: i,
                isInState: p,
                isPrivate: O,
                isEmbed: !!A.embed,
                isTemplate: !!A.template,
                streamlitVersion: g,
                bootingTime: Date.now() - S.current,
                creatorProfilePage: H
            }), l && u && e.jsx(re, {
                app: t,
                appState: i,
                hasError: p("ERROR"),
                className: f.terminal,
                toggleCollapse: L,
                isCollapsed: !r.showSidebar,
                viewerAuthEnabled: E
            })]
        })]
    })
}
const Pe = n.memo(Re);
function Se({rest: t}) {
    const l = window.location.host.split(".")[0];
    return window.location.href = b({
        section: N.DASHBOARD,
        path: `app/${l}/${t || ""}`
    }),
    e.jsx(d, {
        overlay: !0
    })
}
const _ = n.memo(Se);
function De() {
    const t = y()
      , l = ue()
      , h = ce()
      , {disambiguateUrlData: a, rest: m} = le(h, t.search)
      , {app: r, error: s, isPending: u} = pe(a)
      , {context: c, error: o, isPending: x} = k(r?.appId)
      , g = 30 * 1e3;
    if (de(r?.appId, !0, g),
    s?.response?.status === 401 || o?.response?.status === 401)
        return e.jsx(U, {});
    if (x || u)
        return e.jsx(d, {
            overlay: !0
        });
    if (s?.response?.status === 404 || o?.response?.status === 404 || o?.response?.status === 403)
        return e.jsx(_, {
            rest: m
        });
    if (o)
        return e.jsx(w, {
            details: o
        });
    if (s)
        return e.jsx(w, {
            details: s
        });
    if (!r?.subdomain)
        return e.jsx(_, {
            rest: m
        });
    r && c?.app.isFavorited && (r.isFavorited = !0);
    const {query: i} = B.parseUrl(t.search);
    return i?.acceptInvite && l({
        search: me(t.search, ["acceptInvite"])
    }),
    e.jsx(Pe, {
        app: r,
        user: c?.user
    })
}
const Ce = n.memo(De);
export {Ce as default};
