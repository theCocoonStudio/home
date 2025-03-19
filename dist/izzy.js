var Zv = (T) => {
  throw TypeError(T);
};
var Kv = (T, n, u) => n.has(T) || Zv("Cannot " + u);
var Ja = (T, n, u) => (Kv(T, n, "read from private field"), u ? u.call(T) : n.get(T)), Zd = (T, n, u) => n.has(T) ? Zv("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(T) : n.set(T, u), ic = (T, n, u, o) => (Kv(T, n, "write to private field"), o ? o.call(T, u) : n.set(T, u), u);
var g0 = { exports: {} }, le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jv;
function D2() {
  if (Jv) return le;
  Jv = 1;
  var T = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), S = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), R = Symbol.iterator;
  function C(N) {
    return N === null || typeof N != "object" ? null : (N = R && N[R] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, U = Object.assign, X = {};
  function J(N, w, ct) {
    this.props = N, this.context = w, this.refs = X, this.updater = ct || A;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(N, w) {
    if (typeof N != "object" && typeof N != "function" && N != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, N, w, "setState");
  }, J.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function K() {
  }
  K.prototype = J.prototype;
  function k(N, w, ct) {
    this.props = N, this.context = w, this.refs = X, this.updater = ct || A;
  }
  var at = k.prototype = new K();
  at.constructor = k, U(at, J.prototype), at.isPureReactComponent = !0;
  var P = Array.isArray, ut = { H: null, A: null, T: null, S: null }, Tt = Object.prototype.hasOwnProperty;
  function Nt(N, w, ct, bt, vt, Dt) {
    return ct = Dt.ref, {
      $$typeof: T,
      type: N,
      key: w,
      ref: ct !== void 0 ? ct : null,
      props: Dt
    };
  }
  function Rt(N, w) {
    return Nt(
      N.type,
      w,
      void 0,
      void 0,
      void 0,
      N.props
    );
  }
  function Vt(N) {
    return typeof N == "object" && N !== null && N.$$typeof === T;
  }
  function Gt(N) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ct) {
      return w[ct];
    });
  }
  var jt = /\/+/g;
  function ye(N, w) {
    return typeof N == "object" && N !== null && N.key != null ? Gt("" + N.key) : w.toString(36);
  }
  function it() {
  }
  function Ft(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (typeof N.status == "string" ? N.then(it, it) : (N.status = "pending", N.then(
          function(w) {
            N.status === "pending" && (N.status = "fulfilled", N.value = w);
          },
          function(w) {
            N.status === "pending" && (N.status = "rejected", N.reason = w);
          }
        )), N.status) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function ie(N, w, ct, bt, vt) {
    var Dt = typeof N;
    (Dt === "undefined" || Dt === "boolean") && (N = null);
    var Ot = !1;
    if (N === null) Ot = !0;
    else
      switch (Dt) {
        case "bigint":
        case "string":
        case "number":
          Ot = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case T:
            case n:
              Ot = !0;
              break;
            case M:
              return Ot = N._init, ie(
                Ot(N._payload),
                w,
                ct,
                bt,
                vt
              );
          }
      }
    if (Ot)
      return vt = vt(N), Ot = bt === "" ? "." + ye(N, 0) : bt, P(vt) ? (ct = "", Ot != null && (ct = Ot.replace(jt, "$&/") + "/"), ie(vt, w, ct, "", function(Me) {
        return Me;
      })) : vt != null && (Vt(vt) && (vt = Rt(
        vt,
        ct + (vt.key == null || N && N.key === vt.key ? "" : ("" + vt.key).replace(
          jt,
          "$&/"
        ) + "/") + Ot
      )), w.push(vt)), 1;
    Ot = 0;
    var Ye = bt === "" ? "." : bt + ":";
    if (P(N))
      for (var ue = 0; ue < N.length; ue++)
        bt = N[ue], Dt = Ye + ye(bt, ue), Ot += ie(
          bt,
          w,
          ct,
          Dt,
          vt
        );
    else if (ue = C(N), typeof ue == "function")
      for (N = ue.call(N), ue = 0; !(bt = N.next()).done; )
        bt = bt.value, Dt = Ye + ye(bt, ue++), Ot += ie(
          bt,
          w,
          ct,
          Dt,
          vt
        );
    else if (Dt === "object") {
      if (typeof N.then == "function")
        return ie(
          Ft(N),
          w,
          ct,
          bt,
          vt
        );
      throw w = String(N), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ot;
  }
  function V(N, w, ct) {
    if (N == null) return N;
    var bt = [], vt = 0;
    return ie(N, bt, "", "", function(Dt) {
      return w.call(ct, Dt, vt++);
    }), bt;
  }
  function lt(N) {
    if (N._status === -1) {
      var w = N._result;
      w = w(), w.then(
        function(ct) {
          (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ct);
        },
        function(ct) {
          (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ct);
        }
      ), N._status === -1 && (N._status = 0, N._result = w);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ot = typeof reportError == "function" ? reportError : function(N) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof N == "object" && N !== null && typeof N.message == "string" ? String(N.message) : String(N),
        error: N
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", N);
      return;
    }
    console.error(N);
  };
  function st() {
  }
  return le.Children = {
    map: V,
    forEach: function(N, w, ct) {
      V(
        N,
        function() {
          w.apply(this, arguments);
        },
        ct
      );
    },
    count: function(N) {
      var w = 0;
      return V(N, function() {
        w++;
      }), w;
    },
    toArray: function(N) {
      return V(N, function(w) {
        return w;
      }) || [];
    },
    only: function(N) {
      if (!Vt(N))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return N;
    }
  }, le.Component = J, le.Fragment = u, le.Profiler = h, le.PureComponent = k, le.StrictMode = o, le.Suspense = E, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ut, le.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, le.cache = function(N) {
    return function() {
      return N.apply(null, arguments);
    };
  }, le.cloneElement = function(N, w, ct) {
    if (N == null)
      throw Error(
        "The argument must be a React element, but you passed " + N + "."
      );
    var bt = U({}, N.props), vt = N.key, Dt = void 0;
    if (w != null)
      for (Ot in w.ref !== void 0 && (Dt = void 0), w.key !== void 0 && (vt = "" + w.key), w)
        !Tt.call(w, Ot) || Ot === "key" || Ot === "__self" || Ot === "__source" || Ot === "ref" && w.ref === void 0 || (bt[Ot] = w[Ot]);
    var Ot = arguments.length - 2;
    if (Ot === 1) bt.children = ct;
    else if (1 < Ot) {
      for (var Ye = Array(Ot), ue = 0; ue < Ot; ue++)
        Ye[ue] = arguments[ue + 2];
      bt.children = Ye;
    }
    return Nt(N.type, vt, void 0, void 0, Dt, bt);
  }, le.createContext = function(N) {
    return N = {
      $$typeof: S,
      _currentValue: N,
      _currentValue2: N,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, N.Provider = N, N.Consumer = {
      $$typeof: y,
      _context: N
    }, N;
  }, le.createElement = function(N, w, ct) {
    var bt, vt = {}, Dt = null;
    if (w != null)
      for (bt in w.key !== void 0 && (Dt = "" + w.key), w)
        Tt.call(w, bt) && bt !== "key" && bt !== "__self" && bt !== "__source" && (vt[bt] = w[bt]);
    var Ot = arguments.length - 2;
    if (Ot === 1) vt.children = ct;
    else if (1 < Ot) {
      for (var Ye = Array(Ot), ue = 0; ue < Ot; ue++)
        Ye[ue] = arguments[ue + 2];
      vt.children = Ye;
    }
    if (N && N.defaultProps)
      for (bt in Ot = N.defaultProps, Ot)
        vt[bt] === void 0 && (vt[bt] = Ot[bt]);
    return Nt(N, Dt, void 0, void 0, null, vt);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(N) {
    return { $$typeof: x, render: N };
  }, le.isValidElement = Vt, le.lazy = function(N) {
    return {
      $$typeof: M,
      _payload: { _status: -1, _result: N },
      _init: lt
    };
  }, le.memo = function(N, w) {
    return {
      $$typeof: z,
      type: N,
      compare: w === void 0 ? null : w
    };
  }, le.startTransition = function(N) {
    var w = ut.T, ct = {};
    ut.T = ct;
    try {
      var bt = N(), vt = ut.S;
      vt !== null && vt(ct, bt), typeof bt == "object" && bt !== null && typeof bt.then == "function" && bt.then(st, ot);
    } catch (Dt) {
      ot(Dt);
    } finally {
      ut.T = w;
    }
  }, le.unstable_useCacheRefresh = function() {
    return ut.H.useCacheRefresh();
  }, le.use = function(N) {
    return ut.H.use(N);
  }, le.useActionState = function(N, w, ct) {
    return ut.H.useActionState(N, w, ct);
  }, le.useCallback = function(N, w) {
    return ut.H.useCallback(N, w);
  }, le.useContext = function(N) {
    return ut.H.useContext(N);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(N, w) {
    return ut.H.useDeferredValue(N, w);
  }, le.useEffect = function(N, w) {
    return ut.H.useEffect(N, w);
  }, le.useId = function() {
    return ut.H.useId();
  }, le.useImperativeHandle = function(N, w, ct) {
    return ut.H.useImperativeHandle(N, w, ct);
  }, le.useInsertionEffect = function(N, w) {
    return ut.H.useInsertionEffect(N, w);
  }, le.useLayoutEffect = function(N, w) {
    return ut.H.useLayoutEffect(N, w);
  }, le.useMemo = function(N, w) {
    return ut.H.useMemo(N, w);
  }, le.useOptimistic = function(N, w) {
    return ut.H.useOptimistic(N, w);
  }, le.useReducer = function(N, w, ct) {
    return ut.H.useReducer(N, w, ct);
  }, le.useRef = function(N) {
    return ut.H.useRef(N);
  }, le.useState = function(N) {
    return ut.H.useState(N);
  }, le.useSyncExternalStore = function(N, w, ct) {
    return ut.H.useSyncExternalStore(
      N,
      w,
      ct
    );
  }, le.useTransition = function() {
    return ut.H.useTransition();
  }, le.version = "19.0.0", le;
}
var Id = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Id.exports;
var Lv;
function U2() {
  return Lv || (Lv = 1, function(T, n) {
    process.env.NODE_ENV !== "production" && function() {
      function u(g, q) {
        Object.defineProperty(y.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              q[0],
              q[1]
            );
          }
        });
      }
      function o(g) {
        return g === null || typeof g != "object" ? null : (g = Ma && g[Ma] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function h(g, q) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var $ = g + "." + q;
        En[$] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          q,
          g
        ), En[$] = !0);
      }
      function y(g, q, $) {
        this.props = g, this.context = q, this.refs = At, this.updater = $ || D;
      }
      function S() {
      }
      function x(g, q, $) {
        this.props = g, this.context = q, this.refs = At, this.updater = $ || D;
      }
      function E(g) {
        return "" + g;
      }
      function z(g) {
        try {
          E(g);
          var q = !1;
        } catch {
          q = !0;
        }
        if (q) {
          q = console;
          var $ = q.error, ht = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return $.call(
            q,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ht
          ), E(g);
        }
      }
      function M(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === Xt ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case ue:
            return "Fragment";
          case Ye:
            return "Portal";
          case je:
            return "Profiler";
          case Me:
            return "StrictMode";
          case Ge:
            return "Suspense";
          case Se:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case ve:
              return (g.displayName || "Context") + ".Provider";
            case ge:
              return (g._context.displayName || "Context") + ".Consumer";
            case te:
              var q = g.render;
              return g = g.displayName, g || (g = q.displayName || q.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case fe:
              return q = g.displayName || null, q !== null ? q : M(g.type) || "Memo";
            case Ce:
              q = g._payload, g = g._init;
              try {
                return M(g(q));
              } catch {
              }
          }
        return null;
      }
      function R(g) {
        return typeof g == "string" || typeof g == "function" || g === ue || g === je || g === Me || g === Ge || g === Se || g === rl || typeof g == "object" && g !== null && (g.$$typeof === Ce || g.$$typeof === fe || g.$$typeof === ve || g.$$typeof === ge || g.$$typeof === te || g.$$typeof === be || g.getModuleId !== void 0);
      }
      function C() {
      }
      function A() {
        if (ke === 0) {
          _a = console.log, an = console.info, Mn = console.warn, Pe = console.error, ba = console.group, fl = console.groupCollapsed, Aa = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        ke++;
      }
      function U() {
        if (ke--, ke === 0) {
          var g = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: xt({}, g, { value: _a }),
            info: xt({}, g, { value: an }),
            warn: xt({}, g, { value: Mn }),
            error: xt({}, g, { value: Pe }),
            group: xt({}, g, { value: ba }),
            groupCollapsed: xt({}, g, { value: fl }),
            groupEnd: xt({}, g, { value: Aa })
          });
        }
        0 > ke && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function X(g) {
        if (na === void 0)
          try {
            throw Error();
          } catch ($) {
            var q = $.stack.trim().match(/\n( *(at )?)/);
            na = q && q[1] || "", zu = -1 < $.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < $.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + na + g + zu;
      }
      function J(g, q) {
        if (!g || hl) return "";
        var $ = Mu.get(g);
        if ($ !== void 0) return $;
        hl = !0, $ = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var ht = null;
        ht = Yt.H, Yt.H = null, A();
        try {
          var zt = {
            DetermineComponentFrameRoot: function() {
              try {
                if (q) {
                  var Ee = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Ee.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Ee, []);
                    } catch (aa) {
                      var Je = aa;
                    }
                    Reflect.construct(g, [], Ee);
                  } else {
                    try {
                      Ee.call();
                    } catch (aa) {
                      Je = aa;
                    }
                    g.call(Ee.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (aa) {
                    Je = aa;
                  }
                  (Ee = g()) && typeof Ee.catch == "function" && Ee.catch(function() {
                  });
                }
              } catch (aa) {
                if (aa && Je && typeof aa.stack == "string")
                  return [aa.stack, Je.stack];
              }
              return [null, null];
            }
          };
          zt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var Ut = Object.getOwnPropertyDescriptor(
            zt.DetermineComponentFrameRoot,
            "name"
          );
          Ut && Ut.configurable && Object.defineProperty(
            zt.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var Mt = zt.DetermineComponentFrameRoot(), de = Mt[0], ee = Mt[1];
          if (de && ee) {
            var Ve = de.split(`
`), on = ee.split(`
`);
            for (Mt = Ut = 0; Ut < Ve.length && !Ve[Ut].includes(
              "DetermineComponentFrameRoot"
            ); )
              Ut++;
            for (; Mt < on.length && !on[Mt].includes(
              "DetermineComponentFrameRoot"
            ); )
              Mt++;
            if (Ut === Ve.length || Mt === on.length)
              for (Ut = Ve.length - 1, Mt = on.length - 1; 1 <= Ut && 0 <= Mt && Ve[Ut] !== on[Mt]; )
                Mt--;
            for (; 1 <= Ut && 0 <= Mt; Ut--, Mt--)
              if (Ve[Ut] !== on[Mt]) {
                if (Ut !== 1 || Mt !== 1)
                  do
                    if (Ut--, Mt--, 0 > Mt || Ve[Ut] !== on[Mt]) {
                      var Ke = `
` + Ve[Ut].replace(
                        " at new ",
                        " at "
                      );
                      return g.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", g.displayName)), typeof g == "function" && Mu.set(g, Ke), Ke;
                    }
                  while (1 <= Ut && 0 <= Mt);
                break;
              }
          }
        } finally {
          hl = !1, Yt.H = ht, U(), Error.prepareStackTrace = $;
        }
        return Ve = (Ve = g ? g.displayName || g.name : "") ? X(Ve) : "", typeof g == "function" && Mu.set(g, Ve), Ve;
      }
      function K(g) {
        if (g == null) return "";
        if (typeof g == "function") {
          var q = g.prototype;
          return J(
            g,
            !(!q || !q.isReactComponent)
          );
        }
        if (typeof g == "string") return X(g);
        switch (g) {
          case Ge:
            return X("Suspense");
          case Se:
            return X("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case te:
              return g = J(g.render, !1), g;
            case fe:
              return K(g.type);
            case Ce:
              q = g._payload, g = g._init;
              try {
                return K(g(q));
              } catch {
              }
          }
        return "";
      }
      function k() {
        var g = Yt.A;
        return g === null ? null : g.getOwner();
      }
      function at(g) {
        if (pa.call(g, "key")) {
          var q = Object.getOwnPropertyDescriptor(g, "key").get;
          if (q && q.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function P(g, q) {
        function $() {
          Hl || (Hl = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            q
          ));
        }
        $.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: $,
          configurable: !0
        });
      }
      function ut() {
        var g = M(this.type);
        return Xi[g] || (Xi[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Tt(g, q, $, ht, zt, Ut) {
        return $ = Ut.ref, g = {
          $$typeof: Ot,
          type: g,
          key: q,
          props: Ut,
          _owner: zt
        }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: ut
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function Nt(g, q) {
        return q = Tt(
          g.type,
          q,
          void 0,
          void 0,
          g._owner,
          g.props
        ), q._store.validated = g._store.validated, q;
      }
      function Rt(g, q) {
        if (typeof g == "object" && g && g.$$typeof !== _n) {
          if (_e(g))
            for (var $ = 0; $ < g.length; $++) {
              var ht = g[$];
              Vt(ht) && Gt(ht, q);
            }
          else if (Vt(g))
            g._store && (g._store.validated = 1);
          else if ($ = o(g), typeof $ == "function" && $ !== g.entries && ($ = $.call(g), $ !== g))
            for (; !(g = $.next()).done; )
              Vt(g.value) && Gt(g.value, q);
        }
      }
      function Vt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === Ot;
      }
      function Gt(g, q) {
        if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, q = jt(q), !Fa[q])) {
          Fa[q] = !0;
          var $ = "";
          g && g._owner != null && g._owner !== k() && ($ = null, typeof g._owner.tag == "number" ? $ = M(g._owner.type) : typeof g._owner.name == "string" && ($ = g._owner.name), $ = " It was passed a child from " + $ + ".");
          var ht = Yt.getCurrentStack;
          Yt.getCurrentStack = function() {
            var zt = K(g.type);
            return ht && (zt += ht() || ""), zt;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            q,
            $
          ), Yt.getCurrentStack = ht;
        }
      }
      function jt(g) {
        var q = "", $ = k();
        return $ && ($ = M($.type)) && (q = `

Check the render method of \`` + $ + "`."), q || (g = M(g)) && (q = `

Check the top-level render call using <` + g + ">."), q;
      }
      function ye(g) {
        var q = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function($) {
          return q[$];
        });
      }
      function it(g, q) {
        return typeof g == "object" && g !== null && g.key != null ? (z(g.key), ye("" + g.key)) : q.toString(36);
      }
      function Ft() {
      }
      function ie(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(Ft, Ft) : (g.status = "pending", g.then(
              function(q) {
                g.status === "pending" && (g.status = "fulfilled", g.value = q);
              },
              function(q) {
                g.status === "pending" && (g.status = "rejected", g.reason = q);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function V(g, q, $, ht, zt) {
        var Ut = typeof g;
        (Ut === "undefined" || Ut === "boolean") && (g = null);
        var Mt = !1;
        if (g === null) Mt = !0;
        else
          switch (Ut) {
            case "bigint":
            case "string":
            case "number":
              Mt = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case Ot:
                case Ye:
                  Mt = !0;
                  break;
                case Ce:
                  return Mt = g._init, V(
                    Mt(g._payload),
                    q,
                    $,
                    ht,
                    zt
                  );
              }
          }
        if (Mt) {
          Mt = g, zt = zt(Mt);
          var de = ht === "" ? "." + it(Mt, 0) : ht;
          return _e(zt) ? ($ = "", de != null && ($ = de.replace(_u, "$&/") + "/"), V(zt, q, $, "", function(Ve) {
            return Ve;
          })) : zt != null && (Vt(zt) && (zt.key != null && (Mt && Mt.key === zt.key || z(zt.key)), $ = Nt(
            zt,
            $ + (zt.key == null || Mt && Mt.key === zt.key ? "" : ("" + zt.key).replace(
              _u,
              "$&/"
            ) + "/") + de
          ), ht !== "" && Mt != null && Vt(Mt) && Mt.key == null && Mt._store && !Mt._store.validated && ($._store.validated = 2), zt = $), q.push(zt)), 1;
        }
        if (Mt = 0, de = ht === "" ? "." : ht + ":", _e(g))
          for (var ee = 0; ee < g.length; ee++)
            ht = g[ee], Ut = de + it(ht, ee), Mt += V(
              ht,
              q,
              $,
              Ut,
              zt
            );
        else if (ee = o(g), typeof ee == "function")
          for (ee === g.entries && (Bl || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Bl = !0), g = ee.call(g), ee = 0; !(ht = g.next()).done; )
            ht = ht.value, Ut = de + it(ht, ee++), Mt += V(
              ht,
              q,
              $,
              Ut,
              zt
            );
        else if (Ut === "object") {
          if (typeof g.then == "function")
            return V(
              ie(g),
              q,
              $,
              ht,
              zt
            );
          throw q = String(g), Error(
            "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Mt;
      }
      function lt(g, q, $) {
        if (g == null) return g;
        var ht = [], zt = 0;
        return V(g, ht, "", "", function(Ut) {
          return q.call($, Ut, zt++);
        }), ht;
      }
      function ot(g) {
        if (g._status === -1) {
          var q = g._result;
          q = q(), q.then(
            function($) {
              (g._status === 0 || g._status === -1) && (g._status = 1, g._result = $);
            },
            function($) {
              (g._status === 0 || g._status === -1) && (g._status = 2, g._result = $);
            }
          ), g._status === -1 && (g._status = 0, g._result = q);
        }
        if (g._status === 1)
          return q = g._result, q === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            q
          ), "default" in q || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            q
          ), q.default;
        throw g._result;
      }
      function st() {
        var g = Yt.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function N() {
      }
      function w(g) {
        if (Yl === null)
          try {
            var q = ("require" + Math.random()).slice(0, 7);
            Yl = (T && T[q]).call(
              T,
              "timers"
            ).setImmediate;
          } catch {
            Yl = function(ht) {
              ql === !1 && (ql = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var zt = new MessageChannel();
              zt.port1.onmessage = ht, zt.port2.postMessage(void 0);
            };
          }
        return Yl(g);
      }
      function ct(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function bt(g, q) {
        q !== Zi - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Zi = q;
      }
      function vt(g, q, $) {
        var ht = Yt.actQueue;
        if (ht !== null)
          if (ht.length !== 0)
            try {
              Dt(ht), w(function() {
                return vt(g, q, $);
              });
              return;
            } catch (zt) {
              Yt.thrownErrors.push(zt);
            }
          else Yt.actQueue = null;
        0 < Yt.thrownErrors.length ? (ht = ct(Yt.thrownErrors), Yt.thrownErrors.length = 0, $(ht)) : q(g);
      }
      function Dt(g) {
        if (!bu) {
          bu = !0;
          var q = 0;
          try {
            for (; q < g.length; q++) {
              var $ = g[q];
              do {
                Yt.didUsePromise = !1;
                var ht = $(!1);
                if (ht !== null) {
                  if (Yt.didUsePromise) {
                    g[q] = $, g.splice(0, q);
                    return;
                  }
                  $ = ht;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (zt) {
            g.splice(0, q + 1), Yt.thrownErrors.push(zt);
          } finally {
            bu = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Ot = Symbol.for("react.transitional.element"), Ye = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), Me = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), ge = Symbol.for("react.consumer"), ve = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), rl = Symbol.for("react.offscreen"), Ma = Symbol.iterator, En = {}, D = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          h(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          h(g, "replaceState");
        },
        enqueueSetState: function(g) {
          h(g, "setState");
        }
      }, xt = Object.assign, At = {};
      Object.freeze(At), y.prototype.isReactComponent = {}, y.prototype.setState = function(g, q) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, q, "setState");
      }, y.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var Kt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Ne;
      for (Ne in Kt)
        Kt.hasOwnProperty(Ne) && u(Ne, Kt[Ne]);
      S.prototype = y.prototype, Kt = x.prototype = new S(), Kt.constructor = x, xt(Kt, y.prototype), Kt.isPureReactComponent = !0;
      var _e = Array.isArray, Xt = Symbol.for("react.client.reference"), Yt = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, pa = Object.prototype.hasOwnProperty, be = Symbol.for("react.client.reference"), ke = 0, _a, an, Mn, Pe, ba, fl, Aa;
      C.__reactDisabledLog = !0;
      var na, zu, hl = !1, Mu = new (typeof WeakMap == "function" ? WeakMap : Map)(), _n = Symbol.for("react.client.reference"), Hl, dl, Xi = {}, Fa = {}, Bl = !1, _u = /\/+/g, di = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var q = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(q)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, ql = !1, Yl = null, Zi = 0, Ra = !1, bu = !1, Ca = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : w;
      n.Children = {
        map: lt,
        forEach: function(g, q, $) {
          lt(
            g,
            function() {
              q.apply(this, arguments);
            },
            $
          );
        },
        count: function(g) {
          var q = 0;
          return lt(g, function() {
            q++;
          }), q;
        },
        toArray: function(g) {
          return lt(g, function(q) {
            return q;
          }) || [];
        },
        only: function(g) {
          if (!Vt(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      }, n.Component = y, n.Fragment = ue, n.Profiler = je, n.PureComponent = x, n.StrictMode = Me, n.Suspense = Ge, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Yt, n.act = function(g) {
        var q = Yt.actQueue, $ = Zi;
        Zi++;
        var ht = Yt.actQueue = q !== null ? q : [], zt = !1;
        try {
          var Ut = g();
        } catch (ee) {
          Yt.thrownErrors.push(ee);
        }
        if (0 < Yt.thrownErrors.length)
          throw bt(q, $), g = ct(Yt.thrownErrors), Yt.thrownErrors.length = 0, g;
        if (Ut !== null && typeof Ut == "object" && typeof Ut.then == "function") {
          var Mt = Ut;
          return Ca(function() {
            zt || Ra || (Ra = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(ee, Ve) {
              zt = !0, Mt.then(
                function(on) {
                  if (bt(q, $), $ === 0) {
                    try {
                      Dt(ht), w(function() {
                        return vt(
                          on,
                          ee,
                          Ve
                        );
                      });
                    } catch (Ee) {
                      Yt.thrownErrors.push(Ee);
                    }
                    if (0 < Yt.thrownErrors.length) {
                      var Ke = ct(
                        Yt.thrownErrors
                      );
                      Yt.thrownErrors.length = 0, Ve(Ke);
                    }
                  } else ee(on);
                },
                function(on) {
                  bt(q, $), 0 < Yt.thrownErrors.length && (on = ct(
                    Yt.thrownErrors
                  ), Yt.thrownErrors.length = 0), Ve(on);
                }
              );
            }
          };
        }
        var de = Ut;
        if (bt(q, $), $ === 0 && (Dt(ht), ht.length !== 0 && Ca(function() {
          zt || Ra || (Ra = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Yt.actQueue = null), 0 < Yt.thrownErrors.length)
          throw g = ct(Yt.thrownErrors), Yt.thrownErrors.length = 0, g;
        return {
          then: function(ee, Ve) {
            zt = !0, $ === 0 ? (Yt.actQueue = ht, w(function() {
              return vt(
                de,
                ee,
                Ve
              );
            })) : ee(de);
          }
        };
      }, n.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, n.cloneElement = function(g, q, $) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ht = xt({}, g.props), zt = g.key, Ut = g._owner;
        if (q != null) {
          var Mt;
          t: {
            if (pa.call(q, "ref") && (Mt = Object.getOwnPropertyDescriptor(
              q,
              "ref"
            ).get) && Mt.isReactWarning) {
              Mt = !1;
              break t;
            }
            Mt = q.ref !== void 0;
          }
          Mt && (Ut = k()), at(q) && (z(q.key), zt = "" + q.key);
          for (de in q)
            !pa.call(q, de) || de === "key" || de === "__self" || de === "__source" || de === "ref" && q.ref === void 0 || (ht[de] = q[de]);
        }
        var de = arguments.length - 2;
        if (de === 1) ht.children = $;
        else if (1 < de) {
          Mt = Array(de);
          for (var ee = 0; ee < de; ee++)
            Mt[ee] = arguments[ee + 2];
          ht.children = Mt;
        }
        for (ht = Tt(g.type, zt, void 0, void 0, Ut, ht), zt = 2; zt < arguments.length; zt++)
          Rt(arguments[zt], ht.type);
        return ht;
      }, n.createContext = function(g) {
        return g = {
          $$typeof: ve,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: ge,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, n.createElement = function(g, q, $) {
        if (R(g))
          for (var ht = 2; ht < arguments.length; ht++)
            Rt(arguments[ht], g);
        else {
          if (ht = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ht += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null) var zt = "null";
          else
            _e(g) ? zt = "array" : g !== void 0 && g.$$typeof === Ot ? (zt = "<" + (M(g.type) || "Unknown") + " />", ht = " Did you accidentally export a JSX literal instead of a component?") : zt = typeof g;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            zt,
            ht
          );
        }
        var Ut;
        if (ht = {}, zt = null, q != null)
          for (Ut in dl || !("__self" in q) || "key" in q || (dl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), at(q) && (z(q.key), zt = "" + q.key), q)
            pa.call(q, Ut) && Ut !== "key" && Ut !== "__self" && Ut !== "__source" && (ht[Ut] = q[Ut]);
        var Mt = arguments.length - 2;
        if (Mt === 1) ht.children = $;
        else if (1 < Mt) {
          for (var de = Array(Mt), ee = 0; ee < Mt; ee++)
            de[ee] = arguments[ee + 2];
          Object.freeze && Object.freeze(de), ht.children = de;
        }
        if (g && g.defaultProps)
          for (Ut in Mt = g.defaultProps, Mt)
            ht[Ut] === void 0 && (ht[Ut] = Mt[Ut]);
        return zt && P(
          ht,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        ), Tt(g, zt, void 0, void 0, k(), ht);
      }, n.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, n.forwardRef = function(g) {
        g != null && g.$$typeof === fe ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var q = { $$typeof: te, render: g }, $;
        return Object.defineProperty(q, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return $;
          },
          set: function(ht) {
            $ = ht, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ht }), g.displayName = ht);
          }
        }), q;
      }, n.isValidElement = Vt, n.lazy = function(g) {
        return {
          $$typeof: Ce,
          _payload: { _status: -1, _result: g },
          _init: ot
        };
      }, n.memo = function(g, q) {
        R(g) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), q = {
          $$typeof: fe,
          type: g,
          compare: q === void 0 ? null : q
        };
        var $;
        return Object.defineProperty(q, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return $;
          },
          set: function(ht) {
            $ = ht, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ht }), g.displayName = ht);
          }
        }), q;
      }, n.startTransition = function(g) {
        var q = Yt.T, $ = {};
        Yt.T = $, $._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var ht = g(), zt = Yt.S;
          zt !== null && zt($, ht), typeof ht == "object" && ht !== null && typeof ht.then == "function" && ht.then(N, di);
        } catch (Ut) {
          di(Ut);
        } finally {
          q === null && $._updatedFibers && (g = $._updatedFibers.size, $._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Yt.T = q;
        }
      }, n.unstable_useCacheRefresh = function() {
        return st().useCacheRefresh();
      }, n.use = function(g) {
        return st().use(g);
      }, n.useActionState = function(g, q, $) {
        return st().useActionState(
          g,
          q,
          $
        );
      }, n.useCallback = function(g, q) {
        return st().useCallback(g, q);
      }, n.useContext = function(g) {
        var q = st();
        return g.$$typeof === ge && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), q.useContext(g);
      }, n.useDebugValue = function(g, q) {
        return st().useDebugValue(g, q);
      }, n.useDeferredValue = function(g, q) {
        return st().useDeferredValue(g, q);
      }, n.useEffect = function(g, q) {
        return st().useEffect(g, q);
      }, n.useId = function() {
        return st().useId();
      }, n.useImperativeHandle = function(g, q, $) {
        return st().useImperativeHandle(g, q, $);
      }, n.useInsertionEffect = function(g, q) {
        return st().useInsertionEffect(g, q);
      }, n.useLayoutEffect = function(g, q) {
        return st().useLayoutEffect(g, q);
      }, n.useMemo = function(g, q) {
        return st().useMemo(g, q);
      }, n.useOptimistic = function(g, q) {
        return st().useOptimistic(g, q);
      }, n.useReducer = function(g, q, $) {
        return st().useReducer(g, q, $);
      }, n.useRef = function(g) {
        return st().useRef(g);
      }, n.useState = function(g) {
        return st().useState(g);
      }, n.useSyncExternalStore = function(g, q, $) {
        return st().useSyncExternalStore(
          g,
          q,
          $
        );
      }, n.useTransition = function() {
        return st().useTransition();
      }, n.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Id, Id.exports)), Id.exports;
}
process.env.NODE_ENV === "production" ? g0.exports = D2() : g0.exports = U2();
var Ct = g0.exports;
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const F1 = "163", E0 = 0, O2 = 1, wv = 1, H2 = 2, Wv = 100, Fv = 204, Pv = 205, Iv = 3, B2 = 0, P1 = 300, $v = 1e3, _p = 1001, kv = 1002, t1 = 1003, Lp = 1006, q2 = 1008, Y2 = 1009, V2 = 1014, I1 = 1015, j2 = 1016, G2 = 1020, Q2 = 1023, Fy = 1026, e1 = 1027, $1 = "", hc = "srgb", z0 = "srgb-linear", X2 = "display-p3", k1 = "display-p3-linear", x0 = "linear", n1 = "srgb", a1 = "rec709", l1 = "p3", Ef = 7680, i1 = 519, Z2 = 515, u1 = 35044, $d = 2e3, s1 = 2001;
class tm {
  addEventListener(n, u) {
    this._listeners === void 0 && (this._listeners = {});
    const o = this._listeners;
    o[n] === void 0 && (o[n] = []), o[n].indexOf(u) === -1 && o[n].push(u);
  }
  hasEventListener(n, u) {
    if (this._listeners === void 0) return !1;
    const o = this._listeners;
    return o[n] !== void 0 && o[n].indexOf(u) !== -1;
  }
  removeEventListener(n, u) {
    if (this._listeners === void 0) return;
    const h = this._listeners[n];
    if (h !== void 0) {
      const y = h.indexOf(u);
      y !== -1 && h.splice(y, 1);
    }
  }
  dispatchEvent(n) {
    if (this._listeners === void 0) return;
    const o = this._listeners[n.type];
    if (o !== void 0) {
      n.target = this;
      const h = o.slice(0);
      for (let y = 0, S = h.length; y < S; y++)
        h[y].call(this, n);
      n.target = null;
    }
  }
}
const Ta = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let c1 = 1234567;
const t2 = Math.PI / 180, e2 = 180 / Math.PI;
function Qf() {
  const T = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, u = Math.random() * 4294967295 | 0, o = Math.random() * 4294967295 | 0;
  return (Ta[T & 255] + Ta[T >> 8 & 255] + Ta[T >> 16 & 255] + Ta[T >> 24 & 255] + "-" + Ta[n & 255] + Ta[n >> 8 & 255] + "-" + Ta[n >> 16 & 15 | 64] + Ta[n >> 24 & 255] + "-" + Ta[u & 63 | 128] + Ta[u >> 8 & 255] + "-" + Ta[u >> 16 & 255] + Ta[u >> 24 & 255] + Ta[o & 255] + Ta[o >> 8 & 255] + Ta[o >> 16 & 255] + Ta[o >> 24 & 255]).toLowerCase();
}
function wa(T, n, u) {
  return Math.max(n, Math.min(u, T));
}
function M0(T, n) {
  return (T % n + n) % n;
}
function K2(T, n, u, o, h) {
  return o + (T - n) * (h - o) / (u - n);
}
function J2(T, n, u) {
  return T !== n ? (u - T) / (n - T) : 0;
}
function kd(T, n, u) {
  return (1 - u) * T + u * n;
}
function L2(T, n, u, o) {
  return kd(T, n, 1 - Math.exp(-u * o));
}
function w2(T, n = 1) {
  return n - Math.abs(M0(T, n * 2) - n);
}
function W2(T, n, u) {
  return T <= n ? 0 : T >= u ? 1 : (T = (T - n) / (u - n), T * T * (3 - 2 * T));
}
function F2(T, n, u) {
  return T <= n ? 0 : T >= u ? 1 : (T = (T - n) / (u - n), T * T * T * (T * (T * 6 - 15) + 10));
}
function P2(T, n) {
  return T + Math.floor(Math.random() * (n - T + 1));
}
function I2(T, n) {
  return T + Math.random() * (n - T);
}
function $2(T) {
  return T * (0.5 - Math.random());
}
function k2(T) {
  T !== void 0 && (c1 = T);
  let n = c1 += 1831565813;
  return n = Math.imul(n ^ n >>> 15, n | 1), n ^= n + Math.imul(n ^ n >>> 7, n | 61), ((n ^ n >>> 14) >>> 0) / 4294967296;
}
function tS(T) {
  return T * t2;
}
function eS(T) {
  return T * e2;
}
function nS(T) {
  return (T & T - 1) === 0 && T !== 0;
}
function aS(T) {
  return Math.pow(2, Math.ceil(Math.log(T) / Math.LN2));
}
function lS(T) {
  return Math.pow(2, Math.floor(Math.log(T) / Math.LN2));
}
function iS(T, n, u, o, h) {
  const y = Math.cos, S = Math.sin, x = y(u / 2), E = S(u / 2), z = y((n + o) / 2), M = S((n + o) / 2), R = y((n - o) / 2), C = S((n - o) / 2), A = y((o - n) / 2), U = S((o - n) / 2);
  switch (h) {
    case "XYX":
      T.set(x * M, E * R, E * C, x * z);
      break;
    case "YZY":
      T.set(E * C, x * M, E * R, x * z);
      break;
    case "ZXZ":
      T.set(E * R, E * C, x * M, x * z);
      break;
    case "XZX":
      T.set(x * M, E * U, E * A, x * z);
      break;
    case "YXY":
      T.set(E * A, x * M, E * U, x * z);
      break;
    case "ZYZ":
      T.set(E * U, E * A, x * M, x * z);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + h);
  }
}
function Bf(T, n) {
  switch (n.constructor) {
    case Float32Array:
      return T;
    case Uint32Array:
      return T / 4294967295;
    case Uint16Array:
      return T / 65535;
    case Uint8Array:
      return T / 255;
    case Int32Array:
      return Math.max(T / 2147483647, -1);
    case Int16Array:
      return Math.max(T / 32767, -1);
    case Int8Array:
      return Math.max(T / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function La(T, n) {
  switch (n.constructor) {
    case Float32Array:
      return T;
    case Uint32Array:
      return Math.round(T * 4294967295);
    case Uint16Array:
      return Math.round(T * 65535);
    case Uint8Array:
      return Math.round(T * 255);
    case Int32Array:
      return Math.round(T * 2147483647);
    case Int16Array:
      return Math.round(T * 32767);
    case Int8Array:
      return Math.round(T * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const n2 = {
  DEG2RAD: t2,
  RAD2DEG: e2,
  generateUUID: Qf,
  clamp: wa,
  euclideanModulo: M0,
  mapLinear: K2,
  inverseLerp: J2,
  lerp: kd,
  damp: L2,
  pingpong: w2,
  smoothstep: W2,
  smootherstep: F2,
  randInt: P2,
  randFloat: I2,
  randFloatSpread: $2,
  seededRandom: k2,
  degToRad: tS,
  radToDeg: eS,
  isPowerOfTwo: nS,
  ceilPowerOfTwo: aS,
  floorPowerOfTwo: lS,
  setQuaternionFromProperEuler: iS,
  normalize: La,
  denormalize: Bf
};
class re {
  constructor(n = 0, u = 0) {
    re.prototype.isVector2 = !0, this.x = n, this.y = u;
  }
  get width() {
    return this.x;
  }
  set width(n) {
    this.x = n;
  }
  get height() {
    return this.y;
  }
  set height(n) {
    this.y = n;
  }
  set(n, u) {
    return this.x = n, this.y = u, this;
  }
  setScalar(n) {
    return this.x = n, this.y = n, this;
  }
  setX(n) {
    return this.x = n, this;
  }
  setY(n) {
    return this.y = n, this;
  }
  setComponent(n, u) {
    switch (n) {
      case 0:
        this.x = u;
        break;
      case 1:
        this.y = u;
        break;
      default:
        throw new Error("index is out of range: " + n);
    }
    return this;
  }
  getComponent(n) {
    switch (n) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + n);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(n) {
    return this.x = n.x, this.y = n.y, this;
  }
  add(n) {
    return this.x += n.x, this.y += n.y, this;
  }
  addScalar(n) {
    return this.x += n, this.y += n, this;
  }
  addVectors(n, u) {
    return this.x = n.x + u.x, this.y = n.y + u.y, this;
  }
  addScaledVector(n, u) {
    return this.x += n.x * u, this.y += n.y * u, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this;
  }
  subVectors(n, u) {
    return this.x = n.x - u.x, this.y = n.y - u.y, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this;
  }
  divide(n) {
    return this.x /= n.x, this.y /= n.y, this;
  }
  divideScalar(n) {
    return this.multiplyScalar(1 / n);
  }
  applyMatrix3(n) {
    const u = this.x, o = this.y, h = n.elements;
    return this.x = h[0] * u + h[3] * o + h[6], this.y = h[1] * u + h[4] * o + h[7], this;
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this;
  }
  clamp(n, u) {
    return this.x = Math.max(n.x, Math.min(u.x, this.x)), this.y = Math.max(n.y, Math.min(u.y, this.y)), this;
  }
  clampScalar(n, u) {
    return this.x = Math.max(n, Math.min(u, this.x)), this.y = Math.max(n, Math.min(u, this.y)), this;
  }
  clampLength(n, u) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(Math.max(n, Math.min(u, o)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(n) {
    return this.x * n.x + this.y * n.y;
  }
  cross(n) {
    return this.x * n.y - this.y * n.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(n) {
    const u = Math.sqrt(this.lengthSq() * n.lengthSq());
    if (u === 0) return Math.PI / 2;
    const o = this.dot(n) / u;
    return Math.acos(wa(o, -1, 1));
  }
  distanceTo(n) {
    return Math.sqrt(this.distanceToSquared(n));
  }
  distanceToSquared(n) {
    const u = this.x - n.x, o = this.y - n.y;
    return u * u + o * o;
  }
  manhattanDistanceTo(n) {
    return Math.abs(this.x - n.x) + Math.abs(this.y - n.y);
  }
  setLength(n) {
    return this.normalize().multiplyScalar(n);
  }
  lerp(n, u) {
    return this.x += (n.x - this.x) * u, this.y += (n.y - this.y) * u, this;
  }
  lerpVectors(n, u, o) {
    return this.x = n.x + (u.x - n.x) * o, this.y = n.y + (u.y - n.y) * o, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y;
  }
  fromArray(n, u = 0) {
    return this.x = n[u], this.y = n[u + 1], this;
  }
  toArray(n = [], u = 0) {
    return n[u] = this.x, n[u + 1] = this.y, n;
  }
  fromBufferAttribute(n, u) {
    return this.x = n.getX(u), this.y = n.getY(u), this;
  }
  rotateAround(n, u) {
    const o = Math.cos(u), h = Math.sin(u), y = this.x - n.x, S = this.y - n.y;
    return this.x = y * o - S * h + n.x, this.y = y * h + S * o + n.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class dc {
  constructor(n, u, o, h, y, S, x, E, z) {
    dc.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], n !== void 0 && this.set(n, u, o, h, y, S, x, E, z);
  }
  set(n, u, o, h, y, S, x, E, z) {
    const M = this.elements;
    return M[0] = n, M[1] = h, M[2] = x, M[3] = u, M[4] = y, M[5] = E, M[6] = o, M[7] = S, M[8] = z, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(n) {
    const u = this.elements, o = n.elements;
    return u[0] = o[0], u[1] = o[1], u[2] = o[2], u[3] = o[3], u[4] = o[4], u[5] = o[5], u[6] = o[6], u[7] = o[7], u[8] = o[8], this;
  }
  extractBasis(n, u, o) {
    return n.setFromMatrix3Column(this, 0), u.setFromMatrix3Column(this, 1), o.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(n) {
    const u = n.elements;
    return this.set(
      u[0],
      u[4],
      u[8],
      u[1],
      u[5],
      u[9],
      u[2],
      u[6],
      u[10]
    ), this;
  }
  multiply(n) {
    return this.multiplyMatrices(this, n);
  }
  premultiply(n) {
    return this.multiplyMatrices(n, this);
  }
  multiplyMatrices(n, u) {
    const o = n.elements, h = u.elements, y = this.elements, S = o[0], x = o[3], E = o[6], z = o[1], M = o[4], R = o[7], C = o[2], A = o[5], U = o[8], X = h[0], J = h[3], K = h[6], k = h[1], at = h[4], P = h[7], ut = h[2], Tt = h[5], Nt = h[8];
    return y[0] = S * X + x * k + E * ut, y[3] = S * J + x * at + E * Tt, y[6] = S * K + x * P + E * Nt, y[1] = z * X + M * k + R * ut, y[4] = z * J + M * at + R * Tt, y[7] = z * K + M * P + R * Nt, y[2] = C * X + A * k + U * ut, y[5] = C * J + A * at + U * Tt, y[8] = C * K + A * P + U * Nt, this;
  }
  multiplyScalar(n) {
    const u = this.elements;
    return u[0] *= n, u[3] *= n, u[6] *= n, u[1] *= n, u[4] *= n, u[7] *= n, u[2] *= n, u[5] *= n, u[8] *= n, this;
  }
  determinant() {
    const n = this.elements, u = n[0], o = n[1], h = n[2], y = n[3], S = n[4], x = n[5], E = n[6], z = n[7], M = n[8];
    return u * S * M - u * x * z - o * y * M + o * x * E + h * y * z - h * S * E;
  }
  invert() {
    const n = this.elements, u = n[0], o = n[1], h = n[2], y = n[3], S = n[4], x = n[5], E = n[6], z = n[7], M = n[8], R = M * S - x * z, C = x * E - M * y, A = z * y - S * E, U = u * R + o * C + h * A;
    if (U === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const X = 1 / U;
    return n[0] = R * X, n[1] = (h * z - M * o) * X, n[2] = (x * o - h * S) * X, n[3] = C * X, n[4] = (M * u - h * E) * X, n[5] = (h * y - x * u) * X, n[6] = A * X, n[7] = (o * E - z * u) * X, n[8] = (S * u - o * y) * X, this;
  }
  transpose() {
    let n;
    const u = this.elements;
    return n = u[1], u[1] = u[3], u[3] = n, n = u[2], u[2] = u[6], u[6] = n, n = u[5], u[5] = u[7], u[7] = n, this;
  }
  getNormalMatrix(n) {
    return this.setFromMatrix4(n).invert().transpose();
  }
  transposeIntoArray(n) {
    const u = this.elements;
    return n[0] = u[0], n[1] = u[3], n[2] = u[6], n[3] = u[1], n[4] = u[4], n[5] = u[7], n[6] = u[2], n[7] = u[5], n[8] = u[8], this;
  }
  setUvTransform(n, u, o, h, y, S, x) {
    const E = Math.cos(y), z = Math.sin(y);
    return this.set(
      o * E,
      o * z,
      -o * (E * S + z * x) + S + n,
      -h * z,
      h * E,
      -h * (-z * S + E * x) + x + u,
      0,
      0,
      1
    ), this;
  }
  //
  scale(n, u) {
    return this.premultiply(Py.makeScale(n, u)), this;
  }
  rotate(n) {
    return this.premultiply(Py.makeRotation(-n)), this;
  }
  translate(n, u) {
    return this.premultiply(Py.makeTranslation(n, u)), this;
  }
  // for 2D Transforms
  makeTranslation(n, u) {
    return n.isVector2 ? this.set(
      1,
      0,
      n.x,
      0,
      1,
      n.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      n,
      0,
      1,
      u,
      0,
      0,
      1
    ), this;
  }
  makeRotation(n) {
    const u = Math.cos(n), o = Math.sin(n);
    return this.set(
      u,
      -o,
      0,
      o,
      u,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(n, u) {
    return this.set(
      n,
      0,
      0,
      0,
      u,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(n) {
    const u = this.elements, o = n.elements;
    for (let h = 0; h < 9; h++)
      if (u[h] !== o[h]) return !1;
    return !0;
  }
  fromArray(n, u = 0) {
    for (let o = 0; o < 9; o++)
      this.elements[o] = n[o + u];
    return this;
  }
  toArray(n = [], u = 0) {
    const o = this.elements;
    return n[u] = o[0], n[u + 1] = o[1], n[u + 2] = o[2], n[u + 3] = o[3], n[u + 4] = o[4], n[u + 5] = o[5], n[u + 6] = o[6], n[u + 7] = o[7], n[u + 8] = o[8], n;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Py = /* @__PURE__ */ new dc();
function uS(T) {
  for (let n = T.length - 1; n >= 0; --n)
    if (T[n] >= 65535) return !0;
  return !1;
}
function o1(T) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", T);
}
const r1 = {};
function sS(T) {
  T in r1 || (r1[T] = !0, console.warn(T));
}
const f1 = /* @__PURE__ */ new dc().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), h1 = /* @__PURE__ */ new dc().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), bp = {
  [z0]: {
    transfer: x0,
    primaries: a1,
    toReference: (T) => T,
    fromReference: (T) => T
  },
  [hc]: {
    transfer: n1,
    primaries: a1,
    toReference: (T) => T.convertSRGBToLinear(),
    fromReference: (T) => T.convertLinearToSRGB()
  },
  [k1]: {
    transfer: x0,
    primaries: l1,
    toReference: (T) => T.applyMatrix3(h1),
    fromReference: (T) => T.applyMatrix3(f1)
  },
  [X2]: {
    transfer: n1,
    primaries: l1,
    toReference: (T) => T.convertSRGBToLinear().applyMatrix3(h1),
    fromReference: (T) => T.applyMatrix3(f1).convertLinearToSRGB()
  }
}, cS = /* @__PURE__ */ new Set([z0, k1]), Vi = {
  enabled: !0,
  _workingColorSpace: z0,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(T) {
    if (!cS.has(T))
      throw new Error(`Unsupported working color space, "${T}".`);
    this._workingColorSpace = T;
  },
  convert: function(T, n, u) {
    if (this.enabled === !1 || n === u || !n || !u)
      return T;
    const o = bp[n].toReference, h = bp[u].fromReference;
    return h(o(T));
  },
  fromWorkingColorSpace: function(T, n) {
    return this.convert(T, this._workingColorSpace, n);
  },
  toWorkingColorSpace: function(T, n) {
    return this.convert(T, n, this._workingColorSpace);
  },
  getPrimaries: function(T) {
    return bp[T].primaries;
  },
  getTransfer: function(T) {
    return T === $1 ? x0 : bp[T].transfer;
  }
};
function qf(T) {
  return T < 0.04045 ? T * 0.0773993808 : Math.pow(T * 0.9478672986 + 0.0521327014, 2.4);
}
function Iy(T) {
  return T < 31308e-7 ? T * 12.92 : 1.055 * Math.pow(T, 0.41666) - 0.055;
}
let xf;
class oS {
  static getDataURL(n) {
    if (/^data:/i.test(n.src) || typeof HTMLCanvasElement > "u")
      return n.src;
    let u;
    if (n instanceof HTMLCanvasElement)
      u = n;
    else {
      xf === void 0 && (xf = o1("canvas")), xf.width = n.width, xf.height = n.height;
      const o = xf.getContext("2d");
      n instanceof ImageData ? o.putImageData(n, 0, 0) : o.drawImage(n, 0, 0, n.width, n.height), u = xf;
    }
    return u.width > 2048 || u.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", n), u.toDataURL("image/jpeg", 0.6)) : u.toDataURL("image/png");
  }
  static sRGBToLinear(n) {
    if (typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap) {
      const u = o1("canvas");
      u.width = n.width, u.height = n.height;
      const o = u.getContext("2d");
      o.drawImage(n, 0, 0, n.width, n.height);
      const h = o.getImageData(0, 0, n.width, n.height), y = h.data;
      for (let S = 0; S < y.length; S++)
        y[S] = qf(y[S] / 255) * 255;
      return o.putImageData(h, 0, 0), u;
    } else if (n.data) {
      const u = n.data.slice(0);
      for (let o = 0; o < u.length; o++)
        u instanceof Uint8Array || u instanceof Uint8ClampedArray ? u[o] = Math.floor(qf(u[o] / 255) * 255) : u[o] = qf(u[o]);
      return {
        data: u,
        width: n.width,
        height: n.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), n;
  }
}
let rS = 0;
class a2 {
  constructor(n = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: rS++ }), this.uuid = Qf(), this.data = n, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(n) {
    n === !0 && this.version++;
  }
  toJSON(n) {
    const u = n === void 0 || typeof n == "string";
    if (!u && n.images[this.uuid] !== void 0)
      return n.images[this.uuid];
    const o = {
      uuid: this.uuid,
      url: ""
    }, h = this.data;
    if (h !== null) {
      let y;
      if (Array.isArray(h)) {
        y = [];
        for (let S = 0, x = h.length; S < x; S++)
          h[S].isDataTexture ? y.push($y(h[S].image)) : y.push($y(h[S]));
      } else
        y = $y(h);
      o.url = y;
    }
    return u || (n.images[this.uuid] = o), o;
  }
}
function $y(T) {
  return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap ? oS.getDataURL(T) : T.data ? {
    data: Array.from(T.data),
    width: T.width,
    height: T.height,
    type: T.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let fS = 0;
class ds extends tm {
  constructor(n = ds.DEFAULT_IMAGE, u = ds.DEFAULT_MAPPING, o = _p, h = _p, y = Lp, S = q2, x = Q2, E = Y2, z = ds.DEFAULT_ANISOTROPY, M = $1) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: fS++ }), this.uuid = Qf(), this.name = "", this.source = new a2(n), this.mipmaps = [], this.mapping = u, this.channel = 0, this.wrapS = o, this.wrapT = h, this.magFilter = y, this.minFilter = S, this.anisotropy = z, this.format = x, this.internalFormat = null, this.type = E, this.offset = new re(0, 0), this.repeat = new re(1, 1), this.center = new re(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new dc(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = M, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(n = null) {
    this.source.data = n;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    return this.name = n.name, this.source = n.source, this.mipmaps = n.mipmaps.slice(0), this.mapping = n.mapping, this.channel = n.channel, this.wrapS = n.wrapS, this.wrapT = n.wrapT, this.magFilter = n.magFilter, this.minFilter = n.minFilter, this.anisotropy = n.anisotropy, this.format = n.format, this.internalFormat = n.internalFormat, this.type = n.type, this.offset.copy(n.offset), this.repeat.copy(n.repeat), this.center.copy(n.center), this.rotation = n.rotation, this.matrixAutoUpdate = n.matrixAutoUpdate, this.matrix.copy(n.matrix), this.generateMipmaps = n.generateMipmaps, this.premultiplyAlpha = n.premultiplyAlpha, this.flipY = n.flipY, this.unpackAlignment = n.unpackAlignment, this.colorSpace = n.colorSpace, this.userData = JSON.parse(JSON.stringify(n.userData)), this.needsUpdate = !0, this;
  }
  toJSON(n) {
    const u = n === void 0 || typeof n == "string";
    if (!u && n.textures[this.uuid] !== void 0)
      return n.textures[this.uuid];
    const o = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(n).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (o.userData = this.userData), u || (n.textures[this.uuid] = o), o;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(n) {
    if (this.mapping !== P1) return n;
    if (n.applyMatrix3(this.matrix), n.x < 0 || n.x > 1)
      switch (this.wrapS) {
        case $v:
          n.x = n.x - Math.floor(n.x);
          break;
        case _p:
          n.x = n.x < 0 ? 0 : 1;
          break;
        case kv:
          Math.abs(Math.floor(n.x) % 2) === 1 ? n.x = Math.ceil(n.x) - n.x : n.x = n.x - Math.floor(n.x);
          break;
      }
    if (n.y < 0 || n.y > 1)
      switch (this.wrapT) {
        case $v:
          n.y = n.y - Math.floor(n.y);
          break;
        case _p:
          n.y = n.y < 0 ? 0 : 1;
          break;
        case kv:
          Math.abs(Math.floor(n.y) % 2) === 1 ? n.y = Math.ceil(n.y) - n.y : n.y = n.y - Math.floor(n.y);
          break;
      }
    return this.flipY && (n.y = 1 - n.y), n;
  }
  set needsUpdate(n) {
    n === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(n) {
    n === !0 && this.pmremVersion++;
  }
}
ds.DEFAULT_IMAGE = null;
ds.DEFAULT_MAPPING = P1;
ds.DEFAULT_ANISOTROPY = 1;
class jf {
  constructor(n = 0, u = 0, o = 0, h = 1) {
    jf.prototype.isVector4 = !0, this.x = n, this.y = u, this.z = o, this.w = h;
  }
  get width() {
    return this.z;
  }
  set width(n) {
    this.z = n;
  }
  get height() {
    return this.w;
  }
  set height(n) {
    this.w = n;
  }
  set(n, u, o, h) {
    return this.x = n, this.y = u, this.z = o, this.w = h, this;
  }
  setScalar(n) {
    return this.x = n, this.y = n, this.z = n, this.w = n, this;
  }
  setX(n) {
    return this.x = n, this;
  }
  setY(n) {
    return this.y = n, this;
  }
  setZ(n) {
    return this.z = n, this;
  }
  setW(n) {
    return this.w = n, this;
  }
  setComponent(n, u) {
    switch (n) {
      case 0:
        this.x = u;
        break;
      case 1:
        this.y = u;
        break;
      case 2:
        this.z = u;
        break;
      case 3:
        this.w = u;
        break;
      default:
        throw new Error("index is out of range: " + n);
    }
    return this;
  }
  getComponent(n) {
    switch (n) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + n);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(n) {
    return this.x = n.x, this.y = n.y, this.z = n.z, this.w = n.w !== void 0 ? n.w : 1, this;
  }
  add(n) {
    return this.x += n.x, this.y += n.y, this.z += n.z, this.w += n.w, this;
  }
  addScalar(n) {
    return this.x += n, this.y += n, this.z += n, this.w += n, this;
  }
  addVectors(n, u) {
    return this.x = n.x + u.x, this.y = n.y + u.y, this.z = n.z + u.z, this.w = n.w + u.w, this;
  }
  addScaledVector(n, u) {
    return this.x += n.x * u, this.y += n.y * u, this.z += n.z * u, this.w += n.w * u, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this.z -= n.z, this.w -= n.w, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this.z -= n, this.w -= n, this;
  }
  subVectors(n, u) {
    return this.x = n.x - u.x, this.y = n.y - u.y, this.z = n.z - u.z, this.w = n.w - u.w, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this.z *= n.z, this.w *= n.w, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this.z *= n, this.w *= n, this;
  }
  applyMatrix4(n) {
    const u = this.x, o = this.y, h = this.z, y = this.w, S = n.elements;
    return this.x = S[0] * u + S[4] * o + S[8] * h + S[12] * y, this.y = S[1] * u + S[5] * o + S[9] * h + S[13] * y, this.z = S[2] * u + S[6] * o + S[10] * h + S[14] * y, this.w = S[3] * u + S[7] * o + S[11] * h + S[15] * y, this;
  }
  divideScalar(n) {
    return this.multiplyScalar(1 / n);
  }
  setAxisAngleFromQuaternion(n) {
    this.w = 2 * Math.acos(n.w);
    const u = Math.sqrt(1 - n.w * n.w);
    return u < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = n.x / u, this.y = n.y / u, this.z = n.z / u), this;
  }
  setAxisAngleFromRotationMatrix(n) {
    let u, o, h, y;
    const E = n.elements, z = E[0], M = E[4], R = E[8], C = E[1], A = E[5], U = E[9], X = E[2], J = E[6], K = E[10];
    if (Math.abs(M - C) < 0.01 && Math.abs(R - X) < 0.01 && Math.abs(U - J) < 0.01) {
      if (Math.abs(M + C) < 0.1 && Math.abs(R + X) < 0.1 && Math.abs(U + J) < 0.1 && Math.abs(z + A + K - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      u = Math.PI;
      const at = (z + 1) / 2, P = (A + 1) / 2, ut = (K + 1) / 2, Tt = (M + C) / 4, Nt = (R + X) / 4, Rt = (U + J) / 4;
      return at > P && at > ut ? at < 0.01 ? (o = 0, h = 0.707106781, y = 0.707106781) : (o = Math.sqrt(at), h = Tt / o, y = Nt / o) : P > ut ? P < 0.01 ? (o = 0.707106781, h = 0, y = 0.707106781) : (h = Math.sqrt(P), o = Tt / h, y = Rt / h) : ut < 0.01 ? (o = 0.707106781, h = 0.707106781, y = 0) : (y = Math.sqrt(ut), o = Nt / y, h = Rt / y), this.set(o, h, y, u), this;
    }
    let k = Math.sqrt((J - U) * (J - U) + (R - X) * (R - X) + (C - M) * (C - M));
    return Math.abs(k) < 1e-3 && (k = 1), this.x = (J - U) / k, this.y = (R - X) / k, this.z = (C - M) / k, this.w = Math.acos((z + A + K - 1) / 2), this;
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this.z = Math.min(this.z, n.z), this.w = Math.min(this.w, n.w), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this.z = Math.max(this.z, n.z), this.w = Math.max(this.w, n.w), this;
  }
  clamp(n, u) {
    return this.x = Math.max(n.x, Math.min(u.x, this.x)), this.y = Math.max(n.y, Math.min(u.y, this.y)), this.z = Math.max(n.z, Math.min(u.z, this.z)), this.w = Math.max(n.w, Math.min(u.w, this.w)), this;
  }
  clampScalar(n, u) {
    return this.x = Math.max(n, Math.min(u, this.x)), this.y = Math.max(n, Math.min(u, this.y)), this.z = Math.max(n, Math.min(u, this.z)), this.w = Math.max(n, Math.min(u, this.w)), this;
  }
  clampLength(n, u) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(Math.max(n, Math.min(u, o)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(n) {
    return this.x * n.x + this.y * n.y + this.z * n.z + this.w * n.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(n) {
    return this.normalize().multiplyScalar(n);
  }
  lerp(n, u) {
    return this.x += (n.x - this.x) * u, this.y += (n.y - this.y) * u, this.z += (n.z - this.z) * u, this.w += (n.w - this.w) * u, this;
  }
  lerpVectors(n, u, o) {
    return this.x = n.x + (u.x - n.x) * o, this.y = n.y + (u.y - n.y) * o, this.z = n.z + (u.z - n.z) * o, this.w = n.w + (u.w - n.w) * o, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y && n.z === this.z && n.w === this.w;
  }
  fromArray(n, u = 0) {
    return this.x = n[u], this.y = n[u + 1], this.z = n[u + 2], this.w = n[u + 3], this;
  }
  toArray(n = [], u = 0) {
    return n[u] = this.x, n[u + 1] = this.y, n[u + 2] = this.z, n[u + 3] = this.w, n;
  }
  fromBufferAttribute(n, u) {
    return this.x = n.getX(u), this.y = n.getY(u), this.z = n.getZ(u), this.w = n.getW(u), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class hS extends tm {
  constructor(n = 1, u = 1, o = {}) {
    super(), this.isRenderTarget = !0, this.width = n, this.height = u, this.depth = 1, this.scissor = new jf(0, 0, n, u), this.scissorTest = !1, this.viewport = new jf(0, 0, n, u);
    const h = { width: n, height: u, depth: 1 };
    o = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Lp,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0,
      count: 1
    }, o);
    const y = new ds(h, o.mapping, o.wrapS, o.wrapT, o.magFilter, o.minFilter, o.format, o.type, o.anisotropy, o.colorSpace);
    y.flipY = !1, y.generateMipmaps = o.generateMipmaps, y.internalFormat = o.internalFormat, this.textures = [];
    const S = o.count;
    for (let x = 0; x < S; x++)
      this.textures[x] = y.clone(), this.textures[x].isRenderTargetTexture = !0;
    this.depthBuffer = o.depthBuffer, this.stencilBuffer = o.stencilBuffer, this.depthTexture = o.depthTexture, this.samples = o.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(n) {
    this.textures[0] = n;
  }
  setSize(n, u, o = 1) {
    if (this.width !== n || this.height !== u || this.depth !== o) {
      this.width = n, this.height = u, this.depth = o;
      for (let h = 0, y = this.textures.length; h < y; h++)
        this.textures[h].image.width = n, this.textures[h].image.height = u, this.textures[h].image.depth = o;
      this.dispose();
    }
    this.viewport.set(0, 0, n, u), this.scissor.set(0, 0, n, u);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.width = n.width, this.height = n.height, this.depth = n.depth, this.scissor.copy(n.scissor), this.scissorTest = n.scissorTest, this.viewport.copy(n.viewport), this.textures.length = 0;
    for (let o = 0, h = n.textures.length; o < h; o++)
      this.textures[o] = n.textures[o].clone(), this.textures[o].isRenderTargetTexture = !0;
    const u = Object.assign({}, n.texture.image);
    return this.texture.source = new a2(u), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, n.depthTexture !== null && (this.depthTexture = n.depthTexture.clone()), this.samples = n.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class l2 extends hS {
  constructor(n = 1, u = 1, o = {}) {
    super(n, u, o), this.isWebGLRenderTarget = !0;
  }
}
class em {
  constructor(n = 0, u = 0, o = 0, h = 1) {
    this.isQuaternion = !0, this._x = n, this._y = u, this._z = o, this._w = h;
  }
  static slerpFlat(n, u, o, h, y, S, x) {
    let E = o[h + 0], z = o[h + 1], M = o[h + 2], R = o[h + 3];
    const C = y[S + 0], A = y[S + 1], U = y[S + 2], X = y[S + 3];
    if (x === 0) {
      n[u + 0] = E, n[u + 1] = z, n[u + 2] = M, n[u + 3] = R;
      return;
    }
    if (x === 1) {
      n[u + 0] = C, n[u + 1] = A, n[u + 2] = U, n[u + 3] = X;
      return;
    }
    if (R !== X || E !== C || z !== A || M !== U) {
      let J = 1 - x;
      const K = E * C + z * A + M * U + R * X, k = K >= 0 ? 1 : -1, at = 1 - K * K;
      if (at > Number.EPSILON) {
        const ut = Math.sqrt(at), Tt = Math.atan2(ut, K * k);
        J = Math.sin(J * Tt) / ut, x = Math.sin(x * Tt) / ut;
      }
      const P = x * k;
      if (E = E * J + C * P, z = z * J + A * P, M = M * J + U * P, R = R * J + X * P, J === 1 - x) {
        const ut = 1 / Math.sqrt(E * E + z * z + M * M + R * R);
        E *= ut, z *= ut, M *= ut, R *= ut;
      }
    }
    n[u] = E, n[u + 1] = z, n[u + 2] = M, n[u + 3] = R;
  }
  static multiplyQuaternionsFlat(n, u, o, h, y, S) {
    const x = o[h], E = o[h + 1], z = o[h + 2], M = o[h + 3], R = y[S], C = y[S + 1], A = y[S + 2], U = y[S + 3];
    return n[u] = x * U + M * R + E * A - z * C, n[u + 1] = E * U + M * C + z * R - x * A, n[u + 2] = z * U + M * A + x * C - E * R, n[u + 3] = M * U - x * R - E * C - z * A, n;
  }
  get x() {
    return this._x;
  }
  set x(n) {
    this._x = n, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(n) {
    this._y = n, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(n) {
    this._z = n, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(n) {
    this._w = n, this._onChangeCallback();
  }
  set(n, u, o, h) {
    return this._x = n, this._y = u, this._z = o, this._w = h, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(n) {
    return this._x = n.x, this._y = n.y, this._z = n.z, this._w = n.w, this._onChangeCallback(), this;
  }
  setFromEuler(n, u = !0) {
    const o = n._x, h = n._y, y = n._z, S = n._order, x = Math.cos, E = Math.sin, z = x(o / 2), M = x(h / 2), R = x(y / 2), C = E(o / 2), A = E(h / 2), U = E(y / 2);
    switch (S) {
      case "XYZ":
        this._x = C * M * R + z * A * U, this._y = z * A * R - C * M * U, this._z = z * M * U + C * A * R, this._w = z * M * R - C * A * U;
        break;
      case "YXZ":
        this._x = C * M * R + z * A * U, this._y = z * A * R - C * M * U, this._z = z * M * U - C * A * R, this._w = z * M * R + C * A * U;
        break;
      case "ZXY":
        this._x = C * M * R - z * A * U, this._y = z * A * R + C * M * U, this._z = z * M * U + C * A * R, this._w = z * M * R - C * A * U;
        break;
      case "ZYX":
        this._x = C * M * R - z * A * U, this._y = z * A * R + C * M * U, this._z = z * M * U - C * A * R, this._w = z * M * R + C * A * U;
        break;
      case "YZX":
        this._x = C * M * R + z * A * U, this._y = z * A * R + C * M * U, this._z = z * M * U - C * A * R, this._w = z * M * R - C * A * U;
        break;
      case "XZY":
        this._x = C * M * R - z * A * U, this._y = z * A * R - C * M * U, this._z = z * M * U + C * A * R, this._w = z * M * R + C * A * U;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + S);
    }
    return u === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(n, u) {
    const o = u / 2, h = Math.sin(o);
    return this._x = n.x * h, this._y = n.y * h, this._z = n.z * h, this._w = Math.cos(o), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(n) {
    const u = n.elements, o = u[0], h = u[4], y = u[8], S = u[1], x = u[5], E = u[9], z = u[2], M = u[6], R = u[10], C = o + x + R;
    if (C > 0) {
      const A = 0.5 / Math.sqrt(C + 1);
      this._w = 0.25 / A, this._x = (M - E) * A, this._y = (y - z) * A, this._z = (S - h) * A;
    } else if (o > x && o > R) {
      const A = 2 * Math.sqrt(1 + o - x - R);
      this._w = (M - E) / A, this._x = 0.25 * A, this._y = (h + S) / A, this._z = (y + z) / A;
    } else if (x > R) {
      const A = 2 * Math.sqrt(1 + x - o - R);
      this._w = (y - z) / A, this._x = (h + S) / A, this._y = 0.25 * A, this._z = (E + M) / A;
    } else {
      const A = 2 * Math.sqrt(1 + R - o - x);
      this._w = (S - h) / A, this._x = (y + z) / A, this._y = (E + M) / A, this._z = 0.25 * A;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(n, u) {
    let o = n.dot(u) + 1;
    return o < Number.EPSILON ? (o = 0, Math.abs(n.x) > Math.abs(n.z) ? (this._x = -n.y, this._y = n.x, this._z = 0, this._w = o) : (this._x = 0, this._y = -n.z, this._z = n.y, this._w = o)) : (this._x = n.y * u.z - n.z * u.y, this._y = n.z * u.x - n.x * u.z, this._z = n.x * u.y - n.y * u.x, this._w = o), this.normalize();
  }
  angleTo(n) {
    return 2 * Math.acos(Math.abs(wa(this.dot(n), -1, 1)));
  }
  rotateTowards(n, u) {
    const o = this.angleTo(n);
    if (o === 0) return this;
    const h = Math.min(1, u / o);
    return this.slerp(n, h), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(n) {
    return this._x * n._x + this._y * n._y + this._z * n._z + this._w * n._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let n = this.length();
    return n === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (n = 1 / n, this._x = this._x * n, this._y = this._y * n, this._z = this._z * n, this._w = this._w * n), this._onChangeCallback(), this;
  }
  multiply(n) {
    return this.multiplyQuaternions(this, n);
  }
  premultiply(n) {
    return this.multiplyQuaternions(n, this);
  }
  multiplyQuaternions(n, u) {
    const o = n._x, h = n._y, y = n._z, S = n._w, x = u._x, E = u._y, z = u._z, M = u._w;
    return this._x = o * M + S * x + h * z - y * E, this._y = h * M + S * E + y * x - o * z, this._z = y * M + S * z + o * E - h * x, this._w = S * M - o * x - h * E - y * z, this._onChangeCallback(), this;
  }
  slerp(n, u) {
    if (u === 0) return this;
    if (u === 1) return this.copy(n);
    const o = this._x, h = this._y, y = this._z, S = this._w;
    let x = S * n._w + o * n._x + h * n._y + y * n._z;
    if (x < 0 ? (this._w = -n._w, this._x = -n._x, this._y = -n._y, this._z = -n._z, x = -x) : this.copy(n), x >= 1)
      return this._w = S, this._x = o, this._y = h, this._z = y, this;
    const E = 1 - x * x;
    if (E <= Number.EPSILON) {
      const A = 1 - u;
      return this._w = A * S + u * this._w, this._x = A * o + u * this._x, this._y = A * h + u * this._y, this._z = A * y + u * this._z, this.normalize(), this;
    }
    const z = Math.sqrt(E), M = Math.atan2(z, x), R = Math.sin((1 - u) * M) / z, C = Math.sin(u * M) / z;
    return this._w = S * R + this._w * C, this._x = o * R + this._x * C, this._y = h * R + this._y * C, this._z = y * R + this._z * C, this._onChangeCallback(), this;
  }
  slerpQuaternions(n, u, o) {
    return this.copy(n).slerp(u, o);
  }
  random() {
    const n = 2 * Math.PI * Math.random(), u = 2 * Math.PI * Math.random(), o = Math.random(), h = Math.sqrt(1 - o), y = Math.sqrt(o);
    return this.set(
      h * Math.sin(n),
      h * Math.cos(n),
      y * Math.sin(u),
      y * Math.cos(u)
    );
  }
  equals(n) {
    return n._x === this._x && n._y === this._y && n._z === this._z && n._w === this._w;
  }
  fromArray(n, u = 0) {
    return this._x = n[u], this._y = n[u + 1], this._z = n[u + 2], this._w = n[u + 3], this._onChangeCallback(), this;
  }
  toArray(n = [], u = 0) {
    return n[u] = this._x, n[u + 1] = this._y, n[u + 2] = this._z, n[u + 3] = this._w, n;
  }
  fromBufferAttribute(n, u) {
    return this._x = n.getX(u), this._y = n.getY(u), this._z = n.getZ(u), this._w = n.getW(u), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(n) {
    return this._onChangeCallback = n, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class nt {
  constructor(n = 0, u = 0, o = 0) {
    nt.prototype.isVector3 = !0, this.x = n, this.y = u, this.z = o;
  }
  set(n, u, o) {
    return o === void 0 && (o = this.z), this.x = n, this.y = u, this.z = o, this;
  }
  setScalar(n) {
    return this.x = n, this.y = n, this.z = n, this;
  }
  setX(n) {
    return this.x = n, this;
  }
  setY(n) {
    return this.y = n, this;
  }
  setZ(n) {
    return this.z = n, this;
  }
  setComponent(n, u) {
    switch (n) {
      case 0:
        this.x = u;
        break;
      case 1:
        this.y = u;
        break;
      case 2:
        this.z = u;
        break;
      default:
        throw new Error("index is out of range: " + n);
    }
    return this;
  }
  getComponent(n) {
    switch (n) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + n);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(n) {
    return this.x = n.x, this.y = n.y, this.z = n.z, this;
  }
  add(n) {
    return this.x += n.x, this.y += n.y, this.z += n.z, this;
  }
  addScalar(n) {
    return this.x += n, this.y += n, this.z += n, this;
  }
  addVectors(n, u) {
    return this.x = n.x + u.x, this.y = n.y + u.y, this.z = n.z + u.z, this;
  }
  addScaledVector(n, u) {
    return this.x += n.x * u, this.y += n.y * u, this.z += n.z * u, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this.z -= n.z, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this.z -= n, this;
  }
  subVectors(n, u) {
    return this.x = n.x - u.x, this.y = n.y - u.y, this.z = n.z - u.z, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this.z *= n.z, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this.z *= n, this;
  }
  multiplyVectors(n, u) {
    return this.x = n.x * u.x, this.y = n.y * u.y, this.z = n.z * u.z, this;
  }
  applyEuler(n) {
    return this.applyQuaternion(d1.setFromEuler(n));
  }
  applyAxisAngle(n, u) {
    return this.applyQuaternion(d1.setFromAxisAngle(n, u));
  }
  applyMatrix3(n) {
    const u = this.x, o = this.y, h = this.z, y = n.elements;
    return this.x = y[0] * u + y[3] * o + y[6] * h, this.y = y[1] * u + y[4] * o + y[7] * h, this.z = y[2] * u + y[5] * o + y[8] * h, this;
  }
  applyNormalMatrix(n) {
    return this.applyMatrix3(n).normalize();
  }
  applyMatrix4(n) {
    const u = this.x, o = this.y, h = this.z, y = n.elements, S = 1 / (y[3] * u + y[7] * o + y[11] * h + y[15]);
    return this.x = (y[0] * u + y[4] * o + y[8] * h + y[12]) * S, this.y = (y[1] * u + y[5] * o + y[9] * h + y[13]) * S, this.z = (y[2] * u + y[6] * o + y[10] * h + y[14]) * S, this;
  }
  applyQuaternion(n) {
    const u = this.x, o = this.y, h = this.z, y = n.x, S = n.y, x = n.z, E = n.w, z = 2 * (S * h - x * o), M = 2 * (x * u - y * h), R = 2 * (y * o - S * u);
    return this.x = u + E * z + S * R - x * M, this.y = o + E * M + x * z - y * R, this.z = h + E * R + y * M - S * z, this;
  }
  project(n) {
    return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix);
  }
  unproject(n) {
    return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld);
  }
  transformDirection(n) {
    const u = this.x, o = this.y, h = this.z, y = n.elements;
    return this.x = y[0] * u + y[4] * o + y[8] * h, this.y = y[1] * u + y[5] * o + y[9] * h, this.z = y[2] * u + y[6] * o + y[10] * h, this.normalize();
  }
  divide(n) {
    return this.x /= n.x, this.y /= n.y, this.z /= n.z, this;
  }
  divideScalar(n) {
    return this.multiplyScalar(1 / n);
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this.z = Math.min(this.z, n.z), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this.z = Math.max(this.z, n.z), this;
  }
  clamp(n, u) {
    return this.x = Math.max(n.x, Math.min(u.x, this.x)), this.y = Math.max(n.y, Math.min(u.y, this.y)), this.z = Math.max(n.z, Math.min(u.z, this.z)), this;
  }
  clampScalar(n, u) {
    return this.x = Math.max(n, Math.min(u, this.x)), this.y = Math.max(n, Math.min(u, this.y)), this.z = Math.max(n, Math.min(u, this.z)), this;
  }
  clampLength(n, u) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(Math.max(n, Math.min(u, o)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(n) {
    return this.x * n.x + this.y * n.y + this.z * n.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(n) {
    return this.normalize().multiplyScalar(n);
  }
  lerp(n, u) {
    return this.x += (n.x - this.x) * u, this.y += (n.y - this.y) * u, this.z += (n.z - this.z) * u, this;
  }
  lerpVectors(n, u, o) {
    return this.x = n.x + (u.x - n.x) * o, this.y = n.y + (u.y - n.y) * o, this.z = n.z + (u.z - n.z) * o, this;
  }
  cross(n) {
    return this.crossVectors(this, n);
  }
  crossVectors(n, u) {
    const o = n.x, h = n.y, y = n.z, S = u.x, x = u.y, E = u.z;
    return this.x = h * E - y * x, this.y = y * S - o * E, this.z = o * x - h * S, this;
  }
  projectOnVector(n) {
    const u = n.lengthSq();
    if (u === 0) return this.set(0, 0, 0);
    const o = n.dot(this) / u;
    return this.copy(n).multiplyScalar(o);
  }
  projectOnPlane(n) {
    return ky.copy(this).projectOnVector(n), this.sub(ky);
  }
  reflect(n) {
    return this.sub(ky.copy(n).multiplyScalar(2 * this.dot(n)));
  }
  angleTo(n) {
    const u = Math.sqrt(this.lengthSq() * n.lengthSq());
    if (u === 0) return Math.PI / 2;
    const o = this.dot(n) / u;
    return Math.acos(wa(o, -1, 1));
  }
  distanceTo(n) {
    return Math.sqrt(this.distanceToSquared(n));
  }
  distanceToSquared(n) {
    const u = this.x - n.x, o = this.y - n.y, h = this.z - n.z;
    return u * u + o * o + h * h;
  }
  manhattanDistanceTo(n) {
    return Math.abs(this.x - n.x) + Math.abs(this.y - n.y) + Math.abs(this.z - n.z);
  }
  setFromSpherical(n) {
    return this.setFromSphericalCoords(n.radius, n.phi, n.theta);
  }
  setFromSphericalCoords(n, u, o) {
    const h = Math.sin(u) * n;
    return this.x = h * Math.sin(o), this.y = Math.cos(u) * n, this.z = h * Math.cos(o), this;
  }
  setFromCylindrical(n) {
    return this.setFromCylindricalCoords(n.radius, n.theta, n.y);
  }
  setFromCylindricalCoords(n, u, o) {
    return this.x = n * Math.sin(u), this.y = o, this.z = n * Math.cos(u), this;
  }
  setFromMatrixPosition(n) {
    const u = n.elements;
    return this.x = u[12], this.y = u[13], this.z = u[14], this;
  }
  setFromMatrixScale(n) {
    const u = this.setFromMatrixColumn(n, 0).length(), o = this.setFromMatrixColumn(n, 1).length(), h = this.setFromMatrixColumn(n, 2).length();
    return this.x = u, this.y = o, this.z = h, this;
  }
  setFromMatrixColumn(n, u) {
    return this.fromArray(n.elements, u * 4);
  }
  setFromMatrix3Column(n, u) {
    return this.fromArray(n.elements, u * 3);
  }
  setFromEuler(n) {
    return this.x = n._x, this.y = n._y, this.z = n._z, this;
  }
  setFromColor(n) {
    return this.x = n.r, this.y = n.g, this.z = n.b, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y && n.z === this.z;
  }
  fromArray(n, u = 0) {
    return this.x = n[u], this.y = n[u + 1], this.z = n[u + 2], this;
  }
  toArray(n = [], u = 0) {
    return n[u] = this.x, n[u + 1] = this.y, n[u + 2] = this.z, n;
  }
  fromBufferAttribute(n, u) {
    return this.x = n.getX(u), this.y = n.getY(u), this.z = n.getZ(u), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const n = Math.random() * Math.PI * 2, u = Math.random() * 2 - 1, o = Math.sqrt(1 - u * u);
    return this.x = o * Math.cos(n), this.y = u, this.z = o * Math.sin(n), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ky = /* @__PURE__ */ new nt(), d1 = /* @__PURE__ */ new em();
class nm {
  constructor(n = new nt(1 / 0, 1 / 0, 1 / 0), u = new nt(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = n, this.max = u;
  }
  set(n, u) {
    return this.min.copy(n), this.max.copy(u), this;
  }
  setFromArray(n) {
    this.makeEmpty();
    for (let u = 0, o = n.length; u < o; u += 3)
      this.expandByPoint(ji.fromArray(n, u));
    return this;
  }
  setFromBufferAttribute(n) {
    this.makeEmpty();
    for (let u = 0, o = n.count; u < o; u++)
      this.expandByPoint(ji.fromBufferAttribute(n, u));
    return this;
  }
  setFromPoints(n) {
    this.makeEmpty();
    for (let u = 0, o = n.length; u < o; u++)
      this.expandByPoint(n[u]);
    return this;
  }
  setFromCenterAndSize(n, u) {
    const o = ji.copy(u).multiplyScalar(0.5);
    return this.min.copy(n).sub(o), this.max.copy(n).add(o), this;
  }
  setFromObject(n, u = !1) {
    return this.makeEmpty(), this.expandByObject(n, u);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    return this.min.copy(n.min), this.max.copy(n.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(n) {
    return this.isEmpty() ? n.set(0, 0, 0) : n.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(n) {
    return this.isEmpty() ? n.set(0, 0, 0) : n.subVectors(this.max, this.min);
  }
  expandByPoint(n) {
    return this.min.min(n), this.max.max(n), this;
  }
  expandByVector(n) {
    return this.min.sub(n), this.max.add(n), this;
  }
  expandByScalar(n) {
    return this.min.addScalar(-n), this.max.addScalar(n), this;
  }
  expandByObject(n, u = !1) {
    n.updateWorldMatrix(!1, !1);
    const o = n.geometry;
    if (o !== void 0) {
      const y = o.getAttribute("position");
      if (u === !0 && y !== void 0 && n.isInstancedMesh !== !0)
        for (let S = 0, x = y.count; S < x; S++)
          n.isMesh === !0 ? n.getVertexPosition(S, ji) : ji.fromBufferAttribute(y, S), ji.applyMatrix4(n.matrixWorld), this.expandByPoint(ji);
      else
        n.boundingBox !== void 0 ? (n.boundingBox === null && n.computeBoundingBox(), Ap.copy(n.boundingBox)) : (o.boundingBox === null && o.computeBoundingBox(), Ap.copy(o.boundingBox)), Ap.applyMatrix4(n.matrixWorld), this.union(Ap);
    }
    const h = n.children;
    for (let y = 0, S = h.length; y < S; y++)
      this.expandByObject(h[y], u);
    return this;
  }
  containsPoint(n) {
    return !(n.x < this.min.x || n.x > this.max.x || n.y < this.min.y || n.y > this.max.y || n.z < this.min.z || n.z > this.max.z);
  }
  containsBox(n) {
    return this.min.x <= n.min.x && n.max.x <= this.max.x && this.min.y <= n.min.y && n.max.y <= this.max.y && this.min.z <= n.min.z && n.max.z <= this.max.z;
  }
  getParameter(n, u) {
    return u.set(
      (n.x - this.min.x) / (this.max.x - this.min.x),
      (n.y - this.min.y) / (this.max.y - this.min.y),
      (n.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(n) {
    return !(n.max.x < this.min.x || n.min.x > this.max.x || n.max.y < this.min.y || n.min.y > this.max.y || n.max.z < this.min.z || n.min.z > this.max.z);
  }
  intersectsSphere(n) {
    return this.clampPoint(n.center, ji), ji.distanceToSquared(n.center) <= n.radius * n.radius;
  }
  intersectsPlane(n) {
    let u, o;
    return n.normal.x > 0 ? (u = n.normal.x * this.min.x, o = n.normal.x * this.max.x) : (u = n.normal.x * this.max.x, o = n.normal.x * this.min.x), n.normal.y > 0 ? (u += n.normal.y * this.min.y, o += n.normal.y * this.max.y) : (u += n.normal.y * this.max.y, o += n.normal.y * this.min.y), n.normal.z > 0 ? (u += n.normal.z * this.min.z, o += n.normal.z * this.max.z) : (u += n.normal.z * this.max.z, o += n.normal.z * this.min.z), u <= -n.constant && o >= -n.constant;
  }
  intersectsTriangle(n) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Kd), Rp.subVectors(this.max, Kd), Tf.subVectors(n.a, Kd), zf.subVectors(n.b, Kd), Mf.subVectors(n.c, Kd), uc.subVectors(zf, Tf), sc.subVectors(Mf, zf), po.subVectors(Tf, Mf);
    let u = [
      0,
      -uc.z,
      uc.y,
      0,
      -sc.z,
      sc.y,
      0,
      -po.z,
      po.y,
      uc.z,
      0,
      -uc.x,
      sc.z,
      0,
      -sc.x,
      po.z,
      0,
      -po.x,
      -uc.y,
      uc.x,
      0,
      -sc.y,
      sc.x,
      0,
      -po.y,
      po.x,
      0
    ];
    return !t0(u, Tf, zf, Mf, Rp) || (u = [1, 0, 0, 0, 1, 0, 0, 0, 1], !t0(u, Tf, zf, Mf, Rp)) ? !1 : (Cp.crossVectors(uc, sc), u = [Cp.x, Cp.y, Cp.z], t0(u, Tf, zf, Mf, Rp));
  }
  clampPoint(n, u) {
    return u.copy(n).clamp(this.min, this.max);
  }
  distanceToPoint(n) {
    return this.clampPoint(n, ji).distanceTo(n);
  }
  getBoundingSphere(n) {
    return this.isEmpty() ? n.makeEmpty() : (this.getCenter(n.center), n.radius = this.getSize(ji).length() * 0.5), n;
  }
  intersect(n) {
    return this.min.max(n.min), this.max.min(n.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(n) {
    return this.min.min(n.min), this.max.max(n.max), this;
  }
  applyMatrix4(n) {
    return this.isEmpty() ? this : (us[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(n), us[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(n), us[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(n), us[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(n), us[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(n), us[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(n), us[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(n), us[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(n), this.setFromPoints(us), this);
  }
  translate(n) {
    return this.min.add(n), this.max.add(n), this;
  }
  equals(n) {
    return n.min.equals(this.min) && n.max.equals(this.max);
  }
}
const us = [
  /* @__PURE__ */ new nt(),
  /* @__PURE__ */ new nt(),
  /* @__PURE__ */ new nt(),
  /* @__PURE__ */ new nt(),
  /* @__PURE__ */ new nt(),
  /* @__PURE__ */ new nt(),
  /* @__PURE__ */ new nt(),
  /* @__PURE__ */ new nt()
], ji = /* @__PURE__ */ new nt(), Ap = /* @__PURE__ */ new nm(), Tf = /* @__PURE__ */ new nt(), zf = /* @__PURE__ */ new nt(), Mf = /* @__PURE__ */ new nt(), uc = /* @__PURE__ */ new nt(), sc = /* @__PURE__ */ new nt(), po = /* @__PURE__ */ new nt(), Kd = /* @__PURE__ */ new nt(), Rp = /* @__PURE__ */ new nt(), Cp = /* @__PURE__ */ new nt(), yo = /* @__PURE__ */ new nt();
function t0(T, n, u, o, h) {
  for (let y = 0, S = T.length - 3; y <= S; y += 3) {
    yo.fromArray(T, y);
    const x = h.x * Math.abs(yo.x) + h.y * Math.abs(yo.y) + h.z * Math.abs(yo.z), E = n.dot(yo), z = u.dot(yo), M = o.dot(yo);
    if (Math.max(-Math.max(E, z, M), Math.min(E, z, M)) > x)
      return !1;
  }
  return !0;
}
const dS = /* @__PURE__ */ new nm(), Jd = /* @__PURE__ */ new nt(), e0 = /* @__PURE__ */ new nt();
class _0 {
  constructor(n = new nt(), u = -1) {
    this.isSphere = !0, this.center = n, this.radius = u;
  }
  set(n, u) {
    return this.center.copy(n), this.radius = u, this;
  }
  setFromPoints(n, u) {
    const o = this.center;
    u !== void 0 ? o.copy(u) : dS.setFromPoints(n).getCenter(o);
    let h = 0;
    for (let y = 0, S = n.length; y < S; y++)
      h = Math.max(h, o.distanceToSquared(n[y]));
    return this.radius = Math.sqrt(h), this;
  }
  copy(n) {
    return this.center.copy(n.center), this.radius = n.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(n) {
    return n.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(n) {
    return n.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(n) {
    const u = this.radius + n.radius;
    return n.center.distanceToSquared(this.center) <= u * u;
  }
  intersectsBox(n) {
    return n.intersectsSphere(this);
  }
  intersectsPlane(n) {
    return Math.abs(n.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(n, u) {
    const o = this.center.distanceToSquared(n);
    return u.copy(n), o > this.radius * this.radius && (u.sub(this.center).normalize(), u.multiplyScalar(this.radius).add(this.center)), u;
  }
  getBoundingBox(n) {
    return this.isEmpty() ? (n.makeEmpty(), n) : (n.set(this.center, this.center), n.expandByScalar(this.radius), n);
  }
  applyMatrix4(n) {
    return this.center.applyMatrix4(n), this.radius = this.radius * n.getMaxScaleOnAxis(), this;
  }
  translate(n) {
    return this.center.add(n), this;
  }
  expandByPoint(n) {
    if (this.isEmpty())
      return this.center.copy(n), this.radius = 0, this;
    Jd.subVectors(n, this.center);
    const u = Jd.lengthSq();
    if (u > this.radius * this.radius) {
      const o = Math.sqrt(u), h = (o - this.radius) * 0.5;
      this.center.addScaledVector(Jd, h / o), this.radius += h;
    }
    return this;
  }
  union(n) {
    return n.isEmpty() ? this : this.isEmpty() ? (this.copy(n), this) : (this.center.equals(n.center) === !0 ? this.radius = Math.max(this.radius, n.radius) : (e0.subVectors(n.center, this.center).setLength(n.radius), this.expandByPoint(Jd.copy(n.center).add(e0)), this.expandByPoint(Jd.copy(n.center).sub(e0))), this);
  }
  equals(n) {
    return n.center.equals(this.center) && n.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ss = /* @__PURE__ */ new nt(), n0 = /* @__PURE__ */ new nt(), Np = /* @__PURE__ */ new nt(), cc = /* @__PURE__ */ new nt(), a0 = /* @__PURE__ */ new nt(), Dp = /* @__PURE__ */ new nt(), l0 = /* @__PURE__ */ new nt();
class i2 {
  constructor(n = new nt(), u = new nt(0, 0, -1)) {
    this.origin = n, this.direction = u;
  }
  set(n, u) {
    return this.origin.copy(n), this.direction.copy(u), this;
  }
  copy(n) {
    return this.origin.copy(n.origin), this.direction.copy(n.direction), this;
  }
  at(n, u) {
    return u.copy(this.origin).addScaledVector(this.direction, n);
  }
  lookAt(n) {
    return this.direction.copy(n).sub(this.origin).normalize(), this;
  }
  recast(n) {
    return this.origin.copy(this.at(n, ss)), this;
  }
  closestPointToPoint(n, u) {
    u.subVectors(n, this.origin);
    const o = u.dot(this.direction);
    return o < 0 ? u.copy(this.origin) : u.copy(this.origin).addScaledVector(this.direction, o);
  }
  distanceToPoint(n) {
    return Math.sqrt(this.distanceSqToPoint(n));
  }
  distanceSqToPoint(n) {
    const u = ss.subVectors(n, this.origin).dot(this.direction);
    return u < 0 ? this.origin.distanceToSquared(n) : (ss.copy(this.origin).addScaledVector(this.direction, u), ss.distanceToSquared(n));
  }
  distanceSqToSegment(n, u, o, h) {
    n0.copy(n).add(u).multiplyScalar(0.5), Np.copy(u).sub(n).normalize(), cc.copy(this.origin).sub(n0);
    const y = n.distanceTo(u) * 0.5, S = -this.direction.dot(Np), x = cc.dot(this.direction), E = -cc.dot(Np), z = cc.lengthSq(), M = Math.abs(1 - S * S);
    let R, C, A, U;
    if (M > 0)
      if (R = S * E - x, C = S * x - E, U = y * M, R >= 0)
        if (C >= -U)
          if (C <= U) {
            const X = 1 / M;
            R *= X, C *= X, A = R * (R + S * C + 2 * x) + C * (S * R + C + 2 * E) + z;
          } else
            C = y, R = Math.max(0, -(S * C + x)), A = -R * R + C * (C + 2 * E) + z;
        else
          C = -y, R = Math.max(0, -(S * C + x)), A = -R * R + C * (C + 2 * E) + z;
      else
        C <= -U ? (R = Math.max(0, -(-S * y + x)), C = R > 0 ? -y : Math.min(Math.max(-y, -E), y), A = -R * R + C * (C + 2 * E) + z) : C <= U ? (R = 0, C = Math.min(Math.max(-y, -E), y), A = C * (C + 2 * E) + z) : (R = Math.max(0, -(S * y + x)), C = R > 0 ? y : Math.min(Math.max(-y, -E), y), A = -R * R + C * (C + 2 * E) + z);
    else
      C = S > 0 ? -y : y, R = Math.max(0, -(S * C + x)), A = -R * R + C * (C + 2 * E) + z;
    return o && o.copy(this.origin).addScaledVector(this.direction, R), h && h.copy(n0).addScaledVector(Np, C), A;
  }
  intersectSphere(n, u) {
    ss.subVectors(n.center, this.origin);
    const o = ss.dot(this.direction), h = ss.dot(ss) - o * o, y = n.radius * n.radius;
    if (h > y) return null;
    const S = Math.sqrt(y - h), x = o - S, E = o + S;
    return E < 0 ? null : x < 0 ? this.at(E, u) : this.at(x, u);
  }
  intersectsSphere(n) {
    return this.distanceSqToPoint(n.center) <= n.radius * n.radius;
  }
  distanceToPlane(n) {
    const u = n.normal.dot(this.direction);
    if (u === 0)
      return n.distanceToPoint(this.origin) === 0 ? 0 : null;
    const o = -(this.origin.dot(n.normal) + n.constant) / u;
    return o >= 0 ? o : null;
  }
  intersectPlane(n, u) {
    const o = this.distanceToPlane(n);
    return o === null ? null : this.at(o, u);
  }
  intersectsPlane(n) {
    const u = n.distanceToPoint(this.origin);
    return u === 0 || n.normal.dot(this.direction) * u < 0;
  }
  intersectBox(n, u) {
    let o, h, y, S, x, E;
    const z = 1 / this.direction.x, M = 1 / this.direction.y, R = 1 / this.direction.z, C = this.origin;
    return z >= 0 ? (o = (n.min.x - C.x) * z, h = (n.max.x - C.x) * z) : (o = (n.max.x - C.x) * z, h = (n.min.x - C.x) * z), M >= 0 ? (y = (n.min.y - C.y) * M, S = (n.max.y - C.y) * M) : (y = (n.max.y - C.y) * M, S = (n.min.y - C.y) * M), o > S || y > h || ((y > o || isNaN(o)) && (o = y), (S < h || isNaN(h)) && (h = S), R >= 0 ? (x = (n.min.z - C.z) * R, E = (n.max.z - C.z) * R) : (x = (n.max.z - C.z) * R, E = (n.min.z - C.z) * R), o > E || x > h) || ((x > o || o !== o) && (o = x), (E < h || h !== h) && (h = E), h < 0) ? null : this.at(o >= 0 ? o : h, u);
  }
  intersectsBox(n) {
    return this.intersectBox(n, ss) !== null;
  }
  intersectTriangle(n, u, o, h, y) {
    a0.subVectors(u, n), Dp.subVectors(o, n), l0.crossVectors(a0, Dp);
    let S = this.direction.dot(l0), x;
    if (S > 0) {
      if (h) return null;
      x = 1;
    } else if (S < 0)
      x = -1, S = -S;
    else
      return null;
    cc.subVectors(this.origin, n);
    const E = x * this.direction.dot(Dp.crossVectors(cc, Dp));
    if (E < 0)
      return null;
    const z = x * this.direction.dot(a0.cross(cc));
    if (z < 0 || E + z > S)
      return null;
    const M = -x * cc.dot(l0);
    return M < 0 ? null : this.at(M / S, y);
  }
  applyMatrix4(n) {
    return this.origin.applyMatrix4(n), this.direction.transformDirection(n), this;
  }
  equals(n) {
    return n.origin.equals(this.origin) && n.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Wa {
  constructor(n, u, o, h, y, S, x, E, z, M, R, C, A, U, X, J) {
    Wa.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], n !== void 0 && this.set(n, u, o, h, y, S, x, E, z, M, R, C, A, U, X, J);
  }
  set(n, u, o, h, y, S, x, E, z, M, R, C, A, U, X, J) {
    const K = this.elements;
    return K[0] = n, K[4] = u, K[8] = o, K[12] = h, K[1] = y, K[5] = S, K[9] = x, K[13] = E, K[2] = z, K[6] = M, K[10] = R, K[14] = C, K[3] = A, K[7] = U, K[11] = X, K[15] = J, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Wa().fromArray(this.elements);
  }
  copy(n) {
    const u = this.elements, o = n.elements;
    return u[0] = o[0], u[1] = o[1], u[2] = o[2], u[3] = o[3], u[4] = o[4], u[5] = o[5], u[6] = o[6], u[7] = o[7], u[8] = o[8], u[9] = o[9], u[10] = o[10], u[11] = o[11], u[12] = o[12], u[13] = o[13], u[14] = o[14], u[15] = o[15], this;
  }
  copyPosition(n) {
    const u = this.elements, o = n.elements;
    return u[12] = o[12], u[13] = o[13], u[14] = o[14], this;
  }
  setFromMatrix3(n) {
    const u = n.elements;
    return this.set(
      u[0],
      u[3],
      u[6],
      0,
      u[1],
      u[4],
      u[7],
      0,
      u[2],
      u[5],
      u[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(n, u, o) {
    return n.setFromMatrixColumn(this, 0), u.setFromMatrixColumn(this, 1), o.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(n, u, o) {
    return this.set(
      n.x,
      u.x,
      o.x,
      0,
      n.y,
      u.y,
      o.y,
      0,
      n.z,
      u.z,
      o.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(n) {
    const u = this.elements, o = n.elements, h = 1 / _f.setFromMatrixColumn(n, 0).length(), y = 1 / _f.setFromMatrixColumn(n, 1).length(), S = 1 / _f.setFromMatrixColumn(n, 2).length();
    return u[0] = o[0] * h, u[1] = o[1] * h, u[2] = o[2] * h, u[3] = 0, u[4] = o[4] * y, u[5] = o[5] * y, u[6] = o[6] * y, u[7] = 0, u[8] = o[8] * S, u[9] = o[9] * S, u[10] = o[10] * S, u[11] = 0, u[12] = 0, u[13] = 0, u[14] = 0, u[15] = 1, this;
  }
  makeRotationFromEuler(n) {
    const u = this.elements, o = n.x, h = n.y, y = n.z, S = Math.cos(o), x = Math.sin(o), E = Math.cos(h), z = Math.sin(h), M = Math.cos(y), R = Math.sin(y);
    if (n.order === "XYZ") {
      const C = S * M, A = S * R, U = x * M, X = x * R;
      u[0] = E * M, u[4] = -E * R, u[8] = z, u[1] = A + U * z, u[5] = C - X * z, u[9] = -x * E, u[2] = X - C * z, u[6] = U + A * z, u[10] = S * E;
    } else if (n.order === "YXZ") {
      const C = E * M, A = E * R, U = z * M, X = z * R;
      u[0] = C + X * x, u[4] = U * x - A, u[8] = S * z, u[1] = S * R, u[5] = S * M, u[9] = -x, u[2] = A * x - U, u[6] = X + C * x, u[10] = S * E;
    } else if (n.order === "ZXY") {
      const C = E * M, A = E * R, U = z * M, X = z * R;
      u[0] = C - X * x, u[4] = -S * R, u[8] = U + A * x, u[1] = A + U * x, u[5] = S * M, u[9] = X - C * x, u[2] = -S * z, u[6] = x, u[10] = S * E;
    } else if (n.order === "ZYX") {
      const C = S * M, A = S * R, U = x * M, X = x * R;
      u[0] = E * M, u[4] = U * z - A, u[8] = C * z + X, u[1] = E * R, u[5] = X * z + C, u[9] = A * z - U, u[2] = -z, u[6] = x * E, u[10] = S * E;
    } else if (n.order === "YZX") {
      const C = S * E, A = S * z, U = x * E, X = x * z;
      u[0] = E * M, u[4] = X - C * R, u[8] = U * R + A, u[1] = R, u[5] = S * M, u[9] = -x * M, u[2] = -z * M, u[6] = A * R + U, u[10] = C - X * R;
    } else if (n.order === "XZY") {
      const C = S * E, A = S * z, U = x * E, X = x * z;
      u[0] = E * M, u[4] = -R, u[8] = z * M, u[1] = C * R + X, u[5] = S * M, u[9] = A * R - U, u[2] = U * R - A, u[6] = x * M, u[10] = X * R + C;
    }
    return u[3] = 0, u[7] = 0, u[11] = 0, u[12] = 0, u[13] = 0, u[14] = 0, u[15] = 1, this;
  }
  makeRotationFromQuaternion(n) {
    return this.compose(mS, n, pS);
  }
  lookAt(n, u, o) {
    const h = this.elements;
    return Ul.subVectors(n, u), Ul.lengthSq() === 0 && (Ul.z = 1), Ul.normalize(), oc.crossVectors(o, Ul), oc.lengthSq() === 0 && (Math.abs(o.z) === 1 ? Ul.x += 1e-4 : Ul.z += 1e-4, Ul.normalize(), oc.crossVectors(o, Ul)), oc.normalize(), Up.crossVectors(Ul, oc), h[0] = oc.x, h[4] = Up.x, h[8] = Ul.x, h[1] = oc.y, h[5] = Up.y, h[9] = Ul.y, h[2] = oc.z, h[6] = Up.z, h[10] = Ul.z, this;
  }
  multiply(n) {
    return this.multiplyMatrices(this, n);
  }
  premultiply(n) {
    return this.multiplyMatrices(n, this);
  }
  multiplyMatrices(n, u) {
    const o = n.elements, h = u.elements, y = this.elements, S = o[0], x = o[4], E = o[8], z = o[12], M = o[1], R = o[5], C = o[9], A = o[13], U = o[2], X = o[6], J = o[10], K = o[14], k = o[3], at = o[7], P = o[11], ut = o[15], Tt = h[0], Nt = h[4], Rt = h[8], Vt = h[12], Gt = h[1], jt = h[5], ye = h[9], it = h[13], Ft = h[2], ie = h[6], V = h[10], lt = h[14], ot = h[3], st = h[7], N = h[11], w = h[15];
    return y[0] = S * Tt + x * Gt + E * Ft + z * ot, y[4] = S * Nt + x * jt + E * ie + z * st, y[8] = S * Rt + x * ye + E * V + z * N, y[12] = S * Vt + x * it + E * lt + z * w, y[1] = M * Tt + R * Gt + C * Ft + A * ot, y[5] = M * Nt + R * jt + C * ie + A * st, y[9] = M * Rt + R * ye + C * V + A * N, y[13] = M * Vt + R * it + C * lt + A * w, y[2] = U * Tt + X * Gt + J * Ft + K * ot, y[6] = U * Nt + X * jt + J * ie + K * st, y[10] = U * Rt + X * ye + J * V + K * N, y[14] = U * Vt + X * it + J * lt + K * w, y[3] = k * Tt + at * Gt + P * Ft + ut * ot, y[7] = k * Nt + at * jt + P * ie + ut * st, y[11] = k * Rt + at * ye + P * V + ut * N, y[15] = k * Vt + at * it + P * lt + ut * w, this;
  }
  multiplyScalar(n) {
    const u = this.elements;
    return u[0] *= n, u[4] *= n, u[8] *= n, u[12] *= n, u[1] *= n, u[5] *= n, u[9] *= n, u[13] *= n, u[2] *= n, u[6] *= n, u[10] *= n, u[14] *= n, u[3] *= n, u[7] *= n, u[11] *= n, u[15] *= n, this;
  }
  determinant() {
    const n = this.elements, u = n[0], o = n[4], h = n[8], y = n[12], S = n[1], x = n[5], E = n[9], z = n[13], M = n[2], R = n[6], C = n[10], A = n[14], U = n[3], X = n[7], J = n[11], K = n[15];
    return U * (+y * E * R - h * z * R - y * x * C + o * z * C + h * x * A - o * E * A) + X * (+u * E * A - u * z * C + y * S * C - h * S * A + h * z * M - y * E * M) + J * (+u * z * R - u * x * A - y * S * R + o * S * A + y * x * M - o * z * M) + K * (-h * x * M - u * E * R + u * x * C + h * S * R - o * S * C + o * E * M);
  }
  transpose() {
    const n = this.elements;
    let u;
    return u = n[1], n[1] = n[4], n[4] = u, u = n[2], n[2] = n[8], n[8] = u, u = n[6], n[6] = n[9], n[9] = u, u = n[3], n[3] = n[12], n[12] = u, u = n[7], n[7] = n[13], n[13] = u, u = n[11], n[11] = n[14], n[14] = u, this;
  }
  setPosition(n, u, o) {
    const h = this.elements;
    return n.isVector3 ? (h[12] = n.x, h[13] = n.y, h[14] = n.z) : (h[12] = n, h[13] = u, h[14] = o), this;
  }
  invert() {
    const n = this.elements, u = n[0], o = n[1], h = n[2], y = n[3], S = n[4], x = n[5], E = n[6], z = n[7], M = n[8], R = n[9], C = n[10], A = n[11], U = n[12], X = n[13], J = n[14], K = n[15], k = R * J * z - X * C * z + X * E * A - x * J * A - R * E * K + x * C * K, at = U * C * z - M * J * z - U * E * A + S * J * A + M * E * K - S * C * K, P = M * X * z - U * R * z + U * x * A - S * X * A - M * x * K + S * R * K, ut = U * R * E - M * X * E - U * x * C + S * X * C + M * x * J - S * R * J, Tt = u * k + o * at + h * P + y * ut;
    if (Tt === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const Nt = 1 / Tt;
    return n[0] = k * Nt, n[1] = (X * C * y - R * J * y - X * h * A + o * J * A + R * h * K - o * C * K) * Nt, n[2] = (x * J * y - X * E * y + X * h * z - o * J * z - x * h * K + o * E * K) * Nt, n[3] = (R * E * y - x * C * y - R * h * z + o * C * z + x * h * A - o * E * A) * Nt, n[4] = at * Nt, n[5] = (M * J * y - U * C * y + U * h * A - u * J * A - M * h * K + u * C * K) * Nt, n[6] = (U * E * y - S * J * y - U * h * z + u * J * z + S * h * K - u * E * K) * Nt, n[7] = (S * C * y - M * E * y + M * h * z - u * C * z - S * h * A + u * E * A) * Nt, n[8] = P * Nt, n[9] = (U * R * y - M * X * y - U * o * A + u * X * A + M * o * K - u * R * K) * Nt, n[10] = (S * X * y - U * x * y + U * o * z - u * X * z - S * o * K + u * x * K) * Nt, n[11] = (M * x * y - S * R * y - M * o * z + u * R * z + S * o * A - u * x * A) * Nt, n[12] = ut * Nt, n[13] = (M * X * h - U * R * h + U * o * C - u * X * C - M * o * J + u * R * J) * Nt, n[14] = (U * x * h - S * X * h - U * o * E + u * X * E + S * o * J - u * x * J) * Nt, n[15] = (S * R * h - M * x * h + M * o * E - u * R * E - S * o * C + u * x * C) * Nt, this;
  }
  scale(n) {
    const u = this.elements, o = n.x, h = n.y, y = n.z;
    return u[0] *= o, u[4] *= h, u[8] *= y, u[1] *= o, u[5] *= h, u[9] *= y, u[2] *= o, u[6] *= h, u[10] *= y, u[3] *= o, u[7] *= h, u[11] *= y, this;
  }
  getMaxScaleOnAxis() {
    const n = this.elements, u = n[0] * n[0] + n[1] * n[1] + n[2] * n[2], o = n[4] * n[4] + n[5] * n[5] + n[6] * n[6], h = n[8] * n[8] + n[9] * n[9] + n[10] * n[10];
    return Math.sqrt(Math.max(u, o, h));
  }
  makeTranslation(n, u, o) {
    return n.isVector3 ? this.set(
      1,
      0,
      0,
      n.x,
      0,
      1,
      0,
      n.y,
      0,
      0,
      1,
      n.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      n,
      0,
      1,
      0,
      u,
      0,
      0,
      1,
      o,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(n) {
    const u = Math.cos(n), o = Math.sin(n);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      u,
      -o,
      0,
      0,
      o,
      u,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(n) {
    const u = Math.cos(n), o = Math.sin(n);
    return this.set(
      u,
      0,
      o,
      0,
      0,
      1,
      0,
      0,
      -o,
      0,
      u,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(n) {
    const u = Math.cos(n), o = Math.sin(n);
    return this.set(
      u,
      -o,
      0,
      0,
      o,
      u,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(n, u) {
    const o = Math.cos(u), h = Math.sin(u), y = 1 - o, S = n.x, x = n.y, E = n.z, z = y * S, M = y * x;
    return this.set(
      z * S + o,
      z * x - h * E,
      z * E + h * x,
      0,
      z * x + h * E,
      M * x + o,
      M * E - h * S,
      0,
      z * E - h * x,
      M * E + h * S,
      y * E * E + o,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(n, u, o) {
    return this.set(
      n,
      0,
      0,
      0,
      0,
      u,
      0,
      0,
      0,
      0,
      o,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(n, u, o, h, y, S) {
    return this.set(
      1,
      o,
      y,
      0,
      n,
      1,
      S,
      0,
      u,
      h,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(n, u, o) {
    const h = this.elements, y = u._x, S = u._y, x = u._z, E = u._w, z = y + y, M = S + S, R = x + x, C = y * z, A = y * M, U = y * R, X = S * M, J = S * R, K = x * R, k = E * z, at = E * M, P = E * R, ut = o.x, Tt = o.y, Nt = o.z;
    return h[0] = (1 - (X + K)) * ut, h[1] = (A + P) * ut, h[2] = (U - at) * ut, h[3] = 0, h[4] = (A - P) * Tt, h[5] = (1 - (C + K)) * Tt, h[6] = (J + k) * Tt, h[7] = 0, h[8] = (U + at) * Nt, h[9] = (J - k) * Nt, h[10] = (1 - (C + X)) * Nt, h[11] = 0, h[12] = n.x, h[13] = n.y, h[14] = n.z, h[15] = 1, this;
  }
  decompose(n, u, o) {
    const h = this.elements;
    let y = _f.set(h[0], h[1], h[2]).length();
    const S = _f.set(h[4], h[5], h[6]).length(), x = _f.set(h[8], h[9], h[10]).length();
    this.determinant() < 0 && (y = -y), n.x = h[12], n.y = h[13], n.z = h[14], Gi.copy(this);
    const z = 1 / y, M = 1 / S, R = 1 / x;
    return Gi.elements[0] *= z, Gi.elements[1] *= z, Gi.elements[2] *= z, Gi.elements[4] *= M, Gi.elements[5] *= M, Gi.elements[6] *= M, Gi.elements[8] *= R, Gi.elements[9] *= R, Gi.elements[10] *= R, u.setFromRotationMatrix(Gi), o.x = y, o.y = S, o.z = x, this;
  }
  makePerspective(n, u, o, h, y, S, x = $d) {
    const E = this.elements, z = 2 * y / (u - n), M = 2 * y / (o - h), R = (u + n) / (u - n), C = (o + h) / (o - h);
    let A, U;
    if (x === $d)
      A = -(S + y) / (S - y), U = -2 * S * y / (S - y);
    else if (x === s1)
      A = -S / (S - y), U = -S * y / (S - y);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + x);
    return E[0] = z, E[4] = 0, E[8] = R, E[12] = 0, E[1] = 0, E[5] = M, E[9] = C, E[13] = 0, E[2] = 0, E[6] = 0, E[10] = A, E[14] = U, E[3] = 0, E[7] = 0, E[11] = -1, E[15] = 0, this;
  }
  makeOrthographic(n, u, o, h, y, S, x = $d) {
    const E = this.elements, z = 1 / (u - n), M = 1 / (o - h), R = 1 / (S - y), C = (u + n) * z, A = (o + h) * M;
    let U, X;
    if (x === $d)
      U = (S + y) * R, X = -2 * R;
    else if (x === s1)
      U = y * R, X = -1 * R;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + x);
    return E[0] = 2 * z, E[4] = 0, E[8] = 0, E[12] = -C, E[1] = 0, E[5] = 2 * M, E[9] = 0, E[13] = -A, E[2] = 0, E[6] = 0, E[10] = X, E[14] = -U, E[3] = 0, E[7] = 0, E[11] = 0, E[15] = 1, this;
  }
  equals(n) {
    const u = this.elements, o = n.elements;
    for (let h = 0; h < 16; h++)
      if (u[h] !== o[h]) return !1;
    return !0;
  }
  fromArray(n, u = 0) {
    for (let o = 0; o < 16; o++)
      this.elements[o] = n[o + u];
    return this;
  }
  toArray(n = [], u = 0) {
    const o = this.elements;
    return n[u] = o[0], n[u + 1] = o[1], n[u + 2] = o[2], n[u + 3] = o[3], n[u + 4] = o[4], n[u + 5] = o[5], n[u + 6] = o[6], n[u + 7] = o[7], n[u + 8] = o[8], n[u + 9] = o[9], n[u + 10] = o[10], n[u + 11] = o[11], n[u + 12] = o[12], n[u + 13] = o[13], n[u + 14] = o[14], n[u + 15] = o[15], n;
  }
}
const _f = /* @__PURE__ */ new nt(), Gi = /* @__PURE__ */ new Wa(), mS = /* @__PURE__ */ new nt(0, 0, 0), pS = /* @__PURE__ */ new nt(1, 1, 1), oc = /* @__PURE__ */ new nt(), Up = /* @__PURE__ */ new nt(), Ul = /* @__PURE__ */ new nt(), m1 = /* @__PURE__ */ new Wa(), p1 = /* @__PURE__ */ new em();
class ms {
  constructor(n = 0, u = 0, o = 0, h = ms.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = n, this._y = u, this._z = o, this._order = h;
  }
  get x() {
    return this._x;
  }
  set x(n) {
    this._x = n, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(n) {
    this._y = n, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(n) {
    this._z = n, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(n) {
    this._order = n, this._onChangeCallback();
  }
  set(n, u, o, h = this._order) {
    return this._x = n, this._y = u, this._z = o, this._order = h, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(n) {
    return this._x = n._x, this._y = n._y, this._z = n._z, this._order = n._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(n, u = this._order, o = !0) {
    const h = n.elements, y = h[0], S = h[4], x = h[8], E = h[1], z = h[5], M = h[9], R = h[2], C = h[6], A = h[10];
    switch (u) {
      case "XYZ":
        this._y = Math.asin(wa(x, -1, 1)), Math.abs(x) < 0.9999999 ? (this._x = Math.atan2(-M, A), this._z = Math.atan2(-S, y)) : (this._x = Math.atan2(C, z), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-wa(M, -1, 1)), Math.abs(M) < 0.9999999 ? (this._y = Math.atan2(x, A), this._z = Math.atan2(E, z)) : (this._y = Math.atan2(-R, y), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(wa(C, -1, 1)), Math.abs(C) < 0.9999999 ? (this._y = Math.atan2(-R, A), this._z = Math.atan2(-S, z)) : (this._y = 0, this._z = Math.atan2(E, y));
        break;
      case "ZYX":
        this._y = Math.asin(-wa(R, -1, 1)), Math.abs(R) < 0.9999999 ? (this._x = Math.atan2(C, A), this._z = Math.atan2(E, y)) : (this._x = 0, this._z = Math.atan2(-S, z));
        break;
      case "YZX":
        this._z = Math.asin(wa(E, -1, 1)), Math.abs(E) < 0.9999999 ? (this._x = Math.atan2(-M, z), this._y = Math.atan2(-R, y)) : (this._x = 0, this._y = Math.atan2(x, A));
        break;
      case "XZY":
        this._z = Math.asin(-wa(S, -1, 1)), Math.abs(S) < 0.9999999 ? (this._x = Math.atan2(C, z), this._y = Math.atan2(x, y)) : (this._x = Math.atan2(-M, A), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + u);
    }
    return this._order = u, o === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(n, u, o) {
    return m1.makeRotationFromQuaternion(n), this.setFromRotationMatrix(m1, u, o);
  }
  setFromVector3(n, u = this._order) {
    return this.set(n.x, n.y, n.z, u);
  }
  reorder(n) {
    return p1.setFromEuler(this), this.setFromQuaternion(p1, n);
  }
  equals(n) {
    return n._x === this._x && n._y === this._y && n._z === this._z && n._order === this._order;
  }
  fromArray(n) {
    return this._x = n[0], this._y = n[1], this._z = n[2], n[3] !== void 0 && (this._order = n[3]), this._onChangeCallback(), this;
  }
  toArray(n = [], u = 0) {
    return n[u] = this._x, n[u + 1] = this._y, n[u + 2] = this._z, n[u + 3] = this._order, n;
  }
  _onChange(n) {
    return this._onChangeCallback = n, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ms.DEFAULT_ORDER = "XYZ";
class yS {
  constructor() {
    this.mask = 1;
  }
  set(n) {
    this.mask = (1 << n | 0) >>> 0;
  }
  enable(n) {
    this.mask |= 1 << n | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(n) {
    this.mask ^= 1 << n | 0;
  }
  disable(n) {
    this.mask &= ~(1 << n | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(n) {
    return (this.mask & n.mask) !== 0;
  }
  isEnabled(n) {
    return (this.mask & (1 << n | 0)) !== 0;
  }
}
let vS = 0;
const y1 = /* @__PURE__ */ new nt(), bf = /* @__PURE__ */ new em(), cs = /* @__PURE__ */ new Wa(), Op = /* @__PURE__ */ new nt(), Ld = /* @__PURE__ */ new nt(), SS = /* @__PURE__ */ new nt(), gS = /* @__PURE__ */ new em(), v1 = /* @__PURE__ */ new nt(1, 0, 0), S1 = /* @__PURE__ */ new nt(0, 1, 0), g1 = /* @__PURE__ */ new nt(0, 0, 1), E1 = { type: "added" }, ES = { type: "removed" }, Af = { type: "childadded", child: null }, i0 = { type: "childremoved", child: null };
class ol extends tm {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: vS++ }), this.uuid = Qf(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ol.DEFAULT_UP.clone();
    const n = new nt(), u = new ms(), o = new em(), h = new nt(1, 1, 1);
    function y() {
      o.setFromEuler(u, !1);
    }
    function S() {
      u.setFromQuaternion(o, void 0, !1);
    }
    u._onChange(y), o._onChange(S), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: u
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: o
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: h
      },
      modelViewMatrix: {
        value: new Wa()
      },
      normalMatrix: {
        value: new dc()
      }
    }), this.matrix = new Wa(), this.matrixWorld = new Wa(), this.matrixAutoUpdate = ol.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ol.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new yS(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(n) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(n), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(n) {
    return this.quaternion.premultiply(n), this;
  }
  setRotationFromAxisAngle(n, u) {
    this.quaternion.setFromAxisAngle(n, u);
  }
  setRotationFromEuler(n) {
    this.quaternion.setFromEuler(n, !0);
  }
  setRotationFromMatrix(n) {
    this.quaternion.setFromRotationMatrix(n);
  }
  setRotationFromQuaternion(n) {
    this.quaternion.copy(n);
  }
  rotateOnAxis(n, u) {
    return bf.setFromAxisAngle(n, u), this.quaternion.multiply(bf), this;
  }
  rotateOnWorldAxis(n, u) {
    return bf.setFromAxisAngle(n, u), this.quaternion.premultiply(bf), this;
  }
  rotateX(n) {
    return this.rotateOnAxis(v1, n);
  }
  rotateY(n) {
    return this.rotateOnAxis(S1, n);
  }
  rotateZ(n) {
    return this.rotateOnAxis(g1, n);
  }
  translateOnAxis(n, u) {
    return y1.copy(n).applyQuaternion(this.quaternion), this.position.add(y1.multiplyScalar(u)), this;
  }
  translateX(n) {
    return this.translateOnAxis(v1, n);
  }
  translateY(n) {
    return this.translateOnAxis(S1, n);
  }
  translateZ(n) {
    return this.translateOnAxis(g1, n);
  }
  localToWorld(n) {
    return this.updateWorldMatrix(!0, !1), n.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(n) {
    return this.updateWorldMatrix(!0, !1), n.applyMatrix4(cs.copy(this.matrixWorld).invert());
  }
  lookAt(n, u, o) {
    n.isVector3 ? Op.copy(n) : Op.set(n, u, o);
    const h = this.parent;
    this.updateWorldMatrix(!0, !1), Ld.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? cs.lookAt(Ld, Op, this.up) : cs.lookAt(Op, Ld, this.up), this.quaternion.setFromRotationMatrix(cs), h && (cs.extractRotation(h.matrixWorld), bf.setFromRotationMatrix(cs), this.quaternion.premultiply(bf.invert()));
  }
  add(n) {
    if (arguments.length > 1) {
      for (let u = 0; u < arguments.length; u++)
        this.add(arguments[u]);
      return this;
    }
    return n === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", n), this) : (n && n.isObject3D ? (n.removeFromParent(), n.parent = this, this.children.push(n), n.dispatchEvent(E1), Af.child = n, this.dispatchEvent(Af), Af.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", n), this);
  }
  remove(n) {
    if (arguments.length > 1) {
      for (let o = 0; o < arguments.length; o++)
        this.remove(arguments[o]);
      return this;
    }
    const u = this.children.indexOf(n);
    return u !== -1 && (n.parent = null, this.children.splice(u, 1), n.dispatchEvent(ES), i0.child = n, this.dispatchEvent(i0), i0.child = null), this;
  }
  removeFromParent() {
    const n = this.parent;
    return n !== null && n.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(n) {
    return this.updateWorldMatrix(!0, !1), cs.copy(this.matrixWorld).invert(), n.parent !== null && (n.parent.updateWorldMatrix(!0, !1), cs.multiply(n.parent.matrixWorld)), n.applyMatrix4(cs), n.removeFromParent(), n.parent = this, this.children.push(n), n.updateWorldMatrix(!1, !0), n.dispatchEvent(E1), Af.child = n, this.dispatchEvent(Af), Af.child = null, this;
  }
  getObjectById(n) {
    return this.getObjectByProperty("id", n);
  }
  getObjectByName(n) {
    return this.getObjectByProperty("name", n);
  }
  getObjectByProperty(n, u) {
    if (this[n] === u) return this;
    for (let o = 0, h = this.children.length; o < h; o++) {
      const S = this.children[o].getObjectByProperty(n, u);
      if (S !== void 0)
        return S;
    }
  }
  getObjectsByProperty(n, u, o = []) {
    this[n] === u && o.push(this);
    const h = this.children;
    for (let y = 0, S = h.length; y < S; y++)
      h[y].getObjectsByProperty(n, u, o);
    return o;
  }
  getWorldPosition(n) {
    return this.updateWorldMatrix(!0, !1), n.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(n) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ld, n, SS), n;
  }
  getWorldScale(n) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ld, gS, n), n;
  }
  getWorldDirection(n) {
    this.updateWorldMatrix(!0, !1);
    const u = this.matrixWorld.elements;
    return n.set(u[8], u[9], u[10]).normalize();
  }
  raycast() {
  }
  traverse(n) {
    n(this);
    const u = this.children;
    for (let o = 0, h = u.length; o < h; o++)
      u[o].traverse(n);
  }
  traverseVisible(n) {
    if (this.visible === !1) return;
    n(this);
    const u = this.children;
    for (let o = 0, h = u.length; o < h; o++)
      u[o].traverseVisible(n);
  }
  traverseAncestors(n) {
    const u = this.parent;
    u !== null && (n(u), u.traverseAncestors(n));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(n) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, n = !0);
    const u = this.children;
    for (let o = 0, h = u.length; o < h; o++) {
      const y = u[o];
      (y.matrixWorldAutoUpdate === !0 || n === !0) && y.updateMatrixWorld(n);
    }
  }
  updateWorldMatrix(n, u) {
    const o = this.parent;
    if (n === !0 && o !== null && o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), u === !0) {
      const h = this.children;
      for (let y = 0, S = h.length; y < S; y++) {
        const x = h[y];
        x.matrixWorldAutoUpdate === !0 && x.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(n) {
    const u = n === void 0 || typeof n == "string", o = {};
    u && (n = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, o.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const h = {};
    h.uuid = this.uuid, h.type = this.type, this.name !== "" && (h.name = this.name), this.castShadow === !0 && (h.castShadow = !0), this.receiveShadow === !0 && (h.receiveShadow = !0), this.visible === !1 && (h.visible = !1), this.frustumCulled === !1 && (h.frustumCulled = !1), this.renderOrder !== 0 && (h.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (h.userData = this.userData), h.layers = this.layers.mask, h.matrix = this.matrix.toArray(), h.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (h.matrixAutoUpdate = !1), this.isInstancedMesh && (h.type = "InstancedMesh", h.count = this.count, h.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (h.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (h.type = "BatchedMesh", h.perObjectFrustumCulled = this.perObjectFrustumCulled, h.sortObjects = this.sortObjects, h.drawRanges = this._drawRanges, h.reservedRanges = this._reservedRanges, h.visibility = this._visibility, h.active = this._active, h.bounds = this._bounds.map((x) => ({
      boxInitialized: x.boxInitialized,
      boxMin: x.box.min.toArray(),
      boxMax: x.box.max.toArray(),
      sphereInitialized: x.sphereInitialized,
      sphereRadius: x.sphere.radius,
      sphereCenter: x.sphere.center.toArray()
    })), h.maxGeometryCount = this._maxGeometryCount, h.maxVertexCount = this._maxVertexCount, h.maxIndexCount = this._maxIndexCount, h.geometryInitialized = this._geometryInitialized, h.geometryCount = this._geometryCount, h.matricesTexture = this._matricesTexture.toJSON(n), this.boundingSphere !== null && (h.boundingSphere = {
      center: h.boundingSphere.center.toArray(),
      radius: h.boundingSphere.radius
    }), this.boundingBox !== null && (h.boundingBox = {
      min: h.boundingBox.min.toArray(),
      max: h.boundingBox.max.toArray()
    }));
    function y(x, E) {
      return x[E.uuid] === void 0 && (x[E.uuid] = E.toJSON(n)), E.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? h.background = this.background.toJSON() : this.background.isTexture && (h.background = this.background.toJSON(n).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (h.environment = this.environment.toJSON(n).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      h.geometry = y(n.geometries, this.geometry);
      const x = this.geometry.parameters;
      if (x !== void 0 && x.shapes !== void 0) {
        const E = x.shapes;
        if (Array.isArray(E))
          for (let z = 0, M = E.length; z < M; z++) {
            const R = E[z];
            y(n.shapes, R);
          }
        else
          y(n.shapes, E);
      }
    }
    if (this.isSkinnedMesh && (h.bindMode = this.bindMode, h.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (y(n.skeletons, this.skeleton), h.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const x = [];
        for (let E = 0, z = this.material.length; E < z; E++)
          x.push(y(n.materials, this.material[E]));
        h.material = x;
      } else
        h.material = y(n.materials, this.material);
    if (this.children.length > 0) {
      h.children = [];
      for (let x = 0; x < this.children.length; x++)
        h.children.push(this.children[x].toJSON(n).object);
    }
    if (this.animations.length > 0) {
      h.animations = [];
      for (let x = 0; x < this.animations.length; x++) {
        const E = this.animations[x];
        h.animations.push(y(n.animations, E));
      }
    }
    if (u) {
      const x = S(n.geometries), E = S(n.materials), z = S(n.textures), M = S(n.images), R = S(n.shapes), C = S(n.skeletons), A = S(n.animations), U = S(n.nodes);
      x.length > 0 && (o.geometries = x), E.length > 0 && (o.materials = E), z.length > 0 && (o.textures = z), M.length > 0 && (o.images = M), R.length > 0 && (o.shapes = R), C.length > 0 && (o.skeletons = C), A.length > 0 && (o.animations = A), U.length > 0 && (o.nodes = U);
    }
    return o.object = h, o;
    function S(x) {
      const E = [];
      for (const z in x) {
        const M = x[z];
        delete M.metadata, E.push(M);
      }
      return E;
    }
  }
  clone(n) {
    return new this.constructor().copy(this, n);
  }
  copy(n, u = !0) {
    if (this.name = n.name, this.up.copy(n.up), this.position.copy(n.position), this.rotation.order = n.rotation.order, this.quaternion.copy(n.quaternion), this.scale.copy(n.scale), this.matrix.copy(n.matrix), this.matrixWorld.copy(n.matrixWorld), this.matrixAutoUpdate = n.matrixAutoUpdate, this.matrixWorldAutoUpdate = n.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = n.matrixWorldNeedsUpdate, this.layers.mask = n.layers.mask, this.visible = n.visible, this.castShadow = n.castShadow, this.receiveShadow = n.receiveShadow, this.frustumCulled = n.frustumCulled, this.renderOrder = n.renderOrder, this.animations = n.animations.slice(), this.userData = JSON.parse(JSON.stringify(n.userData)), u === !0)
      for (let o = 0; o < n.children.length; o++) {
        const h = n.children[o];
        this.add(h.clone());
      }
    return this;
  }
}
ol.DEFAULT_UP = /* @__PURE__ */ new nt(0, 1, 0);
ol.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ol.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Qi = /* @__PURE__ */ new nt(), os = /* @__PURE__ */ new nt(), u0 = /* @__PURE__ */ new nt(), rs = /* @__PURE__ */ new nt(), Rf = /* @__PURE__ */ new nt(), Cf = /* @__PURE__ */ new nt(), x1 = /* @__PURE__ */ new nt(), s0 = /* @__PURE__ */ new nt(), c0 = /* @__PURE__ */ new nt(), o0 = /* @__PURE__ */ new nt();
class Tu {
  constructor(n = new nt(), u = new nt(), o = new nt()) {
    this.a = n, this.b = u, this.c = o;
  }
  static getNormal(n, u, o, h) {
    h.subVectors(o, u), Qi.subVectors(n, u), h.cross(Qi);
    const y = h.lengthSq();
    return y > 0 ? h.multiplyScalar(1 / Math.sqrt(y)) : h.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(n, u, o, h, y) {
    Qi.subVectors(h, u), os.subVectors(o, u), u0.subVectors(n, u);
    const S = Qi.dot(Qi), x = Qi.dot(os), E = Qi.dot(u0), z = os.dot(os), M = os.dot(u0), R = S * z - x * x;
    if (R === 0)
      return y.set(0, 0, 0), null;
    const C = 1 / R, A = (z * E - x * M) * C, U = (S * M - x * E) * C;
    return y.set(1 - A - U, U, A);
  }
  static containsPoint(n, u, o, h) {
    return this.getBarycoord(n, u, o, h, rs) === null ? !1 : rs.x >= 0 && rs.y >= 0 && rs.x + rs.y <= 1;
  }
  static getInterpolation(n, u, o, h, y, S, x, E) {
    return this.getBarycoord(n, u, o, h, rs) === null ? (E.x = 0, E.y = 0, "z" in E && (E.z = 0), "w" in E && (E.w = 0), null) : (E.setScalar(0), E.addScaledVector(y, rs.x), E.addScaledVector(S, rs.y), E.addScaledVector(x, rs.z), E);
  }
  static isFrontFacing(n, u, o, h) {
    return Qi.subVectors(o, u), os.subVectors(n, u), Qi.cross(os).dot(h) < 0;
  }
  set(n, u, o) {
    return this.a.copy(n), this.b.copy(u), this.c.copy(o), this;
  }
  setFromPointsAndIndices(n, u, o, h) {
    return this.a.copy(n[u]), this.b.copy(n[o]), this.c.copy(n[h]), this;
  }
  setFromAttributeAndIndices(n, u, o, h) {
    return this.a.fromBufferAttribute(n, u), this.b.fromBufferAttribute(n, o), this.c.fromBufferAttribute(n, h), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    return this.a.copy(n.a), this.b.copy(n.b), this.c.copy(n.c), this;
  }
  getArea() {
    return Qi.subVectors(this.c, this.b), os.subVectors(this.a, this.b), Qi.cross(os).length() * 0.5;
  }
  getMidpoint(n) {
    return n.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(n) {
    return Tu.getNormal(this.a, this.b, this.c, n);
  }
  getPlane(n) {
    return n.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(n, u) {
    return Tu.getBarycoord(n, this.a, this.b, this.c, u);
  }
  getInterpolation(n, u, o, h, y) {
    return Tu.getInterpolation(n, this.a, this.b, this.c, u, o, h, y);
  }
  containsPoint(n) {
    return Tu.containsPoint(n, this.a, this.b, this.c);
  }
  isFrontFacing(n) {
    return Tu.isFrontFacing(this.a, this.b, this.c, n);
  }
  intersectsBox(n) {
    return n.intersectsTriangle(this);
  }
  closestPointToPoint(n, u) {
    const o = this.a, h = this.b, y = this.c;
    let S, x;
    Rf.subVectors(h, o), Cf.subVectors(y, o), s0.subVectors(n, o);
    const E = Rf.dot(s0), z = Cf.dot(s0);
    if (E <= 0 && z <= 0)
      return u.copy(o);
    c0.subVectors(n, h);
    const M = Rf.dot(c0), R = Cf.dot(c0);
    if (M >= 0 && R <= M)
      return u.copy(h);
    const C = E * R - M * z;
    if (C <= 0 && E >= 0 && M <= 0)
      return S = E / (E - M), u.copy(o).addScaledVector(Rf, S);
    o0.subVectors(n, y);
    const A = Rf.dot(o0), U = Cf.dot(o0);
    if (U >= 0 && A <= U)
      return u.copy(y);
    const X = A * z - E * U;
    if (X <= 0 && z >= 0 && U <= 0)
      return x = z / (z - U), u.copy(o).addScaledVector(Cf, x);
    const J = M * U - A * R;
    if (J <= 0 && R - M >= 0 && A - U >= 0)
      return x1.subVectors(y, h), x = (R - M) / (R - M + (A - U)), u.copy(h).addScaledVector(x1, x);
    const K = 1 / (J + X + C);
    return S = X * K, x = C * K, u.copy(o).addScaledVector(Rf, S).addScaledVector(Cf, x);
  }
  equals(n) {
    return n.a.equals(this.a) && n.b.equals(this.b) && n.c.equals(this.c);
  }
}
const u2 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, rc = { h: 0, s: 0, l: 0 }, Hp = { h: 0, s: 0, l: 0 };
function r0(T, n, u) {
  return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? T + (n - T) * 6 * u : u < 1 / 2 ? n : u < 2 / 3 ? T + (n - T) * 6 * (2 / 3 - u) : T;
}
class am {
  constructor(n, u, o) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(n, u, o);
  }
  set(n, u, o) {
    if (u === void 0 && o === void 0) {
      const h = n;
      h && h.isColor ? this.copy(h) : typeof h == "number" ? this.setHex(h) : typeof h == "string" && this.setStyle(h);
    } else
      this.setRGB(n, u, o);
    return this;
  }
  setScalar(n) {
    return this.r = n, this.g = n, this.b = n, this;
  }
  setHex(n, u = hc) {
    return n = Math.floor(n), this.r = (n >> 16 & 255) / 255, this.g = (n >> 8 & 255) / 255, this.b = (n & 255) / 255, Vi.toWorkingColorSpace(this, u), this;
  }
  setRGB(n, u, o, h = Vi.workingColorSpace) {
    return this.r = n, this.g = u, this.b = o, Vi.toWorkingColorSpace(this, h), this;
  }
  setHSL(n, u, o, h = Vi.workingColorSpace) {
    if (n = M0(n, 1), u = wa(u, 0, 1), o = wa(o, 0, 1), u === 0)
      this.r = this.g = this.b = o;
    else {
      const y = o <= 0.5 ? o * (1 + u) : o + u - o * u, S = 2 * o - y;
      this.r = r0(S, y, n + 1 / 3), this.g = r0(S, y, n), this.b = r0(S, y, n - 1 / 3);
    }
    return Vi.toWorkingColorSpace(this, h), this;
  }
  setStyle(n, u = hc) {
    function o(y) {
      y !== void 0 && parseFloat(y) < 1 && console.warn("THREE.Color: Alpha component of " + n + " will be ignored.");
    }
    let h;
    if (h = /^(\w+)\(([^\)]*)\)/.exec(n)) {
      let y;
      const S = h[1], x = h[2];
      switch (S) {
        case "rgb":
        case "rgba":
          if (y = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x))
            return o(y[4]), this.setRGB(
              Math.min(255, parseInt(y[1], 10)) / 255,
              Math.min(255, parseInt(y[2], 10)) / 255,
              Math.min(255, parseInt(y[3], 10)) / 255,
              u
            );
          if (y = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x))
            return o(y[4]), this.setRGB(
              Math.min(100, parseInt(y[1], 10)) / 100,
              Math.min(100, parseInt(y[2], 10)) / 100,
              Math.min(100, parseInt(y[3], 10)) / 100,
              u
            );
          break;
        case "hsl":
        case "hsla":
          if (y = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x))
            return o(y[4]), this.setHSL(
              parseFloat(y[1]) / 360,
              parseFloat(y[2]) / 100,
              parseFloat(y[3]) / 100,
              u
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + n);
      }
    } else if (h = /^\#([A-Fa-f\d]+)$/.exec(n)) {
      const y = h[1], S = y.length;
      if (S === 3)
        return this.setRGB(
          parseInt(y.charAt(0), 16) / 15,
          parseInt(y.charAt(1), 16) / 15,
          parseInt(y.charAt(2), 16) / 15,
          u
        );
      if (S === 6)
        return this.setHex(parseInt(y, 16), u);
      console.warn("THREE.Color: Invalid hex color " + n);
    } else if (n && n.length > 0)
      return this.setColorName(n, u);
    return this;
  }
  setColorName(n, u = hc) {
    const o = u2[n.toLowerCase()];
    return o !== void 0 ? this.setHex(o, u) : console.warn("THREE.Color: Unknown color " + n), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(n) {
    return this.r = n.r, this.g = n.g, this.b = n.b, this;
  }
  copySRGBToLinear(n) {
    return this.r = qf(n.r), this.g = qf(n.g), this.b = qf(n.b), this;
  }
  copyLinearToSRGB(n) {
    return this.r = Iy(n.r), this.g = Iy(n.g), this.b = Iy(n.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(n = hc) {
    return Vi.fromWorkingColorSpace(za.copy(this), n), Math.round(wa(za.r * 255, 0, 255)) * 65536 + Math.round(wa(za.g * 255, 0, 255)) * 256 + Math.round(wa(za.b * 255, 0, 255));
  }
  getHexString(n = hc) {
    return ("000000" + this.getHex(n).toString(16)).slice(-6);
  }
  getHSL(n, u = Vi.workingColorSpace) {
    Vi.fromWorkingColorSpace(za.copy(this), u);
    const o = za.r, h = za.g, y = za.b, S = Math.max(o, h, y), x = Math.min(o, h, y);
    let E, z;
    const M = (x + S) / 2;
    if (x === S)
      E = 0, z = 0;
    else {
      const R = S - x;
      switch (z = M <= 0.5 ? R / (S + x) : R / (2 - S - x), S) {
        case o:
          E = (h - y) / R + (h < y ? 6 : 0);
          break;
        case h:
          E = (y - o) / R + 2;
          break;
        case y:
          E = (o - h) / R + 4;
          break;
      }
      E /= 6;
    }
    return n.h = E, n.s = z, n.l = M, n;
  }
  getRGB(n, u = Vi.workingColorSpace) {
    return Vi.fromWorkingColorSpace(za.copy(this), u), n.r = za.r, n.g = za.g, n.b = za.b, n;
  }
  getStyle(n = hc) {
    Vi.fromWorkingColorSpace(za.copy(this), n);
    const u = za.r, o = za.g, h = za.b;
    return n !== hc ? `color(${n} ${u.toFixed(3)} ${o.toFixed(3)} ${h.toFixed(3)})` : `rgb(${Math.round(u * 255)},${Math.round(o * 255)},${Math.round(h * 255)})`;
  }
  offsetHSL(n, u, o) {
    return this.getHSL(rc), this.setHSL(rc.h + n, rc.s + u, rc.l + o);
  }
  add(n) {
    return this.r += n.r, this.g += n.g, this.b += n.b, this;
  }
  addColors(n, u) {
    return this.r = n.r + u.r, this.g = n.g + u.g, this.b = n.b + u.b, this;
  }
  addScalar(n) {
    return this.r += n, this.g += n, this.b += n, this;
  }
  sub(n) {
    return this.r = Math.max(0, this.r - n.r), this.g = Math.max(0, this.g - n.g), this.b = Math.max(0, this.b - n.b), this;
  }
  multiply(n) {
    return this.r *= n.r, this.g *= n.g, this.b *= n.b, this;
  }
  multiplyScalar(n) {
    return this.r *= n, this.g *= n, this.b *= n, this;
  }
  lerp(n, u) {
    return this.r += (n.r - this.r) * u, this.g += (n.g - this.g) * u, this.b += (n.b - this.b) * u, this;
  }
  lerpColors(n, u, o) {
    return this.r = n.r + (u.r - n.r) * o, this.g = n.g + (u.g - n.g) * o, this.b = n.b + (u.b - n.b) * o, this;
  }
  lerpHSL(n, u) {
    this.getHSL(rc), n.getHSL(Hp);
    const o = kd(rc.h, Hp.h, u), h = kd(rc.s, Hp.s, u), y = kd(rc.l, Hp.l, u);
    return this.setHSL(o, h, y), this;
  }
  setFromVector3(n) {
    return this.r = n.x, this.g = n.y, this.b = n.z, this;
  }
  applyMatrix3(n) {
    const u = this.r, o = this.g, h = this.b, y = n.elements;
    return this.r = y[0] * u + y[3] * o + y[6] * h, this.g = y[1] * u + y[4] * o + y[7] * h, this.b = y[2] * u + y[5] * o + y[8] * h, this;
  }
  equals(n) {
    return n.r === this.r && n.g === this.g && n.b === this.b;
  }
  fromArray(n, u = 0) {
    return this.r = n[u], this.g = n[u + 1], this.b = n[u + 2], this;
  }
  toArray(n = [], u = 0) {
    return n[u] = this.r, n[u + 1] = this.g, n[u + 2] = this.b, n;
  }
  fromBufferAttribute(n, u) {
    return this.r = n.getX(u), this.g = n.getY(u), this.b = n.getZ(u), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const za = /* @__PURE__ */ new am();
am.NAMES = u2;
let xS = 0;
class b0 extends tm {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: xS++ }), this.uuid = Qf(), this.name = "", this.type = "Material", this.blending = wv, this.side = E0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Fv, this.blendDst = Pv, this.blendEquation = Wv, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new am(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Iv, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = i1, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ef, this.stencilZFail = Ef, this.stencilZPass = Ef, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(n) {
    this._alphaTest > 0 != n > 0 && this.version++, this._alphaTest = n;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(n) {
    if (n !== void 0)
      for (const u in n) {
        const o = n[u];
        if (o === void 0) {
          console.warn(`THREE.Material: parameter '${u}' has value of undefined.`);
          continue;
        }
        const h = this[u];
        if (h === void 0) {
          console.warn(`THREE.Material: '${u}' is not a property of THREE.${this.type}.`);
          continue;
        }
        h && h.isColor ? h.set(o) : h && h.isVector3 && o && o.isVector3 ? h.copy(o) : this[u] = o;
      }
  }
  toJSON(n) {
    const u = n === void 0 || typeof n == "string";
    u && (n = {
      textures: {},
      images: {}
    });
    const o = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    o.uuid = this.uuid, o.type = this.type, this.name !== "" && (o.name = this.name), this.color && this.color.isColor && (o.color = this.color.getHex()), this.roughness !== void 0 && (o.roughness = this.roughness), this.metalness !== void 0 && (o.metalness = this.metalness), this.sheen !== void 0 && (o.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (o.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (o.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (o.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (o.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (o.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (o.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (o.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (o.shininess = this.shininess), this.clearcoat !== void 0 && (o.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (o.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (o.clearcoatMap = this.clearcoatMap.toJSON(n).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (o.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(n).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (o.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(n).uuid, o.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (o.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (o.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (o.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (o.iridescenceMap = this.iridescenceMap.toJSON(n).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (o.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(n).uuid), this.anisotropy !== void 0 && (o.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (o.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (o.anisotropyMap = this.anisotropyMap.toJSON(n).uuid), this.map && this.map.isTexture && (o.map = this.map.toJSON(n).uuid), this.matcap && this.matcap.isTexture && (o.matcap = this.matcap.toJSON(n).uuid), this.alphaMap && this.alphaMap.isTexture && (o.alphaMap = this.alphaMap.toJSON(n).uuid), this.lightMap && this.lightMap.isTexture && (o.lightMap = this.lightMap.toJSON(n).uuid, o.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (o.aoMap = this.aoMap.toJSON(n).uuid, o.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (o.bumpMap = this.bumpMap.toJSON(n).uuid, o.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (o.normalMap = this.normalMap.toJSON(n).uuid, o.normalMapType = this.normalMapType, o.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (o.displacementMap = this.displacementMap.toJSON(n).uuid, o.displacementScale = this.displacementScale, o.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (o.roughnessMap = this.roughnessMap.toJSON(n).uuid), this.metalnessMap && this.metalnessMap.isTexture && (o.metalnessMap = this.metalnessMap.toJSON(n).uuid), this.emissiveMap && this.emissiveMap.isTexture && (o.emissiveMap = this.emissiveMap.toJSON(n).uuid), this.specularMap && this.specularMap.isTexture && (o.specularMap = this.specularMap.toJSON(n).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (o.specularIntensityMap = this.specularIntensityMap.toJSON(n).uuid), this.specularColorMap && this.specularColorMap.isTexture && (o.specularColorMap = this.specularColorMap.toJSON(n).uuid), this.envMap && this.envMap.isTexture && (o.envMap = this.envMap.toJSON(n).uuid, this.combine !== void 0 && (o.combine = this.combine)), this.envMapRotation !== void 0 && (o.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (o.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (o.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (o.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (o.gradientMap = this.gradientMap.toJSON(n).uuid), this.transmission !== void 0 && (o.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (o.transmissionMap = this.transmissionMap.toJSON(n).uuid), this.thickness !== void 0 && (o.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (o.thicknessMap = this.thicknessMap.toJSON(n).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (o.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (o.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (o.size = this.size), this.shadowSide !== null && (o.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (o.sizeAttenuation = this.sizeAttenuation), this.blending !== wv && (o.blending = this.blending), this.side !== E0 && (o.side = this.side), this.vertexColors === !0 && (o.vertexColors = !0), this.opacity < 1 && (o.opacity = this.opacity), this.transparent === !0 && (o.transparent = !0), this.blendSrc !== Fv && (o.blendSrc = this.blendSrc), this.blendDst !== Pv && (o.blendDst = this.blendDst), this.blendEquation !== Wv && (o.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (o.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (o.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (o.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (o.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (o.blendAlpha = this.blendAlpha), this.depthFunc !== Iv && (o.depthFunc = this.depthFunc), this.depthTest === !1 && (o.depthTest = this.depthTest), this.depthWrite === !1 && (o.depthWrite = this.depthWrite), this.colorWrite === !1 && (o.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (o.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== i1 && (o.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (o.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (o.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ef && (o.stencilFail = this.stencilFail), this.stencilZFail !== Ef && (o.stencilZFail = this.stencilZFail), this.stencilZPass !== Ef && (o.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (o.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (o.rotation = this.rotation), this.polygonOffset === !0 && (o.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (o.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (o.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (o.linewidth = this.linewidth), this.dashSize !== void 0 && (o.dashSize = this.dashSize), this.gapSize !== void 0 && (o.gapSize = this.gapSize), this.scale !== void 0 && (o.scale = this.scale), this.dithering === !0 && (o.dithering = !0), this.alphaTest > 0 && (o.alphaTest = this.alphaTest), this.alphaHash === !0 && (o.alphaHash = !0), this.alphaToCoverage === !0 && (o.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (o.premultipliedAlpha = !0), this.forceSinglePass === !0 && (o.forceSinglePass = !0), this.wireframe === !0 && (o.wireframe = !0), this.wireframeLinewidth > 1 && (o.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (o.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (o.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (o.flatShading = !0), this.visible === !1 && (o.visible = !1), this.toneMapped === !1 && (o.toneMapped = !1), this.fog === !1 && (o.fog = !1), Object.keys(this.userData).length > 0 && (o.userData = this.userData);
    function h(y) {
      const S = [];
      for (const x in y) {
        const E = y[x];
        delete E.metadata, S.push(E);
      }
      return S;
    }
    if (u) {
      const y = h(n.textures), S = h(n.images);
      y.length > 0 && (o.textures = y), S.length > 0 && (o.images = S);
    }
    return o;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.name = n.name, this.blending = n.blending, this.side = n.side, this.vertexColors = n.vertexColors, this.opacity = n.opacity, this.transparent = n.transparent, this.blendSrc = n.blendSrc, this.blendDst = n.blendDst, this.blendEquation = n.blendEquation, this.blendSrcAlpha = n.blendSrcAlpha, this.blendDstAlpha = n.blendDstAlpha, this.blendEquationAlpha = n.blendEquationAlpha, this.blendColor.copy(n.blendColor), this.blendAlpha = n.blendAlpha, this.depthFunc = n.depthFunc, this.depthTest = n.depthTest, this.depthWrite = n.depthWrite, this.stencilWriteMask = n.stencilWriteMask, this.stencilFunc = n.stencilFunc, this.stencilRef = n.stencilRef, this.stencilFuncMask = n.stencilFuncMask, this.stencilFail = n.stencilFail, this.stencilZFail = n.stencilZFail, this.stencilZPass = n.stencilZPass, this.stencilWrite = n.stencilWrite;
    const u = n.clippingPlanes;
    let o = null;
    if (u !== null) {
      const h = u.length;
      o = new Array(h);
      for (let y = 0; y !== h; ++y)
        o[y] = u[y].clone();
    }
    return this.clippingPlanes = o, this.clipIntersection = n.clipIntersection, this.clipShadows = n.clipShadows, this.shadowSide = n.shadowSide, this.colorWrite = n.colorWrite, this.precision = n.precision, this.polygonOffset = n.polygonOffset, this.polygonOffsetFactor = n.polygonOffsetFactor, this.polygonOffsetUnits = n.polygonOffsetUnits, this.dithering = n.dithering, this.alphaTest = n.alphaTest, this.alphaHash = n.alphaHash, this.alphaToCoverage = n.alphaToCoverage, this.premultipliedAlpha = n.premultipliedAlpha, this.forceSinglePass = n.forceSinglePass, this.visible = n.visible, this.toneMapped = n.toneMapped, this.userData = JSON.parse(JSON.stringify(n.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(n) {
    n === !0 && this.version++;
  }
}
class TS extends b0 {
  constructor(n) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new am(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ms(), this.combine = B2, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.color.copy(n.color), this.map = n.map, this.lightMap = n.lightMap, this.lightMapIntensity = n.lightMapIntensity, this.aoMap = n.aoMap, this.aoMapIntensity = n.aoMapIntensity, this.specularMap = n.specularMap, this.alphaMap = n.alphaMap, this.envMap = n.envMap, this.envMapRotation.copy(n.envMapRotation), this.combine = n.combine, this.reflectivity = n.reflectivity, this.refractionRatio = n.refractionRatio, this.wireframe = n.wireframe, this.wireframeLinewidth = n.wireframeLinewidth, this.wireframeLinecap = n.wireframeLinecap, this.wireframeLinejoin = n.wireframeLinejoin, this.fog = n.fog, this;
  }
}
const Hn = /* @__PURE__ */ new nt(), Bp = /* @__PURE__ */ new re();
class Eo {
  constructor(n, u, o = !1) {
    if (Array.isArray(n))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = n, this.itemSize = u, this.count = n !== void 0 ? n.length / u : 0, this.normalized = o, this.usage = u1, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = I1, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(n) {
    n === !0 && this.version++;
  }
  get updateRange() {
    return sS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(n) {
    return this.usage = n, this;
  }
  addUpdateRange(n, u) {
    this.updateRanges.push({ start: n, count: u });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(n) {
    return this.name = n.name, this.array = new n.array.constructor(n.array), this.itemSize = n.itemSize, this.count = n.count, this.normalized = n.normalized, this.usage = n.usage, this.gpuType = n.gpuType, this;
  }
  copyAt(n, u, o) {
    n *= this.itemSize, o *= u.itemSize;
    for (let h = 0, y = this.itemSize; h < y; h++)
      this.array[n + h] = u.array[o + h];
    return this;
  }
  copyArray(n) {
    return this.array.set(n), this;
  }
  applyMatrix3(n) {
    if (this.itemSize === 2)
      for (let u = 0, o = this.count; u < o; u++)
        Bp.fromBufferAttribute(this, u), Bp.applyMatrix3(n), this.setXY(u, Bp.x, Bp.y);
    else if (this.itemSize === 3)
      for (let u = 0, o = this.count; u < o; u++)
        Hn.fromBufferAttribute(this, u), Hn.applyMatrix3(n), this.setXYZ(u, Hn.x, Hn.y, Hn.z);
    return this;
  }
  applyMatrix4(n) {
    for (let u = 0, o = this.count; u < o; u++)
      Hn.fromBufferAttribute(this, u), Hn.applyMatrix4(n), this.setXYZ(u, Hn.x, Hn.y, Hn.z);
    return this;
  }
  applyNormalMatrix(n) {
    for (let u = 0, o = this.count; u < o; u++)
      Hn.fromBufferAttribute(this, u), Hn.applyNormalMatrix(n), this.setXYZ(u, Hn.x, Hn.y, Hn.z);
    return this;
  }
  transformDirection(n) {
    for (let u = 0, o = this.count; u < o; u++)
      Hn.fromBufferAttribute(this, u), Hn.transformDirection(n), this.setXYZ(u, Hn.x, Hn.y, Hn.z);
    return this;
  }
  set(n, u = 0) {
    return this.array.set(n, u), this;
  }
  getComponent(n, u) {
    let o = this.array[n * this.itemSize + u];
    return this.normalized && (o = Bf(o, this.array)), o;
  }
  setComponent(n, u, o) {
    return this.normalized && (o = La(o, this.array)), this.array[n * this.itemSize + u] = o, this;
  }
  getX(n) {
    let u = this.array[n * this.itemSize];
    return this.normalized && (u = Bf(u, this.array)), u;
  }
  setX(n, u) {
    return this.normalized && (u = La(u, this.array)), this.array[n * this.itemSize] = u, this;
  }
  getY(n) {
    let u = this.array[n * this.itemSize + 1];
    return this.normalized && (u = Bf(u, this.array)), u;
  }
  setY(n, u) {
    return this.normalized && (u = La(u, this.array)), this.array[n * this.itemSize + 1] = u, this;
  }
  getZ(n) {
    let u = this.array[n * this.itemSize + 2];
    return this.normalized && (u = Bf(u, this.array)), u;
  }
  setZ(n, u) {
    return this.normalized && (u = La(u, this.array)), this.array[n * this.itemSize + 2] = u, this;
  }
  getW(n) {
    let u = this.array[n * this.itemSize + 3];
    return this.normalized && (u = Bf(u, this.array)), u;
  }
  setW(n, u) {
    return this.normalized && (u = La(u, this.array)), this.array[n * this.itemSize + 3] = u, this;
  }
  setXY(n, u, o) {
    return n *= this.itemSize, this.normalized && (u = La(u, this.array), o = La(o, this.array)), this.array[n + 0] = u, this.array[n + 1] = o, this;
  }
  setXYZ(n, u, o, h) {
    return n *= this.itemSize, this.normalized && (u = La(u, this.array), o = La(o, this.array), h = La(h, this.array)), this.array[n + 0] = u, this.array[n + 1] = o, this.array[n + 2] = h, this;
  }
  setXYZW(n, u, o, h, y) {
    return n *= this.itemSize, this.normalized && (u = La(u, this.array), o = La(o, this.array), h = La(h, this.array), y = La(y, this.array)), this.array[n + 0] = u, this.array[n + 1] = o, this.array[n + 2] = h, this.array[n + 3] = y, this;
  }
  onUpload(n) {
    return this.onUploadCallback = n, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const n = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (n.name = this.name), this.usage !== u1 && (n.usage = this.usage), n;
  }
}
class zS extends Eo {
  constructor(n, u, o) {
    super(new Uint16Array(n), u, o);
  }
}
class MS extends Eo {
  constructor(n, u, o) {
    super(new Uint32Array(n), u, o);
  }
}
class Yf extends Eo {
  constructor(n, u, o) {
    super(new Float32Array(n), u, o);
  }
}
let _S = 0;
const hi = /* @__PURE__ */ new Wa(), f0 = /* @__PURE__ */ new ol(), Nf = /* @__PURE__ */ new nt(), Ol = /* @__PURE__ */ new nm(), wd = /* @__PURE__ */ new nm(), ea = /* @__PURE__ */ new nt();
class Xf extends tm {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: _S++ }), this.uuid = Qf(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(n) {
    return Array.isArray(n) ? this.index = new (uS(n) ? MS : zS)(n, 1) : this.index = n, this;
  }
  getAttribute(n) {
    return this.attributes[n];
  }
  setAttribute(n, u) {
    return this.attributes[n] = u, this;
  }
  deleteAttribute(n) {
    return delete this.attributes[n], this;
  }
  hasAttribute(n) {
    return this.attributes[n] !== void 0;
  }
  addGroup(n, u, o = 0) {
    this.groups.push({
      start: n,
      count: u,
      materialIndex: o
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(n, u) {
    this.drawRange.start = n, this.drawRange.count = u;
  }
  applyMatrix4(n) {
    const u = this.attributes.position;
    u !== void 0 && (u.applyMatrix4(n), u.needsUpdate = !0);
    const o = this.attributes.normal;
    if (o !== void 0) {
      const y = new dc().getNormalMatrix(n);
      o.applyNormalMatrix(y), o.needsUpdate = !0;
    }
    const h = this.attributes.tangent;
    return h !== void 0 && (h.transformDirection(n), h.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(n) {
    return hi.makeRotationFromQuaternion(n), this.applyMatrix4(hi), this;
  }
  rotateX(n) {
    return hi.makeRotationX(n), this.applyMatrix4(hi), this;
  }
  rotateY(n) {
    return hi.makeRotationY(n), this.applyMatrix4(hi), this;
  }
  rotateZ(n) {
    return hi.makeRotationZ(n), this.applyMatrix4(hi), this;
  }
  translate(n, u, o) {
    return hi.makeTranslation(n, u, o), this.applyMatrix4(hi), this;
  }
  scale(n, u, o) {
    return hi.makeScale(n, u, o), this.applyMatrix4(hi), this;
  }
  lookAt(n) {
    return f0.lookAt(n), f0.updateMatrix(), this.applyMatrix4(f0.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Nf).negate(), this.translate(Nf.x, Nf.y, Nf.z), this;
  }
  setFromPoints(n) {
    const u = [];
    for (let o = 0, h = n.length; o < h; o++) {
      const y = n[o];
      u.push(y.x, y.y, y.z || 0);
    }
    return this.setAttribute("position", new Yf(u, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new nm());
    const n = this.attributes.position, u = this.morphAttributes.position;
    if (n && n.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new nt(-1 / 0, -1 / 0, -1 / 0),
        new nt(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (n !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(n), u)
        for (let o = 0, h = u.length; o < h; o++) {
          const y = u[o];
          Ol.setFromBufferAttribute(y), this.morphTargetsRelative ? (ea.addVectors(this.boundingBox.min, Ol.min), this.boundingBox.expandByPoint(ea), ea.addVectors(this.boundingBox.max, Ol.max), this.boundingBox.expandByPoint(ea)) : (this.boundingBox.expandByPoint(Ol.min), this.boundingBox.expandByPoint(Ol.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new _0());
    const n = this.attributes.position, u = this.morphAttributes.position;
    if (n && n.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new nt(), 1 / 0);
      return;
    }
    if (n) {
      const o = this.boundingSphere.center;
      if (Ol.setFromBufferAttribute(n), u)
        for (let y = 0, S = u.length; y < S; y++) {
          const x = u[y];
          wd.setFromBufferAttribute(x), this.morphTargetsRelative ? (ea.addVectors(Ol.min, wd.min), Ol.expandByPoint(ea), ea.addVectors(Ol.max, wd.max), Ol.expandByPoint(ea)) : (Ol.expandByPoint(wd.min), Ol.expandByPoint(wd.max));
        }
      Ol.getCenter(o);
      let h = 0;
      for (let y = 0, S = n.count; y < S; y++)
        ea.fromBufferAttribute(n, y), h = Math.max(h, o.distanceToSquared(ea));
      if (u)
        for (let y = 0, S = u.length; y < S; y++) {
          const x = u[y], E = this.morphTargetsRelative;
          for (let z = 0, M = x.count; z < M; z++)
            ea.fromBufferAttribute(x, z), E && (Nf.fromBufferAttribute(n, z), ea.add(Nf)), h = Math.max(h, o.distanceToSquared(ea));
        }
      this.boundingSphere.radius = Math.sqrt(h), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const n = this.index, u = this.attributes;
    if (n === null || u.position === void 0 || u.normal === void 0 || u.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const o = u.position, h = u.normal, y = u.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Eo(new Float32Array(4 * o.count), 4));
    const S = this.getAttribute("tangent"), x = [], E = [];
    for (let Rt = 0; Rt < o.count; Rt++)
      x[Rt] = new nt(), E[Rt] = new nt();
    const z = new nt(), M = new nt(), R = new nt(), C = new re(), A = new re(), U = new re(), X = new nt(), J = new nt();
    function K(Rt, Vt, Gt) {
      z.fromBufferAttribute(o, Rt), M.fromBufferAttribute(o, Vt), R.fromBufferAttribute(o, Gt), C.fromBufferAttribute(y, Rt), A.fromBufferAttribute(y, Vt), U.fromBufferAttribute(y, Gt), M.sub(z), R.sub(z), A.sub(C), U.sub(C);
      const jt = 1 / (A.x * U.y - U.x * A.y);
      isFinite(jt) && (X.copy(M).multiplyScalar(U.y).addScaledVector(R, -A.y).multiplyScalar(jt), J.copy(R).multiplyScalar(A.x).addScaledVector(M, -U.x).multiplyScalar(jt), x[Rt].add(X), x[Vt].add(X), x[Gt].add(X), E[Rt].add(J), E[Vt].add(J), E[Gt].add(J));
    }
    let k = this.groups;
    k.length === 0 && (k = [{
      start: 0,
      count: n.count
    }]);
    for (let Rt = 0, Vt = k.length; Rt < Vt; ++Rt) {
      const Gt = k[Rt], jt = Gt.start, ye = Gt.count;
      for (let it = jt, Ft = jt + ye; it < Ft; it += 3)
        K(
          n.getX(it + 0),
          n.getX(it + 1),
          n.getX(it + 2)
        );
    }
    const at = new nt(), P = new nt(), ut = new nt(), Tt = new nt();
    function Nt(Rt) {
      ut.fromBufferAttribute(h, Rt), Tt.copy(ut);
      const Vt = x[Rt];
      at.copy(Vt), at.sub(ut.multiplyScalar(ut.dot(Vt))).normalize(), P.crossVectors(Tt, Vt);
      const jt = P.dot(E[Rt]) < 0 ? -1 : 1;
      S.setXYZW(Rt, at.x, at.y, at.z, jt);
    }
    for (let Rt = 0, Vt = k.length; Rt < Vt; ++Rt) {
      const Gt = k[Rt], jt = Gt.start, ye = Gt.count;
      for (let it = jt, Ft = jt + ye; it < Ft; it += 3)
        Nt(n.getX(it + 0)), Nt(n.getX(it + 1)), Nt(n.getX(it + 2));
    }
  }
  computeVertexNormals() {
    const n = this.index, u = this.getAttribute("position");
    if (u !== void 0) {
      let o = this.getAttribute("normal");
      if (o === void 0)
        o = new Eo(new Float32Array(u.count * 3), 3), this.setAttribute("normal", o);
      else
        for (let C = 0, A = o.count; C < A; C++)
          o.setXYZ(C, 0, 0, 0);
      const h = new nt(), y = new nt(), S = new nt(), x = new nt(), E = new nt(), z = new nt(), M = new nt(), R = new nt();
      if (n)
        for (let C = 0, A = n.count; C < A; C += 3) {
          const U = n.getX(C + 0), X = n.getX(C + 1), J = n.getX(C + 2);
          h.fromBufferAttribute(u, U), y.fromBufferAttribute(u, X), S.fromBufferAttribute(u, J), M.subVectors(S, y), R.subVectors(h, y), M.cross(R), x.fromBufferAttribute(o, U), E.fromBufferAttribute(o, X), z.fromBufferAttribute(o, J), x.add(M), E.add(M), z.add(M), o.setXYZ(U, x.x, x.y, x.z), o.setXYZ(X, E.x, E.y, E.z), o.setXYZ(J, z.x, z.y, z.z);
        }
      else
        for (let C = 0, A = u.count; C < A; C += 3)
          h.fromBufferAttribute(u, C + 0), y.fromBufferAttribute(u, C + 1), S.fromBufferAttribute(u, C + 2), M.subVectors(S, y), R.subVectors(h, y), M.cross(R), o.setXYZ(C + 0, M.x, M.y, M.z), o.setXYZ(C + 1, M.x, M.y, M.z), o.setXYZ(C + 2, M.x, M.y, M.z);
      this.normalizeNormals(), o.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const n = this.attributes.normal;
    for (let u = 0, o = n.count; u < o; u++)
      ea.fromBufferAttribute(n, u), ea.normalize(), n.setXYZ(u, ea.x, ea.y, ea.z);
  }
  toNonIndexed() {
    function n(x, E) {
      const z = x.array, M = x.itemSize, R = x.normalized, C = new z.constructor(E.length * M);
      let A = 0, U = 0;
      for (let X = 0, J = E.length; X < J; X++) {
        x.isInterleavedBufferAttribute ? A = E[X] * x.data.stride + x.offset : A = E[X] * M;
        for (let K = 0; K < M; K++)
          C[U++] = z[A++];
      }
      return new Eo(C, M, R);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const u = new Xf(), o = this.index.array, h = this.attributes;
    for (const x in h) {
      const E = h[x], z = n(E, o);
      u.setAttribute(x, z);
    }
    const y = this.morphAttributes;
    for (const x in y) {
      const E = [], z = y[x];
      for (let M = 0, R = z.length; M < R; M++) {
        const C = z[M], A = n(C, o);
        E.push(A);
      }
      u.morphAttributes[x] = E;
    }
    u.morphTargetsRelative = this.morphTargetsRelative;
    const S = this.groups;
    for (let x = 0, E = S.length; x < E; x++) {
      const z = S[x];
      u.addGroup(z.start, z.count, z.materialIndex);
    }
    return u;
  }
  toJSON() {
    const n = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), Object.keys(this.userData).length > 0 && (n.userData = this.userData), this.parameters !== void 0) {
      const E = this.parameters;
      for (const z in E)
        E[z] !== void 0 && (n[z] = E[z]);
      return n;
    }
    n.data = { attributes: {} };
    const u = this.index;
    u !== null && (n.data.index = {
      type: u.array.constructor.name,
      array: Array.prototype.slice.call(u.array)
    });
    const o = this.attributes;
    for (const E in o) {
      const z = o[E];
      n.data.attributes[E] = z.toJSON(n.data);
    }
    const h = {};
    let y = !1;
    for (const E in this.morphAttributes) {
      const z = this.morphAttributes[E], M = [];
      for (let R = 0, C = z.length; R < C; R++) {
        const A = z[R];
        M.push(A.toJSON(n.data));
      }
      M.length > 0 && (h[E] = M, y = !0);
    }
    y && (n.data.morphAttributes = h, n.data.morphTargetsRelative = this.morphTargetsRelative);
    const S = this.groups;
    S.length > 0 && (n.data.groups = JSON.parse(JSON.stringify(S)));
    const x = this.boundingSphere;
    return x !== null && (n.data.boundingSphere = {
      center: x.center.toArray(),
      radius: x.radius
    }), n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const u = {};
    this.name = n.name;
    const o = n.index;
    o !== null && this.setIndex(o.clone(u));
    const h = n.attributes;
    for (const z in h) {
      const M = h[z];
      this.setAttribute(z, M.clone(u));
    }
    const y = n.morphAttributes;
    for (const z in y) {
      const M = [], R = y[z];
      for (let C = 0, A = R.length; C < A; C++)
        M.push(R[C].clone(u));
      this.morphAttributes[z] = M;
    }
    this.morphTargetsRelative = n.morphTargetsRelative;
    const S = n.groups;
    for (let z = 0, M = S.length; z < M; z++) {
      const R = S[z];
      this.addGroup(R.start, R.count, R.materialIndex);
    }
    const x = n.boundingBox;
    x !== null && (this.boundingBox = x.clone());
    const E = n.boundingSphere;
    return E !== null && (this.boundingSphere = E.clone()), this.drawRange.start = n.drawRange.start, this.drawRange.count = n.drawRange.count, this.userData = n.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const T1 = /* @__PURE__ */ new Wa(), vo = /* @__PURE__ */ new i2(), qp = /* @__PURE__ */ new _0(), z1 = /* @__PURE__ */ new nt(), Df = /* @__PURE__ */ new nt(), Uf = /* @__PURE__ */ new nt(), Of = /* @__PURE__ */ new nt(), h0 = /* @__PURE__ */ new nt(), Yp = /* @__PURE__ */ new nt(), Vp = /* @__PURE__ */ new re(), jp = /* @__PURE__ */ new re(), Gp = /* @__PURE__ */ new re(), M1 = /* @__PURE__ */ new nt(), _1 = /* @__PURE__ */ new nt(), b1 = /* @__PURE__ */ new nt(), Qp = /* @__PURE__ */ new nt(), Xp = /* @__PURE__ */ new nt();
class bS extends ol {
  constructor(n = new Xf(), u = new TS()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = n, this.material = u, this.updateMorphTargets();
  }
  copy(n, u) {
    return super.copy(n, u), n.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = n.morphTargetInfluences.slice()), n.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, n.morphTargetDictionary)), this.material = Array.isArray(n.material) ? n.material.slice() : n.material, this.geometry = n.geometry, this;
  }
  updateMorphTargets() {
    const u = this.geometry.morphAttributes, o = Object.keys(u);
    if (o.length > 0) {
      const h = u[o[0]];
      if (h !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let y = 0, S = h.length; y < S; y++) {
          const x = h[y].name || String(y);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[x] = y;
        }
      }
    }
  }
  getVertexPosition(n, u) {
    const o = this.geometry, h = o.attributes.position, y = o.morphAttributes.position, S = o.morphTargetsRelative;
    u.fromBufferAttribute(h, n);
    const x = this.morphTargetInfluences;
    if (y && x) {
      Yp.set(0, 0, 0);
      for (let E = 0, z = y.length; E < z; E++) {
        const M = x[E], R = y[E];
        M !== 0 && (h0.fromBufferAttribute(R, n), S ? Yp.addScaledVector(h0, M) : Yp.addScaledVector(h0.sub(u), M));
      }
      u.add(Yp);
    }
    return u;
  }
  raycast(n, u) {
    const o = this.geometry, h = this.material, y = this.matrixWorld;
    h !== void 0 && (o.boundingSphere === null && o.computeBoundingSphere(), qp.copy(o.boundingSphere), qp.applyMatrix4(y), vo.copy(n.ray).recast(n.near), !(qp.containsPoint(vo.origin) === !1 && (vo.intersectSphere(qp, z1) === null || vo.origin.distanceToSquared(z1) > (n.far - n.near) ** 2)) && (T1.copy(y).invert(), vo.copy(n.ray).applyMatrix4(T1), !(o.boundingBox !== null && vo.intersectsBox(o.boundingBox) === !1) && this._computeIntersections(n, u, vo)));
  }
  _computeIntersections(n, u, o) {
    let h;
    const y = this.geometry, S = this.material, x = y.index, E = y.attributes.position, z = y.attributes.uv, M = y.attributes.uv1, R = y.attributes.normal, C = y.groups, A = y.drawRange;
    if (x !== null)
      if (Array.isArray(S))
        for (let U = 0, X = C.length; U < X; U++) {
          const J = C[U], K = S[J.materialIndex], k = Math.max(J.start, A.start), at = Math.min(x.count, Math.min(J.start + J.count, A.start + A.count));
          for (let P = k, ut = at; P < ut; P += 3) {
            const Tt = x.getX(P), Nt = x.getX(P + 1), Rt = x.getX(P + 2);
            h = Zp(this, K, n, o, z, M, R, Tt, Nt, Rt), h && (h.faceIndex = Math.floor(P / 3), h.face.materialIndex = J.materialIndex, u.push(h));
          }
        }
      else {
        const U = Math.max(0, A.start), X = Math.min(x.count, A.start + A.count);
        for (let J = U, K = X; J < K; J += 3) {
          const k = x.getX(J), at = x.getX(J + 1), P = x.getX(J + 2);
          h = Zp(this, S, n, o, z, M, R, k, at, P), h && (h.faceIndex = Math.floor(J / 3), u.push(h));
        }
      }
    else if (E !== void 0)
      if (Array.isArray(S))
        for (let U = 0, X = C.length; U < X; U++) {
          const J = C[U], K = S[J.materialIndex], k = Math.max(J.start, A.start), at = Math.min(E.count, Math.min(J.start + J.count, A.start + A.count));
          for (let P = k, ut = at; P < ut; P += 3) {
            const Tt = P, Nt = P + 1, Rt = P + 2;
            h = Zp(this, K, n, o, z, M, R, Tt, Nt, Rt), h && (h.faceIndex = Math.floor(P / 3), h.face.materialIndex = J.materialIndex, u.push(h));
          }
        }
      else {
        const U = Math.max(0, A.start), X = Math.min(E.count, A.start + A.count);
        for (let J = U, K = X; J < K; J += 3) {
          const k = J, at = J + 1, P = J + 2;
          h = Zp(this, S, n, o, z, M, R, k, at, P), h && (h.faceIndex = Math.floor(J / 3), u.push(h));
        }
      }
  }
}
function AS(T, n, u, o, h, y, S, x) {
  let E;
  if (n.side === O2 ? E = o.intersectTriangle(S, y, h, !0, x) : E = o.intersectTriangle(h, y, S, n.side === E0, x), E === null) return null;
  Xp.copy(x), Xp.applyMatrix4(T.matrixWorld);
  const z = u.ray.origin.distanceTo(Xp);
  return z < u.near || z > u.far ? null : {
    distance: z,
    point: Xp.clone(),
    object: T
  };
}
function Zp(T, n, u, o, h, y, S, x, E, z) {
  T.getVertexPosition(x, Df), T.getVertexPosition(E, Uf), T.getVertexPosition(z, Of);
  const M = AS(T, n, u, o, Df, Uf, Of, Qp);
  if (M) {
    h && (Vp.fromBufferAttribute(h, x), jp.fromBufferAttribute(h, E), Gp.fromBufferAttribute(h, z), M.uv = Tu.getInterpolation(Qp, Df, Uf, Of, Vp, jp, Gp, new re())), y && (Vp.fromBufferAttribute(y, x), jp.fromBufferAttribute(y, E), Gp.fromBufferAttribute(y, z), M.uv1 = Tu.getInterpolation(Qp, Df, Uf, Of, Vp, jp, Gp, new re())), S && (M1.fromBufferAttribute(S, x), _1.fromBufferAttribute(S, E), b1.fromBufferAttribute(S, z), M.normal = Tu.getInterpolation(Qp, Df, Uf, Of, M1, _1, b1, new nt()), M.normal.dot(o.direction) > 0 && M.normal.multiplyScalar(-1));
    const R = {
      a: x,
      b: E,
      c: z,
      normal: new nt(),
      materialIndex: 0
    };
    Tu.getNormal(Df, Uf, Of, R.normal), M.face = R;
  }
  return M;
}
function RS(T) {
  const n = {};
  for (const u in T) {
    n[u] = {};
    for (const o in T[u]) {
      const h = T[u][o];
      h && (h.isColor || h.isMatrix3 || h.isMatrix4 || h.isVector2 || h.isVector3 || h.isVector4 || h.isTexture || h.isQuaternion) ? h.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), n[u][o] = null) : n[u][o] = h.clone() : Array.isArray(h) ? n[u][o] = h.slice() : n[u][o] = h;
    }
  }
  return n;
}
function CS(T) {
  const n = [];
  for (let u = 0; u < T.length; u++)
    n.push(T[u].clone());
  return n;
}
var NS = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, DS = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class wp extends b0 {
  constructor(n) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = NS, this.fragmentShader = DS, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, n !== void 0 && this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.fragmentShader = n.fragmentShader, this.vertexShader = n.vertexShader, this.uniforms = RS(n.uniforms), this.uniformsGroups = CS(n.uniformsGroups), this.defines = Object.assign({}, n.defines), this.wireframe = n.wireframe, this.wireframeLinewidth = n.wireframeLinewidth, this.fog = n.fog, this.lights = n.lights, this.clipping = n.clipping, this.extensions = Object.assign({}, n.extensions), this.glslVersion = n.glslVersion, this;
  }
  toJSON(n) {
    const u = super.toJSON(n);
    u.glslVersion = this.glslVersion, u.uniforms = {};
    for (const h in this.uniforms) {
      const S = this.uniforms[h].value;
      S && S.isTexture ? u.uniforms[h] = {
        type: "t",
        value: S.toJSON(n).uuid
      } : S && S.isColor ? u.uniforms[h] = {
        type: "c",
        value: S.getHex()
      } : S && S.isVector2 ? u.uniforms[h] = {
        type: "v2",
        value: S.toArray()
      } : S && S.isVector3 ? u.uniforms[h] = {
        type: "v3",
        value: S.toArray()
      } : S && S.isVector4 ? u.uniforms[h] = {
        type: "v4",
        value: S.toArray()
      } : S && S.isMatrix3 ? u.uniforms[h] = {
        type: "m3",
        value: S.toArray()
      } : S && S.isMatrix4 ? u.uniforms[h] = {
        type: "m4",
        value: S.toArray()
      } : u.uniforms[h] = {
        value: S
      };
    }
    Object.keys(this.defines).length > 0 && (u.defines = this.defines), u.vertexShader = this.vertexShader, u.fragmentShader = this.fragmentShader, u.lights = this.lights, u.clipping = this.clipping;
    const o = {};
    for (const h in this.extensions)
      this.extensions[h] === !0 && (o[h] = !0);
    return Object.keys(o).length > 0 && (u.extensions = o), u;
  }
}
class s2 extends ol {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Wa(), this.projectionMatrix = new Wa(), this.projectionMatrixInverse = new Wa(), this.coordinateSystem = $d;
  }
  copy(n, u) {
    return super.copy(n, u), this.matrixWorldInverse.copy(n.matrixWorldInverse), this.projectionMatrix.copy(n.projectionMatrix), this.projectionMatrixInverse.copy(n.projectionMatrixInverse), this.coordinateSystem = n.coordinateSystem, this;
  }
  getWorldDirection(n) {
    return super.getWorldDirection(n).negate();
  }
  updateMatrixWorld(n) {
    super.updateMatrixWorld(n), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(n, u) {
    super.updateWorldMatrix(n, u), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Wp extends Xf {
  constructor(n = 1, u = 1, o = 1, h = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: n,
      height: u,
      widthSegments: o,
      heightSegments: h
    };
    const y = n / 2, S = u / 2, x = Math.floor(o), E = Math.floor(h), z = x + 1, M = E + 1, R = n / x, C = u / E, A = [], U = [], X = [], J = [];
    for (let K = 0; K < M; K++) {
      const k = K * C - S;
      for (let at = 0; at < z; at++) {
        const P = at * R - y;
        U.push(P, -k, 0), X.push(0, 0, 1), J.push(at / x), J.push(1 - K / E);
      }
    }
    for (let K = 0; K < E; K++)
      for (let k = 0; k < x; k++) {
        const at = k + z * K, P = k + z * (K + 1), ut = k + 1 + z * (K + 1), Tt = k + 1 + z * K;
        A.push(at, P, Tt), A.push(P, ut, Tt);
      }
    this.setIndex(A), this.setAttribute("position", new Yf(U, 3)), this.setAttribute("normal", new Yf(X, 3)), this.setAttribute("uv", new Yf(J, 2));
  }
  copy(n) {
    return super.copy(n), this.parameters = Object.assign({}, n.parameters), this;
  }
  static fromJSON(n) {
    return new Wp(n.width, n.height, n.widthSegments, n.heightSegments);
  }
}
class c2 extends ds {
  constructor(n, u, o, h, y, S, x, E, z, M) {
    if (M = M !== void 0 ? M : Fy, M !== Fy && M !== e1)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    o === void 0 && M === Fy && (o = V2), o === void 0 && M === e1 && (o = G2), super(null, h, y, S, x, E, M, o, z), this.isDepthTexture = !0, this.image = { width: n, height: u }, this.magFilter = x !== void 0 ? x : t1, this.minFilter = E !== void 0 ? E : t1, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(n) {
    return super.copy(n), this.compareFunction = n.compareFunction, this;
  }
  toJSON(n) {
    const u = super.toJSON(n);
    return this.compareFunction !== null && (u.compareFunction = this.compareFunction), u;
  }
}
const US = /* @__PURE__ */ new c2(1, 1);
US.compareFunction = Z2;
class OS extends ol {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ms(), this.environmentIntensity = 1, this.environmentRotation = new ms(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(n, u) {
    return super.copy(n, u), n.background !== null && (this.background = n.background.clone()), n.environment !== null && (this.environment = n.environment.clone()), n.fog !== null && (this.fog = n.fog.clone()), this.backgroundBlurriness = n.backgroundBlurriness, this.backgroundIntensity = n.backgroundIntensity, this.backgroundRotation.copy(n.backgroundRotation), this.environmentIntensity = n.environmentIntensity, this.environmentRotation.copy(n.environmentRotation), n.overrideMaterial !== null && (this.overrideMaterial = n.overrideMaterial.clone()), this.matrixAutoUpdate = n.matrixAutoUpdate, this;
  }
  toJSON(n) {
    const u = super.toJSON(n);
    return this.fog !== null && (u.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (u.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (u.object.backgroundIntensity = this.backgroundIntensity), u.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (u.object.environmentIntensity = this.environmentIntensity), u.object.environmentRotation = this.environmentRotation.toArray(), u;
  }
}
class HS extends b0 {
  constructor(n) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new am(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.color.copy(n.color), this.map = n.map, this.linewidth = n.linewidth, this.linecap = n.linecap, this.linejoin = n.linejoin, this.fog = n.fog, this;
  }
}
const A1 = /* @__PURE__ */ new nt(), R1 = /* @__PURE__ */ new nt(), C1 = /* @__PURE__ */ new Wa(), d0 = /* @__PURE__ */ new i2(), Kp = /* @__PURE__ */ new _0();
class BS extends ol {
  constructor(n = new Xf(), u = new HS()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = n, this.material = u, this.updateMorphTargets();
  }
  copy(n, u) {
    return super.copy(n, u), this.material = Array.isArray(n.material) ? n.material.slice() : n.material, this.geometry = n.geometry, this;
  }
  computeLineDistances() {
    const n = this.geometry;
    if (n.index === null) {
      const u = n.attributes.position, o = [0];
      for (let h = 1, y = u.count; h < y; h++)
        A1.fromBufferAttribute(u, h - 1), R1.fromBufferAttribute(u, h), o[h] = o[h - 1], o[h] += A1.distanceTo(R1);
      n.setAttribute("lineDistance", new Yf(o, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(n, u) {
    const o = this.geometry, h = this.matrixWorld, y = n.params.Line.threshold, S = o.drawRange;
    if (o.boundingSphere === null && o.computeBoundingSphere(), Kp.copy(o.boundingSphere), Kp.applyMatrix4(h), Kp.radius += y, n.ray.intersectsSphere(Kp) === !1) return;
    C1.copy(h).invert(), d0.copy(n.ray).applyMatrix4(C1);
    const x = y / ((this.scale.x + this.scale.y + this.scale.z) / 3), E = x * x, z = new nt(), M = new nt(), R = new nt(), C = new nt(), A = this.isLineSegments ? 2 : 1, U = o.index, J = o.attributes.position;
    if (U !== null) {
      const K = Math.max(0, S.start), k = Math.min(U.count, S.start + S.count);
      for (let at = K, P = k - 1; at < P; at += A) {
        const ut = U.getX(at), Tt = U.getX(at + 1);
        if (z.fromBufferAttribute(J, ut), M.fromBufferAttribute(J, Tt), d0.distanceSqToSegment(z, M, C, R) > E) continue;
        C.applyMatrix4(this.matrixWorld);
        const Rt = n.ray.origin.distanceTo(C);
        Rt < n.near || Rt > n.far || u.push({
          distance: Rt,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: R.clone().applyMatrix4(this.matrixWorld),
          index: at,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const K = Math.max(0, S.start), k = Math.min(J.count, S.start + S.count);
      for (let at = K, P = k - 1; at < P; at += A) {
        if (z.fromBufferAttribute(J, at), M.fromBufferAttribute(J, at + 1), d0.distanceSqToSegment(z, M, C, R) > E) continue;
        C.applyMatrix4(this.matrixWorld);
        const Tt = n.ray.origin.distanceTo(C);
        Tt < n.near || Tt > n.far || u.push({
          distance: Tt,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: R.clone().applyMatrix4(this.matrixWorld),
          index: at,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const u = this.geometry.morphAttributes, o = Object.keys(u);
    if (o.length > 0) {
      const h = u[o[0]];
      if (h !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let y = 0, S = h.length; y < S; y++) {
          const x = h[y].name || String(y);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[x] = y;
        }
      }
    }
  }
}
const N1 = /* @__PURE__ */ new nt(), D1 = /* @__PURE__ */ new nt();
class qS extends BS {
  constructor(n, u) {
    super(n, u), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const n = this.geometry;
    if (n.index === null) {
      const u = n.attributes.position, o = [];
      for (let h = 0, y = u.count; h < y; h += 2)
        N1.fromBufferAttribute(u, h), D1.fromBufferAttribute(u, h + 1), o[h] = h === 0 ? 0 : o[h - 1], o[h + 1] = o[h] + N1.distanceTo(D1);
      n.setAttribute("lineDistance", new Yf(o, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class YS extends wp {
  constructor(n) {
    super(n), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class A0 {
  constructor(n) {
    this.value = n;
  }
  clone() {
    return new A0(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: F1
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = F1);
var fs = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1;
function VS() {
  return U1 || (U1 = 1, fs.ConcurrentRoot = 1, fs.ContinuousEventPriority = 8, fs.DefaultEventPriority = 32, fs.DiscreteEventPriority = 2, fs.IdleEventPriority = 268435456, fs.LegacyRoot = 0, fs.NoEventPriority = 0), fs;
}
var hs = {};
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O1;
function jS() {
  return O1 || (O1 = 1, process.env.NODE_ENV !== "production" && (hs.ConcurrentRoot = 1, hs.ContinuousEventPriority = 8, hs.DefaultEventPriority = 32, hs.DiscreteEventPriority = 2, hs.IdleEventPriority = 268435456, hs.LegacyRoot = 0, hs.NoEventPriority = 0)), hs;
}
process.env.NODE_ENV === "production" ? VS() : jS();
var m0 = { exports: {} }, T0 = { exports: {} }, p0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H1;
function GS() {
  return H1 || (H1 = 1, function(T) {
    function n(V, lt) {
      var ot = V.length;
      V.push(lt);
      t: for (; 0 < ot; ) {
        var st = ot - 1 >>> 1, N = V[st];
        if (0 < h(N, lt))
          V[st] = lt, V[ot] = N, ot = st;
        else break t;
      }
    }
    function u(V) {
      return V.length === 0 ? null : V[0];
    }
    function o(V) {
      if (V.length === 0) return null;
      var lt = V[0], ot = V.pop();
      if (ot !== lt) {
        V[0] = ot;
        t: for (var st = 0, N = V.length, w = N >>> 1; st < w; ) {
          var ct = 2 * (st + 1) - 1, bt = V[ct], vt = ct + 1, Dt = V[vt];
          if (0 > h(bt, ot))
            vt < N && 0 > h(Dt, bt) ? (V[st] = Dt, V[vt] = ot, st = vt) : (V[st] = bt, V[ct] = ot, st = ct);
          else if (vt < N && 0 > h(Dt, ot))
            V[st] = Dt, V[vt] = ot, st = vt;
          else break t;
        }
      }
      return lt;
    }
    function h(V, lt) {
      var ot = V.sortIndex - lt.sortIndex;
      return ot !== 0 ? ot : V.id - lt.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var y = performance;
      T.unstable_now = function() {
        return y.now();
      };
    } else {
      var S = Date, x = S.now();
      T.unstable_now = function() {
        return S.now() - x;
      };
    }
    var E = [], z = [], M = 1, R = null, C = 3, A = !1, U = !1, X = !1, J = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function at(V) {
      for (var lt = u(z); lt !== null; ) {
        if (lt.callback === null) o(z);
        else if (lt.startTime <= V)
          o(z), lt.sortIndex = lt.expirationTime, n(E, lt);
        else break;
        lt = u(z);
      }
    }
    function P(V) {
      if (X = !1, at(V), !U)
        if (u(E) !== null)
          U = !0, Ft();
        else {
          var lt = u(z);
          lt !== null && ie(P, lt.startTime - V);
        }
    }
    var ut = !1, Tt = -1, Nt = 5, Rt = -1;
    function Vt() {
      return !(T.unstable_now() - Rt < Nt);
    }
    function Gt() {
      if (ut) {
        var V = T.unstable_now();
        Rt = V;
        var lt = !0;
        try {
          t: {
            U = !1, X && (X = !1, K(Tt), Tt = -1), A = !0;
            var ot = C;
            try {
              e: {
                for (at(V), R = u(E); R !== null && !(R.expirationTime > V && Vt()); ) {
                  var st = R.callback;
                  if (typeof st == "function") {
                    R.callback = null, C = R.priorityLevel;
                    var N = st(
                      R.expirationTime <= V
                    );
                    if (V = T.unstable_now(), typeof N == "function") {
                      R.callback = N, at(V), lt = !0;
                      break e;
                    }
                    R === u(E) && o(E), at(V);
                  } else o(E);
                  R = u(E);
                }
                if (R !== null) lt = !0;
                else {
                  var w = u(z);
                  w !== null && ie(
                    P,
                    w.startTime - V
                  ), lt = !1;
                }
              }
              break t;
            } finally {
              R = null, C = ot, A = !1;
            }
            lt = void 0;
          }
        } finally {
          lt ? jt() : ut = !1;
        }
      }
    }
    var jt;
    if (typeof k == "function")
      jt = function() {
        k(Gt);
      };
    else if (typeof MessageChannel < "u") {
      var ye = new MessageChannel(), it = ye.port2;
      ye.port1.onmessage = Gt, jt = function() {
        it.postMessage(null);
      };
    } else
      jt = function() {
        J(Gt, 0);
      };
    function Ft() {
      ut || (ut = !0, jt());
    }
    function ie(V, lt) {
      Tt = J(function() {
        V(T.unstable_now());
      }, lt);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, T.unstable_continueExecution = function() {
      U || A || (U = !0, Ft());
    }, T.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Nt = 0 < V ? Math.floor(1e3 / V) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, T.unstable_getFirstCallbackNode = function() {
      return u(E);
    }, T.unstable_next = function(V) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var lt = 3;
          break;
        default:
          lt = C;
      }
      var ot = C;
      C = lt;
      try {
        return V();
      } finally {
        C = ot;
      }
    }, T.unstable_pauseExecution = function() {
    }, T.unstable_requestPaint = function() {
    }, T.unstable_runWithPriority = function(V, lt) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var ot = C;
      C = V;
      try {
        return lt();
      } finally {
        C = ot;
      }
    }, T.unstable_scheduleCallback = function(V, lt, ot) {
      var st = T.unstable_now();
      switch (typeof ot == "object" && ot !== null ? (ot = ot.delay, ot = typeof ot == "number" && 0 < ot ? st + ot : st) : ot = st, V) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = ot + N, V = {
        id: M++,
        callback: lt,
        priorityLevel: V,
        startTime: ot,
        expirationTime: N,
        sortIndex: -1
      }, ot > st ? (V.sortIndex = ot, n(z, V), u(E) === null && V === u(z) && (X ? (K(Tt), Tt = -1) : X = !0, ie(P, ot - st))) : (V.sortIndex = N, n(E, V), U || A || (U = !0, Ft())), V;
    }, T.unstable_shouldYield = Vt, T.unstable_wrapCallback = function(V) {
      var lt = C;
      return function() {
        var ot = C;
        C = lt;
        try {
          return V.apply(this, arguments);
        } finally {
          C = ot;
        }
      };
    };
  }(p0)), p0;
}
var y0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B1;
function QS() {
  return B1 || (B1 = 1, function(T) {
    process.env.NODE_ENV !== "production" && function() {
      function n() {
        if (Vt) {
          var V = T.unstable_now();
          ye = V;
          var lt = !0;
          try {
            t: {
              P = !1, ut && (ut = !1, Nt(Gt), Gt = -1), at = !0;
              var ot = k;
              try {
                e: {
                  for (S(V), K = o(U); K !== null && !(K.expirationTime > V && E()); ) {
                    var st = K.callback;
                    if (typeof st == "function") {
                      K.callback = null, k = K.priorityLevel;
                      var N = st(
                        K.expirationTime <= V
                      );
                      if (V = T.unstable_now(), typeof N == "function") {
                        K.callback = N, S(V), lt = !0;
                        break e;
                      }
                      K === o(U) && h(U), S(V);
                    } else h(U);
                    K = o(U);
                  }
                  if (K !== null) lt = !0;
                  else {
                    var w = o(X);
                    w !== null && M(
                      x,
                      w.startTime - V
                    ), lt = !1;
                  }
                }
                break t;
              } finally {
                K = null, k = ot, at = !1;
              }
              lt = void 0;
            }
          } finally {
            lt ? it() : Vt = !1;
          }
        }
      }
      function u(V, lt) {
        var ot = V.length;
        V.push(lt);
        t: for (; 0 < ot; ) {
          var st = ot - 1 >>> 1, N = V[st];
          if (0 < y(N, lt))
            V[st] = lt, V[ot] = N, ot = st;
          else break t;
        }
      }
      function o(V) {
        return V.length === 0 ? null : V[0];
      }
      function h(V) {
        if (V.length === 0) return null;
        var lt = V[0], ot = V.pop();
        if (ot !== lt) {
          V[0] = ot;
          t: for (var st = 0, N = V.length, w = N >>> 1; st < w; ) {
            var ct = 2 * (st + 1) - 1, bt = V[ct], vt = ct + 1, Dt = V[vt];
            if (0 > y(bt, ot))
              vt < N && 0 > y(Dt, bt) ? (V[st] = Dt, V[vt] = ot, st = vt) : (V[st] = bt, V[ct] = ot, st = ct);
            else if (vt < N && 0 > y(Dt, ot))
              V[st] = Dt, V[vt] = ot, st = vt;
            else break t;
          }
        }
        return lt;
      }
      function y(V, lt) {
        var ot = V.sortIndex - lt.sortIndex;
        return ot !== 0 ? ot : V.id - lt.id;
      }
      function S(V) {
        for (var lt = o(X); lt !== null; ) {
          if (lt.callback === null) h(X);
          else if (lt.startTime <= V)
            h(X), lt.sortIndex = lt.expirationTime, u(U, lt);
          else break;
          lt = o(X);
        }
      }
      function x(V) {
        if (ut = !1, S(V), !P)
          if (o(U) !== null)
            P = !0, z();
          else {
            var lt = o(X);
            lt !== null && M(
              x,
              lt.startTime - V
            );
          }
      }
      function E() {
        return !(T.unstable_now() - ye < jt);
      }
      function z() {
        Vt || (Vt = !0, it());
      }
      function M(V, lt) {
        Gt = Tt(function() {
          V(T.unstable_now());
        }, lt);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var R = performance;
        T.unstable_now = function() {
          return R.now();
        };
      } else {
        var C = Date, A = C.now();
        T.unstable_now = function() {
          return C.now() - A;
        };
      }
      var U = [], X = [], J = 1, K = null, k = 3, at = !1, P = !1, ut = !1, Tt = typeof setTimeout == "function" ? setTimeout : null, Nt = typeof clearTimeout == "function" ? clearTimeout : null, Rt = typeof setImmediate < "u" ? setImmediate : null, Vt = !1, Gt = -1, jt = 5, ye = -1;
      if (typeof Rt == "function")
        var it = function() {
          Rt(n);
        };
      else if (typeof MessageChannel < "u") {
        var Ft = new MessageChannel(), ie = Ft.port2;
        Ft.port1.onmessage = n, it = function() {
          ie.postMessage(null);
        };
      } else
        it = function() {
          Tt(n, 0);
        };
      T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(V) {
        V.callback = null;
      }, T.unstable_continueExecution = function() {
        P || at || (P = !0, z());
      }, T.unstable_forceFrameRate = function(V) {
        0 > V || 125 < V ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : jt = 0 < V ? Math.floor(1e3 / V) : 5;
      }, T.unstable_getCurrentPriorityLevel = function() {
        return k;
      }, T.unstable_getFirstCallbackNode = function() {
        return o(U);
      }, T.unstable_next = function(V) {
        switch (k) {
          case 1:
          case 2:
          case 3:
            var lt = 3;
            break;
          default:
            lt = k;
        }
        var ot = k;
        k = lt;
        try {
          return V();
        } finally {
          k = ot;
        }
      }, T.unstable_pauseExecution = function() {
      }, T.unstable_requestPaint = function() {
      }, T.unstable_runWithPriority = function(V, lt) {
        switch (V) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            V = 3;
        }
        var ot = k;
        k = V;
        try {
          return lt();
        } finally {
          k = ot;
        }
      }, T.unstable_scheduleCallback = function(V, lt, ot) {
        var st = T.unstable_now();
        switch (typeof ot == "object" && ot !== null ? (ot = ot.delay, ot = typeof ot == "number" && 0 < ot ? st + ot : st) : ot = st, V) {
          case 1:
            var N = -1;
            break;
          case 2:
            N = 250;
            break;
          case 5:
            N = 1073741823;
            break;
          case 4:
            N = 1e4;
            break;
          default:
            N = 5e3;
        }
        return N = ot + N, V = {
          id: J++,
          callback: lt,
          priorityLevel: V,
          startTime: ot,
          expirationTime: N,
          sortIndex: -1
        }, ot > st ? (V.sortIndex = ot, u(X, V), o(U) === null && V === o(X) && (ut ? (Nt(Gt), Gt = -1) : ut = !0, M(x, ot - st))) : (V.sortIndex = N, u(U, V), P || at || (P = !0, z())), V;
      }, T.unstable_shouldYield = E, T.unstable_wrapCallback = function(V) {
        var lt = k;
        return function() {
          var ot = k;
          k = lt;
          try {
            return V.apply(this, arguments);
          } finally {
            k = ot;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(y0)), y0;
}
process.env.NODE_ENV === "production" ? T0.exports = GS() : T0.exports = QS();
var o2 = T0.exports;
/**
 * @license React
 * react-reconciler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1;
function XS() {
  return q1 || (q1 = 1, function(T) {
    T.exports = function(n) {
      function u(a, l, s, f) {
        return new pm(a, l, s, f);
      }
      function o() {
      }
      function h(a) {
        var l = "https://react.dev/errors/" + a;
        if (1 < arguments.length) {
          l += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var s = 2; s < arguments.length; s++)
            l += "&args[]=" + encodeURIComponent(arguments[s]);
        }
        return "Minified React error #" + a + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function y(a) {
        return a === null || typeof a != "object" ? null : (a = Hh && a[Hh] || a["@@iterator"], typeof a == "function" ? a : null);
      }
      function S(a) {
        if (a == null) return null;
        if (typeof a == "function")
          return a.$$typeof === Fp ? null : a.displayName || a.name || null;
        if (typeof a == "string") return a;
        switch (a) {
          case Vu:
            return "Fragment";
          case Ds:
            return "Portal";
          case Sr:
            return "Profiler";
          case Ch:
            return "StrictMode";
          case Er:
            return "Suspense";
          case Uh:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case Tl:
              return (a.displayName || "Context") + ".Provider";
            case gr:
              return (a._context.displayName || "Context") + ".Consumer";
            case Dh:
              var l = a.render;
              return a = a.displayName, a || (a = l.displayName || l.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
            case xr:
              return l = a.displayName || null, l !== null ? l : S(a.type) || "Memo";
            case xi:
              l = a._payload, a = a._init;
              try {
                return S(a(l));
              } catch {
              }
          }
        return null;
      }
      function x(a) {
        if (Bh === void 0)
          try {
            throw Error();
          } catch (s) {
            var l = s.stack.trim().match(/\n( *(at )?)/);
            Bh = l && l[1] || "", sa = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Bh + a + sa;
      }
      function E(a, l) {
        if (!a || Tr) return "";
        Tr = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var f = {
            DetermineComponentFrameRoot: function() {
              try {
                if (l) {
                  var gt = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(gt.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(gt, []);
                    } catch (qt) {
                      var St = qt;
                    }
                    Reflect.construct(a, [], gt);
                  } else {
                    try {
                      gt.call();
                    } catch (qt) {
                      St = qt;
                    }
                    a.call(gt.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (qt) {
                    St = qt;
                  }
                  (gt = a()) && typeof gt.catch == "function" && gt.catch(function() {
                  });
                }
              } catch (qt) {
                if (qt && St && typeof qt.stack == "string")
                  return [qt.stack, St.stack];
              }
              return [null, null];
            }
          };
          f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var m = Object.getOwnPropertyDescriptor(
            f.DetermineComponentFrameRoot,
            "name"
          );
          m && m.configurable && Object.defineProperty(
            f.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var p = f.DetermineComponentFrameRoot(), _ = p[0], O = p[1];
          if (_ && O) {
            var Q = _.split(`
`), tt = O.split(`
`);
            for (m = f = 0; f < Q.length && !Q[f].includes("DetermineComponentFrameRoot"); )
              f++;
            for (; m < tt.length && !tt[m].includes(
              "DetermineComponentFrameRoot"
            ); )
              m++;
            if (f === Q.length || m === tt.length)
              for (f = Q.length - 1, m = tt.length - 1; 1 <= f && 0 <= m && Q[f] !== tt[m]; )
                m--;
            for (; 1 <= f && 0 <= m; f--, m--)
              if (Q[f] !== tt[m]) {
                if (f !== 1 || m !== 1)
                  do
                    if (f--, m--, 0 > m || Q[f] !== tt[m]) {
                      var mt = `
` + Q[f].replace(" at new ", " at ");
                      return a.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", a.displayName)), mt;
                    }
                  while (1 <= f && 0 <= m);
                break;
              }
          }
        } finally {
          Tr = !1, Error.prepareStackTrace = s;
        }
        return (s = a ? a.displayName || a.name : "") ? x(s) : "";
      }
      function z(a) {
        switch (a.tag) {
          case 26:
          case 27:
          case 5:
            return x(a.type);
          case 16:
            return x("Lazy");
          case 13:
            return x("Suspense");
          case 19:
            return x("SuspenseList");
          case 0:
          case 15:
            return a = E(a.type, !1), a;
          case 11:
            return a = E(a.type.render, !1), a;
          case 1:
            return a = E(a.type, !0), a;
          default:
            return "";
        }
      }
      function M(a) {
        try {
          var l = "";
          do
            l += z(a), a = a.return;
          while (a);
          return l;
        } catch (s) {
          return `
Error generating stack: ` + s.message + `
` + s.stack;
        }
      }
      function R(a) {
        var l = a, s = a;
        if (a.alternate) for (; l.return; ) l = l.return;
        else {
          a = l;
          do
            l = a, l.flags & 4098 && (s = l.return), a = l.return;
          while (a);
        }
        return l.tag === 3 ? s : null;
      }
      function C(a) {
        if (R(a) !== a)
          throw Error(h(188));
      }
      function A(a) {
        var l = a.alternate;
        if (!l) {
          if (l = R(a), l === null) throw Error(h(188));
          return l !== a ? null : a;
        }
        for (var s = a, f = l; ; ) {
          var m = s.return;
          if (m === null) break;
          var p = m.alternate;
          if (p === null) {
            if (f = m.return, f !== null) {
              s = f;
              continue;
            }
            break;
          }
          if (m.child === p.child) {
            for (p = m.child; p; ) {
              if (p === s) return C(m), a;
              if (p === f) return C(m), l;
              p = p.sibling;
            }
            throw Error(h(188));
          }
          if (s.return !== f.return) s = m, f = p;
          else {
            for (var _ = !1, O = m.child; O; ) {
              if (O === s) {
                _ = !0, s = m, f = p;
                break;
              }
              if (O === f) {
                _ = !0, f = m, s = p;
                break;
              }
              O = O.sibling;
            }
            if (!_) {
              for (O = p.child; O; ) {
                if (O === s) {
                  _ = !0, s = p, f = m;
                  break;
                }
                if (O === f) {
                  _ = !0, f = p, s = m;
                  break;
                }
                O = O.sibling;
              }
              if (!_) throw Error(h(189));
            }
          }
          if (s.alternate !== f) throw Error(h(190));
        }
        if (s.tag !== 3) throw Error(h(188));
        return s.stateNode.current === s ? a : l;
      }
      function U(a) {
        var l = a.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return a;
        for (a = a.child; a !== null; ) {
          if (l = U(a), l !== null) return l;
          a = a.sibling;
        }
        return null;
      }
      function X(a) {
        var l = a.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return a;
        for (a = a.child; a !== null; ) {
          if (a.tag !== 4 && (l = X(a), l !== null))
            return l;
          a = a.sibling;
        }
        return null;
      }
      function J(a) {
        return { current: a };
      }
      function K(a) {
        0 > Fl || (a.current = Ml[Fl], Ml[Fl] = null, Fl--);
      }
      function k(a, l) {
        Fl++, Ml[Fl] = a.current, a.current = l;
      }
      function at(a) {
        return a >>>= 0, a === 0 ? 32 : 31 - (Hr(a) / Ya | 0) | 0;
      }
      function P(a) {
        var l = a & 42;
        if (l !== 0) return l;
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return a & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return a;
        }
      }
      function ut(a, l) {
        var s = a.pendingLanes;
        if (s === 0) return 0;
        var f = 0, m = a.suspendedLanes, p = a.pingedLanes, _ = a.warmLanes;
        a = a.finishedLanes !== 0;
        var O = s & 134217727;
        return O !== 0 ? (s = O & ~m, s !== 0 ? f = P(s) : (p &= O, p !== 0 ? f = P(p) : a || (_ = O & ~_, _ !== 0 && (f = P(_))))) : (O = s & ~m, O !== 0 ? f = P(O) : p !== 0 ? f = P(p) : a || (_ = s & ~_, _ !== 0 && (f = P(_)))), f === 0 ? 0 : l !== 0 && l !== f && !(l & m) && (m = f & -f, _ = l & -l, m >= _ || m === 32 && (_ & 4194176) !== 0) ? l : f;
      }
      function Tt(a, l) {
        return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & l) === 0;
      }
      function Nt(a, l) {
        switch (a) {
          case 1:
          case 2:
          case 4:
          case 8:
            return l + 250;
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return l + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function Rt() {
        var a = Qc;
        return Qc <<= 1, !(Qc & 4194176) && (Qc = 128), a;
      }
      function Vt() {
        var a = Br;
        return Br <<= 1, !(Br & 62914560) && (Br = 4194304), a;
      }
      function Gt(a) {
        for (var l = [], s = 0; 31 > s; s++) l.push(a);
        return l;
      }
      function jt(a, l) {
        a.pendingLanes |= l, l !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0);
      }
      function ye(a, l, s, f, m, p) {
        var _ = a.pendingLanes;
        a.pendingLanes = s, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= s, a.entangledLanes &= s, a.errorRecoveryDisabledLanes &= s, a.shellSuspendCounter = 0;
        var O = a.entanglements, Q = a.expirationTimes, tt = a.hiddenUpdates;
        for (s = _ & ~s; 0 < s; ) {
          var mt = 31 - oa(s), gt = 1 << mt;
          O[mt] = 0, Q[mt] = -1;
          var St = tt[mt];
          if (St !== null)
            for (tt[mt] = null, mt = 0; mt < St.length; mt++) {
              var qt = St[mt];
              qt !== null && (qt.lane &= -536870913);
            }
          s &= ~gt;
        }
        f !== 0 && it(a, f, 0), p !== 0 && m === 0 && a.tag !== 0 && (a.suspendedLanes |= p & ~(_ & ~l));
      }
      function it(a, l, s) {
        a.pendingLanes |= l, a.suspendedLanes &= ~l;
        var f = 31 - oa(l);
        a.entangledLanes |= l, a.entanglements[f] = a.entanglements[f] | 1073741824 | s & 4194218;
      }
      function Ft(a, l) {
        var s = a.entangledLanes |= l;
        for (a = a.entanglements; s; ) {
          var f = 31 - oa(s), m = 1 << f;
          m & l | a[f] & l && (a[f] |= l), s &= ~m;
        }
      }
      function ie(a) {
        return a &= -a, 2 < a ? 8 < a ? a & 134217727 ? 32 : 268435456 : 8 : 2;
      }
      function V(a) {
        if (Sa && typeof Sa.onCommitFiberRoot == "function")
          try {
            Sa.onCommitFiberRoot(
              Ku,
              a,
              void 0,
              (a.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function lt(a) {
        if (typeof Km == "function" && Jm(a), Sa && typeof Sa.setStrictMode == "function")
          try {
            Sa.setStrictMode(Ku, a);
          } catch {
          }
      }
      function ot(a, l) {
        return a === l && (a !== 0 || 1 / a === 1 / l) || a !== a && l !== l;
      }
      function st(a, l) {
        if (typeof a == "object" && a !== null) {
          var s = Yr.get(a);
          return s !== void 0 ? s : (l = {
            value: a,
            source: l,
            stack: M(l)
          }, Yr.set(a, l), l);
        }
        return {
          value: a,
          source: l,
          stack: M(l)
        };
      }
      function N(a, l) {
        jn[Gn++] = Vr, jn[Gn++] = Cn, Cn = a, Vr = l;
      }
      function w(a, l, s) {
        nl[Va++] = Ri, nl[Va++] = Ci, nl[Va++] = al, al = a;
        var f = Ri;
        a = Ci;
        var m = 32 - oa(f) - 1;
        f &= ~(1 << m), s += 1;
        var p = 32 - oa(l) + m;
        if (30 < p) {
          var _ = m - m % 5;
          p = (f & (1 << _) - 1).toString(32), f >>= _, m -= _, Ri = 1 << 32 - oa(l) + m | s << m | f, Ci = p + a;
        } else
          Ri = 1 << p | s << m | f, Ci = a;
      }
      function ct(a) {
        a.return !== null && (N(a, 1), w(a, 1, 0));
      }
      function bt(a) {
        for (; a === Cn; )
          Cn = jn[--Gn], jn[Gn] = null, Vr = jn[--Gn], jn[Gn] = null;
        for (; a === al; )
          al = nl[--Va], nl[Va] = null, Ci = nl[--Va], nl[Va] = null, Ri = nl[--Va], nl[Va] = null;
      }
      function vt(a, l) {
        k(cu, l), k(Kc, a), k(Qn, null), a = Os(l), K(Qn), k(Qn, a);
      }
      function Dt() {
        K(Qn), K(Kc), K(cu);
      }
      function Ot(a) {
        a.memoizedState !== null && k(Ys, a);
        var l = Qn.current, s = Sm(l, a.type);
        l !== s && (k(Kc, a), k(Qn, s));
      }
      function Ye(a) {
        Kc.current === a && (K(Qn), K(Kc)), Ys.current === a && (K(Ys), Wl ? bi._currentValue = Gu : bi._currentValue2 = Gu);
      }
      function ue(a) {
        var l = Error(h(418, ""));
        throw te(st(l, a)), Jc;
      }
      function Me(a, l) {
        if (!ca) throw Error(h(175));
        $h(
          a.stateNode,
          a.type,
          a.memoizedProps,
          l,
          a
        ) || ue(a);
      }
      function je(a) {
        for (Pn = a.return; Pn; )
          switch (Pn.tag) {
            case 3:
            case 27:
              Pl = !0;
              return;
            case 5:
            case 13:
              Pl = !1;
              return;
            default:
              Pn = Pn.return;
          }
      }
      function ge(a) {
        if (!ca || a !== Pn) return !1;
        if (!xe) return je(a), xe = !0, !1;
        var l = !1;
        if (un ? a.tag !== 3 && a.tag !== 27 && (a.tag !== 5 || Cr(a.type) && !zi(a.type, a.memoizedProps)) && (l = !0) : a.tag !== 3 && (a.tag !== 5 || Cr(a.type) && !zi(a.type, a.memoizedProps)) && (l = !0), l && xn && ue(a), je(a), a.tag === 13) {
          if (!ca) throw Error(h(316));
          if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(h(317));
          xn = kh(a);
        } else
          xn = Pn ? Hm(a.stateNode) : null;
        return !0;
      }
      function ve() {
        ca && (xn = Pn = null, xe = !1);
      }
      function te(a) {
        _l === null ? _l = [a] : _l.push(a);
      }
      function Ge() {
        for (var a = fn, l = Il = fn = 0; l < a; ) {
          var s = dn[l];
          dn[l++] = null;
          var f = dn[l];
          dn[l++] = null;
          var m = dn[l];
          dn[l++] = null;
          var p = dn[l];
          if (dn[l++] = null, f !== null && m !== null) {
            var _ = f.pending;
            _ === null ? m.next = m : (m.next = _.next, _.next = m), f.pending = m;
          }
          p !== 0 && rl(s, m, p);
        }
      }
      function Se(a, l, s, f) {
        dn[fn++] = a, dn[fn++] = l, dn[fn++] = s, dn[fn++] = f, Il |= f, a.lanes |= f, a = a.alternate, a !== null && (a.lanes |= f);
      }
      function fe(a, l, s, f) {
        return Se(a, l, s, f), Ma(a);
      }
      function Ce(a, l) {
        return Se(a, null, null, l), Ma(a);
      }
      function rl(a, l, s) {
        a.lanes |= s;
        var f = a.alternate;
        f !== null && (f.lanes |= s);
        for (var m = !1, p = a.return; p !== null; )
          p.childLanes |= s, f = p.alternate, f !== null && (f.childLanes |= s), p.tag === 22 && (a = p.stateNode, a === null || a._visibility & 1 || (m = !0)), a = p, p = p.return;
        m && l !== null && a.tag === 3 && (p = a.stateNode, m = 31 - oa(s), p = p.hiddenUpdates, a = p[m], a === null ? p[m] = [l] : a.push(l), l.lane = s | 536870912);
      }
      function Ma(a) {
        if (50 < to)
          throw to = 0, Ws = null, Error(h(185));
        for (var l = a.return; l !== null; )
          a = l, l = a.return;
        return a.tag === 3 ? a.stateNode : null;
      }
      function En(a) {
        a !== Ju && a.next === null && (Ju === null ? fa = Ju = a : Ju = Ju.next = a), Xn = !0, sd || (sd = !0, _e(xt));
      }
      function D(a, l) {
        if (!Ni && Xn) {
          Ni = !0;
          do
            for (var s = !1, f = fa; f !== null; ) {
              if (a !== 0) {
                var m = f.pendingLanes;
                if (m === 0) var p = 0;
                else {
                  var _ = f.suspendedLanes, O = f.pingedLanes;
                  p = (1 << 31 - oa(42 | a) + 1) - 1, p &= m & ~(_ & ~O), p = p & 201326677 ? p & 201326677 | 1 : p ? p | 2 : 0;
                }
                p !== 0 && (s = !0, Ne(f, p));
              } else
                p = me, p = ut(
                  f,
                  f === Xe ? p : 0
                ), !(p & 3) || Tt(f, p) || (s = !0, Ne(f, p));
              f = f.next;
            }
          while (s);
          Ni = !1;
        }
      }
      function xt() {
        Xn = sd = !1;
        var a = 0;
        Vs !== 0 && (Em() && (a = Vs), Vs = 0);
        for (var l = el(), s = null, f = fa; f !== null; ) {
          var m = f.next, p = At(f, l);
          p === 0 ? (f.next = null, s === null ? fa = m : s.next = m, m === null && (Ju = s)) : (s = f, (a !== 0 || p & 3) && (Xn = !0)), f = m;
        }
        D(a);
      }
      function At(a, l) {
        for (var s = a.suspendedLanes, f = a.pingedLanes, m = a.expirationTimes, p = a.pendingLanes & -62914561; 0 < p; ) {
          var _ = 31 - oa(p), O = 1 << _, Q = m[_];
          Q === -1 ? (!(O & s) || O & f) && (m[_] = Nt(O, l)) : Q <= l && (a.expiredLanes |= O), p &= ~O;
        }
        if (l = Xe, s = me, s = ut(
          a,
          a === l ? s : 0
        ), f = a.callbackNode, s === 0 || a === l && He === 2 || a.cancelPendingCommit !== null)
          return f !== null && f !== null && id(f), a.callbackNode = null, a.callbackPriority = 0;
        if (!(s & 3) || Tt(a, s)) {
          if (l = s & -s, l === a.callbackPriority) return l;
          switch (f !== null && id(f), ie(s)) {
            case 2:
            case 8:
              s = Xm;
              break;
            case 32:
              s = qr;
              break;
            case 268435456:
              s = Zm;
              break;
            default:
              s = qr;
          }
          return f = Kt.bind(null, a), s = Xc(s, f), a.callbackPriority = l, a.callbackNode = s, l;
        }
        return f !== null && f !== null && id(f), a.callbackPriority = 2, a.callbackNode = null, 2;
      }
      function Kt(a, l) {
        var s = a.callbackNode;
        if (Ll() && a.callbackNode !== s)
          return null;
        var f = me;
        return f = ut(
          a,
          a === Xe ? f : 0
        ), f === 0 ? null : (or(a, f, l), At(a, el()), a.callbackNode != null && a.callbackNode === s ? Kt.bind(null, a) : null);
      }
      function Ne(a, l) {
        if (Ll()) return null;
        or(a, l, !0);
      }
      function _e(a) {
        $p ? Ai(function() {
          Oe & 6 ? Xc(ud, a) : a();
        }) : Xc(ud, a);
      }
      function Xt() {
        return Vs === 0 && (Vs = Rt()), Vs;
      }
      function Yt(a, l) {
        if (Lc === null) {
          var s = Lc = [];
          cd = 0, js = Xt(), Lu = {
            status: "pending",
            value: void 0,
            then: function(f) {
              s.push(f);
            }
          };
        }
        return cd++, l.then(pa, pa), l;
      }
      function pa() {
        if (--cd === 0 && Lc !== null) {
          Lu !== null && (Lu.status = "fulfilled");
          var a = Lc;
          Lc = null, js = 0, Lu = null;
          for (var l = 0; l < a.length; l++) (0, a[l])();
        }
      }
      function be(a, l) {
        var s = [], f = {
          status: "pending",
          value: null,
          reason: null,
          then: function(m) {
            s.push(m);
          }
        };
        return a.then(
          function() {
            f.status = "fulfilled", f.value = l;
            for (var m = 0; m < s.length; m++) (0, s[m])(l);
          },
          function(m) {
            for (f.status = "rejected", f.reason = m, m = 0; m < s.length; m++)
              (0, s[m])(void 0);
          }
        ), f;
      }
      function ke(a) {
        a.updateQueue = {
          baseState: a.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function _a(a, l) {
        a = a.updateQueue, l.updateQueue === a && (l.updateQueue = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          callbacks: null
        });
      }
      function an(a) {
        return { lane: a, tag: 0, payload: null, callback: null, next: null };
      }
      function Mn(a, l, s) {
        var f = a.updateQueue;
        if (f === null) return null;
        if (f = f.shared, Oe & 2) {
          var m = f.pending;
          return m === null ? l.next = l : (l.next = m.next, m.next = l), f.pending = l, l = Ma(a), rl(a, null, s), l;
        }
        return Se(a, f, l, s), Ma(a);
      }
      function Pe(a, l, s) {
        if (l = l.updateQueue, l !== null && (l = l.shared, (s & 4194176) !== 0)) {
          var f = l.lanes;
          f &= a.pendingLanes, s |= f, l.lanes = s, Ft(a, s);
        }
      }
      function ba(a, l) {
        var s = a.updateQueue, f = a.alternate;
        if (f !== null && (f = f.updateQueue, s === f)) {
          var m = null, p = null;
          if (s = s.firstBaseUpdate, s !== null) {
            do {
              var _ = {
                lane: s.lane,
                tag: s.tag,
                payload: s.payload,
                callback: null,
                next: null
              };
              p === null ? m = p = _ : p = p.next = _, s = s.next;
            } while (s !== null);
            p === null ? m = p = l : p = p.next = l;
          } else m = p = l;
          s = {
            baseState: f.baseState,
            firstBaseUpdate: m,
            lastBaseUpdate: p,
            shared: f.shared,
            callbacks: f.callbacks
          }, a.updateQueue = s;
          return;
        }
        a = s.lastBaseUpdate, a === null ? s.firstBaseUpdate = l : a.next = l, s.lastBaseUpdate = l;
      }
      function fl() {
        if (jr) {
          var a = Lu;
          if (a !== null) throw a;
        }
      }
      function Aa(a, l, s, f) {
        jr = !1;
        var m = a.updateQueue;
        ou = !1;
        var p = m.firstBaseUpdate, _ = m.lastBaseUpdate, O = m.shared.pending;
        if (O !== null) {
          m.shared.pending = null;
          var Q = O, tt = Q.next;
          Q.next = null, _ === null ? p = tt : _.next = tt, _ = Q;
          var mt = a.alternate;
          mt !== null && (mt = mt.updateQueue, O = mt.lastBaseUpdate, O !== _ && (O === null ? mt.firstBaseUpdate = tt : O.next = tt, mt.lastBaseUpdate = Q));
        }
        if (p !== null) {
          var gt = m.baseState;
          _ = 0, mt = tt = Q = null, O = p;
          do {
            var St = O.lane & -536870913, qt = St !== O.lane;
            if (qt ? (me & St) === St : (f & St) === St) {
              St !== 0 && St === js && (jr = !0), mt !== null && (mt = mt.next = {
                lane: 0,
                tag: O.tag,
                payload: O.payload,
                callback: null,
                next: null
              });
              t: {
                var pt = a, Ea = O;
                St = l;
                var Kn = s;
                switch (Ea.tag) {
                  case 1:
                    if (pt = Ea.payload, typeof pt == "function") {
                      gt = pt.call(
                        Kn,
                        gt,
                        St
                      );
                      break t;
                    }
                    gt = pt;
                    break t;
                  case 3:
                    pt.flags = pt.flags & -65537 | 128;
                  case 0:
                    if (pt = Ea.payload, St = typeof pt == "function" ? pt.call(Kn, gt, St) : pt, St == null) break t;
                    gt = Ei({}, gt, St);
                    break t;
                  case 2:
                    ou = !0;
                }
              }
              St = O.callback, St !== null && (a.flags |= 64, qt && (a.flags |= 8192), qt = m.callbacks, qt === null ? m.callbacks = [St] : qt.push(St));
            } else
              qt = {
                lane: St,
                tag: O.tag,
                payload: O.payload,
                callback: O.callback,
                next: null
              }, mt === null ? (tt = mt = qt, Q = gt) : mt = mt.next = qt, _ |= St;
            if (O = O.next, O === null) {
              if (O = m.shared.pending, O === null)
                break;
              qt = O, O = qt.next, qt.next = null, m.lastBaseUpdate = qt, m.shared.pending = null;
            }
          } while (!0);
          mt === null && (Q = gt), m.baseState = Q, m.firstBaseUpdate = tt, m.lastBaseUpdate = mt, p === null && (m.shared.lanes = 0), du |= _, a.lanes = _, a.memoizedState = gt;
        }
      }
      function na(a, l) {
        if (typeof a != "function")
          throw Error(h(191, a));
        a.call(l);
      }
      function zu(a, l) {
        var s = a.callbacks;
        if (s !== null)
          for (a.callbacks = null, a = 0; a < s.length; a++)
            na(s[a], l);
      }
      function hl(a, l) {
        if (ra(a, l)) return !0;
        if (typeof a != "object" || a === null || typeof l != "object" || l === null)
          return !1;
        var s = Object.keys(a), f = Object.keys(l);
        if (s.length !== f.length) return !1;
        for (f = 0; f < s.length; f++) {
          var m = s[f];
          if (!fy.call(l, m) || !ra(a[m], l[m]))
            return !1;
        }
        return !0;
      }
      function Mu(a) {
        return a = a.status, a === "fulfilled" || a === "rejected";
      }
      function _n() {
      }
      function Hl(a, l, s) {
        switch (s = a[s], s === void 0 ? a.push(l) : s !== l && (l.then(_n, _n), l = s), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw a = l.reason, a === $l ? Error(h(483)) : a;
          default:
            if (typeof l.status == "string") l.then(_n, _n);
            else {
              if (a = Xe, a !== null && 100 < a.shellSuspendCounter)
                throw Error(h(482));
              a = l, a.status = "pending", a.then(
                function(f) {
                  if (l.status === "pending") {
                    var m = l;
                    m.status = "fulfilled", m.value = f;
                  }
                },
                function(f) {
                  if (l.status === "pending") {
                    var m = l;
                    m.status = "rejected", m.reason = f;
                  }
                }
              );
            }
            switch (l.status) {
              case "fulfilled":
                return l.value;
              case "rejected":
                throw a = l.reason, a === $l ? Error(h(483)) : a;
            }
            throw Gs = l, $l;
        }
      }
      function dl() {
        if (Gs === null) throw Error(h(459));
        var a = Gs;
        return Gs = null, a;
      }
      function Xi(a) {
        var l = wc;
        return wc += 1, Qs === null && (Qs = []), Hl(Qs, a, l);
      }
      function Fa(a, l) {
        l = l.props.ref, a.ref = l !== void 0 ? l : null;
      }
      function Bl(a, l) {
        throw l.$$typeof === Ha ? Error(h(525)) : (a = Object.prototype.toString.call(l), Error(
          h(
            31,
            a === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : a
          )
        ));
      }
      function _u(a) {
        var l = a._init;
        return l(a._payload);
      }
      function di(a) {
        function l(Z, G) {
          if (a) {
            var L = Z.deletions;
            L === null ? (Z.deletions = [G], Z.flags |= 16) : L.push(G);
          }
        }
        function s(Z, G) {
          if (!a) return null;
          for (; G !== null; )
            l(Z, G), G = G.sibling;
          return null;
        }
        function f(Z) {
          for (var G = /* @__PURE__ */ new Map(); Z !== null; )
            Z.key !== null ? G.set(Z.key, Z) : G.set(Z.index, Z), Z = Z.sibling;
          return G;
        }
        function m(Z, G) {
          return Z = $a(Z, G), Z.index = 0, Z.sibling = null, Z;
        }
        function p(Z, G, L) {
          return Z.index = L, a ? (L = Z.alternate, L !== null ? (L = L.index, L < G ? (Z.flags |= 33554434, G) : L) : (Z.flags |= 33554434, G)) : (Z.flags |= 1048576, G);
        }
        function _(Z) {
          return a && Z.alternate === null && (Z.flags |= 33554434), Z;
        }
        function O(Z, G, L, ft) {
          return G === null || G.tag !== 6 ? (G = ka(L, Z.mode, ft), G.return = Z, G) : (G = m(G, L), G.return = Z, G);
        }
        function Q(Z, G, L, ft) {
          var Ht = L.type;
          return Ht === Vu ? mt(
            Z,
            G,
            L.props.children,
            ft,
            L.key
          ) : G !== null && (G.elementType === Ht || typeof Ht == "object" && Ht !== null && Ht.$$typeof === xi && _u(Ht) === G.type) ? (G = m(G, L.props), Fa(G, L), G.return = Z, G) : (G = pr(
            L.type,
            L.key,
            L.props,
            null,
            Z.mode,
            ft
          ), Fa(G, L), G.return = Z, G);
        }
        function tt(Z, G, L, ft) {
          return G === null || G.tag !== 4 || G.stateNode.containerInfo !== L.containerInfo || G.stateNode.implementation !== L.implementation ? (G = yr(L, Z.mode, ft), G.return = Z, G) : (G = m(G, L.children || []), G.return = Z, G);
        }
        function mt(Z, G, L, ft, Ht) {
          return G === null || G.tag !== 7 ? (G = qu(
            L,
            Z.mode,
            ft,
            Ht
          ), G.return = Z, G) : (G = m(G, L), G.return = Z, G);
        }
        function gt(Z, G, L) {
          if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
            return G = ka(
              "" + G,
              Z.mode,
              L
            ), G.return = Z, G;
          if (typeof G == "object" && G !== null) {
            switch (G.$$typeof) {
              case Yc:
                return L = pr(
                  G.type,
                  G.key,
                  G.props,
                  null,
                  Z.mode,
                  L
                ), Fa(L, G), L.return = Z, L;
              case Ds:
                return G = yr(
                  G,
                  Z.mode,
                  L
                ), G.return = Z, G;
              case xi:
                var ft = G._init;
                return G = ft(G._payload), gt(Z, G, L);
            }
            if (Wn(G) || y(G))
              return G = qu(
                G,
                Z.mode,
                L,
                null
              ), G.return = Z, G;
            if (typeof G.then == "function")
              return gt(Z, Xi(G), L);
            if (G.$$typeof === Tl)
              return gt(
                Z,
                bc(Z, G),
                L
              );
            Bl(Z, G);
          }
          return null;
        }
        function St(Z, G, L, ft) {
          var Ht = G !== null ? G.key : null;
          if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
            return Ht !== null ? null : O(Z, G, "" + L, ft);
          if (typeof L == "object" && L !== null) {
            switch (L.$$typeof) {
              case Yc:
                return L.key === Ht ? Q(Z, G, L, ft) : null;
              case Ds:
                return L.key === Ht ? tt(Z, G, L, ft) : null;
              case xi:
                return Ht = L._init, L = Ht(L._payload), St(Z, G, L, ft);
            }
            if (Wn(L) || y(L))
              return Ht !== null ? null : mt(Z, G, L, ft, null);
            if (typeof L.then == "function")
              return St(
                Z,
                G,
                Xi(L),
                ft
              );
            if (L.$$typeof === Tl)
              return St(
                Z,
                G,
                bc(Z, L),
                ft
              );
            Bl(Z, L);
          }
          return null;
        }
        function qt(Z, G, L, ft, Ht) {
          if (typeof ft == "string" && ft !== "" || typeof ft == "number" || typeof ft == "bigint")
            return Z = Z.get(L) || null, O(G, Z, "" + ft, Ht);
          if (typeof ft == "object" && ft !== null) {
            switch (ft.$$typeof) {
              case Yc:
                return Z = Z.get(
                  ft.key === null ? L : ft.key
                ) || null, Q(G, Z, ft, Ht);
              case Ds:
                return Z = Z.get(
                  ft.key === null ? L : ft.key
                ) || null, tt(G, Z, ft, Ht);
              case xi:
                var Be = ft._init;
                return ft = Be(ft._payload), qt(
                  Z,
                  G,
                  L,
                  ft,
                  Ht
                );
            }
            if (Wn(ft) || y(ft))
              return Z = Z.get(L) || null, mt(G, Z, ft, Ht, null);
            if (typeof ft.then == "function")
              return qt(
                Z,
                G,
                L,
                Xi(ft),
                Ht
              );
            if (ft.$$typeof === Tl)
              return qt(
                Z,
                G,
                L,
                bc(G, ft),
                Ht
              );
            Bl(G, ft);
          }
          return null;
        }
        function pt(Z, G, L, ft) {
          for (var Ht = null, Be = null, Bt = G, Wt = G = 0, Ie = null; Bt !== null && Wt < L.length; Wt++) {
            Bt.index > Wt ? (Ie = Bt, Bt = null) : Ie = Bt.sibling;
            var $t = St(
              Z,
              Bt,
              L[Wt],
              ft
            );
            if ($t === null) {
              Bt === null && (Bt = Ie);
              break;
            }
            a && Bt && $t.alternate === null && l(Z, Bt), G = p($t, G, Wt), Be === null ? Ht = $t : Be.sibling = $t, Be = $t, Bt = Ie;
          }
          if (Wt === L.length)
            return s(Z, Bt), xe && N(Z, Wt), Ht;
          if (Bt === null) {
            for (; Wt < L.length; Wt++)
              Bt = gt(Z, L[Wt], ft), Bt !== null && (G = p(
                Bt,
                G,
                Wt
              ), Be === null ? Ht = Bt : Be.sibling = Bt, Be = Bt);
            return xe && N(Z, Wt), Ht;
          }
          for (Bt = f(Bt); Wt < L.length; Wt++)
            Ie = qt(
              Bt,
              Z,
              Wt,
              L[Wt],
              ft
            ), Ie !== null && (a && Ie.alternate !== null && Bt.delete(
              Ie.key === null ? Wt : Ie.key
            ), G = p(
              Ie,
              G,
              Wt
            ), Be === null ? Ht = Ie : Be.sibling = Ie, Be = Ie);
          return a && Bt.forEach(function($n) {
            return l(Z, $n);
          }), xe && N(Z, Wt), Ht;
        }
        function Ea(Z, G, L, ft) {
          if (L == null) throw Error(h(151));
          for (var Ht = null, Be = null, Bt = G, Wt = G = 0, Ie = null, $t = L.next(); Bt !== null && !$t.done; Wt++, $t = L.next()) {
            Bt.index > Wt ? (Ie = Bt, Bt = null) : Ie = Bt.sibling;
            var $n = St(Z, Bt, $t.value, ft);
            if ($n === null) {
              Bt === null && (Bt = Ie);
              break;
            }
            a && Bt && $n.alternate === null && l(Z, Bt), G = p($n, G, Wt), Be === null ? Ht = $n : Be.sibling = $n, Be = $n, Bt = Ie;
          }
          if ($t.done)
            return s(Z, Bt), xe && N(Z, Wt), Ht;
          if (Bt === null) {
            for (; !$t.done; Wt++, $t = L.next())
              $t = gt(Z, $t.value, ft), $t !== null && (G = p(
                $t,
                G,
                Wt
              ), Be === null ? Ht = $t : Be.sibling = $t, Be = $t);
            return xe && N(Z, Wt), Ht;
          }
          for (Bt = f(Bt); !$t.done; Wt++, $t = L.next())
            $t = qt(
              Bt,
              Z,
              Wt,
              $t.value,
              ft
            ), $t !== null && (a && $t.alternate !== null && Bt.delete($t.key === null ? Wt : $t.key), G = p($t, G, Wt), Be === null ? Ht = $t : Be.sibling = $t, Be = $t);
          return a && Bt.forEach(function(mu) {
            return l(Z, mu);
          }), xe && N(Z, Wt), Ht;
        }
        function Kn(Z, G, L, ft) {
          if (typeof L == "object" && L !== null && L.type === Vu && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
            switch (L.$$typeof) {
              case Yc:
                t: {
                  for (var Ht = L.key; G !== null; ) {
                    if (G.key === Ht) {
                      if (Ht = L.type, Ht === Vu) {
                        if (G.tag === 7) {
                          s(
                            Z,
                            G.sibling
                          ), ft = m(
                            G,
                            L.props.children
                          ), ft.return = Z, Z = ft;
                          break t;
                        }
                      } else if (G.elementType === Ht || typeof Ht == "object" && Ht !== null && Ht.$$typeof === xi && _u(Ht) === G.type) {
                        s(
                          Z,
                          G.sibling
                        ), ft = m(G, L.props), Fa(ft, L), ft.return = Z, Z = ft;
                        break t;
                      }
                      s(Z, G);
                      break;
                    } else l(Z, G);
                    G = G.sibling;
                  }
                  L.type === Vu ? (ft = qu(
                    L.props.children,
                    Z.mode,
                    ft,
                    L.key
                  ), ft.return = Z, Z = ft) : (ft = pr(
                    L.type,
                    L.key,
                    L.props,
                    null,
                    Z.mode,
                    ft
                  ), Fa(ft, L), ft.return = Z, Z = ft);
                }
                return _(Z);
              case Ds:
                t: {
                  for (Ht = L.key; G !== null; ) {
                    if (G.key === Ht)
                      if (G.tag === 4 && G.stateNode.containerInfo === L.containerInfo && G.stateNode.implementation === L.implementation) {
                        s(
                          Z,
                          G.sibling
                        ), ft = m(
                          G,
                          L.children || []
                        ), ft.return = Z, Z = ft;
                        break t;
                      } else {
                        s(Z, G);
                        break;
                      }
                    else l(Z, G);
                    G = G.sibling;
                  }
                  ft = yr(L, Z.mode, ft), ft.return = Z, Z = ft;
                }
                return _(Z);
              case xi:
                return Ht = L._init, L = Ht(L._payload), Kn(
                  Z,
                  G,
                  L,
                  ft
                );
            }
            if (Wn(L))
              return pt(
                Z,
                G,
                L,
                ft
              );
            if (y(L)) {
              if (Ht = y(L), typeof Ht != "function")
                throw Error(h(150));
              return L = Ht.call(L), Ea(
                Z,
                G,
                L,
                ft
              );
            }
            if (typeof L.then == "function")
              return Kn(
                Z,
                G,
                Xi(L),
                ft
              );
            if (L.$$typeof === Tl)
              return Kn(
                Z,
                G,
                bc(Z, L),
                ft
              );
            Bl(Z, L);
          }
          return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, G !== null && G.tag === 6 ? (s(Z, G.sibling), ft = m(G, L), ft.return = Z, Z = ft) : (s(Z, G), ft = ka(L, Z.mode, ft), ft.return = Z, Z = ft), _(Z)) : s(Z, G);
        }
        return function(Z, G, L, ft) {
          try {
            wc = 0;
            var Ht = Kn(
              Z,
              G,
              L,
              ft
            );
            return Qs = null, Ht;
          } catch (Bt) {
            if (Bt === $l) throw Bt;
            var Be = u(29, Bt, null, Z.mode);
            return Be.lanes = ft, Be.return = Z, Be;
          } finally {
          }
        };
      }
      function ql(a, l) {
        a = ai, k(Qr, a), k(Xs, l), ai = a | l.baseLanes;
      }
      function Yl() {
        k(Qr, ai), k(Xs, Xs.current);
      }
      function Zi() {
        ai = Qr.current, K(Xs), K(Qr);
      }
      function Ra(a) {
        var l = a.alternate;
        k(Tn, Tn.current & 1), k(In, a), kl === null && (l === null || Xs.current !== null || l.memoizedState !== null) && (kl = a);
      }
      function bu(a) {
        if (a.tag === 22) {
          if (k(Tn, Tn.current), k(In, a), kl === null) {
            var l = a.alternate;
            l !== null && l.memoizedState !== null && (kl = a);
          }
        } else Ca();
      }
      function Ca() {
        k(Tn, Tn.current), k(In, In.current);
      }
      function g(a) {
        K(In), kl === a && (kl = null), K(Tn);
      }
      function q(a) {
        for (var l = a; l !== null; ) {
          if (l.tag === 13) {
            var s = l.memoizedState;
            if (s !== null && (s = s.dehydrated, s === null || jc(s) || Ar(s)))
              return l;
          } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
            if (l.flags & 128) return l;
          } else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === a) break;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === a) return null;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
        return null;
      }
      function $() {
        throw Error(h(321));
      }
      function ht(a, l) {
        if (l === null) return !1;
        for (var s = 0; s < l.length && s < a.length; s++)
          if (!ra(a[s], l[s])) return !1;
        return !0;
      }
      function zt(a, l, s, f, m, p) {
        return ru = p, ne = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, Zt.H = a === null || a.memoizedState === null ? Wu : fu, wu = !1, p = s(f, m), wu = !1, Zs && (p = Mt(
          l,
          s,
          f,
          m
        )), Ut(a), p;
      }
      function Ut(a) {
        Zt.H = ti;
        var l = Ue !== null && Ue.next !== null;
        if (ru = 0, mn = Ue = ne = null, Xr = !1, Wc = 0, Ks = null, l) throw Error(h(300));
        a === null || Nn || (a = a.dependencies, a !== null && Qo(a) && (Nn = !0));
      }
      function Mt(a, l, s, f) {
        ne = a;
        var m = 0;
        do {
          if (Zs && (Ks = null), Wc = 0, Zs = !1, 25 <= m) throw Error(h(301));
          if (m += 1, mn = Ue = null, a.updateQueue != null) {
            var p = a.updateQueue;
            p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
          }
          Zt.H = Fu, p = l(s, f);
        } while (Zs);
        return p;
      }
      function de() {
        var a = Zt.H, l = a.useState()[0];
        return l = typeof l.then == "function" ? Je(l) : l, a = a.useState()[0], (Ue !== null ? Ue.memoizedState : null) !== a && (ne.flags |= 1024), l;
      }
      function ee() {
        var a = Zr !== 0;
        return Zr = 0, a;
      }
      function Ve(a, l, s) {
        l.updateQueue = a.updateQueue, l.flags &= -2053, a.lanes &= ~s;
      }
      function on(a) {
        if (Xr) {
          for (a = a.memoizedState; a !== null; ) {
            var l = a.queue;
            l !== null && (l.pending = null), a = a.next;
          }
          Xr = !1;
        }
        ru = 0, mn = Ue = ne = null, Zs = !1, Wc = Zr = 0, Ks = null;
      }
      function Ke() {
        var a = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return mn === null ? ne.memoizedState = mn = a : mn = mn.next = a, mn;
      }
      function Ee() {
        if (Ue === null) {
          var a = ne.alternate;
          a = a !== null ? a.memoizedState : null;
        } else a = Ue.next;
        var l = mn === null ? ne.memoizedState : mn.next;
        if (l !== null)
          mn = l, Ue = a;
        else {
          if (a === null)
            throw ne.alternate === null ? Error(h(467)) : Error(h(310));
          Ue = a, a = {
            memoizedState: Ue.memoizedState,
            baseState: Ue.baseState,
            baseQueue: Ue.baseQueue,
            queue: Ue.queue,
            next: null
          }, mn === null ? ne.memoizedState = mn = a : mn = mn.next = a;
        }
        return mn;
      }
      function Je(a) {
        var l = Wc;
        return Wc += 1, Ks === null && (Ks = []), a = Hl(Ks, a, l), l = ne, (mn === null ? l.memoizedState : mn.next) === null && (l = l.alternate, Zt.H = l === null || l.memoizedState === null ? Wu : fu), a;
      }
      function aa(a) {
        if (a !== null && typeof a == "object") {
          if (typeof a.then == "function") return Je(a);
          if (a.$$typeof === Tl) return qn(a);
        }
        throw Error(h(438, String(a)));
      }
      function ps(a) {
        var l = null, s = ne.updateQueue;
        if (s !== null && (l = s.memoCache), l == null) {
          var f = ne.alternate;
          f !== null && (f = f.updateQueue, f !== null && (f = f.memoCache, f != null && (l = {
            data: f.data.map(function(m) {
              return m.slice();
            }),
            index: 0
          })));
        }
        if (l == null && (l = { data: [], index: 0 }), s === null && (s = od(), ne.updateQueue = s), s.memoCache = l, s = l.data[l.index], s === void 0)
          for (s = l.data[l.index] = Array(a), f = 0; f < a; f++)
            s[f] = Oh;
        return l.index++, s;
      }
      function Bn(a, l) {
        return typeof l == "function" ? l(a) : l;
      }
      function Au(a) {
        var l = Ee();
        return Ru(l, Ue, a);
      }
      function Ru(a, l, s) {
        var f = a.queue;
        if (f === null) throw Error(h(311));
        f.lastRenderedReducer = s;
        var m = a.baseQueue, p = f.pending;
        if (p !== null) {
          if (m !== null) {
            var _ = m.next;
            m.next = p.next, p.next = _;
          }
          l.baseQueue = m = p, f.pending = null;
        }
        if (p = a.baseState, m === null) a.memoizedState = p;
        else {
          l = m.next;
          var O = _ = null, Q = null, tt = l, mt = !1;
          do {
            var gt = tt.lane & -536870913;
            if (gt !== tt.lane ? (me & gt) === gt : (ru & gt) === gt) {
              var St = tt.revertLane;
              if (St === 0)
                Q !== null && (Q = Q.next = {
                  lane: 0,
                  revertLane: 0,
                  action: tt.action,
                  hasEagerState: tt.hasEagerState,
                  eagerState: tt.eagerState,
                  next: null
                }), gt === js && (mt = !0);
              else if ((ru & St) === St) {
                tt = tt.next, St === js && (mt = !0);
                continue;
              } else
                gt = {
                  lane: 0,
                  revertLane: tt.revertLane,
                  action: tt.action,
                  hasEagerState: tt.hasEagerState,
                  eagerState: tt.eagerState,
                  next: null
                }, Q === null ? (O = Q = gt, _ = p) : Q = Q.next = gt, ne.lanes |= St, du |= St;
              gt = tt.action, wu && s(p, gt), p = tt.hasEagerState ? tt.eagerState : s(p, gt);
            } else
              St = {
                lane: gt,
                revertLane: tt.revertLane,
                action: tt.action,
                hasEagerState: tt.hasEagerState,
                eagerState: tt.eagerState,
                next: null
              }, Q === null ? (O = Q = St, _ = p) : Q = Q.next = St, ne.lanes |= gt, du |= gt;
            tt = tt.next;
          } while (tt !== null && tt !== l);
          if (Q === null ? _ = p : Q.next = O, !ra(p, a.memoizedState) && (Nn = !0, mt && (s = Lu, s !== null)))
            throw s;
          a.memoizedState = p, a.baseState = _, a.baseQueue = Q, f.lastRenderedState = p;
        }
        return m === null && (f.lanes = 0), [a.memoizedState, f.dispatch];
      }
      function mc(a) {
        var l = Ee(), s = l.queue;
        if (s === null) throw Error(h(311));
        s.lastRenderedReducer = a;
        var f = s.dispatch, m = s.pending, p = l.memoizedState;
        if (m !== null) {
          s.pending = null;
          var _ = m = m.next;
          do
            p = a(p, _.action), _ = _.next;
          while (_ !== m);
          ra(p, l.memoizedState) || (Nn = !0), l.memoizedState = p, l.baseQueue === null && (l.baseState = p), s.lastRenderedState = p;
        }
        return [p, f];
      }
      function xo(a, l, s) {
        var f = ne, m = Ee(), p = xe;
        if (p) {
          if (s === void 0)
            throw Error(h(407));
          s = s();
        } else s = l();
        var _ = !ra(
          (Ue || m).memoizedState,
          s
        );
        if (_ && (m.memoizedState = s, Nn = !0), m = m.queue, bo(pl.bind(null, f, m, a), [
          a
        ]), m.getSnapshot !== l || _ || mn !== null && mn.memoizedState.tag & 1) {
          if (f.flags |= 2048, Na(
            9,
            ml.bind(
              null,
              f,
              m,
              s,
              l
            ),
            { destroy: void 0 },
            null
          ), Xe === null) throw Error(h(349));
          p || ru & 60 || Kf(f, l, s);
        }
        return s;
      }
      function Kf(a, l, s) {
        a.flags |= 16384, a = { getSnapshot: l, value: s }, l = ne.updateQueue, l === null ? (l = od(), ne.updateQueue = l, l.stores = [a]) : (s = l.stores, s === null ? l.stores = [a] : s.push(a));
      }
      function ml(a, l, s, f) {
        l.value = s, l.getSnapshot = f, pc(l) && yl(a);
      }
      function pl(a, l, s) {
        return s(function() {
          pc(l) && yl(a);
        });
      }
      function pc(a) {
        var l = a.getSnapshot;
        a = a.value;
        try {
          var s = l();
          return !ra(a, s);
        } catch {
          return !0;
        }
      }
      function yl(a) {
        var l = Ce(a, 2);
        l !== null && Yn(l, a, 2);
      }
      function Ki(a) {
        var l = Ke();
        if (typeof a == "function") {
          var s = a;
          if (a = s(), wu) {
            lt(!0);
            try {
              s();
            } finally {
              lt(!1);
            }
          }
        }
        return l.memoizedState = l.baseState = a, l.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bn,
          lastRenderedState: a
        }, l;
      }
      function Jf(a, l, s, f) {
        return a.baseState = s, Ru(
          a,
          Ue,
          typeof f == "function" ? f : Bn
        );
      }
      function lm(a, l, s, f, m) {
        if (xs(a)) throw Error(h(485));
        if (a = l.action, a !== null) {
          var p = {
            payload: m,
            action: a,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(_) {
              p.listeners.push(_);
            }
          };
          Zt.T !== null ? s(!0) : p.isTransition = !1, f(p), s = l.pending, s === null ? (p.next = l.pending = p, Lf(l, p)) : (p.next = s.next, l.pending = s.next = p);
        }
      }
      function Lf(a, l) {
        var s = l.action, f = l.payload, m = a.state;
        if (l.isTransition) {
          var p = Zt.T, _ = {};
          Zt.T = _;
          try {
            var O = s(m, f), Q = Zt.S;
            Q !== null && Q(_, O), wf(a, l, O);
          } catch (tt) {
            zo(a, l, tt);
          } finally {
            Zt.T = p;
          }
        } else
          try {
            p = s(m, f), wf(a, l, p);
          } catch (tt) {
            zo(a, l, tt);
          }
      }
      function wf(a, l, s) {
        s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(
          function(f) {
            To(a, l, f);
          },
          function(f) {
            return zo(a, l, f);
          }
        ) : To(a, l, s);
      }
      function To(a, l, s) {
        l.status = "fulfilled", l.value = s, Mo(l), a.state = s, l = a.pending, l !== null && (s = l.next, s === l ? a.pending = null : (s = s.next, l.next = s, Lf(a, s)));
      }
      function zo(a, l, s) {
        var f = a.pending;
        if (a.pending = null, f !== null) {
          f = f.next;
          do
            l.status = "rejected", l.reason = s, Mo(l), l = l.next;
          while (l !== f);
        }
        a.action = null;
      }
      function Mo(a) {
        a = a.listeners;
        for (var l = 0; l < a.length; l++) (0, a[l])();
      }
      function im(a, l) {
        return l;
      }
      function Wf(a, l) {
        if (xe) {
          var s = Xe.formState;
          if (s !== null) {
            t: {
              var f = ne;
              if (xe) {
                if (xn) {
                  var m = Gc(
                    xn,
                    Pl
                  );
                  if (m) {
                    xn = Hm(m), f = iy(m);
                    break t;
                  }
                }
                ue(f);
              }
              f = !1;
            }
            f && (l = s[0]);
          }
        }
        s = Ke(), s.memoizedState = s.baseState = l, f = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: im,
          lastRenderedState: l
        }, s.queue = f, s = th.bind(
          null,
          ne,
          f
        ), f.dispatch = s, f = Ki(!1);
        var p = Ec.bind(
          null,
          ne,
          !1,
          f.queue
        );
        return f = Ke(), m = {
          state: l,
          dispatch: null,
          action: a,
          pending: null
        }, f.queue = m, s = lm.bind(
          null,
          ne,
          m,
          p,
          s
        ), m.dispatch = s, f.memoizedState = a, [l, s, !1];
      }
      function um(a) {
        var l = Ee();
        return _o(l, Ue, a);
      }
      function _o(a, l, s) {
        l = Ru(
          a,
          l,
          im
        )[0], a = Au(Bn)[0], l = typeof l == "object" && l !== null && typeof l.then == "function" ? Je(l) : l;
        var f = Ee(), m = f.queue, p = m.dispatch;
        return s !== f.memoizedState && (ne.flags |= 2048, Na(
          9,
          Ff.bind(null, m, s),
          { destroy: void 0 },
          null
        )), [l, p, a];
      }
      function Ff(a, l) {
        a.action = l;
      }
      function mi(a) {
        var l = Ee(), s = Ue;
        if (s !== null)
          return _o(l, s, a);
        Ee(), l = l.memoizedState, s = Ee();
        var f = s.queue.dispatch;
        return s.memoizedState = a, [l, f, !1];
      }
      function Na(a, l, s, f) {
        return a = { tag: a, create: l, inst: s, deps: f, next: null }, l = ne.updateQueue, l === null && (l = od(), ne.updateQueue = l), s = l.lastEffect, s === null ? l.lastEffect = a.next = a : (f = s.next, s.next = a, a.next = f, l.lastEffect = a), a;
      }
      function ys() {
        return Ee().memoizedState;
      }
      function Cu(a, l, s, f) {
        var m = Ke();
        ne.flags |= a, m.memoizedState = Na(
          1 | l,
          s,
          { destroy: void 0 },
          f === void 0 ? null : f
        );
      }
      function Ji(a, l, s, f) {
        var m = Ee();
        f = f === void 0 ? null : f;
        var p = m.memoizedState.inst;
        Ue !== null && f !== null && ht(f, Ue.memoizedState.deps) ? m.memoizedState = Na(l, s, p, f) : (ne.flags |= a, m.memoizedState = Na(1 | l, s, p, f));
      }
      function vs(a, l) {
        Cu(8390656, 8, a, l);
      }
      function bo(a, l) {
        Ji(2048, 8, a, l);
      }
      function sm(a, l) {
        return Ji(4, 2, a, l);
      }
      function Pf(a, l) {
        return Ji(4, 4, a, l);
      }
      function yc(a, l) {
        if (typeof l == "function") {
          a = a();
          var s = l(a);
          return function() {
            typeof s == "function" ? s() : l(null);
          };
        }
        if (l != null)
          return a = a(), l.current = a, function() {
            l.current = null;
          };
      }
      function If(a, l, s) {
        s = s != null ? s.concat([a]) : null, Ji(
          4,
          4,
          yc.bind(null, l, a),
          s
        );
      }
      function Ao() {
      }
      function vc(a, l) {
        var s = Ee();
        l = l === void 0 ? null : l;
        var f = s.memoizedState;
        return l !== null && ht(l, f[1]) ? f[0] : (s.memoizedState = [a, l], a);
      }
      function $f(a, l) {
        var s = Ee();
        l = l === void 0 ? null : l;
        var f = s.memoizedState;
        if (l !== null && ht(l, f[1]))
          return f[0];
        if (f = a(), wu) {
          lt(!0);
          try {
            a();
          } finally {
            lt(!1);
          }
        }
        return s.memoizedState = [f, l], f;
      }
      function Ro(a, l, s) {
        return s === void 0 || ru & 1073741824 ? a.memoizedState = l : (a.memoizedState = s, a = ph(), ne.lanes |= a, du |= a, s);
      }
      function kf(a, l, s, f) {
        return ra(s, l) ? s : Xs.current !== null ? (a = Ro(a, s, f), ra(a, l) || (Nn = !0), a) : ru & 42 ? (a = ph(), ne.lanes |= a, du |= a, l) : (Nn = !0, a.memoizedState = s);
      }
      function bn(a, l, s, f, m) {
        var p = _i();
        Fn(
          p !== 0 && 8 > p ? p : 8
        );
        var _ = Zt.T, O = {};
        Zt.T = O, Ec(a, !1, l, s);
        try {
          var Q = m(), tt = Zt.S;
          if (tt !== null && tt(O, Q), Q !== null && typeof Q == "object" && typeof Q.then == "function") {
            var mt = be(
              Q,
              f
            );
            Es(
              a,
              l,
              mt,
              ua(a)
            );
          } else
            Es(
              a,
              l,
              f,
              ua(a)
            );
        } catch (gt) {
          Es(
            a,
            l,
            { then: function() {
            }, status: "rejected", reason: gt },
            ua()
          );
        } finally {
          Fn(p), Zt.T = _;
        }
      }
      function Sc(a) {
        var l = a.memoizedState;
        if (l !== null) return l;
        l = {
          memoizedState: Gu,
          baseState: Gu,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bn,
            lastRenderedState: Gu
          },
          next: null
        };
        var s = {};
        return l.next = {
          memoizedState: s,
          baseState: s,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bn,
            lastRenderedState: s
          },
          next: null
        }, a.memoizedState = l, a = a.alternate, a !== null && (a.memoizedState = l), l;
      }
      function Ss() {
        return qn(bi);
      }
      function gs() {
        return Ee().memoizedState;
      }
      function gc() {
        return Ee().memoizedState;
      }
      function Co(a) {
        for (var l = a.return; l !== null; ) {
          switch (l.tag) {
            case 24:
            case 3:
              var s = ua();
              a = an(s);
              var f = Mn(l, a, s);
              f !== null && (Yn(f, l, s), Pe(f, l, s)), l = { cache: Zo() }, a.payload = l;
              return;
          }
          l = l.return;
        }
      }
      function No(a, l, s) {
        var f = ua();
        s = {
          lane: f,
          revertLane: 0,
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, xs(a) ? pi(l, s) : (s = fe(a, l, s, f), s !== null && (Yn(s, a, f), eh(s, l, f)));
      }
      function th(a, l, s) {
        var f = ua();
        Es(a, l, s, f);
      }
      function Es(a, l, s, f) {
        var m = {
          lane: f,
          revertLane: 0,
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (xs(a)) pi(l, m);
        else {
          var p = a.alternate;
          if (a.lanes === 0 && (p === null || p.lanes === 0) && (p = l.lastRenderedReducer, p !== null))
            try {
              var _ = l.lastRenderedState, O = p(_, s);
              if (m.hasEagerState = !0, m.eagerState = O, ra(O, _))
                return Se(a, l, m, 0), Xe === null && Ge(), !1;
            } catch {
            } finally {
            }
          if (s = fe(a, l, m, f), s !== null)
            return Yn(s, a, f), eh(s, l, f), !0;
        }
        return !1;
      }
      function Ec(a, l, s, f) {
        if (f = {
          lane: 2,
          revertLane: Xt(),
          action: f,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, xs(a)) {
          if (l) throw Error(h(479));
        } else
          l = fe(
            a,
            s,
            f,
            2
          ), l !== null && Yn(l, a, 2);
      }
      function xs(a) {
        var l = a.alternate;
        return a === ne || l !== null && l === ne;
      }
      function pi(a, l) {
        Zs = Xr = !0;
        var s = a.pending;
        s === null ? l.next = l : (l.next = s.next, s.next = l), a.pending = l;
      }
      function eh(a, l, s) {
        if (s & 4194176) {
          var f = l.lanes;
          f &= a.pendingLanes, s |= f, l.lanes = s, Ft(a, s);
        }
      }
      function Vl(a, l, s, f) {
        l = a.memoizedState, s = s(f, l), s = s == null ? l : Ei({}, l, s), a.memoizedState = s, a.lanes === 0 && (a.updateQueue.baseState = s);
      }
      function jl(a, l, s, f, m, p, _) {
        return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(f, p, _) : l.prototype && l.prototype.isPureReactComponent ? !hl(s, f) || !hl(m, p) : !0;
      }
      function xc(a, l, s, f) {
        a = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(s, f), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(s, f), l.state !== a && rd.enqueueReplaceState(l, l.state, null);
      }
      function Jt(a, l) {
        var s = l;
        if ("ref" in l) {
          s = {};
          for (var f in l)
            f !== "ref" && (s[f] = l[f]);
        }
        if (a = a.defaultProps) {
          s === l && (s = Ei({}, s));
          for (var m in a)
            s[m] === void 0 && (s[m] = a[m]);
        }
        return s;
      }
      function rt(a, l) {
        try {
          var s = a.onUncaughtError;
          s(l.value, { componentStack: l.stack });
        } catch (f) {
          setTimeout(function() {
            throw f;
          });
        }
      }
      function Nu(a, l, s) {
        try {
          var f = a.onCaughtError;
          f(s.value, {
            componentStack: s.stack,
            errorBoundary: l.tag === 1 ? l.stateNode : null
          });
        } catch (m) {
          setTimeout(function() {
            throw m;
          });
        }
      }
      function Ts(a, l, s) {
        return s = an(s), s.tag = 3, s.payload = { element: null }, s.callback = function() {
          rt(a, l);
        }, s;
      }
      function ln(a) {
        return a = an(a), a.tag = 3, a;
      }
      function Do(a, l, s, f) {
        var m = s.type.getDerivedStateFromError;
        if (typeof m == "function") {
          var p = f.value;
          a.payload = function() {
            return m(p);
          }, a.callback = function() {
            Nu(l, s, f);
          };
        }
        var _ = s.stateNode;
        _ !== null && typeof _.componentDidCatch == "function" && (a.callback = function() {
          Nu(l, s, f), typeof m != "function" && (li === null ? li = /* @__PURE__ */ new Set([this]) : li.add(this));
          var O = f.stack;
          this.componentDidCatch(f.value, {
            componentStack: O !== null ? O : ""
          });
        });
      }
      function nh(a, l, s, f, m) {
        if (s.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
          if (l = s.alternate, l !== null && Ms(
            l,
            s,
            m,
            !0
          ), s = In.current, s !== null) {
            switch (s.tag) {
              case 13:
                return kl === null ? xl() : s.alternate === null && en === 0 && (en = 3), s.flags &= -257, s.flags |= 65536, s.lanes = m, f === Gr ? s.flags |= 16384 : (l = s.updateQueue, l === null ? s.updateQueue = /* @__PURE__ */ new Set([f]) : l.add(f), mr(a, f, m)), !1;
              case 22:
                return s.flags |= 65536, f === Gr ? s.flags |= 16384 : (l = s.updateQueue, l === null ? (l = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([f])
                }, s.updateQueue = l) : (s = l.retryQueue, s === null ? l.retryQueue = /* @__PURE__ */ new Set([f]) : s.add(f)), mr(a, f, m)), !1;
            }
            throw Error(h(435, s.tag));
          }
          return mr(a, f, m), xl(), !1;
        }
        if (xe)
          return l = In.current, l !== null ? (!(l.flags & 65536) && (l.flags |= 256), l.flags |= 65536, l.lanes = m, f !== Jc && (a = Error(h(422), { cause: f }), te(
            st(a, s)
          ))) : (f !== Jc && (l = Error(h(423), {
            cause: f
          }), te(
            st(l, s)
          )), a = a.current.alternate, a.flags |= 65536, m &= -m, a.lanes |= m, f = st(f, s), m = Ts(
            a.stateNode,
            f,
            m
          ), ba(a, m), en !== 4 && (en = 2)), !1;
        var p = Error(h(520), { cause: f });
        if (p = st(p, s), yn === null ? yn = [p] : yn.push(p), en !== 4 && (en = 2), l === null) return !0;
        f = st(f, s), s = l;
        do {
          switch (s.tag) {
            case 3:
              return s.flags |= 65536, a = m & -m, s.lanes |= a, a = Ts(s.stateNode, f, a), ba(s, a), !1;
            case 1:
              if (l = s.type, p = s.stateNode, (s.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (li === null || !li.has(
                p
              ))))
                return s.flags |= 65536, m &= -m, s.lanes |= m, m = ln(m), Do(
                  m,
                  a,
                  s,
                  f
                ), ba(s, m), !1;
          }
          s = s.return;
        } while (s !== null);
        return !1;
      }
      function An(a, l, s, f) {
        l.child = a === null ? Lm(l, null, s, f) : ll(
          l,
          a.child,
          s,
          f
        );
      }
      function Uo(a, l, s, f, m) {
        s = s.render;
        var p = l.ref;
        if ("ref" in f) {
          var _ = {};
          for (var O in f)
            O !== "ref" && (_[O] = f[O]);
        } else _ = f;
        return wi(l), f = zt(
          a,
          l,
          s,
          _,
          p,
          m
        ), O = ee(), a !== null && !Nn ? (Ve(a, l, m), Gl(a, l, m)) : (xe && O && ct(l), l.flags |= 1, An(a, l, f, m), l.child);
      }
      function cm(a, l, s, f, m) {
        if (a === null) {
          var p = s.type;
          return typeof p == "function" && !Cs(p) && p.defaultProps === void 0 && s.compare === null ? (l.tag = 15, l.type = p, Oo(
            a,
            l,
            p,
            f,
            m
          )) : (a = pr(
            s.type,
            null,
            f,
            l,
            l.mode,
            m
          ), a.ref = l.ref, a.return = l, l.child = a);
        }
        if (p = a.child, !Yo(a, m)) {
          var _ = p.memoizedProps;
          if (s = s.compare, s = s !== null ? s : hl, s(_, f) && a.ref === l.ref)
            return Gl(
              a,
              l,
              m
            );
        }
        return l.flags |= 1, a = $a(p, f), a.ref = l.ref, a.return = l, l.child = a;
      }
      function Oo(a, l, s, f, m) {
        if (a !== null) {
          var p = a.memoizedProps;
          if (hl(p, f) && a.ref === l.ref)
            if (Nn = !1, l.pendingProps = f = p, Yo(a, m))
              a.flags & 131072 && (Nn = !0);
            else
              return l.lanes = a.lanes, Gl(a, l, m);
        }
        return Ae(
          a,
          l,
          s,
          f,
          m
        );
      }
      function Ho(a, l, s) {
        var f = l.pendingProps, m = f.children, p = (l.stateNode._pendingVisibility & 2) !== 0, _ = a !== null ? a.memoizedState : null;
        if (Rn(a, l), f.mode === "hidden" || p) {
          if (l.flags & 128) {
            if (f = _ !== null ? _.baseLanes | s : s, a !== null) {
              for (m = l.child = a.child, p = 0; m !== null; )
                p = p | m.lanes | m.childLanes, m = m.sibling;
              l.childLanes = p & ~f;
            } else l.childLanes = 0, l.child = null;
            return Bo(
              a,
              l,
              f,
              s
            );
          }
          if (s & 536870912)
            l.memoizedState = { baseLanes: 0, cachePool: null }, a !== null && Ou(
              l,
              _ !== null ? _.cachePool : null
            ), _ !== null ? ql(l, _) : Yl(), bu(l);
          else
            return l.lanes = l.childLanes = 536870912, Bo(
              a,
              l,
              _ !== null ? _.baseLanes | s : s,
              s
            );
        } else
          _ !== null ? (Ou(l, _.cachePool), ql(l, _), Ca(), l.memoizedState = null) : (a !== null && Ou(l, null), Yl(), Ca());
        return An(a, l, m, s), l.child;
      }
      function Bo(a, l, s, f) {
        var m = Wi();
        return m = m === null ? null : {
          parent: Wl ? sn._currentValue : sn._currentValue2,
          pool: m
        }, l.memoizedState = {
          baseLanes: s,
          cachePool: m
        }, a !== null && Ou(l, null), Yl(), bu(l), a !== null && Ms(a, l, f, !0), null;
      }
      function Rn(a, l) {
        var s = l.ref;
        if (s === null)
          a !== null && a.ref !== null && (l.flags |= 2097664);
        else {
          if (typeof s != "function" && typeof s != "object")
            throw Error(h(284));
          (a === null || a.ref !== s) && (l.flags |= 2097664);
        }
      }
      function Ae(a, l, s, f, m) {
        return wi(l), s = zt(
          a,
          l,
          s,
          f,
          void 0,
          m
        ), f = ee(), a !== null && !Nn ? (Ve(a, l, m), Gl(a, l, m)) : (xe && f && ct(l), l.flags |= 1, An(a, l, s, m), l.child);
      }
      function zs(a, l, s, f, m, p) {
        return wi(l), l.updateQueue = null, s = Mt(
          l,
          f,
          s,
          m
        ), Ut(a), f = ee(), a !== null && !Nn ? (Ve(a, l, p), Gl(a, l, p)) : (xe && f && ct(l), l.flags |= 1, An(a, l, s, p), l.child);
      }
      function yi(a, l, s, f, m) {
        if (wi(l), l.stateNode === null) {
          var p = su, _ = s.contextType;
          typeof _ == "object" && _ !== null && (p = qn(_)), p = new s(f, p), l.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = rd, l.stateNode = p, p._reactInternals = l, p = l.stateNode, p.props = f, p.state = l.memoizedState, p.refs = {}, ke(l), _ = s.contextType, p.context = typeof _ == "object" && _ !== null ? qn(_) : su, p.state = l.memoizedState, _ = s.getDerivedStateFromProps, typeof _ == "function" && (Vl(
            l,
            s,
            _,
            f
          ), p.state = l.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (_ = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), _ !== p.state && rd.enqueueReplaceState(
            p,
            p.state,
            null
          ), Aa(l, f, p, m), fl(), p.state = l.memoizedState), typeof p.componentDidMount == "function" && (l.flags |= 4194308), f = !0;
        } else if (a === null) {
          p = l.stateNode;
          var O = l.memoizedProps, Q = Jt(s, O);
          p.props = Q;
          var tt = p.context, mt = s.contextType;
          _ = su, typeof mt == "object" && mt !== null && (_ = qn(mt));
          var gt = s.getDerivedStateFromProps;
          mt = typeof gt == "function" || typeof p.getSnapshotBeforeUpdate == "function", O = l.pendingProps !== O, mt || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (O || tt !== _) && xc(
            l,
            p,
            f,
            _
          ), ou = !1;
          var St = l.memoizedState;
          p.state = St, Aa(l, f, p, m), fl(), tt = l.memoizedState, O || St !== tt || ou ? (typeof gt == "function" && (Vl(
            l,
            s,
            gt,
            f
          ), tt = l.memoizedState), (Q = ou || jl(
            l,
            s,
            Q,
            f,
            St,
            tt,
            _
          )) ? (mt || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = f, l.memoizedState = tt), p.props = f, p.state = tt, p.context = _, f = Q) : (typeof p.componentDidMount == "function" && (l.flags |= 4194308), f = !1);
        } else {
          p = l.stateNode, _a(a, l), _ = l.memoizedProps, mt = Jt(s, _), p.props = mt, gt = l.pendingProps, St = p.context, tt = s.contextType, Q = su, typeof tt == "object" && tt !== null && (Q = qn(tt)), O = s.getDerivedStateFromProps, (tt = typeof O == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (_ !== gt || St !== Q) && xc(
            l,
            p,
            f,
            Q
          ), ou = !1, St = l.memoizedState, p.state = St, Aa(l, f, p, m), fl();
          var qt = l.memoizedState;
          _ !== gt || St !== qt || ou || a !== null && a.dependencies !== null && Qo(a.dependencies) ? (typeof O == "function" && (Vl(
            l,
            s,
            O,
            f
          ), qt = l.memoizedState), (mt = ou || jl(
            l,
            s,
            mt,
            f,
            St,
            qt,
            Q
          ) || a !== null && a.dependencies !== null && Qo(a.dependencies)) ? (tt || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(f, qt, Q), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(
            f,
            qt,
            Q
          )), typeof p.componentDidUpdate == "function" && (l.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || _ === a.memoizedProps && St === a.memoizedState || (l.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || _ === a.memoizedProps && St === a.memoizedState || (l.flags |= 1024), l.memoizedProps = f, l.memoizedState = qt), p.props = f, p.state = qt, p.context = Q, f = mt) : (typeof p.componentDidUpdate != "function" || _ === a.memoizedProps && St === a.memoizedState || (l.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || _ === a.memoizedProps && St === a.memoizedState || (l.flags |= 1024), f = !1);
        }
        return p = f, Rn(a, l), f = (l.flags & 128) !== 0, p || f ? (p = l.stateNode, s = f && typeof s.getDerivedStateFromError != "function" ? null : p.render(), l.flags |= 1, a !== null && f ? (l.child = ll(
          l,
          a.child,
          null,
          m
        ), l.child = ll(
          l,
          null,
          s,
          m
        )) : An(a, l, s, m), l.memoizedState = p.state, a = l.child) : a = Gl(
          a,
          l,
          m
        ), a;
      }
      function Li(a, l, s, f) {
        return ve(), l.flags |= 256, An(a, l, s, f), l.child;
      }
      function Da(a) {
        return { baseLanes: a, cachePool: lh() };
      }
      function Tc(a, l, s) {
        return a = a !== null ? a.childLanes & ~s : 0, l && (a |= Ga), a;
      }
      function Du(a, l, s) {
        var f = l.pendingProps, m = !1, p = (l.flags & 128) !== 0, _;
        if ((_ = p) || (_ = a !== null && a.memoizedState === null ? !1 : (Tn.current & 2) !== 0), _ && (m = !0, l.flags &= -129), _ = (l.flags & 32) !== 0, l.flags &= -33, a === null) {
          if (xe) {
            if (m ? Ra(l) : Ca(), xe) {
              var O = xn, Q;
              (Q = O) && (O = uy(
                O,
                Pl
              ), O !== null ? (l.memoizedState = {
                dehydrated: O,
                treeContext: al !== null ? { id: Ri, overflow: Ci } : null,
                retryLane: 536870912
              }, Q = u(18, null, null, 0), Q.stateNode = O, Q.return = l, l.child = Q, Pn = l, xn = null, Q = !0) : Q = !1), Q || ue(l);
            }
            if (O = l.memoizedState, O !== null && (O = O.dehydrated, O !== null))
              return Ar(O) ? l.lanes = 16 : l.lanes = 536870912, null;
            g(l);
          }
          return O = f.children, f = f.fallback, m ? (Ca(), m = l.mode, O = Uu(
            { mode: "hidden", children: O },
            m
          ), f = qu(
            f,
            m,
            s,
            null
          ), O.return = l, f.return = l, O.sibling = f, l.child = O, m = l.child, m.memoizedState = Da(s), m.childLanes = Tc(
            a,
            _,
            s
          ), l.memoizedState = Kr, f) : (Ra(l), zc(l, O));
        }
        if (Q = a.memoizedState, Q !== null && (O = Q.dehydrated, O !== null)) {
          if (p)
            l.flags & 256 ? (Ra(l), l.flags &= -257, l = Mc(
              a,
              l,
              s
            )) : l.memoizedState !== null ? (Ca(), l.child = a.child, l.flags |= 128, l = null) : (Ca(), m = f.fallback, O = l.mode, f = Uu(
              { mode: "visible", children: f.children },
              O
            ), m = qu(
              m,
              O,
              s,
              null
            ), m.flags |= 2, f.return = l, m.return = l, f.sibling = m, l.child = f, ll(
              l,
              a.child,
              null,
              s
            ), f = l.child, f.memoizedState = Da(s), f.childLanes = Tc(
              a,
              _,
              s
            ), l.memoizedState = Kr, l = m);
          else if (Ra(l), Ar(O))
            _ = Um(O).digest, f = Error(h(419)), f.stack = "", f.digest = _, te({ value: f, source: null, stack: null }), l = Mc(
              a,
              l,
              s
            );
          else if (Nn || Ms(
            a,
            l,
            s,
            !1
          ), _ = (s & a.childLanes) !== 0, Nn || _) {
            if (_ = Xe, _ !== null) {
              if (f = s & -s, f & 42) f = 1;
              else
                switch (f) {
                  case 2:
                    f = 1;
                    break;
                  case 8:
                    f = 4;
                    break;
                  case 32:
                    f = 16;
                    break;
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                    f = 64;
                    break;
                  case 268435456:
                    f = 134217728;
                    break;
                  default:
                    f = 0;
                }
              if (f = f & (_.suspendedLanes | s) ? 0 : f, f !== 0 && f !== Q.retryLane)
                throw Q.retryLane = f, Ce(a, f), Yn(_, a, f), hd;
            }
            jc(O) || xl(), l = Mc(
              a,
              l,
              s
            );
          } else
            jc(O) ? (l.flags |= 128, l.child = a.child, l = mm.bind(
              null,
              a
            ), Om(O, l), l = null) : (a = Q.treeContext, ca && (xn = Bm(O), Pn = l, xe = !0, _l = null, Pl = !1, a !== null && (nl[Va++] = Ri, nl[Va++] = Ci, nl[Va++] = al, Ri = a.id, Ci = a.overflow, al = l)), l = zc(
              l,
              f.children
            ), l.flags |= 4096);
          return l;
        }
        return m ? (Ca(), m = f.fallback, O = l.mode, Q = a.child, p = Q.sibling, f = $a(Q, {
          mode: "hidden",
          children: f.children
        }), f.subtreeFlags = Q.subtreeFlags & 31457280, p !== null ? m = $a(p, m) : (m = qu(
          m,
          O,
          s,
          null
        ), m.flags |= 2), m.return = l, f.return = l, f.sibling = m, l.child = f, f = m, m = l.child, O = a.child.memoizedState, O === null ? O = Da(s) : (Q = O.cachePool, Q !== null ? (p = Wl ? sn._currentValue : sn._currentValue2, Q = Q.parent !== p ? { parent: p, pool: p } : Q) : Q = lh(), O = {
          baseLanes: O.baseLanes | s,
          cachePool: Q
        }), m.memoizedState = O, m.childLanes = Tc(
          a,
          _,
          s
        ), l.memoizedState = Kr, f) : (Ra(l), s = a.child, a = s.sibling, s = $a(s, {
          mode: "visible",
          children: f.children
        }), s.return = l, s.sibling = null, a !== null && (_ = l.deletions, _ === null ? (l.deletions = [a], l.flags |= 16) : _.push(a)), l.child = s, l.memoizedState = null, s);
      }
      function zc(a, l) {
        return l = Uu(
          { mode: "visible", children: l },
          a.mode
        ), l.return = a, a.child = l;
      }
      function Uu(a, l) {
        return Mh(a, l, 0, null);
      }
      function Mc(a, l, s) {
        return ll(l, a.child, null, s), a = zc(
          l,
          l.pendingProps.children
        ), a.flags |= 2, l.memoizedState = null, a;
      }
      function _c(a, l, s) {
        a.lanes |= l;
        var f = a.alternate;
        f !== null && (f.lanes |= l), jo(a.return, l, s);
      }
      function qo(a, l, s, f, m) {
        var p = a.memoizedState;
        p === null ? a.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: f,
          tail: s,
          tailMode: m
        } : (p.isBackwards = l, p.rendering = null, p.renderingStartTime = 0, p.last = f, p.tail = s, p.tailMode = m);
      }
      function ah(a, l, s) {
        var f = l.pendingProps, m = f.revealOrder, p = f.tail;
        if (An(a, l, f.children, s), f = Tn.current, f & 2)
          f = f & 1 | 2, l.flags |= 128;
        else {
          if (a !== null && a.flags & 128)
            t: for (a = l.child; a !== null; ) {
              if (a.tag === 13)
                a.memoizedState !== null && _c(a, s, l);
              else if (a.tag === 19)
                _c(a, s, l);
              else if (a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
              }
              if (a === l) break t;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === l)
                  break t;
                a = a.return;
              }
              a.sibling.return = a.return, a = a.sibling;
            }
          f &= 1;
        }
        switch (k(Tn, f), m) {
          case "forwards":
            for (s = l.child, m = null; s !== null; )
              a = s.alternate, a !== null && q(a) === null && (m = s), s = s.sibling;
            s = m, s === null ? (m = l.child, l.child = null) : (m = s.sibling, s.sibling = null), qo(
              l,
              !1,
              m,
              s,
              p
            );
            break;
          case "backwards":
            for (s = null, m = l.child, l.child = null; m !== null; ) {
              if (a = m.alternate, a !== null && q(a) === null) {
                l.child = m;
                break;
              }
              a = m.sibling, m.sibling = s, s = m, m = a;
            }
            qo(
              l,
              !0,
              s,
              null,
              p
            );
            break;
          case "together":
            qo(l, !1, null, null, void 0);
            break;
          default:
            l.memoizedState = null;
        }
        return l.child;
      }
      function Gl(a, l, s) {
        if (a !== null && (l.dependencies = a.dependencies), du |= l.lanes, !(s & l.childLanes))
          if (a !== null) {
            if (Ms(
              a,
              l,
              s,
              !1
            ), (s & l.childLanes) === 0)
              return null;
          } else return null;
        if (a !== null && l.child !== a.child)
          throw Error(h(153));
        if (l.child !== null) {
          for (a = l.child, s = $a(a, a.pendingProps), l.child = s, s.return = l; a.sibling !== null; )
            a = a.sibling, s = s.sibling = $a(a, a.pendingProps), s.return = l;
          s.sibling = null;
        }
        return l.child;
      }
      function Yo(a, l) {
        return a.lanes & l ? !0 : (a = a.dependencies, !!(a !== null && Qo(a)));
      }
      function om(a, l, s) {
        switch (l.tag) {
          case 3:
            vt(
              l,
              l.stateNode.containerInfo
            ), Ql(l, sn, a.memoizedState.cache), ve();
            break;
          case 27:
          case 5:
            Ot(l);
            break;
          case 4:
            vt(
              l,
              l.stateNode.containerInfo
            );
            break;
          case 10:
            Ql(
              l,
              l.type,
              l.memoizedProps.value
            );
            break;
          case 13:
            var f = l.memoizedState;
            if (f !== null)
              return f.dehydrated !== null ? (Ra(l), l.flags |= 128, null) : s & l.child.childLanes ? Du(
                a,
                l,
                s
              ) : (Ra(l), a = Gl(
                a,
                l,
                s
              ), a !== null ? a.sibling : null);
            Ra(l);
            break;
          case 19:
            var m = (a.flags & 128) !== 0;
            if (f = (s & l.childLanes) !== 0, f || (Ms(
              a,
              l,
              s,
              !1
            ), f = (s & l.childLanes) !== 0), m) {
              if (f)
                return ah(
                  a,
                  l,
                  s
                );
              l.flags |= 128;
            }
            if (m = l.memoizedState, m !== null && (m.rendering = null, m.tail = null, m.lastEffect = null), k(Tn, Tn.current), f) break;
            return null;
          case 22:
          case 23:
            return l.lanes = 0, Ho(a, l, s);
          case 24:
            Ql(l, sn, a.memoizedState.cache);
        }
        return Gl(a, l, s);
      }
      function Vo(a, l, s) {
        if (a !== null)
          if (a.memoizedProps !== l.pendingProps)
            Nn = !0;
          else {
            if (!Yo(a, s) && !(l.flags & 128))
              return Nn = !1, om(
                a,
                l,
                s
              );
            Nn = !!(a.flags & 131072);
          }
        else
          Nn = !1, xe && l.flags & 1048576 && w(l, Vr, l.index);
        switch (l.lanes = 0, l.tag) {
          case 16:
            t: {
              a = l.pendingProps;
              var f = l.elementType, m = f._init;
              if (f = m(f._payload), l.type = f, typeof f == "function")
                Cs(f) ? (a = Jt(f, a), l.tag = 1, l = yi(
                  null,
                  l,
                  f,
                  a,
                  s
                )) : (l.tag = 0, l = Ae(
                  null,
                  l,
                  f,
                  a,
                  s
                ));
              else {
                if (f != null) {
                  if (m = f.$$typeof, m === Dh) {
                    l.tag = 11, l = Uo(
                      null,
                      l,
                      f,
                      a,
                      s
                    );
                    break t;
                  } else if (m === xr) {
                    l.tag = 14, l = cm(
                      null,
                      l,
                      f,
                      a,
                      s
                    );
                    break t;
                  }
                }
                throw l = S(f) || f, Error(h(306, l, ""));
              }
            }
            return l;
          case 0:
            return Ae(
              a,
              l,
              l.type,
              l.pendingProps,
              s
            );
          case 1:
            return f = l.type, m = Jt(
              f,
              l.pendingProps
            ), yi(
              a,
              l,
              f,
              m,
              s
            );
          case 3:
            t: {
              if (vt(
                l,
                l.stateNode.containerInfo
              ), a === null) throw Error(h(387));
              var p = l.pendingProps;
              m = l.memoizedState, f = m.element, _a(a, l), Aa(l, p, null, s);
              var _ = l.memoizedState;
              if (p = _.cache, Ql(l, sn, p), p !== m.cache && Go(
                l,
                [sn],
                s,
                !0
              ), fl(), p = _.element, ca && m.isDehydrated)
                if (m = {
                  element: p,
                  isDehydrated: !1,
                  cache: _.cache
                }, l.updateQueue.baseState = m, l.memoizedState = m, l.flags & 256) {
                  l = Li(
                    a,
                    l,
                    p,
                    s
                  );
                  break t;
                } else if (p !== f) {
                  f = st(
                    Error(h(424)),
                    l
                  ), te(f), l = Li(
                    a,
                    l,
                    p,
                    s
                  );
                  break t;
                } else
                  for (ca && (xn = Ph(
                    l.stateNode.containerInfo
                  ), Pn = l, xe = !0, _l = null, Pl = !0), s = Lm(
                    l,
                    null,
                    p,
                    s
                  ), l.child = s; s; )
                    s.flags = s.flags & -3 | 4096, s = s.sibling;
              else {
                if (ve(), p === f) {
                  l = Gl(
                    a,
                    l,
                    s
                  );
                  break t;
                }
                An(a, l, p, s);
              }
              l = l.child;
            }
            return l;
          case 26:
            if (qa)
              return Rn(a, l), a === null ? (s = nd(
                l.type,
                null,
                l.pendingProps,
                null
              )) ? l.memoizedState = s : xe || (l.stateNode = oy(
                l.type,
                l.pendingProps,
                cu.current,
                l
              )) : l.memoizedState = nd(
                l.type,
                a.memoizedProps,
                l.pendingProps,
                a.memoizedState
              ), null;
          case 27:
            if (un)
              return Ot(l), a === null && un && xe && (f = l.stateNode = Zu(
                l.type,
                l.pendingProps,
                cu.current,
                Qn.current,
                !1
              ), Pn = l, Pl = !0, xn = iu(f)), f = l.pendingProps.children, a !== null || xe ? An(
                a,
                l,
                f,
                s
              ) : l.child = ll(
                l,
                null,
                f,
                s
              ), Rn(a, l), l.child;
          case 5:
            return a === null && xe && (sy(
              l.type,
              l.pendingProps,
              Qn.current
            ), (m = f = xn) && (f = qm(
              f,
              l.type,
              l.pendingProps,
              Pl
            ), f !== null ? (l.stateNode = f, Pn = l, xn = iu(f), Pl = !1, m = !0) : m = !1), m || ue(l)), Ot(l), m = l.type, p = l.pendingProps, _ = a !== null ? a.memoizedProps : null, f = p.children, zi(m, p) ? f = null : _ !== null && zi(m, _) && (l.flags |= 32), l.memoizedState !== null && (m = zt(
              a,
              l,
              de,
              null,
              null,
              s
            ), Wl ? bi._currentValue = m : bi._currentValue2 = m), Rn(a, l), An(a, l, f, s), l.child;
          case 6:
            return a === null && xe && (jm(
              l.pendingProps,
              Qn.current
            ), (a = s = xn) && (s = Ih(
              s,
              l.pendingProps,
              Pl
            ), s !== null ? (l.stateNode = s, Pn = l, xn = null, a = !0) : a = !1), a || ue(l)), null;
          case 13:
            return Du(a, l, s);
          case 4:
            return vt(
              l,
              l.stateNode.containerInfo
            ), f = l.pendingProps, a === null ? l.child = ll(
              l,
              null,
              f,
              s
            ) : An(
              a,
              l,
              f,
              s
            ), l.child;
          case 11:
            return Uo(
              a,
              l,
              l.type,
              l.pendingProps,
              s
            );
          case 7:
            return An(
              a,
              l,
              l.pendingProps,
              s
            ), l.child;
          case 8:
            return An(
              a,
              l,
              l.pendingProps.children,
              s
            ), l.child;
          case 12:
            return An(
              a,
              l,
              l.pendingProps.children,
              s
            ), l.child;
          case 10:
            return f = l.pendingProps, Ql(
              l,
              l.type,
              f.value
            ), An(
              a,
              l,
              f.children,
              s
            ), l.child;
          case 9:
            return m = l.type._context, f = l.pendingProps.children, wi(l), m = qn(m), f = f(m), l.flags |= 1, An(
              a,
              l,
              f,
              s
            ), l.child;
          case 14:
            return cm(
              a,
              l,
              l.type,
              l.pendingProps,
              s
            );
          case 15:
            return Oo(
              a,
              l,
              l.type,
              l.pendingProps,
              s
            );
          case 19:
            return ah(
              a,
              l,
              s
            );
          case 22:
            return Ho(a, l, s);
          case 24:
            return wi(l), f = qn(sn), a === null ? (m = Wi(), m === null && (m = Xe, p = Zo(), m.pooledCache = p, p.refCount++, p !== null && (m.pooledCacheLanes |= s), m = p), l.memoizedState = {
              parent: f,
              cache: m
            }, ke(l), Ql(l, sn, m)) : (a.lanes & s && (_a(a, l), Aa(l, null, null, s), fl()), m = a.memoizedState, p = l.memoizedState, m.parent !== f ? (m = { parent: f, cache: f }, l.memoizedState = m, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = m), Ql(l, sn, f)) : (f = p.cache, Ql(l, sn, f), f !== m.cache && Go(
              l,
              [sn],
              s,
              !0
            ))), An(
              a,
              l,
              l.pendingProps.children,
              s
            ), l.child;
          case 29:
            throw l.pendingProps;
        }
        throw Error(h(156, l.tag));
      }
      function Ql(a, l, s) {
        Wl ? (k(Fc, l._currentValue), l._currentValue = s) : (k(Fc, l._currentValue2), l._currentValue2 = s);
      }
      function vl(a) {
        var l = Fc.current;
        Wl ? a._currentValue = l : a._currentValue2 = l, K(Fc);
      }
      function jo(a, l, s) {
        for (; a !== null; ) {
          var f = a.alternate;
          if ((a.childLanes & l) !== l ? (a.childLanes |= l, f !== null && (f.childLanes |= l)) : f !== null && (f.childLanes & l) !== l && (f.childLanes |= l), a === s) break;
          a = a.return;
        }
      }
      function Go(a, l, s, f) {
        var m = a.child;
        for (m !== null && (m.return = a); m !== null; ) {
          var p = m.dependencies;
          if (p !== null) {
            var _ = m.child;
            p = p.firstContext;
            t: for (; p !== null; ) {
              var O = p;
              p = m;
              for (var Q = 0; Q < l.length; Q++)
                if (O.context === l[Q]) {
                  p.lanes |= s, O = p.alternate, O !== null && (O.lanes |= s), jo(
                    p.return,
                    s,
                    a
                  ), f || (_ = null);
                  break t;
                }
              p = O.next;
            }
          } else if (m.tag === 18) {
            if (_ = m.return, _ === null) throw Error(h(341));
            _.lanes |= s, p = _.alternate, p !== null && (p.lanes |= s), jo(_, s, a), _ = null;
          } else _ = m.child;
          if (_ !== null) _.return = m;
          else
            for (_ = m; _ !== null; ) {
              if (_ === a) {
                _ = null;
                break;
              }
              if (m = _.sibling, m !== null) {
                m.return = _.return, _ = m;
                break;
              }
              _ = _.return;
            }
          m = _;
        }
      }
      function Ms(a, l, s, f) {
        a = null;
        for (var m = l, p = !1; m !== null; ) {
          if (!p) {
            if (m.flags & 524288) p = !0;
            else if (m.flags & 262144) break;
          }
          if (m.tag === 10) {
            var _ = m.alternate;
            if (_ === null) throw Error(h(387));
            if (_ = _.memoizedProps, _ !== null) {
              var O = m.type;
              ra(m.pendingProps.value, _.value) || (a !== null ? a.push(O) : a = [O]);
            }
          } else if (m === Ys.current) {
            if (_ = m.alternate, _ === null) throw Error(h(387));
            _.memoizedState.memoizedState !== m.memoizedState.memoizedState && (a !== null ? a.push(bi) : a = [bi]);
          }
          m = m.return;
        }
        a !== null && Go(
          l,
          a,
          s,
          f
        ), l.flags |= 262144;
      }
      function Qo(a) {
        for (a = a.firstContext; a !== null; ) {
          var l = a.context;
          if (!ra(
            Wl ? l._currentValue : l._currentValue2,
            a.memoizedValue
          ))
            return !0;
          a = a.next;
        }
        return !1;
      }
      function wi(a) {
        hu = a, bl = null, a = a.dependencies, a !== null && (a.firstContext = null);
      }
      function qn(a) {
        return Xo(hu, a);
      }
      function bc(a, l) {
        return hu === null && wi(a), Xo(a, l);
      }
      function Xo(a, l) {
        var s = Wl ? l._currentValue : l._currentValue2;
        if (l = { context: l, memoizedValue: s, next: null }, bl === null) {
          if (a === null) throw Error(h(308));
          bl = l, a.dependencies = { lanes: 0, firstContext: l }, a.flags |= 524288;
        } else bl = bl.next = l;
        return s;
      }
      function Zo() {
        return {
          controller: new dd(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function _s(a) {
        a.refCount--, a.refCount === 0 && hy(dy, function() {
          a.controller.abort();
        });
      }
      function Wi() {
        var a = Ui.current;
        return a !== null ? a : Xe.pooledCache;
      }
      function Ou(a, l) {
        l === null ? k(Ui, Ui.current) : k(Ui, l.pool);
      }
      function lh() {
        var a = Wi();
        return a === null ? null : {
          parent: Wl ? sn._currentValue : sn._currentValue2,
          pool: a
        };
      }
      function Ua(a) {
        a.flags |= 4;
      }
      function Ac(a, l) {
        if (a !== null && a.child === l.child) return !1;
        if (l.flags & 16) return !0;
        for (a = l.child; a !== null; ) {
          if (a.flags & 13878 || a.subtreeFlags & 13878)
            return !0;
          a = a.sibling;
        }
        return !1;
      }
      function Fi(a, l, s, f) {
        if (hn)
          for (s = l.child; s !== null; ) {
            if (s.tag === 5 || s.tag === 6)
              wl(a, s.stateNode);
            else if (!(s.tag === 4 || un && s.tag === 27) && s.child !== null) {
              s.child.return = s, s = s.child;
              continue;
            }
            if (s === l) break;
            for (; s.sibling === null; ) {
              if (s.return === null || s.return === l)
                return;
              s = s.return;
            }
            s.sibling.return = s.return, s = s.sibling;
          }
        else if (Mi)
          for (var m = l.child; m !== null; ) {
            if (m.tag === 5) {
              var p = m.stateNode;
              s && f && (p = Nm(
                p,
                m.type,
                m.memoizedProps
              )), wl(a, p);
            } else if (m.tag === 6)
              p = m.stateNode, s && f && (p = Dm(
                p,
                m.memoizedProps
              )), wl(a, p);
            else if (m.tag !== 4) {
              if (m.tag === 22 && m.memoizedState !== null)
                p = m.child, p !== null && (p.return = m), Fi(a, m, !0, !0);
              else if (m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
            }
            if (m === l) break;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === l)
                return;
              m = m.return;
            }
            m.sibling.return = m.return, m = m.sibling;
          }
      }
      function Ko(a, l, s, f) {
        if (Mi)
          for (var m = l.child; m !== null; ) {
            if (m.tag === 5) {
              var p = m.stateNode;
              s && f && (p = Nm(
                p,
                m.type,
                m.memoizedProps
              )), br(a, p);
            } else if (m.tag === 6)
              p = m.stateNode, s && f && (p = Dm(
                p,
                m.memoizedProps
              )), br(a, p);
            else if (m.tag !== 4) {
              if (m.tag === 22 && m.memoizedState !== null)
                p = m.child, p !== null && (p.return = m), Ko(
                  a,
                  m,
                  !(m.memoizedProps !== null && m.memoizedProps.mode === "manual"),
                  !0
                );
              else if (m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
            }
            if (m === l) break;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === l) return;
              m = m.return;
            }
            m.sibling.return = m.return, m = m.sibling;
          }
      }
      function Pi(a, l) {
        if (Mi && Ac(a, l)) {
          a = l.stateNode;
          var s = a.containerInfo, f = Re();
          Ko(f, l, !1, !1), a.pendingChildren = f, Ua(l), ly(s, f);
        }
      }
      function wn(a, l, s, f) {
        if (hn)
          a.memoizedProps !== f && Ua(l);
        else if (Mi) {
          var m = a.stateNode, p = a.memoizedProps;
          if ((a = Ac(a, l)) || p !== f) {
            var _ = Qn.current;
            p = Cm(
              m,
              s,
              p,
              f,
              !a,
              null
            ), p === m ? l.stateNode = m : (Vh(
              p,
              s,
              f,
              _
            ) && Ua(l), l.stateNode = p, a ? Fi(p, l, !1, !1) : Ua(l));
          } else l.stateNode = m;
        }
      }
      function bs(a, l, s) {
        if (Ip(l, s)) {
          if (a.flags |= 16777216, !Xh(l, s))
            if (rr()) a.flags |= 8192;
            else
              throw Gs = Gr, Di;
        } else a.flags &= -16777217;
      }
      function Jo(a, l) {
        if (Vn(l)) {
          if (a.flags |= 16777216, !Qm(l))
            if (rr()) a.flags |= 8192;
            else
              throw Gs = Gr, Di;
        } else a.flags &= -16777217;
      }
      function Rc(a, l) {
        l !== null && (a.flags |= 4), a.flags & 16384 && (l = a.tag !== 22 ? Vt() : 536870912, a.lanes |= l, Ls |= l);
      }
      function Hu(a, l) {
        if (!xe)
          switch (a.tailMode) {
            case "hidden":
              l = a.tail;
              for (var s = null; l !== null; )
                l.alternate !== null && (s = l), l = l.sibling;
              s === null ? a.tail = null : s.sibling = null;
              break;
            case "collapsed":
              s = a.tail;
              for (var f = null; s !== null; )
                s.alternate !== null && (f = s), s = s.sibling;
              f === null ? l || a.tail === null ? a.tail = null : a.tail.sibling = null : f.sibling = null;
          }
      }
      function Qe(a) {
        var l = a.alternate !== null && a.alternate.child === a.child, s = 0, f = 0;
        if (l)
          for (var m = a.child; m !== null; )
            s |= m.lanes | m.childLanes, f |= m.subtreeFlags & 31457280, f |= m.flags & 31457280, m.return = a, m = m.sibling;
        else
          for (m = a.child; m !== null; )
            s |= m.lanes | m.childLanes, f |= m.subtreeFlags, f |= m.flags, m.return = a, m = m.sibling;
        return a.subtreeFlags |= f, a.childLanes = s, l;
      }
      function ih(a, l, s) {
        var f = l.pendingProps;
        switch (bt(l), l.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Qe(l), null;
          case 1:
            return Qe(l), null;
          case 3:
            return s = l.stateNode, f = null, a !== null && (f = a.memoizedState.cache), l.memoizedState.cache !== f && (l.flags |= 2048), vl(sn), Dt(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (a === null || a.child === null) && (ge(l) ? Ua(l) : a === null || a.memoizedState.isDehydrated && !(l.flags & 256) || (l.flags |= 1024, _l !== null && (Dc(_l), _l = null))), Pi(a, l), Qe(l), null;
          case 26:
            if (qa) {
              s = l.type;
              var m = l.memoizedState;
              return a === null ? (Ua(l), m !== null ? (Qe(l), Jo(
                l,
                m
              )) : (Qe(l), bs(
                l,
                s,
                f
              ))) : m ? m !== a.memoizedState ? (Ua(l), Qe(l), Jo(
                l,
                m
              )) : (Qe(l), l.flags &= -16777217) : (hn ? a.memoizedProps !== f && Ua(l) : wn(
                a,
                l,
                s,
                f
              ), Qe(l), bs(
                l,
                s,
                f
              )), null;
            }
          case 27:
            if (un) {
              if (Ye(l), s = cu.current, m = l.type, a !== null && l.stateNode != null)
                hn ? a.memoizedProps !== f && Ua(l) : wn(
                  a,
                  l,
                  m,
                  f
                );
              else {
                if (!f) {
                  if (l.stateNode === null)
                    throw Error(h(166));
                  return Qe(l), null;
                }
                a = Qn.current, ge(l) ? Me(l, a) : (a = Zu(
                  m,
                  f,
                  s,
                  a,
                  !0
                ), l.stateNode = a, Ua(l));
              }
              return Qe(l), null;
            }
          case 5:
            if (Ye(l), s = l.type, a !== null && l.stateNode != null)
              wn(a, l, s, f);
            else {
              if (!f) {
                if (l.stateNode === null)
                  throw Error(h(166));
                return Qe(l), null;
              }
              a = Qn.current, ge(l) ? Me(l, a) : (m = Yh(
                s,
                f,
                cu.current,
                a,
                l
              ), Fi(m, l, !1, !1), l.stateNode = m, Vh(
                m,
                s,
                f,
                a
              ) && Ua(l));
            }
            return Qe(l), bs(
              l,
              l.type,
              l.pendingProps
            ), null;
          case 6:
            if (a && l.stateNode != null)
              s = a.memoizedProps, hn ? s !== f && Ua(l) : Mi && (s !== f ? (l.stateNode = jh(
                f,
                cu.current,
                Qn.current,
                l
              ), Ua(l)) : l.stateNode = a.stateNode);
            else {
              if (typeof f != "string" && l.stateNode === null)
                throw Error(h(166));
              if (a = cu.current, s = Qn.current, ge(l)) {
                if (!ca) throw Error(h(176));
                if (a = l.stateNode, s = l.memoizedProps, f = null, m = Pn, m !== null)
                  switch (m.tag) {
                    case 27:
                    case 5:
                      f = m.memoizedProps;
                  }
                uu(
                  a,
                  s,
                  l,
                  f
                ) || ue(l);
              } else
                l.stateNode = jh(
                  f,
                  a,
                  s,
                  l
                );
            }
            return Qe(l), null;
          case 13:
            if (f = l.memoizedState, a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
              if (m = ge(l), f !== null && f.dehydrated !== null) {
                if (a === null) {
                  if (!m) throw Error(h(318));
                  if (!ca) throw Error(h(344));
                  if (m = l.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(h(317));
                  Ym(m, l);
                } else
                  ve(), !(l.flags & 128) && (l.memoizedState = null), l.flags |= 4;
                Qe(l), m = !1;
              } else
                _l !== null && (Dc(_l), _l = null), m = !0;
              if (!m)
                return l.flags & 256 ? (g(l), l) : (g(l), null);
            }
            if (g(l), l.flags & 128)
              return l.lanes = s, l;
            if (s = f !== null, a = a !== null && a.memoizedState !== null, s) {
              f = l.child, m = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (m = f.alternate.memoizedState.cachePool.pool);
              var p = null;
              f.memoizedState !== null && f.memoizedState.cachePool !== null && (p = f.memoizedState.cachePool.pool), p !== m && (f.flags |= 2048);
            }
            return s !== a && s && (l.child.flags |= 8192), Rc(l, l.updateQueue), Qe(l), null;
          case 4:
            return Dt(), Pi(a, l), a === null && gm(l.stateNode.containerInfo), Qe(l), null;
          case 10:
            return vl(l.type), Qe(l), null;
          case 19:
            if (K(Tn), m = l.memoizedState, m === null)
              return Qe(l), null;
            if (f = (l.flags & 128) !== 0, p = m.rendering, p === null)
              if (f) Hu(m, !1);
              else {
                if (en !== 0 || a !== null && a.flags & 128)
                  for (a = l.child; a !== null; ) {
                    if (p = q(a), p !== null) {
                      for (l.flags |= 128, Hu(m, !1), a = p.updateQueue, l.updateQueue = a, Rc(l, a), l.subtreeFlags = 0, a = s, s = l.child; s !== null; )
                        we(s, a), s = s.sibling;
                      return k(
                        Tn,
                        Tn.current & 1 | 2
                      ), l.child;
                    }
                    a = a.sibling;
                  }
                m.tail !== null && el() > $c && (l.flags |= 128, f = !0, Hu(m, !1), l.lanes = 4194304);
              }
            else {
              if (!f)
                if (a = q(p), a !== null) {
                  if (l.flags |= 128, f = !0, a = a.updateQueue, l.updateQueue = a, Rc(l, a), Hu(m, !0), m.tail === null && m.tailMode === "hidden" && !p.alternate && !xe)
                    return Qe(l), null;
                } else
                  2 * el() - m.renderingStartTime > $c && s !== 536870912 && (l.flags |= 128, f = !0, Hu(m, !1), l.lanes = 4194304);
              m.isBackwards ? (p.sibling = l.child, l.child = p) : (a = m.last, a !== null ? a.sibling = p : l.child = p, m.last = p);
            }
            return m.tail !== null ? (l = m.tail, m.rendering = l, m.tail = l.sibling, m.renderingStartTime = el(), l.sibling = null, a = Tn.current, k(
              Tn,
              f ? a & 1 | 2 : a & 1
            ), l) : (Qe(l), null);
          case 22:
          case 23:
            return g(l), Zi(), f = l.memoizedState !== null, a !== null ? a.memoizedState !== null !== f && (l.flags |= 8192) : f && (l.flags |= 8192), f ? s & 536870912 && !(l.flags & 128) && (Qe(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Qe(l), s = l.updateQueue, s !== null && Rc(l, s.retryQueue), s = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== s && (l.flags |= 2048), a !== null && K(Ui), null;
          case 24:
            return s = null, a !== null && (s = a.memoizedState.cache), l.memoizedState.cache !== s && (l.flags |= 2048), vl(sn), Qe(l), null;
          case 25:
            return null;
        }
        throw Error(h(156, l.tag));
      }
      function Lo(a, l) {
        switch (bt(l), l.tag) {
          case 1:
            return a = l.flags, a & 65536 ? (l.flags = a & -65537 | 128, l) : null;
          case 3:
            return vl(sn), Dt(), a = l.flags, a & 65536 && !(a & 128) ? (l.flags = a & -65537 | 128, l) : null;
          case 26:
          case 27:
          case 5:
            return Ye(l), null;
          case 13:
            if (g(l), a = l.memoizedState, a !== null && a.dehydrated !== null) {
              if (l.alternate === null)
                throw Error(h(340));
              ve();
            }
            return a = l.flags, a & 65536 ? (l.flags = a & -65537 | 128, l) : null;
          case 19:
            return K(Tn), null;
          case 4:
            return Dt(), null;
          case 10:
            return vl(l.type), null;
          case 22:
          case 23:
            return g(l), Zi(), a !== null && K(Ui), a = l.flags, a & 65536 ? (l.flags = a & -65537 | 128, l) : null;
          case 24:
            return vl(sn), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function wo(a, l) {
        switch (bt(l), l.tag) {
          case 3:
            vl(sn), Dt();
            break;
          case 26:
          case 27:
          case 5:
            Ye(l);
            break;
          case 4:
            Dt();
            break;
          case 13:
            g(l);
            break;
          case 19:
            K(Tn);
            break;
          case 10:
            vl(l.type);
            break;
          case 22:
          case 23:
            g(l), Zi(), a !== null && K(Ui);
            break;
          case 24:
            vl(sn);
        }
      }
      function Ii(a, l) {
        try {
          var s = l.updateQueue, f = s !== null ? s.lastEffect : null;
          if (f !== null) {
            var m = f.next;
            s = m;
            do {
              if ((s.tag & a) === a) {
                f = void 0;
                var p = s.create, _ = s.inst;
                f = p(), _.destroy = f;
              }
              s = s.next;
            } while (s !== m);
          }
        } catch (O) {
          Pt(l, l.return, O);
        }
      }
      function Xl(a, l, s) {
        try {
          var f = l.updateQueue, m = f !== null ? f.lastEffect : null;
          if (m !== null) {
            var p = m.next;
            f = p;
            do {
              if ((f.tag & a) === a) {
                var _ = f.inst, O = _.destroy;
                if (O !== void 0) {
                  _.destroy = void 0, m = l;
                  var Q = s;
                  try {
                    O();
                  } catch (tt) {
                    Pt(
                      m,
                      Q,
                      tt
                    );
                  }
                }
              }
              f = f.next;
            } while (f !== p);
          }
        } catch (tt) {
          Pt(l, l.return, tt);
        }
      }
      function uh(a) {
        var l = a.updateQueue;
        if (l !== null) {
          var s = a.stateNode;
          try {
            zu(l, s);
          } catch (f) {
            Pt(a, a.return, f);
          }
        }
      }
      function sh(a, l, s) {
        s.props = Jt(
          a.type,
          a.memoizedProps
        ), s.state = a.memoizedState;
        try {
          s.componentWillUnmount();
        } catch (f) {
          Pt(a, l, f);
        }
      }
      function vi(a, l) {
        try {
          var s = a.ref;
          if (s !== null) {
            var f = a.stateNode;
            switch (a.tag) {
              case 26:
              case 27:
              case 5:
                var m = Us(f);
                break;
              default:
                m = f;
            }
            typeof s == "function" ? a.refCleanup = s(m) : s.current = m;
          }
        } catch (p) {
          Pt(a, l, p);
        }
      }
      function ya(a, l) {
        var s = a.ref, f = a.refCleanup;
        if (s !== null)
          if (typeof f == "function")
            try {
              f();
            } catch (m) {
              Pt(a, l, m);
            } finally {
              a.refCleanup = null, a = a.alternate, a != null && (a.refCleanup = null);
            }
          else if (typeof s == "function")
            try {
              s(null);
            } catch (m) {
              Pt(a, l, m);
            }
          else s.current = null;
      }
      function ch(a) {
        var l = a.type, s = a.memoizedProps, f = a.stateNode;
        try {
          ty(f, l, s, a);
        } catch (m) {
          Pt(a, a.return, m);
        }
      }
      function oh(a, l, s) {
        try {
          bm(
            a.stateNode,
            a.type,
            s,
            l,
            a
          );
        } catch (f) {
          Pt(a, a.return, f);
        }
      }
      function Wo(a) {
        return a.tag === 5 || a.tag === 3 || (qa ? a.tag === 26 : !1) || (un ? a.tag === 27 : !1) || a.tag === 4;
      }
      function Fo(a) {
        t: for (; ; ) {
          for (; a.sibling === null; ) {
            if (a.return === null || Wo(a.return)) return null;
            a = a.return;
          }
          for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && (!un || a.tag !== 27) && a.tag !== 18; ) {
            if (a.flags & 2 || a.child === null || a.tag === 4) continue t;
            a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Po(a, l, s) {
        var f = a.tag;
        if (f === 5 || f === 6)
          a = a.stateNode, l ? ey(s, a, l) : _m(s, a);
        else if (!(f === 4 || un && f === 27) && (a = a.child, a !== null))
          for (Po(a, l, s), a = a.sibling; a !== null; )
            Po(a, l, s), a = a.sibling;
      }
      function Zl(a, l, s) {
        var f = a.tag;
        if (f === 5 || f === 6)
          a = a.stateNode, l ? Am(s, a, l) : Lh(s, a);
        else if (!(f === 4 || un && f === 27) && (a = a.child, a !== null))
          for (Zl(a, l, s), a = a.sibling; a !== null; )
            Zl(a, l, s), a = a.sibling;
      }
      function Io(a, l, s) {
        a = a.containerInfo;
        try {
          Fh(a, s);
        } catch (f) {
          Pt(l, l.return, f);
        }
      }
      function rh(a, l) {
        for (Ti(a.containerInfo), Dn = l; Dn !== null; )
          if (a = Dn, l = a.child, (a.subtreeFlags & 1028) !== 0 && l !== null)
            l.return = a, Dn = l;
          else
            for (; Dn !== null; ) {
              a = Dn;
              var s = a.alternate;
              switch (l = a.flags, a.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  if (l & 1024 && s !== null) {
                    l = void 0;
                    var f = a, m = s.memoizedProps;
                    s = s.memoizedState;
                    var p = f.stateNode;
                    try {
                      var _ = Jt(
                        f.type,
                        m,
                        f.elementType === f.type
                      );
                      l = p.getSnapshotBeforeUpdate(
                        _,
                        s
                      ), p.__reactInternalSnapshotBeforeUpdate = l;
                    } catch (O) {
                      Pt(
                        f,
                        f.return,
                        O
                      );
                    }
                  }
                  break;
                case 3:
                  l & 1024 && hn && lu(a.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if (l & 1024)
                    throw Error(h(163));
              }
              if (l = a.sibling, l !== null) {
                l.return = a.return, Dn = l;
                break;
              }
              Dn = a.return;
            }
        return _ = Pm, Pm = !1, _;
      }
      function rm(a, l, s) {
        var f = s.flags;
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            Kl(a, s), f & 4 && Ii(5, s);
            break;
          case 1:
            if (Kl(a, s), f & 4)
              if (a = s.stateNode, l === null)
                try {
                  a.componentDidMount();
                } catch (O) {
                  Pt(s, s.return, O);
                }
              else {
                var m = Jt(
                  s.type,
                  l.memoizedProps
                );
                l = l.memoizedState;
                try {
                  a.componentDidUpdate(
                    m,
                    l,
                    a.__reactInternalSnapshotBeforeUpdate
                  );
                } catch (O) {
                  Pt(
                    s,
                    s.return,
                    O
                  );
                }
              }
            f & 64 && uh(s), f & 512 && vi(s, s.return);
            break;
          case 3:
            if (Kl(a, s), f & 64 && (f = s.updateQueue, f !== null)) {
              if (a = null, s.child !== null)
                switch (s.child.tag) {
                  case 27:
                  case 5:
                    a = Us(s.child.stateNode);
                    break;
                  case 1:
                    a = s.child.stateNode;
                }
              try {
                zu(f, a);
              } catch (O) {
                Pt(s, s.return, O);
              }
            }
            break;
          case 26:
            if (qa) {
              Kl(a, s), f & 512 && vi(s, s.return);
              break;
            }
          case 27:
          case 5:
            Kl(a, s), l === null && f & 4 && ch(s), f & 512 && vi(s, s.return);
            break;
          case 12:
            Kl(a, s);
            break;
          case 13:
            Kl(a, s), f & 4 && $o(a, s);
            break;
          case 22:
            if (m = s.memoizedState !== null || ei, !m) {
              l = l !== null && l.memoizedState !== null || cn;
              var p = ei, _ = cn;
              ei = m, (cn = l) && !_ ? Sl(
                a,
                s,
                (s.subtreeFlags & 8772) !== 0
              ) : Kl(a, s), ei = p, cn = _;
            }
            f & 512 && (s.memoizedProps.mode === "manual" ? vi(s, s.return) : ya(s, s.return));
            break;
          default:
            Kl(a, s);
        }
      }
      function fm(a) {
        var l = a.alternate;
        l !== null && (a.alternate = null, fm(l)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (l = a.stateNode, l !== null && Mr(l)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null;
      }
      function Pa(a, l, s) {
        for (s = s.child; s !== null; )
          Bu(
            a,
            l,
            s
          ), s = s.sibling;
      }
      function Bu(a, l, s) {
        if (Sa && typeof Sa.onCommitFiberUnmount == "function")
          try {
            Sa.onCommitFiberUnmount(Ku, s);
          } catch {
          }
        switch (s.tag) {
          case 26:
            if (qa) {
              cn || ya(s, l), Pa(
                a,
                l,
                s
              ), s.memoizedState ? Dr(s.memoizedState) : s.stateNode && se(s.stateNode);
              break;
            }
          case 27:
            if (un) {
              cn || ya(s, l);
              var f = pn, m = ja;
              pn = s.stateNode, Pa(
                a,
                l,
                s
              ), ry(s.stateNode), pn = f, ja = m;
              break;
            }
          case 5:
            cn || ya(s, l);
          case 6:
            if (hn) {
              if (f = pn, m = ja, pn = null, Pa(
                a,
                l,
                s
              ), pn = f, ja = m, pn !== null)
                if (ja)
                  try {
                    _r(pn, s.stateNode);
                  } catch (p) {
                    Pt(
                      s,
                      l,
                      p
                    );
                  }
                else
                  try {
                    qs(pn, s.stateNode);
                  } catch (p) {
                    Pt(
                      s,
                      l,
                      p
                    );
                  }
            } else
              Pa(
                a,
                l,
                s
              );
            break;
          case 18:
            hn && pn !== null && (ja ? td(
              pn,
              s.stateNode
            ) : Vm(pn, s.stateNode));
            break;
          case 4:
            hn ? (f = pn, m = ja, pn = s.stateNode.containerInfo, ja = !0, Pa(
              a,
              l,
              s
            ), pn = f, ja = m) : (Mi && Io(
              s.stateNode,
              s,
              Re()
            ), Pa(
              a,
              l,
              s
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            cn || Xl(2, s, l), cn || Xl(4, s, l), Pa(
              a,
              l,
              s
            );
            break;
          case 1:
            cn || (ya(s, l), f = s.stateNode, typeof f.componentWillUnmount == "function" && sh(
              s,
              l,
              f
            )), Pa(
              a,
              l,
              s
            );
            break;
          case 21:
            Pa(
              a,
              l,
              s
            );
            break;
          case 22:
            cn || ya(s, l), cn = (f = cn) || s.memoizedState !== null, Pa(
              a,
              l,
              s
            ), cn = f;
            break;
          default:
            Pa(
              a,
              l,
              s
            );
        }
      }
      function $o(a, l) {
        if (ca && l.memoizedState === null && (a = l.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null))))
          try {
            Qu(a);
          } catch (s) {
            Pt(l, l.return, s);
          }
      }
      function ko(a) {
        switch (a.tag) {
          case 13:
          case 19:
            var l = a.stateNode;
            return l === null && (l = a.stateNode = new Fm()), l;
          case 22:
            return a = a.stateNode, l = a._retryCache, l === null && (l = a._retryCache = new Fm()), l;
          default:
            throw Error(h(435, a.tag));
        }
      }
      function tr(a, l) {
        var s = ko(a);
        l.forEach(function(f) {
          var m = Th.bind(null, a, f);
          s.has(f) || (s.add(f), f.then(m, m));
        });
      }
      function la(a, l) {
        var s = l.deletions;
        if (s !== null)
          for (var f = 0; f < s.length; f++) {
            var m = s[f], p = a, _ = l;
            if (hn) {
              var O = _;
              t: for (; O !== null; ) {
                switch (O.tag) {
                  case 27:
                  case 5:
                    pn = O.stateNode, ja = !1;
                    break t;
                  case 3:
                    pn = O.stateNode.containerInfo, ja = !0;
                    break t;
                  case 4:
                    pn = O.stateNode.containerInfo, ja = !0;
                    break t;
                }
                O = O.return;
              }
              if (pn === null) throw Error(h(160));
              Bu(p, _, m), pn = null, ja = !1;
            } else Bu(p, _, m);
            p = m.alternate, p !== null && (p.return = null), m.return = null;
          }
        if (l.subtreeFlags & 13878)
          for (l = l.child; l !== null; )
            er(l, a), l = l.sibling;
      }
      function er(a, l) {
        var s = a.alternate, f = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            la(l, a), ia(a), f & 4 && (Xl(3, a, a.return), Ii(3, a), Xl(5, a, a.return));
            break;
          case 1:
            la(l, a), ia(a), f & 512 && (cn || s === null || ya(s, s.return)), f & 64 && ei && (a = a.updateQueue, a !== null && (f = a.callbacks, f !== null && (s = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = s === null ? f : s.concat(f))));
            break;
          case 26:
            if (qa) {
              var m = Al;
              la(l, a), ia(a), f & 512 && (cn || s === null || ya(s, s.return)), f & 4 && (f = s !== null ? s.memoizedState : null, l = a.memoizedState, s === null ? l === null ? a.stateNode === null ? a.stateNode = cy(
                m,
                a.type,
                a.memoizedProps,
                a
              ) : Gm(
                m,
                a.type,
                a.stateNode
              ) : a.stateNode = ad(
                m,
                l,
                a.memoizedProps
              ) : f !== l ? (f === null ? s.stateNode !== null && se(s.stateNode) : Dr(f), l === null ? Gm(
                m,
                a.type,
                a.stateNode
              ) : ad(
                m,
                l,
                a.memoizedProps
              )) : l === null && a.stateNode !== null && oh(
                a,
                a.memoizedProps,
                s.memoizedProps
              ));
              break;
            }
          case 27:
            if (un && f & 4 && a.alternate === null) {
              m = a.stateNode;
              var p = a.memoizedProps;
              try {
                Ur(m), ld(
                  a.type,
                  p,
                  m,
                  a
                );
              } catch (mt) {
                Pt(a, a.return, mt);
              }
            }
          case 5:
            if (la(l, a), ia(a), f & 512 && (cn || s === null || ya(s, s.return)), hn) {
              if (a.flags & 32) {
                l = a.stateNode;
                try {
                  wh(l);
                } catch (mt) {
                  Pt(a, a.return, mt);
                }
              }
              f & 4 && a.stateNode != null && (l = a.memoizedProps, oh(
                a,
                l,
                s !== null ? s.memoizedProps : l
              )), f & 1024 && (md = !0);
            }
            break;
          case 6:
            if (la(l, a), ia(a), f & 4 && hn) {
              if (a.stateNode === null)
                throw Error(h(162));
              f = a.memoizedProps, s = s !== null ? s.memoizedProps : f, l = a.stateNode;
              try {
                kp(l, s, f);
              } catch (mt) {
                Pt(a, a.return, mt);
              }
            }
            break;
          case 3:
            if (qa ? (va(), m = Al, Al = Nr(l.containerInfo), la(l, a), Al = m) : la(l, a), ia(a), f & 4) {
              if (hn && ca && s !== null && s.memoizedState.isDehydrated)
                try {
                  Rr(l.containerInfo);
                } catch (mt) {
                  Pt(a, a.return, mt);
                }
              if (Mi) {
                f = l.containerInfo, s = l.pendingChildren;
                try {
                  Fh(f, s);
                } catch (mt) {
                  Pt(a, a.return, mt);
                }
              }
            }
            md && (md = !1, fh(a));
            break;
          case 4:
            qa ? (s = Al, Al = Nr(
              a.stateNode.containerInfo
            ), la(l, a), ia(a), Al = s) : (la(l, a), ia(a)), f & 4 && Mi && Io(
              a.stateNode,
              a,
              a.stateNode.pendingChildren
            );
            break;
          case 12:
            la(l, a), ia(a);
            break;
          case 13:
            la(l, a), ia(a), a.child.flags & 8192 && a.memoizedState !== null != (s !== null && s.memoizedState !== null) && (Sd = el()), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, tr(a, f)));
            break;
          case 22:
            f & 512 && (cn || s === null || ya(s, s.return)), m = a.memoizedState !== null;
            var _ = s !== null && s.memoizedState !== null, O = ei, Q = cn;
            if (ei = O || m, cn = Q || _, la(l, a), cn = Q, ei = O, ia(a), l = a.stateNode, l._current = a, l._visibility &= -3, l._visibility |= l._pendingVisibility & 2, f & 8192 && (l._visibility = m ? l._visibility & -2 : l._visibility | 1, m && (l = ei || cn, s === null || _ || l || Ia(a)), hn && (a.memoizedProps === null || a.memoizedProps.mode !== "manual"))) {
              t: if (s = null, hn)
                for (l = a; ; ) {
                  if (l.tag === 5 || qa && l.tag === 26 || un && l.tag === 27) {
                    if (s === null) {
                      _ = s = l;
                      try {
                        p = _.stateNode, m ? Wh(p) : ay(
                          _.stateNode,
                          _.memoizedProps
                        );
                      } catch (mt) {
                        Pt(_, _.return, mt);
                      }
                    }
                  } else if (l.tag === 6) {
                    if (s === null) {
                      _ = l;
                      try {
                        var tt = _.stateNode;
                        m ? ny(tt) : Rm(tt, _.memoizedProps);
                      } catch (mt) {
                        Pt(_, _.return, mt);
                      }
                    }
                  } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === a) && l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue;
                  }
                  if (l === a) break t;
                  for (; l.sibling === null; ) {
                    if (l.return === null || l.return === a)
                      break t;
                    s === l && (s = null), l = l.return;
                  }
                  s === l && (s = null), l.sibling.return = l.return, l = l.sibling;
                }
            }
            f & 4 && (f = a.updateQueue, f !== null && (s = f.retryQueue, s !== null && (f.retryQueue = null, tr(a, s))));
            break;
          case 19:
            la(l, a), ia(a), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, tr(a, f)));
            break;
          case 21:
            break;
          default:
            la(l, a), ia(a);
        }
      }
      function ia(a) {
        var l = a.flags;
        if (l & 2) {
          try {
            if (hn && (!un || a.tag !== 27)) {
              t: {
                for (var s = a.return; s !== null; ) {
                  if (Wo(s)) {
                    var f = s;
                    break t;
                  }
                  s = s.return;
                }
                throw Error(h(160));
              }
              switch (f.tag) {
                case 27:
                  if (un) {
                    var m = f.stateNode, p = Fo(a);
                    Zl(
                      a,
                      p,
                      m
                    );
                    break;
                  }
                case 5:
                  var _ = f.stateNode;
                  f.flags & 32 && (wh(_), f.flags &= -33);
                  var O = Fo(a);
                  Zl(a, O, _);
                  break;
                case 3:
                case 4:
                  var Q = f.stateNode.containerInfo, tt = Fo(a);
                  Po(
                    a,
                    tt,
                    Q
                  );
                  break;
                default:
                  throw Error(h(161));
              }
            }
          } catch (mt) {
            Pt(a, a.return, mt);
          }
          a.flags &= -3;
        }
        l & 4096 && (a.flags &= -4097);
      }
      function fh(a) {
        if (a.subtreeFlags & 1024)
          for (a = a.child; a !== null; ) {
            var l = a;
            fh(l), l.tag === 5 && l.flags & 1024 && xm(l.stateNode), a = a.sibling;
          }
      }
      function Kl(a, l) {
        if (l.subtreeFlags & 8772)
          for (l = l.child; l !== null; )
            rm(a, l.alternate, l), l = l.sibling;
      }
      function Ia(a) {
        for (a = a.child; a !== null; ) {
          var l = a;
          switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Xl(4, l, l.return), Ia(l);
              break;
            case 1:
              ya(l, l.return);
              var s = l.stateNode;
              typeof s.componentWillUnmount == "function" && sh(
                l,
                l.return,
                s
              ), Ia(l);
              break;
            case 26:
            case 27:
            case 5:
              ya(l, l.return), Ia(l);
              break;
            case 22:
              ya(l, l.return), l.memoizedState === null && Ia(l);
              break;
            default:
              Ia(l);
          }
          a = a.sibling;
        }
      }
      function Sl(a, l, s) {
        for (s = s && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
          var f = l.alternate, m = a, p = l, _ = p.flags;
          switch (p.tag) {
            case 0:
            case 11:
            case 15:
              Sl(
                m,
                p,
                s
              ), Ii(4, p);
              break;
            case 1:
              if (Sl(
                m,
                p,
                s
              ), f = p, m = f.stateNode, typeof m.componentDidMount == "function")
                try {
                  m.componentDidMount();
                } catch (tt) {
                  Pt(f, f.return, tt);
                }
              if (f = p, m = f.updateQueue, m !== null) {
                var O = f.stateNode;
                try {
                  var Q = m.shared.hiddenCallbacks;
                  if (Q !== null)
                    for (m.shared.hiddenCallbacks = null, m = 0; m < Q.length; m++)
                      na(Q[m], O);
                } catch (tt) {
                  Pt(f, f.return, tt);
                }
              }
              s && _ & 64 && uh(p), vi(p, p.return);
              break;
            case 26:
            case 27:
            case 5:
              Sl(
                m,
                p,
                s
              ), s && f === null && _ & 4 && ch(p), vi(p, p.return);
              break;
            case 12:
              Sl(
                m,
                p,
                s
              );
              break;
            case 13:
              Sl(
                m,
                p,
                s
              ), s && _ & 4 && $o(m, p);
              break;
            case 22:
              p.memoizedState === null && Sl(
                m,
                p,
                s
              ), vi(p, p.return);
              break;
            default:
              Sl(
                m,
                p,
                s
              );
          }
          l = l.sibling;
        }
      }
      function nr(a, l) {
        var s = null;
        a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== s && (a != null && a.refCount++, s != null && _s(s));
      }
      function Cc(a, l) {
        a = null, l.alternate !== null && (a = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== a && (l.refCount++, a != null && _s(a));
      }
      function Jl(a, l, s, f) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; )
            ar(
              a,
              l,
              s,
              f
            ), l = l.sibling;
      }
      function ar(a, l, s, f) {
        var m = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Jl(
              a,
              l,
              s,
              f
            ), m & 2048 && Ii(9, l);
            break;
          case 3:
            Jl(
              a,
              l,
              s,
              f
            ), m & 2048 && (a = null, l.alternate !== null && (a = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== a && (l.refCount++, a != null && _s(a)));
            break;
          case 12:
            if (m & 2048) {
              Jl(
                a,
                l,
                s,
                f
              ), a = l.stateNode;
              try {
                var p = l.memoizedProps, _ = p.id, O = p.onPostCommit;
                typeof O == "function" && O(
                  _,
                  l.alternate === null ? "mount" : "update",
                  a.passiveEffectDuration,
                  -0
                );
              } catch (Q) {
                Pt(l, l.return, Q);
              }
            } else
              Jl(
                a,
                l,
                s,
                f
              );
            break;
          case 23:
            break;
          case 22:
            p = l.stateNode, l.memoizedState !== null ? p._visibility & 4 ? Jl(
              a,
              l,
              s,
              f
            ) : rn(
              a,
              l
            ) : p._visibility & 4 ? Jl(
              a,
              l,
              s,
              f
            ) : (p._visibility |= 4, As(
              a,
              l,
              s,
              f,
              (l.subtreeFlags & 10256) !== 0
            )), m & 2048 && nr(
              l.alternate,
              l
            );
            break;
          case 24:
            Jl(
              a,
              l,
              s,
              f
            ), m & 2048 && Cc(l.alternate, l);
            break;
          default:
            Jl(
              a,
              l,
              s,
              f
            );
        }
      }
      function As(a, l, s, f, m) {
        for (m = m && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
          var p = a, _ = l, O = s, Q = f, tt = _.flags;
          switch (_.tag) {
            case 0:
            case 11:
            case 15:
              As(
                p,
                _,
                O,
                Q,
                m
              ), Ii(8, _);
              break;
            case 23:
              break;
            case 22:
              var mt = _.stateNode;
              _.memoizedState !== null ? mt._visibility & 4 ? As(
                p,
                _,
                O,
                Q,
                m
              ) : rn(
                p,
                _
              ) : (mt._visibility |= 4, As(
                p,
                _,
                O,
                Q,
                m
              )), m && tt & 2048 && nr(
                _.alternate,
                _
              );
              break;
            case 24:
              As(
                p,
                _,
                O,
                Q,
                m
              ), m && tt & 2048 && Cc(_.alternate, _);
              break;
            default:
              As(
                p,
                _,
                O,
                Q,
                m
              );
          }
          l = l.sibling;
        }
      }
      function rn(a, l) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; ) {
            var s = a, f = l, m = f.flags;
            switch (f.tag) {
              case 22:
                rn(s, f), m & 2048 && nr(
                  f.alternate,
                  f
                );
                break;
              case 24:
                rn(s, f), m & 2048 && Cc(
                  f.alternate,
                  f
                );
                break;
              default:
                rn(s, f);
            }
            l = l.sibling;
          }
      }
      function $i(a) {
        if (a.subtreeFlags & Pu)
          for (a = a.child; a !== null; )
            hh(a), a = a.sibling;
      }
      function hh(a) {
        switch (a.tag) {
          case 26:
            $i(a), a.flags & Pu && (a.memoizedState !== null ? Xu(
              Al,
              a.memoizedState,
              a.memoizedProps
            ) : Zh(a.type, a.memoizedProps));
            break;
          case 5:
            $i(a), a.flags & Pu && Zh(a.type, a.memoizedProps);
            break;
          case 3:
          case 4:
            if (qa) {
              var l = Al;
              Al = Nr(
                a.stateNode.containerInfo
              ), $i(a), Al = l;
            } else $i(a);
            break;
          case 22:
            a.memoizedState === null && (l = a.alternate, l !== null && l.memoizedState !== null ? (l = Pu, Pu = 16777216, $i(a), Pu = l) : $i(a));
            break;
          default:
            $i(a);
        }
      }
      function dh(a) {
        var l = a.alternate;
        if (l !== null && (a = l.child, a !== null)) {
          l.child = null;
          do
            l = a.sibling, a.sibling = null, a = l;
          while (a !== null);
        }
      }
      function Rs(a) {
        var l = a.deletions;
        if (a.flags & 16) {
          if (l !== null)
            for (var s = 0; s < l.length; s++) {
              var f = l[s];
              Dn = f, lr(
                f,
                a
              );
            }
          dh(a);
        }
        if (a.subtreeFlags & 10256)
          for (a = a.child; a !== null; )
            mh(a), a = a.sibling;
      }
      function mh(a) {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Rs(a), a.flags & 2048 && Xl(9, a, a.return);
            break;
          case 3:
            Rs(a);
            break;
          case 12:
            Rs(a);
            break;
          case 22:
            var l = a.stateNode;
            a.memoizedState !== null && l._visibility & 4 && (a.return === null || a.return.tag !== 13) ? (l._visibility &= -5, ki(a)) : Rs(a);
            break;
          default:
            Rs(a);
        }
      }
      function ki(a) {
        var l = a.deletions;
        if (a.flags & 16) {
          if (l !== null)
            for (var s = 0; s < l.length; s++) {
              var f = l[s];
              Dn = f, lr(
                f,
                a
              );
            }
          dh(a);
        }
        for (a = a.child; a !== null; ) {
          switch (l = a, l.tag) {
            case 0:
            case 11:
            case 15:
              Xl(8, l, l.return), ki(l);
              break;
            case 22:
              s = l.stateNode, s._visibility & 4 && (s._visibility &= -5, ki(l));
              break;
            default:
              ki(l);
          }
          a = a.sibling;
        }
      }
      function lr(a, l) {
        for (; Dn !== null; ) {
          var s = Dn;
          switch (s.tag) {
            case 0:
            case 11:
            case 15:
              Xl(8, s, l);
              break;
            case 23:
            case 22:
              if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
                var f = s.memoizedState.cachePool.pool;
                f != null && f.refCount++;
              }
              break;
            case 24:
              _s(s.memoizedState.cache);
          }
          if (f = s.child, f !== null) f.return = s, Dn = f;
          else
            t: for (s = a; Dn !== null; ) {
              f = Dn;
              var m = f.sibling, p = f.return;
              if (fm(f), f === s) {
                Dn = null;
                break t;
              }
              if (m !== null) {
                m.return = p, Dn = m;
                break t;
              }
              Dn = p;
            }
        }
      }
      function ir(a) {
        var l = Gh(a);
        if (l != null) {
          if (typeof l.memoizedProps["data-testname"] != "string")
            throw Error(h(364));
          return l;
        }
        if (a = Kh(a), a === null) throw Error(h(362));
        return a.stateNode.current;
      }
      function ur(a, l) {
        var s = a.tag;
        switch (l.$$typeof) {
          case Jr:
            if (a.type === l.value) return !0;
            break;
          case Lr:
            t: {
              for (l = l.value, a = [a, 0], s = 0; s < a.length; ) {
                var f = a[s++], m = f.tag, p = a[s++], _ = l[p];
                if (m !== 5 && m !== 26 && m !== 27 || !Bs(f)) {
                  for (; _ != null && ur(f, _); )
                    p++, _ = l[p];
                  if (p === l.length) {
                    l = !0;
                    break t;
                  } else
                    for (f = f.child; f !== null; )
                      a.push(f, p), f = f.sibling;
                }
              }
              l = !1;
            }
            return l;
          case wr:
            if ((s === 5 || s === 26 || s === 27) && zm(a.stateNode, l.value))
              return !0;
            break;
          case Ic:
            if ((s === 5 || s === 6 || s === 26 || s === 27) && (a = Tm(a), a !== null && 0 <= a.indexOf(l.value)))
              return !0;
            break;
          case Pc:
            if ((s === 5 || s === 26 || s === 27) && (a = a.memoizedProps["data-testname"], typeof a == "string" && a.toLowerCase() === l.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(h(365));
        }
        return !1;
      }
      function sr(a) {
        switch (a.$$typeof) {
          case Jr:
            return "<" + (S(a.value) || "Unknown") + ">";
          case Lr:
            return ":has(" + (sr(a) || "") + ")";
          case wr:
            return '[role="' + a.value + '"]';
          case Ic:
            return '"' + a.value + '"';
          case Pc:
            return '[data-testname="' + a.value + '"]';
          default:
            throw Error(h(365));
        }
      }
      function cr(a, l) {
        var s = [];
        a = [a, 0];
        for (var f = 0; f < a.length; ) {
          var m = a[f++], p = m.tag, _ = a[f++], O = l[_];
          if (p !== 5 && p !== 26 && p !== 27 || !Bs(m)) {
            for (; O != null && ur(m, O); )
              _++, O = l[_];
            if (_ === l.length) s.push(m);
            else
              for (m = m.child; m !== null; )
                a.push(m, _), m = m.sibling;
          }
        }
        return s;
      }
      function Nc(a, l) {
        if (!au) throw Error(h(363));
        a = ir(a), a = cr(a, l), l = [], a = Array.from(a);
        for (var s = 0; s < a.length; ) {
          var f = a[s++], m = f.tag;
          if (m === 5 || m === 26 || m === 27)
            Bs(f) || l.push(f.stateNode);
          else
            for (f = f.child; f !== null; )
              a.push(f), f = f.sibling;
        }
        return l;
      }
      function ua() {
        if (Oe & 2 && me !== 0)
          return me & -me;
        if (Zt.T !== null) {
          var a = js;
          return a !== 0 ? a : Xt();
        }
        return Qh();
      }
      function ph() {
        Ga === 0 && (Ga = !(me & 536870912) || xe ? Rt() : 536870912);
        var a = In.current;
        return a !== null && (a.flags |= 32), Ga;
      }
      function Yn(a, l, s) {
        (a === Xe && He === 2 || a.cancelPendingCommit !== null) && (tu(a, 0), gl(
          a,
          me,
          Ga,
          !1
        )), jt(a, s), (!(Oe & 2) || a !== Xe) && (a === Xe && (!(Oe & 2) && ($u |= s), en === 4 && gl(
          a,
          me,
          Ga,
          !1
        )), En(a));
      }
      function or(a, l, s) {
        if (Oe & 6) throw Error(h(327));
        var f = !s && (l & 60) === 0 && (l & a.expiredLanes) === 0 || Tt(a, l), m = f ? Hc(a, l) : Oc(a, l, !0), p = f;
        do {
          if (m === 0) {
            Iu && !f && gl(a, l, 0, !1);
            break;
          } else if (m === 6)
            gl(
              a,
              l,
              0,
              !ni
            );
          else {
            if (s = a.current.alternate, p && !hm(s)) {
              m = Oc(a, l, !1), p = !1;
              continue;
            }
            if (m === 2) {
              if (p = l, a.errorRecoveryDisabledLanes & p)
                var _ = 0;
              else
                _ = a.pendingLanes & -536870913, _ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0;
              if (_ !== 0) {
                l = _;
                t: {
                  var O = a;
                  m = yn;
                  var Q = ca && O.current.memoizedState.isDehydrated;
                  if (Q && (tu(O, _).flags |= 256), _ = Oc(
                    O,
                    _,
                    !1
                  ), _ !== 2) {
                    if (pd && !Q) {
                      O.errorRecoveryDisabledLanes |= p, $u |= p, m = 4;
                      break t;
                    }
                    p = Rl, Rl = m, p !== null && Dc(p);
                  }
                  m = _;
                }
                if (p = !1, m !== 2) continue;
              }
            }
            if (m === 1) {
              tu(a, 0), gl(a, l, 0, !0);
              break;
            }
            t: {
              switch (f = a, m) {
                case 0:
                case 1:
                  throw Error(h(345));
                case 4:
                  if ((l & 4194176) === l) {
                    gl(
                      f,
                      l,
                      Ga,
                      !ni
                    );
                    break t;
                  }
                  break;
                case 2:
                  Rl = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(h(329));
              }
              if (f.finishedWork = s, f.finishedLanes = l, (l & 62914560) === l && (p = Sd + 300 - el(), 10 < p)) {
                if (gl(
                  f,
                  l,
                  Ga,
                  !ni
                ), ut(f, 0) !== 0) break t;
                f.timeoutHandle = Vc(
                  yh.bind(
                    null,
                    f,
                    s,
                    Rl,
                    kc,
                    vd,
                    l,
                    Ga,
                    $u,
                    Ls,
                    ni,
                    2,
                    -0,
                    0
                  ),
                  p
                );
                break t;
              }
              yh(
                f,
                s,
                Rl,
                kc,
                vd,
                l,
                Ga,
                $u,
                Ls,
                ni,
                0,
                -0,
                0
              );
            }
          }
          break;
        } while (!0);
        En(a);
      }
      function Dc(a) {
        Rl === null ? Rl = a : Rl.push.apply(
          Rl,
          a
        );
      }
      function yh(a, l, s, f, m, p, _, O, Q, tt, mt, gt, St) {
        var qt = l.subtreeFlags;
        if ((qt & 8192 || (qt & 16785408) === 16785408) && (Ba(), hh(l), l = tn(), l !== null)) {
          a.cancelPendingCommit = l(
            nu.bind(
              null,
              a,
              s,
              f,
              m,
              _,
              O,
              Q,
              1,
              gt,
              St
            )
          ), gl(a, p, _, !tt);
          return;
        }
        nu(
          a,
          s,
          f,
          m,
          _,
          O,
          Q,
          mt,
          gt,
          St
        );
      }
      function hm(a) {
        for (var l = a; ; ) {
          var s = l.tag;
          if ((s === 0 || s === 11 || s === 15) && l.flags & 16384 && (s = l.updateQueue, s !== null && (s = s.stores, s !== null)))
            for (var f = 0; f < s.length; f++) {
              var m = s[f], p = m.getSnapshot;
              m = m.value;
              try {
                if (!ra(p(), m)) return !1;
              } catch {
                return !1;
              }
            }
          if (s = l.child, l.subtreeFlags & 16384 && s !== null)
            s.return = l, l = s;
          else {
            if (l === a) break;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === a) return !0;
              l = l.return;
            }
            l.sibling.return = l.return, l = l.sibling;
          }
        }
        return !0;
      }
      function gl(a, l, s, f) {
        l &= ~yd, l &= ~$u, a.suspendedLanes |= l, a.pingedLanes &= ~l, f && (a.warmLanes |= l), f = a.expirationTimes;
        for (var m = l; 0 < m; ) {
          var p = 31 - oa(m), _ = 1 << p;
          f[p] = -1, m &= ~_;
        }
        s !== 0 && it(a, s, l);
      }
      function vh() {
        return Oe & 6 ? !0 : (D(0), !1);
      }
      function El() {
        if (Qt !== null) {
          if (He === 0)
            var a = Qt.return;
          else
            a = Qt, bl = hu = null, on(a), Qs = null, wc = 0, a = Qt;
          for (; a !== null; )
            wo(a.alternate, a), a = a.return;
          Qt = null;
        }
      }
      function tu(a, l) {
        a.finishedWork = null, a.finishedLanes = 0;
        var s = a.timeoutHandle;
        s !== zr && (a.timeoutHandle = zr, ju(s)), s = a.cancelPendingCommit, s !== null && (a.cancelPendingCommit = null, s()), El(), Xe = a, Qt = s = $a(a.current, null), me = l, He = 0, ga = null, ni = !1, Iu = Tt(a, l), pd = !1, Ls = Ga = yd = $u = du = en = 0, Rl = yn = null, vd = !1, l & 8 && (l |= l & 32);
        var f = a.entangledLanes;
        if (f !== 0)
          for (a = a.entanglements, f &= l; 0 < f; ) {
            var m = 31 - oa(f), p = 1 << m;
            l |= a[m], f &= ~p;
          }
        return ai = l, Ge(), s;
      }
      function dm(a, l) {
        ne = null, Zt.H = ti, l === $l ? (l = dl(), He = 3) : l === Di ? (l = dl(), He = 4) : He = l === hd ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ga = l, Qt === null && (en = 1, rt(
          a,
          st(l, a.current)
        ));
      }
      function rr() {
        var a = In.current;
        return a === null ? !0 : (me & 4194176) === me ? kl === null : (me & 62914560) === me || me & 536870912 ? a === kl : !1;
      }
      function Uc() {
        var a = Zt.H;
        return Zt.H = ti, a === null ? ti : a;
      }
      function Si() {
        var a = Zt.A;
        return Zt.A = my, a;
      }
      function xl() {
        en = 4, ni || (me & 4194176) !== me && In.current !== null || (Iu = !0), !(du & 134217727) && !($u & 134217727) || Xe === null || gl(
          Xe,
          me,
          Ga,
          !1
        );
      }
      function Oc(a, l, s) {
        var f = Oe;
        Oe |= 2;
        var m = Uc(), p = Si();
        (Xe !== a || me !== l) && (kc = null, tu(a, l)), l = !1;
        var _ = en;
        t: do
          try {
            if (He !== 0 && Qt !== null) {
              var O = Qt, Q = ga;
              switch (He) {
                case 8:
                  El(), _ = 6;
                  break t;
                case 3:
                case 2:
                case 6:
                  In.current === null && (l = !0);
                  var tt = He;
                  if (He = 0, ga = null, gi(a, O, Q, tt), s && Iu) {
                    _ = 0;
                    break t;
                  }
                  break;
                default:
                  tt = He, He = 0, ga = null, gi(a, O, Q, tt);
              }
            }
            Sh(), _ = en;
            break;
          } catch (mt) {
            dm(a, mt);
          }
        while (!0);
        return l && a.shellSuspendCounter++, bl = hu = null, Oe = f, Zt.H = m, Zt.A = p, Qt === null && (Xe = null, me = 0, Ge()), _;
      }
      function Sh() {
        for (; Qt !== null; ) eu(Qt);
      }
      function Hc(a, l) {
        var s = Oe;
        Oe |= 2;
        var f = Uc(), m = Si();
        Xe !== a || me !== l ? (kc = null, $c = el() + 500, tu(a, l)) : Iu = Tt(
          a,
          l
        );
        t: do
          try {
            if (He !== 0 && Qt !== null) {
              l = Qt;
              var p = ga;
              e: switch (He) {
                case 1:
                  He = 0, ga = null, gi(a, l, p, 1);
                  break;
                case 2:
                  if (Mu(p)) {
                    He = 0, ga = null, Le(l);
                    break;
                  }
                  l = function() {
                    He === 2 && Xe === a && (He = 7), En(a);
                  }, p.then(l, l);
                  break t;
                case 3:
                  He = 7;
                  break t;
                case 4:
                  He = 5;
                  break t;
                case 7:
                  Mu(p) ? (He = 0, ga = null, Le(l)) : (He = 0, ga = null, gi(a, l, p, 7));
                  break;
                case 5:
                  var _ = null;
                  switch (Qt.tag) {
                    case 26:
                      _ = Qt.memoizedState;
                    case 5:
                    case 27:
                      var O = Qt, Q = O.type, tt = O.pendingProps;
                      if (_ ? Qm(_) : Xh(Q, tt)) {
                        He = 0, ga = null;
                        var mt = O.sibling;
                        if (mt !== null) Qt = mt;
                        else {
                          var gt = O.return;
                          gt !== null ? (Qt = gt, Bc(gt)) : Qt = null;
                        }
                        break e;
                      }
                  }
                  He = 0, ga = null, gi(a, l, p, 5);
                  break;
                case 6:
                  He = 0, ga = null, gi(a, l, p, 6);
                  break;
                case 8:
                  El(), en = 6;
                  break t;
                default:
                  throw Error(h(462));
              }
            }
            fr();
            break;
          } catch (St) {
            dm(a, St);
          }
        while (!0);
        return bl = hu = null, Zt.H = f, Zt.A = m, Oe = s, Qt !== null ? 0 : (Xe = null, me = 0, Ge(), en);
      }
      function fr() {
        for (; Qt !== null && !F(); )
          eu(Qt);
      }
      function eu(a) {
        var l = Vo(
          a.alternate,
          a,
          ai
        );
        a.memoizedProps = a.pendingProps, l === null ? Bc(a) : Qt = l;
      }
      function Le(a) {
        var l = a, s = l.alternate;
        switch (l.tag) {
          case 15:
          case 0:
            l = zs(
              s,
              l,
              l.pendingProps,
              l.type,
              void 0,
              me
            );
            break;
          case 11:
            l = zs(
              s,
              l,
              l.pendingProps,
              l.type.render,
              l.ref,
              me
            );
            break;
          case 5:
            on(l);
          default:
            wo(s, l), l = Qt = we(l, ai), l = Vo(s, l, ai);
        }
        a.memoizedProps = a.pendingProps, l === null ? Bc(a) : Qt = l;
      }
      function gi(a, l, s, f) {
        bl = hu = null, on(l), Qs = null, wc = 0;
        var m = l.return;
        try {
          if (nh(
            a,
            m,
            l,
            s,
            me
          )) {
            en = 1, rt(
              a,
              st(s, a.current)
            ), Qt = null;
            return;
          }
        } catch (p) {
          if (m !== null) throw Qt = m, p;
          en = 1, rt(
            a,
            st(s, a.current)
          ), Qt = null;
          return;
        }
        l.flags & 32768 ? (xe || f === 1 ? a = !0 : Iu || me & 536870912 ? a = !1 : (ni = a = !0, (f === 2 || f === 3 || f === 6) && (f = In.current, f !== null && f.tag === 13 && (f.flags |= 16384))), hr(l, a)) : Bc(l);
      }
      function Bc(a) {
        var l = a;
        do {
          if (l.flags & 32768) {
            hr(
              l,
              ni
            );
            return;
          }
          a = l.return;
          var s = ih(
            l.alternate,
            l,
            ai
          );
          if (s !== null) {
            Qt = s;
            return;
          }
          if (l = l.sibling, l !== null) {
            Qt = l;
            return;
          }
          Qt = l = a;
        } while (l !== null);
        en === 0 && (en = 5);
      }
      function hr(a, l) {
        do {
          var s = Lo(a.alternate, a);
          if (s !== null) {
            s.flags &= 32767, Qt = s;
            return;
          }
          if (s = a.return, s !== null && (s.flags |= 32768, s.subtreeFlags = 0, s.deletions = null), !l && (a = a.sibling, a !== null)) {
            Qt = a;
            return;
          }
          Qt = a = s;
        } while (a !== null);
        en = 6, Qt = null;
      }
      function nu(a, l, s, f, m, p, _, O, Q, tt) {
        var mt = Zt.T, gt = _i();
        try {
          Fn(2), Zt.T = null, qc(
            a,
            l,
            s,
            f,
            gt,
            m,
            p,
            _,
            O,
            Q,
            tt
          );
        } finally {
          Zt.T = mt, Fn(gt);
        }
      }
      function qc(a, l, s, f, m, p, _, O) {
        do
          Ll();
        while (ha !== null);
        if (Oe & 6) throw Error(h(327));
        var Q = a.finishedWork;
        if (f = a.finishedLanes, Q === null) return null;
        if (a.finishedWork = null, a.finishedLanes = 0, Q === a.current) throw Error(h(177));
        a.callbackNode = null, a.callbackPriority = 0, a.cancelPendingCommit = null;
        var tt = Q.lanes | Q.childLanes;
        if (tt |= Il, ye(
          a,
          f,
          tt,
          p,
          _,
          O
        ), a === Xe && (Qt = Xe = null, me = 0), !(Q.subtreeFlags & 10256) && !(Q.flags & 10256) || ws || (ws = !0, Zn = tt, gd = s, zh(qr, function() {
          return Ll(), null;
        })), s = (Q.flags & 15990) !== 0, Q.subtreeFlags & 15990 || s ? (s = Zt.T, Zt.T = null, p = _i(), Fn(2), _ = Oe, Oe |= 4, rh(a, Q), er(Q, a), qh(a.containerInfo), a.current = Q, rm(a, Q.alternate, Q), Zc(), Oe = _, Fn(p), Zt.T = s) : a.current = Q, ws ? (ws = !1, ha = a, il = f) : dr(a, tt), tt = a.pendingLanes, tt === 0 && (li = null), V(Q.stateNode), En(a), l !== null)
          for (m = a.onRecoverableError, Q = 0; Q < l.length; Q++)
            tt = l[Q], m(tt.value, {
              componentStack: tt.stack
            });
        return il & 3 && Ll(), tt = a.pendingLanes, f & 4194218 && tt & 42 ? a === Ws ? to++ : (to = 0, Ws = a) : to = 0, D(0), null;
      }
      function dr(a, l) {
        (a.pooledCacheLanes &= l) === 0 && (l = a.pooledCache, l != null && (a.pooledCache = null, _s(l)));
      }
      function Ll() {
        if (ha !== null) {
          var a = ha, l = Zn;
          Zn = 0;
          var s = ie(il), f = 32 > s ? 32 : s;
          s = Zt.T;
          var m = _i();
          try {
            if (Fn(f), Zt.T = null, ha === null)
              var p = !1;
            else {
              f = gd, gd = null;
              var _ = ha, O = il;
              if (ha = null, il = 0, Oe & 6)
                throw Error(h(331));
              var Q = Oe;
              if (Oe |= 4, mh(_.current), ar(
                _,
                _.current,
                O,
                f
              ), Oe = Q, D(0, !1), Sa && typeof Sa.onPostCommitFiberRoot == "function")
                try {
                  Sa.onPostCommitFiberRoot(Ku, _);
                } catch {
                }
              p = !0;
            }
            return p;
          } finally {
            Fn(m), Zt.T = s, dr(a, l);
          }
        }
        return !1;
      }
      function gh(a, l, s) {
        l = st(s, l), l = Ts(a.stateNode, l, 2), a = Mn(a, l, 2), a !== null && (jt(a, 2), En(a));
      }
      function Pt(a, l, s) {
        if (a.tag === 3)
          gh(a, a, s);
        else
          for (; l !== null; ) {
            if (l.tag === 3) {
              gh(
                l,
                a,
                s
              );
              break;
            } else if (l.tag === 1) {
              var f = l.stateNode;
              if (typeof l.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (li === null || !li.has(f))) {
                a = st(s, a), s = ln(2), f = Mn(l, s, 2), f !== null && (Do(
                  s,
                  f,
                  l,
                  a
                ), jt(f, 2), En(f));
                break;
              }
            }
            l = l.return;
          }
      }
      function mr(a, l, s) {
        var f = a.pingCache;
        if (f === null) {
          f = a.pingCache = new Im();
          var m = /* @__PURE__ */ new Set();
          f.set(l, m);
        } else
          m = f.get(l), m === void 0 && (m = /* @__PURE__ */ new Set(), f.set(l, m));
        m.has(s) || (pd = !0, m.add(s), a = Eh.bind(null, a, l, s), l.then(a, a));
      }
      function Eh(a, l, s) {
        var f = a.pingCache;
        f !== null && f.delete(l), a.pingedLanes |= a.suspendedLanes & s, a.warmLanes &= ~s, Xe === a && (me & s) === s && (en === 4 || en === 3 && (me & 62914560) === me && 300 > el() - Sd ? !(Oe & 2) && tu(a, 0) : yd |= s, Ls === me && (Ls = 0)), En(a);
      }
      function xh(a, l) {
        l === 0 && (l = Vt()), a = Ce(a, l), a !== null && (jt(a, l), En(a));
      }
      function mm(a) {
        var l = a.memoizedState, s = 0;
        l !== null && (s = l.retryLane), xh(a, s);
      }
      function Th(a, l) {
        var s = 0;
        switch (a.tag) {
          case 13:
            var f = a.stateNode, m = a.memoizedState;
            m !== null && (s = m.retryLane);
            break;
          case 19:
            f = a.stateNode;
            break;
          case 22:
            f = a.stateNode._retryCache;
            break;
          default:
            throw Error(h(314));
        }
        f !== null && f.delete(l), xh(a, s);
      }
      function zh(a, l) {
        return Xc(a, l);
      }
      function pm(a, l, s, f) {
        this.tag = a, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Cs(a) {
        return a = a.prototype, !(!a || !a.isReactComponent);
      }
      function $a(a, l) {
        var s = a.alternate;
        return s === null ? (s = u(
          a.tag,
          l,
          a.key,
          a.mode
        ), s.elementType = a.elementType, s.type = a.type, s.stateNode = a.stateNode, s.alternate = a, a.alternate = s) : (s.pendingProps = l, s.type = a.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = a.flags & 31457280, s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, l = a.dependencies, s.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, s.sibling = a.sibling, s.index = a.index, s.ref = a.ref, s.refCleanup = a.refCleanup, s;
      }
      function we(a, l) {
        a.flags &= 31457282;
        var s = a.alternate;
        return s === null ? (a.childLanes = 0, a.lanes = l, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = s.childLanes, a.lanes = s.lanes, a.child = s.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = s.memoizedProps, a.memoizedState = s.memoizedState, a.updateQueue = s.updateQueue, a.type = s.type, l = s.dependencies, a.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }), a;
      }
      function pr(a, l, s, f, m, p) {
        var _ = 0;
        if (f = a, typeof a == "function") Cs(a) && (_ = 1);
        else if (typeof a == "string")
          _ = qa && un ? ed(a, s, Qn.current) ? 26 : Or(a) ? 27 : 5 : qa ? ed(
            a,
            s,
            Qn.current
          ) ? 26 : 5 : un && Or(a) ? 27 : 5;
        else
          t: switch (a) {
            case Vu:
              return qu(
                s.children,
                m,
                p,
                l
              );
            case Ch:
              _ = 8, m |= 24;
              break;
            case Sr:
              return a = u(12, s, l, m | 2), a.elementType = Sr, a.lanes = p, a;
            case Er:
              return a = u(13, s, l, m), a.elementType = Er, a.lanes = p, a;
            case Uh:
              return a = u(19, s, l, m), a.elementType = Uh, a.lanes = p, a;
            case tl:
              return Mh(s, m, p, l);
            default:
              if (typeof a == "object" && a !== null)
                switch (a.$$typeof) {
                  case Nh:
                  case Tl:
                    _ = 10;
                    break t;
                  case gr:
                    _ = 9;
                    break t;
                  case Dh:
                    _ = 11;
                    break t;
                  case xr:
                    _ = 14;
                    break t;
                  case xi:
                    _ = 16, f = null;
                    break t;
                }
              _ = 29, s = Error(
                h(
                  130,
                  a === null ? "null" : typeof a,
                  ""
                )
              ), f = null;
          }
        return l = u(_, s, l, m), l.elementType = a, l.type = f, l.lanes = p, l;
      }
      function qu(a, l, s, f) {
        return a = u(7, a, f, l), a.lanes = s, a;
      }
      function Mh(a, l, s, f) {
        a = u(22, a, f, l), a.elementType = tl, a.lanes = s;
        var m = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var p = m._current;
            if (p === null) throw Error(h(456));
            if (!(m._pendingVisibility & 2)) {
              var _ = Ce(p, 2);
              _ !== null && (m._pendingVisibility |= 2, Yn(_, p, 2));
            }
          },
          attach: function() {
            var p = m._current;
            if (p === null) throw Error(h(456));
            if (m._pendingVisibility & 2) {
              var _ = Ce(p, 2);
              _ !== null && (m._pendingVisibility &= -3, Yn(_, p, 2));
            }
          }
        };
        return a.stateNode = m, a;
      }
      function ka(a, l, s) {
        return a = u(6, a, null, l), a.lanes = s, a;
      }
      function yr(a, l, s) {
        return l = u(
          4,
          a.children !== null ? a.children : [],
          a.key,
          l
        ), l.lanes = s, l.stateNode = {
          containerInfo: a.containerInfo,
          pendingChildren: null,
          implementation: a.implementation
        }, l;
      }
      function _h(a, l, s, f, m, p, _, O) {
        this.tag = 1, this.containerInfo = a, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = zr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gt(0), this.hiddenUpdates = Gt(null), this.identifierPrefix = f, this.onUncaughtError = m, this.onCaughtError = p, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Ns(a, l, s, f, m, p, _, O, Q, tt, mt, gt) {
        return a = new _h(
          a,
          l,
          s,
          _,
          O,
          Q,
          tt,
          gt
        ), l = 1, p === !0 && (l |= 24), p = u(3, null, null, l), a.current = p, p.stateNode = a, l = Zo(), l.refCount++, a.pooledCache = l, l.refCount++, p.memoizedState = {
          element: f,
          isDehydrated: s,
          cache: l
        }, ke(p), a;
      }
      function Yu(a) {
        return a ? (a = su, a) : su;
      }
      function bh(a) {
        var l = a._reactInternals;
        if (l === void 0)
          throw typeof a.render == "function" ? Error(h(188)) : (a = Object.keys(a).join(","), Error(h(268, a)));
        return a = A(l), a = a !== null ? U(a) : null, a === null ? null : Us(a.stateNode);
      }
      function vr(a, l, s, f, m, p) {
        m = Yu(m), f.context === null ? f.context = m : f.pendingContext = m, f = an(l), f.payload = { element: s }, p = p === void 0 ? null : p, p !== null && (f.callback = p), s = Mn(a, f, l), s !== null && (Yn(s, a, l), Pe(s, a, l));
      }
      function Ah(a, l) {
        if (a = a.memoizedState, a !== null && a.dehydrated !== null) {
          var s = a.retryLane;
          a.retryLane = s !== 0 && s < l ? s : l;
        }
      }
      function Rh(a, l) {
        Ah(a, l), (a = a.alternate) && Ah(a, l);
      }
      var ce = {}, ym = Ct, Oa = o2, Ei = Object.assign, Ha = Symbol.for("react.element"), Yc = Symbol.for("react.transitional.element"), Ds = Symbol.for("react.portal"), Vu = Symbol.for("react.fragment"), Ch = Symbol.for("react.strict_mode"), Sr = Symbol.for("react.profiler"), Nh = Symbol.for("react.provider"), gr = Symbol.for("react.consumer"), Tl = Symbol.for("react.context"), Dh = Symbol.for("react.forward_ref"), Er = Symbol.for("react.suspense"), Uh = Symbol.for("react.suspense_list"), xr = Symbol.for("react.memo"), xi = Symbol.for("react.lazy"), tl = Symbol.for("react.offscreen"), Oh = Symbol.for("react.memo_cache_sentinel"), Hh = Symbol.iterator, Fp = Symbol.for("react.client.reference"), Zt = ym.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Bh, sa, Tr = !1, Wn = Array.isArray, vm = n.rendererVersion, Pp = n.rendererPackageName, zl = n.extraDevToolsConfig, Us = n.getPublicInstance, Os = n.getRootHostContext, Sm = n.getChildHostContext, Ti = n.prepareForCommit, qh = n.resetAfterCommit, Yh = n.createInstance, wl = n.appendInitialChild, Vh = n.finalizeInitialChildren, zi = n.shouldSetTextContent, jh = n.createTextInstance, Vc = n.scheduleTimeout, ju = n.cancelTimeout, zr = n.noTimeout, Wl = n.isPrimaryRenderer;
      n.warnsIfNotActing;
      var hn = n.supportsMutation, Mi = n.supportsPersistence, ca = n.supportsHydration, Gh = n.getInstanceFromNode;
      n.beforeActiveInstanceBlur, n.afterActiveInstanceBlur;
      var gm = n.preparePortalMount;
      n.prepareScopeUpdate, n.getInstanceFromScope;
      var Fn = n.setCurrentUpdatePriority, _i = n.getCurrentUpdatePriority, Qh = n.resolveUpdatePriority;
      n.resolveEventType, n.resolveEventTimeStamp;
      var Em = n.shouldAttemptEagerTransition, Mr = n.detachDeletedInstance;
      n.requestPostPaintCallback;
      var Ip = n.maySuspendCommit, Xh = n.preloadInstance, Ba = n.startSuspendingCommit, Zh = n.suspendInstance, tn = n.waitForCommitToBeReady, Gu = n.NotPendingTransition, bi = n.HostTransitionContext, xm = n.resetFormInstance;
      n.bindToConsole;
      var $p = n.supportsMicrotasks, Ai = n.scheduleMicrotask, au = n.supportsTestSelectors, Kh = n.findFiberRoot, Hs = n.getBoundingRect, Tm = n.getTextContent, Bs = n.isHiddenSubtree, zm = n.matchAccessibilityRole, Mm = n.setFocusIfFocusable, Jh = n.setupIntersectionObserver, Lh = n.appendChild, _m = n.appendChildToContainer, kp = n.commitTextUpdate, ty = n.commitMount, bm = n.commitUpdate, Am = n.insertBefore, ey = n.insertInContainerBefore, qs = n.removeChild, _r = n.removeChildFromContainer, wh = n.resetTextContent, Wh = n.hideInstance, ny = n.hideTextInstance, ay = n.unhideInstance, Rm = n.unhideTextInstance, lu = n.clearContainer, Cm = n.cloneInstance, Re = n.createContainerChildSet, br = n.appendChildToContainerChildSet, ly = n.finalizeContainerChildren, Fh = n.replaceContainerChildren, Nm = n.cloneHiddenInstance, Dm = n.cloneHiddenTextInstance, jc = n.isSuspenseInstancePending, Ar = n.isSuspenseInstanceFallback, Um = n.getSuspenseInstanceFallbackErrorDetails, Om = n.registerSuspenseInstanceRetry, Gc = n.canHydrateFormStateMarker, iy = n.isFormStateMarkerMatching, Hm = n.getNextHydratableSibling, iu = n.getFirstHydratableChild, Ph = n.getFirstHydratableChildWithinContainer, Bm = n.getFirstHydratableChildWithinSuspenseInstance, qm = n.canHydrateInstance, Ih = n.canHydrateTextInstance, uy = n.canHydrateSuspenseInstance, $h = n.hydrateInstance, uu = n.hydrateTextInstance, Ym = n.hydrateSuspenseInstance, kh = n.getNextHydratableInstanceAfterSuspenseInstance, Rr = n.commitHydratedContainer, Qu = n.commitHydratedSuspenseInstance, Vm = n.clearSuspenseBoundary, td = n.clearSuspenseBoundaryFromContainer, Cr = n.shouldDeleteUnhydratedTailInstances;
      n.diffHydratedPropsForDevWarnings, n.diffHydratedTextForDevWarnings, n.describeHydratableInstanceForDevWarnings;
      var sy = n.validateHydratableInstance, jm = n.validateHydratableTextInstance, qa = n.supportsResources, ed = n.isHostHoistableType, Nr = n.getHoistableRoot, nd = n.getResource, ad = n.acquireResource, Dr = n.releaseResource, cy = n.hydrateHoistable, Gm = n.mountHoistable, se = n.unmountHoistable, oy = n.createHoistableInstance, va = n.prepareToCommitHoistables, Vn = n.mayResourceSuspendCommit, Qm = n.preloadResource, Xu = n.suspendResource, un = n.supportsSingletons, Zu = n.resolveSingletonInstance, Ur = n.clearSingleton, ld = n.acquireSingletonInstance, ry = n.releaseSingletonInstance, Or = n.isHostSingletonType, Ml = [], Fl = -1, su = {}, oa = Math.clz32 ? Math.clz32 : at, Hr = Math.log, Ya = Math.LN2, Qc = 128, Br = 4194304, Xc = Oa.unstable_scheduleCallback, id = Oa.unstable_cancelCallback, F = Oa.unstable_shouldYield, Zc = Oa.unstable_requestPaint, el = Oa.unstable_now, ud = Oa.unstable_ImmediatePriority, Xm = Oa.unstable_UserBlockingPriority, qr = Oa.unstable_NormalPriority, Zm = Oa.unstable_IdlePriority, Km = Oa.log, Jm = Oa.unstable_setDisableYieldValue, Ku = null, Sa = null, ra = typeof Object.is == "function" ? Object.is : ot, Yr = /* @__PURE__ */ new WeakMap(), jn = [], Gn = 0, Cn = null, Vr = 0, nl = [], Va = 0, al = null, Ri = 1, Ci = "", Qn = J(null), Kc = J(null), cu = J(null), Ys = J(null), Pn = null, xn = null, xe = !1, _l = null, Pl = !1, Jc = Error(h(519)), dn = [], fn = 0, Il = 0, fa = null, Ju = null, sd = !1, Xn = !1, Ni = !1, Vs = 0, Lc = null, cd = 0, js = 0, Lu = null, ou = !1, jr = !1, fy = Object.prototype.hasOwnProperty, $l = Error(h(460)), Di = Error(h(474)), Gr = { then: function() {
      } }, Gs = null, Qs = null, wc = 0, ll = di(!0), Lm = di(!1), Xs = J(null), Qr = J(0), In = J(null), kl = null, Tn = J(0), ru = 0, ne = null, Ue = null, mn = null, Xr = !1, Zs = !1, wu = !1, Zr = 0, Wc = 0, Ks = null, wm = 0, od = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, ti = {
        readContext: qn,
        use: aa,
        useCallback: $,
        useContext: $,
        useEffect: $,
        useImperativeHandle: $,
        useLayoutEffect: $,
        useInsertionEffect: $,
        useMemo: $,
        useReducer: $,
        useRef: $,
        useState: $,
        useDebugValue: $,
        useDeferredValue: $,
        useTransition: $,
        useSyncExternalStore: $,
        useId: $
      };
      ti.useCacheRefresh = $, ti.useMemoCache = $, ti.useHostTransitionStatus = $, ti.useFormState = $, ti.useActionState = $, ti.useOptimistic = $;
      var Wu = {
        readContext: qn,
        use: aa,
        useCallback: function(a, l) {
          return Ke().memoizedState = [
            a,
            l === void 0 ? null : l
          ], a;
        },
        useContext: qn,
        useEffect: vs,
        useImperativeHandle: function(a, l, s) {
          s = s != null ? s.concat([a]) : null, Cu(
            4194308,
            4,
            yc.bind(null, l, a),
            s
          );
        },
        useLayoutEffect: function(a, l) {
          return Cu(4194308, 4, a, l);
        },
        useInsertionEffect: function(a, l) {
          Cu(4, 2, a, l);
        },
        useMemo: function(a, l) {
          var s = Ke();
          l = l === void 0 ? null : l;
          var f = a();
          if (wu) {
            lt(!0);
            try {
              a();
            } finally {
              lt(!1);
            }
          }
          return s.memoizedState = [f, l], f;
        },
        useReducer: function(a, l, s) {
          var f = Ke();
          if (s !== void 0) {
            var m = s(l);
            if (wu) {
              lt(!0);
              try {
                s(l);
              } finally {
                lt(!1);
              }
            }
          } else m = l;
          return f.memoizedState = f.baseState = m, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: m
          }, f.queue = a, a = a.dispatch = No.bind(
            null,
            ne,
            a
          ), [f.memoizedState, a];
        },
        useRef: function(a) {
          var l = Ke();
          return a = { current: a }, l.memoizedState = a;
        },
        useState: function(a) {
          a = Ki(a);
          var l = a.queue, s = th.bind(
            null,
            ne,
            l
          );
          return l.dispatch = s, [a.memoizedState, s];
        },
        useDebugValue: Ao,
        useDeferredValue: function(a, l) {
          var s = Ke();
          return Ro(s, a, l);
        },
        useTransition: function() {
          var a = Ki(!1);
          return a = bn.bind(
            null,
            ne,
            a.queue,
            !0,
            !1
          ), Ke().memoizedState = a, [!1, a];
        },
        useSyncExternalStore: function(a, l, s) {
          var f = ne, m = Ke();
          if (xe) {
            if (s === void 0)
              throw Error(h(407));
            s = s();
          } else {
            if (s = l(), Xe === null)
              throw Error(h(349));
            me & 60 || Kf(f, l, s);
          }
          m.memoizedState = s;
          var p = { value: s, getSnapshot: l };
          return m.queue = p, vs(pl.bind(null, f, p, a), [
            a
          ]), f.flags |= 2048, Na(
            9,
            ml.bind(
              null,
              f,
              p,
              s,
              l
            ),
            { destroy: void 0 },
            null
          ), s;
        },
        useId: function() {
          var a = Ke(), l = Xe.identifierPrefix;
          if (xe) {
            var s = Ci, f = Ri;
            s = (f & ~(1 << 32 - oa(f) - 1)).toString(32) + s, l = ":" + l + "R" + s, s = Zr++, 0 < s && (l += "H" + s.toString(32)), l += ":";
          } else
            s = wm++, l = ":" + l + "r" + s.toString(32) + ":";
          return a.memoizedState = l;
        },
        useCacheRefresh: function() {
          return Ke().memoizedState = Co.bind(
            null,
            ne
          );
        }
      };
      Wu.useMemoCache = ps, Wu.useHostTransitionStatus = Ss, Wu.useFormState = Wf, Wu.useActionState = Wf, Wu.useOptimistic = function(a) {
        var l = Ke();
        l.memoizedState = l.baseState = a;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return l.queue = s, l = Ec.bind(
          null,
          ne,
          !0,
          s
        ), s.dispatch = l, [a, l];
      };
      var fu = {
        readContext: qn,
        use: aa,
        useCallback: vc,
        useContext: qn,
        useEffect: bo,
        useImperativeHandle: If,
        useInsertionEffect: sm,
        useLayoutEffect: Pf,
        useMemo: $f,
        useReducer: Au,
        useRef: ys,
        useState: function() {
          return Au(Bn);
        },
        useDebugValue: Ao,
        useDeferredValue: function(a, l) {
          var s = Ee();
          return kf(
            s,
            Ue.memoizedState,
            a,
            l
          );
        },
        useTransition: function() {
          var a = Au(Bn)[0], l = Ee().memoizedState;
          return [
            typeof a == "boolean" ? a : Je(a),
            l
          ];
        },
        useSyncExternalStore: xo,
        useId: gs
      };
      fu.useCacheRefresh = gc, fu.useMemoCache = ps, fu.useHostTransitionStatus = Ss, fu.useFormState = um, fu.useActionState = um, fu.useOptimistic = function(a, l) {
        var s = Ee();
        return Jf(s, Ue, a, l);
      };
      var Fu = {
        readContext: qn,
        use: aa,
        useCallback: vc,
        useContext: qn,
        useEffect: bo,
        useImperativeHandle: If,
        useInsertionEffect: sm,
        useLayoutEffect: Pf,
        useMemo: $f,
        useReducer: mc,
        useRef: ys,
        useState: function() {
          return mc(Bn);
        },
        useDebugValue: Ao,
        useDeferredValue: function(a, l) {
          var s = Ee();
          return Ue === null ? Ro(s, a, l) : kf(
            s,
            Ue.memoizedState,
            a,
            l
          );
        },
        useTransition: function() {
          var a = mc(Bn)[0], l = Ee().memoizedState;
          return [
            typeof a == "boolean" ? a : Je(a),
            l
          ];
        },
        useSyncExternalStore: xo,
        useId: gs
      };
      Fu.useCacheRefresh = gc, Fu.useMemoCache = ps, Fu.useHostTransitionStatus = Ss, Fu.useFormState = mi, Fu.useActionState = mi, Fu.useOptimistic = function(a, l) {
        var s = Ee();
        return Ue !== null ? Jf(s, Ue, a, l) : (s.baseState = a, [a, s.queue.dispatch]);
      };
      var rd = {
        isMounted: function(a) {
          return (a = a._reactInternals) ? R(a) === a : !1;
        },
        enqueueSetState: function(a, l, s) {
          a = a._reactInternals;
          var f = ua(), m = an(f);
          m.payload = l, s != null && (m.callback = s), l = Mn(a, m, f), l !== null && (Yn(l, a, f), Pe(l, a, f));
        },
        enqueueReplaceState: function(a, l, s) {
          a = a._reactInternals;
          var f = ua(), m = an(f);
          m.tag = 1, m.payload = l, s != null && (m.callback = s), l = Mn(a, m, f), l !== null && (Yn(l, a, f), Pe(l, a, f));
        },
        enqueueForceUpdate: function(a, l) {
          a = a._reactInternals;
          var s = ua(), f = an(s);
          f.tag = 2, l != null && (f.callback = l), l = Mn(a, f, s), l !== null && (Yn(l, a, s), Pe(l, a, s));
        }
      }, fd = typeof reportError == "function" ? reportError : function(a) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var l = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof a == "object" && a !== null && typeof a.message == "string" ? String(a.message) : String(a),
            error: a
          });
          if (!window.dispatchEvent(l)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", a);
          return;
        }
        console.error(a);
      }, hd = Error(h(461)), Nn = !1, Kr = { dehydrated: null, treeContext: null, retryLane: 0 }, Fc = J(null), hu = null, bl = null, dd = typeof AbortController < "u" ? AbortController : function() {
        var a = [], l = this.signal = {
          aborted: !1,
          addEventListener: function(s, f) {
            a.push(f);
          }
        };
        this.abort = function() {
          l.aborted = !0, a.forEach(function(s) {
            return s();
          });
        };
      }, hy = Oa.unstable_scheduleCallback, dy = Oa.unstable_NormalPriority, sn = {
        $$typeof: Tl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Wm = Zt.S;
      Zt.S = function(a, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && Yt(a, l), Wm !== null && Wm(a, l);
      };
      var Ui = J(null), ei = !1, cn = !1, md = !1, Fm = typeof WeakSet == "function" ? WeakSet : Set, Dn = null, Pm = !1, pn = null, ja = !1, Al = null, Pu = 8192, my = {
        getCacheForType: function(a) {
          var l = qn(sn), s = l.data.get(a);
          return s === void 0 && (s = a(), l.data.set(a, s)), s;
        }
      }, Jr = 0, Lr = 1, wr = 2, Pc = 3, Ic = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Js = Symbol.for;
        Jr = Js("selector.component"), Lr = Js("selector.has_pseudo_class"), wr = Js("selector.role"), Pc = Js("selector.test_id"), Ic = Js("selector.text");
      }
      var Im = typeof WeakMap == "function" ? WeakMap : Map, Oe = 0, Xe = null, Qt = null, me = 0, He = 0, ga = null, ni = !1, Iu = !1, pd = !1, ai = 0, en = 0, du = 0, $u = 0, yd = 0, Ga = 0, Ls = 0, yn = null, Rl = null, vd = !1, Sd = 0, $c = 1 / 0, kc = null, li = null, ws = !1, ha = null, il = 0, Zn = 0, gd = null, to = 0, Ws = null;
      return ce.attemptContinuousHydration = function(a) {
        if (a.tag === 13) {
          var l = Ce(a, 67108864);
          l !== null && Yn(l, a, 67108864), Rh(a, 67108864);
        }
      }, ce.attemptHydrationAtCurrentPriority = function(a) {
        if (a.tag === 13) {
          var l = ua(), s = Ce(a, l);
          s !== null && Yn(s, a, l), Rh(a, l);
        }
      }, ce.attemptSynchronousHydration = function(a) {
        switch (a.tag) {
          case 3:
            if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
              var l = P(a.pendingLanes);
              if (l !== 0) {
                for (a.pendingLanes |= 2, a.entangledLanes |= 2; l; ) {
                  var s = 1 << 31 - oa(l);
                  a.entanglements[1] |= s, l &= ~s;
                }
                En(a), !(Oe & 6) && ($c = el() + 500, D(0));
              }
            }
            break;
          case 13:
            l = Ce(a, 2), l !== null && Yn(l, a, 2), vh(), Rh(a, 2);
        }
      }, ce.batchedUpdates = function(a, l) {
        return a(l);
      }, ce.createComponentSelector = function(a) {
        return { $$typeof: Jr, value: a };
      }, ce.createContainer = function(a, l, s, f, m, p, _, O, Q, tt) {
        return Ns(
          a,
          l,
          !1,
          null,
          s,
          f,
          p,
          _,
          O,
          Q,
          tt,
          null
        );
      }, ce.createHasPseudoClassSelector = function(a) {
        return { $$typeof: Lr, value: a };
      }, ce.createHydrationContainer = function(a, l, s, f, m, p, _, O, Q, tt, mt, gt, St) {
        return a = Ns(
          s,
          f,
          !0,
          a,
          m,
          p,
          O,
          Q,
          tt,
          mt,
          gt,
          St
        ), a.context = Yu(null), s = a.current, f = ua(), m = an(f), m.callback = l ?? null, Mn(s, m, f), a.current.lanes = f, jt(a, f), En(a), a;
      }, ce.createPortal = function(a, l, s) {
        var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Ds,
          key: f == null ? null : "" + f,
          children: a,
          containerInfo: l,
          implementation: s
        };
      }, ce.createRoleSelector = function(a) {
        return { $$typeof: wr, value: a };
      }, ce.createTestNameSelector = function(a) {
        return { $$typeof: Pc, value: a };
      }, ce.createTextSelector = function(a) {
        return { $$typeof: Ic, value: a };
      }, ce.defaultOnCaughtError = function(a) {
        console.error(a);
      }, ce.defaultOnRecoverableError = function(a) {
        fd(a);
      }, ce.defaultOnUncaughtError = function(a) {
        fd(a);
      }, ce.deferredUpdates = function(a) {
        var l = Zt.T, s = _i();
        try {
          return Fn(32), Zt.T = null, a();
        } finally {
          Fn(s), Zt.T = l;
        }
      }, ce.discreteUpdates = function(a, l, s, f, m) {
        var p = Zt.T, _ = _i();
        try {
          return Fn(2), Zt.T = null, a(l, s, f, m);
        } finally {
          Fn(_), Zt.T = p, Oe === 0 && ($c = el() + 500);
        }
      }, ce.findAllNodes = Nc, ce.findBoundingRects = function(a, l) {
        if (!au) throw Error(h(363));
        l = Nc(a, l), a = [];
        for (var s = 0; s < l.length; s++)
          a.push(Hs(l[s]));
        for (l = a.length - 1; 0 < l; l--) {
          s = a[l];
          for (var f = s.x, m = f + s.width, p = s.y, _ = p + s.height, O = l - 1; 0 <= O; O--)
            if (l !== O) {
              var Q = a[O], tt = Q.x, mt = tt + Q.width, gt = Q.y, St = gt + Q.height;
              if (f >= tt && p >= gt && m <= mt && _ <= St) {
                a.splice(l, 1);
                break;
              } else if (f !== tt || s.width !== Q.width || St < p || gt > _) {
                if (!(p !== gt || s.height !== Q.height || mt < f || tt > m)) {
                  tt > f && (Q.width += tt - f, Q.x = f), mt < m && (Q.width = m - tt), a.splice(l, 1);
                  break;
                }
              } else {
                gt > p && (Q.height += gt - p, Q.y = p), St < _ && (Q.height = _ - gt), a.splice(l, 1);
                break;
              }
            }
        }
        return a;
      }, ce.findHostInstance = bh, ce.findHostInstanceWithNoPortals = function(a) {
        return a = A(a), a = a !== null ? X(a) : null, a === null ? null : Us(a.stateNode);
      }, ce.findHostInstanceWithWarning = function(a) {
        return bh(a);
      }, ce.flushPassiveEffects = Ll, ce.flushSyncFromReconciler = function(a) {
        var l = Oe;
        Oe |= 1;
        var s = Zt.T, f = _i();
        try {
          if (Fn(2), Zt.T = null, a)
            return a();
        } finally {
          Fn(f), Zt.T = s, Oe = l, !(Oe & 6) && D(0);
        }
      }, ce.flushSyncWork = vh, ce.focusWithin = function(a, l) {
        if (!au) throw Error(h(363));
        for (a = ir(a), l = cr(a, l), l = Array.from(l), a = 0; a < l.length; ) {
          var s = l[a++], f = s.tag;
          if (!Bs(s)) {
            if ((f === 5 || f === 26 || f === 27) && Mm(s.stateNode))
              return !0;
            for (s = s.child; s !== null; )
              l.push(s), s = s.sibling;
          }
        }
        return !1;
      }, ce.getFindAllNodesFailureDescription = function(a, l) {
        if (!au) throw Error(h(363));
        var s = 0, f = [];
        a = [ir(a), 0];
        for (var m = 0; m < a.length; ) {
          var p = a[m++], _ = p.tag, O = a[m++], Q = l[O];
          if ((_ !== 5 && _ !== 26 && _ !== 27 || !Bs(p)) && (ur(p, Q) && (f.push(sr(Q)), O++, O > s && (s = O)), O < l.length))
            for (p = p.child; p !== null; )
              a.push(p, O), p = p.sibling;
        }
        if (s < l.length) {
          for (a = []; s < l.length; s++)
            a.push(sr(l[s]));
          return `findAllNodes was able to match part of the selector:
  ` + (f.join(" > ") + `

No matching component was found for:
  `) + a.join(" > ");
        }
        return null;
      }, ce.getPublicRootInstance = function(a) {
        if (a = a.current, !a.child) return null;
        switch (a.child.tag) {
          case 27:
          case 5:
            return Us(a.child.stateNode);
          default:
            return a.child.stateNode;
        }
      }, ce.injectIntoDevTools = function() {
        var a = {
          bundleType: 0,
          version: vm,
          rendererPackageName: Pp,
          currentDispatcherRef: Zt,
          findFiberByHostInstance: Gh,
          reconcilerVersion: "19.0.0"
        };
        if (zl !== null && (a.rendererConfig = zl), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") a = !1;
        else {
          var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (l.isDisabled || !l.supportsFiber) a = !0;
          else {
            try {
              Ku = l.inject(a), Sa = l;
            } catch {
            }
            a = !!l.checkDCE;
          }
        }
        return a;
      }, ce.isAlreadyRendering = function() {
        return !1;
      }, ce.observeVisibleRects = function(a, l, s, f) {
        if (!au) throw Error(h(363));
        a = Nc(a, l);
        var m = Jh(
          a,
          s,
          f
        ).disconnect;
        return {
          disconnect: function() {
            m();
          }
        };
      }, ce.shouldError = function() {
        return null;
      }, ce.shouldSuspend = function() {
        return !1;
      }, ce.startHostTransition = function(a, l, s, f) {
        if (a.tag !== 5) throw Error(h(476));
        var m = Sc(a).queue;
        bn(
          a,
          m,
          l,
          Gu,
          s === null ? o : function() {
            var p = Sc(a).next.queue;
            return Es(
              a,
              p,
              {},
              ua()
            ), s(f);
          }
        );
      }, ce.updateContainer = function(a, l, s, f) {
        var m = l.current, p = ua();
        return vr(
          m,
          p,
          a,
          l,
          s,
          f
        ), p;
      }, ce.updateContainerSync = function(a, l, s, f) {
        return l.tag === 0 && Ll(), vr(
          l.current,
          2,
          a,
          l,
          s,
          f
        ), 2;
      }, ce;
    }, T.exports.default = T.exports, Object.defineProperty(T.exports, "__esModule", { value: !0 });
  }(m0)), m0.exports;
}
var v0 = { exports: {} };
/**
 * @license React
 * react-reconciler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y1;
function ZS() {
  return Y1 || (Y1 = 1, function(T) {
    process.env.NODE_ENV !== "production" && (T.exports = function(n) {
      function u(t, e) {
        for (t = t.memoizedState; t !== null && 0 < e; )
          t = t.next, e--;
        return t;
      }
      function o(t, e, i, c) {
        if (i >= e.length) return c;
        var r = e[i], d = Cn(t) ? t.slice() : Vn({}, t);
        return d[r] = o(t[r], e, i + 1, c), d;
      }
      function h(t, e, i) {
        if (e.length !== i.length)
          console.warn("copyWithRename() expects paths of the same length");
        else {
          for (var c = 0; c < i.length - 1; c++)
            if (e[c] !== i[c]) {
              console.warn(
                "copyWithRename() expects paths to be the same except for the deepest key"
              );
              return;
            }
          return y(t, e, i, 0);
        }
      }
      function y(t, e, i, c) {
        var r = e[c], d = Cn(t) ? t.slice() : Vn({}, t);
        return c + 1 === e.length ? (d[i[c]] = d[r], Cn(d) ? d.splice(r, 1) : delete d[r]) : d[r] = y(
          t[r],
          e,
          i,
          c + 1
        ), d;
      }
      function S(t, e, i) {
        var c = e[i], r = Cn(t) ? t.slice() : Vn({}, t);
        return i + 1 === e.length ? (Cn(r) ? r.splice(c, 1) : delete r[c], r) : (r[c] = S(t[c], e, i + 1), r);
      }
      function x() {
        return !1;
      }
      function E() {
        return null;
      }
      function z(t, e, i, c) {
        return new uy(t, e, i, c);
      }
      function M(t, e) {
        t.context === il && (Nr(e, t, null, null), au());
      }
      function R(t, e) {
        if (fi !== null) {
          var i = e.staleFamilies;
          e = e.updatedFamilies, lu(), Ih(
            t.current,
            e,
            i
          ), au();
        }
      }
      function C(t) {
        fi = t;
      }
      function A() {
        console.error(
          "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
        );
      }
      function U() {
        console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      }
      function X() {
      }
      function J() {
      }
      function K(t) {
        var e = [];
        return t.forEach(function(i) {
          e.push(i);
        }), e.sort().join(", ");
      }
      function k(t) {
        return t === null || typeof t != "object" ? null : (t = Xc && t[Xc] || t["@@iterator"], typeof t == "function" ? t : null);
      }
      function at(t) {
        if (t == null) return null;
        if (typeof t == "function")
          return t.$$typeof === id ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
          case Zu:
            return "Fragment";
          case un:
            return "Portal";
          case ld:
            return "Profiler";
          case Ur:
            return "StrictMode";
          case su:
            return "Suspense";
          case oa:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (typeof t.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), t.$$typeof) {
            case Ml:
              return (t.displayName || "Context") + ".Provider";
            case Or:
              return (t._context.displayName || "Context") + ".Consumer";
            case Fl:
              var e = t.render;
              return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case Hr:
              return e = t.displayName || null, e !== null ? e : at(t.type) || "Memo";
            case Ya:
              e = t._payload, t = t._init;
              try {
                return at(t(e));
              } catch {
              }
          }
        return null;
      }
      function P(t) {
        var e = t.type;
        switch (t.tag) {
          case 24:
            return "Cache";
          case 9:
            return (e._context.displayName || "Context") + ".Consumer";
          case 10:
            return (e.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 26:
          case 27:
          case 5:
            return e;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return at(e);
          case 8:
            return e === Ur ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 14:
          case 15:
            if (typeof e == "function")
              return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            break;
          case 29:
            if (e = t._debugInfo, e != null) {
              for (var i = e.length - 1; 0 <= i; i--)
                if (typeof e[i].name == "string") return e[i].name;
            }
            if (t.return !== null)
              return P(t.return);
        }
        return null;
      }
      function ut() {
      }
      function Tt() {
        if (Zc === 0) {
          el = console.log, ud = console.info, Xm = console.warn, qr = console.error, Zm = console.group, Km = console.groupCollapsed, Jm = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ut,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Zc++;
      }
      function Nt() {
        if (Zc--, Zc === 0) {
          var t = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: Vn({}, t, { value: el }),
            info: Vn({}, t, { value: ud }),
            warn: Vn({}, t, { value: Xm }),
            error: Vn({}, t, { value: qr }),
            group: Vn({}, t, { value: Zm }),
            groupCollapsed: Vn({}, t, { value: Km }),
            groupEnd: Vn({}, t, { value: Jm })
          });
        }
        0 > Zc && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function Rt(t) {
        if (Ku === void 0)
          try {
            throw Error();
          } catch (i) {
            var e = i.stack.trim().match(/\n( *(at )?)/);
            Ku = e && e[1] || "", Sa = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Ku + t + Sa;
      }
      function Vt(t, e) {
        if (!t || ra) return "";
        var i = Yr.get(t);
        if (i !== void 0) return i;
        ra = !0, i = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var c = null;
        c = F.H, F.H = null, Tt();
        try {
          var r = {
            DetermineComponentFrameRoot: function() {
              try {
                if (e) {
                  var Et = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Et.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Et, []);
                    } catch (De) {
                      var pe = De;
                    }
                    Reflect.construct(t, [], Et);
                  } else {
                    try {
                      Et.call();
                    } catch (De) {
                      pe = De;
                    }
                    t.call(Et.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (De) {
                    pe = De;
                  }
                  (Et = t()) && typeof Et.catch == "function" && Et.catch(function() {
                  });
                }
              } catch (De) {
                if (De && pe && typeof De.stack == "string")
                  return [De.stack, pe.stack];
              }
              return [null, null];
            }
          };
          r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var d = Object.getOwnPropertyDescriptor(
            r.DetermineComponentFrameRoot,
            "name"
          );
          d && d.configurable && Object.defineProperty(
            r.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var v = r.DetermineComponentFrameRoot(), b = v[0], Y = v[1];
          if (b && Y) {
            var W = b.split(`
`), dt = Y.split(`
`);
            for (v = d = 0; d < W.length && !W[d].includes(
              "DetermineComponentFrameRoot"
            ); )
              d++;
            for (; v < dt.length && !dt[v].includes(
              "DetermineComponentFrameRoot"
            ); )
              v++;
            if (d === W.length || v === dt.length)
              for (d = W.length - 1, v = dt.length - 1; 1 <= d && 0 <= v && W[d] !== dt[v]; )
                v--;
            for (; 1 <= d && 0 <= v; d--, v--)
              if (W[d] !== dt[v]) {
                if (d !== 1 || v !== 1)
                  do
                    if (d--, v--, 0 > v || W[d] !== dt[v]) {
                      var yt = `
` + W[d].replace(
                        " at new ",
                        " at "
                      );
                      return t.displayName && yt.includes("<anonymous>") && (yt = yt.replace("<anonymous>", t.displayName)), typeof t == "function" && Yr.set(t, yt), yt;
                    }
                  while (1 <= d && 0 <= v);
                break;
              }
          }
        } finally {
          ra = !1, F.H = c, Nt(), Error.prepareStackTrace = i;
        }
        return W = (W = t ? t.displayName || t.name : "") ? Rt(W) : "", typeof t == "function" && Yr.set(t, W), W;
      }
      function Gt(t) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            return Rt(t.type);
          case 16:
            return Rt("Lazy");
          case 13:
            return Rt("Suspense");
          case 19:
            return Rt("SuspenseList");
          case 0:
          case 15:
            return t = Vt(t.type, !1), t;
          case 11:
            return t = Vt(t.type.render, !1), t;
          case 1:
            return t = Vt(t.type, !0), t;
          default:
            return "";
        }
      }
      function jt(t) {
        try {
          var e = "";
          do {
            e += Gt(t);
            var i = t._debugInfo;
            if (i)
              for (var c = i.length - 1; 0 <= c; c--) {
                var r = i[c];
                if (typeof r.name == "string") {
                  var d = e, v = r.env, b = Rt(
                    r.name + (v ? " [" + v + "]" : "")
                  );
                  e = d + b;
                }
              }
            t = t.return;
          } while (t);
          return e;
        } catch (Y) {
          return `
Error generating stack: ` + Y.message + `
` + Y.stack;
        }
      }
      function ye() {
        return jn === null ? "" : jt(jn);
      }
      function it(t, e, i, c, r, d, v) {
        var b = jn;
        F.getCurrentStack = t === null ? null : ye, Gn = !1, jn = t;
        try {
          return e(i, c, r, d, v);
        } finally {
          jn = b;
        }
        throw Error(
          "runWithFiberInDEV should never be called in production. This is a bug in React."
        );
      }
      function Ft(t) {
        var e = t, i = t;
        if (t.alternate) for (; e.return; ) e = e.return;
        else {
          t = e;
          do
            e = t, e.flags & 4098 && (i = e.return), t = e.return;
          while (t);
        }
        return e.tag === 3 ? i : null;
      }
      function ie(t) {
        if (Ft(t) !== t)
          throw Error("Unable to find node on an unmounted component.");
      }
      function V(t) {
        var e = t.alternate;
        if (!e) {
          if (e = Ft(t), e === null)
            throw Error("Unable to find node on an unmounted component.");
          return e !== t ? null : t;
        }
        for (var i = t, c = e; ; ) {
          var r = i.return;
          if (r === null) break;
          var d = r.alternate;
          if (d === null) {
            if (c = r.return, c !== null) {
              i = c;
              continue;
            }
            break;
          }
          if (r.child === d.child) {
            for (d = r.child; d; ) {
              if (d === i) return ie(r), t;
              if (d === c) return ie(r), e;
              d = d.sibling;
            }
            throw Error("Unable to find node on an unmounted component.");
          }
          if (i.return !== c.return) i = r, c = d;
          else {
            for (var v = !1, b = r.child; b; ) {
              if (b === i) {
                v = !0, i = r, c = d;
                break;
              }
              if (b === c) {
                v = !0, c = r, i = d;
                break;
              }
              b = b.sibling;
            }
            if (!v) {
              for (b = d.child; b; ) {
                if (b === i) {
                  v = !0, i = d, c = r;
                  break;
                }
                if (b === c) {
                  v = !0, c = d, i = r;
                  break;
                }
                b = b.sibling;
              }
              if (!v)
                throw Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                );
            }
          }
          if (i.alternate !== c)
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (i.tag !== 3)
          throw Error("Unable to find node on an unmounted component.");
        return i.stateNode.current === i ? t : e;
      }
      function lt(t) {
        return t = V(t), t !== null ? ot(t) : null;
      }
      function ot(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null; ) {
          if (e = ot(t), e !== null) return e;
          t = t.sibling;
        }
        return null;
      }
      function st(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null; ) {
          if (t.tag !== 4 && (e = st(t), e !== null))
            return e;
          t = t.sibling;
        }
        return null;
      }
      function N(t) {
        return { current: t };
      }
      function w(t, e) {
        0 > ha ? console.error("Unexpected pop.") : (e !== ws[ha] && console.error("Unexpected Fiber popped."), t.current = li[ha], li[ha] = null, ws[ha] = null, ha--);
      }
      function ct(t, e, i) {
        ha++, li[ha] = t.current, ws[ha] = i, t.current = e;
      }
      function bt(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (gd(t) / to | 0) | 0;
      }
      function vt(t) {
        if (t & 1) return "SyncHydrationLane";
        if (t & 2) return "Sync";
        if (t & 4) return "InputContinuousHydration";
        if (t & 8) return "InputContinuous";
        if (t & 16) return "DefaultHydration";
        if (t & 32) return "Default";
        if (t & 64) return "TransitionHydration";
        if (t & 4194176) return "Transition";
        if (t & 62914560) return "Retry";
        if (t & 67108864) return "SelectiveHydration";
        if (t & 134217728) return "IdleHydration";
        if (t & 268435456) return "Idle";
        if (t & 536870912) return "Offscreen";
        if (t & 1073741824) return "Deferred";
      }
      function Dt(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return t & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), t;
        }
      }
      function Ot(t, e) {
        var i = t.pendingLanes;
        if (i === 0) return 0;
        var c = 0, r = t.suspendedLanes, d = t.pingedLanes, v = t.warmLanes;
        t = t.finishedLanes !== 0;
        var b = i & 134217727;
        return b !== 0 ? (i = b & ~r, i !== 0 ? c = Dt(i) : (d &= b, d !== 0 ? c = Dt(d) : t || (v = b & ~v, v !== 0 && (c = Dt(v))))) : (b = i & ~r, b !== 0 ? c = Dt(b) : d !== 0 ? c = Dt(d) : t || (v = i & ~v, v !== 0 && (c = Dt(v)))), c === 0 ? 0 : e !== 0 && e !== c && !(e & r) && (r = c & -c, v = e & -e, r >= v || r === 32 && (v & 4194176) !== 0) ? e : c;
      }
      function Ye(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
      }
      function ue(t, e) {
        switch (t) {
          case 1:
          case 2:
          case 4:
          case 8:
            return e + 250;
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), -1;
        }
      }
      function Me() {
        var t = Ws;
        return Ws <<= 1, !(Ws & 4194176) && (Ws = 128), t;
      }
      function je() {
        var t = a;
        return a <<= 1, !(a & 62914560) && (a = 4194304), t;
      }
      function ge(t) {
        for (var e = [], i = 0; 31 > i; i++) e.push(t);
        return e;
      }
      function ve(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
      }
      function te(t, e, i, c, r, d) {
        var v = t.pendingLanes;
        t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= i, t.entangledLanes &= i, t.errorRecoveryDisabledLanes &= i, t.shellSuspendCounter = 0;
        var b = t.entanglements, Y = t.expirationTimes, W = t.hiddenUpdates;
        for (i = v & ~i; 0 < i; ) {
          var dt = 31 - Zn(i), yt = 1 << dt;
          b[dt] = 0, Y[dt] = -1;
          var Et = W[dt];
          if (Et !== null)
            for (W[dt] = null, dt = 0; dt < Et.length; dt++) {
              var pe = Et[dt];
              pe !== null && (pe.lane &= -536870913);
            }
          i &= ~yt;
        }
        c !== 0 && Ge(t, c, 0), d !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(v & ~e));
      }
      function Ge(t, e, i) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var c = 31 - Zn(e);
        t.entangledLanes |= e, t.entanglements[c] = t.entanglements[c] | 1073741824 | i & 4194218;
      }
      function Se(t, e) {
        var i = t.entangledLanes |= e;
        for (t = t.entanglements; i; ) {
          var c = 31 - Zn(i), r = 1 << c;
          r & e | t[c] & e && (t[c] |= e), i &= ~r;
        }
      }
      function fe(t, e, i) {
        if (Kn)
          for (t = t.pendingUpdatersLaneMap; 0 < i; ) {
            var c = 31 - Zn(i), r = 1 << c;
            t[c].add(e), i &= ~r;
          }
      }
      function Ce(t, e) {
        if (Kn)
          for (var i = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; 0 < e; ) {
            var r = 31 - Zn(e);
            t = 1 << r, r = i[r], 0 < r.size && (r.forEach(function(d) {
              var v = d.alternate;
              v !== null && c.has(v) || c.add(d);
            }), r.clear()), e &= ~t;
          }
      }
      function rl(t) {
        return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
      }
      function Ma(t) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
        var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (e.isDisabled) return !0;
        if (!e.supportsFiber)
          return console.error(
            "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
          ), !0;
        try {
          St = e.inject(t), qt = e;
        } catch (i) {
          console.error("React instrumentation encountered an error: %s.", i);
        }
        return !!e.checkDCE;
      }
      function En(t, e) {
        if (qt && typeof qt.onCommitFiberRoot == "function")
          try {
            var i = (t.current.flags & 128) === 128;
            switch (e) {
              case 2:
                var c = _;
                break;
              case 8:
                c = O;
                break;
              case 32:
                c = Q;
                break;
              case 268435456:
                c = tt;
                break;
              default:
                c = Q;
            }
            qt.onCommitFiberRoot(
              St,
              t,
              c,
              i
            );
          } catch (r) {
            Ea || (Ea = !0, console.error(
              "React instrumentation encountered an error: %s",
              r
            ));
          }
      }
      function D(t) {
        if (typeof mt == "function" && gt(t), qt && typeof qt.setStrictMode == "function")
          try {
            qt.setStrictMode(St, t);
          } catch (e) {
            Ea || (Ea = !0, console.error(
              "React instrumentation encountered an error: %s",
              e
            ));
          }
      }
      function xt(t) {
        pt = t;
      }
      function At() {
        pt !== null && typeof pt.markCommitStopped == "function" && pt.markCommitStopped();
      }
      function Kt(t) {
        pt !== null && typeof pt.markComponentRenderStarted == "function" && pt.markComponentRenderStarted(t);
      }
      function Ne() {
        pt !== null && typeof pt.markComponentRenderStopped == "function" && pt.markComponentRenderStopped();
      }
      function _e(t) {
        pt !== null && typeof pt.markRenderStarted == "function" && pt.markRenderStarted(t);
      }
      function Xt() {
        pt !== null && typeof pt.markRenderStopped == "function" && pt.markRenderStopped();
      }
      function Yt(t, e) {
        pt !== null && typeof pt.markStateUpdateScheduled == "function" && pt.markStateUpdateScheduled(t, e);
      }
      function pa(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
      }
      function be(t, e) {
        if (typeof t == "object" && t !== null) {
          var i = G.get(t);
          return i !== void 0 ? i : (e = {
            value: t,
            source: e,
            stack: jt(e)
          }, G.set(t, e), e);
        }
        return {
          value: t,
          source: e,
          stack: jt(e)
        };
      }
      function ke(t, e) {
        Pe(), L[ft++] = Be, L[ft++] = Ht, Ht = t, Be = e;
      }
      function _a(t, e, i) {
        Pe(), Bt[Wt++] = $t, Bt[Wt++] = $n, Bt[Wt++] = Ie, Ie = t;
        var c = $t;
        t = $n;
        var r = 32 - Zn(c) - 1;
        c &= ~(1 << r), i += 1;
        var d = 32 - Zn(e) + r;
        if (30 < d) {
          var v = r - r % 5;
          d = (c & (1 << v) - 1).toString(32), c >>= v, r -= v, $t = 1 << 32 - Zn(e) + r | i << r | c, $n = d + t;
        } else
          $t = 1 << d | i << r | c, $n = t;
      }
      function an(t) {
        Pe(), t.return !== null && (ke(t, 1), _a(t, 1, 0));
      }
      function Mn(t) {
        for (; t === Ht; )
          Ht = L[--ft], L[ft] = null, Be = L[--ft], L[ft] = null;
        for (; t === Ie; )
          Ie = Bt[--Wt], Bt[Wt] = null, $n = Bt[--Wt], Bt[Wt] = null, $t = Bt[--Wt], Bt[Wt] = null;
      }
      function Pe() {
        Te || console.error(
          "Expected to be hydrating. This is a bug in React. Please file an issue."
        );
      }
      function ba(t) {
        return t === null && console.error(
          "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
        ), t;
      }
      function fl(t, e) {
        ct(Fs, e, t), ct(Ed, t, t), ct(mu, null, t), e = Ri(e), w(mu, t), ct(mu, e, t);
      }
      function Aa(t) {
        w(mu, t), w(Ed, t), w(Fs, t);
      }
      function na() {
        return ba(mu.current);
      }
      function zu(t) {
        t.memoizedState !== null && ct($m, t, t);
        var e = ba(mu.current), i = Ci(e, t.type);
        e !== i && (ct(Ed, t, t), ct(mu, i, t));
      }
      function hl(t) {
        Ed.current === t && (w(mu, t), w(Ed, t)), $m.current === t && (w($m, t), dn ? Di._currentValue = $l : Di._currentValue2 = $l);
      }
      function Mu(t, e) {
        return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? Mu(t.children[0], e) : t;
      }
      function _n(t) {
        return "  " + "  ".repeat(t);
      }
      function Hl(t) {
        return "+ " + "  ".repeat(t);
      }
      function dl(t) {
        return "- " + "  ".repeat(t);
      }
      function Xi(t) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            return t.type;
          case 16:
            return "Lazy";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 0:
          case 15:
            return t = t.type, t.displayName || t.name || null;
          case 11:
            return t = t.type.render, t.displayName || t.name || null;
          case 1:
            return t = t.type, t.displayName || t.name || null;
          default:
            return null;
        }
      }
      function Fa(t, e) {
        return C0.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
      }
      function Bl(t, e, i) {
        var c = 120 - 2 * i;
        if (e === null)
          return Hl(i) + Fa(t, c) + `
`;
        if (typeof e == "string") {
          for (var r = 0; r < e.length && r < t.length && e.charCodeAt(r) === t.charCodeAt(r); r++) ;
          return r > c - 8 && 10 < r && (t = "..." + t.slice(r - 8), e = "..." + e.slice(r - 8)), Hl(i) + Fa(t, c) + `
` + dl(i) + Fa(e, c) + `
`;
        }
        return _n(i) + Fa(t, c) + `
`;
      }
      function _u(t) {
        return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, i) {
          return i;
        });
      }
      function di(t, e) {
        switch (typeof t) {
          case "string":
            return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
          case "object":
            if (t === null) return "null";
            if (Cn(t)) return "[...]";
            if (t.$$typeof === Xu)
              return (e = at(t.type)) ? "<" + e + ">" : "<...>";
            var i = _u(t);
            if (i === "Object") {
              i = "", e -= 2;
              for (var c in t)
                if (t.hasOwnProperty(c)) {
                  var r = JSON.stringify(c);
                  if (r !== '"' + c + '"' && (c = r), e -= c.length - 2, r = di(
                    t[c],
                    15 > e ? e : 15
                  ), e -= r.length, 0 > e) {
                    i += i === "" ? "..." : ", ...";
                    break;
                  }
                  i += (i === "" ? "" : ",") + c + ":" + r;
                }
              return "{" + i + "}";
            }
            return i;
          case "function":
            return (e = t.displayName || t.name) ? "function " + e : "function";
          default:
            return String(t);
        }
      }
      function ql(t, e) {
        return typeof t != "string" || C0.test(t) ? "{" + di(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
      }
      function Yl(t, e, i) {
        var c = 120 - i.length - t.length, r = [], d;
        for (d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var v = ql(
              e[d],
              120 - i.length - d.length - 1
            );
            c -= d.length + v.length + 2, r.push(d + "=" + v);
          }
        return r.length === 0 ? i + "<" + t + `>
` : 0 < c ? i + "<" + t + " " + r.join(" ") + `>
` : i + "<" + t + `
` + i + "  " + r.join(`
` + i + "  ") + `
` + i + `>
`;
      }
      function Zi(t, e, i) {
        var c = "", r = Vn({}, e), d;
        for (d in t)
          if (t.hasOwnProperty(d)) {
            delete r[d];
            var v = 120 - 2 * i - d.length - 2, b = di(t[d], v);
            e.hasOwnProperty(d) ? (v = di(e[d], v), c += Hl(i) + d + ": " + b + `
`, c += dl(i) + d + ": " + v + `
`) : c += Hl(i) + d + ": " + b + `
`;
          }
        for (var Y in r)
          r.hasOwnProperty(Y) && (t = di(
            r[Y],
            120 - 2 * i - Y.length - 2
          ), c += dl(i) + Y + ": " + t + `
`);
        return c;
      }
      function Ra(t, e, i, c) {
        var r = "", d = /* @__PURE__ */ new Map();
        for (W in i)
          i.hasOwnProperty(W) && d.set(
            W.toLowerCase(),
            W
          );
        if (d.size === 1 && d.has("children"))
          r += Yl(
            t,
            e,
            _n(c)
          );
        else {
          for (var v in e)
            if (e.hasOwnProperty(v) && v !== "children") {
              var b = 120 - 2 * (c + 1) - v.length - 1, Y = d.get(v.toLowerCase());
              if (Y !== void 0) {
                d.delete(v.toLowerCase());
                var W = e[v];
                Y = i[Y];
                var dt = ql(
                  W,
                  b
                );
                b = ql(
                  Y,
                  b
                ), typeof W == "object" && W !== null && typeof Y == "object" && Y !== null && _u(W) === "Object" && _u(Y) === "Object" && (2 < Object.keys(W).length || 2 < Object.keys(Y).length || -1 < dt.indexOf("...") || -1 < b.indexOf("...")) ? r += _n(c + 1) + v + `={{
` + Zi(
                  W,
                  Y,
                  c + 2
                ) + _n(c + 1) + `}}
` : (r += Hl(c + 1) + v + "=" + dt + `
`, r += dl(c + 1) + v + "=" + b + `
`);
              } else
                r += _n(c + 1) + v + "=" + ql(e[v], b) + `
`;
            }
          d.forEach(function(yt) {
            if (yt !== "children") {
              var Et = 120 - 2 * (c + 1) - yt.length - 1;
              r += dl(c + 1) + yt + "=" + ql(i[yt], Et) + `
`;
            }
          }), r = r === "" ? _n(c) + "<" + t + `>
` : _n(c) + "<" + t + `
` + r + _n(c) + `>
`;
        }
        return t = i.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (d = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (d = "" + e), r += Bl(d, "" + t, c + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (r = t == null ? r + Bl("" + e, null, c + 1) : r + Bl("" + e, void 0, c + 1)), r;
      }
      function bu(t, e) {
        var i = Xi(t);
        if (i === null) {
          for (i = "", t = t.child; t; )
            i += bu(t, e), t = t.sibling;
          return i;
        }
        return _n(e) + "<" + i + `>
`;
      }
      function Ca(t, e) {
        var i = Mu(t, e);
        if (i !== t && (t.children.length !== 1 || t.children[0] !== i))
          return _n(e) + `...
` + Ca(i, e + 1);
        i = "";
        var c = t.fiber._debugInfo;
        if (c)
          for (var r = 0; r < c.length; r++) {
            var d = c[r].name;
            typeof d == "string" && (i += _n(e) + "<" + d + `>
`, e++);
          }
        if (c = "", r = t.fiber.pendingProps, t.fiber.tag === 6)
          c = Bl(r, t.serverProps, e), e++;
        else if (d = Xi(t.fiber), d !== null)
          if (t.serverProps === void 0) {
            c = e;
            var v = 120 - 2 * c - d.length - 2, b = "";
            for (W in r)
              if (r.hasOwnProperty(W) && W !== "children") {
                var Y = ql(r[W], 15);
                if (v -= W.length + Y.length + 2, 0 > v) {
                  b += " ...";
                  break;
                }
                b += " " + W + "=" + Y;
              }
            c = _n(c) + "<" + d + b + `>
`, e++;
          } else
            t.serverProps === null ? (c = Yl(
              d,
              r,
              Hl(e)
            ), e++) : typeof t.serverProps == "string" ? console.error(
              "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
            ) : (c = Ra(
              d,
              r,
              t.serverProps,
              e
            ), e++);
        var W = "";
        for (r = t.fiber.child, d = 0; r && d < t.children.length; )
          v = t.children[d], v.fiber === r ? (W += Ca(v, e), d++) : W += bu(r, e), r = r.sibling;
        for (r && 0 < t.children.length && (W += _n(e) + `...
`), r = t.serverTail, t.serverProps === null && e--, t = 0; t < r.length; t++)
          d = r[t], W = typeof d == "string" ? W + (dl(e) + Fa(d, 120 - 2 * e) + `
`) : W + Yl(
            d.type,
            d.props,
            dl(e)
          );
        return i + c + W;
      }
      function g(t) {
        try {
          return `

` + Ca(t, 0);
        } catch {
          return "";
        }
      }
      function q(t, e) {
        if (t.return === null) {
          if (ii === null)
            ii = {
              fiber: t,
              children: [],
              serverProps: void 0,
              serverTail: [],
              distanceFromLeaf: e
            };
          else {
            if (ii.fiber !== t)
              throw Error(
                "Saw multiple hydration diff roots in a pass. This is a bug in React."
              );
            ii.distanceFromLeaf > e && (ii.distanceFromLeaf = e);
          }
          return ii;
        }
        var i = q(
          t.return,
          e + 1
        ).children;
        return 0 < i.length && i[i.length - 1].fiber === t ? (i = i[i.length - 1], i.distanceFromLeaf > e && (i.distanceFromLeaf = e), i) : (e = {
          fiber: t,
          children: [],
          serverProps: void 0,
          serverTail: [],
          distanceFromLeaf: e
        }, i.push(e), e);
      }
      function $(t, e) {
        ku || (t = q(t, 0), t.serverProps = null, e !== null && (e = Im(e), t.serverTail.push(e)));
      }
      function ht(t) {
        var e = "", i = ii;
        throw i !== null && (ii = null, e = g(i)), ee(
          be(
            Error(
              `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + e
            ),
            t
          )
        ), py;
      }
      function zt(t, e) {
        if (!fa)
          throw Error(
            "Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
          );
        pn(
          t.stateNode,
          t.type,
          t.memoizedProps,
          e,
          t
        ) || ht(t);
      }
      function Ut(t) {
        for (Qa = t.return; Qa; )
          switch (Qa.tag) {
            case 3:
            case 27:
              pu = !0;
              return;
            case 5:
            case 13:
              pu = !1;
              return;
            default:
              Qa = Qa.return;
          }
      }
      function Mt(t) {
        if (!fa || t !== Qa) return !1;
        if (!Te)
          return Ut(t), Te = !0, !1;
        var e = !1;
        if (yn ? t.tag !== 3 && t.tag !== 27 && (t.tag !== 5 || Pc(t.type) && !xn(t.type, t.memoizedProps)) && (e = !0) : t.tag !== 3 && (t.tag !== 5 || Pc(t.type) && !xn(t.type, t.memoizedProps)) && (e = !0), e && da) {
          for (e = da; e; ) {
            var i = q(t, 0), c = Im(e);
            i.serverTail.push(c), e = c.type === "Suspense" ? Pu(e) : Ui(e);
          }
          ht(t);
        }
        if (Ut(t), t.tag === 13) {
          if (!fa)
            throw Error(
              "Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
            );
          if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
            throw Error(
              "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
            );
          da = Pu(t);
        } else
          da = Qa ? Ui(t.stateNode) : null;
        return !0;
      }
      function de() {
        fa && (da = Qa = null, ku = Te = !1);
      }
      function ee(t) {
        Oi === null ? Oi = [t] : Oi.push(t);
      }
      function Ve() {
        var t = ii;
        t !== null && (ii = null, t = g(t), console.error(
          `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
          "https://react.dev/link/hydration-mismatch",
          t
        ));
      }
      function on() {
        for (var t = Wr, e = yy = Wr = 0; e < t; ) {
          var i = ui[e];
          ui[e++] = null;
          var c = ui[e];
          ui[e++] = null;
          var r = ui[e];
          ui[e++] = null;
          var d = ui[e];
          if (ui[e++] = null, c !== null && r !== null) {
            var v = c.pending;
            v === null ? r.next = r : (r.next = v.next, v.next = r), c.pending = r;
          }
          d !== 0 && aa(i, r, d);
        }
      }
      function Ke(t, e, i, c) {
        ui[Wr++] = t, ui[Wr++] = e, ui[Wr++] = i, ui[Wr++] = c, yy |= c, t.lanes |= c, t = t.alternate, t !== null && (t.lanes |= c);
      }
      function Ee(t, e, i, c) {
        return Ke(t, e, i, c), ps(t);
      }
      function Je(t, e) {
        return Ke(t, null, null, e), ps(t);
      }
      function aa(t, e, i) {
        t.lanes |= i;
        var c = t.alternate;
        c !== null && (c.lanes |= i);
        for (var r = !1, d = t.return; d !== null; )
          d.childLanes |= i, c = d.alternate, c !== null && (c.childLanes |= i), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (r = !0)), t = d, d = d.return;
        r && e !== null && t.tag === 3 && (d = t.stateNode, r = 31 - Zn(i), d = d.hiddenUpdates, t = d[r], t === null ? d[r] = [e] : t.push(e), e.lane = i | 536870912);
      }
      function ps(t) {
        if (Qd > _2)
          throw mo = Qd = 0, Xd = wy = null, Error(
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
          );
        mo > b2 && (mo = 0, Xd = null, console.error(
          "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
        )), t.alternate === null && t.flags & 4098 && Om(t);
        for (var e = t, i = e.return; i !== null; )
          e.alternate === null && e.flags & 4098 && Om(t), e = i, i = e.return;
        return e.tag === 3 ? e.stateNode : null;
      }
      function Bn() {
        var t = eo;
        return eo = 0, t;
      }
      function Au(t) {
        var e = eo;
        return eo = t, e;
      }
      function Ru(t) {
        var e = eo;
        return eo += t, e;
      }
      function mc(t) {
        ul = Fr(), 0 > t.actualStartTime && (t.actualStartTime = ul);
      }
      function xo(t) {
        if (0 <= ul) {
          var e = Fr() - ul;
          t.actualDuration += e, t.selfBaseDuration = e, ul = -1;
        }
      }
      function Kf(t) {
        if (0 <= ul) {
          var e = Fr() - ul;
          t.actualDuration += e, ul = -1;
        }
      }
      function ml() {
        if (0 <= ul) {
          var t = Fr() - ul;
          ul = -1, eo += t;
        }
      }
      function pl() {
        ul = Fr();
      }
      function pc(t) {
        for (var e = t.child; e; )
          t.actualDuration += e.actualDuration, e = e.sibling;
      }
      function yl(t) {
        t !== Pr && t.next === null && (Pr === null ? np = Pr = t : Pr = Pr.next = t), ap = !0, F.actQueue !== null ? Sy || (Sy = !0, zo(Jf)) : vy || (vy = !0, zo(Jf));
      }
      function Ki(t, e) {
        if (!gy && ap) {
          gy = !0;
          do
            for (var i = !1, c = np; c !== null; ) {
              if (t !== 0) {
                var r = c.pendingLanes;
                if (r === 0) var d = 0;
                else {
                  var v = c.suspendedLanes, b = c.pingedLanes;
                  d = (1 << 31 - Zn(42 | t) + 1) - 1, d &= r & ~(v & ~b), d = d & 201326677 ? d & 201326677 | 1 : d ? d | 2 : 0;
                }
                d !== 0 && (i = !0, wf(c, d));
              } else
                d = he, d = Ot(
                  c,
                  c === We ? d : 0
                ), !(d & 3) || Ye(c, d) || (i = !0, wf(c, d));
              c = c.next;
            }
          while (i);
          gy = !1;
        }
      }
      function Jf() {
        ap = Sy = vy = !1;
        var t = 0;
        Ir !== 0 && (Lc() && (t = Ir), Ir = 0);
        for (var e = p(), i = null, c = np; c !== null; ) {
          var r = c.next, d = lm(c, e);
          d === 0 ? (c.next = null, i === null ? np = r : i.next = r, r === null && (Pr = i)) : (i = c, (t !== 0 || d & 3) && (ap = !0)), c = r;
        }
        Ki(t);
      }
      function lm(t, e) {
        for (var i = t.suspendedLanes, c = t.pingedLanes, r = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d; ) {
          var v = 31 - Zn(d), b = 1 << v, Y = r[v];
          Y === -1 ? (!(b & i) || b & c) && (r[v] = ue(b, e)) : Y <= e && (t.expiredLanes |= b), d &= ~b;
        }
        if (e = We, i = he, i = Ot(
          t,
          t === e ? i : 0
        ), c = t.callbackNode, i === 0 || t === e && Fe === ro || t.cancelPendingCommit !== null)
          return c !== null && To(c), t.callbackNode = null, t.callbackPriority = 0;
        if (!(i & 3) || Ye(t, i)) {
          if (e = i & -i, e !== t.callbackPriority || F.actQueue !== null && c !== Ey)
            To(c);
          else return e;
          switch (rl(i)) {
            case 2:
            case 8:
              i = O;
              break;
            case 32:
              i = Q;
              break;
            case 268435456:
              i = tt;
              break;
            default:
              i = Q;
          }
          return c = Lf.bind(null, t), F.actQueue !== null ? (F.actQueue.push(c), i = Ey) : i = l(i, c), t.callbackPriority = e, t.callbackNode = i, e;
        }
        return c !== null && To(c), t.callbackPriority = 2, t.callbackNode = null, 2;
      }
      function Lf(t, e) {
        ep = tp = !1;
        var i = t.callbackNode;
        if (lu() && t.callbackNode !== i)
          return null;
        var c = he;
        return c = Ot(
          t,
          t === We ? c : 0
        ), c === 0 ? null : (Gu(
          t,
          c,
          e
        ), lm(t, p()), t.callbackNode != null && t.callbackNode === i ? Lf.bind(null, t) : null);
      }
      function wf(t, e) {
        if (lu()) return null;
        tp = ep, ep = !1, Gu(t, e, !0);
      }
      function To(t) {
        t !== Ey && t !== null && s(t);
      }
      function zo(t) {
        F.actQueue !== null && F.actQueue.push(function() {
          return t(), null;
        }), Qs ? wc(function() {
          (qe & (xa | Su)) !== Ka ? l(_, t) : t();
        }) : l(_, t);
      }
      function Mo() {
        return Ir === 0 && (Ir = Me()), Ir;
      }
      function im(t, e) {
        if (xd === null) {
          var i = xd = [];
          xy = 0, no = Mo(), $r = {
            status: "pending",
            value: void 0,
            then: function(c) {
              i.push(c);
            }
          };
        }
        return xy++, e.then(Wf, Wf), e;
      }
      function Wf() {
        if (--xy === 0 && xd !== null) {
          $r !== null && ($r.status = "fulfilled");
          var t = xd;
          xd = null, no = 0, $r = null;
          for (var e = 0; e < t.length; e++) (0, t[e])();
        }
      }
      function um(t, e) {
        var i = [], c = {
          status: "pending",
          value: null,
          reason: null,
          then: function(r) {
            i.push(r);
          }
        };
        return t.then(
          function() {
            c.status = "fulfilled", c.value = e;
            for (var r = 0; r < i.length; r++) (0, i[r])(e);
          },
          function(r) {
            for (c.status = "rejected", c.reason = r, r = 0; r < i.length; r++)
              (0, i[r])(void 0);
          }
        ), c;
      }
      function _o(t) {
        t.updateQueue = {
          baseState: t.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function Ff(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null
        });
      }
      function mi(t) {
        return {
          lane: t,
          tag: N0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Na(t, e, i) {
        var c = t.updateQueue;
        if (c === null) return null;
        if (c = c.shared, zy === c && !O0) {
          var r = P(t);
          console.error(
            `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
            r
          ), O0 = !0;
        }
        return (qe & xa) !== Ka ? (r = c.pending, r === null ? e.next = e : (e.next = r.next, r.next = e), c.pending = e, e = ps(t), aa(t, null, i), e) : (Ke(t, c, e, i), ps(t));
      }
      function ys(t, e, i) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (i & 4194176) !== 0)) {
          var c = e.lanes;
          c &= t.pendingLanes, i |= c, e.lanes = i, Se(t, i);
        }
      }
      function Cu(t, e) {
        var i = t.updateQueue, c = t.alternate;
        if (c !== null && (c = c.updateQueue, i === c)) {
          var r = null, d = null;
          if (i = i.firstBaseUpdate, i !== null) {
            do {
              var v = {
                lane: i.lane,
                tag: i.tag,
                payload: i.payload,
                callback: null,
                next: null
              };
              d === null ? r = d = v : d = d.next = v, i = i.next;
            } while (i !== null);
            d === null ? r = d = e : d = d.next = e;
          } else r = d = e;
          i = {
            baseState: c.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: d,
            shared: c.shared,
            callbacks: c.callbacks
          }, t.updateQueue = i;
          return;
        }
        t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = e : t.next = e, i.lastBaseUpdate = e;
      }
      function Ji() {
        if (My) {
          var t = $r;
          if (t !== null) throw t;
        }
      }
      function vs(t, e, i, c) {
        My = !1;
        var r = t.updateQueue;
        Ps = !1, zy = r.shared;
        var d = r.firstBaseUpdate, v = r.lastBaseUpdate, b = r.shared.pending;
        if (b !== null) {
          r.shared.pending = null;
          var Y = b, W = Y.next;
          Y.next = null, v === null ? d = W : v.next = W, v = Y;
          var dt = t.alternate;
          dt !== null && (dt = dt.updateQueue, b = dt.lastBaseUpdate, b !== v && (b === null ? dt.firstBaseUpdate = W : b.next = W, dt.lastBaseUpdate = Y));
        }
        if (d !== null) {
          var yt = r.baseState;
          v = 0, dt = W = Y = null, b = d;
          do {
            var Et = b.lane & -536870913, pe = Et !== b.lane;
            if (pe ? (he & Et) === Et : (c & Et) === Et) {
              Et !== 0 && Et === no && (My = !0), dt !== null && (dt = dt.next = {
                lane: 0,
                tag: b.tag,
                payload: b.payload,
                callback: null,
                next: null
              });
              t: {
                Et = t;
                var De = b, Sf = e, gf = i;
                switch (De.tag) {
                  case D0:
                    if (De = De.payload, typeof De == "function") {
                      of = !0;
                      var Yi = De.call(
                        gf,
                        yt,
                        Sf
                      );
                      if (Et.mode & 8) {
                        D(!0);
                        try {
                          De.call(gf, yt, Sf);
                        } finally {
                          D(!1);
                        }
                      }
                      of = !1, yt = Yi;
                      break t;
                    }
                    yt = De;
                    break t;
                  case Ty:
                    Et.flags = Et.flags & -65537 | 128;
                  case N0:
                    if (Yi = De.payload, typeof Yi == "function") {
                      if (of = !0, De = Yi.call(
                        gf,
                        yt,
                        Sf
                      ), Et.mode & 8) {
                        D(!0);
                        try {
                          Yi.call(gf, yt, Sf);
                        } finally {
                          D(!1);
                        }
                      }
                      of = !1;
                    } else De = Yi;
                    if (De == null) break t;
                    yt = Vn({}, yt, De);
                    break t;
                  case U0:
                    Ps = !0;
                }
              }
              Et = b.callback, Et !== null && (t.flags |= 64, pe && (t.flags |= 8192), pe = r.callbacks, pe === null ? r.callbacks = [Et] : pe.push(Et));
            } else
              pe = {
                lane: Et,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              }, dt === null ? (W = dt = pe, Y = yt) : dt = dt.next = pe, v |= Et;
            if (b = b.next, b === null) {
              if (b = r.shared.pending, b === null)
                break;
              pe = b, b = pe.next, pe.next = null, r.lastBaseUpdate = pe, r.shared.pending = null;
            }
          } while (!0);
          dt === null && (Y = yt), r.baseState = Y, r.firstBaseUpdate = W, r.lastBaseUpdate = dt, d === null && (r.shared.lanes = 0), nc |= v, t.lanes = v, t.memoizedState = yt;
        }
        zy = null;
      }
      function bo(t, e) {
        if (typeof t != "function")
          throw Error(
            "Invalid argument passed as callback. Expected a function. Instead received: " + t
          );
        t.call(e);
      }
      function sm(t, e) {
        var i = t.shared.hiddenCallbacks;
        if (i !== null)
          for (t.shared.hiddenCallbacks = null, t = 0; t < i.length; t++)
            bo(i[t], e);
      }
      function Pf(t, e) {
        var i = t.callbacks;
        if (i !== null)
          for (t.callbacks = null, t = 0; t < i.length; t++)
            bo(i[t], e);
      }
      function yc(t, e) {
        if (Z(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
          return !1;
        var i = Object.keys(t), c = Object.keys(e);
        if (i.length !== c.length) return !1;
        for (c = 0; c < i.length; c++) {
          var r = i[c];
          if (!m2.call(e, r) || !Z(t[r], e[r]))
            return !1;
        }
        return !0;
      }
      function If() {
        return { didWarnAboutUncachedPromise: !1, thenables: [] };
      }
      function Ao(t) {
        return t = t.status, t === "fulfilled" || t === "rejected";
      }
      function vc() {
      }
      function $f(t, e, i) {
        F.actQueue !== null && (F.didUsePromise = !0);
        var c = t.thenables;
        switch (i = c[i], i === void 0 ? c.push(e) : i !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
          "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
        )), e.then(vc, vc), e = i), e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, kf(t), t;
          default:
            if (typeof e.status == "string")
              e.then(vc, vc);
            else {
              if (t = We, t !== null && 100 < t.shellSuspendCounter)
                throw Error(
                  "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
                );
              t = e, t.status = "pending", t.then(
                function(r) {
                  if (e.status === "pending") {
                    var d = e;
                    d.status = "fulfilled", d.value = r;
                  }
                },
                function(r) {
                  if (e.status === "pending") {
                    var d = e;
                    d.status = "rejected", d.reason = r;
                  }
                }
              );
            }
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw t = e.reason, kf(t), t;
            }
            throw kr = e, sp = !0, ip;
        }
      }
      function Ro() {
        if (kr === null)
          throw Error(
            "Expected a suspended thenable. This is a bug in React. Please file an issue."
          );
        var t = kr;
        return kr = null, sp = !1, t;
      }
      function kf(t) {
        if (t === ip)
          throw Error(
            "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
          );
      }
      function bn(t) {
        var e = ae;
        return t != null && (ae = e === null ? t : e.concat(t)), e;
      }
      function Sc(t, e, i) {
        for (var c = Object.keys(t.props), r = 0; r < c.length; r++) {
          var d = c[r];
          if (d !== "children" && d !== "key") {
            e === null && (e = Rr(t, i.mode, 0), e._debugInfo = ae, e.return = i), it(
              e,
              function(v) {
                console.error(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  v
                );
              },
              d
            );
            break;
          }
        }
      }
      function Ss(t) {
        var e = Rd;
        return Rd += 1, tf === null && (tf = If()), $f(tf, t, e);
      }
      function gs(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null;
      }
      function gc(t, e) {
        throw e.$$typeof === Qm ? Error(
          `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
        ) : (t = Object.prototype.toString.call(e), Error(
          "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
        ));
      }
      function Co(t, e) {
        var i = P(t) || "Component";
        F0[i] || (F0[i] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
          `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
          e,
          e,
          e
        ) : console.error(
          `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
          e,
          e,
          i,
          e,
          i
        ));
      }
      function No(t, e) {
        var i = P(t) || "Component";
        P0[i] || (P0[i] = !0, e = String(e), t.tag === 3 ? console.error(
          `Symbols are not valid as a React child.
  root.render(%s)`,
          e
        ) : console.error(
          `Symbols are not valid as a React child.
  <%s>%s</%s>`,
          i,
          e,
          i
        ));
      }
      function th(t) {
        function e(B, H) {
          if (t) {
            var j = B.deletions;
            j === null ? (B.deletions = [H], B.flags |= 16) : j.push(H);
          }
        }
        function i(B, H) {
          if (!t) return null;
          for (; H !== null; )
            e(B, H), H = H.sibling;
          return null;
        }
        function c(B) {
          for (var H = /* @__PURE__ */ new Map(); B !== null; )
            B.key !== null ? H.set(B.key, B) : H.set(B.index, B), B = B.sibling;
          return H;
        }
        function r(B, H) {
          return B = uu(B, H), B.index = 0, B.sibling = null, B;
        }
        function d(B, H, j) {
          return B.index = j, t ? (j = B.alternate, j !== null ? (j = j.index, j < H ? (B.flags |= 33554434, H) : j) : (B.flags |= 33554434, H)) : (B.flags |= 1048576, H);
        }
        function v(B) {
          return t && B.alternate === null && (B.flags |= 33554434), B;
        }
        function b(B, H, j, et) {
          return H === null || H.tag !== 6 ? (H = td(
            j,
            B.mode,
            et
          ), H.return = B, H._debugOwner = B, H._debugInfo = ae, H) : (H = r(H, j), H.return = B, H._debugInfo = ae, H);
        }
        function Y(B, H, j, et) {
          var _t = j.type;
          return _t === Zu ? (H = dt(
            B,
            H,
            j.props.children,
            et,
            j.key
          ), Sc(j, H, B), H) : H !== null && (H.elementType === _t || Bm(H, j) || typeof _t == "object" && _t !== null && _t.$$typeof === Ya && Is(_t) === H.type) ? (H = r(H, j.props), gs(H, j), H.return = B, H._debugOwner = j._owner, H._debugInfo = ae, H) : (H = Rr(j, B.mode, et), gs(H, j), H.return = B, H._debugInfo = ae, H);
        }
        function W(B, H, j, et) {
          return H === null || H.tag !== 4 || H.stateNode.containerInfo !== j.containerInfo || H.stateNode.implementation !== j.implementation ? (H = Cr(j, B.mode, et), H.return = B, H._debugInfo = ae, H) : (H = r(H, j.children || []), H.return = B, H._debugInfo = ae, H);
        }
        function dt(B, H, j, et, _t) {
          return H === null || H.tag !== 7 ? (H = Qu(
            j,
            B.mode,
            et,
            _t
          ), H.return = B, H._debugOwner = B, H._debugInfo = ae, H) : (H = r(H, j), H.return = B, H._debugInfo = ae, H);
        }
        function yt(B, H, j) {
          if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
            return H = td(
              "" + H,
              B.mode,
              j
            ), H.return = B, H._debugOwner = B, H._debugInfo = ae, H;
          if (typeof H == "object" && H !== null) {
            switch (H.$$typeof) {
              case Xu:
                return j = Rr(
                  H,
                  B.mode,
                  j
                ), gs(j, H), j.return = B, B = bn(H._debugInfo), j._debugInfo = ae, ae = B, j;
              case un:
                return H = Cr(
                  H,
                  B.mode,
                  j
                ), H.return = B, H._debugInfo = ae, H;
              case Ya:
                var et = bn(H._debugInfo);
                return H = Is(H), B = yt(B, H, j), ae = et, B;
            }
            if (Cn(H) || k(H))
              return j = Qu(
                H,
                B.mode,
                j,
                null
              ), j.return = B, j._debugOwner = B, B = bn(H._debugInfo), j._debugInfo = ae, ae = B, j;
            if (typeof H.then == "function")
              return et = bn(H._debugInfo), B = yt(
                B,
                Ss(H),
                j
              ), ae = et, B;
            if (H.$$typeof === Ml)
              return yt(
                B,
                gi(B, H),
                j
              );
            gc(B, H);
          }
          return typeof H == "function" && Co(B, H), typeof H == "symbol" && No(B, H), null;
        }
        function Et(B, H, j, et) {
          var _t = H !== null ? H.key : null;
          if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
            return _t !== null ? null : b(B, H, "" + j, et);
          if (typeof j == "object" && j !== null) {
            switch (j.$$typeof) {
              case Xu:
                return j.key === _t ? (_t = bn(j._debugInfo), B = Y(
                  B,
                  H,
                  j,
                  et
                ), ae = _t, B) : null;
              case un:
                return j.key === _t ? W(B, H, j, et) : null;
              case Ya:
                return _t = bn(j._debugInfo), j = Is(j), B = Et(
                  B,
                  H,
                  j,
                  et
                ), ae = _t, B;
            }
            if (Cn(j) || k(j))
              return _t !== null ? null : (_t = bn(j._debugInfo), B = dt(
                B,
                H,
                j,
                et,
                null
              ), ae = _t, B);
            if (typeof j.then == "function")
              return _t = bn(j._debugInfo), B = Et(
                B,
                H,
                Ss(j),
                et
              ), ae = _t, B;
            if (j.$$typeof === Ml)
              return Et(
                B,
                H,
                gi(B, j),
                et
              );
            gc(B, j);
          }
          return typeof j == "function" && Co(B, j), typeof j == "symbol" && No(B, j), null;
        }
        function pe(B, H, j, et, _t) {
          if (typeof et == "string" && et !== "" || typeof et == "number" || typeof et == "bigint")
            return B = B.get(j) || null, b(H, B, "" + et, _t);
          if (typeof et == "object" && et !== null) {
            switch (et.$$typeof) {
              case Xu:
                return j = B.get(
                  et.key === null ? j : et.key
                ) || null, B = bn(et._debugInfo), H = Y(
                  H,
                  j,
                  et,
                  _t
                ), ae = B, H;
              case un:
                return B = B.get(
                  et.key === null ? j : et.key
                ) || null, W(H, B, et, _t);
              case Ya:
                var ze = bn(et._debugInfo);
                return et = Is(et), H = pe(
                  B,
                  H,
                  j,
                  et,
                  _t
                ), ae = ze, H;
            }
            if (Cn(et) || k(et))
              return j = B.get(j) || null, B = bn(et._debugInfo), H = dt(
                H,
                j,
                et,
                _t,
                null
              ), ae = B, H;
            if (typeof et.then == "function")
              return ze = bn(et._debugInfo), H = pe(
                B,
                H,
                j,
                Ss(et),
                _t
              ), ae = ze, H;
            if (et.$$typeof === Ml)
              return pe(
                B,
                H,
                j,
                gi(H, et),
                _t
              );
            gc(H, et);
          }
          return typeof et == "function" && Co(H, et), typeof et == "symbol" && No(H, et), null;
        }
        function De(B, H, j, et) {
          if (typeof j != "object" || j === null) return et;
          switch (j.$$typeof) {
            case Xu:
            case un:
              J(B, H, j);
              var _t = j.key;
              if (typeof _t != "string") break;
              if (et === null) {
                et = /* @__PURE__ */ new Set(), et.add(_t);
                break;
              }
              if (!et.has(_t)) {
                et.add(_t);
                break;
              }
              it(H, function() {
                console.error(
                  "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                  _t
                );
              });
              break;
            case Ya:
              j = Is(j), De(B, H, j, et);
          }
          return et;
        }
        function Sf(B, H, j, et) {
          for (var _t = null, ze = null, wt = null, It = H, kt = H = 0, nn = null; It !== null && kt < j.length; kt++) {
            It.index > kt ? (nn = It, It = null) : nn = It.sibling;
            var zn = Et(
              B,
              It,
              j[kt],
              et
            );
            if (zn === null) {
              It === null && (It = nn);
              break;
            }
            _t = De(
              B,
              zn,
              j[kt],
              _t
            ), t && It && zn.alternate === null && e(B, It), H = d(zn, H, kt), wt === null ? ze = zn : wt.sibling = zn, wt = zn, It = nn;
          }
          if (kt === j.length)
            return i(B, It), Te && ke(B, kt), ze;
          if (It === null) {
            for (; kt < j.length; kt++)
              It = yt(B, j[kt], et), It !== null && (_t = De(
                B,
                It,
                j[kt],
                _t
              ), H = d(
                It,
                H,
                kt
              ), wt === null ? ze = It : wt.sibling = It, wt = It);
            return Te && ke(B, kt), ze;
          }
          for (It = c(It); kt < j.length; kt++)
            nn = pe(
              It,
              B,
              kt,
              j[kt],
              et
            ), nn !== null && (_t = De(
              B,
              nn,
              j[kt],
              _t
            ), t && nn.alternate !== null && It.delete(
              nn.key === null ? kt : nn.key
            ), H = d(
              nn,
              H,
              kt
            ), wt === null ? ze = nn : wt.sibling = nn, wt = nn);
          return t && It.forEach(function(is) {
            return e(B, is);
          }), Te && ke(B, kt), ze;
        }
        function gf(B, H, j, et) {
          if (j == null)
            throw Error("An iterable object provided no iterator.");
          for (var _t = null, ze = null, wt = H, It = H = 0, kt = null, nn = null, zn = j.next(); wt !== null && !zn.done; It++, zn = j.next()) {
            wt.index > It ? (kt = wt, wt = null) : kt = wt.sibling;
            var is = Et(B, wt, zn.value, et);
            if (is === null) {
              wt === null && (wt = kt);
              break;
            }
            nn = De(
              B,
              is,
              zn.value,
              nn
            ), t && wt && is.alternate === null && e(B, wt), H = d(is, H, It), ze === null ? _t = is : ze.sibling = is, ze = is, wt = kt;
          }
          if (zn.done)
            return i(B, wt), Te && ke(B, It), _t;
          if (wt === null) {
            for (; !zn.done; It++, zn = j.next())
              wt = yt(B, zn.value, et), wt !== null && (nn = De(
                B,
                wt,
                zn.value,
                nn
              ), H = d(
                wt,
                H,
                It
              ), ze === null ? _t = wt : ze.sibling = wt, ze = wt);
            return Te && ke(B, It), _t;
          }
          for (wt = c(wt); !zn.done; It++, zn = j.next())
            kt = pe(
              wt,
              B,
              It,
              zn.value,
              et
            ), kt !== null && (nn = De(
              B,
              kt,
              zn.value,
              nn
            ), t && kt.alternate !== null && wt.delete(
              kt.key === null ? It : kt.key
            ), H = d(
              kt,
              H,
              It
            ), ze === null ? _t = kt : ze.sibling = kt, ze = kt);
          return t && wt.forEach(function(N2) {
            return e(B, N2);
          }), Te && ke(B, It), _t;
        }
        function Yi(B, H, j, et) {
          if (typeof j == "object" && j !== null && j.type === Zu && j.key === null && (Sc(j, null, B), j = j.props.children), typeof j == "object" && j !== null) {
            switch (j.$$typeof) {
              case Xu:
                var _t = bn(j._debugInfo);
                t: {
                  for (var ze = j.key; H !== null; ) {
                    if (H.key === ze) {
                      if (ze = j.type, ze === Zu) {
                        if (H.tag === 7) {
                          i(
                            B,
                            H.sibling
                          ), et = r(
                            H,
                            j.props.children
                          ), et.return = B, et._debugOwner = j._owner, et._debugInfo = ae, Sc(j, et, B), B = et;
                          break t;
                        }
                      } else if (H.elementType === ze || Bm(
                        H,
                        j
                      ) || typeof ze == "object" && ze !== null && ze.$$typeof === Ya && Is(ze) === H.type) {
                        i(
                          B,
                          H.sibling
                        ), et = r(H, j.props), gs(et, j), et.return = B, et._debugOwner = j._owner, et._debugInfo = ae, B = et;
                        break t;
                      }
                      i(B, H);
                      break;
                    } else e(B, H);
                    H = H.sibling;
                  }
                  j.type === Zu ? (et = Qu(
                    j.props.children,
                    B.mode,
                    et,
                    j.key
                  ), et.return = B, et._debugOwner = B, et._debugInfo = ae, Sc(j, et, B), B = et) : (et = Rr(
                    j,
                    B.mode,
                    et
                  ), gs(et, j), et.return = B, et._debugInfo = ae, B = et);
                }
                return B = v(B), ae = _t, B;
              case un:
                t: {
                  for (_t = j, j = _t.key; H !== null; ) {
                    if (H.key === j)
                      if (H.tag === 4 && H.stateNode.containerInfo === _t.containerInfo && H.stateNode.implementation === _t.implementation) {
                        i(
                          B,
                          H.sibling
                        ), et = r(
                          H,
                          _t.children || []
                        ), et.return = B, B = et;
                        break t;
                      } else {
                        i(B, H);
                        break;
                      }
                    else e(B, H);
                    H = H.sibling;
                  }
                  et = Cr(
                    _t,
                    B.mode,
                    et
                  ), et.return = B, B = et;
                }
                return v(B);
              case Ya:
                return _t = bn(j._debugInfo), j = Is(j), B = Yi(
                  B,
                  H,
                  j,
                  et
                ), ae = _t, B;
            }
            if (Cn(j))
              return _t = bn(j._debugInfo), B = Sf(
                B,
                H,
                j,
                et
              ), ae = _t, B;
            if (k(j)) {
              if (_t = bn(j._debugInfo), ze = k(j), typeof ze != "function")
                throw Error(
                  "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
                );
              var wt = ze.call(j);
              return wt === j ? (B.tag !== 0 || Object.prototype.toString.call(B.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(wt) !== "[object Generator]") && (w0 || console.error(
                "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
              ), w0 = !0) : j.entries !== ze || Ry || (console.error(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ), Ry = !0), B = gf(
                B,
                H,
                wt,
                et
              ), ae = _t, B;
            }
            if (typeof j.then == "function")
              return _t = bn(j._debugInfo), B = Yi(
                B,
                H,
                Ss(j),
                et
              ), ae = _t, B;
            if (j.$$typeof === Ml)
              return Yi(
                B,
                H,
                gi(B, j),
                et
              );
            gc(B, j);
          }
          return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (_t = "" + j, H !== null && H.tag === 6 ? (i(
            B,
            H.sibling
          ), et = r(H, _t), et.return = B, B = et) : (i(B, H), et = td(
            _t,
            B.mode,
            et
          ), et.return = B, et._debugOwner = B, et._debugInfo = ae, B = et), v(B)) : (typeof j == "function" && Co(B, j), typeof j == "symbol" && No(B, j), i(B, H));
        }
        return function(B, H, j, et) {
          var _t = ae;
          ae = null;
          try {
            Rd = 0;
            var ze = Yi(
              B,
              H,
              j,
              et
            );
            return tf = null, ze;
          } catch (nn) {
            if (nn === ip) throw nn;
            var wt = z(29, nn, null, B.mode);
            wt.lanes = et, wt.return = B;
            var It = wt._debugInfo = ae;
            if (wt._debugOwner = B._debugOwner, It != null) {
              for (var kt = It.length - 1; 0 <= kt; kt--)
                if (typeof It[kt].stack == "string") {
                  wt._debugOwner = It[kt];
                  break;
                }
            }
            return wt;
          } finally {
            ae = _t;
          }
        };
      }
      function Es(t, e) {
        var i = gu;
        ct(cp, i, t), ct(ef, e, t), gu = i | e.baseLanes;
      }
      function Ec(t) {
        ct(cp, gu, t), ct(
          ef,
          ef.current,
          t
        );
      }
      function xs(t) {
        gu = cp.current, w(ef, t), w(cp, t);
      }
      function pi(t) {
        var e = t.alternate;
        ct(
          Jn,
          Jn.current & nf,
          t
        ), ct(si, t, t), yu === null && (e === null || ef.current !== null || e.memoizedState !== null) && (yu = t);
      }
      function eh(t) {
        if (t.tag === 22) {
          if (ct(Jn, Jn.current, t), ct(si, t, t), yu === null) {
            var e = t.alternate;
            e !== null && e.memoizedState !== null && (yu = t);
          }
        } else Vl(t);
      }
      function Vl(t) {
        ct(Jn, Jn.current, t), ct(
          si,
          si.current,
          t
        );
      }
      function jl(t) {
        w(si, t), yu === t && (yu = null), w(Jn, t);
      }
      function xc(t) {
        for (var e = t; e !== null; ) {
          if (e.tag === 13) {
            var i = e.memoizedState;
            if (i !== null && (i = i.dehydrated, i === null || bl(i) || dd(i)))
              return e;
          } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e;
          } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return null;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        return null;
      }
      function Jt() {
        var t = I;
        ri === null ? ri = [t] : ri.push(t);
      }
      function rt() {
        var t = I;
        if (ri !== null && (es++, ri[es] !== t)) {
          var e = P(
            Lt
          );
          if (!$0.has(e) && ($0.add(e), ri !== null)) {
            for (var i = "", c = 0; c <= es; c++) {
              var r = ri[c], d = c === es ? t : r;
              for (r = c + 1 + ". " + r; 30 > r.length; )
                r += " ";
              r += d + `
`, i += r;
            }
            console.error(
              `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
              e,
              i
            );
          }
        }
      }
      function Nu(t) {
        t == null || Cn(t) || console.error(
          "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
          I,
          typeof t
        );
      }
      function Ts() {
        var t = P(Lt);
        tv.has(t) || (tv.add(t), console.error(
          "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
          t
        ));
      }
      function ln() {
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      }
      function Do(t, e) {
        if (Dd) return !1;
        if (e === null)
          return console.error(
            "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
            I
          ), !1;
        t.length !== e.length && console.error(
          `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
          I,
          "[" + e.join(", ") + "]",
          "[" + t.join(", ") + "]"
        );
        for (var i = 0; i < e.length && i < t.length; i++)
          if (!Z(t[i], e[i])) return !1;
        return !0;
      }
      function nh(t, e, i, c, r, d) {
        $s = d, Lt = e, ri = t !== null ? t._debugHookTypes : null, es = -1, Dd = t !== null && t.type !== e.type, (Object.prototype.toString.call(i) === "[object AsyncFunction]" || Object.prototype.toString.call(i) === "[object AsyncGeneratorFunction]") && (d = P(
          Lt
        ), Cy.has(d) || (Cy.add(d), console.error(
          "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, F.H = t !== null && t.memoizedState !== null ? tc : ri !== null ? uo : ks, io = d = (e.mode & 8) !== $e;
        var v = by(i, c, r);
        if (io = !1, lf && (v = Uo(
          e,
          i,
          c,
          r
        )), d) {
          D(!0);
          try {
            v = Uo(
              e,
              i,
              c,
              r
            );
          } finally {
            D(!1);
          }
        }
        return An(t, e), v;
      }
      function An(t, e) {
        e._debugHookTypes = ri, e.dependencies === null ? ts !== null && (e.dependencies = {
          lanes: 0,
          firstContext: null,
          _debugThenableState: ts
        }) : e.dependencies._debugThenableState = ts, F.H = vu;
        var i = Ze !== null && Ze.next !== null;
        if ($s = 0, ri = I = Un = Ze = Lt = null, es = -1, t !== null && (t.flags & 31457280) !== (e.flags & 31457280) && console.error(
          "Internal React error: Expected static flag was missing. Please notify the React team."
        ), op = !1, Nd = 0, ts = null, i)
          throw Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        t === null || kn || (t = t.dependencies, t !== null && fr(t) && (kn = !0)), sp ? (sp = !1, t = !0) : t = !1, t && (e = P(e) || "Unknown", k0.has(e) || Cy.has(e) || (k0.add(e), console.error(
          "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
        )));
      }
      function Uo(t, e, i, c) {
        Lt = t;
        var r = 0;
        do {
          if (lf && (ts = null), Nd = 0, lf = !1, r >= g2)
            throw Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop."
            );
          if (r += 1, Dd = !1, Un = Ze = null, t.updateQueue != null) {
            var d = t.updateQueue;
            d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
          }
          es = -1, F.H = so, d = by(e, i, c);
        } while (lf);
        return d;
      }
      function cm() {
        var t = F.H, e = t.useState()[0];
        return e = typeof e.then == "function" ? zs(e) : e, t = t.useState()[0], (Ze !== null ? Ze.memoizedState : null) !== t && (Lt.flags |= 1024), e;
      }
      function Oo() {
        var t = rp !== 0;
        return rp = 0, t;
      }
      function Ho(t, e, i) {
        e.updateQueue = t.updateQueue, e.flags = (e.mode & 16) !== $e ? e.flags & -201328645 : e.flags & -2053, t.lanes &= ~i;
      }
      function Bo(t) {
        if (op) {
          for (t = t.memoizedState; t !== null; ) {
            var e = t.queue;
            e !== null && (e.pending = null), t = t.next;
          }
          op = !1;
        }
        $s = 0, ri = Un = Ze = Lt = null, es = -1, I = null, lf = !1, Nd = rp = 0, ts = null;
      }
      function Rn() {
        var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Un === null ? Lt.memoizedState = Un = t : Un = Un.next = t, Un;
      }
      function Ae() {
        if (Ze === null) {
          var t = Lt.alternate;
          t = t !== null ? t.memoizedState : null;
        } else t = Ze.next;
        var e = Un === null ? Lt.memoizedState : Un.next;
        if (e !== null)
          Un = e, Ze = t;
        else {
          if (t === null)
            throw Lt.alternate === null ? Error(
              "Update hook called on initial render. This is likely a bug in React. Please file an issue."
            ) : Error("Rendered more hooks than during the previous render.");
          Ze = t, t = {
            memoizedState: Ze.memoizedState,
            baseState: Ze.baseState,
            baseQueue: Ze.baseQueue,
            queue: Ze.queue,
            next: null
          }, Un === null ? Lt.memoizedState = Un = t : Un = Un.next = t;
        }
        return Un;
      }
      function zs(t) {
        var e = Nd;
        return Nd += 1, ts === null && (ts = If()), t = $f(ts, t, e), e = Lt, (Un === null ? e.memoizedState : Un.next) === null && (e = e.alternate, F.H = e !== null && e.memoizedState !== null ? tc : ks), t;
      }
      function yi(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function") return zs(t);
          if (t.$$typeof === Ml) return Le(t);
        }
        throw Error("An unsupported type was passed to use(): " + String(t));
      }
      function Li(t) {
        var e = null, i = Lt.updateQueue;
        if (i !== null && (e = i.memoCache), e == null) {
          var c = Lt.alternate;
          c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (e = {
            data: c.data.map(function(r) {
              return r.slice();
            }),
            index: 0
          })));
        }
        if (e == null && (e = { data: [], index: 0 }), i === null && (i = Ny(), Lt.updateQueue = i), i.memoCache = e, i = e.data[e.index], i === void 0 || Dd)
          for (i = e.data[e.index] = Array(t), c = 0; c < t; c++)
            i[c] = Br;
        else
          i.length !== t && console.error(
            "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
            i.length,
            t
          );
        return e.index++, i;
      }
      function Da(t, e) {
        return typeof e == "function" ? e(t) : e;
      }
      function Tc(t, e, i) {
        var c = Rn();
        if (i !== void 0) {
          var r = i(e);
          if (io) {
            D(!0);
            try {
              i(e);
            } finally {
              D(!1);
            }
          }
        } else r = e;
        return c.memoizedState = c.baseState = r, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: r
        }, c.queue = t, t = t.dispatch = fm.bind(
          null,
          Lt,
          t
        ), [c.memoizedState, t];
      }
      function Du(t) {
        var e = Ae();
        return zc(e, Ze, t);
      }
      function zc(t, e, i) {
        var c = t.queue;
        if (c === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        c.lastRenderedReducer = i;
        var r = t.baseQueue, d = c.pending;
        if (d !== null) {
          if (r !== null) {
            var v = r.next;
            r.next = d.next, d.next = v;
          }
          e.baseQueue !== r && console.error(
            "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
          ), e.baseQueue = r = d, c.pending = null;
        }
        if (d = t.baseState, r === null) t.memoizedState = d;
        else {
          e = r.next;
          var b = v = null, Y = null, W = e, dt = !1;
          do {
            var yt = W.lane & -536870913;
            if (yt !== W.lane ? (he & yt) === yt : ($s & yt) === yt) {
              var Et = W.revertLane;
              if (Et === 0)
                Y !== null && (Y = Y.next = {
                  lane: 0,
                  revertLane: 0,
                  action: W.action,
                  hasEagerState: W.hasEagerState,
                  eagerState: W.eagerState,
                  next: null
                }), yt === no && (dt = !0);
              else if (($s & Et) === Et) {
                W = W.next, Et === no && (dt = !0);
                continue;
              } else
                yt = {
                  lane: 0,
                  revertLane: W.revertLane,
                  action: W.action,
                  hasEagerState: W.hasEagerState,
                  eagerState: W.eagerState,
                  next: null
                }, Y === null ? (b = Y = yt, v = d) : Y = Y.next = yt, Lt.lanes |= Et, nc |= Et;
              yt = W.action, io && i(d, yt), d = W.hasEagerState ? W.eagerState : i(d, yt);
            } else
              Et = {
                lane: yt,
                revertLane: W.revertLane,
                action: W.action,
                hasEagerState: W.hasEagerState,
                eagerState: W.eagerState,
                next: null
              }, Y === null ? (b = Y = Et, v = d) : Y = Y.next = Et, Lt.lanes |= yt, nc |= yt;
            W = W.next;
          } while (W !== null && W !== e);
          if (Y === null ? v = d : Y.next = b, !Z(d, t.memoizedState) && (kn = !0, dt && (i = $r, i !== null)))
            throw i;
          t.memoizedState = d, t.baseState = v, t.baseQueue = Y, c.lastRenderedState = d;
        }
        return r === null && (c.lanes = 0), [t.memoizedState, c.dispatch];
      }
      function Uu(t) {
        var e = Ae(), i = e.queue;
        if (i === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        i.lastRenderedReducer = t;
        var c = i.dispatch, r = i.pending, d = e.memoizedState;
        if (r !== null) {
          i.pending = null;
          var v = r = r.next;
          do
            d = t(d, v.action), v = v.next;
          while (v !== r);
          Z(d, e.memoizedState) || (kn = !0), e.memoizedState = d, e.baseQueue === null && (e.baseState = d), i.lastRenderedState = d;
        }
        return [d, c];
      }
      function Mc(t, e, i) {
        var c = Lt, r = Rn();
        if (Te) {
          if (i === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          var d = i();
          af || d === i() || (console.error(
            "The result of getServerSnapshot should be cached to avoid an infinite loop"
          ), af = !0);
        } else {
          if (d = e(), af || (i = e(), Z(d, i) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), af = !0)), We === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          he & 60 || qo(c, e, d);
        }
        return r.memoizedState = d, i = { value: d, getSnapshot: e }, r.queue = i, bs(
          Gl.bind(null, c, i, t),
          [t]
        ), c.flags |= 2048, Fi(
          oi | Ln,
          ah.bind(
            null,
            c,
            i,
            d,
            e
          ),
          { destroy: void 0 },
          null
        ), d;
      }
      function _c(t, e, i) {
        var c = Lt, r = Ae(), d = Te;
        if (d) {
          if (i === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          i = i();
        } else if (i = e(), !af) {
          var v = e();
          Z(i, v) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), af = !0);
        }
        (v = !Z(
          (Ze || r).memoizedState,
          i
        )) && (r.memoizedState = i, kn = !0), r = r.queue;
        var b = Gl.bind(null, c, r, t);
        if (wn(2048, Ln, b, [t]), r.getSnapshot !== e || v || Un !== null && Un.memoizedState.tag & oi) {
          if (c.flags |= 2048, Fi(
            oi | Ln,
            ah.bind(
              null,
              c,
              r,
              i,
              e
            ),
            { destroy: void 0 },
            null
          ), We === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          d || $s & 60 || qo(c, e, i);
        }
        return i;
      }
      function qo(t, e, i) {
        t.flags |= 16384, t = { getSnapshot: e, value: i }, e = Lt.updateQueue, e === null ? (e = Ny(), Lt.updateQueue = e, e.stores = [t]) : (i = e.stores, i === null ? e.stores = [t] : i.push(t));
      }
      function ah(t, e, i, c) {
        e.value = i, e.getSnapshot = c, Yo(e) && om(t);
      }
      function Gl(t, e, i) {
        return i(function() {
          Yo(e) && om(t);
        });
      }
      function Yo(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var i = e();
          return !Z(t, i);
        } catch {
          return !0;
        }
      }
      function om(t) {
        var e = Je(t, 2);
        e !== null && tn(e, t, 2);
      }
      function Vo(t) {
        var e = Rn();
        if (typeof t == "function") {
          var i = t;
          if (t = i(), io) {
            D(!0);
            try {
              i();
            } finally {
              D(!1);
            }
          }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Da,
          lastRenderedState: t
        }, e;
      }
      function Ql(t) {
        t = Vo(t);
        var e = t.queue, i = Pa.bind(
          null,
          Lt,
          e
        );
        return e.dispatch = i, [t.memoizedState, i];
      }
      function vl(t) {
        var e = Rn();
        e.memoizedState = e.baseState = t;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = i, e = $o.bind(
          null,
          Lt,
          !0,
          i
        ), i.dispatch = e, [t, e];
      }
      function jo(t, e) {
        var i = Ae();
        return Go(i, Ze, t, e);
      }
      function Go(t, e, i, c) {
        return t.baseState = i, zc(
          t,
          Ze,
          typeof c == "function" ? c : Da
        );
      }
      function Ms(t, e) {
        var i = Ae();
        return Ze !== null ? Go(i, Ze, t, e) : (i.baseState = t, [t, i.queue.dispatch]);
      }
      function Qo(t, e, i, c, r) {
        if (ko(t))
          throw Error("Cannot update form state while rendering.");
        if (t = e.action, t !== null) {
          var d = {
            payload: r,
            action: t,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(v) {
              d.listeners.push(v);
            }
          };
          F.T !== null ? i(!0) : d.isTransition = !1, c(d), i = e.pending, i === null ? (d.next = e.pending = d, wi(e, d)) : (d.next = i.next, e.pending = i.next = d);
        }
      }
      function wi(t, e) {
        var i = e.action, c = e.payload, r = t.state;
        if (e.isTransition) {
          var d = F.T, v = {};
          F.T = v, F.T._updatedFibers = /* @__PURE__ */ new Set();
          try {
            var b = i(r, c), Y = F.S;
            Y !== null && Y(v, b), qn(t, e, b);
          } catch (W) {
            Xo(t, e, W);
          } finally {
            F.T = d, d === null && v._updatedFibers && (t = v._updatedFibers.size, v._updatedFibers.clear(), 10 < t && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            ));
          }
        } else
          try {
            v = i(r, c), qn(t, e, v);
          } catch (W) {
            Xo(t, e, W);
          }
      }
      function qn(t, e, i) {
        i !== null && typeof i == "object" && typeof i.then == "function" ? (i.then(
          function(c) {
            bc(t, e, c);
          },
          function(c) {
            return Xo(t, e, c);
          }
        ), e.isTransition || console.error(
          "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
        )) : bc(t, e, i);
      }
      function bc(t, e, i) {
        e.status = "fulfilled", e.value = i, Zo(e), t.state = i, e = t.pending, e !== null && (i = e.next, i === e ? t.pending = null : (i = i.next, e.next = i, wi(t, i)));
      }
      function Xo(t, e, i) {
        var c = t.pending;
        if (t.pending = null, c !== null) {
          c = c.next;
          do
            e.status = "rejected", e.reason = i, Zo(e), e = e.next;
          while (e !== c);
        }
        t.action = null;
      }
      function Zo(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
      function _s(t, e) {
        return e;
      }
      function Wi(t, e) {
        if (Te) {
          var i = We.formState;
          if (i !== null) {
            t: {
              var c = Lt;
              if (Te) {
                if (da) {
                  var r = sn(
                    da,
                    pu
                  );
                  if (r) {
                    da = Ui(r), c = Wm(r);
                    break t;
                  }
                }
                ht(c);
              }
              c = !1;
            }
            c && (e = i[0]);
          }
        }
        i = Rn(), i.memoizedState = i.baseState = e, c = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _s,
          lastRenderedState: e
        }, i.queue = c, i = Pa.bind(
          null,
          Lt,
          c
        ), c.dispatch = i, c = Vo(!1);
        var d = $o.bind(
          null,
          Lt,
          !1,
          c.queue
        );
        return c = Rn(), r = {
          state: e,
          dispatch: null,
          action: t,
          pending: null
        }, c.queue = r, i = Qo.bind(
          null,
          Lt,
          r,
          d,
          i
        ), r.dispatch = i, c.memoizedState = t, [e, i, !1];
      }
      function Ou(t) {
        var e = Ae();
        return lh(e, Ze, t);
      }
      function lh(t, e, i) {
        e = zc(
          t,
          e,
          _s
        )[0], t = Du(Da)[0], e = typeof e == "object" && e !== null && typeof e.then == "function" ? zs(e) : e;
        var c = Ae(), r = c.queue, d = r.dispatch;
        return i !== c.memoizedState && (Lt.flags |= 2048, Fi(
          oi | Ln,
          Ua.bind(null, r, i),
          { destroy: void 0 },
          null
        )), [e, d, t];
      }
      function Ua(t, e) {
        t.action = e;
      }
      function Ac(t) {
        var e = Ae(), i = Ze;
        if (i !== null)
          return lh(e, i, t);
        Ae(), e = e.memoizedState, i = Ae();
        var c = i.queue.dispatch;
        return i.memoizedState = t, [e, c, !1];
      }
      function Fi(t, e, i, c) {
        return t = { tag: t, create: e, inst: i, deps: c, next: null }, e = Lt.updateQueue, e === null && (e = Ny(), Lt.updateQueue = e), i = e.lastEffect, i === null ? e.lastEffect = t.next = t : (c = i.next, i.next = t, t.next = c, e.lastEffect = t), t;
      }
      function Ko(t) {
        var e = Rn();
        return t = { current: t }, e.memoizedState = t;
      }
      function Pi(t, e, i, c) {
        var r = Rn();
        Lt.flags |= t, r.memoizedState = Fi(
          oi | e,
          i,
          { destroy: void 0 },
          c === void 0 ? null : c
        );
      }
      function wn(t, e, i, c) {
        var r = Ae();
        c = c === void 0 ? null : c;
        var d = r.memoizedState.inst;
        Ze !== null && c !== null && Do(c, Ze.memoizedState.deps) ? r.memoizedState = Fi(e, i, d, c) : (Lt.flags |= t, r.memoizedState = Fi(
          oi | e,
          i,
          d,
          c
        ));
      }
      function bs(t, e) {
        (Lt.mode & 16) !== $e && (Lt.mode & 64) === $e ? Pi(142608384, Ln, t, e) : Pi(8390656, Ln, t, e);
      }
      function Jo(t, e) {
        var i = 4194308;
        return (Lt.mode & 16) !== $e && (i |= 67108864), Pi(i, ma, t, e);
      }
      function Rc(t, e) {
        if (typeof e == "function") {
          t = t();
          var i = e(t);
          return function() {
            typeof i == "function" ? i() : e(null);
          };
        }
        if (e != null)
          return e.hasOwnProperty("current") || console.error(
            "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
            "an object with keys {" + Object.keys(e).join(", ") + "}"
          ), t = t(), e.current = t, function() {
            e.current = null;
          };
      }
      function Hu(t, e, i) {
        typeof e != "function" && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          e !== null ? typeof e : "null"
        ), i = i != null ? i.concat([t]) : null;
        var c = 4194308;
        (Lt.mode & 16) !== $e && (c |= 67108864), Pi(
          c,
          ma,
          Rc.bind(null, e, t),
          i
        );
      }
      function Qe(t, e, i) {
        typeof e != "function" && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          e !== null ? typeof e : "null"
        ), i = i != null ? i.concat([t]) : null, wn(
          4,
          ma,
          Rc.bind(null, e, t),
          i
        );
      }
      function ih(t, e) {
        return Rn().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      }
      function Lo(t, e) {
        var i = Ae();
        e = e === void 0 ? null : e;
        var c = i.memoizedState;
        return e !== null && Do(e, c[1]) ? c[0] : (i.memoizedState = [t, e], t);
      }
      function wo(t, e) {
        var i = Rn();
        e = e === void 0 ? null : e;
        var c = t();
        if (io) {
          D(!0);
          try {
            t();
          } finally {
            D(!1);
          }
        }
        return i.memoizedState = [c, e], c;
      }
      function Ii(t, e) {
        var i = Ae();
        e = e === void 0 ? null : e;
        var c = i.memoizedState;
        if (e !== null && Do(e, c[1]))
          return c[0];
        if (c = t(), io) {
          D(!0);
          try {
            t();
          } finally {
            D(!1);
          }
        }
        return i.memoizedState = [c, e], c;
      }
      function Xl(t, e) {
        var i = Rn();
        return vi(i, t, e);
      }
      function uh(t, e) {
        var i = Ae();
        return ya(
          i,
          Ze.memoizedState,
          t,
          e
        );
      }
      function sh(t, e) {
        var i = Ae();
        return Ze === null ? vi(i, t, e) : ya(
          i,
          Ze.memoizedState,
          t,
          e
        );
      }
      function vi(t, e, i) {
        return i === void 0 || $s & 1073741824 ? t.memoizedState = e : (t.memoizedState = i, t = Zh(), Lt.lanes |= t, nc |= t, i);
      }
      function ya(t, e, i, c) {
        return Z(i, e) ? i : ef.current !== null ? (t = vi(t, i, c), Z(t, e) || (kn = !0), t) : $s & 42 ? (t = Zh(), Lt.lanes |= t, nc |= t, e) : (kn = !0, t.memoizedState = i);
      }
      function ch(t, e, i, c, r) {
        var d = Ni();
        Xn(
          d !== 0 && 8 > d ? d : 8
        );
        var v = F.T, b = {};
        F.T = b, $o(t, !1, e, i), b._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var Y = r(), W = F.S;
          if (W !== null && W(b, Y), Y !== null && typeof Y == "object" && typeof Y.then == "function") {
            var dt = um(
              Y,
              c
            );
            Bu(
              t,
              e,
              dt,
              Ba(t)
            );
          } else
            Bu(
              t,
              e,
              c,
              Ba(t)
            );
        } catch (yt) {
          Bu(
            t,
            e,
            { then: function() {
            }, status: "rejected", reason: yt },
            Ba(t)
          );
        } finally {
          Xn(d), F.T = v, v === null && b._updatedFibers && (t = b._updatedFibers.size, b._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      }
      function oh(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
          memoizedState: $l,
          baseState: $l,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Da,
            lastRenderedState: $l
          },
          next: null
        };
        var i = {};
        return e.next = {
          memoizedState: i,
          baseState: i,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Da,
            lastRenderedState: i
          },
          next: null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
      }
      function Wo() {
        var t = Vo(!1);
        return t = ch.bind(
          null,
          Lt,
          t.queue,
          !0,
          !1
        ), Rn().memoizedState = t, [!1, t];
      }
      function Fo() {
        var t = Du(Da)[0], e = Ae().memoizedState;
        return [
          typeof t == "boolean" ? t : zs(t),
          e
        ];
      }
      function Po() {
        var t = Uu(Da)[0], e = Ae().memoizedState;
        return [
          typeof t == "boolean" ? t : zs(t),
          e
        ];
      }
      function Zl() {
        return Le(Di);
      }
      function Io() {
        var t = Rn(), e = We.identifierPrefix;
        if (Te) {
          var i = $n, c = $t;
          i = (c & ~(1 << 32 - Zn(c) - 1)).toString(32) + i, e = ":" + e + "R" + i, i = rp++, 0 < i && (e += "H" + i.toString(32)), e += ":";
        } else
          i = S2++, e = ":" + e + "r" + i.toString(32) + ":";
        return t.memoizedState = e;
      }
      function rh() {
        return Rn().memoizedState = rm.bind(
          null,
          Lt
        );
      }
      function rm(t, e) {
        for (var i = t.return; i !== null; ) {
          switch (i.tag) {
            case 24:
            case 3:
              var c = Ba(i);
              t = mi(c);
              var r = Na(i, t, c);
              r !== null && (tn(r, i, c), ys(r, i, c)), i = hr(), e != null && r !== null && console.error(
                "The seed argument is not enabled outside experimental channels."
              ), t.payload = { cache: i };
              return;
          }
          i = i.return;
        }
      }
      function fm(t, e, i, c) {
        typeof c == "function" && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        ), c = Ba(t), i = {
          lane: c,
          revertLane: 0,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ko(t) ? tr(e, i) : (i = Ee(
          t,
          e,
          i,
          c
        ), i !== null && (tn(
          i,
          t,
          c
        ), la(
          i,
          e,
          c
        ))), Yt(t, c);
      }
      function Pa(t, e, i, c) {
        typeof c == "function" && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        ), c = Ba(t), Bu(
          t,
          e,
          i,
          c
        ), Yt(t, c);
      }
      function Bu(t, e, i, c) {
        var r = {
          lane: c,
          revertLane: 0,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (ko(t)) tr(e, r);
        else {
          var d = t.alternate;
          if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = e.lastRenderedReducer, d !== null)) {
            var v = F.H;
            F.H = Za;
            try {
              var b = e.lastRenderedState, Y = d(b, i);
              if (r.hasEagerState = !0, r.eagerState = Y, Z(Y, b))
                return Ke(t, e, r, 0), We === null && on(), !1;
            } catch {
            } finally {
              F.H = v;
            }
          }
          if (i = Ee(t, e, r, c), i !== null)
            return tn(i, t, c), la(i, e, c), !0;
        }
        return !1;
      }
      function $o(t, e, i, c) {
        if (F.T === null && no === 0 && console.error(
          "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
        ), c = {
          lane: 2,
          revertLane: Mo(),
          action: c,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ko(t)) {
          if (e)
            throw Error("Cannot update optimistic state while rendering.");
          console.error("Cannot call startTransition while rendering.");
        } else
          e = Ee(
            t,
            i,
            c,
            2
          ), e !== null && tn(e, t, 2);
        Yt(t, 2);
      }
      function ko(t) {
        var e = t.alternate;
        return t === Lt || e !== null && e === Lt;
      }
      function tr(t, e) {
        lf = op = !0;
        var i = t.pending;
        i === null ? e.next = e : (e.next = i.next, i.next = e), t.pending = e;
      }
      function la(t, e, i) {
        if (i & 4194176) {
          var c = e.lanes;
          c &= t.pendingLanes, i |= c, e.lanes = i, Se(t, i);
        }
      }
      function er(t) {
        if (t !== null && typeof t != "function") {
          var e = String(t);
          fv.has(e) || (fv.add(e), console.error(
            "Expected the last optional `callback` argument to be a function. Instead received: %s.",
            t
          ));
        }
      }
      function ia(t, e, i, c) {
        var r = t.memoizedState, d = i(c, r);
        if (t.mode & 8) {
          D(!0);
          try {
            d = i(c, r);
          } finally {
            D(!1);
          }
        }
        d === void 0 && (e = at(e) || "Component", sv.has(e) || (sv.add(e), console.error(
          "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
          e
        ))), r = d == null ? r : Vn({}, r, d), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r);
      }
      function fh(t, e, i, c, r, d, v) {
        var b = t.stateNode;
        if (typeof b.shouldComponentUpdate == "function") {
          if (i = b.shouldComponentUpdate(
            c,
            d,
            v
          ), t.mode & 8) {
            D(!0);
            try {
              i = b.shouldComponentUpdate(
                c,
                d,
                v
              );
            } finally {
              D(!1);
            }
          }
          return i === void 0 && console.error(
            "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
            at(e) || "Component"
          ), i;
        }
        return e.prototype && e.prototype.isPureReactComponent ? !yc(i, c) || !yc(r, d) : !0;
      }
      function Kl(t, e, i, c) {
        var r = e.state;
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(i, c), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(i, c), e.state !== r && (t = P(t) || "Component", nv.has(t) || (nv.add(t), console.error(
          "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          t
        )), Dy.enqueueReplaceState(
          e,
          e.state,
          null
        ));
      }
      function Ia(t, e) {
        var i = e;
        if ("ref" in e) {
          i = {};
          for (var c in e)
            c !== "ref" && (i[c] = e[c]);
        }
        if (t = t.defaultProps) {
          i === e && (i = Vn({}, i));
          for (var r in t)
            i[r] === void 0 && (i[r] = t[r]);
        }
        return i;
      }
      function Sl(t, e) {
        try {
          uf = e.source ? P(e.source) : null, Uy = null;
          var i = e.value;
          if (F.actQueue !== null)
            F.thrownErrors.push(i);
          else {
            var c = t.onUncaughtError;
            c(i, { componentStack: e.stack });
          }
        } catch (r) {
          setTimeout(function() {
            throw r;
          });
        }
      }
      function nr(t, e, i) {
        try {
          uf = i.source ? P(i.source) : null, Uy = P(e);
          var c = t.onCaughtError;
          c(i.value, {
            componentStack: i.stack,
            errorBoundary: e.tag === 1 ? e.stateNode : null
          });
        } catch (r) {
          setTimeout(function() {
            throw r;
          });
        }
      }
      function Cc(t, e, i) {
        return i = mi(i), i.tag = Ty, i.payload = { element: null }, i.callback = function() {
          it(e.source, Sl, t, e);
        }, i;
      }
      function Jl(t) {
        return t = mi(t), t.tag = Ty, t;
      }
      function ar(t, e, i, c) {
        var r = i.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var d = c.value;
          t.payload = function() {
            return r(d);
          }, t.callback = function() {
            qm(i), it(
              c.source,
              nr,
              e,
              i,
              c
            );
          };
        }
        var v = i.stateNode;
        v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
          qm(i), it(
            c.source,
            nr,
            e,
            i,
            c
          ), typeof r != "function" && (lc === null ? lc = /* @__PURE__ */ new Set([this]) : lc.add(this)), p2(this, c), typeof r == "function" || !(i.lanes & 2) && console.error(
            "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
            P(i) || "Unknown"
          );
        });
      }
      function As(t, e, i, c, r) {
        if (i.flags |= 32768, Kn && Gc(t, r), c !== null && typeof c == "object" && typeof c.then == "function") {
          if (e = i.alternate, e !== null && Hc(
            e,
            i,
            r,
            !0
          ), Te && (ku = !0), i = si.current, i !== null) {
            switch (i.tag) {
              case 13:
                return yu === null ? Jh() : i.alternate === null && gn === as && (gn = Vy), i.flags &= -257, i.flags |= 65536, i.lanes = r, c === up ? i.flags |= 16384 : (e = i.updateQueue, e === null ? i.updateQueue = /* @__PURE__ */ new Set([c]) : e.add(c), br(t, c, r)), !1;
              case 22:
                return i.flags |= 65536, c === up ? i.flags |= 16384 : (e = i.updateQueue, e === null ? (e = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([c])
                }, i.updateQueue = e) : (i = e.retryQueue, i === null ? e.retryQueue = /* @__PURE__ */ new Set([c]) : i.add(c)), br(t, c, r)), !1;
            }
            throw Error(
              "Unexpected Suspense handler tag (" + i.tag + "). This is a bug in React."
            );
          }
          return br(t, c, r), Jh(), !1;
        }
        if (Te)
          return ku = !0, e = si.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = r, c !== py && ee(
            be(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
                { cause: c }
              ),
              i
            )
          )) : (c !== py && ee(
            be(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
                { cause: c }
              ),
              i
            )
          ), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, c = be(c, i), r = Cc(
            t.stateNode,
            c,
            r
          ), Cu(t, r), gn !== oo && (gn = df)), !1;
        var d = be(
          Error(
            "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
            { cause: c }
          ),
          i
        );
        if (Yd === null ? Yd = [d] : Yd.push(d), gn !== oo && (gn = df), e === null) return !0;
        c = be(c, i), i = e;
        do {
          switch (i.tag) {
            case 3:
              return i.flags |= 65536, t = r & -r, i.lanes |= t, t = Cc(
                i.stateNode,
                c,
                t
              ), Cu(i, t), !1;
            case 1:
              if (e = i.type, d = i.stateNode, (i.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (lc === null || !lc.has(d))))
                return i.flags |= 65536, r &= -r, i.lanes |= r, r = Jl(r), ar(
                  r,
                  t,
                  i,
                  c
                ), Cu(i, r), !1;
          }
          i = i.return;
        } while (i !== null);
        return !1;
      }
      function rn(t, e, i, c) {
        e.child = t === null ? I0(e, null, i, c) : lo(
          e,
          t.child,
          i,
          c
        );
      }
      function $i(t, e, i, c, r) {
        i = i.render;
        var d = e.ref;
        if ("ref" in c) {
          var v = {};
          for (var b in c)
            b !== "ref" && (v[b] = c[b]);
        } else v = c;
        return eu(e), Kt(e), c = nh(
          t,
          e,
          i,
          v,
          d,
          r
        ), b = Oo(), Ne(), t !== null && !kn ? (Ho(t, e, r), El(t, e, r)) : (Te && b && an(e), e.flags |= 1, rn(t, e, c, r), e.child);
      }
      function hh(t, e, i, c, r) {
        if (t === null) {
          var d = i.type;
          return typeof d == "function" && !$h(d) && d.defaultProps === void 0 && i.compare === null ? (i = iu(d), e.tag = 15, e.type = i, cr(e, d), dh(
            t,
            e,
            i,
            c,
            r
          )) : (t = kh(
            i.type,
            null,
            c,
            e,
            e.mode,
            r
          ), t.ref = e.ref, t.return = e, e.child = t);
        }
        if (d = t.child, !tu(t, r)) {
          var v = d.memoizedProps;
          if (i = i.compare, i = i !== null ? i : yc, i(v, c) && t.ref === e.ref)
            return El(
              t,
              e,
              r
            );
        }
        return e.flags |= 1, t = uu(d, c), t.ref = e.ref, t.return = e, e.child = t;
      }
      function dh(t, e, i, c, r) {
        if (t !== null) {
          var d = t.memoizedProps;
          if (yc(d, c) && t.ref === e.ref && e.type === t.type)
            if (kn = !1, e.pendingProps = c = d, tu(t, r))
              t.flags & 131072 && (kn = !0);
            else
              return e.lanes = t.lanes, El(t, e, r);
        }
        return lr(
          t,
          e,
          i,
          c,
          r
        );
      }
      function Rs(t, e, i) {
        var c = e.pendingProps, r = c.children, d = (e.stateNode._pendingVisibility & 2) !== 0, v = t !== null ? t.memoizedState : null;
        if (ki(t, e), c.mode === "hidden" || d) {
          if (e.flags & 128) {
            if (c = v !== null ? v.baseLanes | i : i, t !== null) {
              for (r = e.child = t.child, d = 0; r !== null; )
                d = d | r.lanes | r.childLanes, r = r.sibling;
              e.childLanes = d & ~c;
            } else e.childLanes = 0, e.child = null;
            return mh(
              t,
              e,
              c,
              i
            );
          }
          if (i & 536870912)
            e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ll(
              e,
              v !== null ? v.cachePool : null
            ), v !== null ? Es(e, v) : Ec(e), eh(e);
          else
            return e.lanes = e.childLanes = 536870912, mh(
              t,
              e,
              v !== null ? v.baseLanes | i : i,
              i
            );
        } else
          v !== null ? (Ll(e, v.cachePool), Es(e, v), Vl(e), e.memoizedState = null) : (t !== null && Ll(e, null), Ec(e), Vl(e));
        return rn(t, e, r, i), e.child;
      }
      function mh(t, e, i, c) {
        var r = dr();
        return r = r === null ? null : {
          parent: dn ? vn._currentValue : vn._currentValue2,
          pool: r
        }, e.memoizedState = {
          baseLanes: i,
          cachePool: r
        }, t !== null && Ll(e, null), Ec(e), eh(e), t !== null && Hc(t, e, c, !0), null;
      }
      function ki(t, e) {
        var i = e.ref;
        if (i === null)
          t !== null && t.ref !== null && (e.flags |= 2097664);
        else {
          if (typeof i != "function" && typeof i != "object")
            throw Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
            );
          (t === null || t.ref !== i) && (e.flags |= 2097664);
        }
      }
      function lr(t, e, i, c, r) {
        if (i.prototype && typeof i.prototype.render == "function") {
          var d = at(i) || "Unknown";
          mv[d] || (console.error(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            d,
            d
          ), mv[d] = !0);
        }
        return e.mode & 8 && Hi.recordLegacyContextWarning(
          e,
          null
        ), t === null && (cr(e, e.type), i.contextTypes && (d = at(i) || "Unknown", yv[d] || (yv[d] = !0, console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
          d
        )))), eu(e), Kt(e), i = nh(
          t,
          e,
          i,
          c,
          void 0,
          r
        ), c = Oo(), Ne(), t !== null && !kn ? (Ho(t, e, r), El(t, e, r)) : (Te && c && an(e), e.flags |= 1, rn(t, e, i, r), e.child);
      }
      function ir(t, e, i, c, r, d) {
        return eu(e), Kt(e), es = -1, Dd = t !== null && t.type !== e.type, e.updateQueue = null, i = Uo(
          e,
          c,
          i,
          r
        ), An(t, e), c = Oo(), Ne(), t !== null && !kn ? (Ho(t, e, d), El(t, e, d)) : (Te && c && an(e), e.flags |= 1, rn(t, e, i, d), e.child);
      }
      function ur(t, e, i, c, r) {
        switch (E(e)) {
          case !1:
            var d = e.stateNode, v = new e.type(
              e.memoizedProps,
              d.context
            ).state;
            d.updater.enqueueSetState(d, v, null);
            break;
          case !0:
            e.flags |= 128, e.flags |= 65536, d = Error("Simulated error coming from DevTools");
            var b = r & -r;
            if (e.lanes |= b, v = We, v === null)
              throw Error(
                "Expected a work-in-progress root. This is a bug in React. Please file an issue."
              );
            b = Jl(b), ar(
              b,
              v,
              e,
              be(d, e)
            ), Cu(e, b);
        }
        if (eu(e), e.stateNode === null) {
          if (v = il, d = i.contextType, "contextType" in i && d !== null && (d === void 0 || d.$$typeof !== Ml) && !rv.has(i) && (rv.add(i), b = d === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? " However, it is set to a " + typeof d + "." : d.$$typeof === Or ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", console.error(
            "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
            at(i) || "Component",
            b
          )), typeof d == "object" && d !== null && (v = Le(d)), d = new i(c, v), e.mode & 8) {
            D(!0);
            try {
              d = new i(c, v);
            } finally {
              D(!1);
            }
          }
          if (v = e.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Dy, e.stateNode = d, d._reactInternals = e, d._reactInternalInstance = ev, typeof i.getDerivedStateFromProps == "function" && v === null && (v = at(i) || "Component", av.has(v) || (av.add(v), console.error(
            "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
            v,
            d.state === null ? "null" : "undefined",
            v
          ))), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function") {
            var Y = b = v = null;
            if (typeof d.componentWillMount == "function" && d.componentWillMount.__suppressDeprecationWarning !== !0 ? v = "componentWillMount" : typeof d.UNSAFE_componentWillMount == "function" && (v = "UNSAFE_componentWillMount"), typeof d.componentWillReceiveProps == "function" && d.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? b = "componentWillReceiveProps" : typeof d.UNSAFE_componentWillReceiveProps == "function" && (b = "UNSAFE_componentWillReceiveProps"), typeof d.componentWillUpdate == "function" && d.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof d.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), v !== null || b !== null || Y !== null) {
              d = at(i) || "Component";
              var W = typeof i.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              iv.has(d) || (iv.add(d), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                d,
                W,
                v !== null ? `
  ` + v : "",
                b !== null ? `
  ` + b : "",
                Y !== null ? `
  ` + Y : ""
              ));
            }
          }
          d = e.stateNode, v = at(i) || "Component", d.render || (i.prototype && typeof i.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            v
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            v
          )), !d.getInitialState || d.getInitialState.isReactClassApproved || d.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            v
          ), d.getDefaultProps && !d.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            v
          ), d.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            v
          ), i.childContextTypes && !ov.has(i) && (ov.add(i), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            v
          )), i.contextTypes && !cv.has(i) && (cv.add(i), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            v
          )), typeof d.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            v
          ), i.prototype && i.prototype.isPureReactComponent && typeof d.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            at(i) || "A pure component"
          ), typeof d.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            v
          ), typeof d.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            v
          ), typeof d.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            v
          ), typeof d.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            v
          ), b = d.props !== c, d.props !== void 0 && b && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            v
          ), d.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            v,
            v
          ), typeof d.getSnapshotBeforeUpdate != "function" || typeof d.componentDidUpdate == "function" || lv.has(i) || (lv.add(i), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            at(i)
          )), typeof d.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            v
          ), typeof d.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            v
          ), typeof i.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            v
          ), (b = d.state) && (typeof b != "object" || Cn(b)) && console.error("%s.state: must be set to an object or null", v), typeof d.getChildContext == "function" && typeof i.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            v
          ), d = e.stateNode, d.props = c, d.state = e.memoizedState, d.refs = {}, _o(e), v = i.contextType, d.context = typeof v == "object" && v !== null ? Le(v) : il, d.state === c && (v = at(i) || "Component", uv.has(v) || (uv.add(v), console.error(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            v
          ))), e.mode & 8 && Hi.recordLegacyContextWarning(
            e,
            d
          ), Hi.recordUnsafeLifecycleWarnings(
            e,
            d
          ), d.state = e.memoizedState, v = i.getDerivedStateFromProps, typeof v == "function" && (ia(
            e,
            i,
            v,
            c
          ), d.state = e.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (v = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), v !== d.state && (console.error(
            "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            P(e) || "Component"
          ), Dy.enqueueReplaceState(
            d,
            d.state,
            null
          )), vs(e, c, d, r), Ji(), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & 16) !== $e && (e.flags |= 67108864), d = !0;
        } else if (t === null) {
          d = e.stateNode;
          var dt = e.memoizedProps;
          b = Ia(i, dt), d.props = b;
          var yt = d.context;
          Y = i.contextType, v = il, typeof Y == "object" && Y !== null && (v = Le(Y)), W = i.getDerivedStateFromProps, Y = typeof W == "function" || typeof d.getSnapshotBeforeUpdate == "function", dt = e.pendingProps !== dt, Y || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (dt || yt !== v) && Kl(
            e,
            d,
            c,
            v
          ), Ps = !1;
          var Et = e.memoizedState;
          d.state = Et, vs(e, c, d, r), Ji(), yt = e.memoizedState, dt || Et !== yt || Ps ? (typeof W == "function" && (ia(
            e,
            i,
            W,
            c
          ), yt = e.memoizedState), (b = Ps || fh(
            e,
            i,
            b,
            c,
            Et,
            yt,
            v
          )) ? (Y || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & 16) !== $e && (e.flags |= 67108864)) : (typeof d.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & 16) !== $e && (e.flags |= 67108864), e.memoizedProps = c, e.memoizedState = yt), d.props = c, d.state = yt, d.context = v, d = b) : (typeof d.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & 16) !== $e && (e.flags |= 67108864), d = !1);
        } else {
          d = e.stateNode, Ff(t, e), v = e.memoizedProps, Y = Ia(i, v), d.props = Y, W = e.pendingProps, Et = d.context, yt = i.contextType, b = il, typeof yt == "object" && yt !== null && (b = Le(yt)), dt = i.getDerivedStateFromProps, (yt = typeof dt == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== W || Et !== b) && Kl(
            e,
            d,
            c,
            b
          ), Ps = !1, Et = e.memoizedState, d.state = Et, vs(e, c, d, r), Ji();
          var pe = e.memoizedState;
          v !== W || Et !== pe || Ps || t !== null && t.dependencies !== null && fr(t.dependencies) ? (typeof dt == "function" && (ia(
            e,
            i,
            dt,
            c
          ), pe = e.memoizedState), (Y = Ps || fh(
            e,
            i,
            Y,
            c,
            Et,
            pe,
            b
          ) || t !== null && t.dependencies !== null && fr(t.dependencies)) ? (yt || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(c, pe, b), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
            c,
            pe,
            b
          )), typeof d.componentDidUpdate == "function" && (e.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && Et === t.memoizedState || (e.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && Et === t.memoizedState || (e.flags |= 1024), e.memoizedProps = c, e.memoizedState = pe), d.props = c, d.state = pe, d.context = b, d = Y) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && Et === t.memoizedState || (e.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && Et === t.memoizedState || (e.flags |= 1024), d = !1);
        }
        if (b = d, ki(t, e), v = (e.flags & 128) !== 0, b || v) {
          if (b = e.stateNode, F.getCurrentStack = e === null ? null : ye, Gn = !1, jn = e, v && typeof i.getDerivedStateFromError != "function")
            i = null, ul = -1;
          else {
            if (Kt(e), i = Y0(b), e.mode & 8) {
              D(!0);
              try {
                Y0(b);
              } finally {
                D(!1);
              }
            }
            Ne();
          }
          e.flags |= 1, t !== null && v ? (e.child = lo(
            e,
            t.child,
            null,
            r
          ), e.child = lo(
            e,
            null,
            i,
            r
          )) : rn(
            t,
            e,
            i,
            r
          ), e.memoizedState = b.state, t = e.child;
        } else
          t = El(
            t,
            e,
            r
          );
        return r = e.stateNode, d && r.props !== c && (sf || console.error(
          "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
          P(e) || "a component"
        ), sf = !0), t;
      }
      function sr(t, e, i, c) {
        return de(), e.flags |= 256, rn(t, e, i, c), e.child;
      }
      function cr(t, e) {
        e && e.childContextTypes && console.error(
          `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
          e.displayName || e.name || "Component"
        ), typeof e.getDerivedStateFromProps == "function" && (t = at(e) || "Unknown", vv[t] || (console.error(
          "%s: Function components do not support getDerivedStateFromProps.",
          t
        ), vv[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = at(e) || "Unknown", pv[e] || (console.error(
          "%s: Function components do not support contextType.",
          e
        ), pv[e] = !0));
      }
      function Nc(t) {
        return { baseLanes: t, cachePool: gh() };
      }
      function ua(t, e, i) {
        return t = t !== null ? t.childLanes & ~i : 0, e && (t |= Dl), t;
      }
      function ph(t, e, i) {
        var c = e.pendingProps;
        x(e) && (e.flags |= 128);
        var r = !1, d = (e.flags & 128) !== 0, v;
        if ((v = d) || (v = t !== null && t.memoizedState === null ? !1 : (Jn.current & Cd) !== 0), v && (r = !0, e.flags &= -129), v = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
          if (Te) {
            if (r ? pi(e) : Vl(e), Te) {
              var b = da, Y;
              (Y = !b) || (Y = Pm(
                b,
                pu
              ), Y !== null ? (Pe(), e.memoizedState = {
                dehydrated: Y,
                treeContext: Ie !== null ? { id: $t, overflow: $n } : null,
                retryLane: 536870912
              }, d = z(18, null, null, $e), d.stateNode = Y, d.return = e, e.child = d, Qa = e, da = null, Y = !0) : Y = !1, Y = !Y), Y && ($(e, b), ht(e));
            }
            if (b = e.memoizedState, b !== null && (b = b.dehydrated, b !== null))
              return dd(b) ? e.lanes = 16 : e.lanes = 536870912, null;
            jl(e);
          }
          return b = c.children, c = c.fallback, r ? (Vl(e), r = e.mode, b = or(
            { mode: "hidden", children: b },
            r
          ), c = Qu(
            c,
            r,
            i,
            null
          ), b.return = e, c.return = e, b.sibling = c, e.child = b, r = e.child, r.memoizedState = Nc(i), r.childLanes = ua(
            t,
            v,
            i
          ), e.memoizedState = Hy, c) : (pi(e), Yn(e, b));
        }
        if (Y = t.memoizedState, Y !== null && (b = Y.dehydrated, b !== null)) {
          if (d)
            e.flags & 256 ? (pi(e), e.flags &= -257, e = Dc(
              t,
              e,
              i
            )) : e.memoizedState !== null ? (Vl(e), e.child = t.child, e.flags |= 128, e = null) : (Vl(e), r = c.fallback, b = e.mode, c = or(
              { mode: "visible", children: c.children },
              b
            ), r = Qu(
              r,
              b,
              i,
              null
            ), r.flags |= 2, c.return = e, r.return = e, c.sibling = r, e.child = c, lo(
              e,
              t.child,
              null,
              i
            ), c = e.child, c.memoizedState = Nc(i), c.childLanes = ua(
              t,
              v,
              i
            ), e.memoizedState = Hy, e = r);
          else if (pi(e), Te && console.error(
            "We should not be hydrating here. This is a bug in React. Please file a bug."
          ), dd(b))
            b = hy(b), v = b.digest, r = b.message, c = b.stack, b = b.componentStack, r = Error(r || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), r.stack = c || "", r.digest = v, v = b === void 0 ? null : b, c = {
              value: r,
              source: null,
              stack: v
            }, typeof v == "string" && G.set(r, c), ee(c), e = Dc(
              t,
              e,
              i
            );
          else if (kn || Hc(
            t,
            e,
            i,
            !1
          ), v = (i & t.childLanes) !== 0, kn || v) {
            if (v = We, v !== null) {
              if (c = i & -i, c & 42) c = 1;
              else
                switch (c) {
                  case 2:
                    c = 1;
                    break;
                  case 8:
                    c = 4;
                    break;
                  case 32:
                    c = 16;
                    break;
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                    c = 64;
                    break;
                  case 268435456:
                    c = 134217728;
                    break;
                  default:
                    c = 0;
                }
              if (c = c & (v.suspendedLanes | i) ? 0 : c, c !== 0 && c !== Y.retryLane)
                throw Y.retryLane = c, Je(t, c), tn(v, t, c), dv;
            }
            bl(b) || Jh(), e = Dc(
              t,
              e,
              i
            );
          } else
            bl(b) ? (e.flags |= 128, e.child = t.child, e = Nm.bind(
              null,
              t
            ), dy(b, e), e = null) : (t = Y.treeContext, fa && (da = md(b), Qa = e, Te = !0, Oi = null, ku = !1, ii = null, pu = !1, t !== null && (Pe(), Bt[Wt++] = $t, Bt[Wt++] = $n, Bt[Wt++] = Ie, $t = t.id, $n = t.overflow, Ie = e)), e = Yn(
              e,
              c.children
            ), e.flags |= 4096);
          return e;
        }
        return r ? (Vl(e), r = c.fallback, b = e.mode, Y = t.child, d = Y.sibling, c = uu(Y, {
          mode: "hidden",
          children: c.children
        }), c.subtreeFlags = Y.subtreeFlags & 31457280, d !== null ? r = uu(d, r) : (r = Qu(
          r,
          b,
          i,
          null
        ), r.flags |= 2), r.return = e, c.return = e, c.sibling = r, e.child = c, c = r, r = e.child, b = t.child.memoizedState, b === null ? b = Nc(i) : (Y = b.cachePool, Y !== null ? (d = dn ? vn._currentValue : vn._currentValue2, Y = Y.parent !== d ? { parent: d, pool: d } : Y) : Y = gh(), b = {
          baseLanes: b.baseLanes | i,
          cachePool: Y
        }), r.memoizedState = b, r.childLanes = ua(
          t,
          v,
          i
        ), e.memoizedState = Hy, c) : (pi(e), i = t.child, t = i.sibling, i = uu(i, {
          mode: "visible",
          children: c.children
        }), i.return = e, i.sibling = null, t !== null && (v = e.deletions, v === null ? (e.deletions = [t], e.flags |= 16) : v.push(t)), e.child = i, e.memoizedState = null, i);
      }
      function Yn(t, e) {
        return e = or(
          { mode: "visible", children: e },
          t.mode
        ), e.return = t, t.child = e;
      }
      function or(t, e) {
        return Vm(t, e, 0, null);
      }
      function Dc(t, e, i) {
        return lo(e, t.child, null, i), t = Yn(
          e,
          e.pendingProps.children
        ), t.flags |= 2, e.memoizedState = null, t;
      }
      function yh(t, e, i) {
        t.lanes |= e;
        var c = t.alternate;
        c !== null && (c.lanes |= e), Oc(
          t.return,
          e,
          i
        );
      }
      function hm(t, e) {
        var i = Cn(t);
        return t = !i && typeof k(t) == "function", i || t ? (i = i ? "array" : "iterable", console.error(
          "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
          i,
          e,
          i
        ), !1) : !0;
      }
      function gl(t, e, i, c, r) {
        var d = t.memoizedState;
        d === null ? t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: c,
          tail: i,
          tailMode: r
        } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = i, d.tailMode = r);
      }
      function vh(t, e, i) {
        var c = e.pendingProps, r = c.revealOrder, d = c.tail;
        if (c = c.children, r !== void 0 && r !== "forwards" && r !== "backwards" && r !== "together" && !Sv[r])
          if (Sv[r] = !0, typeof r == "string")
            switch (r.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  r,
                  r.toLowerCase()
                );
                break;
              case "forward":
              case "backward":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  r,
                  r.toLowerCase()
                );
                break;
              default:
                console.error(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  r
                );
            }
          else
            console.error(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              r
            );
        d === void 0 || Oy[d] || (d !== "collapsed" && d !== "hidden" ? (Oy[d] = !0, console.error(
          '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
          d
        )) : r !== "forwards" && r !== "backwards" && (Oy[d] = !0, console.error(
          '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
          d
        )));
        t: if ((r === "forwards" || r === "backwards") && c !== void 0 && c !== null && c !== !1)
          if (Cn(c)) {
            for (var v = 0; v < c.length; v++)
              if (!hm(c[v], v)) break t;
          } else if (v = k(c), typeof v == "function") {
            if (v = v.call(c))
              for (var b = v.next(), Y = 0; !b.done; b = v.next()) {
                if (!hm(b.value, Y)) break t;
                Y++;
              }
          } else
            console.error(
              'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
              r
            );
        if (rn(t, e, c, i), c = Jn.current, c & Cd)
          c = c & nf | Cd, e.flags |= 128;
        else {
          if (t !== null && t.flags & 128)
            t: for (t = e.child; t !== null; ) {
              if (t.tag === 13)
                t.memoizedState !== null && yh(
                  t,
                  i,
                  e
                );
              else if (t.tag === 19)
                yh(t, i, e);
              else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break t;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break t;
                t = t.return;
              }
              t.sibling.return = t.return, t = t.sibling;
            }
          c &= nf;
        }
        switch (ct(Jn, c, e), r) {
          case "forwards":
            for (i = e.child, r = null; i !== null; )
              t = i.alternate, t !== null && xc(t) === null && (r = i), i = i.sibling;
            i = r, i === null ? (r = e.child, e.child = null) : (r = i.sibling, i.sibling = null), gl(
              e,
              !1,
              r,
              i,
              d
            );
            break;
          case "backwards":
            for (i = null, r = e.child, e.child = null; r !== null; ) {
              if (t = r.alternate, t !== null && xc(t) === null) {
                e.child = r;
                break;
              }
              t = r.sibling, r.sibling = i, i = r, r = t;
            }
            gl(
              e,
              !0,
              i,
              null,
              d
            );
            break;
          case "together":
            gl(e, !1, null, null, void 0);
            break;
          default:
            e.memoizedState = null;
        }
        return e.child;
      }
      function El(t, e, i) {
        if (t !== null && (e.dependencies = t.dependencies), ul = -1, nc |= e.lanes, !(i & e.childLanes))
          if (t !== null) {
            if (Hc(
              t,
              e,
              i,
              !1
            ), (i & e.childLanes) === 0)
              return null;
          } else return null;
        if (t !== null && e.child !== t.child)
          throw Error("Resuming work not yet implemented.");
        if (e.child !== null) {
          for (t = e.child, i = uu(t, t.pendingProps), e.child = i, i.return = e; t.sibling !== null; )
            t = t.sibling, i = i.sibling = uu(t, t.pendingProps), i.return = e;
          i.sibling = null;
        }
        return e.child;
      }
      function tu(t, e) {
        return t.lanes & e ? !0 : (t = t.dependencies, !!(t !== null && fr(t)));
      }
      function dm(t, e, i) {
        switch (e.tag) {
          case 3:
            fl(
              e,
              e.stateNode.containerInfo
            ), Si(
              e,
              vn,
              t.memoizedState.cache
            ), de();
            break;
          case 27:
          case 5:
            zu(e);
            break;
          case 4:
            fl(
              e,
              e.stateNode.containerInfo
            );
            break;
          case 10:
            Si(
              e,
              e.type,
              e.memoizedProps.value
            );
            break;
          case 12:
            i & e.childLanes && (e.flags |= 4), e.flags |= 2048;
            var c = e.stateNode;
            c.effectDuration = -0, c.passiveEffectDuration = -0;
            break;
          case 13:
            if (c = e.memoizedState, c !== null)
              return c.dehydrated !== null ? (pi(e), e.flags |= 128, null) : i & e.child.childLanes ? ph(
                t,
                e,
                i
              ) : (pi(e), t = El(
                t,
                e,
                i
              ), t !== null ? t.sibling : null);
            pi(e);
            break;
          case 19:
            var r = (t.flags & 128) !== 0;
            if (c = (i & e.childLanes) !== 0, c || (Hc(
              t,
              e,
              i,
              !1
            ), c = (i & e.childLanes) !== 0), r) {
              if (c)
                return vh(
                  t,
                  e,
                  i
                );
              e.flags |= 128;
            }
            if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), ct(
              Jn,
              Jn.current,
              e
            ), c) break;
            return null;
          case 22:
          case 23:
            return e.lanes = 0, Rs(t, e, i);
          case 24:
            Si(
              e,
              vn,
              t.memoizedState.cache
            );
        }
        return El(t, e, i);
      }
      function rr(t, e, i) {
        if (e._debugNeedsRemount && t !== null) {
          i = kh(
            e.type,
            e.key,
            e.pendingProps,
            e._debugOwner || null,
            e.mode,
            e.lanes
          );
          var c = e.return;
          if (c === null) throw Error("Cannot swap the root fiber.");
          if (t.alternate = null, e.alternate = null, i.index = e.index, i.sibling = e.sibling, i.return = e.return, i.ref = e.ref, i._debugInfo = e._debugInfo, e === c.child)
            c.child = i;
          else {
            var r = c.child;
            if (r === null)
              throw Error("Expected parent to have a child.");
            for (; r.sibling !== e; )
              if (r = r.sibling, r === null)
                throw Error("Expected to find the previous sibling.");
            r.sibling = i;
          }
          return e = c.deletions, e === null ? (c.deletions = [t], c.flags |= 16) : e.push(t), i.flags |= 2, i;
        }
        if (t !== null)
          if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
            kn = !0;
          else {
            if (!tu(t, i) && !(e.flags & 128))
              return kn = !1, dm(
                t,
                e,
                i
              );
            kn = !!(t.flags & 131072);
          }
        else
          kn = !1, (c = Te) && (Pe(), c = (e.flags & 1048576) !== 0), c && (c = e.index, Pe(), _a(e, Be, c));
        switch (e.lanes = 0, e.tag) {
          case 16:
            t: if (c = e.pendingProps, t = Is(e.elementType), e.type = t, typeof t == "function")
              $h(t) ? (c = Ia(
                t,
                c
              ), e.tag = 1, e.type = t = iu(t), e = ur(
                null,
                e,
                t,
                c,
                i
              )) : (e.tag = 0, cr(e, t), e.type = t = iu(t), e = lr(
                null,
                e,
                t,
                c,
                i
              ));
            else {
              if (t != null) {
                if (r = t.$$typeof, r === Fl) {
                  e.tag = 11, e.type = t = Ph(t), e = $i(
                    null,
                    e,
                    t,
                    c,
                    i
                  );
                  break t;
                } else if (r === Hr) {
                  e.tag = 14, e = hh(
                    null,
                    e,
                    t,
                    c,
                    i
                  );
                  break t;
                }
              }
              throw e = "", t !== null && typeof t == "object" && t.$$typeof === Ya && (e = " Did you wrap a component in React.lazy() more than once?"), t = at(t) || t, Error(
                "Element type is invalid. Received a promise that resolves to: " + t + ". Lazy element type must resolve to a class or function." + e
              );
            }
            return e;
          case 0:
            return lr(
              t,
              e,
              e.type,
              e.pendingProps,
              i
            );
          case 1:
            return c = e.type, r = Ia(
              c,
              e.pendingProps
            ), ur(
              t,
              e,
              c,
              r,
              i
            );
          case 3:
            t: {
              if (fl(
                e,
                e.stateNode.containerInfo
              ), t === null)
                throw Error(
                  "Should have a current fiber. This is a bug in React."
                );
              var d = e.pendingProps;
              r = e.memoizedState, c = r.element, Ff(t, e), vs(e, d, null, i);
              var v = e.memoizedState;
              if (d = v.cache, Si(e, vn, d), d !== r.cache && Sh(
                e,
                [vn],
                i,
                !0
              ), Ji(), d = v.element, fa && r.isDehydrated)
                if (r = {
                  element: d,
                  isDehydrated: !1,
                  cache: v.cache
                }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
                  e = sr(
                    t,
                    e,
                    d,
                    i
                  );
                  break t;
                } else if (d !== c) {
                  c = be(
                    Error(
                      "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                    ),
                    e
                  ), ee(c), e = sr(
                    t,
                    e,
                    d,
                    i
                  );
                  break t;
                } else
                  for (fa && (da = cn(
                    e.stateNode.containerInfo
                  ), Qa = e, Te = !0, Oi = null, ku = !1, ii = null, pu = !0), t = I0(
                    e,
                    null,
                    d,
                    i
                  ), e.child = t; t; )
                    t.flags = t.flags & -3 | 4096, t = t.sibling;
              else {
                if (de(), d === c) {
                  e = El(
                    t,
                    e,
                    i
                  );
                  break t;
                }
                rn(
                  t,
                  e,
                  d,
                  i
                );
              }
              e = e.child;
            }
            return e;
          case 26:
            if (Qt)
              return ki(t, e), t === null ? (t = ga(
                e.type,
                null,
                e.pendingProps,
                null
              )) ? e.memoizedState = t : Te || (e.stateNode = du(
                e.type,
                e.pendingProps,
                ba(Fs.current),
                e
              )) : e.memoizedState = ga(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              ), null;
          case 27:
            if (yn)
              return zu(e), t === null && yn && Te && (r = ba(
                Fs.current
              ), c = na(), r = e.stateNode = Rl(
                e.type,
                e.pendingProps,
                r,
                c,
                !1
              ), ku || (c = Ic(
                r,
                e.type,
                e.pendingProps,
                c
              ), c !== null && (q(e, 0).serverProps = c)), Qa = e, pu = !0, da = ei(r)), c = e.pendingProps.children, t !== null || Te ? rn(
                t,
                e,
                c,
                i
              ) : e.child = lo(
                e,
                null,
                c,
                i
              ), ki(t, e), e.child;
          case 5:
            return t === null && Te && (d = na(), c = Oe(
              e.type,
              e.pendingProps,
              d
            ), r = da, (v = !r) || (v = Fm(
              r,
              e.type,
              e.pendingProps,
              pu
            ), v !== null ? (e.stateNode = v, ku || (d = Ic(
              v,
              e.type,
              e.pendingProps,
              d
            ), d !== null && (q(e, 0).serverProps = d)), Qa = e, da = ei(v), pu = !1, d = !0) : d = !1, v = !d), v && (c && $(e, r), ht(e))), zu(e), r = e.type, d = e.pendingProps, v = t !== null ? t.memoizedProps : null, c = d.children, xn(r, d) ? c = null : v !== null && xn(r, v) && (e.flags |= 32), e.memoizedState !== null && (r = nh(
              t,
              e,
              cm,
              null,
              null,
              i
            ), dn ? Di._currentValue = r : Di._currentValue2 = r), ki(t, e), rn(
              t,
              e,
              c,
              i
            ), e.child;
          case 6:
            return t === null && Te && (t = e.pendingProps, i = na(), t = Xe(t, i), i = da, (c = !i) || (c = Dn(
              i,
              e.pendingProps,
              pu
            ), c !== null ? (e.stateNode = c, Qa = e, da = null, c = !0) : c = !1, c = !c), c && (t && $(e, i), ht(e))), null;
          case 13:
            return ph(t, e, i);
          case 4:
            return fl(
              e,
              e.stateNode.containerInfo
            ), c = e.pendingProps, t === null ? e.child = lo(
              e,
              null,
              c,
              i
            ) : rn(
              t,
              e,
              c,
              i
            ), e.child;
          case 11:
            return $i(
              t,
              e,
              e.type,
              e.pendingProps,
              i
            );
          case 7:
            return rn(
              t,
              e,
              e.pendingProps,
              i
            ), e.child;
          case 8:
            return rn(
              t,
              e,
              e.pendingProps.children,
              i
            ), e.child;
          case 12:
            return e.flags |= 4, e.flags |= 2048, c = e.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, rn(
              t,
              e,
              e.pendingProps.children,
              i
            ), e.child;
          case 10:
            return c = e.type, r = e.pendingProps, d = r.value, "value" in r || gv || (gv = !0, console.error(
              "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
            )), Si(e, c, d), rn(
              t,
              e,
              r.children,
              i
            ), e.child;
          case 9:
            return r = e.type._context, c = e.pendingProps.children, typeof c != "function" && console.error(
              "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
            ), eu(e), r = Le(r), Kt(e), c = by(
              c,
              r,
              void 0
            ), Ne(), e.flags |= 1, rn(
              t,
              e,
              c,
              i
            ), e.child;
          case 14:
            return hh(
              t,
              e,
              e.type,
              e.pendingProps,
              i
            );
          case 15:
            return dh(
              t,
              e,
              e.type,
              e.pendingProps,
              i
            );
          case 19:
            return vh(
              t,
              e,
              i
            );
          case 22:
            return Rs(t, e, i);
          case 24:
            return eu(e), c = Le(vn), t === null ? (r = dr(), r === null && (r = We, d = hr(), r.pooledCache = d, nu(d), d !== null && (r.pooledCacheLanes |= i), r = d), e.memoizedState = {
              parent: c,
              cache: r
            }, _o(e), Si(e, vn, r)) : (t.lanes & i && (Ff(t, e), vs(e, null, null, i), Ji()), r = t.memoizedState, d = e.memoizedState, r.parent !== c ? (r = {
              parent: c,
              cache: c
            }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), Si(e, vn, c)) : (c = d.cache, Si(e, vn, c), c !== r.cache && Sh(
              e,
              [vn],
              i,
              !0
            ))), rn(
              t,
              e,
              e.pendingProps.children,
              i
            ), e.child;
          case 29:
            throw e.pendingProps;
        }
        throw Error(
          "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function Uc() {
        cf = dp = null, of = !1;
      }
      function Si(t, e, i) {
        dn ? (ct(fp, e._currentValue, t), e._currentValue = i, ct(By, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== hp && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), e._currentRenderer = hp) : (ct(fp, e._currentValue2, t), e._currentValue2 = i, ct(qy, e._currentRenderer2, t), e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== hp && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), e._currentRenderer2 = hp);
      }
      function xl(t, e) {
        var i = fp.current;
        dn ? (t._currentValue = i, i = By.current, w(By, e), t._currentRenderer = i) : (t._currentValue2 = i, i = qy.current, w(qy, e), t._currentRenderer2 = i), w(fp, e);
      }
      function Oc(t, e, i) {
        for (; t !== null; ) {
          var c = t.alternate;
          if ((t.childLanes & e) !== e ? (t.childLanes |= e, c !== null && (c.childLanes |= e)) : c !== null && (c.childLanes & e) !== e && (c.childLanes |= e), t === i) break;
          t = t.return;
        }
        t !== i && console.error(
          "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function Sh(t, e, i, c) {
        var r = t.child;
        for (r !== null && (r.return = t); r !== null; ) {
          var d = r.dependencies;
          if (d !== null) {
            var v = r.child;
            d = d.firstContext;
            t: for (; d !== null; ) {
              var b = d;
              d = r;
              for (var Y = 0; Y < e.length; Y++)
                if (b.context === e[Y]) {
                  d.lanes |= i, b = d.alternate, b !== null && (b.lanes |= i), Oc(
                    d.return,
                    i,
                    t
                  ), c || (v = null);
                  break t;
                }
              d = b.next;
            }
          } else if (r.tag === 18) {
            if (v = r.return, v === null)
              throw Error(
                "We just came from a parent so we must have had a parent. This is a bug in React."
              );
            v.lanes |= i, d = v.alternate, d !== null && (d.lanes |= i), Oc(
              v,
              i,
              t
            ), v = null;
          } else v = r.child;
          if (v !== null) v.return = r;
          else
            for (v = r; v !== null; ) {
              if (v === t) {
                v = null;
                break;
              }
              if (r = v.sibling, r !== null) {
                r.return = v.return, v = r;
                break;
              }
              v = v.return;
            }
          r = v;
        }
      }
      function Hc(t, e, i, c) {
        t = null;
        for (var r = e, d = !1; r !== null; ) {
          if (!d) {
            if (r.flags & 524288) d = !0;
            else if (r.flags & 262144) break;
          }
          if (r.tag === 10) {
            var v = r.alternate;
            if (v === null)
              throw Error("Should have a current fiber. This is a bug in React.");
            if (v = v.memoizedProps, v !== null) {
              var b = r.type;
              Z(r.pendingProps.value, v.value) || (t !== null ? t.push(b) : t = [b]);
            }
          } else if (r === $m.current) {
            if (v = r.alternate, v === null)
              throw Error("Should have a current fiber. This is a bug in React.");
            v.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(Di) : t = [Di]);
          }
          r = r.return;
        }
        t !== null && Sh(
          e,
          t,
          i,
          c
        ), e.flags |= 262144;
      }
      function fr(t) {
        for (t = t.firstContext; t !== null; ) {
          var e = t.context;
          if (!Z(
            dn ? e._currentValue : e._currentValue2,
            t.memoizedValue
          ))
            return !0;
          t = t.next;
        }
        return !1;
      }
      function eu(t) {
        dp = t, cf = null, t = t.dependencies, t !== null && (t.firstContext = null);
      }
      function Le(t) {
        return of && console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        ), Bc(dp, t);
      }
      function gi(t, e) {
        return dp === null && eu(t), Bc(t, e);
      }
      function Bc(t, e) {
        var i = dn ? e._currentValue : e._currentValue2;
        if (e = { context: e, memoizedValue: i, next: null }, cf === null) {
          if (t === null)
            throw Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          cf = e, t.dependencies = {
            lanes: 0,
            firstContext: e,
            _debugThenableState: null
          }, t.flags |= 524288;
        } else cf = cf.next = e;
        return i;
      }
      function hr() {
        return {
          controller: new E2(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function nu(t) {
        t.controller.signal.aborted && console.warn(
          "A cache instance was retained after it was already freed. This likely indicates a bug in React."
        ), t.refCount++;
      }
      function qc(t) {
        t.refCount--, 0 > t.refCount && console.warn(
          "A cache instance was released after it was already freed. This likely indicates a bug in React."
        ), t.refCount === 0 && x2(T2, function() {
          t.controller.abort();
        });
      }
      function dr() {
        var t = co.current;
        return t !== null ? t : We.pooledCache;
      }
      function Ll(t, e) {
        e === null ? ct(co, co.current, t) : ct(co, e.pool, t);
      }
      function gh() {
        var t = dr();
        return t === null ? null : {
          parent: dn ? vn._currentValue : vn._currentValue2,
          pool: t
        };
      }
      function Pt(t) {
        t.flags |= 4;
      }
      function mr(t, e) {
        if (t !== null && t.child === e.child) return !1;
        if (e.flags & 16) return !0;
        for (t = e.child; t !== null; ) {
          if (t.flags & 13878 || t.subtreeFlags & 13878)
            return !0;
          t = t.sibling;
        }
        return !1;
      }
      function Eh(t, e, i, c) {
        if (fn)
          for (i = e.child; i !== null; ) {
            if (i.tag === 5 || i.tag === 6)
              Ys(t, i.stateNode);
            else if (!(i.tag === 4 || yn && i.tag === 27) && i.child !== null) {
              i.child.return = i, i = i.child;
              continue;
            }
            if (i === e) break;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === e)
                return;
              i = i.return;
            }
            i.sibling.return = i.return, i = i.sibling;
          }
        else if (Il)
          for (var r = e.child; r !== null; ) {
            if (r.tag === 5) {
              var d = r.stateNode;
              i && c && (d = Fc(
                d,
                r.type,
                r.memoizedProps
              )), Ys(t, d);
            } else if (r.tag === 6)
              d = r.stateNode, i && c && (d = hu(
                d,
                r.memoizedProps
              )), Ys(t, d);
            else if (r.tag !== 4) {
              if (r.tag === 22 && r.memoizedState !== null)
                d = r.child, d !== null && (d.return = r), Eh(t, r, !0, !0);
              else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
            }
            if (r === e) break;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === e)
                return;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
      }
      function xh(t, e, i, c) {
        if (Il)
          for (var r = e.child; r !== null; ) {
            if (r.tag === 5) {
              var d = r.stateNode;
              i && c && (d = Fc(
                d,
                r.type,
                r.memoizedProps
              )), hd(t, d);
            } else if (r.tag === 6)
              d = r.stateNode, i && c && (d = hu(
                d,
                r.memoizedProps
              )), hd(t, d);
            else if (r.tag !== 4) {
              if (r.tag === 22 && r.memoizedState !== null)
                d = r.child, d !== null && (d.return = r), xh(
                  t,
                  r,
                  !(r.memoizedProps !== null && r.memoizedProps.mode === "manual"),
                  !0
                );
              else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
            }
            if (r === e) break;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === e) return;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
      }
      function mm(t, e) {
        if (Il && mr(t, e)) {
          t = e.stateNode;
          var i = t.containerInfo, c = fd();
          xh(c, e, !1, !1), t.pendingChildren = c, Pt(e), Nn(i, c);
        }
      }
      function Th(t, e, i, c) {
        if (fn)
          t.memoizedProps !== c && Pt(e);
        else if (Il) {
          var r = t.stateNode, d = t.memoizedProps;
          if ((t = mr(t, e)) || d !== c) {
            var v = na();
            d = rd(
              r,
              i,
              d,
              c,
              !t,
              null
            ), d === r ? e.stateNode = r : (Pn(
              d,
              i,
              c,
              v
            ) && Pt(e), e.stateNode = d, t ? Eh(d, e, !1, !1) : Pt(e));
          } else e.stateNode = r;
        }
      }
      function zh(t, e, i) {
        if (js(e, i)) {
          if (t.flags |= 16777216, !Lu(e, i))
            if (Bs()) t.flags |= 8192;
            else
              throw kr = up, _y;
        } else t.flags &= -16777217;
      }
      function pm(t, e) {
        if (yd(e)) {
          if (t.flags |= 16777216, !Ga(e))
            if (Bs()) t.flags |= 8192;
            else
              throw kr = up, _y;
        } else t.flags &= -16777217;
      }
      function Cs(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? je() : 536870912, t.lanes |= e, fo |= e);
      }
      function $a(t, e) {
        if (!Te)
          switch (t.tailMode) {
            case "hidden":
              e = t.tail;
              for (var i = null; e !== null; )
                e.alternate !== null && (i = e), e = e.sibling;
              i === null ? t.tail = null : i.sibling = null;
              break;
            case "collapsed":
              i = t.tail;
              for (var c = null; i !== null; )
                i.alternate !== null && (c = i), i = i.sibling;
              c === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : c.sibling = null;
          }
      }
      function we(t) {
        var e = t.alternate !== null && t.alternate.child === t.child, i = 0, c = 0;
        if (e)
          if ((t.mode & 2) !== $e) {
            for (var r = t.selfBaseDuration, d = t.child; d !== null; )
              i |= d.lanes | d.childLanes, c |= d.subtreeFlags & 31457280, c |= d.flags & 31457280, r += d.treeBaseDuration, d = d.sibling;
            t.treeBaseDuration = r;
          } else
            for (r = t.child; r !== null; )
              i |= r.lanes | r.childLanes, c |= r.subtreeFlags & 31457280, c |= r.flags & 31457280, r.return = t, r = r.sibling;
        else if ((t.mode & 2) !== $e) {
          r = t.actualDuration, d = t.selfBaseDuration;
          for (var v = t.child; v !== null; )
            i |= v.lanes | v.childLanes, c |= v.subtreeFlags, c |= v.flags, r += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          t.actualDuration = r, t.treeBaseDuration = d;
        } else
          for (r = t.child; r !== null; )
            i |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = t, r = r.sibling;
        return t.subtreeFlags |= c, t.childLanes = i, e;
      }
      function pr(t, e, i) {
        var c = e.pendingProps;
        switch (Mn(e), e.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return we(e), null;
          case 1:
            return we(e), null;
          case 3:
            return i = e.stateNode, c = null, t !== null && (c = t.memoizedState.cache), e.memoizedState.cache !== c && (e.flags |= 2048), xl(vn, e), Aa(e), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (Mt(e) ? (Ve(), Pt(e)) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Oi !== null && (bi(Oi), Oi = null))), mm(t, e), we(e), null;
          case 26:
            if (Qt) {
              i = e.type;
              var r = e.memoizedState;
              return t === null ? (Pt(e), r !== null ? (we(e), pm(
                e,
                r
              )) : (we(e), zh(
                e,
                i,
                c
              ))) : r ? r !== t.memoizedState ? (Pt(e), we(e), pm(
                e,
                r
              )) : (we(e), e.flags &= -16777217) : (fn ? t.memoizedProps !== c && Pt(e) : Th(
                t,
                e,
                i,
                c
              ), we(e), zh(
                e,
                i,
                c
              )), null;
            }
          case 27:
            if (yn) {
              if (hl(e), i = ba(Fs.current), r = e.type, t !== null && e.stateNode != null)
                fn ? t.memoizedProps !== c && Pt(e) : Th(
                  t,
                  e,
                  r,
                  c
                );
              else {
                if (!c) {
                  if (e.stateNode === null)
                    throw Error(
                      "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                    );
                  return we(e), null;
                }
                t = na(), Mt(e) ? zt(e, t) : (t = Rl(
                  r,
                  c,
                  i,
                  t,
                  !0
                ), e.stateNode = t, Pt(e));
              }
              return we(e), null;
            }
          case 5:
            if (hl(e), i = e.type, t !== null && e.stateNode != null)
              Th(t, e, i, c);
            else {
              if (!c) {
                if (e.stateNode === null)
                  throw Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                return we(e), null;
              }
              t = na(), Mt(e) ? zt(e, t) : (r = ba(
                Fs.current
              ), r = cu(
                i,
                c,
                r,
                t,
                e
              ), Eh(r, e, !1, !1), e.stateNode = r, Pn(
                r,
                i,
                c,
                t
              ) && Pt(e));
            }
            return we(e), zh(
              e,
              e.type,
              e.pendingProps
            ), null;
          case 6:
            if (t && e.stateNode != null)
              i = t.memoizedProps, fn ? i !== c && Pt(e) : Il && (i !== c ? (t = ba(
                Fs.current
              ), i = na(), e.stateNode = xe(
                c,
                t,
                i,
                e
              ), Pt(e)) : e.stateNode = t.stateNode);
            else {
              if (typeof c != "string" && e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              if (t = ba(Fs.current), i = na(), Mt(e)) {
                if (!fa)
                  throw Error(
                    "Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                  );
                t = e.stateNode, i = e.memoizedProps, r = !ku, c = null;
                var d = Qa;
                if (d !== null)
                  switch (d.tag) {
                    case 3:
                      r && (r = Js(
                        t,
                        i,
                        c
                      ), r !== null && (q(e, 0).serverProps = r));
                      break;
                    case 27:
                    case 5:
                      c = d.memoizedProps, r && (r = Js(
                        t,
                        i,
                        c
                      ), r !== null && (q(
                        e,
                        0
                      ).serverProps = r));
                  }
                ja(
                  t,
                  i,
                  e,
                  c
                ) || ht(e);
              } else
                e.stateNode = xe(
                  c,
                  t,
                  i,
                  e
                );
            }
            return we(e), null;
          case 13:
            if (c = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
              if (r = Mt(e), c !== null && c.dehydrated !== null) {
                if (t === null) {
                  if (!r)
                    throw Error(
                      "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                    );
                  if (!fa)
                    throw Error(
                      "Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                    );
                  if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r)
                    throw Error(
                      "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                    );
                  Al(r, e), we(e), (e.mode & 2) !== $e && c !== null && (r = e.child, r !== null && (e.treeBaseDuration -= r.treeBaseDuration));
                } else
                  Ve(), de(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4, we(e), (e.mode & 2) !== $e && c !== null && (r = e.child, r !== null && (e.treeBaseDuration -= r.treeBaseDuration));
                r = !1;
              } else
                Oi !== null && (bi(Oi), Oi = null), r = !0;
              if (!r)
                return e.flags & 256 ? (jl(e), e) : (jl(e), null);
            }
            return jl(e), e.flags & 128 ? (e.lanes = i, (e.mode & 2) !== $e && pc(e), e) : (i = c !== null, t = t !== null && t.memoizedState !== null, i && (c = e.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), d = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (d = c.memoizedState.cachePool.pool), d !== r && (c.flags |= 2048)), i !== t && i && (e.child.flags |= 8192), Cs(e, e.updateQueue), we(e), (e.mode & 2) !== $e && i && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
          case 4:
            return Aa(e), mm(t, e), t === null && sd(e.stateNode.containerInfo), we(e), null;
          case 10:
            return xl(e.type, e), we(e), null;
          case 19:
            if (w(Jn, e), r = e.memoizedState, r === null)
              return we(e), null;
            if (c = (e.flags & 128) !== 0, d = r.rendering, d === null)
              if (c) $a(r, !1);
              else {
                if (gn !== as || t !== null && t.flags & 128)
                  for (t = e.child; t !== null; ) {
                    if (d = xc(t), d !== null) {
                      for (e.flags |= 128, $a(r, !1), t = d.updateQueue, e.updateQueue = t, Cs(e, t), e.subtreeFlags = 0, t = i, i = e.child; i !== null; )
                        Ym(i, t), i = i.sibling;
                      return ct(
                        Jn,
                        Jn.current & nf | Cd,
                        e
                      ), e.child;
                    }
                    t = t.sibling;
                  }
                r.tail !== null && p() > Vd && (e.flags |= 128, c = !0, $a(r, !1), e.lanes = 4194304);
              }
            else {
              if (!c)
                if (t = xc(d), t !== null) {
                  if (e.flags |= 128, c = !0, t = t.updateQueue, e.updateQueue = t, Cs(e, t), $a(r, !0), r.tail === null && r.tailMode === "hidden" && !d.alternate && !Te)
                    return we(e), null;
                } else
                  2 * p() - r.renderingStartTime > Vd && i !== 536870912 && (e.flags |= 128, c = !0, $a(r, !1), e.lanes = 4194304);
              r.isBackwards ? (d.sibling = e.child, e.child = d) : (t = r.last, t !== null ? t.sibling = d : e.child = d, r.last = d);
            }
            return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = p(), t.sibling = null, i = Jn.current, i = c ? i & nf | Cd : i & nf, ct(Jn, i, e), t) : (we(e), null);
          case 22:
          case 23:
            return jl(e), xs(e), c = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== c && (e.flags |= 8192) : c && (e.flags |= 8192), c ? i & 536870912 && !(e.flags & 128) && (we(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : we(e), i = e.updateQueue, i !== null && Cs(e, i.retryQueue), i = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), c = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (c = e.memoizedState.cachePool.pool), c !== i && (e.flags |= 2048), t !== null && w(co, e), null;
          case 24:
            return i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), xl(vn, e), we(e), null;
          case 25:
            return null;
        }
        throw Error(
          "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function qu(t, e) {
        switch (Mn(e), e.tag) {
          case 1:
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & 2) !== $e && pc(e), e) : null;
          case 3:
            return xl(vn, e), Aa(e), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
          case 26:
          case 27:
          case 5:
            return hl(e), null;
          case 13:
            if (jl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
              if (e.alternate === null)
                throw Error(
                  "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
                );
              de();
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & 2) !== $e && pc(e), e) : null;
          case 19:
            return w(Jn, e), null;
          case 4:
            return Aa(e), null;
          case 10:
            return xl(e.type, e), null;
          case 22:
          case 23:
            return jl(e), xs(e), t !== null && w(co, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & 2) !== $e && pc(e), e) : null;
          case 24:
            return xl(vn, e), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function Mh(t, e) {
        switch (Mn(e), e.tag) {
          case 3:
            xl(vn, e), Aa(e);
            break;
          case 26:
          case 27:
          case 5:
            hl(e);
            break;
          case 4:
            Aa(e);
            break;
          case 13:
            jl(e);
            break;
          case 19:
            w(Jn, e);
            break;
          case 10:
            xl(e.type, e);
            break;
          case 22:
          case 23:
            jl(e), xs(e), t !== null && w(co, e);
            break;
          case 24:
            xl(vn, e);
        }
      }
      function ka(t) {
        return (t.mode & 2) !== $e;
      }
      function yr(t, e) {
        ka(t) ? (pl(), Ns(e, t), ml()) : Ns(e, t);
      }
      function _h(t, e, i) {
        ka(t) ? (pl(), Yu(
          i,
          t,
          e
        ), ml()) : Yu(
          i,
          t,
          e
        );
      }
      function Ns(t, e) {
        try {
          var i = e.updateQueue, c = i !== null ? i.lastEffect : null;
          if (c !== null) {
            var r = c.next;
            i = r;
            do {
              if ((i.tag & t) === t && ((t & Ln) !== ci ? pt !== null && typeof pt.markComponentPassiveEffectMountStarted == "function" && pt.markComponentPassiveEffectMountStarted(
                e
              ) : (t & ma) !== ci && pt !== null && typeof pt.markComponentLayoutEffectMountStarted == "function" && pt.markComponentLayoutEffectMountStarted(
                e
              ), c = void 0, (t & Xa) !== ci && (yf = !0), c = it(
                e,
                y2,
                i
              ), (t & Xa) !== ci && (yf = !1), (t & Ln) !== ci ? pt !== null && typeof pt.markComponentPassiveEffectMountStopped == "function" && pt.markComponentPassiveEffectMountStopped() : (t & ma) !== ci && pt !== null && typeof pt.markComponentLayoutEffectMountStopped == "function" && pt.markComponentLayoutEffectMountStopped(), c !== void 0 && typeof c != "function")) {
                var d = void 0;
                d = i.tag & ma ? "useLayoutEffect" : i.tag & Xa ? "useInsertionEffect" : "useEffect";
                var v = void 0;
                v = c === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof c.then == "function" ? `

It looks like you wrote ` + d + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + d + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, it(
                  e,
                  function(b, Y) {
                    console.error(
                      "%s must not return anything besides a function, which is used for clean-up.%s",
                      b,
                      Y
                    );
                  },
                  d,
                  v
                );
              }
              i = i.next;
            } while (i !== r);
          }
        } catch (b) {
          Re(e, e.return, b);
        }
      }
      function Yu(t, e, i) {
        try {
          var c = e.updateQueue, r = c !== null ? c.lastEffect : null;
          if (r !== null) {
            var d = r.next;
            c = d;
            do {
              if ((c.tag & t) === t) {
                var v = c.inst, b = v.destroy;
                b !== void 0 && (v.destroy = void 0, (t & Ln) !== ci ? pt !== null && typeof pt.markComponentPassiveEffectUnmountStarted == "function" && pt.markComponentPassiveEffectUnmountStarted(
                  e
                ) : (t & ma) !== ci && pt !== null && typeof pt.markComponentLayoutEffectUnmountStarted == "function" && pt.markComponentLayoutEffectUnmountStarted(
                  e
                ), (t & Xa) !== ci && (yf = !0), it(
                  e,
                  v2,
                  e,
                  i,
                  b
                ), (t & Xa) !== ci && (yf = !1), (t & Ln) !== ci ? pt !== null && typeof pt.markComponentPassiveEffectUnmountStopped == "function" && pt.markComponentPassiveEffectUnmountStopped() : (t & ma) !== ci && pt !== null && typeof pt.markComponentLayoutEffectUnmountStopped == "function" && pt.markComponentLayoutEffectUnmountStopped());
              }
              c = c.next;
            } while (c !== d);
          }
        } catch (Y) {
          Re(e, e.return, Y);
        }
      }
      function bh(t, e) {
        ka(t) ? (pl(), Ns(e, t), ml()) : Ns(e, t);
      }
      function vr(t, e, i) {
        ka(t) ? (pl(), Yu(
          i,
          t,
          e
        ), ml()) : Yu(
          i,
          t,
          e
        );
      }
      function Ah(t) {
        var e = t.updateQueue;
        if (e !== null) {
          var i = t.stateNode;
          t.type.defaultProps || "ref" in t.memoizedProps || sf || (i.props !== t.memoizedProps && console.error(
            "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
            P(t) || "instance"
          ), i.state !== t.memoizedState && console.error(
            "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
            P(t) || "instance"
          ));
          try {
            it(
              t,
              Pf,
              e,
              i
            );
          } catch (c) {
            Re(t, t.return, c);
          }
        }
      }
      function Rh(t, e, i) {
        return t.getSnapshotBeforeUpdate(e, i);
      }
      function ce(t, e) {
        var i = e.memoizedProps, c = e.memoizedState;
        e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || sf || (e.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          P(t) || "instance"
        ), e.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          P(t) || "instance"
        ));
        try {
          var r = Ia(
            t.type,
            i,
            t.elementType === t.type
          ), d = it(
            t,
            Rh,
            e,
            r,
            c
          );
          i = xv, d !== void 0 || i.has(t.type) || (i.add(t.type), it(t, function() {
            console.error(
              "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
              P(t)
            );
          })), e.__reactInternalSnapshotBeforeUpdate = d;
        } catch (v) {
          Re(t, t.return, v);
        }
      }
      function ym(t, e, i) {
        i.props = Ia(
          t.type,
          t.memoizedProps
        ), i.state = t.memoizedState, ka(t) ? (pl(), it(
          t,
          Z0,
          t,
          e,
          i
        ), ml()) : it(
          t,
          Z0,
          t,
          e,
          i
        );
      }
      function Oa(t) {
        var e = t.ref;
        if (e !== null) {
          var i = t.stateNode;
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              i = al(i);
          }
          if (typeof e == "function")
            if (ka(t))
              try {
                pl(), t.refCleanup = e(i);
              } finally {
                ml();
              }
            else t.refCleanup = e(i);
          else
            typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
              "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
              P(t)
            ), e.current = i;
        }
      }
      function Ei(t, e) {
        try {
          it(t, Oa, t);
        } catch (i) {
          Re(t, e, i);
        }
      }
      function Ha(t, e) {
        var i = t.ref, c = t.refCleanup;
        if (i !== null)
          if (typeof c == "function")
            try {
              if (ka(t))
                try {
                  pl(), it(t, c);
                } finally {
                  ml(t);
                }
              else it(t, c);
            } catch (r) {
              Re(t, e, r);
            } finally {
              t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
            }
          else if (typeof i == "function")
            try {
              if (ka(t))
                try {
                  pl(), it(t, i, null);
                } finally {
                  ml(t);
                }
              else it(t, i, null);
            } catch (r) {
              Re(t, e, r);
            }
          else i.current = null;
      }
      function Yc(t, e, i, c) {
        var r = t.memoizedProps, d = r.id, v = r.onCommit;
        r = r.onRender, e = e === null ? "mount" : "update", tp && (e = "nested-update"), typeof r == "function" && r(
          d,
          e,
          t.actualDuration,
          t.treeBaseDuration,
          t.actualStartTime,
          i
        ), typeof v == "function" && v(
          t.memoizedProps.id,
          e,
          c,
          i
        );
      }
      function Ds(t, e, i, c) {
        var r = t.memoizedProps;
        t = r.id, r = r.onPostCommit, e = e === null ? "mount" : "update", tp && (e = "nested-update"), typeof r == "function" && r(
          t,
          e,
          c,
          i
        );
      }
      function Vu(t) {
        var e = t.type, i = t.memoizedProps, c = t.stateNode;
        try {
          it(
            t,
            Xr,
            c,
            e,
            i,
            t
          );
        } catch (r) {
          Re(t, t.return, r);
        }
      }
      function Ch(t, e, i) {
        try {
          it(
            t,
            Zs,
            t.stateNode,
            t.type,
            i,
            e,
            t
          );
        } catch (c) {
          Re(t, t.return, c);
        }
      }
      function Sr(t) {
        return t.tag === 5 || t.tag === 3 || (Qt ? t.tag === 26 : !1) || (yn ? t.tag === 27 : !1) || t.tag === 4;
      }
      function Nh(t) {
        t: for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Sr(t.return)) return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && (!yn || t.tag !== 27) && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & 2)) return t.stateNode;
        }
      }
      function gr(t, e, i) {
        var c = t.tag;
        if (c === 5 || c === 6)
          t = t.stateNode, e ? Zr(i, t, e) : Ue(i, t);
        else if (!(c === 4 || yn && c === 27) && (t = t.child, t !== null))
          for (gr(t, e, i), t = t.sibling; t !== null; )
            gr(t, e, i), t = t.sibling;
      }
      function Tl(t, e, i) {
        var c = t.tag;
        if (c === 5 || c === 6)
          t = t.stateNode, e ? wu(i, t, e) : ne(i, t);
        else if (!(c === 4 || yn && c === 27) && (t = t.child, t !== null))
          for (Tl(t, e, i), t = t.sibling; t !== null; )
            Tl(t, e, i), t = t.sibling;
      }
      function Dh(t) {
        if (fn && (!yn || t.tag !== 27)) {
          t: {
            for (var e = t.return; e !== null; ) {
              if (Sr(e)) {
                var i = e;
                break t;
              }
              e = e.return;
            }
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          }
          switch (i.tag) {
            case 27:
              if (yn) {
                e = i.stateNode, i = Nh(t), Tl(t, i, e);
                break;
              }
            case 5:
              e = i.stateNode, i.flags & 32 && (wm(e), i.flags &= -33), i = Nh(t), Tl(t, i, e);
              break;
            case 3:
            case 4:
              e = i.stateNode.containerInfo, i = Nh(t), gr(
                t,
                i,
                e
              );
              break;
            default:
              throw Error(
                "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
              );
          }
        }
      }
      function Er(t, e, i) {
        t = t.containerInfo;
        try {
          it(
            e,
            Kr,
            t,
            i
          );
        } catch (c) {
          Re(e, e.return, c);
        }
      }
      function Uh(t, e) {
        for (Qn(t.containerInfo), ta = e; ta !== null; )
          if (t = ta, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t, ta = e;
          else
            for (; ta !== null; ) {
              e = t = ta;
              var i = e.alternate, c = e.flags;
              switch (e.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  c & 1024 && i !== null && ce(e, i);
                  break;
                case 3:
                  c & 1024 && fn && Fu(e.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if (c & 1024)
                    throw Error(
                      "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                    );
              }
              if (e = t.sibling, e !== null) {
                e.return = t.return, ta = e;
                break;
              }
              ta = t.return;
            }
        return t = zv, zv = !1, t;
      }
      function xr(t, e, i) {
        var c = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            zl(t, i), c & 4 && yr(i, ma | oi);
            break;
          case 1:
            if (zl(t, i), c & 4)
              if (t = i.stateNode, e === null)
                i.type.defaultProps || "ref" in i.memoizedProps || sf || (t.props !== i.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  P(i) || "instance"
                ), t.state !== i.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  P(i) || "instance"
                )), ka(i) ? (pl(), it(
                  i,
                  Ay,
                  i,
                  t
                ), ml()) : it(
                  i,
                  Ay,
                  i,
                  t
                );
              else {
                var r = Ia(
                  i.type,
                  e.memoizedProps
                );
                e = e.memoizedState, i.type.defaultProps || "ref" in i.memoizedProps || sf || (t.props !== i.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  P(i) || "instance"
                ), t.state !== i.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  P(i) || "instance"
                )), ka(i) ? (pl(), it(
                  i,
                  G0,
                  i,
                  t,
                  r,
                  e,
                  t.__reactInternalSnapshotBeforeUpdate
                ), ml()) : it(
                  i,
                  G0,
                  i,
                  t,
                  r,
                  e,
                  t.__reactInternalSnapshotBeforeUpdate
                );
              }
            c & 64 && Ah(i), c & 512 && Ei(i, i.return);
            break;
          case 3:
            if (e = Bn(), zl(t, i), c & 64 && (c = i.updateQueue, c !== null)) {
              if (r = null, i.child !== null)
                switch (i.child.tag) {
                  case 27:
                  case 5:
                    r = al(i.child.stateNode);
                    break;
                  case 1:
                    r = i.child.stateNode;
                }
              try {
                it(
                  i,
                  Pf,
                  c,
                  r
                );
              } catch (b) {
                Re(i, i.return, b);
              }
            }
            t.effectDuration += Au(e);
            break;
          case 26:
            if (Qt) {
              zl(t, i), c & 512 && Ei(i, i.return);
              break;
            }
          case 27:
          case 5:
            zl(t, i), e === null && c & 4 && Vu(i), c & 512 && Ei(i, i.return);
            break;
          case 12:
            if (c & 4) {
              c = Bn(), zl(t, i), t = i.stateNode, t.effectDuration += Ru(c);
              try {
                it(
                  i,
                  Yc,
                  i,
                  e,
                  km,
                  t.effectDuration
                );
              } catch (b) {
                Re(i, i.return, b);
              }
            } else zl(t, i);
            break;
          case 13:
            zl(t, i), c & 4 && Hh(t, i);
            break;
          case 22:
            if (r = i.memoizedState !== null || ns, !r) {
              e = e !== null && e.memoizedState !== null || Sn;
              var d = ns, v = Sn;
              ns = r, (Sn = e) && !v ? Ti(
                t,
                i,
                (i.subtreeFlags & 8772) !== 0
              ) : zl(t, i), ns = d, Sn = v;
            }
            c & 512 && (i.memoizedProps.mode === "manual" ? Ei(i, i.return) : Ha(i, i.return));
            break;
          default:
            zl(t, i);
        }
      }
      function xi(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, xi(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && cd(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
      function tl(t, e, i) {
        for (i = i.child; i !== null; )
          Oh(
            t,
            e,
            i
          ), i = i.sibling;
      }
      function Oh(t, e, i) {
        if (qt && typeof qt.onCommitFiberUnmount == "function")
          try {
            qt.onCommitFiberUnmount(St, i);
          } catch (d) {
            Ea || (Ea = !0, console.error(
              "React instrumentation encountered an error: %s",
              d
            ));
          }
        switch (i.tag) {
          case 26:
            if (Qt) {
              Sn || Ha(i, e), tl(
                t,
                e,
                i
              ), i.memoizedState ? Iu(i.memoizedState) : i.stateNode && en(i.stateNode);
              break;
            }
          case 27:
            if (yn) {
              Sn || Ha(i, e);
              var c = On, r = Cl;
              On = i.stateNode, tl(
                t,
                e,
                i
              ), $c(i.stateNode), On = c, Cl = r;
              break;
            }
          case 5:
            Sn || Ha(i, e);
          case 6:
            if (fn) {
              if (c = On, r = Cl, On = null, tl(
                t,
                e,
                i
              ), On = c, Cl = r, On !== null)
                if (Cl)
                  try {
                    it(
                      i,
                      Ks,
                      On,
                      i.stateNode
                    );
                  } catch (d) {
                    Re(
                      i,
                      e,
                      d
                    );
                  }
                else
                  try {
                    it(
                      i,
                      Wc,
                      On,
                      i.stateNode
                    );
                  } catch (d) {
                    Re(
                      i,
                      e,
                      d
                    );
                  }
            } else
              tl(
                t,
                e,
                i
              );
            break;
          case 18:
            fn && On !== null && (Cl ? wr(
              On,
              i.stateNode
            ) : Lr(On, i.stateNode));
            break;
          case 4:
            fn ? (c = On, r = Cl, On = i.stateNode.containerInfo, Cl = !0, tl(
              t,
              e,
              i
            ), On = c, Cl = r) : (Il && Er(
              i.stateNode,
              i,
              fd()
            ), tl(
              t,
              e,
              i
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Sn || Yu(
              Xa,
              i,
              e
            ), Sn || _h(
              i,
              e,
              ma
            ), tl(
              t,
              e,
              i
            );
            break;
          case 1:
            Sn || (Ha(i, e), c = i.stateNode, typeof c.componentWillUnmount == "function" && ym(
              i,
              e,
              c
            )), tl(
              t,
              e,
              i
            );
            break;
          case 21:
            tl(
              t,
              e,
              i
            );
            break;
          case 22:
            Sn || Ha(i, e), Sn = (c = Sn) || i.memoizedState !== null, tl(
              t,
              e,
              i
            ), Sn = c;
            break;
          default:
            tl(
              t,
              e,
              i
            );
        }
      }
      function Hh(t, e) {
        if (fa && e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
          try {
            it(
              e,
              Jr,
              t
            );
          } catch (i) {
            Re(e, e.return, i);
          }
      }
      function Fp(t) {
        switch (t.tag) {
          case 13:
          case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new Tv()), e;
          case 22:
            return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Tv()), e;
          default:
            throw Error(
              "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
            );
        }
      }
      function Zt(t, e) {
        var i = Fp(t);
        e.forEach(function(c) {
          var r = Dm.bind(null, t, c);
          if (!i.has(c)) {
            if (i.add(c), Kn)
              if (rf !== null && ff !== null)
                Gc(ff, rf);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React."
                );
            c.then(r, r);
          }
        });
      }
      function Bh(t, e, i) {
        rf = i, ff = t, Tr(e, t), ff = rf = null;
      }
      function sa(t, e) {
        var i = e.deletions;
        if (i !== null)
          for (var c = 0; c < i.length; c++) {
            var r = t, d = e, v = i[c];
            if (fn) {
              var b = d;
              t: for (; b !== null; ) {
                switch (b.tag) {
                  case 27:
                  case 5:
                    On = b.stateNode, Cl = !1;
                    break t;
                  case 3:
                    On = b.stateNode.containerInfo, Cl = !0;
                    break t;
                  case 4:
                    On = b.stateNode.containerInfo, Cl = !0;
                    break t;
                }
                b = b.return;
              }
              if (On === null)
                throw Error(
                  "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
                );
              Oh(r, d, v), On = null, Cl = !1;
            } else Oh(r, d, v);
            r = v, d = r.alternate, d !== null && (d.return = null), r.return = null;
          }
        if (e.subtreeFlags & 13878)
          for (e = e.child; e !== null; )
            Tr(e, t), e = e.sibling;
      }
      function Tr(t, e) {
        var i = t.alternate, c = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            sa(e, t), Wn(t), c & 4 && (Yu(
              Xa | oi,
              t,
              t.return
            ), Ns(Xa | oi, t), _h(
              t,
              t.return,
              ma | oi
            ));
            break;
          case 1:
            sa(e, t), Wn(t), c & 512 && (Sn || i === null || Ha(i, i.return)), c & 64 && ns && (t = t.updateQueue, t !== null && (c = t.callbacks, c !== null && (i = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = i === null ? c : i.concat(c))));
            break;
          case 26:
            if (Qt) {
              var r = Bi;
              sa(e, t), Wn(t), c & 512 && (Sn || i === null || Ha(i, i.return)), c & 4 && (c = i !== null ? i.memoizedState : null, e = t.memoizedState, i === null ? e === null ? t.stateNode === null ? t.stateNode = pd(
                r,
                t.type,
                t.memoizedProps,
                t
              ) : ai(
                r,
                t.type,
                t.stateNode
              ) : t.stateNode = ni(
                r,
                e,
                t.memoizedProps
              ) : c !== e ? (c === null ? i.stateNode !== null && en(i.stateNode) : Iu(c), e === null ? ai(
                r,
                t.type,
                t.stateNode
              ) : ni(
                r,
                e,
                t.memoizedProps
              )) : e === null && t.stateNode !== null && Ch(
                t,
                t.memoizedProps,
                i.memoizedProps
              ));
              break;
            }
          case 27:
            if (yn && c & 4 && t.alternate === null) {
              r = t.stateNode;
              var d = t.memoizedProps;
              try {
                vd(r), it(
                  t,
                  Sd,
                  t.type,
                  d,
                  r,
                  t
                );
              } catch (dt) {
                Re(t, t.return, dt);
              }
            }
          case 5:
            if (sa(e, t), Wn(t), c & 512 && (Sn || i === null || Ha(i, i.return)), fn) {
              if (t.flags & 32) {
                e = t.stateNode;
                try {
                  it(t, wm, e);
                } catch (dt) {
                  Re(
                    t,
                    t.return,
                    dt
                  );
                }
              }
              c & 4 && t.stateNode != null && (e = t.memoizedProps, Ch(
                t,
                e,
                i !== null ? i.memoizedProps : e
              )), c & 1024 && (Yy = !0, t.type !== "form" && console.error(
                "Unexpected host component type. Expected a form. This is a bug in React."
              ));
            }
            break;
          case 6:
            if (sa(e, t), Wn(t), c & 4 && fn) {
              if (t.stateNode === null)
                throw Error(
                  "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
                );
              c = t.memoizedProps, i = i !== null ? i.memoizedProps : c, e = t.stateNode;
              try {
                it(
                  t,
                  mn,
                  e,
                  i,
                  c
                );
              } catch (dt) {
                Re(t, t.return, dt);
              }
            }
            break;
          case 3:
            if (r = Bn(), Qt ? ($u(), d = Bi, Bi = He(e.containerInfo), sa(e, t), Bi = d) : sa(e, t), Wn(t), c & 4) {
              if (fn && fa && i !== null && i.memoizedState.isDehydrated)
                try {
                  it(
                    t,
                    my,
                    e.containerInfo
                  );
                } catch (dt) {
                  Re(
                    t,
                    t.return,
                    dt
                  );
                }
              if (Il) {
                c = e.containerInfo, i = e.pendingChildren;
                try {
                  it(
                    t,
                    Kr,
                    c,
                    i
                  );
                } catch (dt) {
                  Re(
                    t,
                    t.return,
                    dt
                  );
                }
              }
            }
            Yy && (Yy = !1, vm(t)), e.effectDuration += Au(r);
            break;
          case 4:
            Qt ? (i = Bi, Bi = He(
              t.stateNode.containerInfo
            ), sa(e, t), Wn(t), Bi = i) : (sa(e, t), Wn(t)), c & 4 && Il && Er(
              t.stateNode,
              t,
              t.stateNode.pendingChildren
            );
            break;
          case 12:
            c = Bn(), sa(e, t), Wn(t), t.stateNode.effectDuration += Ru(c);
            break;
          case 13:
            sa(e, t), Wn(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Zy = p()), c & 4 && (c = t.updateQueue, c !== null && (t.updateQueue = null, Zt(t, c)));
            break;
          case 22:
            c & 512 && (Sn || i === null || Ha(i, i.return)), r = t.memoizedState !== null;
            var v = i !== null && i.memoizedState !== null, b = ns, Y = Sn;
            if (ns = b || r, Sn = Y || v, sa(e, t), Sn = Y, ns = b, Wn(t), e = t.stateNode, e._current = t, e._visibility &= -3, e._visibility |= e._pendingVisibility & 2, c & 8192 && (e._visibility = r ? e._visibility & -2 : e._visibility | 1, r && (e = ns || Sn, i === null || v || e || Os(t)), fn && (t.memoizedProps === null || t.memoizedProps.mode !== "manual"))) {
              t: if (i = null, fn)
                for (e = t; ; ) {
                  if (e.tag === 5 || Qt && e.tag === 26 || yn && e.tag === 27) {
                    if (i === null) {
                      v = i = e;
                      try {
                        d = v.stateNode, r ? it(v, od, d) : it(
                          v,
                          Wu,
                          v.stateNode,
                          v.memoizedProps
                        );
                      } catch (dt) {
                        Re(
                          v,
                          v.return,
                          dt
                        );
                      }
                    }
                  } else if (e.tag === 6) {
                    if (i === null) {
                      v = e;
                      try {
                        var W = v.stateNode;
                        r ? it(
                          v,
                          ti,
                          W
                        ) : it(
                          v,
                          fu,
                          W,
                          v.memoizedProps
                        );
                      } catch (dt) {
                        Re(
                          v,
                          v.return,
                          dt
                        );
                      }
                    }
                  } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                  }
                  if (e === t) break t;
                  for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                      break t;
                    i === e && (i = null), e = e.return;
                  }
                  i === e && (i = null), e.sibling.return = e.return, e = e.sibling;
                }
            }
            c & 4 && (c = t.updateQueue, c !== null && (i = c.retryQueue, i !== null && (c.retryQueue = null, Zt(t, i))));
            break;
          case 19:
            sa(e, t), Wn(t), c & 4 && (c = t.updateQueue, c !== null && (t.updateQueue = null, Zt(t, c)));
            break;
          case 21:
            break;
          default:
            sa(e, t), Wn(t);
        }
      }
      function Wn(t) {
        var e = t.flags;
        if (e & 2) {
          try {
            it(t, Dh, t);
          } catch (i) {
            Re(t, t.return, i);
          }
          t.flags &= -3;
        }
        e & 4096 && (t.flags &= -4097);
      }
      function vm(t) {
        if (t.subtreeFlags & 1024)
          for (t = t.child; t !== null; ) {
            var e = t;
            vm(e), e.tag === 5 && e.flags & 1024 && Gr(e.stateNode), t = t.sibling;
          }
      }
      function Pp(t, e, i) {
        rf = i, ff = e, xr(e, t.alternate, t), ff = rf = null;
      }
      function zl(t, e) {
        if (e.subtreeFlags & 8772)
          for (e = e.child; e !== null; )
            xr(t, e.alternate, e), e = e.sibling;
      }
      function Us(t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            _h(
              t,
              t.return,
              ma
            ), Os(t);
            break;
          case 1:
            Ha(t, t.return);
            var e = t.stateNode;
            typeof e.componentWillUnmount == "function" && ym(
              t,
              t.return,
              e
            ), Os(t);
            break;
          case 26:
          case 27:
          case 5:
            Ha(t, t.return), Os(t);
            break;
          case 22:
            Ha(t, t.return), t.memoizedState === null && Os(t);
            break;
          default:
            Os(t);
        }
      }
      function Os(t) {
        for (t = t.child; t !== null; )
          Us(t), t = t.sibling;
      }
      function Sm(t, e, i, c) {
        var r = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ti(
              t,
              i,
              c
            ), yr(i, ma);
            break;
          case 1:
            if (Ti(
              t,
              i,
              c
            ), e = i.stateNode, typeof e.componentDidMount == "function" && it(
              i,
              Ay,
              i,
              e
            ), e = i.updateQueue, e !== null) {
              t = i.stateNode;
              try {
                it(
                  i,
                  sm,
                  e,
                  t
                );
              } catch (d) {
                Re(i, i.return, d);
              }
            }
            c && r & 64 && Ah(i), Ei(i, i.return);
            break;
          case 26:
          case 27:
          case 5:
            Ti(
              t,
              i,
              c
            ), c && e === null && r & 4 && Vu(i), Ei(i, i.return);
            break;
          case 12:
            if (c && r & 4) {
              r = Bn(), Ti(
                t,
                i,
                c
              ), c = i.stateNode, c.effectDuration += Ru(r);
              try {
                it(
                  i,
                  Yc,
                  i,
                  e,
                  km,
                  c.effectDuration
                );
              } catch (d) {
                Re(i, i.return, d);
              }
            } else
              Ti(
                t,
                i,
                c
              );
            break;
          case 13:
            Ti(
              t,
              i,
              c
            ), c && r & 4 && Hh(t, i);
            break;
          case 22:
            i.memoizedState === null && Ti(
              t,
              i,
              c
            ), Ei(i, i.return);
            break;
          default:
            Ti(
              t,
              i,
              c
            );
        }
      }
      function Ti(t, e, i) {
        for (i = i && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
          Sm(
            t,
            e.alternate,
            e,
            i
          ), e = e.sibling;
      }
      function qh(t, e) {
        var i = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== i && (t != null && nu(t), i != null && qc(i));
      }
      function Yh(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (nu(e), t != null && qc(t));
      }
      function wl(t, e, i, c) {
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null; )
            Vh(
              t,
              e,
              i,
              c
            ), e = e.sibling;
      }
      function Vh(t, e, i, c) {
        var r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            wl(
              t,
              e,
              i,
              c
            ), r & 2048 && bh(e, Ln | oi);
            break;
          case 3:
            var d = Bn();
            wl(
              t,
              e,
              i,
              c
            ), r & 2048 && (i = null, e.alternate !== null && (i = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== i && (nu(e), i != null && qc(i))), t.passiveEffectDuration += Au(d);
            break;
          case 12:
            if (r & 2048) {
              d = Bn(), wl(
                t,
                e,
                i,
                c
              ), t = e.stateNode, t.passiveEffectDuration += Ru(d);
              try {
                it(
                  e,
                  Ds,
                  e,
                  e.alternate,
                  km,
                  t.passiveEffectDuration
                );
              } catch (v) {
                Re(e, e.return, v);
              }
            } else
              wl(
                t,
                e,
                i,
                c
              );
            break;
          case 23:
            break;
          case 22:
            d = e.stateNode, e.memoizedState !== null ? d._visibility & 4 ? wl(
              t,
              e,
              i,
              c
            ) : Vc(
              t,
              e
            ) : d._visibility & 4 ? wl(
              t,
              e,
              i,
              c
            ) : (d._visibility |= 4, zi(
              t,
              e,
              i,
              c,
              (e.subtreeFlags & 10256) !== 0
            )), r & 2048 && qh(
              e.alternate,
              e
            );
            break;
          case 24:
            wl(
              t,
              e,
              i,
              c
            ), r & 2048 && Yh(e.alternate, e);
            break;
          default:
            wl(
              t,
              e,
              i,
              c
            );
        }
      }
      function zi(t, e, i, c, r) {
        for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; )
          jh(
            t,
            e,
            i,
            c,
            r
          ), e = e.sibling;
      }
      function jh(t, e, i, c, r) {
        var d = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            zi(
              t,
              e,
              i,
              c,
              r
            ), bh(e, Ln);
            break;
          case 23:
            break;
          case 22:
            var v = e.stateNode;
            e.memoizedState !== null ? v._visibility & 4 ? zi(
              t,
              e,
              i,
              c,
              r
            ) : Vc(
              t,
              e
            ) : (v._visibility |= 4, zi(
              t,
              e,
              i,
              c,
              r
            )), r && d & 2048 && qh(
              e.alternate,
              e
            );
            break;
          case 24:
            zi(
              t,
              e,
              i,
              c,
              r
            ), r && d & 2048 && Yh(e.alternate, e);
            break;
          default:
            zi(
              t,
              e,
              i,
              c,
              r
            );
        }
      }
      function Vc(t, e) {
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null; ) {
            var i = t, c = e, r = c.flags;
            switch (c.tag) {
              case 22:
                Vc(
                  i,
                  c
                ), r & 2048 && qh(
                  c.alternate,
                  c
                );
                break;
              case 24:
                Vc(
                  i,
                  c
                ), r & 2048 && Yh(
                  c.alternate,
                  c
                );
                break;
              default:
                Vc(
                  i,
                  c
                );
            }
            e = e.sibling;
          }
      }
      function ju(t) {
        if (t.subtreeFlags & hf)
          for (t = t.child; t !== null; )
            zr(t), t = t.sibling;
      }
      function zr(t) {
        switch (t.tag) {
          case 26:
            ju(t), t.flags & hf && (t.memoizedState !== null ? Ls(
              Bi,
              t.memoizedState,
              t.memoizedProps
            ) : jr(t.type, t.memoizedProps));
            break;
          case 5:
            ju(t), t.flags & hf && jr(t.type, t.memoizedProps);
            break;
          case 3:
          case 4:
            if (Qt) {
              var e = Bi;
              Bi = He(
                t.stateNode.containerInfo
              ), ju(t), Bi = e;
            } else ju(t);
            break;
          case 22:
            t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = hf, hf = 16777216, ju(t), hf = e) : ju(t));
            break;
          default:
            ju(t);
        }
      }
      function Wl(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
          e.child = null;
          do
            e = t.sibling, t.sibling = null, t = e;
          while (t !== null);
        }
      }
      function hn(t) {
        var e = t.deletions;
        if (t.flags & 16) {
          if (e !== null)
            for (var i = 0; i < e.length; i++) {
              var c = e[i];
              ta = c, gm(
                c,
                t
              );
            }
          Wl(t);
        }
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            Mi(t), t = t.sibling;
      }
      function Mi(t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            hn(t), t.flags & 2048 && vr(
              t,
              t.return,
              Ln | oi
            );
            break;
          case 3:
            var e = Bn();
            hn(t), t.stateNode.passiveEffectDuration += Au(e);
            break;
          case 12:
            e = Bn(), hn(t), t.stateNode.passiveEffectDuration += Ru(e);
            break;
          case 22:
            e = t.stateNode, t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5, ca(t)) : hn(t);
            break;
          default:
            hn(t);
        }
      }
      function ca(t) {
        var e = t.deletions;
        if (t.flags & 16) {
          if (e !== null)
            for (var i = 0; i < e.length; i++) {
              var c = e[i];
              ta = c, gm(
                c,
                t
              );
            }
          Wl(t);
        }
        for (t = t.child; t !== null; )
          Gh(t), t = t.sibling;
      }
      function Gh(t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            vr(
              t,
              t.return,
              Ln
            ), ca(t);
            break;
          case 22:
            var e = t.stateNode;
            e._visibility & 4 && (e._visibility &= -5, ca(t));
            break;
          default:
            ca(t);
        }
      }
      function gm(t, e) {
        for (; ta !== null; ) {
          var i = ta, c = i;
          switch (c.tag) {
            case 0:
            case 11:
            case 15:
              vr(
                c,
                e,
                Ln
              );
              break;
            case 23:
            case 22:
              c.memoizedState !== null && c.memoizedState.cachePool !== null && (c = c.memoizedState.cachePool.pool, c != null && nu(c));
              break;
            case 24:
              qc(c.memoizedState.cache);
          }
          if (c = i.child, c !== null) c.return = i, ta = c;
          else
            t: for (i = t; ta !== null; ) {
              c = ta;
              var r = c.sibling, d = c.return;
              if (xi(c), c === i) {
                ta = null;
                break t;
              }
              if (r !== null) {
                r.return = d, ta = r;
                break t;
              }
              ta = d;
            }
        }
      }
      function Fn(t) {
        var e = Ju(t);
        if (e != null) {
          if (typeof e.memoizedProps["data-testname"] != "string")
            throw Error(
              "Invalid host root specified. Should be either a React container or a node with a testname attribute."
            );
          return e;
        }
        if (t = Lm(t), t === null)
          throw Error(
            "Could not find React container within specified host subtree."
          );
        return t.stateNode.current;
      }
      function _i(t, e) {
        var i = t.tag;
        switch (e.$$typeof) {
          case mp:
            if (t.type === e.value) return !0;
            break;
          case pp:
            t: {
              for (e = e.value, t = [t, 0], i = 0; i < t.length; ) {
                var c = t[i++], r = c.tag, d = t[i++], v = e[d];
                if (r !== 5 && r !== 26 && r !== 27 || !In(c)) {
                  for (; v != null && _i(c, v); )
                    d++, v = e[d];
                  if (d === e.length) {
                    e = !0;
                    break t;
                  } else
                    for (c = c.child; c !== null; )
                      t.push(c, d), c = c.sibling;
                }
              }
              e = !1;
            }
            return e;
          case yp:
            if ((i === 5 || i === 26 || i === 27) && kl(t.stateNode, e.value))
              return !0;
            break;
          case Sp:
            if ((i === 5 || i === 6 || i === 26 || i === 27) && (t = Qr(t), t !== null && 0 <= t.indexOf(e.value)))
              return !0;
            break;
          case vp:
            if ((i === 5 || i === 26 || i === 27) && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === e.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error("Invalid selector type specified.");
        }
        return !1;
      }
      function Qh(t) {
        switch (t.$$typeof) {
          case mp:
            return "<" + (at(t.value) || "Unknown") + ">";
          case pp:
            return ":has(" + (Qh(t) || "") + ")";
          case yp:
            return '[role="' + t.value + '"]';
          case Sp:
            return '"' + t.value + '"';
          case vp:
            return '[data-testname="' + t.value + '"]';
          default:
            throw Error("Invalid selector type specified.");
        }
      }
      function Em(t, e) {
        var i = [];
        t = [t, 0];
        for (var c = 0; c < t.length; ) {
          var r = t[c++], d = r.tag, v = t[c++], b = e[v];
          if (d !== 5 && d !== 26 && d !== 27 || !In(r)) {
            for (; b != null && _i(r, b); )
              v++, b = e[v];
            if (v === e.length) i.push(r);
            else
              for (r = r.child; r !== null; )
                t.push(r, v), r = r.sibling;
          }
        }
        return i;
      }
      function Mr(t, e) {
        if (!ll)
          throw Error("Test selector API is not supported by this renderer.");
        t = Fn(t), t = Em(t, e), e = [], t = Array.from(t);
        for (var i = 0; i < t.length; ) {
          var c = t[i++], r = c.tag;
          if (r === 5 || r === 26 || r === 27)
            In(c) || e.push(c.stateNode);
          else
            for (c = c.child; c !== null; )
              t.push(c), c = c.sibling;
        }
        return e;
      }
      function Ip() {
        ll && gp.forEach(function(t) {
          return t();
        });
      }
      function Xh() {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return t || F.actQueue === null || console.error(
          "The current testing environment is not configured to support act(...)"
        ), t;
      }
      function Ba(t) {
        if ((qe & xa) !== Ka && he !== 0)
          return he & -he;
        var e = F.T;
        return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), t = no, t !== 0 ? t : Mo()) : Vs();
      }
      function Zh() {
        Dl === 0 && (Dl = !(he & 536870912) || Te ? Me() : 536870912);
        var t = si.current;
        return t !== null && (t.flags |= 32), Dl;
      }
      function tn(t, e, i) {
        if (yf && console.error("useInsertionEffect must not schedule updates."), Wy && (zp = !0), (t === We && Fe === ro || t.cancelPendingCommit !== null) && (Hs(t, 0), Ai(
          t,
          he,
          Dl,
          !1
        )), ve(t, i), qe & xa && t === We) {
          if (Gn)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                t = oe && P(oe) || "Unknown", Cv.has(t) || (Cv.add(t), e = P(e) || "Unknown", console.error(
                  "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                  e,
                  t,
                  t
                ));
                break;
              case 1:
                Rv || (console.error(
                  "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                ), Rv = !0);
            }
        } else
          Kn && fe(t, e, i), Hm(e), t === We && ((qe & xa) === Ka && (ac |= i), gn === oo && Ai(
            t,
            he,
            Dl,
            !1
          )), yl(t);
      }
      function Gu(t, e, i) {
        if ((qe & (xa | Su)) !== Ka)
          throw Error("Should not already be working.");
        var c = !i && (e & 60) === 0 && (e & t.expiredLanes) === 0 || Ye(t, e), r = c ? kp(t, e) : Lh(t, e, !0), d = c;
        do {
          if (r === as) {
            pf && !c && Ai(t, e, 0, !1);
            break;
          } else if (r === Ep)
            Ai(
              t,
              e,
              0,
              !ls
            );
          else {
            if (i = t.current.alternate, d && !$p(i)) {
              r = Lh(t, e, !1), d = !1;
              continue;
            }
            if (r === df) {
              if (d = e, t.errorRecoveryDisabledLanes & d)
                var v = 0;
              else
                v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
              if (v !== 0) {
                e = v;
                t: {
                  r = t;
                  var b = v;
                  v = Yd;
                  var Y = fa && r.current.memoizedState.isDehydrated;
                  if (Y && (Hs(
                    r,
                    b
                  ).flags |= 256), b = Lh(
                    r,
                    b,
                    !1
                  ), b !== df) {
                    if (Qy && !Y) {
                      r.errorRecoveryDisabledLanes |= d, ac |= d, r = oo;
                      break t;
                    }
                    r = qi, qi = v, r !== null && bi(r);
                  }
                  r = b;
                }
                if (d = !1, r !== df) continue;
              }
            }
            if (r === Od) {
              Hs(t, 0), Ai(t, e, 0, !0);
              break;
            }
            t: {
              switch (c = t, r) {
                case as:
                case Od:
                  throw Error("Root did not complete. This is a bug in React.");
                case oo:
                  if ((e & 4194176) === e) {
                    Ai(
                      c,
                      e,
                      Dl,
                      !ls
                    );
                    break t;
                  }
                  break;
                case df:
                  qi = null;
                  break;
                case Vy:
                case Mv:
                  break;
                default:
                  throw Error("Unknown root exit status.");
              }
              if (c.finishedWork = i, c.finishedLanes = e, F.actQueue !== null)
                Wh(
                  c,
                  qi,
                  jd,
                  xp,
                  Dl,
                  ac,
                  fo,
                  Av,
                  -0,
                  0
                );
              else {
                if ((e & 62914560) === e && (r = Zy + bv - p(), 10 < r)) {
                  if (Ai(
                    c,
                    e,
                    Dl,
                    !ls
                  ), Ot(c, 0) !== 0) break t;
                  c.timeoutHandle = _l(
                    xm.bind(
                      null,
                      c,
                      i,
                      qi,
                      jd,
                      xp,
                      e,
                      Dl,
                      ac,
                      fo,
                      ls,
                      R2,
                      -0,
                      0
                    ),
                    r
                  );
                  break t;
                }
                xm(
                  c,
                  i,
                  qi,
                  jd,
                  xp,
                  e,
                  Dl,
                  ac,
                  fo,
                  ls,
                  Av,
                  -0,
                  0
                );
              }
            }
          }
          break;
        } while (!0);
        yl(t);
      }
      function bi(t) {
        qi === null ? qi = t : qi.push.apply(
          qi,
          t
        );
      }
      function xm(t, e, i, c, r, d, v, b, Y, W, dt, yt, Et) {
        var pe = e.subtreeFlags;
        if ((pe & 8192 || (pe & 16785408) === 16785408) && (ou(), zr(e), e = fy(), e !== null)) {
          t.cancelPendingCommit = e(
            Wh.bind(
              null,
              t,
              i,
              c,
              r,
              v,
              b,
              Y,
              A2,
              yt,
              Et
            )
          ), Ai(
            t,
            d,
            v,
            !W
          );
          return;
        }
        Wh(
          t,
          i,
          c,
          r,
          v,
          b,
          Y,
          dt,
          yt,
          Et
        );
      }
      function $p(t) {
        for (var e = t; ; ) {
          var i = e.tag;
          if ((i === 0 || i === 11 || i === 15) && e.flags & 16384 && (i = e.updateQueue, i !== null && (i = i.stores, i !== null)))
            for (var c = 0; c < i.length; c++) {
              var r = i[c], d = r.getSnapshot;
              r = r.value;
              try {
                if (!Z(d(), r)) return !1;
              } catch {
                return !1;
              }
            }
          if (i = e.child, e.subtreeFlags & 16384 && i !== null)
            i.return = e, e = i;
          else {
            if (e === t) break;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) return !0;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        }
        return !0;
      }
      function Ai(t, e, i, c) {
        e &= ~Xy, e &= ~ac, t.suspendedLanes |= e, t.pingedLanes &= ~e, c && (t.warmLanes |= e), c = t.expirationTimes;
        for (var r = e; 0 < r; ) {
          var d = 31 - Zn(r), v = 1 << d;
          c[d] = -1, r &= ~v;
        }
        i !== 0 && Ge(t, i, e);
      }
      function au() {
        return (qe & (xa | Su)) === Ka ? (Ki(0), !1) : !0;
      }
      function Kh() {
        if (oe !== null) {
          if (Fe === cl)
            var t = oe.return;
          else
            t = oe, Uc(), Bo(t), tf = null, Rd = 0, t = oe;
          for (; t !== null; )
            Mh(t.alternate, t), t = t.return;
          oe = null;
        }
      }
      function Hs(t, e) {
        t.finishedWork = null, t.finishedLanes = 0;
        var i = t.timeoutHandle;
        i !== Jc && (t.timeoutHandle = Jc, Pl(i)), i = t.cancelPendingCommit, i !== null && (t.cancelPendingCommit = null, i()), Kh(), We = t, oe = i = uu(t.current, null), he = e, Fe = cl, Nl = null, ls = !1, pf = Ye(t, e), Qy = !1, gn = as, fo = Dl = Xy = ac = nc = 0, qi = Yd = null, xp = !1, e & 8 && (e |= e & 32);
        var c = t.entangledLanes;
        if (c !== 0)
          for (t = t.entanglements, c &= e; 0 < c; ) {
            var r = 31 - Zn(c), d = 1 << r;
            e |= t[r], c &= ~d;
          }
        return gu = e, on(), Hi.discardPendingWarnings(), i;
      }
      function Tm(t, e) {
        Lt = null, F.H = vu, F.getCurrentStack = null, Gn = !1, jn = null, e === ip ? (e = Ro(), Fe = Bd) : e === _y ? (e = Ro(), Fe = _v) : Fe = e === dv ? Gy : e !== null && typeof e == "object" && typeof e.then == "function" ? mf : Hd, Nl = e;
        var i = oe;
        if (i === null)
          gn = Od, Sl(
            t,
            be(e, t.current)
          );
        else
          switch (i.mode & 2 && xo(i), Ne(), Fe) {
            case Hd:
              pt !== null && typeof pt.markComponentErrored == "function" && pt.markComponentErrored(
                i,
                e,
                he
              );
              break;
            case ro:
            case Bd:
            case mf:
            case qd:
              pt !== null && typeof pt.markComponentSuspended == "function" && pt.markComponentSuspended(
                i,
                e,
                he
              );
          }
      }
      function Bs() {
        var t = si.current;
        return t === null ? !0 : (he & 4194176) === he ? yu === null : (he & 62914560) === he || he & 536870912 ? t === yu : !1;
      }
      function zm() {
        var t = F.H;
        return F.H = vu, t === null ? vu : t;
      }
      function Mm() {
        var t = F.A;
        return F.A = z2, t;
      }
      function Jh() {
        gn = oo, ls || (he & 4194176) !== he && si.current !== null || (pf = !0), !(nc & 134217727) && !(ac & 134217727) || We === null || Ai(
          We,
          he,
          Dl,
          !1
        );
      }
      function Lh(t, e, i) {
        var c = qe;
        qe |= xa;
        var r = zm(), d = Mm();
        if (We !== t || he !== e) {
          if (Kn) {
            var v = t.memoizedUpdaters;
            0 < v.size && (Gc(t, he), v.clear()), Ce(t, e);
          }
          jd = null, Hs(t, e);
        }
        _e(e), e = !1, v = gn;
        t: do
          try {
            if (Fe !== cl && oe !== null) {
              var b = oe, Y = Nl;
              switch (Fe) {
                case Gy:
                  Kh(), v = Ep;
                  break t;
                case Bd:
                case ro:
                case mf:
                  si.current === null && (e = !0);
                  var W = Fe;
                  if (Fe = cl, Nl = null, qs(t, b, Y, W), i && pf) {
                    v = as;
                    break t;
                  }
                  break;
                default:
                  W = Fe, Fe = cl, Nl = null, qs(t, b, Y, W);
              }
            }
            _m(), v = gn;
            break;
          } catch (dt) {
            Tm(t, dt);
          }
        while (!0);
        return e && t.shellSuspendCounter++, Uc(), qe = c, F.H = r, F.A = d, Xt(), oe === null && (We = null, he = 0, on()), v;
      }
      function _m() {
        for (; oe !== null; ) bm(oe);
      }
      function kp(t, e) {
        var i = qe;
        qe |= xa;
        var c = zm(), r = Mm();
        if (We !== t || he !== e) {
          if (Kn) {
            var d = t.memoizedUpdaters;
            0 < d.size && (Gc(t, he), d.clear()), Ce(t, e);
          }
          jd = null, Vd = p() + Ky, Hs(t, e);
        } else
          pf = Ye(
            t,
            e
          );
        _e(e);
        t: do
          try {
            if (Fe !== cl && oe !== null)
              e: switch (e = oe, d = Nl, Fe) {
                case Hd:
                  Fe = cl, Nl = null, qs(
                    t,
                    e,
                    d,
                    Hd
                  );
                  break;
                case ro:
                  if (Ao(d)) {
                    Fe = cl, Nl = null, Am(e);
                    break;
                  }
                  e = function() {
                    Fe === ro && We === t && (Fe = qd), yl(t);
                  }, d.then(e, e);
                  break t;
                case Bd:
                  Fe = qd;
                  break t;
                case _v:
                  Fe = jy;
                  break t;
                case qd:
                  Ao(d) ? (Fe = cl, Nl = null, Am(e)) : (Fe = cl, Nl = null, qs(
                    t,
                    e,
                    d,
                    qd
                  ));
                  break;
                case jy:
                  var v = null;
                  switch (oe.tag) {
                    case 26:
                      v = oe.memoizedState;
                    case 5:
                    case 27:
                      var b = oe, Y = b.type, W = b.pendingProps;
                      if (v ? Ga(v) : Lu(Y, W)) {
                        Fe = cl, Nl = null;
                        var dt = b.sibling;
                        if (dt !== null) oe = dt;
                        else {
                          var yt = b.return;
                          yt !== null ? (oe = yt, _r(yt)) : oe = null;
                        }
                        break e;
                      }
                      break;
                    default:
                      console.error(
                        "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                      );
                  }
                  Fe = cl, Nl = null, qs(
                    t,
                    e,
                    d,
                    jy
                  );
                  break;
                case mf:
                  Fe = cl, Nl = null, qs(
                    t,
                    e,
                    d,
                    mf
                  );
                  break;
                case Gy:
                  Kh(), gn = Ep;
                  break t;
                default:
                  throw Error(
                    "Unexpected SuspendedReason. This is a bug in React."
                  );
              }
            F.actQueue !== null ? _m() : ty();
            break;
          } catch (Et) {
            Tm(t, Et);
          }
        while (!0);
        return Uc(), F.H = c, F.A = r, qe = i, oe !== null ? (pt !== null && typeof pt.markRenderYielded == "function" && pt.markRenderYielded(), as) : (Xt(), We = null, he = 0, on(), gn);
      }
      function ty() {
        for (; oe !== null && !f(); )
          bm(oe);
      }
      function bm(t) {
        var e = t.alternate;
        (t.mode & 2) !== $e ? (mc(t), e = it(
          t,
          rr,
          e,
          t,
          gu
        ), xo(t)) : e = it(
          t,
          rr,
          e,
          t,
          gu
        ), t.memoizedProps = t.pendingProps, e === null ? _r(t) : oe = e;
      }
      function Am(t) {
        var e = it(t, ey, t);
        t.memoizedProps = t.pendingProps, e === null ? _r(t) : oe = e;
      }
      function ey(t) {
        var e = t.alternate, i = (t.mode & 2) !== $e;
        switch (i && mc(t), t.tag) {
          case 15:
          case 0:
            e = ir(
              e,
              t,
              t.pendingProps,
              t.type,
              void 0,
              he
            );
            break;
          case 11:
            e = ir(
              e,
              t,
              t.pendingProps,
              t.type.render,
              t.ref,
              he
            );
            break;
          case 5:
            Bo(t);
          default:
            Mh(e, t), t = oe = Ym(t, gu), e = rr(e, t, gu);
        }
        return i && xo(t), e;
      }
      function qs(t, e, i, c) {
        Uc(), Bo(e), tf = null, Rd = 0;
        var r = e.return;
        try {
          if (As(
            t,
            r,
            e,
            i,
            he
          )) {
            gn = Od, Sl(
              t,
              be(i, t.current)
            ), oe = null;
            return;
          }
        } catch (d) {
          if (r !== null) throw oe = r, d;
          gn = Od, Sl(
            t,
            be(i, t.current)
          ), oe = null;
          return;
        }
        e.flags & 32768 ? (Te || c === Hd ? t = !0 : pf || he & 536870912 ? t = !1 : (ls = t = !0, (c === ro || c === Bd || c === mf) && (c = si.current, c !== null && c.tag === 13 && (c.flags |= 16384))), wh(e, t)) : _r(e);
      }
      function _r(t) {
        var e = t;
        do {
          if (e.flags & 32768) {
            wh(
              e,
              ls
            );
            return;
          }
          var i = e.alternate;
          if (t = e.return, mc(e), i = it(
            e,
            pr,
            i,
            e,
            gu
          ), (e.mode & 2) !== $e && Kf(e), i !== null) {
            oe = i;
            return;
          }
          if (e = e.sibling, e !== null) {
            oe = e;
            return;
          }
          oe = e = t;
        } while (e !== null);
        gn === as && (gn = Mv);
      }
      function wh(t, e) {
        do {
          var i = qu(t.alternate, t);
          if (i !== null) {
            i.flags &= 32767, oe = i;
            return;
          }
          if ((t.mode & 2) !== $e) {
            Kf(t), i = t.actualDuration;
            for (var c = t.child; c !== null; )
              i += c.actualDuration, c = c.sibling;
            t.actualDuration = i;
          }
          if (i = t.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !e && (t = t.sibling, t !== null)) {
            oe = t;
            return;
          }
          oe = t = i;
        } while (t !== null);
        gn = Ep, oe = null;
      }
      function Wh(t, e, i, c, r, d, v, b, Y, W) {
        var dt = F.T, yt = Ni();
        try {
          Xn(2), F.T = null, ny(
            t,
            e,
            i,
            c,
            yt,
            r,
            d,
            v,
            b,
            Y,
            W
          );
        } finally {
          F.T = dt, Xn(yt);
        }
      }
      function ny(t, e, i, c, r, d, v, b) {
        do
          lu();
        while (ho !== null);
        if (Hi.flushLegacyContextWarning(), Hi.flushPendingUnsafeLifecycleWarnings(), (qe & (xa | Su)) !== Ka)
          throw Error("Should not already be working.");
        var Y = t.finishedWork;
        if (c = t.finishedLanes, pt !== null && typeof pt.markCommitStarted == "function" && pt.markCommitStarted(c), Y === null) return At(), null;
        if (c === 0 && console.error(
          "root.finishedLanes should not be empty during a commit. This is a bug in React."
        ), t.finishedWork = null, t.finishedLanes = 0, Y === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
        var W = Y.lanes | Y.childLanes;
        if (W |= yy, te(
          t,
          c,
          W,
          d,
          v,
          b
        ), t === We && (oe = We = null, he = 0), !(Y.subtreeFlags & 10256) && !(Y.flags & 10256) || Tp || (Tp = !0, Jy = W, Ly = i, iy(Q, function() {
          return lu(), null;
        })), km = Fr(), i = (Y.flags & 15990) !== 0, Y.subtreeFlags & 15990 || i ? (i = F.T, F.T = null, d = Ni(), Xn(2), v = qe, qe |= Su, Uh(t, Y), Bh(
          t,
          Y,
          c
        ), Kc(t.containerInfo), t.current = Y, pt !== null && typeof pt.markLayoutEffectsStarted == "function" && pt.markLayoutEffectsStarted(
          c
        ), Pp(Y, t, c), pt !== null && typeof pt.markLayoutEffectsStopped == "function" && pt.markLayoutEffectsStopped(), m(), qe = v, Xn(d), F.T = i) : t.current = Y, (i = Tp) ? (Tp = !1, ho = t, Gd = c) : (Rm(t, W), mo = 0, Xd = null), W = t.pendingLanes, W === 0 && (lc = null), i || Um(t), En(Y.stateNode, r), Kn && t.memoizedUpdaters.clear(), Ip(), yl(t), e !== null)
          for (r = t.onRecoverableError, Y = 0; Y < e.length; Y++)
            W = e[Y], i = ay(W.stack), it(
              W.source,
              r,
              W.value,
              i
            );
        return Gd & 3 && lu(), W = t.pendingLanes, c & 4194218 && W & 42 ? (ep = !0, t === wy ? Qd++ : (Qd = 0, wy = t)) : Qd = 0, Ki(0), At(), null;
      }
      function ay(t) {
        return t = { componentStack: t }, Object.defineProperty(t, "digest", {
          get: function() {
            console.error(
              'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
            );
          }
        }), t;
      }
      function Rm(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, qc(e)));
      }
      function lu() {
        if (ho !== null) {
          var t = ho, e = Jy;
          Jy = 0;
          var i = rl(Gd), c = 32 > i ? 32 : i;
          i = F.T;
          var r = Ni();
          try {
            if (Xn(c), F.T = null, ho === null)
              var d = !1;
            else {
              c = Ly, Ly = null;
              var v = ho, b = Gd;
              if (ho = null, Gd = 0, (qe & (xa | Su)) !== Ka)
                throw Error(
                  "Cannot flush passive effects while already rendering."
                );
              Wy = !0, zp = !1, pt !== null && typeof pt.markPassiveEffectsStarted == "function" && pt.markPassiveEffectsStarted(b);
              var Y = qe;
              if (qe |= Su, Mi(v.current), Vh(
                v,
                v.current,
                b,
                c
              ), pt !== null && typeof pt.markPassiveEffectsStopped == "function" && pt.markPassiveEffectsStopped(), Um(v), qe = Y, Ki(0, !1), zp ? v === Xd ? mo++ : (mo = 0, Xd = v) : mo = 0, zp = Wy = !1, qt && typeof qt.onPostCommitFiberRoot == "function")
                try {
                  qt.onPostCommitFiberRoot(St, v);
                } catch (dt) {
                  Ea || (Ea = !0, console.error(
                    "React instrumentation encountered an error: %s",
                    dt
                  ));
                }
              var W = v.current.stateNode;
              W.effectDuration = 0, W.passiveEffectDuration = 0, d = !0;
            }
            return d;
          } finally {
            Xn(r), F.T = i, Rm(t, e);
          }
        }
        return !1;
      }
      function Cm(t, e, i) {
        e = be(i, e), e = Cc(t.stateNode, e, 2), t = Na(t, e, 2), t !== null && (ve(t, 2), yl(t));
      }
      function Re(t, e, i) {
        if (yf = !1, t.tag === 3)
          Cm(t, t, i);
        else {
          for (; e !== null; ) {
            if (e.tag === 3) {
              Cm(
                e,
                t,
                i
              );
              return;
            }
            if (e.tag === 1) {
              var c = e.stateNode;
              if (typeof e.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (lc === null || !lc.has(c))) {
                t = be(i, t), i = Jl(2), c = Na(e, i, 2), c !== null && (ar(
                  i,
                  c,
                  e,
                  t
                ), ve(c, 2), yl(c));
                return;
              }
            }
            e = e.return;
          }
          console.error(
            `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
            i
          );
        }
      }
      function br(t, e, i) {
        var c = t.pingCache;
        if (c === null) {
          c = t.pingCache = new M2();
          var r = /* @__PURE__ */ new Set();
          c.set(e, r);
        } else
          r = c.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(e, r));
        r.has(i) || (Qy = !0, r.add(i), c = ly.bind(null, t, e, i), Kn && Gc(t, i), e.then(c, c));
      }
      function ly(t, e, i) {
        var c = t.pingCache;
        c !== null && c.delete(e), t.pingedLanes |= t.suspendedLanes & i, t.warmLanes &= ~i, Xh() && F.actQueue === null && console.error(
          `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
        ), We === t && (he & i) === i && (gn === oo || gn === Vy && (he & 62914560) === he && p() - Zy < bv ? (qe & xa) === Ka && Hs(t, 0) : Xy |= i, fo === he && (fo = 0)), yl(t);
      }
      function Fh(t, e) {
        e === 0 && (e = je()), t = Je(t, e), t !== null && (ve(t, e), yl(t));
      }
      function Nm(t) {
        var e = t.memoizedState, i = 0;
        e !== null && (i = e.retryLane), Fh(t, i);
      }
      function Dm(t, e) {
        var i = 0;
        switch (t.tag) {
          case 13:
            var c = t.stateNode, r = t.memoizedState;
            r !== null && (i = r.retryLane);
            break;
          case 19:
            c = t.stateNode;
            break;
          case 22:
            c = t.stateNode._retryCache;
            break;
          default:
            throw Error(
              "Pinged unknown suspense boundary type. This is probably a bug in React."
            );
        }
        c !== null && c.delete(e), Fh(t, i);
      }
      function jc(t, e, i) {
        if (e.subtreeFlags & 33562624)
          for (e = e.child; e !== null; ) {
            var c = t, r = e, d = r.type === Ur;
            d = i || d, r.tag !== 22 ? r.flags & 33554432 ? d && it(
              r,
              Ar,
              c,
              r,
              (r.mode & 64) === $e
            ) : jc(
              c,
              r,
              d
            ) : r.memoizedState === null && (d && r.flags & 8192 ? it(
              r,
              Ar,
              c,
              r
            ) : r.subtreeFlags & 33554432 && it(
              r,
              jc,
              c,
              r,
              d
            )), e = e.sibling;
          }
      }
      function Ar(t, e) {
        var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
        D(!0);
        try {
          Us(e), i && Gh(e), Sm(t, e.alternate, e, !1), i && jh(t, e, 0, null, !1);
        } finally {
          D(!1);
        }
      }
      function Um(t) {
        var e = !0;
        t.current.mode & 24 || (e = !1), jc(
          t,
          t.current,
          e
        );
      }
      function Om(t) {
        if ((qe & xa) === Ka) {
          var e = t.tag;
          if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
            if (e = P(t) || "ReactComponent", Mp !== null) {
              if (Mp.has(e)) return;
              Mp.add(e);
            } else Mp = /* @__PURE__ */ new Set([e]);
            it(t, function() {
              console.error(
                "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
              );
            });
          }
        }
      }
      function Gc(t, e) {
        Kn && t.memoizedUpdaters.forEach(function(i) {
          fe(t, i, e);
        });
      }
      function iy(t, e) {
        var i = F.actQueue;
        return i !== null ? (i.push(e), C2) : l(t, e);
      }
      function Hm(t) {
        Xh() && F.actQueue === null && it(t, function() {
          console.error(
            `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
            P(t)
          );
        });
      }
      function iu(t) {
        if (fi === null) return t;
        var e = fi(t);
        return e === void 0 ? t : e.current;
      }
      function Ph(t) {
        if (fi === null) return t;
        var e = fi(t);
        return e === void 0 ? t != null && typeof t.render == "function" && (e = iu(t.render), t.render !== e) ? (e = { $$typeof: Fl, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
      }
      function Bm(t, e) {
        if (fi === null) return !1;
        var i = t.elementType;
        e = e.type;
        var c = !1, r = typeof e == "object" && e !== null ? e.$$typeof : null;
        switch (t.tag) {
          case 1:
            typeof e == "function" && (c = !0);
            break;
          case 0:
            (typeof e == "function" || r === Ya) && (c = !0);
            break;
          case 11:
            (r === Fl || r === Ya) && (c = !0);
            break;
          case 14:
          case 15:
            (r === Hr || r === Ya) && (c = !0);
            break;
          default:
            return !1;
        }
        return !!(c && (t = fi(i), t !== void 0 && t === fi(e)));
      }
      function qm(t) {
        fi !== null && typeof WeakSet == "function" && (vf === null && (vf = /* @__PURE__ */ new WeakSet()), vf.add(t));
      }
      function Ih(t, e, i) {
        var c = t.alternate, r = t.child, d = t.sibling, v = t.tag, b = t.type, Y = null;
        switch (v) {
          case 0:
          case 15:
          case 1:
            Y = b;
            break;
          case 11:
            Y = b.render;
        }
        if (fi === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var W = !1;
        b = !1, Y !== null && (Y = fi(Y), Y !== void 0 && (i.has(Y) ? b = !0 : e.has(Y) && (v === 1 ? b = !0 : W = !0))), vf !== null && (vf.has(t) || c !== null && vf.has(c)) && (b = !0), b && (t._debugNeedsRemount = !0), (b || W) && (c = Je(t, 2), c !== null && tn(c, t, 2)), r === null || b || Ih(
          r,
          e,
          i
        ), d !== null && Ih(
          d,
          e,
          i
        );
      }
      function uy(t, e, i, c) {
        this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Nv || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
      }
      function $h(t) {
        return t = t.prototype, !(!t || !t.isReactComponent);
      }
      function uu(t, e) {
        var i = t.alternate;
        switch (i === null ? (i = z(
          t.tag,
          e,
          t.key,
          t.mode
        ), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i._debugOwner = t._debugOwner, i._debugHookTypes = t._debugHookTypes, i.alternate = t, t.alternate = i) : (i.pendingProps = e, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null, i.actualDuration = -0, i.actualStartTime = -1.1), i.flags = t.flags & 31457280, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, e = t.dependencies, i.dependencies = e === null ? null : {
          lanes: e.lanes,
          firstContext: e.firstContext,
          _debugThenableState: e._debugThenableState
        }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i.refCleanup = t.refCleanup, i.selfBaseDuration = t.selfBaseDuration, i.treeBaseDuration = t.treeBaseDuration, i._debugInfo = t._debugInfo, i._debugNeedsRemount = t._debugNeedsRemount, i.tag) {
          case 0:
          case 15:
            i.type = iu(t.type);
            break;
          case 1:
            i.type = iu(t.type);
            break;
          case 11:
            i.type = Ph(t.type);
        }
        return i;
      }
      function Ym(t, e) {
        t.flags &= 31457282;
        var i = t.alternate;
        return i === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = i.childLanes, t.lanes = i.lanes, t.child = i.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = i.memoizedProps, t.memoizedState = i.memoizedState, t.updateQueue = i.updateQueue, t.type = i.type, e = i.dependencies, t.dependencies = e === null ? null : {
          lanes: e.lanes,
          firstContext: e.firstContext,
          _debugThenableState: e._debugThenableState
        }, t.selfBaseDuration = i.selfBaseDuration, t.treeBaseDuration = i.treeBaseDuration), t;
      }
      function kh(t, e, i, c, r, d) {
        var v = 0, b = t;
        if (typeof t == "function")
          $h(t) && (v = 1), b = iu(b);
        else if (typeof t == "string")
          Qt && yn ? (v = na(), v = me(t, i, v) ? 26 : kc(t) ? 27 : 5) : Qt ? (v = na(), v = me(t, i, v) ? 26 : 5) : v = yn && kc(t) ? 27 : 5;
        else
          t: switch (t) {
            case Zu:
              return Qu(
                i.children,
                r,
                d,
                e
              );
            case Ur:
              v = 8, r |= 24;
              break;
            case ld:
              return t = i, c = r, typeof t.id != "string" && console.error(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof t.id
              ), e = z(12, t, e, c | 2), e.elementType = ld, e.lanes = d, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
            case su:
              return e = z(13, i, e, r), e.elementType = su, e.lanes = d, e;
            case oa:
              return e = z(19, i, e, r), e.elementType = oa, e.lanes = d, e;
            case Qc:
              return Vm(i, r, d, e);
            default:
              if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                  case ry:
                  case Ml:
                    v = 10;
                    break t;
                  case Or:
                    v = 9;
                    break t;
                  case Fl:
                    v = 11, b = Ph(b);
                    break t;
                  case Hr:
                    v = 14;
                    break t;
                  case Ya:
                    v = 16, b = null;
                    break t;
                }
              b = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? i = "null" : Cn(t) ? i = "array" : t !== void 0 && t.$$typeof === Xu ? (i = "<" + (at(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : i = typeof t, v = c ? typeof c.tag == "number" ? P(c) : typeof c.name == "string" ? c.name : null : null, v && (b += `

Check the render method of \`` + v + "`."), v = 29, i = Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (i + "." + b)
              ), b = null;
          }
        return e = z(v, i, e, r), e.elementType = t, e.type = b, e.lanes = d, e._debugOwner = c, e;
      }
      function Rr(t, e, i) {
        return e = kh(
          t.type,
          t.key,
          t.props,
          t._owner,
          e,
          i
        ), e._debugOwner = t._owner, e;
      }
      function Qu(t, e, i, c) {
        return t = z(7, t, c, e), t.lanes = i, t;
      }
      function Vm(t, e, i, c) {
        t = z(22, t, c, e), t.elementType = Qc, t.lanes = i;
        var r = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var d = r, v = d._current;
            if (v === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if (!(d._pendingVisibility & 2)) {
              var b = Je(v, 2);
              b !== null && (d._pendingVisibility |= 2, tn(b, v, 2));
            }
          },
          attach: function() {
            var d = r, v = d._current;
            if (v === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if (d._pendingVisibility & 2) {
              var b = Je(v, 2);
              b !== null && (d._pendingVisibility &= -3, tn(b, v, 2));
            }
          }
        };
        return t.stateNode = r, t;
      }
      function td(t, e, i) {
        return t = z(6, t, null, e), t.lanes = i, t;
      }
      function Cr(t, e, i) {
        return e = z(
          4,
          t.children !== null ? t.children : [],
          t.key,
          e
        ), e.lanes = i, e.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation
        }, e;
      }
      function sy(t, e, i, c, r, d, v, b) {
        for (this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Jc, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ge(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ge(0), this.hiddenUpdates = ge(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = d, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
        this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
      }
      function jm(t, e, i, c, r, d, v, b, Y, W, dt, yt) {
        return t = new sy(
          t,
          e,
          i,
          v,
          b,
          Y,
          W,
          yt
        ), e = 1, d === !0 && (e |= 24), Kn && (e |= 2), d = z(3, null, null, e), t.current = d, d.stateNode = t, e = hr(), nu(e), t.pooledCache = e, nu(e), d.memoizedState = {
          element: c,
          isDehydrated: i,
          cache: e
        }, _o(d), t;
      }
      function qa(t) {
        return "" + t;
      }
      function ed(t) {
        return t ? (t = il, t) : il;
      }
      function Nr(t, e, i, c) {
        return e.tag === 0 && lu(), nd(
          e.current,
          2,
          t,
          e,
          i,
          c
        ), 2;
      }
      function nd(t, e, i, c, r, d) {
        if (qt && typeof qt.onScheduleFiberRoot == "function")
          try {
            qt.onScheduleFiberRoot(St, c, i);
          } catch (v) {
            Ea || (Ea = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        pt !== null && typeof pt.markRenderScheduled == "function" && pt.markRenderScheduled(e), r = ed(r), c.context === null ? c.context = r : c.pendingContext = r, Gn && jn !== null && !Uv && (Uv = !0, console.error(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          P(jn) || "Unknown"
        )), c = mi(e), c.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (typeof d != "function" && console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          d
        ), c.callback = d), i = Na(t, c, e), i !== null && (tn(i, t, e), ys(i, t, e));
      }
      function ad(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
          var i = t.retryLane;
          t.retryLane = i !== 0 && i < e ? i : e;
        }
      }
      function Dr(t, e) {
        ad(t, e), (t = t.alternate) && ad(t, e);
      }
      function cy() {
        return jn;
      }
      function Gm() {
        for (var t = /* @__PURE__ */ new Map(), e = 1, i = 0; 31 > i; i++) {
          var c = vt(e);
          t.set(e, c), e *= 2;
        }
        return t;
      }
      var se = {}, oy = Ct, va = o2, Vn = Object.assign, Qm = Symbol.for("react.element"), Xu = Symbol.for("react.transitional.element"), un = Symbol.for("react.portal"), Zu = Symbol.for("react.fragment"), Ur = Symbol.for("react.strict_mode"), ld = Symbol.for("react.profiler"), ry = Symbol.for("react.provider"), Or = Symbol.for("react.consumer"), Ml = Symbol.for("react.context"), Fl = Symbol.for("react.forward_ref"), su = Symbol.for("react.suspense"), oa = Symbol.for("react.suspense_list"), Hr = Symbol.for("react.memo"), Ya = Symbol.for("react.lazy"), Qc = Symbol.for("react.offscreen"), Br = Symbol.for("react.memo_cache_sentinel"), Xc = Symbol.iterator, id = Symbol.for("react.client.reference"), F = oy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Zc = 0, el, ud, Xm, qr, Zm, Km, Jm;
      ut.__reactDisabledLog = !0;
      var Ku, Sa, ra = !1, Yr = new (typeof WeakMap == "function" ? WeakMap : Map)(), jn = null, Gn = !1, Cn = Array.isArray, Vr = n.rendererVersion, nl = n.rendererPackageName, Va = n.extraDevToolsConfig, al = n.getPublicInstance, Ri = n.getRootHostContext, Ci = n.getChildHostContext, Qn = n.prepareForCommit, Kc = n.resetAfterCommit, cu = n.createInstance, Ys = n.appendInitialChild, Pn = n.finalizeInitialChildren, xn = n.shouldSetTextContent, xe = n.createTextInstance, _l = n.scheduleTimeout, Pl = n.cancelTimeout, Jc = n.noTimeout, dn = n.isPrimaryRenderer;
      n.warnsIfNotActing;
      var fn = n.supportsMutation, Il = n.supportsPersistence, fa = n.supportsHydration, Ju = n.getInstanceFromNode;
      n.beforeActiveInstanceBlur, n.afterActiveInstanceBlur;
      var sd = n.preparePortalMount;
      n.prepareScopeUpdate, n.getInstanceFromScope;
      var Xn = n.setCurrentUpdatePriority, Ni = n.getCurrentUpdatePriority, Vs = n.resolveUpdatePriority;
      n.resolveEventType, n.resolveEventTimeStamp;
      var Lc = n.shouldAttemptEagerTransition, cd = n.detachDeletedInstance;
      n.requestPostPaintCallback;
      var js = n.maySuspendCommit, Lu = n.preloadInstance, ou = n.startSuspendingCommit, jr = n.suspendInstance, fy = n.waitForCommitToBeReady, $l = n.NotPendingTransition, Di = n.HostTransitionContext, Gr = n.resetFormInstance, Gs = n.bindToConsole, Qs = n.supportsMicrotasks, wc = n.scheduleMicrotask, ll = n.supportsTestSelectors, Lm = n.findFiberRoot, Xs = n.getBoundingRect, Qr = n.getTextContent, In = n.isHiddenSubtree, kl = n.matchAccessibilityRole, Tn = n.setFocusIfFocusable, ru = n.setupIntersectionObserver, ne = n.appendChild, Ue = n.appendChildToContainer, mn = n.commitTextUpdate, Xr = n.commitMount, Zs = n.commitUpdate, wu = n.insertBefore, Zr = n.insertInContainerBefore, Wc = n.removeChild, Ks = n.removeChildFromContainer, wm = n.resetTextContent, od = n.hideInstance, ti = n.hideTextInstance, Wu = n.unhideInstance, fu = n.unhideTextInstance, Fu = n.clearContainer, rd = n.cloneInstance, fd = n.createContainerChildSet, hd = n.appendChildToContainerChildSet, Nn = n.finalizeContainerChildren, Kr = n.replaceContainerChildren, Fc = n.cloneHiddenInstance, hu = n.cloneHiddenTextInstance, bl = n.isSuspenseInstancePending, dd = n.isSuspenseInstanceFallback, hy = n.getSuspenseInstanceFallbackErrorDetails, dy = n.registerSuspenseInstanceRetry, sn = n.canHydrateFormStateMarker, Wm = n.isFormStateMarkerMatching, Ui = n.getNextHydratableSibling, ei = n.getFirstHydratableChild, cn = n.getFirstHydratableChildWithinContainer, md = n.getFirstHydratableChildWithinSuspenseInstance, Fm = n.canHydrateInstance, Dn = n.canHydrateTextInstance, Pm = n.canHydrateSuspenseInstance, pn = n.hydrateInstance, ja = n.hydrateTextInstance, Al = n.hydrateSuspenseInstance, Pu = n.getNextHydratableInstanceAfterSuspenseInstance, my = n.commitHydratedContainer, Jr = n.commitHydratedSuspenseInstance, Lr = n.clearSuspenseBoundary, wr = n.clearSuspenseBoundaryFromContainer, Pc = n.shouldDeleteUnhydratedTailInstances, Ic = n.diffHydratedPropsForDevWarnings, Js = n.diffHydratedTextForDevWarnings, Im = n.describeHydratableInstanceForDevWarnings, Oe = n.validateHydratableInstance, Xe = n.validateHydratableTextInstance, Qt = n.supportsResources, me = n.isHostHoistableType, He = n.getHoistableRoot, ga = n.getResource, ni = n.acquireResource, Iu = n.releaseResource, pd = n.hydrateHoistable, ai = n.mountHoistable, en = n.unmountHoistable, du = n.createHoistableInstance, $u = n.prepareToCommitHoistables, yd = n.mayResourceSuspendCommit, Ga = n.preloadResource, Ls = n.suspendResource, yn = n.supportsSingletons, Rl = n.resolveSingletonInstance, vd = n.clearSingleton, Sd = n.acquireSingletonInstance, $c = n.releaseSingletonInstance, kc = n.isHostSingletonType, li = [], ws = [], ha = -1, il = {};
      Object.freeze(il);
      var Zn = Math.clz32 ? Math.clz32 : bt, gd = Math.log, to = Math.LN2, Ws = 128, a = 4194304, l = va.unstable_scheduleCallback, s = va.unstable_cancelCallback, f = va.unstable_shouldYield, m = va.unstable_requestPaint, p = va.unstable_now, _ = va.unstable_ImmediatePriority, O = va.unstable_UserBlockingPriority, Q = va.unstable_NormalPriority, tt = va.unstable_IdlePriority, mt = va.log, gt = va.unstable_setDisableYieldValue, St = null, qt = null, pt = null, Ea = !1, Kn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Z = typeof Object.is == "function" ? Object.is : pa, G = /* @__PURE__ */ new WeakMap(), L = [], ft = 0, Ht = null, Be = 0, Bt = [], Wt = 0, Ie = null, $t = 1, $n = "", mu = N(null), Ed = N(null), Fs = N(null), $m = N(null), C0 = /["'&<>\n\t]|^\s|\s$/, Qa = null, da = null, Te = !1, ku = !1, ii = null, Oi = null, pu = !1, py = Error(
        "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), $e = 0, ui = [], Wr = 0, yy = 0, Fr = va.unstable_now, km = -0, ul = -1.1, eo = -0, tp = !1, ep = !1, np = null, Pr = null, vy = !1, Sy = !1, ap = !1, gy = !1, Ir = 0, Ey = {}, xd = null, xy = 0, no = 0, $r = null, N0 = 0, D0 = 1, U0 = 2, Ty = 3, Ps = !1, O0 = !1, zy = null, My = !1, m2 = Object.prototype.hasOwnProperty, Hi = {
        recordUnsafeLifecycleWarnings: function() {
        },
        flushPendingUnsafeLifecycleWarnings: function() {
        },
        recordLegacyContextWarning: function() {
        },
        flushLegacyContextWarning: function() {
        },
        discardPendingWarnings: function() {
        }
      }, Td = [], zd = [], Md = [], _d = [], bd = [], Ad = [], ao = /* @__PURE__ */ new Set();
      Hi.recordUnsafeLifecycleWarnings = function(t, e) {
        ao.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && Td.push(t), t.mode & 8 && typeof e.UNSAFE_componentWillMount == "function" && zd.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Md.push(t), t.mode & 8 && typeof e.UNSAFE_componentWillReceiveProps == "function" && _d.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && bd.push(t), t.mode & 8 && typeof e.UNSAFE_componentWillUpdate == "function" && Ad.push(t));
      }, Hi.flushPendingUnsafeLifecycleWarnings = function() {
        var t = /* @__PURE__ */ new Set();
        0 < Td.length && (Td.forEach(function(b) {
          t.add(
            P(b) || "Component"
          ), ao.add(b.type);
        }), Td = []);
        var e = /* @__PURE__ */ new Set();
        0 < zd.length && (zd.forEach(function(b) {
          e.add(
            P(b) || "Component"
          ), ao.add(b.type);
        }), zd = []);
        var i = /* @__PURE__ */ new Set();
        0 < Md.length && (Md.forEach(function(b) {
          i.add(
            P(b) || "Component"
          ), ao.add(b.type);
        }), Md = []);
        var c = /* @__PURE__ */ new Set();
        0 < _d.length && (_d.forEach(
          function(b) {
            c.add(
              P(b) || "Component"
            ), ao.add(b.type);
          }
        ), _d = []);
        var r = /* @__PURE__ */ new Set();
        0 < bd.length && (bd.forEach(function(b) {
          r.add(
            P(b) || "Component"
          ), ao.add(b.type);
        }), bd = []);
        var d = /* @__PURE__ */ new Set();
        if (0 < Ad.length && (Ad.forEach(function(b) {
          d.add(
            P(b) || "Component"
          ), ao.add(b.type);
        }), Ad = []), 0 < e.size) {
          var v = K(
            e
          );
          console.error(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            v
          );
        }
        0 < c.size && (v = K(
          c
        ), console.error(
          `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
          v
        )), 0 < d.size && (v = K(
          d
        ), console.error(
          `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
          v
        )), 0 < t.size && (v = K(t), console.warn(
          `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          v
        )), 0 < i.size && (v = K(
          i
        ), console.warn(
          `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          v
        )), 0 < r.size && (v = K(r), console.warn(
          `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          v
        ));
      };
      var lp = /* @__PURE__ */ new Map(), H0 = /* @__PURE__ */ new Set();
      Hi.recordLegacyContextWarning = function(t, e) {
        for (var i = null, c = t; c !== null; )
          c.mode & 8 && (i = c), c = c.return;
        i === null ? console.error(
          "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
        ) : !H0.has(t.type) && (c = lp.get(i), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (c === void 0 && (c = [], lp.set(i, c)), c.push(t));
      }, Hi.flushLegacyContextWarning = function() {
        lp.forEach(function(t) {
          if (t.length !== 0) {
            var e = t[0], i = /* @__PURE__ */ new Set();
            t.forEach(function(r) {
              i.add(P(r) || "Component"), H0.add(r.type);
            });
            var c = K(i);
            it(e, function() {
              console.error(
                `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
                c
              );
            });
          }
        });
      }, Hi.discardPendingWarnings = function() {
        Td = [], zd = [], Md = [], _d = [], bd = [], Ad = [], lp = /* @__PURE__ */ new Map();
      };
      var ip = Error(
        "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
      ), _y = Error(
        "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), up = {
        then: function() {
          console.error(
            'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
          );
        }
      }, kr = null, sp = !1, B0 = {
        "react-stack-bottom-frame": function(t, e, i) {
          var c = Gn;
          Gn = !0;
          try {
            return t(e, i);
          } finally {
            Gn = c;
          }
        }
      }, by = B0["react-stack-bottom-frame"].bind(B0), q0 = {
        "react-stack-bottom-frame": function(t) {
          var e = Gn;
          Gn = !0;
          try {
            return t.render();
          } finally {
            Gn = e;
          }
        }
      }, Y0 = q0["react-stack-bottom-frame"].bind(q0), V0 = {
        "react-stack-bottom-frame": function(t, e) {
          try {
            e.componentDidMount();
          } catch (i) {
            Re(t, t.return, i);
          }
        }
      }, Ay = V0["react-stack-bottom-frame"].bind(V0), j0 = {
        "react-stack-bottom-frame": function(t, e, i, c, r) {
          try {
            e.componentDidUpdate(i, c, r);
          } catch (d) {
            Re(t, t.return, d);
          }
        }
      }, G0 = j0["react-stack-bottom-frame"].bind(j0), Q0 = {
        "react-stack-bottom-frame": function(t, e) {
          var i = e.stack;
          t.componentDidCatch(e.value, {
            componentStack: i !== null ? i : ""
          });
        }
      }, p2 = Q0["react-stack-bottom-frame"].bind(Q0), X0 = {
        "react-stack-bottom-frame": function(t, e, i) {
          try {
            i.componentWillUnmount();
          } catch (c) {
            Re(t, e, c);
          }
        }
      }, Z0 = X0["react-stack-bottom-frame"].bind(X0), K0 = {
        "react-stack-bottom-frame": function(t) {
          var e = t.create;
          return t = t.inst, e = e(), t.destroy = e;
        }
      }, y2 = K0["react-stack-bottom-frame"].bind(K0), J0 = {
        "react-stack-bottom-frame": function(t, e, i) {
          try {
            i();
          } catch (c) {
            Re(t, e, c);
          }
        }
      }, v2 = J0["react-stack-bottom-frame"].bind(J0), L0 = {
        "react-stack-bottom-frame": function(t) {
          var e = t._init;
          return e(t._payload);
        }
      }, Is = L0["react-stack-bottom-frame"].bind(L0), tf = null, Rd = 0, ae = null, Ry, w0 = Ry = !1, W0 = {}, F0 = {}, P0 = {};
      J = function(t, e, i) {
        if (i !== null && typeof i == "object" && i._store && (!i._store.validated && i.key == null || i._store.validated === 2)) {
          if (typeof i._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          i._store.validated = 1;
          var c = P(t), r = c || "null";
          if (!W0[r]) {
            W0[r] = !0, i = i._owner, t = t._debugOwner;
            var d = "";
            t && typeof t.tag == "number" && (r = P(t)) && (d = `

Check the render method of \`` + r + "`."), d || c && (d = `

Check the top-level render call using <` + c + ">.");
            var v = "";
            i != null && t !== i && (c = null, typeof i.tag == "number" ? c = P(i) : typeof i.name == "string" && (c = i.name), c && (v = " It was passed a child from " + c + ".")), it(e, function() {
              console.error(
                'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                d,
                v
              );
            });
          }
        }
      };
      var lo = th(!0), I0 = th(!1), ef = N(null), cp = N(0), si = N(null), yu = null, nf = 1, Cd = 2, Jn = N(0), ci = 0, oi = 1, Xa = 2, ma = 4, Ln = 8, af, $0 = /* @__PURE__ */ new Set(), k0 = /* @__PURE__ */ new Set(), Cy = /* @__PURE__ */ new Set(), tv = /* @__PURE__ */ new Set(), $s = 0, Lt = null, Ze = null, Un = null, op = !1, lf = !1, io = !1, rp = 0, Nd = 0, ts = null, S2 = 0, g2 = 25, I = null, ri = null, es = -1, Dd = !1, Ny = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, vu = {
        readContext: Le,
        use: yi,
        useCallback: ln,
        useContext: ln,
        useEffect: ln,
        useImperativeHandle: ln,
        useLayoutEffect: ln,
        useInsertionEffect: ln,
        useMemo: ln,
        useReducer: ln,
        useRef: ln,
        useState: ln,
        useDebugValue: ln,
        useDeferredValue: ln,
        useTransition: ln,
        useSyncExternalStore: ln,
        useId: ln
      };
      vu.useCacheRefresh = ln, vu.useMemoCache = ln, vu.useHostTransitionStatus = ln, vu.useFormState = ln, vu.useActionState = ln, vu.useOptimistic = ln;
      var ks = null, uo = null, tc = null, so = null, sl = null, Za = null, ec = null;
      ks = {
        readContext: function(t) {
          return Le(t);
        },
        use: yi,
        useCallback: function(t, e) {
          return I = "useCallback", Jt(), Nu(e), ih(t, e);
        },
        useContext: function(t) {
          return I = "useContext", Jt(), Le(t);
        },
        useEffect: function(t, e) {
          return I = "useEffect", Jt(), Nu(e), bs(t, e);
        },
        useImperativeHandle: function(t, e, i) {
          return I = "useImperativeHandle", Jt(), Nu(i), Hu(t, e, i);
        },
        useInsertionEffect: function(t, e) {
          I = "useInsertionEffect", Jt(), Nu(e), Pi(4, Xa, t, e);
        },
        useLayoutEffect: function(t, e) {
          return I = "useLayoutEffect", Jt(), Nu(e), Jo(t, e);
        },
        useMemo: function(t, e) {
          I = "useMemo", Jt(), Nu(e);
          var i = F.H;
          F.H = sl;
          try {
            return wo(t, e);
          } finally {
            F.H = i;
          }
        },
        useReducer: function(t, e, i) {
          I = "useReducer", Jt();
          var c = F.H;
          F.H = sl;
          try {
            return Tc(t, e, i);
          } finally {
            F.H = c;
          }
        },
        useRef: function(t) {
          return I = "useRef", Jt(), Ko(t);
        },
        useState: function(t) {
          I = "useState", Jt();
          var e = F.H;
          F.H = sl;
          try {
            return Ql(t);
          } finally {
            F.H = e;
          }
        },
        useDebugValue: function() {
          I = "useDebugValue", Jt();
        },
        useDeferredValue: function(t, e) {
          return I = "useDeferredValue", Jt(), Xl(t, e);
        },
        useTransition: function() {
          return I = "useTransition", Jt(), Wo();
        },
        useSyncExternalStore: function(t, e, i) {
          return I = "useSyncExternalStore", Jt(), Mc(
            t,
            e,
            i
          );
        },
        useId: function() {
          return I = "useId", Jt(), Io();
        },
        useCacheRefresh: function() {
          return I = "useCacheRefresh", Jt(), rh();
        }
      }, ks.useMemoCache = Li, ks.useHostTransitionStatus = Zl, ks.useFormState = function(t, e) {
        return I = "useFormState", Jt(), Ts(), Wi(t, e);
      }, ks.useActionState = function(t, e) {
        return I = "useActionState", Jt(), Wi(t, e);
      }, ks.useOptimistic = function(t) {
        return I = "useOptimistic", Jt(), vl(t);
      }, uo = {
        readContext: function(t) {
          return Le(t);
        },
        use: yi,
        useCallback: function(t, e) {
          return I = "useCallback", rt(), ih(t, e);
        },
        useContext: function(t) {
          return I = "useContext", rt(), Le(t);
        },
        useEffect: function(t, e) {
          return I = "useEffect", rt(), bs(t, e);
        },
        useImperativeHandle: function(t, e, i) {
          return I = "useImperativeHandle", rt(), Hu(t, e, i);
        },
        useInsertionEffect: function(t, e) {
          I = "useInsertionEffect", rt(), Pi(4, Xa, t, e);
        },
        useLayoutEffect: function(t, e) {
          return I = "useLayoutEffect", rt(), Jo(t, e);
        },
        useMemo: function(t, e) {
          I = "useMemo", rt();
          var i = F.H;
          F.H = sl;
          try {
            return wo(t, e);
          } finally {
            F.H = i;
          }
        },
        useReducer: function(t, e, i) {
          I = "useReducer", rt();
          var c = F.H;
          F.H = sl;
          try {
            return Tc(t, e, i);
          } finally {
            F.H = c;
          }
        },
        useRef: function(t) {
          return I = "useRef", rt(), Ko(t);
        },
        useState: function(t) {
          I = "useState", rt();
          var e = F.H;
          F.H = sl;
          try {
            return Ql(t);
          } finally {
            F.H = e;
          }
        },
        useDebugValue: function() {
          I = "useDebugValue", rt();
        },
        useDeferredValue: function(t, e) {
          return I = "useDeferredValue", rt(), Xl(t, e);
        },
        useTransition: function() {
          return I = "useTransition", rt(), Wo();
        },
        useSyncExternalStore: function(t, e, i) {
          return I = "useSyncExternalStore", rt(), Mc(
            t,
            e,
            i
          );
        },
        useId: function() {
          return I = "useId", rt(), Io();
        },
        useCacheRefresh: function() {
          return I = "useCacheRefresh", rt(), rh();
        }
      }, uo.useMemoCache = Li, uo.useHostTransitionStatus = Zl, uo.useFormState = function(t, e) {
        return I = "useFormState", rt(), Ts(), Wi(t, e);
      }, uo.useActionState = function(t, e) {
        return I = "useActionState", rt(), Wi(t, e);
      }, uo.useOptimistic = function(t) {
        return I = "useOptimistic", rt(), vl(t);
      }, tc = {
        readContext: function(t) {
          return Le(t);
        },
        use: yi,
        useCallback: function(t, e) {
          return I = "useCallback", rt(), Lo(t, e);
        },
        useContext: function(t) {
          return I = "useContext", rt(), Le(t);
        },
        useEffect: function(t, e) {
          I = "useEffect", rt(), wn(2048, Ln, t, e);
        },
        useImperativeHandle: function(t, e, i) {
          return I = "useImperativeHandle", rt(), Qe(t, e, i);
        },
        useInsertionEffect: function(t, e) {
          return I = "useInsertionEffect", rt(), wn(4, Xa, t, e);
        },
        useLayoutEffect: function(t, e) {
          return I = "useLayoutEffect", rt(), wn(4, ma, t, e);
        },
        useMemo: function(t, e) {
          I = "useMemo", rt();
          var i = F.H;
          F.H = Za;
          try {
            return Ii(t, e);
          } finally {
            F.H = i;
          }
        },
        useReducer: function(t, e, i) {
          I = "useReducer", rt();
          var c = F.H;
          F.H = Za;
          try {
            return Du(t, e, i);
          } finally {
            F.H = c;
          }
        },
        useRef: function() {
          return I = "useRef", rt(), Ae().memoizedState;
        },
        useState: function() {
          I = "useState", rt();
          var t = F.H;
          F.H = Za;
          try {
            return Du(Da);
          } finally {
            F.H = t;
          }
        },
        useDebugValue: function() {
          I = "useDebugValue", rt();
        },
        useDeferredValue: function(t, e) {
          return I = "useDeferredValue", rt(), uh(t, e);
        },
        useTransition: function() {
          return I = "useTransition", rt(), Fo();
        },
        useSyncExternalStore: function(t, e, i) {
          return I = "useSyncExternalStore", rt(), _c(
            t,
            e,
            i
          );
        },
        useId: function() {
          return I = "useId", rt(), Ae().memoizedState;
        },
        useCacheRefresh: function() {
          return I = "useCacheRefresh", rt(), Ae().memoizedState;
        }
      }, tc.useMemoCache = Li, tc.useHostTransitionStatus = Zl, tc.useFormState = function(t) {
        return I = "useFormState", rt(), Ts(), Ou(t);
      }, tc.useActionState = function(t) {
        return I = "useActionState", rt(), Ou(t);
      }, tc.useOptimistic = function(t, e) {
        return I = "useOptimistic", rt(), jo(t, e);
      }, so = {
        readContext: function(t) {
          return Le(t);
        },
        use: yi,
        useCallback: function(t, e) {
          return I = "useCallback", rt(), Lo(t, e);
        },
        useContext: function(t) {
          return I = "useContext", rt(), Le(t);
        },
        useEffect: function(t, e) {
          I = "useEffect", rt(), wn(2048, Ln, t, e);
        },
        useImperativeHandle: function(t, e, i) {
          return I = "useImperativeHandle", rt(), Qe(t, e, i);
        },
        useInsertionEffect: function(t, e) {
          return I = "useInsertionEffect", rt(), wn(4, Xa, t, e);
        },
        useLayoutEffect: function(t, e) {
          return I = "useLayoutEffect", rt(), wn(4, ma, t, e);
        },
        useMemo: function(t, e) {
          I = "useMemo", rt();
          var i = F.H;
          F.H = ec;
          try {
            return Ii(t, e);
          } finally {
            F.H = i;
          }
        },
        useReducer: function(t, e, i) {
          I = "useReducer", rt();
          var c = F.H;
          F.H = ec;
          try {
            return Uu(t, e, i);
          } finally {
            F.H = c;
          }
        },
        useRef: function() {
          return I = "useRef", rt(), Ae().memoizedState;
        },
        useState: function() {
          I = "useState", rt();
          var t = F.H;
          F.H = ec;
          try {
            return Uu(Da);
          } finally {
            F.H = t;
          }
        },
        useDebugValue: function() {
          I = "useDebugValue", rt();
        },
        useDeferredValue: function(t, e) {
          return I = "useDeferredValue", rt(), sh(t, e);
        },
        useTransition: function() {
          return I = "useTransition", rt(), Po();
        },
        useSyncExternalStore: function(t, e, i) {
          return I = "useSyncExternalStore", rt(), _c(
            t,
            e,
            i
          );
        },
        useId: function() {
          return I = "useId", rt(), Ae().memoizedState;
        },
        useCacheRefresh: function() {
          return I = "useCacheRefresh", rt(), Ae().memoizedState;
        }
      }, so.useMemoCache = Li, so.useHostTransitionStatus = Zl, so.useFormState = function(t) {
        return I = "useFormState", rt(), Ts(), Ac(t);
      }, so.useActionState = function(t) {
        return I = "useActionState", rt(), Ac(t);
      }, so.useOptimistic = function(t, e) {
        return I = "useOptimistic", rt(), Ms(t, e);
      }, sl = {
        readContext: function(t) {
          return U(), Le(t);
        },
        use: function(t) {
          return A(), yi(t);
        },
        useCallback: function(t, e) {
          return I = "useCallback", A(), Jt(), ih(t, e);
        },
        useContext: function(t) {
          return I = "useContext", A(), Jt(), Le(t);
        },
        useEffect: function(t, e) {
          return I = "useEffect", A(), Jt(), bs(t, e);
        },
        useImperativeHandle: function(t, e, i) {
          return I = "useImperativeHandle", A(), Jt(), Hu(t, e, i);
        },
        useInsertionEffect: function(t, e) {
          I = "useInsertionEffect", A(), Jt(), Pi(4, Xa, t, e);
        },
        useLayoutEffect: function(t, e) {
          return I = "useLayoutEffect", A(), Jt(), Jo(t, e);
        },
        useMemo: function(t, e) {
          I = "useMemo", A(), Jt();
          var i = F.H;
          F.H = sl;
          try {
            return wo(t, e);
          } finally {
            F.H = i;
          }
        },
        useReducer: function(t, e, i) {
          I = "useReducer", A(), Jt();
          var c = F.H;
          F.H = sl;
          try {
            return Tc(t, e, i);
          } finally {
            F.H = c;
          }
        },
        useRef: function(t) {
          return I = "useRef", A(), Jt(), Ko(t);
        },
        useState: function(t) {
          I = "useState", A(), Jt();
          var e = F.H;
          F.H = sl;
          try {
            return Ql(t);
          } finally {
            F.H = e;
          }
        },
        useDebugValue: function() {
          I = "useDebugValue", A(), Jt();
        },
        useDeferredValue: function(t, e) {
          return I = "useDeferredValue", A(), Jt(), Xl(t, e);
        },
        useTransition: function() {
          return I = "useTransition", A(), Jt(), Wo();
        },
        useSyncExternalStore: function(t, e, i) {
          return I = "useSyncExternalStore", A(), Jt(), Mc(
            t,
            e,
            i
          );
        },
        useId: function() {
          return I = "useId", A(), Jt(), Io();
        },
        useCacheRefresh: function() {
          return I = "useCacheRefresh", Jt(), rh();
        },
        useMemoCache: function(t) {
          return A(), Li(t);
        }
      }, sl.useHostTransitionStatus = Zl, sl.useFormState = function(t, e) {
        return I = "useFormState", A(), Jt(), Wi(t, e);
      }, sl.useActionState = function(t, e) {
        return I = "useActionState", A(), Jt(), Wi(t, e);
      }, sl.useOptimistic = function(t) {
        return I = "useOptimistic", A(), Jt(), vl(t);
      }, Za = {
        readContext: function(t) {
          return U(), Le(t);
        },
        use: function(t) {
          return A(), yi(t);
        },
        useCallback: function(t, e) {
          return I = "useCallback", A(), rt(), Lo(t, e);
        },
        useContext: function(t) {
          return I = "useContext", A(), rt(), Le(t);
        },
        useEffect: function(t, e) {
          I = "useEffect", A(), rt(), wn(2048, Ln, t, e);
        },
        useImperativeHandle: function(t, e, i) {
          return I = "useImperativeHandle", A(), rt(), Qe(t, e, i);
        },
        useInsertionEffect: function(t, e) {
          return I = "useInsertionEffect", A(), rt(), wn(4, Xa, t, e);
        },
        useLayoutEffect: function(t, e) {
          return I = "useLayoutEffect", A(), rt(), wn(4, ma, t, e);
        },
        useMemo: function(t, e) {
          I = "useMemo", A(), rt();
          var i = F.H;
          F.H = Za;
          try {
            return Ii(t, e);
          } finally {
            F.H = i;
          }
        },
        useReducer: function(t, e, i) {
          I = "useReducer", A(), rt();
          var c = F.H;
          F.H = Za;
          try {
            return Du(t, e, i);
          } finally {
            F.H = c;
          }
        },
        useRef: function() {
          return I = "useRef", A(), rt(), Ae().memoizedState;
        },
        useState: function() {
          I = "useState", A(), rt();
          var t = F.H;
          F.H = Za;
          try {
            return Du(Da);
          } finally {
            F.H = t;
          }
        },
        useDebugValue: function() {
          I = "useDebugValue", A(), rt();
        },
        useDeferredValue: function(t, e) {
          return I = "useDeferredValue", A(), rt(), uh(t, e);
        },
        useTransition: function() {
          return I = "useTransition", A(), rt(), Fo();
        },
        useSyncExternalStore: function(t, e, i) {
          return I = "useSyncExternalStore", A(), rt(), _c(
            t,
            e,
            i
          );
        },
        useId: function() {
          return I = "useId", A(), rt(), Ae().memoizedState;
        },
        useCacheRefresh: function() {
          return I = "useCacheRefresh", rt(), Ae().memoizedState;
        },
        useMemoCache: function(t) {
          return A(), Li(t);
        }
      }, Za.useHostTransitionStatus = Zl, Za.useFormState = function(t) {
        return I = "useFormState", A(), rt(), Ou(t);
      }, Za.useActionState = function(t) {
        return I = "useActionState", A(), rt(), Ou(t);
      }, Za.useOptimistic = function(t, e) {
        return I = "useOptimistic", A(), rt(), jo(t, e);
      }, ec = {
        readContext: function(t) {
          return U(), Le(t);
        },
        use: function(t) {
          return A(), yi(t);
        },
        useCallback: function(t, e) {
          return I = "useCallback", A(), rt(), Lo(t, e);
        },
        useContext: function(t) {
          return I = "useContext", A(), rt(), Le(t);
        },
        useEffect: function(t, e) {
          I = "useEffect", A(), rt(), wn(2048, Ln, t, e);
        },
        useImperativeHandle: function(t, e, i) {
          return I = "useImperativeHandle", A(), rt(), Qe(t, e, i);
        },
        useInsertionEffect: function(t, e) {
          return I = "useInsertionEffect", A(), rt(), wn(4, Xa, t, e);
        },
        useLayoutEffect: function(t, e) {
          return I = "useLayoutEffect", A(), rt(), wn(4, ma, t, e);
        },
        useMemo: function(t, e) {
          I = "useMemo", A(), rt();
          var i = F.H;
          F.H = Za;
          try {
            return Ii(t, e);
          } finally {
            F.H = i;
          }
        },
        useReducer: function(t, e, i) {
          I = "useReducer", A(), rt();
          var c = F.H;
          F.H = Za;
          try {
            return Uu(t, e, i);
          } finally {
            F.H = c;
          }
        },
        useRef: function() {
          return I = "useRef", A(), rt(), Ae().memoizedState;
        },
        useState: function() {
          I = "useState", A(), rt();
          var t = F.H;
          F.H = Za;
          try {
            return Uu(Da);
          } finally {
            F.H = t;
          }
        },
        useDebugValue: function() {
          I = "useDebugValue", A(), rt();
        },
        useDeferredValue: function(t, e) {
          return I = "useDeferredValue", A(), rt(), sh(t, e);
        },
        useTransition: function() {
          return I = "useTransition", A(), rt(), Po();
        },
        useSyncExternalStore: function(t, e, i) {
          return I = "useSyncExternalStore", A(), rt(), _c(
            t,
            e,
            i
          );
        },
        useId: function() {
          return I = "useId", A(), rt(), Ae().memoizedState;
        },
        useCacheRefresh: function() {
          return I = "useCacheRefresh", rt(), Ae().memoizedState;
        },
        useMemoCache: function(t) {
          return A(), Li(t);
        }
      }, ec.useHostTransitionStatus = Zl, ec.useFormState = function(t) {
        return I = "useFormState", A(), rt(), Ac(t);
      }, ec.useActionState = function(t) {
        return I = "useActionState", A(), rt(), Ac(t);
      }, ec.useOptimistic = function(t, e) {
        return I = "useOptimistic", A(), rt(), Ms(t, e);
      };
      var ev = {}, nv = /* @__PURE__ */ new Set(), av = /* @__PURE__ */ new Set(), lv = /* @__PURE__ */ new Set(), iv = /* @__PURE__ */ new Set(), uv = /* @__PURE__ */ new Set(), sv = /* @__PURE__ */ new Set(), cv = /* @__PURE__ */ new Set(), ov = /* @__PURE__ */ new Set(), rv = /* @__PURE__ */ new Set(), fv = /* @__PURE__ */ new Set();
      Object.freeze(ev);
      var Dy = {
        isMounted: function(t) {
          var e = jn;
          if (e !== null && Gn && e.tag === 1) {
            var i = e.stateNode;
            i._warnedAboutRefsInRender || console.error(
              "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              P(e) || "A component"
            ), i._warnedAboutRefsInRender = !0;
          }
          return (t = t._reactInternals) ? Ft(t) === t : !1;
        },
        enqueueSetState: function(t, e, i) {
          t = t._reactInternals;
          var c = Ba(t), r = mi(c);
          r.payload = e, i != null && (er(i), r.callback = i), e = Na(t, r, c), e !== null && (tn(e, t, c), ys(e, t, c)), Yt(t, c);
        },
        enqueueReplaceState: function(t, e, i) {
          t = t._reactInternals;
          var c = Ba(t), r = mi(c);
          r.tag = D0, r.payload = e, i != null && (er(i), r.callback = i), e = Na(t, r, c), e !== null && (tn(e, t, c), ys(e, t, c)), Yt(t, c);
        },
        enqueueForceUpdate: function(t, e) {
          t = t._reactInternals;
          var i = Ba(t), c = mi(i);
          c.tag = U0, e != null && (er(e), c.callback = e), e = Na(t, c, i), e !== null && (tn(e, t, i), ys(e, t, i)), pt !== null && typeof pt.markForceUpdateScheduled == "function" && pt.markForceUpdateScheduled(t, i);
        }
      }, hv = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var e = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
            error: t
          });
          if (!window.dispatchEvent(e)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", t);
          return;
        }
        console.error(t);
      }, uf = null, Uy = null, dv = Error(
        "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
      ), kn = !1, mv = {}, pv = {}, yv = {}, vv = {}, sf = !1, Sv = {}, Oy = {}, Hy = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      }, gv = !1, fp = N(null), By = N(null), qy = N(null), hp = {}, dp = null, cf = null, of = !1, E2 = typeof AbortController < "u" ? AbortController : function() {
        var t = [], e = this.signal = {
          aborted: !1,
          addEventListener: function(i, c) {
            t.push(c);
          }
        };
        this.abort = function() {
          e.aborted = !0, t.forEach(function(i) {
            return i();
          });
        };
      }, x2 = va.unstable_scheduleCallback, T2 = va.unstable_NormalPriority, vn = {
        $$typeof: Ml,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
        _currentRenderer: null,
        _currentRenderer2: null
      }, Ev = F.S;
      F.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && im(t, e), Ev !== null && Ev(t, e);
      };
      var co = N(null), xv = null;
      xv = /* @__PURE__ */ new Set();
      var ns = !1, Sn = !1, Yy = !1, Tv = typeof WeakSet == "function" ? WeakSet : Set, ta = null, rf = null, ff = null, zv = !1, On = null, Cl = !1, Bi = null, hf = 8192, z2 = {
        getCacheForType: function(t) {
          var e = Le(vn), i = e.data.get(t);
          return i === void 0 && (i = t(), e.data.set(t, i)), i;
        },
        getOwner: function() {
          return jn;
        }
      }, mp = 0, pp = 1, yp = 2, vp = 3, Sp = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Ud = Symbol.for;
        mp = Ud("selector.component"), pp = Ud("selector.has_pseudo_class"), yp = Ud("selector.role"), vp = Ud("selector.test_id"), Sp = Ud("selector.text");
      }
      var gp = [], M2 = typeof WeakMap == "function" ? WeakMap : Map, Ka = 0, xa = 2, Su = 4, as = 0, Od = 1, df = 2, Vy = 3, oo = 4, Mv = 5, Ep = 6, qe = Ka, We = null, oe = null, he = 0, cl = 0, Hd = 1, ro = 2, Bd = 3, _v = 4, jy = 5, mf = 6, qd = 7, Gy = 8, Fe = cl, Nl = null, ls = !1, pf = !1, Qy = !1, gu = 0, gn = as, nc = 0, ac = 0, Xy = 0, Dl = 0, fo = 0, Yd = null, qi = null, xp = !1, Zy = 0, bv = 300, Vd = 1 / 0, Ky = 500, jd = null, lc = null, Tp = !1, ho = null, Gd = 0, Jy = 0, Ly = null, _2 = 50, Qd = 0, wy = null, Wy = !1, zp = !1, b2 = 50, mo = 0, Xd = null, yf = !1, Av = 0, A2 = 1, R2 = 2, Mp = null, Rv = !1, Cv = /* @__PURE__ */ new Set(), C2 = {}, fi = null, vf = null, Nv = !1;
      try {
        var Dv = Object.preventExtensions({});
      } catch {
        Nv = !0;
      }
      var Uv = !1, Ov = {}, Hv = null, Bv = null, qv = null, Yv = null, Vv = null, jv = null, Gv = null, Qv = null, Xv = null;
      return Hv = function(t, e, i, c) {
        e = u(t, e), e !== null && (i = o(e.memoizedState, i, 0, c), e.memoizedState = i, e.baseState = i, t.memoizedProps = Vn({}, t.memoizedProps), i = Je(t, 2), i !== null && tn(i, t, 2));
      }, Bv = function(t, e, i) {
        e = u(t, e), e !== null && (i = S(e.memoizedState, i, 0), e.memoizedState = i, e.baseState = i, t.memoizedProps = Vn({}, t.memoizedProps), i = Je(t, 2), i !== null && tn(i, t, 2));
      }, qv = function(t, e, i, c) {
        e = u(t, e), e !== null && (i = h(e.memoizedState, i, c), e.memoizedState = i, e.baseState = i, t.memoizedProps = Vn({}, t.memoizedProps), i = Je(t, 2), i !== null && tn(i, t, 2));
      }, Yv = function(t, e, i) {
        t.pendingProps = o(t.memoizedProps, e, 0, i), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Je(t, 2), e !== null && tn(e, t, 2);
      }, Vv = function(t, e) {
        t.pendingProps = S(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Je(t, 2), e !== null && tn(e, t, 2);
      }, jv = function(t, e, i) {
        t.pendingProps = h(
          t.memoizedProps,
          e,
          i
        ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Je(t, 2), e !== null && tn(e, t, 2);
      }, Gv = function(t) {
        var e = Je(t, 2);
        e !== null && tn(e, t, 2);
      }, Qv = function(t) {
        E = t;
      }, Xv = function(t) {
        x = t;
      }, se.attemptContinuousHydration = function(t) {
        if (t.tag === 13) {
          var e = Je(t, 67108864);
          e !== null && tn(e, t, 67108864), Dr(t, 67108864);
        }
      }, se.attemptHydrationAtCurrentPriority = function(t) {
        if (t.tag === 13) {
          var e = Ba(t), i = Je(t, e);
          i !== null && tn(i, t, e), Dr(t, e);
        }
      }, se.attemptSynchronousHydration = function(t) {
        switch (t.tag) {
          case 3:
            if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
              var e = Dt(t.pendingLanes);
              if (e !== 0) {
                for (t.pendingLanes |= 2, t.entangledLanes |= 2; e; ) {
                  var i = 1 << 31 - Zn(e);
                  t.entanglements[1] |= i, e &= ~i;
                }
                yl(t), (qe & (xa | Su)) === Ka && (Vd = p() + Ky, Ki(0));
              }
            }
            break;
          case 13:
            e = Je(t, 2), e !== null && tn(e, t, 2), au(), Dr(t, 2);
        }
      }, se.batchedUpdates = function(t, e) {
        return t(e);
      }, se.createComponentSelector = function(t) {
        return { $$typeof: mp, value: t };
      }, se.createContainer = function(t, e, i, c, r, d, v, b, Y, W) {
        return jm(
          t,
          e,
          !1,
          null,
          i,
          c,
          d,
          v,
          b,
          Y,
          W,
          null
        );
      }, se.createHasPseudoClassSelector = function(t) {
        return { $$typeof: pp, value: t };
      }, se.createHydrationContainer = function(t, e, i, c, r, d, v, b, Y, W, dt, yt, Et) {
        return t = jm(
          i,
          c,
          !0,
          t,
          r,
          d,
          b,
          Y,
          W,
          dt,
          yt,
          Et
        ), t.context = ed(null), i = t.current, c = Ba(i), r = mi(c), r.callback = e ?? null, Na(i, r, c), t.current.lanes = c, ve(t, c), yl(t), t;
      }, se.createPortal = function(t, e, i) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        try {
          qa(c);
          var r = !1;
        } catch {
          r = !0;
        }
        return r && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object"
        ), qa(c)), {
          $$typeof: un,
          key: c == null ? null : "" + c,
          children: t,
          containerInfo: e,
          implementation: i
        };
      }, se.createRoleSelector = function(t) {
        return { $$typeof: yp, value: t };
      }, se.createTestNameSelector = function(t) {
        return { $$typeof: vp, value: t };
      }, se.createTextSelector = function(t) {
        return { $$typeof: Sp, value: t };
      }, se.defaultOnCaughtError = function(t, e) {
        var i = uf ? "The above error occurred in the <" + uf + "> component." : "The above error occurred in one of your React components.", c = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Uy || "Anonymous") + "."), r = F.getCurrentStack, d = e.componentStack != null ? e.componentStack : "";
        F.getCurrentStack = function() {
          return d;
        };
        try {
          typeof t == "object" && t !== null && typeof t.environmentName == "string" ? Gs(
            "error",
            [
              `%o

%s

%s
`,
              t,
              i,
              c
            ],
            t.environmentName
          )() : console.error(
            `%o

%s

%s
`,
            t,
            i,
            c
          );
        } finally {
          F.getCurrentStack = r;
        }
      }, se.defaultOnRecoverableError = function(t) {
        hv(t);
      }, se.defaultOnUncaughtError = function(t, e) {
        hv(t), t = uf ? "An error occurred in the <" + uf + "> component." : "An error occurred in one of your React components.";
        var i = F.getCurrentStack, c = e.componentStack != null ? e.componentStack : "";
        F.getCurrentStack = function() {
          return c;
        };
        try {
          console.warn(
            `%s

%s
`,
            t,
            `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
          );
        } finally {
          F.getCurrentStack = i;
        }
      }, se.deferredUpdates = function(t) {
        var e = F.T, i = Ni();
        try {
          return Xn(32), F.T = null, t();
        } finally {
          Xn(i), F.T = e;
        }
      }, se.discreteUpdates = function(t, e, i, c, r) {
        var d = F.T, v = Ni();
        try {
          return Xn(2), F.T = null, t(e, i, c, r);
        } finally {
          Xn(v), F.T = d, qe === Ka && (Vd = p() + Ky);
        }
      }, se.findAllNodes = Mr, se.findBoundingRects = function(t, e) {
        if (!ll)
          throw Error("Test selector API is not supported by this renderer.");
        e = Mr(t, e), t = [];
        for (var i = 0; i < e.length; i++)
          t.push(Xs(e[i]));
        for (e = t.length - 1; 0 < e; e--) {
          i = t[e];
          for (var c = i.x, r = c + i.width, d = i.y, v = d + i.height, b = e - 1; 0 <= b; b--)
            if (e !== b) {
              var Y = t[b], W = Y.x, dt = W + Y.width, yt = Y.y, Et = yt + Y.height;
              if (c >= W && d >= yt && r <= dt && v <= Et) {
                t.splice(e, 1);
                break;
              } else if (c !== W || i.width !== Y.width || Et < d || yt > v) {
                if (!(d !== yt || i.height !== Y.height || dt < c || W > r)) {
                  W > c && (Y.width += W - c, Y.x = c), dt < r && (Y.width = r - W), t.splice(e, 1);
                  break;
                }
              } else {
                yt > d && (Y.height += yt - d, Y.y = d), Et < v && (Y.height = v - yt), t.splice(e, 1);
                break;
              }
            }
        }
        return t;
      }, se.findHostInstance = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
          throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
            "Argument appears to not be a ReactComponent. Keys: " + t
          ));
        return t = lt(e), t === null ? null : al(t.stateNode);
      }, se.findHostInstanceWithNoPortals = function(t) {
        return t = V(t), t = t !== null ? st(t) : null, t === null ? null : al(t.stateNode);
      }, se.findHostInstanceWithWarning = function(t, e) {
        var i = t._reactInternals;
        if (i === void 0)
          throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
            "Argument appears to not be a ReactComponent. Keys: " + t
          ));
        if (t = lt(i), t === null) return null;
        if (t.mode & 8) {
          var c = P(i) || "Component";
          Ov[c] || (Ov[c] = !0, it(t, function() {
            i.mode & 8 ? console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              e,
              e,
              c
            ) : console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              e,
              e,
              c
            );
          }));
        }
        return al(t.stateNode);
      }, se.flushPassiveEffects = lu, se.flushSyncFromReconciler = function(t) {
        var e = qe;
        qe |= 1;
        var i = F.T, c = Ni();
        try {
          if (Xn(2), F.T = null, t)
            return t();
        } finally {
          Xn(c), F.T = i, qe = e, (qe & (xa | Su)) === Ka && Ki(0);
        }
      }, se.flushSyncWork = au, se.focusWithin = function(t, e) {
        if (!ll)
          throw Error("Test selector API is not supported by this renderer.");
        for (t = Fn(t), e = Em(t, e), e = Array.from(e), t = 0; t < e.length; ) {
          var i = e[t++], c = i.tag;
          if (!In(i)) {
            if ((c === 5 || c === 26 || c === 27) && Tn(i.stateNode))
              return !0;
            for (i = i.child; i !== null; )
              e.push(i), i = i.sibling;
          }
        }
        return !1;
      }, se.getFindAllNodesFailureDescription = function(t, e) {
        if (!ll)
          throw Error("Test selector API is not supported by this renderer.");
        var i = 0, c = [];
        t = [Fn(t), 0];
        for (var r = 0; r < t.length; ) {
          var d = t[r++], v = d.tag, b = t[r++], Y = e[b];
          if ((v !== 5 && v !== 26 && v !== 27 || !In(d)) && (_i(d, Y) && (c.push(Qh(Y)), b++, b > i && (i = b)), b < e.length))
            for (d = d.child; d !== null; )
              t.push(d, b), d = d.sibling;
        }
        if (i < e.length) {
          for (t = []; i < e.length; i++)
            t.push(Qh(e[i]));
          return `findAllNodes was able to match part of the selector:
  ` + (c.join(" > ") + `

No matching component was found for:
  `) + t.join(" > ");
        }
        return null;
      }, se.getPublicRootInstance = function(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
          case 27:
          case 5:
            return al(t.child.stateNode);
          default:
            return t.child.stateNode;
        }
      }, se.injectIntoDevTools = function() {
        var t = {
          bundleType: 1,
          version: Vr,
          rendererPackageName: nl,
          currentDispatcherRef: F,
          findFiberByHostInstance: Ju,
          reconcilerVersion: "19.0.0"
        };
        return Va !== null && (t.rendererConfig = Va), t.overrideHookState = Hv, t.overrideHookStateDeletePath = Bv, t.overrideHookStateRenamePath = qv, t.overrideProps = Yv, t.overridePropsDeletePath = Vv, t.overridePropsRenamePath = jv, t.scheduleUpdate = Gv, t.setErrorHandler = Qv, t.setSuspenseHandler = Xv, t.scheduleRefresh = R, t.scheduleRoot = M, t.setRefreshHandler = C, t.getCurrentFiber = cy, t.getLaneLabelMap = Gm, t.injectProfilingHooks = xt, Ma(t);
      }, se.isAlreadyRendering = function() {
        return (qe & (xa | Su)) !== Ka;
      }, se.observeVisibleRects = function(t, e, i, c) {
        function r() {
          var W = Mr(t, e);
          d.forEach(function(dt) {
            0 > W.indexOf(dt) && Y(dt);
          }), W.forEach(function(dt) {
            0 > d.indexOf(dt) && b(dt);
          });
        }
        if (!ll)
          throw Error("Test selector API is not supported by this renderer.");
        var d = Mr(t, e);
        i = ru(d, i, c);
        var v = i.disconnect, b = i.observe, Y = i.unobserve;
        return gp.push(r), {
          disconnect: function() {
            var W = gp.indexOf(r);
            0 <= W && gp.splice(W, 1), v();
          }
        };
      }, se.shouldError = function(t) {
        return E(t);
      }, se.shouldSuspend = function(t) {
        return x(t);
      }, se.startHostTransition = function(t, e, i, c) {
        if (t.tag !== 5)
          throw Error(
            "Expected the form instance to be a HostComponent. This is a bug in React."
          );
        var r = oh(t).queue;
        ch(
          t,
          r,
          e,
          $l,
          i === null ? X : function() {
            F.T === null && console.error(
              "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
            );
            var d = oh(t).next.queue;
            return Bu(
              t,
              d,
              {},
              Ba(t)
            ), i(c);
          }
        );
      }, se.updateContainer = function(t, e, i, c) {
        var r = e.current, d = Ba(r);
        return nd(
          r,
          d,
          t,
          e,
          i,
          c
        ), d;
      }, se.updateContainerSync = Nr, se;
    }, T.exports.default = T.exports, Object.defineProperty(T.exports, "__esModule", { value: !0 }));
  }(v0)), v0.exports;
}
process.env.NODE_ENV === "production" ? XS() : ZS();
var Wd = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V1;
function KS() {
  if (V1) return Wd;
  V1 = 1;
  var T = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function u(o, h, y) {
    var S = null;
    if (y !== void 0 && (S = "" + y), h.key !== void 0 && (S = "" + h.key), "key" in h) {
      y = {};
      for (var x in h)
        x !== "key" && (y[x] = h[x]);
    } else y = h;
    return h = y.ref, {
      $$typeof: T,
      type: o,
      key: S,
      ref: h !== void 0 ? h : null,
      props: y
    };
  }
  return Wd.Fragment = n, Wd.jsx = u, Wd.jsxs = u, Wd;
}
var Fd = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function JS() {
  return j1 || (j1 = 1, process.env.NODE_ENV !== "production" && function() {
    function T(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === ot ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case Tt:
          return "Fragment";
        case ut:
          return "Portal";
        case Rt:
          return "Profiler";
        case Nt:
          return "StrictMode";
        case ye:
          return "Suspense";
        case it:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case Gt:
            return (D.displayName || "Context") + ".Provider";
          case Vt:
            return (D._context.displayName || "Context") + ".Consumer";
          case jt:
            var xt = D.render;
            return D = D.displayName, D || (D = xt.displayName || xt.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case Ft:
            return xt = D.displayName || null, xt !== null ? xt : T(D.type) || "Memo";
          case ie:
            xt = D._payload, D = D._init;
            try {
              return T(D(xt));
            } catch {
            }
        }
      return null;
    }
    function n(D) {
      return "" + D;
    }
    function u(D) {
      try {
        n(D);
        var xt = !1;
      } catch {
        xt = !0;
      }
      if (xt) {
        xt = console;
        var At = xt.error, Kt = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return At.call(
          xt,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Kt
        ), n(D);
      }
    }
    function o() {
    }
    function h() {
      if (vt === 0) {
        Dt = console.log, Ot = console.info, Ye = console.warn, ue = console.error, Me = console.group, je = console.groupCollapsed, ge = console.groupEnd;
        var D = {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        };
        Object.defineProperties(console, {
          info: D,
          log: D,
          warn: D,
          error: D,
          group: D,
          groupCollapsed: D,
          groupEnd: D
        });
      }
      vt++;
    }
    function y() {
      if (vt--, vt === 0) {
        var D = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: w({}, D, { value: Dt }),
          info: w({}, D, { value: Ot }),
          warn: w({}, D, { value: Ye }),
          error: w({}, D, { value: ue }),
          group: w({}, D, { value: Me }),
          groupCollapsed: w({}, D, { value: je }),
          groupEnd: w({}, D, { value: ge })
        });
      }
      0 > vt && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function S(D) {
      if (ve === void 0)
        try {
          throw Error();
        } catch (At) {
          var xt = At.stack.trim().match(/\n( *(at )?)/);
          ve = xt && xt[1] || "", te = -1 < At.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < At.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ve + D + te;
    }
    function x(D, xt) {
      if (!D || Ge) return "";
      var At = Se.get(D);
      if (At !== void 0) return At;
      Ge = !0, At = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var Kt = null;
      Kt = st.H, st.H = null, h();
      try {
        var Ne = {
          DetermineComponentFrameRoot: function() {
            try {
              if (xt) {
                var an = function() {
                  throw Error();
                };
                if (Object.defineProperty(an.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(an, []);
                  } catch (Pe) {
                    var Mn = Pe;
                  }
                  Reflect.construct(D, [], an);
                } else {
                  try {
                    an.call();
                  } catch (Pe) {
                    Mn = Pe;
                  }
                  D.call(an.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Pe) {
                  Mn = Pe;
                }
                (an = D()) && typeof an.catch == "function" && an.catch(function() {
                });
              }
            } catch (Pe) {
              if (Pe && Mn && typeof Pe.stack == "string")
                return [Pe.stack, Mn.stack];
            }
            return [null, null];
          }
        };
        Ne.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var _e = Object.getOwnPropertyDescriptor(
          Ne.DetermineComponentFrameRoot,
          "name"
        );
        _e && _e.configurable && Object.defineProperty(
          Ne.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var Xt = Ne.DetermineComponentFrameRoot(), Yt = Xt[0], pa = Xt[1];
        if (Yt && pa) {
          var be = Yt.split(`
`), ke = pa.split(`
`);
          for (Xt = _e = 0; _e < be.length && !be[_e].includes(
            "DetermineComponentFrameRoot"
          ); )
            _e++;
          for (; Xt < ke.length && !ke[Xt].includes(
            "DetermineComponentFrameRoot"
          ); )
            Xt++;
          if (_e === be.length || Xt === ke.length)
            for (_e = be.length - 1, Xt = ke.length - 1; 1 <= _e && 0 <= Xt && be[_e] !== ke[Xt]; )
              Xt--;
          for (; 1 <= _e && 0 <= Xt; _e--, Xt--)
            if (be[_e] !== ke[Xt]) {
              if (_e !== 1 || Xt !== 1)
                do
                  if (_e--, Xt--, 0 > Xt || be[_e] !== ke[Xt]) {
                    var _a = `
` + be[_e].replace(
                      " at new ",
                      " at "
                    );
                    return D.displayName && _a.includes("<anonymous>") && (_a = _a.replace("<anonymous>", D.displayName)), typeof D == "function" && Se.set(D, _a), _a;
                  }
                while (1 <= _e && 0 <= Xt);
              break;
            }
        }
      } finally {
        Ge = !1, st.H = Kt, y(), Error.prepareStackTrace = At;
      }
      return be = (be = D ? D.displayName || D.name : "") ? S(be) : "", typeof D == "function" && Se.set(D, be), be;
    }
    function E(D) {
      if (D == null) return "";
      if (typeof D == "function") {
        var xt = D.prototype;
        return x(
          D,
          !(!xt || !xt.isReactComponent)
        );
      }
      if (typeof D == "string") return S(D);
      switch (D) {
        case ye:
          return S("Suspense");
        case it:
          return S("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case jt:
            return D = x(D.render, !1), D;
          case Ft:
            return E(D.type);
          case ie:
            xt = D._payload, D = D._init;
            try {
              return E(D(xt));
            } catch {
            }
        }
      return "";
    }
    function z() {
      var D = st.A;
      return D === null ? null : D.getOwner();
    }
    function M(D) {
      if (N.call(D, "key")) {
        var xt = Object.getOwnPropertyDescriptor(D, "key").get;
        if (xt && xt.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function R(D, xt) {
      function At() {
        Ce || (Ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          xt
        ));
      }
      At.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: At,
        configurable: !0
      });
    }
    function C() {
      var D = T(this.type);
      return rl[D] || (rl[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function A(D, xt, At, Kt, Ne, _e) {
      return At = _e.ref, D = {
        $$typeof: P,
        type: D,
        key: xt,
        props: _e,
        _owner: Ne
      }, (At !== void 0 ? At : null) !== null ? Object.defineProperty(D, "ref", {
        enumerable: !1,
        get: C
      }) : Object.defineProperty(D, "ref", { enumerable: !1, value: null }), D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(D, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function U(D, xt, At, Kt, Ne, _e) {
      if (typeof D == "string" || typeof D == "function" || D === Tt || D === Rt || D === Nt || D === ye || D === it || D === V || typeof D == "object" && D !== null && (D.$$typeof === ie || D.$$typeof === Ft || D.$$typeof === Gt || D.$$typeof === Vt || D.$$typeof === jt || D.$$typeof === ct || D.getModuleId !== void 0)) {
        var Xt = xt.children;
        if (Xt !== void 0)
          if (Kt)
            if (bt(Xt)) {
              for (Kt = 0; Kt < Xt.length; Kt++)
                X(Xt[Kt], D);
              Object.freeze && Object.freeze(Xt);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else X(Xt, D);
      } else
        Xt = "", (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Xt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), D === null ? Kt = "null" : bt(D) ? Kt = "array" : D !== void 0 && D.$$typeof === P ? (Kt = "<" + (T(D.type) || "Unknown") + " />", Xt = " Did you accidentally export a JSX literal instead of a component?") : Kt = typeof D, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          Kt,
          Xt
        );
      if (N.call(xt, "key")) {
        Xt = T(D);
        var Yt = Object.keys(xt).filter(function(be) {
          return be !== "key";
        });
        Kt = 0 < Yt.length ? "{key: someKey, " + Yt.join(": ..., ") + ": ...}" : "{key: someKey}", Ma[Xt + Kt] || (Yt = 0 < Yt.length ? "{" + Yt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Kt,
          Xt,
          Yt,
          Xt
        ), Ma[Xt + Kt] = !0);
      }
      if (Xt = null, At !== void 0 && (u(At), Xt = "" + At), M(xt) && (u(xt.key), Xt = "" + xt.key), "key" in xt) {
        At = {};
        for (var pa in xt)
          pa !== "key" && (At[pa] = xt[pa]);
      } else At = xt;
      return Xt && R(
        At,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), A(D, Xt, _e, Ne, z(), At);
    }
    function X(D, xt) {
      if (typeof D == "object" && D && D.$$typeof !== fe) {
        if (bt(D))
          for (var At = 0; At < D.length; At++) {
            var Kt = D[At];
            J(Kt) && K(Kt, xt);
          }
        else if (J(D))
          D._store && (D._store.validated = 1);
        else if (D === null || typeof D != "object" ? At = null : (At = lt && D[lt] || D["@@iterator"], At = typeof At == "function" ? At : null), typeof At == "function" && At !== D.entries && (At = At.call(D), At !== D))
          for (; !(D = At.next()).done; )
            J(D.value) && K(D.value, xt);
      }
    }
    function J(D) {
      return typeof D == "object" && D !== null && D.$$typeof === P;
    }
    function K(D, xt) {
      if (D._store && !D._store.validated && D.key == null && (D._store.validated = 1, xt = k(xt), !En[xt])) {
        En[xt] = !0;
        var At = "";
        D && D._owner != null && D._owner !== z() && (At = null, typeof D._owner.tag == "number" ? At = T(D._owner.type) : typeof D._owner.name == "string" && (At = D._owner.name), At = " It was passed a child from " + At + ".");
        var Kt = st.getCurrentStack;
        st.getCurrentStack = function() {
          var Ne = E(D.type);
          return Kt && (Ne += Kt() || ""), Ne;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          xt,
          At
        ), st.getCurrentStack = Kt;
      }
    }
    function k(D) {
      var xt = "", At = z();
      return At && (At = T(At.type)) && (xt = `

Check the render method of \`` + At + "`."), xt || (D = T(D)) && (xt = `

Check the top-level render call using <` + D + ">."), xt;
    }
    var at = Ct, P = Symbol.for("react.transitional.element"), ut = Symbol.for("react.portal"), Tt = Symbol.for("react.fragment"), Nt = Symbol.for("react.strict_mode"), Rt = Symbol.for("react.profiler"), Vt = Symbol.for("react.consumer"), Gt = Symbol.for("react.context"), jt = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), lt = Symbol.iterator, ot = Symbol.for("react.client.reference"), st = at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, w = Object.assign, ct = Symbol.for("react.client.reference"), bt = Array.isArray, vt = 0, Dt, Ot, Ye, ue, Me, je, ge;
    o.__reactDisabledLog = !0;
    var ve, te, Ge = !1, Se = new (typeof WeakMap == "function" ? WeakMap : Map)(), fe = Symbol.for("react.client.reference"), Ce, rl = {}, Ma = {}, En = {};
    Fd.Fragment = Tt, Fd.jsx = function(D, xt, At, Kt, Ne) {
      return U(D, xt, At, !1, Kt, Ne);
    }, Fd.jsxs = function(D, xt, At, Kt, Ne) {
      return U(D, xt, At, !0, Kt, Ne);
    };
  }()), Fd;
}
process.env.NODE_ENV === "production" ? KS() : JS();
const r2 = /* @__PURE__ */ ((T, n) => typeof window < "u" && (((T = window.document) == null ? void 0 : T.createElement) || ((n = window.navigator) == null ? void 0 : n.product) === "ReactNative"))() ? Ct.useLayoutEffect : Ct.useEffect;
function LS(T) {
  const n = Ct.useRef(T);
  return r2(() => void (n.current = T), [T]), n;
}
const wS = /* @__PURE__ */ Ct.createContext(null);
function f2() {
  const T = Ct.useContext(wS);
  if (!T) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return T;
}
function Gf(T = (u) => u, n) {
  return f2()(T, n);
}
function R0(T, n = 0) {
  const u = f2(), o = u.getState().internal.subscribe, h = LS(T);
  return r2(() => o(h, n, u), [n, o, u]), null;
}
const G1 = {};
let WS = 0;
const FS = (T) => typeof T == "function";
function PS(T) {
  if (FS(T)) {
    const n = `${WS++}`;
    return G1[n] = T, n;
  } else
    Object.assign(G1, T);
}
new re();
new re();
function IS(T, n, u) {
  return Math.max(n, Math.min(u, T));
}
function $S(T, n) {
  return IS(T - Math.floor(T / n) * n, 0, n);
}
function kS(T, n) {
  var u = $S(n - T, Math.PI * 2);
  return u > Math.PI && (u -= Math.PI * 2), u;
}
var tg = function(n) {
  return 1 / (1 + n + 0.48 * n * n + 0.235 * n * n * n);
};
function Jp(T, n, u) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25, h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.01, y = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 1 / 0, S = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : tg, x = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1e-3, E = "velocity_" + n;
  if (T.__damp === void 0 && (T.__damp = {}), T.__damp[E] === void 0 && (T.__damp[E] = 0), Math.abs(T[n] - u) <= x)
    return T[n] = u, !1;
  o = Math.max(1e-4, o);
  var z = 2 / o, M = S(z * h), R = T[n] - u, C = u, A = y * o;
  R = Math.min(Math.max(R, -A), A), u = T[n] - R;
  var U = (T.__damp[E] + z * R) * h;
  T.__damp[E] = (T.__damp[E] - z * U) * M;
  var X = u + (R + U) * M;
  return C - T[n] > 0 == X > C && (X = C, T.__damp[E] = (X - C) / h), T[n] = X, !0;
}
function S0(T, n, u, o, h, y, S, x) {
  return Jp(T, n, T[n] + kS(T[n], u), o, h, y, S, x);
}
var Hf = /* @__PURE__ */ new nt(), Q1, X1, Z1;
function K1(T, n, u, o, h, y, S) {
  return typeof n == "number" ? Hf.setScalar(n) : Array.isArray(n) ? Hf.set(n[0], n[1], n[2]) : Hf.copy(n), Q1 = Jp(T, "x", Hf.x, u, o, h, y, S), X1 = Jp(T, "y", Hf.y, u, o, h, y, S), Z1 = Jp(T, "z", Hf.z, u, o, h, y, S), Q1 || X1 || Z1;
}
var Pd = /* @__PURE__ */ new ms(), J1, L1, w1;
function eg(T, n, u, o, h, y, S) {
  return Array.isArray(n) ? Pd.set(n[0], n[1], n[2], n[3]) : Pd.copy(n), J1 = S0(T, "x", Pd.x, u, o, h, y, S), L1 = S0(T, "y", Pd.y, u, o, h, y, S), w1 = S0(T, "z", Pd.z, u, o, h, y, S), J1 || L1 || w1;
}
function ng(T, n, u, o) {
  var h;
  return h = class extends wp {
    constructor(y) {
      super({
        vertexShader: n,
        fragmentShader: u,
        ...y
      });
      for (const S in T)
        this.uniforms[S] = new A0(T[S]), Object.defineProperty(this, S, {
          get() {
            return this.uniforms[S].value;
          },
          set(x) {
            this.uniforms[S].value = x;
          }
        });
    }
  }, h.key = n2.generateUUID(), h;
}
function fc(T, n, u) {
  const o = Gf((C) => C.size), h = Gf((C) => C.viewport), y = typeof T == "number" ? T : o.width * h.dpr, S = typeof n == "number" ? n : o.height * h.dpr, x = (typeof T == "number" ? u : T) || {}, {
    samples: E = 0,
    depth: z,
    ...M
  } = x, R = Ct.useMemo(() => {
    const C = new l2(y, S, {
      minFilter: Lp,
      magFilter: Lp,
      type: j2,
      ...M
    });
    return z && (C.depthTexture = new c2(y, S, I1)), C.samples = E, C;
  }, []);
  return Ct.useLayoutEffect(() => {
    R.setSize(y, S), E && (R.samples = E);
  }, [E, R, y, S]), Ct.useEffect(() => () => R.dispose(), []), R;
}
const h2 = `precision highp float;
uniform sampler2D velocity;
uniform float dt;
uniform bool isBFECC;
// uniform float uvInternalScale;
uniform vec2 fboSize;
uniform vec2 px;
varying vec2 uvInternal;

void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;

    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uvInternal).xy;
        vec2 uvInternal2 = uvInternal - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uvInternal2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uvInternal;
        vec2 vel_old = texture2D(velocity, uvInternal).xy;
        // back trace
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;

        // forward trace
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        
        vec2 error = spot_new2 - spot_new;

        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;

        // back trace 2
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        // gl_FragColor = vec4(spot_old2, 0.0, 0.0);
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`, Zf = `uniform vec2 px;
uniform vec2 boundarySpace;
varying vec2 uvInternal;

precision highp float;

void main(){
    vec3 pos = position;
    vec2 scale = 1.0 - boundarySpace * 2.0;
    pos.xy = pos.xy * scale;
    uvInternal = vec2(0.5)+(pos.xy)*0.5;
    gl_Position = vec4( pos, 1.0 );
}
`, ag = `varying vec2 uvInternal;
uniform vec2 px;


precision highp float;

void main(){
    vec3 pos = position;
    uvInternal = 0.5 + pos.xy * 0.5;
    vec2 n = sign(pos.xy);
    pos.xy = abs(pos.xy) - px * 1.0;
    pos.xy *= n;
    gl_Position = vec4( pos, 1.0 );
}`, d2 = {
  vertexShader: Zf,
  fragmentShader: h2,
  uniforms: {
    boundarySpace: {
      value: null
    },
    px: {
      value: null
    },
    fboSize: {
      value: null
    },
    velocity: {
      value: null
    },
    dt: {
      value: null
    },
    isBFECC: {
      value: null
    }
  }
}, lg = () => {
  const T = {
    vertexShader: ag,
    fragmentShader: h2,
    uniforms: d2.uniforms
  }, n = new Float32Array([
    // left
    -1,
    -1,
    0,
    -1,
    1,
    0,
    // top
    -1,
    1,
    0,
    1,
    1,
    0,
    // right
    1,
    1,
    0,
    1,
    -1,
    0,
    // bottom
    1,
    -1,
    0,
    -1,
    -1,
    0
  ]), u = new Xf();
  u.setAttribute("position", new Eo(n, 3));
  const o = new wp(T), h = new qS(u, o);
  return h.renderOrder = 1, h;
}, ig = (T) => {
  T.geometry.dispose(), T.material.dispose();
}, ug = {
  materialConfig: d2,
  fboConfig: { isNull: !0 },
  children: lg,
  onDispose: ig
}, sg = `precision highp float;

uniform vec2 force;
uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;

void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0-min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0, 1);
}
`, cg = `precision highp float;

uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;

void main(){
    vec2 pos = position.xy * scale * px + center;
    vUv = uv;
    gl_Position = vec4( pos, 0.0, 1.0 );
}
`, og = {
  vertexShader: cg,
  fragmentShader: sg,
  uniforms: {
    px: {
      value: null
    },
    force: {
      value: new re(0, 0)
    },
    center: {
      value: new re(0, 0)
    },
    scale: {
      value: null
    }
  },
  blending: H2
}, rg = {
  materialConfig: og,
  fboConfig: { isNull: !0 }
}, fg = `precision highp float;
uniform sampler2D velocity;
uniform sampler2D velocity_new;
uniform float v;
uniform vec2 px;
uniform float dt;

varying vec2 uvInternal;

void main(){
    // poisson equation
    vec2 old = texture2D(velocity, uvInternal).xy;
    vec2 new0 = texture2D(velocity_new, uvInternal + vec2(px.x * 2.0, 0)).xy;
    vec2 new1 = texture2D(velocity_new, uvInternal - vec2(px.x * 2.0, 0)).xy;
    vec2 new2 = texture2D(velocity_new, uvInternal + vec2(0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uvInternal - vec2(0, px.y * 2.0)).xy;

    vec2 new = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    new /= 4.0 * (1.0 + v * dt);
    
    gl_FragColor = vec4(new, 0.0, 0.0);
}
`, hg = {
  vertexShader: Zf,
  fragmentShader: fg,
  uniforms: {
    boundarySpace: {
      value: null
    },
    velocity: {
      value: null
    },
    velocity_new: {
      value: null
    },
    v: {
      value: null
    },
    px: {
      value: null
    },
    dt: {
      value: null
    }
  }
}, dg = {
  materialConfig: hg,
  fboConfig: { isNull: !0 }
}, mg = `precision highp float;
uniform sampler2D velocity;
uniform float dt;
uniform vec2 px;
varying vec2 uvInternal;

void main(){
    float x0 = texture2D(velocity, uvInternal-vec2(px.x, 0)).x;
    float x1 = texture2D(velocity, uvInternal+vec2(px.x, 0)).x;
    float y0 = texture2D(velocity, uvInternal-vec2(0, px.y)).y;
    float y1 = texture2D(velocity, uvInternal+vec2(0, px.y)).y;
    float divergence = (x1-x0 + y1-y0) / 2.0;

    gl_FragColor = vec4(divergence / dt);
}
`, pg = {
  vertexShader: Zf,
  fragmentShader: mg,
  uniforms: {
    boundarySpace: {
      value: null
    },
    velocity: {
      value: null
    },
    dt: {
      value: null
    },
    px: {
      value: null
    }
  }
}, yg = {
  materialConfig: pg,
  fboConfig: { isNull: !0 }
}, vg = `precision highp float;
uniform sampler2D pressure;
uniform sampler2D divergence;
uniform vec2 px;
varying vec2 uvInternal;

void main(){    
    // poisson equation
    float p0 = texture2D(pressure, uvInternal+vec2(px.x * 2.0,  0)).r;
    float p1 = texture2D(pressure, uvInternal-vec2(px.x * 2.0, 0)).r;
    float p2 = texture2D(pressure, uvInternal+vec2(0, px.y * 2.0 )).r;
    float p3 = texture2D(pressure, uvInternal-vec2(0, px.y * 2.0 )).r;
    float div = texture2D(divergence, uvInternal).r;
    
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`, Sg = {
  vertexShader: Zf,
  fragmentShader: vg,
  uniforms: {
    boundarySpace: {
      value: null
    },
    pressure: {
      value: null
    },
    divergence: {
      value: null
    },
    px: {
      value: null
    }
  }
}, gg = {
  materialConfig: Sg,
  fboConfig: { isNull: !0 }
}, Eg = `precision highp float;
uniform sampler2D pressure;
uniform sampler2D velocity;
uniform vec2 px;
uniform float dt;
varying vec2 uvInternal;

void main(){
    float step = 1.0;

    float p0 = texture2D(pressure, uvInternal+vec2(px.x * step, 0)).r;
    float p1 = texture2D(pressure, uvInternal-vec2(px.x * step, 0)).r;
    float p2 = texture2D(pressure, uvInternal+vec2(0, px.y * step)).r;
    float p3 = texture2D(pressure, uvInternal-vec2(0, px.y * step)).r;

    vec2 v = texture2D(velocity, uvInternal).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`, xg = {
  vertexShader: Zf,
  fragmentShader: Eg,
  uniforms: {
    boundarySpace: {
      value: null
    },
    pressure: {
      value: null
    },
    velocity: {
      value: null
    },
    px: {
      value: null
    },
    dt: {
      value: null
    }
  }
}, Tg = {
  materialConfig: xg,
  fboConfig: { isNull: !0 }
}, zg = `precision highp float;
uniform sampler2D velocity;
varying vec2 uvInternal;

void main(){
    vec2 vel = texture2D(velocity, uvInternal).xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;
    
    vec3 colorInternal = vec3(vel.x, vel.y, 1.0);
    colorInternal = mix(vec3(1.0), colorInternal, len);
    
    // old
    // gl_FragColor = vec4(colorInternal,  1.0);

    // new
    gl_FragColor = vec4(len,len,len,  1.0);
}
`, Mg = {
  vertexShader: Zf,
  fragmentShader: zg,
  uniforms: {
    velocity: {
      value: null
    },
    boundarySpace: {
      value: new re()
    }
  }
}, _g = {
  materialConfig: Mg,
  fboConfig: { isNull: !0 }
};
var Eu, go, Vf, xu;
class So {
  constructor({
    materialConfig: {
      vertexShader: n,
      fragmentShader: u,
      uniforms: o = {},
      raw: h = !1,
      ...y
    },
    material: S,
    geometry: x,
    camera: E,
    onBeforeRender: z,
    onAfterRender: M,
    fboConfig: { width: R, height: C, options: A, isNull: U = !1 },
    fbo: X,
    children: J,
    onDispose: K
  }) {
    Zd(this, Eu);
    Zd(this, go);
    Zd(this, Vf);
    Zd(this, xu, {});
    S ? this.material = typeof S == "function" ? S() : S : (ic(this, xu, o), this.material = h ? new YS({
      uniforms: Ja(this, xu),
      vertexShader: n,
      fragmentShader: u,
      ...y
    }) : new wp({
      uniforms: Ja(this, xu),
      vertexShader: n,
      fragmentShader: u,
      ...y
    })), x ? this.geometry = typeof x == "function" ? x() : x : this.geometry = new Wp(2, 2), this.mesh = new bS(this.geometry, this.material), E ? this.camera = typeof E == "function" ? E() : E : this.camera = new s2(), this.scene = new OS(), this.scene.add(this.mesh), J && (ic(this, go, typeof J == "function" ? J({ uniforms: Ja(this, xu), mesh: this.mesh }) : J), this.scene.add(Ja(this, go))), typeof z == "function" && (this.scene.onBeforeRender = z), typeof M == "function" && (this.scene.onAfterRender = M), X ? ic(this, Eu, X) : U ? ic(this, Eu, null) : ic(this, Eu, new l2(R, C, A)), ic(this, Vf, K);
  }
  dispose(n = !0, u = !0, o = !0, h = !0) {
    n && this.material.dispose(), u && this.geometry.dispose(), o && Ja(this, Eu).dispose(), h && typeof Ja(this, Vf) == "function" && Ja(this, Vf).call(this, Ja(this, go));
  }
  setFBO(n) {
    return ic(this, Eu, n), this;
  }
  get fbo() {
    return Ja(this, Eu);
  }
  setOnBeforeRender(n) {
    return this.scene.onBeforeRender = n, this;
  }
  get onBeforeRender() {
    return this.scene.onBeforeRender;
  }
  setOnAfterRender(n) {
    return this.scene.onAfterRender = n, this;
  }
  get onAfterRenderRender() {
    return this.scene.onAfterRender;
  }
  get uniforms() {
    return Ja(this, xu);
  }
  get children() {
    return Ja(this, go);
  }
  updateUniforms(n = {}) {
    for (const u in n)
      Ja(this, xu)[u] = n[u], this.material.uniforms[u] = Ja(this, xu)[u];
    return this;
  }
  render(n) {
    return n.setRenderTarget(Ja(this, Eu)), n.render(this.scene, this.camera), n.setRenderTarget(null), this;
  }
}
Eu = new WeakMap(), go = new WeakMap(), Vf = new WeakMap(), xu = new WeakMap();
const bg = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 100,
  viscous: 30,
  isBounce: !1,
  dt: 0.014,
  isViscous: !1,
  BFECC: !0
}, Ag = (T, n, u, o) => ({
  force: o,
  center: u
}), Bg = (T = {}, n = -1, [u, o, h = {}] = [], y) => {
  const {
    iterations_poisson: S,
    iterations_viscous: x,
    mouse_force: E,
    resolution: z,
    cursor_size: M,
    viscous: R,
    isBounce: C,
    dt: A,
    isViscous: U,
    BFECC: X,
    forceCallback: J
  } = { ...bg, ...T }, K = Gf(({ get: vt }) => vt), { width: k, height: at } = Ct.useMemo(
    () => ({
      width: u || K().size.width,
      height: o || K().size.height
    }),
    [o, u, K]
  ), P = Ct.useRef(new s2()), ut = Ct.useRef(new Wp(2, 2)), Tt = Ct.useRef(new re(0, 0)), Nt = Ct.useRef(new re(0, 0)), Rt = fc(k, at, { depthBuffer: !1, ...h }), Vt = fc(k, at, { depthBuffer: !1, ...h }), Gt = fc(k, at, { depthBuffer: !1, ...h }), jt = fc(k, at, { depthBuffer: !1, ...h }), ye = fc(k, at, { depthBuffer: !1, ...h }), it = fc(k, at, { depthBuffer: !1, ...h }), Ft = fc(k, at, { depthBuffer: !1, ...h }), ie = fc(k, at, { depthBuffer: !1, ...h }), V = Ct.useRef({
    boundarySpace: new re(),
    cellScale: new re(),
    fboSize: new re(),
    force: new re(),
    center: new re(),
    scale: new re(M, M)
  });
  Ct.useEffect(() => {
    const { boundarySpace: vt, cellScale: Dt, fboSize: Ot } = V.current;
    Ot.set(Math.round(k * z), Math.round(at * z)), Dt.set(1 / Ot.x, 1 / Ot.y), C ? vt.set(0, 0) : vt.copy(Dt);
  }, [at, C, z, k]);
  const lt = Ct.useRef(
    new So({
      ...ug,
      camera: P.current,
      geometry: ut.current
    }).updateUniforms({
      boundarySpace: {
        value: V.current.cellScale
      },
      px: {
        value: V.current.cellScale
      },
      fboSize: {
        value: V.current.fboSize
      },
      velocity: {
        value: Rt.texture
      },
      dt: {
        value: A
      },
      isBFECC: {
        value: !0
      }
    }).setFBO(Vt)
  ), ot = Ct.useRef(
    new So({
      ...rg,
      camera: P.current,
      geometry: ut.current
    }).updateUniforms({
      px: {
        value: V.current.cellScale
      },
      force: {
        value: V.current.force
      },
      center: {
        value: V.current.center
      },
      scale: {
        value: V.current.scale
      }
    }).setFBO(Vt)
  ), st = Ct.useRef(
    new So({
      ...dg,
      camera: P.current,
      geometry: ut.current
    }).updateUniforms({
      boundarySpace: {
        value: V.current.boundarySpace
      },
      velocity: {
        value: Vt.texture
      },
      velocity_new: {
        value: Gt.texture
      },
      v: {
        value: R
      },
      px: {
        value: V.current.cellScale
      },
      dt: {
        value: A
      }
    }).setFBO(jt)
  ), N = Ct.useRef(
    new So({
      ...yg,
      camera: P.current,
      geometry: ut.current
    }).updateUniforms({
      boundarySpace: {
        value: V.current.boundarySpace
      },
      velocity: {
        value: Gt.texture
      },
      dt: {
        value: A
      },
      px: {
        value: V.current.cellScale
      }
    }).setFBO(ye)
  ), w = Ct.useRef(
    new So({
      ...gg,
      camera: P.current,
      geometry: ut.current
    }).updateUniforms({
      boundarySpace: {
        value: V.current.boundarySpace
      },
      pressure: {
        value: it.texture
      },
      divergence: {
        value: ye.texture
      },
      px: {
        value: V.current.cellScale
      }
    }).setFBO(Ft)
  ), ct = Ct.useRef(
    new So({
      ...Tg,
      camera: P.current,
      geometry: ut.current
    }).updateUniforms({
      boundarySpace: {
        value: V.current.boundarySpace
      },
      pressure: {
        value: it.texture
      },
      velocity: {
        value: Gt.texture
      },
      px: {
        value: V.current.cellScale
      },
      dt: {
        value: A
      }
    }).setFBO(Rt)
  ), bt = Ct.useRef(
    new So({
      ..._g,
      camera: P.current,
      geometry: ut.current
    }).updateUniforms({
      velocity: {
        value: Rt.texture
      },
      boundarySpace: {
        value: new re()
      }
    }).setFBO(ie)
  );
  return R0(({ gl: vt, pointer: Dt, clock: Ot }, Ye) => {
    if (!(y != null && y.current)) {
      lt.current.updateUniforms({
        dt: {
          value: A
        },
        isBFECC: {
          value: X
        }
      }).children.visible = C, lt.current.children.material.uniforms = lt.current.uniforms, lt.current.render(vt), Tt.current.subVectors(Dt, Nt.current), Nt.current.copy(Dt);
      const ue = typeof J == "function" ? J : Ag, { force: Me, center: je } = ue(
        Ye,
        Ot.getElapsedTime(),
        Dt.clone(),
        Tt.current.clone()
      );
      V.current.force.set(Me.x * E, Me.y * E), V.current.center.set(je.x, je.y), V.current.scale.set(M, M), ot.current.render(vt);
      let ge = Vt;
      if (U) {
        let Se, fe;
        for (let Ce = 0; Ce < x; Ce++)
          Ce % 2 == 0 ? (Se = Gt, fe = jt) : (Se = jt, fe = Gt), st.current.updateUniforms({
            v: {
              value: R
            },
            dt: {
              value: A
            },
            velocity_new: {
              value: Se.texture
            }
          }).setFBO(fe).render(vt);
        ge = fe;
      }
      N.current.updateUniforms({
        velocity: { value: ge.texture },
        dt: {
          value: A
        }
      }).render(vt);
      let ve, te;
      for (let Se = 0; Se < S; Se++)
        Se % 2 == 0 ? (ve = it, te = Ft) : (ve = Ft, te = it), w.current.updateUniforms({ pressure: { value: ve.texture } }).setFBO(te).render(vt);
      const Ge = te;
      ct.current.updateUniforms({
        dt: {
          value: A
        },
        velocity: {
          value: ge.texture
        },
        pressure: {
          value: Ge.texture
        }
      }).render(vt), bt.current.render(vt);
    }
  }, n), Ct.useEffect(
    () => () => {
      ut.current.dispose(), lt.current.dispose(!0, !1, !1, !0), ot.current.dispose(!0, !1, !1, !0), st.current.dispose(!0, !1, !1, !0), N.current.dispose(!0, !1, !1, !0), w.current.dispose(!0, !1, !1, !0), ct.current.dispose(!0, !1, !1, !0), bt.current.dispose(!0, !1, !1, !0);
    },
    []
  ), ie.texture;
}, Rg = (T, n) => {
  const u = new nt();
  return T.getWorldPosition(u), n.worldToLocal(u), Math.abs(u.z);
}, Cg = (T, n, u) => {
  const o = new re(), h = new re();
  T.getViewBounds(n, o, h);
  const y = new re(
    Math.abs(u.x / (h.x - o.x)),
    Math.abs(u.y / (h.y - o.y))
  );
  return { min: o, max: h, ppwu: y };
}, Ng = ({ left: T, top: n, width: u, height: o }, { min: h, max: y, ppwu: S }) => {
  const x = h.x + T / S.x, E = y.y - n / S.y, z = new re(x, E - o / S.y), M = new re(x + u / S.x, E);
  return { min: z, max: M, ppwu: S };
}, Dg = (T, n, u, o) => {
  var R, C, A, U;
  const h = T.scale.clone(), y = ((C = (R = T == null ? void 0 : T.geometry) == null ? void 0 : R.parameters) == null ? void 0 : C.width) || o && (o == null ? void 0 : o.x) || 1, S = ((U = (A = T == null ? void 0 : T.geometry) == null ? void 0 : A.parameters) == null ? void 0 : U.height) || o && (o == null ? void 0 : o.y) || 1, x = n.bounds.max.getComponent(0) - n.bounds.min.getComponent(0), E = n.bounds.max.getComponent(1) - n.bounds.min.getComponent(1), z = x - n.margin.getComponent(1) - n.margin.getComponent(3), M = E - n.margin.getComponent(0) - n.margin.getComponent(2);
  return h.set(
    Math.abs(y === 0 ? y : z / y),
    Math.abs(S === 0 ? S : M / S),
    h.getComponent(2)
  ), h;
}, W1 = Object.freeze({ WU: 0, PX: 1 }), qg = (T, {
  trackingElementRef: n,
  trackingElement: u = !1,
  customCameraRef: o,
  renderPriority: h,
  left: y = 0.5,
  top: S = 0.5,
  pause: x = !0,
  damp: E = !0,
  damping: z = {},
  scaleToFitWidth: M = !0,
  geometrySize: R,
  computePosition: C,
  computeScale: A,
  computeRotation: U,
  margin: X,
  marginUnits: J = W1.WU
}) => {
  const { smoothTime: K, delta: k, maxSpeed: at, easing: P, eps: ut } = z, { width: Tt, height: Nt } = Gf(
    ({ size: { width: Me, height: je } }) => ({
      width: Me,
      height: je
    })
  ), [Rt, Vt] = Ct.useState(!0), Gt = Ct.useRef(new jf()), jt = Ct.useRef(0), ye = Ct.useRef(null), it = Ct.useRef(new re()), Ft = Ct.useRef(new re()), ie = Ct.useRef(new re()), V = Ct.useRef(new re()), lt = Ct.useRef(new re()), ot = Ct.useRef(new nt()), st = Ct.useRef(new nt()), N = Ct.useRef(new ms()), w = Ct.useRef(new jf(0, 0, 0, 0)), ct = Ct.useRef({
    ppwu: it.current,
    viewBounds: { min: Ft.current, max: ie.current },
    bounds: {
      min: V.current,
      max: lt.current
    },
    targets: {
      position: ot.current,
      scale: st.current,
      rotation: N.current
    },
    distance: ye.current,
    margin: w.current
  }), bt = Ct.useCallback(() => {
    Vt(!1);
  }, []), vt = Ct.useCallback(() => {
    Vt(!0);
  }, []), Dt = Ct.useCallback((Me, je) => {
    const ge = new nt();
    Me.getWorldPosition(ge), je.worldToLocal(ge), ye.current = Math.abs(ge.z);
  }, []), Ot = Ct.useCallback(
    (Me, je, ge, ve, te, Ge) => {
      if (Me.getViewBounds(
        ye.current,
        Ft.current,
        ie.current
      ), it.current.setX(
        Math.abs(je / (ie.current.x - Ft.current.x))
      ), it.current.setY(
        Math.abs(ge / (ie.current.y - Ft.current.y))
      ), ve) {
        const {
          left: Se,
          top: fe,
          width: Ce,
          height: rl
        } = ve.getBoundingClientRect();
        Gt.current.set(
          Ce,
          rl,
          Se,
          fe
        );
        const Ma = Ft.current.x + Se / it.current.x, En = ie.current.y - fe / it.current.y;
        V.current.set(
          Ma,
          En - rl / it.current.y
        ), lt.current.set(
          Ma + Ce / it.current.x,
          En
        );
      } else
        V.current.copy(Ft.current), lt.current.copy(ie.current);
      if (w.current.set(0, 0, 0, 0), te)
        if (w.current.copy(te), Ge === W1.PX)
          w.current.divideScalar(it.current.x);
        else {
          const Se = Math.abs(
            lt.current.x - V.current.x
          ), fe = Math.abs(
            lt.current.y - V.current.y
          );
          w.current.set(
            te.x * fe,
            te.y * Se,
            te.z * fe,
            te.getComponent(3) * Se
          );
        }
    },
    []
  ), Ye = Ct.useCallback((Me, je, ge, ve) => {
    const te = ve ? V.current : Ft.current, Ge = ve ? lt.current : ie.current, Se = Math.abs((Ge.x - te.x) * je), fe = Math.abs((Ge.y - te.y) * ge);
    ot.current.set(te.x + Se, Ge.y - fe);
  }, []), ue = Ct.useCallback(
    (Me, je, ge, ve, te, Ge, Se) => {
      if (st.current.copy(Me.scale), N.current.copy(Me.rotation), typeof je == "function") {
        const fe = je(Me, ct.current, te);
        ot.current.copy(fe), ct.current.targets.position.copy(fe);
      }
      if (typeof ge == "function" || Ge) {
        const fe = Dg(Me, ct.current, te, Se);
        if (st.current.copy(fe), ct.current.targets.scale.copy(fe), typeof ge == "function") {
          const Ce = ge(
            Me,
            ct.current,
            te,
            Se
          );
          st.current.copy(Ce), ct.current.targets.scale.copy(Ce);
        }
      }
      if (typeof ve == "function") {
        const fe = ve(Me, ct.current, te);
        N.current.copy(fe), ct.current.targets.rotation.copy(fe);
      }
    },
    []
  );
  return Ct.useEffect(() => {
    jt.current = 0;
  }, [
    n,
    u,
    o,
    h,
    y,
    S,
    x,
    E,
    M,
    R,
    C,
    A,
    U,
    X,
    J,
    K,
    k,
    at,
    P,
    ut,
    Tt,
    Nt
  ]), R0(({ size: { width: Me, height: je }, camera: ge }, ve) => {
    if (Rt) {
      const te = (o == null ? void 0 : o.current) || ge;
      if (u && n.current) {
        const {
          width: Ge,
          height: Se,
          left: fe,
          top: Ce
        } = n.current.getBoundingClientRect();
        (Gt.current.x !== Ge || Gt.current.y !== Se || Gt.current.z !== fe || Gt.current.w !== Ce) && (jt.current = 0);
      }
      (jt.current < 1 || !x) && T.current instanceof ol && (!u || n.current) && (Dt(T.current, te), Ot(
        te,
        Me,
        je,
        u && n.current,
        X,
        J
      ), Ye(te, y, S, u), ue(
        T.current,
        C,
        A,
        U,
        te,
        M,
        R
      ), jt.current++), E && jt.current > 0 && T.current instanceof ol && (K1(
        T.current.position,
        [
          ot.current.x,
          ot.current.y,
          T.current.position.z
        ],
        K,
        k || ve,
        at,
        P,
        ut
      ), (M || typeof A == "function") && K1(
        T.current.scale,
        [
          st.current.x,
          st.current.y,
          st.current.z
        ],
        K,
        k || ve,
        at,
        P,
        ut
      ), typeof U == "function" && eg(
        T.current.rotation,
        N.current.clone(),
        K,
        k || ve,
        at,
        P,
        ut
      ));
    }
  }, h), { results: ct.current, off: bt, on: vt };
}, Ug = Ct.createContext({}), Og = (T, n, { resizeObserverOptions: { box: u } = {}, resizeDeps: o } = {}) => {
  const { entries: h, subscribe: y, unsubscribe: S } = Ct.useContext(Ug), x = Ct.useMemo(
    () => typeof T == "string" ? document.getElementById(T) : T,
    [T]
  );
  Ct.useEffect(() => (x && y(x, u), () => {
    x && S(x);
  }), [x, u, y, S]), Ct.useEffect(() => (o == null || o.forEach((E) => {
    y(E, u);
  }), () => {
    o == null || o.forEach((E) => {
      S(E);
    });
  }), [u, o, y, S]), Ct.useEffect(() => {
    h.includes(x) ? n(x) : o == null || o.forEach((E) => {
      if (h.includes(E)) {
        n(x);
        return;
      }
    });
  }, [n, x, h, o]);
}, Yg = ({
  target: T,
  element: n,
  callback: u,
  camera: o,
  pause: h = !1,
  useResizeEventOptions: y,
  distance: S
}, x) => {
  const { camera: E } = Gf(({ camera: U }) => ({
    camera: U
  })), {
    canvas: z,
    width: M,
    height: R
  } = Gf(({ gl: { domElement: U }, size: { width: X, height: J } }) => ({
    canvas: U,
    width: X,
    height: J
  })), C = Ct.useCallback(() => {
    const U = n ? n.current : z;
    if (U && (T != null && T.current || S)) {
      const X = U.getBoundingClientRect(), J = T != null && T.current ? Rg(T.current, o || E) : S, K = new re(M, R), k = Cg(
        o || E,
        J,
        K
      ), { min: at, max: P, ppwu: ut } = Ng(X, k);
      if (typeof u == "function")
        u({
          target: T == null ? void 0 : T.current,
          element: U,
          contentRect: X,
          min: at,
          max: P,
          ppwu: ut,
          camera: o || E,
          distance: J
        });
      else
        throw new Error("useBounds: please include an options.compute argument");
    }
  }, [
    S,
    z,
    R,
    M,
    u,
    o,
    E,
    n,
    T
  ]);
  Og(
    n ? n.current : z,
    C,
    y
  );
  const A = Ct.useMemo(() => x || [], [x]);
  Ct.useEffect(() => {
    !h && x && C();
  }, [h, C, ...A]), Ct.useEffect(() => {
    !h && !x && C();
  });
}, Vg = (T, n, u = !1, o, h = "progress", y = "p", S) => {
  const x = Ct.useRef(new Array(T)), E = Ct.useRef(), z = Ct.useRef(0), M = Ct.useRef({ value: void 0 }), R = Ct.useRef({ value: void 0 });
  Ct.useEffect(() => {
    E.current = document.getElementById(h);
  }, [h]), Ct.useEffect(() => {
    z.current = 0;
  }, [n]);
  const C = Ct.useCallback(() => {
    const U = z.current % (T * n);
    for (let X = 0; X < T; X++) {
      const J = n2.smoothstep(U - X * n, 0, n);
      typeof J == "number" && J > 0 && J < 1 && (M.current.value = X + 1), x.current[X] = J, E.current.children[X].style.setProperty(
        `--${y}${X}`,
        `${x.current[X] * 100}%`
      );
    }
  }, [T, y, n]), A = Ct.useCallback((U) => {
    z.current = U;
  }, []);
  return R0(({ clock: U }, X) => {
    u || (z.current += X, C(), R.current.value != M.current.value && o(x, M.current.value), R.current.value = M.current.value);
  }, S), { progressRef: x, setElapsed: A };
};
function jg(T = {}) {
  for (const n in T) {
    const { uniforms: u, vert: o, frag: h } = T[n], y = ng(u, o, h);
    PS({ [n]: y });
  }
}
export {
  W1 as UNITS,
  jg as configureShaderMaterial,
  Rg as getCameraDistance,
  Ng as getElementBounds,
  Cg as getViewBoundsPPWU,
  Dg as setScaleXY,
  qg as use2DBounds,
  Bg as useFluidTexture,
  Yg as useMarkupBounds,
  Vg as useProgress
};
