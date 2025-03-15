'use client';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import type { ChangeEvent } from 'react';

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
        setError(e.message.replace(/^.*:\s*/, ''));
      }
    }
  };

  return (
    <>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ mb: 1, justifyContent: 'center' }}
      >
        <Button variant="contained" onClick={handleClick(formatJson)}>
          포매팅
        </Button>
        <Button variant="contained" onClick={handleClick(minifyJson)}>
          압축
        </Button>
      </Stack>

      <TextField
        value={value}
        minRows={15}
        helperText={error}
        error={!!error}
        multiline
        fullWidth
        autoFocus
        onChange={handleChange}
      />
    </>
  );
};

export default Client;
