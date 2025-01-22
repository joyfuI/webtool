import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const AudioExtraction = ({ command, input, output }: DefaultCommandProps) => {
  const [codec, setCodec] = useState('mp3');

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-vn': '',
        ...{
          mp3: {
            '-acodec': 'libmp3lame',
            '-ar': '44.1k',
            '-ac': '2',
            '-ab': '192k',
          },
          aac: { '-c:a': 'copy' },
        }[codec],
        '': `"${output.replace(/\.\w+$/, `.${codec}`)}"`,
      }}
      label="오디오 추출"
    >
      <Select
        value={codec}
        variant="standard"
        onChange={(e) => {
          setCodec(e.target.value);
        }}
        sx={{ mb: 1 }}
      >
        <MenuItem value="mp3">MP3</MenuItem>
        <MenuItem value="aac">AAC</MenuItem>
      </Select>
    </CommandCopy>
  );
};

export default AudioExtraction;
