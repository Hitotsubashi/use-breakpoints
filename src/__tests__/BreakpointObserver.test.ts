import BreakpointObserver from '../BreakpointObserver';

describe('Test BreakpointObserver', () => {
  it('test BreakpointObserver subscribe', () => {
    const subscribeFunc = jest.fn();
    BreakpointObserver.subscribe({ xxl: '(min-width: 1600px)' }, subscribeFunc);
    expect(subscribeFunc).toBeCalledTimes(1);
  });
});
