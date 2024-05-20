function SE(T) {
  return T && T.__esModule && Object.prototype.hasOwnProperty.call(T, "default") ? T.default : T;
}
var vv = { exports: {} }, Ff = {}, yv = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T0;
function _E() {
  if (T0)
    return Dt;
  T0 = 1;
  var T = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), y = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), S = Symbol.iterator;
  function M(U) {
    return U === null || typeof U != "object" ? null : (U = S && U[S] || U["@@iterator"], typeof U == "function" ? U : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, F = Object.assign, k = {};
  function Q(U, j, je) {
    this.props = U, this.context = j, this.refs = k, this.updater = je || w;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(U, j) {
    if (typeof U != "object" && typeof U != "function" && U != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, U, j, "setState");
  }, Q.prototype.forceUpdate = function(U) {
    this.updater.enqueueForceUpdate(this, U, "forceUpdate");
  };
  function J() {
  }
  J.prototype = Q.prototype;
  function se(U, j, je) {
    this.props = U, this.context = j, this.refs = k, this.updater = je || w;
  }
  var he = se.prototype = new J();
  he.constructor = se, F(he, Q.prototype), he.isPureReactComponent = !0;
  var Ce = Array.isArray, Re = Object.prototype.hasOwnProperty, ke = { current: null }, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(U, j, je) {
    var Pe, Je = {}, Ve = null, at = null;
    if (j != null)
      for (Pe in j.ref !== void 0 && (at = j.ref), j.key !== void 0 && (Ve = "" + j.key), j)
        Re.call(j, Pe) && !ue.hasOwnProperty(Pe) && (Je[Pe] = j[Pe]);
    var rt = arguments.length - 2;
    if (rt === 1)
      Je.children = je;
    else if (1 < rt) {
      for (var dt = Array(rt), Ht = 0; Ht < rt; Ht++)
        dt[Ht] = arguments[Ht + 2];
      Je.children = dt;
    }
    if (U && U.defaultProps)
      for (Pe in rt = U.defaultProps, rt)
        Je[Pe] === void 0 && (Je[Pe] = rt[Pe]);
    return { $$typeof: T, type: U, key: Ve, ref: at, props: Je, _owner: ke.current };
  }
  function Ke(U, j) {
    return { $$typeof: T, type: U.type, key: j, ref: U.ref, props: U.props, _owner: U._owner };
  }
  function xe(U) {
    return typeof U == "object" && U !== null && U.$$typeof === T;
  }
  function ze(U) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + U.replace(/[=:]/g, function(je) {
      return j[je];
    });
  }
  var Te = /\/+/g;
  function de(U, j) {
    return typeof U == "object" && U !== null && U.key != null ? ze("" + U.key) : j.toString(36);
  }
  function Ue(U, j, je, Pe, Je) {
    var Ve = typeof U;
    (Ve === "undefined" || Ve === "boolean") && (U = null);
    var at = !1;
    if (U === null)
      at = !0;
    else
      switch (Ve) {
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (U.$$typeof) {
            case T:
            case n:
              at = !0;
          }
      }
    if (at)
      return at = U, Je = Je(at), U = Pe === "" ? "." + de(at, 0) : Pe, Ce(Je) ? (je = "", U != null && (je = U.replace(Te, "$&/") + "/"), Ue(Je, j, je, "", function(Ht) {
        return Ht;
      })) : Je != null && (xe(Je) && (Je = Ke(Je, je + (!Je.key || at && at.key === Je.key ? "" : ("" + Je.key).replace(Te, "$&/") + "/") + U)), j.push(Je)), 1;
    if (at = 0, Pe = Pe === "" ? "." : Pe + ":", Ce(U))
      for (var rt = 0; rt < U.length; rt++) {
        Ve = U[rt];
        var dt = Pe + de(Ve, rt);
        at += Ue(Ve, j, je, dt, Je);
      }
    else if (dt = M(U), typeof dt == "function")
      for (U = dt.call(U), rt = 0; !(Ve = U.next()).done; )
        Ve = Ve.value, dt = Pe + de(Ve, rt++), at += Ue(Ve, j, je, dt, Je);
    else if (Ve === "object")
      throw j = String(U), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return at;
  }
  function ft(U, j, je) {
    if (U == null)
      return U;
    var Pe = [], Je = 0;
    return Ue(U, Pe, "", "", function(Ve) {
      return j.call(je, Ve, Je++);
    }), Pe;
  }
  function ut(U) {
    if (U._status === -1) {
      var j = U._result;
      j = j(), j.then(function(je) {
        (U._status === 0 || U._status === -1) && (U._status = 1, U._result = je);
      }, function(je) {
        (U._status === 0 || U._status === -1) && (U._status = 2, U._result = je);
      }), U._status === -1 && (U._status = 0, U._result = j);
    }
    if (U._status === 1)
      return U._result.default;
    throw U._result;
  }
  var _e = { current: null }, H = { transition: null }, ie = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: H, ReactCurrentOwner: ke };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: ft, forEach: function(U, j, je) {
    ft(U, function() {
      j.apply(this, arguments);
    }, je);
  }, count: function(U) {
    var j = 0;
    return ft(U, function() {
      j++;
    }), j;
  }, toArray: function(U) {
    return ft(U, function(j) {
      return j;
    }) || [];
  }, only: function(U) {
    if (!xe(U))
      throw Error("React.Children.only expected to receive a single React element child.");
    return U;
  } }, Dt.Component = Q, Dt.Fragment = s, Dt.Profiler = h, Dt.PureComponent = se, Dt.StrictMode = o, Dt.Suspense = b, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, Dt.act = ee, Dt.cloneElement = function(U, j, je) {
    if (U == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + U + ".");
    var Pe = F({}, U.props), Je = U.key, Ve = U.ref, at = U._owner;
    if (j != null) {
      if (j.ref !== void 0 && (Ve = j.ref, at = ke.current), j.key !== void 0 && (Je = "" + j.key), U.type && U.type.defaultProps)
        var rt = U.type.defaultProps;
      for (dt in j)
        Re.call(j, dt) && !ue.hasOwnProperty(dt) && (Pe[dt] = j[dt] === void 0 && rt !== void 0 ? rt[dt] : j[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1)
      Pe.children = je;
    else if (1 < dt) {
      rt = Array(dt);
      for (var Ht = 0; Ht < dt; Ht++)
        rt[Ht] = arguments[Ht + 2];
      Pe.children = rt;
    }
    return { $$typeof: T, type: U.type, key: Je, ref: Ve, props: Pe, _owner: at };
  }, Dt.createContext = function(U) {
    return U = { $$typeof: y, _currentValue: U, _currentValue2: U, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, U.Provider = { $$typeof: m, _context: U }, U.Consumer = U;
  }, Dt.createElement = ce, Dt.createFactory = function(U) {
    var j = ce.bind(null, U);
    return j.type = U, j;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(U) {
    return { $$typeof: C, render: U };
  }, Dt.isValidElement = xe, Dt.lazy = function(U) {
    return { $$typeof: E, _payload: { _status: -1, _result: U }, _init: ut };
  }, Dt.memo = function(U, j) {
    return { $$typeof: x, type: U, compare: j === void 0 ? null : j };
  }, Dt.startTransition = function(U) {
    var j = H.transition;
    H.transition = {};
    try {
      U();
    } finally {
      H.transition = j;
    }
  }, Dt.unstable_act = ee, Dt.useCallback = function(U, j) {
    return _e.current.useCallback(U, j);
  }, Dt.useContext = function(U) {
    return _e.current.useContext(U);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(U) {
    return _e.current.useDeferredValue(U);
  }, Dt.useEffect = function(U, j) {
    return _e.current.useEffect(U, j);
  }, Dt.useId = function() {
    return _e.current.useId();
  }, Dt.useImperativeHandle = function(U, j, je) {
    return _e.current.useImperativeHandle(U, j, je);
  }, Dt.useInsertionEffect = function(U, j) {
    return _e.current.useInsertionEffect(U, j);
  }, Dt.useLayoutEffect = function(U, j) {
    return _e.current.useLayoutEffect(U, j);
  }, Dt.useMemo = function(U, j) {
    return _e.current.useMemo(U, j);
  }, Dt.useReducer = function(U, j, je) {
    return _e.current.useReducer(U, j, je);
  }, Dt.useRef = function(U) {
    return _e.current.useRef(U);
  }, Dt.useState = function(U) {
    return _e.current.useState(U);
  }, Dt.useSyncExternalStore = function(U, j, je) {
    return _e.current.useSyncExternalStore(U, j, je);
  }, Dt.useTransition = function() {
    return _e.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var jf = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
jf.exports;
var b0;
function EE() {
  return b0 || (b0 = 1, function(T, n) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = "18.3.1", o = Symbol.for("react.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), x = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), Q = Symbol.iterator, J = "@@iterator";
      function se(_) {
        if (_ === null || typeof _ != "object")
          return null;
        var N = Q && _[Q] || _[J];
        return typeof N == "function" ? N : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ce = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ke = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {}, ce = null;
      function Ke(_) {
        ce = _;
      }
      ue.setExtraStackFrame = function(_) {
        ce = _;
      }, ue.getCurrentStack = null, ue.getStackAddendum = function() {
        var _ = "";
        ce && (_ += ce);
        var N = ue.getCurrentStack;
        return N && (_ += N() || ""), _;
      };
      var xe = !1, ze = !1, Te = !1, de = !1, Ue = !1, ft = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: Ce,
        ReactCurrentOwner: ke
      };
      ft.ReactDebugCurrentFrame = ue, ft.ReactCurrentActQueue = Re;
      function ut(_) {
        {
          for (var N = arguments.length, q = new Array(N > 1 ? N - 1 : 0), K = 1; K < N; K++)
            q[K - 1] = arguments[K];
          H("warn", _, q);
        }
      }
      function _e(_) {
        {
          for (var N = arguments.length, q = new Array(N > 1 ? N - 1 : 0), K = 1; K < N; K++)
            q[K - 1] = arguments[K];
          H("error", _, q);
        }
      }
      function H(_, N, q) {
        {
          var K = ft.ReactDebugCurrentFrame, ve = K.getStackAddendum();
          ve !== "" && (N += "%s", q = q.concat([ve]));
          var Ge = q.map(function(He) {
            return String(He);
          });
          Ge.unshift("Warning: " + N), Function.prototype.apply.call(console[_], console, Ge);
        }
      }
      var ie = {};
      function ee(_, N) {
        {
          var q = _.constructor, K = q && (q.displayName || q.name) || "ReactClass", ve = K + "." + N;
          if (ie[ve])
            return;
          _e("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", N, K), ie[ve] = !0;
        }
      }
      var U = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(_) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(_, N, q) {
          ee(_, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(_, N, q, K) {
          ee(_, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(_, N, q, K) {
          ee(_, "setState");
        }
      }, j = Object.assign, je = {};
      Object.freeze(je);
      function Pe(_, N, q) {
        this.props = _, this.context = N, this.refs = je, this.updater = q || U;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(_, N) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, N, "setState");
      }, Pe.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate");
      };
      {
        var Je = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ve = function(_, N) {
          Object.defineProperty(Pe.prototype, _, {
            get: function() {
              ut("%s(...) is deprecated in plain JavaScript React classes. %s", N[0], N[1]);
            }
          });
        };
        for (var at in Je)
          Je.hasOwnProperty(at) && Ve(at, Je[at]);
      }
      function rt() {
      }
      rt.prototype = Pe.prototype;
      function dt(_, N, q) {
        this.props = _, this.context = N, this.refs = je, this.updater = q || U;
      }
      var Ht = dt.prototype = new rt();
      Ht.constructor = dt, j(Ht, Pe.prototype), Ht.isPureReactComponent = !0;
      function Nn() {
        var _ = {
          current: null
        };
        return Object.seal(_), _;
      }
      var nr = Array.isArray;
      function qt(_) {
        return nr(_);
      }
      function Fn(_) {
        {
          var N = typeof Symbol == "function" && Symbol.toStringTag, q = N && _[Symbol.toStringTag] || _.constructor.name || "Object";
          return q;
        }
      }
      function On(_) {
        try {
          return Un(_), !1;
        } catch {
          return !0;
        }
      }
      function Un(_) {
        return "" + _;
      }
      function jn(_) {
        if (On(_))
          return _e("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(_)), Un(_);
      }
      function Ar(_, N, q) {
        var K = _.displayName;
        if (K)
          return K;
        var ve = N.displayName || N.name || "";
        return ve !== "" ? q + "(" + ve + ")" : q;
      }
      function Ln(_) {
        return _.displayName || "Context";
      }
      function pn(_) {
        if (_ == null)
          return null;
        if (typeof _.tag == "number" && _e("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
          return _.displayName || _.name || null;
        if (typeof _ == "string")
          return _;
        switch (_) {
          case m:
            return "Fragment";
          case h:
            return "Portal";
          case C:
            return "Profiler";
          case y:
            return "StrictMode";
          case S:
            return "Suspense";
          case M:
            return "SuspenseList";
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case x:
              var N = _;
              return Ln(N) + ".Consumer";
            case b:
              var q = _;
              return Ln(q._context) + ".Provider";
            case E:
              return Ar(_, _.render, "ForwardRef");
            case w:
              var K = _.displayName || null;
              return K !== null ? K : pn(_.type) || "Memo";
            case F: {
              var ve = _, Ge = ve._payload, He = ve._init;
              try {
                return pn(He(Ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hr = Object.prototype.hasOwnProperty, kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Bt, pr, ai;
      ai = {};
      function mr(_) {
        if (hr.call(_, "ref")) {
          var N = Object.getOwnPropertyDescriptor(_, "ref").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return _.ref !== void 0;
      }
      function Zn(_) {
        if (hr.call(_, "key")) {
          var N = Object.getOwnPropertyDescriptor(_, "key").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return _.key !== void 0;
      }
      function Di(_, N) {
        var q = function() {
          Bt || (Bt = !0, _e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        q.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: q,
          configurable: !0
        });
      }
      function Xi(_, N) {
        var q = function() {
          pr || (pr = !0, _e("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        q.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: q,
          configurable: !0
        });
      }
      function Ai(_) {
        if (typeof _.ref == "string" && ke.current && _.__self && ke.current.stateNode !== _.__self) {
          var N = pn(ke.current.type);
          ai[N] || (_e('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N, _.ref), ai[N] = !0);
        }
      }
      var G = function(_, N, q, K, ve, Ge, He) {
        var lt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: _,
          key: N,
          ref: q,
          props: He,
          // Record the component responsible for creating this element.
          _owner: Ge
        };
        return lt._store = {}, Object.defineProperty(lt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(lt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.defineProperty(lt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ve
        }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
      };
      function le(_, N, q) {
        var K, ve = {}, Ge = null, He = null, lt = null, gt = null;
        if (N != null) {
          mr(N) && (He = N.ref, Ai(N)), Zn(N) && (jn(N.key), Ge = "" + N.key), lt = N.__self === void 0 ? null : N.__self, gt = N.__source === void 0 ? null : N.__source;
          for (K in N)
            hr.call(N, K) && !kn.hasOwnProperty(K) && (ve[K] = N[K]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          ve.children = q;
        else if (Pt > 1) {
          for (var jt = Array(Pt), bt = 0; bt < Pt; bt++)
            jt[bt] = arguments[bt + 2];
          Object.freeze && Object.freeze(jt), ve.children = jt;
        }
        if (_ && _.defaultProps) {
          var At = _.defaultProps;
          for (K in At)
            ve[K] === void 0 && (ve[K] = At[K]);
        }
        if (Ge || He) {
          var Vt = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          Ge && Di(ve, Vt), He && Xi(ve, Vt);
        }
        return G(_, Ge, He, lt, gt, ke.current, ve);
      }
      function we(_, N) {
        var q = G(_.type, N, _.ref, _._self, _._source, _._owner, _.props);
        return q;
      }
      function Qe(_, N, q) {
        if (_ == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
        var K, ve = j({}, _.props), Ge = _.key, He = _.ref, lt = _._self, gt = _._source, Pt = _._owner;
        if (N != null) {
          mr(N) && (He = N.ref, Pt = ke.current), Zn(N) && (jn(N.key), Ge = "" + N.key);
          var jt;
          _.type && _.type.defaultProps && (jt = _.type.defaultProps);
          for (K in N)
            hr.call(N, K) && !kn.hasOwnProperty(K) && (N[K] === void 0 && jt !== void 0 ? ve[K] = jt[K] : ve[K] = N[K]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          ve.children = q;
        else if (bt > 1) {
          for (var At = Array(bt), Vt = 0; Vt < bt; Vt++)
            At[Vt] = arguments[Vt + 2];
          ve.children = At;
        }
        return G(_.type, Ge, He, lt, gt, Pt, ve);
      }
      function Fe(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === o;
      }
      var It = ".", Rt = ":";
      function Ye(_) {
        var N = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, K = _.replace(N, function(ve) {
          return q[ve];
        });
        return "$" + K;
      }
      var pe = !1, xn = /\/+/g;
      function zt(_) {
        return _.replace(xn, "$&/");
      }
      function ht(_, N) {
        return typeof _ == "object" && _ !== null && _.key != null ? (jn(_.key), Ye("" + _.key)) : N.toString(36);
      }
      function Ji(_, N, q, K, ve) {
        var Ge = typeof _;
        (Ge === "undefined" || Ge === "boolean") && (_ = null);
        var He = !1;
        if (_ === null)
          He = !0;
        else
          switch (Ge) {
            case "string":
            case "number":
              He = !0;
              break;
            case "object":
              switch (_.$$typeof) {
                case o:
                case h:
                  He = !0;
              }
          }
        if (He) {
          var lt = _, gt = ve(lt), Pt = K === "" ? It + ht(lt, 0) : K;
          if (qt(gt)) {
            var jt = "";
            Pt != null && (jt = zt(Pt) + "/"), Ji(gt, N, jt, "", function(ro) {
              return ro;
            });
          } else
            gt != null && (Fe(gt) && (gt.key && (!lt || lt.key !== gt.key) && jn(gt.key), gt = we(
              gt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (gt.key && (!lt || lt.key !== gt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                zt("" + gt.key) + "/"
              ) : "") + Pt
            )), N.push(gt));
          return 1;
        }
        var bt, At, Vt = 0, _n = K === "" ? It : K + Rt;
        if (qt(_))
          for (var ta = 0; ta < _.length; ta++)
            bt = _[ta], At = _n + ht(bt, ta), Vt += Ji(bt, N, q, At, ve);
        else {
          var Jr = se(_);
          if (typeof Jr == "function") {
            var Oi = _;
            Jr === Oi.entries && (pe || ut("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pe = !0);
            for (var ll = Jr.call(Oi), fu, ul = 0; !(fu = ll.next()).done; )
              bt = fu.value, At = _n + ht(bt, ul++), Vt += Ji(bt, N, q, At, ve);
          } else if (Ge === "object") {
            var du = String(_);
            throw new Error("Objects are not valid as a React child (found: " + (du === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : du) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Vt;
      }
      function rr(_, N, q) {
        if (_ == null)
          return _;
        var K = [], ve = 0;
        return Ji(_, K, "", "", function(Ge) {
          return N.call(q, Ge, ve++);
        }), K;
      }
      function Zi(_) {
        var N = 0;
        return rr(_, function() {
          N++;
        }), N;
      }
      function Wa(_, N, q) {
        rr(_, function() {
          N.apply(this, arguments);
        }, q);
      }
      function Et(_) {
        return rr(_, function(N) {
          return N;
        }) || [];
      }
      function _r(_) {
        if (!Fe(_))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return _;
      }
      function Ir(_) {
        var N = {
          $$typeof: x,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: _,
          _currentValue2: _,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        N.Provider = {
          $$typeof: b,
          _context: N
        };
        var q = !1, K = !1, ve = !1;
        {
          var Ge = {
            $$typeof: x,
            _context: N
          };
          Object.defineProperties(Ge, {
            Provider: {
              get: function() {
                return K || (K = !0, _e("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), N.Provider;
              },
              set: function(He) {
                N.Provider = He;
              }
            },
            _currentValue: {
              get: function() {
                return N._currentValue;
              },
              set: function(He) {
                N._currentValue = He;
              }
            },
            _currentValue2: {
              get: function() {
                return N._currentValue2;
              },
              set: function(He) {
                N._currentValue2 = He;
              }
            },
            _threadCount: {
              get: function() {
                return N._threadCount;
              },
              set: function(He) {
                N._threadCount = He;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, _e("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), N.Consumer;
              }
            },
            displayName: {
              get: function() {
                return N.displayName;
              },
              set: function(He) {
                ve || (ut("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", He), ve = !0);
              }
            }
          }), N.Consumer = Ge;
        }
        return N._currentRenderer = null, N._currentRenderer2 = null, N;
      }
      var Er = -1, ir = 0, Kn = 1, gs = 2;
      function si(_) {
        if (_._status === Er) {
          var N = _._result, q = N();
          if (q.then(function(Ge) {
            if (_._status === ir || _._status === Er) {
              var He = _;
              He._status = Kn, He._result = Ge;
            }
          }, function(Ge) {
            if (_._status === ir || _._status === Er) {
              var He = _;
              He._status = gs, He._result = Ge;
            }
          }), _._status === Er) {
            var K = _;
            K._status = ir, K._result = q;
          }
        }
        if (_._status === Kn) {
          var ve = _._result;
          return ve === void 0 && _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ve), "default" in ve || _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ve), ve.default;
        } else
          throw _._result;
      }
      function qa(_) {
        var N = {
          // We use these fields to store the result.
          _status: Er,
          _result: _
        }, q = {
          $$typeof: F,
          _payload: N,
          _init: si
        };
        {
          var K, ve;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Ge) {
                _e("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Ge, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ve;
              },
              set: function(Ge) {
                _e("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ve = Ge, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function _a(_) {
        _ != null && _.$$typeof === w ? _e("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof _ != "function" ? _e("forwardRef requires a render function but was given %s.", _ === null ? "null" : typeof _) : _.length !== 0 && _.length !== 2 && _e("forwardRef render functions accept exactly two parameters: props and ref. %s", _.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), _ != null && (_.defaultProps != null || _.propTypes != null) && _e("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var N = {
          $$typeof: E,
          render: _
        };
        {
          var q;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(K) {
              q = K, !_.name && !_.displayName && (_.displayName = K);
            }
          });
        }
        return N;
      }
      var tl;
      tl = Symbol.for("react.module.reference");
      function O(_) {
        return !!(typeof _ == "string" || typeof _ == "function" || _ === m || _ === C || Ue || _ === y || _ === S || _ === M || de || _ === k || xe || ze || Te || typeof _ == "object" && _ !== null && (_.$$typeof === F || _.$$typeof === w || _.$$typeof === b || _.$$typeof === x || _.$$typeof === E || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        _.$$typeof === tl || _.getModuleId !== void 0));
      }
      function ae(_, N) {
        O(_) || _e("memo: The first argument must be a component. Instead received: %s", _ === null ? "null" : typeof _);
        var q = {
          $$typeof: w,
          type: _,
          compare: N === void 0 ? null : N
        };
        {
          var K;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(ve) {
              K = ve, !_.name && !_.displayName && (_.displayName = ve);
            }
          });
        }
        return q;
      }
      function ge() {
        var _ = he.current;
        return _ === null && _e(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), _;
      }
      function $e(_) {
        var N = ge();
        if (_._context !== void 0) {
          var q = _._context;
          q.Consumer === _ ? _e("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === _ && _e("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return N.useContext(_);
      }
      function wt(_) {
        var N = ge();
        return N.useState(_);
      }
      function Tt(_, N, q) {
        var K = ge();
        return K.useReducer(_, N, q);
      }
      function pt(_) {
        var N = ge();
        return N.useRef(_);
      }
      function st(_, N) {
        var q = ge();
        return q.useEffect(_, N);
      }
      function yn(_, N) {
        var q = ge();
        return q.useInsertionEffect(_, N);
      }
      function rn(_, N) {
        var q = ge();
        return q.useLayoutEffect(_, N);
      }
      function en(_, N) {
        var q = ge();
        return q.useCallback(_, N);
      }
      function Bn(_, N) {
        var q = ge();
        return q.useMemo(_, N);
      }
      function Rr(_, N, q) {
        var K = ge();
        return K.useImperativeHandle(_, N, q);
      }
      function Sn(_, N) {
        {
          var q = ge();
          return q.useDebugValue(_, N);
        }
      }
      function gn() {
        var _ = ge();
        return _.useTransition();
      }
      function li(_) {
        var N = ge();
        return N.useDeferredValue(_);
      }
      function xs() {
        var _ = ge();
        return _.useId();
      }
      function su(_, N, q) {
        var K = ge();
        return K.useSyncExternalStore(_, N, q);
      }
      var Ki = 0, $i, Qr, Gt, Xt, ui, Vn, Jt;
      function oi() {
      }
      oi.__reactDisabledLog = !0;
      function Ia() {
        {
          if (Ki === 0) {
            $i = console.log, Qr = console.info, Gt = console.warn, Xt = console.error, ui = console.group, Vn = console.groupCollapsed, Jt = console.groupEnd;
            var _ = {
              configurable: !0,
              enumerable: !0,
              value: oi,
              writable: !0
            };
            Object.defineProperties(console, {
              info: _,
              log: _,
              warn: _,
              error: _,
              group: _,
              groupCollapsed: _,
              groupEnd: _
            });
          }
          Ki++;
        }
      }
      function vr() {
        {
          if (Ki--, Ki === 0) {
            var _ = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: j({}, _, {
                value: $i
              }),
              info: j({}, _, {
                value: Qr
              }),
              warn: j({}, _, {
                value: Gt
              }),
              error: j({}, _, {
                value: Xt
              }),
              group: j({}, _, {
                value: ui
              }),
              groupCollapsed: j({}, _, {
                value: Vn
              }),
              groupEnd: j({}, _, {
                value: Jt
              })
            });
          }
          Ki < 0 && _e("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Qa = ft.ReactCurrentDispatcher, nl;
      function Ss(_, N, q) {
        {
          if (nl === void 0)
            try {
              throw Error();
            } catch (ve) {
              var K = ve.stack.trim().match(/\n( *(at )?)/);
              nl = K && K[1] || "";
            }
          return `
` + nl + _;
        }
      }
      var ea = !1, Ga;
      {
        var Nr = typeof WeakMap == "function" ? WeakMap : Map;
        Ga = new Nr();
      }
      function rl(_, N) {
        if (!_ || ea)
          return "";
        {
          var q = Ga.get(_);
          if (q !== void 0)
            return q;
        }
        var K;
        ea = !0;
        var ve = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ge;
        Ge = Qa.current, Qa.current = null, Ia();
        try {
          if (N) {
            var He = function() {
              throw Error();
            };
            if (Object.defineProperty(He.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(He, []);
              } catch (_n) {
                K = _n;
              }
              Reflect.construct(_, [], He);
            } else {
              try {
                He.call();
              } catch (_n) {
                K = _n;
              }
              _.call(He.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_n) {
              K = _n;
            }
            _();
          }
        } catch (_n) {
          if (_n && K && typeof _n.stack == "string") {
            for (var lt = _n.stack.split(`
`), gt = K.stack.split(`
`), Pt = lt.length - 1, jt = gt.length - 1; Pt >= 1 && jt >= 0 && lt[Pt] !== gt[jt]; )
              jt--;
            for (; Pt >= 1 && jt >= 0; Pt--, jt--)
              if (lt[Pt] !== gt[jt]) {
                if (Pt !== 1 || jt !== 1)
                  do
                    if (Pt--, jt--, jt < 0 || lt[Pt] !== gt[jt]) {
                      var bt = `
` + lt[Pt].replace(" at new ", " at ");
                      return _.displayName && bt.includes("<anonymous>") && (bt = bt.replace("<anonymous>", _.displayName)), typeof _ == "function" && Ga.set(_, bt), bt;
                    }
                  while (Pt >= 1 && jt >= 0);
                break;
              }
          }
        } finally {
          ea = !1, Qa.current = Ge, vr(), Error.prepareStackTrace = ve;
        }
        var At = _ ? _.displayName || _.name : "", Vt = At ? Ss(At) : "";
        return typeof _ == "function" && Ga.set(_, Vt), Vt;
      }
      function Ku(_, N, q) {
        return rl(_, !1);
      }
      function $u(_) {
        var N = _.prototype;
        return !!(N && N.isReactComponent);
      }
      function Ea(_, N, q) {
        if (_ == null)
          return "";
        if (typeof _ == "function")
          return rl(_, $u(_));
        if (typeof _ == "string")
          return Ss(_);
        switch (_) {
          case S:
            return Ss("Suspense");
          case M:
            return Ss("SuspenseList");
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case E:
              return Ku(_.render);
            case w:
              return Ea(_.type, N, q);
            case F: {
              var K = _, ve = K._payload, Ge = K._init;
              try {
                return Ea(Ge(ve), N, q);
              } catch {
              }
            }
          }
        return "";
      }
      var Ra = {}, Ni = ft.ReactDebugCurrentFrame;
      function Ta(_) {
        if (_) {
          var N = _._owner, q = Ea(_.type, _._source, N ? N.type : null);
          Ni.setExtraStackFrame(q);
        } else
          Ni.setExtraStackFrame(null);
      }
      function Gr(_, N, q, K, ve) {
        {
          var Ge = Function.call.bind(hr);
          for (var He in _)
            if (Ge(_, He)) {
              var lt = void 0;
              try {
                if (typeof _[He] != "function") {
                  var gt = Error((K || "React class") + ": " + q + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw gt.name = "Invariant Violation", gt;
                }
                lt = _[He](N, He, K, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                lt = Pt;
              }
              lt && !(lt instanceof Error) && (Ta(ve), _e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", q, He, typeof lt), Ta(null)), lt instanceof Error && !(lt.message in Ra) && (Ra[lt.message] = !0, Ta(ve), _e("Failed %s type: %s", q, lt.message), Ta(null));
            }
        }
      }
      function ci(_) {
        if (_) {
          var N = _._owner, q = Ea(_.type, _._source, N ? N.type : null);
          Ke(q);
        } else
          Ke(null);
      }
      var Yn;
      Yn = !1;
      function il() {
        if (ke.current) {
          var _ = pn(ke.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
      function _s(_) {
        if (_ !== void 0) {
          var N = _.fileName.replace(/^.*[\\\/]/, ""), q = _.lineNumber;
          return `

Check your code at ` + N + ":" + q + ".";
        }
        return "";
      }
      function gc(_) {
        return _ != null ? _s(_.__source) : "";
      }
      var al = {};
      function Ft(_) {
        var N = il();
        if (!N) {
          var q = typeof _ == "string" ? _ : _.displayName || _.name;
          q && (N = `

Check the top-level render call using <` + q + ">.");
        }
        return N;
      }
      function lu(_, N) {
        if (!(!_._store || _._store.validated || _.key != null)) {
          _._store.validated = !0;
          var q = Ft(N);
          if (!al[q]) {
            al[q] = !0;
            var K = "";
            _ && _._owner && _._owner !== ke.current && (K = " It was passed a child from " + pn(_._owner.type) + "."), ci(_), _e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, K), ci(null);
          }
        }
      }
      function Fi(_, N) {
        if (typeof _ == "object") {
          if (qt(_))
            for (var q = 0; q < _.length; q++) {
              var K = _[q];
              Fe(K) && lu(K, N);
            }
          else if (Fe(_))
            _._store && (_._store.validated = !0);
          else if (_) {
            var ve = se(_);
            if (typeof ve == "function" && ve !== _.entries)
              for (var Ge = ve.call(_), He; !(He = Ge.next()).done; )
                Fe(He.value) && lu(He.value, N);
          }
        }
      }
      function uu(_) {
        {
          var N = _.type;
          if (N == null || typeof N == "string")
            return;
          var q;
          if (typeof N == "function")
            q = N.propTypes;
          else if (typeof N == "object" && (N.$$typeof === E || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          N.$$typeof === w))
            q = N.propTypes;
          else
            return;
          if (q) {
            var K = pn(N);
            Gr(q, _.props, "prop", K, _);
          } else if (N.PropTypes !== void 0 && !Yn) {
            Yn = !0;
            var ve = pn(N);
            _e("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
          }
          typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && _e("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function xc(_) {
        {
          for (var N = Object.keys(_.props), q = 0; q < N.length; q++) {
            var K = N[q];
            if (K !== "children" && K !== "key") {
              ci(_), _e("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), ci(null);
              break;
            }
          }
          _.ref !== null && (ci(_), _e("Invalid attribute `ref` supplied to `React.Fragment`."), ci(null));
        }
      }
      function eo(_, N, q) {
        var K = O(_);
        if (!K) {
          var ve = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = gc(N);
          Ge ? ve += Ge : ve += il();
          var He;
          _ === null ? He = "null" : qt(_) ? He = "array" : _ !== void 0 && _.$$typeof === o ? (He = "<" + (pn(_.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : He = typeof _, _e("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", He, ve);
        }
        var lt = le.apply(this, arguments);
        if (lt == null)
          return lt;
        if (K)
          for (var gt = 2; gt < arguments.length; gt++)
            Fi(arguments[gt], _);
        return _ === m ? xc(lt) : uu(lt), lt;
      }
      var on = !1;
      function ou(_) {
        var N = eo.bind(null, _);
        return N.type = _, on || (on = !0, ut("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(N, "type", {
          enumerable: !1,
          get: function() {
            return ut("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: _
            }), _;
          }
        }), N;
      }
      function Sc(_, N, q) {
        for (var K = Qe.apply(this, arguments), ve = 2; ve < arguments.length; ve++)
          Fi(arguments[ve], K.type);
        return uu(K), K;
      }
      function cu(_, N) {
        var q = Ce.transition;
        Ce.transition = {};
        var K = Ce.transition;
        Ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          _();
        } finally {
          if (Ce.transition = q, q === null && K._updatedFibers) {
            var ve = K._updatedFibers.size;
            ve > 10 && ut("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), K._updatedFibers.clear();
          }
        }
      }
      var to = !1, ba = null;
      function fi(_) {
        if (ba === null)
          try {
            var N = ("require" + Math.random()).slice(0, 7), q = T && T[N];
            ba = q.call(T, "timers").setImmediate;
          } catch {
            ba = function(ve) {
              to === !1 && (to = !0, typeof MessageChannel > "u" && _e("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ge = new MessageChannel();
              Ge.port1.onmessage = ve, Ge.port2.postMessage(void 0);
            };
          }
        return ba(_);
      }
      var Xa = 0, no = !1;
      function Xr(_) {
        {
          var N = Xa;
          Xa++, Re.current === null && (Re.current = []);
          var q = Re.isBatchingLegacy, K;
          try {
            if (Re.isBatchingLegacy = !0, K = _(), !q && Re.didScheduleLegacyUpdate) {
              var ve = Re.current;
              ve !== null && (Re.didScheduleLegacyUpdate = !1, Rs(ve));
            }
          } catch (At) {
            throw Fr(N), At;
          } finally {
            Re.isBatchingLegacy = q;
          }
          if (K !== null && typeof K == "object" && typeof K.then == "function") {
            var Ge = K, He = !1, lt = {
              then: function(At, Vt) {
                He = !0, Ge.then(function(_n) {
                  Fr(N), Xa === 0 ? Ja(_n, At, Vt) : At(_n);
                }, function(_n) {
                  Fr(N), Vt(_n);
                });
              }
            };
            return !no && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              He || (no = !0, _e("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), lt;
          } else {
            var gt = K;
            if (Fr(N), Xa === 0) {
              var Pt = Re.current;
              Pt !== null && (Rs(Pt), Re.current = null);
              var jt = {
                then: function(At, Vt) {
                  Re.current === null ? (Re.current = [], Ja(gt, At, Vt)) : At(gt);
                }
              };
              return jt;
            } else {
              var bt = {
                then: function(At, Vt) {
                  At(gt);
                }
              };
              return bt;
            }
          }
        }
      }
      function Fr(_) {
        _ !== Xa - 1 && _e("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Xa = _;
      }
      function Ja(_, N, q) {
        {
          var K = Re.current;
          if (K !== null)
            try {
              Rs(K), fi(function() {
                K.length === 0 ? (Re.current = null, N(_)) : Ja(_, N, q);
              });
            } catch (ve) {
              q(ve);
            }
          else
            N(_);
        }
      }
      var Es = !1;
      function Rs(_) {
        if (!Es) {
          Es = !0;
          var N = 0;
          try {
            for (; N < _.length; N++) {
              var q = _[N];
              do
                q = q(!0);
              while (q !== null);
            }
            _.length = 0;
          } catch (K) {
            throw _ = _.slice(N + 1), K;
          } finally {
            Es = !1;
          }
        }
      }
      var _c = eo, di = Sc, Ec = ou, sl = {
        map: rr,
        forEach: Wa,
        count: Zi,
        toArray: Et,
        only: _r
      };
      n.Children = sl, n.Component = Pe, n.Fragment = m, n.Profiler = C, n.PureComponent = dt, n.StrictMode = y, n.Suspense = S, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ft, n.act = Xr, n.cloneElement = di, n.createContext = Ir, n.createElement = _c, n.createFactory = Ec, n.createRef = Nn, n.forwardRef = _a, n.isValidElement = Fe, n.lazy = qa, n.memo = ae, n.startTransition = cu, n.unstable_act = Xr, n.useCallback = en, n.useContext = $e, n.useDebugValue = Sn, n.useDeferredValue = li, n.useEffect = st, n.useId = xs, n.useImperativeHandle = Rr, n.useInsertionEffect = yn, n.useLayoutEffect = rn, n.useMemo = Bn, n.useReducer = Tt, n.useRef = pt, n.useState = wt, n.useSyncExternalStore = su, n.useTransition = gn, n.version = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(jf, jf.exports)), jf.exports;
}
process.env.NODE_ENV === "production" ? yv.exports = _E() : yv.exports = EE();
var tt = yv.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C0;
function RE() {
  if (C0)
    return Ff;
  C0 = 1;
  var T = tt, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, h = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(C, b, x) {
    var E, S = {}, M = null, w = null;
    x !== void 0 && (M = "" + x), b.key !== void 0 && (M = "" + b.key), b.ref !== void 0 && (w = b.ref);
    for (E in b)
      o.call(b, E) && !m.hasOwnProperty(E) && (S[E] = b[E]);
    if (C && C.defaultProps)
      for (E in b = C.defaultProps, b)
        S[E] === void 0 && (S[E] = b[E]);
    return { $$typeof: n, type: C, key: M, ref: w, props: S, _owner: h.current };
  }
  return Ff.Fragment = s, Ff.jsx = y, Ff.jsxs = y, Ff;
}
var Of = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M0;
function TE() {
  return M0 || (M0 = 1, process.env.NODE_ENV !== "production" && function() {
    var T = tt, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), C = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), F = Symbol.iterator, k = "@@iterator";
    function Q(O) {
      if (O === null || typeof O != "object")
        return null;
      var ae = F && O[F] || O[k];
      return typeof ae == "function" ? ae : null;
    }
    var J = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function se(O) {
      {
        for (var ae = arguments.length, ge = new Array(ae > 1 ? ae - 1 : 0), $e = 1; $e < ae; $e++)
          ge[$e - 1] = arguments[$e];
        he("error", O, ge);
      }
    }
    function he(O, ae, ge) {
      {
        var $e = J.ReactDebugCurrentFrame, wt = $e.getStackAddendum();
        wt !== "" && (ae += "%s", ge = ge.concat([wt]));
        var Tt = ge.map(function(pt) {
          return String(pt);
        });
        Tt.unshift("Warning: " + ae), Function.prototype.apply.call(console[O], console, Tt);
      }
    }
    var Ce = !1, Re = !1, ke = !1, ue = !1, ce = !1, Ke;
    Ke = Symbol.for("react.module.reference");
    function xe(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === o || O === m || ce || O === h || O === x || O === E || ue || O === w || Ce || Re || ke || typeof O == "object" && O !== null && (O.$$typeof === M || O.$$typeof === S || O.$$typeof === y || O.$$typeof === C || O.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === Ke || O.getModuleId !== void 0));
    }
    function ze(O, ae, ge) {
      var $e = O.displayName;
      if ($e)
        return $e;
      var wt = ae.displayName || ae.name || "";
      return wt !== "" ? ge + "(" + wt + ")" : ge;
    }
    function Te(O) {
      return O.displayName || "Context";
    }
    function de(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case m:
          return "Profiler";
        case h:
          return "StrictMode";
        case x:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case C:
            var ae = O;
            return Te(ae) + ".Consumer";
          case y:
            var ge = O;
            return Te(ge._context) + ".Provider";
          case b:
            return ze(O, O.render, "ForwardRef");
          case S:
            var $e = O.displayName || null;
            return $e !== null ? $e : de(O.type) || "Memo";
          case M: {
            var wt = O, Tt = wt._payload, pt = wt._init;
            try {
              return de(pt(Tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ue = Object.assign, ft = 0, ut, _e, H, ie, ee, U, j;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Pe() {
      {
        if (ft === 0) {
          ut = console.log, _e = console.info, H = console.warn, ie = console.error, ee = console.group, U = console.groupCollapsed, j = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        ft++;
      }
    }
    function Je() {
      {
        if (ft--, ft === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ue({}, O, {
              value: ut
            }),
            info: Ue({}, O, {
              value: _e
            }),
            warn: Ue({}, O, {
              value: H
            }),
            error: Ue({}, O, {
              value: ie
            }),
            group: Ue({}, O, {
              value: ee
            }),
            groupCollapsed: Ue({}, O, {
              value: U
            }),
            groupEnd: Ue({}, O, {
              value: j
            })
          });
        }
        ft < 0 && se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ve = J.ReactCurrentDispatcher, at;
    function rt(O, ae, ge) {
      {
        if (at === void 0)
          try {
            throw Error();
          } catch (wt) {
            var $e = wt.stack.trim().match(/\n( *(at )?)/);
            at = $e && $e[1] || "";
          }
        return `
` + at + O;
      }
    }
    var dt = !1, Ht;
    {
      var Nn = typeof WeakMap == "function" ? WeakMap : Map;
      Ht = new Nn();
    }
    function nr(O, ae) {
      if (!O || dt)
        return "";
      {
        var ge = Ht.get(O);
        if (ge !== void 0)
          return ge;
      }
      var $e;
      dt = !0;
      var wt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Tt;
      Tt = Ve.current, Ve.current = null, Pe();
      try {
        if (ae) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (gn) {
              $e = gn;
            }
            Reflect.construct(O, [], pt);
          } else {
            try {
              pt.call();
            } catch (gn) {
              $e = gn;
            }
            O.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gn) {
            $e = gn;
          }
          O();
        }
      } catch (gn) {
        if (gn && $e && typeof gn.stack == "string") {
          for (var st = gn.stack.split(`
`), yn = $e.stack.split(`
`), rn = st.length - 1, en = yn.length - 1; rn >= 1 && en >= 0 && st[rn] !== yn[en]; )
            en--;
          for (; rn >= 1 && en >= 0; rn--, en--)
            if (st[rn] !== yn[en]) {
              if (rn !== 1 || en !== 1)
                do
                  if (rn--, en--, en < 0 || st[rn] !== yn[en]) {
                    var Bn = `
` + st[rn].replace(" at new ", " at ");
                    return O.displayName && Bn.includes("<anonymous>") && (Bn = Bn.replace("<anonymous>", O.displayName)), typeof O == "function" && Ht.set(O, Bn), Bn;
                  }
                while (rn >= 1 && en >= 0);
              break;
            }
        }
      } finally {
        dt = !1, Ve.current = Tt, Je(), Error.prepareStackTrace = wt;
      }
      var Rr = O ? O.displayName || O.name : "", Sn = Rr ? rt(Rr) : "";
      return typeof O == "function" && Ht.set(O, Sn), Sn;
    }
    function qt(O, ae, ge) {
      return nr(O, !1);
    }
    function Fn(O) {
      var ae = O.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function On(O, ae, ge) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return nr(O, Fn(O));
      if (typeof O == "string")
        return rt(O);
      switch (O) {
        case x:
          return rt("Suspense");
        case E:
          return rt("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case b:
            return qt(O.render);
          case S:
            return On(O.type, ae, ge);
          case M: {
            var $e = O, wt = $e._payload, Tt = $e._init;
            try {
              return On(Tt(wt), ae, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, jn = {}, Ar = J.ReactDebugCurrentFrame;
    function Ln(O) {
      if (O) {
        var ae = O._owner, ge = On(O.type, O._source, ae ? ae.type : null);
        Ar.setExtraStackFrame(ge);
      } else
        Ar.setExtraStackFrame(null);
    }
    function pn(O, ae, ge, $e, wt) {
      {
        var Tt = Function.call.bind(Un);
        for (var pt in O)
          if (Tt(O, pt)) {
            var st = void 0;
            try {
              if (typeof O[pt] != "function") {
                var yn = Error(($e || "React class") + ": " + ge + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yn.name = "Invariant Violation", yn;
              }
              st = O[pt](ae, pt, $e, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rn) {
              st = rn;
            }
            st && !(st instanceof Error) && (Ln(wt), se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $e || "React class", ge, pt, typeof st), Ln(null)), st instanceof Error && !(st.message in jn) && (jn[st.message] = !0, Ln(wt), se("Failed %s type: %s", ge, st.message), Ln(null));
          }
      }
    }
    var hr = Array.isArray;
    function kn(O) {
      return hr(O);
    }
    function Bt(O) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, ge = ae && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return ge;
      }
    }
    function pr(O) {
      try {
        return ai(O), !1;
      } catch {
        return !0;
      }
    }
    function ai(O) {
      return "" + O;
    }
    function mr(O) {
      if (pr(O))
        return se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bt(O)), ai(O);
    }
    var Zn = J.ReactCurrentOwner, Di = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xi, Ai, G;
    G = {};
    function le(O) {
      if (Un.call(O, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function we(O) {
      if (Un.call(O, "key")) {
        var ae = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Qe(O, ae) {
      if (typeof O.ref == "string" && Zn.current && ae && Zn.current.stateNode !== ae) {
        var ge = de(Zn.current.type);
        G[ge] || (se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(Zn.current.type), O.ref), G[ge] = !0);
      }
    }
    function Fe(O, ae) {
      {
        var ge = function() {
          Xi || (Xi = !0, se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ge.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function It(O, ae) {
      {
        var ge = function() {
          Ai || (Ai = !0, se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ge.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var Rt = function(O, ae, ge, $e, wt, Tt, pt) {
      var st = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: O,
        key: ae,
        ref: ge,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: Tt
      };
      return st._store = {}, Object.defineProperty(st._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(st, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: wt
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function Ye(O, ae, ge, $e, wt) {
      {
        var Tt, pt = {}, st = null, yn = null;
        ge !== void 0 && (mr(ge), st = "" + ge), we(ae) && (mr(ae.key), st = "" + ae.key), le(ae) && (yn = ae.ref, Qe(ae, wt));
        for (Tt in ae)
          Un.call(ae, Tt) && !Di.hasOwnProperty(Tt) && (pt[Tt] = ae[Tt]);
        if (O && O.defaultProps) {
          var rn = O.defaultProps;
          for (Tt in rn)
            pt[Tt] === void 0 && (pt[Tt] = rn[Tt]);
        }
        if (st || yn) {
          var en = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          st && Fe(pt, en), yn && It(pt, en);
        }
        return Rt(O, st, yn, wt, $e, Zn.current, pt);
      }
    }
    var pe = J.ReactCurrentOwner, xn = J.ReactDebugCurrentFrame;
    function zt(O) {
      if (O) {
        var ae = O._owner, ge = On(O.type, O._source, ae ? ae.type : null);
        xn.setExtraStackFrame(ge);
      } else
        xn.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function Ji(O) {
      return typeof O == "object" && O !== null && O.$$typeof === n;
    }
    function rr() {
      {
        if (pe.current) {
          var O = de(pe.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Zi(O) {
      return "";
    }
    var Wa = {};
    function Et(O) {
      {
        var ae = rr();
        if (!ae) {
          var ge = typeof O == "string" ? O : O.displayName || O.name;
          ge && (ae = `

Check the top-level render call using <` + ge + ">.");
        }
        return ae;
      }
    }
    function _r(O, ae) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var ge = Et(ae);
        if (Wa[ge])
          return;
        Wa[ge] = !0;
        var $e = "";
        O && O._owner && O._owner !== pe.current && ($e = " It was passed a child from " + de(O._owner.type) + "."), zt(O), se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, $e), zt(null);
      }
    }
    function Ir(O, ae) {
      {
        if (typeof O != "object")
          return;
        if (kn(O))
          for (var ge = 0; ge < O.length; ge++) {
            var $e = O[ge];
            Ji($e) && _r($e, ae);
          }
        else if (Ji(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var wt = Q(O);
          if (typeof wt == "function" && wt !== O.entries)
            for (var Tt = wt.call(O), pt; !(pt = Tt.next()).done; )
              Ji(pt.value) && _r(pt.value, ae);
        }
      }
    }
    function Er(O) {
      {
        var ae = O.type;
        if (ae == null || typeof ae == "string")
          return;
        var ge;
        if (typeof ae == "function")
          ge = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === S))
          ge = ae.propTypes;
        else
          return;
        if (ge) {
          var $e = de(ae);
          pn(ge, O.props, "prop", $e, O);
        } else if (ae.PropTypes !== void 0 && !ht) {
          ht = !0;
          var wt = de(ae);
          se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", wt || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(O) {
      {
        for (var ae = Object.keys(O.props), ge = 0; ge < ae.length; ge++) {
          var $e = ae[ge];
          if ($e !== "children" && $e !== "key") {
            zt(O), se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $e), zt(null);
            break;
          }
        }
        O.ref !== null && (zt(O), se("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var Kn = {};
    function gs(O, ae, ge, $e, wt, Tt) {
      {
        var pt = xe(O);
        if (!pt) {
          var st = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yn = Zi();
          yn ? st += yn : st += rr();
          var rn;
          O === null ? rn = "null" : kn(O) ? rn = "array" : O !== void 0 && O.$$typeof === n ? (rn = "<" + (de(O.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : rn = typeof O, se("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rn, st);
        }
        var en = Ye(O, ae, ge, wt, Tt);
        if (en == null)
          return en;
        if (pt) {
          var Bn = ae.children;
          if (Bn !== void 0)
            if ($e)
              if (kn(Bn)) {
                for (var Rr = 0; Rr < Bn.length; Rr++)
                  Ir(Bn[Rr], O);
                Object.freeze && Object.freeze(Bn);
              } else
                se("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ir(Bn, O);
        }
        if (Un.call(ae, "key")) {
          var Sn = de(O), gn = Object.keys(ae).filter(function(su) {
            return su !== "key";
          }), li = gn.length > 0 ? "{key: someKey, " + gn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Kn[Sn + li]) {
            var xs = gn.length > 0 ? "{" + gn.join(": ..., ") + ": ...}" : "{}";
            se(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, li, Sn, xs, Sn), Kn[Sn + li] = !0;
          }
        }
        return O === o ? ir(en) : Er(en), en;
      }
    }
    function si(O, ae, ge) {
      return gs(O, ae, ge, !0);
    }
    function qa(O, ae, ge) {
      return gs(O, ae, ge, !1);
    }
    var _a = qa, tl = si;
    Of.Fragment = o, Of.jsx = _a, Of.jsxs = tl;
  }()), Of;
}
process.env.NODE_ENV === "production" ? vv.exports = RE() : vv.exports = TE();
var gv = vv.exports;
const VR = tt.forwardRef(function(n, s) {
  const o = tt.useRef();
  return tt.useImperativeHandle(s, () => o.current.parent), /* @__PURE__ */ gv.jsx("object3D", { visible: !1, ref: o, ...n });
});
function xv() {
  return xv = Object.assign ? Object.assign.bind() : function(T) {
    for (var n = 1; n < arguments.length; n++) {
      var s = arguments[n];
      for (var o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (T[o] = s[o]);
    }
    return T;
  }, xv.apply(this, arguments);
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Sx = "163", z0 = 0, w0 = 1, D0 = 100, A0 = 204, N0 = 205, F0 = 3, _x = 300, O0 = 1e3, bh = 1001, U0 = 1002, L0 = 1003, Hh = 1006, bE = 1008, Ex = 1009, CE = 1014, Rx = 1015, ME = 1016, zE = 1020, Tx = 1023, Qm = 1026, k0 = 1027, bx = "", iu = "srgb", zv = "srgb-linear", wE = "display-p3", Cx = "display-p3-linear", Sv = "linear", B0 = "srgb", H0 = "rec709", P0 = "p3", ac = 7680, j0 = 519, DE = 515, V0 = 35044, Ch = 2e3, Y0 = 2001;
class Wf {
  addEventListener(n, s) {
    this._listeners === void 0 && (this._listeners = {});
    const o = this._listeners;
    o[n] === void 0 && (o[n] = []), o[n].indexOf(s) === -1 && o[n].push(s);
  }
  hasEventListener(n, s) {
    if (this._listeners === void 0)
      return !1;
    const o = this._listeners;
    return o[n] !== void 0 && o[n].indexOf(s) !== -1;
  }
  removeEventListener(n, s) {
    if (this._listeners === void 0)
      return;
    const h = this._listeners[n];
    if (h !== void 0) {
      const m = h.indexOf(s);
      m !== -1 && h.splice(m, 1);
    }
  }
  dispatchEvent(n) {
    if (this._listeners === void 0)
      return;
    const o = this._listeners[n.type];
    if (o !== void 0) {
      n.target = this;
      const h = o.slice(0);
      for (let m = 0, y = h.length; m < y; m++)
        h[m].call(this, n);
      n.target = null;
    }
  }
}
const Wr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function qf() {
  const T = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0, o = Math.random() * 4294967295 | 0;
  return (Wr[T & 255] + Wr[T >> 8 & 255] + Wr[T >> 16 & 255] + Wr[T >> 24 & 255] + "-" + Wr[n & 255] + Wr[n >> 8 & 255] + "-" + Wr[n >> 16 & 15 | 64] + Wr[n >> 24 & 255] + "-" + Wr[s & 63 | 128] + Wr[s >> 8 & 255] + "-" + Wr[s >> 16 & 255] + Wr[s >> 24 & 255] + Wr[o & 255] + Wr[o >> 8 & 255] + Wr[o >> 16 & 255] + Wr[o >> 24 & 255]).toLowerCase();
}
function wi(T, n, s) {
  return Math.max(n, Math.min(s, T));
}
function AE(T, n) {
  return (T % n + n) % n;
}
function Gm(T, n, s) {
  return (1 - s) * T + s * n;
}
function Uf(T, n) {
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
function Mi(T, n) {
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
class ms {
  constructor(n = 0, s = 0) {
    ms.prototype.isVector2 = !0, this.x = n, this.y = s;
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
  set(n, s) {
    return this.x = n, this.y = s, this;
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
  setComponent(n, s) {
    switch (n) {
      case 0:
        this.x = s;
        break;
      case 1:
        this.y = s;
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
  addVectors(n, s) {
    return this.x = n.x + s.x, this.y = n.y + s.y, this;
  }
  addScaledVector(n, s) {
    return this.x += n.x * s, this.y += n.y * s, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this;
  }
  subVectors(n, s) {
    return this.x = n.x - s.x, this.y = n.y - s.y, this;
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
    const s = this.x, o = this.y, h = n.elements;
    return this.x = h[0] * s + h[3] * o + h[6], this.y = h[1] * s + h[4] * o + h[7], this;
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this;
  }
  clamp(n, s) {
    return this.x = Math.max(n.x, Math.min(s.x, this.x)), this.y = Math.max(n.y, Math.min(s.y, this.y)), this;
  }
  clampScalar(n, s) {
    return this.x = Math.max(n, Math.min(s, this.x)), this.y = Math.max(n, Math.min(s, this.y)), this;
  }
  clampLength(n, s) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(Math.max(n, Math.min(s, o)));
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
    const s = Math.sqrt(this.lengthSq() * n.lengthSq());
    if (s === 0)
      return Math.PI / 2;
    const o = this.dot(n) / s;
    return Math.acos(wi(o, -1, 1));
  }
  distanceTo(n) {
    return Math.sqrt(this.distanceToSquared(n));
  }
  distanceToSquared(n) {
    const s = this.x - n.x, o = this.y - n.y;
    return s * s + o * o;
  }
  manhattanDistanceTo(n) {
    return Math.abs(this.x - n.x) + Math.abs(this.y - n.y);
  }
  setLength(n) {
    return this.normalize().multiplyScalar(n);
  }
  lerp(n, s) {
    return this.x += (n.x - this.x) * s, this.y += (n.y - this.y) * s, this;
  }
  lerpVectors(n, s, o) {
    return this.x = n.x + (s.x - n.x) * o, this.y = n.y + (s.y - n.y) * o, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y;
  }
  fromArray(n, s = 0) {
    return this.x = n[s], this.y = n[s + 1], this;
  }
  toArray(n = [], s = 0) {
    return n[s] = this.x, n[s + 1] = this.y, n;
  }
  fromBufferAttribute(n, s) {
    return this.x = n.getX(s), this.y = n.getY(s), this;
  }
  rotateAround(n, s) {
    const o = Math.cos(s), h = Math.sin(s), m = this.x - n.x, y = this.y - n.y;
    return this.x = m * o - y * h + n.x, this.y = m * h + y * o + n.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class au {
  constructor(n, s, o, h, m, y, C, b, x) {
    au.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], n !== void 0 && this.set(n, s, o, h, m, y, C, b, x);
  }
  set(n, s, o, h, m, y, C, b, x) {
    const E = this.elements;
    return E[0] = n, E[1] = h, E[2] = C, E[3] = s, E[4] = m, E[5] = b, E[6] = o, E[7] = y, E[8] = x, this;
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
    const s = this.elements, o = n.elements;
    return s[0] = o[0], s[1] = o[1], s[2] = o[2], s[3] = o[3], s[4] = o[4], s[5] = o[5], s[6] = o[6], s[7] = o[7], s[8] = o[8], this;
  }
  extractBasis(n, s, o) {
    return n.setFromMatrix3Column(this, 0), s.setFromMatrix3Column(this, 1), o.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(n) {
    const s = n.elements;
    return this.set(
      s[0],
      s[4],
      s[8],
      s[1],
      s[5],
      s[9],
      s[2],
      s[6],
      s[10]
    ), this;
  }
  multiply(n) {
    return this.multiplyMatrices(this, n);
  }
  premultiply(n) {
    return this.multiplyMatrices(n, this);
  }
  multiplyMatrices(n, s) {
    const o = n.elements, h = s.elements, m = this.elements, y = o[0], C = o[3], b = o[6], x = o[1], E = o[4], S = o[7], M = o[2], w = o[5], F = o[8], k = h[0], Q = h[3], J = h[6], se = h[1], he = h[4], Ce = h[7], Re = h[2], ke = h[5], ue = h[8];
    return m[0] = y * k + C * se + b * Re, m[3] = y * Q + C * he + b * ke, m[6] = y * J + C * Ce + b * ue, m[1] = x * k + E * se + S * Re, m[4] = x * Q + E * he + S * ke, m[7] = x * J + E * Ce + S * ue, m[2] = M * k + w * se + F * Re, m[5] = M * Q + w * he + F * ke, m[8] = M * J + w * Ce + F * ue, this;
  }
  multiplyScalar(n) {
    const s = this.elements;
    return s[0] *= n, s[3] *= n, s[6] *= n, s[1] *= n, s[4] *= n, s[7] *= n, s[2] *= n, s[5] *= n, s[8] *= n, this;
  }
  determinant() {
    const n = this.elements, s = n[0], o = n[1], h = n[2], m = n[3], y = n[4], C = n[5], b = n[6], x = n[7], E = n[8];
    return s * y * E - s * C * x - o * m * E + o * C * b + h * m * x - h * y * b;
  }
  invert() {
    const n = this.elements, s = n[0], o = n[1], h = n[2], m = n[3], y = n[4], C = n[5], b = n[6], x = n[7], E = n[8], S = E * y - C * x, M = C * b - E * m, w = x * m - y * b, F = s * S + o * M + h * w;
    if (F === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const k = 1 / F;
    return n[0] = S * k, n[1] = (h * x - E * o) * k, n[2] = (C * o - h * y) * k, n[3] = M * k, n[4] = (E * s - h * b) * k, n[5] = (h * m - C * s) * k, n[6] = w * k, n[7] = (o * b - x * s) * k, n[8] = (y * s - o * m) * k, this;
  }
  transpose() {
    let n;
    const s = this.elements;
    return n = s[1], s[1] = s[3], s[3] = n, n = s[2], s[2] = s[6], s[6] = n, n = s[5], s[5] = s[7], s[7] = n, this;
  }
  getNormalMatrix(n) {
    return this.setFromMatrix4(n).invert().transpose();
  }
  transposeIntoArray(n) {
    const s = this.elements;
    return n[0] = s[0], n[1] = s[3], n[2] = s[6], n[3] = s[1], n[4] = s[4], n[5] = s[7], n[6] = s[2], n[7] = s[5], n[8] = s[8], this;
  }
  setUvTransform(n, s, o, h, m, y, C) {
    const b = Math.cos(m), x = Math.sin(m);
    return this.set(
      o * b,
      o * x,
      -o * (b * y + x * C) + y + n,
      -h * x,
      h * b,
      -h * (-x * y + b * C) + C + s,
      0,
      0,
      1
    ), this;
  }
  //
  scale(n, s) {
    return this.premultiply(Xm.makeScale(n, s)), this;
  }
  rotate(n) {
    return this.premultiply(Xm.makeRotation(-n)), this;
  }
  translate(n, s) {
    return this.premultiply(Xm.makeTranslation(n, s)), this;
  }
  // for 2D Transforms
  makeTranslation(n, s) {
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
      s,
      0,
      0,
      1
    ), this;
  }
  makeRotation(n) {
    const s = Math.cos(n), o = Math.sin(n);
    return this.set(
      s,
      -o,
      0,
      o,
      s,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(n, s) {
    return this.set(
      n,
      0,
      0,
      0,
      s,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(n) {
    const s = this.elements, o = n.elements;
    for (let h = 0; h < 9; h++)
      if (s[h] !== o[h])
        return !1;
    return !0;
  }
  fromArray(n, s = 0) {
    for (let o = 0; o < 9; o++)
      this.elements[o] = n[o + s];
    return this;
  }
  toArray(n = [], s = 0) {
    const o = this.elements;
    return n[s] = o[0], n[s + 1] = o[1], n[s + 2] = o[2], n[s + 3] = o[3], n[s + 4] = o[4], n[s + 5] = o[5], n[s + 6] = o[6], n[s + 7] = o[7], n[s + 8] = o[8], n;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Xm = /* @__PURE__ */ new au();
function NE(T) {
  for (let n = T.length - 1; n >= 0; --n)
    if (T[n] >= 65535)
      return !0;
  return !1;
}
function W0(T) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", T);
}
const q0 = {};
function FE(T) {
  T in q0 || (q0[T] = !0, console.warn(T));
}
const I0 = /* @__PURE__ */ new au().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Q0 = /* @__PURE__ */ new au().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Mh = {
  [zv]: {
    transfer: Sv,
    primaries: H0,
    toReference: (T) => T,
    fromReference: (T) => T
  },
  [iu]: {
    transfer: B0,
    primaries: H0,
    toReference: (T) => T.convertSRGBToLinear(),
    fromReference: (T) => T.convertLinearToSRGB()
  },
  [Cx]: {
    transfer: Sv,
    primaries: P0,
    toReference: (T) => T.applyMatrix3(Q0),
    fromReference: (T) => T.applyMatrix3(I0)
  },
  [wE]: {
    transfer: B0,
    primaries: P0,
    toReference: (T) => T.convertSRGBToLinear().applyMatrix3(Q0),
    fromReference: (T) => T.applyMatrix3(I0).convertLinearToSRGB()
  }
}, OE = /* @__PURE__ */ new Set([zv, Cx]), Pa = {
  enabled: !0,
  _workingColorSpace: zv,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(T) {
    if (!OE.has(T))
      throw new Error(`Unsupported working color space, "${T}".`);
    this._workingColorSpace = T;
  },
  convert: function(T, n, s) {
    if (this.enabled === !1 || n === s || !n || !s)
      return T;
    const o = Mh[n].toReference, h = Mh[s].fromReference;
    return h(o(T));
  },
  fromWorkingColorSpace: function(T, n) {
    return this.convert(T, this._workingColorSpace, n);
  },
  toWorkingColorSpace: function(T, n) {
    return this.convert(T, n, this._workingColorSpace);
  },
  getPrimaries: function(T) {
    return Mh[T].primaries;
  },
  getTransfer: function(T) {
    return T === bx ? Sv : Mh[T].transfer;
  }
};
function mc(T) {
  return T < 0.04045 ? T * 0.0773993808 : Math.pow(T * 0.9478672986 + 0.0521327014, 2.4);
}
function Jm(T) {
  return T < 31308e-7 ? T * 12.92 : 1.055 * Math.pow(T, 0.41666) - 0.055;
}
let sc;
class UE {
  static getDataURL(n) {
    if (/^data:/i.test(n.src) || typeof HTMLCanvasElement > "u")
      return n.src;
    let s;
    if (n instanceof HTMLCanvasElement)
      s = n;
    else {
      sc === void 0 && (sc = W0("canvas")), sc.width = n.width, sc.height = n.height;
      const o = sc.getContext("2d");
      n instanceof ImageData ? o.putImageData(n, 0, 0) : o.drawImage(n, 0, 0, n.width, n.height), s = sc;
    }
    return s.width > 2048 || s.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", n), s.toDataURL("image/jpeg", 0.6)) : s.toDataURL("image/png");
  }
  static sRGBToLinear(n) {
    if (typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap) {
      const s = W0("canvas");
      s.width = n.width, s.height = n.height;
      const o = s.getContext("2d");
      o.drawImage(n, 0, 0, n.width, n.height);
      const h = o.getImageData(0, 0, n.width, n.height), m = h.data;
      for (let y = 0; y < m.length; y++)
        m[y] = mc(m[y] / 255) * 255;
      return o.putImageData(h, 0, 0), s;
    } else if (n.data) {
      const s = n.data.slice(0);
      for (let o = 0; o < s.length; o++)
        s instanceof Uint8Array || s instanceof Uint8ClampedArray ? s[o] = Math.floor(mc(s[o] / 255) * 255) : s[o] = mc(s[o]);
      return {
        data: s,
        width: n.width,
        height: n.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), n;
  }
}
let LE = 0;
class Mx {
  constructor(n = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: LE++ }), this.uuid = qf(), this.data = n, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(n) {
    n === !0 && this.version++;
  }
  toJSON(n) {
    const s = n === void 0 || typeof n == "string";
    if (!s && n.images[this.uuid] !== void 0)
      return n.images[this.uuid];
    const o = {
      uuid: this.uuid,
      url: ""
    }, h = this.data;
    if (h !== null) {
      let m;
      if (Array.isArray(h)) {
        m = [];
        for (let y = 0, C = h.length; y < C; y++)
          h[y].isDataTexture ? m.push(Zm(h[y].image)) : m.push(Zm(h[y]));
      } else
        m = Zm(h);
      o.url = m;
    }
    return s || (n.images[this.uuid] = o), o;
  }
}
function Zm(T) {
  return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap ? UE.getDataURL(T) : T.data ? {
    data: Array.from(T.data),
    width: T.width,
    height: T.height,
    type: T.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let kE = 0;
class vs extends Wf {
  constructor(n = vs.DEFAULT_IMAGE, s = vs.DEFAULT_MAPPING, o = bh, h = bh, m = Hh, y = bE, C = Tx, b = Ex, x = vs.DEFAULT_ANISOTROPY, E = bx) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: kE++ }), this.uuid = qf(), this.name = "", this.source = new Mx(n), this.mipmaps = [], this.mapping = s, this.channel = 0, this.wrapS = o, this.wrapT = h, this.magFilter = m, this.minFilter = y, this.anisotropy = x, this.format = C, this.internalFormat = null, this.type = b, this.offset = new ms(0, 0), this.repeat = new ms(1, 1), this.center = new ms(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new au(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = E, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
    const s = n === void 0 || typeof n == "string";
    if (!s && n.textures[this.uuid] !== void 0)
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
    return Object.keys(this.userData).length > 0 && (o.userData = this.userData), s || (n.textures[this.uuid] = o), o;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(n) {
    if (this.mapping !== _x)
      return n;
    if (n.applyMatrix3(this.matrix), n.x < 0 || n.x > 1)
      switch (this.wrapS) {
        case O0:
          n.x = n.x - Math.floor(n.x);
          break;
        case bh:
          n.x = n.x < 0 ? 0 : 1;
          break;
        case U0:
          Math.abs(Math.floor(n.x) % 2) === 1 ? n.x = Math.ceil(n.x) - n.x : n.x = n.x - Math.floor(n.x);
          break;
      }
    if (n.y < 0 || n.y > 1)
      switch (this.wrapT) {
        case O0:
          n.y = n.y - Math.floor(n.y);
          break;
        case bh:
          n.y = n.y < 0 ? 0 : 1;
          break;
        case U0:
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
vs.DEFAULT_IMAGE = null;
vs.DEFAULT_MAPPING = _x;
vs.DEFAULT_ANISOTROPY = 1;
class Ph {
  constructor(n = 0, s = 0, o = 0, h = 1) {
    Ph.prototype.isVector4 = !0, this.x = n, this.y = s, this.z = o, this.w = h;
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
  set(n, s, o, h) {
    return this.x = n, this.y = s, this.z = o, this.w = h, this;
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
  setComponent(n, s) {
    switch (n) {
      case 0:
        this.x = s;
        break;
      case 1:
        this.y = s;
        break;
      case 2:
        this.z = s;
        break;
      case 3:
        this.w = s;
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
  addVectors(n, s) {
    return this.x = n.x + s.x, this.y = n.y + s.y, this.z = n.z + s.z, this.w = n.w + s.w, this;
  }
  addScaledVector(n, s) {
    return this.x += n.x * s, this.y += n.y * s, this.z += n.z * s, this.w += n.w * s, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this.z -= n.z, this.w -= n.w, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this.z -= n, this.w -= n, this;
  }
  subVectors(n, s) {
    return this.x = n.x - s.x, this.y = n.y - s.y, this.z = n.z - s.z, this.w = n.w - s.w, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this.z *= n.z, this.w *= n.w, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this.z *= n, this.w *= n, this;
  }
  applyMatrix4(n) {
    const s = this.x, o = this.y, h = this.z, m = this.w, y = n.elements;
    return this.x = y[0] * s + y[4] * o + y[8] * h + y[12] * m, this.y = y[1] * s + y[5] * o + y[9] * h + y[13] * m, this.z = y[2] * s + y[6] * o + y[10] * h + y[14] * m, this.w = y[3] * s + y[7] * o + y[11] * h + y[15] * m, this;
  }
  divideScalar(n) {
    return this.multiplyScalar(1 / n);
  }
  setAxisAngleFromQuaternion(n) {
    this.w = 2 * Math.acos(n.w);
    const s = Math.sqrt(1 - n.w * n.w);
    return s < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = n.x / s, this.y = n.y / s, this.z = n.z / s), this;
  }
  setAxisAngleFromRotationMatrix(n) {
    let s, o, h, m;
    const b = n.elements, x = b[0], E = b[4], S = b[8], M = b[1], w = b[5], F = b[9], k = b[2], Q = b[6], J = b[10];
    if (Math.abs(E - M) < 0.01 && Math.abs(S - k) < 0.01 && Math.abs(F - Q) < 0.01) {
      if (Math.abs(E + M) < 0.1 && Math.abs(S + k) < 0.1 && Math.abs(F + Q) < 0.1 && Math.abs(x + w + J - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      s = Math.PI;
      const he = (x + 1) / 2, Ce = (w + 1) / 2, Re = (J + 1) / 2, ke = (E + M) / 4, ue = (S + k) / 4, ce = (F + Q) / 4;
      return he > Ce && he > Re ? he < 0.01 ? (o = 0, h = 0.707106781, m = 0.707106781) : (o = Math.sqrt(he), h = ke / o, m = ue / o) : Ce > Re ? Ce < 0.01 ? (o = 0.707106781, h = 0, m = 0.707106781) : (h = Math.sqrt(Ce), o = ke / h, m = ce / h) : Re < 0.01 ? (o = 0.707106781, h = 0.707106781, m = 0) : (m = Math.sqrt(Re), o = ue / m, h = ce / m), this.set(o, h, m, s), this;
    }
    let se = Math.sqrt((Q - F) * (Q - F) + (S - k) * (S - k) + (M - E) * (M - E));
    return Math.abs(se) < 1e-3 && (se = 1), this.x = (Q - F) / se, this.y = (S - k) / se, this.z = (M - E) / se, this.w = Math.acos((x + w + J - 1) / 2), this;
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this.z = Math.min(this.z, n.z), this.w = Math.min(this.w, n.w), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this.z = Math.max(this.z, n.z), this.w = Math.max(this.w, n.w), this;
  }
  clamp(n, s) {
    return this.x = Math.max(n.x, Math.min(s.x, this.x)), this.y = Math.max(n.y, Math.min(s.y, this.y)), this.z = Math.max(n.z, Math.min(s.z, this.z)), this.w = Math.max(n.w, Math.min(s.w, this.w)), this;
  }
  clampScalar(n, s) {
    return this.x = Math.max(n, Math.min(s, this.x)), this.y = Math.max(n, Math.min(s, this.y)), this.z = Math.max(n, Math.min(s, this.z)), this.w = Math.max(n, Math.min(s, this.w)), this;
  }
  clampLength(n, s) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(Math.max(n, Math.min(s, o)));
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
  lerp(n, s) {
    return this.x += (n.x - this.x) * s, this.y += (n.y - this.y) * s, this.z += (n.z - this.z) * s, this.w += (n.w - this.w) * s, this;
  }
  lerpVectors(n, s, o) {
    return this.x = n.x + (s.x - n.x) * o, this.y = n.y + (s.y - n.y) * o, this.z = n.z + (s.z - n.z) * o, this.w = n.w + (s.w - n.w) * o, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y && n.z === this.z && n.w === this.w;
  }
  fromArray(n, s = 0) {
    return this.x = n[s], this.y = n[s + 1], this.z = n[s + 2], this.w = n[s + 3], this;
  }
  toArray(n = [], s = 0) {
    return n[s] = this.x, n[s + 1] = this.y, n[s + 2] = this.z, n[s + 3] = this.w, n;
  }
  fromBufferAttribute(n, s) {
    return this.x = n.getX(s), this.y = n.getY(s), this.z = n.getZ(s), this.w = n.getW(s), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class BE extends Wf {
  constructor(n = 1, s = 1, o = {}) {
    super(), this.isRenderTarget = !0, this.width = n, this.height = s, this.depth = 1, this.scissor = new Ph(0, 0, n, s), this.scissorTest = !1, this.viewport = new Ph(0, 0, n, s);
    const h = { width: n, height: s, depth: 1 };
    o = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Hh,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0,
      count: 1
    }, o);
    const m = new vs(h, o.mapping, o.wrapS, o.wrapT, o.magFilter, o.minFilter, o.format, o.type, o.anisotropy, o.colorSpace);
    m.flipY = !1, m.generateMipmaps = o.generateMipmaps, m.internalFormat = o.internalFormat, this.textures = [];
    const y = o.count;
    for (let C = 0; C < y; C++)
      this.textures[C] = m.clone(), this.textures[C].isRenderTargetTexture = !0;
    this.depthBuffer = o.depthBuffer, this.stencilBuffer = o.stencilBuffer, this.depthTexture = o.depthTexture, this.samples = o.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(n) {
    this.textures[0] = n;
  }
  setSize(n, s, o = 1) {
    if (this.width !== n || this.height !== s || this.depth !== o) {
      this.width = n, this.height = s, this.depth = o;
      for (let h = 0, m = this.textures.length; h < m; h++)
        this.textures[h].image.width = n, this.textures[h].image.height = s, this.textures[h].image.depth = o;
      this.dispose();
    }
    this.viewport.set(0, 0, n, s), this.scissor.set(0, 0, n, s);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.width = n.width, this.height = n.height, this.depth = n.depth, this.scissor.copy(n.scissor), this.scissorTest = n.scissorTest, this.viewport.copy(n.viewport), this.textures.length = 0;
    for (let o = 0, h = n.textures.length; o < h; o++)
      this.textures[o] = n.textures[o].clone(), this.textures[o].isRenderTargetTexture = !0;
    const s = Object.assign({}, n.texture.image);
    return this.texture.source = new Mx(s), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, n.depthTexture !== null && (this.depthTexture = n.depthTexture.clone()), this.samples = n.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class HE extends BE {
  constructor(n = 1, s = 1, o = {}) {
    super(n, s, o), this.isWebGLRenderTarget = !0;
  }
}
class If {
  constructor(n = 0, s = 0, o = 0, h = 1) {
    this.isQuaternion = !0, this._x = n, this._y = s, this._z = o, this._w = h;
  }
  static slerpFlat(n, s, o, h, m, y, C) {
    let b = o[h + 0], x = o[h + 1], E = o[h + 2], S = o[h + 3];
    const M = m[y + 0], w = m[y + 1], F = m[y + 2], k = m[y + 3];
    if (C === 0) {
      n[s + 0] = b, n[s + 1] = x, n[s + 2] = E, n[s + 3] = S;
      return;
    }
    if (C === 1) {
      n[s + 0] = M, n[s + 1] = w, n[s + 2] = F, n[s + 3] = k;
      return;
    }
    if (S !== k || b !== M || x !== w || E !== F) {
      let Q = 1 - C;
      const J = b * M + x * w + E * F + S * k, se = J >= 0 ? 1 : -1, he = 1 - J * J;
      if (he > Number.EPSILON) {
        const Re = Math.sqrt(he), ke = Math.atan2(Re, J * se);
        Q = Math.sin(Q * ke) / Re, C = Math.sin(C * ke) / Re;
      }
      const Ce = C * se;
      if (b = b * Q + M * Ce, x = x * Q + w * Ce, E = E * Q + F * Ce, S = S * Q + k * Ce, Q === 1 - C) {
        const Re = 1 / Math.sqrt(b * b + x * x + E * E + S * S);
        b *= Re, x *= Re, E *= Re, S *= Re;
      }
    }
    n[s] = b, n[s + 1] = x, n[s + 2] = E, n[s + 3] = S;
  }
  static multiplyQuaternionsFlat(n, s, o, h, m, y) {
    const C = o[h], b = o[h + 1], x = o[h + 2], E = o[h + 3], S = m[y], M = m[y + 1], w = m[y + 2], F = m[y + 3];
    return n[s] = C * F + E * S + b * w - x * M, n[s + 1] = b * F + E * M + x * S - C * w, n[s + 2] = x * F + E * w + C * M - b * S, n[s + 3] = E * F - C * S - b * M - x * w, n;
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
  set(n, s, o, h) {
    return this._x = n, this._y = s, this._z = o, this._w = h, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(n) {
    return this._x = n.x, this._y = n.y, this._z = n.z, this._w = n.w, this._onChangeCallback(), this;
  }
  setFromEuler(n, s = !0) {
    const o = n._x, h = n._y, m = n._z, y = n._order, C = Math.cos, b = Math.sin, x = C(o / 2), E = C(h / 2), S = C(m / 2), M = b(o / 2), w = b(h / 2), F = b(m / 2);
    switch (y) {
      case "XYZ":
        this._x = M * E * S + x * w * F, this._y = x * w * S - M * E * F, this._z = x * E * F + M * w * S, this._w = x * E * S - M * w * F;
        break;
      case "YXZ":
        this._x = M * E * S + x * w * F, this._y = x * w * S - M * E * F, this._z = x * E * F - M * w * S, this._w = x * E * S + M * w * F;
        break;
      case "ZXY":
        this._x = M * E * S - x * w * F, this._y = x * w * S + M * E * F, this._z = x * E * F + M * w * S, this._w = x * E * S - M * w * F;
        break;
      case "ZYX":
        this._x = M * E * S - x * w * F, this._y = x * w * S + M * E * F, this._z = x * E * F - M * w * S, this._w = x * E * S + M * w * F;
        break;
      case "YZX":
        this._x = M * E * S + x * w * F, this._y = x * w * S + M * E * F, this._z = x * E * F - M * w * S, this._w = x * E * S - M * w * F;
        break;
      case "XZY":
        this._x = M * E * S - x * w * F, this._y = x * w * S - M * E * F, this._z = x * E * F + M * w * S, this._w = x * E * S + M * w * F;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + y);
    }
    return s === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(n, s) {
    const o = s / 2, h = Math.sin(o);
    return this._x = n.x * h, this._y = n.y * h, this._z = n.z * h, this._w = Math.cos(o), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(n) {
    const s = n.elements, o = s[0], h = s[4], m = s[8], y = s[1], C = s[5], b = s[9], x = s[2], E = s[6], S = s[10], M = o + C + S;
    if (M > 0) {
      const w = 0.5 / Math.sqrt(M + 1);
      this._w = 0.25 / w, this._x = (E - b) * w, this._y = (m - x) * w, this._z = (y - h) * w;
    } else if (o > C && o > S) {
      const w = 2 * Math.sqrt(1 + o - C - S);
      this._w = (E - b) / w, this._x = 0.25 * w, this._y = (h + y) / w, this._z = (m + x) / w;
    } else if (C > S) {
      const w = 2 * Math.sqrt(1 + C - o - S);
      this._w = (m - x) / w, this._x = (h + y) / w, this._y = 0.25 * w, this._z = (b + E) / w;
    } else {
      const w = 2 * Math.sqrt(1 + S - o - C);
      this._w = (y - h) / w, this._x = (m + x) / w, this._y = (b + E) / w, this._z = 0.25 * w;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(n, s) {
    let o = n.dot(s) + 1;
    return o < Number.EPSILON ? (o = 0, Math.abs(n.x) > Math.abs(n.z) ? (this._x = -n.y, this._y = n.x, this._z = 0, this._w = o) : (this._x = 0, this._y = -n.z, this._z = n.y, this._w = o)) : (this._x = n.y * s.z - n.z * s.y, this._y = n.z * s.x - n.x * s.z, this._z = n.x * s.y - n.y * s.x, this._w = o), this.normalize();
  }
  angleTo(n) {
    return 2 * Math.acos(Math.abs(wi(this.dot(n), -1, 1)));
  }
  rotateTowards(n, s) {
    const o = this.angleTo(n);
    if (o === 0)
      return this;
    const h = Math.min(1, s / o);
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
  multiplyQuaternions(n, s) {
    const o = n._x, h = n._y, m = n._z, y = n._w, C = s._x, b = s._y, x = s._z, E = s._w;
    return this._x = o * E + y * C + h * x - m * b, this._y = h * E + y * b + m * C - o * x, this._z = m * E + y * x + o * b - h * C, this._w = y * E - o * C - h * b - m * x, this._onChangeCallback(), this;
  }
  slerp(n, s) {
    if (s === 0)
      return this;
    if (s === 1)
      return this.copy(n);
    const o = this._x, h = this._y, m = this._z, y = this._w;
    let C = y * n._w + o * n._x + h * n._y + m * n._z;
    if (C < 0 ? (this._w = -n._w, this._x = -n._x, this._y = -n._y, this._z = -n._z, C = -C) : this.copy(n), C >= 1)
      return this._w = y, this._x = o, this._y = h, this._z = m, this;
    const b = 1 - C * C;
    if (b <= Number.EPSILON) {
      const w = 1 - s;
      return this._w = w * y + s * this._w, this._x = w * o + s * this._x, this._y = w * h + s * this._y, this._z = w * m + s * this._z, this.normalize(), this;
    }
    const x = Math.sqrt(b), E = Math.atan2(x, C), S = Math.sin((1 - s) * E) / x, M = Math.sin(s * E) / x;
    return this._w = y * S + this._w * M, this._x = o * S + this._x * M, this._y = h * S + this._y * M, this._z = m * S + this._z * M, this._onChangeCallback(), this;
  }
  slerpQuaternions(n, s, o) {
    return this.copy(n).slerp(s, o);
  }
  random() {
    const n = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random(), o = Math.random(), h = Math.sqrt(1 - o), m = Math.sqrt(o);
    return this.set(
      h * Math.sin(n),
      h * Math.cos(n),
      m * Math.sin(s),
      m * Math.cos(s)
    );
  }
  equals(n) {
    return n._x === this._x && n._y === this._y && n._z === this._z && n._w === this._w;
  }
  fromArray(n, s = 0) {
    return this._x = n[s], this._y = n[s + 1], this._z = n[s + 2], this._w = n[s + 3], this._onChangeCallback(), this;
  }
  toArray(n = [], s = 0) {
    return n[s] = this._x, n[s + 1] = this._y, n[s + 2] = this._z, n[s + 3] = this._w, n;
  }
  fromBufferAttribute(n, s) {
    return this._x = n.getX(s), this._y = n.getY(s), this._z = n.getZ(s), this._w = n.getW(s), this._onChangeCallback(), this;
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
class Me {
  constructor(n = 0, s = 0, o = 0) {
    Me.prototype.isVector3 = !0, this.x = n, this.y = s, this.z = o;
  }
  set(n, s, o) {
    return o === void 0 && (o = this.z), this.x = n, this.y = s, this.z = o, this;
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
  setComponent(n, s) {
    switch (n) {
      case 0:
        this.x = s;
        break;
      case 1:
        this.y = s;
        break;
      case 2:
        this.z = s;
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
  addVectors(n, s) {
    return this.x = n.x + s.x, this.y = n.y + s.y, this.z = n.z + s.z, this;
  }
  addScaledVector(n, s) {
    return this.x += n.x * s, this.y += n.y * s, this.z += n.z * s, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this.z -= n.z, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this.z -= n, this;
  }
  subVectors(n, s) {
    return this.x = n.x - s.x, this.y = n.y - s.y, this.z = n.z - s.z, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this.z *= n.z, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this.z *= n, this;
  }
  multiplyVectors(n, s) {
    return this.x = n.x * s.x, this.y = n.y * s.y, this.z = n.z * s.z, this;
  }
  applyEuler(n) {
    return this.applyQuaternion(G0.setFromEuler(n));
  }
  applyAxisAngle(n, s) {
    return this.applyQuaternion(G0.setFromAxisAngle(n, s));
  }
  applyMatrix3(n) {
    const s = this.x, o = this.y, h = this.z, m = n.elements;
    return this.x = m[0] * s + m[3] * o + m[6] * h, this.y = m[1] * s + m[4] * o + m[7] * h, this.z = m[2] * s + m[5] * o + m[8] * h, this;
  }
  applyNormalMatrix(n) {
    return this.applyMatrix3(n).normalize();
  }
  applyMatrix4(n) {
    const s = this.x, o = this.y, h = this.z, m = n.elements, y = 1 / (m[3] * s + m[7] * o + m[11] * h + m[15]);
    return this.x = (m[0] * s + m[4] * o + m[8] * h + m[12]) * y, this.y = (m[1] * s + m[5] * o + m[9] * h + m[13]) * y, this.z = (m[2] * s + m[6] * o + m[10] * h + m[14]) * y, this;
  }
  applyQuaternion(n) {
    const s = this.x, o = this.y, h = this.z, m = n.x, y = n.y, C = n.z, b = n.w, x = 2 * (y * h - C * o), E = 2 * (C * s - m * h), S = 2 * (m * o - y * s);
    return this.x = s + b * x + y * S - C * E, this.y = o + b * E + C * x - m * S, this.z = h + b * S + m * E - y * x, this;
  }
  project(n) {
    return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix);
  }
  unproject(n) {
    return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld);
  }
  transformDirection(n) {
    const s = this.x, o = this.y, h = this.z, m = n.elements;
    return this.x = m[0] * s + m[4] * o + m[8] * h, this.y = m[1] * s + m[5] * o + m[9] * h, this.z = m[2] * s + m[6] * o + m[10] * h, this.normalize();
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
  clamp(n, s) {
    return this.x = Math.max(n.x, Math.min(s.x, this.x)), this.y = Math.max(n.y, Math.min(s.y, this.y)), this.z = Math.max(n.z, Math.min(s.z, this.z)), this;
  }
  clampScalar(n, s) {
    return this.x = Math.max(n, Math.min(s, this.x)), this.y = Math.max(n, Math.min(s, this.y)), this.z = Math.max(n, Math.min(s, this.z)), this;
  }
  clampLength(n, s) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(Math.max(n, Math.min(s, o)));
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
  lerp(n, s) {
    return this.x += (n.x - this.x) * s, this.y += (n.y - this.y) * s, this.z += (n.z - this.z) * s, this;
  }
  lerpVectors(n, s, o) {
    return this.x = n.x + (s.x - n.x) * o, this.y = n.y + (s.y - n.y) * o, this.z = n.z + (s.z - n.z) * o, this;
  }
  cross(n) {
    return this.crossVectors(this, n);
  }
  crossVectors(n, s) {
    const o = n.x, h = n.y, m = n.z, y = s.x, C = s.y, b = s.z;
    return this.x = h * b - m * C, this.y = m * y - o * b, this.z = o * C - h * y, this;
  }
  projectOnVector(n) {
    const s = n.lengthSq();
    if (s === 0)
      return this.set(0, 0, 0);
    const o = n.dot(this) / s;
    return this.copy(n).multiplyScalar(o);
  }
  projectOnPlane(n) {
    return Km.copy(this).projectOnVector(n), this.sub(Km);
  }
  reflect(n) {
    return this.sub(Km.copy(n).multiplyScalar(2 * this.dot(n)));
  }
  angleTo(n) {
    const s = Math.sqrt(this.lengthSq() * n.lengthSq());
    if (s === 0)
      return Math.PI / 2;
    const o = this.dot(n) / s;
    return Math.acos(wi(o, -1, 1));
  }
  distanceTo(n) {
    return Math.sqrt(this.distanceToSquared(n));
  }
  distanceToSquared(n) {
    const s = this.x - n.x, o = this.y - n.y, h = this.z - n.z;
    return s * s + o * o + h * h;
  }
  manhattanDistanceTo(n) {
    return Math.abs(this.x - n.x) + Math.abs(this.y - n.y) + Math.abs(this.z - n.z);
  }
  setFromSpherical(n) {
    return this.setFromSphericalCoords(n.radius, n.phi, n.theta);
  }
  setFromSphericalCoords(n, s, o) {
    const h = Math.sin(s) * n;
    return this.x = h * Math.sin(o), this.y = Math.cos(s) * n, this.z = h * Math.cos(o), this;
  }
  setFromCylindrical(n) {
    return this.setFromCylindricalCoords(n.radius, n.theta, n.y);
  }
  setFromCylindricalCoords(n, s, o) {
    return this.x = n * Math.sin(s), this.y = o, this.z = n * Math.cos(s), this;
  }
  setFromMatrixPosition(n) {
    const s = n.elements;
    return this.x = s[12], this.y = s[13], this.z = s[14], this;
  }
  setFromMatrixScale(n) {
    const s = this.setFromMatrixColumn(n, 0).length(), o = this.setFromMatrixColumn(n, 1).length(), h = this.setFromMatrixColumn(n, 2).length();
    return this.x = s, this.y = o, this.z = h, this;
  }
  setFromMatrixColumn(n, s) {
    return this.fromArray(n.elements, s * 4);
  }
  setFromMatrix3Column(n, s) {
    return this.fromArray(n.elements, s * 3);
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
  fromArray(n, s = 0) {
    return this.x = n[s], this.y = n[s + 1], this.z = n[s + 2], this;
  }
  toArray(n = [], s = 0) {
    return n[s] = this.x, n[s + 1] = this.y, n[s + 2] = this.z, n;
  }
  fromBufferAttribute(n, s) {
    return this.x = n.getX(s), this.y = n.getY(s), this.z = n.getZ(s), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const n = Math.random() * Math.PI * 2, s = Math.random() * 2 - 1, o = Math.sqrt(1 - s * s);
    return this.x = o * Math.cos(n), this.y = s, this.z = o * Math.sin(n), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Km = /* @__PURE__ */ new Me(), G0 = /* @__PURE__ */ new If();
class Qf {
  constructor(n = new Me(1 / 0, 1 / 0, 1 / 0), s = new Me(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = n, this.max = s;
  }
  set(n, s) {
    return this.min.copy(n), this.max.copy(s), this;
  }
  setFromArray(n) {
    this.makeEmpty();
    for (let s = 0, o = n.length; s < o; s += 3)
      this.expandByPoint(ja.fromArray(n, s));
    return this;
  }
  setFromBufferAttribute(n) {
    this.makeEmpty();
    for (let s = 0, o = n.count; s < o; s++)
      this.expandByPoint(ja.fromBufferAttribute(n, s));
    return this;
  }
  setFromPoints(n) {
    this.makeEmpty();
    for (let s = 0, o = n.length; s < o; s++)
      this.expandByPoint(n[s]);
    return this;
  }
  setFromCenterAndSize(n, s) {
    const o = ja.copy(s).multiplyScalar(0.5);
    return this.min.copy(n).sub(o), this.max.copy(n).add(o), this;
  }
  setFromObject(n, s = !1) {
    return this.makeEmpty(), this.expandByObject(n, s);
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
  expandByObject(n, s = !1) {
    n.updateWorldMatrix(!1, !1);
    const o = n.geometry;
    if (o !== void 0) {
      const m = o.getAttribute("position");
      if (s === !0 && m !== void 0 && n.isInstancedMesh !== !0)
        for (let y = 0, C = m.count; y < C; y++)
          n.isMesh === !0 ? n.getVertexPosition(y, ja) : ja.fromBufferAttribute(m, y), ja.applyMatrix4(n.matrixWorld), this.expandByPoint(ja);
      else
        n.boundingBox !== void 0 ? (n.boundingBox === null && n.computeBoundingBox(), zh.copy(n.boundingBox)) : (o.boundingBox === null && o.computeBoundingBox(), zh.copy(o.boundingBox)), zh.applyMatrix4(n.matrixWorld), this.union(zh);
    }
    const h = n.children;
    for (let m = 0, y = h.length; m < y; m++)
      this.expandByObject(h[m], s);
    return this;
  }
  containsPoint(n) {
    return !(n.x < this.min.x || n.x > this.max.x || n.y < this.min.y || n.y > this.max.y || n.z < this.min.z || n.z > this.max.z);
  }
  containsBox(n) {
    return this.min.x <= n.min.x && n.max.x <= this.max.x && this.min.y <= n.min.y && n.max.y <= this.max.y && this.min.z <= n.min.z && n.max.z <= this.max.z;
  }
  getParameter(n, s) {
    return s.set(
      (n.x - this.min.x) / (this.max.x - this.min.x),
      (n.y - this.min.y) / (this.max.y - this.min.y),
      (n.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(n) {
    return !(n.max.x < this.min.x || n.min.x > this.max.x || n.max.y < this.min.y || n.min.y > this.max.y || n.max.z < this.min.z || n.min.z > this.max.z);
  }
  intersectsSphere(n) {
    return this.clampPoint(n.center, ja), ja.distanceToSquared(n.center) <= n.radius * n.radius;
  }
  intersectsPlane(n) {
    let s, o;
    return n.normal.x > 0 ? (s = n.normal.x * this.min.x, o = n.normal.x * this.max.x) : (s = n.normal.x * this.max.x, o = n.normal.x * this.min.x), n.normal.y > 0 ? (s += n.normal.y * this.min.y, o += n.normal.y * this.max.y) : (s += n.normal.y * this.max.y, o += n.normal.y * this.min.y), n.normal.z > 0 ? (s += n.normal.z * this.min.z, o += n.normal.z * this.max.z) : (s += n.normal.z * this.max.z, o += n.normal.z * this.min.z), s <= -n.constant && o >= -n.constant;
  }
  intersectsTriangle(n) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Lf), wh.subVectors(this.max, Lf), lc.subVectors(n.a, Lf), uc.subVectors(n.b, Lf), oc.subVectors(n.c, Lf), Zl.subVectors(uc, lc), Kl.subVectors(oc, uc), Ju.subVectors(lc, oc);
    let s = [
      0,
      -Zl.z,
      Zl.y,
      0,
      -Kl.z,
      Kl.y,
      0,
      -Ju.z,
      Ju.y,
      Zl.z,
      0,
      -Zl.x,
      Kl.z,
      0,
      -Kl.x,
      Ju.z,
      0,
      -Ju.x,
      -Zl.y,
      Zl.x,
      0,
      -Kl.y,
      Kl.x,
      0,
      -Ju.y,
      Ju.x,
      0
    ];
    return !$m(s, lc, uc, oc, wh) || (s = [1, 0, 0, 0, 1, 0, 0, 0, 1], !$m(s, lc, uc, oc, wh)) ? !1 : (Dh.crossVectors(Zl, Kl), s = [Dh.x, Dh.y, Dh.z], $m(s, lc, uc, oc, wh));
  }
  clampPoint(n, s) {
    return s.copy(n).clamp(this.min, this.max);
  }
  distanceToPoint(n) {
    return this.clampPoint(n, ja).distanceTo(n);
  }
  getBoundingSphere(n) {
    return this.isEmpty() ? n.makeEmpty() : (this.getCenter(n.center), n.radius = this.getSize(ja).length() * 0.5), n;
  }
  intersect(n) {
    return this.min.max(n.min), this.max.min(n.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(n) {
    return this.min.min(n.min), this.max.max(n.max), this;
  }
  applyMatrix4(n) {
    return this.isEmpty() ? this : (Ks[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(n), Ks[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(n), Ks[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(n), Ks[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(n), Ks[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(n), Ks[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(n), Ks[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(n), Ks[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(n), this.setFromPoints(Ks), this);
  }
  translate(n) {
    return this.min.add(n), this.max.add(n), this;
  }
  equals(n) {
    return n.min.equals(this.min) && n.max.equals(this.max);
  }
}
const Ks = [
  /* @__PURE__ */ new Me(),
  /* @__PURE__ */ new Me(),
  /* @__PURE__ */ new Me(),
  /* @__PURE__ */ new Me(),
  /* @__PURE__ */ new Me(),
  /* @__PURE__ */ new Me(),
  /* @__PURE__ */ new Me(),
  /* @__PURE__ */ new Me()
], ja = /* @__PURE__ */ new Me(), zh = /* @__PURE__ */ new Qf(), lc = /* @__PURE__ */ new Me(), uc = /* @__PURE__ */ new Me(), oc = /* @__PURE__ */ new Me(), Zl = /* @__PURE__ */ new Me(), Kl = /* @__PURE__ */ new Me(), Ju = /* @__PURE__ */ new Me(), Lf = /* @__PURE__ */ new Me(), wh = /* @__PURE__ */ new Me(), Dh = /* @__PURE__ */ new Me(), Zu = /* @__PURE__ */ new Me();
function $m(T, n, s, o, h) {
  for (let m = 0, y = T.length - 3; m <= y; m += 3) {
    Zu.fromArray(T, m);
    const C = h.x * Math.abs(Zu.x) + h.y * Math.abs(Zu.y) + h.z * Math.abs(Zu.z), b = n.dot(Zu), x = s.dot(Zu), E = o.dot(Zu);
    if (Math.max(-Math.max(b, x, E), Math.min(b, x, E)) > C)
      return !1;
  }
  return !0;
}
const PE = /* @__PURE__ */ new Qf(), kf = /* @__PURE__ */ new Me(), ev = /* @__PURE__ */ new Me();
class jE {
  constructor(n = new Me(), s = -1) {
    this.isSphere = !0, this.center = n, this.radius = s;
  }
  set(n, s) {
    return this.center.copy(n), this.radius = s, this;
  }
  setFromPoints(n, s) {
    const o = this.center;
    s !== void 0 ? o.copy(s) : PE.setFromPoints(n).getCenter(o);
    let h = 0;
    for (let m = 0, y = n.length; m < y; m++)
      h = Math.max(h, o.distanceToSquared(n[m]));
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
    const s = this.radius + n.radius;
    return n.center.distanceToSquared(this.center) <= s * s;
  }
  intersectsBox(n) {
    return n.intersectsSphere(this);
  }
  intersectsPlane(n) {
    return Math.abs(n.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(n, s) {
    const o = this.center.distanceToSquared(n);
    return s.copy(n), o > this.radius * this.radius && (s.sub(this.center).normalize(), s.multiplyScalar(this.radius).add(this.center)), s;
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
    kf.subVectors(n, this.center);
    const s = kf.lengthSq();
    if (s > this.radius * this.radius) {
      const o = Math.sqrt(s), h = (o - this.radius) * 0.5;
      this.center.addScaledVector(kf, h / o), this.radius += h;
    }
    return this;
  }
  union(n) {
    return n.isEmpty() ? this : this.isEmpty() ? (this.copy(n), this) : (this.center.equals(n.center) === !0 ? this.radius = Math.max(this.radius, n.radius) : (ev.subVectors(n.center, this.center).setLength(n.radius), this.expandByPoint(kf.copy(n.center).add(ev)), this.expandByPoint(kf.copy(n.center).sub(ev))), this);
  }
  equals(n) {
    return n.center.equals(this.center) && n.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $s = /* @__PURE__ */ new Me(), tv = /* @__PURE__ */ new Me(), Ah = /* @__PURE__ */ new Me(), $l = /* @__PURE__ */ new Me(), nv = /* @__PURE__ */ new Me(), Nh = /* @__PURE__ */ new Me(), rv = /* @__PURE__ */ new Me();
class VE {
  constructor(n = new Me(), s = new Me(0, 0, -1)) {
    this.origin = n, this.direction = s;
  }
  set(n, s) {
    return this.origin.copy(n), this.direction.copy(s), this;
  }
  copy(n) {
    return this.origin.copy(n.origin), this.direction.copy(n.direction), this;
  }
  at(n, s) {
    return s.copy(this.origin).addScaledVector(this.direction, n);
  }
  lookAt(n) {
    return this.direction.copy(n).sub(this.origin).normalize(), this;
  }
  recast(n) {
    return this.origin.copy(this.at(n, $s)), this;
  }
  closestPointToPoint(n, s) {
    s.subVectors(n, this.origin);
    const o = s.dot(this.direction);
    return o < 0 ? s.copy(this.origin) : s.copy(this.origin).addScaledVector(this.direction, o);
  }
  distanceToPoint(n) {
    return Math.sqrt(this.distanceSqToPoint(n));
  }
  distanceSqToPoint(n) {
    const s = $s.subVectors(n, this.origin).dot(this.direction);
    return s < 0 ? this.origin.distanceToSquared(n) : ($s.copy(this.origin).addScaledVector(this.direction, s), $s.distanceToSquared(n));
  }
  distanceSqToSegment(n, s, o, h) {
    tv.copy(n).add(s).multiplyScalar(0.5), Ah.copy(s).sub(n).normalize(), $l.copy(this.origin).sub(tv);
    const m = n.distanceTo(s) * 0.5, y = -this.direction.dot(Ah), C = $l.dot(this.direction), b = -$l.dot(Ah), x = $l.lengthSq(), E = Math.abs(1 - y * y);
    let S, M, w, F;
    if (E > 0)
      if (S = y * b - C, M = y * C - b, F = m * E, S >= 0)
        if (M >= -F)
          if (M <= F) {
            const k = 1 / E;
            S *= k, M *= k, w = S * (S + y * M + 2 * C) + M * (y * S + M + 2 * b) + x;
          } else
            M = m, S = Math.max(0, -(y * M + C)), w = -S * S + M * (M + 2 * b) + x;
        else
          M = -m, S = Math.max(0, -(y * M + C)), w = -S * S + M * (M + 2 * b) + x;
      else
        M <= -F ? (S = Math.max(0, -(-y * m + C)), M = S > 0 ? -m : Math.min(Math.max(-m, -b), m), w = -S * S + M * (M + 2 * b) + x) : M <= F ? (S = 0, M = Math.min(Math.max(-m, -b), m), w = M * (M + 2 * b) + x) : (S = Math.max(0, -(y * m + C)), M = S > 0 ? m : Math.min(Math.max(-m, -b), m), w = -S * S + M * (M + 2 * b) + x);
    else
      M = y > 0 ? -m : m, S = Math.max(0, -(y * M + C)), w = -S * S + M * (M + 2 * b) + x;
    return o && o.copy(this.origin).addScaledVector(this.direction, S), h && h.copy(tv).addScaledVector(Ah, M), w;
  }
  intersectSphere(n, s) {
    $s.subVectors(n.center, this.origin);
    const o = $s.dot(this.direction), h = $s.dot($s) - o * o, m = n.radius * n.radius;
    if (h > m)
      return null;
    const y = Math.sqrt(m - h), C = o - y, b = o + y;
    return b < 0 ? null : C < 0 ? this.at(b, s) : this.at(C, s);
  }
  intersectsSphere(n) {
    return this.distanceSqToPoint(n.center) <= n.radius * n.radius;
  }
  distanceToPlane(n) {
    const s = n.normal.dot(this.direction);
    if (s === 0)
      return n.distanceToPoint(this.origin) === 0 ? 0 : null;
    const o = -(this.origin.dot(n.normal) + n.constant) / s;
    return o >= 0 ? o : null;
  }
  intersectPlane(n, s) {
    const o = this.distanceToPlane(n);
    return o === null ? null : this.at(o, s);
  }
  intersectsPlane(n) {
    const s = n.distanceToPoint(this.origin);
    return s === 0 || n.normal.dot(this.direction) * s < 0;
  }
  intersectBox(n, s) {
    let o, h, m, y, C, b;
    const x = 1 / this.direction.x, E = 1 / this.direction.y, S = 1 / this.direction.z, M = this.origin;
    return x >= 0 ? (o = (n.min.x - M.x) * x, h = (n.max.x - M.x) * x) : (o = (n.max.x - M.x) * x, h = (n.min.x - M.x) * x), E >= 0 ? (m = (n.min.y - M.y) * E, y = (n.max.y - M.y) * E) : (m = (n.max.y - M.y) * E, y = (n.min.y - M.y) * E), o > y || m > h || ((m > o || isNaN(o)) && (o = m), (y < h || isNaN(h)) && (h = y), S >= 0 ? (C = (n.min.z - M.z) * S, b = (n.max.z - M.z) * S) : (C = (n.max.z - M.z) * S, b = (n.min.z - M.z) * S), o > b || C > h) || ((C > o || o !== o) && (o = C), (b < h || h !== h) && (h = b), h < 0) ? null : this.at(o >= 0 ? o : h, s);
  }
  intersectsBox(n) {
    return this.intersectBox(n, $s) !== null;
  }
  intersectTriangle(n, s, o, h, m) {
    nv.subVectors(s, n), Nh.subVectors(o, n), rv.crossVectors(nv, Nh);
    let y = this.direction.dot(rv), C;
    if (y > 0) {
      if (h)
        return null;
      C = 1;
    } else if (y < 0)
      C = -1, y = -y;
    else
      return null;
    $l.subVectors(this.origin, n);
    const b = C * this.direction.dot(Nh.crossVectors($l, Nh));
    if (b < 0)
      return null;
    const x = C * this.direction.dot(nv.cross($l));
    if (x < 0 || b + x > y)
      return null;
    const E = -C * $l.dot(rv);
    return E < 0 ? null : this.at(E / y, m);
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
class Ya {
  constructor(n, s, o, h, m, y, C, b, x, E, S, M, w, F, k, Q) {
    Ya.prototype.isMatrix4 = !0, this.elements = [
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
    ], n !== void 0 && this.set(n, s, o, h, m, y, C, b, x, E, S, M, w, F, k, Q);
  }
  set(n, s, o, h, m, y, C, b, x, E, S, M, w, F, k, Q) {
    const J = this.elements;
    return J[0] = n, J[4] = s, J[8] = o, J[12] = h, J[1] = m, J[5] = y, J[9] = C, J[13] = b, J[2] = x, J[6] = E, J[10] = S, J[14] = M, J[3] = w, J[7] = F, J[11] = k, J[15] = Q, this;
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
    return new Ya().fromArray(this.elements);
  }
  copy(n) {
    const s = this.elements, o = n.elements;
    return s[0] = o[0], s[1] = o[1], s[2] = o[2], s[3] = o[3], s[4] = o[4], s[5] = o[5], s[6] = o[6], s[7] = o[7], s[8] = o[8], s[9] = o[9], s[10] = o[10], s[11] = o[11], s[12] = o[12], s[13] = o[13], s[14] = o[14], s[15] = o[15], this;
  }
  copyPosition(n) {
    const s = this.elements, o = n.elements;
    return s[12] = o[12], s[13] = o[13], s[14] = o[14], this;
  }
  setFromMatrix3(n) {
    const s = n.elements;
    return this.set(
      s[0],
      s[3],
      s[6],
      0,
      s[1],
      s[4],
      s[7],
      0,
      s[2],
      s[5],
      s[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(n, s, o) {
    return n.setFromMatrixColumn(this, 0), s.setFromMatrixColumn(this, 1), o.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(n, s, o) {
    return this.set(
      n.x,
      s.x,
      o.x,
      0,
      n.y,
      s.y,
      o.y,
      0,
      n.z,
      s.z,
      o.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(n) {
    const s = this.elements, o = n.elements, h = 1 / cc.setFromMatrixColumn(n, 0).length(), m = 1 / cc.setFromMatrixColumn(n, 1).length(), y = 1 / cc.setFromMatrixColumn(n, 2).length();
    return s[0] = o[0] * h, s[1] = o[1] * h, s[2] = o[2] * h, s[3] = 0, s[4] = o[4] * m, s[5] = o[5] * m, s[6] = o[6] * m, s[7] = 0, s[8] = o[8] * y, s[9] = o[9] * y, s[10] = o[10] * y, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, this;
  }
  makeRotationFromEuler(n) {
    const s = this.elements, o = n.x, h = n.y, m = n.z, y = Math.cos(o), C = Math.sin(o), b = Math.cos(h), x = Math.sin(h), E = Math.cos(m), S = Math.sin(m);
    if (n.order === "XYZ") {
      const M = y * E, w = y * S, F = C * E, k = C * S;
      s[0] = b * E, s[4] = -b * S, s[8] = x, s[1] = w + F * x, s[5] = M - k * x, s[9] = -C * b, s[2] = k - M * x, s[6] = F + w * x, s[10] = y * b;
    } else if (n.order === "YXZ") {
      const M = b * E, w = b * S, F = x * E, k = x * S;
      s[0] = M + k * C, s[4] = F * C - w, s[8] = y * x, s[1] = y * S, s[5] = y * E, s[9] = -C, s[2] = w * C - F, s[6] = k + M * C, s[10] = y * b;
    } else if (n.order === "ZXY") {
      const M = b * E, w = b * S, F = x * E, k = x * S;
      s[0] = M - k * C, s[4] = -y * S, s[8] = F + w * C, s[1] = w + F * C, s[5] = y * E, s[9] = k - M * C, s[2] = -y * x, s[6] = C, s[10] = y * b;
    } else if (n.order === "ZYX") {
      const M = y * E, w = y * S, F = C * E, k = C * S;
      s[0] = b * E, s[4] = F * x - w, s[8] = M * x + k, s[1] = b * S, s[5] = k * x + M, s[9] = w * x - F, s[2] = -x, s[6] = C * b, s[10] = y * b;
    } else if (n.order === "YZX") {
      const M = y * b, w = y * x, F = C * b, k = C * x;
      s[0] = b * E, s[4] = k - M * S, s[8] = F * S + w, s[1] = S, s[5] = y * E, s[9] = -C * E, s[2] = -x * E, s[6] = w * S + F, s[10] = M - k * S;
    } else if (n.order === "XZY") {
      const M = y * b, w = y * x, F = C * b, k = C * x;
      s[0] = b * E, s[4] = -S, s[8] = x * E, s[1] = M * S + k, s[5] = y * E, s[9] = w * S - F, s[2] = F * S - w, s[6] = C * E, s[10] = k * S + M;
    }
    return s[3] = 0, s[7] = 0, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, this;
  }
  makeRotationFromQuaternion(n) {
    return this.compose(YE, n, WE);
  }
  lookAt(n, s, o) {
    const h = this.elements;
    return Qi.subVectors(n, s), Qi.lengthSq() === 0 && (Qi.z = 1), Qi.normalize(), eu.crossVectors(o, Qi), eu.lengthSq() === 0 && (Math.abs(o.z) === 1 ? Qi.x += 1e-4 : Qi.z += 1e-4, Qi.normalize(), eu.crossVectors(o, Qi)), eu.normalize(), Fh.crossVectors(Qi, eu), h[0] = eu.x, h[4] = Fh.x, h[8] = Qi.x, h[1] = eu.y, h[5] = Fh.y, h[9] = Qi.y, h[2] = eu.z, h[6] = Fh.z, h[10] = Qi.z, this;
  }
  multiply(n) {
    return this.multiplyMatrices(this, n);
  }
  premultiply(n) {
    return this.multiplyMatrices(n, this);
  }
  multiplyMatrices(n, s) {
    const o = n.elements, h = s.elements, m = this.elements, y = o[0], C = o[4], b = o[8], x = o[12], E = o[1], S = o[5], M = o[9], w = o[13], F = o[2], k = o[6], Q = o[10], J = o[14], se = o[3], he = o[7], Ce = o[11], Re = o[15], ke = h[0], ue = h[4], ce = h[8], Ke = h[12], xe = h[1], ze = h[5], Te = h[9], de = h[13], Ue = h[2], ft = h[6], ut = h[10], _e = h[14], H = h[3], ie = h[7], ee = h[11], U = h[15];
    return m[0] = y * ke + C * xe + b * Ue + x * H, m[4] = y * ue + C * ze + b * ft + x * ie, m[8] = y * ce + C * Te + b * ut + x * ee, m[12] = y * Ke + C * de + b * _e + x * U, m[1] = E * ke + S * xe + M * Ue + w * H, m[5] = E * ue + S * ze + M * ft + w * ie, m[9] = E * ce + S * Te + M * ut + w * ee, m[13] = E * Ke + S * de + M * _e + w * U, m[2] = F * ke + k * xe + Q * Ue + J * H, m[6] = F * ue + k * ze + Q * ft + J * ie, m[10] = F * ce + k * Te + Q * ut + J * ee, m[14] = F * Ke + k * de + Q * _e + J * U, m[3] = se * ke + he * xe + Ce * Ue + Re * H, m[7] = se * ue + he * ze + Ce * ft + Re * ie, m[11] = se * ce + he * Te + Ce * ut + Re * ee, m[15] = se * Ke + he * de + Ce * _e + Re * U, this;
  }
  multiplyScalar(n) {
    const s = this.elements;
    return s[0] *= n, s[4] *= n, s[8] *= n, s[12] *= n, s[1] *= n, s[5] *= n, s[9] *= n, s[13] *= n, s[2] *= n, s[6] *= n, s[10] *= n, s[14] *= n, s[3] *= n, s[7] *= n, s[11] *= n, s[15] *= n, this;
  }
  determinant() {
    const n = this.elements, s = n[0], o = n[4], h = n[8], m = n[12], y = n[1], C = n[5], b = n[9], x = n[13], E = n[2], S = n[6], M = n[10], w = n[14], F = n[3], k = n[7], Q = n[11], J = n[15];
    return F * (+m * b * S - h * x * S - m * C * M + o * x * M + h * C * w - o * b * w) + k * (+s * b * w - s * x * M + m * y * M - h * y * w + h * x * E - m * b * E) + Q * (+s * x * S - s * C * w - m * y * S + o * y * w + m * C * E - o * x * E) + J * (-h * C * E - s * b * S + s * C * M + h * y * S - o * y * M + o * b * E);
  }
  transpose() {
    const n = this.elements;
    let s;
    return s = n[1], n[1] = n[4], n[4] = s, s = n[2], n[2] = n[8], n[8] = s, s = n[6], n[6] = n[9], n[9] = s, s = n[3], n[3] = n[12], n[12] = s, s = n[7], n[7] = n[13], n[13] = s, s = n[11], n[11] = n[14], n[14] = s, this;
  }
  setPosition(n, s, o) {
    const h = this.elements;
    return n.isVector3 ? (h[12] = n.x, h[13] = n.y, h[14] = n.z) : (h[12] = n, h[13] = s, h[14] = o), this;
  }
  invert() {
    const n = this.elements, s = n[0], o = n[1], h = n[2], m = n[3], y = n[4], C = n[5], b = n[6], x = n[7], E = n[8], S = n[9], M = n[10], w = n[11], F = n[12], k = n[13], Q = n[14], J = n[15], se = S * Q * x - k * M * x + k * b * w - C * Q * w - S * b * J + C * M * J, he = F * M * x - E * Q * x - F * b * w + y * Q * w + E * b * J - y * M * J, Ce = E * k * x - F * S * x + F * C * w - y * k * w - E * C * J + y * S * J, Re = F * S * b - E * k * b - F * C * M + y * k * M + E * C * Q - y * S * Q, ke = s * se + o * he + h * Ce + m * Re;
    if (ke === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const ue = 1 / ke;
    return n[0] = se * ue, n[1] = (k * M * m - S * Q * m - k * h * w + o * Q * w + S * h * J - o * M * J) * ue, n[2] = (C * Q * m - k * b * m + k * h * x - o * Q * x - C * h * J + o * b * J) * ue, n[3] = (S * b * m - C * M * m - S * h * x + o * M * x + C * h * w - o * b * w) * ue, n[4] = he * ue, n[5] = (E * Q * m - F * M * m + F * h * w - s * Q * w - E * h * J + s * M * J) * ue, n[6] = (F * b * m - y * Q * m - F * h * x + s * Q * x + y * h * J - s * b * J) * ue, n[7] = (y * M * m - E * b * m + E * h * x - s * M * x - y * h * w + s * b * w) * ue, n[8] = Ce * ue, n[9] = (F * S * m - E * k * m - F * o * w + s * k * w + E * o * J - s * S * J) * ue, n[10] = (y * k * m - F * C * m + F * o * x - s * k * x - y * o * J + s * C * J) * ue, n[11] = (E * C * m - y * S * m - E * o * x + s * S * x + y * o * w - s * C * w) * ue, n[12] = Re * ue, n[13] = (E * k * h - F * S * h + F * o * M - s * k * M - E * o * Q + s * S * Q) * ue, n[14] = (F * C * h - y * k * h - F * o * b + s * k * b + y * o * Q - s * C * Q) * ue, n[15] = (y * S * h - E * C * h + E * o * b - s * S * b - y * o * M + s * C * M) * ue, this;
  }
  scale(n) {
    const s = this.elements, o = n.x, h = n.y, m = n.z;
    return s[0] *= o, s[4] *= h, s[8] *= m, s[1] *= o, s[5] *= h, s[9] *= m, s[2] *= o, s[6] *= h, s[10] *= m, s[3] *= o, s[7] *= h, s[11] *= m, this;
  }
  getMaxScaleOnAxis() {
    const n = this.elements, s = n[0] * n[0] + n[1] * n[1] + n[2] * n[2], o = n[4] * n[4] + n[5] * n[5] + n[6] * n[6], h = n[8] * n[8] + n[9] * n[9] + n[10] * n[10];
    return Math.sqrt(Math.max(s, o, h));
  }
  makeTranslation(n, s, o) {
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
      s,
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
    const s = Math.cos(n), o = Math.sin(n);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      s,
      -o,
      0,
      0,
      o,
      s,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(n) {
    const s = Math.cos(n), o = Math.sin(n);
    return this.set(
      s,
      0,
      o,
      0,
      0,
      1,
      0,
      0,
      -o,
      0,
      s,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(n) {
    const s = Math.cos(n), o = Math.sin(n);
    return this.set(
      s,
      -o,
      0,
      0,
      o,
      s,
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
  makeRotationAxis(n, s) {
    const o = Math.cos(s), h = Math.sin(s), m = 1 - o, y = n.x, C = n.y, b = n.z, x = m * y, E = m * C;
    return this.set(
      x * y + o,
      x * C - h * b,
      x * b + h * C,
      0,
      x * C + h * b,
      E * C + o,
      E * b - h * y,
      0,
      x * b - h * C,
      E * b + h * y,
      m * b * b + o,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(n, s, o) {
    return this.set(
      n,
      0,
      0,
      0,
      0,
      s,
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
  makeShear(n, s, o, h, m, y) {
    return this.set(
      1,
      o,
      m,
      0,
      n,
      1,
      y,
      0,
      s,
      h,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(n, s, o) {
    const h = this.elements, m = s._x, y = s._y, C = s._z, b = s._w, x = m + m, E = y + y, S = C + C, M = m * x, w = m * E, F = m * S, k = y * E, Q = y * S, J = C * S, se = b * x, he = b * E, Ce = b * S, Re = o.x, ke = o.y, ue = o.z;
    return h[0] = (1 - (k + J)) * Re, h[1] = (w + Ce) * Re, h[2] = (F - he) * Re, h[3] = 0, h[4] = (w - Ce) * ke, h[5] = (1 - (M + J)) * ke, h[6] = (Q + se) * ke, h[7] = 0, h[8] = (F + he) * ue, h[9] = (Q - se) * ue, h[10] = (1 - (M + k)) * ue, h[11] = 0, h[12] = n.x, h[13] = n.y, h[14] = n.z, h[15] = 1, this;
  }
  decompose(n, s, o) {
    const h = this.elements;
    let m = cc.set(h[0], h[1], h[2]).length();
    const y = cc.set(h[4], h[5], h[6]).length(), C = cc.set(h[8], h[9], h[10]).length();
    this.determinant() < 0 && (m = -m), n.x = h[12], n.y = h[13], n.z = h[14], Va.copy(this);
    const x = 1 / m, E = 1 / y, S = 1 / C;
    return Va.elements[0] *= x, Va.elements[1] *= x, Va.elements[2] *= x, Va.elements[4] *= E, Va.elements[5] *= E, Va.elements[6] *= E, Va.elements[8] *= S, Va.elements[9] *= S, Va.elements[10] *= S, s.setFromRotationMatrix(Va), o.x = m, o.y = y, o.z = C, this;
  }
  makePerspective(n, s, o, h, m, y, C = Ch) {
    const b = this.elements, x = 2 * m / (s - n), E = 2 * m / (o - h), S = (s + n) / (s - n), M = (o + h) / (o - h);
    let w, F;
    if (C === Ch)
      w = -(y + m) / (y - m), F = -2 * y * m / (y - m);
    else if (C === Y0)
      w = -y / (y - m), F = -y * m / (y - m);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + C);
    return b[0] = x, b[4] = 0, b[8] = S, b[12] = 0, b[1] = 0, b[5] = E, b[9] = M, b[13] = 0, b[2] = 0, b[6] = 0, b[10] = w, b[14] = F, b[3] = 0, b[7] = 0, b[11] = -1, b[15] = 0, this;
  }
  makeOrthographic(n, s, o, h, m, y, C = Ch) {
    const b = this.elements, x = 1 / (s - n), E = 1 / (o - h), S = 1 / (y - m), M = (s + n) * x, w = (o + h) * E;
    let F, k;
    if (C === Ch)
      F = (y + m) * S, k = -2 * S;
    else if (C === Y0)
      F = m * S, k = -1 * S;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + C);
    return b[0] = 2 * x, b[4] = 0, b[8] = 0, b[12] = -M, b[1] = 0, b[5] = 2 * E, b[9] = 0, b[13] = -w, b[2] = 0, b[6] = 0, b[10] = k, b[14] = -F, b[3] = 0, b[7] = 0, b[11] = 0, b[15] = 1, this;
  }
  equals(n) {
    const s = this.elements, o = n.elements;
    for (let h = 0; h < 16; h++)
      if (s[h] !== o[h])
        return !1;
    return !0;
  }
  fromArray(n, s = 0) {
    for (let o = 0; o < 16; o++)
      this.elements[o] = n[o + s];
    return this;
  }
  toArray(n = [], s = 0) {
    const o = this.elements;
    return n[s] = o[0], n[s + 1] = o[1], n[s + 2] = o[2], n[s + 3] = o[3], n[s + 4] = o[4], n[s + 5] = o[5], n[s + 6] = o[6], n[s + 7] = o[7], n[s + 8] = o[8], n[s + 9] = o[9], n[s + 10] = o[10], n[s + 11] = o[11], n[s + 12] = o[12], n[s + 13] = o[13], n[s + 14] = o[14], n[s + 15] = o[15], n;
  }
}
const cc = /* @__PURE__ */ new Me(), Va = /* @__PURE__ */ new Ya(), YE = /* @__PURE__ */ new Me(0, 0, 0), WE = /* @__PURE__ */ new Me(1, 1, 1), eu = /* @__PURE__ */ new Me(), Fh = /* @__PURE__ */ new Me(), Qi = /* @__PURE__ */ new Me(), X0 = /* @__PURE__ */ new Ya(), J0 = /* @__PURE__ */ new If();
class yc {
  constructor(n = 0, s = 0, o = 0, h = yc.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = n, this._y = s, this._z = o, this._order = h;
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
  set(n, s, o, h = this._order) {
    return this._x = n, this._y = s, this._z = o, this._order = h, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(n) {
    return this._x = n._x, this._y = n._y, this._z = n._z, this._order = n._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(n, s = this._order, o = !0) {
    const h = n.elements, m = h[0], y = h[4], C = h[8], b = h[1], x = h[5], E = h[9], S = h[2], M = h[6], w = h[10];
    switch (s) {
      case "XYZ":
        this._y = Math.asin(wi(C, -1, 1)), Math.abs(C) < 0.9999999 ? (this._x = Math.atan2(-E, w), this._z = Math.atan2(-y, m)) : (this._x = Math.atan2(M, x), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-wi(E, -1, 1)), Math.abs(E) < 0.9999999 ? (this._y = Math.atan2(C, w), this._z = Math.atan2(b, x)) : (this._y = Math.atan2(-S, m), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(wi(M, -1, 1)), Math.abs(M) < 0.9999999 ? (this._y = Math.atan2(-S, w), this._z = Math.atan2(-y, x)) : (this._y = 0, this._z = Math.atan2(b, m));
        break;
      case "ZYX":
        this._y = Math.asin(-wi(S, -1, 1)), Math.abs(S) < 0.9999999 ? (this._x = Math.atan2(M, w), this._z = Math.atan2(b, m)) : (this._x = 0, this._z = Math.atan2(-y, x));
        break;
      case "YZX":
        this._z = Math.asin(wi(b, -1, 1)), Math.abs(b) < 0.9999999 ? (this._x = Math.atan2(-E, x), this._y = Math.atan2(-S, m)) : (this._x = 0, this._y = Math.atan2(C, w));
        break;
      case "XZY":
        this._z = Math.asin(-wi(y, -1, 1)), Math.abs(y) < 0.9999999 ? (this._x = Math.atan2(M, x), this._y = Math.atan2(C, m)) : (this._x = Math.atan2(-E, w), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + s);
    }
    return this._order = s, o === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(n, s, o) {
    return X0.makeRotationFromQuaternion(n), this.setFromRotationMatrix(X0, s, o);
  }
  setFromVector3(n, s = this._order) {
    return this.set(n.x, n.y, n.z, s);
  }
  reorder(n) {
    return J0.setFromEuler(this), this.setFromQuaternion(J0, n);
  }
  equals(n) {
    return n._x === this._x && n._y === this._y && n._z === this._z && n._order === this._order;
  }
  fromArray(n) {
    return this._x = n[0], this._y = n[1], this._z = n[2], n[3] !== void 0 && (this._order = n[3]), this._onChangeCallback(), this;
  }
  toArray(n = [], s = 0) {
    return n[s] = this._x, n[s + 1] = this._y, n[s + 2] = this._z, n[s + 3] = this._order, n;
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
yc.DEFAULT_ORDER = "XYZ";
class Yf {
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
let qE = 0;
const Z0 = /* @__PURE__ */ new Me(), fc = /* @__PURE__ */ new If(), el = /* @__PURE__ */ new Ya(), Oh = /* @__PURE__ */ new Me(), Bf = /* @__PURE__ */ new Me(), IE = /* @__PURE__ */ new Me(), QE = /* @__PURE__ */ new If(), K0 = /* @__PURE__ */ new Me(1, 0, 0), $0 = /* @__PURE__ */ new Me(0, 1, 0), ex = /* @__PURE__ */ new Me(0, 0, 1), tx = { type: "added" }, GE = { type: "removed" }, dc = { type: "childadded", child: null }, iv = { type: "childremoved", child: null };
class ys extends Wf {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: qE++ }), this.uuid = qf(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ys.DEFAULT_UP.clone();
    const n = new Me(), s = new yc(), o = new If(), h = new Me(1, 1, 1);
    function m() {
      o.setFromEuler(s, !1);
    }
    function y() {
      s.setFromQuaternion(o, void 0, !1);
    }
    s._onChange(m), o._onChange(y), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: s
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
        value: new Ya()
      },
      normalMatrix: {
        value: new au()
      }
    }), this.matrix = new Ya(), this.matrixWorld = new Ya(), this.matrixAutoUpdate = ys.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ys.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Yf(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
  setRotationFromAxisAngle(n, s) {
    this.quaternion.setFromAxisAngle(n, s);
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
  rotateOnAxis(n, s) {
    return fc.setFromAxisAngle(n, s), this.quaternion.multiply(fc), this;
  }
  rotateOnWorldAxis(n, s) {
    return fc.setFromAxisAngle(n, s), this.quaternion.premultiply(fc), this;
  }
  rotateX(n) {
    return this.rotateOnAxis(K0, n);
  }
  rotateY(n) {
    return this.rotateOnAxis($0, n);
  }
  rotateZ(n) {
    return this.rotateOnAxis(ex, n);
  }
  translateOnAxis(n, s) {
    return Z0.copy(n).applyQuaternion(this.quaternion), this.position.add(Z0.multiplyScalar(s)), this;
  }
  translateX(n) {
    return this.translateOnAxis(K0, n);
  }
  translateY(n) {
    return this.translateOnAxis($0, n);
  }
  translateZ(n) {
    return this.translateOnAxis(ex, n);
  }
  localToWorld(n) {
    return this.updateWorldMatrix(!0, !1), n.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(n) {
    return this.updateWorldMatrix(!0, !1), n.applyMatrix4(el.copy(this.matrixWorld).invert());
  }
  lookAt(n, s, o) {
    n.isVector3 ? Oh.copy(n) : Oh.set(n, s, o);
    const h = this.parent;
    this.updateWorldMatrix(!0, !1), Bf.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? el.lookAt(Bf, Oh, this.up) : el.lookAt(Oh, Bf, this.up), this.quaternion.setFromRotationMatrix(el), h && (el.extractRotation(h.matrixWorld), fc.setFromRotationMatrix(el), this.quaternion.premultiply(fc.invert()));
  }
  add(n) {
    if (arguments.length > 1) {
      for (let s = 0; s < arguments.length; s++)
        this.add(arguments[s]);
      return this;
    }
    return n === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", n), this) : (n && n.isObject3D ? (n.removeFromParent(), n.parent = this, this.children.push(n), n.dispatchEvent(tx), dc.child = n, this.dispatchEvent(dc), dc.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", n), this);
  }
  remove(n) {
    if (arguments.length > 1) {
      for (let o = 0; o < arguments.length; o++)
        this.remove(arguments[o]);
      return this;
    }
    const s = this.children.indexOf(n);
    return s !== -1 && (n.parent = null, this.children.splice(s, 1), n.dispatchEvent(GE), iv.child = n, this.dispatchEvent(iv), iv.child = null), this;
  }
  removeFromParent() {
    const n = this.parent;
    return n !== null && n.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(n) {
    return this.updateWorldMatrix(!0, !1), el.copy(this.matrixWorld).invert(), n.parent !== null && (n.parent.updateWorldMatrix(!0, !1), el.multiply(n.parent.matrixWorld)), n.applyMatrix4(el), n.removeFromParent(), n.parent = this, this.children.push(n), n.updateWorldMatrix(!1, !0), n.dispatchEvent(tx), dc.child = n, this.dispatchEvent(dc), dc.child = null, this;
  }
  getObjectById(n) {
    return this.getObjectByProperty("id", n);
  }
  getObjectByName(n) {
    return this.getObjectByProperty("name", n);
  }
  getObjectByProperty(n, s) {
    if (this[n] === s)
      return this;
    for (let o = 0, h = this.children.length; o < h; o++) {
      const y = this.children[o].getObjectByProperty(n, s);
      if (y !== void 0)
        return y;
    }
  }
  getObjectsByProperty(n, s, o = []) {
    this[n] === s && o.push(this);
    const h = this.children;
    for (let m = 0, y = h.length; m < y; m++)
      h[m].getObjectsByProperty(n, s, o);
    return o;
  }
  getWorldPosition(n) {
    return this.updateWorldMatrix(!0, !1), n.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(n) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bf, n, IE), n;
  }
  getWorldScale(n) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bf, QE, n), n;
  }
  getWorldDirection(n) {
    this.updateWorldMatrix(!0, !1);
    const s = this.matrixWorld.elements;
    return n.set(s[8], s[9], s[10]).normalize();
  }
  raycast() {
  }
  traverse(n) {
    n(this);
    const s = this.children;
    for (let o = 0, h = s.length; o < h; o++)
      s[o].traverse(n);
  }
  traverseVisible(n) {
    if (this.visible === !1)
      return;
    n(this);
    const s = this.children;
    for (let o = 0, h = s.length; o < h; o++)
      s[o].traverseVisible(n);
  }
  traverseAncestors(n) {
    const s = this.parent;
    s !== null && (n(s), s.traverseAncestors(n));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(n) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, n = !0);
    const s = this.children;
    for (let o = 0, h = s.length; o < h; o++) {
      const m = s[o];
      (m.matrixWorldAutoUpdate === !0 || n === !0) && m.updateMatrixWorld(n);
    }
  }
  updateWorldMatrix(n, s) {
    const o = this.parent;
    if (n === !0 && o !== null && o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), s === !0) {
      const h = this.children;
      for (let m = 0, y = h.length; m < y; m++) {
        const C = h[m];
        C.matrixWorldAutoUpdate === !0 && C.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(n) {
    const s = n === void 0 || typeof n == "string", o = {};
    s && (n = {
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
    h.uuid = this.uuid, h.type = this.type, this.name !== "" && (h.name = this.name), this.castShadow === !0 && (h.castShadow = !0), this.receiveShadow === !0 && (h.receiveShadow = !0), this.visible === !1 && (h.visible = !1), this.frustumCulled === !1 && (h.frustumCulled = !1), this.renderOrder !== 0 && (h.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (h.userData = this.userData), h.layers = this.layers.mask, h.matrix = this.matrix.toArray(), h.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (h.matrixAutoUpdate = !1), this.isInstancedMesh && (h.type = "InstancedMesh", h.count = this.count, h.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (h.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (h.type = "BatchedMesh", h.perObjectFrustumCulled = this.perObjectFrustumCulled, h.sortObjects = this.sortObjects, h.drawRanges = this._drawRanges, h.reservedRanges = this._reservedRanges, h.visibility = this._visibility, h.active = this._active, h.bounds = this._bounds.map((C) => ({
      boxInitialized: C.boxInitialized,
      boxMin: C.box.min.toArray(),
      boxMax: C.box.max.toArray(),
      sphereInitialized: C.sphereInitialized,
      sphereRadius: C.sphere.radius,
      sphereCenter: C.sphere.center.toArray()
    })), h.maxGeometryCount = this._maxGeometryCount, h.maxVertexCount = this._maxVertexCount, h.maxIndexCount = this._maxIndexCount, h.geometryInitialized = this._geometryInitialized, h.geometryCount = this._geometryCount, h.matricesTexture = this._matricesTexture.toJSON(n), this.boundingSphere !== null && (h.boundingSphere = {
      center: h.boundingSphere.center.toArray(),
      radius: h.boundingSphere.radius
    }), this.boundingBox !== null && (h.boundingBox = {
      min: h.boundingBox.min.toArray(),
      max: h.boundingBox.max.toArray()
    }));
    function m(C, b) {
      return C[b.uuid] === void 0 && (C[b.uuid] = b.toJSON(n)), b.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? h.background = this.background.toJSON() : this.background.isTexture && (h.background = this.background.toJSON(n).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (h.environment = this.environment.toJSON(n).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      h.geometry = m(n.geometries, this.geometry);
      const C = this.geometry.parameters;
      if (C !== void 0 && C.shapes !== void 0) {
        const b = C.shapes;
        if (Array.isArray(b))
          for (let x = 0, E = b.length; x < E; x++) {
            const S = b[x];
            m(n.shapes, S);
          }
        else
          m(n.shapes, b);
      }
    }
    if (this.isSkinnedMesh && (h.bindMode = this.bindMode, h.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (m(n.skeletons, this.skeleton), h.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const C = [];
        for (let b = 0, x = this.material.length; b < x; b++)
          C.push(m(n.materials, this.material[b]));
        h.material = C;
      } else
        h.material = m(n.materials, this.material);
    if (this.children.length > 0) {
      h.children = [];
      for (let C = 0; C < this.children.length; C++)
        h.children.push(this.children[C].toJSON(n).object);
    }
    if (this.animations.length > 0) {
      h.animations = [];
      for (let C = 0; C < this.animations.length; C++) {
        const b = this.animations[C];
        h.animations.push(m(n.animations, b));
      }
    }
    if (s) {
      const C = y(n.geometries), b = y(n.materials), x = y(n.textures), E = y(n.images), S = y(n.shapes), M = y(n.skeletons), w = y(n.animations), F = y(n.nodes);
      C.length > 0 && (o.geometries = C), b.length > 0 && (o.materials = b), x.length > 0 && (o.textures = x), E.length > 0 && (o.images = E), S.length > 0 && (o.shapes = S), M.length > 0 && (o.skeletons = M), w.length > 0 && (o.animations = w), F.length > 0 && (o.nodes = F);
    }
    return o.object = h, o;
    function y(C) {
      const b = [];
      for (const x in C) {
        const E = C[x];
        delete E.metadata, b.push(E);
      }
      return b;
    }
  }
  clone(n) {
    return new this.constructor().copy(this, n);
  }
  copy(n, s = !0) {
    if (this.name = n.name, this.up.copy(n.up), this.position.copy(n.position), this.rotation.order = n.rotation.order, this.quaternion.copy(n.quaternion), this.scale.copy(n.scale), this.matrix.copy(n.matrix), this.matrixWorld.copy(n.matrixWorld), this.matrixAutoUpdate = n.matrixAutoUpdate, this.matrixWorldAutoUpdate = n.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = n.matrixWorldNeedsUpdate, this.layers.mask = n.layers.mask, this.visible = n.visible, this.castShadow = n.castShadow, this.receiveShadow = n.receiveShadow, this.frustumCulled = n.frustumCulled, this.renderOrder = n.renderOrder, this.animations = n.animations.slice(), this.userData = JSON.parse(JSON.stringify(n.userData)), s === !0)
      for (let o = 0; o < n.children.length; o++) {
        const h = n.children[o];
        this.add(h.clone());
      }
    return this;
  }
}
ys.DEFAULT_UP = /* @__PURE__ */ new Me(0, 1, 0);
ys.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ys.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const zx = {
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
}, tu = { h: 0, s: 0, l: 0 }, Uh = { h: 0, s: 0, l: 0 };
function av(T, n, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? T + (n - T) * 6 * s : s < 1 / 2 ? n : s < 2 / 3 ? T + (n - T) * 6 * (2 / 3 - s) : T;
}
class jh {
  constructor(n, s, o) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(n, s, o);
  }
  set(n, s, o) {
    if (s === void 0 && o === void 0) {
      const h = n;
      h && h.isColor ? this.copy(h) : typeof h == "number" ? this.setHex(h) : typeof h == "string" && this.setStyle(h);
    } else
      this.setRGB(n, s, o);
    return this;
  }
  setScalar(n) {
    return this.r = n, this.g = n, this.b = n, this;
  }
  setHex(n, s = iu) {
    return n = Math.floor(n), this.r = (n >> 16 & 255) / 255, this.g = (n >> 8 & 255) / 255, this.b = (n & 255) / 255, Pa.toWorkingColorSpace(this, s), this;
  }
  setRGB(n, s, o, h = Pa.workingColorSpace) {
    return this.r = n, this.g = s, this.b = o, Pa.toWorkingColorSpace(this, h), this;
  }
  setHSL(n, s, o, h = Pa.workingColorSpace) {
    if (n = AE(n, 1), s = wi(s, 0, 1), o = wi(o, 0, 1), s === 0)
      this.r = this.g = this.b = o;
    else {
      const m = o <= 0.5 ? o * (1 + s) : o + s - o * s, y = 2 * o - m;
      this.r = av(y, m, n + 1 / 3), this.g = av(y, m, n), this.b = av(y, m, n - 1 / 3);
    }
    return Pa.toWorkingColorSpace(this, h), this;
  }
  setStyle(n, s = iu) {
    function o(m) {
      m !== void 0 && parseFloat(m) < 1 && console.warn("THREE.Color: Alpha component of " + n + " will be ignored.");
    }
    let h;
    if (h = /^(\w+)\(([^\)]*)\)/.exec(n)) {
      let m;
      const y = h[1], C = h[2];
      switch (y) {
        case "rgb":
        case "rgba":
          if (m = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(C))
            return o(m[4]), this.setRGB(
              Math.min(255, parseInt(m[1], 10)) / 255,
              Math.min(255, parseInt(m[2], 10)) / 255,
              Math.min(255, parseInt(m[3], 10)) / 255,
              s
            );
          if (m = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(C))
            return o(m[4]), this.setRGB(
              Math.min(100, parseInt(m[1], 10)) / 100,
              Math.min(100, parseInt(m[2], 10)) / 100,
              Math.min(100, parseInt(m[3], 10)) / 100,
              s
            );
          break;
        case "hsl":
        case "hsla":
          if (m = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(C))
            return o(m[4]), this.setHSL(
              parseFloat(m[1]) / 360,
              parseFloat(m[2]) / 100,
              parseFloat(m[3]) / 100,
              s
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + n);
      }
    } else if (h = /^\#([A-Fa-f\d]+)$/.exec(n)) {
      const m = h[1], y = m.length;
      if (y === 3)
        return this.setRGB(
          parseInt(m.charAt(0), 16) / 15,
          parseInt(m.charAt(1), 16) / 15,
          parseInt(m.charAt(2), 16) / 15,
          s
        );
      if (y === 6)
        return this.setHex(parseInt(m, 16), s);
      console.warn("THREE.Color: Invalid hex color " + n);
    } else if (n && n.length > 0)
      return this.setColorName(n, s);
    return this;
  }
  setColorName(n, s = iu) {
    const o = zx[n.toLowerCase()];
    return o !== void 0 ? this.setHex(o, s) : console.warn("THREE.Color: Unknown color " + n), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(n) {
    return this.r = n.r, this.g = n.g, this.b = n.b, this;
  }
  copySRGBToLinear(n) {
    return this.r = mc(n.r), this.g = mc(n.g), this.b = mc(n.b), this;
  }
  copyLinearToSRGB(n) {
    return this.r = Jm(n.r), this.g = Jm(n.g), this.b = Jm(n.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(n = iu) {
    return Pa.fromWorkingColorSpace(qr.copy(this), n), Math.round(wi(qr.r * 255, 0, 255)) * 65536 + Math.round(wi(qr.g * 255, 0, 255)) * 256 + Math.round(wi(qr.b * 255, 0, 255));
  }
  getHexString(n = iu) {
    return ("000000" + this.getHex(n).toString(16)).slice(-6);
  }
  getHSL(n, s = Pa.workingColorSpace) {
    Pa.fromWorkingColorSpace(qr.copy(this), s);
    const o = qr.r, h = qr.g, m = qr.b, y = Math.max(o, h, m), C = Math.min(o, h, m);
    let b, x;
    const E = (C + y) / 2;
    if (C === y)
      b = 0, x = 0;
    else {
      const S = y - C;
      switch (x = E <= 0.5 ? S / (y + C) : S / (2 - y - C), y) {
        case o:
          b = (h - m) / S + (h < m ? 6 : 0);
          break;
        case h:
          b = (m - o) / S + 2;
          break;
        case m:
          b = (o - h) / S + 4;
          break;
      }
      b /= 6;
    }
    return n.h = b, n.s = x, n.l = E, n;
  }
  getRGB(n, s = Pa.workingColorSpace) {
    return Pa.fromWorkingColorSpace(qr.copy(this), s), n.r = qr.r, n.g = qr.g, n.b = qr.b, n;
  }
  getStyle(n = iu) {
    Pa.fromWorkingColorSpace(qr.copy(this), n);
    const s = qr.r, o = qr.g, h = qr.b;
    return n !== iu ? `color(${n} ${s.toFixed(3)} ${o.toFixed(3)} ${h.toFixed(3)})` : `rgb(${Math.round(s * 255)},${Math.round(o * 255)},${Math.round(h * 255)})`;
  }
  offsetHSL(n, s, o) {
    return this.getHSL(tu), this.setHSL(tu.h + n, tu.s + s, tu.l + o);
  }
  add(n) {
    return this.r += n.r, this.g += n.g, this.b += n.b, this;
  }
  addColors(n, s) {
    return this.r = n.r + s.r, this.g = n.g + s.g, this.b = n.b + s.b, this;
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
  lerp(n, s) {
    return this.r += (n.r - this.r) * s, this.g += (n.g - this.g) * s, this.b += (n.b - this.b) * s, this;
  }
  lerpColors(n, s, o) {
    return this.r = n.r + (s.r - n.r) * o, this.g = n.g + (s.g - n.g) * o, this.b = n.b + (s.b - n.b) * o, this;
  }
  lerpHSL(n, s) {
    this.getHSL(tu), n.getHSL(Uh);
    const o = Gm(tu.h, Uh.h, s), h = Gm(tu.s, Uh.s, s), m = Gm(tu.l, Uh.l, s);
    return this.setHSL(o, h, m), this;
  }
  setFromVector3(n) {
    return this.r = n.x, this.g = n.y, this.b = n.z, this;
  }
  applyMatrix3(n) {
    const s = this.r, o = this.g, h = this.b, m = n.elements;
    return this.r = m[0] * s + m[3] * o + m[6] * h, this.g = m[1] * s + m[4] * o + m[7] * h, this.b = m[2] * s + m[5] * o + m[8] * h, this;
  }
  equals(n) {
    return n.r === this.r && n.g === this.g && n.b === this.b;
  }
  fromArray(n, s = 0) {
    return this.r = n[s], this.g = n[s + 1], this.b = n[s + 2], this;
  }
  toArray(n = [], s = 0) {
    return n[s] = this.r, n[s + 1] = this.g, n[s + 2] = this.b, n;
  }
  fromBufferAttribute(n, s) {
    return this.r = n.getX(s), this.g = n.getY(s), this.b = n.getZ(s), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const qr = /* @__PURE__ */ new jh();
jh.NAMES = zx;
let XE = 0;
class wx extends Wf {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: XE++ }), this.uuid = qf(), this.name = "", this.type = "Material", this.blending = w0, this.side = z0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = A0, this.blendDst = N0, this.blendEquation = D0, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new jh(0, 0, 0), this.blendAlpha = 0, this.depthFunc = F0, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = j0, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ac, this.stencilZFail = ac, this.stencilZPass = ac, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
      for (const s in n) {
        const o = n[s];
        if (o === void 0) {
          console.warn(`THREE.Material: parameter '${s}' has value of undefined.`);
          continue;
        }
        const h = this[s];
        if (h === void 0) {
          console.warn(`THREE.Material: '${s}' is not a property of THREE.${this.type}.`);
          continue;
        }
        h && h.isColor ? h.set(o) : h && h.isVector3 && o && o.isVector3 ? h.copy(o) : this[s] = o;
      }
  }
  toJSON(n) {
    const s = n === void 0 || typeof n == "string";
    s && (n = {
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
    o.uuid = this.uuid, o.type = this.type, this.name !== "" && (o.name = this.name), this.color && this.color.isColor && (o.color = this.color.getHex()), this.roughness !== void 0 && (o.roughness = this.roughness), this.metalness !== void 0 && (o.metalness = this.metalness), this.sheen !== void 0 && (o.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (o.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (o.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (o.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (o.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (o.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (o.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (o.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (o.shininess = this.shininess), this.clearcoat !== void 0 && (o.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (o.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (o.clearcoatMap = this.clearcoatMap.toJSON(n).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (o.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(n).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (o.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(n).uuid, o.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (o.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (o.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (o.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (o.iridescenceMap = this.iridescenceMap.toJSON(n).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (o.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(n).uuid), this.anisotropy !== void 0 && (o.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (o.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (o.anisotropyMap = this.anisotropyMap.toJSON(n).uuid), this.map && this.map.isTexture && (o.map = this.map.toJSON(n).uuid), this.matcap && this.matcap.isTexture && (o.matcap = this.matcap.toJSON(n).uuid), this.alphaMap && this.alphaMap.isTexture && (o.alphaMap = this.alphaMap.toJSON(n).uuid), this.lightMap && this.lightMap.isTexture && (o.lightMap = this.lightMap.toJSON(n).uuid, o.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (o.aoMap = this.aoMap.toJSON(n).uuid, o.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (o.bumpMap = this.bumpMap.toJSON(n).uuid, o.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (o.normalMap = this.normalMap.toJSON(n).uuid, o.normalMapType = this.normalMapType, o.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (o.displacementMap = this.displacementMap.toJSON(n).uuid, o.displacementScale = this.displacementScale, o.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (o.roughnessMap = this.roughnessMap.toJSON(n).uuid), this.metalnessMap && this.metalnessMap.isTexture && (o.metalnessMap = this.metalnessMap.toJSON(n).uuid), this.emissiveMap && this.emissiveMap.isTexture && (o.emissiveMap = this.emissiveMap.toJSON(n).uuid), this.specularMap && this.specularMap.isTexture && (o.specularMap = this.specularMap.toJSON(n).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (o.specularIntensityMap = this.specularIntensityMap.toJSON(n).uuid), this.specularColorMap && this.specularColorMap.isTexture && (o.specularColorMap = this.specularColorMap.toJSON(n).uuid), this.envMap && this.envMap.isTexture && (o.envMap = this.envMap.toJSON(n).uuid, this.combine !== void 0 && (o.combine = this.combine)), this.envMapRotation !== void 0 && (o.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (o.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (o.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (o.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (o.gradientMap = this.gradientMap.toJSON(n).uuid), this.transmission !== void 0 && (o.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (o.transmissionMap = this.transmissionMap.toJSON(n).uuid), this.thickness !== void 0 && (o.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (o.thicknessMap = this.thicknessMap.toJSON(n).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (o.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (o.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (o.size = this.size), this.shadowSide !== null && (o.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (o.sizeAttenuation = this.sizeAttenuation), this.blending !== w0 && (o.blending = this.blending), this.side !== z0 && (o.side = this.side), this.vertexColors === !0 && (o.vertexColors = !0), this.opacity < 1 && (o.opacity = this.opacity), this.transparent === !0 && (o.transparent = !0), this.blendSrc !== A0 && (o.blendSrc = this.blendSrc), this.blendDst !== N0 && (o.blendDst = this.blendDst), this.blendEquation !== D0 && (o.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (o.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (o.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (o.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (o.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (o.blendAlpha = this.blendAlpha), this.depthFunc !== F0 && (o.depthFunc = this.depthFunc), this.depthTest === !1 && (o.depthTest = this.depthTest), this.depthWrite === !1 && (o.depthWrite = this.depthWrite), this.colorWrite === !1 && (o.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (o.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== j0 && (o.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (o.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (o.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ac && (o.stencilFail = this.stencilFail), this.stencilZFail !== ac && (o.stencilZFail = this.stencilZFail), this.stencilZPass !== ac && (o.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (o.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (o.rotation = this.rotation), this.polygonOffset === !0 && (o.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (o.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (o.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (o.linewidth = this.linewidth), this.dashSize !== void 0 && (o.dashSize = this.dashSize), this.gapSize !== void 0 && (o.gapSize = this.gapSize), this.scale !== void 0 && (o.scale = this.scale), this.dithering === !0 && (o.dithering = !0), this.alphaTest > 0 && (o.alphaTest = this.alphaTest), this.alphaHash === !0 && (o.alphaHash = !0), this.alphaToCoverage === !0 && (o.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (o.premultipliedAlpha = !0), this.forceSinglePass === !0 && (o.forceSinglePass = !0), this.wireframe === !0 && (o.wireframe = !0), this.wireframeLinewidth > 1 && (o.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (o.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (o.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (o.flatShading = !0), this.visible === !1 && (o.visible = !1), this.toneMapped === !1 && (o.toneMapped = !1), this.fog === !1 && (o.fog = !1), Object.keys(this.userData).length > 0 && (o.userData = this.userData);
    function h(m) {
      const y = [];
      for (const C in m) {
        const b = m[C];
        delete b.metadata, y.push(b);
      }
      return y;
    }
    if (s) {
      const m = h(n.textures), y = h(n.images);
      m.length > 0 && (o.textures = m), y.length > 0 && (o.images = y);
    }
    return o;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.name = n.name, this.blending = n.blending, this.side = n.side, this.vertexColors = n.vertexColors, this.opacity = n.opacity, this.transparent = n.transparent, this.blendSrc = n.blendSrc, this.blendDst = n.blendDst, this.blendEquation = n.blendEquation, this.blendSrcAlpha = n.blendSrcAlpha, this.blendDstAlpha = n.blendDstAlpha, this.blendEquationAlpha = n.blendEquationAlpha, this.blendColor.copy(n.blendColor), this.blendAlpha = n.blendAlpha, this.depthFunc = n.depthFunc, this.depthTest = n.depthTest, this.depthWrite = n.depthWrite, this.stencilWriteMask = n.stencilWriteMask, this.stencilFunc = n.stencilFunc, this.stencilRef = n.stencilRef, this.stencilFuncMask = n.stencilFuncMask, this.stencilFail = n.stencilFail, this.stencilZFail = n.stencilZFail, this.stencilZPass = n.stencilZPass, this.stencilWrite = n.stencilWrite;
    const s = n.clippingPlanes;
    let o = null;
    if (s !== null) {
      const h = s.length;
      o = new Array(h);
      for (let m = 0; m !== h; ++m)
        o[m] = s[m].clone();
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
const tr = /* @__PURE__ */ new Me(), Lh = /* @__PURE__ */ new ms();
class vc {
  constructor(n, s, o = !1) {
    if (Array.isArray(n))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = n, this.itemSize = s, this.count = n !== void 0 ? n.length / s : 0, this.normalized = o, this.usage = V0, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Rx, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(n) {
    n === !0 && this.version++;
  }
  get updateRange() {
    return FE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(n) {
    return this.usage = n, this;
  }
  addUpdateRange(n, s) {
    this.updateRanges.push({ start: n, count: s });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(n) {
    return this.name = n.name, this.array = new n.array.constructor(n.array), this.itemSize = n.itemSize, this.count = n.count, this.normalized = n.normalized, this.usage = n.usage, this.gpuType = n.gpuType, this;
  }
  copyAt(n, s, o) {
    n *= this.itemSize, o *= s.itemSize;
    for (let h = 0, m = this.itemSize; h < m; h++)
      this.array[n + h] = s.array[o + h];
    return this;
  }
  copyArray(n) {
    return this.array.set(n), this;
  }
  applyMatrix3(n) {
    if (this.itemSize === 2)
      for (let s = 0, o = this.count; s < o; s++)
        Lh.fromBufferAttribute(this, s), Lh.applyMatrix3(n), this.setXY(s, Lh.x, Lh.y);
    else if (this.itemSize === 3)
      for (let s = 0, o = this.count; s < o; s++)
        tr.fromBufferAttribute(this, s), tr.applyMatrix3(n), this.setXYZ(s, tr.x, tr.y, tr.z);
    return this;
  }
  applyMatrix4(n) {
    for (let s = 0, o = this.count; s < o; s++)
      tr.fromBufferAttribute(this, s), tr.applyMatrix4(n), this.setXYZ(s, tr.x, tr.y, tr.z);
    return this;
  }
  applyNormalMatrix(n) {
    for (let s = 0, o = this.count; s < o; s++)
      tr.fromBufferAttribute(this, s), tr.applyNormalMatrix(n), this.setXYZ(s, tr.x, tr.y, tr.z);
    return this;
  }
  transformDirection(n) {
    for (let s = 0, o = this.count; s < o; s++)
      tr.fromBufferAttribute(this, s), tr.transformDirection(n), this.setXYZ(s, tr.x, tr.y, tr.z);
    return this;
  }
  set(n, s = 0) {
    return this.array.set(n, s), this;
  }
  getComponent(n, s) {
    let o = this.array[n * this.itemSize + s];
    return this.normalized && (o = Uf(o, this.array)), o;
  }
  setComponent(n, s, o) {
    return this.normalized && (o = Mi(o, this.array)), this.array[n * this.itemSize + s] = o, this;
  }
  getX(n) {
    let s = this.array[n * this.itemSize];
    return this.normalized && (s = Uf(s, this.array)), s;
  }
  setX(n, s) {
    return this.normalized && (s = Mi(s, this.array)), this.array[n * this.itemSize] = s, this;
  }
  getY(n) {
    let s = this.array[n * this.itemSize + 1];
    return this.normalized && (s = Uf(s, this.array)), s;
  }
  setY(n, s) {
    return this.normalized && (s = Mi(s, this.array)), this.array[n * this.itemSize + 1] = s, this;
  }
  getZ(n) {
    let s = this.array[n * this.itemSize + 2];
    return this.normalized && (s = Uf(s, this.array)), s;
  }
  setZ(n, s) {
    return this.normalized && (s = Mi(s, this.array)), this.array[n * this.itemSize + 2] = s, this;
  }
  getW(n) {
    let s = this.array[n * this.itemSize + 3];
    return this.normalized && (s = Uf(s, this.array)), s;
  }
  setW(n, s) {
    return this.normalized && (s = Mi(s, this.array)), this.array[n * this.itemSize + 3] = s, this;
  }
  setXY(n, s, o) {
    return n *= this.itemSize, this.normalized && (s = Mi(s, this.array), o = Mi(o, this.array)), this.array[n + 0] = s, this.array[n + 1] = o, this;
  }
  setXYZ(n, s, o, h) {
    return n *= this.itemSize, this.normalized && (s = Mi(s, this.array), o = Mi(o, this.array), h = Mi(h, this.array)), this.array[n + 0] = s, this.array[n + 1] = o, this.array[n + 2] = h, this;
  }
  setXYZW(n, s, o, h, m) {
    return n *= this.itemSize, this.normalized && (s = Mi(s, this.array), o = Mi(o, this.array), h = Mi(h, this.array), m = Mi(m, this.array)), this.array[n + 0] = s, this.array[n + 1] = o, this.array[n + 2] = h, this.array[n + 3] = m, this;
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
    return this.name !== "" && (n.name = this.name), this.usage !== V0 && (n.usage = this.usage), n;
  }
}
class JE extends vc {
  constructor(n, s, o) {
    super(new Uint16Array(n), s, o);
  }
}
class ZE extends vc {
  constructor(n, s, o) {
    super(new Uint32Array(n), s, o);
  }
}
class KE extends vc {
  constructor(n, s, o) {
    super(new Float32Array(n), s, o);
  }
}
let $E = 0;
const Sa = /* @__PURE__ */ new Ya(), sv = /* @__PURE__ */ new ys(), hc = /* @__PURE__ */ new Me(), Gi = /* @__PURE__ */ new Qf(), Hf = /* @__PURE__ */ new Qf(), Sr = /* @__PURE__ */ new Me();
class wv extends Wf {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: $E++ }), this.uuid = qf(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(n) {
    return Array.isArray(n) ? this.index = new (NE(n) ? ZE : JE)(n, 1) : this.index = n, this;
  }
  getAttribute(n) {
    return this.attributes[n];
  }
  setAttribute(n, s) {
    return this.attributes[n] = s, this;
  }
  deleteAttribute(n) {
    return delete this.attributes[n], this;
  }
  hasAttribute(n) {
    return this.attributes[n] !== void 0;
  }
  addGroup(n, s, o = 0) {
    this.groups.push({
      start: n,
      count: s,
      materialIndex: o
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(n, s) {
    this.drawRange.start = n, this.drawRange.count = s;
  }
  applyMatrix4(n) {
    const s = this.attributes.position;
    s !== void 0 && (s.applyMatrix4(n), s.needsUpdate = !0);
    const o = this.attributes.normal;
    if (o !== void 0) {
      const m = new au().getNormalMatrix(n);
      o.applyNormalMatrix(m), o.needsUpdate = !0;
    }
    const h = this.attributes.tangent;
    return h !== void 0 && (h.transformDirection(n), h.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(n) {
    return Sa.makeRotationFromQuaternion(n), this.applyMatrix4(Sa), this;
  }
  rotateX(n) {
    return Sa.makeRotationX(n), this.applyMatrix4(Sa), this;
  }
  rotateY(n) {
    return Sa.makeRotationY(n), this.applyMatrix4(Sa), this;
  }
  rotateZ(n) {
    return Sa.makeRotationZ(n), this.applyMatrix4(Sa), this;
  }
  translate(n, s, o) {
    return Sa.makeTranslation(n, s, o), this.applyMatrix4(Sa), this;
  }
  scale(n, s, o) {
    return Sa.makeScale(n, s, o), this.applyMatrix4(Sa), this;
  }
  lookAt(n) {
    return sv.lookAt(n), sv.updateMatrix(), this.applyMatrix4(sv.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(hc).negate(), this.translate(hc.x, hc.y, hc.z), this;
  }
  setFromPoints(n) {
    const s = [];
    for (let o = 0, h = n.length; o < h; o++) {
      const m = n[o];
      s.push(m.x, m.y, m.z || 0);
    }
    return this.setAttribute("position", new KE(s, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Qf());
    const n = this.attributes.position, s = this.morphAttributes.position;
    if (n && n.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new Me(-1 / 0, -1 / 0, -1 / 0),
        new Me(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (n !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(n), s)
        for (let o = 0, h = s.length; o < h; o++) {
          const m = s[o];
          Gi.setFromBufferAttribute(m), this.morphTargetsRelative ? (Sr.addVectors(this.boundingBox.min, Gi.min), this.boundingBox.expandByPoint(Sr), Sr.addVectors(this.boundingBox.max, Gi.max), this.boundingBox.expandByPoint(Sr)) : (this.boundingBox.expandByPoint(Gi.min), this.boundingBox.expandByPoint(Gi.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new jE());
    const n = this.attributes.position, s = this.morphAttributes.position;
    if (n && n.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new Me(), 1 / 0);
      return;
    }
    if (n) {
      const o = this.boundingSphere.center;
      if (Gi.setFromBufferAttribute(n), s)
        for (let m = 0, y = s.length; m < y; m++) {
          const C = s[m];
          Hf.setFromBufferAttribute(C), this.morphTargetsRelative ? (Sr.addVectors(Gi.min, Hf.min), Gi.expandByPoint(Sr), Sr.addVectors(Gi.max, Hf.max), Gi.expandByPoint(Sr)) : (Gi.expandByPoint(Hf.min), Gi.expandByPoint(Hf.max));
        }
      Gi.getCenter(o);
      let h = 0;
      for (let m = 0, y = n.count; m < y; m++)
        Sr.fromBufferAttribute(n, m), h = Math.max(h, o.distanceToSquared(Sr));
      if (s)
        for (let m = 0, y = s.length; m < y; m++) {
          const C = s[m], b = this.morphTargetsRelative;
          for (let x = 0, E = C.count; x < E; x++)
            Sr.fromBufferAttribute(C, x), b && (hc.fromBufferAttribute(n, x), Sr.add(hc)), h = Math.max(h, o.distanceToSquared(Sr));
        }
      this.boundingSphere.radius = Math.sqrt(h), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const n = this.index, s = this.attributes;
    if (n === null || s.position === void 0 || s.normal === void 0 || s.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const o = s.position, h = s.normal, m = s.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new vc(new Float32Array(4 * o.count), 4));
    const y = this.getAttribute("tangent"), C = [], b = [];
    for (let ce = 0; ce < o.count; ce++)
      C[ce] = new Me(), b[ce] = new Me();
    const x = new Me(), E = new Me(), S = new Me(), M = new ms(), w = new ms(), F = new ms(), k = new Me(), Q = new Me();
    function J(ce, Ke, xe) {
      x.fromBufferAttribute(o, ce), E.fromBufferAttribute(o, Ke), S.fromBufferAttribute(o, xe), M.fromBufferAttribute(m, ce), w.fromBufferAttribute(m, Ke), F.fromBufferAttribute(m, xe), E.sub(x), S.sub(x), w.sub(M), F.sub(M);
      const ze = 1 / (w.x * F.y - F.x * w.y);
      isFinite(ze) && (k.copy(E).multiplyScalar(F.y).addScaledVector(S, -w.y).multiplyScalar(ze), Q.copy(S).multiplyScalar(w.x).addScaledVector(E, -F.x).multiplyScalar(ze), C[ce].add(k), C[Ke].add(k), C[xe].add(k), b[ce].add(Q), b[Ke].add(Q), b[xe].add(Q));
    }
    let se = this.groups;
    se.length === 0 && (se = [{
      start: 0,
      count: n.count
    }]);
    for (let ce = 0, Ke = se.length; ce < Ke; ++ce) {
      const xe = se[ce], ze = xe.start, Te = xe.count;
      for (let de = ze, Ue = ze + Te; de < Ue; de += 3)
        J(
          n.getX(de + 0),
          n.getX(de + 1),
          n.getX(de + 2)
        );
    }
    const he = new Me(), Ce = new Me(), Re = new Me(), ke = new Me();
    function ue(ce) {
      Re.fromBufferAttribute(h, ce), ke.copy(Re);
      const Ke = C[ce];
      he.copy(Ke), he.sub(Re.multiplyScalar(Re.dot(Ke))).normalize(), Ce.crossVectors(ke, Ke);
      const ze = Ce.dot(b[ce]) < 0 ? -1 : 1;
      y.setXYZW(ce, he.x, he.y, he.z, ze);
    }
    for (let ce = 0, Ke = se.length; ce < Ke; ++ce) {
      const xe = se[ce], ze = xe.start, Te = xe.count;
      for (let de = ze, Ue = ze + Te; de < Ue; de += 3)
        ue(n.getX(de + 0)), ue(n.getX(de + 1)), ue(n.getX(de + 2));
    }
  }
  computeVertexNormals() {
    const n = this.index, s = this.getAttribute("position");
    if (s !== void 0) {
      let o = this.getAttribute("normal");
      if (o === void 0)
        o = new vc(new Float32Array(s.count * 3), 3), this.setAttribute("normal", o);
      else
        for (let M = 0, w = o.count; M < w; M++)
          o.setXYZ(M, 0, 0, 0);
      const h = new Me(), m = new Me(), y = new Me(), C = new Me(), b = new Me(), x = new Me(), E = new Me(), S = new Me();
      if (n)
        for (let M = 0, w = n.count; M < w; M += 3) {
          const F = n.getX(M + 0), k = n.getX(M + 1), Q = n.getX(M + 2);
          h.fromBufferAttribute(s, F), m.fromBufferAttribute(s, k), y.fromBufferAttribute(s, Q), E.subVectors(y, m), S.subVectors(h, m), E.cross(S), C.fromBufferAttribute(o, F), b.fromBufferAttribute(o, k), x.fromBufferAttribute(o, Q), C.add(E), b.add(E), x.add(E), o.setXYZ(F, C.x, C.y, C.z), o.setXYZ(k, b.x, b.y, b.z), o.setXYZ(Q, x.x, x.y, x.z);
        }
      else
        for (let M = 0, w = s.count; M < w; M += 3)
          h.fromBufferAttribute(s, M + 0), m.fromBufferAttribute(s, M + 1), y.fromBufferAttribute(s, M + 2), E.subVectors(y, m), S.subVectors(h, m), E.cross(S), o.setXYZ(M + 0, E.x, E.y, E.z), o.setXYZ(M + 1, E.x, E.y, E.z), o.setXYZ(M + 2, E.x, E.y, E.z);
      this.normalizeNormals(), o.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const n = this.attributes.normal;
    for (let s = 0, o = n.count; s < o; s++)
      Sr.fromBufferAttribute(n, s), Sr.normalize(), n.setXYZ(s, Sr.x, Sr.y, Sr.z);
  }
  toNonIndexed() {
    function n(C, b) {
      const x = C.array, E = C.itemSize, S = C.normalized, M = new x.constructor(b.length * E);
      let w = 0, F = 0;
      for (let k = 0, Q = b.length; k < Q; k++) {
        C.isInterleavedBufferAttribute ? w = b[k] * C.data.stride + C.offset : w = b[k] * E;
        for (let J = 0; J < E; J++)
          M[F++] = x[w++];
      }
      return new vc(M, E, S);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const s = new wv(), o = this.index.array, h = this.attributes;
    for (const C in h) {
      const b = h[C], x = n(b, o);
      s.setAttribute(C, x);
    }
    const m = this.morphAttributes;
    for (const C in m) {
      const b = [], x = m[C];
      for (let E = 0, S = x.length; E < S; E++) {
        const M = x[E], w = n(M, o);
        b.push(w);
      }
      s.morphAttributes[C] = b;
    }
    s.morphTargetsRelative = this.morphTargetsRelative;
    const y = this.groups;
    for (let C = 0, b = y.length; C < b; C++) {
      const x = y[C];
      s.addGroup(x.start, x.count, x.materialIndex);
    }
    return s;
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
      const b = this.parameters;
      for (const x in b)
        b[x] !== void 0 && (n[x] = b[x]);
      return n;
    }
    n.data = { attributes: {} };
    const s = this.index;
    s !== null && (n.data.index = {
      type: s.array.constructor.name,
      array: Array.prototype.slice.call(s.array)
    });
    const o = this.attributes;
    for (const b in o) {
      const x = o[b];
      n.data.attributes[b] = x.toJSON(n.data);
    }
    const h = {};
    let m = !1;
    for (const b in this.morphAttributes) {
      const x = this.morphAttributes[b], E = [];
      for (let S = 0, M = x.length; S < M; S++) {
        const w = x[S];
        E.push(w.toJSON(n.data));
      }
      E.length > 0 && (h[b] = E, m = !0);
    }
    m && (n.data.morphAttributes = h, n.data.morphTargetsRelative = this.morphTargetsRelative);
    const y = this.groups;
    y.length > 0 && (n.data.groups = JSON.parse(JSON.stringify(y)));
    const C = this.boundingSphere;
    return C !== null && (n.data.boundingSphere = {
      center: C.center.toArray(),
      radius: C.radius
    }), n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const s = {};
    this.name = n.name;
    const o = n.index;
    o !== null && this.setIndex(o.clone(s));
    const h = n.attributes;
    for (const x in h) {
      const E = h[x];
      this.setAttribute(x, E.clone(s));
    }
    const m = n.morphAttributes;
    for (const x in m) {
      const E = [], S = m[x];
      for (let M = 0, w = S.length; M < w; M++)
        E.push(S[M].clone(s));
      this.morphAttributes[x] = E;
    }
    this.morphTargetsRelative = n.morphTargetsRelative;
    const y = n.groups;
    for (let x = 0, E = y.length; x < E; x++) {
      const S = y[x];
      this.addGroup(S.start, S.count, S.materialIndex);
    }
    const C = n.boundingBox;
    C !== null && (this.boundingBox = C.clone());
    const b = n.boundingSphere;
    return b !== null && (this.boundingSphere = b.clone()), this.drawRange.start = n.drawRange.start, this.drawRange.count = n.drawRange.count, this.userData = n.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
function eR(T) {
  const n = {};
  for (const s in T) {
    n[s] = {};
    for (const o in T[s]) {
      const h = T[s][o];
      h && (h.isColor || h.isMatrix3 || h.isMatrix4 || h.isVector2 || h.isVector3 || h.isVector4 || h.isTexture || h.isQuaternion) ? h.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), n[s][o] = null) : n[s][o] = h.clone() : Array.isArray(h) ? n[s][o] = h.slice() : n[s][o] = h;
    }
  }
  return n;
}
function tR(T) {
  const n = [];
  for (let s = 0; s < T.length; s++)
    n.push(T[s].clone());
  return n;
}
var nR = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, rR = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Dx extends wx {
  constructor(n) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = nR, this.fragmentShader = rR, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(n), this.fragmentShader = n.fragmentShader, this.vertexShader = n.vertexShader, this.uniforms = eR(n.uniforms), this.uniformsGroups = tR(n.uniformsGroups), this.defines = Object.assign({}, n.defines), this.wireframe = n.wireframe, this.wireframeLinewidth = n.wireframeLinewidth, this.fog = n.fog, this.lights = n.lights, this.clipping = n.clipping, this.extensions = Object.assign({}, n.extensions), this.glslVersion = n.glslVersion, this;
  }
  toJSON(n) {
    const s = super.toJSON(n);
    s.glslVersion = this.glslVersion, s.uniforms = {};
    for (const h in this.uniforms) {
      const y = this.uniforms[h].value;
      y && y.isTexture ? s.uniforms[h] = {
        type: "t",
        value: y.toJSON(n).uuid
      } : y && y.isColor ? s.uniforms[h] = {
        type: "c",
        value: y.getHex()
      } : y && y.isVector2 ? s.uniforms[h] = {
        type: "v2",
        value: y.toArray()
      } : y && y.isVector3 ? s.uniforms[h] = {
        type: "v3",
        value: y.toArray()
      } : y && y.isVector4 ? s.uniforms[h] = {
        type: "v4",
        value: y.toArray()
      } : y && y.isMatrix3 ? s.uniforms[h] = {
        type: "m3",
        value: y.toArray()
      } : y && y.isMatrix4 ? s.uniforms[h] = {
        type: "m4",
        value: y.toArray()
      } : s.uniforms[h] = {
        value: y
      };
    }
    Object.keys(this.defines).length > 0 && (s.defines = this.defines), s.vertexShader = this.vertexShader, s.fragmentShader = this.fragmentShader, s.lights = this.lights, s.clipping = this.clipping;
    const o = {};
    for (const h in this.extensions)
      this.extensions[h] === !0 && (o[h] = !0);
    return Object.keys(o).length > 0 && (s.extensions = o), s;
  }
}
class Ax extends vs {
  constructor(n, s, o, h, m, y, C, b, x, E) {
    if (E = E !== void 0 ? E : Qm, E !== Qm && E !== k0)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    o === void 0 && E === Qm && (o = CE), o === void 0 && E === k0 && (o = zE), super(null, h, m, y, C, b, E, o, x), this.isDepthTexture = !0, this.image = { width: n, height: s }, this.magFilter = C !== void 0 ? C : L0, this.minFilter = b !== void 0 ? b : L0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(n) {
    return super.copy(n), this.compareFunction = n.compareFunction, this;
  }
  toJSON(n) {
    const s = super.toJSON(n);
    return this.compareFunction !== null && (s.compareFunction = this.compareFunction), s;
  }
}
const iR = /* @__PURE__ */ new Ax(1, 1);
iR.compareFunction = DE;
class aR extends ys {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new yc(), this.environmentIntensity = 1, this.environmentRotation = new yc(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(n, s) {
    return super.copy(n, s), n.background !== null && (this.background = n.background.clone()), n.environment !== null && (this.environment = n.environment.clone()), n.fog !== null && (this.fog = n.fog.clone()), this.backgroundBlurriness = n.backgroundBlurriness, this.backgroundIntensity = n.backgroundIntensity, this.backgroundRotation.copy(n.backgroundRotation), this.environmentIntensity = n.environmentIntensity, this.environmentRotation.copy(n.environmentRotation), n.overrideMaterial !== null && (this.overrideMaterial = n.overrideMaterial.clone()), this.matrixAutoUpdate = n.matrixAutoUpdate, this;
  }
  toJSON(n) {
    const s = super.toJSON(n);
    return this.fog !== null && (s.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (s.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (s.object.backgroundIntensity = this.backgroundIntensity), s.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (s.object.environmentIntensity = this.environmentIntensity), s.object.environmentRotation = this.environmentRotation.toArray(), s;
  }
}
class sR extends Dx {
  constructor(n) {
    super(n), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
const nx = /* @__PURE__ */ new Ya();
class lR {
  constructor(n, s, o = 0, h = 1 / 0) {
    this.ray = new VE(n, s), this.near = o, this.far = h, this.camera = null, this.layers = new Yf(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(n, s) {
    this.ray.set(n, s);
  }
  setFromCamera(n, s) {
    s.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(s.matrixWorld), this.ray.direction.set(n.x, n.y, 0.5).unproject(s).sub(this.ray.origin).normalize(), this.camera = s) : s.isOrthographicCamera ? (this.ray.origin.set(n.x, n.y, (s.near + s.far) / (s.near - s.far)).unproject(s), this.ray.direction.set(0, 0, -1).transformDirection(s.matrixWorld), this.camera = s) : console.error("THREE.Raycaster: Unsupported camera type: " + s.type);
  }
  setFromXRController(n) {
    return nx.identity().extractRotation(n.matrixWorld), this.ray.origin.setFromMatrixPosition(n.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(nx), this;
  }
  intersectObject(n, s = !0, o = []) {
    return _v(n, this, o, s), o.sort(rx), o;
  }
  intersectObjects(n, s = !0, o = []) {
    for (let h = 0, m = n.length; h < m; h++)
      _v(n[h], this, o, s);
    return o.sort(rx), o;
  }
}
function rx(T, n) {
  return T.distance - n.distance;
}
function _v(T, n, s, o) {
  if (T.layers.test(n.layers) && T.raycast(n, s), o === !0) {
    const h = T.children;
    for (let m = 0, y = h.length; m < y; m++)
      _v(h[m], n, s, !0);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Sx
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Sx);
var Ev = { exports: {} }, nu = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ix;
function uR() {
  return ix || (ix = 1, nu.ConcurrentRoot = 1, nu.ContinuousEventPriority = 4, nu.DefaultEventPriority = 16, nu.DiscreteEventPriority = 1, nu.IdleEventPriority = 536870912, nu.LegacyRoot = 0), nu;
}
var ru = {};
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ax;
function oR() {
  return ax || (ax = 1, process.env.NODE_ENV !== "production" && function() {
    var T = (
      /*                        */
      1
    ), n = (
      /*            */
      4
    ), s = (
      /*                    */
      16
    ), o = (
      /*                       */
      536870912
    ), h = T, m = n, y = s, C = o, b = 0, x = 1;
    ru.ConcurrentRoot = x, ru.ContinuousEventPriority = m, ru.DefaultEventPriority = y, ru.DiscreteEventPriority = h, ru.IdleEventPriority = C, ru.LegacyRoot = b;
  }()), ru;
}
process.env.NODE_ENV === "production" ? Ev.exports = uR() : Ev.exports = oR();
var Vf = Ev.exports;
function cR(T) {
  let n;
  const s = /* @__PURE__ */ new Set(), o = (x, E) => {
    const S = typeof x == "function" ? x(n) : x;
    if (S !== n) {
      const M = n;
      n = E ? S : Object.assign({}, n, S), s.forEach((w) => w(n, M));
    }
  }, h = () => n, m = (x, E = h, S = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let M = E(n);
    function w() {
      const F = E(n);
      if (!S(M, F)) {
        const k = M;
        x(M = F, k);
      }
    }
    return s.add(w), () => s.delete(w);
  }, b = { setState: o, getState: h, subscribe: (x, E, S) => E || S ? m(x, E, S) : (s.add(x), () => s.delete(x)), destroy: () => s.clear() };
  return n = T(o, h, b), b;
}
const fR = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), sx = fR ? tt.useEffect : tt.useLayoutEffect;
function dR(T) {
  const n = typeof T == "function" ? cR(T) : T, s = (o = n.getState, h = Object.is) => {
    const [, m] = tt.useReducer((Q) => Q + 1, 0), y = n.getState(), C = tt.useRef(y), b = tt.useRef(o), x = tt.useRef(h), E = tt.useRef(!1), S = tt.useRef();
    S.current === void 0 && (S.current = o(y));
    let M, w = !1;
    (C.current !== y || b.current !== o || x.current !== h || E.current) && (M = o(y), w = !h(S.current, M)), sx(() => {
      w && (S.current = M), C.current = y, b.current = o, x.current = h, E.current = !1;
    });
    const F = tt.useRef(y);
    sx(() => {
      const Q = () => {
        try {
          const se = n.getState(), he = b.current(se);
          x.current(S.current, he) || (C.current = se, S.current = he, m());
        } catch {
          E.current = !0, m();
        }
      }, J = n.subscribe(Q);
      return n.getState() !== F.current && Q(), J;
    }, []);
    const k = w ? M : S.current;
    return tt.useDebugValue(k), k;
  };
  return Object.assign(s, n), s[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const o = [s, n];
    return {
      next() {
        const h = o.length <= 0;
        return { value: o.shift(), done: h };
      }
    };
  }, s;
}
var Rv = { exports: {} }, kh = { exports: {} }, lv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lx;
function hR() {
  return lx || (lx = 1, function(T) {
    function n(H, ie) {
      var ee = H.length;
      H.push(ie);
      e:
        for (; 0 < ee; ) {
          var U = ee - 1 >>> 1, j = H[U];
          if (0 < h(j, ie))
            H[U] = ie, H[ee] = j, ee = U;
          else
            break e;
        }
    }
    function s(H) {
      return H.length === 0 ? null : H[0];
    }
    function o(H) {
      if (H.length === 0)
        return null;
      var ie = H[0], ee = H.pop();
      if (ee !== ie) {
        H[0] = ee;
        e:
          for (var U = 0, j = H.length, je = j >>> 1; U < je; ) {
            var Pe = 2 * (U + 1) - 1, Je = H[Pe], Ve = Pe + 1, at = H[Ve];
            if (0 > h(Je, ee))
              Ve < j && 0 > h(at, Je) ? (H[U] = at, H[Ve] = ee, U = Ve) : (H[U] = Je, H[Pe] = ee, U = Pe);
            else if (Ve < j && 0 > h(at, ee))
              H[U] = at, H[Ve] = ee, U = Ve;
            else
              break e;
          }
      }
      return ie;
    }
    function h(H, ie) {
      var ee = H.sortIndex - ie.sortIndex;
      return ee !== 0 ? ee : H.id - ie.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      T.unstable_now = function() {
        return m.now();
      };
    } else {
      var y = Date, C = y.now();
      T.unstable_now = function() {
        return y.now() - C;
      };
    }
    var b = [], x = [], E = 1, S = null, M = 3, w = !1, F = !1, k = !1, Q = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function he(H) {
      for (var ie = s(x); ie !== null; ) {
        if (ie.callback === null)
          o(x);
        else if (ie.startTime <= H)
          o(x), ie.sortIndex = ie.expirationTime, n(b, ie);
        else
          break;
        ie = s(x);
      }
    }
    function Ce(H) {
      if (k = !1, he(H), !F)
        if (s(b) !== null)
          F = !0, ut(Re);
        else {
          var ie = s(x);
          ie !== null && _e(Ce, ie.startTime - H);
        }
    }
    function Re(H, ie) {
      F = !1, k && (k = !1, J(ce), ce = -1), w = !0;
      var ee = M;
      try {
        for (he(ie), S = s(b); S !== null && (!(S.expirationTime > ie) || H && !ze()); ) {
          var U = S.callback;
          if (typeof U == "function") {
            S.callback = null, M = S.priorityLevel;
            var j = U(S.expirationTime <= ie);
            ie = T.unstable_now(), typeof j == "function" ? S.callback = j : S === s(b) && o(b), he(ie);
          } else
            o(b);
          S = s(b);
        }
        if (S !== null)
          var je = !0;
        else {
          var Pe = s(x);
          Pe !== null && _e(Ce, Pe.startTime - ie), je = !1;
        }
        return je;
      } finally {
        S = null, M = ee, w = !1;
      }
    }
    var ke = !1, ue = null, ce = -1, Ke = 5, xe = -1;
    function ze() {
      return !(T.unstable_now() - xe < Ke);
    }
    function Te() {
      if (ue !== null) {
        var H = T.unstable_now();
        xe = H;
        var ie = !0;
        try {
          ie = ue(!0, H);
        } finally {
          ie ? de() : (ke = !1, ue = null);
        }
      } else
        ke = !1;
    }
    var de;
    if (typeof se == "function")
      de = function() {
        se(Te);
      };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), ft = Ue.port2;
      Ue.port1.onmessage = Te, de = function() {
        ft.postMessage(null);
      };
    } else
      de = function() {
        Q(Te, 0);
      };
    function ut(H) {
      ue = H, ke || (ke = !0, de());
    }
    function _e(H, ie) {
      ce = Q(function() {
        H(T.unstable_now());
      }, ie);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, T.unstable_continueExecution = function() {
      F || w || (F = !0, ut(Re));
    }, T.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ke = 0 < H ? Math.floor(1e3 / H) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, T.unstable_getFirstCallbackNode = function() {
      return s(b);
    }, T.unstable_next = function(H) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var ie = 3;
          break;
        default:
          ie = M;
      }
      var ee = M;
      M = ie;
      try {
        return H();
      } finally {
        M = ee;
      }
    }, T.unstable_pauseExecution = function() {
    }, T.unstable_requestPaint = function() {
    }, T.unstable_runWithPriority = function(H, ie) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var ee = M;
      M = H;
      try {
        return ie();
      } finally {
        M = ee;
      }
    }, T.unstable_scheduleCallback = function(H, ie, ee) {
      var U = T.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? U + ee : U) : ee = U, H) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = ee + j, H = { id: E++, callback: ie, priorityLevel: H, startTime: ee, expirationTime: j, sortIndex: -1 }, ee > U ? (H.sortIndex = ee, n(x, H), s(b) === null && H === s(x) && (k ? (J(ce), ce = -1) : k = !0, _e(Ce, ee - U))) : (H.sortIndex = j, n(b, H), F || w || (F = !0, ut(Re))), H;
    }, T.unstable_shouldYield = ze, T.unstable_wrapCallback = function(H) {
      var ie = M;
      return function() {
        var ee = M;
        M = ie;
        try {
          return H.apply(this, arguments);
        } finally {
          M = ee;
        }
      };
    };
  }(lv)), lv;
}
var uv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ux;
function pR() {
  return ux || (ux = 1, function(T) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = !1, s = !1, o = 5;
      function h(G, le) {
        var we = G.length;
        G.push(le), C(G, le, we);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function y(G) {
        if (G.length === 0)
          return null;
        var le = G[0], we = G.pop();
        return we !== le && (G[0] = we, b(G, we, 0)), le;
      }
      function C(G, le, we) {
        for (var Qe = we; Qe > 0; ) {
          var Fe = Qe - 1 >>> 1, It = G[Fe];
          if (x(It, le) > 0)
            G[Fe] = le, G[Qe] = It, Qe = Fe;
          else
            return;
        }
      }
      function b(G, le, we) {
        for (var Qe = we, Fe = G.length, It = Fe >>> 1; Qe < It; ) {
          var Rt = (Qe + 1) * 2 - 1, Ye = G[Rt], pe = Rt + 1, xn = G[pe];
          if (x(Ye, le) < 0)
            pe < Fe && x(xn, Ye) < 0 ? (G[Qe] = xn, G[pe] = le, Qe = pe) : (G[Qe] = Ye, G[Rt] = le, Qe = Rt);
          else if (pe < Fe && x(xn, le) < 0)
            G[Qe] = xn, G[pe] = le, Qe = pe;
          else
            return;
        }
      }
      function x(G, le) {
        var we = G.sortIndex - le.sortIndex;
        return we !== 0 ? we : G.id - le.id;
      }
      var E = 1, S = 2, M = 3, w = 4, F = 5;
      function k(G, le) {
      }
      var Q = typeof performance == "object" && typeof performance.now == "function";
      if (Q) {
        var J = performance;
        T.unstable_now = function() {
          return J.now();
        };
      } else {
        var se = Date, he = se.now();
        T.unstable_now = function() {
          return se.now() - he;
        };
      }
      var Ce = 1073741823, Re = -1, ke = 250, ue = 5e3, ce = 1e4, Ke = Ce, xe = [], ze = [], Te = 1, de = null, Ue = M, ft = !1, ut = !1, _e = !1, H = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function U(G) {
        for (var le = m(ze); le !== null; ) {
          if (le.callback === null)
            y(ze);
          else if (le.startTime <= G)
            y(ze), le.sortIndex = le.expirationTime, h(xe, le);
          else
            return;
          le = m(ze);
        }
      }
      function j(G) {
        if (_e = !1, U(G), !ut)
          if (m(xe) !== null)
            ut = !0, mr(je);
          else {
            var le = m(ze);
            le !== null && Zn(j, le.startTime - G);
          }
      }
      function je(G, le) {
        ut = !1, _e && (_e = !1, Di()), ft = !0;
        var we = Ue;
        try {
          var Qe;
          if (!s)
            return Pe(G, le);
        } finally {
          de = null, Ue = we, ft = !1;
        }
      }
      function Pe(G, le) {
        var we = le;
        for (U(we), de = m(xe); de !== null && !n && !(de.expirationTime > we && (!G || Ln())); ) {
          var Qe = de.callback;
          if (typeof Qe == "function") {
            de.callback = null, Ue = de.priorityLevel;
            var Fe = de.expirationTime <= we, It = Qe(Fe);
            we = T.unstable_now(), typeof It == "function" ? de.callback = It : de === m(xe) && y(xe), U(we);
          } else
            y(xe);
          de = m(xe);
        }
        if (de !== null)
          return !0;
        var Rt = m(ze);
        return Rt !== null && Zn(j, Rt.startTime - we), !1;
      }
      function Je(G, le) {
        switch (G) {
          case E:
          case S:
          case M:
          case w:
          case F:
            break;
          default:
            G = M;
        }
        var we = Ue;
        Ue = G;
        try {
          return le();
        } finally {
          Ue = we;
        }
      }
      function Ve(G) {
        var le;
        switch (Ue) {
          case E:
          case S:
          case M:
            le = M;
            break;
          default:
            le = Ue;
            break;
        }
        var we = Ue;
        Ue = le;
        try {
          return G();
        } finally {
          Ue = we;
        }
      }
      function at(G) {
        var le = Ue;
        return function() {
          var we = Ue;
          Ue = le;
          try {
            return G.apply(this, arguments);
          } finally {
            Ue = we;
          }
        };
      }
      function rt(G, le, we) {
        var Qe = T.unstable_now(), Fe;
        if (typeof we == "object" && we !== null) {
          var It = we.delay;
          typeof It == "number" && It > 0 ? Fe = Qe + It : Fe = Qe;
        } else
          Fe = Qe;
        var Rt;
        switch (G) {
          case E:
            Rt = Re;
            break;
          case S:
            Rt = ke;
            break;
          case F:
            Rt = Ke;
            break;
          case w:
            Rt = ce;
            break;
          case M:
          default:
            Rt = ue;
            break;
        }
        var Ye = Fe + Rt, pe = {
          id: Te++,
          callback: le,
          priorityLevel: G,
          startTime: Fe,
          expirationTime: Ye,
          sortIndex: -1
        };
        return Fe > Qe ? (pe.sortIndex = Fe, h(ze, pe), m(xe) === null && pe === m(ze) && (_e ? Di() : _e = !0, Zn(j, Fe - Qe))) : (pe.sortIndex = Ye, h(xe, pe), !ut && !ft && (ut = !0, mr(je))), pe;
      }
      function dt() {
      }
      function Ht() {
        !ut && !ft && (ut = !0, mr(je));
      }
      function Nn() {
        return m(xe);
      }
      function nr(G) {
        G.callback = null;
      }
      function qt() {
        return Ue;
      }
      var Fn = !1, On = null, Un = -1, jn = o, Ar = -1;
      function Ln() {
        var G = T.unstable_now() - Ar;
        return !(G < jn);
      }
      function pn() {
      }
      function hr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? jn = Math.floor(1e3 / G) : jn = o;
      }
      var kn = function() {
        if (On !== null) {
          var G = T.unstable_now();
          Ar = G;
          var le = !0, we = !0;
          try {
            we = On(le, G);
          } finally {
            we ? Bt() : (Fn = !1, On = null);
          }
        } else
          Fn = !1;
      }, Bt;
      if (typeof ee == "function")
        Bt = function() {
          ee(kn);
        };
      else if (typeof MessageChannel < "u") {
        var pr = new MessageChannel(), ai = pr.port2;
        pr.port1.onmessage = kn, Bt = function() {
          ai.postMessage(null);
        };
      } else
        Bt = function() {
          H(kn, 0);
        };
      function mr(G) {
        On = G, Fn || (Fn = !0, Bt());
      }
      function Zn(G, le) {
        Un = H(function() {
          G(T.unstable_now());
        }, le);
      }
      function Di() {
        ie(Un), Un = -1;
      }
      var Xi = pn, Ai = null;
      T.unstable_IdlePriority = F, T.unstable_ImmediatePriority = E, T.unstable_LowPriority = w, T.unstable_NormalPriority = M, T.unstable_Profiling = Ai, T.unstable_UserBlockingPriority = S, T.unstable_cancelCallback = nr, T.unstable_continueExecution = Ht, T.unstable_forceFrameRate = hr, T.unstable_getCurrentPriorityLevel = qt, T.unstable_getFirstCallbackNode = Nn, T.unstable_next = Ve, T.unstable_pauseExecution = dt, T.unstable_requestPaint = Xi, T.unstable_runWithPriority = Je, T.unstable_scheduleCallback = rt, T.unstable_shouldYield = Ln, T.unstable_wrapCallback = at, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(uv)), uv;
}
var ox;
function Nx() {
  return ox || (ox = 1, process.env.NODE_ENV === "production" ? kh.exports = hR() : kh.exports = pR()), kh.exports;
}
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov, cx;
function mR() {
  return cx || (cx = 1, ov = function(n) {
    var s = {}, o = tt, h = Nx(), m = Object.assign;
    function y(r) {
      for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, u = 1; u < arguments.length; u++)
        i += "&args[]=" + encodeURIComponent(arguments[u]);
      return "Minified React error #" + r + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var C = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = Symbol.for("react.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), F = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), Re = Symbol.iterator;
    function ke(r) {
      return r === null || typeof r != "object" ? null : (r = Re && r[Re] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    function ue(r) {
      if (r == null)
        return null;
      if (typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case E:
          return "Fragment";
        case x:
          return "Portal";
        case M:
          return "Profiler";
        case S:
          return "StrictMode";
        case Q:
          return "Suspense";
        case J:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case F:
            return (r.displayName || "Context") + ".Consumer";
          case w:
            return (r._context.displayName || "Context") + ".Provider";
          case k:
            var i = r.render;
            return r = r.displayName, r || (r = i.displayName || i.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case se:
            return i = r.displayName || null, i !== null ? i : ue(r.type) || "Memo";
          case he:
            i = r._payload, r = r._init;
            try {
              return ue(r(i));
            } catch {
            }
        }
      return null;
    }
    function ce(r) {
      var i = r.type;
      switch (r.tag) {
        case 24:
          return "Cache";
        case 9:
          return (i.displayName || "Context") + ".Consumer";
        case 10:
          return (i._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return r = i.render, r = r.displayName || r.name || "", i.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return i;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ue(i);
        case 8:
          return i === S ? "StrictMode" : "Mode";
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
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
      }
      return null;
    }
    function Ke(r) {
      var i = r, u = r;
      if (r.alternate)
        for (; i.return; )
          i = i.return;
      else {
        r = i;
        do
          i = r, i.flags & 4098 && (u = i.return), r = i.return;
        while (r);
      }
      return i.tag === 3 ? u : null;
    }
    function xe(r) {
      if (Ke(r) !== r)
        throw Error(y(188));
    }
    function ze(r) {
      var i = r.alternate;
      if (!i) {
        if (i = Ke(r), i === null)
          throw Error(y(188));
        return i !== r ? null : r;
      }
      for (var u = r, f = i; ; ) {
        var p = u.return;
        if (p === null)
          break;
        var g = p.alternate;
        if (g === null) {
          if (f = p.return, f !== null) {
            u = f;
            continue;
          }
          break;
        }
        if (p.child === g.child) {
          for (g = p.child; g; ) {
            if (g === u)
              return xe(p), r;
            if (g === f)
              return xe(p), i;
            g = g.sibling;
          }
          throw Error(y(188));
        }
        if (u.return !== f.return)
          u = p, f = g;
        else {
          for (var D = !1, B = p.child; B; ) {
            if (B === u) {
              D = !0, u = p, f = g;
              break;
            }
            if (B === f) {
              D = !0, f = p, u = g;
              break;
            }
            B = B.sibling;
          }
          if (!D) {
            for (B = g.child; B; ) {
              if (B === u) {
                D = !0, u = g, f = p;
                break;
              }
              if (B === f) {
                D = !0, f = g, u = p;
                break;
              }
              B = B.sibling;
            }
            if (!D)
              throw Error(y(189));
          }
        }
        if (u.alternate !== f)
          throw Error(y(190));
      }
      if (u.tag !== 3)
        throw Error(y(188));
      return u.stateNode.current === u ? r : i;
    }
    function Te(r) {
      return r = ze(r), r !== null ? de(r) : null;
    }
    function de(r) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      for (r = r.child; r !== null; ) {
        var i = de(r);
        if (i !== null)
          return i;
        r = r.sibling;
      }
      return null;
    }
    function Ue(r) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      for (r = r.child; r !== null; ) {
        if (r.tag !== 4) {
          var i = Ue(r);
          if (i !== null)
            return i;
        }
        r = r.sibling;
      }
      return null;
    }
    var ft = Array.isArray, ut = n.getPublicInstance, _e = n.getRootHostContext, H = n.getChildHostContext, ie = n.prepareForCommit, ee = n.resetAfterCommit, U = n.createInstance, j = n.appendInitialChild, je = n.finalizeInitialChildren, Pe = n.prepareUpdate, Je = n.shouldSetTextContent, Ve = n.createTextInstance, at = n.scheduleTimeout, rt = n.cancelTimeout, dt = n.noTimeout, Ht = n.isPrimaryRenderer, Nn = n.supportsMutation, nr = n.supportsPersistence, qt = n.supportsHydration, Fn = n.getInstanceFromNode, On = n.preparePortalMount, Un = n.getCurrentEventPriority, jn = n.detachDeletedInstance, Ar = n.supportsMicrotasks, Ln = n.scheduleMicrotask, pn = n.supportsTestSelectors, hr = n.findFiberRoot, kn = n.getBoundingRect, Bt = n.getTextContent, pr = n.isHiddenSubtree, ai = n.matchAccessibilityRole, mr = n.setFocusIfFocusable, Zn = n.setupIntersectionObserver, Di = n.appendChild, Xi = n.appendChildToContainer, Ai = n.commitTextUpdate, G = n.commitMount, le = n.commitUpdate, we = n.insertBefore, Qe = n.insertInContainerBefore, Fe = n.removeChild, It = n.removeChildFromContainer, Rt = n.resetTextContent, Ye = n.hideInstance, pe = n.hideTextInstance, xn = n.unhideInstance, zt = n.unhideTextInstance, ht = n.clearContainer, Ji = n.cloneInstance, rr = n.createContainerChildSet, Zi = n.appendChildToContainerChildSet, Wa = n.finalizeContainerChildren, Et = n.replaceContainerChildren, _r = n.cloneHiddenInstance, Ir = n.cloneHiddenTextInstance, Er = n.canHydrateInstance, ir = n.canHydrateTextInstance, Kn = n.canHydrateSuspenseInstance, gs = n.isSuspenseInstancePending, si = n.isSuspenseInstanceFallback, qa = n.registerSuspenseInstanceRetry, _a = n.getNextHydratableSibling, tl = n.getFirstHydratableChild, O = n.getFirstHydratableChildWithinContainer, ae = n.getFirstHydratableChildWithinSuspenseInstance, ge = n.hydrateInstance, $e = n.hydrateTextInstance, wt = n.hydrateSuspenseInstance, Tt = n.getNextHydratableInstanceAfterSuspenseInstance, pt = n.commitHydratedContainer, st = n.commitHydratedSuspenseInstance, yn = n.clearSuspenseBoundary, rn = n.clearSuspenseBoundaryFromContainer, en = n.shouldDeleteUnhydratedTailInstances, Bn = n.didNotMatchHydratedContainerTextInstance, Rr = n.didNotMatchHydratedTextInstance, Sn;
    function gn(r) {
      if (Sn === void 0)
        try {
          throw Error();
        } catch (u) {
          var i = u.stack.trim().match(/\n( *(at )?)/);
          Sn = i && i[1] || "";
        }
      return `
` + Sn + r;
    }
    var li = !1;
    function xs(r, i) {
      if (!r || li)
        return "";
      li = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (i)
          if (i = function() {
            throw Error();
          }, Object.defineProperty(i.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (me) {
              var f = me;
            }
            Reflect.construct(r, [], i);
          } else {
            try {
              i.call();
            } catch (me) {
              f = me;
            }
            r.call(i.prototype);
          }
        else {
          try {
            throw Error();
          } catch (me) {
            f = me;
          }
          r();
        }
      } catch (me) {
        if (me && f && typeof me.stack == "string") {
          for (var p = me.stack.split(`
`), g = f.stack.split(`
`), D = p.length - 1, B = g.length - 1; 1 <= D && 0 <= B && p[D] !== g[B]; )
            B--;
          for (; 1 <= D && 0 <= B; D--, B--)
            if (p[D] !== g[B]) {
              if (D !== 1 || B !== 1)
                do
                  if (D--, B--, 0 > B || p[D] !== g[B]) {
                    var $ = `
` + p[D].replace(" at new ", " at ");
                    return r.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", r.displayName)), $;
                  }
                while (1 <= D && 0 <= B);
              break;
            }
        }
      } finally {
        li = !1, Error.prepareStackTrace = u;
      }
      return (r = r ? r.displayName || r.name : "") ? gn(r) : "";
    }
    var su = Object.prototype.hasOwnProperty, Ki = [], $i = -1;
    function Qr(r) {
      return { current: r };
    }
    function Gt(r) {
      0 > $i || (r.current = Ki[$i], Ki[$i] = null, $i--);
    }
    function Xt(r, i) {
      $i++, Ki[$i] = r.current, r.current = i;
    }
    var ui = {}, Vn = Qr(ui), Jt = Qr(!1), oi = ui;
    function Ia(r, i) {
      var u = r.type.contextTypes;
      if (!u)
        return ui;
      var f = r.stateNode;
      if (f && f.__reactInternalMemoizedUnmaskedChildContext === i)
        return f.__reactInternalMemoizedMaskedChildContext;
      var p = {}, g;
      for (g in u)
        p[g] = i[g];
      return f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = i, r.__reactInternalMemoizedMaskedChildContext = p), p;
    }
    function vr(r) {
      return r = r.childContextTypes, r != null;
    }
    function Qa() {
      Gt(Jt), Gt(Vn);
    }
    function nl(r, i, u) {
      if (Vn.current !== ui)
        throw Error(y(168));
      Xt(Vn, i), Xt(Jt, u);
    }
    function Ss(r, i, u) {
      var f = r.stateNode;
      if (i = i.childContextTypes, typeof f.getChildContext != "function")
        return u;
      f = f.getChildContext();
      for (var p in f)
        if (!(p in i))
          throw Error(y(108, ce(r) || "Unknown", p));
      return m({}, u, f);
    }
    function ea(r) {
      return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || ui, oi = Vn.current, Xt(Vn, r), Xt(Jt, Jt.current), !0;
    }
    function Ga(r, i, u) {
      var f = r.stateNode;
      if (!f)
        throw Error(y(169));
      u ? (r = Ss(r, i, oi), f.__reactInternalMemoizedMergedChildContext = r, Gt(Jt), Gt(Vn), Xt(Vn, r)) : Gt(Jt), Xt(Jt, u);
    }
    var Nr = Math.clz32 ? Math.clz32 : $u, rl = Math.log, Ku = Math.LN2;
    function $u(r) {
      return r >>>= 0, r === 0 ? 32 : 31 - (rl(r) / Ku | 0) | 0;
    }
    var Ea = 64, Ra = 4194304;
    function Ni(r) {
      switch (r & -r) {
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
          return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return r & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return r;
      }
    }
    function Ta(r, i) {
      var u = r.pendingLanes;
      if (u === 0)
        return 0;
      var f = 0, p = r.suspendedLanes, g = r.pingedLanes, D = u & 268435455;
      if (D !== 0) {
        var B = D & ~p;
        B !== 0 ? f = Ni(B) : (g &= D, g !== 0 && (f = Ni(g)));
      } else
        D = u & ~p, D !== 0 ? f = Ni(D) : g !== 0 && (f = Ni(g));
      if (f === 0)
        return 0;
      if (i !== 0 && i !== f && !(i & p) && (p = f & -f, g = i & -i, p >= g || p === 16 && (g & 4194240) !== 0))
        return i;
      if (f & 4 && (f |= u & 16), i = r.entangledLanes, i !== 0)
        for (r = r.entanglements, i &= f; 0 < i; )
          u = 31 - Nr(i), p = 1 << u, f |= r[u], i &= ~p;
      return f;
    }
    function Gr(r, i) {
      switch (r) {
        case 1:
        case 2:
        case 4:
          return i + 250;
        case 8:
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
          return i + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function ci(r, i) {
      for (var u = r.suspendedLanes, f = r.pingedLanes, p = r.expirationTimes, g = r.pendingLanes; 0 < g; ) {
        var D = 31 - Nr(g), B = 1 << D, $ = p[D];
        $ === -1 ? (!(B & u) || B & f) && (p[D] = Gr(B, i)) : $ <= i && (r.expiredLanes |= B), g &= ~B;
      }
    }
    function Yn(r) {
      return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
    }
    function il(r) {
      for (var i = [], u = 0; 31 > u; u++)
        i.push(r);
      return i;
    }
    function _s(r, i, u) {
      r.pendingLanes |= i, i !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, i = 31 - Nr(i), r[i] = u;
    }
    function gc(r, i) {
      var u = r.pendingLanes & ~i;
      r.pendingLanes = i, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= i, r.mutableReadLanes &= i, r.entangledLanes &= i, i = r.entanglements;
      var f = r.eventTimes;
      for (r = r.expirationTimes; 0 < u; ) {
        var p = 31 - Nr(u), g = 1 << p;
        i[p] = 0, f[p] = -1, r[p] = -1, u &= ~g;
      }
    }
    function al(r, i) {
      var u = r.entangledLanes |= i;
      for (r = r.entanglements; u; ) {
        var f = 31 - Nr(u), p = 1 << f;
        p & i | r[f] & i && (r[f] |= i), u &= ~p;
      }
    }
    var Ft = 0;
    function lu(r) {
      return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Fi = h.unstable_scheduleCallback, uu = h.unstable_cancelCallback, xc = h.unstable_shouldYield, eo = h.unstable_requestPaint, on = h.unstable_now, ou = h.unstable_ImmediatePriority, Sc = h.unstable_UserBlockingPriority, cu = h.unstable_NormalPriority, to = h.unstable_IdlePriority, ba = null, fi = null;
    function Xa(r) {
      if (fi && typeof fi.onCommitFiberRoot == "function")
        try {
          fi.onCommitFiberRoot(ba, r, void 0, (r.current.flags & 128) === 128);
        } catch {
        }
    }
    function no(r, i) {
      return r === i && (r !== 0 || 1 / r === 1 / i) || r !== r && i !== i;
    }
    var Xr = typeof Object.is == "function" ? Object.is : no, Fr = null, Ja = !1, Es = !1;
    function Rs(r) {
      Fr === null ? Fr = [r] : Fr.push(r);
    }
    function _c(r) {
      Ja = !0, Rs(r);
    }
    function di() {
      if (!Es && Fr !== null) {
        Es = !0;
        var r = 0, i = Ft;
        try {
          var u = Fr;
          for (Ft = 1; r < u.length; r++) {
            var f = u[r];
            do
              f = f(!0);
            while (f !== null);
          }
          Fr = null, Ja = !1;
        } catch (p) {
          throw Fr !== null && (Fr = Fr.slice(r + 1)), Fi(ou, di), p;
        } finally {
          Ft = i, Es = !1;
        }
      }
      return null;
    }
    var Ec = C.ReactCurrentBatchConfig;
    function sl(r, i) {
      if (Xr(r, i))
        return !0;
      if (typeof r != "object" || r === null || typeof i != "object" || i === null)
        return !1;
      var u = Object.keys(r), f = Object.keys(i);
      if (u.length !== f.length)
        return !1;
      for (f = 0; f < u.length; f++) {
        var p = u[f];
        if (!su.call(i, p) || !Xr(r[p], i[p]))
          return !1;
      }
      return !0;
    }
    function _(r) {
      switch (r.tag) {
        case 5:
          return gn(r.type);
        case 16:
          return gn("Lazy");
        case 13:
          return gn("Suspense");
        case 19:
          return gn("SuspenseList");
        case 0:
        case 2:
        case 15:
          return r = xs(r.type, !1), r;
        case 11:
          return r = xs(r.type.render, !1), r;
        case 1:
          return r = xs(r.type, !0), r;
        default:
          return "";
      }
    }
    function N(r, i) {
      if (r && r.defaultProps) {
        i = m({}, i), r = r.defaultProps;
        for (var u in r)
          i[u] === void 0 && (i[u] = r[u]);
        return i;
      }
      return i;
    }
    var q = Qr(null), K = null, ve = null, Ge = null;
    function He() {
      Ge = ve = K = null;
    }
    function lt(r, i, u) {
      Ht ? (Xt(q, i._currentValue), i._currentValue = u) : (Xt(q, i._currentValue2), i._currentValue2 = u);
    }
    function gt(r) {
      var i = q.current;
      Gt(q), Ht ? r._currentValue = i : r._currentValue2 = i;
    }
    function Pt(r, i, u) {
      for (; r !== null; ) {
        var f = r.alternate;
        if ((r.childLanes & i) !== i ? (r.childLanes |= i, f !== null && (f.childLanes |= i)) : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i), r === u)
          break;
        r = r.return;
      }
    }
    function jt(r, i) {
      K = r, Ge = ve = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & i && (yr = !0), r.firstContext = null);
    }
    function bt(r) {
      var i = Ht ? r._currentValue : r._currentValue2;
      if (Ge !== r)
        if (r = { context: r, memoizedValue: i, next: null }, ve === null) {
          if (K === null)
            throw Error(y(308));
          ve = r, K.dependencies = { lanes: 0, firstContext: r };
        } else
          ve = ve.next = r;
      return i;
    }
    var At = null, Vt = !1;
    function _n(r) {
      r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function ta(r, i) {
      r = r.updateQueue, i.updateQueue === r && (i.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
    }
    function Jr(r, i) {
      return { eventTime: r, lane: i, tag: 0, payload: null, callback: null, next: null };
    }
    function Oi(r, i) {
      var u = r.updateQueue;
      u !== null && (u = u.shared, Hn !== null && r.mode & 1 && !(xt & 2) ? (r = u.interleaved, r === null ? (i.next = i, At === null ? At = [u] : At.push(u)) : (i.next = r.next, r.next = i), u.interleaved = i) : (r = u.pending, r === null ? i.next = i : (i.next = r.next, r.next = i), u.pending = i));
    }
    function ll(r, i, u) {
      if (i = i.updateQueue, i !== null && (i = i.shared, (u & 4194240) !== 0)) {
        var f = i.lanes;
        f &= r.pendingLanes, u |= f, i.lanes = u, al(r, u);
      }
    }
    function fu(r, i) {
      var u = r.updateQueue, f = r.alternate;
      if (f !== null && (f = f.updateQueue, u === f)) {
        var p = null, g = null;
        if (u = u.firstBaseUpdate, u !== null) {
          do {
            var D = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
            g === null ? p = g = D : g = g.next = D, u = u.next;
          } while (u !== null);
          g === null ? p = g = i : g = g.next = i;
        } else
          p = g = i;
        u = { baseState: f.baseState, firstBaseUpdate: p, lastBaseUpdate: g, shared: f.shared, effects: f.effects }, r.updateQueue = u;
        return;
      }
      r = u.lastBaseUpdate, r === null ? u.firstBaseUpdate = i : r.next = i, u.lastBaseUpdate = i;
    }
    function ul(r, i, u, f) {
      var p = r.updateQueue;
      Vt = !1;
      var g = p.firstBaseUpdate, D = p.lastBaseUpdate, B = p.shared.pending;
      if (B !== null) {
        p.shared.pending = null;
        var $ = B, me = $.next;
        $.next = null, D === null ? g = me : D.next = me, D = $;
        var Ee = r.alternate;
        Ee !== null && (Ee = Ee.updateQueue, B = Ee.lastBaseUpdate, B !== D && (B === null ? Ee.firstBaseUpdate = me : B.next = me, Ee.lastBaseUpdate = $));
      }
      if (g !== null) {
        var it = p.baseState;
        D = 0, Ee = me = $ = null, B = g;
        do {
          var Ze = B.lane, sn = B.eventTime;
          if ((f & Ze) === Ze) {
            Ee !== null && (Ee = Ee.next = {
              eventTime: sn,
              lane: 0,
              tag: B.tag,
              payload: B.payload,
              callback: B.callback,
              next: null
            });
            e: {
              var qe = r, ur = B;
              switch (Ze = i, sn = u, ur.tag) {
                case 1:
                  if (qe = ur.payload, typeof qe == "function") {
                    it = qe.call(sn, it, Ze);
                    break e;
                  }
                  it = qe;
                  break e;
                case 3:
                  qe.flags = qe.flags & -65537 | 128;
                case 0:
                  if (qe = ur.payload, Ze = typeof qe == "function" ? qe.call(sn, it, Ze) : qe, Ze == null)
                    break e;
                  it = m({}, it, Ze);
                  break e;
                case 2:
                  Vt = !0;
              }
            }
            B.callback !== null && B.lane !== 0 && (r.flags |= 64, Ze = p.effects, Ze === null ? p.effects = [B] : Ze.push(B));
          } else
            sn = { eventTime: sn, lane: Ze, tag: B.tag, payload: B.payload, callback: B.callback, next: null }, Ee === null ? (me = Ee = sn, $ = it) : Ee = Ee.next = sn, D |= Ze;
          if (B = B.next, B === null) {
            if (B = p.shared.pending, B === null)
              break;
            Ze = B, B = Ze.next, Ze.next = null, p.lastBaseUpdate = Ze, p.shared.pending = null;
          }
        } while (!0);
        if (Ee === null && ($ = it), p.baseState = $, p.firstBaseUpdate = me, p.lastBaseUpdate = Ee, i = p.shared.interleaved, i !== null) {
          p = i;
          do
            D |= p.lane, p = p.next;
          while (p !== i);
        } else
          g === null && (p.shared.lanes = 0);
        oa |= D, r.lanes = D, r.memoizedState = it;
      }
    }
    function du(r, i, u) {
      if (r = i.effects, i.effects = null, r !== null)
        for (i = 0; i < r.length; i++) {
          var f = r[i], p = f.callback;
          if (p !== null) {
            if (f.callback = null, f = u, typeof p != "function")
              throw Error(y(191, p));
            p.call(f);
          }
        }
    }
    var ro = new o.Component().refs;
    function io(r, i, u, f) {
      i = r.memoizedState, u = u(f, i), u = u == null ? i : m({}, i, u), r.memoizedState = u, r.lanes === 0 && (r.updateQueue.baseState = u);
    }
    var ao = { isMounted: function(r) {
      return (r = r._reactInternals) ? Ke(r) === r : !1;
    }, enqueueSetState: function(r, i, u) {
      r = r._reactInternals;
      var f = gr(), p = is(r), g = Jr(f, p);
      g.payload = i, u != null && (g.callback = u), Oi(r, g), i = xi(r, p, f), i !== null && ll(i, r, p);
    }, enqueueReplaceState: function(r, i, u) {
      r = r._reactInternals;
      var f = gr(), p = is(r), g = Jr(f, p);
      g.tag = 1, g.payload = i, u != null && (g.callback = u), Oi(r, g), i = xi(r, p, f), i !== null && ll(i, r, p);
    }, enqueueForceUpdate: function(r, i) {
      r = r._reactInternals;
      var u = gr(), f = is(r), p = Jr(
        u,
        f
      );
      p.tag = 2, i != null && (p.callback = i), Oi(r, p), i = xi(r, f, u), i !== null && ll(i, r, f);
    } };
    function Gf(r, i, u, f, p, g, D) {
      return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(f, g, D) : i.prototype && i.prototype.isPureReactComponent ? !sl(u, f) || !sl(p, g) : !0;
    }
    function Xf(r, i, u) {
      var f = !1, p = ui, g = i.contextType;
      return typeof g == "object" && g !== null ? g = bt(g) : (p = vr(i) ? oi : Vn.current, f = i.contextTypes, g = (f = f != null) ? Ia(r, p) : ui), i = new i(u, g), r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ao, r.stateNode = i, i._reactInternals = r, f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = p, r.__reactInternalMemoizedMaskedChildContext = g), i;
    }
    function Jf(r, i, u, f) {
      r = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(u, f), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(u, f), i.state !== r && ao.enqueueReplaceState(i, i.state, null);
    }
    function Rc(r, i, u, f) {
      var p = r.stateNode;
      p.props = u, p.state = r.memoizedState, p.refs = ro, _n(r);
      var g = i.contextType;
      typeof g == "object" && g !== null ? p.context = bt(g) : (g = vr(i) ? oi : Vn.current, p.context = Ia(r, g)), p.state = r.memoizedState, g = i.getDerivedStateFromProps, typeof g == "function" && (io(r, i, g, u), p.state = r.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (i = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), i !== p.state && ao.enqueueReplaceState(p, p.state, null), ul(r, u, p, f), p.state = r.memoizedState), typeof p.componentDidMount == "function" && (r.flags |= 4194308);
    }
    var ol = [], cl = 0, so = null, lo = 0, hi = [], pi = 0, Ts = null, Ca = 1, Ma = "";
    function bs(r, i) {
      ol[cl++] = lo, ol[cl++] = so, so = r, lo = i;
    }
    function Zf(r, i, u) {
      hi[pi++] = Ca, hi[pi++] = Ma, hi[pi++] = Ts, Ts = r;
      var f = Ca;
      r = Ma;
      var p = 32 - Nr(f) - 1;
      f &= ~(1 << p), u += 1;
      var g = 32 - Nr(i) + p;
      if (30 < g) {
        var D = p - p % 5;
        g = (f & (1 << D) - 1).toString(32), f >>= D, p -= D, Ca = 1 << 32 - Nr(i) + p | u << p | f, Ma = g + r;
      } else
        Ca = 1 << g | u << p | f, Ma = r;
    }
    function Tc(r) {
      r.return !== null && (bs(r, 1), Zf(r, 1, 0));
    }
    function bc(r) {
      for (; r === so; )
        so = ol[--cl], ol[cl] = null, lo = ol[--cl], ol[cl] = null;
      for (; r === Ts; )
        Ts = hi[--pi], hi[pi] = null, Ma = hi[--pi], hi[pi] = null, Ca = hi[--pi], hi[pi] = null;
    }
    var Zr = null, ar = null, cn = !1, fl = !1, mi = null;
    function Cc(r, i) {
      var u = xr(5, null, null, 0);
      u.elementType = "DELETED", u.stateNode = i, u.return = r, i = r.deletions, i === null ? (r.deletions = [u], r.flags |= 16) : i.push(u);
    }
    function Mc(r, i) {
      switch (r.tag) {
        case 5:
          return i = Er(i, r.type, r.pendingProps), i !== null ? (r.stateNode = i, Zr = r, ar = tl(i), !0) : !1;
        case 6:
          return i = ir(i, r.pendingProps), i !== null ? (r.stateNode = i, Zr = r, ar = null, !0) : !1;
        case 13:
          if (i = Kn(i), i !== null) {
            var u = Ts !== null ? { id: Ca, overflow: Ma } : null;
            return r.memoizedState = { dehydrated: i, treeContext: u, retryLane: 1073741824 }, u = xr(18, null, null, 0), u.stateNode = i, u.return = r, r.child = u, Zr = r, ar = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function uo(r) {
      return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
    }
    function oo(r) {
      if (cn) {
        var i = ar;
        if (i) {
          var u = i;
          if (!Mc(r, i)) {
            if (uo(r))
              throw Error(y(418));
            i = _a(u);
            var f = Zr;
            i && Mc(r, i) ? Cc(f, u) : (r.flags = r.flags & -4097 | 2, cn = !1, Zr = r);
          }
        } else {
          if (uo(r))
            throw Error(y(418));
          r.flags = r.flags & -4097 | 2, cn = !1, Zr = r;
        }
      }
    }
    function zc(r) {
      for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
        r = r.return;
      Zr = r;
    }
    function hu(r) {
      if (!qt || r !== Zr)
        return !1;
      if (!cn)
        return zc(r), cn = !0, !1;
      if (r.tag !== 3 && (r.tag !== 5 || en(r.type) && !Je(r.type, r.memoizedProps))) {
        var i = ar;
        if (i) {
          if (uo(r)) {
            for (r = ar; r; )
              r = _a(r);
            throw Error(y(418));
          }
          for (; i; )
            Cc(r, i), i = _a(i);
        }
      }
      if (zc(r), r.tag === 13) {
        if (!qt)
          throw Error(y(316));
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r)
          throw Error(y(317));
        ar = Tt(r);
      } else
        ar = Zr ? _a(r.stateNode) : null;
      return !0;
    }
    function dl() {
      qt && (ar = Zr = null, fl = cn = !1);
    }
    function pu(r) {
      mi === null ? mi = [r] : mi.push(r);
    }
    function Cs(r, i, u) {
      if (r = u.ref, r !== null && typeof r != "function" && typeof r != "object") {
        if (u._owner) {
          if (u = u._owner, u) {
            if (u.tag !== 1)
              throw Error(y(309));
            var f = u.stateNode;
          }
          if (!f)
            throw Error(y(147, r));
          var p = f, g = "" + r;
          return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === g ? i.ref : (i = function(D) {
            var B = p.refs;
            B === ro && (B = p.refs = {}), D === null ? delete B[g] : B[g] = D;
          }, i._stringRef = g, i);
        }
        if (typeof r != "string")
          throw Error(y(284));
        if (!u._owner)
          throw Error(y(290, r));
      }
      return r;
    }
    function Ui(r, i) {
      throw r = Object.prototype.toString.call(i), Error(y(31, r === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : r));
    }
    function co(r) {
      var i = r._init;
      return i(r._payload);
    }
    function mu(r) {
      function i(W, P) {
        if (r) {
          var X = W.deletions;
          X === null ? (W.deletions = [P], W.flags |= 16) : X.push(P);
        }
      }
      function u(W, P) {
        if (!r)
          return null;
        for (; P !== null; )
          i(W, P), P = P.sibling;
        return null;
      }
      function f(W, P) {
        for (W = /* @__PURE__ */ new Map(); P !== null; )
          P.key !== null ? W.set(P.key, P) : W.set(P.index, P), P = P.sibling;
        return W;
      }
      function p(W, P) {
        return W = Br(W, P), W.index = 0, W.sibling = null, W;
      }
      function g(W, P, X) {
        return W.index = X, r ? (X = W.alternate, X !== null ? (X = X.index, X < P ? (W.flags |= 2, P) : X) : (W.flags |= 2, P)) : (W.flags |= 1048576, P);
      }
      function D(W) {
        return r && W.alternate === null && (W.flags |= 2), W;
      }
      function B(W, P, X, Ae) {
        return P === null || P.tag !== 6 ? (P = ko(X, W.mode, Ae), P.return = W, P) : (P = p(P, X), P.return = W, P);
      }
      function $(W, P, X, Ae) {
        var We = X.type;
        return We === E ? Ee(W, P, X.props.children, Ae, X.key) : P !== null && (P.elementType === We || typeof We == "object" && We !== null && We.$$typeof === he && co(We) === P.type) ? (Ae = p(P, X.props), Ae.ref = Cs(W, P, X), Ae.return = W, Ae) : (Ae = Ws(X.type, X.key, X.props, null, W.mode, Ae), Ae.ref = Cs(W, P, X), Ae.return = W, Ae);
      }
      function me(W, P, X, Ae) {
        return P === null || P.tag !== 4 || P.stateNode.containerInfo !== X.containerInfo || P.stateNode.implementation !== X.implementation ? (P = Lu(X, W.mode, Ae), P.return = W, P) : (P = p(P, X.children || []), P.return = W, P);
      }
      function Ee(W, P, X, Ae, We) {
        return P === null || P.tag !== 7 ? (P = ss(X, W.mode, Ae, We), P.return = W, P) : (P = p(P, X), P.return = W, P);
      }
      function it(W, P, X) {
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return P = ko("" + P, W.mode, X), P.return = W, P;
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case b:
              return X = Ws(P.type, P.key, P.props, null, W.mode, X), X.ref = Cs(W, null, P), X.return = W, X;
            case x:
              return P = Lu(P, W.mode, X), P.return = W, P;
            case he:
              var Ae = P._init;
              return it(W, Ae(P._payload), X);
          }
          if (ft(P) || ke(P))
            return P = ss(P, W.mode, X, null), P.return = W, P;
          Ui(W, P);
        }
        return null;
      }
      function Ze(W, P, X, Ae) {
        var We = P !== null ? P.key : null;
        if (typeof X == "string" && X !== "" || typeof X == "number")
          return We !== null ? null : B(W, P, "" + X, Ae);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case b:
              return X.key === We ? $(W, P, X, Ae) : null;
            case x:
              return X.key === We ? me(W, P, X, Ae) : null;
            case he:
              return We = X._init, Ze(
                W,
                P,
                We(X._payload),
                Ae
              );
          }
          if (ft(X) || ke(X))
            return We !== null ? null : Ee(W, P, X, Ae, null);
          Ui(W, X);
        }
        return null;
      }
      function sn(W, P, X, Ae, We) {
        if (typeof Ae == "string" && Ae !== "" || typeof Ae == "number")
          return W = W.get(X) || null, B(P, W, "" + Ae, We);
        if (typeof Ae == "object" && Ae !== null) {
          switch (Ae.$$typeof) {
            case b:
              return W = W.get(Ae.key === null ? X : Ae.key) || null, $(P, W, Ae, We);
            case x:
              return W = W.get(Ae.key === null ? X : Ae.key) || null, me(P, W, Ae, We);
            case he:
              var vt = Ae._init;
              return sn(W, P, X, vt(Ae._payload), We);
          }
          if (ft(Ae) || ke(Ae))
            return W = W.get(X) || null, Ee(P, W, Ae, We, null);
          Ui(P, Ae);
        }
        return null;
      }
      function qe(W, P, X, Ae) {
        for (var We = null, vt = null, et = P, St = P = 0, Cn = null; et !== null && St < X.length; St++) {
          et.index > St ? (Cn = et, et = null) : Cn = et.sibling;
          var Lt = Ze(W, et, X[St], Ae);
          if (Lt === null) {
            et === null && (et = Cn);
            break;
          }
          r && et && Lt.alternate === null && i(W, et), P = g(Lt, P, St), vt === null ? We = Lt : vt.sibling = Lt, vt = Lt, et = Cn;
        }
        if (St === X.length)
          return u(W, et), cn && bs(W, St), We;
        if (et === null) {
          for (; St < X.length; St++)
            et = it(W, X[St], Ae), et !== null && (P = g(et, P, St), vt === null ? We = et : vt.sibling = et, vt = et);
          return cn && bs(W, St), We;
        }
        for (et = f(W, et); St < X.length; St++)
          Cn = sn(et, W, St, X[St], Ae), Cn !== null && (r && Cn.alternate !== null && et.delete(Cn.key === null ? St : Cn.key), P = g(Cn, P, St), vt === null ? We = Cn : vt.sibling = Cn, vt = Cn);
        return r && et.forEach(function(ls) {
          return i(W, ls);
        }), cn && bs(W, St), We;
      }
      function ur(W, P, X, Ae) {
        var We = ke(X);
        if (typeof We != "function")
          throw Error(y(150));
        if (X = We.call(X), X == null)
          throw Error(y(151));
        for (var vt = We = null, et = P, St = P = 0, Cn = null, Lt = X.next(); et !== null && !Lt.done; St++, Lt = X.next()) {
          et.index > St ? (Cn = et, et = null) : Cn = et.sibling;
          var ls = Ze(W, et, Lt.value, Ae);
          if (ls === null) {
            et === null && (et = Cn);
            break;
          }
          r && et && ls.alternate === null && i(W, et), P = g(ls, P, St), vt === null ? We = ls : vt.sibling = ls, vt = ls, et = Cn;
        }
        if (Lt.done)
          return u(
            W,
            et
          ), cn && bs(W, St), We;
        if (et === null) {
          for (; !Lt.done; St++, Lt = X.next())
            Lt = it(W, Lt.value, Ae), Lt !== null && (P = g(Lt, P, St), vt === null ? We = Lt : vt.sibling = Lt, vt = Lt);
          return cn && bs(W, St), We;
        }
        for (et = f(W, et); !Lt.done; St++, Lt = X.next())
          Lt = sn(et, W, St, Lt.value, Ae), Lt !== null && (r && Lt.alternate !== null && et.delete(Lt.key === null ? St : Lt.key), P = g(Lt, P, St), vt === null ? We = Lt : vt.sibling = Lt, vt = Lt);
        return r && et.forEach(function(Bo) {
          return i(W, Bo);
        }), cn && bs(W, St), We;
      }
      function Tr(W, P, X, Ae) {
        if (typeof X == "object" && X !== null && X.type === E && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case b:
              e: {
                for (var We = X.key, vt = P; vt !== null; ) {
                  if (vt.key === We) {
                    if (We = X.type, We === E) {
                      if (vt.tag === 7) {
                        u(W, vt.sibling), P = p(vt, X.props.children), P.return = W, W = P;
                        break e;
                      }
                    } else if (vt.elementType === We || typeof We == "object" && We !== null && We.$$typeof === he && co(We) === vt.type) {
                      u(W, vt.sibling), P = p(vt, X.props), P.ref = Cs(W, vt, X), P.return = W, W = P;
                      break e;
                    }
                    u(W, vt);
                    break;
                  } else
                    i(W, vt);
                  vt = vt.sibling;
                }
                X.type === E ? (P = ss(X.props.children, W.mode, Ae, X.key), P.return = W, W = P) : (Ae = Ws(X.type, X.key, X.props, null, W.mode, Ae), Ae.ref = Cs(W, P, X), Ae.return = W, W = Ae);
              }
              return D(W);
            case x:
              e: {
                for (vt = X.key; P !== null; ) {
                  if (P.key === vt)
                    if (P.tag === 4 && P.stateNode.containerInfo === X.containerInfo && P.stateNode.implementation === X.implementation) {
                      u(W, P.sibling), P = p(P, X.children || []), P.return = W, W = P;
                      break e;
                    } else {
                      u(W, P);
                      break;
                    }
                  else
                    i(W, P);
                  P = P.sibling;
                }
                P = Lu(X, W.mode, Ae), P.return = W, W = P;
              }
              return D(W);
            case he:
              return vt = X._init, Tr(W, P, vt(X._payload), Ae);
          }
          if (ft(X))
            return qe(W, P, X, Ae);
          if (ke(X))
            return ur(W, P, X, Ae);
          Ui(W, X);
        }
        return typeof X == "string" && X !== "" || typeof X == "number" ? (X = "" + X, P !== null && P.tag === 6 ? (u(W, P.sibling), P = p(P, X), P.return = W, W = P) : (u(W, P), P = ko(X, W.mode, Ae), P.return = W, W = P), D(W)) : u(W, P);
      }
      return Tr;
    }
    var hl = mu(!0), fo = mu(!1), vu = {}, Or = Qr(vu), yu = Qr(vu), Za = Qr(vu);
    function Li(r) {
      if (r === vu)
        throw Error(y(174));
      return r;
    }
    function ho(r, i) {
      Xt(Za, i), Xt(yu, r), Xt(Or, vu), r = _e(i), Gt(Or), Xt(Or, r);
    }
    function Ms() {
      Gt(Or), Gt(yu), Gt(Za);
    }
    function gu(r) {
      var i = Li(Za.current), u = Li(Or.current);
      i = H(u, r.type, i), u !== i && (Xt(yu, r), Xt(Or, i));
    }
    function Kr(r) {
      yu.current === r && (Gt(Or), Gt(yu));
    }
    var fn = Qr(0);
    function zs(r) {
      for (var i = r; i !== null; ) {
        if (i.tag === 13) {
          var u = i.memoizedState;
          if (u !== null && (u = u.dehydrated, u === null || gs(u) || si(u)))
            return i;
        } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
          if (i.flags & 128)
            return i;
        } else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === r)
          break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === r)
            return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return null;
    }
    var ki = [];
    function na() {
      for (var r = 0; r < ki.length; r++) {
        var i = ki[r];
        Ht ? i._workInProgressVersionPrimary = null : i._workInProgressVersionSecondary = null;
      }
      ki.length = 0;
    }
    var Wn = C.ReactCurrentDispatcher, tn = C.ReactCurrentBatchConfig, Ka = 0, Ot = null, hn = null, an = null, pl = !1, ra = !1, ml = 0, vl = 0;
    function qn() {
      throw Error(y(321));
    }
    function vi(r, i) {
      if (i === null)
        return !1;
      for (var u = 0; u < i.length && u < r.length; u++)
        if (!Xr(r[u], i[u]))
          return !1;
      return !0;
    }
    function yl(r, i, u, f, p, g) {
      if (Ka = g, Ot = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, Wn.current = r === null || r.memoizedState === null ? Nc : Fc, r = u(f, p), ra) {
        g = 0;
        do {
          if (ra = !1, ml = 0, 25 <= g)
            throw Error(y(301));
          g += 1, an = hn = null, i.updateQueue = null, Wn.current = Oc, r = u(f, p);
        } while (ra);
      }
      if (Wn.current = El, i = hn !== null && hn.next !== null, Ka = 0, an = hn = Ot = null, pl = !1, i)
        throw Error(y(300));
      return r;
    }
    function xu() {
      var r = ml !== 0;
      return ml = 0, r;
    }
    function ia() {
      var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return an === null ? Ot.memoizedState = an = r : an = an.next = r, an;
    }
    function Bi() {
      if (hn === null) {
        var r = Ot.alternate;
        r = r !== null ? r.memoizedState : null;
      } else
        r = hn.next;
      var i = an === null ? Ot.memoizedState : an.next;
      if (i !== null)
        an = i, hn = r;
      else {
        if (r === null)
          throw Error(y(310));
        hn = r, r = { memoizedState: hn.memoizedState, baseState: hn.baseState, baseQueue: hn.baseQueue, queue: hn.queue, next: null }, an === null ? Ot.memoizedState = an = r : an = an.next = r;
      }
      return an;
    }
    function aa(r, i) {
      return typeof i == "function" ? i(r) : i;
    }
    function Su(r) {
      var i = Bi(), u = i.queue;
      if (u === null)
        throw Error(y(311));
      u.lastRenderedReducer = r;
      var f = hn, p = f.baseQueue, g = u.pending;
      if (g !== null) {
        if (p !== null) {
          var D = p.next;
          p.next = g.next, g.next = D;
        }
        f.baseQueue = p = g, u.pending = null;
      }
      if (p !== null) {
        g = p.next, f = f.baseState;
        var B = D = null, $ = null, me = g;
        do {
          var Ee = me.lane;
          if ((Ka & Ee) === Ee)
            $ !== null && ($ = $.next = { lane: 0, action: me.action, hasEagerState: me.hasEagerState, eagerState: me.eagerState, next: null }), f = me.hasEagerState ? me.eagerState : r(f, me.action);
          else {
            var it = {
              lane: Ee,
              action: me.action,
              hasEagerState: me.hasEagerState,
              eagerState: me.eagerState,
              next: null
            };
            $ === null ? (B = $ = it, D = f) : $ = $.next = it, Ot.lanes |= Ee, oa |= Ee;
          }
          me = me.next;
        } while (me !== null && me !== g);
        $ === null ? D = f : $.next = B, Xr(f, i.memoizedState) || (yr = !0), i.memoizedState = f, i.baseState = D, i.baseQueue = $, u.lastRenderedState = f;
      }
      if (r = u.interleaved, r !== null) {
        p = r;
        do
          g = p.lane, Ot.lanes |= g, oa |= g, p = p.next;
        while (p !== r);
      } else
        p === null && (u.lanes = 0);
      return [i.memoizedState, u.dispatch];
    }
    function po(r) {
      var i = Bi(), u = i.queue;
      if (u === null)
        throw Error(y(311));
      u.lastRenderedReducer = r;
      var f = u.dispatch, p = u.pending, g = i.memoizedState;
      if (p !== null) {
        u.pending = null;
        var D = p = p.next;
        do
          g = r(g, D.action), D = D.next;
        while (D !== p);
        Xr(g, i.memoizedState) || (yr = !0), i.memoizedState = g, i.baseQueue === null && (i.baseState = g), u.lastRenderedState = g;
      }
      return [g, f];
    }
    function ws() {
    }
    function wc(r, i) {
      var u = Ot, f = Bi(), p = i(), g = !Xr(f.memoizedState, p);
      if (g && (f.memoizedState = p, yr = !0), f = f.queue, oe(kt.bind(null, u, f, r), [r]), f.getSnapshot !== i || g || an !== null && an.memoizedState.tag & 1) {
        if (u.flags |= 2048, gl(9, Zt.bind(null, u, f, p, i), void 0, null), Hn === null)
          throw Error(y(349));
        Ka & 30 || ot(u, i, p);
      }
      return p;
    }
    function ot(r, i, u) {
      r.flags |= 16384, r = { getSnapshot: i, value: u }, i = Ot.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ot.updateQueue = i, i.stores = [r]) : (u = i.stores, u === null ? i.stores = [r] : u.push(r));
    }
    function Zt(r, i, u, f) {
      i.value = u, i.getSnapshot = f, En(i) && xi(r, 1, -1);
    }
    function kt(r, i, u) {
      return u(function() {
        En(i) && xi(r, 1, -1);
      });
    }
    function En(r) {
      var i = r.getSnapshot;
      r = r.value;
      try {
        var u = i();
        return !Xr(r, u);
      } catch {
        return !0;
      }
    }
    function yi(r) {
      var i = ia();
      return typeof r == "function" && (r = r()), i.memoizedState = i.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: r }, i.queue = r, r = r.dispatch = Ac.bind(null, Ot, r), [i.memoizedState, r];
    }
    function gl(r, i, u, f) {
      return r = { tag: r, create: i, destroy: u, deps: f, next: null }, i = Ot.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ot.updateQueue = i, i.lastEffect = r.next = r) : (u = i.lastEffect, u === null ? i.lastEffect = r.next = r : (f = u.next, u.next = r, r.next = f, i.lastEffect = r)), r;
    }
    function Kf() {
      return Bi().memoizedState;
    }
    function mo(r, i, u, f) {
      var p = ia();
      Ot.flags |= r, p.memoizedState = gl(1 | i, u, void 0, f === void 0 ? null : f);
    }
    function vo(r, i, u, f) {
      var p = Bi();
      f = f === void 0 ? null : f;
      var g = void 0;
      if (hn !== null) {
        var D = hn.memoizedState;
        if (g = D.destroy, f !== null && vi(f, D.deps)) {
          p.memoizedState = gl(i, u, g, f);
          return;
        }
      }
      Ot.flags |= r, p.memoizedState = gl(1 | i, u, g, f);
    }
    function _u(r, i) {
      return mo(8390656, 8, r, i);
    }
    function oe(r, i) {
      return vo(2048, 8, r, i);
    }
    function In(r, i) {
      return vo(4, 2, r, i);
    }
    function Ct(r, i) {
      return vo(4, 4, r, i);
    }
    function Ds(r, i) {
      if (typeof i == "function")
        return r = r(), i(r), function() {
          i(null);
        };
      if (i != null)
        return r = r(), i.current = r, function() {
          i.current = null;
        };
    }
    function za(r, i, u) {
      return u = u != null ? u.concat([r]) : null, vo(4, 4, Ds.bind(null, i, r), u);
    }
    function wa() {
    }
    function sa(r, i) {
      var u = Bi();
      i = i === void 0 ? null : i;
      var f = u.memoizedState;
      return f !== null && i !== null && vi(i, f[1]) ? f[0] : (u.memoizedState = [r, i], r);
    }
    function xl(r, i) {
      var u = Bi();
      i = i === void 0 ? null : i;
      var f = u.memoizedState;
      return f !== null && i !== null && vi(i, f[1]) ? f[0] : (r = r(), u.memoizedState = [r, i], r);
    }
    function Sl(r, i) {
      var u = Ft;
      Ft = u !== 0 && 4 > u ? u : 4, r(!0);
      var f = tn.transition;
      tn.transition = {};
      try {
        r(!1), i();
      } finally {
        Ft = u, tn.transition = f;
      }
    }
    function _l() {
      return Bi().memoizedState;
    }
    function Dc(r, i, u) {
      var f = is(r);
      u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, yo(r) ? go(i, u) : (xo(r, i, u), u = gr(), r = xi(r, f, u), r !== null && So(r, i, f));
    }
    function Ac(r, i, u) {
      var f = is(r), p = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
      if (yo(r))
        go(i, p);
      else {
        xo(r, i, p);
        var g = r.alternate;
        if (r.lanes === 0 && (g === null || g.lanes === 0) && (g = i.lastRenderedReducer, g !== null))
          try {
            var D = i.lastRenderedState, B = g(D, u);
            if (p.hasEagerState = !0, p.eagerState = B, Xr(B, D))
              return;
          } catch {
          } finally {
          }
        u = gr(), r = xi(r, f, u), r !== null && So(r, i, f);
      }
    }
    function yo(r) {
      var i = r.alternate;
      return r === Ot || i !== null && i === Ot;
    }
    function go(r, i) {
      ra = pl = !0;
      var u = r.pending;
      u === null ? i.next = i : (i.next = u.next, u.next = i), r.pending = i;
    }
    function xo(r, i, u) {
      Hn !== null && r.mode & 1 && !(xt & 2) ? (r = i.interleaved, r === null ? (u.next = u, At === null ? At = [i] : At.push(i)) : (u.next = r.next, r.next = u), i.interleaved = u) : (r = i.pending, r === null ? u.next = u : (u.next = r.next, r.next = u), i.pending = u);
    }
    function So(r, i, u) {
      if (u & 4194240) {
        var f = i.lanes;
        f &= r.pendingLanes, u |= f, i.lanes = u, al(r, u);
      }
    }
    var El = { readContext: bt, useCallback: qn, useContext: qn, useEffect: qn, useImperativeHandle: qn, useInsertionEffect: qn, useLayoutEffect: qn, useMemo: qn, useReducer: qn, useRef: qn, useState: qn, useDebugValue: qn, useDeferredValue: qn, useTransition: qn, useMutableSource: qn, useSyncExternalStore: qn, useId: qn, unstable_isNewReconciler: !1 }, Nc = { readContext: bt, useCallback: function(r, i) {
      return ia().memoizedState = [r, i === void 0 ? null : i], r;
    }, useContext: bt, useEffect: _u, useImperativeHandle: function(r, i, u) {
      return u = u != null ? u.concat([r]) : null, mo(
        4194308,
        4,
        Ds.bind(null, i, r),
        u
      );
    }, useLayoutEffect: function(r, i) {
      return mo(4194308, 4, r, i);
    }, useInsertionEffect: function(r, i) {
      return mo(4, 2, r, i);
    }, useMemo: function(r, i) {
      var u = ia();
      return i = i === void 0 ? null : i, r = r(), u.memoizedState = [r, i], r;
    }, useReducer: function(r, i, u) {
      var f = ia();
      return i = u !== void 0 ? u(i) : i, f.memoizedState = f.baseState = i, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: i }, f.queue = r, r = r.dispatch = Dc.bind(null, Ot, r), [f.memoizedState, r];
    }, useRef: function(r) {
      var i = ia();
      return r = { current: r }, i.memoizedState = r;
    }, useState: yi, useDebugValue: wa, useDeferredValue: function(r) {
      var i = yi(r), u = i[0], f = i[1];
      return _u(function() {
        var p = tn.transition;
        tn.transition = {};
        try {
          f(r);
        } finally {
          tn.transition = p;
        }
      }, [r]), u;
    }, useTransition: function() {
      var r = yi(!1), i = r[0];
      return r = Sl.bind(null, r[1]), ia().memoizedState = r, [i, r];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(r, i, u) {
      var f = Ot, p = ia();
      if (cn) {
        if (u === void 0)
          throw Error(y(407));
        u = u();
      } else {
        if (u = i(), Hn === null)
          throw Error(y(349));
        Ka & 30 || ot(f, i, u);
      }
      p.memoizedState = u;
      var g = { value: u, getSnapshot: i };
      return p.queue = g, _u(kt.bind(null, f, g, r), [r]), f.flags |= 2048, gl(9, Zt.bind(null, f, g, u, i), void 0, null), u;
    }, useId: function() {
      var r = ia(), i = Hn.identifierPrefix;
      if (cn) {
        var u = Ma, f = Ca;
        u = (f & ~(1 << 32 - Nr(f) - 1)).toString(32) + u, i = ":" + i + "R" + u, u = ml++, 0 < u && (i += "H" + u.toString(32)), i += ":";
      } else
        u = vl++, i = ":" + i + "r" + u.toString(32) + ":";
      return r.memoizedState = i;
    }, unstable_isNewReconciler: !1 }, Fc = {
      readContext: bt,
      useCallback: sa,
      useContext: bt,
      useEffect: oe,
      useImperativeHandle: za,
      useInsertionEffect: In,
      useLayoutEffect: Ct,
      useMemo: xl,
      useReducer: Su,
      useRef: Kf,
      useState: function() {
        return Su(aa);
      },
      useDebugValue: wa,
      useDeferredValue: function(r) {
        var i = Su(aa), u = i[0], f = i[1];
        return oe(function() {
          var p = tn.transition;
          tn.transition = {};
          try {
            f(r);
          } finally {
            tn.transition = p;
          }
        }, [r]), u;
      },
      useTransition: function() {
        var r = Su(aa)[0], i = Bi().memoizedState;
        return [r, i];
      },
      useMutableSource: ws,
      useSyncExternalStore: wc,
      useId: _l,
      unstable_isNewReconciler: !1
    }, Oc = {
      readContext: bt,
      useCallback: sa,
      useContext: bt,
      useEffect: oe,
      useImperativeHandle: za,
      useInsertionEffect: In,
      useLayoutEffect: Ct,
      useMemo: xl,
      useReducer: po,
      useRef: Kf,
      useState: function() {
        return po(aa);
      },
      useDebugValue: wa,
      useDeferredValue: function(r) {
        var i = po(aa), u = i[0], f = i[1];
        return oe(function() {
          var p = tn.transition;
          tn.transition = {};
          try {
            f(r);
          } finally {
            tn.transition = p;
          }
        }, [r]), u;
      },
      useTransition: function() {
        var r = po(aa)[0], i = Bi().memoizedState;
        return [r, i];
      },
      useMutableSource: ws,
      useSyncExternalStore: wc,
      useId: _l,
      unstable_isNewReconciler: !1
    };
    function Eu(r, i) {
      try {
        var u = "", f = i;
        do
          u += _(f), f = f.return;
        while (f);
        var p = u;
      } catch (g) {
        p = `
Error generating stack: ` + g.message + `
` + g.stack;
      }
      return { value: r, source: i, stack: p };
    }
    function Ru(r, i) {
      try {
        console.error(i.value);
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    var Uc = typeof WeakMap == "function" ? WeakMap : Map;
    function _o(r, i, u) {
      u = Jr(-1, u), u.tag = 3, u.payload = { element: null };
      var f = i.value;
      return u.callback = function() {
        wu || (wu = !0, Fo = f), Ru(r, i);
      }, u;
    }
    function Eo(r, i, u) {
      u = Jr(-1, u), u.tag = 3;
      var f = r.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = i.value;
        u.payload = function() {
          return f(p);
        }, u.callback = function() {
          Ru(r, i);
        };
      }
      var g = r.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" && (u.callback = function() {
        Ru(r, i), typeof f != "function" && (ns === null ? ns = /* @__PURE__ */ new Set([this]) : ns.add(this));
        var D = i.stack;
        this.componentDidCatch(i.value, { componentStack: D !== null ? D : "" });
      }), u;
    }
    function Tu(r, i, u) {
      var f = r.pingCache;
      if (f === null) {
        f = r.pingCache = new Uc();
        var p = /* @__PURE__ */ new Set();
        f.set(i, p);
      } else
        p = f.get(i), p === void 0 && (p = /* @__PURE__ */ new Set(), f.set(i, p));
      p.has(u) || (p.add(u), r = ca.bind(null, r, i, u), i.then(r, r));
    }
    function As(r) {
      do {
        var i;
        if ((i = r.tag === 13) && (i = r.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i)
          return r;
        r = r.return;
      } while (r !== null);
      return null;
    }
    function Ro(r, i, u, f, p) {
      return r.mode & 1 ? (r.flags |= 65536, r.lanes = p, r) : (r === i ? r.flags |= 65536 : (r.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (i = Jr(-1, 1), i.tag = 2, Oi(u, i))), u.lanes |= 1), r);
    }
    function gi(r) {
      r.flags |= 4;
    }
    function To(r, i) {
      if (r !== null && r.child === i.child)
        return !0;
      if (i.flags & 16)
        return !1;
      for (r = i.child; r !== null; ) {
        if (r.flags & 12854 || r.subtreeFlags & 12854)
          return !1;
        r = r.sibling;
      }
      return !0;
    }
    var Ns, Rl, $a, bu;
    if (Nn)
      Ns = function(r, i) {
        for (var u = i.child; u !== null; ) {
          if (u.tag === 5 || u.tag === 6)
            j(r, u.stateNode);
          else if (u.tag !== 4 && u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
          if (u === i)
            break;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === i)
              return;
            u = u.return;
          }
          u.sibling.return = u.return, u = u.sibling;
        }
      }, Rl = function() {
      }, $a = function(r, i, u, f, p) {
        if (r = r.memoizedProps, r !== f) {
          var g = i.stateNode, D = Li(Or.current);
          u = Pe(g, u, r, f, p, D), (i.updateQueue = u) && gi(i);
        }
      }, bu = function(r, i, u, f) {
        u !== f && gi(i);
      };
    else if (nr) {
      Ns = function(r, i, u, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var g = p.stateNode;
            u && f && (g = _r(g, p.type, p.memoizedProps, p)), j(r, g);
          } else if (p.tag === 6)
            g = p.stateNode, u && f && (g = Ir(g, p.memoizedProps, p)), j(r, g);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null)
              g = p.child, g !== null && (g.return = p), Ns(r, p, !0, !0);
            else if (p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
          }
          if (p === i)
            break;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === i)
              return;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
      };
      var Tl = function(r, i, u, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var g = p.stateNode;
            u && f && (g = _r(g, p.type, p.memoizedProps, p)), Zi(r, g);
          } else if (p.tag === 6)
            g = p.stateNode, u && f && (g = Ir(g, p.memoizedProps, p)), Zi(r, g);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null)
              g = p.child, g !== null && (g.return = p), Tl(r, p, !0, !0);
            else if (p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
          }
          if (p === i)
            break;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === i)
              return;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
      };
      Rl = function(r, i) {
        var u = i.stateNode;
        if (!To(r, i)) {
          r = u.containerInfo;
          var f = rr(r);
          Tl(f, i, !1, !1), u.pendingChildren = f, gi(i), Wa(r, f);
        }
      }, $a = function(r, i, u, f, p) {
        var g = r.stateNode, D = r.memoizedProps;
        if ((r = To(r, i)) && D === f)
          i.stateNode = g;
        else {
          var B = i.stateNode, $ = Li(Or.current), me = null;
          D !== f && (me = Pe(B, u, D, f, p, $)), r && me === null ? i.stateNode = g : (g = Ji(g, me, u, D, f, i, r, B), je(g, u, f, p, $) && gi(i), i.stateNode = g, r ? gi(i) : Ns(g, i, !1, !1));
        }
      }, bu = function(r, i, u, f) {
        u !== f ? (r = Li(Za.current), u = Li(Or.current), i.stateNode = Ve(f, r, u, i), gi(i)) : i.stateNode = r.stateNode;
      };
    } else
      Rl = function() {
      }, $a = function() {
      }, bu = function() {
      };
    function Hi(r, i) {
      if (!cn)
        switch (r.tailMode) {
          case "hidden":
            i = r.tail;
            for (var u = null; i !== null; )
              i.alternate !== null && (u = i), i = i.sibling;
            u === null ? r.tail = null : u.sibling = null;
            break;
          case "collapsed":
            u = r.tail;
            for (var f = null; u !== null; )
              u.alternate !== null && (f = u), u = u.sibling;
            f === null ? i || r.tail === null ? r.tail = null : r.tail.sibling = null : f.sibling = null;
        }
    }
    function nn(r) {
      var i = r.alternate !== null && r.alternate.child === r.child, u = 0, f = 0;
      if (i)
        for (var p = r.child; p !== null; )
          u |= p.lanes | p.childLanes, f |= p.subtreeFlags & 14680064, f |= p.flags & 14680064, p.return = r, p = p.sibling;
      else
        for (p = r.child; p !== null; )
          u |= p.lanes | p.childLanes, f |= p.subtreeFlags, f |= p.flags, p.return = r, p = p.sibling;
      return r.subtreeFlags |= f, r.childLanes = u, i;
    }
    function Vh(r, i, u) {
      var f = i.pendingProps;
      switch (bc(i), i.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return nn(i), null;
        case 1:
          return vr(i.type) && Qa(), nn(i), null;
        case 3:
          return f = i.stateNode, Ms(), Gt(Jt), Gt(Vn), na(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (r === null || r.child === null) && (hu(i) ? gi(i) : r === null || r.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, mi !== null && (Nu(mi), mi = null))), Rl(r, i), nn(i), null;
        case 5:
          Kr(i), u = Li(Za.current);
          var p = i.type;
          if (r !== null && i.stateNode != null)
            $a(r, i, p, f, u), r.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
          else {
            if (!f) {
              if (i.stateNode === null)
                throw Error(y(166));
              return nn(i), null;
            }
            if (r = Li(Or.current), hu(i)) {
              if (!qt)
                throw Error(y(175));
              r = ge(i.stateNode, i.type, i.memoizedProps, u, r, i, !fl), i.updateQueue = r, r !== null && gi(i);
            } else {
              var g = U(p, f, u, r, i);
              Ns(g, i, !1, !1), i.stateNode = g, je(g, p, f, u, r) && gi(i);
            }
            i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
          }
          return nn(i), null;
        case 6:
          if (r && i.stateNode != null)
            bu(r, i, r.memoizedProps, f);
          else {
            if (typeof f != "string" && i.stateNode === null)
              throw Error(y(166));
            if (r = Li(Za.current), u = Li(Or.current), hu(i)) {
              if (!qt)
                throw Error(y(176));
              if (r = i.stateNode, f = i.memoizedProps, (u = $e(r, f, i, !fl)) && (p = Zr, p !== null))
                switch (g = (p.mode & 1) !== 0, p.tag) {
                  case 3:
                    Bn(p.stateNode.containerInfo, r, f, g);
                    break;
                  case 5:
                    Rr(p.type, p.memoizedProps, p.stateNode, r, f, g);
                }
              u && gi(i);
            } else
              i.stateNode = Ve(f, r, u, i);
          }
          return nn(i), null;
        case 13:
          if (Gt(fn), f = i.memoizedState, cn && ar !== null && i.mode & 1 && !(i.flags & 128)) {
            for (r = ar; r; )
              r = _a(r);
            return dl(), i.flags |= 98560, i;
          }
          if (f !== null && f.dehydrated !== null) {
            if (f = hu(i), r === null) {
              if (!f)
                throw Error(y(318));
              if (!qt)
                throw Error(y(344));
              if (r = i.memoizedState, r = r !== null ? r.dehydrated : null, !r)
                throw Error(y(317));
              wt(r, i);
            } else
              dl(), !(i.flags & 128) && (i.memoizedState = null), i.flags |= 4;
            return nn(i), null;
          }
          return mi !== null && (Nu(mi), mi = null), i.flags & 128 ? (i.lanes = u, i) : (f = f !== null, u = !1, r === null ? hu(i) : u = r.memoizedState !== null, f && !u && (i.child.flags |= 8192, i.mode & 1 && (r === null || fn.current & 1 ? Gn === 0 && (Gn = 3) : ef())), i.updateQueue !== null && (i.flags |= 4), nn(i), null);
        case 4:
          return Ms(), Rl(r, i), r === null && On(i.stateNode.containerInfo), nn(i), null;
        case 10:
          return gt(i.type._context), nn(i), null;
        case 17:
          return vr(i.type) && Qa(), nn(i), null;
        case 19:
          if (Gt(fn), p = i.memoizedState, p === null)
            return nn(i), null;
          if (f = (i.flags & 128) !== 0, g = p.rendering, g === null)
            if (f)
              Hi(p, !1);
            else {
              if (Gn !== 0 || r !== null && r.flags & 128)
                for (r = i.child; r !== null; ) {
                  if (g = zs(r), g !== null) {
                    for (i.flags |= 128, Hi(p, !1), r = g.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), i.subtreeFlags = 0, r = u, f = i.child; f !== null; )
                      u = f, p = r, u.flags &= 14680066, g = u.alternate, g === null ? (u.childLanes = 0, u.lanes = p, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = g.childLanes, u.lanes = g.lanes, u.child = g.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = g.memoizedProps, u.memoizedState = g.memoizedState, u.updateQueue = g.updateQueue, u.type = g.type, p = g.dependencies, u.dependencies = p === null ? null : { lanes: p.lanes, firstContext: p.firstContext }), f = f.sibling;
                    return Xt(fn, fn.current & 1 | 2), i.child;
                  }
                  r = r.sibling;
                }
              p.tail !== null && on() > Jc && (i.flags |= 128, f = !0, Hi(p, !1), i.lanes = 4194304);
            }
          else {
            if (!f)
              if (r = zs(g), r !== null) {
                if (i.flags |= 128, f = !0, r = r.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), Hi(p, !0), p.tail === null && p.tailMode === "hidden" && !g.alternate && !cn)
                  return nn(i), null;
              } else
                2 * on() - p.renderingStartTime > Jc && u !== 1073741824 && (i.flags |= 128, f = !0, Hi(p, !1), i.lanes = 4194304);
            p.isBackwards ? (g.sibling = i.child, i.child = g) : (r = p.last, r !== null ? r.sibling = g : i.child = g, p.last = g);
          }
          return p.tail !== null ? (i = p.tail, p.rendering = i, p.tail = i.sibling, p.renderingStartTime = on(), i.sibling = null, r = fn.current, Xt(fn, f ? r & 1 | 2 : r & 1), i) : (nn(i), null);
        case 22:
        case 23:
          return Si(), f = i.memoizedState !== null, r !== null && r.memoizedState !== null !== f && (i.flags |= 8192), f && i.mode & 1 ? ei & 1073741824 && (nn(i), Nn && i.subtreeFlags & 6 && (i.flags |= 8192)) : nn(i), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(y(156, i.tag));
    }
    var ln = C.ReactCurrentOwner, yr = !1;
    function $n(r, i, u, f) {
      i.child = r === null ? fo(i, null, u, f) : hl(i, r.child, u, f);
    }
    function bl(r, i, u, f, p) {
      u = u.render;
      var g = i.ref;
      return jt(i, p), f = yl(r, i, u, f, g, p), u = xu(), r !== null && !yr ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, Rn(r, i, p)) : (cn && u && Tc(i), i.flags |= 1, $n(r, i, f, p), i.child);
    }
    function Cu(r, i, u, f, p) {
      if (r === null) {
        var g = u.type;
        return typeof g == "function" && !Ys(g) && g.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (i.tag = 15, i.type = g, $f(r, i, g, f, p)) : (r = Ws(u.type, null, f, i, i.mode, p), r.ref = i.ref, r.return = i, i.child = r);
      }
      if (g = r.child, !(r.lanes & p)) {
        var D = g.memoizedProps;
        if (u = u.compare, u = u !== null ? u : sl, u(D, f) && r.ref === i.ref)
          return Rn(r, i, p);
      }
      return i.flags |= 1, r = Br(g, f), r.ref = i.ref, r.return = i, i.child = r;
    }
    function $f(r, i, u, f, p) {
      if (r !== null && sl(r.memoizedProps, f) && r.ref === i.ref)
        if (yr = !1, (r.lanes & p) !== 0)
          r.flags & 131072 && (yr = !0);
        else
          return i.lanes = r.lanes, Rn(r, i, p);
      return Lc(r, i, u, f, p);
    }
    function ed(r, i, u) {
      var f = i.pendingProps, p = f.children, g = r !== null ? r.memoizedState : null;
      if (f.mode === "hidden")
        if (!(i.mode & 1))
          i.memoizedState = { baseLanes: 0, cachePool: null }, Xt(Nl, ei), ei |= u;
        else if (u & 1073741824)
          i.memoizedState = { baseLanes: 0, cachePool: null }, f = g !== null ? g.baseLanes : u, Xt(Nl, ei), ei |= f;
        else
          return r = g !== null ? g.baseLanes | u : u, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: r, cachePool: null }, i.updateQueue = null, Xt(Nl, ei), ei |= r, null;
      else
        g !== null ? (f = g.baseLanes | u, i.memoizedState = null) : f = u, Xt(Nl, ei), ei |= f;
      return $n(r, i, p, u), i.child;
    }
    function td(r, i) {
      var u = i.ref;
      (r === null && u !== null || r !== null && r.ref !== u) && (i.flags |= 512, i.flags |= 2097152);
    }
    function Lc(r, i, u, f, p) {
      var g = vr(u) ? oi : Vn.current;
      return g = Ia(i, g), jt(i, p), u = yl(r, i, u, f, g, p), f = xu(), r !== null && !yr ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, Rn(r, i, p)) : (cn && f && Tc(i), i.flags |= 1, $n(r, i, u, p), i.child);
    }
    function bo(r, i, u, f, p) {
      if (vr(u)) {
        var g = !0;
        ea(i);
      } else
        g = !1;
      if (jt(i, p), i.stateNode === null)
        r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), Xf(i, u, f), Rc(i, u, f, p), f = !0;
      else if (r === null) {
        var D = i.stateNode, B = i.memoizedProps;
        D.props = B;
        var $ = D.context, me = u.contextType;
        typeof me == "object" && me !== null ? me = bt(me) : (me = vr(u) ? oi : Vn.current, me = Ia(i, me));
        var Ee = u.getDerivedStateFromProps, it = typeof Ee == "function" || typeof D.getSnapshotBeforeUpdate == "function";
        it || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (B !== f || $ !== me) && Jf(i, D, f, me), Vt = !1;
        var Ze = i.memoizedState;
        D.state = Ze, ul(i, f, D, p), $ = i.memoizedState, B !== f || Ze !== $ || Jt.current || Vt ? (typeof Ee == "function" && (io(i, u, Ee, f), $ = i.memoizedState), (B = Vt || Gf(i, u, B, f, Ze, $, me)) ? (it || typeof D.UNSAFE_componentWillMount != "function" && typeof D.componentWillMount != "function" || (typeof D.componentWillMount == "function" && D.componentWillMount(), typeof D.UNSAFE_componentWillMount == "function" && D.UNSAFE_componentWillMount()), typeof D.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof D.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = f, i.memoizedState = $), D.props = f, D.state = $, D.context = me, f = B) : (typeof D.componentDidMount == "function" && (i.flags |= 4194308), f = !1);
      } else {
        D = i.stateNode, ta(r, i), B = i.memoizedProps, me = i.type === i.elementType ? B : N(i.type, B), D.props = me, it = i.pendingProps, Ze = D.context, $ = u.contextType, typeof $ == "object" && $ !== null ? $ = bt($) : ($ = vr(u) ? oi : Vn.current, $ = Ia(i, $));
        var sn = u.getDerivedStateFromProps;
        (Ee = typeof sn == "function" || typeof D.getSnapshotBeforeUpdate == "function") || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (B !== it || Ze !== $) && Jf(i, D, f, $), Vt = !1, Ze = i.memoizedState, D.state = Ze, ul(i, f, D, p);
        var qe = i.memoizedState;
        B !== it || Ze !== qe || Jt.current || Vt ? (typeof sn == "function" && (io(i, u, sn, f), qe = i.memoizedState), (me = Vt || Gf(i, u, me, f, Ze, qe, $) || !1) ? (Ee || typeof D.UNSAFE_componentWillUpdate != "function" && typeof D.componentWillUpdate != "function" || (typeof D.componentWillUpdate == "function" && D.componentWillUpdate(
          f,
          qe,
          $
        ), typeof D.UNSAFE_componentWillUpdate == "function" && D.UNSAFE_componentWillUpdate(f, qe, $)), typeof D.componentDidUpdate == "function" && (i.flags |= 4), typeof D.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof D.componentDidUpdate != "function" || B === r.memoizedProps && Ze === r.memoizedState || (i.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || B === r.memoizedProps && Ze === r.memoizedState || (i.flags |= 1024), i.memoizedProps = f, i.memoizedState = qe), D.props = f, D.state = qe, D.context = $, f = me) : (typeof D.componentDidUpdate != "function" || B === r.memoizedProps && Ze === r.memoizedState || (i.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || B === r.memoizedProps && Ze === r.memoizedState || (i.flags |= 1024), f = !1);
      }
      return kc(r, i, u, f, g, p);
    }
    function kc(r, i, u, f, p, g) {
      td(r, i);
      var D = (i.flags & 128) !== 0;
      if (!f && !D)
        return p && Ga(i, u, !1), Rn(r, i, g);
      f = i.stateNode, ln.current = i;
      var B = D && typeof u.getDerivedStateFromError != "function" ? null : f.render();
      return i.flags |= 1, r !== null && D ? (i.child = hl(i, r.child, null, g), i.child = hl(i, null, B, g)) : $n(r, i, B, g), i.memoizedState = f.state, p && Ga(i, u, !0), i.child;
    }
    function Co(r) {
      var i = r.stateNode;
      i.pendingContext ? nl(r, i.pendingContext, i.pendingContext !== i.context) : i.context && nl(r, i.context, !1), ho(r, i.containerInfo);
    }
    function Bc(r, i, u, f, p) {
      return dl(), pu(p), i.flags |= 256, $n(r, i, u, f), i.child;
    }
    var Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Fs(r) {
      return { baseLanes: r, cachePool: null };
    }
    function nd(r, i, u) {
      var f = i.pendingProps, p = fn.current, g = !1, D = (i.flags & 128) !== 0, B;
      if ((B = D) || (B = r !== null && r.memoizedState === null ? !1 : (p & 2) !== 0), B ? (g = !0, i.flags &= -129) : (r === null || r.memoizedState !== null) && (p |= 1), Xt(fn, p & 1), r === null)
        return oo(i), r = i.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (i.mode & 1 ? si(r) ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (p = f.children, r = f.fallback, g ? (f = i.mode, g = i.child, p = { mode: "hidden", children: p }, !(f & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = p) : g = Uu(p, f, 0, null), r = ss(r, f, u, null), g.return = i, r.return = i, g.sibling = r, i.child = g, i.child.memoizedState = Fs(u), i.memoizedState = Mo, r) : zo(i, p));
      if (p = r.memoizedState, p !== null) {
        if (B = p.dehydrated, B !== null) {
          if (D)
            return i.flags & 256 ? (i.flags &= -257, la(r, i, u, Error(y(422)))) : i.memoizedState !== null ? (i.child = r.child, i.flags |= 128, null) : (g = f.fallback, p = i.mode, f = Uu({ mode: "visible", children: f.children }, p, 0, null), g = ss(g, p, u, null), g.flags |= 2, f.return = i, g.return = i, f.sibling = g, i.child = f, i.mode & 1 && hl(
              i,
              r.child,
              null,
              u
            ), i.child.memoizedState = Fs(u), i.memoizedState = Mo, g);
          if (!(i.mode & 1))
            i = la(r, i, u, null);
          else if (si(B))
            i = la(r, i, u, Error(y(419)));
          else if (f = (u & r.childLanes) !== 0, yr || f) {
            if (f = Hn, f !== null) {
              switch (u & -u) {
                case 4:
                  g = 2;
                  break;
                case 16:
                  g = 8;
                  break;
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  g = 32;
                  break;
                case 536870912:
                  g = 268435456;
                  break;
                default:
                  g = 0;
              }
              f = g & (f.suspendedLanes | u) ? 0 : g, f !== 0 && f !== p.retryLane && (p.retryLane = f, xi(r, f, -1));
            }
            ef(), i = la(r, i, u, Error(y(421)));
          } else
            gs(B) ? (i.flags |= 128, i.child = r.child, i = Ih.bind(null, r), qa(B, i), i = null) : (u = p.treeContext, qt && (ar = ae(B), Zr = i, cn = !0, mi = null, fl = !1, u !== null && (hi[pi++] = Ca, hi[pi++] = Ma, hi[pi++] = Ts, Ca = u.id, Ma = u.overflow, Ts = i)), i = zo(i, i.pendingProps.children), i.flags |= 4096);
          return i;
        }
        return g ? (f = id(r, i, f.children, f.fallback, u), g = i.child, p = r.child.memoizedState, g.memoizedState = p === null ? Fs(u) : { baseLanes: p.baseLanes | u, cachePool: null }, g.childLanes = r.childLanes & ~u, i.memoizedState = Mo, f) : (u = rd(r, i, f.children, u), i.memoizedState = null, u);
      }
      return g ? (f = id(r, i, f.children, f.fallback, u), g = i.child, p = r.child.memoizedState, g.memoizedState = p === null ? Fs(u) : { baseLanes: p.baseLanes | u, cachePool: null }, g.childLanes = r.childLanes & ~u, i.memoizedState = Mo, f) : (u = rd(r, i, f.children, u), i.memoizedState = null, u);
    }
    function zo(r, i) {
      return i = Uu({ mode: "visible", children: i }, r.mode, 0, null), i.return = r, r.child = i;
    }
    function rd(r, i, u, f) {
      var p = r.child;
      return r = p.sibling, u = Br(p, { mode: "visible", children: u }), !(i.mode & 1) && (u.lanes = f), u.return = i, u.sibling = null, r !== null && (f = i.deletions, f === null ? (i.deletions = [r], i.flags |= 16) : f.push(r)), i.child = u;
    }
    function id(r, i, u, f, p) {
      var g = i.mode;
      r = r.child;
      var D = r.sibling, B = { mode: "hidden", children: u };
      return !(g & 1) && i.child !== r ? (u = i.child, u.childLanes = 0, u.pendingProps = B, i.deletions = null) : (u = Br(r, B), u.subtreeFlags = r.subtreeFlags & 14680064), D !== null ? f = Br(D, f) : (f = ss(f, g, p, null), f.flags |= 2), f.return = i, u.return = i, u.sibling = f, i.child = u, f;
    }
    function la(r, i, u, f) {
      return f !== null && pu(f), hl(i, r.child, null, u), r = zo(i, i.pendingProps.children), r.flags |= 2, i.memoizedState = null, r;
    }
    function Cl(r, i, u) {
      r.lanes |= i;
      var f = r.alternate;
      f !== null && (f.lanes |= i), Pt(r.return, i, u);
    }
    function Da(r, i, u, f, p) {
      var g = r.memoizedState;
      g === null ? r.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: p } : (g.isBackwards = i, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = u, g.tailMode = p);
    }
    function wo(r, i, u) {
      var f = i.pendingProps, p = f.revealOrder, g = f.tail;
      if ($n(r, i, f.children, u), f = fn.current, f & 2)
        f = f & 1 | 2, i.flags |= 128;
      else {
        if (r !== null && r.flags & 128)
          e:
            for (r = i.child; r !== null; ) {
              if (r.tag === 13)
                r.memoizedState !== null && Cl(r, u, i);
              else if (r.tag === 19)
                Cl(r, u, i);
              else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === i)
                break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === i)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
        f &= 1;
      }
      if (Xt(fn, f), !(i.mode & 1))
        i.memoizedState = null;
      else
        switch (p) {
          case "forwards":
            for (u = i.child, p = null; u !== null; )
              r = u.alternate, r !== null && zs(r) === null && (p = u), u = u.sibling;
            u = p, u === null ? (p = i.child, i.child = null) : (p = u.sibling, u.sibling = null), Da(i, !1, p, u, g);
            break;
          case "backwards":
            for (u = null, p = i.child, i.child = null; p !== null; ) {
              if (r = p.alternate, r !== null && zs(r) === null) {
                i.child = p;
                break;
              }
              r = p.sibling, p.sibling = u, u = p, p = r;
            }
            Da(i, !0, u, null, g);
            break;
          case "together":
            Da(i, !1, null, null, void 0);
            break;
          default:
            i.memoizedState = null;
        }
      return i.child;
    }
    function Rn(r, i, u) {
      if (r !== null && (i.dependencies = r.dependencies), oa |= i.lanes, !(u & i.childLanes))
        return null;
      if (r !== null && i.child !== r.child)
        throw Error(y(153));
      if (i.child !== null) {
        for (r = i.child, u = Br(r, r.pendingProps), i.child = u, u.return = i; r.sibling !== null; )
          r = r.sibling, u = u.sibling = Br(r, r.pendingProps), u.return = i;
        u.sibling = null;
      }
      return i.child;
    }
    function Ml(r, i, u) {
      switch (i.tag) {
        case 3:
          Co(i), dl();
          break;
        case 5:
          gu(i);
          break;
        case 1:
          vr(i.type) && ea(i);
          break;
        case 4:
          ho(i, i.stateNode.containerInfo);
          break;
        case 10:
          lt(i, i.type._context, i.memoizedProps.value);
          break;
        case 13:
          var f = i.memoizedState;
          if (f !== null)
            return f.dehydrated !== null ? (Xt(fn, fn.current & 1), i.flags |= 128, null) : u & i.child.childLanes ? nd(r, i, u) : (Xt(fn, fn.current & 1), r = Rn(r, i, u), r !== null ? r.sibling : null);
          Xt(fn, fn.current & 1);
          break;
        case 19:
          if (f = (u & i.childLanes) !== 0, r.flags & 128) {
            if (f)
              return wo(
                r,
                i,
                u
              );
            i.flags |= 128;
          }
          var p = i.memoizedState;
          if (p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Xt(fn, fn.current), f)
            break;
          return null;
        case 22:
        case 23:
          return i.lanes = 0, ed(r, i, u);
      }
      return Rn(r, i, u);
    }
    function mt(r, i) {
      switch (bc(i), i.tag) {
        case 1:
          return vr(i.type) && Qa(), r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 3:
          return Ms(), Gt(Jt), Gt(Vn), na(), r = i.flags, r & 65536 && !(r & 128) ? (i.flags = r & -65537 | 128, i) : null;
        case 5:
          return Kr(i), null;
        case 13:
          if (Gt(fn), r = i.memoizedState, r !== null && r.dehydrated !== null) {
            if (i.alternate === null)
              throw Error(y(340));
            dl();
          }
          return r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 19:
          return Gt(fn), null;
        case 4:
          return Ms(), null;
        case 10:
          return gt(i.type._context), null;
        case 22:
        case 23:
          return Si(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Os = !1, es = !1, Av = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
    function zl(r, i) {
      var u = r.ref;
      if (u !== null)
        if (typeof u == "function")
          try {
            u(null);
          } catch (f) {
            Yt(r, i, f);
          }
        else
          u.current = null;
    }
    function Us(r, i, u) {
      try {
        u();
      } catch (f) {
        Yt(r, i, f);
      }
    }
    var ad = !1;
    function sd(r, i) {
      for (ie(r.containerInfo), Ne = i; Ne !== null; )
        if (r = Ne, i = r.child, (r.subtreeFlags & 1028) !== 0 && i !== null)
          i.return = r, Ne = i;
        else
          for (; Ne !== null; ) {
            r = Ne;
            try {
              var u = r.alternate;
              if (r.flags & 1024)
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (u !== null) {
                      var f = u.memoizedProps, p = u.memoizedState, g = r.stateNode, D = g.getSnapshotBeforeUpdate(r.elementType === r.type ? f : N(r.type, f), p);
                      g.__reactInternalSnapshotBeforeUpdate = D;
                    }
                    break;
                  case 3:
                    Nn && ht(r.stateNode.containerInfo);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(y(163));
                }
            } catch (B) {
              Yt(r, r.return, B);
            }
            if (i = r.sibling, i !== null) {
              i.return = r.return, Ne = i;
              break;
            }
            Ne = r.return;
          }
      return u = ad, ad = !1, u;
    }
    function Ls(r, i, u) {
      var f = i.updateQueue;
      if (f = f !== null ? f.lastEffect : null, f !== null) {
        var p = f = f.next;
        do {
          if ((p.tag & r) === r) {
            var g = p.destroy;
            p.destroy = void 0, g !== void 0 && Us(i, u, g);
          }
          p = p.next;
        } while (p !== f);
      }
    }
    function ks(r, i) {
      if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
        var u = i = i.next;
        do {
          if ((u.tag & r) === r) {
            var f = u.create;
            u.destroy = f();
          }
          u = u.next;
        } while (u !== i);
      }
    }
    function Hc(r) {
      var i = r.ref;
      if (i !== null) {
        var u = r.stateNode;
        switch (r.tag) {
          case 5:
            r = ut(u);
            break;
          default:
            r = u;
        }
        typeof i == "function" ? i(r) : i.current = r;
      }
    }
    function Pc(r, i, u) {
      if (fi && typeof fi.onCommitFiberUnmount == "function")
        try {
          fi.onCommitFiberUnmount(ba, i);
        } catch {
        }
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (r = i.updateQueue, r !== null && (r = r.lastEffect, r !== null)) {
            var f = r = r.next;
            do {
              var p = f, g = p.destroy;
              p = p.tag, g !== void 0 && (p & 2 || p & 4) && Us(i, u, g), f = f.next;
            } while (f !== r);
          }
          break;
        case 1:
          if (zl(i, u), r = i.stateNode, typeof r.componentWillUnmount == "function")
            try {
              r.props = i.memoizedProps, r.state = i.memoizedState, r.componentWillUnmount();
            } catch (D) {
              Yt(
                i,
                u,
                D
              );
            }
          break;
        case 5:
          zl(i, u);
          break;
        case 4:
          Nn ? Qn(r, i, u) : nr && nr && (i = i.stateNode.containerInfo, u = rr(i), Et(i, u));
      }
    }
    function jc(r, i, u) {
      for (var f = i; ; )
        if (Pc(r, f, u), f.child === null || Nn && f.tag === 4) {
          if (f === i)
            break;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === i)
              return;
            f = f.return;
          }
          f.sibling.return = f.return, f = f.sibling;
        } else
          f.child.return = f, f = f.child;
    }
    function Pi(r) {
      var i = r.alternate;
      i !== null && (r.alternate = null, Pi(i)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (i = r.stateNode, i !== null && jn(i)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
    }
    function wl(r) {
      return r.tag === 5 || r.tag === 3 || r.tag === 4;
    }
    function Dl(r) {
      e:
        for (; ; ) {
          for (; r.sibling === null; ) {
            if (r.return === null || wl(r.return))
              return null;
            r = r.return;
          }
          for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
            if (r.flags & 2 || r.child === null || r.tag === 4)
              continue e;
            r.child.return = r, r = r.child;
          }
          if (!(r.flags & 2))
            return r.stateNode;
        }
    }
    function Do(r) {
      if (Nn) {
        e: {
          for (var i = r.return; i !== null; ) {
            if (wl(i))
              break e;
            i = i.return;
          }
          throw Error(y(160));
        }
        var u = i;
        switch (u.tag) {
          case 5:
            i = u.stateNode, u.flags & 32 && (Rt(i), u.flags &= -33), u = Dl(r), $r(r, u, i);
            break;
          case 3:
          case 4:
            i = u.stateNode.containerInfo, u = Dl(r), Bs(r, u, i);
            break;
          default:
            throw Error(y(161));
        }
      }
    }
    function Bs(r, i, u) {
      var f = r.tag;
      if (f === 5 || f === 6)
        r = r.stateNode, i ? Qe(u, r, i) : Xi(u, r);
      else if (f !== 4 && (r = r.child, r !== null))
        for (Bs(r, i, u), r = r.sibling; r !== null; )
          Bs(r, i, u), r = r.sibling;
    }
    function $r(r, i, u) {
      var f = r.tag;
      if (f === 5 || f === 6)
        r = r.stateNode, i ? we(u, r, i) : Di(u, r);
      else if (f !== 4 && (r = r.child, r !== null))
        for ($r(r, i, u), r = r.sibling; r !== null; )
          $r(r, i, u), r = r.sibling;
    }
    function Qn(r, i, u) {
      for (var f = i, p = !1, g, D; ; ) {
        if (!p) {
          p = f.return;
          e:
            for (; ; ) {
              if (p === null)
                throw Error(y(160));
              switch (g = p.stateNode, p.tag) {
                case 5:
                  D = !1;
                  break e;
                case 3:
                  g = g.containerInfo, D = !0;
                  break e;
                case 4:
                  g = g.containerInfo, D = !0;
                  break e;
              }
              p = p.return;
            }
          p = !0;
        }
        if (f.tag === 5 || f.tag === 6)
          jc(r, f, u), D ? It(g, f.stateNode) : Fe(g, f.stateNode);
        else if (f.tag === 18)
          D ? rn(g, f.stateNode) : yn(g, f.stateNode);
        else if (f.tag === 4) {
          if (f.child !== null) {
            g = f.stateNode.containerInfo, D = !0, f.child.return = f, f = f.child;
            continue;
          }
        } else if (Pc(r, f, u), f.child !== null) {
          f.child.return = f, f = f.child;
          continue;
        }
        if (f === i)
          break;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === i)
            return;
          f = f.return, f.tag === 4 && (p = !1);
        }
        f.sibling.return = f.return, f = f.sibling;
      }
    }
    function Vc(r, i) {
      if (Nn) {
        switch (i.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ls(3, i, i.return), ks(3, i), Ls(5, i, i.return);
            return;
          case 1:
            return;
          case 5:
            var u = i.stateNode;
            if (u != null) {
              var f = i.memoizedProps;
              r = r !== null ? r.memoizedProps : f;
              var p = i.type, g = i.updateQueue;
              i.updateQueue = null, g !== null && le(u, g, p, r, f, i);
            }
            return;
          case 6:
            if (i.stateNode === null)
              throw Error(y(162));
            u = i.memoizedProps, Ai(i.stateNode, r !== null ? r.memoizedProps : u, u);
            return;
          case 3:
            qt && r !== null && r.memoizedState.isDehydrated && pt(i.stateNode.containerInfo);
            return;
          case 12:
            return;
          case 13:
            Ao(i);
            return;
          case 19:
            Ao(i);
            return;
          case 17:
            return;
        }
        throw Error(y(163));
      }
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ls(3, i, i.return), ks(3, i), Ls(5, i, i.return);
          return;
        case 12:
          return;
        case 13:
          Ao(i);
          return;
        case 19:
          Ao(i);
          return;
        case 3:
          qt && r !== null && r.memoizedState.isDehydrated && pt(i.stateNode.containerInfo);
          break;
        case 22:
        case 23:
          return;
      }
      e:
        if (nr) {
          switch (i.tag) {
            case 1:
            case 5:
            case 6:
              break e;
            case 3:
            case 4:
              i = i.stateNode, Et(i.containerInfo, i.pendingChildren);
              break e;
          }
          throw Error(y(163));
        }
    }
    function Ao(r) {
      var i = r.updateQueue;
      if (i !== null) {
        r.updateQueue = null;
        var u = r.stateNode;
        u === null && (u = r.stateNode = new Av()), i.forEach(function(f) {
          var p = Vs.bind(null, r, f);
          u.has(f) || (u.add(f), f.then(p, p));
        });
      }
    }
    function Yh(r, i) {
      for (Ne = i; Ne !== null; ) {
        i = Ne;
        var u = i.deletions;
        if (u !== null)
          for (var f = 0; f < u.length; f++) {
            var p = u[f];
            try {
              var g = r;
              Nn ? Qn(g, p, i) : jc(g, p, i);
              var D = p.alternate;
              D !== null && (D.return = null), p.return = null;
            } catch (We) {
              Yt(p, i, We);
            }
          }
        if (u = i.child, i.subtreeFlags & 12854 && u !== null)
          u.return = i, Ne = u;
        else
          for (; Ne !== null; ) {
            i = Ne;
            try {
              var B = i.flags;
              if (B & 32 && Nn && Rt(i.stateNode), B & 512) {
                var $ = i.alternate;
                if ($ !== null) {
                  var me = $.ref;
                  me !== null && (typeof me == "function" ? me(null) : me.current = null);
                }
              }
              if (B & 8192)
                switch (i.tag) {
                  case 13:
                    if (i.memoizedState !== null) {
                      var Ee = i.alternate;
                      (Ee === null || Ee.memoizedState === null) && (Xc = on());
                    }
                    break;
                  case 22:
                    var it = i.memoizedState !== null, Ze = i.alternate, sn = Ze !== null && Ze.memoizedState !== null;
                    if (u = i, Nn) {
                      e:
                        if (f = u, p = it, g = null, Nn)
                          for (var qe = f; ; ) {
                            if (qe.tag === 5) {
                              if (g === null) {
                                g = qe;
                                var ur = qe.stateNode;
                                p ? Ye(ur) : xn(qe.stateNode, qe.memoizedProps);
                              }
                            } else if (qe.tag === 6) {
                              if (g === null) {
                                var Tr = qe.stateNode;
                                p ? pe(Tr) : zt(Tr, qe.memoizedProps);
                              }
                            } else if ((qe.tag !== 22 && qe.tag !== 23 || qe.memoizedState === null || qe === f) && qe.child !== null) {
                              qe.child.return = qe, qe = qe.child;
                              continue;
                            }
                            if (qe === f)
                              break;
                            for (; qe.sibling === null; ) {
                              if (qe.return === null || qe.return === f)
                                break e;
                              g === qe && (g = null), qe = qe.return;
                            }
                            g === qe && (g = null), qe.sibling.return = qe.return, qe = qe.sibling;
                          }
                    }
                    if (it && !sn && u.mode & 1) {
                      Ne = u;
                      for (var W = u.child; W !== null; ) {
                        for (u = Ne = W; Ne !== null; ) {
                          f = Ne;
                          var P = f.child;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                              Ls(4, f, f.return);
                              break;
                            case 1:
                              zl(f, f.return);
                              var X = f.stateNode;
                              if (typeof X.componentWillUnmount == "function") {
                                var Ae = f.return;
                                try {
                                  X.props = f.memoizedProps, X.state = f.memoizedState, X.componentWillUnmount();
                                } catch (We) {
                                  Yt(
                                    f,
                                    Ae,
                                    We
                                  );
                                }
                              }
                              break;
                            case 5:
                              zl(f, f.return);
                              break;
                            case 22:
                              if (f.memoizedState !== null) {
                                ud(u);
                                continue;
                              }
                          }
                          P !== null ? (P.return = f, Ne = P) : ud(u);
                        }
                        W = W.sibling;
                      }
                    }
                }
              switch (B & 4102) {
                case 2:
                  Do(i), i.flags &= -3;
                  break;
                case 6:
                  Do(i), i.flags &= -3, Vc(i.alternate, i);
                  break;
                case 4096:
                  i.flags &= -4097;
                  break;
                case 4100:
                  i.flags &= -4097, Vc(i.alternate, i);
                  break;
                case 4:
                  Vc(i.alternate, i);
              }
            } catch (We) {
              Yt(i, i.return, We);
            }
            if (u = i.sibling, u !== null) {
              u.return = i.return, Ne = u;
              break;
            }
            Ne = i.return;
          }
      }
    }
    function ld(r, i, u) {
      Ne = r, Yc(r);
    }
    function Yc(r, i, u) {
      for (var f = (r.mode & 1) !== 0; Ne !== null; ) {
        var p = Ne, g = p.child;
        if (p.tag === 22 && f) {
          var D = p.memoizedState !== null || Os;
          if (!D) {
            var B = p.alternate, $ = B !== null && B.memoizedState !== null || es;
            B = Os;
            var me = es;
            if (Os = D, (es = $) && !me)
              for (Ne = p; Ne !== null; )
                D = Ne, $ = D.child, D.tag === 22 && D.memoizedState !== null ? od(p) : $ !== null ? ($.return = D, Ne = $) : od(p);
            for (; g !== null; )
              Ne = g, Yc(g), g = g.sibling;
            Ne = p, Os = B, es = me;
          }
          Wc(r);
        } else
          p.subtreeFlags & 8772 && g !== null ? (g.return = p, Ne = g) : Wc(r);
      }
    }
    function Wc(r) {
      for (; Ne !== null; ) {
        var i = Ne;
        if (i.flags & 8772) {
          var u = i.alternate;
          try {
            if (i.flags & 8772)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  es || ks(5, i);
                  break;
                case 1:
                  var f = i.stateNode;
                  if (i.flags & 4 && !es)
                    if (u === null)
                      f.componentDidMount();
                    else {
                      var p = i.elementType === i.type ? u.memoizedProps : N(i.type, u.memoizedProps);
                      f.componentDidUpdate(p, u.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                    }
                  var g = i.updateQueue;
                  g !== null && du(i, g, f);
                  break;
                case 3:
                  var D = i.updateQueue;
                  if (D !== null) {
                    if (u = null, i.child !== null)
                      switch (i.child.tag) {
                        case 5:
                          u = ut(i.child.stateNode);
                          break;
                        case 1:
                          u = i.child.stateNode;
                      }
                    du(i, D, u);
                  }
                  break;
                case 5:
                  var B = i.stateNode;
                  u === null && i.flags & 4 && G(B, i.type, i.memoizedProps, i);
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (qt && i.memoizedState === null) {
                    var $ = i.alternate;
                    if ($ !== null) {
                      var me = $.memoizedState;
                      if (me !== null) {
                        var Ee = me.dehydrated;
                        Ee !== null && st(Ee);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                  break;
                default:
                  throw Error(y(163));
              }
            es || i.flags & 512 && Hc(i);
          } catch (it) {
            Yt(i, i.return, it);
          }
        }
        if (i === r) {
          Ne = null;
          break;
        }
        if (u = i.sibling, u !== null) {
          u.return = i.return, Ne = u;
          break;
        }
        Ne = i.return;
      }
    }
    function ud(r) {
      for (; Ne !== null; ) {
        var i = Ne;
        if (i === r) {
          Ne = null;
          break;
        }
        var u = i.sibling;
        if (u !== null) {
          u.return = i.return, Ne = u;
          break;
        }
        Ne = i.return;
      }
    }
    function od(r) {
      for (; Ne !== null; ) {
        var i = Ne;
        try {
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              var u = i.return;
              try {
                ks(4, i);
              } catch ($) {
                Yt(i, u, $);
              }
              break;
            case 1:
              var f = i.stateNode;
              if (typeof f.componentDidMount == "function") {
                var p = i.return;
                try {
                  f.componentDidMount();
                } catch ($) {
                  Yt(i, p, $);
                }
              }
              var g = i.return;
              try {
                Hc(i);
              } catch ($) {
                Yt(i, g, $);
              }
              break;
            case 5:
              var D = i.return;
              try {
                Hc(i);
              } catch ($) {
                Yt(i, D, $);
              }
          }
        } catch ($) {
          Yt(i, i.return, $);
        }
        if (i === r) {
          Ne = null;
          break;
        }
        var B = i.sibling;
        if (B !== null) {
          B.return = i.return, Ne = B;
          break;
        }
        Ne = i.return;
      }
    }
    var No = 0, Tn = 1, Hs = 2, Mu = 3, Aa = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Al = Symbol.for;
      No = Al("selector.component"), Tn = Al("selector.has_pseudo_class"), Hs = Al("selector.role"), Mu = Al("selector.test_id"), Aa = Al("selector.text");
    }
    function qc(r) {
      var i = Fn(r);
      if (i != null) {
        if (typeof i.memoizedProps["data-testname"] != "string")
          throw Error(y(364));
        return i;
      }
      if (r = hr(r), r === null)
        throw Error(y(362));
      return r.stateNode.current;
    }
    function Ic(r, i) {
      switch (i.$$typeof) {
        case No:
          if (r.type === i.value)
            return !0;
          break;
        case Tn:
          e: {
            i = i.value, r = [r, 0];
            for (var u = 0; u < r.length; ) {
              var f = r[u++], p = r[u++], g = i[p];
              if (f.tag !== 5 || !pr(f)) {
                for (; g != null && Ic(f, g); )
                  p++, g = i[p];
                if (p === i.length) {
                  i = !0;
                  break e;
                } else
                  for (f = f.child; f !== null; )
                    r.push(f, p), f = f.sibling;
              }
            }
            i = !1;
          }
          return i;
        case Hs:
          if (r.tag === 5 && ai(r.stateNode, i.value))
            return !0;
          break;
        case Aa:
          if ((r.tag === 5 || r.tag === 6) && (r = Bt(r), r !== null && 0 <= r.indexOf(i.value)))
            return !0;
          break;
        case Mu:
          if (r.tag === 5 && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === i.value.toLowerCase()))
            return !0;
          break;
        default:
          throw Error(y(365));
      }
      return !1;
    }
    function ts(r) {
      switch (r.$$typeof) {
        case No:
          return "<" + (ue(r.value) || "Unknown") + ">";
        case Tn:
          return ":has(" + (ts(r) || "") + ")";
        case Hs:
          return '[role="' + r.value + '"]';
        case Aa:
          return '"' + r.value + '"';
        case Mu:
          return '[data-testname="' + r.value + '"]';
        default:
          throw Error(y(365));
      }
    }
    function sr(r, i) {
      var u = [];
      r = [r, 0];
      for (var f = 0; f < r.length; ) {
        var p = r[f++], g = r[f++], D = i[g];
        if (p.tag !== 5 || !pr(p)) {
          for (; D != null && Ic(p, D); )
            g++, D = i[g];
          if (g === i.length)
            u.push(p);
          else
            for (p = p.child; p !== null; )
              r.push(p, g), p = p.sibling;
        }
      }
      return u;
    }
    function De(r, i) {
      if (!pn)
        throw Error(y(363));
      r = qc(r), r = sr(r, i), i = [], r = Array.from(r);
      for (var u = 0; u < r.length; ) {
        var f = r[u++];
        if (f.tag === 5)
          pr(f) || i.push(f.stateNode);
        else
          for (f = f.child; f !== null; )
            r.push(f), f = f.sibling;
      }
      return i;
    }
    var ua = Math.ceil, Ur = C.ReactCurrentDispatcher, Qc = C.ReactCurrentOwner, bn = C.ReactCurrentBatchConfig, xt = 0, Hn = null, Pn = null, Ut = 0, ei = 0, Nl = Qr(0), Gn = 0, Fl = null, oa = 0, Na = 0, Gc = 0, zu = null, Lr = null, Xc = 0, Jc = 1 / 0;
    function Ol() {
      Jc = on() + 500;
    }
    var wu = !1, Fo = null, ns = null, Oo = !1, rs = null, Uo = 0, Du = 0, Zc = null, Au = -1, Lo = 0;
    function gr() {
      return xt & 6 ? on() : Au !== -1 ? Au : Au = on();
    }
    function is(r) {
      return r.mode & 1 ? xt & 2 && Ut !== 0 ? Ut & -Ut : Ec.transition !== null ? (Lo === 0 && (r = Ea, Ea <<= 1, !(Ea & 4194240) && (Ea = 64), Lo = r), Lo) : (r = Ft, r !== 0 ? r : Un()) : 1;
    }
    function xi(r, i, u) {
      if (50 < Du)
        throw Du = 0, Zc = null, Error(y(185));
      var f = Ul(r, i);
      return f === null ? null : (_s(f, i, u), (!(xt & 2) || f !== Hn) && (f === Hn && (!(xt & 2) && (Na |= i), Gn === 4 && Fa(f, Ut)), kr(f, u), i === 1 && xt === 0 && !(r.mode & 1) && (Ol(), Ja && di())), f);
    }
    function Ul(r, i) {
      r.lanes |= i;
      var u = r.alternate;
      for (u !== null && (u.lanes |= i), u = r, r = r.return; r !== null; )
        r.childLanes |= i, u = r.alternate, u !== null && (u.childLanes |= i), u = r, r = r.return;
      return u.tag === 3 ? u.stateNode : null;
    }
    function kr(r, i) {
      var u = r.callbackNode;
      ci(r, i);
      var f = Ta(r, r === Hn ? Ut : 0);
      if (f === 0)
        u !== null && uu(u), r.callbackNode = null, r.callbackPriority = 0;
      else if (i = f & -f, r.callbackPriority !== i) {
        if (u != null && uu(u), i === 1)
          r.tag === 0 ? _c(cd.bind(null, r)) : Rs(cd.bind(null, r)), Ar ? Ln(function() {
            xt === 0 && di();
          }) : Fi(ou, di), u = null;
        else {
          switch (lu(f)) {
            case 1:
              u = ou;
              break;
            case 4:
              u = Sc;
              break;
            case 16:
              u = cu;
              break;
            case 536870912:
              u = to;
              break;
            default:
              u = cu;
          }
          u = kl(u, ti.bind(null, r));
        }
        r.callbackPriority = i, r.callbackNode = u;
      }
    }
    function ti(r, i) {
      if (Au = -1, Lo = 0, xt & 6)
        throw Error(y(327));
      var u = r.callbackNode;
      if (js() && r.callbackNode !== u)
        return null;
      var f = Ta(r, r === Hn ? Ut : 0);
      if (f === 0)
        return null;
      if (f & 30 || f & r.expiredLanes || i)
        i = Ps(r, f);
      else {
        i = f;
        var p = xt;
        xt |= 2;
        var g = dd();
        (Hn !== r || Ut !== i) && (Ol(), as(r, i));
        do
          try {
            hd();
            break;
          } catch (B) {
            fd(r, B);
          }
        while (!0);
        He(), Ur.current = g, xt = p, Pn !== null ? i = 0 : (Hn = null, Ut = 0, i = Gn);
      }
      if (i !== 0) {
        if (i === 2 && (p = Yn(r), p !== 0 && (f = p, i = ji(r, p))), i === 1)
          throw u = Fl, as(r, 0), Fa(r, f), kr(r, on()), u;
        if (i === 6)
          Fa(r, f);
        else {
          if (p = r.current.alternate, !(f & 30) && !Kc(p) && (i = Ps(r, f), i === 2 && (g = Yn(r), g !== 0 && (f = g, i = ji(r, g))), i === 1))
            throw u = Fl, as(r, 0), Fa(r, f), kr(r, on()), u;
          switch (r.finishedWork = p, r.finishedLanes = f, i) {
            case 0:
            case 1:
              throw Error(y(345));
            case 2:
              Vi(r, Lr);
              break;
            case 3:
              if (Fa(r, f), (f & 130023424) === f && (i = Xc + 500 - on(), 10 < i)) {
                if (Ta(r, 0) !== 0)
                  break;
                if (p = r.suspendedLanes, (p & f) !== f) {
                  gr(), r.pingedLanes |= r.suspendedLanes & p;
                  break;
                }
                r.timeoutHandle = at(Vi.bind(null, r, Lr), i);
                break;
              }
              Vi(r, Lr);
              break;
            case 4:
              if (Fa(r, f), (f & 4194240) === f)
                break;
              for (i = r.eventTimes, p = -1; 0 < f; ) {
                var D = 31 - Nr(f);
                g = 1 << D, D = i[D], D > p && (p = D), f &= ~g;
              }
              if (f = p, f = on() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * ua(f / 1960)) - f, 10 < f) {
                r.timeoutHandle = at(Vi.bind(null, r, Lr), f);
                break;
              }
              Vi(r, Lr);
              break;
            case 5:
              Vi(r, Lr);
              break;
            default:
              throw Error(y(329));
          }
        }
      }
      return kr(r, on()), r.callbackNode === u ? ti.bind(null, r) : null;
    }
    function ji(r, i) {
      var u = zu;
      return r.current.memoizedState.isDehydrated && (as(r, i).flags |= 256), r = Ps(r, i), r !== 2 && (i = Lr, Lr = u, i !== null && Nu(i)), r;
    }
    function Nu(r) {
      Lr === null ? Lr = r : Lr.push.apply(Lr, r);
    }
    function Kc(r) {
      for (var i = r; ; ) {
        if (i.flags & 16384) {
          var u = i.updateQueue;
          if (u !== null && (u = u.stores, u !== null))
            for (var f = 0; f < u.length; f++) {
              var p = u[f], g = p.getSnapshot;
              p = p.value;
              try {
                if (!Xr(g(), p))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
        if (u = i.child, i.subtreeFlags & 16384 && u !== null)
          u.return = i, i = u;
        else {
          if (i === r)
            break;
          for (; i.sibling === null; ) {
            if (i.return === null || i.return === r)
              return !0;
            i = i.return;
          }
          i.sibling.return = i.return, i = i.sibling;
        }
      }
      return !0;
    }
    function Fa(r, i) {
      for (i &= ~Gc, i &= ~Na, r.suspendedLanes |= i, r.pingedLanes &= ~i, r = r.expirationTimes; 0 < i; ) {
        var u = 31 - Nr(i), f = 1 << u;
        r[u] = -1, i &= ~f;
      }
    }
    function cd(r) {
      if (xt & 6)
        throw Error(y(327));
      js();
      var i = Ta(r, 0);
      if (!(i & 1))
        return kr(r, on()), null;
      var u = Ps(r, i);
      if (r.tag !== 0 && u === 2) {
        var f = Yn(r);
        f !== 0 && (i = f, u = ji(r, f));
      }
      if (u === 1)
        throw u = Fl, as(r, 0), Fa(r, i), kr(r, on()), u;
      if (u === 6)
        throw Error(y(345));
      return r.finishedWork = r.current.alternate, r.finishedLanes = i, Vi(r, Lr), kr(r, on()), null;
    }
    function $c(r) {
      rs !== null && rs.tag === 0 && !(xt & 6) && js();
      var i = xt;
      xt |= 1;
      var u = bn.transition, f = Ft;
      try {
        if (bn.transition = null, Ft = 1, r)
          return r();
      } finally {
        Ft = f, bn.transition = u, xt = i, !(xt & 6) && di();
      }
    }
    function Si() {
      ei = Nl.current, Gt(Nl);
    }
    function as(r, i) {
      r.finishedWork = null, r.finishedLanes = 0;
      var u = r.timeoutHandle;
      if (u !== dt && (r.timeoutHandle = dt, rt(u)), Pn !== null)
        for (u = Pn.return; u !== null; ) {
          var f = u;
          switch (bc(f), f.tag) {
            case 1:
              f = f.type.childContextTypes, f != null && Qa();
              break;
            case 3:
              Ms(), Gt(Jt), Gt(Vn), na();
              break;
            case 5:
              Kr(f);
              break;
            case 4:
              Ms();
              break;
            case 13:
              Gt(fn);
              break;
            case 19:
              Gt(fn);
              break;
            case 10:
              gt(f.type._context);
              break;
            case 22:
            case 23:
              Si();
          }
          u = u.return;
        }
      if (Hn = r, Pn = r = Br(r.current, null), Ut = ei = i, Gn = 0, Fl = null, Gc = Na = oa = 0, Lr = zu = null, At !== null) {
        for (i = 0; i < At.length; i++)
          if (u = At[i], f = u.interleaved, f !== null) {
            u.interleaved = null;
            var p = f.next, g = u.pending;
            if (g !== null) {
              var D = g.next;
              g.next = p, f.next = D;
            }
            u.pending = f;
          }
        At = null;
      }
      return r;
    }
    function fd(r, i) {
      do {
        var u = Pn;
        try {
          if (He(), Wn.current = El, pl) {
            for (var f = Ot.memoizedState; f !== null; ) {
              var p = f.queue;
              p !== null && (p.pending = null), f = f.next;
            }
            pl = !1;
          }
          if (Ka = 0, an = hn = Ot = null, ra = !1, ml = 0, Qc.current = null, u === null || u.return === null) {
            Gn = 1, Fl = i, Pn = null;
            break;
          }
          e: {
            var g = r, D = u.return, B = u, $ = i;
            if (i = Ut, B.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
              var me = $, Ee = B, it = Ee.tag;
              if (!(Ee.mode & 1) && (it === 0 || it === 11 || it === 15)) {
                var Ze = Ee.alternate;
                Ze ? (Ee.updateQueue = Ze.updateQueue, Ee.memoizedState = Ze.memoizedState, Ee.lanes = Ze.lanes) : (Ee.updateQueue = null, Ee.memoizedState = null);
              }
              var sn = As(D);
              if (sn !== null) {
                sn.flags &= -257, Ro(sn, D, B, g, i), sn.mode & 1 && Tu(g, me, i), i = sn, $ = me;
                var qe = i.updateQueue;
                if (qe === null) {
                  var ur = /* @__PURE__ */ new Set();
                  ur.add($), i.updateQueue = ur;
                } else
                  qe.add($);
                break e;
              } else {
                if (!(i & 1)) {
                  Tu(g, me, i), ef();
                  break e;
                }
                $ = Error(y(426));
              }
            } else if (cn && B.mode & 1) {
              var Tr = As(D);
              if (Tr !== null) {
                !(Tr.flags & 65536) && (Tr.flags |= 256), Ro(Tr, D, B, g, i), pu($);
                break e;
              }
            }
            g = $, Gn !== 4 && (Gn = 2), zu === null ? zu = [g] : zu.push(g), $ = Eu($, B), B = D;
            do {
              switch (B.tag) {
                case 3:
                  B.flags |= 65536, i &= -i, B.lanes |= i;
                  var W = _o(B, $, i);
                  fu(B, W);
                  break e;
                case 1:
                  g = $;
                  var P = B.type, X = B.stateNode;
                  if (!(B.flags & 128) && (typeof P.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && (ns === null || !ns.has(X)))) {
                    B.flags |= 65536, i &= -i, B.lanes |= i;
                    var Ae = Eo(B, g, i);
                    fu(B, Ae);
                    break e;
                  }
              }
              B = B.return;
            } while (B !== null);
          }
          ni(u);
        } catch (We) {
          i = We, Pn === u && u !== null && (Pn = u = u.return);
          continue;
        }
        break;
      } while (!0);
    }
    function dd() {
      var r = Ur.current;
      return Ur.current = El, r === null ? El : r;
    }
    function ef() {
      (Gn === 0 || Gn === 3 || Gn === 2) && (Gn = 4), Hn === null || !(oa & 268435455) && !(Na & 268435455) || Fa(Hn, Ut);
    }
    function Ps(r, i) {
      var u = xt;
      xt |= 2;
      var f = dd();
      Hn === r && Ut === i || as(r, i);
      do
        try {
          Wh();
          break;
        } catch (p) {
          fd(r, p);
        }
      while (!0);
      if (He(), xt = u, Ur.current = f, Pn !== null)
        throw Error(y(261));
      return Hn = null, Ut = 0, Gn;
    }
    function Wh() {
      for (; Pn !== null; )
        tf(Pn);
    }
    function hd() {
      for (; Pn !== null && !xc(); )
        tf(Pn);
    }
    function tf(r) {
      var i = Ll(r.alternate, r, ei);
      r.memoizedProps = r.pendingProps, i === null ? ni(r) : Pn = i, Qc.current = null;
    }
    function ni(r) {
      var i = r;
      do {
        var u = i.alternate;
        if (r = i.return, i.flags & 32768) {
          if (u = mt(u, i), u !== null) {
            u.flags &= 32767, Pn = u;
            return;
          }
          if (r !== null)
            r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
          else {
            Gn = 6, Pn = null;
            return;
          }
        } else if (u = Vh(u, i, ei), u !== null) {
          Pn = u;
          return;
        }
        if (i = i.sibling, i !== null) {
          Pn = i;
          return;
        }
        Pn = i = r;
      } while (i !== null);
      Gn === 0 && (Gn = 5);
    }
    function Vi(r, i) {
      var u = Ft, f = bn.transition;
      try {
        bn.transition = null, Ft = 1, qh(r, i, u);
      } finally {
        bn.transition = f, Ft = u;
      }
      return null;
    }
    function qh(r, i, u) {
      do
        js();
      while (rs !== null);
      if (xt & 6)
        throw Error(y(327));
      var f = r.finishedWork, p = r.finishedLanes;
      if (f === null)
        return null;
      if (r.finishedWork = null, r.finishedLanes = 0, f === r.current)
        throw Error(y(177));
      r.callbackNode = null, r.callbackPriority = 0;
      var g = f.lanes | f.childLanes;
      if (gc(r, g), r === Hn && (Pn = Hn = null, Ut = 0), !(f.subtreeFlags & 2064) && !(f.flags & 2064) || Oo || (Oo = !0, kl(cu, function() {
        return js(), null;
      })), g = (f.flags & 15990) !== 0, f.subtreeFlags & 15990 || g) {
        g = bn.transition, bn.transition = null;
        var D = Ft;
        Ft = 1;
        var B = xt;
        xt |= 4, Qc.current = null, sd(r, f), Yh(r, f), ee(r.containerInfo), r.current = f, ld(f), eo(), xt = B, Ft = D, bn.transition = g;
      } else
        r.current = f;
      if (Oo && (Oo = !1, rs = r, Uo = p), g = r.pendingLanes, g === 0 && (ns = null), Xa(f.stateNode), kr(r, on()), i !== null)
        for (u = r.onRecoverableError, f = 0; f < i.length; f++)
          u(i[f]);
      if (wu)
        throw wu = !1, r = Fo, Fo = null, r;
      return Uo & 1 && r.tag !== 0 && js(), g = r.pendingLanes, g & 1 ? r === Zc ? Du++ : (Du = 0, Zc = r) : Du = 0, di(), null;
    }
    function js() {
      if (rs !== null) {
        var r = lu(Uo), i = bn.transition, u = Ft;
        try {
          if (bn.transition = null, Ft = 16 > r ? 16 : r, rs === null)
            var f = !1;
          else {
            if (r = rs, rs = null, Uo = 0, xt & 6)
              throw Error(y(331));
            var p = xt;
            for (xt |= 4, Ne = r.current; Ne !== null; ) {
              var g = Ne, D = g.child;
              if (Ne.flags & 16) {
                var B = g.deletions;
                if (B !== null) {
                  for (var $ = 0; $ < B.length; $++) {
                    var me = B[$];
                    for (Ne = me; Ne !== null; ) {
                      var Ee = Ne;
                      switch (Ee.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ls(8, Ee, g);
                      }
                      var it = Ee.child;
                      if (it !== null)
                        it.return = Ee, Ne = it;
                      else
                        for (; Ne !== null; ) {
                          Ee = Ne;
                          var Ze = Ee.sibling, sn = Ee.return;
                          if (Pi(Ee), Ee === me) {
                            Ne = null;
                            break;
                          }
                          if (Ze !== null) {
                            Ze.return = sn, Ne = Ze;
                            break;
                          }
                          Ne = sn;
                        }
                    }
                  }
                  var qe = g.alternate;
                  if (qe !== null) {
                    var ur = qe.child;
                    if (ur !== null) {
                      qe.child = null;
                      do {
                        var Tr = ur.sibling;
                        ur.sibling = null, ur = Tr;
                      } while (ur !== null);
                    }
                  }
                  Ne = g;
                }
              }
              if (g.subtreeFlags & 2064 && D !== null)
                D.return = g, Ne = D;
              else
                e:
                  for (; Ne !== null; ) {
                    if (g = Ne, g.flags & 2048)
                      switch (g.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ls(9, g, g.return);
                      }
                    var W = g.sibling;
                    if (W !== null) {
                      W.return = g.return, Ne = W;
                      break e;
                    }
                    Ne = g.return;
                  }
            }
            var P = r.current;
            for (Ne = P; Ne !== null; ) {
              D = Ne;
              var X = D.child;
              if (D.subtreeFlags & 2064 && X !== null)
                X.return = D, Ne = X;
              else
                e:
                  for (D = P; Ne !== null; ) {
                    if (B = Ne, B.flags & 2048)
                      try {
                        switch (B.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ks(9, B);
                        }
                      } catch (We) {
                        Yt(B, B.return, We);
                      }
                    if (B === D) {
                      Ne = null;
                      break e;
                    }
                    var Ae = B.sibling;
                    if (Ae !== null) {
                      Ae.return = B.return, Ne = Ae;
                      break e;
                    }
                    Ne = B.return;
                  }
            }
            if (xt = p, di(), fi && typeof fi.onPostCommitFiberRoot == "function")
              try {
                fi.onPostCommitFiberRoot(ba, r);
              } catch {
              }
            f = !0;
          }
          return f;
        } finally {
          Ft = u, bn.transition = i;
        }
      }
      return !1;
    }
    function lr(r, i, u) {
      i = Eu(u, i), i = _o(r, i, 1), Oi(r, i), i = gr(), r = Ul(r, 1), r !== null && (_s(r, 1, i), kr(r, i));
    }
    function Yt(r, i, u) {
      if (r.tag === 3)
        lr(r, r, u);
      else
        for (; i !== null; ) {
          if (i.tag === 3) {
            lr(i, r, u);
            break;
          } else if (i.tag === 1) {
            var f = i.stateNode;
            if (typeof i.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (ns === null || !ns.has(f))) {
              r = Eu(u, r), r = Eo(i, r, 1), Oi(i, r), r = gr(), i = Ul(i, 1), i !== null && (_s(i, 1, r), kr(i, r));
              break;
            }
          }
          i = i.return;
        }
    }
    function ca(r, i, u) {
      var f = r.pingCache;
      f !== null && f.delete(i), i = gr(), r.pingedLanes |= r.suspendedLanes & u, Hn === r && (Ut & u) === u && (Gn === 4 || Gn === 3 && (Ut & 130023424) === Ut && 500 > on() - Xc ? as(r, 0) : Gc |= u), kr(r, i);
    }
    function _i(r, i) {
      i === 0 && (r.mode & 1 ? (i = Ra, Ra <<= 1, !(Ra & 130023424) && (Ra = 4194304)) : i = 1);
      var u = gr();
      r = Ul(r, i), r !== null && (_s(r, i, u), kr(r, u));
    }
    function Ih(r) {
      var i = r.memoizedState, u = 0;
      i !== null && (u = i.retryLane), _i(r, u);
    }
    function Vs(r, i) {
      var u = 0;
      switch (r.tag) {
        case 13:
          var f = r.stateNode, p = r.memoizedState;
          p !== null && (u = p.retryLane);
          break;
        case 19:
          f = r.stateNode;
          break;
        default:
          throw Error(y(314));
      }
      f !== null && f.delete(i), _i(r, u);
    }
    var Ll;
    Ll = function(r, i, u) {
      if (r !== null)
        if (r.memoizedProps !== i.pendingProps || Jt.current)
          yr = !0;
        else {
          if (!(r.lanes & u) && !(i.flags & 128))
            return yr = !1, Ml(r, i, u);
          yr = !!(r.flags & 131072);
        }
      else
        yr = !1, cn && i.flags & 1048576 && Zf(i, lo, i.index);
      switch (i.lanes = 0, i.tag) {
        case 2:
          var f = i.type;
          r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps;
          var p = Ia(i, Vn.current);
          jt(i, u), p = yl(null, i, f, r, p, u);
          var g = xu();
          return i.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, vr(f) ? (g = !0, ea(i)) : g = !1, i.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, _n(i), p.updater = ao, i.stateNode = p, p._reactInternals = i, Rc(i, f, r, u), i = kc(null, i, f, !0, g, u)) : (i.tag = 0, cn && g && Tc(i), $n(null, i, p, u), i = i.child), i;
        case 16:
          f = i.elementType;
          e: {
            switch (r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps, p = f._init, f = p(f._payload), i.type = f, p = i.tag = Ou(f), r = N(f, r), p) {
              case 0:
                i = Lc(null, i, f, r, u);
                break e;
              case 1:
                i = bo(
                  null,
                  i,
                  f,
                  r,
                  u
                );
                break e;
              case 11:
                i = bl(null, i, f, r, u);
                break e;
              case 14:
                i = Cu(null, i, f, N(f.type, r), u);
                break e;
            }
            throw Error(y(306, f, ""));
          }
          return i;
        case 0:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : N(f, p), Lc(r, i, f, p, u);
        case 1:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : N(f, p), bo(r, i, f, p, u);
        case 3:
          e: {
            if (Co(i), r === null)
              throw Error(y(387));
            f = i.pendingProps, g = i.memoizedState, p = g.element, ta(r, i), ul(i, f, null, u);
            var D = i.memoizedState;
            if (f = D.element, qt && g.isDehydrated)
              if (g = {
                element: f,
                isDehydrated: !1,
                cache: D.cache,
                transitions: D.transitions
              }, i.updateQueue.baseState = g, i.memoizedState = g, i.flags & 256) {
                p = Error(y(423)), i = Bc(r, i, f, u, p);
                break e;
              } else if (f !== p) {
                p = Error(y(424)), i = Bc(r, i, f, u, p);
                break e;
              } else
                for (qt && (ar = O(i.stateNode.containerInfo), Zr = i, cn = !0, mi = null, fl = !1), u = fo(i, null, f, u), i.child = u; u; )
                  u.flags = u.flags & -3 | 4096, u = u.sibling;
            else {
              if (dl(), f === p) {
                i = Rn(r, i, u);
                break e;
              }
              $n(r, i, f, u);
            }
            i = i.child;
          }
          return i;
        case 5:
          return gu(i), r === null && oo(i), f = i.type, p = i.pendingProps, g = r !== null ? r.memoizedProps : null, D = p.children, Je(f, p) ? D = null : g !== null && Je(f, g) && (i.flags |= 32), td(r, i), $n(r, i, D, u), i.child;
        case 6:
          return r === null && oo(i), null;
        case 13:
          return nd(r, i, u);
        case 4:
          return ho(i, i.stateNode.containerInfo), f = i.pendingProps, r === null ? i.child = hl(i, null, f, u) : $n(r, i, f, u), i.child;
        case 11:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : N(f, p), bl(r, i, f, p, u);
        case 7:
          return $n(r, i, i.pendingProps, u), i.child;
        case 8:
          return $n(r, i, i.pendingProps.children, u), i.child;
        case 12:
          return $n(r, i, i.pendingProps.children, u), i.child;
        case 10:
          e: {
            if (f = i.type._context, p = i.pendingProps, g = i.memoizedProps, D = p.value, lt(i, f, D), g !== null)
              if (Xr(g.value, D)) {
                if (g.children === p.children && !Jt.current) {
                  i = Rn(r, i, u);
                  break e;
                }
              } else
                for (g = i.child, g !== null && (g.return = i); g !== null; ) {
                  var B = g.dependencies;
                  if (B !== null) {
                    D = g.child;
                    for (var $ = B.firstContext; $ !== null; ) {
                      if ($.context === f) {
                        if (g.tag === 1) {
                          $ = Jr(-1, u & -u), $.tag = 2;
                          var me = g.updateQueue;
                          if (me !== null) {
                            me = me.shared;
                            var Ee = me.pending;
                            Ee === null ? $.next = $ : ($.next = Ee.next, Ee.next = $), me.pending = $;
                          }
                        }
                        g.lanes |= u, $ = g.alternate, $ !== null && ($.lanes |= u), Pt(g.return, u, i), B.lanes |= u;
                        break;
                      }
                      $ = $.next;
                    }
                  } else if (g.tag === 10)
                    D = g.type === i.type ? null : g.child;
                  else if (g.tag === 18) {
                    if (D = g.return, D === null)
                      throw Error(y(341));
                    D.lanes |= u, B = D.alternate, B !== null && (B.lanes |= u), Pt(D, u, i), D = g.sibling;
                  } else
                    D = g.child;
                  if (D !== null)
                    D.return = g;
                  else
                    for (D = g; D !== null; ) {
                      if (D === i) {
                        D = null;
                        break;
                      }
                      if (g = D.sibling, g !== null) {
                        g.return = D.return, D = g;
                        break;
                      }
                      D = D.return;
                    }
                  g = D;
                }
            $n(r, i, p.children, u), i = i.child;
          }
          return i;
        case 9:
          return p = i.type, f = i.pendingProps.children, jt(i, u), p = bt(p), f = f(p), i.flags |= 1, $n(r, i, f, u), i.child;
        case 14:
          return f = i.type, p = N(f, i.pendingProps), p = N(f.type, p), Cu(r, i, f, p, u);
        case 15:
          return $f(r, i, i.type, i.pendingProps, u);
        case 17:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : N(f, p), r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, vr(f) ? (r = !0, ea(i)) : r = !1, jt(i, u), Xf(i, f, p), Rc(i, f, p, u), kc(null, i, f, !0, r, u);
        case 19:
          return wo(r, i, u);
        case 22:
          return ed(r, i, u);
      }
      throw Error(y(156, i.tag));
    };
    function kl(r, i) {
      return Fi(r, i);
    }
    function Fu(r, i, u, f) {
      this.tag = r, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function xr(r, i, u, f) {
      return new Fu(r, i, u, f);
    }
    function Ys(r) {
      return r = r.prototype, !(!r || !r.isReactComponent);
    }
    function Ou(r) {
      if (typeof r == "function")
        return Ys(r) ? 1 : 0;
      if (r != null) {
        if (r = r.$$typeof, r === k)
          return 11;
        if (r === se)
          return 14;
      }
      return 2;
    }
    function Br(r, i) {
      var u = r.alternate;
      return u === null ? (u = xr(r.tag, i, r.key, r.mode), u.elementType = r.elementType, u.type = r.type, u.stateNode = r.stateNode, u.alternate = r, r.alternate = u) : (u.pendingProps = i, u.type = r.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = r.flags & 14680064, u.childLanes = r.childLanes, u.lanes = r.lanes, u.child = r.child, u.memoizedProps = r.memoizedProps, u.memoizedState = r.memoizedState, u.updateQueue = r.updateQueue, i = r.dependencies, u.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, u.sibling = r.sibling, u.index = r.index, u.ref = r.ref, u;
    }
    function Ws(r, i, u, f, p, g) {
      var D = 2;
      if (f = r, typeof r == "function")
        Ys(r) && (D = 1);
      else if (typeof r == "string")
        D = 5;
      else
        e:
          switch (r) {
            case E:
              return ss(u.children, p, g, i);
            case S:
              D = 8, p |= 8;
              break;
            case M:
              return r = xr(12, u, i, p | 2), r.elementType = M, r.lanes = g, r;
            case Q:
              return r = xr(13, u, i, p), r.elementType = Q, r.lanes = g, r;
            case J:
              return r = xr(19, u, i, p), r.elementType = J, r.lanes = g, r;
            case Ce:
              return Uu(u, p, g, i);
            default:
              if (typeof r == "object" && r !== null)
                switch (r.$$typeof) {
                  case w:
                    D = 10;
                    break e;
                  case F:
                    D = 9;
                    break e;
                  case k:
                    D = 11;
                    break e;
                  case se:
                    D = 14;
                    break e;
                  case he:
                    D = 16, f = null;
                    break e;
                }
              throw Error(y(130, r == null ? r : typeof r, ""));
          }
      return i = xr(D, u, i, p), i.elementType = r, i.type = f, i.lanes = g, i;
    }
    function ss(r, i, u, f) {
      return r = xr(7, r, f, i), r.lanes = u, r;
    }
    function Uu(r, i, u, f) {
      return r = xr(22, r, f, i), r.elementType = Ce, r.lanes = u, r.stateNode = {}, r;
    }
    function ko(r, i, u) {
      return r = xr(6, r, null, i), r.lanes = u, r;
    }
    function Lu(r, i, u) {
      return i = xr(4, r.children !== null ? r.children : [], r.key, i), i.lanes = u, i.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, i;
    }
    function Qh(r, i, u, f, p) {
      this.tag = i, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = dt, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = il(0), this.expirationTimes = il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = il(0), this.identifierPrefix = f, this.onRecoverableError = p, qt && (this.mutableSourceEagerHydrationData = null);
    }
    function pd(r, i, u, f, p, g, D, B, $) {
      return r = new Qh(r, i, u, B, $), i === 1 ? (i = 1, g === !0 && (i |= 8)) : i = 0, g = xr(3, null, null, i), r.current = g, g.stateNode = r, g.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null }, _n(g), r;
    }
    function Ei(r) {
      if (!r)
        return ui;
      r = r._reactInternals;
      e: {
        if (Ke(r) !== r || r.tag !== 1)
          throw Error(y(170));
        var i = r;
        do {
          switch (i.tag) {
            case 3:
              i = i.stateNode.context;
              break e;
            case 1:
              if (vr(i.type)) {
                i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
        throw Error(y(171));
      }
      if (r.tag === 1) {
        var u = r.type;
        if (vr(u))
          return Ss(r, u, i);
      }
      return i;
    }
    function ku(r) {
      var i = r._reactInternals;
      if (i === void 0)
        throw typeof r.render == "function" ? Error(y(188)) : (r = Object.keys(r).join(","), Error(y(268, r)));
      return r = Te(i), r === null ? null : r.stateNode;
    }
    function Bl(r, i) {
      if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
        var u = r.retryLane;
        r.retryLane = u !== 0 && u < i ? u : i;
      }
    }
    function Hl(r, i) {
      Bl(r, i), (r = r.alternate) && Bl(r, i);
    }
    function Pl(r) {
      return r = Te(r), r === null ? null : r.stateNode;
    }
    function nf() {
      return null;
    }
    return s.attemptContinuousHydration = function(r) {
      if (r.tag === 13) {
        var i = gr();
        xi(r, 134217728, i), Hl(r, 134217728);
      }
    }, s.attemptHydrationAtCurrentPriority = function(r) {
      if (r.tag === 13) {
        var i = gr(), u = is(r);
        xi(r, u, i), Hl(r, u);
      }
    }, s.attemptSynchronousHydration = function(r) {
      switch (r.tag) {
        case 3:
          var i = r.stateNode;
          if (i.current.memoizedState.isDehydrated) {
            var u = Ni(i.pendingLanes);
            u !== 0 && (al(i, u | 1), kr(i, on()), !(xt & 6) && (Ol(), di()));
          }
          break;
        case 13:
          var f = gr();
          $c(function() {
            return xi(r, 1, f);
          }), Hl(r, 1);
      }
    }, s.batchedUpdates = function(r, i) {
      var u = xt;
      xt |= 1;
      try {
        return r(i);
      } finally {
        xt = u, xt === 0 && (Ol(), Ja && di());
      }
    }, s.createComponentSelector = function(r) {
      return { $$typeof: No, value: r };
    }, s.createContainer = function(r, i, u, f, p, g, D) {
      return pd(r, i, !1, null, u, f, p, g, D);
    }, s.createHasPseudoClassSelector = function(r) {
      return { $$typeof: Tn, value: r };
    }, s.createHydrationContainer = function(r, i, u, f, p, g, D, B, $) {
      return r = pd(u, f, !0, r, p, g, D, B, $), r.context = Ei(null), u = r.current, f = gr(), p = is(u), g = Jr(f, p), g.callback = i ?? null, Oi(u, g), r.current.lanes = p, _s(r, p, f), kr(r, f), r;
    }, s.createPortal = function(r, i, u) {
      var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: x, key: f == null ? null : "" + f, children: r, containerInfo: i, implementation: u };
    }, s.createRoleSelector = function(r) {
      return { $$typeof: Hs, value: r };
    }, s.createTestNameSelector = function(r) {
      return { $$typeof: Mu, value: r };
    }, s.createTextSelector = function(r) {
      return { $$typeof: Aa, value: r };
    }, s.deferredUpdates = function(r) {
      var i = Ft, u = bn.transition;
      try {
        return bn.transition = null, Ft = 16, r();
      } finally {
        Ft = i, bn.transition = u;
      }
    }, s.discreteUpdates = function(r, i, u, f, p) {
      var g = Ft, D = bn.transition;
      try {
        return bn.transition = null, Ft = 1, r(i, u, f, p);
      } finally {
        Ft = g, bn.transition = D, xt === 0 && Ol();
      }
    }, s.findAllNodes = De, s.findBoundingRects = function(r, i) {
      if (!pn)
        throw Error(y(363));
      i = De(r, i), r = [];
      for (var u = 0; u < i.length; u++)
        r.push(kn(i[u]));
      for (i = r.length - 1; 0 < i; i--) {
        u = r[i];
        for (var f = u.x, p = f + u.width, g = u.y, D = g + u.height, B = i - 1; 0 <= B; B--)
          if (i !== B) {
            var $ = r[B], me = $.x, Ee = me + $.width, it = $.y, Ze = it + $.height;
            if (f >= me && g >= it && p <= Ee && D <= Ze) {
              r.splice(i, 1);
              break;
            } else if (f !== me || u.width !== $.width || Ze < g || it > D) {
              if (!(g !== it || u.height !== $.height || Ee < f || me > p)) {
                me > f && ($.width += me - f, $.x = f), Ee < p && ($.width = p - me), r.splice(i, 1);
                break;
              }
            } else {
              it > g && ($.height += it - g, $.y = g), Ze < D && ($.height = D - it), r.splice(i, 1);
              break;
            }
          }
      }
      return r;
    }, s.findHostInstance = ku, s.findHostInstanceWithNoPortals = function(r) {
      return r = ze(r), r = r !== null ? Ue(r) : null, r === null ? null : r.stateNode;
    }, s.findHostInstanceWithWarning = function(r) {
      return ku(r);
    }, s.flushControlled = function(r) {
      var i = xt;
      xt |= 1;
      var u = bn.transition, f = Ft;
      try {
        bn.transition = null, Ft = 1, r();
      } finally {
        Ft = f, bn.transition = u, xt = i, xt === 0 && (Ol(), di());
      }
    }, s.flushPassiveEffects = js, s.flushSync = $c, s.focusWithin = function(r, i) {
      if (!pn)
        throw Error(y(363));
      for (r = qc(r), i = sr(r, i), i = Array.from(i), r = 0; r < i.length; ) {
        var u = i[r++];
        if (!pr(u)) {
          if (u.tag === 5 && mr(u.stateNode))
            return !0;
          for (u = u.child; u !== null; )
            i.push(u), u = u.sibling;
        }
      }
      return !1;
    }, s.getCurrentUpdatePriority = function() {
      return Ft;
    }, s.getFindAllNodesFailureDescription = function(r, i) {
      if (!pn)
        throw Error(y(363));
      var u = 0, f = [];
      r = [qc(r), 0];
      for (var p = 0; p < r.length; ) {
        var g = r[p++], D = r[p++], B = i[D];
        if ((g.tag !== 5 || !pr(g)) && (Ic(g, B) && (f.push(ts(B)), D++, D > u && (u = D)), D < i.length))
          for (g = g.child; g !== null; )
            r.push(g, D), g = g.sibling;
      }
      if (u < i.length) {
        for (r = []; u < i.length; u++)
          r.push(ts(i[u]));
        return `findAllNodes was able to match part of the selector:
  ` + (f.join(" > ") + `

No matching component was found for:
  `) + r.join(" > ");
      }
      return null;
    }, s.getPublicRootInstance = function(r) {
      if (r = r.current, !r.child)
        return null;
      switch (r.child.tag) {
        case 5:
          return ut(r.child.stateNode);
        default:
          return r.child.stateNode;
      }
    }, s.injectIntoDevTools = function(r) {
      if (r = { bundleType: r.bundleType, version: r.version, rendererPackageName: r.rendererPackageName, rendererConfig: r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: C.ReactCurrentDispatcher, findHostInstanceByFiber: Pl, findFiberByHostInstance: r.findFiberByHostInstance || nf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        r = !1;
      else {
        var i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (i.isDisabled || !i.supportsFiber)
          r = !0;
        else {
          try {
            ba = i.inject(r), fi = i;
          } catch {
          }
          r = !!i.checkDCE;
        }
      }
      return r;
    }, s.isAlreadyRendering = function() {
      return !1;
    }, s.observeVisibleRects = function(r, i, u, f) {
      if (!pn)
        throw Error(y(363));
      r = De(r, i);
      var p = Zn(r, u, f).disconnect;
      return { disconnect: function() {
        p();
      } };
    }, s.registerMutableSourceForHydration = function(r, i) {
      var u = i._getVersion;
      u = u(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, u] : r.mutableSourceEagerHydrationData.push(i, u);
    }, s.runWithPriority = function(r, i) {
      var u = Ft;
      try {
        return Ft = r, i();
      } finally {
        Ft = u;
      }
    }, s.shouldError = function() {
      return null;
    }, s.shouldSuspend = function() {
      return !1;
    }, s.updateContainer = function(r, i, u, f) {
      var p = i.current, g = gr(), D = is(p);
      return u = Ei(u), i.context === null ? i.context = u : i.pendingContext = u, i = Jr(g, D), i.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (i.callback = f), Oi(p, i), r = xi(p, D, g), r !== null && ll(r, p, D), D;
    }, s;
  }), ov;
}
var cv = { exports: {} };
/**
 * @license React
 * react-reconciler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fx;
function vR() {
  return fx || (fx = 1, process.env.NODE_ENV !== "production" && (cv.exports = function(n) {
    var s = {}, o = tt, h = Nx(), m = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function C(e) {
      y = e;
    }
    function b(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        E("warn", e, a);
      }
    }
    function x(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        E("error", e, a);
      }
    }
    function E(e, t, a) {
      {
        var l = m.ReactDebugCurrentFrame, c = l.getStackAddendum();
        c !== "" && (t += "%s", a = a.concat([c]));
        var d = a.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var S = Object.assign;
    function M(e) {
      return e._reactInternals;
    }
    function w(e, t) {
      e._reactInternals = t;
    }
    var F = !1, k = !1, Q = !1, J = !1, se = !1, he = !1, Ce = !0, Re = !0, ke = !0, ue = 0, ce = 1, Ke = 2, xe = 3, ze = 4, Te = 5, de = 6, Ue = 7, ft = 8, ut = 9, _e = 10, H = 11, ie = 12, ee = 13, U = 14, j = 15, je = 16, Pe = 17, Je = 18, Ve = 19, at = 21, rt = 22, dt = 23, Ht = 24, Nn = 25, nr = Symbol.for("react.element"), qt = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), On = Symbol.for("react.strict_mode"), Un = Symbol.for("react.profiler"), jn = Symbol.for("react.provider"), Ar = Symbol.for("react.context"), Ln = Symbol.for("react.forward_ref"), pn = Symbol.for("react.suspense"), hr = Symbol.for("react.suspense_list"), kn = Symbol.for("react.memo"), Bt = Symbol.for("react.lazy"), pr = Symbol.for("react.scope"), ai = Symbol.for("react.debug_trace_mode"), mr = Symbol.for("react.offscreen"), Zn = Symbol.for("react.legacy_hidden"), Di = Symbol.for("react.cache"), Xi = Symbol.for("react.tracing_marker"), Ai = Symbol.iterator, G = "@@iterator";
    function le(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ai && e[Ai] || e[G];
      return typeof t == "function" ? t : null;
    }
    function we(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var c = t.displayName || t.name || "";
      return c !== "" ? a + "(" + c + ")" : a;
    }
    function Qe(e) {
      return e.displayName || "Context";
    }
    function Fe(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Fn:
          return "Fragment";
        case qt:
          return "Portal";
        case Un:
          return "Profiler";
        case On:
          return "StrictMode";
        case pn:
          return "Suspense";
        case hr:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ar:
            var t = e;
            return Qe(t) + ".Consumer";
          case jn:
            var a = e;
            return Qe(a._context) + ".Provider";
          case Ln:
            return we(e, e.render, "ForwardRef");
          case kn:
            var l = e.displayName || null;
            return l !== null ? l : Fe(e.type) || "Memo";
          case Bt: {
            var c = e, d = c._payload, v = c._init;
            try {
              return Fe(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function It(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function Rt(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ht:
          return "Cache";
        case ut:
          var l = a;
          return Rt(l) + ".Consumer";
        case _e:
          var c = a;
          return Rt(c._context) + ".Provider";
        case Je:
          return "DehydratedFragment";
        case H:
          return It(a, a.render, "ForwardRef");
        case Ue:
          return "Fragment";
        case Te:
          return a;
        case ze:
          return "Portal";
        case xe:
          return "Root";
        case de:
          return "Text";
        case je:
          return Fe(a);
        case ft:
          return a === On ? "StrictMode" : "Mode";
        case rt:
          return "Offscreen";
        case ie:
          return "Profiler";
        case at:
          return "Scope";
        case ee:
          return "Suspense";
        case Ve:
          return "SuspenseList";
        case Nn:
          return "TracingMarker";
        case ce:
        case ue:
        case Pe:
        case Ke:
        case U:
        case j:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var pe = (
      /*                      */
      0
    ), xn = (
      /*                */
      1
    ), zt = (
      /*                    */
      2
    ), ht = (
      /*                       */
      4
    ), Ji = (
      /*           */
      zt | ht
    ), rr = (
      /*                */
      16
    ), Zi = (
      /*                 */
      32
    ), Wa = (
      /*                     */
      64
    ), Et = (
      /*                   */
      128
    ), _r = (
      /*            */
      256
    ), Ir = (
      /*                          */
      512
    ), Er = (
      /*                     */
      1024
    ), ir = (
      /*                      */
      2048
    ), Kn = (
      /*                    */
      4096
    ), gs = (
      /*           */
      Kn | ht
    ), si = (
      /*                   */
      8192
    ), qa = (
      /*             */
      16384
    ), _a = ir | ht | Wa | Ir | Er | qa, tl = (
      /*               */
      32767
    ), O = (
      /*                   */
      32768
    ), ae = (
      /*                */
      65536
    ), ge = (
      /* */
      131072
    ), $e = (
      /*                       */
      1048576
    ), wt = (
      /*                    */
      2097152
    ), Tt = (
      /*                 */
      4194304
    ), pt = (
      /*                */
      8388608
    ), st = (
      /*               */
      16777216
    ), yn = (
      /*              */
      33554432
    ), rn = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ht | Er | 0
    ), en = zt | ht | rr | Zi | Ir | Kn | si, Bn = ht | Wa | Ir | si, Rr = ir | rr, Sn = Tt | pt | wt, gn = m.ReactCurrentOwner;
    function li(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (zt | Kn)) !== pe && (a = t.return), l = t.return;
        while (l);
      }
      return t.tag === xe ? a : null;
    }
    function xs(e) {
      return li(e) === e;
    }
    function su(e) {
      {
        var t = gn.current;
        if (t !== null && t.tag === ce) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || x("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var c = M(e);
      return c ? li(c) === c : !1;
    }
    function Ki(e) {
      if (li(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function $i(e) {
      var t = e.alternate;
      if (!t) {
        var a = li(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var l = e, c = t; ; ) {
        var d = l.return;
        if (d === null)
          break;
        var v = d.alternate;
        if (v === null) {
          var R = d.return;
          if (R !== null) {
            l = c = R;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var z = d.child; z; ) {
            if (z === l)
              return Ki(d), e;
            if (z === c)
              return Ki(d), t;
            z = z.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== c.return)
          l = d, c = v;
        else {
          for (var A = !1, L = d.child; L; ) {
            if (L === l) {
              A = !0, l = d, c = v;
              break;
            }
            if (L === c) {
              A = !0, c = d, l = v;
              break;
            }
            L = L.sibling;
          }
          if (!A) {
            for (L = v.child; L; ) {
              if (L === l) {
                A = !0, l = v, c = d;
                break;
              }
              if (L === c) {
                A = !0, c = v, l = d;
                break;
              }
              L = L.sibling;
            }
            if (!A)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== c)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== xe)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Qr(e) {
      var t = $i(e);
      return t !== null ? Gt(t) : null;
    }
    function Gt(e) {
      if (e.tag === Te || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Gt(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Xt(e) {
      var t = $i(e);
      return t !== null ? ui(t) : null;
    }
    function ui(e) {
      if (e.tag === Te || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ze) {
          var a = ui(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Vn = Array.isArray;
    function Jt(e) {
      return Vn(e);
    }
    var oi = n.getPublicInstance, Ia = n.getRootHostContext, vr = n.getChildHostContext, Qa = n.prepareForCommit, nl = n.resetAfterCommit, Ss = n.createInstance, ea = n.appendInitialChild, Ga = n.finalizeInitialChildren, Nr = n.prepareUpdate, rl = n.shouldSetTextContent, Ku = n.createTextInstance, $u = n.scheduleTimeout, Ea = n.cancelTimeout, Ra = n.noTimeout;
    n.now;
    var Ni = n.isPrimaryRenderer, Ta = n.warnsIfNotActing, Gr = n.supportsMutation, ci = n.supportsPersistence, Yn = n.supportsHydration, il = n.getInstanceFromNode;
    n.beforeActiveInstanceBlur, n.afterActiveInstanceBlur;
    var _s = n.preparePortalMount;
    n.preparePortalMount, n.getInstanceFromScope;
    var gc = n.getCurrentEventPriority, al = n.detachDeletedInstance, Ft = n.supportsMicrotasks, lu = n.scheduleMicrotask, Fi = n.supportsTestSelectors, uu = n.findFiberRoot, xc = n.getBoundingRect, eo = n.getTextContent, on = n.isHiddenSubtree, ou = n.matchAccessibilityRole, Sc = n.setFocusIfFocusable, cu = n.setupIntersectionObserver, to = n.appendChild, ba = n.appendChildToContainer, fi = n.commitTextUpdate, Xa = n.commitMount, no = n.commitUpdate, Xr = n.insertBefore, Fr = n.insertInContainerBefore, Ja = n.removeChild, Es = n.removeChildFromContainer, Rs = n.resetTextContent, _c = n.hideInstance, di = n.hideTextInstance, Ec = n.unhideInstance, sl = n.unhideTextInstance, _ = n.clearContainer, N = n.cloneInstance, q = n.createContainerChildSet, K = n.appendChildToContainerChildSet, ve = n.finalizeContainerChildren, Ge = n.replaceContainerChildren;
    n.getOffscreenContainerType;
    var He = n.getOffscreenContainerProps, lt = n.cloneHiddenInstance, gt = n.cloneHiddenTextInstance, Pt = n.canHydrateInstance, jt = n.canHydrateTextInstance, bt = n.canHydrateSuspenseInstance, At = n.isSuspenseInstancePending, Vt = n.isSuspenseInstanceFallback, _n = n.registerSuspenseInstanceRetry, ta = n.getNextHydratableSibling, Jr = n.getFirstHydratableChild, Oi = n.getFirstHydratableChildWithinContainer, ll = n.getFirstHydratableChildWithinSuspenseInstance, fu = n.hydrateInstance, ul = n.hydrateTextInstance, du = n.hydrateSuspenseInstance, ro = n.getNextHydratableInstanceAfterSuspenseInstance, io = n.commitHydratedContainer, ao = n.commitHydratedSuspenseInstance, Gf = n.clearSuspenseBoundary, Xf = n.clearSuspenseBoundaryFromContainer, Jf = n.shouldDeleteUnhydratedTailInstances, Rc = n.didNotMatchHydratedContainerTextInstance, ol = n.didNotMatchHydratedTextInstance, cl = n.didNotHydrateInstanceWithinContainer, so = n.didNotHydrateInstanceWithinSuspenseInstance, lo = n.didNotHydrateInstance, hi = n.didNotFindHydratableInstanceWithinContainer, pi = n.didNotFindHydratableTextInstanceWithinContainer, Ts = n.didNotFindHydratableSuspenseInstanceWithinContainer, Ca = n.didNotFindHydratableInstanceWithinSuspenseInstance, Ma = n.didNotFindHydratableTextInstanceWithinSuspenseInstance, bs = n.didNotFindHydratableSuspenseInstanceWithinSuspenseInstance, Zf = n.didNotFindHydratableInstance, Tc = n.didNotFindHydratableTextInstance, bc = n.didNotFindHydratableSuspenseInstance, Zr = n.errorHydratingContainer, ar = 0, cn, fl, mi, Cc, Mc, uo, oo;
    function zc() {
    }
    zc.__reactDisabledLog = !0;
    function hu() {
      {
        if (ar === 0) {
          cn = console.log, fl = console.info, mi = console.warn, Cc = console.error, Mc = console.group, uo = console.groupCollapsed, oo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: zc,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ar++;
      }
    }
    function dl() {
      {
        if (ar--, ar === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: cn
            }),
            info: S({}, e, {
              value: fl
            }),
            warn: S({}, e, {
              value: mi
            }),
            error: S({}, e, {
              value: Cc
            }),
            group: S({}, e, {
              value: Mc
            }),
            groupCollapsed: S({}, e, {
              value: uo
            }),
            groupEnd: S({}, e, {
              value: oo
            })
          });
        }
        ar < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pu = m.ReactCurrentDispatcher, Cs;
    function Ui(e, t, a) {
      {
        if (Cs === void 0)
          try {
            throw Error();
          } catch (c) {
            var l = c.stack.trim().match(/\n( *(at )?)/);
            Cs = l && l[1] || "";
          }
        return `
` + Cs + e;
      }
    }
    var co = !1, mu;
    {
      var hl = typeof WeakMap == "function" ? WeakMap : Map;
      mu = new hl();
    }
    function fo(e, t) {
      if (!e || co)
        return "";
      {
        var a = mu.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      co = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = pu.current, pu.current = null, hu();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (fe) {
              l = fe;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (fe) {
              l = fe;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            l = fe;
          }
          e();
        }
      } catch (fe) {
        if (fe && l && typeof fe.stack == "string") {
          for (var R = fe.stack.split(`
`), z = l.stack.split(`
`), A = R.length - 1, L = z.length - 1; A >= 1 && L >= 0 && R[A] !== z[L]; )
            L--;
          for (; A >= 1 && L >= 0; A--, L--)
            if (R[A] !== z[L]) {
              if (A !== 1 || L !== 1)
                do
                  if (A--, L--, L < 0 || R[A] !== z[L]) {
                    var V = `
` + R[A].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && mu.set(e, V), V;
                  }
                while (A >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        co = !1, pu.current = d, dl(), Error.prepareStackTrace = c;
      }
      var Z = e ? e.displayName || e.name : "", te = Z ? Ui(Z) : "";
      return typeof e == "function" && mu.set(e, te), te;
    }
    function vu(e, t, a) {
      return fo(e, !0);
    }
    function Or(e, t, a) {
      return fo(e, !1);
    }
    function yu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Za(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fo(e, yu(e));
      if (typeof e == "string")
        return Ui(e);
      switch (e) {
        case pn:
          return Ui("Suspense");
        case hr:
          return Ui("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ln:
            return Or(e.render);
          case kn:
            return Za(e.type, t, a);
          case Bt: {
            var l = e, c = l._payload, d = l._init;
            try {
              return Za(d(c), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Li = Object.prototype.hasOwnProperty, ho = {}, Ms = m.ReactDebugCurrentFrame;
    function gu(e) {
      if (e) {
        var t = e._owner, a = Za(e.type, e._source, t ? t.type : null);
        Ms.setExtraStackFrame(a);
      } else
        Ms.setExtraStackFrame(null);
    }
    function Kr(e, t, a, l, c) {
      {
        var d = Function.call.bind(Li);
        for (var v in e)
          if (d(e, v)) {
            var R = void 0;
            try {
              if (typeof e[v] != "function") {
                var z = Error((l || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              R = e[v](t, v, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              R = A;
            }
            R && !(R instanceof Error) && (gu(c), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, v, typeof R), gu(null)), R instanceof Error && !(R.message in ho) && (ho[R.message] = !0, gu(c), x("Failed %s type: %s", a, R.message), gu(null));
          }
      }
    }
    var fn = [], zs;
    zs = [];
    var ki = -1;
    function na(e) {
      return {
        current: e
      };
    }
    function Wn(e, t) {
      if (ki < 0) {
        x("Unexpected pop.");
        return;
      }
      t !== zs[ki] && x("Unexpected Fiber popped."), e.current = fn[ki], fn[ki] = null, zs[ki] = null, ki--;
    }
    function tn(e, t, a) {
      ki++, fn[ki] = e.current, zs[ki] = a, e.current = t;
    }
    var Ka;
    Ka = {};
    var Ot = {};
    Object.freeze(Ot);
    var hn = na(Ot), an = na(!1), pl = Ot;
    function ra(e, t, a) {
      return a && vi(t) ? pl : hn.current;
    }
    function ml(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function vl(e, t) {
      {
        var a = e.type, l = a.contextTypes;
        if (!l)
          return Ot;
        var c = e.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === t)
          return c.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var v in l)
          d[v] = t[v];
        {
          var R = Ye(e) || "Unknown";
          Kr(l, d, "context", R);
        }
        return c && ml(e, t, d), d;
      }
    }
    function qn() {
      return an.current;
    }
    function vi(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function yl(e) {
      Wn(an, e), Wn(hn, e);
    }
    function xu(e) {
      Wn(an, e), Wn(hn, e);
    }
    function ia(e, t, a) {
      {
        if (hn.current !== Ot)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        tn(hn, t, e), tn(an, a, e);
      }
    }
    function Bi(e, t, a) {
      {
        var l = e.stateNode, c = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var d = Ye(e) || "Unknown";
            Ka[d] || (Ka[d] = !0, x("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = l.getChildContext();
        for (var R in v)
          if (!(R in c))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + R + '" is not defined in childContextTypes.');
        {
          var z = Ye(e) || "Unknown";
          Kr(c, v, "child context", z);
        }
        return S({}, a, v);
      }
    }
    function aa(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ot;
        return pl = hn.current, tn(hn, a, e), tn(an, an.current, e), !0;
      }
    }
    function Su(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var c = Bi(e, t, pl);
          l.__reactInternalMemoizedMergedChildContext = c, Wn(an, e), Wn(hn, e), tn(hn, c, e), tn(an, a, e);
        } else
          Wn(an, e), tn(an, a, e);
      }
    }
    function po(e) {
      {
        if (!xs(e) || e.tag !== ce)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case xe:
              return t.stateNode.context;
            case ce: {
              var a = t.type;
              if (vi(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ws = 0, wc = 1, ot = (
      /*                         */
      0
    ), Zt = (
      /*                 */
      1
    ), kt = (
      /*                    */
      2
    ), En = (
      /*               */
      8
    ), yi = (
      /*              */
      16
    ), gl = Math.clz32 ? Math.clz32 : vo, Kf = Math.log, mo = Math.LN2;
    function vo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Kf(t) / mo | 0) | 0;
    }
    var _u = 31, oe = (
      /*                        */
      0
    ), In = (
      /*                          */
      0
    ), Ct = (
      /*                        */
      1
    ), Ds = (
      /*    */
      2
    ), za = (
      /*            */
      4
    ), wa = (
      /*            */
      8
    ), sa = (
      /*                    */
      16
    ), xl = (
      /*                */
      32
    ), Sl = (
      /*                       */
      4194240
    ), _l = (
      /*                        */
      64
    ), Dc = (
      /*                        */
      128
    ), Ac = (
      /*                        */
      256
    ), yo = (
      /*                        */
      512
    ), go = (
      /*                        */
      1024
    ), xo = (
      /*                        */
      2048
    ), So = (
      /*                        */
      4096
    ), El = (
      /*                        */
      8192
    ), Nc = (
      /*                        */
      16384
    ), Fc = (
      /*                       */
      32768
    ), Oc = (
      /*                       */
      65536
    ), Eu = (
      /*                       */
      131072
    ), Ru = (
      /*                       */
      262144
    ), Uc = (
      /*                       */
      524288
    ), _o = (
      /*                       */
      1048576
    ), Eo = (
      /*                       */
      2097152
    ), Tu = (
      /*                            */
      130023424
    ), As = (
      /*                             */
      4194304
    ), Ro = (
      /*                             */
      8388608
    ), gi = (
      /*                             */
      16777216
    ), To = (
      /*                             */
      33554432
    ), Ns = (
      /*                             */
      67108864
    ), Rl = As, $a = (
      /*          */
      134217728
    ), bu = (
      /*                                 */
      268435455
    ), Tl = (
      /*               */
      268435456
    ), Hi = (
      /*                       */
      536870912
    ), nn = (
      /*                   */
      1073741824
    );
    function Vh(e) {
      {
        if (e & Ct)
          return "Sync";
        if (e & Ds)
          return "InputContinuousHydration";
        if (e & za)
          return "InputContinuous";
        if (e & wa)
          return "DefaultHydration";
        if (e & sa)
          return "Default";
        if (e & xl)
          return "TransitionHydration";
        if (e & Sl)
          return "Transition";
        if (e & Tu)
          return "Retry";
        if (e & $a)
          return "SelectiveHydration";
        if (e & Tl)
          return "IdleHydration";
        if (e & Hi)
          return "Idle";
        if (e & nn)
          return "Offscreen";
      }
    }
    var ln = -1, yr = _l, $n = As;
    function bl(e) {
      switch (la(e)) {
        case Ct:
          return Ct;
        case Ds:
          return Ds;
        case za:
          return za;
        case wa:
          return wa;
        case sa:
          return sa;
        case xl:
          return xl;
        case _l:
        case Dc:
        case Ac:
        case yo:
        case go:
        case xo:
        case So:
        case El:
        case Nc:
        case Fc:
        case Oc:
        case Eu:
        case Ru:
        case Uc:
        case _o:
        case Eo:
          return e & Sl;
        case As:
        case Ro:
        case gi:
        case To:
        case Ns:
          return e & Tu;
        case $a:
          return $a;
        case Tl:
          return Tl;
        case Hi:
          return Hi;
        case nn:
          return nn;
        default:
          return x("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Cu(e, t) {
      var a = e.pendingLanes;
      if (a === oe)
        return oe;
      var l = oe, c = e.suspendedLanes, d = e.pingedLanes, v = a & bu;
      if (v !== oe) {
        var R = v & ~c;
        if (R !== oe)
          l = bl(R);
        else {
          var z = v & d;
          z !== oe && (l = bl(z));
        }
      } else {
        var A = a & ~c;
        A !== oe ? l = bl(A) : d !== oe && (l = bl(d));
      }
      if (l === oe)
        return oe;
      if (t !== oe && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & c) === oe) {
        var L = la(l), V = la(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          L >= V || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          L === sa && (V & Sl) !== oe
        )
          return t;
      }
      (l & za) !== oe && (l |= a & sa);
      var Z = e.entangledLanes;
      if (Z !== oe)
        for (var te = e.entanglements, fe = l & Z; fe > 0; ) {
          var ye = Da(fe), Xe = 1 << ye;
          l |= te[ye], fe &= ~Xe;
        }
      return l;
    }
    function $f(e, t) {
      for (var a = e.eventTimes, l = ln; t > 0; ) {
        var c = Da(t), d = 1 << c, v = a[c];
        v > l && (l = v), t &= ~d;
      }
      return l;
    }
    function ed(e, t) {
      switch (e) {
        case Ct:
        case Ds:
        case za:
          return t + 250;
        case wa:
        case sa:
        case xl:
        case _l:
        case Dc:
        case Ac:
        case yo:
        case go:
        case xo:
        case So:
        case El:
        case Nc:
        case Fc:
        case Oc:
        case Eu:
        case Ru:
        case Uc:
        case _o:
        case Eo:
          return t + 5e3;
        case As:
        case Ro:
        case gi:
        case To:
        case Ns:
          return ln;
        case $a:
        case Tl:
        case Hi:
        case nn:
          return ln;
        default:
          return x("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function td(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, c = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var R = Da(v), z = 1 << R, A = d[R];
        A === ln ? ((z & l) === oe || (z & c) !== oe) && (d[R] = ed(z, t)) : A <= t && (e.expiredLanes |= z), v &= ~z;
      }
    }
    function Lc(e) {
      return bl(e.pendingLanes);
    }
    function bo(e) {
      var t = e.pendingLanes & ~nn;
      return t !== oe ? t : t & nn ? nn : oe;
    }
    function kc(e) {
      return (e & Ct) !== oe;
    }
    function Co(e) {
      return (e & bu) !== oe;
    }
    function Bc(e) {
      return (e & Tu) === e;
    }
    function Mo(e) {
      return (e & Sl) === e;
    }
    function Fs(e, t) {
      var a = Ds | za | wa | sa;
      return (t & a) !== oe;
    }
    function nd(e, t) {
      return (t & e.expiredLanes) !== oe;
    }
    function zo(e) {
      return (e & Sl) !== 0;
    }
    function rd() {
      var e = yr;
      return yr <<= 1, yr & Sl || (yr = _l), e;
    }
    function id() {
      var e = $n;
      return $n <<= 1, $n & Tu || ($n = As), e;
    }
    function la(e) {
      return e & -e;
    }
    function Cl(e) {
      return la(e);
    }
    function Da(e) {
      return 31 - gl(e);
    }
    function wo(e) {
      return Da(e);
    }
    function Rn(e, t) {
      return (e & t) !== oe;
    }
    function Ml(e, t) {
      return (e & t) === t;
    }
    function mt(e, t) {
      return e | t;
    }
    function Os(e, t) {
      return e & ~t;
    }
    function es(e, t) {
      return e & t;
    }
    function Av(e) {
      return e;
    }
    function Ne(e, t) {
      return e !== In && e < t ? e : t;
    }
    function zl(e) {
      for (var t = [], a = 0; a < _u; a++)
        t.push(e);
      return t;
    }
    function Us(e, t, a) {
      e.pendingLanes |= t, t !== Hi && (e.suspendedLanes = oe, e.pingedLanes = oe);
      var l = e.eventTimes, c = wo(t);
      l[c] = a;
    }
    function ad(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var c = Da(l), d = 1 << c;
        a[c] = ln, l &= ~d;
      }
    }
    function sd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ls(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, c = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var R = Da(v), z = 1 << R;
        l[R] = oe, c[R] = ln, d[R] = ln, v &= ~z;
      }
    }
    function ks(e, t) {
      for (var a = e.entangledLanes |= t, l = e.entanglements, c = a; c; ) {
        var d = Da(c), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[d] & t && (l[d] |= t), c &= ~v;
      }
    }
    function Hc(e, t) {
      var a = la(t), l;
      switch (a) {
        case za:
          l = Ds;
          break;
        case sa:
          l = wa;
          break;
        case _l:
        case Dc:
        case Ac:
        case yo:
        case go:
        case xo:
        case So:
        case El:
        case Nc:
        case Fc:
        case Oc:
        case Eu:
        case Ru:
        case Uc:
        case _o:
        case Eo:
        case As:
        case Ro:
        case gi:
        case To:
        case Ns:
          l = xl;
          break;
        case Hi:
          l = Tl;
          break;
        default:
          l = In;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== In ? In : l;
    }
    function Pc(e, t, a) {
      if (Ur)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var c = wo(a), d = 1 << c, v = l[c];
          v.add(t), a &= ~d;
        }
    }
    function jc(e, t) {
      if (Ur)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var c = wo(t), d = 1 << c, v = a[c];
          v.size > 0 && (v.forEach(function(R) {
            var z = R.alternate;
            (z === null || !l.has(z)) && l.add(R);
          }), v.clear()), t &= ~d;
        }
    }
    var Pi = Ct, wl = za, Dl = sa, Do = Hi, Bs = In;
    function $r() {
      return Bs;
    }
    function Qn(e) {
      Bs = e;
    }
    function Vc(e, t) {
      var a = Bs;
      try {
        return Bs = e, t();
      } finally {
        Bs = a;
      }
    }
    function Ao(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Yh(e, t) {
      return e > t ? e : t;
    }
    function ld(e, t) {
      return e !== 0 && e < t;
    }
    function Yc(e) {
      var t = la(e);
      return ld(Pi, t) ? ld(wl, t) ? Co(t) ? Dl : Do : wl : Pi;
    }
    var Wc = h.unstable_scheduleCallback, ud = h.unstable_cancelCallback, od = h.unstable_shouldYield, No = h.unstable_requestPaint, Tn = h.unstable_now, Hs = h.unstable_ImmediatePriority, Mu = h.unstable_UserBlockingPriority, Aa = h.unstable_NormalPriority, Al = h.unstable_IdlePriority, qc = h.unstable_yieldValue, Ic = h.unstable_setDisableYieldValue, ts = null, sr = null, De = null, ua = !1, Ur = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Qc(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return x("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ce && (e = S({}, e, {
          getLaneLabelMap: Nl,
          injectProfilingHooks: ei
        })), ts = t.inject(e), sr = t;
      } catch (a) {
        x("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function bn(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ts, e, t);
        } catch (a) {
          ua || (ua = !0, x("React instrumentation encountered an error: %s", a));
        }
    }
    function xt(e, t) {
      if (sr && typeof sr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Et) === Et;
          if (Re) {
            var l;
            switch (t) {
              case Pi:
                l = Hs;
                break;
              case wl:
                l = Mu;
                break;
              case Dl:
                l = Aa;
                break;
              case Do:
                l = Al;
                break;
              default:
                l = Aa;
                break;
            }
            sr.onCommitFiberRoot(ts, e, l, a);
          }
        } catch (c) {
          ua || (ua = !0, x("React instrumentation encountered an error: %s", c));
        }
    }
    function Hn(e) {
      if (sr && typeof sr.onPostCommitFiberRoot == "function")
        try {
          sr.onPostCommitFiberRoot(ts, e);
        } catch (t) {
          ua || (ua = !0, x("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (sr && typeof sr.onCommitFiberUnmount == "function")
        try {
          sr.onCommitFiberUnmount(ts, e);
        } catch (t) {
          ua || (ua = !0, x("React instrumentation encountered an error: %s", t));
        }
    }
    function Ut(e) {
      if (typeof qc == "function" && (Ic(e), C(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ts, e);
        } catch (t) {
          ua || (ua = !0, x("React instrumentation encountered an error: %s", t));
        }
    }
    function ei(e) {
      De = e;
    }
    function Nl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _u; a++) {
          var l = Vh(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Gn(e) {
      De !== null && typeof De.markCommitStarted == "function" && De.markCommitStarted(e);
    }
    function Fl() {
      De !== null && typeof De.markCommitStopped == "function" && De.markCommitStopped();
    }
    function oa(e) {
      De !== null && typeof De.markComponentRenderStarted == "function" && De.markComponentRenderStarted(e);
    }
    function Na() {
      De !== null && typeof De.markComponentRenderStopped == "function" && De.markComponentRenderStopped();
    }
    function Gc(e) {
      De !== null && typeof De.markComponentPassiveEffectMountStarted == "function" && De.markComponentPassiveEffectMountStarted(e);
    }
    function zu() {
      De !== null && typeof De.markComponentPassiveEffectMountStopped == "function" && De.markComponentPassiveEffectMountStopped();
    }
    function Lr(e) {
      De !== null && typeof De.markComponentPassiveEffectUnmountStarted == "function" && De.markComponentPassiveEffectUnmountStarted(e);
    }
    function Xc() {
      De !== null && typeof De.markComponentPassiveEffectUnmountStopped == "function" && De.markComponentPassiveEffectUnmountStopped();
    }
    function Jc(e) {
      De !== null && typeof De.markComponentLayoutEffectMountStarted == "function" && De.markComponentLayoutEffectMountStarted(e);
    }
    function Ol() {
      De !== null && typeof De.markComponentLayoutEffectMountStopped == "function" && De.markComponentLayoutEffectMountStopped();
    }
    function wu(e) {
      De !== null && typeof De.markComponentLayoutEffectUnmountStarted == "function" && De.markComponentLayoutEffectUnmountStarted(e);
    }
    function Fo() {
      De !== null && typeof De.markComponentLayoutEffectUnmountStopped == "function" && De.markComponentLayoutEffectUnmountStopped();
    }
    function ns(e, t, a) {
      De !== null && typeof De.markComponentErrored == "function" && De.markComponentErrored(e, t, a);
    }
    function Oo(e, t, a) {
      De !== null && typeof De.markComponentSuspended == "function" && De.markComponentSuspended(e, t, a);
    }
    function rs(e) {
      De !== null && typeof De.markLayoutEffectsStarted == "function" && De.markLayoutEffectsStarted(e);
    }
    function Uo() {
      De !== null && typeof De.markLayoutEffectsStopped == "function" && De.markLayoutEffectsStopped();
    }
    function Du(e) {
      De !== null && typeof De.markPassiveEffectsStarted == "function" && De.markPassiveEffectsStarted(e);
    }
    function Zc() {
      De !== null && typeof De.markPassiveEffectsStopped == "function" && De.markPassiveEffectsStopped();
    }
    function Au(e) {
      De !== null && typeof De.markRenderStarted == "function" && De.markRenderStarted(e);
    }
    function Lo() {
      De !== null && typeof De.markRenderYielded == "function" && De.markRenderYielded();
    }
    function gr() {
      De !== null && typeof De.markRenderStopped == "function" && De.markRenderStopped();
    }
    function is(e) {
      De !== null && typeof De.markRenderScheduled == "function" && De.markRenderScheduled(e);
    }
    function xi(e, t) {
      De !== null && typeof De.markForceUpdateScheduled == "function" && De.markForceUpdateScheduled(e, t);
    }
    function Ul(e, t) {
      De !== null && typeof De.markStateUpdateScheduled == "function" && De.markStateUpdateScheduled(e, t);
    }
    function kr(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ti = typeof Object.is == "function" ? Object.is : kr, ji = null, Nu = !1, Kc = !1;
    function Fa(e) {
      ji === null ? ji = [e] : ji.push(e);
    }
    function cd(e) {
      Nu = !0, Fa(e);
    }
    function $c() {
      Nu && Si();
    }
    function Si() {
      if (!Kc && ji !== null) {
        Kc = !0;
        var e = 0, t = $r();
        try {
          var a = !0, l = ji;
          for (Qn(Pi); e < l.length; e++) {
            var c = l[e];
            do
              c = c(a);
            while (c !== null);
          }
          ji = null, Nu = !1;
        } catch (d) {
          throw ji !== null && (ji = ji.slice(e + 1)), Wc(Hs, Si), d;
        } finally {
          Qn(t), Kc = !1;
        }
      }
      return null;
    }
    function as(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fd = m.ReactCurrentBatchConfig, dd = null;
    function ef() {
      return fd.transition;
    }
    function Ps(e, t) {
      if (ti(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (!Li.call(t, d) || !ti(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function Wh(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Te:
          return Ui(e.type);
        case je:
          return Ui("Lazy");
        case ee:
          return Ui("Suspense");
        case Ve:
          return Ui("SuspenseList");
        case ue:
        case Ke:
        case j:
          return Or(e.type);
        case H:
          return Or(e.type.render);
        case ce:
          return vu(e.type);
        default:
          return "";
      }
    }
    function hd(e) {
      try {
        var t = "", a = e;
        do
          t += Wh(a), a = a.return;
        while (a);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    var tf = m.ReactDebugCurrentFrame, ni = null, Vi = !1;
    function qh() {
      {
        if (ni === null)
          return null;
        var e = ni._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function js() {
      return ni === null ? "" : hd(ni);
    }
    function lr() {
      tf.getCurrentStack = null, ni = null, Vi = !1;
    }
    function Yt(e) {
      tf.getCurrentStack = js, ni = e, Vi = !1;
    }
    function ca(e) {
      Vi = e;
    }
    var _i = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Ih = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & En && (t = a), a = a.return;
        return t;
      }, Vs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ll = [], kl = [], Fu = [], xr = [], Ys = [], Ou = [], Br = /* @__PURE__ */ new Set();
      _i.recordUnsafeLifecycleWarnings = function(e, t) {
        Br.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ll.push(e), e.mode & En && typeof t.UNSAFE_componentWillMount == "function" && kl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Fu.push(e), e.mode & En && typeof t.UNSAFE_componentWillReceiveProps == "function" && xr.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ys.push(e), e.mode & En && typeof t.UNSAFE_componentWillUpdate == "function" && Ou.push(e));
      }, _i.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ll.length > 0 && (Ll.forEach(function(Z) {
          e.add(Ye(Z) || "Component"), Br.add(Z.type);
        }), Ll = []);
        var t = /* @__PURE__ */ new Set();
        kl.length > 0 && (kl.forEach(function(Z) {
          t.add(Ye(Z) || "Component"), Br.add(Z.type);
        }), kl = []);
        var a = /* @__PURE__ */ new Set();
        Fu.length > 0 && (Fu.forEach(function(Z) {
          a.add(Ye(Z) || "Component"), Br.add(Z.type);
        }), Fu = []);
        var l = /* @__PURE__ */ new Set();
        xr.length > 0 && (xr.forEach(function(Z) {
          l.add(Ye(Z) || "Component"), Br.add(Z.type);
        }), xr = []);
        var c = /* @__PURE__ */ new Set();
        Ys.length > 0 && (Ys.forEach(function(Z) {
          c.add(Ye(Z) || "Component"), Br.add(Z.type);
        }), Ys = []);
        var d = /* @__PURE__ */ new Set();
        if (Ou.length > 0 && (Ou.forEach(function(Z) {
          d.add(Ye(Z) || "Component"), Br.add(Z.type);
        }), Ou = []), t.size > 0) {
          var v = Vs(t);
          x(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (l.size > 0) {
          var R = Vs(l);
          x(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, R);
        }
        if (d.size > 0) {
          var z = Vs(d);
          x(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, z);
        }
        if (e.size > 0) {
          var A = Vs(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
        if (a.size > 0) {
          var L = Vs(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
        if (c.size > 0) {
          var V = Vs(c);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, V);
        }
      };
      var Ws = /* @__PURE__ */ new Map(), ss = /* @__PURE__ */ new Set();
      _i.recordLegacyContextWarning = function(e, t) {
        var a = Ih(e);
        if (a === null) {
          x("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!ss.has(e.type)) {
          var l = Ws.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Ws.set(a, l)), l.push(e));
        }
      }, _i.flushLegacyContextWarning = function() {
        Ws.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              l.add(Ye(d) || "Component"), ss.add(d.type);
            });
            var c = Vs(l);
            try {
              Yt(a), x(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, c);
            } finally {
              lr();
            }
          }
        });
      }, _i.discardPendingWarnings = function() {
        Ll = [], kl = [], Fu = [], xr = [], Ys = [], Ou = [], Ws = /* @__PURE__ */ new Map();
      };
    }
    function Uu(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ko(e) {
      try {
        return Lu(e), !1;
      } catch {
        return !0;
      }
    }
    function Lu(e) {
      return "" + e;
    }
    function Qh(e) {
      if (ko(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Uu(e)), Lu(e);
    }
    function pd(e, t) {
      if (ko(e))
        return x("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Uu(e)), Lu(e);
    }
    function Ei(e, t) {
      if (e && e.defaultProps) {
        var a = S({}, t), l = e.defaultProps;
        for (var c in l)
          a[c] === void 0 && (a[c] = l[c]);
        return a;
      }
      return t;
    }
    var ku = na(null), Bl;
    Bl = {};
    var Hl = null, Pl = null, nf = null, r = !1;
    function i() {
      Hl = null, Pl = null, nf = null, r = !1;
    }
    function u() {
      r = !0;
    }
    function f() {
      r = !1;
    }
    function p(e, t, a) {
      Ni ? (tn(ku, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Bl && x("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Bl) : (tn(ku, t._currentValue2, e), t._currentValue2 = a, t._currentRenderer2 !== void 0 && t._currentRenderer2 !== null && t._currentRenderer2 !== Bl && x("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer2 = Bl);
    }
    function g(e, t) {
      var a = ku.current;
      Wn(ku, t), Ni ? e._currentValue = a : e._currentValue2 = a;
    }
    function D(e, t, a) {
      for (var l = e; l !== null; ) {
        var c = l.alternate;
        if (Ml(l.childLanes, t) ? c !== null && !Ml(c.childLanes, t) && (c.childLanes = mt(c.childLanes, t)) : (l.childLanes = mt(l.childLanes, t), c !== null && (c.childLanes = mt(c.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && x("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function B(e, t, a) {
      $(e, t, a);
    }
    function $(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var c = void 0, d = l.dependencies;
        if (d !== null) {
          c = l.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === ce) {
                var R = Cl(a), z = et(ln, R);
                z.tag = Tr;
                var A = l.updateQueue;
                if (A !== null) {
                  var L = A.shared, V = L.pending;
                  V === null ? z.next = z : (z.next = V.next, V.next = z), L.pending = z;
                }
              }
              l.lanes = mt(l.lanes, a);
              var Z = l.alternate;
              Z !== null && (Z.lanes = mt(Z.lanes, a)), D(l.return, a, e), d.lanes = mt(d.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (l.tag === _e)
          c = l.type === e.type ? null : l.child;
        else if (l.tag === Je) {
          var te = l.return;
          if (te === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          te.lanes = mt(te.lanes, a);
          var fe = te.alternate;
          fe !== null && (fe.lanes = mt(fe.lanes, a)), D(te, a, e), c = l.sibling;
        } else
          c = l.child;
        if (c !== null)
          c.return = l;
        else
          for (c = l; c !== null; ) {
            if (c === e) {
              c = null;
              break;
            }
            var ye = c.sibling;
            if (ye !== null) {
              ye.return = c.return, c = ye;
              break;
            }
            c = c.return;
          }
        l = c;
      }
    }
    function me(e, t) {
      Hl = e, Pl = null, nf = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Rn(a.lanes, t) && Zd(), a.firstContext = null);
      }
    }
    function Ee(e) {
      r && x("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = Ni ? e._currentValue : e._currentValue2;
      if (nf !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Pl === null) {
          if (Hl === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Pl = a, Hl.dependencies = {
            lanes: oe,
            firstContext: a
          };
        } else
          Pl = Pl.next = a;
      }
      return t;
    }
    var it = null;
    function Ze(e) {
      it === null ? it = [e] : it.push(e);
    }
    function sn() {
      if (it !== null) {
        for (var e = 0; e < it.length; e++) {
          var t = it[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var l = a.next, c = t.pending;
            if (c !== null) {
              var d = c.next;
              c.next = l, a.next = d;
            }
            t.pending = a;
          }
        }
        it = null;
      }
    }
    var qe = 0, ur = 1, Tr = 2, W = 3, P = !1, X, Ae;
    X = !1, Ae = null;
    function We(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: oe
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function vt(e, t) {
      var a = t.updateQueue, l = e.updateQueue;
      if (a === l) {
        var c = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        t.updateQueue = c;
      }
    }
    function et(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: qe,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function St(e, t, a) {
      var l = e.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (Ng(e)) {
          var d = c.interleaved;
          d === null ? (t.next = t, Ze(c)) : (t.next = d.next, d.next = t), c.interleaved = t;
        } else {
          var v = c.pending;
          v === null ? t.next = t : (t.next = v.next, v.next = t), c.pending = t;
        }
        Ae === c && !X && (x("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), X = !0);
      }
    }
    function Cn(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (zo(a)) {
          var d = c.lanes;
          d = es(d, e.pendingLanes);
          var v = mt(d, a);
          c.lanes = v, ks(e, v);
        }
      }
    }
    function Lt(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var c = l.updateQueue;
        if (a === c) {
          var d = null, v = null, R = a.firstBaseUpdate;
          if (R !== null) {
            var z = R;
            do {
              var A = {
                eventTime: z.eventTime,
                lane: z.lane,
                tag: z.tag,
                payload: z.payload,
                callback: z.callback,
                next: null
              };
              v === null ? d = v = A : (v.next = A, v = A), z = z.next;
            } while (z !== null);
            v === null ? d = v = t : (v.next = t, v = t);
          } else
            d = v = t;
          a = {
            baseState: c.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: v,
            shared: c.shared,
            effects: c.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var L = a.lastBaseUpdate;
      L === null ? a.firstBaseUpdate = t : L.next = t, a.lastBaseUpdate = t;
    }
    function ls(e, t, a, l, c, d) {
      switch (a.tag) {
        case ur: {
          var v = a.payload;
          if (typeof v == "function") {
            u();
            var R = v.call(d, l, c);
            {
              if (e.mode & En) {
                Ut(!0);
                try {
                  v.call(d, l, c);
                } finally {
                  Ut(!1);
                }
              }
              f();
            }
            return R;
          }
          return v;
        }
        case W:
          e.flags = e.flags & ~ae | Et;
        case qe: {
          var z = a.payload, A;
          if (typeof z == "function") {
            u(), A = z.call(d, l, c);
            {
              if (e.mode & En) {
                Ut(!0);
                try {
                  z.call(d, l, c);
                } finally {
                  Ut(!1);
                }
              }
              f();
            }
          } else
            A = z;
          return A == null ? l : S({}, l, A);
        }
        case Tr:
          return P = !0, l;
      }
      return l;
    }
    function Bo(e, t, a, l) {
      var c = e.updateQueue;
      P = !1, Ae = c.shared;
      var d = c.firstBaseUpdate, v = c.lastBaseUpdate, R = c.shared.pending;
      if (R !== null) {
        c.shared.pending = null;
        var z = R, A = z.next;
        z.next = null, v === null ? d = A : v.next = A, v = z;
        var L = e.alternate;
        if (L !== null) {
          var V = L.updateQueue, Z = V.lastBaseUpdate;
          Z !== v && (Z === null ? V.firstBaseUpdate = A : Z.next = A, V.lastBaseUpdate = z);
        }
      }
      if (d !== null) {
        var te = c.baseState, fe = oe, ye = null, Xe = null, yt = null, nt = d;
        do {
          var mn = nt.lane, vn = nt.eventTime;
          if (Ml(l, mn)) {
            if (yt !== null) {
              var ne = {
                eventTime: vn,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                tag: nt.tag,
                payload: nt.payload,
                callback: nt.callback,
                next: null
              };
              yt = yt.next = ne;
            }
            te = ls(e, c, nt, te, t, a);
            var Y = nt.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            nt.lane !== In) {
              e.flags |= Wa;
              var Se = c.effects;
              Se === null ? c.effects = [nt] : Se.push(nt);
            }
          } else {
            var I = {
              eventTime: vn,
              lane: mn,
              tag: nt.tag,
              payload: nt.payload,
              callback: nt.callback,
              next: null
            };
            yt === null ? (Xe = yt = I, ye = te) : yt = yt.next = I, fe = mt(fe, mn);
          }
          if (nt = nt.next, nt === null) {
            if (R = c.shared.pending, R === null)
              break;
            var Ie = R, Be = Ie.next;
            Ie.next = null, nt = Be, c.lastBaseUpdate = Ie, c.shared.pending = null;
          }
        } while (!0);
        yt === null && (ye = te), c.baseState = ye, c.firstBaseUpdate = Xe, c.lastBaseUpdate = yt;
        var Nt = c.shared.interleaved;
        if (Nt !== null) {
          var Kt = Nt;
          do
            fe = mt(fe, Kt.lane), Kt = Kt.next;
          while (Kt !== Nt);
        } else
          d === null && (c.shared.lanes = oe);
        Sh(fe), e.lanes = fe, e.memoizedState = te;
      }
      Ae = null;
    }
    function Hx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Nv() {
      P = !1;
    }
    function md() {
      return P;
    }
    function Fv(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var c = 0; c < l.length; c++) {
          var d = l[c], v = d.callback;
          v !== null && (d.callback = null, Hx(v, a));
        }
    }
    var Gh = {}, Ov = new o.Component().refs, Xh, Jh, Zh, Kh, $h, Uv, vd, ep, tp, np;
    {
      Xh = /* @__PURE__ */ new Set(), Jh = /* @__PURE__ */ new Set(), Zh = /* @__PURE__ */ new Set(), Kh = /* @__PURE__ */ new Set(), ep = /* @__PURE__ */ new Set(), $h = /* @__PURE__ */ new Set(), tp = /* @__PURE__ */ new Set(), np = /* @__PURE__ */ new Set();
      var Lv = /* @__PURE__ */ new Set();
      vd = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          Lv.has(a) || (Lv.add(a), x("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Uv = function(e, t) {
        if (t === void 0) {
          var a = Fe(e) || "Component";
          $h.has(a) || ($h.add(a), x("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gh, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gh);
    }
    function rp(e, t, a, l) {
      var c = e.memoizedState, d = a(l, c);
      {
        if (e.mode & En) {
          Ut(!0);
          try {
            d = a(l, c);
          } finally {
            Ut(!1);
          }
        }
        Uv(t, d);
      }
      var v = d == null ? c : S({}, c, d);
      if (e.memoizedState = v, e.lanes === oe) {
        var R = e.updateQueue;
        R.baseState = v;
      }
    }
    var ip = {
      isMounted: su,
      enqueueSetState: function(e, t, a) {
        var l = M(e), c = ii(), d = Gl(l), v = et(c, d);
        v.payload = t, a != null && (vd(a, "setState"), v.callback = a), St(l, v);
        var R = dr(l, d, c);
        R !== null && Cn(R, l, d), Ul(l, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = M(e), c = ii(), d = Gl(l), v = et(c, d);
        v.tag = ur, v.payload = t, a != null && (vd(a, "replaceState"), v.callback = a), St(l, v);
        var R = dr(l, d, c);
        R !== null && Cn(R, l, d), Ul(l, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = M(e), l = ii(), c = Gl(a), d = et(l, c);
        d.tag = Tr, t != null && (vd(t, "forceUpdate"), d.callback = t), St(a, d);
        var v = dr(a, c, l);
        v !== null && Cn(v, a, c), xi(a, c);
      }
    };
    function kv(e, t, a, l, c, d, v) {
      var R = e.stateNode;
      if (typeof R.shouldComponentUpdate == "function") {
        var z = R.shouldComponentUpdate(l, d, v);
        {
          if (e.mode & En) {
            Ut(!0);
            try {
              z = R.shouldComponentUpdate(l, d, v);
            } finally {
              Ut(!1);
            }
          }
          z === void 0 && x("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Fe(t) || "Component");
        }
        return z;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ps(a, l) || !Ps(c, d) : !0;
    }
    function Px(e, t, a) {
      var l = e.stateNode;
      {
        var c = Fe(t) || "Component", d = l.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? x("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : x("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && x("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && x("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), l.propTypes && x("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), l.contextType && x("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), l.contextTypes && x("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), t.contextType && t.contextTypes && !tp.has(t) && (tp.add(t), x("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof l.componentShouldUpdate == "function" && x("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && x("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Fe(t) || "A pure component"), typeof l.componentDidUnmount == "function" && x("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof l.componentDidReceiveProps == "function" && x("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof l.componentWillRecieveProps == "function" && x("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof l.UNSAFE_componentWillRecieveProps == "function" && x("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var v = l.props !== a;
        l.props !== void 0 && v && x("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), l.defaultProps && x("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !Zh.has(t) && (Zh.add(t), x("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Fe(t))), typeof l.getDerivedStateFromProps == "function" && x("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof l.getDerivedStateFromError == "function" && x("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof t.getSnapshotBeforeUpdate == "function" && x("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var R = l.state;
        R && (typeof R != "object" || Jt(R)) && x("%s.state: must be set to an object or null", c), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && x("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function Bv(e, t) {
      t.updater = ip, e.stateNode = t, w(t, e), t._reactInternalInstance = Gh;
    }
    function Hv(e, t, a) {
      var l = !1, c = Ot, d = Ot, v = t.contextType;
      if ("contextType" in t) {
        var R = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Ar && v._context === void 0
        );
        if (!R && !np.has(t)) {
          np.add(t);
          var z = "";
          v === void 0 ? z = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? z = " However, it is set to a " + typeof v + "." : v.$$typeof === jn ? z = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? z = " Did you accidentally pass the Context.Consumer instead?" : z = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", x("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Fe(t) || "Component", z);
        }
      }
      if (typeof v == "object" && v !== null)
        d = Ee(v);
      else {
        c = ra(e, t, !0);
        var A = t.contextTypes;
        l = A != null, d = l ? vl(e, c) : Ot;
      }
      var L = new t(a, d);
      if (e.mode & En) {
        Ut(!0);
        try {
          L = new t(a, d);
        } finally {
          Ut(!1);
        }
      }
      var V = e.memoizedState = L.state !== null && L.state !== void 0 ? L.state : null;
      Bv(e, L);
      {
        if (typeof t.getDerivedStateFromProps == "function" && V === null) {
          var Z = Fe(t) || "Component";
          Jh.has(Z) || (Jh.add(Z), x("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Z, L.state === null ? "null" : "undefined", Z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof L.getSnapshotBeforeUpdate == "function") {
          var te = null, fe = null, ye = null;
          if (typeof L.componentWillMount == "function" && L.componentWillMount.__suppressDeprecationWarning !== !0 ? te = "componentWillMount" : typeof L.UNSAFE_componentWillMount == "function" && (te = "UNSAFE_componentWillMount"), typeof L.componentWillReceiveProps == "function" && L.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? fe = "componentWillReceiveProps" : typeof L.UNSAFE_componentWillReceiveProps == "function" && (fe = "UNSAFE_componentWillReceiveProps"), typeof L.componentWillUpdate == "function" && L.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ye = "componentWillUpdate" : typeof L.UNSAFE_componentWillUpdate == "function" && (ye = "UNSAFE_componentWillUpdate"), te !== null || fe !== null || ye !== null) {
            var Xe = Fe(t) || "Component", yt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Kh.has(Xe) || (Kh.add(Xe), x(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Xe, yt, te !== null ? `
  ` + te : "", fe !== null ? `
  ` + fe : "", ye !== null ? `
  ` + ye : ""));
          }
        }
      }
      return l && ml(e, c, d), L;
    }
    function jx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (x("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), ip.enqueueReplaceState(t, t.state, null));
    }
    function Pv(e, t, a, l) {
      var c = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== c) {
        {
          var d = Ye(e) || "Component";
          Xh.has(d) || (Xh.add(d), x("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        ip.enqueueReplaceState(t, t.state, null);
      }
    }
    function ap(e, t, a, l) {
      Px(e, t, a);
      var c = e.stateNode;
      c.props = a, c.state = e.memoizedState, c.refs = Ov, We(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        c.context = Ee(d);
      else {
        var v = ra(e, t, !0);
        c.context = vl(e, v);
      }
      {
        if (c.state === a) {
          var R = Fe(t) || "Component";
          ep.has(R) || (ep.add(R), x("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", R));
        }
        e.mode & En && _i.recordLegacyContextWarning(e, c), _i.recordUnsafeLifecycleWarnings(e, c);
      }
      c.state = e.memoizedState;
      var z = t.getDerivedStateFromProps;
      if (typeof z == "function" && (rp(e, t, z, a), c.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (jx(e, c), Bo(e, a, c, l), c.state = e.memoizedState), typeof c.componentDidMount == "function") {
        var A = ht;
        A |= Tt, (e.mode & yi) !== ot && (A |= st), e.flags |= A;
      }
    }
    function Vx(e, t, a, l) {
      var c = e.stateNode, d = e.memoizedProps;
      c.props = d;
      var v = c.context, R = t.contextType, z = Ot;
      if (typeof R == "object" && R !== null)
        z = Ee(R);
      else {
        var A = ra(e, t, !0);
        z = vl(e, A);
      }
      var L = t.getDerivedStateFromProps, V = typeof L == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !V && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (d !== a || v !== z) && Pv(e, c, a, z), Nv();
      var Z = e.memoizedState, te = c.state = Z;
      if (Bo(e, a, c, l), te = e.memoizedState, d === a && Z === te && !qn() && !md()) {
        if (typeof c.componentDidMount == "function") {
          var fe = ht;
          fe |= Tt, (e.mode & yi) !== ot && (fe |= st), e.flags |= fe;
        }
        return !1;
      }
      typeof L == "function" && (rp(e, t, L, a), te = e.memoizedState);
      var ye = md() || kv(e, t, d, a, Z, te, z);
      if (ye) {
        if (!V && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var Xe = ht;
          Xe |= Tt, (e.mode & yi) !== ot && (Xe |= st), e.flags |= Xe;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var yt = ht;
          yt |= Tt, (e.mode & yi) !== ot && (yt |= st), e.flags |= yt;
        }
        e.memoizedProps = a, e.memoizedState = te;
      }
      return c.props = a, c.state = te, c.context = z, ye;
    }
    function Yx(e, t, a, l, c) {
      var d = t.stateNode;
      vt(e, t);
      var v = t.memoizedProps, R = t.type === t.elementType ? v : Ei(t.type, v);
      d.props = R;
      var z = t.pendingProps, A = d.context, L = a.contextType, V = Ot;
      if (typeof L == "object" && L !== null)
        V = Ee(L);
      else {
        var Z = ra(t, a, !0);
        V = vl(t, Z);
      }
      var te = a.getDerivedStateFromProps, fe = typeof te == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !fe && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== z || A !== V) && Pv(t, d, l, V), Nv();
      var ye = t.memoizedState, Xe = d.state = ye;
      if (Bo(t, l, d, c), Xe = t.memoizedState, v === z && ye === Xe && !qn() && !md() && !Q)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || ye !== e.memoizedState) && (t.flags |= ht), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ye !== e.memoizedState) && (t.flags |= Er), !1;
      typeof te == "function" && (rp(t, a, te, l), Xe = t.memoizedState);
      var yt = md() || kv(t, a, R, l, ye, Xe, V) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Q;
      return yt ? (!fe && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, Xe, V), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, Xe, V)), typeof d.componentDidUpdate == "function" && (t.flags |= ht), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Er)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || ye !== e.memoizedState) && (t.flags |= ht), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ye !== e.memoizedState) && (t.flags |= Er), t.memoizedProps = l, t.memoizedState = Xe), d.props = l, d.state = Xe, d.context = V, yt;
    }
    var Ho = [], Po = 0, yd = null, gd = 0, fa = [], da = 0, Bu = null, qs = 1, Is = "";
    function Wx(e) {
      return Pu(), (e.flags & $e) !== pe;
    }
    function qx(e) {
      return Pu(), gd;
    }
    function Ix() {
      var e = Is, t = qs, a = t & ~Qx(t);
      return a.toString(32) + e;
    }
    function Hu(e, t) {
      Pu(), Ho[Po++] = gd, Ho[Po++] = yd, yd = e, gd = t;
    }
    function jv(e, t, a) {
      Pu(), fa[da++] = qs, fa[da++] = Is, fa[da++] = Bu, Bu = e;
      var l = qs, c = Is, d = xd(l) - 1, v = l & ~(1 << d), R = a + 1, z = xd(t) + d;
      if (z > 30) {
        var A = d - d % 5, L = (1 << A) - 1, V = (v & L).toString(32), Z = v >> A, te = d - A, fe = xd(t) + te, ye = R << te, Xe = ye | Z, yt = V + c;
        qs = 1 << fe | Xe, Is = yt;
      } else {
        var nt = R << d, mn = nt | v, vn = c;
        qs = 1 << z | mn, Is = vn;
      }
    }
    function sp(e) {
      Pu();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        Hu(e, a), jv(e, a, l);
      }
    }
    function xd(e) {
      return 32 - gl(e);
    }
    function Qx(e) {
      return 1 << xd(e) - 1;
    }
    function lp(e) {
      for (; e === yd; )
        yd = Ho[--Po], Ho[Po] = null, gd = Ho[--Po], Ho[Po] = null;
      for (; e === Bu; )
        Bu = fa[--da], fa[da] = null, Is = fa[--da], fa[da] = null, qs = fa[--da], fa[da] = null;
    }
    function Gx() {
      return Pu(), Bu !== null ? {
        id: qs,
        overflow: Is
      } : null;
    }
    function Xx(e, t) {
      Pu(), fa[da++] = qs, fa[da++] = Is, fa[da++] = Bu, qs = t.id, Is = t.overflow, Bu = e;
    }
    function Pu() {
      Hr() || x("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var br = null, ha = null, Oa = !1, ju = !1, jl = null;
    function Jx() {
      Oa && x("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Zx() {
      ju = !0;
    }
    function Kx(e) {
      if (!Yn)
        return !1;
      var t = e.stateNode.containerInfo;
      return ha = Oi(t), br = e, Oa = !0, jl = null, ju = !1, !0;
    }
    function $x(e, t, a) {
      return Yn ? (ha = ll(t), br = e, Oa = !0, jl = null, ju = !1, a !== null && Xx(e, a), !0) : !1;
    }
    function Vv(e, t) {
      switch (e.tag) {
        case xe:
          cl(e.stateNode.containerInfo, t);
          break;
        case Te:
          lo(e.type, e.memoizedProps, e.stateNode, t);
          break;
        case ee:
          var a = e.memoizedState;
          a.dehydrated !== null && so(a.dehydrated, t);
          break;
      }
    }
    function Yv(e, t) {
      Vv(e, t);
      var a = eE();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= rr) : l.push(a);
    }
    function up(e, t) {
      {
        if (ju)
          return;
        switch (e.tag) {
          case xe: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Te:
                var l = t.type, c = t.pendingProps;
                hi(a, l, c);
                break;
              case de:
                var d = t.pendingProps;
                pi(a, d);
                break;
              case ee:
                Ts(a);
                break;
            }
            break;
          }
          case Te: {
            var v = e.type, R = e.memoizedProps, z = e.stateNode;
            switch (t.tag) {
              case Te:
                var A = t.type, L = t.pendingProps;
                Zf(v, R, z, A, L);
                break;
              case de:
                var V = t.pendingProps;
                Tc(v, R, z, V);
                break;
              case ee:
                bc(v, R, z);
                break;
            }
            break;
          }
          case ee: {
            var Z = e.memoizedState, te = Z.dehydrated;
            if (te !== null)
              switch (t.tag) {
                case Te:
                  var fe = t.type, ye = t.pendingProps;
                  Ca(te, fe, ye);
                  break;
                case de:
                  var Xe = t.pendingProps;
                  Ma(te, Xe);
                  break;
                case ee:
                  bs(te);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Wv(e, t) {
      t.flags = t.flags & ~Kn | zt, up(e, t);
    }
    function qv(e, t) {
      switch (e.tag) {
        case Te: {
          var a = e.type, l = e.pendingProps, c = Pt(t, a, l);
          return c !== null ? (e.stateNode = c, br = e, ha = Jr(c), !0) : !1;
        }
        case de: {
          var d = e.pendingProps, v = jt(t, d);
          return v !== null ? (e.stateNode = v, br = e, ha = null, !0) : !1;
        }
        case ee: {
          {
            var R = bt(t);
            if (R !== null) {
              var z = {
                dehydrated: R,
                treeContext: Gx(),
                retryLane: nn
              };
              e.memoizedState = z;
              var A = tE(R);
              return A.return = e, e.child = A, br = e, ha = null, !0;
            }
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function op(e) {
      return (e.mode & Zt) !== ot && (e.flags & Et) === pe;
    }
    function cp(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function fp(e) {
      if (Oa) {
        var t = ha;
        if (!t) {
          op(e) && (up(br, e), cp()), Wv(br, e), Oa = !1, br = e;
          return;
        }
        var a = t;
        if (!qv(e, t)) {
          op(e) && (up(br, e), cp()), t = ta(a);
          var l = br;
          if (!t || !qv(e, t)) {
            Wv(br, e), Oa = !1, br = e;
            return;
          }
          Yv(l, a);
        }
      }
    }
    function eS(e, t, a) {
      if (!Yn)
        throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var l = e.stateNode, c = !ju, d = fu(l, e.type, e.memoizedProps, t, a, e, c);
      return e.updateQueue = d, d !== null;
    }
    function tS(e) {
      if (!Yn)
        throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var t = e.stateNode, a = e.memoizedProps, l = !ju, c = ul(t, a, e, l);
      if (c) {
        var d = br;
        if (d !== null) {
          var v = (d.mode & Zt) !== ot;
          switch (d.tag) {
            case xe: {
              var R = d.stateNode.containerInfo;
              Rc(
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case Te: {
              var z = d.type, A = d.memoizedProps, L = d.stateNode;
              ol(
                z,
                A,
                L,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
          }
        }
      }
      return c;
    }
    function nS(e) {
      if (!Yn)
        throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      du(a, e);
    }
    function rS(e) {
      if (!Yn)
        throw new Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ro(a);
    }
    function Iv(e) {
      for (var t = e.return; t !== null && t.tag !== Te && t.tag !== xe && t.tag !== ee; )
        t = t.return;
      br = t;
    }
    function rf(e) {
      if (!Yn || e !== br)
        return !1;
      if (!Oa)
        return Iv(e), Oa = !0, !1;
      if (e.tag !== xe && (e.tag !== Te || Jf(e.type) && !rl(e.type, e.memoizedProps))) {
        var t = ha;
        if (t)
          if (op(e))
            Qv(e), cp();
          else
            for (; t; )
              Yv(e, t), t = ta(t);
      }
      return Iv(e), e.tag === ee ? ha = rS(e) : ha = br ? ta(e.stateNode) : null, !0;
    }
    function iS() {
      return Oa && ha !== null;
    }
    function Qv(e) {
      for (var t = ha; t; )
        Vv(e, t), t = ta(t);
    }
    function jo() {
      Yn && (br = null, ha = null, Oa = !1, ju = !1);
    }
    function Gv() {
      jl !== null && (Og(jl), jl = null);
    }
    function Hr() {
      return Oa;
    }
    function dp(e) {
      jl === null ? jl = [e] : jl.push(e);
    }
    var hp, pp, mp, vp, yp, Xv = function(e, t) {
    };
    hp = !1, pp = !1, mp = {}, vp = {}, yp = {}, Xv = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        vp[a] || (vp[a] = !0, x('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function af(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & En || he) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var c = Ye(e) || "Component";
          mp[c] || (x('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), mp[c] = !0);
        }
        if (a._owner) {
          var d = a._owner, v;
          if (d) {
            var R = d;
            if (R.tag !== ce)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = R.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var z = v;
          pd(l, "ref");
          var A = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === A)
            return t.ref;
          var L = function(V) {
            var Z = z.refs;
            Z === Ov && (Z = z.refs = {}), V === null ? delete Z[A] : Z[A] = V;
          };
          return L._stringRef = A, L;
        } else {
          if (typeof l != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + l + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return l;
    }
    function Sd(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function _d(e) {
      {
        var t = Ye(e) || "Component";
        if (yp[t])
          return;
        yp[t] = !0, x("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Jv(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Zv(e) {
      function t(I, ne) {
        if (e) {
          var Y = I.deletions;
          Y === null ? (I.deletions = [ne], I.flags |= rr) : Y.push(ne);
        }
      }
      function a(I, ne) {
        if (!e)
          return null;
        for (var Y = ne; Y !== null; )
          t(I, Y), Y = Y.sibling;
        return null;
      }
      function l(I, ne) {
        for (var Y = /* @__PURE__ */ new Map(), Se = ne; Se !== null; )
          Se.key !== null ? Y.set(Se.key, Se) : Y.set(Se.index, Se), Se = Se.sibling;
        return Y;
      }
      function c(I, ne) {
        var Y = Gu(I, ne);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function d(I, ne, Y) {
        if (I.index = Y, !e)
          return I.flags |= $e, ne;
        var Se = I.alternate;
        if (Se !== null) {
          var Ie = Se.index;
          return Ie < ne ? (I.flags |= zt, ne) : Ie;
        } else
          return I.flags |= zt, ne;
      }
      function v(I) {
        return e && I.alternate === null && (I.flags |= zt), I;
      }
      function R(I, ne, Y, Se) {
        if (ne === null || ne.tag !== de) {
          var Ie = Pm(Y, I.mode, Se);
          return Ie.return = I, Ie;
        } else {
          var Be = c(ne, Y);
          return Be.return = I, Be;
        }
      }
      function z(I, ne, Y, Se) {
        var Ie = Y.type;
        if (Ie === Fn)
          return L(I, ne, Y.props.children, Se, Y.key);
        if (ne !== null && (ne.elementType === Ie || // Keep this check inline so it only runs on the false path:
        Xg(ne, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ie == "object" && Ie !== null && Ie.$$typeof === Bt && Jv(Ie) === ne.type)) {
          var Be = c(ne, Y.props);
          return Be.ref = af(I, ne, Y), Be.return = I, Be._debugSource = Y._source, Be._debugOwner = Y._owner, Be;
        }
        var Nt = Hm(Y, I.mode, Se);
        return Nt.ref = af(I, ne, Y), Nt.return = I, Nt;
      }
      function A(I, ne, Y, Se) {
        if (ne === null || ne.tag !== ze || ne.stateNode.containerInfo !== Y.containerInfo || ne.stateNode.implementation !== Y.implementation) {
          var Ie = jm(Y, I.mode, Se);
          return Ie.return = I, Ie;
        } else {
          var Be = c(ne, Y.children || []);
          return Be.return = I, Be;
        }
      }
      function L(I, ne, Y, Se, Ie) {
        if (ne === null || ne.tag !== Ue) {
          var Be = Jl(Y, I.mode, Se, Ie);
          return Be.return = I, Be;
        } else {
          var Nt = c(ne, Y);
          return Nt.return = I, Nt;
        }
      }
      function V(I, ne, Y) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var Se = Pm("" + ne, I.mode, Y);
          return Se.return = I, Se;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case nr: {
              var Ie = Hm(ne, I.mode, Y);
              return Ie.ref = af(I, null, ne), Ie.return = I, Ie;
            }
            case qt: {
              var Be = jm(ne, I.mode, Y);
              return Be.return = I, Be;
            }
            case Bt: {
              var Nt = ne._payload, Kt = ne._init;
              return V(I, Kt(Nt), Y);
            }
          }
          if (Jt(ne) || le(ne)) {
            var dn = Jl(ne, I.mode, Y, null);
            return dn.return = I, dn;
          }
          Sd(I, ne);
        }
        return typeof ne == "function" && _d(I), null;
      }
      function Z(I, ne, Y, Se) {
        var Ie = ne !== null ? ne.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return Ie !== null ? null : R(I, ne, "" + Y, Se);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case nr:
              return Y.key === Ie ? z(I, ne, Y, Se) : null;
            case qt:
              return Y.key === Ie ? A(I, ne, Y, Se) : null;
            case Bt: {
              var Be = Y._payload, Nt = Y._init;
              return Z(I, ne, Nt(Be), Se);
            }
          }
          if (Jt(Y) || le(Y))
            return Ie !== null ? null : L(I, ne, Y, Se, null);
          Sd(I, Y);
        }
        return typeof Y == "function" && _d(I), null;
      }
      function te(I, ne, Y, Se, Ie) {
        if (typeof Se == "string" && Se !== "" || typeof Se == "number") {
          var Be = I.get(Y) || null;
          return R(ne, Be, "" + Se, Ie);
        }
        if (typeof Se == "object" && Se !== null) {
          switch (Se.$$typeof) {
            case nr: {
              var Nt = I.get(Se.key === null ? Y : Se.key) || null;
              return z(ne, Nt, Se, Ie);
            }
            case qt: {
              var Kt = I.get(Se.key === null ? Y : Se.key) || null;
              return A(ne, Kt, Se, Ie);
            }
            case Bt: {
              var dn = Se._payload, $t = Se._init;
              return te(I, ne, Y, $t(dn), Ie);
            }
          }
          if (Jt(Se) || le(Se)) {
            var Dn = I.get(Y) || null;
            return L(ne, Dn, Se, Ie, null);
          }
          Sd(ne, Se);
        }
        return typeof Se == "function" && _d(ne), null;
      }
      function fe(I, ne, Y) {
        {
          if (typeof I != "object" || I === null)
            return ne;
          switch (I.$$typeof) {
            case nr:
            case qt:
              Xv(I, Y);
              var Se = I.key;
              if (typeof Se != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(Se);
                break;
              }
              if (!ne.has(Se)) {
                ne.add(Se);
                break;
              }
              x("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Se);
              break;
            case Bt: {
              var Ie = I._payload, Be = I._init;
              fe(Be(Ie), ne, Y);
              break;
            }
          }
        }
        return ne;
      }
      function ye(I, ne, Y, Se) {
        for (var Ie = null, Be = 0; Be < Y.length; Be++) {
          var Nt = Y[Be];
          Ie = fe(Nt, Ie, I);
        }
        for (var Kt = null, dn = null, $t = ne, Dn = 0, Wt = 0, Mt = null; $t !== null && Wt < Y.length; Wt++) {
          $t.index > Wt ? (Mt = $t, $t = null) : Mt = $t.sibling;
          var Jn = Z(I, $t, Y[Wt], Se);
          if (Jn === null) {
            $t === null && ($t = Mt);
            break;
          }
          e && $t && Jn.alternate === null && t(I, $t), Dn = d(Jn, Dn, Wt), dn === null ? Kt = Jn : dn.sibling = Jn, dn = Jn, $t = Mt;
        }
        if (Wt === Y.length) {
          if (a(I, $t), Hr()) {
            var An = Wt;
            Hu(I, An);
          }
          return Kt;
        }
        if ($t === null) {
          for (; Wt < Y.length; Wt++) {
            var xa = V(I, Y[Wt], Se);
            xa !== null && (Dn = d(xa, Dn, Wt), dn === null ? Kt = xa : dn.sibling = xa, dn = xa);
          }
          if (Hr()) {
            var Dr = Wt;
            Hu(I, Dr);
          }
          return Kt;
        }
        for (var Wi = l(I, $t); Wt < Y.length; Wt++) {
          var qi = te(Wi, I, Wt, Y[Wt], Se);
          qi !== null && (e && qi.alternate !== null && Wi.delete(qi.key === null ? Wt : qi.key), Dn = d(qi, Dn, Wt), dn === null ? Kt = qi : dn.sibling = qi, dn = qi);
        }
        if (e && Wi.forEach(function(rc) {
          return t(I, rc);
        }), Hr()) {
          var ps = Wt;
          Hu(I, ps);
        }
        return Kt;
      }
      function Xe(I, ne, Y, Se) {
        var Ie = le(Y);
        if (typeof Ie != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (pp || x("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), pp = !0), Y.entries === Ie && (hp || x("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), hp = !0);
          var Be = Ie.call(Y);
          if (Be)
            for (var Nt = null, Kt = Be.next(); !Kt.done; Kt = Be.next()) {
              var dn = Kt.value;
              Nt = fe(dn, Nt, I);
            }
        }
        var $t = Ie.call(Y);
        if ($t == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Dn = null, Wt = null, Mt = ne, Jn = 0, An = 0, xa = null, Dr = $t.next(); Mt !== null && !Dr.done; An++, Dr = $t.next()) {
          Mt.index > An ? (xa = Mt, Mt = null) : xa = Mt.sibling;
          var Wi = Z(I, Mt, Dr.value, Se);
          if (Wi === null) {
            Mt === null && (Mt = xa);
            break;
          }
          e && Mt && Wi.alternate === null && t(I, Mt), Jn = d(Wi, Jn, An), Wt === null ? Dn = Wi : Wt.sibling = Wi, Wt = Wi, Mt = xa;
        }
        if (Dr.done) {
          if (a(I, Mt), Hr()) {
            var qi = An;
            Hu(I, qi);
          }
          return Dn;
        }
        if (Mt === null) {
          for (; !Dr.done; An++, Dr = $t.next()) {
            var ps = V(I, Dr.value, Se);
            ps !== null && (Jn = d(ps, Jn, An), Wt === null ? Dn = ps : Wt.sibling = ps, Wt = ps);
          }
          if (Hr()) {
            var rc = An;
            Hu(I, rc);
          }
          return Dn;
        }
        for (var ic = l(I, Mt); !Dr.done; An++, Dr = $t.next()) {
          var Ii = te(ic, I, An, Dr.value, Se);
          Ii !== null && (e && Ii.alternate !== null && ic.delete(Ii.key === null ? An : Ii.key), Jn = d(Ii, Jn, An), Wt === null ? Dn = Ii : Wt.sibling = Ii, Wt = Ii);
        }
        if (e && ic.forEach(function(Im) {
          return t(I, Im);
        }), Hr()) {
          var Xu = An;
          Hu(I, Xu);
        }
        return Dn;
      }
      function yt(I, ne, Y, Se) {
        if (ne !== null && ne.tag === de) {
          a(I, ne.sibling);
          var Ie = c(ne, Y);
          return Ie.return = I, Ie;
        }
        a(I, ne);
        var Be = Pm(Y, I.mode, Se);
        return Be.return = I, Be;
      }
      function nt(I, ne, Y, Se) {
        for (var Ie = Y.key, Be = ne; Be !== null; ) {
          if (Be.key === Ie) {
            var Nt = Y.type;
            if (Nt === Fn) {
              if (Be.tag === Ue) {
                a(I, Be.sibling);
                var Kt = c(Be, Y.props.children);
                return Kt.return = I, Kt._debugSource = Y._source, Kt._debugOwner = Y._owner, Kt;
              }
            } else if (Be.elementType === Nt || // Keep this check inline so it only runs on the false path:
            Xg(Be, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Nt == "object" && Nt !== null && Nt.$$typeof === Bt && Jv(Nt) === Be.type) {
              a(I, Be.sibling);
              var dn = c(Be, Y.props);
              return dn.ref = af(I, Be, Y), dn.return = I, dn._debugSource = Y._source, dn._debugOwner = Y._owner, dn;
            }
            a(I, Be);
            break;
          } else
            t(I, Be);
          Be = Be.sibling;
        }
        if (Y.type === Fn) {
          var $t = Jl(Y.props.children, I.mode, Se, Y.key);
          return $t.return = I, $t;
        } else {
          var Dn = Hm(Y, I.mode, Se);
          return Dn.ref = af(I, ne, Y), Dn.return = I, Dn;
        }
      }
      function mn(I, ne, Y, Se) {
        for (var Ie = Y.key, Be = ne; Be !== null; ) {
          if (Be.key === Ie)
            if (Be.tag === ze && Be.stateNode.containerInfo === Y.containerInfo && Be.stateNode.implementation === Y.implementation) {
              a(I, Be.sibling);
              var Nt = c(Be, Y.children || []);
              return Nt.return = I, Nt;
            } else {
              a(I, Be);
              break;
            }
          else
            t(I, Be);
          Be = Be.sibling;
        }
        var Kt = jm(Y, I.mode, Se);
        return Kt.return = I, Kt;
      }
      function vn(I, ne, Y, Se) {
        var Ie = typeof Y == "object" && Y !== null && Y.type === Fn && Y.key === null;
        if (Ie && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case nr:
              return v(nt(I, ne, Y, Se));
            case qt:
              return v(mn(I, ne, Y, Se));
            case Bt: {
              var Be = Y._payload, Nt = Y._init;
              return vn(I, ne, Nt(Be), Se);
            }
          }
          if (Jt(Y))
            return ye(I, ne, Y, Se);
          if (le(Y))
            return Xe(I, ne, Y, Se);
          Sd(I, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? v(yt(I, ne, "" + Y, Se)) : (typeof Y == "function" && _d(I), a(I, ne));
      }
      return vn;
    }
    var Vo = Zv(!0), Kv = Zv(!1);
    function aS(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = Gu(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = Gu(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function sS(e, t) {
      for (var a = e.child; a !== null; )
        X_(a, t), a = a.sibling;
    }
    var sf = {}, Vl = na(sf), lf = na(sf), Ed = na(sf);
    function Rd(e) {
      if (e === sf)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function gp() {
      var e = Rd(Ed.current);
      return e;
    }
    function xp(e, t) {
      tn(Ed, t, e), tn(lf, e, e), tn(Vl, sf, e);
      var a = Ia(t);
      Wn(Vl, e), tn(Vl, a, e);
    }
    function Yo(e) {
      Wn(Vl, e), Wn(lf, e), Wn(Ed, e);
    }
    function uf() {
      var e = Rd(Vl.current);
      return e;
    }
    function $v(e) {
      var t = Rd(Ed.current), a = Rd(Vl.current), l = vr(a, e.type, t);
      a !== l && (tn(lf, e, e), tn(Vl, l, e));
    }
    function Sp(e) {
      lf.current === e && (Wn(Vl, e), Wn(lf, e));
    }
    var lS = 0, ey = 1, ty = 1, of = 2, Ua = na(lS);
    function _p(e, t) {
      return (e & t) !== 0;
    }
    function Wo(e) {
      return e & ey;
    }
    function Ep(e, t) {
      return e & ey | t;
    }
    function uS(e, t) {
      return e | t;
    }
    function Yl(e, t) {
      tn(Ua, t, e);
    }
    function qo(e) {
      Wn(Ua, e);
    }
    function oS(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Td(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || At(l) || Vt(l))
              return t;
          }
        } else if (t.tag === Ve && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var c = (t.flags & Et) !== pe;
          if (c)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var us = (
      /*   */
      0
    ), Mn = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), Xn = (
      /*    */
      4
    ), Cr = (
      /*   */
      8
    ), Rp = [];
    function Tp() {
      for (var e = 0; e < Rp.length; e++) {
        var t = Rp[e];
        Ni ? t._workInProgressVersionPrimary = null : t._workInProgressVersionSecondary = null;
      }
      Rp.length = 0;
    }
    function cS(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var Le = m.ReactCurrentDispatcher, Ri = m.ReactCurrentBatchConfig, bp, Io;
    bp = /* @__PURE__ */ new Set();
    var Qo = oe, un = null, Pr = null, or = null, bd = !1, cf = !1, ff = 0, fS = 0, dS = 25, re = null, pa = null, ql = -1, Cp = !1;
    function Qt() {
      {
        var e = re;
        pa === null ? pa = [e] : pa.push(e);
      }
    }
    function be() {
      {
        var e = re;
        pa !== null && (ql++, pa[ql] !== e && hS(e));
      }
    }
    function Go(e) {
      e != null && !Jt(e) && x("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function hS(e) {
      {
        var t = Ye(un);
        if (!bp.has(t) && (bp.add(t), pa !== null)) {
          for (var a = "", l = 30, c = 0; c <= ql; c++) {
            for (var d = pa[c], v = c === ql ? e : d, R = c + 1 + ". " + d; R.length < l; )
              R += " ";
            R += v + `
`, a += R;
          }
          x(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function jr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Mp(e, t) {
      if (Cp)
        return !1;
      if (t === null)
        return x("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && x(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ti(e[a], t[a]))
          return !1;
      return !0;
    }
    function Xo(e, t, a, l, c, d) {
      Qo = d, un = t, pa = e !== null ? e._debugHookTypes : null, ql = -1, Cp = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = oe, e !== null && e.memoizedState !== null ? Le.current = Ry : pa !== null ? Le.current = Ey : Le.current = _y;
      var v = a(l, c);
      if (cf) {
        var R = 0;
        do {
          if (cf = !1, ff = 0, R >= dS)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          R += 1, Cp = !1, Pr = null, or = null, t.updateQueue = null, ql = -1, Le.current = Ty, v = a(l, c);
        } while (cf);
      }
      Le.current = Bd, t._debugHookTypes = pa;
      var z = Pr !== null && Pr.next !== null;
      if (Qo = oe, un = null, Pr = null, or = null, re = null, pa = null, ql = -1, e !== null && (e.flags & Sn) !== (t.flags & Sn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Zt) !== ot && x("Internal React error: Expected static flag was missing. Please notify the React team."), bd = !1, z)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Jo() {
      var e = ff !== 0;
      return ff = 0, e;
    }
    function ny(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & yi) !== ot ? t.flags &= ~(yn | st | ir | ht) : t.flags &= ~(ir | ht), e.lanes = Os(e.lanes, a);
    }
    function ry() {
      if (Le.current = Bd, bd) {
        for (var e = un.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        bd = !1;
      }
      Qo = oe, un = null, Pr = null, or = null, pa = null, ql = -1, re = null, my = !1, cf = !1, ff = 0;
    }
    function Qs() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? un.memoizedState = or = e : or = or.next = e, or;
    }
    function os() {
      var e;
      if (Pr === null) {
        var t = un.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Pr.next;
      var a;
      if (or === null ? a = un.memoizedState : a = or.next, a !== null)
        or = a, a = or.next, Pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Pr = e;
        var l = {
          memoizedState: Pr.memoizedState,
          baseState: Pr.baseState,
          baseQueue: Pr.baseQueue,
          queue: Pr.queue,
          next: null
        };
        or === null ? un.memoizedState = or = l : or = or.next = l;
      }
      return or;
    }
    function iy() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zp(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function wp(e, t, a) {
      var l = Qs(), c;
      a !== void 0 ? c = a(t) : c = t, l.memoizedState = l.baseState = c;
      var d = {
        pending: null,
        interleaved: null,
        lanes: oe,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      };
      l.queue = d;
      var v = d.dispatch = yS.bind(null, un, d);
      return [l.memoizedState, v];
    }
    function Dp(e, t, a) {
      var l = os(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var d = Pr, v = d.baseQueue, R = c.pending;
      if (R !== null) {
        if (v !== null) {
          var z = v.next, A = R.next;
          v.next = A, R.next = z;
        }
        d.baseQueue !== v && x("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = R, c.pending = null;
      }
      if (v !== null) {
        var L = v.next, V = d.baseState, Z = null, te = null, fe = null, ye = L;
        do {
          var Xe = ye.lane;
          if (Ml(Qo, Xe)) {
            if (fe !== null) {
              var nt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                action: ye.action,
                hasEagerState: ye.hasEagerState,
                eagerState: ye.eagerState,
                next: null
              };
              fe = fe.next = nt;
            }
            if (ye.hasEagerState)
              V = ye.eagerState;
            else {
              var mn = ye.action;
              V = e(V, mn);
            }
          } else {
            var yt = {
              lane: Xe,
              action: ye.action,
              hasEagerState: ye.hasEagerState,
              eagerState: ye.eagerState,
              next: null
            };
            fe === null ? (te = fe = yt, Z = V) : fe = fe.next = yt, un.lanes = mt(un.lanes, Xe), Sh(Xe);
          }
          ye = ye.next;
        } while (ye !== null && ye !== L);
        fe === null ? Z = V : fe.next = te, ti(V, l.memoizedState) || Zd(), l.memoizedState = V, l.baseState = Z, l.baseQueue = fe, c.lastRenderedState = V;
      }
      var vn = c.interleaved;
      if (vn !== null) {
        var I = vn;
        do {
          var ne = I.lane;
          un.lanes = mt(un.lanes, ne), Sh(ne), I = I.next;
        } while (I !== vn);
      } else
        v === null && (c.lanes = oe);
      var Y = c.dispatch;
      return [l.memoizedState, Y];
    }
    function Ap(e, t, a) {
      var l = os(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var d = c.dispatch, v = c.pending, R = l.memoizedState;
      if (v !== null) {
        c.pending = null;
        var z = v.next, A = z;
        do {
          var L = A.action;
          R = e(R, L), A = A.next;
        } while (A !== z);
        ti(R, l.memoizedState) || Zd(), l.memoizedState = R, l.baseQueue === null && (l.baseState = R), c.lastRenderedState = R;
      }
      return [R, d];
    }
    function PR(e, t, a) {
    }
    function jR(e, t, a) {
    }
    function Np(e, t, a) {
      var l = un, c = Qs(), d, v = Hr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Io || d !== a() && (x("The result of getServerSnapshot should be cached to avoid an infinite loop"), Io = !0);
      } else {
        if (d = t(), !Io) {
          var R = t();
          ti(d, R) || (x("The result of getSnapshot should be cached to avoid an infinite loop"), Io = !0);
        }
        var z = vh();
        if (z === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fs(z, Qo) || ay(l, t, d);
      }
      c.memoizedState = d;
      var A = {
        value: d,
        getSnapshot: t
      };
      return c.queue = A, mf(ly.bind(null, l, A, e), [e]), l.flags |= ir, hf(Mn | Cr, sy.bind(null, l, A, d, t), void 0, null), d;
    }
    function Cd(e, t, a) {
      var l = un, c = os(), d = t();
      if (!Io) {
        var v = t();
        ti(d, v) || (x("The result of getSnapshot should be cached to avoid an infinite loop"), Io = !0);
      }
      var R = c.memoizedState, z = !ti(R, d);
      z && (c.memoizedState = d, Zd());
      var A = c.queue;
      if (Vu(ly.bind(null, l, A, e), [e]), A.getSnapshot !== t || z || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      or !== null && or.memoizedState.tag & Mn) {
        l.flags |= ir, hf(Mn | Cr, sy.bind(null, l, A, d, t), void 0, null);
        var L = vh();
        if (L === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fs(L, Qo) || ay(l, t, d);
      }
      return d;
    }
    function ay(e, t, a) {
      e.flags |= qa;
      var l = {
        getSnapshot: t,
        value: a
      }, c = un.updateQueue;
      if (c === null)
        c = iy(), un.updateQueue = c, c.stores = [l];
      else {
        var d = c.stores;
        d === null ? c.stores = [l] : d.push(l);
      }
    }
    function sy(e, t, a, l) {
      t.value = a, t.getSnapshot = l, uy(t) && oy(e);
    }
    function ly(e, t, a) {
      var l = function() {
        uy(t) && oy(e);
      };
      return a(l);
    }
    function uy(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !ti(a, l);
      } catch {
        return !0;
      }
    }
    function oy(e) {
      dr(e, Ct, ln);
    }
    function df(e) {
      var t = Qs();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: oe,
        dispatch: null,
        lastRenderedReducer: zp,
        lastRenderedState: e
      };
      t.queue = a;
      var l = a.dispatch = gS.bind(null, un, a);
      return [t.memoizedState, l];
    }
    function Md(e) {
      return Dp(zp);
    }
    function zd(e) {
      return Ap(zp);
    }
    function hf(e, t, a, l) {
      var c = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, d = un.updateQueue;
      if (d === null)
        d = iy(), un.updateQueue = d, d.lastEffect = c.next = c;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = c.next = c;
        else {
          var R = v.next;
          v.next = c, c.next = R, d.lastEffect = c;
        }
      }
      return c;
    }
    function Fp(e) {
      var t = Qs();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function wd(e) {
      var t = os();
      return t.memoizedState;
    }
    function pf(e, t, a, l) {
      var c = Qs(), d = l === void 0 ? null : l;
      un.flags |= e, c.memoizedState = hf(Mn | t, a, void 0, d);
    }
    function Dd(e, t, a, l) {
      var c = os(), d = l === void 0 ? null : l, v = void 0;
      if (Pr !== null) {
        var R = Pr.memoizedState;
        if (v = R.destroy, d !== null) {
          var z = R.deps;
          if (Mp(d, z)) {
            c.memoizedState = hf(t, a, v, d);
            return;
          }
        }
      }
      un.flags |= e, c.memoizedState = hf(Mn | t, a, v, d);
    }
    function mf(e, t) {
      return (un.mode & yi) !== ot ? pf(yn | ir | pt, Cr, e, t) : pf(ir | pt, Cr, e, t);
    }
    function Vu(e, t) {
      return Dd(ir, Cr, e, t);
    }
    function Op(e, t) {
      return pf(ht, Wl, e, t);
    }
    function Ad(e, t) {
      return Dd(ht, Wl, e, t);
    }
    function Up(e, t) {
      var a = ht;
      return a |= Tt, (un.mode & yi) !== ot && (a |= st), pf(a, Xn, e, t);
    }
    function Nd(e, t) {
      return Dd(ht, Xn, e, t);
    }
    function cy(e, t) {
      if (typeof t == "function") {
        var a = t, l = e();
        return a(l), function() {
          a(null);
        };
      } else if (t != null) {
        var c = t;
        c.hasOwnProperty("current") || x("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(c).join(", ") + "}");
        var d = e();
        return c.current = d, function() {
          c.current = null;
        };
      }
    }
    function Lp(e, t, a) {
      typeof t != "function" && x("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null, c = ht;
      return c |= Tt, (un.mode & yi) !== ot && (c |= st), pf(c, Xn, cy.bind(null, t, e), l);
    }
    function Fd(e, t, a) {
      typeof t != "function" && x("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return Dd(ht, Xn, cy.bind(null, t, e), l);
    }
    function pS(e, t) {
    }
    var Od = pS;
    function kp(e, t) {
      var a = Qs(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function Ud(e, t) {
      var a = os(), l = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && l !== null) {
        var d = c[1];
        if (Mp(l, d))
          return c[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function Bp(e, t) {
      var a = Qs(), l = t === void 0 ? null : t, c = e();
      return a.memoizedState = [c, l], c;
    }
    function Ld(e, t) {
      var a = os(), l = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && l !== null) {
        var d = c[1];
        if (Mp(l, d))
          return c[0];
      }
      var v = e();
      return a.memoizedState = [v, l], v;
    }
    function Hp(e) {
      var t = df(e), a = t[0], l = t[1];
      return mf(function() {
        var c = Ri.transition;
        Ri.transition = {};
        try {
          l(e);
        } finally {
          Ri.transition = c;
        }
      }, [e]), a;
    }
    function fy(e) {
      var t = Md(), a = t[0], l = t[1];
      return Vu(function() {
        var c = Ri.transition;
        Ri.transition = {};
        try {
          l(e);
        } finally {
          Ri.transition = c;
        }
      }, [e]), a;
    }
    function dy(e) {
      var t = zd(), a = t[0], l = t[1];
      return Vu(function() {
        var c = Ri.transition;
        Ri.transition = {};
        try {
          l(e);
        } finally {
          Ri.transition = c;
        }
      }, [e]), a;
    }
    function mS(e, t, a) {
      var l = $r();
      Qn(Ao(l, wl)), e(!0);
      var c = Ri.transition;
      Ri.transition = {};
      var d = Ri.transition;
      Ri.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Qn(l), Ri.transition = c, c === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function Pp() {
      var e = df(!1), t = e[0], a = e[1], l = mS.bind(null, a), c = Qs();
      return c.memoizedState = l, [t, l];
    }
    function hy() {
      var e = Md(), t = e[0], a = os(), l = a.memoizedState;
      return [t, l];
    }
    function py() {
      var e = zd(), t = e[0], a = os(), l = a.memoizedState;
      return [t, l];
    }
    var my = !1;
    function vS() {
      return my;
    }
    function jp() {
      var e = Qs(), t = vh(), a = t.identifierPrefix, l;
      if (Hr()) {
        var c = Ix();
        l = ":" + a + "R" + c;
        var d = ff++;
        d > 0 && (l += "H" + d.toString(32)), l += ":";
      } else {
        var v = fS++;
        l = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function kd() {
      var e = os(), t = e.memoizedState;
      return t;
    }
    function yS(e, t, a) {
      typeof arguments[3] == "function" && x("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gl(e), c = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vy(e))
        yy(t, c);
      else {
        gy(e, t, c);
        var d = ii(), v = dr(e, l, d);
        v !== null && xy(v, t, l);
      }
      Sy(e, l);
    }
    function gS(e, t, a) {
      typeof arguments[3] == "function" && x("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gl(e), c = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vy(e))
        yy(t, c);
      else {
        gy(e, t, c);
        var d = e.alternate;
        if (e.lanes === oe && (d === null || d.lanes === oe)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var R;
            R = Le.current, Le.current = La;
            try {
              var z = t.lastRenderedState, A = v(z, a);
              if (c.hasEagerState = !0, c.eagerState = A, ti(A, z))
                return;
            } catch {
            } finally {
              Le.current = R;
            }
          }
        }
        var L = ii(), V = dr(e, l, L);
        V !== null && xy(V, t, l);
      }
      Sy(e, l);
    }
    function vy(e) {
      var t = e.alternate;
      return e === un || t !== null && t === un;
    }
    function yy(e, t) {
      cf = bd = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function gy(e, t, a, l) {
      if (Ng(e)) {
        var c = t.interleaved;
        c === null ? (a.next = a, Ze(t)) : (a.next = c.next, c.next = a), t.interleaved = a;
      } else {
        var d = t.pending;
        d === null ? a.next = a : (a.next = d.next, d.next = a), t.pending = a;
      }
    }
    function xy(e, t, a) {
      if (zo(a)) {
        var l = t.lanes;
        l = es(l, e.pendingLanes);
        var c = mt(l, a);
        t.lanes = c, ks(e, c);
      }
    }
    function Sy(e, t, a) {
      Ul(e, t);
    }
    var Bd = {
      readContext: Ee,
      useCallback: jr,
      useContext: jr,
      useEffect: jr,
      useImperativeHandle: jr,
      useInsertionEffect: jr,
      useLayoutEffect: jr,
      useMemo: jr,
      useReducer: jr,
      useRef: jr,
      useState: jr,
      useDebugValue: jr,
      useDeferredValue: jr,
      useTransition: jr,
      useMutableSource: jr,
      useSyncExternalStore: jr,
      useId: jr,
      unstable_isNewReconciler: k
    }, _y = null, Ey = null, Ry = null, Ty = null, cs = null, La = null, Hd = null;
    {
      var Vp = function() {
        x("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ct = function() {
        x("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      _y = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Qt(), Go(t), kp(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Qt(), Ee(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Qt(), Go(t), mf(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Qt(), Go(a), Lp(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Qt(), Go(t), Op(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Qt(), Go(t), Up(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Qt(), Go(t);
          var a = Le.current;
          Le.current = cs;
          try {
            return Bp(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Qt();
          var l = Le.current;
          Le.current = cs;
          try {
            return wp(e, t, a);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", Qt(), Fp(e);
        },
        useState: function(e) {
          re = "useState", Qt();
          var t = Le.current;
          Le.current = cs;
          try {
            return df(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Qt(), Hp(e);
        },
        useTransition: function() {
          return re = "useTransition", Qt(), Pp();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Qt(), Np(e, t, a);
        },
        useId: function() {
          return re = "useId", Qt(), jp();
        },
        unstable_isNewReconciler: k
      }, Ey = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", be(), kp(e, t);
        },
        useContext: function(e) {
          return re = "useContext", be(), Ee(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", be(), mf(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", be(), Lp(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", be(), Op(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", be(), Up(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", be();
          var a = Le.current;
          Le.current = cs;
          try {
            return Bp(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", be();
          var l = Le.current;
          Le.current = cs;
          try {
            return wp(e, t, a);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", be(), Fp(e);
        },
        useState: function(e) {
          re = "useState", be();
          var t = Le.current;
          Le.current = cs;
          try {
            return df(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", be(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", be(), Hp(e);
        },
        useTransition: function() {
          return re = "useTransition", be(), Pp();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", be(), Np(e, t, a);
        },
        useId: function() {
          return re = "useId", be(), jp();
        },
        unstable_isNewReconciler: k
      }, Ry = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", be(), Ud(e, t);
        },
        useContext: function(e) {
          return re = "useContext", be(), Ee(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", be(), Vu(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", be(), Fd(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", be(), Ad(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", be(), Nd(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", be();
          var a = Le.current;
          Le.current = La;
          try {
            return Ld(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", be();
          var l = Le.current;
          Le.current = La;
          try {
            return Dp(e, t, a);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", be(), wd();
        },
        useState: function(e) {
          re = "useState", be();
          var t = Le.current;
          Le.current = La;
          try {
            return Md(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", be(), Od();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", be(), fy(e);
        },
        useTransition: function() {
          return re = "useTransition", be(), hy();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", be(), Cd(e, t);
        },
        useId: function() {
          return re = "useId", be(), kd();
        },
        unstable_isNewReconciler: k
      }, Ty = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", be(), Ud(e, t);
        },
        useContext: function(e) {
          return re = "useContext", be(), Ee(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", be(), Vu(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", be(), Fd(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", be(), Ad(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", be(), Nd(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", be();
          var a = Le.current;
          Le.current = Hd;
          try {
            return Ld(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", be();
          var l = Le.current;
          Le.current = Hd;
          try {
            return Ap(e, t, a);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", be(), wd();
        },
        useState: function(e) {
          re = "useState", be();
          var t = Le.current;
          Le.current = Hd;
          try {
            return zd(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", be(), Od();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", be(), dy(e);
        },
        useTransition: function() {
          return re = "useTransition", be(), py();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", be(), Cd(e, t);
        },
        useId: function() {
          return re = "useId", be(), kd();
        },
        unstable_isNewReconciler: k
      }, cs = {
        readContext: function(e) {
          return Vp(), Ee(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ct(), Qt(), kp(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ct(), Qt(), Ee(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ct(), Qt(), mf(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", ct(), Qt(), Lp(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ct(), Qt(), Op(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ct(), Qt(), Up(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ct(), Qt();
          var a = Le.current;
          Le.current = cs;
          try {
            return Bp(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", ct(), Qt();
          var l = Le.current;
          Le.current = cs;
          try {
            return wp(e, t, a);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", ct(), Qt(), Fp(e);
        },
        useState: function(e) {
          re = "useState", ct(), Qt();
          var t = Le.current;
          Le.current = cs;
          try {
            return df(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ct(), Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ct(), Qt(), Hp(e);
        },
        useTransition: function() {
          return re = "useTransition", ct(), Qt(), Pp();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", ct(), Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", ct(), Qt(), Np(e, t, a);
        },
        useId: function() {
          return re = "useId", ct(), Qt(), jp();
        },
        unstable_isNewReconciler: k
      }, La = {
        readContext: function(e) {
          return Vp(), Ee(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ct(), be(), Ud(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ct(), be(), Ee(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ct(), be(), Vu(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", ct(), be(), Fd(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ct(), be(), Ad(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ct(), be(), Nd(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ct(), be();
          var a = Le.current;
          Le.current = La;
          try {
            return Ld(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", ct(), be();
          var l = Le.current;
          Le.current = La;
          try {
            return Dp(e, t, a);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", ct(), be(), wd();
        },
        useState: function(e) {
          re = "useState", ct(), be();
          var t = Le.current;
          Le.current = La;
          try {
            return Md(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ct(), be(), Od();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ct(), be(), fy(e);
        },
        useTransition: function() {
          return re = "useTransition", ct(), be(), hy();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", ct(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", ct(), be(), Cd(e, t);
        },
        useId: function() {
          return re = "useId", ct(), be(), kd();
        },
        unstable_isNewReconciler: k
      }, Hd = {
        readContext: function(e) {
          return Vp(), Ee(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ct(), be(), Ud(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ct(), be(), Ee(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ct(), be(), Vu(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", ct(), be(), Fd(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ct(), be(), Ad(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ct(), be(), Nd(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ct(), be();
          var a = Le.current;
          Le.current = La;
          try {
            return Ld(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", ct(), be();
          var l = Le.current;
          Le.current = La;
          try {
            return Ap(e, t, a);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", ct(), be(), wd();
        },
        useState: function(e) {
          re = "useState", ct(), be();
          var t = Le.current;
          Le.current = La;
          try {
            return zd(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ct(), be(), Od();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ct(), be(), dy(e);
        },
        useTransition: function() {
          return re = "useTransition", ct(), be(), py();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", ct(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", ct(), be(), Cd(e, t);
        },
        useId: function() {
          return re = "useId", ct(), be(), kd();
        },
        unstable_isNewReconciler: k
      };
    }
    var Il = h.unstable_now, by = 0, Pd = -1, vf = -1, jd = -1, Yp = !1, Vd = !1;
    function Cy() {
      return Yp;
    }
    function xS() {
      Vd = !0;
    }
    function SS() {
      Yp = !1, Vd = !1;
    }
    function _S() {
      Yp = Vd, Vd = !1;
    }
    function My() {
      return by;
    }
    function zy() {
      by = Il();
    }
    function Wp(e) {
      vf = Il(), e.actualStartTime < 0 && (e.actualStartTime = Il());
    }
    function wy(e) {
      vf = -1;
    }
    function Yd(e, t) {
      if (vf >= 0) {
        var a = Il() - vf;
        e.actualDuration += a, t && (e.selfBaseDuration = a), vf = -1;
      }
    }
    function ma(e) {
      if (Pd >= 0) {
        var t = Il() - Pd;
        Pd = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case xe:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case ie:
              var c = a.stateNode;
              c.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function qp(e) {
      if (jd >= 0) {
        var t = Il() - jd;
        jd = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case xe:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case ie:
              var c = a.stateNode;
              c !== null && (c.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function va() {
      Pd = Il();
    }
    function Ip() {
      jd = Il();
    }
    function Qp(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Wd(e, t) {
      return {
        value: e,
        source: t,
        stack: hd(t)
      };
    }
    function ES(e, t) {
      return !0;
    }
    function Gp(e, t) {
      try {
        var a = ES(e, t);
        if (a === !1)
          return;
        var l = t.value, c = t.source, d = t.stack, v = d !== null ? d : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === ce)
            return;
          console.error(l);
        }
        var R = c ? Ye(c) : null, z = R ? "The above error occurred in the <" + R + "> component:" : "The above error occurred in one of your React components:", A;
        if (e.tag === xe)
          A = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var L = Ye(e) || "Anonymous";
          A = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + L + ".");
        }
        var V = z + `
` + v + `

` + ("" + A);
        console.error(V);
      } catch (Z) {
        setTimeout(function() {
          throw Z;
        });
      }
    }
    var RS = typeof WeakMap == "function" ? WeakMap : Map;
    function Dy(e, t, a) {
      var l = et(ln, a);
      l.tag = W, l.payload = {
        element: null
      };
      var c = t.value;
      return l.callback = function() {
        w_(c), Gp(e, t);
      }, l;
    }
    function Xp(e, t, a) {
      var l = et(ln, a);
      l.tag = W;
      var c = e.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var d = t.value;
        l.payload = function() {
          return c(d);
        }, l.callback = function() {
          Jg(e), Gp(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        Jg(e), Gp(e, t), typeof c != "function" && M_(this);
        var z = t.value, A = t.stack;
        this.componentDidCatch(z, {
          componentStack: A !== null ? A : ""
        }), typeof c != "function" && (Rn(e.lanes, Ct) || x("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), l;
    }
    function Ay(e, t, a) {
      var l = e.pingCache, c;
      if (l === null ? (l = e.pingCache = new RS(), c = /* @__PURE__ */ new Set(), l.set(t, c)) : (c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c))), !c.has(a)) {
        c.add(a);
        var d = D_.bind(null, e, t, a);
        Ur && Nf(e, a), t.then(d, d);
      }
    }
    function TS(e, t, a, l) {
      var c = e.updateQueue;
      if (c === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        c.add(a);
    }
    function bS(e, t) {
      var a = e.tag;
      if ((e.mode & Zt) === ot && (a === ue || a === H || a === j)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Ny(e) {
      var t = e;
      do {
        if (t.tag === ee && oS(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Fy(e, t, a, l, c) {
      if ((e.mode & Zt) === ot) {
        if (e === t)
          e.flags |= ae;
        else {
          if (e.flags |= Et, a.flags |= ge, a.flags &= ~(_a | O), ci && F) {
            var d = e.alternate;
            if (d === null) {
              var v = e.child, R = v.child;
              if (R !== null) {
                var z = R.memoizedProps.children, A = He("hidden", z);
                R.pendingProps = A, R.memoizedProps = A;
              }
            }
          }
          if (a.tag === ce) {
            var L = a.alternate;
            if (L === null)
              a.tag = Pe;
            else {
              var V = et(ln, Ct);
              V.tag = Tr, St(a, V);
            }
          }
          a.lanes = mt(a.lanes, Ct);
        }
        return e;
      }
      return e.flags |= ae, e.lanes = c, e;
    }
    function CS(e, t, a, l, c) {
      if (a.flags |= O, Ur && Nf(e, c), l !== null && typeof l == "object" && typeof l.then == "function") {
        var d = l;
        bS(a);
        var v = Ny(t);
        if (v !== null) {
          v.flags &= ~_r, Fy(v, t, a, e, c), v.mode & Zt && Ay(e, d, c), TS(v, e, d);
          return;
        } else {
          if (!kc(c)) {
            Ay(e, d, c), zm();
            return;
          }
          var R = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = R;
        }
      } else if (Hr() && a.mode & Zt) {
        Zx();
        var z = Ny(t);
        if (z !== null) {
          (z.flags & ae) === pe && (z.flags |= _r), Fy(z, t, a, e, c), dp(l);
          return;
        }
      }
      x_(l), l = Wd(l, a);
      var A = t;
      do {
        switch (A.tag) {
          case xe: {
            var L = l;
            A.flags |= ae;
            var V = Cl(c);
            A.lanes = mt(A.lanes, V);
            var Z = Dy(A, L, V);
            Lt(A, Z);
            return;
          }
          case ce:
            var te = l, fe = A.type, ye = A.stateNode;
            if ((A.flags & Et) === pe && (typeof fe.getDerivedStateFromError == "function" || ye !== null && typeof ye.componentDidCatch == "function" && !jg(ye))) {
              A.flags |= ae;
              var Xe = Cl(c);
              A.lanes = mt(A.lanes, Xe);
              var yt = Xp(A, te, Xe);
              Lt(A, yt);
              return;
            }
            break;
        }
        A = A.return;
      } while (A !== null);
    }
    function MS() {
      return null;
    }
    function fs(e) {
      e.flags |= ht;
    }
    function Oy(e) {
      e.flags |= Ir, e.flags |= wt;
    }
    function Uy(e, t) {
      var a = e !== null && e.child === t.child;
      if (a)
        return !0;
      if ((t.flags & rr) !== pe)
        return !1;
      for (var l = t.child; l !== null; ) {
        if ((l.flags & en) !== pe || (l.subtreeFlags & en) !== pe)
          return !1;
        l = l.sibling;
      }
      return !0;
    }
    var yf, gf, qd, Id;
    if (Gr)
      yf = function(e, t, a, l) {
        for (var c = t.child; c !== null; ) {
          if (c.tag === Te || c.tag === de)
            ea(e, c.stateNode);
          else if (c.tag !== ze) {
            if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === t)
            return;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t)
              return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      }, gf = function(e, t) {
      }, qd = function(e, t, a, l, c) {
        var d = e.memoizedProps;
        if (d !== l) {
          var v = t.stateNode, R = uf(), z = Nr(v, a, d, l, c, R);
          t.updateQueue = z, z && fs(t);
        }
      }, Id = function(e, t, a, l) {
        a !== l && fs(t);
      };
    else if (ci) {
      yf = function(e, t, a, l) {
        for (var c = t.child; c !== null; ) {
          if (c.tag === Te) {
            var d = c.stateNode;
            if (a && l) {
              var v = c.memoizedProps, R = c.type;
              d = lt(d, R, v, c);
            }
            ea(e, d);
          } else if (c.tag === de) {
            var z = c.stateNode;
            if (a && l) {
              var A = c.memoizedProps;
              z = gt(z, A, c);
            }
            ea(e, z);
          } else if (c.tag !== ze) {
            if (c.tag === rt && c.memoizedState !== null) {
              var L = c.child;
              L !== null && (L.return = c), yf(e, c, !0, !0);
            } else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c = c, c === t)
            return;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t)
              return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      };
      var Ly = function(e, t, a, l) {
        for (var c = t.child; c !== null; ) {
          if (c.tag === Te) {
            var d = c.stateNode;
            if (a && l) {
              var v = c.memoizedProps, R = c.type;
              d = lt(d, R, v, c);
            }
            K(e, d);
          } else if (c.tag === de) {
            var z = c.stateNode;
            if (a && l) {
              var A = c.memoizedProps;
              z = gt(z, A, c);
            }
            K(e, z);
          } else if (c.tag !== ze) {
            if (c.tag === rt && c.memoizedState !== null) {
              var L = c.child;
              L !== null && (L.return = c), Ly(e, c, !0, !0);
            } else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c = c, c === t)
            return;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t)
              return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      };
      gf = function(e, t) {
        var a = t.stateNode, l = Uy(e, t);
        if (!l) {
          var c = a.containerInfo, d = q(c);
          Ly(d, t, !1, !1), a.pendingChildren = d, fs(t), ve(c, d);
        }
      }, qd = function(e, t, a, l, c) {
        var d = e.stateNode, v = e.memoizedProps, R = Uy(e, t);
        if (R && v === l) {
          t.stateNode = d;
          return;
        }
        var z = t.stateNode, A = uf(), L = null;
        if (v !== l && (L = Nr(z, a, v, l, c, A)), R && L === null) {
          t.stateNode = d;
          return;
        }
        var V = N(d, L, a, v, l, t, R, z);
        Ga(V, a, l, c, A) && fs(t), t.stateNode = V, R ? fs(t) : yf(V, t, !1, !1);
      }, Id = function(e, t, a, l) {
        if (a !== l) {
          var c = gp(), d = uf();
          t.stateNode = Ku(l, c, d, t), fs(t);
        } else
          t.stateNode = e.stateNode;
      };
    } else
      gf = function(e, t) {
      }, qd = function(e, t, a, l, c) {
      }, Id = function(e, t, a, l) {
      };
    function xf(e, t) {
      if (!Hr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, l = null; a !== null; )
              a.alternate !== null && (l = a), a = a.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var c = e.tail, d = null; c !== null; )
              c.alternate !== null && (d = c), c = c.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Mr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = oe, l = pe;
      if (t) {
        if ((e.mode & kt) !== ot) {
          for (var z = e.selfBaseDuration, A = e.child; A !== null; )
            a = mt(a, mt(A.lanes, A.childLanes)), l |= A.subtreeFlags & Sn, l |= A.flags & Sn, z += A.treeBaseDuration, A = A.sibling;
          e.treeBaseDuration = z;
        } else
          for (var L = e.child; L !== null; )
            a = mt(a, mt(L.lanes, L.childLanes)), l |= L.subtreeFlags & Sn, l |= L.flags & Sn, L.return = e, L = L.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & kt) !== ot) {
          for (var c = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = mt(a, mt(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, c += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = c, e.treeBaseDuration = d;
        } else
          for (var R = e.child; R !== null; )
            a = mt(a, mt(R.lanes, R.childLanes)), l |= R.subtreeFlags, l |= R.flags, R.return = e, R = R.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = a, t;
    }
    function ky(e, t, a) {
      var l = t.pendingProps;
      switch (lp(t), t.tag) {
        case Ke:
        case je:
        case j:
        case ue:
        case H:
        case Ue:
        case ft:
        case ie:
        case ut:
        case U:
          return Mr(t), null;
        case ce: {
          var c = t.type;
          return vi(c) && yl(t), Mr(t), null;
        }
        case xe: {
          var d = t.stateNode;
          if (Yo(t), xu(t), Tp(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = rf(t);
            if (v)
              fs(t);
            else if (e !== null) {
              var R = e.memoizedState;
              // Check if this is a client root
              (!R.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _r) !== pe) && (t.flags |= Er, Gv());
            }
          }
          return gf(e, t), Mr(t), null;
        }
        case Te: {
          Sp(t);
          var z = gp(), A = t.type;
          if (e !== null && t.stateNode != null)
            qd(e, t, A, l, z), e.ref !== t.ref && Oy(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Mr(t), null;
            }
            var L = uf(), V = rf(t);
            if (V)
              eS(t, z, L) && fs(t);
            else {
              var Z = Ss(A, l, z, L, t);
              yf(Z, t, !1, !1), t.stateNode = Z, Ga(Z, A, l, z, L) && fs(t);
            }
            t.ref !== null && Oy(t);
          }
          return Mr(t), null;
        }
        case de: {
          var te = l;
          if (e && t.stateNode != null) {
            var fe = e.memoizedProps;
            Id(e, t, fe, te);
          } else {
            if (typeof te != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ye = gp(), Xe = uf(), yt = rf(t);
            yt ? tS(t) && fs(t) : t.stateNode = Ku(te, ye, Xe, t);
          }
          return Mr(t), null;
        }
        case ee: {
          qo(t);
          var nt = t.memoizedState;
          {
            if (iS() && (t.mode & Zt) !== ot && (t.flags & Et) === pe)
              return Qv(t), jo(), t.flags |= _r | O | ae, t;
            if (nt !== null && nt.dehydrated !== null) {
              var mn = rf(t);
              if (e === null) {
                if (!mn)
                  throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (nS(t), Mr(t), (t.mode & kt) !== ot) {
                  var vn = nt !== null;
                  if (vn) {
                    var I = t.child;
                    I !== null && (t.treeBaseDuration -= I.treeBaseDuration);
                  }
                }
                return null;
              } else {
                if (jo(), (t.flags & Et) === pe && (t.memoizedState = null), t.flags |= ht, Mr(t), (t.mode & kt) !== ot) {
                  var ne = nt !== null;
                  if (ne) {
                    var Y = t.child;
                    Y !== null && (t.treeBaseDuration -= Y.treeBaseDuration);
                  }
                }
                return null;
              }
            }
            Gv();
          }
          if ((t.flags & Et) !== pe)
            return t.lanes = a, (t.mode & kt) !== ot && Qp(t), t;
          var Se = nt !== null, Ie = !1;
          if (e === null)
            rf(t);
          else {
            var Be = e.memoizedState;
            Ie = Be !== null;
          }
          if (Se && !Ie) {
            var Nt = t.child;
            if (Nt.flags |= si, (t.mode & Zt) !== ot) {
              var Kt = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !se);
              Kt || _p(Ua.current, ty) ? g_() : zm();
            }
          }
          var dn = t.updateQueue;
          if (dn !== null && (t.flags |= ht), Mr(t), (t.mode & kt) !== ot && Se) {
            var $t = t.child;
            $t !== null && (t.treeBaseDuration -= $t.treeBaseDuration);
          }
          return null;
        }
        case ze:
          return Yo(t), gf(e, t), e === null && _s(t.stateNode.containerInfo), Mr(t), null;
        case _e:
          var Dn = t.type._context;
          return g(Dn, t), Mr(t), null;
        case Pe: {
          var Wt = t.type;
          return vi(Wt) && yl(t), Mr(t), null;
        }
        case Ve: {
          qo(t);
          var Mt = t.memoizedState;
          if (Mt === null)
            return Mr(t), null;
          var Jn = (t.flags & Et) !== pe, An = Mt.rendering;
          if (An === null)
            if (Jn)
              xf(Mt, !1);
            else {
              var xa = S_() && (e === null || (e.flags & Et) === pe);
              if (!xa)
                for (var Dr = t.child; Dr !== null; ) {
                  var Wi = Td(Dr);
                  if (Wi !== null) {
                    Jn = !0, t.flags |= Et, xf(Mt, !1);
                    var qi = Wi.updateQueue;
                    return qi !== null && (t.updateQueue = qi, t.flags |= ht), t.subtreeFlags = pe, sS(t, a), Yl(t, Ep(Ua.current, of)), t.child;
                  }
                  Dr = Dr.sibling;
                }
              Mt.tail !== null && Tn() > Ag() && (t.flags |= Et, Jn = !0, xf(Mt, !1), t.lanes = Rl);
            }
          else {
            if (!Jn) {
              var ps = Td(An);
              if (ps !== null) {
                t.flags |= Et, Jn = !0;
                var rc = ps.updateQueue;
                if (rc !== null && (t.updateQueue = rc, t.flags |= ht), xf(Mt, !0), Mt.tail === null && Mt.tailMode === "hidden" && !An.alternate && !Hr())
                  return Mr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Tn() * 2 - Mt.renderingStartTime > Ag() && a !== nn && (t.flags |= Et, Jn = !0, xf(Mt, !1), t.lanes = Rl);
            }
            if (Mt.isBackwards)
              An.sibling = t.child, t.child = An;
            else {
              var ic = Mt.last;
              ic !== null ? ic.sibling = An : t.child = An, Mt.last = An;
            }
          }
          if (Mt.tail !== null) {
            var Ii = Mt.tail;
            Mt.rendering = Ii, Mt.tail = Ii.sibling, Mt.renderingStartTime = Tn(), Ii.sibling = null;
            var Xu = Ua.current;
            return Jn ? Xu = Ep(Xu, of) : Xu = Wo(Xu), Yl(t, Xu), Ii;
          }
          return Mr(t), null;
        }
        case at:
          break;
        case rt:
        case dt: {
          Mm(t);
          var Im = t.memoizedState, R0 = Im !== null;
          if (e !== null) {
            var gE = e.memoizedState, xE = gE !== null;
            xE !== R0 && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !J && (t.flags |= si);
          }
          return !R0 || (t.mode & Zt) === ot ? Mr(t) : Rn(ds, nn) && (Mr(t), Gr && t.subtreeFlags & (zt | ht) && (t.flags |= si)), null;
        }
        case Ht:
          return null;
        case Nn:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    var Sf = m.ReactCurrentOwner, ka = !1, Jp, _f, Zp, Kp, $p, Yu, em, Qd;
    Jp = {}, _f = {}, Zp = {}, Kp = {}, $p = {}, Yu = !1, em = {}, Qd = {};
    function ri(e, t, a, l) {
      e === null ? t.child = Kv(t, null, a, l) : t.child = Vo(t, e.child, a, l);
    }
    function zS(e, t, a, l) {
      t.child = Vo(t, e.child, null, l), t.child = Vo(t, null, a, l);
    }
    function By(e, t, a, l, c) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Kr(
          d,
          l,
          // Resolved props
          "prop",
          Fe(a)
        );
      }
      var v = a.render, R = t.ref, z, A;
      me(t, c), oa(t);
      {
        if (Sf.current = t, ca(!0), z = Xo(e, t, v, l, R, c), A = Jo(), t.mode & En) {
          Ut(!0);
          try {
            z = Xo(e, t, v, l, R, c), A = Jo();
          } finally {
            Ut(!1);
          }
        }
        ca(!1);
      }
      return Na(), e !== null && !ka ? (ny(e, t, c), Gs(e, t, c)) : (Hr() && A && sp(t), t.flags |= xn, ri(e, t, z, c), t.child);
    }
    function Hy(e, t, a, l, c) {
      if (e === null) {
        var d = a.type;
        if (Q_(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = nc(d), t.tag = j, t.type = v, rm(t, d), Py(e, t, v, l, c);
        }
        {
          var R = d.propTypes;
          R && Kr(
            R,
            l,
            // Resolved props
            "prop",
            Fe(d)
          );
        }
        var z = Bm(a.type, null, l, t, t.mode, c);
        return z.ref = t.ref, z.return = t, t.child = z, z;
      }
      {
        var A = a.type, L = A.propTypes;
        L && Kr(
          L,
          l,
          // Resolved props
          "prop",
          Fe(A)
        );
      }
      var V = e.child, Z = lm(e, c);
      if (!Z) {
        var te = V.memoizedProps, fe = a.compare;
        if (fe = fe !== null ? fe : Ps, fe(te, l) && e.ref === t.ref)
          return Gs(e, t, c);
      }
      t.flags |= xn;
      var ye = Gu(V, l);
      return ye.ref = t.ref, ye.return = t, t.child = ye, ye;
    }
    function Py(e, t, a, l, c) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === Bt) {
          var v = d, R = v._payload, z = v._init;
          try {
            d = z(R);
          } catch {
            d = null;
          }
          var A = d && d.propTypes;
          A && Kr(
            A,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Fe(d)
          );
        }
      }
      if (e !== null) {
        var L = e.memoizedProps;
        if (Ps(L, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ka = !1, lm(e, c))
            (e.flags & ge) !== pe && (ka = !0);
          else
            return t.lanes = e.lanes, Gs(e, t, c);
      }
      return tm(e, t, a, l, c);
    }
    function jy(e, t, a) {
      var l = t.pendingProps, c = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || J)
        if ((t.mode & Zt) === ot) {
          var v = {
            baseLanes: oe,
            cachePool: null
          };
          t.memoizedState = v, xh(t, a);
        } else if (Rn(a, nn)) {
          var V = {
            baseLanes: oe,
            cachePool: null
          };
          t.memoizedState = V;
          var Z = d !== null ? d.baseLanes : a;
          xh(t, Z);
        } else {
          var R = null, z;
          if (d !== null) {
            var A = d.baseLanes;
            z = mt(A, a);
          } else
            z = a;
          t.lanes = t.childLanes = nn;
          var L = {
            baseLanes: z,
            cachePool: R
          };
          return t.memoizedState = L, t.updateQueue = null, xh(t, z), null;
        }
      else {
        var te;
        d !== null ? (te = mt(d.baseLanes, a), t.memoizedState = null) : te = a, xh(t, te);
      }
      return ri(e, t, c, a), t.child;
    }
    function wS(e, t, a) {
      var l = t.pendingProps;
      return ri(e, t, l, a), t.child;
    }
    function DS(e, t, a) {
      var l = t.pendingProps.children;
      return ri(e, t, l, a), t.child;
    }
    function AS(e, t, a) {
      {
        t.flags |= ht;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var c = t.pendingProps, d = c.children;
      return ri(e, t, d, a), t.child;
    }
    function Vy(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ir, t.flags |= wt);
    }
    function tm(e, t, a, l, c) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Kr(
          d,
          l,
          // Resolved props
          "prop",
          Fe(a)
        );
      }
      var v;
      {
        var R = ra(t, a, !0);
        v = vl(t, R);
      }
      var z, A;
      me(t, c), oa(t);
      {
        if (Sf.current = t, ca(!0), z = Xo(e, t, a, l, v, c), A = Jo(), t.mode & En) {
          Ut(!0);
          try {
            z = Xo(e, t, a, l, v, c), A = Jo();
          } finally {
            Ut(!1);
          }
        }
        ca(!1);
      }
      return Na(), e !== null && !ka ? (ny(e, t, c), Gs(e, t, c)) : (Hr() && A && sp(t), t.flags |= xn, ri(e, t, z, c), t.child);
    }
    function Yy(e, t, a, l, c) {
      {
        switch (a0(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, R = new v(t.memoizedProps, d.context), z = R.state;
            d.updater.enqueueSetState(d, z, null);
            break;
          }
          case !0: {
            t.flags |= Et, t.flags |= ae;
            var A = new Error("Simulated error coming from DevTools"), L = Cl(c);
            t.lanes = mt(t.lanes, L);
            var V = Xp(t, Wd(A, t), L);
            Lt(t, V);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var Z = a.propTypes;
          Z && Kr(
            Z,
            l,
            // Resolved props
            "prop",
            Fe(a)
          );
        }
      }
      var te;
      vi(a) ? (te = !0, aa(t)) : te = !1, me(t, c);
      var fe = t.stateNode, ye;
      fe === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= zt), Hv(t, a, l), ap(t, a, l, c), ye = !0) : e === null ? ye = Vx(t, a, l, c) : ye = Yx(e, t, a, l, c);
      var Xe = nm(e, t, a, ye, te, c);
      {
        var yt = t.stateNode;
        ye && yt.props !== l && (Yu || x("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), Yu = !0);
      }
      return Xe;
    }
    function nm(e, t, a, l, c, d) {
      Vy(e, t);
      var v = (t.flags & Et) !== pe;
      if (!l && !v)
        return c && Su(t, a, !1), Gs(e, t, d);
      var R = t.stateNode;
      Sf.current = t;
      var z;
      if (v && typeof a.getDerivedStateFromError != "function")
        z = null, wy();
      else {
        oa(t);
        {
          if (ca(!0), z = R.render(), t.mode & En) {
            Ut(!0);
            try {
              R.render();
            } finally {
              Ut(!1);
            }
          }
          ca(!1);
        }
        Na();
      }
      return t.flags |= xn, e !== null && v ? zS(e, t, z, d) : ri(e, t, z, d), t.memoizedState = R.state, c && Su(t, a, !0), t.child;
    }
    function Wy(e) {
      var t = e.stateNode;
      t.pendingContext ? ia(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ia(e, t.context, !1), xp(e, t.containerInfo);
    }
    function NS(e, t, a) {
      if (Wy(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, c = t.memoizedState, d = c.element;
      vt(e, t), Bo(t, l, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var R = v.element;
      if (Yn && c.isDehydrated) {
        var z = {
          element: R,
          isDehydrated: !1,
          cache: v.cache,
          transitions: v.transitions
        }, A = t.updateQueue;
        if (A.baseState = z, t.memoizedState = z, t.flags & _r) {
          var L = new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.");
          return qy(e, t, R, a, L);
        } else if (R !== d) {
          var V = new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.");
          return qy(e, t, R, a, V);
        } else {
          Kx(t);
          var Z = Kv(t, null, R, a);
          t.child = Z;
          for (var te = Z; te; )
            te.flags = te.flags & ~zt | Kn, te = te.sibling;
        }
      } else {
        if (jo(), R === d)
          return Gs(e, t, a);
        ri(e, t, R, a);
      }
      return t.child;
    }
    function qy(e, t, a, l, c) {
      return jo(), dp(c), t.flags |= _r, ri(e, t, a, l), t.child;
    }
    function FS(e, t, a) {
      $v(t), e === null && fp(t);
      var l = t.type, c = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = c.children, R = rl(l, c);
      return R ? v = null : d !== null && rl(l, d) && (t.flags |= Zi), Vy(e, t), ri(e, t, v, a), t.child;
    }
    function OS(e, t) {
      return e === null && fp(t), null;
    }
    function US(e, t, a, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= zt);
      var c = t.pendingProps, d = a, v = d._payload, R = d._init, z = R(v);
      t.type = z;
      var A = t.tag = G_(z), L = Ei(z, c), V;
      switch (A) {
        case ue:
          return rm(t, z), t.type = z = nc(z), V = tm(null, t, z, L, l), V;
        case ce:
          return t.type = z = Nm(z), V = Yy(null, t, z, L, l), V;
        case H:
          return t.type = z = Fm(z), V = By(null, t, z, L, l), V;
        case U: {
          if (t.type !== t.elementType) {
            var Z = z.propTypes;
            Z && Kr(
              Z,
              L,
              // Resolved for outer only
              "prop",
              Fe(z)
            );
          }
          return V = Hy(
            null,
            t,
            z,
            Ei(z.type, L),
            // The inner type can have defaults too
            l
          ), V;
        }
      }
      var te = "";
      throw z !== null && typeof z == "object" && z.$$typeof === Bt && (te = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + z + ". " + ("Lazy element type must resolve to a class or function." + te));
    }
    function LS(e, t, a, l, c) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= zt), t.tag = ce;
      var d;
      return vi(a) ? (d = !0, aa(t)) : d = !1, me(t, c), Hv(t, a, l), ap(t, a, l, c), nm(null, t, a, !0, d, c);
    }
    function kS(e, t, a, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= zt);
      var c = t.pendingProps, d;
      {
        var v = ra(t, a, !1);
        d = vl(t, v);
      }
      me(t, l);
      var R, z;
      oa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var A = Fe(a) || "Unknown";
          Jp[A] || (x("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", A, A), Jp[A] = !0);
        }
        t.mode & En && _i.recordLegacyContextWarning(t, null), ca(!0), Sf.current = t, R = Xo(null, t, a, c, d, l), z = Jo(), ca(!1);
      }
      if (Na(), t.flags |= xn, typeof R == "object" && R !== null && typeof R.render == "function" && R.$$typeof === void 0) {
        var L = Fe(a) || "Unknown";
        _f[L] || (x("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), _f[L] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof R == "object" && R !== null && typeof R.render == "function" && R.$$typeof === void 0
      ) {
        {
          var V = Fe(a) || "Unknown";
          _f[V] || (x("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", V, V, V), _f[V] = !0);
        }
        t.tag = ce, t.memoizedState = null, t.updateQueue = null;
        var Z = !1;
        return vi(a) ? (Z = !0, aa(t)) : Z = !1, t.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null, We(t), Bv(t, R), ap(t, a, c, l), nm(null, t, a, !0, Z, l);
      } else {
        if (t.tag = ue, t.mode & En) {
          Ut(!0);
          try {
            R = Xo(null, t, a, c, d, l), z = Jo();
          } finally {
            Ut(!1);
          }
        }
        return Hr() && z && sp(t), ri(null, t, R, l), rm(t, a), t.child;
      }
    }
    function rm(e, t) {
      {
        if (t && t.childContextTypes && x("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = qh();
          l && (a += `

Check the render method of \`` + l + "`.");
          var c = l || "", d = e._debugSource;
          d && (c = d.fileName + ":" + d.lineNumber), $p[c] || ($p[c] = !0, x("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Fe(t) || "Unknown";
          Kp[v] || (x("%s: Function components do not support getDerivedStateFromProps.", v), Kp[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var R = Fe(t) || "Unknown";
          Zp[R] || (x("%s: Function components do not support contextType.", R), Zp[R] = !0);
        }
      }
    }
    var Gd = {
      dehydrated: null,
      treeContext: null,
      retryLane: In
    };
    function Xd(e) {
      return {
        baseLanes: e,
        cachePool: MS()
      };
    }
    function Iy(e, t) {
      var a = null;
      return {
        baseLanes: mt(e.baseLanes, t),
        cachePool: a
      };
    }
    function BS(e, t, a, l) {
      if (t !== null) {
        var c = t.memoizedState;
        if (c === null)
          return !1;
      }
      return _p(e, of);
    }
    function Qy(e, t) {
      return Os(e.childLanes, t);
    }
    function Gy(e, t, a) {
      var l = t.pendingProps;
      l0(t) && (t.flags |= Et);
      var c = Ua.current, d = !1, v = (t.flags & Et) !== pe;
      if (v || BS(c, e) ? (d = !0, t.flags &= ~Et) : (e === null || e.memoizedState !== null) && (c = uS(c, ty)), c = Wo(c), Yl(t, c), e === null) {
        fp(t);
        {
          var R = t.memoizedState;
          if (R !== null) {
            var z = R.dehydrated;
            if (z !== null)
              return jS(t, z);
          }
        }
        var A = l.children, L = l.fallback;
        if (d) {
          var V = HS(t, A, L, a), Z = t.child;
          return Z.memoizedState = Xd(a), t.memoizedState = Gd, V;
        } else
          return im(t, A);
      } else {
        var te = e.memoizedState;
        if (te !== null) {
          {
            var fe = te.dehydrated;
            if (fe !== null)
              if (v) {
                if (t.flags & _r)
                  return t.flags &= ~_r, Jd(e, t, a, new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
                if (t.memoizedState !== null)
                  return t.child = e.child, t.flags |= Et, null;
                var ye = l.children, Xe = l.fallback, yt = PS(e, t, ye, Xe, a), nt = t.child;
                return nt.memoizedState = Xd(a), t.memoizedState = Gd, yt;
              } else
                return VS(e, t, fe, te, a);
          }
          if (d) {
            var mn = l.fallback, vn = l.children, I = Zy(e, t, vn, mn, a), ne = t.child, Y = e.child.memoizedState;
            return ne.memoizedState = Y === null ? Xd(a) : Iy(Y, a), ne.childLanes = Qy(e, a), t.memoizedState = Gd, I;
          } else {
            var Se = l.children, Ie = Jy(e, t, Se, a);
            return t.memoizedState = null, Ie;
          }
        } else if (d) {
          var Be = l.fallback, Nt = l.children, Kt = Zy(e, t, Nt, Be, a), dn = t.child, $t = e.child.memoizedState;
          return dn.memoizedState = $t === null ? Xd(a) : Iy($t, a), dn.childLanes = Qy(e, a), t.memoizedState = Gd, Kt;
        } else {
          var Dn = l.children, Wt = Jy(e, t, Dn, a);
          return t.memoizedState = null, Wt;
        }
      }
    }
    function im(e, t, a) {
      var l = e.mode, c = {
        mode: "visible",
        children: t
      }, d = am(c, l);
      return d.return = e, e.child = d, d;
    }
    function HS(e, t, a, l) {
      var c = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, R, z;
      return (c & Zt) === ot && d !== null ? (R = d, R.childLanes = oe, R.pendingProps = v, e.mode & kt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = 0, R.treeBaseDuration = 0), z = Jl(a, c, l, null)) : (R = am(v, c), z = Jl(a, c, l, null)), R.return = e, z.return = e, R.sibling = z, e.child = R, z;
    }
    function am(e, t, a) {
      return Kg(e, t, oe, null);
    }
    function Xy(e, t) {
      return Gu(e, t);
    }
    function Jy(e, t, a, l) {
      var c = e.child, d = c.sibling, v = Xy(c, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Zt) === ot && (v.lanes = l), v.return = t, v.sibling = null, d !== null) {
        var R = t.deletions;
        R === null ? (t.deletions = [d], t.flags |= rr) : R.push(d);
      }
      return t.child = v, v;
    }
    function Zy(e, t, a, l, c) {
      var d = t.mode, v = e.child, R = v.sibling, z = {
        mode: "hidden",
        children: a
      }, A;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Zt) === ot && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var L = t.child;
        A = L, A.childLanes = oe, A.pendingProps = z, t.mode & kt && (A.actualDuration = 0, A.actualStartTime = -1, A.selfBaseDuration = v.selfBaseDuration, A.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        A = Xy(v, z), A.subtreeFlags = v.subtreeFlags & Sn;
      var V;
      return R !== null ? V = Gu(R, l) : (V = Jl(l, d, c, null), V.flags |= zt), V.return = t, A.return = t, A.sibling = V, t.child = A, V;
    }
    function Jd(e, t, a, l) {
      l !== null && dp(l), Vo(t, e.child, null, a);
      var c = t.pendingProps, d = c.children, v = im(t, d);
      return v.flags |= zt, t.memoizedState = null, v;
    }
    function PS(e, t, a, l, c) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, R = am(v, d), z = Jl(l, d, c, null);
      return z.flags |= zt, R.return = t, z.return = t, R.sibling = z, t.child = R, (t.mode & Zt) !== ot && Vo(t, e.child, null, c), z;
    }
    function jS(e, t, a) {
      return (e.mode & Zt) === ot ? (x("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ct) : Vt(t) ? e.lanes = wa : e.lanes = nn, null;
    }
    function VS(e, t, a, l, c) {
      if (Jx(), (t.mode & Zt) === ot)
        return Jd(
          e,
          t,
          c,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Vt(a))
        return Jd(
          e,
          t,
          c,
          // TODO: The server should serialize the error message so we can log it
          // here on the client. Or, in production, a hash/id that corresponds to
          // the error.
          new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.")
        );
      var d = Rn(c, e.childLanes);
      if (ka || d) {
        var v = vh();
        if (v !== null) {
          var R = Hc(v, c);
          if (R !== In && R !== l.retryLane) {
            l.retryLane = R;
            var z = ln;
            dr(e, R, z);
          }
        }
        return zm(), Jd(e, t, c, new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
      } else if (At(a)) {
        t.flags |= Et, t.child = e.child;
        var A = A_.bind(null, e);
        return _n(a, A), null;
      } else {
        $x(t, a, l.treeContext);
        var L = t.pendingProps, V = L.children, Z = im(t, V);
        return Z.flags |= Kn, Z;
      }
    }
    function Ky(e, t, a) {
      e.lanes = mt(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = mt(l.lanes, t)), D(e.return, t, a);
    }
    function YS(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === ee) {
          var c = l.memoizedState;
          c !== null && Ky(l, a, e);
        } else if (l.tag === Ve)
          Ky(l, a, e);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function WS(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && Td(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function qS(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !em[e])
        if (em[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              x('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              x('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              x('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          x('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function IS(e, t) {
      e !== void 0 && !Qd[e] && (e !== "collapsed" && e !== "hidden" ? (Qd[e] = !0, x('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Qd[e] = !0, x('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $y(e, t) {
      {
        var a = Jt(e), l = !a && typeof le(e) == "function";
        if (a || l) {
          var c = a ? "array" : "iterable";
          return x("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, t, c), !1;
        }
      }
      return !0;
    }
    function QS(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Jt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!$y(e[a], a))
              return;
        } else {
          var l = le(e);
          if (typeof l == "function") {
            var c = l.call(e);
            if (c)
              for (var d = c.next(), v = 0; !d.done; d = c.next()) {
                if (!$y(d.value, v))
                  return;
                v++;
              }
          } else
            x('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function sm(e, t, a, l, c) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: a,
        tailMode: c
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = a, d.tailMode = c);
    }
    function eg(e, t, a) {
      var l = t.pendingProps, c = l.revealOrder, d = l.tail, v = l.children;
      qS(c), IS(d, c), QS(v, c), ri(e, t, v, a);
      var R = Ua.current, z = _p(R, of);
      if (z)
        R = Ep(R, of), t.flags |= Et;
      else {
        var A = e !== null && (e.flags & Et) !== pe;
        A && YS(t, t.child, a), R = Wo(R);
      }
      if (Yl(t, R), (t.mode & Zt) === ot)
        t.memoizedState = null;
      else
        switch (c) {
          case "forwards": {
            var L = WS(t.child), V;
            L === null ? (V = t.child, t.child = null) : (V = L.sibling, L.sibling = null), sm(
              t,
              !1,
              // isBackwards
              V,
              L,
              d
            );
            break;
          }
          case "backwards": {
            var Z = null, te = t.child;
            for (t.child = null; te !== null; ) {
              var fe = te.alternate;
              if (fe !== null && Td(fe) === null) {
                t.child = te;
                break;
              }
              var ye = te.sibling;
              te.sibling = Z, Z = te, te = ye;
            }
            sm(
              t,
              !0,
              // isBackwards
              Z,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            sm(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function GS(e, t, a) {
      xp(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Vo(t, null, l, a) : ri(e, t, l, a), t.child;
    }
    var tg = !1;
    function XS(e, t, a) {
      var l = t.type, c = l._context, d = t.pendingProps, v = t.memoizedProps, R = d.value;
      {
        "value" in d || tg || (tg = !0, x("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var z = t.type.propTypes;
        z && Kr(z, d, "prop", "Context.Provider");
      }
      if (p(t, c, R), v !== null) {
        var A = v.value;
        if (ti(A, R)) {
          if (v.children === d.children && !qn())
            return Gs(e, t, a);
        } else
          B(t, c, a);
      }
      var L = d.children;
      return ri(e, t, L, a), t.child;
    }
    var ng = !1;
    function JS(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (ng || (ng = !0, x("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var c = t.pendingProps, d = c.children;
      typeof d != "function" && x("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), me(t, a);
      var v = Ee(l);
      oa(t);
      var R;
      return Sf.current = t, ca(!0), R = d(v), ca(!1), Na(), t.flags |= xn, ri(e, t, R, a), t.child;
    }
    function Zd() {
      ka = !0;
    }
    function Gs(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), wy(), Sh(t.lanes), Rn(a, t.childLanes) ? (aS(e, t), t.child) : null;
    }
    function ZS(e, t, a) {
      {
        var l = t.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === l.child)
          l.child = a;
        else {
          var c = l.child;
          if (c === null)
            throw new Error("Expected parent to have a child.");
          for (; c.sibling !== t; )
            if (c = c.sibling, c === null)
              throw new Error("Expected to find the previous sibling.");
          c.sibling = a;
        }
        var d = l.deletions;
        return d === null ? (l.deletions = [e], l.flags |= rr) : d.push(e), a.flags |= zt, a;
      }
    }
    function lm(e, t) {
      var a = e.lanes;
      return !!Rn(a, t);
    }
    function KS(e, t, a) {
      switch (t.tag) {
        case xe:
          Wy(t), t.stateNode, jo();
          break;
        case Te:
          $v(t);
          break;
        case ce: {
          var l = t.type;
          vi(l) && aa(t);
          break;
        }
        case ze:
          xp(t, t.stateNode.containerInfo);
          break;
        case _e: {
          var c = t.memoizedProps.value, d = t.type._context;
          p(t, d, c);
          break;
        }
        case ie:
          {
            var v = Rn(a, t.childLanes);
            v && (t.flags |= ht);
            {
              var R = t.stateNode;
              R.effectDuration = 0, R.passiveEffectDuration = 0;
            }
          }
          break;
        case ee: {
          var z = t.memoizedState;
          if (z !== null) {
            if (z.dehydrated !== null)
              return Yl(t, Wo(Ua.current)), t.flags |= Et, null;
            var A = t.child, L = A.childLanes;
            if (Rn(a, L))
              return Gy(e, t, a);
            Yl(t, Wo(Ua.current));
            var V = Gs(e, t, a);
            return V !== null ? V.sibling : null;
          } else
            Yl(t, Wo(Ua.current));
          break;
        }
        case Ve: {
          var Z = (e.flags & Et) !== pe, te = Rn(a, t.childLanes);
          if (Z) {
            if (te)
              return eg(e, t, a);
            t.flags |= Et;
          }
          var fe = t.memoizedState;
          if (fe !== null && (fe.rendering = null, fe.tail = null, fe.lastEffect = null), Yl(t, Ua.current), te)
            break;
          return null;
        }
        case rt:
        case dt:
          return t.lanes = oe, jy(e, t, a);
      }
      return Gs(e, t, a);
    }
    function rg(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ZS(e, t, Bm(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, c = t.pendingProps;
        if (l !== c || qn() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ka = !0;
        else {
          var d = lm(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Et) === pe)
            return ka = !1, KS(e, t, a);
          (e.flags & ge) !== pe ? ka = !0 : ka = !1;
        }
      } else if (ka = !1, Hr() && Wx(t)) {
        var v = t.index, R = qx();
        jv(t, R, v);
      }
      switch (t.lanes = oe, t.tag) {
        case Ke:
          return kS(e, t, t.type, a);
        case je: {
          var z = t.elementType;
          return US(e, t, z, a);
        }
        case ue: {
          var A = t.type, L = t.pendingProps, V = t.elementType === A ? L : Ei(A, L);
          return tm(e, t, A, V, a);
        }
        case ce: {
          var Z = t.type, te = t.pendingProps, fe = t.elementType === Z ? te : Ei(Z, te);
          return Yy(e, t, Z, fe, a);
        }
        case xe:
          return NS(e, t, a);
        case Te:
          return FS(e, t, a);
        case de:
          return OS(e, t);
        case ee:
          return Gy(e, t, a);
        case ze:
          return GS(e, t, a);
        case H: {
          var ye = t.type, Xe = t.pendingProps, yt = t.elementType === ye ? Xe : Ei(ye, Xe);
          return By(e, t, ye, yt, a);
        }
        case Ue:
          return wS(e, t, a);
        case ft:
          return DS(e, t, a);
        case ie:
          return AS(e, t, a);
        case _e:
          return XS(e, t, a);
        case ut:
          return JS(e, t, a);
        case U: {
          var nt = t.type, mn = t.pendingProps, vn = Ei(nt, mn);
          if (t.type !== t.elementType) {
            var I = nt.propTypes;
            I && Kr(
              I,
              vn,
              // Resolved for outer only
              "prop",
              Fe(nt)
            );
          }
          return vn = Ei(nt.type, vn), Hy(e, t, nt, vn, a);
        }
        case j:
          return Py(e, t, t.type, t.pendingProps, a);
        case Pe: {
          var ne = t.type, Y = t.pendingProps, Se = t.elementType === ne ? Y : Ei(ne, Y);
          return LS(e, t, ne, Se, a);
        }
        case Ve:
          return eg(e, t, a);
        case at:
          break;
        case rt:
          return jy(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function $S(e, t, a) {
      switch (lp(t), t.tag) {
        case ce: {
          var l = t.type;
          vi(l) && yl(t);
          var c = t.flags;
          return c & ae ? (t.flags = c & ~ae | Et, (t.mode & kt) !== ot && Qp(t), t) : null;
        }
        case xe: {
          Yo(t), xu(t), Tp();
          var d = t.flags;
          return (d & ae) !== pe && (d & Et) === pe ? (t.flags = d & ~ae | Et, t) : null;
        }
        case Te:
          return Sp(t), null;
        case ee: {
          qo(t);
          {
            var v = t.memoizedState;
            if (v !== null && v.dehydrated !== null) {
              if (t.alternate === null)
                throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
              jo();
            }
          }
          var R = t.flags;
          return R & ae ? (t.flags = R & ~ae | Et, (t.mode & kt) !== ot && Qp(t), t) : null;
        }
        case Ve:
          return qo(t), null;
        case ze:
          return Yo(t), null;
        case _e:
          var z = t.type._context;
          return g(z, t), null;
        case rt:
        case dt:
          return Mm(t), null;
        case Ht:
          return null;
        default:
          return null;
      }
    }
    function ig(e, t, a) {
      switch (lp(t), t.tag) {
        case ce: {
          var l = t.type.childContextTypes;
          l != null && yl(t);
          break;
        }
        case xe: {
          Yo(t), xu(t), Tp();
          break;
        }
        case Te: {
          Sp(t);
          break;
        }
        case ze:
          Yo(t);
          break;
        case ee:
          qo(t);
          break;
        case Ve:
          qo(t);
          break;
        case _e:
          var c = t.type._context;
          g(c, t);
          break;
        case rt:
        case dt:
          Mm(t);
          break;
      }
    }
    function ag(e, t, a, l, c, d, v, R, z) {
      var A = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, A);
      } catch (L) {
        this.onError(L);
      }
    }
    var sg = ag;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var um = document.createElement("react");
      sg = function(t, a, l, c, d, v, R, z, A) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var L = document.createEvent("Event"), V = !1, Z = !0, te = window.event, fe = Object.getOwnPropertyDescriptor(window, "event");
        function ye() {
          um.removeEventListener(ne, yt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = te);
        }
        var Xe = Array.prototype.slice.call(arguments, 3);
        function yt() {
          V = !0, ye(), a.apply(l, Xe), Z = !1;
        }
        var nt, mn = !1, vn = !1;
        function I(Y) {
          if (nt = Y.error, mn = !0, nt === null && Y.colno === 0 && Y.lineno === 0 && (vn = !0), Y.defaultPrevented && nt != null && typeof nt == "object")
            try {
              nt._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", I), um.addEventListener(ne, yt, !1), L.initEvent(ne, !1, !1), um.dispatchEvent(L), fe && Object.defineProperty(window, "event", fe), V && Z && (mn ? vn && (nt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nt)), window.removeEventListener("error", I), !V)
          return ye(), ag.apply(this, arguments);
      };
    }
    var e1 = sg, Ef = !1, Kd = null, t1 = {
      onError: function(e) {
        Ef = !0, Kd = e;
      }
    };
    function lg(e, t, a, l, c, d, v, R, z) {
      Ef = !1, Kd = null, e1.apply(t1, arguments);
    }
    function n1() {
      return Ef;
    }
    function ug() {
      if (Ef) {
        var e = Kd;
        return Ef = !1, Kd = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var og = null;
    og = /* @__PURE__ */ new Set();
    var $d = !1, Ql = !1, r1 = typeof WeakSet == "function" ? WeakSet : Set, Oe = null, Zo = null, Ko = null;
    function zr(e) {
      lg(null, function() {
        throw e;
      }), ug();
    }
    var i1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & kt)
        try {
          va(), t.componentWillUnmount();
        } finally {
          ma(e);
        }
      else
        t.componentWillUnmount();
    };
    function cg(e, t) {
      try {
        Xs(Xn, e);
      } catch (a) {
        zr(a), wr(e, t, a);
      }
    }
    function om(e, t, a) {
      try {
        i1(e, a);
      } catch (l) {
        zr(l), wr(e, t, l);
      }
    }
    function a1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (l) {
        zr(l), wr(e, t, l);
      }
    }
    function fg(e, t) {
      try {
        hg(e);
      } catch (a) {
        zr(a), wr(e, t, a);
      }
    }
    function eh(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var l;
          try {
            if (Re && ke && e.mode & kt)
              try {
                va(), l = a(null);
              } finally {
                ma(e);
              }
            else
              l = a(null);
          } catch (c) {
            zr(c), wr(e, t, c);
          }
          typeof l == "function" && x("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function th(e, t, a) {
      try {
        a();
      } catch (l) {
        zr(l), wr(e, t, l);
      }
    }
    var dg = !1;
    function s1(e, t) {
      Qa(e.containerInfo), Oe = t, l1();
      var a = dg;
      return dg = !1, a;
    }
    function l1() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        (e.subtreeFlags & rn) !== pe && t !== null ? (ya(t, e), Oe = t) : u1();
      }
    }
    function u1() {
      for (; Oe !== null; ) {
        var e = Oe;
        Yt(e);
        try {
          o1(e);
        } catch (a) {
          zr(a), wr(e, e.return, a);
        }
        lr();
        var t = e.sibling;
        if (t !== null) {
          ya(t, e.return), Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function o1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Er) !== pe) {
        switch (Yt(e), e.tag) {
          case ue:
          case H:
          case j:
            break;
          case ce: {
            if (t !== null) {
              var l = t.memoizedProps, c = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Yu && (d.props !== e.memoizedProps && x("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), d.state !== e.memoizedState && x("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Ei(e.type, l), c);
              {
                var R = og;
                v === void 0 && !R.has(e.type) && (R.add(e.type), x("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case xe: {
            if (Gr) {
              var z = e.stateNode;
              _(z.containerInfo);
            }
            break;
          }
          case Te:
          case de:
          case ze:
          case Pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        lr();
      }
    }
    function Ti(e, t, a) {
      var l = t.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var d = c.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var R = v.destroy;
            v.destroy = void 0, R !== void 0 && ((e & Cr) !== us ? Lr(t) : (e & Xn) !== us && wu(t), th(t, a, R), (e & Cr) !== us ? Xc() : (e & Xn) !== us && Fo());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function Xs(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var c = l.next, d = c;
        do {
          if ((d.tag & e) === e) {
            (e & Cr) !== us ? Gc(t) : (e & Xn) !== us && Jc(t);
            var v = d.create;
            d.destroy = v(), (e & Cr) !== us ? zu() : (e & Xn) !== us && Ol();
            {
              var R = d.destroy;
              if (R !== void 0 && typeof R != "function") {
                var z = void 0;
                (d.tag & Xn) !== pe ? z = "useLayoutEffect" : (d.tag & Wl) !== pe ? z = "useInsertionEffect" : z = "useEffect";
                var A = void 0;
                R === null ? A = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof R.then == "function" ? A = `

It looks like you wrote ` + z + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + z + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : A = " You returned: " + R, x("%s must not return anything besides a function, which is used for clean-up.%s", z, A);
              }
            }
          }
          d = d.next;
        } while (d !== c);
      }
    }
    function c1(e, t) {
      if ((t.flags & ht) !== pe)
        switch (t.tag) {
          case ie: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, c = l.id, d = l.onPostCommit, v = My(), R = t.alternate === null ? "mount" : "update";
            Cy() && (R = "nested-update"), typeof d == "function" && d(c, R, a, v);
            var z = t.return;
            e:
              for (; z !== null; ) {
                switch (z.tag) {
                  case xe:
                    var A = z.stateNode;
                    A.passiveEffectDuration += a;
                    break e;
                  case ie:
                    var L = z.stateNode;
                    L.passiveEffectDuration += a;
                    break e;
                }
                z = z.return;
              }
            break;
          }
        }
    }
    function f1(e, t, a, l) {
      if ((a.flags & Bn) !== pe)
        switch (a.tag) {
          case ue:
          case H:
          case j: {
            if (!Ql)
              if (a.mode & kt)
                try {
                  va(), Xs(Xn | Mn, a);
                } finally {
                  ma(a);
                }
              else
                Xs(Xn | Mn, a);
            break;
          }
          case ce: {
            var c = a.stateNode;
            if (a.flags & ht && !Ql)
              if (t === null)
                if (a.type === a.elementType && !Yu && (c.props !== a.memoizedProps && x("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), c.state !== a.memoizedState && x("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & kt)
                  try {
                    va(), c.componentDidMount();
                  } finally {
                    ma(a);
                  }
                else
                  c.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Ei(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Yu && (c.props !== a.memoizedProps && x("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), c.state !== a.memoizedState && x("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & kt)
                  try {
                    va(), c.componentDidUpdate(d, v, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ma(a);
                  }
                else
                  c.componentDidUpdate(d, v, c.__reactInternalSnapshotBeforeUpdate);
              }
            var R = a.updateQueue;
            R !== null && (a.type === a.elementType && !Yu && (c.props !== a.memoizedProps && x("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), c.state !== a.memoizedState && x("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), Fv(a, R, c));
            break;
          }
          case xe: {
            var z = a.updateQueue;
            if (z !== null) {
              var A = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Te:
                    A = oi(a.child.stateNode);
                    break;
                  case ce:
                    A = a.child.stateNode;
                    break;
                }
              Fv(a, z, A);
            }
            break;
          }
          case Te: {
            var L = a.stateNode;
            if (t === null && a.flags & ht) {
              var V = a.type, Z = a.memoizedProps;
              Xa(L, V, Z, a);
            }
            break;
          }
          case de:
            break;
          case ze:
            break;
          case ie: {
            {
              var te = a.memoizedProps, fe = te.onCommit, ye = te.onRender, Xe = a.stateNode.effectDuration, yt = My(), nt = t === null ? "mount" : "update";
              Cy() && (nt = "nested-update"), typeof ye == "function" && ye(a.memoizedProps.id, nt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, yt);
              {
                typeof fe == "function" && fe(a.memoizedProps.id, nt, Xe, yt), b_(a);
                var mn = a.return;
                e:
                  for (; mn !== null; ) {
                    switch (mn.tag) {
                      case xe:
                        var vn = mn.stateNode;
                        vn.effectDuration += Xe;
                        break e;
                      case ie:
                        var I = mn.stateNode;
                        I.effectDuration += Xe;
                        break e;
                    }
                    mn = mn.return;
                  }
              }
            }
            break;
          }
          case ee: {
            S1(e, a);
            break;
          }
          case Ve:
          case Pe:
          case at:
          case rt:
          case dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ql || a.flags & Ir && hg(a);
    }
    function d1(e) {
      switch (e.tag) {
        case ue:
        case H:
        case j: {
          if (e.mode & kt)
            try {
              va(), cg(e, e.return);
            } finally {
              ma(e);
            }
          else
            cg(e, e.return);
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && a1(e, e.return, t), fg(e, e.return);
          break;
        }
        case Te: {
          fg(e, e.return);
          break;
        }
      }
    }
    function h1(e, t) {
      var a = null;
      if (Gr)
        for (var l = e; ; ) {
          if (l.tag === Te) {
            if (a === null) {
              a = l;
              var c = l.stateNode;
              t ? _c(c) : Ec(l.stateNode, l.memoizedProps);
            }
          } else if (l.tag === de) {
            if (a === null) {
              var d = l.stateNode;
              t ? di(d) : sl(d, l.memoizedProps);
            }
          } else if (!((l.tag === rt || l.tag === dt) && l.memoizedState !== null && l !== e)) {
            if (l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
          }
          if (l === e)
            return;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === e)
              return;
            a === l && (a = null), l = l.return;
          }
          a === l && (a = null), l.sibling.return = l.return, l = l.sibling;
        }
    }
    function hg(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, l;
        switch (e.tag) {
          case Te:
            l = oi(a);
            break;
          default:
            l = a;
        }
        if (typeof t == "function") {
          var c;
          if (e.mode & kt)
            try {
              va(), c = t(l);
            } finally {
              ma(e);
            }
          else
            c = t(l);
          typeof c == "function" && x("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || x("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = l;
      }
    }
    function p1(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function")
          if (e.mode & kt)
            try {
              va(), t(null);
            } finally {
              ma(e);
            }
          else
            t(null);
        else
          t.current = null;
    }
    function pg(e, t, a) {
      switch (Pn(t), t.tag) {
        case ue:
        case H:
        case U:
        case j: {
          var l = t.updateQueue;
          if (l !== null) {
            var c = l.lastEffect;
            if (c !== null) {
              var d = c.next, v = d;
              do {
                var R = v, z = R.destroy, A = R.tag;
                z !== void 0 && ((A & Wl) !== us ? th(t, a, z) : (A & Xn) !== us && (wu(t), t.mode & kt ? (va(), th(t, a, z), ma(t)) : th(t, a, z), Fo())), v = v.next;
              } while (v !== d);
            }
          }
          return;
        }
        case ce: {
          eh(t, a);
          var L = t.stateNode;
          typeof L.componentWillUnmount == "function" && om(t, a, L);
          return;
        }
        case Te: {
          eh(t, a);
          return;
        }
        case ze: {
          Gr ? Sg(e, t, a) : ci && v1(t);
          return;
        }
        case Je:
          return;
        case at:
          return;
      }
    }
    function mg(e, t, a) {
      for (var l = t; ; ) {
        if (pg(e, l, a), l.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        (!Gr || l.tag !== ze)) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function m1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function vg(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, vg(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Te) {
          var a = e.stateNode;
          a !== null && al(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function v1(e) {
      if (ci) {
        var t = e.stateNode, a = t.containerInfo, l = q(a);
        Ge(a, l);
      }
    }
    function y1(e) {
      if (ci) {
        switch (e.tag) {
          case ce:
          case Te:
          case de:
            return;
          case xe:
          case ze: {
            var t = e.stateNode, a = t.containerInfo, l = t.pendingChildren;
            Ge(a, l);
            return;
          }
        }
        throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function g1(e) {
      for (var t = e.return; t !== null; ) {
        if (yg(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function yg(e) {
      return e.tag === Te || e.tag === xe || e.tag === ze;
    }
    function gg(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || yg(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Te && t.tag !== de && t.tag !== Je; ) {
            if (t.flags & zt || t.child === null || t.tag === ze)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & zt))
            return t.stateNode;
        }
    }
    function xg(e) {
      if (Gr) {
        var t = g1(e);
        switch (t.tag) {
          case Te: {
            var a = t.stateNode;
            t.flags & Zi && (Rs(a), t.flags &= ~Zi);
            var l = gg(e);
            fm(e, l, a);
            break;
          }
          case xe:
          case ze: {
            var c = t.stateNode.containerInfo, d = gg(e);
            cm(e, d, c);
            break;
          }
          default:
            throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
    }
    function cm(e, t, a) {
      var l = e.tag, c = l === Te || l === de;
      if (c) {
        var d = e.stateNode;
        t ? Fr(a, d, t) : ba(a, d);
      } else if (l !== ze) {
        var v = e.child;
        if (v !== null) {
          cm(v, t, a);
          for (var R = v.sibling; R !== null; )
            cm(R, t, a), R = R.sibling;
        }
      }
    }
    function fm(e, t, a) {
      var l = e.tag, c = l === Te || l === de;
      if (c) {
        var d = e.stateNode;
        t ? Xr(a, d, t) : to(a, d);
      } else if (l !== ze) {
        var v = e.child;
        if (v !== null) {
          fm(v, t, a);
          for (var R = v.sibling; R !== null; )
            fm(R, t, a), R = R.sibling;
        }
      }
    }
    function Sg(e, t, a) {
      for (var l = t, c = !1, d, v; ; ) {
        if (!c) {
          var R = l.return;
          e:
            for (; ; ) {
              if (R === null)
                throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var z = R.stateNode;
              switch (R.tag) {
                case Te:
                  d = z, v = !1;
                  break e;
                case xe:
                  d = z.containerInfo, v = !0;
                  break e;
                case ze:
                  d = z.containerInfo, v = !0;
                  break e;
              }
              R = R.return;
            }
          c = !0;
        }
        if (l.tag === Te || l.tag === de)
          mg(e, l, a), v ? Es(d, l.stateNode) : Ja(d, l.stateNode);
        else if (l.tag === Je)
          v ? Xf(d, l.stateNode) : Gf(d, l.stateNode);
        else if (l.tag === ze) {
          if (l.child !== null) {
            d = l.stateNode.containerInfo, v = !0, l.child.return = l, l = l.child;
            continue;
          }
        } else if (pg(e, l, a), l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return, l.tag === ze && (c = !1);
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function x1(e, t, a) {
      Gr ? Sg(e, t, a) : mg(e, t, a), m1(t);
    }
    function dm(e, t) {
      if (!Gr) {
        switch (t.tag) {
          case ue:
          case H:
          case U:
          case j: {
            if (Ti(Wl | Mn, t, t.return), Xs(Wl | Mn, t), t.mode & kt)
              try {
                va(), Ti(Xn | Mn, t, t.return);
              } finally {
                ma(t);
              }
            else
              Ti(Xn | Mn, t, t.return);
            return;
          }
          case ie:
            return;
          case ee: {
            _g(t), nh(t);
            return;
          }
          case Ve: {
            nh(t);
            return;
          }
          case xe: {
            if (Yn && e !== null) {
              var a = e.memoizedState;
              if (a.isDehydrated) {
                var l = t.stateNode;
                io(l.containerInfo);
              }
            }
            break;
          }
          case rt:
          case dt:
            return;
        }
        y1(t);
        return;
      }
      switch (t.tag) {
        case ue:
        case H:
        case U:
        case j: {
          if (Ti(Wl | Mn, t, t.return), Xs(Wl | Mn, t), t.mode & kt)
            try {
              va(), Ti(Xn | Mn, t, t.return);
            } finally {
              ma(t);
            }
          else
            Ti(Xn | Mn, t, t.return);
          return;
        }
        case ce:
          return;
        case Te: {
          var c = t.stateNode;
          if (c != null) {
            var d = t.memoizedProps, v = e !== null ? e.memoizedProps : d, R = t.type, z = t.updateQueue;
            t.updateQueue = null, z !== null && no(c, z, R, v, d, t);
          }
          return;
        }
        case de: {
          if (t.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var A = t.stateNode, L = t.memoizedProps, V = e !== null ? e.memoizedProps : L;
          fi(A, V, L);
          return;
        }
        case xe: {
          if (Yn && e !== null) {
            var Z = e.memoizedState;
            if (Z.isDehydrated) {
              var te = t.stateNode;
              io(te.containerInfo);
            }
          }
          return;
        }
        case ie:
          return;
        case ee: {
          _g(t), nh(t);
          return;
        }
        case Ve: {
          nh(t);
          return;
        }
        case Pe:
          return;
      }
      throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _g(e) {
      e.memoizedState;
    }
    function S1(e, t) {
      if (Yn) {
        var a = t.memoizedState;
        if (a === null) {
          var l = t.alternate;
          if (l !== null) {
            var c = l.memoizedState;
            if (c !== null) {
              var d = c.dehydrated;
              d !== null && ao(d);
            }
          }
        }
      }
    }
    function nh(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new r1()), t.forEach(function(l) {
          var c = N_.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Ur)
              if (Zo !== null && Ko !== null)
                Nf(Ko, Zo);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(c, c);
          }
        });
      }
    }
    function _1(e) {
      Gr && Rs(e.stateNode);
    }
    function E1(e, t, a) {
      Zo = a, Ko = e, Oe = t, R1(e, a), Zo = null, Ko = null;
    }
    function R1(e, t) {
      for (; Oe !== null; ) {
        var a = Oe, l = a.deletions;
        if (l !== null)
          for (var c = 0; c < l.length; c++) {
            var d = l[c];
            try {
              x1(e, d, a);
            } catch (R) {
              zr(R), wr(d, a, R);
            }
          }
        var v = a.child;
        (a.subtreeFlags & en) !== pe && v !== null ? (ya(v, a), Oe = v) : T1(e, t);
      }
    }
    function T1(e, t) {
      for (; Oe !== null; ) {
        var a = Oe;
        Yt(a);
        try {
          b1(a, e, t);
        } catch (c) {
          zr(c), wr(a, a.return, c);
        }
        lr();
        var l = a.sibling;
        if (l !== null) {
          ya(l, a.return), Oe = l;
          return;
        }
        Oe = a.return;
      }
    }
    function b1(e, t, a) {
      var l = e.flags;
      if (l & Zi && _1(e), l & Ir) {
        var c = e.alternate;
        c !== null && p1(c);
      }
      if (l & si)
        switch (e.tag) {
          case ee: {
            var d = e.memoizedState, v = d !== null;
            if (v) {
              var R = e.alternate, z = R !== null && R.memoizedState !== null;
              z || y_();
            }
            break;
          }
          case rt: {
            var A = e.memoizedState, L = A !== null, V = e.alternate, Z = V !== null && V.memoizedState !== null, te = e;
            Gr && h1(te, L);
            {
              if (L && !Z && (te.mode & Zt) !== ot) {
                Oe = te;
                for (var fe = te.child; fe !== null; )
                  Oe = fe, M1(fe), fe = fe.sibling;
              }
              break;
            }
          }
        }
      var ye = l & (zt | ht | Kn);
      switch (ye) {
        case zt: {
          xg(e), e.flags &= ~zt;
          break;
        }
        case Ji: {
          xg(e), e.flags &= ~zt;
          var Xe = e.alternate;
          dm(Xe, e);
          break;
        }
        case Kn: {
          e.flags &= ~Kn;
          break;
        }
        case gs: {
          e.flags &= ~Kn;
          var yt = e.alternate;
          dm(yt, e);
          break;
        }
        case ht: {
          var nt = e.alternate;
          dm(nt, e);
          break;
        }
      }
    }
    function C1(e, t, a) {
      Zo = a, Ko = t, Oe = e, Eg(e, t, a), Zo = null, Ko = null;
    }
    function Eg(e, t, a) {
      for (var l = (e.mode & Zt) !== ot; Oe !== null; ) {
        var c = Oe, d = c.child;
        if (c.tag === rt && l) {
          var v = c.memoizedState !== null, R = v || $d;
          if (R) {
            hm(e, t, a);
            continue;
          } else {
            var z = c.alternate, A = z !== null && z.memoizedState !== null, L = A || Ql, V = $d, Z = Ql;
            $d = R, Ql = L, Ql && !Z && (Oe = c, z1(c));
            for (var te = d; te !== null; )
              Oe = te, Eg(
                te,
                // New root; bubble back up to here and stop.
                t,
                a
              ), te = te.sibling;
            Oe = c, $d = V, Ql = Z, hm(e, t, a);
            continue;
          }
        }
        (c.subtreeFlags & Bn) !== pe && d !== null ? (ya(d, c), Oe = d) : hm(e, t, a);
      }
    }
    function hm(e, t, a) {
      for (; Oe !== null; ) {
        var l = Oe;
        if ((l.flags & Bn) !== pe) {
          var c = l.alternate;
          Yt(l);
          try {
            f1(t, c, l, a);
          } catch (v) {
            zr(v), wr(l, l.return, v);
          }
          lr();
        }
        if (l === e) {
          Oe = null;
          return;
        }
        var d = l.sibling;
        if (d !== null) {
          ya(d, l.return), Oe = d;
          return;
        }
        Oe = l.return;
      }
    }
    function M1(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        switch (t.tag) {
          case ue:
          case H:
          case U:
          case j: {
            if (t.mode & kt)
              try {
                va(), Ti(Xn, t, t.return);
              } finally {
                ma(t);
              }
            else
              Ti(Xn, t, t.return);
            break;
          }
          case ce: {
            eh(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && om(t, t.return, l);
            break;
          }
          case Te: {
            eh(t, t.return);
            break;
          }
          case rt: {
            var c = t.memoizedState !== null;
            if (c) {
              Rg(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Oe = a) : Rg(e);
      }
    }
    function Rg(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        if (t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function z1(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        if (t.tag === rt) {
          var l = t.memoizedState !== null;
          if (l) {
            Tg(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Oe = a) : Tg(e);
      }
    }
    function Tg(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        Yt(t);
        try {
          d1(t);
        } catch (l) {
          zr(l), wr(t, t.return, l);
        }
        if (lr(), t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function w1(e, t) {
      Oe = t, D1(t, e);
    }
    function D1(e, t) {
      for (; Oe !== null; ) {
        var a = Oe, l = a.child;
        (a.subtreeFlags & Rr) !== pe && l !== null ? (ya(l, a), Oe = l) : A1(e, t);
      }
    }
    function A1(e, t) {
      for (; Oe !== null; ) {
        var a = Oe;
        if ((a.flags & ir) !== pe) {
          Yt(a);
          try {
            N1(t, a);
          } catch (c) {
            zr(c), wr(a, a.return, c);
          }
          lr();
        }
        if (a === e) {
          Oe = null;
          return;
        }
        var l = a.sibling;
        if (l !== null) {
          ya(l, a.return), Oe = l;
          return;
        }
        Oe = a.return;
      }
    }
    function N1(e, t) {
      switch (t.tag) {
        case ue:
        case H:
        case j: {
          if (t.mode & kt) {
            Ip();
            try {
              Xs(Cr | Mn, t);
            } finally {
              qp(t);
            }
          } else
            Xs(Cr | Mn, t);
          break;
        }
      }
    }
    function F1(e) {
      Oe = e, O1();
    }
    function O1() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        if ((Oe.flags & rr) !== pe) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var c = a[l];
              Oe = c, k1(c, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var v = d.child;
                if (v !== null) {
                  d.child = null;
                  do {
                    var R = v.sibling;
                    v.sibling = null, v = R;
                  } while (v !== null);
                }
              }
            }
            Oe = e;
          }
        }
        (e.subtreeFlags & Rr) !== pe && t !== null ? (ya(t, e), Oe = t) : U1();
      }
    }
    function U1() {
      for (; Oe !== null; ) {
        var e = Oe;
        (e.flags & ir) !== pe && (Yt(e), L1(e), lr());
        var t = e.sibling;
        if (t !== null) {
          ya(t, e.return), Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function L1(e) {
      switch (e.tag) {
        case ue:
        case H:
        case j: {
          e.mode & kt ? (Ip(), Ti(Cr | Mn, e, e.return), qp(e)) : Ti(Cr | Mn, e, e.return);
          break;
        }
      }
    }
    function k1(e, t) {
      for (; Oe !== null; ) {
        var a = Oe;
        Yt(a), H1(a, t), lr();
        var l = a.child;
        l !== null ? (ya(l, a), Oe = l) : B1(e);
      }
    }
    function B1(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.sibling, l = t.return;
        if (vg(t), t === e) {
          Oe = null;
          return;
        }
        if (a !== null) {
          ya(a, l), Oe = a;
          return;
        }
        Oe = l;
      }
    }
    function H1(e, t) {
      switch (e.tag) {
        case ue:
        case H:
        case j: {
          e.mode & kt ? (Ip(), Ti(Cr, e, t), qp(e)) : Ti(Cr, e, t);
          break;
        }
      }
    }
    var bg = !1;
    function ya(e, t) {
      !bg && e.return !== t && (bg = !0, x("Internal React error: Return pointer is inconsistent with parent.")), e.return = t;
    }
    function P1(e) {
      switch (e.tag) {
        case ue:
        case H:
        case j: {
          try {
            Xs(Xn | Mn, e);
          } catch (a) {
            zr(a), wr(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            zr(a), wr(e, e.return, a);
          }
          break;
        }
      }
    }
    function j1(e) {
      switch (e.tag) {
        case ue:
        case H:
        case j: {
          try {
            Xs(Cr | Mn, e);
          } catch (t) {
            zr(t), wr(e, e.return, t);
          }
          break;
        }
      }
    }
    function V1(e) {
      switch (e.tag) {
        case ue:
        case H:
        case j: {
          try {
            Ti(Xn | Mn, e, e.return);
          } catch (a) {
            zr(a), wr(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && om(e, e.return, t);
          break;
        }
      }
    }
    function Y1(e) {
      switch (e.tag) {
        case ue:
        case H:
        case j:
          try {
            Ti(Cr | Mn, e, e.return);
          } catch (t) {
            zr(t), wr(e, e.return, t);
          }
      }
    }
    var rh = 0, ih = 1, ah = 2, sh = 3, lh = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Rf = Symbol.for;
      rh = Rf("selector.component"), ih = Rf("selector.has_pseudo_class"), ah = Rf("selector.role"), sh = Rf("selector.test_id"), lh = Rf("selector.text");
    }
    function W1(e) {
      return {
        $$typeof: rh,
        value: e
      };
    }
    function q1(e) {
      return {
        $$typeof: ih,
        value: e
      };
    }
    function I1(e) {
      return {
        $$typeof: ah,
        value: e
      };
    }
    function Q1(e) {
      return {
        $$typeof: lh,
        value: e
      };
    }
    function G1(e) {
      return {
        $$typeof: sh,
        value: e
      };
    }
    function pm(e) {
      var t = il(e);
      if (t != null) {
        if (typeof t.memoizedProps["data-testname"] != "string")
          throw new Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");
        return t;
      } else {
        var a = uu(e);
        if (a === null)
          throw new Error("Could not find React container within specified host subtree.");
        return a.stateNode.current;
      }
    }
    function mm(e, t) {
      switch (t.$$typeof) {
        case rh:
          if (e.type === t.value)
            return !0;
          break;
        case ih:
          return X1(e, t.value);
        case ah:
          if (e.tag === Te) {
            var a = e.stateNode;
            if (ou(a, t.value))
              return !0;
          }
          break;
        case lh:
          if (e.tag === Te || e.tag === de) {
            var l = eo(e);
            if (l !== null && l.indexOf(t.value) >= 0)
              return !0;
          }
          break;
        case sh:
          if (e.tag === Te) {
            var c = e.memoizedProps["data-testname"];
            if (typeof c == "string" && c.toLowerCase() === t.value.toLowerCase())
              return !0;
          }
          break;
        default:
          throw new Error("Invalid selector type specified.");
      }
      return !1;
    }
    function vm(e) {
      switch (e.$$typeof) {
        case rh:
          var t = Fe(e.value) || "Unknown";
          return "<" + t + ">";
        case ih:
          return ":has(" + (vm(e) || "") + ")";
        case ah:
          return '[role="' + e.value + '"]';
        case lh:
          return '"' + e.value + '"';
        case sh:
          return '[data-testname="' + e.value + '"]';
        default:
          throw new Error("Invalid selector type specified.");
      }
    }
    function Cg(e, t) {
      for (var a = [], l = [e, 0], c = 0; c < l.length; ) {
        var d = l[c++], v = l[c++], R = t[v];
        if (!(d.tag === Te && on(d))) {
          for (; R != null && mm(d, R); )
            v++, R = t[v];
          if (v === t.length)
            a.push(d);
          else
            for (var z = d.child; z !== null; )
              l.push(z, v), z = z.sibling;
        }
      }
      return a;
    }
    function X1(e, t) {
      for (var a = [e, 0], l = 0; l < a.length; ) {
        var c = a[l++], d = a[l++], v = t[d];
        if (!(c.tag === Te && on(c))) {
          for (; v != null && mm(c, v); )
            d++, v = t[d];
          if (d === t.length)
            return !0;
          for (var R = c.child; R !== null; )
            a.push(R, d), R = R.sibling;
        }
      }
      return !1;
    }
    function uh(e, t) {
      if (!Fi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var a = pm(e), l = Cg(a, t), c = [], d = Array.from(l), v = 0; v < d.length; ) {
        var R = d[v++];
        if (R.tag === Te) {
          if (on(R))
            continue;
          c.push(R.stateNode);
        } else
          for (var z = R.child; z !== null; )
            d.push(z), z = z.sibling;
      }
      return c;
    }
    function J1(e, t) {
      if (!Fi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var a = pm(e), l = 0, c = [], d = [a, 0], v = 0; v < d.length; ) {
        var R = d[v++], z = d[v++], A = t[z];
        if (!(R.tag === Te && on(R)) && (mm(R, A) && (c.push(vm(A)), z++, z > l && (l = z)), z < t.length))
          for (var L = R.child; L !== null; )
            d.push(L, z), L = L.sibling;
      }
      if (l < t.length) {
        for (var V = [], Z = l; Z < t.length; Z++)
          V.push(vm(t[Z]));
        return `findAllNodes was able to match part of the selector:
` + ("  " + c.join(" > ") + `

`) + `No matching component was found for:
` + ("  " + V.join(" > "));
      }
      return null;
    }
    function Z1(e, t) {
      if (!Fi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var a = uh(e, t), l = [], c = 0; c < a.length; c++)
        l.push(xc(a[c]));
      for (var d = l.length - 1; d > 0; d--)
        for (var v = l[d], R = v.x, z = R + v.width, A = v.y, L = A + v.height, V = d - 1; V >= 0; V--)
          if (d !== V) {
            var Z = l[V], te = Z.x, fe = te + Z.width, ye = Z.y, Xe = ye + Z.height;
            if (R >= te && A >= ye && z <= fe && L <= Xe) {
              l.splice(d, 1);
              break;
            } else if (R === te && v.width === Z.width && !(Xe < A) && !(ye > L)) {
              ye > A && (Z.height += ye - A, Z.y = A), Xe < L && (Z.height = L - ye), l.splice(d, 1);
              break;
            } else if (A === ye && v.height === Z.height && !(fe < R) && !(te > z)) {
              te > R && (Z.width += te - R, Z.x = R), fe < z && (Z.width = z - te), l.splice(d, 1);
              break;
            }
          }
      return l;
    }
    function K1(e, t) {
      if (!Fi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var a = pm(e), l = Cg(a, t), c = Array.from(l), d = 0; d < c.length; ) {
        var v = c[d++];
        if (!on(v)) {
          if (v.tag === Te) {
            var R = v.stateNode;
            if (Sc(R))
              return !0;
          }
          for (var z = v.child; z !== null; )
            c.push(z), z = z.sibling;
        }
      }
      return !1;
    }
    var oh = [];
    function $1() {
      Fi && oh.forEach(function(e) {
        return e();
      });
    }
    function e_(e, t, a, l) {
      if (!Fi)
        throw new Error("Test selector API is not supported by this renderer.");
      var c = uh(e, t), d = cu(c, a, l), v = d.disconnect, R = d.observe, z = d.unobserve, A = function() {
        var L = uh(e, t);
        c.forEach(function(V) {
          L.indexOf(V) < 0 && z(V);
        }), L.forEach(function(V) {
          c.indexOf(V) < 0 && R(V);
        });
      };
      return oh.push(A), {
        disconnect: function() {
          var L = oh.indexOf(A);
          L >= 0 && oh.splice(L, 1), v();
        }
      };
    }
    var t_ = m.ReactCurrentActQueue;
    function n_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return Ta && a && t !== !1;
      }
    }
    function Mg() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && t_.current !== null && x("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var r_ = Math.ceil, ym = m.ReactCurrentDispatcher, gm = m.ReactCurrentOwner, zn = m.ReactCurrentBatchConfig, Ba = m.ReactCurrentActQueue, er = (
      /*             */
      0
    ), xm = (
      /*               */
      1
    ), Vr = (
      /*                */
      2
    ), Ha = (
      /*                */
      4
    ), Js = 0, Tf = 1, Wu = 2, ch = 3, bf = 4, zg = 5, Sm = 6, _t = er, Yr = null, wn = null, cr = oe, ds = oe, _m = na(oe), fr = Js, Cf = null, fh = oe, Mf = oe, dh = oe, zf = null, bi = null, Em = 0, wg = 500, Dg = 1 / 0, i_ = 500;
    function $o() {
      Dg = Tn() + i_;
    }
    function Ag() {
      return Dg;
    }
    var hh = !1, Rm = null, ec = null, qu = !1, Zs = null, wf = oe, Tm = [], a_ = 50, Df = 0, bm = null, s_ = 50, ph = 0, Af = ln, mh = oe;
    function vh() {
      return Yr;
    }
    function ii() {
      return (_t & (Vr | Ha)) !== er ? Tn() : (Af !== ln || (Af = Tn()), Af);
    }
    function Gl(e) {
      var t = e.mode;
      if ((t & Zt) === ot)
        return Ct;
      if ((_t & Vr) !== er && cr !== oe)
        return Cl(cr);
      var a = ef() !== dd;
      if (a) {
        if (zn.transition !== null) {
          var l = zn.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return mh === In && (mh = rd()), mh;
      }
      var c = $r();
      if (c !== In)
        return c;
      var d = gc();
      return d;
    }
    function l_(e) {
      var t = e.mode;
      return (t & Zt) === ot ? Ct : id();
    }
    function dr(e, t, a) {
      O_();
      var l = yh(e, t);
      return l === null ? null : (Us(l, t, a), (_t & Vr) !== oe && l === Yr ? k_(e) : (Ur && Pc(l, e, t), B_(e), l === Yr && ((_t & Vr) === er && (Mf = mt(Mf, t)), fr === bf && Xl(l, cr)), Ci(l, a), t === Ct && _t === er && (e.mode & Zt) === ot && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ba.isBatchingLegacy && ($o(), $c())), l);
    }
    function u_(e, t, a) {
      var l = e.current;
      l.lanes = t, Us(e, t, a), Ci(e, a);
    }
    function yh(e, t) {
      e.lanes = mt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = mt(a.lanes, t)), a === null && (e.flags & (zt | Kn)) !== pe && qg(e);
      for (var l = e, c = e.return; c !== null; )
        c.childLanes = mt(c.childLanes, t), a = c.alternate, a !== null ? a.childLanes = mt(a.childLanes, t) : (c.flags & (zt | Kn)) !== pe && qg(e), l = c, c = c.return;
      if (l.tag === xe) {
        var d = l.stateNode;
        return d;
      } else
        return null;
    }
    function Ng(e, t) {
      return (
        // TODO: Optimize slightly by comparing to root that fiber belongs to.
        // Requires some refactoring. Not a big deal though since it's rare for
        // concurrent apps to have more than a single root.
        Yr !== null && (e.mode & Zt) !== ot && // If this is a render phase update (i.e. UNSAFE_componentWillReceiveProps),
        // then don't treat this as an interleaved update. This pattern is
        // accompanied by a warning but we haven't fully deprecated it yet. We can
        // remove once the deferRenderPhaseUpdateToNextBatch flag is enabled.
        (_t & Vr) === er
      );
    }
    function Ci(e, t) {
      var a = e.callbackNode;
      td(e, t);
      var l = Cu(e, e === Yr ? cr : oe);
      if (l === oe) {
        a !== null && Qg(a), e.callbackNode = null, e.callbackPriority = In;
        return;
      }
      var c = la(l), d = e.callbackPriority;
      if (d === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ba.current !== null && a !== Am)) {
        a == null && d !== Ct && x("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Qg(a);
      var v;
      if (c === Ct)
        e.tag === ws ? (Ba.isBatchingLegacy !== null && (Ba.didScheduleLegacyUpdate = !0), cd(Ug.bind(null, e))) : Fa(Ug.bind(null, e)), Ft ? Ba.current !== null ? Ba.current.push(Si) : lu(function() {
          _t === er && Si();
        }) : Th(Hs, Si), v = null;
      else {
        var R;
        switch (Yc(l)) {
          case Pi:
            R = Hs;
            break;
          case wl:
            R = Mu;
            break;
          case Dl:
            R = Aa;
            break;
          case Do:
            R = Al;
            break;
          default:
            R = Aa;
            break;
        }
        v = Th(R, Fg.bind(null, e));
      }
      e.callbackPriority = c, e.callbackNode = v;
    }
    function Fg(e, t) {
      if (SS(), Af = ln, mh = oe, (_t & (Vr | Ha)) !== er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = hs();
      if (l && e.callbackNode !== a)
        return null;
      var c = Cu(e, e === Yr ? cr : oe);
      if (c === oe)
        return null;
      var d = !Fs(e, c) && !nd(e, c) && !t, v = d ? E_(e, c) : _h(e, c);
      if (v !== Js) {
        if (v === Wu) {
          var R = bo(e);
          R !== oe && (c = R, v = Cm(e, R));
        }
        if (v === Tf) {
          var z = Cf;
          throw Iu(e, oe), Xl(e, c), Ci(e, Tn()), z;
        }
        if (v === Sm)
          Xl(e, c);
        else {
          var A = !Fs(e, c), L = e.current.alternate;
          if (A && !c_(L)) {
            if (v = _h(e, c), v === Wu) {
              var V = bo(e);
              V !== oe && (c = V, v = Cm(e, V));
            }
            if (v === Tf) {
              var Z = Cf;
              throw Iu(e, oe), Xl(e, c), Ci(e, Tn()), Z;
            }
          }
          e.finishedWork = L, e.finishedLanes = c, o_(e, v, c);
        }
      }
      return Ci(e, Tn()), e.callbackNode === a ? Fg.bind(null, e) : null;
    }
    function Cm(e, t) {
      var a = zf;
      if (as(e)) {
        var l = Iu(e, t);
        l.flags |= _r, Zr(e.containerInfo);
      }
      var c = _h(e, t);
      if (c !== Wu) {
        var d = bi;
        bi = a, d !== null && Og(d);
      }
      return c;
    }
    function Og(e) {
      bi === null ? bi = e : bi.push.apply(bi, e);
    }
    function o_(e, t, a) {
      switch (t) {
        case Js:
        case Tf:
          throw new Error("Root did not complete. This is a bug in React.");
        case Wu: {
          Qu(e, bi);
          break;
        }
        case ch: {
          if (Xl(e, a), Bc(a) && // do not delay if we're inside an act() scope
          !Gg()) {
            var l = Em + wg - Tn();
            if (l > 10) {
              var c = Cu(e, oe);
              if (c !== oe)
                break;
              var d = e.suspendedLanes;
              if (!Ml(d, a)) {
                ii(), sd(e, d);
                break;
              }
              e.timeoutHandle = $u(Qu.bind(null, e, bi), l);
              break;
            }
          }
          Qu(e, bi);
          break;
        }
        case bf: {
          if (Xl(e, a), Mo(a))
            break;
          if (!Gg()) {
            var v = $f(e, a), R = v, z = Tn() - R, A = F_(z) - z;
            if (A > 10) {
              e.timeoutHandle = $u(Qu.bind(null, e, bi), A);
              break;
            }
          }
          Qu(e, bi);
          break;
        }
        case zg: {
          Qu(e, bi);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function c_(e) {
      for (var t = e; ; ) {
        if (t.flags & qa) {
          var a = t.updateQueue;
          if (a !== null) {
            var l = a.stores;
            if (l !== null)
              for (var c = 0; c < l.length; c++) {
                var d = l[c], v = d.getSnapshot, R = d.value;
                try {
                  if (!ti(v(), R))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var z = t.child;
        if (t.subtreeFlags & qa && z !== null) {
          z.return = t, t = z;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Xl(e, t) {
      t = Os(t, dh), t = Os(t, Mf), ad(e, t);
    }
    function Ug(e) {
      if (_S(), (_t & (Vr | Ha)) !== er)
        throw new Error("Should not already be working.");
      hs();
      var t = Cu(e, oe);
      if (!Rn(t, Ct))
        return Ci(e, Tn()), null;
      var a = _h(e, t);
      if (e.tag !== ws && a === Wu) {
        var l = bo(e);
        l !== oe && (t = l, a = Cm(e, l));
      }
      if (a === Tf) {
        var c = Cf;
        throw Iu(e, oe), Xl(e, t), Ci(e, Tn()), c;
      }
      if (a === Sm)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Qu(e, bi), Ci(e, Tn()), null;
    }
    function f_(e, t) {
      t !== oe && (ks(e, mt(t, Ct)), Ci(e, Tn()), (_t & (Vr | Ha)) === er && ($o(), Si()));
    }
    function d_(e) {
      var t = $r(), a = zn.transition;
      try {
        return zn.transition = null, Qn(Dl), e();
      } finally {
        Qn(t), zn.transition = a;
      }
    }
    function h_(e, t) {
      var a = _t;
      _t |= xm;
      try {
        return e(t);
      } finally {
        _t = a, _t === er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ba.isBatchingLegacy && ($o(), $c());
      }
    }
    function p_(e, t, a, l, c) {
      var d = $r(), v = zn.transition;
      try {
        return zn.transition = null, Qn(Pi), e(t, a, l, c);
      } finally {
        Qn(d), zn.transition = v, _t === er && $o();
      }
    }
    function gh(e) {
      Zs !== null && Zs.tag === ws && (_t & (Vr | Ha)) === er && hs();
      var t = _t;
      _t |= xm;
      var a = zn.transition, l = $r();
      try {
        return zn.transition = null, Qn(Pi), e ? e() : void 0;
      } finally {
        Qn(l), zn.transition = a, _t = t, (_t & (Vr | Ha)) === er && Si();
      }
    }
    function m_() {
      return (_t & (Vr | Ha)) !== er;
    }
    function v_(e) {
      var t = _t;
      _t |= xm;
      var a = zn.transition, l = $r();
      try {
        zn.transition = null, Qn(Pi), e();
      } finally {
        Qn(l), zn.transition = a, _t = t, _t === er && ($o(), Si());
      }
    }
    function xh(e, t) {
      tn(_m, ds, e), ds = mt(ds, t);
    }
    function Mm(e) {
      ds = _m.current, Wn(_m, e);
    }
    function Iu(e, t) {
      e.finishedWork = null, e.finishedLanes = oe;
      var a = e.timeoutHandle;
      if (a !== Ra && (e.timeoutHandle = Ra, Ea(a)), wn !== null)
        for (var l = wn.return; l !== null; ) {
          var c = l.alternate;
          ig(c, l), l = l.return;
        }
      Yr = e;
      var d = Gu(e.current, null);
      return wn = d, cr = ds = t, fr = Js, Cf = null, fh = oe, Mf = oe, dh = oe, zf = null, bi = null, sn(), _i.discardPendingWarnings(), d;
    }
    function Lg(e, t) {
      do {
        var a = wn;
        try {
          if (i(), ry(), lr(), gm.current = null, a === null || a.return === null) {
            fr = Tf, Cf = t, wn = null;
            return;
          }
          if (Re && a.mode & kt && Yd(a, !0), Ce)
            if (Na(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              Oo(a, l, cr);
            } else
              ns(a, t, cr);
          CS(e, a.return, a, t, cr), Pg(a);
        } catch (c) {
          t = c, wn === a && a !== null ? (a = a.return, wn = a) : a = wn;
          continue;
        }
        return;
      } while (!0);
    }
    function kg() {
      var e = ym.current;
      return ym.current = Bd, e === null ? Bd : e;
    }
    function Bg(e) {
      ym.current = e;
    }
    function y_() {
      Em = Tn();
    }
    function Sh(e) {
      fh = mt(e, fh);
    }
    function g_() {
      fr === Js && (fr = ch);
    }
    function zm() {
      (fr === Js || fr === ch || fr === Wu) && (fr = bf), Yr !== null && (Co(fh) || Co(Mf)) && Xl(Yr, cr);
    }
    function x_(e) {
      fr !== bf && (fr = Wu), zf === null ? zf = [e] : zf.push(e);
    }
    function S_() {
      return fr === Js;
    }
    function _h(e, t) {
      var a = _t;
      _t |= Vr;
      var l = kg();
      if (Yr !== e || cr !== t) {
        if (Ur) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (Nf(e, cr), c.clear()), jc(e, t);
        }
        Iu(e, t);
      }
      Au(t);
      do
        try {
          __();
          break;
        } catch (d) {
          Lg(e, d);
        }
      while (!0);
      if (i(), _t = a, Bg(l), wn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return gr(), Yr = null, cr = oe, fr;
    }
    function __() {
      for (; wn !== null; )
        Hg(wn);
    }
    function E_(e, t) {
      var a = _t;
      _t |= Vr;
      var l = kg();
      if (Yr !== e || cr !== t) {
        if (Ur) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (Nf(e, cr), c.clear()), jc(e, t);
        }
        $o(), Iu(e, t);
      }
      Au(t);
      do
        try {
          R_();
          break;
        } catch (d) {
          Lg(e, d);
        }
      while (!0);
      return i(), Bg(l), _t = a, wn !== null ? (Lo(), Js) : (gr(), Yr = null, cr = oe, fr);
    }
    function R_() {
      for (; wn !== null && !od(); )
        Hg(wn);
    }
    function Hg(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & kt) !== ot ? (Wp(e), a = wm(t, e, ds), Yd(e, !0)) : a = wm(t, e, ds), lr(), e.memoizedProps = e.pendingProps, a === null ? Pg(e) : wn = a, gm.current = null;
    }
    function Pg(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & O) === pe) {
          Yt(t);
          var c = void 0;
          if ((t.mode & kt) === ot ? c = ky(a, t, ds) : (Wp(t), c = ky(a, t, ds), Yd(t, !1)), lr(), c !== null) {
            wn = c;
            return;
          }
        } else {
          var d = $S(a, t);
          if (d !== null) {
            d.flags &= tl, wn = d;
            return;
          }
          if ((t.mode & kt) !== ot) {
            Yd(t, !1);
            for (var v = t.actualDuration, R = t.child; R !== null; )
              v += R.actualDuration, R = R.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= O, l.subtreeFlags = pe, l.deletions = null;
          else {
            fr = Sm, wn = null;
            return;
          }
        }
        var z = t.sibling;
        if (z !== null) {
          wn = z;
          return;
        }
        t = l, wn = t;
      } while (t !== null);
      fr === Js && (fr = zg);
    }
    function Qu(e, t) {
      var a = $r(), l = zn.transition;
      try {
        zn.transition = null, Qn(Pi), T_(e, t, a);
      } finally {
        zn.transition = l, Qn(a);
      }
      return null;
    }
    function T_(e, t, a) {
      do
        hs();
      while (Zs !== null);
      if (U_(), (_t & (Vr | Ha)) !== er)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (Gn(c), l === null)
        return Fl(), null;
      if (c === oe && x("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = oe, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = In;
      var d = mt(l.lanes, l.childLanes);
      Ls(e, d), e === Yr && (Yr = null, wn = null, cr = oe), ((l.subtreeFlags & Rr) !== pe || (l.flags & Rr) !== pe) && (qu || (qu = !0, Th(Aa, function() {
        return hs(), null;
      })));
      var v = (l.subtreeFlags & (rn | en | Bn | Rr)) !== pe, R = (l.flags & (rn | en | Bn | Rr)) !== pe;
      if (v || R) {
        var z = zn.transition;
        zn.transition = null;
        var A = $r();
        Qn(Pi);
        var L = _t;
        _t |= Ha, gm.current = null, s1(e, l), zy(), E1(e, l, c), nl(e.containerInfo), e.current = l, rs(c), C1(l, e, c), Uo(), No(), _t = L, Qn(A), zn.transition = z;
      } else
        e.current = l, zy();
      var V = qu;
      if (qu && (qu = !1, Zs = e, wf = c), d = e.pendingLanes, d === oe && (ec = null), V || Wg(e.current, !1), xt(l.stateNode, a), Ur && e.memoizedUpdaters.clear(), $1(), Ci(e, Tn()), t !== null)
        for (var Z = e.onRecoverableError, te = 0; te < t.length; te++) {
          var fe = t[te];
          Z(fe);
        }
      if (hh) {
        hh = !1;
        var ye = Rm;
        throw Rm = null, ye;
      }
      return Rn(wf, Ct) && e.tag !== ws && hs(), d = e.pendingLanes, Rn(d, Ct) ? (xS(), e === bm ? Df++ : (Df = 0, bm = e)) : Df = 0, Si(), Fl(), null;
    }
    function hs() {
      if (Zs !== null) {
        var e = Yc(wf), t = Yh(Dl, e), a = zn.transition, l = $r();
        try {
          return zn.transition = null, Qn(t), C_();
        } finally {
          Qn(l), zn.transition = a;
        }
      }
      return !1;
    }
    function b_(e) {
      Tm.push(e), qu || (qu = !0, Th(Aa, function() {
        return hs(), null;
      }));
    }
    function C_() {
      if (Zs === null)
        return !1;
      var e = Zs, t = wf;
      if (Zs = null, wf = oe, (_t & (Vr | Ha)) !== er)
        throw new Error("Cannot flush passive effects while already rendering.");
      Du(t);
      var a = _t;
      _t |= Ha, F1(e.current), w1(e, e.current);
      {
        var l = Tm;
        Tm = [];
        for (var c = 0; c < l.length; c++) {
          var d = l[c];
          c1(e, d);
        }
      }
      Zc(), Wg(e.current, !0), _t = a, Si(), ph = Zs === null ? 0 : ph + 1, Hn(e);
      {
        var v = e.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function jg(e) {
      return ec !== null && ec.has(e);
    }
    function M_(e) {
      ec === null ? ec = /* @__PURE__ */ new Set([e]) : ec.add(e);
    }
    function z_(e) {
      hh || (hh = !0, Rm = e);
    }
    var w_ = z_;
    function Vg(e, t, a) {
      var l = Wd(a, t), c = Dy(e, l, Ct);
      St(e, c);
      var d = ii(), v = yh(e, Ct);
      v !== null && (Us(v, Ct, d), Ci(v, d));
    }
    function wr(e, t, a) {
      if (e.tag === xe) {
        Vg(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === xe) {
          Vg(l, e, a);
          return;
        } else if (l.tag === ce) {
          var c = l.type, d = l.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !jg(d)) {
            var v = Wd(a, e), R = Xp(l, v, Ct);
            St(l, R);
            var z = ii(), A = yh(l, Ct);
            A !== null && (Us(A, Ct, z), Ci(A, z));
            return;
          }
        }
        l = l.return;
      }
      x(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function D_(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var c = ii();
      sd(e, a), H_(e), Yr === e && Ml(cr, a) && (fr === bf || fr === ch && Bc(cr) && Tn() - Em < wg ? Iu(e, oe) : dh = mt(dh, a)), Ci(e, c);
    }
    function Yg(e, t) {
      t === In && (t = l_(e));
      var a = ii(), l = yh(e, t);
      l !== null && (Us(l, t, a), Ci(l, a));
    }
    function A_(e) {
      var t = e.memoizedState, a = In;
      t !== null && (a = t.retryLane), Yg(e, a);
    }
    function N_(e, t) {
      var a = In, l;
      switch (e.tag) {
        case ee:
          l = e.stateNode;
          var c = e.memoizedState;
          c !== null && (a = c.retryLane);
          break;
        case Ve:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), Yg(e, a);
    }
    function F_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : r_(e / 1960) * 1960;
    }
    function O_() {
      if (Df > a_)
        throw Df = 0, bm = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ph > s_ && (ph = 0, x("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function U_() {
      _i.flushLegacyContextWarning(), _i.flushPendingUnsafeLifecycleWarnings();
    }
    function Wg(e, t) {
      Yt(e), Eh(e, st, V1), t && Eh(e, yn, Y1), Eh(e, st, P1), t && Eh(e, yn, j1), lr();
    }
    function Eh(e, t, a) {
      for (var l = e, c = null; l !== null; ) {
        var d = l.subtreeFlags & t;
        l !== c && l.child !== null && d !== pe ? l = l.child : ((l.flags & t) !== pe && a(l), l.sibling !== null ? l = l.sibling : l = c = l.return);
      }
    }
    var Rh = null;
    function qg(e) {
      {
        if ((_t & Vr) !== er || !(e.mode & Zt))
          return;
        var t = e.tag;
        if (t !== Ke && t !== xe && t !== ce && t !== ue && t !== H && t !== U && t !== j)
          return;
        var a = Ye(e) || "ReactComponent";
        if (Rh !== null) {
          if (Rh.has(a))
            return;
          Rh.add(a);
        } else
          Rh = /* @__PURE__ */ new Set([a]);
        var l = ni;
        try {
          Yt(e), x("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Yt(e) : lr();
        }
      }
    }
    var wm;
    {
      var L_ = null;
      wm = function(e, t, a) {
        var l = $g(L_, t);
        try {
          return rg(e, t, a);
        } catch (d) {
          if (d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (i(), ry(), ig(e, t), $g(t, l), t.mode & kt && Wp(t), lg(null, rg, null, e, t, a), n1()) {
            var c = ug();
            typeof c == "object" && c !== null && c._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var Ig = !1, Dm;
    Dm = /* @__PURE__ */ new Set();
    function k_(e) {
      if (Vi && !vS())
        switch (e.tag) {
          case ue:
          case H:
          case j: {
            var t = wn && Ye(wn) || "Unknown", a = t;
            if (!Dm.has(a)) {
              Dm.add(a);
              var l = Ye(e) || "Unknown";
              x("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case ce: {
            Ig || (x("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Ig = !0);
            break;
          }
        }
    }
    function Nf(e, t) {
      if (Ur) {
        var a = e.memoizedUpdaters;
        a.forEach(function(l) {
          Pc(e, l, t);
        });
      }
    }
    var Am = {};
    function Th(e, t) {
      {
        var a = Ba.current;
        return a !== null ? (a.push(t), Am) : Wc(e, t);
      }
    }
    function Qg(e) {
      if (e !== Am)
        return ud(e);
    }
    function Gg() {
      return Ba.current !== null;
    }
    function B_(e) {
      {
        if (e.mode & Zt) {
          if (!Mg())
            return;
        } else if (!n_() || _t !== er || e.tag !== ue && e.tag !== H && e.tag !== j)
          return;
        if (Ba.current === null) {
          var t = ni;
          try {
            Yt(e), x(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Yt(e) : lr();
          }
        }
      }
    }
    function H_(e) {
      e.tag !== ws && Mg() && Ba.current === null && x(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    var ga = null, tc = null, P_ = function(e) {
      ga = e;
    };
    function nc(e) {
      {
        if (ga === null)
          return e;
        var t = ga(e);
        return t === void 0 ? e : t.current;
      }
    }
    function Nm(e) {
      return nc(e);
    }
    function Fm(e) {
      {
        if (ga === null)
          return e;
        var t = ga(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = nc(e.render);
            if (e.render !== a) {
              var l = {
                $$typeof: Ln,
                render: a
              };
              return e.displayName !== void 0 && (l.displayName = e.displayName), l;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Xg(e, t) {
      {
        if (ga === null)
          return !1;
        var a = e.elementType, l = t.type, c = !1, d = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case ce: {
            typeof l == "function" && (c = !0);
            break;
          }
          case ue: {
            (typeof l == "function" || d === Bt) && (c = !0);
            break;
          }
          case H: {
            (d === Ln || d === Bt) && (c = !0);
            break;
          }
          case U:
          case j: {
            (d === kn || d === Bt) && (c = !0);
            break;
          }
          default:
            return !1;
        }
        if (c) {
          var v = ga(a);
          if (v !== void 0 && v === ga(l))
            return !0;
        }
        return !1;
      }
    }
    function Jg(e) {
      {
        if (ga === null || typeof WeakSet != "function")
          return;
        tc === null && (tc = /* @__PURE__ */ new WeakSet()), tc.add(e);
      }
    }
    var j_ = function(e, t) {
      {
        if (ga === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        hs(), gh(function() {
          Om(e.current, l, a);
        });
      }
    }, V_ = function(e, t) {
      {
        if (e.context !== Ot)
          return;
        hs(), gh(function() {
          n0(t, e, null, null);
        });
      }
    };
    function Om(e, t, a) {
      {
        var l = e.alternate, c = e.child, d = e.sibling, v = e.tag, R = e.type, z = null;
        switch (v) {
          case ue:
          case j:
          case ce:
            z = R;
            break;
          case H:
            z = R.render;
            break;
        }
        if (ga === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var A = !1, L = !1;
        if (z !== null) {
          var V = ga(z);
          V !== void 0 && (a.has(V) ? L = !0 : t.has(V) && (v === ce ? L = !0 : A = !0));
        }
        tc !== null && (tc.has(e) || l !== null && tc.has(l)) && (L = !0), L && (e._debugNeedsRemount = !0), (L || A) && dr(e, Ct, ln), c !== null && !L && Om(c, t, a), d !== null && Om(d, t, a);
      }
    }
    var Y_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(c) {
          return c.current;
        }));
        return Um(e.current, l, a), a;
      }
    };
    function Um(e, t, a) {
      {
        var l = e.child, c = e.sibling, d = e.tag, v = e.type, R = null;
        switch (d) {
          case ue:
          case j:
          case ce:
            R = v;
            break;
          case H:
            R = v.render;
            break;
        }
        var z = !1;
        R !== null && t.has(R) && (z = !0), z ? W_(e, a) : l !== null && Um(l, t, a), c !== null && Um(c, t, a);
      }
    }
    function W_(e, t) {
      {
        var a = q_(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case Te:
              t.add(l.stateNode);
              return;
            case ze:
              t.add(l.stateNode.containerInfo);
              return;
            case xe:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function q_(e, t) {
      for (var a = e, l = !1; ; ) {
        if (a.tag === Te)
          l = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return l;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return l;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var Lm;
    {
      Lm = !1;
      try {
        var Zg = Object.preventExtensions({});
      } catch {
        Lm = !0;
      }
    }
    function I_(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = pe, this.subtreeFlags = pe, this.deletions = null, this.lanes = oe, this.childLanes = oe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Lm && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Yi = function(e, t, a, l) {
      return new I_(e, t, a, l);
    };
    function km(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Q_(e) {
      return typeof e == "function" && !km(e) && e.defaultProps === void 0;
    }
    function G_(e) {
      if (typeof e == "function")
        return km(e) ? ce : ue;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ln)
          return H;
        if (t === kn)
          return U;
      }
      return Ke;
    }
    function Gu(e, t) {
      var a = e.alternate;
      a === null ? (a = Yi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = pe, a.subtreeFlags = pe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Sn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ke:
        case ue:
        case j:
          a.type = nc(e.type);
          break;
        case ce:
          a.type = Nm(e.type);
          break;
        case H:
          a.type = Fm(e.type);
          break;
      }
      return a;
    }
    function X_(e, t) {
      e.flags &= Sn | zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = oe, e.lanes = t, e.child = null, e.subtreeFlags = pe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = pe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var l = a.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function J_(e, t, a) {
      var l;
      return e === wc ? (l = Zt, t === !0 && (l |= En, l |= yi)) : l = ot, Ur && (l |= kt), Yi(xe, null, null, l);
    }
    function Bm(e, t, a, l, c, d) {
      var v = Ke, R = e;
      if (typeof e == "function")
        km(e) ? (v = ce, R = Nm(R)) : R = nc(R);
      else if (typeof e == "string")
        v = Te;
      else
        e:
          switch (e) {
            case Fn:
              return Jl(a.children, c, d, t);
            case On:
              v = ft, c |= En, (c & Zt) !== ot && (c |= yi);
              break;
            case Un:
              return Z_(a, c, d, t);
            case pn:
              return K_(a, c, d, t);
            case hr:
              return $_(a, c, d, t);
            case mr:
              return Kg(a, c, d, t);
            case Zn:
            case pr:
            case Di:
            case Xi:
            case ai:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case jn:
                    v = _e;
                    break e;
                  case Ar:
                    v = ut;
                    break e;
                  case Ln:
                    v = H, R = Fm(R);
                    break e;
                  case kn:
                    v = U;
                    break e;
                  case Bt:
                    v = je, R = null;
                    break e;
                }
              var z = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var A = l ? Ye(l) : null;
                A && (z += `

Check the render method of \`` + A + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + z));
            }
          }
      var L = Yi(v, a, t, c);
      return L.elementType = e, L.type = R, L.lanes = d, L._debugOwner = l, L;
    }
    function Hm(e, t, a) {
      var l = null;
      l = e._owner;
      var c = e.type, d = e.key, v = e.props, R = Bm(c, d, v, l, t, a);
      return R._debugSource = e._source, R._debugOwner = e._owner, R;
    }
    function Jl(e, t, a, l) {
      var c = Yi(Ue, e, l, t);
      return c.lanes = a, c;
    }
    function Z_(e, t, a, l) {
      typeof e.id != "string" && x('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var c = Yi(ie, e, l, t | kt);
      return c.elementType = Un, c.lanes = a, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function K_(e, t, a, l) {
      var c = Yi(ee, e, l, t);
      return c.elementType = pn, c.lanes = a, c;
    }
    function $_(e, t, a, l) {
      var c = Yi(Ve, e, l, t);
      return c.elementType = hr, c.lanes = a, c;
    }
    function Kg(e, t, a, l) {
      var c = Yi(rt, e, l, t);
      c.elementType = mr, c.lanes = a;
      var d = {};
      return c.stateNode = d, c;
    }
    function Pm(e, t, a) {
      var l = Yi(de, e, null, t);
      return l.lanes = a, l;
    }
    function eE() {
      var e = Yi(Te, null, null, ot);
      return e.elementType = "DELETED", e;
    }
    function tE(e) {
      var t = Yi(Je, null, null, ot);
      return t.stateNode = e, t;
    }
    function jm(e, t, a) {
      var l = e.children !== null ? e.children : [], c = Yi(ze, l, e.key, t);
      return c.lanes = a, c.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, c;
    }
    function $g(e, t) {
      return e === null && (e = Yi(Ke, null, null, ot)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function nE(e, t, a, l, c) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ra, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = In, this.eventTimes = zl(oe), this.expirationTimes = zl(ln), this.pendingLanes = oe, this.suspendedLanes = oe, this.pingedLanes = oe, this.expiredLanes = oe, this.mutableReadLanes = oe, this.finishedLanes = oe, this.entangledLanes = oe, this.entanglements = zl(oe), this.identifierPrefix = l, this.onRecoverableError = c, Yn && (this.mutableSourceEagerHydrationData = null), this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < _u; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case wc:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ws:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function e0(e, t, a, l, c, d, v, R, z, A) {
      var L = new nE(e, t, a, R, z), V = J_(t, d);
      L.current = V, V.stateNode = L;
      {
        var Z = {
          element: l,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null
        };
        V.memoizedState = Z;
      }
      return We(V), L;
    }
    var rE = "18.0.0-fc46dba67-20220329";
    function iE(e, t, a) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Qh(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: qt,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Vm, Ym;
    Vm = !1, Ym = {};
    function t0(e) {
      if (!e)
        return Ot;
      var t = M(e), a = po(t);
      if (t.tag === ce) {
        var l = t.type;
        if (vi(l))
          return Bi(t, l, a);
      }
      return a;
    }
    function aE(e) {
      var t = M(e);
      if (t === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var a = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
      }
      var l = Qr(t);
      return l === null ? null : l.stateNode;
    }
    function sE(e, t) {
      {
        var a = M(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var c = Qr(a);
        if (c === null)
          return null;
        if (c.mode & En) {
          var d = Ye(a) || "Component";
          if (!Ym[d]) {
            Ym[d] = !0;
            var v = ni;
            try {
              Yt(c), a.mode & En ? x("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : x("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Yt(v) : lr();
            }
          }
        }
        return c.stateNode;
      }
    }
    function lE(e, t, a, l, c, d, v, R) {
      var z = !1, A = null;
      return e0(e, t, z, A, a, l, c, d, v);
    }
    function uE(e, t, a, l, c, d, v, R, z, A) {
      var L = !0, V = e0(a, l, L, e, c, d, v, R, z);
      V.context = t0(null);
      var Z = V.current, te = ii(), fe = Gl(Z), ye = et(te, fe);
      return ye.callback = t ?? null, St(Z, ye), u_(V, fe, te), V;
    }
    function n0(e, t, a, l) {
      bn(t, e);
      var c = t.current, d = ii(), v = Gl(c);
      is(v);
      var R = t0(a);
      t.context === null ? t.context = R : t.pendingContext = R, Vi && ni !== null && !Vm && (Vm = !0, x(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(ni) || "Unknown"));
      var z = et(d, v);
      z.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && x("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), z.callback = l), St(c, z);
      var A = dr(c, v, d);
      return A !== null && Cn(A, c, v), v;
    }
    function oE(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Te:
          return oi(t.child.stateNode);
        default:
          return t.child.stateNode;
      }
    }
    function cE(e) {
      switch (e.tag) {
        case xe:
          var t = e.stateNode;
          if (as(t)) {
            var a = Lc(t);
            f_(t, a);
          }
          break;
        case ee:
          var l = ii();
          gh(function() {
            return dr(e, Ct, l);
          });
          var c = Ct;
          Wm(e, c);
          break;
      }
    }
    function r0(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ne(a.retryLane, t));
    }
    function Wm(e, t) {
      r0(e, t);
      var a = e.alternate;
      a && r0(a, t);
    }
    function fE(e) {
      if (e.tag === ee) {
        var t = ii(), a = $a;
        dr(e, a, t), Wm(e, a);
      }
    }
    function dE(e) {
      if (e.tag === ee) {
        var t = ii(), a = Gl(e);
        dr(e, a, t), Wm(e, a);
      }
    }
    function hE(e) {
      var t = Xt(e);
      return t === null ? null : t.stateNode;
    }
    var i0 = function(e) {
      return null;
    };
    function a0(e) {
      return i0(e);
    }
    var s0 = function(e) {
      return !1;
    };
    function l0(e) {
      return s0(e);
    }
    var u0 = null, o0 = null, c0 = null, f0 = null, d0 = null, h0 = null, p0 = null, m0 = null, v0 = null;
    {
      var y0 = function(e, t, a) {
        var l = t[a], c = Jt(e) ? e.slice() : S({}, e);
        return a + 1 === t.length ? (Jt(c) ? c.splice(l, 1) : delete c[l], c) : (c[l] = y0(e[l], t, a + 1), c);
      }, g0 = function(e, t) {
        return y0(e, t, 0);
      }, x0 = function(e, t, a, l) {
        var c = t[l], d = Jt(e) ? e.slice() : S({}, e);
        if (l + 1 === t.length) {
          var v = a[l];
          d[v] = d[c], Jt(d) ? d.splice(c, 1) : delete d[c];
        } else
          d[c] = x0(
            // $FlowFixMe number or string is fine here
            e[c],
            t,
            a,
            l + 1
          );
        return d;
      }, S0 = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return x0(e, t, a, 0);
      }, _0 = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var c = t[a], d = Jt(e) ? e.slice() : S({}, e);
        return d[c] = _0(e[c], t, a + 1, l), d;
      }, E0 = function(e, t, a) {
        return _0(e, t, 0, a);
      }, qm = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      u0 = function(e, t, a, l) {
        var c = qm(e, t);
        if (c !== null) {
          var d = E0(c.memoizedState, a, l);
          c.memoizedState = d, c.baseState = d, e.memoizedProps = S({}, e.memoizedProps), dr(e, Ct, ln);
        }
      }, o0 = function(e, t, a) {
        var l = qm(e, t);
        if (l !== null) {
          var c = g0(l.memoizedState, a);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = S({}, e.memoizedProps), dr(e, Ct, ln);
        }
      }, c0 = function(e, t, a, l) {
        var c = qm(e, t);
        if (c !== null) {
          var d = S0(c.memoizedState, a, l);
          c.memoizedState = d, c.baseState = d, e.memoizedProps = S({}, e.memoizedProps), dr(e, Ct, ln);
        }
      }, f0 = function(e, t, a) {
        e.pendingProps = E0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), dr(e, Ct, ln);
      }, d0 = function(e, t) {
        e.pendingProps = g0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), dr(e, Ct, ln);
      }, h0 = function(e, t, a) {
        e.pendingProps = S0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), dr(e, Ct, ln);
      }, p0 = function(e) {
        dr(e, Ct, ln);
      }, m0 = function(e) {
        i0 = e;
      }, v0 = function(e) {
        s0 = e;
      };
    }
    function pE(e) {
      var t = Qr(e);
      return t === null ? null : t.stateNode;
    }
    function mE(e) {
      return null;
    }
    function vE() {
      return ni;
    }
    function yE(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return Qc({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: u0,
        overrideHookStateDeletePath: o0,
        overrideHookStateRenamePath: c0,
        overrideProps: f0,
        overridePropsDeletePath: d0,
        overridePropsRenamePath: h0,
        setErrorHandler: m0,
        setSuspenseHandler: v0,
        scheduleUpdate: p0,
        currentDispatcherRef: a,
        findHostInstanceByFiber: pE,
        findFiberByHostInstance: t || mE,
        // React Refresh
        findHostInstancesForRefresh: Y_,
        scheduleRefresh: j_,
        scheduleRoot: V_,
        setRefreshHandler: P_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: vE,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: rE
      });
    }
    return s.attemptContinuousHydration = fE, s.attemptHydrationAtCurrentPriority = dE, s.attemptSynchronousHydration = cE, s.batchedUpdates = h_, s.createComponentSelector = W1, s.createContainer = lE, s.createHasPseudoClassSelector = q1, s.createHydrationContainer = uE, s.createPortal = iE, s.createRoleSelector = I1, s.createTestNameSelector = G1, s.createTextSelector = Q1, s.deferredUpdates = d_, s.discreteUpdates = p_, s.findAllNodes = uh, s.findBoundingRects = Z1, s.findHostInstance = aE, s.findHostInstanceWithNoPortals = hE, s.findHostInstanceWithWarning = sE, s.flushControlled = v_, s.flushPassiveEffects = hs, s.flushSync = gh, s.focusWithin = K1, s.getCurrentUpdatePriority = $r, s.getFindAllNodesFailureDescription = J1, s.getPublicRootInstance = oE, s.injectIntoDevTools = yE, s.isAlreadyRendering = m_, s.observeVisibleRects = e_, s.registerMutableSourceForHydration = cS, s.runWithPriority = Vc, s.shouldError = a0, s.shouldSuspend = l0, s.updateContainer = n0, s;
  })), cv.exports;
}
process.env.NODE_ENV === "production" ? Rv.exports = mR() : Rv.exports = vR();
var yR = Rv.exports;
const gR = /* @__PURE__ */ SE(yR);
var Tv = { exports: {} }, fv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dx;
function xR() {
  return dx || (dx = 1, function(T) {
    function n(H, ie) {
      var ee = H.length;
      H.push(ie);
      e:
        for (; 0 < ee; ) {
          var U = ee - 1 >>> 1, j = H[U];
          if (0 < h(j, ie))
            H[U] = ie, H[ee] = j, ee = U;
          else
            break e;
        }
    }
    function s(H) {
      return H.length === 0 ? null : H[0];
    }
    function o(H) {
      if (H.length === 0)
        return null;
      var ie = H[0], ee = H.pop();
      if (ee !== ie) {
        H[0] = ee;
        e:
          for (var U = 0, j = H.length, je = j >>> 1; U < je; ) {
            var Pe = 2 * (U + 1) - 1, Je = H[Pe], Ve = Pe + 1, at = H[Ve];
            if (0 > h(Je, ee))
              Ve < j && 0 > h(at, Je) ? (H[U] = at, H[Ve] = ee, U = Ve) : (H[U] = Je, H[Pe] = ee, U = Pe);
            else if (Ve < j && 0 > h(at, ee))
              H[U] = at, H[Ve] = ee, U = Ve;
            else
              break e;
          }
      }
      return ie;
    }
    function h(H, ie) {
      var ee = H.sortIndex - ie.sortIndex;
      return ee !== 0 ? ee : H.id - ie.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      T.unstable_now = function() {
        return m.now();
      };
    } else {
      var y = Date, C = y.now();
      T.unstable_now = function() {
        return y.now() - C;
      };
    }
    var b = [], x = [], E = 1, S = null, M = 3, w = !1, F = !1, k = !1, Q = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function he(H) {
      for (var ie = s(x); ie !== null; ) {
        if (ie.callback === null)
          o(x);
        else if (ie.startTime <= H)
          o(x), ie.sortIndex = ie.expirationTime, n(b, ie);
        else
          break;
        ie = s(x);
      }
    }
    function Ce(H) {
      if (k = !1, he(H), !F)
        if (s(b) !== null)
          F = !0, ut(Re);
        else {
          var ie = s(x);
          ie !== null && _e(Ce, ie.startTime - H);
        }
    }
    function Re(H, ie) {
      F = !1, k && (k = !1, J(ce), ce = -1), w = !0;
      var ee = M;
      try {
        for (he(ie), S = s(b); S !== null && (!(S.expirationTime > ie) || H && !ze()); ) {
          var U = S.callback;
          if (typeof U == "function") {
            S.callback = null, M = S.priorityLevel;
            var j = U(S.expirationTime <= ie);
            ie = T.unstable_now(), typeof j == "function" ? S.callback = j : S === s(b) && o(b), he(ie);
          } else
            o(b);
          S = s(b);
        }
        if (S !== null)
          var je = !0;
        else {
          var Pe = s(x);
          Pe !== null && _e(Ce, Pe.startTime - ie), je = !1;
        }
        return je;
      } finally {
        S = null, M = ee, w = !1;
      }
    }
    var ke = !1, ue = null, ce = -1, Ke = 5, xe = -1;
    function ze() {
      return !(T.unstable_now() - xe < Ke);
    }
    function Te() {
      if (ue !== null) {
        var H = T.unstable_now();
        xe = H;
        var ie = !0;
        try {
          ie = ue(!0, H);
        } finally {
          ie ? de() : (ke = !1, ue = null);
        }
      } else
        ke = !1;
    }
    var de;
    if (typeof se == "function")
      de = function() {
        se(Te);
      };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), ft = Ue.port2;
      Ue.port1.onmessage = Te, de = function() {
        ft.postMessage(null);
      };
    } else
      de = function() {
        Q(Te, 0);
      };
    function ut(H) {
      ue = H, ke || (ke = !0, de());
    }
    function _e(H, ie) {
      ce = Q(function() {
        H(T.unstable_now());
      }, ie);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, T.unstable_continueExecution = function() {
      F || w || (F = !0, ut(Re));
    }, T.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ke = 0 < H ? Math.floor(1e3 / H) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, T.unstable_getFirstCallbackNode = function() {
      return s(b);
    }, T.unstable_next = function(H) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var ie = 3;
          break;
        default:
          ie = M;
      }
      var ee = M;
      M = ie;
      try {
        return H();
      } finally {
        M = ee;
      }
    }, T.unstable_pauseExecution = function() {
    }, T.unstable_requestPaint = function() {
    }, T.unstable_runWithPriority = function(H, ie) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var ee = M;
      M = H;
      try {
        return ie();
      } finally {
        M = ee;
      }
    }, T.unstable_scheduleCallback = function(H, ie, ee) {
      var U = T.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? U + ee : U) : ee = U, H) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = ee + j, H = { id: E++, callback: ie, priorityLevel: H, startTime: ee, expirationTime: j, sortIndex: -1 }, ee > U ? (H.sortIndex = ee, n(x, H), s(b) === null && H === s(x) && (k ? (J(ce), ce = -1) : k = !0, _e(Ce, ee - U))) : (H.sortIndex = j, n(b, H), F || w || (F = !0, ut(Re))), H;
    }, T.unstable_shouldYield = ze, T.unstable_wrapCallback = function(H) {
      var ie = M;
      return function() {
        var ee = M;
        M = ie;
        try {
          return H.apply(this, arguments);
        } finally {
          M = ee;
        }
      };
    };
  }(fv)), fv;
}
var dv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx;
function SR() {
  return hx || (hx = 1, function(T) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = !1, s = !1, o = 5;
      function h(G, le) {
        var we = G.length;
        G.push(le), C(G, le, we);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function y(G) {
        if (G.length === 0)
          return null;
        var le = G[0], we = G.pop();
        return we !== le && (G[0] = we, b(G, we, 0)), le;
      }
      function C(G, le, we) {
        for (var Qe = we; Qe > 0; ) {
          var Fe = Qe - 1 >>> 1, It = G[Fe];
          if (x(It, le) > 0)
            G[Fe] = le, G[Qe] = It, Qe = Fe;
          else
            return;
        }
      }
      function b(G, le, we) {
        for (var Qe = we, Fe = G.length, It = Fe >>> 1; Qe < It; ) {
          var Rt = (Qe + 1) * 2 - 1, Ye = G[Rt], pe = Rt + 1, xn = G[pe];
          if (x(Ye, le) < 0)
            pe < Fe && x(xn, Ye) < 0 ? (G[Qe] = xn, G[pe] = le, Qe = pe) : (G[Qe] = Ye, G[Rt] = le, Qe = Rt);
          else if (pe < Fe && x(xn, le) < 0)
            G[Qe] = xn, G[pe] = le, Qe = pe;
          else
            return;
        }
      }
      function x(G, le) {
        var we = G.sortIndex - le.sortIndex;
        return we !== 0 ? we : G.id - le.id;
      }
      var E = 1, S = 2, M = 3, w = 4, F = 5;
      function k(G, le) {
      }
      var Q = typeof performance == "object" && typeof performance.now == "function";
      if (Q) {
        var J = performance;
        T.unstable_now = function() {
          return J.now();
        };
      } else {
        var se = Date, he = se.now();
        T.unstable_now = function() {
          return se.now() - he;
        };
      }
      var Ce = 1073741823, Re = -1, ke = 250, ue = 5e3, ce = 1e4, Ke = Ce, xe = [], ze = [], Te = 1, de = null, Ue = M, ft = !1, ut = !1, _e = !1, H = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function U(G) {
        for (var le = m(ze); le !== null; ) {
          if (le.callback === null)
            y(ze);
          else if (le.startTime <= G)
            y(ze), le.sortIndex = le.expirationTime, h(xe, le);
          else
            return;
          le = m(ze);
        }
      }
      function j(G) {
        if (_e = !1, U(G), !ut)
          if (m(xe) !== null)
            ut = !0, mr(je);
          else {
            var le = m(ze);
            le !== null && Zn(j, le.startTime - G);
          }
      }
      function je(G, le) {
        ut = !1, _e && (_e = !1, Di()), ft = !0;
        var we = Ue;
        try {
          var Qe;
          if (!s)
            return Pe(G, le);
        } finally {
          de = null, Ue = we, ft = !1;
        }
      }
      function Pe(G, le) {
        var we = le;
        for (U(we), de = m(xe); de !== null && !n && !(de.expirationTime > we && (!G || Ln())); ) {
          var Qe = de.callback;
          if (typeof Qe == "function") {
            de.callback = null, Ue = de.priorityLevel;
            var Fe = de.expirationTime <= we, It = Qe(Fe);
            we = T.unstable_now(), typeof It == "function" ? de.callback = It : de === m(xe) && y(xe), U(we);
          } else
            y(xe);
          de = m(xe);
        }
        if (de !== null)
          return !0;
        var Rt = m(ze);
        return Rt !== null && Zn(j, Rt.startTime - we), !1;
      }
      function Je(G, le) {
        switch (G) {
          case E:
          case S:
          case M:
          case w:
          case F:
            break;
          default:
            G = M;
        }
        var we = Ue;
        Ue = G;
        try {
          return le();
        } finally {
          Ue = we;
        }
      }
      function Ve(G) {
        var le;
        switch (Ue) {
          case E:
          case S:
          case M:
            le = M;
            break;
          default:
            le = Ue;
            break;
        }
        var we = Ue;
        Ue = le;
        try {
          return G();
        } finally {
          Ue = we;
        }
      }
      function at(G) {
        var le = Ue;
        return function() {
          var we = Ue;
          Ue = le;
          try {
            return G.apply(this, arguments);
          } finally {
            Ue = we;
          }
        };
      }
      function rt(G, le, we) {
        var Qe = T.unstable_now(), Fe;
        if (typeof we == "object" && we !== null) {
          var It = we.delay;
          typeof It == "number" && It > 0 ? Fe = Qe + It : Fe = Qe;
        } else
          Fe = Qe;
        var Rt;
        switch (G) {
          case E:
            Rt = Re;
            break;
          case S:
            Rt = ke;
            break;
          case F:
            Rt = Ke;
            break;
          case w:
            Rt = ce;
            break;
          case M:
          default:
            Rt = ue;
            break;
        }
        var Ye = Fe + Rt, pe = {
          id: Te++,
          callback: le,
          priorityLevel: G,
          startTime: Fe,
          expirationTime: Ye,
          sortIndex: -1
        };
        return Fe > Qe ? (pe.sortIndex = Fe, h(ze, pe), m(xe) === null && pe === m(ze) && (_e ? Di() : _e = !0, Zn(j, Fe - Qe))) : (pe.sortIndex = Ye, h(xe, pe), !ut && !ft && (ut = !0, mr(je))), pe;
      }
      function dt() {
      }
      function Ht() {
        !ut && !ft && (ut = !0, mr(je));
      }
      function Nn() {
        return m(xe);
      }
      function nr(G) {
        G.callback = null;
      }
      function qt() {
        return Ue;
      }
      var Fn = !1, On = null, Un = -1, jn = o, Ar = -1;
      function Ln() {
        var G = T.unstable_now() - Ar;
        return !(G < jn);
      }
      function pn() {
      }
      function hr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? jn = Math.floor(1e3 / G) : jn = o;
      }
      var kn = function() {
        if (On !== null) {
          var G = T.unstable_now();
          Ar = G;
          var le = !0, we = !0;
          try {
            we = On(le, G);
          } finally {
            we ? Bt() : (Fn = !1, On = null);
          }
        } else
          Fn = !1;
      }, Bt;
      if (typeof ee == "function")
        Bt = function() {
          ee(kn);
        };
      else if (typeof MessageChannel < "u") {
        var pr = new MessageChannel(), ai = pr.port2;
        pr.port1.onmessage = kn, Bt = function() {
          ai.postMessage(null);
        };
      } else
        Bt = function() {
          H(kn, 0);
        };
      function mr(G) {
        On = G, Fn || (Fn = !0, Bt());
      }
      function Zn(G, le) {
        Un = H(function() {
          G(T.unstable_now());
        }, le);
      }
      function Di() {
        ie(Un), Un = -1;
      }
      var Xi = pn, Ai = null;
      T.unstable_IdlePriority = F, T.unstable_ImmediatePriority = E, T.unstable_LowPriority = w, T.unstable_NormalPriority = M, T.unstable_Profiling = Ai, T.unstable_UserBlockingPriority = S, T.unstable_cancelCallback = nr, T.unstable_continueExecution = Ht, T.unstable_forceFrameRate = hr, T.unstable_getCurrentPriorityLevel = qt, T.unstable_getFirstCallbackNode = Nn, T.unstable_next = Ve, T.unstable_pauseExecution = dt, T.unstable_requestPaint = Xi, T.unstable_runWithPriority = Je, T.unstable_scheduleCallback = rt, T.unstable_shouldYield = Ln, T.unstable_wrapCallback = at, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dv)), dv;
}
process.env.NODE_ENV === "production" ? Tv.exports = xR() : Tv.exports = SR();
var px = Tv.exports;
const Fx = {};
function _R(T, n) {
  function s(E, {
    args: S = [],
    attach: M,
    ...w
  }, F) {
    let k = `${E[0].toUpperCase()}${E.slice(1)}`, Q;
    if (E === "primitive") {
      if (w.object === void 0)
        throw new Error("R3F: Primitives without 'object' are invalid!");
      const J = w.object;
      Q = Pf(J, {
        type: E,
        root: F,
        attach: M,
        primitive: !0
      });
    } else {
      const J = Fx[k];
      if (!J)
        throw new Error(`R3F: ${k} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
      if (!Array.isArray(S))
        throw new Error("R3F: The args prop must be an array!");
      Q = Pf(new J(...S), {
        type: E,
        root: F,
        attach: M,
        // Save args in case we need to reconstruct later for HMR
        memoizedProps: {
          args: S
        }
      });
    }
    return Q.__r3f.attach === void 0 && (Q instanceof wv ? Q.__r3f.attach = "geometry" : Q instanceof wx && (Q.__r3f.attach = "material")), k !== "inject" && mv(Q, w), Q;
  }
  function o(E, S) {
    let M = !1;
    if (S) {
      var w, F;
      (w = S.__r3f) != null && w.attach ? pv(E, S, S.__r3f.attach) : S.isObject3D && E.isObject3D && (E.add(S), M = !0), M || (F = E.__r3f) == null || F.objects.push(S), S.__r3f || Pf(S, {}), S.__r3f.parent = E, Cv(S), pc(S);
    }
  }
  function h(E, S, M) {
    let w = !1;
    if (S) {
      var F, k;
      if ((F = S.__r3f) != null && F.attach)
        pv(E, S, S.__r3f.attach);
      else if (S.isObject3D && E.isObject3D) {
        S.parent = E, S.dispatchEvent({
          type: "added"
        }), E.dispatchEvent({
          type: "childadded",
          child: S
        });
        const Q = E.children.filter((se) => se !== S), J = Q.indexOf(M);
        E.children = [...Q.slice(0, J), S, ...Q.slice(J)], w = !0;
      }
      w || (k = E.__r3f) == null || k.objects.push(S), S.__r3f || Pf(S, {}), S.__r3f.parent = E, Cv(S), pc(S);
    }
  }
  function m(E, S, M = !1) {
    E && [...E].forEach((w) => y(S, w, M));
  }
  function y(E, S, M) {
    if (S) {
      var w, F, k;
      if (S.__r3f && (S.__r3f.parent = null), (w = E.__r3f) != null && w.objects && (E.__r3f.objects = E.__r3f.objects.filter((Ce) => Ce !== S)), (F = S.__r3f) != null && F.attach)
        xx(E, S, S.__r3f.attach);
      else if (S.isObject3D && E.isObject3D) {
        var Q;
        E.remove(S), (Q = S.__r3f) != null && Q.root && AR(Bh(S), S);
      }
      const se = (k = S.__r3f) == null ? void 0 : k.primitive, he = !se && (M === void 0 ? S.dispose !== null : M);
      if (!se) {
        var J;
        m((J = S.__r3f) == null ? void 0 : J.objects, S, he), m(S.children, S, he);
      }
      if (delete S.__r3f, he && S.dispose && S.type !== "Scene") {
        const Ce = () => {
          try {
            S.dispose();
          } catch {
          }
        };
        typeof IS_REACT_ACT_ENVIRONMENT > "u" ? px.unstable_scheduleCallback(px.unstable_IdlePriority, Ce) : Ce();
      }
      pc(E);
    }
  }
  function C(E, S, M, w) {
    var F;
    const k = (F = E.__r3f) == null ? void 0 : F.parent;
    if (!k)
      return;
    const Q = s(S, M, E.__r3f.root);
    if (E.children) {
      for (const J of E.children)
        J.__r3f && o(Q, J);
      E.children = E.children.filter((J) => !J.__r3f);
    }
    E.__r3f.objects.forEach((J) => o(Q, J)), E.__r3f.objects = [], E.__r3f.autoRemovedBeforeAppend || y(k, E), Q.parent && (Q.__r3f.autoRemovedBeforeAppend = !0), o(k, Q), Q.raycast && Q.__r3f.eventCount && Bh(Q).getState().internal.interaction.push(Q), [w, w.alternate].forEach((J) => {
      J !== null && (J.stateNode = Q, J.ref && (typeof J.ref == "function" ? J.ref(Q) : J.ref.current = Q));
    });
  }
  const b = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");
  return {
    reconciler: gR({
      createInstance: s,
      removeChild: y,
      appendChild: o,
      appendInitialChild: o,
      insertBefore: h,
      supportsMutation: !0,
      isPrimaryRenderer: !1,
      supportsPersistence: !1,
      supportsHydration: !1,
      noTimeout: -1,
      appendChildToContainer: (E, S) => {
        if (!S)
          return;
        const M = E.getState().scene;
        M.__r3f && (M.__r3f.root = E, o(M, S));
      },
      removeChildFromContainer: (E, S) => {
        S && y(E.getState().scene, S);
      },
      insertInContainerBefore: (E, S, M) => {
        if (!S || !M)
          return;
        const w = E.getState().scene;
        w.__r3f && h(w, S, M);
      },
      getRootHostContext: () => null,
      getChildHostContext: (E) => E,
      finalizeInitialChildren(E) {
        var S;
        return !!((S = E == null ? void 0 : E.__r3f) != null ? S : {}).handlers;
      },
      prepareUpdate(E, S, M, w) {
        var F;
        if (((F = E == null ? void 0 : E.__r3f) != null ? F : {}).primitive && w.object && w.object !== E)
          return [!0];
        {
          const {
            args: Q = [],
            children: J,
            ...se
          } = w, {
            args: he = [],
            children: Ce,
            ...Re
          } = M;
          if (!Array.isArray(Q))
            throw new Error("R3F: the args prop must be an array!");
          if (Q.some((ue, ce) => ue !== he[ce]))
            return [!0];
          const ke = Lx(E, se, Re, !0);
          return ke.changes.length ? [!1, ke] : null;
        }
      },
      commitUpdate(E, [S, M], w, F, k, Q) {
        S ? C(E, w, k, Q) : mv(E, M);
      },
      commitMount(E, S, M, w) {
        var F;
        const k = (F = E.__r3f) != null ? F : {};
        E.raycast && k.handlers && k.eventCount && Bh(E).getState().internal.interaction.push(E);
      },
      getPublicInstance: (E) => E,
      prepareForCommit: () => null,
      preparePortalMount: (E) => Pf(E.getState().scene),
      resetAfterCommit: () => {
      },
      shouldSetTextContent: () => !1,
      clearContainer: () => !1,
      hideInstance(E) {
        var S;
        const {
          attach: M,
          parent: w
        } = (S = E.__r3f) != null ? S : {};
        M && w && xx(w, E, M), E.isObject3D && (E.visible = !1), pc(E);
      },
      unhideInstance(E, S) {
        var M;
        const {
          attach: w,
          parent: F
        } = (M = E.__r3f) != null ? M : {};
        w && F && pv(F, E, w), (E.isObject3D && S.visible == null || S.visible) && (E.visible = !0), pc(E);
      },
      createTextInstance: b,
      hideTextInstance: b,
      unhideTextInstance: b,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
      // @ts-ignore
      getCurrentEventPriority: () => n ? n() : Vf.DefaultEventPriority,
      beforeActiveInstanceBlur: () => {
      },
      afterActiveInstanceBlur: () => {
      },
      detachDeletedInstance: () => {
      },
      now: typeof performance < "u" && zi.fun(performance.now) ? performance.now : zi.fun(Date.now) ? Date.now : () => 0,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r920883503
      scheduleTimeout: zi.fun(setTimeout) ? setTimeout : void 0,
      cancelTimeout: zi.fun(clearTimeout) ? clearTimeout : void 0
    }),
    applyProps: mv
  };
}
var mx, vx;
const hv = (T) => "colorSpace" in T || "outputColorSpace" in T, ER = () => {
  var T;
  return (T = Fx.ColorManagement) != null ? T : null;
}, RR = (T) => T && T.isOrthographicCamera, Ox = typeof window < "u" && ((mx = window.document) != null && mx.createElement || ((vx = window.navigator) == null ? void 0 : vx.product) === "ReactNative") ? tt.useLayoutEffect : tt.useEffect;
function TR(T) {
  const n = tt.useRef(T);
  return Ox(() => void (n.current = T), [T]), n;
}
class bR extends tt.Component {
  constructor(...n) {
    super(...n), this.state = {
      error: !1
    };
  }
  componentDidCatch(n) {
    this.props.set(n);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}
bR.getDerivedStateFromError = () => ({
  error: !0
});
const Ux = "__default", yx = /* @__PURE__ */ new Map(), CR = (T) => T && !!T.memoized && !!T.changes;
function Bh(T) {
  let n = T.__r3f.root;
  for (; n.getState().previousRoot; )
    n = n.getState().previousRoot;
  return n;
}
const zi = {
  obj: (T) => T === Object(T) && !zi.arr(T) && typeof T != "function",
  fun: (T) => typeof T == "function",
  str: (T) => typeof T == "string",
  num: (T) => typeof T == "number",
  boo: (T) => typeof T == "boolean",
  und: (T) => T === void 0,
  arr: (T) => Array.isArray(T),
  equ(T, n, {
    arrays: s = "shallow",
    objects: o = "reference",
    strict: h = !0
  } = {}) {
    if (typeof T != typeof n || !!T != !!n)
      return !1;
    if (zi.str(T) || zi.num(T))
      return T === n;
    const m = zi.obj(T);
    if (m && o === "reference")
      return T === n;
    const y = zi.arr(T);
    if (y && s === "reference")
      return T === n;
    if ((y || m) && T === n)
      return !0;
    let C;
    for (C in T)
      if (!(C in n))
        return !1;
    if (m && s === "shallow" && o === "shallow") {
      for (C in h ? n : T)
        if (!zi.equ(T[C], n[C], {
          strict: h,
          objects: "reference"
        }))
          return !1;
    } else
      for (C in h ? n : T)
        if (T[C] !== n[C])
          return !1;
    if (zi.und(C)) {
      if (y && T.length === 0 && n.length === 0 || m && Object.keys(T).length === 0 && Object.keys(n).length === 0)
        return !0;
      if (T !== n)
        return !1;
    }
    return !0;
  }
};
function Pf(T, n) {
  const s = T;
  return s.__r3f = {
    type: "",
    root: null,
    previousAttach: null,
    memoizedProps: {},
    eventCount: 0,
    handlers: {},
    objects: [],
    parent: null,
    ...n
  }, T;
}
function bv(T, n) {
  let s = T;
  if (n.includes("-")) {
    const o = n.split("-"), h = o.pop();
    return s = o.reduce((m, y) => m[y], T), {
      target: s,
      key: h
    };
  } else
    return {
      target: s,
      key: n
    };
}
const gx = /-\d+$/;
function pv(T, n, s) {
  if (zi.str(s)) {
    if (gx.test(s)) {
      const m = s.replace(gx, ""), {
        target: y,
        key: C
      } = bv(T, m);
      Array.isArray(y[C]) || (y[C] = []);
    }
    const {
      target: o,
      key: h
    } = bv(T, s);
    n.__r3f.previousAttach = o[h], o[h] = n;
  } else
    n.__r3f.previousAttach = s(T, n);
}
function xx(T, n, s) {
  var o, h;
  if (zi.str(s)) {
    const {
      target: m,
      key: y
    } = bv(T, s), C = n.__r3f.previousAttach;
    C === void 0 ? delete m[y] : m[y] = C;
  } else
    (o = n.__r3f) == null || o.previousAttach == null || o.previousAttach(T, n);
  (h = n.__r3f) == null || delete h.previousAttach;
}
function Lx(T, {
  children: n,
  key: s,
  ref: o,
  ...h
}, {
  children: m,
  key: y,
  ref: C,
  ...b
} = {}, x = !1) {
  var E;
  const S = (E = T == null ? void 0 : T.__r3f) != null ? E : {}, M = Object.entries(h), w = [];
  if (x) {
    const k = Object.keys(b);
    for (let Q = 0; Q < k.length; Q++)
      h.hasOwnProperty(k[Q]) || M.unshift([k[Q], Ux + "remove"]);
  }
  M.forEach(([k, Q]) => {
    var J;
    if ((J = T.__r3f) != null && J.primitive && k === "object" || zi.equ(Q, b[k]))
      return;
    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(k))
      return w.push([k, Q, !0, []]);
    let se = [];
    k.includes("-") && (se = k.split("-")), w.push([k, Q, !1, se]);
    for (const he in h) {
      const Ce = h[he];
      he.startsWith(`${k}-`) && w.push([he, Ce, !1, he.split("-")]);
    }
  });
  const F = {
    ...h
  };
  return S.memoizedProps && S.memoizedProps.args && (F.args = S.memoizedProps.args), S.memoizedProps && S.memoizedProps.attach && (F.attach = S.memoizedProps.attach), {
    memoized: F,
    changes: w
  };
}
const MR = typeof process < "u" && process.env.NODE_ENV !== "production";
function mv(T, n) {
  var s, o, h;
  const m = (s = T.__r3f) != null ? s : {}, y = m.root, C = (o = y == null || y.getState == null ? void 0 : y.getState()) != null ? o : {}, {
    memoized: b,
    changes: x
  } = CR(n) ? n : Lx(T, n), E = m.eventCount;
  T.__r3f && (T.__r3f.memoizedProps = b);
  for (let M = 0; M < x.length; M++) {
    let [w, F, k, Q] = x[M];
    if (hv(T)) {
      const Ce = "srgb", Re = "srgb-linear";
      w === "encoding" ? (w = "colorSpace", F = F === 3001 ? Ce : Re) : w === "outputEncoding" && (w = "outputColorSpace", F = F === 3001 ? Ce : Re);
    }
    let J = T, se = J[w];
    if (Q.length && (se = Q.reduce((he, Ce) => he[Ce], T), !(se && se.set))) {
      const [he, ...Ce] = Q.reverse();
      J = Ce.reverse().reduce((Re, ke) => Re[ke], T), w = he;
    }
    if (F === Ux + "remove")
      if (J.constructor) {
        let he = yx.get(J.constructor);
        he || (he = new J.constructor(), yx.set(J.constructor, he)), F = he[w];
      } else
        F = 0;
    if (k)
      F ? m.handlers[w] = F : delete m.handlers[w], m.eventCount = Object.keys(m.handlers).length;
    else if (se && se.set && (se.copy || se instanceof Yf)) {
      if (Array.isArray(F))
        se.fromArray ? se.fromArray(F) : se.set(...F);
      else if (se.copy && F && F.constructor && // Some environments may break strict identity checks by duplicating versions of three.js.
      // Loosen to unminified names, ignoring descendents.
      // https://github.com/pmndrs/react-three-fiber/issues/2856
      // TODO: fix upstream and remove in v9
      (MR ? se.constructor.name === F.constructor.name : se.constructor === F.constructor))
        se.copy(F);
      else if (F !== void 0) {
        const he = se instanceof jh;
        !he && se.setScalar ? se.setScalar(F) : se instanceof Yf && F instanceof Yf ? se.mask = F.mask : se.set(F), !ER() && !C.linear && he && se.convertSRGBToLinear();
      }
    } else if (J[w] = F, J[w] instanceof vs && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
    J[w].format === Tx && J[w].type === Ex) {
      const he = J[w];
      hv(he) && hv(C.gl) ? he.colorSpace = C.gl.outputColorSpace : he.encoding = C.gl.outputEncoding;
    }
    pc(T);
  }
  if (m.parent && T.raycast && E !== m.eventCount) {
    const M = Bh(T).getState().internal, w = M.interaction.indexOf(T);
    w > -1 && M.interaction.splice(w, 1), m.eventCount && M.interaction.push(T);
  }
  return !(x.length === 1 && x[0][0] === "onUpdate") && x.length && (h = T.__r3f) != null && h.parent && Cv(T), T;
}
function pc(T) {
  var n, s;
  const o = (n = T.__r3f) == null || (s = n.root) == null || s.getState == null ? void 0 : s.getState();
  o && o.internal.frames === 0 && o.invalidate();
}
function Cv(T) {
  T.onUpdate == null || T.onUpdate(T);
}
function zR(T, n) {
  T.manual || (RR(T) ? (T.left = n.width / -2, T.right = n.width / 2, T.top = n.height / 2, T.bottom = n.height / -2) : T.aspect = n.width / n.height, T.updateProjectionMatrix(), T.updateMatrixWorld());
}
function wR() {
  var T;
  const n = typeof self < "u" && self || typeof window < "u" && window;
  if (!n)
    return Vf.DefaultEventPriority;
  switch ((T = n.event) == null ? void 0 : T.type) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return Vf.DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return Vf.ContinuousEventPriority;
    default:
      return Vf.DefaultEventPriority;
  }
}
function DR(T, n, s, o) {
  const h = s.get(n);
  h && (s.delete(n), s.size === 0 && (T.delete(o), h.target.releasePointerCapture(o)));
}
function AR(T, n) {
  const {
    internal: s
  } = T.getState();
  s.interaction = s.interaction.filter((o) => o !== n), s.initialHits = s.initialHits.filter((o) => o !== n), s.hovered.forEach((o, h) => {
    (o.eventObject === n || o.object === n) && s.hovered.delete(h);
  }), s.capturedMap.forEach((o, h) => {
    DR(s.capturedMap, n, o, h);
  });
}
const NR = ["set", "get", "setSize", "setFrameloop", "setDpr", "events", "invalidate", "advance", "size", "viewport"], kx = /* @__PURE__ */ tt.createContext(null);
function Dv() {
  const T = tt.useContext(kx);
  if (!T)
    throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return T;
}
function Mv(T = (s) => s, n) {
  return Dv()(T, n);
}
function FR(T, n = 0) {
  const s = Dv(), o = s.getState().internal.subscribe, h = TR(T);
  return Ox(() => o(h, n, s), [n, o, s]), null;
}
const OR = /* @__PURE__ */ new Map(), {
  reconciler: Bx,
  applyProps: YR
} = _R(OR, wR);
function UR(T, n, s) {
  return /* @__PURE__ */ tt.createElement(LR, {
    key: n.uuid,
    children: T,
    container: n,
    state: s
  });
}
function LR({
  state: T = {},
  children: n,
  container: s
}) {
  const {
    events: o,
    size: h,
    ...m
  } = T, y = Dv(), [C] = tt.useState(() => new lR()), [b] = tt.useState(() => new ms()), x = tt.useCallback(
    (S, M) => {
      const w = {
        ...S
      };
      Object.keys(S).forEach((k) => {
        // Some props should be off-limits
        (NR.includes(k) || // Otherwise filter out the props that are different and let the inject layer take precedence
        // Unless the inject layer props is undefined, then we keep the root layer
        S[k] !== M[k] && M[k]) && delete w[k];
      });
      let F;
      if (M && h) {
        const k = M.camera;
        F = S.viewport.getCurrentViewport(k, new Me(), h), k !== S.camera && zR(k, h);
      }
      return {
        // The intersect consists of the previous root state
        ...w,
        // Portals have their own scene, which forms the root, a raycaster and a pointer
        scene: s,
        raycaster: C,
        pointer: b,
        mouse: b,
        // Their previous root is the layer before it
        previousRoot: y,
        // Events, size and viewport can be overridden by the inject layer
        events: {
          ...S.events,
          ...M == null ? void 0 : M.events,
          ...o
        },
        size: {
          ...S.size,
          ...h
        },
        viewport: {
          ...S.viewport,
          ...F
        },
        ...m
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), [E] = tt.useState(() => {
    const S = y.getState();
    return dR((w, F) => ({
      ...S,
      scene: s,
      raycaster: C,
      pointer: b,
      mouse: b,
      previousRoot: y,
      events: {
        ...S.events,
        ...o
      },
      size: {
        ...S.size,
        ...h
      },
      ...m,
      // Set and get refer to this root-state
      set: w,
      get: F,
      // Layers are allowed to override events
      setEvents: (k) => w((Q) => ({
        ...Q,
        events: {
          ...Q.events,
          ...k
        }
      }))
    }));
  });
  return tt.useEffect(() => {
    const S = y.subscribe((M) => E.setState((w) => x(M, w)));
    return () => {
      S(), E.destroy();
    };
  }, []), tt.useEffect(() => {
    E.setState((S) => x(y.getState(), S));
  }, [x]), /* @__PURE__ */ tt.createElement(tt.Fragment, null, Bx.createPortal(/* @__PURE__ */ tt.createElement(kx.Provider, {
    value: E
  }, n), E, null));
}
Bx.injectIntoDevTools({
  bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
  rendererPackageName: "@react-three/fiber",
  version: tt.version
});
function kR(T, n, s) {
  const o = Mv((M) => M.size), h = Mv((M) => M.viewport), m = typeof T == "number" ? T : o.width * h.dpr, y = typeof n == "number" ? n : o.height * h.dpr, C = (typeof T == "number" ? s : T) || {}, {
    samples: b = 0,
    depth: x,
    ...E
  } = C, S = tt.useMemo(() => {
    const M = new HE(m, y, {
      minFilter: Hh,
      magFilter: Hh,
      type: ME,
      ...E
    });
    return x && (M.depthTexture = new Ax(m, y, Rx)), M.samples = b, M;
  }, []);
  return tt.useLayoutEffect(() => {
    S.setSize(m, y), b && (S.samples = b);
  }, [b, S, m, y]), tt.useEffect(() => () => S.dispose(), []), S;
}
const BR = /* @__PURE__ */ tt.forwardRef(({
  children: T,
  compute: n,
  width: s,
  height: o,
  samples: h = 8,
  renderPriority: m = 0,
  eventPriority: y = 0,
  frames: C = 1 / 0,
  stencilBuffer: b = !1,
  depthBuffer: x = !0,
  generateMipmaps: E = !1,
  ...S
}, M) => {
  const {
    size: w,
    viewport: F
  } = Mv(), k = kR((s || w.width) * F.dpr, (o || w.height) * F.dpr, {
    samples: h,
    stencilBuffer: b,
    depthBuffer: x,
    generateMipmaps: E
  }), [Q] = tt.useState(() => new aR()), J = tt.useCallback((se, he, Ce) => {
    var Re, ke;
    let ue = (Re = k.texture) == null ? void 0 : Re.__r3f.parent;
    for (; ue && !(ue instanceof ys); )
      ue = ue.__r3f.parent;
    if (!ue)
      return !1;
    Ce.raycaster.camera || Ce.events.compute(se, Ce, (ke = Ce.previousRoot) == null ? void 0 : ke.getState());
    const [ce] = Ce.raycaster.intersectObject(ue);
    if (!ce)
      return !1;
    const Ke = ce.uv;
    if (!Ke)
      return !1;
    he.raycaster.setFromCamera(he.pointer.set(Ke.x * 2 - 1, Ke.y * 2 - 1), he.camera);
  }, []);
  return tt.useImperativeHandle(M, () => k.texture, [k]), /* @__PURE__ */ tt.createElement(tt.Fragment, null, UR(/* @__PURE__ */ tt.createElement(HR, {
    renderPriority: m,
    frames: C,
    fbo: k
  }, T, /* @__PURE__ */ tt.createElement("group", {
    onPointerOver: () => null
  })), Q, {
    events: {
      compute: n || J,
      priority: y
    }
  }), /* @__PURE__ */ tt.createElement("primitive", xv({
    object: k.texture
  }, S)));
});
function HR({
  frames: T,
  renderPriority: n,
  children: s,
  fbo: o
}) {
  let h = 0, m, y;
  return FR((C) => {
    (T === 1 / 0 || h < T) && (m = C.gl.autoClear, y = C.gl.xr.enabled, C.gl.autoClear = !0, C.gl.xr.enabled = !1, C.gl.setRenderTarget(o), C.gl.render(C.scene, C.camera), C.gl.setRenderTarget(null), C.gl.autoClear = m, C.gl.xr.enabled = y, h++);
  }, n), /* @__PURE__ */ tt.createElement(tt.Fragment, null, s);
}
const WR = tt.forwardRef(function({ children: n, ...s }, o) {
  const h = tt.memo(
    tt.forwardRef(function({ vert: y, frag: C, raw: b, attach: x = "material", ...E }, S) {
      const M = tt.useMemo(
        () => b ? new sR({ uniforms: E, vertexShader: y, fragmentShader: C }) : new Dx(E, y, C),
        [C, b, E, y]
      );
      return tt.useEffect(() => (console.log("material created"), console.log(M), () => M.dispose()), [M]), /* @__PURE__ */ gv.jsx("primitive", { object: M, attach: x }, M.key);
    })
  );
  return /* @__PURE__ */ gv.jsx(BR, { ref: o, ...s, children: n(h) });
});
export {
  VR as GetParent,
  WR as ShaderPass
};
