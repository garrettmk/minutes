import React from 'react';
import styled from 'styled-components/macro';
import { typographyVariant } from '../../utilities/theme';
import Color from 'color';


const SelectWrapper = styled.div`
  display: inline-grid;
  grid-template-areas: "select";
  align-items: center;

  color: ${ props => props.theme.palette.primary.main };
  border-color: ${ props => Color(props.theme.palette.primary.main).fade(0.5).string() };
  border-width: 2px;
  border-radius: 4px;
  border-style: solid;
  border-radius: 4px;
  ${typographyVariant('button')}

  ::after {
    grid-area: select;
    justify-self: end;
    content: "";
    width: 0.8em;
    height: 0.5em;
    margin-right: 12px;
    background-color: ${ props => Color(props.theme.palette.primary.main).fade(0.5).string() };
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    transition: 100ms linear;
  }

  :hover, &.__hover {
    background-color: ${ props => Color(props.theme.palette.primary.main).fade(0.9).string() };
    border-color: ${ props => props.theme.palette.primary.main };
    
    ::after {
      background-color: ${ props => Color(props.theme.palette.primary.main).string() };
    }
  }

  :active, &.__active {
    background-color: ${ props => Color('white').fade(0.9).string() };
  }

  transition: 100ms linear;
`;

const SelectInner = styled.select`
  grid-area: select;
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: inherit;
  margin: 0;
  padding: 12px;
  padding-right: calc(12px * 2 + 0.8em);
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.1;
`;

export type SelectProps = {
  [key: string]: any,
  children: JSX.Element[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <SelectWrapper>
    <SelectInner ref={ref} {...props}/>
  </SelectWrapper>
));


export default Select;