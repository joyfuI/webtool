'use client';
import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Aspect = ({ command, input, output }: DefaultCommandProps) => {
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(9);

  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-c': 'copy',
        '-aspect': `${width || 1}:${height || 1}`,
        '': `"${output}"`,
      }}
      command={command}
      label="화면비 조정"
    >
      <Stack sx={{ mb: 1 }}>
        <FormLabel sx={{ fontSize: 14 }}>화면비</FormLabel>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Input
            onChange={(e) => setWidth(Number.parseFloat(e.target.value))}
            placeholder="가로"
            slotProps={{ input: { min: 1, inputMode: 'numeric' } }}
            sx={{ width: '50px' }}
            type="number"
            value={Number.isNaN(width) ? '' : width}
          />
          <span>:</span>
          <Input
            onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
            placeholder="세로"
            slotProps={{ input: { min: 1, inputMode: 'numeric' } }}
            sx={{ width: '50px' }}
            type="number"
            value={Number.isNaN(height) ? '' : height}
          />
        </Stack>
      </Stack>
    </CommandCopy>
  );
};

export default Aspect;
