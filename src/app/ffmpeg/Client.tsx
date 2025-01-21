'use client';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import Download from './command/Download';
import Trim from './command/Trim';
import AudioExtraction from './command/AudioExtraction';
import Copy from './command/Copy';
import AudioRemove from './command/AudioRemove';
import Aspect from './command/Aspect';
import Transpose from './command/Transpose';
import Reverse from './command/Reverse';
import Concat from './command/Concat';
import VideoAudio from './command/VideoAudio';
import Recommended from './command/Recommended';

const command = '.\\ffmpeg';

const Client = () => {
  const [input, setInput] = useState('input.ts');
  const [output, setOutput] = useState('output.mp4');

  return (
    <>
      <Stack direction="row" spacing={2}>
        <TextField
          value={input}
          label="변환할 파일명"
          slotProps={{ inputLabel: { shrink: true } }}
          fullWidth
          autoFocus
          onChange={(e) => setInput(e.target.value)}
        />
        <TextField
          value={output}
          label="변환된 파일명"
          slotProps={{ inputLabel: { shrink: true } }}
          fullWidth
          onChange={(e) => setOutput(e.target.value)}
        />
      </Stack>

      <Stack spacing={3} sx={{ mt: 3 }}>
        <Download command={command} input={input} output={output} />
        <Trim command={command} input={input} output={output} />
        <AudioExtraction command={command} input={input} output={output} />
        <Copy command={command} input={input} output={output} />
        <AudioRemove command={command} input={input} output={output} />
        <Aspect command={command} input={input} output={output} />
        <Transpose command={command} input={input} output={output} />
        <Reverse command={command} input={input} output={output} />
        <Concat command={command} input={input} output={output} />
        <VideoAudio command={command} input={input} output={output} />

        <ButtonGroup variant="outlined" sx={{ justifyContent: 'center' }}>
          <Button
            href="https://ffmpeg.org/ffmpeg.html"
            target="_blank"
            rel="noreferrer"
          >
            ffmpeg 문서
          </Button>
          <Button
            href="https://ffmpeg.org/ffmpeg-filters.html"
            target="_blank"
            rel="noreferrer"
          >
            ffmpeg 필터 문서
          </Button>
        </ButtonGroup>

        <Recommended command={command} input={input} output={output} />
      </Stack>
    </>
  );
};

export default Client;
