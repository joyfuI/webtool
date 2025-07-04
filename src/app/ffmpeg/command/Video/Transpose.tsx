'use client';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import Radio from '@/components/Radio';

import type { DefaultCommandProps } from '../../logic';

const Transpose = ({ command, input, output }: DefaultCommandProps) => {
  const [transpose, setTranspose] = useState('transpose=2');

  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-c:a': 'copy',
        '-vf': `"${transpose}"`,
        '': `"${output}"`,
      }}
      command={command}
      label="화면 회전"
    >
      <Radio
        name="transpose"
        onChange={(_e, v) => setTranspose(v)}
        options={[
          { value: 'transpose=1', label: '90도' },
          { value: 'transpose=0', label: '90도/좌우반전' },
          { value: 'transpose=1,transpose=1', label: '180도' },
          { value: 'transpose=0,transpose=1', label: '180도/좌우반전' },
          { value: 'transpose=2', label: '270도' },
          { value: 'transpose=3', label: '270도/좌우반전' },
        ]}
        sx={{
          mb: 1,
          overflowX: 'auto',
          '& .MuiFormGroup-root': {
            flexWrap: 'nowrap',
            '& .MuiFormControlLabel-label': { whiteSpace: 'nowrap' },
          },
        }}
        value={transpose.toString()}
      />
    </CommandCopy>
  );
};

export default Transpose;
