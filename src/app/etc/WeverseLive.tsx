'use client';
import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import CommandCopy from '@/components/CommandCopy';
import KeyboardDoubleArrowIcon from '@/components/KeyboardDoubleArrowIcon';
import copyText from '@/utils/copyText';

import { requestHeader } from './logic';

const Client = () => {
  const [playInfo, setPlayInfo] = useState('');
  const [m3u8, setM3u8] = useState('');

  const { authorization } = useMemo(() => requestHeader(playInfo), [playInfo]);

  return (
    <CommandCopy
      args={{
        ...(authorization
          ? { '--add-headers': `"Authorization:${authorization}"` }
          : {}),
        '': `"${m3u8}"`,
      }}
      command=".\yt-dlp"
      label="위버스 다운로드 (LIVE)"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ alignItems: 'center' }}
      >
        <Typography noWrap sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" onClick={() => copyText('playInfo')}>
            playInfo
          </Button>
          요청 헤더 복사 후
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
          multiline
          onChange={(e) => setPlayInfo(e.target.value)}
          rows={1}
          sx={{ width: '200px' }}
          value={playInfo}
          variant="standard"
        />
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ alignItems: 'center' }}
      >
        <Typography noWrap sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" onClick={() => copyText('playlist.m3u8')}>
            playlist.m3u8
          </Button>
          URL 복사 후
          <Button
            color="inherit"
            onClick={() =>
              navigator.clipboard
                .readText()
                .then((clipText) => setM3u8(clipText))
            }
          >
            붙여넣기
          </Button>
        </Typography>
        <KeyboardDoubleArrowIcon />
        <TextField
          onChange={(e) => setM3u8(e.target.value)}
          sx={{ width: '200px' }}
          value={m3u8}
          variant="standard"
        />
      </Stack>
    </CommandCopy>
  );
};

export default Client;
