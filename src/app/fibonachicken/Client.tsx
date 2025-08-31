'use client';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { parseAsInteger, useQueryState } from 'nuqs';

import { fibonaChicken } from './logic';

const Client = () => {
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0),
  );

  return (
    <>
      <Typography gutterBottom variant="h5">
        자애로운 자여, 몇 명이나 먹이려고 하는고?
      </Typography>
      <TextField
        autoFocus
        fullWidth
        label="인원수"
        onChange={(e) => {
          const num = Number.parseInt(e.target.value, 10);
          setCount(num);
        }}
        slotProps={{
          htmlInput: { min: 0, inputMode: 'numeric' },
          inputLabel: { shrink: true },
        }}
        type="number"
        value={Number.isNaN(count) ? '' : count}
      />

      <Typography gutterBottom sx={{ mt: 6 }} variant="h5">
        그렇다면 {fibonaChicken(count)}마리를 시키거라
      </Typography>
      <Typography variant="h5">
        능히 {count || 0}명을 먹이는데 부족함이 없느니라.
      </Typography>
    </>
  );
};

export default Client;
