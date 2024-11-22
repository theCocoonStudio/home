var dx = (y) => {
  throw TypeError(y);
};
var hx = (y, e, a) => e.has(y) || dx("Cannot " + a);
var Yr = (y, e, a) => (hx(y, e, "read from private field"), a ? a.call(y) : e.get(y)), ad = (y, e, a) => e.has(y) ? dx("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(y) : e.set(y, a), Kl = (y, e, a, u) => (hx(y, e, "write to private field"), u ? u.call(y, a) : e.set(y, a), a);
function wR(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var ay = { exports: {} }, bt = {};
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
  if (px) return bt;
  px = 1;
  var y = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), R = Symbol.iterator;
  function C(O) {
    return O === null || typeof O != "object" ? null : (O = R && O[R] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, L = {};
  function B(O, V, Pe) {
    this.props = O, this.context = V, this.refs = L, this.updater = Pe || z;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(O, V) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, V, "setState");
  }, B.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function j() {
  }
  j.prototype = B.prototype;
  function te(O, V, Pe) {
    this.props = O, this.context = V, this.refs = L, this.updater = Pe || z;
  }
  var ee = te.prototype = new j();
  ee.constructor = te, D(ee, B.prototype), ee.isPureReactComponent = !0;
  var ue = Array.isArray, de = Object.prototype.hasOwnProperty, be = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function le(O, V, Pe) {
    var Ce, Ve = {}, ke = null, it = null;
    if (V != null) for (Ce in V.ref !== void 0 && (it = V.ref), V.key !== void 0 && (ke = "" + V.key), V) de.call(V, Ce) && !ce.hasOwnProperty(Ce) && (Ve[Ce] = V[Ce]);
    var at = arguments.length - 2;
    if (at === 1) Ve.children = Pe;
    else if (1 < at) {
      for (var Ie = Array(at), ot = 0; ot < at; ot++) Ie[ot] = arguments[ot + 2];
      Ve.children = Ie;
    }
    if (O && O.defaultProps) for (Ce in at = O.defaultProps, at) Ve[Ce] === void 0 && (Ve[Ce] = at[Ce]);
    return { $$typeof: y, type: O, key: ke, ref: it, props: Ve, _owner: be.current };
  }
  function Je(O, V) {
    return { $$typeof: y, type: O.type, key: V, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function pe(O) {
    return typeof O == "object" && O !== null && O.$$typeof === y;
  }
  function Me(O) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(Pe) {
      return V[Pe];
    });
  }
  var Ee = /\/+/g;
  function he(O, V) {
    return typeof O == "object" && O !== null && O.key != null ? Me("" + O.key) : V.toString(36);
  }
  function we(O, V, Pe, Ce, Ve) {
    var ke = typeof O;
    (ke === "undefined" || ke === "boolean") && (O = null);
    var it = !1;
    if (O === null) it = !0;
    else switch (ke) {
      case "string":
      case "number":
        it = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case y:
          case e:
            it = !0;
        }
    }
    if (it) return it = O, Ve = Ve(it), O = Ce === "" ? "." + he(it, 0) : Ce, ue(Ve) ? (Pe = "", O != null && (Pe = O.replace(Ee, "$&/") + "/"), we(Ve, V, Pe, "", function(ot) {
      return ot;
    })) : Ve != null && (pe(Ve) && (Ve = Je(Ve, Pe + (!Ve.key || it && it.key === Ve.key ? "" : ("" + Ve.key).replace(Ee, "$&/") + "/") + O)), V.push(Ve)), 1;
    if (it = 0, Ce = Ce === "" ? "." : Ce + ":", ue(O)) for (var at = 0; at < O.length; at++) {
      ke = O[at];
      var Ie = Ce + he(ke, at);
      it += we(ke, V, Pe, Ie, Ve);
    }
    else if (Ie = C(O), typeof Ie == "function") for (O = Ie.call(O), at = 0; !(ke = O.next()).done; ) ke = ke.value, Ie = Ce + he(ke, at++), it += we(ke, V, Pe, Ie, Ve);
    else if (ke === "object") throw V = String(O), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return it;
  }
  function nt(O, V, Pe) {
    if (O == null) return O;
    var Ce = [], Ve = 0;
    return we(O, Ce, "", "", function(ke) {
      return V.call(Pe, ke, Ve++);
    }), Ce;
  }
  function Oe(O) {
    if (O._status === -1) {
      var V = O._result;
      V = V(), V.then(function(Pe) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Pe);
      }, function(Pe) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Pe);
      }), O._status === -1 && (O._status = 0, O._result = V);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ve = { current: null }, k = { transition: null }, ne = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: k, ReactCurrentOwner: be };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return bt.Children = { map: nt, forEach: function(O, V, Pe) {
    nt(O, function() {
      V.apply(this, arguments);
    }, Pe);
  }, count: function(O) {
    var V = 0;
    return nt(O, function() {
      V++;
    }), V;
  }, toArray: function(O) {
    return nt(O, function(V) {
      return V;
    }) || [];
  }, only: function(O) {
    if (!pe(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, bt.Component = B, bt.Fragment = a, bt.Profiler = d, bt.PureComponent = te, bt.StrictMode = u, bt.Suspense = E, bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, bt.act = K, bt.cloneElement = function(O, V, Pe) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Ce = D({}, O.props), Ve = O.key, ke = O.ref, it = O._owner;
    if (V != null) {
      if (V.ref !== void 0 && (ke = V.ref, it = be.current), V.key !== void 0 && (Ve = "" + V.key), O.type && O.type.defaultProps) var at = O.type.defaultProps;
      for (Ie in V) de.call(V, Ie) && !ce.hasOwnProperty(Ie) && (Ce[Ie] = V[Ie] === void 0 && at !== void 0 ? at[Ie] : V[Ie]);
    }
    var Ie = arguments.length - 2;
    if (Ie === 1) Ce.children = Pe;
    else if (1 < Ie) {
      at = Array(Ie);
      for (var ot = 0; ot < Ie; ot++) at[ot] = arguments[ot + 2];
      Ce.children = at;
    }
    return { $$typeof: y, type: O.type, key: Ve, ref: ke, props: Ce, _owner: it };
  }, bt.createContext = function(O) {
    return O = { $$typeof: v, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: m, _context: O }, O.Consumer = O;
  }, bt.createElement = le, bt.createFactory = function(O) {
    var V = le.bind(null, O);
    return V.type = O, V;
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(O) {
    return { $$typeof: b, render: O };
  }, bt.isValidElement = pe, bt.lazy = function(O) {
    return { $$typeof: _, _payload: { _status: -1, _result: O }, _init: Oe };
  }, bt.memo = function(O, V) {
    return { $$typeof: g, type: O, compare: V === void 0 ? null : V };
  }, bt.startTransition = function(O) {
    var V = k.transition;
    k.transition = {};
    try {
      O();
    } finally {
      k.transition = V;
    }
  }, bt.unstable_act = K, bt.useCallback = function(O, V) {
    return ve.current.useCallback(O, V);
  }, bt.useContext = function(O) {
    return ve.current.useContext(O);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(O) {
    return ve.current.useDeferredValue(O);
  }, bt.useEffect = function(O, V) {
    return ve.current.useEffect(O, V);
  }, bt.useId = function() {
    return ve.current.useId();
  }, bt.useImperativeHandle = function(O, V, Pe) {
    return ve.current.useImperativeHandle(O, V, Pe);
  }, bt.useInsertionEffect = function(O, V) {
    return ve.current.useInsertionEffect(O, V);
  }, bt.useLayoutEffect = function(O, V) {
    return ve.current.useLayoutEffect(O, V);
  }, bt.useMemo = function(O, V) {
    return ve.current.useMemo(O, V);
  }, bt.useReducer = function(O, V, Pe) {
    return ve.current.useReducer(O, V, Pe);
  }, bt.useRef = function(O) {
    return ve.current.useRef(O);
  }, bt.useState = function(O) {
    return ve.current.useState(O);
  }, bt.useSyncExternalStore = function(O, V, Pe) {
    return ve.current.useSyncExternalStore(O, V, Pe);
  }, bt.useTransition = function() {
    return ve.current.useTransition();
  }, bt.version = "18.3.1", bt;
}
var dd = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
dd.exports;
var mx;
function DR() {
  return mx || (mx = 1, function(y, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var a = "18.3.1", u = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), B = Symbol.iterator, j = "@@iterator";
      function te(M) {
        if (M === null || typeof M != "object")
          return null;
        var F = B && M[B] || M[j];
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
      }, de = {
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
      }, ce = {}, le = null;
      function Je(M) {
        le = M;
      }
      ce.setExtraStackFrame = function(M) {
        le = M;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var M = "";
        le && (M += le);
        var F = ce.getCurrentStack;
        return F && (M += F() || ""), M;
      };
      var pe = !1, Me = !1, Ee = !1, he = !1, we = !1, nt = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: be
      };
      nt.ReactDebugCurrentFrame = ce, nt.ReactCurrentActQueue = de;
      function Oe(M) {
        {
          for (var F = arguments.length, W = new Array(F > 1 ? F - 1 : 0), J = 1; J < F; J++)
            W[J - 1] = arguments[J];
          k("warn", M, W);
        }
      }
      function ve(M) {
        {
          for (var F = arguments.length, W = new Array(F > 1 ? F - 1 : 0), J = 1; J < F; J++)
            W[J - 1] = arguments[J];
          k("error", M, W);
        }
      }
      function k(M, F, W) {
        {
          var J = nt.ReactDebugCurrentFrame, ge = J.getStackAddendum();
          ge !== "" && (F += "%s", W = W.concat([ge]));
          var Xe = W.map(function(He) {
            return String(He);
          });
          Xe.unshift("Warning: " + F), Function.prototype.apply.call(console[M], console, Xe);
        }
      }
      var ne = {};
      function K(M, F) {
        {
          var W = M.constructor, J = W && (W.displayName || W.name) || "ReactClass", ge = J + "." + F;
          if (ne[ge])
            return;
          ve("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", F, J), ne[ge] = !0;
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
        isMounted: function(M) {
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
        enqueueForceUpdate: function(M, F, W) {
          K(M, "forceUpdate");
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
        enqueueReplaceState: function(M, F, W, J) {
          K(M, "replaceState");
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
        enqueueSetState: function(M, F, W, J) {
          K(M, "setState");
        }
      }, V = Object.assign, Pe = {};
      Object.freeze(Pe);
      function Ce(M, F, W) {
        this.props = M, this.context = F, this.refs = Pe, this.updater = W || O;
      }
      Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(M, F) {
        if (typeof M != "object" && typeof M != "function" && M != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, M, F, "setState");
      }, Ce.prototype.forceUpdate = function(M) {
        this.updater.enqueueForceUpdate(this, M, "forceUpdate");
      };
      {
        var Ve = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ke = function(M, F) {
          Object.defineProperty(Ce.prototype, M, {
            get: function() {
              Oe("%s(...) is deprecated in plain JavaScript React classes. %s", F[0], F[1]);
            }
          });
        };
        for (var it in Ve)
          Ve.hasOwnProperty(it) && ke(it, Ve[it]);
      }
      function at() {
      }
      at.prototype = Ce.prototype;
      function Ie(M, F, W) {
        this.props = M, this.context = F, this.refs = Pe, this.updater = W || O;
      }
      var ot = Ie.prototype = new at();
      ot.constructor = Ie, V(ot, Ce.prototype), ot.isPureReactComponent = !0;
      function Et() {
        var M = {
          current: null
        };
        return Object.seal(M), M;
      }
      var Ot = Array.isArray;
      function Ge(M) {
        return Ot(M);
      }
      function Vt(M) {
        {
          var F = typeof Symbol == "function" && Symbol.toStringTag, W = F && M[Symbol.toStringTag] || M.constructor.name || "Object";
          return W;
        }
      }
      function Rt(M) {
        try {
          return yt(M), !1;
        } catch {
          return !0;
        }
      }
      function yt(M) {
        return "" + M;
      }
      function Jt(M) {
        if (Rt(M))
          return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vt(M)), yt(M);
      }
      function dr(M, F, W) {
        var J = M.displayName;
        if (J)
          return J;
        var ge = F.displayName || F.name || "";
        return ge !== "" ? W + "(" + ge + ")" : W;
      }
      function Bn(M) {
        return M.displayName || "Context";
      }
      function cn(M) {
        if (M == null)
          return null;
        if (typeof M.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
          return M.displayName || M.name || null;
        if (typeof M == "string")
          return M;
        switch (M) {
          case m:
            return "Fragment";
          case d:
            return "Portal";
          case b:
            return "Profiler";
          case v:
            return "StrictMode";
          case R:
            return "Suspense";
          case C:
            return "SuspenseList";
        }
        if (typeof M == "object")
          switch (M.$$typeof) {
            case g:
              var F = M;
              return Bn(F) + ".Consumer";
            case E:
              var W = M;
              return Bn(W._context) + ".Provider";
            case _:
              return dr(M, M.render, "ForwardRef");
            case z:
              var J = M.displayName || null;
              return J !== null ? J : cn(M.type) || "Memo";
            case D: {
              var ge = M, Xe = ge._payload, He = ge._init;
              try {
                return cn(He(Xe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hr = Object.prototype.hasOwnProperty, Zn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, jt, pr, la;
      la = {};
      function Dr(M) {
        if (hr.call(M, "ref")) {
          var F = Object.getOwnPropertyDescriptor(M, "ref").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return M.ref !== void 0;
      }
      function Xr(M) {
        if (hr.call(M, "key")) {
          var F = Object.getOwnPropertyDescriptor(M, "key").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return M.key !== void 0;
      }
      function ua(M, F) {
        var W = function() {
          jt || (jt = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        W.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: W,
          configurable: !0
        });
      }
      function cs(M, F) {
        var W = function() {
          pr || (pr = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        W.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: W,
          configurable: !0
        });
      }
      function Na(M) {
        if (typeof M.ref == "string" && be.current && M.__self && be.current.stateNode !== M.__self) {
          var F = cn(be.current.type);
          la[F] || (ve('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F, M.ref), la[F] = !0);
        }
      }
      var G = function(M, F, W, J, ge, Xe, He) {
        var st = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: u,
          // Built-in properties that belong on the element
          type: M,
          key: F,
          ref: W,
          props: He,
          // Record the component responsible for creating this element.
          _owner: Xe
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
          value: J
        }), Object.defineProperty(st, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ge
        }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
      };
      function oe(M, F, W) {
        var J, ge = {}, Xe = null, He = null, st = null, ht = null;
        if (F != null) {
          Dr(F) && (He = F.ref, Na(F)), Xr(F) && (Jt(F.key), Xe = "" + F.key), st = F.__self === void 0 ? null : F.__self, ht = F.__source === void 0 ? null : F.__source;
          for (J in F)
            hr.call(F, J) && !Zn.hasOwnProperty(J) && (ge[J] = F[J]);
        }
        var Ut = arguments.length - 2;
        if (Ut === 1)
          ge.children = W;
        else if (Ut > 1) {
          for (var Lt = Array(Ut), xt = 0; xt < Ut; xt++)
            Lt[xt] = arguments[xt + 2];
          Object.freeze && Object.freeze(Lt), ge.children = Lt;
        }
        if (M && M.defaultProps) {
          var Ct = M.defaultProps;
          for (J in Ct)
            ge[J] === void 0 && (ge[J] = Ct[J]);
        }
        if (Xe || He) {
          var Bt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Xe && ua(ge, Bt), He && cs(ge, Bt);
        }
        return G(M, Xe, He, st, ht, be.current, ge);
      }
      function Ne(M, F) {
        var W = G(M.type, F, M.ref, M._self, M._source, M._owner, M.props);
        return W;
      }
      function $e(M, F, W) {
        if (M == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
        var J, ge = V({}, M.props), Xe = M.key, He = M.ref, st = M._self, ht = M._source, Ut = M._owner;
        if (F != null) {
          Dr(F) && (He = F.ref, Ut = be.current), Xr(F) && (Jt(F.key), Xe = "" + F.key);
          var Lt;
          M.type && M.type.defaultProps && (Lt = M.type.defaultProps);
          for (J in F)
            hr.call(F, J) && !Zn.hasOwnProperty(J) && (F[J] === void 0 && Lt !== void 0 ? ge[J] = Lt[J] : ge[J] = F[J]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          ge.children = W;
        else if (xt > 1) {
          for (var Ct = Array(xt), Bt = 0; Bt < xt; Bt++)
            Ct[Bt] = arguments[Bt + 2];
          ge.children = Ct;
        }
        return G(M.type, Xe, He, st, ht, Ut, ge);
      }
      function Ue(M) {
        return typeof M == "object" && M !== null && M.$$typeof === u;
      }
      var Kt = ".", Tt = ":";
      function qe(M) {
        var F = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, J = M.replace(F, function(ge) {
          return W[ge];
        });
        return "$" + J;
      }
      var Se = !1, kn = /\/+/g;
      function qt(M) {
        return M.replace(kn, "$&/");
      }
      function gt(M, F) {
        return typeof M == "object" && M !== null && M.key != null ? (Jt(M.key), qe("" + M.key)) : F.toString(36);
      }
      function $s(M, F, W, J, ge) {
        var Xe = typeof M;
        (Xe === "undefined" || Xe === "boolean") && (M = null);
        var He = !1;
        if (M === null)
          He = !0;
        else
          switch (Xe) {
            case "string":
            case "number":
              He = !0;
              break;
            case "object":
              switch (M.$$typeof) {
                case u:
                case d:
                  He = !0;
              }
          }
        if (He) {
          var st = M, ht = ge(st), Ut = J === "" ? Kt + gt(st, 0) : J;
          if (Ge(ht)) {
            var Lt = "";
            Ut != null && (Lt = qt(Ut) + "/"), $s(ht, F, Lt, "", function(go) {
              return go;
            });
          } else ht != null && (Ue(ht) && (ht.key && (!st || st.key !== ht.key) && Jt(ht.key), ht = Ne(
            ht,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ht.key && (!st || st.key !== ht.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              qt("" + ht.key) + "/"
            ) : "") + Ut
          )), F.push(ht));
          return 1;
        }
        var xt, Ct, Bt = 0, pn = J === "" ? Kt : J + Tt;
        if (Ge(M))
          for (var Vi = 0; Vi < M.length; Vi++)
            xt = M[Vi], Ct = pn + gt(xt, Vi), Bt += $s(xt, F, W, Ct, ge);
        else {
          var Lr = te(M);
          if (typeof Lr == "function") {
            var _i = M;
            Lr === _i.entries && (Se || Oe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Se = !0);
            for (var ul = Lr.call(_i), yu, ol = 0; !(yu = ul.next()).done; )
              xt = yu.value, Ct = pn + gt(xt, ol++), Bt += $s(xt, F, W, Ct, ge);
          } else if (Xe === "object") {
            var gu = String(M);
            throw new Error("Objects are not valid as a React child (found: " + (gu === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : gu) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Bt;
      }
      function mr(M, F, W) {
        if (M == null)
          return M;
        var J = [], ge = 0;
        return $s(M, J, "", "", function(Xe) {
          return F.call(W, Xe, ge++);
        }), J;
      }
      function Fa(M) {
        var F = 0;
        return mr(M, function() {
          F++;
        }), F;
      }
      function ou(M, F, W) {
        mr(M, function() {
          F.apply(this, arguments);
        }, W);
      }
      function Mt(M) {
        return mr(M, function(F) {
          return F;
        }) || [];
      }
      function Zr(M) {
        if (!Ue(M))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return M;
      }
      function Li(M) {
        var F = {
          $$typeof: g,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: M,
          _currentValue2: M,
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
          $$typeof: E,
          _context: F
        };
        var W = !1, J = !1, ge = !1;
        {
          var Xe = {
            $$typeof: g,
            _context: F
          };
          Object.defineProperties(Xe, {
            Provider: {
              get: function() {
                return J || (J = !0, ve("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), F.Provider;
              },
              set: function(He) {
                F.Provider = He;
              }
            },
            _currentValue: {
              get: function() {
                return F._currentValue;
              },
              set: function(He) {
                F._currentValue = He;
              }
            },
            _currentValue2: {
              get: function() {
                return F._currentValue2;
              },
              set: function(He) {
                F._currentValue2 = He;
              }
            },
            _threadCount: {
              get: function() {
                return F._threadCount;
              },
              set: function(He) {
                F._threadCount = He;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, ve("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), F.Consumer;
              }
            },
            displayName: {
              get: function() {
                return F.displayName;
              },
              set: function(He) {
                ge || (Oe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", He), ge = !0);
              }
            }
          }), F.Consumer = Xe;
        }
        return F._currentRenderer = null, F._currentRenderer2 = null, F;
      }
      var Ar = -1, rr = 0, ir = 1, oo = 2;
      function Bi(M) {
        if (M._status === Ar) {
          var F = M._result, W = F();
          if (W.then(function(Xe) {
            if (M._status === rr || M._status === Ar) {
              var He = M;
              He._status = ir, He._result = Xe;
            }
          }, function(Xe) {
            if (M._status === rr || M._status === Ar) {
              var He = M;
              He._status = oo, He._result = Xe;
            }
          }), M._status === Ar) {
            var J = M;
            J._status = rr, J._result = W;
          }
        }
        if (M._status === ir) {
          var ge = M._result;
          return ge === void 0 && ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ge), "default" in ge || ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ge), ge.default;
        } else
          throw M._result;
      }
      function el(M) {
        var F = {
          // We use these fields to store the result.
          _status: Ar,
          _result: M
        }, W = {
          $$typeof: D,
          _payload: F,
          _init: Bi
        };
        {
          var J, ge;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(Xe) {
                ve("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Xe, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ge;
              },
              set: function(Xe) {
                ve("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ge = Xe, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function fs(M) {
        M != null && M.$$typeof === z ? ve("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof M != "function" ? ve("forwardRef requires a render function but was given %s.", M === null ? "null" : typeof M) : M.length !== 0 && M.length !== 2 && ve("forwardRef render functions accept exactly two parameters: props and ref. %s", M.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), M != null && (M.defaultProps != null || M.propTypes != null) && ve("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var F = {
          $$typeof: _,
          render: M
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
              W = J, !M.name && !M.displayName && (M.displayName = J);
            }
          });
        }
        return F;
      }
      var co;
      co = Symbol.for("react.module.reference");
      function Oa(M) {
        return !!(typeof M == "string" || typeof M == "function" || M === m || M === b || we || M === v || M === R || M === C || he || M === L || pe || Me || Ee || typeof M == "object" && M !== null && (M.$$typeof === D || M.$$typeof === z || M.$$typeof === E || M.$$typeof === g || M.$$typeof === _ || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        M.$$typeof === co || M.getModuleId !== void 0));
      }
      function Jn(M, F) {
        Oa(M) || ve("memo: The first argument must be a component. Instead received: %s", M === null ? "null" : typeof M);
        var W = {
          $$typeof: z,
          type: M,
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
            set: function(ge) {
              J = ge, !M.name && !M.displayName && (M.displayName = ge);
            }
          });
        }
        return W;
      }
      function Cn() {
        var M = ee.current;
        return M === null && ve(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), M;
      }
      function fo(M) {
        var F = Cn();
        if (M._context !== void 0) {
          var W = M._context;
          W.Consumer === M ? ve("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === M && ve("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return F.useContext(M);
      }
      function cu(M) {
        var F = Cn();
        return F.useState(M);
      }
      function oa(M, F, W) {
        var J = Cn();
        return J.useReducer(M, F, W);
      }
      function tl(M) {
        var F = Cn();
        return F.useRef(M);
      }
      function gi(M, F) {
        var W = Cn();
        return W.useEffect(M, F);
      }
      function nl(M, F) {
        var W = Cn();
        return W.useInsertionEffect(M, F);
      }
      function fu(M, F) {
        var W = Cn();
        return W.useLayoutEffect(M, F);
      }
      function ds(M, F) {
        var W = Cn();
        return W.useCallback(M, F);
      }
      function hs(M, F) {
        var W = Cn();
        return W.useMemo(M, F);
      }
      function Ua(M, F, W) {
        var J = Cn();
        return J.useImperativeHandle(M, F, W);
      }
      function Nr(M, F) {
        {
          var W = Cn();
          return W.useDebugValue(M, F);
        }
      }
      function ps() {
        var M = Cn();
        return M.useTransition();
      }
      function La(M) {
        var F = Cn();
        return F.useDeferredValue(M);
      }
      function du() {
        var M = Cn();
        return M.useId();
      }
      function Ic(M, F, W) {
        var J = Cn();
        return J.useSyncExternalStore(M, F, W);
      }
      var ki = 0, Hi, Fr, Yt, Wt, Jr, wn, Qt;
      function Kr() {
      }
      Kr.__reactDisabledLog = !0;
      function Ba() {
        {
          if (ki === 0) {
            Hi = console.log, Fr = console.info, Yt = console.warn, Wt = console.error, Jr = console.group, wn = console.groupCollapsed, Qt = console.groupEnd;
            var M = {
              configurable: !0,
              enumerable: !0,
              value: Kr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: M,
              log: M,
              warn: M,
              error: M,
              group: M,
              groupCollapsed: M,
              groupEnd: M
            });
          }
          ki++;
        }
      }
      function Kn() {
        {
          if (ki--, ki === 0) {
            var M = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: V({}, M, {
                value: Hi
              }),
              info: V({}, M, {
                value: Fr
              }),
              warn: V({}, M, {
                value: Yt
              }),
              error: V({}, M, {
                value: Wt
              }),
              group: V({}, M, {
                value: Jr
              }),
              groupCollapsed: V({}, M, {
                value: wn
              }),
              groupEnd: V({}, M, {
                value: Qt
              })
            });
          }
          ki < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ka = nt.ReactCurrentDispatcher, rl;
      function ms(M, F, W) {
        {
          if (rl === void 0)
            try {
              throw Error();
            } catch (ge) {
              var J = ge.stack.trim().match(/\n( *(at )?)/);
              rl = J && J[1] || "";
            }
          return `
` + rl + M;
        }
      }
      var Pi = !1, Ha;
      {
        var vr = typeof WeakMap == "function" ? WeakMap : Map;
        Ha = new vr();
      }
      function il(M, F) {
        if (!M || Pi)
          return "";
        {
          var W = Ha.get(M);
          if (W !== void 0)
            return W;
        }
        var J;
        Pi = !0;
        var ge = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Xe;
        Xe = ka.current, ka.current = null, Ba();
        try {
          if (F) {
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
              } catch (pn) {
                J = pn;
              }
              Reflect.construct(M, [], He);
            } else {
              try {
                He.call();
              } catch (pn) {
                J = pn;
              }
              M.call(He.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (pn) {
              J = pn;
            }
            M();
          }
        } catch (pn) {
          if (pn && J && typeof pn.stack == "string") {
            for (var st = pn.stack.split(`
`), ht = J.stack.split(`
`), Ut = st.length - 1, Lt = ht.length - 1; Ut >= 1 && Lt >= 0 && st[Ut] !== ht[Lt]; )
              Lt--;
            for (; Ut >= 1 && Lt >= 0; Ut--, Lt--)
              if (st[Ut] !== ht[Lt]) {
                if (Ut !== 1 || Lt !== 1)
                  do
                    if (Ut--, Lt--, Lt < 0 || st[Ut] !== ht[Lt]) {
                      var xt = `
` + st[Ut].replace(" at new ", " at ");
                      return M.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", M.displayName)), typeof M == "function" && Ha.set(M, xt), xt;
                    }
                  while (Ut >= 1 && Lt >= 0);
                break;
              }
          }
        } finally {
          Pi = !1, ka.current = Xe, Kn(), Error.prepareStackTrace = ge;
        }
        var Ct = M ? M.displayName || M.name : "", Bt = Ct ? ms(Ct) : "";
        return typeof M == "function" && Ha.set(M, Bt), Bt;
      }
      function ho(M, F, W) {
        return il(M, !1);
      }
      function po(M) {
        var F = M.prototype;
        return !!(F && F.isReactComponent);
      }
      function ca(M, F, W) {
        if (M == null)
          return "";
        if (typeof M == "function")
          return il(M, po(M));
        if (typeof M == "string")
          return ms(M);
        switch (M) {
          case R:
            return ms("Suspense");
          case C:
            return ms("SuspenseList");
        }
        if (typeof M == "object")
          switch (M.$$typeof) {
            case _:
              return ho(M.render);
            case z:
              return ca(M.type, F, W);
            case D: {
              var J = M, ge = J._payload, Xe = J._init;
              try {
                return ca(Xe(ge), F, W);
              } catch {
              }
            }
          }
        return "";
      }
      var fa = {}, xi = nt.ReactDebugCurrentFrame;
      function da(M) {
        if (M) {
          var F = M._owner, W = ca(M.type, M._source, F ? F.type : null);
          xi.setExtraStackFrame(W);
        } else
          xi.setExtraStackFrame(null);
      }
      function Or(M, F, W, J, ge) {
        {
          var Xe = Function.call.bind(hr);
          for (var He in M)
            if (Xe(M, He)) {
              var st = void 0;
              try {
                if (typeof M[He] != "function") {
                  var ht = Error((J || "React class") + ": " + W + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ht.name = "Invariant Violation", ht;
                }
                st = M[He](F, He, J, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ut) {
                st = Ut;
              }
              st && !(st instanceof Error) && (da(ge), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", W, He, typeof st), da(null)), st instanceof Error && !(st.message in fa) && (fa[st.message] = !0, da(ge), ve("Failed %s type: %s", W, st.message), da(null));
            }
        }
      }
      function $r(M) {
        if (M) {
          var F = M._owner, W = ca(M.type, M._source, F ? F.type : null);
          Je(W);
        } else
          Je(null);
      }
      var zn;
      zn = !1;
      function al() {
        if (be.current) {
          var M = cn(be.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
      function vs(M) {
        if (M !== void 0) {
          var F = M.fileName.replace(/^.*[\\\/]/, ""), W = M.lineNumber;
          return `

Check your code at ` + F + ":" + W + ".";
        }
        return "";
      }
      function qc(M) {
        return M != null ? vs(M.__source) : "";
      }
      var sl = {};
      function zt(M) {
        var F = al();
        if (!F) {
          var W = typeof M == "string" ? M : M.displayName || M.name;
          W && (F = `

Check the top-level render call using <` + W + ">.");
        }
        return F;
      }
      function hu(M, F) {
        if (!(!M._store || M._store.validated || M.key != null)) {
          M._store.validated = !0;
          var W = zt(F);
          if (!sl[W]) {
            sl[W] = !0;
            var J = "";
            M && M._owner && M._owner !== be.current && (J = " It was passed a child from " + cn(M._owner.type) + "."), $r(M), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, J), $r(null);
          }
        }
      }
      function Si(M, F) {
        if (typeof M == "object") {
          if (Ge(M))
            for (var W = 0; W < M.length; W++) {
              var J = M[W];
              Ue(J) && hu(J, F);
            }
          else if (Ue(M))
            M._store && (M._store.validated = !0);
          else if (M) {
            var ge = te(M);
            if (typeof ge == "function" && ge !== M.entries)
              for (var Xe = ge.call(M), He; !(He = Xe.next()).done; )
                Ue(He.value) && hu(He.value, F);
          }
        }
      }
      function pu(M) {
        {
          var F = M.type;
          if (F == null || typeof F == "string")
            return;
          var W;
          if (typeof F == "function")
            W = F.propTypes;
          else if (typeof F == "object" && (F.$$typeof === _ || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          F.$$typeof === z))
            W = F.propTypes;
          else
            return;
          if (W) {
            var J = cn(F);
            Or(W, M.props, "prop", J, M);
          } else if (F.PropTypes !== void 0 && !zn) {
            zn = !0;
            var ge = cn(F);
            ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
          }
          typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yc(M) {
        {
          for (var F = Object.keys(M.props), W = 0; W < F.length; W++) {
            var J = F[W];
            if (J !== "children" && J !== "key") {
              $r(M), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), $r(null);
              break;
            }
          }
          M.ref !== null && ($r(M), ve("Invalid attribute `ref` supplied to `React.Fragment`."), $r(null));
        }
      }
      function mo(M, F, W) {
        var J = Oa(M);
        if (!J) {
          var ge = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = qc(F);
          Xe ? ge += Xe : ge += al();
          var He;
          M === null ? He = "null" : Ge(M) ? He = "array" : M !== void 0 && M.$$typeof === u ? (He = "<" + (cn(M.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : He = typeof M, ve("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", He, ge);
        }
        var st = oe.apply(this, arguments);
        if (st == null)
          return st;
        if (J)
          for (var ht = 2; ht < arguments.length; ht++)
            Si(arguments[ht], M);
        return M === m ? Yc(st) : pu(st), st;
      }
      var sn = !1;
      function mu(M) {
        var F = mo.bind(null, M);
        return F.type = M, sn || (sn = !0, Oe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(F, "type", {
          enumerable: !1,
          get: function() {
            return Oe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: M
            }), M;
          }
        }), F;
      }
      function Wc(M, F, W) {
        for (var J = $e.apply(this, arguments), ge = 2; ge < arguments.length; ge++)
          Si(arguments[ge], J.type);
        return pu(J), J;
      }
      function vu(M, F) {
        var W = ue.transition;
        ue.transition = {};
        var J = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          M();
        } finally {
          if (ue.transition = W, W === null && J._updatedFibers) {
            var ge = J._updatedFibers.size;
            ge > 10 && Oe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var vo = !1, ha = null;
      function ei(M) {
        if (ha === null)
          try {
            var F = ("require" + Math.random()).slice(0, 7), W = y && y[F];
            ha = W.call(y, "timers").setImmediate;
          } catch {
            ha = function(ge) {
              vo === !1 && (vo = !0, typeof MessageChannel > "u" && ve("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Xe = new MessageChannel();
              Xe.port1.onmessage = ge, Xe.port2.postMessage(void 0);
            };
          }
        return ha(M);
      }
      var Pa = 0, yo = !1;
      function Ur(M) {
        {
          var F = Pa;
          Pa++, de.current === null && (de.current = []);
          var W = de.isBatchingLegacy, J;
          try {
            if (de.isBatchingLegacy = !0, J = M(), !W && de.didScheduleLegacyUpdate) {
              var ge = de.current;
              ge !== null && (de.didScheduleLegacyUpdate = !1, gs(ge));
            }
          } catch (Ct) {
            throw yr(F), Ct;
          } finally {
            de.isBatchingLegacy = W;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var Xe = J, He = !1, st = {
              then: function(Ct, Bt) {
                He = !0, Xe.then(function(pn) {
                  yr(F), Pa === 0 ? Va(pn, Ct, Bt) : Ct(pn);
                }, function(pn) {
                  yr(F), Bt(pn);
                });
              }
            };
            return !yo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              He || (yo = !0, ve("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), st;
          } else {
            var ht = J;
            if (yr(F), Pa === 0) {
              var Ut = de.current;
              Ut !== null && (gs(Ut), de.current = null);
              var Lt = {
                then: function(Ct, Bt) {
                  de.current === null ? (de.current = [], Va(ht, Ct, Bt)) : Ct(ht);
                }
              };
              return Lt;
            } else {
              var xt = {
                then: function(Ct, Bt) {
                  Ct(ht);
                }
              };
              return xt;
            }
          }
        }
      }
      function yr(M) {
        M !== Pa - 1 && ve("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pa = M;
      }
      function Va(M, F, W) {
        {
          var J = de.current;
          if (J !== null)
            try {
              gs(J), ei(function() {
                J.length === 0 ? (de.current = null, F(M)) : Va(M, F, W);
              });
            } catch (ge) {
              W(ge);
            }
          else
            F(M);
        }
      }
      var ys = !1;
      function gs(M) {
        if (!ys) {
          ys = !0;
          var F = 0;
          try {
            for (; F < M.length; F++) {
              var W = M[F];
              do
                W = W(!0);
              while (W !== null);
            }
            M.length = 0;
          } catch (J) {
            throw M = M.slice(F + 1), J;
          } finally {
            ys = !1;
          }
        }
      }
      var Qc = mo, ti = Wc, Gc = mu, ll = {
        map: mr,
        forEach: ou,
        count: Fa,
        toArray: Mt,
        only: Zr
      };
      e.Children = ll, e.Component = Ce, e.Fragment = m, e.Profiler = b, e.PureComponent = Ie, e.StrictMode = v, e.Suspense = R, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nt, e.act = Ur, e.cloneElement = ti, e.createContext = Li, e.createElement = Qc, e.createFactory = Gc, e.createRef = Et, e.forwardRef = fs, e.isValidElement = Ue, e.lazy = el, e.memo = Jn, e.startTransition = vu, e.unstable_act = Ur, e.useCallback = ds, e.useContext = fo, e.useDebugValue = Nr, e.useDeferredValue = La, e.useEffect = gi, e.useId = du, e.useImperativeHandle = Ua, e.useInsertionEffect = nl, e.useLayoutEffect = fu, e.useMemo = hs, e.useReducer = oa, e.useRef = tl, e.useState = cu, e.useSyncExternalStore = Ic, e.useTransition = ps, e.version = a, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dd, dd.exports)), dd.exports;
}
process.env.NODE_ENV === "production" ? ay.exports = zR() : ay.exports = DR();
var Qe = ay.exports;
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const M1 = "163", sy = 0, AR = 1, vx = 1, NR = 2, yx = 100, gx = 204, xx = 205, Sx = 3, FR = 0, b1 = 300, _x = 1e3, Zh = 1001, Ex = 1002, Rx = 1003, Sp = 1006, OR = 1008, T1 = 1009, UR = 1014, C1 = 1015, LR = 1016, BR = 1020, w1 = 1023, Dv = 1026, Mx = 1027, z1 = "", lu = "srgb", hy = "srgb-linear", kR = "display-p3", D1 = "display-p3-linear", ly = "linear", bx = "srgb", Tx = "rec709", Cx = "p3", xc = 7680, wx = 519, HR = 515, zx = 35044, hd = 2e3, Dx = 2001;
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
const wr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ax = 1234567;
const A1 = Math.PI / 180, N1 = 180 / Math.PI;
function Pc() {
  const y = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, a = Math.random() * 4294967295 | 0, u = Math.random() * 4294967295 | 0;
  return (wr[y & 255] + wr[y >> 8 & 255] + wr[y >> 16 & 255] + wr[y >> 24 & 255] + "-" + wr[e & 255] + wr[e >> 8 & 255] + "-" + wr[e >> 16 & 15 | 64] + wr[e >> 24 & 255] + "-" + wr[a & 63 | 128] + wr[a >> 8 & 255] + "-" + wr[a >> 16 & 255] + wr[a >> 24 & 255] + wr[u & 255] + wr[u >> 8 & 255] + wr[u >> 16 & 255] + wr[u >> 24 & 255]).toLowerCase();
}
function Qr(y, e, a) {
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
function md(y, e, a) {
  return (1 - a) * y + a * e;
}
function jR(y, e, a, u) {
  return md(y, e, 1 - Math.exp(-a * u));
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
function eM(y) {
  return Math.pow(2, Math.floor(Math.log(y) / Math.LN2));
}
function tM(y, e, a, u, d) {
  const m = Math.cos, v = Math.sin, b = m(a / 2), E = v(a / 2), g = m((e + u) / 2), _ = v((e + u) / 2), R = m((e - u) / 2), C = v((e - u) / 2), z = m((u - e) / 2), D = v((u - e) / 2);
  switch (d) {
    case "XYX":
      y.set(b * _, E * R, E * C, b * g);
      break;
    case "YZY":
      y.set(E * C, b * _, E * R, b * g);
      break;
    case "ZXZ":
      y.set(E * R, E * C, b * _, b * g);
      break;
    case "XZX":
      y.set(b * _, E * D, E * z, b * g);
      break;
    case "YXY":
      y.set(E * z, b * _, E * D, b * g);
      break;
    case "ZYZ":
      y.set(E * D, E * z, b * _, b * g);
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
function Wr(y, e) {
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
  generateUUID: Pc,
  clamp: Qr,
  euclideanModulo: py,
  mapLinear: PR,
  inverseLerp: VR,
  lerp: md,
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
  floorPowerOfTwo: eM,
  setQuaternionFromProperEuler: tM,
  normalize: Wr,
  denormalize: Oc
};
class Pt {
  constructor(e = 0, a = 0) {
    Pt.prototype.isVector2 = !0, this.x = e, this.y = a;
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
    return Math.acos(Qr(u, -1, 1));
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
  constructor(e, a, u, d, m, v, b, E, g) {
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
    ], e !== void 0 && this.set(e, a, u, d, m, v, b, E, g);
  }
  set(e, a, u, d, m, v, b, E, g) {
    const _ = this.elements;
    return _[0] = e, _[1] = d, _[2] = b, _[3] = a, _[4] = m, _[5] = E, _[6] = u, _[7] = v, _[8] = g, this;
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
    const u = e.elements, d = a.elements, m = this.elements, v = u[0], b = u[3], E = u[6], g = u[1], _ = u[4], R = u[7], C = u[2], z = u[5], D = u[8], L = d[0], B = d[3], j = d[6], te = d[1], ee = d[4], ue = d[7], de = d[2], be = d[5], ce = d[8];
    return m[0] = v * L + b * te + E * de, m[3] = v * B + b * ee + E * be, m[6] = v * j + b * ue + E * ce, m[1] = g * L + _ * te + R * de, m[4] = g * B + _ * ee + R * be, m[7] = g * j + _ * ue + R * ce, m[2] = C * L + z * te + D * de, m[5] = C * B + z * ee + D * be, m[8] = C * j + z * ue + D * ce, this;
  }
  multiplyScalar(e) {
    const a = this.elements;
    return a[0] *= e, a[3] *= e, a[6] *= e, a[1] *= e, a[4] *= e, a[7] *= e, a[2] *= e, a[5] *= e, a[8] *= e, this;
  }
  determinant() {
    const e = this.elements, a = e[0], u = e[1], d = e[2], m = e[3], v = e[4], b = e[5], E = e[6], g = e[7], _ = e[8];
    return a * v * _ - a * b * g - u * m * _ + u * b * E + d * m * g - d * v * E;
  }
  invert() {
    const e = this.elements, a = e[0], u = e[1], d = e[2], m = e[3], v = e[4], b = e[5], E = e[6], g = e[7], _ = e[8], R = _ * v - b * g, C = b * E - _ * m, z = g * m - v * E, D = a * R + u * C + d * z;
    if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / D;
    return e[0] = R * L, e[1] = (d * g - _ * u) * L, e[2] = (b * u - d * v) * L, e[3] = C * L, e[4] = (_ * a - d * E) * L, e[5] = (d * m - b * a) * L, e[6] = z * L, e[7] = (u * E - g * a) * L, e[8] = (v * a - u * m) * L, this;
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
  setUvTransform(e, a, u, d, m, v, b) {
    const E = Math.cos(m), g = Math.sin(m);
    return this.set(
      u * E,
      u * g,
      -u * (E * v + g * b) + v + e,
      -d * g,
      d * E,
      -d * (-g * v + E * b) + b + a,
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
function nM(y) {
  for (let e = y.length - 1; e >= 0; --e)
    if (y[e] >= 65535) return !0;
  return !1;
}
function Nx(y) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", y);
}
const Fx = {};
function rM(y) {
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
    transfer: bx,
    primaries: Tx,
    toReference: (y) => y.convertSRGBToLinear(),
    fromReference: (y) => y.convertLinearToSRGB()
  },
  [D1]: {
    transfer: ly,
    primaries: Cx,
    toReference: (y) => y.applyMatrix3(Ux),
    fromReference: (y) => y.applyMatrix3(Ox)
  },
  [kR]: {
    transfer: bx,
    primaries: Cx,
    toReference: (y) => y.convertSRGBToLinear().applyMatrix3(Ux),
    fromReference: (y) => y.applyMatrix3(Ox).convertLinearToSRGB()
  }
}, iM = /* @__PURE__ */ new Set([hy, D1]), wa = {
  enabled: !0,
  _workingColorSpace: hy,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(y) {
    if (!iM.has(y))
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
class aM {
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
let sM = 0;
class O1 {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: sM++ }), this.uuid = Pc(), this.data = e, this.dataReady = !0, this.version = 0;
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
        for (let v = 0, b = d.length; v < b; v++)
          d[v].isDataTexture ? m.push(Fv(d[v].image)) : m.push(Fv(d[v]));
      } else
        m = Fv(d);
      u.url = m;
    }
    return a || (e.images[this.uuid] = u), u;
  }
}
function Fv(y) {
  return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap ? aM.getDataURL(y) : y.data ? {
    data: Array.from(y.data),
    width: y.width,
    height: y.height,
    type: y.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let lM = 0;
class os extends vd {
  constructor(e = os.DEFAULT_IMAGE, a = os.DEFAULT_MAPPING, u = Zh, d = Zh, m = Sp, v = OR, b = w1, E = T1, g = os.DEFAULT_ANISOTROPY, _ = z1) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: lM++ }), this.uuid = Pc(), this.name = "", this.source = new O1(e), this.mipmaps = [], this.mapping = a, this.channel = 0, this.wrapS = u, this.wrapT = d, this.magFilter = m, this.minFilter = v, this.anisotropy = g, this.format = b, this.internalFormat = null, this.type = E, this.offset = new Pt(0, 0), this.repeat = new Pt(1, 1), this.center = new Pt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new uu(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = _, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
    if (this.mapping !== b1) return e;
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
os.DEFAULT_MAPPING = b1;
os.DEFAULT_ANISOTROPY = 1;
class Hc {
  constructor(e = 0, a = 0, u = 0, d = 1) {
    Hc.prototype.isVector4 = !0, this.x = e, this.y = a, this.z = u, this.w = d;
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
    const E = e.elements, g = E[0], _ = E[4], R = E[8], C = E[1], z = E[5], D = E[9], L = E[2], B = E[6], j = E[10];
    if (Math.abs(_ - C) < 0.01 && Math.abs(R - L) < 0.01 && Math.abs(D - B) < 0.01) {
      if (Math.abs(_ + C) < 0.1 && Math.abs(R + L) < 0.1 && Math.abs(D + B) < 0.1 && Math.abs(g + z + j - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      a = Math.PI;
      const ee = (g + 1) / 2, ue = (z + 1) / 2, de = (j + 1) / 2, be = (_ + C) / 4, ce = (R + L) / 4, le = (D + B) / 4;
      return ee > ue && ee > de ? ee < 0.01 ? (u = 0, d = 0.707106781, m = 0.707106781) : (u = Math.sqrt(ee), d = be / u, m = ce / u) : ue > de ? ue < 0.01 ? (u = 0.707106781, d = 0, m = 0.707106781) : (d = Math.sqrt(ue), u = be / d, m = le / d) : de < 0.01 ? (u = 0.707106781, d = 0.707106781, m = 0) : (m = Math.sqrt(de), u = ce / m, d = le / m), this.set(u, d, m, a), this;
    }
    let te = Math.sqrt((B - D) * (B - D) + (R - L) * (R - L) + (C - _) * (C - _));
    return Math.abs(te) < 1e-3 && (te = 1), this.x = (B - D) / te, this.y = (R - L) / te, this.z = (C - _) / te, this.w = Math.acos((g + z + j - 1) / 2), this;
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
class uM extends vd {
  constructor(e = 1, a = 1, u = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = a, this.depth = 1, this.scissor = new Hc(0, 0, e, a), this.scissorTest = !1, this.viewport = new Hc(0, 0, e, a);
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
    for (let b = 0; b < v; b++)
      this.textures[b] = m.clone(), this.textures[b].isRenderTargetTexture = !0;
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
class U1 extends uM {
  constructor(e = 1, a = 1, u = {}) {
    super(e, a, u), this.isWebGLRenderTarget = !0;
  }
}
class yd {
  constructor(e = 0, a = 0, u = 0, d = 1) {
    this.isQuaternion = !0, this._x = e, this._y = a, this._z = u, this._w = d;
  }
  static slerpFlat(e, a, u, d, m, v, b) {
    let E = u[d + 0], g = u[d + 1], _ = u[d + 2], R = u[d + 3];
    const C = m[v + 0], z = m[v + 1], D = m[v + 2], L = m[v + 3];
    if (b === 0) {
      e[a + 0] = E, e[a + 1] = g, e[a + 2] = _, e[a + 3] = R;
      return;
    }
    if (b === 1) {
      e[a + 0] = C, e[a + 1] = z, e[a + 2] = D, e[a + 3] = L;
      return;
    }
    if (R !== L || E !== C || g !== z || _ !== D) {
      let B = 1 - b;
      const j = E * C + g * z + _ * D + R * L, te = j >= 0 ? 1 : -1, ee = 1 - j * j;
      if (ee > Number.EPSILON) {
        const de = Math.sqrt(ee), be = Math.atan2(de, j * te);
        B = Math.sin(B * be) / de, b = Math.sin(b * be) / de;
      }
      const ue = b * te;
      if (E = E * B + C * ue, g = g * B + z * ue, _ = _ * B + D * ue, R = R * B + L * ue, B === 1 - b) {
        const de = 1 / Math.sqrt(E * E + g * g + _ * _ + R * R);
        E *= de, g *= de, _ *= de, R *= de;
      }
    }
    e[a] = E, e[a + 1] = g, e[a + 2] = _, e[a + 3] = R;
  }
  static multiplyQuaternionsFlat(e, a, u, d, m, v) {
    const b = u[d], E = u[d + 1], g = u[d + 2], _ = u[d + 3], R = m[v], C = m[v + 1], z = m[v + 2], D = m[v + 3];
    return e[a] = b * D + _ * R + E * z - g * C, e[a + 1] = E * D + _ * C + g * R - b * z, e[a + 2] = g * D + _ * z + b * C - E * R, e[a + 3] = _ * D - b * R - E * C - g * z, e;
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
    const u = e._x, d = e._y, m = e._z, v = e._order, b = Math.cos, E = Math.sin, g = b(u / 2), _ = b(d / 2), R = b(m / 2), C = E(u / 2), z = E(d / 2), D = E(m / 2);
    switch (v) {
      case "XYZ":
        this._x = C * _ * R + g * z * D, this._y = g * z * R - C * _ * D, this._z = g * _ * D + C * z * R, this._w = g * _ * R - C * z * D;
        break;
      case "YXZ":
        this._x = C * _ * R + g * z * D, this._y = g * z * R - C * _ * D, this._z = g * _ * D - C * z * R, this._w = g * _ * R + C * z * D;
        break;
      case "ZXY":
        this._x = C * _ * R - g * z * D, this._y = g * z * R + C * _ * D, this._z = g * _ * D + C * z * R, this._w = g * _ * R - C * z * D;
        break;
      case "ZYX":
        this._x = C * _ * R - g * z * D, this._y = g * z * R + C * _ * D, this._z = g * _ * D - C * z * R, this._w = g * _ * R + C * z * D;
        break;
      case "YZX":
        this._x = C * _ * R + g * z * D, this._y = g * z * R + C * _ * D, this._z = g * _ * D - C * z * R, this._w = g * _ * R - C * z * D;
        break;
      case "XZY":
        this._x = C * _ * R - g * z * D, this._y = g * z * R - C * _ * D, this._z = g * _ * D + C * z * R, this._w = g * _ * R + C * z * D;
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
    const a = e.elements, u = a[0], d = a[4], m = a[8], v = a[1], b = a[5], E = a[9], g = a[2], _ = a[6], R = a[10], C = u + b + R;
    if (C > 0) {
      const z = 0.5 / Math.sqrt(C + 1);
      this._w = 0.25 / z, this._x = (_ - E) * z, this._y = (m - g) * z, this._z = (v - d) * z;
    } else if (u > b && u > R) {
      const z = 2 * Math.sqrt(1 + u - b - R);
      this._w = (_ - E) / z, this._x = 0.25 * z, this._y = (d + v) / z, this._z = (m + g) / z;
    } else if (b > R) {
      const z = 2 * Math.sqrt(1 + b - u - R);
      this._w = (m - g) / z, this._x = (d + v) / z, this._y = 0.25 * z, this._z = (E + _) / z;
    } else {
      const z = 2 * Math.sqrt(1 + R - u - b);
      this._w = (v - d) / z, this._x = (m + g) / z, this._y = (E + _) / z, this._z = 0.25 * z;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, a) {
    let u = e.dot(a) + 1;
    return u < Number.EPSILON ? (u = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = u) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = u)) : (this._x = e.y * a.z - e.z * a.y, this._y = e.z * a.x - e.x * a.z, this._z = e.x * a.y - e.y * a.x, this._w = u), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Qr(this.dot(e), -1, 1)));
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
    const u = e._x, d = e._y, m = e._z, v = e._w, b = a._x, E = a._y, g = a._z, _ = a._w;
    return this._x = u * _ + v * b + d * g - m * E, this._y = d * _ + v * E + m * b - u * g, this._z = m * _ + v * g + u * E - d * b, this._w = v * _ - u * b - d * E - m * g, this._onChangeCallback(), this;
  }
  slerp(e, a) {
    if (a === 0) return this;
    if (a === 1) return this.copy(e);
    const u = this._x, d = this._y, m = this._z, v = this._w;
    let b = v * e._w + u * e._x + d * e._y + m * e._z;
    if (b < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, b = -b) : this.copy(e), b >= 1)
      return this._w = v, this._x = u, this._y = d, this._z = m, this;
    const E = 1 - b * b;
    if (E <= Number.EPSILON) {
      const z = 1 - a;
      return this._w = z * v + a * this._w, this._x = z * u + a * this._x, this._y = z * d + a * this._y, this._z = z * m + a * this._z, this.normalize(), this;
    }
    const g = Math.sqrt(E), _ = Math.atan2(g, b), R = Math.sin((1 - a) * _) / g, C = Math.sin(a * _) / g;
    return this._w = v * R + this._w * C, this._x = u * R + this._x * C, this._y = d * R + this._y * C, this._z = m * R + this._z * C, this._onChangeCallback(), this;
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
class se {
  constructor(e = 0, a = 0, u = 0) {
    se.prototype.isVector3 = !0, this.x = e, this.y = a, this.z = u;
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
    const a = this.x, u = this.y, d = this.z, m = e.x, v = e.y, b = e.z, E = e.w, g = 2 * (v * d - b * u), _ = 2 * (b * a - m * d), R = 2 * (m * u - v * a);
    return this.x = a + E * g + v * R - b * _, this.y = u + E * _ + b * g - m * R, this.z = d + E * R + m * _ - v * g, this;
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
    const u = e.x, d = e.y, m = e.z, v = a.x, b = a.y, E = a.z;
    return this.x = d * E - m * b, this.y = m * v - u * E, this.z = u * b - d * v, this;
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
    return Math.acos(Qr(u, -1, 1));
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
const Ov = /* @__PURE__ */ new se(), Lx = /* @__PURE__ */ new yd();
class gd {
  constructor(e = new se(1 / 0, 1 / 0, 1 / 0), a = new se(-1 / 0, -1 / 0, -1 / 0)) {
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
        for (let v = 0, b = m.count; v < b; v++)
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
    this.getCenter(sd), $h.subVectors(this.max, sd), _c.subVectors(e.a, sd), Ec.subVectors(e.b, sd), Rc.subVectors(e.c, sd), $l.subVectors(Ec, _c), eu.subVectors(Rc, Ec), no.subVectors(_c, Rc);
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
  /* @__PURE__ */ new se(),
  /* @__PURE__ */ new se(),
  /* @__PURE__ */ new se(),
  /* @__PURE__ */ new se(),
  /* @__PURE__ */ new se(),
  /* @__PURE__ */ new se(),
  /* @__PURE__ */ new se(),
  /* @__PURE__ */ new se()
], za = /* @__PURE__ */ new se(), Kh = /* @__PURE__ */ new gd(), _c = /* @__PURE__ */ new se(), Ec = /* @__PURE__ */ new se(), Rc = /* @__PURE__ */ new se(), $l = /* @__PURE__ */ new se(), eu = /* @__PURE__ */ new se(), no = /* @__PURE__ */ new se(), sd = /* @__PURE__ */ new se(), $h = /* @__PURE__ */ new se(), ep = /* @__PURE__ */ new se(), ro = /* @__PURE__ */ new se();
function Uv(y, e, a, u, d) {
  for (let m = 0, v = y.length - 3; m <= v; m += 3) {
    ro.fromArray(y, m);
    const b = d.x * Math.abs(ro.x) + d.y * Math.abs(ro.y) + d.z * Math.abs(ro.z), E = e.dot(ro), g = a.dot(ro), _ = u.dot(ro);
    if (Math.max(-Math.max(E, g, _), Math.min(E, g, _)) > b)
      return !1;
  }
  return !0;
}
const oM = /* @__PURE__ */ new gd(), ld = /* @__PURE__ */ new se(), Lv = /* @__PURE__ */ new se();
class my {
  constructor(e = new se(), a = -1) {
    this.isSphere = !0, this.center = e, this.radius = a;
  }
  set(e, a) {
    return this.center.copy(e), this.radius = a, this;
  }
  setFromPoints(e, a) {
    const u = this.center;
    a !== void 0 ? u.copy(a) : oM.setFromPoints(e).getCenter(u);
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
    ld.subVectors(e, this.center);
    const a = ld.lengthSq();
    if (a > this.radius * this.radius) {
      const u = Math.sqrt(a), d = (u - this.radius) * 0.5;
      this.center.addScaledVector(ld, d / u), this.radius += d;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Lv.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ld.copy(e.center).add(Lv)), this.expandByPoint(ld.copy(e.center).sub(Lv))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gs = /* @__PURE__ */ new se(), Bv = /* @__PURE__ */ new se(), tp = /* @__PURE__ */ new se(), tu = /* @__PURE__ */ new se(), kv = /* @__PURE__ */ new se(), np = /* @__PURE__ */ new se(), Hv = /* @__PURE__ */ new se();
class L1 {
  constructor(e = new se(), a = new se(0, 0, -1)) {
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
    const m = e.distanceTo(a) * 0.5, v = -this.direction.dot(tp), b = tu.dot(this.direction), E = -tu.dot(tp), g = tu.lengthSq(), _ = Math.abs(1 - v * v);
    let R, C, z, D;
    if (_ > 0)
      if (R = v * E - b, C = v * b - E, D = m * _, R >= 0)
        if (C >= -D)
          if (C <= D) {
            const L = 1 / _;
            R *= L, C *= L, z = R * (R + v * C + 2 * b) + C * (v * R + C + 2 * E) + g;
          } else
            C = m, R = Math.max(0, -(v * C + b)), z = -R * R + C * (C + 2 * E) + g;
        else
          C = -m, R = Math.max(0, -(v * C + b)), z = -R * R + C * (C + 2 * E) + g;
      else
        C <= -D ? (R = Math.max(0, -(-v * m + b)), C = R > 0 ? -m : Math.min(Math.max(-m, -E), m), z = -R * R + C * (C + 2 * E) + g) : C <= D ? (R = 0, C = Math.min(Math.max(-m, -E), m), z = C * (C + 2 * E) + g) : (R = Math.max(0, -(v * m + b)), C = R > 0 ? m : Math.min(Math.max(-m, -E), m), z = -R * R + C * (C + 2 * E) + g);
    else
      C = v > 0 ? -m : m, R = Math.max(0, -(v * C + b)), z = -R * R + C * (C + 2 * E) + g;
    return u && u.copy(this.origin).addScaledVector(this.direction, R), d && d.copy(Bv).addScaledVector(tp, C), z;
  }
  intersectSphere(e, a) {
    Gs.subVectors(e.center, this.origin);
    const u = Gs.dot(this.direction), d = Gs.dot(Gs) - u * u, m = e.radius * e.radius;
    if (d > m) return null;
    const v = Math.sqrt(m - d), b = u - v, E = u + v;
    return E < 0 ? null : b < 0 ? this.at(E, a) : this.at(b, a);
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
    let u, d, m, v, b, E;
    const g = 1 / this.direction.x, _ = 1 / this.direction.y, R = 1 / this.direction.z, C = this.origin;
    return g >= 0 ? (u = (e.min.x - C.x) * g, d = (e.max.x - C.x) * g) : (u = (e.max.x - C.x) * g, d = (e.min.x - C.x) * g), _ >= 0 ? (m = (e.min.y - C.y) * _, v = (e.max.y - C.y) * _) : (m = (e.max.y - C.y) * _, v = (e.min.y - C.y) * _), u > v || m > d || ((m > u || isNaN(u)) && (u = m), (v < d || isNaN(d)) && (d = v), R >= 0 ? (b = (e.min.z - C.z) * R, E = (e.max.z - C.z) * R) : (b = (e.max.z - C.z) * R, E = (e.min.z - C.z) * R), u > E || b > d) || ((b > u || u !== u) && (u = b), (E < d || d !== d) && (d = E), d < 0) ? null : this.at(u >= 0 ? u : d, a);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Gs) !== null;
  }
  intersectTriangle(e, a, u, d, m) {
    kv.subVectors(a, e), np.subVectors(u, e), Hv.crossVectors(kv, np);
    let v = this.direction.dot(Hv), b;
    if (v > 0) {
      if (d) return null;
      b = 1;
    } else if (v < 0)
      b = -1, v = -v;
    else
      return null;
    tu.subVectors(this.origin, e);
    const E = b * this.direction.dot(np.crossVectors(tu, np));
    if (E < 0)
      return null;
    const g = b * this.direction.dot(kv.cross(tu));
    if (g < 0 || E + g > v)
      return null;
    const _ = -b * tu.dot(Hv);
    return _ < 0 ? null : this.at(_ / v, m);
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
class Gr {
  constructor(e, a, u, d, m, v, b, E, g, _, R, C, z, D, L, B) {
    Gr.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, a, u, d, m, v, b, E, g, _, R, C, z, D, L, B);
  }
  set(e, a, u, d, m, v, b, E, g, _, R, C, z, D, L, B) {
    const j = this.elements;
    return j[0] = e, j[4] = a, j[8] = u, j[12] = d, j[1] = m, j[5] = v, j[9] = b, j[13] = E, j[2] = g, j[6] = _, j[10] = R, j[14] = C, j[3] = z, j[7] = D, j[11] = L, j[15] = B, this;
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
    return new Gr().fromArray(this.elements);
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
    const a = this.elements, u = e.elements, d = 1 / Mc.setFromMatrixColumn(e, 0).length(), m = 1 / Mc.setFromMatrixColumn(e, 1).length(), v = 1 / Mc.setFromMatrixColumn(e, 2).length();
    return a[0] = u[0] * d, a[1] = u[1] * d, a[2] = u[2] * d, a[3] = 0, a[4] = u[4] * m, a[5] = u[5] * m, a[6] = u[6] * m, a[7] = 0, a[8] = u[8] * v, a[9] = u[9] * v, a[10] = u[10] * v, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const a = this.elements, u = e.x, d = e.y, m = e.z, v = Math.cos(u), b = Math.sin(u), E = Math.cos(d), g = Math.sin(d), _ = Math.cos(m), R = Math.sin(m);
    if (e.order === "XYZ") {
      const C = v * _, z = v * R, D = b * _, L = b * R;
      a[0] = E * _, a[4] = -E * R, a[8] = g, a[1] = z + D * g, a[5] = C - L * g, a[9] = -b * E, a[2] = L - C * g, a[6] = D + z * g, a[10] = v * E;
    } else if (e.order === "YXZ") {
      const C = E * _, z = E * R, D = g * _, L = g * R;
      a[0] = C + L * b, a[4] = D * b - z, a[8] = v * g, a[1] = v * R, a[5] = v * _, a[9] = -b, a[2] = z * b - D, a[6] = L + C * b, a[10] = v * E;
    } else if (e.order === "ZXY") {
      const C = E * _, z = E * R, D = g * _, L = g * R;
      a[0] = C - L * b, a[4] = -v * R, a[8] = D + z * b, a[1] = z + D * b, a[5] = v * _, a[9] = L - C * b, a[2] = -v * g, a[6] = b, a[10] = v * E;
    } else if (e.order === "ZYX") {
      const C = v * _, z = v * R, D = b * _, L = b * R;
      a[0] = E * _, a[4] = D * g - z, a[8] = C * g + L, a[1] = E * R, a[5] = L * g + C, a[9] = z * g - D, a[2] = -g, a[6] = b * E, a[10] = v * E;
    } else if (e.order === "YZX") {
      const C = v * E, z = v * g, D = b * E, L = b * g;
      a[0] = E * _, a[4] = L - C * R, a[8] = D * R + z, a[1] = R, a[5] = v * _, a[9] = -b * _, a[2] = -g * _, a[6] = z * R + D, a[10] = C - L * R;
    } else if (e.order === "XZY") {
      const C = v * E, z = v * g, D = b * E, L = b * g;
      a[0] = E * _, a[4] = -R, a[8] = g * _, a[1] = C * R + L, a[5] = v * _, a[9] = z * R - D, a[2] = D * R - z, a[6] = b * _, a[10] = L * R + C;
    }
    return a[3] = 0, a[7] = 0, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(cM, e, fM);
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
    const u = e.elements, d = a.elements, m = this.elements, v = u[0], b = u[4], E = u[8], g = u[12], _ = u[1], R = u[5], C = u[9], z = u[13], D = u[2], L = u[6], B = u[10], j = u[14], te = u[3], ee = u[7], ue = u[11], de = u[15], be = d[0], ce = d[4], le = d[8], Je = d[12], pe = d[1], Me = d[5], Ee = d[9], he = d[13], we = d[2], nt = d[6], Oe = d[10], ve = d[14], k = d[3], ne = d[7], K = d[11], O = d[15];
    return m[0] = v * be + b * pe + E * we + g * k, m[4] = v * ce + b * Me + E * nt + g * ne, m[8] = v * le + b * Ee + E * Oe + g * K, m[12] = v * Je + b * he + E * ve + g * O, m[1] = _ * be + R * pe + C * we + z * k, m[5] = _ * ce + R * Me + C * nt + z * ne, m[9] = _ * le + R * Ee + C * Oe + z * K, m[13] = _ * Je + R * he + C * ve + z * O, m[2] = D * be + L * pe + B * we + j * k, m[6] = D * ce + L * Me + B * nt + j * ne, m[10] = D * le + L * Ee + B * Oe + j * K, m[14] = D * Je + L * he + B * ve + j * O, m[3] = te * be + ee * pe + ue * we + de * k, m[7] = te * ce + ee * Me + ue * nt + de * ne, m[11] = te * le + ee * Ee + ue * Oe + de * K, m[15] = te * Je + ee * he + ue * ve + de * O, this;
  }
  multiplyScalar(e) {
    const a = this.elements;
    return a[0] *= e, a[4] *= e, a[8] *= e, a[12] *= e, a[1] *= e, a[5] *= e, a[9] *= e, a[13] *= e, a[2] *= e, a[6] *= e, a[10] *= e, a[14] *= e, a[3] *= e, a[7] *= e, a[11] *= e, a[15] *= e, this;
  }
  determinant() {
    const e = this.elements, a = e[0], u = e[4], d = e[8], m = e[12], v = e[1], b = e[5], E = e[9], g = e[13], _ = e[2], R = e[6], C = e[10], z = e[14], D = e[3], L = e[7], B = e[11], j = e[15];
    return D * (+m * E * R - d * g * R - m * b * C + u * g * C + d * b * z - u * E * z) + L * (+a * E * z - a * g * C + m * v * C - d * v * z + d * g * _ - m * E * _) + B * (+a * g * R - a * b * z - m * v * R + u * v * z + m * b * _ - u * g * _) + j * (-d * b * _ - a * E * R + a * b * C + d * v * R - u * v * C + u * E * _);
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
    const e = this.elements, a = e[0], u = e[1], d = e[2], m = e[3], v = e[4], b = e[5], E = e[6], g = e[7], _ = e[8], R = e[9], C = e[10], z = e[11], D = e[12], L = e[13], B = e[14], j = e[15], te = R * B * g - L * C * g + L * E * z - b * B * z - R * E * j + b * C * j, ee = D * C * g - _ * B * g - D * E * z + v * B * z + _ * E * j - v * C * j, ue = _ * L * g - D * R * g + D * b * z - v * L * z - _ * b * j + v * R * j, de = D * R * E - _ * L * E - D * b * C + v * L * C + _ * b * B - v * R * B, be = a * te + u * ee + d * ue + m * de;
    if (be === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const ce = 1 / be;
    return e[0] = te * ce, e[1] = (L * C * m - R * B * m - L * d * z + u * B * z + R * d * j - u * C * j) * ce, e[2] = (b * B * m - L * E * m + L * d * g - u * B * g - b * d * j + u * E * j) * ce, e[3] = (R * E * m - b * C * m - R * d * g + u * C * g + b * d * z - u * E * z) * ce, e[4] = ee * ce, e[5] = (_ * B * m - D * C * m + D * d * z - a * B * z - _ * d * j + a * C * j) * ce, e[6] = (D * E * m - v * B * m - D * d * g + a * B * g + v * d * j - a * E * j) * ce, e[7] = (v * C * m - _ * E * m + _ * d * g - a * C * g - v * d * z + a * E * z) * ce, e[8] = ue * ce, e[9] = (D * R * m - _ * L * m - D * u * z + a * L * z + _ * u * j - a * R * j) * ce, e[10] = (v * L * m - D * b * m + D * u * g - a * L * g - v * u * j + a * b * j) * ce, e[11] = (_ * b * m - v * R * m - _ * u * g + a * R * g + v * u * z - a * b * z) * ce, e[12] = de * ce, e[13] = (_ * L * d - D * R * d + D * u * C - a * L * C - _ * u * B + a * R * B) * ce, e[14] = (D * b * d - v * L * d - D * u * E + a * L * E + v * u * B - a * b * B) * ce, e[15] = (v * R * d - _ * b * d + _ * u * E - a * R * E - v * u * C + a * b * C) * ce, this;
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
    const u = Math.cos(a), d = Math.sin(a), m = 1 - u, v = e.x, b = e.y, E = e.z, g = m * v, _ = m * b;
    return this.set(
      g * v + u,
      g * b - d * E,
      g * E + d * b,
      0,
      g * b + d * E,
      _ * b + u,
      _ * E - d * v,
      0,
      g * E - d * b,
      _ * E + d * v,
      m * E * E + u,
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
    const d = this.elements, m = a._x, v = a._y, b = a._z, E = a._w, g = m + m, _ = v + v, R = b + b, C = m * g, z = m * _, D = m * R, L = v * _, B = v * R, j = b * R, te = E * g, ee = E * _, ue = E * R, de = u.x, be = u.y, ce = u.z;
    return d[0] = (1 - (L + j)) * de, d[1] = (z + ue) * de, d[2] = (D - ee) * de, d[3] = 0, d[4] = (z - ue) * be, d[5] = (1 - (C + j)) * be, d[6] = (B + te) * be, d[7] = 0, d[8] = (D + ee) * ce, d[9] = (B - te) * ce, d[10] = (1 - (C + L)) * ce, d[11] = 0, d[12] = e.x, d[13] = e.y, d[14] = e.z, d[15] = 1, this;
  }
  decompose(e, a, u) {
    const d = this.elements;
    let m = Mc.set(d[0], d[1], d[2]).length();
    const v = Mc.set(d[4], d[5], d[6]).length(), b = Mc.set(d[8], d[9], d[10]).length();
    this.determinant() < 0 && (m = -m), e.x = d[12], e.y = d[13], e.z = d[14], Da.copy(this);
    const g = 1 / m, _ = 1 / v, R = 1 / b;
    return Da.elements[0] *= g, Da.elements[1] *= g, Da.elements[2] *= g, Da.elements[4] *= _, Da.elements[5] *= _, Da.elements[6] *= _, Da.elements[8] *= R, Da.elements[9] *= R, Da.elements[10] *= R, a.setFromRotationMatrix(Da), u.x = m, u.y = v, u.z = b, this;
  }
  makePerspective(e, a, u, d, m, v, b = hd) {
    const E = this.elements, g = 2 * m / (a - e), _ = 2 * m / (u - d), R = (a + e) / (a - e), C = (u + d) / (u - d);
    let z, D;
    if (b === hd)
      z = -(v + m) / (v - m), D = -2 * v * m / (v - m);
    else if (b === Dx)
      z = -v / (v - m), D = -v * m / (v - m);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + b);
    return E[0] = g, E[4] = 0, E[8] = R, E[12] = 0, E[1] = 0, E[5] = _, E[9] = C, E[13] = 0, E[2] = 0, E[6] = 0, E[10] = z, E[14] = D, E[3] = 0, E[7] = 0, E[11] = -1, E[15] = 0, this;
  }
  makeOrthographic(e, a, u, d, m, v, b = hd) {
    const E = this.elements, g = 1 / (a - e), _ = 1 / (u - d), R = 1 / (v - m), C = (a + e) * g, z = (u + d) * _;
    let D, L;
    if (b === hd)
      D = (v + m) * R, L = -2 * R;
    else if (b === Dx)
      D = m * R, L = -1 * R;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + b);
    return E[0] = 2 * g, E[4] = 0, E[8] = 0, E[12] = -C, E[1] = 0, E[5] = 2 * _, E[9] = 0, E[13] = -z, E[2] = 0, E[6] = 0, E[10] = L, E[14] = -D, E[3] = 0, E[7] = 0, E[11] = 0, E[15] = 1, this;
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
const Mc = /* @__PURE__ */ new se(), Da = /* @__PURE__ */ new Gr(), cM = /* @__PURE__ */ new se(0, 0, 0), fM = /* @__PURE__ */ new se(1, 1, 1), nu = /* @__PURE__ */ new se(), rp = /* @__PURE__ */ new se(), Oi = /* @__PURE__ */ new se(), Bx = /* @__PURE__ */ new Gr(), kx = /* @__PURE__ */ new yd();
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
    const d = e.elements, m = d[0], v = d[4], b = d[8], E = d[1], g = d[5], _ = d[9], R = d[2], C = d[6], z = d[10];
    switch (a) {
      case "XYZ":
        this._y = Math.asin(Qr(b, -1, 1)), Math.abs(b) < 0.9999999 ? (this._x = Math.atan2(-_, z), this._z = Math.atan2(-v, m)) : (this._x = Math.atan2(C, g), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Qr(_, -1, 1)), Math.abs(_) < 0.9999999 ? (this._y = Math.atan2(b, z), this._z = Math.atan2(E, g)) : (this._y = Math.atan2(-R, m), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Qr(C, -1, 1)), Math.abs(C) < 0.9999999 ? (this._y = Math.atan2(-R, z), this._z = Math.atan2(-v, g)) : (this._y = 0, this._z = Math.atan2(E, m));
        break;
      case "ZYX":
        this._y = Math.asin(-Qr(R, -1, 1)), Math.abs(R) < 0.9999999 ? (this._x = Math.atan2(C, z), this._z = Math.atan2(E, m)) : (this._x = 0, this._z = Math.atan2(-v, g));
        break;
      case "YZX":
        this._z = Math.asin(Qr(E, -1, 1)), Math.abs(E) < 0.9999999 ? (this._x = Math.atan2(-_, g), this._y = Math.atan2(-R, m)) : (this._x = 0, this._y = Math.atan2(b, z));
        break;
      case "XZY":
        this._z = Math.asin(-Qr(v, -1, 1)), Math.abs(v) < 0.9999999 ? (this._x = Math.atan2(C, g), this._y = Math.atan2(b, m)) : (this._x = Math.atan2(-_, z), this._y = 0);
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
let dM = 0;
const Hx = /* @__PURE__ */ new se(), bc = /* @__PURE__ */ new yd(), Xs = /* @__PURE__ */ new Gr(), ip = /* @__PURE__ */ new se(), ud = /* @__PURE__ */ new se(), hM = /* @__PURE__ */ new se(), pM = /* @__PURE__ */ new yd(), Px = /* @__PURE__ */ new se(1, 0, 0), Vx = /* @__PURE__ */ new se(0, 1, 0), jx = /* @__PURE__ */ new se(0, 0, 1), Ix = { type: "added" }, mM = { type: "removed" }, Tc = { type: "childadded", child: null }, Pv = { type: "childremoved", child: null };
class yi extends vd {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: dM++ }), this.uuid = Pc(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = yi.DEFAULT_UP.clone();
    const e = new se(), a = new Ks(), u = new yd(), d = new se(1, 1, 1);
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
        value: new Gr()
      },
      normalMatrix: {
        value: new uu()
      }
    }), this.matrix = new Gr(), this.matrixWorld = new Gr(), this.matrixAutoUpdate = yi.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new yp(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return bc.setFromAxisAngle(e, a), this.quaternion.multiply(bc), this;
  }
  rotateOnWorldAxis(e, a) {
    return bc.setFromAxisAngle(e, a), this.quaternion.premultiply(bc), this;
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
    this.updateWorldMatrix(!0, !1), ud.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xs.lookAt(ud, ip, this.up) : Xs.lookAt(ip, ud, this.up), this.quaternion.setFromRotationMatrix(Xs), d && (Xs.extractRotation(d.matrixWorld), bc.setFromRotationMatrix(Xs), this.quaternion.premultiply(bc.invert()));
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
    return a !== -1 && (e.parent = null, this.children.splice(a, 1), e.dispatchEvent(mM), Pv.child = e, this.dispatchEvent(Pv), Pv.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ud, e, hM), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ud, pM, e), e;
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
        const b = d[m];
        b.matrixWorldAutoUpdate === !0 && b.updateWorldMatrix(!1, !0);
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
    d.uuid = this.uuid, d.type = this.type, this.name !== "" && (d.name = this.name), this.castShadow === !0 && (d.castShadow = !0), this.receiveShadow === !0 && (d.receiveShadow = !0), this.visible === !1 && (d.visible = !1), this.frustumCulled === !1 && (d.frustumCulled = !1), this.renderOrder !== 0 && (d.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (d.userData = this.userData), d.layers = this.layers.mask, d.matrix = this.matrix.toArray(), d.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (d.matrixAutoUpdate = !1), this.isInstancedMesh && (d.type = "InstancedMesh", d.count = this.count, d.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (d.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (d.type = "BatchedMesh", d.perObjectFrustumCulled = this.perObjectFrustumCulled, d.sortObjects = this.sortObjects, d.drawRanges = this._drawRanges, d.reservedRanges = this._reservedRanges, d.visibility = this._visibility, d.active = this._active, d.bounds = this._bounds.map((b) => ({
      boxInitialized: b.boxInitialized,
      boxMin: b.box.min.toArray(),
      boxMax: b.box.max.toArray(),
      sphereInitialized: b.sphereInitialized,
      sphereRadius: b.sphere.radius,
      sphereCenter: b.sphere.center.toArray()
    })), d.maxGeometryCount = this._maxGeometryCount, d.maxVertexCount = this._maxVertexCount, d.maxIndexCount = this._maxIndexCount, d.geometryInitialized = this._geometryInitialized, d.geometryCount = this._geometryCount, d.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (d.boundingSphere = {
      center: d.boundingSphere.center.toArray(),
      radius: d.boundingSphere.radius
    }), this.boundingBox !== null && (d.boundingBox = {
      min: d.boundingBox.min.toArray(),
      max: d.boundingBox.max.toArray()
    }));
    function m(b, E) {
      return b[E.uuid] === void 0 && (b[E.uuid] = E.toJSON(e)), E.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? d.background = this.background.toJSON() : this.background.isTexture && (d.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (d.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      d.geometry = m(e.geometries, this.geometry);
      const b = this.geometry.parameters;
      if (b !== void 0 && b.shapes !== void 0) {
        const E = b.shapes;
        if (Array.isArray(E))
          for (let g = 0, _ = E.length; g < _; g++) {
            const R = E[g];
            m(e.shapes, R);
          }
        else
          m(e.shapes, E);
      }
    }
    if (this.isSkinnedMesh && (d.bindMode = this.bindMode, d.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (m(e.skeletons, this.skeleton), d.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const b = [];
        for (let E = 0, g = this.material.length; E < g; E++)
          b.push(m(e.materials, this.material[E]));
        d.material = b;
      } else
        d.material = m(e.materials, this.material);
    if (this.children.length > 0) {
      d.children = [];
      for (let b = 0; b < this.children.length; b++)
        d.children.push(this.children[b].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      d.animations = [];
      for (let b = 0; b < this.animations.length; b++) {
        const E = this.animations[b];
        d.animations.push(m(e.animations, E));
      }
    }
    if (a) {
      const b = v(e.geometries), E = v(e.materials), g = v(e.textures), _ = v(e.images), R = v(e.shapes), C = v(e.skeletons), z = v(e.animations), D = v(e.nodes);
      b.length > 0 && (u.geometries = b), E.length > 0 && (u.materials = E), g.length > 0 && (u.textures = g), _.length > 0 && (u.images = _), R.length > 0 && (u.shapes = R), C.length > 0 && (u.skeletons = C), z.length > 0 && (u.animations = z), D.length > 0 && (u.nodes = D);
    }
    return u.object = d, u;
    function v(b) {
      const E = [];
      for (const g in b) {
        const _ = b[g];
        delete _.metadata, E.push(_);
      }
      return E;
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
yi.DEFAULT_UP = /* @__PURE__ */ new se(0, 1, 0);
yi.DEFAULT_MATRIX_AUTO_UPDATE = !0;
yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Aa = /* @__PURE__ */ new se(), Zs = /* @__PURE__ */ new se(), Vv = /* @__PURE__ */ new se(), Js = /* @__PURE__ */ new se(), Cc = /* @__PURE__ */ new se(), wc = /* @__PURE__ */ new se(), qx = /* @__PURE__ */ new se(), jv = /* @__PURE__ */ new se(), Iv = /* @__PURE__ */ new se(), qv = /* @__PURE__ */ new se();
class us {
  constructor(e = new se(), a = new se(), u = new se()) {
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
    const v = Aa.dot(Aa), b = Aa.dot(Zs), E = Aa.dot(Vv), g = Zs.dot(Zs), _ = Zs.dot(Vv), R = v * g - b * b;
    if (R === 0)
      return m.set(0, 0, 0), null;
    const C = 1 / R, z = (g * E - b * _) * C, D = (v * _ - b * E) * C;
    return m.set(1 - z - D, D, z);
  }
  static containsPoint(e, a, u, d) {
    return this.getBarycoord(e, a, u, d, Js) === null ? !1 : Js.x >= 0 && Js.y >= 0 && Js.x + Js.y <= 1;
  }
  static getInterpolation(e, a, u, d, m, v, b, E) {
    return this.getBarycoord(e, a, u, d, Js) === null ? (E.x = 0, E.y = 0, "z" in E && (E.z = 0), "w" in E && (E.w = 0), null) : (E.setScalar(0), E.addScaledVector(m, Js.x), E.addScaledVector(v, Js.y), E.addScaledVector(b, Js.z), E);
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
    let v, b;
    Cc.subVectors(d, u), wc.subVectors(m, u), jv.subVectors(e, u);
    const E = Cc.dot(jv), g = wc.dot(jv);
    if (E <= 0 && g <= 0)
      return a.copy(u);
    Iv.subVectors(e, d);
    const _ = Cc.dot(Iv), R = wc.dot(Iv);
    if (_ >= 0 && R <= _)
      return a.copy(d);
    const C = E * R - _ * g;
    if (C <= 0 && E >= 0 && _ <= 0)
      return v = E / (E - _), a.copy(u).addScaledVector(Cc, v);
    qv.subVectors(e, m);
    const z = Cc.dot(qv), D = wc.dot(qv);
    if (D >= 0 && z <= D)
      return a.copy(m);
    const L = z * g - E * D;
    if (L <= 0 && g >= 0 && D <= 0)
      return b = g / (g - D), a.copy(u).addScaledVector(wc, b);
    const B = _ * D - z * R;
    if (B <= 0 && R - _ >= 0 && z - D >= 0)
      return qx.subVectors(m, d), b = (R - _) / (R - _ + (z - D)), a.copy(d).addScaledVector(qx, b);
    const j = 1 / (B + L + C);
    return v = L * j, b = C * j, a.copy(u).addScaledVector(Cc, v).addScaledVector(wc, b);
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
class Vc {
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
    if (e = py(e, 1), a = Qr(a, 0, 1), u = Qr(u, 0, 1), a === 0)
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
      const v = d[1], b = d[2];
      switch (v) {
        case "rgb":
        case "rgba":
          if (m = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(b))
            return u(m[4]), this.setRGB(
              Math.min(255, parseInt(m[1], 10)) / 255,
              Math.min(255, parseInt(m[2], 10)) / 255,
              Math.min(255, parseInt(m[3], 10)) / 255,
              a
            );
          if (m = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(b))
            return u(m[4]), this.setRGB(
              Math.min(100, parseInt(m[1], 10)) / 100,
              Math.min(100, parseInt(m[2], 10)) / 100,
              Math.min(100, parseInt(m[3], 10)) / 100,
              a
            );
          break;
        case "hsl":
        case "hsla":
          if (m = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(b))
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
    return wa.fromWorkingColorSpace(zr.copy(this), e), Math.round(Qr(zr.r * 255, 0, 255)) * 65536 + Math.round(Qr(zr.g * 255, 0, 255)) * 256 + Math.round(Qr(zr.b * 255, 0, 255));
  }
  getHexString(e = lu) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, a = wa.workingColorSpace) {
    wa.fromWorkingColorSpace(zr.copy(this), a);
    const u = zr.r, d = zr.g, m = zr.b, v = Math.max(u, d, m), b = Math.min(u, d, m);
    let E, g;
    const _ = (b + v) / 2;
    if (b === v)
      E = 0, g = 0;
    else {
      const R = v - b;
      switch (g = _ <= 0.5 ? R / (v + b) : R / (2 - v - b), v) {
        case u:
          E = (d - m) / R + (d < m ? 6 : 0);
          break;
        case d:
          E = (m - u) / R + 2;
          break;
        case m:
          E = (u - d) / R + 4;
          break;
      }
      E /= 6;
    }
    return e.h = E, e.s = g, e.l = _, e;
  }
  getRGB(e, a = wa.workingColorSpace) {
    return wa.fromWorkingColorSpace(zr.copy(this), a), e.r = zr.r, e.g = zr.g, e.b = zr.b, e;
  }
  getStyle(e = lu) {
    wa.fromWorkingColorSpace(zr.copy(this), e);
    const a = zr.r, u = zr.g, d = zr.b;
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
    const u = md(ru.h, ap.h, a), d = md(ru.s, ap.s, a), m = md(ru.l, ap.l, a);
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
const zr = /* @__PURE__ */ new Vc();
Vc.NAMES = B1;
let vM = 0;
class Ep extends vd {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: vM++ }), this.uuid = Pc(), this.name = "", this.type = "Material", this.blending = vx, this.side = sy, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = gx, this.blendDst = xx, this.blendEquation = yx, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Vc(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Sx, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = wx, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = xc, this.stencilZFail = xc, this.stencilZPass = xc, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
      for (const b in m) {
        const E = m[b];
        delete E.metadata, v.push(E);
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
class yM extends Ep {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Vc(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ks(), this.combine = FR, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Vn = /* @__PURE__ */ new se(), sp = /* @__PURE__ */ new Pt();
class lo {
  constructor(e, a, u = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = a, this.count = e !== void 0 ? e.length / a : 0, this.normalized = u, this.usage = zx, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = C1, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return rM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
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
        Vn.fromBufferAttribute(this, a), Vn.applyMatrix3(e), this.setXYZ(a, Vn.x, Vn.y, Vn.z);
    return this;
  }
  applyMatrix4(e) {
    for (let a = 0, u = this.count; a < u; a++)
      Vn.fromBufferAttribute(this, a), Vn.applyMatrix4(e), this.setXYZ(a, Vn.x, Vn.y, Vn.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let a = 0, u = this.count; a < u; a++)
      Vn.fromBufferAttribute(this, a), Vn.applyNormalMatrix(e), this.setXYZ(a, Vn.x, Vn.y, Vn.z);
    return this;
  }
  transformDirection(e) {
    for (let a = 0, u = this.count; a < u; a++)
      Vn.fromBufferAttribute(this, a), Vn.transformDirection(e), this.setXYZ(a, Vn.x, Vn.y, Vn.z);
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
    return this.normalized && (u = Wr(u, this.array)), this.array[e * this.itemSize + a] = u, this;
  }
  getX(e) {
    let a = this.array[e * this.itemSize];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setX(e, a) {
    return this.normalized && (a = Wr(a, this.array)), this.array[e * this.itemSize] = a, this;
  }
  getY(e) {
    let a = this.array[e * this.itemSize + 1];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setY(e, a) {
    return this.normalized && (a = Wr(a, this.array)), this.array[e * this.itemSize + 1] = a, this;
  }
  getZ(e) {
    let a = this.array[e * this.itemSize + 2];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setZ(e, a) {
    return this.normalized && (a = Wr(a, this.array)), this.array[e * this.itemSize + 2] = a, this;
  }
  getW(e) {
    let a = this.array[e * this.itemSize + 3];
    return this.normalized && (a = Oc(a, this.array)), a;
  }
  setW(e, a) {
    return this.normalized && (a = Wr(a, this.array)), this.array[e * this.itemSize + 3] = a, this;
  }
  setXY(e, a, u) {
    return e *= this.itemSize, this.normalized && (a = Wr(a, this.array), u = Wr(u, this.array)), this.array[e + 0] = a, this.array[e + 1] = u, this;
  }
  setXYZ(e, a, u, d) {
    return e *= this.itemSize, this.normalized && (a = Wr(a, this.array), u = Wr(u, this.array), d = Wr(d, this.array)), this.array[e + 0] = a, this.array[e + 1] = u, this.array[e + 2] = d, this;
  }
  setXYZW(e, a, u, d, m) {
    return e *= this.itemSize, this.normalized && (a = Wr(a, this.array), u = Wr(u, this.array), d = Wr(d, this.array), m = Wr(m, this.array)), this.array[e + 0] = a, this.array[e + 1] = u, this.array[e + 2] = d, this.array[e + 3] = m, this;
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
class gM extends lo {
  constructor(e, a, u) {
    super(new Uint16Array(e), a, u);
  }
}
class xM extends lo {
  constructor(e, a, u) {
    super(new Uint32Array(e), a, u);
  }
}
class Bc extends lo {
  constructor(e, a, u) {
    super(new Float32Array(e), a, u);
  }
}
let SM = 0;
const sa = /* @__PURE__ */ new Gr(), Wv = /* @__PURE__ */ new yi(), zc = /* @__PURE__ */ new se(), Ui = /* @__PURE__ */ new gd(), od = /* @__PURE__ */ new gd(), nr = /* @__PURE__ */ new se();
class uo extends vd {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: SM++ }), this.uuid = Pc(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (nM(e) ? xM : gM)(e, 1) : this.index = e, this;
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
        new se(-1 / 0, -1 / 0, -1 / 0),
        new se(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), a)
        for (let u = 0, d = a.length; u < d; u++) {
          const m = a[u];
          Ui.setFromBufferAttribute(m), this.morphTargetsRelative ? (nr.addVectors(this.boundingBox.min, Ui.min), this.boundingBox.expandByPoint(nr), nr.addVectors(this.boundingBox.max, Ui.max), this.boundingBox.expandByPoint(nr)) : (this.boundingBox.expandByPoint(Ui.min), this.boundingBox.expandByPoint(Ui.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new my());
    const e = this.attributes.position, a = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new se(), 1 / 0);
      return;
    }
    if (e) {
      const u = this.boundingSphere.center;
      if (Ui.setFromBufferAttribute(e), a)
        for (let m = 0, v = a.length; m < v; m++) {
          const b = a[m];
          od.setFromBufferAttribute(b), this.morphTargetsRelative ? (nr.addVectors(Ui.min, od.min), Ui.expandByPoint(nr), nr.addVectors(Ui.max, od.max), Ui.expandByPoint(nr)) : (Ui.expandByPoint(od.min), Ui.expandByPoint(od.max));
        }
      Ui.getCenter(u);
      let d = 0;
      for (let m = 0, v = e.count; m < v; m++)
        nr.fromBufferAttribute(e, m), d = Math.max(d, u.distanceToSquared(nr));
      if (a)
        for (let m = 0, v = a.length; m < v; m++) {
          const b = a[m], E = this.morphTargetsRelative;
          for (let g = 0, _ = b.count; g < _; g++)
            nr.fromBufferAttribute(b, g), E && (zc.fromBufferAttribute(e, g), nr.add(zc)), d = Math.max(d, u.distanceToSquared(nr));
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
    const v = this.getAttribute("tangent"), b = [], E = [];
    for (let le = 0; le < u.count; le++)
      b[le] = new se(), E[le] = new se();
    const g = new se(), _ = new se(), R = new se(), C = new Pt(), z = new Pt(), D = new Pt(), L = new se(), B = new se();
    function j(le, Je, pe) {
      g.fromBufferAttribute(u, le), _.fromBufferAttribute(u, Je), R.fromBufferAttribute(u, pe), C.fromBufferAttribute(m, le), z.fromBufferAttribute(m, Je), D.fromBufferAttribute(m, pe), _.sub(g), R.sub(g), z.sub(C), D.sub(C);
      const Me = 1 / (z.x * D.y - D.x * z.y);
      isFinite(Me) && (L.copy(_).multiplyScalar(D.y).addScaledVector(R, -z.y).multiplyScalar(Me), B.copy(R).multiplyScalar(z.x).addScaledVector(_, -D.x).multiplyScalar(Me), b[le].add(L), b[Je].add(L), b[pe].add(L), E[le].add(B), E[Je].add(B), E[pe].add(B));
    }
    let te = this.groups;
    te.length === 0 && (te = [{
      start: 0,
      count: e.count
    }]);
    for (let le = 0, Je = te.length; le < Je; ++le) {
      const pe = te[le], Me = pe.start, Ee = pe.count;
      for (let he = Me, we = Me + Ee; he < we; he += 3)
        j(
          e.getX(he + 0),
          e.getX(he + 1),
          e.getX(he + 2)
        );
    }
    const ee = new se(), ue = new se(), de = new se(), be = new se();
    function ce(le) {
      de.fromBufferAttribute(d, le), be.copy(de);
      const Je = b[le];
      ee.copy(Je), ee.sub(de.multiplyScalar(de.dot(Je))).normalize(), ue.crossVectors(be, Je);
      const Me = ue.dot(E[le]) < 0 ? -1 : 1;
      v.setXYZW(le, ee.x, ee.y, ee.z, Me);
    }
    for (let le = 0, Je = te.length; le < Je; ++le) {
      const pe = te[le], Me = pe.start, Ee = pe.count;
      for (let he = Me, we = Me + Ee; he < we; he += 3)
        ce(e.getX(he + 0)), ce(e.getX(he + 1)), ce(e.getX(he + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, a = this.getAttribute("position");
    if (a !== void 0) {
      let u = this.getAttribute("normal");
      if (u === void 0)
        u = new lo(new Float32Array(a.count * 3), 3), this.setAttribute("normal", u);
      else
        for (let C = 0, z = u.count; C < z; C++)
          u.setXYZ(C, 0, 0, 0);
      const d = new se(), m = new se(), v = new se(), b = new se(), E = new se(), g = new se(), _ = new se(), R = new se();
      if (e)
        for (let C = 0, z = e.count; C < z; C += 3) {
          const D = e.getX(C + 0), L = e.getX(C + 1), B = e.getX(C + 2);
          d.fromBufferAttribute(a, D), m.fromBufferAttribute(a, L), v.fromBufferAttribute(a, B), _.subVectors(v, m), R.subVectors(d, m), _.cross(R), b.fromBufferAttribute(u, D), E.fromBufferAttribute(u, L), g.fromBufferAttribute(u, B), b.add(_), E.add(_), g.add(_), u.setXYZ(D, b.x, b.y, b.z), u.setXYZ(L, E.x, E.y, E.z), u.setXYZ(B, g.x, g.y, g.z);
        }
      else
        for (let C = 0, z = a.count; C < z; C += 3)
          d.fromBufferAttribute(a, C + 0), m.fromBufferAttribute(a, C + 1), v.fromBufferAttribute(a, C + 2), _.subVectors(v, m), R.subVectors(d, m), _.cross(R), u.setXYZ(C + 0, _.x, _.y, _.z), u.setXYZ(C + 1, _.x, _.y, _.z), u.setXYZ(C + 2, _.x, _.y, _.z);
      this.normalizeNormals(), u.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let a = 0, u = e.count; a < u; a++)
      nr.fromBufferAttribute(e, a), nr.normalize(), e.setXYZ(a, nr.x, nr.y, nr.z);
  }
  toNonIndexed() {
    function e(b, E) {
      const g = b.array, _ = b.itemSize, R = b.normalized, C = new g.constructor(E.length * _);
      let z = 0, D = 0;
      for (let L = 0, B = E.length; L < B; L++) {
        b.isInterleavedBufferAttribute ? z = E[L] * b.data.stride + b.offset : z = E[L] * _;
        for (let j = 0; j < _; j++)
          C[D++] = g[z++];
      }
      return new lo(C, _, R);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const a = new uo(), u = this.index.array, d = this.attributes;
    for (const b in d) {
      const E = d[b], g = e(E, u);
      a.setAttribute(b, g);
    }
    const m = this.morphAttributes;
    for (const b in m) {
      const E = [], g = m[b];
      for (let _ = 0, R = g.length; _ < R; _++) {
        const C = g[_], z = e(C, u);
        E.push(z);
      }
      a.morphAttributes[b] = E;
    }
    a.morphTargetsRelative = this.morphTargetsRelative;
    const v = this.groups;
    for (let b = 0, E = v.length; b < E; b++) {
      const g = v[b];
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
      const E = this.parameters;
      for (const g in E)
        E[g] !== void 0 && (e[g] = E[g]);
      return e;
    }
    e.data = { attributes: {} };
    const a = this.index;
    a !== null && (e.data.index = {
      type: a.array.constructor.name,
      array: Array.prototype.slice.call(a.array)
    });
    const u = this.attributes;
    for (const E in u) {
      const g = u[E];
      e.data.attributes[E] = g.toJSON(e.data);
    }
    const d = {};
    let m = !1;
    for (const E in this.morphAttributes) {
      const g = this.morphAttributes[E], _ = [];
      for (let R = 0, C = g.length; R < C; R++) {
        const z = g[R];
        _.push(z.toJSON(e.data));
      }
      _.length > 0 && (d[E] = _, m = !0);
    }
    m && (e.data.morphAttributes = d, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const v = this.groups;
    v.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(v)));
    const b = this.boundingSphere;
    return b !== null && (e.data.boundingSphere = {
      center: b.center.toArray(),
      radius: b.radius
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
      const _ = d[g];
      this.setAttribute(g, _.clone(a));
    }
    const m = e.morphAttributes;
    for (const g in m) {
      const _ = [], R = m[g];
      for (let C = 0, z = R.length; C < z; C++)
        _.push(R[C].clone(a));
      this.morphAttributes[g] = _;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const v = e.groups;
    for (let g = 0, _ = v.length; g < _; g++) {
      const R = v[g];
      this.addGroup(R.start, R.count, R.materialIndex);
    }
    const b = e.boundingBox;
    b !== null && (this.boundingBox = b.clone());
    const E = e.boundingSphere;
    return E !== null && (this.boundingSphere = E.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Yx = /* @__PURE__ */ new Gr(), io = /* @__PURE__ */ new L1(), lp = /* @__PURE__ */ new my(), Wx = /* @__PURE__ */ new se(), Dc = /* @__PURE__ */ new se(), Ac = /* @__PURE__ */ new se(), Nc = /* @__PURE__ */ new se(), Qv = /* @__PURE__ */ new se(), up = /* @__PURE__ */ new se(), op = /* @__PURE__ */ new Pt(), cp = /* @__PURE__ */ new Pt(), fp = /* @__PURE__ */ new Pt(), Qx = /* @__PURE__ */ new se(), Gx = /* @__PURE__ */ new se(), Xx = /* @__PURE__ */ new se(), dp = /* @__PURE__ */ new se(), hp = /* @__PURE__ */ new se();
class _M extends yi {
  constructor(e = new uo(), a = new yM()) {
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
          const b = d[m].name || String(m);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[b] = m;
        }
      }
    }
  }
  getVertexPosition(e, a) {
    const u = this.geometry, d = u.attributes.position, m = u.morphAttributes.position, v = u.morphTargetsRelative;
    a.fromBufferAttribute(d, e);
    const b = this.morphTargetInfluences;
    if (m && b) {
      up.set(0, 0, 0);
      for (let E = 0, g = m.length; E < g; E++) {
        const _ = b[E], R = m[E];
        _ !== 0 && (Qv.fromBufferAttribute(R, e), v ? up.addScaledVector(Qv, _) : up.addScaledVector(Qv.sub(a), _));
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
    const m = this.geometry, v = this.material, b = m.index, E = m.attributes.position, g = m.attributes.uv, _ = m.attributes.uv1, R = m.attributes.normal, C = m.groups, z = m.drawRange;
    if (b !== null)
      if (Array.isArray(v))
        for (let D = 0, L = C.length; D < L; D++) {
          const B = C[D], j = v[B.materialIndex], te = Math.max(B.start, z.start), ee = Math.min(b.count, Math.min(B.start + B.count, z.start + z.count));
          for (let ue = te, de = ee; ue < de; ue += 3) {
            const be = b.getX(ue), ce = b.getX(ue + 1), le = b.getX(ue + 2);
            d = pp(this, j, e, u, g, _, R, be, ce, le), d && (d.faceIndex = Math.floor(ue / 3), d.face.materialIndex = B.materialIndex, a.push(d));
          }
        }
      else {
        const D = Math.max(0, z.start), L = Math.min(b.count, z.start + z.count);
        for (let B = D, j = L; B < j; B += 3) {
          const te = b.getX(B), ee = b.getX(B + 1), ue = b.getX(B + 2);
          d = pp(this, v, e, u, g, _, R, te, ee, ue), d && (d.faceIndex = Math.floor(B / 3), a.push(d));
        }
      }
    else if (E !== void 0)
      if (Array.isArray(v))
        for (let D = 0, L = C.length; D < L; D++) {
          const B = C[D], j = v[B.materialIndex], te = Math.max(B.start, z.start), ee = Math.min(E.count, Math.min(B.start + B.count, z.start + z.count));
          for (let ue = te, de = ee; ue < de; ue += 3) {
            const be = ue, ce = ue + 1, le = ue + 2;
            d = pp(this, j, e, u, g, _, R, be, ce, le), d && (d.faceIndex = Math.floor(ue / 3), d.face.materialIndex = B.materialIndex, a.push(d));
          }
        }
      else {
        const D = Math.max(0, z.start), L = Math.min(E.count, z.start + z.count);
        for (let B = D, j = L; B < j; B += 3) {
          const te = B, ee = B + 1, ue = B + 2;
          d = pp(this, v, e, u, g, _, R, te, ee, ue), d && (d.faceIndex = Math.floor(B / 3), a.push(d));
        }
      }
  }
}
function EM(y, e, a, u, d, m, v, b) {
  let E;
  if (e.side === AR ? E = u.intersectTriangle(v, m, d, !0, b) : E = u.intersectTriangle(d, m, v, e.side === sy, b), E === null) return null;
  hp.copy(b), hp.applyMatrix4(y.matrixWorld);
  const g = a.ray.origin.distanceTo(hp);
  return g < a.near || g > a.far ? null : {
    distance: g,
    point: hp.clone(),
    object: y
  };
}
function pp(y, e, a, u, d, m, v, b, E, g) {
  y.getVertexPosition(b, Dc), y.getVertexPosition(E, Ac), y.getVertexPosition(g, Nc);
  const _ = EM(y, e, a, u, Dc, Ac, Nc, dp);
  if (_) {
    d && (op.fromBufferAttribute(d, b), cp.fromBufferAttribute(d, E), fp.fromBufferAttribute(d, g), _.uv = us.getInterpolation(dp, Dc, Ac, Nc, op, cp, fp, new Pt())), m && (op.fromBufferAttribute(m, b), cp.fromBufferAttribute(m, E), fp.fromBufferAttribute(m, g), _.uv1 = us.getInterpolation(dp, Dc, Ac, Nc, op, cp, fp, new Pt())), v && (Qx.fromBufferAttribute(v, b), Gx.fromBufferAttribute(v, E), Xx.fromBufferAttribute(v, g), _.normal = us.getInterpolation(dp, Dc, Ac, Nc, Qx, Gx, Xx, new se()), _.normal.dot(u.direction) > 0 && _.normal.multiplyScalar(-1));
    const R = {
      a: b,
      b: E,
      c: g,
      normal: new se(),
      materialIndex: 0
    };
    us.getNormal(Dc, Ac, Nc, R.normal), _.face = R;
  }
  return _;
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
function RM(y) {
  const e = {};
  for (let a = 0; a < y.length; a++) {
    const u = vy(y[a]);
    for (const d in u)
      e[d] = u[d];
  }
  return e;
}
function MM(y) {
  const e = [];
  for (let a = 0; a < y.length; a++)
    e.push(y[a].clone());
  return e;
}
const bM = { clone: vy, merge: RM };
var TM = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, CM = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Rp extends Ep {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = TM, this.fragmentShader = CM, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = vy(e.uniforms), this.uniformsGroups = MM(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class k1 extends yi {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Gr(), this.projectionMatrix = new Gr(), this.projectionMatrixInverse = new Gr(), this.coordinateSystem = hd;
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
class Mp extends uo {
  constructor(e = 1, a = 1, u = 1, d = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: a,
      widthSegments: u,
      heightSegments: d
    };
    const m = e / 2, v = a / 2, b = Math.floor(u), E = Math.floor(d), g = b + 1, _ = E + 1, R = e / b, C = a / E, z = [], D = [], L = [], B = [];
    for (let j = 0; j < _; j++) {
      const te = j * C - v;
      for (let ee = 0; ee < g; ee++) {
        const ue = ee * R - m;
        D.push(ue, -te, 0), L.push(0, 0, 1), B.push(ee / b), B.push(1 - j / E);
      }
    }
    for (let j = 0; j < E; j++)
      for (let te = 0; te < b; te++) {
        const ee = te + g * j, ue = te + g * (j + 1), de = te + 1 + g * (j + 1), be = te + 1 + g * j;
        z.push(ee, ue, be), z.push(ue, de, be);
      }
    this.setIndex(z), this.setAttribute("position", new Bc(D, 3)), this.setAttribute("normal", new Bc(L, 3)), this.setAttribute("uv", new Bc(B, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Mp(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class H1 extends os {
  constructor(e, a, u, d, m, v, b, E, g, _) {
    if (_ = _ !== void 0 ? _ : Dv, _ !== Dv && _ !== Mx)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    u === void 0 && _ === Dv && (u = UR), u === void 0 && _ === Mx && (u = BR), super(null, d, m, v, b, E, _, u, g), this.isDepthTexture = !0, this.image = { width: e, height: a }, this.magFilter = b !== void 0 ? b : Rx, this.minFilter = E !== void 0 ? E : Rx, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const a = super.toJSON(e);
    return this.compareFunction !== null && (a.compareFunction = this.compareFunction), a;
  }
}
const wM = /* @__PURE__ */ new H1(1, 1);
wM.compareFunction = HR;
class zM extends yi {
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
class DM extends Ep {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Vc(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Zx = /* @__PURE__ */ new se(), Jx = /* @__PURE__ */ new se(), Kx = /* @__PURE__ */ new Gr(), Gv = /* @__PURE__ */ new L1(), mp = /* @__PURE__ */ new my();
class AM extends yi {
  constructor(e = new uo(), a = new DM()) {
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
    const b = m / ((this.scale.x + this.scale.y + this.scale.z) / 3), E = b * b, g = new se(), _ = new se(), R = new se(), C = new se(), z = this.isLineSegments ? 2 : 1, D = u.index, B = u.attributes.position;
    if (D !== null) {
      const j = Math.max(0, v.start), te = Math.min(D.count, v.start + v.count);
      for (let ee = j, ue = te - 1; ee < ue; ee += z) {
        const de = D.getX(ee), be = D.getX(ee + 1);
        if (g.fromBufferAttribute(B, de), _.fromBufferAttribute(B, be), Gv.distanceSqToSegment(g, _, C, R) > E) continue;
        C.applyMatrix4(this.matrixWorld);
        const le = e.ray.origin.distanceTo(C);
        le < e.near || le > e.far || a.push({
          distance: le,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: R.clone().applyMatrix4(this.matrixWorld),
          index: ee,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const j = Math.max(0, v.start), te = Math.min(B.count, v.start + v.count);
      for (let ee = j, ue = te - 1; ee < ue; ee += z) {
        if (g.fromBufferAttribute(B, ee), _.fromBufferAttribute(B, ee + 1), Gv.distanceSqToSegment(g, _, C, R) > E) continue;
        C.applyMatrix4(this.matrixWorld);
        const be = e.ray.origin.distanceTo(C);
        be < e.near || be > e.far || a.push({
          distance: be,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: R.clone().applyMatrix4(this.matrixWorld),
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
          const b = d[m].name || String(m);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[b] = m;
        }
      }
    }
  }
}
const $x = /* @__PURE__ */ new se(), e1 = /* @__PURE__ */ new se();
class NM extends AM {
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
class FM extends Rp {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: M1
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = M1);
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
function OM() {
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
function UM() {
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
    ), d = y, m = e, v = a, b = u, E = 0, g = 1;
    au.ConcurrentRoot = g, au.ContinuousEventPriority = m, au.DefaultEventPriority = v, au.DiscreteEventPriority = d, au.IdleEventPriority = b, au.LegacyRoot = E;
  }()), au;
}
process.env.NODE_ENV === "production" ? uy.exports = OM() : uy.exports = UM();
var pd = uy.exports, oy = { exports: {} }, vp = { exports: {} }, Xv = {};
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
function LM() {
  return r1 || (r1 = 1, function(y) {
    function e(k, ne) {
      var K = k.length;
      k.push(ne);
      e: for (; 0 < K; ) {
        var O = K - 1 >>> 1, V = k[O];
        if (0 < d(V, ne)) k[O] = ne, k[K] = V, K = O;
        else break e;
      }
    }
    function a(k) {
      return k.length === 0 ? null : k[0];
    }
    function u(k) {
      if (k.length === 0) return null;
      var ne = k[0], K = k.pop();
      if (K !== ne) {
        k[0] = K;
        e: for (var O = 0, V = k.length, Pe = V >>> 1; O < Pe; ) {
          var Ce = 2 * (O + 1) - 1, Ve = k[Ce], ke = Ce + 1, it = k[ke];
          if (0 > d(Ve, K)) ke < V && 0 > d(it, Ve) ? (k[O] = it, k[ke] = K, O = ke) : (k[O] = Ve, k[Ce] = K, O = Ce);
          else if (ke < V && 0 > d(it, K)) k[O] = it, k[ke] = K, O = ke;
          else break e;
        }
      }
      return ne;
    }
    function d(k, ne) {
      var K = k.sortIndex - ne.sortIndex;
      return K !== 0 ? K : k.id - ne.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      y.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, b = v.now();
      y.unstable_now = function() {
        return v.now() - b;
      };
    }
    var E = [], g = [], _ = 1, R = null, C = 3, z = !1, D = !1, L = !1, B = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(k) {
      for (var ne = a(g); ne !== null; ) {
        if (ne.callback === null) u(g);
        else if (ne.startTime <= k) u(g), ne.sortIndex = ne.expirationTime, e(E, ne);
        else break;
        ne = a(g);
      }
    }
    function ue(k) {
      if (L = !1, ee(k), !D) if (a(E) !== null) D = !0, Oe(de);
      else {
        var ne = a(g);
        ne !== null && ve(ue, ne.startTime - k);
      }
    }
    function de(k, ne) {
      D = !1, L && (L = !1, j(le), le = -1), z = !0;
      var K = C;
      try {
        for (ee(ne), R = a(E); R !== null && (!(R.expirationTime > ne) || k && !Me()); ) {
          var O = R.callback;
          if (typeof O == "function") {
            R.callback = null, C = R.priorityLevel;
            var V = O(R.expirationTime <= ne);
            ne = y.unstable_now(), typeof V == "function" ? R.callback = V : R === a(E) && u(E), ee(ne);
          } else u(E);
          R = a(E);
        }
        if (R !== null) var Pe = !0;
        else {
          var Ce = a(g);
          Ce !== null && ve(ue, Ce.startTime - ne), Pe = !1;
        }
        return Pe;
      } finally {
        R = null, C = K, z = !1;
      }
    }
    var be = !1, ce = null, le = -1, Je = 5, pe = -1;
    function Me() {
      return !(y.unstable_now() - pe < Je);
    }
    function Ee() {
      if (ce !== null) {
        var k = y.unstable_now();
        pe = k;
        var ne = !0;
        try {
          ne = ce(!0, k);
        } finally {
          ne ? he() : (be = !1, ce = null);
        }
      } else be = !1;
    }
    var he;
    if (typeof te == "function") he = function() {
      te(Ee);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), nt = we.port2;
      we.port1.onmessage = Ee, he = function() {
        nt.postMessage(null);
      };
    } else he = function() {
      B(Ee, 0);
    };
    function Oe(k) {
      ce = k, be || (be = !0, he());
    }
    function ve(k, ne) {
      le = B(function() {
        k(y.unstable_now());
      }, ne);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, y.unstable_continueExecution = function() {
      D || z || (D = !0, Oe(de));
    }, y.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Je = 0 < k ? Math.floor(1e3 / k) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, y.unstable_getFirstCallbackNode = function() {
      return a(E);
    }, y.unstable_next = function(k) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = C;
      }
      var K = C;
      C = ne;
      try {
        return k();
      } finally {
        C = K;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(k, ne) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var K = C;
      C = k;
      try {
        return ne();
      } finally {
        C = K;
      }
    }, y.unstable_scheduleCallback = function(k, ne, K) {
      var O = y.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? O + K : O) : K = O, k) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = K + V, k = { id: _++, callback: ne, priorityLevel: k, startTime: K, expirationTime: V, sortIndex: -1 }, K > O ? (k.sortIndex = K, e(g, k), a(E) === null && k === a(g) && (L ? (j(le), le = -1) : L = !0, ve(ue, K - O))) : (k.sortIndex = V, e(E, k), D || z || (D = !0, Oe(de))), k;
    }, y.unstable_shouldYield = Me, y.unstable_wrapCallback = function(k) {
      var ne = C;
      return function() {
        var K = C;
        C = ne;
        try {
          return k.apply(this, arguments);
        } finally {
          C = K;
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
function BM() {
  return i1 || (i1 = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var e = !1, a = !1, u = 5;
      function d(G, oe) {
        var Ne = G.length;
        G.push(oe), b(G, oe, Ne);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function v(G) {
        if (G.length === 0)
          return null;
        var oe = G[0], Ne = G.pop();
        return Ne !== oe && (G[0] = Ne, E(G, Ne, 0)), oe;
      }
      function b(G, oe, Ne) {
        for (var $e = Ne; $e > 0; ) {
          var Ue = $e - 1 >>> 1, Kt = G[Ue];
          if (g(Kt, oe) > 0)
            G[Ue] = oe, G[$e] = Kt, $e = Ue;
          else
            return;
        }
      }
      function E(G, oe, Ne) {
        for (var $e = Ne, Ue = G.length, Kt = Ue >>> 1; $e < Kt; ) {
          var Tt = ($e + 1) * 2 - 1, qe = G[Tt], Se = Tt + 1, kn = G[Se];
          if (g(qe, oe) < 0)
            Se < Ue && g(kn, qe) < 0 ? (G[$e] = kn, G[Se] = oe, $e = Se) : (G[$e] = qe, G[Tt] = oe, $e = Tt);
          else if (Se < Ue && g(kn, oe) < 0)
            G[$e] = kn, G[Se] = oe, $e = Se;
          else
            return;
        }
      }
      function g(G, oe) {
        var Ne = G.sortIndex - oe.sortIndex;
        return Ne !== 0 ? Ne : G.id - oe.id;
      }
      var _ = 1, R = 2, C = 3, z = 4, D = 5;
      function L(G, oe) {
      }
      var B = typeof performance == "object" && typeof performance.now == "function";
      if (B) {
        var j = performance;
        y.unstable_now = function() {
          return j.now();
        };
      } else {
        var te = Date, ee = te.now();
        y.unstable_now = function() {
          return te.now() - ee;
        };
      }
      var ue = 1073741823, de = -1, be = 250, ce = 5e3, le = 1e4, Je = ue, pe = [], Me = [], Ee = 1, he = null, we = C, nt = !1, Oe = !1, ve = !1, k = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function O(G) {
        for (var oe = m(Me); oe !== null; ) {
          if (oe.callback === null)
            v(Me);
          else if (oe.startTime <= G)
            v(Me), oe.sortIndex = oe.expirationTime, d(pe, oe);
          else
            return;
          oe = m(Me);
        }
      }
      function V(G) {
        if (ve = !1, O(G), !Oe)
          if (m(pe) !== null)
            Oe = !0, Dr(Pe);
          else {
            var oe = m(Me);
            oe !== null && Xr(V, oe.startTime - G);
          }
      }
      function Pe(G, oe) {
        Oe = !1, ve && (ve = !1, ua()), nt = !0;
        var Ne = we;
        try {
          var $e;
          if (!a) return Ce(G, oe);
        } finally {
          he = null, we = Ne, nt = !1;
        }
      }
      function Ce(G, oe) {
        var Ne = oe;
        for (O(Ne), he = m(pe); he !== null && !e && !(he.expirationTime > Ne && (!G || Bn())); ) {
          var $e = he.callback;
          if (typeof $e == "function") {
            he.callback = null, we = he.priorityLevel;
            var Ue = he.expirationTime <= Ne, Kt = $e(Ue);
            Ne = y.unstable_now(), typeof Kt == "function" ? he.callback = Kt : he === m(pe) && v(pe), O(Ne);
          } else
            v(pe);
          he = m(pe);
        }
        if (he !== null)
          return !0;
        var Tt = m(Me);
        return Tt !== null && Xr(V, Tt.startTime - Ne), !1;
      }
      function Ve(G, oe) {
        switch (G) {
          case _:
          case R:
          case C:
          case z:
          case D:
            break;
          default:
            G = C;
        }
        var Ne = we;
        we = G;
        try {
          return oe();
        } finally {
          we = Ne;
        }
      }
      function ke(G) {
        var oe;
        switch (we) {
          case _:
          case R:
          case C:
            oe = C;
            break;
          default:
            oe = we;
            break;
        }
        var Ne = we;
        we = oe;
        try {
          return G();
        } finally {
          we = Ne;
        }
      }
      function it(G) {
        var oe = we;
        return function() {
          var Ne = we;
          we = oe;
          try {
            return G.apply(this, arguments);
          } finally {
            we = Ne;
          }
        };
      }
      function at(G, oe, Ne) {
        var $e = y.unstable_now(), Ue;
        if (typeof Ne == "object" && Ne !== null) {
          var Kt = Ne.delay;
          typeof Kt == "number" && Kt > 0 ? Ue = $e + Kt : Ue = $e;
        } else
          Ue = $e;
        var Tt;
        switch (G) {
          case _:
            Tt = de;
            break;
          case R:
            Tt = be;
            break;
          case D:
            Tt = Je;
            break;
          case z:
            Tt = le;
            break;
          case C:
          default:
            Tt = ce;
            break;
        }
        var qe = Ue + Tt, Se = {
          id: Ee++,
          callback: oe,
          priorityLevel: G,
          startTime: Ue,
          expirationTime: qe,
          sortIndex: -1
        };
        return Ue > $e ? (Se.sortIndex = Ue, d(Me, Se), m(pe) === null && Se === m(Me) && (ve ? ua() : ve = !0, Xr(V, Ue - $e))) : (Se.sortIndex = qe, d(pe, Se), !Oe && !nt && (Oe = !0, Dr(Pe))), Se;
      }
      function Ie() {
      }
      function ot() {
        !Oe && !nt && (Oe = !0, Dr(Pe));
      }
      function Et() {
        return m(pe);
      }
      function Ot(G) {
        G.callback = null;
      }
      function Ge() {
        return we;
      }
      var Vt = !1, Rt = null, yt = -1, Jt = u, dr = -1;
      function Bn() {
        var G = y.unstable_now() - dr;
        return !(G < Jt);
      }
      function cn() {
      }
      function hr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Jt = Math.floor(1e3 / G) : Jt = u;
      }
      var Zn = function() {
        if (Rt !== null) {
          var G = y.unstable_now();
          dr = G;
          var oe = !0, Ne = !0;
          try {
            Ne = Rt(oe, G);
          } finally {
            Ne ? jt() : (Vt = !1, Rt = null);
          }
        } else
          Vt = !1;
      }, jt;
      if (typeof K == "function")
        jt = function() {
          K(Zn);
        };
      else if (typeof MessageChannel < "u") {
        var pr = new MessageChannel(), la = pr.port2;
        pr.port1.onmessage = Zn, jt = function() {
          la.postMessage(null);
        };
      } else
        jt = function() {
          k(Zn, 0);
        };
      function Dr(G) {
        Rt = G, Vt || (Vt = !0, jt());
      }
      function Xr(G, oe) {
        yt = k(function() {
          G(y.unstable_now());
        }, oe);
      }
      function ua() {
        ne(yt), yt = -1;
      }
      var cs = cn, Na = null;
      y.unstable_IdlePriority = D, y.unstable_ImmediatePriority = _, y.unstable_LowPriority = z, y.unstable_NormalPriority = C, y.unstable_Profiling = Na, y.unstable_UserBlockingPriority = R, y.unstable_cancelCallback = Ot, y.unstable_continueExecution = ot, y.unstable_forceFrameRate = hr, y.unstable_getCurrentPriorityLevel = Ge, y.unstable_getFirstCallbackNode = Et, y.unstable_next = ke, y.unstable_pauseExecution = Ie, y.unstable_requestPaint = cs, y.unstable_runWithPriority = Ve, y.unstable_scheduleCallback = at, y.unstable_shouldYield = Bn, y.unstable_wrapCallback = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zv)), Zv;
}
var a1;
function P1() {
  return a1 || (a1 = 1, process.env.NODE_ENV === "production" ? vp.exports = LM() : vp.exports = BM()), vp.exports;
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
function kM() {
  return s1 || (s1 = 1, Jv = function(e) {
    var a = {}, u = Qe, d = P1(), m = Object.assign;
    function v(r) {
      for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, o = 1; o < arguments.length; o++) i += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + r + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var b = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = Symbol.for("react.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), D = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), de = Symbol.iterator;
    function be(r) {
      return r === null || typeof r != "object" ? null : (r = de && r[de] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    function ce(r) {
      if (r == null) return null;
      if (typeof r == "function") return r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case _:
          return "Fragment";
        case g:
          return "Portal";
        case C:
          return "Profiler";
        case R:
          return "StrictMode";
        case B:
          return "Suspense";
        case j:
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
          return i = r.displayName || null, i !== null ? i : ce(r.type) || "Memo";
        case ee:
          i = r._payload, r = r._init;
          try {
            return ce(r(i));
          } catch {
          }
      }
      return null;
    }
    function le(r) {
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
          return ce(i);
        case 8:
          return i === R ? "StrictMode" : "Mode";
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
    function Je(r) {
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
    function pe(r) {
      if (Je(r) !== r) throw Error(v(188));
    }
    function Me(r) {
      var i = r.alternate;
      if (!i) {
        if (i = Je(r), i === null) throw Error(v(188));
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
            if (S === o) return pe(p), r;
            if (S === f) return pe(p), i;
            S = S.sibling;
          }
          throw Error(v(188));
        }
        if (o.return !== f.return) o = p, f = S;
        else {
          for (var A = !1, H = p.child; H; ) {
            if (H === o) {
              A = !0, o = p, f = S;
              break;
            }
            if (H === f) {
              A = !0, f = p, o = S;
              break;
            }
            H = H.sibling;
          }
          if (!A) {
            for (H = S.child; H; ) {
              if (H === o) {
                A = !0, o = S, f = p;
                break;
              }
              if (H === f) {
                A = !0, f = S, o = p;
                break;
              }
              H = H.sibling;
            }
            if (!A) throw Error(v(189));
          }
        }
        if (o.alternate !== f) throw Error(v(190));
      }
      if (o.tag !== 3) throw Error(v(188));
      return o.stateNode.current === o ? r : i;
    }
    function Ee(r) {
      return r = Me(r), r !== null ? he(r) : null;
    }
    function he(r) {
      if (r.tag === 5 || r.tag === 6) return r;
      for (r = r.child; r !== null; ) {
        var i = he(r);
        if (i !== null) return i;
        r = r.sibling;
      }
      return null;
    }
    function we(r) {
      if (r.tag === 5 || r.tag === 6) return r;
      for (r = r.child; r !== null; ) {
        if (r.tag !== 4) {
          var i = we(r);
          if (i !== null) return i;
        }
        r = r.sibling;
      }
      return null;
    }
    var nt = Array.isArray, Oe = e.getPublicInstance, ve = e.getRootHostContext, k = e.getChildHostContext, ne = e.prepareForCommit, K = e.resetAfterCommit, O = e.createInstance, V = e.appendInitialChild, Pe = e.finalizeInitialChildren, Ce = e.prepareUpdate, Ve = e.shouldSetTextContent, ke = e.createTextInstance, it = e.scheduleTimeout, at = e.cancelTimeout, Ie = e.noTimeout, ot = e.isPrimaryRenderer, Et = e.supportsMutation, Ot = e.supportsPersistence, Ge = e.supportsHydration, Vt = e.getInstanceFromNode, Rt = e.preparePortalMount, yt = e.getCurrentEventPriority, Jt = e.detachDeletedInstance, dr = e.supportsMicrotasks, Bn = e.scheduleMicrotask, cn = e.supportsTestSelectors, hr = e.findFiberRoot, Zn = e.getBoundingRect, jt = e.getTextContent, pr = e.isHiddenSubtree, la = e.matchAccessibilityRole, Dr = e.setFocusIfFocusable, Xr = e.setupIntersectionObserver, ua = e.appendChild, cs = e.appendChildToContainer, Na = e.commitTextUpdate, G = e.commitMount, oe = e.commitUpdate, Ne = e.insertBefore, $e = e.insertInContainerBefore, Ue = e.removeChild, Kt = e.removeChildFromContainer, Tt = e.resetTextContent, qe = e.hideInstance, Se = e.hideTextInstance, kn = e.unhideInstance, qt = e.unhideTextInstance, gt = e.clearContainer, $s = e.cloneInstance, mr = e.createContainerChildSet, Fa = e.appendChildToContainerChildSet, ou = e.finalizeContainerChildren, Mt = e.replaceContainerChildren, Zr = e.cloneHiddenInstance, Li = e.cloneHiddenTextInstance, Ar = e.canHydrateInstance, rr = e.canHydrateTextInstance, ir = e.canHydrateSuspenseInstance, oo = e.isSuspenseInstancePending, Bi = e.isSuspenseInstanceFallback, el = e.registerSuspenseInstanceRetry, fs = e.getNextHydratableSibling, co = e.getFirstHydratableChild, Oa = e.getFirstHydratableChildWithinContainer, Jn = e.getFirstHydratableChildWithinSuspenseInstance, Cn = e.hydrateInstance, fo = e.hydrateTextInstance, cu = e.hydrateSuspenseInstance, oa = e.getNextHydratableInstanceAfterSuspenseInstance, tl = e.commitHydratedContainer, gi = e.commitHydratedSuspenseInstance, nl = e.clearSuspenseBoundary, fu = e.clearSuspenseBoundaryFromContainer, ds = e.shouldDeleteUnhydratedTailInstances, hs = e.didNotMatchHydratedContainerTextInstance, Ua = e.didNotMatchHydratedTextInstance, Nr;
    function ps(r) {
      if (Nr === void 0) try {
        throw Error();
      } catch (o) {
        var i = o.stack.trim().match(/\n( *(at )?)/);
        Nr = i && i[1] || "";
      }
      return `
` + Nr + r;
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
          } catch (ye) {
            var f = ye;
          }
          Reflect.construct(r, [], i);
        } else {
          try {
            i.call();
          } catch (ye) {
            f = ye;
          }
          r.call(i.prototype);
        }
        else {
          try {
            throw Error();
          } catch (ye) {
            f = ye;
          }
          r();
        }
      } catch (ye) {
        if (ye && f && typeof ye.stack == "string") {
          for (var p = ye.stack.split(`
`), S = f.stack.split(`
`), A = p.length - 1, H = S.length - 1; 1 <= A && 0 <= H && p[A] !== S[H]; ) H--;
          for (; 1 <= A && 0 <= H; A--, H--) if (p[A] !== S[H]) {
            if (A !== 1 || H !== 1)
              do
                if (A--, H--, 0 > H || p[A] !== S[H]) {
                  var $ = `
` + p[A].replace(" at new ", " at ");
                  return r.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", r.displayName)), $;
                }
              while (1 <= A && 0 <= H);
            break;
          }
        }
      } finally {
        La = !1, Error.prepareStackTrace = o;
      }
      return (r = r ? r.displayName || r.name : "") ? ps(r) : "";
    }
    var Ic = Object.prototype.hasOwnProperty, ki = [], Hi = -1;
    function Fr(r) {
      return { current: r };
    }
    function Yt(r) {
      0 > Hi || (r.current = ki[Hi], ki[Hi] = null, Hi--);
    }
    function Wt(r, i) {
      Hi++, ki[Hi] = r.current, r.current = i;
    }
    var Jr = {}, wn = Fr(Jr), Qt = Fr(!1), Kr = Jr;
    function Ba(r, i) {
      var o = r.type.contextTypes;
      if (!o) return Jr;
      var f = r.stateNode;
      if (f && f.__reactInternalMemoizedUnmaskedChildContext === i) return f.__reactInternalMemoizedMaskedChildContext;
      var p = {}, S;
      for (S in o) p[S] = i[S];
      return f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = i, r.__reactInternalMemoizedMaskedChildContext = p), p;
    }
    function Kn(r) {
      return r = r.childContextTypes, r != null;
    }
    function ka() {
      Yt(Qt), Yt(wn);
    }
    function rl(r, i, o) {
      if (wn.current !== Jr) throw Error(v(168));
      Wt(wn, i), Wt(Qt, o);
    }
    function ms(r, i, o) {
      var f = r.stateNode;
      if (i = i.childContextTypes, typeof f.getChildContext != "function") return o;
      f = f.getChildContext();
      for (var p in f) if (!(p in i)) throw Error(v(108, le(r) || "Unknown", p));
      return m({}, o, f);
    }
    function Pi(r) {
      return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Jr, Kr = wn.current, Wt(wn, r), Wt(Qt, Qt.current), !0;
    }
    function Ha(r, i, o) {
      var f = r.stateNode;
      if (!f) throw Error(v(169));
      o ? (r = ms(r, i, Kr), f.__reactInternalMemoizedMergedChildContext = r, Yt(Qt), Yt(wn), Wt(wn, r)) : Yt(Qt), Wt(Qt, o);
    }
    var vr = Math.clz32 ? Math.clz32 : po, il = Math.log, ho = Math.LN2;
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
        var H = A & ~p;
        H !== 0 ? f = xi(H) : (S &= A, S !== 0 && (f = xi(S)));
      } else A = o & ~p, A !== 0 ? f = xi(A) : S !== 0 && (f = xi(S));
      if (f === 0) return 0;
      if (i !== 0 && i !== f && !(i & p) && (p = f & -f, S = i & -i, p >= S || p === 16 && (S & 4194240) !== 0)) return i;
      if (f & 4 && (f |= o & 16), i = r.entangledLanes, i !== 0) for (r = r.entanglements, i &= f; 0 < i; ) o = 31 - vr(i), p = 1 << o, f |= r[o], i &= ~p;
      return f;
    }
    function Or(r, i) {
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
    function $r(r, i) {
      for (var o = r.suspendedLanes, f = r.pingedLanes, p = r.expirationTimes, S = r.pendingLanes; 0 < S; ) {
        var A = 31 - vr(S), H = 1 << A, $ = p[A];
        $ === -1 ? (!(H & o) || H & f) && (p[A] = Or(H, i)) : $ <= i && (r.expiredLanes |= H), S &= ~H;
      }
    }
    function zn(r) {
      return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
    }
    function al(r) {
      for (var i = [], o = 0; 31 > o; o++) i.push(r);
      return i;
    }
    function vs(r, i, o) {
      r.pendingLanes |= i, i !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, i = 31 - vr(i), r[i] = o;
    }
    function qc(r, i) {
      var o = r.pendingLanes & ~i;
      r.pendingLanes = i, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= i, r.mutableReadLanes &= i, r.entangledLanes &= i, i = r.entanglements;
      var f = r.eventTimes;
      for (r = r.expirationTimes; 0 < o; ) {
        var p = 31 - vr(o), S = 1 << p;
        i[p] = 0, f[p] = -1, r[p] = -1, o &= ~S;
      }
    }
    function sl(r, i) {
      var o = r.entangledLanes |= i;
      for (r = r.entanglements; o; ) {
        var f = 31 - vr(o), p = 1 << f;
        p & i | r[f] & i && (r[f] |= i), o &= ~p;
      }
    }
    var zt = 0;
    function hu(r) {
      return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Si = d.unstable_scheduleCallback, pu = d.unstable_cancelCallback, Yc = d.unstable_shouldYield, mo = d.unstable_requestPaint, sn = d.unstable_now, mu = d.unstable_ImmediatePriority, Wc = d.unstable_UserBlockingPriority, vu = d.unstable_NormalPriority, vo = d.unstable_IdlePriority, ha = null, ei = null;
    function Pa(r) {
      if (ei && typeof ei.onCommitFiberRoot == "function") try {
        ei.onCommitFiberRoot(ha, r, void 0, (r.current.flags & 128) === 128);
      } catch {
      }
    }
    function yo(r, i) {
      return r === i && (r !== 0 || 1 / r === 1 / i) || r !== r && i !== i;
    }
    var Ur = typeof Object.is == "function" ? Object.is : yo, yr = null, Va = !1, ys = !1;
    function gs(r) {
      yr === null ? yr = [r] : yr.push(r);
    }
    function Qc(r) {
      Va = !0, gs(r);
    }
    function ti() {
      if (!ys && yr !== null) {
        ys = !0;
        var r = 0, i = zt;
        try {
          var o = yr;
          for (zt = 1; r < o.length; r++) {
            var f = o[r];
            do
              f = f(!0);
            while (f !== null);
          }
          yr = null, Va = !1;
        } catch (p) {
          throw yr !== null && (yr = yr.slice(r + 1)), Si(mu, ti), p;
        } finally {
          zt = i, ys = !1;
        }
      }
      return null;
    }
    var Gc = b.ReactCurrentBatchConfig;
    function ll(r, i) {
      if (Ur(r, i)) return !0;
      if (typeof r != "object" || r === null || typeof i != "object" || i === null) return !1;
      var o = Object.keys(r), f = Object.keys(i);
      if (o.length !== f.length) return !1;
      for (f = 0; f < o.length; f++) {
        var p = o[f];
        if (!Ic.call(i, p) || !Ur(r[p], i[p])) return !1;
      }
      return !0;
    }
    function M(r) {
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
    var W = Fr(null), J = null, ge = null, Xe = null;
    function He() {
      Xe = ge = J = null;
    }
    function st(r, i, o) {
      ot ? (Wt(W, i._currentValue), i._currentValue = o) : (Wt(W, i._currentValue2), i._currentValue2 = o);
    }
    function ht(r) {
      var i = W.current;
      Yt(W), ot ? r._currentValue = i : r._currentValue2 = i;
    }
    function Ut(r, i, o) {
      for (; r !== null; ) {
        var f = r.alternate;
        if ((r.childLanes & i) !== i ? (r.childLanes |= i, f !== null && (f.childLanes |= i)) : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i), r === o) break;
        r = r.return;
      }
    }
    function Lt(r, i) {
      J = r, Xe = ge = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & i && ($n = !0), r.firstContext = null);
    }
    function xt(r) {
      var i = ot ? r._currentValue : r._currentValue2;
      if (Xe !== r) if (r = { context: r, memoizedValue: i, next: null }, ge === null) {
        if (J === null) throw Error(v(308));
        ge = r, J.dependencies = { lanes: 0, firstContext: r };
      } else ge = ge.next = r;
      return i;
    }
    var Ct = null, Bt = !1;
    function pn(r) {
      r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function Vi(r, i) {
      r = r.updateQueue, i.updateQueue === r && (i.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
    }
    function Lr(r, i) {
      return { eventTime: r, lane: i, tag: 0, payload: null, callback: null, next: null };
    }
    function _i(r, i) {
      var o = r.updateQueue;
      o !== null && (o = o.shared, bn !== null && r.mode & 1 && !(pt & 2) ? (r = o.interleaved, r === null ? (i.next = i, Ct === null ? Ct = [o] : Ct.push(o)) : (i.next = r.next, r.next = i), o.interleaved = i) : (r = o.pending, r === null ? i.next = i : (i.next = r.next, r.next = i), o.pending = i));
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
      Bt = !1;
      var S = p.firstBaseUpdate, A = p.lastBaseUpdate, H = p.shared.pending;
      if (H !== null) {
        p.shared.pending = null;
        var $ = H, ye = $.next;
        $.next = null, A === null ? S = ye : A.next = ye, A = $;
        var Re = r.alternate;
        Re !== null && (Re = Re.updateQueue, H = Re.lastBaseUpdate, H !== A && (H === null ? Re.firstBaseUpdate = ye : H.next = ye, Re.lastBaseUpdate = $));
      }
      if (S !== null) {
        var rt = p.baseState;
        A = 0, Re = ye = $ = null, H = S;
        do {
          var Ke = H.lane, nn = H.eventTime;
          if ((f & Ke) === Ke) {
            Re !== null && (Re = Re.next = {
              eventTime: nn,
              lane: 0,
              tag: H.tag,
              payload: H.payload,
              callback: H.callback,
              next: null
            });
            e: {
              var Ye = r, Yn = H;
              switch (Ke = i, nn = o, Yn.tag) {
                case 1:
                  if (Ye = Yn.payload, typeof Ye == "function") {
                    rt = Ye.call(nn, rt, Ke);
                    break e;
                  }
                  rt = Ye;
                  break e;
                case 3:
                  Ye.flags = Ye.flags & -65537 | 128;
                case 0:
                  if (Ye = Yn.payload, Ke = typeof Ye == "function" ? Ye.call(nn, rt, Ke) : Ye, Ke == null) break e;
                  rt = m({}, rt, Ke);
                  break e;
                case 2:
                  Bt = !0;
              }
            }
            H.callback !== null && H.lane !== 0 && (r.flags |= 64, Ke = p.effects, Ke === null ? p.effects = [H] : Ke.push(H));
          } else nn = { eventTime: nn, lane: Ke, tag: H.tag, payload: H.payload, callback: H.callback, next: null }, Re === null ? (ye = Re = nn, $ = rt) : Re = Re.next = nn, A |= Ke;
          if (H = H.next, H === null) {
            if (H = p.shared.pending, H === null) break;
            Ke = H, H = Ke.next, Ke.next = null, p.lastBaseUpdate = Ke, p.shared.pending = null;
          }
        } while (!0);
        if (Re === null && ($ = rt), p.baseState = $, p.firstBaseUpdate = ye, p.lastBaseUpdate = Re, i = p.shared.interleaved, i !== null) {
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
      return (r = r._reactInternals) ? Je(r) === r : !1;
    }, enqueueSetState: function(r, i, o) {
      r = r._reactInternals;
      var f = er(), p = Xa(r), S = Lr(f, p);
      S.payload = i, o != null && (S.callback = o), _i(r, S), i = ui(r, p, f), i !== null && ul(i, r, p);
    }, enqueueReplaceState: function(r, i, o) {
      r = r._reactInternals;
      var f = er(), p = Xa(r), S = Lr(f, p);
      S.tag = 1, S.payload = i, o != null && (S.callback = o), _i(r, S), i = ui(r, p, f), i !== null && ul(i, r, p);
    }, enqueueForceUpdate: function(r, i) {
      r = r._reactInternals;
      var o = er(), f = Xa(r), p = Lr(
        o,
        f
      );
      p.tag = 2, i != null && (p.callback = i), _i(r, p), i = ui(r, f, o), i !== null && ul(i, r, f);
    } };
    function xd(r, i, o, f, p, S, A) {
      return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(f, S, A) : i.prototype && i.prototype.isPureReactComponent ? !ll(o, f) || !ll(p, S) : !0;
    }
    function Sd(r, i, o) {
      var f = !1, p = Jr, S = i.contextType;
      return typeof S == "object" && S !== null ? S = xt(S) : (p = Kn(i) ? Kr : wn.current, f = i.contextTypes, S = (f = f != null) ? Ba(r, p) : Jr), i = new i(o, S), r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = So, r.stateNode = i, i._reactInternals = r, f && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = p, r.__reactInternalMemoizedMaskedChildContext = S), i;
    }
    function _d(r, i, o, f) {
      r = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(o, f), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(o, f), i.state !== r && So.enqueueReplaceState(i, i.state, null);
    }
    function Xc(r, i, o, f) {
      var p = r.stateNode;
      p.props = o, p.state = r.memoizedState, p.refs = go, pn(r);
      var S = i.contextType;
      typeof S == "object" && S !== null ? p.context = xt(S) : (S = Kn(i) ? Kr : wn.current, p.context = Ba(r, S)), p.state = r.memoizedState, S = i.getDerivedStateFromProps, typeof S == "function" && (xo(r, i, S, o), p.state = r.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (i = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), i !== p.state && So.enqueueReplaceState(p, p.state, null), ol(r, o, p, f), p.state = r.memoizedState), typeof p.componentDidMount == "function" && (r.flags |= 4194308);
    }
    var cl = [], fl = 0, _o = null, Eo = 0, ni = [], ri = 0, xs = null, pa = 1, ma = "";
    function Ss(r, i) {
      cl[fl++] = Eo, cl[fl++] = _o, _o = r, Eo = i;
    }
    function Ed(r, i, o) {
      ni[ri++] = pa, ni[ri++] = ma, ni[ri++] = xs, xs = r;
      var f = pa;
      r = ma;
      var p = 32 - vr(f) - 1;
      f &= ~(1 << p), o += 1;
      var S = 32 - vr(i) + p;
      if (30 < S) {
        var A = p - p % 5;
        S = (f & (1 << A) - 1).toString(32), f >>= A, p -= A, pa = 1 << 32 - vr(i) + p | o << p | f, ma = S + r;
      } else pa = 1 << S | o << p | f, ma = r;
    }
    function Zc(r) {
      r.return !== null && (Ss(r, 1), Ed(r, 1, 0));
    }
    function Jc(r) {
      for (; r === _o; ) _o = cl[--fl], cl[fl] = null, Eo = cl[--fl], cl[fl] = null;
      for (; r === xs; ) xs = ni[--ri], ni[ri] = null, ma = ni[--ri], ni[ri] = null, pa = ni[--ri], ni[ri] = null;
    }
    var Br = null, jn = null, ln = !1, dl = !1, ii = null;
    function Kc(r, i) {
      var o = tr(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = i, o.return = r, i = r.deletions, i === null ? (r.deletions = [o], r.flags |= 16) : i.push(o);
    }
    function $c(r, i) {
      switch (r.tag) {
        case 5:
          return i = Ar(i, r.type, r.pendingProps), i !== null ? (r.stateNode = i, Br = r, jn = co(i), !0) : !1;
        case 6:
          return i = rr(i, r.pendingProps), i !== null ? (r.stateNode = i, Br = r, jn = null, !0) : !1;
        case 13:
          if (i = ir(i), i !== null) {
            var o = xs !== null ? { id: pa, overflow: ma } : null;
            return r.memoizedState = { dehydrated: i, treeContext: o, retryLane: 1073741824 }, o = tr(18, null, null, 0), o.stateNode = i, o.return = r, r.child = o, Br = r, jn = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function Ro(r) {
      return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
    }
    function Mo(r) {
      if (ln) {
        var i = jn;
        if (i) {
          var o = i;
          if (!$c(r, i)) {
            if (Ro(r)) throw Error(v(418));
            i = fs(o);
            var f = Br;
            i && $c(r, i) ? Kc(f, o) : (r.flags = r.flags & -4097 | 2, ln = !1, Br = r);
          }
        } else {
          if (Ro(r)) throw Error(v(418));
          r.flags = r.flags & -4097 | 2, ln = !1, Br = r;
        }
      }
    }
    function ef(r) {
      for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
      Br = r;
    }
    function xu(r) {
      if (!Ge || r !== Br) return !1;
      if (!ln) return ef(r), ln = !0, !1;
      if (r.tag !== 3 && (r.tag !== 5 || ds(r.type) && !Ve(r.type, r.memoizedProps))) {
        var i = jn;
        if (i) {
          if (Ro(r)) {
            for (r = jn; r; ) r = fs(r);
            throw Error(v(418));
          }
          for (; i; ) Kc(r, i), i = fs(i);
        }
      }
      if (ef(r), r.tag === 13) {
        if (!Ge) throw Error(v(316));
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(v(317));
        jn = oa(r);
      } else jn = Br ? fs(r.stateNode) : null;
      return !0;
    }
    function hl() {
      Ge && (jn = Br = null, dl = ln = !1);
    }
    function Su(r) {
      ii === null ? ii = [r] : ii.push(r);
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
            var H = p.refs;
            H === go && (H = p.refs = {}), A === null ? delete H[S] : H[S] = A;
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
    function bo(r) {
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
        return Y = Er(Y, P), Y.index = 0, Y.sibling = null, Y;
      }
      function S(Y, P, X) {
        return Y.index = X, r ? (X = Y.alternate, X !== null ? (X = X.index, X < P ? (Y.flags |= 2, P) : X) : (Y.flags |= 2, P)) : (Y.flags |= 1048576, P);
      }
      function A(Y) {
        return r && Y.alternate === null && (Y.flags |= 2), Y;
      }
      function H(Y, P, X, De) {
        return P === null || P.tag !== 6 ? (P = Jo(X, Y.mode, De), P.return = Y, P) : (P = p(P, X), P.return = Y, P);
      }
      function $(Y, P, X, De) {
        var je = X.type;
        return je === _ ? Re(Y, P, X.props.children, De, X.key) : P !== null && (P.elementType === je || typeof je == "object" && je !== null && je.$$typeof === ee && bo(je) === P.type) ? (De = p(P, X.props), De.ref = _s(Y, P, X), De.return = Y, De) : (De = Hs(X.type, X.key, X.props, null, Y.mode, De), De.ref = _s(Y, P, X), De.return = Y, De);
      }
      function ye(Y, P, X, De) {
        return P === null || P.tag !== 4 || P.stateNode.containerInfo !== X.containerInfo || P.stateNode.implementation !== X.implementation ? (P = ju(X, Y.mode, De), P.return = Y, P) : (P = p(P, X.children || []), P.return = Y, P);
      }
      function Re(Y, P, X, De, je) {
        return P === null || P.tag !== 7 ? (P = Ja(X, Y.mode, De, je), P.return = Y, P) : (P = p(P, X), P.return = Y, P);
      }
      function rt(Y, P, X) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return P = Jo("" + P, Y.mode, X), P.return = Y, P;
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case E:
              return X = Hs(P.type, P.key, P.props, null, Y.mode, X), X.ref = _s(Y, null, P), X.return = Y, X;
            case g:
              return P = ju(P, Y.mode, X), P.return = Y, P;
            case ee:
              var De = P._init;
              return rt(Y, De(P._payload), X);
          }
          if (nt(P) || be(P)) return P = Ja(P, Y.mode, X, null), P.return = Y, P;
          Ei(Y, P);
        }
        return null;
      }
      function Ke(Y, P, X, De) {
        var je = P !== null ? P.key : null;
        if (typeof X == "string" && X !== "" || typeof X == "number") return je !== null ? null : H(Y, P, "" + X, De);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case E:
              return X.key === je ? $(Y, P, X, De) : null;
            case g:
              return X.key === je ? ye(Y, P, X, De) : null;
            case ee:
              return je = X._init, Ke(
                Y,
                P,
                je(X._payload),
                De
              );
          }
          if (nt(X) || be(X)) return je !== null ? null : Re(Y, P, X, De, null);
          Ei(Y, X);
        }
        return null;
      }
      function nn(Y, P, X, De, je) {
        if (typeof De == "string" && De !== "" || typeof De == "number") return Y = Y.get(X) || null, H(P, Y, "" + De, je);
        if (typeof De == "object" && De !== null) {
          switch (De.$$typeof) {
            case E:
              return Y = Y.get(De.key === null ? X : De.key) || null, $(P, Y, De, je);
            case g:
              return Y = Y.get(De.key === null ? X : De.key) || null, ye(P, Y, De, je);
            case ee:
              var ft = De._init;
              return nn(Y, P, X, ft(De._payload), je);
          }
          if (nt(De) || be(De)) return Y = Y.get(X) || null, Re(P, Y, De, je, null);
          Ei(P, De);
        }
        return null;
      }
      function Ye(Y, P, X, De) {
        for (var je = null, ft = null, et = P, mt = P = 0, xn = null; et !== null && mt < X.length; mt++) {
          et.index > mt ? (xn = et, et = null) : xn = et.sibling;
          var Nt = Ke(Y, et, X[mt], De);
          if (Nt === null) {
            et === null && (et = xn);
            break;
          }
          r && et && Nt.alternate === null && i(Y, et), P = S(Nt, P, mt), ft === null ? je = Nt : ft.sibling = Nt, ft = Nt, et = xn;
        }
        if (mt === X.length) return o(Y, et), ln && Ss(Y, mt), je;
        if (et === null) {
          for (; mt < X.length; mt++) et = rt(Y, X[mt], De), et !== null && (P = S(et, P, mt), ft === null ? je = et : ft.sibling = et, ft = et);
          return ln && Ss(Y, mt), je;
        }
        for (et = f(Y, et); mt < X.length; mt++) xn = nn(et, Y, mt, X[mt], De), xn !== null && (r && xn.alternate !== null && et.delete(xn.key === null ? mt : xn.key), P = S(xn, P, mt), ft === null ? je = xn : ft.sibling = xn, ft = xn);
        return r && et.forEach(function(Ka) {
          return i(Y, Ka);
        }), ln && Ss(Y, mt), je;
      }
      function Yn(Y, P, X, De) {
        var je = be(X);
        if (typeof je != "function") throw Error(v(150));
        if (X = je.call(X), X == null) throw Error(v(151));
        for (var ft = je = null, et = P, mt = P = 0, xn = null, Nt = X.next(); et !== null && !Nt.done; mt++, Nt = X.next()) {
          et.index > mt ? (xn = et, et = null) : xn = et.sibling;
          var Ka = Ke(Y, et, Nt.value, De);
          if (Ka === null) {
            et === null && (et = xn);
            break;
          }
          r && et && Ka.alternate === null && i(Y, et), P = S(Ka, P, mt), ft === null ? je = Ka : ft.sibling = Ka, ft = Ka, et = xn;
        }
        if (Nt.done) return o(
          Y,
          et
        ), ln && Ss(Y, mt), je;
        if (et === null) {
          for (; !Nt.done; mt++, Nt = X.next()) Nt = rt(Y, Nt.value, De), Nt !== null && (P = S(Nt, P, mt), ft === null ? je = Nt : ft.sibling = Nt, ft = Nt);
          return ln && Ss(Y, mt), je;
        }
        for (et = f(Y, et); !Nt.done; mt++, Nt = X.next()) Nt = nn(et, Y, mt, Nt.value, De), Nt !== null && (r && Nt.alternate !== null && et.delete(Nt.key === null ? mt : Nt.key), P = S(Nt, P, mt), ft === null ? je = Nt : ft.sibling = Nt, ft = Nt);
        return r && et.forEach(function(Ko) {
          return i(Y, Ko);
        }), ln && Ss(Y, mt), je;
      }
      function ar(Y, P, X, De) {
        if (typeof X == "object" && X !== null && X.type === _ && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case E:
              e: {
                for (var je = X.key, ft = P; ft !== null; ) {
                  if (ft.key === je) {
                    if (je = X.type, je === _) {
                      if (ft.tag === 7) {
                        o(Y, ft.sibling), P = p(ft, X.props.children), P.return = Y, Y = P;
                        break e;
                      }
                    } else if (ft.elementType === je || typeof je == "object" && je !== null && je.$$typeof === ee && bo(je) === ft.type) {
                      o(Y, ft.sibling), P = p(ft, X.props), P.ref = _s(Y, ft, X), P.return = Y, Y = P;
                      break e;
                    }
                    o(Y, ft);
                    break;
                  } else i(Y, ft);
                  ft = ft.sibling;
                }
                X.type === _ ? (P = Ja(X.props.children, Y.mode, De, X.key), P.return = Y, Y = P) : (De = Hs(X.type, X.key, X.props, null, Y.mode, De), De.ref = _s(Y, P, X), De.return = Y, Y = De);
              }
              return A(Y);
            case g:
              e: {
                for (ft = X.key; P !== null; ) {
                  if (P.key === ft) if (P.tag === 4 && P.stateNode.containerInfo === X.containerInfo && P.stateNode.implementation === X.implementation) {
                    o(Y, P.sibling), P = p(P, X.children || []), P.return = Y, Y = P;
                    break e;
                  } else {
                    o(Y, P);
                    break;
                  }
                  else i(Y, P);
                  P = P.sibling;
                }
                P = ju(X, Y.mode, De), P.return = Y, Y = P;
              }
              return A(Y);
            case ee:
              return ft = X._init, ar(Y, P, ft(X._payload), De);
          }
          if (nt(X)) return Ye(Y, P, X, De);
          if (be(X)) return Yn(Y, P, X, De);
          Ei(Y, X);
        }
        return typeof X == "string" && X !== "" || typeof X == "number" ? (X = "" + X, P !== null && P.tag === 6 ? (o(Y, P.sibling), P = p(P, X), P.return = Y, Y = P) : (o(Y, P), P = Jo(X, Y.mode, De), P.return = Y, Y = P), A(Y)) : o(Y, P);
      }
      return ar;
    }
    var pl = _u(!0), To = _u(!1), Eu = {}, gr = Fr(Eu), Ru = Fr(Eu), ja = Fr(Eu);
    function Ri(r) {
      if (r === Eu) throw Error(v(174));
      return r;
    }
    function Co(r, i) {
      Wt(ja, i), Wt(Ru, r), Wt(gr, Eu), r = ve(i), Yt(gr), Wt(gr, r);
    }
    function Es() {
      Yt(gr), Yt(Ru), Yt(ja);
    }
    function Mu(r) {
      var i = Ri(ja.current), o = Ri(gr.current);
      i = k(o, r.type, i), o !== i && (Wt(Ru, r), Wt(gr, i));
    }
    function kr(r) {
      Ru.current === r && (Yt(gr), Yt(Ru));
    }
    var un = Fr(0);
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
    var Mi = [];
    function ji() {
      for (var r = 0; r < Mi.length; r++) {
        var i = Mi[r];
        ot ? i._workInProgressVersionPrimary = null : i._workInProgressVersionSecondary = null;
      }
      Mi.length = 0;
    }
    var Dn = b.ReactCurrentDispatcher, $t = b.ReactCurrentBatchConfig, Ia = 0, Dt = null, fn = null, tn = null, ml = !1, Ii = !1, vl = 0, yl = 0;
    function An() {
      throw Error(v(321));
    }
    function ai(r, i) {
      if (i === null) return !1;
      for (var o = 0; o < i.length && o < r.length; o++) if (!Ur(r[o], i[o])) return !1;
      return !0;
    }
    function gl(r, i, o, f, p, S) {
      if (Ia = S, Dt = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, Dn.current = r === null || r.memoizedState === null ? af : sf, r = o(f, p), Ii) {
        S = 0;
        do {
          if (Ii = !1, vl = 0, 25 <= S) throw Error(v(301));
          S += 1, tn = fn = null, i.updateQueue = null, Dn.current = lf, r = o(f, p);
        } while (Ii);
      }
      if (Dn.current = Rl, i = fn !== null && fn.next !== null, Ia = 0, tn = fn = Dt = null, ml = !1, i) throw Error(v(300));
      return r;
    }
    function bu() {
      var r = vl !== 0;
      return vl = 0, r;
    }
    function qi() {
      var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return tn === null ? Dt.memoizedState = tn = r : tn = tn.next = r, tn;
    }
    function bi() {
      if (fn === null) {
        var r = Dt.alternate;
        r = r !== null ? r.memoizedState : null;
      } else r = fn.next;
      var i = tn === null ? Dt.memoizedState : tn.next;
      if (i !== null) tn = i, fn = r;
      else {
        if (r === null) throw Error(v(310));
        fn = r, r = { memoizedState: fn.memoizedState, baseState: fn.baseState, baseQueue: fn.baseQueue, queue: fn.queue, next: null }, tn === null ? Dt.memoizedState = tn = r : tn = tn.next = r;
      }
      return tn;
    }
    function Yi(r, i) {
      return typeof i == "function" ? i(r) : i;
    }
    function Tu(r) {
      var i = bi(), o = i.queue;
      if (o === null) throw Error(v(311));
      o.lastRenderedReducer = r;
      var f = fn, p = f.baseQueue, S = o.pending;
      if (S !== null) {
        if (p !== null) {
          var A = p.next;
          p.next = S.next, S.next = A;
        }
        f.baseQueue = p = S, o.pending = null;
      }
      if (p !== null) {
        S = p.next, f = f.baseState;
        var H = A = null, $ = null, ye = S;
        do {
          var Re = ye.lane;
          if ((Ia & Re) === Re) $ !== null && ($ = $.next = { lane: 0, action: ye.action, hasEagerState: ye.hasEagerState, eagerState: ye.eagerState, next: null }), f = ye.hasEagerState ? ye.eagerState : r(f, ye.action);
          else {
            var rt = {
              lane: Re,
              action: ye.action,
              hasEagerState: ye.hasEagerState,
              eagerState: ye.eagerState,
              next: null
            };
            $ === null ? (H = $ = rt, A = f) : $ = $.next = rt, Dt.lanes |= Re, Xi |= Re;
          }
          ye = ye.next;
        } while (ye !== null && ye !== S);
        $ === null ? A = f : $.next = H, Ur(f, i.memoizedState) || ($n = !0), i.memoizedState = f, i.baseState = A, i.baseQueue = $, o.lastRenderedState = f;
      }
      if (r = o.interleaved, r !== null) {
        p = r;
        do
          S = p.lane, Dt.lanes |= S, Xi |= S, p = p.next;
        while (p !== r);
      } else p === null && (o.lanes = 0);
      return [i.memoizedState, o.dispatch];
    }
    function wo(r) {
      var i = bi(), o = i.queue;
      if (o === null) throw Error(v(311));
      o.lastRenderedReducer = r;
      var f = o.dispatch, p = o.pending, S = i.memoizedState;
      if (p !== null) {
        o.pending = null;
        var A = p = p.next;
        do
          S = r(S, A.action), A = A.next;
        while (A !== p);
        Ur(S, i.memoizedState) || ($n = !0), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), o.lastRenderedState = S;
      }
      return [S, f];
    }
    function Ms() {
    }
    function tf(r, i) {
      var o = Dt, f = bi(), p = i(), S = !Ur(f.memoizedState, p);
      if (S && (f.memoizedState = p, $n = !0), f = f.queue, fe(Ft.bind(null, o, f, r), [r]), f.getSnapshot !== i || S || tn !== null && tn.memoizedState.tag & 1) {
        if (o.flags |= 2048, xl(9, Gt.bind(null, o, f, p, i), void 0, null), bn === null) throw Error(v(349));
        Ia & 30 || lt(o, i, p);
      }
      return p;
    }
    function lt(r, i, o) {
      r.flags |= 16384, r = { getSnapshot: i, value: o }, i = Dt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Dt.updateQueue = i, i.stores = [r]) : (o = i.stores, o === null ? i.stores = [r] : o.push(r));
    }
    function Gt(r, i, o, f) {
      i.value = o, i.getSnapshot = f, mn(i) && ui(r, 1, -1);
    }
    function Ft(r, i, o) {
      return o(function() {
        mn(i) && ui(r, 1, -1);
      });
    }
    function mn(r) {
      var i = r.getSnapshot;
      r = r.value;
      try {
        var o = i();
        return !Ur(r, o);
      } catch {
        return !0;
      }
    }
    function si(r) {
      var i = qi();
      return typeof r == "function" && (r = r()), i.memoizedState = i.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: r }, i.queue = r, r = r.dispatch = rf.bind(null, Dt, r), [i.memoizedState, r];
    }
    function xl(r, i, o, f) {
      return r = { tag: r, create: i, destroy: o, deps: f, next: null }, i = Dt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Dt.updateQueue = i, i.lastEffect = r.next = r) : (o = i.lastEffect, o === null ? i.lastEffect = r.next = r : (f = o.next, o.next = r, r.next = f, i.lastEffect = r)), r;
    }
    function Rd() {
      return bi().memoizedState;
    }
    function zo(r, i, o, f) {
      var p = qi();
      Dt.flags |= r, p.memoizedState = xl(1 | i, o, void 0, f === void 0 ? null : f);
    }
    function Do(r, i, o, f) {
      var p = bi();
      f = f === void 0 ? null : f;
      var S = void 0;
      if (fn !== null) {
        var A = fn.memoizedState;
        if (S = A.destroy, f !== null && ai(f, A.deps)) {
          p.memoizedState = xl(i, o, S, f);
          return;
        }
      }
      Dt.flags |= r, p.memoizedState = xl(1 | i, o, S, f);
    }
    function Cu(r, i) {
      return zo(8390656, 8, r, i);
    }
    function fe(r, i) {
      return Do(2048, 8, r, i);
    }
    function Nn(r, i) {
      return Do(4, 2, r, i);
    }
    function St(r, i) {
      return Do(4, 4, r, i);
    }
    function bs(r, i) {
      if (typeof i == "function") return r = r(), i(r), function() {
        i(null);
      };
      if (i != null) return r = r(), i.current = r, function() {
        i.current = null;
      };
    }
    function va(r, i, o) {
      return o = o != null ? o.concat([r]) : null, Do(4, 4, bs.bind(null, i, r), o);
    }
    function ya() {
    }
    function Wi(r, i) {
      var o = bi();
      i = i === void 0 ? null : i;
      var f = o.memoizedState;
      return f !== null && i !== null && ai(i, f[1]) ? f[0] : (o.memoizedState = [r, i], r);
    }
    function Sl(r, i) {
      var o = bi();
      i = i === void 0 ? null : i;
      var f = o.memoizedState;
      return f !== null && i !== null && ai(i, f[1]) ? f[0] : (r = r(), o.memoizedState = [r, i], r);
    }
    function _l(r, i) {
      var o = zt;
      zt = o !== 0 && 4 > o ? o : 4, r(!0);
      var f = $t.transition;
      $t.transition = {};
      try {
        r(!1), i();
      } finally {
        zt = o, $t.transition = f;
      }
    }
    function El() {
      return bi().memoizedState;
    }
    function nf(r, i, o) {
      var f = Xa(r);
      o = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null }, Ao(r) ? No(i, o) : (Fo(r, i, o), o = er(), r = ui(r, f, o), r !== null && Oo(r, i, f));
    }
    function rf(r, i, o) {
      var f = Xa(r), p = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null };
      if (Ao(r)) No(i, p);
      else {
        Fo(r, i, p);
        var S = r.alternate;
        if (r.lanes === 0 && (S === null || S.lanes === 0) && (S = i.lastRenderedReducer, S !== null)) try {
          var A = i.lastRenderedState, H = S(A, o);
          if (p.hasEagerState = !0, p.eagerState = H, Ur(H, A)) return;
        } catch {
        } finally {
        }
        o = er(), r = ui(r, f, o), r !== null && Oo(r, i, f);
      }
    }
    function Ao(r) {
      var i = r.alternate;
      return r === Dt || i !== null && i === Dt;
    }
    function No(r, i) {
      Ii = ml = !0;
      var o = r.pending;
      o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
    }
    function Fo(r, i, o) {
      bn !== null && r.mode & 1 && !(pt & 2) ? (r = i.interleaved, r === null ? (o.next = o, Ct === null ? Ct = [i] : Ct.push(i)) : (o.next = r.next, r.next = o), i.interleaved = o) : (r = i.pending, r === null ? o.next = o : (o.next = r.next, r.next = o), i.pending = o);
    }
    function Oo(r, i, o) {
      if (o & 4194240) {
        var f = i.lanes;
        f &= r.pendingLanes, o |= f, i.lanes = o, sl(r, o);
      }
    }
    var Rl = { readContext: xt, useCallback: An, useContext: An, useEffect: An, useImperativeHandle: An, useInsertionEffect: An, useLayoutEffect: An, useMemo: An, useReducer: An, useRef: An, useState: An, useDebugValue: An, useDeferredValue: An, useTransition: An, useMutableSource: An, useSyncExternalStore: An, useId: An, unstable_isNewReconciler: !1 }, af = { readContext: xt, useCallback: function(r, i) {
      return qi().memoizedState = [r, i === void 0 ? null : i], r;
    }, useContext: xt, useEffect: Cu, useImperativeHandle: function(r, i, o) {
      return o = o != null ? o.concat([r]) : null, zo(
        4194308,
        4,
        bs.bind(null, i, r),
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
      return i = o !== void 0 ? o(i) : i, f.memoizedState = f.baseState = i, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: i }, f.queue = r, r = r.dispatch = nf.bind(null, Dt, r), [f.memoizedState, r];
    }, useRef: function(r) {
      var i = qi();
      return r = { current: r }, i.memoizedState = r;
    }, useState: si, useDebugValue: ya, useDeferredValue: function(r) {
      var i = si(r), o = i[0], f = i[1];
      return Cu(function() {
        var p = $t.transition;
        $t.transition = {};
        try {
          f(r);
        } finally {
          $t.transition = p;
        }
      }, [r]), o;
    }, useTransition: function() {
      var r = si(!1), i = r[0];
      return r = _l.bind(null, r[1]), qi().memoizedState = r, [i, r];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(r, i, o) {
      var f = Dt, p = qi();
      if (ln) {
        if (o === void 0) throw Error(v(407));
        o = o();
      } else {
        if (o = i(), bn === null) throw Error(v(349));
        Ia & 30 || lt(f, i, o);
      }
      p.memoizedState = o;
      var S = { value: o, getSnapshot: i };
      return p.queue = S, Cu(Ft.bind(null, f, S, r), [r]), f.flags |= 2048, xl(9, Gt.bind(null, f, S, o, i), void 0, null), o;
    }, useId: function() {
      var r = qi(), i = bn.identifierPrefix;
      if (ln) {
        var o = ma, f = pa;
        o = (f & ~(1 << 32 - vr(f) - 1)).toString(32) + o, i = ":" + i + "R" + o, o = vl++, 0 < o && (i += "H" + o.toString(32)), i += ":";
      } else o = yl++, i = ":" + i + "r" + o.toString(32) + ":";
      return r.memoizedState = i;
    }, unstable_isNewReconciler: !1 }, sf = {
      readContext: xt,
      useCallback: Wi,
      useContext: xt,
      useEffect: fe,
      useImperativeHandle: va,
      useInsertionEffect: Nn,
      useLayoutEffect: St,
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
          var p = $t.transition;
          $t.transition = {};
          try {
            f(r);
          } finally {
            $t.transition = p;
          }
        }, [r]), o;
      },
      useTransition: function() {
        var r = Tu(Yi)[0], i = bi().memoizedState;
        return [r, i];
      },
      useMutableSource: Ms,
      useSyncExternalStore: tf,
      useId: El,
      unstable_isNewReconciler: !1
    }, lf = {
      readContext: xt,
      useCallback: Wi,
      useContext: xt,
      useEffect: fe,
      useImperativeHandle: va,
      useInsertionEffect: Nn,
      useLayoutEffect: St,
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
          var p = $t.transition;
          $t.transition = {};
          try {
            f(r);
          } finally {
            $t.transition = p;
          }
        }, [r]), o;
      },
      useTransition: function() {
        var r = wo(Yi)[0], i = bi().memoizedState;
        return [r, i];
      },
      useMutableSource: Ms,
      useSyncExternalStore: tf,
      useId: El,
      unstable_isNewReconciler: !1
    };
    function wu(r, i) {
      try {
        var o = "", f = i;
        do
          o += M(f), f = f.return;
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
    var uf = typeof WeakMap == "function" ? WeakMap : Map;
    function Uo(r, i, o) {
      o = Lr(-1, o), o.tag = 3, o.payload = { element: null };
      var f = i.value;
      return o.callback = function() {
        Uu || (Uu = !0, Qo = f), zu(r, i);
      }, o;
    }
    function Lo(r, i, o) {
      o = Lr(-1, o), o.tag = 3;
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
        f = r.pingCache = new uf();
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
      return r.mode & 1 ? (r.flags |= 65536, r.lanes = p, r) : (r === i ? r.flags |= 65536 : (r.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (i = Lr(-1, 1), i.tag = 2, _i(o, i))), o.lanes |= 1), r);
    }
    function li(r) {
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
    var Cs, Ml, qa, Au;
    if (Et) Cs = function(r, i) {
      for (var o = i.child; o !== null; ) {
        if (o.tag === 5 || o.tag === 6) V(r, o.stateNode);
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
    }, Ml = function() {
    }, qa = function(r, i, o, f, p) {
      if (r = r.memoizedProps, r !== f) {
        var S = i.stateNode, A = Ri(gr.current);
        o = Ce(S, o, r, f, p, A), (i.updateQueue = o) && li(i);
      }
    }, Au = function(r, i, o, f) {
      o !== f && li(i);
    };
    else if (Ot) {
      Cs = function(r, i, o, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var S = p.stateNode;
            o && f && (S = Zr(S, p.type, p.memoizedProps, p)), V(r, S);
          } else if (p.tag === 6) S = p.stateNode, o && f && (S = Li(S, p.memoizedProps, p)), V(r, S);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null) S = p.child, S !== null && (S.return = p), Cs(r, p, !0, !0);
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
      var bl = function(r, i, o, f) {
        for (var p = i.child; p !== null; ) {
          if (p.tag === 5) {
            var S = p.stateNode;
            o && f && (S = Zr(S, p.type, p.memoizedProps, p)), Fa(r, S);
          } else if (p.tag === 6) S = p.stateNode, o && f && (S = Li(S, p.memoizedProps, p)), Fa(r, S);
          else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null) S = p.child, S !== null && (S.return = p), bl(r, p, !0, !0);
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
      Ml = function(r, i) {
        var o = i.stateNode;
        if (!ko(r, i)) {
          r = o.containerInfo;
          var f = mr(r);
          bl(f, i, !1, !1), o.pendingChildren = f, li(i), ou(r, f);
        }
      }, qa = function(r, i, o, f, p) {
        var S = r.stateNode, A = r.memoizedProps;
        if ((r = ko(r, i)) && A === f) i.stateNode = S;
        else {
          var H = i.stateNode, $ = Ri(gr.current), ye = null;
          A !== f && (ye = Ce(H, o, A, f, p, $)), r && ye === null ? i.stateNode = S : (S = $s(S, ye, o, A, f, i, r, H), Pe(S, o, f, p, $) && li(i), i.stateNode = S, r ? li(i) : Cs(S, i, !1, !1));
        }
      }, Au = function(r, i, o, f) {
        o !== f ? (r = Ri(ja.current), o = Ri(gr.current), i.stateNode = ke(f, r, o, i), li(i)) : i.stateNode = r.stateNode;
      };
    } else Ml = function() {
    }, qa = function() {
    }, Au = function() {
    };
    function Ti(r, i) {
      if (!ln) switch (r.tailMode) {
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
    function en(r) {
      var i = r.alternate !== null && r.alternate.child === r.child, o = 0, f = 0;
      if (i) for (var p = r.child; p !== null; ) o |= p.lanes | p.childLanes, f |= p.subtreeFlags & 14680064, f |= p.flags & 14680064, p.return = r, p = p.sibling;
      else for (p = r.child; p !== null; ) o |= p.lanes | p.childLanes, f |= p.subtreeFlags, f |= p.flags, p.return = r, p = p.sibling;
      return r.subtreeFlags |= f, r.childLanes = o, i;
    }
    function bp(r, i, o) {
      var f = i.pendingProps;
      switch (Jc(i), i.tag) {
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
          return en(i), null;
        case 1:
          return Kn(i.type) && ka(), en(i), null;
        case 3:
          return f = i.stateNode, Es(), Yt(Qt), Yt(wn), ji(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (r === null || r.child === null) && (xu(i) ? li(i) : r === null || r.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, ii !== null && (ku(ii), ii = null))), Ml(r, i), en(i), null;
        case 5:
          kr(i), o = Ri(ja.current);
          var p = i.type;
          if (r !== null && i.stateNode != null) qa(r, i, p, f, o), r.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
          else {
            if (!f) {
              if (i.stateNode === null) throw Error(v(166));
              return en(i), null;
            }
            if (r = Ri(gr.current), xu(i)) {
              if (!Ge) throw Error(v(175));
              r = Cn(i.stateNode, i.type, i.memoizedProps, o, r, i, !dl), i.updateQueue = r, r !== null && li(i);
            } else {
              var S = O(p, f, o, r, i);
              Cs(S, i, !1, !1), i.stateNode = S, Pe(S, p, f, o, r) && li(i);
            }
            i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
          }
          return en(i), null;
        case 6:
          if (r && i.stateNode != null) Au(r, i, r.memoizedProps, f);
          else {
            if (typeof f != "string" && i.stateNode === null) throw Error(v(166));
            if (r = Ri(ja.current), o = Ri(gr.current), xu(i)) {
              if (!Ge) throw Error(v(176));
              if (r = i.stateNode, f = i.memoizedProps, (o = fo(r, f, i, !dl)) && (p = Br, p !== null)) switch (S = (p.mode & 1) !== 0, p.tag) {
                case 3:
                  hs(p.stateNode.containerInfo, r, f, S);
                  break;
                case 5:
                  Ua(p.type, p.memoizedProps, p.stateNode, r, f, S);
              }
              o && li(i);
            } else i.stateNode = ke(f, r, o, i);
          }
          return en(i), null;
        case 13:
          if (Yt(un), f = i.memoizedState, ln && jn !== null && i.mode & 1 && !(i.flags & 128)) {
            for (r = jn; r; ) r = fs(r);
            return hl(), i.flags |= 98560, i;
          }
          if (f !== null && f.dehydrated !== null) {
            if (f = xu(i), r === null) {
              if (!f) throw Error(v(318));
              if (!Ge) throw Error(v(344));
              if (r = i.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(v(317));
              cu(r, i);
            } else hl(), !(i.flags & 128) && (i.memoizedState = null), i.flags |= 4;
            return en(i), null;
          }
          return ii !== null && (ku(ii), ii = null), i.flags & 128 ? (i.lanes = o, i) : (f = f !== null, o = !1, r === null ? xu(i) : o = r.memoizedState !== null, f && !o && (i.child.flags |= 8192, i.mode & 1 && (r === null || un.current & 1 ? On === 0 && (On = 3) : Cf())), i.updateQueue !== null && (i.flags |= 4), en(i), null);
        case 4:
          return Es(), Ml(r, i), r === null && Rt(i.stateNode.containerInfo), en(i), null;
        case 10:
          return ht(i.type._context), en(i), null;
        case 17:
          return Kn(i.type) && ka(), en(i), null;
        case 19:
          if (Yt(un), p = i.memoizedState, p === null) return en(i), null;
          if (f = (i.flags & 128) !== 0, S = p.rendering, S === null) if (f) Ti(p, !1);
          else {
            if (On !== 0 || r !== null && r.flags & 128) for (r = i.child; r !== null; ) {
              if (S = Rs(r), S !== null) {
                for (i.flags |= 128, Ti(p, !1), r = S.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), i.subtreeFlags = 0, r = o, f = i.child; f !== null; ) o = f, p = r, o.flags &= 14680066, S = o.alternate, S === null ? (o.childLanes = 0, o.lanes = p, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = S.childLanes, o.lanes = S.lanes, o.child = S.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = S.memoizedProps, o.memoizedState = S.memoizedState, o.updateQueue = S.updateQueue, o.type = S.type, p = S.dependencies, o.dependencies = p === null ? null : { lanes: p.lanes, firstContext: p.firstContext }), f = f.sibling;
                return Wt(un, un.current & 1 | 2), i.child;
              }
              r = r.sibling;
            }
            p.tail !== null && sn() > Rf && (i.flags |= 128, f = !0, Ti(p, !1), i.lanes = 4194304);
          }
          else {
            if (!f) if (r = Rs(S), r !== null) {
              if (i.flags |= 128, f = !0, r = r.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), Ti(p, !0), p.tail === null && p.tailMode === "hidden" && !S.alternate && !ln) return en(i), null;
            } else 2 * sn() - p.renderingStartTime > Rf && o !== 1073741824 && (i.flags |= 128, f = !0, Ti(p, !1), i.lanes = 4194304);
            p.isBackwards ? (S.sibling = i.child, i.child = S) : (r = p.last, r !== null ? r.sibling = S : i.child = S, p.last = S);
          }
          return p.tail !== null ? (i = p.tail, p.rendering = i, p.tail = i.sibling, p.renderingStartTime = sn(), i.sibling = null, r = un.current, Wt(un, f ? r & 1 | 2 : r & 1), i) : (en(i), null);
        case 22:
        case 23:
          return oi(), f = i.memoizedState !== null, r !== null && r.memoizedState !== null !== f && (i.flags |= 8192), f && i.mode & 1 ? Pr & 1073741824 && (en(i), Et && i.subtreeFlags & 6 && (i.flags |= 8192)) : en(i), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(v(156, i.tag));
    }
    var rn = b.ReactCurrentOwner, $n = !1;
    function Hn(r, i, o, f) {
      i.child = r === null ? To(i, null, o, f) : pl(i, r.child, o, f);
    }
    function Tl(r, i, o, f, p) {
      o = o.render;
      var S = i.ref;
      return Lt(i, p), f = gl(r, i, o, f, S, p), o = bu(), r !== null && !$n ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, vn(r, i, p)) : (ln && o && Zc(i), i.flags |= 1, Hn(r, i, f, p), i.child);
    }
    function Nu(r, i, o, f, p) {
      if (r === null) {
        var S = o.type;
        return typeof S == "function" && !ks(S) && S.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (i.tag = 15, i.type = S, Md(r, i, S, f, p)) : (r = Hs(o.type, null, f, i, i.mode, p), r.ref = i.ref, r.return = i, i.child = r);
      }
      if (S = r.child, !(r.lanes & p)) {
        var A = S.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ll, o(A, f) && r.ref === i.ref) return vn(r, i, p);
      }
      return i.flags |= 1, r = Er(S, f), r.ref = i.ref, r.return = i, i.child = r;
    }
    function Md(r, i, o, f, p) {
      if (r !== null && ll(r.memoizedProps, f) && r.ref === i.ref) if ($n = !1, (r.lanes & p) !== 0) r.flags & 131072 && ($n = !0);
      else return i.lanes = r.lanes, vn(r, i, p);
      return of(r, i, o, f, p);
    }
    function bd(r, i, o) {
      var f = i.pendingProps, p = f.children, S = r !== null ? r.memoizedState : null;
      if (f.mode === "hidden") if (!(i.mode & 1)) i.memoizedState = { baseLanes: 0, cachePool: null }, Wt(Fl, Pr), Pr |= o;
      else if (o & 1073741824) i.memoizedState = { baseLanes: 0, cachePool: null }, f = S !== null ? S.baseLanes : o, Wt(Fl, Pr), Pr |= f;
      else return r = S !== null ? S.baseLanes | o : o, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: r, cachePool: null }, i.updateQueue = null, Wt(Fl, Pr), Pr |= r, null;
      else S !== null ? (f = S.baseLanes | o, i.memoizedState = null) : f = o, Wt(Fl, Pr), Pr |= f;
      return Hn(r, i, p, o), i.child;
    }
    function Td(r, i) {
      var o = i.ref;
      (r === null && o !== null || r !== null && r.ref !== o) && (i.flags |= 512, i.flags |= 2097152);
    }
    function of(r, i, o, f, p) {
      var S = Kn(o) ? Kr : wn.current;
      return S = Ba(i, S), Lt(i, p), o = gl(r, i, o, f, S, p), f = bu(), r !== null && !$n ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~p, vn(r, i, p)) : (ln && f && Zc(i), i.flags |= 1, Hn(r, i, o, p), i.child);
    }
    function Ho(r, i, o, f, p) {
      if (Kn(o)) {
        var S = !0;
        Pi(i);
      } else S = !1;
      if (Lt(i, p), i.stateNode === null) r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), Sd(i, o, f), Xc(i, o, f, p), f = !0;
      else if (r === null) {
        var A = i.stateNode, H = i.memoizedProps;
        A.props = H;
        var $ = A.context, ye = o.contextType;
        typeof ye == "object" && ye !== null ? ye = xt(ye) : (ye = Kn(o) ? Kr : wn.current, ye = Ba(i, ye));
        var Re = o.getDerivedStateFromProps, rt = typeof Re == "function" || typeof A.getSnapshotBeforeUpdate == "function";
        rt || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (H !== f || $ !== ye) && _d(i, A, f, ye), Bt = !1;
        var Ke = i.memoizedState;
        A.state = Ke, ol(i, f, A, p), $ = i.memoizedState, H !== f || Ke !== $ || Qt.current || Bt ? (typeof Re == "function" && (xo(i, o, Re, f), $ = i.memoizedState), (H = Bt || xd(i, o, H, f, Ke, $, ye)) ? (rt || typeof A.UNSAFE_componentWillMount != "function" && typeof A.componentWillMount != "function" || (typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount()), typeof A.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof A.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = f, i.memoizedState = $), A.props = f, A.state = $, A.context = ye, f = H) : (typeof A.componentDidMount == "function" && (i.flags |= 4194308), f = !1);
      } else {
        A = i.stateNode, Vi(r, i), H = i.memoizedProps, ye = i.type === i.elementType ? H : F(i.type, H), A.props = ye, rt = i.pendingProps, Ke = A.context, $ = o.contextType, typeof $ == "object" && $ !== null ? $ = xt($) : ($ = Kn(o) ? Kr : wn.current, $ = Ba(i, $));
        var nn = o.getDerivedStateFromProps;
        (Re = typeof nn == "function" || typeof A.getSnapshotBeforeUpdate == "function") || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (H !== rt || Ke !== $) && _d(i, A, f, $), Bt = !1, Ke = i.memoizedState, A.state = Ke, ol(i, f, A, p);
        var Ye = i.memoizedState;
        H !== rt || Ke !== Ye || Qt.current || Bt ? (typeof nn == "function" && (xo(i, o, nn, f), Ye = i.memoizedState), (ye = Bt || xd(i, o, ye, f, Ke, Ye, $) || !1) ? (Re || typeof A.UNSAFE_componentWillUpdate != "function" && typeof A.componentWillUpdate != "function" || (typeof A.componentWillUpdate == "function" && A.componentWillUpdate(
          f,
          Ye,
          $
        ), typeof A.UNSAFE_componentWillUpdate == "function" && A.UNSAFE_componentWillUpdate(f, Ye, $)), typeof A.componentDidUpdate == "function" && (i.flags |= 4), typeof A.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof A.componentDidUpdate != "function" || H === r.memoizedProps && Ke === r.memoizedState || (i.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || H === r.memoizedProps && Ke === r.memoizedState || (i.flags |= 1024), i.memoizedProps = f, i.memoizedState = Ye), A.props = f, A.state = Ye, A.context = $, f = ye) : (typeof A.componentDidUpdate != "function" || H === r.memoizedProps && Ke === r.memoizedState || (i.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || H === r.memoizedProps && Ke === r.memoizedState || (i.flags |= 1024), f = !1);
      }
      return cf(r, i, o, f, S, p);
    }
    function cf(r, i, o, f, p, S) {
      Td(r, i);
      var A = (i.flags & 128) !== 0;
      if (!f && !A) return p && Ha(i, o, !1), vn(r, i, S);
      f = i.stateNode, rn.current = i;
      var H = A && typeof o.getDerivedStateFromError != "function" ? null : f.render();
      return i.flags |= 1, r !== null && A ? (i.child = pl(i, r.child, null, S), i.child = pl(i, null, H, S)) : Hn(r, i, H, S), i.memoizedState = f.state, p && Ha(i, o, !0), i.child;
    }
    function Po(r) {
      var i = r.stateNode;
      i.pendingContext ? rl(r, i.pendingContext, i.pendingContext !== i.context) : i.context && rl(r, i.context, !1), Co(r, i.containerInfo);
    }
    function ff(r, i, o, f, p) {
      return hl(), Su(p), i.flags |= 256, Hn(r, i, o, f), i.child;
    }
    var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ws(r) {
      return { baseLanes: r, cachePool: null };
    }
    function Cd(r, i, o) {
      var f = i.pendingProps, p = un.current, S = !1, A = (i.flags & 128) !== 0, H;
      if ((H = A) || (H = r !== null && r.memoizedState === null ? !1 : (p & 2) !== 0), H ? (S = !0, i.flags &= -129) : (r === null || r.memoizedState !== null) && (p |= 1), Wt(un, p & 1), r === null)
        return Mo(i), r = i.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (i.mode & 1 ? Bi(r) ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (p = f.children, r = f.fallback, S ? (f = i.mode, S = i.child, p = { mode: "hidden", children: p }, !(f & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = p) : S = Vu(p, f, 0, null), r = Ja(r, f, o, null), S.return = i, r.return = i, S.sibling = r, i.child = S, i.child.memoizedState = ws(o), i.memoizedState = Vo, r) : jo(i, p));
      if (p = r.memoizedState, p !== null) {
        if (H = p.dehydrated, H !== null) {
          if (A)
            return i.flags & 256 ? (i.flags &= -257, Qi(r, i, o, Error(v(422)))) : i.memoizedState !== null ? (i.child = r.child, i.flags |= 128, null) : (S = f.fallback, p = i.mode, f = Vu({ mode: "visible", children: f.children }, p, 0, null), S = Ja(S, p, o, null), S.flags |= 2, f.return = i, S.return = i, f.sibling = S, i.child = f, i.mode & 1 && pl(
              i,
              r.child,
              null,
              o
            ), i.child.memoizedState = ws(o), i.memoizedState = Vo, S);
          if (!(i.mode & 1)) i = Qi(r, i, o, null);
          else if (Bi(H)) i = Qi(r, i, o, Error(v(419)));
          else if (f = (o & r.childLanes) !== 0, $n || f) {
            if (f = bn, f !== null) {
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
              f = S & (f.suspendedLanes | o) ? 0 : S, f !== 0 && f !== p.retryLane && (p.retryLane = f, ui(r, f, -1));
            }
            Cf(), i = Qi(r, i, o, Error(v(421)));
          } else oo(H) ? (i.flags |= 128, i.child = r.child, i = zp.bind(null, r), el(H, i), i = null) : (o = p.treeContext, Ge && (jn = Jn(H), Br = i, ln = !0, ii = null, dl = !1, o !== null && (ni[ri++] = pa, ni[ri++] = ma, ni[ri++] = xs, pa = o.id, ma = o.overflow, xs = i)), i = jo(i, i.pendingProps.children), i.flags |= 4096);
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
      return r = p.sibling, o = Er(p, { mode: "visible", children: o }), !(i.mode & 1) && (o.lanes = f), o.return = i, o.sibling = null, r !== null && (f = i.deletions, f === null ? (i.deletions = [r], i.flags |= 16) : f.push(r)), i.child = o;
    }
    function zd(r, i, o, f, p) {
      var S = i.mode;
      r = r.child;
      var A = r.sibling, H = { mode: "hidden", children: o };
      return !(S & 1) && i.child !== r ? (o = i.child, o.childLanes = 0, o.pendingProps = H, i.deletions = null) : (o = Er(r, H), o.subtreeFlags = r.subtreeFlags & 14680064), A !== null ? f = Er(A, f) : (f = Ja(f, S, p, null), f.flags |= 2), f.return = i, o.return = i, o.sibling = f, i.child = o, f;
    }
    function Qi(r, i, o, f) {
      return f !== null && Su(f), pl(i, r.child, null, o), r = jo(i, i.pendingProps.children), r.flags |= 2, i.memoizedState = null, r;
    }
    function Cl(r, i, o) {
      r.lanes |= i;
      var f = r.alternate;
      f !== null && (f.lanes |= i), Ut(r.return, i, o);
    }
    function ga(r, i, o, f, p) {
      var S = r.memoizedState;
      S === null ? r.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: f, tail: o, tailMode: p } : (S.isBackwards = i, S.rendering = null, S.renderingStartTime = 0, S.last = f, S.tail = o, S.tailMode = p);
    }
    function Io(r, i, o) {
      var f = i.pendingProps, p = f.revealOrder, S = f.tail;
      if (Hn(r, i, f.children, o), f = un.current, f & 2) f = f & 1 | 2, i.flags |= 128;
      else {
        if (r !== null && r.flags & 128) e: for (r = i.child; r !== null; ) {
          if (r.tag === 13) r.memoizedState !== null && Cl(r, o, i);
          else if (r.tag === 19) Cl(r, o, i);
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
      if (Wt(un, f), !(i.mode & 1)) i.memoizedState = null;
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
    function vn(r, i, o) {
      if (r !== null && (i.dependencies = r.dependencies), Xi |= i.lanes, !(o & i.childLanes)) return null;
      if (r !== null && i.child !== r.child) throw Error(v(153));
      if (i.child !== null) {
        for (r = i.child, o = Er(r, r.pendingProps), i.child = o, o.return = i; r.sibling !== null; ) r = r.sibling, o = o.sibling = Er(r, r.pendingProps), o.return = i;
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
          Mu(i);
          break;
        case 1:
          Kn(i.type) && Pi(i);
          break;
        case 4:
          Co(i, i.stateNode.containerInfo);
          break;
        case 10:
          st(i, i.type._context, i.memoizedProps.value);
          break;
        case 13:
          var f = i.memoizedState;
          if (f !== null)
            return f.dehydrated !== null ? (Wt(un, un.current & 1), i.flags |= 128, null) : o & i.child.childLanes ? Cd(r, i, o) : (Wt(un, un.current & 1), r = vn(r, i, o), r !== null ? r.sibling : null);
          Wt(un, un.current & 1);
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
          if (p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Wt(un, un.current), f) break;
          return null;
        case 22:
        case 23:
          return i.lanes = 0, bd(r, i, o);
      }
      return vn(r, i, o);
    }
    function ct(r, i) {
      switch (Jc(i), i.tag) {
        case 1:
          return Kn(i.type) && ka(), r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 3:
          return Es(), Yt(Qt), Yt(wn), ji(), r = i.flags, r & 65536 && !(r & 128) ? (i.flags = r & -65537 | 128, i) : null;
        case 5:
          return kr(i), null;
        case 13:
          if (Yt(un), r = i.memoizedState, r !== null && r.dehydrated !== null) {
            if (i.alternate === null) throw Error(v(340));
            hl();
          }
          return r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 19:
          return Yt(un), null;
        case 4:
          return Es(), null;
        case 10:
          return ht(i.type._context), null;
        case 22:
        case 23:
          return oi(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var zs = !1, Ya = !1, xy = typeof WeakSet == "function" ? WeakSet : Set, Ae = null;
    function zl(r, i) {
      var o = r.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (f) {
        kt(r, i, f);
      }
      else o.current = null;
    }
    function Ds(r, i, o) {
      try {
        o();
      } catch (f) {
        kt(r, i, f);
      }
    }
    var Dd = !1;
    function Ad(r, i) {
      for (ne(r.containerInfo), Ae = i; Ae !== null; ) if (r = Ae, i = r.child, (r.subtreeFlags & 1028) !== 0 && i !== null) i.return = r, Ae = i;
      else for (; Ae !== null; ) {
        r = Ae;
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
              Et && gt(r.stateNode.containerInfo);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(v(163));
          }
        } catch (H) {
          kt(r, r.return, H);
        }
        if (i = r.sibling, i !== null) {
          i.return = r.return, Ae = i;
          break;
        }
        Ae = r.return;
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
    function df(r) {
      var i = r.ref;
      if (i !== null) {
        var o = r.stateNode;
        switch (r.tag) {
          case 5:
            r = Oe(o);
            break;
          default:
            r = o;
        }
        typeof i == "function" ? i(r) : i.current = r;
      }
    }
    function hf(r, i, o) {
      if (ei && typeof ei.onCommitFiberUnmount == "function") try {
        ei.onCommitFiberUnmount(ha, i);
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
            kt(
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
          Et ? Fn(r, i, o) : Ot && Ot && (i = i.stateNode.containerInfo, o = mr(i), Mt(i, o));
      }
    }
    function pf(r, i, o) {
      for (var f = i; ; ) if (hf(r, f, o), f.child === null || Et && f.tag === 4) {
        if (f === i) break;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === i) return;
          f = f.return;
        }
        f.sibling.return = f.return, f = f.sibling;
      } else f.child.return = f, f = f.child;
    }
    function Ci(r) {
      var i = r.alternate;
      i !== null && (r.alternate = null, Ci(i)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (i = r.stateNode, i !== null && Jt(i)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
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
      if (Et) {
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
            i = o.stateNode, o.flags & 32 && (Tt(i), o.flags &= -33), o = Al(r), Hr(r, o, i);
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
      if (f === 5 || f === 6) r = r.stateNode, i ? $e(o, r, i) : cs(o, r);
      else if (f !== 4 && (r = r.child, r !== null)) for (Fs(r, i, o), r = r.sibling; r !== null; ) Fs(r, i, o), r = r.sibling;
    }
    function Hr(r, i, o) {
      var f = r.tag;
      if (f === 5 || f === 6) r = r.stateNode, i ? Ne(o, r, i) : ua(o, r);
      else if (f !== 4 && (r = r.child, r !== null)) for (Hr(r, i, o), r = r.sibling; r !== null; ) Hr(r, i, o), r = r.sibling;
    }
    function Fn(r, i, o) {
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
        if (f.tag === 5 || f.tag === 6) pf(r, f, o), A ? Kt(S, f.stateNode) : Ue(S, f.stateNode);
        else if (f.tag === 18) A ? fu(S, f.stateNode) : nl(S, f.stateNode);
        else if (f.tag === 4) {
          if (f.child !== null) {
            S = f.stateNode.containerInfo, A = !0, f.child.return = f, f = f.child;
            continue;
          }
        } else if (hf(r, f, o), f.child !== null) {
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
    function mf(r, i) {
      if (Et) {
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
              i.updateQueue = null, S !== null && oe(o, S, p, r, f, i);
            }
            return;
          case 6:
            if (i.stateNode === null) throw Error(v(162));
            o = i.memoizedProps, Na(i.stateNode, r !== null ? r.memoizedProps : o, o);
            return;
          case 3:
            Ge && r !== null && r.memoizedState.isDehydrated && tl(i.stateNode.containerInfo);
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
          Ge && r !== null && r.memoizedState.isDehydrated && tl(i.stateNode.containerInfo);
          break;
        case 22:
        case 23:
          return;
      }
      e: if (Ot) {
        switch (i.tag) {
          case 1:
          case 5:
          case 6:
            break e;
          case 3:
          case 4:
            i = i.stateNode, Mt(i.containerInfo, i.pendingChildren);
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
      for (Ae = i; Ae !== null; ) {
        i = Ae;
        var o = i.deletions;
        if (o !== null) for (var f = 0; f < o.length; f++) {
          var p = o[f];
          try {
            var S = r;
            Et ? Fn(S, p, i) : pf(S, p, i);
            var A = p.alternate;
            A !== null && (A.return = null), p.return = null;
          } catch (je) {
            kt(p, i, je);
          }
        }
        if (o = i.child, i.subtreeFlags & 12854 && o !== null) o.return = i, Ae = o;
        else for (; Ae !== null; ) {
          i = Ae;
          try {
            var H = i.flags;
            if (H & 32 && Et && Tt(i.stateNode), H & 512) {
              var $ = i.alternate;
              if ($ !== null) {
                var ye = $.ref;
                ye !== null && (typeof ye == "function" ? ye(null) : ye.current = null);
              }
            }
            if (H & 8192) switch (i.tag) {
              case 13:
                if (i.memoizedState !== null) {
                  var Re = i.alternate;
                  (Re === null || Re.memoizedState === null) && (Ef = sn());
                }
                break;
              case 22:
                var rt = i.memoizedState !== null, Ke = i.alternate, nn = Ke !== null && Ke.memoizedState !== null;
                if (o = i, Et) {
                  e: if (f = o, p = rt, S = null, Et) for (var Ye = f; ; ) {
                    if (Ye.tag === 5) {
                      if (S === null) {
                        S = Ye;
                        var Yn = Ye.stateNode;
                        p ? qe(Yn) : kn(Ye.stateNode, Ye.memoizedProps);
                      }
                    } else if (Ye.tag === 6) {
                      if (S === null) {
                        var ar = Ye.stateNode;
                        p ? Se(ar) : qt(ar, Ye.memoizedProps);
                      }
                    } else if ((Ye.tag !== 22 && Ye.tag !== 23 || Ye.memoizedState === null || Ye === f) && Ye.child !== null) {
                      Ye.child.return = Ye, Ye = Ye.child;
                      continue;
                    }
                    if (Ye === f) break;
                    for (; Ye.sibling === null; ) {
                      if (Ye.return === null || Ye.return === f) break e;
                      S === Ye && (S = null), Ye = Ye.return;
                    }
                    S === Ye && (S = null), Ye.sibling.return = Ye.return, Ye = Ye.sibling;
                  }
                }
                if (rt && !nn && o.mode & 1) {
                  Ae = o;
                  for (var Y = o.child; Y !== null; ) {
                    for (o = Ae = Y; Ae !== null; ) {
                      f = Ae;
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
                            var De = f.return;
                            try {
                              X.props = f.memoizedProps, X.state = f.memoizedState, X.componentWillUnmount();
                            } catch (je) {
                              kt(
                                f,
                                De,
                                je
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
                      P !== null ? (P.return = f, Ae = P) : Fd(o);
                    }
                    Y = Y.sibling;
                  }
                }
            }
            switch (H & 4102) {
              case 2:
                qo(i), i.flags &= -3;
                break;
              case 6:
                qo(i), i.flags &= -3, mf(i.alternate, i);
                break;
              case 4096:
                i.flags &= -4097;
                break;
              case 4100:
                i.flags &= -4097, mf(i.alternate, i);
                break;
              case 4:
                mf(i.alternate, i);
            }
          } catch (je) {
            kt(i, i.return, je);
          }
          if (o = i.sibling, o !== null) {
            o.return = i.return, Ae = o;
            break;
          }
          Ae = i.return;
        }
      }
    }
    function Nd(r, i, o) {
      Ae = r, vf(r);
    }
    function vf(r, i, o) {
      for (var f = (r.mode & 1) !== 0; Ae !== null; ) {
        var p = Ae, S = p.child;
        if (p.tag === 22 && f) {
          var A = p.memoizedState !== null || zs;
          if (!A) {
            var H = p.alternate, $ = H !== null && H.memoizedState !== null || Ya;
            H = zs;
            var ye = Ya;
            if (zs = A, (Ya = $) && !ye) for (Ae = p; Ae !== null; ) A = Ae, $ = A.child, A.tag === 22 && A.memoizedState !== null ? Od(p) : $ !== null ? ($.return = A, Ae = $) : Od(p);
            for (; S !== null; ) Ae = S, vf(S), S = S.sibling;
            Ae = p, zs = H, Ya = ye;
          }
          yf(r);
        } else p.subtreeFlags & 8772 && S !== null ? (S.return = p, Ae = S) : yf(r);
      }
    }
    function yf(r) {
      for (; Ae !== null; ) {
        var i = Ae;
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
                      o = Oe(i.child.stateNode);
                      break;
                    case 1:
                      o = i.child.stateNode;
                  }
                  gu(i, A, o);
                }
                break;
              case 5:
                var H = i.stateNode;
                o === null && i.flags & 4 && G(H, i.type, i.memoizedProps, i);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (Ge && i.memoizedState === null) {
                  var $ = i.alternate;
                  if ($ !== null) {
                    var ye = $.memoizedState;
                    if (ye !== null) {
                      var Re = ye.dehydrated;
                      Re !== null && gi(Re);
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
            Ya || i.flags & 512 && df(i);
          } catch (rt) {
            kt(i, i.return, rt);
          }
        }
        if (i === r) {
          Ae = null;
          break;
        }
        if (o = i.sibling, o !== null) {
          o.return = i.return, Ae = o;
          break;
        }
        Ae = i.return;
      }
    }
    function Fd(r) {
      for (; Ae !== null; ) {
        var i = Ae;
        if (i === r) {
          Ae = null;
          break;
        }
        var o = i.sibling;
        if (o !== null) {
          o.return = i.return, Ae = o;
          break;
        }
        Ae = i.return;
      }
    }
    function Od(r) {
      for (; Ae !== null; ) {
        var i = Ae;
        try {
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              var o = i.return;
              try {
                Ns(4, i);
              } catch ($) {
                kt(i, o, $);
              }
              break;
            case 1:
              var f = i.stateNode;
              if (typeof f.componentDidMount == "function") {
                var p = i.return;
                try {
                  f.componentDidMount();
                } catch ($) {
                  kt(i, p, $);
                }
              }
              var S = i.return;
              try {
                df(i);
              } catch ($) {
                kt(i, S, $);
              }
              break;
            case 5:
              var A = i.return;
              try {
                df(i);
              } catch ($) {
                kt(i, A, $);
              }
          }
        } catch ($) {
          kt(i, i.return, $);
        }
        if (i === r) {
          Ae = null;
          break;
        }
        var H = i.sibling;
        if (H !== null) {
          H.return = i.return, Ae = H;
          break;
        }
        Ae = i.return;
      }
    }
    var Wo = 0, yn = 1, Os = 2, Fu = 3, xa = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Nl = Symbol.for;
      Wo = Nl("selector.component"), yn = Nl("selector.has_pseudo_class"), Os = Nl("selector.role"), Fu = Nl("selector.test_id"), xa = Nl("selector.text");
    }
    function gf(r) {
      var i = Vt(r);
      if (i != null) {
        if (typeof i.memoizedProps["data-testname"] != "string") throw Error(v(364));
        return i;
      }
      if (r = hr(r), r === null) throw Error(v(362));
      return r.stateNode.current;
    }
    function xf(r, i) {
      switch (i.$$typeof) {
        case Wo:
          if (r.type === i.value) return !0;
          break;
        case yn:
          e: {
            i = i.value, r = [r, 0];
            for (var o = 0; o < r.length; ) {
              var f = r[o++], p = r[o++], S = i[p];
              if (f.tag !== 5 || !pr(f)) {
                for (; S != null && xf(f, S); ) p++, S = i[p];
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
          if ((r.tag === 5 || r.tag === 6) && (r = jt(r), r !== null && 0 <= r.indexOf(i.value))) return !0;
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
          return "<" + (ce(r.value) || "Unknown") + ">";
        case yn:
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
    function In(r, i) {
      var o = [];
      r = [r, 0];
      for (var f = 0; f < r.length; ) {
        var p = r[f++], S = r[f++], A = i[S];
        if (p.tag !== 5 || !pr(p)) {
          for (; A != null && xf(p, A); ) S++, A = i[S];
          if (S === i.length) o.push(p);
          else for (p = p.child; p !== null; ) r.push(p, S), p = p.sibling;
        }
      }
      return o;
    }
    function ze(r, i) {
      if (!cn) throw Error(v(363));
      r = gf(r), r = In(r, i), i = [], r = Array.from(r);
      for (var o = 0; o < r.length; ) {
        var f = r[o++];
        if (f.tag === 5) pr(f) || i.push(f.stateNode);
        else for (f = f.child; f !== null; ) r.push(f), f = f.sibling;
      }
      return i;
    }
    var Gi = Math.ceil, xr = b.ReactCurrentDispatcher, Sf = b.ReactCurrentOwner, gn = b.ReactCurrentBatchConfig, pt = 0, bn = null, Tn = null, At = 0, Pr = 0, Fl = Fr(0), On = 0, Ol = null, Xi = 0, Sa = 0, _f = 0, Ou = null, Sr = null, Ef = 0, Rf = 1 / 0;
    function Ul() {
      Rf = sn() + 500;
    }
    var Uu = !1, Qo = null, Qa = null, Go = !1, Ga = null, Xo = 0, Lu = 0, Mf = null, Bu = -1, Zo = 0;
    function er() {
      return pt & 6 ? sn() : Bu !== -1 ? Bu : Bu = sn();
    }
    function Xa(r) {
      return r.mode & 1 ? pt & 2 && At !== 0 ? At & -At : Gc.transition !== null ? (Zo === 0 && (r = ca, ca <<= 1, !(ca & 4194240) && (ca = 64), Zo = r), Zo) : (r = zt, r !== 0 ? r : yt()) : 1;
    }
    function ui(r, i, o) {
      if (50 < Lu) throw Lu = 0, Mf = null, Error(v(185));
      var f = Ll(r, i);
      return f === null ? null : (vs(f, i, o), (!(pt & 2) || f !== bn) && (f === bn && (!(pt & 2) && (Sa |= i), On === 4 && _a(f, At)), _r(f, o), i === 1 && pt === 0 && !(r.mode & 1) && (Ul(), Va && ti())), f);
    }
    function Ll(r, i) {
      r.lanes |= i;
      var o = r.alternate;
      for (o !== null && (o.lanes |= i), o = r, r = r.return; r !== null; ) r.childLanes |= i, o = r.alternate, o !== null && (o.childLanes |= i), o = r, r = r.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    function _r(r, i) {
      var o = r.callbackNode;
      $r(r, i);
      var f = da(r, r === bn ? At : 0);
      if (f === 0) o !== null && pu(o), r.callbackNode = null, r.callbackPriority = 0;
      else if (i = f & -f, r.callbackPriority !== i) {
        if (o != null && pu(o), i === 1) r.tag === 0 ? Qc(Ud.bind(null, r)) : gs(Ud.bind(null, r)), dr ? Bn(function() {
          pt === 0 && ti();
        }) : Si(mu, ti), o = null;
        else {
          switch (hu(f)) {
            case 1:
              o = mu;
              break;
            case 4:
              o = Wc;
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
          o = kl(o, Vr.bind(null, r));
        }
        r.callbackPriority = i, r.callbackNode = o;
      }
    }
    function Vr(r, i) {
      if (Bu = -1, Zo = 0, pt & 6) throw Error(v(327));
      var o = r.callbackNode;
      if (Ls() && r.callbackNode !== o) return null;
      var f = da(r, r === bn ? At : 0);
      if (f === 0) return null;
      if (f & 30 || f & r.expiredLanes || i) i = Us(r, f);
      else {
        i = f;
        var p = pt;
        pt |= 2;
        var S = Bd();
        (bn !== r || At !== i) && (Ul(), Za(r, i));
        do
          try {
            kd();
            break;
          } catch (H) {
            Ld(r, H);
          }
        while (!0);
        He(), xr.current = S, pt = p, Tn !== null ? i = 0 : (bn = null, At = 0, i = On);
      }
      if (i !== 0) {
        if (i === 2 && (p = zn(r), p !== 0 && (f = p, i = wi(r, p))), i === 1) throw o = Ol, Za(r, 0), _a(r, f), _r(r, sn()), o;
        if (i === 6) _a(r, f);
        else {
          if (p = r.current.alternate, !(f & 30) && !bf(p) && (i = Us(r, f), i === 2 && (S = zn(r), S !== 0 && (f = S, i = wi(r, S))), i === 1)) throw o = Ol, Za(r, 0), _a(r, f), _r(r, sn()), o;
          switch (r.finishedWork = p, r.finishedLanes = f, i) {
            case 0:
            case 1:
              throw Error(v(345));
            case 2:
              zi(r, Sr);
              break;
            case 3:
              if (_a(r, f), (f & 130023424) === f && (i = Ef + 500 - sn(), 10 < i)) {
                if (da(r, 0) !== 0) break;
                if (p = r.suspendedLanes, (p & f) !== f) {
                  er(), r.pingedLanes |= r.suspendedLanes & p;
                  break;
                }
                r.timeoutHandle = it(zi.bind(null, r, Sr), i);
                break;
              }
              zi(r, Sr);
              break;
            case 4:
              if (_a(r, f), (f & 4194240) === f) break;
              for (i = r.eventTimes, p = -1; 0 < f; ) {
                var A = 31 - vr(f);
                S = 1 << A, A = i[A], A > p && (p = A), f &= ~S;
              }
              if (f = p, f = sn() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Gi(f / 1960)) - f, 10 < f) {
                r.timeoutHandle = it(zi.bind(null, r, Sr), f);
                break;
              }
              zi(r, Sr);
              break;
            case 5:
              zi(r, Sr);
              break;
            default:
              throw Error(v(329));
          }
        }
      }
      return _r(r, sn()), r.callbackNode === o ? Vr.bind(null, r) : null;
    }
    function wi(r, i) {
      var o = Ou;
      return r.current.memoizedState.isDehydrated && (Za(r, i).flags |= 256), r = Us(r, i), r !== 2 && (i = Sr, Sr = o, i !== null && ku(i)), r;
    }
    function ku(r) {
      Sr === null ? Sr = r : Sr.push.apply(Sr, r);
    }
    function bf(r) {
      for (var i = r; ; ) {
        if (i.flags & 16384) {
          var o = i.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var f = 0; f < o.length; f++) {
            var p = o[f], S = p.getSnapshot;
            p = p.value;
            try {
              if (!Ur(S(), p)) return !1;
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
      for (i &= ~_f, i &= ~Sa, r.suspendedLanes |= i, r.pingedLanes &= ~i, r = r.expirationTimes; 0 < i; ) {
        var o = 31 - vr(i), f = 1 << o;
        r[o] = -1, i &= ~f;
      }
    }
    function Ud(r) {
      if (pt & 6) throw Error(v(327));
      Ls();
      var i = da(r, 0);
      if (!(i & 1)) return _r(r, sn()), null;
      var o = Us(r, i);
      if (r.tag !== 0 && o === 2) {
        var f = zn(r);
        f !== 0 && (i = f, o = wi(r, f));
      }
      if (o === 1) throw o = Ol, Za(r, 0), _a(r, i), _r(r, sn()), o;
      if (o === 6) throw Error(v(345));
      return r.finishedWork = r.current.alternate, r.finishedLanes = i, zi(r, Sr), _r(r, sn()), null;
    }
    function Tf(r) {
      Ga !== null && Ga.tag === 0 && !(pt & 6) && Ls();
      var i = pt;
      pt |= 1;
      var o = gn.transition, f = zt;
      try {
        if (gn.transition = null, zt = 1, r) return r();
      } finally {
        zt = f, gn.transition = o, pt = i, !(pt & 6) && ti();
      }
    }
    function oi() {
      Pr = Fl.current, Yt(Fl);
    }
    function Za(r, i) {
      r.finishedWork = null, r.finishedLanes = 0;
      var o = r.timeoutHandle;
      if (o !== Ie && (r.timeoutHandle = Ie, at(o)), Tn !== null) for (o = Tn.return; o !== null; ) {
        var f = o;
        switch (Jc(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && ka();
            break;
          case 3:
            Es(), Yt(Qt), Yt(wn), ji();
            break;
          case 5:
            kr(f);
            break;
          case 4:
            Es();
            break;
          case 13:
            Yt(un);
            break;
          case 19:
            Yt(un);
            break;
          case 10:
            ht(f.type._context);
            break;
          case 22:
          case 23:
            oi();
        }
        o = o.return;
      }
      if (bn = r, Tn = r = Er(r.current, null), At = Pr = i, On = 0, Ol = null, _f = Sa = Xi = 0, Sr = Ou = null, Ct !== null) {
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
        var o = Tn;
        try {
          if (He(), Dn.current = Rl, ml) {
            for (var f = Dt.memoizedState; f !== null; ) {
              var p = f.queue;
              p !== null && (p.pending = null), f = f.next;
            }
            ml = !1;
          }
          if (Ia = 0, tn = fn = Dt = null, Ii = !1, vl = 0, Sf.current = null, o === null || o.return === null) {
            On = 1, Ol = i, Tn = null;
            break;
          }
          e: {
            var S = r, A = o.return, H = o, $ = i;
            if (i = At, H.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
              var ye = $, Re = H, rt = Re.tag;
              if (!(Re.mode & 1) && (rt === 0 || rt === 11 || rt === 15)) {
                var Ke = Re.alternate;
                Ke ? (Re.updateQueue = Ke.updateQueue, Re.memoizedState = Ke.memoizedState, Re.lanes = Ke.lanes) : (Re.updateQueue = null, Re.memoizedState = null);
              }
              var nn = Ts(A);
              if (nn !== null) {
                nn.flags &= -257, Bo(nn, A, H, S, i), nn.mode & 1 && Du(S, ye, i), i = nn, $ = ye;
                var Ye = i.updateQueue;
                if (Ye === null) {
                  var Yn = /* @__PURE__ */ new Set();
                  Yn.add($), i.updateQueue = Yn;
                } else Ye.add($);
                break e;
              } else {
                if (!(i & 1)) {
                  Du(S, ye, i), Cf();
                  break e;
                }
                $ = Error(v(426));
              }
            } else if (ln && H.mode & 1) {
              var ar = Ts(A);
              if (ar !== null) {
                !(ar.flags & 65536) && (ar.flags |= 256), Bo(ar, A, H, S, i), Su($);
                break e;
              }
            }
            S = $, On !== 4 && (On = 2), Ou === null ? Ou = [S] : Ou.push(S), $ = wu($, H), H = A;
            do {
              switch (H.tag) {
                case 3:
                  H.flags |= 65536, i &= -i, H.lanes |= i;
                  var Y = Uo(H, $, i);
                  yu(H, Y);
                  break e;
                case 1:
                  S = $;
                  var P = H.type, X = H.stateNode;
                  if (!(H.flags & 128) && (typeof P.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && (Qa === null || !Qa.has(X)))) {
                    H.flags |= 65536, i &= -i, H.lanes |= i;
                    var De = Lo(H, S, i);
                    yu(H, De);
                    break e;
                  }
              }
              H = H.return;
            } while (H !== null);
          }
          jr(o);
        } catch (je) {
          i = je, Tn === o && o !== null && (Tn = o = o.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Bd() {
      var r = xr.current;
      return xr.current = Rl, r === null ? Rl : r;
    }
    function Cf() {
      (On === 0 || On === 3 || On === 2) && (On = 4), bn === null || !(Xi & 268435455) && !(Sa & 268435455) || _a(bn, At);
    }
    function Us(r, i) {
      var o = pt;
      pt |= 2;
      var f = Bd();
      bn === r && At === i || Za(r, i);
      do
        try {
          Cp();
          break;
        } catch (p) {
          Ld(r, p);
        }
      while (!0);
      if (He(), pt = o, xr.current = f, Tn !== null) throw Error(v(261));
      return bn = null, At = 0, On;
    }
    function Cp() {
      for (; Tn !== null; ) wf(Tn);
    }
    function kd() {
      for (; Tn !== null && !Yc(); ) wf(Tn);
    }
    function wf(r) {
      var i = Bl(r.alternate, r, Pr);
      r.memoizedProps = r.pendingProps, i === null ? jr(r) : Tn = i, Sf.current = null;
    }
    function jr(r) {
      var i = r;
      do {
        var o = i.alternate;
        if (r = i.return, i.flags & 32768) {
          if (o = ct(o, i), o !== null) {
            o.flags &= 32767, Tn = o;
            return;
          }
          if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
          else {
            On = 6, Tn = null;
            return;
          }
        } else if (o = bp(o, i, Pr), o !== null) {
          Tn = o;
          return;
        }
        if (i = i.sibling, i !== null) {
          Tn = i;
          return;
        }
        Tn = i = r;
      } while (i !== null);
      On === 0 && (On = 5);
    }
    function zi(r, i) {
      var o = zt, f = gn.transition;
      try {
        gn.transition = null, zt = 1, wp(r, i, o);
      } finally {
        gn.transition = f, zt = o;
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
      if (qc(r, S), r === bn && (Tn = bn = null, At = 0), !(f.subtreeFlags & 2064) && !(f.flags & 2064) || Go || (Go = !0, kl(vu, function() {
        return Ls(), null;
      })), S = (f.flags & 15990) !== 0, f.subtreeFlags & 15990 || S) {
        S = gn.transition, gn.transition = null;
        var A = zt;
        zt = 1;
        var H = pt;
        pt |= 4, Sf.current = null, Ad(r, f), Tp(r, f), K(r.containerInfo), r.current = f, Nd(f), mo(), pt = H, zt = A, gn.transition = S;
      } else r.current = f;
      if (Go && (Go = !1, Ga = r, Xo = p), S = r.pendingLanes, S === 0 && (Qa = null), Pa(f.stateNode), _r(r, sn()), i !== null) for (o = r.onRecoverableError, f = 0; f < i.length; f++) o(i[f]);
      if (Uu) throw Uu = !1, r = Qo, Qo = null, r;
      return Xo & 1 && r.tag !== 0 && Ls(), S = r.pendingLanes, S & 1 ? r === Mf ? Lu++ : (Lu = 0, Mf = r) : Lu = 0, ti(), null;
    }
    function Ls() {
      if (Ga !== null) {
        var r = hu(Xo), i = gn.transition, o = zt;
        try {
          if (gn.transition = null, zt = 16 > r ? 16 : r, Ga === null) var f = !1;
          else {
            if (r = Ga, Ga = null, Xo = 0, pt & 6) throw Error(v(331));
            var p = pt;
            for (pt |= 4, Ae = r.current; Ae !== null; ) {
              var S = Ae, A = S.child;
              if (Ae.flags & 16) {
                var H = S.deletions;
                if (H !== null) {
                  for (var $ = 0; $ < H.length; $++) {
                    var ye = H[$];
                    for (Ae = ye; Ae !== null; ) {
                      var Re = Ae;
                      switch (Re.tag) {
                        case 0:
                        case 11:
                        case 15:
                          As(8, Re, S);
                      }
                      var rt = Re.child;
                      if (rt !== null) rt.return = Re, Ae = rt;
                      else for (; Ae !== null; ) {
                        Re = Ae;
                        var Ke = Re.sibling, nn = Re.return;
                        if (Ci(Re), Re === ye) {
                          Ae = null;
                          break;
                        }
                        if (Ke !== null) {
                          Ke.return = nn, Ae = Ke;
                          break;
                        }
                        Ae = nn;
                      }
                    }
                  }
                  var Ye = S.alternate;
                  if (Ye !== null) {
                    var Yn = Ye.child;
                    if (Yn !== null) {
                      Ye.child = null;
                      do {
                        var ar = Yn.sibling;
                        Yn.sibling = null, Yn = ar;
                      } while (Yn !== null);
                    }
                  }
                  Ae = S;
                }
              }
              if (S.subtreeFlags & 2064 && A !== null) A.return = S, Ae = A;
              else e: for (; Ae !== null; ) {
                if (S = Ae, S.flags & 2048) switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, S, S.return);
                }
                var Y = S.sibling;
                if (Y !== null) {
                  Y.return = S.return, Ae = Y;
                  break e;
                }
                Ae = S.return;
              }
            }
            var P = r.current;
            for (Ae = P; Ae !== null; ) {
              A = Ae;
              var X = A.child;
              if (A.subtreeFlags & 2064 && X !== null) X.return = A, Ae = X;
              else e: for (A = P; Ae !== null; ) {
                if (H = Ae, H.flags & 2048) try {
                  switch (H.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ns(9, H);
                  }
                } catch (je) {
                  kt(H, H.return, je);
                }
                if (H === A) {
                  Ae = null;
                  break e;
                }
                var De = H.sibling;
                if (De !== null) {
                  De.return = H.return, Ae = De;
                  break e;
                }
                Ae = H.return;
              }
            }
            if (pt = p, ti(), ei && typeof ei.onPostCommitFiberRoot == "function") try {
              ei.onPostCommitFiberRoot(ha, r);
            } catch {
            }
            f = !0;
          }
          return f;
        } finally {
          zt = o, gn.transition = i;
        }
      }
      return !1;
    }
    function qn(r, i, o) {
      i = wu(o, i), i = Uo(r, i, 1), _i(r, i), i = er(), r = Ll(r, 1), r !== null && (vs(r, 1, i), _r(r, i));
    }
    function kt(r, i, o) {
      if (r.tag === 3) qn(r, r, o);
      else for (; i !== null; ) {
        if (i.tag === 3) {
          qn(i, r, o);
          break;
        } else if (i.tag === 1) {
          var f = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Qa === null || !Qa.has(f))) {
            r = wu(o, r), r = Lo(i, r, 1), _i(i, r), r = er(), i = Ll(i, 1), i !== null && (vs(i, 1, r), _r(i, r));
            break;
          }
        }
        i = i.return;
      }
    }
    function Zi(r, i, o) {
      var f = r.pingCache;
      f !== null && f.delete(i), i = er(), r.pingedLanes |= r.suspendedLanes & o, bn === r && (At & o) === o && (On === 4 || On === 3 && (At & 130023424) === At && 500 > sn() - Ef ? Za(r, 0) : _f |= o), _r(r, i);
    }
    function ci(r, i) {
      i === 0 && (r.mode & 1 ? (i = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : i = 1);
      var o = er();
      r = Ll(r, i), r !== null && (vs(r, i, o), _r(r, o));
    }
    function zp(r) {
      var i = r.memoizedState, o = 0;
      i !== null && (o = i.retryLane), ci(r, o);
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
      f !== null && f.delete(i), ci(r, o);
    }
    var Bl;
    Bl = function(r, i, o) {
      if (r !== null) if (r.memoizedProps !== i.pendingProps || Qt.current) $n = !0;
      else {
        if (!(r.lanes & o) && !(i.flags & 128)) return $n = !1, wl(r, i, o);
        $n = !!(r.flags & 131072);
      }
      else $n = !1, ln && i.flags & 1048576 && Ed(i, Eo, i.index);
      switch (i.lanes = 0, i.tag) {
        case 2:
          var f = i.type;
          r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps;
          var p = Ba(i, wn.current);
          Lt(i, o), p = gl(null, i, f, r, p, o);
          var S = bu();
          return i.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Kn(f) ? (S = !0, Pi(i)) : S = !1, i.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, pn(i), p.updater = So, i.stateNode = p, p._reactInternals = i, Xc(i, f, r, o), i = cf(null, i, f, !0, S, o)) : (i.tag = 0, ln && S && Zc(i), Hn(null, i, p, o), i = i.child), i;
        case 16:
          f = i.elementType;
          e: {
            switch (r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), r = i.pendingProps, p = f._init, f = p(f._payload), i.type = f, p = i.tag = Pu(f), r = F(f, r), p) {
              case 0:
                i = of(null, i, f, r, o);
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
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), of(r, i, f, p, o);
        case 1:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), Ho(r, i, f, p, o);
        case 3:
          e: {
            if (Po(i), r === null) throw Error(v(387));
            f = i.pendingProps, S = i.memoizedState, p = S.element, Vi(r, i), ol(i, f, null, o);
            var A = i.memoizedState;
            if (f = A.element, Ge && S.isDehydrated) if (S = {
              element: f,
              isDehydrated: !1,
              cache: A.cache,
              transitions: A.transitions
            }, i.updateQueue.baseState = S, i.memoizedState = S, i.flags & 256) {
              p = Error(v(423)), i = ff(r, i, f, o, p);
              break e;
            } else if (f !== p) {
              p = Error(v(424)), i = ff(r, i, f, o, p);
              break e;
            } else for (Ge && (jn = Oa(i.stateNode.containerInfo), Br = i, ln = !0, ii = null, dl = !1), o = To(i, null, f, o), i.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (hl(), f === p) {
                i = vn(r, i, o);
                break e;
              }
              Hn(r, i, f, o);
            }
            i = i.child;
          }
          return i;
        case 5:
          return Mu(i), r === null && Mo(i), f = i.type, p = i.pendingProps, S = r !== null ? r.memoizedProps : null, A = p.children, Ve(f, p) ? A = null : S !== null && Ve(f, S) && (i.flags |= 32), Td(r, i), Hn(r, i, A, o), i.child;
        case 6:
          return r === null && Mo(i), null;
        case 13:
          return Cd(r, i, o);
        case 4:
          return Co(i, i.stateNode.containerInfo), f = i.pendingProps, r === null ? i.child = pl(i, null, f, o) : Hn(r, i, f, o), i.child;
        case 11:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), Tl(r, i, f, p, o);
        case 7:
          return Hn(r, i, i.pendingProps, o), i.child;
        case 8:
          return Hn(r, i, i.pendingProps.children, o), i.child;
        case 12:
          return Hn(r, i, i.pendingProps.children, o), i.child;
        case 10:
          e: {
            if (f = i.type._context, p = i.pendingProps, S = i.memoizedProps, A = p.value, st(i, f, A), S !== null) if (Ur(S.value, A)) {
              if (S.children === p.children && !Qt.current) {
                i = vn(r, i, o);
                break e;
              }
            } else for (S = i.child, S !== null && (S.return = i); S !== null; ) {
              var H = S.dependencies;
              if (H !== null) {
                A = S.child;
                for (var $ = H.firstContext; $ !== null; ) {
                  if ($.context === f) {
                    if (S.tag === 1) {
                      $ = Lr(-1, o & -o), $.tag = 2;
                      var ye = S.updateQueue;
                      if (ye !== null) {
                        ye = ye.shared;
                        var Re = ye.pending;
                        Re === null ? $.next = $ : ($.next = Re.next, Re.next = $), ye.pending = $;
                      }
                    }
                    S.lanes |= o, $ = S.alternate, $ !== null && ($.lanes |= o), Ut(S.return, o, i), H.lanes |= o;
                    break;
                  }
                  $ = $.next;
                }
              } else if (S.tag === 10) A = S.type === i.type ? null : S.child;
              else if (S.tag === 18) {
                if (A = S.return, A === null) throw Error(v(341));
                A.lanes |= o, H = A.alternate, H !== null && (H.lanes |= o), Ut(A, o, i), A = S.sibling;
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
            Hn(r, i, p.children, o), i = i.child;
          }
          return i;
        case 9:
          return p = i.type, f = i.pendingProps.children, Lt(i, o), p = xt(p), f = f(p), i.flags |= 1, Hn(r, i, f, o), i.child;
        case 14:
          return f = i.type, p = F(f, i.pendingProps), p = F(f.type, p), Nu(r, i, f, p, o);
        case 15:
          return Md(r, i, i.type, i.pendingProps, o);
        case 17:
          return f = i.type, p = i.pendingProps, p = i.elementType === f ? p : F(f, p), r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, Kn(f) ? (r = !0, Pi(i)) : r = !1, Lt(i, o), Sd(i, f, p), Xc(i, f, p, o), cf(null, i, f, !0, r, o);
        case 19:
          return Io(r, i, o);
        case 22:
          return bd(r, i, o);
      }
      throw Error(v(156, i.tag));
    };
    function kl(r, i) {
      return Si(r, i);
    }
    function Hu(r, i, o, f) {
      this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function tr(r, i, o, f) {
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
    function Er(r, i) {
      var o = r.alternate;
      return o === null ? (o = tr(r.tag, i, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = i, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 14680064, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, i = r.dependencies, o.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o;
    }
    function Hs(r, i, o, f, p, S) {
      var A = 2;
      if (f = r, typeof r == "function") ks(r) && (A = 1);
      else if (typeof r == "string") A = 5;
      else e: switch (r) {
        case _:
          return Ja(o.children, p, S, i);
        case R:
          A = 8, p |= 8;
          break;
        case C:
          return r = tr(12, o, i, p | 2), r.elementType = C, r.lanes = S, r;
        case B:
          return r = tr(13, o, i, p), r.elementType = B, r.lanes = S, r;
        case j:
          return r = tr(19, o, i, p), r.elementType = j, r.lanes = S, r;
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
      return i = tr(A, o, i, p), i.elementType = r, i.type = f, i.lanes = S, i;
    }
    function Ja(r, i, o, f) {
      return r = tr(7, r, f, i), r.lanes = o, r;
    }
    function Vu(r, i, o, f) {
      return r = tr(22, r, f, i), r.elementType = ue, r.lanes = o, r.stateNode = {}, r;
    }
    function Jo(r, i, o) {
      return r = tr(6, r, null, i), r.lanes = o, r;
    }
    function ju(r, i, o) {
      return i = tr(4, r.children !== null ? r.children : [], r.key, i), i.lanes = o, i.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, i;
    }
    function Dp(r, i, o, f, p) {
      this.tag = i, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ie, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = f, this.onRecoverableError = p, Ge && (this.mutableSourceEagerHydrationData = null);
    }
    function Hd(r, i, o, f, p, S, A, H, $) {
      return r = new Dp(r, i, o, H, $), i === 1 ? (i = 1, S === !0 && (i |= 8)) : i = 0, S = tr(3, null, null, i), r.current = S, S.stateNode = r, S.memoizedState = { element: f, isDehydrated: o, cache: null, transitions: null }, pn(S), r;
    }
    function fi(r) {
      if (!r) return Jr;
      r = r._reactInternals;
      e: {
        if (Je(r) !== r || r.tag !== 1) throw Error(v(170));
        var i = r;
        do {
          switch (i.tag) {
            case 3:
              i = i.stateNode.context;
              break e;
            case 1:
              if (Kn(i.type)) {
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
        if (Kn(o)) return ms(r, o, i);
      }
      return i;
    }
    function Iu(r) {
      var i = r._reactInternals;
      if (i === void 0)
        throw typeof r.render == "function" ? Error(v(188)) : (r = Object.keys(r).join(","), Error(v(268, r)));
      return r = Ee(i), r === null ? null : r.stateNode;
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
      return r = Ee(r), r === null ? null : r.stateNode;
    }
    function zf() {
      return null;
    }
    return a.attemptContinuousHydration = function(r) {
      if (r.tag === 13) {
        var i = er();
        ui(r, 134217728, i), Pl(r, 134217728);
      }
    }, a.attemptHydrationAtCurrentPriority = function(r) {
      if (r.tag === 13) {
        var i = er(), o = Xa(r);
        ui(r, o, i), Pl(r, o);
      }
    }, a.attemptSynchronousHydration = function(r) {
      switch (r.tag) {
        case 3:
          var i = r.stateNode;
          if (i.current.memoizedState.isDehydrated) {
            var o = xi(i.pendingLanes);
            o !== 0 && (sl(i, o | 1), _r(i, sn()), !(pt & 6) && (Ul(), ti()));
          }
          break;
        case 13:
          var f = er();
          Tf(function() {
            return ui(r, 1, f);
          }), Pl(r, 1);
      }
    }, a.batchedUpdates = function(r, i) {
      var o = pt;
      pt |= 1;
      try {
        return r(i);
      } finally {
        pt = o, pt === 0 && (Ul(), Va && ti());
      }
    }, a.createComponentSelector = function(r) {
      return { $$typeof: Wo, value: r };
    }, a.createContainer = function(r, i, o, f, p, S, A) {
      return Hd(r, i, !1, null, o, f, p, S, A);
    }, a.createHasPseudoClassSelector = function(r) {
      return { $$typeof: yn, value: r };
    }, a.createHydrationContainer = function(r, i, o, f, p, S, A, H, $) {
      return r = Hd(o, f, !0, r, p, S, A, H, $), r.context = fi(null), o = r.current, f = er(), p = Xa(o), S = Lr(f, p), S.callback = i ?? null, _i(o, S), r.current.lanes = p, vs(r, p, f), _r(r, f), r;
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
      var i = zt, o = gn.transition;
      try {
        return gn.transition = null, zt = 16, r();
      } finally {
        zt = i, gn.transition = o;
      }
    }, a.discreteUpdates = function(r, i, o, f, p) {
      var S = zt, A = gn.transition;
      try {
        return gn.transition = null, zt = 1, r(i, o, f, p);
      } finally {
        zt = S, gn.transition = A, pt === 0 && Ul();
      }
    }, a.findAllNodes = ze, a.findBoundingRects = function(r, i) {
      if (!cn) throw Error(v(363));
      i = ze(r, i), r = [];
      for (var o = 0; o < i.length; o++) r.push(Zn(i[o]));
      for (i = r.length - 1; 0 < i; i--) {
        o = r[i];
        for (var f = o.x, p = f + o.width, S = o.y, A = S + o.height, H = i - 1; 0 <= H; H--) if (i !== H) {
          var $ = r[H], ye = $.x, Re = ye + $.width, rt = $.y, Ke = rt + $.height;
          if (f >= ye && S >= rt && p <= Re && A <= Ke) {
            r.splice(i, 1);
            break;
          } else if (f !== ye || o.width !== $.width || Ke < S || rt > A) {
            if (!(S !== rt || o.height !== $.height || Re < f || ye > p)) {
              ye > f && ($.width += ye - f, $.x = f), Re < p && ($.width = p - ye), r.splice(i, 1);
              break;
            }
          } else {
            rt > S && ($.height += rt - S, $.y = S), Ke < A && ($.height = A - rt), r.splice(i, 1);
            break;
          }
        }
      }
      return r;
    }, a.findHostInstance = Iu, a.findHostInstanceWithNoPortals = function(r) {
      return r = Me(r), r = r !== null ? we(r) : null, r === null ? null : r.stateNode;
    }, a.findHostInstanceWithWarning = function(r) {
      return Iu(r);
    }, a.flushControlled = function(r) {
      var i = pt;
      pt |= 1;
      var o = gn.transition, f = zt;
      try {
        gn.transition = null, zt = 1, r();
      } finally {
        zt = f, gn.transition = o, pt = i, pt === 0 && (Ul(), ti());
      }
    }, a.flushPassiveEffects = Ls, a.flushSync = Tf, a.focusWithin = function(r, i) {
      if (!cn) throw Error(v(363));
      for (r = gf(r), i = In(r, i), i = Array.from(i), r = 0; r < i.length; ) {
        var o = i[r++];
        if (!pr(o)) {
          if (o.tag === 5 && Dr(o.stateNode)) return !0;
          for (o = o.child; o !== null; ) i.push(o), o = o.sibling;
        }
      }
      return !1;
    }, a.getCurrentUpdatePriority = function() {
      return zt;
    }, a.getFindAllNodesFailureDescription = function(r, i) {
      if (!cn) throw Error(v(363));
      var o = 0, f = [];
      r = [gf(r), 0];
      for (var p = 0; p < r.length; ) {
        var S = r[p++], A = r[p++], H = i[A];
        if ((S.tag !== 5 || !pr(S)) && (xf(S, H) && (f.push(Wa(H)), A++, A > o && (o = A)), A < i.length)) for (S = S.child; S !== null; ) r.push(S, A), S = S.sibling;
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
          return Oe(r.child.stateNode);
        default:
          return r.child.stateNode;
      }
    }, a.injectIntoDevTools = function(r) {
      if (r = { bundleType: r.bundleType, version: r.version, rendererPackageName: r.rendererPackageName, rendererConfig: r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: Vl, findFiberByHostInstance: r.findFiberByHostInstance || zf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") r = !1;
      else {
        var i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (i.isDisabled || !i.supportsFiber) r = !0;
        else {
          try {
            ha = i.inject(r), ei = i;
          } catch {
          }
          r = !!i.checkDCE;
        }
      }
      return r;
    }, a.isAlreadyRendering = function() {
      return !1;
    }, a.observeVisibleRects = function(r, i, o, f) {
      if (!cn) throw Error(v(363));
      r = ze(r, i);
      var p = Xr(r, o, f).disconnect;
      return { disconnect: function() {
        p();
      } };
    }, a.registerMutableSourceForHydration = function(r, i) {
      var o = i._getVersion;
      o = o(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, o] : r.mutableSourceEagerHydrationData.push(i, o);
    }, a.runWithPriority = function(r, i) {
      var o = zt;
      try {
        return zt = r, i();
      } finally {
        zt = o;
      }
    }, a.shouldError = function() {
      return null;
    }, a.shouldSuspend = function() {
      return !1;
    }, a.updateContainer = function(r, i, o, f) {
      var p = i.current, S = er(), A = Xa(p);
      return o = fi(o), i.context === null ? i.context = o : i.pendingContext = o, i = Lr(S, A), i.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (i.callback = f), _i(p, i), r = ui(p, A, S), r !== null && ul(r, p, A), A;
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
function HM() {
  return l1 || (l1 = 1, process.env.NODE_ENV !== "production" && (Kv.exports = function(e) {
    var a = {}, u = Qe, d = P1(), m = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = !1;
    function b(t) {
      v = t;
    }
    function E(t) {
      if (!v) {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          s[l - 1] = arguments[l];
        _("warn", t, s);
      }
    }
    function g(t) {
      if (!v) {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          s[l - 1] = arguments[l];
        _("error", t, s);
      }
    }
    function _(t, n, s) {
      {
        var l = m.ReactDebugCurrentFrame, c = l.getStackAddendum();
        c !== "" && (n += "%s", s = s.concat([c]));
        var h = s.map(function(x) {
          return String(x);
        });
        h.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, h);
      }
    }
    var R = Object.assign;
    function C(t) {
      return t._reactInternals;
    }
    function z(t, n) {
      t._reactInternals = n;
    }
    var D = !1, L = !1, B = !1, j = !1, te = !1, ee = !1, ue = !0, de = !0, be = !0, ce = 0, le = 1, Je = 2, pe = 3, Me = 4, Ee = 5, he = 6, we = 7, nt = 8, Oe = 9, ve = 10, k = 11, ne = 12, K = 13, O = 14, V = 15, Pe = 16, Ce = 17, Ve = 18, ke = 19, it = 21, at = 22, Ie = 23, ot = 24, Et = 25, Ot = Symbol.for("react.element"), Ge = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), Rt = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), Jt = Symbol.for("react.provider"), dr = Symbol.for("react.context"), Bn = Symbol.for("react.forward_ref"), cn = Symbol.for("react.suspense"), hr = Symbol.for("react.suspense_list"), Zn = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), pr = Symbol.for("react.scope"), la = Symbol.for("react.debug_trace_mode"), Dr = Symbol.for("react.offscreen"), Xr = Symbol.for("react.legacy_hidden"), ua = Symbol.for("react.cache"), cs = Symbol.for("react.tracing_marker"), Na = Symbol.iterator, G = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = Na && t[Na] || t[G];
      return typeof n == "function" ? n : null;
    }
    function Ne(t, n, s) {
      var l = t.displayName;
      if (l)
        return l;
      var c = n.displayName || n.name || "";
      return c !== "" ? s + "(" + c + ")" : s;
    }
    function $e(t) {
      return t.displayName || "Context";
    }
    function Ue(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Vt:
          return "Fragment";
        case Ge:
          return "Portal";
        case yt:
          return "Profiler";
        case Rt:
          return "StrictMode";
        case cn:
          return "Suspense";
        case hr:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case dr:
            var n = t;
            return $e(n) + ".Consumer";
          case Jt:
            var s = t;
            return $e(s._context) + ".Provider";
          case Bn:
            return Ne(t, t.render, "ForwardRef");
          case Zn:
            var l = t.displayName || null;
            return l !== null ? l : Ue(t.type) || "Memo";
          case jt: {
            var c = t, h = c._payload, x = c._init;
            try {
              return Ue(x(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Kt(t, n, s) {
      var l = n.displayName || n.name || "";
      return t.displayName || (l !== "" ? s + "(" + l + ")" : s);
    }
    function Tt(t) {
      return t.displayName || "Context";
    }
    function qe(t) {
      var n = t.tag, s = t.type;
      switch (n) {
        case ot:
          return "Cache";
        case Oe:
          var l = s;
          return Tt(l) + ".Consumer";
        case ve:
          var c = s;
          return Tt(c._context) + ".Provider";
        case Ve:
          return "DehydratedFragment";
        case k:
          return Kt(s, s.render, "ForwardRef");
        case we:
          return "Fragment";
        case Ee:
          return s;
        case Me:
          return "Portal";
        case pe:
          return "Root";
        case he:
          return "Text";
        case Pe:
          return Ue(s);
        case nt:
          return s === Rt ? "StrictMode" : "Mode";
        case at:
          return "Offscreen";
        case ne:
          return "Profiler";
        case it:
          return "Scope";
        case K:
          return "Suspense";
        case ke:
          return "SuspenseList";
        case Et:
          return "TracingMarker";
        case le:
        case ce:
        case Ce:
        case Je:
        case O:
        case V:
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
    ), kn = (
      /*                */
      1
    ), qt = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), $s = (
      /*           */
      qt | gt
    ), mr = (
      /*                */
      16
    ), Fa = (
      /*                 */
      32
    ), ou = (
      /*                     */
      64
    ), Mt = (
      /*                   */
      128
    ), Zr = (
      /*            */
      256
    ), Li = (
      /*                          */
      512
    ), Ar = (
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
      ir | gt
    ), Bi = (
      /*                   */
      8192
    ), el = (
      /*             */
      16384
    ), fs = rr | gt | ou | Li | Ar | el, co = (
      /*               */
      32767
    ), Oa = (
      /*                   */
      32768
    ), Jn = (
      /*                */
      65536
    ), Cn = (
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
      gt | Ar | 0
    ), ds = qt | gt | mr | Fa | Li | ir | Bi, hs = gt | ou | Li | Bi, Ua = rr | mr, Nr = oa | tl | cu, ps = m.ReactCurrentOwner;
    function La(t) {
      var n = t, s = t;
      if (t.alternate)
        for (; n.return; )
          n = n.return;
      else {
        var l = n;
        do
          n = l, (n.flags & (qt | ir)) !== Se && (s = n.return), l = n.return;
        while (l);
      }
      return n.tag === pe ? s : null;
    }
    function du(t) {
      return La(t) === t;
    }
    function Ic(t) {
      {
        var n = ps.current;
        if (n !== null && n.tag === le) {
          var s = n, l = s.stateNode;
          l._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(s) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var c = C(t);
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
      if (l.tag !== pe)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? t : n;
    }
    function Fr(t) {
      var n = Hi(t);
      return n !== null ? Yt(n) : null;
    }
    function Yt(t) {
      if (t.tag === Ee || t.tag === he)
        return t;
      for (var n = t.child; n !== null; ) {
        var s = Yt(n);
        if (s !== null)
          return s;
        n = n.sibling;
      }
      return null;
    }
    function Wt(t) {
      var n = Hi(t);
      return n !== null ? Jr(n) : null;
    }
    function Jr(t) {
      if (t.tag === Ee || t.tag === he)
        return t;
      for (var n = t.child; n !== null; ) {
        if (n.tag !== Me) {
          var s = Jr(n);
          if (s !== null)
            return s;
        }
        n = n.sibling;
      }
      return null;
    }
    var wn = Array.isArray;
    function Qt(t) {
      return wn(t);
    }
    var Kr = e.getPublicInstance, Ba = e.getRootHostContext, Kn = e.getChildHostContext, ka = e.prepareForCommit, rl = e.resetAfterCommit, ms = e.createInstance, Pi = e.appendInitialChild, Ha = e.finalizeInitialChildren, vr = e.prepareUpdate, il = e.shouldSetTextContent, ho = e.createTextInstance, po = e.scheduleTimeout, ca = e.cancelTimeout, fa = e.noTimeout;
    e.now;
    var xi = e.isPrimaryRenderer, da = e.warnsIfNotActing, Or = e.supportsMutation, $r = e.supportsPersistence, zn = e.supportsHydration, al = e.getInstanceFromNode;
    e.beforeActiveInstanceBlur, e.afterActiveInstanceBlur;
    var vs = e.preparePortalMount;
    e.preparePortalMount, e.getInstanceFromScope;
    var qc = e.getCurrentEventPriority, sl = e.detachDeletedInstance, zt = e.supportsMicrotasks, hu = e.scheduleMicrotask, Si = e.supportsTestSelectors, pu = e.findFiberRoot, Yc = e.getBoundingRect, mo = e.getTextContent, sn = e.isHiddenSubtree, mu = e.matchAccessibilityRole, Wc = e.setFocusIfFocusable, vu = e.setupIntersectionObserver, vo = e.appendChild, ha = e.appendChildToContainer, ei = e.commitTextUpdate, Pa = e.commitMount, yo = e.commitUpdate, Ur = e.insertBefore, yr = e.insertInContainerBefore, Va = e.removeChild, ys = e.removeChildFromContainer, gs = e.resetTextContent, Qc = e.hideInstance, ti = e.hideTextInstance, Gc = e.unhideInstance, ll = e.unhideTextInstance, M = e.clearContainer, F = e.cloneInstance, W = e.createContainerChildSet, J = e.appendChildToContainerChildSet, ge = e.finalizeContainerChildren, Xe = e.replaceContainerChildren;
    e.getOffscreenContainerType;
    var He = e.getOffscreenContainerProps, st = e.cloneHiddenInstance, ht = e.cloneHiddenTextInstance, Ut = e.canHydrateInstance, Lt = e.canHydrateTextInstance, xt = e.canHydrateSuspenseInstance, Ct = e.isSuspenseInstancePending, Bt = e.isSuspenseInstanceFallback, pn = e.registerSuspenseInstanceRetry, Vi = e.getNextHydratableSibling, Lr = e.getFirstHydratableChild, _i = e.getFirstHydratableChildWithinContainer, ul = e.getFirstHydratableChildWithinSuspenseInstance, yu = e.hydrateInstance, ol = e.hydrateTextInstance, gu = e.hydrateSuspenseInstance, go = e.getNextHydratableInstanceAfterSuspenseInstance, xo = e.commitHydratedContainer, So = e.commitHydratedSuspenseInstance, xd = e.clearSuspenseBoundary, Sd = e.clearSuspenseBoundaryFromContainer, _d = e.shouldDeleteUnhydratedTailInstances, Xc = e.didNotMatchHydratedContainerTextInstance, cl = e.didNotMatchHydratedTextInstance, fl = e.didNotHydrateInstanceWithinContainer, _o = e.didNotHydrateInstanceWithinSuspenseInstance, Eo = e.didNotHydrateInstance, ni = e.didNotFindHydratableInstanceWithinContainer, ri = e.didNotFindHydratableTextInstanceWithinContainer, xs = e.didNotFindHydratableSuspenseInstanceWithinContainer, pa = e.didNotFindHydratableInstanceWithinSuspenseInstance, ma = e.didNotFindHydratableTextInstanceWithinSuspenseInstance, Ss = e.didNotFindHydratableSuspenseInstanceWithinSuspenseInstance, Ed = e.didNotFindHydratableInstance, Zc = e.didNotFindHydratableTextInstance, Jc = e.didNotFindHydratableSuspenseInstance, Br = e.errorHydratingContainer, jn = 0, ln, dl, ii, Kc, $c, Ro, Mo;
    function ef() {
    }
    ef.__reactDisabledLog = !0;
    function xu() {
      {
        if (jn === 0) {
          ln = console.log, dl = console.info, ii = console.warn, Kc = console.error, $c = console.group, Ro = console.groupCollapsed, Mo = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ef,
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
        jn++;
      }
    }
    function hl() {
      {
        if (jn--, jn === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, t, {
              value: ln
            }),
            info: R({}, t, {
              value: dl
            }),
            warn: R({}, t, {
              value: ii
            }),
            error: R({}, t, {
              value: Kc
            }),
            group: R({}, t, {
              value: $c
            }),
            groupCollapsed: R({}, t, {
              value: Ro
            }),
            groupEnd: R({}, t, {
              value: Mo
            })
          });
        }
        jn < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var bo = !1, _u;
    {
      var pl = typeof WeakMap == "function" ? WeakMap : Map;
      _u = new pl();
    }
    function To(t, n) {
      if (!t || bo)
        return "";
      {
        var s = _u.get(t);
        if (s !== void 0)
          return s;
      }
      var l;
      bo = !0;
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
            } catch (me) {
              l = me;
            }
            Reflect.construct(t, [], x);
          } else {
            try {
              x.call();
            } catch (me) {
              l = me;
            }
            t.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            l = me;
          }
          t();
        }
      } catch (me) {
        if (me && l && typeof me.stack == "string") {
          for (var T = me.stack.split(`
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
        bo = !1, Su.current = h, hl(), Error.prepareStackTrace = c;
      }
      var Z = t ? t.displayName || t.name : "", re = Z ? Ei(Z) : "";
      return typeof t == "function" && _u.set(t, re), re;
    }
    function Eu(t, n, s) {
      return To(t, !0);
    }
    function gr(t, n, s) {
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
        case cn:
          return Ei("Suspense");
        case hr:
          return Ei("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Bn:
            return gr(t.render);
          case Zn:
            return ja(t.type, n, s);
          case jt: {
            var l = t, c = l._payload, h = l._init;
            try {
              return ja(h(c), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Ri = Object.prototype.hasOwnProperty, Co = {}, Es = m.ReactDebugCurrentFrame;
    function Mu(t) {
      if (t) {
        var n = t._owner, s = ja(t.type, t._source, n ? n.type : null);
        Es.setExtraStackFrame(s);
      } else
        Es.setExtraStackFrame(null);
    }
    function kr(t, n, s, l, c) {
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
            T && !(T instanceof Error) && (Mu(c), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", s, x, typeof T), Mu(null)), T instanceof Error && !(T.message in Co) && (Co[T.message] = !0, Mu(c), g("Failed %s type: %s", s, T.message), Mu(null));
          }
      }
    }
    var un = [], Rs;
    Rs = [];
    var Mi = -1;
    function ji(t) {
      return {
        current: t
      };
    }
    function Dn(t, n) {
      if (Mi < 0) {
        g("Unexpected pop.");
        return;
      }
      n !== Rs[Mi] && g("Unexpected Fiber popped."), t.current = un[Mi], un[Mi] = null, Rs[Mi] = null, Mi--;
    }
    function $t(t, n, s) {
      Mi++, un[Mi] = t.current, Rs[Mi] = s, t.current = n;
    }
    var Ia;
    Ia = {};
    var Dt = {};
    Object.freeze(Dt);
    var fn = ji(Dt), tn = ji(!1), ml = Dt;
    function Ii(t, n, s) {
      return s && ai(n) ? ml : fn.current;
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
          return Dt;
        var c = t.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === n)
          return c.__reactInternalMemoizedMaskedChildContext;
        var h = {};
        for (var x in l)
          h[x] = n[x];
        {
          var T = qe(t) || "Unknown";
          kr(l, h, "context", T);
        }
        return c && vl(t, n, h), h;
      }
    }
    function An() {
      return tn.current;
    }
    function ai(t) {
      {
        var n = t.childContextTypes;
        return n != null;
      }
    }
    function gl(t) {
      Dn(tn, t), Dn(fn, t);
    }
    function bu(t) {
      Dn(tn, t), Dn(fn, t);
    }
    function qi(t, n, s) {
      {
        if (fn.current !== Dt)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        $t(fn, n, t), $t(tn, s, t);
      }
    }
    function bi(t, n, s) {
      {
        var l = t.stateNode, c = n.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var h = qe(t) || "Unknown";
            Ia[h] || (Ia[h] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", h, h));
          }
          return s;
        }
        var x = l.getChildContext();
        for (var T in x)
          if (!(T in c))
            throw new Error((qe(t) || "Unknown") + '.getChildContext(): key "' + T + '" is not defined in childContextTypes.');
        {
          var w = qe(t) || "Unknown";
          kr(c, x, "child context", w);
        }
        return R({}, s, x);
      }
    }
    function Yi(t) {
      {
        var n = t.stateNode, s = n && n.__reactInternalMemoizedMergedChildContext || Dt;
        return ml = fn.current, $t(fn, s, t), $t(tn, tn.current, t), !0;
      }
    }
    function Tu(t, n, s) {
      {
        var l = t.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (s) {
          var c = bi(t, n, ml);
          l.__reactInternalMemoizedMergedChildContext = c, Dn(tn, t), Dn(fn, t), $t(fn, c, t), $t(tn, s, t);
        } else
          Dn(tn, t), $t(tn, s, t);
      }
    }
    function wo(t) {
      {
        if (!du(t) || t.tag !== le)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var n = t;
        do {
          switch (n.tag) {
            case pe:
              return n.stateNode.context;
            case le: {
              var s = n.type;
              if (ai(s))
                return n.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          n = n.return;
        } while (n !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ms = 0, tf = 1, lt = (
      /*                         */
      0
    ), Gt = (
      /*                 */
      1
    ), Ft = (
      /*                    */
      2
    ), mn = (
      /*               */
      8
    ), si = (
      /*              */
      16
    ), xl = Math.clz32 ? Math.clz32 : Do, Rd = Math.log, zo = Math.LN2;
    function Do(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (Rd(n) / zo | 0) | 0;
    }
    var Cu = 31, fe = (
      /*                        */
      0
    ), Nn = (
      /*                          */
      0
    ), St = (
      /*                        */
      1
    ), bs = (
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
    ), nf = (
      /*                        */
      128
    ), rf = (
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
    ), af = (
      /*                        */
      16384
    ), sf = (
      /*                       */
      32768
    ), lf = (
      /*                       */
      65536
    ), wu = (
      /*                       */
      131072
    ), zu = (
      /*                       */
      262144
    ), uf = (
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
    ), li = (
      /*                             */
      16777216
    ), ko = (
      /*                             */
      33554432
    ), Cs = (
      /*                             */
      67108864
    ), Ml = Ts, qa = (
      /*          */
      134217728
    ), Au = (
      /*                                 */
      268435455
    ), bl = (
      /*               */
      268435456
    ), Ti = (
      /*                       */
      536870912
    ), en = (
      /*                   */
      1073741824
    );
    function bp(t) {
      {
        if (t & St)
          return "Sync";
        if (t & bs)
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
        if (t & bl)
          return "IdleHydration";
        if (t & Ti)
          return "Idle";
        if (t & en)
          return "Offscreen";
      }
    }
    var rn = -1, $n = El, Hn = Ts;
    function Tl(t) {
      switch (Qi(t)) {
        case St:
          return St;
        case bs:
          return bs;
        case va:
          return va;
        case ya:
          return ya;
        case Wi:
          return Wi;
        case Sl:
          return Sl;
        case El:
        case nf:
        case rf:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case Rl:
        case af:
        case sf:
        case lf:
        case wu:
        case zu:
        case uf:
        case Uo:
        case Lo:
          return t & _l;
        case Ts:
        case Bo:
        case li:
        case ko:
        case Cs:
          return t & Du;
        case qa:
          return qa;
        case bl:
          return bl;
        case Ti:
          return Ti;
        case en:
          return en;
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
        for (var re = t.entanglements, me = l & Z; me > 0; ) {
          var xe = ga(me), Ze = 1 << xe;
          l |= re[xe], me &= ~Ze;
        }
      return l;
    }
    function Md(t, n) {
      for (var s = t.eventTimes, l = rn; n > 0; ) {
        var c = ga(n), h = 1 << c, x = s[c];
        x > l && (l = x), n &= ~h;
      }
      return l;
    }
    function bd(t, n) {
      switch (t) {
        case St:
        case bs:
        case va:
          return n + 250;
        case ya:
        case Wi:
        case Sl:
        case El:
        case nf:
        case rf:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case Rl:
        case af:
        case sf:
        case lf:
        case wu:
        case zu:
        case uf:
        case Uo:
        case Lo:
          return n + 5e3;
        case Ts:
        case Bo:
        case li:
        case ko:
        case Cs:
          return rn;
        case qa:
        case bl:
        case Ti:
        case en:
          return rn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), rn;
      }
    }
    function Td(t, n) {
      for (var s = t.pendingLanes, l = t.suspendedLanes, c = t.pingedLanes, h = t.expirationTimes, x = s; x > 0; ) {
        var T = ga(x), w = 1 << T, N = h[T];
        N === rn ? ((w & l) === fe || (w & c) !== fe) && (h[T] = bd(w, n)) : N <= n && (t.expiredLanes |= w), x &= ~w;
      }
    }
    function of(t) {
      return Tl(t.pendingLanes);
    }
    function Ho(t) {
      var n = t.pendingLanes & ~en;
      return n !== fe ? n : n & en ? en : fe;
    }
    function cf(t) {
      return (t & St) !== fe;
    }
    function Po(t) {
      return (t & Au) !== fe;
    }
    function ff(t) {
      return (t & Du) === t;
    }
    function Vo(t) {
      return (t & _l) === t;
    }
    function ws(t, n) {
      var s = bs | va | ya | Wi;
      return (n & s) !== fe;
    }
    function Cd(t, n) {
      return (n & t.expiredLanes) !== fe;
    }
    function jo(t) {
      return (t & _l) !== 0;
    }
    function wd() {
      var t = $n;
      return $n <<= 1, $n & _l || ($n = El), t;
    }
    function zd() {
      var t = Hn;
      return Hn <<= 1, Hn & Du || (Hn = Ts), t;
    }
    function Qi(t) {
      return t & -t;
    }
    function Cl(t) {
      return Qi(t);
    }
    function ga(t) {
      return 31 - xl(t);
    }
    function Io(t) {
      return ga(t);
    }
    function vn(t, n) {
      return (t & n) !== fe;
    }
    function wl(t, n) {
      return (t & n) === n;
    }
    function ct(t, n) {
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
    function Ae(t, n) {
      return t !== Nn && t < n ? t : n;
    }
    function zl(t) {
      for (var n = [], s = 0; s < Cu; s++)
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
        s[c] = rn, l &= ~h;
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
        l[T] = fe, c[T] = rn, h[T] = rn, x &= ~w;
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
    function df(t, n) {
      var s = Qi(n), l;
      switch (s) {
        case va:
          l = bs;
          break;
        case Wi:
          l = ya;
          break;
        case El:
        case nf:
        case rf:
        case Ao:
        case No:
        case Fo:
        case Oo:
        case Rl:
        case af:
        case sf:
        case lf:
        case wu:
        case zu:
        case uf:
        case Uo:
        case Lo:
        case Ts:
        case Bo:
        case li:
        case ko:
        case Cs:
          l = Sl;
          break;
        case Ti:
          l = bl;
          break;
        default:
          l = Nn;
          break;
      }
      return (l & (t.suspendedLanes | n)) !== Nn ? Nn : l;
    }
    function hf(t, n, s) {
      if (xr)
        for (var l = t.pendingUpdatersLaneMap; s > 0; ) {
          var c = Io(s), h = 1 << c, x = l[c];
          x.add(n), s &= ~h;
        }
    }
    function pf(t, n) {
      if (xr)
        for (var s = t.pendingUpdatersLaneMap, l = t.memoizedUpdaters; n > 0; ) {
          var c = Io(n), h = 1 << c, x = s[c];
          x.size > 0 && (x.forEach(function(T) {
            var w = T.alternate;
            (w === null || !l.has(w)) && l.add(T);
          }), x.clear()), n &= ~h;
        }
    }
    var Ci = St, Dl = va, Al = Wi, qo = Ti, Fs = Nn;
    function Hr() {
      return Fs;
    }
    function Fn(t) {
      Fs = t;
    }
    function mf(t, n) {
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
    function vf(t) {
      var n = Qi(t);
      return Nd(Ci, n) ? Nd(Dl, n) ? Po(n) ? Al : qo : Dl : Ci;
    }
    var yf = d.unstable_scheduleCallback, Fd = d.unstable_cancelCallback, Od = d.unstable_shouldYield, Wo = d.unstable_requestPaint, yn = d.unstable_now, Os = d.unstable_ImmediatePriority, Fu = d.unstable_UserBlockingPriority, xa = d.unstable_NormalPriority, Nl = d.unstable_IdlePriority, gf = d.unstable_yieldValue, xf = d.unstable_setDisableYieldValue, Wa = null, In = null, ze = null, Gi = !1, xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Sf(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (n.isDisabled)
        return !0;
      if (!n.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ue && (t = R({}, t, {
          getLaneLabelMap: Fl,
          injectProfilingHooks: Pr
        })), Wa = n.inject(t), In = n;
      } catch (s) {
        g("React instrumentation encountered an error: %s.", s);
      }
      return !!n.checkDCE;
    }
    function gn(t, n) {
      if (In && typeof In.onScheduleFiberRoot == "function")
        try {
          In.onScheduleFiberRoot(Wa, t, n);
        } catch (s) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", s));
        }
    }
    function pt(t, n) {
      if (In && typeof In.onCommitFiberRoot == "function")
        try {
          var s = (t.current.flags & Mt) === Mt;
          if (de) {
            var l;
            switch (n) {
              case Ci:
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
            In.onCommitFiberRoot(Wa, t, l, s);
          }
        } catch (c) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", c));
        }
    }
    function bn(t) {
      if (In && typeof In.onPostCommitFiberRoot == "function")
        try {
          In.onPostCommitFiberRoot(Wa, t);
        } catch (n) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", n));
        }
    }
    function Tn(t) {
      if (In && typeof In.onCommitFiberUnmount == "function")
        try {
          In.onCommitFiberUnmount(Wa, t);
        } catch (n) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", n));
        }
    }
    function At(t) {
      if (typeof gf == "function" && (xf(t), b(t)), In && typeof In.setStrictMode == "function")
        try {
          In.setStrictMode(Wa, t);
        } catch (n) {
          Gi || (Gi = !0, g("React instrumentation encountered an error: %s", n));
        }
    }
    function Pr(t) {
      ze = t;
    }
    function Fl() {
      {
        for (var t = /* @__PURE__ */ new Map(), n = 1, s = 0; s < Cu; s++) {
          var l = bp(n);
          t.set(n, l), n *= 2;
        }
        return t;
      }
    }
    function On(t) {
      ze !== null && typeof ze.markCommitStarted == "function" && ze.markCommitStarted(t);
    }
    function Ol() {
      ze !== null && typeof ze.markCommitStopped == "function" && ze.markCommitStopped();
    }
    function Xi(t) {
      ze !== null && typeof ze.markComponentRenderStarted == "function" && ze.markComponentRenderStarted(t);
    }
    function Sa() {
      ze !== null && typeof ze.markComponentRenderStopped == "function" && ze.markComponentRenderStopped();
    }
    function _f(t) {
      ze !== null && typeof ze.markComponentPassiveEffectMountStarted == "function" && ze.markComponentPassiveEffectMountStarted(t);
    }
    function Ou() {
      ze !== null && typeof ze.markComponentPassiveEffectMountStopped == "function" && ze.markComponentPassiveEffectMountStopped();
    }
    function Sr(t) {
      ze !== null && typeof ze.markComponentPassiveEffectUnmountStarted == "function" && ze.markComponentPassiveEffectUnmountStarted(t);
    }
    function Ef() {
      ze !== null && typeof ze.markComponentPassiveEffectUnmountStopped == "function" && ze.markComponentPassiveEffectUnmountStopped();
    }
    function Rf(t) {
      ze !== null && typeof ze.markComponentLayoutEffectMountStarted == "function" && ze.markComponentLayoutEffectMountStarted(t);
    }
    function Ul() {
      ze !== null && typeof ze.markComponentLayoutEffectMountStopped == "function" && ze.markComponentLayoutEffectMountStopped();
    }
    function Uu(t) {
      ze !== null && typeof ze.markComponentLayoutEffectUnmountStarted == "function" && ze.markComponentLayoutEffectUnmountStarted(t);
    }
    function Qo() {
      ze !== null && typeof ze.markComponentLayoutEffectUnmountStopped == "function" && ze.markComponentLayoutEffectUnmountStopped();
    }
    function Qa(t, n, s) {
      ze !== null && typeof ze.markComponentErrored == "function" && ze.markComponentErrored(t, n, s);
    }
    function Go(t, n, s) {
      ze !== null && typeof ze.markComponentSuspended == "function" && ze.markComponentSuspended(t, n, s);
    }
    function Ga(t) {
      ze !== null && typeof ze.markLayoutEffectsStarted == "function" && ze.markLayoutEffectsStarted(t);
    }
    function Xo() {
      ze !== null && typeof ze.markLayoutEffectsStopped == "function" && ze.markLayoutEffectsStopped();
    }
    function Lu(t) {
      ze !== null && typeof ze.markPassiveEffectsStarted == "function" && ze.markPassiveEffectsStarted(t);
    }
    function Mf() {
      ze !== null && typeof ze.markPassiveEffectsStopped == "function" && ze.markPassiveEffectsStopped();
    }
    function Bu(t) {
      ze !== null && typeof ze.markRenderStarted == "function" && ze.markRenderStarted(t);
    }
    function Zo() {
      ze !== null && typeof ze.markRenderYielded == "function" && ze.markRenderYielded();
    }
    function er() {
      ze !== null && typeof ze.markRenderStopped == "function" && ze.markRenderStopped();
    }
    function Xa(t) {
      ze !== null && typeof ze.markRenderScheduled == "function" && ze.markRenderScheduled(t);
    }
    function ui(t, n) {
      ze !== null && typeof ze.markForceUpdateScheduled == "function" && ze.markForceUpdateScheduled(t, n);
    }
    function Ll(t, n) {
      ze !== null && typeof ze.markStateUpdateScheduled == "function" && ze.markStateUpdateScheduled(t, n);
    }
    function _r(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var Vr = typeof Object.is == "function" ? Object.is : _r, wi = null, ku = !1, bf = !1;
    function _a(t) {
      wi === null ? wi = [t] : wi.push(t);
    }
    function Ud(t) {
      ku = !0, _a(t);
    }
    function Tf() {
      ku && oi();
    }
    function oi() {
      if (!bf && wi !== null) {
        bf = !0;
        var t = 0, n = Hr();
        try {
          var s = !0, l = wi;
          for (Fn(Ci); t < l.length; t++) {
            var c = l[t];
            do
              c = c(s);
            while (c !== null);
          }
          wi = null, ku = !1;
        } catch (h) {
          throw wi !== null && (wi = wi.slice(t + 1)), yf(Os, oi), h;
        } finally {
          Fn(n), bf = !1;
        }
      }
      return null;
    }
    function Za(t) {
      var n = t.current.memoizedState;
      return n.isDehydrated;
    }
    var Ld = m.ReactCurrentBatchConfig, Bd = null;
    function Cf() {
      return Ld.transition;
    }
    function Us(t, n) {
      if (Vr(t, n))
        return !0;
      if (typeof t != "object" || t === null || typeof n != "object" || n === null)
        return !1;
      var s = Object.keys(t), l = Object.keys(n);
      if (s.length !== l.length)
        return !1;
      for (var c = 0; c < s.length; c++) {
        var h = s[c];
        if (!Ri.call(n, h) || !Vr(t[h], n[h]))
          return !1;
      }
      return !0;
    }
    function Cp(t) {
      switch (t._debugOwner && t._debugOwner.type, t._debugSource, t.tag) {
        case Ee:
          return Ei(t.type);
        case Pe:
          return Ei("Lazy");
        case K:
          return Ei("Suspense");
        case ke:
          return Ei("SuspenseList");
        case ce:
        case Je:
        case V:
          return gr(t.type);
        case k:
          return gr(t.type.render);
        case le:
          return Eu(t.type);
        default:
          return "";
      }
    }
    function kd(t) {
      try {
        var n = "", s = t;
        do
          n += Cp(s), s = s.return;
        while (s);
        return n;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    var wf = m.ReactDebugCurrentFrame, jr = null, zi = !1;
    function wp() {
      {
        if (jr === null)
          return null;
        var t = jr._debugOwner;
        if (t !== null && typeof t < "u")
          return qe(t);
      }
      return null;
    }
    function Ls() {
      return jr === null ? "" : kd(jr);
    }
    function qn() {
      wf.getCurrentStack = null, jr = null, zi = !1;
    }
    function kt(t) {
      wf.getCurrentStack = Ls, jr = t, zi = !1;
    }
    function Zi(t) {
      zi = t;
    }
    var ci = {
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
          s.mode & mn && (n = s), s = s.return;
        return n;
      }, Bs = function(t) {
        var n = [];
        return t.forEach(function(s) {
          n.push(s);
        }), n.sort().join(", ");
      }, Bl = [], kl = [], Hu = [], tr = [], ks = [], Pu = [], Er = /* @__PURE__ */ new Set();
      ci.recordUnsafeLifecycleWarnings = function(t, n) {
        Er.has(t.type) || (typeof n.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        n.componentWillMount.__suppressDeprecationWarning !== !0 && Bl.push(t), t.mode & mn && typeof n.UNSAFE_componentWillMount == "function" && kl.push(t), typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Hu.push(t), t.mode & mn && typeof n.UNSAFE_componentWillReceiveProps == "function" && tr.push(t), typeof n.componentWillUpdate == "function" && n.componentWillUpdate.__suppressDeprecationWarning !== !0 && ks.push(t), t.mode & mn && typeof n.UNSAFE_componentWillUpdate == "function" && Pu.push(t));
      }, ci.flushPendingUnsafeLifecycleWarnings = function() {
        var t = /* @__PURE__ */ new Set();
        Bl.length > 0 && (Bl.forEach(function(Z) {
          t.add(qe(Z) || "Component"), Er.add(Z.type);
        }), Bl = []);
        var n = /* @__PURE__ */ new Set();
        kl.length > 0 && (kl.forEach(function(Z) {
          n.add(qe(Z) || "Component"), Er.add(Z.type);
        }), kl = []);
        var s = /* @__PURE__ */ new Set();
        Hu.length > 0 && (Hu.forEach(function(Z) {
          s.add(qe(Z) || "Component"), Er.add(Z.type);
        }), Hu = []);
        var l = /* @__PURE__ */ new Set();
        tr.length > 0 && (tr.forEach(function(Z) {
          l.add(qe(Z) || "Component"), Er.add(Z.type);
        }), tr = []);
        var c = /* @__PURE__ */ new Set();
        ks.length > 0 && (ks.forEach(function(Z) {
          c.add(qe(Z) || "Component"), Er.add(Z.type);
        }), ks = []);
        var h = /* @__PURE__ */ new Set();
        if (Pu.length > 0 && (Pu.forEach(function(Z) {
          h.add(qe(Z) || "Component"), Er.add(Z.type);
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
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
        if (s.size > 0) {
          var U = Bs(s);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
        if (c.size > 0) {
          var I = Bs(c);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var Hs = /* @__PURE__ */ new Map(), Ja = /* @__PURE__ */ new Set();
      ci.recordLegacyContextWarning = function(t, n) {
        var s = zp(t);
        if (s === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Ja.has(t.type)) {
          var l = Hs.get(s);
          (t.type.contextTypes != null || t.type.childContextTypes != null || n !== null && typeof n.getChildContext == "function") && (l === void 0 && (l = [], Hs.set(s, l)), l.push(t));
        }
      }, ci.flushLegacyContextWarning = function() {
        Hs.forEach(function(t, n) {
          if (t.length !== 0) {
            var s = t[0], l = /* @__PURE__ */ new Set();
            t.forEach(function(h) {
              l.add(qe(h) || "Component"), Ja.add(h.type);
            });
            var c = Bs(l);
            try {
              kt(s), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, c);
            } finally {
              qn();
            }
          }
        });
      }, ci.discardPendingWarnings = function() {
        Bl = [], kl = [], Hu = [], tr = [], ks = [], Pu = [], Hs = /* @__PURE__ */ new Map();
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
    function fi(t, n) {
      if (t && t.defaultProps) {
        var s = R({}, n), l = t.defaultProps;
        for (var c in l)
          s[c] === void 0 && (s[c] = l[c]);
        return s;
      }
      return n;
    }
    var Iu = ji(null), Hl;
    Hl = {};
    var Pl = null, Vl = null, zf = null, r = !1;
    function i() {
      Pl = null, Vl = null, zf = null, r = !1;
    }
    function o() {
      r = !0;
    }
    function f() {
      r = !1;
    }
    function p(t, n, s) {
      xi ? ($t(Iu, n._currentValue, t), n._currentValue = s, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== Hl && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = Hl) : ($t(Iu, n._currentValue2, t), n._currentValue2 = s, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== Hl && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = Hl);
    }
    function S(t, n) {
      var s = Iu.current;
      Dn(Iu, n), xi ? t._currentValue = s : t._currentValue2 = s;
    }
    function A(t, n, s) {
      for (var l = t; l !== null; ) {
        var c = l.alternate;
        if (wl(l.childLanes, n) ? c !== null && !wl(c.childLanes, n) && (c.childLanes = ct(c.childLanes, n)) : (l.childLanes = ct(l.childLanes, n), c !== null && (c.childLanes = ct(c.childLanes, n))), l === s)
          break;
        l = l.return;
      }
      l !== s && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function H(t, n, s) {
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
              if (l.tag === le) {
                var T = Cl(s), w = et(rn, T);
                w.tag = ar;
                var N = l.updateQueue;
                if (N !== null) {
                  var U = N.shared, I = U.pending;
                  I === null ? w.next = w : (w.next = I.next, I.next = w), U.pending = w;
                }
              }
              l.lanes = ct(l.lanes, s);
              var Z = l.alternate;
              Z !== null && (Z.lanes = ct(Z.lanes, s)), A(l.return, s, t), h.lanes = ct(h.lanes, s);
              break;
            }
            x = x.next;
          }
        } else if (l.tag === ve)
          c = l.type === t.type ? null : l.child;
        else if (l.tag === Ve) {
          var re = l.return;
          if (re === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          re.lanes = ct(re.lanes, s);
          var me = re.alternate;
          me !== null && (me.lanes = ct(me.lanes, s)), A(re, s, t), c = l.sibling;
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
            var xe = c.sibling;
            if (xe !== null) {
              xe.return = c.return, c = xe;
              break;
            }
            c = c.return;
          }
        l = c;
      }
    }
    function ye(t, n) {
      Pl = t, Vl = null, zf = null;
      var s = t.dependencies;
      if (s !== null) {
        var l = s.firstContext;
        l !== null && (vn(s.lanes, n) && Eh(), s.firstContext = null);
      }
    }
    function Re(t) {
      r && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var n = xi ? t._currentValue : t._currentValue2;
      if (zf !== t) {
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
    function Ke(t) {
      rt === null ? rt = [t] : rt.push(t);
    }
    function nn() {
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
    var Ye = 0, Yn = 1, ar = 2, Y = 3, P = !1, X, De;
    X = !1, De = null;
    function je(t) {
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
    function ft(t, n) {
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
    function et(t, n) {
      var s = {
        eventTime: t,
        lane: n,
        tag: Ye,
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
          h === null ? (n.next = n, Ke(c)) : (n.next = h.next, h.next = n), c.interleaved = n;
        } else {
          var x = c.pending;
          x === null ? n.next = n : (n.next = x.next, x.next = n), c.pending = n;
        }
        De === c && !X && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), X = !0);
      }
    }
    function xn(t, n, s) {
      var l = n.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (jo(s)) {
          var h = c.lanes;
          h = Ya(h, t.pendingLanes);
          var x = ct(h, s);
          c.lanes = x, Ns(t, x);
        }
      }
    }
    function Nt(t, n) {
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
        case Yn: {
          var x = s.payload;
          if (typeof x == "function") {
            o();
            var T = x.call(h, l, c);
            {
              if (t.mode & mn) {
                At(!0);
                try {
                  x.call(h, l, c);
                } finally {
                  At(!1);
                }
              }
              f();
            }
            return T;
          }
          return x;
        }
        case Y:
          t.flags = t.flags & ~Jn | Mt;
        case Ye: {
          var w = s.payload, N;
          if (typeof w == "function") {
            o(), N = w.call(h, l, c);
            {
              if (t.mode & mn) {
                At(!0);
                try {
                  w.call(h, l, c);
                } finally {
                  At(!1);
                }
              }
              f();
            }
          } else
            N = w;
          return N == null ? l : R({}, l, N);
        }
        case ar:
          return P = !0, l;
      }
      return l;
    }
    function Ko(t, n, s, l) {
      var c = t.updateQueue;
      P = !1, De = c.shared;
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
        var re = c.baseState, me = fe, xe = null, Ze = null, dt = null, tt = h;
        do {
          var dn = tt.lane, hn = tt.eventTime;
          if (wl(l, dn)) {
            if (dt !== null) {
              var ie = {
                eventTime: hn,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nn,
                tag: tt.tag,
                payload: tt.payload,
                callback: tt.callback,
                next: null
              };
              dt = dt.next = ie;
            }
            re = Ka(t, c, tt, re, n, s);
            var q = tt.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            tt.lane !== Nn) {
              t.flags |= ou;
              var _e = c.effects;
              _e === null ? c.effects = [tt] : _e.push(tt);
            }
          } else {
            var Q = {
              eventTime: hn,
              lane: dn,
              tag: tt.tag,
              payload: tt.payload,
              callback: tt.callback,
              next: null
            };
            dt === null ? (Ze = dt = Q, xe = re) : dt = dt.next = Q, me = ct(me, dn);
          }
          if (tt = tt.next, tt === null) {
            if (T = c.shared.pending, T === null)
              break;
            var We = T, Be = We.next;
            We.next = null, tt = Be, c.lastBaseUpdate = We, c.shared.pending = null;
          }
        } while (!0);
        dt === null && (xe = re), c.baseState = xe, c.firstBaseUpdate = Ze, c.lastBaseUpdate = dt;
        var wt = c.shared.interleaved;
        if (wt !== null) {
          var Xt = wt;
          do
            me = ct(me, Xt.lane), Xt = Xt.next;
          while (Xt !== wt);
        } else h === null && (c.shared.lanes = fe);
        Yh(me), t.lanes = me, t.memoizedState = re;
      }
      De = null;
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
      var My = /* @__PURE__ */ new Set();
      Vd = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var s = n + "_" + t;
          My.has(s) || (My.add(s), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, Ry = function(t, n) {
        if (n === void 0) {
          var s = Ue(t) || "Component";
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
        if (t.mode & mn) {
          At(!0);
          try {
            h = s(l, c);
          } finally {
            At(!1);
          }
        }
        Ry(n, h);
      }
      var x = h == null ? c : R({}, c, h);
      if (t.memoizedState = x, t.lanes === fe) {
        var T = t.updateQueue;
        T.baseState = x;
      }
    }
    var Vp = {
      isMounted: Ic,
      enqueueSetState: function(t, n, s) {
        var l = C(t), c = qr(), h = Xl(l), x = et(c, h);
        x.payload = n, s != null && (Vd(s, "setState"), x.callback = s), mt(l, x);
        var T = Xn(l, h, c);
        T !== null && xn(T, l, h), Ll(l, h);
      },
      enqueueReplaceState: function(t, n, s) {
        var l = C(t), c = qr(), h = Xl(l), x = et(c, h);
        x.tag = Yn, x.payload = n, s != null && (Vd(s, "replaceState"), x.callback = s), mt(l, x);
        var T = Xn(l, h, c);
        T !== null && xn(T, l, h), Ll(l, h);
      },
      enqueueForceUpdate: function(t, n) {
        var s = C(t), l = qr(), c = Xl(s), h = et(l, c);
        h.tag = ar, n != null && (Vd(n, "forceUpdate"), h.callback = n), mt(s, h);
        var x = Xn(s, c, l);
        x !== null && xn(x, s, c), ui(s, c);
      }
    };
    function by(t, n, s, l, c, h, x) {
      var T = t.stateNode;
      if (typeof T.shouldComponentUpdate == "function") {
        var w = T.shouldComponentUpdate(l, h, x);
        {
          if (t.mode & mn) {
            At(!0);
            try {
              w = T.shouldComponentUpdate(l, h, x);
            } finally {
              At(!1);
            }
          }
          w === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ue(n) || "Component");
        }
        return w;
      }
      return n.prototype && n.prototype.isPureReactComponent ? !Us(s, l) || !Us(c, h) : !0;
    }
    function G1(t, n, s) {
      var l = t.stateNode;
      {
        var c = Ue(n) || "Component", h = l.render;
        h || (n.prototype && typeof n.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), l.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), l.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), l.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), n.contextType && n.contextTypes && !kp.has(n) && (kp.add(n), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof l.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), n.prototype && n.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ue(n) || "A pure component"), typeof l.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof l.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof l.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof l.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var x = l.props !== s;
        l.props !== void 0 && x && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), l.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !Op.has(n) && (Op.add(n), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ue(n))), typeof l.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof l.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof n.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var T = l.state;
        T && (typeof T != "object" || Qt(T)) && g("%s.state: must be set to an object or null", c), typeof l.getChildContext == "function" && typeof n.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function Ty(t, n) {
      n.updater = Vp, t.stateNode = n, z(n, t), n._reactInternalInstance = Ap;
    }
    function Cy(t, n, s) {
      var l = !1, c = Dt, h = Dt, x = n.contextType;
      if ("contextType" in n) {
        var T = (
          // Allow null for conditional declaration
          x === null || x !== void 0 && x.$$typeof === dr && x._context === void 0
        );
        if (!T && !Hp.has(n)) {
          Hp.add(n);
          var w = "";
          x === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof x != "object" ? w = " However, it is set to a " + typeof x + "." : x.$$typeof === Jt ? w = " Did you accidentally pass the Context.Provider instead?" : x._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(x).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ue(n) || "Component", w);
        }
      }
      if (typeof x == "object" && x !== null)
        h = Re(x);
      else {
        c = Ii(t, n, !0);
        var N = n.contextTypes;
        l = N != null, h = l ? yl(t, c) : Dt;
      }
      var U = new n(s, h);
      if (t.mode & mn) {
        At(!0);
        try {
          U = new n(s, h);
        } finally {
          At(!1);
        }
      }
      var I = t.memoizedState = U.state !== null && U.state !== void 0 ? U.state : null;
      Ty(t, U);
      {
        if (typeof n.getDerivedStateFromProps == "function" && I === null) {
          var Z = Ue(n) || "Component";
          Fp.has(Z) || (Fp.add(Z), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Z, U.state === null ? "null" : "undefined", Z));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof U.getSnapshotBeforeUpdate == "function") {
          var re = null, me = null, xe = null;
          if (typeof U.componentWillMount == "function" && U.componentWillMount.__suppressDeprecationWarning !== !0 ? re = "componentWillMount" : typeof U.UNSAFE_componentWillMount == "function" && (re = "UNSAFE_componentWillMount"), typeof U.componentWillReceiveProps == "function" && U.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? me = "componentWillReceiveProps" : typeof U.UNSAFE_componentWillReceiveProps == "function" && (me = "UNSAFE_componentWillReceiveProps"), typeof U.componentWillUpdate == "function" && U.componentWillUpdate.__suppressDeprecationWarning !== !0 ? xe = "componentWillUpdate" : typeof U.UNSAFE_componentWillUpdate == "function" && (xe = "UNSAFE_componentWillUpdate"), re !== null || me !== null || xe !== null) {
            var Ze = Ue(n) || "Component", dt = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Up.has(Ze) || (Up.add(Ze), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ze, dt, re !== null ? `
  ` + re : "", me !== null ? `
  ` + me : "", xe !== null ? `
  ` + xe : ""));
          }
        }
      }
      return l && vl(t, c, h), U;
    }
    function X1(t, n) {
      var s = n.state;
      typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), s !== n.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(t) || "Component"), Vp.enqueueReplaceState(n, n.state, null));
    }
    function wy(t, n, s, l) {
      var c = n.state;
      if (typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, l), n.state !== c) {
        {
          var h = qe(t) || "Component";
          Np.has(h) || (Np.add(h), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", h));
        }
        Vp.enqueueReplaceState(n, n.state, null);
      }
    }
    function jp(t, n, s, l) {
      G1(t, n, s);
      var c = t.stateNode;
      c.props = s, c.state = t.memoizedState, c.refs = Ey, je(t);
      var h = n.contextType;
      if (typeof h == "object" && h !== null)
        c.context = Re(h);
      else {
        var x = Ii(t, n, !0);
        c.context = yl(t, x);
      }
      {
        if (c.state === s) {
          var T = Ue(n) || "Component";
          Bp.has(T) || (Bp.add(T), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", T));
        }
        t.mode & mn && ci.recordLegacyContextWarning(t, c), ci.recordUnsafeLifecycleWarnings(t, c);
      }
      c.state = t.memoizedState;
      var w = n.getDerivedStateFromProps;
      if (typeof w == "function" && (Pp(t, n, w, s), c.state = t.memoizedState), typeof n.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (X1(t, c), Ko(t, s, c, l), c.state = t.memoizedState), typeof c.componentDidMount == "function") {
        var N = gt;
        N |= oa, (t.mode & si) !== lt && (N |= gi), t.flags |= N;
      }
    }
    function Z1(t, n, s, l) {
      var c = t.stateNode, h = t.memoizedProps;
      c.props = h;
      var x = c.context, T = n.contextType, w = Dt;
      if (typeof T == "object" && T !== null)
        w = Re(T);
      else {
        var N = Ii(t, n, !0);
        w = yl(t, N);
      }
      var U = n.getDerivedStateFromProps, I = typeof U == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !I && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (h !== s || x !== w) && wy(t, c, s, w), Sy();
      var Z = t.memoizedState, re = c.state = Z;
      if (Ko(t, s, c, l), re = t.memoizedState, h === s && Z === re && !An() && !Pd()) {
        if (typeof c.componentDidMount == "function") {
          var me = gt;
          me |= oa, (t.mode & si) !== lt && (me |= gi), t.flags |= me;
        }
        return !1;
      }
      typeof U == "function" && (Pp(t, n, U, s), re = t.memoizedState);
      var xe = Pd() || by(t, n, h, s, Z, re, w);
      if (xe) {
        if (!I && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var Ze = gt;
          Ze |= oa, (t.mode & si) !== lt && (Ze |= gi), t.flags |= Ze;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var dt = gt;
          dt |= oa, (t.mode & si) !== lt && (dt |= gi), t.flags |= dt;
        }
        t.memoizedProps = s, t.memoizedState = re;
      }
      return c.props = s, c.state = re, c.context = w, xe;
    }
    function J1(t, n, s, l, c) {
      var h = n.stateNode;
      ft(t, n);
      var x = n.memoizedProps, T = n.type === n.elementType ? x : fi(n.type, x);
      h.props = T;
      var w = n.pendingProps, N = h.context, U = s.contextType, I = Dt;
      if (typeof U == "object" && U !== null)
        I = Re(U);
      else {
        var Z = Ii(n, s, !0);
        I = yl(n, Z);
      }
      var re = s.getDerivedStateFromProps, me = typeof re == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      !me && (typeof h.UNSAFE_componentWillReceiveProps == "function" || typeof h.componentWillReceiveProps == "function") && (x !== w || N !== I) && wy(n, h, l, I), Sy();
      var xe = n.memoizedState, Ze = h.state = xe;
      if (Ko(n, l, h, c), Ze = n.memoizedState, x === w && xe === Ze && !An() && !Pd() && !B)
        return typeof h.componentDidUpdate == "function" && (x !== t.memoizedProps || xe !== t.memoizedState) && (n.flags |= gt), typeof h.getSnapshotBeforeUpdate == "function" && (x !== t.memoizedProps || xe !== t.memoizedState) && (n.flags |= Ar), !1;
      typeof re == "function" && (Pp(n, s, re, l), Ze = n.memoizedState);
      var dt = Pd() || by(n, s, T, l, xe, Ze, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      B;
      return dt ? (!me && (typeof h.UNSAFE_componentWillUpdate == "function" || typeof h.componentWillUpdate == "function") && (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, Ze, I), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(l, Ze, I)), typeof h.componentDidUpdate == "function" && (n.flags |= gt), typeof h.getSnapshotBeforeUpdate == "function" && (n.flags |= Ar)) : (typeof h.componentDidUpdate == "function" && (x !== t.memoizedProps || xe !== t.memoizedState) && (n.flags |= gt), typeof h.getSnapshotBeforeUpdate == "function" && (x !== t.memoizedProps || xe !== t.memoizedState) && (n.flags |= Ar), n.memoizedProps = l, n.memoizedState = Ze), h.props = l, h.state = Ze, h.context = I, dt;
    }
    var $o = [], ec = 0, jd = null, Id = 0, Ji = [], Ki = 0, qu = null, Ps = 1, Vs = "";
    function K1(t) {
      return Wu(), (t.flags & fo) !== Se;
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
        var N = h - h % 5, U = (1 << N) - 1, I = (x & U).toString(32), Z = x >> N, re = h - N, me = qd(n) + re, xe = T << re, Ze = xe | Z, dt = I + c;
        Ps = 1 << me | Ze, Vs = dt;
      } else {
        var tt = T << h, dn = tt | x, hn = c;
        Ps = 1 << w | dn, Vs = hn;
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
      Rr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var sr = null, $i = null, Ea = !1, Qu = !1, jl = null;
    function iS() {
      Ea && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aS() {
      Qu = !0;
    }
    function sS(t) {
      if (!zn)
        return !1;
      var n = t.stateNode.containerInfo;
      return $i = _i(n), sr = t, Ea = !0, jl = null, Qu = !1, !0;
    }
    function lS(t, n, s) {
      return zn ? ($i = ul(n), sr = t, Ea = !0, jl = null, Qu = !1, s !== null && rS(t, s), !0) : !1;
    }
    function Dy(t, n) {
      switch (t.tag) {
        case pe:
          fl(t.stateNode.containerInfo, n);
          break;
        case Ee:
          Eo(t.type, t.memoizedProps, t.stateNode, n);
          break;
        case K:
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
      l === null ? (t.deletions = [s], t.flags |= mr) : l.push(s);
    }
    function Yp(t, n) {
      {
        if (Qu)
          return;
        switch (t.tag) {
          case pe: {
            var s = t.stateNode.containerInfo;
            switch (n.tag) {
              case Ee:
                var l = n.type, c = n.pendingProps;
                ni(s, l, c);
                break;
              case he:
                var h = n.pendingProps;
                ri(s, h);
                break;
              case K:
                xs(s);
                break;
            }
            break;
          }
          case Ee: {
            var x = t.type, T = t.memoizedProps, w = t.stateNode;
            switch (n.tag) {
              case Ee:
                var N = n.type, U = n.pendingProps;
                Ed(x, T, w, N, U);
                break;
              case he:
                var I = n.pendingProps;
                Zc(x, T, w, I);
                break;
              case K:
                Jc(x, T, w);
                break;
            }
            break;
          }
          case K: {
            var Z = t.memoizedState, re = Z.dehydrated;
            if (re !== null) switch (n.tag) {
              case Ee:
                var me = n.type, xe = n.pendingProps;
                pa(re, me, xe);
                break;
              case he:
                var Ze = n.pendingProps;
                ma(re, Ze);
                break;
              case K:
                Ss(re);
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
      n.flags = n.flags & ~ir | qt, Yp(t, n);
    }
    function Fy(t, n) {
      switch (t.tag) {
        case Ee: {
          var s = t.type, l = t.pendingProps, c = Ut(n, s, l);
          return c !== null ? (t.stateNode = c, sr = t, $i = Lr(c), !0) : !1;
        }
        case he: {
          var h = t.pendingProps, x = Lt(n, h);
          return x !== null ? (t.stateNode = x, sr = t, $i = null, !0) : !1;
        }
        case K: {
          {
            var T = xt(n);
            if (T !== null) {
              var w = {
                dehydrated: T,
                treeContext: nS(),
                retryLane: en
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
      return (t.mode & Gt) !== lt && (t.flags & Mt) === Se;
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
      if (!zn)
        throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var l = t.stateNode, c = !Qu, h = yu(l, t.type, t.memoizedProps, n, s, t, c);
      return t.updateQueue = h, h !== null;
    }
    function oS(t) {
      if (!zn)
        throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode, s = t.memoizedProps, l = !Qu, c = ol(n, s, t, l);
      if (c) {
        var h = sr;
        if (h !== null) {
          var x = (h.mode & Gt) !== lt;
          switch (h.tag) {
            case pe: {
              var T = h.stateNode.containerInfo;
              Xc(
                T,
                n,
                s,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
            case Ee: {
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
      if (!zn)
        throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.memoizedState, s = n !== null ? n.dehydrated : null;
      if (!s)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      gu(s, t);
    }
    function fS(t) {
      if (!zn)
        throw new Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.memoizedState, s = n !== null ? n.dehydrated : null;
      if (!s)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return go(s);
    }
    function Oy(t) {
      for (var n = t.return; n !== null && n.tag !== Ee && n.tag !== pe && n.tag !== K; )
        n = n.return;
      sr = n;
    }
    function Df(t) {
      if (!zn || t !== sr)
        return !1;
      if (!Ea)
        return Oy(t), Ea = !0, !1;
      if (t.tag !== pe && (t.tag !== Ee || _d(t.type) && !il(t.type, t.memoizedProps))) {
        var n = $i;
        if (n)
          if (Wp(t))
            Uy(t), Qp();
          else
            for (; n; )
              Ay(t, n), n = Vi(n);
      }
      return Oy(t), t.tag === K ? $i = fS(t) : $i = sr ? Vi(t.stateNode) : null, !0;
    }
    function dS() {
      return Ea && $i !== null;
    }
    function Uy(t) {
      for (var n = $i; n; )
        Dy(t, n), n = Vi(n);
    }
    function tc() {
      zn && (sr = null, $i = null, Ea = !1, Qu = !1);
    }
    function Ly() {
      jl !== null && (E0(jl), jl = null);
    }
    function Rr() {
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
        var s = qe(n) || "Component";
        $p[s] || ($p[s] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Af(t, n, s) {
      var l = s.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((t.mode & mn || ee) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(s._owner && s._self && s._owner.stateNode !== s._self)) {
          var c = qe(t) || "Component";
          Kp[c] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), Kp[c] = !0);
        }
        if (s._owner) {
          var h = s._owner, x;
          if (h) {
            var T = h;
            if (T.tag !== le)
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
        var n = qe(t) || "Component";
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
          q === null ? (Q.deletions = [ie], Q.flags |= mr) : q.push(ie);
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
        for (var q = /* @__PURE__ */ new Map(), _e = ie; _e !== null; )
          _e.key !== null ? q.set(_e.key, _e) : q.set(_e.index, _e), _e = _e.sibling;
        return q;
      }
      function c(Q, ie) {
        var q = eo(Q, ie);
        return q.index = 0, q.sibling = null, q;
      }
      function h(Q, ie, q) {
        if (Q.index = q, !t)
          return Q.flags |= fo, ie;
        var _e = Q.alternate;
        if (_e !== null) {
          var We = _e.index;
          return We < ie ? (Q.flags |= qt, ie) : We;
        } else
          return Q.flags |= qt, ie;
      }
      function x(Q) {
        return t && Q.alternate === null && (Q.flags |= qt), Q;
      }
      function T(Q, ie, q, _e) {
        if (ie === null || ie.tag !== he) {
          var We = Rv(q, Q.mode, _e);
          return We.return = Q, We;
        } else {
          var Be = c(ie, q);
          return Be.return = Q, Be;
        }
      }
      function w(Q, ie, q, _e) {
        var We = q.type;
        if (We === Vt)
          return U(Q, ie, q.props.children, _e, q.key);
        if (ie !== null && (ie.elementType === We || // Keep this check inline so it only runs on the false path:
        B0(ie, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof We == "object" && We !== null && We.$$typeof === jt && ky(We) === ie.type)) {
          var Be = c(ie, q.props);
          return Be.ref = Af(Q, ie, q), Be.return = Q, Be._debugSource = q._source, Be._debugOwner = q._owner, Be;
        }
        var wt = Ev(q, Q.mode, _e);
        return wt.ref = Af(Q, ie, q), wt.return = Q, wt;
      }
      function N(Q, ie, q, _e) {
        if (ie === null || ie.tag !== Me || ie.stateNode.containerInfo !== q.containerInfo || ie.stateNode.implementation !== q.implementation) {
          var We = Mv(q, Q.mode, _e);
          return We.return = Q, We;
        } else {
          var Be = c(ie, q.children || []);
          return Be.return = Q, Be;
        }
      }
      function U(Q, ie, q, _e, We) {
        if (ie === null || ie.tag !== we) {
          var Be = Jl(q, Q.mode, _e, We);
          return Be.return = Q, Be;
        } else {
          var wt = c(ie, q);
          return wt.return = Q, wt;
        }
      }
      function I(Q, ie, q) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var _e = Rv("" + ie, Q.mode, q);
          return _e.return = Q, _e;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case Ot: {
              var We = Ev(ie, Q.mode, q);
              return We.ref = Af(Q, null, ie), We.return = Q, We;
            }
            case Ge: {
              var Be = Mv(ie, Q.mode, q);
              return Be.return = Q, Be;
            }
            case jt: {
              var wt = ie._payload, Xt = ie._init;
              return I(Q, Xt(wt), q);
            }
          }
          if (Qt(ie) || oe(ie)) {
            var on = Jl(ie, Q.mode, q, null);
            return on.return = Q, on;
          }
          Yd(Q, ie);
        }
        return typeof ie == "function" && Wd(Q), null;
      }
      function Z(Q, ie, q, _e) {
        var We = ie !== null ? ie.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return We !== null ? null : T(Q, ie, "" + q, _e);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ot:
              return q.key === We ? w(Q, ie, q, _e) : null;
            case Ge:
              return q.key === We ? N(Q, ie, q, _e) : null;
            case jt: {
              var Be = q._payload, wt = q._init;
              return Z(Q, ie, wt(Be), _e);
            }
          }
          if (Qt(q) || oe(q))
            return We !== null ? null : U(Q, ie, q, _e, null);
          Yd(Q, q);
        }
        return typeof q == "function" && Wd(Q), null;
      }
      function re(Q, ie, q, _e, We) {
        if (typeof _e == "string" && _e !== "" || typeof _e == "number") {
          var Be = Q.get(q) || null;
          return T(ie, Be, "" + _e, We);
        }
        if (typeof _e == "object" && _e !== null) {
          switch (_e.$$typeof) {
            case Ot: {
              var wt = Q.get(_e.key === null ? q : _e.key) || null;
              return w(ie, wt, _e, We);
            }
            case Ge: {
              var Xt = Q.get(_e.key === null ? q : _e.key) || null;
              return N(ie, Xt, _e, We);
            }
            case jt: {
              var on = _e._payload, Zt = _e._init;
              return re(Q, ie, q, Zt(on), We);
            }
          }
          if (Qt(_e) || oe(_e)) {
            var Rn = Q.get(q) || null;
            return U(ie, Rn, _e, We, null);
          }
          Yd(ie, _e);
        }
        return typeof _e == "function" && Wd(ie), null;
      }
      function me(Q, ie, q) {
        {
          if (typeof Q != "object" || Q === null)
            return ie;
          switch (Q.$$typeof) {
            case Ot:
            case Ge:
              By(Q, q);
              var _e = Q.key;
              if (typeof _e != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(_e);
                break;
              }
              if (!ie.has(_e)) {
                ie.add(_e);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", _e);
              break;
            case jt: {
              var We = Q._payload, Be = Q._init;
              me(Be(We), ie, q);
              break;
            }
          }
        }
        return ie;
      }
      function xe(Q, ie, q, _e) {
        for (var We = null, Be = 0; Be < q.length; Be++) {
          var wt = q[Be];
          We = me(wt, We, Q);
        }
        for (var Xt = null, on = null, Zt = ie, Rn = 0, Ht = 0, _t = null; Zt !== null && Ht < q.length; Ht++) {
          Zt.index > Ht ? (_t = Zt, Zt = null) : _t = Zt.sibling;
          var Ln = Z(Q, Zt, q[Ht], _e);
          if (Ln === null) {
            Zt === null && (Zt = _t);
            break;
          }
          t && Zt && Ln.alternate === null && n(Q, Zt), Rn = h(Ln, Rn, Ht), on === null ? Xt = Ln : on.sibling = Ln, on = Ln, Zt = _t;
        }
        if (Ht === q.length) {
          if (s(Q, Zt), Rr()) {
            var Mn = Ht;
            Yu(Q, Mn);
          }
          return Xt;
        }
        if (Zt === null) {
          for (; Ht < q.length; Ht++) {
            var aa = I(Q, q[Ht], _e);
            aa !== null && (Rn = h(aa, Rn, Ht), on === null ? Xt = aa : on.sibling = aa, on = aa);
          }
          if (Rr()) {
            var fr = Ht;
            Yu(Q, fr);
          }
          return Xt;
        }
        for (var Ai = l(Q, Zt); Ht < q.length; Ht++) {
          var Ni = re(Ai, Q, Ht, q[Ht], _e);
          Ni !== null && (t && Ni.alternate !== null && Ai.delete(Ni.key === null ? Ht : Ni.key), Rn = h(Ni, Rn, Ht), on === null ? Xt = Ni : on.sibling = Ni, on = Ni);
        }
        if (t && Ai.forEach(function(yc) {
          return n(Q, yc);
        }), Rr()) {
          var as = Ht;
          Yu(Q, as);
        }
        return Xt;
      }
      function Ze(Q, ie, q, _e) {
        var We = oe(q);
        if (typeof We != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Jp || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jp = !0), q.entries === We && (Zp || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zp = !0);
          var Be = We.call(q);
          if (Be)
            for (var wt = null, Xt = Be.next(); !Xt.done; Xt = Be.next()) {
              var on = Xt.value;
              wt = me(on, wt, Q);
            }
        }
        var Zt = We.call(q);
        if (Zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Rn = null, Ht = null, _t = ie, Ln = 0, Mn = 0, aa = null, fr = Zt.next(); _t !== null && !fr.done; Mn++, fr = Zt.next()) {
          _t.index > Mn ? (aa = _t, _t = null) : aa = _t.sibling;
          var Ai = Z(Q, _t, fr.value, _e);
          if (Ai === null) {
            _t === null && (_t = aa);
            break;
          }
          t && _t && Ai.alternate === null && n(Q, _t), Ln = h(Ai, Ln, Mn), Ht === null ? Rn = Ai : Ht.sibling = Ai, Ht = Ai, _t = aa;
        }
        if (fr.done) {
          if (s(Q, _t), Rr()) {
            var Ni = Mn;
            Yu(Q, Ni);
          }
          return Rn;
        }
        if (_t === null) {
          for (; !fr.done; Mn++, fr = Zt.next()) {
            var as = I(Q, fr.value, _e);
            as !== null && (Ln = h(as, Ln, Mn), Ht === null ? Rn = as : Ht.sibling = as, Ht = as);
          }
          if (Rr()) {
            var yc = Mn;
            Yu(Q, yc);
          }
          return Rn;
        }
        for (var gc = l(Q, _t); !fr.done; Mn++, fr = Zt.next()) {
          var Fi = re(gc, Q, Mn, fr.value, _e);
          Fi !== null && (t && Fi.alternate !== null && gc.delete(Fi.key === null ? Mn : Fi.key), Ln = h(Fi, Ln, Mn), Ht === null ? Rn = Fi : Ht.sibling = Fi, Ht = Fi);
        }
        if (t && gc.forEach(function(zv) {
          return n(Q, zv);
        }), Rr()) {
          var to = Mn;
          Yu(Q, to);
        }
        return Rn;
      }
      function dt(Q, ie, q, _e) {
        if (ie !== null && ie.tag === he) {
          s(Q, ie.sibling);
          var We = c(ie, q);
          return We.return = Q, We;
        }
        s(Q, ie);
        var Be = Rv(q, Q.mode, _e);
        return Be.return = Q, Be;
      }
      function tt(Q, ie, q, _e) {
        for (var We = q.key, Be = ie; Be !== null; ) {
          if (Be.key === We) {
            var wt = q.type;
            if (wt === Vt) {
              if (Be.tag === we) {
                s(Q, Be.sibling);
                var Xt = c(Be, q.props.children);
                return Xt.return = Q, Xt._debugSource = q._source, Xt._debugOwner = q._owner, Xt;
              }
            } else if (Be.elementType === wt || // Keep this check inline so it only runs on the false path:
            B0(Be, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof wt == "object" && wt !== null && wt.$$typeof === jt && ky(wt) === Be.type) {
              s(Q, Be.sibling);
              var on = c(Be, q.props);
              return on.ref = Af(Q, Be, q), on.return = Q, on._debugSource = q._source, on._debugOwner = q._owner, on;
            }
            s(Q, Be);
            break;
          } else
            n(Q, Be);
          Be = Be.sibling;
        }
        if (q.type === Vt) {
          var Zt = Jl(q.props.children, Q.mode, _e, q.key);
          return Zt.return = Q, Zt;
        } else {
          var Rn = Ev(q, Q.mode, _e);
          return Rn.ref = Af(Q, ie, q), Rn.return = Q, Rn;
        }
      }
      function dn(Q, ie, q, _e) {
        for (var We = q.key, Be = ie; Be !== null; ) {
          if (Be.key === We)
            if (Be.tag === Me && Be.stateNode.containerInfo === q.containerInfo && Be.stateNode.implementation === q.implementation) {
              s(Q, Be.sibling);
              var wt = c(Be, q.children || []);
              return wt.return = Q, wt;
            } else {
              s(Q, Be);
              break;
            }
          else
            n(Q, Be);
          Be = Be.sibling;
        }
        var Xt = Mv(q, Q.mode, _e);
        return Xt.return = Q, Xt;
      }
      function hn(Q, ie, q, _e) {
        var We = typeof q == "object" && q !== null && q.type === Vt && q.key === null;
        if (We && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ot:
              return x(tt(Q, ie, q, _e));
            case Ge:
              return x(dn(Q, ie, q, _e));
            case jt: {
              var Be = q._payload, wt = q._init;
              return hn(Q, ie, wt(Be), _e);
            }
          }
          if (Qt(q))
            return xe(Q, ie, q, _e);
          if (oe(q))
            return Ze(Q, ie, q, _e);
          Yd(Q, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? x(dt(Q, ie, "" + q, _e)) : (typeof q == "function" && Wd(Q), s(Q, ie));
      }
      return hn;
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
    var Nf = {}, Il = ji(Nf), Ff = ji(Nf), Qd = ji(Nf);
    function Gd(t) {
      if (t === Nf)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return t;
    }
    function tm() {
      var t = Gd(Qd.current);
      return t;
    }
    function nm(t, n) {
      $t(Qd, n, t), $t(Ff, t, t), $t(Il, Nf, t);
      var s = Ba(n);
      Dn(Il, t), $t(Il, s, t);
    }
    function rc(t) {
      Dn(Il, t), Dn(Ff, t), Dn(Qd, t);
    }
    function Of() {
      var t = Gd(Il.current);
      return t;
    }
    function Vy(t) {
      var n = Gd(Qd.current), s = Gd(Il.current), l = Kn(s, t.type, n);
      s !== l && ($t(Ff, t, t), $t(Il, l, t));
    }
    function rm(t) {
      Ff.current === t && (Dn(Il, t), Dn(Ff, t));
    }
    var mS = 0, jy = 1, Iy = 1, Uf = 2, Ra = ji(mS);
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
      $t(Ra, n, t);
    }
    function ac(t) {
      Dn(Ra, t);
    }
    function yS(t, n) {
      var s = t.memoizedState;
      return s !== null ? s.dehydrated !== null : (t.memoizedProps, !0);
    }
    function Xd(t) {
      for (var n = t; n !== null; ) {
        if (n.tag === K) {
          var s = n.memoizedState;
          if (s !== null) {
            var l = s.dehydrated;
            if (l === null || Ct(l) || Bt(l))
              return n;
          }
        } else if (n.tag === ke && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        n.memoizedProps.revealOrder !== void 0) {
          var c = (n.flags & Mt) !== Se;
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
    ), Sn = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), Un = (
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
    var Le = m.ReactCurrentDispatcher, di = m.ReactCurrentBatchConfig, um, sc;
    um = /* @__PURE__ */ new Set();
    var lc = fe, an = null, Mr = null, Wn = null, Zd = !1, Lf = !1, Bf = 0, xS = 0, SS = 25, ae = null, ea = null, Wl = -1, om = !1;
    function It() {
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
      t != null && !Qt(t) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof t);
    }
    function _S(t) {
      {
        var n = qe(an);
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
    function br() {
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
        if (!Vr(t[s], n[s]))
          return !1;
      return !0;
    }
    function oc(t, n, s, l, c, h) {
      lc = h, an = n, ea = t !== null ? t._debugHookTypes : null, Wl = -1, om = t !== null && t.type !== n.type, n.memoizedState = null, n.updateQueue = null, n.lanes = fe, t !== null && t.memoizedState !== null ? Le.current = fg : ea !== null ? Le.current = cg : Le.current = og;
      var x = s(l, c);
      if (Lf) {
        var T = 0;
        do {
          if (Lf = !1, Bf = 0, T >= SS)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          T += 1, om = !1, Mr = null, Wn = null, n.updateQueue = null, Wl = -1, Le.current = dg, x = s(l, c);
        } while (Lf);
      }
      Le.current = oh, n._debugHookTypes = ea;
      var w = Mr !== null && Mr.next !== null;
      if (lc = fe, an = null, Mr = null, Wn = null, ae = null, ea = null, Wl = -1, t !== null && (t.flags & Nr) !== (n.flags & Nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (t.mode & Gt) !== lt && g("Internal React error: Expected static flag was missing. Please notify the React team."), Zd = !1, w)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return x;
    }
    function cc() {
      var t = Bf !== 0;
      return Bf = 0, t;
    }
    function qy(t, n, s) {
      n.updateQueue = t.updateQueue, (n.mode & si) !== lt ? n.flags &= ~(nl | gi | rr | gt) : n.flags &= ~(rr | gt), t.lanes = zs(t.lanes, s);
    }
    function Yy() {
      if (Le.current = oh, Zd) {
        for (var t = an.memoizedState; t !== null; ) {
          var n = t.queue;
          n !== null && (n.pending = null), t = t.next;
        }
        Zd = !1;
      }
      lc = fe, an = null, Mr = null, Wn = null, ea = null, Wl = -1, ae = null, rg = !1, Lf = !1, Bf = 0;
    }
    function js() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Wn === null ? an.memoizedState = Wn = t : Wn = Wn.next = t, Wn;
    }
    function es() {
      var t;
      if (Mr === null) {
        var n = an.alternate;
        n !== null ? t = n.memoizedState : t = null;
      } else
        t = Mr.next;
      var s;
      if (Wn === null ? s = an.memoizedState : s = Wn.next, s !== null)
        Wn = s, s = Wn.next, Mr = t;
      else {
        if (t === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Mr = t;
        var l = {
          memoizedState: Mr.memoizedState,
          baseState: Mr.baseState,
          baseQueue: Mr.baseQueue,
          queue: Mr.queue,
          next: null
        };
        Wn === null ? an.memoizedState = Wn = l : Wn = Wn.next = l;
      }
      return Wn;
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
      var x = h.dispatch = bS.bind(null, an, h);
      return [l.memoizedState, x];
    }
    function hm(t, n, s) {
      var l = es(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = t;
      var h = Mr, x = h.baseQueue, T = c.pending;
      if (T !== null) {
        if (x !== null) {
          var w = x.next, N = T.next;
          x.next = N, T.next = w;
        }
        h.baseQueue !== x && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), h.baseQueue = x = T, c.pending = null;
      }
      if (x !== null) {
        var U = x.next, I = h.baseState, Z = null, re = null, me = null, xe = U;
        do {
          var Ze = xe.lane;
          if (wl(lc, Ze)) {
            if (me !== null) {
              var tt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nn,
                action: xe.action,
                hasEagerState: xe.hasEagerState,
                eagerState: xe.eagerState,
                next: null
              };
              me = me.next = tt;
            }
            if (xe.hasEagerState)
              I = xe.eagerState;
            else {
              var dn = xe.action;
              I = t(I, dn);
            }
          } else {
            var dt = {
              lane: Ze,
              action: xe.action,
              hasEagerState: xe.hasEagerState,
              eagerState: xe.eagerState,
              next: null
            };
            me === null ? (re = me = dt, Z = I) : me = me.next = dt, an.lanes = ct(an.lanes, Ze), Yh(Ze);
          }
          xe = xe.next;
        } while (xe !== null && xe !== U);
        me === null ? Z = I : me.next = re, Vr(I, l.memoizedState) || Eh(), l.memoizedState = I, l.baseState = Z, l.baseQueue = me, c.lastRenderedState = I;
      }
      var hn = c.interleaved;
      if (hn !== null) {
        var Q = hn;
        do {
          var ie = Q.lane;
          an.lanes = ct(an.lanes, ie), Yh(ie), Q = Q.next;
        } while (Q !== hn);
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
        Vr(T, l.memoizedState) || Eh(), l.memoizedState = T, l.baseQueue === null && (l.baseState = T), c.lastRenderedState = T;
      }
      return [T, h];
    }
    function Ub(t, n, s) {
    }
    function Lb(t, n, s) {
    }
    function mm(t, n, s) {
      var l = an, c = js(), h, x = Rr();
      if (x) {
        if (s === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        h = s(), sc || h !== s() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), sc = !0);
      } else {
        if (h = n(), !sc) {
          var T = n();
          Vr(h, T) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), sc = !0);
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
      return c.queue = N, Vf(Xy.bind(null, l, N, t), [t]), l.flags |= rr, Hf(Sn | lr, Gy.bind(null, l, N, h, n), void 0, null), h;
    }
    function Jd(t, n, s) {
      var l = an, c = es(), h = n();
      if (!sc) {
        var x = n();
        Vr(h, x) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), sc = !0);
      }
      var T = c.memoizedState, w = !Vr(T, h);
      w && (c.memoizedState = h, Eh());
      var N = c.queue;
      if (Gu(Xy.bind(null, l, N, t), [t]), N.getSnapshot !== n || w || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Wn !== null && Wn.memoizedState.tag & Sn) {
        l.flags |= rr, Hf(Sn | lr, Gy.bind(null, l, N, h, n), void 0, null);
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
      }, c = an.updateQueue;
      if (c === null)
        c = Wy(), an.updateQueue = c, c.stores = [l];
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
        return !Vr(s, l);
      } catch {
        return !0;
      }
    }
    function Jy(t) {
      Xn(t, St, rn);
    }
    function kf(t) {
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
      var l = s.dispatch = TS.bind(null, an, s);
      return [n.memoizedState, l];
    }
    function Kd(t) {
      return hm(fm);
    }
    function $d(t) {
      return pm(fm);
    }
    function Hf(t, n, s, l) {
      var c = {
        tag: t,
        create: n,
        destroy: s,
        deps: l,
        // Circular
        next: null
      }, h = an.updateQueue;
      if (h === null)
        h = Wy(), an.updateQueue = h, h.lastEffect = c.next = c;
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
    function Pf(t, n, s, l) {
      var c = js(), h = l === void 0 ? null : l;
      an.flags |= t, c.memoizedState = Hf(Sn | n, s, void 0, h);
    }
    function th(t, n, s, l) {
      var c = es(), h = l === void 0 ? null : l, x = void 0;
      if (Mr !== null) {
        var T = Mr.memoizedState;
        if (x = T.destroy, h !== null) {
          var w = T.deps;
          if (cm(h, w)) {
            c.memoizedState = Hf(n, s, x, h);
            return;
          }
        }
      }
      an.flags |= t, c.memoizedState = Hf(Sn | n, s, x, h);
    }
    function Vf(t, n) {
      return (an.mode & si) !== lt ? Pf(nl | rr | tl, lr, t, n) : Pf(rr | tl, lr, t, n);
    }
    function Gu(t, n) {
      return th(rr, lr, t, n);
    }
    function ym(t, n) {
      return Pf(gt, Yl, t, n);
    }
    function nh(t, n) {
      return th(gt, Yl, t, n);
    }
    function gm(t, n) {
      var s = gt;
      return s |= oa, (an.mode & si) !== lt && (s |= gi), Pf(s, Un, t, n);
    }
    function rh(t, n) {
      return th(gt, Un, t, n);
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
      var l = s != null ? s.concat([t]) : null, c = gt;
      return c |= oa, (an.mode & si) !== lt && (c |= gi), Pf(c, Un, Ky.bind(null, n, t), l);
    }
    function ih(t, n, s) {
      typeof n != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var l = s != null ? s.concat([t]) : null;
      return th(gt, Un, Ky.bind(null, n, t), l);
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
      var n = kf(t), s = n[0], l = n[1];
      return Vf(function() {
        var c = di.transition;
        di.transition = {};
        try {
          l(t);
        } finally {
          di.transition = c;
        }
      }, [t]), s;
    }
    function $y(t) {
      var n = Kd(), s = n[0], l = n[1];
      return Gu(function() {
        var c = di.transition;
        di.transition = {};
        try {
          l(t);
        } finally {
          di.transition = c;
        }
      }, [t]), s;
    }
    function eg(t) {
      var n = $d(), s = n[0], l = n[1];
      return Gu(function() {
        var c = di.transition;
        di.transition = {};
        try {
          l(t);
        } finally {
          di.transition = c;
        }
      }, [t]), s;
    }
    function RS(t, n, s) {
      var l = Hr();
      Fn(Yo(l, Dl)), t(!0);
      var c = di.transition;
      di.transition = {};
      var h = di.transition;
      di.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        t(!1), n();
      } finally {
        if (Fn(l), di.transition = c, c === null && h._updatedFibers) {
          var x = h._updatedFibers.size;
          x > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), h._updatedFibers.clear();
        }
      }
    }
    function Rm() {
      var t = kf(!1), n = t[0], s = t[1], l = RS.bind(null, s), c = js();
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
    function MS() {
      return rg;
    }
    function Mm() {
      var t = js(), n = Vh(), s = n.identifierPrefix, l;
      if (Rr()) {
        var c = eS();
        l = ":" + s + "R" + c;
        var h = Bf++;
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
    function bS(t, n, s) {
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
        var h = qr(), x = Xn(t, l, h);
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
            T = Le.current, Le.current = Ma;
            try {
              var w = n.lastRenderedState, N = x(w, s);
              if (c.hasEagerState = !0, c.eagerState = N, Vr(N, w))
                return;
            } catch {
            } finally {
              Le.current = T;
            }
          }
        }
        var U = qr(), I = Xn(t, l, U);
        I !== null && lg(I, n, l);
      }
      ug(t, l);
    }
    function ig(t) {
      var n = t.alternate;
      return t === an || n !== null && n === an;
    }
    function ag(t, n) {
      Lf = Zd = !0;
      var s = t.pending;
      s === null ? n.next = n : (n.next = s.next, s.next = n), t.pending = n;
    }
    function sg(t, n, s, l) {
      if (S0(t)) {
        var c = n.interleaved;
        c === null ? (s.next = s, Ke(n)) : (s.next = c.next, c.next = s), n.interleaved = s;
      } else {
        var h = n.pending;
        h === null ? s.next = s : (s.next = h.next, h.next = s), n.pending = s;
      }
    }
    function lg(t, n, s) {
      if (jo(s)) {
        var l = n.lanes;
        l = Ya(l, t.pendingLanes);
        var c = ct(l, s);
        n.lanes = c, Ns(t, c);
      }
    }
    function ug(t, n, s) {
      Ll(t, n);
    }
    var oh = {
      readContext: Re,
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
      unstable_isNewReconciler: L
    }, og = null, cg = null, fg = null, dg = null, ts = null, Ma = null, ch = null;
    {
      var bm = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ut = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      og = {
        readContext: function(t) {
          return Re(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", It(), uc(n), Sm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", It(), Re(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", It(), uc(n), Vf(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", It(), uc(s), xm(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", It(), uc(n), ym(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", It(), uc(n), gm(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", It(), uc(n);
          var s = Le.current;
          Le.current = ts;
          try {
            return _m(t, n);
          } finally {
            Le.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", It();
          var l = Le.current;
          Le.current = ts;
          try {
            return dm(t, n, s);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", It(), vm(t);
        },
        useState: function(t) {
          ae = "useState", It();
          var n = Le.current;
          Le.current = ts;
          try {
            return kf(t);
          } finally {
            Le.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", It(), Em(t);
        },
        useTransition: function() {
          return ae = "useTransition", It(), Rm();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", It(), mm(t, n, s);
        },
        useId: function() {
          return ae = "useId", It(), Mm();
        },
        unstable_isNewReconciler: L
      }, cg = {
        readContext: function(t) {
          return Re(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), Sm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), Re(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Te(), Vf(t, n);
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
          var s = Le.current;
          Le.current = ts;
          try {
            return _m(t, n);
          } finally {
            Le.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", Te();
          var l = Le.current;
          Le.current = ts;
          try {
            return dm(t, n, s);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), vm(t);
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = Le.current;
          Le.current = ts;
          try {
            return kf(t);
          } finally {
            Le.current = n;
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
          return ae = "useId", Te(), Mm();
        },
        unstable_isNewReconciler: L
      }, fg = {
        readContext: function(t) {
          return Re(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), Re(t);
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
          var s = Le.current;
          Le.current = Ma;
          try {
            return lh(t, n);
          } finally {
            Le.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", Te();
          var l = Le.current;
          Le.current = Ma;
          try {
            return hm(t, n, s);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), eh();
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = Le.current;
          Le.current = Ma;
          try {
            return Kd(t);
          } finally {
            Le.current = n;
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
          return Re(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), Re(t);
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
          var s = Le.current;
          Le.current = ch;
          try {
            return lh(t, n);
          } finally {
            Le.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", Te();
          var l = Le.current;
          Le.current = ch;
          try {
            return pm(t, n, s);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), eh();
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = Le.current;
          Le.current = ch;
          try {
            return $d(t);
          } finally {
            Le.current = n;
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
          return bm(), Re(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", ut(), It(), Sm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", ut(), It(), Re(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", ut(), It(), Vf(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", ut(), It(), xm(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", ut(), It(), ym(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", ut(), It(), gm(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", ut(), It();
          var s = Le.current;
          Le.current = ts;
          try {
            return _m(t, n);
          } finally {
            Le.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", ut(), It();
          var l = Le.current;
          Le.current = ts;
          try {
            return dm(t, n, s);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", ut(), It(), vm(t);
        },
        useState: function(t) {
          ae = "useState", ut(), It();
          var n = Le.current;
          Le.current = ts;
          try {
            return kf(t);
          } finally {
            Le.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", ut(), It(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", ut(), It(), Em(t);
        },
        useTransition: function() {
          return ae = "useTransition", ut(), It(), Rm();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", ut(), It(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", ut(), It(), mm(t, n, s);
        },
        useId: function() {
          return ae = "useId", ut(), It(), Mm();
        },
        unstable_isNewReconciler: L
      }, Ma = {
        readContext: function(t) {
          return bm(), Re(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", ut(), Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", ut(), Te(), Re(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", ut(), Te(), Gu(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", ut(), Te(), ih(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", ut(), Te(), nh(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", ut(), Te(), rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", ut(), Te();
          var s = Le.current;
          Le.current = Ma;
          try {
            return lh(t, n);
          } finally {
            Le.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", ut(), Te();
          var l = Le.current;
          Le.current = Ma;
          try {
            return hm(t, n, s);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", ut(), Te(), eh();
        },
        useState: function(t) {
          ae = "useState", ut(), Te();
          var n = Le.current;
          Le.current = Ma;
          try {
            return Kd(t);
          } finally {
            Le.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", ut(), Te(), ah();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", ut(), Te(), $y(t);
        },
        useTransition: function() {
          return ae = "useTransition", ut(), Te(), tg();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", ut(), Te(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", ut(), Te(), Jd(t, n);
        },
        useId: function() {
          return ae = "useId", ut(), Te(), uh();
        },
        unstable_isNewReconciler: L
      }, ch = {
        readContext: function(t) {
          return bm(), Re(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", ut(), Te(), sh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", ut(), Te(), Re(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", ut(), Te(), Gu(t, n);
        },
        useImperativeHandle: function(t, n, s) {
          return ae = "useImperativeHandle", ut(), Te(), ih(t, n, s);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", ut(), Te(), nh(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", ut(), Te(), rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", ut(), Te();
          var s = Le.current;
          Le.current = Ma;
          try {
            return lh(t, n);
          } finally {
            Le.current = s;
          }
        },
        useReducer: function(t, n, s) {
          ae = "useReducer", ut(), Te();
          var l = Le.current;
          Le.current = Ma;
          try {
            return pm(t, n, s);
          } finally {
            Le.current = l;
          }
        },
        useRef: function(t) {
          return ae = "useRef", ut(), Te(), eh();
        },
        useState: function(t) {
          ae = "useState", ut(), Te();
          var n = Le.current;
          Le.current = Ma;
          try {
            return $d(t);
          } finally {
            Le.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", ut(), Te(), ah();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", ut(), Te(), eg(t);
        },
        useTransition: function() {
          return ae = "useTransition", ut(), Te(), ng();
        },
        useMutableSource: function(t, n, s) {
          return ae = "useMutableSource", ut(), Te(), void 0;
        },
        useSyncExternalStore: function(t, n, s) {
          return ae = "useSyncExternalStore", ut(), Te(), Jd(t, n);
        },
        useId: function() {
          return ae = "useId", ut(), Te(), uh();
        },
        unstable_isNewReconciler: L
      };
    }
    var Ql = d.unstable_now, hg = 0, fh = -1, jf = -1, dh = -1, Tm = !1, hh = !1;
    function pg() {
      return Tm;
    }
    function CS() {
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
    function Cm(t) {
      jf = Ql(), t.actualStartTime < 0 && (t.actualStartTime = Ql());
    }
    function yg(t) {
      jf = -1;
    }
    function ph(t, n) {
      if (jf >= 0) {
        var s = Ql() - jf;
        t.actualDuration += s, n && (t.selfBaseDuration = s), jf = -1;
      }
    }
    function ta(t) {
      if (fh >= 0) {
        var n = Ql() - fh;
        fh = -1;
        for (var s = t.return; s !== null; ) {
          switch (s.tag) {
            case pe:
              var l = s.stateNode;
              l.effectDuration += n;
              return;
            case ne:
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
            case pe:
              var l = s.stateNode;
              l !== null && (l.passiveEffectDuration += n);
              return;
            case ne:
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
          if (t.tag === le)
            return;
          console.error(l);
        }
        var T = c ? qe(c) : null, w = T ? "The above error occurred in the <" + T + "> component:" : "The above error occurred in one of your React components:", N;
        if (t.tag === pe)
          N = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var U = qe(t) || "Anonymous";
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
      var l = et(rn, s);
      l.tag = Y, l.payload = {
        element: null
      };
      var c = n.value;
      return l.callback = function() {
        BE(c), Am(t, n);
      }, l;
    }
    function Nm(t, n, s) {
      var l = et(rn, s);
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
        }), typeof c != "function" && (vn(t.lanes, St) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(t) || "Unknown"));
      }), l;
    }
    function xg(t, n, s) {
      var l = t.pingCache, c;
      if (l === null ? (l = t.pingCache = new AS(), c = /* @__PURE__ */ new Set(), l.set(n, c)) : (c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c))), !c.has(s)) {
        c.add(s);
        var h = kE.bind(null, t, n, s);
        xr && id(t, s), n.then(h, h);
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
      if ((t.mode & Gt) === lt && (s === ce || s === k || s === V)) {
        var l = t.alternate;
        l ? (t.updateQueue = l.updateQueue, t.memoizedState = l.memoizedState, t.lanes = l.lanes) : (t.updateQueue = null, t.memoizedState = null);
      }
    }
    function Sg(t) {
      var n = t;
      do {
        if (n.tag === K && yS(n))
          return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function _g(t, n, s, l, c) {
      if ((t.mode & Gt) === lt) {
        if (t === n)
          t.flags |= Jn;
        else {
          if (t.flags |= Mt, s.flags |= Cn, s.flags &= ~(fs | Oa), $r && D) {
            var h = t.alternate;
            if (h === null) {
              var x = t.child, T = x.child;
              if (T !== null) {
                var w = T.memoizedProps.children, N = He("hidden", w);
                T.pendingProps = N, T.memoizedProps = N;
              }
            }
          }
          if (s.tag === le) {
            var U = s.alternate;
            if (U === null)
              s.tag = Ce;
            else {
              var I = et(rn, St);
              I.tag = ar, mt(s, I);
            }
          }
          s.lanes = ct(s.lanes, St);
        }
        return t;
      }
      return t.flags |= Jn, t.lanes = c, t;
    }
    function OS(t, n, s, l, c) {
      if (s.flags |= Oa, xr && id(t, c), l !== null && typeof l == "object" && typeof l.then == "function") {
        var h = l;
        FS(s);
        var x = Sg(n);
        if (x !== null) {
          x.flags &= ~Zr, _g(x, n, s, t, c), x.mode & Gt && xg(t, h, c), NS(x, t, h);
          return;
        } else {
          if (!cf(c)) {
            xg(t, h, c), fv();
            return;
          }
          var T = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = T;
        }
      } else if (Rr() && s.mode & Gt) {
        aS();
        var w = Sg(n);
        if (w !== null) {
          (w.flags & Jn) === Se && (w.flags |= Zr), _g(w, n, s, t, c), Xp(l);
          return;
        }
      }
      CE(l), l = mh(l, s);
      var N = n;
      do {
        switch (N.tag) {
          case pe: {
            var U = l;
            N.flags |= Jn;
            var I = Cl(c);
            N.lanes = ct(N.lanes, I);
            var Z = gg(N, U, I);
            Nt(N, Z);
            return;
          }
          case le:
            var re = l, me = N.type, xe = N.stateNode;
            if ((N.flags & Mt) === Se && (typeof me.getDerivedStateFromError == "function" || xe !== null && typeof xe.componentDidCatch == "function" && !z0(xe))) {
              N.flags |= Jn;
              var Ze = Cl(c);
              N.lanes = ct(N.lanes, Ze);
              var dt = Nm(N, re, Ze);
              Nt(N, dt);
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
      t.flags |= gt;
    }
    function Eg(t) {
      t.flags |= Li, t.flags |= cu;
    }
    function Rg(t, n) {
      var s = t !== null && t.child === n.child;
      if (s)
        return !0;
      if ((n.flags & mr) !== Se)
        return !1;
      for (var l = n.child; l !== null; ) {
        if ((l.flags & ds) !== Se || (l.subtreeFlags & ds) !== Se)
          return !1;
        l = l.sibling;
      }
      return !0;
    }
    var If, qf, vh, yh;
    if (Or)
      If = function(t, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === Ee || c.tag === he)
            Pi(t, c.stateNode);
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
      }, qf = function(t, n) {
      }, vh = function(t, n, s, l, c) {
        var h = t.memoizedProps;
        if (h !== l) {
          var x = n.stateNode, T = Of(), w = vr(x, s, h, l, c, T);
          n.updateQueue = w, w && ns(n);
        }
      }, yh = function(t, n, s, l) {
        s !== l && ns(n);
      };
    else if ($r) {
      If = function(t, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === Ee) {
            var h = c.stateNode;
            if (s && l) {
              var x = c.memoizedProps, T = c.type;
              h = st(h, T, x, c);
            }
            Pi(t, h);
          } else if (c.tag === he) {
            var w = c.stateNode;
            if (s && l) {
              var N = c.memoizedProps;
              w = ht(w, N, c);
            }
            Pi(t, w);
          } else if (c.tag !== Me) {
            if (c.tag === at && c.memoizedState !== null) {
              var U = c.child;
              U !== null && (U.return = c), If(t, c, !0, !0);
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
      var Mg = function(t, n, s, l) {
        for (var c = n.child; c !== null; ) {
          if (c.tag === Ee) {
            var h = c.stateNode;
            if (s && l) {
              var x = c.memoizedProps, T = c.type;
              h = st(h, T, x, c);
            }
            J(t, h);
          } else if (c.tag === he) {
            var w = c.stateNode;
            if (s && l) {
              var N = c.memoizedProps;
              w = ht(w, N, c);
            }
            J(t, w);
          } else if (c.tag !== Me) {
            if (c.tag === at && c.memoizedState !== null) {
              var U = c.child;
              U !== null && (U.return = c), Mg(t, c, !0, !0);
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
      qf = function(t, n) {
        var s = n.stateNode, l = Rg(t, n);
        if (!l) {
          var c = s.containerInfo, h = W(c);
          Mg(h, n, !1, !1), s.pendingChildren = h, ns(n), ge(c, h);
        }
      }, vh = function(t, n, s, l, c) {
        var h = t.stateNode, x = t.memoizedProps, T = Rg(t, n);
        if (T && x === l) {
          n.stateNode = h;
          return;
        }
        var w = n.stateNode, N = Of(), U = null;
        if (x !== l && (U = vr(w, s, x, l, c, N)), T && U === null) {
          n.stateNode = h;
          return;
        }
        var I = F(h, U, s, x, l, n, T, w);
        Ha(I, s, l, c, N) && ns(n), n.stateNode = I, T ? ns(n) : If(I, n, !1, !1);
      }, yh = function(t, n, s, l) {
        if (s !== l) {
          var c = tm(), h = Of();
          n.stateNode = ho(l, c, h, n), ns(n);
        } else
          n.stateNode = t.stateNode;
      };
    } else
      qf = function(t, n) {
      }, vh = function(t, n, s, l, c) {
      }, yh = function(t, n, s, l) {
      };
    function Yf(t, n) {
      if (!Rr())
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
      var n = t.alternate !== null && t.alternate.child === t.child, s = fe, l = Se;
      if (n) {
        if ((t.mode & Ft) !== lt) {
          for (var w = t.selfBaseDuration, N = t.child; N !== null; )
            s = ct(s, ct(N.lanes, N.childLanes)), l |= N.subtreeFlags & Nr, l |= N.flags & Nr, w += N.treeBaseDuration, N = N.sibling;
          t.treeBaseDuration = w;
        } else
          for (var U = t.child; U !== null; )
            s = ct(s, ct(U.lanes, U.childLanes)), l |= U.subtreeFlags & Nr, l |= U.flags & Nr, U.return = t, U = U.sibling;
        t.subtreeFlags |= l;
      } else {
        if ((t.mode & Ft) !== lt) {
          for (var c = t.actualDuration, h = t.selfBaseDuration, x = t.child; x !== null; )
            s = ct(s, ct(x.lanes, x.childLanes)), l |= x.subtreeFlags, l |= x.flags, c += x.actualDuration, h += x.treeBaseDuration, x = x.sibling;
          t.actualDuration = c, t.treeBaseDuration = h;
        } else
          for (var T = t.child; T !== null; )
            s = ct(s, ct(T.lanes, T.childLanes)), l |= T.subtreeFlags, l |= T.flags, T.return = t, T = T.sibling;
        t.subtreeFlags |= l;
      }
      return t.childLanes = s, n;
    }
    function bg(t, n, s) {
      var l = n.pendingProps;
      switch (qp(n), n.tag) {
        case Je:
        case Pe:
        case V:
        case ce:
        case k:
        case we:
        case nt:
        case ne:
        case Oe:
        case O:
          return ur(n), null;
        case le: {
          var c = n.type;
          return ai(c) && gl(n), ur(n), null;
        }
        case pe: {
          var h = n.stateNode;
          if (rc(n), bu(n), lm(), h.pendingContext && (h.context = h.pendingContext, h.pendingContext = null), t === null || t.child === null) {
            var x = Df(n);
            if (x)
              ns(n);
            else if (t !== null) {
              var T = t.memoizedState;
              // Check if this is a client root
              (!T.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (n.flags & Zr) !== Se) && (n.flags |= Ar, Ly());
            }
          }
          return qf(t, n), ur(n), null;
        }
        case Ee: {
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
            var U = Of(), I = Df(n);
            if (I)
              uS(n, w, U) && ns(n);
            else {
              var Z = ms(N, l, w, U, n);
              If(Z, n, !1, !1), n.stateNode = Z, Ha(Z, N, l, w, U) && ns(n);
            }
            n.ref !== null && Eg(n);
          }
          return ur(n), null;
        }
        case he: {
          var re = l;
          if (t && n.stateNode != null) {
            var me = t.memoizedProps;
            yh(t, n, me, re);
          } else {
            if (typeof re != "string" && n.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var xe = tm(), Ze = Of(), dt = Df(n);
            dt ? oS(n) && ns(n) : n.stateNode = ho(re, xe, Ze, n);
          }
          return ur(n), null;
        }
        case K: {
          ac(n);
          var tt = n.memoizedState;
          {
            if (dS() && (n.mode & Gt) !== lt && (n.flags & Mt) === Se)
              return Uy(n), tc(), n.flags |= Zr | Oa | Jn, n;
            if (tt !== null && tt.dehydrated !== null) {
              var dn = Df(n);
              if (t === null) {
                if (!dn)
                  throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (cS(n), ur(n), (n.mode & Ft) !== lt) {
                  var hn = tt !== null;
                  if (hn) {
                    var Q = n.child;
                    Q !== null && (n.treeBaseDuration -= Q.treeBaseDuration);
                  }
                }
                return null;
              } else {
                if (tc(), (n.flags & Mt) === Se && (n.memoizedState = null), n.flags |= gt, ur(n), (n.mode & Ft) !== lt) {
                  var ie = tt !== null;
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
          if ((n.flags & Mt) !== Se)
            return n.lanes = s, (n.mode & Ft) !== lt && Dm(n), n;
          var _e = tt !== null, We = !1;
          if (t === null)
            Df(n);
          else {
            var Be = t.memoizedState;
            We = Be !== null;
          }
          if (_e && !We) {
            var wt = n.child;
            if (wt.flags |= Bi, (n.mode & Gt) !== lt) {
              var Xt = t === null && (n.memoizedProps.unstable_avoidThisFallback !== !0 || !te);
              Xt || im(Ra.current, Iy) ? TE() : fv();
            }
          }
          var on = n.updateQueue;
          if (on !== null && (n.flags |= gt), ur(n), (n.mode & Ft) !== lt && _e) {
            var Zt = n.child;
            Zt !== null && (n.treeBaseDuration -= Zt.treeBaseDuration);
          }
          return null;
        }
        case Me:
          return rc(n), qf(t, n), t === null && vs(n.stateNode.containerInfo), ur(n), null;
        case ve:
          var Rn = n.type._context;
          return S(Rn, n), ur(n), null;
        case Ce: {
          var Ht = n.type;
          return ai(Ht) && gl(n), ur(n), null;
        }
        case ke: {
          ac(n);
          var _t = n.memoizedState;
          if (_t === null)
            return ur(n), null;
          var Ln = (n.flags & Mt) !== Se, Mn = _t.rendering;
          if (Mn === null)
            if (Ln)
              Yf(_t, !1);
            else {
              var aa = wE() && (t === null || (t.flags & Mt) === Se);
              if (!aa)
                for (var fr = n.child; fr !== null; ) {
                  var Ai = Xd(fr);
                  if (Ai !== null) {
                    Ln = !0, n.flags |= Mt, Yf(_t, !1);
                    var Ni = Ai.updateQueue;
                    return Ni !== null && (n.updateQueue = Ni, n.flags |= gt), n.subtreeFlags = Se, pS(n, s), ql(n, am(Ra.current, Uf)), n.child;
                  }
                  fr = fr.sibling;
                }
              _t.tail !== null && yn() > x0() && (n.flags |= Mt, Ln = !0, Yf(_t, !1), n.lanes = Ml);
            }
          else {
            if (!Ln) {
              var as = Xd(Mn);
              if (as !== null) {
                n.flags |= Mt, Ln = !0;
                var yc = as.updateQueue;
                if (yc !== null && (n.updateQueue = yc, n.flags |= gt), Yf(_t, !0), _t.tail === null && _t.tailMode === "hidden" && !Mn.alternate && !Rr())
                  return ur(n), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              yn() * 2 - _t.renderingStartTime > x0() && s !== en && (n.flags |= Mt, Ln = !0, Yf(_t, !1), n.lanes = Ml);
            }
            if (_t.isBackwards)
              Mn.sibling = n.child, n.child = Mn;
            else {
              var gc = _t.last;
              gc !== null ? gc.sibling = Mn : n.child = Mn, _t.last = Mn;
            }
          }
          if (_t.tail !== null) {
            var Fi = _t.tail;
            _t.rendering = Fi, _t.tail = Fi.sibling, _t.renderingStartTime = yn(), Fi.sibling = null;
            var to = Ra.current;
            return Ln ? to = am(to, Uf) : to = ic(to), ql(n, to), Fi;
          }
          return ur(n), null;
        }
        case it:
          break;
        case at:
        case Ie: {
          cv(n);
          var zv = n.memoizedState, fx = zv !== null;
          if (t !== null) {
            var TR = t.memoizedState, CR = TR !== null;
            CR !== fx && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !j && (n.flags |= Bi);
          }
          return !fx || (n.mode & Gt) === lt ? ur(n) : vn(rs, en) && (ur(n), Or && n.subtreeFlags & (qt | gt) && (n.flags |= Bi)), null;
        }
        case ot:
          return null;
        case Et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    var Wf = m.ReactCurrentOwner, ba = !1, Fm, Qf, Om, Um, Lm, Xu, Bm, gh;
    Fm = {}, Qf = {}, Om = {}, Um = {}, Lm = {}, Xu = !1, Bm = {}, gh = {};
    function Ir(t, n, s, l) {
      t === null ? n.child = Py(n, null, s, l) : n.child = nc(n, t.child, s, l);
    }
    function LS(t, n, s, l) {
      n.child = nc(n, t.child, null, l), n.child = nc(n, null, s, l);
    }
    function Tg(t, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = s.propTypes;
        h && kr(
          h,
          l,
          // Resolved props
          "prop",
          Ue(s)
        );
      }
      var x = s.render, T = n.ref, w, N;
      ye(n, c), Xi(n);
      {
        if (Wf.current = n, Zi(!0), w = oc(t, n, x, l, T, c), N = cc(), n.mode & mn) {
          At(!0);
          try {
            w = oc(t, n, x, l, T, c), N = cc();
          } finally {
            At(!1);
          }
        }
        Zi(!1);
      }
      return Sa(), t !== null && !ba ? (qy(t, n, c), Is(t, n, c)) : (Rr() && N && Ip(n), n.flags |= kn, Ir(t, n, w, c), n.child);
    }
    function Cg(t, n, s, l, c) {
      if (t === null) {
        var h = s.type;
        if (tR(h) && s.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        s.defaultProps === void 0) {
          var x = h;
          return x = vc(h), n.tag = V, n.type = x, Pm(n, h), wg(t, n, x, l, c);
        }
        {
          var T = h.propTypes;
          T && kr(
            T,
            l,
            // Resolved props
            "prop",
            Ue(h)
          );
        }
        var w = _v(s.type, null, l, n, n.mode, c);
        return w.ref = n.ref, w.return = n, n.child = w, w;
      }
      {
        var N = s.type, U = N.propTypes;
        U && kr(
          U,
          l,
          // Resolved props
          "prop",
          Ue(N)
        );
      }
      var I = t.child, Z = qm(t, c);
      if (!Z) {
        var re = I.memoizedProps, me = s.compare;
        if (me = me !== null ? me : Us, me(re, l) && t.ref === n.ref)
          return Is(t, n, c);
      }
      n.flags |= kn;
      var xe = eo(I, l);
      return xe.ref = n.ref, xe.return = n, n.child = xe, xe;
    }
    function wg(t, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = n.elementType;
        if (h.$$typeof === jt) {
          var x = h, T = x._payload, w = x._init;
          try {
            h = w(T);
          } catch {
            h = null;
          }
          var N = h && h.propTypes;
          N && kr(
            N,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ue(h)
          );
        }
      }
      if (t !== null) {
        var U = t.memoizedProps;
        if (Us(U, l) && t.ref === n.ref && // Prevent bailout if the implementation changed due to hot reload.
        n.type === t.type)
          if (ba = !1, qm(t, c))
            (t.flags & Cn) !== Se && (ba = !0);
          else return n.lanes = t.lanes, Is(t, n, c);
      }
      return km(t, n, s, l, c);
    }
    function zg(t, n, s) {
      var l = n.pendingProps, c = l.children, h = t !== null ? t.memoizedState : null;
      if (l.mode === "hidden" || j)
        if ((n.mode & Gt) === lt) {
          var x = {
            baseLanes: fe,
            cachePool: null
          };
          n.memoizedState = x, qh(n, s);
        } else if (vn(s, en)) {
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
            w = ct(N, s);
          } else
            w = s;
          n.lanes = n.childLanes = en;
          var U = {
            baseLanes: w,
            cachePool: T
          };
          return n.memoizedState = U, n.updateQueue = null, qh(n, w), null;
        }
      else {
        var re;
        h !== null ? (re = ct(h.baseLanes, s), n.memoizedState = null) : re = s, qh(n, re);
      }
      return Ir(t, n, c, s), n.child;
    }
    function BS(t, n, s) {
      var l = n.pendingProps;
      return Ir(t, n, l, s), n.child;
    }
    function kS(t, n, s) {
      var l = n.pendingProps.children;
      return Ir(t, n, l, s), n.child;
    }
    function HS(t, n, s) {
      {
        n.flags |= gt;
        {
          var l = n.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var c = n.pendingProps, h = c.children;
      return Ir(t, n, h, s), n.child;
    }
    function Dg(t, n) {
      var s = n.ref;
      (t === null && s !== null || t !== null && t.ref !== s) && (n.flags |= Li, n.flags |= cu);
    }
    function km(t, n, s, l, c) {
      if (n.type !== n.elementType) {
        var h = s.propTypes;
        h && kr(
          h,
          l,
          // Resolved props
          "prop",
          Ue(s)
        );
      }
      var x;
      {
        var T = Ii(n, s, !0);
        x = yl(n, T);
      }
      var w, N;
      ye(n, c), Xi(n);
      {
        if (Wf.current = n, Zi(!0), w = oc(t, n, s, l, x, c), N = cc(), n.mode & mn) {
          At(!0);
          try {
            w = oc(t, n, s, l, x, c), N = cc();
          } finally {
            At(!1);
          }
        }
        Zi(!1);
      }
      return Sa(), t !== null && !ba ? (qy(t, n, c), Is(t, n, c)) : (Rr() && N && Ip(n), n.flags |= kn, Ir(t, n, w, c), n.child);
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
            n.flags |= Mt, n.flags |= Jn;
            var N = new Error("Simulated error coming from DevTools"), U = Cl(c);
            n.lanes = ct(n.lanes, U);
            var I = Nm(n, mh(N, n), U);
            Nt(n, I);
            break;
          }
        }
        if (n.type !== n.elementType) {
          var Z = s.propTypes;
          Z && kr(
            Z,
            l,
            // Resolved props
            "prop",
            Ue(s)
          );
        }
      }
      var re;
      ai(s) ? (re = !0, Yi(n)) : re = !1, ye(n, c);
      var me = n.stateNode, xe;
      me === null ? (t !== null && (t.alternate = null, n.alternate = null, n.flags |= qt), Cy(n, s, l), jp(n, s, l, c), xe = !0) : t === null ? xe = Z1(n, s, l, c) : xe = J1(t, n, s, l, c);
      var Ze = Hm(t, n, s, xe, re, c);
      {
        var dt = n.stateNode;
        xe && dt.props !== l && (Xu || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(n) || "a component"), Xu = !0);
      }
      return Ze;
    }
    function Hm(t, n, s, l, c, h) {
      Dg(t, n);
      var x = (n.flags & Mt) !== Se;
      if (!l && !x)
        return c && Tu(n, s, !1), Is(t, n, h);
      var T = n.stateNode;
      Wf.current = n;
      var w;
      if (x && typeof s.getDerivedStateFromError != "function")
        w = null, yg();
      else {
        Xi(n);
        {
          if (Zi(!0), w = T.render(), n.mode & mn) {
            At(!0);
            try {
              T.render();
            } finally {
              At(!1);
            }
          }
          Zi(!1);
        }
        Sa();
      }
      return n.flags |= kn, t !== null && x ? LS(t, n, w, h) : Ir(t, n, w, h), n.memoizedState = T.state, c && Tu(n, s, !0), n.child;
    }
    function Ng(t) {
      var n = t.stateNode;
      n.pendingContext ? qi(t, n.pendingContext, n.pendingContext !== n.context) : n.context && qi(t, n.context, !1), nm(t, n.containerInfo);
    }
    function PS(t, n, s) {
      if (Ng(n), t === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = n.pendingProps, c = n.memoizedState, h = c.element;
      ft(t, n), Ko(n, l, null, s);
      var x = n.memoizedState;
      n.stateNode;
      var T = x.element;
      if (zn && c.isDehydrated) {
        var w = {
          element: T,
          isDehydrated: !1,
          cache: x.cache,
          transitions: x.transitions
        }, N = n.updateQueue;
        if (N.baseState = w, n.memoizedState = w, n.flags & Zr) {
          var U = new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.");
          return Fg(t, n, T, s, U);
        } else if (T !== h) {
          var I = new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.");
          return Fg(t, n, T, s, I);
        } else {
          sS(n);
          var Z = Py(n, null, T, s);
          n.child = Z;
          for (var re = Z; re; )
            re.flags = re.flags & ~qt | ir, re = re.sibling;
        }
      } else {
        if (tc(), T === h)
          return Is(t, n, s);
        Ir(t, n, T, s);
      }
      return n.child;
    }
    function Fg(t, n, s, l, c) {
      return tc(), Xp(c), n.flags |= Zr, Ir(t, n, s, l), n.child;
    }
    function VS(t, n, s) {
      Vy(n), t === null && Gp(n);
      var l = n.type, c = n.pendingProps, h = t !== null ? t.memoizedProps : null, x = c.children, T = il(l, c);
      return T ? x = null : h !== null && il(l, h) && (n.flags |= Fa), Dg(t, n), Ir(t, n, x, s), n.child;
    }
    function jS(t, n) {
      return t === null && Gp(n), null;
    }
    function IS(t, n, s, l) {
      t !== null && (t.alternate = null, n.alternate = null, n.flags |= qt);
      var c = n.pendingProps, h = s, x = h._payload, T = h._init, w = T(x);
      n.type = w;
      var N = n.tag = nR(w), U = fi(w, c), I;
      switch (N) {
        case ce:
          return Pm(n, w), n.type = w = vc(w), I = km(null, n, w, U, l), I;
        case le:
          return n.type = w = mv(w), I = Ag(null, n, w, U, l), I;
        case k:
          return n.type = w = vv(w), I = Tg(null, n, w, U, l), I;
        case O: {
          if (n.type !== n.elementType) {
            var Z = w.propTypes;
            Z && kr(
              Z,
              U,
              // Resolved for outer only
              "prop",
              Ue(w)
            );
          }
          return I = Cg(
            null,
            n,
            w,
            fi(w.type, U),
            // The inner type can have defaults too
            l
          ), I;
        }
      }
      var re = "";
      throw w !== null && typeof w == "object" && w.$$typeof === jt && (re = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + w + ". " + ("Lazy element type must resolve to a class or function." + re));
    }
    function qS(t, n, s, l, c) {
      t !== null && (t.alternate = null, n.alternate = null, n.flags |= qt), n.tag = le;
      var h;
      return ai(s) ? (h = !0, Yi(n)) : h = !1, ye(n, c), Cy(n, s, l), jp(n, s, l, c), Hm(null, n, s, !0, h, c);
    }
    function YS(t, n, s, l) {
      t !== null && (t.alternate = null, n.alternate = null, n.flags |= qt);
      var c = n.pendingProps, h;
      {
        var x = Ii(n, s, !1);
        h = yl(n, x);
      }
      ye(n, l);
      var T, w;
      Xi(n);
      {
        if (s.prototype && typeof s.prototype.render == "function") {
          var N = Ue(s) || "Unknown";
          Fm[N] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", N, N), Fm[N] = !0);
        }
        n.mode & mn && ci.recordLegacyContextWarning(n, null), Zi(!0), Wf.current = n, T = oc(null, n, s, c, h, l), w = cc(), Zi(!1);
      }
      if (Sa(), n.flags |= kn, typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0) {
        var U = Ue(s) || "Unknown";
        Qf[U] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), Qf[U] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0
      ) {
        {
          var I = Ue(s) || "Unknown";
          Qf[I] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), Qf[I] = !0);
        }
        n.tag = le, n.memoizedState = null, n.updateQueue = null;
        var Z = !1;
        return ai(s) ? (Z = !0, Yi(n)) : Z = !1, n.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null, je(n), Ty(n, T), jp(n, s, c, l), Hm(null, n, s, !0, Z, l);
      } else {
        if (n.tag = ce, n.mode & mn) {
          At(!0);
          try {
            T = oc(null, n, s, c, h, l), w = cc();
          } finally {
            At(!1);
          }
        }
        return Rr() && w && Ip(n), Ir(null, n, T, l), Pm(n, s), n.child;
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
          var x = Ue(n) || "Unknown";
          Um[x] || (g("%s: Function components do not support getDerivedStateFromProps.", x), Um[x] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var T = Ue(n) || "Unknown";
          Om[T] || (g("%s: Function components do not support contextType.", T), Om[T] = !0);
        }
      }
    }
    var xh = {
      dehydrated: null,
      treeContext: null,
      retryLane: Nn
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
        baseLanes: ct(t.baseLanes, n),
        cachePool: s
      };
    }
    function WS(t, n, s, l) {
      if (n !== null) {
        var c = n.memoizedState;
        if (c === null)
          return !1;
      }
      return im(t, Uf);
    }
    function Ug(t, n) {
      return zs(t.childLanes, n);
    }
    function Lg(t, n, s) {
      var l = n.pendingProps;
      X0(n) && (n.flags |= Mt);
      var c = Ra.current, h = !1, x = (n.flags & Mt) !== Se;
      if (x || WS(c, t) ? (h = !0, n.flags &= ~Mt) : (t === null || t.memoizedState !== null) && (c = vS(c, Iy)), c = ic(c), ql(n, c), t === null) {
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
        var re = t.memoizedState;
        if (re !== null) {
          {
            var me = re.dehydrated;
            if (me !== null)
              if (x) {
                if (n.flags & Zr)
                  return n.flags &= ~Zr, _h(t, n, s, new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
                if (n.memoizedState !== null)
                  return n.child = t.child, n.flags |= Mt, null;
                var xe = l.children, Ze = l.fallback, dt = GS(t, n, xe, Ze, s), tt = n.child;
                return tt.memoizedState = Sh(s), n.memoizedState = xh, dt;
              } else return ZS(t, n, me, re, s);
          }
          if (h) {
            var dn = l.fallback, hn = l.children, Q = Hg(t, n, hn, dn, s), ie = n.child, q = t.child.memoizedState;
            return ie.memoizedState = q === null ? Sh(s) : Og(q, s), ie.childLanes = Ug(t, s), n.memoizedState = xh, Q;
          } else {
            var _e = l.children, We = kg(t, n, _e, s);
            return n.memoizedState = null, We;
          }
        } else if (h) {
          var Be = l.fallback, wt = l.children, Xt = Hg(t, n, wt, Be, s), on = n.child, Zt = t.child.memoizedState;
          return on.memoizedState = Zt === null ? Sh(s) : Og(Zt, s), on.childLanes = Ug(t, s), n.memoizedState = xh, Xt;
        } else {
          var Rn = l.children, Ht = kg(t, n, Rn, s);
          return n.memoizedState = null, Ht;
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
      return (c & Gt) === lt && h !== null ? (T = h, T.childLanes = fe, T.pendingProps = x, t.mode & Ft && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = 0, T.treeBaseDuration = 0), w = Jl(s, c, l, null)) : (T = jm(x, c), w = Jl(s, c, l, null)), T.return = t, w.return = t, T.sibling = w, t.child = T, w;
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
      if ((n.mode & Gt) === lt && (x.lanes = l), x.return = n, x.sibling = null, h !== null) {
        var T = n.deletions;
        T === null ? (n.deletions = [h], n.flags |= mr) : T.push(h);
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
        (h & Gt) === lt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        n.child !== x
      ) {
        var U = n.child;
        N = U, N.childLanes = fe, N.pendingProps = w, n.mode & Ft && (N.actualDuration = 0, N.actualStartTime = -1, N.selfBaseDuration = x.selfBaseDuration, N.treeBaseDuration = x.treeBaseDuration), n.deletions = null;
      } else
        N = Bg(x, w), N.subtreeFlags = x.subtreeFlags & Nr;
      var I;
      return T !== null ? I = eo(T, l) : (I = Jl(l, h, c, null), I.flags |= qt), I.return = n, N.return = n, N.sibling = I, n.child = N, I;
    }
    function _h(t, n, s, l) {
      l !== null && Xp(l), nc(n, t.child, null, s);
      var c = n.pendingProps, h = c.children, x = Vm(n, h);
      return x.flags |= qt, n.memoizedState = null, x;
    }
    function GS(t, n, s, l, c) {
      var h = n.mode, x = {
        mode: "visible",
        children: s
      }, T = jm(x, h), w = Jl(l, h, c, null);
      return w.flags |= qt, T.return = n, w.return = n, T.sibling = w, n.child = T, (n.mode & Gt) !== lt && nc(n, t.child, null, c), w;
    }
    function XS(t, n, s) {
      return (t.mode & Gt) === lt ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), t.lanes = St) : Bt(n) ? t.lanes = ya : t.lanes = en, null;
    }
    function ZS(t, n, s, l, c) {
      if (iS(), (n.mode & Gt) === lt)
        return _h(
          t,
          n,
          c,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Bt(s))
        return _h(
          t,
          n,
          c,
          // TODO: The server should serialize the error message so we can log it
          // here on the client. Or, in production, a hash/id that corresponds to
          // the error.
          new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.")
        );
      var h = vn(c, t.childLanes);
      if (ba || h) {
        var x = Vh();
        if (x !== null) {
          var T = df(x, c);
          if (T !== Nn && T !== l.retryLane) {
            l.retryLane = T;
            var w = rn;
            Xn(t, T, w);
          }
        }
        return fv(), _h(t, n, c, new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
      } else if (Ct(s)) {
        n.flags |= Mt, n.child = t.child;
        var N = HE.bind(null, t);
        return pn(s, N), null;
      } else {
        lS(n, s, l.treeContext);
        var U = n.pendingProps, I = U.children, Z = Vm(n, I);
        return Z.flags |= ir, Z;
      }
    }
    function Pg(t, n, s) {
      t.lanes = ct(t.lanes, n);
      var l = t.alternate;
      l !== null && (l.lanes = ct(l.lanes, n)), A(t.return, n, s);
    }
    function JS(t, n, s) {
      for (var l = n; l !== null; ) {
        if (l.tag === K) {
          var c = l.memoizedState;
          c !== null && Pg(l, s, t);
        } else if (l.tag === ke)
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
        var s = Qt(t), l = !s && typeof oe(t) == "function";
        if (s || l) {
          var c = s ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, n, c), !1;
        }
      }
      return !0;
    }
    function t_(t, n) {
      if ((n === "forwards" || n === "backwards") && t !== void 0 && t !== null && t !== !1)
        if (Qt(t)) {
          for (var s = 0; s < t.length; s++)
            if (!Vg(t[s], s))
              return;
        } else {
          var l = oe(t);
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
      $S(c), e_(h, c), t_(x, c), Ir(t, n, x, s);
      var T = Ra.current, w = im(T, Uf);
      if (w)
        T = am(T, Uf), n.flags |= Mt;
      else {
        var N = t !== null && (t.flags & Mt) !== Se;
        N && JS(n, n.child, s), T = ic(T);
      }
      if (ql(n, T), (n.mode & Gt) === lt)
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
            var Z = null, re = n.child;
            for (n.child = null; re !== null; ) {
              var me = re.alternate;
              if (me !== null && Xd(me) === null) {
                n.child = re;
                break;
              }
              var xe = re.sibling;
              re.sibling = Z, Z = re, re = xe;
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
      return t === null ? n.child = nc(n, null, l, s) : Ir(t, n, l, s), n.child;
    }
    var Ig = !1;
    function r_(t, n, s) {
      var l = n.type, c = l._context, h = n.pendingProps, x = n.memoizedProps, T = h.value;
      {
        "value" in h || Ig || (Ig = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = n.type.propTypes;
        w && kr(w, h, "prop", "Context.Provider");
      }
      if (p(n, c, T), x !== null) {
        var N = x.value;
        if (Vr(N, T)) {
          if (x.children === h.children && !An())
            return Is(t, n, s);
        } else
          H(n, c, s);
      }
      var U = h.children;
      return Ir(t, n, U, s), n.child;
    }
    var qg = !1;
    function i_(t, n, s) {
      var l = n.type;
      l._context === void 0 ? l !== l.Consumer && (qg || (qg = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var c = n.pendingProps, h = c.children;
      typeof h != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ye(n, s);
      var x = Re(l);
      Xi(n);
      var T;
      return Wf.current = n, Zi(!0), T = h(x), Zi(!1), Sa(), n.flags |= kn, Ir(t, n, T, s), n.child;
    }
    function Eh() {
      ba = !0;
    }
    function Is(t, n, s) {
      return t !== null && (n.dependencies = t.dependencies), yg(), Yh(n.lanes), vn(s, n.childLanes) ? (hS(t, n), n.child) : null;
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
        return h === null ? (l.deletions = [t], l.flags |= mr) : h.push(t), s.flags |= qt, s;
      }
    }
    function qm(t, n) {
      var s = t.lanes;
      return !!vn(s, n);
    }
    function s_(t, n, s) {
      switch (n.tag) {
        case pe:
          Ng(n), n.stateNode, tc();
          break;
        case Ee:
          Vy(n);
          break;
        case le: {
          var l = n.type;
          ai(l) && Yi(n);
          break;
        }
        case Me:
          nm(n, n.stateNode.containerInfo);
          break;
        case ve: {
          var c = n.memoizedProps.value, h = n.type._context;
          p(n, h, c);
          break;
        }
        case ne:
          {
            var x = vn(s, n.childLanes);
            x && (n.flags |= gt);
            {
              var T = n.stateNode;
              T.effectDuration = 0, T.passiveEffectDuration = 0;
            }
          }
          break;
        case K: {
          var w = n.memoizedState;
          if (w !== null) {
            if (w.dehydrated !== null)
              return ql(n, ic(Ra.current)), n.flags |= Mt, null;
            var N = n.child, U = N.childLanes;
            if (vn(s, U))
              return Lg(t, n, s);
            ql(n, ic(Ra.current));
            var I = Is(t, n, s);
            return I !== null ? I.sibling : null;
          } else
            ql(n, ic(Ra.current));
          break;
        }
        case ke: {
          var Z = (t.flags & Mt) !== Se, re = vn(s, n.childLanes);
          if (Z) {
            if (re)
              return jg(t, n, s);
            n.flags |= Mt;
          }
          var me = n.memoizedState;
          if (me !== null && (me.rendering = null, me.tail = null, me.lastEffect = null), ql(n, Ra.current), re)
            break;
          return null;
        }
        case at:
        case Ie:
          return n.lanes = fe, zg(t, n, s);
      }
      return Is(t, n, s);
    }
    function Yg(t, n, s) {
      if (n._debugNeedsRemount && t !== null)
        return a_(t, n, _v(n.type, n.key, n.pendingProps, n._debugOwner || null, n.mode, n.lanes));
      if (t !== null) {
        var l = t.memoizedProps, c = n.pendingProps;
        if (l !== c || An() || // Force a re-render if the implementation changed due to hot reload:
        n.type !== t.type)
          ba = !0;
        else {
          var h = qm(t, s);
          if (!h && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (n.flags & Mt) === Se)
            return ba = !1, s_(t, n, s);
          (t.flags & Cn) !== Se ? ba = !0 : ba = !1;
        }
      } else if (ba = !1, Rr() && K1(n)) {
        var x = n.index, T = $1();
        zy(n, T, x);
      }
      switch (n.lanes = fe, n.tag) {
        case Je:
          return YS(t, n, n.type, s);
        case Pe: {
          var w = n.elementType;
          return IS(t, n, w, s);
        }
        case ce: {
          var N = n.type, U = n.pendingProps, I = n.elementType === N ? U : fi(N, U);
          return km(t, n, N, I, s);
        }
        case le: {
          var Z = n.type, re = n.pendingProps, me = n.elementType === Z ? re : fi(Z, re);
          return Ag(t, n, Z, me, s);
        }
        case pe:
          return PS(t, n, s);
        case Ee:
          return VS(t, n, s);
        case he:
          return jS(t, n);
        case K:
          return Lg(t, n, s);
        case Me:
          return n_(t, n, s);
        case k: {
          var xe = n.type, Ze = n.pendingProps, dt = n.elementType === xe ? Ze : fi(xe, Ze);
          return Tg(t, n, xe, dt, s);
        }
        case we:
          return BS(t, n, s);
        case nt:
          return kS(t, n, s);
        case ne:
          return HS(t, n, s);
        case ve:
          return r_(t, n, s);
        case Oe:
          return i_(t, n, s);
        case O: {
          var tt = n.type, dn = n.pendingProps, hn = fi(tt, dn);
          if (n.type !== n.elementType) {
            var Q = tt.propTypes;
            Q && kr(
              Q,
              hn,
              // Resolved for outer only
              "prop",
              Ue(tt)
            );
          }
          return hn = fi(tt.type, hn), Cg(t, n, tt, hn, s);
        }
        case V:
          return wg(t, n, n.type, n.pendingProps, s);
        case Ce: {
          var ie = n.type, q = n.pendingProps, _e = n.elementType === ie ? q : fi(ie, q);
          return qS(t, n, ie, _e, s);
        }
        case ke:
          return jg(t, n, s);
        case it:
          break;
        case at:
          return zg(t, n, s);
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function l_(t, n, s) {
      switch (qp(n), n.tag) {
        case le: {
          var l = n.type;
          ai(l) && gl(n);
          var c = n.flags;
          return c & Jn ? (n.flags = c & ~Jn | Mt, (n.mode & Ft) !== lt && Dm(n), n) : null;
        }
        case pe: {
          rc(n), bu(n), lm();
          var h = n.flags;
          return (h & Jn) !== Se && (h & Mt) === Se ? (n.flags = h & ~Jn | Mt, n) : null;
        }
        case Ee:
          return rm(n), null;
        case K: {
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
          return T & Jn ? (n.flags = T & ~Jn | Mt, (n.mode & Ft) !== lt && Dm(n), n) : null;
        }
        case ke:
          return ac(n), null;
        case Me:
          return rc(n), null;
        case ve:
          var w = n.type._context;
          return S(w, n), null;
        case at:
        case Ie:
          return cv(n), null;
        case ot:
          return null;
        default:
          return null;
      }
    }
    function Wg(t, n, s) {
      switch (qp(n), n.tag) {
        case le: {
          var l = n.type.childContextTypes;
          l != null && gl(n);
          break;
        }
        case pe: {
          rc(n), bu(n), lm();
          break;
        }
        case Ee: {
          rm(n);
          break;
        }
        case Me:
          rc(n);
          break;
        case K:
          ac(n);
          break;
        case ke:
          ac(n);
          break;
        case ve:
          var c = n.type._context;
          S(c, n);
          break;
        case at:
        case Ie:
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
        var U = document.createEvent("Event"), I = !1, Z = !0, re = window.event, me = Object.getOwnPropertyDescriptor(window, "event");
        function xe() {
          Ym.removeEventListener(ie, dt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = re);
        }
        var Ze = Array.prototype.slice.call(arguments, 3);
        function dt() {
          I = !0, xe(), s.apply(l, Ze), Z = !1;
        }
        var tt, dn = !1, hn = !1;
        function Q(q) {
          if (tt = q.error, dn = !0, tt === null && q.colno === 0 && q.lineno === 0 && (hn = !0), q.defaultPrevented && tt != null && typeof tt == "object")
            try {
              tt._suppressLogging = !0;
            } catch {
            }
        }
        var ie = "react-" + (n || "invokeguardedcallback");
        if (window.addEventListener("error", Q), Ym.addEventListener(ie, dt, !1), U.initEvent(ie, !1, !1), Ym.dispatchEvent(U), me && Object.defineProperty(window, "event", me), I && Z && (dn ? hn && (tt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : tt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(tt)), window.removeEventListener("error", Q), !I)
          return xe(), Qg.apply(this, arguments);
      };
    }
    var u_ = Gg, Gf = !1, Rh = null, o_ = {
      onError: function(t) {
        Gf = !0, Rh = t;
      }
    };
    function Xg(t, n, s, l, c, h, x, T, w) {
      Gf = !1, Rh = null, u_.apply(o_, arguments);
    }
    function c_() {
      return Gf;
    }
    function Zg() {
      if (Gf) {
        var t = Rh;
        return Gf = !1, Rh = null, t;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var Jg = null;
    Jg = /* @__PURE__ */ new Set();
    var Mh = !1, Gl = !1, f_ = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, fc = null, dc = null;
    function or(t) {
      Xg(null, function() {
        throw t;
      }), Zg();
    }
    var d_ = function(t, n) {
      if (n.props = t.memoizedProps, n.state = t.memoizedState, t.mode & Ft)
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
        qs(Un, t);
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
    function bh(t, n) {
      var s = t.ref;
      if (s !== null)
        if (typeof s == "function") {
          var l;
          try {
            if (de && be && t.mode & Ft)
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
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(t));
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
      ka(t.containerInfo), Fe = n, m_();
      var s = e0;
      return e0 = !1, s;
    }
    function m_() {
      for (; Fe !== null; ) {
        var t = Fe, n = t.child;
        (t.subtreeFlags & fu) !== Se && n !== null ? (ra(n, t), Fe = n) : v_();
      }
    }
    function v_() {
      for (; Fe !== null; ) {
        var t = Fe;
        kt(t);
        try {
          y_(t);
        } catch (s) {
          or(s), cr(t, t.return, s);
        }
        qn();
        var n = t.sibling;
        if (n !== null) {
          ra(n, t.return), Fe = n;
          return;
        }
        Fe = t.return;
      }
    }
    function y_(t) {
      var n = t.alternate, s = t.flags;
      if ((s & Ar) !== Se) {
        switch (kt(t), t.tag) {
          case ce:
          case k:
          case V:
            break;
          case le: {
            if (n !== null) {
              var l = n.memoizedProps, c = n.memoizedState, h = t.stateNode;
              t.type === t.elementType && !Xu && (h.props !== t.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(t) || "instance"), h.state !== t.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(t) || "instance"));
              var x = h.getSnapshotBeforeUpdate(t.elementType === t.type ? l : fi(t.type, l), c);
              {
                var T = Jg;
                x === void 0 && !T.has(t.type) && (T.add(t.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(t)));
              }
              h.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          }
          case pe: {
            if (Or) {
              var w = t.stateNode;
              M(w.containerInfo);
            }
            break;
          }
          case Ee:
          case he:
          case Me:
          case Ce:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        qn();
      }
    }
    function hi(t, n, s) {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var h = c.next, x = h;
        do {
          if ((x.tag & t) === t) {
            var T = x.destroy;
            x.destroy = void 0, T !== void 0 && ((t & lr) !== $a ? Sr(n) : (t & Un) !== $a && Uu(n), Th(n, s, T), (t & lr) !== $a ? Ef() : (t & Un) !== $a && Qo());
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
            (t & lr) !== $a ? _f(n) : (t & Un) !== $a && Rf(n);
            var x = h.create;
            h.destroy = x(), (t & lr) !== $a ? Ou() : (t & Un) !== $a && Ul();
            {
              var T = h.destroy;
              if (T !== void 0 && typeof T != "function") {
                var w = void 0;
                (h.tag & Un) !== Se ? w = "useLayoutEffect" : (h.tag & Yl) !== Se ? w = "useInsertionEffect" : w = "useEffect";
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
      if ((n.flags & gt) !== Se)
        switch (n.tag) {
          case ne: {
            var s = n.stateNode.passiveEffectDuration, l = n.memoizedProps, c = l.id, h = l.onPostCommit, x = mg(), T = n.alternate === null ? "mount" : "update";
            pg() && (T = "nested-update"), typeof h == "function" && h(c, T, s, x);
            var w = n.return;
            e: for (; w !== null; ) {
              switch (w.tag) {
                case pe:
                  var N = w.stateNode;
                  N.passiveEffectDuration += s;
                  break e;
                case ne:
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
      if ((s.flags & hs) !== Se)
        switch (s.tag) {
          case ce:
          case k:
          case V: {
            if (!Gl)
              if (s.mode & Ft)
                try {
                  na(), qs(Un | Sn, s);
                } finally {
                  ta(s);
                }
              else
                qs(Un | Sn, s);
            break;
          }
          case le: {
            var c = s.stateNode;
            if (s.flags & gt && !Gl)
              if (n === null)
                if (s.type === s.elementType && !Xu && (c.props !== s.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(s) || "instance"), c.state !== s.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(s) || "instance")), s.mode & Ft)
                  try {
                    na(), c.componentDidMount();
                  } finally {
                    ta(s);
                  }
                else
                  c.componentDidMount();
              else {
                var h = s.elementType === s.type ? n.memoizedProps : fi(s.type, n.memoizedProps), x = n.memoizedState;
                if (s.type === s.elementType && !Xu && (c.props !== s.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(s) || "instance"), c.state !== s.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(s) || "instance")), s.mode & Ft)
                  try {
                    na(), c.componentDidUpdate(h, x, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ta(s);
                  }
                else
                  c.componentDidUpdate(h, x, c.__reactInternalSnapshotBeforeUpdate);
              }
            var T = s.updateQueue;
            T !== null && (s.type === s.elementType && !Xu && (c.props !== s.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(s) || "instance"), c.state !== s.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(s) || "instance")), _y(s, T, c));
            break;
          }
          case pe: {
            var w = s.updateQueue;
            if (w !== null) {
              var N = null;
              if (s.child !== null)
                switch (s.child.tag) {
                  case Ee:
                    N = Kr(s.child.stateNode);
                    break;
                  case le:
                    N = s.child.stateNode;
                    break;
                }
              _y(s, w, N);
            }
            break;
          }
          case Ee: {
            var U = s.stateNode;
            if (n === null && s.flags & gt) {
              var I = s.type, Z = s.memoizedProps;
              Pa(U, I, Z, s);
            }
            break;
          }
          case he:
            break;
          case Me:
            break;
          case ne: {
            {
              var re = s.memoizedProps, me = re.onCommit, xe = re.onRender, Ze = s.stateNode.effectDuration, dt = mg(), tt = n === null ? "mount" : "update";
              pg() && (tt = "nested-update"), typeof xe == "function" && xe(s.memoizedProps.id, tt, s.actualDuration, s.treeBaseDuration, s.actualStartTime, dt);
              {
                typeof me == "function" && me(s.memoizedProps.id, tt, Ze, dt), FE(s);
                var dn = s.return;
                e: for (; dn !== null; ) {
                  switch (dn.tag) {
                    case pe:
                      var hn = dn.stateNode;
                      hn.effectDuration += Ze;
                      break e;
                    case ne:
                      var Q = dn.stateNode;
                      Q.effectDuration += Ze;
                      break e;
                  }
                  dn = dn.return;
                }
              }
            }
            break;
          }
          case K: {
            w_(t, s);
            break;
          }
          case ke:
          case Ce:
          case it:
          case at:
          case Ie:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Gl || s.flags & Li && t0(s);
    }
    function S_(t) {
      switch (t.tag) {
        case ce:
        case k:
        case V: {
          if (t.mode & Ft)
            try {
              na(), Kg(t, t.return);
            } finally {
              ta(t);
            }
          else
            Kg(t, t.return);
          break;
        }
        case le: {
          var n = t.stateNode;
          typeof n.componentDidMount == "function" && h_(t, t.return, n), $g(t, t.return);
          break;
        }
        case Ee: {
          $g(t, t.return);
          break;
        }
      }
    }
    function __(t, n) {
      var s = null;
      if (Or)
        for (var l = t; ; ) {
          if (l.tag === Ee) {
            if (s === null) {
              s = l;
              var c = l.stateNode;
              n ? Qc(c) : Gc(l.stateNode, l.memoizedProps);
            }
          } else if (l.tag === he) {
            if (s === null) {
              var h = l.stateNode;
              n ? ti(h) : ll(h, l.memoizedProps);
            }
          } else if (!((l.tag === at || l.tag === Ie) && l.memoizedState !== null && l !== t)) {
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
          case Ee:
            l = Kr(s);
            break;
          default:
            l = s;
        }
        if (typeof n == "function") {
          var c;
          if (t.mode & Ft)
            try {
              na(), c = n(l);
            } finally {
              ta(t);
            }
          else
            c = n(l);
          typeof c == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(t));
        } else
          n.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(t)), n.current = l;
      }
    }
    function E_(t) {
      var n = t.ref;
      if (n !== null)
        if (typeof n == "function")
          if (t.mode & Ft)
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
      switch (Tn(n), n.tag) {
        case ce:
        case k:
        case O:
        case V: {
          var l = n.updateQueue;
          if (l !== null) {
            var c = l.lastEffect;
            if (c !== null) {
              var h = c.next, x = h;
              do {
                var T = x, w = T.destroy, N = T.tag;
                w !== void 0 && ((N & Yl) !== $a ? Th(n, s, w) : (N & Un) !== $a && (Uu(n), n.mode & Ft ? (na(), Th(n, s, w), ta(n)) : Th(n, s, w), Qo())), x = x.next;
              } while (x !== h);
            }
          }
          return;
        }
        case le: {
          bh(n, s);
          var U = n.stateNode;
          typeof U.componentWillUnmount == "function" && Wm(n, s, U);
          return;
        }
        case Ee: {
          bh(n, s);
          return;
        }
        case Me: {
          Or ? u0(t, n, s) : $r && M_(n);
          return;
        }
        case Ve:
          return;
        case it:
          return;
      }
    }
    function r0(t, n, s) {
      for (var l = n; ; ) {
        if (n0(t, l, s), l.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        (!Or || l.tag !== Me)) {
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
        if (t.child = null, t.deletions = null, t.sibling = null, t.tag === Ee) {
          var s = t.stateNode;
          s !== null && sl(s);
        }
        t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
    }
    function M_(t) {
      if ($r) {
        var n = t.stateNode, s = n.containerInfo, l = W(s);
        Xe(s, l);
      }
    }
    function b_(t) {
      if ($r) {
        switch (t.tag) {
          case le:
          case Ee:
          case he:
            return;
          case pe:
          case Me: {
            var n = t.stateNode, s = n.containerInfo, l = n.pendingChildren;
            Xe(s, l);
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
      return t.tag === Ee || t.tag === pe || t.tag === Me;
    }
    function s0(t) {
      var n = t;
      e: for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || a0(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== Ee && n.tag !== he && n.tag !== Ve; ) {
          if (n.flags & qt || n.child === null || n.tag === Me)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & qt))
          return n.stateNode;
      }
    }
    function l0(t) {
      if (Or) {
        var n = T_(t);
        switch (n.tag) {
          case Ee: {
            var s = n.stateNode;
            n.flags & Fa && (gs(s), n.flags &= ~Fa);
            var l = s0(t);
            Gm(t, l, s);
            break;
          }
          case pe:
          case Me: {
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
      var l = t.tag, c = l === Ee || l === he;
      if (c) {
        var h = t.stateNode;
        n ? yr(s, h, n) : ha(s, h);
      } else if (l !== Me) {
        var x = t.child;
        if (x !== null) {
          Qm(x, n, s);
          for (var T = x.sibling; T !== null; )
            Qm(T, n, s), T = T.sibling;
        }
      }
    }
    function Gm(t, n, s) {
      var l = t.tag, c = l === Ee || l === he;
      if (c) {
        var h = t.stateNode;
        n ? Ur(s, h, n) : vo(s, h);
      } else if (l !== Me) {
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
              case Ee:
                h = w, x = !1;
                break e;
              case pe:
                h = w.containerInfo, x = !0;
                break e;
              case Me:
                h = w.containerInfo, x = !0;
                break e;
            }
            T = T.return;
          }
          c = !0;
        }
        if (l.tag === Ee || l.tag === he)
          r0(t, l, s), x ? ys(h, l.stateNode) : Va(h, l.stateNode);
        else if (l.tag === Ve)
          x ? Sd(h, l.stateNode) : xd(h, l.stateNode);
        else if (l.tag === Me) {
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
          l = l.return, l.tag === Me && (c = !1);
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function C_(t, n, s) {
      Or ? u0(t, n, s) : r0(t, n, s), R_(n);
    }
    function Xm(t, n) {
      if (!Or) {
        switch (n.tag) {
          case ce:
          case k:
          case O:
          case V: {
            if (hi(Yl | Sn, n, n.return), qs(Yl | Sn, n), n.mode & Ft)
              try {
                na(), hi(Un | Sn, n, n.return);
              } finally {
                ta(n);
              }
            else
              hi(Un | Sn, n, n.return);
            return;
          }
          case ne:
            return;
          case K: {
            o0(n), Ch(n);
            return;
          }
          case ke: {
            Ch(n);
            return;
          }
          case pe: {
            if (zn && t !== null) {
              var s = t.memoizedState;
              if (s.isDehydrated) {
                var l = n.stateNode;
                xo(l.containerInfo);
              }
            }
            break;
          }
          case at:
          case Ie:
            return;
        }
        b_(n);
        return;
      }
      switch (n.tag) {
        case ce:
        case k:
        case O:
        case V: {
          if (hi(Yl | Sn, n, n.return), qs(Yl | Sn, n), n.mode & Ft)
            try {
              na(), hi(Un | Sn, n, n.return);
            } finally {
              ta(n);
            }
          else
            hi(Un | Sn, n, n.return);
          return;
        }
        case le:
          return;
        case Ee: {
          var c = n.stateNode;
          if (c != null) {
            var h = n.memoizedProps, x = t !== null ? t.memoizedProps : h, T = n.type, w = n.updateQueue;
            n.updateQueue = null, w !== null && yo(c, w, T, x, h, n);
          }
          return;
        }
        case he: {
          if (n.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var N = n.stateNode, U = n.memoizedProps, I = t !== null ? t.memoizedProps : U;
          ei(N, I, U);
          return;
        }
        case pe: {
          if (zn && t !== null) {
            var Z = t.memoizedState;
            if (Z.isDehydrated) {
              var re = n.stateNode;
              xo(re.containerInfo);
            }
          }
          return;
        }
        case ne:
          return;
        case K: {
          o0(n), Ch(n);
          return;
        }
        case ke: {
          Ch(n);
          return;
        }
        case Ce:
          return;
      }
      throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function o0(t) {
      t.memoizedState;
    }
    function w_(t, n) {
      if (zn) {
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
    function Ch(t) {
      var n = t.updateQueue;
      if (n !== null) {
        t.updateQueue = null;
        var s = t.stateNode;
        s === null && (s = t.stateNode = new f_()), n.forEach(function(l) {
          var c = PE.bind(null, t, l);
          if (!s.has(l)) {
            if (s.add(l), xr)
              if (fc !== null && dc !== null)
                id(dc, fc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(c, c);
          }
        });
      }
    }
    function z_(t) {
      Or && gs(t.stateNode);
    }
    function D_(t, n, s) {
      fc = s, dc = t, Fe = n, A_(t, s), fc = null, dc = null;
    }
    function A_(t, n) {
      for (; Fe !== null; ) {
        var s = Fe, l = s.deletions;
        if (l !== null)
          for (var c = 0; c < l.length; c++) {
            var h = l[c];
            try {
              C_(t, h, s);
            } catch (T) {
              or(T), cr(h, s, T);
            }
          }
        var x = s.child;
        (s.subtreeFlags & ds) !== Se && x !== null ? (ra(x, s), Fe = x) : N_(t, n);
      }
    }
    function N_(t, n) {
      for (; Fe !== null; ) {
        var s = Fe;
        kt(s);
        try {
          F_(s, t, n);
        } catch (c) {
          or(c), cr(s, s.return, c);
        }
        qn();
        var l = s.sibling;
        if (l !== null) {
          ra(l, s.return), Fe = l;
          return;
        }
        Fe = s.return;
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
          case K: {
            var h = t.memoizedState, x = h !== null;
            if (x) {
              var T = t.alternate, w = T !== null && T.memoizedState !== null;
              w || bE();
            }
            break;
          }
          case at: {
            var N = t.memoizedState, U = N !== null, I = t.alternate, Z = I !== null && I.memoizedState !== null, re = t;
            Or && __(re, U);
            {
              if (U && !Z && (re.mode & Gt) !== lt) {
                Fe = re;
                for (var me = re.child; me !== null; )
                  Fe = me, U_(me), me = me.sibling;
              }
              break;
            }
          }
        }
      var xe = l & (qt | gt | ir);
      switch (xe) {
        case qt: {
          l0(t), t.flags &= ~qt;
          break;
        }
        case $s: {
          l0(t), t.flags &= ~qt;
          var Ze = t.alternate;
          Xm(Ze, t);
          break;
        }
        case ir: {
          t.flags &= ~ir;
          break;
        }
        case oo: {
          t.flags &= ~ir;
          var dt = t.alternate;
          Xm(dt, t);
          break;
        }
        case gt: {
          var tt = t.alternate;
          Xm(tt, t);
          break;
        }
      }
    }
    function O_(t, n, s) {
      fc = s, dc = n, Fe = t, c0(t, n, s), fc = null, dc = null;
    }
    function c0(t, n, s) {
      for (var l = (t.mode & Gt) !== lt; Fe !== null; ) {
        var c = Fe, h = c.child;
        if (c.tag === at && l) {
          var x = c.memoizedState !== null, T = x || Mh;
          if (T) {
            Zm(t, n, s);
            continue;
          } else {
            var w = c.alternate, N = w !== null && w.memoizedState !== null, U = N || Gl, I = Mh, Z = Gl;
            Mh = T, Gl = U, Gl && !Z && (Fe = c, L_(c));
            for (var re = h; re !== null; )
              Fe = re, c0(
                re,
                // New root; bubble back up to here and stop.
                n,
                s
              ), re = re.sibling;
            Fe = c, Mh = I, Gl = Z, Zm(t, n, s);
            continue;
          }
        }
        (c.subtreeFlags & hs) !== Se && h !== null ? (ra(h, c), Fe = h) : Zm(t, n, s);
      }
    }
    function Zm(t, n, s) {
      for (; Fe !== null; ) {
        var l = Fe;
        if ((l.flags & hs) !== Se) {
          var c = l.alternate;
          kt(l);
          try {
            x_(n, c, l, s);
          } catch (x) {
            or(x), cr(l, l.return, x);
          }
          qn();
        }
        if (l === t) {
          Fe = null;
          return;
        }
        var h = l.sibling;
        if (h !== null) {
          ra(h, l.return), Fe = h;
          return;
        }
        Fe = l.return;
      }
    }
    function U_(t) {
      for (; Fe !== null; ) {
        var n = Fe, s = n.child;
        switch (n.tag) {
          case ce:
          case k:
          case O:
          case V: {
            if (n.mode & Ft)
              try {
                na(), hi(Un, n, n.return);
              } finally {
                ta(n);
              }
            else
              hi(Un, n, n.return);
            break;
          }
          case le: {
            bh(n, n.return);
            var l = n.stateNode;
            typeof l.componentWillUnmount == "function" && Wm(n, n.return, l);
            break;
          }
          case Ee: {
            bh(n, n.return);
            break;
          }
          case at: {
            var c = n.memoizedState !== null;
            if (c) {
              f0(t);
              continue;
            }
            break;
          }
        }
        s !== null ? (s.return = n, Fe = s) : f0(t);
      }
    }
    function f0(t) {
      for (; Fe !== null; ) {
        var n = Fe;
        if (n === t) {
          Fe = null;
          return;
        }
        var s = n.sibling;
        if (s !== null) {
          s.return = n.return, Fe = s;
          return;
        }
        Fe = n.return;
      }
    }
    function L_(t) {
      for (; Fe !== null; ) {
        var n = Fe, s = n.child;
        if (n.tag === at) {
          var l = n.memoizedState !== null;
          if (l) {
            d0(t);
            continue;
          }
        }
        s !== null ? (s.return = n, Fe = s) : d0(t);
      }
    }
    function d0(t) {
      for (; Fe !== null; ) {
        var n = Fe;
        kt(n);
        try {
          S_(n);
        } catch (l) {
          or(l), cr(n, n.return, l);
        }
        if (qn(), n === t) {
          Fe = null;
          return;
        }
        var s = n.sibling;
        if (s !== null) {
          s.return = n.return, Fe = s;
          return;
        }
        Fe = n.return;
      }
    }
    function B_(t, n) {
      Fe = n, k_(n, t);
    }
    function k_(t, n) {
      for (; Fe !== null; ) {
        var s = Fe, l = s.child;
        (s.subtreeFlags & Ua) !== Se && l !== null ? (ra(l, s), Fe = l) : H_(t, n);
      }
    }
    function H_(t, n) {
      for (; Fe !== null; ) {
        var s = Fe;
        if ((s.flags & rr) !== Se) {
          kt(s);
          try {
            P_(n, s);
          } catch (c) {
            or(c), cr(s, s.return, c);
          }
          qn();
        }
        if (s === t) {
          Fe = null;
          return;
        }
        var l = s.sibling;
        if (l !== null) {
          ra(l, s.return), Fe = l;
          return;
        }
        Fe = s.return;
      }
    }
    function P_(t, n) {
      switch (n.tag) {
        case ce:
        case k:
        case V: {
          if (n.mode & Ft) {
            zm();
            try {
              qs(lr | Sn, n);
            } finally {
              wm(n);
            }
          } else
            qs(lr | Sn, n);
          break;
        }
      }
    }
    function V_(t) {
      Fe = t, j_();
    }
    function j_() {
      for (; Fe !== null; ) {
        var t = Fe, n = t.child;
        if ((Fe.flags & mr) !== Se) {
          var s = t.deletions;
          if (s !== null) {
            for (var l = 0; l < s.length; l++) {
              var c = s[l];
              Fe = c, Y_(c, t);
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
            Fe = t;
          }
        }
        (t.subtreeFlags & Ua) !== Se && n !== null ? (ra(n, t), Fe = n) : I_();
      }
    }
    function I_() {
      for (; Fe !== null; ) {
        var t = Fe;
        (t.flags & rr) !== Se && (kt(t), q_(t), qn());
        var n = t.sibling;
        if (n !== null) {
          ra(n, t.return), Fe = n;
          return;
        }
        Fe = t.return;
      }
    }
    function q_(t) {
      switch (t.tag) {
        case ce:
        case k:
        case V: {
          t.mode & Ft ? (zm(), hi(lr | Sn, t, t.return), wm(t)) : hi(lr | Sn, t, t.return);
          break;
        }
      }
    }
    function Y_(t, n) {
      for (; Fe !== null; ) {
        var s = Fe;
        kt(s), Q_(s, n), qn();
        var l = s.child;
        l !== null ? (ra(l, s), Fe = l) : W_(t);
      }
    }
    function W_(t) {
      for (; Fe !== null; ) {
        var n = Fe, s = n.sibling, l = n.return;
        if (i0(n), n === t) {
          Fe = null;
          return;
        }
        if (s !== null) {
          ra(s, l), Fe = s;
          return;
        }
        Fe = l;
      }
    }
    function Q_(t, n) {
      switch (t.tag) {
        case ce:
        case k:
        case V: {
          t.mode & Ft ? (zm(), hi(lr, t, n), wm(t)) : hi(lr, t, n);
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
        case ce:
        case k:
        case V: {
          try {
            qs(Un | Sn, t);
          } catch (s) {
            or(s), cr(t, t.return, s);
          }
          break;
        }
        case le: {
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
        case ce:
        case k:
        case V: {
          try {
            qs(lr | Sn, t);
          } catch (n) {
            or(n), cr(t, t.return, n);
          }
          break;
        }
      }
    }
    function Z_(t) {
      switch (t.tag) {
        case ce:
        case k:
        case V: {
          try {
            hi(Un | Sn, t, t.return);
          } catch (s) {
            or(s), cr(t, t.return, s);
          }
          break;
        }
        case le: {
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Wm(t, t.return, n);
          break;
        }
      }
    }
    function J_(t) {
      switch (t.tag) {
        case ce:
        case k:
        case V:
          try {
            hi(lr | Sn, t, t.return);
          } catch (n) {
            or(n), cr(t, t.return, n);
          }
      }
    }
    var wh = 0, zh = 1, Dh = 2, Ah = 3, Nh = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Xf = Symbol.for;
      wh = Xf("selector.component"), zh = Xf("selector.has_pseudo_class"), Dh = Xf("selector.role"), Ah = Xf("selector.test_id"), Nh = Xf("selector.text");
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
          if (t.tag === Ee) {
            var s = t.stateNode;
            if (mu(s, n.value))
              return !0;
          }
          break;
        case Nh:
          if (t.tag === Ee || t.tag === he) {
            var l = mo(t);
            if (l !== null && l.indexOf(n.value) >= 0)
              return !0;
          }
          break;
        case Ah:
          if (t.tag === Ee) {
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
          var n = Ue(t.value) || "Unknown";
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
        if (!(h.tag === Ee && sn(h))) {
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
        if (!(c.tag === Ee && sn(c))) {
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
        if (T.tag === Ee) {
          if (sn(T))
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
        if (!(T.tag === Ee && sn(T)) && (Km(T, N) && (c.push($m(N)), w++, w > l && (l = w)), w < n.length))
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
        l.push(Yc(s[c]));
      for (var h = l.length - 1; h > 0; h--)
        for (var x = l[h], T = x.x, w = T + x.width, N = x.y, U = N + x.height, I = h - 1; I >= 0; I--)
          if (h !== I) {
            var Z = l[I], re = Z.x, me = re + Z.width, xe = Z.y, Ze = xe + Z.height;
            if (T >= re && N >= xe && w <= me && U <= Ze) {
              l.splice(h, 1);
              break;
            } else if (T === re && x.width === Z.width && !(Ze < N) && !(xe > U)) {
              xe > N && (Z.height += xe - N, Z.y = N), Ze < U && (Z.height = U - xe), l.splice(h, 1);
              break;
            } else if (N === xe && x.height === Z.height && !(me < T) && !(re > w)) {
              re > T && (Z.width += re - T, Z.x = T), me < w && (Z.width = w - re), l.splice(h, 1);
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
        if (!sn(x)) {
          if (x.tag === Ee) {
            var T = x.stateNode;
            if (Wc(T))
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
    var fE = Math.ceil, ev = m.ReactCurrentDispatcher, tv = m.ReactCurrentOwner, _n = m.ReactCurrentBatchConfig, Ta = m.ReactCurrentActQueue, Pn = (
      /*             */
      0
    ), nv = (
      /*               */
      1
    ), Tr = (
      /*                */
      2
    ), Ca = (
      /*                */
      4
    ), Ys = 0, Zf = 1, Zu = 2, Uh = 3, Jf = 4, v0 = 5, rv = 6, vt = Pn, Cr = null, En = null, Qn = fe, rs = fe, iv = ji(fe), Gn = Ys, Kf = null, Lh = fe, $f = fe, Bh = fe, ed = null, pi = null, av = 0, y0 = 500, g0 = 1 / 0, dE = 500;
    function hc() {
      g0 = yn() + dE;
    }
    function x0() {
      return g0;
    }
    var kh = !1, sv = null, pc = null, Ju = !1, Ws = null, td = fe, lv = [], hE = 50, nd = 0, uv = null, pE = 50, Hh = 0, rd = rn, Ph = fe;
    function Vh() {
      return Cr;
    }
    function qr() {
      return (vt & (Tr | Ca)) !== Pn ? yn() : (rd !== rn || (rd = yn()), rd);
    }
    function Xl(t) {
      var n = t.mode;
      if ((n & Gt) === lt)
        return St;
      if ((vt & Tr) !== Pn && Qn !== fe)
        return Cl(Qn);
      var s = Cf() !== Bd;
      if (s) {
        if (_n.transition !== null) {
          var l = _n.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(t);
        }
        return Ph === Nn && (Ph = wd()), Ph;
      }
      var c = Hr();
      if (c !== Nn)
        return c;
      var h = qc();
      return h;
    }
    function mE(t) {
      var n = t.mode;
      return (n & Gt) === lt ? St : zd();
    }
    function Xn(t, n, s) {
      jE();
      var l = jh(t, n);
      return l === null ? null : (Ds(l, n, s), (vt & Tr) !== fe && l === Cr ? YE(t) : (xr && hf(l, t, n), WE(t), l === Cr && ((vt & Tr) === Pn && ($f = ct($f, n)), Gn === Jf && Zl(l, Qn)), mi(l, s), n === St && vt === Pn && (t.mode & Gt) === lt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ta.isBatchingLegacy && (hc(), Tf())), l);
    }
    function vE(t, n, s) {
      var l = t.current;
      l.lanes = n, Ds(t, n, s), mi(t, s);
    }
    function jh(t, n) {
      t.lanes = ct(t.lanes, n);
      var s = t.alternate;
      s !== null && (s.lanes = ct(s.lanes, n)), s === null && (t.flags & (qt | ir)) !== Se && F0(t);
      for (var l = t, c = t.return; c !== null; )
        c.childLanes = ct(c.childLanes, n), s = c.alternate, s !== null ? s.childLanes = ct(s.childLanes, n) : (c.flags & (qt | ir)) !== Se && F0(t), l = c, c = c.return;
      if (l.tag === pe) {
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
        Cr !== null && (t.mode & Gt) !== lt && // If this is a render phase update (i.e. UNSAFE_componentWillReceiveProps),
        // then don't treat this as an interleaved update. This pattern is
        // accompanied by a warning but we haven't fully deprecated it yet. We can
        // remove once the deferRenderPhaseUpdateToNextBatch flag is enabled.
        (vt & Tr) === Pn
      );
    }
    function mi(t, n) {
      var s = t.callbackNode;
      Td(t, n);
      var l = Nu(t, t === Cr ? Qn : fe);
      if (l === fe) {
        s !== null && U0(s), t.callbackNode = null, t.callbackPriority = Nn;
        return;
      }
      var c = Qi(l), h = t.callbackPriority;
      if (h === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ta.current !== null && s !== pv)) {
        s == null && h !== St && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      s != null && U0(s);
      var x;
      if (c === St)
        t.tag === Ms ? (Ta.isBatchingLegacy !== null && (Ta.didScheduleLegacyUpdate = !0), Ud(R0.bind(null, t))) : _a(R0.bind(null, t)), zt ? Ta.current !== null ? Ta.current.push(oi) : hu(function() {
          vt === Pn && oi();
        }) : Xh(Os, oi), x = null;
      else {
        var T;
        switch (vf(l)) {
          case Ci:
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
      if (wS(), rd = rn, Ph = fe, (vt & (Tr | Ca)) !== Pn)
        throw new Error("Should not already be working.");
      var s = t.callbackNode, l = is();
      if (l && t.callbackNode !== s)
        return null;
      var c = Nu(t, t === Cr ? Qn : fe);
      if (c === fe)
        return null;
      var h = !ws(t, c) && !Cd(t, c) && !n, x = h ? DE(t, c) : Wh(t, c);
      if (x !== Ys) {
        if (x === Zu) {
          var T = Ho(t);
          T !== fe && (c = T, x = ov(t, T));
        }
        if (x === Zf) {
          var w = Kf;
          throw Ku(t, fe), Zl(t, c), mi(t, yn()), w;
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
            if (x === Zf) {
              var Z = Kf;
              throw Ku(t, fe), Zl(t, c), mi(t, yn()), Z;
            }
          }
          t.finishedWork = U, t.finishedLanes = c, yE(t, x, c);
        }
      }
      return mi(t, yn()), t.callbackNode === s ? _0.bind(null, t) : null;
    }
    function ov(t, n) {
      var s = ed;
      if (Za(t)) {
        var l = Ku(t, n);
        l.flags |= Zr, Br(t.containerInfo);
      }
      var c = Wh(t, n);
      if (c !== Zu) {
        var h = pi;
        pi = s, h !== null && E0(h);
      }
      return c;
    }
    function E0(t) {
      pi === null ? pi = t : pi.push.apply(pi, t);
    }
    function yE(t, n, s) {
      switch (n) {
        case Ys:
        case Zf:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zu: {
          $u(t, pi);
          break;
        }
        case Uh: {
          if (Zl(t, s), ff(s) && // do not delay if we're inside an act() scope
          !L0()) {
            var l = av + y0 - yn();
            if (l > 10) {
              var c = Nu(t, fe);
              if (c !== fe)
                break;
              var h = t.suspendedLanes;
              if (!wl(h, s)) {
                qr(), Ad(t, h);
                break;
              }
              t.timeoutHandle = po($u.bind(null, t, pi), l);
              break;
            }
          }
          $u(t, pi);
          break;
        }
        case Jf: {
          if (Zl(t, s), Vo(s))
            break;
          if (!L0()) {
            var x = Md(t, s), T = x, w = yn() - T, N = VE(w) - w;
            if (N > 10) {
              t.timeoutHandle = po($u.bind(null, t, pi), N);
              break;
            }
          }
          $u(t, pi);
          break;
        }
        case v0: {
          $u(t, pi);
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
                  if (!Vr(x(), T))
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
      n = zs(n, Bh), n = zs(n, $f), Dd(t, n);
    }
    function R0(t) {
      if (zS(), (vt & (Tr | Ca)) !== Pn)
        throw new Error("Should not already be working.");
      is();
      var n = Nu(t, fe);
      if (!vn(n, St))
        return mi(t, yn()), null;
      var s = Wh(t, n);
      if (t.tag !== Ms && s === Zu) {
        var l = Ho(t);
        l !== fe && (n = l, s = ov(t, l));
      }
      if (s === Zf) {
        var c = Kf;
        throw Ku(t, fe), Zl(t, n), mi(t, yn()), c;
      }
      if (s === rv)
        throw new Error("Root did not complete. This is a bug in React.");
      var h = t.current.alternate;
      return t.finishedWork = h, t.finishedLanes = n, $u(t, pi), mi(t, yn()), null;
    }
    function xE(t, n) {
      n !== fe && (Ns(t, ct(n, St)), mi(t, yn()), (vt & (Tr | Ca)) === Pn && (hc(), oi()));
    }
    function SE(t) {
      var n = Hr(), s = _n.transition;
      try {
        return _n.transition = null, Fn(Al), t();
      } finally {
        Fn(n), _n.transition = s;
      }
    }
    function _E(t, n) {
      var s = vt;
      vt |= nv;
      try {
        return t(n);
      } finally {
        vt = s, vt === Pn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ta.isBatchingLegacy && (hc(), Tf());
      }
    }
    function EE(t, n, s, l, c) {
      var h = Hr(), x = _n.transition;
      try {
        return _n.transition = null, Fn(Ci), t(n, s, l, c);
      } finally {
        Fn(h), _n.transition = x, vt === Pn && hc();
      }
    }
    function Ih(t) {
      Ws !== null && Ws.tag === Ms && (vt & (Tr | Ca)) === Pn && is();
      var n = vt;
      vt |= nv;
      var s = _n.transition, l = Hr();
      try {
        return _n.transition = null, Fn(Ci), t ? t() : void 0;
      } finally {
        Fn(l), _n.transition = s, vt = n, (vt & (Tr | Ca)) === Pn && oi();
      }
    }
    function RE() {
      return (vt & (Tr | Ca)) !== Pn;
    }
    function ME(t) {
      var n = vt;
      vt |= nv;
      var s = _n.transition, l = Hr();
      try {
        _n.transition = null, Fn(Ci), t();
      } finally {
        Fn(l), _n.transition = s, vt = n, vt === Pn && (hc(), oi());
      }
    }
    function qh(t, n) {
      $t(iv, rs, t), rs = ct(rs, n);
    }
    function cv(t) {
      rs = iv.current, Dn(iv, t);
    }
    function Ku(t, n) {
      t.finishedWork = null, t.finishedLanes = fe;
      var s = t.timeoutHandle;
      if (s !== fa && (t.timeoutHandle = fa, ca(s)), En !== null)
        for (var l = En.return; l !== null; ) {
          var c = l.alternate;
          Wg(c, l), l = l.return;
        }
      Cr = t;
      var h = eo(t.current, null);
      return En = h, Qn = rs = n, Gn = Ys, Kf = null, Lh = fe, $f = fe, Bh = fe, ed = null, pi = null, nn(), ci.discardPendingWarnings(), h;
    }
    function M0(t, n) {
      do {
        var s = En;
        try {
          if (i(), Yy(), qn(), tv.current = null, s === null || s.return === null) {
            Gn = Zf, Kf = n, En = null;
            return;
          }
          if (de && s.mode & Ft && ph(s, !0), ue)
            if (Sa(), n !== null && typeof n == "object" && typeof n.then == "function") {
              var l = n;
              Go(s, l, Qn);
            } else
              Qa(s, n, Qn);
          OS(t, s.return, s, n, Qn), w0(s);
        } catch (c) {
          n = c, En === s && s !== null ? (s = s.return, En = s) : s = En;
          continue;
        }
        return;
      } while (!0);
    }
    function b0() {
      var t = ev.current;
      return ev.current = oh, t === null ? oh : t;
    }
    function T0(t) {
      ev.current = t;
    }
    function bE() {
      av = yn();
    }
    function Yh(t) {
      Lh = ct(t, Lh);
    }
    function TE() {
      Gn === Ys && (Gn = Uh);
    }
    function fv() {
      (Gn === Ys || Gn === Uh || Gn === Zu) && (Gn = Jf), Cr !== null && (Po(Lh) || Po($f)) && Zl(Cr, Qn);
    }
    function CE(t) {
      Gn !== Jf && (Gn = Zu), ed === null ? ed = [t] : ed.push(t);
    }
    function wE() {
      return Gn === Ys;
    }
    function Wh(t, n) {
      var s = vt;
      vt |= Tr;
      var l = b0();
      if (Cr !== t || Qn !== n) {
        if (xr) {
          var c = t.memoizedUpdaters;
          c.size > 0 && (id(t, Qn), c.clear()), pf(t, n);
        }
        Ku(t, n);
      }
      Bu(n);
      do
        try {
          zE();
          break;
        } catch (h) {
          M0(t, h);
        }
      while (!0);
      if (i(), vt = s, T0(l), En !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return er(), Cr = null, Qn = fe, Gn;
    }
    function zE() {
      for (; En !== null; )
        C0(En);
    }
    function DE(t, n) {
      var s = vt;
      vt |= Tr;
      var l = b0();
      if (Cr !== t || Qn !== n) {
        if (xr) {
          var c = t.memoizedUpdaters;
          c.size > 0 && (id(t, Qn), c.clear()), pf(t, n);
        }
        hc(), Ku(t, n);
      }
      Bu(n);
      do
        try {
          AE();
          break;
        } catch (h) {
          M0(t, h);
        }
      while (!0);
      return i(), T0(l), vt = s, En !== null ? (Zo(), Ys) : (er(), Cr = null, Qn = fe, Gn);
    }
    function AE() {
      for (; En !== null && !Od(); )
        C0(En);
    }
    function C0(t) {
      var n = t.alternate;
      kt(t);
      var s;
      (t.mode & Ft) !== lt ? (Cm(t), s = dv(n, t, rs), ph(t, !0)) : s = dv(n, t, rs), qn(), t.memoizedProps = t.pendingProps, s === null ? w0(t) : En = s, tv.current = null;
    }
    function w0(t) {
      var n = t;
      do {
        var s = n.alternate, l = n.return;
        if ((n.flags & Oa) === Se) {
          kt(n);
          var c = void 0;
          if ((n.mode & Ft) === lt ? c = bg(s, n, rs) : (Cm(n), c = bg(s, n, rs), ph(n, !1)), qn(), c !== null) {
            En = c;
            return;
          }
        } else {
          var h = l_(s, n);
          if (h !== null) {
            h.flags &= co, En = h;
            return;
          }
          if ((n.mode & Ft) !== lt) {
            ph(n, !1);
            for (var x = n.actualDuration, T = n.child; T !== null; )
              x += T.actualDuration, T = T.sibling;
            n.actualDuration = x;
          }
          if (l !== null)
            l.flags |= Oa, l.subtreeFlags = Se, l.deletions = null;
          else {
            Gn = rv, En = null;
            return;
          }
        }
        var w = n.sibling;
        if (w !== null) {
          En = w;
          return;
        }
        n = l, En = n;
      } while (n !== null);
      Gn === Ys && (Gn = v0);
    }
    function $u(t, n) {
      var s = Hr(), l = _n.transition;
      try {
        _n.transition = null, Fn(Ci), NE(t, n, s);
      } finally {
        _n.transition = l, Fn(s);
      }
      return null;
    }
    function NE(t, n, s) {
      do
        is();
      while (Ws !== null);
      if (IE(), (vt & (Tr | Ca)) !== Pn)
        throw new Error("Should not already be working.");
      var l = t.finishedWork, c = t.finishedLanes;
      if (On(c), l === null)
        return Ol(), null;
      if (c === fe && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), t.finishedWork = null, t.finishedLanes = fe, l === t.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      t.callbackNode = null, t.callbackPriority = Nn;
      var h = ct(l.lanes, l.childLanes);
      As(t, h), t === Cr && (Cr = null, En = null, Qn = fe), ((l.subtreeFlags & Ua) !== Se || (l.flags & Ua) !== Se) && (Ju || (Ju = !0, Xh(xa, function() {
        return is(), null;
      })));
      var x = (l.subtreeFlags & (fu | ds | hs | Ua)) !== Se, T = (l.flags & (fu | ds | hs | Ua)) !== Se;
      if (x || T) {
        var w = _n.transition;
        _n.transition = null;
        var N = Hr();
        Fn(Ci);
        var U = vt;
        vt |= Ca, tv.current = null, p_(t, l), vg(), D_(t, l, c), rl(t.containerInfo), t.current = l, Ga(c), O_(l, t, c), Xo(), Wo(), vt = U, Fn(N), _n.transition = w;
      } else
        t.current = l, vg();
      var I = Ju;
      if (Ju && (Ju = !1, Ws = t, td = c), h = t.pendingLanes, h === fe && (pc = null), I || N0(t.current, !1), pt(l.stateNode, s), xr && t.memoizedUpdaters.clear(), lE(), mi(t, yn()), n !== null)
        for (var Z = t.onRecoverableError, re = 0; re < n.length; re++) {
          var me = n[re];
          Z(me);
        }
      if (kh) {
        kh = !1;
        var xe = sv;
        throw sv = null, xe;
      }
      return vn(td, St) && t.tag !== Ms && is(), h = t.pendingLanes, vn(h, St) ? (CS(), t === uv ? nd++ : (nd = 0, uv = t)) : nd = 0, oi(), Ol(), null;
    }
    function is() {
      if (Ws !== null) {
        var t = vf(td), n = Tp(Al, t), s = _n.transition, l = Hr();
        try {
          return _n.transition = null, Fn(n), OE();
        } finally {
          Fn(l), _n.transition = s;
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
      var t = Ws, n = td;
      if (Ws = null, td = fe, (vt & (Tr | Ca)) !== Pn)
        throw new Error("Cannot flush passive effects while already rendering.");
      Lu(n);
      var s = vt;
      vt |= Ca, V_(t.current), B_(t, t.current);
      {
        var l = lv;
        lv = [];
        for (var c = 0; c < l.length; c++) {
          var h = l[c];
          g_(t, h);
        }
      }
      Mf(), N0(t.current, !0), vt = s, oi(), Hh = Ws === null ? 0 : Hh + 1, bn(t);
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
      var l = mh(s, n), c = gg(t, l, St);
      mt(t, c);
      var h = qr(), x = jh(t, St);
      x !== null && (Ds(x, St, h), mi(x, h));
    }
    function cr(t, n, s) {
      if (t.tag === pe) {
        D0(t, t, s);
        return;
      }
      var l = null;
      for (l = n; l !== null; ) {
        if (l.tag === pe) {
          D0(l, t, s);
          return;
        } else if (l.tag === le) {
          var c = l.type, h = l.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof h.componentDidCatch == "function" && !z0(h)) {
            var x = mh(s, t), T = Nm(l, x, St);
            mt(l, T);
            var w = qr(), N = jh(l, St);
            N !== null && (Ds(N, St, w), mi(N, w));
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
      var c = qr();
      Ad(t, s), QE(t), Cr === t && wl(Qn, s) && (Gn === Jf || Gn === Uh && ff(Qn) && yn() - av < y0 ? Ku(t, fe) : Bh = ct(Bh, s)), mi(t, c);
    }
    function A0(t, n) {
      n === Nn && (n = mE(t));
      var s = qr(), l = jh(t, n);
      l !== null && (Ds(l, n, s), mi(l, s));
    }
    function HE(t) {
      var n = t.memoizedState, s = Nn;
      n !== null && (s = n.retryLane), A0(t, s);
    }
    function PE(t, n) {
      var s = Nn, l;
      switch (t.tag) {
        case K:
          l = t.stateNode;
          var c = t.memoizedState;
          c !== null && (s = c.retryLane);
          break;
        case ke:
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
      if (nd > hE)
        throw nd = 0, uv = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hh > pE && (Hh = 0, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function IE() {
      ci.flushLegacyContextWarning(), ci.flushPendingUnsafeLifecycleWarnings();
    }
    function N0(t, n) {
      kt(t), Qh(t, gi, Z_), n && Qh(t, nl, J_), Qh(t, gi, G_), n && Qh(t, nl, X_), qn();
    }
    function Qh(t, n, s) {
      for (var l = t, c = null; l !== null; ) {
        var h = l.subtreeFlags & n;
        l !== c && l.child !== null && h !== Se ? l = l.child : ((l.flags & n) !== Se && s(l), l.sibling !== null ? l = l.sibling : l = c = l.return);
      }
    }
    var Gh = null;
    function F0(t) {
      {
        if ((vt & Tr) !== Pn || !(t.mode & Gt))
          return;
        var n = t.tag;
        if (n !== Je && n !== pe && n !== le && n !== ce && n !== k && n !== O && n !== V)
          return;
        var s = qe(t) || "ReactComponent";
        if (Gh !== null) {
          if (Gh.has(s))
            return;
          Gh.add(s);
        } else
          Gh = /* @__PURE__ */ new Set([s]);
        var l = jr;
        try {
          kt(t), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? kt(t) : qn();
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
          if (i(), Yy(), Wg(t, n), V0(n, l), n.mode & Ft && Cm(n), Xg(null, Yg, null, t, n, s), c_()) {
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
      if (zi && !MS())
        switch (t.tag) {
          case ce:
          case k:
          case V: {
            var n = En && qe(En) || "Unknown", s = n;
            if (!hv.has(s)) {
              hv.add(s);
              var l = qe(t) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, n, n);
            }
            break;
          }
          case le: {
            O0 || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), O0 = !0);
            break;
          }
        }
    }
    function id(t, n) {
      if (xr) {
        var s = t.memoizedUpdaters;
        s.forEach(function(l) {
          hf(t, l, n);
        });
      }
    }
    var pv = {};
    function Xh(t, n) {
      {
        var s = Ta.current;
        return s !== null ? (s.push(n), pv) : yf(t, n);
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
        if (t.mode & Gt) {
          if (!m0())
            return;
        } else if (!cE() || vt !== Pn || t.tag !== ce && t.tag !== k && t.tag !== V)
          return;
        if (Ta.current === null) {
          var n = jr;
          try {
            kt(t), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, qe(t));
          } finally {
            n ? kt(t) : qn();
          }
        }
      }
    }
    function QE(t) {
      t.tag !== Ms && m0() && Ta.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
                $$typeof: Bn,
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
          case le: {
            typeof l == "function" && (c = !0);
            break;
          }
          case ce: {
            (typeof l == "function" || h === jt) && (c = !0);
            break;
          }
          case k: {
            (h === Bn || h === jt) && (c = !0);
            break;
          }
          case O:
          case V: {
            (h === Zn || h === jt) && (c = !0);
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
        if (t.context !== Dt)
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
          case ce:
          case V:
          case le:
            w = T;
            break;
          case k:
            w = T.render;
            break;
        }
        if (ia === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var N = !1, U = !1;
        if (w !== null) {
          var I = ia(w);
          I !== void 0 && (s.has(I) ? U = !0 : n.has(I) && (x === le ? U = !0 : N = !0));
        }
        mc !== null && (mc.has(t) || l !== null && mc.has(l)) && (U = !0), U && (t._debugNeedsRemount = !0), (U || N) && Xn(t, St, rn), c !== null && !U && yv(c, n, s), h !== null && yv(h, n, s);
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
          case ce:
          case V:
          case le:
            T = x;
            break;
          case k:
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
            case Ee:
              n.add(l.stateNode);
              return;
            case Me:
              n.add(l.stateNode.containerInfo);
              return;
            case pe:
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
        if (s.tag === Ee)
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
      this.tag = t, this.key = s, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = n, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = fe, this.childLanes = fe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !xv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
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
        return Sv(t) ? le : ce;
      if (t != null) {
        var n = t.$$typeof;
        if (n === Bn)
          return k;
        if (n === Zn)
          return O;
      }
      return Je;
    }
    function eo(t, n) {
      var s = t.alternate;
      s === null ? (s = Di(t.tag, n, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s._debugSource = t._debugSource, s._debugOwner = t._debugOwner, s._debugHookTypes = t._debugHookTypes, s.alternate = t, t.alternate = s) : (s.pendingProps = n, s.type = t.type, s.flags = Se, s.subtreeFlags = Se, s.deletions = null, s.actualDuration = 0, s.actualStartTime = -1), s.flags = t.flags & Nr, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue;
      var l = t.dependencies;
      switch (s.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s.selfBaseDuration = t.selfBaseDuration, s.treeBaseDuration = t.treeBaseDuration, s._debugNeedsRemount = t._debugNeedsRemount, s.tag) {
        case Je:
        case ce:
        case V:
          s.type = vc(t.type);
          break;
        case le:
          s.type = mv(t.type);
          break;
        case k:
          s.type = vv(t.type);
          break;
      }
      return s;
    }
    function rR(t, n) {
      t.flags &= Nr | qt;
      var s = t.alternate;
      if (s === null)
        t.childLanes = fe, t.lanes = n, t.child = null, t.subtreeFlags = Se, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0;
      else {
        t.childLanes = s.childLanes, t.lanes = s.lanes, t.child = s.child, t.subtreeFlags = Se, t.deletions = null, t.memoizedProps = s.memoizedProps, t.memoizedState = s.memoizedState, t.updateQueue = s.updateQueue, t.type = s.type;
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
      return t === tf ? (l = Gt, n === !0 && (l |= mn, l |= si)) : l = lt, xr && (l |= Ft), Di(pe, null, null, l);
    }
    function _v(t, n, s, l, c, h) {
      var x = Je, T = t;
      if (typeof t == "function")
        Sv(t) ? (x = le, T = mv(T)) : T = vc(T);
      else if (typeof t == "string")
        x = Ee;
      else
        e: switch (t) {
          case Vt:
            return Jl(s.children, c, h, n);
          case Rt:
            x = nt, c |= mn, (c & Gt) !== lt && (c |= si);
            break;
          case yt:
            return aR(s, c, h, n);
          case cn:
            return sR(s, c, h, n);
          case hr:
            return lR(s, c, h, n);
          case Dr:
            return P0(s, c, h, n);
          case Xr:
          case pr:
          case ua:
          case cs:
          case la:
          default: {
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Jt:
                  x = ve;
                  break e;
                case dr:
                  x = Oe;
                  break e;
                case Bn:
                  x = k, T = vv(T);
                  break e;
                case Zn:
                  x = O;
                  break e;
                case jt:
                  x = Pe, T = null;
                  break e;
              }
            var w = "";
            {
              (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var N = l ? qe(l) : null;
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
      var c = Di(we, t, l, n);
      return c.lanes = s, c;
    }
    function aR(t, n, s, l) {
      typeof t.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof t.id);
      var c = Di(ne, t, l, n | Ft);
      return c.elementType = yt, c.lanes = s, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function sR(t, n, s, l) {
      var c = Di(K, t, l, n);
      return c.elementType = cn, c.lanes = s, c;
    }
    function lR(t, n, s, l) {
      var c = Di(ke, t, l, n);
      return c.elementType = hr, c.lanes = s, c;
    }
    function P0(t, n, s, l) {
      var c = Di(at, t, l, n);
      c.elementType = Dr, c.lanes = s;
      var h = {};
      return c.stateNode = h, c;
    }
    function Rv(t, n, s) {
      var l = Di(he, t, null, n);
      return l.lanes = s, l;
    }
    function uR() {
      var t = Di(Ee, null, null, lt);
      return t.elementType = "DELETED", t;
    }
    function oR(t) {
      var n = Di(Ve, null, null, lt);
      return n.stateNode = t, n;
    }
    function Mv(t, n, s) {
      var l = t.children !== null ? t.children : [], c = Di(Me, l, t.key, n);
      return c.lanes = s, c.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: t.implementation
      }, c;
    }
    function V0(t, n) {
      return t === null && (t = Di(Je, null, null, lt)), t.tag = n.tag, t.key = n.key, t.elementType = n.elementType, t.type = n.type, t.stateNode = n.stateNode, t.return = n.return, t.child = n.child, t.sibling = n.sibling, t.index = n.index, t.ref = n.ref, t.pendingProps = n.pendingProps, t.memoizedProps = n.memoizedProps, t.updateQueue = n.updateQueue, t.memoizedState = n.memoizedState, t.dependencies = n.dependencies, t.mode = n.mode, t.flags = n.flags, t.subtreeFlags = n.subtreeFlags, t.deletions = n.deletions, t.lanes = n.lanes, t.childLanes = n.childLanes, t.alternate = n.alternate, t.actualDuration = n.actualDuration, t.actualStartTime = n.actualStartTime, t.selfBaseDuration = n.selfBaseDuration, t.treeBaseDuration = n.treeBaseDuration, t._debugSource = n._debugSource, t._debugOwner = n._debugOwner, t._debugNeedsRemount = n._debugNeedsRemount, t._debugHookTypes = n._debugHookTypes, t;
    }
    function cR(t, n, s, l, c) {
      this.tag = n, this.containerInfo = t, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = fa, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Nn, this.eventTimes = zl(fe), this.expirationTimes = zl(rn), this.pendingLanes = fe, this.suspendedLanes = fe, this.pingedLanes = fe, this.expiredLanes = fe, this.mutableReadLanes = fe, this.finishedLanes = fe, this.entangledLanes = fe, this.entanglements = zl(fe), this.identifierPrefix = l, this.onRecoverableError = c, zn && (this.mutableSourceEagerHydrationData = null), this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var h = this.pendingUpdatersLaneMap = [], x = 0; x < Cu; x++)
          h.push(/* @__PURE__ */ new Set());
      }
      switch (n) {
        case tf:
          this._debugRootType = s ? "hydrateRoot()" : "createRoot()";
          break;
        case Ms:
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
      return je(I), U;
    }
    var fR = "18.0.0-fc46dba67-20220329";
    function dR(t, n, s) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Dp(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ge,
        key: l == null ? null : "" + l,
        children: t,
        containerInfo: n,
        implementation: s
      };
    }
    var bv, Tv;
    bv = !1, Tv = {};
    function I0(t) {
      if (!t)
        return Dt;
      var n = C(t), s = wo(n);
      if (n.tag === le) {
        var l = n.type;
        if (ai(l))
          return bi(n, l, s);
      }
      return s;
    }
    function hR(t) {
      var n = C(t);
      if (n === void 0) {
        if (typeof t.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var s = Object.keys(t).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + s);
      }
      var l = Fr(n);
      return l === null ? null : l.stateNode;
    }
    function pR(t, n) {
      {
        var s = C(t);
        if (s === void 0) {
          if (typeof t.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(t).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var c = Fr(s);
        if (c === null)
          return null;
        if (c.mode & mn) {
          var h = qe(s) || "Component";
          if (!Tv[h]) {
            Tv[h] = !0;
            var x = jr;
            try {
              kt(c), s.mode & mn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, h) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, h);
            } finally {
              x ? kt(x) : qn();
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
      var Z = I.current, re = qr(), me = Xl(Z), xe = et(re, me);
      return xe.callback = n ?? null, mt(Z, xe), vE(I, me, re), I;
    }
    function q0(t, n, s, l) {
      gn(n, t);
      var c = n.current, h = qr(), x = Xl(c);
      Xa(x);
      var T = I0(s);
      n.context === null ? n.context = T : n.pendingContext = T, zi && jr !== null && !bv && (bv = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(jr) || "Unknown"));
      var w = et(h, x);
      w.payload = {
        element: t
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l), mt(c, w);
      var N = Xn(c, x, h);
      return N !== null && xn(N, c, x), x;
    }
    function yR(t) {
      var n = t.current;
      if (!n.child)
        return null;
      switch (n.child.tag) {
        case Ee:
          return Kr(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }
    function gR(t) {
      switch (t.tag) {
        case pe:
          var n = t.stateNode;
          if (Za(n)) {
            var s = of(n);
            xE(n, s);
          }
          break;
        case K:
          var l = qr();
          Ih(function() {
            return Xn(t, St, l);
          });
          var c = St;
          Cv(t, c);
          break;
      }
    }
    function Y0(t, n) {
      var s = t.memoizedState;
      s !== null && s.dehydrated !== null && (s.retryLane = Ae(s.retryLane, n));
    }
    function Cv(t, n) {
      Y0(t, n);
      var s = t.alternate;
      s && Y0(s, n);
    }
    function xR(t) {
      if (t.tag === K) {
        var n = qr(), s = qa;
        Xn(t, s, n), Cv(t, s);
      }
    }
    function SR(t) {
      if (t.tag === K) {
        var n = qr(), s = Xl(t);
        Xn(t, s, n), Cv(t, s);
      }
    }
    function _R(t) {
      var n = Wt(t);
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
        var l = n[s], c = Qt(t) ? t.slice() : R({}, t);
        return s + 1 === n.length ? (Qt(c) ? c.splice(l, 1) : delete c[l], c) : (c[l] = ax(t[l], n, s + 1), c);
      }, sx = function(t, n) {
        return ax(t, n, 0);
      }, lx = function(t, n, s, l) {
        var c = n[l], h = Qt(t) ? t.slice() : R({}, t);
        if (l + 1 === n.length) {
          var x = s[l];
          h[x] = h[c], Qt(h) ? h.splice(c, 1) : delete h[c];
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
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < s.length - 1; l++)
            if (n[l] !== s[l]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return lx(t, n, s, 0);
      }, ox = function(t, n, s, l) {
        if (s >= n.length)
          return l;
        var c = n[s], h = Qt(t) ? t.slice() : R({}, t);
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
          c.memoizedState = h, c.baseState = h, t.memoizedProps = R({}, t.memoizedProps), Xn(t, St, rn);
        }
      }, J0 = function(t, n, s) {
        var l = wv(t, n);
        if (l !== null) {
          var c = sx(l.memoizedState, s);
          l.memoizedState = c, l.baseState = c, t.memoizedProps = R({}, t.memoizedProps), Xn(t, St, rn);
        }
      }, K0 = function(t, n, s, l) {
        var c = wv(t, n);
        if (c !== null) {
          var h = ux(c.memoizedState, s, l);
          c.memoizedState = h, c.baseState = h, t.memoizedProps = R({}, t.memoizedProps), Xn(t, St, rn);
        }
      }, $0 = function(t, n, s) {
        t.pendingProps = cx(t.memoizedProps, n, s), t.alternate && (t.alternate.pendingProps = t.pendingProps), Xn(t, St, rn);
      }, ex = function(t, n) {
        t.pendingProps = sx(t.memoizedProps, n), t.alternate && (t.alternate.pendingProps = t.pendingProps), Xn(t, St, rn);
      }, tx = function(t, n, s) {
        t.pendingProps = ux(t.memoizedProps, n, s), t.alternate && (t.alternate.pendingProps = t.pendingProps), Xn(t, St, rn);
      }, nx = function(t) {
        Xn(t, St, rn);
      }, rx = function(t) {
        W0 = t;
      }, ix = function(t) {
        G0 = t;
      };
    }
    function ER(t) {
      var n = Fr(t);
      return n === null ? null : n.stateNode;
    }
    function RR(t) {
      return null;
    }
    function MR() {
      return jr;
    }
    function bR(t) {
      var n = t.findFiberByHostInstance, s = m.ReactCurrentDispatcher;
      return Sf({
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
        getCurrentFiber: MR,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: fR
      });
    }
    return a.attemptContinuousHydration = xR, a.attemptHydrationAtCurrentPriority = SR, a.attemptSynchronousHydration = gR, a.batchedUpdates = _E, a.createComponentSelector = K_, a.createContainer = mR, a.createHasPseudoClassSelector = $_, a.createHydrationContainer = vR, a.createPortal = dR, a.createRoleSelector = eE, a.createTestNameSelector = nE, a.createTextSelector = tE, a.deferredUpdates = SE, a.discreteUpdates = EE, a.findAllNodes = Fh, a.findBoundingRects = aE, a.findHostInstance = hR, a.findHostInstanceWithNoPortals = _R, a.findHostInstanceWithWarning = pR, a.flushControlled = ME, a.flushPassiveEffects = is, a.flushSync = Ih, a.focusWithin = sE, a.getCurrentUpdatePriority = Hr, a.getFindAllNodesFailureDescription = iE, a.getPublicRootInstance = yR, a.injectIntoDevTools = bR, a.isAlreadyRendering = RE, a.observeVisibleRects = uE, a.registerMutableSourceForHydration = gS, a.runWithPriority = mf, a.shouldError = Q0, a.shouldSuspend = X0, a.updateContainer = q0, a;
  })), Kv.exports;
}
process.env.NODE_ENV === "production" ? oy.exports = kM() : oy.exports = HM();
var PM = oy.exports;
const VM = /* @__PURE__ */ wR(PM);
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
function jM() {
  return u1 || (u1 = 1, function(y) {
    function e(k, ne) {
      var K = k.length;
      k.push(ne);
      e: for (; 0 < K; ) {
        var O = K - 1 >>> 1, V = k[O];
        if (0 < d(V, ne)) k[O] = ne, k[K] = V, K = O;
        else break e;
      }
    }
    function a(k) {
      return k.length === 0 ? null : k[0];
    }
    function u(k) {
      if (k.length === 0) return null;
      var ne = k[0], K = k.pop();
      if (K !== ne) {
        k[0] = K;
        e: for (var O = 0, V = k.length, Pe = V >>> 1; O < Pe; ) {
          var Ce = 2 * (O + 1) - 1, Ve = k[Ce], ke = Ce + 1, it = k[ke];
          if (0 > d(Ve, K)) ke < V && 0 > d(it, Ve) ? (k[O] = it, k[ke] = K, O = ke) : (k[O] = Ve, k[Ce] = K, O = Ce);
          else if (ke < V && 0 > d(it, K)) k[O] = it, k[ke] = K, O = ke;
          else break e;
        }
      }
      return ne;
    }
    function d(k, ne) {
      var K = k.sortIndex - ne.sortIndex;
      return K !== 0 ? K : k.id - ne.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      y.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, b = v.now();
      y.unstable_now = function() {
        return v.now() - b;
      };
    }
    var E = [], g = [], _ = 1, R = null, C = 3, z = !1, D = !1, L = !1, B = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(k) {
      for (var ne = a(g); ne !== null; ) {
        if (ne.callback === null) u(g);
        else if (ne.startTime <= k) u(g), ne.sortIndex = ne.expirationTime, e(E, ne);
        else break;
        ne = a(g);
      }
    }
    function ue(k) {
      if (L = !1, ee(k), !D) if (a(E) !== null) D = !0, Oe(de);
      else {
        var ne = a(g);
        ne !== null && ve(ue, ne.startTime - k);
      }
    }
    function de(k, ne) {
      D = !1, L && (L = !1, j(le), le = -1), z = !0;
      var K = C;
      try {
        for (ee(ne), R = a(E); R !== null && (!(R.expirationTime > ne) || k && !Me()); ) {
          var O = R.callback;
          if (typeof O == "function") {
            R.callback = null, C = R.priorityLevel;
            var V = O(R.expirationTime <= ne);
            ne = y.unstable_now(), typeof V == "function" ? R.callback = V : R === a(E) && u(E), ee(ne);
          } else u(E);
          R = a(E);
        }
        if (R !== null) var Pe = !0;
        else {
          var Ce = a(g);
          Ce !== null && ve(ue, Ce.startTime - ne), Pe = !1;
        }
        return Pe;
      } finally {
        R = null, C = K, z = !1;
      }
    }
    var be = !1, ce = null, le = -1, Je = 5, pe = -1;
    function Me() {
      return !(y.unstable_now() - pe < Je);
    }
    function Ee() {
      if (ce !== null) {
        var k = y.unstable_now();
        pe = k;
        var ne = !0;
        try {
          ne = ce(!0, k);
        } finally {
          ne ? he() : (be = !1, ce = null);
        }
      } else be = !1;
    }
    var he;
    if (typeof te == "function") he = function() {
      te(Ee);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), nt = we.port2;
      we.port1.onmessage = Ee, he = function() {
        nt.postMessage(null);
      };
    } else he = function() {
      B(Ee, 0);
    };
    function Oe(k) {
      ce = k, be || (be = !0, he());
    }
    function ve(k, ne) {
      le = B(function() {
        k(y.unstable_now());
      }, ne);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, y.unstable_continueExecution = function() {
      D || z || (D = !0, Oe(de));
    }, y.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Je = 0 < k ? Math.floor(1e3 / k) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, y.unstable_getFirstCallbackNode = function() {
      return a(E);
    }, y.unstable_next = function(k) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = C;
      }
      var K = C;
      C = ne;
      try {
        return k();
      } finally {
        C = K;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(k, ne) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var K = C;
      C = k;
      try {
        return ne();
      } finally {
        C = K;
      }
    }, y.unstable_scheduleCallback = function(k, ne, K) {
      var O = y.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? O + K : O) : K = O, k) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = K + V, k = { id: _++, callback: ne, priorityLevel: k, startTime: K, expirationTime: V, sortIndex: -1 }, K > O ? (k.sortIndex = K, e(g, k), a(E) === null && k === a(g) && (L ? (j(le), le = -1) : L = !0, ve(ue, K - O))) : (k.sortIndex = V, e(E, k), D || z || (D = !0, Oe(de))), k;
    }, y.unstable_shouldYield = Me, y.unstable_wrapCallback = function(k) {
      var ne = C;
      return function() {
        var K = C;
        C = ne;
        try {
          return k.apply(this, arguments);
        } finally {
          C = K;
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
function IM() {
  return o1 || (o1 = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var e = !1, a = !1, u = 5;
      function d(G, oe) {
        var Ne = G.length;
        G.push(oe), b(G, oe, Ne);
      }
      function m(G) {
        return G.length === 0 ? null : G[0];
      }
      function v(G) {
        if (G.length === 0)
          return null;
        var oe = G[0], Ne = G.pop();
        return Ne !== oe && (G[0] = Ne, E(G, Ne, 0)), oe;
      }
      function b(G, oe, Ne) {
        for (var $e = Ne; $e > 0; ) {
          var Ue = $e - 1 >>> 1, Kt = G[Ue];
          if (g(Kt, oe) > 0)
            G[Ue] = oe, G[$e] = Kt, $e = Ue;
          else
            return;
        }
      }
      function E(G, oe, Ne) {
        for (var $e = Ne, Ue = G.length, Kt = Ue >>> 1; $e < Kt; ) {
          var Tt = ($e + 1) * 2 - 1, qe = G[Tt], Se = Tt + 1, kn = G[Se];
          if (g(qe, oe) < 0)
            Se < Ue && g(kn, qe) < 0 ? (G[$e] = kn, G[Se] = oe, $e = Se) : (G[$e] = qe, G[Tt] = oe, $e = Tt);
          else if (Se < Ue && g(kn, oe) < 0)
            G[$e] = kn, G[Se] = oe, $e = Se;
          else
            return;
        }
      }
      function g(G, oe) {
        var Ne = G.sortIndex - oe.sortIndex;
        return Ne !== 0 ? Ne : G.id - oe.id;
      }
      var _ = 1, R = 2, C = 3, z = 4, D = 5;
      function L(G, oe) {
      }
      var B = typeof performance == "object" && typeof performance.now == "function";
      if (B) {
        var j = performance;
        y.unstable_now = function() {
          return j.now();
        };
      } else {
        var te = Date, ee = te.now();
        y.unstable_now = function() {
          return te.now() - ee;
        };
      }
      var ue = 1073741823, de = -1, be = 250, ce = 5e3, le = 1e4, Je = ue, pe = [], Me = [], Ee = 1, he = null, we = C, nt = !1, Oe = !1, ve = !1, k = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function O(G) {
        for (var oe = m(Me); oe !== null; ) {
          if (oe.callback === null)
            v(Me);
          else if (oe.startTime <= G)
            v(Me), oe.sortIndex = oe.expirationTime, d(pe, oe);
          else
            return;
          oe = m(Me);
        }
      }
      function V(G) {
        if (ve = !1, O(G), !Oe)
          if (m(pe) !== null)
            Oe = !0, Dr(Pe);
          else {
            var oe = m(Me);
            oe !== null && Xr(V, oe.startTime - G);
          }
      }
      function Pe(G, oe) {
        Oe = !1, ve && (ve = !1, ua()), nt = !0;
        var Ne = we;
        try {
          var $e;
          if (!a) return Ce(G, oe);
        } finally {
          he = null, we = Ne, nt = !1;
        }
      }
      function Ce(G, oe) {
        var Ne = oe;
        for (O(Ne), he = m(pe); he !== null && !e && !(he.expirationTime > Ne && (!G || Bn())); ) {
          var $e = he.callback;
          if (typeof $e == "function") {
            he.callback = null, we = he.priorityLevel;
            var Ue = he.expirationTime <= Ne, Kt = $e(Ue);
            Ne = y.unstable_now(), typeof Kt == "function" ? he.callback = Kt : he === m(pe) && v(pe), O(Ne);
          } else
            v(pe);
          he = m(pe);
        }
        if (he !== null)
          return !0;
        var Tt = m(Me);
        return Tt !== null && Xr(V, Tt.startTime - Ne), !1;
      }
      function Ve(G, oe) {
        switch (G) {
          case _:
          case R:
          case C:
          case z:
          case D:
            break;
          default:
            G = C;
        }
        var Ne = we;
        we = G;
        try {
          return oe();
        } finally {
          we = Ne;
        }
      }
      function ke(G) {
        var oe;
        switch (we) {
          case _:
          case R:
          case C:
            oe = C;
            break;
          default:
            oe = we;
            break;
        }
        var Ne = we;
        we = oe;
        try {
          return G();
        } finally {
          we = Ne;
        }
      }
      function it(G) {
        var oe = we;
        return function() {
          var Ne = we;
          we = oe;
          try {
            return G.apply(this, arguments);
          } finally {
            we = Ne;
          }
        };
      }
      function at(G, oe, Ne) {
        var $e = y.unstable_now(), Ue;
        if (typeof Ne == "object" && Ne !== null) {
          var Kt = Ne.delay;
          typeof Kt == "number" && Kt > 0 ? Ue = $e + Kt : Ue = $e;
        } else
          Ue = $e;
        var Tt;
        switch (G) {
          case _:
            Tt = de;
            break;
          case R:
            Tt = be;
            break;
          case D:
            Tt = Je;
            break;
          case z:
            Tt = le;
            break;
          case C:
          default:
            Tt = ce;
            break;
        }
        var qe = Ue + Tt, Se = {
          id: Ee++,
          callback: oe,
          priorityLevel: G,
          startTime: Ue,
          expirationTime: qe,
          sortIndex: -1
        };
        return Ue > $e ? (Se.sortIndex = Ue, d(Me, Se), m(pe) === null && Se === m(Me) && (ve ? ua() : ve = !0, Xr(V, Ue - $e))) : (Se.sortIndex = qe, d(pe, Se), !Oe && !nt && (Oe = !0, Dr(Pe))), Se;
      }
      function Ie() {
      }
      function ot() {
        !Oe && !nt && (Oe = !0, Dr(Pe));
      }
      function Et() {
        return m(pe);
      }
      function Ot(G) {
        G.callback = null;
      }
      function Ge() {
        return we;
      }
      var Vt = !1, Rt = null, yt = -1, Jt = u, dr = -1;
      function Bn() {
        var G = y.unstable_now() - dr;
        return !(G < Jt);
      }
      function cn() {
      }
      function hr(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Jt = Math.floor(1e3 / G) : Jt = u;
      }
      var Zn = function() {
        if (Rt !== null) {
          var G = y.unstable_now();
          dr = G;
          var oe = !0, Ne = !0;
          try {
            Ne = Rt(oe, G);
          } finally {
            Ne ? jt() : (Vt = !1, Rt = null);
          }
        } else
          Vt = !1;
      }, jt;
      if (typeof K == "function")
        jt = function() {
          K(Zn);
        };
      else if (typeof MessageChannel < "u") {
        var pr = new MessageChannel(), la = pr.port2;
        pr.port1.onmessage = Zn, jt = function() {
          la.postMessage(null);
        };
      } else
        jt = function() {
          k(Zn, 0);
        };
      function Dr(G) {
        Rt = G, Vt || (Vt = !0, jt());
      }
      function Xr(G, oe) {
        yt = k(function() {
          G(y.unstable_now());
        }, oe);
      }
      function ua() {
        ne(yt), yt = -1;
      }
      var cs = cn, Na = null;
      y.unstable_IdlePriority = D, y.unstable_ImmediatePriority = _, y.unstable_LowPriority = z, y.unstable_NormalPriority = C, y.unstable_Profiling = Na, y.unstable_UserBlockingPriority = R, y.unstable_cancelCallback = Ot, y.unstable_continueExecution = ot, y.unstable_forceFrameRate = hr, y.unstable_getCurrentPriorityLevel = Ge, y.unstable_getFirstCallbackNode = Et, y.unstable_next = ke, y.unstable_pauseExecution = Ie, y.unstable_requestPaint = cs, y.unstable_runWithPriority = Ve, y.unstable_scheduleCallback = at, y.unstable_shouldYield = Bn, y.unstable_wrapCallback = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ey)), ey;
}
process.env.NODE_ENV === "production" ? cy.exports = jM() : cy.exports = IM();
var c1 = cy.exports;
const yy = {}, qM = (y) => void Object.assign(yy, y);
function YM(y, e) {
  function a(_, {
    args: R = [],
    attach: C,
    ...z
  }, D) {
    let L = `${_[0].toUpperCase()}${_.slice(1)}`, B;
    if (_ === "primitive") {
      if (z.object === void 0) throw new Error("R3F: Primitives without 'object' are invalid!");
      const j = z.object;
      B = cd(j, {
        type: _,
        root: D,
        attach: C,
        primitive: !0
      });
    } else {
      const j = yy[L];
      if (!j)
        throw new Error(`R3F: ${L} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
      if (!Array.isArray(R)) throw new Error("R3F: The args prop must be an array!");
      B = cd(new j(...R), {
        type: _,
        root: D,
        attach: C,
        // Save args in case we need to reconstruct later for HMR
        memoizedProps: {
          args: R
        }
      });
    }
    return B.__r3f.attach === void 0 && (B instanceof uo ? B.__r3f.attach = "geometry" : B instanceof Ep && (B.__r3f.attach = "material")), L !== "inject" && ry(B, z), B;
  }
  function u(_, R) {
    let C = !1;
    if (R) {
      var z, D;
      (z = R.__r3f) != null && z.attach ? ny(_, R, R.__r3f.attach) : R.isObject3D && _.isObject3D && (_.add(R), C = !0), C || (D = _.__r3f) == null || D.objects.push(R), R.__r3f || cd(R, {}), R.__r3f.parent = _, dy(R), Uc(R);
    }
  }
  function d(_, R, C) {
    let z = !1;
    if (R) {
      var D, L;
      if ((D = R.__r3f) != null && D.attach)
        ny(_, R, R.__r3f.attach);
      else if (R.isObject3D && _.isObject3D) {
        R.parent = _, R.dispatchEvent({
          type: "added"
        }), _.dispatchEvent({
          type: "childadded",
          child: R
        });
        const B = _.children.filter((te) => te !== R), j = B.indexOf(C);
        _.children = [...B.slice(0, j), R, ...B.slice(j)], z = !0;
      }
      z || (L = _.__r3f) == null || L.objects.push(R), R.__r3f || cd(R, {}), R.__r3f.parent = _, dy(R), Uc(R);
    }
  }
  function m(_, R, C = !1) {
    _ && [..._].forEach((z) => v(R, z, C));
  }
  function v(_, R, C) {
    if (R) {
      var z, D, L;
      if (R.__r3f && (R.__r3f.parent = null), (z = _.__r3f) != null && z.objects && (_.__r3f.objects = _.__r3f.objects.filter((ue) => ue !== R)), (D = R.__r3f) != null && D.attach)
        m1(_, R, R.__r3f.attach);
      else if (R.isObject3D && _.isObject3D) {
        var B;
        _.remove(R), (B = R.__r3f) != null && B.root && $M(gp(R), R);
      }
      const te = (L = R.__r3f) == null ? void 0 : L.primitive, ee = !te && (C === void 0 ? R.dispose !== null : C);
      if (!te) {
        var j;
        m((j = R.__r3f) == null ? void 0 : j.objects, R, ee), m(R.children, R, ee);
      }
      if (delete R.__r3f, ee && R.dispose && R.type !== "Scene") {
        const ue = () => {
          try {
            R.dispose();
          } catch {
          }
        };
        typeof IS_REACT_ACT_ENVIRONMENT > "u" ? c1.unstable_scheduleCallback(c1.unstable_IdlePriority, ue) : ue();
      }
      Uc(_);
    }
  }
  function b(_, R, C, z) {
    var D;
    const L = (D = _.__r3f) == null ? void 0 : D.parent;
    if (!L) return;
    const B = a(R, C, _.__r3f.root);
    if (_.children) {
      for (const j of _.children)
        j.__r3f && u(B, j);
      _.children = _.children.filter((j) => !j.__r3f);
    }
    _.__r3f.objects.forEach((j) => u(B, j)), _.__r3f.objects = [], _.__r3f.autoRemovedBeforeAppend || v(L, _), B.parent && (B.__r3f.autoRemovedBeforeAppend = !0), u(L, B), B.raycast && B.__r3f.eventCount && gp(B).getState().internal.interaction.push(B), [z, z.alternate].forEach((j) => {
      j !== null && (j.stateNode = B, j.ref && (typeof j.ref == "function" ? j.ref(B) : j.ref.current = B));
    });
  }
  const E = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");
  return {
    reconciler: VM({
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
      appendChildToContainer: (_, R) => {
        if (!R) return;
        const C = _.getState().scene;
        C.__r3f && (C.__r3f.root = _, u(C, R));
      },
      removeChildFromContainer: (_, R) => {
        R && v(_.getState().scene, R);
      },
      insertInContainerBefore: (_, R, C) => {
        if (!R || !C) return;
        const z = _.getState().scene;
        z.__r3f && d(z, R, C);
      },
      getRootHostContext: () => null,
      getChildHostContext: (_) => _,
      finalizeInitialChildren(_) {
        var R;
        return !!((R = _ == null ? void 0 : _.__r3f) != null ? R : {}).handlers;
      },
      prepareUpdate(_, R, C, z) {
        var D;
        if (((D = _ == null ? void 0 : _.__r3f) != null ? D : {}).primitive && z.object && z.object !== _)
          return [!0];
        {
          const {
            args: B = [],
            children: j,
            ...te
          } = z, {
            args: ee = [],
            children: ue,
            ...de
          } = C;
          if (!Array.isArray(B)) throw new Error("R3F: the args prop must be an array!");
          if (B.some((ce, le) => ce !== ee[le])) return [!0];
          const be = I1(_, te, de, !0);
          return be.changes.length ? [!1, be] : null;
        }
      },
      commitUpdate(_, [R, C], z, D, L, B) {
        R ? b(_, z, L, B) : ry(_, C);
      },
      commitMount(_, R, C, z) {
        var D;
        const L = (D = _.__r3f) != null ? D : {};
        _.raycast && L.handlers && L.eventCount && gp(_).getState().internal.interaction.push(_);
      },
      getPublicInstance: (_) => _,
      prepareForCommit: () => null,
      preparePortalMount: (_) => cd(_.getState().scene),
      resetAfterCommit: () => {
      },
      shouldSetTextContent: () => !1,
      clearContainer: () => !1,
      hideInstance(_) {
        var R;
        const {
          attach: C,
          parent: z
        } = (R = _.__r3f) != null ? R : {};
        C && z && m1(z, _, C), _.isObject3D && (_.visible = !1), Uc(_);
      },
      unhideInstance(_, R) {
        var C;
        const {
          attach: z,
          parent: D
        } = (C = _.__r3f) != null ? C : {};
        z && D && ny(D, _, z), (_.isObject3D && R.visible == null || R.visible) && (_.visible = !0), Uc(_);
      },
      createTextInstance: E,
      hideTextInstance: E,
      unhideTextInstance: E,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
      // @ts-ignore
      getCurrentEventPriority: () => e ? e() : pd.DefaultEventPriority,
      beforeActiveInstanceBlur: () => {
      },
      afterActiveInstanceBlur: () => {
      },
      detachDeletedInstance: () => {
      },
      now: typeof performance < "u" && vi.fun(performance.now) ? performance.now : vi.fun(Date.now) ? Date.now : () => 0,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r920883503
      scheduleTimeout: vi.fun(setTimeout) ? setTimeout : void 0,
      cancelTimeout: vi.fun(clearTimeout) ? clearTimeout : void 0
    }),
    applyProps: ry
  };
}
var f1, d1;
const ty = (y) => "colorSpace" in y || "outputColorSpace" in y, WM = () => {
  var y;
  return (y = yy.ColorManagement) != null ? y : null;
}, V1 = typeof window < "u" && ((f1 = window.document) != null && f1.createElement || ((d1 = window.navigator) == null ? void 0 : d1.product) === "ReactNative") ? Qe.useLayoutEffect : Qe.useEffect;
function QM(y) {
  const e = Qe.useRef(y);
  return V1(() => void (e.current = y), [y]), e;
}
class GM extends Qe.Component {
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
GM.getDerivedStateFromError = () => ({
  error: !0
});
const j1 = "__default", h1 = /* @__PURE__ */ new Map(), XM = (y) => y && !!y.memoized && !!y.changes;
function gp(y) {
  let e = y.__r3f.root;
  for (; e.getState().previousRoot; ) e = e.getState().previousRoot;
  return e;
}
const vi = {
  obj: (y) => y === Object(y) && !vi.arr(y) && typeof y != "function",
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
    if (vi.str(y) || vi.num(y)) return y === e;
    const m = vi.obj(y);
    if (m && u === "reference") return y === e;
    const v = vi.arr(y);
    if (v && a === "reference") return y === e;
    if ((v || m) && y === e) return !0;
    let b;
    for (b in y) if (!(b in e)) return !1;
    if (m && a === "shallow" && u === "shallow") {
      for (b in d ? e : y) if (!vi.equ(y[b], e[b], {
        strict: d,
        objects: "reference"
      })) return !1;
    } else
      for (b in d ? e : y) if (y[b] !== e[b]) return !1;
    if (vi.und(b)) {
      if (v && y.length === 0 && e.length === 0 || m && Object.keys(y).length === 0 && Object.keys(e).length === 0) return !0;
      if (y !== e) return !1;
    }
    return !0;
  }
};
function cd(y, e) {
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
  if (vi.str(a)) {
    if (p1.test(a)) {
      const m = a.replace(p1, ""), {
        target: v,
        key: b
      } = fy(y, m);
      Array.isArray(v[b]) || (v[b] = []);
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
  if (vi.str(a)) {
    const {
      target: m,
      key: v
    } = fy(y, a), b = e.__r3f.previousAttach;
    b === void 0 ? delete m[v] : m[v] = b;
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
  ref: b,
  ...E
} = {}, g = !1) {
  var _;
  const R = (_ = y == null ? void 0 : y.__r3f) != null ? _ : {}, C = Object.entries(d), z = [];
  if (g) {
    const L = Object.keys(E);
    for (let B = 0; B < L.length; B++)
      d.hasOwnProperty(L[B]) || C.unshift([L[B], j1 + "remove"]);
  }
  C.forEach(([L, B]) => {
    var j;
    if ((j = y.__r3f) != null && j.primitive && L === "object" || vi.equ(B, E[L])) return;
    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(L)) return z.push([L, B, !0, []]);
    let te = [];
    L.includes("-") && (te = L.split("-")), z.push([L, B, !1, te]);
    for (const ee in d) {
      const ue = d[ee];
      ee.startsWith(`${L}-`) && z.push([ee, ue, !1, ee.split("-")]);
    }
  });
  const D = {
    ...d
  };
  return R.memoizedProps && R.memoizedProps.args && (D.args = R.memoizedProps.args), R.memoizedProps && R.memoizedProps.attach && (D.attach = R.memoizedProps.attach), {
    memoized: D,
    changes: z
  };
}
const ZM = typeof process < "u" && process.env.NODE_ENV !== "production";
function ry(y, e) {
  var a, u, d;
  const m = (a = y.__r3f) != null ? a : {}, v = m.root, b = (u = v == null || v.getState == null ? void 0 : v.getState()) != null ? u : {}, {
    memoized: E,
    changes: g
  } = XM(e) ? e : I1(y, e), _ = m.eventCount;
  y.__r3f && (y.__r3f.memoizedProps = E);
  for (let C = 0; C < g.length; C++) {
    let [z, D, L, B] = g[C];
    if (ty(y)) {
      const ue = "srgb", de = "srgb-linear";
      z === "encoding" ? (z = "colorSpace", D = D === 3001 ? ue : de) : z === "outputEncoding" && (z = "outputColorSpace", D = D === 3001 ? ue : de);
    }
    let j = y, te = j[z];
    if (B.length && (te = B.reduce((ee, ue) => ee[ue], y), !(te && te.set))) {
      const [ee, ...ue] = B.reverse();
      j = ue.reverse().reduce((de, be) => de[be], y), z = ee;
    }
    if (D === j1 + "remove")
      if (j.constructor) {
        let ee = h1.get(j.constructor);
        ee || (ee = new j.constructor(), h1.set(j.constructor, ee)), D = ee[z];
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
      (ZM ? te.constructor.name === D.constructor.name : te.constructor === D.constructor))
        te.copy(D);
      else if (D !== void 0) {
        const ee = te instanceof Vc;
        !ee && te.setScalar ? te.setScalar(D) : te instanceof yp && D instanceof yp ? te.mask = D.mask : te.set(D), !WM() && !b.linear && ee && te.convertSRGBToLinear();
      }
    } else if (j[z] = D, j[z] instanceof os && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
    j[z].format === w1 && j[z].type === T1) {
      const ee = j[z];
      ty(ee) && ty(b.gl) ? ee.colorSpace = b.gl.outputColorSpace : ee.encoding = b.gl.outputEncoding;
    }
    Uc(y);
  }
  if (m.parent && y.raycast && _ !== m.eventCount) {
    const C = gp(y).getState().internal, z = C.interaction.indexOf(y);
    z > -1 && C.interaction.splice(z, 1), m.eventCount && C.interaction.push(y);
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
function JM() {
  var y;
  const e = typeof self < "u" && self || typeof window < "u" && window;
  if (!e) return pd.DefaultEventPriority;
  switch ((y = e.event) == null ? void 0 : y.type) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return pd.DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return pd.ContinuousEventPriority;
    default:
      return pd.DefaultEventPriority;
  }
}
function KM(y, e, a, u) {
  const d = a.get(e);
  d && (a.delete(e), a.size === 0 && (y.delete(u), d.target.releasePointerCapture(u)));
}
function $M(y, e) {
  const {
    internal: a
  } = y.getState();
  a.interaction = a.interaction.filter((u) => u !== e), a.initialHits = a.initialHits.filter((u) => u !== e), a.hovered.forEach((u, d) => {
    (u.eventObject === e || u.object === e) && a.hovered.delete(d);
  }), a.capturedMap.forEach((u, d) => {
    KM(a.capturedMap, e, u, d);
  });
}
const eb = /* @__PURE__ */ Qe.createContext(null);
function q1() {
  const y = Qe.useContext(eb);
  if (!y) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return y;
}
function _p(y = (a) => a, e) {
  return q1()(y, e);
}
function gy(y, e = 0) {
  const a = q1(), u = a.getState().internal.subscribe, d = QM(y);
  return V1(() => u(d, e, a), [e, u, a]), null;
}
const tb = /* @__PURE__ */ new Map(), {
  reconciler: nb,
  applyProps: kb
} = YM(tb, JM);
nb.injectIntoDevTools({
  bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
  rendererPackageName: "@react-three/fiber",
  version: Qe.version
});
new Pt();
new Pt();
function rb(y, e, a) {
  return Math.max(e, Math.min(a, y));
}
function ib(y, e) {
  return rb(y - Math.floor(y / e) * e, 0, e);
}
function ab(y, e) {
  var a = ib(e - y, Math.PI * 2);
  return a > Math.PI && (a -= Math.PI * 2), a;
}
var sb = function(e) {
  return 1 / (1 + e + 0.48 * e * e + 0.235 * e * e * e);
};
function xp(y, e, a) {
  var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.01, m = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 1 / 0, v = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : sb, b = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1e-3, E = "velocity_" + e;
  if (y.__damp === void 0 && (y.__damp = {}), y.__damp[E] === void 0 && (y.__damp[E] = 0), Math.abs(y[e] - a) <= b)
    return y[e] = a, !1;
  u = Math.max(1e-4, u);
  var g = 2 / u, _ = v(g * d), R = y[e] - a, C = a, z = m * u;
  R = Math.min(Math.max(R, -z), z), a = y[e] - R;
  var D = (y.__damp[E] + g * R) * d;
  y.__damp[E] = (y.__damp[E] - g * D) * _;
  var L = a + (R + D) * _;
  return C - y[e] > 0 == L > C && (L = C, y.__damp[E] = (L - C) / d), y[e] = L, !0;
}
function iy(y, e, a, u, d, m, v, b) {
  return xp(y, e, y[e] + ab(y[e], a), u, d, m, v, b);
}
var Fc = /* @__PURE__ */ new se(), v1, y1, g1;
function x1(y, e, a, u, d, m, v) {
  return typeof e == "number" ? Fc.setScalar(e) : Array.isArray(e) ? Fc.set(e[0], e[1], e[2]) : Fc.copy(e), v1 = xp(y, "x", Fc.x, a, u, d, m, v), y1 = xp(y, "y", Fc.y, a, u, d, m, v), g1 = xp(y, "z", Fc.z, a, u, d, m, v), v1 || y1 || g1;
}
var fd = /* @__PURE__ */ new Ks(), S1, _1, E1;
function lb(y, e, a, u, d, m, v) {
  return Array.isArray(e) ? fd.set(e[0], e[1], e[2], e[3]) : fd.copy(e), S1 = iy(y, "x", fd.x, a, u, d, m, v), _1 = iy(y, "y", fd.y, a, u, d, m, v), E1 = iy(y, "z", fd.z, a, u, d, m, v), S1 || _1 || E1;
}
function ub(y, e, a, u) {
  const d = class extends Rp {
    constructor(v = {}) {
      const b = Object.entries(y);
      super({
        uniforms: b.reduce((E, [g, _]) => {
          const R = bM.clone({
            [g]: {
              value: _
            }
          });
          return {
            ...E,
            ...R
          };
        }, {}),
        vertexShader: e,
        fragmentShader: a
      }), this.key = "", b.forEach(([E]) => Object.defineProperty(this, E, {
        get: () => this.uniforms[E].value,
        set: (g) => this.uniforms[E].value = g
      })), Object.assign(this, v);
    }
  };
  return d.key = F1.generateUUID(), d;
}
function su(y, e, a) {
  const u = _p((C) => C.size), d = _p((C) => C.viewport), m = typeof y == "number" ? y : u.width * d.dpr, v = typeof e == "number" ? e : u.height * d.dpr, b = (typeof y == "number" ? a : y) || {}, {
    samples: E = 0,
    depth: g,
    ..._
  } = b, R = Qe.useMemo(() => {
    const C = new U1(m, v, {
      minFilter: Sp,
      magFilter: Sp,
      type: LR,
      ..._
    });
    return g && (C.depthTexture = new H1(m, v, C1)), C.samples = E, C;
  }, []);
  return Qe.useLayoutEffect(() => {
    R.setSize(m, v), E && (R.samples = E);
  }, [E, R, m, v]), Qe.useEffect(() => () => R.dispose(), []), R;
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
`, jc = `uniform vec2 px;
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
`, ob = `varying vec2 uvInternal;
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
  vertexShader: jc,
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
}, cb = () => {
  const y = {
    vertexShader: ob,
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
  const u = new Rp(y), d = new NM(a, u);
  return d.renderOrder = 1, d;
}, fb = (y) => {
  y.geometry.dispose(), y.material.dispose();
}, db = {
  materialConfig: W1,
  fboConfig: { isNull: !0 },
  children: cb,
  onDispose: fb
}, hb = `precision highp float;

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
`, pb = `precision highp float;

uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;

void main(){
    vec2 pos = position.xy * scale * px + center;
    vUv = uv;
    gl_Position = vec4( pos, 0.0, 1.0 );
}
`, mb = {
  vertexShader: pb,
  fragmentShader: hb,
  uniforms: {
    px: {
      value: null
    },
    force: {
      value: new Pt(0, 0)
    },
    center: {
      value: new Pt(0, 0)
    },
    scale: {
      value: null
    }
  },
  blending: NR
}, vb = {
  materialConfig: mb,
  fboConfig: { isNull: !0 }
}, yb = `precision highp float;
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
`, gb = {
  vertexShader: jc,
  fragmentShader: yb,
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
}, xb = {
  materialConfig: gb,
  fboConfig: { isNull: !0 }
}, Sb = `precision highp float;
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
`, _b = {
  vertexShader: jc,
  fragmentShader: Sb,
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
}, Eb = {
  materialConfig: _b,
  fboConfig: { isNull: !0 }
}, Rb = `precision highp float;
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
`, Mb = {
  vertexShader: jc,
  fragmentShader: Rb,
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
}, bb = {
  materialConfig: Mb,
  fboConfig: { isNull: !0 }
}, Tb = `precision highp float;
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
`, Cb = {
  vertexShader: jc,
  fragmentShader: Tb,
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
}, wb = {
  materialConfig: Cb,
  fboConfig: { isNull: !0 }
}, zb = `precision highp float;
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
`, Db = {
  vertexShader: jc,
  fragmentShader: zb,
  uniforms: {
    velocity: {
      value: null
    },
    boundarySpace: {
      value: new Pt()
    }
  }
}, Ab = {
  materialConfig: Db,
  fboConfig: { isNull: !0 }
};
var ss, so, kc, ls;
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
    geometry: b,
    camera: E,
    onBeforeRender: g,
    onAfterRender: _,
    fboConfig: { width: R, height: C, options: z, isNull: D = !1 },
    fbo: L,
    children: B,
    onDispose: j
  }) {
    ad(this, ss);
    ad(this, so);
    ad(this, kc);
    ad(this, ls, {});
    v ? this.material = typeof v == "function" ? v() : v : (Kl(this, ls, u), this.material = d ? new FM({
      uniforms: Yr(this, ls),
      vertexShader: e,
      fragmentShader: a,
      ...m
    }) : new Rp({
      uniforms: Yr(this, ls),
      vertexShader: e,
      fragmentShader: a,
      ...m
    })), b ? this.geometry = typeof b == "function" ? b() : b : this.geometry = new Mp(2, 2), this.mesh = new _M(this.geometry, this.material), E ? this.camera = typeof E == "function" ? E() : E : this.camera = new k1(), this.scene = new zM(), this.scene.add(this.mesh), B && (Kl(this, so, typeof B == "function" ? B({ uniforms: Yr(this, ls), mesh: this.mesh }) : B), this.scene.add(Yr(this, so))), typeof g == "function" && (this.scene.onBeforeRender = g), typeof _ == "function" && (this.scene.onAfterRender = _), L ? Kl(this, ss, L) : D ? Kl(this, ss, null) : Kl(this, ss, new U1(R, C, z)), Kl(this, kc, j);
  }
  dispose(e = !0, a = !0, u = !0, d = !0) {
    e && this.material.dispose(), a && this.geometry.dispose(), u && Yr(this, ss).dispose(), d && typeof Yr(this, kc) == "function" && Yr(this, kc).call(this, Yr(this, so));
  }
  setFBO(e) {
    return Kl(this, ss, e), this;
  }
  get fbo() {
    return Yr(this, ss);
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
    return Yr(this, ls);
  }
  get children() {
    return Yr(this, so);
  }
  updateUniforms(e = {}) {
    for (const a in e)
      Yr(this, ls)[a] = e[a], this.material.uniforms[a] = Yr(this, ls)[a];
    return this;
  }
  render(e) {
    return e.setRenderTarget(Yr(this, ss)), e.render(this.scene, this.camera), e.setRenderTarget(null), this;
  }
}
ss = new WeakMap(), so = new WeakMap(), kc = new WeakMap(), ls = new WeakMap();
const Nb = {
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
}, Fb = (y, e, a, u) => ({
  force: u,
  center: a
}), Pb = (y = {}, e = -1, [a, u, d = {}] = [], m) => {
  const {
    iterations_poisson: v,
    iterations_viscous: b,
    mouse_force: E,
    resolution: g,
    cursor_size: _,
    viscous: R,
    isBounce: C,
    dt: z,
    isViscous: D,
    BFECC: L,
    forceCallback: B
  } = { ...Nb, ...y }, j = _p(({ get: Ce }) => Ce), { width: te, height: ee } = Qe.useMemo(
    () => ({
      width: a || j().size.width,
      height: u || j().size.height
    }),
    [u, a, j]
  ), ue = Qe.useRef(new k1()), de = Qe.useRef(new Mp(2, 2)), be = Qe.useRef(new Pt(0, 0)), ce = Qe.useRef(new Pt(0, 0)), le = su(te, ee, { depthBuffer: !1, ...d }), Je = su(te, ee, { depthBuffer: !1, ...d }), pe = su(te, ee, { depthBuffer: !1, ...d }), Me = su(te, ee, { depthBuffer: !1, ...d }), Ee = su(te, ee, { depthBuffer: !1, ...d }), he = su(te, ee, { depthBuffer: !1, ...d }), we = su(te, ee, { depthBuffer: !1, ...d }), nt = su(te, ee, { depthBuffer: !1, ...d }), Oe = Qe.useRef({
    boundarySpace: new Pt(),
    cellScale: new Pt(),
    fboSize: new Pt(),
    force: new Pt(),
    center: new Pt(),
    scale: new Pt(_, _)
  });
  Qe.useEffect(() => {
    const { boundarySpace: Ce, cellScale: Ve, fboSize: ke } = Oe.current;
    ke.set(Math.round(te * g), Math.round(ee * g)), Ve.set(1 / ke.x, 1 / ke.y), C ? Ce.set(0, 0) : Ce.copy(Ve);
  }, [ee, C, g, te]);
  const ve = Qe.useRef(
    new ao({
      ...db,
      camera: ue.current,
      geometry: de.current
    }).updateUniforms({
      boundarySpace: {
        value: Oe.current.cellScale
      },
      px: {
        value: Oe.current.cellScale
      },
      fboSize: {
        value: Oe.current.fboSize
      },
      velocity: {
        value: le.texture
      },
      dt: {
        value: z
      },
      isBFECC: {
        value: !0
      }
    }).setFBO(Je)
  ), k = Qe.useRef(
    new ao({
      ...vb,
      camera: ue.current,
      geometry: de.current
    }).updateUniforms({
      px: {
        value: Oe.current.cellScale
      },
      force: {
        value: Oe.current.force
      },
      center: {
        value: Oe.current.center
      },
      scale: {
        value: Oe.current.scale
      }
    }).setFBO(Je)
  ), ne = Qe.useRef(
    new ao({
      ...xb,
      camera: ue.current,
      geometry: de.current
    }).updateUniforms({
      boundarySpace: {
        value: Oe.current.boundarySpace
      },
      velocity: {
        value: Je.texture
      },
      velocity_new: {
        value: pe.texture
      },
      v: {
        value: R
      },
      px: {
        value: Oe.current.cellScale
      },
      dt: {
        value: z
      }
    }).setFBO(Me)
  ), K = Qe.useRef(
    new ao({
      ...Eb,
      camera: ue.current,
      geometry: de.current
    }).updateUniforms({
      boundarySpace: {
        value: Oe.current.boundarySpace
      },
      velocity: {
        value: pe.texture
      },
      dt: {
        value: z
      },
      px: {
        value: Oe.current.cellScale
      }
    }).setFBO(Ee)
  ), O = Qe.useRef(
    new ao({
      ...bb,
      camera: ue.current,
      geometry: de.current
    }).updateUniforms({
      boundarySpace: {
        value: Oe.current.boundarySpace
      },
      pressure: {
        value: he.texture
      },
      divergence: {
        value: Ee.texture
      },
      px: {
        value: Oe.current.cellScale
      }
    }).setFBO(we)
  ), V = Qe.useRef(
    new ao({
      ...wb,
      camera: ue.current,
      geometry: de.current
    }).updateUniforms({
      boundarySpace: {
        value: Oe.current.boundarySpace
      },
      pressure: {
        value: he.texture
      },
      velocity: {
        value: pe.texture
      },
      px: {
        value: Oe.current.cellScale
      },
      dt: {
        value: z
      }
    }).setFBO(le)
  ), Pe = Qe.useRef(
    new ao({
      ...Ab,
      camera: ue.current,
      geometry: de.current
    }).updateUniforms({
      velocity: {
        value: le.texture
      },
      boundarySpace: {
        value: new Pt()
      }
    }).setFBO(nt)
  );
  return gy(({ gl: Ce, pointer: Ve, clock: ke }, it) => {
    if (!(m != null && m.current)) {
      ve.current.updateUniforms({
        dt: {
          value: z
        },
        isBFECC: {
          value: L
        }
      }).children.visible = C, ve.current.children.material.uniforms = ve.current.uniforms, ve.current.render(Ce), be.current.subVectors(Ve, ce.current), ce.current.copy(Ve);
      const at = typeof B == "function" ? B : Fb, { force: Ie, center: ot } = at(
        it,
        ke.getElapsedTime(),
        Ve.clone(),
        be.current.clone()
      );
      Oe.current.force.set(Ie.x * E, Ie.y * E), Oe.current.center.set(ot.x, ot.y), Oe.current.scale.set(_, _), k.current.render(Ce);
      let Et = Je;
      if (D) {
        let Rt, yt;
        for (let Jt = 0; Jt < b; Jt++)
          Jt % 2 == 0 ? (Rt = pe, yt = Me) : (Rt = Me, yt = pe), ne.current.updateUniforms({
            v: {
              value: R
            },
            dt: {
              value: z
            },
            velocity_new: {
              value: Rt.texture
            }
          }).setFBO(yt).render(Ce);
        Et = yt;
      }
      K.current.updateUniforms({
        velocity: { value: Et.texture },
        dt: {
          value: z
        }
      }).render(Ce);
      let Ot, Ge;
      for (let Rt = 0; Rt < v; Rt++)
        Rt % 2 == 0 ? (Ot = he, Ge = we) : (Ot = we, Ge = he), O.current.updateUniforms({ pressure: { value: Ot.texture } }).setFBO(Ge).render(Ce);
      const Vt = Ge;
      V.current.updateUniforms({
        dt: {
          value: z
        },
        velocity: {
          value: Et.texture
        },
        pressure: {
          value: Vt.texture
        }
      }).render(Ce), Pe.current.render(Ce);
    }
  }, e), Qe.useEffect(
    () => () => {
      de.current.dispose(), ve.current.dispose(!0, !1, !1, !0), k.current.dispose(!0, !1, !1, !0), ne.current.dispose(!0, !1, !1, !0), K.current.dispose(!0, !1, !1, !0), O.current.dispose(!0, !1, !1, !0), V.current.dispose(!0, !1, !1, !0), Pe.current.dispose(!0, !1, !1, !0);
    },
    []
  ), nt.texture;
}, Ob = (y, e, a, u) => {
  var R, C, z, D;
  const d = y.scale.clone(), m = ((C = (R = y == null ? void 0 : y.geometry) == null ? void 0 : R.parameters) == null ? void 0 : C.width) || u && (u == null ? void 0 : u.x) || 1, v = ((D = (z = y == null ? void 0 : y.geometry) == null ? void 0 : z.parameters) == null ? void 0 : D.height) || u && (u == null ? void 0 : u.y) || 1, b = e.bounds.max.getComponent(0) - e.bounds.min.getComponent(0), E = e.bounds.max.getComponent(1) - e.bounds.min.getComponent(1), g = b - e.margin.getComponent(1) - e.margin.getComponent(3), _ = E - e.margin.getComponent(0) - e.margin.getComponent(2);
  return d.set(
    Math.abs(m === 0 ? m : g / m),
    Math.abs(v === 0 ? v : _ / v),
    d.getComponent(2)
  ), d;
}, R1 = Object.freeze({ WU: 0, PX: 1 }), Vb = (y, {
  trackingElementRef: e,
  trackingElement: a = !1,
  customCameraRef: u,
  renderPriority: d,
  left: m = 0.5,
  top: v = 0.5,
  pause: b = !0,
  damp: E = !0,
  damping: g = {},
  scaleToFitWidth: _ = !0,
  geometrySize: R,
  computePosition: C,
  computeScale: z,
  computeRotation: D,
  margin: L,
  marginUnits: B = R1.WU
}) => {
  const { smoothTime: j, delta: te, maxSpeed: ee, easing: ue, eps: de } = g, { width: be, height: ce } = _p(
    ({ size: { width: Ie, height: ot } }) => ({
      width: Ie,
      height: ot
    })
  ), [le, Je] = Qe.useState(!0), pe = Qe.useRef(new Hc()), Me = Qe.useRef(0), Ee = Qe.useRef(null), he = Qe.useRef(new Pt()), we = Qe.useRef(new Pt()), nt = Qe.useRef(new Pt()), Oe = Qe.useRef(new Pt()), ve = Qe.useRef(new Pt()), k = Qe.useRef(new se()), ne = Qe.useRef(new se()), K = Qe.useRef(new Ks()), O = Qe.useRef(new Hc(0, 0, 0, 0)), V = Qe.useRef({
    ppwu: he.current,
    viewBounds: { min: we.current, max: nt.current },
    bounds: {
      min: Oe.current,
      max: ve.current
    },
    targets: {
      position: k.current,
      scale: ne.current,
      rotation: K.current
    },
    distance: Ee.current,
    margin: O.current
  }), Pe = Qe.useCallback(() => {
    Je(!1);
  }, []), Ce = Qe.useCallback(() => {
    Je(!0);
  }, []), Ve = Qe.useCallback((Ie, ot) => {
    const Et = new se();
    Ie.getWorldPosition(Et), ot.worldToLocal(Et), Ee.current = Math.abs(Et.z);
  }, []), ke = Qe.useCallback(
    (Ie, ot, Et, Ot, Ge, Vt) => {
      if (Ie.getViewBounds(
        Ee.current,
        we.current,
        nt.current
      ), he.current.setX(
        Math.abs(ot / (nt.current.x - we.current.x))
      ), he.current.setY(
        Math.abs(Et / (nt.current.y - we.current.y))
      ), Ot) {
        const {
          left: Rt,
          top: yt,
          width: Jt,
          height: dr
        } = Ot.getBoundingClientRect();
        pe.current.set(
          Jt,
          dr,
          Rt,
          yt
        );
        const Bn = we.current.x + Rt / he.current.x, cn = nt.current.y - yt / he.current.y;
        Oe.current.set(
          Bn,
          cn - dr / he.current.y
        ), ve.current.set(
          Bn + Jt / he.current.x,
          cn
        );
      } else
        Oe.current.copy(we.current), ve.current.copy(nt.current);
      if (O.current.set(0, 0, 0, 0), Ge)
        if (O.current.copy(Ge), Vt === R1.PX)
          O.current.divideScalar(he.current.x);
        else {
          const Rt = Math.abs(
            ve.current.x - Oe.current.x
          ), yt = Math.abs(
            ve.current.y - Oe.current.y
          );
          O.current.set(
            Ge.x * yt,
            Ge.y * Rt,
            Ge.z * yt,
            Ge.getComponent(3) * Rt
          );
        }
    },
    []
  ), it = Qe.useCallback((Ie, ot, Et, Ot) => {
    const Ge = Ot ? Oe.current : we.current, Vt = Ot ? ve.current : nt.current, Rt = Math.abs((Vt.x - Ge.x) * ot), yt = Math.abs((Vt.y - Ge.y) * Et);
    k.current.set(Ge.x + Rt, Vt.y - yt);
  }, []), at = Qe.useCallback(
    (Ie, ot, Et, Ot, Ge, Vt, Rt) => {
      if (ne.current.copy(Ie.scale), K.current.copy(Ie.rotation), typeof ot == "function") {
        const yt = ot(Ie, V.current, Ge);
        k.current.copy(yt), V.current.targets.position.copy(yt);
      }
      if (typeof Et == "function" || Vt) {
        const yt = Ob(Ie, V.current, Ge, Rt);
        if (ne.current.copy(yt), V.current.targets.scale.copy(yt), typeof Et == "function") {
          const Jt = Et(
            Ie,
            V.current,
            Ge,
            Rt
          );
          ne.current.copy(Jt), V.current.targets.scale.copy(Jt);
        }
      }
      if (typeof Ot == "function") {
        const yt = Ot(Ie, V.current, Ge);
        K.current.copy(yt), V.current.targets.rotation.copy(yt);
      }
    },
    []
  );
  return Qe.useEffect(() => {
    Me.current = 0;
  }, [
    e,
    a,
    u,
    d,
    m,
    v,
    b,
    E,
    _,
    R,
    C,
    z,
    D,
    L,
    B,
    j,
    te,
    ee,
    ue,
    de,
    be,
    ce
  ]), gy(({ size: { width: Ie, height: ot }, camera: Et }, Ot) => {
    if (le) {
      const Ge = (u == null ? void 0 : u.current) || Et;
      if (a && e.current) {
        const {
          width: Vt,
          height: Rt,
          left: yt,
          top: Jt
        } = e.current.getBoundingClientRect();
        (pe.current.x !== Vt || pe.current.y !== Rt || pe.current.z !== yt || pe.current.w !== Jt) && (Me.current = 0);
      }
      (Me.current < 1 || !b) && y.current instanceof yi && (!a || e.current) && (Ve(y.current, Ge), ke(
        Ge,
        Ie,
        ot,
        a && e.current,
        L,
        B
      ), it(Ge, m, v, a), at(
        y.current,
        C,
        z,
        D,
        Ge,
        _,
        R
      ), Me.current++), E && Me.current > 0 && y.current instanceof yi && (x1(
        y.current.position,
        [
          k.current.x,
          k.current.y,
          y.current.position.z
        ],
        j,
        te || Ot,
        ee,
        ue,
        de
      ), (_ || typeof z == "function") && x1(
        y.current.scale,
        [
          ne.current.x,
          ne.current.y,
          ne.current.z
        ],
        j,
        te || Ot,
        ee,
        ue,
        de
      ), typeof D == "function" && lb(
        y.current.rotation,
        K.current.clone(),
        j,
        te || Ot,
        ee,
        ue,
        de
      ));
    }
  }, d), { results: V.current, off: Pe, on: Ce };
}, jb = (y, e, a = !1, u, d = "progress", m = "p", v) => {
  const b = Qe.useRef(new Array(y)), E = Qe.useRef(), g = Qe.useRef(0), _ = Qe.useRef({ value: void 0 }), R = Qe.useRef({ value: void 0 });
  Qe.useEffect(() => {
    E.current = document.getElementById(d);
  }, [d]), Qe.useEffect(() => {
    g.current = 0;
  }, [e]);
  const C = Qe.useCallback(() => {
    const D = g.current % (y * e);
    for (let L = 0; L < y; L++) {
      const B = F1.smoothstep(D - L * e, 0, e);
      typeof B == "number" && B > 0 && B < 1 && (_.current.value = L + 1), b.current[L] = B, E.current.children[L].style.setProperty(
        `--${m}${L}`,
        `${b.current[L] * 100}%`
      );
    }
  }, [y, m, e]), z = Qe.useCallback((D) => {
    g.current = D;
  }, []);
  return gy(({ clock: D }, L) => {
    a || (g.current += L, C(), R.current.value != _.current.value && u(b, _.current.value), R.current.value = _.current.value);
  }, v), { progressRef: b, setElapsed: z };
};
function Ib(y = {}) {
  for (const e in y) {
    const { uniforms: a, vert: u, frag: d } = y[e], m = ub(a, u, d);
    qM({ [e]: m });
  }
}
export {
  R1 as UNITS,
  Ib as configureShaderMaterial,
  Ob as setScaleXY,
  Vb as use2DBounds,
  Pb as useFluidTexture,
  jb as useProgress
};
