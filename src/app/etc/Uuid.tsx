'use client';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

import copyText from '@/utils/copyText';

const Client = () => {
  const [uuid, setUuid] = useState(() => crypto.randomUUID());

  const handleCopyClick = () => {
    copyText(uuid);
  };

  const handleRefreshClick = () => {
    setUuid(crypto.randomUUID());
  };

  return (
    <Box sx={{ width: '450px', minWidth: '200px', maxWidth: '100%' }}>
      <FormLabel component="legend" sx={{ mb: 1 }}>
        UUID v4 생성
      </FormLabel>
      <OutlinedInput
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleCopyClick}>
              <ContentCopyIcon />
            </IconButton>
            <IconButton onClick={handleRefreshClick}>
              <RefreshIcon />
            </IconButton>
          </InputAdornment>
        }
        fullWidth
        readOnly
        value={uuid}
      />
    </Box>
  );
};

export default Client;
