'use client';
import Input from '@mui/material/Input';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const M3u8Download = ({ command, output }: DefaultCommandProps) => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <CommandCopy
      args={{
        '-i': `"${url}"`,
        '-c': 'copy',
        '-bsf:a': 'aac_adtstoasc',
        '': `"${output}"`,
      }}
      command={command}
      label="m3u8 다운로드"
    >
      <Input
        fullWidth
        onChange={handleUrlChange}
        placeholder="미디어 주소"
        sx={{ mb: 1 }}
        value={url}
      />
    </CommandCopy>
  );
};

export default M3u8Download;
