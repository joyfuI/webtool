'use client';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';

import copyText from '@/utils/copyText';

const Client = () => {
  const handleClick = () => {
    copyText('\u200B');
  };

  return (
    <Box>
      <FormLabel component="legend" sx={{ mb: 1 }}>
        빈공백 복사 (\u200B)
      </FormLabel>
      <IconButton onClick={handleClick}>
        <ContentCopyIcon />
      </IconButton>
    </Box>
  );
};

export default Client;
