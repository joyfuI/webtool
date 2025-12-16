'use client';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import { extensionRegex } from '@/utils/regex';

import type { DefaultCommandProps } from '../../logic';

const AudioExtraction = ({ command, input, output }: DefaultCommandProps) => {
  const [codec, setCodec] = useState('mp3');

  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        ...{
          mp3: { '-map': '0:a', '-f': 'mp3' },
          aac: { '-vn': '', '-c:a': 'copy' },
        }[codec],
        '': `"${output.replace(extensionRegex, `.${codec}`)}"`,
      }}
      command={command}
      label="오디오 추출"
    >
      <Select
        onChange={(e) => {
          setCodec(e.target.value);
        }}
        sx={{ mb: 1 }}
        value={codec}
        variant="standard"
      >
        <MenuItem value="mp3">MP3</MenuItem>
        <MenuItem value="aac">AAC</MenuItem>
      </Select>
    </CommandCopy>
  );
};

export default AudioExtraction;
