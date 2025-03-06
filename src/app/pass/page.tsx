import type { Metadata } from 'next';
import { Suspense } from 'react';

import Box from '@mui/material/Box';

import Client from './Client';

export const metadata: Metadata = {
  title: '지하철 정기권 계산기',
};

const Page = () => {
  return (
    <Box component="form" autoComplete="off" noValidate>
      <Suspense>
        <Client />
      </Suspense>
    </Box>
  );
};

export default Page;
