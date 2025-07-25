import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import Header from '@/components/Header';

import theme from '../theme';

import './globals.css';

export const metadata: Metadata = {
  title: { template: '%s | 웹툴', default: '웹툴' },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <NuqsAdapter>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <InitColorSchemeScript attribute="class" />
              <CssBaseline />
              <Header />
              <Container component="main" sx={{ pt: 2, pb: 4 }}>
                {children}
              </Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
};

export default RootLayout;
