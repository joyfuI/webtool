'use client';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { charCount, lineCount } from './logic';

const Client = () => {
  const [value, setValue] = useState('');

  const handleValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Grid columnSpacing={4} container>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6">
            공백 포함: <b>{charCount(value)}</b> 자 (
            <b>{charCount(value, { byte: true })}</b> byte)
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6">
            공백 제외: <b>{charCount(value, { whiteSpace: false })}</b> 자 (
            <b>{charCount(value, { whiteSpace: false, byte: true })}</b> byte)
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6">
            줄 수: <b>{lineCount(value)}</b> 줄
          </Typography>
        </Grid>
      </Grid>

      <TextField
        autoFocus
        fullWidth
        minRows={15}
        multiline
        onChange={handleValueChange}
        value={value}
      />
    </>
  );
};

export default Client;
