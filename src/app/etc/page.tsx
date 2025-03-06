import type { Metadata } from 'next';
import { Suspense } from 'react';

import Stack from '@mui/material/Stack';

import ZeroWidthSpace from './ZeroWidthSpace';
import WeverseLive from './WeverseLive';
import WeverseReplay from './WeverseReplay';

export const metadata: Metadata = {
  title: 'etc.',
};

const Page = () => {
  return (
    <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
      <Suspense>
        <ZeroWidthSpace />
        <WeverseLive />
        <WeverseReplay />
      </Suspense>
    </Stack>
  );
};

export default Page;
