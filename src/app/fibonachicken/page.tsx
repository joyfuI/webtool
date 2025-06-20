import type { Metadata } from 'next';
import { Suspense } from 'react';
import Box from '@mui/material/Box';

import Client from './Client';

export const metadata: Metadata = { title: '피보나치킨' };

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
