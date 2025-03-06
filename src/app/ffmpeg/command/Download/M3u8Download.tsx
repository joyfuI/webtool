'use client';
import { useState } from 'react';
import Input from '@mui/material/Input';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const M3u8Download = ({ command, output }: DefaultCommandProps) => {
  const [url, setUrl] = useState('');

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${url}"`,
        '-c': 'copy',
        '-bsf:a': 'aac_adtstoasc',
        '': `"${output}"`,
      }}
      label="m3u8 다운로드"
    >
      <Input
        value={url}
        placeholder="미디어 주소"
        fullWidth
        onChange={(e) => setUrl(e.target.value)}
        sx={{ mb: 1 }}
      />
    </CommandCopy>
  );
};

export default M3u8Download;
