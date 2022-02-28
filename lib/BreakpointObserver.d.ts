export declare type BreakpointMediaQuery = Record<string, string>;
export declare type BreakpointValue = Record<string, boolean>;
declare type OnBreakpointCallback = (map: BreakpointValue) => void;
declare type SubUID = number;
declare class BreakpointObserver {
    private subUid;
    private subscriber;
    subscribe(breakpointMediaQuery: BreakpointMediaQuery, callback: OnBreakpointCallback): number;
    private register;
    unsubscribe(subUid: SubUID): void;
    private unregister;
}
declare const _default: BreakpointObserver;
export default _default;
