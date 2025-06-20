'use client';
import { useState } from 'react';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Merge = ({ command, output }: DefaultCommandProps) => {
  const [video, setVideo] = useState('input.mp4');
  const [audio, setAudio] = useState('input.m4a');

  return (
    <CommandCopy
      args={{
        '-i': `"${video}" -i "${audio}"`,
        '-c:v': 'copy',
        '-c:a': 'copy',
        '': `"${output}"`,
      }}
      command={command}
      label="비디오+오디오 합치기"
    >
      <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
        <Input
          fullWidth
          onChange={(e) => setVideo(e.target.value)}
          placeholder="비디오 파일"
          value={video}
        />
        <Input
          fullWidth
          onChange={(e) => setAudio(e.target.value)}
          placeholder="오디오 파일"
          value={audio}
        />
      </Stack>
    </CommandCopy>
  );
};

export default Merge;
