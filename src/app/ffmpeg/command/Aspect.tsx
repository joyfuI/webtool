import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../logic';

const Aspect = ({ command, input, output }: DefaultCommandProps) => {
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(9);

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-c': 'copy',
        '-aspect': `${width || 1}:${height || 1}`,
        '': `"${output}"`,
      }}
      label="화면비 조정"
    >
      <Box sx={{ mb: 1 }}>
        <FormLabel sx={{ fontSize: 14 }}>화면비</FormLabel>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Input
            value={Number.isNaN(width) ? '' : width}
            type="number"
            placeholder="가로"
            slotProps={{ input: { min: 1, inputMode: 'numeric' } }}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            sx={{ width: '50px' }}
          />
          <span>:</span>
          <Input
            value={Number.isNaN(height) ? '' : height}
            type="number"
            placeholder="세로"
            slotProps={{ input: { min: 1, inputMode: 'numeric' } }}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            sx={{ width: '50px' }}
          />
        </Stack>
      </Box>
    </CommandCopy>
  );
};

export default Aspect;
