'use client';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import Download from './command/Download';
import Trim from './command/Trim';
import Mp3Extraction from './command/Mp3Extraction';
import Copy from './command/Copy';
import AudioRemove from './command/AudioRemove';
import Aspect from './command/Aspect';
import Transpose from './command/Transpose';

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
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <TextField
          value={output}
          label="변환된 파일명"
          slotProps={{ inputLabel: { shrink: true } }}
          fullWidth
          onChange={(e) => {
            setOutput(e.target.value);
          }}
        />
      </Stack>

      <Stack spacing={3} sx={{ mt: 3 }}>
        <Download command={command} input={input} output={output} />
        <Trim command={command} input={input} output={output} />
        <Mp3Extraction command={command} input={input} output={output} />
        <Copy command={command} input={input} output={output} />
        <AudioRemove command={command} input={input} output={output} />
        <Aspect command={command} input={input} output={output} />
        <Transpose command={command} input={input} output={output} />
      </Stack>
    </>
  );
};

export default Client;
