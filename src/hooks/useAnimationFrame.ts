import React from 'react';

export function useAnimationFrame(callback: (timeDelta: number) => any, deps: any[] = []) {
  const requestRef = React.useRef(0);
  const previousTimeRef = React.useRef(performance.now());

  const animate = React.useCallback(() => {
    const now = performance.now();
    const timeDelta = now - previousTimeRef.current;
    const scheduleAgain = callback(timeDelta);

    if (scheduleAgain) {
      previousTimeRef.current = now;
      requestRef.current = requestAnimationFrame(animate);
    }
    
    // I don't want to have to memoize the callback outside of this hook, which is
    // why it's not included in the dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  React.useEffect(() => {
    if (requestRef.current)
      cancelAnimationFrame(requestRef.current);

    previousTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(animate);

    return () => { requestRef.current && cancelAnimationFrame(requestRef.current) };
  }, [animate]);
}