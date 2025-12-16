'use client';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from 'nuqs';
import { useMemo } from 'react';

import CheckboxGroup from '@/components/CheckboxGroup';
import Radio from '@/components/Radio';
import Table from '@/components/Table';

import {
  addDays,
  differenceInBusinessDays,
  getClimate,
  getKPass,
  getNarasarang,
  getPass,
  toDateString,
} from './logic';

const Client = () => {
  const [date, setDate] = useQueryState(
    'date',
    parseAsString.withDefault(toDateString(new Date())),
  );
  const [amount, setAmount] = useQueryState(
    'amount',
    parseAsInteger.withDefault(1700),
  );
  const [climateOption, setClimateOption] = useQueryState(
    'climate',
    parseAsArrayOf(parseAsString).withDefault(['youth']),
  );
  const [kPassOption, setKPassOption] = useQueryState(
    'kpass',
    parseAsString.withDefault('youth'),
  );

  const day = date ? new Date(date) : new Date();
  const endDate = addDays(day, 29);
  const businessDay = differenceInBusinessDays(day, endDate);
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(businessDay * 2),
  );

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
            {climateOption.includes('bikeseoul') ? (
              <>
                <br />/ 따릉이(2시간권)
              </>
            ) : null}
            <br />* 구간 외 사용 불가
          </>
        ),
        kPass: '교통카드',
      },
      {
        head: '실질금액',
        narasarang: `${narasarang.actualAmount.toLocaleString()}원`,
        pass:
          pass.actualAmount !== undefined
            ? `${pass.actualAmount.toLocaleString()}원`
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
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <TextField
          autoFocus
          label="시작일"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          slotProps={{ inputLabel: { shrink: true } }}
          type="date"
          value={date}
        />
        <TextField
          disabled
          label="종료일"
          slotProps={{ inputLabel: { shrink: true } }}
          type="date"
          value={toDateString(endDate)}
        />
        <Typography sx={{ whiteSpace: 'nowrap' }}>
          영업일
          <br />
          {businessDay}일
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <TextField
          label="1회 이용요금"
          onChange={(e) => {
            setAmount(Number.parseInt(e.target.value, 10));
          }}
          slotProps={{
            htmlInput: { min: 0, step: 100, inputMode: 'numeric' },
            inputLabel: { shrink: true },
          }}
          sx={{ maxWidth: '130px' }}
          type="number"
          value={Number.isNaN(amount) ? '' : amount}
        />
        <TextField
          label="이용횟수"
          onChange={(e) => {
            setCount(Number.parseInt(e.target.value, 10));
          }}
          slotProps={{
            htmlInput: { min: 0, inputMode: 'numeric' },
            inputLabel: { shrink: true },
          }}
          sx={{ maxWidth: '130px' }}
          type="number"
          value={Number.isNaN(count) ? '' : count}
        />
        <Typography sx={{ whiteSpace: 'nowrap' }}>
          금액
          <br />
          {(amount * count || 0).toLocaleString()}원
        </Typography>
      </Stack>

      <CheckboxGroup
        label="기후동행카드"
        onChange={(_e, value) => setClimateOption(value)}
        options={[
          { value: 'youth', label: '청년할인(19~39세)' },
          { value: 'bikeseoul', label: '따릉이' },
        ]}
        value={climateOption}
      />

      <Radio
        label="K-패스"
        name="kPass"
        onChange={(_e, value) => setKPassOption(value)}
        options={[
          { value: 'common', label: '일반' },
          { value: 'youth', label: '청년(19~34세)' },
          { value: 'lowIncome', label: '저소득(기초생활수급자/차상위계층)' },
        ]}
        value={kPassOption}
      />

      <Table
        columns={[
          { field: 'head', align: 'center', variant: 'head' },
          { field: 'narasarang', headerName: '나라사랑카드', align: 'center' },
          { field: 'pass', headerName: '서울전용 정기권', align: 'center' },
          { field: 'climate', headerName: '기후동행카드', align: 'center' },
          { field: 'kPass', headerName: 'K-패스', align: 'center' },
        ]}
        rows={rows}
        sx={{ mt: 3 }}
      />
    </>
  );
};

export default Client;
