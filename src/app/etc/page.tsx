import Stack from '@mui/material/Stack';
import type { Metadata } from 'next';
import { Suspense } from 'react';

import MultiView from './MultiView';
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
        <MultiView />
      </Suspense>
    </Stack>
  );
};

export default Page;
