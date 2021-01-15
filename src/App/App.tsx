import React from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';
import CircularProgress from 'components/CircularProgress';
import DurationInput from 'components/DurationInput';
import Label from 'components/Label';
import Select from 'components/Select';
import { useTimer, useSoundEffect, useOptions } from 'hooks';
import Theme from '../Theme';

import TickTock from 'sounds/ticktock.wav';
import DingSound from 'sounds/ding2.wav';


const AppRoot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .hero {
    position: relative;
    width: 350px;
    height: 350px;

    .durationStack {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .buttonArea {
    padding: 32px;
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: auto;
    grid-gap: 16px;

    .buttonRow {
      display: grid;
      grid-template-rows: auto;
      grid-auto-columns: auto;
      grid-auto-flow: column;
      grid-gap: 16px;
    }
  }
`;


function App() {
  const timer = useTimer();
  const completionRatio = timer.state === 'stopped' ? 1 : (timer.currentTick || 0) / timer.ticks;
  const setDuration = (event: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(event.currentTarget.value);
    timer.setDuration(value);
    timer.setTicks(value * 60);
  };

  const [alarmSound, selectAlarmProps] = useOptions([
    { label: 'None', value: '' },
    { label: 'Ding Dong', value: DingSound },
    { label: 'Tick Tock', value: TickTock },
  ], DingSound);

  useSoundEffect(TickTock, () => timer.state === 'running', [timer.state]);
  useSoundEffect(DingSound, () => alarmSound && timer.state === 'finished', [timer.state]);

  return (
    <Theme>
      <AppRoot>
        <div className='hero'>
          <CircularProgress
            width={350}
            height={350}
            ratio={completionRatio}
          />
          <div className='durationStack'>
            <DurationInput
                readOnly={timer.state !== 'stopped'}
                value={timer.state === 'stopped' ? timer.duration : timer.remainingDuration}
                onChange={setDuration}
                css={`width: 180px;`}
              />
              <Label
                variant='body'
                color='secondary'
                css={`
                  margin-top: 8px;
                  position: relative;
                  left: 8px;
                  letter-spacing: 16px;
                `}
              >
                minutes
              </Label>
          </div>
        </div>
        <div className='buttonArea'>
          <Select data-test-id='select-alarm' {...selectAlarmProps}/>

          <div className='buttonRow'>
            {timer.state === 'stopped' ? (
              <Button data-test-id='start-button' onClick={timer.start}>
                Start
              </Button>
            ) : (
              <Button data-test-id='reset-button' onClick={timer.reset}>
                Reset
              </Button>
            )}

            {timer.state === 'running' && (
              <Button data-test-id='pause-button' onClick={timer.pause}>
                Pause
              </Button>
            )}

            {timer.state === 'paused' && (
              <Button data-test-id='resume-button' onClick={timer.resume}>
                Resume
              </Button>
            )}
          </div>
        </div>
      </AppRoot>
    </Theme>
  );
}

export default App;
