import type { Metadata } from 'next';

import Box from '@mui/material/Box';

import Client from './Client';

export const metadata: Metadata = {
  title: '나이 계산기',
};

const Home = () => {
  return (
    <Box component="form" autoComplete="off" noValidate>
      <Client />
    </Box>
  );
};

export default Home;
