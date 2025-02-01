import type { Metadata } from 'next';

import Stack from '@mui/material/Stack';

import ZeroWidthSpace from './ZeroWidthSpace';
import WeverseLive from './WeverseLive';
import WeverseReplay from './WeverseReplay';

export const metadata: Metadata = {
  title: 'etc.',
};

const Home = () => {
  return (
    <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
      <ZeroWidthSpace />
      <WeverseLive />
      <WeverseReplay />
    </Stack>
  );
};

export default Home;
