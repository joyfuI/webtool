import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CommandCopy from '@/components/CommandCopy';

import { useToggle } from '@/hooks';

import type { DefaultCommandProps } from '../../logic';

const Concat = ({ command, output }: DefaultCommandProps) => {
  const [files, setFiles] = useState('');
  const [sameCodec, toggleSameCodec] = useToggle(true);

  const list = files.split('\n');

  return (
    <CommandCopy
      command={command}
      args={
        sameCodec ?
          {
            '-i': `"concat:${list.join('|')}"`,
            '-c': 'copy',
            '': `"${output}"`,
          }
        : {
            '-i': `"${list.join('" -i "')}"`,
            '-filter_complex': `"${list.map((v, i) => `[${i}:v:0][${i}:a:0]`).join('')}concat=n=${list.length}:v=1:a=1[outv][outa]"`,
            '-map': '"[outv]" -map "[outa]"',
            '': `"${output}"`,
          }
      }
      label="동영상 합치기"
    >
      <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ mb: 1 }}>
        <Input
          value={files}
          placeholder="파일 목록"
          rows={3}
          multiline
          fullWidth
          onChange={(e) => {
            setFiles(e.target.value);
          }}
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
