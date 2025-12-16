import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Suspense } from 'react';

import Client from './Client';

export const metadata: Metadata = { title: '나이 계산기' };

const Page = () => {
  return (
    <Box autoComplete="off" component="form" noValidate>
      <Suspense>
        <Client />
      </Suspense>
    </Box>
  );
};

export default Page;
