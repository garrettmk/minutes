import { DefaultTheme } from 'styled-components/macro';

type PropsWithTheme = {
  theme: DefaultTheme;
}

export function typographyVariant(variant: keyof DefaultTheme['typography']) {
  return (props: PropsWithTheme) => {
    const { fontFamily, fontSize, lineHeight } = props.theme.typography[variant];

    return `
      font-family: ${fontFamily};
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `;
  }
}
