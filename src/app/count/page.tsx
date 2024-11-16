import type { Metadata } from 'next';

import Box from '@mui/material/Box';

import Client from './Client';

export const metadata: Metadata = {
  title: '글자 수 세기',
};

const Home = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      sx={{
        '& .MuiTextField-root': { my: 1 },
      }}
    >
      <Client />
    </Box>
  );
};

export default Home;
