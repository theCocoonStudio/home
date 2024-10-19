var dx = (y) => {
  throw TypeError(y);
};
var hx = (y, e, a) => e.has(y) || dx("Cannot " + a);
var pi = (y, e, a) => (hx(y, e, "read from private field"), a ? a.call(y) : e.get(y)), rd = (y, e, a) => e.has(y) ? dx("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(y) : e.set(y, a), Kl = (y, e, a, u) => (hx(y, e, "write to private field"), u ? u.call(y, a) : e.set(y, a), a);
function wR(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var ay = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var px;
function zR() {
  if (px) return Et;
  px = 1;
  var y = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), v = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), E = Symbol.iterator;
  function b(O) {
    return O === null || typeof O != "object" ? null : (O = E && O[E] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, L = {};
  function k(O, j, ze) {
    this.props = O, this.context = j, this.refs = L, this.updater = ze || z;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(O, j) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, j, "setState");
  }, k.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function V() {
  }
  V.prototype = k.prototype;
  function te(O, j, ze) {
    this.props = O, this.context = j, this.refs = L, this.updater = ze || z;
  }
  var ee = te.prototype = new V();
  ee.constructor = te, D(ee, k.prototype), ee.isPureReactComponent = !0;
  var ue = Array.isArray, pe = Object.prototype.hasOwnProperty, Me = { current: null }, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function se(O, j, ze) {
    var Le, Oe = {}, Ne = null, Ie = null;
    if (j != null) for (Le in j.ref !== void 0 && (Ie = j.ref), j.key !== void 0 && (Ne = "" + j.key), j) pe.call(j, Le) && !oe.hasOwnProperty(Le) && (Oe[Le] = j[Le]);
    var qe = arguments.length - 2;
    if (qe === 1) Oe.children = ze;
    else if (1 < qe) {
      for (var je = Array(qe), dt = 0; dt < qe; dt++) je[dt] = arguments[dt + 2];
      Oe.children = je;
    }
    if (O && O.defaultProps) for (Le in qe = O.defaultProps, qe) Oe[Le] === void 0 && (Oe[Le] = qe[Le]);
    return { $$typeof: y, type: O, key: Ne, ref: Ie, props: Oe, _owner: Me.current };
  }
  function Xe(O, j) {
    return { $$typeof: y, type: O.type, key: j, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function me(O) {
    return typeof O == "object" && O !== null && O.$$typeof === y;
  }
  function Re(O) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(ze) {
      return j[ze];
    });
  }
  var ye = /\/+/g;
  function de(O, j) {
    return typeof O == "object" && O !== null && O.key != null ? Re("" + O.key) : j.toString(36);
  }
  function Ae(O, j, ze, Le, Oe) {
    var Ne = typeof O;
    (Ne === "undefined" || Ne === "boolean") && (O = null);
    var Ie = !1;
    if (O === null) Ie = !0;
    else switch (Ne) {
      case "string":
      case "number":
        Ie = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case y:
          case e:
            Ie = !0;
        }
    }
    if (Ie) return Ie = O, Oe = Oe(Ie), O = Le === "" ? "." + de(Ie, 0) : Le, ue(Oe) ? (ze = "", O != null && (ze = O.replace(ye, "$&/") + "/"), Ae(Oe, j, ze, "", function(dt) {
      return dt;
    })) : Oe != null && (me(Oe) && (Oe = Xe(Oe, ze + (!Oe.key || Ie && Ie.key === Oe.key ? "" : ("" + Oe.key).replace(ye, "$&/") + "/") + O)), j.push(Oe)), 1;
    if (Ie = 0, Le = Le === "" ? "." : Le + ":", ue(O)) for (var qe = 0; qe < O.length; qe++) {
      Ne = O[qe];
      var je = Le + de(Ne, qe);
      Ie += Ae(Ne, j, ze, je, Oe);
    }
    else if (je = b(O), typeof je == "function") for (O = je.call(O), qe = 0; !(Ne = O.next()).done; ) Ne = Ne.value, je = Le + de(Ne, qe++), Ie += Ae(Ne, j, ze, je, Oe);
    else if (Ne === "object") throw j = String(O), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function Ve(O, j, ze) {
    if (O == null) return O;
    var Le = [], Oe = 0;
    return Ae(O, Le, "", "", function(Ne) {
      return j.call(ze, Ne, Oe++);
    }), Le;
  }
  function Ze(O) {
    if (O._status === -1) {
      var j = O._result;
      j = j(), j.then(function(ze) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = ze);
      }, function(ze) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = ze);
      }), O._status === -1 && (O._status = 0, O._result = j);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ge = { current: null }, H = { transition: null }, re = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: H, ReactCurrentOwner: Me };
  function J() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: Ve, forEach: function(O, j, ze) {
    Ve(O, function() {
      j.apply(this, arguments);
    }, ze);
  }, count: function(O) {
    var j = 0;
    return Ve(O, function() {
      j++;
    }), j;
  }, toArray: function(O) {
    return Ve(O, function(j) {
      return j;
    }) || [];
  }, only: function(O) {
    if (!me(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Et.Component = k, Et.Fragment = a, Et.Profiler = d, Et.PureComponent = te, Et.StrictMode = u, Et.Suspense = _, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, Et.act = J, Et.cloneElement = function(O, j, ze) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Le = D({}, O.props), Oe = O.key, Ne = O.ref, Ie = O._owner;
    if (j != null) {
      if (j.ref !== void 0 && (Ne = j.ref, Ie = Me.current), j.key !== void 0 && (Oe = "" + j.key), O.type && O.type.defaultProps) var qe = O.type.defaultProps;
      for (je in j) pe.call(j, je) && !oe.hasOwnProperty(je) && (Le[je] = j[je] === void 0 && qe !== void 0 ? qe[je] : j[je]);
    }
    var je = arguments.length - 2;
    if (je === 1) Le.children = ze;
    else if (1 < je) {
      qe = Array(je);
      for (var dt = 0; dt < je; dt++) qe[dt] = arguments[dt + 2];
      Le.children = qe;
    }
    return { $$typeof: y, type: O.type, key: Oe, ref: Ne, props: Le, _owner: Ie };
  }, Et.createContext = function(O) {
    return O = { $$typeof: v, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: m, _context: O }, O.Consumer = O;
  }, Et.createElement = se, Et.createFactory = function(O) {
    var j = se.bind(null, O);
    return j.type = O, j;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(O) {
    return { $$typeof: M, render: O };
  }, Et.isValidElement = me, Et.lazy = function(O) {
    return { $$typeof: R, _payload: { _status: -1, _result: O }, _init: Ze };
  }, Et.memo = function(O, j) {
    return { $$typeof: g, type: O, compare: j === void 0 ? null : j };
  }, Et.startTransition = function(O) {
    var j = H.transition;
    H.transition = {};
    try {
      O();
    } finally {
      H.transition = j;
    }
  }, Et.unstable_act = J, Et.useCallback = function(O, j) {
    return ge.current.useCallback(O, j);
  }, Et.useContext = function(O) {
    return ge.current.useContext(O);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(O) {
    return ge.current.useDeferredValue(O);
  }, Et.useEffect = function(O, j) {
    return ge.current.useEffect(O, j);
  }, Et.useId = function() {
    return ge.current.useId();
  }, Et.useImperativeHandle = function(O, j, ze) {
    return ge.current.useImperativeHandle(O, j, ze);
  }, Et.useInsertionEffect = function(O, j) {
    return ge.current.useInsertionEffect(O, j);
  }, Et.useLayoutEffect = function(O, j) {
    return ge.current.useLayoutEffect(O, j);
  }, Et.useMemo = function(O, j) {
    return ge.current.useMemo(O, j);
  }, Et.useReducer = function(O, j, ze) {
    return ge.current.useReducer(O, j, ze);
  }, Et.useRef = function(O) {
    return ge.current.useRef(O);
  }, Et.useState = function(O) {
    return ge.current.useState(O);
  }, Et.useSyncExternalStore = function(O, j, ze) {
    return ge.current.useSyncExternalStore(O, j, ze);
  }, Et.useTransition = function() {
    return ge.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var cd = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
cd.exports;
var mx;
function DR() {
  return mx || (mx = 1, function(y, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var a = "18.3.1", u = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), g = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), k = Symbol.iterator, V = "@@iterator";
      function te(C) {
        if (C === null || typeof C != "object")
          return null;
        var F = k && C[k] || C[V];
        return typeof F == "function" ? F : null;
      }
      var ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, pe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, oe = {}, se = null;
      function Xe(C) {
        se = C;
      }
      oe.setExtraStackFrame = function(C) {
        se = C;
      }, oe.getCurrentStack = null, oe.getStackAddendum = function() {
        var C = "";
        se && (C += se);
        var F = oe.getCurrentStack;
        return F && (C += F() || ""), C;
      };
      var me = !1, Re = !1, ye = !1, de = !1, Ae = !1, Ve = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: Me
      };
      Ve.ReactDebugCurrentFrame = oe, Ve.ReactCurrentActQueue = pe;
      function Ze(C) {
        {
          for (var F = arguments.length, W = new Array(F > 1 ? F - 1 : 0), K = 1; K < F; K++)
            W[K - 1] = arguments[K];
          H("warn", C, W);
        }
      }
      function ge(C) {
        {
          for (var F = arguments.length, W = new Array(F > 1 ? F - 1 : 0), K = 1; K < F; K++)
            W[K - 1] = arguments[K];
          H("error", C, W);
        }
      }
      function H(C, F, W) {
        {
          var K = Ve.ReactDebugCurrentFrame, xe = K.getStackAddendum();
          xe !== "" && (F += "%s", W = W.concat([xe]));
          var Je = W.map(function(Pe) {
            return String(Pe);
          });
          Je.unshift("Warning: " + F), Function.prototype.apply.call(console[C], console, Je);
        }
      }
      var re = {};
      function J(C, F) {
        {
          var W = C.constructor, K = W && (W.displayName || W.name) || "ReactClass", xe = K + "." + F;
          if (re[xe])
            return;
          ge("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", F, K), re[xe] = !0;
        }
      }
      var O = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(C) {
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
        enqueueForceUpdate: function(C, F, W) {
          J(C, "forceUpdate");
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
        enqueueReplaceState: function(C, F, W, K) {
          J(C, "replaceState");
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
        enqueueSetState: function(C, F, W, K) {
          J(C, "setState");
        }
      }, j = Object.assign, ze = {};
      Object.freeze(ze);
      function Le(C, F, W) {
        this.props = C, this.context = F, this.refs = ze, this.updater = W || O;
      }
      Le.prototype.isReactComponent = {}, Le.prototype.setState = function(C, F) {
        if (typeof C != "object" && typeof C != "function" && C != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, F, "setState");
      }, Le.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var Oe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ne = function(C, F) {
          Object.defineProperty(Le.prototype, C, {
            get: function() {
              Ze("%s(...) is deprecated in plain JavaScript React classes. %s", F[0], F[1]);
            }
          });
        };
        for (var Ie in Oe)
          Oe.hasOwnProperty(Ie) && Ne(Ie, Oe[Ie]);
      }
      function qe() {
      }
      qe.prototype = Le.prototype;
      function je(C, F, W) {
        this.props = C, this.context = F, this.refs = ze, this.updater = W || O;
      }
      var dt = je.prototype = new qe();
      dt.constructor = je, j(dt, Le.prototype), dt.isPureReactComponent = !0;
      function Tt() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      var kt = Array.isArray;
      function ut(C) {
        return kt(C);
      }
      function $t(C) {
        {
          var F = typeof Symbol == "function" && Symbol.toStringTag, W = F && C[Symbol.toStringTag] || C.constructor.name || "Object";
          return W;
        }
      }
      function cn(C) {
        try {
          return Hn(C), !1;
        } catch {
          return !0;
        }
      }
      function Hn(C) {
        return "" + C;
      }
      function Gn(C) {
        if (cn(C))
          return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(C)), Hn(C);
      }
      function yi(C, F, W) {
        var K = C.displayName;
        if (K)
          return K;
        var xe = F.displayName || F.name || "";
        return xe !== "" ? W + "(" + xe + ")" : W;
      }
      function nr(C) {
        return C.displayName || "Context";
      }
      function fn(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case m:
            return "Fragment";
          case d:
            return "Portal";
          case M:
            return "Profiler";
          case v:
            return "StrictMode";
          case E:
            return "Suspense";
          case b:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case g:
              var F = C;
              return nr(F) + ".Consumer";
            case _:
              var W = C;
              return nr(W._context) + ".Provider";
            case R:
              return yi(C, C.render, "ForwardRef");
            case z:
              var K = C.displayName || null;
              return K !== null ? K : fn(C.type) || "Memo";
            case D: {
              var xe = C, Je = xe._payload, Pe = xe._init;
              try {
                return fn(Pe(Je));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var dr = Object.prototype.hasOwnProperty, Xn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ht, hr, la;
      la = {};
      function zr(C) {
        if (dr.call(C, "ref")) {
          var F = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function Qr(C) {
        if (dr.call(C, "key")) {
          var F = Object.getOwnPropertyDescriptor(C, "key").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function ua(C, F) {
        var W = function() {
          Ht || (Ht = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        W.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: W,
          configurable: !0
        });
      }
      function cs(C, F) {
        var W = function() {
          hr || (hr = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        W.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: W,
          configurable: !0
        });
      }
      function Na(C) {
        if (typeof C.ref == "string" && Me.current && C.__self && Me.current.stateNode !== C.__self) {
          var F = fn(Me.current.type);
          la[F] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F, C.ref), la[F] = !0);
        }
      }
      var G = function(C, F, W, K, xe, Je, Pe) {
        var it = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: u,
          // Built-in properties that belong on the element
          type: C,
          key: F,
          ref: W,
          props: Pe,
          // Record the component responsible for creating this element.
          _owner: Je
        };
        return it._store = {}, Object.defineProperty(it._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(it, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.defineProperty(it, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: xe
        }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
      };
      function ce(C, F, W) {
        var K, xe = {}, Je = null, Pe = null, it = null, ht = null;
        if (F != null) {
          zr(F) && (Pe = F.ref, Na(F)), Qr(F) && (Gn(F.key), Je = "" + F.key), it = F.__self === void 0 ? null : F.__self, ht = F.__source === void 0 ? null : F.__source;
          for (K in F)
            dr.call(F, K) && !Xn.hasOwnProperty(K) && (xe[K] = F[K]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          xe.children = W;
        else if (Ft > 1) {
          for (var Ot = Array(Ft), gt = 0; gt < Ft; gt++)
            Ot[gt] = arguments[gt + 2];
          Object.freeze && Object.freeze(Ot), xe.children = Ot;
        }
        if (C && C.defaultProps) {
          var Ct = C.defaultProps;
          for (K in Ct)
            xe[K] === void 0 && (xe[K] = Ct[K]);
        }
        if (Je || Pe) {
          var Ut = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          Je && ua(xe, Ut), Pe && cs(xe, Ut);
        }
        return G(C, Je, Pe, it, ht, Me.current, xe);
      }
      function Fe(C, F) {
        var W = G(C.type, F, C.ref, C._self, C._source, C._owner, C.props);
        return W;
      }
      function et(C, F, W) {
        if (C == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var K, xe = j({}, C.props), Je = C.key, Pe = C.ref, it = C._self, ht = C._source, Ft = C._owner;
        if (F != null) {
          zr(F) && (Pe = F.ref, Ft = Me.current), Qr(F) && (Gn(F.key), Je = "" + F.key);
          var Ot;
          C.type && C.type.defaultProps && (Ot = C.type.defaultProps);
          for (K in F)
            dr.call(F, K) && !Xn.hasOwnProperty(K) && (F[K] === void 0 && Ot !== void 0 ? xe[K] = Ot[K] : xe[K] = F[K]);
        }
        var gt = arguments.length - 2;
        if (gt === 1)
          xe.children = W;
        else if (gt > 1) {
          for (var Ct = Array(gt), Ut = 0; Ut < gt; Ut++)
            Ct[Ut] = arguments[Ut + 2];
          xe.children = Ct;
        }
        return G(C.type, Je, Pe, it, ht, Ft, xe);
      }
      function Be(C) {
        return typeof C == "object" && C !== null && C.$$typeof === u;
      }
      var Gt = ".", Rt = ":";
      function We(C) {
        var F = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, K = C.replace(F, function(xe) {
          return W[xe];
        });
        return "$" + K;
      }
      var _e = !1, Un = /\/+/g;
      function Vt(C) {
        return C.replace(Un, "$&/");
      }
      function yt(C, F) {
        return typeof C == "object" && C !== null && C.key != null ? (Gn(C.key), We("" + C.key)) : F.toString(36);
      }
      function $s(C, F, W, K, xe) {
        var Je = typeof C;
        (Je === "undefined" || Je === "boolean") && (C = null);
        var Pe = !1;
        if (C === null)
          Pe = !0;
        else
          switch (Je) {
            case "string":
            case "number":
              Pe = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case u:
                case d:
                  Pe = !0;
              }
          }
        if (Pe) {
          var it = C, ht = xe(it), Ft = K === "" ? Gt + yt(it, 0) : K;
          if (ut(ht)) {
            var Ot = "";
            Ft != null && (Ot = Vt(Ft) + "/"), $s(ht, F, Ot, "", function(go) {
              return go;
            });
          } else ht != null && (Be(ht) && (ht.key && (!it || it.key !== ht.key) && Gn(ht.key), ht = Fe(
            ht,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ht.key && (!it || it.key !== ht.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Vt("" + ht.key) + "/"
            ) : "") + Ft
          )), F.push(ht));
          return 1;
        }
        var gt, Ct, Ut = 0, dn = K === "" ? Gt : K + Rt;
        if (ut(C))
          for (var Vi = 0; Vi < C.length; Vi++)
            gt = C[Vi], Ct = dn + yt(gt, Vi), Ut += $s(gt, F, W, Ct, xe);
        else {
          var Ur = te(C);
          if (typeof Ur == "function") {
            var _i = C;
            Ur === _i.entries && (_e || Ze("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), _e = !0);
            for (var ul = Ur.call(_i), yu, ol = 0; !(yu = ul.next()).done; )
              gt = yu.value, Ct = dn + yt(gt, ol++), Ut += $s(gt, F, W, Ct, xe);
          } else if (Je === "object") {
            var gu = String(C);
            throw new Error("Objects are not valid as a React child (found: " + (gu === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : gu) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Ut;
      }
      function pr(C, F, W) {
        if (C == null)
          return C;
        var K = [], xe = 0;
        return $s(C, K, "", "", function(Je) {
          return F.call(W, Je, xe++);
        }), K;
      }
      function Fa(C) {
        var F = 0;
        return pr(C, function() {
          F++;
        }), F;
      }
      function ou(C, F, W) {
        pr(C, function() {
          F.apply(this, arguments);
        }, W);
      }
      function _t(C) {
        return pr(C, function(F) {
          return F;
        }) || [];
      }
      function Gr(C) {
        if (!Be(C))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function Li(C) {
        var F = {
          $$typeof: g,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: C,
          _currentValue2: C,
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
        F.Provider = {
          $$typeof: _,
          _context: F
        };
        var W = !1, K = !1, xe = !1;
        {
          var Je = {
            $$typeof: g,
            _context: F
          };
          Object.defineProperties(Je, {
            Provider: {
              get: function() {
                return K || (K = !0, ge("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), F.Provider;
              },
              set: function(Pe) {
                F.Provider = Pe;
              }
            },
            _currentValue: {
              get: function() {
                return F._currentValue;
              },
              set: function(Pe) {
                F._currentValue = Pe;
              }
            },
            _currentValue2: {
              get: function() {
                return F._currentValue2;
              },
              set: function(Pe) {
                F._currentValue2 = Pe;
              }
            },
            _threadCount: {
              get: function() {
                return F._threadCount;
              },
              set: function(Pe) {
                F._threadCount = Pe;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, ge("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), F.Consumer;
              }
            },
            displayName: {
              get: function() {
                return F.displayName;
              },
              set: function(Pe) {
                xe || (Ze("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Pe), xe = !0);
              }
            }
          }), F.Consumer = Je;
        }
        return F._currentRenderer = null, F._currentRenderer2 = null, F;
      }
      var Dr = -1, rr = 0, ir = 1, oo = 2;
      function Bi(C) {
        if (C._status === Dr) {
          var F = C._result, W = F();
          if (W.then(function(Je) {
            if (C._status === rr || C._status === Dr) {
              var Pe = C;
              Pe._status = ir, Pe._result = Je;
            }
          }, function(Je) {
            if (C._status === rr || C._status === Dr) {
              var Pe = C;
              Pe._status = oo, Pe._result = Je;
            }
          }), C._status === Dr) {
            var K = C;
            K._status = rr, K._result = W;
          }
        }
        if (C._status === ir) {
          var xe = C._result;
          return xe === void 0 && ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, xe), "default" in xe || ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, xe), xe.default;
        } else
          throw C._result;
      }
      function el(C) {
        var F = {
          // We use these fields to store the result.
          _status: Dr,
          _result: C
        }, W = {
          $$typeof: D,
          _payload: F,
          _init: Bi
        };
        {
          var K, xe;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Je) {
                ge("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Je, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return xe;
              },
              set: function(Je) {
                ge("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), xe = Je, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function fs(C) {
        C != null && C.$$typeof === z ? ge("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? ge("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && ge("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && ge("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var F = {
          $$typeof: R,
          render: C
        };
        {
          var W;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(K) {
              W = K, !C.name && !C.displayName && (C.displayName = K);
            }
          });
        }
        return F;
      }
      var co;
      co = Symbol.for("react.module.reference");
      function Oa(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === m || C === M || Ae || C === v || C === E || C === b || de || C === L || me || Re || ye || typeof C == "object" && C !== null && (C.$$typeof === D || C.$$typeof === z || C.$$typeof === _ || C.$$typeof === g || C.$$typeof === R || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        C.$$typeof === co || C.getModuleId !== void 0));
      }
      function Zn(C, F) {
        Oa(C) || ge("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var W = {
          $$typeof: z,
          type: C,
          compare: F === void 0 ? null : F
        };
        {
          var K;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(xe) {
              K = xe, !C.name && !C.displayName && (C.displayName = xe);
            }
          });
        }
        return W;
      }
      function Mn() {
        var C = ee.current;
        return C === null && ge(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), C;
      }
      function fo(C) {
        var F = Mn();
        if (C._context !== void 0) {
          var W = C._context;
          W.Consumer === C ? ge("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === C && ge("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return F.useContext(C);
      }
      function cu(C) {
        var F = Mn();
        return F.useState(C);
      }
      function oa(C, F, W) {
        var K = Mn();
        return K.useReducer(C, F, W);
      }
      function tl(C) {
        var F = Mn();
        return F.useRef(C);
      }
      function gi(C, F) {
        var W = Mn();
        return W.useEffect(C, F);
      }
      function nl(C, F) {
        var W = Mn();
        return W.useInsertionEffect(C, F);
      }
      function fu(C, F) {
        var W = Mn();
        return W.useLayoutEffect(C, F);
      }
      function ds(C, F) {
        var W = Mn();
        return W.useCallback(C, F);
      }
      function hs(C, F) {
        var W = Mn();
        return W.useMemo(C, F);
      }
      function Ua(C, F, W) {
        var K = Mn();
        return K.useImperativeHandle(C, F, W);
      }
      function Ar(C, F) {
        {
          var W = Mn();
          return W.useDebugValue(C, F);
        }
      }
      function ps() {
        var C = Mn();
        return C.useTransition();
      }
      function La(C) {
        var F = Mn();
        return F.useDeferredValue(C);
      }
      function du() {
        var C = Mn();
        return C.useId();
      }
      function Vc(C, F, W) {
        var K = Mn();
        return K.useSyncExternalStore(C, F, W);
      }
      var ki = 0, Hi, Nr, jt, It, Xr, Tn, qt;
      function Zr() {
      }
      Zr.__reactDisabledLog = !0;
      function Ba() {
        {
          if (ki === 0) {
            Hi = console.log, Nr = console.info, jt = console.warn, It = console.error, Xr = console.group, Tn = console.groupCollapsed, qt = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: Zr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          ki++;
        }
      }
      function Jn() {
        {
          if (ki--, ki === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: j({}, C, {
                value: Hi
              }),
              info: j({}, C, {
                value: Nr
              }),
              warn: j({}, C, {
                value: jt
              }),
              error: j({}, C, {
                value: It
              }),
              group: j({}, C, {
                value: Xr
              }),
              groupCollapsed: j({}, C, {
                value: Tn
              }),
              groupEnd: j({}, C, {
                value: qt
              })
            });
          }
          ki < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ka = Ve.ReactCurrentDispatcher, rl;
      function ms(C, F, W) {
        {
          if (rl === void 0)
            try {
              throw Error();
            } catch (xe) {
              var K = xe.stack.trim().match(/\n( *(at )?)/);
              rl = K && K[1] || "";
            }
          return `
` + rl + C;
        }
      }
      var Pi = !1, Ha;
      {
        var mr = typeof WeakMap == "function" ? WeakMap : Map;
        Ha = new mr();
      }
      function il(C, F) {
        if (!C || Pi)
          return "";
        {
          var W = Ha.get(C);
          if (W !== void 0)
            return W;
        }
        var K;
        Pi = !0;
        var xe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Je;
        Je = ka.current, ka.current = null, Ba();
        try {
          if (F) {
            var Pe = function() {
              throw Error();
            };
            if (Object.defineProperty(Pe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Pe, []);
              } catch (dn) {
                K = dn;
              }
              Reflect.construct(C, [], Pe);
            } else {
              try {
                Pe.call();
              } catch (dn) {
                K = dn;
              }
              C.call(Pe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (dn) {
              K = dn;
            }
            C();
          }
        } catch (dn) {
          if (dn && K && typeof dn.stack == "string") {
            for (var it = dn.stack.split(`
`), ht = K.stack.split(`
`), Ft = it.length - 1, Ot = ht.length - 1; Ft >= 1 && Ot >= 0 && it[Ft] !== ht[Ot]; )
              Ot--;
            for (; Ft >= 1 && Ot >= 0; Ft--, Ot--)
              if (it[Ft] !== ht[Ot]) {
                if (Ft !== 1 || Ot !== 1)
                  do
                    if (Ft--, Ot--, Ot < 0 || it[Ft] !== ht[Ot]) {
                      var gt = `
` + it[Ft].replace(" at new ", " at ");
                      return C.displayName && gt.includes("<anonymous>") && (gt = gt.replace("<anonymous>", C.displayName)), typeof C == "function" && Ha.set(C, gt), gt;
                    }
                  while (Ft >= 1 && Ot >= 0);
                break;
              }
          }
        } finally {
          Pi = !1, ka.current = Je, Jn(), Error.prepareStackTrace = xe;
        }
        var Ct = C ? C.displayName || C.name : "", Ut = Ct ? ms(Ct) : "";
        return typeof C == "function" && Ha.set(C, Ut), Ut;
      }
      function ho(C, F, W) {
        return il(C, !1);
      }
      function po(C) {
        var F = C.prototype;
        return !!(F && F.isReactComponent);
      }
      function ca(C, F, W) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return il(C, po(C));
        if (typeof C == "string")
          return ms(C);
        switch (C) {
          case E:
            return ms("Suspense");
          case b:
            return ms("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case R:
              return ho(C.render);
            case z:
              return ca(C.type, F, W);
            case D: {
              var K = C, xe = K._payload, Je = K._init;
              try {
                return ca(Je(xe), F, W);
              } catch {
              }
            }
          }
        return "";
      }
      var fa = {}, xi = Ve.ReactDebugCurrentFrame;
      function da(C) {
        if (C) {
          var F = C._owner, W = ca(C.type, C._source, F ? F.type : null);
          xi.setExtraStackFrame(W);
        } else
          xi.setExtraStackFrame(null);
      }
      function Fr(C, F, W, K, xe) {
        {
          var Je = Function.call.bind(dr);
          for (var Pe in C)
            if (Je(C, Pe)) {
              var it = void 0;
              try {
                if (typeof C[Pe] != "function") {
                  var ht = Error((K || "React class") + ": " + W + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ht.name = "Invariant Violation", ht;
                }
                it = C[Pe](F, Pe, K, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                it = Ft;
              }
              it && !(it instanceof Error) && (da(xe), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", W, Pe, typeof it), da(null)), it instanceof Error && !(it.message in fa) && (fa[it.message] = !0, da(xe), ge("Failed %s type: %s", W, it.message), da(null));
            }
        }
      }
      function Jr(C) {
        if (C) {
          var F = C._owner, W = ca(C.type, C._source, F ? F.type : null);
          Xe(W);
        } else
          Xe(null);
      }
      var bn;
      bn = !1;
      function al() {
        if (Me.current) {
          var C = fn(Me.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function vs(C) {
        if (C !== void 0) {
          var F = C.fileName.replace(/^.*[\\\/]/, ""), W = C.lineNumber;
          return `

Check your code at ` + F + ":" + W + ".";
        }
        return "";
      }
      function jc(C) {
        return C != null ? vs(C.__source) : "";
      }
      var sl = {};
      function bt(C) {
        var F = al();
        if (!F) {
          var W = typeof C == "string" ? C : C.displayName || C.name;
          W && (F = `

Check the top-level render call using <` + W + ">.");
        }
        return F;
      }
      function hu(C, F) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var W = bt(F);
          if (!sl[W]) {
            sl[W] = !0;
            var K = "";
            C && C._owner && C._owner !== Me.current && (K = " It was passed a child from " + fn(C._owner.type) + "."), Jr(C), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, K), Jr(null);
          }
        }
      }
      function Si(C, F) {
        if (typeof C == "object") {
          if (ut(C))
            for (var W = 0; W < C.length; W++) {
              var K = C[W];
              Be(K) && hu(K, F);
            }
          else if (Be(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var xe = te(C);
            if (typeof xe == "function" && xe !== C.entries)
              for (var Je = xe.call(C), Pe; !(Pe = Je.next()).done; )
                Be(Pe.value) && hu(Pe.value, F);
          }
        }
      }
      function pu(C) {
        {
          var F = C.type;
          if (F == null || typeof F == "string")
            return;
          var W;
          if (typeof F == "function")
            W = F.propTypes;
          else if (typeof F == "object" && (F.$$typeof === R || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          F.$$typeof === z))
            W = F.propTypes;
          else
            return;
          if (W) {
            var K = fn(F);
            Fr(W, C.props, "prop", K, C);
          } else if (F.PropTypes !== void 0 && !bn) {
            bn = !0;
            var xe = fn(F);
            ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
          }
          typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ic(C) {
        {
          for (var F = Object.keys(C.props), W = 0; W < F.length; W++) {
            var K = F[W];
            if (K !== "children" && K !== "key") {
              Jr(C), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), Jr(null);
              break;
            }
          }
          C.ref !== null && (Jr(C), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Jr(null));
        }
      }
      function mo(C, F, W) {
        var K = Oa(C);
        if (!K) {
          var xe = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = jc(F);
          Je ? xe += Je : xe += al();
          var Pe;
          C === null ? Pe = "null" : ut(C) ? Pe = "array" : C !== void 0 && C.$$typeof === u ? (Pe = "<" + (fn(C.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof C, ge("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, xe);
        }
        var it = ce.apply(this, arguments);
        if (it == null)
          return it;
        if (K)
          for (var ht = 2; ht < arguments.length; ht++)
            Si(arguments[ht], C);
        return C === m ? Ic(it) : pu(it), it;
      }
      var nn = !1;
      function mu(C) {
        var F = mo.bind(null, C);
        return F.type = C, nn || (nn = !0, Ze("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(F, "type", {
          enumerable: !1,
          get: function() {
            return Ze("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), F;
      }
      function qc(C, F, W) {
        for (var K = et.apply(this, arguments), xe = 2; xe < arguments.length; xe++)
          Si(arguments[xe], K.type);
        return pu(K), K;
      }
      function vu(C, F) {
        var W = ue.transition;
        ue.transition = {};
        var K = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          C();
        } finally {
          if (ue.transition = W, W === null && K._updatedFibers) {
            var xe = K._updatedFibers.size;
            xe > 10 && Ze("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), K._updatedFibers.clear();
          }
        }
      }
      var vo = !1, ha = null;
      function Kr(C) {
        if (ha === null)
          try {
            var F = ("require" + Math.random()).slice(0, 7), W = y && y[F];
            ha = W.call(y, "timers").setImmediate;
          } catch {
            ha = function(xe) {
              vo === !1 && (vo = !0, typeof MessageChannel > "u" && ge("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Je = new MessageChannel();
              Je.port1.onmessage = xe, Je.port2.postMessage(void 0);
            };
          }
        return ha(C);
      }
      var Pa = 0, yo = !1;
      function Or(C) {
        {
          var F = Pa;
          Pa++, pe.current === null && (pe.current = []);
          var W = pe.isBatchingLegacy, K;
          try {
            if (pe.isBatchingLegacy = !0, K = C(), !W && pe.didScheduleLegacyUpdate) {
              var xe = pe.current;
              xe !== null && (pe.didScheduleLegacyUpdate = !1, gs(xe));
            }
          } catch (Ct) {
            throw vr(F), Ct;
          } finally {
            pe.isBatchingLegacy = W;
          }
          if (K !== null && typeof K == "object" && typeof K.then == "function") {
            var Je = K, Pe = !1, it = {
              then: function(Ct, Ut) {
                Pe = !0, Je.then(function(dn) {
                  vr(F), Pa === 0 ? Va(dn, Ct, Ut) : Ct(dn);
                }, function(dn) {
                  vr(F), Ut(dn);
                });
              }
            };
            return !yo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Pe || (yo = !0, ge("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), it;
          } else {
            var ht = K;
            if (vr(F), Pa === 0) {
              var Ft = pe.current;
              Ft !== null && (gs(Ft), pe.current = null);
              var Ot = {
                then: function(Ct, Ut) {
                  pe.current === null ? (pe.current = [], Va(ht, Ct, Ut)) : Ct(ht);
                }
              };
              return Ot;
            } else {
              var gt = {
                then: function(Ct, Ut) {
                  Ct(ht);
                }
              };
              return gt;
            }
          }
        }
      }
      function vr(C) {
        C !== Pa - 1 && ge("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pa = C;
      }
      function Va(C, F, W) {
        {
          var K = pe.current;
          if (K !== null)
            try {
              gs(K), Kr(function() {
                K.length === 0 ? (pe.current = null, F(C)) : Va(C, F, W);
              });
            } catch (xe) {
              W(xe);
            }
          else
            F(C);
        }
      }
      var ys = !1;
      function gs(C) {
        if (!ys) {
          ys = !0;
          var F = 0;
          try {
            for (; F < C.length; F++) {
              var W = C[F];
              do
                W = W(!0);
              while (W !== null);
            }
            C.length = 0;
          } catch (K) {
            throw C = C.slice(F + 1), K;
          } finally {
            ys = !1;
          }
        }
      }
      var Yc = mo, $r = qc, Wc = mu, ll = {
        map: pr,
        forEach: ou,
        count: Fa,
        toArray: _t,
        only: Gr
      };
      e.Children = ll, e.Component = Le, e.Fragment = m, e.Profiler = M, e.PureComponent = je, e.StrictMode = v, e.Suspense = E, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, e.act = Or, e.cloneElement = $r, e.createContext = Li, e.createElement = Yc, e.createFactory = Wc, e.createRef = Tt, e.forwardRef = fs, e.isValidElement = Be, e.lazy = el, e.memo = Zn, e.startTransition = vu, e.unstable_act = Or, e.useCallback = ds, e.useContext = fo, e.useDebugValue = Ar, e.useDeferredValue = La, e.useEffect = gi, e.useId = du, e.useImperativeHandle = Ua, e.useInsertionEffect = nl, e.useLayoutEffect = fu, e.useMemo = hs, e.useReducer = oa, e.useRef = tl, e.useState = cu, e.useSyncExternalStore = Vc, e.useTransition = ps, e.version = a, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(cd, cd.exports)), cd.exports;
}
process.env.NODE_ENV === "production" ? ay.exports = zR() : ay.exports = DR();
var st = ay.exports;
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const C1 = "163", sy = 0, AR = 1, vx = 1, NR = 2, yx = 100, gx = 204, xx = 205, Sx = 3, FR = 0, M1 = 300, _x = 1e3, Zh = 1001, Ex = 1002, Rx = 1003, Sp = 1006, OR = 1008, T1 = 1009, UR = 1014, b1 = 1015, LR = 1016, BR = 1020, w1 = 1023, Dv = 1026, Cx = 1027, z1 = "", lu = "srgb", hy = "srgb-linear", kR = "display-p3", D1 = "display-p3-linear", ly = "linear", Mx = "srgb", Tx = "rec709", bx = "p3", xc = 7680, wx = 519, HR = 515, zx = 35044, fd = 2e3, Dx = 2001;
class vd {
  addEventListener(e, a) {
    this._listeners === void 0 && (this._listeners = {});
    const u = this._listeners;
    u[e] === void 0 && (u[e] = []), u[e].indexOf(a) === -1 && u[e].push(a);
  }
  hasEventListener(e, a) {
    if (this._listeners === void 0) return !1;
    const u = this._listeners;
    return u[e] !== void 0 && u[e].indexOf(a) !== -1;
  }
  removeEventListener(e, a) {
    if (this._listeners === void 0) return;
    const d = this._listeners[e];
    if (d !== void 0) {
      const m = d.indexOf(a);
      m !== -1 && d.splice(m, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const u = this._listeners[e.type];
    if (u !== void 0) {
      e.target = this;
      const d = u.slice(0);
      for (let m = 0, v = d.length; m < v; m++)
        d[m].call(this, e);
      e.target = null;
    }
  }
}
const br = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ax = 1234567;
const A1 = Math.PI / 180, N1 = 180 / Math.PI;
function kc() {
  const y = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, a = Math.random() * 4294967295 | 0, u = Math.random() * 4294967295 | 0;
  return (br[y & 255] + br[y >> 8 & 255] + br[y >> 16 & 255] + br[y >> 24 & 255] + "-" + br[e & 255] + br[e >> 8 & 255] + "-" + br[e >> 16 & 15 | 64] + br[e >> 24 & 255] + "-" + br[a & 63 | 128] + br[a >> 8 & 255] + "-" + br[a >> 16 & 255] + br[a >> 24 & 255] + br[u & 255] + br[u >> 8 & 255] + br[u >> 16 & 255] + br[u >> 24 & 255]).toLowerCase();
}
function Yr(y, e, a) {
  return Math.max(e, Math.min(a, y));
}
function py(y, e) {
  return (y % e + e) % e;
}
function PR(y, e, a, u, d) {
  return u + (y - e) * (d - u) / (a - e);
}
function VR(y, e, a) {
  return y !== e ? (a - y) / (e - y) : 0;
}
function hd(y, e, a) {
  return (1 - a) * y + a * e;
}
function jR(y, e, a, u) {
  return hd(y, e, 1 - Math.exp(-a * u));
}
function IR(y, e = 1) {
  return e - Math.abs(py(y, e * 2) - e);
}
function qR(y, e, a) {
  return y <= e ? 0 : y >= a ? 1 : (y = (y - e) / (a - e), y * y * (3 - 2 * y));
}
function YR(y, e, a) {
  return y <= e ? 0 : y >= a ? 1 : (y = (y - e) / (a - e), y * y * y * (y * (y * 6 - 15) + 10));
}
function WR(y, e) {
  return y + Math.floor(Math.random() * (e - y + 1));
}
function QR(y, e) {
  return y + Math.random() * (e - y);
}
function GR(y) {
  return y * (0.5 - Math.random());
}
function XR(y) {
  y !== void 0 && (Ax = y);
  let e = Ax += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function ZR(y) {
  return y * A1;
}
function JR(y) {
  return y * N1;
}
function KR(y) {
  return (y & y - 1) === 0 && y !== 0;
}
function $R(y) {
  return Math.pow(2, Math.ceil(Math.log(y) / Math.LN2));
}
function eC(y) {
  return Math.pow(2, Math.floor(Math.log(y) / Math.LN2));
}
function tC(y, e, a, u, d) {
  const m = Math.cos, v = Math.sin, M = m(a / 2), _ = v(a / 2), g = m((e + u) / 2), R = v((e + u) / 2), E = m((e - u) / 2), b = v((e - u) / 2), z = m((u - e) / 2), D = v((u - e) / 2);
  switch (d) {
    case "XYX":
      y.set(M * R, _ * E, _ * b, M * g);
      break;
    case "YZY":
      y.set(_ * b, M * R, _ * E, M * g);
      break;
    case "ZXZ":
      y.set(_ * E, _ * b, M * R, M * g);
      break;
    case "XZX":
      y.set(M * R, _ * D, _ * z, M * g);
      break;
    case "YXY":
      y.set(_ * z, M * R, _ * D, M * g);
      break;
    case "ZYZ":
      y.set(_ * D, _ * z, M * R, M * g);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + d);
  }
}
function Oc(y, e) {
  switch (e.constructor) {
    case Float32Array:
      return y;
    case Uint32Array:
      return y / 4294967295;
    case Uint16Array:
      return y / 65535;
    case Uint8Array:
      return y / 255;
    case Int32Array:
      return Math.max(y / 2147483647, -1);
    case Int16Array:
      return Math.max(y / 32767, -1);
    case Int8Array:
      return Math.max(y / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function qr(y, e) {
  switch (e.constructor) {
    case Float32Array:
      return y;
    case Uint32Array:
      return Math.round(y * 4294967295);
    case Uint16Array:
      return Math.round(y * 65535);
    case Uint8Array:
      return Math.round(y * 255);
    case Int32Array:
      return Math.round(y * 2147483647);
    case Int16Array:
      return Math.round(y * 32767);
    case Int8Array:
      return Math.round(y * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const F1 = {
  DEG2RAD: A1,
  RAD2DEG: N1,
  generateUUID: kc,
  clamp: Yr,
  euclideanModulo: py,
  mapLinear: PR,
  inverseLerp: VR,
  lerp: hd,
  damp: jR,
  pingpong: IR,
  smoothstep: qR,
  smootherstep: YR,
  randInt: WR,
  randFloat: QR,
  randFloatSpread: GR,
  seededRandom: XR,
  degToRad: ZR,
  radToDeg: JR,
  isPowerOfTwo: KR,
  ceilPowerOfTwo: $R,
  floorPowerOfTwo: eC,
  setQuaternionFromProperEuler: tC,
  normalize: qr,
  denormalize: Oc
};
class Nt {
  constructor(e = 0, a = 0) {
    Nt.prototype.isVector2 = !0, this.x = e, this.y = a;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, a) {
    return this.x = e, this.y = a, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, a) {
    switch (e) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, a) {
    return this.x = e.x + a.x, this.y = e.y + a.y, this;
  }
  addScaledVector(e, a) {
    return this.x += e.x * a, this.y += e.y * a, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, a) {
    return this.x = e.x - a.x, this.y = e.y - a.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const a = this.x, u = this.y, d = e.elements;
    return this.x = d[0] * a + d[3] * u + d[6], this.y = d[1] * a + d[4] * u + d[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, a) {
    return this.x = Math.max(e.x, Math.min(a.x, this.x)), this.y = Math.max(e.y, Math.min(a.y, this.y)), this;
  }
  clampScalar(e, a) {
    return this.x = Math.max(e, Math.min(a, this.x)), this.y = Math.max(e, Math.min(a, this.y)), this;
  }
  clampLength(e, a) {
    const u = this.length();
    return this.divideScalar(u || 1).multiplyScalar(Math.max(e, Math.min(a, u)));
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
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
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
  angleTo(e) {
    const a = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (a === 0) return Math.PI / 2;
    const u = this.dot(e) / a;
    return Math.acos(Yr(u, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const a = this.x - e.x, u = this.y - e.y;
    return a * a + u * u;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, a) {
    return this.x += (e.x - this.x) * a, this.y += (e.y - this.y) * a, this;
  }
  lerpVectors(e, a, u) {
    return this.x = e.x + (a.x - e.x) * u, this.y = e.y + (a.y - e.y) * u, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, a = 0) {
    return this.x = e[a], this.y = e[a + 1], this;
  }
  toArray(e = [], a = 0) {
    return e[a] = this.x, e[a + 1] = this.y, e;
  }
  fromBufferAttribute(e, a) {
    return this.x = e.getX(a), this.y = e.getY(a), this;
  }
  rotateAround(e, a) {
    const u = Math.cos(a), d = Math.sin(a), m = this.x - e.x, v = this.y - e.y;
    return this.x = m * u - v * d + e.x, this.y = m * d + v * u + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class uu {
  constructor(e, a, u, d, m, v, M, _, g) {
    uu.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, a, u, d, m, v, M, _, g);
  }
  set(e, a, u, d, m, v, M, _, g) {
    const R = this.elements;
    return R[0] = e, R[1] = d, R[2] = M, R[3] = a, R[4] = m, R[5] = _, R[6] = u, R[7] = v, R[8] = g, this;
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
  copy(e) {
    const a = this.elements, u = e.elements;
    return a[0] = u[0], a[1] = u[1], a[2] = u[2], a[3] = u[3], a[4] = u[4], a[5] = u[5], a[6] = u[6], a[7] = u[7], a[8] = u[8], this;
  }
  extractBasis(e, a, u) {
    return e.setFromMatrix3Column(this, 0), a.setFromMatrix3Column(this, 1), u.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const a = e.elements;
    return this.set(
      a[0],
      a[4],
      a[8],
      a[1],
      a[5],
      a[9],
      a[2],
      a[6],
      a[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, a) {
    const u = e.elements, d = a.elements, m = this.elements, v = u[0], M = u[3], _ = u[6], g = u[1], R = u[4], E = u[7], b = u[2], z = u[5], D = u[8], L = d[0], k = d[3], V = d[6], te = d[1], ee = d[4], ue = d[7], pe = d[2], Me = d[5], oe = d[8];
    return m[0] = v * L + M * te + _ * pe, m[3] = v * k + M * ee + _ * Me, m[6] = v * V + M * ue + _ * oe, m[1] = g * L + R * te + E * pe, m[4] = g * k + R * ee + E * Me, m[7] = g * V + R * ue + E * oe, m[2] = b * L + z * te + D * pe, m[5] = b * k + z * ee + D * Me, m[8] = b * V + z * ue + D * oe, this;
  }
  multiplyScalar(e) {
    const a = this.elements;
    return a[0] *= e, a[3] *= e, a[6] *= e, a[1] *= e, a[4] *= e, a[7] *= e, a[2] *= e, a[5] *= e, a[8] *= e, this;
  }
  determinant() {
    const e = this.elements, a = e[0], u = e[1], d = e[2], m = e[3], v = e[4], M = e[5], _ = e[6], g = e[7], R = e[8];
    return a * v * R - a * M * g - u * m * R + u * M * _ + d * m * g - d * v * _;
  }
  invert() {
    const e = this.elements, a = e[0], u = e[1], d = e[2], m = e[3], v = e[4], M = e[5], _ = e[6], g = e[7], R = e[8], E = R * v - M * g, b = M * _ - R * m, z = g * m - v * _, D = a * E + u * b + d * z;
    if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / D;
    return e[0] = E * L, e[1] = (d * g - R * u) * L, e[2] = (M * u - d * v) * L, e[3] = b * L, e[4] = (R * a - d * _) * L, e[5] = (d * m - M * a) * L, e[6] = z * L, e[7] = (u * _ - g * a) * L, e[8] = (v * a - u * m) * L, this;
  }
  transpose() {
    let e;
    const a = this.elements;
    return e = a[1], a[1] = a[3], a[3] = e, e = a[2], a[2] = a[6], a[6] = e, e = a[5], a[5] = a[7], a[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const a = this.elements;
    return e[0] = a[0], e[1] = a[3], e[2] = a[6], e[3] = a[1], e[4] = a[4], e[5] = a[7], e[6] = a[2], e[7] = a[5], e[8] = a[8], this;
  }
  setUvTransform(e, a, u, d, m, v, M) {
    const _ = Math.cos(m), g = Math.sin(m);
    return this.set(
      u * _,
      u * g,
      -u * (_ * v + g * M) + v + e,
      -d * g,
      d * _,
      -d * (-g * v + _ * M) + M + a,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, a) {
    return this.premultiply(Av.makeScale(e, a)), this;
  }
  rotate(e) {
    return this.premultiply(Av.makeRotation(-e)), this;
  }
  translate(e, a) {
    return this.premultiply(Av.makeTranslation(e, a)), this;
  }
  // for 2D Transforms
  makeTranslation(e, a) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      a,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const a = Math.cos(e), u = Math.sin(e);
    return this.set(
      a,
      -u,
      0,
      u,
      a,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, a) {
    return this.set(
      e,
      0,
      0,
      0,
      a,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const a = this.elements, u = e.elements;
    for (let d = 0; d < 9; d++)
      if (a[d] !== u[d]) return !1;
    return !0;
  }
  fromArray(e, a = 0) {
    for (let u = 0; u < 9; u++)
      this.elements[u] = e[u + a];
    return this;
  }
  toArray(e = [], a = 0) {
    const u = this.elements;
    return e[a] = u[0], e[a + 1] = u[1], e[a + 2] = u[2], e[a + 3] = u[3], e[a + 4] = u[4], e[a + 5] = u[5], e[a + 6] = u[6], e[a + 7] = u[7], e[a + 8] = u[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Av = /* @__PURE__ */ new uu();
function nC(y) {
  for (let e = y.length - 1; e >= 0; --e)
    if (y[e] >= 65535) return !0;
  return !1;
}
function Nx(y) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", y);
}
const Fx = {};
function rC(y) {
  y in Fx || (Fx[y] = !0, console.warn(y));
}
const Ox = /* @__PURE__ */ new uu().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ux = /* @__PURE__ */ new uu().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Jh = {
  [hy]: {
    transfer: ly,
    primaries: Tx,
    toReference: (y) => y,
    fromReference: (y) => y
  },
  [lu]: {
    transfer: Mx,
    primaries: Tx,
    toReference: (y) => y.convertSRGBToLinear(),
    fromReference: (y) => y.convertLinearToSRGB()
  },
  [D1]: {
    transfer: ly,
    primaries: bx,
    toReference: (y) => y.applyMatrix3(Ux),
    fromReference: (y) => y.applyMatrix3(Ox)
  },
  [kR]: {
    transfer: Mx,
    primaries: bx,
    toReference: (y) => y.convertSRGBToLinear().applyMatrix3(Ux),
    fromReference: (y) => y.applyMatrix3(Ox).convertLinearToSRGB()
  }
}, iC = /* @__PURE__ */ new Set([hy, D1]), wa = {
  enabled: !0,
  _workingColorSpace: hy,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(y) {
    if (!iC.has(y))
      throw new Error(`Unsupported working color space, "${y}".`);
    this._workingColorSpace = y;
  },
  convert: function(y, e, a) {
    if (this.enabled === !1 || e === a || !e || !a)
      return y;
    const u = Jh[e].toReference, d = Jh[a].fromReference;
    return d(u(y));
  },
  fromWorkingColorSpace: function(y, e) {
    return this.convert(y, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(y, e) {
    return this.convert(y, e, this._workingColorSpace);
  },
  getPrimaries: function(y) {
    return Jh[y].primaries;
  },
  getTransfer: function(y) {
    return y === z1 ? ly : Jh[y].transfer;
  }
};
function Lc(y) {
  return y < 0.04045 ? y * 0.0773993808 : Math.pow(y * 0.9478672986 + 0.0521327014, 2.4);
}
function Nv(y) {
  return y < 31308e-7 ? y * 12.92 : 1.055 * Math.pow(y, 0.41666) - 0.055;
}
let Sc;
class aC {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let a;
    if (e instanceof HTMLCanvasElement)
      a = e;
    else {
      Sc === void 0 && (Sc = Nx("canvas")), Sc.width = e.width, Sc.height = e.height;
      const u = Sc.getContext("2d");
      e instanceof ImageData ? u.putImageData(e, 0, 0) : u.drawImage(e, 0, 0, e.width, e.height), a = Sc;
    }
    return a.width > 2048 || a.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), a.toDataURL("image/jpeg", 0.6)) : a.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const a = Nx("canvas");
      a.width = e.width, a.height = e.height;
      const u = a.getContext("2d");
      u.drawImage(e, 0, 0, e.width, e.height);
      const d = u.getImageData(0, 0, e.width, e.height), m = d.data;
      for (let v = 0; v < m.length; v++)
        m[v] = Lc(m[v] / 255) * 255;
      return u.putImageData(d, 0, 0), a;
    } else if (e.data) {
      const a = e.data.slice(0);
      for (let u = 0; u < a.length; u++)
        a instanceof Uint8Array || a instanceof Uint8ClampedArray ? a[u] = Math.floor(Lc(a[u] / 255) * 255) : a[u] = Lc(a[u]);
      return {
        data: a,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let sC = 0;
class O1 {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: sC++ }), this.uuid = kc(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const a = e === void 0 || typeof e == "string";
    if (!a && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const u = {
      uuid: this.uuid,
      url: ""
    }, d = this.data;
    if (d !== null) {
      let m;
      if (Array.isArray(d)) {
        m = [];
        for (let v = 0, M = d.length; v < M; v++)
          d[v].isDataTexture ? m.push(Fv(d[v].image)) : m.push(Fv(d[v]));
      } else
        m = Fv(d);
      u.url = m;
    }
    return a || (e.images[this.uuid] = u), u;
  }
}
function Fv(y) {
  return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap ? aC.getDataURL(y) : y.data ? {
    data: Array.from(y.data),
    width: y.width,
    height: y.height,
    type: y.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let lC = 0;
class os extends vd {
  constructor(e = os.DEFAULT_IMAGE, a = os.DEFAULT_MAPPING, u = Zh, d = Zh, m = Sp, v = OR, M = w1, _ = T1, g = os.DEFAULT_ANISOTROPY, R = z1) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: lC++ }), this.uuid = kc(), this.name = "", this.source = new O1(e), this.mipmaps = [], this.mapping = a, this.channel = 0, this.wrapS = u, this.wrapT = d, this.magFilter = m, this.minFilter = v, this.anisotropy = g, this.format = M, this.internalFormat = null, this.type = _, this.offset = new Nt(0, 0), this.repeat = new Nt(1, 1), this.center = new Nt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new uu(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = R, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const a = e === void 0 || typeof e == "string";
    if (!a && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const u = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
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
    return Object.keys(this.userData).length > 0 && (u.userData = this.userData), a || (e.textures[this.uuid] = u), u;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== M1) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case _x:
          e.x = e.x - Math.floor(e.x);
          break;
        case Zh:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ex:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case _x:
          e.y = e.y - Math.floor(e.y);
          break;
        case Zh:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ex:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
os.DEFAULT_IMAGE = null;
os.DEFAULT_MAPPING = M1;
os.DEFAULT_ANISOTROPY = 1;
class pd {
  constructor(e = 0, a = 0, u = 0, d = 1) {
    pd.prototype.isVector4 = !0, this.x = e, this.y = a, this.z = u, this.w = d;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, a, u, d) {
    return this.x = e, this.y = a, this.z = u, this.w = d, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, a) {
    switch (e) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      case 2:
        this.z = a;
        break;
      case 3:
        this.w = a;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, a) {
    return this.x = e.x + a.x, this.y = e.y + a.y, this.z = e.z + a.z, this.w = e.w + a.w, this;
  }
  addScaledVector(e, a) {
    return this.x += e.x * a, this.y += e.y * a, this.z += e.z * a, this.w += e.w * a, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, a) {
    return this.x = e.x - a.x, this.y = e.y - a.y, this.z = e.z - a.z, this.w = e.w - a.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const a = this.x, u = this.y, d = this.z, m = this.w, v = e.elements;
    return this.x = v[0] * a + v[4] * u + v[8] * d + v[12] * m, this.y = v[1] * a + v[5] * u + v[9] * d + v[13] * m, this.z = v[2] * a + v[6] * u + v[10] * d + v[14] * m, this.w = v[3] * a + v[7] * u + v[11] * d + v[15] * m, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const a = Math.sqrt(1 - e.w * e.w);
    return a < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / a, this.y = e.y / a, this.z = e.z / a), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let a, u, d, m;
    const _ = e.elements, g = _[0], R = _[4], E = _[8], b = _[1], z = _[5], D = _[9], L = _[2], k = _[6], V = _[10];
    if (Math.abs(R - b) < 0.01 && Math.abs(E - L) < 0.01 && Math.abs(D - k) < 0.01) {
      if (Math.abs(R + b) < 0.1 && Math.abs(E + L) < 0.1 && Math.abs(D + k) < 0.1 && Math.abs(g + z + V - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      a = Math.PI;
      const ee = (g + 1) / 2, ue = (z + 1) / 2, pe = (V + 1) / 2, Me = (R + b) / 4, oe = (E + L) / 4, se = (D + k) / 4;
      return ee > ue && ee > pe ? ee < 0.01 ? (u = 0, d = 0.707106781, m = 0.707106781) : (u = Math.sqrt(ee), d = Me / u, m = oe / u) : ue > pe ? ue < 0.01 ? (u = 0.707106781, d = 0, m = 0.707106781) : (d = Math.sqrt(ue), u = Me / d, m = se / d) : pe < 0.01 ? (u = 0.707106781, d = 0.707106781, m = 0) : (m = Math.sqrt(pe), u = oe / m, d = se / m), this.set(u, d, m, a), this;
    }
    let te = Math.sqrt((k - D) * (k - D) + (E - L) * (E - L) + (b - R) * (b - R));
    return Math.abs(te) < 1e-3 && (te = 1), this.x = (k - D) / te, this.y = (E - L) / te, this.z = (b - R) / te, this.w = Math.acos((g + z + V - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, a) {
    return this.x = Math.max(e.x, Math.min(a.x, this.x)), this.y = Math.max(e.y, Math.min(a.y, this.y)), this.z = Math.max(e.z, Math.min(a.z, this.z)), this.w = Math.max(e.w, Math.min(a.w, this.w)), this;
  }
  clampScalar(e, a) {
    return this.x = Math.max(e, Math.min(a, this.x)), this.y = Math.max(e, Math.min(a, this.y)), this.z = Math.max(e, Math.min(a, this.z)), this.w = Math.max(e, Math.min(a, this.w)), this;
  }
  clampLength(e, a) {
    const u = this.length();
    return this.divideScalar(u || 1).multiplyScalar(Math.max(e, Math.min(a, u)));
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
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
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
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, a) {
    return this.x += (e.x - this.x) * a, this.y += (e.y - this.y) * a, this.z += (e.z - this.z) * a, this.w += (e.w - this.w) * a, this;
  }
  lerpVectors(e, a, u) {
    return this.x = e.x + (a.x - e.x) * u, this.y = e.y + (a.y - e.y) * u, this.z = e.z + (a.z - e.z) * u, this.w = e.w + (a.w - e.w) * u, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, a = 0) {
    return this.x = e[a], this.y = e[a + 1], this.z = e[a + 2], this.w = e[a + 3], this;
  }
  toArray(e = [], a = 0) {
    return e[a] = this.x, e[a + 1] = this.y, e[a + 2] = this.z, e[a + 3] = this.w, e;
  }
  fromBufferAttribute(e, a) {
    return this.x = e.getX(a), this.y = e.getY(a), this.z = e.getZ(a), this.w = e.getW(a), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class uC extends vd {
  constructor(e = 1, a = 1, u = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = a, this.depth = 1, this.scissor = new pd(0, 0, e, a), this.scissorTest = !1, this.viewport = new pd(0, 0, e, a);
    const d = { width: e, height: a, depth: 1 };
    u = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Sp,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0,
      count: 1
    }, u);
    const m = new os(d, u.mapping, u.wrapS, u.wrapT, u.magFilter, u.minFilter, u.format, u.type, u.anisotropy, u.colorSpace);
    m.flipY = !1, m.generateMipmaps = u.generateMipmaps, m.internalFormat = u.internalFormat, this.textures = [];
    const v = u.count;
    for (let M = 0; M < v; M++)
      this.textures[M] = m.clone(), this.textures[M].isRenderTargetTexture = !0;
    this.depthBuffer = u.depthBuffer, this.stencilBuffer = u.stencilBuffer, this.depthTexture = u.depthTexture, this.samples = u.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, a, u = 1) {
    if (this.width !== e || this.height !== a || this.depth !== u) {
      this.width = e, this.height = a, this.depth = u;
      for (let d = 0, m = this.textures.length; d < m; d++)
        this.textures[d].image.width = e, this.textures[d].image.height = a, this.textures[d].image.depth = u;
      this.dispose();
    }
    this.viewport.set(0, 0, e, a), this.scissor.set(0, 0, e, a);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let u = 0, d = e.textures.length; u < d; u++)
      this.textures[u] = e.textures[u].clone(), this.textures[u].isRenderTargetTexture = !0;
    const a = Object.assign({}, e.texture.image);
    return this.texture.source = new O1(a), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class U1 extends uC {
  constructor(e = 1, a = 1, u = {}) {
    super(e, a, u), this.isWebGLRenderTarget = !0;
  }
}
class yd {
  constructor(e = 0, a = 0, u = 0, d = 1) {
    this.isQuaternion = !0, this._x = e, this._y = a, this._z = u, this._w = d;
  }
  static slerpFlat(e, a, u, d, m, v, M) {
    let _ = u[d + 0], g = u[d + 1], R = u[d + 2], E = u[d + 3];
    const b = m[v + 0], z = m[v + 1], D = m[v + 2], L = m[v + 3];
    if (M === 0) {
      e[a + 0] = _, e[a + 1] = g, e[a + 2] = R, e[a + 3] = E;
      return;
    }
    if (M === 1) {
      e[a + 0] = b, e[a + 1] = z, e[a + 2] = D, e[a + 3] = L;
      return;
    }
    if (E !== L || _ !== b || g !== z || R !== D) {
      let k = 1 - M;
      const V = _ * b + g * z + R * D + E * L, te = V >= 0 ? 1 : -1, ee = 1 - V * V;
      if (ee > Number.EPSILON) {
        const pe = Math.sqrt(ee), Me = Math.atan2(pe, V * te);
        k = Math.sin(k * Me) / pe, M = Math.sin(M * Me) / pe;
      }
      const ue = M * te;
      if (_ = _ * k + b * ue, g = g * k + z * ue, R = R * k + D * ue, E = E * k + L * ue, k === 1 - M) {
        const pe = 1 / Math.sqrt(_ * _ + g * g + R * R + E * E);
        _ *= pe, g *= pe, R *= pe, E *= pe;
      }
    }
    e[a] = _, e[a + 1] = g, e[a + 2] = R, e[a + 3] = E;
  }
  static multiplyQuaternionsFlat(e, a, u, d, m, v) {
    const M = u[d], _ = u[d + 1], g = u[d + 2], R = u[d + 3], E = m[v], b = m[v + 1], z = m[v + 2], D = m[v + 3];
    return e[a] = M * D + R * E + _ * z - g * b, e[a + 1] = _ * D + R * b + g * E - M * z, e[a + 2] = g * D + R * z + M * b - _ * E, e[a + 3] = R * D - M * E - _ * b - g * z, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, a, u, d) {
    return this._x = e, this._y = a, this._z = u, this._w = d, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, a = !0) {
    const u = e._x, d = e._y, m = e._z, v = e._order, M = Math.cos, _ = Math.sin, g = M(u / 2), R = M(d / 2), E = M(m / 2), b = _(u / 2), z = _(d / 2), D = _(m / 2);
    switch (v) {
      case "XYZ":
        this._x = b * R * E + g * z * D, this._y = g * z * E - b * R * D, this._z = g * R * D + b * z * E, this._w = g * R * E - b * z * D;
        break;
      case "YXZ":
        this._x = b * R * E + g * z * D, this._y = g * z * E - b * R * D, this._z = g * R * D - b * z * E, this._w = g * R * E + b * z * D;
        break;
      case "ZXY":
        this._x = b * R * E - g * z * D, this._y = g * z * E + b * R * D, this._z = g * R * D + b * z * E, this._w = g * R * E - b * z * D;
        break;
      case "ZYX":
        this._x = b * R * E - g * z * D, this._y = g * z * E + b * R * D, this._z = g * R * D - b * z * E, this._w = g * R * E + b * z * D;
        break;
      case "YZX":
        this._x = b * R * E + g * z * D, this._y = g * z * E + b * R * D, this._z = g * R * D - b * z * E, this._w = g * R * E - b * z * D;
        break;
      case "XZY":
        this._x = b * R * E - g * z * D, this._y = g * z * E - b * R * D, this._z = g * R * D + b * z * E, this._w = g * R * E + b * z * D;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + v);
    }
    return a === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, a) {
    const u = a / 2, d = Math.sin(u);
    return this._x = e.x * d, this._y = e.y * d, this._z = e.z * d, this._w = Math.cos(u), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const a = e.elements, u = a[0], d = a[4], m = a[8], v = a[1], M = a[5], _ = a[9], g = a[2], R = a[6], E = a[10], b = u + M + E;
    if (b > 0) {
      const z = 0.5 / Math.sqrt(b + 1);
      this._w = 0.25 / z, this._x = (R - _) * z, this._y = (m - g) * z, this._z = (v - d) * z;
    } else if (u > M && u > E) {
      const z = 2 * Math.sqrt(1 + u - M - E);
      this._w = (R - _) / z, this._x = 0.25 * z, this._y = (d + v) / z, this._z = (m + g) / z;
    } else if (M > E) {
      const z = 2 * Math.sqrt(1 + M - u - E);
      this._w = (m - g) / z, this._x = (d + v) / z, this._y = 0.25 * z, this._z = (_ + R) / z;
    } else {
      const z = 2 * Math.sqrt(1 + E - u - M);
      this._w = (v - d) / z, this._x = (m + g) / z, this._y = (_ + R) / z, this._z = 0.25 * z;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, a) {
    let u = e.dot(a) + 1;
    return u < Number.EPSILON ? (u = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = u) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = u)) : (this._x = e.y * a.z - e.z * a.y, this._y = e.z * a.x - e.x * a.z, this._z = e.x * a.y - e.y * a.x, this._w = u), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Yr(this.dot(e), -1, 1)));
  }
  rotateTowards(e, a) {
    const u = this.angleTo(e);
    if (u === 0) return this;
    const d = Math.min(1, a / u);
    return this.slerp(e, d), this;
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
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, a) {
    const u = e._x, d = e._y, m = e._z, v = e._w, M = a._x, _ = a._y, g = a._z, R = a._w;
    return this._x = u * R + v * M + d * g - m * _, this._y = d * R + v * _ + m * M - u * g, this._z = m * R + v * g + u * _ - d * M, this._w = v * R - u * M - d * _ - m * g, this._onChangeCallback(), this;
  }
  slerp(e, a) {
    if (a === 0) return this;
    if (a === 1) return this.copy(e);
    const u = this._x, d = this._y, m = this._z, v = this._w;
    let M = v * e._w + u * e._x + d * e._y + m * e._z;
    if (M < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, M = -M) : this.copy(e), M >= 1)
      return this._w = v, this._x = u, this._y = d, this._z = m, this;
    const _ = 1 - M * M;
    if (_ <= Number.EPSILON) {
      const z = 1 - a;
      return this._w = z * v + a * this._w, this._x = z * u + a * this._x, this._y = z * d + a * this._y, this._z = z * m + a * this._z, this.normalize(), this;
    }
    const g = Math.sqrt(_), R = Math.atan2(g, M), E = Math.sin((1 - a) * R) / g, b = Math.sin(a * R) / g;
    return this._w = v * E + this._w * b, this._x = u * E + this._x * b, this._y = d * E + this._y * b, this._z = m * E + this._z * b, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, a, u) {
    return this.copy(e).slerp(a, u);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), a = 2 * Math.PI * Math.random(), u = Math.random(), d = Math.sqrt(1 - u), m = Math.sqrt(u);
    return this.set(
      d * Math.sin(e),
      d * Math.cos(e),
      m * Math.sin(a),
      m * Math.cos(a)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, a = 0) {
    return this._x = e[a], this._y = e[a + 1], this._z = e[a + 2], this._w = e[a + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], a = 0) {
    return e[a] = this._x, e[a + 1] = this._y, e[a + 2] = this._z, e[a + 3] = this._w, e;
  }
  fromBufferAttribute(e, a) {
    return this._x = e.getX(a), this._y = e.getY(a), this._z = e.getZ(a), this._w = e.getW(a), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class le {
  constructor(e = 0, a = 0, u = 0) {
    le.prototype.isVector3 = !0, this.x = e, this.y = a, this.z = u;
  }
  set(e, a, u) {
    return u === void 0 && (u = this.z), this.x = e, this.y = a, this.z = u, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, a) {
    switch (e) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      case 2:
        this.z = a;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, a) {
    return this.x = e.x + a.x, this.y = e.y + a.y, this.z = e.z + a.z, this;
  }
  addScaledVector(e, a) {
    return this.x += e.x * a, this.y += e.y * a, this.z += e.z * a, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, a) {
    return this.x = e.x - a.x, this.y = e.y - a.y, this.z = e.z - a.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, a) {
    return this.x = e.x * a.x, this.y = e.y * a.y, this.z = e.z * a.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Lx.setFromEuler(e));
  }
  applyAxisAngle(e, a) {
    return this.applyQuaternion(Lx.setFromAxisAngle(e, a));
  }
  applyMatrix3(e) {
    const a = this.x, u = this.y, d = this.z, m = e.elements;
    return this.x = m[0] * a + m[3] * u + m[6] * d, this.y = m[1] * a + m[4] * u + m[7] * d, this.z = m[2] * a + m[5] * u + m[8] * d, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const a = this.x, u = this.y, d = this.z, m = e.elements, v = 1 / (m[3] * a + m[7] * u + m[11] * d + m[15]);
    return this.x = (m[0] * a + m[4] * u + m[8] * d + m[12]) * v, this.y = (m[1] * a + m[5] * u + m[9] * d + m[13]) * v, this.z = (m[2] * a + m[6] * u + m[10] * d + m[14]) * v, this;
  }
  applyQuaternion(e) {
    const a = this.x, u = this.y, d = this.z, m = e.x, v = e.y, M = e.z, _ = e.w, g = 2 * (v * d - M * u), R = 2 * (M * a - m * d), E = 2 * (m * u - v * a);
    return this.x = a + _ * g + v * E - M * R, this.y = u + _ * R + M * g - m * E, this.z = d + _ * E + m * R - v * g, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const a = this.x, u = this.y, d = this.z, m = e.elements;
    return this.x = m[0] * a + m[4] * u + m[8] * d, this.y = m[1] * a + m[5] * u + m[9] * d, this.z = m[2] * a + m[6] * u + m[10] * d, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, a) {
    return this.x = Math.max(e.x, Math.min(a.x, this.x)), this.y = Math.max(e.y, Math.min(a.y, this.y)), this.z = Math.max(e.z, Math.min(a.z, this.z)), this;
  }
  clampScalar(e, a) {
    return this.x = Math.max(e, Math.min(a, this.x)), this.y = Math.max(e, Math.min(a, this.y)), this.z = Math.max(e, Math.min(a, this.z)), this;
  }
  clampLength(e, a) {
    const u = this.length();
    return this.divideScalar(u || 1).multiplyScalar(Math.max(e, Math.min(a, u)));
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
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
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
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, a) {
    return this.x += (e.x - this.x) * a, this.y += (e.y - this.y) * a, this.z += (e.z - this.z) * a, this;
  }
  lerpVectors(e, a, u) {
    return this.x = e.x + (a.x - e.x) * u, this.y = e.y + (a.y - e.y) * u, this.z = e.z + (a.z - e.z) * u, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, a) {
    const u = e.x, d = e.y, m = e.z, v = a.x, M = a.y, _ = a.z;
    return this.x = d * _ - m * M, this.y = m * v - u * _, this.z = u * M - d * v, this;
  }
  projectOnVector(e) {
    const a = e.lengthSq();
    if (a === 0) return this.set(0, 0, 0);
    const u = e.dot(this) / a;
    return this.copy(e).multiplyScalar(u);
  }
  projectOnPlane(e) {
    return Ov.copy(this).projectOnVector(e), this.sub(Ov);
  }
  reflect(e) {
    return this.sub(Ov.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const a = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (a === 0) return Math.PI / 2;
    const u = this.dot(e) / a;
    return Math.acos(Yr(u, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const a = this.x - e.x, u = this.y - e.y, d = this.z - e.z;
    return a * a + u * u + d * d;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, a, u) {
    const d = Math.sin(a) * e;
    return this.x = d * Math.sin(u), this.y = Math.cos(a) * e, this.z = d * Math.cos(u), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, a, u) {
    return this.x = e * Math.sin(a), this.y = u, this.z = e * Math.cos(a), this;
  }
  setFromMatrixPosition(e) {
    const a = e.elements;
    return this.x = a[12], this.y = a[13], this.z = a[14], this;
  }
  setFromMatrixScale(e) {
    const a = this.setFromMatrixColumn(e, 0).length(), u = this.setFromMatrixColumn(e, 1).length(), d = this.setFromMatrixColumn(e, 2).length();
    return this.x = a, this.y = u, this.z = d, this;
  }
  setFromMatrixColumn(e, a) {
    return this.fromArray(e.elements, a * 4);
  }
  setFromMatrix3Column(e, a) {
    return this.fromArray(e.elements, a * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, a = 0) {
    return this.x = e[a], this.y = e[a + 1], this.z = e[a + 2], this;
  }
  toArray(e = [], a = 0) {
    return e[a] = this.x, e[a + 1] = this.y, e[a + 2] = this.z, e;
  }
  fromBufferAttribute(e, a) {
    return this.x = e.getX(a), this.y = e.getY(a), this.z = e.getZ(a), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, a = Math.random() * 2 - 1, u = Math.sqrt(1 - a * a);
    return this.x = u * Math.cos(e), this.y = a, this.z = u * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ov = /* @__PURE__ */ new le(), Lx = /* @__PURE__ */ new yd();
class gd {
  constructor(e = new le(1 / 0, 1 / 0, 1 / 0), a = new le(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = a;
  }
  set(e, a) {
    return this.min.copy(e), this.max.copy(a), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let a = 0, u = e.length; a < u; a += 3)
      this.expandByPoint(za.fromArray(e, a));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let a = 0, u = e.count; a < u; a++)
      this.expandByPoint(za.fromBufferAttribute(e, a));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let a = 0, u = e.length; a < u; a++)
      this.expandByPoint(e[a]);
    return this;
  }
  setFromCenterAndSize(e, a) {
    const u = za.copy(a).multiplyScalar(0.5);
    return this.min.copy(e).sub(u), this.max.copy(e).add(u), this;
  }
  setFromObject(e, a = !1) {
    return this.makeEmpty(), this.expandByObject(e, a);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, a = !1) {
    e.updateWorldMatrix(!1, !1);
    const u = e.geometry;
    if (u !== void 0) {
      const m = u.getAttribute("position");
      if (a === !0 && m !== void 0 && e.isInstancedMesh !== !0)
        for (let v = 0, M = m.count; v < M; v++)
          e.isMesh === !0 ? e.getVertexPosition(v, za) : za.fromBufferAttribute(m, v), za.applyMatrix4(e.matrixWorld), this.expandByPoint(za);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Kh.copy(e.boundingBox)) : (u.boundingBox === null && u.computeBoundingBox(), Kh.copy(u.boundingBox)), Kh.applyMatrix4(e.matrixWorld), this.union(Kh);
    }
    const d = e.children;
    for (let m = 0, v = d.length; m < v; m++)
      this.expandByObject(d[m], a);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, a) {
    return a.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, za), za.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let a, u;
    return e.normal.x > 0 ? (a = e.normal.x * this.min.x, u = e.normal.x * this.max.x) : (a = e.normal.x * this.max.x, u = e.normal.x * this.min.x), e.normal.y > 0 ? (a += e.normal.y * this.min.y, u += e.normal.y * this.max.y) : (a += e.normal.y * this.max.y, u += e.normal.y * this.min.y), e.normal.z > 0 ? (a += e.normal.z * this.min.z, u += e.normal.z * this.max.z) : (a += e.normal.z * this.max.z, u += e.normal.z * this.min.z), a <= -e.constant && u >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(id), $h.subVectors(this.max, id), _c.subVectors(e.a, id), Ec.subVectors(e.b, id), Rc.subVectors(e.c, id), $l.subVectors(Ec, _c), eu.subVectors(Rc, Ec), no.subVectors(_c, Rc);
    let a = [
      0,
      -$l.z,
      $l.y,
      0,
      -eu.z,
      eu.y,
      0,
      -no.z,
      no.y,
      $l.z,
      0,
      -$l.x,
      eu.z,
      0,
      -eu.x,
      no.z,
      0,
      -no.x,
      -$l.y,
      $l.x,
      0,
      -eu.y,
      eu.x,
      0,
      -no.y,
      no.x,
      0
    ];
    return !Uv(a, _c, Ec, Rc, $h) || (a = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Uv(a, _c, Ec, Rc, $h)) ? !1 : (ep.crossVectors($l, eu), a = [ep.x, ep.y, ep.z], Uv(a, _c, Ec, Rc, $h));
  }
  clampPoint(e, a) {
    return a.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, za).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(za).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Qs[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Qs[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Qs[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Qs[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Qs[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Qs[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Qs[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Qs[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Qs), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Qs = [
  /* @__PURE__ */ new le(),
  /* @__PURE__ */ new le(),
  /* @__PURE__ */ new le(),
  /* @__PURE__ */ new le(),
  /* @__PURE__ */ new le(),
  /* @__PURE__ */ new le(),
  /* @__PURE__ */ new le(),
  /* @__PURE__ */ new le()
], za = /* @__PURE__ */ new le(), Kh = /* @__PURE__ */ new gd(), _c = /* @__PURE__ */ new le(), Ec = /* @__PURE__ */ new le(), Rc = /* @__PURE__ */ new le(), $l = /* @__PURE__ */ new le(), eu = /* @__PURE__ */ new le(), no = /* @__PURE__ */ new le(), id = /* @__PURE__ */ new le(), $h = /* @__PURE__ */ new le(), ep = /* @__PURE__ */ new le(), ro = /* @__PURE__ */ new le();
function Uv(y, e, a, u, d) {
  for (let m = 0, v = y.length - 3; m <= v; m += 3) {
    ro.fromArray(y, m);
    const M = d.x * Math.abs(ro.x) + d.y * Math.abs(ro.y) + d.z * Math.abs(ro.z), _ = e.dot(ro), g = a.dot(ro), R = u.dot(ro);
    if (Math.max(-Math.max(_, g, R), Math.min(_, g, R)) > M)
      return !1;
  }
  return !0;
}
const oC = /* @__PURE__ */ new gd(), ad = /* @__PURE__ */ new le(), Lv = /* @__PURE__ */ new le();
class my {
  constructor(e = new le(), a = -1) {
    this.isSphere = !0, this.center = e, this.radius = a;
  }
  set(e, a) {
    return this.center.copy(e), this.radius = a, this;
  }
  setFromPoints(e, a) {
    const u = this.center;
    a !== void 0 ? u.copy(a) : oC.setFromPoints(e).getCenter(u);
    let d = 0;
    for (let m = 0, v = e.length; m < v; m++)
      d = Math.max(d, u.distanceToSquared(e[m]));
    return this.radius = Math.sqrt(d), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const a = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= a * a;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, a) {
    const u = this.center.distanceToSquared(e);
    return a.copy(e), u > this.radius * this.radius && (a.sub(this.center).normalize(), a.multiplyScalar(this.radius).add(this.center)), a;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ad.subVectors(e, this.center);
    const a = ad.lengthSq();
    if (a > this.radius * this.radius) {
      const u = Math.sqrt(a), d = (u - this.radius) * 0.5;
      this.center.addScaledVector(ad, d / u), this.radius += d;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Lv.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ad.copy(e.center).add(Lv)), this.expandByPoint(ad.copy(e.center).sub(Lv))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gs = /* @__PURE__ */ new le(), Bv = /* @__PURE__ */ new le(), tp = /* @__PURE__ */ new le(), tu = /* @__PURE__ */ new le(), kv = /* @__PURE__ */ new le(), np = /* @__PURE__ */ new le(), Hv = /* @__PURE__ */ new le();
class L1 {
  constructor(e = new le(), a = new le(0, 0, -1)) {
    this.origin = e, this.direction = a;
  }
  set(e, a) {
    return this.origin.copy(e), this.direction.copy(a), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, a) {
    return a.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Gs)), this;
  }
  closestPointToPoint(e, a) {
    a.subVectors(e, this.origin);
    const u = a.dot(this.direction);
    return u < 0 ? a.copy(this.origin) : a.copy(this.origin).addScaledVector(this.direction, u);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const a = Gs.subVectors(e, this.origin).dot(this.direction);
    return a < 0 ? this.origin.distanceToSquared(e) : (Gs.copy(this.origin).addScaledVector(this.direction, a), Gs.distanceToSquared(e));
  }
  distanceSqToSegment(e, a, u, d) {
    Bv.copy(e).add(a).multiplyScalar(0.5), tp.copy(a).sub(e).normalize(), tu.copy(this.origin).sub(Bv);
    const m = e.distanceTo(a) * 0.5, v = -this.direction.dot(tp), M = tu.dot(this.direction), _ = -tu.dot(tp), g = tu.lengthSq(), R = Math.abs(1 - v * v);
    let E, b, z, D;
    if (R > 0)
      if (E = v * _ - M, b = v * M - _, D = m * R, E >= 0)
        if (b >= -D)
          if (b <= D) {
            const L = 1 / R;
            E *= L, b *= L, z = E * (E + v * b + 2 * M) + b * (v * E + b + 2 * _) + g;
          } else
            b = m, E = Math.max(0, -(v * b + M)), z = -E * E + b * (b + 2 * _) + g;
        else
          b = -m, E = Math.max(0, -(v * b + M)), z = -E * E + b * (b + 2 * _) + g;
      else
        b <= -D ? (E = Math.max(0, -(-v * m + M)), b = E > 0 ? -m : Math.min(Math.max(-m, -_), m), z = -E * E + b * (b + 2 * _) + g) : b <= D ? (E = 0, b = Math.min(Math.max(-m, -_), m), z = b * (b + 2 * _) + g) : (E = Math.max(0, -(v * m + M)), b = E > 0 ? m : Math.min(Math.max(-m, -_), m), z = -E * E + b * (b + 2 * _) + g);
    else
      b = v > 0 ? -m : m, E = Math.max(0, -(v * b + M)), z = -E * E + b * (b + 2 * _) + g;
    return u && u.copy(this.origin).addScaledVector(this.direction, E), d && d.copy(Bv).addScaledVector(tp, b), z;
  }
  intersectSphere(e, a) {
    Gs.subVectors(e.center, this.origin);
    const u = Gs.dot(this.direction), d = Gs.dot(Gs) - u * u, m = e.radius * e.radius;
    if (d > m) return null;
    const v = Math.sqrt(m - d), M = u - v, _ = u + v;
    return _ < 0 ? null : M < 0 ? this.at(_, a) : this.at(M, a);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const a = e.normal.dot(this.direction);
    if (a === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const u = -(this.origin.dot(e.normal) + e.constant) / a;
    return u >= 0 ? u : null;
  }
  intersectPlane(e, a) {
    const u = this.distanceToPlane(e);
    return u === null ? null : this.at(u, a);
  }
  intersectsPlane(e) {
    const a = e.distanceToPoint(this.origin);
    return a === 0 || e.normal.dot(this.direction) * a < 0;
  }
  intersectBox(e, a) {
    let u, d, m, v, M, _;
    const g = 1 / this.direction.x, R = 1 / this.direction.y, E = 1 / this.direction.z, b = this.origin;
    return g >= 0 ? (u = (e.min.x - b.x) * g, d = (e.max.x - b.x) * g) : (u = (e.max.x - b.x) * g, d = (e.min.x - b.x) * g), R >= 0 ? (m = (e.min.y - b.y) * R, v = (e.max.y - b.y) * R) : (m = (e.max.y - b.y) * R, v = (e.min.y - b.y) * R), u > v || m > d || ((m > u || isNaN(u)) && (u = m), (v < d || isNaN(d)) && (d = v), E >= 0 ? (M = (e.min.z - b.z) * E, _ = (e.max.z - b.z) * E) : (M = (e.max.z - b.z) * E, _ = (e.min.z - b.z) * E), u > _ || M > d) || ((M > u || u !== u) && (u = M), (_ < d || d !== d) && (d = _), d < 0) ? null : this.at(u >= 0 ? u : d, a);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Gs) !== null;
  }
  intersectTriangle(e, a, u, d, m) {
    kv.subVectors(a, e), np.subVectors(u, e), Hv.crossVectors(kv, np);
    let v = this.direction.dot(Hv), M;
    if (v > 0) {
      if (d) return null;
      M = 1;
    } else if (v < 0)
      M = -1, v = -v;
    else
      return null;
    tu.subVectors(this.origin, e);
    const _ = M * this.direction.dot(np.crossVectors(tu, np));
    if (_ < 0)
      return null;
    const g = M * this.direction.dot(kv.cross(tu));
    if (g < 0 || _ + g > v)
      return null;
    const R = -M * tu.dot(Hv);
    return R < 0 ? null : this.at(R / v, m);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Wr {
  constructor(e, a, u, d, m, v, M, _, g, R, E, b, z, D, L, k) {
    Wr.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, a, u, d, m, v, M, _, g, R, E, b, z, D, L, k);
  }
  set(e, a, u, d, m, v, M, _, g, R, E, b, z, D, L, k) {
    const V = this.elements;
    return V[0] = e, V[4] = a, V[8] = u, V[12] = d, V[1] = m, V[5] = v, V[9] = M, V[13] = _, V[2] = g, V[6] = R, V[10] = E, V[14] = b, V[3] = z, V[7] = D, V[11] = L, V[15] = k, this;
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
    return new Wr().fromArray(this.elements);
  }
  copy(e) {
    const a = this.elements, u = e.elements;
    return a[0] = u[0], a[1] = u[1], a[2] = u[2], a[3] = u[3], a[4] = u[4], a[5] = u[5], a[6] = u[6], a[7] = u[7], a[8] = u[8], a[9] = u[9], a[10] = u[10], a[11] = u[11], a[12] = u[12], a[13] = u[13], a[14] = u[14], a[15] = u[15], this;
  }
  copyPosition(e) {
    const a = this.elements, u = e.elements;
    return a[12] = u[12], a[13] = u[13], a[14] = u[14], this;
  }
  setFromMatrix3(e) {
    const a = e.elements;
    return this.set(
      a[0],
      a[3],
      a[6],
      0,
      a[1],
      a[4],
      a[7],
      0,
      a[2],
      a[5],
      a[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, a, u) {
    return e.setFromMatrixColumn(this, 0), a.setFromMatrixColumn(this, 1), u.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, a, u) {
    return this.set(
      e.x,
      a.x,
      u.x,
      0,
      e.y,
      a.y,
      u.y,
      0,
      e.z,
      a.z,
      u.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const a = this.elements, u = e.elements, d = 1 / Cc.setFromMatrixColumn(e, 0).length(), m = 1 / Cc.setFromMatrixColumn(e, 1).length(), v = 1 / Cc.setFromMatrixColumn(e, 2).length();
    return a[0] = u[0] * d, a[1] = u[1] * d, a[2] = u[2] * d, a[3] = 0, a[4] = u[4] * m, a[5] = u[5] * m, a[6] = u[6] * m, a[7] = 0, a[8] = u[8] * v, a[9] = u[9] * v, a[10] = u[10] * v, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const a = this.elements, u = e.x, d = e.y, m = e.z, v = Math.cos(u), M = Math.sin(u), _ = Math.cos(d), g = Math.sin(d), R = Math.cos(m), E = Math.sin(m);
    if (e.order === "XYZ") {
      const b = v * R, z = v * E, D = M * R, L = M * E;
      a[0] = _ * R, a[4] = -_ * E, a[8] = g, a[1] = z + D * g, a[5] = b - L * g, a[9] = -M * _, a[2] = L - b * g, a[6] = D + z * g, a[10] = v * _;
    } else if (e.order === "YXZ") {
      const b = _ * R, z = _ * E, D = g * R, L = g * E;
      a[0] = b + L * M, a[4] = D * M - z, a[8] = v * g, a[1] = v * E, a[5] = v * R, a[9] = -M, a[2] = z * M - D, a[6] = L + b * M, a[10] = v * _;
    } else if (e.order === "ZXY") {
      const b = _ * R, z = _ * E, D = g * R, L = g * E;
      a[0] = b - L * M, a[4] = -v * E, a[8] = D + z * M, a[1] = z + D * M, a[5] = v * R, a[9] = L - b * M, a[2] = -v * g, a[6] = M, a[10] = v * _;
    } else if (e.order === "ZYX") {
      const b = v * R, z = v * E, D = M * R, L = M * E;
      a[0] = _ * R, a[4] = D * g - z, a[8] = b * g + L, a[1] = _ * E, a[5] = L * g + b, a[9] = z * g - D, a[2] = -g, a[6] = M * _, a[10] = v * _;
    } else if (e.order === "YZX") {
      const b = v * _, z = v * g, D = M * _, L = M * g;
      a[0] = _ * R, a[4] = L - b * E, a[8] = D * E + z, a[1] = E, a[5] = v * R, a[9] = -M * R, a[2] = -g * R, a[6] = z * E + D, a[10] = b - L * E;
    } else if (e.order === "XZY") {
      const b = v * _, z = v * g, D = M * _, L = M * g;
      a[0] = _ * R, a[4] = -E, a[8] = g * R, a[1] = b * E + L, a[5] = v * R, a[9] = z * E - D, a[2] = D * E - z, a[6] = M * R, a[10] = L * E + b;
    }
    return a[3] = 0, a[7] = 0, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(cC, e, fC);
  }
  lookAt(e, a, u) {
    const d = this.elements;
    return Oi.subVectors(e, a), Oi.lengthSq() === 0 && (Oi.z = 1), Oi.normalize(), nu.crossVectors(u, Oi), nu.lengthSq() === 0 && (Math.abs(u.z) === 1 ? Oi.x += 1e-4 : Oi.z += 1e-4, Oi.normalize(), nu.crossVectors(u, Oi)), nu.normalize(), rp.crossVectors(Oi, nu), d[0] = nu.x, d[4] = rp.x, d[8] = Oi.x, d[1] = nu.y, d[5] = rp.y, d[9] = Oi.y, d[2] = nu.z, d[6] = rp.z, d[10] = Oi.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, a) {
    const u = e.elements, d = a.elements, m = this.elements, v = u[0], M = u[4], _ = u[8], g = u[12], R = u[1], E = u[5], b = u[9], z = u[13], D = u[2], L = u[6], k = u[10], V = u[14], te = u[3], ee = u[7], ue = u[11], pe = u[15], Me = d[0], oe = d[4], se = d[8], Xe = d[12], me = d[1], Re = d[5], ye = d[9], de = d[13], Ae = d[2], Ve = d[6], Ze = d[10], ge = d[14], H = d[3], re = d[7], J = d[11], O = d[15];
    return m[0] = v * Me + M * me + _ * Ae + g * H, m[4] = v * oe + M * Re + _ * Ve + g * re, m[8] = v * se + M * ye + _ * Ze + g * J, m[12] = v * Xe + M * de + _ * ge + g * O, m[1] = R * Me + E * me + b * Ae + z * H, m[5] = R * oe + E * Re + b * Ve + z * re, m[9] = R * se + E * ye + b * Ze + z * J, m[13] = R * Xe + E * de + b * ge + z * O, m[2] = D * Me + L * me + k * Ae + V * H, m[6] = D * oe + L * Re + k * Ve + V * re, m[10] = D * se + L * ye + k * Ze + V * J, m[14] = D * Xe + L * de + k * ge + V * O, m[3] = te * Me + ee * me + ue * Ae + pe * H, m[7] = te * oe + ee * Re + ue * Ve + pe * re, m[11] = te * se + ee * ye + ue * Ze + pe * J, m[15] = te * Xe + ee * de + ue * ge + pe * O, this;
  }
  multiplyScalar(e) {
    const a = this.elements;
    return a[0] *= e, a[4] *= e, a[8] *= e, a[12] *= e, a[1] *= e, a[5] *= e, a[9] *= e, a[13] *= e, a[2] *= e, a[6] *= e, a[10] *= e, a[14] *= e, a[3] *= e, a[7] *= e, a[11] *= e, a[15] *= e, this;
  }
  determinant() {
    const e = this.elements, a = e[0], u = e[4], d = e[8], m = e[12], v = e[1], M = e[5], _ = e[9], g = e[13], R = e[2], E = e[6], b = e[10], z = e[14], D = e[3], L = e[7], k = e[11], V = e[15];
    return D * (+m * _ * E - d * g * E - m * M * b + u * g * b + d * M * z - u * _ * z) + L * (+a * _ * z - a * g * b + m * v * b - d * v * z + d * g * R - m * _ * R) + k * (+a * g * E - a * M * z - m * v * E + u * v * z + m * M * R - u * g * R) + V * (-d * M * R - a * _ * E + a * M * b + d * v * E - u * v * b + u * _ * R);
  }
  transpose() {
    const e = this.elements;
    let a;
    return a = e[1], e[1] = e[4], e[4] = a, a = e[2], e[2] = e[8], e[8] = a, a = e[6], e[6] = e[9], e[9] = a, a = e[3], e[3] = e[12], e[12] = a, a = e[7], e[7] = e[13], e[13] = a, a = e[11], e[11] = e[14], e[14] = a, this;
  }
  setPosition(e, a, u) {
    const d = this.elements;
    return e.isVector3 ? (d[12] = e.x, d[13] = e.y, d[14] = e.z) : (d[12] = e, d[13] = a, d[14] = u), this;
  }
  invert() {
    const e = this.elements, a = e[0], u = e[1], d = e[2], m = e[3], v = e[4], M = e[5], _ = e[6], g = e[7], R = e[8], E = e[9], b = e[10], z = e[11], D = e[12], L = e[13], k = e[14], V = e[15], te = E * k * g - L * b * g + L * _ * z - M * k * z - E * _ * V + M * b * V, ee = D * b * g - R * k * g - D * _ * z + v * k * z + R * _ * V - v * b * V, ue = R * L * g - D * E * g + D * M * z - v * L * z - R * M * V + v * E * V, pe = D * E * _ - R * L * _ - D * M * b + v * L * b + R * M * k - v * E * k, Me = a * te + u * ee + d * ue + m * pe;
    if (Me === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const oe = 1 / Me;
    return e[0] = te * oe, e[1] = (L * b * m - E * k * m - L * d * z + u * k * z + E * d * V - u * b * V) * oe, e[2] = (M * k * m - L * _ * m + L * d * g - u * k * g - M * d * V + u * _ * V) * oe, e[3] = (E * _ * m - M * b * m - E * d * g + u * b * g + M * d * z - u * _ * z) * oe, e[4] = ee * oe, e[5] = (R * k * m - D * b * m + D * d * z - a * k * z - R * d * V + a * b * V) * oe, e[6] = (D * _ * m - v * k * m - D * d * g + a * k * g + v * d * V - a * _ * V) * oe, e[7] = (v * b * m - R * _ * m + R * d * g - a * b * g - v * d * z + a * _ * z) * oe, e[8] = ue * oe, e[9] = (D * E * m - R * L * m - D * u * z + a * L * z + R * u * V - a * E * V) * oe, e[10] = (v * L * m - D * M * m + D * u * g - a * L * g - v * u * V + a * M * V) * oe, e[11] = (R * M * m - v * E * m - R * u * g + a * E * g + v * u * z - a * M * z) * oe, e[12] = pe * oe, e[13] = (R * L * d - D * E * d + D * u * b - a * L * b - R * u * k + a * E * k) * oe, e[14] = (D * M * d - v * L * d - D * u * _ + a * L * _ + v * u * k - a * M * k) * oe, e[15] = (v * E * d - R * M * d + R * u * _ - a * E * _ - v * u * b + a * M * b) * oe, this;
  }
  scale(e) {
    const a = this.elements, u = e.x, d = e.y, m = e.z;
    return a[0] *= u, a[4] *= d, a[8] *= m, a[1] *= u, a[5] *= d, a[9] *= m, a[2] *= u, a[6] *= d, a[10] *= m, a[3] *= u, a[7] *= d, a[11] *= m, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, a = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], u = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], d = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(a, u, d));
  }
  makeTranslation(e, a, u) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      a,
      0,
      0,
      1,
      u,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const a = Math.cos(e), u = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      a,
      -u,
      0,
      0,
      u,
      a,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const a = Math.cos(e), u = Math.sin(e);
    return this.set(
      a,
      0,
      u,
      0,
      0,
      1,
      0,
      0,
      -u,
      0,
      a,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const a = Math.cos(e), u = Math.sin(e);
    return this.set(
      a,
      -u,
      0,
      0,
      u,
      a,
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
  makeRotationAxis(e, a) {
    const u = Math.cos(a), d = Math.sin(a), m = 1 - u, v = e.x, M = e.y, _ = e.z, g = m * v, R = m * M;
    return this.set(
      g * v + u,
      g * M - d * _,
      g * _ + d * M,
      0,
      g * M + d * _,
      R * M + u,
      R * _ - d * v,
      0,
      g * _ - d * M,
      R * _ + d * v,
      m * _ * _ + u,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, a, u) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      a,
      0,
      0,
      0,
      0,
      u,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, a, u, d, m, v) {
    return this.set(
      1,
      u,
      m,
      0,
      e,
      1,
      v,
      0,
      a,
      d,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, a, u) {
    const d = this.elements, m = a._x, v = a._y, M = a._z, _ = a._w, g = m + m, R = v + v, E = M + M, b = m * g, z = m * R, D = m * E, L = v * R, k = v * E, V = M * E, te = _ * g, ee = _ * R, ue = _ * E, pe = u.x, Me = u.y, oe = u.z;
    return d[0] = (1 - (L + V)) * pe, d[1] = (z + ue) * pe, d[2] = (D - ee) * pe, d[3] = 0, d[4] = (z - ue) * Me, d[5] = (1 - (b + V)) * Me, d[6] = (k + te) * Me, d[7] = 0, d[8] = (D + ee) * oe, d[9] = (k - te) * oe, d[10] = (1 - (b + L)) * oe, d[11] = 0, d[12] = e.x, d[13] = e.y, d[14] = e.z, d[15] = 1, this;
  }
  decompose(e, a, u) {
    const d = this.elements;
    let m = Cc.set(d[0], d[1], d[2]).length();
    const v = Cc.set(d[4], d[5], d[6]).length(), M = Cc.set(d[8], d[9], d[10]).length();
    this.determinant() < 0 && (m = -m), e.x = d[12], e.y = d[13], e.z = d[14], Da.copy(this);
    const g = 1 / m, R = 1 / v, E = 1 / M;
    return Da.elements[0] *= g, Da.elements[1] *= g, Da.elements[2] *= g, Da.elements[4] *= R, Da.elements[5] *= R, Da.elements[6] *= R, Da.elements[8] *= E, Da.elements[9] *= E, Da.elements[10] *= E, a.setFromRotationMatrix(Da), u.x = m, u.y = v, u.z = M, this;
  }
  makePerspective(e, a, u, d, m, v, M = fd) {
    const _ = this.elements, g = 2 * m / (a - e), R = 2 * m / (u - d), E = (a + e) / (a - e), b = (u + d) / (u - d);
    let z, D;
    if (M === fd)
      z = -(v + m) / (v - m), D = -2 * v * m / (v - m);
    else if (M === Dx)
      z = -v / (v - m), D = -v * m / (v - m);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + M);
    return _[0] = g, _[4] = 0, _[8] = E, _[12] = 0, _[1] = 0, _[5] = R, _[9] = b, _[13] = 0, _[2] = 0, _[6] = 0, _[10] = z, _[14] = D, _[3] = 0, _[7] = 0, _[11] = -1, _[15] = 0, this;
  }
  makeOrthographic(e, a, u, d, m, v, M = fd) {
    const _ = this.elements, g = 1 / (a - e), R = 1 / (u - d), E = 1 / (v - m), b = (a + e) * g, z = (u + d) * R;
    let D, L;
    if (M === fd)
      D = (v + m) * E, L = -2 * E;
    else if (M === Dx)
      D = m * E, L = -1 * E;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + M);
    return _[0] = 2 * g, _[4] = 0, _[8] = 0, _[12] = -b, _[1] = 0, _[5] = 2 * R, _[9] = 0, _[13] = -z, _[2] = 0, _[6] = 0, _[10] = L, _[14] = -D, _[3] = 0, _[7] = 0, _[11] = 0, _[15] = 1, this;
  }
  equals(e) {
    const a = this.elements, u = e.elements;
    for (let d = 0; d < 16; d++)
      if (a[d] !== u[d]) return !1;
    return !0;
  }
  fromArray(e, a = 0) {
    for (let u = 0; u < 16; u++)
      this.elements[u] = e[u + a];
    return this;
  }
  toArray(e = [], a = 0) {
    const u = this.elements;
    return e[a] = u[0], e[a + 1] = u[1], e[a + 2] = u[2], e[a + 3] = u[3], e[a + 4] = u[4], e[a + 5] = u[5], e[a + 6] = u[6], e[a + 7] = u[7], e[a + 8] = u[8], e[a + 9] = u[9], e[a + 10] = u[10], e[a + 11] = u[11], e[a + 12] = u[12], e[a + 13] = u[13], e[a + 14] = u[14], e[a + 15] = u[15], e;
  }
}
const Cc = /* @__PURE__ */ new le(), Da = /* @__PURE__ */ new Wr(), cC = /* @__PURE__ */ new le(0, 0, 0), fC = /* @__PURE__ */ new le(1, 1, 1), nu = /* @__PURE__ */ new le(), rp = /* @__PURE__ */ new le(), Oi = /* @__PURE__ */ new le(), Bx = /* @__PURE__ */ new Wr(), kx = /* @__PURE__ */ new yd();
class Ks {
  constructor(e = 0, a = 0, u = 0, d = Ks.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = a, this._z = u, this._order = d;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, a, u, d = this._order) {
    return this._x = e, this._y = a, this._z = u, this._order = d, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, a = this._order, u = !0) {
    const d = e.elements, m = d[0], v = d[4], M = d[8], _ = d[1], g = d[5], R = d[9], E = d[2], b = d[6], z = d[10];
    switch (a) {
      case "XYZ":
        this._y = Math.asin(Yr(M, -1, 1)), Math.abs(M) < 0.9999999 ? (this._x = Math.atan2(-R, z), this._z = Math.atan2(-v, m)) : (this._x = Math.atan2(b, g), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Yr(R, -1, 1)), Math.abs(R) < 0.9999999 ? (this._y = Math.atan2(M, z), this._z = Math.atan2(_, g)) : (this._y = Math.atan2(-E, m), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Yr(b, -1, 1)), Math.abs(b) < 0.9999999 ? (this._y = Math.atan2(-E, z), this._z = Math.atan2(-v, g)) : (this._y = 0, this._z = Math.atan2(_, m));
        break;
      case "ZYX":
        this._y = Math.asin(-Yr(E, -1, 1)), Math.abs(E) < 0.9999999 ? (this._x = Math.atan2(b, z), this._z = Math.atan2(_, m)) : (this._x = 0, this._z = Math.atan2(-v, g));
        break;
      case "YZX":
        this._z = Math.asin(Yr(_, -1, 1)), Math.abs(_) < 0.9999999 ? (this._x = Math.atan2(-R, g), this._y = Math.atan2(-E, m)) : (this._x = 0, this._y = Math.atan2(M, z));
        break;
      case "XZY":
        this._z = Math.asin(-Yr(v, -1, 1)), Math.abs(v) < 0.9999999 ? (this._x = Math.atan2(b, g), this._y = Math.atan2(M, m)) : (this._x = Math.atan2(-R, z), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + a);
    }
    return this._order = a, u === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, a, u) {
    return Bx.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Bx, a, u);
  }
  setFromVector3(e, a = this._order) {
    return this.set(e.x, e.y, e.z, a);
  }
  reorder(e) {
    return kx.setFromEuler(this), this.setFromQuaternion(kx, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], a = 0) {
    return e[a] = this._x, e[a + 1] = this._y, e[a + 2] = this._z, e[a + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ks.DEFAULT_ORDER = "XYZ";
class yp {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let dC = 0;
const Hx = /* @__PURE__ */ new le(), Mc = /* @__PURE__ */ new yd(), Xs = /* @__PURE__ */ new Wr(), ip = /* @__PURE__ */ new le(), sd = /* @__PURE__ */ new le(), hC = /* @__PURE__ */ new le(), pC = /* @__PURE__ */ new yd(), Px = /* @__PURE__ */ new le(1, 0, 0), Vx = /* @__PURE__ */ new le(0, 1, 0), jx = /* @__PURE__ */ new le(0, 0, 1), Ix = { type: "added" }, mC = { type: "removed" }, Tc = { type: "childadded", child: null }, Pv = { type: "childremoved", child: null };
class vi extends vd {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: dC++ }), this.uuid = kc(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = vi.DEFAULT_UP.clone();
    const e = new le(), a = new Ks(), u = new yd(), d = new le(1, 1, 1);
    function m() {
      u.setFromEuler(a, !1);
    }
    function v() {
      a.setFromQuaternion(u, void 0, !1);
    }
    a._onChange(m), u._onChange(v), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: a
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: u
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: d
      },
      modelViewMatrix: {
        value: new Wr()
      },
      normalMatrix: {
        value: new uu()
      }
    }), this.matrix = new Wr(), this.matrixWorld = new Wr(), this.matrixAutoUpdate = vi.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new yp(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, a) {
    this.quaternion.setFromAxisAngle(e, a);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, a) {
    return Mc.setFromAxisAngle(e, a), this.quaternion.multiply(Mc), this;
  }
  rotateOnWorldAxis(e, a) {
    return Mc.setFromAxisAngle(e, a), this.quaternion.premultiply(Mc), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Px, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Vx, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(jx, e);
  }
  translateOnAxis(e, a) {
    return Hx.copy(e).applyQuaternion(this.quaternion), this.position.add(Hx.multiplyScalar(a)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Px, e);
  }
  translateY(e) {
    return this.translateOnAxis(Vx, e);
  }
  translateZ(e) {
    return this.translateOnAxis(jx, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Xs.copy(this.matrixWorld).invert());
  }
  lookAt(e, a, u) {
    e.isVector3 ? ip.copy(e) : ip.set(e, a, u);
    const d = this.parent;
    this.updateWorldMatrix(!0, !1), sd.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xs.lookAt(sd, ip, this.up) : Xs.lookAt(ip, sd, this.up), this.quaternion.setFromRotationMatrix(Xs), d && (Xs.extractRotation(d.matrixWorld), Mc.setFromRotationMatrix(Xs), this.quaternion.premultiply(Mc.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let a = 0; a < arguments.length; a++)
        this.add(arguments[a]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ix), Tc.child = e, this.dispatchEvent(Tc), Tc.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let u = 0; u < arguments.length; u++)
        this.remove(arguments[u]);
      return this;
    }
    const a = this.children.indexOf(e);
    return a !== -1 && (e.parent = null, this.children.splice(a, 1), e.dispatchEvent(mC), Pv.child = e, this.dispatchEvent(Pv), Pv.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Xs.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Xs.multiply(e.parent.matrixWorld)), e.applyMatrix4(Xs), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Ix), Tc.child = e, this.dispatchEvent(Tc), Tc.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, a) {
    if (this[e] === a) return this;
    for (let u = 0, d = this.children.length; u < d; u++) {
      const v = this.children[u].getObjectByProperty(e, a);
      if (v !== void 0)
        return v;
    }
  }
  getObjectsByProperty(e, a, u = []) {
    this[e] === a && u.push(this);
    const d = this.children;
    for (let m = 0, v = d.length; m < v; m++)
      d[m].getObjectsByProperty(e, a, u);
    return u;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(sd, e, hC), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(sd, pC, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const a = this.matrixWorld.elements;
    return e.set(a[8], a[9], a[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const a = this.children;
    for (let u = 0, d = a.length; u < d; u++)
      a[u].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const a = this.children;
    for (let u = 0, d = a.length; u < d; u++)
      a[u].traverseVisible(e);
  }
  traverseAncestors(e) {
    const a = this.parent;
    a !== null && (e(a), a.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const a = this.children;
    for (let u = 0, d = a.length; u < d; u++) {
      const m = a[u];
      (m.matrixWorldAutoUpdate === !0 || e === !0) && m.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, a) {
    const u = this.parent;
    if (e === !0 && u !== null && u.matrixWorldAutoUpdate === !0 && u.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), a === !0) {
      const d = this.children;
      for (let m = 0, v = d.length; m < v; m++) {
        const M = d[m];
        M.matrixWorldAutoUpdate === !0 && M.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const a = e === void 0 || typeof e == "string", u = {};
    a && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, u.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const d = {};
    d.uuid = this.uuid, d.type = this.type, this.name !== "" && (d.name = this.name), this.castShadow === !0 && (d.castShadow = !0), this.receiveShadow === !0 && (d.receiveShadow = !0), this.visible === !1 && (d.visible = !1), this.frustumCulled === !1 && (d.frustumCulled = !1), this.renderOrder !== 0 && (d.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (d.userData = this.userData), d.layers = this.layers.mask, d.matrix = this.matrix.toArray(), d.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (d.matrixAutoUpdate = !1), this.isInstancedMesh && (d.type = "InstancedMesh", d.count = this.count, d.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (d.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (d.type = "BatchedMesh", d.perObjectFrustumCulled = this.perObjectFrustumCulled, d.sortObjects = this.sortObjects, d.drawRanges = this._drawRanges, d.reservedRanges = this._reservedRanges, d.visibility = this._visibility, d.active = this._active, d.bounds = this._bounds.map((M) => ({
      boxInitialized: M.boxInitialized,
      boxMin: M.box.min.toArray(),
      boxMax: M.box.max.toArray(),
      sphereInitialized: M.sphereInitialized,
      sphereRadius: M.sphere.radius,
      sphereCenter: M.sphere.center.toArray()
    })), d.maxGeometryCount = this._maxGeometryCount, d.maxVertexCount = this._maxVertexCount, d.maxIndexCount = this._maxIndexCount, d.geometryInitialized = this._geometryInitialized, d.geometryCount = this._geometryCount, d.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (d.boundingSphere = {
      center: d.boundingSphere.center.toArray(),
      radius: d.boundingSphere.radius
    }), this.boundingBox !== null && (d.boundingBox = {
      min: d.boundingBox.min.toArray(),
      max: d.boundingBox.max.toArray()
    }));
    function m(M, _) {
      return M[_.uuid] === void 0 && (M[_.uuid] = _.toJSON(e)), _.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? d.background = this.background.toJSON() : this.background.isTexture && (d.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (d.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      d.geometry = m(e.geometries, this.geometry);
      const M = this.geometry.parameters;
      if (M !== void 0 && M.shapes !== void 0) {
        const _ = M.shapes;
        if (Array.isArray(_))
          for (let g = 0, R = _.length; g < R; g++) {
            const E = _[g];
            m(e.shapes, E);
          }
        else
          m(e.shapes, _);
      }
    }
    if (this.isSkinnedMesh && (d.bindMode = this.bindMode, d.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (m(e.skeletons, this.skeleton), d.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const M = [];
        for (let _ = 0, g = this.material.length; _ < g; _++)
          M.push(m(e.materials, this.material[_]));
        d.material = M;
      } else
        d.material = m(e.materials, this.material);
    if (this.children.length > 0) {
      d.children = [];
      for (let M = 0; M < this.children.length; M++)
        d.children.push(this.children[M].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      d.animations = [];
      for (let M = 0; M < this.animations.length; M++) {
        const _ = this.animations[M];
        d.animations.push(m(e.animations, _));
      }
    }
    if (a) {
      const M = v(e.geometries), _ = v(e.materials), g = v(e.textures), R = v(e.images), E = v(e.shapes), b = v(e.skeletons), z = v(e.animations), D = v(e.nodes);
      M.length > 0 && (u.geometries = M), _.length > 0 && (u.materials = _), g.length > 0 && (u.textures = g), R.length > 0 && (u.images = R), E.length > 0 && (u.shapes = E), b.length > 0 && (u.skeletons = b), z.length > 0 && (u.animations = z), D.length > 0 && (u.nodes = D);
    }
    return u.object = d, u;
    function v(M) {
      const _ = [];
      for (const g in M) {
        const R = M[g];
        delete R.metadata, _.push(R);
      }
      return _;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, a = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), a === !0)
      for (let u = 0; u < e.children.length; u++) {
        const d = e.children[u];
        this.add(d.clone());
      }
    return this;
  }
}
vi.DEFAULT_UP = /* @__PURE__ */ new le(0, 1, 0);
vi.DEFAULT_MATRIX_AUTO_UPDATE = !0;
vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Aa = /* @__PURE__ */ new le(), Zs = /* @__PURE__ */ new le(), Vv = /* @__PURE__ */ new le(), Js = /* @__PURE__ */ new le(), bc = /* @__PURE__ */ new le(), wc = /* @__PURE__ */ new le(), qx = /* @__PURE__ */ new le(), jv = /* @__PURE__ */ new le(), Iv = /* @__PURE__ */ new le(), qv = /* @__PURE__ */ new le();
class us {
  constructor(e = new le(), a = new le(), u = new le()) {
    this.a = e, this.b = a, this.c = u;
  }
  static getNormal(e, a, u, d) {
    d.subVectors(u, a), Aa.subVectors(e, a), d.cross(Aa);
    const m = d.lengthSq();
    return m > 0 ? d.multiplyScalar(1 / Math.sqrt(m)) : d.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, a, u, d, m) {
    Aa.subVectors(d, a), Zs.subVectors(u, a), Vv.subVectors(e, a);
    const v = Aa.dot(Aa), M = Aa.dot(Zs), _ = Aa.dot(Vv), g = Zs.dot(Zs), R = Zs.dot(Vv), E = v * g - M * M;
    if (E === 0)
      return m.set(0, 0, 0), null;
    const b = 1 / E, z = (g * _ - M * R) * b, D = (v * R - M * _) * b;
    return m.set(1 - z - D, D, z);
  }
  static containsPoint(e, a, u, d) {
    return this.getBarycoord(e, a, u, d, Js) === null ? !1 : Js.x >= 0 && Js.y >= 0 && Js.x + Js.y <= 1;
  }
  static getInterpolation(e, a, u, d, m, v, M, _) {
    return this.getBarycoord(e, a, u, d, Js) === null ? (_.x = 0, _.y = 0, "z" in _ && (_.z = 0), "w" in _ && (_.w = 0), null) : (_.setScalar(0), _.addScaledVector(m, Js.x), _.addScaledVector(v, Js.y), _.addScaledVector(M, Js.z), _);
  }
  static isFrontFacing(e, a, u, d) {
    return Aa.subVectors(u, a), Zs.subVectors(e, a), Aa.cross(Zs).dot(d) < 0;
  }
  set(e, a, u) {
    return this.a.copy(e), this.b.copy(a), this.c.copy(u), this;
  }
  setFromPointsAndIndices(e, a, u, d) {
    return this.a.copy(e[a]), this.b.copy(e[u]), this.c.copy(e[d]), this;
  }
  setFromAttributeAndIndices(e, a, u, d) {
    return this.a.fromBufferAttribute(e, a), this.b.fromBufferAttribute(e, u), this.c.fromBufferAttribute(e, d), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Aa.subVectors(this.c, this.b), Zs.subVectors(this.a, this.b), Aa.cross(Zs).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return us.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, a) {
    return us.getBarycoord(e, this.a, this.b, this.c, a);
  }
  getInterpolation(e, a, u, d, m) {
    return us.getInterpolation(e, this.a, this.b, this.c, a, u, d, m);
  }
  containsPoint(e) {
    return us.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return us.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, a) {
    const u = this.a, d = this.b, m = this.c;
    let v, M;
    bc.subVectors(d, u), wc.subVectors(m, u), jv.subVectors(e, u);
    const _ = bc.dot(jv), g = wc.dot(jv);
    if (_ <= 0 && g <= 0)
      return a.copy(u);
    Iv.subVectors(e, d);
    const R = bc.dot(Iv), E = wc.dot(Iv);
    if (R >= 0 && E <= R)
      return a.copy(d);
    const b = _ * E - R * g;
    if (b <= 0 && _ >= 0 && R <= 0)
      return v = _ / (_ - R), a.copy(u).addScaledVector(bc, v);
    qv.subVectors(e, m);
    const z = bc.dot(qv), D = wc.dot(qv);
    if (D >= 0 && z <= D)
      return a.copy(m);
    const L = z * g - _ * D;
    if (L <= 0 && g >= 0 && D <= 0)
      return M = g / (g - D), a.copy(u).addScaledVector(wc, M);
    const k = R * D - z * E;
    if (k <= 0 && E - R >= 0 && z - D >= 0)
      return qx.subVectors(m, d), M = (E - R) / (E - R + (z - D)), a.copy(d).addScaledVector(qx, M);
    const V = 1 / (k + L + b);
    return v = L * V, M = b * V, a.copy(u).addScaledVector(bc, v).addScaledVector(wc, M);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const B1 = {
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
}, ru = { h: 0, s: 0, l: 0 }, ap = { h: 0, s: 0, l: 0 };
function Yv(y, e, a) {
  return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? y + (e - y) * 6 * a : a < 1 / 2 ? e : a < 2 / 3 ? y + (e - y) * 6 * (2 / 3 - a) : y;
}
class Hc {
  constructor(e, a, u) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, a, u);
  }
  set(e, a, u) {
    if (a === void 0 && u === void 0) {
      const d = e;
      d && d.isColor ? this.copy(d) : typeof d == "number" ? this.setHex(d) : typeof d == "string" && this.setStyle(d);
    } else
      this.setRGB(e, a, u);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, a = lu) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, wa.toWorkingColorSpace(this, a), this;
  }
  setRGB(e, a, u, d = wa.workingColorSpace) {
    return this.r = e, this.g = a, this.b = u, wa.toWorkingColorSpace(this, d), this;
  }
  setHSL(e, a, u, d = wa.workingColorSpace) {
    if (e = py(e, 1), a = Yr(a, 0, 1), u = Yr(u, 0, 1), a === 0)
      this.r = this.g = this.b = u;
    else {
      const m = u <= 0.5 ? u * (1 + a) : u + a - u * a, v = 2 * u - m;
      this.r = Yv(v, m, e + 1 / 3), this.g = Yv(v, m, e), this.b = Yv(v, m, e - 1 / 3);
    }
    return wa.toWorkingColorSpace(this, d), this;
  }
  setStyle(e, a = lu) {
    function u(m) {
      m !== void 0 && parseFloat(m) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let d;
    if (d = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let m;
      const v = d[1], M = d[2];
      switch (v) {
        case "rgb":
        case "rgba":
          if (m = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))
            return u(m[4]), this.setRGB(
              Math.min(255, parseInt(m[1], 10)) / 255,
              Math.min(255, parseInt(m[2], 10)) / 255,
              Math.min(255, parseInt(m[3], 10)) / 255,
              a
            );
          if (m = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))
            return u(m[4]), this.setRGB(
              Math.min(100, parseInt(m[1], 10)) / 100,
              Math.min(100, parseInt(m[2], 10)) / 100,
              Math.min(100, parseInt(m[3], 10)) / 100,
              a
            );
          break;
        case "hsl":
        case "hsla":
          if (m = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))
            return u(m[4]), this.setHSL(
              parseFloat(m[1]) / 360,
              parseFloat(m[2]) / 100,
              parseFloat(m[3]) / 100,
              a
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (d = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const m = d[1], v = m.length;
      if (v === 3)
        return this.setRGB(
          parseInt(m.charAt(0), 16) / 15,
          parseInt(m.charAt(1), 16) / 15,
          parseInt(m.charAt(2), 16) / 15,
          a
        );
      if (v === 6)
        return this.setHex(parseInt(m, 16), a);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, a);
    return this;
  }
  setColorName(e, a = lu) {
    const u = B1[e.toLowerCase()];
    return u !== void 0 ? this.setHex(u, a) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Lc(e.r), this.g = Lc(e.g), this.b = Lc(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Nv(e.r), this.g = Nv(e.g), this.b = Nv(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = lu) {
    return wa.fromWorkingColorSpace(wr.copy(this), e), Math.round(Yr(wr.r * 255, 0, 255)) * 65536 + Math.round(Yr(wr.g * 255, 0, 255)) * 256 + Math.round(Yr(wr.b * 255, 0, 255));
  }
  getHexString(e = lu) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, a = wa.workingColorSpace) {
    wa.fromWorkingColorSpace(wr.copy(this), a);
    const u = wr.r, d = wr.g, m = wr.b, v = Math.max(u, d, m), M = Math.min(u, d, m);
    let _, g;
    const R = (M + v) / 2;
    if (M === v)
      _ = 0, g = 0;
    else {
      const E = v - M;
      switch (g = R <= 0.5 ? E / (v + M) : E / (2 - v - M), v) {
        case u:
          _ = (d - m) / E + (d < m ? 6 : 0);
          break;
        case d:
          _ = (m - u) / E + 2;
          break;
        case m:
          _ = (u - d) / E + 4;
          break;
      }
      _ /= 6;
    }
    return e.h = _, e.s = g, e.l = R, e;
  }
  getRGB(e, a = wa.workingColorSpace) {
    return wa.fromWorkingColorSpace(wr.copy(this), a), e.r = wr.r, e.g = wr.g, e.b = wr.b, e;
  }
  getStyle(e = lu) {
    wa.fromWorkingColorSpace(wr.copy(this), e);
    const a = wr.r, u = wr.g, d = wr.b;
    return e !== lu ? `color(${e} ${a.toFixed(3)} ${u.toFixed(3)} ${d.toFixed(3)})` : `rgb(${Math.round(a * 255)},${Math.round(u * 255)},${Math.round(d * 255)})`;
  }
  offsetHSL(e, a, u) {
    return this.getHSL(ru), this.setHSL(ru.h + e, ru.s + a, ru.l + u);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, a) {
    return this.r = e.r + a.r, this.g = e.g + a.g, this.b = e.b + a.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, a) {
    return this.r += (e.r - this.r) * a, this.g += (e.g - this.g) * a, this.b += (e.b - this.b) * a, this;
  }
  lerpColors(e, a, u) {
    return this.r = e.r + (a.r - e.r) * u, this.g = e.g + (a.g - e.g) * u, this.b = e.b + (a.b - e.b) * u, this;
  }
  lerpHSL(e, a) {
    this.getHSL(ru), e.getHSL(ap);
    const u = hd(ru.h, ap.h, a), d = hd(ru.s, ap.s, a), m = hd(ru.l, ap.l, a);
    return this.setHSL(u, d, m), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const a = this.r, u = this.g, d = this.b, m = e.elements;
    return this.r = m[0] * a + m[3] * u + m[6] * d, this.g = m[1] * a + m[4] * u + m[7] * d, this.b = m[2] * a + m[5] * u + m[8] * d, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, a = 0) {
    return this.r = e[a], this.g = e[a + 1], this.b = e[a + 2], this;
  }
  toArray(e = [], a = 0) {
    return e[a] = this.r, e[a + 1] = this.g, e[a + 2] = this.b, e;
  }
  fromBufferAttribute(e, a) {
    return this.r = e.getX(a), this.g = e.getY(a), this.b = e.getZ(a), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const wr = /* @__PURE__ */ new Hc();
Hc.NAMES = B1;
let vC = 0;
class Ep extends vd {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: vC++ }), this.uuid = kc(), this.name = "", this.type = "Material", this.blending = vx, this.side = sy, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = gx, this.blendDst = xx, this.blendEquation = yx, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Hc(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Sx, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = wx, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = xc, this.stencilZFail = xc, this.stencilZPass = xc, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
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
  setValues(e) {
    if (e !== void 0)
      for (const a in e) {
        const u = e[a];
        if (u === void 0) {
          console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);
          continue;
        }
        const d = this[a];
        if (d === void 0) {
          console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);
          continue;
        }
        d && d.isColor ? d.set(u) : d && d.isVector3 && u && u.isVector3 ? d.copy(u) : this[a] = u;
      }
  }
  toJSON(e) {
    const a = e === void 0 || typeof e == "string";
    a && (e = {
      textures: {},
      images: {}
    });
    const u = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    u.uuid = this.uuid, u.type = this.type, this.name !== "" && (u.name = this.name), this.color && this.color.isColor && (u.color = this.color.getHex()), this.roughness !== void 0 && (u.roughness = this.roughness), this.metalness !== void 0 && (u.metalness = this.metalness), this.sheen !== void 0 && (u.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (u.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (u.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (u.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (u.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (u.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (u.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (u.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (u.shininess = this.shininess), this.clearcoat !== void 0 && (u.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (u.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (u.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (u.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (u.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, u.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (u.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (u.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (u.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (u.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (u.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (u.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (u.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (u.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (u.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (u.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (u.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (u.lightMap = this.lightMap.toJSON(e).uuid, u.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (u.aoMap = this.aoMap.toJSON(e).uuid, u.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (u.bumpMap = this.bumpMap.toJSON(e).uuid, u.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (u.normalMap = this.normalMap.toJSON(e).uuid, u.normalMapType = this.normalMapType, u.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (u.displacementMap = this.displacementMap.toJSON(e).uuid, u.displacementScale = this.displacementScale, u.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (u.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (u.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (u.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (u.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (u.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (u.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (u.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (u.combine = this.combine)), this.envMapRotation !== void 0 && (u.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (u.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (u.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (u.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (u.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (u.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (u.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (u.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (u.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (u.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (u.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (u.size = this.size), this.shadowSide !== null && (u.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (u.sizeAttenuation = this.sizeAttenuation), this.blending !== vx && (u.blending = this.blending), this.side !== sy && (u.side = this.side), this.vertexColors === !0 && (u.vertexColors = !0), this.opacity < 1 && (u.opacity = this.opacity), this.transparent === !0 && (u.transparent = !0), this.blendSrc !== gx && (u.blendSrc = this.blendSrc), this.blendDst !== xx && (u.blendDst = this.blendDst), this.blendEquation !== yx && (u.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (u.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (u.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (u.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (u.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (u.blendAlpha = this.blendAlpha), this.depthFunc !== Sx && (u.depthFunc = this.depthFunc), this.depthTest === !1 && (u.depthTest = this.depthTest), this.depthWrite === !1 && (u.depthWrite = this.depthWrite), this.colorWrite === !1 && (u.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (u.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== wx && (u.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (u.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (u.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== xc && (u.stencilFail = this.stencilFail), this.stencilZFail !== xc && (u.stencilZFail = this.stencilZFail), this.stencilZPass !== xc && (u.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (u.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (u.rotation = this.rotation), this.polygonOffset === !0 && (u.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (u.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (u.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (u.linewidth = this.linewidth), this.dashSize !== void 0 && (u.dashSize = this.dashSize), this.gapSize !== void 0 && (u.gapSize = this.gapSize), this.scale !== void 0 && (u.scale = this.scale), this.dithering === !0 && (u.dithering = !0), this.alphaTest > 0 && (u.alphaTest = this.alphaTest), this.alphaHash === !0 && (u.alphaHash = !0), this.alphaToCoverage === !0 && (u.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (u.premultipliedAlpha = !0), this.forceSinglePass === !0 && (u.forceSinglePass = !0), this.wireframe === !0 && (u.wireframe = !0), this.wireframeLinewidth > 1 && (u.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (u.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (u.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (u.flatShading = !0), this.visible === !1 && (u.visible = !1), this.toneMapped === !1 && (u.toneMapped = !1), this.fog === !1 && (u.fog = !1), Object.keys(this.userData).length > 0 && (u.userData = this.userData);
    function d(m) {
      const v = [];
      for (const M in m) {
        const _ = m[M];
        delete _.metadata, v.push(_);
      }
      return v;
    }
    if (a) {
      const m = d(e.textures), v = d(e.images);
      m.length > 0 && (u.textures = m), v.length > 0 && (u.images = v);
    }
    return u;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const a = e.clippingPlanes;
    let u = null;
    if (a !== null) {
      const d = a.length;
      u = new Array(d);
      for (let m = 0; m !== d; ++m)
        u[m] = a[m].clone();
    }
    return this.clippingPlanes = u, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class yC extends Ep {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Hc(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ks(), this.combine = FR, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const kn = /* @__PURE__ */ new le(), sp = /* @__PURE__ */ new Nt();
class lo {
  constructor(e, a, u = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = a, this.count = e !== void 0 ? e.length / a : 0, this.normalized = u, this.usage = zx, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = b1, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return rC("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, a) {
    this.updateRanges.push({ start: e, count: a });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, a, u) {
    e *= this.itemSize, u *= a.itemSize;
    for (let d = 0, m = this.itemSize; d < m; d++)
      this.array[e + d] = a.array[u + d];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let a = 0, u = this.count; a < u; a++)
        sp.fromBufferAttribute(this, a), sp.applyMatrix3(e), this.setXY(a, sp.x, sp.y);
    else if (this.itemSize === 3)
      for (let a = 0, u = this.count; a < u; a++)
        kn.fromBufferAttribute(this, a), kn.applyMatrix3(e), this.setXYZ(a, kn.x, kn.y, kn.z);
    return this;
  }
  applyMatrix4(e) {
    for (let a = 0, u = this.count; a < u; a++)
      kn.fromBufferAttribute(this, a), kn.applyMatrix4(e), this.setXYZ(a, kn.x, kn.y, kn.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let a = 0, u = this.count; a < u; a++)
      kn.fromBufferAttribute(this, a), kn.applyNormalMatrix(e), this.setXYZ(a, kn.x, kn.y, kn.z);
    return this;
  }
  transformDirection(e) {
    for (let a = 0, u = this.count; a < u; a++)
      kn.fromBufferAttribute(this, a), kn.transformDirection(e), this.setXYZ(a, kn.x, kn.y, kn.z);
    return this;
  }
  set(e, a = 0) {
    return this.array.set(e, a), this;
  }
  getComponent(e, a) {
    let u = this.array[e * this.itemSize + a];
    return this.normalized && (u = Oc(u, this.array)), u;
  }
  setComponent(e, a, u) {
    return this.normalized && (u = qr(u, this.array)), this.array[e * this.itemSize + a] = u, this;
  }
  getX(e) {
    let a = this.array[e * this.itemSize];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setX(e, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[e * this.itemSize] = a, this;
  }
  getY(e) {
    let a = this.array[e * this.itemSize + 1];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setY(e, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[e * this.itemSize + 1] = a, this;
  }
  getZ(e) {
    let a = this.array[e * this.itemSize + 2];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setZ(e, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[e * this.itemSize + 2] = a, this;
  }
  getW(e) {
    let a = this.array[e * this.itemSize + 3];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setW(e, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[e * this.itemSize + 3] = a, this;
  }
  setXY(e, a, u) {
    return e *= this.itemSize, this.normalized && (a = qr(a, this.array), u = qr(u, this.array)), this.array[e + 0] = a, this.array[e + 1] = u, this;
  }
  setXYZ(e, a, u, d) {
    return e *= this.itemSize, this.normalized && (a = qr(a, this.array), u = qr(u, this.array), d = qr(d, this.array)), this.array[e + 0] = a, this.array[e + 1] = u, this.array[e + 2] = d, this;
  }
  setXYZW(e, a, u, d, m) {
    return e *= this.itemSize, this.normalized && (a = qr(a, this.array), u = qr(u, this.array), d = qr(d, this.array), m = qr(m, this.array)), this.array[e + 0] = a, this.array[e + 1] = u, this.array[e + 2] = d, this.array[e + 3] = m, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== zx && (e.usage = this.usage), e;
  }
}
class gC extends lo {
  constructor(e, a, u) {
    super(new Uint16Array(e), a, u);
  }
}
class xC extends lo {
  constructor(e, a, u) {
    super(new Uint32Array(e), a, u);
  }
}
class Bc extends lo {
  constructor(e, a, u) {
    super(new Float32Array(e), a, u);
  }
}
let SC = 0;
const sa = /* @__PURE__ */ new Wr(), Wv = /* @__PURE__ */ new vi(), zc = /* @__PURE__ */ new le(), Ui = /* @__PURE__ */ new gd(), ld = /* @__PURE__ */ new gd(), tr = /* @__PURE__ */ new le();
class uo extends vd {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: SC++ }), this.uuid = kc(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (nC(e) ? xC : gC)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, a) {
    return this.attributes[e] = a, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, a, u = 0) {
    this.groups.push({
      start: e,
      count: a,
      materialIndex: u
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, a) {
    this.drawRange.start = e, this.drawRange.count = a;
  }
  applyMatrix4(e) {
    const a = this.attributes.position;
    a !== void 0 && (a.applyMatrix4(e), a.needsUpdate = !0);
    const u = this.attributes.normal;
    if (u !== void 0) {
      const m = new uu().getNormalMatrix(e);
      u.applyNormalMatrix(m), u.needsUpdate = !0;
    }
    const d = this.attributes.tangent;
    return d !== void 0 && (d.transformDirection(e), d.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return sa.makeRotationFromQuaternion(e), this.applyMatrix4(sa), this;
  }
  rotateX(e) {
    return sa.makeRotationX(e), this.applyMatrix4(sa), this;
  }
  rotateY(e) {
    return sa.makeRotationY(e), this.applyMatrix4(sa), this;
  }
  rotateZ(e) {
    return sa.makeRotationZ(e), this.applyMatrix4(sa), this;
  }
  translate(e, a, u) {
    return sa.makeTranslation(e, a, u), this.applyMatrix4(sa), this;
  }
  scale(e, a, u) {
    return sa.makeScale(e, a, u), this.applyMatrix4(sa), this;
  }
  lookAt(e) {
    return Wv.lookAt(e), Wv.updateMatrix(), this.applyMatrix4(Wv.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(zc).negate(), this.translate(zc.x, zc.y, zc.z), this;
  }
  setFromPoints(e) {
    const a = [];
    for (let u = 0, d = e.length; u < d; u++) {
      const m = e[u];
      a.push(m.x, m.y, m.z || 0);
    }
    return this.setAttribute("position", new Bc(a, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new gd());
    const e = this.attributes.position, a = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new le(-1 / 0, -1 / 0, -1 / 0),
        new le(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), a)
        for (let u = 0, d = a.length; u < d; u++) {
          const m = a[u];
          Ui.setFromBufferAttribute(m), this.morphTargetsRelative ? (tr.addVectors(this.boundingBox.min, Ui.min), this.boundingBox.expandByPoint(tr), tr.addVectors(this.boundingBox.max, Ui.max), this.boundingBox.expandByPoint(tr)) : (this.boundingBox.expandByPoint(Ui.min), this.boundingBox.expandByPoint(Ui.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new my());
    const e = this.attributes.position, a = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new le(), 1 / 0);
      return;
    }
    if (e) {
      const u = this.boundingSphere.center;
      if (Ui.setFromBufferAttribute(e), a)
        for (let m = 0, v = a.length; m < v; m++) {
          const M = a[m];
          ld.setFromBufferAttribute(M), this.morphTargetsRelative ? (tr.addVectors(Ui.min, ld.min), Ui.expandByPoint(tr), tr.addVectors(Ui.max, ld.max), Ui.expandByPoint(tr)) : (Ui.expandByPoint(ld.min), Ui.expandByPoint(ld.max));
        }
      Ui.getCenter(u);
      let d = 0;
      for (let m = 0, v = e.count; m < v; m++)
        tr.fromBufferAttribute(e, m), d = Math.max(d, u.distanceToSquared(tr));
      if (a)
        for (let m = 0, v = a.length; m < v; m++) {
          const M = a[m], _ = this.morphTargetsRelative;
          for (let g = 0, R = M.count; g < R; g++)
            tr.fromBufferAttribute(M, g), _ && (zc.fromBufferAttribute(e, g), tr.add(zc)), d = Math.max(d, u.distanceToSquared(tr));
        }
      this.boundingSphere.radius = Math.sqrt(d), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, a = this.attributes;
    if (e === null || a.position === void 0 || a.normal === void 0 || a.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const u = a.position, d = a.normal, m = a.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new lo(new Float32Array(4 * u.count), 4));
    const v = this.getAttribute("tangent"), M = [], _ = [];
    for (let se = 0; se < u.count; se++)
      M[se] = new le(), _[se] = new le();
    const g = new le(), R = new le(), E = new le(), b = new Nt(), z = new Nt(), D = new Nt(), L = new le(), k = new le();
    function V(se, Xe, me) {
      g.fromBufferAttribute(u, se), R.fromBufferAttribute(u, Xe), E.fromBufferAttribute(u, me), b.fromBufferAttribute(m, se), z.fromBufferAttribute(m, Xe), D.fromBufferAttribute(m, me), R.sub(g), E.sub(g), z.sub(b), D.sub(b);
      const Re = 1 / (z.x * D.y - D.x * z.y);
      isFinite(Re) && (L.copy(R).multiplyScalar(D.y).addScaledVector(E, -z.y).multiplyScalar(Re), k.copy(E).multiplyScalar(z.x).addScaledVector(R, -D.x).multiplyScalar(Re), M[se].add(L), M[Xe].add(L), M[me].add(L), _[se].add(k), _[Xe].add(k), _[me].add(k));
    }
    let te = this.groups;
    te.length === 0 && (te = [{
      start: 0,
      count: e.count
    }]);
    for (let se = 0, Xe = te.length; se < Xe; ++se) {
      const me = te[se], Re = me.start, ye = me.count;
      for (let de = Re, Ae = Re + ye; de < Ae; de += 3)
        V(
          e.getX(de + 0),
          e.getX(de + 1),
          e.getX(de + 2)
        );
    }
    const ee = new le(), ue = new le(), pe = new le(), Me = new le();
    function oe(se) {
      pe.fromBufferAttribute(d, se), Me.copy(pe);
      const Xe = M[se];
      ee.copy(Xe), ee.sub(pe.multiplyScalar(pe.dot(Xe))).normalize(), ue.crossVectors(Me, Xe);
      const Re = ue.dot(_[se]) < 0 ? -1 : 1;
      v.setXYZW(se, ee.x, ee.y, ee.z, Re);
    }
    for (let se = 0, Xe = te.length; se < Xe; ++se) {
      const me = te[se], Re = me.start, ye = me.count;
      for (let de = Re, Ae = Re + ye; de < Ae; de += 3)
        oe(e.getX(de + 0)), oe(e.getX(de + 1)), oe(e.getX(de + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, a = this.getAttribute("position");
    if (a !== void 0) {
      let u = this.getAttribute("normal");
      if (u === void 0)
        u = new lo(new Float32Array(a.count * 3), 3), this.setAttribute("normal", u);
      else
        for (let b = 0, z = u.count; b < z; b++)
          u.setXYZ(b, 0, 0, 0);
      const d = new le(), m = new le(), v = new le(), M = new le(), _ = new le(), g = new le(), R = new le(), E = new le();
      if (e)
        for (let b = 0, z = e.count; b < z; b += 3) {
          const D = e.getX(b + 0), L = e.getX(b + 1), k = e.getX(b + 2);
          d.fromBufferAttribute(a, D), m.fromBufferAttribute(a, L), v.fromBufferAttribute(a, k), R.subVectors(v, m), E.subVectors(d, m), R.cross(E), M.fromBufferAttribute(u, D), _.fromBufferAttribute(u, L), g.fromBufferAttribute(u, k), M.add(R), _.add(R), g.add(R), u.setXYZ(D, M.x, M.y, M.z), u.setXYZ(L, _.x, _.y, _.z), u.setXYZ(k, g.x, g.y, g.z);
        }
      else
        for (let b = 0, z = a.count; b < z; b += 3)
          d.fromBufferAttribute(a, b + 0), m.fromBufferAttribute(a, b + 1), v.fromBufferAttribute(a, b + 2), R.subVectors(v, m), E.subVectors(d, m), R.cross(E), u.setXYZ(b + 0, R.x, R.y, R.z), u.setXYZ(b + 1, R.x, R.y, R.z), u.setXYZ(b + 2, R.x, R.y, R.z);
      this.normalizeNormals(), u.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let a = 0, u = e.count; a < u; a++)
      tr.fromBufferAttribute(e, a), tr.normalize(), e.setXYZ(a, tr.x, tr.y, tr.z);
  }
  toNonIndexed() {
    function e(M, _) {
      const g = M.array, R = M.itemSize, E = M.normalized, b = new g.constructor(_.length * R);
      let z = 0, D = 0;
      for (let L = 0, k = _.length; L < k; L++) {
        M.isInterleavedBufferAttribute ? z = _[L] * M.data.stride + M.offset : z = _[L] * R;
        for (let V = 0; V < R; V++)
          b[D++] = g[z++];
      }
      return new lo(b, R, E);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const a = new uo(), u = this.index.array, d = this.attributes;
    for (const M in d) {
      const _ = d[M], g = e(_, u);
      a.setAttribute(M, g);
    }
    const m = this.morphAttributes;
    for (const M in m) {
      const _ = [], g = m[M];
      for (let R = 0, E = g.length; R < E; R++) {
        const b = g[R], z = e(b, u);
        _.push(z);
      }
      a.morphAttributes[M] = _;
    }
    a.morphTargetsRelative = this.morphTargetsRelative;
    const v = this.groups;
    for (let M = 0, _ = v.length; M < _; M++) {
      const g = v[M];
      a.addGroup(g.start, g.count, g.materialIndex);
    }
    return a;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const _ = this.parameters;
      for (const g in _)
        _[g] !== void 0 && (e[g] = _[g]);
      return e;
    }
    e.data = { attributes: {} };
    const a = this.index;
    a !== null && (e.data.index = {
      type: a.array.constructor.name,
      array: Array.prototype.slice.call(a.array)
    });
    const u = this.attributes;
    for (const _ in u) {
      const g = u[_];
      e.data.attributes[_] = g.toJSON(e.data);
    }
    const d = {};
    let m = !1;
    for (const _ in this.morphAttributes) {
      const g = this.morphAttributes[_], R = [];
      for (let E = 0, b = g.length; E < b; E++) {
        const z = g[E];
        R.push(z.toJSON(e.data));
      }
      R.length > 0 && (d[_] = R, m = !0);
    }
    m && (e.data.morphAttributes = d, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const v = this.groups;
    v.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(v)));
    const M = this.boundingSphere;
    return M !== null && (e.data.boundingSphere = {
      center: M.center.toArray(),
      radius: M.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const a = {};
    this.name = e.name;
    const u = e.index;
    u !== null && this.setIndex(u.clone(a));
    const d = e.attributes;
    for (const g in d) {
      const R = d[g];
      this.setAttribute(g, R.clone(a));
    }
    const m = e.morphAttributes;
    for (const g in m) {
      const R = [], E = m[g];
      for (let b = 0, z = E.length; b < z; b++)
        R.push(E[b].clone(a));
      this.morphAttributes[g] = R;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const v = e.groups;
    for (let g = 0, R = v.length; g < R; g++) {
      const E = v[g];
      this.addGroup(E.start, E.count, E.materialIndex);
    }
    const M = e.boundingBox;
    M !== null && (this.boundingBox = M.clone());
    const _ = e.boundingSphere;
    return _ !== null && (this.boundingSphere = _.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Yx = /* @__PURE__ */ new Wr(), io = /* @__PURE__ */ new L1(), lp = /* @__PURE__ */ new my(), Wx = /* @__PURE__ */ new le(), Dc = /* @__PURE__ */ new le(), Ac = /* @__PURE__ */ new le(), Nc = /* @__PURE__ */ new le(), Qv = /* @__PURE__ */ new le(), up = /* @__PURE__ */ new le(), op = /* @__PURE__ */ new Nt(), cp = /* @__PURE__ */ new Nt(), fp = /* @__PURE__ */ new Nt(), Qx = /* @__PURE__ */ new le(), Gx = /* @__PURE__ */ new le(), Xx = /* @__PURE__ */ new le(), dp = /* @__PURE__ */ new le(), hp = /* @__PURE__ */ new le();
class _C extends vi {
  constructor(e = new uo(), a = new yC()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = a, this.updateMorphTargets();
  }
  copy(e, a) {
    return super.copy(e, a), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const a = this.geometry.morphAttributes, u = Object.keys(a);
    if (u.length > 0) {
      const d = a[u[0]];
      if (d !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let m = 0, v = d.length; m < v; m++) {
          const M = d[m].name || String(m);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[M] = m;
        }
      }
    }
  }
  getVertexPosition(e, a) {
    const u = this.geometry, d = u.attributes.position, m = u.morphAttributes.position, v = u.morphTargetsRelative;
    a.fromBufferAttribute(d, e);
    const M = this.morphTargetInfluences;
    if (m && M) {
      up.set(0, 0, 0);
      for (let _ = 0, g = m.length; _ < g; _++) {
        const R = M[_], E = m[_];
        R !== 0 && (Qv.fromBufferAttribute(E, e), v ? up.addScaledVector(Qv, R) : up.addScaledVector(Qv.sub(a), R));
      }
      a.add(up);
    }
    return a;
  }
  raycast(e, a) {
    const u = this.geometry, d = this.material, m = this.matrixWorld;
    d !== void 0 && (u.boundingSphere === null && u.computeBoundingSphere(), lp.copy(u.boundingSphere), lp.applyMatrix4(m), io.copy(e.ray).recast(e.near), !(lp.containsPoint(io.origin) === !1 && (io.intersectSphere(lp, Wx) === null || io.origin.distanceToSquared(Wx) > (e.far - e.near) ** 2)) && (Yx.copy(m).invert(), io.copy(e.ray).applyMatrix4(Yx), !(u.boundingBox !== null && io.intersectsBox(u.boundingBox) === !1) && this._computeIntersections(e, a, io)));
  }
  _computeIntersections(e, a, u) {
    let d;
    const m = this.geometry, v = this.material, M = m.index, _ = m.attributes.position, g = m.attributes.uv, R = m.attributes.uv1, E = m.attributes.normal, b = m.groups, z = m.drawRange;
    if (M !== null)
      if (Array.isArray(v))
        for (let D = 0, L = b.length; D < L; D++) {
          const k = b[D], V = v[k.materialIndex], te = Math.max(k.start, z.start), ee = Math.min(M.count, Math.min(k.start + k.count, z.start + z.count));
          for (let ue = te, pe = ee; ue < pe; ue += 3) {
            const Me = M.getX(ue), oe = M.getX(ue + 1), se = M.getX(ue + 2);
            d = pp(this, V, e, u, g, R, E, Me, oe, se), d && (d.faceIndex = Math.floor(ue / 3), d.face.materialIndex = k.materialIndex, a.push(d));
          }
        }
      else {
        const D = Math.max(0, z.start), L = Math.min(M.count, z.start + z.count);
        for (let k = D, V = L; k < V; k += 3) {
          const te = M.getX(k), ee = M.getX(k + 1), ue = M.getX(k + 2);
          d = pp(this, v, e, u, g, R, E, te, ee, ue), d && (d.faceIndex = Math.floor(k / 3), a.push(d));
        }
      }
    else if (_ !== void 0)
      if (Array.isArray(v))
        for (let D = 0, L = b.length; D < L; D++) {
          const k = b[D], V = v[k.materialIndex], te = Math.max(k.start, z.start), ee = Math.min(_.count, Math.min(k.start + k.count, z.start + z.count));
          for (let ue = te, pe = ee; ue < pe; ue += 3) {
            const Me = ue, oe = ue + 1, se = ue + 2;
            d = pp(this, V, e, u, g, R, E, Me, oe, se), d && (d.faceIndex = Math.floor(ue / 3), d.face.materialIndex = k.materialIndex, a.push(d));
          }
        }
      else {
        const D = Math.max(0, z.start), L = Math.min(_.count, z.start + z.count);
        for (let k = D, V = L; k < V; k += 3) {
          const te = k, ee = k + 1, ue = k + 2;
          d = pp(this, v, e, u, g, R, E, te, ee, ue), d && (d.faceIndex = Math.floor(k / 3), a.push(d));
        }
      }
  }
}
function EC(y, e, a, u, d, m, v, M) {
  let _;
  if (e.side === AR ? _ = u.intersectTriangle(v, m, d, !0, M) : _ = u.intersectTriangle(d, m, v, e.side === sy, M), _ === null) return null;
  hp.copy(M), hp.applyMatrix4(y.matrixWorld);
  const g = a.ray.origin.distanceTo(hp);
  return g < a.near || g > a.far ? null : {
    distance: g,
    point: hp.clone(),
    object: y
  };
}
function pp(y, e, a, u, d, m, v, M, _, g) {
  y.getVertexPosition(M, Dc), y.getVertexPosition(_, Ac), y.getVertexPosition(g, Nc);
  const R = EC(y, e, a, u, Dc, Ac, Nc, dp);
  if (R) {
    d && (op.fromBufferAttribute(d, M), cp.fromBufferAttribute(d, _), fp.fromBufferAttribute(d, g), R.uv = us.getInterpolation(dp, Dc, Ac, Nc, op, cp, fp, new Nt())), m && (op.fromBufferAttribute(m, M), cp.fromBufferAttribute(m, _), fp.fromBufferAttribute(m, g), R.uv1 = us.getInterpolation(dp, Dc, Ac, Nc, op, cp, fp, new Nt())), v && (Qx.fromBufferAttribute(v, M), Gx.fromBufferAttribute(v, _), Xx.fromBufferAttribute(v, g), R.normal = us.getInterpolation(dp, Dc, Ac, Nc, Qx, Gx, Xx, new le()), R.normal.dot(u.direction) > 0 && R.normal.multiplyScalar(-1));
    const E = {
      a: M,
      b: _,
      c: g,
      normal: new le(),
      materialIndex: 0
    };
    us.getNormal(Dc, Ac, Nc, E.normal), R.face = E;
  }
  return R;
}
function vy(y) {
  const e = {};
  for (const a in y) {
    e[a] = {};
    for (const u in y[a]) {
      const d = y[a][u];
      d && (d.isColor || d.isMatrix3 || d.isMatrix4 || d.isVector2 || d.isVector3 || d.isVector4 || d.isTexture || d.isQuaternion) ? d.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[a][u] = null) : e[a][u] = d.clone() : Array.isArray(d) ? e[a][u] = d.slice() : e[a][u] = d;
    }
  }
  return e;
}
function RC(y) {
  const e = {};
  for (let a = 0; a < y.length; a++) {
    const u = vy(y[a]);
    for (const d in u)
      e[d] = u[d];
  }
  return e;
}
function CC(y) {
  const e = [];
  for (let a = 0; a < y.length; a++)
    e.push(y[a].clone());
  return e;
}
const MC = { clone: vy, merge: RC };
var TC = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, bC = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Rp extends Ep {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = TC, this.fragmentShader = bC, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = vy(e.uniforms), this.uniformsGroups = CC(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const a = super.toJSON(e);
    a.glslVersion = this.glslVersion, a.uniforms = {};
    for (const d in this.uniforms) {
      const v = this.uniforms[d].value;
      v && v.isTexture ? a.uniforms[d] = {
        type: "t",
        value: v.toJSON(e).uuid
      } : v && v.isColor ? a.uniforms[d] = {
        type: "c",
        value: v.getHex()
      } : v && v.isVector2 ? a.uniforms[d] = {
        type: "v2",
        value: v.toArray()
      } : v && v.isVector3 ? a.uniforms[d] = {
        type: "v3",
        value: v.toArray()
      } : v && v.isVector4 ? a.uniforms[d] = {
        type: "v4",
        value: v.toArray()
      } : v && v.isMatrix3 ? a.uniforms[d] = {
        type: "m3",
        value: v.toArray()
      } : v && v.isMatrix4 ? a.uniforms[d] = {
        type: "m4",
        value: v.toArray()
      } : a.uniforms[d] = {
        value: v
      };
    }
    Object.keys(this.defines).length > 0 && (a.defines = this.defines), a.vertexShader = this.vertexShader, a.fragmentShader = this.fragmentShader, a.lights = this.lights, a.clipping = this.clipping;
    const u = {};
    for (const d in this.extensions)
      this.extensions[d] === !0 && (u[d] = !0);
    return Object.keys(u).length > 0 && (a.extensions = u), a;
  }
}
class k1 extends vi {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Wr(), this.projectionMatrix = new Wr(), this.projectionMatrixInverse = new Wr(), this.coordinateSystem = fd;
  }
  copy(e, a) {
    return super.copy(e, a), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, a) {
    super.updateWorldMatrix(e, a), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Cp extends uo {
  constructor(e = 1, a = 1, u = 1, d = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: a,
      widthSegments: u,
      heightSegments: d
    };
    const m = e / 2, v = a / 2, M = Math.floor(u), _ = Math.floor(d), g = M + 1, R = _ + 1, E = e / M, b = a / _, z = [], D = [], L = [], k = [];
    for (let V = 0; V < R; V++) {
      const te = V * b - v;
      for (let ee = 0; ee < g; ee++) {
        const ue = ee * E - m;
        D.push(ue, -te, 0), L.push(0, 0, 1), k.push(ee / M), k.push(1 - V / _);
      }
    }
    for (let V = 0; V < _; V++)
      for (let te = 0; te < M; te++) {
        const ee = te + g * V, ue = te + g * (V + 1), pe = te + 1 + g * (V + 1), Me = te + 1 + g * V;
        z.push(ee, ue, Me), z.push(ue, pe, Me);
      }
    this.setIndex(z), this.setAttribute("position", new Bc(D, 3)), this.setAttribute("normal", new Bc(L, 3)), this.setAttribute("uv", new Bc(k, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Cp(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class H1 extends os {
  constructor(e, a, u, d, m, v, M, _, g, R) {
    if (R = R !== void 0 ? R : Dv, R !== Dv && R !== Cx)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    u === void 0 && R === Dv && (u = UR), u === void 0 && R === Cx && (u = BR), super(null, d, m, v, M, _, R, u, g), this.isDepthTexture = !0, this.image = { width: e, height: a }, this.magFilter = M !== void 0 ? M : Rx, this.minFilter = _ !== void 0 ? _ : Rx, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const a = super.toJSON(e);
    return this.compareFunction !== null && (a.compareFunction = this.compareFunction), a;
  }
}
const wC = /* @__PURE__ */ new H1(1, 1);
wC.compareFunction = HR;
class zC extends vi {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ks(), this.environmentIntensity = 1, this.environmentRotation = new Ks(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, a) {
    return super.copy(e, a), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const a = super.toJSON(e);
    return this.fog !== null && (a.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (a.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (a.object.backgroundIntensity = this.backgroundIntensity), a.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (a.object.environmentIntensity = this.environmentIntensity), a.object.environmentRotation = this.environmentRotation.toArray(), a;
  }
}
class DC extends Ep {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Hc(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Zx = /* @__PURE__ */ new le(), Jx = /* @__PURE__ */ new le(), Kx = /* @__PURE__ */ new Wr(), Gv = /* @__PURE__ */ new L1(), mp = /* @__PURE__ */ new my();
class AC extends vi {
  constructor(e = new uo(), a = new DC()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = a, this.updateMorphTargets();
  }
  copy(e, a) {
    return super.copy(e, a), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const a = e.attributes.position, u = [0];
      for (let d = 1, m = a.count; d < m; d++)
        Zx.fromBufferAttribute(a, d - 1), Jx.fromBufferAttribute(a, d), u[d] = u[d - 1], u[d] += Zx.distanceTo(Jx);
      e.setAttribute("lineDistance", new Bc(u, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, a) {
    const u = this.geometry, d = this.matrixWorld, m = e.params.Line.threshold, v = u.drawRange;
    if (u.boundingSphere === null && u.computeBoundingSphere(), mp.copy(u.boundingSphere), mp.applyMatrix4(d), mp.radius += m, e.ray.intersectsSphere(mp) === !1) return;
    Kx.copy(d).invert(), Gv.copy(e.ray).applyMatrix4(Kx);
    const M = m / ((this.scale.x + this.scale.y + this.scale.z) / 3), _ = M * M, g = new le(), R = new le(), E = new le(), b = new le(), z = this.isLineSegments ? 2 : 1, D = u.index, k = u.attributes.position;
    if (D !== null) {
      const V = Math.max(0, v.start), te = Math.min(D.count, v.start + v.count);
      for (let ee = V, ue = te - 1; ee < ue; ee += z) {
        const pe = D.getX(ee), Me = D.getX(ee + 1);
        if (g.fromBufferAttribute(k, pe), R.fromBufferAttribute(k, Me), Gv.distanceSqToSegment(g, R, b, E) > _) continue;
        b.applyMatrix4(this.matrixWorld);
        const se = e.ray.origin.distanceTo(b);
        se < e.near || se > e.far || a.push({
          distance: se,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: E.clone().applyMatrix4(this.matrixWorld),
          index: ee,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const V = Math.max(0, v.start), te = Math.min(k.count, v.start + v.count);
      for (let ee = V, ue = te - 1; ee < ue; ee += z) {
        if (g.fromBufferAttribute(k, ee), R.fromBufferAttribute(k, ee + 1), Gv.distanceSqToSegment(g, R, b, E) > _) continue;
        b.applyMatrix4(this.matrixWorld);
        const Me = e.ray.origin.distanceTo(b);
        Me < e.near || Me > e.far || a.push({
          distance: Me,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: E.clone().applyMatrix4(this.matrixWorld),
          index: ee,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const a = this.geometry.morphAttributes, u = Object.keys(a);
    if (u.length > 0) {
      const d = a[u[0]];
      if (d !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let m = 0, v = d.length; m < v; m++) {
          const M = d[m].name || String(m);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[M] = m;
        }
      }
    }
  }
}
const $x = /* @__PURE__ */ new le(), e1 = /* @__PURE__ */ new le();
class NC extends AC {
  constructor(e, a) {
    super(e, a), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const a = e.attributes.position, u = [];
      for (let d = 0, m = a.count; d < m; d += 2)
        $x.fromBufferAttribute(a, d), e1.fromBufferAttribute(a, d + 1), u[d] = d === 0 ? 0 : u[d - 1], u[d + 1] = u[d] + $x.distanceTo(e1);
      e.setAttribute("lineDistance", new Bc(u, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class FC extends Rp {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: C1
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = C1);
var uy = { exports: {} }, iu = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function OC() {
  return t1 || (t1 = 1, iu.ConcurrentRoot = 1, iu.ContinuousEventPriority = 4, iu.DefaultEventPriority = 16, iu.DiscreteEventPriority = 1, iu.IdleEventPriority = 536870912, iu.LegacyRoot = 0), iu;
}
var au = {};
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n1;
function UC() {
  return n1 || (n1 = 1, process.env.NODE_ENV !== "production" && function() {
    var y = (
      /*                        */
      1
    ), e = (
      /*            */
      4
    ), a = (
      /*                    */
      16
    ), u = (
      /*                       */
      536870912
    ), d = y, m = e, v = a, M = u, _ = 0, g = 1;
    au.ConcurrentRoot = g, au.ContinuousEventPriority = m, au.DefaultEventPriority = v, au.DiscreteEventPriority = d, au.IdleEventPriority = M, au.LegacyRoot = _;
  }()), au;
}
process.env.NODE_ENV === "production" ? uy.exports = OC() : uy.exports = UC();
var dd = uy.exports, oy = { exports: {} }, vp = { exports: {} }, Xv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r1;
function LC() {
  return r1 || (r1 = 1, function(y) {
    function e(H, re) {
      var J = H.length;
      H.push(re);
      e: for (; 0 < J; ) {
        var O = J - 1 >>> 1, j = H[O];
        if (0 < d(j, re)) H[O] = re, H[J] = j, J = O;
        else break e;
      }
    }
    function a(H) {
      return H.length === 0 ? null : H[0];
    }
    function u(H) {
      if (H.length === 0) return null;
      var re = H[0], J = H.pop();
      if (J !== re) {
        H[0] = J;
        e: for (var O = 0, j = H.length, ze = j >>> 1; O < ze; ) {
          var Le = 2 * (O + 1) - 1, Oe = H[Le], Ne = Le + 1, Ie = H[Ne];
          if (0 > d(Oe, J)) Ne < j && 0 > d(Ie, Oe) ? (H[O] = Ie, H[Ne] = J, O = Ne) : (H[O] = Oe, H[Le] = J, O = Le);
          else if (Ne < j && 0 > d(Ie, J)) H[O] = Ie, H[Ne] = J, O = Ne;
          else break e;
        }
      }
      return re;
    }
    function d(H, re) {
      var J = H.sortIndex - re.sortIndex;
      return J !== 0 ? J : H.id - re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      y.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, M = v.now();
      y.unstable_now = function() {
        return v.now() - M;
      };
    }
    var _ = [], g = [], R = 1, E = null, b = 3, z = !1, D = !1, L = !1, k = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(H) {
      for (var re = a(g); re !== null; ) {
        if (re.callback === null) u(g);
        else if (re.startTime <= H) u(g), re.sortIndex = re.expirationTime, e(_, re);
        else break;
        re = a(g);
      }
    }
    function ue(H) {
      if (L = !1, ee(H), !D) if (a(_) !== null) D = !0, Ze(pe);
      else {
        var re = a(g);
        re !== null && ge(ue, re.startTime - H);
      }
    }
    function pe(H, re) {
      D = !1, L && (L = !1, V(se), se = -1), z = !0;
      var J = b;
      try {
        for (ee(re), E = a(_); E !== null && (!(E.expirationTime > re) || H && !Re()); ) {
          var O = E.callback;
          if (typeof O == "function") {
            E.callback = null, b = E.priorityLevel;
            var j = O(E.expirationTime <= re);
            re = y.unstable_now(), typeof j == "function" ? E.callback = j : E === a(_) && u(_), ee(re);
          } else u(_);
          E = a(_);
        }
        if (E !== null) var ze = !0;
        else {
          var Le = a(g);
          Le !== null && ge(ue, Le.startTime - re), ze = !1;
        }
        return ze;
      } finally {
        E = null, b = J, z = !1;
      }
    }
    var Me = !1, oe = null, se = -1, Xe = 5, me = -1;
    function Re() {
      return !(y.unstable_now() - me < Xe);
    }
    function ye() {
      if (oe !== null) {
        var H = y.unstable_now();
        me = H;
        var re = !0;
        try {
          re = oe(!0, H);
        } finally {
          re ? de() : (Me = !1, oe = null);
        }
      } else Me = !1;
    }
    var de;
    if (typeof te == "function") de = function() {
      te(ye);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Ve = Ae.port2;
      Ae.port1.onmessage = ye, de = function() {
        Ve.postMessage(null);
      };
    } else de = function() {
      k(ye, 0);
    };
    function Ze(H) {
      oe = H, Me || (Me = !0, de());
    }
    function ge(H, re) {
      se = k(function() {
        H(y.unstable_now());
      }, re);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, y.unstable_continueExecution = function() {
      D || z || (D = !0, Ze(pe));
    }, y.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xe = 0 < H ? Math.floor(1e3 / H) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, y.unstable_getFirstCallbackNode = function() {
      return a(_);
    }, y.unstable_next = function(H) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = b;
      }
      var J = b;
      b = re;
      try {
        return H();
      } finally {
        b = J;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(H, re) {
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
      var J = b;
      b = H;
      try {
        return re();
      } finally {
        b = J;
      }
    }, y.unstable_scheduleCallback = function(H, re, J) {
      var O = y.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? O + J : O) : J = O, H) {
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
      return j = J + j, H = { id: R++, callback: re, priorityLevel: H, startTime: J, expirationTime: j, sortIndex: -1 }, J > O ? (H.sortIndex = J, e(g, H), a(_) === null && H === a(g) && (L ? (V(se), se = -1) : L = !0, ge(ue, J - O))) : (H.sortIndex = j, e(_, H), D || z || (D = !0, Ze(pe))), H;
    }, y.unstable_shouldYield = Re, y.unstable_wrapCallback = function(H) {
      var re = b;
      return function() {
        var J = b;
        b = re;
        try {
          return H.apply(this, arguments);
        } finally {
          b = J;
        }
      };
    };
  }(Xv)), Xv;
}
var Zv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i1;
function BC() {
  return i1 || (i1 = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var e = !1, a = !1, u = 5;
      function d(G, ce) {
        var Fe = G.length;
        G.push(ce), M(G, ce, Fe);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function v(G) {
        if (G.length === 0)
          return null;
        var ce = G[0], Fe = G.pop();
        return Fe !== ce && (G[0] = Fe, _(G, Fe, 0)), ce;
      }
      function M(G, ce, Fe) {
        for (var et = Fe; et > 0; ) {
          var Be = et - 1 >>> 1, Gt = G[Be];
          if (g(Gt, ce) > 0)
            G[Be] = ce, G[et] = Gt, et = Be;
          else
            return;
        }
      }
      function _(G, ce, Fe) {
        for (var et = Fe, Be = G.length, Gt = Be >>> 1; et < Gt; ) {
          var Rt = (et + 1) * 2 - 1, We = G[Rt], _e = Rt + 1, Un = G[_e];
          if (g(We, ce) < 0)
            _e < Be && g(Un, We) < 0 ? (G[et] = Un, G[_e] = ce, et = _e) : (G[et] = We, G[Rt] = ce, et = Rt);
          else if (_e < Be && g(Un, ce) < 0)
            G[et] = Un, G[_e] = ce, et = _e;
          else
            return;
        }
      }
      function g(G, ce) {
        var Fe = G.sortIndex - ce.sortIndex;
        return Fe !== 0 ? Fe : G.id - ce.id;
      }
      var R = 1, E = 2, b = 3, z = 4, D = 5;
      function L(G, ce) {
      }
      var k = typeof performance == "object" && typeof performance.now == "function";
      if (k) {
        var V = performance;
        y.unstable_now = function() {
          return V.now();
        };
      } else {
        var te = Date, ee = te.now();
        y.unstable_now = function() {
          return te.now() - ee;
        };
      }
      var ue = 1073741823, pe = -1, Me = 250, oe = 5e3, se = 1e4, Xe = ue, me = [], Re = [], ye = 1, de = null, Ae = b, Ve = !1, Ze = !1, ge = !1, H = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function O(G) {
        for (var ce = m(Re); ce !== null; ) {
          if (ce.callback === null)
            v(Re);
          else if (ce.startTime <= G)
            v(Re), ce.sortIndex = ce.expirationTime, d(me, ce);
          else
            return;
          ce = m(Re);
        }
      }
      function j(G) {
        if (ge = !1, O(G), !Ze)
          if (m(me) !== null)
            Ze = !0, zr(ze);
          else {
            var ce = m(Re);
            ce !== null && Qr(j, ce.startTime - G);
          }
      }
      function ze(G, ce) {
        Ze = !1, ge && (ge = !1, ua()), Ve = !0;
        var Fe = Ae;
        try {
          var et;
          if (!a) return Le(G, ce);
        } finally {
          de = null, Ae = Fe, Ve = !1;
        }
      }
      function Le(G, ce) {
        var Fe = ce;
        for (O(Fe), de = m(me); de !== null && !e && !(de.expirationTime > Fe && (!G || nr())); ) {
          var et = de.callback;
          if (typeof et == "function") {
            de.callback = null, Ae = de.priorityLevel;
            var Be = de.expirationTime <= Fe, Gt = et(Be);
            Fe = y.unstable_now(), typeof Gt == "function" ? de.callback = Gt : de === m(me) && v(me), O(Fe);
          } else
            v(me);
          de = m(me);
        }
        if (de !== null)
          return !0;
        var Rt = m(Re);
        return Rt !== null && Qr(j, Rt.startTime - Fe), !1;
      }
      function Oe(G, ce) {
        switch (G) {
          case R:
          case E:
          case b:
          case z:
          case D:
            break;
          default:
            G = b;
        }
        var Fe = Ae;
        Ae = G;
        try {
          return ce();
        } finally {
          Ae = Fe;
        }
      }
      function Ne(G) {
        var ce;
        switch (Ae) {
          case R:
          case E:
          case b:
            ce = b;
            break;
          default:
            ce = Ae;
            break;
        }
        var Fe = Ae;
        Ae = ce;
        try {
          return G();
        } finally {
          Ae = Fe;
        }
      }
      function Ie(G) {
        var ce = Ae;
        return function() {
          var Fe = Ae;
          Ae = ce;
          try {
            return G.apply(this, arguments);
          } finally {
            Ae = Fe;
          }
        };
      }
      function qe(G, ce, Fe) {
        var et = y.unstable_now(), Be;
        if (typeof Fe == "object" && Fe !== null) {
          var Gt = Fe.delay;
          typeof Gt == "number" && Gt > 0 ? Be = et + Gt : Be = et;
        } else
          Be = et;
        var Rt;
        switch (G) {
          case R:
            Rt = pe;
            break;
          case E:
            Rt = Me;
            break;
          case D:
            Rt = Xe;
            break;
          case z:
            Rt = se;
            break;
          case b:
          default:
            Rt = oe;
            break;
        }
        var We = Be + Rt, _e = {
          id: ye++,
          callback: ce,
          priorityLevel: G,
          startTime: Be,
          expirationTime: We,
          sortIndex: -1
        };
        return Be > et ? (_e.sortIndex = Be, d(Re, _e), m(me) === null && _e === m(Re) && (ge ? ua() : ge = !0, Qr(j, Be - et))) : (_e.sortIndex = We, d(me, _e), !Ze && !Ve && (Ze = !0, zr(ze))), _e;
      }
      function je() {
      }
      function dt() {
        !Ze && !Ve && (Ze = !0, zr(ze));
      }
      function Tt() {
        return m(me);
      }
      function kt(G) {
        G.callback = null;
      }
      function ut() {
        return Ae;
      }
      var $t = !1, cn = null, Hn = -1, Gn = u, yi = -1;
      function nr() {
        var G = y.unstable_now() - yi;
        return !(G < Gn);
      }
      function fn() {
      }
      function dr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Gn = Math.floor(1e3 / G) : Gn = u;
      }
      var Xn = function() {
        if (cn !== null) {
          var G = y.unstable_now();
          yi = G;
          var ce = !0, Fe = !0;
          try {
            Fe = cn(ce, G);
          } finally {
            Fe ? Ht() : ($t = !1, cn = null);
          }
        } else
          $t = !1;
      }, Ht;
      if (typeof J == "function")
        Ht = function() {
          J(Xn);
        };
      else if (typeof MessageChannel < "u") {
        var hr = new MessageChannel(), la = hr.port2;
        hr.port1.onmessage = Xn, Ht = function() {
          la.postMessage(null);
        };
      } else
        Ht = function() {
          H(Xn, 0);
        };
      function zr(G) {
        cn = G, $t || ($t = !0, Ht());
      }
      function Qr(G, ce) {
        Hn = H(function() {
          G(y.unstable_now());
        }, ce);
      }
      function ua() {
        re(Hn), Hn = -1;
      }
      var cs = fn, Na = null;
      y.unstable_IdlePriority = D, y.unstable_ImmediatePriority = R, y.unstable_LowPriority = z, y.unstable_NormalPriority = b, y.unstable_Profiling = Na, y.unstable_UserBlockingPriority = E, y.unstable_cancelCallback = kt, y.unstable_continueExecution = dt, y.unstable_forceFrameRate = dr, y.unstable_getCurrentPriorityLevel = ut, y.unstable_getFirstCallbackNode = Tt, y.unstable_next = Ne, y.unstable_pauseExecution = je, y.unstable_requestPaint = cs, y.unstable_runWithPriority = Oe, y.unstable_scheduleCallback = qe, y.unstable_shouldYield = nr, y.unstable_wrapCallback = Ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zv)), Zv;
}
var a1;
function P1() {
  return a1 || (a1 = 1, process.env.NODE_ENV === "production" ? vp.exports = LC() : vp.exports = BC()), vp.exports;
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
var Jv, s1;
function kC() {
  return s1 || (s1 = 1, Jv = function(e) {
    var a = {}, u = st, d = P1(), m = Object.assign;
    function v(r) {
      for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, o = 1; o < arguments.length; o++) i += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + r + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var M = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = Symbol.for("react.element"), g = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), D = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), pe = Symbol.iterator;
    function Me(r) {
      return r === null || typeof r != "object" ? null : (r = pe && r[pe] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    function oe(r) {
      if (r == null) return null;
      if (typeof r == "function") return r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case R:
          return "Fragment";
        case g:
          return "Portal";
        case b:
          return "Profiler";
        case E:
          return "StrictMode";
        case k:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof r == "object") switch (r.$$typeof) {
        case D:
          return (r.displayName || "Context") + ".Consumer";
        case z:
          return (r._context.displayName || "Context") + ".Provider";
        case L:
          var i = r.render;
          return r = r.displayName, r || (r = i.displayName || i.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
        case te:
          return i = r.displayName || null, i !== null ? i : oe(r.type) || "Memo";
        case ee:
          i = r._payload, r = r._init;
          try {
            return oe(r(i));
          } catch {
          }
      }
      return null;
    }
    function se(r) {
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
          return oe(i);
        case 8:
          return i === E ? "StrictMode" : "Mode";
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
          if (typeof i == "function") return i.displayName || i.name || null;
          if (typeof i == "string") return i;
      }
      return null;
    }
    function Xe(r) {
      var i = r, o = r;
      if (r.alternate) for (; i.return; ) i = i.return;
      else {
        r = i;
        do
          i = r, i.flags & 4098 && (o = i.return), r = i.return;
        while (r);
      }
      return i.tag === 3 ? o : null;
    }
    function me(r) {
      if (Xe(r) !== r) throw Error(v(188));
    }
    function Re(r) {
      var i = r.alternate;
      if (!i) {
        if (i = Xe(r), i === null) throw Error(v(188));
        return i !== r ? null : r;
      }
      for (var o = r, f = i; ; ) {
        var p = o.return;
        if (p === null) break;
        var S = p.alternate;
        if (S === null) {
          if (f = p.return, f !== null) {
            o = f;
            continue;
          }
          break;
        }
        if (p.child === S.child) {
          for (S = p.child; S; ) {
            if (S === o) return me(p), r;
            if (S === f) return me(p), i;
            S = S.sibling;
          }
          throw Error(v(188));
        }
        if (o.return !== f.return) o = p, f = S;
        else {
          for (var A = !1, B = p.child; B; ) {
            if (B === o) {
              A = !0, o = p, f = S;
              break;
            }
            if (B === f) {
              A = !0, f = p, o = S;
              break;
            }
            B = B.sibling;
          }
          if (!A) {
            for (B = S.child; B; ) {
              if (B === o) {
                A = !0, o = S, f = p;
                break;
              }
              if (B === f) {
                A = !0, f = S, o = p;
                break;
              }
              B = B.sibling;
            }
            if (!A) throw Error(v(189));
          }
        }
        if (o.alternate !== f) throw Error(v(190));
      }
      if (o.tag !== 3) throw Error(v(188));
      return o.stateNode.current === o ? r : i;
    }
    function ye(r) {
      return r = Re(r), r !== null ? de(r) : null;
    }
    function de(r) {
      if (r.tag === 5 || r.tag === 6) return r;
      for (r = r.child; r !== null; ) {
        var i = de(r);
        if (i !== null) return i;
        r = r.sibling;
      }
      return null;
    }
    function Ae(r) {
      if (r.tag === 5 || r.tag === 6) return r;
      for (r = r.child; r !== null; ) {
        if (r.tag !== 4) {
          var i = Ae(r);
          if (i !== null) return i;
        }
        r = r.sibling;
      }
      return null;
    }
    var Ve = Array.isArray, Ze = e.getPublicInstance, ge = e.getRootHostContext, H = e.getChildHostContext, re = e.prepareForCommit, J = e.resetAfterCommit, O = e.createInstance, j = e.appendInitialChild, ze = e.finalizeInitialChildren, Le = e.prepareUpdate, Oe = e.shouldSetTextContent, Ne = e.createTextInstance, Ie = e.scheduleTimeout, qe = e.cancelTimeout, je = e.noTimeout, dt = e.isPrimaryRenderer, Tt = e.supportsMutation, kt = e.supportsPersistence, ut = e.supportsHydration, $t = e.getInstanceFromNode, cn = e.preparePortalMount, Hn = e.getCurrentEventPriority, Gn = e.detachDeletedInstance, yi = e.supportsMicrotasks, nr = e.scheduleMicrotask, fn = e.supportsTestSelectors, dr = e.findFiberRoot, Xn = e.getBoundingRect, Ht = e.getTextContent, hr = e.isHiddenSubtree, la = e.matchAccessibilityRole, zr = e.setFocusIfFocusable, Qr = e.setupIntersectionObserver, ua = e.appendChild, cs = e.appendChildToContainer, Na = e.commitTextUpdate, G = e.commitMount, ce = e.commitUpdate, Fe = e.insertBefore, et = e.insertInContainerBefore, Be = e.removeChild, Gt = e.removeChildFromContainer, Rt = e.resetTextContent, We = e.hideInstance, _e = e.hideTextInstance, Un = e.unhideInstance, Vt = e.unhideTextInstance, yt = e.clearContainer, $s = e.cloneInstance, pr = e.createContainerChildSet, Fa = e.appendChildToContainerChildSet, ou = e.finalizeContainerChildren, _t = e.replaceContainerChildren, Gr = e.cloneHiddenInstance, Li = e.cloneHiddenTextInstance, Dr = e.canHydrateInstance, rr = e.canHydrateTextInstance, ir = e.canHydrateSuspenseInstance, oo = e.isSuspenseInstancePending, Bi = e.isSuspenseInstanceFallback, el = e.registerSuspenseInstanceRetry, fs = e.getNextHydratableSibling, co = e.getFirstHydratableChild, Oa = e.getFirstHydratableChildWithinContainer, Zn = e.getFirstHydratableChildWithinSuspenseInstance, Mn = e.hydrateInstance, fo = e.hydrateTextInstance, cu = e.hydrateSuspenseInstance, oa = e.getNextHydratableInstanceAfterSuspenseInstance, tl = e.commitHydratedContainer, gi = e.commitHydratedSuspenseInstance, nl = e.clearSuspenseBoundary, fu = e.clearSuspenseBoundaryFromContainer, ds = e.shouldDeleteUnhydratedTailInstances, hs = e.didNotMatchHydratedContainerTextInstance, Ua = e.didNotMatchHydratedTextInstance, Ar;
    function ps(r) {
      if (Ar === void 0) try {
        throw Error();
      } catch (o) {
        var i = o.stack.trim().match(/\n( *(at )?)/);
        Ar = i && i[1] || "";
      }
      return `
` + Ar + r;
    }
    var La = !1;
    function du(r, i) {
      if (!r || La) return "";
      La = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (i) if (i = function() {
          throw Error();
        }, Object.defineProperty(i.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(i, []);
          } catch (ve) {
            var f = ve;
          }
          Reflect.construct(r, [], i);
        } else {
          try {
            i.call();
          } catch (ve) {
            f = ve;
          }
          r.call(i.prototype);
        }
        else {
          try {
            throw Error();
          } catch (ve) {
            f = ve;
          }
          r();
        }
      } catch (ve) {
        if (ve && f && typeof ve.stack == "string") {
          for (var p = ve.stack.split(`
`), S = f.stack.split(`
`), A = p.length - 1, B = S.length - 1; 1 <= A && 0 <= B && p[A] !== S[B]; ) B--;
          for (; 1 <= A && 0 <= B; A--, B--) if (p[A] !== S[B]) {
            if (A !== 1 || B !== 1)
              do
                if (A--, B--, 0 > B || p[A] !== S[B]) {
                  var $ = `
` + p[A].replace(" at new ", " at ");
                  return r.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", r.displayName)), $;
                }
              while (1 <= A && 0 <= B);
            break;
          }
        }
      } finally {
        La = !1, Error.prepareStackTrace = o;
      }
      return (r = r ? r.displayName || r.name : "") ? ps(r) : "";
    }
    var Vc = Object.prototype.hasOwnProperty, ki = [], Hi = -1;
    function Nr(r) {
      return { current: r };
    }
    function jt(r) {
      0 > Hi || (r.current = ki[Hi], ki[Hi] = null, Hi--);
    }
    function It(r, i) {
      Hi++, ki[Hi] = r.current, r.current = i;
    }
    var Xr = {}, Tn = Nr(Xr), qt = Nr(!1), Zr = Xr;
    function Ba(r, i) {
      var o = r.type.contextTypes;
      if (!o) return Xr;
      var f = r.stateNode;
      if (f && f.__reactInternalMemoizedUnmaskedChildContext === i) return f.__reactInternalMemoizedMaskedChildContext;
      var p = {}, S;
      for (S in o) p[S] = i[S];
      return f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = i, r.__reactInternalMemoizedMaskedChildContext = p), p;
    }
    function Jn(r) {
      return r = r.childContextTypes, r != null;
    }
    function ka() {
      jt(qt), jt(Tn);
    }
    function rl(r, i, o) {
      if (Tn.current !== Xr) throw Error(v(168));
      It(Tn, i), It(qt, o);
    }
    function ms(r, i, o) {
      var f = r.stateNode;
      if (i = i.childContextTypes, typeof f.getChildContext != "function") return o;
      f = f.getChildContext();
      for (var p in f) if (!(p in i)) throw Error(v(108, se(r) || "Unknown", p));
      return m({}, o, f);
    }
    function Pi(r) {
      return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Xr, Zr = Tn.current, It(Tn, r), It(qt, qt.current), !0;
    }
    function Ha(r, i, o) {
      var f = r.stateNode;
      if (!f) throw Error(v(169));
      o ? (r = ms(r, i, Zr), f.__reactInternalMemoizedMergedChildContext = r, jt(qt), jt(Tn), It(Tn, r)) : jt(qt), It(qt, o);
    }
    var mr = Math.clz32 ? Math.clz32 : po, il = Math.log, ho = Math.LN2;
    function po(r) {
      return r >>>= 0, r === 0 ? 32 : 31 - (il(r) / ho | 0) | 0;
    }
    var ca = 64, fa = 4194304;
    function xi(r) {
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
    function da(r, i) {
      var o = r.pendingLanes;
      if (o === 0) return 0;
      var f = 0, p = r.suspendedLanes, S = r.pingedLanes, A = o & 268435455;
      if (A !== 0) {
        var B = A & ~p;
        B !== 0 ? f = xi(B) : (S &= A, S !== 0 && (f = xi(S)));
      } else A = o & ~p, A !== 0 ? f = xi(A) : S !== 0 && (f = xi(S));
      if (f === 0) return 0;
      if (i !== 0 && i !== f && !(i & p) && (p = f & -f, S = i & -i, p >= S || p === 16 && (S & 4194240) !== 0)) return i;
      if (f & 4 && (f |= o & 16), i = r.entangledLanes, i !== 0) for (r = r.entanglements, i &= f; 0 < i; ) o = 31 - mr(i), p = 1 << o, f |= r[o], i &= ~p;
      return f;
    }
    function Fr(r, i) {
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
    function Jr(r, i) {
      for (var o = r.suspendedLanes, f = r.pingedLanes, p = r.expirationTimes, S = r.pendingLanes; 0 < S; ) {
        var A = 31 - mr(S), B = 1 << A, $ = p[A];
        $ === -1 ? (!(B & o) || B & f) && (p[A] = Fr(B, i)) : $ <= i && (r.expiredLanes |= B), S &= ~B;
      }
    }
    function bn(r) {
      return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
    }
    function al(r) {
      for (var i = [], o = 0; 31 > o; o++) i.push(r);
      return i;
    }
    function vs(r, i, o) {
      r.pendingLanes |= i, i !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, i = 31 - mr(i), r[i] = o;
    }
    function jc(r, i) {
      var o = r.pendingLanes & ~i;
      r.pendingLanes = i, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= i, r.mutableReadLanes &= i, r.entangledLanes &= i, i = r.entanglements;
      var f = r.eventTimes;
      for (r = r.expirationTimes; 0 < o; ) {
        var p = 31 - mr(o), S = 1 << p;
        i[p] = 0, f[p] = -1, r[p] = -1, o &= ~S;
      }
    }
    function sl(r, i) {
      var o = r.entangledLanes |= i;
      for (r = r.entanglements; o; ) {
        var f = 31 - mr(o), p = 1 << f;
        p & i | r[f] & i && (r[f] |= i), o &= ~p;
      }
    }
    var bt = 0;
    function hu(r) {
      return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Si = d.unstable_scheduleCallback, pu = d.unstable_cancelCallback, Ic = d.unstable_shouldYield, mo = d.unstable_requestPaint, nn = d.unstable_now, mu = d.unstable_ImmediatePriority, qc = d.unstable_UserBlockingPriority, vu = d.unstable_NormalPriority, vo = d.unstable_IdlePriority, ha = null, Kr = null;
    function Pa(r) {
      if (Kr && typeof Kr.onCommitFiberRoot == "function") try {
        Kr.onCommitFiberRoot(ha, r, void 0, (r.current.flags & 128) === 128);
      } catch {
      }
    }
    function yo(r, i) {
      return r === i && (r !== 0 || 1 / r === 1 / i) || r !== r && i !== i;
    }
    var Or = typeof Object.is == "function" ? Object.is : yo, vr = null, Va = !1, ys = !1;
    function gs(r) {
      vr === null ? vr = [r] : vr.push(r);
    }
    function Yc(r) {
      Va = !0, gs(r);
    }
    function $r() {
      if (!ys && vr !== null) {
        ys = !0;
        var r = 0, i = bt;
        try {
          var o = vr;
          for (bt = 1; r < o.length; r++) {
            var f = o[r];
            do
              f = f(!0);
            while (f !== null);
          }
          vr = null, Va = !1;
        } catch (p) {
          throw vr !== null && (vr = vr.slice(r + 1)), Si(mu, $r), p;
        } finally {
          bt = i, ys = !1;
        }
      }
      return null;
    }
    var Wc = M.ReactCurrentBatchConfig;
    function ll(r, i) {
      if (Or(r, i)) return !0;
      if (typeof r != "object" || r === null || typeof i != "object" || i === null) return !1;
      var o = Object.keys(r), f = Object.keys(i);
      if (o.length !== f.length) return !1;
      for (f = 0; f < o.length; f++) {
        var p = o[f];
        if (!Vc.call(i, p) || !Or(r[p], i[p])) return !1;
      }
      return !0;
    }
    function C(r) {
      switch (r.tag) {
        case 5:
          return ps(r.type);
        case 16:
          return ps("Lazy");
        case 13:
          return ps("Suspense");
        case 19:
          return ps("SuspenseList");
        case 0:
        case 2:
        case 15:
          return r = du(r.type, !1), r;
        case 11:
          return r = du(r.type.render, !1), r;
        case 1:
          return r = du(r.type, !0), r;
        default:
          return "";
      }
    }
    function F(r, i) {
      if (r && r.defaultProps) {
        i = m({}, i), r = r.defaultProps;
        for (var o in r) i[o] === void 0 && (i[o] = r[o]);
        return i;
      }
      return i;
    }
    var W = Nr(null), K = null, xe = null, Je = null;
    function Pe() {
      Je = xe = K = null;
    }
    function it(r, i, o) {
      dt ? (It(W, i._currentValue), i._currentValue = o) : (It(W, i._currentValue2), i._currentValue2 = o);
    }
    function ht(r) {
      var i = W.current;
      jt(W), dt ? r._currentValue = i : r._currentValue2 = i;
    }
    function Ft(r, i, o) {
      for (; r !== null; ) {
        var f = r.alternate;
        if ((r.childLanes & i) !== i ? (r.childLanes |= i, f !== null && (f.childLanes |= i)) : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i), r === o) break;
        r = r.return;
      }
    }
    function Ot(r, i) {
      K = r, Je = xe = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & i && (Kn = !0), r.firstContext = null);
    }
    function gt(r) {
      var i = dt ? r._currentValue : r._currentValue2;
      if (Je !== r) if (r = { context: r, memoizedValue: i, next: null }, xe === null) {
        if (K === null) throw Error(v(308));
        xe = r, K.dependencies = { lanes: 0, firstContext: r };
      } else xe = xe.next = r;
      return i;
    }
    var Ct = null, Ut = !1;
    function dn(r) {
      r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function Vi(r, i) {
      r = r.updateQueue, i.updateQueue === r && (i.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
    }
    function Ur(r, i) {
      return { eventTime: r, lane: i, tag: 0, payload: null, callback: null, next: null };
    }
    function _i(r, i) {
      var o = r.updateQueue;
      o !== null && (o = o.shared, Rn !== null && r.mode & 1 && !(pt & 2) ? (r = o.interleaved, r === null ? (i.next = i, Ct === null ? Ct = [o] : Ct.push(o)) : (i.next = r.next, r.next = i), o.interleaved = i) : (r = o.pending, r === null ? i.next = i : (i.next = r.next, r.next = i), o.pending = i));
    }
    function ul(r, i, o) {
      if (i = i.updateQueue, i !== null && (i = i.shared, (o & 4194240) !== 0)) {
        var f = i.lanes;
        f &= r.pendingLanes, o |= f, i.lanes = o, sl(r, o);
      }
    }
    function yu(r, i) {
      var o = r.updateQueue, f = r.alternate;
      if (f !== null && (f = f.updateQueue, o === f)) {
        var p = null, S = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var A = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
            S === null ? p = S = A : S = S.next = A, o = o.next;
          } while (o !== null);
          S === null ? p = S = i : S = S.next = i;
        } else p = S = i;
        o = { baseState: f.baseState, firstBaseUpdate: p, lastBaseUpdate: S, shared: f.shared, effects: f.effects }, r.updateQueue = o;
        return;
      }
      r = o.lastBaseUpdate, r === null ? o.firstBaseUpdate = i : r.next = i, o.lastBaseUpdate = i;
    }
    function ol(r, i, o, f) {
      var p = r.updateQueue;
      Ut = !1;
      var S = p.firstBaseUpdate, A = p.lastBaseUpdate, B = p.shared.pending;
      if (B !== null) {
        p.shared.pending = null;
        var $ = B, ve = $.next;
        $.next = null, A === null ? S = ve : A.next = ve, A = $;
        var Ce = r.alternate;
        Ce !== null && (Ce = Ce.updateQueue, B = Ce.lastBaseUpdate, B !== A && (B === null ? Ce.firstBaseUpdate = ve : B.next = ve, Ce.lastBaseUpdate = $));
      }
      if (S !== null) {
        var rt = p.baseState;
        A = 0, Ce = ve = $ = null, B = S;
        do {
          var $e = B.lane, Kt = B.eventTime;
          if ((f & $e) === $e) {
            Ce !== null && (Ce = Ce.next = {
              eventTime: Kt,
              lane: 0,
              tag: B.tag,
              payload: B.payload,
              callback: B.callback,
              next: null
            });
            e: {
              var Qe = r, In = B;
              switch ($e = i, Kt = o, In.tag) {
                case 1:
                  if (Qe = In.payload, typeof Qe == "function") {
                    rt = Qe.call(Kt, rt, $e);
                    break e;
                  }
                  rt = Qe;
                  break e;
                case 3:
                  Qe.flags = Qe.flags & -65537 | 128;
                case 0:
                  if (Qe = In.payload, $e = typeof Qe == "function" ? Qe.call(Kt, rt, $e) : Qe, $e == null) break e;
                  rt = m({}, rt, $e);
                  break e;
                case 2:
                  Ut = !0;
              }
            }
            B.callback !== null && B.lane !== 0 && (r.flags |= 64, $e = p.effects, $e === null ? p.effects = [B] : $e.push(B));
          } else Kt = { eventTime: Kt, lane: $e, tag: B.tag, payload: B.payload, callback: B.callback, next: null }, Ce === null ? (ve = Ce = Kt, $ = rt) : Ce = Ce.next = Kt, A |= $e;
          if (B = B.next, B === null) {
            if (B = p.shared.pending, B === null) break;
            $e = B, B = $e.next, $e.next = null, p.lastBaseUpdate = $e, p.shared.pending = null;
          }
        } while (!0);
        if (Ce === null && ($ = rt), p.baseState = $, p.firstBaseUpdate = ve, p.lastBaseUpdate = Ce, i = p.shared.interleaved, i !== null) {
          p = i;
          do
            A |= p.lane, p = p.next;
          while (p !== i);
        } else S === null && (p.shared.lanes = 0);
        Xi |= A, r.lanes = A, r.memoizedState = rt;
      }
    }
    function gu(r, i, o) {
      if (r = i.effects, i.effects = null, r !== null) for (i = 0; i < r.length; i++) {
        var f = r[i], p = f.callback;
        if (p !== null) {
          if (f.callback = null, f = o, typeof p != "function") throw Error(v(191, p));
          p.call(f);
        }
      }
    }
    var go = new u.Component().refs;
    function xo(r, i, o, f) {
      i = r.memoizedState, o = o(f, i), o = o == null ? i : m({}, i, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
    }
    var So = { isMounted: function(r) {
      return (r = r._reactInternals) ? Xe(r) === r : !1;
    }, enqueueSetState: function(r, i, o) {
      r = r._reactInternals;
      var f = $n(), p = Xa(r), S = Ur(f, p);
      S.payload = i, o != null && (S.callback = o), _i(r, S), i = si(r, p, f), i !== null && ul(i, r, p);
    }, enqueueReplaceState: function(r, i, o) {
      r = r._reactInternals;
      var f = $n(), p = Xa(r), S = Ur(f, p);
      S.tag = 1, S.payload = i, o != null && (S.callback = o), _i(r, S), i = si(r, p, f), i !== null && ul(i, r, p);
    }, enqueueForceUpdate: function(r, i) {
      r = r._reactInternals;
      var o = $n(), f = Xa(r), p = Ur(
        o,
        f
      );
      p.tag = 2, i != null && (p.callback = i), _i(r, p), i = si(r, f, o), i !== null && ul(i, r, f);
    } };
    function xd(r, i, o, f, p, S, A) {
      return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(f, S, A) : i.prototype && i.prototype.isPureReactComponent ? !ll(o, f) || !ll(p, S) : !0;
    }
    function Sd(r, i, o) {
      var f = !1, p = Xr, S = i.contextType;
      return typeof S == "object" && S !== null ? S = gt(S) : (p = Jn(i) ? Zr : Tn.current, f = i.contextTypes, S = (f = f != null) ? Ba(r, p) : Xr), i = new i(o, S), r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = So, r.stateNode = i, i._reactInternals = r, f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = p, r.__reactInternalMemoizedMaskedChildContext = S), i;
    }
    function _d(r, i, o, f) {
      r = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(o, f), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(o, f), i.state !== r && So.enqueueReplaceState(i, i.state, null);
    }
    function Qc(r, i, o, f) {
      var p = r.stateNode;
      p.props = o, p.state = r.memoizedState, p.refs = go, dn(r);
      var S = i.contextType;
      typeof S == "object" && S !== null ? p.context = gt(S) : (S = Jn(i) ? Zr : Tn.current, p.context = Ba(r, S)), p.state = r.memoizedState, S = i.getDerivedStateFromProps, typeof S == "function" && (xo(r, i, S, o), p.state = r.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (i = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), i !== p.state && So.enqueueReplaceState(p, p.state, null), ol(r, o, p, f), p.state = r.memoizedState), typeof p.componentDidMount == "function" && (r.flags |= 4194308);
    }
    var cl = [], fl = 0, _o = null, Eo = 0, ei = [], ti = 0, xs = null, pa = 1, ma = "";
    function Ss(r, i) {
      cl[fl++] = Eo, cl[fl++] = _o, _o = r, Eo = i;
    }
    function Ed(r, i, o) {
      ei[ti++] = pa, ei[ti++] = ma, ei[ti++] = xs, xs = r;
      var f = pa;
      r = ma;
      var p = 32 - mr(f) - 1;
      f &= ~(1 << p), o += 1;
      var S = 32 - mr(i) + p;
      if (30 < S) {
        var A = p - p % 5;
        S = (f & (1 << A) - 1).toString(32), f >>= A, p -= A, pa = 1 << 32 - mr(i) + p | o << p | f, ma = S + r;
      } else pa = 1 << S | o << p | f, ma = r;
    }
    function Gc(r) {
      r.return !== null && (Ss(r, 1), Ed(r, 1, 0));
    }
    function Xc(r) {
      for (; r === _o; ) _o = cl[--fl], cl[fl] = null, Eo = cl[--fl], cl[fl] = null;
      for (; r === xs; ) xs = ei[--ti], ei[ti] = null, ma = ei[--ti], ei[ti] = null, pa = ei[--ti], ei[ti] = null;
    }
    var Lr = null, Pn = null, rn = !1, dl = !1, ni = null;
    function Zc(r, i) {
      var o = er(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = i, o.return = r, i = r.deletions, i === null ? (r.deletions = [o], r.flags |= 16) : i.push(o);
    }
    function Jc(r, i) {
      switch (r.tag) {
        case 5:
          return i = Dr(i, r.type, r.pendingProps), i !== null ? (r.stateNode = i, Lr = r, Pn = co(i), !0) : !1;
        case 6:
          return i = rr(i, r.pendingProps), i !== null ? (r.stateNode = i, Lr = r, Pn = null, !0) : !1;
        case 13:
          if (i = ir(i), i !== null) {
            var o = xs !== null ? { id: pa, overflow: ma } : null;
            return r.memoizedState = { dehydrated: i, treeContext: o, retryLane: 1073741824 }, o = er(18, null, null, 0), o.stateNode = i, o.return = r, r.child = o, Lr = r, Pn = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function Ro(r) {
      return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
    }
    function Co(r) {
      if (rn) {
        var i = Pn;
        if (i) {
          var o = i;
          if (!Jc(r, i)) {
            if (Ro(r)) throw Error(v(418));
            i = fs(o);
            var f = Lr;
            i && Jc(r, i) ? Zc(f, o) : (r.flags = r.flags & -4097 | 2, rn = !1, Lr = r);
          }
        } else {
          if (Ro(r)) throw Error(v(418));
          r.flags = r.flags & -4097 | 2, rn = !1, Lr = r;
        }
      }
    }
    function Kc(r) {
      for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
      Lr = r;
    }
    function xu(r) {
      if (!ut || r !== Lr) return !1;
      if (!rn) return Kc(r), rn = !0, !1;
      if (r.tag !== 3 && (r.tag !== 5 || ds(r.type) && !Oe(r.type, r.memoizedProps))) {
        var i = Pn;
        if (i) {
          if (Ro(r)) {
            for (r = Pn; r; ) r = fs(r);
            throw Error(v(418));
          }
          for (; i; ) Zc(r, i), i = fs(i);
        }
      }
      if (Kc(r), r.tag === 13) {
        if (!ut) throw Error(v(316));
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(v(317));
        Pn = oa(r);
      } else Pn = Lr ? fs(r.stateNode) : null;
      return !0;
    }
    function hl() {
      ut && (Pn = Lr = null, dl = rn = !1);
    }
    function Su(r) {
      ni === null ? ni = [r] : ni.push(r);
    }
    function _s(r, i, o) {
      if (r = o.ref, r !== null && typeof r != "function" && typeof r != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(v(309));
            var f = o.stateNode;
          }
          if (!f) throw Error(v(147, r));
          var p = f, S = "" + r;
          return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === S ? i.ref : (i = function(A) {
            var B = p.refs;
            B === go && (B = p.refs = {}), A === null ? delete B[S] : B[S] = A;
          }, i._stringRef = S, i);
        }
        if (typeof r != "string") throw Error(v(284));
        if (!o._owner) throw Error(v(290, r));
      }
      return r;
    }
    function Ei(r, i) {
      throw r = Object.prototype.toString.call(i), Error(v(31, r === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : r));
    }
    function Mo(r) {
      var i = r._init;
      return i(r._payload);
    }
    function _u(r) {
      function i(Y, P) {
        if (r) {
          var X = Y.deletions;
          X === null ? (Y.deletions = [P], Y.flags |= 16) : X.push(P);
        }
      }
      function o(Y, P) {
        if (!r) return null;
        for (; P !== null; ) i(Y, P), P = P.sibling;
        return null;
      }
      function f(Y, P) {
        for (Y = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? Y.set(P.key, P) : Y.set(P.index, P), P = P.sibling;
        return Y;
      }
      function p(Y, P) {
        return Y = _r(Y, P), Y.index = 0, Y.sibling = null, Y;
      }
      function S(Y, P, X) {
        return Y.index = X, r ? (X = Y.alternate, X !== null ? (X = X.index, X < P ? (Y.flags |= 2, P) : X) : (Y.flags |= 2, P)) : (Y.flags |= 1048576, P);
      }
      function A(Y) {
        return r && Y.alternate === null && (Y.flags |= 2), Y;
      }
      function B(Y, P, X, we) {
        return P === null || P.tag !== 6 ? (P = Jo(X, Y.mode, we), P.return = Y, P) : (P = p(P, X), P.return = Y, P);
      }
      function $(Y, P, X, we) {
        var Ye = X.type;
        return Ye === R ? Ce(Y, P, X.props.children, we, X.key) : P !== null && (P.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === ee && Mo(Ye) === P.type) ? (we = p(P, X.props), we.ref = _s(Y, P, X), we.return = Y, we) : (we = Hs(X.type, X.key, X.props, null, Y.mode, we), we.ref = _s(Y, P, X), we.return = Y, we);
      }
      function ve(Y, P, X, we) {
        return P === null || P.tag !== 4 || P.stateNode.containerInfo !== X.containerInfo || P.stateNode.implementation !== X.implementation ? (P = ju(X, Y.mode, we), P.return = Y, P) : (P = p(P, X.children || []), P.return = Y, P);
      }
      function Ce(Y, P, X, we, Ye) {
        return P === null || P.tag !== 7 ? (P = Ja(X, Y.mode, we, Ye), P.return = Y, P) : (P = p(P, X), P.return = Y, P);
      }
      function rt(Y, P, X) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return P = Jo("" + P, Y.mode, X), P.return = Y, P;
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case _:
              return X = Hs(P.type, P.key, P.props, null, Y.mode, X), X.ref = _s(Y, null, P), X.return = Y, X;
            case g:
              return P = ju(P, Y.mode, X), P.return = Y, P;
            case ee:
              var we = P._init;
              return rt(Y, we(P._payload), X);
          }
          if (Ve(P) || Me(P)) return P = Ja(P, Y.mode, X, null), P.return = Y, P;
          Ei(Y, P);
        }
        return null;
      }
      function $e(Y, P, X, we) {
        var Ye = P !== null ? P.key : null;
        if (typeof X == "string" && X !== "" || typeof X == "number") return Ye !== null ? null : B(Y, P, "" + X, we);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case _:
              return X.key === Ye ? $(Y, P, X, we) : null;
            case g:
              return X.key === Ye ? ve(Y, P, X, we) : null;
            case ee:
              return Ye = X._init, $e(
                Y,
                P,
                Ye(X._payload),
                we
              );
          }
          if (Ve(X) || Me(X)) return Ye !== null ? null : Ce(Y, P, X, we, null);
          Ei(Y, X);
        }
        return null;
      }
      function Kt(Y, P, X, we, Ye) {
        if (typeof we == "string" && we !== "" || typeof we == "number") return Y = Y.get(X) || null, B(P, Y, "" + we, Ye);
        if (typeof we == "object" && we !== null) {
          switch (we.$$typeof) {
            case _:
              return Y = Y.get(we.key === null ? X : we.key) || null, $(P, Y, we, Ye);
            case g:
              return Y = Y.get(we.key === null ? X : we.key) || null, ve(P, Y, we, Ye);
            case ee:
              var ct = we._init;
              return Kt(Y, P, X, ct(we._payload), Ye);
          }
          if (Ve(we) || Me(we)) return Y = Y.get(X) || null, Ce(P, Y, we, Ye, null);
          Ei(P, we);
        }
        return null;
      }
      function Qe(Y, P, X, we) {
        for (var Ye = null, ct = null, tt = P, mt = P = 0, yn = null; tt !== null && mt < X.length; mt++) {
          tt.index > mt ? (yn = tt, tt = null) : yn = tt.sibling;
          var Dt = $e(Y, tt, X[mt], we);
          if (Dt === null) {
            tt === null && (tt = yn);
            break;
          }
          r && tt && Dt.alternate === null && i(Y, tt), P = S(Dt, P, mt), ct === null ? Ye = Dt : ct.sibling = Dt, ct = Dt, tt = yn;
        }
        if (mt === X.length) return o(Y, tt), rn && Ss(Y, mt), Ye;
        if (tt === null) {
          for (; mt < X.length; mt++) tt = rt(Y, X[mt], we), tt !== null && (P = S(tt, P, mt), ct === null ? Ye = tt : ct.sibling = tt, ct = tt);
          return rn && Ss(Y, mt), Ye;
        }
        for (tt = f(Y, tt); mt < X.length; mt++) yn = Kt(tt, Y, mt, X[mt], we), yn !== null && (r && yn.alternate !== null && tt.delete(yn.key === null ? mt : yn.key), P = S(yn, P, mt), ct === null ? Ye = yn : ct.sibling = yn, ct = yn);
        return r && tt.forEach(function(Ka) {
          return i(Y, Ka);
        }), rn && Ss(Y, mt), Ye;
      }
      function In(Y, P, X, we) {
        var Ye = Me(X);
        if (typeof Ye != "function") throw Error(v(150));
        if (X = Ye.call(X), X == null) throw Error(v(151));
        for (var ct = Ye = null, tt = P, mt = P = 0, yn = null, Dt = X.next(); tt !== null && !Dt.done; mt++, Dt = X.next()) {
          tt.index > mt ? (yn = tt, tt = null) : yn = tt.sibling;
          var Ka = $e(Y, tt, Dt.value, we);
          if (Ka === null) {
            tt === null && (tt = yn);
            break;
          }
          r && tt && Ka.alternate === null && i(Y, tt), P = S(Ka, P, mt), ct === null ? Ye = Ka : ct.sibling = Ka, ct = Ka, tt = yn;
        }
        if (Dt.done) return o(
          Y,
          tt
        ), rn && Ss(Y, mt), Ye;
        if (tt === null) {
          for (; !Dt.done; mt++, Dt = X.next()) Dt = rt(Y, Dt.value, we), Dt !== null && (P = S(Dt, P, mt), ct === null ? Ye = Dt : ct.sibling = Dt, ct = Dt);
          return rn && Ss(Y, mt), Ye;
        }
        for (tt = f(Y, tt); !Dt.done; mt++, Dt = X.next()) Dt = Kt(tt, Y, mt, Dt.value, we), Dt !== null && (r && Dt.alternate !== null && tt.delete(Dt.key === null ? mt : Dt.key), P = S(Dt, P, mt), ct === null ? Ye = Dt : ct.sibling = Dt, ct = Dt);
        return r && tt.forEach(function(Ko) {
          return i(Y, Ko);
        }), rn && Ss(Y, mt), Ye;
      }
      function ar(Y, P, X, we) {
        if (typeof X == "object" && X !== null && X.type === R && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case _:
              e: {
                for (var Ye = X.key, ct = P; ct !== null; ) {
                  if (ct.key === Ye) {
                    if (Ye = X.type, Ye === R) {
                      if (ct.tag === 7) {
                        o(Y, ct.sibling), P = p(ct, X.props.children), P.return = Y, Y = P;
                        break e;
                      }
                    } else if (ct.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === ee && Mo(Ye) === ct.type) {
                      o(Y, ct.sibling), P = p(ct, X.props), P.ref = _s(Y, ct, X), P.return = Y, Y = P;
                      break e;
                    }
                    o(Y, ct);
                    break;
                  } else i(Y, ct);
                  ct = ct.sibling;
                }
                X.type === R ? (P = Ja(X.props.children, Y.mode, we, X.key), P.return = Y, Y = P) : (we = Hs(X.type, X.key, X.props, null, Y.mode, we), we.ref = _s(Y, P, X), we.return = Y, Y = we);
              }
              return A(Y);
            case g:
              e: {
                for (ct = X.key; P !== null; ) {
                  if (P.key === ct) if (P.tag === 4 && P.stateNode.containerInfo === X.containerInfo && P.stateNode.implementation === X.implementation) {
                    o(Y, P.sibling), P = p(P, X.children || []), P.return = Y, Y = P;
                    break e;
                  } else {
                    o(Y, P);
                    break;
                  }
                  else i(Y, P);
                  P = P.sibling;
                }
                P = ju(X, Y.mode, we), P.return = Y, Y = P;
              }
              return A(Y);
            case ee:
              return ct = X._init, ar(Y, P, ct(X._payload), we);
          }
          if (Ve(X)) return Qe(Y, P, X, we);
          if (Me(X)) return In(Y, P, X, we);
          Ei(Y, X);
        }
        return typeof X == "string" && X !== "" || typeof X == "number" ? (X = "" + X, P !== null && P.tag === 6 ? (o(Y, P.sibling), P = p(P, X), P.return = Y, Y = P) : (o(Y, P), P = Jo(X, Y.mode, we), P.return = Y, Y = P), A(Y)) : o(Y, P);
      }
      return ar;
    }
    var pl = _u(!0), To = _u(!1), Eu = {}, yr = Nr(Eu), Ru = Nr(Eu), ja = Nr(Eu);
    function Ri(r) {
      if (r === Eu) throw Error(v(174));
      return r;
    }
    function bo(r, i) {
      It(ja, i), It(Ru, r), It(yr, Eu), r = ge(i), jt(yr), It(yr, r);
    }
    function Es() {
      jt(yr), jt(Ru), jt(ja);
    }
    function Cu(r) {
      var i = Ri(ja.current), o = Ri(yr.current);
      i = H(o, r.type, i), o !== i && (It(Ru, r), It(yr, i));
    }
    function Br(r) {
      Ru.current === r && (jt(yr), jt(Ru));
    }
    var an = Nr(0);
    function Rs(r) {
      for (var i = r; i !== null; ) {
        if (i.tag === 13) {
          var o = i.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || oo(o) || Bi(o))) return i;
        } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
          if (i.flags & 128) return i;
        } else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === r) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === r) return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return null;
    }
    var Ci = [];
    function ji() {
      for (var r = 0; r < Ci.length; r++) {
        var i = Ci[r];
        dt ? i._workInProgressVersionPrimary = null : i._workInProgressVersionSecondary = null;
      }
      Ci.length = 0;
    }
    var wn = M.ReactCurrentDispatcher, Xt = M.ReactCurrentBatchConfig, Ia = 0, wt = null, ln = null, Jt = null, ml = !1, Ii = !1, vl = 0, yl = 0;
    function zn() {
      throw Error(v(321));
    }
    function ri(r, i) {
      if (i === null) return !1;
      for (var o = 0; o < i.length && o < r.length; o++) if (!Or(r[o], i[o])) return !1;
      return !0;
    }
    function gl(r, i, o, f, p, S) {
      if (Ia = S, wt = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, wn.current = r === null || r.memoizedState === null ? nf : rf, r = o(f, p), Ii) {
        S = 0;
        do {
          if (Ii = !1, vl = 0, 25 <= S) throw Error(v(301));
          S += 1, Jt = ln = null, i.updateQueue = null, wn.current = af, r = o(f, p);
        } while (Ii);
      }
      if (wn.current = Rl, i = ln !== null && ln.next !== null, Ia = 0, Jt = ln = wt = null, ml = !1, i) throw Error(v(300));
      return r;
    }
    function Mu() {
      var r = vl !== 0;
      return vl = 0, r;
    }
    function qi() {
      var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Jt === null ? wt.memoizedState = Jt = r : Jt = Jt.next = r, Jt;
    }
    function Mi() {
      if (ln === null) {
        var r = wt.alternate;
        r = r !== null ? r.memoizedState : null;
      } else r = ln.next;
      var i = Jt === null ? wt.memoizedState : Jt.next;
      if (i !== null) Jt = i, ln = r;
      else {
        if (r === null) throw Error(v(310));
        ln = r, r = { memoizedState: ln.memoizedState, baseState: ln.baseState, baseQueue: ln.baseQueue, queue: ln.queue, next: null }, Jt === null ? wt.memoizedState = Jt = r : Jt = Jt.next = r;
      }
      return Jt;
    }
    function Yi(r, i) {
      return typeof i == "function" ? i(r) : i;
    }
    function Tu(r) {
      var i = Mi(), o = i.queue;
      if (o === null) throw Error(v(311));
      o.lastRenderedReducer = r;
      var f = ln, p = f.baseQueue, S = o.pending;
      if (S !== null) {
        if (p !== null) {
          var A = p.next;
          p.next = S.next, S.next = A;
        }
        f.baseQueue = p = S, o.pending = null;
      }
      if (p !== null) {
        S = p.next, f = f.baseState;
        var B = A = null, $ = null, ve = S;
        do {
          var Ce = ve.lane;
          if ((Ia & Ce) === Ce) $ !== null && ($ = $.next = { lane: 0, action: ve.action, hasEagerState: ve.hasEagerState, eagerState: ve.eagerState, next: null }), f = ve.hasEagerState ? ve.eagerState : r(f, ve.action);
          else {
            var rt = {
              lane: Ce,
              action: ve.action,
              hasEagerState: ve.hasEagerState,
              eagerState: ve.eagerState,
              next: null
            };
            $ === null ? (B = $ = rt, A = f) : $ = $.next = rt, wt.lanes |= Ce, Xi |= Ce;
          }
          ve = ve.next;
        } while (ve !== null && ve !== S);
        $ === null ? A = f : $.next = B, Or(f, i.memoizedState) || (Kn = !0), i.memoizedState = f, i.baseState = A, i.baseQueue = $, o.lastRenderedState = f;
      }
      if (r = o.interleaved, r !== null) {
        p = r;
        do
          S = p.lane, wt.lanes |= S, Xi |= S, p = p.next;
        while (p !== r);
      } else p === null && (o.lanes = 0);
      return [i.memoizedState, o.dispatch];
    }
    function wo(r) {
      var i = Mi(), o = i.queue;
      if (o === null) throw Error(v(311));
      o.lastRenderedReducer = r;
      var f = o.dispatch, p = o.pending, S = i.memoizedState;
      if (p !== null) {
        o.pending = null;
        var A = p = p.next;
        do
          S = r(S, A.action), A = A.next;
        while (A !== p);
        Or(S, i.memoizedState) || (Kn = !0), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), o.lastRenderedState = S;
      }
      return [S, f];
    }
    function Cs() {
    }
    function $c(r, i) {
      var o = wt, f = Mi(), p = i(), S = !Or(f.memoizedState, p);
      if (S && (f.memoizedState = p, Kn = !0), f = f.queue, fe(At.bind(null, o, f, r), [r]), f.getSnapshot !== i || S || Jt !== null && Jt.memoizedState.tag & 1) {
        if (o.flags |= 2048, xl(9, Yt.bind(null, o, f, p, i), void 0, null), Rn === null) throw Error(v(349));
        Ia & 30 || at(o, i, p);
      }
      return p;
    }
    function at(r, i, o) {
      r.flags |= 16384, r = { getSnapshot: i, value: o }, i = wt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, wt.updateQueue = i, i.stores = [r]) : (o = i.stores, o === null ? i.stores = [r] : o.push(r));
    }
    function Yt(r, i, o, f) {
      i.value = o, i.getSnapshot = f, hn(i) && si(r, 1, -1);
    }
    function At(r, i, o) {
      return o(function() {
        hn(i) && si(r, 1, -1);
      });
    }
    function hn(r) {
      var i = r.getSnapshot;
      r = r.value;
      try {
        var o = i();
        return !Or(r, o);
      } catch {
        return !0;
      }
    }
    function ii(r) {
      var i = qi();
      return typeof r == "function" && (r = r()), i.memoizedState = i.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: r }, i.queue = r, r = r.dispatch = tf.bind(null, wt, r), [i.memoizedState, r];
    }
    function xl(r, i, o, f) {
      return r = { tag: r, create: i, destroy: o, deps: f, next: null }, i = wt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, wt.updateQueue = i, i.lastEffect = r.next = r) : (o = i.lastEffect, o === null ? i.lastEffect = r.next = r : (f = o.next, o.next = r, r.next = f, i.lastEffect = r)), r;
    }
    function Rd() {
      return Mi().memoizedState;
    }
    function zo(r, i, o, f) {
      var p = qi();
      wt.flags |= r, p.memoizedState = xl(1 | i, o, void 0, f === void 0 ? null : f);
    }
    function Do(r, i, o, f) {
      var p = Mi();
      f = f === void 0 ? null : f;
      var S = void 0;
      if (ln !== null) {
        var A = ln.memoizedState;
        if (S = A.destroy, f !== null && ri(f, A.deps)) {
          p.memoizedState = xl(i, o, S, f);
          return;
        }
      }
      wt.flags |= r, p.memoizedState = xl(1 | i, o, S, f);
    }
    function bu(r, i) {
      return zo(8390656, 8, r, i);
    }
    function fe(r, i) {
      return Do(2048, 8, r, i);
    }
    function Dn(r, i) {
      return Do(4, 2, r, i);
    }
    function xt(r, i) {
      return Do(4, 4, r, i);
    }
    function Ms(r, i) {
      if (typeof i == "function") return r = r(), i(r), function() {
        i(null);
      };
      if (i != null) return r = r(), i.current = r, function() {
        i.current = null;
      };
    }
    function va(r, i, o) {
      return o = o != null ? o.concat([r]) : null, Do(4, 4, Ms.bind(null, i, r), o);
    }
    function ya() {
    }
    function Wi(r, i) {
      var o = Mi();
      i = i === void 0 ? null : i;
      var f = o.memoizedState;
      return f !== null && i !== null && ri(i, f[1]) ? f[0] : (o.memoizedState = [r, i], r);
    }
    function Sl(r, i) {
      var o = Mi();
      i = i === void 0 ? null : i;
      var f = o.memoizedState;
      return f !== null && i !== null && ri(i, f[1]) ? f[0] : (r = r(), o.memoizedState = [r, i], r);
    }
    function _l(r, i) {
      var o = bt;
      bt = o !== 0 && 4 > o ? o : 4, r(!0);
      var f = Xt.transition;
      Xt.transition = {};
      try {
        r(!1), i();
      } finally {
        bt = o, Xt.transition = f;
      }
    }
    function El() {
      return Mi().memoizedState;
    }
    function ef(r, i, o) {
      var f = Xa(r);
      o = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null }, Ao(r) ? No(i, o) : (Fo(r, i, o), o = $n(), r = si(r, f, o), r !== null && Oo(r, i, f));
    }
    function tf(r, i, o) {
      var f = Xa(r), p = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null };
      if (Ao(r)) No(i, p);
      else {
        Fo(r, i, p);
        var S = r.alternate;
        if (r.lanes === 0 && (S === null || S.lanes === 0) && (S = i.lastRenderedReducer, S !== null)) try {
          var A = i.lastRenderedState, B = S(A, o);
          if (p.hasEagerState = !0, p.eagerState = B, Or(B, A)) return;
        } catch {
        } finally {
        }
        o = $n(), r = si(r, f, o), r !== null && Oo(r, i, f);
      }
    }
    function Ao(r) {
      var i = r.alternate;
      return r === wt || i !== null && i === wt;
    }
    function No(r, i) {
      Ii = ml = !0;
      var o = r.pending;
      o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
    }
    function Fo(r, i, o) {
      Rn !== null && r.mode & 1 && !(pt & 2) ? (r = i.interleaved, r === null ? (o.next = o, Ct === null ? Ct = [i] : Ct.push(i)) : (o.next = r.next, r.next = o), i.interleaved = o) : (r = i.pending, r === null ? o.next = o : (o.next = r.next, r.next = o), i.pending = o);
    }
    function Oo(r, i, o) {
      if (o & 4194240) {
        var f = i.lanes;
        f &= r.pendingLanes, o |= f, i.lanes = o, sl(r, o);
      }
    }
    var Rl = { readContext: gt, useCallback: zn, useContext: zn, useEffect: zn, useImperativeHandle: zn, useInsertionEffect: zn, useLayoutEffect: zn, useMemo: zn, useReducer: zn, useRef: zn, useState: zn, useDebugValue: zn, useDeferredValue: zn, useTransition: zn, useMutableSource: zn, useSyncExternalStore: zn, useId: zn, unstable_isNewReconciler: !1 }, nf = { readContext: gt, useCallback: function(r, i) {
      return qi().memoizedState = [r, i === void 0 ? null : i], r;
    }, useContext: gt, useEffect: bu, useImperativeHandle: function(r, i, o) {
      return o = o != null ? o.concat([r]) : null, zo(
        4194308,
        4,
        Ms.bind(null, i, r),
        o
      );
    }, useLayoutEffect: function(r, i) {
      return zo(4194308, 4, r, i);
    }, useInsertionEffect: function(r, i) {
      return zo(4, 2, r, i);
    }, useMemo: function(r, i) {
      var o = qi();
      return i = i === void 0 ? null : i, r = r(), o.memoizedState = [r, i], r;
    }, useReducer: function(r, i, o) {
      var f = qi();
      return i = o !== void 0 ? o(i) : i, f.memoizedState = f.baseState = i, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: i }, f.queue = r, r = r.dispatch = ef.bind(null, wt, r), [f.memoizedState, r];
    }, useRef: function(r) {
      var i = qi();
      return r = { current: r }, i.memoizedState = r;
    }, useState: ii, useDebugValue: ya, useDeferredValue: function(r) {
      var i = ii(r), o = i[0], f = i[1];
      return bu(function() {
        var p = Xt.transition;
        Xt.transition = {};
        try {
          f(r);
        } finally {
          Xt.transition = p;
        }
      }, [r]), o;
    }, useTransition: function() {
      var r = ii(!1), i = r[0];
      return r = _l.bind(null, r[1]), qi().memoizedState = r, [i, r];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(r, i, o) {
      var f = wt, p = qi();
      if (rn) {
        if (o === void 0) throw Error(v(407));
        o = o();
      } else {
        if (o = i(), Rn === null) throw Error(v(349));
        Ia & 30 || at(f, i, o);
      }
      p.memoizedState = o;
      var S = { value: o, getSnapshot: i };
      return p.queue = S, bu(At.bind(null, f, S, r), [r]), f.flags |= 2048, xl(9, Yt.bind(null, f, S, o, i), void 0, null), o;
    }, useId: function() {
      var r = qi(), i = Rn.identifierPrefix;
      if (rn) {
        var o = ma, f = pa;
        o = (f & ~(1 << 32 - mr(f) - 1)).toString(32) + o, i = ":" + i + "R" + o, o = vl++, 0 < o && (i += "H" + o.toString(32)), i += ":";
      } else o = yl++, i = ":" + i + "r" + o.toString(32) + ":";
      return r.memoizedState = i;
    }, unstable_isNewReconciler: !1 }, rf = {
      readContext: gt,
      useCallback: Wi,
      useContext: gt,
      useEffect: fe,
      useImperativeHandle: va,
      useInsertionEffect: Dn,
      useLayoutEffect: xt,
      useMemo: Sl,
      useReducer: Tu,
      useRef: Rd,
      useState: function() {
        return Tu(Yi);
      },
      useDebugValue: ya,
      useDeferredValue: function(r) {
        var i = Tu(Yi), o = i[0], f = i[1];
        return fe(function() {
          var p = Xt.transition;
          Xt.transition = {};
          try {
            f(r);
          } finally {
            Xt.transition = p;
          }
        }, [r]), o;
      },
      useTransition: function() {
        var r = Tu(Yi)[0], i = Mi().memoizedState;
        return [r, i];
      },
      useMutableSource: Cs,
      useSyncExternalStore: $c,
      useId: El,
      unstable_isNewReconciler: !1
    }, af = {
      readContext: gt,
      useCallback: Wi,
      useContext: gt,
      useEffect: fe,
      useImperativeHandle: va,
      useInsertionEffect: Dn,
      useLayoutEffect: xt,
      useMemo: Sl,
      useReducer: wo,
      useRef: Rd,
      useState: function() {
        return wo(Yi);
      },
      useDebugValue: ya,
      useDeferredValue: function(r) {
        var i = wo(Yi), o = i[0], f = i[1];
        return fe(function() {
          var p = Xt.transition;
          Xt.transition = {};
          try {
            f(r);
          } finally {
            Xt.transition = p;
          }
        }, [r]), o;
      },
      useTransition: function() {
        var r = wo(Yi)[0], i = Mi().memoizedState;
        return [r, i];
      },
      useMutableSource: Cs,
      useSyncExternalStore: $c,
      useId: El,
      unstable_isNewReconciler: !1
    };
    function wu(r, i) {
      try {
        var o = "", f = i;
        do
          o += C(f), f = f.return;
        while (f);
        var p = o;
      } catch (S) {
        p = `
Error generating stack: ` + S.message + `
` + S.stack;
      }
      return { value: r, source: i, stack: p };
    }
    function zu(r, i) {
      try {
        console.error(i.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var sf = typeof WeakMap == "function" ? WeakMap : Map;
    function Uo(r, i, o) {
      o = Ur(-1, o), o.tag = 3, o.payload = { element: null };
      var f = i.value;
      return o.callback = function() {
        Uu || (Uu = !0, Qo = f), zu(r, i);
      }, o;
    }
    function Lo(r, i, o) {
      o = Ur(-1, o), o.tag = 3;
      var f = r.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = i.value;
        o.payload = function() {
          return f(p);
        }, o.callback = function() {
          zu(r, i);
        };
      }
      var S = r.stateNode;
      return S !== null && typeof S.componentDidCatch == "function" && (o.callback = function() {
        zu(r, i), typeof f != "function" && (Qa === null ? Qa = /* @__PURE__ */ new Set([this]) : Qa.add(this));
        var A = i.stack;
        this.componentDidCatch(i.value, { componentStack: A !== null ? A : "" });
      }), o;
    }
    function Du(r, i, o) {
      var f = r.pingCache;
      if (f === null) {
        f = r.pingCache = new sf();
        var p = /* @__PURE__ */ new Set();
        f.set(i, p);
      } else p = f.get(i), p === void 0 && (p = /* @__PURE__ */ new Set(), f.set(i, p));
      p.has(o) || (p.add(o), r = Zi.bind(null, r, i, o), i.then(r, r));
    }
    function Ts(r) {
      do {
        var i;
        if ((i = r.tag === 13) && (i = r.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i) return r;
        r = r.return;
      } while (r !== null);
      return null;
    }
    function Bo(r, i, o, f, p) {
      return r.mode & 1 ? (r.flags |= 65536, r.lanes = p, r) : (r === i ? r.flags |= 65536 : (r.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (i = Ur(-1, 1), i.tag = 2, _i(o, i))), o.lanes |= 1), r);
    }
    function ai(r) {
      r.flags |= 4;
    }
    function ko(r, i) {
      if (r !== null && r.child === i.child) return !0;
      if (i.flags & 16) return !1;
      for (r = i.child; r !== null; ) {
        if (r.flags & 12854 || r.subtreeFlags & 12854) return !1;
        r = r.sibling;
      }
      return !0;
    }
    var bs, Cl, qa, Au;
    if (Tt) bs = function(r, i) {
      for (var o = i.child; o !== null; ) {
        if (o.tag === 5 || o.tag === 6) j(r, o.stateNode);
        else if (o.tag !== 4 && o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === i) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === i) return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, Cl = function() {
    }, qa = function(r, i, o, f, p) {
      if (r = r.memoizedProps, r !== f) {
        var S = i.stateNode, A = Ri(yr.current);
        o = Le(S, o, r, f, p, A), (i.updateQueue = o) && ai(i);
      }
    }, Au = function(r, i, o, f) {
      o !== f && ai(i);
    };
    else if (kt) {
      bs = function(r, i, o, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var S = p.stateNode;
            o && f && (S = Gr(S, p.type, p.memoizedProps, p)), j(r, S);
          } else if (p.tag === 6) S = p.stateNode, o && f && (S = Li(S, p.memoizedProps, p)), j(r, S);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null) S = p.child, S !== null && (S.return = p), bs(r, p, !0, !0);
            else if (p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
          }
          if (p === i) break;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === i) return;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
      };
      var Ml = function(r, i, o, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var S = p.stateNode;
            o && f && (S = Gr(S, p.type, p.memoizedProps, p)), Fa(r, S);
          } else if (p.tag === 6) S = p.stateNode, o && f && (S = Li(S, p.memoizedProps, p)), Fa(r, S);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null) S = p.child, S !== null && (S.return = p), Ml(r, p, !0, !0);
            else if (p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
          }
          if (p === i) break;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === i) return;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
      };
      Cl = function(r, i) {
        var o = i.stateNode;
        if (!ko(r, i)) {
          r = o.containerInfo;
          var f = pr(r);
          Ml(f, i, !1, !1), o.pendingChildren = f, ai(i), ou(r, f);
        }
      }, qa = function(r, i, o, f, p) {
        var S = r.stateNode, A = r.memoizedProps;
        if ((r = ko(r, i)) && A === f) i.stateNode = S;
        else {
          var B = i.stateNode, $ = Ri(yr.current), ve = null;
          A !== f && (ve = Le(B, o, A, f, p, $)), r && ve === null ? i.stateNode = S : (S = $s(S, ve, o, A, f, i, r, B), ze(S, o, f, p, $) && ai(i), i.stateNode = S, r ? ai(i) : bs(S, i, !1, !1));
        }
      }, Au = function(r, i, o, f) {
        o !== f ? (r = Ri(ja.current), o = Ri(yr.current), i.stateNode = Ne(f, r, o, i), ai(i)) : i.stateNode = r.stateNode;
      };
    } else Cl = function() {
    }, qa = function() {
    }, Au = function() {
    };
    function Ti(r, i) {
      if (!rn) switch (r.tailMode) {
        case "hidden":
          i = r.tail;
          for (var o = null; i !== null; ) i.alternate !== null && (o = i), i = i.sibling;
          o === null ? r.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = r.tail;
          for (var f = null; o !== null; ) o.alternate !== null && (f = o), o = o.sibling;
          f === null ? i || r.tail === null ? r.tail = null : r.tail.sibling = null : f.sibling = null;
      }
    }
    function Zt(r) {
      var i = r.alternate !== null && r.alternate.child === r.child, o = 0, f = 0;
      if (i) for (var p = r.child; p !== null; ) o |= p.lanes | p.childLanes, f |= p.subtreeFlags & 14680064, f |= p.flags & 14680064, p.return = r, p = p.sibling;
      else for (p = r.child; p !== null; ) o |= p.lanes | p.childLanes, f |= p.subtreeFlags, f |= p.flags, p.return = r, p = p.sibling;
      return r.subtreeFlags |= f, r.childLanes = o, i;
    }
    function Mp(r, i, o) {
      var f = i.pendingProps;
      switch (Xc(i), i.tag) {
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
          return Zt(i), null;
        case 1:
          return Jn(i.type) && ka(), Zt(i), null;
        case 3:
          return f = i.stateNode, Es(), jt(qt), jt(Tn), ji(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (r === null || r.child === null) && (xu(i) ? ai(i) : r === null || r.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, ni !== null && (ku(ni), ni = null))), Cl(r, i), Zt(i), null;
        case 5:
          Br(i), o = Ri(ja.current);
          var p = i.type;
          if (r !== null && i.stateNode != null) qa(r, i, p, f, o), r.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
          else {
            if (!f) {
              if (i.stateNode === null) throw Error(v(166));
              return Zt(i), null;
            }
            if (r = Ri(yr.current), xu(i)) {
              if (!ut) throw Error(v(175));
              r = Mn(i.stateNode, i.type, i.memoizedProps, o, r, i, !dl), i.updateQueue = r, r !== null && ai(i);
            } else {
              var S = O(p, f, o, r, i);
              bs(S, i, !1, !1), i.stateNode = S, ze(S, p, f, o, r) && ai(i);
            }
            i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
          }
          return Zt(i), null;
        case 6:
          if (r && i.stateNode != null) Au(r, i, r.memoizedProps, f);
          else {
            if (typeof f != "string" && i.stateNode === null) throw Error(v(166));
            if (r = Ri(ja.current), o = Ri(yr.current), xu(i)) {
              if (!ut) throw Error(v(176));
              if (r = i.stateNode, f = i.memoizedProps, (o = fo(r, f, i, !dl)) && (p = Lr, p !== null)) switch (S = (p.mode & 1) !== 0, p.tag) {
                case 3:
                  hs(p.stateNode.containerInfo, r, f, S);
                  break;
                case 5:
                  Ua(p.type, p.memoizedProps, p.stateNode, r, f, S);
              }
              o && ai(i);
            } else i.stateNode = Ne(f, r, o, i);
          }
          return Zt(i), null;
        case 13:
          if (jt(an), f = i.memoizedState, rn && Pn !== null && i.mode & 1 && !(i.flags & 128)) {
            for (r = Pn; r; ) r = fs(r);
            return hl(), i.flags |= 98560, i;
          }
          if (f !== null && f.dehydrated !== null) {
            if (f = xu(i), r === null) {
              if (!f) throw Error(v(318));
              if (!ut) throw Error(v(344));
              if (r = i.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(v(317));
              cu(r, i);
            } else hl(), !(i.flags & 128) && (i.memoizedState = null), i.flags |= 4;
            return Zt(i), null;
          }
          return ni !== null && (ku(ni), ni = null), i.flags & 128 ? (i.lanes = o, i) : (f = f !== null, o = !1, r === null ? xu(i) : o = r.memoizedState !== null, f && !o && (i.child.flags |= 8192, i.mode & 1 && (r === null || an.current & 1 ? Nn === 0 && (Nn = 3) : Mf())), i.updateQueue !== null && (i.flags |= 4), Zt(i), null);
        case 4:
          return Es(), Cl(r, i), r === null && cn(i.stateNode.containerInfo), Zt(i), null;
        case 10:
          return ht(i.type._context), Zt(i), null;
        case 17:
          return Jn(i.type) && ka(), Zt(i), null;
        case 19:
          if (jt(an), p = i.memoizedState, p === null) return Zt(i), null;
          if (f = (i.flags & 128) !== 0, S = p.rendering, S === null) if (f) Ti(p, !1);
          else {
            if (Nn !== 0 || r !== null && r.flags & 128) for (r = i.child; r !== null; ) {
              if (S = Rs(r), S !== null) {
                for (i.flags |= 128, Ti(p, !1), r = S.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), i.subtreeFlags = 0, r = o, f = i.child; f !== null; ) o = f, p = r, o.flags &= 14680066, S = o.alternate, S === null ? (o.childLanes = 0, o.lanes = p, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = S.childLanes, o.lanes = S.lanes, o.child = S.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = S.memoizedProps, o.memoizedState = S.memoizedState, o.updateQueue = S.updateQueue, o.type = S.type, p = S.dependencies, o.dependencies = p === null ? null : { lanes: p.lanes, firstContext: p.firstContext }), f = f.sibling;
                return It(an, an.current & 1 | 2), i.child;
              }
              r = r.sibling;
            }
            p.tail !== null && nn() > _f && (i.flags |= 128, f = !0, Ti(p, !1), i.lanes = 4194304);
          }
          else {
            if (!f) if (r = Rs(S), r !== null) {
              if (i.flags |= 128, f = !0, r = r.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), Ti(p, !0), p.tail === null && p.tailMode === "hidden" && !S.alternate && !rn) return Zt(i), null;
            } else 2 * nn() - p.renderingStartTime > _f && o !== 1073741824 && (i.flags |= 128, f = !0, Ti(p, !1), i.lanes = 4194304);
            p.isBackwards ? (S.sibling = i.child, i.child = S) : (r = p.last, r !== null ? r.sibling = S : i.child = S, p.last = S);
          }
          return p.tail !== null ? (i = p.tail, p.rendering = i, p.tail = i.sibling, p.renderingStartTime = nn(), i.sibling = null, r = an.current, It(an, f ? r & 1 | 2 : r & 1), i) : (Zt(i), null);
        case 22:
        case 23:
          return li(), f = i.memoizedState !== null, r !== null && r.memoizedState !== null !== f && (i.flags |= 8192), f && i.mode & 1 ? Hr & 1073741824 && (Zt(i), Tt && i.subtreeFlags & 6 && (i.flags |= 8192)) : Zt(i), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(v(156, i.tag));
    }
    var en = M.ReactCurrentOwner, Kn = !1;
    function Ln(r, i, o, f) {
      i.child = r === null ? To(i, null, o, f) : pl(i, r.child, o, f);
    }
    function Tl(r, i, o, f, p) {
      o = o.render;
      var S = i.ref;
      return Ot(i, p), f = gl(r, i, o, f, S, p), o = Mu(), r !== null && !Kn ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, pn(r, i, p)) : (rn && o && Gc(i), i.flags |= 1, Ln(r, i, f, p), i.child);
    }
    function Nu(r, i, o, f, p) {
      if (r === null) {
        var S = o.type;
        return typeof S == "function" && !ks(S) && S.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (i.tag = 15, i.type = S, Cd(r, i, S, f, p)) : (r = Hs(o.type, null, f, i, i.mode, p), r.ref = i.ref, r.return = i, i.child = r);
      }
      if (S = r.child, !(r.lanes & p)) {
        var A = S.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ll, o(A, f) && r.ref === i.ref) return pn(r, i, p);
      }
      return i.flags |= 1, r = _r(S, f), r.ref = i.ref, r.return = i, i.child = r;
    }
    function Cd(r, i, o, f, p) {
      if (r !== null && ll(r.memoizedProps, f) && r.ref === i.ref) if (Kn = !1, (r.lanes & p) !== 0) r.flags & 131072 && (Kn = !0);
      else return i.lanes = r.lanes, pn(r, i, p);
      return lf(r, i, o, f, p);
    }
    function Md(r, i, o) {
      var f = i.pendingProps, p = f.children, S = r !== null ? r.memoizedState : null;
      if (f.mode === "hidden") if (!(i.mode & 1)) i.memoizedState = { baseLanes: 0, cachePool: null }, It(Fl, Hr), Hr |= o;
      else if (o & 1073741824) i.memoizedState = { baseLanes: 0, cachePool: null }, f = S !== null ? S.baseLanes : o, It(Fl, Hr), Hr |= f;
      else return r = S !== null ? S.baseLanes | o : o, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: r, cachePool: null }, i.updateQueue = null, It(Fl, Hr), Hr |= r, null;
      else S !== null ? (f = S.baseLanes | o, i.memoizedState = null) : f = o, It(Fl, Hr), Hr |= f;
      return Ln(r, i, p, o), i.child;
    }
    function Td(r, i) {
      var o = i.ref;
      (r === null && o !== null || r !== null && r.ref !== o) && (i.flags |= 512, i.flags |= 2097152);
    }
    function lf(r, i, o, f, p) {
      var S = Jn(o) ? Zr : Tn.current;
      return S = Ba(i, S), Ot(i, p), o = gl(r, i, o, f, S, p), f = Mu(), r !== null && !Kn ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, pn(r, i, p)) : (rn && f && Gc(i), i.flags |= 1, Ln(r, i, o, p), i.child);
    }
    function Ho(r, i, o, f, p) {
      if (Jn(o)) {
        var S = !0;
        Pi(i);
      } else S = !1;
      if (Ot(i, p), i.stateNode === null) r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), Sd(i, o, f), Qc(i, o, f, p), f = !0;
      else if (r === null) {
        var A = i.stateNode, B = i.memoizedProps;
        A.props = B;
        var $ = A.context, ve = o.contextType;
        typeof ve == "object" && ve !== null ? ve = gt(ve) : (ve = Jn(o) ? Zr : Tn.current, ve = Ba(i, ve));
        var Ce = o.getDerivedStateFromProps, rt = typeof Ce == "function" || typeof A.getSnapshotBeforeUpdate == "function";
        rt || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (B !== f || $ !== ve) && _d(i, A, f, ve), Ut = !1;
        var $e = i.memoizedState;
        A.state = $e, ol(i, f, A, p), $ = i.memoizedState, B !== f || $e !== $ || qt.current || Ut ? (typeof Ce == "function" && (xo(i, o, Ce, f), $ = i.memoizedState), (B = Ut || xd(i, o, B, f, $e, $, ve)) ? (rt || typeof A.UNSAFE_componentWillMount != "function" && typeof A.componentWillMount != "function" || (typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount()), typeof A.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof A.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = f, i.memoizedState = $), A.props = f, A.state = $, A.context = ve, f = B) : (typeof A.componentDidMount == "function" && (i.flags |= 4194308), f = !1);
      } else {
        A = i.stateNode, Vi(r, i), B = i.memoizedProps, ve = i.type === i.elementType ? B : F(i.type, B), A.props = ve, rt = i.pendingProps, $e = A.context, $ = o.contextType, typeof $ == "object" && $ !== null ? $ = gt($) : ($ = Jn(o) ? Zr : Tn.current, $ = Ba(i, $));
        var Kt = o.getDerivedStateFromProps;
        (Ce = typeof Kt == "function" || typeof A.getSnapshotBeforeUpdate == "function") || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (B !== rt || $e !== $) && _d(i, A, f, $), Ut = !1, $e = i.memoizedState, A.state = $e, ol(i, f, A, p);
        var Qe = i.memoizedState;
        B !== rt || $e !== Qe || qt.current || Ut ? (typeof Kt == "function" && (xo(i, o, Kt, f), Qe = i.memoizedState), (ve = Ut || xd(i, o, ve, f, $e, Qe, $) || !1) ? (Ce || typeof A.UNSAFE_componentWillUpdate != "function" && typeof A.componentWillUpdate != "function" || (typeof A.componentWillUpdate == "function" && A.componentWillUpdate(
          f,
          Qe,
          $
        ), typeof A.UNSAFE_componentWillUpdate == "function" && A.UNSAFE_componentWillUpdate(f, Qe, $)), typeof A.componentDidUpdate == "function" && (i.flags |= 4), typeof A.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof A.componentDidUpdate != "function" || B === r.memoizedProps && $e === r.memoizedState || (i.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || B === r.memoizedProps && $e === r.memoizedState || (i.flags |= 1024), i.memoizedProps = f, i.memoizedState = Qe), A.props = f, A.state = Qe, A.context = $, f = ve) : (typeof A.componentDidUpdate != "function" || B === r.memoizedProps && $e === r.memoizedState || (i.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || B === r.memoizedProps && $e === r.memoizedState || (i.flags |= 1024), f = !1);
      }
      return uf(r, i, o, f, S, p);
    }
    function uf(r, i, o, f, p, S) {
      Td(r, i);
      var A = (i.flags & 128) !== 0;
      if (!f && !A) return p && Ha(i, o, !1), pn(r, i, S);
      f = i.stateNode, en.current = i;
      var B = A && typeof o.getDerivedStateFromError != "function" ? null : f.render();
      return i.flags |= 1, r !== null && A ? (i.child = pl(i, r.child, null, S), i.child = pl(i, null, B, S)) : Ln(r, i, B, S), i.memoizedState = f.state, p && Ha(i, o, !0), i.child;
    }
    function Po(r) {
      var i = r.stateNode;
      i.pendingContext ? rl(r, i.pendingContext, i.pendingContext !== i.context) : i.context && rl(r, i.context, !1), bo(r, i.containerInfo);
    }
    function of(r, i, o, f, p) {
      return hl(), Su(p), i.flags |= 256, Ln(r, i, o, f), i.child;
    }
    var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ws(r) {
      return { baseLanes: r, cachePool: null };
    }
    function bd(r, i, o) {
      var f = i.pendingProps, p = an.current, S = !1, A = (i.flags & 128) !== 0, B;
      if ((B = A) || (B = r !== null && r.memoizedState === null ? !1 : (p & 2) !== 0), B ? (S = !0, i.flags &= -129) : (r === null || r.memoizedState !== null) && (p |= 1), It(an, p & 1), r === null)
        return Co(i), r = i.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (i.mode & 1 ? Bi(r) ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (p = f.children, r = f.fallback, S ? (f = i.mode, S = i.child, p = { mode: "hidden", children: p }, !(f & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = p) : S = Vu(p, f, 0, null), r = Ja(r, f, o, null), S.return = i, r.return = i, S.sibling = r, i.child = S, i.child.memoizedState = ws(o), i.memoizedState = Vo, r) : jo(i, p));
      if (p = r.memoizedState, p !== null) {
        if (B = p.dehydrated, B !== null) {
          if (A)
            return i.flags & 256 ? (i.flags &= -257, Qi(r, i, o, Error(v(422)))) : i.memoizedState !== null ? (i.child = r.child, i.flags |= 128, null) : (S = f.fallback, p = i.mode, f = Vu({ mode: "visible", children: f.children }, p, 0, null), S = Ja(S, p, o, null), S.flags |= 2, f.return = i, S.return = i, f.sibling = S, i.child = f, i.mode & 1 && pl(
              i,
              r.child,
              null,
              o
            ), i.child.memoizedState = ws(o), i.memoizedState = Vo, S);
          if (!(i.mode & 1)) i = Qi(r, i, o, null);
          else if (Bi(B)) i = Qi(r, i, o, Error(v(419)));
          else if (f = (o & r.childLanes) !== 0, Kn || f) {
            if (f = Rn, f !== null) {
              switch (o & -o) {
                case 4:
                  S = 2;
                  break;
                case 16:
                  S = 8;
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
                  S = 32;
                  break;
                case 536870912:
                  S = 268435456;
                  break;
                default:
                  S = 0;
              }
              f = S & (f.suspendedLanes | o) ? 0 : S, f !== 0 && f !== p.retryLane && (p.retryLane = f, si(r, f, -1));
            }
            Mf(), i = Qi(r, i, o, Error(v(421)));
          } else oo(B) ? (i.flags |= 128, i.child = r.child, i = zp.bind(null, r), el(B, i), i = null) : (o = p.treeContext, ut && (Pn = Zn(B), Lr = i, rn = !0, ni = null, dl = !1, o !== null && (ei[ti++] = pa, ei[ti++] = ma, ei[ti++] = xs, pa = o.id, ma = o.overflow, xs = i)), i = jo(i, i.pendingProps.children), i.flags |= 4096);
          return i;
        }
        return S ? (f = zd(r, i, f.children, f.fallback, o), S = i.child, p = r.child.memoizedState, S.memoizedState = p === null ? ws(o) : { baseLanes: p.baseLanes | o, cachePool: null }, S.childLanes = r.childLanes & ~o, i.memoizedState = Vo, f) : (o = wd(r, i, f.children, o), i.memoizedState = null, o);
      }
      return S ? (f = zd(r, i, f.children, f.fallback, o), S = i.child, p = r.child.memoizedState, S.memoizedState = p === null ? ws(o) : { baseLanes: p.baseLanes | o, cachePool: null }, S.childLanes = r.childLanes & ~o, i.memoizedState = Vo, f) : (o = wd(r, i, f.children, o), i.memoizedState = null, o);
    }
    function jo(r, i) {
      return i = Vu({ mode: "visible", children: i }, r.mode, 0, null), i.return = r, r.child = i;
    }
    function wd(r, i, o, f) {
      var p = r.child;
      return r = p.sibling, o = _r(p, { mode: "visible", children: o }), !(i.mode & 1) && (o.lanes = f), o.return = i, o.sibling = null, r !== null && (f = i.deletions, f === null ? (i.deletions = [r], i.flags |= 16) : f.push(r)), i.child = o;
    }
    function zd(r, i, o, f, p) {
      var S = i.mode;
      r = r.child;
      var A = r.sibling, B = { mode: "hidden", children: o };
      return !(S & 1) && i.child !== r ? (o = i.child, o.childLanes = 0, o.pendingProps = B, i.deletions = null) : (o = _r(r, B), o.subtreeFlags = r.subtreeFlags & 14680064), A !== null ? f = _r(A, f) : (f = Ja(f, S, p, null), f.flags |= 2), f.return = i, o.return = i, o.sibling = f, i.child = o, f;
    }
    function Qi(r, i, o, f) {
      return f !== null && Su(f), pl(i, r.child, null, o), r = jo(i, i.pendingProps.children), r.flags |= 2, i.memoizedState = null, r;
    }
    function bl(r, i, o) {
      r.lanes |= i;
      var f = r.alternate;
      f !== null && (f.lanes |= i), Ft(r.return, i, o);
    }
    function ga(r, i, o, f, p) {
      var S = r.memoizedState;
      S === null ? r.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: f, tail: o, tailMode: p } : (S.isBackwards = i, S.rendering = null, S.renderingStartTime = 0, S.last = f, S.tail = o, S.tailMode = p);
    }
    function Io(r, i, o) {
      var f = i.pendingProps, p = f.revealOrder, S = f.tail;
      if (Ln(r, i, f.children, o), f = an.current, f & 2) f = f & 1 | 2, i.flags |= 128;
      else {
        if (r !== null && r.flags & 128) e: for (r = i.child; r !== null; ) {
          if (r.tag === 13) r.memoizedState !== null && bl(r, o, i);
          else if (r.tag === 19) bl(r, o, i);
          else if (r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
          if (r === i) break e;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === i) break e;
            r = r.return;
          }
          r.sibling.return = r.return, r = r.sibling;
        }
        f &= 1;
      }
      if (It(an, f), !(i.mode & 1)) i.memoizedState = null;
      else switch (p) {
        case "forwards":
          for (o = i.child, p = null; o !== null; ) r = o.alternate, r !== null && Rs(r) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = i.child, i.child = null) : (p = o.sibling, o.sibling = null), ga(i, !1, p, o, S);
          break;
        case "backwards":
          for (o = null, p = i.child, i.child = null; p !== null; ) {
            if (r = p.alternate, r !== null && Rs(r) === null) {
              i.child = p;
              break;
            }
            r = p.sibling, p.sibling = o, o = p, p = r;
          }
          ga(i, !0, o, null, S);
          break;
        case "together":
          ga(i, !1, null, null, void 0);
          break;
        default:
          i.memoizedState = null;
      }
      return i.child;
    }
    function pn(r, i, o) {
      if (r !== null && (i.dependencies = r.dependencies), Xi |= i.lanes, !(o & i.childLanes)) return null;
      if (r !== null && i.child !== r.child) throw Error(v(153));
      if (i.child !== null) {
        for (r = i.child, o = _r(r, r.pendingProps), i.child = o, o.return = i; r.sibling !== null; ) r = r.sibling, o = o.sibling = _r(r, r.pendingProps), o.return = i;
        o.sibling = null;
      }
      return i.child;
    }
    function wl(r, i, o) {
      switch (i.tag) {
        case 3:
          Po(i), hl();
          break;
        case 5:
          Cu(i);
          break;
        case 1:
          Jn(i.type) && Pi(i);
          break;
        case 4:
          bo(i, i.stateNode.containerInfo);
          break;
        case 10:
          it(i, i.type._context, i.memoizedProps.value);
          break;
        case 13:
          var f = i.memoizedState;
          if (f !== null)
            return f.dehydrated !== null ? (It(an, an.current & 1), i.flags |= 128, null) : o & i.child.childLanes ? bd(r, i, o) : (It(an, an.current & 1), r = pn(r, i, o), r !== null ? r.sibling : null);
          It(an, an.current & 1);
          break;
        case 19:
          if (f = (o & i.childLanes) !== 0, r.flags & 128) {
            if (f) return Io(
              r,
              i,
              o
            );
            i.flags |= 128;
          }
          var p = i.memoizedState;
          if (p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), It(an, an.current), f) break;
          return null;
        case 22:
        case 23:
          return i.lanes = 0, Md(r, i, o);
      }
      return pn(r, i, o);
    }
    function ot(r, i) {
      switch (Xc(i), i.tag) {
        case 1:
          return Jn(i.type) && ka(), r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 3:
          return Es(), jt(qt), jt(Tn), ji(), r = i.flags, r & 65536 && !(r & 128) ? (i.flags = r & -65537 | 128, i) : null;
        case 5:
          return Br(i), null;
        case 13:
          if (jt(an), r = i.memoizedState, r !== null && r.dehydrated !== null) {
            if (i.alternate === null) throw Error(v(340));
            hl();
          }
          return r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 19:
          return jt(an), null;
        case 4:
          return Es(), null;
        case 10:
          return ht(i.type._context), null;
        case 22:
        case 23:
          return li(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var zs = !1, Ya = !1, xy = typeof WeakSet == "function" ? WeakSet : Set, De = null;
    function zl(r, i) {
      var o = r.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (f) {
        Lt(r, i, f);
      }
      else o.current = null;
    }
    function Ds(r, i, o) {
      try {
        o();
      } catch (f) {
        Lt(r, i, f);
      }
    }
    var Dd = !1;
    function Ad(r, i) {
      for (re(r.containerInfo), De = i; De !== null; ) if (r = De, i = r.child, (r.subtreeFlags & 1028) !== 0 && i !== null) i.return = r, De = i;
      else for (; De !== null; ) {
        r = De;
        try {
          var o = r.alternate;
          if (r.flags & 1024) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (o !== null) {
                var f = o.memoizedProps, p = o.memoizedState, S = r.stateNode, A = S.getSnapshotBeforeUpdate(r.elementType === r.type ? f : F(r.type, f), p);
                S.__reactInternalSnapshotBeforeUpdate = A;
              }
              break;
            case 3:
              Tt && yt(r.stateNode.containerInfo);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(v(163));
          }
        } catch (B) {
          Lt(r, r.return, B);
        }
        if (i = r.sibling, i !== null) {
          i.return = r.return, De = i;
          break;
        }
        De = r.return;
      }
      return o = Dd, Dd = !1, o;
    }
    function As(r, i, o) {
      var f = i.updateQueue;
      if (f = f !== null ? f.lastEffect : null, f !== null) {
        var p = f = f.next;
        do {
          if ((p.tag & r) === r) {
            var S = p.destroy;
            p.destroy = void 0, S !== void 0 && Ds(i, o, S);
          }
          p = p.next;
        } while (p !== f);
      }
    }
    function Ns(r, i) {
      if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
        var o = i = i.next;
        do {
          if ((o.tag & r) === r) {
            var f = o.create;
            o.destroy = f();
          }
          o = o.next;
        } while (o !== i);
      }
    }
    function cf(r) {
      var i = r.ref;
      if (i !== null) {
        var o = r.stateNode;
        switch (r.tag) {
          case 5:
            r = Ze(o);
            break;
          default:
            r = o;
        }
        typeof i == "function" ? i(r) : i.current = r;
      }
    }
    function ff(r, i, o) {
      if (Kr && typeof Kr.onCommitFiberUnmount == "function") try {
        Kr.onCommitFiberUnmount(ha, i);
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
              var p = f, S = p.destroy;
              p = p.tag, S !== void 0 && (p & 2 || p & 4) && Ds(i, o, S), f = f.next;
            } while (f !== r);
          }
          break;
        case 1:
          if (zl(i, o), r = i.stateNode, typeof r.componentWillUnmount == "function") try {
            r.props = i.memoizedProps, r.state = i.memoizedState, r.componentWillUnmount();
          } catch (A) {
            Lt(
              i,
              o,
              A
            );
          }
          break;
        case 5:
          zl(i, o);
          break;
        case 4:
          Tt ? An(r, i, o) : kt && kt && (i = i.stateNode.containerInfo, o = pr(i), _t(i, o));
      }
    }
    function df(r, i, o) {
      for (var f = i; ; ) if (ff(r, f, o), f.child === null || Tt && f.tag === 4) {
        if (f === i) break;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === i) return;
          f = f.return;
        }
        f.sibling.return = f.return, f = f.sibling;
      } else f.child.return = f, f = f.child;
    }
    function bi(r) {
      var i = r.alternate;
      i !== null && (r.alternate = null, bi(i)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (i = r.stateNode, i !== null && Gn(i)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
    }
    function Dl(r) {
      return r.tag === 5 || r.tag === 3 || r.tag === 4;
    }
    function Al(r) {
      e: for (; ; ) {
        for (; r.sibling === null; ) {
          if (r.return === null || Dl(r.return)) return null;
          r = r.return;
        }
        for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
          if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
          r.child.return = r, r = r.child;
        }
        if (!(r.flags & 2)) return r.stateNode;
      }
    }
    function qo(r) {
      if (Tt) {
        e: {
          for (var i = r.return; i !== null; ) {
            if (Dl(i)) break e;
            i = i.return;
          }
          throw Error(v(160));
        }
        var o = i;
        switch (o.tag) {
          case 5:
            i = o.stateNode, o.flags & 32 && (Rt(i), o.flags &= -33), o = Al(r), kr(r, o, i);
            break;
          case 3:
          case 4:
            i = o.stateNode.containerInfo, o = Al(r), Fs(r, o, i);
            break;
          default:
            throw Error(v(161));
        }
      }
    }
    function Fs(r, i, o) {
      var f = r.tag;
      if (f === 5 || f === 6) r = r.stateNode, i ? et(o, r, i) : cs(o, r);
      else if (f !== 4 && (r = r.child, r !== null)) for (Fs(r, i, o), r = r.sibling; r !== null; ) Fs(r, i, o), r = r.sibling;
    }
    function kr(r, i, o) {
      var f = r.tag;
      if (f === 5 || f === 6) r = r.stateNode, i ? Fe(o, r, i) : ua(o, r);
      else if (f !== 4 && (r = r.child, r !== null)) for (kr(r, i, o), r = r.sibling; r !== null; ) kr(r, i, o), r = r.sibling;
    }
    function An(r, i, o) {
      for (var f = i, p = !1, S, A; ; ) {
        if (!p) {
          p = f.return;
          e: for (; ; ) {
            if (p === null) throw Error(v(160));
            switch (S = p.stateNode, p.tag) {
              case 5:
                A = !1;
                break e;
              case 3:
                S = S.containerInfo, A = !0;
                break e;
              case 4:
                S = S.containerInfo, A = !0;
                break e;
            }
            p = p.return;
          }
          p = !0;
        }
        if (f.tag === 5 || f.tag === 6) df(r, f, o), A ? Gt(S, f.stateNode) : Be(S, f.stateNode);
        else if (f.tag === 18) A ? fu(S, f.stateNode) : nl(S, f.stateNode);
        else if (f.tag === 4) {
          if (f.child !== null) {
            S = f.stateNode.containerInfo, A = !0, f.child.return = f, f = f.child;
            continue;
          }
        } else if (ff(r, f, o), f.child !== null) {
          f.child.return = f, f = f.child;
          continue;
        }
        if (f === i) break;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === i) return;
          f = f.return, f.tag === 4 && (p = !1);
        }
        f.sibling.return = f.return, f = f.sibling;
      }
    }
    function hf(r, i) {
      if (Tt) {
        switch (i.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            As(3, i, i.return), Ns(3, i), As(5, i, i.return);
            return;
          case 1:
            return;
          case 5:
            var o = i.stateNode;
            if (o != null) {
              var f = i.memoizedProps;
              r = r !== null ? r.memoizedProps : f;
              var p = i.type, S = i.updateQueue;
              i.updateQueue = null, S !== null && ce(o, S, p, r, f, i);
            }
            return;
          case 6:
            if (i.stateNode === null) throw Error(v(162));
            o = i.memoizedProps, Na(i.stateNode, r !== null ? r.memoizedProps : o, o);
            return;
          case 3:
            ut && r !== null && r.memoizedState.isDehydrated && tl(i.stateNode.containerInfo);
            return;
          case 12:
            return;
          case 13:
            Yo(i);
            return;
          case 19:
            Yo(i);
            return;
          case 17:
            return;
        }
        throw Error(v(163));
      }
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          As(3, i, i.return), Ns(3, i), As(5, i, i.return);
          return;
        case 12:
          return;
        case 13:
          Yo(i);
          return;
        case 19:
          Yo(i);
          return;
        case 3:
          ut && r !== null && r.memoizedState.isDehydrated && tl(i.stateNode.containerInfo);
          break;
        case 22:
        case 23:
          return;
      }
      e: if (kt) {
        switch (i.tag) {
          case 1:
          case 5:
          case 6:
            break e;
          case 3:
          case 4:
            i = i.stateNode, _t(i.containerInfo, i.pendingChildren);
            break e;
        }
        throw Error(v(163));
      }
    }
    function Yo(r) {
      var i = r.updateQueue;
      if (i !== null) {
        r.updateQueue = null;
        var o = r.stateNode;
        o === null && (o = r.stateNode = new xy()), i.forEach(function(f) {
          var p = Bs.bind(null, r, f);
          o.has(f) || (o.add(f), f.then(p, p));
        });
      }
    }
    function Tp(r, i) {
      for (De = i; De !== null; ) {
        i = De;
        var o = i.deletions;
        if (o !== null) for (var f = 0; f < o.length; f++) {
          var p = o[f];
          try {
            var S = r;
            Tt ? An(S, p, i) : df(S, p, i);
            var A = p.alternate;
            A !== null && (A.return = null), p.return = null;
          } catch (Ye) {
            Lt(p, i, Ye);
          }
        }
        if (o = i.child, i.subtreeFlags & 12854 && o !== null) o.return = i, De = o;
        else for (; De !== null; ) {
          i = De;
          try {
            var B = i.flags;
            if (B & 32 && Tt && Rt(i.stateNode), B & 512) {
              var $ = i.alternate;
              if ($ !== null) {
                var ve = $.ref;
                ve !== null && (typeof ve == "function" ? ve(null) : ve.current = null);
              }
            }
            if (B & 8192) switch (i.tag) {
              case 13:
                if (i.memoizedState !== null) {
                  var Ce = i.alternate;
                  (Ce === null || Ce.memoizedState === null) && (Sf = nn());
                }
                break;
              case 22:
                var rt = i.memoizedState !== null, $e = i.alternate, Kt = $e !== null && $e.memoizedState !== null;
                if (o = i, Tt) {
                  e: if (f = o, p = rt, S = null, Tt) for (var Qe = f; ; ) {
                    if (Qe.tag === 5) {
                      if (S === null) {
                        S = Qe;
                        var In = Qe.stateNode;
                        p ? We(In) : Un(Qe.stateNode, Qe.memoizedProps);
                      }
                    } else if (Qe.tag === 6) {
                      if (S === null) {
                        var ar = Qe.stateNode;
                        p ? _e(ar) : Vt(ar, Qe.memoizedProps);
                      }
                    } else if ((Qe.tag !== 22 && Qe.tag !== 23 || Qe.memoizedState === null || Qe === f) && Qe.child !== null) {
                      Qe.child.return = Qe, Qe = Qe.child;
                      continue;
                    }
                    if (Qe === f) break;
                    for (; Qe.sibling === null; ) {
                      if (Qe.return === null || Qe.return === f) break e;
                      S === Qe && (S = null), Qe = Qe.return;
                    }
                    S === Qe && (S = null), Qe.sibling.return = Qe.return, Qe = Qe.sibling;
                  }
                }
                if (rt && !Kt && o.mode & 1) {
                  De = o;
                  for (var Y = o.child; Y !== null; ) {
                    for (o = De = Y; De !== null; ) {
                      f = De;
                      var P = f.child;
                      switch (f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          As(4, f, f.return);
                          break;
                        case 1:
                          zl(f, f.return);
                          var X = f.stateNode;
                          if (typeof X.componentWillUnmount == "function") {
                            var we = f.return;
                            try {
                              X.props = f.memoizedProps, X.state = f.memoizedState, X.componentWillUnmount();
                            } catch (Ye) {
                              Lt(
                                f,
                                we,
                                Ye
                              );
                            }
                          }
                          break;
                        case 5:
                          zl(f, f.return);
                          break;
                        case 22:
                          if (f.memoizedState !== null) {
                            Fd(o);
                            continue;
                          }
                      }
                      P !== null ? (P.return = f, De = P) : Fd(o);
                    }
                    Y = Y.sibling;
                  }
                }
            }
            switch (B & 4102) {
              case 2:
                qo(i), i.flags &= -3;
                break;
              case 6:
                qo(i), i.flags &= -3, hf(i.alternate, i);
                break;
              case 4096:
                i.flags &= -4097;
                break;
              case 4100:
                i.flags &= -4097, hf(i.alternate, i);
                break;
              case 4:
                hf(i.alternate, i);
            }
          } catch (Ye) {
            Lt(i, i.return, Ye);
          }
          if (o = i.sibling, o !== null) {
            o.return = i.return, De = o;
            break;
          }
          De = i.return;
        }
      }
    }
    function Nd(r, i, o) {
      De = r, pf(r);
    }
    function pf(r, i, o) {
      for (var f = (r.mode & 1) !== 0; De !== null; ) {
        var p = De, S = p.child;
        if (p.tag === 22 && f) {
          var A = p.memoizedState !== null || zs;
          if (!A) {
            var B = p.alternate, $ = B !== null && B.memoizedState !== null || Ya;
            B = zs;
            var ve = Ya;
            if (zs = A, (Ya = $) && !ve) for (De = p; De !== null; ) A = De, $ = A.child, A.tag === 22 && A.memoizedState !== null ? Od(p) : $ !== null ? ($.return = A, De = $) : Od(p);
            for (; S !== null; ) De = S, pf(S), S = S.sibling;
            De = p, zs = B, Ya = ve;
          }
          mf(r);
        } else p.subtreeFlags & 8772 && S !== null ? (S.return = p, De = S) : mf(r);
      }
    }
    function mf(r) {
      for (; De !== null; ) {
        var i = De;
        if (i.flags & 8772) {
          var o = i.alternate;
          try {
            if (i.flags & 8772) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ya || Ns(5, i);
                break;
              case 1:
                var f = i.stateNode;
                if (i.flags & 4 && !Ya) if (o === null) f.componentDidMount();
                else {
                  var p = i.elementType === i.type ? o.memoizedProps : F(i.type, o.memoizedProps);
                  f.componentDidUpdate(p, o.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                }
                var S = i.updateQueue;
                S !== null && gu(i, S, f);
                break;
              case 3:
                var A = i.updateQueue;
                if (A !== null) {
                  if (o = null, i.child !== null) switch (i.child.tag) {
                    case 5:
                      o = Ze(i.child.stateNode);
                      break;
                    case 1:
                      o = i.child.stateNode;
                  }
                  gu(i, A, o);
                }
                break;
              case 5:
                var B = i.stateNode;
                o === null && i.flags & 4 && G(B, i.type, i.memoizedProps, i);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (ut && i.memoizedState === null) {
                  var $ = i.alternate;
                  if ($ !== null) {
                    var ve = $.memoizedState;
                    if (ve !== null) {
                      var Ce = ve.dehydrated;
                      Ce !== null && gi(Ce);
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
                throw Error(v(163));
            }
            Ya || i.flags & 512 && cf(i);
          } catch (rt) {
            Lt(i, i.return, rt);
          }
        }
        if (i === r) {
          De = null;
          break;
        }
        if (o = i.sibling, o !== null) {
          o.return = i.return, De = o;
          break;
        }
        De = i.return;
      }
    }
    function Fd(r) {
      for (; De !== null; ) {
        var i = De;
        if (i === r) {
          De = null;
          break;
        }
        var o = i.sibling;
        if (o !== null) {
          o.return = i.return, De = o;
          break;
        }
        De = i.return;
      }
    }
    function Od(r) {
      for (; De !== null; ) {
        var i = De;
        try {
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              var o = i.return;
              try {
                Ns(4, i);
              } catch ($) {
                Lt(i, o, $);
              }
              break;
            case 1:
              var f = i.stateNode;
              if (typeof f.componentDidMount == "function") {
                var p = i.return;
                try {
                  f.componentDidMount();
                } catch ($) {
                  Lt(i, p, $);
                }
              }
              var S = i.return;
              try {
                cf(i);
              } catch ($) {
                Lt(i, S, $);
              }
              break;
            case 5:
              var A = i.return;
              try {
                cf(i);
              } catch ($) {
                Lt(i, A, $);
              }
          }
        } catch ($) {
          Lt(i, i.return, $);
        }
        if (i === r) {
          De = null;
          break;
        }
        var B = i.sibling;
        if (B !== null) {
          B.return = i.return, De = B;
          break;
        }
        De = i.return;
      }
    }
    var Wo = 0, mn = 1, Os = 2, Fu = 3, xa = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Nl = Symbol.for;
      Wo = Nl("selector.component"), mn = Nl("selector.has_pseudo_class"), Os = Nl("selector.role"), Fu = Nl("selector.test_id"), xa = Nl("selector.text");
    }
    function vf(r) {
      var i = $t(r);
      if (i != null) {
        if (typeof i.memoizedProps["data-testname"] != "string") throw Error(v(364));
        return i;
      }
      if (r = dr(r), r === null) throw Error(v(362));
      return r.stateNode.current;
    }
    function yf(r, i) {
      switch (i.$$typeof) {
        case Wo:
          if (r.type === i.value) return !0;
          break;
        case mn:
          e: {
            i = i.value, r = [r, 0];
            for (var o = 0; o < r.length; ) {
              var f = r[o++], p = r[o++], S = i[p];
              if (f.tag !== 5 || !hr(f)) {
                for (; S != null && yf(f, S); ) p++, S = i[p];
                if (p === i.length) {
                  i = !0;
                  break e;
                } else for (f = f.child; f !== null; ) r.push(f, p), f = f.sibling;
              }
            }
            i = !1;
          }
          return i;
        case Os:
          if (r.tag === 5 && la(r.stateNode, i.value)) return !0;
          break;
        case xa:
          if ((r.tag === 5 || r.tag === 6) && (r = Ht(r), r !== null && 0 <= r.indexOf(i.value))) return !0;
          break;
        case Fu:
          if (r.tag === 5 && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === i.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(v(365));
      }
      return !1;
    }
    function Wa(r) {
      switch (r.$$typeof) {
        case Wo:
          return "<" + (oe(r.value) || "Unknown") + ">";
        case mn:
          return ":has(" + (Wa(r) || "") + ")";
        case Os:
          return '[role="' + r.value + '"]';
        case xa:
          return '"' + r.value + '"';
        case Fu:
          return '[data-testname="' + r.value + '"]';
        default:
          throw Error(v(365));
      }
    }
    function Vn(r, i) {
      var o = [];
      r = [r, 0];
      for (var f = 0; f < r.length; ) {
        var p = r[f++], S = r[f++], A = i[S];
        if (p.tag !== 5 || !hr(p)) {
          for (; A != null && yf(p, A); ) S++, A = i[S];
          if (S === i.length) o.push(p);
          else for (p = p.child; p !== null; ) r.push(p, S), p = p.sibling;
        }
      }
      return o;
    }
    function be(r, i) {
      if (!fn) throw Error(v(363));
      r = vf(r), r = Vn(r, i), i = [], r = Array.from(r);
      for (var o = 0; o < r.length; ) {
        var f = r[o++];
        if (f.tag === 5) hr(f) || i.push(f.stateNode);
        else for (f = f.child; f !== null; ) r.push(f), f = f.sibling;
      }
      return i;
    }
    var Gi = Math.ceil, gr = M.ReactCurrentDispatcher, gf = M.ReactCurrentOwner, vn = M.ReactCurrentBatchConfig, pt = 0, Rn = null, Cn = null, zt = 0, Hr = 0, Fl = Nr(0), Nn = 0, Ol = null, Xi = 0, Sa = 0, xf = 0, Ou = null, xr = null, Sf = 0, _f = 1 / 0;
    function Ul() {
      _f = nn() + 500;
    }
    var Uu = !1, Qo = null, Qa = null, Go = !1, Ga = null, Xo = 0, Lu = 0, Ef = null, Bu = -1, Zo = 0;
    function $n() {
      return pt & 6 ? nn() : Bu !== -1 ? Bu : Bu = nn();
    }
    function Xa(r) {
      return r.mode & 1 ? pt & 2 && zt !== 0 ? zt & -zt : Wc.transition !== null ? (Zo === 0 && (r = ca, ca <<= 1, !(ca & 4194240) && (ca = 64), Zo = r), Zo) : (r = bt, r !== 0 ? r : Hn()) : 1;
    }
    function si(r, i, o) {
      if (50 < Lu) throw Lu = 0, Ef = null, Error(v(185));
      var f = Ll(r, i);
      return f === null ? null : (vs(f, i, o), (!(pt & 2) || f !== Rn) && (f === Rn && (!(pt & 2) && (Sa |= i), Nn === 4 && _a(f, zt)), Sr(f, o), i === 1 && pt === 0 && !(r.mode & 1) && (Ul(), Va && $r())), f);
    }
    function Ll(r, i) {
      r.lanes |= i;
      var o = r.alternate;
      for (o !== null && (o.lanes |= i), o = r, r = r.return; r !== null; ) r.childLanes |= i, o = r.alternate, o !== null && (o.childLanes |= i), o = r, r = r.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    function Sr(r, i) {
      var o = r.callbackNode;
      Jr(r, i);
      var f = da(r, r === Rn ? zt : 0);
      if (f === 0) o !== null && pu(o), r.callbackNode = null, r.callbackPriority = 0;
      else if (i = f & -f, r.callbackPriority !== i) {
        if (o != null && pu(o), i === 1) r.tag === 0 ? Yc(Ud.bind(null, r)) : gs(Ud.bind(null, r)), yi ? nr(function() {
          pt === 0 && $r();
        }) : Si(mu, $r), o = null;
        else {
          switch (hu(f)) {
            case 1:
              o = mu;
              break;
            case 4:
              o = qc;
              break;
            case 16:
              o = vu;
              break;
            case 536870912:
              o = vo;
              break;
            default:
              o = vu;
          }
          o = kl(o, Pr.bind(null, r));
        }
        r.callbackPriority = i, r.callbackNode = o;
      }
    }
    function Pr(r, i) {
      if (Bu = -1, Zo = 0, pt & 6) throw Error(v(327));
      var o = r.callbackNode;
      if (Ls() && r.callbackNode !== o) return null;
      var f = da(r, r === Rn ? zt : 0);
      if (f === 0) return null;
      if (f & 30 || f & r.expiredLanes || i) i = Us(r, f);
      else {
        i = f;
        var p = pt;
        pt |= 2;
        var S = Bd();
        (Rn !== r || zt !== i) && (Ul(), Za(r, i));
        do
          try {
            kd();
            break;
          } catch (B) {
            Ld(r, B);
          }
        while (!0);
        Pe(), gr.current = S, pt = p, Cn !== null ? i = 0 : (Rn = null, zt = 0, i = Nn);
      }
      if (i !== 0) {
        if (i === 2 && (p = bn(r), p !== 0 && (f = p, i = wi(r, p))), i === 1) throw o = Ol, Za(r, 0), _a(r, f), Sr(r, nn()), o;
        if (i === 6) _a(r, f);
        else {
          if (p = r.current.alternate, !(f & 30) && !Rf(p) && (i = Us(r, f), i === 2 && (S = bn(r), S !== 0 && (f = S, i = wi(r, S))), i === 1)) throw o = Ol, Za(r, 0), _a(r, f), Sr(r, nn()), o;
          switch (r.finishedWork = p, r.finishedLanes = f, i) {
            case 0:
            case 1:
              throw Error(v(345));
            case 2:
              zi(r, xr);
              break;
            case 3:
              if (_a(r, f), (f & 130023424) === f && (i = Sf + 500 - nn(), 10 < i)) {
                if (da(r, 0) !== 0) break;
                if (p = r.suspendedLanes, (p & f) !== f) {
                  $n(), r.pingedLanes |= r.suspendedLanes & p;
                  break;
                }
                r.timeoutHandle = Ie(zi.bind(null, r, xr), i);
                break;
              }
              zi(r, xr);
              break;
            case 4:
              if (_a(r, f), (f & 4194240) === f) break;
              for (i = r.eventTimes, p = -1; 0 < f; ) {
                var A = 31 - mr(f);
                S = 1 << A, A = i[A], A > p && (p = A), f &= ~S;
              }
              if (f = p, f = nn() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Gi(f / 1960)) - f, 10 < f) {
                r.timeoutHandle = Ie(zi.bind(null, r, xr), f);
                break;
              }
              zi(r, xr);
              break;
            case 5:
              zi(r, xr);
              break;
            default:
              throw Error(v(329));
          }
        }
      }
      return Sr(r, nn()), r.callbackNode === o ? Pr.bind(null, r) : null;
    }
    function wi(r, i) {
      var o = Ou;
      return r.current.memoizedState.isDehydrated && (Za(r, i).flags |= 256), r = Us(r, i), r !== 2 && (i = xr, xr = o, i !== null && ku(i)), r;
    }
    function ku(r) {
      xr === null ? xr = r : xr.push.apply(xr, r);
    }
    function Rf(r) {
      for (var i = r; ; ) {
        if (i.flags & 16384) {
          var o = i.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var f = 0; f < o.length; f++) {
            var p = o[f], S = p.getSnapshot;
            p = p.value;
            try {
              if (!Or(S(), p)) return !1;
            } catch {
              return !1;
            }
          }
        }
        if (o = i.child, i.subtreeFlags & 16384 && o !== null) o.return = i, i = o;
        else {
          if (i === r) break;
          for (; i.sibling === null; ) {
            if (i.return === null || i.return === r) return !0;
            i = i.return;
          }
          i.sibling.return = i.return, i = i.sibling;
        }
      }
      return !0;
    }
    function _a(r, i) {
      for (i &= ~xf, i &= ~Sa, r.suspendedLanes |= i, r.pingedLanes &= ~i, r = r.expirationTimes; 0 < i; ) {
        var o = 31 - mr(i), f = 1 << o;
        r[o] = -1, i &= ~f;
      }
    }
    function Ud(r) {
      if (pt & 6) throw Error(v(327));
      Ls();
      var i = da(r, 0);
      if (!(i & 1)) return Sr(r, nn()), null;
      var o = Us(r, i);
      if (r.tag !== 0 && o === 2) {
        var f = bn(r);
        f !== 0 && (i = f, o = wi(r, f));
      }
      if (o === 1) throw o = Ol, Za(r, 0), _a(r, i), Sr(r, nn()), o;
      if (o === 6) throw Error(v(345));
      return r.finishedWork = r.current.alternate, r.finishedLanes = i, zi(r, xr), Sr(r, nn()), null;
    }
    function Cf(r) {
      Ga !== null && Ga.tag === 0 && !(pt & 6) && Ls();
      var i = pt;
      pt |= 1;
      var o = vn.transition, f = bt;
      try {
        if (vn.transition = null, bt = 1, r) return r();
      } finally {
        bt = f, vn.transition = o, pt = i, !(pt & 6) && $r();
      }
    }
    function li() {
      Hr = Fl.current, jt(Fl);
    }
    function Za(r, i) {
      r.finishedWork = null, r.finishedLanes = 0;
      var o = r.timeoutHandle;
      if (o !== je && (r.timeoutHandle = je, qe(o)), Cn !== null) for (o = Cn.return; o !== null; ) {
        var f = o;
        switch (Xc(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && ka();
            break;
          case 3:
            Es(), jt(qt), jt(Tn), ji();
            break;
          case 5:
            Br(f);
            break;
          case 4:
            Es();
            break;
          case 13:
            jt(an);
            break;
          case 19:
            jt(an);
            break;
          case 10:
            ht(f.type._context);
            break;
          case 22:
          case 23:
            li();
        }
        o = o.return;
      }
      if (Rn = r, Cn = r = _r(r.current, null), zt = Hr = i, Nn = 0, Ol = null, xf = Sa = Xi = 0, xr = Ou = null, Ct !== null) {
        for (i = 0; i < Ct.length; i++) if (o = Ct[i], f = o.interleaved, f !== null) {
          o.interleaved = null;
          var p = f.next, S = o.pending;
          if (S !== null) {
            var A = S.next;
            S.next = p, f.next = A;
          }
          o.pending = f;
        }
        Ct = null;
      }
      return r;
    }
    function Ld(r, i) {
      do {
        var o = Cn;
        try {
          if (Pe(), wn.current = Rl, ml) {
            for (var f = wt.memoizedState; f !== null; ) {
              var p = f.queue;
              p !== null && (p.pending = null), f = f.next;
            }
            ml = !1;
          }
          if (Ia = 0, Jt = ln = wt = null, Ii = !1, vl = 0, gf.current = null, o === null || o.return === null) {
            Nn = 1, Ol = i, Cn = null;
            break;
          }
          e: {
            var S = r, A = o.return, B = o, $ = i;
            if (i = zt, B.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
              var ve = $, Ce = B, rt = Ce.tag;
              if (!(Ce.mode & 1) && (rt === 0 || rt === 11 || rt === 15)) {
                var $e = Ce.alternate;
                $e ? (Ce.updateQueue = $e.updateQueue, Ce.memoizedState = $e.memoizedState, Ce.lanes = $e.lanes) : (Ce.updateQueue = null, Ce.memoizedState = null);
              }
              var Kt = Ts(A);
              if (Kt !== null) {
                Kt.flags &= -257, Bo(Kt, A, B, S, i), Kt.mode & 1 && Du(S, ve, i), i = Kt, $ = ve;
                var Qe = i.updateQueue;
                if (Qe === null) {
                  var In = /* @__PURE__ */ new Set();
                  In.add($), i.updateQueue = In;
                } else Qe.add($);
                break e;
              } else {
                if (!(i & 1)) {
                  Du(S, ve, i), Mf();
                  break e;
                }
                $ = Error(v(426));
              }
            } else if (rn && B.mode & 1) {
              var ar = Ts(A);
              if (ar !== null) {
                !(ar.flags & 65536) && (ar.flags |= 256), Bo(ar, A, B, S, i), Su($);
                break e;
              }
            }
            S = $, Nn !== 4 && (Nn = 2), Ou === null ? Ou = [S] : Ou.push(S), $ = wu($, B), B = A;
            do {
              switch (B.tag) {
                case 3:
                  B.flags |= 65536, i &= -i, B.lanes |= i;
                  var Y = Uo(B, $, i);
                  yu(B, Y);
                  break e;
                case 1:
                  S = $;
                  var P = B.type, X = B.stateNode;
                  if (!(B.flags & 128) && (typeof P.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && (Qa === null || !Qa.has(X)))) {
                    B.flags |= 65536, i &= -i, B.lanes |= i;
                    var we = Lo(B, S, i);
                    yu(B, we);
                    break e;
                  }
              }
              B = B.return;
            } while (B !== null);
          }
          Vr(o);
        } catch (Ye) {
          i = Ye, Cn === o && o !== null && (Cn = o = o.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Bd() {
      var r = gr.current;
      return gr.current = Rl, r === null ? Rl : r;
    }
    function Mf() {
      (Nn === 0 || Nn === 3 || Nn === 2) && (Nn = 4), Rn === null || !(Xi & 268435455) && !(Sa & 268435455) || _a(Rn, zt);
    }
    function Us(r, i) {
      var o = pt;
      pt |= 2;
      var f = Bd();
      Rn === r && zt === i || Za(r, i);
      do
        try {
          bp();
          break;
        } catch (p) {
          Ld(r, p);
        }
      while (!0);
      if (Pe(), pt = o, gr.current = f, Cn !== null) throw Error(v(261));
      return Rn = null, zt = 0, Nn;
    }
    function bp() {
      for (; Cn !== null; ) Tf(Cn);
    }
    function kd() {
      for (; Cn !== null && !Ic(); ) Tf(Cn);
    }
    function Tf(r) {
      var i = Bl(r.alternate, r, Hr);
      r.memoizedProps = r.pendingProps, i === null ? Vr(r) : Cn = i, gf.current = null;
    }
    function Vr(r) {
      var i = r;
      do {
        var o = i.alternate;
        if (r = i.return, i.flags & 32768) {
          if (o = ot(o, i), o !== null) {
            o.flags &= 32767, Cn = o;
            return;
          }
          if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
          else {
            Nn = 6, Cn = null;
            return;
          }
        } else if (o = Mp(o, i, Hr), o !== null) {
          Cn = o;
          return;
        }
        if (i = i.sibling, i !== null) {
          Cn = i;
          return;
        }
        Cn = i = r;
      } while (i !== null);
      Nn === 0 && (Nn = 5);
    }
    function zi(r, i) {
      var o = bt, f = vn.transition;
      try {
        vn.transition = null, bt = 1, wp(r, i, o);
      } finally {
        vn.transition = f, bt = o;
      }
      return null;
    }
    function wp(r, i, o) {
      do
        Ls();
      while (Ga !== null);
      if (pt & 6) throw Error(v(327));
      var f = r.finishedWork, p = r.finishedLanes;
      if (f === null) return null;
      if (r.finishedWork = null, r.finishedLanes = 0, f === r.current) throw Error(v(177));
      r.callbackNode = null, r.callbackPriority = 0;
      var S = f.lanes | f.childLanes;
      if (jc(r, S), r === Rn && (Cn = Rn = null, zt = 0), !(f.subtreeFlags & 2064) && !(f.flags & 2064) || Go || (Go = !0, kl(vu, function() {
        return Ls(), null;
      })), S = (f.flags & 15990) !== 0, f.subtreeFlags & 15990 || S) {
        S = vn.transition, vn.transition = null;
        var A = bt;
        bt = 1;
        var B = pt;
        pt |= 4, gf.current = null, Ad(r, f), Tp(r, f), J(r.containerInfo), r.current = f, Nd(f), mo(), pt = B, bt = A, vn.transition = S;
      } else r.current = f;
      if (Go && (Go = !1, Ga = r, Xo = p), S = r.pendingLanes, S === 0 && (Qa = null), Pa(f.stateNode), Sr(r, nn()), i !== null) for (o = r.onRecoverableError, f = 0; f < i.length; f++) o(i[f]);
      if (Uu) throw Uu = !1, r = Qo, Qo = null, r;
      return Xo & 1 && r.tag !== 0 && Ls(), S = r.pendingLanes, S & 1 ? r === Ef ? Lu++ : (Lu = 0, Ef = r) : Lu = 0, $r(), null;
    }
    function Ls() {
      if (Ga !== null) {
        var r = hu(Xo), i = vn.transition, o = bt;
        try {
          if (vn.transition = null, bt = 16 > r ? 16 : r, Ga === null) var f = !1;
          else {
            if (r = Ga, Ga = null, Xo = 0, pt & 6) throw Error(v(331));
            var p = pt;
            for (pt |= 4, De = r.current; De !== null; ) {
              var S = De, A = S.child;
              if (De.flags & 16) {
                var B = S.deletions;
                if (B !== null) {
                  for (var $ = 0; $ < B.length; $++) {
                    var ve = B[$];
                    for (De = ve; De !== null; ) {
                      var Ce = De;
                      switch (Ce.tag) {
                        case 0:
                        case 11:
                        case 15:
                          As(8, Ce, S);
                      }
                      var rt = Ce.child;
                      if (rt !== null) rt.return = Ce, De = rt;
                      else for (; De !== null; ) {
                        Ce = De;
                        var $e = Ce.sibling, Kt = Ce.return;
                        if (bi(Ce), Ce === ve) {
                          De = null;
                          break;
                        }
                        if ($e !== null) {
                          $e.return = Kt, De = $e;
                          break;
                        }
                        De = Kt;
                      }
                    }
                  }
                  var Qe = S.alternate;
                  if (Qe !== null) {
                    var In = Qe.child;
                    if (In !== null) {
                      Qe.child = null;
                      do {
                        var ar = In.sibling;
                        In.sibling = null, In = ar;
                      } while (In !== null);
                    }
                  }
                  De = S;
                }
              }
              if (S.subtreeFlags & 2064 && A !== null) A.return = S, De = A;
              else e: for (; De !== null; ) {
                if (S = De, S.flags & 2048) switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, S, S.return);
                }
                var Y = S.sibling;
                if (Y !== null) {
                  Y.return = S.return, De = Y;
                  break e;
                }
                De = S.return;
              }
            }
            var P = r.current;
            for (De = P; De !== null; ) {
              A = De;
              var X = A.child;
              if (A.subtreeFlags & 2064 && X !== null) X.return = A, De = X;
              else e: for (A = P; De !== null; ) {
                if (B = De, B.flags & 2048) try {
                  switch (B.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ns(9, B);
                  }
                } catch (Ye) {
                  Lt(B, B.return, Ye);
                }
                if (B === A) {
                  De = null;
                  break e;
                }
                var we = B.sibling;
                if (we !== null) {
                  we.return = B.return, De = we;
                  break e;
                }
                De = B.return;
              }
            }
            if (pt = p, $r(), Kr && typeof Kr.onPostCommitFiberRoot == "function") try {
              Kr.onPostCommitFiberRoot(ha, r);
            } catch {
            }
            f = !0;
          }
          return f;
        } finally {
          bt = o, vn.transition = i;
        }
      }
      return !1;
    }
    function jn(r, i, o) {
      i = wu(o, i), i = Uo(r, i, 1), _i(r, i), i = $n(), r = Ll(r, 1), r !== null && (vs(r, 1, i), Sr(r, i));
    }
    function Lt(r, i, o) {
      if (r.tag === 3) jn(r, r, o);
      else for (; i !== null; ) {
        if (i.tag === 3) {
          jn(i, r, o);
          break;
        } else if (i.tag === 1) {
          var f = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Qa === null || !Qa.has(f))) {
            r = wu(o, r), r = Lo(i, r, 1), _i(i, r), r = $n(), i = Ll(i, 1), i !== null && (vs(i, 1, r), Sr(i, r));
            break;
          }
        }
        i = i.return;
      }
    }
    function Zi(r, i, o) {
      var f = r.pingCache;
      f !== null && f.delete(i), i = $n(), r.pingedLanes |= r.suspendedLanes & o, Rn === r && (zt & o) === o && (Nn === 4 || Nn === 3 && (zt & 130023424) === zt && 500 > nn() - Sf ? Za(r, 0) : xf |= o), Sr(r, i);
    }
    function ui(r, i) {
      i === 0 && (r.mode & 1 ? (i = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : i = 1);
      var o = $n();
      r = Ll(r, i), r !== null && (vs(r, i, o), Sr(r, o));
    }
    function zp(r) {
      var i = r.memoizedState, o = 0;
      i !== null && (o = i.retryLane), ui(r, o);
    }
    function Bs(r, i) {
      var o = 0;
      switch (r.tag) {
        case 13:
          var f = r.stateNode, p = r.memoizedState;
          p !== null && (o = p.retryLane);
          break;
        case 19:
          f = r.stateNode;
          break;
        default:
          throw Error(v(314));
      }
      f !== null && f.delete(i), ui(r, o);
    }
    var Bl;
    Bl = function(r, i, o) {
      if (r !== null) if (r.memoizedProps !== i.pendingProps || qt.current) Kn = !0;
      else {
        if (!(r.lanes & o) && !(i.flags & 128)) return Kn = !1, wl(r, i, o);
        Kn = !!(r.flags & 131072);
      }
      else Kn = !1, rn && i.flags & 1048576 && Ed(i, Eo, i.index);
      switch (i.lanes = 0, i.tag) {
        case 2:
          var f = i.type;
          r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps;
          var p = Ba(i, Tn.current);
          Ot(i, o), p = gl(null, i, f, r, p, o);
          var S = Mu();
          return i.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Jn(f) ? (S = !0, Pi(i)) : S = !1, i.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dn(i), p.updater = So, i.stateNode = p, p._reactInternals = i, Qc(i, f, r, o), i = uf(null, i, f, !0, S, o)) : (i.tag = 0, rn && S && Gc(i), Ln(null, i, p, o), i = i.child), i;
        case 16:
          f = i.elementType;
          e: {
            switch (r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps, p = f._init, f = p(f._payload), i.type = f, p = i.tag = Pu(f), r = F(f, r), p) {
              case 0:
                i = lf(null, i, f, r, o);
                break e;
              case 1:
                i = Ho(
                  null,
                  i,
                  f,
                  r,
                  o
                );
                break e;
              case 11:
                i = Tl(null, i, f, r, o);
                break e;
              case 14:
                i = Nu(null, i, f, F(f.type, r), o);
                break e;
            }
            throw Error(v(306, f, ""));
          }
          return i;
        case 0:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), lf(r, i, f, p, o);
        case 1:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), Ho(r, i, f, p, o);
        case 3:
          e: {
            if (Po(i), r === null) throw Error(v(387));
            f = i.pendingProps, S = i.memoizedState, p = S.element, Vi(r, i), ol(i, f, null, o);
            var A = i.memoizedState;
            if (f = A.element, ut && S.isDehydrated) if (S = {
              element: f,
              isDehydrated: !1,
              cache: A.cache,
              transitions: A.transitions
            }, i.updateQueue.baseState = S, i.memoizedState = S, i.flags & 256) {
              p = Error(v(423)), i = of(r, i, f, o, p);
              break e;
            } else if (f !== p) {
              p = Error(v(424)), i = of(r, i, f, o, p);
              break e;
            } else for (ut && (Pn = Oa(i.stateNode.containerInfo), Lr = i, rn = !0, ni = null, dl = !1), o = To(i, null, f, o), i.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (hl(), f === p) {
                i = pn(r, i, o);
                break e;
              }
              Ln(r, i, f, o);
            }
            i = i.child;
          }
          return i;
        case 5:
          return Cu(i), r === null && Co(i), f = i.type, p = i.pendingProps, S = r !== null ? r.memoizedProps : null, A = p.children, Oe(f, p) ? A = null : S !== null && Oe(f, S) && (i.flags |= 32), Td(r, i), Ln(r, i, A, o), i.child;
        case 6:
          return r === null && Co(i), null;
        case 13:
          return bd(r, i, o);
        case 4:
          return bo(i, i.stateNode.containerInfo), f = i.pendingProps, r === null ? i.child = pl(i, null, f, o) : Ln(r, i, f, o), i.child;
        case 11:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), Tl(r, i, f, p, o);
        case 7:
          return Ln(r, i, i.pendingProps, o), i.child;
        case 8:
          return Ln(r, i, i.pendingProps.children, o), i.child;
        case 12:
          return Ln(r, i, i.pendingProps.children, o), i.child;
        case 10:
          e: {
            if (f = i.type._context, p = i.pendingProps, S = i.memoizedProps, A = p.value, it(i, f, A), S !== null) if (Or(S.value, A)) {
              if (S.children === p.children && !qt.current) {
                i = pn(r, i, o);
                break e;
              }
            } else for (S = i.child, S !== null && (S.return = i); S !== null; ) {
              var B = S.dependencies;
              if (B !== null) {
                A = S.child;
                for (var $ = B.firstContext; $ !== null; ) {
                  if ($.context === f) {
                    if (S.tag === 1) {
                      $ = Ur(-1, o & -o), $.tag = 2;
                      var ve = S.updateQueue;
                      if (ve !== null) {
                        ve = ve.shared;
                        var Ce = ve.pending;
                        Ce === null ? $.next = $ : ($.next = Ce.next, Ce.next = $), ve.pending = $;
                      }
                    }
                    S.lanes |= o, $ = S.alternate, $ !== null && ($.lanes |= o), Ft(S.return, o, i), B.lanes |= o;
                    break;
                  }
                  $ = $.next;
                }
              } else if (S.tag === 10) A = S.type === i.type ? null : S.child;
              else if (S.tag === 18) {
                if (A = S.return, A === null) throw Error(v(341));
                A.lanes |= o, B = A.alternate, B !== null && (B.lanes |= o), Ft(A, o, i), A = S.sibling;
              } else A = S.child;
              if (A !== null) A.return = S;
              else for (A = S; A !== null; ) {
                if (A === i) {
                  A = null;
                  break;
                }
                if (S = A.sibling, S !== null) {
                  S.return = A.return, A = S;
                  break;
                }
                A = A.return;
              }
              S = A;
            }
            Ln(r, i, p.children, o), i = i.child;
          }
          return i;
        case 9:
          return p = i.type, f = i.pendingProps.children, Ot(i, o), p = gt(p), f = f(p), i.flags |= 1, Ln(r, i, f, o), i.child;
        case 14:
          return f = i.type, p = F(f, i.pendingProps), p = F(f.type, p), Nu(r, i, f, p, o);
        case 15:
          return Cd(r, i, i.type, i.pendingProps, o);
        case 17:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, Jn(f) ? (r = !0, Pi(i)) : r = !1, Ot(i, o), Sd(i, f, p), Qc(i, f, p, o), uf(null, i, f, !0, r, o);
        case 19:
          return Io(r, i, o);
        case 22:
          return Md(r, i, o);
      }
      throw Error(v(156, i.tag));
    };
    function kl(r, i) {
      return Si(r, i);
    }
    function Hu(r, i, o, f) {
      this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function er(r, i, o, f) {
      return new Hu(r, i, o, f);
    }
    function ks(r) {
      return r = r.prototype, !(!r || !r.isReactComponent);
    }
    function Pu(r) {
      if (typeof r == "function") return ks(r) ? 1 : 0;
      if (r != null) {
        if (r = r.$$typeof, r === L) return 11;
        if (r === te) return 14;
      }
      return 2;
    }
    function _r(r, i) {
      var o = r.alternate;
      return o === null ? (o = er(r.tag, i, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = i, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 14680064, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, i = r.dependencies, o.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o;
    }
    function Hs(r, i, o, f, p, S) {
      var A = 2;
      if (f = r, typeof r == "function") ks(r) && (A = 1);
      else if (typeof r == "string") A = 5;
      else e: switch (r) {
        case R:
          return Ja(o.children, p, S, i);
        case E:
          A = 8, p |= 8;
          break;
        case b:
          return r = er(12, o, i, p | 2), r.elementType = b, r.lanes = S, r;
        case k:
          return r = er(13, o, i, p), r.elementType = k, r.lanes = S, r;
        case V:
          return r = er(19, o, i, p), r.elementType = V, r.lanes = S, r;
        case ue:
          return Vu(o, p, S, i);
        default:
          if (typeof r == "object" && r !== null) switch (r.$$typeof) {
            case z:
              A = 10;
              break e;
            case D:
              A = 9;
              break e;
            case L:
              A = 11;
              break e;
            case te:
              A = 14;
              break e;
            case ee:
              A = 16, f = null;
              break e;
          }
          throw Error(v(130, r == null ? r : typeof r, ""));
      }
      return i = er(A, o, i, p), i.elementType = r, i.type = f, i.lanes = S, i;
    }
    function Ja(r, i, o, f) {
      return r = er(7, r, f, i), r.lanes = o, r;
    }
    function Vu(r, i, o, f) {
      return r = er(22, r, f, i), r.elementType = ue, r.lanes = o, r.stateNode = {}, r;
    }
    function Jo(r, i, o) {
      return r = er(6, r, null, i), r.lanes = o, r;
    }
    function ju(r, i, o) {
      return i = er(4, r.children !== null ? r.children : [], r.key, i), i.lanes = o, i.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, i;
    }
    function Dp(r, i, o, f, p) {
      this.tag = i, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = je, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = f, this.onRecoverableError = p, ut && (this.mutableSourceEagerHydrationData = null);
    }
    function Hd(r, i, o, f, p, S, A, B, $) {
      return r = new Dp(r, i, o, B, $), i === 1 ? (i = 1, S === !0 && (i |= 8)) : i = 0, S = er(3, null, null, i), r.current = S, S.stateNode = r, S.memoizedState = { element: f, isDehydrated: o, cache: null, transitions: null }, dn(S), r;
    }
    function oi(r) {
      if (!r) return Xr;
      r = r._reactInternals;
      e: {
        if (Xe(r) !== r || r.tag !== 1) throw Error(v(170));
        var i = r;
        do {
          switch (i.tag) {
            case 3:
              i = i.stateNode.context;
              break e;
            case 1:
              if (Jn(i.type)) {
                i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
        throw Error(v(171));
      }
      if (r.tag === 1) {
        var o = r.type;
        if (Jn(o)) return ms(r, o, i);
      }
      return i;
    }
    function Iu(r) {
      var i = r._reactInternals;
      if (i === void 0)
        throw typeof r.render == "function" ? Error(v(188)) : (r = Object.keys(r).join(","), Error(v(268, r)));
      return r = ye(i), r === null ? null : r.stateNode;
    }
    function Hl(r, i) {
      if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
        var o = r.retryLane;
        r.retryLane = o !== 0 && o < i ? o : i;
      }
    }
    function Pl(r, i) {
      Hl(r, i), (r = r.alternate) && Hl(r, i);
    }
    function Vl(r) {
      return r = ye(r), r === null ? null : r.stateNode;
    }
    function bf() {
      return null;
    }
    return a.attemptContinuousHydration = function(r) {
      if (r.tag === 13) {
        var i = $n();
        si(r, 134217728, i), Pl(r, 134217728);
      }
    }, a.attemptHydrationAtCurrentPriority = function(r) {
      if (r.tag === 13) {
        var i = $n(), o = Xa(r);
        si(r, o, i), Pl(r, o);
      }
    }, a.attemptSynchronousHydration = function(r) {
      switch (r.tag) {
        case 3:
          var i = r.stateNode;
          if (i.current.memoizedState.isDehydrated) {
            var o = xi(i.pendingLanes);
            o !== 0 && (sl(i, o | 1), Sr(i, nn()), !(pt & 6) && (Ul(), $r()));
          }
          break;
        case 13:
          var f = $n();
          Cf(function() {
            return si(r, 1, f);
          }), Pl(r, 1);
      }
    }, a.batchedUpdates = function(r, i) {
      var o = pt;
      pt |= 1;
      try {
        return r(i);
      } finally {
        pt = o, pt === 0 && (Ul(), Va && $r());
      }
    }, a.createComponentSelector = function(r) {
      return { $$typeof: Wo, value: r };
    }, a.createContainer = function(r, i, o, f, p, S, A) {
      return Hd(r, i, !1, null, o, f, p, S, A);
    }, a.createHasPseudoClassSelector = function(r) {
      return { $$typeof: mn, value: r };
    }, a.createHydrationContainer = function(r, i, o, f, p, S, A, B, $) {
      return r = Hd(o, f, !0, r, p, S, A, B, $), r.context = oi(null), o = r.current, f = $n(), p = Xa(o), S = Ur(f, p), S.callback = i ?? null, _i(o, S), r.current.lanes = p, vs(r, p, f), Sr(r, f), r;
    }, a.createPortal = function(r, i, o) {
      var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: g, key: f == null ? null : "" + f, children: r, containerInfo: i, implementation: o };
    }, a.createRoleSelector = function(r) {
      return { $$typeof: Os, value: r };
    }, a.createTestNameSelector = function(r) {
      return { $$typeof: Fu, value: r };
    }, a.createTextSelector = function(r) {
      return { $$typeof: xa, value: r };
    }, a.deferredUpdates = function(r) {
      var i = bt, o = vn.transition;
      try {
        return vn.transition = null, bt = 16, r();
      } finally {
        bt = i, vn.transition = o;
      }
    }, a.discreteUpdates = function(r, i, o, f, p) {
      var S = bt, A = vn.transition;
      try {
        return vn.transition = null, bt = 1, r(i, o, f, p);
      } finally {
        bt = S, vn.transition = A, pt === 0 && Ul();
      }
    }, a.findAllNodes = be, a.findBoundingRects = function(r, i) {
      if (!fn) throw Error(v(363));
      i = be(r, i), r = [];
      for (var o = 0; o < i.length; o++) r.push(Xn(i[o]));
      for (i = r.length - 1; 0 < i; i--) {
        o = r[i];
        for (var f = o.x, p = f + o.width, S = o.y, A = S + o.height, B = i - 1; 0 <= B; B--) if (i !== B) {
          var $ = r[B], ve = $.x, Ce = ve + $.width, rt = $.y, $e = rt + $.height;
          if (f >= ve && S >= rt && p <= Ce && A <= $e) {
            r.splice(i, 1);
            break;
          } else if (f !== ve || o.width !== $.width || $e < S || rt > A) {
            if (!(S !== rt || o.height !== $.height || Ce < f || ve > p)) {
              ve > f && ($.width += ve - f, $.x = f), Ce < p && ($.width = p - ve), r.splice(i, 1);
              break;
            }
          } else {
            rt > S && ($.height += rt - S, $.y = S), $e < A && ($.height = A - rt), r.splice(i, 1);
            break;
          }
        }
      }
      return r;
    }, a.findHostInstance = Iu, a.findHostInstanceWithNoPortals = function(r) {
      return r = Re(r), r = r !== null ? Ae(r) : null, r === null ? null : r.stateNode;
    }, a.findHostInstanceWithWarning = function(r) {
      return Iu(r);
    }, a.flushControlled = function(r) {
      var i = pt;
      pt |= 1;
      var o = vn.transition, f = bt;
      try {
        vn.transition = null, bt = 1, r();
      } finally {
        bt = f, vn.transition = o, pt = i, pt === 0 && (Ul(), $r());
      }
    }, a.flushPassiveEffects = Ls, a.flushSync = Cf, a.focusWithin = function(r, i) {
      if (!fn) throw Error(v(363));
      for (r = vf(r), i = Vn(r, i), i = Array.from(i), r = 0; r < i.length; ) {
        var o = i[r++];
        if (!hr(o)) {
          if (o.tag === 5 && zr(o.stateNode)) return !0;
          for (o = o.child; o !== null; ) i.push(o), o = o.sibling;
        }
      }
      return !1;
    }, a.getCurrentUpdatePriority = function() {
      return bt;
    }, a.getFindAllNodesFailureDescription = function(r, i) {
      if (!fn) throw Error(v(363));
      var o = 0, f = [];
      r = [vf(r), 0];
      for (var p = 0; p < r.length; ) {
        var S = r[p++], A = r[p++], B = i[A];
        if ((S.tag !== 5 || !hr(S)) && (yf(S, B) && (f.push(Wa(B)), A++, A > o && (o = A)), A < i.length)) for (S = S.child; S !== null; ) r.push(S, A), S = S.sibling;
      }
      if (o < i.length) {
        for (r = []; o < i.length; o++) r.push(Wa(i[o]));
        return `findAllNodes was able to match part of the selector:
  ` + (f.join(" > ") + `

No matching component was found for:
  `) + r.join(" > ");
      }
      return null;
    }, a.getPublicRootInstance = function(r) {
      if (r = r.current, !r.child) return null;
      switch (r.child.tag) {
        case 5:
          return Ze(r.child.stateNode);
        default:
          return r.child.stateNode;
      }
    }, a.injectIntoDevTools = function(r) {
      if (r = { bundleType: r.bundleType, version: r.version, rendererPackageName: r.rendererPackageName, rendererConfig: r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: M.ReactCurrentDispatcher, findHostInstanceByFiber: Vl, findFiberByHostInstance: r.findFiberByHostInstance || bf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") r = !1;
      else {
        var i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (i.isDisabled || !i.supportsFiber) r = !0;
        else {
          try {
            ha = i.inject(r), Kr = i;
          } catch {
          }
          r = !!i.checkDCE;
        }
      }
      return r;
    }, a.isAlreadyRendering = function() {
      return !1;
    }, a.observeVisibleRects = function(r, i, o, f) {
      if (!fn) throw Error(v(363));
      r = be(r, i);
      var p = Qr(r, o, f).disconnect;
      return { disconnect: function() {
        p();
      } };
    }, a.registerMutableSourceForHydration = function(r, i) {
      var o = i._getVersion;
      o = o(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, o] : r.mutableSourceEagerHydrationData.push(i, o);
    }, a.runWithPriority = function(r, i) {
      var o = bt;
      try {
        return bt = r, i();
      } finally {
        bt = o;
      }
    }, a.shouldError = function() {
      return null;
    }, a.shouldSuspend = function() {
      return !1;
    }, a.updateContainer = function(r, i, o, f) {
      var p = i.current, S = $n(), A = Xa(p);
      return o = oi(o), i.context === null ? i.context = o : i.pendingContext = o, i = Ur(S, A), i.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (i.callback = f), _i(p, i), r = si(p, A, S), r !== null && ul(r, p, A), A;
    }, a;
  }), Jv;
}
var Kv = { exports: {} };
/**
 * @license React
 * react-reconciler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l1;
function HC() {
  return l1 || (l1 = 1, process.env.NODE_ENV !== "production" && (Kv.exports = function(e) {
    var a = {}, u = st, d = P1(), m = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = !1;
    function M(t) {
      v = t;
    }
    function _(t) {
      if (!v) {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          s[l - 1] = arguments[l];
        R("warn", t, s);
      }
    }
    function g(t) {
      if (!v) {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          s[l - 1] = arguments[l];
        R("error", t, s);
      }
    }
    function R(t, n, s) {
      {
        var l = m.ReactDebugCurrentFrame, c = l.getStackAddendum();
        c !== "" && (n += "%s", s = s.concat([c]));
        var h = s.map(function(x) {
          return String(x);
        });
        h.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, h);
      }
    }
    var E = Object.assign;
    function b(t) {
      return t._reactInternals;
    }
    function z(t, n) {
      t._reactInternals = n;
    }
    var D = !1, L = !1, k = !1, V = !1, te = !1, ee = !1, ue = !0, pe = !0, Me = !0, oe = 0, se = 1, Xe = 2, me = 3, Re = 4, ye = 5, de = 6, Ae = 7, Ve = 8, Ze = 9, ge = 10, H = 11, re = 12, J = 13, O = 14, j = 15, ze = 16, Le = 17, Oe = 18, Ne = 19, Ie = 21, qe = 22, je = 23, dt = 24, Tt = 25, kt = Symbol.for("react.element"), ut = Symbol.for("react.portal"), $t = Symbol.for("react.fragment"), cn = Symbol.for("react.strict_mode"), Hn = Symbol.for("react.profiler"), Gn = Symbol.for("react.provider"), yi = Symbol.for("react.context"), nr = Symbol.for("react.forward_ref"), fn = Symbol.for("react.suspense"), dr = Symbol.for("react.suspense_list"), Xn = Symbol.for("react.memo"), Ht = Symbol.for("react.lazy"), hr = Symbol.for("react.scope"), la = Symbol.for("react.debug_trace_mode"), zr = Symbol.for("react.offscreen"), Qr = Symbol.for("react.legacy_hidden"), ua = Symbol.for("react.cache"), cs = Symbol.for("react.tracing_marker"), Na = Symbol.iterator, G = "@@iterator";
    function ce(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = Na && t[Na] || t[G];
      return typeof n == "function" ? n : null;
    }
    function Fe(t, n, s) {
      var l = t.displayName;
      if (l)
        return l;
      var c = n.displayName || n.name || "";
      return c !== "" ? s + "(" + c + ")" : s;
    }
    function et(t) {
      return t.displayName || "Context";
    }
    function Be(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case $t:
          return "Fragment";
        case ut:
          return "Portal";
        case Hn:
          return "Profiler";
        case cn:
          return "StrictMode";
        case fn:
          return "Suspense";
        case dr:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case yi:
            var n = t;
            return et(n) + ".Consumer";
          case Gn:
            var s = t;
            return et(s._context) + ".Provider";
          case nr:
            return Fe(t, t.render, "ForwardRef");
          case Xn:
            var l = t.displayName || null;
            return l !== null ? l : Be(t.type) || "Memo";
          case Ht: {
            var c = t, h = c._payload, x = c._init;
            try {
              return Be(x(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Gt(t, n, s) {
      var l = n.displayName || n.name || "";
      return t.displayName || (l !== "" ? s + "(" + l + ")" : s);
    }
    function Rt(t) {
      return t.displayName || "Context";
    }
    function We(t) {
      var n = t.tag, s = t.type;
      switch (n) {
        case dt:
          return "Cache";
        case Ze:
          var l = s;
          return Rt(l) + ".Consumer";
        case ge:
          var c = s;
          return Rt(c._context) + ".Provider";
        case Oe:
          return "DehydratedFragment";
        case H:
          return Gt(s, s.render, "ForwardRef");
        case Ae:
          return "Fragment";
        case ye:
          return s;
        case Re:
          return "Portal";
        case me:
          return "Root";
        case de:
          return "Text";
        case ze:
          return Be(s);
        case Ve:
          return s === cn ? "StrictMode" : "Mode";
        case qe:
          return "Offscreen";
        case re:
          return "Profiler";
        case Ie:
          return "Scope";
        case J:
          return "Suspense";
        case Ne:
          return "SuspenseList";
        case Tt:
          return "TracingMarker";
        case se:
        case oe:
        case Le:
        case Xe:
        case O:
        case j:
          if (typeof s == "function")
            return s.displayName || s.name || null;
          if (typeof s == "string")
            return s;
          break;
      }
      return null;
    }
    var _e = (
      /*                      */
      0
    ), Un = (
      /*                */
      1
    ), Vt = (
      /*                    */
      2
    ), yt = (
      /*                       */
      4
    ), $s = (
      /*           */
      Vt | yt
    ), pr = (
      /*                */
      16
    ), Fa = (
      /*                 */
      32
    ), ou = (
      /*                     */
      64
    ), _t = (
      /*                   */
      128
    ), Gr = (
      /*            */
      256
    ), Li = (
      /*                          */
      512
    ), Dr = (
      /*                     */
      1024
    ), rr = (
      /*                      */
      2048
    ), ir = (
      /*                    */
      4096
    ), oo = (
      /*           */
      ir | yt
    ), Bi = (
      /*                   */
      8192
    ), el = (
      /*             */
      16384
    ), fs = rr | yt | ou | Li | Dr | el, co = (
      /*               */
      32767
    ), Oa = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), Mn = (
      /* */
      131072
    ), fo = (
      /*                       */
      1048576
    ), cu = (
      /*                    */
      2097152
    ), oa = (
      /*                 */
      4194304
    ), tl = (
      /*                */
      8388608
    ), gi = (
      /*               */
      16777216
    ), nl = (
      /*              */
      33554432
    ), fu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      yt | Dr | 0
    ), ds = Vt | yt | pr | Fa | Li | ir | Bi, hs = yt | ou | Li | Bi, Ua = rr | pr, Ar = oa | tl | cu, ps = m.ReactCurrentOwner;
    function La(t) {
      var n = t, s = t;
      if (t.alternate)
        for (; n.return; )
          n = n.return;
      else {
        var l = n;
        do
          n = l, (n.flags & (Vt | ir)) !== _e && (s = n.return), l = n.return;
        while (l);
      }
      return n.tag === me ? s : null;
    }
    function du(t) {
      return La(t) === t;
    }
    function Vc(t) {
      {
        var n = ps.current;
        if (n !== null && n.tag === se) {
          var s = n, l = s.stateNode;
          l._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(s) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var c = b(t);
      return c ? La(c) === c : !1;
    }
    function ki(t) {
      if (La(t) !== t)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Hi(t) {
      var n = t.alternate;
      if (!n) {
        var s = La(t);
        if (s === null)
          throw new Error("Unable to find node on an unmounted component.");
        return s !== t ? null : t;
      }
      for (var l = t, c = n; ; ) {
        var h = l.return;
        if (h === null)
          break;
        var x = h.alternate;
        if (x === null) {
          var T = h.return;
          if (T !== null) {
            l = c = T;
            continue;
          }
          break;
        }
        if (h.child === x.child) {
          for (var w = h.child; w; ) {
            if (w === l)
              return ki(h), t;
            if (w === c)
              return ki(h), n;
            w = w.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== c.return)
          l = h, c = x;
        else {
          for (var N = !1, U = h.child; U; ) {
            if (U === l) {
              N = !0, l = h, c = x;
              break;
            }
            if (U === c) {
              N = !0, c = h, l = x;
              break;
            }
            U = U.sibling;
          }
          if (!N) {
            for (U = x.child; U; ) {
              if (U === l) {
                N = !0, l = x, c = h;
                break;
              }
              if (U === c) {
                N = !0, c = x, l = h;
                break;
              }
              U = U.sibling;
            }
            if (!N)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== c)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== me)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? t : n;
    }
    function Nr(t) {
      var n = Hi(t);
      return n !== null ? jt(n) : null;
    }
    function jt(t) {
      if (t.tag === ye || t.tag === de)
        return t;
      for (var n = t.child; n !== null; ) {
        var s = jt(n);
        if (s !== null)
          return s;
        n = n.sibling;
      }
      return null;
    }
    function It(t) {
      var n = Hi(t);
      return n !== null ? Xr(n) : null;
    }
    function Xr(t) {
      if (t.tag === ye || t.tag === de)
        return t;
      for (var n = t.child; n !== null; ) {
        if (n.tag !== Re) {
          var s = Xr(n);
          if (s !== null)
            return s;
        }
        n = n.sibling;
      }
      return null;
    }
    var Tn = Array.isArray;
    function qt(t) {
      return Tn(t);
    }
    var Zr = e.getPublicInstance, Ba = e.getRootHostContext, Jn = e.getChildHostContext, ka = e.prepareForCommit, rl = e.resetAfterCommit, ms = e.createInstance, Pi = e.appendInitialChild, Ha = e.finalizeInitialChildren, mr = e.prepareUpdate, il = e.shouldSetTextContent, ho = e.createTextInstance, po = e.scheduleTimeout, ca = e.cancelTimeout, fa = e.noTimeout;
    e.now;
    var xi = e.isPrimaryRenderer, da = e.warnsIfNotActing, Fr = e.supportsMutation, Jr = e.supportsPersistence, bn = e.supportsHydration, al = e.getInstanceFromNode;
    e.beforeActiveInstanceBlur, e.afterActiveInstanceBlur;
    var vs = e.preparePortalMount;
    e.preparePortalMount, e.getInstanceFromScope;
    var jc = e.getCurrentEventPriority, sl = e.detachDeletedInstance, bt = e.supportsMicrotasks, hu = e.scheduleMicrotask, Si = e.supportsTestSelectors, pu = e.findFiberRoot, Ic = e.getBoundingRect, mo = e.getTextContent, nn = e.isHiddenSubtree, mu = e.matchAccessibilityRole, qc = e.setFocusIfFocusable, vu = e.setupIntersectionObserver, vo = e.appendChild, ha = e.appendChildToContainer, Kr = e.commitTextUpdate, Pa = e.commitMount, yo = e.commitUpdate, Or = e.insertBefore, vr = e.insertInContainerBefore, Va = e.removeChild, ys = e.removeChildFromContainer, gs = e.resetTextContent, Yc = e.hideInstance, $r = e.hideTextInstance, Wc = e.unhideInstance, ll = e.unhideTextInstance, C = e.clearContainer, F = e.cloneInstance, W = e.createContainerChildSet, K = e.appendChildToContainerChildSet, xe = e.finalizeContainerChildren, Je = e.replaceContainerChildren;
    e.getOffscreenContainerType;
    var Pe = e.getOffscreenContainerProps, it = e.cloneHiddenInstance, ht = e.cloneHiddenTextInstance, Ft = e.canHydrateInstance, Ot = e.canHydrateTextInstance, gt = e.canHydrateSuspenseInstance, Ct = e.isSuspenseInstancePending, Ut = e.isSuspenseInstanceFallback, dn = e.registerSuspenseInstanceRetry, Vi = e.getNextHydratableSibling, Ur = e.getFirstHydratableChild, _i = e.getFirstHydratableChildWithinContainer, ul = e.getFirstHydratableChildWithinSuspenseInstance, yu = e.hydrateInstance, ol = e.hydrateTextInstance, gu = e.hydrateSuspenseInstance, go = e.getNextHydratableInstanceAfterSuspenseInstance, xo = e.commitHydratedContainer, So = e.commitHydratedSuspenseInstance, xd = e.clearSuspenseBoundary, Sd = e.clearSuspenseBoundaryFromContainer, _d = e.shouldDeleteUnhydratedTailInstances, Qc = e.didNotMatchHydratedContainerTextInstance, cl = e.didNotMatchHydratedTextInstance, fl = e.didNotHydrateInstanceWithinContainer, _o = e.didNotHydrateInstanceWithinSuspenseInstance, Eo = e.didNotHydrateInstance, ei = e.didNotFindHydratableInstanceWithinContainer, ti = e.didNotFindHydratableTextInstanceWithinContainer, xs = e.didNotFindHydratableSuspenseInstanceWithinContainer, pa = e.didNotFindHydratableInstanceWithinSuspenseInstance, ma = e.didNotFindHydratableTextInstanceWithinSuspenseInstance, Ss = e.didNotFindHydratableSuspenseInstanceWithinSuspenseInstance, Ed = e.didNotFindHydratableInstance, Gc = e.didNotFindHydratableTextInstance, Xc = e.didNotFindHydratableSuspenseInstance, Lr = e.errorHydratingContainer, Pn = 0, rn, dl, ni, Zc, Jc, Ro, Co;
    function Kc() {
    }
    Kc.__reactDisabledLog = !0;
    function xu() {
      {
        if (Pn === 0) {
          rn = console.log, dl = console.info, ni = console.warn, Zc = console.error, Jc = console.group, Ro = console.groupCollapsed, Co = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Kc,
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
        Pn++;
      }
    }
    function hl() {
      {
        if (Pn--, Pn === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, t, {
              value: rn
            }),
            info: E({}, t, {
              value: dl
            }),
            warn: E({}, t, {
              value: ni
            }),
            error: E({}, t, {
              value: Zc
            }),
            group: E({}, t, {
              value: Jc
            }),
            groupCollapsed: E({}, t, {
              value: Ro
            }),
            groupEnd: E({}, t, {
              value: Co
            })
          });
        }
        Pn < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Su = m.ReactCurrentDispatcher, _s;
    function Ei(t, n, s) {
      {
        if (_s === void 0)
          try {
            throw Error();
          } catch (c) {
            var l = c.stack.trim().match(/\n( *(at )?)/);
            _s = l && l[1] || "";
          }
        return `
` + _s + t;
      }
    }
    var Mo = !1, _u;
    {
      var pl = typeof WeakMap == "function" ? WeakMap : Map;
      _u = new pl();
    }
    function To(t, n) {
      if (!t || Mo)
        return "";
      {
        var s = _u.get(t);
        if (s !== void 0)
          return s;
      }
      var l;
      Mo = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = Su.current, Su.current = null, xu();
      try {
        if (n) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (he) {
              l = he;
            }
            Reflect.construct(t, [], x);
          } else {
            try {
              x.call();
            } catch (he) {
              l = he;
            }
            t.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            l = he;
          }
          t();
        }
      } catch (he) {
        if (he && l && typeof he.stack == "string") {
          for (var T = he.stack.split(`
`), w = l.stack.split(`
`), N = T.length - 1, U = w.length - 1; N >= 1 && U >= 0 && T[N] !== w[U]; )
            U--;
          for (; N >= 1 && U >= 0; N--, U--)
            if (T[N] !== w[U]) {
              if (N !== 1 || U !== 1)
                do
                  if (N--, U--, U < 0 || T[N] !== w[U]) {
                    var I = `
` + T[N].replace(" at new ", " at ");
                    return t.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", t.displayName)), typeof t == "function" && _u.set(t, I), I;
                  }
                while (N >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        Mo = !1, Su.current = h, hl(), Error.prepareStackTrace = c;
      }
      var Z = t ? t.displayName || t.name : "", ne = Z ? Ei(Z) : "";
      return typeof t == "function" && _u.set(t, ne), ne;
    }
    function Eu(t, n, s) {
      return To(t, !0);
    }
    function yr(t, n, s) {
      return To(t, !1);
    }
    function Ru(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function ja(t, n, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return To(t, Ru(t));
      if (typeof t == "string")
        return Ei(t);
      switch (t) {
        case fn:
          return Ei("Suspense");
        case dr:
          return Ei("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case nr:
            return yr(t.render);
          case Xn:
            return ja(t.type, n, s);
          case Ht: {
            var l = t, c = l._payload, h = l._init;
            try {
              return ja(h(c), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Ri = Object.prototype.hasOwnProperty, bo = {}, Es = m.ReactDebugCurrentFrame;
    function Cu(t) {
      if (t) {
        var n = t._owner, s = ja(t.type, t._source, n ? n.type : null);
        Es.setExtraStackFrame(s);
      } else
        Es.setExtraStackFrame(null);
    }
    function Br(t, n, s, l, c) {
      {
        var h = Function.call.bind(Ri);
        for (var x in t)
          if (h(t, x)) {
            var T = void 0;
            try {
              if (typeof t[x] != "function") {
                var w = Error((l || "React class") + ": " + s + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              T = t[x](n, x, l, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              T = N;
            }
            T && !(T instanceof Error) && (Cu(c), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", s, x, typeof T), Cu(null)), T instanceof Error && !(T.message in bo) && (bo[T.message] = !0, Cu(c), g("Failed %s type: %s", s, T.message), Cu(null));
          }
      }
    }
    var an = [], Rs;
    Rs = [];
    var Ci = -1;
    function ji(t) {
      return {
        current: t
      };
    }
    function wn(t, n) {
      if (Ci < 0) {
        g("Unexpected pop.");
        return;
      }
      n !== Rs[Ci] && g("Unexpected Fiber popped."), t.current = an[Ci], an[Ci] = null, Rs[Ci] = null, Ci--;
    }
    function Xt(t, n, s) {
      Ci++, an[Ci] = t.current, Rs[Ci] = s, t.current = n;
    }
    var Ia;
    Ia = {};
    var wt = {};
    Object.freeze(wt);
    var ln = ji(wt), Jt = ji(!1), ml = wt;
    function Ii(t, n, s) {
      return s && ri(n) ? ml : ln.current;
    }
    function vl(t, n, s) {
      {
        var l = t.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = n, l.__reactInternalMemoizedMaskedChildContext = s;
      }
    }
    function yl(t, n) {
      {
        var s = t.type, l = s.contextTypes;
        if (!l)
          return wt;
        var c = t.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === n)
          return c.__reactInternalMemoizedMaskedChildContext;
        var h = {};
        for (var x in l)
          h[x] = n[x];
        {
          var T = We(t) || "Unknown";
          Br(l, h, "context", T);
        }
        return c && vl(t, n, h), h;
      }
    }
    function zn() {
      return Jt.current;
    }
    function ri(t) {
      {
        var n = t.childContextTypes;
        return n != null;
      }
    }
    function gl(t) {
      wn(Jt, t), wn(ln, t);
    }
    function Mu(t) {
      wn(Jt, t), wn(ln, t);
    }
    function qi(t, n, s) {
      {
        if (ln.current !== wt)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Xt(ln, n, t), Xt(Jt, s, t);
      }
    }
    function Mi(t, n, s) {
      {
        var l = t.stateNode, c = n.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var h = We(t) || "Unknown";
            Ia[h] || (Ia[h] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", h, h));
          }
          return s;
        }
        var x = l.getChildContext();
        for (var T in x)
          if (!(T in c))
            throw new Error((We(t) || "Unknown") + '.getChildContext(): key "' + T + '" is not defined in childContextTypes.');
        {
          var w = We(t) || "Unknown";
          Br(c, x, "child context", w);
        }
        return E({}, s, x);
      }
    }
    function Yi(t) {
      {
        var n = t.stateNode, s = n && n.__reactInternalMemoizedMergedChildContext || wt;
        return ml = ln.current, Xt(ln, s, t), Xt(Jt, Jt.current, t), !0;
      }
    }
    function Tu(t, n, s) {
      {
        var l = t.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (s) {
          var c = Mi(t, n, ml);
          l.__reactInternalMemoizedMergedChildContext = c, wn(Jt, t), wn(ln, t), Xt(ln, c, t), Xt(Jt, s, t);
        } else
          wn(Jt, t), Xt(Jt, s, t);
      }
    }
    function wo(t) {
      {
        if (!du(t) || t.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var n = t;
        do {
          switch (n.tag) {
            case me:
              return n.stateNode.context;
            case se: {
              var s = n.type;
              if (ri(s))
                return n.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          n = n.return;
        } while (n !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Cs = 0, $c = 1, at = (
      /*                         */
      0
    ), Yt = (
      /*                 */
      1
    ), At = (
      /*                    */
      2
    ), hn = (
      /*               */
      8
    ), ii = (
      /*              */
      16
    ), xl = Math.clz32 ? Math.clz32 : Do, Rd = Math.log, zo = Math.LN2;
    function Do(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (Rd(n) / zo | 0) | 0;
    }
    var bu = 31, fe = (
      /*                        */
      0
    ), Dn = (
      /*                          */
      0
    ), xt = (
      /*                        */
      1
    ), Ms = (
      /*    */
      2
    ), va = (
      /*            */
      4
    ), ya = (
      /*            */
      8
    ), Wi = (
      /*                    */
      16
    ), Sl = (
      /*                */
      32
    ), _l = (
      /*                       */
      4194240
    ), El = (
      /*                        */
      64
    ), ef = (
      /*                        */
      128
    ), tf = (
      /*                        */
      256
    ), Ao = (
      /*                        */
      512
    ), No = (
      /*                        */
      1024
    ), Fo = (
      /*                        */
      2048
    ), Oo = (
      /*                        */
      4096
    ), Rl = (
      /*                        */
      8192
    ), nf = (
      /*                        */
      16384
    ), rf = (
      /*                       */
      32768
    ), af = (
      /*                       */
      65536
    ), wu = (
      /*                       */
      131072
    ), zu = (
      /*                       */
      262144
    ), sf = (
      /*                       */
      524288
    ), Uo = (
      /*                       */
      1048576
    ), Lo = (
      /*                       */
      2097152
    ), Du = (
      /*                            */
      130023424
    ), Ts = (
      /*                             */
      4194304
    ), Bo = (
      /*                             */
      8388608
    ), ai = (
      /*                             */
      16777216
    ), ko = (
      /*                             */
      33554432
    ), bs = (
      /*                             */
      67108864
    ), Cl = Ts, qa = (
      /*          */
      134217728
    ), Au = (
      /*                                 */
      268435455
    ), Ml = (
      /*               */
      268435456
    ), Ti = (
      /*                       */
      536870912
    ), Zt = (
      /*                   */
      1073741824
    );
    function Mp(t) {
      {
        if (t & xt)
          return "Sync";
        if (t & Ms)
          return "InputContinuousHydration";
        if (t & va)
          return "InputContinuous";
        if (t & ya)
          return "DefaultHydration";
        if (t & Wi)
          return "Default";
        if (t & Sl)
          return "TransitionHydration";
        if (t & _l)
          return "Transition";
        if (t & Du)
          return "Retry";
        if (t & qa)
          return "SelectiveHydration";
        if (t & Ml)
          return "IdleHydration";
        if (t & Ti)
          return "Idle";
        if (t & Zt)
          return "Offscreen";
      }
    }
    var en = -1, Kn = El, Ln = Ts;
    function Tl(t) {
      switch (Qi(t)) {
        case xt:
          return xt;
        case Ms:
          return Ms;
        case va:
          return va;
        case ya:
          return ya;
        case Wi:
          return Wi;
        case Sl:
          return Sl;
        case El:
        case ef:
        case tf:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case Rl:
        case nf:
        case rf:
        case af:
        case wu:
        case zu:
        case sf:
        case Uo:
        case Lo:
          return t & _l;
        case Ts:
        case Bo:
        case ai:
        case ko:
        case bs:
          return t & Du;
        case qa:
          return qa;
        case Ml:
          return Ml;
        case Ti:
          return Ti;
        case Zt:
          return Zt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), t;
      }
    }
    function Nu(t, n) {
      var s = t.pendingLanes;
      if (s === fe)
        return fe;
      var l = fe, c = t.suspendedLanes, h = t.pingedLanes, x = s & Au;
      if (x !== fe) {
        var T = x & ~c;
        if (T !== fe)
          l = Tl(T);
        else {
          var w = x & h;
          w !== fe && (l = Tl(w));
        }
      } else {
        var N = s & ~c;
        N !== fe ? l = Tl(N) : h !== fe && (l = Tl(h));
      }
      if (l === fe)
        return fe;
      if (n !== fe && n !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (n & c) === fe) {
        var U = Qi(l), I = Qi(n);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          U >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          U === Wi && (I & _l) !== fe
        )
          return n;
      }
      (l & va) !== fe && (l |= s & Wi);
      var Z = t.entangledLanes;
      if (Z !== fe)
        for (var ne = t.entanglements, he = l & Z; he > 0; ) {
          var Se = ga(he), Ke = 1 << Se;
          l |= ne[Se], he &= ~Ke;
        }
      return l;
    }
    function Cd(t, n) {
      for (var s = t.eventTimes, l = en; n > 0; ) {
        var c = ga(n), h = 1 << c, x = s[c];
        x > l && (l = x), n &= ~h;
      }
      return l;
    }
    function Md(t, n) {
      switch (t) {
        case xt:
        case Ms:
        case va:
          return n + 250;
        case ya:
        case Wi:
        case Sl:
        case El:
        case ef:
        case tf:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case Rl:
        case nf:
        case rf:
        case af:
        case wu:
        case zu:
        case sf:
        case Uo:
        case Lo:
          return n + 5e3;
        case Ts:
        case Bo:
        case ai:
        case ko:
        case bs:
          return en;
        case qa:
        case Ml:
        case Ti:
        case Zt:
          return en;
        default:
          return g("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function Td(t, n) {
      for (var s = t.pendingLanes, l = t.suspendedLanes, c = t.pingedLanes, h = t.expirationTimes, x = s; x > 0; ) {
        var T = ga(x), w = 1 << T, N = h[T];
        N === en ? ((w & l) === fe || (w & c) !== fe) && (h[T] = Md(w, n)) : N <= n && (t.expiredLanes |= w), x &= ~w;
      }
    }
    function lf(t) {
      return Tl(t.pendingLanes);
    }
    function Ho(t) {
      var n = t.pendingLanes & ~Zt;
      return n !== fe ? n : n & Zt ? Zt : fe;
    }
    function uf(t) {
      return (t & xt) !== fe;
    }
    function Po(t) {
      return (t & Au) !== fe;
    }
    function of(t) {
      return (t & Du) === t;
    }
    function Vo(t) {
      return (t & _l) === t;
    }
    function ws(t, n) {
      var s = Ms | va | ya | Wi;
      return (n & s) !== fe;
    }
    function bd(t, n) {
      return (n & t.expiredLanes) !== fe;
    }
    function jo(t) {
      return (t & _l) !== 0;
    }
    function wd() {
      var t = Kn;
      return Kn <<= 1, Kn & _l || (Kn = El), t;
    }
    function zd() {
      var t = Ln;
      return Ln <<= 1, Ln & Du || (Ln = Ts), t;
    }
    function Qi(t) {
      return t & -t;
    }
    function bl(t) {
      return Qi(t);
    }
    function ga(t) {
      return 31 - xl(t);
    }
    function Io(t) {
      return ga(t);
    }
    function pn(t, n) {
      return (t & n) !== fe;
    }
    function wl(t, n) {
      return (t & n) === n;
    }
    function ot(t, n) {
      return t | n;
    }
    function zs(t, n) {
      return t & ~n;
    }
    function Ya(t, n) {
      return t & n;
    }
    function xy(t) {
      return t;
    }
    function De(t, n) {
      return t !== Dn && t < n ? t : n;
    }
    function zl(t) {
      for (var n = [], s = 0; s < bu; s++)
        n.push(t);
      return n;
    }
    function Ds(t, n, s) {
      t.pendingLanes |= n, n !== Ti && (t.suspendedLanes = fe, t.pingedLanes = fe);
      var l = t.eventTimes, c = Io(n);
      l[c] = s;
    }
    function Dd(t, n) {
      t.suspendedLanes |= n, t.pingedLanes &= ~n;
      for (var s = t.expirationTimes, l = n; l > 0; ) {
        var c = ga(l), h = 1 << c;
        s[c] = en, l &= ~h;
      }
    }
    function Ad(t, n, s) {
      t.pingedLanes |= t.suspendedLanes & n;
    }
    function As(t, n) {
      var s = t.pendingLanes & ~n;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= n, t.mutableReadLanes &= n, t.entangledLanes &= n;
      for (var l = t.entanglements, c = t.eventTimes, h = t.expirationTimes, x = s; x > 0; ) {
        var T = ga(x), w = 1 << T;
        l[T] = fe, c[T] = en, h[T] = en, x &= ~w;
      }
    }
    function Ns(t, n) {
      for (var s = t.entangledLanes |= n, l = t.entanglements, c = s; c; ) {
        var h = ga(c), x = 1 << h;
        // Is this one of the newly entangled lanes?
        x & n | // Is this lane transitively entangled with the newly entangled lanes?
        l[h] & n && (l[h] |= n), c &= ~x;
      }
    }
    function cf(t, n) {
      var s = Qi(n), l;
      switch (s) {
        case va:
          l = Ms;
          break;
        case Wi:
          l = ya;
          break;
        case El:
        case ef:
        case tf:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case Rl:
        case nf:
        case rf:
        case af:
        case wu:
        case zu:
        case sf:
        case Uo:
        case Lo:
        case Ts:
        case Bo:
        case ai:
        case ko:
        case bs:
          l = Sl;
          break;
        case Ti:
          l = Ml;
          break;
        default:
          l = Dn;
          break;
      }
      return (l & (t.suspendedLanes | n)) !== Dn ? Dn : l;
    }
    function ff(t, n, s) {
      if (gr)
        for (var l = t.pendingUpdatersLaneMap; s > 0; ) {
          var c = Io(s), h = 1 << c, x = l[c];
          x.add(n), s &= ~h;
        }
    }
    function df(t, n) {
      if (gr)
        for (var s = t.pendingUpdatersLaneMap, l = t.memoizedUpdaters; n > 0; ) {
          var c = Io(n), h = 1 << c, x = s[c];
          x.size > 0 && (x.forEach(function(T) {
            var w = T.alternate;
            (w === null || !l.has(w)) && l.add(T);
          }), x.clear()), n &= ~h;
        }
    }
    var bi = xt, Dl = va, Al = Wi, qo = Ti, Fs = Dn;
    function kr() {
      return Fs;
    }
    function An(t) {
      Fs = t;
    }
    function hf(t, n) {
      var s = Fs;
      try {
        return Fs = t, n();
      } finally {
        Fs = s;
      }
    }
    function Yo(t, n) {
      return t !== 0 && t < n ? t : n;
    }
    function Tp(t, n) {
      return t > n ? t : n;
    }
    function Nd(t, n) {
      return t !== 0 && t < n;
    }
    function pf(t) {
      var n = Qi(t);
      return Nd(bi, n) ? Nd(Dl, n) ? Po(n) ? Al : qo : Dl : bi;
    }
    var mf = d.unstable_scheduleCallback, Fd = d.unstable_cancelCallback, Od = d.unstable_shouldYield, Wo = d.unstable_requestPaint, mn = d.unstable_now, Os = d.unstable_ImmediatePriority, Fu = d.unstable_UserBlockingPriority, xa = d.unstable_NormalPriority, Nl = d.unstable_IdlePriority, vf = d.unstable_yieldValue, yf = d.unstable_setDisableYieldValue, Wa = null, Vn = null, be = null, Gi = !1, gr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gf(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (n.isDisabled)
        return !0;
      if (!n.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ue && (t = E({}, t, {
          getLaneLabelMap: Fl,
          injectProfilingHooks: Hr
        })), Wa = n.inject(t), Vn = n;
      } catch (s) {
        g("React instrumentation encountered an error: %s.", s);
      }
      return !!n.checkDCE;
    }
    function vn(t, n) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot(Wa, t, n);
        } catch (s) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", s));
        }
    }
    function pt(t, n) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var s = (t.current.flags & _t) === _t;
          if (pe) {
            var l;
            switch (n) {
              case bi:
                l = Os;
                break;
              case Dl:
                l = Fu;
                break;
              case Al:
                l = xa;
                break;
              case qo:
                l = Nl;
                break;
              default:
                l = xa;
                break;
            }
            Vn.onCommitFiberRoot(Wa, t, l, s);
          }
        } catch (c) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", c));
        }
    }
    function Rn(t) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(Wa, t);
        } catch (n) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", n));
        }
    }
    function Cn(t) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(Wa, t);
        } catch (n) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", n));
        }
    }
    function zt(t) {
      if (typeof vf == "function" && (yf(t), M(t)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(Wa, t);
        } catch (n) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", n));
        }
    }
    function Hr(t) {
      be = t;
    }
    function Fl() {
      {
        for (var t = /* @__PURE__ */ new Map(), n = 1, s = 0; s < bu; s++) {
          var l = Mp(n);
          t.set(n, l), n *= 2;
        }
        return t;
      }
    }
    function Nn(t) {
      be !== null && typeof be.markCommitStarted == "function" && be.markCommitStarted(t);
    }
    function Ol() {
      be !== null && typeof be.markCommitStopped == "function" && be.markCommitStopped();
    }
    function Xi(t) {
      be !== null && typeof be.markComponentRenderStarted == "function" && be.markComponentRenderStarted(t);
    }
    function Sa() {
      be !== null && typeof be.markComponentRenderStopped == "function" && be.markComponentRenderStopped();
    }
    function xf(t) {
      be !== null && typeof be.markComponentPassiveEffectMountStarted == "function" && be.markComponentPassiveEffectMountStarted(t);
    }
    function Ou() {
      be !== null && typeof be.markComponentPassiveEffectMountStopped == "function" && be.markComponentPassiveEffectMountStopped();
    }
    function xr(t) {
      be !== null && typeof be.markComponentPassiveEffectUnmountStarted == "function" && be.markComponentPassiveEffectUnmountStarted(t);
    }
    function Sf() {
      be !== null && typeof be.markComponentPassiveEffectUnmountStopped == "function" && be.markComponentPassiveEffectUnmountStopped();
    }
    function _f(t) {
      be !== null && typeof be.markComponentLayoutEffectMountStarted == "function" && be.markComponentLayoutEffectMountStarted(t);
    }
    function Ul() {
      be !== null && typeof be.markComponentLayoutEffectMountStopped == "function" && be.markComponentLayoutEffectMountStopped();
    }
    function Uu(t) {
      be !== null && typeof be.markComponentLayoutEffectUnmountStarted == "function" && be.markComponentLayoutEffectUnmountStarted(t);
    }
    function Qo() {
      be !== null && typeof be.markComponentLayoutEffectUnmountStopped == "function" && be.markComponentLayoutEffectUnmountStopped();
    }
    function Qa(t, n, s) {
      be !== null && typeof be.markComponentErrored == "function" && be.markComponentErrored(t, n, s);
    }
    function Go(t, n, s) {
      be !== null && typeof be.markComponentSuspended == "function" && be.markComponentSuspended(t, n, s);
    }
    function Ga(t) {
      be !== null && typeof be.markLayoutEffectsStarted == "function" && be.markLayoutEffectsStarted(t);
    }
    function Xo() {
      be !== null && typeof be.markLayoutEffectsStopped == "function" && be.markLayoutEffectsStopped();
    }
    function Lu(t) {
      be !== null && typeof be.markPassiveEffectsStarted == "function" && be.markPassiveEffectsStarted(t);
    }
    function Ef() {
      be !== null && typeof be.markPassiveEffectsStopped == "function" && be.markPassiveEffectsStopped();
    }
    function Bu(t) {
      be !== null && typeof be.markRenderStarted == "function" && be.markRenderStarted(t);
    }
    function Zo() {
      be !== null && typeof be.markRenderYielded == "function" && be.markRenderYielded();
    }
    function $n() {
      be !== null && typeof be.markRenderStopped == "function" && be.markRenderStopped();
    }
    function Xa(t) {
      be !== null && typeof be.markRenderScheduled == "function" && be.markRenderScheduled(t);
    }
    function si(t, n) {
      be !== null && typeof be.markForceUpdateScheduled == "function" && be.markForceUpdateScheduled(t, n);
    }
    function Ll(t, n) {
      be !== null && typeof be.markStateUpdateScheduled == "function" && be.markStateUpdateScheduled(t, n);
    }
    function Sr(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var Pr = typeof Object.is == "function" ? Object.is : Sr, wi = null, ku = !1, Rf = !1;
    function _a(t) {
      wi === null ? wi = [t] : wi.push(t);
    }
    function Ud(t) {
      ku = !0, _a(t);
    }
    function Cf() {
      ku && li();
    }
    function li() {
      if (!Rf && wi !== null) {
        Rf = !0;
        var t = 0, n = kr();
        try {
          var s = !0, l = wi;
          for (An(bi); t < l.length; t++) {
            var c = l[t];
            do
              c = c(s);
            while (c !== null);
          }
          wi = null, ku = !1;
        } catch (h) {
          throw wi !== null && (wi = wi.slice(t + 1)), mf(Os, li), h;
        } finally {
          An(n), Rf = !1;
        }
      }
      return null;
    }
    function Za(t) {
      var n = t.current.memoizedState;
      return n.isDehydrated;
    }
    var Ld = m.ReactCurrentBatchConfig, Bd = null;
    function Mf() {
      return Ld.transition;
    }
    function Us(t, n) {
      if (Pr(t, n))
        return !0;
      if (typeof t != "object" || t === null || typeof n != "object" || n === null)
        return !1;
      var s = Object.keys(t), l = Object.keys(n);
      if (s.length !== l.length)
        return !1;
      for (var c = 0; c < s.length; c++) {
        var h = s[c];
        if (!Ri.call(n, h) || !Pr(t[h], n[h]))
          return !1;
      }
      return !0;
    }
    function bp(t) {
      switch (t._debugOwner && t._debugOwner.type, t._debugSource, t.tag) {
        case ye:
          return Ei(t.type);
        case ze:
          return Ei("Lazy");
        case J:
          return Ei("Suspense");
        case Ne:
          return Ei("SuspenseList");
        case oe:
        case Xe:
        case j:
          return yr(t.type);
        case H:
          return yr(t.type.render);
        case se:
          return Eu(t.type);
        default:
          return "";
      }
    }
    function kd(t) {
      try {
        var n = "", s = t;
        do
          n += bp(s), s = s.return;
        while (s);
        return n;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    var Tf = m.ReactDebugCurrentFrame, Vr = null, zi = !1;
    function wp() {
      {
        if (Vr === null)
          return null;
        var t = Vr._debugOwner;
        if (t !== null && typeof t < "u")
          return We(t);
      }
      return null;
    }
    function Ls() {
      return Vr === null ? "" : kd(Vr);
    }
    function jn() {
      Tf.getCurrentStack = null, Vr = null, zi = !1;
    }
    function Lt(t) {
      Tf.getCurrentStack = Ls, Vr = t, zi = !1;
    }
    function Zi(t) {
      zi = t;
    }
    var ui = {
      recordUnsafeLifecycleWarnings: function(t, n) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(t, n) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var zp = function(t) {
        for (var n = null, s = t; s !== null; )
          s.mode & hn && (n = s), s = s.return;
        return n;
      }, Bs = function(t) {
        var n = [];
        return t.forEach(function(s) {
          n.push(s);
        }), n.sort().join(", ");
      }, Bl = [], kl = [], Hu = [], er = [], ks = [], Pu = [], _r = /* @__PURE__ */ new Set();
      ui.recordUnsafeLifecycleWarnings = function(t, n) {
        _r.has(t.type) || (typeof n.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        n.componentWillMount.__suppressDeprecationWarning !== !0 && Bl.push(t), t.mode & hn && typeof n.UNSAFE_componentWillMount == "function" && kl.push(t), typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Hu.push(t), t.mode & hn && typeof n.UNSAFE_componentWillReceiveProps == "function" && er.push(t), typeof n.componentWillUpdate == "function" && n.componentWillUpdate.__suppressDeprecationWarning !== !0 && ks.push(t), t.mode & hn && typeof n.UNSAFE_componentWillUpdate == "function" && Pu.push(t));
      }, ui.flushPendingUnsafeLifecycleWarnings = function() {
        var t = /* @__PURE__ */ new Set();
        Bl.length > 0 && (Bl.forEach(function(Z) {
          t.add(We(Z) || "Component"), _r.add(Z.type);
        }), Bl = []);
        var n = /* @__PURE__ */ new Set();
        kl.length > 0 && (kl.forEach(function(Z) {
          n.add(We(Z) || "Component"), _r.add(Z.type);
        }), kl = []);
        var s = /* @__PURE__ */ new Set();
        Hu.length > 0 && (Hu.forEach(function(Z) {
          s.add(We(Z) || "Component"), _r.add(Z.type);
        }), Hu = []);
        var l = /* @__PURE__ */ new Set();
        er.length > 0 && (er.forEach(function(Z) {
          l.add(We(Z) || "Component"), _r.add(Z.type);
        }), er = []);
        var c = /* @__PURE__ */ new Set();
        ks.length > 0 && (ks.forEach(function(Z) {
          c.add(We(Z) || "Component"), _r.add(Z.type);
        }), ks = []);
        var h = /* @__PURE__ */ new Set();
        if (Pu.length > 0 && (Pu.forEach(function(Z) {
          h.add(We(Z) || "Component"), _r.add(Z.type);
        }), Pu = []), n.size > 0) {
          var x = Bs(n);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, x);
        }
        if (l.size > 0) {
          var T = Bs(l);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, T);
        }
        if (h.size > 0) {
          var w = Bs(h);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, w);
        }
        if (t.size > 0) {
          var N = Bs(t);
          _(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
        if (s.size > 0) {
          var U = Bs(s);
          _(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
        if (c.size > 0) {
          var I = Bs(c);
          _(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var Hs = /* @__PURE__ */ new Map(), Ja = /* @__PURE__ */ new Set();
      ui.recordLegacyContextWarning = function(t, n) {
        var s = zp(t);
        if (s === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Ja.has(t.type)) {
          var l = Hs.get(s);
          (t.type.contextTypes != null || t.type.childContextTypes != null || n !== null && typeof n.getChildContext == "function") && (l === void 0 && (l = [], Hs.set(s, l)), l.push(t));
        }
      }, ui.flushLegacyContextWarning = function() {
        Hs.forEach(function(t, n) {
          if (t.length !== 0) {
            var s = t[0], l = /* @__PURE__ */ new Set();
            t.forEach(function(h) {
              l.add(We(h) || "Component"), Ja.add(h.type);
            });
            var c = Bs(l);
            try {
              Lt(s), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, c);
            } finally {
              jn();
            }
          }
        });
      }, ui.discardPendingWarnings = function() {
        Bl = [], kl = [], Hu = [], er = [], ks = [], Pu = [], Hs = /* @__PURE__ */ new Map();
      };
    }
    function Vu(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function Jo(t) {
      try {
        return ju(t), !1;
      } catch {
        return !0;
      }
    }
    function ju(t) {
      return "" + t;
    }
    function Dp(t) {
      if (Jo(t))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vu(t)), ju(t);
    }
    function Hd(t, n) {
      if (Jo(t))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", n, Vu(t)), ju(t);
    }
    function oi(t, n) {
      if (t && t.defaultProps) {
        var s = E({}, n), l = t.defaultProps;
        for (var c in l)
          s[c] === void 0 && (s[c] = l[c]);
        return s;
      }
      return n;
    }
    var Iu = ji(null), Hl;
    Hl = {};
    var Pl = null, Vl = null, bf = null, r = !1;
    function i() {
      Pl = null, Vl = null, bf = null, r = !1;
    }
    function o() {
      r = !0;
    }
    function f() {
      r = !1;
    }
    function p(t, n, s) {
      xi ? (Xt(Iu, n._currentValue, t), n._currentValue = s, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== Hl && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = Hl) : (Xt(Iu, n._currentValue2, t), n._currentValue2 = s, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== Hl && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = Hl);
    }
    function S(t, n) {
      var s = Iu.current;
      wn(Iu, n), xi ? t._currentValue = s : t._currentValue2 = s;
    }
    function A(t, n, s) {
      for (var l = t; l !== null; ) {
        var c = l.alternate;
        if (wl(l.childLanes, n) ? c !== null && !wl(c.childLanes, n) && (c.childLanes = ot(c.childLanes, n)) : (l.childLanes = ot(l.childLanes, n), c !== null && (c.childLanes = ot(c.childLanes, n))), l === s)
          break;
        l = l.return;
      }
      l !== s && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function B(t, n, s) {
      $(t, n, s);
    }
    function $(t, n, s) {
      var l = t.child;
      for (l !== null && (l.return = t); l !== null; ) {
        var c = void 0, h = l.dependencies;
        if (h !== null) {
          c = l.child;
          for (var x = h.firstContext; x !== null; ) {
            if (x.context === n) {
              if (l.tag === se) {
                var T = bl(s), w = tt(en, T);
                w.tag = ar;
                var N = l.updateQueue;
                if (N !== null) {
                  var U = N.shared, I = U.pending;
                  I === null ? w.next = w : (w.next = I.next, I.next = w), U.pending = w;
                }
              }
              l.lanes = ot(l.lanes, s);
              var Z = l.alternate;
              Z !== null && (Z.lanes = ot(Z.lanes, s)), A(l.return, s, t), h.lanes = ot(h.lanes, s);
              break;
            }
            x = x.next;
          }
        } else if (l.tag === ge)
          c = l.type === t.type ? null : l.child;
        else if (l.tag === Oe) {
          var ne = l.return;
          if (ne === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          ne.lanes = ot(ne.lanes, s);
          var he = ne.alternate;
          he !== null && (he.lanes = ot(he.lanes, s)), A(ne, s, t), c = l.sibling;
        } else
          c = l.child;
        if (c !== null)
          c.return = l;
        else
          for (c = l; c !== null; ) {
            if (c === t) {
              c = null;
              break;
            }
            var Se = c.sibling;
            if (Se !== null) {
              Se.return = c.return, c = Se;
              break;
            }
            c = c.return;
          }
        l = c;
      }
    }
    function ve(t, n) {
      Pl = t, Vl = null, bf = null;
      var s = t.dependencies;
      if (s !== null) {
        var l = s.firstContext;
        l !== null && (pn(s.lanes, n) && Eh(), s.firstContext = null);
      }
    }
    function Ce(t) {
      r && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var n = xi ? t._currentValue : t._currentValue2;
      if (bf !== t) {
        var s = {
          context: t,
          memoizedValue: n,
          next: null
        };
        if (Vl === null) {
          if (Pl === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Vl = s, Pl.dependencies = {
            lanes: fe,
            firstContext: s
          };
        } else
          Vl = Vl.next = s;
      }
      return n;
    }
    var rt = null;
    function $e(t) {
      rt === null ? rt = [t] : rt.push(t);
    }
    function Kt() {
      if (rt !== null) {
        for (var t = 0; t < rt.length; t++) {
          var n = rt[t], s = n.interleaved;
          if (s !== null) {
            n.interleaved = null;
            var l = s.next, c = n.pending;
            if (c !== null) {
              var h = c.next;
              c.next = l, s.next = h;
            }
            n.pending = s;
          }
        }
        rt = null;
      }
    }
    var Qe = 0, In = 1, ar = 2, Y = 3, P = !1, X, we;
    X = !1, we = null;
    function Ye(t) {
      var n = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: fe
        },
        effects: null
      };
      t.updateQueue = n;
    }
    function ct(t, n) {
      var s = n.updateQueue, l = t.updateQueue;
      if (s === l) {
        var c = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        n.updateQueue = c;
      }
    }
    function tt(t, n) {
      var s = {
        eventTime: t,
        lane: n,
        tag: Qe,
        payload: null,
        callback: null,
        next: null
      };
      return s;
    }
    function mt(t, n, s) {
      var l = t.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (S0(t)) {
          var h = c.interleaved;
          h === null ? (n.next = n, $e(c)) : (n.next = h.next, h.next = n), c.interleaved = n;
        } else {
          var x = c.pending;
          x === null ? n.next = n : (n.next = x.next, x.next = n), c.pending = n;
        }
        we === c && !X && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), X = !0);
      }
    }
    function yn(t, n, s) {
      var l = n.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (jo(s)) {
          var h = c.lanes;
          h = Ya(h, t.pendingLanes);
          var x = ot(h, s);
          c.lanes = x, Ns(t, x);
        }
      }
    }
    function Dt(t, n) {
      var s = t.updateQueue, l = t.alternate;
      if (l !== null) {
        var c = l.updateQueue;
        if (s === c) {
          var h = null, x = null, T = s.firstBaseUpdate;
          if (T !== null) {
            var w = T;
            do {
              var N = {
                eventTime: w.eventTime,
                lane: w.lane,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null
              };
              x === null ? h = x = N : (x.next = N, x = N), w = w.next;
            } while (w !== null);
            x === null ? h = x = n : (x.next = n, x = n);
          } else
            h = x = n;
          s = {
            baseState: c.baseState,
            firstBaseUpdate: h,
            lastBaseUpdate: x,
            shared: c.shared,
            effects: c.effects
          }, t.updateQueue = s;
          return;
        }
      }
      var U = s.lastBaseUpdate;
      U === null ? s.firstBaseUpdate = n : U.next = n, s.lastBaseUpdate = n;
    }
    function Ka(t, n, s, l, c, h) {
      switch (s.tag) {
        case In: {
          var x = s.payload;
          if (typeof x == "function") {
            o();
            var T = x.call(h, l, c);
            {
              if (t.mode & hn) {
                zt(!0);
                try {
                  x.call(h, l, c);
                } finally {
                  zt(!1);
                }
              }
              f();
            }
            return T;
          }
          return x;
        }
        case Y:
          t.flags = t.flags & ~Zn | _t;
        case Qe: {
          var w = s.payload, N;
          if (typeof w == "function") {
            o(), N = w.call(h, l, c);
            {
              if (t.mode & hn) {
                zt(!0);
                try {
                  w.call(h, l, c);
                } finally {
                  zt(!1);
                }
              }
              f();
            }
          } else
            N = w;
          return N == null ? l : E({}, l, N);
        }
        case ar:
          return P = !0, l;
      }
      return l;
    }
    function Ko(t, n, s, l) {
      var c = t.updateQueue;
      P = !1, we = c.shared;
      var h = c.firstBaseUpdate, x = c.lastBaseUpdate, T = c.shared.pending;
      if (T !== null) {
        c.shared.pending = null;
        var w = T, N = w.next;
        w.next = null, x === null ? h = N : x.next = N, x = w;
        var U = t.alternate;
        if (U !== null) {
          var I = U.updateQueue, Z = I.lastBaseUpdate;
          Z !== x && (Z === null ? I.firstBaseUpdate = N : Z.next = N, I.lastBaseUpdate = w);
        }
      }
      if (h !== null) {
        var ne = c.baseState, he = fe, Se = null, Ke = null, ft = null, nt = h;
        do {
          var un = nt.lane, on = nt.eventTime;
          if (wl(l, un)) {
            if (ft !== null) {
              var ie = {
                eventTime: on,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dn,
                tag: nt.tag,
                payload: nt.payload,
                callback: nt.callback,
                next: null
              };
              ft = ft.next = ie;
            }
            ne = Ka(t, c, nt, ne, n, s);
            var q = nt.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            nt.lane !== Dn) {
              t.flags |= ou;
              var Ee = c.effects;
              Ee === null ? c.effects = [nt] : Ee.push(nt);
            }
          } else {
            var Q = {
              eventTime: on,
              lane: un,
              tag: nt.tag,
              payload: nt.payload,
              callback: nt.callback,
              next: null
            };
            ft === null ? (Ke = ft = Q, Se = ne) : ft = ft.next = Q, he = ot(he, un);
          }
          if (nt = nt.next, nt === null) {
            if (T = c.shared.pending, T === null)
              break;
            var Ge = T, He = Ge.next;
            Ge.next = null, nt = He, c.lastBaseUpdate = Ge, c.shared.pending = null;
          }
        } while (!0);
        ft === null && (Se = ne), c.baseState = Se, c.firstBaseUpdate = Ke, c.lastBaseUpdate = ft;
        var Mt = c.shared.interleaved;
        if (Mt !== null) {
          var Wt = Mt;
          do
            he = ot(he, Wt.lane), Wt = Wt.next;
          while (Wt !== Mt);
        } else h === null && (c.shared.lanes = fe);
        Yh(he), t.lanes = he, t.memoizedState = ne;
      }
      we = null;
    }
    function Q1(t, n) {
      if (typeof t != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + t));
      t.call(n);
    }
    function Sy() {
      P = !1;
    }
    function Pd() {
      return P;
    }
    function _y(t, n, s) {
      var l = n.effects;
      if (n.effects = null, l !== null)
        for (var c = 0; c < l.length; c++) {
          var h = l[c], x = h.callback;
          x !== null && (h.callback = null, Q1(x, s));
        }
    }
    var Ap = {}, Ey = new u.Component().refs, Np, Fp, Op, Up, Lp, Ry, Vd, Bp, kp, Hp;
    {
      Np = /* @__PURE__ */ new Set(), Fp = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set(), Up = /* @__PURE__ */ new Set(), Bp = /* @__PURE__ */ new Set(), Lp = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set(), Hp = /* @__PURE__ */ new Set();
      var Cy = /* @__PURE__ */ new Set();
      Vd = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var s = n + "_" + t;
          Cy.has(s) || (Cy.add(s), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, Ry = function(t, n) {
        if (n === void 0) {
          var s = Be(t) || "Component";
          Lp.has(s) || (Lp.add(s), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", s));
        }
      }, Object.defineProperty(Ap, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Ap);
    }
    function Pp(t, n, s, l) {
      var c = t.memoizedState, h = s(l, c);
      {
        if (t.mode & hn) {
          zt(!0);
          try {
            h = s(l, c);
          } finally {
            zt(!1);
          }
        }
        Ry(n, h);
      }
      var x = h == null ? c : E({}, c, h);
      if (t.memoizedState = x, t.lanes === fe) {
        var T = t.updateQueue;
        T.baseState = x;
      }
    }
    var Vp = {
      isMounted: Vc,
      enqueueSetState: function(t, n, s) {
        var l = b(t), c = Ir(), h = Xl(l), x = tt(c, h);
        x.payload = n, s != null && (Vd(s, "setState"), x.callback = s), mt(l, x);
        var T = Qn(l, h, c);
        T !== null && yn(T, l, h), Ll(l, h);
      },
      enqueueReplaceState: function(t, n, s) {
        var l = b(t), c = Ir(), h = Xl(l), x = tt(c, h);
        x.tag = In, x.payload = n, s != null && (Vd(s, "replaceState"), x.callback = s), mt(l, x);
        var T = Qn(l, h, c);
        T !== null && yn(T, l, h), Ll(l, h);
      },
      enqueueForceUpdate: function(t, n) {
        var s = b(t), l = Ir(), c = Xl(s), h = tt(l, c);
        h.tag = ar, n != null && (Vd(n, "forceUpdate"), h.callback = n), mt(s, h);
        var x = Qn(s, c, l);
        x !== null && yn(x, s, c), si(s, c);
      }
    };
    function My(t, n, s, l, c, h, x) {
      var T = t.stateNode;
      if (typeof T.shouldComponentUpdate == "function") {
        var w = T.shouldComponentUpdate(l, h, x);
        {
          if (t.mode & hn) {
            zt(!0);
            try {
              w = T.shouldComponentUpdate(l, h, x);
            } finally {
              zt(!1);
            }
          }
          w === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Be(n) || "Component");
        }
        return w;
      }
      return n.prototype && n.prototype.isPureReactComponent ? !Us(s, l) || !Us(c, h) : !0;
    }
    function G1(t, n, s) {
      var l = t.stateNode;
      {
        var c = Be(n) || "Component", h = l.render;
        h || (n.prototype && typeof n.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), l.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), l.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), l.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), n.contextType && n.contextTypes && !kp.has(n) && (kp.add(n), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof l.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), n.prototype && n.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Be(n) || "A pure component"), typeof l.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof l.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof l.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof l.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var x = l.props !== s;
        l.props !== void 0 && x && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), l.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !Op.has(n) && (Op.add(n), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Be(n))), typeof l.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof l.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof n.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var T = l.state;
        T && (typeof T != "object" || qt(T)) && g("%s.state: must be set to an object or null", c), typeof l.getChildContext == "function" && typeof n.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function Ty(t, n) {
      n.updater = Vp, t.stateNode = n, z(n, t), n._reactInternalInstance = Ap;
    }
    function by(t, n, s) {
      var l = !1, c = wt, h = wt, x = n.contextType;
      if ("contextType" in n) {
        var T = (
          // Allow null for conditional declaration
          x === null || x !== void 0 && x.$$typeof === yi && x._context === void 0
        );
        if (!T && !Hp.has(n)) {
          Hp.add(n);
          var w = "";
          x === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof x != "object" ? w = " However, it is set to a " + typeof x + "." : x.$$typeof === Gn ? w = " Did you accidentally pass the Context.Provider instead?" : x._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(x).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Be(n) || "Component", w);
        }
      }
      if (typeof x == "object" && x !== null)
        h = Ce(x);
      else {
        c = Ii(t, n, !0);
        var N = n.contextTypes;
        l = N != null, h = l ? yl(t, c) : wt;
      }
      var U = new n(s, h);
      if (t.mode & hn) {
        zt(!0);
        try {
          U = new n(s, h);
        } finally {
          zt(!1);
        }
      }
      var I = t.memoizedState = U.state !== null && U.state !== void 0 ? U.state : null;
      Ty(t, U);
      {
        if (typeof n.getDerivedStateFromProps == "function" && I === null) {
          var Z = Be(n) || "Component";
          Fp.has(Z) || (Fp.add(Z), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Z, U.state === null ? "null" : "undefined", Z));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof U.getSnapshotBeforeUpdate == "function") {
          var ne = null, he = null, Se = null;
          if (typeof U.componentWillMount == "function" && U.componentWillMount.__suppressDeprecationWarning !== !0 ? ne = "componentWillMount" : typeof U.UNSAFE_componentWillMount == "function" && (ne = "UNSAFE_componentWillMount"), typeof U.componentWillReceiveProps == "function" && U.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? he = "componentWillReceiveProps" : typeof U.UNSAFE_componentWillReceiveProps == "function" && (he = "UNSAFE_componentWillReceiveProps"), typeof U.componentWillUpdate == "function" && U.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Se = "componentWillUpdate" : typeof U.UNSAFE_componentWillUpdate == "function" && (Se = "UNSAFE_componentWillUpdate"), ne !== null || he !== null || Se !== null) {
            var Ke = Be(n) || "Component", ft = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Up.has(Ke) || (Up.add(Ke), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ke, ft, ne !== null ? `
  ` + ne : "", he !== null ? `
  ` + he : "", Se !== null ? `
  ` + Se : ""));
          }
        }
      }
      return l && vl(t, c, h), U;
    }
    function X1(t, n) {
      var s = n.state;
      typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), s !== n.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", We(t) || "Component"), Vp.enqueueReplaceState(n, n.state, null));
    }
    function wy(t, n, s, l) {
      var c = n.state;
      if (typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, l), n.state !== c) {
        {
          var h = We(t) || "Component";
          Np.has(h) || (Np.add(h), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", h));
        }
        Vp.enqueueReplaceState(n, n.state, null);
      }
    }
    function jp(t, n, s, l) {
      G1(t, n, s);
      var c = t.stateNode;
      c.props = s, c.state = t.memoizedState, c.refs = Ey, Ye(t);
      var h = n.contextType;
      if (typeof h == "object" && h !== null)
        c.context = Ce(h);
      else {
        var x = Ii(t, n, !0);
        c.context = yl(t, x);
      }
      {
        if (c.state === s) {
          var T = Be(n) || "Component";
          Bp.has(T) || (Bp.add(T), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", T));
        }
        t.mode & hn && ui.recordLegacyContextWarning(t, c), ui.recordUnsafeLifecycleWarnings(t, c);
      }
      c.state = t.memoizedState;
      var w = n.getDerivedStateFromProps;
      if (typeof w == "function" && (Pp(t, n, w, s), c.state = t.memoizedState), typeof n.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (X1(t, c), Ko(t, s, c, l), c.state = t.memoizedState), typeof c.componentDidMount == "function") {
        var N = yt;
        N |= oa, (t.mode & ii) !== at && (N |= gi), t.flags |= N;
      }
    }
    function Z1(t, n, s, l) {
      var c = t.stateNode, h = t.memoizedProps;
      c.props = h;
      var x = c.context, T = n.contextType, w = wt;
      if (typeof T == "object" && T !== null)
        w = Ce(T);
      else {
        var N = Ii(t, n, !0);
        w = yl(t, N);
      }
      var U = n.getDerivedStateFromProps, I = typeof U == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !I && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (h !== s || x !== w) && wy(t, c, s, w), Sy();
      var Z = t.memoizedState, ne = c.state = Z;
      if (Ko(t, s, c, l), ne = t.memoizedState, h === s && Z === ne && !zn() && !Pd()) {
        if (typeof c.componentDidMount == "function") {
          var he = yt;
          he |= oa, (t.mode & ii) !== at && (he |= gi), t.flags |= he;
        }
        return !1;
      }
      typeof U == "function" && (Pp(t, n, U, s), ne = t.memoizedState);
      var Se = Pd() || My(t, n, h, s, Z, ne, w);
      if (Se) {
        if (!I && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var Ke = yt;
          Ke |= oa, (t.mode & ii) !== at && (Ke |= gi), t.flags |= Ke;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var ft = yt;
          ft |= oa, (t.mode & ii) !== at && (ft |= gi), t.flags |= ft;
        }
        t.memoizedProps = s, t.memoizedState = ne;
      }
      return c.props = s, c.state = ne, c.context = w, Se;
    }
    function J1(t, n, s, l, c) {
      var h = n.stateNode;
      ct(t, n);
      var x = n.memoizedProps, T = n.type === n.elementType ? x : oi(n.type, x);
      h.props = T;
      var w = n.pendingProps, N = h.context, U = s.contextType, I = wt;
      if (typeof U == "object" && U !== null)
        I = Ce(U);
      else {
        var Z = Ii(n, s, !0);
        I = yl(n, Z);
      }
      var ne = s.getDerivedStateFromProps, he = typeof ne == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      !he && (typeof h.UNSAFE_componentWillReceiveProps == "function" || typeof h.componentWillReceiveProps == "function") && (x !== w || N !== I) && wy(n, h, l, I), Sy();
      var Se = n.memoizedState, Ke = h.state = Se;
      if (Ko(n, l, h, c), Ke = n.memoizedState, x === w && Se === Ke && !zn() && !Pd() && !k)
        return typeof h.componentDidUpdate == "function" && (x !== t.memoizedProps || Se !== t.memoizedState) && (n.flags |= yt), typeof h.getSnapshotBeforeUpdate == "function" && (x !== t.memoizedProps || Se !== t.memoizedState) && (n.flags |= Dr), !1;
      typeof ne == "function" && (Pp(n, s, ne, l), Ke = n.memoizedState);
      var ft = Pd() || My(n, s, T, l, Se, Ke, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      k;
      return ft ? (!he && (typeof h.UNSAFE_componentWillUpdate == "function" || typeof h.componentWillUpdate == "function") && (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, Ke, I), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(l, Ke, I)), typeof h.componentDidUpdate == "function" && (n.flags |= yt), typeof h.getSnapshotBeforeUpdate == "function" && (n.flags |= Dr)) : (typeof h.componentDidUpdate == "function" && (x !== t.memoizedProps || Se !== t.memoizedState) && (n.flags |= yt), typeof h.getSnapshotBeforeUpdate == "function" && (x !== t.memoizedProps || Se !== t.memoizedState) && (n.flags |= Dr), n.memoizedProps = l, n.memoizedState = Ke), h.props = l, h.state = Ke, h.context = I, ft;
    }
    var $o = [], ec = 0, jd = null, Id = 0, Ji = [], Ki = 0, qu = null, Ps = 1, Vs = "";
    function K1(t) {
      return Wu(), (t.flags & fo) !== _e;
    }
    function $1(t) {
      return Wu(), Id;
    }
    function eS() {
      var t = Vs, n = Ps, s = n & ~tS(n);
      return s.toString(32) + t;
    }
    function Yu(t, n) {
      Wu(), $o[ec++] = Id, $o[ec++] = jd, jd = t, Id = n;
    }
    function zy(t, n, s) {
      Wu(), Ji[Ki++] = Ps, Ji[Ki++] = Vs, Ji[Ki++] = qu, qu = t;
      var l = Ps, c = Vs, h = qd(l) - 1, x = l & ~(1 << h), T = s + 1, w = qd(n) + h;
      if (w > 30) {
        var N = h - h % 5, U = (1 << N) - 1, I = (x & U).toString(32), Z = x >> N, ne = h - N, he = qd(n) + ne, Se = T << ne, Ke = Se | Z, ft = I + c;
        Ps = 1 << he | Ke, Vs = ft;
      } else {
        var nt = T << h, un = nt | x, on = c;
        Ps = 1 << w | un, Vs = on;
      }
    }
    function Ip(t) {
      Wu();
      var n = t.return;
      if (n !== null) {
        var s = 1, l = 0;
        Yu(t, s), zy(t, s, l);
      }
    }
    function qd(t) {
      return 32 - xl(t);
    }
    function tS(t) {
      return 1 << qd(t) - 1;
    }
    function qp(t) {
      for (; t === jd; )
        jd = $o[--ec], $o[ec] = null, Id = $o[--ec], $o[ec] = null;
      for (; t === qu; )
        qu = Ji[--Ki], Ji[Ki] = null, Vs = Ji[--Ki], Ji[Ki] = null, Ps = Ji[--Ki], Ji[Ki] = null;
    }
    function nS() {
      return Wu(), qu !== null ? {
        id: Ps,
        overflow: Vs
      } : null;
    }
    function rS(t, n) {
      Wu(), Ji[Ki++] = Ps, Ji[Ki++] = Vs, Ji[Ki++] = qu, Ps = n.id, Vs = n.overflow, qu = t;
    }
    function Wu() {
      Er() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var sr = null, $i = null, Ea = !1, Qu = !1, jl = null;
    function iS() {
      Ea && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aS() {
      Qu = !0;
    }
    function sS(t) {
      if (!bn)
        return !1;
      var n = t.stateNode.containerInfo;
      return $i = _i(n), sr = t, Ea = !0, jl = null, Qu = !1, !0;
    }
    function lS(t, n, s) {
      return bn ? ($i = ul(n), sr = t, Ea = !0, jl = null, Qu = !1, s !== null && rS(t, s), !0) : !1;
    }
    function Dy(t, n) {
      switch (t.tag) {
        case me:
          fl(t.stateNode.containerInfo, n);
          break;
        case ye:
          Eo(t.type, t.memoizedProps, t.stateNode, n);
          break;
        case J:
          var s = t.memoizedState;
          s.dehydrated !== null && _o(s.dehydrated, n);
          break;
      }
    }
    function Ay(t, n) {
      Dy(t, n);
      var s = uR();
      s.stateNode = n, s.return = t;
      var l = t.deletions;
      l === null ? (t.deletions = [s], t.flags |= pr) : l.push(s);
    }
    function Yp(t, n) {
      {
        if (Qu)
          return;
        switch (t.tag) {
          case me: {
            var s = t.stateNode.containerInfo;
            switch (n.tag) {
              case ye:
                var l = n.type, c = n.pendingProps;
                ei(s, l, c);
                break;
              case de:
                var h = n.pendingProps;
                ti(s, h);
                break;
              case J:
                xs(s);
                break;
            }
            break;
          }
          case ye: {
            var x = t.type, T = t.memoizedProps, w = t.stateNode;
            switch (n.tag) {
              case ye:
                var N = n.type, U = n.pendingProps;
                Ed(x, T, w, N, U);
                break;
              case de:
                var I = n.pendingProps;
                Gc(x, T, w, I);
                break;
              case J:
                Xc(x, T, w);
                break;
            }
            break;
          }
          case J: {
            var Z = t.memoizedState, ne = Z.dehydrated;
            if (ne !== null) switch (n.tag) {
              case ye:
                var he = n.type, Se = n.pendingProps;
                pa(ne, he, Se);
                break;
              case de:
                var Ke = n.pendingProps;
                ma(ne, Ke);
                break;
              case J:
                Ss(ne);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function Ny(t, n) {
      n.flags = n.flags & ~ir | Vt, Yp(t, n);
    }
    function Fy(t, n) {
      switch (t.tag) {
        case ye: {
          var s = t.type, l = t.pendingProps, c = Ft(n, s, l);
          return c !== null ? (t.stateNode = c, sr = t, $i = Ur(c), !0) : !1;
        }
        case de: {
          var h = t.pendingProps, x = Ot(n, h);
          return x !== null ? (t.stateNode = x, sr = t, $i = null, !0) : !1;
        }
        case J: {
          {
            var T = gt(n);
            if (T !== null) {
              var w = {
                dehydrated: T,
                treeContext: nS(),
                retryLane: Zt
              };
              t.memoizedState = w;
              var N = oR(T);
              return N.return = t, t.child = N, sr = t, $i = null, !0;
            }
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Wp(t) {
      return (t.mode & Yt) !== at && (t.flags & _t) === _e;
    }
    function Qp(t) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Gp(t) {
      if (Ea) {
        var n = $i;
        if (!n) {
          Wp(t) && (Yp(sr, t), Qp()), Ny(sr, t), Ea = !1, sr = t;
          return;
        }
        var s = n;
        if (!Fy(t, n)) {
          Wp(t) && (Yp(sr, t), Qp()), n = Vi(s);
          var l = sr;
          if (!n || !Fy(t, n)) {
            Ny(sr, t), Ea = !1, sr = t;
            return;
          }
          Ay(l, s);
        }
      }
    }
    function uS(t, n, s) {
      if (!bn)
        throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var l = t.stateNode, c = !Qu, h = yu(l, t.type, t.memoizedProps, n, s, t, c);
      return t.updateQueue = h, h !== null;
    }
    function oS(t) {
      if (!bn)
        throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode, s = t.memoizedProps, l = !Qu, c = ol(n, s, t, l);
      if (c) {
        var h = sr;
        if (h !== null) {
          var x = (h.mode & Yt) !== at;
          switch (h.tag) {
            case me: {
              var T = h.stateNode.containerInfo;
              Qc(
                T,
                n,
                s,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
            case ye: {
              var w = h.type, N = h.memoizedProps, U = h.stateNode;
              cl(
                w,
                N,
                U,
                n,
                s,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
        }
      }
      return c;
    }
    function cS(t) {
      if (!bn)
        throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.memoizedState, s = n !== null ? n.dehydrated : null;
      if (!s)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      gu(s, t);
    }
    function fS(t) {
      if (!bn)
        throw new Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.memoizedState, s = n !== null ? n.dehydrated : null;
      if (!s)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return go(s);
    }
    function Oy(t) {
      for (var n = t.return; n !== null && n.tag !== ye && n.tag !== me && n.tag !== J; )
        n = n.return;
      sr = n;
    }
    function wf(t) {
      if (!bn || t !== sr)
        return !1;
      if (!Ea)
        return Oy(t), Ea = !0, !1;
      if (t.tag !== me && (t.tag !== ye || _d(t.type) && !il(t.type, t.memoizedProps))) {
        var n = $i;
        if (n)
          if (Wp(t))
            Uy(t), Qp();
          else
            for (; n; )
              Ay(t, n), n = Vi(n);
      }
      return Oy(t), t.tag === J ? $i = fS(t) : $i = sr ? Vi(t.stateNode) : null, !0;
    }
    function dS() {
      return Ea && $i !== null;
    }
    function Uy(t) {
      for (var n = $i; n; )
        Dy(t, n), n = Vi(n);
    }
    function tc() {
      bn && (sr = null, $i = null, Ea = !1, Qu = !1);
    }
    function Ly() {
      jl !== null && (E0(jl), jl = null);
    }
    function Er() {
      return Ea;
    }
    function Xp(t) {
      jl === null ? jl = [t] : jl.push(t);
    }
    var Zp, Jp, Kp, $p, em, By = function(t, n) {
    };
    Zp = !1, Jp = !1, Kp = {}, $p = {}, em = {}, By = function(t, n) {
      if (!(t === null || typeof t != "object") && !(!t._store || t._store.validated || t.key != null)) {
        if (typeof t._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        t._store.validated = !0;
        var s = We(n) || "Component";
        $p[s] || ($p[s] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function zf(t, n, s) {
      var l = s.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((t.mode & hn || ee) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(s._owner && s._self && s._owner.stateNode !== s._self)) {
          var c = We(t) || "Component";
          Kp[c] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), Kp[c] = !0);
        }
        if (s._owner) {
          var h = s._owner, x;
          if (h) {
            var T = h;
            if (T.tag !== se)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            x = T.stateNode;
          }
          if (!x)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var w = x;
          Hd(l, "ref");
          var N = "" + l;
          if (n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === N)
            return n.ref;
          var U = function(I) {
            var Z = w.refs;
            Z === Ey && (Z = w.refs = {}), I === null ? delete Z[N] : Z[N] = I;
          };
          return U._stringRef = N, U;
        } else {
          if (typeof l != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!s._owner)
            throw new Error("Element ref was specified as a string (" + l + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return l;
    }
    function Yd(t, n) {
      var s = Object.prototype.toString.call(n);
      throw new Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wd(t) {
      {
        var n = We(t) || "Component";
        if (em[n])
          return;
        em[n] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function ky(t) {
      var n = t._payload, s = t._init;
      return s(n);
    }
    function Hy(t) {
      function n(Q, ie) {
        if (t) {
          var q = Q.deletions;
          q === null ? (Q.deletions = [ie], Q.flags |= pr) : q.push(ie);
        }
      }
      function s(Q, ie) {
        if (!t)
          return null;
        for (var q = ie; q !== null; )
          n(Q, q), q = q.sibling;
        return null;
      }
      function l(Q, ie) {
        for (var q = /* @__PURE__ */ new Map(), Ee = ie; Ee !== null; )
          Ee.key !== null ? q.set(Ee.key, Ee) : q.set(Ee.index, Ee), Ee = Ee.sibling;
        return q;
      }
      function c(Q, ie) {
        var q = eo(Q, ie);
        return q.index = 0, q.sibling = null, q;
      }
      function h(Q, ie, q) {
        if (Q.index = q, !t)
          return Q.flags |= fo, ie;
        var Ee = Q.alternate;
        if (Ee !== null) {
          var Ge = Ee.index;
          return Ge < ie ? (Q.flags |= Vt, ie) : Ge;
        } else
          return Q.flags |= Vt, ie;
      }
      function x(Q) {
        return t && Q.alternate === null && (Q.flags |= Vt), Q;
      }
      function T(Q, ie, q, Ee) {
        if (ie === null || ie.tag !== de) {
          var Ge = Rv(q, Q.mode, Ee);
          return Ge.return = Q, Ge;
        } else {
          var He = c(ie, q);
          return He.return = Q, He;
        }
      }
      function w(Q, ie, q, Ee) {
        var Ge = q.type;
        if (Ge === $t)
          return U(Q, ie, q.props.children, Ee, q.key);
        if (ie !== null && (ie.elementType === Ge || // Keep this check inline so it only runs on the false path:
        B0(ie, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ge == "object" && Ge !== null && Ge.$$typeof === Ht && ky(Ge) === ie.type)) {
          var He = c(ie, q.props);
          return He.ref = zf(Q, ie, q), He.return = Q, He._debugSource = q._source, He._debugOwner = q._owner, He;
        }
        var Mt = Ev(q, Q.mode, Ee);
        return Mt.ref = zf(Q, ie, q), Mt.return = Q, Mt;
      }
      function N(Q, ie, q, Ee) {
        if (ie === null || ie.tag !== Re || ie.stateNode.containerInfo !== q.containerInfo || ie.stateNode.implementation !== q.implementation) {
          var Ge = Cv(q, Q.mode, Ee);
          return Ge.return = Q, Ge;
        } else {
          var He = c(ie, q.children || []);
          return He.return = Q, He;
        }
      }
      function U(Q, ie, q, Ee, Ge) {
        if (ie === null || ie.tag !== Ae) {
          var He = Jl(q, Q.mode, Ee, Ge);
          return He.return = Q, He;
        } else {
          var Mt = c(ie, q);
          return Mt.return = Q, Mt;
        }
      }
      function I(Q, ie, q) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var Ee = Rv("" + ie, Q.mode, q);
          return Ee.return = Q, Ee;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case kt: {
              var Ge = Ev(ie, Q.mode, q);
              return Ge.ref = zf(Q, null, ie), Ge.return = Q, Ge;
            }
            case ut: {
              var He = Cv(ie, Q.mode, q);
              return He.return = Q, He;
            }
            case Ht: {
              var Mt = ie._payload, Wt = ie._init;
              return I(Q, Wt(Mt), q);
            }
          }
          if (qt(ie) || ce(ie)) {
            var sn = Jl(ie, Q.mode, q, null);
            return sn.return = Q, sn;
          }
          Yd(Q, ie);
        }
        return typeof ie == "function" && Wd(Q), null;
      }
      function Z(Q, ie, q, Ee) {
        var Ge = ie !== null ? ie.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return Ge !== null ? null : T(Q, ie, "" + q, Ee);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case kt:
              return q.key === Ge ? w(Q, ie, q, Ee) : null;
            case ut:
              return q.key === Ge ? N(Q, ie, q, Ee) : null;
            case Ht: {
              var He = q._payload, Mt = q._init;
              return Z(Q, ie, Mt(He), Ee);
            }
          }
          if (qt(q) || ce(q))
            return Ge !== null ? null : U(Q, ie, q, Ee, null);
          Yd(Q, q);
        }
        return typeof q == "function" && Wd(Q), null;
      }
      function ne(Q, ie, q, Ee, Ge) {
        if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number") {
          var He = Q.get(q) || null;
          return T(ie, He, "" + Ee, Ge);
        }
        if (typeof Ee == "object" && Ee !== null) {
          switch (Ee.$$typeof) {
            case kt: {
              var Mt = Q.get(Ee.key === null ? q : Ee.key) || null;
              return w(ie, Mt, Ee, Ge);
            }
            case ut: {
              var Wt = Q.get(Ee.key === null ? q : Ee.key) || null;
              return N(ie, Wt, Ee, Ge);
            }
            case Ht: {
              var sn = Ee._payload, Qt = Ee._init;
              return ne(Q, ie, q, Qt(sn), Ge);
            }
          }
          if (qt(Ee) || ce(Ee)) {
            var _n = Q.get(q) || null;
            return U(ie, _n, Ee, Ge, null);
          }
          Yd(ie, Ee);
        }
        return typeof Ee == "function" && Wd(ie), null;
      }
      function he(Q, ie, q) {
        {
          if (typeof Q != "object" || Q === null)
            return ie;
          switch (Q.$$typeof) {
            case kt:
            case ut:
              By(Q, q);
              var Ee = Q.key;
              if (typeof Ee != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(Ee);
                break;
              }
              if (!ie.has(Ee)) {
                ie.add(Ee);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Ee);
              break;
            case Ht: {
              var Ge = Q._payload, He = Q._init;
              he(He(Ge), ie, q);
              break;
            }
          }
        }
        return ie;
      }
      function Se(Q, ie, q, Ee) {
        for (var Ge = null, He = 0; He < q.length; He++) {
          var Mt = q[He];
          Ge = he(Mt, Ge, Q);
        }
        for (var Wt = null, sn = null, Qt = ie, _n = 0, Bt = 0, St = null; Qt !== null && Bt < q.length; Bt++) {
          Qt.index > Bt ? (St = Qt, Qt = null) : St = Qt.sibling;
          var On = Z(Q, Qt, q[Bt], Ee);
          if (On === null) {
            Qt === null && (Qt = St);
            break;
          }
          t && Qt && On.alternate === null && n(Q, Qt), _n = h(On, _n, Bt), sn === null ? Wt = On : sn.sibling = On, sn = On, Qt = St;
        }
        if (Bt === q.length) {
          if (s(Q, Qt), Er()) {
            var En = Bt;
            Yu(Q, En);
          }
          return Wt;
        }
        if (Qt === null) {
          for (; Bt < q.length; Bt++) {
            var aa = I(Q, q[Bt], Ee);
            aa !== null && (_n = h(aa, _n, Bt), sn === null ? Wt = aa : sn.sibling = aa, sn = aa);
          }
          if (Er()) {
            var fr = Bt;
            Yu(Q, fr);
          }
          return Wt;
        }
        for (var Ai = l(Q, Qt); Bt < q.length; Bt++) {
          var Ni = ne(Ai, Q, Bt, q[Bt], Ee);
          Ni !== null && (t && Ni.alternate !== null && Ai.delete(Ni.key === null ? Bt : Ni.key), _n = h(Ni, _n, Bt), sn === null ? Wt = Ni : sn.sibling = Ni, sn = Ni);
        }
        if (t && Ai.forEach(function(yc) {
          return n(Q, yc);
        }), Er()) {
          var as = Bt;
          Yu(Q, as);
        }
        return Wt;
      }
      function Ke(Q, ie, q, Ee) {
        var Ge = ce(q);
        if (typeof Ge != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Jp || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jp = !0), q.entries === Ge && (Zp || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zp = !0);
          var He = Ge.call(q);
          if (He)
            for (var Mt = null, Wt = He.next(); !Wt.done; Wt = He.next()) {
              var sn = Wt.value;
              Mt = he(sn, Mt, Q);
            }
        }
        var Qt = Ge.call(q);
        if (Qt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var _n = null, Bt = null, St = ie, On = 0, En = 0, aa = null, fr = Qt.next(); St !== null && !fr.done; En++, fr = Qt.next()) {
          St.index > En ? (aa = St, St = null) : aa = St.sibling;
          var Ai = Z(Q, St, fr.value, Ee);
          if (Ai === null) {
            St === null && (St = aa);
            break;
          }
          t && St && Ai.alternate === null && n(Q, St), On = h(Ai, On, En), Bt === null ? _n = Ai : Bt.sibling = Ai, Bt = Ai, St = aa;
        }
        if (fr.done) {
          if (s(Q, St), Er()) {
            var Ni = En;
            Yu(Q, Ni);
          }
          return _n;
        }
        if (St === null) {
          for (; !fr.done; En++, fr = Qt.next()) {
            var as = I(Q, fr.value, Ee);
            as !== null && (On = h(as, On, En), Bt === null ? _n = as : Bt.sibling = as, Bt = as);
          }
          if (Er()) {
            var yc = En;
            Yu(Q, yc);
          }
          return _n;
        }
        for (var gc = l(Q, St); !fr.done; En++, fr = Qt.next()) {
          var Fi = ne(gc, Q, En, fr.value, Ee);
          Fi !== null && (t && Fi.alternate !== null && gc.delete(Fi.key === null ? En : Fi.key), On = h(Fi, On, En), Bt === null ? _n = Fi : Bt.sibling = Fi, Bt = Fi);
        }
        if (t && gc.forEach(function(zv) {
          return n(Q, zv);
        }), Er()) {
          var to = En;
          Yu(Q, to);
        }
        return _n;
      }
      function ft(Q, ie, q, Ee) {
        if (ie !== null && ie.tag === de) {
          s(Q, ie.sibling);
          var Ge = c(ie, q);
          return Ge.return = Q, Ge;
        }
        s(Q, ie);
        var He = Rv(q, Q.mode, Ee);
        return He.return = Q, He;
      }
      function nt(Q, ie, q, Ee) {
        for (var Ge = q.key, He = ie; He !== null; ) {
          if (He.key === Ge) {
            var Mt = q.type;
            if (Mt === $t) {
              if (He.tag === Ae) {
                s(Q, He.sibling);
                var Wt = c(He, q.props.children);
                return Wt.return = Q, Wt._debugSource = q._source, Wt._debugOwner = q._owner, Wt;
              }
            } else if (He.elementType === Mt || // Keep this check inline so it only runs on the false path:
            B0(He, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Mt == "object" && Mt !== null && Mt.$$typeof === Ht && ky(Mt) === He.type) {
              s(Q, He.sibling);
              var sn = c(He, q.props);
              return sn.ref = zf(Q, He, q), sn.return = Q, sn._debugSource = q._source, sn._debugOwner = q._owner, sn;
            }
            s(Q, He);
            break;
          } else
            n(Q, He);
          He = He.sibling;
        }
        if (q.type === $t) {
          var Qt = Jl(q.props.children, Q.mode, Ee, q.key);
          return Qt.return = Q, Qt;
        } else {
          var _n = Ev(q, Q.mode, Ee);
          return _n.ref = zf(Q, ie, q), _n.return = Q, _n;
        }
      }
      function un(Q, ie, q, Ee) {
        for (var Ge = q.key, He = ie; He !== null; ) {
          if (He.key === Ge)
            if (He.tag === Re && He.stateNode.containerInfo === q.containerInfo && He.stateNode.implementation === q.implementation) {
              s(Q, He.sibling);
              var Mt = c(He, q.children || []);
              return Mt.return = Q, Mt;
            } else {
              s(Q, He);
              break;
            }
          else
            n(Q, He);
          He = He.sibling;
        }
        var Wt = Cv(q, Q.mode, Ee);
        return Wt.return = Q, Wt;
      }
      function on(Q, ie, q, Ee) {
        var Ge = typeof q == "object" && q !== null && q.type === $t && q.key === null;
        if (Ge && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case kt:
              return x(nt(Q, ie, q, Ee));
            case ut:
              return x(un(Q, ie, q, Ee));
            case Ht: {
              var He = q._payload, Mt = q._init;
              return on(Q, ie, Mt(He), Ee);
            }
          }
          if (qt(q))
            return Se(Q, ie, q, Ee);
          if (ce(q))
            return Ke(Q, ie, q, Ee);
          Yd(Q, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? x(ft(Q, ie, "" + q, Ee)) : (typeof q == "function" && Wd(Q), s(Q, ie));
      }
      return on;
    }
    var nc = Hy(!0), Py = Hy(!1);
    function hS(t, n) {
      if (t !== null && n.child !== t.child)
        throw new Error("Resuming work not yet implemented.");
      if (n.child !== null) {
        var s = n.child, l = eo(s, s.pendingProps);
        for (n.child = l, l.return = n; s.sibling !== null; )
          s = s.sibling, l = l.sibling = eo(s, s.pendingProps), l.return = n;
        l.sibling = null;
      }
    }
    function pS(t, n) {
      for (var s = t.child; s !== null; )
        rR(s, n), s = s.sibling;
    }
    var Df = {}, Il = ji(Df), Af = ji(Df), Qd = ji(Df);
    function Gd(t) {
      if (t === Df)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return t;
    }
    function tm() {
      var t = Gd(Qd.current);
      return t;
    }
    function nm(t, n) {
      Xt(Qd, n, t), Xt(Af, t, t), Xt(Il, Df, t);
      var s = Ba(n);
      wn(Il, t), Xt(Il, s, t);
    }
    function rc(t) {
      wn(Il, t), wn(Af, t), wn(Qd, t);
    }
    function Nf() {
      var t = Gd(Il.current);
      return t;
    }
    function Vy(t) {
      var n = Gd(Qd.current), s = Gd(Il.current), l = Jn(s, t.type, n);
      s !== l && (Xt(Af, t, t), Xt(Il, l, t));
    }
    function rm(t) {
      Af.current === t && (wn(Il, t), wn(Af, t));
    }
    var mS = 0, jy = 1, Iy = 1, Ff = 2, Ra = ji(mS);
    function im(t, n) {
      return (t & n) !== 0;
    }
    function ic(t) {
      return t & jy;
    }
    function am(t, n) {
      return t & jy | n;
    }
    function vS(t, n) {
      return t | n;
    }
    function ql(t, n) {
      Xt(Ra, n, t);
    }
    function ac(t) {
      wn(Ra, t);
    }
    function yS(t, n) {
      var s = t.memoizedState;
      return s !== null ? s.dehydrated !== null : (t.memoizedProps, !0);
    }
    function Xd(t) {
      for (var n = t; n !== null; ) {
        if (n.tag === J) {
          var s = n.memoizedState;
          if (s !== null) {
            var l = s.dehydrated;
            if (l === null || Ct(l) || Ut(l))
              return n;
          }
        } else if (n.tag === Ne && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        n.memoizedProps.revealOrder !== void 0) {
          var c = (n.flags & _t) !== _e;
          if (c)
            return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === t)
          return null;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
            return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    var $a = (
      /*   */
      0
    ), gn = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), Fn = (
      /*    */
      4
    ), lr = (
      /*   */
      8
    ), sm = [];
    function lm() {
      for (var t = 0; t < sm.length; t++) {
        var n = sm[t];
        xi ? n._workInProgressVersionPrimary = null : n._workInProgressVersionSecondary = null;
      }
      sm.length = 0;
    }
    function gS(t, n) {
      var s = n._getVersion, l = s(n._source);
      t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    }
    var ke = m.ReactCurrentDispatcher, ci = m.ReactCurrentBatchConfig, um, sc;
    um = /* @__PURE__ */ new Set();
    var lc = fe, tn = null, Rr = null, qn = null, Zd = !1, Of = !1, Uf = 0, xS = 0, SS = 25, ae = null, ea = null, Wl = -1, om = !1;
    function Pt() {
      {
        var t = ae;
        ea === null ? ea = [t] : ea.push(t);
      }
    }
    function Te() {
      {
        var t = ae;
        ea !== null && (Wl++, ea[Wl] !== t && _S(t));
      }
    }
    function uc(t) {
      t != null && !qt(t) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof t);
    }
    function _S(t) {
      {
        var n = We(tn);
        if (!um.has(n) && (um.add(n), ea !== null)) {
          for (var s = "", l = 30, c = 0; c <= Wl; c++) {
            for (var h = ea[c], x = c === Wl ? t : h, T = c + 1 + ". " + h; T.length < l; )
              T += " ";
            T += x + `
`, s += T;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, n, s);
        }
      }
    }
    function Cr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function cm(t, n) {
      if (om)
        return !1;
      if (n === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      t.length !== n.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + n.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var s = 0; s < n.length && s < t.length; s++)
        if (!Pr(t[s], n[s]))
          return !1;
      return !0;
    }
    function oc(t, n, s, l, c, h) {
      lc = h, tn = n, ea = t !== null ? t._debugHookTypes : null, Wl = -1, om = t !== null && t.type !== n.type, n.memoizedState = null, n.updateQueue = null, n.lanes = fe, t !== null && t.memoizedState !== null ? ke.current = fg : ea !== null ? ke.current = cg : ke.current = og;
      var x = s(l, c);
      if (Of) {
        var T = 0;
        do {
          if (Of = !1, Uf = 0, T >= SS)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          T += 1, om = !1, Rr = null, qn = null, n.updateQueue = null, Wl = -1, ke.current = dg, x = s(l, c);
        } while (Of);
      }
      ke.current = oh, n._debugHookTypes = ea;
      var w = Rr !== null && Rr.next !== null;
      if (lc = fe, tn = null, Rr = null, qn = null, ae = null, ea = null, Wl = -1, t !== null && (t.flags & Ar) !== (n.flags & Ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (t.mode & Yt) !== at && g("Internal React error: Expected static flag was missing. Please notify the React team."), Zd = !1, w)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return x;
    }
    function cc() {
      var t = Uf !== 0;
      return Uf = 0, t;
    }
    function qy(t, n, s) {
      n.updateQueue = t.updateQueue, (n.mode & ii) !== at ? n.flags &= ~(nl | gi | rr | yt) : n.flags &= ~(rr | yt), t.lanes = zs(t.lanes, s);
    }
    function Yy() {
      if (ke.current = oh, Zd) {
        for (var t = tn.memoizedState; t !== null; ) {
          var n = t.queue;
          n !== null && (n.pending = null), t = t.next;
        }
        Zd = !1;
      }
      lc = fe, tn = null, Rr = null, qn = null, ea = null, Wl = -1, ae = null, rg = !1, Of = !1, Uf = 0;
    }
    function js() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return qn === null ? tn.memoizedState = qn = t : qn = qn.next = t, qn;
    }
    function es() {
      var t;
      if (Rr === null) {
        var n = tn.alternate;
        n !== null ? t = n.memoizedState : t = null;
      } else
        t = Rr.next;
      var s;
      if (qn === null ? s = tn.memoizedState : s = qn.next, s !== null)
        qn = s, s = qn.next, Rr = t;
      else {
        if (t === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Rr = t;
        var l = {
          memoizedState: Rr.memoizedState,
          baseState: Rr.baseState,
          baseQueue: Rr.baseQueue,
          queue: Rr.queue,
          next: null
        };
        qn === null ? tn.memoizedState = qn = l : qn = qn.next = l;
      }
      return qn;
    }
    function Wy() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function fm(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function dm(t, n, s) {
      var l = js(), c;
      s !== void 0 ? c = s(n) : c = n, l.memoizedState = l.baseState = c;
      var h = {
        pending: null,
        interleaved: null,
        lanes: fe,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: c
      };
      l.queue = h;
      var x = h.dispatch = MS.bind(null, tn, h);
      return [l.memoizedState, x];
    }
    function hm(t, n, s) {
      var l = es(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = t;
      var h = Rr, x = h.baseQueue, T = c.pending;
      if (T !== null) {
        if (x !== null) {
          var w = x.next, N = T.next;
          x.next = N, T.next = w;
        }
        h.baseQueue !== x && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), h.baseQueue = x = T, c.pending = null;
      }
      if (x !== null) {
        var U = x.next, I = h.baseState, Z = null, ne = null, he = null, Se = U;
        do {
          var Ke = Se.lane;
          if (wl(lc, Ke)) {
            if (he !== null) {
              var nt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dn,
                action: Se.action,
                hasEagerState: Se.hasEagerState,
                eagerState: Se.eagerState,
                next: null
              };
              he = he.next = nt;
            }
            if (Se.hasEagerState)
              I = Se.eagerState;
            else {
              var un = Se.action;
              I = t(I, un);
            }
          } else {
            var ft = {
              lane: Ke,
              action: Se.action,
              hasEagerState: Se.hasEagerState,
              eagerState: Se.eagerState,
              next: null
            };
            he === null ? (ne = he = ft, Z = I) : he = he.next = ft, tn.lanes = ot(tn.lanes, Ke), Yh(Ke);
          }
          Se = Se.next;
        } while (Se !== null && Se !== U);
        he === null ? Z = I : he.next = ne, Pr(I, l.memoizedState) || Eh(), l.memoizedState = I, l.baseState = Z, l.baseQueue = he, c.lastRenderedState = I;
      }
      var on = c.interleaved;
      if (on !== null) {
        var Q = on;
        do {
          var ie = Q.lane;
          tn.lanes = ot(tn.lanes, ie), Yh(ie), Q = Q.next;
        } while (Q !== on);
      } else x === null && (c.lanes = fe);
      var q = c.dispatch;
      return [l.memoizedState, q];
    }
    function pm(t, n, s) {
      var l = es(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = t;
      var h = c.dispatch, x = c.pending, T = l.memoizedState;
      if (x !== null) {
        c.pending = null;
        var w = x.next, N = w;
        do {
          var U = N.action;
          T = t(T, U), N = N.next;
        } while (N !== w);
        Pr(T, l.memoizedState) || Eh(), l.memoizedState = T, l.baseQueue === null && (l.baseState = T), c.lastRenderedState = T;
      }
      return [T, h];
    }
    function OM(t, n, s) {
    }
    function UM(t, n, s) {
    }
    function mm(t, n, s) {
      var l = tn, c = js(), h, x = Er();
      if (x) {
        if (s === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        h = s(), sc || h !== s() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), sc = !0);
      } else {
        if (h = n(), !sc) {
          var T = n();
          Pr(h, T) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), sc = !0);
        }
        var w = Vh();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(w, lc) || Qy(l, n, h);
      }
      c.memoizedState = h;
      var N = {
        value: h,
        getSnapshot: n
      };
      return c.queue = N, Hf(Xy.bind(null, l, N, t), [t]), l.flags |= rr, Bf(gn | lr, Gy.bind(null, l, N, h, n), void 0, null), h;
    }
    function Jd(t, n, s) {
      var l = tn, c = es(), h = n();
      if (!sc) {
        var x = n();
        Pr(h, x) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), sc = !0);
      }
      var T = c.memoizedState, w = !Pr(T, h);
      w && (c.memoizedState = h, Eh());
      var N = c.queue;
      if (Gu(Xy.bind(null, l, N, t), [t]), N.getSnapshot !== n || w || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      qn !== null && qn.memoizedState.tag & gn) {
        l.flags |= rr, Bf(gn | lr, Gy.bind(null, l, N, h, n), void 0, null);
        var U = Vh();
        if (U === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(U, lc) || Qy(l, n, h);
      }
      return h;
    }
    function Qy(t, n, s) {
      t.flags |= el;
      var l = {
        getSnapshot: n,
        value: s
      }, c = tn.updateQueue;
      if (c === null)
        c = Wy(), tn.updateQueue = c, c.stores = [l];
      else {
        var h = c.stores;
        h === null ? c.stores = [l] : h.push(l);
      }
    }
    function Gy(t, n, s, l) {
      n.value = s, n.getSnapshot = l, Zy(n) && Jy(t);
    }
    function Xy(t, n, s) {
      var l = function() {
        Zy(n) && Jy(t);
      };
      return s(l);
    }
    function Zy(t) {
      var n = t.getSnapshot, s = t.value;
      try {
        var l = n();
        return !Pr(s, l);
      } catch {
        return !0;
      }
    }
    function Jy(t) {
      Qn(t, xt, en);
    }
    function Lf(t) {
      var n = js();
      typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t;
      var s = {
        pending: null,
        interleaved: null,
        lanes: fe,
        dispatch: null,
        lastRenderedReducer: fm,
        lastRenderedState: t
      };
      n.queue = s;
      var l = s.dispatch = TS.bind(null, tn, s);
      return [n.memoizedState, l];
    }
    function Kd(t) {
      return hm(fm);
    }
    function $d(t) {
      return pm(fm);
    }
    function Bf(t, n, s, l) {
      var c = {
        tag: t,
        create: n,
        destroy: s,
        deps: l,
        // Circular
        next: null
      }, h = tn.updateQueue;
      if (h === null)
        h = Wy(), tn.updateQueue = h, h.lastEffect = c.next = c;
      else {
        var x = h.lastEffect;
        if (x === null)
          h.lastEffect = c.next = c;
        else {
          var T = x.next;
          x.next = c, c.next = T, h.lastEffect = c;
        }
      }
      return c;
    }
    function vm(t) {
      var n = js();
      {
        var s = {
          current: t
        };
        return n.memoizedState = s, s;
      }
    }
    function eh(t) {
      var n = es();
      return n.memoizedState;
    }
    function kf(t, n, s, l) {
      var c = js(), h = l === void 0 ? null : l;
      tn.flags |= t, c.memoizedState = Bf(gn | n, s, void 0, h);
    }
    function th(t, n, s, l) {
      var c = es(), h = l === void 0 ? null : l, x = void 0;
      if (Rr !== null) {
        var T = Rr.memoizedState;
        if (x = T.destroy, h !== null) {
          var w = T.deps;
          if (cm(h, w)) {
            c.memoizedState = Bf(n, s, x, h);
            return;
          }
        }
      }
      tn.flags |= t, c.memoizedState = Bf(gn | n, s, x, h);
    }
    function Hf(t, n) {
      return (tn.mode & ii) !== at ? kf(nl | rr | tl, lr, t, n) : kf(rr | tl, lr, t, n);
    }
    function Gu(t, n) {
      return th(rr, lr, t, n);
    }
    function ym(t, n) {
      return kf(yt, Yl, t, n);
    }
    function nh(t, n) {
      return th(yt, Yl, t, n);
    }
    function gm(t, n) {
      var s = yt;
      return s |= oa, (tn.mode & ii) !== at && (s |= gi), kf(s, Fn, t, n);
    }
    function rh(t, n) {
      return th(yt, Fn, t, n);
    }
    function Ky(t, n) {
      if (typeof n == "function") {
        var s = n, l = t();
        return s(l), function() {
          s(null);
        };
      } else if (n != null) {
        var c = n;
        c.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(c).join(", ") + "}");
        var h = t();
        return c.current = h, function() {
          c.current = null;
        };
      }
    }
    function xm(t, n, s) {
      typeof n != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var l = s != null ? s.concat([t]) : null, c = yt;
      return c |= oa, (tn.mode & ii) !== at && (c |= gi), kf(c, Fn, Ky.bind(null, n, t), l);
    }
    function ih(t, n, s) {
      typeof n != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var l = s != null ? s.concat([t]) : null;
      return th(yt, Fn, Ky.bind(null, n, t), l);
    }
    function ES(t, n) {
    }
    var ah = ES;
    function Sm(t, n) {
      var s = js(), l = n === void 0 ? null : n;
      return s.memoizedState = [t, l], t;
    }
    function sh(t, n) {
      var s = es(), l = n === void 0 ? null : n, c = s.memoizedState;
      if (c !== null && l !== null) {
        var h = c[1];
        if (cm(l, h))
          return c[0];
      }
      return s.memoizedState = [t, l], t;
    }
    function _m(t, n) {
      var s = js(), l = n === void 0 ? null : n, c = t();
      return s.memoizedState = [c, l], c;
    }
    function lh(t, n) {
      var s = es(), l = n === void 0 ? null : n, c = s.memoizedState;
      if (c !== null && l !== null) {
        var h = c[1];
        if (cm(l, h))
          return c[0];
      }
      var x = t();
      return s.memoizedState = [x, l], x;
    }
    function Em(t) {
      var n = Lf(t), s = n[0], l = n[1];
      return Hf(function() {
        var c = ci.transition;
        ci.transition = {};
        try {
          l(t);
        } finally {
          ci.transition = c;
        }
      }, [t]), s;
    }
    function $y(t) {
      var n = Kd(), s = n[0], l = n[1];
      return Gu(function() {
        var c = ci.transition;
        ci.transition = {};
        try {
          l(t);
        } finally {
          ci.transition = c;
        }
      }, [t]), s;
    }
    function eg(t) {
      var n = $d(), s = n[0], l = n[1];
      return Gu(function() {
        var c = ci.transition;
        ci.transition = {};
        try {
          l(t);
        } finally {
          ci.transition = c;
        }
      }, [t]), s;
    }
    function RS(t, n, s) {
      var l = kr();
      An(Yo(l, Dl)), t(!0);
      var c = ci.transition;
      ci.transition = {};
      var h = ci.transition;
      ci.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        t(!1), n();
      } finally {
        if (An(l), ci.transition = c, c === null && h._updatedFibers) {
          var x = h._updatedFibers.size;
          x > 10 && _("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), h._updatedFibers.clear();
        }
      }
    }
    function Rm() {
      var t = Lf(!1), n = t[0], s = t[1], l = RS.bind(null, s), c = js();
      return c.memoizedState = l, [n, l];
    }
    function tg() {
      var t = Kd(), n = t[0], s = es(), l = s.memoizedState;
      return [n, l];
    }
    function ng() {
      var t = $d(), n = t[0], s = es(), l = s.memoizedState;
      return [n, l];
    }
    var rg = !1;
    function CS() {
      return rg;
    }
    function Cm() {
      var t = js(), n = Vh(), s = n.identifierPrefix, l;
      if (Er()) {
        var c = eS();
        l = ":" + s + "R" + c;
        var h = Uf++;
        h > 0 && (l += "H" + h.toString(32)), l += ":";
      } else {
        var x = xS++;
        l = ":" + s + "r" + x.toString(32) + ":";
      }
      return t.memoizedState = l, l;
    }
    function uh() {
      var t = es(), n = t.memoizedState;
      return n;
    }
    function MS(t, n, s) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Xl(t), c = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ig(t))
        ag(n, c);
      else {
        sg(t, n, c);
        var h = Ir(), x = Qn(t, l, h);
        x !== null && lg(x, n, l);
      }
      ug(t, l);
    }
    function TS(t, n, s) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Xl(t), c = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ig(t))
        ag(n, c);
      else {
        sg(t, n, c);
        var h = t.alternate;
        if (t.lanes === fe && (h === null || h.lanes === fe)) {
          var x = n.lastRenderedReducer;
          if (x !== null) {
            var T;
            T = ke.current, ke.current = Ca;
            try {
              var w = n.lastRenderedState, N = x(w, s);
              if (c.hasEagerState = !0, c.eagerState = N, Pr(N, w))
                return;
            } catch {
            } finally {
              ke.current = T;
            }
          }
        }
        var U = Ir(), I = Qn(t, l, U);
        I !== null && lg(I, n, l);
      }
      ug(t, l);
    }
    function ig(t) {
      var n = t.alternate;
      return t === tn || n !== null && n === tn;
    }
    function ag(t, n) {
      Of = Zd = !0;
      var s = t.pending;
      s === null ? n.next = n : (n.next = s.next, s.next = n), t.pending = n;
    }
    function sg(t, n, s, l) {
      if (S0(t)) {
        var c = n.interleaved;
        c === null ? (s.next = s, $e(n)) : (s.next = c.next, c.next = s), n.interleaved = s;
      } else {
        var h = n.pending;
        h === null ? s.next = s : (s.next = h.next, h.next = s), n.pending = s;
      }
    }
    function lg(t, n, s) {
      if (jo(s)) {
        var l = n.lanes;
        l = Ya(l, t.pendingLanes);
        var c = ot(l, s);
        n.lanes = c, Ns(t, c);
      }
    }
    function ug(t, n, s) {
      Ll(t, n);
    }
    var oh = {
      readContext: Ce,
      useCallback: Cr,
      useContext: Cr,
      useEffect: Cr,
      useImperativeHandle: Cr,
      useInsertionEffect: Cr,
      useLayoutEffect: Cr,
      useMemo: Cr,
      useReducer: Cr,
      useRef: Cr,
      useState: Cr,
      useDebugValue: Cr,
      useDeferredValue: Cr,
      useTransition: Cr,
      useMutableSource: Cr,
      useSyncExternalStore: Cr,
      useId: Cr,
      unstable_isNewReconciler: L
    }, og = null, cg = null, fg = null, dg = null, ts = null, Ca = null, ch = null;
    {
      var Mm = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, lt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      og = {
        readContext: function(t) {
          return Ce(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Pt(), uc(n), Sm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Pt(), Ce(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Pt(), uc(n), Hf(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", Pt(), uc(s), xm(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", Pt(), uc(n), ym(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", Pt(), uc(n), gm(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", Pt(), uc(n);
          var s = ke.current;
          ke.current = ts;
          try {
            return _m(t, n);
          } finally {
            ke.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", Pt();
          var l = ke.current;
          ke.current = ts;
          try {
            return dm(t, n, s);
          } finally {
            ke.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Pt(), vm(t);
        },
        useState: function(t) {
          ae = "useState", Pt();
          var n = ke.current;
          ke.current = ts;
          try {
            return Lf(t);
          } finally {
            ke.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", Pt(), Em(t);
        },
        useTransition: function() {
          return ae = "useTransition", Pt(), Rm();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", Pt(), mm(t, n, s);
        },
        useId: function() {
          return ae = "useId", Pt(), Cm();
        },
        unstable_isNewReconciler: L
      }, cg = {
        readContext: function(t) {
          return Ce(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), Sm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), Ce(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Te(), Hf(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", Te(), xm(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", Te(), ym(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", Te(), gm(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", Te();
          var s = ke.current;
          ke.current = ts;
          try {
            return _m(t, n);
          } finally {
            ke.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", Te();
          var l = ke.current;
          ke.current = ts;
          try {
            return dm(t, n, s);
          } finally {
            ke.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), vm(t);
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = ke.current;
          ke.current = ts;
          try {
            return Lf(t);
          } finally {
            ke.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", Te(), Em(t);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), Rm();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", Te(), mm(t, n, s);
        },
        useId: function() {
          return ae = "useId", Te(), Cm();
        },
        unstable_isNewReconciler: L
      }, fg = {
        readContext: function(t) {
          return Ce(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), Ce(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Te(), Gu(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", Te(), ih(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", Te(), nh(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", Te(), rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", Te();
          var s = ke.current;
          ke.current = Ca;
          try {
            return lh(t, n);
          } finally {
            ke.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", Te();
          var l = ke.current;
          ke.current = Ca;
          try {
            return hm(t, n, s);
          } finally {
            ke.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), eh();
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = ke.current;
          ke.current = Ca;
          try {
            return Kd(t);
          } finally {
            ke.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", Te(), ah();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", Te(), $y(t);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), tg();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", Te(), Jd(t, n);
        },
        useId: function() {
          return ae = "useId", Te(), uh();
        },
        unstable_isNewReconciler: L
      }, dg = {
        readContext: function(t) {
          return Ce(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), Ce(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Te(), Gu(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", Te(), ih(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", Te(), nh(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", Te(), rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", Te();
          var s = ke.current;
          ke.current = ch;
          try {
            return lh(t, n);
          } finally {
            ke.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", Te();
          var l = ke.current;
          ke.current = ch;
          try {
            return pm(t, n, s);
          } finally {
            ke.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), eh();
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = ke.current;
          ke.current = ch;
          try {
            return $d(t);
          } finally {
            ke.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", Te(), ah();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", Te(), eg(t);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), ng();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", Te(), Jd(t, n);
        },
        useId: function() {
          return ae = "useId", Te(), uh();
        },
        unstable_isNewReconciler: L
      }, ts = {
        readContext: function(t) {
          return Mm(), Ce(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", lt(), Pt(), Sm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", lt(), Pt(), Ce(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", lt(), Pt(), Hf(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", lt(), Pt(), xm(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", lt(), Pt(), ym(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", lt(), Pt(), gm(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", lt(), Pt();
          var s = ke.current;
          ke.current = ts;
          try {
            return _m(t, n);
          } finally {
            ke.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", lt(), Pt();
          var l = ke.current;
          ke.current = ts;
          try {
            return dm(t, n, s);
          } finally {
            ke.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", lt(), Pt(), vm(t);
        },
        useState: function(t) {
          ae = "useState", lt(), Pt();
          var n = ke.current;
          ke.current = ts;
          try {
            return Lf(t);
          } finally {
            ke.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", lt(), Pt(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", lt(), Pt(), Em(t);
        },
        useTransition: function() {
          return ae = "useTransition", lt(), Pt(), Rm();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", lt(), Pt(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", lt(), Pt(), mm(t, n, s);
        },
        useId: function() {
          return ae = "useId", lt(), Pt(), Cm();
        },
        unstable_isNewReconciler: L
      }, Ca = {
        readContext: function(t) {
          return Mm(), Ce(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", lt(), Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", lt(), Te(), Ce(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", lt(), Te(), Gu(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", lt(), Te(), ih(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", lt(), Te(), nh(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", lt(), Te(), rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", lt(), Te();
          var s = ke.current;
          ke.current = Ca;
          try {
            return lh(t, n);
          } finally {
            ke.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", lt(), Te();
          var l = ke.current;
          ke.current = Ca;
          try {
            return hm(t, n, s);
          } finally {
            ke.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", lt(), Te(), eh();
        },
        useState: function(t) {
          ae = "useState", lt(), Te();
          var n = ke.current;
          ke.current = Ca;
          try {
            return Kd(t);
          } finally {
            ke.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", lt(), Te(), ah();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", lt(), Te(), $y(t);
        },
        useTransition: function() {
          return ae = "useTransition", lt(), Te(), tg();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", lt(), Te(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", lt(), Te(), Jd(t, n);
        },
        useId: function() {
          return ae = "useId", lt(), Te(), uh();
        },
        unstable_isNewReconciler: L
      }, ch = {
        readContext: function(t) {
          return Mm(), Ce(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", lt(), Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", lt(), Te(), Ce(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", lt(), Te(), Gu(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", lt(), Te(), ih(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", lt(), Te(), nh(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", lt(), Te(), rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", lt(), Te();
          var s = ke.current;
          ke.current = Ca;
          try {
            return lh(t, n);
          } finally {
            ke.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", lt(), Te();
          var l = ke.current;
          ke.current = Ca;
          try {
            return pm(t, n, s);
          } finally {
            ke.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", lt(), Te(), eh();
        },
        useState: function(t) {
          ae = "useState", lt(), Te();
          var n = ke.current;
          ke.current = Ca;
          try {
            return $d(t);
          } finally {
            ke.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", lt(), Te(), ah();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", lt(), Te(), eg(t);
        },
        useTransition: function() {
          return ae = "useTransition", lt(), Te(), ng();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", lt(), Te(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", lt(), Te(), Jd(t, n);
        },
        useId: function() {
          return ae = "useId", lt(), Te(), uh();
        },
        unstable_isNewReconciler: L
      };
    }
    var Ql = d.unstable_now, hg = 0, fh = -1, Pf = -1, dh = -1, Tm = !1, hh = !1;
    function pg() {
      return Tm;
    }
    function bS() {
      hh = !0;
    }
    function wS() {
      Tm = !1, hh = !1;
    }
    function zS() {
      Tm = hh, hh = !1;
    }
    function mg() {
      return hg;
    }
    function vg() {
      hg = Ql();
    }
    function bm(t) {
      Pf = Ql(), t.actualStartTime < 0 && (t.actualStartTime = Ql());
    }
    function yg(t) {
      Pf = -1;
    }
    function ph(t, n) {
      if (Pf >= 0) {
        var s = Ql() - Pf;
        t.actualDuration += s, n && (t.selfBaseDuration = s), Pf = -1;
      }
    }
    function ta(t) {
      if (fh >= 0) {
        var n = Ql() - fh;
        fh = -1;
        for (var s = t.return; s !== null; ) {
          switch (s.tag) {
            case me:
              var l = s.stateNode;
              l.effectDuration += n;
              return;
            case re:
              var c = s.stateNode;
              c.effectDuration += n;
              return;
          }
          s = s.return;
        }
      }
    }
    function wm(t) {
      if (dh >= 0) {
        var n = Ql() - dh;
        dh = -1;
        for (var s = t.return; s !== null; ) {
          switch (s.tag) {
            case me:
              var l = s.stateNode;
              l !== null && (l.passiveEffectDuration += n);
              return;
            case re:
              var c = s.stateNode;
              c !== null && (c.passiveEffectDuration += n);
              return;
          }
          s = s.return;
        }
      }
    }
    function na() {
      fh = Ql();
    }
    function zm() {
      dh = Ql();
    }
    function Dm(t) {
      for (var n = t.child; n; )
        t.actualDuration += n.actualDuration, n = n.sibling;
    }
    function mh(t, n) {
      return {
        value: t,
        source: n,
        stack: kd(n)
      };
    }
    function DS(t, n) {
      return !0;
    }
    function Am(t, n) {
      try {
        var s = DS(t, n);
        if (s === !1)
          return;
        var l = n.value, c = n.source, h = n.stack, x = h !== null ? h : "";
        if (l != null && l._suppressLogging) {
          if (t.tag === se)
            return;
          console.error(l);
        }
        var T = c ? We(c) : null, w = T ? "The above error occurred in the <" + T + "> component:" : "The above error occurred in one of your React components:", N;
        if (t.tag === me)
          N = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var U = We(t) || "Anonymous";
          N = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + U + ".");
        }
        var I = w + `
` + x + `

` + ("" + N);
        console.error(I);
      } catch (Z) {
        setTimeout(function() {
          throw Z;
        });
      }
    }
    var AS = typeof WeakMap == "function" ? WeakMap : Map;
    function gg(t, n, s) {
      var l = tt(en, s);
      l.tag = Y, l.payload = {
        element: null
      };
      var c = n.value;
      return l.callback = function() {
        BE(c), Am(t, n);
      }, l;
    }
    function Nm(t, n, s) {
      var l = tt(en, s);
      l.tag = Y;
      var c = t.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var h = n.value;
        l.payload = function() {
          return c(h);
        }, l.callback = function() {
          k0(t), Am(t, n);
        };
      }
      var x = t.stateNode;
      return x !== null && typeof x.componentDidCatch == "function" && (l.callback = function() {
        k0(t), Am(t, n), typeof c != "function" && UE(this);
        var w = n.value, N = n.stack;
        this.componentDidCatch(w, {
          componentStack: N !== null ? N : ""
        }), typeof c != "function" && (pn(t.lanes, xt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", We(t) || "Unknown"));
      }), l;
    }
    function xg(t, n, s) {
      var l = t.pingCache, c;
      if (l === null ? (l = t.pingCache = new AS(), c = /* @__PURE__ */ new Set(), l.set(n, c)) : (c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c))), !c.has(s)) {
        c.add(s);
        var h = kE.bind(null, t, n, s);
        gr && nd(t, s), n.then(h, h);
      }
    }
    function NS(t, n, s, l) {
      var c = t.updateQueue;
      if (c === null) {
        var h = /* @__PURE__ */ new Set();
        h.add(s), t.updateQueue = h;
      } else
        c.add(s);
    }
    function FS(t, n) {
      var s = t.tag;
      if ((t.mode & Yt) === at && (s === oe || s === H || s === j)) {
        var l = t.alternate;
        l ? (t.updateQueue = l.updateQueue, t.memoizedState = l.memoizedState, t.lanes = l.lanes) : (t.updateQueue = null, t.memoizedState = null);
      }
    }
    function Sg(t) {
      var n = t;
      do {
        if (n.tag === J && yS(n))
          return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function _g(t, n, s, l, c) {
      if ((t.mode & Yt) === at) {
        if (t === n)
          t.flags |= Zn;
        else {
          if (t.flags |= _t, s.flags |= Mn, s.flags &= ~(fs | Oa), Jr && D) {
            var h = t.alternate;
            if (h === null) {
              var x = t.child, T = x.child;
              if (T !== null) {
                var w = T.memoizedProps.children, N = Pe("hidden", w);
                T.pendingProps = N, T.memoizedProps = N;
              }
            }
          }
          if (s.tag === se) {
            var U = s.alternate;
            if (U === null)
              s.tag = Le;
            else {
              var I = tt(en, xt);
              I.tag = ar, mt(s, I);
            }
          }
          s.lanes = ot(s.lanes, xt);
        }
        return t;
      }
      return t.flags |= Zn, t.lanes = c, t;
    }
    function OS(t, n, s, l, c) {
      if (s.flags |= Oa, gr && nd(t, c), l !== null && typeof l == "object" && typeof l.then == "function") {
        var h = l;
        FS(s);
        var x = Sg(n);
        if (x !== null) {
          x.flags &= ~Gr, _g(x, n, s, t, c), x.mode & Yt && xg(t, h, c), NS(x, t, h);
          return;
        } else {
          if (!uf(c)) {
            xg(t, h, c), fv();
            return;
          }
          var T = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = T;
        }
      } else if (Er() && s.mode & Yt) {
        aS();
        var w = Sg(n);
        if (w !== null) {
          (w.flags & Zn) === _e && (w.flags |= Gr), _g(w, n, s, t, c), Xp(l);
          return;
        }
      }
      bE(l), l = mh(l, s);
      var N = n;
      do {
        switch (N.tag) {
          case me: {
            var U = l;
            N.flags |= Zn;
            var I = bl(c);
            N.lanes = ot(N.lanes, I);
            var Z = gg(N, U, I);
            Dt(N, Z);
            return;
          }
          case se:
            var ne = l, he = N.type, Se = N.stateNode;
            if ((N.flags & _t) === _e && (typeof he.getDerivedStateFromError == "function" || Se !== null && typeof Se.componentDidCatch == "function" && !z0(Se))) {
              N.flags |= Zn;
              var Ke = bl(c);
              N.lanes = ot(N.lanes, Ke);
              var ft = Nm(N, ne, Ke);
              Dt(N, ft);
              return;
            }
            break;
        }
        N = N.return;
      } while (N !== null);
    }
    function US() {
      return null;
    }
    function ns(t) {
      t.flags |= yt;
    }
    function Eg(t) {
      t.flags |= Li, t.flags |= cu;
    }
    function Rg(t, n) {
      var s = t !== null && t.child === n.child;
      if (s)
        return !0;
      if ((n.flags & pr) !== _e)
        return !1;
      for (var l = n.child; l !== null; ) {
        if ((l.flags & ds) !== _e || (l.subtreeFlags & ds) !== _e)
          return !1;
        l = l.sibling;
      }
      return !0;
    }
    var Vf, jf, vh, yh;
    if (Fr)
      Vf = function(t, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === ye || c.tag === de)
            Pi(t, c.stateNode);
          else if (c.tag !== Re) {
            if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === n)
            return;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === n)
              return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      }, jf = function(t, n) {
      }, vh = function(t, n, s, l, c) {
        var h = t.memoizedProps;
        if (h !== l) {
          var x = n.stateNode, T = Nf(), w = mr(x, s, h, l, c, T);
          n.updateQueue = w, w && ns(n);
        }
      }, yh = function(t, n, s, l) {
        s !== l && ns(n);
      };
    else if (Jr) {
      Vf = function(t, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === ye) {
            var h = c.stateNode;
            if (s && l) {
              var x = c.memoizedProps, T = c.type;
              h = it(h, T, x, c);
            }
            Pi(t, h);
          } else if (c.tag === de) {
            var w = c.stateNode;
            if (s && l) {
              var N = c.memoizedProps;
              w = ht(w, N, c);
            }
            Pi(t, w);
          } else if (c.tag !== Re) {
            if (c.tag === qe && c.memoizedState !== null) {
              var U = c.child;
              U !== null && (U.return = c), Vf(t, c, !0, !0);
            } else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c = c, c === n)
            return;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === n)
              return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      };
      var Cg = function(t, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === ye) {
            var h = c.stateNode;
            if (s && l) {
              var x = c.memoizedProps, T = c.type;
              h = it(h, T, x, c);
            }
            K(t, h);
          } else if (c.tag === de) {
            var w = c.stateNode;
            if (s && l) {
              var N = c.memoizedProps;
              w = ht(w, N, c);
            }
            K(t, w);
          } else if (c.tag !== Re) {
            if (c.tag === qe && c.memoizedState !== null) {
              var U = c.child;
              U !== null && (U.return = c), Cg(t, c, !0, !0);
            } else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c = c, c === n)
            return;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === n)
              return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      };
      jf = function(t, n) {
        var s = n.stateNode, l = Rg(t, n);
        if (!l) {
          var c = s.containerInfo, h = W(c);
          Cg(h, n, !1, !1), s.pendingChildren = h, ns(n), xe(c, h);
        }
      }, vh = function(t, n, s, l, c) {
        var h = t.stateNode, x = t.memoizedProps, T = Rg(t, n);
        if (T && x === l) {
          n.stateNode = h;
          return;
        }
        var w = n.stateNode, N = Nf(), U = null;
        if (x !== l && (U = mr(w, s, x, l, c, N)), T && U === null) {
          n.stateNode = h;
          return;
        }
        var I = F(h, U, s, x, l, n, T, w);
        Ha(I, s, l, c, N) && ns(n), n.stateNode = I, T ? ns(n) : Vf(I, n, !1, !1);
      }, yh = function(t, n, s, l) {
        if (s !== l) {
          var c = tm(), h = Nf();
          n.stateNode = ho(l, c, h, n), ns(n);
        } else
          n.stateNode = t.stateNode;
      };
    } else
      jf = function(t, n) {
      }, vh = function(t, n, s, l, c) {
      }, yh = function(t, n, s, l) {
      };
    function If(t, n) {
      if (!Er())
        switch (t.tailMode) {
          case "hidden": {
            for (var s = t.tail, l = null; s !== null; )
              s.alternate !== null && (l = s), s = s.sibling;
            l === null ? t.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var c = t.tail, h = null; c !== null; )
              c.alternate !== null && (h = c), c = c.sibling;
            h === null ? !n && t.tail !== null ? t.tail.sibling = null : t.tail = null : h.sibling = null;
            break;
          }
        }
    }
    function ur(t) {
      var n = t.alternate !== null && t.alternate.child === t.child, s = fe, l = _e;
      if (n) {
        if ((t.mode & At) !== at) {
          for (var w = t.selfBaseDuration, N = t.child; N !== null; )
            s = ot(s, ot(N.lanes, N.childLanes)), l |= N.subtreeFlags & Ar, l |= N.flags & Ar, w += N.treeBaseDuration, N = N.sibling;
          t.treeBaseDuration = w;
        } else
          for (var U = t.child; U !== null; )
            s = ot(s, ot(U.lanes, U.childLanes)), l |= U.subtreeFlags & Ar, l |= U.flags & Ar, U.return = t, U = U.sibling;
        t.subtreeFlags |= l;
      } else {
        if ((t.mode & At) !== at) {
          for (var c = t.actualDuration, h = t.selfBaseDuration, x = t.child; x !== null; )
            s = ot(s, ot(x.lanes, x.childLanes)), l |= x.subtreeFlags, l |= x.flags, c += x.actualDuration, h += x.treeBaseDuration, x = x.sibling;
          t.actualDuration = c, t.treeBaseDuration = h;
        } else
          for (var T = t.child; T !== null; )
            s = ot(s, ot(T.lanes, T.childLanes)), l |= T.subtreeFlags, l |= T.flags, T.return = t, T = T.sibling;
        t.subtreeFlags |= l;
      }
      return t.childLanes = s, n;
    }
    function Mg(t, n, s) {
      var l = n.pendingProps;
      switch (qp(n), n.tag) {
        case Xe:
        case ze:
        case j:
        case oe:
        case H:
        case Ae:
        case Ve:
        case re:
        case Ze:
        case O:
          return ur(n), null;
        case se: {
          var c = n.type;
          return ri(c) && gl(n), ur(n), null;
        }
        case me: {
          var h = n.stateNode;
          if (rc(n), Mu(n), lm(), h.pendingContext && (h.context = h.pendingContext, h.pendingContext = null), t === null || t.child === null) {
            var x = wf(n);
            if (x)
              ns(n);
            else if (t !== null) {
              var T = t.memoizedState;
              // Check if this is a client root
              (!T.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (n.flags & Gr) !== _e) && (n.flags |= Dr, Ly());
            }
          }
          return jf(t, n), ur(n), null;
        }
        case ye: {
          rm(n);
          var w = tm(), N = n.type;
          if (t !== null && n.stateNode != null)
            vh(t, n, N, l, w), t.ref !== n.ref && Eg(n);
          else {
            if (!l) {
              if (n.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ur(n), null;
            }
            var U = Nf(), I = wf(n);
            if (I)
              uS(n, w, U) && ns(n);
            else {
              var Z = ms(N, l, w, U, n);
              Vf(Z, n, !1, !1), n.stateNode = Z, Ha(Z, N, l, w, U) && ns(n);
            }
            n.ref !== null && Eg(n);
          }
          return ur(n), null;
        }
        case de: {
          var ne = l;
          if (t && n.stateNode != null) {
            var he = t.memoizedProps;
            yh(t, n, he, ne);
          } else {
            if (typeof ne != "string" && n.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Se = tm(), Ke = Nf(), ft = wf(n);
            ft ? oS(n) && ns(n) : n.stateNode = ho(ne, Se, Ke, n);
          }
          return ur(n), null;
        }
        case J: {
          ac(n);
          var nt = n.memoizedState;
          {
            if (dS() && (n.mode & Yt) !== at && (n.flags & _t) === _e)
              return Uy(n), tc(), n.flags |= Gr | Oa | Zn, n;
            if (nt !== null && nt.dehydrated !== null) {
              var un = wf(n);
              if (t === null) {
                if (!un)
                  throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (cS(n), ur(n), (n.mode & At) !== at) {
                  var on = nt !== null;
                  if (on) {
                    var Q = n.child;
                    Q !== null && (n.treeBaseDuration -= Q.treeBaseDuration);
                  }
                }
                return null;
              } else {
                if (tc(), (n.flags & _t) === _e && (n.memoizedState = null), n.flags |= yt, ur(n), (n.mode & At) !== at) {
                  var ie = nt !== null;
                  if (ie) {
                    var q = n.child;
                    q !== null && (n.treeBaseDuration -= q.treeBaseDuration);
                  }
                }
                return null;
              }
            }
            Ly();
          }
          if ((n.flags & _t) !== _e)
            return n.lanes = s, (n.mode & At) !== at && Dm(n), n;
          var Ee = nt !== null, Ge = !1;
          if (t === null)
            wf(n);
          else {
            var He = t.memoizedState;
            Ge = He !== null;
          }
          if (Ee && !Ge) {
            var Mt = n.child;
            if (Mt.flags |= Bi, (n.mode & Yt) !== at) {
              var Wt = t === null && (n.memoizedProps.unstable_avoidThisFallback !== !0 || !te);
              Wt || im(Ra.current, Iy) ? TE() : fv();
            }
          }
          var sn = n.updateQueue;
          if (sn !== null && (n.flags |= yt), ur(n), (n.mode & At) !== at && Ee) {
            var Qt = n.child;
            Qt !== null && (n.treeBaseDuration -= Qt.treeBaseDuration);
          }
          return null;
        }
        case Re:
          return rc(n), jf(t, n), t === null && vs(n.stateNode.containerInfo), ur(n), null;
        case ge:
          var _n = n.type._context;
          return S(_n, n), ur(n), null;
        case Le: {
          var Bt = n.type;
          return ri(Bt) && gl(n), ur(n), null;
        }
        case Ne: {
          ac(n);
          var St = n.memoizedState;
          if (St === null)
            return ur(n), null;
          var On = (n.flags & _t) !== _e, En = St.rendering;
          if (En === null)
            if (On)
              If(St, !1);
            else {
              var aa = wE() && (t === null || (t.flags & _t) === _e);
              if (!aa)
                for (var fr = n.child; fr !== null; ) {
                  var Ai = Xd(fr);
                  if (Ai !== null) {
                    On = !0, n.flags |= _t, If(St, !1);
                    var Ni = Ai.updateQueue;
                    return Ni !== null && (n.updateQueue = Ni, n.flags |= yt), n.subtreeFlags = _e, pS(n, s), ql(n, am(Ra.current, Ff)), n.child;
                  }
                  fr = fr.sibling;
                }
              St.tail !== null && mn() > x0() && (n.flags |= _t, On = !0, If(St, !1), n.lanes = Cl);
            }
          else {
            if (!On) {
              var as = Xd(En);
              if (as !== null) {
                n.flags |= _t, On = !0;
                var yc = as.updateQueue;
                if (yc !== null && (n.updateQueue = yc, n.flags |= yt), If(St, !0), St.tail === null && St.tailMode === "hidden" && !En.alternate && !Er())
                  return ur(n), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              mn() * 2 - St.renderingStartTime > x0() && s !== Zt && (n.flags |= _t, On = !0, If(St, !1), n.lanes = Cl);
            }
            if (St.isBackwards)
              En.sibling = n.child, n.child = En;
            else {
              var gc = St.last;
              gc !== null ? gc.sibling = En : n.child = En, St.last = En;
            }
          }
          if (St.tail !== null) {
            var Fi = St.tail;
            St.rendering = Fi, St.tail = Fi.sibling, St.renderingStartTime = mn(), Fi.sibling = null;
            var to = Ra.current;
            return On ? to = am(to, Ff) : to = ic(to), ql(n, to), Fi;
          }
          return ur(n), null;
        }
        case Ie:
          break;
        case qe:
        case je: {
          cv(n);
          var zv = n.memoizedState, fx = zv !== null;
          if (t !== null) {
            var TR = t.memoizedState, bR = TR !== null;
            bR !== fx && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !V && (n.flags |= Bi);
          }
          return !fx || (n.mode & Yt) === at ? ur(n) : pn(rs, Zt) && (ur(n), Fr && n.subtreeFlags & (Vt | yt) && (n.flags |= Bi)), null;
        }
        case dt:
          return null;
        case Tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    var qf = m.ReactCurrentOwner, Ma = !1, Fm, Yf, Om, Um, Lm, Xu, Bm, gh;
    Fm = {}, Yf = {}, Om = {}, Um = {}, Lm = {}, Xu = !1, Bm = {}, gh = {};
    function jr(t, n, s, l) {
      t === null ? n.child = Py(n, null, s, l) : n.child = nc(n, t.child, s, l);
    }
    function LS(t, n, s, l) {
      n.child = nc(n, t.child, null, l), n.child = nc(n, null, s, l);
    }
    function Tg(t, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = s.propTypes;
        h && Br(
          h,
          l,
          // Resolved props
          "prop",
          Be(s)
        );
      }
      var x = s.render, T = n.ref, w, N;
      ve(n, c), Xi(n);
      {
        if (qf.current = n, Zi(!0), w = oc(t, n, x, l, T, c), N = cc(), n.mode & hn) {
          zt(!0);
          try {
            w = oc(t, n, x, l, T, c), N = cc();
          } finally {
            zt(!1);
          }
        }
        Zi(!1);
      }
      return Sa(), t !== null && !Ma ? (qy(t, n, c), Is(t, n, c)) : (Er() && N && Ip(n), n.flags |= Un, jr(t, n, w, c), n.child);
    }
    function bg(t, n, s, l, c) {
      if (t === null) {
        var h = s.type;
        if (tR(h) && s.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        s.defaultProps === void 0) {
          var x = h;
          return x = vc(h), n.tag = j, n.type = x, Pm(n, h), wg(t, n, x, l, c);
        }
        {
          var T = h.propTypes;
          T && Br(
            T,
            l,
            // Resolved props
            "prop",
            Be(h)
          );
        }
        var w = _v(s.type, null, l, n, n.mode, c);
        return w.ref = n.ref, w.return = n, n.child = w, w;
      }
      {
        var N = s.type, U = N.propTypes;
        U && Br(
          U,
          l,
          // Resolved props
          "prop",
          Be(N)
        );
      }
      var I = t.child, Z = qm(t, c);
      if (!Z) {
        var ne = I.memoizedProps, he = s.compare;
        if (he = he !== null ? he : Us, he(ne, l) && t.ref === n.ref)
          return Is(t, n, c);
      }
      n.flags |= Un;
      var Se = eo(I, l);
      return Se.ref = n.ref, Se.return = n, n.child = Se, Se;
    }
    function wg(t, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = n.elementType;
        if (h.$$typeof === Ht) {
          var x = h, T = x._payload, w = x._init;
          try {
            h = w(T);
          } catch {
            h = null;
          }
          var N = h && h.propTypes;
          N && Br(
            N,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Be(h)
          );
        }
      }
      if (t !== null) {
        var U = t.memoizedProps;
        if (Us(U, l) && t.ref === n.ref && // Prevent bailout if the implementation changed due to hot reload.
        n.type === t.type)
          if (Ma = !1, qm(t, c))
            (t.flags & Mn) !== _e && (Ma = !0);
          else return n.lanes = t.lanes, Is(t, n, c);
      }
      return km(t, n, s, l, c);
    }
    function zg(t, n, s) {
      var l = n.pendingProps, c = l.children, h = t !== null ? t.memoizedState : null;
      if (l.mode === "hidden" || V)
        if ((n.mode & Yt) === at) {
          var x = {
            baseLanes: fe,
            cachePool: null
          };
          n.memoizedState = x, qh(n, s);
        } else if (pn(s, Zt)) {
          var I = {
            baseLanes: fe,
            cachePool: null
          };
          n.memoizedState = I;
          var Z = h !== null ? h.baseLanes : s;
          qh(n, Z);
        } else {
          var T = null, w;
          if (h !== null) {
            var N = h.baseLanes;
            w = ot(N, s);
          } else
            w = s;
          n.lanes = n.childLanes = Zt;
          var U = {
            baseLanes: w,
            cachePool: T
          };
          return n.memoizedState = U, n.updateQueue = null, qh(n, w), null;
        }
      else {
        var ne;
        h !== null ? (ne = ot(h.baseLanes, s), n.memoizedState = null) : ne = s, qh(n, ne);
      }
      return jr(t, n, c, s), n.child;
    }
    function BS(t, n, s) {
      var l = n.pendingProps;
      return jr(t, n, l, s), n.child;
    }
    function kS(t, n, s) {
      var l = n.pendingProps.children;
      return jr(t, n, l, s), n.child;
    }
    function HS(t, n, s) {
      {
        n.flags |= yt;
        {
          var l = n.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var c = n.pendingProps, h = c.children;
      return jr(t, n, h, s), n.child;
    }
    function Dg(t, n) {
      var s = n.ref;
      (t === null && s !== null || t !== null && t.ref !== s) && (n.flags |= Li, n.flags |= cu);
    }
    function km(t, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = s.propTypes;
        h && Br(
          h,
          l,
          // Resolved props
          "prop",
          Be(s)
        );
      }
      var x;
      {
        var T = Ii(n, s, !0);
        x = yl(n, T);
      }
      var w, N;
      ve(n, c), Xi(n);
      {
        if (qf.current = n, Zi(!0), w = oc(t, n, s, l, x, c), N = cc(), n.mode & hn) {
          zt(!0);
          try {
            w = oc(t, n, s, l, x, c), N = cc();
          } finally {
            zt(!1);
          }
        }
        Zi(!1);
      }
      return Sa(), t !== null && !Ma ? (qy(t, n, c), Is(t, n, c)) : (Er() && N && Ip(n), n.flags |= Un, jr(t, n, w, c), n.child);
    }
    function Ag(t, n, s, l, c) {
      {
        switch (Q0(n)) {
          case !1: {
            var h = n.stateNode, x = n.type, T = new x(n.memoizedProps, h.context), w = T.state;
            h.updater.enqueueSetState(h, w, null);
            break;
          }
          case !0: {
            n.flags |= _t, n.flags |= Zn;
            var N = new Error("Simulated error coming from DevTools"), U = bl(c);
            n.lanes = ot(n.lanes, U);
            var I = Nm(n, mh(N, n), U);
            Dt(n, I);
            break;
          }
        }
        if (n.type !== n.elementType) {
          var Z = s.propTypes;
          Z && Br(
            Z,
            l,
            // Resolved props
            "prop",
            Be(s)
          );
        }
      }
      var ne;
      ri(s) ? (ne = !0, Yi(n)) : ne = !1, ve(n, c);
      var he = n.stateNode, Se;
      he === null ? (t !== null && (t.alternate = null, n.alternate = null, n.flags |= Vt), by(n, s, l), jp(n, s, l, c), Se = !0) : t === null ? Se = Z1(n, s, l, c) : Se = J1(t, n, s, l, c);
      var Ke = Hm(t, n, s, Se, ne, c);
      {
        var ft = n.stateNode;
        Se && ft.props !== l && (Xu || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", We(n) || "a component"), Xu = !0);
      }
      return Ke;
    }
    function Hm(t, n, s, l, c, h) {
      Dg(t, n);
      var x = (n.flags & _t) !== _e;
      if (!l && !x)
        return c && Tu(n, s, !1), Is(t, n, h);
      var T = n.stateNode;
      qf.current = n;
      var w;
      if (x && typeof s.getDerivedStateFromError != "function")
        w = null, yg();
      else {
        Xi(n);
        {
          if (Zi(!0), w = T.render(), n.mode & hn) {
            zt(!0);
            try {
              T.render();
            } finally {
              zt(!1);
            }
          }
          Zi(!1);
        }
        Sa();
      }
      return n.flags |= Un, t !== null && x ? LS(t, n, w, h) : jr(t, n, w, h), n.memoizedState = T.state, c && Tu(n, s, !0), n.child;
    }
    function Ng(t) {
      var n = t.stateNode;
      n.pendingContext ? qi(t, n.pendingContext, n.pendingContext !== n.context) : n.context && qi(t, n.context, !1), nm(t, n.containerInfo);
    }
    function PS(t, n, s) {
      if (Ng(n), t === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = n.pendingProps, c = n.memoizedState, h = c.element;
      ct(t, n), Ko(n, l, null, s);
      var x = n.memoizedState;
      n.stateNode;
      var T = x.element;
      if (bn && c.isDehydrated) {
        var w = {
          element: T,
          isDehydrated: !1,
          cache: x.cache,
          transitions: x.transitions
        }, N = n.updateQueue;
        if (N.baseState = w, n.memoizedState = w, n.flags & Gr) {
          var U = new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.");
          return Fg(t, n, T, s, U);
        } else if (T !== h) {
          var I = new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.");
          return Fg(t, n, T, s, I);
        } else {
          sS(n);
          var Z = Py(n, null, T, s);
          n.child = Z;
          for (var ne = Z; ne; )
            ne.flags = ne.flags & ~Vt | ir, ne = ne.sibling;
        }
      } else {
        if (tc(), T === h)
          return Is(t, n, s);
        jr(t, n, T, s);
      }
      return n.child;
    }
    function Fg(t, n, s, l, c) {
      return tc(), Xp(c), n.flags |= Gr, jr(t, n, s, l), n.child;
    }
    function VS(t, n, s) {
      Vy(n), t === null && Gp(n);
      var l = n.type, c = n.pendingProps, h = t !== null ? t.memoizedProps : null, x = c.children, T = il(l, c);
      return T ? x = null : h !== null && il(l, h) && (n.flags |= Fa), Dg(t, n), jr(t, n, x, s), n.child;
    }
    function jS(t, n) {
      return t === null && Gp(n), null;
    }
    function IS(t, n, s, l) {
      t !== null && (t.alternate = null, n.alternate = null, n.flags |= Vt);
      var c = n.pendingProps, h = s, x = h._payload, T = h._init, w = T(x);
      n.type = w;
      var N = n.tag = nR(w), U = oi(w, c), I;
      switch (N) {
        case oe:
          return Pm(n, w), n.type = w = vc(w), I = km(null, n, w, U, l), I;
        case se:
          return n.type = w = mv(w), I = Ag(null, n, w, U, l), I;
        case H:
          return n.type = w = vv(w), I = Tg(null, n, w, U, l), I;
        case O: {
          if (n.type !== n.elementType) {
            var Z = w.propTypes;
            Z && Br(
              Z,
              U,
              // Resolved for outer only
              "prop",
              Be(w)
            );
          }
          return I = bg(
            null,
            n,
            w,
            oi(w.type, U),
            // The inner type can have defaults too
            l
          ), I;
        }
      }
      var ne = "";
      throw w !== null && typeof w == "object" && w.$$typeof === Ht && (ne = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + w + ". " + ("Lazy element type must resolve to a class or function." + ne));
    }
    function qS(t, n, s, l, c) {
      t !== null && (t.alternate = null, n.alternate = null, n.flags |= Vt), n.tag = se;
      var h;
      return ri(s) ? (h = !0, Yi(n)) : h = !1, ve(n, c), by(n, s, l), jp(n, s, l, c), Hm(null, n, s, !0, h, c);
    }
    function YS(t, n, s, l) {
      t !== null && (t.alternate = null, n.alternate = null, n.flags |= Vt);
      var c = n.pendingProps, h;
      {
        var x = Ii(n, s, !1);
        h = yl(n, x);
      }
      ve(n, l);
      var T, w;
      Xi(n);
      {
        if (s.prototype && typeof s.prototype.render == "function") {
          var N = Be(s) || "Unknown";
          Fm[N] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", N, N), Fm[N] = !0);
        }
        n.mode & hn && ui.recordLegacyContextWarning(n, null), Zi(!0), qf.current = n, T = oc(null, n, s, c, h, l), w = cc(), Zi(!1);
      }
      if (Sa(), n.flags |= Un, typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0) {
        var U = Be(s) || "Unknown";
        Yf[U] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), Yf[U] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0
      ) {
        {
          var I = Be(s) || "Unknown";
          Yf[I] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), Yf[I] = !0);
        }
        n.tag = se, n.memoizedState = null, n.updateQueue = null;
        var Z = !1;
        return ri(s) ? (Z = !0, Yi(n)) : Z = !1, n.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null, Ye(n), Ty(n, T), jp(n, s, c, l), Hm(null, n, s, !0, Z, l);
      } else {
        if (n.tag = oe, n.mode & hn) {
          zt(!0);
          try {
            T = oc(null, n, s, c, h, l), w = cc();
          } finally {
            zt(!1);
          }
        }
        return Er() && w && Ip(n), jr(null, n, T, l), Pm(n, s), n.child;
      }
    }
    function Pm(t, n) {
      {
        if (n && n.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), t.ref !== null) {
          var s = "", l = wp();
          l && (s += `

Check the render method of \`` + l + "`.");
          var c = l || "", h = t._debugSource;
          h && (c = h.fileName + ":" + h.lineNumber), Lm[c] || (Lm[c] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", s));
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var x = Be(n) || "Unknown";
          Um[x] || (g("%s: Function components do not support getDerivedStateFromProps.", x), Um[x] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var T = Be(n) || "Unknown";
          Om[T] || (g("%s: Function components do not support contextType.", T), Om[T] = !0);
        }
      }
    }
    var xh = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dn
    };
    function Sh(t) {
      return {
        baseLanes: t,
        cachePool: US()
      };
    }
    function Og(t, n) {
      var s = null;
      return {
        baseLanes: ot(t.baseLanes, n),
        cachePool: s
      };
    }
    function WS(t, n, s, l) {
      if (n !== null) {
        var c = n.memoizedState;
        if (c === null)
          return !1;
      }
      return im(t, Ff);
    }
    function Ug(t, n) {
      return zs(t.childLanes, n);
    }
    function Lg(t, n, s) {
      var l = n.pendingProps;
      X0(n) && (n.flags |= _t);
      var c = Ra.current, h = !1, x = (n.flags & _t) !== _e;
      if (x || WS(c, t) ? (h = !0, n.flags &= ~_t) : (t === null || t.memoizedState !== null) && (c = vS(c, Iy)), c = ic(c), ql(n, c), t === null) {
        Gp(n);
        {
          var T = n.memoizedState;
          if (T !== null) {
            var w = T.dehydrated;
            if (w !== null)
              return XS(n, w);
          }
        }
        var N = l.children, U = l.fallback;
        if (h) {
          var I = QS(n, N, U, s), Z = n.child;
          return Z.memoizedState = Sh(s), n.memoizedState = xh, I;
        } else
          return Vm(n, N);
      } else {
        var ne = t.memoizedState;
        if (ne !== null) {
          {
            var he = ne.dehydrated;
            if (he !== null)
              if (x) {
                if (n.flags & Gr)
                  return n.flags &= ~Gr, _h(t, n, s, new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
                if (n.memoizedState !== null)
                  return n.child = t.child, n.flags |= _t, null;
                var Se = l.children, Ke = l.fallback, ft = GS(t, n, Se, Ke, s), nt = n.child;
                return nt.memoizedState = Sh(s), n.memoizedState = xh, ft;
              } else return ZS(t, n, he, ne, s);
          }
          if (h) {
            var un = l.fallback, on = l.children, Q = Hg(t, n, on, un, s), ie = n.child, q = t.child.memoizedState;
            return ie.memoizedState = q === null ? Sh(s) : Og(q, s), ie.childLanes = Ug(t, s), n.memoizedState = xh, Q;
          } else {
            var Ee = l.children, Ge = kg(t, n, Ee, s);
            return n.memoizedState = null, Ge;
          }
        } else if (h) {
          var He = l.fallback, Mt = l.children, Wt = Hg(t, n, Mt, He, s), sn = n.child, Qt = t.child.memoizedState;
          return sn.memoizedState = Qt === null ? Sh(s) : Og(Qt, s), sn.childLanes = Ug(t, s), n.memoizedState = xh, Wt;
        } else {
          var _n = l.children, Bt = kg(t, n, _n, s);
          return n.memoizedState = null, Bt;
        }
      }
    }
    function Vm(t, n, s) {
      var l = t.mode, c = {
        mode: "visible",
        children: n
      }, h = jm(c, l);
      return h.return = t, t.child = h, h;
    }
    function QS(t, n, s, l) {
      var c = t.mode, h = t.child, x = {
        mode: "hidden",
        children: n
      }, T, w;
      return (c & Yt) === at && h !== null ? (T = h, T.childLanes = fe, T.pendingProps = x, t.mode & At && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = 0, T.treeBaseDuration = 0), w = Jl(s, c, l, null)) : (T = jm(x, c), w = Jl(s, c, l, null)), T.return = t, w.return = t, T.sibling = w, t.child = T, w;
    }
    function jm(t, n, s) {
      return P0(t, n, fe, null);
    }
    function Bg(t, n) {
      return eo(t, n);
    }
    function kg(t, n, s, l) {
      var c = t.child, h = c.sibling, x = Bg(c, {
        mode: "visible",
        children: s
      });
      if ((n.mode & Yt) === at && (x.lanes = l), x.return = n, x.sibling = null, h !== null) {
        var T = n.deletions;
        T === null ? (n.deletions = [h], n.flags |= pr) : T.push(h);
      }
      return n.child = x, x;
    }
    function Hg(t, n, s, l, c) {
      var h = n.mode, x = t.child, T = x.sibling, w = {
        mode: "hidden",
        children: s
      }, N;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (h & Yt) === at && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        n.child !== x
      ) {
        var U = n.child;
        N = U, N.childLanes = fe, N.pendingProps = w, n.mode & At && (N.actualDuration = 0, N.actualStartTime = -1, N.selfBaseDuration = x.selfBaseDuration, N.treeBaseDuration = x.treeBaseDuration), n.deletions = null;
      } else
        N = Bg(x, w), N.subtreeFlags = x.subtreeFlags & Ar;
      var I;
      return T !== null ? I = eo(T, l) : (I = Jl(l, h, c, null), I.flags |= Vt), I.return = n, N.return = n, N.sibling = I, n.child = N, I;
    }
    function _h(t, n, s, l) {
      l !== null && Xp(l), nc(n, t.child, null, s);
      var c = n.pendingProps, h = c.children, x = Vm(n, h);
      return x.flags |= Vt, n.memoizedState = null, x;
    }
    function GS(t, n, s, l, c) {
      var h = n.mode, x = {
        mode: "visible",
        children: s
      }, T = jm(x, h), w = Jl(l, h, c, null);
      return w.flags |= Vt, T.return = n, w.return = n, T.sibling = w, n.child = T, (n.mode & Yt) !== at && nc(n, t.child, null, c), w;
    }
    function XS(t, n, s) {
      return (t.mode & Yt) === at ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), t.lanes = xt) : Ut(n) ? t.lanes = ya : t.lanes = Zt, null;
    }
    function ZS(t, n, s, l, c) {
      if (iS(), (n.mode & Yt) === at)
        return _h(
          t,
          n,
          c,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Ut(s))
        return _h(
          t,
          n,
          c,
          // TODO: The server should serialize the error message so we can log it
          // here on the client. Or, in production, a hash/id that corresponds to
          // the error.
          new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.")
        );
      var h = pn(c, t.childLanes);
      if (Ma || h) {
        var x = Vh();
        if (x !== null) {
          var T = cf(x, c);
          if (T !== Dn && T !== l.retryLane) {
            l.retryLane = T;
            var w = en;
            Qn(t, T, w);
          }
        }
        return fv(), _h(t, n, c, new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
      } else if (Ct(s)) {
        n.flags |= _t, n.child = t.child;
        var N = HE.bind(null, t);
        return dn(s, N), null;
      } else {
        lS(n, s, l.treeContext);
        var U = n.pendingProps, I = U.children, Z = Vm(n, I);
        return Z.flags |= ir, Z;
      }
    }
    function Pg(t, n, s) {
      t.lanes = ot(t.lanes, n);
      var l = t.alternate;
      l !== null && (l.lanes = ot(l.lanes, n)), A(t.return, n, s);
    }
    function JS(t, n, s) {
      for (var l = n; l !== null; ) {
        if (l.tag === J) {
          var c = l.memoizedState;
          c !== null && Pg(l, s, t);
        } else if (l.tag === Ne)
          Pg(l, s, t);
        else if (l.child !== null) {
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
    function KS(t) {
      for (var n = t, s = null; n !== null; ) {
        var l = n.alternate;
        l !== null && Xd(l) === null && (s = n), n = n.sibling;
      }
      return s;
    }
    function $S(t) {
      if (t !== void 0 && t !== "forwards" && t !== "backwards" && t !== "together" && !Bm[t])
        if (Bm[t] = !0, typeof t == "string")
          switch (t.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', t, t.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', t, t.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', t);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', t);
    }
    function e_(t, n) {
      t !== void 0 && !gh[t] && (t !== "collapsed" && t !== "hidden" ? (gh[t] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', t)) : n !== "forwards" && n !== "backwards" && (gh[t] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', t)));
    }
    function Vg(t, n) {
      {
        var s = qt(t), l = !s && typeof ce(t) == "function";
        if (s || l) {
          var c = s ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, n, c), !1;
        }
      }
      return !0;
    }
    function t_(t, n) {
      if ((n === "forwards" || n === "backwards") && t !== void 0 && t !== null && t !== !1)
        if (qt(t)) {
          for (var s = 0; s < t.length; s++)
            if (!Vg(t[s], s))
              return;
        } else {
          var l = ce(t);
          if (typeof l == "function") {
            var c = l.call(t);
            if (c)
              for (var h = c.next(), x = 0; !h.done; h = c.next()) {
                if (!Vg(h.value, x))
                  return;
                x++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', n);
        }
    }
    function Im(t, n, s, l, c) {
      var h = t.memoizedState;
      h === null ? t.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: s,
        tailMode: c
      } : (h.isBackwards = n, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = s, h.tailMode = c);
    }
    function jg(t, n, s) {
      var l = n.pendingProps, c = l.revealOrder, h = l.tail, x = l.children;
      $S(c), e_(h, c), t_(x, c), jr(t, n, x, s);
      var T = Ra.current, w = im(T, Ff);
      if (w)
        T = am(T, Ff), n.flags |= _t;
      else {
        var N = t !== null && (t.flags & _t) !== _e;
        N && JS(n, n.child, s), T = ic(T);
      }
      if (ql(n, T), (n.mode & Yt) === at)
        n.memoizedState = null;
      else
        switch (c) {
          case "forwards": {
            var U = KS(n.child), I;
            U === null ? (I = n.child, n.child = null) : (I = U.sibling, U.sibling = null), Im(
              n,
              !1,
              // isBackwards
              I,
              U,
              h
            );
            break;
          }
          case "backwards": {
            var Z = null, ne = n.child;
            for (n.child = null; ne !== null; ) {
              var he = ne.alternate;
              if (he !== null && Xd(he) === null) {
                n.child = ne;
                break;
              }
              var Se = ne.sibling;
              ne.sibling = Z, Z = ne, ne = Se;
            }
            Im(
              n,
              !0,
              // isBackwards
              Z,
              null,
              // last
              h
            );
            break;
          }
          case "together": {
            Im(
              n,
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
            n.memoizedState = null;
        }
      return n.child;
    }
    function n_(t, n, s) {
      nm(n, n.stateNode.containerInfo);
      var l = n.pendingProps;
      return t === null ? n.child = nc(n, null, l, s) : jr(t, n, l, s), n.child;
    }
    var Ig = !1;
    function r_(t, n, s) {
      var l = n.type, c = l._context, h = n.pendingProps, x = n.memoizedProps, T = h.value;
      {
        "value" in h || Ig || (Ig = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = n.type.propTypes;
        w && Br(w, h, "prop", "Context.Provider");
      }
      if (p(n, c, T), x !== null) {
        var N = x.value;
        if (Pr(N, T)) {
          if (x.children === h.children && !zn())
            return Is(t, n, s);
        } else
          B(n, c, s);
      }
      var U = h.children;
      return jr(t, n, U, s), n.child;
    }
    var qg = !1;
    function i_(t, n, s) {
      var l = n.type;
      l._context === void 0 ? l !== l.Consumer && (qg || (qg = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var c = n.pendingProps, h = c.children;
      typeof h != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ve(n, s);
      var x = Ce(l);
      Xi(n);
      var T;
      return qf.current = n, Zi(!0), T = h(x), Zi(!1), Sa(), n.flags |= Un, jr(t, n, T, s), n.child;
    }
    function Eh() {
      Ma = !0;
    }
    function Is(t, n, s) {
      return t !== null && (n.dependencies = t.dependencies), yg(), Yh(n.lanes), pn(s, n.childLanes) ? (hS(t, n), n.child) : null;
    }
    function a_(t, n, s) {
      {
        var l = n.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (t.alternate = null, n.alternate = null, s.index = n.index, s.sibling = n.sibling, s.return = n.return, s.ref = n.ref, n === l.child)
          l.child = s;
        else {
          var c = l.child;
          if (c === null)
            throw new Error("Expected parent to have a child.");
          for (; c.sibling !== n; )
            if (c = c.sibling, c === null)
              throw new Error("Expected to find the previous sibling.");
          c.sibling = s;
        }
        var h = l.deletions;
        return h === null ? (l.deletions = [t], l.flags |= pr) : h.push(t), s.flags |= Vt, s;
      }
    }
    function qm(t, n) {
      var s = t.lanes;
      return !!pn(s, n);
    }
    function s_(t, n, s) {
      switch (n.tag) {
        case me:
          Ng(n), n.stateNode, tc();
          break;
        case ye:
          Vy(n);
          break;
        case se: {
          var l = n.type;
          ri(l) && Yi(n);
          break;
        }
        case Re:
          nm(n, n.stateNode.containerInfo);
          break;
        case ge: {
          var c = n.memoizedProps.value, h = n.type._context;
          p(n, h, c);
          break;
        }
        case re:
          {
            var x = pn(s, n.childLanes);
            x && (n.flags |= yt);
            {
              var T = n.stateNode;
              T.effectDuration = 0, T.passiveEffectDuration = 0;
            }
          }
          break;
        case J: {
          var w = n.memoizedState;
          if (w !== null) {
            if (w.dehydrated !== null)
              return ql(n, ic(Ra.current)), n.flags |= _t, null;
            var N = n.child, U = N.childLanes;
            if (pn(s, U))
              return Lg(t, n, s);
            ql(n, ic(Ra.current));
            var I = Is(t, n, s);
            return I !== null ? I.sibling : null;
          } else
            ql(n, ic(Ra.current));
          break;
        }
        case Ne: {
          var Z = (t.flags & _t) !== _e, ne = pn(s, n.childLanes);
          if (Z) {
            if (ne)
              return jg(t, n, s);
            n.flags |= _t;
          }
          var he = n.memoizedState;
          if (he !== null && (he.rendering = null, he.tail = null, he.lastEffect = null), ql(n, Ra.current), ne)
            break;
          return null;
        }
        case qe:
        case je:
          return n.lanes = fe, zg(t, n, s);
      }
      return Is(t, n, s);
    }
    function Yg(t, n, s) {
      if (n._debugNeedsRemount && t !== null)
        return a_(t, n, _v(n.type, n.key, n.pendingProps, n._debugOwner || null, n.mode, n.lanes));
      if (t !== null) {
        var l = t.memoizedProps, c = n.pendingProps;
        if (l !== c || zn() || // Force a re-render if the implementation changed due to hot reload:
        n.type !== t.type)
          Ma = !0;
        else {
          var h = qm(t, s);
          if (!h && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (n.flags & _t) === _e)
            return Ma = !1, s_(t, n, s);
          (t.flags & Mn) !== _e ? Ma = !0 : Ma = !1;
        }
      } else if (Ma = !1, Er() && K1(n)) {
        var x = n.index, T = $1();
        zy(n, T, x);
      }
      switch (n.lanes = fe, n.tag) {
        case Xe:
          return YS(t, n, n.type, s);
        case ze: {
          var w = n.elementType;
          return IS(t, n, w, s);
        }
        case oe: {
          var N = n.type, U = n.pendingProps, I = n.elementType === N ? U : oi(N, U);
          return km(t, n, N, I, s);
        }
        case se: {
          var Z = n.type, ne = n.pendingProps, he = n.elementType === Z ? ne : oi(Z, ne);
          return Ag(t, n, Z, he, s);
        }
        case me:
          return PS(t, n, s);
        case ye:
          return VS(t, n, s);
        case de:
          return jS(t, n);
        case J:
          return Lg(t, n, s);
        case Re:
          return n_(t, n, s);
        case H: {
          var Se = n.type, Ke = n.pendingProps, ft = n.elementType === Se ? Ke : oi(Se, Ke);
          return Tg(t, n, Se, ft, s);
        }
        case Ae:
          return BS(t, n, s);
        case Ve:
          return kS(t, n, s);
        case re:
          return HS(t, n, s);
        case ge:
          return r_(t, n, s);
        case Ze:
          return i_(t, n, s);
        case O: {
          var nt = n.type, un = n.pendingProps, on = oi(nt, un);
          if (n.type !== n.elementType) {
            var Q = nt.propTypes;
            Q && Br(
              Q,
              on,
              // Resolved for outer only
              "prop",
              Be(nt)
            );
          }
          return on = oi(nt.type, on), bg(t, n, nt, on, s);
        }
        case j:
          return wg(t, n, n.type, n.pendingProps, s);
        case Le: {
          var ie = n.type, q = n.pendingProps, Ee = n.elementType === ie ? q : oi(ie, q);
          return qS(t, n, ie, Ee, s);
        }
        case Ne:
          return jg(t, n, s);
        case Ie:
          break;
        case qe:
          return zg(t, n, s);
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function l_(t, n, s) {
      switch (qp(n), n.tag) {
        case se: {
          var l = n.type;
          ri(l) && gl(n);
          var c = n.flags;
          return c & Zn ? (n.flags = c & ~Zn | _t, (n.mode & At) !== at && Dm(n), n) : null;
        }
        case me: {
          rc(n), Mu(n), lm();
          var h = n.flags;
          return (h & Zn) !== _e && (h & _t) === _e ? (n.flags = h & ~Zn | _t, n) : null;
        }
        case ye:
          return rm(n), null;
        case J: {
          ac(n);
          {
            var x = n.memoizedState;
            if (x !== null && x.dehydrated !== null) {
              if (n.alternate === null)
                throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
              tc();
            }
          }
          var T = n.flags;
          return T & Zn ? (n.flags = T & ~Zn | _t, (n.mode & At) !== at && Dm(n), n) : null;
        }
        case Ne:
          return ac(n), null;
        case Re:
          return rc(n), null;
        case ge:
          var w = n.type._context;
          return S(w, n), null;
        case qe:
        case je:
          return cv(n), null;
        case dt:
          return null;
        default:
          return null;
      }
    }
    function Wg(t, n, s) {
      switch (qp(n), n.tag) {
        case se: {
          var l = n.type.childContextTypes;
          l != null && gl(n);
          break;
        }
        case me: {
          rc(n), Mu(n), lm();
          break;
        }
        case ye: {
          rm(n);
          break;
        }
        case Re:
          rc(n);
          break;
        case J:
          ac(n);
          break;
        case Ne:
          ac(n);
          break;
        case ge:
          var c = n.type._context;
          S(c, n);
          break;
        case qe:
        case je:
          cv(n);
          break;
      }
    }
    function Qg(t, n, s, l, c, h, x, T, w) {
      var N = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(s, N);
      } catch (U) {
        this.onError(U);
      }
    }
    var Gg = Qg;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ym = document.createElement("react");
      Gg = function(n, s, l, c, h, x, T, w, N) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var U = document.createEvent("Event"), I = !1, Z = !0, ne = window.event, he = Object.getOwnPropertyDescriptor(window, "event");
        function Se() {
          Ym.removeEventListener(ie, ft, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = ne);
        }
        var Ke = Array.prototype.slice.call(arguments, 3);
        function ft() {
          I = !0, Se(), s.apply(l, Ke), Z = !1;
        }
        var nt, un = !1, on = !1;
        function Q(q) {
          if (nt = q.error, un = !0, nt === null && q.colno === 0 && q.lineno === 0 && (on = !0), q.defaultPrevented && nt != null && typeof nt == "object")
            try {
              nt._suppressLogging = !0;
            } catch {
            }
        }
        var ie = "react-" + (n || "invokeguardedcallback");
        if (window.addEventListener("error", Q), Ym.addEventListener(ie, ft, !1), U.initEvent(ie, !1, !1), Ym.dispatchEvent(U), he && Object.defineProperty(window, "event", he), I && Z && (un ? on && (nt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nt)), window.removeEventListener("error", Q), !I)
          return Se(), Qg.apply(this, arguments);
      };
    }
    var u_ = Gg, Wf = !1, Rh = null, o_ = {
      onError: function(t) {
        Wf = !0, Rh = t;
      }
    };
    function Xg(t, n, s, l, c, h, x, T, w) {
      Wf = !1, Rh = null, u_.apply(o_, arguments);
    }
    function c_() {
      return Wf;
    }
    function Zg() {
      if (Wf) {
        var t = Rh;
        return Wf = !1, Rh = null, t;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var Jg = null;
    Jg = /* @__PURE__ */ new Set();
    var Ch = !1, Gl = !1, f_ = typeof WeakSet == "function" ? WeakSet : Set, Ue = null, fc = null, dc = null;
    function or(t) {
      Xg(null, function() {
        throw t;
      }), Zg();
    }
    var d_ = function(t, n) {
      if (n.props = t.memoizedProps, n.state = t.memoizedState, t.mode & At)
        try {
          na(), n.componentWillUnmount();
        } finally {
          ta(t);
        }
      else
        n.componentWillUnmount();
    };
    function Kg(t, n) {
      try {
        qs(Fn, t);
      } catch (s) {
        or(s), cr(t, n, s);
      }
    }
    function Wm(t, n, s) {
      try {
        d_(t, s);
      } catch (l) {
        or(l), cr(t, n, l);
      }
    }
    function h_(t, n, s) {
      try {
        s.componentDidMount();
      } catch (l) {
        or(l), cr(t, n, l);
      }
    }
    function $g(t, n) {
      try {
        t0(t);
      } catch (s) {
        or(s), cr(t, n, s);
      }
    }
    function Mh(t, n) {
      var s = t.ref;
      if (s !== null)
        if (typeof s == "function") {
          var l;
          try {
            if (pe && Me && t.mode & At)
              try {
                na(), l = s(null);
              } finally {
                ta(t);
              }
            else
              l = s(null);
          } catch (c) {
            or(c), cr(t, n, c);
          }
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(t));
        } else
          s.current = null;
    }
    function Th(t, n, s) {
      try {
        s();
      } catch (l) {
        or(l), cr(t, n, l);
      }
    }
    var e0 = !1;
    function p_(t, n) {
      ka(t.containerInfo), Ue = n, m_();
      var s = e0;
      return e0 = !1, s;
    }
    function m_() {
      for (; Ue !== null; ) {
        var t = Ue, n = t.child;
        (t.subtreeFlags & fu) !== _e && n !== null ? (ra(n, t), Ue = n) : v_();
      }
    }
    function v_() {
      for (; Ue !== null; ) {
        var t = Ue;
        Lt(t);
        try {
          y_(t);
        } catch (s) {
          or(s), cr(t, t.return, s);
        }
        jn();
        var n = t.sibling;
        if (n !== null) {
          ra(n, t.return), Ue = n;
          return;
        }
        Ue = t.return;
      }
    }
    function y_(t) {
      var n = t.alternate, s = t.flags;
      if ((s & Dr) !== _e) {
        switch (Lt(t), t.tag) {
          case oe:
          case H:
          case j:
            break;
          case se: {
            if (n !== null) {
              var l = n.memoizedProps, c = n.memoizedState, h = t.stateNode;
              t.type === t.elementType && !Xu && (h.props !== t.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(t) || "instance"), h.state !== t.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(t) || "instance"));
              var x = h.getSnapshotBeforeUpdate(t.elementType === t.type ? l : oi(t.type, l), c);
              {
                var T = Jg;
                x === void 0 && !T.has(t.type) && (T.add(t.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", We(t)));
              }
              h.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          }
          case me: {
            if (Fr) {
              var w = t.stateNode;
              C(w.containerInfo);
            }
            break;
          }
          case ye:
          case de:
          case Re:
          case Le:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        jn();
      }
    }
    function fi(t, n, s) {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var h = c.next, x = h;
        do {
          if ((x.tag & t) === t) {
            var T = x.destroy;
            x.destroy = void 0, T !== void 0 && ((t & lr) !== $a ? xr(n) : (t & Fn) !== $a && Uu(n), Th(n, s, T), (t & lr) !== $a ? Sf() : (t & Fn) !== $a && Qo());
          }
          x = x.next;
        } while (x !== h);
      }
    }
    function qs(t, n) {
      var s = n.updateQueue, l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var c = l.next, h = c;
        do {
          if ((h.tag & t) === t) {
            (t & lr) !== $a ? xf(n) : (t & Fn) !== $a && _f(n);
            var x = h.create;
            h.destroy = x(), (t & lr) !== $a ? Ou() : (t & Fn) !== $a && Ul();
            {
              var T = h.destroy;
              if (T !== void 0 && typeof T != "function") {
                var w = void 0;
                (h.tag & Fn) !== _e ? w = "useLayoutEffect" : (h.tag & Yl) !== _e ? w = "useInsertionEffect" : w = "useEffect";
                var N = void 0;
                T === null ? N = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof T.then == "function" ? N = `

It looks like you wrote ` + w + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + w + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : N = " You returned: " + T, g("%s must not return anything besides a function, which is used for clean-up.%s", w, N);
              }
            }
          }
          h = h.next;
        } while (h !== c);
      }
    }
    function g_(t, n) {
      if ((n.flags & yt) !== _e)
        switch (n.tag) {
          case re: {
            var s = n.stateNode.passiveEffectDuration, l = n.memoizedProps, c = l.id, h = l.onPostCommit, x = mg(), T = n.alternate === null ? "mount" : "update";
            pg() && (T = "nested-update"), typeof h == "function" && h(c, T, s, x);
            var w = n.return;
            e: for (; w !== null; ) {
              switch (w.tag) {
                case me:
                  var N = w.stateNode;
                  N.passiveEffectDuration += s;
                  break e;
                case re:
                  var U = w.stateNode;
                  U.passiveEffectDuration += s;
                  break e;
              }
              w = w.return;
            }
            break;
          }
        }
    }
    function x_(t, n, s, l) {
      if ((s.flags & hs) !== _e)
        switch (s.tag) {
          case oe:
          case H:
          case j: {
            if (!Gl)
              if (s.mode & At)
                try {
                  na(), qs(Fn | gn, s);
                } finally {
                  ta(s);
                }
              else
                qs(Fn | gn, s);
            break;
          }
          case se: {
            var c = s.stateNode;
            if (s.flags & yt && !Gl)
              if (n === null)
                if (s.type === s.elementType && !Xu && (c.props !== s.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(s) || "instance"), c.state !== s.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(s) || "instance")), s.mode & At)
                  try {
                    na(), c.componentDidMount();
                  } finally {
                    ta(s);
                  }
                else
                  c.componentDidMount();
              else {
                var h = s.elementType === s.type ? n.memoizedProps : oi(s.type, n.memoizedProps), x = n.memoizedState;
                if (s.type === s.elementType && !Xu && (c.props !== s.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(s) || "instance"), c.state !== s.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(s) || "instance")), s.mode & At)
                  try {
                    na(), c.componentDidUpdate(h, x, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ta(s);
                  }
                else
                  c.componentDidUpdate(h, x, c.__reactInternalSnapshotBeforeUpdate);
              }
            var T = s.updateQueue;
            T !== null && (s.type === s.elementType && !Xu && (c.props !== s.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(s) || "instance"), c.state !== s.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(s) || "instance")), _y(s, T, c));
            break;
          }
          case me: {
            var w = s.updateQueue;
            if (w !== null) {
              var N = null;
              if (s.child !== null)
                switch (s.child.tag) {
                  case ye:
                    N = Zr(s.child.stateNode);
                    break;
                  case se:
                    N = s.child.stateNode;
                    break;
                }
              _y(s, w, N);
            }
            break;
          }
          case ye: {
            var U = s.stateNode;
            if (n === null && s.flags & yt) {
              var I = s.type, Z = s.memoizedProps;
              Pa(U, I, Z, s);
            }
            break;
          }
          case de:
            break;
          case Re:
            break;
          case re: {
            {
              var ne = s.memoizedProps, he = ne.onCommit, Se = ne.onRender, Ke = s.stateNode.effectDuration, ft = mg(), nt = n === null ? "mount" : "update";
              pg() && (nt = "nested-update"), typeof Se == "function" && Se(s.memoizedProps.id, nt, s.actualDuration, s.treeBaseDuration, s.actualStartTime, ft);
              {
                typeof he == "function" && he(s.memoizedProps.id, nt, Ke, ft), FE(s);
                var un = s.return;
                e: for (; un !== null; ) {
                  switch (un.tag) {
                    case me:
                      var on = un.stateNode;
                      on.effectDuration += Ke;
                      break e;
                    case re:
                      var Q = un.stateNode;
                      Q.effectDuration += Ke;
                      break e;
                  }
                  un = un.return;
                }
              }
            }
            break;
          }
          case J: {
            w_(t, s);
            break;
          }
          case Ne:
          case Le:
          case Ie:
          case qe:
          case je:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Gl || s.flags & Li && t0(s);
    }
    function S_(t) {
      switch (t.tag) {
        case oe:
        case H:
        case j: {
          if (t.mode & At)
            try {
              na(), Kg(t, t.return);
            } finally {
              ta(t);
            }
          else
            Kg(t, t.return);
          break;
        }
        case se: {
          var n = t.stateNode;
          typeof n.componentDidMount == "function" && h_(t, t.return, n), $g(t, t.return);
          break;
        }
        case ye: {
          $g(t, t.return);
          break;
        }
      }
    }
    function __(t, n) {
      var s = null;
      if (Fr)
        for (var l = t; ; ) {
          if (l.tag === ye) {
            if (s === null) {
              s = l;
              var c = l.stateNode;
              n ? Yc(c) : Wc(l.stateNode, l.memoizedProps);
            }
          } else if (l.tag === de) {
            if (s === null) {
              var h = l.stateNode;
              n ? $r(h) : ll(h, l.memoizedProps);
            }
          } else if (!((l.tag === qe || l.tag === je) && l.memoizedState !== null && l !== t)) {
            if (l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
          }
          if (l === t)
            return;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              return;
            s === l && (s = null), l = l.return;
          }
          s === l && (s = null), l.sibling.return = l.return, l = l.sibling;
        }
    }
    function t0(t) {
      var n = t.ref;
      if (n !== null) {
        var s = t.stateNode, l;
        switch (t.tag) {
          case ye:
            l = Zr(s);
            break;
          default:
            l = s;
        }
        if (typeof n == "function") {
          var c;
          if (t.mode & At)
            try {
              na(), c = n(l);
            } finally {
              ta(t);
            }
          else
            c = n(l);
          typeof c == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(t));
        } else
          n.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", We(t)), n.current = l;
      }
    }
    function E_(t) {
      var n = t.ref;
      if (n !== null)
        if (typeof n == "function")
          if (t.mode & At)
            try {
              na(), n(null);
            } finally {
              ta(t);
            }
          else
            n(null);
        else
          n.current = null;
    }
    function n0(t, n, s) {
      switch (Cn(n), n.tag) {
        case oe:
        case H:
        case O:
        case j: {
          var l = n.updateQueue;
          if (l !== null) {
            var c = l.lastEffect;
            if (c !== null) {
              var h = c.next, x = h;
              do {
                var T = x, w = T.destroy, N = T.tag;
                w !== void 0 && ((N & Yl) !== $a ? Th(n, s, w) : (N & Fn) !== $a && (Uu(n), n.mode & At ? (na(), Th(n, s, w), ta(n)) : Th(n, s, w), Qo())), x = x.next;
              } while (x !== h);
            }
          }
          return;
        }
        case se: {
          Mh(n, s);
          var U = n.stateNode;
          typeof U.componentWillUnmount == "function" && Wm(n, s, U);
          return;
        }
        case ye: {
          Mh(n, s);
          return;
        }
        case Re: {
          Fr ? u0(t, n, s) : Jr && C_(n);
          return;
        }
        case Oe:
          return;
        case Ie:
          return;
      }
    }
    function r0(t, n, s) {
      for (var l = n; ; ) {
        if (n0(t, l, s), l.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        (!Fr || l.tag !== Re)) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function R_(t) {
      var n = t.alternate;
      n !== null && (n.return = null), t.return = null;
    }
    function i0(t) {
      var n = t.alternate;
      n !== null && (t.alternate = null, i0(n));
      {
        if (t.child = null, t.deletions = null, t.sibling = null, t.tag === ye) {
          var s = t.stateNode;
          s !== null && sl(s);
        }
        t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
    }
    function C_(t) {
      if (Jr) {
        var n = t.stateNode, s = n.containerInfo, l = W(s);
        Je(s, l);
      }
    }
    function M_(t) {
      if (Jr) {
        switch (t.tag) {
          case se:
          case ye:
          case de:
            return;
          case me:
          case Re: {
            var n = t.stateNode, s = n.containerInfo, l = n.pendingChildren;
            Je(s, l);
            return;
          }
        }
        throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function T_(t) {
      for (var n = t.return; n !== null; ) {
        if (a0(n))
          return n;
        n = n.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function a0(t) {
      return t.tag === ye || t.tag === me || t.tag === Re;
    }
    function s0(t) {
      var n = t;
      e: for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || a0(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== ye && n.tag !== de && n.tag !== Oe; ) {
          if (n.flags & Vt || n.child === null || n.tag === Re)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & Vt))
          return n.stateNode;
      }
    }
    function l0(t) {
      if (Fr) {
        var n = T_(t);
        switch (n.tag) {
          case ye: {
            var s = n.stateNode;
            n.flags & Fa && (gs(s), n.flags &= ~Fa);
            var l = s0(t);
            Gm(t, l, s);
            break;
          }
          case me:
          case Re: {
            var c = n.stateNode.containerInfo, h = s0(t);
            Qm(t, h, c);
            break;
          }
          default:
            throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
    }
    function Qm(t, n, s) {
      var l = t.tag, c = l === ye || l === de;
      if (c) {
        var h = t.stateNode;
        n ? vr(s, h, n) : ha(s, h);
      } else if (l !== Re) {
        var x = t.child;
        if (x !== null) {
          Qm(x, n, s);
          for (var T = x.sibling; T !== null; )
            Qm(T, n, s), T = T.sibling;
        }
      }
    }
    function Gm(t, n, s) {
      var l = t.tag, c = l === ye || l === de;
      if (c) {
        var h = t.stateNode;
        n ? Or(s, h, n) : vo(s, h);
      } else if (l !== Re) {
        var x = t.child;
        if (x !== null) {
          Gm(x, n, s);
          for (var T = x.sibling; T !== null; )
            Gm(T, n, s), T = T.sibling;
        }
      }
    }
    function u0(t, n, s) {
      for (var l = n, c = !1, h, x; ; ) {
        if (!c) {
          var T = l.return;
          e: for (; ; ) {
            if (T === null)
              throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
            var w = T.stateNode;
            switch (T.tag) {
              case ye:
                h = w, x = !1;
                break e;
              case me:
                h = w.containerInfo, x = !0;
                break e;
              case Re:
                h = w.containerInfo, x = !0;
                break e;
            }
            T = T.return;
          }
          c = !0;
        }
        if (l.tag === ye || l.tag === de)
          r0(t, l, s), x ? ys(h, l.stateNode) : Va(h, l.stateNode);
        else if (l.tag === Oe)
          x ? Sd(h, l.stateNode) : xd(h, l.stateNode);
        else if (l.tag === Re) {
          if (l.child !== null) {
            h = l.stateNode.containerInfo, x = !0, l.child.return = l, l = l.child;
            continue;
          }
        } else if (n0(t, l, s), l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            return;
          l = l.return, l.tag === Re && (c = !1);
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function b_(t, n, s) {
      Fr ? u0(t, n, s) : r0(t, n, s), R_(n);
    }
    function Xm(t, n) {
      if (!Fr) {
        switch (n.tag) {
          case oe:
          case H:
          case O:
          case j: {
            if (fi(Yl | gn, n, n.return), qs(Yl | gn, n), n.mode & At)
              try {
                na(), fi(Fn | gn, n, n.return);
              } finally {
                ta(n);
              }
            else
              fi(Fn | gn, n, n.return);
            return;
          }
          case re:
            return;
          case J: {
            o0(n), bh(n);
            return;
          }
          case Ne: {
            bh(n);
            return;
          }
          case me: {
            if (bn && t !== null) {
              var s = t.memoizedState;
              if (s.isDehydrated) {
                var l = n.stateNode;
                xo(l.containerInfo);
              }
            }
            break;
          }
          case qe:
          case je:
            return;
        }
        M_(n);
        return;
      }
      switch (n.tag) {
        case oe:
        case H:
        case O:
        case j: {
          if (fi(Yl | gn, n, n.return), qs(Yl | gn, n), n.mode & At)
            try {
              na(), fi(Fn | gn, n, n.return);
            } finally {
              ta(n);
            }
          else
            fi(Fn | gn, n, n.return);
          return;
        }
        case se:
          return;
        case ye: {
          var c = n.stateNode;
          if (c != null) {
            var h = n.memoizedProps, x = t !== null ? t.memoizedProps : h, T = n.type, w = n.updateQueue;
            n.updateQueue = null, w !== null && yo(c, w, T, x, h, n);
          }
          return;
        }
        case de: {
          if (n.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var N = n.stateNode, U = n.memoizedProps, I = t !== null ? t.memoizedProps : U;
          Kr(N, I, U);
          return;
        }
        case me: {
          if (bn && t !== null) {
            var Z = t.memoizedState;
            if (Z.isDehydrated) {
              var ne = n.stateNode;
              xo(ne.containerInfo);
            }
          }
          return;
        }
        case re:
          return;
        case J: {
          o0(n), bh(n);
          return;
        }
        case Ne: {
          bh(n);
          return;
        }
        case Le:
          return;
      }
      throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function o0(t) {
      t.memoizedState;
    }
    function w_(t, n) {
      if (bn) {
        var s = n.memoizedState;
        if (s === null) {
          var l = n.alternate;
          if (l !== null) {
            var c = l.memoizedState;
            if (c !== null) {
              var h = c.dehydrated;
              h !== null && So(h);
            }
          }
        }
      }
    }
    function bh(t) {
      var n = t.updateQueue;
      if (n !== null) {
        t.updateQueue = null;
        var s = t.stateNode;
        s === null && (s = t.stateNode = new f_()), n.forEach(function(l) {
          var c = PE.bind(null, t, l);
          if (!s.has(l)) {
            if (s.add(l), gr)
              if (fc !== null && dc !== null)
                nd(dc, fc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(c, c);
          }
        });
      }
    }
    function z_(t) {
      Fr && gs(t.stateNode);
    }
    function D_(t, n, s) {
      fc = s, dc = t, Ue = n, A_(t, s), fc = null, dc = null;
    }
    function A_(t, n) {
      for (; Ue !== null; ) {
        var s = Ue, l = s.deletions;
        if (l !== null)
          for (var c = 0; c < l.length; c++) {
            var h = l[c];
            try {
              b_(t, h, s);
            } catch (T) {
              or(T), cr(h, s, T);
            }
          }
        var x = s.child;
        (s.subtreeFlags & ds) !== _e && x !== null ? (ra(x, s), Ue = x) : N_(t, n);
      }
    }
    function N_(t, n) {
      for (; Ue !== null; ) {
        var s = Ue;
        Lt(s);
        try {
          F_(s, t, n);
        } catch (c) {
          or(c), cr(s, s.return, c);
        }
        jn();
        var l = s.sibling;
        if (l !== null) {
          ra(l, s.return), Ue = l;
          return;
        }
        Ue = s.return;
      }
    }
    function F_(t, n, s) {
      var l = t.flags;
      if (l & Fa && z_(t), l & Li) {
        var c = t.alternate;
        c !== null && E_(c);
      }
      if (l & Bi)
        switch (t.tag) {
          case J: {
            var h = t.memoizedState, x = h !== null;
            if (x) {
              var T = t.alternate, w = T !== null && T.memoizedState !== null;
              w || ME();
            }
            break;
          }
          case qe: {
            var N = t.memoizedState, U = N !== null, I = t.alternate, Z = I !== null && I.memoizedState !== null, ne = t;
            Fr && __(ne, U);
            {
              if (U && !Z && (ne.mode & Yt) !== at) {
                Ue = ne;
                for (var he = ne.child; he !== null; )
                  Ue = he, U_(he), he = he.sibling;
              }
              break;
            }
          }
        }
      var Se = l & (Vt | yt | ir);
      switch (Se) {
        case Vt: {
          l0(t), t.flags &= ~Vt;
          break;
        }
        case $s: {
          l0(t), t.flags &= ~Vt;
          var Ke = t.alternate;
          Xm(Ke, t);
          break;
        }
        case ir: {
          t.flags &= ~ir;
          break;
        }
        case oo: {
          t.flags &= ~ir;
          var ft = t.alternate;
          Xm(ft, t);
          break;
        }
        case yt: {
          var nt = t.alternate;
          Xm(nt, t);
          break;
        }
      }
    }
    function O_(t, n, s) {
      fc = s, dc = n, Ue = t, c0(t, n, s), fc = null, dc = null;
    }
    function c0(t, n, s) {
      for (var l = (t.mode & Yt) !== at; Ue !== null; ) {
        var c = Ue, h = c.child;
        if (c.tag === qe && l) {
          var x = c.memoizedState !== null, T = x || Ch;
          if (T) {
            Zm(t, n, s);
            continue;
          } else {
            var w = c.alternate, N = w !== null && w.memoizedState !== null, U = N || Gl, I = Ch, Z = Gl;
            Ch = T, Gl = U, Gl && !Z && (Ue = c, L_(c));
            for (var ne = h; ne !== null; )
              Ue = ne, c0(
                ne,
                // New root; bubble back up to here and stop.
                n,
                s
              ), ne = ne.sibling;
            Ue = c, Ch = I, Gl = Z, Zm(t, n, s);
            continue;
          }
        }
        (c.subtreeFlags & hs) !== _e && h !== null ? (ra(h, c), Ue = h) : Zm(t, n, s);
      }
    }
    function Zm(t, n, s) {
      for (; Ue !== null; ) {
        var l = Ue;
        if ((l.flags & hs) !== _e) {
          var c = l.alternate;
          Lt(l);
          try {
            x_(n, c, l, s);
          } catch (x) {
            or(x), cr(l, l.return, x);
          }
          jn();
        }
        if (l === t) {
          Ue = null;
          return;
        }
        var h = l.sibling;
        if (h !== null) {
          ra(h, l.return), Ue = h;
          return;
        }
        Ue = l.return;
      }
    }
    function U_(t) {
      for (; Ue !== null; ) {
        var n = Ue, s = n.child;
        switch (n.tag) {
          case oe:
          case H:
          case O:
          case j: {
            if (n.mode & At)
              try {
                na(), fi(Fn, n, n.return);
              } finally {
                ta(n);
              }
            else
              fi(Fn, n, n.return);
            break;
          }
          case se: {
            Mh(n, n.return);
            var l = n.stateNode;
            typeof l.componentWillUnmount == "function" && Wm(n, n.return, l);
            break;
          }
          case ye: {
            Mh(n, n.return);
            break;
          }
          case qe: {
            var c = n.memoizedState !== null;
            if (c) {
              f0(t);
              continue;
            }
            break;
          }
        }
        s !== null ? (s.return = n, Ue = s) : f0(t);
      }
    }
    function f0(t) {
      for (; Ue !== null; ) {
        var n = Ue;
        if (n === t) {
          Ue = null;
          return;
        }
        var s = n.sibling;
        if (s !== null) {
          s.return = n.return, Ue = s;
          return;
        }
        Ue = n.return;
      }
    }
    function L_(t) {
      for (; Ue !== null; ) {
        var n = Ue, s = n.child;
        if (n.tag === qe) {
          var l = n.memoizedState !== null;
          if (l) {
            d0(t);
            continue;
          }
        }
        s !== null ? (s.return = n, Ue = s) : d0(t);
      }
    }
    function d0(t) {
      for (; Ue !== null; ) {
        var n = Ue;
        Lt(n);
        try {
          S_(n);
        } catch (l) {
          or(l), cr(n, n.return, l);
        }
        if (jn(), n === t) {
          Ue = null;
          return;
        }
        var s = n.sibling;
        if (s !== null) {
          s.return = n.return, Ue = s;
          return;
        }
        Ue = n.return;
      }
    }
    function B_(t, n) {
      Ue = n, k_(n, t);
    }
    function k_(t, n) {
      for (; Ue !== null; ) {
        var s = Ue, l = s.child;
        (s.subtreeFlags & Ua) !== _e && l !== null ? (ra(l, s), Ue = l) : H_(t, n);
      }
    }
    function H_(t, n) {
      for (; Ue !== null; ) {
        var s = Ue;
        if ((s.flags & rr) !== _e) {
          Lt(s);
          try {
            P_(n, s);
          } catch (c) {
            or(c), cr(s, s.return, c);
          }
          jn();
        }
        if (s === t) {
          Ue = null;
          return;
        }
        var l = s.sibling;
        if (l !== null) {
          ra(l, s.return), Ue = l;
          return;
        }
        Ue = s.return;
      }
    }
    function P_(t, n) {
      switch (n.tag) {
        case oe:
        case H:
        case j: {
          if (n.mode & At) {
            zm();
            try {
              qs(lr | gn, n);
            } finally {
              wm(n);
            }
          } else
            qs(lr | gn, n);
          break;
        }
      }
    }
    function V_(t) {
      Ue = t, j_();
    }
    function j_() {
      for (; Ue !== null; ) {
        var t = Ue, n = t.child;
        if ((Ue.flags & pr) !== _e) {
          var s = t.deletions;
          if (s !== null) {
            for (var l = 0; l < s.length; l++) {
              var c = s[l];
              Ue = c, Y_(c, t);
            }
            {
              var h = t.alternate;
              if (h !== null) {
                var x = h.child;
                if (x !== null) {
                  h.child = null;
                  do {
                    var T = x.sibling;
                    x.sibling = null, x = T;
                  } while (x !== null);
                }
              }
            }
            Ue = t;
          }
        }
        (t.subtreeFlags & Ua) !== _e && n !== null ? (ra(n, t), Ue = n) : I_();
      }
    }
    function I_() {
      for (; Ue !== null; ) {
        var t = Ue;
        (t.flags & rr) !== _e && (Lt(t), q_(t), jn());
        var n = t.sibling;
        if (n !== null) {
          ra(n, t.return), Ue = n;
          return;
        }
        Ue = t.return;
      }
    }
    function q_(t) {
      switch (t.tag) {
        case oe:
        case H:
        case j: {
          t.mode & At ? (zm(), fi(lr | gn, t, t.return), wm(t)) : fi(lr | gn, t, t.return);
          break;
        }
      }
    }
    function Y_(t, n) {
      for (; Ue !== null; ) {
        var s = Ue;
        Lt(s), Q_(s, n), jn();
        var l = s.child;
        l !== null ? (ra(l, s), Ue = l) : W_(t);
      }
    }
    function W_(t) {
      for (; Ue !== null; ) {
        var n = Ue, s = n.sibling, l = n.return;
        if (i0(n), n === t) {
          Ue = null;
          return;
        }
        if (s !== null) {
          ra(s, l), Ue = s;
          return;
        }
        Ue = l;
      }
    }
    function Q_(t, n) {
      switch (t.tag) {
        case oe:
        case H:
        case j: {
          t.mode & At ? (zm(), fi(lr, t, n), wm(t)) : fi(lr, t, n);
          break;
        }
      }
    }
    var h0 = !1;
    function ra(t, n) {
      !h0 && t.return !== n && (h0 = !0, g("Internal React error: Return pointer is inconsistent with parent.")), t.return = n;
    }
    function G_(t) {
      switch (t.tag) {
        case oe:
        case H:
        case j: {
          try {
            qs(Fn | gn, t);
          } catch (s) {
            or(s), cr(t, t.return, s);
          }
          break;
        }
        case se: {
          var n = t.stateNode;
          try {
            n.componentDidMount();
          } catch (s) {
            or(s), cr(t, t.return, s);
          }
          break;
        }
      }
    }
    function X_(t) {
      switch (t.tag) {
        case oe:
        case H:
        case j: {
          try {
            qs(lr | gn, t);
          } catch (n) {
            or(n), cr(t, t.return, n);
          }
          break;
        }
      }
    }
    function Z_(t) {
      switch (t.tag) {
        case oe:
        case H:
        case j: {
          try {
            fi(Fn | gn, t, t.return);
          } catch (s) {
            or(s), cr(t, t.return, s);
          }
          break;
        }
        case se: {
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Wm(t, t.return, n);
          break;
        }
      }
    }
    function J_(t) {
      switch (t.tag) {
        case oe:
        case H:
        case j:
          try {
            fi(lr | gn, t, t.return);
          } catch (n) {
            or(n), cr(t, t.return, n);
          }
      }
    }
    var wh = 0, zh = 1, Dh = 2, Ah = 3, Nh = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Qf = Symbol.for;
      wh = Qf("selector.component"), zh = Qf("selector.has_pseudo_class"), Dh = Qf("selector.role"), Ah = Qf("selector.test_id"), Nh = Qf("selector.text");
    }
    function K_(t) {
      return {
        $$typeof: wh,
        value: t
      };
    }
    function $_(t) {
      return {
        $$typeof: zh,
        value: t
      };
    }
    function eE(t) {
      return {
        $$typeof: Dh,
        value: t
      };
    }
    function tE(t) {
      return {
        $$typeof: Nh,
        value: t
      };
    }
    function nE(t) {
      return {
        $$typeof: Ah,
        value: t
      };
    }
    function Jm(t) {
      var n = al(t);
      if (n != null) {
        if (typeof n.memoizedProps["data-testname"] != "string")
          throw new Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");
        return n;
      } else {
        var s = pu(t);
        if (s === null)
          throw new Error("Could not find React container within specified host subtree.");
        return s.stateNode.current;
      }
    }
    function Km(t, n) {
      switch (n.$$typeof) {
        case wh:
          if (t.type === n.value)
            return !0;
          break;
        case zh:
          return rE(t, n.value);
        case Dh:
          if (t.tag === ye) {
            var s = t.stateNode;
            if (mu(s, n.value))
              return !0;
          }
          break;
        case Nh:
          if (t.tag === ye || t.tag === de) {
            var l = mo(t);
            if (l !== null && l.indexOf(n.value) >= 0)
              return !0;
          }
          break;
        case Ah:
          if (t.tag === ye) {
            var c = t.memoizedProps["data-testname"];
            if (typeof c == "string" && c.toLowerCase() === n.value.toLowerCase())
              return !0;
          }
          break;
        default:
          throw new Error("Invalid selector type specified.");
      }
      return !1;
    }
    function $m(t) {
      switch (t.$$typeof) {
        case wh:
          var n = Be(t.value) || "Unknown";
          return "<" + n + ">";
        case zh:
          return ":has(" + ($m(t) || "") + ")";
        case Dh:
          return '[role="' + t.value + '"]';
        case Nh:
          return '"' + t.value + '"';
        case Ah:
          return '[data-testname="' + t.value + '"]';
        default:
          throw new Error("Invalid selector type specified.");
      }
    }
    function p0(t, n) {
      for (var s = [], l = [t, 0], c = 0; c < l.length; ) {
        var h = l[c++], x = l[c++], T = n[x];
        if (!(h.tag === ye && nn(h))) {
          for (; T != null && Km(h, T); )
            x++, T = n[x];
          if (x === n.length)
            s.push(h);
          else
            for (var w = h.child; w !== null; )
              l.push(w, x), w = w.sibling;
        }
      }
      return s;
    }
    function rE(t, n) {
      for (var s = [t, 0], l = 0; l < s.length; ) {
        var c = s[l++], h = s[l++], x = n[h];
        if (!(c.tag === ye && nn(c))) {
          for (; x != null && Km(c, x); )
            h++, x = n[h];
          if (h === n.length)
            return !0;
          for (var T = c.child; T !== null; )
            s.push(T, h), T = T.sibling;
        }
      }
      return !1;
    }
    function Fh(t, n) {
      if (!Si)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Jm(t), l = p0(s, n), c = [], h = Array.from(l), x = 0; x < h.length; ) {
        var T = h[x++];
        if (T.tag === ye) {
          if (nn(T))
            continue;
          c.push(T.stateNode);
        } else
          for (var w = T.child; w !== null; )
            h.push(w), w = w.sibling;
      }
      return c;
    }
    function iE(t, n) {
      if (!Si)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Jm(t), l = 0, c = [], h = [s, 0], x = 0; x < h.length; ) {
        var T = h[x++], w = h[x++], N = n[w];
        if (!(T.tag === ye && nn(T)) && (Km(T, N) && (c.push($m(N)), w++, w > l && (l = w)), w < n.length))
          for (var U = T.child; U !== null; )
            h.push(U, w), U = U.sibling;
      }
      if (l < n.length) {
        for (var I = [], Z = l; Z < n.length; Z++)
          I.push($m(n[Z]));
        return `findAllNodes was able to match part of the selector:
` + ("  " + c.join(" > ") + `

`) + `No matching component was found for:
` + ("  " + I.join(" > "));
      }
      return null;
    }
    function aE(t, n) {
      if (!Si)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Fh(t, n), l = [], c = 0; c < s.length; c++)
        l.push(Ic(s[c]));
      for (var h = l.length - 1; h > 0; h--)
        for (var x = l[h], T = x.x, w = T + x.width, N = x.y, U = N + x.height, I = h - 1; I >= 0; I--)
          if (h !== I) {
            var Z = l[I], ne = Z.x, he = ne + Z.width, Se = Z.y, Ke = Se + Z.height;
            if (T >= ne && N >= Se && w <= he && U <= Ke) {
              l.splice(h, 1);
              break;
            } else if (T === ne && x.width === Z.width && !(Ke < N) && !(Se > U)) {
              Se > N && (Z.height += Se - N, Z.y = N), Ke < U && (Z.height = U - Se), l.splice(h, 1);
              break;
            } else if (N === Se && x.height === Z.height && !(he < T) && !(ne > w)) {
              ne > T && (Z.width += ne - T, Z.x = T), he < w && (Z.width = w - ne), l.splice(h, 1);
              break;
            }
          }
      return l;
    }
    function sE(t, n) {
      if (!Si)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Jm(t), l = p0(s, n), c = Array.from(l), h = 0; h < c.length; ) {
        var x = c[h++];
        if (!nn(x)) {
          if (x.tag === ye) {
            var T = x.stateNode;
            if (qc(T))
              return !0;
          }
          for (var w = x.child; w !== null; )
            c.push(w), w = w.sibling;
        }
      }
      return !1;
    }
    var Oh = [];
    function lE() {
      Si && Oh.forEach(function(t) {
        return t();
      });
    }
    function uE(t, n, s, l) {
      if (!Si)
        throw new Error("Test selector API is not supported by this renderer.");
      var c = Fh(t, n), h = vu(c, s, l), x = h.disconnect, T = h.observe, w = h.unobserve, N = function() {
        var U = Fh(t, n);
        c.forEach(function(I) {
          U.indexOf(I) < 0 && w(I);
        }), U.forEach(function(I) {
          c.indexOf(I) < 0 && T(I);
        });
      };
      return Oh.push(N), {
        disconnect: function() {
          var U = Oh.indexOf(N);
          U >= 0 && Oh.splice(U, 1), x();
        }
      };
    }
    var oE = m.ReactCurrentActQueue;
    function cE(t) {
      {
        var n = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), s = typeof jest < "u";
        return da && s && n !== !1;
      }
    }
    function m0() {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !t && oE.current !== null && g("The current testing environment is not configured to support act(...)"), t;
      }
    }
    var fE = Math.ceil, ev = m.ReactCurrentDispatcher, tv = m.ReactCurrentOwner, xn = m.ReactCurrentBatchConfig, Ta = m.ReactCurrentActQueue, Bn = (
      /*             */
      0
    ), nv = (
      /*               */
      1
    ), Mr = (
      /*                */
      2
    ), ba = (
      /*                */
      4
    ), Ys = 0, Gf = 1, Zu = 2, Uh = 3, Xf = 4, v0 = 5, rv = 6, vt = Bn, Tr = null, Sn = null, Yn = fe, rs = fe, iv = ji(fe), Wn = Ys, Zf = null, Lh = fe, Jf = fe, Bh = fe, Kf = null, di = null, av = 0, y0 = 500, g0 = 1 / 0, dE = 500;
    function hc() {
      g0 = mn() + dE;
    }
    function x0() {
      return g0;
    }
    var kh = !1, sv = null, pc = null, Ju = !1, Ws = null, $f = fe, lv = [], hE = 50, ed = 0, uv = null, pE = 50, Hh = 0, td = en, Ph = fe;
    function Vh() {
      return Tr;
    }
    function Ir() {
      return (vt & (Mr | ba)) !== Bn ? mn() : (td !== en || (td = mn()), td);
    }
    function Xl(t) {
      var n = t.mode;
      if ((n & Yt) === at)
        return xt;
      if ((vt & Mr) !== Bn && Yn !== fe)
        return bl(Yn);
      var s = Mf() !== Bd;
      if (s) {
        if (xn.transition !== null) {
          var l = xn.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(t);
        }
        return Ph === Dn && (Ph = wd()), Ph;
      }
      var c = kr();
      if (c !== Dn)
        return c;
      var h = jc();
      return h;
    }
    function mE(t) {
      var n = t.mode;
      return (n & Yt) === at ? xt : zd();
    }
    function Qn(t, n, s) {
      jE();
      var l = jh(t, n);
      return l === null ? null : (Ds(l, n, s), (vt & Mr) !== fe && l === Tr ? YE(t) : (gr && ff(l, t, n), WE(t), l === Tr && ((vt & Mr) === Bn && (Jf = ot(Jf, n)), Wn === Xf && Zl(l, Yn)), hi(l, s), n === xt && vt === Bn && (t.mode & Yt) === at && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ta.isBatchingLegacy && (hc(), Cf())), l);
    }
    function vE(t, n, s) {
      var l = t.current;
      l.lanes = n, Ds(t, n, s), hi(t, s);
    }
    function jh(t, n) {
      t.lanes = ot(t.lanes, n);
      var s = t.alternate;
      s !== null && (s.lanes = ot(s.lanes, n)), s === null && (t.flags & (Vt | ir)) !== _e && F0(t);
      for (var l = t, c = t.return; c !== null; )
        c.childLanes = ot(c.childLanes, n), s = c.alternate, s !== null ? s.childLanes = ot(s.childLanes, n) : (c.flags & (Vt | ir)) !== _e && F0(t), l = c, c = c.return;
      if (l.tag === me) {
        var h = l.stateNode;
        return h;
      } else
        return null;
    }
    function S0(t, n) {
      return (
        // TODO: Optimize slightly by comparing to root that fiber belongs to.
        // Requires some refactoring. Not a big deal though since it's rare for
        // concurrent apps to have more than a single root.
        Tr !== null && (t.mode & Yt) !== at && // If this is a render phase update (i.e. UNSAFE_componentWillReceiveProps),
        // then don't treat this as an interleaved update. This pattern is
        // accompanied by a warning but we haven't fully deprecated it yet. We can
        // remove once the deferRenderPhaseUpdateToNextBatch flag is enabled.
        (vt & Mr) === Bn
      );
    }
    function hi(t, n) {
      var s = t.callbackNode;
      Td(t, n);
      var l = Nu(t, t === Tr ? Yn : fe);
      if (l === fe) {
        s !== null && U0(s), t.callbackNode = null, t.callbackPriority = Dn;
        return;
      }
      var c = Qi(l), h = t.callbackPriority;
      if (h === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ta.current !== null && s !== pv)) {
        s == null && h !== xt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      s != null && U0(s);
      var x;
      if (c === xt)
        t.tag === Cs ? (Ta.isBatchingLegacy !== null && (Ta.didScheduleLegacyUpdate = !0), Ud(R0.bind(null, t))) : _a(R0.bind(null, t)), bt ? Ta.current !== null ? Ta.current.push(li) : hu(function() {
          vt === Bn && li();
        }) : Xh(Os, li), x = null;
      else {
        var T;
        switch (pf(l)) {
          case bi:
            T = Os;
            break;
          case Dl:
            T = Fu;
            break;
          case Al:
            T = xa;
            break;
          case qo:
            T = Nl;
            break;
          default:
            T = xa;
            break;
        }
        x = Xh(T, _0.bind(null, t));
      }
      t.callbackPriority = c, t.callbackNode = x;
    }
    function _0(t, n) {
      if (wS(), td = en, Ph = fe, (vt & (Mr | ba)) !== Bn)
        throw new Error("Should not already be working.");
      var s = t.callbackNode, l = is();
      if (l && t.callbackNode !== s)
        return null;
      var c = Nu(t, t === Tr ? Yn : fe);
      if (c === fe)
        return null;
      var h = !ws(t, c) && !bd(t, c) && !n, x = h ? DE(t, c) : Wh(t, c);
      if (x !== Ys) {
        if (x === Zu) {
          var T = Ho(t);
          T !== fe && (c = T, x = ov(t, T));
        }
        if (x === Gf) {
          var w = Zf;
          throw Ku(t, fe), Zl(t, c), hi(t, mn()), w;
        }
        if (x === rv)
          Zl(t, c);
        else {
          var N = !ws(t, c), U = t.current.alternate;
          if (N && !gE(U)) {
            if (x = Wh(t, c), x === Zu) {
              var I = Ho(t);
              I !== fe && (c = I, x = ov(t, I));
            }
            if (x === Gf) {
              var Z = Zf;
              throw Ku(t, fe), Zl(t, c), hi(t, mn()), Z;
            }
          }
          t.finishedWork = U, t.finishedLanes = c, yE(t, x, c);
        }
      }
      return hi(t, mn()), t.callbackNode === s ? _0.bind(null, t) : null;
    }
    function ov(t, n) {
      var s = Kf;
      if (Za(t)) {
        var l = Ku(t, n);
        l.flags |= Gr, Lr(t.containerInfo);
      }
      var c = Wh(t, n);
      if (c !== Zu) {
        var h = di;
        di = s, h !== null && E0(h);
      }
      return c;
    }
    function E0(t) {
      di === null ? di = t : di.push.apply(di, t);
    }
    function yE(t, n, s) {
      switch (n) {
        case Ys:
        case Gf:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zu: {
          $u(t, di);
          break;
        }
        case Uh: {
          if (Zl(t, s), of(s) && // do not delay if we're inside an act() scope
          !L0()) {
            var l = av + y0 - mn();
            if (l > 10) {
              var c = Nu(t, fe);
              if (c !== fe)
                break;
              var h = t.suspendedLanes;
              if (!wl(h, s)) {
                Ir(), Ad(t, h);
                break;
              }
              t.timeoutHandle = po($u.bind(null, t, di), l);
              break;
            }
          }
          $u(t, di);
          break;
        }
        case Xf: {
          if (Zl(t, s), Vo(s))
            break;
          if (!L0()) {
            var x = Cd(t, s), T = x, w = mn() - T, N = VE(w) - w;
            if (N > 10) {
              t.timeoutHandle = po($u.bind(null, t, di), N);
              break;
            }
          }
          $u(t, di);
          break;
        }
        case v0: {
          $u(t, di);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function gE(t) {
      for (var n = t; ; ) {
        if (n.flags & el) {
          var s = n.updateQueue;
          if (s !== null) {
            var l = s.stores;
            if (l !== null)
              for (var c = 0; c < l.length; c++) {
                var h = l[c], x = h.getSnapshot, T = h.value;
                try {
                  if (!Pr(x(), T))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var w = n.child;
        if (n.subtreeFlags & el && w !== null) {
          w.return = n, n = w;
          continue;
        }
        if (n === t)
          return !0;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return !0;
    }
    function Zl(t, n) {
      n = zs(n, Bh), n = zs(n, Jf), Dd(t, n);
    }
    function R0(t) {
      if (zS(), (vt & (Mr | ba)) !== Bn)
        throw new Error("Should not already be working.");
      is();
      var n = Nu(t, fe);
      if (!pn(n, xt))
        return hi(t, mn()), null;
      var s = Wh(t, n);
      if (t.tag !== Cs && s === Zu) {
        var l = Ho(t);
        l !== fe && (n = l, s = ov(t, l));
      }
      if (s === Gf) {
        var c = Zf;
        throw Ku(t, fe), Zl(t, n), hi(t, mn()), c;
      }
      if (s === rv)
        throw new Error("Root did not complete. This is a bug in React.");
      var h = t.current.alternate;
      return t.finishedWork = h, t.finishedLanes = n, $u(t, di), hi(t, mn()), null;
    }
    function xE(t, n) {
      n !== fe && (Ns(t, ot(n, xt)), hi(t, mn()), (vt & (Mr | ba)) === Bn && (hc(), li()));
    }
    function SE(t) {
      var n = kr(), s = xn.transition;
      try {
        return xn.transition = null, An(Al), t();
      } finally {
        An(n), xn.transition = s;
      }
    }
    function _E(t, n) {
      var s = vt;
      vt |= nv;
      try {
        return t(n);
      } finally {
        vt = s, vt === Bn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ta.isBatchingLegacy && (hc(), Cf());
      }
    }
    function EE(t, n, s, l, c) {
      var h = kr(), x = xn.transition;
      try {
        return xn.transition = null, An(bi), t(n, s, l, c);
      } finally {
        An(h), xn.transition = x, vt === Bn && hc();
      }
    }
    function Ih(t) {
      Ws !== null && Ws.tag === Cs && (vt & (Mr | ba)) === Bn && is();
      var n = vt;
      vt |= nv;
      var s = xn.transition, l = kr();
      try {
        return xn.transition = null, An(bi), t ? t() : void 0;
      } finally {
        An(l), xn.transition = s, vt = n, (vt & (Mr | ba)) === Bn && li();
      }
    }
    function RE() {
      return (vt & (Mr | ba)) !== Bn;
    }
    function CE(t) {
      var n = vt;
      vt |= nv;
      var s = xn.transition, l = kr();
      try {
        xn.transition = null, An(bi), t();
      } finally {
        An(l), xn.transition = s, vt = n, vt === Bn && (hc(), li());
      }
    }
    function qh(t, n) {
      Xt(iv, rs, t), rs = ot(rs, n);
    }
    function cv(t) {
      rs = iv.current, wn(iv, t);
    }
    function Ku(t, n) {
      t.finishedWork = null, t.finishedLanes = fe;
      var s = t.timeoutHandle;
      if (s !== fa && (t.timeoutHandle = fa, ca(s)), Sn !== null)
        for (var l = Sn.return; l !== null; ) {
          var c = l.alternate;
          Wg(c, l), l = l.return;
        }
      Tr = t;
      var h = eo(t.current, null);
      return Sn = h, Yn = rs = n, Wn = Ys, Zf = null, Lh = fe, Jf = fe, Bh = fe, Kf = null, di = null, Kt(), ui.discardPendingWarnings(), h;
    }
    function C0(t, n) {
      do {
        var s = Sn;
        try {
          if (i(), Yy(), jn(), tv.current = null, s === null || s.return === null) {
            Wn = Gf, Zf = n, Sn = null;
            return;
          }
          if (pe && s.mode & At && ph(s, !0), ue)
            if (Sa(), n !== null && typeof n == "object" && typeof n.then == "function") {
              var l = n;
              Go(s, l, Yn);
            } else
              Qa(s, n, Yn);
          OS(t, s.return, s, n, Yn), w0(s);
        } catch (c) {
          n = c, Sn === s && s !== null ? (s = s.return, Sn = s) : s = Sn;
          continue;
        }
        return;
      } while (!0);
    }
    function M0() {
      var t = ev.current;
      return ev.current = oh, t === null ? oh : t;
    }
    function T0(t) {
      ev.current = t;
    }
    function ME() {
      av = mn();
    }
    function Yh(t) {
      Lh = ot(t, Lh);
    }
    function TE() {
      Wn === Ys && (Wn = Uh);
    }
    function fv() {
      (Wn === Ys || Wn === Uh || Wn === Zu) && (Wn = Xf), Tr !== null && (Po(Lh) || Po(Jf)) && Zl(Tr, Yn);
    }
    function bE(t) {
      Wn !== Xf && (Wn = Zu), Kf === null ? Kf = [t] : Kf.push(t);
    }
    function wE() {
      return Wn === Ys;
    }
    function Wh(t, n) {
      var s = vt;
      vt |= Mr;
      var l = M0();
      if (Tr !== t || Yn !== n) {
        if (gr) {
          var c = t.memoizedUpdaters;
          c.size > 0 && (nd(t, Yn), c.clear()), df(t, n);
        }
        Ku(t, n);
      }
      Bu(n);
      do
        try {
          zE();
          break;
        } catch (h) {
          C0(t, h);
        }
      while (!0);
      if (i(), vt = s, T0(l), Sn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return $n(), Tr = null, Yn = fe, Wn;
    }
    function zE() {
      for (; Sn !== null; )
        b0(Sn);
    }
    function DE(t, n) {
      var s = vt;
      vt |= Mr;
      var l = M0();
      if (Tr !== t || Yn !== n) {
        if (gr) {
          var c = t.memoizedUpdaters;
          c.size > 0 && (nd(t, Yn), c.clear()), df(t, n);
        }
        hc(), Ku(t, n);
      }
      Bu(n);
      do
        try {
          AE();
          break;
        } catch (h) {
          C0(t, h);
        }
      while (!0);
      return i(), T0(l), vt = s, Sn !== null ? (Zo(), Ys) : ($n(), Tr = null, Yn = fe, Wn);
    }
    function AE() {
      for (; Sn !== null && !Od(); )
        b0(Sn);
    }
    function b0(t) {
      var n = t.alternate;
      Lt(t);
      var s;
      (t.mode & At) !== at ? (bm(t), s = dv(n, t, rs), ph(t, !0)) : s = dv(n, t, rs), jn(), t.memoizedProps = t.pendingProps, s === null ? w0(t) : Sn = s, tv.current = null;
    }
    function w0(t) {
      var n = t;
      do {
        var s = n.alternate, l = n.return;
        if ((n.flags & Oa) === _e) {
          Lt(n);
          var c = void 0;
          if ((n.mode & At) === at ? c = Mg(s, n, rs) : (bm(n), c = Mg(s, n, rs), ph(n, !1)), jn(), c !== null) {
            Sn = c;
            return;
          }
        } else {
          var h = l_(s, n);
          if (h !== null) {
            h.flags &= co, Sn = h;
            return;
          }
          if ((n.mode & At) !== at) {
            ph(n, !1);
            for (var x = n.actualDuration, T = n.child; T !== null; )
              x += T.actualDuration, T = T.sibling;
            n.actualDuration = x;
          }
          if (l !== null)
            l.flags |= Oa, l.subtreeFlags = _e, l.deletions = null;
          else {
            Wn = rv, Sn = null;
            return;
          }
        }
        var w = n.sibling;
        if (w !== null) {
          Sn = w;
          return;
        }
        n = l, Sn = n;
      } while (n !== null);
      Wn === Ys && (Wn = v0);
    }
    function $u(t, n) {
      var s = kr(), l = xn.transition;
      try {
        xn.transition = null, An(bi), NE(t, n, s);
      } finally {
        xn.transition = l, An(s);
      }
      return null;
    }
    function NE(t, n, s) {
      do
        is();
      while (Ws !== null);
      if (IE(), (vt & (Mr | ba)) !== Bn)
        throw new Error("Should not already be working.");
      var l = t.finishedWork, c = t.finishedLanes;
      if (Nn(c), l === null)
        return Ol(), null;
      if (c === fe && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), t.finishedWork = null, t.finishedLanes = fe, l === t.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      t.callbackNode = null, t.callbackPriority = Dn;
      var h = ot(l.lanes, l.childLanes);
      As(t, h), t === Tr && (Tr = null, Sn = null, Yn = fe), ((l.subtreeFlags & Ua) !== _e || (l.flags & Ua) !== _e) && (Ju || (Ju = !0, Xh(xa, function() {
        return is(), null;
      })));
      var x = (l.subtreeFlags & (fu | ds | hs | Ua)) !== _e, T = (l.flags & (fu | ds | hs | Ua)) !== _e;
      if (x || T) {
        var w = xn.transition;
        xn.transition = null;
        var N = kr();
        An(bi);
        var U = vt;
        vt |= ba, tv.current = null, p_(t, l), vg(), D_(t, l, c), rl(t.containerInfo), t.current = l, Ga(c), O_(l, t, c), Xo(), Wo(), vt = U, An(N), xn.transition = w;
      } else
        t.current = l, vg();
      var I = Ju;
      if (Ju && (Ju = !1, Ws = t, $f = c), h = t.pendingLanes, h === fe && (pc = null), I || N0(t.current, !1), pt(l.stateNode, s), gr && t.memoizedUpdaters.clear(), lE(), hi(t, mn()), n !== null)
        for (var Z = t.onRecoverableError, ne = 0; ne < n.length; ne++) {
          var he = n[ne];
          Z(he);
        }
      if (kh) {
        kh = !1;
        var Se = sv;
        throw sv = null, Se;
      }
      return pn($f, xt) && t.tag !== Cs && is(), h = t.pendingLanes, pn(h, xt) ? (bS(), t === uv ? ed++ : (ed = 0, uv = t)) : ed = 0, li(), Ol(), null;
    }
    function is() {
      if (Ws !== null) {
        var t = pf($f), n = Tp(Al, t), s = xn.transition, l = kr();
        try {
          return xn.transition = null, An(n), OE();
        } finally {
          An(l), xn.transition = s;
        }
      }
      return !1;
    }
    function FE(t) {
      lv.push(t), Ju || (Ju = !0, Xh(xa, function() {
        return is(), null;
      }));
    }
    function OE() {
      if (Ws === null)
        return !1;
      var t = Ws, n = $f;
      if (Ws = null, $f = fe, (vt & (Mr | ba)) !== Bn)
        throw new Error("Cannot flush passive effects while already rendering.");
      Lu(n);
      var s = vt;
      vt |= ba, V_(t.current), B_(t, t.current);
      {
        var l = lv;
        lv = [];
        for (var c = 0; c < l.length; c++) {
          var h = l[c];
          g_(t, h);
        }
      }
      Ef(), N0(t.current, !0), vt = s, li(), Hh = Ws === null ? 0 : Hh + 1, Rn(t);
      {
        var x = t.current.stateNode;
        x.effectDuration = 0, x.passiveEffectDuration = 0;
      }
      return !0;
    }
    function z0(t) {
      return pc !== null && pc.has(t);
    }
    function UE(t) {
      pc === null ? pc = /* @__PURE__ */ new Set([t]) : pc.add(t);
    }
    function LE(t) {
      kh || (kh = !0, sv = t);
    }
    var BE = LE;
    function D0(t, n, s) {
      var l = mh(s, n), c = gg(t, l, xt);
      mt(t, c);
      var h = Ir(), x = jh(t, xt);
      x !== null && (Ds(x, xt, h), hi(x, h));
    }
    function cr(t, n, s) {
      if (t.tag === me) {
        D0(t, t, s);
        return;
      }
      var l = null;
      for (l = n; l !== null; ) {
        if (l.tag === me) {
          D0(l, t, s);
          return;
        } else if (l.tag === se) {
          var c = l.type, h = l.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof h.componentDidCatch == "function" && !z0(h)) {
            var x = mh(s, t), T = Nm(l, x, xt);
            mt(l, T);
            var w = Ir(), N = jh(l, xt);
            N !== null && (Ds(N, xt, w), hi(N, w));
            return;
          }
        }
        l = l.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, s);
    }
    function kE(t, n, s) {
      var l = t.pingCache;
      l !== null && l.delete(n);
      var c = Ir();
      Ad(t, s), QE(t), Tr === t && wl(Yn, s) && (Wn === Xf || Wn === Uh && of(Yn) && mn() - av < y0 ? Ku(t, fe) : Bh = ot(Bh, s)), hi(t, c);
    }
    function A0(t, n) {
      n === Dn && (n = mE(t));
      var s = Ir(), l = jh(t, n);
      l !== null && (Ds(l, n, s), hi(l, s));
    }
    function HE(t) {
      var n = t.memoizedState, s = Dn;
      n !== null && (s = n.retryLane), A0(t, s);
    }
    function PE(t, n) {
      var s = Dn, l;
      switch (t.tag) {
        case J:
          l = t.stateNode;
          var c = t.memoizedState;
          c !== null && (s = c.retryLane);
          break;
        case Ne:
          l = t.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(n), A0(t, s);
    }
    function VE(t) {
      return t < 120 ? 120 : t < 480 ? 480 : t < 1080 ? 1080 : t < 1920 ? 1920 : t < 3e3 ? 3e3 : t < 4320 ? 4320 : fE(t / 1960) * 1960;
    }
    function jE() {
      if (ed > hE)
        throw ed = 0, uv = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hh > pE && (Hh = 0, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function IE() {
      ui.flushLegacyContextWarning(), ui.flushPendingUnsafeLifecycleWarnings();
    }
    function N0(t, n) {
      Lt(t), Qh(t, gi, Z_), n && Qh(t, nl, J_), Qh(t, gi, G_), n && Qh(t, nl, X_), jn();
    }
    function Qh(t, n, s) {
      for (var l = t, c = null; l !== null; ) {
        var h = l.subtreeFlags & n;
        l !== c && l.child !== null && h !== _e ? l = l.child : ((l.flags & n) !== _e && s(l), l.sibling !== null ? l = l.sibling : l = c = l.return);
      }
    }
    var Gh = null;
    function F0(t) {
      {
        if ((vt & Mr) !== Bn || !(t.mode & Yt))
          return;
        var n = t.tag;
        if (n !== Xe && n !== me && n !== se && n !== oe && n !== H && n !== O && n !== j)
          return;
        var s = We(t) || "ReactComponent";
        if (Gh !== null) {
          if (Gh.has(s))
            return;
          Gh.add(s);
        } else
          Gh = /* @__PURE__ */ new Set([s]);
        var l = Vr;
        try {
          Lt(t), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Lt(t) : jn();
        }
      }
    }
    var dv;
    {
      var qE = null;
      dv = function(t, n, s) {
        var l = V0(qE, n);
        try {
          return Yg(t, n, s);
        } catch (h) {
          if (h !== null && typeof h == "object" && typeof h.then == "function")
            throw h;
          if (i(), Yy(), Wg(t, n), V0(n, l), n.mode & At && bm(n), Xg(null, Yg, null, t, n, s), c_()) {
            var c = Zg();
            typeof c == "object" && c !== null && c._suppressLogging && typeof h == "object" && h !== null && !h._suppressLogging && (h._suppressLogging = !0);
          }
          throw h;
        }
      };
    }
    var O0 = !1, hv;
    hv = /* @__PURE__ */ new Set();
    function YE(t) {
      if (zi && !CS())
        switch (t.tag) {
          case oe:
          case H:
          case j: {
            var n = Sn && We(Sn) || "Unknown", s = n;
            if (!hv.has(s)) {
              hv.add(s);
              var l = We(t) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, n, n);
            }
            break;
          }
          case se: {
            O0 || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), O0 = !0);
            break;
          }
        }
    }
    function nd(t, n) {
      if (gr) {
        var s = t.memoizedUpdaters;
        s.forEach(function(l) {
          ff(t, l, n);
        });
      }
    }
    var pv = {};
    function Xh(t, n) {
      {
        var s = Ta.current;
        return s !== null ? (s.push(n), pv) : mf(t, n);
      }
    }
    function U0(t) {
      if (t !== pv)
        return Fd(t);
    }
    function L0() {
      return Ta.current !== null;
    }
    function WE(t) {
      {
        if (t.mode & Yt) {
          if (!m0())
            return;
        } else if (!cE() || vt !== Bn || t.tag !== oe && t.tag !== H && t.tag !== j)
          return;
        if (Ta.current === null) {
          var n = Vr;
          try {
            Lt(t), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, We(t));
          } finally {
            n ? Lt(t) : jn();
          }
        }
      }
    }
    function QE(t) {
      t.tag !== Cs && m0() && Ta.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    var ia = null, mc = null, GE = function(t) {
      ia = t;
    };
    function vc(t) {
      {
        if (ia === null)
          return t;
        var n = ia(t);
        return n === void 0 ? t : n.current;
      }
    }
    function mv(t) {
      return vc(t);
    }
    function vv(t) {
      {
        if (ia === null)
          return t;
        var n = ia(t);
        if (n === void 0) {
          if (t != null && typeof t.render == "function") {
            var s = vc(t.render);
            if (t.render !== s) {
              var l = {
                $$typeof: nr,
                render: s
              };
              return t.displayName !== void 0 && (l.displayName = t.displayName), l;
            }
          }
          return t;
        }
        return n.current;
      }
    }
    function B0(t, n) {
      {
        if (ia === null)
          return !1;
        var s = t.elementType, l = n.type, c = !1, h = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (t.tag) {
          case se: {
            typeof l == "function" && (c = !0);
            break;
          }
          case oe: {
            (typeof l == "function" || h === Ht) && (c = !0);
            break;
          }
          case H: {
            (h === nr || h === Ht) && (c = !0);
            break;
          }
          case O:
          case j: {
            (h === Xn || h === Ht) && (c = !0);
            break;
          }
          default:
            return !1;
        }
        if (c) {
          var x = ia(s);
          if (x !== void 0 && x === ia(l))
            return !0;
        }
        return !1;
      }
    }
    function k0(t) {
      {
        if (ia === null || typeof WeakSet != "function")
          return;
        mc === null && (mc = /* @__PURE__ */ new WeakSet()), mc.add(t);
      }
    }
    var XE = function(t, n) {
      {
        if (ia === null)
          return;
        var s = n.staleFamilies, l = n.updatedFamilies;
        is(), Ih(function() {
          yv(t.current, l, s);
        });
      }
    }, ZE = function(t, n) {
      {
        if (t.context !== wt)
          return;
        is(), Ih(function() {
          q0(n, t, null, null);
        });
      }
    };
    function yv(t, n, s) {
      {
        var l = t.alternate, c = t.child, h = t.sibling, x = t.tag, T = t.type, w = null;
        switch (x) {
          case oe:
          case j:
          case se:
            w = T;
            break;
          case H:
            w = T.render;
            break;
        }
        if (ia === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var N = !1, U = !1;
        if (w !== null) {
          var I = ia(w);
          I !== void 0 && (s.has(I) ? U = !0 : n.has(I) && (x === se ? U = !0 : N = !0));
        }
        mc !== null && (mc.has(t) || l !== null && mc.has(l)) && (U = !0), U && (t._debugNeedsRemount = !0), (U || N) && Qn(t, xt, en), c !== null && !U && yv(c, n, s), h !== null && yv(h, n, s);
      }
    }
    var JE = function(t, n) {
      {
        var s = /* @__PURE__ */ new Set(), l = new Set(n.map(function(c) {
          return c.current;
        }));
        return gv(t.current, l, s), s;
      }
    };
    function gv(t, n, s) {
      {
        var l = t.child, c = t.sibling, h = t.tag, x = t.type, T = null;
        switch (h) {
          case oe:
          case j:
          case se:
            T = x;
            break;
          case H:
            T = x.render;
            break;
        }
        var w = !1;
        T !== null && n.has(T) && (w = !0), w ? KE(t, s) : l !== null && gv(l, n, s), c !== null && gv(c, n, s);
      }
    }
    function KE(t, n) {
      {
        var s = $E(t, n);
        if (s)
          return;
        for (var l = t; ; ) {
          switch (l.tag) {
            case ye:
              n.add(l.stateNode);
              return;
            case Re:
              n.add(l.stateNode.containerInfo);
              return;
            case me:
              n.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function $E(t, n) {
      for (var s = t, l = !1; ; ) {
        if (s.tag === ye)
          l = !0, n.add(s.stateNode);
        else if (s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
        if (s === t)
          return l;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t)
            return l;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
      return !1;
    }
    var xv;
    {
      xv = !1;
      try {
        var H0 = Object.preventExtensions({});
      } catch {
        xv = !0;
      }
    }
    function eR(t, n, s, l) {
      this.tag = t, this.key = s, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = n, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = fe, this.childLanes = fe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !xv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Di = function(t, n, s, l) {
      return new eR(t, n, s, l);
    };
    function Sv(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function tR(t) {
      return typeof t == "function" && !Sv(t) && t.defaultProps === void 0;
    }
    function nR(t) {
      if (typeof t == "function")
        return Sv(t) ? se : oe;
      if (t != null) {
        var n = t.$$typeof;
        if (n === nr)
          return H;
        if (n === Xn)
          return O;
      }
      return Xe;
    }
    function eo(t, n) {
      var s = t.alternate;
      s === null ? (s = Di(t.tag, n, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s._debugSource = t._debugSource, s._debugOwner = t._debugOwner, s._debugHookTypes = t._debugHookTypes, s.alternate = t, t.alternate = s) : (s.pendingProps = n, s.type = t.type, s.flags = _e, s.subtreeFlags = _e, s.deletions = null, s.actualDuration = 0, s.actualStartTime = -1), s.flags = t.flags & Ar, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue;
      var l = t.dependencies;
      switch (s.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s.selfBaseDuration = t.selfBaseDuration, s.treeBaseDuration = t.treeBaseDuration, s._debugNeedsRemount = t._debugNeedsRemount, s.tag) {
        case Xe:
        case oe:
        case j:
          s.type = vc(t.type);
          break;
        case se:
          s.type = mv(t.type);
          break;
        case H:
          s.type = vv(t.type);
          break;
      }
      return s;
    }
    function rR(t, n) {
      t.flags &= Ar | Vt;
      var s = t.alternate;
      if (s === null)
        t.childLanes = fe, t.lanes = n, t.child = null, t.subtreeFlags = _e, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0;
      else {
        t.childLanes = s.childLanes, t.lanes = s.lanes, t.child = s.child, t.subtreeFlags = _e, t.deletions = null, t.memoizedProps = s.memoizedProps, t.memoizedState = s.memoizedState, t.updateQueue = s.updateQueue, t.type = s.type;
        var l = s.dependencies;
        t.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, t.selfBaseDuration = s.selfBaseDuration, t.treeBaseDuration = s.treeBaseDuration;
      }
      return t;
    }
    function iR(t, n, s) {
      var l;
      return t === $c ? (l = Yt, n === !0 && (l |= hn, l |= ii)) : l = at, gr && (l |= At), Di(me, null, null, l);
    }
    function _v(t, n, s, l, c, h) {
      var x = Xe, T = t;
      if (typeof t == "function")
        Sv(t) ? (x = se, T = mv(T)) : T = vc(T);
      else if (typeof t == "string")
        x = ye;
      else
        e: switch (t) {
          case $t:
            return Jl(s.children, c, h, n);
          case cn:
            x = Ve, c |= hn, (c & Yt) !== at && (c |= ii);
            break;
          case Hn:
            return aR(s, c, h, n);
          case fn:
            return sR(s, c, h, n);
          case dr:
            return lR(s, c, h, n);
          case zr:
            return P0(s, c, h, n);
          case Qr:
          case hr:
          case ua:
          case cs:
          case la:
          default: {
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Gn:
                  x = ge;
                  break e;
                case yi:
                  x = Ze;
                  break e;
                case nr:
                  x = H, T = vv(T);
                  break e;
                case Xn:
                  x = O;
                  break e;
                case Ht:
                  x = ze, T = null;
                  break e;
              }
            var w = "";
            {
              (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var N = l ? We(l) : null;
              N && (w += `

Check the render method of \`` + N + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + w));
          }
        }
      var U = Di(x, s, n, c);
      return U.elementType = t, U.type = T, U.lanes = h, U._debugOwner = l, U;
    }
    function Ev(t, n, s) {
      var l = null;
      l = t._owner;
      var c = t.type, h = t.key, x = t.props, T = _v(c, h, x, l, n, s);
      return T._debugSource = t._source, T._debugOwner = t._owner, T;
    }
    function Jl(t, n, s, l) {
      var c = Di(Ae, t, l, n);
      return c.lanes = s, c;
    }
    function aR(t, n, s, l) {
      typeof t.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof t.id);
      var c = Di(re, t, l, n | At);
      return c.elementType = Hn, c.lanes = s, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function sR(t, n, s, l) {
      var c = Di(J, t, l, n);
      return c.elementType = fn, c.lanes = s, c;
    }
    function lR(t, n, s, l) {
      var c = Di(Ne, t, l, n);
      return c.elementType = dr, c.lanes = s, c;
    }
    function P0(t, n, s, l) {
      var c = Di(qe, t, l, n);
      c.elementType = zr, c.lanes = s;
      var h = {};
      return c.stateNode = h, c;
    }
    function Rv(t, n, s) {
      var l = Di(de, t, null, n);
      return l.lanes = s, l;
    }
    function uR() {
      var t = Di(ye, null, null, at);
      return t.elementType = "DELETED", t;
    }
    function oR(t) {
      var n = Di(Oe, null, null, at);
      return n.stateNode = t, n;
    }
    function Cv(t, n, s) {
      var l = t.children !== null ? t.children : [], c = Di(Re, l, t.key, n);
      return c.lanes = s, c.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: t.implementation
      }, c;
    }
    function V0(t, n) {
      return t === null && (t = Di(Xe, null, null, at)), t.tag = n.tag, t.key = n.key, t.elementType = n.elementType, t.type = n.type, t.stateNode = n.stateNode, t.return = n.return, t.child = n.child, t.sibling = n.sibling, t.index = n.index, t.ref = n.ref, t.pendingProps = n.pendingProps, t.memoizedProps = n.memoizedProps, t.updateQueue = n.updateQueue, t.memoizedState = n.memoizedState, t.dependencies = n.dependencies, t.mode = n.mode, t.flags = n.flags, t.subtreeFlags = n.subtreeFlags, t.deletions = n.deletions, t.lanes = n.lanes, t.childLanes = n.childLanes, t.alternate = n.alternate, t.actualDuration = n.actualDuration, t.actualStartTime = n.actualStartTime, t.selfBaseDuration = n.selfBaseDuration, t.treeBaseDuration = n.treeBaseDuration, t._debugSource = n._debugSource, t._debugOwner = n._debugOwner, t._debugNeedsRemount = n._debugNeedsRemount, t._debugHookTypes = n._debugHookTypes, t;
    }
    function cR(t, n, s, l, c) {
      this.tag = n, this.containerInfo = t, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = fa, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dn, this.eventTimes = zl(fe), this.expirationTimes = zl(en), this.pendingLanes = fe, this.suspendedLanes = fe, this.pingedLanes = fe, this.expiredLanes = fe, this.mutableReadLanes = fe, this.finishedLanes = fe, this.entangledLanes = fe, this.entanglements = zl(fe), this.identifierPrefix = l, this.onRecoverableError = c, bn && (this.mutableSourceEagerHydrationData = null), this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var h = this.pendingUpdatersLaneMap = [], x = 0; x < bu; x++)
          h.push(/* @__PURE__ */ new Set());
      }
      switch (n) {
        case $c:
          this._debugRootType = s ? "hydrateRoot()" : "createRoot()";
          break;
        case Cs:
          this._debugRootType = s ? "hydrate()" : "render()";
          break;
      }
    }
    function j0(t, n, s, l, c, h, x, T, w, N) {
      var U = new cR(t, n, s, T, w), I = iR(n, h);
      U.current = I, I.stateNode = U;
      {
        var Z = {
          element: l,
          isDehydrated: s,
          cache: null,
          // not enabled yet
          transitions: null
        };
        I.memoizedState = Z;
      }
      return Ye(I), U;
    }
    var fR = "18.0.0-fc46dba67-20220329";
    function dR(t, n, s) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Dp(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ut,
        key: l == null ? null : "" + l,
        children: t,
        containerInfo: n,
        implementation: s
      };
    }
    var Mv, Tv;
    Mv = !1, Tv = {};
    function I0(t) {
      if (!t)
        return wt;
      var n = b(t), s = wo(n);
      if (n.tag === se) {
        var l = n.type;
        if (ri(l))
          return Mi(n, l, s);
      }
      return s;
    }
    function hR(t) {
      var n = b(t);
      if (n === void 0) {
        if (typeof t.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var s = Object.keys(t).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + s);
      }
      var l = Nr(n);
      return l === null ? null : l.stateNode;
    }
    function pR(t, n) {
      {
        var s = b(t);
        if (s === void 0) {
          if (typeof t.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(t).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var c = Nr(s);
        if (c === null)
          return null;
        if (c.mode & hn) {
          var h = We(s) || "Component";
          if (!Tv[h]) {
            Tv[h] = !0;
            var x = Vr;
            try {
              Lt(c), s.mode & hn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, h) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, h);
            } finally {
              x ? Lt(x) : jn();
            }
          }
        }
        return c.stateNode;
      }
    }
    function mR(t, n, s, l, c, h, x, T) {
      var w = !1, N = null;
      return j0(t, n, w, N, s, l, c, h, x);
    }
    function vR(t, n, s, l, c, h, x, T, w, N) {
      var U = !0, I = j0(s, l, U, t, c, h, x, T, w);
      I.context = I0(null);
      var Z = I.current, ne = Ir(), he = Xl(Z), Se = tt(ne, he);
      return Se.callback = n ?? null, mt(Z, Se), vE(I, he, ne), I;
    }
    function q0(t, n, s, l) {
      vn(n, t);
      var c = n.current, h = Ir(), x = Xl(c);
      Xa(x);
      var T = I0(s);
      n.context === null ? n.context = T : n.pendingContext = T, zi && Vr !== null && !Mv && (Mv = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, We(Vr) || "Unknown"));
      var w = tt(h, x);
      w.payload = {
        element: t
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l), mt(c, w);
      var N = Qn(c, x, h);
      return N !== null && yn(N, c, x), x;
    }
    function yR(t) {
      var n = t.current;
      if (!n.child)
        return null;
      switch (n.child.tag) {
        case ye:
          return Zr(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }
    function gR(t) {
      switch (t.tag) {
        case me:
          var n = t.stateNode;
          if (Za(n)) {
            var s = lf(n);
            xE(n, s);
          }
          break;
        case J:
          var l = Ir();
          Ih(function() {
            return Qn(t, xt, l);
          });
          var c = xt;
          bv(t, c);
          break;
      }
    }
    function Y0(t, n) {
      var s = t.memoizedState;
      s !== null && s.dehydrated !== null && (s.retryLane = De(s.retryLane, n));
    }
    function bv(t, n) {
      Y0(t, n);
      var s = t.alternate;
      s && Y0(s, n);
    }
    function xR(t) {
      if (t.tag === J) {
        var n = Ir(), s = qa;
        Qn(t, s, n), bv(t, s);
      }
    }
    function SR(t) {
      if (t.tag === J) {
        var n = Ir(), s = Xl(t);
        Qn(t, s, n), bv(t, s);
      }
    }
    function _R(t) {
      var n = It(t);
      return n === null ? null : n.stateNode;
    }
    var W0 = function(t) {
      return null;
    };
    function Q0(t) {
      return W0(t);
    }
    var G0 = function(t) {
      return !1;
    };
    function X0(t) {
      return G0(t);
    }
    var Z0 = null, J0 = null, K0 = null, $0 = null, ex = null, tx = null, nx = null, rx = null, ix = null;
    {
      var ax = function(t, n, s) {
        var l = n[s], c = qt(t) ? t.slice() : E({}, t);
        return s + 1 === n.length ? (qt(c) ? c.splice(l, 1) : delete c[l], c) : (c[l] = ax(t[l], n, s + 1), c);
      }, sx = function(t, n) {
        return ax(t, n, 0);
      }, lx = function(t, n, s, l) {
        var c = n[l], h = qt(t) ? t.slice() : E({}, t);
        if (l + 1 === n.length) {
          var x = s[l];
          h[x] = h[c], qt(h) ? h.splice(c, 1) : delete h[c];
        } else
          h[c] = lx(
            // $FlowFixMe number or string is fine here
            t[c],
            n,
            s,
            l + 1
          );
        return h;
      }, ux = function(t, n, s) {
        if (n.length !== s.length) {
          _("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < s.length - 1; l++)
            if (n[l] !== s[l]) {
              _("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return lx(t, n, s, 0);
      }, ox = function(t, n, s, l) {
        if (s >= n.length)
          return l;
        var c = n[s], h = qt(t) ? t.slice() : E({}, t);
        return h[c] = ox(t[c], n, s + 1, l), h;
      }, cx = function(t, n, s) {
        return ox(t, n, 0, s);
      }, wv = function(t, n) {
        for (var s = t.memoizedState; s !== null && n > 0; )
          s = s.next, n--;
        return s;
      };
      Z0 = function(t, n, s, l) {
        var c = wv(t, n);
        if (c !== null) {
          var h = cx(c.memoizedState, s, l);
          c.memoizedState = h, c.baseState = h, t.memoizedProps = E({}, t.memoizedProps), Qn(t, xt, en);
        }
      }, J0 = function(t, n, s) {
        var l = wv(t, n);
        if (l !== null) {
          var c = sx(l.memoizedState, s);
          l.memoizedState = c, l.baseState = c, t.memoizedProps = E({}, t.memoizedProps), Qn(t, xt, en);
        }
      }, K0 = function(t, n, s, l) {
        var c = wv(t, n);
        if (c !== null) {
          var h = ux(c.memoizedState, s, l);
          c.memoizedState = h, c.baseState = h, t.memoizedProps = E({}, t.memoizedProps), Qn(t, xt, en);
        }
      }, $0 = function(t, n, s) {
        t.pendingProps = cx(t.memoizedProps, n, s), t.alternate && (t.alternate.pendingProps = t.pendingProps), Qn(t, xt, en);
      }, ex = function(t, n) {
        t.pendingProps = sx(t.memoizedProps, n), t.alternate && (t.alternate.pendingProps = t.pendingProps), Qn(t, xt, en);
      }, tx = function(t, n, s) {
        t.pendingProps = ux(t.memoizedProps, n, s), t.alternate && (t.alternate.pendingProps = t.pendingProps), Qn(t, xt, en);
      }, nx = function(t) {
        Qn(t, xt, en);
      }, rx = function(t) {
        W0 = t;
      }, ix = function(t) {
        G0 = t;
      };
    }
    function ER(t) {
      var n = Nr(t);
      return n === null ? null : n.stateNode;
    }
    function RR(t) {
      return null;
    }
    function CR() {
      return Vr;
    }
    function MR(t) {
      var n = t.findFiberByHostInstance, s = m.ReactCurrentDispatcher;
      return gf({
        bundleType: t.bundleType,
        version: t.version,
        rendererPackageName: t.rendererPackageName,
        rendererConfig: t.rendererConfig,
        overrideHookState: Z0,
        overrideHookStateDeletePath: J0,
        overrideHookStateRenamePath: K0,
        overrideProps: $0,
        overridePropsDeletePath: ex,
        overridePropsRenamePath: tx,
        setErrorHandler: rx,
        setSuspenseHandler: ix,
        scheduleUpdate: nx,
        currentDispatcherRef: s,
        findHostInstanceByFiber: ER,
        findFiberByHostInstance: n || RR,
        // React Refresh
        findHostInstancesForRefresh: JE,
        scheduleRefresh: XE,
        scheduleRoot: ZE,
        setRefreshHandler: GE,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: CR,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: fR
      });
    }
    return a.attemptContinuousHydration = xR, a.attemptHydrationAtCurrentPriority = SR, a.attemptSynchronousHydration = gR, a.batchedUpdates = _E, a.createComponentSelector = K_, a.createContainer = mR, a.createHasPseudoClassSelector = $_, a.createHydrationContainer = vR, a.createPortal = dR, a.createRoleSelector = eE, a.createTestNameSelector = nE, a.createTextSelector = tE, a.deferredUpdates = SE, a.discreteUpdates = EE, a.findAllNodes = Fh, a.findBoundingRects = aE, a.findHostInstance = hR, a.findHostInstanceWithNoPortals = _R, a.findHostInstanceWithWarning = pR, a.flushControlled = CE, a.flushPassiveEffects = is, a.flushSync = Ih, a.focusWithin = sE, a.getCurrentUpdatePriority = kr, a.getFindAllNodesFailureDescription = iE, a.getPublicRootInstance = yR, a.injectIntoDevTools = MR, a.isAlreadyRendering = RE, a.observeVisibleRects = uE, a.registerMutableSourceForHydration = gS, a.runWithPriority = hf, a.shouldError = Q0, a.shouldSuspend = X0, a.updateContainer = q0, a;
  })), Kv.exports;
}
process.env.NODE_ENV === "production" ? oy.exports = kC() : oy.exports = HC();
var PC = oy.exports;
const VC = /* @__PURE__ */ wR(PC);
var cy = { exports: {} }, $v = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1;
function jC() {
  return u1 || (u1 = 1, function(y) {
    function e(H, re) {
      var J = H.length;
      H.push(re);
      e: for (; 0 < J; ) {
        var O = J - 1 >>> 1, j = H[O];
        if (0 < d(j, re)) H[O] = re, H[J] = j, J = O;
        else break e;
      }
    }
    function a(H) {
      return H.length === 0 ? null : H[0];
    }
    function u(H) {
      if (H.length === 0) return null;
      var re = H[0], J = H.pop();
      if (J !== re) {
        H[0] = J;
        e: for (var O = 0, j = H.length, ze = j >>> 1; O < ze; ) {
          var Le = 2 * (O + 1) - 1, Oe = H[Le], Ne = Le + 1, Ie = H[Ne];
          if (0 > d(Oe, J)) Ne < j && 0 > d(Ie, Oe) ? (H[O] = Ie, H[Ne] = J, O = Ne) : (H[O] = Oe, H[Le] = J, O = Le);
          else if (Ne < j && 0 > d(Ie, J)) H[O] = Ie, H[Ne] = J, O = Ne;
          else break e;
        }
      }
      return re;
    }
    function d(H, re) {
      var J = H.sortIndex - re.sortIndex;
      return J !== 0 ? J : H.id - re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      y.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, M = v.now();
      y.unstable_now = function() {
        return v.now() - M;
      };
    }
    var _ = [], g = [], R = 1, E = null, b = 3, z = !1, D = !1, L = !1, k = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(H) {
      for (var re = a(g); re !== null; ) {
        if (re.callback === null) u(g);
        else if (re.startTime <= H) u(g), re.sortIndex = re.expirationTime, e(_, re);
        else break;
        re = a(g);
      }
    }
    function ue(H) {
      if (L = !1, ee(H), !D) if (a(_) !== null) D = !0, Ze(pe);
      else {
        var re = a(g);
        re !== null && ge(ue, re.startTime - H);
      }
    }
    function pe(H, re) {
      D = !1, L && (L = !1, V(se), se = -1), z = !0;
      var J = b;
      try {
        for (ee(re), E = a(_); E !== null && (!(E.expirationTime > re) || H && !Re()); ) {
          var O = E.callback;
          if (typeof O == "function") {
            E.callback = null, b = E.priorityLevel;
            var j = O(E.expirationTime <= re);
            re = y.unstable_now(), typeof j == "function" ? E.callback = j : E === a(_) && u(_), ee(re);
          } else u(_);
          E = a(_);
        }
        if (E !== null) var ze = !0;
        else {
          var Le = a(g);
          Le !== null && ge(ue, Le.startTime - re), ze = !1;
        }
        return ze;
      } finally {
        E = null, b = J, z = !1;
      }
    }
    var Me = !1, oe = null, se = -1, Xe = 5, me = -1;
    function Re() {
      return !(y.unstable_now() - me < Xe);
    }
    function ye() {
      if (oe !== null) {
        var H = y.unstable_now();
        me = H;
        var re = !0;
        try {
          re = oe(!0, H);
        } finally {
          re ? de() : (Me = !1, oe = null);
        }
      } else Me = !1;
    }
    var de;
    if (typeof te == "function") de = function() {
      te(ye);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Ve = Ae.port2;
      Ae.port1.onmessage = ye, de = function() {
        Ve.postMessage(null);
      };
    } else de = function() {
      k(ye, 0);
    };
    function Ze(H) {
      oe = H, Me || (Me = !0, de());
    }
    function ge(H, re) {
      se = k(function() {
        H(y.unstable_now());
      }, re);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, y.unstable_continueExecution = function() {
      D || z || (D = !0, Ze(pe));
    }, y.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xe = 0 < H ? Math.floor(1e3 / H) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, y.unstable_getFirstCallbackNode = function() {
      return a(_);
    }, y.unstable_next = function(H) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = b;
      }
      var J = b;
      b = re;
      try {
        return H();
      } finally {
        b = J;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(H, re) {
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
      var J = b;
      b = H;
      try {
        return re();
      } finally {
        b = J;
      }
    }, y.unstable_scheduleCallback = function(H, re, J) {
      var O = y.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? O + J : O) : J = O, H) {
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
      return j = J + j, H = { id: R++, callback: re, priorityLevel: H, startTime: J, expirationTime: j, sortIndex: -1 }, J > O ? (H.sortIndex = J, e(g, H), a(_) === null && H === a(g) && (L ? (V(se), se = -1) : L = !0, ge(ue, J - O))) : (H.sortIndex = j, e(_, H), D || z || (D = !0, Ze(pe))), H;
    }, y.unstable_shouldYield = Re, y.unstable_wrapCallback = function(H) {
      var re = b;
      return function() {
        var J = b;
        b = re;
        try {
          return H.apply(this, arguments);
        } finally {
          b = J;
        }
      };
    };
  }($v)), $v;
}
var ey = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o1;
function IC() {
  return o1 || (o1 = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var e = !1, a = !1, u = 5;
      function d(G, ce) {
        var Fe = G.length;
        G.push(ce), M(G, ce, Fe);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function v(G) {
        if (G.length === 0)
          return null;
        var ce = G[0], Fe = G.pop();
        return Fe !== ce && (G[0] = Fe, _(G, Fe, 0)), ce;
      }
      function M(G, ce, Fe) {
        for (var et = Fe; et > 0; ) {
          var Be = et - 1 >>> 1, Gt = G[Be];
          if (g(Gt, ce) > 0)
            G[Be] = ce, G[et] = Gt, et = Be;
          else
            return;
        }
      }
      function _(G, ce, Fe) {
        for (var et = Fe, Be = G.length, Gt = Be >>> 1; et < Gt; ) {
          var Rt = (et + 1) * 2 - 1, We = G[Rt], _e = Rt + 1, Un = G[_e];
          if (g(We, ce) < 0)
            _e < Be && g(Un, We) < 0 ? (G[et] = Un, G[_e] = ce, et = _e) : (G[et] = We, G[Rt] = ce, et = Rt);
          else if (_e < Be && g(Un, ce) < 0)
            G[et] = Un, G[_e] = ce, et = _e;
          else
            return;
        }
      }
      function g(G, ce) {
        var Fe = G.sortIndex - ce.sortIndex;
        return Fe !== 0 ? Fe : G.id - ce.id;
      }
      var R = 1, E = 2, b = 3, z = 4, D = 5;
      function L(G, ce) {
      }
      var k = typeof performance == "object" && typeof performance.now == "function";
      if (k) {
        var V = performance;
        y.unstable_now = function() {
          return V.now();
        };
      } else {
        var te = Date, ee = te.now();
        y.unstable_now = function() {
          return te.now() - ee;
        };
      }
      var ue = 1073741823, pe = -1, Me = 250, oe = 5e3, se = 1e4, Xe = ue, me = [], Re = [], ye = 1, de = null, Ae = b, Ve = !1, Ze = !1, ge = !1, H = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function O(G) {
        for (var ce = m(Re); ce !== null; ) {
          if (ce.callback === null)
            v(Re);
          else if (ce.startTime <= G)
            v(Re), ce.sortIndex = ce.expirationTime, d(me, ce);
          else
            return;
          ce = m(Re);
        }
      }
      function j(G) {
        if (ge = !1, O(G), !Ze)
          if (m(me) !== null)
            Ze = !0, zr(ze);
          else {
            var ce = m(Re);
            ce !== null && Qr(j, ce.startTime - G);
          }
      }
      function ze(G, ce) {
        Ze = !1, ge && (ge = !1, ua()), Ve = !0;
        var Fe = Ae;
        try {
          var et;
          if (!a) return Le(G, ce);
        } finally {
          de = null, Ae = Fe, Ve = !1;
        }
      }
      function Le(G, ce) {
        var Fe = ce;
        for (O(Fe), de = m(me); de !== null && !e && !(de.expirationTime > Fe && (!G || nr())); ) {
          var et = de.callback;
          if (typeof et == "function") {
            de.callback = null, Ae = de.priorityLevel;
            var Be = de.expirationTime <= Fe, Gt = et(Be);
            Fe = y.unstable_now(), typeof Gt == "function" ? de.callback = Gt : de === m(me) && v(me), O(Fe);
          } else
            v(me);
          de = m(me);
        }
        if (de !== null)
          return !0;
        var Rt = m(Re);
        return Rt !== null && Qr(j, Rt.startTime - Fe), !1;
      }
      function Oe(G, ce) {
        switch (G) {
          case R:
          case E:
          case b:
          case z:
          case D:
            break;
          default:
            G = b;
        }
        var Fe = Ae;
        Ae = G;
        try {
          return ce();
        } finally {
          Ae = Fe;
        }
      }
      function Ne(G) {
        var ce;
        switch (Ae) {
          case R:
          case E:
          case b:
            ce = b;
            break;
          default:
            ce = Ae;
            break;
        }
        var Fe = Ae;
        Ae = ce;
        try {
          return G();
        } finally {
          Ae = Fe;
        }
      }
      function Ie(G) {
        var ce = Ae;
        return function() {
          var Fe = Ae;
          Ae = ce;
          try {
            return G.apply(this, arguments);
          } finally {
            Ae = Fe;
          }
        };
      }
      function qe(G, ce, Fe) {
        var et = y.unstable_now(), Be;
        if (typeof Fe == "object" && Fe !== null) {
          var Gt = Fe.delay;
          typeof Gt == "number" && Gt > 0 ? Be = et + Gt : Be = et;
        } else
          Be = et;
        var Rt;
        switch (G) {
          case R:
            Rt = pe;
            break;
          case E:
            Rt = Me;
            break;
          case D:
            Rt = Xe;
            break;
          case z:
            Rt = se;
            break;
          case b:
          default:
            Rt = oe;
            break;
        }
        var We = Be + Rt, _e = {
          id: ye++,
          callback: ce,
          priorityLevel: G,
          startTime: Be,
          expirationTime: We,
          sortIndex: -1
        };
        return Be > et ? (_e.sortIndex = Be, d(Re, _e), m(me) === null && _e === m(Re) && (ge ? ua() : ge = !0, Qr(j, Be - et))) : (_e.sortIndex = We, d(me, _e), !Ze && !Ve && (Ze = !0, zr(ze))), _e;
      }
      function je() {
      }
      function dt() {
        !Ze && !Ve && (Ze = !0, zr(ze));
      }
      function Tt() {
        return m(me);
      }
      function kt(G) {
        G.callback = null;
      }
      function ut() {
        return Ae;
      }
      var $t = !1, cn = null, Hn = -1, Gn = u, yi = -1;
      function nr() {
        var G = y.unstable_now() - yi;
        return !(G < Gn);
      }
      function fn() {
      }
      function dr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Gn = Math.floor(1e3 / G) : Gn = u;
      }
      var Xn = function() {
        if (cn !== null) {
          var G = y.unstable_now();
          yi = G;
          var ce = !0, Fe = !0;
          try {
            Fe = cn(ce, G);
          } finally {
            Fe ? Ht() : ($t = !1, cn = null);
          }
        } else
          $t = !1;
      }, Ht;
      if (typeof J == "function")
        Ht = function() {
          J(Xn);
        };
      else if (typeof MessageChannel < "u") {
        var hr = new MessageChannel(), la = hr.port2;
        hr.port1.onmessage = Xn, Ht = function() {
          la.postMessage(null);
        };
      } else
        Ht = function() {
          H(Xn, 0);
        };
      function zr(G) {
        cn = G, $t || ($t = !0, Ht());
      }
      function Qr(G, ce) {
        Hn = H(function() {
          G(y.unstable_now());
        }, ce);
      }
      function ua() {
        re(Hn), Hn = -1;
      }
      var cs = fn, Na = null;
      y.unstable_IdlePriority = D, y.unstable_ImmediatePriority = R, y.unstable_LowPriority = z, y.unstable_NormalPriority = b, y.unstable_Profiling = Na, y.unstable_UserBlockingPriority = E, y.unstable_cancelCallback = kt, y.unstable_continueExecution = dt, y.unstable_forceFrameRate = dr, y.unstable_getCurrentPriorityLevel = ut, y.unstable_getFirstCallbackNode = Tt, y.unstable_next = Ne, y.unstable_pauseExecution = je, y.unstable_requestPaint = cs, y.unstable_runWithPriority = Oe, y.unstable_scheduleCallback = qe, y.unstable_shouldYield = nr, y.unstable_wrapCallback = Ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ey)), ey;
}
process.env.NODE_ENV === "production" ? cy.exports = jC() : cy.exports = IC();
var c1 = cy.exports;
const yy = {}, qC = (y) => void Object.assign(yy, y);
function YC(y, e) {
  function a(R, {
    args: E = [],
    attach: b,
    ...z
  }, D) {
    let L = `${R[0].toUpperCase()}${R.slice(1)}`, k;
    if (R === "primitive") {
      if (z.object === void 0) throw new Error("R3F: Primitives without 'object' are invalid!");
      const V = z.object;
      k = ud(V, {
        type: R,
        root: D,
        attach: b,
        primitive: !0
      });
    } else {
      const V = yy[L];
      if (!V)
        throw new Error(`R3F: ${L} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
      if (!Array.isArray(E)) throw new Error("R3F: The args prop must be an array!");
      k = ud(new V(...E), {
        type: R,
        root: D,
        attach: b,
        // Save args in case we need to reconstruct later for HMR
        memoizedProps: {
          args: E
        }
      });
    }
    return k.__r3f.attach === void 0 && (k instanceof uo ? k.__r3f.attach = "geometry" : k instanceof Ep && (k.__r3f.attach = "material")), L !== "inject" && ry(k, z), k;
  }
  function u(R, E) {
    let b = !1;
    if (E) {
      var z, D;
      (z = E.__r3f) != null && z.attach ? ny(R, E, E.__r3f.attach) : E.isObject3D && R.isObject3D && (R.add(E), b = !0), b || (D = R.__r3f) == null || D.objects.push(E), E.__r3f || ud(E, {}), E.__r3f.parent = R, dy(E), Uc(E);
    }
  }
  function d(R, E, b) {
    let z = !1;
    if (E) {
      var D, L;
      if ((D = E.__r3f) != null && D.attach)
        ny(R, E, E.__r3f.attach);
      else if (E.isObject3D && R.isObject3D) {
        E.parent = R, E.dispatchEvent({
          type: "added"
        }), R.dispatchEvent({
          type: "childadded",
          child: E
        });
        const k = R.children.filter((te) => te !== E), V = k.indexOf(b);
        R.children = [...k.slice(0, V), E, ...k.slice(V)], z = !0;
      }
      z || (L = R.__r3f) == null || L.objects.push(E), E.__r3f || ud(E, {}), E.__r3f.parent = R, dy(E), Uc(E);
    }
  }
  function m(R, E, b = !1) {
    R && [...R].forEach((z) => v(E, z, b));
  }
  function v(R, E, b) {
    if (E) {
      var z, D, L;
      if (E.__r3f && (E.__r3f.parent = null), (z = R.__r3f) != null && z.objects && (R.__r3f.objects = R.__r3f.objects.filter((ue) => ue !== E)), (D = E.__r3f) != null && D.attach)
        m1(R, E, E.__r3f.attach);
      else if (E.isObject3D && R.isObject3D) {
        var k;
        R.remove(E), (k = E.__r3f) != null && k.root && $C(gp(E), E);
      }
      const te = (L = E.__r3f) == null ? void 0 : L.primitive, ee = !te && (b === void 0 ? E.dispose !== null : b);
      if (!te) {
        var V;
        m((V = E.__r3f) == null ? void 0 : V.objects, E, ee), m(E.children, E, ee);
      }
      if (delete E.__r3f, ee && E.dispose && E.type !== "Scene") {
        const ue = () => {
          try {
            E.dispose();
          } catch {
          }
        };
        typeof IS_REACT_ACT_ENVIRONMENT > "u" ? c1.unstable_scheduleCallback(c1.unstable_IdlePriority, ue) : ue();
      }
      Uc(R);
    }
  }
  function M(R, E, b, z) {
    var D;
    const L = (D = R.__r3f) == null ? void 0 : D.parent;
    if (!L) return;
    const k = a(E, b, R.__r3f.root);
    if (R.children) {
      for (const V of R.children)
        V.__r3f && u(k, V);
      R.children = R.children.filter((V) => !V.__r3f);
    }
    R.__r3f.objects.forEach((V) => u(k, V)), R.__r3f.objects = [], R.__r3f.autoRemovedBeforeAppend || v(L, R), k.parent && (k.__r3f.autoRemovedBeforeAppend = !0), u(L, k), k.raycast && k.__r3f.eventCount && gp(k).getState().internal.interaction.push(k), [z, z.alternate].forEach((V) => {
      V !== null && (V.stateNode = k, V.ref && (typeof V.ref == "function" ? V.ref(k) : V.ref.current = k));
    });
  }
  const _ = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");
  return {
    reconciler: VC({
      createInstance: a,
      removeChild: v,
      appendChild: u,
      appendInitialChild: u,
      insertBefore: d,
      supportsMutation: !0,
      isPrimaryRenderer: !1,
      supportsPersistence: !1,
      supportsHydration: !1,
      noTimeout: -1,
      appendChildToContainer: (R, E) => {
        if (!E) return;
        const b = R.getState().scene;
        b.__r3f && (b.__r3f.root = R, u(b, E));
      },
      removeChildFromContainer: (R, E) => {
        E && v(R.getState().scene, E);
      },
      insertInContainerBefore: (R, E, b) => {
        if (!E || !b) return;
        const z = R.getState().scene;
        z.__r3f && d(z, E, b);
      },
      getRootHostContext: () => null,
      getChildHostContext: (R) => R,
      finalizeInitialChildren(R) {
        var E;
        return !!((E = R == null ? void 0 : R.__r3f) != null ? E : {}).handlers;
      },
      prepareUpdate(R, E, b, z) {
        var D;
        if (((D = R == null ? void 0 : R.__r3f) != null ? D : {}).primitive && z.object && z.object !== R)
          return [!0];
        {
          const {
            args: k = [],
            children: V,
            ...te
          } = z, {
            args: ee = [],
            children: ue,
            ...pe
          } = b;
          if (!Array.isArray(k)) throw new Error("R3F: the args prop must be an array!");
          if (k.some((oe, se) => oe !== ee[se])) return [!0];
          const Me = I1(R, te, pe, !0);
          return Me.changes.length ? [!1, Me] : null;
        }
      },
      commitUpdate(R, [E, b], z, D, L, k) {
        E ? M(R, z, L, k) : ry(R, b);
      },
      commitMount(R, E, b, z) {
        var D;
        const L = (D = R.__r3f) != null ? D : {};
        R.raycast && L.handlers && L.eventCount && gp(R).getState().internal.interaction.push(R);
      },
      getPublicInstance: (R) => R,
      prepareForCommit: () => null,
      preparePortalMount: (R) => ud(R.getState().scene),
      resetAfterCommit: () => {
      },
      shouldSetTextContent: () => !1,
      clearContainer: () => !1,
      hideInstance(R) {
        var E;
        const {
          attach: b,
          parent: z
        } = (E = R.__r3f) != null ? E : {};
        b && z && m1(z, R, b), R.isObject3D && (R.visible = !1), Uc(R);
      },
      unhideInstance(R, E) {
        var b;
        const {
          attach: z,
          parent: D
        } = (b = R.__r3f) != null ? b : {};
        z && D && ny(D, R, z), (R.isObject3D && E.visible == null || E.visible) && (R.visible = !0), Uc(R);
      },
      createTextInstance: _,
      hideTextInstance: _,
      unhideTextInstance: _,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
      // @ts-ignore
      getCurrentEventPriority: () => e ? e() : dd.DefaultEventPriority,
      beforeActiveInstanceBlur: () => {
      },
      afterActiveInstanceBlur: () => {
      },
      detachDeletedInstance: () => {
      },
      now: typeof performance < "u" && mi.fun(performance.now) ? performance.now : mi.fun(Date.now) ? Date.now : () => 0,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r920883503
      scheduleTimeout: mi.fun(setTimeout) ? setTimeout : void 0,
      cancelTimeout: mi.fun(clearTimeout) ? clearTimeout : void 0
    }),
    applyProps: ry
  };
}
var f1, d1;
const ty = (y) => "colorSpace" in y || "outputColorSpace" in y, WC = () => {
  var y;
  return (y = yy.ColorManagement) != null ? y : null;
}, V1 = typeof window < "u" && ((f1 = window.document) != null && f1.createElement || ((d1 = window.navigator) == null ? void 0 : d1.product) === "ReactNative") ? st.useLayoutEffect : st.useEffect;
function QC(y) {
  const e = st.useRef(y);
  return V1(() => void (e.current = y), [y]), e;
}
class GC extends st.Component {
  constructor(...e) {
    super(...e), this.state = {
      error: !1
    };
  }
  componentDidCatch(e) {
    this.props.set(e);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}
GC.getDerivedStateFromError = () => ({
  error: !0
});
const j1 = "__default", h1 = /* @__PURE__ */ new Map(), XC = (y) => y && !!y.memoized && !!y.changes;
function gp(y) {
  let e = y.__r3f.root;
  for (; e.getState().previousRoot; ) e = e.getState().previousRoot;
  return e;
}
const mi = {
  obj: (y) => y === Object(y) && !mi.arr(y) && typeof y != "function",
  fun: (y) => typeof y == "function",
  str: (y) => typeof y == "string",
  num: (y) => typeof y == "number",
  boo: (y) => typeof y == "boolean",
  und: (y) => y === void 0,
  arr: (y) => Array.isArray(y),
  equ(y, e, {
    arrays: a = "shallow",
    objects: u = "reference",
    strict: d = !0
  } = {}) {
    if (typeof y != typeof e || !!y != !!e) return !1;
    if (mi.str(y) || mi.num(y)) return y === e;
    const m = mi.obj(y);
    if (m && u === "reference") return y === e;
    const v = mi.arr(y);
    if (v && a === "reference") return y === e;
    if ((v || m) && y === e) return !0;
    let M;
    for (M in y) if (!(M in e)) return !1;
    if (m && a === "shallow" && u === "shallow") {
      for (M in d ? e : y) if (!mi.equ(y[M], e[M], {
        strict: d,
        objects: "reference"
      })) return !1;
    } else
      for (M in d ? e : y) if (y[M] !== e[M]) return !1;
    if (mi.und(M)) {
      if (v && y.length === 0 && e.length === 0 || m && Object.keys(y).length === 0 && Object.keys(e).length === 0) return !0;
      if (y !== e) return !1;
    }
    return !0;
  }
};
function ud(y, e) {
  const a = y;
  return a.__r3f = {
    type: "",
    root: null,
    previousAttach: null,
    memoizedProps: {},
    eventCount: 0,
    handlers: {},
    objects: [],
    parent: null,
    ...e
  }, y;
}
function fy(y, e) {
  let a = y;
  if (e.includes("-")) {
    const u = e.split("-"), d = u.pop();
    return a = u.reduce((m, v) => m[v], y), {
      target: a,
      key: d
    };
  } else return {
    target: a,
    key: e
  };
}
const p1 = /-\d+$/;
function ny(y, e, a) {
  if (mi.str(a)) {
    if (p1.test(a)) {
      const m = a.replace(p1, ""), {
        target: v,
        key: M
      } = fy(y, m);
      Array.isArray(v[M]) || (v[M] = []);
    }
    const {
      target: u,
      key: d
    } = fy(y, a);
    e.__r3f.previousAttach = u[d], u[d] = e;
  } else e.__r3f.previousAttach = a(y, e);
}
function m1(y, e, a) {
  var u, d;
  if (mi.str(a)) {
    const {
      target: m,
      key: v
    } = fy(y, a), M = e.__r3f.previousAttach;
    M === void 0 ? delete m[v] : m[v] = M;
  } else (u = e.__r3f) == null || u.previousAttach == null || u.previousAttach(y, e);
  (d = e.__r3f) == null || delete d.previousAttach;
}
function I1(y, {
  children: e,
  key: a,
  ref: u,
  ...d
}, {
  children: m,
  key: v,
  ref: M,
  ..._
} = {}, g = !1) {
  var R;
  const E = (R = y == null ? void 0 : y.__r3f) != null ? R : {}, b = Object.entries(d), z = [];
  if (g) {
    const L = Object.keys(_);
    for (let k = 0; k < L.length; k++)
      d.hasOwnProperty(L[k]) || b.unshift([L[k], j1 + "remove"]);
  }
  b.forEach(([L, k]) => {
    var V;
    if ((V = y.__r3f) != null && V.primitive && L === "object" || mi.equ(k, _[L])) return;
    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(L)) return z.push([L, k, !0, []]);
    let te = [];
    L.includes("-") && (te = L.split("-")), z.push([L, k, !1, te]);
    for (const ee in d) {
      const ue = d[ee];
      ee.startsWith(`${L}-`) && z.push([ee, ue, !1, ee.split("-")]);
    }
  });
  const D = {
    ...d
  };
  return E.memoizedProps && E.memoizedProps.args && (D.args = E.memoizedProps.args), E.memoizedProps && E.memoizedProps.attach && (D.attach = E.memoizedProps.attach), {
    memoized: D,
    changes: z
  };
}
const ZC = typeof process < "u" && process.env.NODE_ENV !== "production";
function ry(y, e) {
  var a, u, d;
  const m = (a = y.__r3f) != null ? a : {}, v = m.root, M = (u = v == null || v.getState == null ? void 0 : v.getState()) != null ? u : {}, {
    memoized: _,
    changes: g
  } = XC(e) ? e : I1(y, e), R = m.eventCount;
  y.__r3f && (y.__r3f.memoizedProps = _);
  for (let b = 0; b < g.length; b++) {
    let [z, D, L, k] = g[b];
    if (ty(y)) {
      const ue = "srgb", pe = "srgb-linear";
      z === "encoding" ? (z = "colorSpace", D = D === 3001 ? ue : pe) : z === "outputEncoding" && (z = "outputColorSpace", D = D === 3001 ? ue : pe);
    }
    let V = y, te = V[z];
    if (k.length && (te = k.reduce((ee, ue) => ee[ue], y), !(te && te.set))) {
      const [ee, ...ue] = k.reverse();
      V = ue.reverse().reduce((pe, Me) => pe[Me], y), z = ee;
    }
    if (D === j1 + "remove")
      if (V.constructor) {
        let ee = h1.get(V.constructor);
        ee || (ee = new V.constructor(), h1.set(V.constructor, ee)), D = ee[z];
      } else
        D = 0;
    if (L)
      D ? m.handlers[z] = D : delete m.handlers[z], m.eventCount = Object.keys(m.handlers).length;
    else if (te && te.set && (te.copy || te instanceof yp)) {
      if (Array.isArray(D))
        te.fromArray ? te.fromArray(D) : te.set(...D);
      else if (te.copy && D && D.constructor && // Some environments may break strict identity checks by duplicating versions of three.js.
      // Loosen to unminified names, ignoring descendents.
      // https://github.com/pmndrs/react-three-fiber/issues/2856
      // TODO: fix upstream and remove in v9
      (ZC ? te.constructor.name === D.constructor.name : te.constructor === D.constructor))
        te.copy(D);
      else if (D !== void 0) {
        const ee = te instanceof Hc;
        !ee && te.setScalar ? te.setScalar(D) : te instanceof yp && D instanceof yp ? te.mask = D.mask : te.set(D), !WC() && !M.linear && ee && te.convertSRGBToLinear();
      }
    } else if (V[z] = D, V[z] instanceof os && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
    V[z].format === w1 && V[z].type === T1) {
      const ee = V[z];
      ty(ee) && ty(M.gl) ? ee.colorSpace = M.gl.outputColorSpace : ee.encoding = M.gl.outputEncoding;
    }
    Uc(y);
  }
  if (m.parent && y.raycast && R !== m.eventCount) {
    const b = gp(y).getState().internal, z = b.interaction.indexOf(y);
    z > -1 && b.interaction.splice(z, 1), m.eventCount && b.interaction.push(y);
  }
  return !(g.length === 1 && g[0][0] === "onUpdate") && g.length && (d = y.__r3f) != null && d.parent && dy(y), y;
}
function Uc(y) {
  var e, a;
  const u = (e = y.__r3f) == null || (a = e.root) == null || a.getState == null ? void 0 : a.getState();
  u && u.internal.frames === 0 && u.invalidate();
}
function dy(y) {
  y.onUpdate == null || y.onUpdate(y);
}
function JC() {
  var y;
  const e = typeof self < "u" && self || typeof window < "u" && window;
  if (!e) return dd.DefaultEventPriority;
  switch ((y = e.event) == null ? void 0 : y.type) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return dd.DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return dd.ContinuousEventPriority;
    default:
      return dd.DefaultEventPriority;
  }
}
function KC(y, e, a, u) {
  const d = a.get(e);
  d && (a.delete(e), a.size === 0 && (y.delete(u), d.target.releasePointerCapture(u)));
}
function $C(y, e) {
  const {
    internal: a
  } = y.getState();
  a.interaction = a.interaction.filter((u) => u !== e), a.initialHits = a.initialHits.filter((u) => u !== e), a.hovered.forEach((u, d) => {
    (u.eventObject === e || u.object === e) && a.hovered.delete(d);
  }), a.capturedMap.forEach((u, d) => {
    KC(a.capturedMap, e, u, d);
  });
}
const eM = /* @__PURE__ */ st.createContext(null);
function q1() {
  const y = st.useContext(eM);
  if (!y) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return y;
}
function _p(y = (a) => a, e) {
  return q1()(y, e);
}
function gy(y, e = 0) {
  const a = q1(), u = a.getState().internal.subscribe, d = QC(y);
  return V1(() => u(d, e, a), [e, u, a]), null;
}
const tM = /* @__PURE__ */ new Map(), {
  reconciler: nM,
  applyProps: BM
} = YC(tM, JC);
nM.injectIntoDevTools({
  bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
  rendererPackageName: "@react-three/fiber",
  version: st.version
});
new Nt();
new Nt();
function rM(y, e, a) {
  return Math.max(e, Math.min(a, y));
}
function iM(y, e) {
  return rM(y - Math.floor(y / e) * e, 0, e);
}
function aM(y, e) {
  var a = iM(e - y, Math.PI * 2);
  return a > Math.PI && (a -= Math.PI * 2), a;
}
var sM = function(e) {
  return 1 / (1 + e + 0.48 * e * e + 0.235 * e * e * e);
};
function xp(y, e, a) {
  var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.01, m = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 1 / 0, v = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : sM, M = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1e-3, _ = "velocity_" + e;
  if (y.__damp === void 0 && (y.__damp = {}), y.__damp[_] === void 0 && (y.__damp[_] = 0), Math.abs(y[e] - a) <= M)
    return y[e] = a, !1;
  u = Math.max(1e-4, u);
  var g = 2 / u, R = v(g * d), E = y[e] - a, b = a, z = m * u;
  E = Math.min(Math.max(E, -z), z), a = y[e] - E;
  var D = (y.__damp[_] + g * E) * d;
  y.__damp[_] = (y.__damp[_] - g * D) * R;
  var L = a + (E + D) * R;
  return b - y[e] > 0 == L > b && (L = b, y.__damp[_] = (L - b) / d), y[e] = L, !0;
}
function iy(y, e, a, u, d, m, v, M) {
  return xp(y, e, y[e] + aM(y[e], a), u, d, m, v, M);
}
var Fc = /* @__PURE__ */ new le(), v1, y1, g1;
function x1(y, e, a, u, d, m, v) {
  return typeof e == "number" ? Fc.setScalar(e) : Array.isArray(e) ? Fc.set(e[0], e[1], e[2]) : Fc.copy(e), v1 = xp(y, "x", Fc.x, a, u, d, m, v), y1 = xp(y, "y", Fc.y, a, u, d, m, v), g1 = xp(y, "z", Fc.z, a, u, d, m, v), v1 || y1 || g1;
}
var od = /* @__PURE__ */ new Ks(), S1, _1, E1;
function lM(y, e, a, u, d, m, v) {
  return Array.isArray(e) ? od.set(e[0], e[1], e[2], e[3]) : od.copy(e), S1 = iy(y, "x", od.x, a, u, d, m, v), _1 = iy(y, "y", od.y, a, u, d, m, v), E1 = iy(y, "z", od.z, a, u, d, m, v), S1 || _1 || E1;
}
function uM(y, e, a, u) {
  const d = class extends Rp {
    constructor(v = {}) {
      const M = Object.entries(y);
      super({
        uniforms: M.reduce((_, [g, R]) => {
          const E = MC.clone({
            [g]: {
              value: R
            }
          });
          return {
            ..._,
            ...E
          };
        }, {}),
        vertexShader: e,
        fragmentShader: a
      }), this.key = "", M.forEach(([_]) => Object.defineProperty(this, _, {
        get: () => this.uniforms[_].value,
        set: (g) => this.uniforms[_].value = g
      })), Object.assign(this, v);
    }
  };
  return d.key = F1.generateUUID(), d;
}
function su(y, e, a) {
  const u = _p((b) => b.size), d = _p((b) => b.viewport), m = typeof y == "number" ? y : u.width * d.dpr, v = typeof e == "number" ? e : u.height * d.dpr, M = (typeof y == "number" ? a : y) || {}, {
    samples: _ = 0,
    depth: g,
    ...R
  } = M, E = st.useMemo(() => {
    const b = new U1(m, v, {
      minFilter: Sp,
      magFilter: Sp,
      type: LR,
      ...R
    });
    return g && (b.depthTexture = new H1(m, v, b1)), b.samples = _, b;
  }, []);
  return st.useLayoutEffect(() => {
    E.setSize(m, v), _ && (E.samples = _);
  }, [_, E, m, v]), st.useEffect(() => () => E.dispose(), []), E;
}
const Y1 = `precision highp float;
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
`, Pc = `uniform vec2 px;
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
`, oM = `varying vec2 uvInternal;
uniform vec2 px;


precision highp float;

void main(){
    vec3 pos = position;
    uvInternal = 0.5 + pos.xy * 0.5;
    vec2 n = sign(pos.xy);
    pos.xy = abs(pos.xy) - px * 1.0;
    pos.xy *= n;
    gl_Position = vec4( pos, 1.0 );
}`, W1 = {
  vertexShader: Pc,
  fragmentShader: Y1,
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
}, cM = () => {
  const y = {
    vertexShader: oM,
    fragmentShader: Y1,
    uniforms: W1.uniforms
  }, e = new Float32Array([
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
  ]), a = new uo();
  a.setAttribute("position", new lo(e, 3));
  const u = new Rp(y), d = new NC(a, u);
  return d.renderOrder = 1, d;
}, fM = (y) => {
  y.geometry.dispose(), y.material.dispose();
}, dM = {
  materialConfig: W1,
  fboConfig: { isNull: !0 },
  children: cM,
  onDispose: fM
}, hM = `precision highp float;

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
`, pM = `precision highp float;

uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;

void main(){
    vec2 pos = position.xy * scale * px + center;
    vUv = uv;
    gl_Position = vec4( pos, 0.0, 1.0 );
}
`, mM = {
  vertexShader: pM,
  fragmentShader: hM,
  uniforms: {
    px: {
      value: null
    },
    force: {
      value: new Nt(0, 0)
    },
    center: {
      value: new Nt(0, 0)
    },
    scale: {
      value: null
    }
  },
  blending: NR
}, vM = {
  materialConfig: mM,
  fboConfig: { isNull: !0 }
}, yM = `precision highp float;
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
`, gM = {
  vertexShader: Pc,
  fragmentShader: yM,
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
}, xM = {
  materialConfig: gM,
  fboConfig: { isNull: !0 }
}, SM = `precision highp float;
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
`, _M = {
  vertexShader: Pc,
  fragmentShader: SM,
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
}, EM = {
  materialConfig: _M,
  fboConfig: { isNull: !0 }
}, RM = `precision highp float;
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
`, CM = {
  vertexShader: Pc,
  fragmentShader: RM,
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
}, MM = {
  materialConfig: CM,
  fboConfig: { isNull: !0 }
}, TM = `precision highp float;
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
`, bM = {
  vertexShader: Pc,
  fragmentShader: TM,
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
}, wM = {
  materialConfig: bM,
  fboConfig: { isNull: !0 }
}, zM = `precision highp float;
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
`, DM = {
  vertexShader: Pc,
  fragmentShader: zM,
  uniforms: {
    velocity: {
      value: null
    },
    boundarySpace: {
      value: new Nt()
    }
  }
}, AM = {
  materialConfig: DM,
  fboConfig: { isNull: !0 }
};
var ss, so, md, ls;
class ao {
  constructor({
    materialConfig: {
      vertexShader: e,
      fragmentShader: a,
      uniforms: u = {},
      raw: d = !1,
      ...m
    },
    material: v,
    geometry: M,
    camera: _,
    onBeforeRender: g,
    onAfterRender: R,
    fboConfig: { width: E, height: b, options: z, isNull: D = !1 },
    fbo: L,
    children: k,
    onDispose: V
  }) {
    rd(this, ss);
    rd(this, so);
    rd(this, md);
    rd(this, ls, {});
    v ? this.material = typeof v == "function" ? v() : v : (Kl(this, ls, u), this.material = d ? new FC({
      uniforms: pi(this, ls),
      vertexShader: e,
      fragmentShader: a,
      ...m
    }) : new Rp({
      uniforms: pi(this, ls),
      vertexShader: e,
      fragmentShader: a,
      ...m
    })), M ? this.geometry = typeof M == "function" ? M() : M : this.geometry = new Cp(2, 2), this.mesh = new _C(this.geometry, this.material), _ ? this.camera = typeof _ == "function" ? _() : _ : this.camera = new k1(), this.scene = new zC(), this.scene.add(this.mesh), k && (Kl(this, so, typeof k == "function" ? k({ uniforms: pi(this, ls), mesh: this.mesh }) : k), this.scene.add(pi(this, so))), typeof g == "function" && (this.scene.onBeforeRender = g), typeof R == "function" && (this.scene.onAfterRender = R), L ? Kl(this, ss, L) : D ? Kl(this, ss, null) : Kl(this, ss, new U1(E, b, z)), Kl(this, md, V);
  }
  dispose(e = !0, a = !0, u = !0, d = !0) {
    e && this.material.dispose(), a && this.geometry.dispose(), u && pi(this, ss).dispose(), d && typeof pi(this, md) == "function" && d(pi(this, so));
  }
  setFBO(e) {
    return Kl(this, ss, e), this;
  }
  get fbo() {
    return pi(this, ss);
  }
  setOnBeforeRender(e) {
    return this.scene.onBeforeRender = e, this;
  }
  get onBeforeRender() {
    return this.scene.onBeforeRender;
  }
  setOnAfterRender(e) {
    return this.scene.onAfterRender = e, this;
  }
  get onAfterRenderRender() {
    return this.scene.onAfterRender;
  }
  get uniforms() {
    return pi(this, ls);
  }
  get children() {
    return pi(this, so);
  }
  updateUniforms(e = {}) {
    for (const a in e)
      pi(this, ls)[a] = e[a], this.material.uniforms[a] = pi(this, ls)[a];
    return this;
  }
  render(e) {
    return e.setRenderTarget(pi(this, ss)), e.render(this.scene, this.camera), e.setRenderTarget(null), this;
  }
}
ss = new WeakMap(), so = new WeakMap(), md = new WeakMap(), ls = new WeakMap();
const NM = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 100,
  viscous: 30,
  isBounce: !1,
  dt: 0.014,
  isViscous: !1,
  BFECC: !0,
  forceCallback: (y, e, a, u) => ({
    force: u,
    center: a
  })
}, HM = (y = {}, e = -1, [a, u, d = {}] = []) => {
  const {
    iterations_poisson: m,
    iterations_viscous: v,
    mouse_force: M,
    resolution: _,
    cursor_size: g,
    viscous: R,
    isBounce: E,
    dt: b,
    isViscous: z,
    BFECC: D,
    forceCallback: L
  } = { ...NM, ...y }, k = _p(({ get: ze }) => ze), { width: V, height: te } = st.useMemo(
    () => ({
      width: a || k().size.width,
      height: u || k().size.height
    }),
    [u, a, k]
  ), ee = st.useRef(new k1()), ue = st.useRef(new Cp(2, 2)), pe = st.useRef(new Nt(0, 0)), Me = st.useRef(new Nt(0, 0)), oe = su(V, te, { depthBuffer: !1, ...d }), se = su(V, te, { depthBuffer: !1, ...d }), Xe = su(V, te, { depthBuffer: !1, ...d }), me = su(V, te, { depthBuffer: !1, ...d }), Re = su(V, te, { depthBuffer: !1, ...d }), ye = su(V, te, { depthBuffer: !1, ...d }), de = su(V, te, { depthBuffer: !1, ...d }), Ae = su(V, te, { depthBuffer: !1, ...d }), Ve = st.useRef({
    boundarySpace: new Nt(),
    cellScale: new Nt(),
    fboSize: new Nt(),
    force: new Nt(),
    center: new Nt(),
    scale: new Nt(g, g)
  });
  st.useEffect(() => {
    const { boundarySpace: ze, cellScale: Le, fboSize: Oe } = Ve.current;
    Oe.set(Math.round(V * _), Math.round(te * _)), Le.set(1 / Oe.x, 1 / Oe.y), E ? ze.set(0, 0) : ze.copy(Le);
  }, [te, E, _, V]);
  const Ze = st.useRef(
    new ao({
      ...dM,
      camera: ee.current,
      geometry: ue.current
    }).updateUniforms({
      boundarySpace: {
        value: Ve.current.cellScale
      },
      px: {
        value: Ve.current.cellScale
      },
      fboSize: {
        value: Ve.current.fboSize
      },
      velocity: {
        value: oe.texture
      },
      dt: {
        value: b
      },
      isBFECC: {
        value: !0
      }
    }).setFBO(se)
  ), ge = st.useRef(
    new ao({
      ...vM,
      camera: ee.current,
      geometry: ue.current
    }).updateUniforms({
      px: {
        value: Ve.current.cellScale
      },
      force: {
        value: Ve.current.force
      },
      center: {
        value: Ve.current.center
      },
      scale: {
        value: Ve.current.scale
      }
    }).setFBO(se)
  ), H = st.useRef(
    new ao({
      ...xM,
      camera: ee.current,
      geometry: ue.current
    }).updateUniforms({
      boundarySpace: {
        value: Ve.current.boundarySpace
      },
      velocity: {
        value: se.texture
      },
      velocity_new: {
        value: Xe.texture
      },
      v: {
        value: R
      },
      px: {
        value: Ve.current.cellScale
      },
      dt: {
        value: b
      }
    }).setFBO(me)
  ), re = st.useRef(
    new ao({
      ...EM,
      camera: ee.current,
      geometry: ue.current
    }).updateUniforms({
      boundarySpace: {
        value: Ve.current.boundarySpace
      },
      velocity: {
        value: Xe.texture
      },
      dt: {
        value: b
      },
      px: {
        value: Ve.current.cellScale
      }
    }).setFBO(Re)
  ), J = st.useRef(
    new ao({
      ...MM,
      camera: ee.current,
      geometry: ue.current
    }).updateUniforms({
      boundarySpace: {
        value: Ve.current.boundarySpace
      },
      pressure: {
        value: ye.texture
      },
      divergence: {
        value: Re.texture
      },
      px: {
        value: Ve.current.cellScale
      }
    }).setFBO(de)
  ), O = st.useRef(
    new ao({
      ...wM,
      camera: ee.current,
      geometry: ue.current
    }).updateUniforms({
      boundarySpace: {
        value: Ve.current.boundarySpace
      },
      pressure: {
        value: ye.texture
      },
      velocity: {
        value: Xe.texture
      },
      px: {
        value: Ve.current.cellScale
      },
      dt: {
        value: b
      }
    }).setFBO(oe)
  ), j = st.useRef(
    new ao({
      ...AM,
      camera: ee.current,
      geometry: ue.current
    }).updateUniforms({
      velocity: {
        value: oe.texture
      },
      boundarySpace: {
        value: new Nt()
      }
    }).setFBO(Ae)
  );
  return gy(({ gl: ze, pointer: Le, clock: Oe }, Ne) => {
    Ze.current.updateUniforms({
      dt: {
        value: b
      },
      isBFECC: {
        value: D
      }
    }).children.visible = E, Ze.current.children.material.uniforms = Ze.current.uniforms, Ze.current.render(ze), pe.current.subVectors(Le, Me.current), Me.current.copy(Le);
    const { force: Ie, center: qe } = L(
      Ne,
      Oe.getElapsedTime(),
      Le.clone(),
      pe.current.clone()
    );
    Ve.current.force.set(Ie.x * M, Ie.y * M), Ve.current.center.set(qe.x, qe.y), Ve.current.scale.set(g, g), ge.current.render(ze);
    let je = se;
    if (z) {
      let ut, $t;
      for (let cn = 0; cn < v; cn++)
        cn % 2 == 0 ? (ut = Xe, $t = me) : (ut = me, $t = Xe), H.current.updateUniforms({
          v: {
            value: R
          },
          dt: {
            value: b
          },
          velocity_new: {
            value: ut.texture
          }
        }).setFBO($t).render(ze);
      je = $t;
    }
    re.current.updateUniforms({
      velocity: { value: je.texture },
      dt: {
        value: b
      }
    }).render(ze);
    let dt, Tt;
    for (let ut = 0; ut < m; ut++)
      ut % 2 == 0 ? (dt = ye, Tt = de) : (dt = de, Tt = ye), J.current.updateUniforms({ pressure: { value: dt.texture } }).setFBO(Tt).render(ze);
    const kt = Tt;
    O.current.updateUniforms({
      dt: {
        value: b
      },
      velocity: {
        value: je.texture
      },
      pressure: {
        value: kt.texture
      }
    }).render(ze), j.current.render(ze);
  }, e), st.useEffect(
    () => () => {
      ue.current.dispose(), Ze.current.dispose(!0, !1, !1, !0), ge.current.dispose(!0, !1, !1, !0), H.current.dispose(!0, !1, !1, !0), re.current.dispose(!0, !1, !1, !0), J.current.dispose(!0, !1, !1, !0), O.current.dispose(!0, !1, !1, !0), j.current.dispose(!0, !1, !1, !0);
    },
    []
  ), Ae.texture;
}, FM = (y, e, a, u) => {
  var E, b, z, D;
  const d = y.scale.clone(), m = ((b = (E = y == null ? void 0 : y.geometry) == null ? void 0 : E.parameters) == null ? void 0 : b.width) || u && (u == null ? void 0 : u.x) || 1, v = ((D = (z = y == null ? void 0 : y.geometry) == null ? void 0 : z.parameters) == null ? void 0 : D.height) || u && (u == null ? void 0 : u.y) || 1, M = e.bounds.max.getComponent(0) - e.bounds.min.getComponent(0), _ = e.bounds.max.getComponent(1) - e.bounds.min.getComponent(1), g = M - e.margin.getComponent(1) - e.margin.getComponent(3), R = _ - e.margin.getComponent(0) - e.margin.getComponent(2);
  return d.set(
    Math.abs(g / m),
    Math.abs(R / v),
    d.getComponent(2)
  ), d;
}, R1 = Object.freeze({ WU: 0, PX: 1 }), PM = (y, {
  trackingElementRef: e,
  trackingElement: a = !1,
  customCameraRef: u,
  renderPriority: d,
  left: m = 0.5,
  top: v = 0.5,
  pause: M = !0,
  damp: _ = !0,
  damping: g = {},
  scaleToFitWidth: R = !0,
  geometrySize: E,
  computePosition: b,
  computeScale: z,
  computeRotation: D,
  margin: L,
  marginUnits: k = R1.WU
}) => {
  const { smoothTime: V, delta: te, maxSpeed: ee, easing: ue, eps: pe } = g, { width: Me, height: oe } = _p(
    ({ size: { width: Oe, height: Ne } }) => ({
      width: Oe,
      height: Ne
    })
  ), se = st.useRef(new Nt()), Xe = st.useRef(0), me = st.useRef(null), Re = st.useRef(new Nt()), ye = st.useRef(new Nt()), de = st.useRef(new Nt()), Ae = st.useRef(new Nt()), Ve = st.useRef(new Nt()), Ze = st.useRef(new le()), ge = st.useRef(new le()), H = st.useRef(new Ks()), re = st.useRef(new pd(0, 0, 0, 0)), J = st.useRef({
    ppwu: Re.current,
    viewBounds: { min: ye.current, max: de.current },
    bounds: {
      min: Ae.current,
      max: Ve.current
    },
    targets: {
      position: Ze.current,
      scale: ge.current,
      rotation: H.current
    },
    distance: me.current,
    margin: re.current
  }), O = st.useCallback((Oe, Ne) => {
    const Ie = new le();
    Oe.getWorldPosition(Ie), Ne.worldToLocal(Ie), me.current = Math.abs(Ie.getComponent(2));
  }, []), j = st.useCallback(
    (Oe, Ne, Ie, qe, je, dt) => {
      if (Oe.getViewBounds(
        me.current,
        ye.current,
        de.current
      ), Re.current.setX(
        Math.abs(
          Ne / (de.current.getComponent(0) - ye.current.getComponent(0))
        )
      ), Re.current.setY(
        Math.abs(
          Ie / (de.current.getComponent(1) - ye.current.getComponent(1))
        )
      ), qe) {
        const {
          left: Tt,
          top: kt,
          width: ut,
          height: $t
        } = qe.getBoundingClientRect();
        se.current.set(ut, $t);
        const cn = ye.current.getComponent(0) + Tt / Re.current.getComponent(0), Hn = de.current.getComponent(1) - kt / Re.current.getComponent(1);
        Ae.current.set(
          cn,
          Hn - $t / Re.current.getComponent(1)
        ), Ve.current.set(
          cn + ut / Re.current.getComponent(0),
          Hn
        );
      } else
        Ae.current.copy(ye.current), Ve.current.copy(de.current);
      if (re.current.set(0, 0, 0, 0), je)
        if (re.current.copy(je), dt === R1.PX)
          re.current.divideScalar(Re.current.getComponent(0));
        else {
          const Tt = Math.abs(
            Ve.current.getComponent(0) - Ae.current.getComponent(0)
          ), kt = Math.abs(
            Ve.current.getComponent(1) - Ae.current.getComponent(1)
          );
          re.current.set(
            je.getComponent(0) * kt,
            je.getComponent(1) * Tt,
            je.getComponent(2) * kt,
            je.getComponent(3) * Tt
          );
        }
    },
    []
  ), ze = st.useCallback((Oe, Ne, Ie, qe) => {
    const je = qe ? Ae.current : ye.current, dt = qe ? Ve.current : de.current, Tt = Math.abs(
      (dt.getComponent(0) - je.getComponent(0)) * Ne
    ), kt = Math.abs(
      (dt.getComponent(1) - je.getComponent(1)) * Ie
    );
    Ze.current.set(
      je.getComponent(0) + Tt,
      dt.getComponent(1) - kt
    );
  }, []), Le = st.useCallback(
    (Oe, Ne, Ie, qe, je, dt, Tt) => {
      if (ge.current.copy(Oe.scale), H.current.copy(Oe.rotation), typeof Ne == "function") {
        const kt = Ne(Oe, J.current, je);
        Ze.current.copy(kt), J.current.targets.position.copy(kt);
      }
      if (typeof Ie == "function" || dt) {
        const ut = (typeof Ie == "function" ? Ie : FM)(Oe, J.current, je, Tt);
        ge.current.copy(ut), J.current.targets.scale.copy(ut);
      }
      if (typeof qe == "function") {
        const kt = qe(Oe, J.current, je);
        H.current.copy(kt), J.current.targets.rotation.copy(kt);
      }
    },
    []
  );
  return st.useEffect(() => {
    Xe.current = 0;
  }, [
    e,
    a,
    u,
    d,
    m,
    v,
    M,
    _,
    R,
    E,
    b,
    z,
    D,
    L,
    k,
    V,
    te,
    ee,
    ue,
    pe,
    Me,
    oe
  ]), gy(({ size: { width: Oe, height: Ne }, camera: Ie }, qe) => {
    const je = (u == null ? void 0 : u.current) || Ie;
    if (a && e.current) {
      const { width: dt, height: Tt } = e.current.getBoundingClientRect();
      (se.current.x !== dt || se.current.y !== Tt) && (Xe.current = 0);
    }
    (Xe.current < 1 || !M) && y.current instanceof vi && (!a || e.current) && (O(y.current, je), j(
      je,
      Oe,
      Ne,
      a && e.current,
      L,
      k
    ), ze(je, m, v, a), Le(
      y.current,
      b,
      z,
      D,
      je,
      R,
      E
    ), Xe.current++), _ && Xe.current > 0 && y.current instanceof vi && (x1(
      y.current.position,
      [
        Ze.current.getComponent(0),
        Ze.current.getComponent(1),
        y.current.position.getComponent(2)
      ],
      V,
      te || qe,
      ee,
      ue,
      pe
    ), (R || typeof z == "function") && x1(
      y.current.scale,
      [
        ge.current.getComponent(0),
        ge.current.getComponent(1),
        ge.current.getComponent(2)
      ],
      V,
      te || qe,
      ee,
      ue,
      pe
    ), typeof D == "function" && lM(
      y.current.rotation,
      H.current.clone(),
      V,
      te || qe,
      ee,
      ue,
      pe
    ));
  }, d), J.current;
}, VM = (y, e, a = !1, u = "progress", d = "p", m, v) => {
  const M = st.useRef(new Array(y)), _ = st.useRef(), g = st.useRef(0);
  return st.useEffect(() => {
    _.current = document.getElementById(u);
  }, [u]), gy(({ clock: R }, E) => {
    if (!a) {
      g.current += E;
      const b = g.current % (y * e);
      for (let z = 0; z < y; z++)
        M.current[z] = F1.smoothstep(
          b - z * e,
          0,
          e
        ), typeof m == "function" ? m(
          _.current.children[z],
          M.current[z],
          z,
          `--${d}${z}`,
          R,
          E
        ) : _.current.children[z].style.setProperty(
          `--${d}${z}`,
          `${M.current[z] * 100}%`
        );
    }
  }, v), M.current;
};
function jM(y = {}) {
  for (const e in y) {
    const { uniforms: a, vert: u, frag: d } = y[e], m = uM(a, u, d);
    qC({ [e]: m });
  }
}
export {
  R1 as UNITS,
  jM as configureShaderMaterial,
  FM as setScaleXY,
  PM as use2DBounds,
  HM as useFluidTexture,
  VM as useProgress
};
