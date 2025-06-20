'use client';
import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Color = ({ command, output }: DefaultCommandProps) => {
  const [color, setColor] = useState('0x4d1a7f');
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  const [second, setSecond] = useState<number>();

  return (
    <CommandCopy
      args={{
        '-t': `${second || 0}`,
        '-f': 'lavfi',
        '-i': `"color=c=${color}"`,
        '-s': `${width || 0}x${height || 0}`,
        '-r': '30',
        '-c:v': 'libx264',
        '-crf': '31',
        '': `"${output}"`,
      }}
      command={command}
      label="단색 컬러"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5 }}
        sx={{ mb: 1, alignItems: 'flex-end' }}
      >
        <Stack>
          <FormLabel sx={{ fontSize: 14 }}>색</FormLabel>
          <Input
            onChange={(e) => setColor(e.target.value.replace('#', '0x'))}
            sx={{ width: '30px' }}
            type="color"
            value={color.replace('0x', '#')}
          />
        </Stack>
        <Stack>
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
        <Stack>
          <FormLabel sx={{ fontSize: 14 }}>길이</FormLabel>
          <Input
            onChange={(e) => setSecond(Number.parseFloat(e.target.value))}
            placeholder="초"
            slotProps={{ input: { inputMode: 'numeric' } }}
            sx={{ width: '50px' }}
            type="number"
            value={Number.isNaN(second) || second === undefined ? '' : second}
          />
        </Stack>
      </Stack>
    </CommandCopy>
  );
};

export default Color;
