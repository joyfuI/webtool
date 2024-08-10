'use client';
import { useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

import Radio from '@/components/Radio';
import Table from '@/components/Table';

import { getRow } from './logic';

import cardData from './cardData';

const Client = () => {
  const [amount, setAmount] = useState(0);
  const [industry, setIndustry] = useState('기타');

  const rows = useMemo(
    () =>
      cardData
        .map((card) => getRow(card, { amount, industry }))
        .toSorted((a, b) => b.reward - a.reward),
    [amount, industry],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    setIndustry(value);
  };

  return (
    <>
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

      <Radio
        name="industry"
        options={[
          { value: '음식점', label: '음식점' },
          { value: '편의점', label: '편의점' },
          { value: '대중교통', label: '대중교통' },
          { value: '기타', label: '기타' },
        ]}
        value={industry}
        onChange={handleChange}
      />

      <Table
        columns={[
          { field: 'name', headerName: '카드이름' },
          { field: 'rewardStr', headerName: '혜택' },
          { field: 'picking', headerName: '피킹률' },
          { field: 'limit', headerName: '최대 혜택 금액' },
          {
            field: 'note',
            headerName: '비고',
            sx: { minWidth: '250px', whiteSpace: 'normal' },
          },
        ]}
        rows={rows}
        sx={{ mt: 3 }}
      />
    </>
  );
};

export default Client;
