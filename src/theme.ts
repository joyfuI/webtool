'use client';
import type {} from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: { colorSchemeSelector: 'class' },
  typography: {
    fontFamily:
      '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { flexShrink: 0, textTransform: 'none' } },
    },
    MuiLink: { styleOverrides: { button: { verticalAlign: 'baseline' } } },
    MuiStack: { defaultProps: { useFlexGap: true } },
    MuiTabPanel: { styleOverrides: { root: { padding: 0 } } },
    MuiTextField: { styleOverrides: { root: { margin: '8px 0' } } },
  },
});

export default theme;
