import { act, renderHook } from '@testing-library/react-hooks';
import { useSoundEffect, UseSoundEffectProps } from './useSoundEffect';

let mockHtmlAudioElement: any;

beforeEach(() => { 
  jest
    .spyOn(global, 'Audio')
    .mockImplementation(() => {
      mockHtmlAudioElement = {
        play: jest.fn(),
      };

      return mockHtmlAudioElement as unknown as HTMLAudioElement;
    });
});


afterEach(() => {
  (global.Audio as jest.Mock).mockRestore();
});


it('should call the Audio constructor with the given URL', async () => {
  const soundUrl = 'this is a test';
  const { result } = renderHook(() => useSoundEffect(soundUrl));
  expect(global.Audio).toHaveBeenCalledWith(soundUrl);
});


it('should create a new HTMLAudioElement if the source URL changes', async () => {
  const { result, rerender, waitForNextUpdate } = renderHook((props: UseSoundEffectProps) => useSoundEffect(...props), { initialProps: ['url0'] });
  expect(global.Audio).toHaveBeenCalledWith('url0');
  const initialPlay = mockHtmlAudioElement.play;

  const nextUpdate = waitForNextUpdate();
  rerender(['url1']);
  await nextUpdate;

  expect(global.Audio).toHaveBeenCalledWith('url1');
  const secondPlay = mockHtmlAudioElement.play;

  initialPlay();
  expect(secondPlay).not.toHaveBeenCalled();
  initialPlay.mockClear();

  secondPlay();
  expect(initialPlay).not.toHaveBeenCalled();
});


it('should return a method to play() the HTMLAudioElement', () => {
  const soundUrl = 'this is a test';
  const { result } = renderHook(() => useSoundEffect(soundUrl));
  const play = result.current;
  expect(mockHtmlAudioElement.play).not.toHaveBeenCalled();

  play();

  expect(mockHtmlAudioElement.play).toHaveBeenCalled();
});


it('should call the play() method automatically if the trigger function returns true', async () => {
  const soundUrl = 'this is a sound url';
  const { result } = renderHook(() => useSoundEffect(soundUrl, () => true));
  expect(mockHtmlAudioElement.play).toHaveBeenCalled();
});


it('should NOT call the play() method if the trigger function returns false', async () => {
  const soundUrl = 'this is a sound url';
  const { result } = renderHook(() => useSoundEffect(soundUrl, () => false));
  expect(mockHtmlAudioElement.play).not.toHaveBeenCalled();
});


it('should only call the play method once if no dependencies are provided', async () => {
  const soundUrl = 'this is a test';
  const { result, rerender, waitForNextUpdate } = renderHook(() => useSoundEffect(soundUrl, () => true));
  
  for (let i = 0; i < 10; i++) {
    expect(mockHtmlAudioElement.play).toHaveBeenCalledTimes(1);
    const nextUpdate = waitForNextUpdate();
    rerender();
    await nextUpdate;
  }
});


it('should reevaluate the trigger if any dependencies change', async () => {
  const soundUrl = 'this is a test';
  const iteration = [
    { props: [soundUrl, () => false, [0]] as UseSoundEffectProps, shouldPlay: false },
    { props: [soundUrl, () => true, [1]] as UseSoundEffectProps, shouldPlay: true },
    { props: [soundUrl, () => true, [1]] as UseSoundEffectProps, shouldPlay: false },
    { props: [soundUrl, () => false, [2]] as UseSoundEffectProps, shouldPlay: false },
    { props: [soundUrl, () => true, [3]] as UseSoundEffectProps, shouldPlay: true },
  ]

  let expectedPlayCount = iteration[0].shouldPlay ? 1 : 0;
  const { result, rerender, waitForNextUpdate } = renderHook((props: UseSoundEffectProps) => useSoundEffect(...props), { initialProps: iteration[0].props });
  expect(mockHtmlAudioElement.play.mock.calls.length).toBe(expectedPlayCount);

  for (let i = 1; i < iteration.length; i++) {
    const { props, shouldPlay } = iteration[i];

    if (shouldPlay)
      expectedPlayCount = expectedPlayCount + 1;

    const nextUpdate = waitForNextUpdate();
    rerender(props);
    await nextUpdate;
    
    expect(mockHtmlAudioElement.play.mock.calls.length).toBe(expectedPlayCount);
  }
});
