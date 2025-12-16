'use client';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Scale = ({ command, input, output }: DefaultCommandProps) => {
  const [width, setWidth] = useState(-1);
  const [height, setHeight] = useState(720);

  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-c:a': 'copy',
        '-vf': `"scale=${width || 0}:${height || 0}"`,
        '': `"${output}"`,
      }}
      command={command}
      label="크기 조정"
    >
      <Stack sx={{ mb: 1 }}>
        <FormLabel sx={{ fontSize: 14 }}>크기</FormLabel>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Input
            onChange={(e) => setWidth(Number.parseFloat(e.target.value))}
            placeholder="가로"
            slotProps={{ input: { inputMode: 'numeric' } }}
            sx={{ width: '80px' }}
            type="number"
            value={Number.isNaN(width) ? '' : width}
          />
          <span>:</span>
          <Input
            onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
            placeholder="세로"
            slotProps={{ input: { inputMode: 'numeric' } }}
            sx={{ width: '80px' }}
            type="number"
            value={Number.isNaN(height) ? '' : height}
          />
        </Stack>
      </Stack>
    </CommandCopy>
  );
};

export default Scale;
