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
  useEffect(function () {
    var saved = storage.get("authium");
    if (!saved) return;
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
    fetchUserData(access).then(setUser)["catch"](function () {
      console.error("Failed to fetch user on init");
      clearTokens();
    });
  }, [storage]);
  function clearTokens() {
    storage.remove("authium");
    setAccessToken(null);
    setRefreshToken(null);
    setExpiry(0);
    setUser(null);
  }
  function save(access, refresh, expiry) {
    setAccessToken(access);
    setRefreshToken(refresh);
    setExpiry(expiry);
    var encrypted = encrypt([access, refresh, expiry].join("\n"));
    storage.set("authium", encrypted);
  }
  function signIn(expiryOverride) {
    var csrf = Math.random().toString(36).substring(2);
    storage.set("authium_csrf", csrf);
    var url = "https://authium.ezerium.com/authorize?appId=".concat(config.appId, "&apiKey=").concat(config.apiKey, "&state=").concat(csrf);
    if (expiryOverride) url += "&expiry=".concat(expiryOverride);
    window.location.href = url;
  }
  function signOut() {
    return _signOut.apply(this, arguments);
  }
  function _signOut() {
    _signOut = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return axios.post("".concat(DAEMON_ENDPOINT, "/user/logout"), {
              headers: {
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 1:
            clearTokens();
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error("Failed to log out", _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return _signOut.apply(this, arguments);
  }
  function refresh() {
    return _refresh.apply(this, arguments);
  }
  function _refresh() {
    _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var diff, res, newAccessToken, newExpiry, newUser, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
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
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 5]]);
    }));
    return _refresh.apply(this, arguments);
  }
  return /*#__PURE__*/_jsx(AuthiumContext.Provider, {
    value: {
      user: user,
      isLoggedIn: !!user,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3IiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwicHVzaCIsImlzQXJyYXkiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VTdG9yYWdlIiwiZGVjcnlwdCIsImVuY3J5cHQiLCJqc3giLCJfanN4IiwiREFFTU9OX0VORFBPSU5UIiwiQXV0aGl1bUNvbnRleHQiLCJBdXRoaXVtUHJvdmlkZXIiLCJfcmVmIiwiY29uZmlnIiwiY2hpbGRyZW4iLCJzdG9yYWdlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInVzZXIiLCJzZXRVc2VyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJyZWZyZXNoVG9rZW4iLCJzZXRSZWZyZXNoVG9rZW4iLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImV4cGlyeSIsInNldEV4cGlyeSIsInNhdmVkIiwiZ2V0IiwiZGVjcnlwdGVkIiwiY2xlYXJUb2tlbnMiLCJfZGVjcnlwdGVkJHNwbGl0Iiwic3BsaXQiLCJfZGVjcnlwdGVkJHNwbGl0MiIsImFjY2VzcyIsInJlZnJlc2giLCJleHBpcnlTdHIiLCJleHBpcnlOdW0iLCJwYXJzZUludCIsIkRhdGUiLCJub3ciLCJmZXRjaFVzZXJEYXRhIiwiY29uc29sZSIsImVycm9yIiwicmVtb3ZlIiwic2F2ZSIsImVuY3J5cHRlZCIsImpvaW4iLCJzZXQiLCJzaWduSW4iLCJleHBpcnlPdmVycmlkZSIsImNzcmYiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsIiwiY29uY2F0IiwiYXBwSWQiLCJhcGlLZXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzaWduT3V0IiwiX3NpZ25PdXQiLCJfY2FsbGVlIiwiX3QiLCJfY29udGV4dCIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIl9yZWZyZXNoIiwiX2NhbGxlZTIiLCJkaWZmIiwicmVzIiwibmV3QWNjZXNzVG9rZW4iLCJuZXdFeHBpcnkiLCJuZXdVc2VyIiwiX3QyIiwiX2NvbnRleHQyIiwidG9rZW4iLCJkYXRhIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc19pbiIsIlByb3ZpZGVyIiwiaXNMb2dnZWRJbiIsInVzZUF1dGhpdW0iLCJjdHgiLCJFcnJvciIsIl94IiwiX2ZldGNoVXNlckRhdGEiLCJfY2FsbGVlMyIsIl90MyIsIl9jb250ZXh0MyJdLCJzb3VyY2VzIjpbIi4uL2xpYi9hdXRoaXVtLWNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZUNvbnRleHQsXHJcbiAgICB1c2VDb250ZXh0LFxyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgdXNlU3RhdGUsXHJcbiAgICBSZWFjdE5vZGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZGVjcnlwdCwgZW5jcnlwdCB9IGZyb20gXCIuL2VuY3J5cHRpb25cIjtcclxuaW1wb3J0IHsgQXV0aGl1bUNvbmZpZywgVXNlciB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5jb25zdCBEQUVNT05fRU5EUE9JTlQgPSBcImh0dHBzOi8vYXBpLmF1dGhpdW0uZXplcml1bS5jb20vdjFcIjtcclxuXHJcbmludGVyZmFjZSBBdXRoaXVtQ29udGV4dFZhbHVlIHtcclxuICAgIHVzZXI6IFVzZXIgfCBudWxsO1xyXG4gICAgaXNMb2dnZWRJbjogYm9vbGVhbjtcclxuICAgIHNpZ25JbjogKGV4cGlyeU92ZXJyaWRlPzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgc2lnbk91dDogKCkgPT4gdm9pZDtcclxuICAgIHJlZnJlc2g6ICgpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBzYXZlOiAoYWNjZXNzOiBzdHJpbmcsIHJlZnJlc2g6IHN0cmluZywgZXhwaXJ5OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEF1dGhpdW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoaXVtQ29udGV4dFZhbHVlIHwgbnVsbD4obnVsbCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoaXVtUHJvdmlkZXIoe1xyXG4gICAgY29uZmlnLFxyXG4gICAgY2hpbGRyZW4sXHJcbn06IHtcclxuICAgIGNvbmZpZzogQXV0aGl1bUNvbmZpZztcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn0pIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSB1c2VTdG9yYWdlKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW3JlZnJlc2hUb2tlbiwgc2V0UmVmcmVzaFRva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2V4cGlyeSwgc2V0RXhwaXJ5XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IHN0b3JhZ2UuZ2V0KFwiYXV0aGl1bVwiKTtcclxuICAgICAgICBpZiAoIXNhdmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRlY3J5cHRlZCA9IGRlY3J5cHQoc2F2ZWQpO1xyXG4gICAgICAgIGlmICghZGVjcnlwdGVkKSByZXR1cm4gY2xlYXJUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2FjY2VzcywgcmVmcmVzaCwgZXhwaXJ5U3RyXSA9IGRlY3J5cHRlZC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBjb25zdCBleHBpcnlOdW0gPSBwYXJzZUludChleHBpcnlTdHIhLCAxMCk7XHJcbiAgICAgICAgaWYgKCFhY2Nlc3MgfHwgIXJlZnJlc2ggfHwgIWV4cGlyeU51bSB8fCBEYXRlLm5vdygpID4gZXhwaXJ5TnVtKVxyXG4gICAgICAgICAgICByZXR1cm4gY2xlYXJUb2tlbnMoKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRBY2Nlc3NUb2tlbihhY2Nlc3MpO1xyXG4gICAgICAgIHNldFJlZnJlc2hUb2tlbihyZWZyZXNoKTtcclxuICAgICAgICBzZXRFeHBpcnkoZXhwaXJ5TnVtKTtcclxuICAgICAgICBmZXRjaFVzZXJEYXRhKGFjY2VzcykudGhlbihzZXRVc2VyKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBvbiBpbml0XCIpO1xyXG4gICAgICAgICAgICBjbGVhclRva2VucygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3N0b3JhZ2VdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclRva2VucygpIHtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZShcImF1dGhpdW1cIik7XHJcbiAgICAgICAgc2V0QWNjZXNzVG9rZW4obnVsbCk7XHJcbiAgICAgICAgc2V0UmVmcmVzaFRva2VuKG51bGwpO1xyXG4gICAgICAgIHNldEV4cGlyeSgwKTtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmUoYWNjZXNzOiBzdHJpbmcsIHJlZnJlc2g6IHN0cmluZywgZXhwaXJ5OiBudW1iZXIpIHtcclxuICAgICAgICBzZXRBY2Nlc3NUb2tlbihhY2Nlc3MpO1xyXG4gICAgICAgIHNldFJlZnJlc2hUb2tlbihyZWZyZXNoKTtcclxuICAgICAgICBzZXRFeHBpcnkoZXhwaXJ5KTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkID0gZW5jcnlwdChbYWNjZXNzLCByZWZyZXNoLCBleHBpcnldLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2V0KFwiYXV0aGl1bVwiLCBlbmNyeXB0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNpZ25JbihleHBpcnlPdmVycmlkZT86IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGNzcmYgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XHJcbiAgICAgICAgc3RvcmFnZS5zZXQoXCJhdXRoaXVtX2NzcmZcIiwgY3NyZik7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hdXRoaXVtLmV6ZXJpdW0uY29tL2F1dGhvcml6ZT9hcHBJZD0ke2NvbmZpZy5hcHBJZH0mYXBpS2V5PSR7Y29uZmlnLmFwaUtleX0mc3RhdGU9JHtjc3JmfWA7XHJcbiAgICAgICAgaWYgKGV4cGlyeU92ZXJyaWRlKSB1cmwgKz0gYCZleHBpcnk9JHtleHBpcnlPdmVycmlkZX1gO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtEQUVNT05fRU5EUE9JTlR9L3VzZXIvbG9nb3V0YCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2xlYXJUb2tlbnMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2cgb3V0XCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2goKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IGRpZmYgPSBleHBpcnkgLSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChkaWZmID4gNjAgKiAxMDAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghcmVmcmVzaFRva2VuKSByZXR1cm4gY2xlYXJUb2tlbnMoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0PHsgYWNjZXNzX3Rva2VuOiBzdHJpbmc7IGV4cGlyZXNfaW46IG51bWJlciB9PihcclxuICAgICAgICAgICAgICAgIGAke0RBRU1PTl9FTkRQT0lOVH0vdG9rZW4vcmVmcmVzaGAsXHJcbiAgICAgICAgICAgICAgICB7IHRva2VuOiByZWZyZXNoVG9rZW4gfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdBY2Nlc3NUb2tlbiA9IHJlcy5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgY29uc3QgbmV3RXhwaXJ5ID0gRGF0ZS5ub3coKSArIHJlcy5kYXRhLmV4cGlyZXNfaW4gKiAxMDAwO1xyXG5cclxuICAgICAgICAgICAgc2F2ZShuZXdBY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBuZXdFeHBpcnkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IGZldGNoVXNlckRhdGEobmV3QWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgICBzZXRVc2VyKG5ld1VzZXIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHJlZnJlc2ggdG9rZW5cIiwgZXJyKTtcclxuICAgICAgICAgICAgY2xlYXJUb2tlbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aGl1bUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgaXNMb2dnZWRJbjogISF1c2VyLFxyXG4gICAgICAgICAgICBzaWduSW4sXHJcbiAgICAgICAgICAgIHNpZ25PdXQsXHJcbiAgICAgICAgICAgIHJlZnJlc2gsXHJcbiAgICAgICAgICAgIHNhdmVcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aGl1bUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aGl1bSgpIHtcclxuICAgIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aGl1bUNvbnRleHQpO1xyXG4gICAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhpdW0gbXVzdCBiZSB1c2VkIHdpdGhpbiBBdXRoaXVtUHJvdmlkZXJcIik7XHJcbiAgICByZXR1cm4gY3R4O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEYXRhKHRva2VuOiBzdHJpbmcpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxVc2VyPihgJHtEQUVNT05fRU5EUE9JTlR9L2FwcC91c2VyYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHJlcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyXCIsIGVycik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEF1dGhpdW1Db25maWcpIHtcclxuICAgIENPTkZJRyA9IGNvbmZpZztcclxuICAgIFxyXG4gICAgY29uc3Qgc2F2ZWQgPSB1c2VTdG9yYWdlKCkuZ2V0KFwiYXV0aGl1bVwiKTtcclxuICAgIGlmICghc2F2ZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGRlY3J5cHRlZCA9IGRlY3J5cHQoc2F2ZWQpO1xyXG4gICAgaWYgKCFkZWNyeXB0ZWQpIHJldHVybiBjbGVhclRva2VucygpO1xyXG5cclxuICAgIGNvbnN0IFthY2Nlc3MsIHJlZnJlc2gsIGV4cGlyeVN0cl0gPSBkZWNyeXB0ZWQuc3BsaXQoXCJcXG5cIik7XHJcbiAgICBjb25zdCBleHBpcnkgPSBwYXJzZUludChleHBpcnlTdHIhLCAxMCk7XHJcbiAgICBpZiAoIWFjY2VzcyB8fCAhcmVmcmVzaCB8fCAhZXhwaXJ5IHx8IERhdGUubm93KCkgPiBleHBpcnkpIHJldHVybiBjbGVhclRva2VucygpO1xyXG5cclxuICAgIGxvZ2luKGFjY2VzcywgcmVmcmVzaCwgZXhwaXJ5KS5jYXRjaCgoKSA9PiBjbGVhclRva2VucygpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oYWNjZXNzOiBzdHJpbmcsIHJlZnJlc2g6IHN0cmluZywgZXhwaXJ5OiBudW1iZXIpIHtcclxuICAgIEFDQ0VTU19UT0tFTiA9IGFjY2VzcztcclxuICAgIFJFRlJFU0hfVE9LRU4gPSByZWZyZXNoO1xyXG4gICAgRVhQSVJZID0gZXhwaXJ5O1xyXG5cclxuICAgIHNhdmUoQUNDRVNTX1RPS0VOLCBSRUZSRVNIX1RPS0VOLCBFWFBJUlkpO1xyXG4gICAgVVNFUiA9IGF3YWl0IGZldGNoVXNlckRhdGEoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25JbihleHBpcnlPdmVycmlkZT86IG51bWJlcikge1xyXG4gICAgaWYgKCFDT05GSUcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdXRoaXVtIG5vdCBjb25maWd1cmVkLiBDYWxsIGNvbmZpZ3VyZSgpIGZpcnN0LlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xyXG4gICAgdXNlU3RvcmFnZSgpLnNldChcImF1dGhpdW1fY3NyZlwiLCBjc3JmKTtcclxuXHJcbiAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXV0aGl1bS5lemVyaXVtLmNvbS9hdXRob3JpemU/YXBwSWQ9JHtDT05GSUcuYXBwSWR9JmFwaUtleT0ke0NPTkZJRy5hcGlLZXl9JnN0YXRlPSR7Y3NyZn1gO1xyXG4gICAgaWYgKGV4cGlyeU92ZXJyaWRlKSB1cmwgKz0gYCZleHBpcnk9JHtleHBpcnlPdmVycmlkZX1gO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhVVNFUjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXIoKTogVXNlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIFVTRVIgPyB7IC4uLlVTRVIgfSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoKCkge1xyXG4gICAgbGV0IGRpZmYgPSBFWFBJUlkgLSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKGRpZmYgPiA2MCAqIDEwMDApIHJldHVybjtcclxuICAgIFxyXG4gICAgaWYgKCFSRUZSRVNIX1RPS0VOKSByZXR1cm4gY2xlYXJUb2tlbnMoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3Q8eyBhY2Nlc3NfdG9rZW46IHN0cmluZzsgZXhwaXJlc19pbjogbnVtYmVyIH0+KFxyXG4gICAgICAgICAgICBgJHtEQUVNT05fRU5EUE9JTlR9L3Rva2VuL3JlZnJlc2hgLFxyXG4gICAgICAgICAgICB7IHRva2VuOiBSRUZSRVNIX1RPS0VOIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIEFDQ0VTU19UT0tFTiA9IHJlcy5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICBFWFBJUlkgPSBEYXRlLm5vdygpICsgcmVzLmRhdGEuZXhwaXJlc19pbiAqIDEwMDA7XHJcblxyXG4gICAgICAgIHNhdmUoQUNDRVNTX1RPS0VOLCBSRUZSRVNIX1RPS0VOLCBFWFBJUlkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byByZWZyZXNoIHRva2VuXCIsIGVycik7XHJcbiAgICAgICAgY2xlYXJUb2tlbnMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJUb2tlbnMoKSB7XHJcbiAgICB1c2VTdG9yYWdlKCkucmVtb3ZlKFwiYXV0aGl1bVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZShhY2Nlc3NUb2tlbjogc3RyaW5nLCByZWZyZXNoVG9rZW46IHN0cmluZywgZXhwaXJ5OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVuY3J5cHRlZCA9IGVuY3J5cHQoW2FjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIGV4cGlyeV0uam9pbihcIlxcblwiKSk7XHJcbiAgICB1c2VTdG9yYWdlKCkuc2V0KFwiYXV0aGl1bVwiLCBlbmNyeXB0ZWQpO1xyXG59XHJcbiovIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUFDLFNBQUFBLGFBQUEsSUFDYix1S0FBQUMsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVks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