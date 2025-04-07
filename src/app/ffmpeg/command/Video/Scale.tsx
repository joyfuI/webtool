'use client';
import Box from '@mui/material/Box';
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
      command={command}
      args={{
        '-i': `"${input}"`,
        '-c:a': 'copy',
        '-vf': `"scale=${width || 0}:${height || 0}"`,
        '': `"${output}"`,
      }}
      label="크기 조정"
    >
      <Box sx={{ mb: 1 }}>
        <FormLabel sx={{ fontSize: 14 }}>크기</FormLabel>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Input
            value={Number.isNaN(width) ? '' : width}
            type="number"
            placeholder="가로"
            slotProps={{ input: { inputMode: 'numeric' } }}
            onChange={(e) => setWidth(Number.parseFloat(e.target.value))}
            sx={{ width: '80px' }}
          />
          <span>:</span>
          <Input
            value={Number.isNaN(height) ? '' : height}
            type="number"
            placeholder="세로"
            slotProps={{ input: { inputMode: 'numeric' } }}
            onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
            sx={{ width: '80px' }}
          />
        </Stack>
      </Box>
    </CommandCopy>
  );
};

export default Scale;
