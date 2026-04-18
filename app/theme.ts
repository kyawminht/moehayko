'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: '"Noto Serif Myanmar", "Myanmar Text", Georgia, serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.9,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '2rem 0',
        },
      },
    },
  },
});

export default theme;