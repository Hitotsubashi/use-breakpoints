import React,{ createContext, useContext, useEffect, useState } from 'react';
import type { BreakpointMediaQuery, BreakpointValue } from './BreakpointObserver';
import BreakpointObserver from './BreakpointObserver';

function useBreakpoint(breakpointMediaQuery: BreakpointMediaQuery): BreakpointValue {
  const [breakpointMap, setBreakpointMap] = useState<BreakpointValue>({});

  useEffect(() => {
    const token = BreakpointObserver.subscribe(breakpointMediaQuery, (value) => {
      setBreakpointMap(value);
    });

    return () => BreakpointObserver.unsubscribe(token);
  }, [breakpointMediaQuery]);

  return breakpointMap;
}

const DEFAULT_BREAKPOINT_MEDIA_QUERY = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

const BreakpointContext = createContext<BreakpointMediaQuery>(null!);

interface BreakpointProviderProps {
  breakpointMediaQuery?: BreakpointMediaQuery;
  children?: React.ReactNode;
}
function BreakpointProvider({ breakpointMediaQuery, children }: BreakpointProviderProps) {
  return (
    <BreakpointContext.Provider value={breakpointMediaQuery || DEFAULT_BREAKPOINT_MEDIA_QUERY}>
      {children}
    </BreakpointContext.Provider>
  );
}

function useDefaultBreakpoint() {
  const breakpointMediaQuery = useContext(BreakpointContext);
  if (breakpointMediaQuery === null) {
    throw new Error(
      'useDefaultBreakpoint may be used only in the context of a <BreakpointProvider> component.',
    );
  }
  return useBreakpoint(breakpointMediaQuery);
}

export { useDefaultBreakpoint, BreakpointProvider };

export default useBreakpoint;
