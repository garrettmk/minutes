import { act, renderHook, cleanup } from '@testing-library/react-hooks';
import { useAnimationFrame } from './useAnimationFrame';
import FakeTimers from '@sinonjs/fake-timers';

type UseAnimationFrameProps = Parameters<typeof useAnimationFrame>;

let clock: FakeTimers.Clock;

beforeEach(() => {
  clock = FakeTimers.createClock();
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(clock.requestAnimationFrame as typeof window.requestAnimationFrame);
  jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(clock.cancelAnimationFrame as typeof window.cancelAnimationFrame);
});

afterEach(() => {
  (window.requestAnimationFrame as any).mockRestore();
  cleanup();
});


it('should call callback on each animation frame', () => {
  const callback = jest.fn();
  const { result } = renderHook((deps: any[]) => useAnimationFrame(callback, deps), { initialProps: [0] });
  act(() => { clock.runToFrame(); });

  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback.mock.calls[0][0]).toBeGreaterThan(0);

  act(() => { clock.runToFrame(); });

  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback.mock.calls[0][0]).toBeGreaterThan(0);
});

it('should re-register callback only if deps change', () => {
  const callback1 = jest.fn();
  const callback2 = jest.fn();

  // First render, use callback1
  const { rerender } = renderHook((args: UseAnimationFrameProps) => useAnimationFrame(...args), { initialProps: [callback1, [1]] });
  
  // Advance a frame, make sure callback is called
  act(() => { clock.runToFrame(); });

  expect(callback1).toHaveBeenCalledTimes(1);
  expect(callback1.mock.calls[0][0]).toBeGreaterThan(0);

  callback1.mockClear();
  callback2.mockClear();

  // Rerender with a new callback, but same dependencies
  rerender([callback2, [1]]);

  // Advance a frame, check that the first callback is still being used
  act(() => { clock.runToFrame(); });

  expect(callback1).toHaveBeenCalledTimes(1);
  expect(callback1.mock.calls[0][0]).toBeGreaterThan(0);
  expect(callback2).not.toHaveBeenCalled();

  callback1.mockClear();
  callback2.mockClear();

  // Rerender with new dependencies
  expect(callback1).not.toHaveBeenCalled();

  rerender([callback2, [2]]);

  // Advance a frame, check that new callback is used
  act(() => { clock.runToFrame(); });

  // expect(callback1).not.toHaveBeenCalled();
  expect(callback2).toHaveBeenCalledTimes(1);
  expect(callback2.mock.calls[0][0]).toBeGreaterThan(0);
});

it('should cancel the callback if the component is unmounted', async () => { 
  const callback = jest.fn();
  const { unmount, waitForNextUpdate } = renderHook(() => useAnimationFrame(callback));
  const requestId = (requestAnimationFrame as jest.Mock).mock.results[0].value;

  act(() => { clock.runToFrame() });
  expect(callback).toHaveBeenCalledTimes(1);
  callback.mockClear();

  act(() => {
    unmount();
    clock.runToFrame();
  });

  expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
  expect(cancelAnimationFrame).toHaveBeenCalledWith(requestId);
  // expect(callback).not.toHaveBeenCalled();
});