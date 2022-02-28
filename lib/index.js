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
import React, { createContext, useContext, useEffect, useState } from 'react';
import BreakpointObserver from './BreakpointObserver';
function useBreakpoint(breakpointMediaQuery) {
    var _a = __read(useState({}), 2), breakpointMap = _a[0], setBreakpointMap = _a[1];
    useEffect(function () {
        var token = BreakpointObserver.subscribe(breakpointMediaQuery, function (value) {
            setBreakpointMap(value);
        });
        return function () { return BreakpointObserver.unsubscribe(token); };
    }, [breakpointMediaQuery]);
    return breakpointMap;
}
var DEFAULT_BREAKPOINT_MEDIA_QUERY = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
};
var BreakpointContext = createContext(null);
function BreakpointProvider(_a) {
    var breakpointMediaQuery = _a.breakpointMediaQuery, children = _a.children;
    return (React.createElement(BreakpointContext.Provider, { value: breakpointMediaQuery || DEFAULT_BREAKPOINT_MEDIA_QUERY }, children));
}
function useDefaultBreakpoint() {
    var breakpointMediaQuery = useContext(BreakpointContext);
    if (breakpointMediaQuery === null) {
        throw new Error('useDefaultBreakpoint may be used only in the context of a <BreakpointProvider> component.');
    }
    return useBreakpoint(breakpointMediaQuery);
}
export { useDefaultBreakpoint, BreakpointProvider };
export default useBreakpoint;
//# sourceMappingURL=index.js.map