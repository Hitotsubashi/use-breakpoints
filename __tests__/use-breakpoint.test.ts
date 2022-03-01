import { renderHook, act } from '@testing-library/react-hooks';
import useBreakpoint from '@/index';

describe('useResponsive', () => {
  const hook = renderHook(() =>
    useBreakpoint({
      xs: '(max-width: 575px)',
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      xxl: '(min-width: 1600px)',
    }),
  );

  const dispatchMediaQueryListEvent = (media: string, matches: boolean = true) => {
    act(() => {
      console.log(MouseEvent);
      const mediaQueryListEvent = new MediaQueryListEvent('change', { media, matches });
      window.dispatchEvent(mediaQueryListEvent);
    });
  };

  it('response to MediaQueryListEvent', () => {
    dispatchMediaQueryListEvent('(min-width: 1600px)');
    expect(hook.result.current).toEqual({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: true,
    });
  });
});
