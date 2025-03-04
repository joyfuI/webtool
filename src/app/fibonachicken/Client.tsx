'use client';
import { useQueryState, parseAsInteger } from 'nuqs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { fibonaChicken } from './logic';

const Client = () => {
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0),
  );

  return (
    <>
      <Typography variant="h5" gutterBottom>
        자애로운 자여, 몇 명이나 먹이려고 하는고?
      </Typography>
      <TextField
        value={Number.isNaN(count) ? '' : count}
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
          setCount(num);
        }}
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        그렇다면 {fibonaChicken(count)}마리를 시키거라
      </Typography>
      <Typography variant="h5">
        능히 {count || 0}명을 먹이는데 부족함이 없느니라.
      </Typography>
    </>
  );
};

export default Client;
