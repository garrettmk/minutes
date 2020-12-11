import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components/macro';


export type MinutesTheme = {
  typography: {
    
    body: { 
      fontFamily: string,
      fontSize: string,
      lineHeight: number,
    },
  },

  palette: {
    background: string,
    
    primary: {
      main: string,
    },

    text: {
      primary: string,
      secondary: string,
    }
  }
};

export const theme: MinutesTheme = {
  typography: {
    body: { 
      fontFamily: `'Roboto', sans-serif`,
      fontSize: '1rem',
      lineHeight: 1,
    }
  },
  palette: {
    background: '#242625',
    primary: {
      main: '#51CF7B'
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)'
    }
  }
};

const GlobalStyles = createGlobalStyle<{ theme: MinutesTheme }>`
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