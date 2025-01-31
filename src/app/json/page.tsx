import type { Metadata } from 'next';

import Box from '@mui/material/Box';

import Client from './Client';

export const metadata: Metadata = {
  title: 'JSON 포매터',
};

const Home = () => {
  return (
    <Box component="form" autoComplete="off" noValidate>
      <Client />
    </Box>
  );
};

export default Home;
