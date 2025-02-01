import type { Metadata } from 'next';

import Stack from '@mui/material/Stack';

import ZeroWidthSpace from './ZeroWidthSpace';
import WeverseLive from './WeverseLive';

export const metadata: Metadata = {
  title: 'etc.',
};

const Home = () => {
  return (
    <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
      <ZeroWidthSpace />
      <WeverseLive />
    </Stack>
  );
};

export default Home;
