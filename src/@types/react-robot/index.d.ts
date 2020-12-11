/// <reference types="node"/>

declare module 'react-robot' {
  import { Machine, MachineState, SendFunction, Service } from 'robot3';

  export function useMachine(machine: Machine, initialContext: any) : [{ name: string, context: any }, SendFunction, Service];
}