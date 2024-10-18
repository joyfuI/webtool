import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '@/components/Header';

import theme from '../theme';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | 웹툴',
    default: '웹툴',
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <InitColorSchemeScript attribute="class" />
            <CssBaseline />
            <Header />
            <Container component="main" sx={{ py: 2 }}>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
