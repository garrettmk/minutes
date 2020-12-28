import React from 'react';
import styled from 'styled-components/macro';

export type LabelProps = {
  variant: 'hero' | 'body',
  color: 'primary' | 'secondary',
}

const Label = styled.span<LabelProps>`
  font-family: ${ props => props.theme.typography[props.variant].fontFamily};
  font-size: ${ props => props.theme.typography[props.variant].fontSize};
  line-height: ${ props => props.theme.typography[props.variant].lineHeight};
  color: ${ props => props.theme.palette.text[props.color]};
`;

Label.defaultProps = {
  variant: 'body',
  color: 'primary',
};

export default Label;