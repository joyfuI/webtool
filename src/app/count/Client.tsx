'use client';
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { charCount, lineCount } from './logic';

const Client = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Grid container columnSpacing={4}>
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
        value={value}
        minRows={15}
        multiline
        fullWidth
        autoFocus
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default Client;
