import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
    
      body: { 
        fontFamily: string,
        fontSize: string,
        lineHeight: number,
      },
    },
  
    palette: {
      background: string,
      overlay: string,
      
      primary: {
        main: string,
      },
  
      text: {
        primary: string,
        secondary: string,
      }
    }
  }
}