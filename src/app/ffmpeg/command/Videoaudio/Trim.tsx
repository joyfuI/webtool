import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import CommandCopy from '@/components/CommandCopy';
import TimeInput from '@/components/TimeInput';

import { useToggle } from '@/hooks';

import type { DefaultCommandProps } from '../../logic';

const Trim = ({ command, input, output }: DefaultCommandProps) => {
  const [ss, setSS] = useState('00:00:00');
  const [to, setTO] = useState('00:00:00');
  const [t, setT] = useState('00:00:00');
  const [distance, toggleDistance] = useToggle(false);

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-c': 'copy',
        '-ss': ss,
        [distance ? '-t' : '-to']: distance ? t : to,
        '': `"${output}"`,
      }}
      label="동영상 자르기"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5 }}
        sx={{ mb: 1 }}
      >
        <TimeInput
          label="시작시간"
          value={ss}
          type="time"
          onChange={(e, v) => setSS(v)}
        />
        <Stack
          direction="row"
          sx={{ alignItems: 'flex-end', overflowX: 'auto' }}
        >
          <TimeInput
            label="종료시간"
            value={to}
            type="time"
            disabled={distance}
            onChange={(e, v) => setTO(v)}
          />
          <Switch
            checked={distance}
            color="default"
            onChange={toggleDistance}
          />
          <TimeInput
            label="구간길이"
            value={t}
            type="time"
            disabled={!distance}
            onChange={(e, v) => setT(v)}
          />
        </Stack>
      </Stack>
    </CommandCopy>
  );
};

export default Trim;
