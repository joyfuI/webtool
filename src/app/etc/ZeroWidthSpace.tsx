'use client';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import copyText from '@/utils/copyText';

const Client = () => {
  return (
    <>
      <FormLabel component="legend" sx={{ mb: 1 }}>
        빈공백 복사 (\u200B)
      </FormLabel>
      <IconButton onClick={() => copyText('\u200B')}>
        <ContentCopyIcon />
      </IconButton>
    </>
  );
};

export default Client;
