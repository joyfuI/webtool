import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';

import Div from '@/components/Div';
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
        '-aspect': `${width}:${height}`,
        '': `"${output}"`,
      }}
      label="비디오 화면비 조정"
    >
      <Div sx={{ mb: 1 }}>
        <FormLabel sx={{ fontSize: 14 }}>화면비</FormLabel>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Input
            value={width}
            type="number"
            placeholder="가로"
            slotProps={{ input: { min: 0, inputMode: 'numeric' } }}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            sx={{ width: '50px' }}
          />
          <span>:</span>
          <Input
            value={height}
            type="number"
            placeholder="세로"
            slotProps={{ input: { min: 0, inputMode: 'numeric' } }}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            sx={{ width: '50px' }}
          />
        </Stack>
      </Div>
    </CommandCopy>
  );
};

export default Aspect;
