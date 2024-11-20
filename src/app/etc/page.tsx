import type { Metadata } from 'next';

import Box from '@mui/material/Box';

import ZeroWidthSpace from './ZeroWidthSpace';

export const metadata: Metadata = {
  title: 'etc.',
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
      <ZeroWidthSpace />
    </Box>
  );
};

export default Home;
