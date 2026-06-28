'use client';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import KeyboardDoubleArrowIcon from '@/components/KeyboardDoubleArrowIcon';
import copyText from '@/utils/copyText';

import { response } from './logic';

const Client = () => {
  const [playInfo, setPlayInfo] = useState('');

  const m3u8 = useMemo(() => response(playInfo), [playInfo]);

  const handleCopyClick = () => {
    copyText('playInfo');
  };

  const handlePasteClick = () => {
    navigator.clipboard.readText().then((clipText) => setPlayInfo(clipText));
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPlayInfo(e.target.value);
  };

  return (
    <CommandCopy
      args={{ '': `"${m3u8}"` }}
      command=".\aria2c"
      label="위버스 다운로드 (REPLAY)"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ alignItems: 'center' }}
      >
        <Typography noWrap sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" onClick={handleCopyClick}>
            playInfo
          </Button>
          응답 복사 후
          <Button color="inherit" onClick={handlePasteClick}>
            붙여넣기
          </Button>
        </Typography>
        <KeyboardDoubleArrowIcon />
        <TextField
          multiline
          onChange={handleChange}
          rows={1}
          sx={{ width: '200px' }}
          value={playInfo}
          variant="standard"
        />
      </Stack>
    </CommandCopy>
  );
};

export default Client;
