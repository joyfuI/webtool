import { useState, useEffect, forwardRef } from 'react';
import type { Ref, ReactNode, ChangeEvent } from 'react';
import type { SxProps } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import type { InputProps } from '@mui/material/Input';

import Div from './Div';

import type theme from '@/theme';

export type TimeInputProps = {
  label?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  sx?: SxProps<typeof theme>;
} & Omit<InputProps, 'onChange'>;

const TimeInput = (
  { label, value, defaultValue, onChange, sx, ...props }: TimeInputProps,
  ref: Ref<HTMLDivElement>,
) => {
  const [time, setTime] = useState(
    defaultValue
      ?.split(':')
      .slice(0, 3)
      .map((item) => {
        const num = parseInt(item);
        return Number.isNaN(num) ? undefined : num;
      }) ?? [0, 0, 0],
  );

  useEffect(() => {
    if (value) {
      setTime(
        value
          .split(':')
          .slice(0, 3)
          .map((item) => {
            const num = parseInt(item);
            return Number.isNaN(num) ? undefined : num;
          }),
      );
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextTime = [...time];
    const num = parseInt(e.target.value);
    switch (e.target.name) {
      case 'hour':
        nextTime[0] = Number.isNaN(num) ? undefined : num;
        break;

      case 'minute':
        nextTime[1] = Number.isNaN(num) ? undefined : num;
        break;

      case 'second':
        nextTime[2] = Number.isNaN(num) ? undefined : num;
        break;
    }
    onChange?.(
      e,
      nextTime.map((item) => (item ?? 0).toString().padStart(2, '0')).join(':'),
    );
  };

  return (
    <Div ref={ref} sx={sx}>
      {label ?
        <FormLabel sx={{ fontSize: 14 }}>{label}</FormLabel>
      : null}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Input
          {...props}
          name="hour"
          value={time[0] ?? ''}
          type="number"
          placeholder="시"
          slotProps={{ input: { min: 0, inputMode: 'numeric' } }}
          onChange={handleChange}
          sx={{ width: '40px' }}
        />
        <span>:</span>
        <Input
          {...props}
          name="minute"
          value={time[1] ?? ''}
          type="number"
          placeholder="분"
          slotProps={{ input: { min: 0, max: 59, inputMode: 'numeric' } }}
          onChange={handleChange}
          sx={{ width: '40px' }}
        />
        <span>:</span>
        <Input
          {...props}
          name="second"
          value={time[2] ?? ''}
          type="number"
          placeholder="초"
          slotProps={{ input: { min: 0, max: 59, inputMode: 'numeric' } }}
          onChange={handleChange}
          sx={{ width: '40px' }}
        />
      </Stack>
    </Div>
  );
};

export default forwardRef(TimeInput);
