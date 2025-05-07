'use client';
import Input from '@mui/material/Input';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Metadata = ({ command, input, output }: DefaultCommandProps) => {
  const [metadata, setMetadata] = useState('metadata.mp3');

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input.replace(/\.\w+$/, '.mp3')}" -i "${metadata}"`,
        '-c': 'copy',
        '-map': '0 -map 1:1',
        '-map_metadata': '1',
        '-id3v2_version': '3',
        '': `"${output.replace(/\.\w+$/, '.mp3')}"`,
      }}
      label="mp3 메타데이터 복사"
    >
      <Input
        value={metadata}
        placeholder="mp3 메타데이터"
        fullWidth
        onChange={(e) => setMetadata(e.target.value)}
        sx={{ mb: 1 }}
      />
    </CommandCopy>
  );
};

export default Metadata;
