import React from 'react';
import Theme from '../src/Theme';
import styled from 'styled-components/macro';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  Story => (
    <Theme>
      <Story/>
    </Theme>
  ),
];