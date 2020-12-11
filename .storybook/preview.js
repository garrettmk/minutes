import React from 'react';
import Theme from '../src/Theme';
import styled from 'styled-components/macro';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  Story => (
    <div css={`display: inline-block; border: 1px dotted ${({ theme }) => theme.palette.text.secondary};`}>
      <Story/>
    </div>
  ),

  Story => (
    <Theme>
      <Story/>
    </Theme>
  ),
];