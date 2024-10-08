'use client';
import { useState, useEffect, useMemo } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import CheckboxGroup from '@/components/CheckboxGroup';
import Radio from '@/components/Radio';
import Table from '@/components/Table';

import {
  toDateString,
  addDays,
  differenceInBusinessDays,
  getNarasarang,
  getPass,
  getClimate,
  getKPass,
} from './logic';

const Client = () => {
  const [date, setDate] = useState(() => new Date());
  const [amount, setAmount] = useState(1700);
  const [count, setCount] = useState(0);
  const [climateOption, setClimateOption] = useState(['youth']);
  const [kPassOption, setKPassOption] = useState('youth');

  const endDate = addDays(date, 30);
  const businessDay = differenceInBusinessDays(date, endDate);

  useEffect(() => {
    setCount(businessDay * 2);
  }, [businessDay]);

  const rows = useMemo(() => {
    const narasarang = getNarasarang(amount, count);
    const pass = getPass(amount, count);
    const climate = getClimate(amount, count, climateOption);
    const kPass = getKPass(amount, count, kPassOption);

    return [
      {
        head: '충전금액',
        narasarang: '후불교통',
        pass: '61,600원',
        climate: `${climate.actualAmount.toLocaleString()}원`,
        kPass: '후불교통',
      },
      {
        head: '사용기간',
        narasarang: '후불교통',
        pass: '사용개시일부터 30일 / 횟수 60회',
        climate: '사용개시일부터 30일 / 횟수 무제한',
        kPass: '후불교통',
      },
      {
        head: '사용구간',
        narasarang: '교통카드',
        pass: (
          <>
            서울 내 지하철
            <br />* 구간 외 하차 시 경계역부터 20km마다
            <br />
            1회씩 추가 차감, 구간 외 승차 불가
          </>
        ),
        climate: (
          <>
            서울 내 지하철·전철 / 버스(시내, 마을, 심야)
            {climateOption.includes('bikeseoul') ?
              <>
                <br />/ 따릉이(2시간권)
              </>
            : null}
            <br />* 구간 외 사용 불가
          </>
        ),
        kPass: '교통카드',
      },
      {
        head: '실질금액',
        narasarang: `${narasarang.actualAmount.toLocaleString()}원`,
        pass:
          pass.actualAmount !== undefined ?
            `${pass.actualAmount.toLocaleString()}원`
          : '-',
        climate: `${climate.actualAmount.toLocaleString()}원`,
        kPass: `${kPass.actualAmount.toLocaleString()}원`,
      },
      {
        head: '이득',
        narasarang: `${narasarang.gain.toLocaleString()}원`,
        pass: pass.gain !== undefined ? `${pass.gain.toLocaleString()}원` : '-',
        climate: `${climate.gain.toLocaleString()}원`,
        kPass: `${kPass.gain.toLocaleString()}원`,
      },
    ];
  }, [amount, count, climateOption, kPassOption]);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <TextField
          value={toDateString(date)}
          label="시작일"
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          autoFocus
          onChange={(e) => {
            setDate(e.target.value ? new Date(e.target.value) : new Date());
          }}
        />
        <TextField
          value={toDateString(endDate)}
          label="종료일"
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          disabled
        />
        <Typography sx={{ whiteSpace: 'nowrap' }}>
          영업일
          <br />
          {businessDay}일
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <TextField
          value={amount}
          label="1회 이용요금"
          type="number"
          slotProps={{
            htmlInput: { min: 0, step: 100, inputmode: 'numeric' },
            inputLabel: { shrink: true },
          }}
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
          sx={{ maxWidth: '130px' }}
        />
        <TextField
          value={count}
          label="이용횟수"
          type="number"
          slotProps={{
            htmlInput: { min: 0, inputmode: 'numeric' },
            inputLabel: { shrink: true },
          }}
          onChange={(e) => {
            setCount(parseInt(e.target.value));
          }}
          sx={{ maxWidth: '130px' }}
        />
        <Typography sx={{ whiteSpace: 'nowrap' }}>
          금액
          <br />
          {(amount * count).toLocaleString()}원
        </Typography>
      </Stack>

      <CheckboxGroup
        label="기후동행카드"
        options={[
          { value: 'youth', label: '청년할인(19~39세)' },
          { value: 'bikeseoul', label: '따릉이' },
        ]}
        value={climateOption}
        onChange={(e, value) => setClimateOption(value)}
      />

      <Radio
        name="kPass"
        label="K-패스"
        options={[
          { value: 'common', label: '일반' },
          { value: 'youth', label: '청년(19~34세)' },
          { value: 'lowIncome', label: '저소득(기초생활수급자/차상위계층)' },
        ]}
        value={kPassOption}
        onChange={(e, value) => setKPassOption(value)}
      />

      <Table
        columns={[
          { field: 'head', align: 'center', variant: 'head' },
          { field: 'narasarang', headerName: '나라사랑카드', align: 'center' },
          { field: 'pass', headerName: '서울전용 정기권', align: 'center' },
          {
            field: 'climate',
            headerName: '기후동행카드',
            align: 'center',
          },
          { field: 'kPass', headerName: 'K-패스', align: 'center' },
        ]}
        rows={rows}
        sx={{ mt: 3 }}
      />
    </>
  );
};

export default Client;
