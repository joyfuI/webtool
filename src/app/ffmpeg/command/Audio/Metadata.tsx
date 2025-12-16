'use client';
import Input from '@mui/material/Input';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import { extensionRegex } from '@/utils/regex';

import type { DefaultCommandProps } from '../../logic';

const Metadata = ({ command, input, output }: DefaultCommandProps) => {
  const [metadata, setMetadata] = useState('metadata.mp3');

  return (
    <CommandCopy
      args={{
        '-i': `"${input.replace(extensionRegex, '.mp3')}" -i "${metadata}"`,
        '-c': 'copy',
        '-map': '0 -map 1:1',
        '-map_metadata': '1',
        '-id3v2_version': '3',
        '': `"${output.replace(extensionRegex, '.mp3')}"`,
      }}
      command={command}
      label="mp3 메타데이터 복사"
    >
      <Input
        fullWidth
        onChange={(e) => setMetadata(e.target.value)}
        placeholder="mp3 메타데이터"
        sx={{ mb: 1 }}
        value={metadata}
      />
    </CommandCopy>
  );
};

export default Metadata;
