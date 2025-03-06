'use client';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Merge = ({ command, output }: DefaultCommandProps) => {
  const [video, setVideo] = useState('input.mp4');
  const [audio, setAudio] = useState('input.m4a');

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${video}" -i "${audio}"`,
        '-c:v': 'copy',
        '-c:a': 'copy',
        '': `"${output}"`,
      }}
      label="비디오+오디오 합치기"
    >
      <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
        <Input
          value={video}
          placeholder="비디오 파일"
          fullWidth
          onChange={(e) => setVideo(e.target.value)}
        />
        <Input
          value={audio}
          placeholder="오디오 파일"
          fullWidth
          onChange={(e) => setAudio(e.target.value)}
        />
      </Stack>
    </CommandCopy>
  );
};

export default Merge;
