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
import { useEffect, useState } from 'react';

import HiddenInput from '@/components/HiddenInput';
import useHash from '@/hooks/useHash';
import copyText from '@/utils/copyText';

import { digestFile, digestText } from './logic';

const ALGORITHMS = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'] as const;
type Algorithm = (typeof ALGORITHMS)[number];

const initHashValue = () =>
  ALGORITHMS.reduce(
    (prev, curr) => {
      prev[curr] = '';
      return prev;
    },
    {} as Record<Algorithm, string>,
  );

const Client = () => {
  const [fileValue, setFileValue] = useState<File>();
  const [textValue, setTextValue] = useState('');
  const [hashValue, setHashValue] =
    useState<Record<Algorithm, string>>(initHashValue);
  const [tab, setTab] = useHash();

  const activeTab = tab || 'file';

  useEffect(() => {
    let cancelled = false;

    const calculate = async () => {
      try {
        const hashs = await Promise.all(
          ALGORITHMS.map(async (algorithm) => {
            if (activeTab === 'file') {
              return [
                algorithm,
                fileValue ? await digestFile(algorithm, fileValue) : '',
              ] as const;
            }
            if (activeTab === 'text') {
              return [
                algorithm,
                textValue !== '' ? await digestText(algorithm, textValue) : '',
              ] as const;
            }
            return [algorithm, ''] as const;
          }),
        );

        if (!cancelled) {
          setHashValue(Object.fromEntries(hashs) as Record<Algorithm, string>);
        }
      } catch {
        if (!cancelled) {
          setHashValue(initHashValue());
        }
      }
    };

    calculate();
    return () => {
      cancelled = true;
    };
  }, [activeTab, fileValue, textValue]);

  return (
    <>
      <TabContext value={activeTab}>
        <Box sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={(_e, v) => {
              setTab(v);
              setFileValue(undefined);
              setTextValue('');
            }}
          >
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
        {ALGORITHMS.map((algorithm) => (
          <TextField
            fullWidth
            key={algorithm}
            label={algorithm}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => copyText(hashValue[algorithm] ?? '')}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: true,
              },
            }}
            value={hashValue[algorithm] ?? ''}
            variant="outlined"
          />
        ))}
      </Stack>
    </>
  );
};

export default Client;
