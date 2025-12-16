'use client';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Stitch = ({ command, output }: DefaultCommandProps) => {
  const [video1, setVideo1] = useState('input1.mp4');
  const [video2, setVideo2] = useState('input2.mp4');

  return (
    <CommandCopy
      args={{
        '-i': `"${video1}" -i "${video2}"`,
        '-filter_complex':
          '"[0:v]pad=iw+iw:ih[v1];[v1][1:v]overlay=overlay_w:0[vid]"',
        '-an': '',
        '-map': '"[vid]"',
        '-c:v': 'libx264',
        '-crf': '23',
        '-preset': 'slow',
        '': `"${output}"`,
      }}
      command={command}
      label="두 개 나란히 배치"
    >
      <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
        <Input
          fullWidth
          onChange={(e) => setVideo1(e.target.value)}
          placeholder="첫번째 동영상 파일"
          value={video1}
        />
        <Input
          fullWidth
          onChange={(e) => setVideo2(e.target.value)}
          placeholder="두번째 동영상 파일"
          value={video2}
        />
      </Stack>
    </CommandCopy>
  );
};

export default Stitch;
