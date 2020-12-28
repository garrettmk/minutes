import React from 'react';
import { createMachine, guard, interpret, invoke, reduce, Service, state, transition } from 'robot3';

export interface TimerContext {
  duration: number,
  ticks: number,
  currentTick?: number,
  remainingDuration?: number,
};

export type SetDurationEvent = {
  type: 'setDuration',
  duration: number
};

export type SetTicksEvent = {
  type: 'setTicks',
  ticks: number
};


////////////////////////////////////////////////////////////////


export const timerMachine = createMachine({
  stopped: state(
    transition('setDuration', 'stopped',
      guard(isValidDuration),
      reduce(setDuration),
    ),

    transition('setTicks', 'stopped',
      guard(isValidTicks),
      reduce(setTicks),
    ),

    transition('start', 'running',
      reduce(setCurrentTick),
      reduce(setRemainingDuration)
    ),
  ),

  running: invoke(waitForTick,
    transition('done', 'finished', 
      guard(isLastTick), 
      reduce(setCurrentTick),
      reduce(setRemainingDuration),
    ),

    transition('done', 'running', 
      reduce(setCurrentTick),
      reduce(setRemainingDuration),
    ),
    
    transition('error', 'finished'),

    transition('reset', 'stopped',
      reduce(resetContext)
    )
  ),

  finished: state(
    transition('reset', 'stopped',
      reduce(resetContext)
    )
  ),
}, createTimerContext);

export type TimerMachine = typeof timerMachine;


//////////////////////////////////////////////////////////////////


export function createTimerContext(initialValues: TimerContext) : TimerContext {
  return { 
    ...initialValues,
  };
}

export function resetContext(ctx: TimerContext) : TimerContext {
  return {
    duration: ctx.duration,
    ticks: ctx.ticks
  };
}

export function waitForTick({ duration, ticks }: TimerContext) {
  const durationInMs = duration * 60 * 1000;
  const tickDurationInMs = durationInMs / ticks;

  return new Promise((resolve) => setTimeout(resolve, tickDurationInMs));
}

export function setCurrentTick(context: TimerContext) : TimerContext {
  return {
    ...context,
    currentTick: context.currentTick === undefined 
      ? 0
      : context.currentTick + 1
  };
}

export function isLastTick({ ticks, currentTick = 0 }: TimerContext) {
  return (currentTick + 1) === ticks;
}

export function isValidDuration(ctx: TimerContext, event: SetDurationEvent) : boolean {
  const { duration } = event;
  return duration > 0 && duration < 1000;
}

export function setDuration(ctx: TimerContext, event: SetDurationEvent) : TimerContext {
  const { duration } = event;
  return { ...ctx, duration };
}

export function isValidTicks(ctx: TimerContext, event: SetTicksEvent) : boolean {
  const { ticks } = event;
  return ticks > 0;
}

export function setTicks(ctx: TimerContext, event: SetTicksEvent) : TimerContext {
  const { ticks } = event;
  return { ...ctx, ticks };
}

export function setRemainingDuration(ctx: TimerContext) : TimerContext {
  const { duration, ticks, currentTick = 0 } = ctx;
  const durationPerTick = duration / ticks;
  const remainingTicks = ticks - currentTick;

  return {
    ...ctx,
    remainingDuration: Math.ceil(remainingTicks * durationPerTick),
  };
}


//////////////////////////////////////////////////////////////////////


export function useTimer(initialValues?: Partial<TimerContext>) {
  const service = React.useMemo(() => {
    const initialContext: TimerContext = {
      duration: 5,
      ticks: 5 * 60,
      ...initialValues,
    };

    return interpret(timerMachine, onUpdate, initialContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const start = React.useCallback(() => service.send('start'), [service]);
  const reset = React.useCallback(() => service.send('reset'), [service]);
  const setDuration = React.useCallback((duration) => service.send({ type: 'setDuration', duration }), [service]);
  const setTicks = React.useCallback((ticks) => service.send({ type: 'setTicks', ticks }), [service]);

  const [timerState, setTimerState] = React.useState({
    state: service.machine.current,
    duration: service.context.duration,
    setDuration: setDuration,
    remainingDuration: service.context.remainingDuration,
    ticks: service.context.ticks,
    setTicks: setTicks,
    currentTick: service.context.currentTick,
    start,
    reset
  });

  function onUpdate(service: Service<TimerMachine>) {
    setTimerState({
      state: service.machine.current,
      duration: service.context.duration,
      setDuration: setDuration,
      remainingDuration: service.context.remainingDuration,
      ticks: service.context.ticks,
      setTicks: setTicks,
      currentTick: service.context.currentTick,
      start,
      reset
    });
  }

  return timerState;
}