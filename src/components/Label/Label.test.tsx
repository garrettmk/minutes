import React from 'react';
import { generateImage, render } from 'utilities/testing';
import { Hero, Body } from './Label.stories';


it('matches the Hero snapshot', async () => {
  render(<Hero {...Hero.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});


it('matches the Body snapshot', async () => {
  render(<Body {...Body.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});
