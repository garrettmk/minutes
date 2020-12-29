import React from 'react';
import { generateImage, render } from 'test-utils';
import { Active, Default, Hovered } from './Button.stories';


it('matches the Default snapshot', async () => {
  render(<Default {...Default.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});


it('matches the Hovered snapshot', async () => {
  render(<Hovered {...Hovered.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});


it('matches the Active snapshot', async () => {
  render(<Active {...Active.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});