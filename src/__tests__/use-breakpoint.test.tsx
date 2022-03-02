import { renderHook, act } from '@testing-library/react-hooks';
import useBreakpoint from '@/index';
import type { FC } from 'react';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

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

// describe('useBreakpoint', ()=>{
//   it('test useBreakpoint normally', async ()=>{
//     render(<App />)
//     fireEvent.click(screen.)
//   })
// })

// describe('useResponsive', () => {
//   const hook = renderHook(() =>
//     useBreakpoint({
//       xs: '(max-width: 575px)',
//       sm: '(min-width: 576px)',
//       md: '(min-width: 768px)',
//       lg: '(min-width: 992px)',
//       xl: '(min-width: 1200px)',
//       xxl: '(min-width: 1600px)',
//     }),
//   );

//   const dispatchMediaQueryListEvent = (media: string, matches: boolean = true) => {
//     act(() => {
//       const mediaQueryListEvent = new MediaQueryListEvent('change', { media, matches });
//       window.dispatchEvent(mediaQueryListEvent);
//     });
//   };

//   it('response to MediaQueryListEvent', () => {
//     // dispatchMediaQueryListEvent('(min-width: 1600px)');
//     expect(hook.result.current).toEqual({
//       xs: false,
//       sm: false,
//       md: false,
//       lg: false,
//       xl: false,
//       xxl: true,
//     });
//   });
// });
