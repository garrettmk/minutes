import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components/macro';
import { theme } from './theme';


const GlobalStyles = createGlobalStyle`
  body { 
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0;
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;


export default function Theme({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {children}
    </ThemeProvider>
  );
}