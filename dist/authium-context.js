"use client";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useStorage } from "./storage";
import { decrypt, encrypt } from "./encryption";
import { jsx as _jsx } from "react/jsx-runtime";
var DAEMON_ENDPOINT = "https://api.authium.ezerium.com/v1";
var AuthiumContext = /*#__PURE__*/createContext(null);
export function AuthiumProvider(_ref) {
  var config = _ref.config,
    children = _ref.children;
  var storage = useStorage();
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    accessToken = _useState4[0],
    setAccessToken = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    refreshToken = _useState6[0],
    setRefreshToken = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    expiry = _useState8[0],
    setExpiry = _useState8[1];
  var _useState9 = useState(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    setError = _useState10[1];
  useEffect(function () {
    setError(null);
    setLoading(true);
    var saved = storage.get("authium");
    if (!saved) return clearTokens();
    var decrypted = decrypt(saved);
    if (!decrypted) return clearTokens();
    var _decrypted$split = decrypted.split("\n"),
      _decrypted$split2 = _slicedToArray(_decrypted$split, 3),
      access = _decrypted$split2[0],
      refresh = _decrypted$split2[1],
      expiryStr = _decrypted$split2[2];
    var expiryNum = parseInt(expiryStr, 10);
    if (!access || !refresh || !expiryNum || Date.now() > expiryNum) return clearTokens();
    setAccessToken(access);
    setRefreshToken(refresh);
    setExpiry(expiryNum);
    fetchUserData(access).then(function (u) {
      setUser(u);
      setLoading(false);
    })["catch"](function () {
      console.error("Failed to fetch user on init");
      setLoading(false);
      setError("Failed to fetch user data");
      clearTokens();
    });
  }, [storage]);
  function clearTokens() {
    storage.remove("authium");
    setAccessToken(null);
    setRefreshToken(null);
    setExpiry(0);
    setUser(null);
    setLoading(false);
  }
  function save(access, refresh, expiry) {
    setAccessToken(access);
    setRefreshToken(refresh);
    setExpiry(expiry);
    var encrypted = encrypt([access, refresh, expiry].join("\n"));
    storage.set("authium", encrypted);
  }
  function signIn(expiryOverride, fallback) {
    if (!config || !config.appId || !config.apiKey) {
      setError("Authium not configured. Please provide appId and apiKey to AuthiumProvider.");
      return;
    }
    if (user || accessToken && expiry > Date.now()) {
      fallback === null || fallback === void 0 || fallback();
    }
    var csrf = Math.random().toString(36).substring(2);
    storage.set("authium_csrf", csrf);
    var url = "https://authium.ezerium.com/authorize?appId=".concat(config.appId, "&apiKey=").concat(config.apiKey, "&state=").concat(csrf);
    if (expiryOverride) url += "&exp=".concat(expiryOverride);
    window.location.href = url;
  }
  function signOut() {
    return _signOut.apply(this, arguments);
  }
  function _signOut() {
    _signOut = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var res, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return axios.post("".concat(DAEMON_ENDPOINT, "/user/logout"), null, {
              headers: {
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 1:
            res = _context.v;
            if (!(res.status !== 200)) {
              _context.n = 2;
              break;
            }
            throw new Error("Failed to log out");
          case 2:
            clearTokens();
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("Failed to log out", _t);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return _signOut.apply(this, arguments);
  }
  function refresh() {
    return _refresh.apply(this, arguments);
  }
  function _refresh() {
    _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var updateLoadingState,
        diff,
        res,
        newAccessToken,
        newExpiry,
        newUser,
        _args2 = arguments,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            updateLoadingState = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
            if (updateLoadingState) setLoading(true);
            diff = expiry - Date.now();
            if (!(diff > 60 * 1000)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (refreshToken) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, clearTokens());
          case 2:
            _context2.p = 2;
            _context2.n = 3;
            return axios.post("".concat(DAEMON_ENDPOINT, "/token/refresh"), {
              token: refreshToken
            });
          case 3:
            res = _context2.v;
            newAccessToken = res.data.access_token;
            newExpiry = Date.now() + res.data.expires_in * 1000;
            save(newAccessToken, refreshToken, newExpiry);
            _context2.n = 4;
            return fetchUserData(newAccessToken);
          case 4:
            newUser = _context2.v;
            setUser(newUser);
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            console.error("Failed to refresh token", _t2);
            clearTokens();
          case 6:
            _context2.p = 6;
            if (updateLoadingState) setLoading(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 5, 6, 7]]);
    }));
    return _refresh.apply(this, arguments);
  }
  return /*#__PURE__*/_jsx(AuthiumContext.Provider, {
    value: {
      user: user,
      isLoggedIn: !!accessToken && expiry > Date.now(),
      loading: loading,
      error: error,
      signIn: signIn,
      signOut: signOut,
      refresh: refresh,
      save: save
    },
    children: children
  });
}
export function useAuthium() {
  var ctx = useContext(AuthiumContext);
  if (!ctx) throw new Error("useAuthium must be used within AuthiumProvider");
  return ctx;
}
function fetchUserData(_x) {
  return _fetchUserData.apply(this, arguments);
}
/*

export function configure(config: AuthiumConfig) {
    CONFIG = config;
    
    const saved = useStorage().get("authium");
    if (!saved) return;
    const decrypted = decrypt(saved);
    if (!decrypted) return clearTokens();

    const [access, refresh, expiryStr] = decrypted.split("\n");
    const expiry = parseInt(expiryStr!, 10);
    if (!access || !refresh || !expiry || Date.now() > expiry) return clearTokens();

    login(access, refresh, expiry).catch(() => clearTokens());
}

async function login(access: string, refresh: string, expiry: number) {
    ACCESS_TOKEN = access;
    REFRESH_TOKEN = refresh;
    EXPIRY = expiry;

    save(ACCESS_TOKEN, REFRESH_TOKEN, EXPIRY);
    USER = await fetchUserData();
}

export async function signIn(expiryOverride?: number) {
    if (!CONFIG) {
        throw new Error("Authium not configured. Call configure() first.");
    }

    const csrf = Math.random().toString(36).substring(2);
    useStorage().set("authium_csrf", csrf);

    let url = `https://authium.ezerium.com/authorize?appId=${CONFIG.appId}&apiKey=${CONFIG.apiKey}&state=${csrf}`;
    if (expiryOverride) url += `&expiry=${expiryOverride}`;
    window.location.href = url;
}

export function isLoggedIn(): boolean {
    return !!USER;
}

export function getUser(): User | null {
    return USER ? { ...USER } : null;
}

export async function refresh() {
    let diff = EXPIRY - Date.now();
    if (diff > 60 * 1000) return;
    
    if (!REFRESH_TOKEN) return clearTokens();

    try {
        const res = await axios.post<{ access_token: string; expires_in: number }>(
            `${DAEMON_ENDPOINT}/token/refresh`,
            { token: REFRESH_TOKEN }
        );
        ACCESS_TOKEN = res.data.access_token;
        EXPIRY = Date.now() + res.data.expires_in * 1000;

        save(ACCESS_TOKEN, REFRESH_TOKEN, EXPIRY);
    } catch (err) {
        console.error("Failed to refresh token", err);
        clearTokens();
    }
}

function clearTokens() {
    useStorage().remove("authium");
}

function save(accessToken: string, refreshToken: string, expiry: number) {
    const encrypted = encrypt([accessToken, refreshToken, expiry].join("\n"));
    useStorage().set("authium", encrypted);
}
*/
function _fetchUserData() {
  _fetchUserData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(token) {
    var res, user, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return axios.get("".concat(DAEMON_ENDPOINT, "/app/user"), {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          });
        case 1:
          res = _context3.v;
          user = res.data;
          return _context3.a(2, user);
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error("Failed to fetch user", _t3);
          return _context3.a(2, null);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return _fetchUserData.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3IiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwicHVzaCIsImlzQXJyYXkiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VTdG9yYWdlIiwiZGVjcnlwdCIsImVuY3J5cHQiLCJqc3giLCJfanN4IiwiREFFTU9OX0VORFBPSU5UIiwiQXV0aGl1bUNvbnRleHQiLCJBdXRoaXVtUHJvdmlkZXIiLCJfcmVmIiwiY29uZmlnIiwiY2hpbGRyZW4iLCJzdG9yYWdlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInVzZXIiLCJzZXRVc2VyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJyZWZyZXNoVG9rZW4iLCJzZXRSZWZyZXNoVG9rZW4iLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImV4cGlyeSIsInNldEV4cGlyeSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJlcnJvciIsInNldEVycm9yIiwic2F2ZWQiLCJnZXQiLCJjbGVhclRva2VucyIsImRlY3J5cHRlZCIsIl9kZWNyeXB0ZWQkc3BsaXQiLCJzcGxpdCIsIl9kZWNyeXB0ZWQkc3BsaXQyIiwiYWNjZXNzIiwicmVmcmVzaCIsImV4cGlyeVN0ciIsImV4cGlyeU51bSIsInBhcnNlSW50IiwiRGF0ZSIsIm5vdyIsImZldGNoVXNlckRhdGEiLCJjb25zb2xlIiwicmVtb3ZlIiwic2F2ZSIsImVuY3J5cHRlZCIsImpvaW4iLCJzZXQiLCJzaWduSW4iLCJleHBpcnlPdmVycmlkZSIsImZhbGxiYWNrIiwiYXBwSWQiLCJhcGlLZXkiLCJjc3JmIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0cmluZyIsInVybCIsImNvbmNhdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNpZ25PdXQiLCJfc2lnbk91dCIsIl9jYWxsZWUiLCJyZXMiLCJfdCIsIl9jb250ZXh0IiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic3RhdHVzIiwiRXJyb3IiLCJfcmVmcmVzaCIsIl9jYWxsZWUyIiwidXBkYXRlTG9hZGluZ1N0YXRlIiwiZGlmZiIsIm5ld0FjY2Vzc1Rva2VuIiwibmV3RXhwaXJ5IiwibmV3VXNlciIsIl9hcmdzMiIsIl90MiIsIl9jb250ZXh0MiIsInVuZGVmaW5lZCIsInRva2VuIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iLCJQcm92aWRlciIsImlzTG9nZ2VkSW4iLCJ1c2VBdXRoaXVtIiwiY3R4IiwiX3giLCJfZmV0Y2hVc2VyRGF0YSIsIl9jYWxsZWUzIiwiX3QzIiwiX2NvbnRleHQzIl0sInNvdXJjZXMiOlsiLi4vbGliL2F1dGhpdW0tY29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlQ29udGV4dCxcclxuICAgIHVzZUNvbnRleHQsXHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICB1c2VTdGF0ZSxcclxuICAgIFJlYWN0Tm9kZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBkZWNyeXB0LCBlbmNyeXB0IH0gZnJvbSBcIi4vZW5jcnlwdGlvblwiO1xyXG5pbXBvcnQgeyBBdXRoaXVtQ29uZmlnLCBVc2VyIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IERBRU1PTl9FTkRQT0lOVCA9IFwiaHR0cHM6Ly9hcGkuYXV0aGl1bS5lemVyaXVtLmNvbS92MVwiO1xyXG5cclxuaW50ZXJmYWNlIEF1dGhpdW1Db250ZXh0VmFsdWUge1xyXG4gICAgdXNlcjogVXNlciB8IG51bGw7XHJcbiAgICBpc0xvZ2dlZEluOiBib29sZWFuO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGVycm9yOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgc2lnbkluOiAoZXhwaXJ5T3ZlcnJpZGU/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkO1xyXG4gICAgcmVmcmVzaDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHNhdmU6IChhY2Nlc3M6IHN0cmluZywgcmVmcmVzaDogc3RyaW5nLCBleHBpcnk6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQXV0aGl1bUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhpdW1Db250ZXh0VmFsdWUgfCBudWxsPihudWxsKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhpdW1Qcm92aWRlcih7XHJcbiAgICBjb25maWcsXHJcbiAgICBjaGlsZHJlbixcclxufToge1xyXG4gICAgY29uZmlnPzogUGFydGlhbDxBdXRoaXVtQ29uZmlnPjtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn0pIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSB1c2VTdG9yYWdlKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW3JlZnJlc2hUb2tlbiwgc2V0UmVmcmVzaFRva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2V4cGlyeSwgc2V0RXhwaXJ5XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCBzYXZlZCA9IHN0b3JhZ2UuZ2V0KFwiYXV0aGl1bVwiKTtcclxuICAgICAgICBpZiAoIXNhdmVkKSByZXR1cm4gY2xlYXJUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVjcnlwdGVkID0gZGVjcnlwdChzYXZlZCk7XHJcbiAgICAgICAgaWYgKCFkZWNyeXB0ZWQpIFxyXG4gICAgICAgICAgICByZXR1cm4gY2xlYXJUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2FjY2VzcywgcmVmcmVzaCwgZXhwaXJ5U3RyXSA9IGRlY3J5cHRlZC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBjb25zdCBleHBpcnlOdW0gPSBwYXJzZUludChleHBpcnlTdHIhLCAxMCk7XHJcbiAgICAgICAgaWYgKCFhY2Nlc3MgfHwgIXJlZnJlc2ggfHwgIWV4cGlyeU51bSB8fCBEYXRlLm5vdygpID4gZXhwaXJ5TnVtKSBcclxuICAgICAgICAgICAgcmV0dXJuIGNsZWFyVG9rZW5zKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0QWNjZXNzVG9rZW4oYWNjZXNzKTtcclxuICAgICAgICBzZXRSZWZyZXNoVG9rZW4ocmVmcmVzaCk7XHJcbiAgICAgICAgc2V0RXhwaXJ5KGV4cGlyeU51bSk7XHJcbiAgICAgICAgZmV0Y2hVc2VyRGF0YShhY2Nlc3MpLnRoZW4oKHUpID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlcih1KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVzZXIgb24gaW5pdFwiKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YVwiKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVG9rZW5zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbc3RvcmFnZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyVG9rZW5zKCkge1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlKFwiYXV0aGl1bVwiKTtcclxuICAgICAgICBzZXRBY2Nlc3NUb2tlbihudWxsKTtcclxuICAgICAgICBzZXRSZWZyZXNoVG9rZW4obnVsbCk7XHJcbiAgICAgICAgc2V0RXhwaXJ5KDApO1xyXG4gICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZShhY2Nlc3M6IHN0cmluZywgcmVmcmVzaDogc3RyaW5nLCBleHBpcnk6IG51bWJlcikge1xyXG4gICAgICAgIHNldEFjY2Vzc1Rva2VuKGFjY2Vzcyk7XHJcbiAgICAgICAgc2V0UmVmcmVzaFRva2VuKHJlZnJlc2gpO1xyXG4gICAgICAgIHNldEV4cGlyeShleHBpcnkpO1xyXG5cclxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBlbmNyeXB0KFthY2Nlc3MsIHJlZnJlc2gsIGV4cGlyeV0uam9pbihcIlxcblwiKSk7XHJcbiAgICAgICAgc3RvcmFnZS5zZXQoXCJhdXRoaXVtXCIsIGVuY3J5cHRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2lnbkluKGV4cGlyeU92ZXJyaWRlPzogbnVtYmVyLCBmYWxsYmFjaz86ICgpID0+IG5ldmVyKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5hcHBJZCB8fCAhY29uZmlnLmFwaUtleSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcIkF1dGhpdW0gbm90IGNvbmZpZ3VyZWQuIFBsZWFzZSBwcm92aWRlIGFwcElkIGFuZCBhcGlLZXkgdG8gQXV0aGl1bVByb3ZpZGVyLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXIgfHwgKGFjY2Vzc1Rva2VuICYmIGV4cGlyeSA+IERhdGUubm93KCkpKSB7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrPy4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNzcmYgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XHJcbiAgICAgICAgc3RvcmFnZS5zZXQoXCJhdXRoaXVtX2NzcmZcIiwgY3NyZik7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hdXRoaXVtLmV6ZXJpdW0uY29tL2F1dGhvcml6ZT9hcHBJZD0ke2NvbmZpZy5hcHBJZH0mYXBpS2V5PSR7Y29uZmlnLmFwaUtleX0mc3RhdGU9JHtjc3JmfWA7XHJcbiAgICAgICAgaWYgKGV4cGlyeU92ZXJyaWRlKSB1cmwgKz0gYCZleHA9JHtleHBpcnlPdmVycmlkZX1gO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtEQUVNT05fRU5EUE9JTlR9L3VzZXIvbG9nb3V0YCwgbnVsbCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkgXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9nIG91dFwiKTtcclxuICAgICAgICAgICAgY2xlYXJUb2tlbnMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2cgb3V0XCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2godXBkYXRlTG9hZGluZ1N0YXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodXBkYXRlTG9hZGluZ1N0YXRlKSBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgZGlmZiA9IGV4cGlyeSAtIERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKGRpZmYgPiA2MCAqIDEwMDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHJldHVybiBjbGVhclRva2VucygpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3Q8eyBhY2Nlc3NfdG9rZW46IHN0cmluZzsgZXhwaXJlc19pbjogbnVtYmVyIH0+KFxyXG4gICAgICAgICAgICAgICAgYCR7REFFTU9OX0VORFBPSU5UfS90b2tlbi9yZWZyZXNoYCxcclxuICAgICAgICAgICAgICAgIHsgdG9rZW46IHJlZnJlc2hUb2tlbiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0FjY2Vzc1Rva2VuID0gcmVzLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdFeHBpcnkgPSBEYXRlLm5vdygpICsgcmVzLmRhdGEuZXhwaXJlc19pbiAqIDEwMDA7XHJcblxyXG4gICAgICAgICAgICBzYXZlKG5ld0FjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIG5ld0V4cGlyeSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZmV0Y2hVc2VyRGF0YShuZXdBY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcmVmcmVzaCB0b2tlblwiLCBlcnIpO1xyXG4gICAgICAgICAgICBjbGVhclRva2VucygpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVMb2FkaW5nU3RhdGUpIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoaXVtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICBpc0xvZ2dlZEluOiAhIWFjY2Vzc1Rva2VuICYmIGV4cGlyeSA+IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICBzaWduSW4sXHJcbiAgICAgICAgICAgIHNpZ25PdXQsXHJcbiAgICAgICAgICAgIHJlZnJlc2gsXHJcbiAgICAgICAgICAgIHNhdmVcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aGl1bUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aGl1bSgpIHtcclxuICAgIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aGl1bUNvbnRleHQpO1xyXG4gICAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhpdW0gbXVzdCBiZSB1c2VkIHdpdGhpbiBBdXRoaXVtUHJvdmlkZXJcIik7XHJcbiAgICByZXR1cm4gY3R4O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEYXRhKHRva2VuOiBzdHJpbmcpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxVc2VyPihgJHtEQUVNT05fRU5EUE9JTlR9L2FwcC91c2VyYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHJlcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyXCIsIGVycik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEF1dGhpdW1Db25maWcpIHtcclxuICAgIENPTkZJRyA9IGNvbmZpZztcclxuICAgIFxyXG4gICAgY29uc3Qgc2F2ZWQgPSB1c2VTdG9yYWdlKCkuZ2V0KFwiYXV0aGl1bVwiKTtcclxuICAgIGlmICghc2F2ZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGRlY3J5cHRlZCA9IGRlY3J5cHQoc2F2ZWQpO1xyXG4gICAgaWYgKCFkZWNyeXB0ZWQpIHJldHVybiBjbGVhclRva2VucygpO1xyXG5cclxuICAgIGNvbnN0IFthY2Nlc3MsIHJlZnJlc2gsIGV4cGlyeVN0cl0gPSBkZWNyeXB0ZWQuc3BsaXQoXCJcXG5cIik7XHJcbiAgICBjb25zdCBleHBpcnkgPSBwYXJzZUludChleHBpcnlTdHIhLCAxMCk7XHJcbiAgICBpZiAoIWFjY2VzcyB8fCAhcmVmcmVzaCB8fCAhZXhwaXJ5IHx8IERhdGUubm93KCkgPiBleHBpcnkpIHJldHVybiBjbGVhclRva2VucygpO1xyXG5cclxuICAgIGxvZ2luKGFjY2VzcywgcmVmcmVzaCwgZXhwaXJ5KS5jYXRjaCgoKSA9PiBjbGVhclRva2VucygpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oYWNjZXNzOiBzdHJpbmcsIHJlZnJlc2g6IHN0cmluZywgZXhwaXJ5OiBudW1iZXIpIHtcclxuICAgIEFDQ0VTU19UT0tFTiA9IGFjY2VzcztcclxuICAgIFJFRlJFU0hfVE9LRU4gPSByZWZyZXNoO1xyXG4gICAgRVhQSVJZID0gZXhwaXJ5O1xyXG5cclxuICAgIHNhdmUoQUNDRVNTX1RPS0VOLCBSRUZSRVNIX1RPS0VOLCBFWFBJUlkpO1xyXG4gICAgVVNFUiA9IGF3YWl0IGZldGNoVXNlckRhdGEoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25JbihleHBpcnlPdmVycmlkZT86IG51bWJlcikge1xyXG4gICAgaWYgKCFDT05GSUcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdXRoaXVtIG5vdCBjb25maWd1cmVkLiBDYWxsIGNvbmZpZ3VyZSgpIGZpcnN0LlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xyXG4gICAgdXNlU3RvcmFnZSgpLnNldChcImF1dGhpdW1fY3NyZlwiLCBjc3JmKTtcclxuXHJcbiAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXV0aGl1bS5lemVyaXVtLmNvbS9hdXRob3JpemU/YXBwSWQ9JHtDT05GSUcuYXBwSWR9JmFwaUtleT0ke0NPTkZJRy5hcGlLZXl9JnN0YXRlPSR7Y3NyZn1gO1xyXG4gICAgaWYgKGV4cGlyeU92ZXJyaWRlKSB1cmwgKz0gYCZleHBpcnk9JHtleHBpcnlPdmVycmlkZX1gO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhVVNFUjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXIoKTogVXNlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIFVTRVIgPyB7IC4uLlVTRVIgfSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoKCkge1xyXG4gICAgbGV0IGRpZmYgPSBFWFBJUlkgLSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKGRpZmYgPiA2MCAqIDEwMDApIHJldHVybjtcclxuICAgIFxyXG4gICAgaWYgKCFSRUZSRVNIX1RPS0VOKSByZXR1cm4gY2xlYXJUb2tlbnMoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3Q8eyBhY2Nlc3NfdG9rZW46IHN0cmluZzsgZXhwaXJlc19pbjogbnVtYmVyIH0+KFxyXG4gICAgICAgICAgICBgJHtEQUVNT05fRU5EUE9JTlR9L3Rva2VuL3JlZnJlc2hgLFxyXG4gICAgICAgICAgICB7IHRva2VuOiBSRUZSRVNIX1RPS0VOIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIEFDQ0VTU19UT0tFTiA9IHJlcy5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICBFWFBJUlkgPSBEYXRlLm5vdygpICsgcmVzLmRhdGEuZXhwaXJlc19pbiAqIDEwMDA7XHJcblxyXG4gICAgICAgIHNhdmUoQUNDRVNTX1RPS0VOLCBSRUZSRVNIX1RPS0VOLCBFWFBJUlkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byByZWZyZXNoIHRva2VuXCIsIGVycik7XHJcbiAgICAgICAgY2xlYXJUb2tlbnMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJUb2tlbnMoKSB7XHJcbiAgICB1c2VTdG9yYWdlKCkucmVtb3ZlKFwiYXV0aGl1bVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZShhY2Nlc3NUb2tlbjogc3RyaW5nLCByZWZyZXNoVG9rZW46IHN0cmluZywgZXhwaXJ5OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVuY3J5cHRlZCA9IGVuY3J5cHQoW2FjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIGV4cGlyeV0uam9pbihcIlxcblwiKSk7XHJcbiAgICB1c2VTdG9yYWdlKCkuc2V0KFwiYXV0aGl1bVwiLCBlbmNyeXB0ZWQpO1xyXG59XHJcbiovIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUFDLFNBQUFBLGFBQUEsSUFDYix1S0FB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