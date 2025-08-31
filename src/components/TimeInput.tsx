'use client';
import type { ChangeEvent, ReactNode, Ref } from 'react';
import { useEffect, useState } from 'react';
import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import type { InputProps } from '@mui/material/Input';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';

import type theme from '@/theme';

export type TimeInputProps = {
  ref?: Ref<HTMLDivElement>;
  label?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  sx?: SxProps<typeof theme>;
} & Omit<InputProps, 'onChange'>;

const TimeInput = ({
  ref,
  label,
  value,
  defaultValue,
  onChange,
  sx,
  ...props
}: TimeInputProps) => {
  const [time, setTime] = useState(
    defaultValue
      ?.split(':')
      .slice(0, 3)
      .map((item) => {
        const num = Number.parseInt(item, 10);
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
            const num = Number.parseInt(item, 10);
            return Number.isNaN(num) ? undefined : num;
          }),
      );
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextTime = [...time];
    const num = Number.parseInt(e.target.value, 10);
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
    <Box ref={ref} sx={sx}>
      {label ? <FormLabel sx={{ fontSize: 14 }}>{label}</FormLabel> : null}
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Input
          {...props}
          name="hour"
          onChange={handleChange}
          placeholder="시"
          slotProps={{ input: { min: 0, inputMode: 'numeric' } }}
          sx={{ width: '40px' }}
          type="number"
          value={time[0] ?? ''}
        />
        <span>:</span>
        <Input
          {...props}
          name="minute"
          onChange={handleChange}
          placeholder="분"
          slotProps={{ input: { min: 0, max: 59, inputMode: 'numeric' } }}
          sx={{ width: '40px' }}
          type="number"
          value={time[1] ?? ''}
        />
        <span>:</span>
        <Input
          {...props}
          name="second"
          onChange={handleChange}
          placeholder="초"
          slotProps={{ input: { min: 0, max: 59, inputMode: 'numeric' } }}
          sx={{ width: '40px' }}
          type="number"
          value={time[2] ?? ''}
        />
      </Stack>
    </Box>
  );
};

export default TimeInput;
