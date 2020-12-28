import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useTimer } from './useTimer';


beforeEach(() => {
  jest.useFakeTimers();
});


afterEach(() => {
  jest.clearAllTimers();
  cleanup();
});


function renderUseTimerForTesting() {
  const { result } = renderHook(() => useTimer());
  
  const start = () => result.current.start();
  const reset = () => result.current.reset();
  const state = () => result.current.state;
  const duration = () => result.current.duration;
  const setDuration = (duration: number) => result.current.setDuration(duration);
  const ticks = () => result.current.ticks;
  const setTicks = (ticks: number) => result.current.setTicks(ticks);
  const currentTick = () => result.current.currentTick;
  const durationInMs = () => result.current.duration * 60 * 1000;
  const tickDurationInMs = () => result.current.duration * 60 * 1000 / result.current.ticks;

  const advanceByTicks = async (t: number) => {
    const initialTick = currentTick() || 0;

    for (let i = 0; i < t; i++) {
      expect(currentTick()).toEqual(initialTick + i);
  
      await act(async () => {
        jest.advanceTimersByTime(tickDurationInMs() - 1);
        await Promise.resolve();
      });

      expect(currentTick()).toEqual(initialTick + i);

      await act(async () => {
        jest.advanceTimersByTime(1);
        await Promise.resolve();
      });
    }
  }

  return {
    result,
    start,
    reset,
    state,
    duration,
    setDuration,
    ticks,
    setTicks,
    currentTick,
    durationInMs,
    tickDurationInMs,
    advanceByTicks,
  };
}


it('should start in the "stopped" state', () => {
  const { state } = renderUseTimerForTesting();
  expect(state()).toBe('stopped');
});


it('should start with some default values', () => {
  const { duration, ticks } = renderUseTimerForTesting();
  expect(duration()).toBeGreaterThanOrEqual(1);
  expect(ticks()).toBeGreaterThanOrEqual(1);  
});


it('should be able to specify initial values', () => {
  const { result: defaultResult } = renderHook(() => useTimer());
  const { duration: defaultDuration, ticks: defaultTicks } = defaultResult.current;

  const expectedDuration = defaultDuration + 5;
  const expectedTicks = defaultTicks + 5;

  const { result } = renderHook(() => useTimer({
    duration: expectedDuration,
    ticks: expectedTicks,
  }));

  const { duration, ticks } = result.current;

  expect(duration).toEqual(expectedDuration);
  expect(ticks).toEqual(expectedTicks);
});


it('should be able to change duration while stopped', () => {
  const { duration, setDuration } = renderUseTimerForTesting();
  const expectedDuration = duration() + 5;

  act(() => setDuration(expectedDuration));

  expect(duration()).toEqual(expectedDuration);
});


it('should be able to change ticks while stopped', () => {
  const { ticks, setTicks } = renderUseTimerForTesting();
  const expectedTicks = ticks() + 5;

  act(() => setTicks(expectedTicks));

  expect(ticks()).toEqual(expectedTicks);
});


it('currentTick should be undefined while stopped', () => {
  const { state, currentTick } = renderUseTimerForTesting();
  expect(state()).toBe('stopped');

  expect(currentTick()).toBeUndefined();
});


it('should enter the "running" state after calling start()', async () => {
  const { state, start } = renderUseTimerForTesting();
  expect(state()).toBe('stopped');

  act(() => start());
  expect(state()).toBe('running');
});


it('should set currentTick to zero after starting', () => {
  const { start, currentTick } = renderUseTimerForTesting();
  expect(currentTick()).toBe(undefined);

  act(() => start());
  expect(currentTick()).toBe(0);
});


it('should update currentTick after each interval', async () => {
  const { start, ticks, currentTick, advanceByTicks } = renderUseTimerForTesting();
  act(() => start());
  expect(currentTick()).toEqual(0);

  await advanceByTicks(ticks());
  expect(currentTick()).toEqual(ticks());
});


it('should enter the "finished" state after completing all ticks', async () => {
  const { state, start, ticks, currentTick, advanceByTicks } = renderUseTimerForTesting();
  act(() => start());
  await advanceByTicks(ticks() - 1);
  expect(state()).toBe('running');

  await advanceByTicks(1);
  expect(state()).toBe('finished');
  expect(currentTick()).toEqual(ticks());
});


it('while in the "finished" state, should return to the "stopped" state if reset() is called', async () => {
  const { state, start, ticks, currentTick, advanceByTicks, reset } = renderUseTimerForTesting();
  act(() => start());
  await advanceByTicks(ticks());
  expect(state()).toBe('finished');

  act(() => reset());
  expect(state()).toBe('stopped');
  expect(currentTick()).toBe(undefined);
});