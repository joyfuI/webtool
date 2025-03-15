'use client';
import TextField from '@mui/material/TextField';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { useMemo } from 'react';
import type { ChangeEvent } from 'react';

import Radio from '@/components/Radio';
import Table from '@/components/Table';

import cardData from './cardData';
import { getRow } from './logic';

const Client = () => {
  const [amount, setAmount] = useQueryState(
    'amount',
    parseAsInteger.withDefault(0),
  );
  const [industry, setIndustry] = useQueryState(
    'industry',
    parseAsString.withDefault('기타'),
  );

  const rows = useMemo(
    () =>
      cardData
        .map((card) => getRow(card, { amount, industry }))
        .toSorted((a, b) => b.reward - a.reward),
    [amount, industry],
  );

  const handleChange = (_e: ChangeEvent<HTMLInputElement>, value: string) => {
    setIndustry(value);
  };

  return (
    <>
      <TextField
        value={Number.isNaN(amount) ? '' : amount}
        label="금액"
        type="number"
        slotProps={{
          htmlInput: { min: 0, step: 100, inputMode: 'numeric' },
          inputLabel: { shrink: true },
        }}
        fullWidth
        autoFocus
        onChange={(e) => {
          const num = Number.parseInt(e.target.value);
          setAmount(num);
        }}
      />

      <Radio
        name="industry"
        label="업종"
        options={[
          { value: '음식점', label: '음식점' },
          { value: '편의점', label: '편의점' },
          { value: '패스트푸드', label: '패스트푸드' },
          { value: '카페', label: '카페' },
          { value: '오픈마켓', label: '오픈마켓' },
          { value: '대형마트', label: '대형마트' },
          { value: '전기요금', label: '전기요금' },
          { value: '가스요금', label: '가스요금' },
          { value: '해외', label: '해외' },
          { value: '상품권', label: '상품권' },
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
