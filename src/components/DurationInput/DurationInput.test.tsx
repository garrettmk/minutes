import React from 'react';
import { generateImage, render } from 'utilities/testing';
import { Editable, EditableFocused, ReadOnly, ReadOnlyFocused } from './DurationInput.stories';


it('matches the Editable snapshot', async () => {
  render(<Editable {...Editable.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});


it('matches the EditableFocused snapshot', async () => {
  render(<EditableFocused {...EditableFocused.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});


it('matches the ReadOnly snapshot', async () => {
  render(<ReadOnly {...ReadOnly.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});


it('matches the ReadOnlyFocused snapshot', async () => {
  render(<ReadOnlyFocused {...ReadOnlyFocused.args}/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});