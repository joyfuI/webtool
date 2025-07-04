'use client';
import { useCallback, useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { blueGrey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { parseAsIsoDate, useQueryState } from 'nuqs';

import Table from '@/components/Table';
import type theme from '@/theme';

import {
  EVENT_LIST,
  formatDistanceYear,
  getAge,
  getKoreanAge,
  getYearAge,
  range,
  toDateString,
} from './logic';

const Client = () => {
  const [date, setDate] = useQueryState(
    'date',
    parseAsIsoDate.withDefault(new Date(1997, 0, 5)),
  );

  const rows = useMemo(() => {
    const year = date.getFullYear();
    const todayYear = new Date().getFullYear();
    return range(100).map((_v, i) => ({
      year: `${year + i}년`,
      age: `${i + 1}세`,
      event: EVENT_LIST.get(i + 1),
      diff: formatDistanceYear(year - todayYear + i),
    }));
  }, [date]);

  const style = useCallback(
    (t: typeof theme) => {
      const year = date.getFullYear();
      const todayYear = new Date().getFullYear();
      const i = todayYear - year + 1;
      return {
        [`& .MuiTableBody-root > .MuiTableRow-root:nth-child(${i})`]: {
          bgcolor: blueGrey[50],
          ...t.applyStyles('dark', { bgcolor: blueGrey[900] }),
        },
      };
    },
    [date],
  );

  return (
    <>
      <TextField
        autoFocus
        fullWidth
        label="생년월일"
        onChange={(e) => {
          setDate(e.target.value ? new Date(e.target.value) : new Date());
        }}
        slotProps={{ inputLabel: { shrink: true } }}
        type="date"
        value={toDateString(date)}
      />

      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 3, justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Card sx={{ minWidth: 170 }}>
          <CardContent>
            <Typography sx={{ mb: 1 }} variant="h5">
              만 나이
            </Typography>
            <Typography variant="body1">{getAge(date)}세</Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 170 }}>
          <CardContent>
            <Typography sx={{ mb: 1 }} variant="h5">
              세는나이
              <Typography sx={{ mb: 1 }} variant="caption">
                {' '}
                (한국나이)
              </Typography>
            </Typography>
            <Typography variant="body1">{getKoreanAge(date)}세</Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 170 }}>
          <CardContent>
            <Typography sx={{ mb: 1 }} variant="h5">
              연 나이
            </Typography>
            <Typography variant="body1">{getYearAge(date)}세</Typography>
          </CardContent>
        </Card>
      </Stack>

      <Typography sx={{ display: 'inline-block', mt: 5 }} variant="caption">
        * 나이는 세는나이 기준이며, 빠른생일/조기입학/입학유예 등은 고려하지
        않음
      </Typography>
      <Table
        columns={[
          { field: 'year', headerName: '연도' },
          { field: 'age', headerName: '세는나이' },
          { field: 'event', headerName: '이벤트' },
          { field: 'diff', headerName: '비교' },
        ]}
        rows={rows}
        sx={style}
      />
    </>
  );
};

export default Client;
