'use client';
import Input from '@mui/material/Input';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Sync = ({ command, input, output }: DefaultCommandProps) => {
  const [itsoffset, setItsoffset] = useState<number>();

  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-itsoffset': `${itsoffset || 0} -i "${input}"`,
        '-map': '0:v -map 1:a',
        '': `"${output}"`,
      }}
      command={command}
      label="싱크 조절"
    >
      <Input
        name="second"
        onChange={(e) => setItsoffset(Number.parseFloat(e.target.value))}
        placeholder="초"
        slotProps={{ input: { inputMode: 'numeric' } }}
        sx={{ width: '70px', mb: 1 }}
        type="number"
        value={
          Number.isNaN(itsoffset) || itsoffset === undefined ? '' : itsoffset
        }
      />
    </CommandCopy>
  );
};

export default Sync;
