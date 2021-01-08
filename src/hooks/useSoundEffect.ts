import React from 'react';


export type UseSoundEffectProps = Parameters<typeof useSoundEffect>;

export function useSoundEffect(url: string, trigger?: () => any, deps?: any[]) {
  const audio = React.useMemo(() => new Audio(url), [url]);
  const play = React.useCallback(() => audio.play(), [audio]);

  React.useEffect(() => {
    if (trigger && trigger())
      play();

    // We don't want the caller to have to memoize trigger, so exclude it from the dependency list
    // and let them specify dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, ...(deps || [])]);

  return play;
}