'use client';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { fibonaChicken } from './logic';

const Client = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        자애로운 자여, 몇 명이나 먹이려고 하는고?
      </Typography>
      <TextField
        value={Number.isNaN(number) ? '' : number}
        label="인원수"
        type="number"
        slotProps={{
          htmlInput: { min: 0, inputMode: 'numeric' },
          inputLabel: { shrink: true },
        }}
        fullWidth
        autoFocus
        onChange={(e) => {
          const num = parseInt(e.target.value);
          setNumber(num);
        }}
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        그렇다면 {fibonaChicken(number)}마리를 시키거라
      </Typography>
      <Typography variant="h5">
        능히 {number || 0}명을 먹이는데 부족함이 없느니라.
      </Typography>
    </>
  );
};

export default Client;
