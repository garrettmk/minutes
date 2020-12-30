import React from 'react';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import Theme from '../Theme';
import Focused from '../utilities/Focused';


type RenderParams = Parameters<typeof render>;

const customRender = (ui: RenderParams[0], options?: RenderParams[1]) => render(ui, { wrapper: Theme, ...options });



export * from '@testing-library/react';
export { 
  customRender as render,
  generateImage,
  Focused
}