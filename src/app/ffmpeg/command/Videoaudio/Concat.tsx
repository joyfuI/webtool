'use client';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import useToggle from '@/hooks/useToggle';

import type { DefaultCommandProps } from '../../logic';

const Concat = ({ command, output }: DefaultCommandProps) => {
  const [files, setFiles] = useState('');
  const [sameCodec, toggleSameCodec] = useToggle(true);

  const list = files.split('\n');

  return (
    <CommandCopy
      args={
        sameCodec
          ? {
              '-i': `"concat:${list.join('|')}"`,
              '-c': 'copy',
              '': `"${output}"`,
            }
          : {
              '-i': `"${list.join('" -i "')}"`,
              '-filter_complex': `"${list
                .map((_v, i) => `[${i}:v:0][${i}:a:0]`)
                .join('')}concat=n=${list.length}:v=1:a=1[outv][outa]"`,
              '-map': '"[outv]" -map "[outa]"',
              '': `"${output}"`,
            }
      }
      command={command}
      label="이어붙이기"
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ mb: 1, alignItems: 'flex-start' }}
      >
        <Input
          fullWidth
          multiline
          onChange={(e) => {
            setFiles(e.target.value);
          }}
          placeholder="파일 목록"
          rows={3}
          value={files}
        />
        <FormControlLabel
          checked={sameCodec}
          control={<Checkbox onChange={toggleSameCodec} />}
          label="동일코덱"
          labelPlacement="top"
          sx={{ whiteSpace: 'nowrap' }}
        />
      </Stack>
    </CommandCopy>
  );
};

export default Concat;
