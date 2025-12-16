'use client';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { decode, encode } from './logic';

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
      if (e instanceof DOMException) {
        setError(e.message);
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
        <Button onClick={handleClick(encode)} variant="contained">
          인코딩
        </Button>
        <Button onClick={handleClick(decode)} variant="contained">
          디코딩
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
