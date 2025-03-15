'use client';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';

import copyText from '@/utils/copyText';

const Client = () => {
  return (
    <Box>
      <FormLabel component="legend" sx={{ mb: 1 }}>
        빈공백 복사 (\u200B)
      </FormLabel>
      <IconButton onClick={() => copyText('\u200B')}>
        <ContentCopyIcon />
      </IconButton>
    </Box>
  );
};

export default Client;
