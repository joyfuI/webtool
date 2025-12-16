'use client';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import useToggle from '@/hooks/useToggle';

import type { DefaultCommandProps } from '../../logic';

const Timestretch = ({ command, input, output }: DefaultCommandProps) => {
  const [speed, setSpeed] = useState(0.5);
  const [keepPitch, toggleKeepPitch] = useToggle(true);

  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-filter_complex': `"[0:v]setpts=${speed ? 1 / speed : 0}*PTS[v];[0:a]rubberband=tempo=${speed}:pitch=${keepPitch ? 1 : speed}[a]"`,
        '-map': '"[v]" -map "[a]"',
        '': `"${output}"`,
      }}
      command={command}
      label="속도 조절"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5 }}
        sx={{ mb: 1, alignItems: 'flex-end' }}
      >
        <Stack>
          <FormLabel sx={{ fontSize: 14 }}>배속</FormLabel>
          <Input
            onChange={(e) => setSpeed(Number.parseFloat(e.target.value))}
            slotProps={{ input: { min: 0.1, step: 0.1, inputMode: 'numeric' } }}
            sx={{ width: '60px' }}
            type="number"
            value={Number.isNaN(speed) ? '' : speed}
          />
        </Stack>
        <FormControlLabel
          checked={keepPitch}
          control={<Checkbox onChange={toggleKeepPitch} />}
          label="피치 유지"
        />
      </Stack>
    </CommandCopy>
  );
};

export default Timestretch;
