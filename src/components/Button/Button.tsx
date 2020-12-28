import styled from 'styled-components/macro';
import { typographyVariant } from '../../utilities';
import Color from 'color';

const Button = styled.button`
  background-color: transparent;
  color: ${ props => props.theme.palette.primary.main };
  border-width: 2px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${ props => Color(props.theme.palette.primary.main).fade(0.5).string() };
  border-radius: 4px;
  padding: 12px;
  text-transform: uppercase;
  ${typographyVariant('button')}

  :hover {
    background-color: ${ props => Color(props.theme.palette.primary.main).fade(0.9).string() };
    border-color: ${ props => props.theme.palette.primary.main };
  }

  :active {
    background-color: ${ props => Color('white').fade(0.9).string() };
  }

  transition: 100ms linear;
`;

export default Button;