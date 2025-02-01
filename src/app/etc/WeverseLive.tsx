'use client';
import { useState, useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      command={`.\\yt-dlp`} // 이렇게 안 하면 역슬래시가 이중으로 넘어감
      args={{
        ...(authorization ?
          { '--add-headers': `"Authorization:${authorization}"` }
        : {}),
        '': `"${m3u8}"`,
      }}
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
          value={playInfo}
          variant="standard"
          rows={1}
          multiline
          onChange={(e) => setPlayInfo(e.target.value)}
          sx={{ width: '200px' }}
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
          value={m3u8}
          variant="standard"
          onChange={(e) => setM3u8(e.target.value)}
          sx={{ width: '200px' }}
        />
      </Stack>
    </CommandCopy>
  );
};

export default Client;
