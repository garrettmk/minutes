import React from 'react';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components/macro';

// Note: DefaultTheme is extended as per the following: https://styled-components.com/docs/api#create-a-declarations-file

export const theme: DefaultTheme = {
  typography: {
    body: { 
      fontFamily: `'Roboto', sans-serif`,
      fontSize: '1rem',
      lineHeight: 1,
    }
  },
  palette: {
    background: '#242625',
    overlay: 'rgba(0, 0, 0, .25)',

    primary: {
      main: '#51CF7B'
    },
    
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)'
    }
  }
};

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


export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {children}
    </ThemeProvider>
  );
}