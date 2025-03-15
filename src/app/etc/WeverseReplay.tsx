'use client';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import KeyboardDoubleArrowIcon from '@/components/KeyboardDoubleArrowIcon';

import copyText from '@/utils/copyText';

import { response } from './logic';

const Client = () => {
  const [playInfo, setPlayInfo] = useState('');

  const m3u8 = useMemo(() => response(playInfo), [playInfo]);

  return (
    <CommandCopy
      command=".\aria2c"
      args={{
        '': `"${m3u8}"`,
      }}
      label="위버스 다운로드 (REPLAY)"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ alignItems: 'center' }}
      >
        <Typography noWrap sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" onClick={() => copyText('playInfo')}>
            playInfo
          </Button>
          응답 복사 후
          <Button
            color="inherit"
            onClick={() =>
              navigator.clipboard
                .readText()
                .then((clipText) => setPlayInfo(clipText))
            }
          >
            붙여넣기
          </Button>
        </Typography>
        <KeyboardDoubleArrowIcon />
        <TextField
          value={playInfo}
          variant="standard"
          rows={1}
          multiline
          onChange={(e) => setPlayInfo(e.target.value)}
          sx={{ width: '200px' }}
        />
      </Stack>
    </CommandCopy>
  );
};

export default Client;
