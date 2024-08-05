'use client';
import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Table from '@/components/Table';

import { getRow } from './logic';
import type { Card } from './logic';

import cardData from './cardData.json';

const Home = () => {
  const [amount, setAmount] = useState(0);

  const rows = useMemo(
    () =>
      cardData
        .map((card) => getRow(amount, card as Card))
        .toSorted((a, b) => b.raw - a.raw),
    [amount],
  );

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      sx={{
        '& .MuiTextField-root': { my: 1 },
      }}
    >
      <TextField
        value={amount}
        label="금액"
        type="number"
        inputProps={{ min: 0, step: 100 }}
        InputLabelProps={{ shrink: true }}
        fullWidth
        required
        autoFocus
        onChange={(e) => {
          const num = parseInt(e.target.value);
          setAmount(num);
        }}
      />

      <Table
        columns={[
          { field: 'name', headerName: '카드이름' },
          { field: 'reward', headerName: '혜택' },
          { field: 'picking', headerName: '피킹률' },
          { field: 'limit', headerName: '최대 혜택 실적' },
          {
            field: 'note',
            headerName: '비고',
            sx: { minWidth: '250px', whiteSpace: 'normal' },
          },
        ]}
        rows={rows}
        sx={{ mt: 3 }}
      />
    </Box>
  );
};

export default Home;
