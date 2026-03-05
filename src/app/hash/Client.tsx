'use client';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import HiddenInput from '@/components/HiddenInput';
import useHash from '@/hooks/useHash';
import copyText from '@/utils/copyText';

import { digestFile, digestText } from './logic';

const Client = () => {
  const [fileValue, setFileValue] = useState<File>();
  const [textValue, setTextValue] = useState('');
  const [tab, setTab] = useHash();

  const digest = (algorithm: string) =>
    (
      ({
        file: () => (fileValue ? digestFile(algorithm, fileValue) : ''),
        text: () => digestText(algorithm, textValue),
      })[tab || 'file'] as () => string
    )() ?? '';

  const hashValue = {
    'SHA-1': digest('SHA-1'),
    'SHA-256': digest('SHA-256'),
    'SHA-384': digest('SHA-384'),
    'SHA-512': digest('SHA-512'),
  };

  return (
    <>
      <TabContext value={tab || 'file'}>
        <Box sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(_e, v) => setTab(v)}>
            <Tab label="파일" value="file" />
            <Tab label="텍스트" value="text" />
          </TabList>
        </Box>
        <TabPanel value="file">
          <Button
            component="label"
            startIcon={<FileOpenIcon />}
            tabIndex={-1}
            variant="contained"
          >
            파일 선택
            <HiddenInput
              onChange={(e) => setFileValue(e.target.files?.[0])}
              type="file"
            />
          </Button>
        </TabPanel>
        <TabPanel value="text">
          <TextField
            fullWidth
            onChange={(e) => setTextValue(e.target.value)}
            variant="outlined"
          />
        </TabPanel>
      </TabContext>
      <Divider sx={{ my: 3 }} />

      <Stack spacing={3}>
        <TextField
          fullWidth
          label="SHA-1"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyText(hashValue['SHA-1'])}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
              readOnly: true,
            },
          }}
          value={hashValue['SHA-1']}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="SHA-256"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyText(hashValue['SHA-256'])}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
              readOnly: true,
            },
          }}
          value={digest('SHA-256')}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="SHA-384"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyText(hashValue['SHA-384'])}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
              readOnly: true,
            },
          }}
          value={digest('SHA-384')}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="SHA-512"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyText(hashValue['SHA-512'])}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
              readOnly: true,
            },
          }}
          value={digest('SHA-512')}
          variant="outlined"
        />
      </Stack>
    </>
  );
};

export default Client;
