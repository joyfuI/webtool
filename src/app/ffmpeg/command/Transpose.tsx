import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';
import Radio from '@/components/Radio';

import type { DefaultCommandProps } from '../logic';

const Transpose = ({ command, input, output }: DefaultCommandProps) => {
  const [transpose, setTranspose] = useState('transpose=2');

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-c:a': 'copy',
        '-vf': `"${transpose}"`,
        '': `"${output}"`,
      }}
      label="동영상 회전"
    >
      <Radio
        name="transpose"
        options={[
          { value: 'transpose=1', label: '90도' },
          { value: 'transpose=0', label: '90도/좌우반전' },
          { value: 'transpose=1,transpose=1', label: '180도' },
          { value: 'transpose=0,transpose=1', label: '180도/좌우반전' },
          { value: 'transpose=2', label: '270도' },
          { value: 'transpose=3', label: '270도/좌우반전' },
        ]}
        value={transpose.toString()}
        onChange={(e, v) => setTranspose(v)}
        sx={{
          mb: 1,
          overflowX: 'auto',
          '& .MuiFormGroup-root': {
            flexWrap: 'nowrap',
            '& .MuiFormControlLabel-label': { whiteSpace: 'nowrap' },
          },
        }}
      />
    </CommandCopy>
  );
};

export default Transpose;
