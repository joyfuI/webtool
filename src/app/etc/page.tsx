import type { Metadata } from 'next';
import { Suspense } from 'react';
import Stack from '@mui/material/Stack';

import Uuid from './Uuid';
import WeverseLive from './WeverseLive';
import WeverseReplay from './WeverseReplay';
import ZeroWidthSpace from './ZeroWidthSpace';

export const metadata: Metadata = { title: 'etc.' };

const Page = () => {
  return (
    <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
      <Suspense>
        <ZeroWidthSpace />
        <Uuid />
        <WeverseLive />
        <WeverseReplay />
      </Suspense>
    </Stack>
  );
};

export default Page;
