var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var BreakpointObserver = /** @class */ (function () {
    function BreakpointObserver() {
        this.subUid = 1;
        this.subscriber = new Map();
    }
    BreakpointObserver.prototype.subscribe = function (breakpointMediaQuery, callback) {
        this.subUid += 1;
        this.subscriber.set(this.subUid, this.register(breakpointMediaQuery, callback));
        return this.subUid;
    };
    BreakpointObserver.prototype.register = function (breakpointMediaQuery, callback) {
        var breakpointValue = {};
        return Object.entries(breakpointMediaQuery).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], mediaQuery = _b[1];
            var listener = function (_a) {
                var _b;
                var matches = _a.matches;
                breakpointValue = __assign(__assign({}, breakpointValue), (_b = {}, _b[key] = matches, _b));
                callback(breakpointValue);
            };
            var mql = window.matchMedia(mediaQuery);
            mql.addListener(listener);
            listener(mql);
            return { listener: listener, mql: mql };
        });
    };
    BreakpointObserver.prototype.unsubscribe = function (subUid) {
        this.unregister(subUid);
        this.subscriber.delete(subUid);
    };
    BreakpointObserver.prototype.unregister = function (subUid) {
        var registerList = this.subscriber.get(subUid);
        registerList === null || registerList === void 0 ? void 0 : registerList.forEach(function (_a) {
            var mql = _a.mql, listener = _a.listener;
            mql.removeListener(listener);
        });
    };
    return BreakpointObserver;
}());
export default new BreakpointObserver();
//# sourceMappingURL=BreakpointObserver.js.map