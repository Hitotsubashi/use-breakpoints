import type { FC } from 'react';
import useBreakpoint from '@/index';

const App: FC = () => {
  const breakpoints = useBreakpoint({
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
  });

  return (
    <div>
      {breakpoints.xs && <div role="xs" />}
      {breakpoints.sm && <div role="sm" />}
      {breakpoints.md && <div role="md" />}
      {breakpoints.lg && <div role="lg" />}
      {breakpoints.xl && <div role="xl" />}
      {breakpoints.xxl && <div role="xxl" />}
    </div>
  );
};

export default App;
