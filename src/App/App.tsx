import React from 'react';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import CircularProgress from '../components/CircularProgress';
import DurationInput from '../components/DurationInput';
import Label from '../components/Label';
import { useTimer } from '../hooks';
import Theme from '../Theme';



function App() {
  const timer = useTimer();
  const completionRatio = timer.state === 'stopped' ? 1 : (timer.currentTick || 0) / timer.ticks;
  const setDuration = (event: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(event.currentTarget.value);
    timer.setDuration(value);
    timer.setTicks(value * 60);
  };
  
  return (
    <Theme>
      <div css={`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}>
        <div css={`
          position: relative;
          width: 350px;
          height: 350px;
        `}>
          <CircularProgress
            width={350}
            height={350}
            ratio={completionRatio}
          />
          <div
            css={`
              display: flex;
              flex-direction: column;
              align-items: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
          >
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
        <div css={`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 24px;
        `}>
          {timer.state === 'stopped' ? (
            <Button onClick={timer.start}>
              Start
            </Button>
          ) : (
            <Button onClick={timer.reset}>
              Reset
            </Button>
          )}
        </div>
      </div>
    </Theme>
  );
}

export default App;
