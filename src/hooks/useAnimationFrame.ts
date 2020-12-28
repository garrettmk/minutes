import React from 'react';

export function useAnimationFrame(callback: (timeDelta: number) => void, deps: any[] = []) {
  const requestRef = React.useRef(0);
  const previousTimeRef = React.useRef(performance.now());

  const animate = React.useCallback(() => {
    const now = performance.now();
    const timeDelta = now - previousTimeRef.current;
    callback(timeDelta);

    previousTimeRef.current = now;
    requestRef.current = requestAnimationFrame(animate);
    
    // I don't want to have to memoize the callback outside of this hook, which is
    // why it's not included in the dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  React.useEffect(() => {
    previousTimeRef.current = performance.now();
    const requestId = requestAnimationFrame(animate);
    requestRef.current = requestId;
    return () => cancelAnimationFrame(requestId);
  }, [animate]);
}