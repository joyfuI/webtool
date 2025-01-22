'use client';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import { useHash } from '@/hooks';

import Download from './command/Download';
import Videoaudio from './command/Videoaudio';
import Video from './command/Video';
import Audio from './command/Audio';
import Recommended from './command/Recommended';

const command = '.\\ffmpeg';

const Client = () => {
  const [input, setInput] = useState('input.ts');
  const [output, setOutput] = useState('output.mp4');
  const [tab, setTab] = useHash();

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
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

      <TabContext value={tab || 'download'}>
        <Box sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(e, v) => setTab(v)}>
            <Tab label="다운로드" value="download" />
            <Tab label="동영상" value="videoaudio" />
            <Tab label="비디오" value="video" />
            <Tab label="오디오" value="audio" />
          </TabList>
        </Box>
        <Download command={command} input={input} output={output} />
        <Videoaudio command={command} input={input} output={output} />
        <Video command={command} input={input} output={output} />
        <Audio command={command} input={input} output={output} />
      </TabContext>

      <Stack spacing={3} sx={{ mt: 3 }}>
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
