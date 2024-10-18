import { useState } from 'react';
import Stack from '@mui/material/Stack';

import CommandCopy from '@/components/CommandCopy';
import TimeInput from '@/components/TimeInput';

import type { DefaultCommandProps } from '../logic';

const Trim = ({ command, input, output }: DefaultCommandProps) => {
  const [ss, setSS] = useState('00:00:00');
  const [to, setTO] = useState('00:00:00');

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-ss': ss,
        '-to': to,
        '-c': 'copy',
        '': `"${output}"`,
      }}
      label="동영상 자르기"
    >
      <Stack direction="row" spacing={5} sx={{ mb: 1 }}>
        <TimeInput
          label="시작시간"
          value={ss}
          type="time"
          onChange={(e, v) => setSS(v)}
        />
        <TimeInput
          label="종료시간"
          value={to}
          type="time"
          onChange={(e, v) => setTO(v)}
        />
      </Stack>
    </CommandCopy>
  );
};

export default Trim;
