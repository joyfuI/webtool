import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Suspense } from 'react';

import Client from './Client';

export const metadata: Metadata = { title: '글자 수 세기' };

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
