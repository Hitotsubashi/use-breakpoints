export type BreakpointMediaQuery = Record<string, string>;
export type BreakpointValue = Record<string, boolean>;
type OnBreakpointCallback = (map: BreakpointValue) => void;
type SubUID = number;
type MediaQueryListListener = (params: { matches: boolean }) => void;
type RegisterList = { mql: MediaQueryList; listener: MediaQueryListListener }[];

class BreakpointObserver {
  private subUid = 1;
  private subscriber = new Map<SubUID, RegisterList>();

  public subscribe(
    breakpointMediaQuery: BreakpointMediaQuery,
    callback: OnBreakpointCallback,
  ): number {
    this.subUid += 1;
    this.subscriber.set(this.subUid, this.register(breakpointMediaQuery, callback));
    return this.subUid;
  }

  private register(breakpointMediaQuery: BreakpointMediaQuery, callback: OnBreakpointCallback) {
    let breakpointValue: BreakpointValue = {};
    return Object.entries(breakpointMediaQuery).map(([key, mediaQuery]) => {
      const listener: MediaQueryListListener = ({ matches }) => {
        breakpointValue = {
          ...breakpointValue,
          [key]: matches,
        };
        callback(breakpointValue);
      };
      const mql = window.matchMedia(mediaQuery);
      mql.addListener(listener);
      listener(mql);
      return { listener, mql };
    });
  }

  public unsubscribe(subUid: SubUID) {
    this.unregister(subUid);
    this.subscriber.delete(subUid);
  }

  private unregister(subUid: SubUID) {
    const registerList = this.subscriber.get(subUid);
    registerList?.forEach(({ mql, listener }) => {
      mql.removeListener(listener);
    });
  }
}

export default new BreakpointObserver();
