import React from 'react';
import type { BreakpointMediaQuery, BreakpointValue } from './BreakpointObserver';
declare function useBreakpoint(breakpointMediaQuery: BreakpointMediaQuery): BreakpointValue;
interface BreakpointProviderProps {
    breakpointMediaQuery?: BreakpointMediaQuery;
    children?: React.ReactNode;
}
declare function BreakpointProvider({ breakpointMediaQuery, children }: BreakpointProviderProps): any;
declare function useDefaultBreakpoint(): BreakpointValue;
export { useDefaultBreakpoint, BreakpointProvider };
export default useBreakpoint;
