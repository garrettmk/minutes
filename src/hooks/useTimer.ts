import React from 'react';
import { useMachine } from 'react-robot';
import { createMachine, guard, invoke, reduce, state, transition } from 'robot3';


export interface TimerContext {
  duration: number,
  ticks: number,
  currentTick?: number,
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


const timerMachine = createMachine({
  stopped: state(
    transition('setDuration', 'stopped',
      reduce<TimerContext, SetDurationEvent>((ctx, event) => ({ ...ctx, duration: event.duration }))
    ),

    transition('setTicks', 'stopped',
      reduce<TimerContext, SetTicksEvent>((ctx, event) => ({ ...ctx, ticks: event.ticks })),
    ),

    transition('start', 'running',
      reduce(setCurrentTick)
    ),
  ),

  running: invoke(waitForTick,
    transition('done', 'finished', reduce(setCurrentTick), guard(isLastTick)),
    transition('done', 'running', reduce(setCurrentTick)),
    transition('error', 'finished')
  ),

  finished: state(
    transition('reset', 'stopped')
  ),
}, createTimerContext);


//////////////////////////////////////////////////////////////////


function createTimerContext({ duration = 5, ticks = 100 }: Partial<TimerContext>) : TimerContext {
  return {
    duration,
    ticks
  }
}

function waitForTick({ duration, ticks }: TimerContext) {
  const durationInMs = duration * 60 * 1000;
  const tickDurationInMs = durationInMs / ticks;

  return new Promise((resolve) => setTimeout(resolve, tickDurationInMs));
}

function setCurrentTick(context: TimerContext) : TimerContext {
  return {
    ...context,
    currentTick: context.currentTick === undefined 
      ? 0
      : context.currentTick + 1
  };
}

function isLastTick({ ticks, currentTick = 0 }: TimerContext) {
  return (currentTick + 1) === ticks;
}


//////////////////////////////////////////////////////////////////////


export function useTimer(initalValues?: Partial<TimerContext>) {
  const [state, send] = useMachine(timerMachine, { ...initalValues });
  const setDuration = React.useCallback(duration => send({ type: 'setDuration', duration }), [send]);
  const setTicks = React.useCallback(ticks => send({ type: 'setTicks', ticks }), [send]);
  const start = React.useCallback(() => send('start'), [send]);
  const reset = React.useCallback(() => send('reset'), [send]);

  return {
    state: state.name,
    duration: state.context.duration,
    setDuration,
    ticks: state.context.ticks,
    setTicks,
    currentTick: state.context.currentTick,
    start,
    reset
  };
}