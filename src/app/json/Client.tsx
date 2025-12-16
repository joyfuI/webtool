'use client';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { errorMessageRegex } from '@/utils/regex';

import { formatJson, minifyJson } from './logic';

const Client = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setError('');
    setValue(e.target.value);
  };

  const handleClick = (func: (str: string) => string) => () => {
    try {
      setError('');
      setValue(func(value));
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError(e.message.replace(errorMessageRegex, ''));
      } else {
        throw e;
      }
    }
  };

  return (
    <>
      <Stack
        direction="row"
        divider={<Divider flexItem orientation="vertical" />}
        spacing={2}
        sx={{ mb: 1, justifyContent: 'center' }}
      >
        <Button onClick={handleClick(formatJson)} variant="contained">
          포매팅
        </Button>
        <Button onClick={handleClick(minifyJson)} variant="contained">
          압축
        </Button>
      </Stack>

      <TextField
        autoFocus
        error={!!error}
        fullWidth
        helperText={error}
        minRows={15}
        multiline
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

export default Client;
