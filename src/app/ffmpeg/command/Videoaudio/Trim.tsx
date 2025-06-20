'use client';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import CommandCopy from '@/components/CommandCopy';
import TimeInput from '@/components/TimeInput';
import useToggle from '@/hooks/useToggle';

import type { DefaultCommandProps } from '../../logic';

const Trim = ({ command, input, output }: DefaultCommandProps) => {
  const [ss, setSS] = useState('00:00:00');
  const [to, setTO] = useState('00:00:00');
  const [t, setT] = useState('00:00:00');
  const [distance, toggleDistance] = useToggle(false);

  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-c': 'copy',
        '-ss': ss,
        [distance ? '-t' : '-to']: distance ? t : to,
        '': `"${output}"`,
      }}
      command={command}
      label="동영상 자르기"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5 }}
        sx={{ mb: 1 }}
      >
        <TimeInput
          label="시작시간"
          onChange={(_e, v) => setSS(v)}
          type="time"
          value={ss}
        />
        <Stack
          direction="row"
          sx={{ alignItems: 'flex-end', overflowX: 'auto' }}
        >
          <TimeInput
            disabled={distance}
            label="종료시간"
            onChange={(_e, v) => setTO(v)}
            type="time"
            value={to}
          />
          <Switch
            checked={distance}
            color="default"
            onChange={toggleDistance}
          />
          <TimeInput
            disabled={!distance}
            label="구간길이"
            onChange={(_e, v) => setT(v)}
            type="time"
            value={t}
          />
        </Stack>
      </Stack>
    </CommandCopy>
  );
};

export default Trim;
