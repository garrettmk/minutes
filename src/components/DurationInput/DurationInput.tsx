import React from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';
import { typographyVariant } from '../../utilities';


const DurationInput = styled.input.attrs(props => ({
  type: 'number',
  min: 0,
  step: 1,
}))`
  ${typographyVariant('hero')}
  background-color: ${ props => props.theme.palette.overlay };
  color: ${ props => props.theme.palette.text.primary };
  caret-color: transparent;
  border-style: dotted;
  border-color: transparent;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  transition: ${ props => props.theme.transitions.quick };

  :read-only {
    background-color: transparent;
  }

  :focus:not(:read-only) {
    border-bottom-color: ${ props => props.theme.palette.primary.main };
  }

  -moz-appearance: textfield !important;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export default DurationInput;