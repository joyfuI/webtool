'use client';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import { parseAsString, useQueryState } from 'nuqs';

import useHash from '@/hooks/useHash';

import Audio from './command/Audio';
import Download from './command/Download';
import Generate from './command/Generate';
import Recommended from './command/Recommended';
import Video from './command/Video';
import Videoaudio from './command/Videoaudio';

const command = '.\\ffmpeg';

const Client = () => {
  const [input, setInput] = useQueryState(
    'input',
    parseAsString.withDefault('input.ts'),
  );
  const [output, setOutput] = useQueryState(
    'output',
    parseAsString.withDefault('output.mp4'),
  );
  const [tab, setTab] = useHash();

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          autoFocus
          fullWidth
          label="변환할 파일명"
          onChange={(e) => setInput(e.target.value)}
          slotProps={{ inputLabel: { shrink: true } }}
          value={input}
        />
        <TextField
          fullWidth
          label="변환된 파일명"
          onChange={(e) => setOutput(e.target.value)}
          slotProps={{ inputLabel: { shrink: true } }}
          value={output}
        />
      </Stack>

      <TabContext value={tab || 'download'}>
        <Box sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(_e, v) => setTab(v)}>
            <Tab label="다운로드" value="download" />
            <Tab label="동영상" value="videoaudio" />
            <Tab label="비디오" value="video" />
            <Tab label="오디오" value="audio" />
            <Tab label="생성" value="generate" />
          </TabList>
        </Box>
        <Download command={command} input={input} output={output} />
        <Videoaudio command={command} input={input} output={output} />
        <Video command={command} input={input} output={output} />
        <Audio command={command} input={input} output={output} />
        <Generate command={command} input={input} output={output} />
      </TabContext>

      <ButtonGroup
        sx={{ width: '100%', my: 3, justifyContent: 'center' }}
        variant="outlined"
      >
        <Button
          href="https://ffmpeg.org/ffmpeg.html"
          rel="noreferrer"
          target="_blank"
        >
          ffmpeg 문서
        </Button>
        <Button
          href="https://ffmpeg.org/ffmpeg-filters.html"
          rel="noreferrer"
          target="_blank"
        >
          ffmpeg 필터 문서
        </Button>
      </ButtonGroup>

      <Recommended command={command} input={input} output={output} />
    </>
  );
};

export default Client;
