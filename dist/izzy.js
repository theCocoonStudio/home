var lx = (S, t, a) => {
  if (!t.has(S))
    throw TypeError("Cannot " + a);
};
var pi = (S, t, a) => (lx(S, t, "read from private field"), a ? a.call(S) : t.get(S)), nd = (S, t, a) => {
  if (t.has(S))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(S) : t.set(S, a);
}, Jl = (S, t, a, u) => (lx(S, t, "write to private field"), u ? u.call(S, a) : t.set(S, a), a);
function dR(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var $v = { exports: {} }, xt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ux;
function hR() {
  if (ux)
    return xt;
  ux = 1;
  var S = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), v = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function C(O) {
    return O === null || typeof O != "object" ? null : (O = _ && O[_] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, B = {};
  function k(O, j, Be) {
    this.props = O, this.context = j, this.refs = B, this.updater = Be || z;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(O, j) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, j, "setState");
  }, k.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function V() {
  }
  V.prototype = k.prototype;
  function se(O, j, Be) {
    this.props = O, this.context = j, this.refs = B, this.updater = Be || z;
  }
  var ie = se.prototype = new V();
  ie.constructor = se, A(ie, k.prototype), ie.isPureReactComponent = !0;
  var fe = Array.isArray, ve = Object.prototype.hasOwnProperty, be = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(O, j, Be) {
    var ke, je = {}, He = null, tt = null;
    if (j != null)
      for (ke in j.ref !== void 0 && (tt = j.ref), j.key !== void 0 && (He = "" + j.key), j)
        ve.call(j, ke) && !$.hasOwnProperty(ke) && (je[ke] = j[ke]);
    var at = arguments.length - 2;
    if (at === 1)
      je.children = Be;
    else if (1 < at) {
      for (var ot = Array(at), Gt = 0; Gt < at; Gt++)
        ot[Gt] = arguments[Gt + 2];
      je.children = ot;
    }
    if (O && O.defaultProps)
      for (ke in at = O.defaultProps, at)
        je[ke] === void 0 && (je[ke] = at[ke]);
    return { $$typeof: S, type: O, key: He, ref: tt, props: je, _owner: be.current };
  }
  function et(O, j) {
    return { $$typeof: S, type: O.type, key: j, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function ye(O) {
    return typeof O == "object" && O !== null && O.$$typeof === S;
  }
  function Me(O) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(Be) {
      return j[Be];
    });
  }
  var Re = /\/+/g;
  function ge(O, j) {
    return typeof O == "object" && O !== null && O.key != null ? Me("" + O.key) : j.toString(36);
  }
  function Le(O, j, Be, ke, je) {
    var He = typeof O;
    (He === "undefined" || He === "boolean") && (O = null);
    var tt = !1;
    if (O === null)
      tt = !0;
    else
      switch (He) {
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case S:
            case t:
              tt = !0;
          }
      }
    if (tt)
      return tt = O, je = je(tt), O = ke === "" ? "." + ge(tt, 0) : ke, fe(je) ? (Be = "", O != null && (Be = O.replace(Re, "$&/") + "/"), Le(je, j, Be, "", function(Gt) {
        return Gt;
      })) : je != null && (ye(je) && (je = et(je, Be + (!je.key || tt && tt.key === je.key ? "" : ("" + je.key).replace(Re, "$&/") + "/") + O)), j.push(je)), 1;
    if (tt = 0, ke = ke === "" ? "." : ke + ":", fe(O))
      for (var at = 0; at < O.length; at++) {
        He = O[at];
        var ot = ke + ge(He, at);
        tt += Le(He, j, Be, ot, je);
      }
    else if (ot = C(O), typeof ot == "function")
      for (O = ot.call(O), at = 0; !(He = O.next()).done; )
        He = He.value, ot = ke + ge(He, at++), tt += Le(He, j, Be, ot, je);
    else if (He === "object")
      throw j = String(O), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return tt;
  }
  function Ze(O, j, Be) {
    if (O == null)
      return O;
    var ke = [], je = 0;
    return Le(O, ke, "", "", function(He) {
      return j.call(Be, He, je++);
    }), ke;
  }
  function Ye(O) {
    if (O._status === -1) {
      var j = O._result;
      j = j(), j.then(function(Be) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Be);
      }, function(Be) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Be);
      }), O._status === -1 && (O._status = 0, O._result = j);
    }
    if (O._status === 1)
      return O._result.default;
    throw O._result;
  }
  var xe = { current: null }, H = { transition: null }, ae = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: H, ReactCurrentOwner: be };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xt.Children = { map: Ze, forEach: function(O, j, Be) {
    Ze(O, function() {
      j.apply(this, arguments);
    }, Be);
  }, count: function(O) {
    var j = 0;
    return Ze(O, function() {
      j++;
    }), j;
  }, toArray: function(O) {
    return Ze(O, function(j) {
      return j;
    }) || [];
  }, only: function(O) {
    if (!ye(O))
      throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, xt.Component = k, xt.Fragment = a, xt.Profiler = d, xt.PureComponent = se, xt.StrictMode = u, xt.Suspense = b, xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, xt.act = ee, xt.cloneElement = function(O, j, Be) {
    if (O == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var ke = A({}, O.props), je = O.key, He = O.ref, tt = O._owner;
    if (j != null) {
      if (j.ref !== void 0 && (He = j.ref, tt = be.current), j.key !== void 0 && (je = "" + j.key), O.type && O.type.defaultProps)
        var at = O.type.defaultProps;
      for (ot in j)
        ve.call(j, ot) && !$.hasOwnProperty(ot) && (ke[ot] = j[ot] === void 0 && at !== void 0 ? at[ot] : j[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1)
      ke.children = Be;
    else if (1 < ot) {
      at = Array(ot);
      for (var Gt = 0; Gt < ot; Gt++)
        at[Gt] = arguments[Gt + 2];
      ke.children = at;
    }
    return { $$typeof: S, type: O.type, key: je, ref: He, props: ke, _owner: tt };
  }, xt.createContext = function(O) {
    return O = { $$typeof: v, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: m, _context: O }, O.Consumer = O;
  }, xt.createElement = ue, xt.createFactory = function(O) {
    var j = ue.bind(null, O);
    return j.type = O, j;
  }, xt.createRef = function() {
    return { current: null };
  }, xt.forwardRef = function(O) {
    return { $$typeof: T, render: O };
  }, xt.isValidElement = ye, xt.lazy = function(O) {
    return { $$typeof: E, _payload: { _status: -1, _result: O }, _init: Ye };
  }, xt.memo = function(O, j) {
    return { $$typeof: y, type: O, compare: j === void 0 ? null : j };
  }, xt.startTransition = function(O) {
    var j = H.transition;
    H.transition = {};
    try {
      O();
    } finally {
      H.transition = j;
    }
  }, xt.unstable_act = ee, xt.useCallback = function(O, j) {
    return xe.current.useCallback(O, j);
  }, xt.useContext = function(O) {
    return xe.current.useContext(O);
  }, xt.useDebugValue = function() {
  }, xt.useDeferredValue = function(O) {
    return xe.current.useDeferredValue(O);
  }, xt.useEffect = function(O, j) {
    return xe.current.useEffect(O, j);
  }, xt.useId = function() {
    return xe.current.useId();
  }, xt.useImperativeHandle = function(O, j, Be) {
    return xe.current.useImperativeHandle(O, j, Be);
  }, xt.useInsertionEffect = function(O, j) {
    return xe.current.useInsertionEffect(O, j);
  }, xt.useLayoutEffect = function(O, j) {
    return xe.current.useLayoutEffect(O, j);
  }, xt.useMemo = function(O, j) {
    return xe.current.useMemo(O, j);
  }, xt.useReducer = function(O, j, Be) {
    return xe.current.useReducer(O, j, Be);
  }, xt.useRef = function(O) {
    return xe.current.useRef(O);
  }, xt.useState = function(O) {
    return xe.current.useState(O);
  }, xt.useSyncExternalStore = function(O, j, Be) {
    return xe.current.useSyncExternalStore(O, j, Be);
  }, xt.useTransition = function() {
    return xe.current.useTransition();
  }, xt.version = "18.3.1", xt;
}
var ud = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ud.exports;
var ox;
function pR() {
  return ox || (ox = 1, function(S, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var a = "18.3.1", u = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), y = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), k = Symbol.iterator, V = "@@iterator";
      function se(R) {
        if (R === null || typeof R != "object")
          return null;
        var F = k && R[k] || R[V];
        return typeof F == "function" ? F : null;
      }
      var ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {
        transition: null
      }, ve = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, $ = {}, ue = null;
      function et(R) {
        ue = R;
      }
      $.setExtraStackFrame = function(R) {
        ue = R;
      }, $.getCurrentStack = null, $.getStackAddendum = function() {
        var R = "";
        ue && (R += ue);
        var F = $.getCurrentStack;
        return F && (R += F() || ""), R;
      };
      var ye = !1, Me = !1, Re = !1, ge = !1, Le = !1, Ze = {
        ReactCurrentDispatcher: ie,
        ReactCurrentBatchConfig: fe,
        ReactCurrentOwner: be
      };
      Ze.ReactDebugCurrentFrame = $, Ze.ReactCurrentActQueue = ve;
      function Ye(R) {
        {
          for (var F = arguments.length, W = new Array(F > 1 ? F - 1 : 0), J = 1; J < F; J++)
            W[J - 1] = arguments[J];
          H("warn", R, W);
        }
      }
      function xe(R) {
        {
          for (var F = arguments.length, W = new Array(F > 1 ? F - 1 : 0), J = 1; J < F; J++)
            W[J - 1] = arguments[J];
          H("error", R, W);
        }
      }
      function H(R, F, W) {
        {
          var J = Ze.ReactDebugCurrentFrame, pe = J.getStackAddendum();
          pe !== "" && (F += "%s", W = W.concat([pe]));
          var We = W.map(function(Ue) {
            return String(Ue);
          });
          We.unshift("Warning: " + F), Function.prototype.apply.call(console[R], console, We);
        }
      }
      var ae = {};
      function ee(R, F) {
        {
          var W = R.constructor, J = W && (W.displayName || W.name) || "ReactClass", pe = J + "." + F;
          if (ae[pe])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", F, J), ae[pe] = !0;
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
        isMounted: function(R) {
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
        enqueueForceUpdate: function(R, F, W) {
          ee(R, "forceUpdate");
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
        enqueueReplaceState: function(R, F, W, J) {
          ee(R, "replaceState");
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
        enqueueSetState: function(R, F, W, J) {
          ee(R, "setState");
        }
      }, j = Object.assign, Be = {};
      Object.freeze(Be);
      function ke(R, F, W) {
        this.props = R, this.context = F, this.refs = Be, this.updater = W || O;
      }
      ke.prototype.isReactComponent = {}, ke.prototype.setState = function(R, F) {
        if (typeof R != "object" && typeof R != "function" && R != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, F, "setState");
      }, ke.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate");
      };
      {
        var je = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, He = function(R, F) {
          Object.defineProperty(ke.prototype, R, {
            get: function() {
              Ye("%s(...) is deprecated in plain JavaScript React classes. %s", F[0], F[1]);
            }
          });
        };
        for (var tt in je)
          je.hasOwnProperty(tt) && He(tt, je[tt]);
      }
      function at() {
      }
      at.prototype = ke.prototype;
      function ot(R, F, W) {
        this.props = R, this.context = F, this.refs = Be, this.updater = W || O;
      }
      var Gt = ot.prototype = new at();
      Gt.constructor = ot, j(Gt, ke.prototype), Gt.isPureReactComponent = !0;
      function An() {
        var R = {
          current: null
        };
        return Object.seal(R), R;
      }
      var cr = Array.isArray;
      function Vt(R) {
        return cr(R);
      }
      function Nn(R) {
        {
          var F = typeof Symbol == "function" && Symbol.toStringTag, W = F && R[Symbol.toStringTag] || R.constructor.name || "Object";
          return W;
        }
      }
      function $n(R) {
        try {
          return fr(R), !1;
        } catch {
          return !0;
        }
      }
      function fr(R) {
        return "" + R;
      }
      function Yn(R) {
        if ($n(R))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nn(R)), fr(R);
      }
      function vi(R, F, W) {
        var J = R.displayName;
        if (J)
          return J;
        var pe = F.displayName || F.name || "";
        return pe !== "" ? W + "(" + pe + ")" : W;
      }
      function er(R) {
        return R.displayName || "Context";
      }
      function sn(R) {
        if (R == null)
          return null;
        if (typeof R.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
          return R.displayName || R.name || null;
        if (typeof R == "string")
          return R;
        switch (R) {
          case m:
            return "Fragment";
          case d:
            return "Portal";
          case T:
            return "Profiler";
          case v:
            return "StrictMode";
          case _:
            return "Suspense";
          case C:
            return "SuspenseList";
        }
        if (typeof R == "object")
          switch (R.$$typeof) {
            case y:
              var F = R;
              return er(F) + ".Consumer";
            case b:
              var W = R;
              return er(W._context) + ".Provider";
            case E:
              return vi(R, R.render, "ForwardRef");
            case z:
              var J = R.displayName || null;
              return J !== null ? J : sn(R.type) || "Memo";
            case A: {
              var pe = R, We = pe._payload, Ue = pe._init;
              try {
                return sn(Ue(We));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var dr = Object.prototype.hasOwnProperty, Wn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ft, hr, la;
      la = {};
      function zr(R) {
        if (dr.call(R, "ref")) {
          var F = Object.getOwnPropertyDescriptor(R, "ref").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return R.ref !== void 0;
      }
      function Qr(R) {
        if (dr.call(R, "key")) {
          var F = Object.getOwnPropertyDescriptor(R, "key").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return R.key !== void 0;
      }
      function ua(R, F) {
        var W = function() {
          Ft || (Ft = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        W.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: W,
          configurable: !0
        });
      }
      function cs(R, F) {
        var W = function() {
          hr || (hr = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        W.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: W,
          configurable: !0
        });
      }
      function Na(R) {
        if (typeof R.ref == "string" && be.current && R.__self && be.current.stateNode !== R.__self) {
          var F = sn(be.current.type);
          la[F] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F, R.ref), la[F] = !0);
        }
      }
      var G = function(R, F, W, J, pe, We, Ue) {
        var nt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: u,
          // Built-in properties that belong on the element
          type: R,
          key: F,
          ref: W,
          props: Ue,
          // Record the component responsible for creating this element.
          _owner: We
        };
        return nt._store = {}, Object.defineProperty(nt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(nt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(nt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: pe
        }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
      };
      function oe(R, F, W) {
        var J, pe = {}, We = null, Ue = null, nt = null, ct = null;
        if (F != null) {
          zr(F) && (Ue = F.ref, Na(F)), Qr(F) && (Yn(F.key), We = "" + F.key), nt = F.__self === void 0 ? null : F.__self, ct = F.__source === void 0 ? null : F.__source;
          for (J in F)
            dr.call(F, J) && !Wn.hasOwnProperty(J) && (pe[J] = F[J]);
        }
        var wt = arguments.length - 2;
        if (wt === 1)
          pe.children = W;
        else if (wt > 1) {
          for (var zt = Array(wt), mt = 0; mt < wt; mt++)
            zt[mt] = arguments[mt + 2];
          Object.freeze && Object.freeze(zt), pe.children = zt;
        }
        if (R && R.defaultProps) {
          var _t = R.defaultProps;
          for (J in _t)
            pe[J] === void 0 && (pe[J] = _t[J]);
        }
        if (We || Ue) {
          var Dt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          We && ua(pe, Dt), Ue && cs(pe, Dt);
        }
        return G(R, We, Ue, nt, ct, be.current, pe);
      }
      function De(R, F) {
        var W = G(R.type, F, R.ref, R._self, R._source, R._owner, R.props);
        return W;
      }
      function Xe(R, F, W) {
        if (R == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
        var J, pe = j({}, R.props), We = R.key, Ue = R.ref, nt = R._self, ct = R._source, wt = R._owner;
        if (F != null) {
          zr(F) && (Ue = F.ref, wt = be.current), Qr(F) && (Yn(F.key), We = "" + F.key);
          var zt;
          R.type && R.type.defaultProps && (zt = R.type.defaultProps);
          for (J in F)
            dr.call(F, J) && !Wn.hasOwnProperty(J) && (F[J] === void 0 && zt !== void 0 ? pe[J] = zt[J] : pe[J] = F[J]);
        }
        var mt = arguments.length - 2;
        if (mt === 1)
          pe.children = W;
        else if (mt > 1) {
          for (var _t = Array(mt), Dt = 0; Dt < mt; Dt++)
            _t[Dt] = arguments[Dt + 2];
          pe.children = _t;
        }
        return G(R.type, We, Ue, nt, ct, wt, pe);
      }
      function Ne(R) {
        return typeof R == "object" && R !== null && R.$$typeof === u;
      }
      var It = ".", St = ":";
      function Ve(R) {
        var F = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, J = R.replace(F, function(pe) {
          return W[pe];
        });
        return "$" + J;
      }
      var Se = !1, Fn = /\/+/g;
      function Ut(R) {
        return R.replace(Fn, "$&/");
      }
      function pt(R, F) {
        return typeof R == "object" && R !== null && R.key != null ? (Yn(R.key), Ve("" + R.key)) : F.toString(36);
      }
      function Ks(R, F, W, J, pe) {
        var We = typeof R;
        (We === "undefined" || We === "boolean") && (R = null);
        var Ue = !1;
        if (R === null)
          Ue = !0;
        else
          switch (We) {
            case "string":
            case "number":
              Ue = !0;
              break;
            case "object":
              switch (R.$$typeof) {
                case u:
                case d:
                  Ue = !0;
              }
          }
        if (Ue) {
          var nt = R, ct = pe(nt), wt = J === "" ? It + pt(nt, 0) : J;
          if (Vt(ct)) {
            var zt = "";
            wt != null && (zt = Ut(wt) + "/"), Ks(ct, F, zt, "", function(go) {
              return go;
            });
          } else
            ct != null && (Ne(ct) && (ct.key && (!nt || nt.key !== ct.key) && Yn(ct.key), ct = De(
              ct,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ct.key && (!nt || nt.key !== ct.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ut("" + ct.key) + "/"
              ) : "") + wt
            )), F.push(ct));
          return 1;
        }
        var mt, _t, Dt = 0, ln = J === "" ? It : J + St;
        if (Vt(R))
          for (var Pi = 0; Pi < R.length; Pi++)
            mt = R[Pi], _t = ln + pt(mt, Pi), Dt += Ks(mt, F, W, _t, pe);
        else {
          var Ur = se(R);
          if (typeof Ur == "function") {
            var Si = R;
            Ur === Si.entries && (Se || Ye("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Se = !0);
            for (var ll = Ur.call(Si), vu, ul = 0; !(vu = ll.next()).done; )
              mt = vu.value, _t = ln + pt(mt, ul++), Dt += Ks(mt, F, W, _t, pe);
          } else if (We === "object") {
            var yu = String(R);
            throw new Error("Objects are not valid as a React child (found: " + (yu === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : yu) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Dt;
      }
      function pr(R, F, W) {
        if (R == null)
          return R;
        var J = [], pe = 0;
        return Ks(R, J, "", "", function(We) {
          return F.call(W, We, pe++);
        }), J;
      }
      function Fa(R) {
        var F = 0;
        return pr(R, function() {
          F++;
        }), F;
      }
      function uu(R, F, W) {
        pr(R, function() {
          F.apply(this, arguments);
        }, W);
      }
      function gt(R) {
        return pr(R, function(F) {
          return F;
        }) || [];
      }
      function Gr(R) {
        if (!Ne(R))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return R;
      }
      function Ui(R) {
        var F = {
          $$typeof: y,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: R,
          _currentValue2: R,
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
          $$typeof: b,
          _context: F
        };
        var W = !1, J = !1, pe = !1;
        {
          var We = {
            $$typeof: y,
            _context: F
          };
          Object.defineProperties(We, {
            Provider: {
              get: function() {
                return J || (J = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), F.Provider;
              },
              set: function(Ue) {
                F.Provider = Ue;
              }
            },
            _currentValue: {
              get: function() {
                return F._currentValue;
              },
              set: function(Ue) {
                F._currentValue = Ue;
              }
            },
            _currentValue2: {
              get: function() {
                return F._currentValue2;
              },
              set: function(Ue) {
                F._currentValue2 = Ue;
              }
            },
            _threadCount: {
              get: function() {
                return F._threadCount;
              },
              set: function(Ue) {
                F._threadCount = Ue;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), F.Consumer;
              }
            },
            displayName: {
              get: function() {
                return F.displayName;
              },
              set: function(Ue) {
                pe || (Ye("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ue), pe = !0);
              }
            }
          }), F.Consumer = We;
        }
        return F._currentRenderer = null, F._currentRenderer2 = null, F;
      }
      var Dr = -1, tr = 0, nr = 1, oo = 2;
      function Li(R) {
        if (R._status === Dr) {
          var F = R._result, W = F();
          if (W.then(function(We) {
            if (R._status === tr || R._status === Dr) {
              var Ue = R;
              Ue._status = nr, Ue._result = We;
            }
          }, function(We) {
            if (R._status === tr || R._status === Dr) {
              var Ue = R;
              Ue._status = oo, Ue._result = We;
            }
          }), R._status === Dr) {
            var J = R;
            J._status = tr, J._result = W;
          }
        }
        if (R._status === nr) {
          var pe = R._result;
          return pe === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, pe), "default" in pe || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, pe), pe.default;
        } else
          throw R._result;
      }
      function $s(R) {
        var F = {
          // We use these fields to store the result.
          _status: Dr,
          _result: R
        }, W = {
          $$typeof: A,
          _payload: F,
          _init: Li
        };
        {
          var J, pe;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(We) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = We, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return pe;
              },
              set: function(We) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), pe = We, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function fs(R) {
        R != null && R.$$typeof === z ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof R != "function" ? xe("forwardRef requires a render function but was given %s.", R === null ? "null" : typeof R) : R.length !== 0 && R.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", R.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), R != null && (R.defaultProps != null || R.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var F = {
          $$typeof: E,
          render: R
        };
        {
          var W;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(J) {
              W = J, !R.name && !R.displayName && (R.displayName = J);
            }
          });
        }
        return F;
      }
      var co;
      co = Symbol.for("react.module.reference");
      function Oa(R) {
        return !!(typeof R == "string" || typeof R == "function" || R === m || R === T || Le || R === v || R === _ || R === C || ge || R === B || ye || Me || Re || typeof R == "object" && R !== null && (R.$$typeof === A || R.$$typeof === z || R.$$typeof === b || R.$$typeof === y || R.$$typeof === E || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        R.$$typeof === co || R.getModuleId !== void 0));
      }
      function Qn(R, F) {
        Oa(R) || xe("memo: The first argument must be a component. Instead received: %s", R === null ? "null" : typeof R);
        var W = {
          $$typeof: z,
          type: R,
          compare: F === void 0 ? null : F
        };
        {
          var J;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(pe) {
              J = pe, !R.name && !R.displayName && (R.displayName = pe);
            }
          });
        }
        return W;
      }
      function _n() {
        var R = ie.current;
        return R === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), R;
      }
      function fo(R) {
        var F = _n();
        if (R._context !== void 0) {
          var W = R._context;
          W.Consumer === R ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === R && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return F.useContext(R);
      }
      function ou(R) {
        var F = _n();
        return F.useState(R);
      }
      function oa(R, F, W) {
        var J = _n();
        return J.useReducer(R, F, W);
      }
      function el(R) {
        var F = _n();
        return F.useRef(R);
      }
      function yi(R, F) {
        var W = _n();
        return W.useEffect(R, F);
      }
      function tl(R, F) {
        var W = _n();
        return W.useInsertionEffect(R, F);
      }
      function cu(R, F) {
        var W = _n();
        return W.useLayoutEffect(R, F);
      }
      function ds(R, F) {
        var W = _n();
        return W.useCallback(R, F);
      }
      function hs(R, F) {
        var W = _n();
        return W.useMemo(R, F);
      }
      function Ua(R, F, W) {
        var J = _n();
        return J.useImperativeHandle(R, F, W);
      }
      function Ar(R, F) {
        {
          var W = _n();
          return W.useDebugValue(R, F);
        }
      }
      function ps() {
        var R = _n();
        return R.useTransition();
      }
      function La(R) {
        var F = _n();
        return F.useDeferredValue(R);
      }
      function fu() {
        var R = _n();
        return R.useId();
      }
      function Pc(R, F, W) {
        var J = _n();
        return J.useSyncExternalStore(R, F, W);
      }
      var Bi = 0, ki, Nr, Lt, Bt, Xr, En, kt;
      function Zr() {
      }
      Zr.__reactDisabledLog = !0;
      function Ba() {
        {
          if (Bi === 0) {
            ki = console.log, Nr = console.info, Lt = console.warn, Bt = console.error, Xr = console.group, En = console.groupCollapsed, kt = console.groupEnd;
            var R = {
              configurable: !0,
              enumerable: !0,
              value: Zr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: R,
              log: R,
              warn: R,
              error: R,
              group: R,
              groupCollapsed: R,
              groupEnd: R
            });
          }
          Bi++;
        }
      }
      function Gn() {
        {
          if (Bi--, Bi === 0) {
            var R = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: j({}, R, {
                value: ki
              }),
              info: j({}, R, {
                value: Nr
              }),
              warn: j({}, R, {
                value: Lt
              }),
              error: j({}, R, {
                value: Bt
              }),
              group: j({}, R, {
                value: Xr
              }),
              groupCollapsed: j({}, R, {
                value: En
              }),
              groupEnd: j({}, R, {
                value: kt
              })
            });
          }
          Bi < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ka = Ze.ReactCurrentDispatcher, nl;
      function ms(R, F, W) {
        {
          if (nl === void 0)
            try {
              throw Error();
            } catch (pe) {
              var J = pe.stack.trim().match(/\n( *(at )?)/);
              nl = J && J[1] || "";
            }
          return `
` + nl + R;
        }
      }
      var Hi = !1, Ha;
      {
        var mr = typeof WeakMap == "function" ? WeakMap : Map;
        Ha = new mr();
      }
      function rl(R, F) {
        if (!R || Hi)
          return "";
        {
          var W = Ha.get(R);
          if (W !== void 0)
            return W;
        }
        var J;
        Hi = !0;
        var pe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var We;
        We = ka.current, ka.current = null, Ba();
        try {
          if (F) {
            var Ue = function() {
              throw Error();
            };
            if (Object.defineProperty(Ue.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ue, []);
              } catch (ln) {
                J = ln;
              }
              Reflect.construct(R, [], Ue);
            } else {
              try {
                Ue.call();
              } catch (ln) {
                J = ln;
              }
              R.call(Ue.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ln) {
              J = ln;
            }
            R();
          }
        } catch (ln) {
          if (ln && J && typeof ln.stack == "string") {
            for (var nt = ln.stack.split(`
`), ct = J.stack.split(`
`), wt = nt.length - 1, zt = ct.length - 1; wt >= 1 && zt >= 0 && nt[wt] !== ct[zt]; )
              zt--;
            for (; wt >= 1 && zt >= 0; wt--, zt--)
              if (nt[wt] !== ct[zt]) {
                if (wt !== 1 || zt !== 1)
                  do
                    if (wt--, zt--, zt < 0 || nt[wt] !== ct[zt]) {
                      var mt = `
` + nt[wt].replace(" at new ", " at ");
                      return R.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", R.displayName)), typeof R == "function" && Ha.set(R, mt), mt;
                    }
                  while (wt >= 1 && zt >= 0);
                break;
              }
          }
        } finally {
          Hi = !1, ka.current = We, Gn(), Error.prepareStackTrace = pe;
        }
        var _t = R ? R.displayName || R.name : "", Dt = _t ? ms(_t) : "";
        return typeof R == "function" && Ha.set(R, Dt), Dt;
      }
      function ho(R, F, W) {
        return rl(R, !1);
      }
      function po(R) {
        var F = R.prototype;
        return !!(F && F.isReactComponent);
      }
      function ca(R, F, W) {
        if (R == null)
          return "";
        if (typeof R == "function")
          return rl(R, po(R));
        if (typeof R == "string")
          return ms(R);
        switch (R) {
          case _:
            return ms("Suspense");
          case C:
            return ms("SuspenseList");
        }
        if (typeof R == "object")
          switch (R.$$typeof) {
            case E:
              return ho(R.render);
            case z:
              return ca(R.type, F, W);
            case A: {
              var J = R, pe = J._payload, We = J._init;
              try {
                return ca(We(pe), F, W);
              } catch {
              }
            }
          }
        return "";
      }
      var fa = {}, gi = Ze.ReactDebugCurrentFrame;
      function da(R) {
        if (R) {
          var F = R._owner, W = ca(R.type, R._source, F ? F.type : null);
          gi.setExtraStackFrame(W);
        } else
          gi.setExtraStackFrame(null);
      }
      function Fr(R, F, W, J, pe) {
        {
          var We = Function.call.bind(dr);
          for (var Ue in R)
            if (We(R, Ue)) {
              var nt = void 0;
              try {
                if (typeof R[Ue] != "function") {
                  var ct = Error((J || "React class") + ": " + W + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ct.name = "Invariant Violation", ct;
                }
                nt = R[Ue](F, Ue, J, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (wt) {
                nt = wt;
              }
              nt && !(nt instanceof Error) && (da(pe), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", W, Ue, typeof nt), da(null)), nt instanceof Error && !(nt.message in fa) && (fa[nt.message] = !0, da(pe), xe("Failed %s type: %s", W, nt.message), da(null));
            }
        }
      }
      function Jr(R) {
        if (R) {
          var F = R._owner, W = ca(R.type, R._source, F ? F.type : null);
          et(W);
        } else
          et(null);
      }
      var Rn;
      Rn = !1;
      function il() {
        if (be.current) {
          var R = sn(be.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
      function vs(R) {
        if (R !== void 0) {
          var F = R.fileName.replace(/^.*[\\\/]/, ""), W = R.lineNumber;
          return `

Check your code at ` + F + ":" + W + ".";
        }
        return "";
      }
      function jc(R) {
        return R != null ? vs(R.__source) : "";
      }
      var al = {};
      function Rt(R) {
        var F = il();
        if (!F) {
          var W = typeof R == "string" ? R : R.displayName || R.name;
          W && (F = `

Check the top-level render call using <` + W + ">.");
        }
        return F;
      }
      function du(R, F) {
        if (!(!R._store || R._store.validated || R.key != null)) {
          R._store.validated = !0;
          var W = Rt(F);
          if (!al[W]) {
            al[W] = !0;
            var J = "";
            R && R._owner && R._owner !== be.current && (J = " It was passed a child from " + sn(R._owner.type) + "."), Jr(R), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, J), Jr(null);
          }
        }
      }
      function xi(R, F) {
        if (typeof R == "object") {
          if (Vt(R))
            for (var W = 0; W < R.length; W++) {
              var J = R[W];
              Ne(J) && du(J, F);
            }
          else if (Ne(R))
            R._store && (R._store.validated = !0);
          else if (R) {
            var pe = se(R);
            if (typeof pe == "function" && pe !== R.entries)
              for (var We = pe.call(R), Ue; !(Ue = We.next()).done; )
                Ne(Ue.value) && du(Ue.value, F);
          }
        }
      }
      function hu(R) {
        {
          var F = R.type;
          if (F == null || typeof F == "string")
            return;
          var W;
          if (typeof F == "function")
            W = F.propTypes;
          else if (typeof F == "object" && (F.$$typeof === E || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          F.$$typeof === z))
            W = F.propTypes;
          else
            return;
          if (W) {
            var J = sn(F);
            Fr(W, R.props, "prop", J, R);
          } else if (F.PropTypes !== void 0 && !Rn) {
            Rn = !0;
            var pe = sn(F);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
          }
          typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Vc(R) {
        {
          for (var F = Object.keys(R.props), W = 0; W < F.length; W++) {
            var J = F[W];
            if (J !== "children" && J !== "key") {
              Jr(R), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Jr(null);
              break;
            }
          }
          R.ref !== null && (Jr(R), xe("Invalid attribute `ref` supplied to `React.Fragment`."), Jr(null));
        }
      }
      function mo(R, F, W) {
        var J = Oa(R);
        if (!J) {
          var pe = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var We = jc(F);
          We ? pe += We : pe += il();
          var Ue;
          R === null ? Ue = "null" : Vt(R) ? Ue = "array" : R !== void 0 && R.$$typeof === u ? (Ue = "<" + (sn(R.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof R, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, pe);
        }
        var nt = oe.apply(this, arguments);
        if (nt == null)
          return nt;
        if (J)
          for (var ct = 2; ct < arguments.length; ct++)
            xi(arguments[ct], R);
        return R === m ? Vc(nt) : hu(nt), nt;
      }
      var Jt = !1;
      function pu(R) {
        var F = mo.bind(null, R);
        return F.type = R, Jt || (Jt = !0, Ye("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(F, "type", {
          enumerable: !1,
          get: function() {
            return Ye("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: R
            }), R;
          }
        }), F;
      }
      function Ic(R, F, W) {
        for (var J = Xe.apply(this, arguments), pe = 2; pe < arguments.length; pe++)
          xi(arguments[pe], J.type);
        return hu(J), J;
      }
      function mu(R, F) {
        var W = fe.transition;
        fe.transition = {};
        var J = fe.transition;
        fe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          R();
        } finally {
          if (fe.transition = W, W === null && J._updatedFibers) {
            var pe = J._updatedFibers.size;
            pe > 10 && Ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var vo = !1, ha = null;
      function Kr(R) {
        if (ha === null)
          try {
            var F = ("require" + Math.random()).slice(0, 7), W = S && S[F];
            ha = W.call(S, "timers").setImmediate;
          } catch {
            ha = function(pe) {
              vo === !1 && (vo = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var We = new MessageChannel();
              We.port1.onmessage = pe, We.port2.postMessage(void 0);
            };
          }
        return ha(R);
      }
      var Pa = 0, yo = !1;
      function Or(R) {
        {
          var F = Pa;
          Pa++, ve.current === null && (ve.current = []);
          var W = ve.isBatchingLegacy, J;
          try {
            if (ve.isBatchingLegacy = !0, J = R(), !W && ve.didScheduleLegacyUpdate) {
              var pe = ve.current;
              pe !== null && (ve.didScheduleLegacyUpdate = !1, gs(pe));
            }
          } catch (_t) {
            throw vr(F), _t;
          } finally {
            ve.isBatchingLegacy = W;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var We = J, Ue = !1, nt = {
              then: function(_t, Dt) {
                Ue = !0, We.then(function(ln) {
                  vr(F), Pa === 0 ? ja(ln, _t, Dt) : _t(ln);
                }, function(ln) {
                  vr(F), Dt(ln);
                });
              }
            };
            return !yo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ue || (yo = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), nt;
          } else {
            var ct = J;
            if (vr(F), Pa === 0) {
              var wt = ve.current;
              wt !== null && (gs(wt), ve.current = null);
              var zt = {
                then: function(_t, Dt) {
                  ve.current === null ? (ve.current = [], ja(ct, _t, Dt)) : _t(ct);
                }
              };
              return zt;
            } else {
              var mt = {
                then: function(_t, Dt) {
                  _t(ct);
                }
              };
              return mt;
            }
          }
        }
      }
      function vr(R) {
        R !== Pa - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pa = R;
      }
      function ja(R, F, W) {
        {
          var J = ve.current;
          if (J !== null)
            try {
              gs(J), Kr(function() {
                J.length === 0 ? (ve.current = null, F(R)) : ja(R, F, W);
              });
            } catch (pe) {
              W(pe);
            }
          else
            F(R);
        }
      }
      var ys = !1;
      function gs(R) {
        if (!ys) {
          ys = !0;
          var F = 0;
          try {
            for (; F < R.length; F++) {
              var W = R[F];
              do
                W = W(!0);
              while (W !== null);
            }
            R.length = 0;
          } catch (J) {
            throw R = R.slice(F + 1), J;
          } finally {
            ys = !1;
          }
        }
      }
      var qc = mo, $r = Ic, Yc = pu, sl = {
        map: pr,
        forEach: uu,
        count: Fa,
        toArray: gt,
        only: Gr
      };
      t.Children = sl, t.Component = ke, t.Fragment = m, t.Profiler = T, t.PureComponent = ot, t.StrictMode = v, t.Suspense = _, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ze, t.act = Or, t.cloneElement = $r, t.createContext = Ui, t.createElement = qc, t.createFactory = Yc, t.createRef = An, t.forwardRef = fs, t.isValidElement = Ne, t.lazy = $s, t.memo = Qn, t.startTransition = mu, t.unstable_act = Or, t.useCallback = ds, t.useContext = fo, t.useDebugValue = Ar, t.useDeferredValue = La, t.useEffect = yi, t.useId = fu, t.useImperativeHandle = Ua, t.useInsertionEffect = tl, t.useLayoutEffect = cu, t.useMemo = hs, t.useReducer = oa, t.useRef = el, t.useState = ou, t.useSyncExternalStore = Pc, t.useTransition = ps, t.version = a, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ud, ud.exports)), ud.exports;
}
process.env.NODE_ENV === "production" ? $v.exports = hR() : $v.exports = pR();
var gn = $v.exports;
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const c1 = "163", ey = 0, mR = 1, cx = 1, vR = 2, fx = 100, dx = 204, hx = 205, px = 3, yR = 0, f1 = 300, mx = 1e3, Qh = 1001, vx = 1002, yx = 1003, vp = 1006, gR = 1008, d1 = 1009, xR = 1014, h1 = 1015, SR = 1016, _R = 1020, p1 = 1023, Tv = 1026, gx = 1027, m1 = "", su = "srgb", uy = "srgb-linear", ER = "display-p3", v1 = "display-p3-linear", ty = "linear", xx = "srgb", Sx = "rec709", _x = "p3", xc = 7680, Ex = 519, RR = 515, Rx = 35044, od = 2e3, bx = 2001;
class hd {
  addEventListener(t, a) {
    this._listeners === void 0 && (this._listeners = {});
    const u = this._listeners;
    u[t] === void 0 && (u[t] = []), u[t].indexOf(a) === -1 && u[t].push(a);
  }
  hasEventListener(t, a) {
    if (this._listeners === void 0)
      return !1;
    const u = this._listeners;
    return u[t] !== void 0 && u[t].indexOf(a) !== -1;
  }
  removeEventListener(t, a) {
    if (this._listeners === void 0)
      return;
    const d = this._listeners[t];
    if (d !== void 0) {
      const m = d.indexOf(a);
      m !== -1 && d.splice(m, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    const u = this._listeners[t.type];
    if (u !== void 0) {
      t.target = this;
      const d = u.slice(0);
      for (let m = 0, v = d.length; m < v; m++)
        d[m].call(this, t);
      t.target = null;
    }
  }
}
const Cr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Tx = 1234567;
const y1 = Math.PI / 180, g1 = 180 / Math.PI;
function Bc() {
  const S = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, a = Math.random() * 4294967295 | 0, u = Math.random() * 4294967295 | 0;
  return (Cr[S & 255] + Cr[S >> 8 & 255] + Cr[S >> 16 & 255] + Cr[S >> 24 & 255] + "-" + Cr[t & 255] + Cr[t >> 8 & 255] + "-" + Cr[t >> 16 & 15 | 64] + Cr[t >> 24 & 255] + "-" + Cr[a & 63 | 128] + Cr[a >> 8 & 255] + "-" + Cr[a >> 16 & 255] + Cr[a >> 24 & 255] + Cr[u & 255] + Cr[u >> 8 & 255] + Cr[u >> 16 & 255] + Cr[u >> 24 & 255]).toLowerCase();
}
function Yr(S, t, a) {
  return Math.max(t, Math.min(a, S));
}
function oy(S, t) {
  return (S % t + t) % t;
}
function bR(S, t, a, u, d) {
  return u + (S - t) * (d - u) / (a - t);
}
function TR(S, t, a) {
  return S !== t ? (a - S) / (t - S) : 0;
}
function fd(S, t, a) {
  return (1 - a) * S + a * t;
}
function MR(S, t, a, u) {
  return fd(S, t, 1 - Math.exp(-a * u));
}
function CR(S, t = 1) {
  return t - Math.abs(oy(S, t * 2) - t);
}
function wR(S, t, a) {
  return S <= t ? 0 : S >= a ? 1 : (S = (S - t) / (a - t), S * S * (3 - 2 * S));
}
function zR(S, t, a) {
  return S <= t ? 0 : S >= a ? 1 : (S = (S - t) / (a - t), S * S * S * (S * (S * 6 - 15) + 10));
}
function DR(S, t) {
  return S + Math.floor(Math.random() * (t - S + 1));
}
function AR(S, t) {
  return S + Math.random() * (t - S);
}
function NR(S) {
  return S * (0.5 - Math.random());
}
function FR(S) {
  S !== void 0 && (Tx = S);
  let t = Tx += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function OR(S) {
  return S * y1;
}
function UR(S) {
  return S * g1;
}
function LR(S) {
  return (S & S - 1) === 0 && S !== 0;
}
function BR(S) {
  return Math.pow(2, Math.ceil(Math.log(S) / Math.LN2));
}
function kR(S) {
  return Math.pow(2, Math.floor(Math.log(S) / Math.LN2));
}
function HR(S, t, a, u, d) {
  const m = Math.cos, v = Math.sin, T = m(a / 2), b = v(a / 2), y = m((t + u) / 2), E = v((t + u) / 2), _ = m((t - u) / 2), C = v((t - u) / 2), z = m((u - t) / 2), A = v((u - t) / 2);
  switch (d) {
    case "XYX":
      S.set(T * E, b * _, b * C, T * y);
      break;
    case "YZY":
      S.set(b * C, T * E, b * _, T * y);
      break;
    case "ZXZ":
      S.set(b * _, b * C, T * E, T * y);
      break;
    case "XZX":
      S.set(T * E, b * A, b * z, T * y);
      break;
    case "YXY":
      S.set(b * z, T * E, b * A, T * y);
      break;
    case "ZYZ":
      S.set(b * A, b * z, T * E, T * y);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + d);
  }
}
function Fc(S, t) {
  switch (t.constructor) {
    case Float32Array:
      return S;
    case Uint32Array:
      return S / 4294967295;
    case Uint16Array:
      return S / 65535;
    case Uint8Array:
      return S / 255;
    case Int32Array:
      return Math.max(S / 2147483647, -1);
    case Int16Array:
      return Math.max(S / 32767, -1);
    case Int8Array:
      return Math.max(S / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function qr(S, t) {
  switch (t.constructor) {
    case Float32Array:
      return S;
    case Uint32Array:
      return Math.round(S * 4294967295);
    case Uint16Array:
      return Math.round(S * 65535);
    case Uint8Array:
      return Math.round(S * 255);
    case Int32Array:
      return Math.round(S * 2147483647);
    case Int16Array:
      return Math.round(S * 32767);
    case Int8Array:
      return Math.round(S * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const PR = {
  DEG2RAD: y1,
  RAD2DEG: g1,
  generateUUID: Bc,
  clamp: Yr,
  euclideanModulo: oy,
  mapLinear: bR,
  inverseLerp: TR,
  lerp: fd,
  damp: MR,
  pingpong: CR,
  smoothstep: wR,
  smootherstep: zR,
  randInt: DR,
  randFloat: AR,
  randFloatSpread: NR,
  seededRandom: FR,
  degToRad: OR,
  radToDeg: UR,
  isPowerOfTwo: LR,
  ceilPowerOfTwo: BR,
  floorPowerOfTwo: kR,
  setQuaternionFromProperEuler: HR,
  normalize: qr,
  denormalize: Fc
};
class nn {
  constructor(t = 0, a = 0) {
    nn.prototype.isVector2 = !0, this.x = t, this.y = a;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, a) {
    return this.x = t, this.y = a, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, a) {
    switch (t) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, a) {
    return this.x = t.x + a.x, this.y = t.y + a.y, this;
  }
  addScaledVector(t, a) {
    return this.x += t.x * a, this.y += t.y * a, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, a) {
    return this.x = t.x - a.x, this.y = t.y - a.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const a = this.x, u = this.y, d = t.elements;
    return this.x = d[0] * a + d[3] * u + d[6], this.y = d[1] * a + d[4] * u + d[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, a) {
    return this.x = Math.max(t.x, Math.min(a.x, this.x)), this.y = Math.max(t.y, Math.min(a.y, this.y)), this;
  }
  clampScalar(t, a) {
    return this.x = Math.max(t, Math.min(a, this.x)), this.y = Math.max(t, Math.min(a, this.y)), this;
  }
  clampLength(t, a) {
    const u = this.length();
    return this.divideScalar(u || 1).multiplyScalar(Math.max(t, Math.min(a, u)));
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
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
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
  angleTo(t) {
    const a = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (a === 0)
      return Math.PI / 2;
    const u = this.dot(t) / a;
    return Math.acos(Yr(u, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const a = this.x - t.x, u = this.y - t.y;
    return a * a + u * u;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, a) {
    return this.x += (t.x - this.x) * a, this.y += (t.y - this.y) * a, this;
  }
  lerpVectors(t, a, u) {
    return this.x = t.x + (a.x - t.x) * u, this.y = t.y + (a.y - t.y) * u, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, a = 0) {
    return this.x = t[a], this.y = t[a + 1], this;
  }
  toArray(t = [], a = 0) {
    return t[a] = this.x, t[a + 1] = this.y, t;
  }
  fromBufferAttribute(t, a) {
    return this.x = t.getX(a), this.y = t.getY(a), this;
  }
  rotateAround(t, a) {
    const u = Math.cos(a), d = Math.sin(a), m = this.x - t.x, v = this.y - t.y;
    return this.x = m * u - v * d + t.x, this.y = m * d + v * u + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class lu {
  constructor(t, a, u, d, m, v, T, b, y) {
    lu.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, a, u, d, m, v, T, b, y);
  }
  set(t, a, u, d, m, v, T, b, y) {
    const E = this.elements;
    return E[0] = t, E[1] = d, E[2] = T, E[3] = a, E[4] = m, E[5] = b, E[6] = u, E[7] = v, E[8] = y, this;
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
  copy(t) {
    const a = this.elements, u = t.elements;
    return a[0] = u[0], a[1] = u[1], a[2] = u[2], a[3] = u[3], a[4] = u[4], a[5] = u[5], a[6] = u[6], a[7] = u[7], a[8] = u[8], this;
  }
  extractBasis(t, a, u) {
    return t.setFromMatrix3Column(this, 0), a.setFromMatrix3Column(this, 1), u.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const a = t.elements;
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
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, a) {
    const u = t.elements, d = a.elements, m = this.elements, v = u[0], T = u[3], b = u[6], y = u[1], E = u[4], _ = u[7], C = u[2], z = u[5], A = u[8], B = d[0], k = d[3], V = d[6], se = d[1], ie = d[4], fe = d[7], ve = d[2], be = d[5], $ = d[8];
    return m[0] = v * B + T * se + b * ve, m[3] = v * k + T * ie + b * be, m[6] = v * V + T * fe + b * $, m[1] = y * B + E * se + _ * ve, m[4] = y * k + E * ie + _ * be, m[7] = y * V + E * fe + _ * $, m[2] = C * B + z * se + A * ve, m[5] = C * k + z * ie + A * be, m[8] = C * V + z * fe + A * $, this;
  }
  multiplyScalar(t) {
    const a = this.elements;
    return a[0] *= t, a[3] *= t, a[6] *= t, a[1] *= t, a[4] *= t, a[7] *= t, a[2] *= t, a[5] *= t, a[8] *= t, this;
  }
  determinant() {
    const t = this.elements, a = t[0], u = t[1], d = t[2], m = t[3], v = t[4], T = t[5], b = t[6], y = t[7], E = t[8];
    return a * v * E - a * T * y - u * m * E + u * T * b + d * m * y - d * v * b;
  }
  invert() {
    const t = this.elements, a = t[0], u = t[1], d = t[2], m = t[3], v = t[4], T = t[5], b = t[6], y = t[7], E = t[8], _ = E * v - T * y, C = T * b - E * m, z = y * m - v * b, A = a * _ + u * C + d * z;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const B = 1 / A;
    return t[0] = _ * B, t[1] = (d * y - E * u) * B, t[2] = (T * u - d * v) * B, t[3] = C * B, t[4] = (E * a - d * b) * B, t[5] = (d * m - T * a) * B, t[6] = z * B, t[7] = (u * b - y * a) * B, t[8] = (v * a - u * m) * B, this;
  }
  transpose() {
    let t;
    const a = this.elements;
    return t = a[1], a[1] = a[3], a[3] = t, t = a[2], a[2] = a[6], a[6] = t, t = a[5], a[5] = a[7], a[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const a = this.elements;
    return t[0] = a[0], t[1] = a[3], t[2] = a[6], t[3] = a[1], t[4] = a[4], t[5] = a[7], t[6] = a[2], t[7] = a[5], t[8] = a[8], this;
  }
  setUvTransform(t, a, u, d, m, v, T) {
    const b = Math.cos(m), y = Math.sin(m);
    return this.set(
      u * b,
      u * y,
      -u * (b * v + y * T) + v + t,
      -d * y,
      d * b,
      -d * (-y * v + b * T) + T + a,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, a) {
    return this.premultiply(Mv.makeScale(t, a)), this;
  }
  rotate(t) {
    return this.premultiply(Mv.makeRotation(-t)), this;
  }
  translate(t, a) {
    return this.premultiply(Mv.makeTranslation(t, a)), this;
  }
  // for 2D Transforms
  makeTranslation(t, a) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      a,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const a = Math.cos(t), u = Math.sin(t);
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
  makeScale(t, a) {
    return this.set(
      t,
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
  equals(t) {
    const a = this.elements, u = t.elements;
    for (let d = 0; d < 9; d++)
      if (a[d] !== u[d])
        return !1;
    return !0;
  }
  fromArray(t, a = 0) {
    for (let u = 0; u < 9; u++)
      this.elements[u] = t[u + a];
    return this;
  }
  toArray(t = [], a = 0) {
    const u = this.elements;
    return t[a] = u[0], t[a + 1] = u[1], t[a + 2] = u[2], t[a + 3] = u[3], t[a + 4] = u[4], t[a + 5] = u[5], t[a + 6] = u[6], t[a + 7] = u[7], t[a + 8] = u[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Mv = /* @__PURE__ */ new lu();
function jR(S) {
  for (let t = S.length - 1; t >= 0; --t)
    if (S[t] >= 65535)
      return !0;
  return !1;
}
function Mx(S) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", S);
}
const Cx = {};
function VR(S) {
  S in Cx || (Cx[S] = !0, console.warn(S));
}
const wx = /* @__PURE__ */ new lu().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), zx = /* @__PURE__ */ new lu().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Gh = {
  [uy]: {
    transfer: ty,
    primaries: Sx,
    toReference: (S) => S,
    fromReference: (S) => S
  },
  [su]: {
    transfer: xx,
    primaries: Sx,
    toReference: (S) => S.convertSRGBToLinear(),
    fromReference: (S) => S.convertLinearToSRGB()
  },
  [v1]: {
    transfer: ty,
    primaries: _x,
    toReference: (S) => S.applyMatrix3(zx),
    fromReference: (S) => S.applyMatrix3(wx)
  },
  [ER]: {
    transfer: xx,
    primaries: _x,
    toReference: (S) => S.convertSRGBToLinear().applyMatrix3(zx),
    fromReference: (S) => S.applyMatrix3(wx).convertLinearToSRGB()
  }
}, IR = /* @__PURE__ */ new Set([uy, v1]), wa = {
  enabled: !0,
  _workingColorSpace: uy,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(S) {
    if (!IR.has(S))
      throw new Error(`Unsupported working color space, "${S}".`);
    this._workingColorSpace = S;
  },
  convert: function(S, t, a) {
    if (this.enabled === !1 || t === a || !t || !a)
      return S;
    const u = Gh[t].toReference, d = Gh[a].fromReference;
    return d(u(S));
  },
  fromWorkingColorSpace: function(S, t) {
    return this.convert(S, this._workingColorSpace, t);
  },
  toWorkingColorSpace: function(S, t) {
    return this.convert(S, t, this._workingColorSpace);
  },
  getPrimaries: function(S) {
    return Gh[S].primaries;
  },
  getTransfer: function(S) {
    return S === m1 ? ty : Gh[S].transfer;
  }
};
function Uc(S) {
  return S < 0.04045 ? S * 0.0773993808 : Math.pow(S * 0.9478672986 + 0.0521327014, 2.4);
}
function Cv(S) {
  return S < 31308e-7 ? S * 12.92 : 1.055 * Math.pow(S, 0.41666) - 0.055;
}
let Sc;
class qR {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let a;
    if (t instanceof HTMLCanvasElement)
      a = t;
    else {
      Sc === void 0 && (Sc = Mx("canvas")), Sc.width = t.width, Sc.height = t.height;
      const u = Sc.getContext("2d");
      t instanceof ImageData ? u.putImageData(t, 0, 0) : u.drawImage(t, 0, 0, t.width, t.height), a = Sc;
    }
    return a.width > 2048 || a.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), a.toDataURL("image/jpeg", 0.6)) : a.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const a = Mx("canvas");
      a.width = t.width, a.height = t.height;
      const u = a.getContext("2d");
      u.drawImage(t, 0, 0, t.width, t.height);
      const d = u.getImageData(0, 0, t.width, t.height), m = d.data;
      for (let v = 0; v < m.length; v++)
        m[v] = Uc(m[v] / 255) * 255;
      return u.putImageData(d, 0, 0), a;
    } else if (t.data) {
      const a = t.data.slice(0);
      for (let u = 0; u < a.length; u++)
        a instanceof Uint8Array || a instanceof Uint8ClampedArray ? a[u] = Math.floor(Uc(a[u] / 255) * 255) : a[u] = Uc(a[u]);
      return {
        data: a,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let YR = 0;
class x1 {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: YR++ }), this.uuid = Bc(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const a = t === void 0 || typeof t == "string";
    if (!a && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const u = {
      uuid: this.uuid,
      url: ""
    }, d = this.data;
    if (d !== null) {
      let m;
      if (Array.isArray(d)) {
        m = [];
        for (let v = 0, T = d.length; v < T; v++)
          d[v].isDataTexture ? m.push(wv(d[v].image)) : m.push(wv(d[v]));
      } else
        m = wv(d);
      u.url = m;
    }
    return a || (t.images[this.uuid] = u), u;
  }
}
function wv(S) {
  return typeof HTMLImageElement < "u" && S instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && S instanceof ImageBitmap ? qR.getDataURL(S) : S.data ? {
    data: Array.from(S.data),
    width: S.width,
    height: S.height,
    type: S.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let WR = 0;
class os extends hd {
  constructor(t = os.DEFAULT_IMAGE, a = os.DEFAULT_MAPPING, u = Qh, d = Qh, m = vp, v = gR, T = p1, b = d1, y = os.DEFAULT_ANISOTROPY, E = m1) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: WR++ }), this.uuid = Bc(), this.name = "", this.source = new x1(t), this.mipmaps = [], this.mapping = a, this.channel = 0, this.wrapS = u, this.wrapT = d, this.magFilter = m, this.minFilter = v, this.anisotropy = y, this.format = T, this.internalFormat = null, this.type = b, this.offset = new nn(0, 0), this.repeat = new nn(1, 1), this.center = new nn(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new lu(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = E, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const a = t === void 0 || typeof t == "string";
    if (!a && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const u = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
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
    return Object.keys(this.userData).length > 0 && (u.userData = this.userData), a || (t.textures[this.uuid] = u), u;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== f1)
      return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case mx:
          t.x = t.x - Math.floor(t.x);
          break;
        case Qh:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case vx:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case mx:
          t.y = t.y - Math.floor(t.y);
          break;
        case Qh:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case vx:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
os.DEFAULT_IMAGE = null;
os.DEFAULT_MAPPING = f1;
os.DEFAULT_ANISOTROPY = 1;
class yp {
  constructor(t = 0, a = 0, u = 0, d = 1) {
    yp.prototype.isVector4 = !0, this.x = t, this.y = a, this.z = u, this.w = d;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, a, u, d) {
    return this.x = t, this.y = a, this.z = u, this.w = d, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, a) {
    switch (t) {
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
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, a) {
    return this.x = t.x + a.x, this.y = t.y + a.y, this.z = t.z + a.z, this.w = t.w + a.w, this;
  }
  addScaledVector(t, a) {
    return this.x += t.x * a, this.y += t.y * a, this.z += t.z * a, this.w += t.w * a, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, a) {
    return this.x = t.x - a.x, this.y = t.y - a.y, this.z = t.z - a.z, this.w = t.w - a.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const a = this.x, u = this.y, d = this.z, m = this.w, v = t.elements;
    return this.x = v[0] * a + v[4] * u + v[8] * d + v[12] * m, this.y = v[1] * a + v[5] * u + v[9] * d + v[13] * m, this.z = v[2] * a + v[6] * u + v[10] * d + v[14] * m, this.w = v[3] * a + v[7] * u + v[11] * d + v[15] * m, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const a = Math.sqrt(1 - t.w * t.w);
    return a < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / a, this.y = t.y / a, this.z = t.z / a), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let a, u, d, m;
    const b = t.elements, y = b[0], E = b[4], _ = b[8], C = b[1], z = b[5], A = b[9], B = b[2], k = b[6], V = b[10];
    if (Math.abs(E - C) < 0.01 && Math.abs(_ - B) < 0.01 && Math.abs(A - k) < 0.01) {
      if (Math.abs(E + C) < 0.1 && Math.abs(_ + B) < 0.1 && Math.abs(A + k) < 0.1 && Math.abs(y + z + V - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      a = Math.PI;
      const ie = (y + 1) / 2, fe = (z + 1) / 2, ve = (V + 1) / 2, be = (E + C) / 4, $ = (_ + B) / 4, ue = (A + k) / 4;
      return ie > fe && ie > ve ? ie < 0.01 ? (u = 0, d = 0.707106781, m = 0.707106781) : (u = Math.sqrt(ie), d = be / u, m = $ / u) : fe > ve ? fe < 0.01 ? (u = 0.707106781, d = 0, m = 0.707106781) : (d = Math.sqrt(fe), u = be / d, m = ue / d) : ve < 0.01 ? (u = 0.707106781, d = 0.707106781, m = 0) : (m = Math.sqrt(ve), u = $ / m, d = ue / m), this.set(u, d, m, a), this;
    }
    let se = Math.sqrt((k - A) * (k - A) + (_ - B) * (_ - B) + (C - E) * (C - E));
    return Math.abs(se) < 1e-3 && (se = 1), this.x = (k - A) / se, this.y = (_ - B) / se, this.z = (C - E) / se, this.w = Math.acos((y + z + V - 1) / 2), this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, a) {
    return this.x = Math.max(t.x, Math.min(a.x, this.x)), this.y = Math.max(t.y, Math.min(a.y, this.y)), this.z = Math.max(t.z, Math.min(a.z, this.z)), this.w = Math.max(t.w, Math.min(a.w, this.w)), this;
  }
  clampScalar(t, a) {
    return this.x = Math.max(t, Math.min(a, this.x)), this.y = Math.max(t, Math.min(a, this.y)), this.z = Math.max(t, Math.min(a, this.z)), this.w = Math.max(t, Math.min(a, this.w)), this;
  }
  clampLength(t, a) {
    const u = this.length();
    return this.divideScalar(u || 1).multiplyScalar(Math.max(t, Math.min(a, u)));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, a) {
    return this.x += (t.x - this.x) * a, this.y += (t.y - this.y) * a, this.z += (t.z - this.z) * a, this.w += (t.w - this.w) * a, this;
  }
  lerpVectors(t, a, u) {
    return this.x = t.x + (a.x - t.x) * u, this.y = t.y + (a.y - t.y) * u, this.z = t.z + (a.z - t.z) * u, this.w = t.w + (a.w - t.w) * u, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, a = 0) {
    return this.x = t[a], this.y = t[a + 1], this.z = t[a + 2], this.w = t[a + 3], this;
  }
  toArray(t = [], a = 0) {
    return t[a] = this.x, t[a + 1] = this.y, t[a + 2] = this.z, t[a + 3] = this.w, t;
  }
  fromBufferAttribute(t, a) {
    return this.x = t.getX(a), this.y = t.getY(a), this.z = t.getZ(a), this.w = t.getW(a), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class QR extends hd {
  constructor(t = 1, a = 1, u = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = a, this.depth = 1, this.scissor = new yp(0, 0, t, a), this.scissorTest = !1, this.viewport = new yp(0, 0, t, a);
    const d = { width: t, height: a, depth: 1 };
    u = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: vp,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0,
      count: 1
    }, u);
    const m = new os(d, u.mapping, u.wrapS, u.wrapT, u.magFilter, u.minFilter, u.format, u.type, u.anisotropy, u.colorSpace);
    m.flipY = !1, m.generateMipmaps = u.generateMipmaps, m.internalFormat = u.internalFormat, this.textures = [];
    const v = u.count;
    for (let T = 0; T < v; T++)
      this.textures[T] = m.clone(), this.textures[T].isRenderTargetTexture = !0;
    this.depthBuffer = u.depthBuffer, this.stencilBuffer = u.stencilBuffer, this.depthTexture = u.depthTexture, this.samples = u.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, a, u = 1) {
    if (this.width !== t || this.height !== a || this.depth !== u) {
      this.width = t, this.height = a, this.depth = u;
      for (let d = 0, m = this.textures.length; d < m; d++)
        this.textures[d].image.width = t, this.textures[d].image.height = a, this.textures[d].image.depth = u;
      this.dispose();
    }
    this.viewport.set(0, 0, t, a), this.scissor.set(0, 0, t, a);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let u = 0, d = t.textures.length; u < d; u++)
      this.textures[u] = t.textures[u].clone(), this.textures[u].isRenderTargetTexture = !0;
    const a = Object.assign({}, t.texture.image);
    return this.texture.source = new x1(a), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class S1 extends QR {
  constructor(t = 1, a = 1, u = {}) {
    super(t, a, u), this.isWebGLRenderTarget = !0;
  }
}
class pd {
  constructor(t = 0, a = 0, u = 0, d = 1) {
    this.isQuaternion = !0, this._x = t, this._y = a, this._z = u, this._w = d;
  }
  static slerpFlat(t, a, u, d, m, v, T) {
    let b = u[d + 0], y = u[d + 1], E = u[d + 2], _ = u[d + 3];
    const C = m[v + 0], z = m[v + 1], A = m[v + 2], B = m[v + 3];
    if (T === 0) {
      t[a + 0] = b, t[a + 1] = y, t[a + 2] = E, t[a + 3] = _;
      return;
    }
    if (T === 1) {
      t[a + 0] = C, t[a + 1] = z, t[a + 2] = A, t[a + 3] = B;
      return;
    }
    if (_ !== B || b !== C || y !== z || E !== A) {
      let k = 1 - T;
      const V = b * C + y * z + E * A + _ * B, se = V >= 0 ? 1 : -1, ie = 1 - V * V;
      if (ie > Number.EPSILON) {
        const ve = Math.sqrt(ie), be = Math.atan2(ve, V * se);
        k = Math.sin(k * be) / ve, T = Math.sin(T * be) / ve;
      }
      const fe = T * se;
      if (b = b * k + C * fe, y = y * k + z * fe, E = E * k + A * fe, _ = _ * k + B * fe, k === 1 - T) {
        const ve = 1 / Math.sqrt(b * b + y * y + E * E + _ * _);
        b *= ve, y *= ve, E *= ve, _ *= ve;
      }
    }
    t[a] = b, t[a + 1] = y, t[a + 2] = E, t[a + 3] = _;
  }
  static multiplyQuaternionsFlat(t, a, u, d, m, v) {
    const T = u[d], b = u[d + 1], y = u[d + 2], E = u[d + 3], _ = m[v], C = m[v + 1], z = m[v + 2], A = m[v + 3];
    return t[a] = T * A + E * _ + b * z - y * C, t[a + 1] = b * A + E * C + y * _ - T * z, t[a + 2] = y * A + E * z + T * C - b * _, t[a + 3] = E * A - T * _ - b * C - y * z, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, a, u, d) {
    return this._x = t, this._y = a, this._z = u, this._w = d, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, a = !0) {
    const u = t._x, d = t._y, m = t._z, v = t._order, T = Math.cos, b = Math.sin, y = T(u / 2), E = T(d / 2), _ = T(m / 2), C = b(u / 2), z = b(d / 2), A = b(m / 2);
    switch (v) {
      case "XYZ":
        this._x = C * E * _ + y * z * A, this._y = y * z * _ - C * E * A, this._z = y * E * A + C * z * _, this._w = y * E * _ - C * z * A;
        break;
      case "YXZ":
        this._x = C * E * _ + y * z * A, this._y = y * z * _ - C * E * A, this._z = y * E * A - C * z * _, this._w = y * E * _ + C * z * A;
        break;
      case "ZXY":
        this._x = C * E * _ - y * z * A, this._y = y * z * _ + C * E * A, this._z = y * E * A + C * z * _, this._w = y * E * _ - C * z * A;
        break;
      case "ZYX":
        this._x = C * E * _ - y * z * A, this._y = y * z * _ + C * E * A, this._z = y * E * A - C * z * _, this._w = y * E * _ + C * z * A;
        break;
      case "YZX":
        this._x = C * E * _ + y * z * A, this._y = y * z * _ + C * E * A, this._z = y * E * A - C * z * _, this._w = y * E * _ - C * z * A;
        break;
      case "XZY":
        this._x = C * E * _ - y * z * A, this._y = y * z * _ - C * E * A, this._z = y * E * A + C * z * _, this._w = y * E * _ + C * z * A;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + v);
    }
    return a === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, a) {
    const u = a / 2, d = Math.sin(u);
    return this._x = t.x * d, this._y = t.y * d, this._z = t.z * d, this._w = Math.cos(u), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const a = t.elements, u = a[0], d = a[4], m = a[8], v = a[1], T = a[5], b = a[9], y = a[2], E = a[6], _ = a[10], C = u + T + _;
    if (C > 0) {
      const z = 0.5 / Math.sqrt(C + 1);
      this._w = 0.25 / z, this._x = (E - b) * z, this._y = (m - y) * z, this._z = (v - d) * z;
    } else if (u > T && u > _) {
      const z = 2 * Math.sqrt(1 + u - T - _);
      this._w = (E - b) / z, this._x = 0.25 * z, this._y = (d + v) / z, this._z = (m + y) / z;
    } else if (T > _) {
      const z = 2 * Math.sqrt(1 + T - u - _);
      this._w = (m - y) / z, this._x = (d + v) / z, this._y = 0.25 * z, this._z = (b + E) / z;
    } else {
      const z = 2 * Math.sqrt(1 + _ - u - T);
      this._w = (v - d) / z, this._x = (m + y) / z, this._y = (b + E) / z, this._z = 0.25 * z;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, a) {
    let u = t.dot(a) + 1;
    return u < Number.EPSILON ? (u = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = u) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = u)) : (this._x = t.y * a.z - t.z * a.y, this._y = t.z * a.x - t.x * a.z, this._z = t.x * a.y - t.y * a.x, this._w = u), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Yr(this.dot(t), -1, 1)));
  }
  rotateTowards(t, a) {
    const u = this.angleTo(t);
    if (u === 0)
      return this;
    const d = Math.min(1, a / u);
    return this.slerp(t, d), this;
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
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, a) {
    const u = t._x, d = t._y, m = t._z, v = t._w, T = a._x, b = a._y, y = a._z, E = a._w;
    return this._x = u * E + v * T + d * y - m * b, this._y = d * E + v * b + m * T - u * y, this._z = m * E + v * y + u * b - d * T, this._w = v * E - u * T - d * b - m * y, this._onChangeCallback(), this;
  }
  slerp(t, a) {
    if (a === 0)
      return this;
    if (a === 1)
      return this.copy(t);
    const u = this._x, d = this._y, m = this._z, v = this._w;
    let T = v * t._w + u * t._x + d * t._y + m * t._z;
    if (T < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, T = -T) : this.copy(t), T >= 1)
      return this._w = v, this._x = u, this._y = d, this._z = m, this;
    const b = 1 - T * T;
    if (b <= Number.EPSILON) {
      const z = 1 - a;
      return this._w = z * v + a * this._w, this._x = z * u + a * this._x, this._y = z * d + a * this._y, this._z = z * m + a * this._z, this.normalize(), this;
    }
    const y = Math.sqrt(b), E = Math.atan2(y, T), _ = Math.sin((1 - a) * E) / y, C = Math.sin(a * E) / y;
    return this._w = v * _ + this._w * C, this._x = u * _ + this._x * C, this._y = d * _ + this._y * C, this._z = m * _ + this._z * C, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, a, u) {
    return this.copy(t).slerp(a, u);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), a = 2 * Math.PI * Math.random(), u = Math.random(), d = Math.sqrt(1 - u), m = Math.sqrt(u);
    return this.set(
      d * Math.sin(t),
      d * Math.cos(t),
      m * Math.sin(a),
      m * Math.cos(a)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, a = 0) {
    return this._x = t[a], this._y = t[a + 1], this._z = t[a + 2], this._w = t[a + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], a = 0) {
    return t[a] = this._x, t[a + 1] = this._y, t[a + 2] = this._z, t[a + 3] = this._w, t;
  }
  fromBufferAttribute(t, a) {
    return this._x = t.getX(a), this._y = t.getY(a), this._z = t.getZ(a), this._w = t.getW(a), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class le {
  constructor(t = 0, a = 0, u = 0) {
    le.prototype.isVector3 = !0, this.x = t, this.y = a, this.z = u;
  }
  set(t, a, u) {
    return u === void 0 && (u = this.z), this.x = t, this.y = a, this.z = u, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, a) {
    switch (t) {
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
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, a) {
    return this.x = t.x + a.x, this.y = t.y + a.y, this.z = t.z + a.z, this;
  }
  addScaledVector(t, a) {
    return this.x += t.x * a, this.y += t.y * a, this.z += t.z * a, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, a) {
    return this.x = t.x - a.x, this.y = t.y - a.y, this.z = t.z - a.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, a) {
    return this.x = t.x * a.x, this.y = t.y * a.y, this.z = t.z * a.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Dx.setFromEuler(t));
  }
  applyAxisAngle(t, a) {
    return this.applyQuaternion(Dx.setFromAxisAngle(t, a));
  }
  applyMatrix3(t) {
    const a = this.x, u = this.y, d = this.z, m = t.elements;
    return this.x = m[0] * a + m[3] * u + m[6] * d, this.y = m[1] * a + m[4] * u + m[7] * d, this.z = m[2] * a + m[5] * u + m[8] * d, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const a = this.x, u = this.y, d = this.z, m = t.elements, v = 1 / (m[3] * a + m[7] * u + m[11] * d + m[15]);
    return this.x = (m[0] * a + m[4] * u + m[8] * d + m[12]) * v, this.y = (m[1] * a + m[5] * u + m[9] * d + m[13]) * v, this.z = (m[2] * a + m[6] * u + m[10] * d + m[14]) * v, this;
  }
  applyQuaternion(t) {
    const a = this.x, u = this.y, d = this.z, m = t.x, v = t.y, T = t.z, b = t.w, y = 2 * (v * d - T * u), E = 2 * (T * a - m * d), _ = 2 * (m * u - v * a);
    return this.x = a + b * y + v * _ - T * E, this.y = u + b * E + T * y - m * _, this.z = d + b * _ + m * E - v * y, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const a = this.x, u = this.y, d = this.z, m = t.elements;
    return this.x = m[0] * a + m[4] * u + m[8] * d, this.y = m[1] * a + m[5] * u + m[9] * d, this.z = m[2] * a + m[6] * u + m[10] * d, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, a) {
    return this.x = Math.max(t.x, Math.min(a.x, this.x)), this.y = Math.max(t.y, Math.min(a.y, this.y)), this.z = Math.max(t.z, Math.min(a.z, this.z)), this;
  }
  clampScalar(t, a) {
    return this.x = Math.max(t, Math.min(a, this.x)), this.y = Math.max(t, Math.min(a, this.y)), this.z = Math.max(t, Math.min(a, this.z)), this;
  }
  clampLength(t, a) {
    const u = this.length();
    return this.divideScalar(u || 1).multiplyScalar(Math.max(t, Math.min(a, u)));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, a) {
    return this.x += (t.x - this.x) * a, this.y += (t.y - this.y) * a, this.z += (t.z - this.z) * a, this;
  }
  lerpVectors(t, a, u) {
    return this.x = t.x + (a.x - t.x) * u, this.y = t.y + (a.y - t.y) * u, this.z = t.z + (a.z - t.z) * u, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, a) {
    const u = t.x, d = t.y, m = t.z, v = a.x, T = a.y, b = a.z;
    return this.x = d * b - m * T, this.y = m * v - u * b, this.z = u * T - d * v, this;
  }
  projectOnVector(t) {
    const a = t.lengthSq();
    if (a === 0)
      return this.set(0, 0, 0);
    const u = t.dot(this) / a;
    return this.copy(t).multiplyScalar(u);
  }
  projectOnPlane(t) {
    return zv.copy(this).projectOnVector(t), this.sub(zv);
  }
  reflect(t) {
    return this.sub(zv.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const a = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (a === 0)
      return Math.PI / 2;
    const u = this.dot(t) / a;
    return Math.acos(Yr(u, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const a = this.x - t.x, u = this.y - t.y, d = this.z - t.z;
    return a * a + u * u + d * d;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, a, u) {
    const d = Math.sin(a) * t;
    return this.x = d * Math.sin(u), this.y = Math.cos(a) * t, this.z = d * Math.cos(u), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, a, u) {
    return this.x = t * Math.sin(a), this.y = u, this.z = t * Math.cos(a), this;
  }
  setFromMatrixPosition(t) {
    const a = t.elements;
    return this.x = a[12], this.y = a[13], this.z = a[14], this;
  }
  setFromMatrixScale(t) {
    const a = this.setFromMatrixColumn(t, 0).length(), u = this.setFromMatrixColumn(t, 1).length(), d = this.setFromMatrixColumn(t, 2).length();
    return this.x = a, this.y = u, this.z = d, this;
  }
  setFromMatrixColumn(t, a) {
    return this.fromArray(t.elements, a * 4);
  }
  setFromMatrix3Column(t, a) {
    return this.fromArray(t.elements, a * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, a = 0) {
    return this.x = t[a], this.y = t[a + 1], this.z = t[a + 2], this;
  }
  toArray(t = [], a = 0) {
    return t[a] = this.x, t[a + 1] = this.y, t[a + 2] = this.z, t;
  }
  fromBufferAttribute(t, a) {
    return this.x = t.getX(a), this.y = t.getY(a), this.z = t.getZ(a), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, a = Math.random() * 2 - 1, u = Math.sqrt(1 - a * a);
    return this.x = u * Math.cos(t), this.y = a, this.z = u * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const zv = /* @__PURE__ */ new le(), Dx = /* @__PURE__ */ new pd();
class md {
  constructor(t = new le(1 / 0, 1 / 0, 1 / 0), a = new le(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = a;
  }
  set(t, a) {
    return this.min.copy(t), this.max.copy(a), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let a = 0, u = t.length; a < u; a += 3)
      this.expandByPoint(za.fromArray(t, a));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let a = 0, u = t.count; a < u; a++)
      this.expandByPoint(za.fromBufferAttribute(t, a));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let a = 0, u = t.length; a < u; a++)
      this.expandByPoint(t[a]);
    return this;
  }
  setFromCenterAndSize(t, a) {
    const u = za.copy(a).multiplyScalar(0.5);
    return this.min.copy(t).sub(u), this.max.copy(t).add(u), this;
  }
  setFromObject(t, a = !1) {
    return this.makeEmpty(), this.expandByObject(t, a);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, a = !1) {
    t.updateWorldMatrix(!1, !1);
    const u = t.geometry;
    if (u !== void 0) {
      const m = u.getAttribute("position");
      if (a === !0 && m !== void 0 && t.isInstancedMesh !== !0)
        for (let v = 0, T = m.count; v < T; v++)
          t.isMesh === !0 ? t.getVertexPosition(v, za) : za.fromBufferAttribute(m, v), za.applyMatrix4(t.matrixWorld), this.expandByPoint(za);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Xh.copy(t.boundingBox)) : (u.boundingBox === null && u.computeBoundingBox(), Xh.copy(u.boundingBox)), Xh.applyMatrix4(t.matrixWorld), this.union(Xh);
    }
    const d = t.children;
    for (let m = 0, v = d.length; m < v; m++)
      this.expandByObject(d[m], a);
    return this;
  }
  containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, a) {
    return a.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, za), za.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let a, u;
    return t.normal.x > 0 ? (a = t.normal.x * this.min.x, u = t.normal.x * this.max.x) : (a = t.normal.x * this.max.x, u = t.normal.x * this.min.x), t.normal.y > 0 ? (a += t.normal.y * this.min.y, u += t.normal.y * this.max.y) : (a += t.normal.y * this.max.y, u += t.normal.y * this.min.y), t.normal.z > 0 ? (a += t.normal.z * this.min.z, u += t.normal.z * this.max.z) : (a += t.normal.z * this.max.z, u += t.normal.z * this.min.z), a <= -t.constant && u >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(rd), Zh.subVectors(this.max, rd), _c.subVectors(t.a, rd), Ec.subVectors(t.b, rd), Rc.subVectors(t.c, rd), Kl.subVectors(Ec, _c), $l.subVectors(Rc, Ec), to.subVectors(_c, Rc);
    let a = [
      0,
      -Kl.z,
      Kl.y,
      0,
      -$l.z,
      $l.y,
      0,
      -to.z,
      to.y,
      Kl.z,
      0,
      -Kl.x,
      $l.z,
      0,
      -$l.x,
      to.z,
      0,
      -to.x,
      -Kl.y,
      Kl.x,
      0,
      -$l.y,
      $l.x,
      0,
      -to.y,
      to.x,
      0
    ];
    return !Dv(a, _c, Ec, Rc, Zh) || (a = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Dv(a, _c, Ec, Rc, Zh)) ? !1 : (Jh.crossVectors(Kl, $l), a = [Jh.x, Jh.y, Jh.z], Dv(a, _c, Ec, Rc, Zh));
  }
  clampPoint(t, a) {
    return a.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, za).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(za).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Qs[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Qs[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Qs[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Qs[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Qs[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Qs[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Qs[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Qs[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Qs), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
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
], za = /* @__PURE__ */ new le(), Xh = /* @__PURE__ */ new md(), _c = /* @__PURE__ */ new le(), Ec = /* @__PURE__ */ new le(), Rc = /* @__PURE__ */ new le(), Kl = /* @__PURE__ */ new le(), $l = /* @__PURE__ */ new le(), to = /* @__PURE__ */ new le(), rd = /* @__PURE__ */ new le(), Zh = /* @__PURE__ */ new le(), Jh = /* @__PURE__ */ new le(), no = /* @__PURE__ */ new le();
function Dv(S, t, a, u, d) {
  for (let m = 0, v = S.length - 3; m <= v; m += 3) {
    no.fromArray(S, m);
    const T = d.x * Math.abs(no.x) + d.y * Math.abs(no.y) + d.z * Math.abs(no.z), b = t.dot(no), y = a.dot(no), E = u.dot(no);
    if (Math.max(-Math.max(b, y, E), Math.min(b, y, E)) > T)
      return !1;
  }
  return !0;
}
const GR = /* @__PURE__ */ new md(), id = /* @__PURE__ */ new le(), Av = /* @__PURE__ */ new le();
class cy {
  constructor(t = new le(), a = -1) {
    this.isSphere = !0, this.center = t, this.radius = a;
  }
  set(t, a) {
    return this.center.copy(t), this.radius = a, this;
  }
  setFromPoints(t, a) {
    const u = this.center;
    a !== void 0 ? u.copy(a) : GR.setFromPoints(t).getCenter(u);
    let d = 0;
    for (let m = 0, v = t.length; m < v; m++)
      d = Math.max(d, u.distanceToSquared(t[m]));
    return this.radius = Math.sqrt(d), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const a = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= a * a;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, a) {
    const u = this.center.distanceToSquared(t);
    return a.copy(t), u > this.radius * this.radius && (a.sub(this.center).normalize(), a.multiplyScalar(this.radius).add(this.center)), a;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    id.subVectors(t, this.center);
    const a = id.lengthSq();
    if (a > this.radius * this.radius) {
      const u = Math.sqrt(a), d = (u - this.radius) * 0.5;
      this.center.addScaledVector(id, d / u), this.radius += d;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Av.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(id.copy(t.center).add(Av)), this.expandByPoint(id.copy(t.center).sub(Av))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gs = /* @__PURE__ */ new le(), Nv = /* @__PURE__ */ new le(), Kh = /* @__PURE__ */ new le(), eu = /* @__PURE__ */ new le(), Fv = /* @__PURE__ */ new le(), $h = /* @__PURE__ */ new le(), Ov = /* @__PURE__ */ new le();
class _1 {
  constructor(t = new le(), a = new le(0, 0, -1)) {
    this.origin = t, this.direction = a;
  }
  set(t, a) {
    return this.origin.copy(t), this.direction.copy(a), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, a) {
    return a.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Gs)), this;
  }
  closestPointToPoint(t, a) {
    a.subVectors(t, this.origin);
    const u = a.dot(this.direction);
    return u < 0 ? a.copy(this.origin) : a.copy(this.origin).addScaledVector(this.direction, u);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const a = Gs.subVectors(t, this.origin).dot(this.direction);
    return a < 0 ? this.origin.distanceToSquared(t) : (Gs.copy(this.origin).addScaledVector(this.direction, a), Gs.distanceToSquared(t));
  }
  distanceSqToSegment(t, a, u, d) {
    Nv.copy(t).add(a).multiplyScalar(0.5), Kh.copy(a).sub(t).normalize(), eu.copy(this.origin).sub(Nv);
    const m = t.distanceTo(a) * 0.5, v = -this.direction.dot(Kh), T = eu.dot(this.direction), b = -eu.dot(Kh), y = eu.lengthSq(), E = Math.abs(1 - v * v);
    let _, C, z, A;
    if (E > 0)
      if (_ = v * b - T, C = v * T - b, A = m * E, _ >= 0)
        if (C >= -A)
          if (C <= A) {
            const B = 1 / E;
            _ *= B, C *= B, z = _ * (_ + v * C + 2 * T) + C * (v * _ + C + 2 * b) + y;
          } else
            C = m, _ = Math.max(0, -(v * C + T)), z = -_ * _ + C * (C + 2 * b) + y;
        else
          C = -m, _ = Math.max(0, -(v * C + T)), z = -_ * _ + C * (C + 2 * b) + y;
      else
        C <= -A ? (_ = Math.max(0, -(-v * m + T)), C = _ > 0 ? -m : Math.min(Math.max(-m, -b), m), z = -_ * _ + C * (C + 2 * b) + y) : C <= A ? (_ = 0, C = Math.min(Math.max(-m, -b), m), z = C * (C + 2 * b) + y) : (_ = Math.max(0, -(v * m + T)), C = _ > 0 ? m : Math.min(Math.max(-m, -b), m), z = -_ * _ + C * (C + 2 * b) + y);
    else
      C = v > 0 ? -m : m, _ = Math.max(0, -(v * C + T)), z = -_ * _ + C * (C + 2 * b) + y;
    return u && u.copy(this.origin).addScaledVector(this.direction, _), d && d.copy(Nv).addScaledVector(Kh, C), z;
  }
  intersectSphere(t, a) {
    Gs.subVectors(t.center, this.origin);
    const u = Gs.dot(this.direction), d = Gs.dot(Gs) - u * u, m = t.radius * t.radius;
    if (d > m)
      return null;
    const v = Math.sqrt(m - d), T = u - v, b = u + v;
    return b < 0 ? null : T < 0 ? this.at(b, a) : this.at(T, a);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const a = t.normal.dot(this.direction);
    if (a === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const u = -(this.origin.dot(t.normal) + t.constant) / a;
    return u >= 0 ? u : null;
  }
  intersectPlane(t, a) {
    const u = this.distanceToPlane(t);
    return u === null ? null : this.at(u, a);
  }
  intersectsPlane(t) {
    const a = t.distanceToPoint(this.origin);
    return a === 0 || t.normal.dot(this.direction) * a < 0;
  }
  intersectBox(t, a) {
    let u, d, m, v, T, b;
    const y = 1 / this.direction.x, E = 1 / this.direction.y, _ = 1 / this.direction.z, C = this.origin;
    return y >= 0 ? (u = (t.min.x - C.x) * y, d = (t.max.x - C.x) * y) : (u = (t.max.x - C.x) * y, d = (t.min.x - C.x) * y), E >= 0 ? (m = (t.min.y - C.y) * E, v = (t.max.y - C.y) * E) : (m = (t.max.y - C.y) * E, v = (t.min.y - C.y) * E), u > v || m > d || ((m > u || isNaN(u)) && (u = m), (v < d || isNaN(d)) && (d = v), _ >= 0 ? (T = (t.min.z - C.z) * _, b = (t.max.z - C.z) * _) : (T = (t.max.z - C.z) * _, b = (t.min.z - C.z) * _), u > b || T > d) || ((T > u || u !== u) && (u = T), (b < d || d !== d) && (d = b), d < 0) ? null : this.at(u >= 0 ? u : d, a);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Gs) !== null;
  }
  intersectTriangle(t, a, u, d, m) {
    Fv.subVectors(a, t), $h.subVectors(u, t), Ov.crossVectors(Fv, $h);
    let v = this.direction.dot(Ov), T;
    if (v > 0) {
      if (d)
        return null;
      T = 1;
    } else if (v < 0)
      T = -1, v = -v;
    else
      return null;
    eu.subVectors(this.origin, t);
    const b = T * this.direction.dot($h.crossVectors(eu, $h));
    if (b < 0)
      return null;
    const y = T * this.direction.dot(Fv.cross(eu));
    if (y < 0 || b + y > v)
      return null;
    const E = -T * eu.dot(Ov);
    return E < 0 ? null : this.at(E / v, m);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Wr {
  constructor(t, a, u, d, m, v, T, b, y, E, _, C, z, A, B, k) {
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
    ], t !== void 0 && this.set(t, a, u, d, m, v, T, b, y, E, _, C, z, A, B, k);
  }
  set(t, a, u, d, m, v, T, b, y, E, _, C, z, A, B, k) {
    const V = this.elements;
    return V[0] = t, V[4] = a, V[8] = u, V[12] = d, V[1] = m, V[5] = v, V[9] = T, V[13] = b, V[2] = y, V[6] = E, V[10] = _, V[14] = C, V[3] = z, V[7] = A, V[11] = B, V[15] = k, this;
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
  copy(t) {
    const a = this.elements, u = t.elements;
    return a[0] = u[0], a[1] = u[1], a[2] = u[2], a[3] = u[3], a[4] = u[4], a[5] = u[5], a[6] = u[6], a[7] = u[7], a[8] = u[8], a[9] = u[9], a[10] = u[10], a[11] = u[11], a[12] = u[12], a[13] = u[13], a[14] = u[14], a[15] = u[15], this;
  }
  copyPosition(t) {
    const a = this.elements, u = t.elements;
    return a[12] = u[12], a[13] = u[13], a[14] = u[14], this;
  }
  setFromMatrix3(t) {
    const a = t.elements;
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
  extractBasis(t, a, u) {
    return t.setFromMatrixColumn(this, 0), a.setFromMatrixColumn(this, 1), u.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, a, u) {
    return this.set(
      t.x,
      a.x,
      u.x,
      0,
      t.y,
      a.y,
      u.y,
      0,
      t.z,
      a.z,
      u.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const a = this.elements, u = t.elements, d = 1 / bc.setFromMatrixColumn(t, 0).length(), m = 1 / bc.setFromMatrixColumn(t, 1).length(), v = 1 / bc.setFromMatrixColumn(t, 2).length();
    return a[0] = u[0] * d, a[1] = u[1] * d, a[2] = u[2] * d, a[3] = 0, a[4] = u[4] * m, a[5] = u[5] * m, a[6] = u[6] * m, a[7] = 0, a[8] = u[8] * v, a[9] = u[9] * v, a[10] = u[10] * v, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const a = this.elements, u = t.x, d = t.y, m = t.z, v = Math.cos(u), T = Math.sin(u), b = Math.cos(d), y = Math.sin(d), E = Math.cos(m), _ = Math.sin(m);
    if (t.order === "XYZ") {
      const C = v * E, z = v * _, A = T * E, B = T * _;
      a[0] = b * E, a[4] = -b * _, a[8] = y, a[1] = z + A * y, a[5] = C - B * y, a[9] = -T * b, a[2] = B - C * y, a[6] = A + z * y, a[10] = v * b;
    } else if (t.order === "YXZ") {
      const C = b * E, z = b * _, A = y * E, B = y * _;
      a[0] = C + B * T, a[4] = A * T - z, a[8] = v * y, a[1] = v * _, a[5] = v * E, a[9] = -T, a[2] = z * T - A, a[6] = B + C * T, a[10] = v * b;
    } else if (t.order === "ZXY") {
      const C = b * E, z = b * _, A = y * E, B = y * _;
      a[0] = C - B * T, a[4] = -v * _, a[8] = A + z * T, a[1] = z + A * T, a[5] = v * E, a[9] = B - C * T, a[2] = -v * y, a[6] = T, a[10] = v * b;
    } else if (t.order === "ZYX") {
      const C = v * E, z = v * _, A = T * E, B = T * _;
      a[0] = b * E, a[4] = A * y - z, a[8] = C * y + B, a[1] = b * _, a[5] = B * y + C, a[9] = z * y - A, a[2] = -y, a[6] = T * b, a[10] = v * b;
    } else if (t.order === "YZX") {
      const C = v * b, z = v * y, A = T * b, B = T * y;
      a[0] = b * E, a[4] = B - C * _, a[8] = A * _ + z, a[1] = _, a[5] = v * E, a[9] = -T * E, a[2] = -y * E, a[6] = z * _ + A, a[10] = C - B * _;
    } else if (t.order === "XZY") {
      const C = v * b, z = v * y, A = T * b, B = T * y;
      a[0] = b * E, a[4] = -_, a[8] = y * E, a[1] = C * _ + B, a[5] = v * E, a[9] = z * _ - A, a[2] = A * _ - z, a[6] = T * E, a[10] = B * _ + C;
    }
    return a[3] = 0, a[7] = 0, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(XR, t, ZR);
  }
  lookAt(t, a, u) {
    const d = this.elements;
    return Fi.subVectors(t, a), Fi.lengthSq() === 0 && (Fi.z = 1), Fi.normalize(), tu.crossVectors(u, Fi), tu.lengthSq() === 0 && (Math.abs(u.z) === 1 ? Fi.x += 1e-4 : Fi.z += 1e-4, Fi.normalize(), tu.crossVectors(u, Fi)), tu.normalize(), ep.crossVectors(Fi, tu), d[0] = tu.x, d[4] = ep.x, d[8] = Fi.x, d[1] = tu.y, d[5] = ep.y, d[9] = Fi.y, d[2] = tu.z, d[6] = ep.z, d[10] = Fi.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, a) {
    const u = t.elements, d = a.elements, m = this.elements, v = u[0], T = u[4], b = u[8], y = u[12], E = u[1], _ = u[5], C = u[9], z = u[13], A = u[2], B = u[6], k = u[10], V = u[14], se = u[3], ie = u[7], fe = u[11], ve = u[15], be = d[0], $ = d[4], ue = d[8], et = d[12], ye = d[1], Me = d[5], Re = d[9], ge = d[13], Le = d[2], Ze = d[6], Ye = d[10], xe = d[14], H = d[3], ae = d[7], ee = d[11], O = d[15];
    return m[0] = v * be + T * ye + b * Le + y * H, m[4] = v * $ + T * Me + b * Ze + y * ae, m[8] = v * ue + T * Re + b * Ye + y * ee, m[12] = v * et + T * ge + b * xe + y * O, m[1] = E * be + _ * ye + C * Le + z * H, m[5] = E * $ + _ * Me + C * Ze + z * ae, m[9] = E * ue + _ * Re + C * Ye + z * ee, m[13] = E * et + _ * ge + C * xe + z * O, m[2] = A * be + B * ye + k * Le + V * H, m[6] = A * $ + B * Me + k * Ze + V * ae, m[10] = A * ue + B * Re + k * Ye + V * ee, m[14] = A * et + B * ge + k * xe + V * O, m[3] = se * be + ie * ye + fe * Le + ve * H, m[7] = se * $ + ie * Me + fe * Ze + ve * ae, m[11] = se * ue + ie * Re + fe * Ye + ve * ee, m[15] = se * et + ie * ge + fe * xe + ve * O, this;
  }
  multiplyScalar(t) {
    const a = this.elements;
    return a[0] *= t, a[4] *= t, a[8] *= t, a[12] *= t, a[1] *= t, a[5] *= t, a[9] *= t, a[13] *= t, a[2] *= t, a[6] *= t, a[10] *= t, a[14] *= t, a[3] *= t, a[7] *= t, a[11] *= t, a[15] *= t, this;
  }
  determinant() {
    const t = this.elements, a = t[0], u = t[4], d = t[8], m = t[12], v = t[1], T = t[5], b = t[9], y = t[13], E = t[2], _ = t[6], C = t[10], z = t[14], A = t[3], B = t[7], k = t[11], V = t[15];
    return A * (+m * b * _ - d * y * _ - m * T * C + u * y * C + d * T * z - u * b * z) + B * (+a * b * z - a * y * C + m * v * C - d * v * z + d * y * E - m * b * E) + k * (+a * y * _ - a * T * z - m * v * _ + u * v * z + m * T * E - u * y * E) + V * (-d * T * E - a * b * _ + a * T * C + d * v * _ - u * v * C + u * b * E);
  }
  transpose() {
    const t = this.elements;
    let a;
    return a = t[1], t[1] = t[4], t[4] = a, a = t[2], t[2] = t[8], t[8] = a, a = t[6], t[6] = t[9], t[9] = a, a = t[3], t[3] = t[12], t[12] = a, a = t[7], t[7] = t[13], t[13] = a, a = t[11], t[11] = t[14], t[14] = a, this;
  }
  setPosition(t, a, u) {
    const d = this.elements;
    return t.isVector3 ? (d[12] = t.x, d[13] = t.y, d[14] = t.z) : (d[12] = t, d[13] = a, d[14] = u), this;
  }
  invert() {
    const t = this.elements, a = t[0], u = t[1], d = t[2], m = t[3], v = t[4], T = t[5], b = t[6], y = t[7], E = t[8], _ = t[9], C = t[10], z = t[11], A = t[12], B = t[13], k = t[14], V = t[15], se = _ * k * y - B * C * y + B * b * z - T * k * z - _ * b * V + T * C * V, ie = A * C * y - E * k * y - A * b * z + v * k * z + E * b * V - v * C * V, fe = E * B * y - A * _ * y + A * T * z - v * B * z - E * T * V + v * _ * V, ve = A * _ * b - E * B * b - A * T * C + v * B * C + E * T * k - v * _ * k, be = a * se + u * ie + d * fe + m * ve;
    if (be === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const $ = 1 / be;
    return t[0] = se * $, t[1] = (B * C * m - _ * k * m - B * d * z + u * k * z + _ * d * V - u * C * V) * $, t[2] = (T * k * m - B * b * m + B * d * y - u * k * y - T * d * V + u * b * V) * $, t[3] = (_ * b * m - T * C * m - _ * d * y + u * C * y + T * d * z - u * b * z) * $, t[4] = ie * $, t[5] = (E * k * m - A * C * m + A * d * z - a * k * z - E * d * V + a * C * V) * $, t[6] = (A * b * m - v * k * m - A * d * y + a * k * y + v * d * V - a * b * V) * $, t[7] = (v * C * m - E * b * m + E * d * y - a * C * y - v * d * z + a * b * z) * $, t[8] = fe * $, t[9] = (A * _ * m - E * B * m - A * u * z + a * B * z + E * u * V - a * _ * V) * $, t[10] = (v * B * m - A * T * m + A * u * y - a * B * y - v * u * V + a * T * V) * $, t[11] = (E * T * m - v * _ * m - E * u * y + a * _ * y + v * u * z - a * T * z) * $, t[12] = ve * $, t[13] = (E * B * d - A * _ * d + A * u * C - a * B * C - E * u * k + a * _ * k) * $, t[14] = (A * T * d - v * B * d - A * u * b + a * B * b + v * u * k - a * T * k) * $, t[15] = (v * _ * d - E * T * d + E * u * b - a * _ * b - v * u * C + a * T * C) * $, this;
  }
  scale(t) {
    const a = this.elements, u = t.x, d = t.y, m = t.z;
    return a[0] *= u, a[4] *= d, a[8] *= m, a[1] *= u, a[5] *= d, a[9] *= m, a[2] *= u, a[6] *= d, a[10] *= m, a[3] *= u, a[7] *= d, a[11] *= m, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, a = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], u = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], d = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(a, u, d));
  }
  makeTranslation(t, a, u) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
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
  makeRotationX(t) {
    const a = Math.cos(t), u = Math.sin(t);
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
  makeRotationY(t) {
    const a = Math.cos(t), u = Math.sin(t);
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
  makeRotationZ(t) {
    const a = Math.cos(t), u = Math.sin(t);
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
  makeRotationAxis(t, a) {
    const u = Math.cos(a), d = Math.sin(a), m = 1 - u, v = t.x, T = t.y, b = t.z, y = m * v, E = m * T;
    return this.set(
      y * v + u,
      y * T - d * b,
      y * b + d * T,
      0,
      y * T + d * b,
      E * T + u,
      E * b - d * v,
      0,
      y * b - d * T,
      E * b + d * v,
      m * b * b + u,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, a, u) {
    return this.set(
      t,
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
  makeShear(t, a, u, d, m, v) {
    return this.set(
      1,
      u,
      m,
      0,
      t,
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
  compose(t, a, u) {
    const d = this.elements, m = a._x, v = a._y, T = a._z, b = a._w, y = m + m, E = v + v, _ = T + T, C = m * y, z = m * E, A = m * _, B = v * E, k = v * _, V = T * _, se = b * y, ie = b * E, fe = b * _, ve = u.x, be = u.y, $ = u.z;
    return d[0] = (1 - (B + V)) * ve, d[1] = (z + fe) * ve, d[2] = (A - ie) * ve, d[3] = 0, d[4] = (z - fe) * be, d[5] = (1 - (C + V)) * be, d[6] = (k + se) * be, d[7] = 0, d[8] = (A + ie) * $, d[9] = (k - se) * $, d[10] = (1 - (C + B)) * $, d[11] = 0, d[12] = t.x, d[13] = t.y, d[14] = t.z, d[15] = 1, this;
  }
  decompose(t, a, u) {
    const d = this.elements;
    let m = bc.set(d[0], d[1], d[2]).length();
    const v = bc.set(d[4], d[5], d[6]).length(), T = bc.set(d[8], d[9], d[10]).length();
    this.determinant() < 0 && (m = -m), t.x = d[12], t.y = d[13], t.z = d[14], Da.copy(this);
    const y = 1 / m, E = 1 / v, _ = 1 / T;
    return Da.elements[0] *= y, Da.elements[1] *= y, Da.elements[2] *= y, Da.elements[4] *= E, Da.elements[5] *= E, Da.elements[6] *= E, Da.elements[8] *= _, Da.elements[9] *= _, Da.elements[10] *= _, a.setFromRotationMatrix(Da), u.x = m, u.y = v, u.z = T, this;
  }
  makePerspective(t, a, u, d, m, v, T = od) {
    const b = this.elements, y = 2 * m / (a - t), E = 2 * m / (u - d), _ = (a + t) / (a - t), C = (u + d) / (u - d);
    let z, A;
    if (T === od)
      z = -(v + m) / (v - m), A = -2 * v * m / (v - m);
    else if (T === bx)
      z = -v / (v - m), A = -v * m / (v - m);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + T);
    return b[0] = y, b[4] = 0, b[8] = _, b[12] = 0, b[1] = 0, b[5] = E, b[9] = C, b[13] = 0, b[2] = 0, b[6] = 0, b[10] = z, b[14] = A, b[3] = 0, b[7] = 0, b[11] = -1, b[15] = 0, this;
  }
  makeOrthographic(t, a, u, d, m, v, T = od) {
    const b = this.elements, y = 1 / (a - t), E = 1 / (u - d), _ = 1 / (v - m), C = (a + t) * y, z = (u + d) * E;
    let A, B;
    if (T === od)
      A = (v + m) * _, B = -2 * _;
    else if (T === bx)
      A = m * _, B = -1 * _;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + T);
    return b[0] = 2 * y, b[4] = 0, b[8] = 0, b[12] = -C, b[1] = 0, b[5] = 2 * E, b[9] = 0, b[13] = -z, b[2] = 0, b[6] = 0, b[10] = B, b[14] = -A, b[3] = 0, b[7] = 0, b[11] = 0, b[15] = 1, this;
  }
  equals(t) {
    const a = this.elements, u = t.elements;
    for (let d = 0; d < 16; d++)
      if (a[d] !== u[d])
        return !1;
    return !0;
  }
  fromArray(t, a = 0) {
    for (let u = 0; u < 16; u++)
      this.elements[u] = t[u + a];
    return this;
  }
  toArray(t = [], a = 0) {
    const u = this.elements;
    return t[a] = u[0], t[a + 1] = u[1], t[a + 2] = u[2], t[a + 3] = u[3], t[a + 4] = u[4], t[a + 5] = u[5], t[a + 6] = u[6], t[a + 7] = u[7], t[a + 8] = u[8], t[a + 9] = u[9], t[a + 10] = u[10], t[a + 11] = u[11], t[a + 12] = u[12], t[a + 13] = u[13], t[a + 14] = u[14], t[a + 15] = u[15], t;
  }
}
const bc = /* @__PURE__ */ new le(), Da = /* @__PURE__ */ new Wr(), XR = /* @__PURE__ */ new le(0, 0, 0), ZR = /* @__PURE__ */ new le(1, 1, 1), tu = /* @__PURE__ */ new le(), ep = /* @__PURE__ */ new le(), Fi = /* @__PURE__ */ new le(), Ax = /* @__PURE__ */ new Wr(), Nx = /* @__PURE__ */ new pd();
class lo {
  constructor(t = 0, a = 0, u = 0, d = lo.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = a, this._z = u, this._order = d;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, a, u, d = this._order) {
    return this._x = t, this._y = a, this._z = u, this._order = d, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, a = this._order, u = !0) {
    const d = t.elements, m = d[0], v = d[4], T = d[8], b = d[1], y = d[5], E = d[9], _ = d[2], C = d[6], z = d[10];
    switch (a) {
      case "XYZ":
        this._y = Math.asin(Yr(T, -1, 1)), Math.abs(T) < 0.9999999 ? (this._x = Math.atan2(-E, z), this._z = Math.atan2(-v, m)) : (this._x = Math.atan2(C, y), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Yr(E, -1, 1)), Math.abs(E) < 0.9999999 ? (this._y = Math.atan2(T, z), this._z = Math.atan2(b, y)) : (this._y = Math.atan2(-_, m), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Yr(C, -1, 1)), Math.abs(C) < 0.9999999 ? (this._y = Math.atan2(-_, z), this._z = Math.atan2(-v, y)) : (this._y = 0, this._z = Math.atan2(b, m));
        break;
      case "ZYX":
        this._y = Math.asin(-Yr(_, -1, 1)), Math.abs(_) < 0.9999999 ? (this._x = Math.atan2(C, z), this._z = Math.atan2(b, m)) : (this._x = 0, this._z = Math.atan2(-v, y));
        break;
      case "YZX":
        this._z = Math.asin(Yr(b, -1, 1)), Math.abs(b) < 0.9999999 ? (this._x = Math.atan2(-E, y), this._y = Math.atan2(-_, m)) : (this._x = 0, this._y = Math.atan2(T, z));
        break;
      case "XZY":
        this._z = Math.asin(-Yr(v, -1, 1)), Math.abs(v) < 0.9999999 ? (this._x = Math.atan2(C, y), this._y = Math.atan2(T, m)) : (this._x = Math.atan2(-E, z), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + a);
    }
    return this._order = a, u === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, a, u) {
    return Ax.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ax, a, u);
  }
  setFromVector3(t, a = this._order) {
    return this.set(t.x, t.y, t.z, a);
  }
  reorder(t) {
    return Nx.setFromEuler(this), this.setFromQuaternion(Nx, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], a = 0) {
    return t[a] = this._x, t[a + 1] = this._y, t[a + 2] = this._z, t[a + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
lo.DEFAULT_ORDER = "XYZ";
class pp {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let JR = 0;
const Fx = /* @__PURE__ */ new le(), Tc = /* @__PURE__ */ new pd(), Xs = /* @__PURE__ */ new Wr(), tp = /* @__PURE__ */ new le(), ad = /* @__PURE__ */ new le(), KR = /* @__PURE__ */ new le(), $R = /* @__PURE__ */ new pd(), Ox = /* @__PURE__ */ new le(1, 0, 0), Ux = /* @__PURE__ */ new le(0, 1, 0), Lx = /* @__PURE__ */ new le(0, 0, 1), Bx = { type: "added" }, eb = { type: "removed" }, Mc = { type: "childadded", child: null }, Uv = { type: "childremoved", child: null };
class sa extends hd {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: JR++ }), this.uuid = Bc(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = sa.DEFAULT_UP.clone();
    const t = new le(), a = new lo(), u = new pd(), d = new le(1, 1, 1);
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
        value: t
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
        value: new lu()
      }
    }), this.matrix = new Wr(), this.matrixWorld = new Wr(), this.matrixAutoUpdate = sa.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = sa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new pp(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, a) {
    this.quaternion.setFromAxisAngle(t, a);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, a) {
    return Tc.setFromAxisAngle(t, a), this.quaternion.multiply(Tc), this;
  }
  rotateOnWorldAxis(t, a) {
    return Tc.setFromAxisAngle(t, a), this.quaternion.premultiply(Tc), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ox, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Ux, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Lx, t);
  }
  translateOnAxis(t, a) {
    return Fx.copy(t).applyQuaternion(this.quaternion), this.position.add(Fx.multiplyScalar(a)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ox, t);
  }
  translateY(t) {
    return this.translateOnAxis(Ux, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Lx, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Xs.copy(this.matrixWorld).invert());
  }
  lookAt(t, a, u) {
    t.isVector3 ? tp.copy(t) : tp.set(t, a, u);
    const d = this.parent;
    this.updateWorldMatrix(!0, !1), ad.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xs.lookAt(ad, tp, this.up) : Xs.lookAt(tp, ad, this.up), this.quaternion.setFromRotationMatrix(Xs), d && (Xs.extractRotation(d.matrixWorld), Tc.setFromRotationMatrix(Xs), this.quaternion.premultiply(Tc.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let a = 0; a < arguments.length; a++)
        this.add(arguments[a]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Bx), Mc.child = t, this.dispatchEvent(Mc), Mc.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let u = 0; u < arguments.length; u++)
        this.remove(arguments[u]);
      return this;
    }
    const a = this.children.indexOf(t);
    return a !== -1 && (t.parent = null, this.children.splice(a, 1), t.dispatchEvent(eb), Uv.child = t, this.dispatchEvent(Uv), Uv.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Xs.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Xs.multiply(t.parent.matrixWorld)), t.applyMatrix4(Xs), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Bx), Mc.child = t, this.dispatchEvent(Mc), Mc.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, a) {
    if (this[t] === a)
      return this;
    for (let u = 0, d = this.children.length; u < d; u++) {
      const v = this.children[u].getObjectByProperty(t, a);
      if (v !== void 0)
        return v;
    }
  }
  getObjectsByProperty(t, a, u = []) {
    this[t] === a && u.push(this);
    const d = this.children;
    for (let m = 0, v = d.length; m < v; m++)
      d[m].getObjectsByProperty(t, a, u);
    return u;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ad, t, KR), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ad, $R, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const a = this.matrixWorld.elements;
    return t.set(a[8], a[9], a[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const a = this.children;
    for (let u = 0, d = a.length; u < d; u++)
      a[u].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1)
      return;
    t(this);
    const a = this.children;
    for (let u = 0, d = a.length; u < d; u++)
      a[u].traverseVisible(t);
  }
  traverseAncestors(t) {
    const a = this.parent;
    a !== null && (t(a), a.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    const a = this.children;
    for (let u = 0, d = a.length; u < d; u++) {
      const m = a[u];
      (m.matrixWorldAutoUpdate === !0 || t === !0) && m.updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, a) {
    const u = this.parent;
    if (t === !0 && u !== null && u.matrixWorldAutoUpdate === !0 && u.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), a === !0) {
      const d = this.children;
      for (let m = 0, v = d.length; m < v; m++) {
        const T = d[m];
        T.matrixWorldAutoUpdate === !0 && T.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const a = t === void 0 || typeof t == "string", u = {};
    a && (t = {
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
    d.uuid = this.uuid, d.type = this.type, this.name !== "" && (d.name = this.name), this.castShadow === !0 && (d.castShadow = !0), this.receiveShadow === !0 && (d.receiveShadow = !0), this.visible === !1 && (d.visible = !1), this.frustumCulled === !1 && (d.frustumCulled = !1), this.renderOrder !== 0 && (d.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (d.userData = this.userData), d.layers = this.layers.mask, d.matrix = this.matrix.toArray(), d.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (d.matrixAutoUpdate = !1), this.isInstancedMesh && (d.type = "InstancedMesh", d.count = this.count, d.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (d.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (d.type = "BatchedMesh", d.perObjectFrustumCulled = this.perObjectFrustumCulled, d.sortObjects = this.sortObjects, d.drawRanges = this._drawRanges, d.reservedRanges = this._reservedRanges, d.visibility = this._visibility, d.active = this._active, d.bounds = this._bounds.map((T) => ({
      boxInitialized: T.boxInitialized,
      boxMin: T.box.min.toArray(),
      boxMax: T.box.max.toArray(),
      sphereInitialized: T.sphereInitialized,
      sphereRadius: T.sphere.radius,
      sphereCenter: T.sphere.center.toArray()
    })), d.maxGeometryCount = this._maxGeometryCount, d.maxVertexCount = this._maxVertexCount, d.maxIndexCount = this._maxIndexCount, d.geometryInitialized = this._geometryInitialized, d.geometryCount = this._geometryCount, d.matricesTexture = this._matricesTexture.toJSON(t), this.boundingSphere !== null && (d.boundingSphere = {
      center: d.boundingSphere.center.toArray(),
      radius: d.boundingSphere.radius
    }), this.boundingBox !== null && (d.boundingBox = {
      min: d.boundingBox.min.toArray(),
      max: d.boundingBox.max.toArray()
    }));
    function m(T, b) {
      return T[b.uuid] === void 0 && (T[b.uuid] = b.toJSON(t)), b.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? d.background = this.background.toJSON() : this.background.isTexture && (d.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (d.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      d.geometry = m(t.geometries, this.geometry);
      const T = this.geometry.parameters;
      if (T !== void 0 && T.shapes !== void 0) {
        const b = T.shapes;
        if (Array.isArray(b))
          for (let y = 0, E = b.length; y < E; y++) {
            const _ = b[y];
            m(t.shapes, _);
          }
        else
          m(t.shapes, b);
      }
    }
    if (this.isSkinnedMesh && (d.bindMode = this.bindMode, d.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (m(t.skeletons, this.skeleton), d.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const T = [];
        for (let b = 0, y = this.material.length; b < y; b++)
          T.push(m(t.materials, this.material[b]));
        d.material = T;
      } else
        d.material = m(t.materials, this.material);
    if (this.children.length > 0) {
      d.children = [];
      for (let T = 0; T < this.children.length; T++)
        d.children.push(this.children[T].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      d.animations = [];
      for (let T = 0; T < this.animations.length; T++) {
        const b = this.animations[T];
        d.animations.push(m(t.animations, b));
      }
    }
    if (a) {
      const T = v(t.geometries), b = v(t.materials), y = v(t.textures), E = v(t.images), _ = v(t.shapes), C = v(t.skeletons), z = v(t.animations), A = v(t.nodes);
      T.length > 0 && (u.geometries = T), b.length > 0 && (u.materials = b), y.length > 0 && (u.textures = y), E.length > 0 && (u.images = E), _.length > 0 && (u.shapes = _), C.length > 0 && (u.skeletons = C), z.length > 0 && (u.animations = z), A.length > 0 && (u.nodes = A);
    }
    return u.object = d, u;
    function v(T) {
      const b = [];
      for (const y in T) {
        const E = T[y];
        delete E.metadata, b.push(E);
      }
      return b;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, a = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), a === !0)
      for (let u = 0; u < t.children.length; u++) {
        const d = t.children[u];
        this.add(d.clone());
      }
    return this;
  }
}
sa.DEFAULT_UP = /* @__PURE__ */ new le(0, 1, 0);
sa.DEFAULT_MATRIX_AUTO_UPDATE = !0;
sa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Aa = /* @__PURE__ */ new le(), Zs = /* @__PURE__ */ new le(), Lv = /* @__PURE__ */ new le(), Js = /* @__PURE__ */ new le(), Cc = /* @__PURE__ */ new le(), wc = /* @__PURE__ */ new le(), kx = /* @__PURE__ */ new le(), Bv = /* @__PURE__ */ new le(), kv = /* @__PURE__ */ new le(), Hv = /* @__PURE__ */ new le();
class us {
  constructor(t = new le(), a = new le(), u = new le()) {
    this.a = t, this.b = a, this.c = u;
  }
  static getNormal(t, a, u, d) {
    d.subVectors(u, a), Aa.subVectors(t, a), d.cross(Aa);
    const m = d.lengthSq();
    return m > 0 ? d.multiplyScalar(1 / Math.sqrt(m)) : d.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, a, u, d, m) {
    Aa.subVectors(d, a), Zs.subVectors(u, a), Lv.subVectors(t, a);
    const v = Aa.dot(Aa), T = Aa.dot(Zs), b = Aa.dot(Lv), y = Zs.dot(Zs), E = Zs.dot(Lv), _ = v * y - T * T;
    if (_ === 0)
      return m.set(0, 0, 0), null;
    const C = 1 / _, z = (y * b - T * E) * C, A = (v * E - T * b) * C;
    return m.set(1 - z - A, A, z);
  }
  static containsPoint(t, a, u, d) {
    return this.getBarycoord(t, a, u, d, Js) === null ? !1 : Js.x >= 0 && Js.y >= 0 && Js.x + Js.y <= 1;
  }
  static getInterpolation(t, a, u, d, m, v, T, b) {
    return this.getBarycoord(t, a, u, d, Js) === null ? (b.x = 0, b.y = 0, "z" in b && (b.z = 0), "w" in b && (b.w = 0), null) : (b.setScalar(0), b.addScaledVector(m, Js.x), b.addScaledVector(v, Js.y), b.addScaledVector(T, Js.z), b);
  }
  static isFrontFacing(t, a, u, d) {
    return Aa.subVectors(u, a), Zs.subVectors(t, a), Aa.cross(Zs).dot(d) < 0;
  }
  set(t, a, u) {
    return this.a.copy(t), this.b.copy(a), this.c.copy(u), this;
  }
  setFromPointsAndIndices(t, a, u, d) {
    return this.a.copy(t[a]), this.b.copy(t[u]), this.c.copy(t[d]), this;
  }
  setFromAttributeAndIndices(t, a, u, d) {
    return this.a.fromBufferAttribute(t, a), this.b.fromBufferAttribute(t, u), this.c.fromBufferAttribute(t, d), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return Aa.subVectors(this.c, this.b), Zs.subVectors(this.a, this.b), Aa.cross(Zs).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return us.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, a) {
    return us.getBarycoord(t, this.a, this.b, this.c, a);
  }
  getInterpolation(t, a, u, d, m) {
    return us.getInterpolation(t, this.a, this.b, this.c, a, u, d, m);
  }
  containsPoint(t) {
    return us.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return us.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, a) {
    const u = this.a, d = this.b, m = this.c;
    let v, T;
    Cc.subVectors(d, u), wc.subVectors(m, u), Bv.subVectors(t, u);
    const b = Cc.dot(Bv), y = wc.dot(Bv);
    if (b <= 0 && y <= 0)
      return a.copy(u);
    kv.subVectors(t, d);
    const E = Cc.dot(kv), _ = wc.dot(kv);
    if (E >= 0 && _ <= E)
      return a.copy(d);
    const C = b * _ - E * y;
    if (C <= 0 && b >= 0 && E <= 0)
      return v = b / (b - E), a.copy(u).addScaledVector(Cc, v);
    Hv.subVectors(t, m);
    const z = Cc.dot(Hv), A = wc.dot(Hv);
    if (A >= 0 && z <= A)
      return a.copy(m);
    const B = z * y - b * A;
    if (B <= 0 && y >= 0 && A <= 0)
      return T = y / (y - A), a.copy(u).addScaledVector(wc, T);
    const k = E * A - z * _;
    if (k <= 0 && _ - E >= 0 && z - A >= 0)
      return kx.subVectors(m, d), T = (_ - E) / (_ - E + (z - A)), a.copy(d).addScaledVector(kx, T);
    const V = 1 / (k + B + C);
    return v = B * V, T = C * V, a.copy(u).addScaledVector(Cc, v).addScaledVector(wc, T);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const E1 = {
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
}, nu = { h: 0, s: 0, l: 0 }, np = { h: 0, s: 0, l: 0 };
function Pv(S, t, a) {
  return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? S + (t - S) * 6 * a : a < 1 / 2 ? t : a < 2 / 3 ? S + (t - S) * 6 * (2 / 3 - a) : S;
}
class kc {
  constructor(t, a, u) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, a, u);
  }
  set(t, a, u) {
    if (a === void 0 && u === void 0) {
      const d = t;
      d && d.isColor ? this.copy(d) : typeof d == "number" ? this.setHex(d) : typeof d == "string" && this.setStyle(d);
    } else
      this.setRGB(t, a, u);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, a = su) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, wa.toWorkingColorSpace(this, a), this;
  }
  setRGB(t, a, u, d = wa.workingColorSpace) {
    return this.r = t, this.g = a, this.b = u, wa.toWorkingColorSpace(this, d), this;
  }
  setHSL(t, a, u, d = wa.workingColorSpace) {
    if (t = oy(t, 1), a = Yr(a, 0, 1), u = Yr(u, 0, 1), a === 0)
      this.r = this.g = this.b = u;
    else {
      const m = u <= 0.5 ? u * (1 + a) : u + a - u * a, v = 2 * u - m;
      this.r = Pv(v, m, t + 1 / 3), this.g = Pv(v, m, t), this.b = Pv(v, m, t - 1 / 3);
    }
    return wa.toWorkingColorSpace(this, d), this;
  }
  setStyle(t, a = su) {
    function u(m) {
      m !== void 0 && parseFloat(m) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let d;
    if (d = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let m;
      const v = d[1], T = d[2];
      switch (v) {
        case "rgb":
        case "rgba":
          if (m = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(T))
            return u(m[4]), this.setRGB(
              Math.min(255, parseInt(m[1], 10)) / 255,
              Math.min(255, parseInt(m[2], 10)) / 255,
              Math.min(255, parseInt(m[3], 10)) / 255,
              a
            );
          if (m = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(T))
            return u(m[4]), this.setRGB(
              Math.min(100, parseInt(m[1], 10)) / 100,
              Math.min(100, parseInt(m[2], 10)) / 100,
              Math.min(100, parseInt(m[3], 10)) / 100,
              a
            );
          break;
        case "hsl":
        case "hsla":
          if (m = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(T))
            return u(m[4]), this.setHSL(
              parseFloat(m[1]) / 360,
              parseFloat(m[2]) / 100,
              parseFloat(m[3]) / 100,
              a
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (d = /^\#([A-Fa-f\d]+)$/.exec(t)) {
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
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, a);
    return this;
  }
  setColorName(t, a = su) {
    const u = E1[t.toLowerCase()];
    return u !== void 0 ? this.setHex(u, a) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = Uc(t.r), this.g = Uc(t.g), this.b = Uc(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Cv(t.r), this.g = Cv(t.g), this.b = Cv(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = su) {
    return wa.fromWorkingColorSpace(wr.copy(this), t), Math.round(Yr(wr.r * 255, 0, 255)) * 65536 + Math.round(Yr(wr.g * 255, 0, 255)) * 256 + Math.round(Yr(wr.b * 255, 0, 255));
  }
  getHexString(t = su) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, a = wa.workingColorSpace) {
    wa.fromWorkingColorSpace(wr.copy(this), a);
    const u = wr.r, d = wr.g, m = wr.b, v = Math.max(u, d, m), T = Math.min(u, d, m);
    let b, y;
    const E = (T + v) / 2;
    if (T === v)
      b = 0, y = 0;
    else {
      const _ = v - T;
      switch (y = E <= 0.5 ? _ / (v + T) : _ / (2 - v - T), v) {
        case u:
          b = (d - m) / _ + (d < m ? 6 : 0);
          break;
        case d:
          b = (m - u) / _ + 2;
          break;
        case m:
          b = (u - d) / _ + 4;
          break;
      }
      b /= 6;
    }
    return t.h = b, t.s = y, t.l = E, t;
  }
  getRGB(t, a = wa.workingColorSpace) {
    return wa.fromWorkingColorSpace(wr.copy(this), a), t.r = wr.r, t.g = wr.g, t.b = wr.b, t;
  }
  getStyle(t = su) {
    wa.fromWorkingColorSpace(wr.copy(this), t);
    const a = wr.r, u = wr.g, d = wr.b;
    return t !== su ? `color(${t} ${a.toFixed(3)} ${u.toFixed(3)} ${d.toFixed(3)})` : `rgb(${Math.round(a * 255)},${Math.round(u * 255)},${Math.round(d * 255)})`;
  }
  offsetHSL(t, a, u) {
    return this.getHSL(nu), this.setHSL(nu.h + t, nu.s + a, nu.l + u);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, a) {
    return this.r = t.r + a.r, this.g = t.g + a.g, this.b = t.b + a.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, a) {
    return this.r += (t.r - this.r) * a, this.g += (t.g - this.g) * a, this.b += (t.b - this.b) * a, this;
  }
  lerpColors(t, a, u) {
    return this.r = t.r + (a.r - t.r) * u, this.g = t.g + (a.g - t.g) * u, this.b = t.b + (a.b - t.b) * u, this;
  }
  lerpHSL(t, a) {
    this.getHSL(nu), t.getHSL(np);
    const u = fd(nu.h, np.h, a), d = fd(nu.s, np.s, a), m = fd(nu.l, np.l, a);
    return this.setHSL(u, d, m), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const a = this.r, u = this.g, d = this.b, m = t.elements;
    return this.r = m[0] * a + m[3] * u + m[6] * d, this.g = m[1] * a + m[4] * u + m[7] * d, this.b = m[2] * a + m[5] * u + m[8] * d, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, a = 0) {
    return this.r = t[a], this.g = t[a + 1], this.b = t[a + 2], this;
  }
  toArray(t = [], a = 0) {
    return t[a] = this.r, t[a + 1] = this.g, t[a + 2] = this.b, t;
  }
  fromBufferAttribute(t, a) {
    return this.r = t.getX(a), this.g = t.getY(a), this.b = t.getZ(a), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const wr = /* @__PURE__ */ new kc();
kc.NAMES = E1;
let tb = 0;
class gp extends hd {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: tb++ }), this.uuid = Bc(), this.name = "", this.type = "Material", this.blending = cx, this.side = ey, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = dx, this.blendDst = hx, this.blendEquation = fx, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new kc(0, 0, 0), this.blendAlpha = 0, this.depthFunc = px, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ex, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = xc, this.stencilZFail = xc, this.stencilZPass = xc, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
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
  setValues(t) {
    if (t !== void 0)
      for (const a in t) {
        const u = t[a];
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
  toJSON(t) {
    const a = t === void 0 || typeof t == "string";
    a && (t = {
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
    u.uuid = this.uuid, u.type = this.type, this.name !== "" && (u.name = this.name), this.color && this.color.isColor && (u.color = this.color.getHex()), this.roughness !== void 0 && (u.roughness = this.roughness), this.metalness !== void 0 && (u.metalness = this.metalness), this.sheen !== void 0 && (u.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (u.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (u.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (u.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (u.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (u.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (u.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (u.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (u.shininess = this.shininess), this.clearcoat !== void 0 && (u.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (u.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (u.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (u.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (u.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, u.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (u.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (u.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (u.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (u.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (u.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (u.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (u.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (u.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (u.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (u.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (u.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (u.lightMap = this.lightMap.toJSON(t).uuid, u.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (u.aoMap = this.aoMap.toJSON(t).uuid, u.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (u.bumpMap = this.bumpMap.toJSON(t).uuid, u.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (u.normalMap = this.normalMap.toJSON(t).uuid, u.normalMapType = this.normalMapType, u.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (u.displacementMap = this.displacementMap.toJSON(t).uuid, u.displacementScale = this.displacementScale, u.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (u.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (u.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (u.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (u.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (u.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (u.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (u.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (u.combine = this.combine)), this.envMapRotation !== void 0 && (u.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (u.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (u.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (u.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (u.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (u.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (u.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (u.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (u.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (u.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (u.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (u.size = this.size), this.shadowSide !== null && (u.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (u.sizeAttenuation = this.sizeAttenuation), this.blending !== cx && (u.blending = this.blending), this.side !== ey && (u.side = this.side), this.vertexColors === !0 && (u.vertexColors = !0), this.opacity < 1 && (u.opacity = this.opacity), this.transparent === !0 && (u.transparent = !0), this.blendSrc !== dx && (u.blendSrc = this.blendSrc), this.blendDst !== hx && (u.blendDst = this.blendDst), this.blendEquation !== fx && (u.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (u.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (u.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (u.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (u.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (u.blendAlpha = this.blendAlpha), this.depthFunc !== px && (u.depthFunc = this.depthFunc), this.depthTest === !1 && (u.depthTest = this.depthTest), this.depthWrite === !1 && (u.depthWrite = this.depthWrite), this.colorWrite === !1 && (u.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (u.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ex && (u.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (u.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (u.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== xc && (u.stencilFail = this.stencilFail), this.stencilZFail !== xc && (u.stencilZFail = this.stencilZFail), this.stencilZPass !== xc && (u.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (u.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (u.rotation = this.rotation), this.polygonOffset === !0 && (u.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (u.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (u.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (u.linewidth = this.linewidth), this.dashSize !== void 0 && (u.dashSize = this.dashSize), this.gapSize !== void 0 && (u.gapSize = this.gapSize), this.scale !== void 0 && (u.scale = this.scale), this.dithering === !0 && (u.dithering = !0), this.alphaTest > 0 && (u.alphaTest = this.alphaTest), this.alphaHash === !0 && (u.alphaHash = !0), this.alphaToCoverage === !0 && (u.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (u.premultipliedAlpha = !0), this.forceSinglePass === !0 && (u.forceSinglePass = !0), this.wireframe === !0 && (u.wireframe = !0), this.wireframeLinewidth > 1 && (u.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (u.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (u.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (u.flatShading = !0), this.visible === !1 && (u.visible = !1), this.toneMapped === !1 && (u.toneMapped = !1), this.fog === !1 && (u.fog = !1), Object.keys(this.userData).length > 0 && (u.userData = this.userData);
    function d(m) {
      const v = [];
      for (const T in m) {
        const b = m[T];
        delete b.metadata, v.push(b);
      }
      return v;
    }
    if (a) {
      const m = d(t.textures), v = d(t.images);
      m.length > 0 && (u.textures = m), v.length > 0 && (u.images = v);
    }
    return u;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const a = t.clippingPlanes;
    let u = null;
    if (a !== null) {
      const d = a.length;
      u = new Array(d);
      for (let m = 0; m !== d; ++m)
        u[m] = a[m].clone();
    }
    return this.clippingPlanes = u, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
class nb extends gp {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new kc(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new lo(), this.combine = yR, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const Ln = /* @__PURE__ */ new le(), rp = /* @__PURE__ */ new nn();
class so {
  constructor(t, a, u = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = a, this.count = t !== void 0 ? t.length / a : 0, this.normalized = u, this.usage = Rx, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = h1, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  get updateRange() {
    return VR("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, a) {
    this.updateRanges.push({ start: t, count: a });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, a, u) {
    t *= this.itemSize, u *= a.itemSize;
    for (let d = 0, m = this.itemSize; d < m; d++)
      this.array[t + d] = a.array[u + d];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let a = 0, u = this.count; a < u; a++)
        rp.fromBufferAttribute(this, a), rp.applyMatrix3(t), this.setXY(a, rp.x, rp.y);
    else if (this.itemSize === 3)
      for (let a = 0, u = this.count; a < u; a++)
        Ln.fromBufferAttribute(this, a), Ln.applyMatrix3(t), this.setXYZ(a, Ln.x, Ln.y, Ln.z);
    return this;
  }
  applyMatrix4(t) {
    for (let a = 0, u = this.count; a < u; a++)
      Ln.fromBufferAttribute(this, a), Ln.applyMatrix4(t), this.setXYZ(a, Ln.x, Ln.y, Ln.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let a = 0, u = this.count; a < u; a++)
      Ln.fromBufferAttribute(this, a), Ln.applyNormalMatrix(t), this.setXYZ(a, Ln.x, Ln.y, Ln.z);
    return this;
  }
  transformDirection(t) {
    for (let a = 0, u = this.count; a < u; a++)
      Ln.fromBufferAttribute(this, a), Ln.transformDirection(t), this.setXYZ(a, Ln.x, Ln.y, Ln.z);
    return this;
  }
  set(t, a = 0) {
    return this.array.set(t, a), this;
  }
  getComponent(t, a) {
    let u = this.array[t * this.itemSize + a];
    return this.normalized && (u = Fc(u, this.array)), u;
  }
  setComponent(t, a, u) {
    return this.normalized && (u = qr(u, this.array)), this.array[t * this.itemSize + a] = u, this;
  }
  getX(t) {
    let a = this.array[t * this.itemSize];
    return this.normalized && (a = Fc(a, this.array)), a;
  }
  setX(t, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[t * this.itemSize] = a, this;
  }
  getY(t) {
    let a = this.array[t * this.itemSize + 1];
    return this.normalized && (a = Fc(a, this.array)), a;
  }
  setY(t, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[t * this.itemSize + 1] = a, this;
  }
  getZ(t) {
    let a = this.array[t * this.itemSize + 2];
    return this.normalized && (a = Fc(a, this.array)), a;
  }
  setZ(t, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[t * this.itemSize + 2] = a, this;
  }
  getW(t) {
    let a = this.array[t * this.itemSize + 3];
    return this.normalized && (a = Fc(a, this.array)), a;
  }
  setW(t, a) {
    return this.normalized && (a = qr(a, this.array)), this.array[t * this.itemSize + 3] = a, this;
  }
  setXY(t, a, u) {
    return t *= this.itemSize, this.normalized && (a = qr(a, this.array), u = qr(u, this.array)), this.array[t + 0] = a, this.array[t + 1] = u, this;
  }
  setXYZ(t, a, u, d) {
    return t *= this.itemSize, this.normalized && (a = qr(a, this.array), u = qr(u, this.array), d = qr(d, this.array)), this.array[t + 0] = a, this.array[t + 1] = u, this.array[t + 2] = d, this;
  }
  setXYZW(t, a, u, d, m) {
    return t *= this.itemSize, this.normalized && (a = qr(a, this.array), u = qr(u, this.array), d = qr(d, this.array), m = qr(m, this.array)), this.array[t + 0] = a, this.array[t + 1] = u, this.array[t + 2] = d, this.array[t + 3] = m, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== Rx && (t.usage = this.usage), t;
  }
}
class rb extends so {
  constructor(t, a, u) {
    super(new Uint16Array(t), a, u);
  }
}
class ib extends so {
  constructor(t, a, u) {
    super(new Uint32Array(t), a, u);
  }
}
class Lc extends so {
  constructor(t, a, u) {
    super(new Float32Array(t), a, u);
  }
}
let ab = 0;
const aa = /* @__PURE__ */ new Wr(), jv = /* @__PURE__ */ new sa(), zc = /* @__PURE__ */ new le(), Oi = /* @__PURE__ */ new md(), sd = /* @__PURE__ */ new md(), Kn = /* @__PURE__ */ new le();
class uo extends hd {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ab++ }), this.uuid = Bc(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (jR(t) ? ib : rb)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, a) {
    return this.attributes[t] = a, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, a, u = 0) {
    this.groups.push({
      start: t,
      count: a,
      materialIndex: u
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, a) {
    this.drawRange.start = t, this.drawRange.count = a;
  }
  applyMatrix4(t) {
    const a = this.attributes.position;
    a !== void 0 && (a.applyMatrix4(t), a.needsUpdate = !0);
    const u = this.attributes.normal;
    if (u !== void 0) {
      const m = new lu().getNormalMatrix(t);
      u.applyNormalMatrix(m), u.needsUpdate = !0;
    }
    const d = this.attributes.tangent;
    return d !== void 0 && (d.transformDirection(t), d.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return aa.makeRotationFromQuaternion(t), this.applyMatrix4(aa), this;
  }
  rotateX(t) {
    return aa.makeRotationX(t), this.applyMatrix4(aa), this;
  }
  rotateY(t) {
    return aa.makeRotationY(t), this.applyMatrix4(aa), this;
  }
  rotateZ(t) {
    return aa.makeRotationZ(t), this.applyMatrix4(aa), this;
  }
  translate(t, a, u) {
    return aa.makeTranslation(t, a, u), this.applyMatrix4(aa), this;
  }
  scale(t, a, u) {
    return aa.makeScale(t, a, u), this.applyMatrix4(aa), this;
  }
  lookAt(t) {
    return jv.lookAt(t), jv.updateMatrix(), this.applyMatrix4(jv.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(zc).negate(), this.translate(zc.x, zc.y, zc.z), this;
  }
  setFromPoints(t) {
    const a = [];
    for (let u = 0, d = t.length; u < d; u++) {
      const m = t[u];
      a.push(m.x, m.y, m.z || 0);
    }
    return this.setAttribute("position", new Lc(a, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new md());
    const t = this.attributes.position, a = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new le(-1 / 0, -1 / 0, -1 / 0),
        new le(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), a)
        for (let u = 0, d = a.length; u < d; u++) {
          const m = a[u];
          Oi.setFromBufferAttribute(m), this.morphTargetsRelative ? (Kn.addVectors(this.boundingBox.min, Oi.min), this.boundingBox.expandByPoint(Kn), Kn.addVectors(this.boundingBox.max, Oi.max), this.boundingBox.expandByPoint(Kn)) : (this.boundingBox.expandByPoint(Oi.min), this.boundingBox.expandByPoint(Oi.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new cy());
    const t = this.attributes.position, a = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new le(), 1 / 0);
      return;
    }
    if (t) {
      const u = this.boundingSphere.center;
      if (Oi.setFromBufferAttribute(t), a)
        for (let m = 0, v = a.length; m < v; m++) {
          const T = a[m];
          sd.setFromBufferAttribute(T), this.morphTargetsRelative ? (Kn.addVectors(Oi.min, sd.min), Oi.expandByPoint(Kn), Kn.addVectors(Oi.max, sd.max), Oi.expandByPoint(Kn)) : (Oi.expandByPoint(sd.min), Oi.expandByPoint(sd.max));
        }
      Oi.getCenter(u);
      let d = 0;
      for (let m = 0, v = t.count; m < v; m++)
        Kn.fromBufferAttribute(t, m), d = Math.max(d, u.distanceToSquared(Kn));
      if (a)
        for (let m = 0, v = a.length; m < v; m++) {
          const T = a[m], b = this.morphTargetsRelative;
          for (let y = 0, E = T.count; y < E; y++)
            Kn.fromBufferAttribute(T, y), b && (zc.fromBufferAttribute(t, y), Kn.add(zc)), d = Math.max(d, u.distanceToSquared(Kn));
        }
      this.boundingSphere.radius = Math.sqrt(d), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, a = this.attributes;
    if (t === null || a.position === void 0 || a.normal === void 0 || a.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const u = a.position, d = a.normal, m = a.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new so(new Float32Array(4 * u.count), 4));
    const v = this.getAttribute("tangent"), T = [], b = [];
    for (let ue = 0; ue < u.count; ue++)
      T[ue] = new le(), b[ue] = new le();
    const y = new le(), E = new le(), _ = new le(), C = new nn(), z = new nn(), A = new nn(), B = new le(), k = new le();
    function V(ue, et, ye) {
      y.fromBufferAttribute(u, ue), E.fromBufferAttribute(u, et), _.fromBufferAttribute(u, ye), C.fromBufferAttribute(m, ue), z.fromBufferAttribute(m, et), A.fromBufferAttribute(m, ye), E.sub(y), _.sub(y), z.sub(C), A.sub(C);
      const Me = 1 / (z.x * A.y - A.x * z.y);
      isFinite(Me) && (B.copy(E).multiplyScalar(A.y).addScaledVector(_, -z.y).multiplyScalar(Me), k.copy(_).multiplyScalar(z.x).addScaledVector(E, -A.x).multiplyScalar(Me), T[ue].add(B), T[et].add(B), T[ye].add(B), b[ue].add(k), b[et].add(k), b[ye].add(k));
    }
    let se = this.groups;
    se.length === 0 && (se = [{
      start: 0,
      count: t.count
    }]);
    for (let ue = 0, et = se.length; ue < et; ++ue) {
      const ye = se[ue], Me = ye.start, Re = ye.count;
      for (let ge = Me, Le = Me + Re; ge < Le; ge += 3)
        V(
          t.getX(ge + 0),
          t.getX(ge + 1),
          t.getX(ge + 2)
        );
    }
    const ie = new le(), fe = new le(), ve = new le(), be = new le();
    function $(ue) {
      ve.fromBufferAttribute(d, ue), be.copy(ve);
      const et = T[ue];
      ie.copy(et), ie.sub(ve.multiplyScalar(ve.dot(et))).normalize(), fe.crossVectors(be, et);
      const Me = fe.dot(b[ue]) < 0 ? -1 : 1;
      v.setXYZW(ue, ie.x, ie.y, ie.z, Me);
    }
    for (let ue = 0, et = se.length; ue < et; ++ue) {
      const ye = se[ue], Me = ye.start, Re = ye.count;
      for (let ge = Me, Le = Me + Re; ge < Le; ge += 3)
        $(t.getX(ge + 0)), $(t.getX(ge + 1)), $(t.getX(ge + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, a = this.getAttribute("position");
    if (a !== void 0) {
      let u = this.getAttribute("normal");
      if (u === void 0)
        u = new so(new Float32Array(a.count * 3), 3), this.setAttribute("normal", u);
      else
        for (let C = 0, z = u.count; C < z; C++)
          u.setXYZ(C, 0, 0, 0);
      const d = new le(), m = new le(), v = new le(), T = new le(), b = new le(), y = new le(), E = new le(), _ = new le();
      if (t)
        for (let C = 0, z = t.count; C < z; C += 3) {
          const A = t.getX(C + 0), B = t.getX(C + 1), k = t.getX(C + 2);
          d.fromBufferAttribute(a, A), m.fromBufferAttribute(a, B), v.fromBufferAttribute(a, k), E.subVectors(v, m), _.subVectors(d, m), E.cross(_), T.fromBufferAttribute(u, A), b.fromBufferAttribute(u, B), y.fromBufferAttribute(u, k), T.add(E), b.add(E), y.add(E), u.setXYZ(A, T.x, T.y, T.z), u.setXYZ(B, b.x, b.y, b.z), u.setXYZ(k, y.x, y.y, y.z);
        }
      else
        for (let C = 0, z = a.count; C < z; C += 3)
          d.fromBufferAttribute(a, C + 0), m.fromBufferAttribute(a, C + 1), v.fromBufferAttribute(a, C + 2), E.subVectors(v, m), _.subVectors(d, m), E.cross(_), u.setXYZ(C + 0, E.x, E.y, E.z), u.setXYZ(C + 1, E.x, E.y, E.z), u.setXYZ(C + 2, E.x, E.y, E.z);
      this.normalizeNormals(), u.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let a = 0, u = t.count; a < u; a++)
      Kn.fromBufferAttribute(t, a), Kn.normalize(), t.setXYZ(a, Kn.x, Kn.y, Kn.z);
  }
  toNonIndexed() {
    function t(T, b) {
      const y = T.array, E = T.itemSize, _ = T.normalized, C = new y.constructor(b.length * E);
      let z = 0, A = 0;
      for (let B = 0, k = b.length; B < k; B++) {
        T.isInterleavedBufferAttribute ? z = b[B] * T.data.stride + T.offset : z = b[B] * E;
        for (let V = 0; V < E; V++)
          C[A++] = y[z++];
      }
      return new so(C, E, _);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const a = new uo(), u = this.index.array, d = this.attributes;
    for (const T in d) {
      const b = d[T], y = t(b, u);
      a.setAttribute(T, y);
    }
    const m = this.morphAttributes;
    for (const T in m) {
      const b = [], y = m[T];
      for (let E = 0, _ = y.length; E < _; E++) {
        const C = y[E], z = t(C, u);
        b.push(z);
      }
      a.morphAttributes[T] = b;
    }
    a.morphTargetsRelative = this.morphTargetsRelative;
    const v = this.groups;
    for (let T = 0, b = v.length; T < b; T++) {
      const y = v[T];
      a.addGroup(y.start, y.count, y.materialIndex);
    }
    return a;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const b = this.parameters;
      for (const y in b)
        b[y] !== void 0 && (t[y] = b[y]);
      return t;
    }
    t.data = { attributes: {} };
    const a = this.index;
    a !== null && (t.data.index = {
      type: a.array.constructor.name,
      array: Array.prototype.slice.call(a.array)
    });
    const u = this.attributes;
    for (const b in u) {
      const y = u[b];
      t.data.attributes[b] = y.toJSON(t.data);
    }
    const d = {};
    let m = !1;
    for (const b in this.morphAttributes) {
      const y = this.morphAttributes[b], E = [];
      for (let _ = 0, C = y.length; _ < C; _++) {
        const z = y[_];
        E.push(z.toJSON(t.data));
      }
      E.length > 0 && (d[b] = E, m = !0);
    }
    m && (t.data.morphAttributes = d, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const v = this.groups;
    v.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(v)));
    const T = this.boundingSphere;
    return T !== null && (t.data.boundingSphere = {
      center: T.center.toArray(),
      radius: T.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const a = {};
    this.name = t.name;
    const u = t.index;
    u !== null && this.setIndex(u.clone(a));
    const d = t.attributes;
    for (const y in d) {
      const E = d[y];
      this.setAttribute(y, E.clone(a));
    }
    const m = t.morphAttributes;
    for (const y in m) {
      const E = [], _ = m[y];
      for (let C = 0, z = _.length; C < z; C++)
        E.push(_[C].clone(a));
      this.morphAttributes[y] = E;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const v = t.groups;
    for (let y = 0, E = v.length; y < E; y++) {
      const _ = v[y];
      this.addGroup(_.start, _.count, _.materialIndex);
    }
    const T = t.boundingBox;
    T !== null && (this.boundingBox = T.clone());
    const b = t.boundingSphere;
    return b !== null && (this.boundingSphere = b.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Hx = /* @__PURE__ */ new Wr(), ro = /* @__PURE__ */ new _1(), ip = /* @__PURE__ */ new cy(), Px = /* @__PURE__ */ new le(), Dc = /* @__PURE__ */ new le(), Ac = /* @__PURE__ */ new le(), Nc = /* @__PURE__ */ new le(), Vv = /* @__PURE__ */ new le(), ap = /* @__PURE__ */ new le(), sp = /* @__PURE__ */ new nn(), lp = /* @__PURE__ */ new nn(), up = /* @__PURE__ */ new nn(), jx = /* @__PURE__ */ new le(), Vx = /* @__PURE__ */ new le(), Ix = /* @__PURE__ */ new le(), op = /* @__PURE__ */ new le(), cp = /* @__PURE__ */ new le();
class sb extends sa {
  constructor(t = new uo(), a = new nb()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = a, this.updateMorphTargets();
  }
  copy(t, a) {
    return super.copy(t, a), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const a = this.geometry.morphAttributes, u = Object.keys(a);
    if (u.length > 0) {
      const d = a[u[0]];
      if (d !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let m = 0, v = d.length; m < v; m++) {
          const T = d[m].name || String(m);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[T] = m;
        }
      }
    }
  }
  getVertexPosition(t, a) {
    const u = this.geometry, d = u.attributes.position, m = u.morphAttributes.position, v = u.morphTargetsRelative;
    a.fromBufferAttribute(d, t);
    const T = this.morphTargetInfluences;
    if (m && T) {
      ap.set(0, 0, 0);
      for (let b = 0, y = m.length; b < y; b++) {
        const E = T[b], _ = m[b];
        E !== 0 && (Vv.fromBufferAttribute(_, t), v ? ap.addScaledVector(Vv, E) : ap.addScaledVector(Vv.sub(a), E));
      }
      a.add(ap);
    }
    return a;
  }
  raycast(t, a) {
    const u = this.geometry, d = this.material, m = this.matrixWorld;
    d !== void 0 && (u.boundingSphere === null && u.computeBoundingSphere(), ip.copy(u.boundingSphere), ip.applyMatrix4(m), ro.copy(t.ray).recast(t.near), !(ip.containsPoint(ro.origin) === !1 && (ro.intersectSphere(ip, Px) === null || ro.origin.distanceToSquared(Px) > (t.far - t.near) ** 2)) && (Hx.copy(m).invert(), ro.copy(t.ray).applyMatrix4(Hx), !(u.boundingBox !== null && ro.intersectsBox(u.boundingBox) === !1) && this._computeIntersections(t, a, ro)));
  }
  _computeIntersections(t, a, u) {
    let d;
    const m = this.geometry, v = this.material, T = m.index, b = m.attributes.position, y = m.attributes.uv, E = m.attributes.uv1, _ = m.attributes.normal, C = m.groups, z = m.drawRange;
    if (T !== null)
      if (Array.isArray(v))
        for (let A = 0, B = C.length; A < B; A++) {
          const k = C[A], V = v[k.materialIndex], se = Math.max(k.start, z.start), ie = Math.min(T.count, Math.min(k.start + k.count, z.start + z.count));
          for (let fe = se, ve = ie; fe < ve; fe += 3) {
            const be = T.getX(fe), $ = T.getX(fe + 1), ue = T.getX(fe + 2);
            d = fp(this, V, t, u, y, E, _, be, $, ue), d && (d.faceIndex = Math.floor(fe / 3), d.face.materialIndex = k.materialIndex, a.push(d));
          }
        }
      else {
        const A = Math.max(0, z.start), B = Math.min(T.count, z.start + z.count);
        for (let k = A, V = B; k < V; k += 3) {
          const se = T.getX(k), ie = T.getX(k + 1), fe = T.getX(k + 2);
          d = fp(this, v, t, u, y, E, _, se, ie, fe), d && (d.faceIndex = Math.floor(k / 3), a.push(d));
        }
      }
    else if (b !== void 0)
      if (Array.isArray(v))
        for (let A = 0, B = C.length; A < B; A++) {
          const k = C[A], V = v[k.materialIndex], se = Math.max(k.start, z.start), ie = Math.min(b.count, Math.min(k.start + k.count, z.start + z.count));
          for (let fe = se, ve = ie; fe < ve; fe += 3) {
            const be = fe, $ = fe + 1, ue = fe + 2;
            d = fp(this, V, t, u, y, E, _, be, $, ue), d && (d.faceIndex = Math.floor(fe / 3), d.face.materialIndex = k.materialIndex, a.push(d));
          }
        }
      else {
        const A = Math.max(0, z.start), B = Math.min(b.count, z.start + z.count);
        for (let k = A, V = B; k < V; k += 3) {
          const se = k, ie = k + 1, fe = k + 2;
          d = fp(this, v, t, u, y, E, _, se, ie, fe), d && (d.faceIndex = Math.floor(k / 3), a.push(d));
        }
      }
  }
}
function lb(S, t, a, u, d, m, v, T) {
  let b;
  if (t.side === mR ? b = u.intersectTriangle(v, m, d, !0, T) : b = u.intersectTriangle(d, m, v, t.side === ey, T), b === null)
    return null;
  cp.copy(T), cp.applyMatrix4(S.matrixWorld);
  const y = a.ray.origin.distanceTo(cp);
  return y < a.near || y > a.far ? null : {
    distance: y,
    point: cp.clone(),
    object: S
  };
}
function fp(S, t, a, u, d, m, v, T, b, y) {
  S.getVertexPosition(T, Dc), S.getVertexPosition(b, Ac), S.getVertexPosition(y, Nc);
  const E = lb(S, t, a, u, Dc, Ac, Nc, op);
  if (E) {
    d && (sp.fromBufferAttribute(d, T), lp.fromBufferAttribute(d, b), up.fromBufferAttribute(d, y), E.uv = us.getInterpolation(op, Dc, Ac, Nc, sp, lp, up, new nn())), m && (sp.fromBufferAttribute(m, T), lp.fromBufferAttribute(m, b), up.fromBufferAttribute(m, y), E.uv1 = us.getInterpolation(op, Dc, Ac, Nc, sp, lp, up, new nn())), v && (jx.fromBufferAttribute(v, T), Vx.fromBufferAttribute(v, b), Ix.fromBufferAttribute(v, y), E.normal = us.getInterpolation(op, Dc, Ac, Nc, jx, Vx, Ix, new le()), E.normal.dot(u.direction) > 0 && E.normal.multiplyScalar(-1));
    const _ = {
      a: T,
      b,
      c: y,
      normal: new le(),
      materialIndex: 0
    };
    us.getNormal(Dc, Ac, Nc, _.normal), E.face = _;
  }
  return E;
}
function fy(S) {
  const t = {};
  for (const a in S) {
    t[a] = {};
    for (const u in S[a]) {
      const d = S[a][u];
      d && (d.isColor || d.isMatrix3 || d.isMatrix4 || d.isVector2 || d.isVector3 || d.isVector4 || d.isTexture || d.isQuaternion) ? d.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[a][u] = null) : t[a][u] = d.clone() : Array.isArray(d) ? t[a][u] = d.slice() : t[a][u] = d;
    }
  }
  return t;
}
function ub(S) {
  const t = {};
  for (let a = 0; a < S.length; a++) {
    const u = fy(S[a]);
    for (const d in u)
      t[d] = u[d];
  }
  return t;
}
function ob(S) {
  const t = [];
  for (let a = 0; a < S.length; a++)
    t.push(S[a].clone());
  return t;
}
const cb = { clone: fy, merge: ub };
var fb = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, db = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class dy extends gp {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = fb, this.fragmentShader = db, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = fy(t.uniforms), this.uniformsGroups = ob(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const a = super.toJSON(t);
    a.glslVersion = this.glslVersion, a.uniforms = {};
    for (const d in this.uniforms) {
      const v = this.uniforms[d].value;
      v && v.isTexture ? a.uniforms[d] = {
        type: "t",
        value: v.toJSON(t).uuid
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
class hb extends sa {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Wr(), this.projectionMatrix = new Wr(), this.projectionMatrixInverse = new Wr(), this.coordinateSystem = od;
  }
  copy(t, a) {
    return super.copy(t, a), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, a) {
    super.updateWorldMatrix(t, a), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class xp extends uo {
  constructor(t = 1, a = 1, u = 1, d = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: a,
      widthSegments: u,
      heightSegments: d
    };
    const m = t / 2, v = a / 2, T = Math.floor(u), b = Math.floor(d), y = T + 1, E = b + 1, _ = t / T, C = a / b, z = [], A = [], B = [], k = [];
    for (let V = 0; V < E; V++) {
      const se = V * C - v;
      for (let ie = 0; ie < y; ie++) {
        const fe = ie * _ - m;
        A.push(fe, -se, 0), B.push(0, 0, 1), k.push(ie / T), k.push(1 - V / b);
      }
    }
    for (let V = 0; V < b; V++)
      for (let se = 0; se < T; se++) {
        const ie = se + y * V, fe = se + y * (V + 1), ve = se + 1 + y * (V + 1), be = se + 1 + y * V;
        z.push(ie, fe, be), z.push(fe, ve, be);
      }
    this.setIndex(z), this.setAttribute("position", new Lc(A, 3)), this.setAttribute("normal", new Lc(B, 3)), this.setAttribute("uv", new Lc(k, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new xp(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class R1 extends os {
  constructor(t, a, u, d, m, v, T, b, y, E) {
    if (E = E !== void 0 ? E : Tv, E !== Tv && E !== gx)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    u === void 0 && E === Tv && (u = xR), u === void 0 && E === gx && (u = _R), super(null, d, m, v, T, b, E, u, y), this.isDepthTexture = !0, this.image = { width: t, height: a }, this.magFilter = T !== void 0 ? T : yx, this.minFilter = b !== void 0 ? b : yx, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const a = super.toJSON(t);
    return this.compareFunction !== null && (a.compareFunction = this.compareFunction), a;
  }
}
const pb = /* @__PURE__ */ new R1(1, 1);
pb.compareFunction = RR;
class mb extends sa {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new lo(), this.environmentIntensity = 1, this.environmentRotation = new lo(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, a) {
    return super.copy(t, a), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const a = super.toJSON(t);
    return this.fog !== null && (a.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (a.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (a.object.backgroundIntensity = this.backgroundIntensity), a.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (a.object.environmentIntensity = this.environmentIntensity), a.object.environmentRotation = this.environmentRotation.toArray(), a;
  }
}
class vb extends gp {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new kc(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const qx = /* @__PURE__ */ new le(), Yx = /* @__PURE__ */ new le(), Wx = /* @__PURE__ */ new Wr(), Iv = /* @__PURE__ */ new _1(), dp = /* @__PURE__ */ new cy();
class yb extends sa {
  constructor(t = new uo(), a = new vb()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = a, this.updateMorphTargets();
  }
  copy(t, a) {
    return super.copy(t, a), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const a = t.attributes.position, u = [0];
      for (let d = 1, m = a.count; d < m; d++)
        qx.fromBufferAttribute(a, d - 1), Yx.fromBufferAttribute(a, d), u[d] = u[d - 1], u[d] += qx.distanceTo(Yx);
      t.setAttribute("lineDistance", new Lc(u, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, a) {
    const u = this.geometry, d = this.matrixWorld, m = t.params.Line.threshold, v = u.drawRange;
    if (u.boundingSphere === null && u.computeBoundingSphere(), dp.copy(u.boundingSphere), dp.applyMatrix4(d), dp.radius += m, t.ray.intersectsSphere(dp) === !1)
      return;
    Wx.copy(d).invert(), Iv.copy(t.ray).applyMatrix4(Wx);
    const T = m / ((this.scale.x + this.scale.y + this.scale.z) / 3), b = T * T, y = new le(), E = new le(), _ = new le(), C = new le(), z = this.isLineSegments ? 2 : 1, A = u.index, k = u.attributes.position;
    if (A !== null) {
      const V = Math.max(0, v.start), se = Math.min(A.count, v.start + v.count);
      for (let ie = V, fe = se - 1; ie < fe; ie += z) {
        const ve = A.getX(ie), be = A.getX(ie + 1);
        if (y.fromBufferAttribute(k, ve), E.fromBufferAttribute(k, be), Iv.distanceSqToSegment(y, E, C, _) > b)
          continue;
        C.applyMatrix4(this.matrixWorld);
        const ue = t.ray.origin.distanceTo(C);
        ue < t.near || ue > t.far || a.push({
          distance: ue,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: _.clone().applyMatrix4(this.matrixWorld),
          index: ie,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const V = Math.max(0, v.start), se = Math.min(k.count, v.start + v.count);
      for (let ie = V, fe = se - 1; ie < fe; ie += z) {
        if (y.fromBufferAttribute(k, ie), E.fromBufferAttribute(k, ie + 1), Iv.distanceSqToSegment(y, E, C, _) > b)
          continue;
        C.applyMatrix4(this.matrixWorld);
        const be = t.ray.origin.distanceTo(C);
        be < t.near || be > t.far || a.push({
          distance: be,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: _.clone().applyMatrix4(this.matrixWorld),
          index: ie,
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
          const T = d[m].name || String(m);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[T] = m;
        }
      }
    }
  }
}
const Qx = /* @__PURE__ */ new le(), Gx = /* @__PURE__ */ new le();
class gb extends yb {
  constructor(t, a) {
    super(t, a), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const a = t.attributes.position, u = [];
      for (let d = 0, m = a.count; d < m; d += 2)
        Qx.fromBufferAttribute(a, d), Gx.fromBufferAttribute(a, d + 1), u[d] = d === 0 ? 0 : u[d - 1], u[d + 1] = u[d] + Qx.distanceTo(Gx);
      t.setAttribute("lineDistance", new Lc(u, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class b1 extends dy {
  constructor(t) {
    super(t), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: c1
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = c1);
var ny = { exports: {} }, ru = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xx;
function xb() {
  return Xx || (Xx = 1, ru.ConcurrentRoot = 1, ru.ContinuousEventPriority = 4, ru.DefaultEventPriority = 16, ru.DiscreteEventPriority = 1, ru.IdleEventPriority = 536870912, ru.LegacyRoot = 0), ru;
}
var iu = {};
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zx;
function Sb() {
  return Zx || (Zx = 1, process.env.NODE_ENV !== "production" && function() {
    var S = (
      /*                        */
      1
    ), t = (
      /*            */
      4
    ), a = (
      /*                    */
      16
    ), u = (
      /*                       */
      536870912
    ), d = S, m = t, v = a, T = u, b = 0, y = 1;
    iu.ConcurrentRoot = y, iu.ContinuousEventPriority = m, iu.DefaultEventPriority = v, iu.DiscreteEventPriority = d, iu.IdleEventPriority = T, iu.LegacyRoot = b;
  }()), iu;
}
process.env.NODE_ENV === "production" ? ny.exports = xb() : ny.exports = Sb();
var cd = ny.exports, ry = { exports: {} }, hp = { exports: {} }, qv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jx;
function _b() {
  return Jx || (Jx = 1, function(S) {
    function t(H, ae) {
      var ee = H.length;
      H.push(ae);
      e:
        for (; 0 < ee; ) {
          var O = ee - 1 >>> 1, j = H[O];
          if (0 < d(j, ae))
            H[O] = ae, H[ee] = j, ee = O;
          else
            break e;
        }
    }
    function a(H) {
      return H.length === 0 ? null : H[0];
    }
    function u(H) {
      if (H.length === 0)
        return null;
      var ae = H[0], ee = H.pop();
      if (ee !== ae) {
        H[0] = ee;
        e:
          for (var O = 0, j = H.length, Be = j >>> 1; O < Be; ) {
            var ke = 2 * (O + 1) - 1, je = H[ke], He = ke + 1, tt = H[He];
            if (0 > d(je, ee))
              He < j && 0 > d(tt, je) ? (H[O] = tt, H[He] = ee, O = He) : (H[O] = je, H[ke] = ee, O = ke);
            else if (He < j && 0 > d(tt, ee))
              H[O] = tt, H[He] = ee, O = He;
            else
              break e;
          }
      }
      return ae;
    }
    function d(H, ae) {
      var ee = H.sortIndex - ae.sortIndex;
      return ee !== 0 ? ee : H.id - ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      S.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, T = v.now();
      S.unstable_now = function() {
        return v.now() - T;
      };
    }
    var b = [], y = [], E = 1, _ = null, C = 3, z = !1, A = !1, B = !1, k = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(H) {
      for (var ae = a(y); ae !== null; ) {
        if (ae.callback === null)
          u(y);
        else if (ae.startTime <= H)
          u(y), ae.sortIndex = ae.expirationTime, t(b, ae);
        else
          break;
        ae = a(y);
      }
    }
    function fe(H) {
      if (B = !1, ie(H), !A)
        if (a(b) !== null)
          A = !0, Ye(ve);
        else {
          var ae = a(y);
          ae !== null && xe(fe, ae.startTime - H);
        }
    }
    function ve(H, ae) {
      A = !1, B && (B = !1, V(ue), ue = -1), z = !0;
      var ee = C;
      try {
        for (ie(ae), _ = a(b); _ !== null && (!(_.expirationTime > ae) || H && !Me()); ) {
          var O = _.callback;
          if (typeof O == "function") {
            _.callback = null, C = _.priorityLevel;
            var j = O(_.expirationTime <= ae);
            ae = S.unstable_now(), typeof j == "function" ? _.callback = j : _ === a(b) && u(b), ie(ae);
          } else
            u(b);
          _ = a(b);
        }
        if (_ !== null)
          var Be = !0;
        else {
          var ke = a(y);
          ke !== null && xe(fe, ke.startTime - ae), Be = !1;
        }
        return Be;
      } finally {
        _ = null, C = ee, z = !1;
      }
    }
    var be = !1, $ = null, ue = -1, et = 5, ye = -1;
    function Me() {
      return !(S.unstable_now() - ye < et);
    }
    function Re() {
      if ($ !== null) {
        var H = S.unstable_now();
        ye = H;
        var ae = !0;
        try {
          ae = $(!0, H);
        } finally {
          ae ? ge() : (be = !1, $ = null);
        }
      } else
        be = !1;
    }
    var ge;
    if (typeof se == "function")
      ge = function() {
        se(Re);
      };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), Ze = Le.port2;
      Le.port1.onmessage = Re, ge = function() {
        Ze.postMessage(null);
      };
    } else
      ge = function() {
        k(Re, 0);
      };
    function Ye(H) {
      $ = H, be || (be = !0, ge());
    }
    function xe(H, ae) {
      ue = k(function() {
        H(S.unstable_now());
      }, ae);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, S.unstable_continueExecution = function() {
      A || z || (A = !0, Ye(ve));
    }, S.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : et = 0 < H ? Math.floor(1e3 / H) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, S.unstable_getFirstCallbackNode = function() {
      return a(b);
    }, S.unstable_next = function(H) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = C;
      }
      var ee = C;
      C = ae;
      try {
        return H();
      } finally {
        C = ee;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(H, ae) {
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
      var ee = C;
      C = H;
      try {
        return ae();
      } finally {
        C = ee;
      }
    }, S.unstable_scheduleCallback = function(H, ae, ee) {
      var O = S.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? O + ee : O) : ee = O, H) {
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
      return j = ee + j, H = { id: E++, callback: ae, priorityLevel: H, startTime: ee, expirationTime: j, sortIndex: -1 }, ee > O ? (H.sortIndex = ee, t(y, H), a(b) === null && H === a(y) && (B ? (V(ue), ue = -1) : B = !0, xe(fe, ee - O))) : (H.sortIndex = j, t(b, H), A || z || (A = !0, Ye(ve))), H;
    }, S.unstable_shouldYield = Me, S.unstable_wrapCallback = function(H) {
      var ae = C;
      return function() {
        var ee = C;
        C = ae;
        try {
          return H.apply(this, arguments);
        } finally {
          C = ee;
        }
      };
    };
  }(qv)), qv;
}
var Yv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kx;
function Eb() {
  return Kx || (Kx = 1, function(S) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = !1, a = !1, u = 5;
      function d(G, oe) {
        var De = G.length;
        G.push(oe), T(G, oe, De);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function v(G) {
        if (G.length === 0)
          return null;
        var oe = G[0], De = G.pop();
        return De !== oe && (G[0] = De, b(G, De, 0)), oe;
      }
      function T(G, oe, De) {
        for (var Xe = De; Xe > 0; ) {
          var Ne = Xe - 1 >>> 1, It = G[Ne];
          if (y(It, oe) > 0)
            G[Ne] = oe, G[Xe] = It, Xe = Ne;
          else
            return;
        }
      }
      function b(G, oe, De) {
        for (var Xe = De, Ne = G.length, It = Ne >>> 1; Xe < It; ) {
          var St = (Xe + 1) * 2 - 1, Ve = G[St], Se = St + 1, Fn = G[Se];
          if (y(Ve, oe) < 0)
            Se < Ne && y(Fn, Ve) < 0 ? (G[Xe] = Fn, G[Se] = oe, Xe = Se) : (G[Xe] = Ve, G[St] = oe, Xe = St);
          else if (Se < Ne && y(Fn, oe) < 0)
            G[Xe] = Fn, G[Se] = oe, Xe = Se;
          else
            return;
        }
      }
      function y(G, oe) {
        var De = G.sortIndex - oe.sortIndex;
        return De !== 0 ? De : G.id - oe.id;
      }
      var E = 1, _ = 2, C = 3, z = 4, A = 5;
      function B(G, oe) {
      }
      var k = typeof performance == "object" && typeof performance.now == "function";
      if (k) {
        var V = performance;
        S.unstable_now = function() {
          return V.now();
        };
      } else {
        var se = Date, ie = se.now();
        S.unstable_now = function() {
          return se.now() - ie;
        };
      }
      var fe = 1073741823, ve = -1, be = 250, $ = 5e3, ue = 1e4, et = fe, ye = [], Me = [], Re = 1, ge = null, Le = C, Ze = !1, Ye = !1, xe = !1, H = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function O(G) {
        for (var oe = m(Me); oe !== null; ) {
          if (oe.callback === null)
            v(Me);
          else if (oe.startTime <= G)
            v(Me), oe.sortIndex = oe.expirationTime, d(ye, oe);
          else
            return;
          oe = m(Me);
        }
      }
      function j(G) {
        if (xe = !1, O(G), !Ye)
          if (m(ye) !== null)
            Ye = !0, zr(Be);
          else {
            var oe = m(Me);
            oe !== null && Qr(j, oe.startTime - G);
          }
      }
      function Be(G, oe) {
        Ye = !1, xe && (xe = !1, ua()), Ze = !0;
        var De = Le;
        try {
          var Xe;
          if (!a)
            return ke(G, oe);
        } finally {
          ge = null, Le = De, Ze = !1;
        }
      }
      function ke(G, oe) {
        var De = oe;
        for (O(De), ge = m(ye); ge !== null && !t && !(ge.expirationTime > De && (!G || er())); ) {
          var Xe = ge.callback;
          if (typeof Xe == "function") {
            ge.callback = null, Le = ge.priorityLevel;
            var Ne = ge.expirationTime <= De, It = Xe(Ne);
            De = S.unstable_now(), typeof It == "function" ? ge.callback = It : ge === m(ye) && v(ye), O(De);
          } else
            v(ye);
          ge = m(ye);
        }
        if (ge !== null)
          return !0;
        var St = m(Me);
        return St !== null && Qr(j, St.startTime - De), !1;
      }
      function je(G, oe) {
        switch (G) {
          case E:
          case _:
          case C:
          case z:
          case A:
            break;
          default:
            G = C;
        }
        var De = Le;
        Le = G;
        try {
          return oe();
        } finally {
          Le = De;
        }
      }
      function He(G) {
        var oe;
        switch (Le) {
          case E:
          case _:
          case C:
            oe = C;
            break;
          default:
            oe = Le;
            break;
        }
        var De = Le;
        Le = oe;
        try {
          return G();
        } finally {
          Le = De;
        }
      }
      function tt(G) {
        var oe = Le;
        return function() {
          var De = Le;
          Le = oe;
          try {
            return G.apply(this, arguments);
          } finally {
            Le = De;
          }
        };
      }
      function at(G, oe, De) {
        var Xe = S.unstable_now(), Ne;
        if (typeof De == "object" && De !== null) {
          var It = De.delay;
          typeof It == "number" && It > 0 ? Ne = Xe + It : Ne = Xe;
        } else
          Ne = Xe;
        var St;
        switch (G) {
          case E:
            St = ve;
            break;
          case _:
            St = be;
            break;
          case A:
            St = et;
            break;
          case z:
            St = ue;
            break;
          case C:
          default:
            St = $;
            break;
        }
        var Ve = Ne + St, Se = {
          id: Re++,
          callback: oe,
          priorityLevel: G,
          startTime: Ne,
          expirationTime: Ve,
          sortIndex: -1
        };
        return Ne > Xe ? (Se.sortIndex = Ne, d(Me, Se), m(ye) === null && Se === m(Me) && (xe ? ua() : xe = !0, Qr(j, Ne - Xe))) : (Se.sortIndex = Ve, d(ye, Se), !Ye && !Ze && (Ye = !0, zr(Be))), Se;
      }
      function ot() {
      }
      function Gt() {
        !Ye && !Ze && (Ye = !0, zr(Be));
      }
      function An() {
        return m(ye);
      }
      function cr(G) {
        G.callback = null;
      }
      function Vt() {
        return Le;
      }
      var Nn = !1, $n = null, fr = -1, Yn = u, vi = -1;
      function er() {
        var G = S.unstable_now() - vi;
        return !(G < Yn);
      }
      function sn() {
      }
      function dr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Yn = Math.floor(1e3 / G) : Yn = u;
      }
      var Wn = function() {
        if ($n !== null) {
          var G = S.unstable_now();
          vi = G;
          var oe = !0, De = !0;
          try {
            De = $n(oe, G);
          } finally {
            De ? Ft() : (Nn = !1, $n = null);
          }
        } else
          Nn = !1;
      }, Ft;
      if (typeof ee == "function")
        Ft = function() {
          ee(Wn);
        };
      else if (typeof MessageChannel < "u") {
        var hr = new MessageChannel(), la = hr.port2;
        hr.port1.onmessage = Wn, Ft = function() {
          la.postMessage(null);
        };
      } else
        Ft = function() {
          H(Wn, 0);
        };
      function zr(G) {
        $n = G, Nn || (Nn = !0, Ft());
      }
      function Qr(G, oe) {
        fr = H(function() {
          G(S.unstable_now());
        }, oe);
      }
      function ua() {
        ae(fr), fr = -1;
      }
      var cs = sn, Na = null;
      S.unstable_IdlePriority = A, S.unstable_ImmediatePriority = E, S.unstable_LowPriority = z, S.unstable_NormalPriority = C, S.unstable_Profiling = Na, S.unstable_UserBlockingPriority = _, S.unstable_cancelCallback = cr, S.unstable_continueExecution = Gt, S.unstable_forceFrameRate = dr, S.unstable_getCurrentPriorityLevel = Vt, S.unstable_getFirstCallbackNode = An, S.unstable_next = He, S.unstable_pauseExecution = ot, S.unstable_requestPaint = cs, S.unstable_runWithPriority = je, S.unstable_scheduleCallback = at, S.unstable_shouldYield = er, S.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yv)), Yv;
}
var $x;
function T1() {
  return $x || ($x = 1, process.env.NODE_ENV === "production" ? hp.exports = _b() : hp.exports = Eb()), hp.exports;
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
var Wv, e1;
function Rb() {
  return e1 || (e1 = 1, Wv = function(t) {
    var a = {}, u = gn, d = T1(), m = Object.assign;
    function v(r) {
      for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, o = 1; o < arguments.length; o++)
        i += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + r + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var T = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = Symbol.for("react.element"), y = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), A = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), ve = Symbol.iterator;
    function be(r) {
      return r === null || typeof r != "object" ? null : (r = ve && r[ve] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    function $(r) {
      if (r == null)
        return null;
      if (typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case E:
          return "Fragment";
        case y:
          return "Portal";
        case C:
          return "Profiler";
        case _:
          return "StrictMode";
        case k:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case A:
            return (r.displayName || "Context") + ".Consumer";
          case z:
            return (r._context.displayName || "Context") + ".Provider";
          case B:
            var i = r.render;
            return r = r.displayName, r || (r = i.displayName || i.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case se:
            return i = r.displayName || null, i !== null ? i : $(r.type) || "Memo";
          case ie:
            i = r._payload, r = r._init;
            try {
              return $(r(i));
            } catch {
            }
        }
      return null;
    }
    function ue(r) {
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
          return $(i);
        case 8:
          return i === _ ? "StrictMode" : "Mode";
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
    function et(r) {
      var i = r, o = r;
      if (r.alternate)
        for (; i.return; )
          i = i.return;
      else {
        r = i;
        do
          i = r, i.flags & 4098 && (o = i.return), r = i.return;
        while (r);
      }
      return i.tag === 3 ? o : null;
    }
    function ye(r) {
      if (et(r) !== r)
        throw Error(v(188));
    }
    function Me(r) {
      var i = r.alternate;
      if (!i) {
        if (i = et(r), i === null)
          throw Error(v(188));
        return i !== r ? null : r;
      }
      for (var o = r, f = i; ; ) {
        var p = o.return;
        if (p === null)
          break;
        var x = p.alternate;
        if (x === null) {
          if (f = p.return, f !== null) {
            o = f;
            continue;
          }
          break;
        }
        if (p.child === x.child) {
          for (x = p.child; x; ) {
            if (x === o)
              return ye(p), r;
            if (x === f)
              return ye(p), i;
            x = x.sibling;
          }
          throw Error(v(188));
        }
        if (o.return !== f.return)
          o = p, f = x;
        else {
          for (var D = !1, L = p.child; L; ) {
            if (L === o) {
              D = !0, o = p, f = x;
              break;
            }
            if (L === f) {
              D = !0, f = p, o = x;
              break;
            }
            L = L.sibling;
          }
          if (!D) {
            for (L = x.child; L; ) {
              if (L === o) {
                D = !0, o = x, f = p;
                break;
              }
              if (L === f) {
                D = !0, f = x, o = p;
                break;
              }
              L = L.sibling;
            }
            if (!D)
              throw Error(v(189));
          }
        }
        if (o.alternate !== f)
          throw Error(v(190));
      }
      if (o.tag !== 3)
        throw Error(v(188));
      return o.stateNode.current === o ? r : i;
    }
    function Re(r) {
      return r = Me(r), r !== null ? ge(r) : null;
    }
    function ge(r) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      for (r = r.child; r !== null; ) {
        var i = ge(r);
        if (i !== null)
          return i;
        r = r.sibling;
      }
      return null;
    }
    function Le(r) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      for (r = r.child; r !== null; ) {
        if (r.tag !== 4) {
          var i = Le(r);
          if (i !== null)
            return i;
        }
        r = r.sibling;
      }
      return null;
    }
    var Ze = Array.isArray, Ye = t.getPublicInstance, xe = t.getRootHostContext, H = t.getChildHostContext, ae = t.prepareForCommit, ee = t.resetAfterCommit, O = t.createInstance, j = t.appendInitialChild, Be = t.finalizeInitialChildren, ke = t.prepareUpdate, je = t.shouldSetTextContent, He = t.createTextInstance, tt = t.scheduleTimeout, at = t.cancelTimeout, ot = t.noTimeout, Gt = t.isPrimaryRenderer, An = t.supportsMutation, cr = t.supportsPersistence, Vt = t.supportsHydration, Nn = t.getInstanceFromNode, $n = t.preparePortalMount, fr = t.getCurrentEventPriority, Yn = t.detachDeletedInstance, vi = t.supportsMicrotasks, er = t.scheduleMicrotask, sn = t.supportsTestSelectors, dr = t.findFiberRoot, Wn = t.getBoundingRect, Ft = t.getTextContent, hr = t.isHiddenSubtree, la = t.matchAccessibilityRole, zr = t.setFocusIfFocusable, Qr = t.setupIntersectionObserver, ua = t.appendChild, cs = t.appendChildToContainer, Na = t.commitTextUpdate, G = t.commitMount, oe = t.commitUpdate, De = t.insertBefore, Xe = t.insertInContainerBefore, Ne = t.removeChild, It = t.removeChildFromContainer, St = t.resetTextContent, Ve = t.hideInstance, Se = t.hideTextInstance, Fn = t.unhideInstance, Ut = t.unhideTextInstance, pt = t.clearContainer, Ks = t.cloneInstance, pr = t.createContainerChildSet, Fa = t.appendChildToContainerChildSet, uu = t.finalizeContainerChildren, gt = t.replaceContainerChildren, Gr = t.cloneHiddenInstance, Ui = t.cloneHiddenTextInstance, Dr = t.canHydrateInstance, tr = t.canHydrateTextInstance, nr = t.canHydrateSuspenseInstance, oo = t.isSuspenseInstancePending, Li = t.isSuspenseInstanceFallback, $s = t.registerSuspenseInstanceRetry, fs = t.getNextHydratableSibling, co = t.getFirstHydratableChild, Oa = t.getFirstHydratableChildWithinContainer, Qn = t.getFirstHydratableChildWithinSuspenseInstance, _n = t.hydrateInstance, fo = t.hydrateTextInstance, ou = t.hydrateSuspenseInstance, oa = t.getNextHydratableInstanceAfterSuspenseInstance, el = t.commitHydratedContainer, yi = t.commitHydratedSuspenseInstance, tl = t.clearSuspenseBoundary, cu = t.clearSuspenseBoundaryFromContainer, ds = t.shouldDeleteUnhydratedTailInstances, hs = t.didNotMatchHydratedContainerTextInstance, Ua = t.didNotMatchHydratedTextInstance, Ar;
    function ps(r) {
      if (Ar === void 0)
        try {
          throw Error();
        } catch (o) {
          var i = o.stack.trim().match(/\n( *(at )?)/);
          Ar = i && i[1] || "";
        }
      return `
` + Ar + r;
    }
    var La = !1;
    function fu(r, i) {
      if (!r || La)
        return "";
      La = !0;
      var o = Error.prepareStackTrace;
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
            } catch (he) {
              var f = he;
            }
            Reflect.construct(r, [], i);
          } else {
            try {
              i.call();
            } catch (he) {
              f = he;
            }
            r.call(i.prototype);
          }
        else {
          try {
            throw Error();
          } catch (he) {
            f = he;
          }
          r();
        }
      } catch (he) {
        if (he && f && typeof he.stack == "string") {
          for (var p = he.stack.split(`
`), x = f.stack.split(`
`), D = p.length - 1, L = x.length - 1; 1 <= D && 0 <= L && p[D] !== x[L]; )
            L--;
          for (; 1 <= D && 0 <= L; D--, L--)
            if (p[D] !== x[L]) {
              if (D !== 1 || L !== 1)
                do
                  if (D--, L--, 0 > L || p[D] !== x[L]) {
                    var K = `
` + p[D].replace(" at new ", " at ");
                    return r.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", r.displayName)), K;
                  }
                while (1 <= D && 0 <= L);
              break;
            }
        }
      } finally {
        La = !1, Error.prepareStackTrace = o;
      }
      return (r = r ? r.displayName || r.name : "") ? ps(r) : "";
    }
    var Pc = Object.prototype.hasOwnProperty, Bi = [], ki = -1;
    function Nr(r) {
      return { current: r };
    }
    function Lt(r) {
      0 > ki || (r.current = Bi[ki], Bi[ki] = null, ki--);
    }
    function Bt(r, i) {
      ki++, Bi[ki] = r.current, r.current = i;
    }
    var Xr = {}, En = Nr(Xr), kt = Nr(!1), Zr = Xr;
    function Ba(r, i) {
      var o = r.type.contextTypes;
      if (!o)
        return Xr;
      var f = r.stateNode;
      if (f && f.__reactInternalMemoizedUnmaskedChildContext === i)
        return f.__reactInternalMemoizedMaskedChildContext;
      var p = {}, x;
      for (x in o)
        p[x] = i[x];
      return f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = i, r.__reactInternalMemoizedMaskedChildContext = p), p;
    }
    function Gn(r) {
      return r = r.childContextTypes, r != null;
    }
    function ka() {
      Lt(kt), Lt(En);
    }
    function nl(r, i, o) {
      if (En.current !== Xr)
        throw Error(v(168));
      Bt(En, i), Bt(kt, o);
    }
    function ms(r, i, o) {
      var f = r.stateNode;
      if (i = i.childContextTypes, typeof f.getChildContext != "function")
        return o;
      f = f.getChildContext();
      for (var p in f)
        if (!(p in i))
          throw Error(v(108, ue(r) || "Unknown", p));
      return m({}, o, f);
    }
    function Hi(r) {
      return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Xr, Zr = En.current, Bt(En, r), Bt(kt, kt.current), !0;
    }
    function Ha(r, i, o) {
      var f = r.stateNode;
      if (!f)
        throw Error(v(169));
      o ? (r = ms(r, i, Zr), f.__reactInternalMemoizedMergedChildContext = r, Lt(kt), Lt(En), Bt(En, r)) : Lt(kt), Bt(kt, o);
    }
    var mr = Math.clz32 ? Math.clz32 : po, rl = Math.log, ho = Math.LN2;
    function po(r) {
      return r >>>= 0, r === 0 ? 32 : 31 - (rl(r) / ho | 0) | 0;
    }
    var ca = 64, fa = 4194304;
    function gi(r) {
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
      if (o === 0)
        return 0;
      var f = 0, p = r.suspendedLanes, x = r.pingedLanes, D = o & 268435455;
      if (D !== 0) {
        var L = D & ~p;
        L !== 0 ? f = gi(L) : (x &= D, x !== 0 && (f = gi(x)));
      } else
        D = o & ~p, D !== 0 ? f = gi(D) : x !== 0 && (f = gi(x));
      if (f === 0)
        return 0;
      if (i !== 0 && i !== f && !(i & p) && (p = f & -f, x = i & -i, p >= x || p === 16 && (x & 4194240) !== 0))
        return i;
      if (f & 4 && (f |= o & 16), i = r.entangledLanes, i !== 0)
        for (r = r.entanglements, i &= f; 0 < i; )
          o = 31 - mr(i), p = 1 << o, f |= r[o], i &= ~p;
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
      for (var o = r.suspendedLanes, f = r.pingedLanes, p = r.expirationTimes, x = r.pendingLanes; 0 < x; ) {
        var D = 31 - mr(x), L = 1 << D, K = p[D];
        K === -1 ? (!(L & o) || L & f) && (p[D] = Fr(L, i)) : K <= i && (r.expiredLanes |= L), x &= ~L;
      }
    }
    function Rn(r) {
      return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
    }
    function il(r) {
      for (var i = [], o = 0; 31 > o; o++)
        i.push(r);
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
        var p = 31 - mr(o), x = 1 << p;
        i[p] = 0, f[p] = -1, r[p] = -1, o &= ~x;
      }
    }
    function al(r, i) {
      var o = r.entangledLanes |= i;
      for (r = r.entanglements; o; ) {
        var f = 31 - mr(o), p = 1 << f;
        p & i | r[f] & i && (r[f] |= i), o &= ~p;
      }
    }
    var Rt = 0;
    function du(r) {
      return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var xi = d.unstable_scheduleCallback, hu = d.unstable_cancelCallback, Vc = d.unstable_shouldYield, mo = d.unstable_requestPaint, Jt = d.unstable_now, pu = d.unstable_ImmediatePriority, Ic = d.unstable_UserBlockingPriority, mu = d.unstable_NormalPriority, vo = d.unstable_IdlePriority, ha = null, Kr = null;
    function Pa(r) {
      if (Kr && typeof Kr.onCommitFiberRoot == "function")
        try {
          Kr.onCommitFiberRoot(ha, r, void 0, (r.current.flags & 128) === 128);
        } catch {
        }
    }
    function yo(r, i) {
      return r === i && (r !== 0 || 1 / r === 1 / i) || r !== r && i !== i;
    }
    var Or = typeof Object.is == "function" ? Object.is : yo, vr = null, ja = !1, ys = !1;
    function gs(r) {
      vr === null ? vr = [r] : vr.push(r);
    }
    function qc(r) {
      ja = !0, gs(r);
    }
    function $r() {
      if (!ys && vr !== null) {
        ys = !0;
        var r = 0, i = Rt;
        try {
          var o = vr;
          for (Rt = 1; r < o.length; r++) {
            var f = o[r];
            do
              f = f(!0);
            while (f !== null);
          }
          vr = null, ja = !1;
        } catch (p) {
          throw vr !== null && (vr = vr.slice(r + 1)), xi(pu, $r), p;
        } finally {
          Rt = i, ys = !1;
        }
      }
      return null;
    }
    var Yc = T.ReactCurrentBatchConfig;
    function sl(r, i) {
      if (Or(r, i))
        return !0;
      if (typeof r != "object" || r === null || typeof i != "object" || i === null)
        return !1;
      var o = Object.keys(r), f = Object.keys(i);
      if (o.length !== f.length)
        return !1;
      for (f = 0; f < o.length; f++) {
        var p = o[f];
        if (!Pc.call(i, p) || !Or(r[p], i[p]))
          return !1;
      }
      return !0;
    }
    function R(r) {
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
          return r = fu(r.type, !1), r;
        case 11:
          return r = fu(r.type.render, !1), r;
        case 1:
          return r = fu(r.type, !0), r;
        default:
          return "";
      }
    }
    function F(r, i) {
      if (r && r.defaultProps) {
        i = m({}, i), r = r.defaultProps;
        for (var o in r)
          i[o] === void 0 && (i[o] = r[o]);
        return i;
      }
      return i;
    }
    var W = Nr(null), J = null, pe = null, We = null;
    function Ue() {
      We = pe = J = null;
    }
    function nt(r, i, o) {
      Gt ? (Bt(W, i._currentValue), i._currentValue = o) : (Bt(W, i._currentValue2), i._currentValue2 = o);
    }
    function ct(r) {
      var i = W.current;
      Lt(W), Gt ? r._currentValue = i : r._currentValue2 = i;
    }
    function wt(r, i, o) {
      for (; r !== null; ) {
        var f = r.alternate;
        if ((r.childLanes & i) !== i ? (r.childLanes |= i, f !== null && (f.childLanes |= i)) : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i), r === o)
          break;
        r = r.return;
      }
    }
    function zt(r, i) {
      J = r, We = pe = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & i && (Xn = !0), r.firstContext = null);
    }
    function mt(r) {
      var i = Gt ? r._currentValue : r._currentValue2;
      if (We !== r)
        if (r = { context: r, memoizedValue: i, next: null }, pe === null) {
          if (J === null)
            throw Error(v(308));
          pe = r, J.dependencies = { lanes: 0, firstContext: r };
        } else
          pe = pe.next = r;
      return i;
    }
    var _t = null, Dt = !1;
    function ln(r) {
      r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function Pi(r, i) {
      r = r.updateQueue, i.updateQueue === r && (i.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
    }
    function Ur(r, i) {
      return { eventTime: r, lane: i, tag: 0, payload: null, callback: null, next: null };
    }
    function Si(r, i) {
      var o = r.updateQueue;
      o !== null && (o = o.shared, xn !== null && r.mode & 1 && !(ft & 2) ? (r = o.interleaved, r === null ? (i.next = i, _t === null ? _t = [o] : _t.push(o)) : (i.next = r.next, r.next = i), o.interleaved = i) : (r = o.pending, r === null ? i.next = i : (i.next = r.next, r.next = i), o.pending = i));
    }
    function ll(r, i, o) {
      if (i = i.updateQueue, i !== null && (i = i.shared, (o & 4194240) !== 0)) {
        var f = i.lanes;
        f &= r.pendingLanes, o |= f, i.lanes = o, al(r, o);
      }
    }
    function vu(r, i) {
      var o = r.updateQueue, f = r.alternate;
      if (f !== null && (f = f.updateQueue, o === f)) {
        var p = null, x = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var D = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
            x === null ? p = x = D : x = x.next = D, o = o.next;
          } while (o !== null);
          x === null ? p = x = i : x = x.next = i;
        } else
          p = x = i;
        o = { baseState: f.baseState, firstBaseUpdate: p, lastBaseUpdate: x, shared: f.shared, effects: f.effects }, r.updateQueue = o;
        return;
      }
      r = o.lastBaseUpdate, r === null ? o.firstBaseUpdate = i : r.next = i, o.lastBaseUpdate = i;
    }
    function ul(r, i, o, f) {
      var p = r.updateQueue;
      Dt = !1;
      var x = p.firstBaseUpdate, D = p.lastBaseUpdate, L = p.shared.pending;
      if (L !== null) {
        p.shared.pending = null;
        var K = L, he = K.next;
        K.next = null, D === null ? x = he : D.next = he, D = K;
        var Ee = r.alternate;
        Ee !== null && (Ee = Ee.updateQueue, L = Ee.lastBaseUpdate, L !== D && (L === null ? Ee.firstBaseUpdate = he : L.next = he, Ee.lastBaseUpdate = K));
      }
      if (x !== null) {
        var $e = p.baseState;
        D = 0, Ee = he = K = null, L = x;
        do {
          var Ge = L.lane, Qt = L.eventTime;
          if ((f & Ge) === Ge) {
            Ee !== null && (Ee = Ee.next = {
              eventTime: Qt,
              lane: 0,
              tag: L.tag,
              payload: L.payload,
              callback: L.callback,
              next: null
            });
            e: {
              var Ie = r, Pn = L;
              switch (Ge = i, Qt = o, Pn.tag) {
                case 1:
                  if (Ie = Pn.payload, typeof Ie == "function") {
                    $e = Ie.call(Qt, $e, Ge);
                    break e;
                  }
                  $e = Ie;
                  break e;
                case 3:
                  Ie.flags = Ie.flags & -65537 | 128;
                case 0:
                  if (Ie = Pn.payload, Ge = typeof Ie == "function" ? Ie.call(Qt, $e, Ge) : Ie, Ge == null)
                    break e;
                  $e = m({}, $e, Ge);
                  break e;
                case 2:
                  Dt = !0;
              }
            }
            L.callback !== null && L.lane !== 0 && (r.flags |= 64, Ge = p.effects, Ge === null ? p.effects = [L] : Ge.push(L));
          } else
            Qt = { eventTime: Qt, lane: Ge, tag: L.tag, payload: L.payload, callback: L.callback, next: null }, Ee === null ? (he = Ee = Qt, K = $e) : Ee = Ee.next = Qt, D |= Ge;
          if (L = L.next, L === null) {
            if (L = p.shared.pending, L === null)
              break;
            Ge = L, L = Ge.next, Ge.next = null, p.lastBaseUpdate = Ge, p.shared.pending = null;
          }
        } while (!0);
        if (Ee === null && (K = $e), p.baseState = K, p.firstBaseUpdate = he, p.lastBaseUpdate = Ee, i = p.shared.interleaved, i !== null) {
          p = i;
          do
            D |= p.lane, p = p.next;
          while (p !== i);
        } else
          x === null && (p.shared.lanes = 0);
        Gi |= D, r.lanes = D, r.memoizedState = $e;
      }
    }
    function yu(r, i, o) {
      if (r = i.effects, i.effects = null, r !== null)
        for (i = 0; i < r.length; i++) {
          var f = r[i], p = f.callback;
          if (p !== null) {
            if (f.callback = null, f = o, typeof p != "function")
              throw Error(v(191, p));
            p.call(f);
          }
        }
    }
    var go = new u.Component().refs;
    function xo(r, i, o, f) {
      i = r.memoizedState, o = o(f, i), o = o == null ? i : m({}, i, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
    }
    var So = { isMounted: function(r) {
      return (r = r._reactInternals) ? et(r) === r : !1;
    }, enqueueSetState: function(r, i, o) {
      r = r._reactInternals;
      var f = Zn(), p = Xa(r), x = Ur(f, p);
      x.payload = i, o != null && (x.callback = o), Si(r, x), i = si(r, p, f), i !== null && ll(i, r, p);
    }, enqueueReplaceState: function(r, i, o) {
      r = r._reactInternals;
      var f = Zn(), p = Xa(r), x = Ur(f, p);
      x.tag = 1, x.payload = i, o != null && (x.callback = o), Si(r, x), i = si(r, p, f), i !== null && ll(i, r, p);
    }, enqueueForceUpdate: function(r, i) {
      r = r._reactInternals;
      var o = Zn(), f = Xa(r), p = Ur(
        o,
        f
      );
      p.tag = 2, i != null && (p.callback = i), Si(r, p), i = si(r, f, o), i !== null && ll(i, r, f);
    } };
    function vd(r, i, o, f, p, x, D) {
      return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(f, x, D) : i.prototype && i.prototype.isPureReactComponent ? !sl(o, f) || !sl(p, x) : !0;
    }
    function yd(r, i, o) {
      var f = !1, p = Xr, x = i.contextType;
      return typeof x == "object" && x !== null ? x = mt(x) : (p = Gn(i) ? Zr : En.current, f = i.contextTypes, x = (f = f != null) ? Ba(r, p) : Xr), i = new i(o, x), r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = So, r.stateNode = i, i._reactInternals = r, f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = p, r.__reactInternalMemoizedMaskedChildContext = x), i;
    }
    function gd(r, i, o, f) {
      r = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(o, f), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(o, f), i.state !== r && So.enqueueReplaceState(i, i.state, null);
    }
    function Wc(r, i, o, f) {
      var p = r.stateNode;
      p.props = o, p.state = r.memoizedState, p.refs = go, ln(r);
      var x = i.contextType;
      typeof x == "object" && x !== null ? p.context = mt(x) : (x = Gn(i) ? Zr : En.current, p.context = Ba(r, x)), p.state = r.memoizedState, x = i.getDerivedStateFromProps, typeof x == "function" && (xo(r, i, x, o), p.state = r.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (i = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), i !== p.state && So.enqueueReplaceState(p, p.state, null), ul(r, o, p, f), p.state = r.memoizedState), typeof p.componentDidMount == "function" && (r.flags |= 4194308);
    }
    var ol = [], cl = 0, _o = null, Eo = 0, ei = [], ti = 0, xs = null, pa = 1, ma = "";
    function Ss(r, i) {
      ol[cl++] = Eo, ol[cl++] = _o, _o = r, Eo = i;
    }
    function xd(r, i, o) {
      ei[ti++] = pa, ei[ti++] = ma, ei[ti++] = xs, xs = r;
      var f = pa;
      r = ma;
      var p = 32 - mr(f) - 1;
      f &= ~(1 << p), o += 1;
      var x = 32 - mr(i) + p;
      if (30 < x) {
        var D = p - p % 5;
        x = (f & (1 << D) - 1).toString(32), f >>= D, p -= D, pa = 1 << 32 - mr(i) + p | o << p | f, ma = x + r;
      } else
        pa = 1 << x | o << p | f, ma = r;
    }
    function Qc(r) {
      r.return !== null && (Ss(r, 1), xd(r, 1, 0));
    }
    function Gc(r) {
      for (; r === _o; )
        _o = ol[--cl], ol[cl] = null, Eo = ol[--cl], ol[cl] = null;
      for (; r === xs; )
        xs = ei[--ti], ei[ti] = null, ma = ei[--ti], ei[ti] = null, pa = ei[--ti], ei[ti] = null;
    }
    var Lr = null, Bn = null, Kt = !1, fl = !1, ni = null;
    function Xc(r, i) {
      var o = Jn(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = i, o.return = r, i = r.deletions, i === null ? (r.deletions = [o], r.flags |= 16) : i.push(o);
    }
    function Zc(r, i) {
      switch (r.tag) {
        case 5:
          return i = Dr(i, r.type, r.pendingProps), i !== null ? (r.stateNode = i, Lr = r, Bn = co(i), !0) : !1;
        case 6:
          return i = tr(i, r.pendingProps), i !== null ? (r.stateNode = i, Lr = r, Bn = null, !0) : !1;
        case 13:
          if (i = nr(i), i !== null) {
            var o = xs !== null ? { id: pa, overflow: ma } : null;
            return r.memoizedState = { dehydrated: i, treeContext: o, retryLane: 1073741824 }, o = Jn(18, null, null, 0), o.stateNode = i, o.return = r, r.child = o, Lr = r, Bn = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function Ro(r) {
      return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
    }
    function bo(r) {
      if (Kt) {
        var i = Bn;
        if (i) {
          var o = i;
          if (!Zc(r, i)) {
            if (Ro(r))
              throw Error(v(418));
            i = fs(o);
            var f = Lr;
            i && Zc(r, i) ? Xc(f, o) : (r.flags = r.flags & -4097 | 2, Kt = !1, Lr = r);
          }
        } else {
          if (Ro(r))
            throw Error(v(418));
          r.flags = r.flags & -4097 | 2, Kt = !1, Lr = r;
        }
      }
    }
    function Jc(r) {
      for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
        r = r.return;
      Lr = r;
    }
    function gu(r) {
      if (!Vt || r !== Lr)
        return !1;
      if (!Kt)
        return Jc(r), Kt = !0, !1;
      if (r.tag !== 3 && (r.tag !== 5 || ds(r.type) && !je(r.type, r.memoizedProps))) {
        var i = Bn;
        if (i) {
          if (Ro(r)) {
            for (r = Bn; r; )
              r = fs(r);
            throw Error(v(418));
          }
          for (; i; )
            Xc(r, i), i = fs(i);
        }
      }
      if (Jc(r), r.tag === 13) {
        if (!Vt)
          throw Error(v(316));
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r)
          throw Error(v(317));
        Bn = oa(r);
      } else
        Bn = Lr ? fs(r.stateNode) : null;
      return !0;
    }
    function dl() {
      Vt && (Bn = Lr = null, fl = Kt = !1);
    }
    function xu(r) {
      ni === null ? ni = [r] : ni.push(r);
    }
    function _s(r, i, o) {
      if (r = o.ref, r !== null && typeof r != "function" && typeof r != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1)
              throw Error(v(309));
            var f = o.stateNode;
          }
          if (!f)
            throw Error(v(147, r));
          var p = f, x = "" + r;
          return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === x ? i.ref : (i = function(D) {
            var L = p.refs;
            L === go && (L = p.refs = {}), D === null ? delete L[x] : L[x] = D;
          }, i._stringRef = x, i);
        }
        if (typeof r != "string")
          throw Error(v(284));
        if (!o._owner)
          throw Error(v(290, r));
      }
      return r;
    }
    function _i(r, i) {
      throw r = Object.prototype.toString.call(i), Error(v(31, r === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : r));
    }
    function To(r) {
      var i = r._init;
      return i(r._payload);
    }
    function Su(r) {
      function i(Y, P) {
        if (r) {
          var X = Y.deletions;
          X === null ? (Y.deletions = [P], Y.flags |= 16) : X.push(P);
        }
      }
      function o(Y, P) {
        if (!r)
          return null;
        for (; P !== null; )
          i(Y, P), P = P.sibling;
        return null;
      }
      function f(Y, P) {
        for (Y = /* @__PURE__ */ new Map(); P !== null; )
          P.key !== null ? Y.set(P.key, P) : Y.set(P.index, P), P = P.sibling;
        return Y;
      }
      function p(Y, P) {
        return Y = _r(Y, P), Y.index = 0, Y.sibling = null, Y;
      }
      function x(Y, P, X) {
        return Y.index = X, r ? (X = Y.alternate, X !== null ? (X = X.index, X < P ? (Y.flags |= 2, P) : X) : (Y.flags |= 2, P)) : (Y.flags |= 1048576, P);
      }
      function D(Y) {
        return r && Y.alternate === null && (Y.flags |= 2), Y;
      }
      function L(Y, P, X, we) {
        return P === null || P.tag !== 6 ? (P = Jo(X, Y.mode, we), P.return = Y, P) : (P = p(P, X), P.return = Y, P);
      }
      function K(Y, P, X, we) {
        var Pe = X.type;
        return Pe === E ? Ee(Y, P, X.props.children, we, X.key) : P !== null && (P.elementType === Pe || typeof Pe == "object" && Pe !== null && Pe.$$typeof === ie && To(Pe) === P.type) ? (we = p(P, X.props), we.ref = _s(Y, P, X), we.return = Y, we) : (we = Hs(X.type, X.key, X.props, null, Y.mode, we), we.ref = _s(Y, P, X), we.return = Y, we);
      }
      function he(Y, P, X, we) {
        return P === null || P.tag !== 4 || P.stateNode.containerInfo !== X.containerInfo || P.stateNode.implementation !== X.implementation ? (P = ju(X, Y.mode, we), P.return = Y, P) : (P = p(P, X.children || []), P.return = Y, P);
      }
      function Ee(Y, P, X, we, Pe) {
        return P === null || P.tag !== 7 ? (P = Ja(X, Y.mode, we, Pe), P.return = Y, P) : (P = p(P, X), P.return = Y, P);
      }
      function $e(Y, P, X) {
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return P = Jo("" + P, Y.mode, X), P.return = Y, P;
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case b:
              return X = Hs(P.type, P.key, P.props, null, Y.mode, X), X.ref = _s(Y, null, P), X.return = Y, X;
            case y:
              return P = ju(P, Y.mode, X), P.return = Y, P;
            case ie:
              var we = P._init;
              return $e(Y, we(P._payload), X);
          }
          if (Ze(P) || be(P))
            return P = Ja(P, Y.mode, X, null), P.return = Y, P;
          _i(Y, P);
        }
        return null;
      }
      function Ge(Y, P, X, we) {
        var Pe = P !== null ? P.key : null;
        if (typeof X == "string" && X !== "" || typeof X == "number")
          return Pe !== null ? null : L(Y, P, "" + X, we);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case b:
              return X.key === Pe ? K(Y, P, X, we) : null;
            case y:
              return X.key === Pe ? he(Y, P, X, we) : null;
            case ie:
              return Pe = X._init, Ge(
                Y,
                P,
                Pe(X._payload),
                we
              );
          }
          if (Ze(X) || be(X))
            return Pe !== null ? null : Ee(Y, P, X, we, null);
          _i(Y, X);
        }
        return null;
      }
      function Qt(Y, P, X, we, Pe) {
        if (typeof we == "string" && we !== "" || typeof we == "number")
          return Y = Y.get(X) || null, L(P, Y, "" + we, Pe);
        if (typeof we == "object" && we !== null) {
          switch (we.$$typeof) {
            case b:
              return Y = Y.get(we.key === null ? X : we.key) || null, K(P, Y, we, Pe);
            case y:
              return Y = Y.get(we.key === null ? X : we.key) || null, he(P, Y, we, Pe);
            case ie:
              var lt = we._init;
              return Qt(Y, P, X, lt(we._payload), Pe);
          }
          if (Ze(we) || be(we))
            return Y = Y.get(X) || null, Ee(P, Y, we, Pe, null);
          _i(P, we);
        }
        return null;
      }
      function Ie(Y, P, X, we) {
        for (var Pe = null, lt = null, Je = P, dt = P = 0, dn = null; Je !== null && dt < X.length; dt++) {
          Je.index > dt ? (dn = Je, Je = null) : dn = Je.sibling;
          var Mt = Ge(Y, Je, X[dt], we);
          if (Mt === null) {
            Je === null && (Je = dn);
            break;
          }
          r && Je && Mt.alternate === null && i(Y, Je), P = x(Mt, P, dt), lt === null ? Pe = Mt : lt.sibling = Mt, lt = Mt, Je = dn;
        }
        if (dt === X.length)
          return o(Y, Je), Kt && Ss(Y, dt), Pe;
        if (Je === null) {
          for (; dt < X.length; dt++)
            Je = $e(Y, X[dt], we), Je !== null && (P = x(Je, P, dt), lt === null ? Pe = Je : lt.sibling = Je, lt = Je);
          return Kt && Ss(Y, dt), Pe;
        }
        for (Je = f(Y, Je); dt < X.length; dt++)
          dn = Qt(Je, Y, dt, X[dt], we), dn !== null && (r && dn.alternate !== null && Je.delete(dn.key === null ? dt : dn.key), P = x(dn, P, dt), lt === null ? Pe = dn : lt.sibling = dn, lt = dn);
        return r && Je.forEach(function(Ka) {
          return i(Y, Ka);
        }), Kt && Ss(Y, dt), Pe;
      }
      function Pn(Y, P, X, we) {
        var Pe = be(X);
        if (typeof Pe != "function")
          throw Error(v(150));
        if (X = Pe.call(X), X == null)
          throw Error(v(151));
        for (var lt = Pe = null, Je = P, dt = P = 0, dn = null, Mt = X.next(); Je !== null && !Mt.done; dt++, Mt = X.next()) {
          Je.index > dt ? (dn = Je, Je = null) : dn = Je.sibling;
          var Ka = Ge(Y, Je, Mt.value, we);
          if (Ka === null) {
            Je === null && (Je = dn);
            break;
          }
          r && Je && Ka.alternate === null && i(Y, Je), P = x(Ka, P, dt), lt === null ? Pe = Ka : lt.sibling = Ka, lt = Ka, Je = dn;
        }
        if (Mt.done)
          return o(
            Y,
            Je
          ), Kt && Ss(Y, dt), Pe;
        if (Je === null) {
          for (; !Mt.done; dt++, Mt = X.next())
            Mt = $e(Y, Mt.value, we), Mt !== null && (P = x(Mt, P, dt), lt === null ? Pe = Mt : lt.sibling = Mt, lt = Mt);
          return Kt && Ss(Y, dt), Pe;
        }
        for (Je = f(Y, Je); !Mt.done; dt++, Mt = X.next())
          Mt = Qt(Je, Y, dt, Mt.value, we), Mt !== null && (r && Mt.alternate !== null && Je.delete(Mt.key === null ? dt : Mt.key), P = x(Mt, P, dt), lt === null ? Pe = Mt : lt.sibling = Mt, lt = Mt);
        return r && Je.forEach(function(Ko) {
          return i(Y, Ko);
        }), Kt && Ss(Y, dt), Pe;
      }
      function rr(Y, P, X, we) {
        if (typeof X == "object" && X !== null && X.type === E && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case b:
              e: {
                for (var Pe = X.key, lt = P; lt !== null; ) {
                  if (lt.key === Pe) {
                    if (Pe = X.type, Pe === E) {
                      if (lt.tag === 7) {
                        o(Y, lt.sibling), P = p(lt, X.props.children), P.return = Y, Y = P;
                        break e;
                      }
                    } else if (lt.elementType === Pe || typeof Pe == "object" && Pe !== null && Pe.$$typeof === ie && To(Pe) === lt.type) {
                      o(Y, lt.sibling), P = p(lt, X.props), P.ref = _s(Y, lt, X), P.return = Y, Y = P;
                      break e;
                    }
                    o(Y, lt);
                    break;
                  } else
                    i(Y, lt);
                  lt = lt.sibling;
                }
                X.type === E ? (P = Ja(X.props.children, Y.mode, we, X.key), P.return = Y, Y = P) : (we = Hs(X.type, X.key, X.props, null, Y.mode, we), we.ref = _s(Y, P, X), we.return = Y, Y = we);
              }
              return D(Y);
            case y:
              e: {
                for (lt = X.key; P !== null; ) {
                  if (P.key === lt)
                    if (P.tag === 4 && P.stateNode.containerInfo === X.containerInfo && P.stateNode.implementation === X.implementation) {
                      o(Y, P.sibling), P = p(P, X.children || []), P.return = Y, Y = P;
                      break e;
                    } else {
                      o(Y, P);
                      break;
                    }
                  else
                    i(Y, P);
                  P = P.sibling;
                }
                P = ju(X, Y.mode, we), P.return = Y, Y = P;
              }
              return D(Y);
            case ie:
              return lt = X._init, rr(Y, P, lt(X._payload), we);
          }
          if (Ze(X))
            return Ie(Y, P, X, we);
          if (be(X))
            return Pn(Y, P, X, we);
          _i(Y, X);
        }
        return typeof X == "string" && X !== "" || typeof X == "number" ? (X = "" + X, P !== null && P.tag === 6 ? (o(Y, P.sibling), P = p(P, X), P.return = Y, Y = P) : (o(Y, P), P = Jo(X, Y.mode, we), P.return = Y, Y = P), D(Y)) : o(Y, P);
      }
      return rr;
    }
    var hl = Su(!0), Mo = Su(!1), _u = {}, yr = Nr(_u), Eu = Nr(_u), Va = Nr(_u);
    function Ei(r) {
      if (r === _u)
        throw Error(v(174));
      return r;
    }
    function Co(r, i) {
      Bt(Va, i), Bt(Eu, r), Bt(yr, _u), r = xe(i), Lt(yr), Bt(yr, r);
    }
    function Es() {
      Lt(yr), Lt(Eu), Lt(Va);
    }
    function Ru(r) {
      var i = Ei(Va.current), o = Ei(yr.current);
      i = H(o, r.type, i), o !== i && (Bt(Eu, r), Bt(yr, i));
    }
    function Br(r) {
      Eu.current === r && (Lt(yr), Lt(Eu));
    }
    var $t = Nr(0);
    function Rs(r) {
      for (var i = r; i !== null; ) {
        if (i.tag === 13) {
          var o = i.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || oo(o) || Li(o)))
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
    var Ri = [];
    function ji() {
      for (var r = 0; r < Ri.length; r++) {
        var i = Ri[r];
        Gt ? i._workInProgressVersionPrimary = null : i._workInProgressVersionSecondary = null;
      }
      Ri.length = 0;
    }
    var bn = T.ReactCurrentDispatcher, qt = T.ReactCurrentBatchConfig, Ia = 0, bt = null, tn = null, Wt = null, pl = !1, Vi = !1, ml = 0, vl = 0;
    function Tn() {
      throw Error(v(321));
    }
    function ri(r, i) {
      if (i === null)
        return !1;
      for (var o = 0; o < i.length && o < r.length; o++)
        if (!Or(r[o], i[o]))
          return !1;
      return !0;
    }
    function yl(r, i, o, f, p, x) {
      if (Ia = x, bt = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, bn.current = r === null || r.memoizedState === null ? tf : nf, r = o(f, p), Vi) {
        x = 0;
        do {
          if (Vi = !1, ml = 0, 25 <= x)
            throw Error(v(301));
          x += 1, Wt = tn = null, i.updateQueue = null, bn.current = rf, r = o(f, p);
        } while (Vi);
      }
      if (bn.current = El, i = tn !== null && tn.next !== null, Ia = 0, Wt = tn = bt = null, pl = !1, i)
        throw Error(v(300));
      return r;
    }
    function bu() {
      var r = ml !== 0;
      return ml = 0, r;
    }
    function Ii() {
      var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Wt === null ? bt.memoizedState = Wt = r : Wt = Wt.next = r, Wt;
    }
    function bi() {
      if (tn === null) {
        var r = bt.alternate;
        r = r !== null ? r.memoizedState : null;
      } else
        r = tn.next;
      var i = Wt === null ? bt.memoizedState : Wt.next;
      if (i !== null)
        Wt = i, tn = r;
      else {
        if (r === null)
          throw Error(v(310));
        tn = r, r = { memoizedState: tn.memoizedState, baseState: tn.baseState, baseQueue: tn.baseQueue, queue: tn.queue, next: null }, Wt === null ? bt.memoizedState = Wt = r : Wt = Wt.next = r;
      }
      return Wt;
    }
    function qi(r, i) {
      return typeof i == "function" ? i(r) : i;
    }
    function Tu(r) {
      var i = bi(), o = i.queue;
      if (o === null)
        throw Error(v(311));
      o.lastRenderedReducer = r;
      var f = tn, p = f.baseQueue, x = o.pending;
      if (x !== null) {
        if (p !== null) {
          var D = p.next;
          p.next = x.next, x.next = D;
        }
        f.baseQueue = p = x, o.pending = null;
      }
      if (p !== null) {
        x = p.next, f = f.baseState;
        var L = D = null, K = null, he = x;
        do {
          var Ee = he.lane;
          if ((Ia & Ee) === Ee)
            K !== null && (K = K.next = { lane: 0, action: he.action, hasEagerState: he.hasEagerState, eagerState: he.eagerState, next: null }), f = he.hasEagerState ? he.eagerState : r(f, he.action);
          else {
            var $e = {
              lane: Ee,
              action: he.action,
              hasEagerState: he.hasEagerState,
              eagerState: he.eagerState,
              next: null
            };
            K === null ? (L = K = $e, D = f) : K = K.next = $e, bt.lanes |= Ee, Gi |= Ee;
          }
          he = he.next;
        } while (he !== null && he !== x);
        K === null ? D = f : K.next = L, Or(f, i.memoizedState) || (Xn = !0), i.memoizedState = f, i.baseState = D, i.baseQueue = K, o.lastRenderedState = f;
      }
      if (r = o.interleaved, r !== null) {
        p = r;
        do
          x = p.lane, bt.lanes |= x, Gi |= x, p = p.next;
        while (p !== r);
      } else
        p === null && (o.lanes = 0);
      return [i.memoizedState, o.dispatch];
    }
    function wo(r) {
      var i = bi(), o = i.queue;
      if (o === null)
        throw Error(v(311));
      o.lastRenderedReducer = r;
      var f = o.dispatch, p = o.pending, x = i.memoizedState;
      if (p !== null) {
        o.pending = null;
        var D = p = p.next;
        do
          x = r(x, D.action), D = D.next;
        while (D !== p);
        Or(x, i.memoizedState) || (Xn = !0), i.memoizedState = x, i.baseQueue === null && (i.baseState = x), o.lastRenderedState = x;
      }
      return [x, f];
    }
    function bs() {
    }
    function Kc(r, i) {
      var o = bt, f = bi(), p = i(), x = !Or(f.memoizedState, p);
      if (x && (f.memoizedState = p, Xn = !0), f = f.queue, ce(Ct.bind(null, o, f, r), [r]), f.getSnapshot !== i || x || Wt !== null && Wt.memoizedState.tag & 1) {
        if (o.flags |= 2048, gl(9, Ht.bind(null, o, f, p, i), void 0, null), xn === null)
          throw Error(v(349));
        Ia & 30 || rt(o, i, p);
      }
      return p;
    }
    function rt(r, i, o) {
      r.flags |= 16384, r = { getSnapshot: i, value: o }, i = bt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, bt.updateQueue = i, i.stores = [r]) : (o = i.stores, o === null ? i.stores = [r] : o.push(r));
    }
    function Ht(r, i, o, f) {
      i.value = o, i.getSnapshot = f, un(i) && si(r, 1, -1);
    }
    function Ct(r, i, o) {
      return o(function() {
        un(i) && si(r, 1, -1);
      });
    }
    function un(r) {
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
      var i = Ii();
      return typeof r == "function" && (r = r()), i.memoizedState = i.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: r }, i.queue = r, r = r.dispatch = ef.bind(null, bt, r), [i.memoizedState, r];
    }
    function gl(r, i, o, f) {
      return r = { tag: r, create: i, destroy: o, deps: f, next: null }, i = bt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, bt.updateQueue = i, i.lastEffect = r.next = r) : (o = i.lastEffect, o === null ? i.lastEffect = r.next = r : (f = o.next, o.next = r, r.next = f, i.lastEffect = r)), r;
    }
    function Sd() {
      return bi().memoizedState;
    }
    function zo(r, i, o, f) {
      var p = Ii();
      bt.flags |= r, p.memoizedState = gl(1 | i, o, void 0, f === void 0 ? null : f);
    }
    function Do(r, i, o, f) {
      var p = bi();
      f = f === void 0 ? null : f;
      var x = void 0;
      if (tn !== null) {
        var D = tn.memoizedState;
        if (x = D.destroy, f !== null && ri(f, D.deps)) {
          p.memoizedState = gl(i, o, x, f);
          return;
        }
      }
      bt.flags |= r, p.memoizedState = gl(1 | i, o, x, f);
    }
    function Mu(r, i) {
      return zo(8390656, 8, r, i);
    }
    function ce(r, i) {
      return Do(2048, 8, r, i);
    }
    function Mn(r, i) {
      return Do(4, 2, r, i);
    }
    function vt(r, i) {
      return Do(4, 4, r, i);
    }
    function Ts(r, i) {
      if (typeof i == "function")
        return r = r(), i(r), function() {
          i(null);
        };
      if (i != null)
        return r = r(), i.current = r, function() {
          i.current = null;
        };
    }
    function va(r, i, o) {
      return o = o != null ? o.concat([r]) : null, Do(4, 4, Ts.bind(null, i, r), o);
    }
    function ya() {
    }
    function Yi(r, i) {
      var o = bi();
      i = i === void 0 ? null : i;
      var f = o.memoizedState;
      return f !== null && i !== null && ri(i, f[1]) ? f[0] : (o.memoizedState = [r, i], r);
    }
    function xl(r, i) {
      var o = bi();
      i = i === void 0 ? null : i;
      var f = o.memoizedState;
      return f !== null && i !== null && ri(i, f[1]) ? f[0] : (r = r(), o.memoizedState = [r, i], r);
    }
    function Sl(r, i) {
      var o = Rt;
      Rt = o !== 0 && 4 > o ? o : 4, r(!0);
      var f = qt.transition;
      qt.transition = {};
      try {
        r(!1), i();
      } finally {
        Rt = o, qt.transition = f;
      }
    }
    function _l() {
      return bi().memoizedState;
    }
    function $c(r, i, o) {
      var f = Xa(r);
      o = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null }, Ao(r) ? No(i, o) : (Fo(r, i, o), o = Zn(), r = si(r, f, o), r !== null && Oo(r, i, f));
    }
    function ef(r, i, o) {
      var f = Xa(r), p = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null };
      if (Ao(r))
        No(i, p);
      else {
        Fo(r, i, p);
        var x = r.alternate;
        if (r.lanes === 0 && (x === null || x.lanes === 0) && (x = i.lastRenderedReducer, x !== null))
          try {
            var D = i.lastRenderedState, L = x(D, o);
            if (p.hasEagerState = !0, p.eagerState = L, Or(L, D))
              return;
          } catch {
          } finally {
          }
        o = Zn(), r = si(r, f, o), r !== null && Oo(r, i, f);
      }
    }
    function Ao(r) {
      var i = r.alternate;
      return r === bt || i !== null && i === bt;
    }
    function No(r, i) {
      Vi = pl = !0;
      var o = r.pending;
      o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
    }
    function Fo(r, i, o) {
      xn !== null && r.mode & 1 && !(ft & 2) ? (r = i.interleaved, r === null ? (o.next = o, _t === null ? _t = [i] : _t.push(i)) : (o.next = r.next, r.next = o), i.interleaved = o) : (r = i.pending, r === null ? o.next = o : (o.next = r.next, r.next = o), i.pending = o);
    }
    function Oo(r, i, o) {
      if (o & 4194240) {
        var f = i.lanes;
        f &= r.pendingLanes, o |= f, i.lanes = o, al(r, o);
      }
    }
    var El = { readContext: mt, useCallback: Tn, useContext: Tn, useEffect: Tn, useImperativeHandle: Tn, useInsertionEffect: Tn, useLayoutEffect: Tn, useMemo: Tn, useReducer: Tn, useRef: Tn, useState: Tn, useDebugValue: Tn, useDeferredValue: Tn, useTransition: Tn, useMutableSource: Tn, useSyncExternalStore: Tn, useId: Tn, unstable_isNewReconciler: !1 }, tf = { readContext: mt, useCallback: function(r, i) {
      return Ii().memoizedState = [r, i === void 0 ? null : i], r;
    }, useContext: mt, useEffect: Mu, useImperativeHandle: function(r, i, o) {
      return o = o != null ? o.concat([r]) : null, zo(
        4194308,
        4,
        Ts.bind(null, i, r),
        o
      );
    }, useLayoutEffect: function(r, i) {
      return zo(4194308, 4, r, i);
    }, useInsertionEffect: function(r, i) {
      return zo(4, 2, r, i);
    }, useMemo: function(r, i) {
      var o = Ii();
      return i = i === void 0 ? null : i, r = r(), o.memoizedState = [r, i], r;
    }, useReducer: function(r, i, o) {
      var f = Ii();
      return i = o !== void 0 ? o(i) : i, f.memoizedState = f.baseState = i, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: i }, f.queue = r, r = r.dispatch = $c.bind(null, bt, r), [f.memoizedState, r];
    }, useRef: function(r) {
      var i = Ii();
      return r = { current: r }, i.memoizedState = r;
    }, useState: ii, useDebugValue: ya, useDeferredValue: function(r) {
      var i = ii(r), o = i[0], f = i[1];
      return Mu(function() {
        var p = qt.transition;
        qt.transition = {};
        try {
          f(r);
        } finally {
          qt.transition = p;
        }
      }, [r]), o;
    }, useTransition: function() {
      var r = ii(!1), i = r[0];
      return r = Sl.bind(null, r[1]), Ii().memoizedState = r, [i, r];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(r, i, o) {
      var f = bt, p = Ii();
      if (Kt) {
        if (o === void 0)
          throw Error(v(407));
        o = o();
      } else {
        if (o = i(), xn === null)
          throw Error(v(349));
        Ia & 30 || rt(f, i, o);
      }
      p.memoizedState = o;
      var x = { value: o, getSnapshot: i };
      return p.queue = x, Mu(Ct.bind(null, f, x, r), [r]), f.flags |= 2048, gl(9, Ht.bind(null, f, x, o, i), void 0, null), o;
    }, useId: function() {
      var r = Ii(), i = xn.identifierPrefix;
      if (Kt) {
        var o = ma, f = pa;
        o = (f & ~(1 << 32 - mr(f) - 1)).toString(32) + o, i = ":" + i + "R" + o, o = ml++, 0 < o && (i += "H" + o.toString(32)), i += ":";
      } else
        o = vl++, i = ":" + i + "r" + o.toString(32) + ":";
      return r.memoizedState = i;
    }, unstable_isNewReconciler: !1 }, nf = {
      readContext: mt,
      useCallback: Yi,
      useContext: mt,
      useEffect: ce,
      useImperativeHandle: va,
      useInsertionEffect: Mn,
      useLayoutEffect: vt,
      useMemo: xl,
      useReducer: Tu,
      useRef: Sd,
      useState: function() {
        return Tu(qi);
      },
      useDebugValue: ya,
      useDeferredValue: function(r) {
        var i = Tu(qi), o = i[0], f = i[1];
        return ce(function() {
          var p = qt.transition;
          qt.transition = {};
          try {
            f(r);
          } finally {
            qt.transition = p;
          }
        }, [r]), o;
      },
      useTransition: function() {
        var r = Tu(qi)[0], i = bi().memoizedState;
        return [r, i];
      },
      useMutableSource: bs,
      useSyncExternalStore: Kc,
      useId: _l,
      unstable_isNewReconciler: !1
    }, rf = {
      readContext: mt,
      useCallback: Yi,
      useContext: mt,
      useEffect: ce,
      useImperativeHandle: va,
      useInsertionEffect: Mn,
      useLayoutEffect: vt,
      useMemo: xl,
      useReducer: wo,
      useRef: Sd,
      useState: function() {
        return wo(qi);
      },
      useDebugValue: ya,
      useDeferredValue: function(r) {
        var i = wo(qi), o = i[0], f = i[1];
        return ce(function() {
          var p = qt.transition;
          qt.transition = {};
          try {
            f(r);
          } finally {
            qt.transition = p;
          }
        }, [r]), o;
      },
      useTransition: function() {
        var r = wo(qi)[0], i = bi().memoizedState;
        return [r, i];
      },
      useMutableSource: bs,
      useSyncExternalStore: Kc,
      useId: _l,
      unstable_isNewReconciler: !1
    };
    function Cu(r, i) {
      try {
        var o = "", f = i;
        do
          o += R(f), f = f.return;
        while (f);
        var p = o;
      } catch (x) {
        p = `
Error generating stack: ` + x.message + `
` + x.stack;
      }
      return { value: r, source: i, stack: p };
    }
    function wu(r, i) {
      try {
        console.error(i.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var af = typeof WeakMap == "function" ? WeakMap : Map;
    function Uo(r, i, o) {
      o = Ur(-1, o), o.tag = 3, o.payload = { element: null };
      var f = i.value;
      return o.callback = function() {
        Ou || (Ou = !0, Qo = f), wu(r, i);
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
          wu(r, i);
        };
      }
      var x = r.stateNode;
      return x !== null && typeof x.componentDidCatch == "function" && (o.callback = function() {
        wu(r, i), typeof f != "function" && (Qa === null ? Qa = /* @__PURE__ */ new Set([this]) : Qa.add(this));
        var D = i.stack;
        this.componentDidCatch(i.value, { componentStack: D !== null ? D : "" });
      }), o;
    }
    function zu(r, i, o) {
      var f = r.pingCache;
      if (f === null) {
        f = r.pingCache = new af();
        var p = /* @__PURE__ */ new Set();
        f.set(i, p);
      } else
        p = f.get(i), p === void 0 && (p = /* @__PURE__ */ new Set(), f.set(i, p));
      p.has(o) || (p.add(o), r = Xi.bind(null, r, i, o), i.then(r, r));
    }
    function Ms(r) {
      do {
        var i;
        if ((i = r.tag === 13) && (i = r.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i)
          return r;
        r = r.return;
      } while (r !== null);
      return null;
    }
    function Bo(r, i, o, f, p) {
      return r.mode & 1 ? (r.flags |= 65536, r.lanes = p, r) : (r === i ? r.flags |= 65536 : (r.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (i = Ur(-1, 1), i.tag = 2, Si(o, i))), o.lanes |= 1), r);
    }
    function ai(r) {
      r.flags |= 4;
    }
    function ko(r, i) {
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
    var Cs, Rl, qa, Du;
    if (An)
      Cs = function(r, i) {
        for (var o = i.child; o !== null; ) {
          if (o.tag === 5 || o.tag === 6)
            j(r, o.stateNode);
          else if (o.tag !== 4 && o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
          if (o === i)
            break;
          for (; o.sibling === null; ) {
            if (o.return === null || o.return === i)
              return;
            o = o.return;
          }
          o.sibling.return = o.return, o = o.sibling;
        }
      }, Rl = function() {
      }, qa = function(r, i, o, f, p) {
        if (r = r.memoizedProps, r !== f) {
          var x = i.stateNode, D = Ei(yr.current);
          o = ke(x, o, r, f, p, D), (i.updateQueue = o) && ai(i);
        }
      }, Du = function(r, i, o, f) {
        o !== f && ai(i);
      };
    else if (cr) {
      Cs = function(r, i, o, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var x = p.stateNode;
            o && f && (x = Gr(x, p.type, p.memoizedProps, p)), j(r, x);
          } else if (p.tag === 6)
            x = p.stateNode, o && f && (x = Ui(x, p.memoizedProps, p)), j(r, x);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null)
              x = p.child, x !== null && (x.return = p), Cs(r, p, !0, !0);
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
      var bl = function(r, i, o, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var x = p.stateNode;
            o && f && (x = Gr(x, p.type, p.memoizedProps, p)), Fa(r, x);
          } else if (p.tag === 6)
            x = p.stateNode, o && f && (x = Ui(x, p.memoizedProps, p)), Fa(r, x);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null)
              x = p.child, x !== null && (x.return = p), bl(r, p, !0, !0);
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
        var o = i.stateNode;
        if (!ko(r, i)) {
          r = o.containerInfo;
          var f = pr(r);
          bl(f, i, !1, !1), o.pendingChildren = f, ai(i), uu(r, f);
        }
      }, qa = function(r, i, o, f, p) {
        var x = r.stateNode, D = r.memoizedProps;
        if ((r = ko(r, i)) && D === f)
          i.stateNode = x;
        else {
          var L = i.stateNode, K = Ei(yr.current), he = null;
          D !== f && (he = ke(L, o, D, f, p, K)), r && he === null ? i.stateNode = x : (x = Ks(x, he, o, D, f, i, r, L), Be(x, o, f, p, K) && ai(i), i.stateNode = x, r ? ai(i) : Cs(x, i, !1, !1));
        }
      }, Du = function(r, i, o, f) {
        o !== f ? (r = Ei(Va.current), o = Ei(yr.current), i.stateNode = He(f, r, o, i), ai(i)) : i.stateNode = r.stateNode;
      };
    } else
      Rl = function() {
      }, qa = function() {
      }, Du = function() {
      };
    function Ti(r, i) {
      if (!Kt)
        switch (r.tailMode) {
          case "hidden":
            i = r.tail;
            for (var o = null; i !== null; )
              i.alternate !== null && (o = i), i = i.sibling;
            o === null ? r.tail = null : o.sibling = null;
            break;
          case "collapsed":
            o = r.tail;
            for (var f = null; o !== null; )
              o.alternate !== null && (f = o), o = o.sibling;
            f === null ? i || r.tail === null ? r.tail = null : r.tail.sibling = null : f.sibling = null;
        }
    }
    function Yt(r) {
      var i = r.alternate !== null && r.alternate.child === r.child, o = 0, f = 0;
      if (i)
        for (var p = r.child; p !== null; )
          o |= p.lanes | p.childLanes, f |= p.subtreeFlags & 14680064, f |= p.flags & 14680064, p.return = r, p = p.sibling;
      else
        for (p = r.child; p !== null; )
          o |= p.lanes | p.childLanes, f |= p.subtreeFlags, f |= p.flags, p.return = r, p = p.sibling;
      return r.subtreeFlags |= f, r.childLanes = o, i;
    }
    function Sp(r, i, o) {
      var f = i.pendingProps;
      switch (Gc(i), i.tag) {
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
          return Yt(i), null;
        case 1:
          return Gn(i.type) && ka(), Yt(i), null;
        case 3:
          return f = i.stateNode, Es(), Lt(kt), Lt(En), ji(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (r === null || r.child === null) && (gu(i) ? ai(i) : r === null || r.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, ni !== null && (Bu(ni), ni = null))), Rl(r, i), Yt(i), null;
        case 5:
          Br(i), o = Ei(Va.current);
          var p = i.type;
          if (r !== null && i.stateNode != null)
            qa(r, i, p, f, o), r.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
          else {
            if (!f) {
              if (i.stateNode === null)
                throw Error(v(166));
              return Yt(i), null;
            }
            if (r = Ei(yr.current), gu(i)) {
              if (!Vt)
                throw Error(v(175));
              r = _n(i.stateNode, i.type, i.memoizedProps, o, r, i, !fl), i.updateQueue = r, r !== null && ai(i);
            } else {
              var x = O(p, f, o, r, i);
              Cs(x, i, !1, !1), i.stateNode = x, Be(x, p, f, o, r) && ai(i);
            }
            i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
          }
          return Yt(i), null;
        case 6:
          if (r && i.stateNode != null)
            Du(r, i, r.memoizedProps, f);
          else {
            if (typeof f != "string" && i.stateNode === null)
              throw Error(v(166));
            if (r = Ei(Va.current), o = Ei(yr.current), gu(i)) {
              if (!Vt)
                throw Error(v(176));
              if (r = i.stateNode, f = i.memoizedProps, (o = fo(r, f, i, !fl)) && (p = Lr, p !== null))
                switch (x = (p.mode & 1) !== 0, p.tag) {
                  case 3:
                    hs(p.stateNode.containerInfo, r, f, x);
                    break;
                  case 5:
                    Ua(p.type, p.memoizedProps, p.stateNode, r, f, x);
                }
              o && ai(i);
            } else
              i.stateNode = He(f, r, o, i);
          }
          return Yt(i), null;
        case 13:
          if (Lt($t), f = i.memoizedState, Kt && Bn !== null && i.mode & 1 && !(i.flags & 128)) {
            for (r = Bn; r; )
              r = fs(r);
            return dl(), i.flags |= 98560, i;
          }
          if (f !== null && f.dehydrated !== null) {
            if (f = gu(i), r === null) {
              if (!f)
                throw Error(v(318));
              if (!Vt)
                throw Error(v(344));
              if (r = i.memoizedState, r = r !== null ? r.dehydrated : null, !r)
                throw Error(v(317));
              ou(r, i);
            } else
              dl(), !(i.flags & 128) && (i.memoizedState = null), i.flags |= 4;
            return Yt(i), null;
          }
          return ni !== null && (Bu(ni), ni = null), i.flags & 128 ? (i.lanes = o, i) : (f = f !== null, o = !1, r === null ? gu(i) : o = r.memoizedState !== null, f && !o && (i.child.flags |= 8192, i.mode & 1 && (r === null || $t.current & 1 ? wn === 0 && (wn = 3) : bf())), i.updateQueue !== null && (i.flags |= 4), Yt(i), null);
        case 4:
          return Es(), Rl(r, i), r === null && $n(i.stateNode.containerInfo), Yt(i), null;
        case 10:
          return ct(i.type._context), Yt(i), null;
        case 17:
          return Gn(i.type) && ka(), Yt(i), null;
        case 19:
          if (Lt($t), p = i.memoizedState, p === null)
            return Yt(i), null;
          if (f = (i.flags & 128) !== 0, x = p.rendering, x === null)
            if (f)
              Ti(p, !1);
            else {
              if (wn !== 0 || r !== null && r.flags & 128)
                for (r = i.child; r !== null; ) {
                  if (x = Rs(r), x !== null) {
                    for (i.flags |= 128, Ti(p, !1), r = x.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), i.subtreeFlags = 0, r = o, f = i.child; f !== null; )
                      o = f, p = r, o.flags &= 14680066, x = o.alternate, x === null ? (o.childLanes = 0, o.lanes = p, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = x.childLanes, o.lanes = x.lanes, o.child = x.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = x.memoizedProps, o.memoizedState = x.memoizedState, o.updateQueue = x.updateQueue, o.type = x.type, p = x.dependencies, o.dependencies = p === null ? null : { lanes: p.lanes, firstContext: p.firstContext }), f = f.sibling;
                    return Bt($t, $t.current & 1 | 2), i.child;
                  }
                  r = r.sibling;
                }
              p.tail !== null && Jt() > Sf && (i.flags |= 128, f = !0, Ti(p, !1), i.lanes = 4194304);
            }
          else {
            if (!f)
              if (r = Rs(x), r !== null) {
                if (i.flags |= 128, f = !0, r = r.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), Ti(p, !0), p.tail === null && p.tailMode === "hidden" && !x.alternate && !Kt)
                  return Yt(i), null;
              } else
                2 * Jt() - p.renderingStartTime > Sf && o !== 1073741824 && (i.flags |= 128, f = !0, Ti(p, !1), i.lanes = 4194304);
            p.isBackwards ? (x.sibling = i.child, i.child = x) : (r = p.last, r !== null ? r.sibling = x : i.child = x, p.last = x);
          }
          return p.tail !== null ? (i = p.tail, p.rendering = i, p.tail = i.sibling, p.renderingStartTime = Jt(), i.sibling = null, r = $t.current, Bt($t, f ? r & 1 | 2 : r & 1), i) : (Yt(i), null);
        case 22:
        case 23:
          return li(), f = i.memoizedState !== null, r !== null && r.memoizedState !== null !== f && (i.flags |= 8192), f && i.mode & 1 ? Hr & 1073741824 && (Yt(i), An && i.subtreeFlags & 6 && (i.flags |= 8192)) : Yt(i), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(v(156, i.tag));
    }
    var Xt = T.ReactCurrentOwner, Xn = !1;
    function On(r, i, o, f) {
      i.child = r === null ? Mo(i, null, o, f) : hl(i, r.child, o, f);
    }
    function Tl(r, i, o, f, p) {
      o = o.render;
      var x = i.ref;
      return zt(i, p), f = yl(r, i, o, f, x, p), o = bu(), r !== null && !Xn ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, on(r, i, p)) : (Kt && o && Qc(i), i.flags |= 1, On(r, i, f, p), i.child);
    }
    function Au(r, i, o, f, p) {
      if (r === null) {
        var x = o.type;
        return typeof x == "function" && !ks(x) && x.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (i.tag = 15, i.type = x, _d(r, i, x, f, p)) : (r = Hs(o.type, null, f, i, i.mode, p), r.ref = i.ref, r.return = i, i.child = r);
      }
      if (x = r.child, !(r.lanes & p)) {
        var D = x.memoizedProps;
        if (o = o.compare, o = o !== null ? o : sl, o(D, f) && r.ref === i.ref)
          return on(r, i, p);
      }
      return i.flags |= 1, r = _r(x, f), r.ref = i.ref, r.return = i, i.child = r;
    }
    function _d(r, i, o, f, p) {
      if (r !== null && sl(r.memoizedProps, f) && r.ref === i.ref)
        if (Xn = !1, (r.lanes & p) !== 0)
          r.flags & 131072 && (Xn = !0);
        else
          return i.lanes = r.lanes, on(r, i, p);
      return sf(r, i, o, f, p);
    }
    function Ed(r, i, o) {
      var f = i.pendingProps, p = f.children, x = r !== null ? r.memoizedState : null;
      if (f.mode === "hidden")
        if (!(i.mode & 1))
          i.memoizedState = { baseLanes: 0, cachePool: null }, Bt(Nl, Hr), Hr |= o;
        else if (o & 1073741824)
          i.memoizedState = { baseLanes: 0, cachePool: null }, f = x !== null ? x.baseLanes : o, Bt(Nl, Hr), Hr |= f;
        else
          return r = x !== null ? x.baseLanes | o : o, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: r, cachePool: null }, i.updateQueue = null, Bt(Nl, Hr), Hr |= r, null;
      else
        x !== null ? (f = x.baseLanes | o, i.memoizedState = null) : f = o, Bt(Nl, Hr), Hr |= f;
      return On(r, i, p, o), i.child;
    }
    function Rd(r, i) {
      var o = i.ref;
      (r === null && o !== null || r !== null && r.ref !== o) && (i.flags |= 512, i.flags |= 2097152);
    }
    function sf(r, i, o, f, p) {
      var x = Gn(o) ? Zr : En.current;
      return x = Ba(i, x), zt(i, p), o = yl(r, i, o, f, x, p), f = bu(), r !== null && !Xn ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, on(r, i, p)) : (Kt && f && Qc(i), i.flags |= 1, On(r, i, o, p), i.child);
    }
    function Ho(r, i, o, f, p) {
      if (Gn(o)) {
        var x = !0;
        Hi(i);
      } else
        x = !1;
      if (zt(i, p), i.stateNode === null)
        r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), yd(i, o, f), Wc(i, o, f, p), f = !0;
      else if (r === null) {
        var D = i.stateNode, L = i.memoizedProps;
        D.props = L;
        var K = D.context, he = o.contextType;
        typeof he == "object" && he !== null ? he = mt(he) : (he = Gn(o) ? Zr : En.current, he = Ba(i, he));
        var Ee = o.getDerivedStateFromProps, $e = typeof Ee == "function" || typeof D.getSnapshotBeforeUpdate == "function";
        $e || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (L !== f || K !== he) && gd(i, D, f, he), Dt = !1;
        var Ge = i.memoizedState;
        D.state = Ge, ul(i, f, D, p), K = i.memoizedState, L !== f || Ge !== K || kt.current || Dt ? (typeof Ee == "function" && (xo(i, o, Ee, f), K = i.memoizedState), (L = Dt || vd(i, o, L, f, Ge, K, he)) ? ($e || typeof D.UNSAFE_componentWillMount != "function" && typeof D.componentWillMount != "function" || (typeof D.componentWillMount == "function" && D.componentWillMount(), typeof D.UNSAFE_componentWillMount == "function" && D.UNSAFE_componentWillMount()), typeof D.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof D.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = f, i.memoizedState = K), D.props = f, D.state = K, D.context = he, f = L) : (typeof D.componentDidMount == "function" && (i.flags |= 4194308), f = !1);
      } else {
        D = i.stateNode, Pi(r, i), L = i.memoizedProps, he = i.type === i.elementType ? L : F(i.type, L), D.props = he, $e = i.pendingProps, Ge = D.context, K = o.contextType, typeof K == "object" && K !== null ? K = mt(K) : (K = Gn(o) ? Zr : En.current, K = Ba(i, K));
        var Qt = o.getDerivedStateFromProps;
        (Ee = typeof Qt == "function" || typeof D.getSnapshotBeforeUpdate == "function") || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (L !== $e || Ge !== K) && gd(i, D, f, K), Dt = !1, Ge = i.memoizedState, D.state = Ge, ul(i, f, D, p);
        var Ie = i.memoizedState;
        L !== $e || Ge !== Ie || kt.current || Dt ? (typeof Qt == "function" && (xo(i, o, Qt, f), Ie = i.memoizedState), (he = Dt || vd(i, o, he, f, Ge, Ie, K) || !1) ? (Ee || typeof D.UNSAFE_componentWillUpdate != "function" && typeof D.componentWillUpdate != "function" || (typeof D.componentWillUpdate == "function" && D.componentWillUpdate(
          f,
          Ie,
          K
        ), typeof D.UNSAFE_componentWillUpdate == "function" && D.UNSAFE_componentWillUpdate(f, Ie, K)), typeof D.componentDidUpdate == "function" && (i.flags |= 4), typeof D.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof D.componentDidUpdate != "function" || L === r.memoizedProps && Ge === r.memoizedState || (i.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || L === r.memoizedProps && Ge === r.memoizedState || (i.flags |= 1024), i.memoizedProps = f, i.memoizedState = Ie), D.props = f, D.state = Ie, D.context = K, f = he) : (typeof D.componentDidUpdate != "function" || L === r.memoizedProps && Ge === r.memoizedState || (i.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || L === r.memoizedProps && Ge === r.memoizedState || (i.flags |= 1024), f = !1);
      }
      return lf(r, i, o, f, x, p);
    }
    function lf(r, i, o, f, p, x) {
      Rd(r, i);
      var D = (i.flags & 128) !== 0;
      if (!f && !D)
        return p && Ha(i, o, !1), on(r, i, x);
      f = i.stateNode, Xt.current = i;
      var L = D && typeof o.getDerivedStateFromError != "function" ? null : f.render();
      return i.flags |= 1, r !== null && D ? (i.child = hl(i, r.child, null, x), i.child = hl(i, null, L, x)) : On(r, i, L, x), i.memoizedState = f.state, p && Ha(i, o, !0), i.child;
    }
    function Po(r) {
      var i = r.stateNode;
      i.pendingContext ? nl(r, i.pendingContext, i.pendingContext !== i.context) : i.context && nl(r, i.context, !1), Co(r, i.containerInfo);
    }
    function uf(r, i, o, f, p) {
      return dl(), xu(p), i.flags |= 256, On(r, i, o, f), i.child;
    }
    var jo = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ws(r) {
      return { baseLanes: r, cachePool: null };
    }
    function bd(r, i, o) {
      var f = i.pendingProps, p = $t.current, x = !1, D = (i.flags & 128) !== 0, L;
      if ((L = D) || (L = r !== null && r.memoizedState === null ? !1 : (p & 2) !== 0), L ? (x = !0, i.flags &= -129) : (r === null || r.memoizedState !== null) && (p |= 1), Bt($t, p & 1), r === null)
        return bo(i), r = i.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (i.mode & 1 ? Li(r) ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (p = f.children, r = f.fallback, x ? (f = i.mode, x = i.child, p = { mode: "hidden", children: p }, !(f & 1) && x !== null ? (x.childLanes = 0, x.pendingProps = p) : x = Pu(p, f, 0, null), r = Ja(r, f, o, null), x.return = i, r.return = i, x.sibling = r, i.child = x, i.child.memoizedState = ws(o), i.memoizedState = jo, r) : Vo(i, p));
      if (p = r.memoizedState, p !== null) {
        if (L = p.dehydrated, L !== null) {
          if (D)
            return i.flags & 256 ? (i.flags &= -257, Wi(r, i, o, Error(v(422)))) : i.memoizedState !== null ? (i.child = r.child, i.flags |= 128, null) : (x = f.fallback, p = i.mode, f = Pu({ mode: "visible", children: f.children }, p, 0, null), x = Ja(x, p, o, null), x.flags |= 2, f.return = i, x.return = i, f.sibling = x, i.child = f, i.mode & 1 && hl(
              i,
              r.child,
              null,
              o
            ), i.child.memoizedState = ws(o), i.memoizedState = jo, x);
          if (!(i.mode & 1))
            i = Wi(r, i, o, null);
          else if (Li(L))
            i = Wi(r, i, o, Error(v(419)));
          else if (f = (o & r.childLanes) !== 0, Xn || f) {
            if (f = xn, f !== null) {
              switch (o & -o) {
                case 4:
                  x = 2;
                  break;
                case 16:
                  x = 8;
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
                  x = 32;
                  break;
                case 536870912:
                  x = 268435456;
                  break;
                default:
                  x = 0;
              }
              f = x & (f.suspendedLanes | o) ? 0 : x, f !== 0 && f !== p.retryLane && (p.retryLane = f, si(r, f, -1));
            }
            bf(), i = Wi(r, i, o, Error(v(421)));
          } else
            oo(L) ? (i.flags |= 128, i.child = r.child, i = bp.bind(null, r), $s(L, i), i = null) : (o = p.treeContext, Vt && (Bn = Qn(L), Lr = i, Kt = !0, ni = null, fl = !1, o !== null && (ei[ti++] = pa, ei[ti++] = ma, ei[ti++] = xs, pa = o.id, ma = o.overflow, xs = i)), i = Vo(i, i.pendingProps.children), i.flags |= 4096);
          return i;
        }
        return x ? (f = Md(r, i, f.children, f.fallback, o), x = i.child, p = r.child.memoizedState, x.memoizedState = p === null ? ws(o) : { baseLanes: p.baseLanes | o, cachePool: null }, x.childLanes = r.childLanes & ~o, i.memoizedState = jo, f) : (o = Td(r, i, f.children, o), i.memoizedState = null, o);
      }
      return x ? (f = Md(r, i, f.children, f.fallback, o), x = i.child, p = r.child.memoizedState, x.memoizedState = p === null ? ws(o) : { baseLanes: p.baseLanes | o, cachePool: null }, x.childLanes = r.childLanes & ~o, i.memoizedState = jo, f) : (o = Td(r, i, f.children, o), i.memoizedState = null, o);
    }
    function Vo(r, i) {
      return i = Pu({ mode: "visible", children: i }, r.mode, 0, null), i.return = r, r.child = i;
    }
    function Td(r, i, o, f) {
      var p = r.child;
      return r = p.sibling, o = _r(p, { mode: "visible", children: o }), !(i.mode & 1) && (o.lanes = f), o.return = i, o.sibling = null, r !== null && (f = i.deletions, f === null ? (i.deletions = [r], i.flags |= 16) : f.push(r)), i.child = o;
    }
    function Md(r, i, o, f, p) {
      var x = i.mode;
      r = r.child;
      var D = r.sibling, L = { mode: "hidden", children: o };
      return !(x & 1) && i.child !== r ? (o = i.child, o.childLanes = 0, o.pendingProps = L, i.deletions = null) : (o = _r(r, L), o.subtreeFlags = r.subtreeFlags & 14680064), D !== null ? f = _r(D, f) : (f = Ja(f, x, p, null), f.flags |= 2), f.return = i, o.return = i, o.sibling = f, i.child = o, f;
    }
    function Wi(r, i, o, f) {
      return f !== null && xu(f), hl(i, r.child, null, o), r = Vo(i, i.pendingProps.children), r.flags |= 2, i.memoizedState = null, r;
    }
    function Ml(r, i, o) {
      r.lanes |= i;
      var f = r.alternate;
      f !== null && (f.lanes |= i), wt(r.return, i, o);
    }
    function ga(r, i, o, f, p) {
      var x = r.memoizedState;
      x === null ? r.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: f, tail: o, tailMode: p } : (x.isBackwards = i, x.rendering = null, x.renderingStartTime = 0, x.last = f, x.tail = o, x.tailMode = p);
    }
    function Io(r, i, o) {
      var f = i.pendingProps, p = f.revealOrder, x = f.tail;
      if (On(r, i, f.children, o), f = $t.current, f & 2)
        f = f & 1 | 2, i.flags |= 128;
      else {
        if (r !== null && r.flags & 128)
          e:
            for (r = i.child; r !== null; ) {
              if (r.tag === 13)
                r.memoizedState !== null && Ml(r, o, i);
              else if (r.tag === 19)
                Ml(r, o, i);
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
      if (Bt($t, f), !(i.mode & 1))
        i.memoizedState = null;
      else
        switch (p) {
          case "forwards":
            for (o = i.child, p = null; o !== null; )
              r = o.alternate, r !== null && Rs(r) === null && (p = o), o = o.sibling;
            o = p, o === null ? (p = i.child, i.child = null) : (p = o.sibling, o.sibling = null), ga(i, !1, p, o, x);
            break;
          case "backwards":
            for (o = null, p = i.child, i.child = null; p !== null; ) {
              if (r = p.alternate, r !== null && Rs(r) === null) {
                i.child = p;
                break;
              }
              r = p.sibling, p.sibling = o, o = p, p = r;
            }
            ga(i, !0, o, null, x);
            break;
          case "together":
            ga(i, !1, null, null, void 0);
            break;
          default:
            i.memoizedState = null;
        }
      return i.child;
    }
    function on(r, i, o) {
      if (r !== null && (i.dependencies = r.dependencies), Gi |= i.lanes, !(o & i.childLanes))
        return null;
      if (r !== null && i.child !== r.child)
        throw Error(v(153));
      if (i.child !== null) {
        for (r = i.child, o = _r(r, r.pendingProps), i.child = o, o.return = i; r.sibling !== null; )
          r = r.sibling, o = o.sibling = _r(r, r.pendingProps), o.return = i;
        o.sibling = null;
      }
      return i.child;
    }
    function Cl(r, i, o) {
      switch (i.tag) {
        case 3:
          Po(i), dl();
          break;
        case 5:
          Ru(i);
          break;
        case 1:
          Gn(i.type) && Hi(i);
          break;
        case 4:
          Co(i, i.stateNode.containerInfo);
          break;
        case 10:
          nt(i, i.type._context, i.memoizedProps.value);
          break;
        case 13:
          var f = i.memoizedState;
          if (f !== null)
            return f.dehydrated !== null ? (Bt($t, $t.current & 1), i.flags |= 128, null) : o & i.child.childLanes ? bd(r, i, o) : (Bt($t, $t.current & 1), r = on(r, i, o), r !== null ? r.sibling : null);
          Bt($t, $t.current & 1);
          break;
        case 19:
          if (f = (o & i.childLanes) !== 0, r.flags & 128) {
            if (f)
              return Io(
                r,
                i,
                o
              );
            i.flags |= 128;
          }
          var p = i.memoizedState;
          if (p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Bt($t, $t.current), f)
            break;
          return null;
        case 22:
        case 23:
          return i.lanes = 0, Ed(r, i, o);
      }
      return on(r, i, o);
    }
    function st(r, i) {
      switch (Gc(i), i.tag) {
        case 1:
          return Gn(i.type) && ka(), r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 3:
          return Es(), Lt(kt), Lt(En), ji(), r = i.flags, r & 65536 && !(r & 128) ? (i.flags = r & -65537 | 128, i) : null;
        case 5:
          return Br(i), null;
        case 13:
          if (Lt($t), r = i.memoizedState, r !== null && r.dehydrated !== null) {
            if (i.alternate === null)
              throw Error(v(340));
            dl();
          }
          return r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 19:
          return Lt($t), null;
        case 4:
          return Es(), null;
        case 10:
          return ct(i.type._context), null;
        case 22:
        case 23:
          return li(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var zs = !1, Ya = !1, py = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
    function wl(r, i) {
      var o = r.ref;
      if (o !== null)
        if (typeof o == "function")
          try {
            o(null);
          } catch (f) {
            At(r, i, f);
          }
        else
          o.current = null;
    }
    function Ds(r, i, o) {
      try {
        o();
      } catch (f) {
        At(r, i, f);
      }
    }
    var Cd = !1;
    function wd(r, i) {
      for (ae(r.containerInfo), ze = i; ze !== null; )
        if (r = ze, i = r.child, (r.subtreeFlags & 1028) !== 0 && i !== null)
          i.return = r, ze = i;
        else
          for (; ze !== null; ) {
            r = ze;
            try {
              var o = r.alternate;
              if (r.flags & 1024)
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (o !== null) {
                      var f = o.memoizedProps, p = o.memoizedState, x = r.stateNode, D = x.getSnapshotBeforeUpdate(r.elementType === r.type ? f : F(r.type, f), p);
                      x.__reactInternalSnapshotBeforeUpdate = D;
                    }
                    break;
                  case 3:
                    An && pt(r.stateNode.containerInfo);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(v(163));
                }
            } catch (L) {
              At(r, r.return, L);
            }
            if (i = r.sibling, i !== null) {
              i.return = r.return, ze = i;
              break;
            }
            ze = r.return;
          }
      return o = Cd, Cd = !1, o;
    }
    function As(r, i, o) {
      var f = i.updateQueue;
      if (f = f !== null ? f.lastEffect : null, f !== null) {
        var p = f = f.next;
        do {
          if ((p.tag & r) === r) {
            var x = p.destroy;
            p.destroy = void 0, x !== void 0 && Ds(i, o, x);
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
    function of(r) {
      var i = r.ref;
      if (i !== null) {
        var o = r.stateNode;
        switch (r.tag) {
          case 5:
            r = Ye(o);
            break;
          default:
            r = o;
        }
        typeof i == "function" ? i(r) : i.current = r;
      }
    }
    function cf(r, i, o) {
      if (Kr && typeof Kr.onCommitFiberUnmount == "function")
        try {
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
              var p = f, x = p.destroy;
              p = p.tag, x !== void 0 && (p & 2 || p & 4) && Ds(i, o, x), f = f.next;
            } while (f !== r);
          }
          break;
        case 1:
          if (wl(i, o), r = i.stateNode, typeof r.componentWillUnmount == "function")
            try {
              r.props = i.memoizedProps, r.state = i.memoizedState, r.componentWillUnmount();
            } catch (D) {
              At(
                i,
                o,
                D
              );
            }
          break;
        case 5:
          wl(i, o);
          break;
        case 4:
          An ? Cn(r, i, o) : cr && cr && (i = i.stateNode.containerInfo, o = pr(i), gt(i, o));
      }
    }
    function ff(r, i, o) {
      for (var f = i; ; )
        if (cf(r, f, o), f.child === null || An && f.tag === 4) {
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
    function Mi(r) {
      var i = r.alternate;
      i !== null && (r.alternate = null, Mi(i)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (i = r.stateNode, i !== null && Yn(i)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
    }
    function zl(r) {
      return r.tag === 5 || r.tag === 3 || r.tag === 4;
    }
    function Dl(r) {
      e:
        for (; ; ) {
          for (; r.sibling === null; ) {
            if (r.return === null || zl(r.return))
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
    function qo(r) {
      if (An) {
        e: {
          for (var i = r.return; i !== null; ) {
            if (zl(i))
              break e;
            i = i.return;
          }
          throw Error(v(160));
        }
        var o = i;
        switch (o.tag) {
          case 5:
            i = o.stateNode, o.flags & 32 && (St(i), o.flags &= -33), o = Dl(r), kr(r, o, i);
            break;
          case 3:
          case 4:
            i = o.stateNode.containerInfo, o = Dl(r), Fs(r, o, i);
            break;
          default:
            throw Error(v(161));
        }
      }
    }
    function Fs(r, i, o) {
      var f = r.tag;
      if (f === 5 || f === 6)
        r = r.stateNode, i ? Xe(o, r, i) : cs(o, r);
      else if (f !== 4 && (r = r.child, r !== null))
        for (Fs(r, i, o), r = r.sibling; r !== null; )
          Fs(r, i, o), r = r.sibling;
    }
    function kr(r, i, o) {
      var f = r.tag;
      if (f === 5 || f === 6)
        r = r.stateNode, i ? De(o, r, i) : ua(o, r);
      else if (f !== 4 && (r = r.child, r !== null))
        for (kr(r, i, o), r = r.sibling; r !== null; )
          kr(r, i, o), r = r.sibling;
    }
    function Cn(r, i, o) {
      for (var f = i, p = !1, x, D; ; ) {
        if (!p) {
          p = f.return;
          e:
            for (; ; ) {
              if (p === null)
                throw Error(v(160));
              switch (x = p.stateNode, p.tag) {
                case 5:
                  D = !1;
                  break e;
                case 3:
                  x = x.containerInfo, D = !0;
                  break e;
                case 4:
                  x = x.containerInfo, D = !0;
                  break e;
              }
              p = p.return;
            }
          p = !0;
        }
        if (f.tag === 5 || f.tag === 6)
          ff(r, f, o), D ? It(x, f.stateNode) : Ne(x, f.stateNode);
        else if (f.tag === 18)
          D ? cu(x, f.stateNode) : tl(x, f.stateNode);
        else if (f.tag === 4) {
          if (f.child !== null) {
            x = f.stateNode.containerInfo, D = !0, f.child.return = f, f = f.child;
            continue;
          }
        } else if (cf(r, f, o), f.child !== null) {
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
    function df(r, i) {
      if (An) {
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
              var p = i.type, x = i.updateQueue;
              i.updateQueue = null, x !== null && oe(o, x, p, r, f, i);
            }
            return;
          case 6:
            if (i.stateNode === null)
              throw Error(v(162));
            o = i.memoizedProps, Na(i.stateNode, r !== null ? r.memoizedProps : o, o);
            return;
          case 3:
            Vt && r !== null && r.memoizedState.isDehydrated && el(i.stateNode.containerInfo);
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
          Vt && r !== null && r.memoizedState.isDehydrated && el(i.stateNode.containerInfo);
          break;
        case 22:
        case 23:
          return;
      }
      e:
        if (cr) {
          switch (i.tag) {
            case 1:
            case 5:
            case 6:
              break e;
            case 3:
            case 4:
              i = i.stateNode, gt(i.containerInfo, i.pendingChildren);
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
        o === null && (o = r.stateNode = new py()), i.forEach(function(f) {
          var p = Bs.bind(null, r, f);
          o.has(f) || (o.add(f), f.then(p, p));
        });
      }
    }
    function _p(r, i) {
      for (ze = i; ze !== null; ) {
        i = ze;
        var o = i.deletions;
        if (o !== null)
          for (var f = 0; f < o.length; f++) {
            var p = o[f];
            try {
              var x = r;
              An ? Cn(x, p, i) : ff(x, p, i);
              var D = p.alternate;
              D !== null && (D.return = null), p.return = null;
            } catch (Pe) {
              At(p, i, Pe);
            }
          }
        if (o = i.child, i.subtreeFlags & 12854 && o !== null)
          o.return = i, ze = o;
        else
          for (; ze !== null; ) {
            i = ze;
            try {
              var L = i.flags;
              if (L & 32 && An && St(i.stateNode), L & 512) {
                var K = i.alternate;
                if (K !== null) {
                  var he = K.ref;
                  he !== null && (typeof he == "function" ? he(null) : he.current = null);
                }
              }
              if (L & 8192)
                switch (i.tag) {
                  case 13:
                    if (i.memoizedState !== null) {
                      var Ee = i.alternate;
                      (Ee === null || Ee.memoizedState === null) && (xf = Jt());
                    }
                    break;
                  case 22:
                    var $e = i.memoizedState !== null, Ge = i.alternate, Qt = Ge !== null && Ge.memoizedState !== null;
                    if (o = i, An) {
                      e:
                        if (f = o, p = $e, x = null, An)
                          for (var Ie = f; ; ) {
                            if (Ie.tag === 5) {
                              if (x === null) {
                                x = Ie;
                                var Pn = Ie.stateNode;
                                p ? Ve(Pn) : Fn(Ie.stateNode, Ie.memoizedProps);
                              }
                            } else if (Ie.tag === 6) {
                              if (x === null) {
                                var rr = Ie.stateNode;
                                p ? Se(rr) : Ut(rr, Ie.memoizedProps);
                              }
                            } else if ((Ie.tag !== 22 && Ie.tag !== 23 || Ie.memoizedState === null || Ie === f) && Ie.child !== null) {
                              Ie.child.return = Ie, Ie = Ie.child;
                              continue;
                            }
                            if (Ie === f)
                              break;
                            for (; Ie.sibling === null; ) {
                              if (Ie.return === null || Ie.return === f)
                                break e;
                              x === Ie && (x = null), Ie = Ie.return;
                            }
                            x === Ie && (x = null), Ie.sibling.return = Ie.return, Ie = Ie.sibling;
                          }
                    }
                    if ($e && !Qt && o.mode & 1) {
                      ze = o;
                      for (var Y = o.child; Y !== null; ) {
                        for (o = ze = Y; ze !== null; ) {
                          f = ze;
                          var P = f.child;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                              As(4, f, f.return);
                              break;
                            case 1:
                              wl(f, f.return);
                              var X = f.stateNode;
                              if (typeof X.componentWillUnmount == "function") {
                                var we = f.return;
                                try {
                                  X.props = f.memoizedProps, X.state = f.memoizedState, X.componentWillUnmount();
                                } catch (Pe) {
                                  At(
                                    f,
                                    we,
                                    Pe
                                  );
                                }
                              }
                              break;
                            case 5:
                              wl(f, f.return);
                              break;
                            case 22:
                              if (f.memoizedState !== null) {
                                Dd(o);
                                continue;
                              }
                          }
                          P !== null ? (P.return = f, ze = P) : Dd(o);
                        }
                        Y = Y.sibling;
                      }
                    }
                }
              switch (L & 4102) {
                case 2:
                  qo(i), i.flags &= -3;
                  break;
                case 6:
                  qo(i), i.flags &= -3, df(i.alternate, i);
                  break;
                case 4096:
                  i.flags &= -4097;
                  break;
                case 4100:
                  i.flags &= -4097, df(i.alternate, i);
                  break;
                case 4:
                  df(i.alternate, i);
              }
            } catch (Pe) {
              At(i, i.return, Pe);
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, ze = o;
              break;
            }
            ze = i.return;
          }
      }
    }
    function zd(r, i, o) {
      ze = r, hf(r);
    }
    function hf(r, i, o) {
      for (var f = (r.mode & 1) !== 0; ze !== null; ) {
        var p = ze, x = p.child;
        if (p.tag === 22 && f) {
          var D = p.memoizedState !== null || zs;
          if (!D) {
            var L = p.alternate, K = L !== null && L.memoizedState !== null || Ya;
            L = zs;
            var he = Ya;
            if (zs = D, (Ya = K) && !he)
              for (ze = p; ze !== null; )
                D = ze, K = D.child, D.tag === 22 && D.memoizedState !== null ? Ad(p) : K !== null ? (K.return = D, ze = K) : Ad(p);
            for (; x !== null; )
              ze = x, hf(x), x = x.sibling;
            ze = p, zs = L, Ya = he;
          }
          pf(r);
        } else
          p.subtreeFlags & 8772 && x !== null ? (x.return = p, ze = x) : pf(r);
      }
    }
    function pf(r) {
      for (; ze !== null; ) {
        var i = ze;
        if (i.flags & 8772) {
          var o = i.alternate;
          try {
            if (i.flags & 8772)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Ya || Ns(5, i);
                  break;
                case 1:
                  var f = i.stateNode;
                  if (i.flags & 4 && !Ya)
                    if (o === null)
                      f.componentDidMount();
                    else {
                      var p = i.elementType === i.type ? o.memoizedProps : F(i.type, o.memoizedProps);
                      f.componentDidUpdate(p, o.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                    }
                  var x = i.updateQueue;
                  x !== null && yu(i, x, f);
                  break;
                case 3:
                  var D = i.updateQueue;
                  if (D !== null) {
                    if (o = null, i.child !== null)
                      switch (i.child.tag) {
                        case 5:
                          o = Ye(i.child.stateNode);
                          break;
                        case 1:
                          o = i.child.stateNode;
                      }
                    yu(i, D, o);
                  }
                  break;
                case 5:
                  var L = i.stateNode;
                  o === null && i.flags & 4 && G(L, i.type, i.memoizedProps, i);
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (Vt && i.memoizedState === null) {
                    var K = i.alternate;
                    if (K !== null) {
                      var he = K.memoizedState;
                      if (he !== null) {
                        var Ee = he.dehydrated;
                        Ee !== null && yi(Ee);
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
            Ya || i.flags & 512 && of(i);
          } catch ($e) {
            At(i, i.return, $e);
          }
        }
        if (i === r) {
          ze = null;
          break;
        }
        if (o = i.sibling, o !== null) {
          o.return = i.return, ze = o;
          break;
        }
        ze = i.return;
      }
    }
    function Dd(r) {
      for (; ze !== null; ) {
        var i = ze;
        if (i === r) {
          ze = null;
          break;
        }
        var o = i.sibling;
        if (o !== null) {
          o.return = i.return, ze = o;
          break;
        }
        ze = i.return;
      }
    }
    function Ad(r) {
      for (; ze !== null; ) {
        var i = ze;
        try {
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              var o = i.return;
              try {
                Ns(4, i);
              } catch (K) {
                At(i, o, K);
              }
              break;
            case 1:
              var f = i.stateNode;
              if (typeof f.componentDidMount == "function") {
                var p = i.return;
                try {
                  f.componentDidMount();
                } catch (K) {
                  At(i, p, K);
                }
              }
              var x = i.return;
              try {
                of(i);
              } catch (K) {
                At(i, x, K);
              }
              break;
            case 5:
              var D = i.return;
              try {
                of(i);
              } catch (K) {
                At(i, D, K);
              }
          }
        } catch (K) {
          At(i, i.return, K);
        }
        if (i === r) {
          ze = null;
          break;
        }
        var L = i.sibling;
        if (L !== null) {
          L.return = i.return, ze = L;
          break;
        }
        ze = i.return;
      }
    }
    var Wo = 0, cn = 1, Os = 2, Nu = 3, xa = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Al = Symbol.for;
      Wo = Al("selector.component"), cn = Al("selector.has_pseudo_class"), Os = Al("selector.role"), Nu = Al("selector.test_id"), xa = Al("selector.text");
    }
    function mf(r) {
      var i = Nn(r);
      if (i != null) {
        if (typeof i.memoizedProps["data-testname"] != "string")
          throw Error(v(364));
        return i;
      }
      if (r = dr(r), r === null)
        throw Error(v(362));
      return r.stateNode.current;
    }
    function vf(r, i) {
      switch (i.$$typeof) {
        case Wo:
          if (r.type === i.value)
            return !0;
          break;
        case cn:
          e: {
            i = i.value, r = [r, 0];
            for (var o = 0; o < r.length; ) {
              var f = r[o++], p = r[o++], x = i[p];
              if (f.tag !== 5 || !hr(f)) {
                for (; x != null && vf(f, x); )
                  p++, x = i[p];
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
        case Os:
          if (r.tag === 5 && la(r.stateNode, i.value))
            return !0;
          break;
        case xa:
          if ((r.tag === 5 || r.tag === 6) && (r = Ft(r), r !== null && 0 <= r.indexOf(i.value)))
            return !0;
          break;
        case Nu:
          if (r.tag === 5 && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === i.value.toLowerCase()))
            return !0;
          break;
        default:
          throw Error(v(365));
      }
      return !1;
    }
    function Wa(r) {
      switch (r.$$typeof) {
        case Wo:
          return "<" + ($(r.value) || "Unknown") + ">";
        case cn:
          return ":has(" + (Wa(r) || "") + ")";
        case Os:
          return '[role="' + r.value + '"]';
        case xa:
          return '"' + r.value + '"';
        case Nu:
          return '[data-testname="' + r.value + '"]';
        default:
          throw Error(v(365));
      }
    }
    function kn(r, i) {
      var o = [];
      r = [r, 0];
      for (var f = 0; f < r.length; ) {
        var p = r[f++], x = r[f++], D = i[x];
        if (p.tag !== 5 || !hr(p)) {
          for (; D != null && vf(p, D); )
            x++, D = i[x];
          if (x === i.length)
            o.push(p);
          else
            for (p = p.child; p !== null; )
              r.push(p, x), p = p.sibling;
        }
      }
      return o;
    }
    function Ce(r, i) {
      if (!sn)
        throw Error(v(363));
      r = mf(r), r = kn(r, i), i = [], r = Array.from(r);
      for (var o = 0; o < r.length; ) {
        var f = r[o++];
        if (f.tag === 5)
          hr(f) || i.push(f.stateNode);
        else
          for (f = f.child; f !== null; )
            r.push(f), f = f.sibling;
      }
      return i;
    }
    var Qi = Math.ceil, gr = T.ReactCurrentDispatcher, yf = T.ReactCurrentOwner, fn = T.ReactCurrentBatchConfig, ft = 0, xn = null, Sn = null, Tt = 0, Hr = 0, Nl = Nr(0), wn = 0, Fl = null, Gi = 0, Sa = 0, gf = 0, Fu = null, xr = null, xf = 0, Sf = 1 / 0;
    function Ol() {
      Sf = Jt() + 500;
    }
    var Ou = !1, Qo = null, Qa = null, Go = !1, Ga = null, Xo = 0, Uu = 0, _f = null, Lu = -1, Zo = 0;
    function Zn() {
      return ft & 6 ? Jt() : Lu !== -1 ? Lu : Lu = Jt();
    }
    function Xa(r) {
      return r.mode & 1 ? ft & 2 && Tt !== 0 ? Tt & -Tt : Yc.transition !== null ? (Zo === 0 && (r = ca, ca <<= 1, !(ca & 4194240) && (ca = 64), Zo = r), Zo) : (r = Rt, r !== 0 ? r : fr()) : 1;
    }
    function si(r, i, o) {
      if (50 < Uu)
        throw Uu = 0, _f = null, Error(v(185));
      var f = Ul(r, i);
      return f === null ? null : (vs(f, i, o), (!(ft & 2) || f !== xn) && (f === xn && (!(ft & 2) && (Sa |= i), wn === 4 && _a(f, Tt)), Sr(f, o), i === 1 && ft === 0 && !(r.mode & 1) && (Ol(), ja && $r())), f);
    }
    function Ul(r, i) {
      r.lanes |= i;
      var o = r.alternate;
      for (o !== null && (o.lanes |= i), o = r, r = r.return; r !== null; )
        r.childLanes |= i, o = r.alternate, o !== null && (o.childLanes |= i), o = r, r = r.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    function Sr(r, i) {
      var o = r.callbackNode;
      Jr(r, i);
      var f = da(r, r === xn ? Tt : 0);
      if (f === 0)
        o !== null && hu(o), r.callbackNode = null, r.callbackPriority = 0;
      else if (i = f & -f, r.callbackPriority !== i) {
        if (o != null && hu(o), i === 1)
          r.tag === 0 ? qc(Nd.bind(null, r)) : gs(Nd.bind(null, r)), vi ? er(function() {
            ft === 0 && $r();
          }) : xi(pu, $r), o = null;
        else {
          switch (du(f)) {
            case 1:
              o = pu;
              break;
            case 4:
              o = Ic;
              break;
            case 16:
              o = mu;
              break;
            case 536870912:
              o = vo;
              break;
            default:
              o = mu;
          }
          o = Bl(o, Pr.bind(null, r));
        }
        r.callbackPriority = i, r.callbackNode = o;
      }
    }
    function Pr(r, i) {
      if (Lu = -1, Zo = 0, ft & 6)
        throw Error(v(327));
      var o = r.callbackNode;
      if (Ls() && r.callbackNode !== o)
        return null;
      var f = da(r, r === xn ? Tt : 0);
      if (f === 0)
        return null;
      if (f & 30 || f & r.expiredLanes || i)
        i = Us(r, f);
      else {
        i = f;
        var p = ft;
        ft |= 2;
        var x = Od();
        (xn !== r || Tt !== i) && (Ol(), Za(r, i));
        do
          try {
            Ud();
            break;
          } catch (L) {
            Fd(r, L);
          }
        while (!0);
        Ue(), gr.current = x, ft = p, Sn !== null ? i = 0 : (xn = null, Tt = 0, i = wn);
      }
      if (i !== 0) {
        if (i === 2 && (p = Rn(r), p !== 0 && (f = p, i = Ci(r, p))), i === 1)
          throw o = Fl, Za(r, 0), _a(r, f), Sr(r, Jt()), o;
        if (i === 6)
          _a(r, f);
        else {
          if (p = r.current.alternate, !(f & 30) && !Ef(p) && (i = Us(r, f), i === 2 && (x = Rn(r), x !== 0 && (f = x, i = Ci(r, x))), i === 1))
            throw o = Fl, Za(r, 0), _a(r, f), Sr(r, Jt()), o;
          switch (r.finishedWork = p, r.finishedLanes = f, i) {
            case 0:
            case 1:
              throw Error(v(345));
            case 2:
              wi(r, xr);
              break;
            case 3:
              if (_a(r, f), (f & 130023424) === f && (i = xf + 500 - Jt(), 10 < i)) {
                if (da(r, 0) !== 0)
                  break;
                if (p = r.suspendedLanes, (p & f) !== f) {
                  Zn(), r.pingedLanes |= r.suspendedLanes & p;
                  break;
                }
                r.timeoutHandle = tt(wi.bind(null, r, xr), i);
                break;
              }
              wi(r, xr);
              break;
            case 4:
              if (_a(r, f), (f & 4194240) === f)
                break;
              for (i = r.eventTimes, p = -1; 0 < f; ) {
                var D = 31 - mr(f);
                x = 1 << D, D = i[D], D > p && (p = D), f &= ~x;
              }
              if (f = p, f = Jt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Qi(f / 1960)) - f, 10 < f) {
                r.timeoutHandle = tt(wi.bind(null, r, xr), f);
                break;
              }
              wi(r, xr);
              break;
            case 5:
              wi(r, xr);
              break;
            default:
              throw Error(v(329));
          }
        }
      }
      return Sr(r, Jt()), r.callbackNode === o ? Pr.bind(null, r) : null;
    }
    function Ci(r, i) {
      var o = Fu;
      return r.current.memoizedState.isDehydrated && (Za(r, i).flags |= 256), r = Us(r, i), r !== 2 && (i = xr, xr = o, i !== null && Bu(i)), r;
    }
    function Bu(r) {
      xr === null ? xr = r : xr.push.apply(xr, r);
    }
    function Ef(r) {
      for (var i = r; ; ) {
        if (i.flags & 16384) {
          var o = i.updateQueue;
          if (o !== null && (o = o.stores, o !== null))
            for (var f = 0; f < o.length; f++) {
              var p = o[f], x = p.getSnapshot;
              p = p.value;
              try {
                if (!Or(x(), p))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
        if (o = i.child, i.subtreeFlags & 16384 && o !== null)
          o.return = i, i = o;
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
    function _a(r, i) {
      for (i &= ~gf, i &= ~Sa, r.suspendedLanes |= i, r.pingedLanes &= ~i, r = r.expirationTimes; 0 < i; ) {
        var o = 31 - mr(i), f = 1 << o;
        r[o] = -1, i &= ~f;
      }
    }
    function Nd(r) {
      if (ft & 6)
        throw Error(v(327));
      Ls();
      var i = da(r, 0);
      if (!(i & 1))
        return Sr(r, Jt()), null;
      var o = Us(r, i);
      if (r.tag !== 0 && o === 2) {
        var f = Rn(r);
        f !== 0 && (i = f, o = Ci(r, f));
      }
      if (o === 1)
        throw o = Fl, Za(r, 0), _a(r, i), Sr(r, Jt()), o;
      if (o === 6)
        throw Error(v(345));
      return r.finishedWork = r.current.alternate, r.finishedLanes = i, wi(r, xr), Sr(r, Jt()), null;
    }
    function Rf(r) {
      Ga !== null && Ga.tag === 0 && !(ft & 6) && Ls();
      var i = ft;
      ft |= 1;
      var o = fn.transition, f = Rt;
      try {
        if (fn.transition = null, Rt = 1, r)
          return r();
      } finally {
        Rt = f, fn.transition = o, ft = i, !(ft & 6) && $r();
      }
    }
    function li() {
      Hr = Nl.current, Lt(Nl);
    }
    function Za(r, i) {
      r.finishedWork = null, r.finishedLanes = 0;
      var o = r.timeoutHandle;
      if (o !== ot && (r.timeoutHandle = ot, at(o)), Sn !== null)
        for (o = Sn.return; o !== null; ) {
          var f = o;
          switch (Gc(f), f.tag) {
            case 1:
              f = f.type.childContextTypes, f != null && ka();
              break;
            case 3:
              Es(), Lt(kt), Lt(En), ji();
              break;
            case 5:
              Br(f);
              break;
            case 4:
              Es();
              break;
            case 13:
              Lt($t);
              break;
            case 19:
              Lt($t);
              break;
            case 10:
              ct(f.type._context);
              break;
            case 22:
            case 23:
              li();
          }
          o = o.return;
        }
      if (xn = r, Sn = r = _r(r.current, null), Tt = Hr = i, wn = 0, Fl = null, gf = Sa = Gi = 0, xr = Fu = null, _t !== null) {
        for (i = 0; i < _t.length; i++)
          if (o = _t[i], f = o.interleaved, f !== null) {
            o.interleaved = null;
            var p = f.next, x = o.pending;
            if (x !== null) {
              var D = x.next;
              x.next = p, f.next = D;
            }
            o.pending = f;
          }
        _t = null;
      }
      return r;
    }
    function Fd(r, i) {
      do {
        var o = Sn;
        try {
          if (Ue(), bn.current = El, pl) {
            for (var f = bt.memoizedState; f !== null; ) {
              var p = f.queue;
              p !== null && (p.pending = null), f = f.next;
            }
            pl = !1;
          }
          if (Ia = 0, Wt = tn = bt = null, Vi = !1, ml = 0, yf.current = null, o === null || o.return === null) {
            wn = 1, Fl = i, Sn = null;
            break;
          }
          e: {
            var x = r, D = o.return, L = o, K = i;
            if (i = Tt, L.flags |= 32768, K !== null && typeof K == "object" && typeof K.then == "function") {
              var he = K, Ee = L, $e = Ee.tag;
              if (!(Ee.mode & 1) && ($e === 0 || $e === 11 || $e === 15)) {
                var Ge = Ee.alternate;
                Ge ? (Ee.updateQueue = Ge.updateQueue, Ee.memoizedState = Ge.memoizedState, Ee.lanes = Ge.lanes) : (Ee.updateQueue = null, Ee.memoizedState = null);
              }
              var Qt = Ms(D);
              if (Qt !== null) {
                Qt.flags &= -257, Bo(Qt, D, L, x, i), Qt.mode & 1 && zu(x, he, i), i = Qt, K = he;
                var Ie = i.updateQueue;
                if (Ie === null) {
                  var Pn = /* @__PURE__ */ new Set();
                  Pn.add(K), i.updateQueue = Pn;
                } else
                  Ie.add(K);
                break e;
              } else {
                if (!(i & 1)) {
                  zu(x, he, i), bf();
                  break e;
                }
                K = Error(v(426));
              }
            } else if (Kt && L.mode & 1) {
              var rr = Ms(D);
              if (rr !== null) {
                !(rr.flags & 65536) && (rr.flags |= 256), Bo(rr, D, L, x, i), xu(K);
                break e;
              }
            }
            x = K, wn !== 4 && (wn = 2), Fu === null ? Fu = [x] : Fu.push(x), K = Cu(K, L), L = D;
            do {
              switch (L.tag) {
                case 3:
                  L.flags |= 65536, i &= -i, L.lanes |= i;
                  var Y = Uo(L, K, i);
                  vu(L, Y);
                  break e;
                case 1:
                  x = K;
                  var P = L.type, X = L.stateNode;
                  if (!(L.flags & 128) && (typeof P.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && (Qa === null || !Qa.has(X)))) {
                    L.flags |= 65536, i &= -i, L.lanes |= i;
                    var we = Lo(L, x, i);
                    vu(L, we);
                    break e;
                  }
              }
              L = L.return;
            } while (L !== null);
          }
          jr(o);
        } catch (Pe) {
          i = Pe, Sn === o && o !== null && (Sn = o = o.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Od() {
      var r = gr.current;
      return gr.current = El, r === null ? El : r;
    }
    function bf() {
      (wn === 0 || wn === 3 || wn === 2) && (wn = 4), xn === null || !(Gi & 268435455) && !(Sa & 268435455) || _a(xn, Tt);
    }
    function Us(r, i) {
      var o = ft;
      ft |= 2;
      var f = Od();
      xn === r && Tt === i || Za(r, i);
      do
        try {
          Ep();
          break;
        } catch (p) {
          Fd(r, p);
        }
      while (!0);
      if (Ue(), ft = o, gr.current = f, Sn !== null)
        throw Error(v(261));
      return xn = null, Tt = 0, wn;
    }
    function Ep() {
      for (; Sn !== null; )
        Tf(Sn);
    }
    function Ud() {
      for (; Sn !== null && !Vc(); )
        Tf(Sn);
    }
    function Tf(r) {
      var i = Ll(r.alternate, r, Hr);
      r.memoizedProps = r.pendingProps, i === null ? jr(r) : Sn = i, yf.current = null;
    }
    function jr(r) {
      var i = r;
      do {
        var o = i.alternate;
        if (r = i.return, i.flags & 32768) {
          if (o = st(o, i), o !== null) {
            o.flags &= 32767, Sn = o;
            return;
          }
          if (r !== null)
            r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
          else {
            wn = 6, Sn = null;
            return;
          }
        } else if (o = Sp(o, i, Hr), o !== null) {
          Sn = o;
          return;
        }
        if (i = i.sibling, i !== null) {
          Sn = i;
          return;
        }
        Sn = i = r;
      } while (i !== null);
      wn === 0 && (wn = 5);
    }
    function wi(r, i) {
      var o = Rt, f = fn.transition;
      try {
        fn.transition = null, Rt = 1, Rp(r, i, o);
      } finally {
        fn.transition = f, Rt = o;
      }
      return null;
    }
    function Rp(r, i, o) {
      do
        Ls();
      while (Ga !== null);
      if (ft & 6)
        throw Error(v(327));
      var f = r.finishedWork, p = r.finishedLanes;
      if (f === null)
        return null;
      if (r.finishedWork = null, r.finishedLanes = 0, f === r.current)
        throw Error(v(177));
      r.callbackNode = null, r.callbackPriority = 0;
      var x = f.lanes | f.childLanes;
      if (jc(r, x), r === xn && (Sn = xn = null, Tt = 0), !(f.subtreeFlags & 2064) && !(f.flags & 2064) || Go || (Go = !0, Bl(mu, function() {
        return Ls(), null;
      })), x = (f.flags & 15990) !== 0, f.subtreeFlags & 15990 || x) {
        x = fn.transition, fn.transition = null;
        var D = Rt;
        Rt = 1;
        var L = ft;
        ft |= 4, yf.current = null, wd(r, f), _p(r, f), ee(r.containerInfo), r.current = f, zd(f), mo(), ft = L, Rt = D, fn.transition = x;
      } else
        r.current = f;
      if (Go && (Go = !1, Ga = r, Xo = p), x = r.pendingLanes, x === 0 && (Qa = null), Pa(f.stateNode), Sr(r, Jt()), i !== null)
        for (o = r.onRecoverableError, f = 0; f < i.length; f++)
          o(i[f]);
      if (Ou)
        throw Ou = !1, r = Qo, Qo = null, r;
      return Xo & 1 && r.tag !== 0 && Ls(), x = r.pendingLanes, x & 1 ? r === _f ? Uu++ : (Uu = 0, _f = r) : Uu = 0, $r(), null;
    }
    function Ls() {
      if (Ga !== null) {
        var r = du(Xo), i = fn.transition, o = Rt;
        try {
          if (fn.transition = null, Rt = 16 > r ? 16 : r, Ga === null)
            var f = !1;
          else {
            if (r = Ga, Ga = null, Xo = 0, ft & 6)
              throw Error(v(331));
            var p = ft;
            for (ft |= 4, ze = r.current; ze !== null; ) {
              var x = ze, D = x.child;
              if (ze.flags & 16) {
                var L = x.deletions;
                if (L !== null) {
                  for (var K = 0; K < L.length; K++) {
                    var he = L[K];
                    for (ze = he; ze !== null; ) {
                      var Ee = ze;
                      switch (Ee.tag) {
                        case 0:
                        case 11:
                        case 15:
                          As(8, Ee, x);
                      }
                      var $e = Ee.child;
                      if ($e !== null)
                        $e.return = Ee, ze = $e;
                      else
                        for (; ze !== null; ) {
                          Ee = ze;
                          var Ge = Ee.sibling, Qt = Ee.return;
                          if (Mi(Ee), Ee === he) {
                            ze = null;
                            break;
                          }
                          if (Ge !== null) {
                            Ge.return = Qt, ze = Ge;
                            break;
                          }
                          ze = Qt;
                        }
                    }
                  }
                  var Ie = x.alternate;
                  if (Ie !== null) {
                    var Pn = Ie.child;
                    if (Pn !== null) {
                      Ie.child = null;
                      do {
                        var rr = Pn.sibling;
                        Pn.sibling = null, Pn = rr;
                      } while (Pn !== null);
                    }
                  }
                  ze = x;
                }
              }
              if (x.subtreeFlags & 2064 && D !== null)
                D.return = x, ze = D;
              else
                e:
                  for (; ze !== null; ) {
                    if (x = ze, x.flags & 2048)
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          As(9, x, x.return);
                      }
                    var Y = x.sibling;
                    if (Y !== null) {
                      Y.return = x.return, ze = Y;
                      break e;
                    }
                    ze = x.return;
                  }
            }
            var P = r.current;
            for (ze = P; ze !== null; ) {
              D = ze;
              var X = D.child;
              if (D.subtreeFlags & 2064 && X !== null)
                X.return = D, ze = X;
              else
                e:
                  for (D = P; ze !== null; ) {
                    if (L = ze, L.flags & 2048)
                      try {
                        switch (L.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Ns(9, L);
                        }
                      } catch (Pe) {
                        At(L, L.return, Pe);
                      }
                    if (L === D) {
                      ze = null;
                      break e;
                    }
                    var we = L.sibling;
                    if (we !== null) {
                      we.return = L.return, ze = we;
                      break e;
                    }
                    ze = L.return;
                  }
            }
            if (ft = p, $r(), Kr && typeof Kr.onPostCommitFiberRoot == "function")
              try {
                Kr.onPostCommitFiberRoot(ha, r);
              } catch {
              }
            f = !0;
          }
          return f;
        } finally {
          Rt = o, fn.transition = i;
        }
      }
      return !1;
    }
    function Hn(r, i, o) {
      i = Cu(o, i), i = Uo(r, i, 1), Si(r, i), i = Zn(), r = Ul(r, 1), r !== null && (vs(r, 1, i), Sr(r, i));
    }
    function At(r, i, o) {
      if (r.tag === 3)
        Hn(r, r, o);
      else
        for (; i !== null; ) {
          if (i.tag === 3) {
            Hn(i, r, o);
            break;
          } else if (i.tag === 1) {
            var f = i.stateNode;
            if (typeof i.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Qa === null || !Qa.has(f))) {
              r = Cu(o, r), r = Lo(i, r, 1), Si(i, r), r = Zn(), i = Ul(i, 1), i !== null && (vs(i, 1, r), Sr(i, r));
              break;
            }
          }
          i = i.return;
        }
    }
    function Xi(r, i, o) {
      var f = r.pingCache;
      f !== null && f.delete(i), i = Zn(), r.pingedLanes |= r.suspendedLanes & o, xn === r && (Tt & o) === o && (wn === 4 || wn === 3 && (Tt & 130023424) === Tt && 500 > Jt() - xf ? Za(r, 0) : gf |= o), Sr(r, i);
    }
    function ui(r, i) {
      i === 0 && (r.mode & 1 ? (i = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : i = 1);
      var o = Zn();
      r = Ul(r, i), r !== null && (vs(r, i, o), Sr(r, o));
    }
    function bp(r) {
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
    var Ll;
    Ll = function(r, i, o) {
      if (r !== null)
        if (r.memoizedProps !== i.pendingProps || kt.current)
          Xn = !0;
        else {
          if (!(r.lanes & o) && !(i.flags & 128))
            return Xn = !1, Cl(r, i, o);
          Xn = !!(r.flags & 131072);
        }
      else
        Xn = !1, Kt && i.flags & 1048576 && xd(i, Eo, i.index);
      switch (i.lanes = 0, i.tag) {
        case 2:
          var f = i.type;
          r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps;
          var p = Ba(i, En.current);
          zt(i, o), p = yl(null, i, f, r, p, o);
          var x = bu();
          return i.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Gn(f) ? (x = !0, Hi(i)) : x = !1, i.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ln(i), p.updater = So, i.stateNode = p, p._reactInternals = i, Wc(i, f, r, o), i = lf(null, i, f, !0, x, o)) : (i.tag = 0, Kt && x && Qc(i), On(null, i, p, o), i = i.child), i;
        case 16:
          f = i.elementType;
          e: {
            switch (r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps, p = f._init, f = p(f._payload), i.type = f, p = i.tag = Hu(f), r = F(f, r), p) {
              case 0:
                i = sf(null, i, f, r, o);
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
                i = Au(null, i, f, F(f.type, r), o);
                break e;
            }
            throw Error(v(306, f, ""));
          }
          return i;
        case 0:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), sf(r, i, f, p, o);
        case 1:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), Ho(r, i, f, p, o);
        case 3:
          e: {
            if (Po(i), r === null)
              throw Error(v(387));
            f = i.pendingProps, x = i.memoizedState, p = x.element, Pi(r, i), ul(i, f, null, o);
            var D = i.memoizedState;
            if (f = D.element, Vt && x.isDehydrated)
              if (x = {
                element: f,
                isDehydrated: !1,
                cache: D.cache,
                transitions: D.transitions
              }, i.updateQueue.baseState = x, i.memoizedState = x, i.flags & 256) {
                p = Error(v(423)), i = uf(r, i, f, o, p);
                break e;
              } else if (f !== p) {
                p = Error(v(424)), i = uf(r, i, f, o, p);
                break e;
              } else
                for (Vt && (Bn = Oa(i.stateNode.containerInfo), Lr = i, Kt = !0, ni = null, fl = !1), o = Mo(i, null, f, o), i.child = o; o; )
                  o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (dl(), f === p) {
                i = on(r, i, o);
                break e;
              }
              On(r, i, f, o);
            }
            i = i.child;
          }
          return i;
        case 5:
          return Ru(i), r === null && bo(i), f = i.type, p = i.pendingProps, x = r !== null ? r.memoizedProps : null, D = p.children, je(f, p) ? D = null : x !== null && je(f, x) && (i.flags |= 32), Rd(r, i), On(r, i, D, o), i.child;
        case 6:
          return r === null && bo(i), null;
        case 13:
          return bd(r, i, o);
        case 4:
          return Co(i, i.stateNode.containerInfo), f = i.pendingProps, r === null ? i.child = hl(i, null, f, o) : On(r, i, f, o), i.child;
        case 11:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), Tl(r, i, f, p, o);
        case 7:
          return On(r, i, i.pendingProps, o), i.child;
        case 8:
          return On(r, i, i.pendingProps.children, o), i.child;
        case 12:
          return On(r, i, i.pendingProps.children, o), i.child;
        case 10:
          e: {
            if (f = i.type._context, p = i.pendingProps, x = i.memoizedProps, D = p.value, nt(i, f, D), x !== null)
              if (Or(x.value, D)) {
                if (x.children === p.children && !kt.current) {
                  i = on(r, i, o);
                  break e;
                }
              } else
                for (x = i.child, x !== null && (x.return = i); x !== null; ) {
                  var L = x.dependencies;
                  if (L !== null) {
                    D = x.child;
                    for (var K = L.firstContext; K !== null; ) {
                      if (K.context === f) {
                        if (x.tag === 1) {
                          K = Ur(-1, o & -o), K.tag = 2;
                          var he = x.updateQueue;
                          if (he !== null) {
                            he = he.shared;
                            var Ee = he.pending;
                            Ee === null ? K.next = K : (K.next = Ee.next, Ee.next = K), he.pending = K;
                          }
                        }
                        x.lanes |= o, K = x.alternate, K !== null && (K.lanes |= o), wt(x.return, o, i), L.lanes |= o;
                        break;
                      }
                      K = K.next;
                    }
                  } else if (x.tag === 10)
                    D = x.type === i.type ? null : x.child;
                  else if (x.tag === 18) {
                    if (D = x.return, D === null)
                      throw Error(v(341));
                    D.lanes |= o, L = D.alternate, L !== null && (L.lanes |= o), wt(D, o, i), D = x.sibling;
                  } else
                    D = x.child;
                  if (D !== null)
                    D.return = x;
                  else
                    for (D = x; D !== null; ) {
                      if (D === i) {
                        D = null;
                        break;
                      }
                      if (x = D.sibling, x !== null) {
                        x.return = D.return, D = x;
                        break;
                      }
                      D = D.return;
                    }
                  x = D;
                }
            On(r, i, p.children, o), i = i.child;
          }
          return i;
        case 9:
          return p = i.type, f = i.pendingProps.children, zt(i, o), p = mt(p), f = f(p), i.flags |= 1, On(r, i, f, o), i.child;
        case 14:
          return f = i.type, p = F(f, i.pendingProps), p = F(f.type, p), Au(r, i, f, p, o);
        case 15:
          return _d(r, i, i.type, i.pendingProps, o);
        case 17:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, Gn(f) ? (r = !0, Hi(i)) : r = !1, zt(i, o), yd(i, f, p), Wc(i, f, p, o), lf(null, i, f, !0, r, o);
        case 19:
          return Io(r, i, o);
        case 22:
          return Ed(r, i, o);
      }
      throw Error(v(156, i.tag));
    };
    function Bl(r, i) {
      return xi(r, i);
    }
    function ku(r, i, o, f) {
      this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Jn(r, i, o, f) {
      return new ku(r, i, o, f);
    }
    function ks(r) {
      return r = r.prototype, !(!r || !r.isReactComponent);
    }
    function Hu(r) {
      if (typeof r == "function")
        return ks(r) ? 1 : 0;
      if (r != null) {
        if (r = r.$$typeof, r === B)
          return 11;
        if (r === se)
          return 14;
      }
      return 2;
    }
    function _r(r, i) {
      var o = r.alternate;
      return o === null ? (o = Jn(r.tag, i, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = i, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 14680064, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, i = r.dependencies, o.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o;
    }
    function Hs(r, i, o, f, p, x) {
      var D = 2;
      if (f = r, typeof r == "function")
        ks(r) && (D = 1);
      else if (typeof r == "string")
        D = 5;
      else
        e:
          switch (r) {
            case E:
              return Ja(o.children, p, x, i);
            case _:
              D = 8, p |= 8;
              break;
            case C:
              return r = Jn(12, o, i, p | 2), r.elementType = C, r.lanes = x, r;
            case k:
              return r = Jn(13, o, i, p), r.elementType = k, r.lanes = x, r;
            case V:
              return r = Jn(19, o, i, p), r.elementType = V, r.lanes = x, r;
            case fe:
              return Pu(o, p, x, i);
            default:
              if (typeof r == "object" && r !== null)
                switch (r.$$typeof) {
                  case z:
                    D = 10;
                    break e;
                  case A:
                    D = 9;
                    break e;
                  case B:
                    D = 11;
                    break e;
                  case se:
                    D = 14;
                    break e;
                  case ie:
                    D = 16, f = null;
                    break e;
                }
              throw Error(v(130, r == null ? r : typeof r, ""));
          }
      return i = Jn(D, o, i, p), i.elementType = r, i.type = f, i.lanes = x, i;
    }
    function Ja(r, i, o, f) {
      return r = Jn(7, r, f, i), r.lanes = o, r;
    }
    function Pu(r, i, o, f) {
      return r = Jn(22, r, f, i), r.elementType = fe, r.lanes = o, r.stateNode = {}, r;
    }
    function Jo(r, i, o) {
      return r = Jn(6, r, null, i), r.lanes = o, r;
    }
    function ju(r, i, o) {
      return i = Jn(4, r.children !== null ? r.children : [], r.key, i), i.lanes = o, i.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, i;
    }
    function Tp(r, i, o, f, p) {
      this.tag = i, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ot, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = il(0), this.expirationTimes = il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = il(0), this.identifierPrefix = f, this.onRecoverableError = p, Vt && (this.mutableSourceEagerHydrationData = null);
    }
    function Ld(r, i, o, f, p, x, D, L, K) {
      return r = new Tp(r, i, o, L, K), i === 1 ? (i = 1, x === !0 && (i |= 8)) : i = 0, x = Jn(3, null, null, i), r.current = x, x.stateNode = r, x.memoizedState = { element: f, isDehydrated: o, cache: null, transitions: null }, ln(x), r;
    }
    function oi(r) {
      if (!r)
        return Xr;
      r = r._reactInternals;
      e: {
        if (et(r) !== r || r.tag !== 1)
          throw Error(v(170));
        var i = r;
        do {
          switch (i.tag) {
            case 3:
              i = i.stateNode.context;
              break e;
            case 1:
              if (Gn(i.type)) {
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
        if (Gn(o))
          return ms(r, o, i);
      }
      return i;
    }
    function Vu(r) {
      var i = r._reactInternals;
      if (i === void 0)
        throw typeof r.render == "function" ? Error(v(188)) : (r = Object.keys(r).join(","), Error(v(268, r)));
      return r = Re(i), r === null ? null : r.stateNode;
    }
    function kl(r, i) {
      if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
        var o = r.retryLane;
        r.retryLane = o !== 0 && o < i ? o : i;
      }
    }
    function Hl(r, i) {
      kl(r, i), (r = r.alternate) && kl(r, i);
    }
    function Pl(r) {
      return r = Re(r), r === null ? null : r.stateNode;
    }
    function Mf() {
      return null;
    }
    return a.attemptContinuousHydration = function(r) {
      if (r.tag === 13) {
        var i = Zn();
        si(r, 134217728, i), Hl(r, 134217728);
      }
    }, a.attemptHydrationAtCurrentPriority = function(r) {
      if (r.tag === 13) {
        var i = Zn(), o = Xa(r);
        si(r, o, i), Hl(r, o);
      }
    }, a.attemptSynchronousHydration = function(r) {
      switch (r.tag) {
        case 3:
          var i = r.stateNode;
          if (i.current.memoizedState.isDehydrated) {
            var o = gi(i.pendingLanes);
            o !== 0 && (al(i, o | 1), Sr(i, Jt()), !(ft & 6) && (Ol(), $r()));
          }
          break;
        case 13:
          var f = Zn();
          Rf(function() {
            return si(r, 1, f);
          }), Hl(r, 1);
      }
    }, a.batchedUpdates = function(r, i) {
      var o = ft;
      ft |= 1;
      try {
        return r(i);
      } finally {
        ft = o, ft === 0 && (Ol(), ja && $r());
      }
    }, a.createComponentSelector = function(r) {
      return { $$typeof: Wo, value: r };
    }, a.createContainer = function(r, i, o, f, p, x, D) {
      return Ld(r, i, !1, null, o, f, p, x, D);
    }, a.createHasPseudoClassSelector = function(r) {
      return { $$typeof: cn, value: r };
    }, a.createHydrationContainer = function(r, i, o, f, p, x, D, L, K) {
      return r = Ld(o, f, !0, r, p, x, D, L, K), r.context = oi(null), o = r.current, f = Zn(), p = Xa(o), x = Ur(f, p), x.callback = i ?? null, Si(o, x), r.current.lanes = p, vs(r, p, f), Sr(r, f), r;
    }, a.createPortal = function(r, i, o) {
      var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: y, key: f == null ? null : "" + f, children: r, containerInfo: i, implementation: o };
    }, a.createRoleSelector = function(r) {
      return { $$typeof: Os, value: r };
    }, a.createTestNameSelector = function(r) {
      return { $$typeof: Nu, value: r };
    }, a.createTextSelector = function(r) {
      return { $$typeof: xa, value: r };
    }, a.deferredUpdates = function(r) {
      var i = Rt, o = fn.transition;
      try {
        return fn.transition = null, Rt = 16, r();
      } finally {
        Rt = i, fn.transition = o;
      }
    }, a.discreteUpdates = function(r, i, o, f, p) {
      var x = Rt, D = fn.transition;
      try {
        return fn.transition = null, Rt = 1, r(i, o, f, p);
      } finally {
        Rt = x, fn.transition = D, ft === 0 && Ol();
      }
    }, a.findAllNodes = Ce, a.findBoundingRects = function(r, i) {
      if (!sn)
        throw Error(v(363));
      i = Ce(r, i), r = [];
      for (var o = 0; o < i.length; o++)
        r.push(Wn(i[o]));
      for (i = r.length - 1; 0 < i; i--) {
        o = r[i];
        for (var f = o.x, p = f + o.width, x = o.y, D = x + o.height, L = i - 1; 0 <= L; L--)
          if (i !== L) {
            var K = r[L], he = K.x, Ee = he + K.width, $e = K.y, Ge = $e + K.height;
            if (f >= he && x >= $e && p <= Ee && D <= Ge) {
              r.splice(i, 1);
              break;
            } else if (f !== he || o.width !== K.width || Ge < x || $e > D) {
              if (!(x !== $e || o.height !== K.height || Ee < f || he > p)) {
                he > f && (K.width += he - f, K.x = f), Ee < p && (K.width = p - he), r.splice(i, 1);
                break;
              }
            } else {
              $e > x && (K.height += $e - x, K.y = x), Ge < D && (K.height = D - $e), r.splice(i, 1);
              break;
            }
          }
      }
      return r;
    }, a.findHostInstance = Vu, a.findHostInstanceWithNoPortals = function(r) {
      return r = Me(r), r = r !== null ? Le(r) : null, r === null ? null : r.stateNode;
    }, a.findHostInstanceWithWarning = function(r) {
      return Vu(r);
    }, a.flushControlled = function(r) {
      var i = ft;
      ft |= 1;
      var o = fn.transition, f = Rt;
      try {
        fn.transition = null, Rt = 1, r();
      } finally {
        Rt = f, fn.transition = o, ft = i, ft === 0 && (Ol(), $r());
      }
    }, a.flushPassiveEffects = Ls, a.flushSync = Rf, a.focusWithin = function(r, i) {
      if (!sn)
        throw Error(v(363));
      for (r = mf(r), i = kn(r, i), i = Array.from(i), r = 0; r < i.length; ) {
        var o = i[r++];
        if (!hr(o)) {
          if (o.tag === 5 && zr(o.stateNode))
            return !0;
          for (o = o.child; o !== null; )
            i.push(o), o = o.sibling;
        }
      }
      return !1;
    }, a.getCurrentUpdatePriority = function() {
      return Rt;
    }, a.getFindAllNodesFailureDescription = function(r, i) {
      if (!sn)
        throw Error(v(363));
      var o = 0, f = [];
      r = [mf(r), 0];
      for (var p = 0; p < r.length; ) {
        var x = r[p++], D = r[p++], L = i[D];
        if ((x.tag !== 5 || !hr(x)) && (vf(x, L) && (f.push(Wa(L)), D++, D > o && (o = D)), D < i.length))
          for (x = x.child; x !== null; )
            r.push(x, D), x = x.sibling;
      }
      if (o < i.length) {
        for (r = []; o < i.length; o++)
          r.push(Wa(i[o]));
        return `findAllNodes was able to match part of the selector:
  ` + (f.join(" > ") + `

No matching component was found for:
  `) + r.join(" > ");
      }
      return null;
    }, a.getPublicRootInstance = function(r) {
      if (r = r.current, !r.child)
        return null;
      switch (r.child.tag) {
        case 5:
          return Ye(r.child.stateNode);
        default:
          return r.child.stateNode;
      }
    }, a.injectIntoDevTools = function(r) {
      if (r = { bundleType: r.bundleType, version: r.version, rendererPackageName: r.rendererPackageName, rendererConfig: r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: T.ReactCurrentDispatcher, findHostInstanceByFiber: Pl, findFiberByHostInstance: r.findFiberByHostInstance || Mf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        r = !1;
      else {
        var i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (i.isDisabled || !i.supportsFiber)
          r = !0;
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
      if (!sn)
        throw Error(v(363));
      r = Ce(r, i);
      var p = Qr(r, o, f).disconnect;
      return { disconnect: function() {
        p();
      } };
    }, a.registerMutableSourceForHydration = function(r, i) {
      var o = i._getVersion;
      o = o(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, o] : r.mutableSourceEagerHydrationData.push(i, o);
    }, a.runWithPriority = function(r, i) {
      var o = Rt;
      try {
        return Rt = r, i();
      } finally {
        Rt = o;
      }
    }, a.shouldError = function() {
      return null;
    }, a.shouldSuspend = function() {
      return !1;
    }, a.updateContainer = function(r, i, o, f) {
      var p = i.current, x = Zn(), D = Xa(p);
      return o = oi(o), i.context === null ? i.context = o : i.pendingContext = o, i = Ur(x, D), i.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (i.callback = f), Si(p, i), r = si(p, D, x), r !== null && ll(r, p, D), D;
    }, a;
  }), Wv;
}
var Qv = { exports: {} };
/**
 * @license React
 * react-reconciler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function bb() {
  return t1 || (t1 = 1, process.env.NODE_ENV !== "production" && (Qv.exports = function(t) {
    var a = {}, u = gn, d = T1(), m = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = !1;
    function T(e) {
      v = e;
    }
    function b(e) {
      if (!v) {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          s[l - 1] = arguments[l];
        E("warn", e, s);
      }
    }
    function y(e) {
      if (!v) {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          s[l - 1] = arguments[l];
        E("error", e, s);
      }
    }
    function E(e, n, s) {
      {
        var l = m.ReactDebugCurrentFrame, c = l.getStackAddendum();
        c !== "" && (n += "%s", s = s.concat([c]));
        var h = s.map(function(g) {
          return String(g);
        });
        h.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var _ = Object.assign;
    function C(e) {
      return e._reactInternals;
    }
    function z(e, n) {
      e._reactInternals = n;
    }
    var A = !1, B = !1, k = !1, V = !1, se = !1, ie = !1, fe = !0, ve = !0, be = !0, $ = 0, ue = 1, et = 2, ye = 3, Me = 4, Re = 5, ge = 6, Le = 7, Ze = 8, Ye = 9, xe = 10, H = 11, ae = 12, ee = 13, O = 14, j = 15, Be = 16, ke = 17, je = 18, He = 19, tt = 21, at = 22, ot = 23, Gt = 24, An = 25, cr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), $n = Symbol.for("react.strict_mode"), fr = Symbol.for("react.profiler"), Yn = Symbol.for("react.provider"), vi = Symbol.for("react.context"), er = Symbol.for("react.forward_ref"), sn = Symbol.for("react.suspense"), dr = Symbol.for("react.suspense_list"), Wn = Symbol.for("react.memo"), Ft = Symbol.for("react.lazy"), hr = Symbol.for("react.scope"), la = Symbol.for("react.debug_trace_mode"), zr = Symbol.for("react.offscreen"), Qr = Symbol.for("react.legacy_hidden"), ua = Symbol.for("react.cache"), cs = Symbol.for("react.tracing_marker"), Na = Symbol.iterator, G = "@@iterator";
    function oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = Na && e[Na] || e[G];
      return typeof n == "function" ? n : null;
    }
    function De(e, n, s) {
      var l = e.displayName;
      if (l)
        return l;
      var c = n.displayName || n.name || "";
      return c !== "" ? s + "(" + c + ")" : s;
    }
    function Xe(e) {
      return e.displayName || "Context";
    }
    function Ne(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Nn:
          return "Fragment";
        case Vt:
          return "Portal";
        case fr:
          return "Profiler";
        case $n:
          return "StrictMode";
        case sn:
          return "Suspense";
        case dr:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case vi:
            var n = e;
            return Xe(n) + ".Consumer";
          case Yn:
            var s = e;
            return Xe(s._context) + ".Provider";
          case er:
            return De(e, e.render, "ForwardRef");
          case Wn:
            var l = e.displayName || null;
            return l !== null ? l : Ne(e.type) || "Memo";
          case Ft: {
            var c = e, h = c._payload, g = c._init;
            try {
              return Ne(g(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function It(e, n, s) {
      var l = n.displayName || n.name || "";
      return e.displayName || (l !== "" ? s + "(" + l + ")" : s);
    }
    function St(e) {
      return e.displayName || "Context";
    }
    function Ve(e) {
      var n = e.tag, s = e.type;
      switch (n) {
        case Gt:
          return "Cache";
        case Ye:
          var l = s;
          return St(l) + ".Consumer";
        case xe:
          var c = s;
          return St(c._context) + ".Provider";
        case je:
          return "DehydratedFragment";
        case H:
          return It(s, s.render, "ForwardRef");
        case Le:
          return "Fragment";
        case Re:
          return s;
        case Me:
          return "Portal";
        case ye:
          return "Root";
        case ge:
          return "Text";
        case Be:
          return Ne(s);
        case Ze:
          return s === $n ? "StrictMode" : "Mode";
        case at:
          return "Offscreen";
        case ae:
          return "Profiler";
        case tt:
          return "Scope";
        case ee:
          return "Suspense";
        case He:
          return "SuspenseList";
        case An:
          return "TracingMarker";
        case ue:
        case $:
        case ke:
        case et:
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
    var Se = (
      /*                      */
      0
    ), Fn = (
      /*                */
      1
    ), Ut = (
      /*                    */
      2
    ), pt = (
      /*                       */
      4
    ), Ks = (
      /*           */
      Ut | pt
    ), pr = (
      /*                */
      16
    ), Fa = (
      /*                 */
      32
    ), uu = (
      /*                     */
      64
    ), gt = (
      /*                   */
      128
    ), Gr = (
      /*            */
      256
    ), Ui = (
      /*                          */
      512
    ), Dr = (
      /*                     */
      1024
    ), tr = (
      /*                      */
      2048
    ), nr = (
      /*                    */
      4096
    ), oo = (
      /*           */
      nr | pt
    ), Li = (
      /*                   */
      8192
    ), $s = (
      /*             */
      16384
    ), fs = tr | pt | uu | Ui | Dr | $s, co = (
      /*               */
      32767
    ), Oa = (
      /*                   */
      32768
    ), Qn = (
      /*                */
      65536
    ), _n = (
      /* */
      131072
    ), fo = (
      /*                       */
      1048576
    ), ou = (
      /*                    */
      2097152
    ), oa = (
      /*                 */
      4194304
    ), el = (
      /*                */
      8388608
    ), yi = (
      /*               */
      16777216
    ), tl = (
      /*              */
      33554432
    ), cu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      pt | Dr | 0
    ), ds = Ut | pt | pr | Fa | Ui | nr | Li, hs = pt | uu | Ui | Li, Ua = tr | pr, Ar = oa | el | ou, ps = m.ReactCurrentOwner;
    function La(e) {
      var n = e, s = e;
      if (e.alternate)
        for (; n.return; )
          n = n.return;
      else {
        var l = n;
        do
          n = l, (n.flags & (Ut | nr)) !== Se && (s = n.return), l = n.return;
        while (l);
      }
      return n.tag === ye ? s : null;
    }
    function fu(e) {
      return La(e) === e;
    }
    function Pc(e) {
      {
        var n = ps.current;
        if (n !== null && n.tag === ue) {
          var s = n, l = s.stateNode;
          l._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ve(s) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var c = C(e);
      return c ? La(c) === c : !1;
    }
    function Bi(e) {
      if (La(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ki(e) {
      var n = e.alternate;
      if (!n) {
        var s = La(e);
        if (s === null)
          throw new Error("Unable to find node on an unmounted component.");
        return s !== e ? null : e;
      }
      for (var l = e, c = n; ; ) {
        var h = l.return;
        if (h === null)
          break;
        var g = h.alternate;
        if (g === null) {
          var M = h.return;
          if (M !== null) {
            l = c = M;
            continue;
          }
          break;
        }
        if (h.child === g.child) {
          for (var w = h.child; w; ) {
            if (w === l)
              return Bi(h), e;
            if (w === c)
              return Bi(h), n;
            w = w.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== c.return)
          l = h, c = g;
        else {
          for (var N = !1, U = h.child; U; ) {
            if (U === l) {
              N = !0, l = h, c = g;
              break;
            }
            if (U === c) {
              N = !0, c = h, l = g;
              break;
            }
            U = U.sibling;
          }
          if (!N) {
            for (U = g.child; U; ) {
              if (U === l) {
                N = !0, l = g, c = h;
                break;
              }
              if (U === c) {
                N = !0, c = g, l = h;
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
      if (l.tag !== ye)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : n;
    }
    function Nr(e) {
      var n = ki(e);
      return n !== null ? Lt(n) : null;
    }
    function Lt(e) {
      if (e.tag === Re || e.tag === ge)
        return e;
      for (var n = e.child; n !== null; ) {
        var s = Lt(n);
        if (s !== null)
          return s;
        n = n.sibling;
      }
      return null;
    }
    function Bt(e) {
      var n = ki(e);
      return n !== null ? Xr(n) : null;
    }
    function Xr(e) {
      if (e.tag === Re || e.tag === ge)
        return e;
      for (var n = e.child; n !== null; ) {
        if (n.tag !== Me) {
          var s = Xr(n);
          if (s !== null)
            return s;
        }
        n = n.sibling;
      }
      return null;
    }
    var En = Array.isArray;
    function kt(e) {
      return En(e);
    }
    var Zr = t.getPublicInstance, Ba = t.getRootHostContext, Gn = t.getChildHostContext, ka = t.prepareForCommit, nl = t.resetAfterCommit, ms = t.createInstance, Hi = t.appendInitialChild, Ha = t.finalizeInitialChildren, mr = t.prepareUpdate, rl = t.shouldSetTextContent, ho = t.createTextInstance, po = t.scheduleTimeout, ca = t.cancelTimeout, fa = t.noTimeout;
    t.now;
    var gi = t.isPrimaryRenderer, da = t.warnsIfNotActing, Fr = t.supportsMutation, Jr = t.supportsPersistence, Rn = t.supportsHydration, il = t.getInstanceFromNode;
    t.beforeActiveInstanceBlur, t.afterActiveInstanceBlur;
    var vs = t.preparePortalMount;
    t.preparePortalMount, t.getInstanceFromScope;
    var jc = t.getCurrentEventPriority, al = t.detachDeletedInstance, Rt = t.supportsMicrotasks, du = t.scheduleMicrotask, xi = t.supportsTestSelectors, hu = t.findFiberRoot, Vc = t.getBoundingRect, mo = t.getTextContent, Jt = t.isHiddenSubtree, pu = t.matchAccessibilityRole, Ic = t.setFocusIfFocusable, mu = t.setupIntersectionObserver, vo = t.appendChild, ha = t.appendChildToContainer, Kr = t.commitTextUpdate, Pa = t.commitMount, yo = t.commitUpdate, Or = t.insertBefore, vr = t.insertInContainerBefore, ja = t.removeChild, ys = t.removeChildFromContainer, gs = t.resetTextContent, qc = t.hideInstance, $r = t.hideTextInstance, Yc = t.unhideInstance, sl = t.unhideTextInstance, R = t.clearContainer, F = t.cloneInstance, W = t.createContainerChildSet, J = t.appendChildToContainerChildSet, pe = t.finalizeContainerChildren, We = t.replaceContainerChildren;
    t.getOffscreenContainerType;
    var Ue = t.getOffscreenContainerProps, nt = t.cloneHiddenInstance, ct = t.cloneHiddenTextInstance, wt = t.canHydrateInstance, zt = t.canHydrateTextInstance, mt = t.canHydrateSuspenseInstance, _t = t.isSuspenseInstancePending, Dt = t.isSuspenseInstanceFallback, ln = t.registerSuspenseInstanceRetry, Pi = t.getNextHydratableSibling, Ur = t.getFirstHydratableChild, Si = t.getFirstHydratableChildWithinContainer, ll = t.getFirstHydratableChildWithinSuspenseInstance, vu = t.hydrateInstance, ul = t.hydrateTextInstance, yu = t.hydrateSuspenseInstance, go = t.getNextHydratableInstanceAfterSuspenseInstance, xo = t.commitHydratedContainer, So = t.commitHydratedSuspenseInstance, vd = t.clearSuspenseBoundary, yd = t.clearSuspenseBoundaryFromContainer, gd = t.shouldDeleteUnhydratedTailInstances, Wc = t.didNotMatchHydratedContainerTextInstance, ol = t.didNotMatchHydratedTextInstance, cl = t.didNotHydrateInstanceWithinContainer, _o = t.didNotHydrateInstanceWithinSuspenseInstance, Eo = t.didNotHydrateInstance, ei = t.didNotFindHydratableInstanceWithinContainer, ti = t.didNotFindHydratableTextInstanceWithinContainer, xs = t.didNotFindHydratableSuspenseInstanceWithinContainer, pa = t.didNotFindHydratableInstanceWithinSuspenseInstance, ma = t.didNotFindHydratableTextInstanceWithinSuspenseInstance, Ss = t.didNotFindHydratableSuspenseInstanceWithinSuspenseInstance, xd = t.didNotFindHydratableInstance, Qc = t.didNotFindHydratableTextInstance, Gc = t.didNotFindHydratableSuspenseInstance, Lr = t.errorHydratingContainer, Bn = 0, Kt, fl, ni, Xc, Zc, Ro, bo;
    function Jc() {
    }
    Jc.__reactDisabledLog = !0;
    function gu() {
      {
        if (Bn === 0) {
          Kt = console.log, fl = console.info, ni = console.warn, Xc = console.error, Zc = console.group, Ro = console.groupCollapsed, bo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Jc,
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
        Bn++;
      }
    }
    function dl() {
      {
        if (Bn--, Bn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, e, {
              value: Kt
            }),
            info: _({}, e, {
              value: fl
            }),
            warn: _({}, e, {
              value: ni
            }),
            error: _({}, e, {
              value: Xc
            }),
            group: _({}, e, {
              value: Zc
            }),
            groupCollapsed: _({}, e, {
              value: Ro
            }),
            groupEnd: _({}, e, {
              value: bo
            })
          });
        }
        Bn < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xu = m.ReactCurrentDispatcher, _s;
    function _i(e, n, s) {
      {
        if (_s === void 0)
          try {
            throw Error();
          } catch (c) {
            var l = c.stack.trim().match(/\n( *(at )?)/);
            _s = l && l[1] || "";
          }
        return `
` + _s + e;
      }
    }
    var To = !1, Su;
    {
      var hl = typeof WeakMap == "function" ? WeakMap : Map;
      Su = new hl();
    }
    function Mo(e, n) {
      if (!e || To)
        return "";
      {
        var s = Su.get(e);
        if (s !== void 0)
          return s;
      }
      var l;
      To = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = xu.current, xu.current = null, gu();
      try {
        if (n) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (de) {
              l = de;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (de) {
              l = de;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            l = de;
          }
          e();
        }
      } catch (de) {
        if (de && l && typeof de.stack == "string") {
          for (var M = de.stack.split(`
`), w = l.stack.split(`
`), N = M.length - 1, U = w.length - 1; N >= 1 && U >= 0 && M[N] !== w[U]; )
            U--;
          for (; N >= 1 && U >= 0; N--, U--)
            if (M[N] !== w[U]) {
              if (N !== 1 || U !== 1)
                do
                  if (N--, U--, U < 0 || M[N] !== w[U]) {
                    var I = `
` + M[N].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && Su.set(e, I), I;
                  }
                while (N >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        To = !1, xu.current = h, dl(), Error.prepareStackTrace = c;
      }
      var Z = e ? e.displayName || e.name : "", te = Z ? _i(Z) : "";
      return typeof e == "function" && Su.set(e, te), te;
    }
    function _u(e, n, s) {
      return Mo(e, !0);
    }
    function yr(e, n, s) {
      return Mo(e, !1);
    }
    function Eu(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function Va(e, n, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Mo(e, Eu(e));
      if (typeof e == "string")
        return _i(e);
      switch (e) {
        case sn:
          return _i("Suspense");
        case dr:
          return _i("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case er:
            return yr(e.render);
          case Wn:
            return Va(e.type, n, s);
          case Ft: {
            var l = e, c = l._payload, h = l._init;
            try {
              return Va(h(c), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Ei = Object.prototype.hasOwnProperty, Co = {}, Es = m.ReactDebugCurrentFrame;
    function Ru(e) {
      if (e) {
        var n = e._owner, s = Va(e.type, e._source, n ? n.type : null);
        Es.setExtraStackFrame(s);
      } else
        Es.setExtraStackFrame(null);
    }
    function Br(e, n, s, l, c) {
      {
        var h = Function.call.bind(Ei);
        for (var g in e)
          if (h(e, g)) {
            var M = void 0;
            try {
              if (typeof e[g] != "function") {
                var w = Error((l || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              M = e[g](n, g, l, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              M = N;
            }
            M && !(M instanceof Error) && (Ru(c), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", s, g, typeof M), Ru(null)), M instanceof Error && !(M.message in Co) && (Co[M.message] = !0, Ru(c), y("Failed %s type: %s", s, M.message), Ru(null));
          }
      }
    }
    var $t = [], Rs;
    Rs = [];
    var Ri = -1;
    function ji(e) {
      return {
        current: e
      };
    }
    function bn(e, n) {
      if (Ri < 0) {
        y("Unexpected pop.");
        return;
      }
      n !== Rs[Ri] && y("Unexpected Fiber popped."), e.current = $t[Ri], $t[Ri] = null, Rs[Ri] = null, Ri--;
    }
    function qt(e, n, s) {
      Ri++, $t[Ri] = e.current, Rs[Ri] = s, e.current = n;
    }
    var Ia;
    Ia = {};
    var bt = {};
    Object.freeze(bt);
    var tn = ji(bt), Wt = ji(!1), pl = bt;
    function Vi(e, n, s) {
      return s && ri(n) ? pl : tn.current;
    }
    function ml(e, n, s) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = n, l.__reactInternalMemoizedMaskedChildContext = s;
      }
    }
    function vl(e, n) {
      {
        var s = e.type, l = s.contextTypes;
        if (!l)
          return bt;
        var c = e.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === n)
          return c.__reactInternalMemoizedMaskedChildContext;
        var h = {};
        for (var g in l)
          h[g] = n[g];
        {
          var M = Ve(e) || "Unknown";
          Br(l, h, "context", M);
        }
        return c && ml(e, n, h), h;
      }
    }
    function Tn() {
      return Wt.current;
    }
    function ri(e) {
      {
        var n = e.childContextTypes;
        return n != null;
      }
    }
    function yl(e) {
      bn(Wt, e), bn(tn, e);
    }
    function bu(e) {
      bn(Wt, e), bn(tn, e);
    }
    function Ii(e, n, s) {
      {
        if (tn.current !== bt)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        qt(tn, n, e), qt(Wt, s, e);
      }
    }
    function bi(e, n, s) {
      {
        var l = e.stateNode, c = n.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var h = Ve(e) || "Unknown";
            Ia[h] || (Ia[h] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", h, h));
          }
          return s;
        }
        var g = l.getChildContext();
        for (var M in g)
          if (!(M in c))
            throw new Error((Ve(e) || "Unknown") + '.getChildContext(): key "' + M + '" is not defined in childContextTypes.');
        {
          var w = Ve(e) || "Unknown";
          Br(c, g, "child context", w);
        }
        return _({}, s, g);
      }
    }
    function qi(e) {
      {
        var n = e.stateNode, s = n && n.__reactInternalMemoizedMergedChildContext || bt;
        return pl = tn.current, qt(tn, s, e), qt(Wt, Wt.current, e), !0;
      }
    }
    function Tu(e, n, s) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (s) {
          var c = bi(e, n, pl);
          l.__reactInternalMemoizedMergedChildContext = c, bn(Wt, e), bn(tn, e), qt(tn, c, e), qt(Wt, s, e);
        } else
          bn(Wt, e), qt(Wt, s, e);
      }
    }
    function wo(e) {
      {
        if (!fu(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var n = e;
        do {
          switch (n.tag) {
            case ye:
              return n.stateNode.context;
            case ue: {
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
    var bs = 0, Kc = 1, rt = (
      /*                         */
      0
    ), Ht = (
      /*                 */
      1
    ), Ct = (
      /*                    */
      2
    ), un = (
      /*               */
      8
    ), ii = (
      /*              */
      16
    ), gl = Math.clz32 ? Math.clz32 : Do, Sd = Math.log, zo = Math.LN2;
    function Do(e) {
      var n = e >>> 0;
      return n === 0 ? 32 : 31 - (Sd(n) / zo | 0) | 0;
    }
    var Mu = 31, ce = (
      /*                        */
      0
    ), Mn = (
      /*                          */
      0
    ), vt = (
      /*                        */
      1
    ), Ts = (
      /*    */
      2
    ), va = (
      /*            */
      4
    ), ya = (
      /*            */
      8
    ), Yi = (
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
    ), $c = (
      /*                        */
      128
    ), ef = (
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
    ), El = (
      /*                        */
      8192
    ), tf = (
      /*                        */
      16384
    ), nf = (
      /*                       */
      32768
    ), rf = (
      /*                       */
      65536
    ), Cu = (
      /*                       */
      131072
    ), wu = (
      /*                       */
      262144
    ), af = (
      /*                       */
      524288
    ), Uo = (
      /*                       */
      1048576
    ), Lo = (
      /*                       */
      2097152
    ), zu = (
      /*                            */
      130023424
    ), Ms = (
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
    ), Cs = (
      /*                             */
      67108864
    ), Rl = Ms, qa = (
      /*          */
      134217728
    ), Du = (
      /*                                 */
      268435455
    ), bl = (
      /*               */
      268435456
    ), Ti = (
      /*                       */
      536870912
    ), Yt = (
      /*                   */
      1073741824
    );
    function Sp(e) {
      {
        if (e & vt)
          return "Sync";
        if (e & Ts)
          return "InputContinuousHydration";
        if (e & va)
          return "InputContinuous";
        if (e & ya)
          return "DefaultHydration";
        if (e & Yi)
          return "Default";
        if (e & xl)
          return "TransitionHydration";
        if (e & Sl)
          return "Transition";
        if (e & zu)
          return "Retry";
        if (e & qa)
          return "SelectiveHydration";
        if (e & bl)
          return "IdleHydration";
        if (e & Ti)
          return "Idle";
        if (e & Yt)
          return "Offscreen";
      }
    }
    var Xt = -1, Xn = _l, On = Ms;
    function Tl(e) {
      switch (Wi(e)) {
        case vt:
          return vt;
        case Ts:
          return Ts;
        case va:
          return va;
        case ya:
          return ya;
        case Yi:
          return Yi;
        case xl:
          return xl;
        case _l:
        case $c:
        case ef:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case El:
        case tf:
        case nf:
        case rf:
        case Cu:
        case wu:
        case af:
        case Uo:
        case Lo:
          return e & Sl;
        case Ms:
        case Bo:
        case ai:
        case ko:
        case Cs:
          return e & zu;
        case qa:
          return qa;
        case bl:
          return bl;
        case Ti:
          return Ti;
        case Yt:
          return Yt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Au(e, n) {
      var s = e.pendingLanes;
      if (s === ce)
        return ce;
      var l = ce, c = e.suspendedLanes, h = e.pingedLanes, g = s & Du;
      if (g !== ce) {
        var M = g & ~c;
        if (M !== ce)
          l = Tl(M);
        else {
          var w = g & h;
          w !== ce && (l = Tl(w));
        }
      } else {
        var N = s & ~c;
        N !== ce ? l = Tl(N) : h !== ce && (l = Tl(h));
      }
      if (l === ce)
        return ce;
      if (n !== ce && n !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (n & c) === ce) {
        var U = Wi(l), I = Wi(n);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          U >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          U === Yi && (I & Sl) !== ce
        )
          return n;
      }
      (l & va) !== ce && (l |= s & Yi);
      var Z = e.entangledLanes;
      if (Z !== ce)
        for (var te = e.entanglements, de = l & Z; de > 0; ) {
          var me = ga(de), Qe = 1 << me;
          l |= te[me], de &= ~Qe;
        }
      return l;
    }
    function _d(e, n) {
      for (var s = e.eventTimes, l = Xt; n > 0; ) {
        var c = ga(n), h = 1 << c, g = s[c];
        g > l && (l = g), n &= ~h;
      }
      return l;
    }
    function Ed(e, n) {
      switch (e) {
        case vt:
        case Ts:
        case va:
          return n + 250;
        case ya:
        case Yi:
        case xl:
        case _l:
        case $c:
        case ef:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case El:
        case tf:
        case nf:
        case rf:
        case Cu:
        case wu:
        case af:
        case Uo:
        case Lo:
          return n + 5e3;
        case Ms:
        case Bo:
        case ai:
        case ko:
        case Cs:
          return Xt;
        case qa:
        case bl:
        case Ti:
        case Yt:
          return Xt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Rd(e, n) {
      for (var s = e.pendingLanes, l = e.suspendedLanes, c = e.pingedLanes, h = e.expirationTimes, g = s; g > 0; ) {
        var M = ga(g), w = 1 << M, N = h[M];
        N === Xt ? ((w & l) === ce || (w & c) !== ce) && (h[M] = Ed(w, n)) : N <= n && (e.expiredLanes |= w), g &= ~w;
      }
    }
    function sf(e) {
      return Tl(e.pendingLanes);
    }
    function Ho(e) {
      var n = e.pendingLanes & ~Yt;
      return n !== ce ? n : n & Yt ? Yt : ce;
    }
    function lf(e) {
      return (e & vt) !== ce;
    }
    function Po(e) {
      return (e & Du) !== ce;
    }
    function uf(e) {
      return (e & zu) === e;
    }
    function jo(e) {
      return (e & Sl) === e;
    }
    function ws(e, n) {
      var s = Ts | va | ya | Yi;
      return (n & s) !== ce;
    }
    function bd(e, n) {
      return (n & e.expiredLanes) !== ce;
    }
    function Vo(e) {
      return (e & Sl) !== 0;
    }
    function Td() {
      var e = Xn;
      return Xn <<= 1, Xn & Sl || (Xn = _l), e;
    }
    function Md() {
      var e = On;
      return On <<= 1, On & zu || (On = Ms), e;
    }
    function Wi(e) {
      return e & -e;
    }
    function Ml(e) {
      return Wi(e);
    }
    function ga(e) {
      return 31 - gl(e);
    }
    function Io(e) {
      return ga(e);
    }
    function on(e, n) {
      return (e & n) !== ce;
    }
    function Cl(e, n) {
      return (e & n) === n;
    }
    function st(e, n) {
      return e | n;
    }
    function zs(e, n) {
      return e & ~n;
    }
    function Ya(e, n) {
      return e & n;
    }
    function py(e) {
      return e;
    }
    function ze(e, n) {
      return e !== Mn && e < n ? e : n;
    }
    function wl(e) {
      for (var n = [], s = 0; s < Mu; s++)
        n.push(e);
      return n;
    }
    function Ds(e, n, s) {
      e.pendingLanes |= n, n !== Ti && (e.suspendedLanes = ce, e.pingedLanes = ce);
      var l = e.eventTimes, c = Io(n);
      l[c] = s;
    }
    function Cd(e, n) {
      e.suspendedLanes |= n, e.pingedLanes &= ~n;
      for (var s = e.expirationTimes, l = n; l > 0; ) {
        var c = ga(l), h = 1 << c;
        s[c] = Xt, l &= ~h;
      }
    }
    function wd(e, n, s) {
      e.pingedLanes |= e.suspendedLanes & n;
    }
    function As(e, n) {
      var s = e.pendingLanes & ~n;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n;
      for (var l = e.entanglements, c = e.eventTimes, h = e.expirationTimes, g = s; g > 0; ) {
        var M = ga(g), w = 1 << M;
        l[M] = ce, c[M] = Xt, h[M] = Xt, g &= ~w;
      }
    }
    function Ns(e, n) {
      for (var s = e.entangledLanes |= n, l = e.entanglements, c = s; c; ) {
        var h = ga(c), g = 1 << h;
        // Is this one of the newly entangled lanes?
        g & n | // Is this lane transitively entangled with the newly entangled lanes?
        l[h] & n && (l[h] |= n), c &= ~g;
      }
    }
    function of(e, n) {
      var s = Wi(n), l;
      switch (s) {
        case va:
          l = Ts;
          break;
        case Yi:
          l = ya;
          break;
        case _l:
        case $c:
        case ef:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case El:
        case tf:
        case nf:
        case rf:
        case Cu:
        case wu:
        case af:
        case Uo:
        case Lo:
        case Ms:
        case Bo:
        case ai:
        case ko:
        case Cs:
          l = xl;
          break;
        case Ti:
          l = bl;
          break;
        default:
          l = Mn;
          break;
      }
      return (l & (e.suspendedLanes | n)) !== Mn ? Mn : l;
    }
    function cf(e, n, s) {
      if (gr)
        for (var l = e.pendingUpdatersLaneMap; s > 0; ) {
          var c = Io(s), h = 1 << c, g = l[c];
          g.add(n), s &= ~h;
        }
    }
    function ff(e, n) {
      if (gr)
        for (var s = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; n > 0; ) {
          var c = Io(n), h = 1 << c, g = s[c];
          g.size > 0 && (g.forEach(function(M) {
            var w = M.alternate;
            (w === null || !l.has(w)) && l.add(M);
          }), g.clear()), n &= ~h;
        }
    }
    var Mi = vt, zl = va, Dl = Yi, qo = Ti, Fs = Mn;
    function kr() {
      return Fs;
    }
    function Cn(e) {
      Fs = e;
    }
    function df(e, n) {
      var s = Fs;
      try {
        return Fs = e, n();
      } finally {
        Fs = s;
      }
    }
    function Yo(e, n) {
      return e !== 0 && e < n ? e : n;
    }
    function _p(e, n) {
      return e > n ? e : n;
    }
    function zd(e, n) {
      return e !== 0 && e < n;
    }
    function hf(e) {
      var n = Wi(e);
      return zd(Mi, n) ? zd(zl, n) ? Po(n) ? Dl : qo : zl : Mi;
    }
    var pf = d.unstable_scheduleCallback, Dd = d.unstable_cancelCallback, Ad = d.unstable_shouldYield, Wo = d.unstable_requestPaint, cn = d.unstable_now, Os = d.unstable_ImmediatePriority, Nu = d.unstable_UserBlockingPriority, xa = d.unstable_NormalPriority, Al = d.unstable_IdlePriority, mf = d.unstable_yieldValue, vf = d.unstable_setDisableYieldValue, Wa = null, kn = null, Ce = null, Qi = !1, gr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (n.isDisabled)
        return !0;
      if (!n.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        fe && (e = _({}, e, {
          getLaneLabelMap: Nl,
          injectProfilingHooks: Hr
        })), Wa = n.inject(e), kn = n;
      } catch (s) {
        y("React instrumentation encountered an error: %s.", s);
      }
      return !!n.checkDCE;
    }
    function fn(e, n) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(Wa, e, n);
        } catch (s) {
          Qi || (Qi = !0, y("React instrumentation encountered an error: %s", s));
        }
    }
    function ft(e, n) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var s = (e.current.flags & gt) === gt;
          if (ve) {
            var l;
            switch (n) {
              case Mi:
                l = Os;
                break;
              case zl:
                l = Nu;
                break;
              case Dl:
                l = xa;
                break;
              case qo:
                l = Al;
                break;
              default:
                l = xa;
                break;
            }
            kn.onCommitFiberRoot(Wa, e, l, s);
          }
        } catch (c) {
          Qi || (Qi = !0, y("React instrumentation encountered an error: %s", c));
        }
    }
    function xn(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Wa, e);
        } catch (n) {
          Qi || (Qi = !0, y("React instrumentation encountered an error: %s", n));
        }
    }
    function Sn(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Wa, e);
        } catch (n) {
          Qi || (Qi = !0, y("React instrumentation encountered an error: %s", n));
        }
    }
    function Tt(e) {
      if (typeof mf == "function" && (vf(e), T(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Wa, e);
        } catch (n) {
          Qi || (Qi = !0, y("React instrumentation encountered an error: %s", n));
        }
    }
    function Hr(e) {
      Ce = e;
    }
    function Nl() {
      {
        for (var e = /* @__PURE__ */ new Map(), n = 1, s = 0; s < Mu; s++) {
          var l = Sp(n);
          e.set(n, l), n *= 2;
        }
        return e;
      }
    }
    function wn(e) {
      Ce !== null && typeof Ce.markCommitStarted == "function" && Ce.markCommitStarted(e);
    }
    function Fl() {
      Ce !== null && typeof Ce.markCommitStopped == "function" && Ce.markCommitStopped();
    }
    function Gi(e) {
      Ce !== null && typeof Ce.markComponentRenderStarted == "function" && Ce.markComponentRenderStarted(e);
    }
    function Sa() {
      Ce !== null && typeof Ce.markComponentRenderStopped == "function" && Ce.markComponentRenderStopped();
    }
    function gf(e) {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStarted == "function" && Ce.markComponentPassiveEffectMountStarted(e);
    }
    function Fu() {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStopped == "function" && Ce.markComponentPassiveEffectMountStopped();
    }
    function xr(e) {
      Ce !== null && typeof Ce.markComponentPassiveEffectUnmountStarted == "function" && Ce.markComponentPassiveEffectUnmountStarted(e);
    }
    function xf() {
      Ce !== null && typeof Ce.markComponentPassiveEffectUnmountStopped == "function" && Ce.markComponentPassiveEffectUnmountStopped();
    }
    function Sf(e) {
      Ce !== null && typeof Ce.markComponentLayoutEffectMountStarted == "function" && Ce.markComponentLayoutEffectMountStarted(e);
    }
    function Ol() {
      Ce !== null && typeof Ce.markComponentLayoutEffectMountStopped == "function" && Ce.markComponentLayoutEffectMountStopped();
    }
    function Ou(e) {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStarted == "function" && Ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function Qo() {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStopped == "function" && Ce.markComponentLayoutEffectUnmountStopped();
    }
    function Qa(e, n, s) {
      Ce !== null && typeof Ce.markComponentErrored == "function" && Ce.markComponentErrored(e, n, s);
    }
    function Go(e, n, s) {
      Ce !== null && typeof Ce.markComponentSuspended == "function" && Ce.markComponentSuspended(e, n, s);
    }
    function Ga(e) {
      Ce !== null && typeof Ce.markLayoutEffectsStarted == "function" && Ce.markLayoutEffectsStarted(e);
    }
    function Xo() {
      Ce !== null && typeof Ce.markLayoutEffectsStopped == "function" && Ce.markLayoutEffectsStopped();
    }
    function Uu(e) {
      Ce !== null && typeof Ce.markPassiveEffectsStarted == "function" && Ce.markPassiveEffectsStarted(e);
    }
    function _f() {
      Ce !== null && typeof Ce.markPassiveEffectsStopped == "function" && Ce.markPassiveEffectsStopped();
    }
    function Lu(e) {
      Ce !== null && typeof Ce.markRenderStarted == "function" && Ce.markRenderStarted(e);
    }
    function Zo() {
      Ce !== null && typeof Ce.markRenderYielded == "function" && Ce.markRenderYielded();
    }
    function Zn() {
      Ce !== null && typeof Ce.markRenderStopped == "function" && Ce.markRenderStopped();
    }
    function Xa(e) {
      Ce !== null && typeof Ce.markRenderScheduled == "function" && Ce.markRenderScheduled(e);
    }
    function si(e, n) {
      Ce !== null && typeof Ce.markForceUpdateScheduled == "function" && Ce.markForceUpdateScheduled(e, n);
    }
    function Ul(e, n) {
      Ce !== null && typeof Ce.markStateUpdateScheduled == "function" && Ce.markStateUpdateScheduled(e, n);
    }
    function Sr(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var Pr = typeof Object.is == "function" ? Object.is : Sr, Ci = null, Bu = !1, Ef = !1;
    function _a(e) {
      Ci === null ? Ci = [e] : Ci.push(e);
    }
    function Nd(e) {
      Bu = !0, _a(e);
    }
    function Rf() {
      Bu && li();
    }
    function li() {
      if (!Ef && Ci !== null) {
        Ef = !0;
        var e = 0, n = kr();
        try {
          var s = !0, l = Ci;
          for (Cn(Mi); e < l.length; e++) {
            var c = l[e];
            do
              c = c(s);
            while (c !== null);
          }
          Ci = null, Bu = !1;
        } catch (h) {
          throw Ci !== null && (Ci = Ci.slice(e + 1)), pf(Os, li), h;
        } finally {
          Cn(n), Ef = !1;
        }
      }
      return null;
    }
    function Za(e) {
      var n = e.current.memoizedState;
      return n.isDehydrated;
    }
    var Fd = m.ReactCurrentBatchConfig, Od = null;
    function bf() {
      return Fd.transition;
    }
    function Us(e, n) {
      if (Pr(e, n))
        return !0;
      if (typeof e != "object" || e === null || typeof n != "object" || n === null)
        return !1;
      var s = Object.keys(e), l = Object.keys(n);
      if (s.length !== l.length)
        return !1;
      for (var c = 0; c < s.length; c++) {
        var h = s[c];
        if (!Ei.call(n, h) || !Pr(e[h], n[h]))
          return !1;
      }
      return !0;
    }
    function Ep(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Re:
          return _i(e.type);
        case Be:
          return _i("Lazy");
        case ee:
          return _i("Suspense");
        case He:
          return _i("SuspenseList");
        case $:
        case et:
        case j:
          return yr(e.type);
        case H:
          return yr(e.type.render);
        case ue:
          return _u(e.type);
        default:
          return "";
      }
    }
    function Ud(e) {
      try {
        var n = "", s = e;
        do
          n += Ep(s), s = s.return;
        while (s);
        return n;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    var Tf = m.ReactDebugCurrentFrame, jr = null, wi = !1;
    function Rp() {
      {
        if (jr === null)
          return null;
        var e = jr._debugOwner;
        if (e !== null && typeof e < "u")
          return Ve(e);
      }
      return null;
    }
    function Ls() {
      return jr === null ? "" : Ud(jr);
    }
    function Hn() {
      Tf.getCurrentStack = null, jr = null, wi = !1;
    }
    function At(e) {
      Tf.getCurrentStack = Ls, jr = e, wi = !1;
    }
    function Xi(e) {
      wi = e;
    }
    var ui = {
      recordUnsafeLifecycleWarnings: function(e, n) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, n) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var bp = function(e) {
        for (var n = null, s = e; s !== null; )
          s.mode & un && (n = s), s = s.return;
        return n;
      }, Bs = function(e) {
        var n = [];
        return e.forEach(function(s) {
          n.push(s);
        }), n.sort().join(", ");
      }, Ll = [], Bl = [], ku = [], Jn = [], ks = [], Hu = [], _r = /* @__PURE__ */ new Set();
      ui.recordUnsafeLifecycleWarnings = function(e, n) {
        _r.has(e.type) || (typeof n.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        n.componentWillMount.__suppressDeprecationWarning !== !0 && Ll.push(e), e.mode & un && typeof n.UNSAFE_componentWillMount == "function" && Bl.push(e), typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ku.push(e), e.mode & un && typeof n.UNSAFE_componentWillReceiveProps == "function" && Jn.push(e), typeof n.componentWillUpdate == "function" && n.componentWillUpdate.__suppressDeprecationWarning !== !0 && ks.push(e), e.mode & un && typeof n.UNSAFE_componentWillUpdate == "function" && Hu.push(e));
      }, ui.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ll.length > 0 && (Ll.forEach(function(Z) {
          e.add(Ve(Z) || "Component"), _r.add(Z.type);
        }), Ll = []);
        var n = /* @__PURE__ */ new Set();
        Bl.length > 0 && (Bl.forEach(function(Z) {
          n.add(Ve(Z) || "Component"), _r.add(Z.type);
        }), Bl = []);
        var s = /* @__PURE__ */ new Set();
        ku.length > 0 && (ku.forEach(function(Z) {
          s.add(Ve(Z) || "Component"), _r.add(Z.type);
        }), ku = []);
        var l = /* @__PURE__ */ new Set();
        Jn.length > 0 && (Jn.forEach(function(Z) {
          l.add(Ve(Z) || "Component"), _r.add(Z.type);
        }), Jn = []);
        var c = /* @__PURE__ */ new Set();
        ks.length > 0 && (ks.forEach(function(Z) {
          c.add(Ve(Z) || "Component"), _r.add(Z.type);
        }), ks = []);
        var h = /* @__PURE__ */ new Set();
        if (Hu.length > 0 && (Hu.forEach(function(Z) {
          h.add(Ve(Z) || "Component"), _r.add(Z.type);
        }), Hu = []), n.size > 0) {
          var g = Bs(n);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, g);
        }
        if (l.size > 0) {
          var M = Bs(l);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, M);
        }
        if (h.size > 0) {
          var w = Bs(h);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, w);
        }
        if (e.size > 0) {
          var N = Bs(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
        if (s.size > 0) {
          var U = Bs(s);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
        if (c.size > 0) {
          var I = Bs(c);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var Hs = /* @__PURE__ */ new Map(), Ja = /* @__PURE__ */ new Set();
      ui.recordLegacyContextWarning = function(e, n) {
        var s = bp(e);
        if (s === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Ja.has(e.type)) {
          var l = Hs.get(s);
          (e.type.contextTypes != null || e.type.childContextTypes != null || n !== null && typeof n.getChildContext == "function") && (l === void 0 && (l = [], Hs.set(s, l)), l.push(e));
        }
      }, ui.flushLegacyContextWarning = function() {
        Hs.forEach(function(e, n) {
          if (e.length !== 0) {
            var s = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(h) {
              l.add(Ve(h) || "Component"), Ja.add(h.type);
            });
            var c = Bs(l);
            try {
              At(s), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, c);
            } finally {
              Hn();
            }
          }
        });
      }, ui.discardPendingWarnings = function() {
        Ll = [], Bl = [], ku = [], Jn = [], ks = [], Hu = [], Hs = /* @__PURE__ */ new Map();
      };
    }
    function Pu(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function Jo(e) {
      try {
        return ju(e), !1;
      } catch {
        return !0;
      }
    }
    function ju(e) {
      return "" + e;
    }
    function Tp(e) {
      if (Jo(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pu(e)), ju(e);
    }
    function Ld(e, n) {
      if (Jo(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", n, Pu(e)), ju(e);
    }
    function oi(e, n) {
      if (e && e.defaultProps) {
        var s = _({}, n), l = e.defaultProps;
        for (var c in l)
          s[c] === void 0 && (s[c] = l[c]);
        return s;
      }
      return n;
    }
    var Vu = ji(null), kl;
    kl = {};
    var Hl = null, Pl = null, Mf = null, r = !1;
    function i() {
      Hl = null, Pl = null, Mf = null, r = !1;
    }
    function o() {
      r = !0;
    }
    function f() {
      r = !1;
    }
    function p(e, n, s) {
      gi ? (qt(Vu, n._currentValue, e), n._currentValue = s, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== kl && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = kl) : (qt(Vu, n._currentValue2, e), n._currentValue2 = s, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== kl && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = kl);
    }
    function x(e, n) {
      var s = Vu.current;
      bn(Vu, n), gi ? e._currentValue = s : e._currentValue2 = s;
    }
    function D(e, n, s) {
      for (var l = e; l !== null; ) {
        var c = l.alternate;
        if (Cl(l.childLanes, n) ? c !== null && !Cl(c.childLanes, n) && (c.childLanes = st(c.childLanes, n)) : (l.childLanes = st(l.childLanes, n), c !== null && (c.childLanes = st(c.childLanes, n))), l === s)
          break;
        l = l.return;
      }
      l !== s && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function L(e, n, s) {
      K(e, n, s);
    }
    function K(e, n, s) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var c = void 0, h = l.dependencies;
        if (h !== null) {
          c = l.child;
          for (var g = h.firstContext; g !== null; ) {
            if (g.context === n) {
              if (l.tag === ue) {
                var M = Ml(s), w = Je(Xt, M);
                w.tag = rr;
                var N = l.updateQueue;
                if (N !== null) {
                  var U = N.shared, I = U.pending;
                  I === null ? w.next = w : (w.next = I.next, I.next = w), U.pending = w;
                }
              }
              l.lanes = st(l.lanes, s);
              var Z = l.alternate;
              Z !== null && (Z.lanes = st(Z.lanes, s)), D(l.return, s, e), h.lanes = st(h.lanes, s);
              break;
            }
            g = g.next;
          }
        } else if (l.tag === xe)
          c = l.type === e.type ? null : l.child;
        else if (l.tag === je) {
          var te = l.return;
          if (te === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          te.lanes = st(te.lanes, s);
          var de = te.alternate;
          de !== null && (de.lanes = st(de.lanes, s)), D(te, s, e), c = l.sibling;
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
            var me = c.sibling;
            if (me !== null) {
              me.return = c.return, c = me;
              break;
            }
            c = c.return;
          }
        l = c;
      }
    }
    function he(e, n) {
      Hl = e, Pl = null, Mf = null;
      var s = e.dependencies;
      if (s !== null) {
        var l = s.firstContext;
        l !== null && (on(s.lanes, n) && xh(), s.firstContext = null);
      }
    }
    function Ee(e) {
      r && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var n = gi ? e._currentValue : e._currentValue2;
      if (Mf !== e) {
        var s = {
          context: e,
          memoizedValue: n,
          next: null
        };
        if (Pl === null) {
          if (Hl === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Pl = s, Hl.dependencies = {
            lanes: ce,
            firstContext: s
          };
        } else
          Pl = Pl.next = s;
      }
      return n;
    }
    var $e = null;
    function Ge(e) {
      $e === null ? $e = [e] : $e.push(e);
    }
    function Qt() {
      if ($e !== null) {
        for (var e = 0; e < $e.length; e++) {
          var n = $e[e], s = n.interleaved;
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
        $e = null;
      }
    }
    var Ie = 0, Pn = 1, rr = 2, Y = 3, P = !1, X, we;
    X = !1, we = null;
    function Pe(e) {
      var n = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ce
        },
        effects: null
      };
      e.updateQueue = n;
    }
    function lt(e, n) {
      var s = n.updateQueue, l = e.updateQueue;
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
    function Je(e, n) {
      var s = {
        eventTime: e,
        lane: n,
        tag: Ie,
        payload: null,
        callback: null,
        next: null
      };
      return s;
    }
    function dt(e, n, s) {
      var l = e.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (m0(e)) {
          var h = c.interleaved;
          h === null ? (n.next = n, Ge(c)) : (n.next = h.next, h.next = n), c.interleaved = n;
        } else {
          var g = c.pending;
          g === null ? n.next = n : (n.next = g.next, g.next = n), c.pending = n;
        }
        we === c && !X && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), X = !0);
      }
    }
    function dn(e, n, s) {
      var l = n.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (Vo(s)) {
          var h = c.lanes;
          h = Ya(h, e.pendingLanes);
          var g = st(h, s);
          c.lanes = g, Ns(e, g);
        }
      }
    }
    function Mt(e, n) {
      var s = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var c = l.updateQueue;
        if (s === c) {
          var h = null, g = null, M = s.firstBaseUpdate;
          if (M !== null) {
            var w = M;
            do {
              var N = {
                eventTime: w.eventTime,
                lane: w.lane,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null
              };
              g === null ? h = g = N : (g.next = N, g = N), w = w.next;
            } while (w !== null);
            g === null ? h = g = n : (g.next = n, g = n);
          } else
            h = g = n;
          s = {
            baseState: c.baseState,
            firstBaseUpdate: h,
            lastBaseUpdate: g,
            shared: c.shared,
            effects: c.effects
          }, e.updateQueue = s;
          return;
        }
      }
      var U = s.lastBaseUpdate;
      U === null ? s.firstBaseUpdate = n : U.next = n, s.lastBaseUpdate = n;
    }
    function Ka(e, n, s, l, c, h) {
      switch (s.tag) {
        case Pn: {
          var g = s.payload;
          if (typeof g == "function") {
            o();
            var M = g.call(h, l, c);
            {
              if (e.mode & un) {
                Tt(!0);
                try {
                  g.call(h, l, c);
                } finally {
                  Tt(!1);
                }
              }
              f();
            }
            return M;
          }
          return g;
        }
        case Y:
          e.flags = e.flags & ~Qn | gt;
        case Ie: {
          var w = s.payload, N;
          if (typeof w == "function") {
            o(), N = w.call(h, l, c);
            {
              if (e.mode & un) {
                Tt(!0);
                try {
                  w.call(h, l, c);
                } finally {
                  Tt(!1);
                }
              }
              f();
            }
          } else
            N = w;
          return N == null ? l : _({}, l, N);
        }
        case rr:
          return P = !0, l;
      }
      return l;
    }
    function Ko(e, n, s, l) {
      var c = e.updateQueue;
      P = !1, we = c.shared;
      var h = c.firstBaseUpdate, g = c.lastBaseUpdate, M = c.shared.pending;
      if (M !== null) {
        c.shared.pending = null;
        var w = M, N = w.next;
        w.next = null, g === null ? h = N : g.next = N, g = w;
        var U = e.alternate;
        if (U !== null) {
          var I = U.updateQueue, Z = I.lastBaseUpdate;
          Z !== g && (Z === null ? I.firstBaseUpdate = N : Z.next = N, I.lastBaseUpdate = w);
        }
      }
      if (h !== null) {
        var te = c.baseState, de = ce, me = null, Qe = null, ut = null, Ke = h;
        do {
          var rn = Ke.lane, an = Ke.eventTime;
          if (Cl(l, rn)) {
            if (ut !== null) {
              var ne = {
                eventTime: an,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mn,
                tag: Ke.tag,
                payload: Ke.payload,
                callback: Ke.callback,
                next: null
              };
              ut = ut.next = ne;
            }
            te = Ka(e, c, Ke, te, n, s);
            var q = Ke.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ke.lane !== Mn) {
              e.flags |= uu;
              var _e = c.effects;
              _e === null ? c.effects = [Ke] : _e.push(Ke);
            }
          } else {
            var Q = {
              eventTime: an,
              lane: rn,
              tag: Ke.tag,
              payload: Ke.payload,
              callback: Ke.callback,
              next: null
            };
            ut === null ? (Qe = ut = Q, me = te) : ut = ut.next = Q, de = st(de, rn);
          }
          if (Ke = Ke.next, Ke === null) {
            if (M = c.shared.pending, M === null)
              break;
            var qe = M, Oe = qe.next;
            qe.next = null, Ke = Oe, c.lastBaseUpdate = qe, c.shared.pending = null;
          }
        } while (!0);
        ut === null && (me = te), c.baseState = me, c.firstBaseUpdate = Qe, c.lastBaseUpdate = ut;
        var Et = c.shared.interleaved;
        if (Et !== null) {
          var Pt = Et;
          do
            de = st(de, Pt.lane), Pt = Pt.next;
          while (Pt !== Et);
        } else
          h === null && (c.shared.lanes = ce);
        Vh(de), e.lanes = de, e.memoizedState = te;
      }
      we = null;
    }
    function A1(e, n) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(n);
    }
    function my() {
      P = !1;
    }
    function Bd() {
      return P;
    }
    function vy(e, n, s) {
      var l = n.effects;
      if (n.effects = null, l !== null)
        for (var c = 0; c < l.length; c++) {
          var h = l[c], g = h.callback;
          g !== null && (h.callback = null, A1(g, s));
        }
    }
    var Mp = {}, yy = new u.Component().refs, Cp, wp, zp, Dp, Ap, gy, kd, Np, Fp, Op;
    {
      Cp = /* @__PURE__ */ new Set(), wp = /* @__PURE__ */ new Set(), zp = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set(), Np = /* @__PURE__ */ new Set(), Ap = /* @__PURE__ */ new Set(), Fp = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var xy = /* @__PURE__ */ new Set();
      kd = function(e, n) {
        if (!(e === null || typeof e == "function")) {
          var s = n + "_" + e;
          xy.has(s) || (xy.add(s), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, e));
        }
      }, gy = function(e, n) {
        if (n === void 0) {
          var s = Ne(e) || "Component";
          Ap.has(s) || (Ap.add(s), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", s));
        }
      }, Object.defineProperty(Mp, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Mp);
    }
    function Up(e, n, s, l) {
      var c = e.memoizedState, h = s(l, c);
      {
        if (e.mode & un) {
          Tt(!0);
          try {
            h = s(l, c);
          } finally {
            Tt(!1);
          }
        }
        gy(n, h);
      }
      var g = h == null ? c : _({}, c, h);
      if (e.memoizedState = g, e.lanes === ce) {
        var M = e.updateQueue;
        M.baseState = g;
      }
    }
    var Lp = {
      isMounted: Pc,
      enqueueSetState: function(e, n, s) {
        var l = C(e), c = Ir(), h = Gl(l), g = Je(c, h);
        g.payload = n, s != null && (kd(s, "setState"), g.callback = s), dt(l, g);
        var M = qn(l, h, c);
        M !== null && dn(M, l, h), Ul(l, h);
      },
      enqueueReplaceState: function(e, n, s) {
        var l = C(e), c = Ir(), h = Gl(l), g = Je(c, h);
        g.tag = Pn, g.payload = n, s != null && (kd(s, "replaceState"), g.callback = s), dt(l, g);
        var M = qn(l, h, c);
        M !== null && dn(M, l, h), Ul(l, h);
      },
      enqueueForceUpdate: function(e, n) {
        var s = C(e), l = Ir(), c = Gl(s), h = Je(l, c);
        h.tag = rr, n != null && (kd(n, "forceUpdate"), h.callback = n), dt(s, h);
        var g = qn(s, c, l);
        g !== null && dn(g, s, c), si(s, c);
      }
    };
    function Sy(e, n, s, l, c, h, g) {
      var M = e.stateNode;
      if (typeof M.shouldComponentUpdate == "function") {
        var w = M.shouldComponentUpdate(l, h, g);
        {
          if (e.mode & un) {
            Tt(!0);
            try {
              w = M.shouldComponentUpdate(l, h, g);
            } finally {
              Tt(!1);
            }
          }
          w === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ne(n) || "Component");
        }
        return w;
      }
      return n.prototype && n.prototype.isPureReactComponent ? !Us(s, l) || !Us(c, h) : !0;
    }
    function N1(e, n, s) {
      var l = e.stateNode;
      {
        var c = Ne(n) || "Component", h = l.render;
        h || (n.prototype && typeof n.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), l.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), l.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), l.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), n.contextType && n.contextTypes && !Fp.has(n) && (Fp.add(n), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof l.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), n.prototype && n.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ne(n) || "A pure component"), typeof l.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof l.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof l.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof l.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var g = l.props !== s;
        l.props !== void 0 && g && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), l.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !zp.has(n) && (zp.add(n), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ne(n))), typeof l.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof l.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof n.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var M = l.state;
        M && (typeof M != "object" || kt(M)) && y("%s.state: must be set to an object or null", c), typeof l.getChildContext == "function" && typeof n.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function _y(e, n) {
      n.updater = Lp, e.stateNode = n, z(n, e), n._reactInternalInstance = Mp;
    }
    function Ey(e, n, s) {
      var l = !1, c = bt, h = bt, g = n.contextType;
      if ("contextType" in n) {
        var M = (
          // Allow null for conditional declaration
          g === null || g !== void 0 && g.$$typeof === vi && g._context === void 0
        );
        if (!M && !Op.has(n)) {
          Op.add(n);
          var w = "";
          g === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof g != "object" ? w = " However, it is set to a " + typeof g + "." : g.$$typeof === Yn ? w = " Did you accidentally pass the Context.Provider instead?" : g._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(g).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ne(n) || "Component", w);
        }
      }
      if (typeof g == "object" && g !== null)
        h = Ee(g);
      else {
        c = Vi(e, n, !0);
        var N = n.contextTypes;
        l = N != null, h = l ? vl(e, c) : bt;
      }
      var U = new n(s, h);
      if (e.mode & un) {
        Tt(!0);
        try {
          U = new n(s, h);
        } finally {
          Tt(!1);
        }
      }
      var I = e.memoizedState = U.state !== null && U.state !== void 0 ? U.state : null;
      _y(e, U);
      {
        if (typeof n.getDerivedStateFromProps == "function" && I === null) {
          var Z = Ne(n) || "Component";
          wp.has(Z) || (wp.add(Z), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Z, U.state === null ? "null" : "undefined", Z));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof U.getSnapshotBeforeUpdate == "function") {
          var te = null, de = null, me = null;
          if (typeof U.componentWillMount == "function" && U.componentWillMount.__suppressDeprecationWarning !== !0 ? te = "componentWillMount" : typeof U.UNSAFE_componentWillMount == "function" && (te = "UNSAFE_componentWillMount"), typeof U.componentWillReceiveProps == "function" && U.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? de = "componentWillReceiveProps" : typeof U.UNSAFE_componentWillReceiveProps == "function" && (de = "UNSAFE_componentWillReceiveProps"), typeof U.componentWillUpdate == "function" && U.componentWillUpdate.__suppressDeprecationWarning !== !0 ? me = "componentWillUpdate" : typeof U.UNSAFE_componentWillUpdate == "function" && (me = "UNSAFE_componentWillUpdate"), te !== null || de !== null || me !== null) {
            var Qe = Ne(n) || "Component", ut = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Dp.has(Qe) || (Dp.add(Qe), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Qe, ut, te !== null ? `
  ` + te : "", de !== null ? `
  ` + de : "", me !== null ? `
  ` + me : ""));
          }
        }
      }
      return l && ml(e, c, h), U;
    }
    function F1(e, n) {
      var s = n.state;
      typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), s !== n.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ve(e) || "Component"), Lp.enqueueReplaceState(n, n.state, null));
    }
    function Ry(e, n, s, l) {
      var c = n.state;
      if (typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, l), n.state !== c) {
        {
          var h = Ve(e) || "Component";
          Cp.has(h) || (Cp.add(h), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", h));
        }
        Lp.enqueueReplaceState(n, n.state, null);
      }
    }
    function Bp(e, n, s, l) {
      N1(e, n, s);
      var c = e.stateNode;
      c.props = s, c.state = e.memoizedState, c.refs = yy, Pe(e);
      var h = n.contextType;
      if (typeof h == "object" && h !== null)
        c.context = Ee(h);
      else {
        var g = Vi(e, n, !0);
        c.context = vl(e, g);
      }
      {
        if (c.state === s) {
          var M = Ne(n) || "Component";
          Np.has(M) || (Np.add(M), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", M));
        }
        e.mode & un && ui.recordLegacyContextWarning(e, c), ui.recordUnsafeLifecycleWarnings(e, c);
      }
      c.state = e.memoizedState;
      var w = n.getDerivedStateFromProps;
      if (typeof w == "function" && (Up(e, n, w, s), c.state = e.memoizedState), typeof n.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (F1(e, c), Ko(e, s, c, l), c.state = e.memoizedState), typeof c.componentDidMount == "function") {
        var N = pt;
        N |= oa, (e.mode & ii) !== rt && (N |= yi), e.flags |= N;
      }
    }
    function O1(e, n, s, l) {
      var c = e.stateNode, h = e.memoizedProps;
      c.props = h;
      var g = c.context, M = n.contextType, w = bt;
      if (typeof M == "object" && M !== null)
        w = Ee(M);
      else {
        var N = Vi(e, n, !0);
        w = vl(e, N);
      }
      var U = n.getDerivedStateFromProps, I = typeof U == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !I && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (h !== s || g !== w) && Ry(e, c, s, w), my();
      var Z = e.memoizedState, te = c.state = Z;
      if (Ko(e, s, c, l), te = e.memoizedState, h === s && Z === te && !Tn() && !Bd()) {
        if (typeof c.componentDidMount == "function") {
          var de = pt;
          de |= oa, (e.mode & ii) !== rt && (de |= yi), e.flags |= de;
        }
        return !1;
      }
      typeof U == "function" && (Up(e, n, U, s), te = e.memoizedState);
      var me = Bd() || Sy(e, n, h, s, Z, te, w);
      if (me) {
        if (!I && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var Qe = pt;
          Qe |= oa, (e.mode & ii) !== rt && (Qe |= yi), e.flags |= Qe;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var ut = pt;
          ut |= oa, (e.mode & ii) !== rt && (ut |= yi), e.flags |= ut;
        }
        e.memoizedProps = s, e.memoizedState = te;
      }
      return c.props = s, c.state = te, c.context = w, me;
    }
    function U1(e, n, s, l, c) {
      var h = n.stateNode;
      lt(e, n);
      var g = n.memoizedProps, M = n.type === n.elementType ? g : oi(n.type, g);
      h.props = M;
      var w = n.pendingProps, N = h.context, U = s.contextType, I = bt;
      if (typeof U == "object" && U !== null)
        I = Ee(U);
      else {
        var Z = Vi(n, s, !0);
        I = vl(n, Z);
      }
      var te = s.getDerivedStateFromProps, de = typeof te == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      !de && (typeof h.UNSAFE_componentWillReceiveProps == "function" || typeof h.componentWillReceiveProps == "function") && (g !== w || N !== I) && Ry(n, h, l, I), my();
      var me = n.memoizedState, Qe = h.state = me;
      if (Ko(n, l, h, c), Qe = n.memoizedState, g === w && me === Qe && !Tn() && !Bd() && !k)
        return typeof h.componentDidUpdate == "function" && (g !== e.memoizedProps || me !== e.memoizedState) && (n.flags |= pt), typeof h.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || me !== e.memoizedState) && (n.flags |= Dr), !1;
      typeof te == "function" && (Up(n, s, te, l), Qe = n.memoizedState);
      var ut = Bd() || Sy(n, s, M, l, me, Qe, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      k;
      return ut ? (!de && (typeof h.UNSAFE_componentWillUpdate == "function" || typeof h.componentWillUpdate == "function") && (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, Qe, I), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(l, Qe, I)), typeof h.componentDidUpdate == "function" && (n.flags |= pt), typeof h.getSnapshotBeforeUpdate == "function" && (n.flags |= Dr)) : (typeof h.componentDidUpdate == "function" && (g !== e.memoizedProps || me !== e.memoizedState) && (n.flags |= pt), typeof h.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || me !== e.memoizedState) && (n.flags |= Dr), n.memoizedProps = l, n.memoizedState = Qe), h.props = l, h.state = Qe, h.context = I, ut;
    }
    var $o = [], ec = 0, Hd = null, Pd = 0, Zi = [], Ji = 0, Iu = null, Ps = 1, js = "";
    function L1(e) {
      return Yu(), (e.flags & fo) !== Se;
    }
    function B1(e) {
      return Yu(), Pd;
    }
    function k1() {
      var e = js, n = Ps, s = n & ~H1(n);
      return s.toString(32) + e;
    }
    function qu(e, n) {
      Yu(), $o[ec++] = Pd, $o[ec++] = Hd, Hd = e, Pd = n;
    }
    function by(e, n, s) {
      Yu(), Zi[Ji++] = Ps, Zi[Ji++] = js, Zi[Ji++] = Iu, Iu = e;
      var l = Ps, c = js, h = jd(l) - 1, g = l & ~(1 << h), M = s + 1, w = jd(n) + h;
      if (w > 30) {
        var N = h - h % 5, U = (1 << N) - 1, I = (g & U).toString(32), Z = g >> N, te = h - N, de = jd(n) + te, me = M << te, Qe = me | Z, ut = I + c;
        Ps = 1 << de | Qe, js = ut;
      } else {
        var Ke = M << h, rn = Ke | g, an = c;
        Ps = 1 << w | rn, js = an;
      }
    }
    function kp(e) {
      Yu();
      var n = e.return;
      if (n !== null) {
        var s = 1, l = 0;
        qu(e, s), by(e, s, l);
      }
    }
    function jd(e) {
      return 32 - gl(e);
    }
    function H1(e) {
      return 1 << jd(e) - 1;
    }
    function Hp(e) {
      for (; e === Hd; )
        Hd = $o[--ec], $o[ec] = null, Pd = $o[--ec], $o[ec] = null;
      for (; e === Iu; )
        Iu = Zi[--Ji], Zi[Ji] = null, js = Zi[--Ji], Zi[Ji] = null, Ps = Zi[--Ji], Zi[Ji] = null;
    }
    function P1() {
      return Yu(), Iu !== null ? {
        id: Ps,
        overflow: js
      } : null;
    }
    function j1(e, n) {
      Yu(), Zi[Ji++] = Ps, Zi[Ji++] = js, Zi[Ji++] = Iu, Ps = n.id, js = n.overflow, Iu = e;
    }
    function Yu() {
      Er() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var ir = null, Ki = null, Ea = !1, Wu = !1, jl = null;
    function V1() {
      Ea && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function I1() {
      Wu = !0;
    }
    function q1(e) {
      if (!Rn)
        return !1;
      var n = e.stateNode.containerInfo;
      return Ki = Si(n), ir = e, Ea = !0, jl = null, Wu = !1, !0;
    }
    function Y1(e, n, s) {
      return Rn ? (Ki = ll(n), ir = e, Ea = !0, jl = null, Wu = !1, s !== null && j1(e, s), !0) : !1;
    }
    function Ty(e, n) {
      switch (e.tag) {
        case ye:
          cl(e.stateNode.containerInfo, n);
          break;
        case Re:
          Eo(e.type, e.memoizedProps, e.stateNode, n);
          break;
        case ee:
          var s = e.memoizedState;
          s.dehydrated !== null && _o(s.dehydrated, n);
          break;
      }
    }
    function My(e, n) {
      Ty(e, n);
      var s = WE();
      s.stateNode = n, s.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [s], e.flags |= pr) : l.push(s);
    }
    function Pp(e, n) {
      {
        if (Wu)
          return;
        switch (e.tag) {
          case ye: {
            var s = e.stateNode.containerInfo;
            switch (n.tag) {
              case Re:
                var l = n.type, c = n.pendingProps;
                ei(s, l, c);
                break;
              case ge:
                var h = n.pendingProps;
                ti(s, h);
                break;
              case ee:
                xs(s);
                break;
            }
            break;
          }
          case Re: {
            var g = e.type, M = e.memoizedProps, w = e.stateNode;
            switch (n.tag) {
              case Re:
                var N = n.type, U = n.pendingProps;
                xd(g, M, w, N, U);
                break;
              case ge:
                var I = n.pendingProps;
                Qc(g, M, w, I);
                break;
              case ee:
                Gc(g, M, w);
                break;
            }
            break;
          }
          case ee: {
            var Z = e.memoizedState, te = Z.dehydrated;
            if (te !== null)
              switch (n.tag) {
                case Re:
                  var de = n.type, me = n.pendingProps;
                  pa(te, de, me);
                  break;
                case ge:
                  var Qe = n.pendingProps;
                  ma(te, Qe);
                  break;
                case ee:
                  Ss(te);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Cy(e, n) {
      n.flags = n.flags & ~nr | Ut, Pp(e, n);
    }
    function wy(e, n) {
      switch (e.tag) {
        case Re: {
          var s = e.type, l = e.pendingProps, c = wt(n, s, l);
          return c !== null ? (e.stateNode = c, ir = e, Ki = Ur(c), !0) : !1;
        }
        case ge: {
          var h = e.pendingProps, g = zt(n, h);
          return g !== null ? (e.stateNode = g, ir = e, Ki = null, !0) : !1;
        }
        case ee: {
          {
            var M = mt(n);
            if (M !== null) {
              var w = {
                dehydrated: M,
                treeContext: P1(),
                retryLane: Yt
              };
              e.memoizedState = w;
              var N = QE(M);
              return N.return = e, e.child = N, ir = e, Ki = null, !0;
            }
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function jp(e) {
      return (e.mode & Ht) !== rt && (e.flags & gt) === Se;
    }
    function Vp(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ip(e) {
      if (Ea) {
        var n = Ki;
        if (!n) {
          jp(e) && (Pp(ir, e), Vp()), Cy(ir, e), Ea = !1, ir = e;
          return;
        }
        var s = n;
        if (!wy(e, n)) {
          jp(e) && (Pp(ir, e), Vp()), n = Pi(s);
          var l = ir;
          if (!n || !wy(e, n)) {
            Cy(ir, e), Ea = !1, ir = e;
            return;
          }
          My(l, s);
        }
      }
    }
    function W1(e, n, s) {
      if (!Rn)
        throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var l = e.stateNode, c = !Wu, h = vu(l, e.type, e.memoizedProps, n, s, e, c);
      return e.updateQueue = h, h !== null;
    }
    function Q1(e) {
      if (!Rn)
        throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = e.stateNode, s = e.memoizedProps, l = !Wu, c = ul(n, s, e, l);
      if (c) {
        var h = ir;
        if (h !== null) {
          var g = (h.mode & Ht) !== rt;
          switch (h.tag) {
            case ye: {
              var M = h.stateNode.containerInfo;
              Wc(
                M,
                n,
                s,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
            case Re: {
              var w = h.type, N = h.memoizedProps, U = h.stateNode;
              ol(
                w,
                N,
                U,
                n,
                s,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
        }
      }
      return c;
    }
    function G1(e) {
      if (!Rn)
        throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = e.memoizedState, s = n !== null ? n.dehydrated : null;
      if (!s)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      yu(s, e);
    }
    function X1(e) {
      if (!Rn)
        throw new Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = e.memoizedState, s = n !== null ? n.dehydrated : null;
      if (!s)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return go(s);
    }
    function zy(e) {
      for (var n = e.return; n !== null && n.tag !== Re && n.tag !== ye && n.tag !== ee; )
        n = n.return;
      ir = n;
    }
    function Cf(e) {
      if (!Rn || e !== ir)
        return !1;
      if (!Ea)
        return zy(e), Ea = !0, !1;
      if (e.tag !== ye && (e.tag !== Re || gd(e.type) && !rl(e.type, e.memoizedProps))) {
        var n = Ki;
        if (n)
          if (jp(e))
            Dy(e), Vp();
          else
            for (; n; )
              My(e, n), n = Pi(n);
      }
      return zy(e), e.tag === ee ? Ki = X1(e) : Ki = ir ? Pi(e.stateNode) : null, !0;
    }
    function Z1() {
      return Ea && Ki !== null;
    }
    function Dy(e) {
      for (var n = Ki; n; )
        Ty(e, n), n = Pi(n);
    }
    function tc() {
      Rn && (ir = null, Ki = null, Ea = !1, Wu = !1);
    }
    function Ay() {
      jl !== null && (y0(jl), jl = null);
    }
    function Er() {
      return Ea;
    }
    function qp(e) {
      jl === null ? jl = [e] : jl.push(e);
    }
    var Yp, Wp, Qp, Gp, Xp, Ny = function(e, n) {
    };
    Yp = !1, Wp = !1, Qp = {}, Gp = {}, Xp = {}, Ny = function(e, n) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var s = Ve(n) || "Component";
        Gp[s] || (Gp[s] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function wf(e, n, s) {
      var l = s.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & un || ie) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(s._owner && s._self && s._owner.stateNode !== s._self)) {
          var c = Ve(e) || "Component";
          Qp[c] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), Qp[c] = !0);
        }
        if (s._owner) {
          var h = s._owner, g;
          if (h) {
            var M = h;
            if (M.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            g = M.stateNode;
          }
          if (!g)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var w = g;
          Ld(l, "ref");
          var N = "" + l;
          if (n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === N)
            return n.ref;
          var U = function(I) {
            var Z = w.refs;
            Z === yy && (Z = w.refs = {}), I === null ? delete Z[N] : Z[N] = I;
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
    function Vd(e, n) {
      var s = Object.prototype.toString.call(n);
      throw new Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Id(e) {
      {
        var n = Ve(e) || "Component";
        if (Xp[n])
          return;
        Xp[n] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Fy(e) {
      var n = e._payload, s = e._init;
      return s(n);
    }
    function Oy(e) {
      function n(Q, ne) {
        if (e) {
          var q = Q.deletions;
          q === null ? (Q.deletions = [ne], Q.flags |= pr) : q.push(ne);
        }
      }
      function s(Q, ne) {
        if (!e)
          return null;
        for (var q = ne; q !== null; )
          n(Q, q), q = q.sibling;
        return null;
      }
      function l(Q, ne) {
        for (var q = /* @__PURE__ */ new Map(), _e = ne; _e !== null; )
          _e.key !== null ? q.set(_e.key, _e) : q.set(_e.index, _e), _e = _e.sibling;
        return q;
      }
      function c(Q, ne) {
        var q = $u(Q, ne);
        return q.index = 0, q.sibling = null, q;
      }
      function h(Q, ne, q) {
        if (Q.index = q, !e)
          return Q.flags |= fo, ne;
        var _e = Q.alternate;
        if (_e !== null) {
          var qe = _e.index;
          return qe < ne ? (Q.flags |= Ut, ne) : qe;
        } else
          return Q.flags |= Ut, ne;
      }
      function g(Q) {
        return e && Q.alternate === null && (Q.flags |= Ut), Q;
      }
      function M(Q, ne, q, _e) {
        if (ne === null || ne.tag !== ge) {
          var qe = gv(q, Q.mode, _e);
          return qe.return = Q, qe;
        } else {
          var Oe = c(ne, q);
          return Oe.return = Q, Oe;
        }
      }
      function w(Q, ne, q, _e) {
        var qe = q.type;
        if (qe === Nn)
          return U(Q, ne, q.props.children, _e, q.key);
        if (ne !== null && (ne.elementType === qe || // Keep this check inline so it only runs on the false path:
        N0(ne, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof qe == "object" && qe !== null && qe.$$typeof === Ft && Fy(qe) === ne.type)) {
          var Oe = c(ne, q.props);
          return Oe.ref = wf(Q, ne, q), Oe.return = Q, Oe._debugSource = q._source, Oe._debugOwner = q._owner, Oe;
        }
        var Et = yv(q, Q.mode, _e);
        return Et.ref = wf(Q, ne, q), Et.return = Q, Et;
      }
      function N(Q, ne, q, _e) {
        if (ne === null || ne.tag !== Me || ne.stateNode.containerInfo !== q.containerInfo || ne.stateNode.implementation !== q.implementation) {
          var qe = xv(q, Q.mode, _e);
          return qe.return = Q, qe;
        } else {
          var Oe = c(ne, q.children || []);
          return Oe.return = Q, Oe;
        }
      }
      function U(Q, ne, q, _e, qe) {
        if (ne === null || ne.tag !== Le) {
          var Oe = Zl(q, Q.mode, _e, qe);
          return Oe.return = Q, Oe;
        } else {
          var Et = c(ne, q);
          return Et.return = Q, Et;
        }
      }
      function I(Q, ne, q) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var _e = gv("" + ne, Q.mode, q);
          return _e.return = Q, _e;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case cr: {
              var qe = yv(ne, Q.mode, q);
              return qe.ref = wf(Q, null, ne), qe.return = Q, qe;
            }
            case Vt: {
              var Oe = xv(ne, Q.mode, q);
              return Oe.return = Q, Oe;
            }
            case Ft: {
              var Et = ne._payload, Pt = ne._init;
              return I(Q, Pt(Et), q);
            }
          }
          if (kt(ne) || oe(ne)) {
            var en = Zl(ne, Q.mode, q, null);
            return en.return = Q, en;
          }
          Vd(Q, ne);
        }
        return typeof ne == "function" && Id(Q), null;
      }
      function Z(Q, ne, q, _e) {
        var qe = ne !== null ? ne.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return qe !== null ? null : M(Q, ne, "" + q, _e);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case cr:
              return q.key === qe ? w(Q, ne, q, _e) : null;
            case Vt:
              return q.key === qe ? N(Q, ne, q, _e) : null;
            case Ft: {
              var Oe = q._payload, Et = q._init;
              return Z(Q, ne, Et(Oe), _e);
            }
          }
          if (kt(q) || oe(q))
            return qe !== null ? null : U(Q, ne, q, _e, null);
          Vd(Q, q);
        }
        return typeof q == "function" && Id(Q), null;
      }
      function te(Q, ne, q, _e, qe) {
        if (typeof _e == "string" && _e !== "" || typeof _e == "number") {
          var Oe = Q.get(q) || null;
          return M(ne, Oe, "" + _e, qe);
        }
        if (typeof _e == "object" && _e !== null) {
          switch (_e.$$typeof) {
            case cr: {
              var Et = Q.get(_e.key === null ? q : _e.key) || null;
              return w(ne, Et, _e, qe);
            }
            case Vt: {
              var Pt = Q.get(_e.key === null ? q : _e.key) || null;
              return N(ne, Pt, _e, qe);
            }
            case Ft: {
              var en = _e._payload, jt = _e._init;
              return te(Q, ne, q, jt(en), qe);
            }
          }
          if (kt(_e) || oe(_e)) {
            var vn = Q.get(q) || null;
            return U(ne, vn, _e, qe, null);
          }
          Vd(ne, _e);
        }
        return typeof _e == "function" && Id(ne), null;
      }
      function de(Q, ne, q) {
        {
          if (typeof Q != "object" || Q === null)
            return ne;
          switch (Q.$$typeof) {
            case cr:
            case Vt:
              Ny(Q, q);
              var _e = Q.key;
              if (typeof _e != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(_e);
                break;
              }
              if (!ne.has(_e)) {
                ne.add(_e);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", _e);
              break;
            case Ft: {
              var qe = Q._payload, Oe = Q._init;
              de(Oe(qe), ne, q);
              break;
            }
          }
        }
        return ne;
      }
      function me(Q, ne, q, _e) {
        for (var qe = null, Oe = 0; Oe < q.length; Oe++) {
          var Et = q[Oe];
          qe = de(Et, qe, Q);
        }
        for (var Pt = null, en = null, jt = ne, vn = 0, Nt = 0, yt = null; jt !== null && Nt < q.length; Nt++) {
          jt.index > Nt ? (yt = jt, jt = null) : yt = jt.sibling;
          var Dn = Z(Q, jt, q[Nt], _e);
          if (Dn === null) {
            jt === null && (jt = yt);
            break;
          }
          e && jt && Dn.alternate === null && n(Q, jt), vn = h(Dn, vn, Nt), en === null ? Pt = Dn : en.sibling = Dn, en = Dn, jt = yt;
        }
        if (Nt === q.length) {
          if (s(Q, jt), Er()) {
            var yn = Nt;
            qu(Q, yn);
          }
          return Pt;
        }
        if (jt === null) {
          for (; Nt < q.length; Nt++) {
            var ia = I(Q, q[Nt], _e);
            ia !== null && (vn = h(ia, vn, Nt), en === null ? Pt = ia : en.sibling = ia, en = ia);
          }
          if (Er()) {
            var or = Nt;
            qu(Q, or);
          }
          return Pt;
        }
        for (var Di = l(Q, jt); Nt < q.length; Nt++) {
          var Ai = te(Di, Q, Nt, q[Nt], _e);
          Ai !== null && (e && Ai.alternate !== null && Di.delete(Ai.key === null ? Nt : Ai.key), vn = h(Ai, vn, Nt), en === null ? Pt = Ai : en.sibling = Ai, en = Ai);
        }
        if (e && Di.forEach(function(yc) {
          return n(Q, yc);
        }), Er()) {
          var as = Nt;
          qu(Q, as);
        }
        return Pt;
      }
      function Qe(Q, ne, q, _e) {
        var qe = oe(q);
        if (typeof qe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Wp || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Wp = !0), q.entries === qe && (Yp || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yp = !0);
          var Oe = qe.call(q);
          if (Oe)
            for (var Et = null, Pt = Oe.next(); !Pt.done; Pt = Oe.next()) {
              var en = Pt.value;
              Et = de(en, Et, Q);
            }
        }
        var jt = qe.call(q);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var vn = null, Nt = null, yt = ne, Dn = 0, yn = 0, ia = null, or = jt.next(); yt !== null && !or.done; yn++, or = jt.next()) {
          yt.index > yn ? (ia = yt, yt = null) : ia = yt.sibling;
          var Di = Z(Q, yt, or.value, _e);
          if (Di === null) {
            yt === null && (yt = ia);
            break;
          }
          e && yt && Di.alternate === null && n(Q, yt), Dn = h(Di, Dn, yn), Nt === null ? vn = Di : Nt.sibling = Di, Nt = Di, yt = ia;
        }
        if (or.done) {
          if (s(Q, yt), Er()) {
            var Ai = yn;
            qu(Q, Ai);
          }
          return vn;
        }
        if (yt === null) {
          for (; !or.done; yn++, or = jt.next()) {
            var as = I(Q, or.value, _e);
            as !== null && (Dn = h(as, Dn, yn), Nt === null ? vn = as : Nt.sibling = as, Nt = as);
          }
          if (Er()) {
            var yc = yn;
            qu(Q, yc);
          }
          return vn;
        }
        for (var gc = l(Q, yt); !or.done; yn++, or = jt.next()) {
          var Ni = te(gc, Q, yn, or.value, _e);
          Ni !== null && (e && Ni.alternate !== null && gc.delete(Ni.key === null ? yn : Ni.key), Dn = h(Ni, Dn, yn), Nt === null ? vn = Ni : Nt.sibling = Ni, Nt = Ni);
        }
        if (e && gc.forEach(function(bv) {
          return n(Q, bv);
        }), Er()) {
          var eo = yn;
          qu(Q, eo);
        }
        return vn;
      }
      function ut(Q, ne, q, _e) {
        if (ne !== null && ne.tag === ge) {
          s(Q, ne.sibling);
          var qe = c(ne, q);
          return qe.return = Q, qe;
        }
        s(Q, ne);
        var Oe = gv(q, Q.mode, _e);
        return Oe.return = Q, Oe;
      }
      function Ke(Q, ne, q, _e) {
        for (var qe = q.key, Oe = ne; Oe !== null; ) {
          if (Oe.key === qe) {
            var Et = q.type;
            if (Et === Nn) {
              if (Oe.tag === Le) {
                s(Q, Oe.sibling);
                var Pt = c(Oe, q.props.children);
                return Pt.return = Q, Pt._debugSource = q._source, Pt._debugOwner = q._owner, Pt;
              }
            } else if (Oe.elementType === Et || // Keep this check inline so it only runs on the false path:
            N0(Oe, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Et == "object" && Et !== null && Et.$$typeof === Ft && Fy(Et) === Oe.type) {
              s(Q, Oe.sibling);
              var en = c(Oe, q.props);
              return en.ref = wf(Q, Oe, q), en.return = Q, en._debugSource = q._source, en._debugOwner = q._owner, en;
            }
            s(Q, Oe);
            break;
          } else
            n(Q, Oe);
          Oe = Oe.sibling;
        }
        if (q.type === Nn) {
          var jt = Zl(q.props.children, Q.mode, _e, q.key);
          return jt.return = Q, jt;
        } else {
          var vn = yv(q, Q.mode, _e);
          return vn.ref = wf(Q, ne, q), vn.return = Q, vn;
        }
      }
      function rn(Q, ne, q, _e) {
        for (var qe = q.key, Oe = ne; Oe !== null; ) {
          if (Oe.key === qe)
            if (Oe.tag === Me && Oe.stateNode.containerInfo === q.containerInfo && Oe.stateNode.implementation === q.implementation) {
              s(Q, Oe.sibling);
              var Et = c(Oe, q.children || []);
              return Et.return = Q, Et;
            } else {
              s(Q, Oe);
              break;
            }
          else
            n(Q, Oe);
          Oe = Oe.sibling;
        }
        var Pt = xv(q, Q.mode, _e);
        return Pt.return = Q, Pt;
      }
      function an(Q, ne, q, _e) {
        var qe = typeof q == "object" && q !== null && q.type === Nn && q.key === null;
        if (qe && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case cr:
              return g(Ke(Q, ne, q, _e));
            case Vt:
              return g(rn(Q, ne, q, _e));
            case Ft: {
              var Oe = q._payload, Et = q._init;
              return an(Q, ne, Et(Oe), _e);
            }
          }
          if (kt(q))
            return me(Q, ne, q, _e);
          if (oe(q))
            return Qe(Q, ne, q, _e);
          Vd(Q, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? g(ut(Q, ne, "" + q, _e)) : (typeof q == "function" && Id(Q), s(Q, ne));
      }
      return an;
    }
    var nc = Oy(!0), Uy = Oy(!1);
    function J1(e, n) {
      if (e !== null && n.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (n.child !== null) {
        var s = n.child, l = $u(s, s.pendingProps);
        for (n.child = l, l.return = n; s.sibling !== null; )
          s = s.sibling, l = l.sibling = $u(s, s.pendingProps), l.return = n;
        l.sibling = null;
      }
    }
    function K1(e, n) {
      for (var s = e.child; s !== null; )
        jE(s, n), s = s.sibling;
    }
    var zf = {}, Vl = ji(zf), Df = ji(zf), qd = ji(zf);
    function Yd(e) {
      if (e === zf)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Zp() {
      var e = Yd(qd.current);
      return e;
    }
    function Jp(e, n) {
      qt(qd, n, e), qt(Df, e, e), qt(Vl, zf, e);
      var s = Ba(n);
      bn(Vl, e), qt(Vl, s, e);
    }
    function rc(e) {
      bn(Vl, e), bn(Df, e), bn(qd, e);
    }
    function Af() {
      var e = Yd(Vl.current);
      return e;
    }
    function Ly(e) {
      var n = Yd(qd.current), s = Yd(Vl.current), l = Gn(s, e.type, n);
      s !== l && (qt(Df, e, e), qt(Vl, l, e));
    }
    function Kp(e) {
      Df.current === e && (bn(Vl, e), bn(Df, e));
    }
    var $1 = 0, By = 1, ky = 1, Nf = 2, Ra = ji($1);
    function $p(e, n) {
      return (e & n) !== 0;
    }
    function ic(e) {
      return e & By;
    }
    function em(e, n) {
      return e & By | n;
    }
    function eS(e, n) {
      return e | n;
    }
    function Il(e, n) {
      qt(Ra, n, e);
    }
    function ac(e) {
      bn(Ra, e);
    }
    function tS(e, n) {
      var s = e.memoizedState;
      return s !== null ? s.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Wd(e) {
      for (var n = e; n !== null; ) {
        if (n.tag === ee) {
          var s = n.memoizedState;
          if (s !== null) {
            var l = s.dehydrated;
            if (l === null || _t(l) || Dt(l))
              return n;
          }
        } else if (n.tag === He && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        n.memoizedProps.revealOrder !== void 0) {
          var c = (n.flags & gt) !== Se;
          if (c)
            return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e)
          return null;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
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
    ), hn = (
      /* */
      1
    ), ql = (
      /*  */
      2
    ), zn = (
      /*    */
      4
    ), ar = (
      /*   */
      8
    ), tm = [];
    function nm() {
      for (var e = 0; e < tm.length; e++) {
        var n = tm[e];
        gi ? n._workInProgressVersionPrimary = null : n._workInProgressVersionSecondary = null;
      }
      tm.length = 0;
    }
    function nS(e, n) {
      var s = n._getVersion, l = s(n._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, l] : e.mutableSourceEagerHydrationData.push(n, l);
    }
    var Fe = m.ReactCurrentDispatcher, ci = m.ReactCurrentBatchConfig, rm, sc;
    rm = /* @__PURE__ */ new Set();
    var lc = ce, Zt = null, Rr = null, jn = null, Qd = !1, Ff = !1, Of = 0, rS = 0, iS = 25, re = null, $i = null, Yl = -1, im = !1;
    function Ot() {
      {
        var e = re;
        $i === null ? $i = [e] : $i.push(e);
      }
    }
    function Te() {
      {
        var e = re;
        $i !== null && (Yl++, $i[Yl] !== e && aS(e));
      }
    }
    function uc(e) {
      e != null && !kt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function aS(e) {
      {
        var n = Ve(Zt);
        if (!rm.has(n) && (rm.add(n), $i !== null)) {
          for (var s = "", l = 30, c = 0; c <= Yl; c++) {
            for (var h = $i[c], g = c === Yl ? e : h, M = c + 1 + ". " + h; M.length < l; )
              M += " ";
            M += g + `
`, s += M;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, n, s);
        }
      }
    }
    function br() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function am(e, n) {
      if (im)
        return !1;
      if (n === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== n.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + n.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var s = 0; s < n.length && s < e.length; s++)
        if (!Pr(e[s], n[s]))
          return !1;
      return !0;
    }
    function oc(e, n, s, l, c, h) {
      lc = h, Zt = n, $i = e !== null ? e._debugHookTypes : null, Yl = -1, im = e !== null && e.type !== n.type, n.memoizedState = null, n.updateQueue = null, n.lanes = ce, e !== null && e.memoizedState !== null ? Fe.current = sg : $i !== null ? Fe.current = ag : Fe.current = ig;
      var g = s(l, c);
      if (Ff) {
        var M = 0;
        do {
          if (Ff = !1, Of = 0, M >= iS)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          M += 1, im = !1, Rr = null, jn = null, n.updateQueue = null, Yl = -1, Fe.current = lg, g = s(l, c);
        } while (Ff);
      }
      Fe.current = sh, n._debugHookTypes = $i;
      var w = Rr !== null && Rr.next !== null;
      if (lc = ce, Zt = null, Rr = null, jn = null, re = null, $i = null, Yl = -1, e !== null && (e.flags & Ar) !== (n.flags & Ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ht) !== rt && y("Internal React error: Expected static flag was missing. Please notify the React team."), Qd = !1, w)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return g;
    }
    function cc() {
      var e = Of !== 0;
      return Of = 0, e;
    }
    function Hy(e, n, s) {
      n.updateQueue = e.updateQueue, (n.mode & ii) !== rt ? n.flags &= ~(tl | yi | tr | pt) : n.flags &= ~(tr | pt), e.lanes = zs(e.lanes, s);
    }
    function Py() {
      if (Fe.current = sh, Qd) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var n = e.queue;
          n !== null && (n.pending = null), e = e.next;
        }
        Qd = !1;
      }
      lc = ce, Zt = null, Rr = null, jn = null, $i = null, Yl = -1, re = null, Ky = !1, Ff = !1, Of = 0;
    }
    function Vs() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return jn === null ? Zt.memoizedState = jn = e : jn = jn.next = e, jn;
    }
    function es() {
      var e;
      if (Rr === null) {
        var n = Zt.alternate;
        n !== null ? e = n.memoizedState : e = null;
      } else
        e = Rr.next;
      var s;
      if (jn === null ? s = Zt.memoizedState : s = jn.next, s !== null)
        jn = s, s = jn.next, Rr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Rr = e;
        var l = {
          memoizedState: Rr.memoizedState,
          baseState: Rr.baseState,
          baseQueue: Rr.baseQueue,
          queue: Rr.queue,
          next: null
        };
        jn === null ? Zt.memoizedState = jn = l : jn = jn.next = l;
      }
      return jn;
    }
    function jy() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function sm(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function lm(e, n, s) {
      var l = Vs(), c;
      s !== void 0 ? c = s(n) : c = n, l.memoizedState = l.baseState = c;
      var h = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      };
      l.queue = h;
      var g = h.dispatch = oS.bind(null, Zt, h);
      return [l.memoizedState, g];
    }
    function um(e, n, s) {
      var l = es(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var h = Rr, g = h.baseQueue, M = c.pending;
      if (M !== null) {
        if (g !== null) {
          var w = g.next, N = M.next;
          g.next = N, M.next = w;
        }
        h.baseQueue !== g && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), h.baseQueue = g = M, c.pending = null;
      }
      if (g !== null) {
        var U = g.next, I = h.baseState, Z = null, te = null, de = null, me = U;
        do {
          var Qe = me.lane;
          if (Cl(lc, Qe)) {
            if (de !== null) {
              var Ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mn,
                action: me.action,
                hasEagerState: me.hasEagerState,
                eagerState: me.eagerState,
                next: null
              };
              de = de.next = Ke;
            }
            if (me.hasEagerState)
              I = me.eagerState;
            else {
              var rn = me.action;
              I = e(I, rn);
            }
          } else {
            var ut = {
              lane: Qe,
              action: me.action,
              hasEagerState: me.hasEagerState,
              eagerState: me.eagerState,
              next: null
            };
            de === null ? (te = de = ut, Z = I) : de = de.next = ut, Zt.lanes = st(Zt.lanes, Qe), Vh(Qe);
          }
          me = me.next;
        } while (me !== null && me !== U);
        de === null ? Z = I : de.next = te, Pr(I, l.memoizedState) || xh(), l.memoizedState = I, l.baseState = Z, l.baseQueue = de, c.lastRenderedState = I;
      }
      var an = c.interleaved;
      if (an !== null) {
        var Q = an;
        do {
          var ne = Q.lane;
          Zt.lanes = st(Zt.lanes, ne), Vh(ne), Q = Q.next;
        } while (Q !== an);
      } else
        g === null && (c.lanes = ce);
      var q = c.dispatch;
      return [l.memoizedState, q];
    }
    function om(e, n, s) {
      var l = es(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var h = c.dispatch, g = c.pending, M = l.memoizedState;
      if (g !== null) {
        c.pending = null;
        var w = g.next, N = w;
        do {
          var U = N.action;
          M = e(M, U), N = N.next;
        } while (N !== w);
        Pr(M, l.memoizedState) || xh(), l.memoizedState = M, l.baseQueue === null && (l.baseState = M), c.lastRenderedState = M;
      }
      return [M, h];
    }
    function mT(e, n, s) {
    }
    function vT(e, n, s) {
    }
    function cm(e, n, s) {
      var l = Zt, c = Vs(), h, g = Er();
      if (g) {
        if (s === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        h = s(), sc || h !== s() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), sc = !0);
      } else {
        if (h = n(), !sc) {
          var M = n();
          Pr(h, M) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), sc = !0);
        }
        var w = kh();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(w, lc) || Vy(l, n, h);
      }
      c.memoizedState = h;
      var N = {
        value: h,
        getSnapshot: n
      };
      return c.queue = N, kf(qy.bind(null, l, N, e), [e]), l.flags |= tr, Lf(hn | ar, Iy.bind(null, l, N, h, n), void 0, null), h;
    }
    function Gd(e, n, s) {
      var l = Zt, c = es(), h = n();
      if (!sc) {
        var g = n();
        Pr(h, g) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), sc = !0);
      }
      var M = c.memoizedState, w = !Pr(M, h);
      w && (c.memoizedState = h, xh());
      var N = c.queue;
      if (Qu(qy.bind(null, l, N, e), [e]), N.getSnapshot !== n || w || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      jn !== null && jn.memoizedState.tag & hn) {
        l.flags |= tr, Lf(hn | ar, Iy.bind(null, l, N, h, n), void 0, null);
        var U = kh();
        if (U === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(U, lc) || Vy(l, n, h);
      }
      return h;
    }
    function Vy(e, n, s) {
      e.flags |= $s;
      var l = {
        getSnapshot: n,
        value: s
      }, c = Zt.updateQueue;
      if (c === null)
        c = jy(), Zt.updateQueue = c, c.stores = [l];
      else {
        var h = c.stores;
        h === null ? c.stores = [l] : h.push(l);
      }
    }
    function Iy(e, n, s, l) {
      n.value = s, n.getSnapshot = l, Yy(n) && Wy(e);
    }
    function qy(e, n, s) {
      var l = function() {
        Yy(n) && Wy(e);
      };
      return s(l);
    }
    function Yy(e) {
      var n = e.getSnapshot, s = e.value;
      try {
        var l = n();
        return !Pr(s, l);
      } catch {
        return !0;
      }
    }
    function Wy(e) {
      qn(e, vt, Xt);
    }
    function Uf(e) {
      var n = Vs();
      typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: sm,
        lastRenderedState: e
      };
      n.queue = s;
      var l = s.dispatch = cS.bind(null, Zt, s);
      return [n.memoizedState, l];
    }
    function Xd(e) {
      return um(sm);
    }
    function Zd(e) {
      return om(sm);
    }
    function Lf(e, n, s, l) {
      var c = {
        tag: e,
        create: n,
        destroy: s,
        deps: l,
        // Circular
        next: null
      }, h = Zt.updateQueue;
      if (h === null)
        h = jy(), Zt.updateQueue = h, h.lastEffect = c.next = c;
      else {
        var g = h.lastEffect;
        if (g === null)
          h.lastEffect = c.next = c;
        else {
          var M = g.next;
          g.next = c, c.next = M, h.lastEffect = c;
        }
      }
      return c;
    }
    function fm(e) {
      var n = Vs();
      {
        var s = {
          current: e
        };
        return n.memoizedState = s, s;
      }
    }
    function Jd(e) {
      var n = es();
      return n.memoizedState;
    }
    function Bf(e, n, s, l) {
      var c = Vs(), h = l === void 0 ? null : l;
      Zt.flags |= e, c.memoizedState = Lf(hn | n, s, void 0, h);
    }
    function Kd(e, n, s, l) {
      var c = es(), h = l === void 0 ? null : l, g = void 0;
      if (Rr !== null) {
        var M = Rr.memoizedState;
        if (g = M.destroy, h !== null) {
          var w = M.deps;
          if (am(h, w)) {
            c.memoizedState = Lf(n, s, g, h);
            return;
          }
        }
      }
      Zt.flags |= e, c.memoizedState = Lf(hn | n, s, g, h);
    }
    function kf(e, n) {
      return (Zt.mode & ii) !== rt ? Bf(tl | tr | el, ar, e, n) : Bf(tr | el, ar, e, n);
    }
    function Qu(e, n) {
      return Kd(tr, ar, e, n);
    }
    function dm(e, n) {
      return Bf(pt, ql, e, n);
    }
    function $d(e, n) {
      return Kd(pt, ql, e, n);
    }
    function hm(e, n) {
      var s = pt;
      return s |= oa, (Zt.mode & ii) !== rt && (s |= yi), Bf(s, zn, e, n);
    }
    function eh(e, n) {
      return Kd(pt, zn, e, n);
    }
    function Qy(e, n) {
      if (typeof n == "function") {
        var s = n, l = e();
        return s(l), function() {
          s(null);
        };
      } else if (n != null) {
        var c = n;
        c.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(c).join(", ") + "}");
        var h = e();
        return c.current = h, function() {
          c.current = null;
        };
      }
    }
    function pm(e, n, s) {
      typeof n != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var l = s != null ? s.concat([e]) : null, c = pt;
      return c |= oa, (Zt.mode & ii) !== rt && (c |= yi), Bf(c, zn, Qy.bind(null, n, e), l);
    }
    function th(e, n, s) {
      typeof n != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var l = s != null ? s.concat([e]) : null;
      return Kd(pt, zn, Qy.bind(null, n, e), l);
    }
    function sS(e, n) {
    }
    var nh = sS;
    function mm(e, n) {
      var s = Vs(), l = n === void 0 ? null : n;
      return s.memoizedState = [e, l], e;
    }
    function rh(e, n) {
      var s = es(), l = n === void 0 ? null : n, c = s.memoizedState;
      if (c !== null && l !== null) {
        var h = c[1];
        if (am(l, h))
          return c[0];
      }
      return s.memoizedState = [e, l], e;
    }
    function vm(e, n) {
      var s = Vs(), l = n === void 0 ? null : n, c = e();
      return s.memoizedState = [c, l], c;
    }
    function ih(e, n) {
      var s = es(), l = n === void 0 ? null : n, c = s.memoizedState;
      if (c !== null && l !== null) {
        var h = c[1];
        if (am(l, h))
          return c[0];
      }
      var g = e();
      return s.memoizedState = [g, l], g;
    }
    function ym(e) {
      var n = Uf(e), s = n[0], l = n[1];
      return kf(function() {
        var c = ci.transition;
        ci.transition = {};
        try {
          l(e);
        } finally {
          ci.transition = c;
        }
      }, [e]), s;
    }
    function Gy(e) {
      var n = Xd(), s = n[0], l = n[1];
      return Qu(function() {
        var c = ci.transition;
        ci.transition = {};
        try {
          l(e);
        } finally {
          ci.transition = c;
        }
      }, [e]), s;
    }
    function Xy(e) {
      var n = Zd(), s = n[0], l = n[1];
      return Qu(function() {
        var c = ci.transition;
        ci.transition = {};
        try {
          l(e);
        } finally {
          ci.transition = c;
        }
      }, [e]), s;
    }
    function lS(e, n, s) {
      var l = kr();
      Cn(Yo(l, zl)), e(!0);
      var c = ci.transition;
      ci.transition = {};
      var h = ci.transition;
      ci.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), n();
      } finally {
        if (Cn(l), ci.transition = c, c === null && h._updatedFibers) {
          var g = h._updatedFibers.size;
          g > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), h._updatedFibers.clear();
        }
      }
    }
    function gm() {
      var e = Uf(!1), n = e[0], s = e[1], l = lS.bind(null, s), c = Vs();
      return c.memoizedState = l, [n, l];
    }
    function Zy() {
      var e = Xd(), n = e[0], s = es(), l = s.memoizedState;
      return [n, l];
    }
    function Jy() {
      var e = Zd(), n = e[0], s = es(), l = s.memoizedState;
      return [n, l];
    }
    var Ky = !1;
    function uS() {
      return Ky;
    }
    function xm() {
      var e = Vs(), n = kh(), s = n.identifierPrefix, l;
      if (Er()) {
        var c = k1();
        l = ":" + s + "R" + c;
        var h = Of++;
        h > 0 && (l += "H" + h.toString(32)), l += ":";
      } else {
        var g = rS++;
        l = ":" + s + "r" + g.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function ah() {
      var e = es(), n = e.memoizedState;
      return n;
    }
    function oS(e, n, s) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gl(e), c = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($y(e))
        eg(n, c);
      else {
        tg(e, n, c);
        var h = Ir(), g = qn(e, l, h);
        g !== null && ng(g, n, l);
      }
      rg(e, l);
    }
    function cS(e, n, s) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gl(e), c = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($y(e))
        eg(n, c);
      else {
        tg(e, n, c);
        var h = e.alternate;
        if (e.lanes === ce && (h === null || h.lanes === ce)) {
          var g = n.lastRenderedReducer;
          if (g !== null) {
            var M;
            M = Fe.current, Fe.current = ba;
            try {
              var w = n.lastRenderedState, N = g(w, s);
              if (c.hasEagerState = !0, c.eagerState = N, Pr(N, w))
                return;
            } catch {
            } finally {
              Fe.current = M;
            }
          }
        }
        var U = Ir(), I = qn(e, l, U);
        I !== null && ng(I, n, l);
      }
      rg(e, l);
    }
    function $y(e) {
      var n = e.alternate;
      return e === Zt || n !== null && n === Zt;
    }
    function eg(e, n) {
      Ff = Qd = !0;
      var s = e.pending;
      s === null ? n.next = n : (n.next = s.next, s.next = n), e.pending = n;
    }
    function tg(e, n, s, l) {
      if (m0(e)) {
        var c = n.interleaved;
        c === null ? (s.next = s, Ge(n)) : (s.next = c.next, c.next = s), n.interleaved = s;
      } else {
        var h = n.pending;
        h === null ? s.next = s : (s.next = h.next, h.next = s), n.pending = s;
      }
    }
    function ng(e, n, s) {
      if (Vo(s)) {
        var l = n.lanes;
        l = Ya(l, e.pendingLanes);
        var c = st(l, s);
        n.lanes = c, Ns(e, c);
      }
    }
    function rg(e, n, s) {
      Ul(e, n);
    }
    var sh = {
      readContext: Ee,
      useCallback: br,
      useContext: br,
      useEffect: br,
      useImperativeHandle: br,
      useInsertionEffect: br,
      useLayoutEffect: br,
      useMemo: br,
      useReducer: br,
      useRef: br,
      useState: br,
      useDebugValue: br,
      useDeferredValue: br,
      useTransition: br,
      useMutableSource: br,
      useSyncExternalStore: br,
      useId: br,
      unstable_isNewReconciler: B
    }, ig = null, ag = null, sg = null, lg = null, ts = null, ba = null, lh = null;
    {
      var Sm = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      ig = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, n) {
          return re = "useCallback", Ot(), uc(n), mm(e, n);
        },
        useContext: function(e) {
          return re = "useContext", Ot(), Ee(e);
        },
        useEffect: function(e, n) {
          return re = "useEffect", Ot(), uc(n), kf(e, n);
        },
        useImperativeHandle: function(e, n, s) {
          return re = "useImperativeHandle", Ot(), uc(s), pm(e, n, s);
        },
        useInsertionEffect: function(e, n) {
          return re = "useInsertionEffect", Ot(), uc(n), dm(e, n);
        },
        useLayoutEffect: function(e, n) {
          return re = "useLayoutEffect", Ot(), uc(n), hm(e, n);
        },
        useMemo: function(e, n) {
          re = "useMemo", Ot(), uc(n);
          var s = Fe.current;
          Fe.current = ts;
          try {
            return vm(e, n);
          } finally {
            Fe.current = s;
          }
        },
        useReducer: function(e, n, s) {
          re = "useReducer", Ot();
          var l = Fe.current;
          Fe.current = ts;
          try {
            return lm(e, n, s);
          } finally {
            Fe.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", Ot(), fm(e);
        },
        useState: function(e) {
          re = "useState", Ot();
          var n = Fe.current;
          Fe.current = ts;
          try {
            return Uf(e);
          } finally {
            Fe.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return re = "useDebugValue", Ot(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Ot(), ym(e);
        },
        useTransition: function() {
          return re = "useTransition", Ot(), gm();
        },
        useMutableSource: function(e, n, s) {
          return re = "useMutableSource", Ot(), void 0;
        },
        useSyncExternalStore: function(e, n, s) {
          return re = "useSyncExternalStore", Ot(), cm(e, n, s);
        },
        useId: function() {
          return re = "useId", Ot(), xm();
        },
        unstable_isNewReconciler: B
      }, ag = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, n) {
          return re = "useCallback", Te(), mm(e, n);
        },
        useContext: function(e) {
          return re = "useContext", Te(), Ee(e);
        },
        useEffect: function(e, n) {
          return re = "useEffect", Te(), kf(e, n);
        },
        useImperativeHandle: function(e, n, s) {
          return re = "useImperativeHandle", Te(), pm(e, n, s);
        },
        useInsertionEffect: function(e, n) {
          return re = "useInsertionEffect", Te(), dm(e, n);
        },
        useLayoutEffect: function(e, n) {
          return re = "useLayoutEffect", Te(), hm(e, n);
        },
        useMemo: function(e, n) {
          re = "useMemo", Te();
          var s = Fe.current;
          Fe.current = ts;
          try {
            return vm(e, n);
          } finally {
            Fe.current = s;
          }
        },
        useReducer: function(e, n, s) {
          re = "useReducer", Te();
          var l = Fe.current;
          Fe.current = ts;
          try {
            return lm(e, n, s);
          } finally {
            Fe.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), fm(e);
        },
        useState: function(e) {
          re = "useState", Te();
          var n = Fe.current;
          Fe.current = ts;
          try {
            return Uf(e);
          } finally {
            Fe.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return re = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), ym(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), gm();
        },
        useMutableSource: function(e, n, s) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, n, s) {
          return re = "useSyncExternalStore", Te(), cm(e, n, s);
        },
        useId: function() {
          return re = "useId", Te(), xm();
        },
        unstable_isNewReconciler: B
      }, sg = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, n) {
          return re = "useCallback", Te(), rh(e, n);
        },
        useContext: function(e) {
          return re = "useContext", Te(), Ee(e);
        },
        useEffect: function(e, n) {
          return re = "useEffect", Te(), Qu(e, n);
        },
        useImperativeHandle: function(e, n, s) {
          return re = "useImperativeHandle", Te(), th(e, n, s);
        },
        useInsertionEffect: function(e, n) {
          return re = "useInsertionEffect", Te(), $d(e, n);
        },
        useLayoutEffect: function(e, n) {
          return re = "useLayoutEffect", Te(), eh(e, n);
        },
        useMemo: function(e, n) {
          re = "useMemo", Te();
          var s = Fe.current;
          Fe.current = ba;
          try {
            return ih(e, n);
          } finally {
            Fe.current = s;
          }
        },
        useReducer: function(e, n, s) {
          re = "useReducer", Te();
          var l = Fe.current;
          Fe.current = ba;
          try {
            return um(e, n, s);
          } finally {
            Fe.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), Jd();
        },
        useState: function(e) {
          re = "useState", Te();
          var n = Fe.current;
          Fe.current = ba;
          try {
            return Xd(e);
          } finally {
            Fe.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return re = "useDebugValue", Te(), nh();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), Gy(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), Zy();
        },
        useMutableSource: function(e, n, s) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, n, s) {
          return re = "useSyncExternalStore", Te(), Gd(e, n);
        },
        useId: function() {
          return re = "useId", Te(), ah();
        },
        unstable_isNewReconciler: B
      }, lg = {
        readContext: function(e) {
          return Ee(e);
        },
        useCallback: function(e, n) {
          return re = "useCallback", Te(), rh(e, n);
        },
        useContext: function(e) {
          return re = "useContext", Te(), Ee(e);
        },
        useEffect: function(e, n) {
          return re = "useEffect", Te(), Qu(e, n);
        },
        useImperativeHandle: function(e, n, s) {
          return re = "useImperativeHandle", Te(), th(e, n, s);
        },
        useInsertionEffect: function(e, n) {
          return re = "useInsertionEffect", Te(), $d(e, n);
        },
        useLayoutEffect: function(e, n) {
          return re = "useLayoutEffect", Te(), eh(e, n);
        },
        useMemo: function(e, n) {
          re = "useMemo", Te();
          var s = Fe.current;
          Fe.current = lh;
          try {
            return ih(e, n);
          } finally {
            Fe.current = s;
          }
        },
        useReducer: function(e, n, s) {
          re = "useReducer", Te();
          var l = Fe.current;
          Fe.current = lh;
          try {
            return om(e, n, s);
          } finally {
            Fe.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), Jd();
        },
        useState: function(e) {
          re = "useState", Te();
          var n = Fe.current;
          Fe.current = lh;
          try {
            return Zd(e);
          } finally {
            Fe.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return re = "useDebugValue", Te(), nh();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), Xy(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), Jy();
        },
        useMutableSource: function(e, n, s) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, n, s) {
          return re = "useSyncExternalStore", Te(), Gd(e, n);
        },
        useId: function() {
          return re = "useId", Te(), ah();
        },
        unstable_isNewReconciler: B
      }, ts = {
        readContext: function(e) {
          return Sm(), Ee(e);
        },
        useCallback: function(e, n) {
          return re = "useCallback", it(), Ot(), mm(e, n);
        },
        useContext: function(e) {
          return re = "useContext", it(), Ot(), Ee(e);
        },
        useEffect: function(e, n) {
          return re = "useEffect", it(), Ot(), kf(e, n);
        },
        useImperativeHandle: function(e, n, s) {
          return re = "useImperativeHandle", it(), Ot(), pm(e, n, s);
        },
        useInsertionEffect: function(e, n) {
          return re = "useInsertionEffect", it(), Ot(), dm(e, n);
        },
        useLayoutEffect: function(e, n) {
          return re = "useLayoutEffect", it(), Ot(), hm(e, n);
        },
        useMemo: function(e, n) {
          re = "useMemo", it(), Ot();
          var s = Fe.current;
          Fe.current = ts;
          try {
            return vm(e, n);
          } finally {
            Fe.current = s;
          }
        },
        useReducer: function(e, n, s) {
          re = "useReducer", it(), Ot();
          var l = Fe.current;
          Fe.current = ts;
          try {
            return lm(e, n, s);
          } finally {
            Fe.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", it(), Ot(), fm(e);
        },
        useState: function(e) {
          re = "useState", it(), Ot();
          var n = Fe.current;
          Fe.current = ts;
          try {
            return Uf(e);
          } finally {
            Fe.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return re = "useDebugValue", it(), Ot(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", it(), Ot(), ym(e);
        },
        useTransition: function() {
          return re = "useTransition", it(), Ot(), gm();
        },
        useMutableSource: function(e, n, s) {
          return re = "useMutableSource", it(), Ot(), void 0;
        },
        useSyncExternalStore: function(e, n, s) {
          return re = "useSyncExternalStore", it(), Ot(), cm(e, n, s);
        },
        useId: function() {
          return re = "useId", it(), Ot(), xm();
        },
        unstable_isNewReconciler: B
      }, ba = {
        readContext: function(e) {
          return Sm(), Ee(e);
        },
        useCallback: function(e, n) {
          return re = "useCallback", it(), Te(), rh(e, n);
        },
        useContext: function(e) {
          return re = "useContext", it(), Te(), Ee(e);
        },
        useEffect: function(e, n) {
          return re = "useEffect", it(), Te(), Qu(e, n);
        },
        useImperativeHandle: function(e, n, s) {
          return re = "useImperativeHandle", it(), Te(), th(e, n, s);
        },
        useInsertionEffect: function(e, n) {
          return re = "useInsertionEffect", it(), Te(), $d(e, n);
        },
        useLayoutEffect: function(e, n) {
          return re = "useLayoutEffect", it(), Te(), eh(e, n);
        },
        useMemo: function(e, n) {
          re = "useMemo", it(), Te();
          var s = Fe.current;
          Fe.current = ba;
          try {
            return ih(e, n);
          } finally {
            Fe.current = s;
          }
        },
        useReducer: function(e, n, s) {
          re = "useReducer", it(), Te();
          var l = Fe.current;
          Fe.current = ba;
          try {
            return um(e, n, s);
          } finally {
            Fe.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", it(), Te(), Jd();
        },
        useState: function(e) {
          re = "useState", it(), Te();
          var n = Fe.current;
          Fe.current = ba;
          try {
            return Xd(e);
          } finally {
            Fe.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return re = "useDebugValue", it(), Te(), nh();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", it(), Te(), Gy(e);
        },
        useTransition: function() {
          return re = "useTransition", it(), Te(), Zy();
        },
        useMutableSource: function(e, n, s) {
          return re = "useMutableSource", it(), Te(), void 0;
        },
        useSyncExternalStore: function(e, n, s) {
          return re = "useSyncExternalStore", it(), Te(), Gd(e, n);
        },
        useId: function() {
          return re = "useId", it(), Te(), ah();
        },
        unstable_isNewReconciler: B
      }, lh = {
        readContext: function(e) {
          return Sm(), Ee(e);
        },
        useCallback: function(e, n) {
          return re = "useCallback", it(), Te(), rh(e, n);
        },
        useContext: function(e) {
          return re = "useContext", it(), Te(), Ee(e);
        },
        useEffect: function(e, n) {
          return re = "useEffect", it(), Te(), Qu(e, n);
        },
        useImperativeHandle: function(e, n, s) {
          return re = "useImperativeHandle", it(), Te(), th(e, n, s);
        },
        useInsertionEffect: function(e, n) {
          return re = "useInsertionEffect", it(), Te(), $d(e, n);
        },
        useLayoutEffect: function(e, n) {
          return re = "useLayoutEffect", it(), Te(), eh(e, n);
        },
        useMemo: function(e, n) {
          re = "useMemo", it(), Te();
          var s = Fe.current;
          Fe.current = ba;
          try {
            return ih(e, n);
          } finally {
            Fe.current = s;
          }
        },
        useReducer: function(e, n, s) {
          re = "useReducer", it(), Te();
          var l = Fe.current;
          Fe.current = ba;
          try {
            return om(e, n, s);
          } finally {
            Fe.current = l;
          }
        },
        useRef: function(e) {
          return re = "useRef", it(), Te(), Jd();
        },
        useState: function(e) {
          re = "useState", it(), Te();
          var n = Fe.current;
          Fe.current = ba;
          try {
            return Zd(e);
          } finally {
            Fe.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return re = "useDebugValue", it(), Te(), nh();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", it(), Te(), Xy(e);
        },
        useTransition: function() {
          return re = "useTransition", it(), Te(), Jy();
        },
        useMutableSource: function(e, n, s) {
          return re = "useMutableSource", it(), Te(), void 0;
        },
        useSyncExternalStore: function(e, n, s) {
          return re = "useSyncExternalStore", it(), Te(), Gd(e, n);
        },
        useId: function() {
          return re = "useId", it(), Te(), ah();
        },
        unstable_isNewReconciler: B
      };
    }
    var Wl = d.unstable_now, ug = 0, uh = -1, Hf = -1, oh = -1, _m = !1, ch = !1;
    function og() {
      return _m;
    }
    function fS() {
      ch = !0;
    }
    function dS() {
      _m = !1, ch = !1;
    }
    function hS() {
      _m = ch, ch = !1;
    }
    function cg() {
      return ug;
    }
    function fg() {
      ug = Wl();
    }
    function Em(e) {
      Hf = Wl(), e.actualStartTime < 0 && (e.actualStartTime = Wl());
    }
    function dg(e) {
      Hf = -1;
    }
    function fh(e, n) {
      if (Hf >= 0) {
        var s = Wl() - Hf;
        e.actualDuration += s, n && (e.selfBaseDuration = s), Hf = -1;
      }
    }
    function ea(e) {
      if (uh >= 0) {
        var n = Wl() - uh;
        uh = -1;
        for (var s = e.return; s !== null; ) {
          switch (s.tag) {
            case ye:
              var l = s.stateNode;
              l.effectDuration += n;
              return;
            case ae:
              var c = s.stateNode;
              c.effectDuration += n;
              return;
          }
          s = s.return;
        }
      }
    }
    function Rm(e) {
      if (oh >= 0) {
        var n = Wl() - oh;
        oh = -1;
        for (var s = e.return; s !== null; ) {
          switch (s.tag) {
            case ye:
              var l = s.stateNode;
              l !== null && (l.passiveEffectDuration += n);
              return;
            case ae:
              var c = s.stateNode;
              c !== null && (c.passiveEffectDuration += n);
              return;
          }
          s = s.return;
        }
      }
    }
    function ta() {
      uh = Wl();
    }
    function bm() {
      oh = Wl();
    }
    function Tm(e) {
      for (var n = e.child; n; )
        e.actualDuration += n.actualDuration, n = n.sibling;
    }
    function dh(e, n) {
      return {
        value: e,
        source: n,
        stack: Ud(n)
      };
    }
    function pS(e, n) {
      return !0;
    }
    function Mm(e, n) {
      try {
        var s = pS(e, n);
        if (s === !1)
          return;
        var l = n.value, c = n.source, h = n.stack, g = h !== null ? h : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(l);
        }
        var M = c ? Ve(c) : null, w = M ? "The above error occurred in the <" + M + "> component:" : "The above error occurred in one of your React components:", N;
        if (e.tag === ye)
          N = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var U = Ve(e) || "Anonymous";
          N = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + U + ".");
        }
        var I = w + `
` + g + `

` + ("" + N);
        console.error(I);
      } catch (Z) {
        setTimeout(function() {
          throw Z;
        });
      }
    }
    var mS = typeof WeakMap == "function" ? WeakMap : Map;
    function hg(e, n, s) {
      var l = Je(Xt, s);
      l.tag = Y, l.payload = {
        element: null
      };
      var c = n.value;
      return l.callback = function() {
        _E(c), Mm(e, n);
      }, l;
    }
    function Cm(e, n, s) {
      var l = Je(Xt, s);
      l.tag = Y;
      var c = e.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var h = n.value;
        l.payload = function() {
          return c(h);
        }, l.callback = function() {
          F0(e), Mm(e, n);
        };
      }
      var g = e.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" && (l.callback = function() {
        F0(e), Mm(e, n), typeof c != "function" && xE(this);
        var w = n.value, N = n.stack;
        this.componentDidCatch(w, {
          componentStack: N !== null ? N : ""
        }), typeof c != "function" && (on(e.lanes, vt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ve(e) || "Unknown"));
      }), l;
    }
    function pg(e, n, s) {
      var l = e.pingCache, c;
      if (l === null ? (l = e.pingCache = new mS(), c = /* @__PURE__ */ new Set(), l.set(n, c)) : (c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c))), !c.has(s)) {
        c.add(s);
        var h = EE.bind(null, e, n, s);
        gr && td(e, s), n.then(h, h);
      }
    }
    function vS(e, n, s, l) {
      var c = e.updateQueue;
      if (c === null) {
        var h = /* @__PURE__ */ new Set();
        h.add(s), e.updateQueue = h;
      } else
        c.add(s);
    }
    function yS(e, n) {
      var s = e.tag;
      if ((e.mode & Ht) === rt && (s === $ || s === H || s === j)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function mg(e) {
      var n = e;
      do {
        if (n.tag === ee && tS(n))
          return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function vg(e, n, s, l, c) {
      if ((e.mode & Ht) === rt) {
        if (e === n)
          e.flags |= Qn;
        else {
          if (e.flags |= gt, s.flags |= _n, s.flags &= ~(fs | Oa), Jr && A) {
            var h = e.alternate;
            if (h === null) {
              var g = e.child, M = g.child;
              if (M !== null) {
                var w = M.memoizedProps.children, N = Ue("hidden", w);
                M.pendingProps = N, M.memoizedProps = N;
              }
            }
          }
          if (s.tag === ue) {
            var U = s.alternate;
            if (U === null)
              s.tag = ke;
            else {
              var I = Je(Xt, vt);
              I.tag = rr, dt(s, I);
            }
          }
          s.lanes = st(s.lanes, vt);
        }
        return e;
      }
      return e.flags |= Qn, e.lanes = c, e;
    }
    function gS(e, n, s, l, c) {
      if (s.flags |= Oa, gr && td(e, c), l !== null && typeof l == "object" && typeof l.then == "function") {
        var h = l;
        yS(s);
        var g = mg(n);
        if (g !== null) {
          g.flags &= ~Gr, vg(g, n, s, e, c), g.mode & Ht && pg(e, h, c), vS(g, e, h);
          return;
        } else {
          if (!lf(c)) {
            pg(e, h, c), sv();
            return;
          }
          var M = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = M;
        }
      } else if (Er() && s.mode & Ht) {
        I1();
        var w = mg(n);
        if (w !== null) {
          (w.flags & Qn) === Se && (w.flags |= Gr), vg(w, n, s, e, c), qp(l);
          return;
        }
      }
      fE(l), l = dh(l, s);
      var N = n;
      do {
        switch (N.tag) {
          case ye: {
            var U = l;
            N.flags |= Qn;
            var I = Ml(c);
            N.lanes = st(N.lanes, I);
            var Z = hg(N, U, I);
            Mt(N, Z);
            return;
          }
          case ue:
            var te = l, de = N.type, me = N.stateNode;
            if ((N.flags & gt) === Se && (typeof de.getDerivedStateFromError == "function" || me !== null && typeof me.componentDidCatch == "function" && !b0(me))) {
              N.flags |= Qn;
              var Qe = Ml(c);
              N.lanes = st(N.lanes, Qe);
              var ut = Cm(N, te, Qe);
              Mt(N, ut);
              return;
            }
            break;
        }
        N = N.return;
      } while (N !== null);
    }
    function xS() {
      return null;
    }
    function ns(e) {
      e.flags |= pt;
    }
    function yg(e) {
      e.flags |= Ui, e.flags |= ou;
    }
    function gg(e, n) {
      var s = e !== null && e.child === n.child;
      if (s)
        return !0;
      if ((n.flags & pr) !== Se)
        return !1;
      for (var l = n.child; l !== null; ) {
        if ((l.flags & ds) !== Se || (l.subtreeFlags & ds) !== Se)
          return !1;
        l = l.sibling;
      }
      return !0;
    }
    var Pf, jf, hh, ph;
    if (Fr)
      Pf = function(e, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === Re || c.tag === ge)
            Hi(e, c.stateNode);
          else if (c.tag !== Me) {
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
      }, jf = function(e, n) {
      }, hh = function(e, n, s, l, c) {
        var h = e.memoizedProps;
        if (h !== l) {
          var g = n.stateNode, M = Af(), w = mr(g, s, h, l, c, M);
          n.updateQueue = w, w && ns(n);
        }
      }, ph = function(e, n, s, l) {
        s !== l && ns(n);
      };
    else if (Jr) {
      Pf = function(e, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === Re) {
            var h = c.stateNode;
            if (s && l) {
              var g = c.memoizedProps, M = c.type;
              h = nt(h, M, g, c);
            }
            Hi(e, h);
          } else if (c.tag === ge) {
            var w = c.stateNode;
            if (s && l) {
              var N = c.memoizedProps;
              w = ct(w, N, c);
            }
            Hi(e, w);
          } else if (c.tag !== Me) {
            if (c.tag === at && c.memoizedState !== null) {
              var U = c.child;
              U !== null && (U.return = c), Pf(e, c, !0, !0);
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
      var xg = function(e, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === Re) {
            var h = c.stateNode;
            if (s && l) {
              var g = c.memoizedProps, M = c.type;
              h = nt(h, M, g, c);
            }
            J(e, h);
          } else if (c.tag === ge) {
            var w = c.stateNode;
            if (s && l) {
              var N = c.memoizedProps;
              w = ct(w, N, c);
            }
            J(e, w);
          } else if (c.tag !== Me) {
            if (c.tag === at && c.memoizedState !== null) {
              var U = c.child;
              U !== null && (U.return = c), xg(e, c, !0, !0);
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
      jf = function(e, n) {
        var s = n.stateNode, l = gg(e, n);
        if (!l) {
          var c = s.containerInfo, h = W(c);
          xg(h, n, !1, !1), s.pendingChildren = h, ns(n), pe(c, h);
        }
      }, hh = function(e, n, s, l, c) {
        var h = e.stateNode, g = e.memoizedProps, M = gg(e, n);
        if (M && g === l) {
          n.stateNode = h;
          return;
        }
        var w = n.stateNode, N = Af(), U = null;
        if (g !== l && (U = mr(w, s, g, l, c, N)), M && U === null) {
          n.stateNode = h;
          return;
        }
        var I = F(h, U, s, g, l, n, M, w);
        Ha(I, s, l, c, N) && ns(n), n.stateNode = I, M ? ns(n) : Pf(I, n, !1, !1);
      }, ph = function(e, n, s, l) {
        if (s !== l) {
          var c = Zp(), h = Af();
          n.stateNode = ho(l, c, h, n), ns(n);
        } else
          n.stateNode = e.stateNode;
      };
    } else
      jf = function(e, n) {
      }, hh = function(e, n, s, l, c) {
      }, ph = function(e, n, s, l) {
      };
    function Vf(e, n) {
      if (!Er())
        switch (e.tailMode) {
          case "hidden": {
            for (var s = e.tail, l = null; s !== null; )
              s.alternate !== null && (l = s), s = s.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var c = e.tail, h = null; c !== null; )
              c.alternate !== null && (h = c), c = c.sibling;
            h === null ? !n && e.tail !== null ? e.tail.sibling = null : e.tail = null : h.sibling = null;
            break;
          }
        }
    }
    function sr(e) {
      var n = e.alternate !== null && e.alternate.child === e.child, s = ce, l = Se;
      if (n) {
        if ((e.mode & Ct) !== rt) {
          for (var w = e.selfBaseDuration, N = e.child; N !== null; )
            s = st(s, st(N.lanes, N.childLanes)), l |= N.subtreeFlags & Ar, l |= N.flags & Ar, w += N.treeBaseDuration, N = N.sibling;
          e.treeBaseDuration = w;
        } else
          for (var U = e.child; U !== null; )
            s = st(s, st(U.lanes, U.childLanes)), l |= U.subtreeFlags & Ar, l |= U.flags & Ar, U.return = e, U = U.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & Ct) !== rt) {
          for (var c = e.actualDuration, h = e.selfBaseDuration, g = e.child; g !== null; )
            s = st(s, st(g.lanes, g.childLanes)), l |= g.subtreeFlags, l |= g.flags, c += g.actualDuration, h += g.treeBaseDuration, g = g.sibling;
          e.actualDuration = c, e.treeBaseDuration = h;
        } else
          for (var M = e.child; M !== null; )
            s = st(s, st(M.lanes, M.childLanes)), l |= M.subtreeFlags, l |= M.flags, M.return = e, M = M.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = s, n;
    }
    function Sg(e, n, s) {
      var l = n.pendingProps;
      switch (Hp(n), n.tag) {
        case et:
        case Be:
        case j:
        case $:
        case H:
        case Le:
        case Ze:
        case ae:
        case Ye:
        case O:
          return sr(n), null;
        case ue: {
          var c = n.type;
          return ri(c) && yl(n), sr(n), null;
        }
        case ye: {
          var h = n.stateNode;
          if (rc(n), bu(n), nm(), h.pendingContext && (h.context = h.pendingContext, h.pendingContext = null), e === null || e.child === null) {
            var g = Cf(n);
            if (g)
              ns(n);
            else if (e !== null) {
              var M = e.memoizedState;
              // Check if this is a client root
              (!M.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (n.flags & Gr) !== Se) && (n.flags |= Dr, Ay());
            }
          }
          return jf(e, n), sr(n), null;
        }
        case Re: {
          Kp(n);
          var w = Zp(), N = n.type;
          if (e !== null && n.stateNode != null)
            hh(e, n, N, l, w), e.ref !== n.ref && yg(n);
          else {
            if (!l) {
              if (n.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return sr(n), null;
            }
            var U = Af(), I = Cf(n);
            if (I)
              W1(n, w, U) && ns(n);
            else {
              var Z = ms(N, l, w, U, n);
              Pf(Z, n, !1, !1), n.stateNode = Z, Ha(Z, N, l, w, U) && ns(n);
            }
            n.ref !== null && yg(n);
          }
          return sr(n), null;
        }
        case ge: {
          var te = l;
          if (e && n.stateNode != null) {
            var de = e.memoizedProps;
            ph(e, n, de, te);
          } else {
            if (typeof te != "string" && n.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var me = Zp(), Qe = Af(), ut = Cf(n);
            ut ? Q1(n) && ns(n) : n.stateNode = ho(te, me, Qe, n);
          }
          return sr(n), null;
        }
        case ee: {
          ac(n);
          var Ke = n.memoizedState;
          {
            if (Z1() && (n.mode & Ht) !== rt && (n.flags & gt) === Se)
              return Dy(n), tc(), n.flags |= Gr | Oa | Qn, n;
            if (Ke !== null && Ke.dehydrated !== null) {
              var rn = Cf(n);
              if (e === null) {
                if (!rn)
                  throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (G1(n), sr(n), (n.mode & Ct) !== rt) {
                  var an = Ke !== null;
                  if (an) {
                    var Q = n.child;
                    Q !== null && (n.treeBaseDuration -= Q.treeBaseDuration);
                  }
                }
                return null;
              } else {
                if (tc(), (n.flags & gt) === Se && (n.memoizedState = null), n.flags |= pt, sr(n), (n.mode & Ct) !== rt) {
                  var ne = Ke !== null;
                  if (ne) {
                    var q = n.child;
                    q !== null && (n.treeBaseDuration -= q.treeBaseDuration);
                  }
                }
                return null;
              }
            }
            Ay();
          }
          if ((n.flags & gt) !== Se)
            return n.lanes = s, (n.mode & Ct) !== rt && Tm(n), n;
          var _e = Ke !== null, qe = !1;
          if (e === null)
            Cf(n);
          else {
            var Oe = e.memoizedState;
            qe = Oe !== null;
          }
          if (_e && !qe) {
            var Et = n.child;
            if (Et.flags |= Li, (n.mode & Ht) !== rt) {
              var Pt = e === null && (n.memoizedProps.unstable_avoidThisFallback !== !0 || !se);
              Pt || $p(Ra.current, ky) ? cE() : sv();
            }
          }
          var en = n.updateQueue;
          if (en !== null && (n.flags |= pt), sr(n), (n.mode & Ct) !== rt && _e) {
            var jt = n.child;
            jt !== null && (n.treeBaseDuration -= jt.treeBaseDuration);
          }
          return null;
        }
        case Me:
          return rc(n), jf(e, n), e === null && vs(n.stateNode.containerInfo), sr(n), null;
        case xe:
          var vn = n.type._context;
          return x(vn, n), sr(n), null;
        case ke: {
          var Nt = n.type;
          return ri(Nt) && yl(n), sr(n), null;
        }
        case He: {
          ac(n);
          var yt = n.memoizedState;
          if (yt === null)
            return sr(n), null;
          var Dn = (n.flags & gt) !== Se, yn = yt.rendering;
          if (yn === null)
            if (Dn)
              Vf(yt, !1);
            else {
              var ia = dE() && (e === null || (e.flags & gt) === Se);
              if (!ia)
                for (var or = n.child; or !== null; ) {
                  var Di = Wd(or);
                  if (Di !== null) {
                    Dn = !0, n.flags |= gt, Vf(yt, !1);
                    var Ai = Di.updateQueue;
                    return Ai !== null && (n.updateQueue = Ai, n.flags |= pt), n.subtreeFlags = Se, K1(n, s), Il(n, em(Ra.current, Nf)), n.child;
                  }
                  or = or.sibling;
                }
              yt.tail !== null && cn() > p0() && (n.flags |= gt, Dn = !0, Vf(yt, !1), n.lanes = Rl);
            }
          else {
            if (!Dn) {
              var as = Wd(yn);
              if (as !== null) {
                n.flags |= gt, Dn = !0;
                var yc = as.updateQueue;
                if (yc !== null && (n.updateQueue = yc, n.flags |= pt), Vf(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !yn.alternate && !Er())
                  return sr(n), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                cn() * 2 - yt.renderingStartTime > p0() && s !== Yt && (n.flags |= gt, Dn = !0, Vf(yt, !1), n.lanes = Rl);
            }
            if (yt.isBackwards)
              yn.sibling = n.child, n.child = yn;
            else {
              var gc = yt.last;
              gc !== null ? gc.sibling = yn : n.child = yn, yt.last = yn;
            }
          }
          if (yt.tail !== null) {
            var Ni = yt.tail;
            yt.rendering = Ni, yt.tail = Ni.sibling, yt.renderingStartTime = cn(), Ni.sibling = null;
            var eo = Ra.current;
            return Dn ? eo = em(eo, Nf) : eo = ic(eo), Il(n, eo), Ni;
          }
          return sr(n), null;
        }
        case tt:
          break;
        case at:
        case ot: {
          av(n);
          var bv = n.memoizedState, sx = bv !== null;
          if (e !== null) {
            var cR = e.memoizedState, fR = cR !== null;
            fR !== sx && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !V && (n.flags |= Li);
          }
          return !sx || (n.mode & Ht) === rt ? sr(n) : on(rs, Yt) && (sr(n), Fr && n.subtreeFlags & (Ut | pt) && (n.flags |= Li)), null;
        }
        case Gt:
          return null;
        case An:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    var If = m.ReactCurrentOwner, Ta = !1, wm, qf, zm, Dm, Am, Gu, Nm, mh;
    wm = {}, qf = {}, zm = {}, Dm = {}, Am = {}, Gu = !1, Nm = {}, mh = {};
    function Vr(e, n, s, l) {
      e === null ? n.child = Uy(n, null, s, l) : n.child = nc(n, e.child, s, l);
    }
    function SS(e, n, s, l) {
      n.child = nc(n, e.child, null, l), n.child = nc(n, null, s, l);
    }
    function _g(e, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = s.propTypes;
        h && Br(
          h,
          l,
          // Resolved props
          "prop",
          Ne(s)
        );
      }
      var g = s.render, M = n.ref, w, N;
      he(n, c), Gi(n);
      {
        if (If.current = n, Xi(!0), w = oc(e, n, g, l, M, c), N = cc(), n.mode & un) {
          Tt(!0);
          try {
            w = oc(e, n, g, l, M, c), N = cc();
          } finally {
            Tt(!1);
          }
        }
        Xi(!1);
      }
      return Sa(), e !== null && !Ta ? (Hy(e, n, c), Is(e, n, c)) : (Er() && N && kp(n), n.flags |= Fn, Vr(e, n, w, c), n.child);
    }
    function Eg(e, n, s, l, c) {
      if (e === null) {
        var h = s.type;
        if (HE(h) && s.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        s.defaultProps === void 0) {
          var g = h;
          return g = vc(h), n.tag = j, n.type = g, Um(n, h), Rg(e, n, g, l, c);
        }
        {
          var M = h.propTypes;
          M && Br(
            M,
            l,
            // Resolved props
            "prop",
            Ne(h)
          );
        }
        var w = vv(s.type, null, l, n, n.mode, c);
        return w.ref = n.ref, w.return = n, n.child = w, w;
      }
      {
        var N = s.type, U = N.propTypes;
        U && Br(
          U,
          l,
          // Resolved props
          "prop",
          Ne(N)
        );
      }
      var I = e.child, Z = Hm(e, c);
      if (!Z) {
        var te = I.memoizedProps, de = s.compare;
        if (de = de !== null ? de : Us, de(te, l) && e.ref === n.ref)
          return Is(e, n, c);
      }
      n.flags |= Fn;
      var me = $u(I, l);
      return me.ref = n.ref, me.return = n, n.child = me, me;
    }
    function Rg(e, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = n.elementType;
        if (h.$$typeof === Ft) {
          var g = h, M = g._payload, w = g._init;
          try {
            h = w(M);
          } catch {
            h = null;
          }
          var N = h && h.propTypes;
          N && Br(
            N,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ne(h)
          );
        }
      }
      if (e !== null) {
        var U = e.memoizedProps;
        if (Us(U, l) && e.ref === n.ref && // Prevent bailout if the implementation changed due to hot reload.
        n.type === e.type)
          if (Ta = !1, Hm(e, c))
            (e.flags & _n) !== Se && (Ta = !0);
          else
            return n.lanes = e.lanes, Is(e, n, c);
      }
      return Fm(e, n, s, l, c);
    }
    function bg(e, n, s) {
      var l = n.pendingProps, c = l.children, h = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || V)
        if ((n.mode & Ht) === rt) {
          var g = {
            baseLanes: ce,
            cachePool: null
          };
          n.memoizedState = g, jh(n, s);
        } else if (on(s, Yt)) {
          var I = {
            baseLanes: ce,
            cachePool: null
          };
          n.memoizedState = I;
          var Z = h !== null ? h.baseLanes : s;
          jh(n, Z);
        } else {
          var M = null, w;
          if (h !== null) {
            var N = h.baseLanes;
            w = st(N, s);
          } else
            w = s;
          n.lanes = n.childLanes = Yt;
          var U = {
            baseLanes: w,
            cachePool: M
          };
          return n.memoizedState = U, n.updateQueue = null, jh(n, w), null;
        }
      else {
        var te;
        h !== null ? (te = st(h.baseLanes, s), n.memoizedState = null) : te = s, jh(n, te);
      }
      return Vr(e, n, c, s), n.child;
    }
    function _S(e, n, s) {
      var l = n.pendingProps;
      return Vr(e, n, l, s), n.child;
    }
    function ES(e, n, s) {
      var l = n.pendingProps.children;
      return Vr(e, n, l, s), n.child;
    }
    function RS(e, n, s) {
      {
        n.flags |= pt;
        {
          var l = n.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var c = n.pendingProps, h = c.children;
      return Vr(e, n, h, s), n.child;
    }
    function Tg(e, n) {
      var s = n.ref;
      (e === null && s !== null || e !== null && e.ref !== s) && (n.flags |= Ui, n.flags |= ou);
    }
    function Fm(e, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = s.propTypes;
        h && Br(
          h,
          l,
          // Resolved props
          "prop",
          Ne(s)
        );
      }
      var g;
      {
        var M = Vi(n, s, !0);
        g = vl(n, M);
      }
      var w, N;
      he(n, c), Gi(n);
      {
        if (If.current = n, Xi(!0), w = oc(e, n, s, l, g, c), N = cc(), n.mode & un) {
          Tt(!0);
          try {
            w = oc(e, n, s, l, g, c), N = cc();
          } finally {
            Tt(!1);
          }
        }
        Xi(!1);
      }
      return Sa(), e !== null && !Ta ? (Hy(e, n, c), Is(e, n, c)) : (Er() && N && kp(n), n.flags |= Fn, Vr(e, n, w, c), n.child);
    }
    function Mg(e, n, s, l, c) {
      {
        switch (V0(n)) {
          case !1: {
            var h = n.stateNode, g = n.type, M = new g(n.memoizedProps, h.context), w = M.state;
            h.updater.enqueueSetState(h, w, null);
            break;
          }
          case !0: {
            n.flags |= gt, n.flags |= Qn;
            var N = new Error("Simulated error coming from DevTools"), U = Ml(c);
            n.lanes = st(n.lanes, U);
            var I = Cm(n, dh(N, n), U);
            Mt(n, I);
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
            Ne(s)
          );
        }
      }
      var te;
      ri(s) ? (te = !0, qi(n)) : te = !1, he(n, c);
      var de = n.stateNode, me;
      de === null ? (e !== null && (e.alternate = null, n.alternate = null, n.flags |= Ut), Ey(n, s, l), Bp(n, s, l, c), me = !0) : e === null ? me = O1(n, s, l, c) : me = U1(e, n, s, l, c);
      var Qe = Om(e, n, s, me, te, c);
      {
        var ut = n.stateNode;
        me && ut.props !== l && (Gu || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ve(n) || "a component"), Gu = !0);
      }
      return Qe;
    }
    function Om(e, n, s, l, c, h) {
      Tg(e, n);
      var g = (n.flags & gt) !== Se;
      if (!l && !g)
        return c && Tu(n, s, !1), Is(e, n, h);
      var M = n.stateNode;
      If.current = n;
      var w;
      if (g && typeof s.getDerivedStateFromError != "function")
        w = null, dg();
      else {
        Gi(n);
        {
          if (Xi(!0), w = M.render(), n.mode & un) {
            Tt(!0);
            try {
              M.render();
            } finally {
              Tt(!1);
            }
          }
          Xi(!1);
        }
        Sa();
      }
      return n.flags |= Fn, e !== null && g ? SS(e, n, w, h) : Vr(e, n, w, h), n.memoizedState = M.state, c && Tu(n, s, !0), n.child;
    }
    function Cg(e) {
      var n = e.stateNode;
      n.pendingContext ? Ii(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ii(e, n.context, !1), Jp(e, n.containerInfo);
    }
    function bS(e, n, s) {
      if (Cg(n), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = n.pendingProps, c = n.memoizedState, h = c.element;
      lt(e, n), Ko(n, l, null, s);
      var g = n.memoizedState;
      n.stateNode;
      var M = g.element;
      if (Rn && c.isDehydrated) {
        var w = {
          element: M,
          isDehydrated: !1,
          cache: g.cache,
          transitions: g.transitions
        }, N = n.updateQueue;
        if (N.baseState = w, n.memoizedState = w, n.flags & Gr) {
          var U = new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.");
          return wg(e, n, M, s, U);
        } else if (M !== h) {
          var I = new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.");
          return wg(e, n, M, s, I);
        } else {
          q1(n);
          var Z = Uy(n, null, M, s);
          n.child = Z;
          for (var te = Z; te; )
            te.flags = te.flags & ~Ut | nr, te = te.sibling;
        }
      } else {
        if (tc(), M === h)
          return Is(e, n, s);
        Vr(e, n, M, s);
      }
      return n.child;
    }
    function wg(e, n, s, l, c) {
      return tc(), qp(c), n.flags |= Gr, Vr(e, n, s, l), n.child;
    }
    function TS(e, n, s) {
      Ly(n), e === null && Ip(n);
      var l = n.type, c = n.pendingProps, h = e !== null ? e.memoizedProps : null, g = c.children, M = rl(l, c);
      return M ? g = null : h !== null && rl(l, h) && (n.flags |= Fa), Tg(e, n), Vr(e, n, g, s), n.child;
    }
    function MS(e, n) {
      return e === null && Ip(n), null;
    }
    function CS(e, n, s, l) {
      e !== null && (e.alternate = null, n.alternate = null, n.flags |= Ut);
      var c = n.pendingProps, h = s, g = h._payload, M = h._init, w = M(g);
      n.type = w;
      var N = n.tag = PE(w), U = oi(w, c), I;
      switch (N) {
        case $:
          return Um(n, w), n.type = w = vc(w), I = Fm(null, n, w, U, l), I;
        case ue:
          return n.type = w = cv(w), I = Mg(null, n, w, U, l), I;
        case H:
          return n.type = w = fv(w), I = _g(null, n, w, U, l), I;
        case O: {
          if (n.type !== n.elementType) {
            var Z = w.propTypes;
            Z && Br(
              Z,
              U,
              // Resolved for outer only
              "prop",
              Ne(w)
            );
          }
          return I = Eg(
            null,
            n,
            w,
            oi(w.type, U),
            // The inner type can have defaults too
            l
          ), I;
        }
      }
      var te = "";
      throw w !== null && typeof w == "object" && w.$$typeof === Ft && (te = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + w + ". " + ("Lazy element type must resolve to a class or function." + te));
    }
    function wS(e, n, s, l, c) {
      e !== null && (e.alternate = null, n.alternate = null, n.flags |= Ut), n.tag = ue;
      var h;
      return ri(s) ? (h = !0, qi(n)) : h = !1, he(n, c), Ey(n, s, l), Bp(n, s, l, c), Om(null, n, s, !0, h, c);
    }
    function zS(e, n, s, l) {
      e !== null && (e.alternate = null, n.alternate = null, n.flags |= Ut);
      var c = n.pendingProps, h;
      {
        var g = Vi(n, s, !1);
        h = vl(n, g);
      }
      he(n, l);
      var M, w;
      Gi(n);
      {
        if (s.prototype && typeof s.prototype.render == "function") {
          var N = Ne(s) || "Unknown";
          wm[N] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", N, N), wm[N] = !0);
        }
        n.mode & un && ui.recordLegacyContextWarning(n, null), Xi(!0), If.current = n, M = oc(null, n, s, c, h, l), w = cc(), Xi(!1);
      }
      if (Sa(), n.flags |= Fn, typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) {
        var U = Ne(s) || "Unknown";
        qf[U] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), qf[U] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0
      ) {
        {
          var I = Ne(s) || "Unknown";
          qf[I] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), qf[I] = !0);
        }
        n.tag = ue, n.memoizedState = null, n.updateQueue = null;
        var Z = !1;
        return ri(s) ? (Z = !0, qi(n)) : Z = !1, n.memoizedState = M.state !== null && M.state !== void 0 ? M.state : null, Pe(n), _y(n, M), Bp(n, s, c, l), Om(null, n, s, !0, Z, l);
      } else {
        if (n.tag = $, n.mode & un) {
          Tt(!0);
          try {
            M = oc(null, n, s, c, h, l), w = cc();
          } finally {
            Tt(!1);
          }
        }
        return Er() && w && kp(n), Vr(null, n, M, l), Um(n, s), n.child;
      }
    }
    function Um(e, n) {
      {
        if (n && n.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), e.ref !== null) {
          var s = "", l = Rp();
          l && (s += `

Check the render method of \`` + l + "`.");
          var c = l || "", h = e._debugSource;
          h && (c = h.fileName + ":" + h.lineNumber), Am[c] || (Am[c] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", s));
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var g = Ne(n) || "Unknown";
          Dm[g] || (y("%s: Function components do not support getDerivedStateFromProps.", g), Dm[g] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var M = Ne(n) || "Unknown";
          zm[M] || (y("%s: Function components do not support contextType.", M), zm[M] = !0);
        }
      }
    }
    var vh = {
      dehydrated: null,
      treeContext: null,
      retryLane: Mn
    };
    function yh(e) {
      return {
        baseLanes: e,
        cachePool: xS()
      };
    }
    function zg(e, n) {
      var s = null;
      return {
        baseLanes: st(e.baseLanes, n),
        cachePool: s
      };
    }
    function DS(e, n, s, l) {
      if (n !== null) {
        var c = n.memoizedState;
        if (c === null)
          return !1;
      }
      return $p(e, Nf);
    }
    function Dg(e, n) {
      return zs(e.childLanes, n);
    }
    function Ag(e, n, s) {
      var l = n.pendingProps;
      q0(n) && (n.flags |= gt);
      var c = Ra.current, h = !1, g = (n.flags & gt) !== Se;
      if (g || DS(c, e) ? (h = !0, n.flags &= ~gt) : (e === null || e.memoizedState !== null) && (c = eS(c, ky)), c = ic(c), Il(n, c), e === null) {
        Ip(n);
        {
          var M = n.memoizedState;
          if (M !== null) {
            var w = M.dehydrated;
            if (w !== null)
              return FS(n, w);
          }
        }
        var N = l.children, U = l.fallback;
        if (h) {
          var I = AS(n, N, U, s), Z = n.child;
          return Z.memoizedState = yh(s), n.memoizedState = vh, I;
        } else
          return Lm(n, N);
      } else {
        var te = e.memoizedState;
        if (te !== null) {
          {
            var de = te.dehydrated;
            if (de !== null)
              if (g) {
                if (n.flags & Gr)
                  return n.flags &= ~Gr, gh(e, n, s, new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
                if (n.memoizedState !== null)
                  return n.child = e.child, n.flags |= gt, null;
                var me = l.children, Qe = l.fallback, ut = NS(e, n, me, Qe, s), Ke = n.child;
                return Ke.memoizedState = yh(s), n.memoizedState = vh, ut;
              } else
                return OS(e, n, de, te, s);
          }
          if (h) {
            var rn = l.fallback, an = l.children, Q = Og(e, n, an, rn, s), ne = n.child, q = e.child.memoizedState;
            return ne.memoizedState = q === null ? yh(s) : zg(q, s), ne.childLanes = Dg(e, s), n.memoizedState = vh, Q;
          } else {
            var _e = l.children, qe = Fg(e, n, _e, s);
            return n.memoizedState = null, qe;
          }
        } else if (h) {
          var Oe = l.fallback, Et = l.children, Pt = Og(e, n, Et, Oe, s), en = n.child, jt = e.child.memoizedState;
          return en.memoizedState = jt === null ? yh(s) : zg(jt, s), en.childLanes = Dg(e, s), n.memoizedState = vh, Pt;
        } else {
          var vn = l.children, Nt = Fg(e, n, vn, s);
          return n.memoizedState = null, Nt;
        }
      }
    }
    function Lm(e, n, s) {
      var l = e.mode, c = {
        mode: "visible",
        children: n
      }, h = Bm(c, l);
      return h.return = e, e.child = h, h;
    }
    function AS(e, n, s, l) {
      var c = e.mode, h = e.child, g = {
        mode: "hidden",
        children: n
      }, M, w;
      return (c & Ht) === rt && h !== null ? (M = h, M.childLanes = ce, M.pendingProps = g, e.mode & Ct && (M.actualDuration = 0, M.actualStartTime = -1, M.selfBaseDuration = 0, M.treeBaseDuration = 0), w = Zl(s, c, l, null)) : (M = Bm(g, c), w = Zl(s, c, l, null)), M.return = e, w.return = e, M.sibling = w, e.child = M, w;
    }
    function Bm(e, n, s) {
      return U0(e, n, ce, null);
    }
    function Ng(e, n) {
      return $u(e, n);
    }
    function Fg(e, n, s, l) {
      var c = e.child, h = c.sibling, g = Ng(c, {
        mode: "visible",
        children: s
      });
      if ((n.mode & Ht) === rt && (g.lanes = l), g.return = n, g.sibling = null, h !== null) {
        var M = n.deletions;
        M === null ? (n.deletions = [h], n.flags |= pr) : M.push(h);
      }
      return n.child = g, g;
    }
    function Og(e, n, s, l, c) {
      var h = n.mode, g = e.child, M = g.sibling, w = {
        mode: "hidden",
        children: s
      }, N;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (h & Ht) === rt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        n.child !== g
      ) {
        var U = n.child;
        N = U, N.childLanes = ce, N.pendingProps = w, n.mode & Ct && (N.actualDuration = 0, N.actualStartTime = -1, N.selfBaseDuration = g.selfBaseDuration, N.treeBaseDuration = g.treeBaseDuration), n.deletions = null;
      } else
        N = Ng(g, w), N.subtreeFlags = g.subtreeFlags & Ar;
      var I;
      return M !== null ? I = $u(M, l) : (I = Zl(l, h, c, null), I.flags |= Ut), I.return = n, N.return = n, N.sibling = I, n.child = N, I;
    }
    function gh(e, n, s, l) {
      l !== null && qp(l), nc(n, e.child, null, s);
      var c = n.pendingProps, h = c.children, g = Lm(n, h);
      return g.flags |= Ut, n.memoizedState = null, g;
    }
    function NS(e, n, s, l, c) {
      var h = n.mode, g = {
        mode: "visible",
        children: s
      }, M = Bm(g, h), w = Zl(l, h, c, null);
      return w.flags |= Ut, M.return = n, w.return = n, M.sibling = w, n.child = M, (n.mode & Ht) !== rt && nc(n, e.child, null, c), w;
    }
    function FS(e, n, s) {
      return (e.mode & Ht) === rt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = vt) : Dt(n) ? e.lanes = ya : e.lanes = Yt, null;
    }
    function OS(e, n, s, l, c) {
      if (V1(), (n.mode & Ht) === rt)
        return gh(
          e,
          n,
          c,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Dt(s))
        return gh(
          e,
          n,
          c,
          // TODO: The server should serialize the error message so we can log it
          // here on the client. Or, in production, a hash/id that corresponds to
          // the error.
          new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.")
        );
      var h = on(c, e.childLanes);
      if (Ta || h) {
        var g = kh();
        if (g !== null) {
          var M = of(g, c);
          if (M !== Mn && M !== l.retryLane) {
            l.retryLane = M;
            var w = Xt;
            qn(e, M, w);
          }
        }
        return sv(), gh(e, n, c, new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
      } else if (_t(s)) {
        n.flags |= gt, n.child = e.child;
        var N = RE.bind(null, e);
        return ln(s, N), null;
      } else {
        Y1(n, s, l.treeContext);
        var U = n.pendingProps, I = U.children, Z = Lm(n, I);
        return Z.flags |= nr, Z;
      }
    }
    function Ug(e, n, s) {
      e.lanes = st(e.lanes, n);
      var l = e.alternate;
      l !== null && (l.lanes = st(l.lanes, n)), D(e.return, n, s);
    }
    function US(e, n, s) {
      for (var l = n; l !== null; ) {
        if (l.tag === ee) {
          var c = l.memoizedState;
          c !== null && Ug(l, s, e);
        } else if (l.tag === He)
          Ug(l, s, e);
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
    function LS(e) {
      for (var n = e, s = null; n !== null; ) {
        var l = n.alternate;
        l !== null && Wd(l) === null && (s = n), n = n.sibling;
      }
      return s;
    }
    function BS(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Nm[e])
        if (Nm[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function kS(e, n) {
      e !== void 0 && !mh[e] && (e !== "collapsed" && e !== "hidden" ? (mh[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : n !== "forwards" && n !== "backwards" && (mh[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Lg(e, n) {
      {
        var s = kt(e), l = !s && typeof oe(e) == "function";
        if (s || l) {
          var c = s ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, n, c), !1;
        }
      }
      return !0;
    }
    function HS(e, n) {
      if ((n === "forwards" || n === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var s = 0; s < e.length; s++)
            if (!Lg(e[s], s))
              return;
        } else {
          var l = oe(e);
          if (typeof l == "function") {
            var c = l.call(e);
            if (c)
              for (var h = c.next(), g = 0; !h.done; h = c.next()) {
                if (!Lg(h.value, g))
                  return;
                g++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', n);
        }
    }
    function km(e, n, s, l, c) {
      var h = e.memoizedState;
      h === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: s,
        tailMode: c
      } : (h.isBackwards = n, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = s, h.tailMode = c);
    }
    function Bg(e, n, s) {
      var l = n.pendingProps, c = l.revealOrder, h = l.tail, g = l.children;
      BS(c), kS(h, c), HS(g, c), Vr(e, n, g, s);
      var M = Ra.current, w = $p(M, Nf);
      if (w)
        M = em(M, Nf), n.flags |= gt;
      else {
        var N = e !== null && (e.flags & gt) !== Se;
        N && US(n, n.child, s), M = ic(M);
      }
      if (Il(n, M), (n.mode & Ht) === rt)
        n.memoizedState = null;
      else
        switch (c) {
          case "forwards": {
            var U = LS(n.child), I;
            U === null ? (I = n.child, n.child = null) : (I = U.sibling, U.sibling = null), km(
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
            var Z = null, te = n.child;
            for (n.child = null; te !== null; ) {
              var de = te.alternate;
              if (de !== null && Wd(de) === null) {
                n.child = te;
                break;
              }
              var me = te.sibling;
              te.sibling = Z, Z = te, te = me;
            }
            km(
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
            km(
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
    function PS(e, n, s) {
      Jp(n, n.stateNode.containerInfo);
      var l = n.pendingProps;
      return e === null ? n.child = nc(n, null, l, s) : Vr(e, n, l, s), n.child;
    }
    var kg = !1;
    function jS(e, n, s) {
      var l = n.type, c = l._context, h = n.pendingProps, g = n.memoizedProps, M = h.value;
      {
        "value" in h || kg || (kg = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = n.type.propTypes;
        w && Br(w, h, "prop", "Context.Provider");
      }
      if (p(n, c, M), g !== null) {
        var N = g.value;
        if (Pr(N, M)) {
          if (g.children === h.children && !Tn())
            return Is(e, n, s);
        } else
          L(n, c, s);
      }
      var U = h.children;
      return Vr(e, n, U, s), n.child;
    }
    var Hg = !1;
    function VS(e, n, s) {
      var l = n.type;
      l._context === void 0 ? l !== l.Consumer && (Hg || (Hg = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var c = n.pendingProps, h = c.children;
      typeof h != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), he(n, s);
      var g = Ee(l);
      Gi(n);
      var M;
      return If.current = n, Xi(!0), M = h(g), Xi(!1), Sa(), n.flags |= Fn, Vr(e, n, M, s), n.child;
    }
    function xh() {
      Ta = !0;
    }
    function Is(e, n, s) {
      return e !== null && (n.dependencies = e.dependencies), dg(), Vh(n.lanes), on(s, n.childLanes) ? (J1(e, n), n.child) : null;
    }
    function IS(e, n, s) {
      {
        var l = n.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, n.alternate = null, s.index = n.index, s.sibling = n.sibling, s.return = n.return, s.ref = n.ref, n === l.child)
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
        return h === null ? (l.deletions = [e], l.flags |= pr) : h.push(e), s.flags |= Ut, s;
      }
    }
    function Hm(e, n) {
      var s = e.lanes;
      return !!on(s, n);
    }
    function qS(e, n, s) {
      switch (n.tag) {
        case ye:
          Cg(n), n.stateNode, tc();
          break;
        case Re:
          Ly(n);
          break;
        case ue: {
          var l = n.type;
          ri(l) && qi(n);
          break;
        }
        case Me:
          Jp(n, n.stateNode.containerInfo);
          break;
        case xe: {
          var c = n.memoizedProps.value, h = n.type._context;
          p(n, h, c);
          break;
        }
        case ae:
          {
            var g = on(s, n.childLanes);
            g && (n.flags |= pt);
            {
              var M = n.stateNode;
              M.effectDuration = 0, M.passiveEffectDuration = 0;
            }
          }
          break;
        case ee: {
          var w = n.memoizedState;
          if (w !== null) {
            if (w.dehydrated !== null)
              return Il(n, ic(Ra.current)), n.flags |= gt, null;
            var N = n.child, U = N.childLanes;
            if (on(s, U))
              return Ag(e, n, s);
            Il(n, ic(Ra.current));
            var I = Is(e, n, s);
            return I !== null ? I.sibling : null;
          } else
            Il(n, ic(Ra.current));
          break;
        }
        case He: {
          var Z = (e.flags & gt) !== Se, te = on(s, n.childLanes);
          if (Z) {
            if (te)
              return Bg(e, n, s);
            n.flags |= gt;
          }
          var de = n.memoizedState;
          if (de !== null && (de.rendering = null, de.tail = null, de.lastEffect = null), Il(n, Ra.current), te)
            break;
          return null;
        }
        case at:
        case ot:
          return n.lanes = ce, bg(e, n, s);
      }
      return Is(e, n, s);
    }
    function Pg(e, n, s) {
      if (n._debugNeedsRemount && e !== null)
        return IS(e, n, vv(n.type, n.key, n.pendingProps, n._debugOwner || null, n.mode, n.lanes));
      if (e !== null) {
        var l = e.memoizedProps, c = n.pendingProps;
        if (l !== c || Tn() || // Force a re-render if the implementation changed due to hot reload:
        n.type !== e.type)
          Ta = !0;
        else {
          var h = Hm(e, s);
          if (!h && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (n.flags & gt) === Se)
            return Ta = !1, qS(e, n, s);
          (e.flags & _n) !== Se ? Ta = !0 : Ta = !1;
        }
      } else if (Ta = !1, Er() && L1(n)) {
        var g = n.index, M = B1();
        by(n, M, g);
      }
      switch (n.lanes = ce, n.tag) {
        case et:
          return zS(e, n, n.type, s);
        case Be: {
          var w = n.elementType;
          return CS(e, n, w, s);
        }
        case $: {
          var N = n.type, U = n.pendingProps, I = n.elementType === N ? U : oi(N, U);
          return Fm(e, n, N, I, s);
        }
        case ue: {
          var Z = n.type, te = n.pendingProps, de = n.elementType === Z ? te : oi(Z, te);
          return Mg(e, n, Z, de, s);
        }
        case ye:
          return bS(e, n, s);
        case Re:
          return TS(e, n, s);
        case ge:
          return MS(e, n);
        case ee:
          return Ag(e, n, s);
        case Me:
          return PS(e, n, s);
        case H: {
          var me = n.type, Qe = n.pendingProps, ut = n.elementType === me ? Qe : oi(me, Qe);
          return _g(e, n, me, ut, s);
        }
        case Le:
          return _S(e, n, s);
        case Ze:
          return ES(e, n, s);
        case ae:
          return RS(e, n, s);
        case xe:
          return jS(e, n, s);
        case Ye:
          return VS(e, n, s);
        case O: {
          var Ke = n.type, rn = n.pendingProps, an = oi(Ke, rn);
          if (n.type !== n.elementType) {
            var Q = Ke.propTypes;
            Q && Br(
              Q,
              an,
              // Resolved for outer only
              "prop",
              Ne(Ke)
            );
          }
          return an = oi(Ke.type, an), Eg(e, n, Ke, an, s);
        }
        case j:
          return Rg(e, n, n.type, n.pendingProps, s);
        case ke: {
          var ne = n.type, q = n.pendingProps, _e = n.elementType === ne ? q : oi(ne, q);
          return wS(e, n, ne, _e, s);
        }
        case He:
          return Bg(e, n, s);
        case tt:
          break;
        case at:
          return bg(e, n, s);
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function YS(e, n, s) {
      switch (Hp(n), n.tag) {
        case ue: {
          var l = n.type;
          ri(l) && yl(n);
          var c = n.flags;
          return c & Qn ? (n.flags = c & ~Qn | gt, (n.mode & Ct) !== rt && Tm(n), n) : null;
        }
        case ye: {
          rc(n), bu(n), nm();
          var h = n.flags;
          return (h & Qn) !== Se && (h & gt) === Se ? (n.flags = h & ~Qn | gt, n) : null;
        }
        case Re:
          return Kp(n), null;
        case ee: {
          ac(n);
          {
            var g = n.memoizedState;
            if (g !== null && g.dehydrated !== null) {
              if (n.alternate === null)
                throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
              tc();
            }
          }
          var M = n.flags;
          return M & Qn ? (n.flags = M & ~Qn | gt, (n.mode & Ct) !== rt && Tm(n), n) : null;
        }
        case He:
          return ac(n), null;
        case Me:
          return rc(n), null;
        case xe:
          var w = n.type._context;
          return x(w, n), null;
        case at:
        case ot:
          return av(n), null;
        case Gt:
          return null;
        default:
          return null;
      }
    }
    function jg(e, n, s) {
      switch (Hp(n), n.tag) {
        case ue: {
          var l = n.type.childContextTypes;
          l != null && yl(n);
          break;
        }
        case ye: {
          rc(n), bu(n), nm();
          break;
        }
        case Re: {
          Kp(n);
          break;
        }
        case Me:
          rc(n);
          break;
        case ee:
          ac(n);
          break;
        case He:
          ac(n);
          break;
        case xe:
          var c = n.type._context;
          x(c, n);
          break;
        case at:
        case ot:
          av(n);
          break;
      }
    }
    function Vg(e, n, s, l, c, h, g, M, w) {
      var N = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(s, N);
      } catch (U) {
        this.onError(U);
      }
    }
    var Ig = Vg;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Pm = document.createElement("react");
      Ig = function(n, s, l, c, h, g, M, w, N) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var U = document.createEvent("Event"), I = !1, Z = !0, te = window.event, de = Object.getOwnPropertyDescriptor(window, "event");
        function me() {
          Pm.removeEventListener(ne, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = te);
        }
        var Qe = Array.prototype.slice.call(arguments, 3);
        function ut() {
          I = !0, me(), s.apply(l, Qe), Z = !1;
        }
        var Ke, rn = !1, an = !1;
        function Q(q) {
          if (Ke = q.error, rn = !0, Ke === null && q.colno === 0 && q.lineno === 0 && (an = !0), q.defaultPrevented && Ke != null && typeof Ke == "object")
            try {
              Ke._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (n || "invokeguardedcallback");
        if (window.addEventListener("error", Q), Pm.addEventListener(ne, ut, !1), U.initEvent(ne, !1, !1), Pm.dispatchEvent(U), de && Object.defineProperty(window, "event", de), I && Z && (rn ? an && (Ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ke)), window.removeEventListener("error", Q), !I)
          return me(), Vg.apply(this, arguments);
      };
    }
    var WS = Ig, Yf = !1, Sh = null, QS = {
      onError: function(e) {
        Yf = !0, Sh = e;
      }
    };
    function qg(e, n, s, l, c, h, g, M, w) {
      Yf = !1, Sh = null, WS.apply(QS, arguments);
    }
    function GS() {
      return Yf;
    }
    function Yg() {
      if (Yf) {
        var e = Sh;
        return Yf = !1, Sh = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var Wg = null;
    Wg = /* @__PURE__ */ new Set();
    var _h = !1, Ql = !1, XS = typeof WeakSet == "function" ? WeakSet : Set, Ae = null, fc = null, dc = null;
    function lr(e) {
      qg(null, function() {
        throw e;
      }), Yg();
    }
    var ZS = function(e, n) {
      if (n.props = e.memoizedProps, n.state = e.memoizedState, e.mode & Ct)
        try {
          ta(), n.componentWillUnmount();
        } finally {
          ea(e);
        }
      else
        n.componentWillUnmount();
    };
    function Qg(e, n) {
      try {
        qs(zn, e);
      } catch (s) {
        lr(s), ur(e, n, s);
      }
    }
    function jm(e, n, s) {
      try {
        ZS(e, s);
      } catch (l) {
        lr(l), ur(e, n, l);
      }
    }
    function JS(e, n, s) {
      try {
        s.componentDidMount();
      } catch (l) {
        lr(l), ur(e, n, l);
      }
    }
    function Gg(e, n) {
      try {
        Zg(e);
      } catch (s) {
        lr(s), ur(e, n, s);
      }
    }
    function Eh(e, n) {
      var s = e.ref;
      if (s !== null)
        if (typeof s == "function") {
          var l;
          try {
            if (ve && be && e.mode & Ct)
              try {
                ta(), l = s(null);
              } finally {
                ea(e);
              }
            else
              l = s(null);
          } catch (c) {
            lr(c), ur(e, n, c);
          }
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ve(e));
        } else
          s.current = null;
    }
    function Rh(e, n, s) {
      try {
        s();
      } catch (l) {
        lr(l), ur(e, n, l);
      }
    }
    var Xg = !1;
    function KS(e, n) {
      ka(e.containerInfo), Ae = n, $S();
      var s = Xg;
      return Xg = !1, s;
    }
    function $S() {
      for (; Ae !== null; ) {
        var e = Ae, n = e.child;
        (e.subtreeFlags & cu) !== Se && n !== null ? (na(n, e), Ae = n) : e_();
      }
    }
    function e_() {
      for (; Ae !== null; ) {
        var e = Ae;
        At(e);
        try {
          t_(e);
        } catch (s) {
          lr(s), ur(e, e.return, s);
        }
        Hn();
        var n = e.sibling;
        if (n !== null) {
          na(n, e.return), Ae = n;
          return;
        }
        Ae = e.return;
      }
    }
    function t_(e) {
      var n = e.alternate, s = e.flags;
      if ((s & Dr) !== Se) {
        switch (At(e), e.tag) {
          case $:
          case H:
          case j:
            break;
          case ue: {
            if (n !== null) {
              var l = n.memoizedProps, c = n.memoizedState, h = e.stateNode;
              e.type === e.elementType && !Gu && (h.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(e) || "instance"), h.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(e) || "instance"));
              var g = h.getSnapshotBeforeUpdate(e.elementType === e.type ? l : oi(e.type, l), c);
              {
                var M = Wg;
                g === void 0 && !M.has(e.type) && (M.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ve(e)));
              }
              h.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          }
          case ye: {
            if (Fr) {
              var w = e.stateNode;
              R(w.containerInfo);
            }
            break;
          }
          case Re:
          case ge:
          case Me:
          case ke:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Hn();
      }
    }
    function fi(e, n, s) {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var h = c.next, g = h;
        do {
          if ((g.tag & e) === e) {
            var M = g.destroy;
            g.destroy = void 0, M !== void 0 && ((e & ar) !== $a ? xr(n) : (e & zn) !== $a && Ou(n), Rh(n, s, M), (e & ar) !== $a ? xf() : (e & zn) !== $a && Qo());
          }
          g = g.next;
        } while (g !== h);
      }
    }
    function qs(e, n) {
      var s = n.updateQueue, l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var c = l.next, h = c;
        do {
          if ((h.tag & e) === e) {
            (e & ar) !== $a ? gf(n) : (e & zn) !== $a && Sf(n);
            var g = h.create;
            h.destroy = g(), (e & ar) !== $a ? Fu() : (e & zn) !== $a && Ol();
            {
              var M = h.destroy;
              if (M !== void 0 && typeof M != "function") {
                var w = void 0;
                (h.tag & zn) !== Se ? w = "useLayoutEffect" : (h.tag & ql) !== Se ? w = "useInsertionEffect" : w = "useEffect";
                var N = void 0;
                M === null ? N = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof M.then == "function" ? N = `

It looks like you wrote ` + w + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + w + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : N = " You returned: " + M, y("%s must not return anything besides a function, which is used for clean-up.%s", w, N);
              }
            }
          }
          h = h.next;
        } while (h !== c);
      }
    }
    function n_(e, n) {
      if ((n.flags & pt) !== Se)
        switch (n.tag) {
          case ae: {
            var s = n.stateNode.passiveEffectDuration, l = n.memoizedProps, c = l.id, h = l.onPostCommit, g = cg(), M = n.alternate === null ? "mount" : "update";
            og() && (M = "nested-update"), typeof h == "function" && h(c, M, s, g);
            var w = n.return;
            e:
              for (; w !== null; ) {
                switch (w.tag) {
                  case ye:
                    var N = w.stateNode;
                    N.passiveEffectDuration += s;
                    break e;
                  case ae:
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
    function r_(e, n, s, l) {
      if ((s.flags & hs) !== Se)
        switch (s.tag) {
          case $:
          case H:
          case j: {
            if (!Ql)
              if (s.mode & Ct)
                try {
                  ta(), qs(zn | hn, s);
                } finally {
                  ea(s);
                }
              else
                qs(zn | hn, s);
            break;
          }
          case ue: {
            var c = s.stateNode;
            if (s.flags & pt && !Ql)
              if (n === null)
                if (s.type === s.elementType && !Gu && (c.props !== s.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(s) || "instance"), c.state !== s.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(s) || "instance")), s.mode & Ct)
                  try {
                    ta(), c.componentDidMount();
                  } finally {
                    ea(s);
                  }
                else
                  c.componentDidMount();
              else {
                var h = s.elementType === s.type ? n.memoizedProps : oi(s.type, n.memoizedProps), g = n.memoizedState;
                if (s.type === s.elementType && !Gu && (c.props !== s.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(s) || "instance"), c.state !== s.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(s) || "instance")), s.mode & Ct)
                  try {
                    ta(), c.componentDidUpdate(h, g, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ea(s);
                  }
                else
                  c.componentDidUpdate(h, g, c.__reactInternalSnapshotBeforeUpdate);
              }
            var M = s.updateQueue;
            M !== null && (s.type === s.elementType && !Gu && (c.props !== s.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(s) || "instance"), c.state !== s.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(s) || "instance")), vy(s, M, c));
            break;
          }
          case ye: {
            var w = s.updateQueue;
            if (w !== null) {
              var N = null;
              if (s.child !== null)
                switch (s.child.tag) {
                  case Re:
                    N = Zr(s.child.stateNode);
                    break;
                  case ue:
                    N = s.child.stateNode;
                    break;
                }
              vy(s, w, N);
            }
            break;
          }
          case Re: {
            var U = s.stateNode;
            if (n === null && s.flags & pt) {
              var I = s.type, Z = s.memoizedProps;
              Pa(U, I, Z, s);
            }
            break;
          }
          case ge:
            break;
          case Me:
            break;
          case ae: {
            {
              var te = s.memoizedProps, de = te.onCommit, me = te.onRender, Qe = s.stateNode.effectDuration, ut = cg(), Ke = n === null ? "mount" : "update";
              og() && (Ke = "nested-update"), typeof me == "function" && me(s.memoizedProps.id, Ke, s.actualDuration, s.treeBaseDuration, s.actualStartTime, ut);
              {
                typeof de == "function" && de(s.memoizedProps.id, Ke, Qe, ut), yE(s);
                var rn = s.return;
                e:
                  for (; rn !== null; ) {
                    switch (rn.tag) {
                      case ye:
                        var an = rn.stateNode;
                        an.effectDuration += Qe;
                        break e;
                      case ae:
                        var Q = rn.stateNode;
                        Q.effectDuration += Qe;
                        break e;
                    }
                    rn = rn.return;
                  }
              }
            }
            break;
          }
          case ee: {
            d_(e, s);
            break;
          }
          case He:
          case ke:
          case tt:
          case at:
          case ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ql || s.flags & Ui && Zg(s);
    }
    function i_(e) {
      switch (e.tag) {
        case $:
        case H:
        case j: {
          if (e.mode & Ct)
            try {
              ta(), Qg(e, e.return);
            } finally {
              ea(e);
            }
          else
            Qg(e, e.return);
          break;
        }
        case ue: {
          var n = e.stateNode;
          typeof n.componentDidMount == "function" && JS(e, e.return, n), Gg(e, e.return);
          break;
        }
        case Re: {
          Gg(e, e.return);
          break;
        }
      }
    }
    function a_(e, n) {
      var s = null;
      if (Fr)
        for (var l = e; ; ) {
          if (l.tag === Re) {
            if (s === null) {
              s = l;
              var c = l.stateNode;
              n ? qc(c) : Yc(l.stateNode, l.memoizedProps);
            }
          } else if (l.tag === ge) {
            if (s === null) {
              var h = l.stateNode;
              n ? $r(h) : sl(h, l.memoizedProps);
            }
          } else if (!((l.tag === at || l.tag === ot) && l.memoizedState !== null && l !== e)) {
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
            s === l && (s = null), l = l.return;
          }
          s === l && (s = null), l.sibling.return = l.return, l = l.sibling;
        }
    }
    function Zg(e) {
      var n = e.ref;
      if (n !== null) {
        var s = e.stateNode, l;
        switch (e.tag) {
          case Re:
            l = Zr(s);
            break;
          default:
            l = s;
        }
        if (typeof n == "function") {
          var c;
          if (e.mode & Ct)
            try {
              ta(), c = n(l);
            } finally {
              ea(e);
            }
          else
            c = n(l);
          typeof c == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ve(e));
        } else
          n.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ve(e)), n.current = l;
      }
    }
    function s_(e) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == "function")
          if (e.mode & Ct)
            try {
              ta(), n(null);
            } finally {
              ea(e);
            }
          else
            n(null);
        else
          n.current = null;
    }
    function Jg(e, n, s) {
      switch (Sn(n), n.tag) {
        case $:
        case H:
        case O:
        case j: {
          var l = n.updateQueue;
          if (l !== null) {
            var c = l.lastEffect;
            if (c !== null) {
              var h = c.next, g = h;
              do {
                var M = g, w = M.destroy, N = M.tag;
                w !== void 0 && ((N & ql) !== $a ? Rh(n, s, w) : (N & zn) !== $a && (Ou(n), n.mode & Ct ? (ta(), Rh(n, s, w), ea(n)) : Rh(n, s, w), Qo())), g = g.next;
              } while (g !== h);
            }
          }
          return;
        }
        case ue: {
          Eh(n, s);
          var U = n.stateNode;
          typeof U.componentWillUnmount == "function" && jm(n, s, U);
          return;
        }
        case Re: {
          Eh(n, s);
          return;
        }
        case Me: {
          Fr ? r0(e, n, s) : Jr && u_(n);
          return;
        }
        case je:
          return;
        case tt:
          return;
      }
    }
    function Kg(e, n, s) {
      for (var l = n; ; ) {
        if (Jg(e, l, s), l.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        (!Fr || l.tag !== Me)) {
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
    function l_(e) {
      var n = e.alternate;
      n !== null && (n.return = null), e.return = null;
    }
    function $g(e) {
      var n = e.alternate;
      n !== null && (e.alternate = null, $g(n));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Re) {
          var s = e.stateNode;
          s !== null && al(s);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function u_(e) {
      if (Jr) {
        var n = e.stateNode, s = n.containerInfo, l = W(s);
        We(s, l);
      }
    }
    function o_(e) {
      if (Jr) {
        switch (e.tag) {
          case ue:
          case Re:
          case ge:
            return;
          case ye:
          case Me: {
            var n = e.stateNode, s = n.containerInfo, l = n.pendingChildren;
            We(s, l);
            return;
          }
        }
        throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function c_(e) {
      for (var n = e.return; n !== null; ) {
        if (e0(n))
          return n;
        n = n.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function e0(e) {
      return e.tag === Re || e.tag === ye || e.tag === Me;
    }
    function t0(e) {
      var n = e;
      e:
        for (; ; ) {
          for (; n.sibling === null; ) {
            if (n.return === null || e0(n.return))
              return null;
            n = n.return;
          }
          for (n.sibling.return = n.return, n = n.sibling; n.tag !== Re && n.tag !== ge && n.tag !== je; ) {
            if (n.flags & Ut || n.child === null || n.tag === Me)
              continue e;
            n.child.return = n, n = n.child;
          }
          if (!(n.flags & Ut))
            return n.stateNode;
        }
    }
    function n0(e) {
      if (Fr) {
        var n = c_(e);
        switch (n.tag) {
          case Re: {
            var s = n.stateNode;
            n.flags & Fa && (gs(s), n.flags &= ~Fa);
            var l = t0(e);
            Im(e, l, s);
            break;
          }
          case ye:
          case Me: {
            var c = n.stateNode.containerInfo, h = t0(e);
            Vm(e, h, c);
            break;
          }
          default:
            throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
    }
    function Vm(e, n, s) {
      var l = e.tag, c = l === Re || l === ge;
      if (c) {
        var h = e.stateNode;
        n ? vr(s, h, n) : ha(s, h);
      } else if (l !== Me) {
        var g = e.child;
        if (g !== null) {
          Vm(g, n, s);
          for (var M = g.sibling; M !== null; )
            Vm(M, n, s), M = M.sibling;
        }
      }
    }
    function Im(e, n, s) {
      var l = e.tag, c = l === Re || l === ge;
      if (c) {
        var h = e.stateNode;
        n ? Or(s, h, n) : vo(s, h);
      } else if (l !== Me) {
        var g = e.child;
        if (g !== null) {
          Im(g, n, s);
          for (var M = g.sibling; M !== null; )
            Im(M, n, s), M = M.sibling;
        }
      }
    }
    function r0(e, n, s) {
      for (var l = n, c = !1, h, g; ; ) {
        if (!c) {
          var M = l.return;
          e:
            for (; ; ) {
              if (M === null)
                throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var w = M.stateNode;
              switch (M.tag) {
                case Re:
                  h = w, g = !1;
                  break e;
                case ye:
                  h = w.containerInfo, g = !0;
                  break e;
                case Me:
                  h = w.containerInfo, g = !0;
                  break e;
              }
              M = M.return;
            }
          c = !0;
        }
        if (l.tag === Re || l.tag === ge)
          Kg(e, l, s), g ? ys(h, l.stateNode) : ja(h, l.stateNode);
        else if (l.tag === je)
          g ? yd(h, l.stateNode) : vd(h, l.stateNode);
        else if (l.tag === Me) {
          if (l.child !== null) {
            h = l.stateNode.containerInfo, g = !0, l.child.return = l, l = l.child;
            continue;
          }
        } else if (Jg(e, l, s), l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            return;
          l = l.return, l.tag === Me && (c = !1);
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function f_(e, n, s) {
      Fr ? r0(e, n, s) : Kg(e, n, s), l_(n);
    }
    function qm(e, n) {
      if (!Fr) {
        switch (n.tag) {
          case $:
          case H:
          case O:
          case j: {
            if (fi(ql | hn, n, n.return), qs(ql | hn, n), n.mode & Ct)
              try {
                ta(), fi(zn | hn, n, n.return);
              } finally {
                ea(n);
              }
            else
              fi(zn | hn, n, n.return);
            return;
          }
          case ae:
            return;
          case ee: {
            i0(n), bh(n);
            return;
          }
          case He: {
            bh(n);
            return;
          }
          case ye: {
            if (Rn && e !== null) {
              var s = e.memoizedState;
              if (s.isDehydrated) {
                var l = n.stateNode;
                xo(l.containerInfo);
              }
            }
            break;
          }
          case at:
          case ot:
            return;
        }
        o_(n);
        return;
      }
      switch (n.tag) {
        case $:
        case H:
        case O:
        case j: {
          if (fi(ql | hn, n, n.return), qs(ql | hn, n), n.mode & Ct)
            try {
              ta(), fi(zn | hn, n, n.return);
            } finally {
              ea(n);
            }
          else
            fi(zn | hn, n, n.return);
          return;
        }
        case ue:
          return;
        case Re: {
          var c = n.stateNode;
          if (c != null) {
            var h = n.memoizedProps, g = e !== null ? e.memoizedProps : h, M = n.type, w = n.updateQueue;
            n.updateQueue = null, w !== null && yo(c, w, M, g, h, n);
          }
          return;
        }
        case ge: {
          if (n.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var N = n.stateNode, U = n.memoizedProps, I = e !== null ? e.memoizedProps : U;
          Kr(N, I, U);
          return;
        }
        case ye: {
          if (Rn && e !== null) {
            var Z = e.memoizedState;
            if (Z.isDehydrated) {
              var te = n.stateNode;
              xo(te.containerInfo);
            }
          }
          return;
        }
        case ae:
          return;
        case ee: {
          i0(n), bh(n);
          return;
        }
        case He: {
          bh(n);
          return;
        }
        case ke:
          return;
      }
      throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function i0(e) {
      e.memoizedState;
    }
    function d_(e, n) {
      if (Rn) {
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
    function bh(e) {
      var n = e.updateQueue;
      if (n !== null) {
        e.updateQueue = null;
        var s = e.stateNode;
        s === null && (s = e.stateNode = new XS()), n.forEach(function(l) {
          var c = bE.bind(null, e, l);
          if (!s.has(l)) {
            if (s.add(l), gr)
              if (fc !== null && dc !== null)
                td(dc, fc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(c, c);
          }
        });
      }
    }
    function h_(e) {
      Fr && gs(e.stateNode);
    }
    function p_(e, n, s) {
      fc = s, dc = e, Ae = n, m_(e, s), fc = null, dc = null;
    }
    function m_(e, n) {
      for (; Ae !== null; ) {
        var s = Ae, l = s.deletions;
        if (l !== null)
          for (var c = 0; c < l.length; c++) {
            var h = l[c];
            try {
              f_(e, h, s);
            } catch (M) {
              lr(M), ur(h, s, M);
            }
          }
        var g = s.child;
        (s.subtreeFlags & ds) !== Se && g !== null ? (na(g, s), Ae = g) : v_(e, n);
      }
    }
    function v_(e, n) {
      for (; Ae !== null; ) {
        var s = Ae;
        At(s);
        try {
          y_(s, e, n);
        } catch (c) {
          lr(c), ur(s, s.return, c);
        }
        Hn();
        var l = s.sibling;
        if (l !== null) {
          na(l, s.return), Ae = l;
          return;
        }
        Ae = s.return;
      }
    }
    function y_(e, n, s) {
      var l = e.flags;
      if (l & Fa && h_(e), l & Ui) {
        var c = e.alternate;
        c !== null && s_(c);
      }
      if (l & Li)
        switch (e.tag) {
          case ee: {
            var h = e.memoizedState, g = h !== null;
            if (g) {
              var M = e.alternate, w = M !== null && M.memoizedState !== null;
              w || oE();
            }
            break;
          }
          case at: {
            var N = e.memoizedState, U = N !== null, I = e.alternate, Z = I !== null && I.memoizedState !== null, te = e;
            Fr && a_(te, U);
            {
              if (U && !Z && (te.mode & Ht) !== rt) {
                Ae = te;
                for (var de = te.child; de !== null; )
                  Ae = de, x_(de), de = de.sibling;
              }
              break;
            }
          }
        }
      var me = l & (Ut | pt | nr);
      switch (me) {
        case Ut: {
          n0(e), e.flags &= ~Ut;
          break;
        }
        case Ks: {
          n0(e), e.flags &= ~Ut;
          var Qe = e.alternate;
          qm(Qe, e);
          break;
        }
        case nr: {
          e.flags &= ~nr;
          break;
        }
        case oo: {
          e.flags &= ~nr;
          var ut = e.alternate;
          qm(ut, e);
          break;
        }
        case pt: {
          var Ke = e.alternate;
          qm(Ke, e);
          break;
        }
      }
    }
    function g_(e, n, s) {
      fc = s, dc = n, Ae = e, a0(e, n, s), fc = null, dc = null;
    }
    function a0(e, n, s) {
      for (var l = (e.mode & Ht) !== rt; Ae !== null; ) {
        var c = Ae, h = c.child;
        if (c.tag === at && l) {
          var g = c.memoizedState !== null, M = g || _h;
          if (M) {
            Ym(e, n, s);
            continue;
          } else {
            var w = c.alternate, N = w !== null && w.memoizedState !== null, U = N || Ql, I = _h, Z = Ql;
            _h = M, Ql = U, Ql && !Z && (Ae = c, S_(c));
            for (var te = h; te !== null; )
              Ae = te, a0(
                te,
                // New root; bubble back up to here and stop.
                n,
                s
              ), te = te.sibling;
            Ae = c, _h = I, Ql = Z, Ym(e, n, s);
            continue;
          }
        }
        (c.subtreeFlags & hs) !== Se && h !== null ? (na(h, c), Ae = h) : Ym(e, n, s);
      }
    }
    function Ym(e, n, s) {
      for (; Ae !== null; ) {
        var l = Ae;
        if ((l.flags & hs) !== Se) {
          var c = l.alternate;
          At(l);
          try {
            r_(n, c, l, s);
          } catch (g) {
            lr(g), ur(l, l.return, g);
          }
          Hn();
        }
        if (l === e) {
          Ae = null;
          return;
        }
        var h = l.sibling;
        if (h !== null) {
          na(h, l.return), Ae = h;
          return;
        }
        Ae = l.return;
      }
    }
    function x_(e) {
      for (; Ae !== null; ) {
        var n = Ae, s = n.child;
        switch (n.tag) {
          case $:
          case H:
          case O:
          case j: {
            if (n.mode & Ct)
              try {
                ta(), fi(zn, n, n.return);
              } finally {
                ea(n);
              }
            else
              fi(zn, n, n.return);
            break;
          }
          case ue: {
            Eh(n, n.return);
            var l = n.stateNode;
            typeof l.componentWillUnmount == "function" && jm(n, n.return, l);
            break;
          }
          case Re: {
            Eh(n, n.return);
            break;
          }
          case at: {
            var c = n.memoizedState !== null;
            if (c) {
              s0(e);
              continue;
            }
            break;
          }
        }
        s !== null ? (s.return = n, Ae = s) : s0(e);
      }
    }
    function s0(e) {
      for (; Ae !== null; ) {
        var n = Ae;
        if (n === e) {
          Ae = null;
          return;
        }
        var s = n.sibling;
        if (s !== null) {
          s.return = n.return, Ae = s;
          return;
        }
        Ae = n.return;
      }
    }
    function S_(e) {
      for (; Ae !== null; ) {
        var n = Ae, s = n.child;
        if (n.tag === at) {
          var l = n.memoizedState !== null;
          if (l) {
            l0(e);
            continue;
          }
        }
        s !== null ? (s.return = n, Ae = s) : l0(e);
      }
    }
    function l0(e) {
      for (; Ae !== null; ) {
        var n = Ae;
        At(n);
        try {
          i_(n);
        } catch (l) {
          lr(l), ur(n, n.return, l);
        }
        if (Hn(), n === e) {
          Ae = null;
          return;
        }
        var s = n.sibling;
        if (s !== null) {
          s.return = n.return, Ae = s;
          return;
        }
        Ae = n.return;
      }
    }
    function __(e, n) {
      Ae = n, E_(n, e);
    }
    function E_(e, n) {
      for (; Ae !== null; ) {
        var s = Ae, l = s.child;
        (s.subtreeFlags & Ua) !== Se && l !== null ? (na(l, s), Ae = l) : R_(e, n);
      }
    }
    function R_(e, n) {
      for (; Ae !== null; ) {
        var s = Ae;
        if ((s.flags & tr) !== Se) {
          At(s);
          try {
            b_(n, s);
          } catch (c) {
            lr(c), ur(s, s.return, c);
          }
          Hn();
        }
        if (s === e) {
          Ae = null;
          return;
        }
        var l = s.sibling;
        if (l !== null) {
          na(l, s.return), Ae = l;
          return;
        }
        Ae = s.return;
      }
    }
    function b_(e, n) {
      switch (n.tag) {
        case $:
        case H:
        case j: {
          if (n.mode & Ct) {
            bm();
            try {
              qs(ar | hn, n);
            } finally {
              Rm(n);
            }
          } else
            qs(ar | hn, n);
          break;
        }
      }
    }
    function T_(e) {
      Ae = e, M_();
    }
    function M_() {
      for (; Ae !== null; ) {
        var e = Ae, n = e.child;
        if ((Ae.flags & pr) !== Se) {
          var s = e.deletions;
          if (s !== null) {
            for (var l = 0; l < s.length; l++) {
              var c = s[l];
              Ae = c, z_(c, e);
            }
            {
              var h = e.alternate;
              if (h !== null) {
                var g = h.child;
                if (g !== null) {
                  h.child = null;
                  do {
                    var M = g.sibling;
                    g.sibling = null, g = M;
                  } while (g !== null);
                }
              }
            }
            Ae = e;
          }
        }
        (e.subtreeFlags & Ua) !== Se && n !== null ? (na(n, e), Ae = n) : C_();
      }
    }
    function C_() {
      for (; Ae !== null; ) {
        var e = Ae;
        (e.flags & tr) !== Se && (At(e), w_(e), Hn());
        var n = e.sibling;
        if (n !== null) {
          na(n, e.return), Ae = n;
          return;
        }
        Ae = e.return;
      }
    }
    function w_(e) {
      switch (e.tag) {
        case $:
        case H:
        case j: {
          e.mode & Ct ? (bm(), fi(ar | hn, e, e.return), Rm(e)) : fi(ar | hn, e, e.return);
          break;
        }
      }
    }
    function z_(e, n) {
      for (; Ae !== null; ) {
        var s = Ae;
        At(s), A_(s, n), Hn();
        var l = s.child;
        l !== null ? (na(l, s), Ae = l) : D_(e);
      }
    }
    function D_(e) {
      for (; Ae !== null; ) {
        var n = Ae, s = n.sibling, l = n.return;
        if ($g(n), n === e) {
          Ae = null;
          return;
        }
        if (s !== null) {
          na(s, l), Ae = s;
          return;
        }
        Ae = l;
      }
    }
    function A_(e, n) {
      switch (e.tag) {
        case $:
        case H:
        case j: {
          e.mode & Ct ? (bm(), fi(ar, e, n), Rm(e)) : fi(ar, e, n);
          break;
        }
      }
    }
    var u0 = !1;
    function na(e, n) {
      !u0 && e.return !== n && (u0 = !0, y("Internal React error: Return pointer is inconsistent with parent.")), e.return = n;
    }
    function N_(e) {
      switch (e.tag) {
        case $:
        case H:
        case j: {
          try {
            qs(zn | hn, e);
          } catch (s) {
            lr(s), ur(e, e.return, s);
          }
          break;
        }
        case ue: {
          var n = e.stateNode;
          try {
            n.componentDidMount();
          } catch (s) {
            lr(s), ur(e, e.return, s);
          }
          break;
        }
      }
    }
    function F_(e) {
      switch (e.tag) {
        case $:
        case H:
        case j: {
          try {
            qs(ar | hn, e);
          } catch (n) {
            lr(n), ur(e, e.return, n);
          }
          break;
        }
      }
    }
    function O_(e) {
      switch (e.tag) {
        case $:
        case H:
        case j: {
          try {
            fi(zn | hn, e, e.return);
          } catch (s) {
            lr(s), ur(e, e.return, s);
          }
          break;
        }
        case ue: {
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && jm(e, e.return, n);
          break;
        }
      }
    }
    function U_(e) {
      switch (e.tag) {
        case $:
        case H:
        case j:
          try {
            fi(ar | hn, e, e.return);
          } catch (n) {
            lr(n), ur(e, e.return, n);
          }
      }
    }
    var Th = 0, Mh = 1, Ch = 2, wh = 3, zh = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Wf = Symbol.for;
      Th = Wf("selector.component"), Mh = Wf("selector.has_pseudo_class"), Ch = Wf("selector.role"), wh = Wf("selector.test_id"), zh = Wf("selector.text");
    }
    function L_(e) {
      return {
        $$typeof: Th,
        value: e
      };
    }
    function B_(e) {
      return {
        $$typeof: Mh,
        value: e
      };
    }
    function k_(e) {
      return {
        $$typeof: Ch,
        value: e
      };
    }
    function H_(e) {
      return {
        $$typeof: zh,
        value: e
      };
    }
    function P_(e) {
      return {
        $$typeof: wh,
        value: e
      };
    }
    function Wm(e) {
      var n = il(e);
      if (n != null) {
        if (typeof n.memoizedProps["data-testname"] != "string")
          throw new Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");
        return n;
      } else {
        var s = hu(e);
        if (s === null)
          throw new Error("Could not find React container within specified host subtree.");
        return s.stateNode.current;
      }
    }
    function Qm(e, n) {
      switch (n.$$typeof) {
        case Th:
          if (e.type === n.value)
            return !0;
          break;
        case Mh:
          return j_(e, n.value);
        case Ch:
          if (e.tag === Re) {
            var s = e.stateNode;
            if (pu(s, n.value))
              return !0;
          }
          break;
        case zh:
          if (e.tag === Re || e.tag === ge) {
            var l = mo(e);
            if (l !== null && l.indexOf(n.value) >= 0)
              return !0;
          }
          break;
        case wh:
          if (e.tag === Re) {
            var c = e.memoizedProps["data-testname"];
            if (typeof c == "string" && c.toLowerCase() === n.value.toLowerCase())
              return !0;
          }
          break;
        default:
          throw new Error("Invalid selector type specified.");
      }
      return !1;
    }
    function Gm(e) {
      switch (e.$$typeof) {
        case Th:
          var n = Ne(e.value) || "Unknown";
          return "<" + n + ">";
        case Mh:
          return ":has(" + (Gm(e) || "") + ")";
        case Ch:
          return '[role="' + e.value + '"]';
        case zh:
          return '"' + e.value + '"';
        case wh:
          return '[data-testname="' + e.value + '"]';
        default:
          throw new Error("Invalid selector type specified.");
      }
    }
    function o0(e, n) {
      for (var s = [], l = [e, 0], c = 0; c < l.length; ) {
        var h = l[c++], g = l[c++], M = n[g];
        if (!(h.tag === Re && Jt(h))) {
          for (; M != null && Qm(h, M); )
            g++, M = n[g];
          if (g === n.length)
            s.push(h);
          else
            for (var w = h.child; w !== null; )
              l.push(w, g), w = w.sibling;
        }
      }
      return s;
    }
    function j_(e, n) {
      for (var s = [e, 0], l = 0; l < s.length; ) {
        var c = s[l++], h = s[l++], g = n[h];
        if (!(c.tag === Re && Jt(c))) {
          for (; g != null && Qm(c, g); )
            h++, g = n[h];
          if (h === n.length)
            return !0;
          for (var M = c.child; M !== null; )
            s.push(M, h), M = M.sibling;
        }
      }
      return !1;
    }
    function Dh(e, n) {
      if (!xi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Wm(e), l = o0(s, n), c = [], h = Array.from(l), g = 0; g < h.length; ) {
        var M = h[g++];
        if (M.tag === Re) {
          if (Jt(M))
            continue;
          c.push(M.stateNode);
        } else
          for (var w = M.child; w !== null; )
            h.push(w), w = w.sibling;
      }
      return c;
    }
    function V_(e, n) {
      if (!xi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Wm(e), l = 0, c = [], h = [s, 0], g = 0; g < h.length; ) {
        var M = h[g++], w = h[g++], N = n[w];
        if (!(M.tag === Re && Jt(M)) && (Qm(M, N) && (c.push(Gm(N)), w++, w > l && (l = w)), w < n.length))
          for (var U = M.child; U !== null; )
            h.push(U, w), U = U.sibling;
      }
      if (l < n.length) {
        for (var I = [], Z = l; Z < n.length; Z++)
          I.push(Gm(n[Z]));
        return `findAllNodes was able to match part of the selector:
` + ("  " + c.join(" > ") + `

`) + `No matching component was found for:
` + ("  " + I.join(" > "));
      }
      return null;
    }
    function I_(e, n) {
      if (!xi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Dh(e, n), l = [], c = 0; c < s.length; c++)
        l.push(Vc(s[c]));
      for (var h = l.length - 1; h > 0; h--)
        for (var g = l[h], M = g.x, w = M + g.width, N = g.y, U = N + g.height, I = h - 1; I >= 0; I--)
          if (h !== I) {
            var Z = l[I], te = Z.x, de = te + Z.width, me = Z.y, Qe = me + Z.height;
            if (M >= te && N >= me && w <= de && U <= Qe) {
              l.splice(h, 1);
              break;
            } else if (M === te && g.width === Z.width && !(Qe < N) && !(me > U)) {
              me > N && (Z.height += me - N, Z.y = N), Qe < U && (Z.height = U - me), l.splice(h, 1);
              break;
            } else if (N === me && g.height === Z.height && !(de < M) && !(te > w)) {
              te > M && (Z.width += te - M, Z.x = M), de < w && (Z.width = w - te), l.splice(h, 1);
              break;
            }
          }
      return l;
    }
    function q_(e, n) {
      if (!xi)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var s = Wm(e), l = o0(s, n), c = Array.from(l), h = 0; h < c.length; ) {
        var g = c[h++];
        if (!Jt(g)) {
          if (g.tag === Re) {
            var M = g.stateNode;
            if (Ic(M))
              return !0;
          }
          for (var w = g.child; w !== null; )
            c.push(w), w = w.sibling;
        }
      }
      return !1;
    }
    var Ah = [];
    function Y_() {
      xi && Ah.forEach(function(e) {
        return e();
      });
    }
    function W_(e, n, s, l) {
      if (!xi)
        throw new Error("Test selector API is not supported by this renderer.");
      var c = Dh(e, n), h = mu(c, s, l), g = h.disconnect, M = h.observe, w = h.unobserve, N = function() {
        var U = Dh(e, n);
        c.forEach(function(I) {
          U.indexOf(I) < 0 && w(I);
        }), U.forEach(function(I) {
          c.indexOf(I) < 0 && M(I);
        });
      };
      return Ah.push(N), {
        disconnect: function() {
          var U = Ah.indexOf(N);
          U >= 0 && Ah.splice(U, 1), g();
        }
      };
    }
    var Q_ = m.ReactCurrentActQueue;
    function G_(e) {
      {
        var n = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), s = typeof jest < "u";
        return da && s && n !== !1;
      }
    }
    function c0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Q_.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var X_ = Math.ceil, Xm = m.ReactCurrentDispatcher, Zm = m.ReactCurrentOwner, pn = m.ReactCurrentBatchConfig, Ma = m.ReactCurrentActQueue, Un = (
      /*             */
      0
    ), Jm = (
      /*               */
      1
    ), Tr = (
      /*                */
      2
    ), Ca = (
      /*                */
      4
    ), Ys = 0, Qf = 1, Xu = 2, Nh = 3, Gf = 4, f0 = 5, Km = 6, ht = Un, Mr = null, mn = null, Vn = ce, rs = ce, $m = ji(ce), In = Ys, Xf = null, Fh = ce, Zf = ce, Oh = ce, Jf = null, di = null, ev = 0, d0 = 500, h0 = 1 / 0, Z_ = 500;
    function hc() {
      h0 = cn() + Z_;
    }
    function p0() {
      return h0;
    }
    var Uh = !1, tv = null, pc = null, Zu = !1, Ws = null, Kf = ce, nv = [], J_ = 50, $f = 0, rv = null, K_ = 50, Lh = 0, ed = Xt, Bh = ce;
    function kh() {
      return Mr;
    }
    function Ir() {
      return (ht & (Tr | Ca)) !== Un ? cn() : (ed !== Xt || (ed = cn()), ed);
    }
    function Gl(e) {
      var n = e.mode;
      if ((n & Ht) === rt)
        return vt;
      if ((ht & Tr) !== Un && Vn !== ce)
        return Ml(Vn);
      var s = bf() !== Od;
      if (s) {
        if (pn.transition !== null) {
          var l = pn.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Bh === Mn && (Bh = Td()), Bh;
      }
      var c = kr();
      if (c !== Mn)
        return c;
      var h = jc();
      return h;
    }
    function $_(e) {
      var n = e.mode;
      return (n & Ht) === rt ? vt : Md();
    }
    function qn(e, n, s) {
      ME();
      var l = Hh(e, n);
      return l === null ? null : (Ds(l, n, s), (ht & Tr) !== ce && l === Mr ? zE(e) : (gr && cf(l, e, n), DE(e), l === Mr && ((ht & Tr) === Un && (Zf = st(Zf, n)), In === Gf && Xl(l, Vn)), hi(l, s), n === vt && ht === Un && (e.mode & Ht) === rt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ma.isBatchingLegacy && (hc(), Rf())), l);
    }
    function eE(e, n, s) {
      var l = e.current;
      l.lanes = n, Ds(e, n, s), hi(e, s);
    }
    function Hh(e, n) {
      e.lanes = st(e.lanes, n);
      var s = e.alternate;
      s !== null && (s.lanes = st(s.lanes, n)), s === null && (e.flags & (Ut | nr)) !== Se && w0(e);
      for (var l = e, c = e.return; c !== null; )
        c.childLanes = st(c.childLanes, n), s = c.alternate, s !== null ? s.childLanes = st(s.childLanes, n) : (c.flags & (Ut | nr)) !== Se && w0(e), l = c, c = c.return;
      if (l.tag === ye) {
        var h = l.stateNode;
        return h;
      } else
        return null;
    }
    function m0(e, n) {
      return (
        // TODO: Optimize slightly by comparing to root that fiber belongs to.
        // Requires some refactoring. Not a big deal though since it's rare for
        // concurrent apps to have more than a single root.
        Mr !== null && (e.mode & Ht) !== rt && // If this is a render phase update (i.e. UNSAFE_componentWillReceiveProps),
        // then don't treat this as an interleaved update. This pattern is
        // accompanied by a warning but we haven't fully deprecated it yet. We can
        // remove once the deferRenderPhaseUpdateToNextBatch flag is enabled.
        (ht & Tr) === Un
      );
    }
    function hi(e, n) {
      var s = e.callbackNode;
      Rd(e, n);
      var l = Au(e, e === Mr ? Vn : ce);
      if (l === ce) {
        s !== null && D0(s), e.callbackNode = null, e.callbackPriority = Mn;
        return;
      }
      var c = Wi(l), h = e.callbackPriority;
      if (h === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ma.current !== null && s !== ov)) {
        s == null && h !== vt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      s != null && D0(s);
      var g;
      if (c === vt)
        e.tag === bs ? (Ma.isBatchingLegacy !== null && (Ma.didScheduleLegacyUpdate = !0), Nd(g0.bind(null, e))) : _a(g0.bind(null, e)), Rt ? Ma.current !== null ? Ma.current.push(li) : du(function() {
          ht === Un && li();
        }) : Wh(Os, li), g = null;
      else {
        var M;
        switch (hf(l)) {
          case Mi:
            M = Os;
            break;
          case zl:
            M = Nu;
            break;
          case Dl:
            M = xa;
            break;
          case qo:
            M = Al;
            break;
          default:
            M = xa;
            break;
        }
        g = Wh(M, v0.bind(null, e));
      }
      e.callbackPriority = c, e.callbackNode = g;
    }
    function v0(e, n) {
      if (dS(), ed = Xt, Bh = ce, (ht & (Tr | Ca)) !== Un)
        throw new Error("Should not already be working.");
      var s = e.callbackNode, l = is();
      if (l && e.callbackNode !== s)
        return null;
      var c = Au(e, e === Mr ? Vn : ce);
      if (c === ce)
        return null;
      var h = !ws(e, c) && !bd(e, c) && !n, g = h ? pE(e, c) : Ih(e, c);
      if (g !== Ys) {
        if (g === Xu) {
          var M = Ho(e);
          M !== ce && (c = M, g = iv(e, M));
        }
        if (g === Qf) {
          var w = Xf;
          throw Ju(e, ce), Xl(e, c), hi(e, cn()), w;
        }
        if (g === Km)
          Xl(e, c);
        else {
          var N = !ws(e, c), U = e.current.alternate;
          if (N && !nE(U)) {
            if (g = Ih(e, c), g === Xu) {
              var I = Ho(e);
              I !== ce && (c = I, g = iv(e, I));
            }
            if (g === Qf) {
              var Z = Xf;
              throw Ju(e, ce), Xl(e, c), hi(e, cn()), Z;
            }
          }
          e.finishedWork = U, e.finishedLanes = c, tE(e, g, c);
        }
      }
      return hi(e, cn()), e.callbackNode === s ? v0.bind(null, e) : null;
    }
    function iv(e, n) {
      var s = Jf;
      if (Za(e)) {
        var l = Ju(e, n);
        l.flags |= Gr, Lr(e.containerInfo);
      }
      var c = Ih(e, n);
      if (c !== Xu) {
        var h = di;
        di = s, h !== null && y0(h);
      }
      return c;
    }
    function y0(e) {
      di === null ? di = e : di.push.apply(di, e);
    }
    function tE(e, n, s) {
      switch (n) {
        case Ys:
        case Qf:
          throw new Error("Root did not complete. This is a bug in React.");
        case Xu: {
          Ku(e, di);
          break;
        }
        case Nh: {
          if (Xl(e, s), uf(s) && // do not delay if we're inside an act() scope
          !A0()) {
            var l = ev + d0 - cn();
            if (l > 10) {
              var c = Au(e, ce);
              if (c !== ce)
                break;
              var h = e.suspendedLanes;
              if (!Cl(h, s)) {
                Ir(), wd(e, h);
                break;
              }
              e.timeoutHandle = po(Ku.bind(null, e, di), l);
              break;
            }
          }
          Ku(e, di);
          break;
        }
        case Gf: {
          if (Xl(e, s), jo(s))
            break;
          if (!A0()) {
            var g = _d(e, s), M = g, w = cn() - M, N = TE(w) - w;
            if (N > 10) {
              e.timeoutHandle = po(Ku.bind(null, e, di), N);
              break;
            }
          }
          Ku(e, di);
          break;
        }
        case f0: {
          Ku(e, di);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function nE(e) {
      for (var n = e; ; ) {
        if (n.flags & $s) {
          var s = n.updateQueue;
          if (s !== null) {
            var l = s.stores;
            if (l !== null)
              for (var c = 0; c < l.length; c++) {
                var h = l[c], g = h.getSnapshot, M = h.value;
                try {
                  if (!Pr(g(), M))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var w = n.child;
        if (n.subtreeFlags & $s && w !== null) {
          w.return = n, n = w;
          continue;
        }
        if (n === e)
          return !0;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return !0;
    }
    function Xl(e, n) {
      n = zs(n, Oh), n = zs(n, Zf), Cd(e, n);
    }
    function g0(e) {
      if (hS(), (ht & (Tr | Ca)) !== Un)
        throw new Error("Should not already be working.");
      is();
      var n = Au(e, ce);
      if (!on(n, vt))
        return hi(e, cn()), null;
      var s = Ih(e, n);
      if (e.tag !== bs && s === Xu) {
        var l = Ho(e);
        l !== ce && (n = l, s = iv(e, l));
      }
      if (s === Qf) {
        var c = Xf;
        throw Ju(e, ce), Xl(e, n), hi(e, cn()), c;
      }
      if (s === Km)
        throw new Error("Root did not complete. This is a bug in React.");
      var h = e.current.alternate;
      return e.finishedWork = h, e.finishedLanes = n, Ku(e, di), hi(e, cn()), null;
    }
    function rE(e, n) {
      n !== ce && (Ns(e, st(n, vt)), hi(e, cn()), (ht & (Tr | Ca)) === Un && (hc(), li()));
    }
    function iE(e) {
      var n = kr(), s = pn.transition;
      try {
        return pn.transition = null, Cn(Dl), e();
      } finally {
        Cn(n), pn.transition = s;
      }
    }
    function aE(e, n) {
      var s = ht;
      ht |= Jm;
      try {
        return e(n);
      } finally {
        ht = s, ht === Un && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ma.isBatchingLegacy && (hc(), Rf());
      }
    }
    function sE(e, n, s, l, c) {
      var h = kr(), g = pn.transition;
      try {
        return pn.transition = null, Cn(Mi), e(n, s, l, c);
      } finally {
        Cn(h), pn.transition = g, ht === Un && hc();
      }
    }
    function Ph(e) {
      Ws !== null && Ws.tag === bs && (ht & (Tr | Ca)) === Un && is();
      var n = ht;
      ht |= Jm;
      var s = pn.transition, l = kr();
      try {
        return pn.transition = null, Cn(Mi), e ? e() : void 0;
      } finally {
        Cn(l), pn.transition = s, ht = n, (ht & (Tr | Ca)) === Un && li();
      }
    }
    function lE() {
      return (ht & (Tr | Ca)) !== Un;
    }
    function uE(e) {
      var n = ht;
      ht |= Jm;
      var s = pn.transition, l = kr();
      try {
        pn.transition = null, Cn(Mi), e();
      } finally {
        Cn(l), pn.transition = s, ht = n, ht === Un && (hc(), li());
      }
    }
    function jh(e, n) {
      qt($m, rs, e), rs = st(rs, n);
    }
    function av(e) {
      rs = $m.current, bn($m, e);
    }
    function Ju(e, n) {
      e.finishedWork = null, e.finishedLanes = ce;
      var s = e.timeoutHandle;
      if (s !== fa && (e.timeoutHandle = fa, ca(s)), mn !== null)
        for (var l = mn.return; l !== null; ) {
          var c = l.alternate;
          jg(c, l), l = l.return;
        }
      Mr = e;
      var h = $u(e.current, null);
      return mn = h, Vn = rs = n, In = Ys, Xf = null, Fh = ce, Zf = ce, Oh = ce, Jf = null, di = null, Qt(), ui.discardPendingWarnings(), h;
    }
    function x0(e, n) {
      do {
        var s = mn;
        try {
          if (i(), Py(), Hn(), Zm.current = null, s === null || s.return === null) {
            In = Qf, Xf = n, mn = null;
            return;
          }
          if (ve && s.mode & Ct && fh(s, !0), fe)
            if (Sa(), n !== null && typeof n == "object" && typeof n.then == "function") {
              var l = n;
              Go(s, l, Vn);
            } else
              Qa(s, n, Vn);
          gS(e, s.return, s, n, Vn), R0(s);
        } catch (c) {
          n = c, mn === s && s !== null ? (s = s.return, mn = s) : s = mn;
          continue;
        }
        return;
      } while (!0);
    }
    function S0() {
      var e = Xm.current;
      return Xm.current = sh, e === null ? sh : e;
    }
    function _0(e) {
      Xm.current = e;
    }
    function oE() {
      ev = cn();
    }
    function Vh(e) {
      Fh = st(e, Fh);
    }
    function cE() {
      In === Ys && (In = Nh);
    }
    function sv() {
      (In === Ys || In === Nh || In === Xu) && (In = Gf), Mr !== null && (Po(Fh) || Po(Zf)) && Xl(Mr, Vn);
    }
    function fE(e) {
      In !== Gf && (In = Xu), Jf === null ? Jf = [e] : Jf.push(e);
    }
    function dE() {
      return In === Ys;
    }
    function Ih(e, n) {
      var s = ht;
      ht |= Tr;
      var l = S0();
      if (Mr !== e || Vn !== n) {
        if (gr) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (td(e, Vn), c.clear()), ff(e, n);
        }
        Ju(e, n);
      }
      Lu(n);
      do
        try {
          hE();
          break;
        } catch (h) {
          x0(e, h);
        }
      while (!0);
      if (i(), ht = s, _0(l), mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Zn(), Mr = null, Vn = ce, In;
    }
    function hE() {
      for (; mn !== null; )
        E0(mn);
    }
    function pE(e, n) {
      var s = ht;
      ht |= Tr;
      var l = S0();
      if (Mr !== e || Vn !== n) {
        if (gr) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (td(e, Vn), c.clear()), ff(e, n);
        }
        hc(), Ju(e, n);
      }
      Lu(n);
      do
        try {
          mE();
          break;
        } catch (h) {
          x0(e, h);
        }
      while (!0);
      return i(), _0(l), ht = s, mn !== null ? (Zo(), Ys) : (Zn(), Mr = null, Vn = ce, In);
    }
    function mE() {
      for (; mn !== null && !Ad(); )
        E0(mn);
    }
    function E0(e) {
      var n = e.alternate;
      At(e);
      var s;
      (e.mode & Ct) !== rt ? (Em(e), s = lv(n, e, rs), fh(e, !0)) : s = lv(n, e, rs), Hn(), e.memoizedProps = e.pendingProps, s === null ? R0(e) : mn = s, Zm.current = null;
    }
    function R0(e) {
      var n = e;
      do {
        var s = n.alternate, l = n.return;
        if ((n.flags & Oa) === Se) {
          At(n);
          var c = void 0;
          if ((n.mode & Ct) === rt ? c = Sg(s, n, rs) : (Em(n), c = Sg(s, n, rs), fh(n, !1)), Hn(), c !== null) {
            mn = c;
            return;
          }
        } else {
          var h = YS(s, n);
          if (h !== null) {
            h.flags &= co, mn = h;
            return;
          }
          if ((n.mode & Ct) !== rt) {
            fh(n, !1);
            for (var g = n.actualDuration, M = n.child; M !== null; )
              g += M.actualDuration, M = M.sibling;
            n.actualDuration = g;
          }
          if (l !== null)
            l.flags |= Oa, l.subtreeFlags = Se, l.deletions = null;
          else {
            In = Km, mn = null;
            return;
          }
        }
        var w = n.sibling;
        if (w !== null) {
          mn = w;
          return;
        }
        n = l, mn = n;
      } while (n !== null);
      In === Ys && (In = f0);
    }
    function Ku(e, n) {
      var s = kr(), l = pn.transition;
      try {
        pn.transition = null, Cn(Mi), vE(e, n, s);
      } finally {
        pn.transition = l, Cn(s);
      }
      return null;
    }
    function vE(e, n, s) {
      do
        is();
      while (Ws !== null);
      if (CE(), (ht & (Tr | Ca)) !== Un)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (wn(c), l === null)
        return Fl(), null;
      if (c === ce && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ce, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Mn;
      var h = st(l.lanes, l.childLanes);
      As(e, h), e === Mr && (Mr = null, mn = null, Vn = ce), ((l.subtreeFlags & Ua) !== Se || (l.flags & Ua) !== Se) && (Zu || (Zu = !0, Wh(xa, function() {
        return is(), null;
      })));
      var g = (l.subtreeFlags & (cu | ds | hs | Ua)) !== Se, M = (l.flags & (cu | ds | hs | Ua)) !== Se;
      if (g || M) {
        var w = pn.transition;
        pn.transition = null;
        var N = kr();
        Cn(Mi);
        var U = ht;
        ht |= Ca, Zm.current = null, KS(e, l), fg(), p_(e, l, c), nl(e.containerInfo), e.current = l, Ga(c), g_(l, e, c), Xo(), Wo(), ht = U, Cn(N), pn.transition = w;
      } else
        e.current = l, fg();
      var I = Zu;
      if (Zu && (Zu = !1, Ws = e, Kf = c), h = e.pendingLanes, h === ce && (pc = null), I || C0(e.current, !1), ft(l.stateNode, s), gr && e.memoizedUpdaters.clear(), Y_(), hi(e, cn()), n !== null)
        for (var Z = e.onRecoverableError, te = 0; te < n.length; te++) {
          var de = n[te];
          Z(de);
        }
      if (Uh) {
        Uh = !1;
        var me = tv;
        throw tv = null, me;
      }
      return on(Kf, vt) && e.tag !== bs && is(), h = e.pendingLanes, on(h, vt) ? (fS(), e === rv ? $f++ : ($f = 0, rv = e)) : $f = 0, li(), Fl(), null;
    }
    function is() {
      if (Ws !== null) {
        var e = hf(Kf), n = _p(Dl, e), s = pn.transition, l = kr();
        try {
          return pn.transition = null, Cn(n), gE();
        } finally {
          Cn(l), pn.transition = s;
        }
      }
      return !1;
    }
    function yE(e) {
      nv.push(e), Zu || (Zu = !0, Wh(xa, function() {
        return is(), null;
      }));
    }
    function gE() {
      if (Ws === null)
        return !1;
      var e = Ws, n = Kf;
      if (Ws = null, Kf = ce, (ht & (Tr | Ca)) !== Un)
        throw new Error("Cannot flush passive effects while already rendering.");
      Uu(n);
      var s = ht;
      ht |= Ca, T_(e.current), __(e, e.current);
      {
        var l = nv;
        nv = [];
        for (var c = 0; c < l.length; c++) {
          var h = l[c];
          n_(e, h);
        }
      }
      _f(), C0(e.current, !0), ht = s, li(), Lh = Ws === null ? 0 : Lh + 1, xn(e);
      {
        var g = e.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function b0(e) {
      return pc !== null && pc.has(e);
    }
    function xE(e) {
      pc === null ? pc = /* @__PURE__ */ new Set([e]) : pc.add(e);
    }
    function SE(e) {
      Uh || (Uh = !0, tv = e);
    }
    var _E = SE;
    function T0(e, n, s) {
      var l = dh(s, n), c = hg(e, l, vt);
      dt(e, c);
      var h = Ir(), g = Hh(e, vt);
      g !== null && (Ds(g, vt, h), hi(g, h));
    }
    function ur(e, n, s) {
      if (e.tag === ye) {
        T0(e, e, s);
        return;
      }
      var l = null;
      for (l = n; l !== null; ) {
        if (l.tag === ye) {
          T0(l, e, s);
          return;
        } else if (l.tag === ue) {
          var c = l.type, h = l.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof h.componentDidCatch == "function" && !b0(h)) {
            var g = dh(s, e), M = Cm(l, g, vt);
            dt(l, M);
            var w = Ir(), N = Hh(l, vt);
            N !== null && (Ds(N, vt, w), hi(N, w));
            return;
          }
        }
        l = l.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, s);
    }
    function EE(e, n, s) {
      var l = e.pingCache;
      l !== null && l.delete(n);
      var c = Ir();
      wd(e, s), AE(e), Mr === e && Cl(Vn, s) && (In === Gf || In === Nh && uf(Vn) && cn() - ev < d0 ? Ju(e, ce) : Oh = st(Oh, s)), hi(e, c);
    }
    function M0(e, n) {
      n === Mn && (n = $_(e));
      var s = Ir(), l = Hh(e, n);
      l !== null && (Ds(l, n, s), hi(l, s));
    }
    function RE(e) {
      var n = e.memoizedState, s = Mn;
      n !== null && (s = n.retryLane), M0(e, s);
    }
    function bE(e, n) {
      var s = Mn, l;
      switch (e.tag) {
        case ee:
          l = e.stateNode;
          var c = e.memoizedState;
          c !== null && (s = c.retryLane);
          break;
        case He:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(n), M0(e, s);
    }
    function TE(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : X_(e / 1960) * 1960;
    }
    function ME() {
      if ($f > J_)
        throw $f = 0, rv = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Lh > K_ && (Lh = 0, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function CE() {
      ui.flushLegacyContextWarning(), ui.flushPendingUnsafeLifecycleWarnings();
    }
    function C0(e, n) {
      At(e), qh(e, yi, O_), n && qh(e, tl, U_), qh(e, yi, N_), n && qh(e, tl, F_), Hn();
    }
    function qh(e, n, s) {
      for (var l = e, c = null; l !== null; ) {
        var h = l.subtreeFlags & n;
        l !== c && l.child !== null && h !== Se ? l = l.child : ((l.flags & n) !== Se && s(l), l.sibling !== null ? l = l.sibling : l = c = l.return);
      }
    }
    var Yh = null;
    function w0(e) {
      {
        if ((ht & Tr) !== Un || !(e.mode & Ht))
          return;
        var n = e.tag;
        if (n !== et && n !== ye && n !== ue && n !== $ && n !== H && n !== O && n !== j)
          return;
        var s = Ve(e) || "ReactComponent";
        if (Yh !== null) {
          if (Yh.has(s))
            return;
          Yh.add(s);
        } else
          Yh = /* @__PURE__ */ new Set([s]);
        var l = jr;
        try {
          At(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? At(e) : Hn();
        }
      }
    }
    var lv;
    {
      var wE = null;
      lv = function(e, n, s) {
        var l = L0(wE, n);
        try {
          return Pg(e, n, s);
        } catch (h) {
          if (h !== null && typeof h == "object" && typeof h.then == "function")
            throw h;
          if (i(), Py(), jg(e, n), L0(n, l), n.mode & Ct && Em(n), qg(null, Pg, null, e, n, s), GS()) {
            var c = Yg();
            typeof c == "object" && c !== null && c._suppressLogging && typeof h == "object" && h !== null && !h._suppressLogging && (h._suppressLogging = !0);
          }
          throw h;
        }
      };
    }
    var z0 = !1, uv;
    uv = /* @__PURE__ */ new Set();
    function zE(e) {
      if (wi && !uS())
        switch (e.tag) {
          case $:
          case H:
          case j: {
            var n = mn && Ve(mn) || "Unknown", s = n;
            if (!uv.has(s)) {
              uv.add(s);
              var l = Ve(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, n, n);
            }
            break;
          }
          case ue: {
            z0 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), z0 = !0);
            break;
          }
        }
    }
    function td(e, n) {
      if (gr) {
        var s = e.memoizedUpdaters;
        s.forEach(function(l) {
          cf(e, l, n);
        });
      }
    }
    var ov = {};
    function Wh(e, n) {
      {
        var s = Ma.current;
        return s !== null ? (s.push(n), ov) : pf(e, n);
      }
    }
    function D0(e) {
      if (e !== ov)
        return Dd(e);
    }
    function A0() {
      return Ma.current !== null;
    }
    function DE(e) {
      {
        if (e.mode & Ht) {
          if (!c0())
            return;
        } else if (!G_() || ht !== Un || e.tag !== $ && e.tag !== H && e.tag !== j)
          return;
        if (Ma.current === null) {
          var n = jr;
          try {
            At(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ve(e));
          } finally {
            n ? At(e) : Hn();
          }
        }
      }
    }
    function AE(e) {
      e.tag !== bs && c0() && Ma.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    var ra = null, mc = null, NE = function(e) {
      ra = e;
    };
    function vc(e) {
      {
        if (ra === null)
          return e;
        var n = ra(e);
        return n === void 0 ? e : n.current;
      }
    }
    function cv(e) {
      return vc(e);
    }
    function fv(e) {
      {
        if (ra === null)
          return e;
        var n = ra(e);
        if (n === void 0) {
          if (e != null && typeof e.render == "function") {
            var s = vc(e.render);
            if (e.render !== s) {
              var l = {
                $$typeof: er,
                render: s
              };
              return e.displayName !== void 0 && (l.displayName = e.displayName), l;
            }
          }
          return e;
        }
        return n.current;
      }
    }
    function N0(e, n) {
      {
        if (ra === null)
          return !1;
        var s = e.elementType, l = n.type, c = !1, h = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof l == "function" && (c = !0);
            break;
          }
          case $: {
            (typeof l == "function" || h === Ft) && (c = !0);
            break;
          }
          case H: {
            (h === er || h === Ft) && (c = !0);
            break;
          }
          case O:
          case j: {
            (h === Wn || h === Ft) && (c = !0);
            break;
          }
          default:
            return !1;
        }
        if (c) {
          var g = ra(s);
          if (g !== void 0 && g === ra(l))
            return !0;
        }
        return !1;
      }
    }
    function F0(e) {
      {
        if (ra === null || typeof WeakSet != "function")
          return;
        mc === null && (mc = /* @__PURE__ */ new WeakSet()), mc.add(e);
      }
    }
    var FE = function(e, n) {
      {
        if (ra === null)
          return;
        var s = n.staleFamilies, l = n.updatedFamilies;
        is(), Ph(function() {
          dv(e.current, l, s);
        });
      }
    }, OE = function(e, n) {
      {
        if (e.context !== bt)
          return;
        is(), Ph(function() {
          H0(n, e, null, null);
        });
      }
    };
    function dv(e, n, s) {
      {
        var l = e.alternate, c = e.child, h = e.sibling, g = e.tag, M = e.type, w = null;
        switch (g) {
          case $:
          case j:
          case ue:
            w = M;
            break;
          case H:
            w = M.render;
            break;
        }
        if (ra === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var N = !1, U = !1;
        if (w !== null) {
          var I = ra(w);
          I !== void 0 && (s.has(I) ? U = !0 : n.has(I) && (g === ue ? U = !0 : N = !0));
        }
        mc !== null && (mc.has(e) || l !== null && mc.has(l)) && (U = !0), U && (e._debugNeedsRemount = !0), (U || N) && qn(e, vt, Xt), c !== null && !U && dv(c, n, s), h !== null && dv(h, n, s);
      }
    }
    var UE = function(e, n) {
      {
        var s = /* @__PURE__ */ new Set(), l = new Set(n.map(function(c) {
          return c.current;
        }));
        return hv(e.current, l, s), s;
      }
    };
    function hv(e, n, s) {
      {
        var l = e.child, c = e.sibling, h = e.tag, g = e.type, M = null;
        switch (h) {
          case $:
          case j:
          case ue:
            M = g;
            break;
          case H:
            M = g.render;
            break;
        }
        var w = !1;
        M !== null && n.has(M) && (w = !0), w ? LE(e, s) : l !== null && hv(l, n, s), c !== null && hv(c, n, s);
      }
    }
    function LE(e, n) {
      {
        var s = BE(e, n);
        if (s)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case Re:
              n.add(l.stateNode);
              return;
            case Me:
              n.add(l.stateNode.containerInfo);
              return;
            case ye:
              n.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function BE(e, n) {
      for (var s = e, l = !1; ; ) {
        if (s.tag === Re)
          l = !0, n.add(s.stateNode);
        else if (s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
        if (s === e)
          return l;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === e)
            return l;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
      return !1;
    }
    var pv;
    {
      pv = !1;
      try {
        var O0 = Object.preventExtensions({});
      } catch {
        pv = !0;
      }
    }
    function kE(e, n, s, l) {
      this.tag = e, this.key = s, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = n, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = ce, this.childLanes = ce, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !pv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var zi = function(e, n, s, l) {
      return new kE(e, n, s, l);
    };
    function mv(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function HE(e) {
      return typeof e == "function" && !mv(e) && e.defaultProps === void 0;
    }
    function PE(e) {
      if (typeof e == "function")
        return mv(e) ? ue : $;
      if (e != null) {
        var n = e.$$typeof;
        if (n === er)
          return H;
        if (n === Wn)
          return O;
      }
      return et;
    }
    function $u(e, n) {
      var s = e.alternate;
      s === null ? (s = zi(e.tag, n, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s._debugSource = e._debugSource, s._debugOwner = e._debugOwner, s._debugHookTypes = e._debugHookTypes, s.alternate = e, e.alternate = s) : (s.pendingProps = n, s.type = e.type, s.flags = Se, s.subtreeFlags = Se, s.deletions = null, s.actualDuration = 0, s.actualStartTime = -1), s.flags = e.flags & Ar, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (s.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s.selfBaseDuration = e.selfBaseDuration, s.treeBaseDuration = e.treeBaseDuration, s._debugNeedsRemount = e._debugNeedsRemount, s.tag) {
        case et:
        case $:
        case j:
          s.type = vc(e.type);
          break;
        case ue:
          s.type = cv(e.type);
          break;
        case H:
          s.type = fv(e.type);
          break;
      }
      return s;
    }
    function jE(e, n) {
      e.flags &= Ar | Ut;
      var s = e.alternate;
      if (s === null)
        e.childLanes = ce, e.lanes = n, e.child = null, e.subtreeFlags = Se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = s.childLanes, e.lanes = s.lanes, e.child = s.child, e.subtreeFlags = Se, e.deletions = null, e.memoizedProps = s.memoizedProps, e.memoizedState = s.memoizedState, e.updateQueue = s.updateQueue, e.type = s.type;
        var l = s.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = s.selfBaseDuration, e.treeBaseDuration = s.treeBaseDuration;
      }
      return e;
    }
    function VE(e, n, s) {
      var l;
      return e === Kc ? (l = Ht, n === !0 && (l |= un, l |= ii)) : l = rt, gr && (l |= Ct), zi(ye, null, null, l);
    }
    function vv(e, n, s, l, c, h) {
      var g = et, M = e;
      if (typeof e == "function")
        mv(e) ? (g = ue, M = cv(M)) : M = vc(M);
      else if (typeof e == "string")
        g = Re;
      else
        e:
          switch (e) {
            case Nn:
              return Zl(s.children, c, h, n);
            case $n:
              g = Ze, c |= un, (c & Ht) !== rt && (c |= ii);
              break;
            case fr:
              return IE(s, c, h, n);
            case sn:
              return qE(s, c, h, n);
            case dr:
              return YE(s, c, h, n);
            case zr:
              return U0(s, c, h, n);
            case Qr:
            case hr:
            case ua:
            case cs:
            case la:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Yn:
                    g = xe;
                    break e;
                  case vi:
                    g = Ye;
                    break e;
                  case er:
                    g = H, M = fv(M);
                    break e;
                  case Wn:
                    g = O;
                    break e;
                  case Ft:
                    g = Be, M = null;
                    break e;
                }
              var w = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var N = l ? Ve(l) : null;
                N && (w += `

Check the render method of \`` + N + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + w));
            }
          }
      var U = zi(g, s, n, c);
      return U.elementType = e, U.type = M, U.lanes = h, U._debugOwner = l, U;
    }
    function yv(e, n, s) {
      var l = null;
      l = e._owner;
      var c = e.type, h = e.key, g = e.props, M = vv(c, h, g, l, n, s);
      return M._debugSource = e._source, M._debugOwner = e._owner, M;
    }
    function Zl(e, n, s, l) {
      var c = zi(Le, e, l, n);
      return c.lanes = s, c;
    }
    function IE(e, n, s, l) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var c = zi(ae, e, l, n | Ct);
      return c.elementType = fr, c.lanes = s, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function qE(e, n, s, l) {
      var c = zi(ee, e, l, n);
      return c.elementType = sn, c.lanes = s, c;
    }
    function YE(e, n, s, l) {
      var c = zi(He, e, l, n);
      return c.elementType = dr, c.lanes = s, c;
    }
    function U0(e, n, s, l) {
      var c = zi(at, e, l, n);
      c.elementType = zr, c.lanes = s;
      var h = {};
      return c.stateNode = h, c;
    }
    function gv(e, n, s) {
      var l = zi(ge, e, null, n);
      return l.lanes = s, l;
    }
    function WE() {
      var e = zi(Re, null, null, rt);
      return e.elementType = "DELETED", e;
    }
    function QE(e) {
      var n = zi(je, null, null, rt);
      return n.stateNode = e, n;
    }
    function xv(e, n, s) {
      var l = e.children !== null ? e.children : [], c = zi(Me, l, e.key, n);
      return c.lanes = s, c.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, c;
    }
    function L0(e, n) {
      return e === null && (e = zi(et, null, null, rt)), e.tag = n.tag, e.key = n.key, e.elementType = n.elementType, e.type = n.type, e.stateNode = n.stateNode, e.return = n.return, e.child = n.child, e.sibling = n.sibling, e.index = n.index, e.ref = n.ref, e.pendingProps = n.pendingProps, e.memoizedProps = n.memoizedProps, e.updateQueue = n.updateQueue, e.memoizedState = n.memoizedState, e.dependencies = n.dependencies, e.mode = n.mode, e.flags = n.flags, e.subtreeFlags = n.subtreeFlags, e.deletions = n.deletions, e.lanes = n.lanes, e.childLanes = n.childLanes, e.alternate = n.alternate, e.actualDuration = n.actualDuration, e.actualStartTime = n.actualStartTime, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration, e._debugSource = n._debugSource, e._debugOwner = n._debugOwner, e._debugNeedsRemount = n._debugNeedsRemount, e._debugHookTypes = n._debugHookTypes, e;
    }
    function GE(e, n, s, l, c) {
      this.tag = n, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = fa, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Mn, this.eventTimes = wl(ce), this.expirationTimes = wl(Xt), this.pendingLanes = ce, this.suspendedLanes = ce, this.pingedLanes = ce, this.expiredLanes = ce, this.mutableReadLanes = ce, this.finishedLanes = ce, this.entangledLanes = ce, this.entanglements = wl(ce), this.identifierPrefix = l, this.onRecoverableError = c, Rn && (this.mutableSourceEagerHydrationData = null), this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var h = this.pendingUpdatersLaneMap = [], g = 0; g < Mu; g++)
          h.push(/* @__PURE__ */ new Set());
      }
      switch (n) {
        case Kc:
          this._debugRootType = s ? "hydrateRoot()" : "createRoot()";
          break;
        case bs:
          this._debugRootType = s ? "hydrate()" : "render()";
          break;
      }
    }
    function B0(e, n, s, l, c, h, g, M, w, N) {
      var U = new GE(e, n, s, M, w), I = VE(n, h);
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
      return Pe(I), U;
    }
    var XE = "18.0.0-fc46dba67-20220329";
    function ZE(e, n, s) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Tp(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vt,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: n,
        implementation: s
      };
    }
    var Sv, _v;
    Sv = !1, _v = {};
    function k0(e) {
      if (!e)
        return bt;
      var n = C(e), s = wo(n);
      if (n.tag === ue) {
        var l = n.type;
        if (ri(l))
          return bi(n, l, s);
      }
      return s;
    }
    function JE(e) {
      var n = C(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var s = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + s);
      }
      var l = Nr(n);
      return l === null ? null : l.stateNode;
    }
    function KE(e, n) {
      {
        var s = C(e);
        if (s === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var c = Nr(s);
        if (c === null)
          return null;
        if (c.mode & un) {
          var h = Ve(s) || "Component";
          if (!_v[h]) {
            _v[h] = !0;
            var g = jr;
            try {
              At(c), s.mode & un ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, h) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, h);
            } finally {
              g ? At(g) : Hn();
            }
          }
        }
        return c.stateNode;
      }
    }
    function $E(e, n, s, l, c, h, g, M) {
      var w = !1, N = null;
      return B0(e, n, w, N, s, l, c, h, g);
    }
    function eR(e, n, s, l, c, h, g, M, w, N) {
      var U = !0, I = B0(s, l, U, e, c, h, g, M, w);
      I.context = k0(null);
      var Z = I.current, te = Ir(), de = Gl(Z), me = Je(te, de);
      return me.callback = n ?? null, dt(Z, me), eE(I, de, te), I;
    }
    function H0(e, n, s, l) {
      fn(n, e);
      var c = n.current, h = Ir(), g = Gl(c);
      Xa(g);
      var M = k0(s);
      n.context === null ? n.context = M : n.pendingContext = M, wi && jr !== null && !Sv && (Sv = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ve(jr) || "Unknown"));
      var w = Je(h, g);
      w.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l), dt(c, w);
      var N = qn(c, g, h);
      return N !== null && dn(N, c, g), g;
    }
    function tR(e) {
      var n = e.current;
      if (!n.child)
        return null;
      switch (n.child.tag) {
        case Re:
          return Zr(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }
    function nR(e) {
      switch (e.tag) {
        case ye:
          var n = e.stateNode;
          if (Za(n)) {
            var s = sf(n);
            rE(n, s);
          }
          break;
        case ee:
          var l = Ir();
          Ph(function() {
            return qn(e, vt, l);
          });
          var c = vt;
          Ev(e, c);
          break;
      }
    }
    function P0(e, n) {
      var s = e.memoizedState;
      s !== null && s.dehydrated !== null && (s.retryLane = ze(s.retryLane, n));
    }
    function Ev(e, n) {
      P0(e, n);
      var s = e.alternate;
      s && P0(s, n);
    }
    function rR(e) {
      if (e.tag === ee) {
        var n = Ir(), s = qa;
        qn(e, s, n), Ev(e, s);
      }
    }
    function iR(e) {
      if (e.tag === ee) {
        var n = Ir(), s = Gl(e);
        qn(e, s, n), Ev(e, s);
      }
    }
    function aR(e) {
      var n = Bt(e);
      return n === null ? null : n.stateNode;
    }
    var j0 = function(e) {
      return null;
    };
    function V0(e) {
      return j0(e);
    }
    var I0 = function(e) {
      return !1;
    };
    function q0(e) {
      return I0(e);
    }
    var Y0 = null, W0 = null, Q0 = null, G0 = null, X0 = null, Z0 = null, J0 = null, K0 = null, $0 = null;
    {
      var ex = function(e, n, s) {
        var l = n[s], c = kt(e) ? e.slice() : _({}, e);
        return s + 1 === n.length ? (kt(c) ? c.splice(l, 1) : delete c[l], c) : (c[l] = ex(e[l], n, s + 1), c);
      }, tx = function(e, n) {
        return ex(e, n, 0);
      }, nx = function(e, n, s, l) {
        var c = n[l], h = kt(e) ? e.slice() : _({}, e);
        if (l + 1 === n.length) {
          var g = s[l];
          h[g] = h[c], kt(h) ? h.splice(c, 1) : delete h[c];
        } else
          h[c] = nx(
            // $FlowFixMe number or string is fine here
            e[c],
            n,
            s,
            l + 1
          );
        return h;
      }, rx = function(e, n, s) {
        if (n.length !== s.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < s.length - 1; l++)
            if (n[l] !== s[l]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nx(e, n, s, 0);
      }, ix = function(e, n, s, l) {
        if (s >= n.length)
          return l;
        var c = n[s], h = kt(e) ? e.slice() : _({}, e);
        return h[c] = ix(e[c], n, s + 1, l), h;
      }, ax = function(e, n, s) {
        return ix(e, n, 0, s);
      }, Rv = function(e, n) {
        for (var s = e.memoizedState; s !== null && n > 0; )
          s = s.next, n--;
        return s;
      };
      Y0 = function(e, n, s, l) {
        var c = Rv(e, n);
        if (c !== null) {
          var h = ax(c.memoizedState, s, l);
          c.memoizedState = h, c.baseState = h, e.memoizedProps = _({}, e.memoizedProps), qn(e, vt, Xt);
        }
      }, W0 = function(e, n, s) {
        var l = Rv(e, n);
        if (l !== null) {
          var c = tx(l.memoizedState, s);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = _({}, e.memoizedProps), qn(e, vt, Xt);
        }
      }, Q0 = function(e, n, s, l) {
        var c = Rv(e, n);
        if (c !== null) {
          var h = rx(c.memoizedState, s, l);
          c.memoizedState = h, c.baseState = h, e.memoizedProps = _({}, e.memoizedProps), qn(e, vt, Xt);
        }
      }, G0 = function(e, n, s) {
        e.pendingProps = ax(e.memoizedProps, n, s), e.alternate && (e.alternate.pendingProps = e.pendingProps), qn(e, vt, Xt);
      }, X0 = function(e, n) {
        e.pendingProps = tx(e.memoizedProps, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), qn(e, vt, Xt);
      }, Z0 = function(e, n, s) {
        e.pendingProps = rx(e.memoizedProps, n, s), e.alternate && (e.alternate.pendingProps = e.pendingProps), qn(e, vt, Xt);
      }, J0 = function(e) {
        qn(e, vt, Xt);
      }, K0 = function(e) {
        j0 = e;
      }, $0 = function(e) {
        I0 = e;
      };
    }
    function sR(e) {
      var n = Nr(e);
      return n === null ? null : n.stateNode;
    }
    function lR(e) {
      return null;
    }
    function uR() {
      return jr;
    }
    function oR(e) {
      var n = e.findFiberByHostInstance, s = m.ReactCurrentDispatcher;
      return yf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Y0,
        overrideHookStateDeletePath: W0,
        overrideHookStateRenamePath: Q0,
        overrideProps: G0,
        overridePropsDeletePath: X0,
        overridePropsRenamePath: Z0,
        setErrorHandler: K0,
        setSuspenseHandler: $0,
        scheduleUpdate: J0,
        currentDispatcherRef: s,
        findHostInstanceByFiber: sR,
        findFiberByHostInstance: n || lR,
        // React Refresh
        findHostInstancesForRefresh: UE,
        scheduleRefresh: FE,
        scheduleRoot: OE,
        setRefreshHandler: NE,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: uR,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: XE
      });
    }
    return a.attemptContinuousHydration = rR, a.attemptHydrationAtCurrentPriority = iR, a.attemptSynchronousHydration = nR, a.batchedUpdates = aE, a.createComponentSelector = L_, a.createContainer = $E, a.createHasPseudoClassSelector = B_, a.createHydrationContainer = eR, a.createPortal = ZE, a.createRoleSelector = k_, a.createTestNameSelector = P_, a.createTextSelector = H_, a.deferredUpdates = iE, a.discreteUpdates = sE, a.findAllNodes = Dh, a.findBoundingRects = I_, a.findHostInstance = JE, a.findHostInstanceWithNoPortals = aR, a.findHostInstanceWithWarning = KE, a.flushControlled = uE, a.flushPassiveEffects = is, a.flushSync = Ph, a.focusWithin = q_, a.getCurrentUpdatePriority = kr, a.getFindAllNodesFailureDescription = V_, a.getPublicRootInstance = tR, a.injectIntoDevTools = oR, a.isAlreadyRendering = lE, a.observeVisibleRects = W_, a.registerMutableSourceForHydration = nS, a.runWithPriority = df, a.shouldError = V0, a.shouldSuspend = q0, a.updateContainer = H0, a;
  })), Qv.exports;
}
process.env.NODE_ENV === "production" ? ry.exports = Rb() : ry.exports = bb();
var Tb = ry.exports;
const Mb = /* @__PURE__ */ dR(Tb);
var iy = { exports: {} }, Gv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n1;
function Cb() {
  return n1 || (n1 = 1, function(S) {
    function t(H, ae) {
      var ee = H.length;
      H.push(ae);
      e:
        for (; 0 < ee; ) {
          var O = ee - 1 >>> 1, j = H[O];
          if (0 < d(j, ae))
            H[O] = ae, H[ee] = j, ee = O;
          else
            break e;
        }
    }
    function a(H) {
      return H.length === 0 ? null : H[0];
    }
    function u(H) {
      if (H.length === 0)
        return null;
      var ae = H[0], ee = H.pop();
      if (ee !== ae) {
        H[0] = ee;
        e:
          for (var O = 0, j = H.length, Be = j >>> 1; O < Be; ) {
            var ke = 2 * (O + 1) - 1, je = H[ke], He = ke + 1, tt = H[He];
            if (0 > d(je, ee))
              He < j && 0 > d(tt, je) ? (H[O] = tt, H[He] = ee, O = He) : (H[O] = je, H[ke] = ee, O = ke);
            else if (He < j && 0 > d(tt, ee))
              H[O] = tt, H[He] = ee, O = He;
            else
              break e;
          }
      }
      return ae;
    }
    function d(H, ae) {
      var ee = H.sortIndex - ae.sortIndex;
      return ee !== 0 ? ee : H.id - ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      S.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, T = v.now();
      S.unstable_now = function() {
        return v.now() - T;
      };
    }
    var b = [], y = [], E = 1, _ = null, C = 3, z = !1, A = !1, B = !1, k = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(H) {
      for (var ae = a(y); ae !== null; ) {
        if (ae.callback === null)
          u(y);
        else if (ae.startTime <= H)
          u(y), ae.sortIndex = ae.expirationTime, t(b, ae);
        else
          break;
        ae = a(y);
      }
    }
    function fe(H) {
      if (B = !1, ie(H), !A)
        if (a(b) !== null)
          A = !0, Ye(ve);
        else {
          var ae = a(y);
          ae !== null && xe(fe, ae.startTime - H);
        }
    }
    function ve(H, ae) {
      A = !1, B && (B = !1, V(ue), ue = -1), z = !0;
      var ee = C;
      try {
        for (ie(ae), _ = a(b); _ !== null && (!(_.expirationTime > ae) || H && !Me()); ) {
          var O = _.callback;
          if (typeof O == "function") {
            _.callback = null, C = _.priorityLevel;
            var j = O(_.expirationTime <= ae);
            ae = S.unstable_now(), typeof j == "function" ? _.callback = j : _ === a(b) && u(b), ie(ae);
          } else
            u(b);
          _ = a(b);
        }
        if (_ !== null)
          var Be = !0;
        else {
          var ke = a(y);
          ke !== null && xe(fe, ke.startTime - ae), Be = !1;
        }
        return Be;
      } finally {
        _ = null, C = ee, z = !1;
      }
    }
    var be = !1, $ = null, ue = -1, et = 5, ye = -1;
    function Me() {
      return !(S.unstable_now() - ye < et);
    }
    function Re() {
      if ($ !== null) {
        var H = S.unstable_now();
        ye = H;
        var ae = !0;
        try {
          ae = $(!0, H);
        } finally {
          ae ? ge() : (be = !1, $ = null);
        }
      } else
        be = !1;
    }
    var ge;
    if (typeof se == "function")
      ge = function() {
        se(Re);
      };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), Ze = Le.port2;
      Le.port1.onmessage = Re, ge = function() {
        Ze.postMessage(null);
      };
    } else
      ge = function() {
        k(Re, 0);
      };
    function Ye(H) {
      $ = H, be || (be = !0, ge());
    }
    function xe(H, ae) {
      ue = k(function() {
        H(S.unstable_now());
      }, ae);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, S.unstable_continueExecution = function() {
      A || z || (A = !0, Ye(ve));
    }, S.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : et = 0 < H ? Math.floor(1e3 / H) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, S.unstable_getFirstCallbackNode = function() {
      return a(b);
    }, S.unstable_next = function(H) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = C;
      }
      var ee = C;
      C = ae;
      try {
        return H();
      } finally {
        C = ee;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(H, ae) {
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
      var ee = C;
      C = H;
      try {
        return ae();
      } finally {
        C = ee;
      }
    }, S.unstable_scheduleCallback = function(H, ae, ee) {
      var O = S.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? O + ee : O) : ee = O, H) {
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
      return j = ee + j, H = { id: E++, callback: ae, priorityLevel: H, startTime: ee, expirationTime: j, sortIndex: -1 }, ee > O ? (H.sortIndex = ee, t(y, H), a(b) === null && H === a(y) && (B ? (V(ue), ue = -1) : B = !0, xe(fe, ee - O))) : (H.sortIndex = j, t(b, H), A || z || (A = !0, Ye(ve))), H;
    }, S.unstable_shouldYield = Me, S.unstable_wrapCallback = function(H) {
      var ae = C;
      return function() {
        var ee = C;
        C = ae;
        try {
          return H.apply(this, arguments);
        } finally {
          C = ee;
        }
      };
    };
  }(Gv)), Gv;
}
var Xv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r1;
function wb() {
  return r1 || (r1 = 1, function(S) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = !1, a = !1, u = 5;
      function d(G, oe) {
        var De = G.length;
        G.push(oe), T(G, oe, De);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function v(G) {
        if (G.length === 0)
          return null;
        var oe = G[0], De = G.pop();
        return De !== oe && (G[0] = De, b(G, De, 0)), oe;
      }
      function T(G, oe, De) {
        for (var Xe = De; Xe > 0; ) {
          var Ne = Xe - 1 >>> 1, It = G[Ne];
          if (y(It, oe) > 0)
            G[Ne] = oe, G[Xe] = It, Xe = Ne;
          else
            return;
        }
      }
      function b(G, oe, De) {
        for (var Xe = De, Ne = G.length, It = Ne >>> 1; Xe < It; ) {
          var St = (Xe + 1) * 2 - 1, Ve = G[St], Se = St + 1, Fn = G[Se];
          if (y(Ve, oe) < 0)
            Se < Ne && y(Fn, Ve) < 0 ? (G[Xe] = Fn, G[Se] = oe, Xe = Se) : (G[Xe] = Ve, G[St] = oe, Xe = St);
          else if (Se < Ne && y(Fn, oe) < 0)
            G[Xe] = Fn, G[Se] = oe, Xe = Se;
          else
            return;
        }
      }
      function y(G, oe) {
        var De = G.sortIndex - oe.sortIndex;
        return De !== 0 ? De : G.id - oe.id;
      }
      var E = 1, _ = 2, C = 3, z = 4, A = 5;
      function B(G, oe) {
      }
      var k = typeof performance == "object" && typeof performance.now == "function";
      if (k) {
        var V = performance;
        S.unstable_now = function() {
          return V.now();
        };
      } else {
        var se = Date, ie = se.now();
        S.unstable_now = function() {
          return se.now() - ie;
        };
      }
      var fe = 1073741823, ve = -1, be = 250, $ = 5e3, ue = 1e4, et = fe, ye = [], Me = [], Re = 1, ge = null, Le = C, Ze = !1, Ye = !1, xe = !1, H = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function O(G) {
        for (var oe = m(Me); oe !== null; ) {
          if (oe.callback === null)
            v(Me);
          else if (oe.startTime <= G)
            v(Me), oe.sortIndex = oe.expirationTime, d(ye, oe);
          else
            return;
          oe = m(Me);
        }
      }
      function j(G) {
        if (xe = !1, O(G), !Ye)
          if (m(ye) !== null)
            Ye = !0, zr(Be);
          else {
            var oe = m(Me);
            oe !== null && Qr(j, oe.startTime - G);
          }
      }
      function Be(G, oe) {
        Ye = !1, xe && (xe = !1, ua()), Ze = !0;
        var De = Le;
        try {
          var Xe;
          if (!a)
            return ke(G, oe);
        } finally {
          ge = null, Le = De, Ze = !1;
        }
      }
      function ke(G, oe) {
        var De = oe;
        for (O(De), ge = m(ye); ge !== null && !t && !(ge.expirationTime > De && (!G || er())); ) {
          var Xe = ge.callback;
          if (typeof Xe == "function") {
            ge.callback = null, Le = ge.priorityLevel;
            var Ne = ge.expirationTime <= De, It = Xe(Ne);
            De = S.unstable_now(), typeof It == "function" ? ge.callback = It : ge === m(ye) && v(ye), O(De);
          } else
            v(ye);
          ge = m(ye);
        }
        if (ge !== null)
          return !0;
        var St = m(Me);
        return St !== null && Qr(j, St.startTime - De), !1;
      }
      function je(G, oe) {
        switch (G) {
          case E:
          case _:
          case C:
          case z:
          case A:
            break;
          default:
            G = C;
        }
        var De = Le;
        Le = G;
        try {
          return oe();
        } finally {
          Le = De;
        }
      }
      function He(G) {
        var oe;
        switch (Le) {
          case E:
          case _:
          case C:
            oe = C;
            break;
          default:
            oe = Le;
            break;
        }
        var De = Le;
        Le = oe;
        try {
          return G();
        } finally {
          Le = De;
        }
      }
      function tt(G) {
        var oe = Le;
        return function() {
          var De = Le;
          Le = oe;
          try {
            return G.apply(this, arguments);
          } finally {
            Le = De;
          }
        };
      }
      function at(G, oe, De) {
        var Xe = S.unstable_now(), Ne;
        if (typeof De == "object" && De !== null) {
          var It = De.delay;
          typeof It == "number" && It > 0 ? Ne = Xe + It : Ne = Xe;
        } else
          Ne = Xe;
        var St;
        switch (G) {
          case E:
            St = ve;
            break;
          case _:
            St = be;
            break;
          case A:
            St = et;
            break;
          case z:
            St = ue;
            break;
          case C:
          default:
            St = $;
            break;
        }
        var Ve = Ne + St, Se = {
          id: Re++,
          callback: oe,
          priorityLevel: G,
          startTime: Ne,
          expirationTime: Ve,
          sortIndex: -1
        };
        return Ne > Xe ? (Se.sortIndex = Ne, d(Me, Se), m(ye) === null && Se === m(Me) && (xe ? ua() : xe = !0, Qr(j, Ne - Xe))) : (Se.sortIndex = Ve, d(ye, Se), !Ye && !Ze && (Ye = !0, zr(Be))), Se;
      }
      function ot() {
      }
      function Gt() {
        !Ye && !Ze && (Ye = !0, zr(Be));
      }
      function An() {
        return m(ye);
      }
      function cr(G) {
        G.callback = null;
      }
      function Vt() {
        return Le;
      }
      var Nn = !1, $n = null, fr = -1, Yn = u, vi = -1;
      function er() {
        var G = S.unstable_now() - vi;
        return !(G < Yn);
      }
      function sn() {
      }
      function dr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Yn = Math.floor(1e3 / G) : Yn = u;
      }
      var Wn = function() {
        if ($n !== null) {
          var G = S.unstable_now();
          vi = G;
          var oe = !0, De = !0;
          try {
            De = $n(oe, G);
          } finally {
            De ? Ft() : (Nn = !1, $n = null);
          }
        } else
          Nn = !1;
      }, Ft;
      if (typeof ee == "function")
        Ft = function() {
          ee(Wn);
        };
      else if (typeof MessageChannel < "u") {
        var hr = new MessageChannel(), la = hr.port2;
        hr.port1.onmessage = Wn, Ft = function() {
          la.postMessage(null);
        };
      } else
        Ft = function() {
          H(Wn, 0);
        };
      function zr(G) {
        $n = G, Nn || (Nn = !0, Ft());
      }
      function Qr(G, oe) {
        fr = H(function() {
          G(S.unstable_now());
        }, oe);
      }
      function ua() {
        ae(fr), fr = -1;
      }
      var cs = sn, Na = null;
      S.unstable_IdlePriority = A, S.unstable_ImmediatePriority = E, S.unstable_LowPriority = z, S.unstable_NormalPriority = C, S.unstable_Profiling = Na, S.unstable_UserBlockingPriority = _, S.unstable_cancelCallback = cr, S.unstable_continueExecution = Gt, S.unstable_forceFrameRate = dr, S.unstable_getCurrentPriorityLevel = Vt, S.unstable_getFirstCallbackNode = An, S.unstable_next = He, S.unstable_pauseExecution = ot, S.unstable_requestPaint = cs, S.unstable_runWithPriority = je, S.unstable_scheduleCallback = at, S.unstable_shouldYield = er, S.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Xv)), Xv;
}
process.env.NODE_ENV === "production" ? iy.exports = Cb() : iy.exports = wb();
var i1 = iy.exports;
const hy = {}, zb = (S) => void Object.assign(hy, S);
function Db(S, t) {
  function a(E, {
    args: _ = [],
    attach: C,
    ...z
  }, A) {
    let B = `${E[0].toUpperCase()}${E.slice(1)}`, k;
    if (E === "primitive") {
      if (z.object === void 0)
        throw new Error("R3F: Primitives without 'object' are invalid!");
      const V = z.object;
      k = ld(V, {
        type: E,
        root: A,
        attach: C,
        primitive: !0
      });
    } else {
      const V = hy[B];
      if (!V)
        throw new Error(`R3F: ${B} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
      if (!Array.isArray(_))
        throw new Error("R3F: The args prop must be an array!");
      k = ld(new V(..._), {
        type: E,
        root: A,
        attach: C,
        // Save args in case we need to reconstruct later for HMR
        memoizedProps: {
          args: _
        }
      });
    }
    return k.__r3f.attach === void 0 && (k instanceof uo ? k.__r3f.attach = "geometry" : k instanceof gp && (k.__r3f.attach = "material")), B !== "inject" && Kv(k, z), k;
  }
  function u(E, _) {
    let C = !1;
    if (_) {
      var z, A;
      (z = _.__r3f) != null && z.attach ? Jv(E, _, _.__r3f.attach) : _.isObject3D && E.isObject3D && (E.add(_), C = !0), C || (A = E.__r3f) == null || A.objects.push(_), _.__r3f || ld(_, {}), _.__r3f.parent = E, sy(_), Oc(_);
    }
  }
  function d(E, _, C) {
    let z = !1;
    if (_) {
      var A, B;
      if ((A = _.__r3f) != null && A.attach)
        Jv(E, _, _.__r3f.attach);
      else if (_.isObject3D && E.isObject3D) {
        _.parent = E, _.dispatchEvent({
          type: "added"
        }), E.dispatchEvent({
          type: "childadded",
          child: _
        });
        const k = E.children.filter((se) => se !== _), V = k.indexOf(C);
        E.children = [...k.slice(0, V), _, ...k.slice(V)], z = !0;
      }
      z || (B = E.__r3f) == null || B.objects.push(_), _.__r3f || ld(_, {}), _.__r3f.parent = E, sy(_), Oc(_);
    }
  }
  function m(E, _, C = !1) {
    E && [...E].forEach((z) => v(_, z, C));
  }
  function v(E, _, C) {
    if (_) {
      var z, A, B;
      if (_.__r3f && (_.__r3f.parent = null), (z = E.__r3f) != null && z.objects && (E.__r3f.objects = E.__r3f.objects.filter((fe) => fe !== _)), (A = _.__r3f) != null && A.attach)
        o1(E, _, _.__r3f.attach);
      else if (_.isObject3D && E.isObject3D) {
        var k;
        E.remove(_), (k = _.__r3f) != null && k.root && kb(mp(_), _);
      }
      const se = (B = _.__r3f) == null ? void 0 : B.primitive, ie = !se && (C === void 0 ? _.dispose !== null : C);
      if (!se) {
        var V;
        m((V = _.__r3f) == null ? void 0 : V.objects, _, ie), m(_.children, _, ie);
      }
      if (delete _.__r3f, ie && _.dispose && _.type !== "Scene") {
        const fe = () => {
          try {
            _.dispose();
          } catch {
          }
        };
        typeof IS_REACT_ACT_ENVIRONMENT > "u" ? i1.unstable_scheduleCallback(i1.unstable_IdlePriority, fe) : fe();
      }
      Oc(E);
    }
  }
  function T(E, _, C, z) {
    var A;
    const B = (A = E.__r3f) == null ? void 0 : A.parent;
    if (!B)
      return;
    const k = a(_, C, E.__r3f.root);
    if (E.children) {
      for (const V of E.children)
        V.__r3f && u(k, V);
      E.children = E.children.filter((V) => !V.__r3f);
    }
    E.__r3f.objects.forEach((V) => u(k, V)), E.__r3f.objects = [], E.__r3f.autoRemovedBeforeAppend || v(B, E), k.parent && (k.__r3f.autoRemovedBeforeAppend = !0), u(B, k), k.raycast && k.__r3f.eventCount && mp(k).getState().internal.interaction.push(k), [z, z.alternate].forEach((V) => {
      V !== null && (V.stateNode = k, V.ref && (typeof V.ref == "function" ? V.ref(k) : V.ref.current = k));
    });
  }
  const b = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");
  return {
    reconciler: Mb({
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
      appendChildToContainer: (E, _) => {
        if (!_)
          return;
        const C = E.getState().scene;
        C.__r3f && (C.__r3f.root = E, u(C, _));
      },
      removeChildFromContainer: (E, _) => {
        _ && v(E.getState().scene, _);
      },
      insertInContainerBefore: (E, _, C) => {
        if (!_ || !C)
          return;
        const z = E.getState().scene;
        z.__r3f && d(z, _, C);
      },
      getRootHostContext: () => null,
      getChildHostContext: (E) => E,
      finalizeInitialChildren(E) {
        var _;
        return !!((_ = E == null ? void 0 : E.__r3f) != null ? _ : {}).handlers;
      },
      prepareUpdate(E, _, C, z) {
        var A;
        if (((A = E == null ? void 0 : E.__r3f) != null ? A : {}).primitive && z.object && z.object !== E)
          return [!0];
        {
          const {
            args: k = [],
            children: V,
            ...se
          } = z, {
            args: ie = [],
            children: fe,
            ...ve
          } = C;
          if (!Array.isArray(k))
            throw new Error("R3F: the args prop must be an array!");
          if (k.some(($, ue) => $ !== ie[ue]))
            return [!0];
          const be = w1(E, se, ve, !0);
          return be.changes.length ? [!1, be] : null;
        }
      },
      commitUpdate(E, [_, C], z, A, B, k) {
        _ ? T(E, z, B, k) : Kv(E, C);
      },
      commitMount(E, _, C, z) {
        var A;
        const B = (A = E.__r3f) != null ? A : {};
        E.raycast && B.handlers && B.eventCount && mp(E).getState().internal.interaction.push(E);
      },
      getPublicInstance: (E) => E,
      prepareForCommit: () => null,
      preparePortalMount: (E) => ld(E.getState().scene),
      resetAfterCommit: () => {
      },
      shouldSetTextContent: () => !1,
      clearContainer: () => !1,
      hideInstance(E) {
        var _;
        const {
          attach: C,
          parent: z
        } = (_ = E.__r3f) != null ? _ : {};
        C && z && o1(z, E, C), E.isObject3D && (E.visible = !1), Oc(E);
      },
      unhideInstance(E, _) {
        var C;
        const {
          attach: z,
          parent: A
        } = (C = E.__r3f) != null ? C : {};
        z && A && Jv(A, E, z), (E.isObject3D && _.visible == null || _.visible) && (E.visible = !0), Oc(E);
      },
      createTextInstance: b,
      hideTextInstance: b,
      unhideTextInstance: b,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
      // @ts-ignore
      getCurrentEventPriority: () => t ? t() : cd.DefaultEventPriority,
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
    applyProps: Kv
  };
}
var a1, s1;
const Zv = (S) => "colorSpace" in S || "outputColorSpace" in S, Ab = () => {
  var S;
  return (S = hy.ColorManagement) != null ? S : null;
}, M1 = typeof window < "u" && ((a1 = window.document) != null && a1.createElement || ((s1 = window.navigator) == null ? void 0 : s1.product) === "ReactNative") ? gn.useLayoutEffect : gn.useEffect;
function Nb(S) {
  const t = gn.useRef(S);
  return M1(() => void (t.current = S), [S]), t;
}
class Fb extends gn.Component {
  constructor(...t) {
    super(...t), this.state = {
      error: !1
    };
  }
  componentDidCatch(t) {
    this.props.set(t);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}
Fb.getDerivedStateFromError = () => ({
  error: !0
});
const C1 = "__default", l1 = /* @__PURE__ */ new Map(), Ob = (S) => S && !!S.memoized && !!S.changes;
function mp(S) {
  let t = S.__r3f.root;
  for (; t.getState().previousRoot; )
    t = t.getState().previousRoot;
  return t;
}
const mi = {
  obj: (S) => S === Object(S) && !mi.arr(S) && typeof S != "function",
  fun: (S) => typeof S == "function",
  str: (S) => typeof S == "string",
  num: (S) => typeof S == "number",
  boo: (S) => typeof S == "boolean",
  und: (S) => S === void 0,
  arr: (S) => Array.isArray(S),
  equ(S, t, {
    arrays: a = "shallow",
    objects: u = "reference",
    strict: d = !0
  } = {}) {
    if (typeof S != typeof t || !!S != !!t)
      return !1;
    if (mi.str(S) || mi.num(S))
      return S === t;
    const m = mi.obj(S);
    if (m && u === "reference")
      return S === t;
    const v = mi.arr(S);
    if (v && a === "reference")
      return S === t;
    if ((v || m) && S === t)
      return !0;
    let T;
    for (T in S)
      if (!(T in t))
        return !1;
    if (m && a === "shallow" && u === "shallow") {
      for (T in d ? t : S)
        if (!mi.equ(S[T], t[T], {
          strict: d,
          objects: "reference"
        }))
          return !1;
    } else
      for (T in d ? t : S)
        if (S[T] !== t[T])
          return !1;
    if (mi.und(T)) {
      if (v && S.length === 0 && t.length === 0 || m && Object.keys(S).length === 0 && Object.keys(t).length === 0)
        return !0;
      if (S !== t)
        return !1;
    }
    return !0;
  }
};
function ld(S, t) {
  const a = S;
  return a.__r3f = {
    type: "",
    root: null,
    previousAttach: null,
    memoizedProps: {},
    eventCount: 0,
    handlers: {},
    objects: [],
    parent: null,
    ...t
  }, S;
}
function ay(S, t) {
  let a = S;
  if (t.includes("-")) {
    const u = t.split("-"), d = u.pop();
    return a = u.reduce((m, v) => m[v], S), {
      target: a,
      key: d
    };
  } else
    return {
      target: a,
      key: t
    };
}
const u1 = /-\d+$/;
function Jv(S, t, a) {
  if (mi.str(a)) {
    if (u1.test(a)) {
      const m = a.replace(u1, ""), {
        target: v,
        key: T
      } = ay(S, m);
      Array.isArray(v[T]) || (v[T] = []);
    }
    const {
      target: u,
      key: d
    } = ay(S, a);
    t.__r3f.previousAttach = u[d], u[d] = t;
  } else
    t.__r3f.previousAttach = a(S, t);
}
function o1(S, t, a) {
  var u, d;
  if (mi.str(a)) {
    const {
      target: m,
      key: v
    } = ay(S, a), T = t.__r3f.previousAttach;
    T === void 0 ? delete m[v] : m[v] = T;
  } else
    (u = t.__r3f) == null || u.previousAttach == null || u.previousAttach(S, t);
  (d = t.__r3f) == null || delete d.previousAttach;
}
function w1(S, {
  children: t,
  key: a,
  ref: u,
  ...d
}, {
  children: m,
  key: v,
  ref: T,
  ...b
} = {}, y = !1) {
  var E;
  const _ = (E = S == null ? void 0 : S.__r3f) != null ? E : {}, C = Object.entries(d), z = [];
  if (y) {
    const B = Object.keys(b);
    for (let k = 0; k < B.length; k++)
      d.hasOwnProperty(B[k]) || C.unshift([B[k], C1 + "remove"]);
  }
  C.forEach(([B, k]) => {
    var V;
    if ((V = S.__r3f) != null && V.primitive && B === "object" || mi.equ(k, b[B]))
      return;
    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(B))
      return z.push([B, k, !0, []]);
    let se = [];
    B.includes("-") && (se = B.split("-")), z.push([B, k, !1, se]);
    for (const ie in d) {
      const fe = d[ie];
      ie.startsWith(`${B}-`) && z.push([ie, fe, !1, ie.split("-")]);
    }
  });
  const A = {
    ...d
  };
  return _.memoizedProps && _.memoizedProps.args && (A.args = _.memoizedProps.args), _.memoizedProps && _.memoizedProps.attach && (A.attach = _.memoizedProps.attach), {
    memoized: A,
    changes: z
  };
}
const Ub = typeof process < "u" && process.env.NODE_ENV !== "production";
function Kv(S, t) {
  var a, u, d;
  const m = (a = S.__r3f) != null ? a : {}, v = m.root, T = (u = v == null || v.getState == null ? void 0 : v.getState()) != null ? u : {}, {
    memoized: b,
    changes: y
  } = Ob(t) ? t : w1(S, t), E = m.eventCount;
  S.__r3f && (S.__r3f.memoizedProps = b);
  for (let C = 0; C < y.length; C++) {
    let [z, A, B, k] = y[C];
    if (Zv(S)) {
      const fe = "srgb", ve = "srgb-linear";
      z === "encoding" ? (z = "colorSpace", A = A === 3001 ? fe : ve) : z === "outputEncoding" && (z = "outputColorSpace", A = A === 3001 ? fe : ve);
    }
    let V = S, se = V[z];
    if (k.length && (se = k.reduce((ie, fe) => ie[fe], S), !(se && se.set))) {
      const [ie, ...fe] = k.reverse();
      V = fe.reverse().reduce((ve, be) => ve[be], S), z = ie;
    }
    if (A === C1 + "remove")
      if (V.constructor) {
        let ie = l1.get(V.constructor);
        ie || (ie = new V.constructor(), l1.set(V.constructor, ie)), A = ie[z];
      } else
        A = 0;
    if (B)
      A ? m.handlers[z] = A : delete m.handlers[z], m.eventCount = Object.keys(m.handlers).length;
    else if (se && se.set && (se.copy || se instanceof pp)) {
      if (Array.isArray(A))
        se.fromArray ? se.fromArray(A) : se.set(...A);
      else if (se.copy && A && A.constructor && // Some environments may break strict identity checks by duplicating versions of three.js.
      // Loosen to unminified names, ignoring descendents.
      // https://github.com/pmndrs/react-three-fiber/issues/2856
      // TODO: fix upstream and remove in v9
      (Ub ? se.constructor.name === A.constructor.name : se.constructor === A.constructor))
        se.copy(A);
      else if (A !== void 0) {
        const ie = se instanceof kc;
        !ie && se.setScalar ? se.setScalar(A) : se instanceof pp && A instanceof pp ? se.mask = A.mask : se.set(A), !Ab() && !T.linear && ie && se.convertSRGBToLinear();
      }
    } else if (V[z] = A, V[z] instanceof os && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
    V[z].format === p1 && V[z].type === d1) {
      const ie = V[z];
      Zv(ie) && Zv(T.gl) ? ie.colorSpace = T.gl.outputColorSpace : ie.encoding = T.gl.outputEncoding;
    }
    Oc(S);
  }
  if (m.parent && S.raycast && E !== m.eventCount) {
    const C = mp(S).getState().internal, z = C.interaction.indexOf(S);
    z > -1 && C.interaction.splice(z, 1), m.eventCount && C.interaction.push(S);
  }
  return !(y.length === 1 && y[0][0] === "onUpdate") && y.length && (d = S.__r3f) != null && d.parent && sy(S), S;
}
function Oc(S) {
  var t, a;
  const u = (t = S.__r3f) == null || (a = t.root) == null || a.getState == null ? void 0 : a.getState();
  u && u.internal.frames === 0 && u.invalidate();
}
function sy(S) {
  S.onUpdate == null || S.onUpdate(S);
}
function Lb() {
  var S;
  const t = typeof self < "u" && self || typeof window < "u" && window;
  if (!t)
    return cd.DefaultEventPriority;
  switch ((S = t.event) == null ? void 0 : S.type) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return cd.DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return cd.ContinuousEventPriority;
    default:
      return cd.DefaultEventPriority;
  }
}
function Bb(S, t, a, u) {
  const d = a.get(t);
  d && (a.delete(t), a.size === 0 && (S.delete(u), d.target.releasePointerCapture(u)));
}
function kb(S, t) {
  const {
    internal: a
  } = S.getState();
  a.interaction = a.interaction.filter((u) => u !== t), a.initialHits = a.initialHits.filter((u) => u !== t), a.hovered.forEach((u, d) => {
    (u.eventObject === t || u.object === t) && a.hovered.delete(d);
  }), a.capturedMap.forEach((u, d) => {
    Bb(a.capturedMap, t, u, d);
  });
}
const Hb = /* @__PURE__ */ gn.createContext(null);
function z1() {
  const S = gn.useContext(Hb);
  if (!S)
    throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return S;
}
function ly(S = (a) => a, t) {
  return z1()(S, t);
}
function Pb(S, t = 0) {
  const a = z1(), u = a.getState().internal.subscribe, d = Nb(S);
  return M1(() => u(d, t, a), [t, u, a]), null;
}
const jb = /* @__PURE__ */ new Map(), {
  reconciler: Vb,
  applyProps: gT
} = Db(jb, Lb);
Vb.injectIntoDevTools({
  bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
  rendererPackageName: "@react-three/fiber",
  version: gn.version
});
function Ib(S, t, a, u) {
  const d = class extends dy {
    constructor(v = {}) {
      const T = Object.entries(S);
      super({
        uniforms: T.reduce((b, [y, E]) => {
          const _ = cb.clone({
            [y]: {
              value: E
            }
          });
          return {
            ...b,
            ..._
          };
        }, {}),
        vertexShader: t,
        fragmentShader: a
      }), this.key = "", T.forEach(([b]) => Object.defineProperty(this, b, {
        get: () => this.uniforms[b].value,
        set: (y) => this.uniforms[b].value = y
      })), Object.assign(this, v);
    }
  };
  return d.key = PR.generateUUID(), d;
}
function au(S, t, a) {
  const u = ly((C) => C.size), d = ly((C) => C.viewport), m = typeof S == "number" ? S : u.width * d.dpr, v = typeof t == "number" ? t : u.height * d.dpr, T = (typeof S == "number" ? a : S) || {}, {
    samples: b = 0,
    depth: y,
    ...E
  } = T, _ = gn.useMemo(() => {
    const C = new S1(m, v, {
      minFilter: vp,
      magFilter: vp,
      type: SR,
      ...E
    });
    return y && (C.depthTexture = new R1(m, v, h1)), C.samples = b, C;
  }, []);
  return gn.useLayoutEffect(() => {
    _.setSize(m, v), b && (_.samples = b);
  }, [b, _, m, v]), gn.useEffect(() => () => _.dispose(), []), _;
}
const D1 = `precision highp float;
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
`, Hc = `uniform vec2 px;
uniform vec2 boundarySpace;
varying vec2 uvInternal;

precision highp float;

void main(){
    vec3 pos = position;
    vec2 scale = 1.0 - boundarySpace * 2.0;
    pos.xy = pos.xy * scale;
    uvInternal = vec2(0.5)+(pos.xy)*0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}
`, qb = `varying vec2 uvInternal;
uniform vec2 px;


precision highp float;

void main(){
    vec3 pos = position;
    uvInternal = 0.5 + pos.xy * 0.5;
    vec2 n = sign(pos.xy);
    pos.xy = abs(pos.xy) - px * 1.0;
    pos.xy *= n;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}`;
var ss, ao, dd, ls;
class io {
  constructor({
    materialConfig: {
      vertexShader: t,
      fragmentShader: a,
      uniforms: u = {},
      raw: d = !1,
      ...m
    },
    material: v,
    geometry: T,
    camera: b,
    onBeforeRender: y,
    onAfterRender: E,
    fboConfig: { width: _, height: C, options: z, isNull: A = !1 },
    fbo: B,
    children: k,
    onDispose: V
  }) {
    nd(this, ss, void 0);
    nd(this, ao, void 0);
    nd(this, dd, void 0);
    nd(this, ls, {});
    v ? this.material = typeof v == "function" ? v() : v : (Jl(this, ls, u), this.material = d ? new b1({
      uniforms: pi(this, ls),
      vertexShader: t,
      fragmentShader: a,
      ...m
    }) : new dy({
      uniforms: pi(this, ls),
      vertexShader: t,
      fragmentShader: a,
      ...m
    })), T ? this.geometry = typeof T == "function" ? T() : T : this.geometry = this.geometry = T || new xp(2, 2), this.mesh = new sb(this.geometry, this.material), b ? this.camera = typeof b == "function" ? b() : b : this.camera = new hb(), this.scene = new mb(), this.scene.add(this.mesh), k && (Jl(this, ao, typeof k == "function" ? k({ uniforms: pi(this, ls), mesh: this.mesh }) : k), this.scene.add(pi(this, ao))), typeof y == "function" && (this.scene.onBeforeRender = y), typeof E == "function" && (this.scene.onAfterRender = E), B ? Jl(this, ss, B) : A ? Jl(this, ss, null) : Jl(this, ss, new S1(_, C, z)), Jl(this, dd, V);
  }
  dispose(t = !0, a = !0, u = !0, d = !0) {
    t && this.material.dispose(), a && this.geometry.dispose(), u && pi(this, ss).dispose(), d && typeof pi(this, dd) == "function" && d(pi(this, ao));
  }
  setFBO(t) {
    return Jl(this, ss, t), this;
  }
  get fbo() {
    return pi(this, ss);
  }
  setOnBeforeRender(t) {
    return this.scene.onBeforeRender = t, this;
  }
  get onBeforeRender() {
    return this.scene.onBeforeRender;
  }
  setOnAfterRender(t) {
    return this.scene.onAfterRender = t, this;
  }
  get onAfterRenderRender() {
    return this.scene.onAfterRender;
  }
  get uniforms() {
    return pi(this, ls);
  }
  get children() {
    return pi(this, ao);
  }
  updateUniforms(t = {}) {
    for (const a in t)
      pi(this, ls)[a] = t[a], this.material.uniforms[a] = pi(this, ls)[a];
    return this;
  }
  render(t) {
    return t.setRenderTarget(pi(this, ss)), t.render(this.scene, this.camera), t.setRenderTarget(null), this;
  }
}
ss = new WeakMap(), ao = new WeakMap(), dd = new WeakMap(), ls = new WeakMap();
const Yb = {
  vertexShader: Hc,
  fragmentShader: D1,
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
}, Wb = ({ uniforms: S }) => {
  const t = {
    vertexShader: qb,
    fragmentShader: D1,
    uniforms: S
  }, a = new Float32Array([
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
  ]), u = new uo();
  u.setAttribute("position", new so(a, 3));
  const d = new b1(t);
  return new gb(u, d);
}, Qb = (S) => {
  S.geometry.dispose(), S.material.dispose();
}, Gb = {
  materialConfig: Yb,
  fboConfig: { isNull: !0 },
  children: Wb,
  onDispose: Qb
}, Xb = `precision highp float;

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
`, Zb = `precision highp float;

uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;

void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 0.0, 1.0 );
}
`, Jb = {
  vertexShader: Zb,
  fragmentShader: Xb,
  uniforms: {
    px: {
      value: null
    },
    force: {
      value: new nn(0, 0)
    },
    center: {
      value: new nn(0, 0)
    },
    scale: {
      value: null
    }
  },
  blending: vR
}, Kb = () => new xp(1, 1), $b = {
  materialConfig: Jb,
  geometry: Kb,
  fboConfig: { isNull: !0 }
}, eT = `precision highp float;
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
`, tT = {
  vertexShader: Hc,
  fragmentShader: eT,
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
}, nT = {
  materialConfig: tT,
  fboConfig: { isNull: !0 }
}, rT = `precision highp float;
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
`, iT = {
  vertexShader: Hc,
  fragmentShader: rT,
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
}, aT = {
  materialConfig: iT,
  fboConfig: { isNull: !0 }
}, sT = `precision highp float;
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
`, lT = {
  vertexShader: Hc,
  fragmentShader: sT,
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
}, uT = {
  materialConfig: lT,
  fboConfig: { isNull: !0 }
}, oT = `precision highp float;
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
`, cT = {
  vertexShader: Hc,
  fragmentShader: oT,
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
}, fT = {
  materialConfig: cT,
  fboConfig: { isNull: !0 }
}, dT = `precision highp float;
uniform sampler2D velocity;
varying vec2 uvInternal;

void main(){
    vec2 vel = texture2D(velocity, uvInternal).xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;
    
    vec3 colorInternal = vec3(vel.x, vel.y, 1.0);
    colorInternal = mix(vec3(1.0), colorInternal, len);

    gl_FragColor = vec4(colorInternal,  1.0);
}
`, hT = {
  vertexShader: Hc,
  fragmentShader: dT,
  uniforms: {
    velocity: {
      value: null
    },
    boundarySpace: {
      value: new nn()
    }
  }
}, pT = {
  materialConfig: hT,
  fboConfig: { isNull: !0 }
}, ST = ({
  iterations_poisson: S = 32,
  iterations_viscous: t = 32,
  mouse_force: a = 20,
  resolution: u = 0.5,
  cursor_size: d = 100,
  viscous: m = 30,
  isBounce: v = !1,
  dt: T = 0.014,
  isViscous: b = !1,
  BFECC: y = !0
} = {}, E = 1) => {
  const { width: _, height: C } = ly(({ size: { width: Ze, height: Ye } }) => ({
    width: Ze,
    height: Ye
  })), z = gn.useRef(new nn(0, 0)), A = gn.useRef(new nn(0, 0)), B = au(_, C), k = au(_, C), V = au(_, C), se = au(_, C), ie = au(_, C), fe = au(_, C), ve = au(_, C), be = au(_, C), $ = gn.useRef({
    boundarySpace: new nn(),
    cellScale: new nn(),
    fboSize: new nn(),
    force: new nn(),
    center: new nn(),
    scale: new nn(d, d)
  });
  gn.useEffect(() => {
    const { boundarySpace: Ze, cellScale: Ye, fboSize: xe } = $.current;
    xe.set(Math.round(_ * u), Math.round(C * u)), Ye.set(1 / xe.x, 1 / xe.y), v ? Ze.set(0, 0) : Ze.copy(Ye);
  }, [C, v, u, _]);
  const ue = gn.useRef(
    new io(Gb).updateUniforms({
      boundarySpace: {
        value: $.current.cellScale
      },
      px: {
        value: $.current.cellScale
      },
      fboSize: {
        value: $.current.fboSize
      },
      velocity: {
        value: B.texture
      },
      dt: {
        value: T
      },
      isBFECC: {
        value: !0
      }
    }).setFBO(k)
  ), et = gn.useRef(
    new io($b).updateUniforms({
      px: {
        value: $.current.cellScale
      },
      force: {
        value: $.current.force
      },
      center: {
        value: $.current.center
      },
      scale: {
        value: $.current.scale
      }
    }).setFBO(k)
  ), ye = gn.useRef(
    new io(nT).updateUniforms({
      boundarySpace: {
        value: $.current.boundarySpace
      },
      velocity: {
        value: k.texture
      },
      velocity_new: {
        value: V.texture
      },
      v: {
        value: m
      },
      px: {
        value: $.current.cellScale
      },
      dt: {
        value: T
      }
    }).setFBO(se)
  ), Me = gn.useRef(
    new io(aT).updateUniforms({
      boundarySpace: {
        value: $.current.boundarySpace
      },
      velocity: {
        value: V.texture
      },
      dt: {
        value: T
      },
      px: {
        value: $.current.cellScale
      }
    }).setFBO(ie)
  ), Re = gn.useRef(
    new io(uT).updateUniforms({
      boundarySpace: {
        value: $.current.boundarySpace
      },
      pressure: {
        value: fe.texture
      },
      divergence: {
        value: ie.texture
      },
      px: {
        value: $.current.cellScale
      }
    }).setFBO(ve)
  ), ge = gn.useRef(
    new io(fT).updateUniforms({
      boundarySpace: {
        value: $.current.boundarySpace
      },
      pressure: {
        value: fe.texture
      },
      velocity: {
        value: V.texture
      },
      px: {
        value: $.current.cellScale
      },
      dt: {
        value: T
      }
    }).setFBO(B)
  ), Le = gn.useRef(
    new io(pT).updateUniforms({
      velocity: {
        value: B.texture
      },
      boundarySpace: {
        value: new nn()
      }
    }).setFBO(be)
  );
  return Pb(({ gl: Ze, pointer: Ye }) => {
    ue.current.updateUniforms({
      dt: {
        value: T
      },
      isBFECC: {
        value: y
      }
    }).children.visible = v, ue.current.render(Ze), z.current.subVectors(Ye, A.current), A.current.copy(Ye), $.current.force.set(
      z.current.x / 2 * a,
      z.current.y / 2 * a
    );
    const xe = d * $.current.cellScale.x, H = d * $.current.cellScale.y, ae = Math.min(
      Math.max(Ye.x, -1 + xe + $.current.cellScale.x * 2),
      1 - xe - $.current.cellScale.x * 2
    ), ee = Math.min(
      Math.max(Ye.y, -1 + H + $.current.cellScale.y * 2),
      1 - H - $.current.cellScale.y * 2
    );
    $.current.center.set(ae, ee), $.current.scale.set(d, d), console.log(et.current.material.uniforms.force.value), et.current.render(Ze);
    let O = k;
    if (b) {
      let je, He;
      (void 0).uniforms.v.value = m;
      for (let tt = 0; tt < t; tt++)
        tt % 2 == 0 ? (je = V, He = se) : (je = se, He = V), ye.current.updateUniforms({
          v: {
            value: m
          },
          dt: {
            value: T
          },
          velocity_new: {
            value: je.texture
          }
        }).setFBO(He).render(Ze);
      O = He;
    }
    Me.current.updateUniforms({
      velocity: { value: O.texture },
      dt: {
        value: T
      }
    }).render(Ze);
    let j, Be;
    for (let je = 0; je < S; je++)
      je % 2 == 0 ? (j = fe, Be = ve) : (j = ve, Be = fe), Re.current.updateUniforms({ pressure: { value: j.texture } }).setFBO(Be).render(Ze);
    const ke = Be;
    ge.current.updateUniforms({
      dt: {
        value: T
      },
      velocity: {
        value: O.texture
      },
      pressure: {
        value: ke.texture
      }
    }).render(Ze), Le.current.render(Ze);
  }, E), be.texture;
};
function _T(S = {}) {
  for (const t in S) {
    const { uniforms: a, vert: u, frag: d } = S[t], m = Ib(a, u, d);
    zb({ [t]: m });
  }
}
export {
  _T as configureShaderMaterial,
  ST as useFluidTexture
};
